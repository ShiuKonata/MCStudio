# 🔍 五步分類流程執行分析

## 📊 當前狀況

| 項目 | 狀態 | 說明 |
|------|------|------|
| **Workflow STEP 1-5** | ❌ 不完整 | classifyVideos 函數缺少官方 API 標誌 |
| **detail.js STEP 1-5** | ✅ 完整 | loadUnclassifiedYear 函數有完整邏輯 |
| **未分類區顯示** | ❌ 空 | 因為 data.js 的 unclassified: [] 為空 |
| **測試影片檢測** | ❌ 未執行 | 三個影片（ENI3YCbU468、tYvq7Q6prns、o45tQSU0kdY）未出現 |

---

## 🔴 Workflow 的關鍵缺陷

### **缺陷 1：STEP 1 - 直播存檔檢測（第 128-134 行）**

**當前實現（關鍵字匹配）**：
```javascript
if (vId === 'shiucoda') {
  if (titleLower.includes('直播') || titleLower.includes('archive') || titleLower.includes('livestream')) {
    return; // 跳過此影片
  }
}
```

**問題**：
- ❌ 只依靠關鍵字「直播」、「archive」、「livestream」
- ❌ **違反用戶要求**："只依靠YouTube API官方標誌（isLiveContent、isShorts）"
- ❌ 容易誤判：有些直播存檔標題不含這些關鍵字
- ❌ 缺少 isLiveContent 和 wasLive 官方標誌的檢查

**應該的實現**：
```javascript
// 1. 調用 YouTube API videos.list 獲取 isLiveContent
const videoUrl = `https://www.googleapis.com/youtube/v3/videos`
  + `?part=contentDetails,snippet,liveStreamingDetails`
  + `&id=${videoIds.join(',')}`
  + `&key=${API_KEY}`;

// 2. 檢查官方標誌而非關鍵字
if (item.snippet.liveBroadcastContent !== 'none' || wasLive) {
  return; // STEP 1 排除
}
```

---

### **缺陷 2：STEP 4 - 短片檢測（完全缺失）**

**當前實現**：
- ❌ **完全沒有 STEP 4 邏輯**
- ❌ classifyVideos 函數中沒有檢查 duration
- ❌ 沒有調用 videos.list API 獲取 duration 字段

**應該的實現**：
```javascript
// 需要在 fetchAndClassifyVideos 後添加 videos.list API 調用
// 獲取所有影片的 duration 信息
const videoDetails = await getVideoDetails(videoIds);

// 然後在 classifyVideos 中檢查
if (videoDetails[vid].duration <= 60) {
  classified.shorts.push({...}); // STEP 4
}
```

**影響**：
- ❌ 無法檢測 ≤60秒的 Shorts
- ❌ 缺少 shorts 陣列（data.js 應該有）

---

### **缺陷 3：去重邏輯缺失（第 286-301 行）**

**當前實現**：
```javascript
if (videos.covers.length > 0 || videos.originals.length > 0 || videos.unclassified.length > 0) {
  const videosJson = JSON.stringify(videos, null, 2);
  const pattern = new RegExp(`...`);
  if (pattern.test(dataContent)) {
    dataContent = dataContent.replace(pattern, `$1${videosJson}`);
    // ⚠️ 直接替換整個 videos 欄位
  }
}
```

**問題**：
- ❌ **全量替換而非增量更新** - 會覆蓋已有影片
- ❌ 沒有去重檢查 - 相同影片可能重複記錄
- ❌ 沒有讀取 data.js 中的現有影片 ID
- ❌ Workflow 每 4 天輪流一次，會導致重複

**應該的實現**：
```javascript
// 1. 讀取 data.js 中現有影片 ID
const existingIds = new Set();
const videosMatch = dataContent.match(new RegExp(`id:\\s*["']${vId}["'][\\s\\S]*?videos:\\s*(\\{[\\s\\S]*?\\}|\\[\\])`));
if (videosMatch && videosMatch[1]) {
  const existingVideos = JSON.parse(videosMatch[1]);
  // 提取所有現有 ID
  [existingVideos.covers || [], ...].forEach(v => existingIds.add(v.id));
}

// 2. 過濾掉已有的影片
const newVideos = {
  covers: videos.covers.filter(v => !existingIds.has(v.id)),
  originals: videos.originals.filter(v => !existingIds.has(v.id)),
  // ...
};

// 3. 合併而非替換
if (newVideos.covers.length > 0 || newVideos.originals.length > 0 || ...) {
  // 讀取現有結構，追加新影片，然後替換
}
```

---

### **缺陷 4：缺少 videos.list API 調用**

**關鍵問題**：

Workflow 目前的 API 調用：
```
✅ playlistItems API（獲取 UU 播放列表）
  ↓
❌ 缺少 videos.list API（獲取 duration、isLiveContent、wasLive）
```

**fetchAndClassifyVideos 函數（第 235-277 行）**：
```javascript
async function fetchAndClassifyVideos(vId, channelId) {
  const uploadsId = 'UU' + channelId.substring(2);
  const playlistUrl = `https://www.googleapis.com/youtube/v3/playlistItems?...`;
  
  https.get(playlistUrl, options, (res) => {
    // ...獲取 playlistItems
    const videos = classifyVideos(vId, result.items);
    // ❌ classifyVideos 無法獲取 duration、isLiveContent 等
  });
}
```

**應該的實現**：
```javascript
async function fetchAndClassifyVideos(vId, channelId) {
  // 1. 獲取 playlistItems
  const items = await getPlaylistItems(uploadsId);
  
  // 2. 提取視頻 ID
  const videoIds = items.map(i => i.snippet.resourceId.videoId);
  
  // 3. 調用 videos.list 獲取詳細信息
  const videoDetails = await getVideoDetails(videoIds);
  
  // 4. 將詳細信息與 items 合併
  const enrichedItems = items.map((item, idx) => ({
    ...item,
    duration: videoDetails[item.snippet.resourceId.videoId].duration,
    isLiveContent: videoDetails[item.snippet.resourceId.videoId].isLiveContent,
    wasLive: videoDetails[item.snippet.resourceId.videoId].wasLive
  }));
  
  // 5. 傳給 classifyVideos 進行分類
  const videos = classifyVideos(vId, enrichedItems);
}
```

---

## ✅ detail.js 的正確實現（對比）

### **detail.js 有完整的五步邏輯**

**STEP 1 - 直播存檔檢測（第 1936-1948 行）**：
```javascript
// 方法 1：UULV 播放列表
if (liveVideoIds.has(vid)) {
  continue; // 過濾掉
}
// 方法 2：備用 - 官方標誌
if (d.liveContent !== 'none') {
  continue; // 過濾掉
}
```
✅ 使用了官方標誌 `liveContent` 和 UULV 播放列表

**STEP 2 - Cover/Original 檢測（第 1972-2031 行）**：
```javascript
if (titleLower.includes('cover') || titleLower.includes('歌ってみた')) {
  // 添加到 covers
}
if (titleLower.includes('original') || titleLower.includes('official') || titleLower.includes('原創')) {
  // 添加到 originals
}
```
✅ 有完整的關鍵字檢測

**STEP 3 - 詗雨蔻達特殊規則（第 2033-2088 行）**：
```javascript
if (v.id === 'shiucoda') {
  if (titleLower.includes('demo') || titleLower.includes('自彈自唱')) {
    // 添加到 covers（STEP 3）
  }
}
```
✅ 有詗雨蔻達特殊邏輯

**STEP 4 - 短片檢測（第 2090-2104 行）**：
```javascript
if (d.duration <= 60) {
  if (!shortsVideoIds.has(vid)) {
    console.log(`📍 [STEP 4] 檢測到短片（≤60秒），不在 Shorts 區，應添加`);
  }
}
```
✅ 有 STEP 4 檢測

**STEP 5 - 未分類區（第 2107-2108 行）**：
```javascript
renderUncCard(container, item, d.duration); // 顯示在未分類區
```
✅ 將未被分類的影片放入未分類區

---

## 🎯 問題的根本原因

### **為什麼三個測試影片沒有出現在未分類區？**

```
流程 1：Workflow 後端分類（應該自動將新影片添加到 data.js）
  ❌ 有缺陷，無法正確執行五步分類
  ❌ 導致新影片無法添加到 data.js

流程 2：detail.js 客戶端分類（應該從 YouTube API 抓取並顯示未分類影片）
  ✅ 邏輯完整，但前提是 YouTube API 能返回這些影片
  ❌ 但只有在用戶打開未分類區時才執行
  ❌ 而且這三個影片是否在 UU 播放列表的最新 50 部中還未知
```

### **測試影片的發佈日期**

1. ENI3YCbU468：2026/02/26
2. tYvq7Q6prns：2026/02/14
3. o45tQSU0kdY：2024/12/13

→ 最新的是 2/26，已經超過 4 個月，可能不在 playlistItems 的前 50 部中

---

## 📋 應該執行的五步流程（正確版本）

```
輸入：YouTube API UU 播放列表的所有影片

STEP 1：排除直播存檔
  ├─ 檢查 UULV 播放列表（直接排除）
  └─ 檢查 isLiveContent === 'live' 或 wasLive === true（官方標誌）
  → 過濾掉的影片被遺棄

STEP 2：檢測 Cover / Original / Official
  ├─ 檢查標題是否包含「cover」、「歌ってみた」→ covers
  ├─ 檢查標題是否包含「original」、「official」、「原創」→ originals
  └─ 檢查標題是否包含「官方」等 → officials
  → 檢測到的影片添加到對應陣列

STEP 3：詗雨蔻達特殊規則（只限詗雨蔻達）
  ├─ 標題含「demo」→ covers
  └─ 標題含「自彈自唱」→ covers
  → 特殊規則檢測到的影片添加到對應陣列

STEP 4：檢測短片（≤60秒）
  ├─ 檢查 duration <= 60
  └─ 如不在 UUSH 播放列表中，應添加到 shorts
  → Shorts 影片添加到對應陣列

STEP 5：未分類影片
  └─ 上述 STEP 1-4 都未匹配的影片
  → 添加到 unclassified

輸出：分類後的影片
  {
    covers: [...],
    originals: [...],
    officials: [...],
    shorts: [...],
    unclassified: [...]
  }
```

---

## 🔧 需要修復的地方

| 優先級 | 位置 | 問題 | 修復難度 |
|------|------|------|--------|
| 🔴 高 | Workflow L128-134 | STEP 1 缺官方 API 標誌 | 中 |
| 🔴 高 | Workflow L106-168 | 缺 STEP 4（無 duration） | 中 |
| 🔴 高 | Workflow L235-277 | 缺 videos.list API 調用 | 中 |
| 🔴 高 | Workflow L286-301 | 缺去重邏輯 | 高 |
| 🟠 中 | data.js L43-100 | unclassified 陣列應為空 | 低 |
| 🟢 低 | detail.js | 客戶端分類邏輯完整，無需修改 | - |

---

## 📊 驗證計劃

### **驗證 1：測試三個影片是否能被檢測**

```javascript
// 在 detail.js 中測試
const testVideos = [
  'ENI3YCbU468',  // 【3周年紀念】統美眉 (2026/02/26)
  'tYvq7Q6prns',  // 這是什麼好玩遊戲 (2026/02/14)
  'o45tQSU0kdY'   // COCOCO玉山我要上來囉 (2024/12/13)
];

// 檢查這些影片是否在 UU 播放列表的最新 50 部中
// 檢查這些影片是否被五步分類邏輯檢測
// 檢查最後是否出現在未分類區
```

### **驗證 2：Workflow 流程檢驗**

在下次 Workflow 運行時，檢查：
1. ✅ 是否調用了 playlistItems API
2. ❌ 是否調用了 videos.list API（目前沒有）
3. ❌ 是否對新影片進行了去重（目前沒有）
4. ❌ 是否將新影片添加到了對應的陣列（缺 STEP 4）

---

## 📌 總結

| 環節 | 當前狀態 | 需要修復 |
|-----|--------|--------|
| **Workflow STEP 1** | ❌ 只有關鍵字檢測 | ✅ 添加官方 API 標誌 |
| **Workflow STEP 4** | ❌ 完全缺失 | ✅ 添加 duration 檢測 |
| **Workflow videos.list** | ❌ 完全缺失 | ✅ 添加 API 調用 |
| **Workflow 去重** | ❌ 完全缺失 | ✅ 添加去重邏輯 |
| **detail.js STEP 1-5** | ✅ 完整 | - |
| **未分類區顯示** | ❌ 需依賴 Workflow | ✅ 需修復 Workflow |

**根本問題**：Workflow 的 classifyVideos 函數沒有實現完整的五步分類邏輯。
