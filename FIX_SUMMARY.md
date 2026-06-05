# 🔧 Workflow 五步分類邏輯修復方案

## 📋 問題總結

根據對 Workflow 代碼的詳細分析，確認了**為什麼五步分類沒有被正確執行**：

### 🔴 四個關鍵缺陷

| # | 缺陷 | 位置 | 影響 | 修復狀態 |
|---|------|------|------|--------|
| **1** | STEP 1 只用關鍵字而非官方 API 標誌 | L128-134 | 無法準確排除直播存檔 | ✅ 已修復 |
| **2** | STEP 4 完全缺失（無 duration 檢測） | L106-168 | 無法檢測短片（Shorts） | ✅ 已修復 |
| **3** | 缺少 videos.list API 調用 | L235-277 | 無法獲取官方標誌和 duration | ✅ 已修復 |
| **4** | 缺少去重邏輯 | L286-301 | 會重複添加已有影片 | ✅ 已修復 |

---

## 🔍 詳細分析

### **缺陷 1：STEP 1 - 直播存檔檢測的方式錯誤**

**❌ 原實現（關鍵字匹配）**：
```javascript
// L128-134
if (vId === 'shiucoda') {
  if (titleLower.includes('直播') || titleLower.includes('archive') || titleLower.includes('livestream')) {
    return; // 跳過此影片
  }
}
```

**問題**：
- 只依靠標題中的關鍵字「直播」、「archive」、「livestream」
- 很多直播存檔的標題不含這些關鍵字，會被誤判為普通影片
- 違反用戶要求："只依靠YouTube API官方標誌（isLiveContent、isShorts）"

**✅ 修復方案**：
```javascript
// 使用官方 API 標誌判斷
if (detail.liveContent !== 'none' || detail.wasLive) {
  return; // STEP 1 排除直播存檔
}
```

- `liveContent`：YouTube API 官方字段，值為 'live'、'upcoming'、'completed'、'none'
- `wasLive`：通過 liveStreamingDetails.actualStartTime 判斷是否曾是直播

---

### **缺陷 2：STEP 4 - 短片檢測完全缺失**

**❌ 原實現**：
```javascript
// L106-168 classifyVideos 函數中
// 完全沒有 STEP 4 邏輯
// 只有：covers、originals、unclassified
// 缺少：shorts
```

**問題**：
- 無法檢測 ≤60秒的短片（Shorts）
- 缺少 `shorts` 陣列
- 無法獲取影片 duration（需要 videos.list API）

**✅ 修復方案**：
```javascript
// STEP 4：檢測短片（≤60秒）
if (detail.duration <= 60 && detail.duration > 0) {
  classified.shorts.push({
    id: vid,
    title: title,
    date: date,
    duration: detail.duration
  });
  return;
}
```

- 在 `classifyVideos` 的返回物件中添加 `shorts: []` 陣列
- 檢查 `duration <= 60` 的影片

---

### **缺陷 3：缺少 videos.list API 調用**

**❌ 原實現**：
```javascript
// L235-277 fetchAndClassifyVideos
const playlistUrl = `https://www.googleapis.com/youtube/v3/playlistItems?...`;
https.get(playlistUrl, options, (res) => {
  const videos = classifyVideos(vId, result.items);
  // ❌ classifyVideos 收到的 items 裡沒有 duration、isLiveContent 等
});
```

**問題**：
- playlistItems API 只返回基本信息（title、publishedAt）
- 不包含 `duration`、`liveBroadcastContent`、`liveStreamingDetails` 等詳細信息
- 導致 STEP 1、STEP 4 無法使用官方標誌

**✅ 修復方案**：
```javascript
// 1. 從 playlistItems 中提取視頻 ID
const videoIds = (result.items || [])
  .map(item => item.snippet.resourceId && item.snippet.resourceId.videoId)
  .filter(Boolean);

// 2. 調用 videos.list API 獲取詳細信息
const videoDetails = await fetchVideoDetails(videoIds);

// 3. 傳給 classifyVideos
const videos = classifyVideos(vId, result.items, videoDetails);
```

- 新增 `fetchVideoDetails` 函數
- 調用 `videos?part=contentDetails,snippet,liveStreamingDetails` 獲取官方字段
- 支持批量請求（每次 50 個 ID，避免超時）

---

### **缺陷 4：缺少去重邏輯**

**❌ 原實現**：
```javascript
// L286-301
if (videos.covers.length > 0 || videos.originals.length > 0 || videos.unclassified.length > 0) {
  const videosJson = JSON.stringify(videos, null, 2);
  const pattern = new RegExp(`...`);
  if (pattern.test(dataContent)) {
    dataContent = dataContent.replace(pattern, `$1${videosJson}`);
    // ❌ 直接替換整個 videos 欄位
    // ❌ 沒有檢查是否已有相同影片
  }
}
```

**問題**：
- **全量替換而非增量更新**：新 JSON 直接覆蓋舊的 JSON，導致邊界情況下可能丟失數據
- **沒有去重檢查**：Workflow 每 4 天輪流一次，相同影片可能在多天被抓取
- **沒有保留用戶編輯**：如果用戶手動編輯了 data.js，可能被覆蓋

**✅ 修復方案**：
```javascript
// 1. 從 data.js 提取現有影片 ID
const existingIds = extractExistingVideoIds(vId);

// 2. 過濾掉已有的影片
const newVideos = {
  covers: videos.covers.filter(v => !existingIds.has(v.id)),
  originals: videos.originals.filter(v => !existingIds.has(v.id)),
  // ... 其他分類
};

// 3. 合併而非替換
const existingVideos = JSON.parse(videoMatch[2]);
const mergedVideos = { ...existingVideos };
mergedVideos.covers.push(...newVideos.covers);
mergedVideos.originals.push(...newVideos.originals);
// ... 合併其他分類

// 4. 只在有新影片時才更新
if (hasNewVideos) {
  // 寫回 data.js
}
```

- 新增 `extractExistingVideoIds` 函數
- 讀取現有 videos 結構並提取所有影片 ID
- 過濾掉已有影片，只添加新影片
- 支持新舊結構兼容（陣列 `[]` 和物件 `{}` 結構）

---

## 🎯 修復效果

### **修復前 vs 修復後**

| 檢查項 | 修復前 | 修復後 |
|------|------|------|
| **STEP 1 準確度** | 低（只用關鍵字） | 高（官方標誌） |
| **STEP 4 支持** | ❌ 完全缺失 | ✅ 完整實現 |
| **API 調用** | playlistItems | playlistItems + videos.list |
| **數據完整性** | ⚠️ 可能重複或丟失 | ✅ 去重，無損合併 |
| **配額消耗** | 1 個 playlistItems | playlistItems + videos.list（分批） |

### **測試場景驗證**

#### **場景 1：三個測試影片**

當 Workflow 運行時，應該能正確分類：
- `ENI3YCbU468`：【3周年紀念】統美眉 (2026/02/26)
- `tYvq7Q6prns`：這是什麼好玩遊戲 (2026/02/14)
- `o45tQSU0kdY`：COCOCO玉山我要上來囉 (2024/12/13)

**預期結果**（修復後）：
1. 這三個影片應該出現在未分類區（因為標題不符合 STEP 2-3 規則）
2. 如果 ≤60秒，應該出現在 Shorts 區
3. 應該被正確添加到 data.js 的 `unclassified` 或 `shorts` 陣列

#### **場景 2：直播存檔排除**

詩雨蔻達頻道中的直播存檔（例如「【直播】2026-05-28 歌唱直播」）：

**修復前**：
- ❌ 只能靠「直播」關鍵字檢測，容易誤判

**修復後**：
- ✅ 檢查 `liveContent === 'completed'` + `wasLive === true`
- ✅ 準確排除所有直播存檔

#### **場景 3：去重驗證**

假設某個影片在周一被抓取並添加到 data.js：

**修復前**：
- ❌ 周五再次運行 Workflow 時，如果播放列表中仍有這個影片，會重複添加

**修復後**：
- ✅ 檢查該影片 ID 是否已在 data.js 中
- ✅ 如果已有，跳過；如果未有，才添加
- ✅ 不會產生重複

---

## 📊 API 配額影響

### **消耗分析**

**修復前**：
- playlistItems API：1 次 = 1 credit/VTuber
- 總計：1 credit/VTuber

**修復後**：
- playlistItems API：1 次 = 1 credit/VTuber
- videos.list API：需要獲取 50 個 ID 的詳細信息（分批）
  - 前 50 個 ID：1 次 = 1 credit
  - （實際上前 50 個就夠了）
- 總計：**2 credit/VTuber**

**日常消耗**：
- 27 VTuber ÷ 4 段 ≈ 7 VTuber/天
- 7 VTuber × 2 credit = 14 credit/天
- 遠低於 10,000 credit/日 限額 ✅

---

## 🚀 應用說明

### **將修復應用到主 Workflow**

**步驟**：

1. **備份原 Workflow**：
   ```bash
   cp .github/workflows/auto-update-videos.yml .github/workflows/auto-update-videos.yml.backup
   ```

2. **複製修復版本**：
   ```bash
   cp auto-update-videos-FIXED.yml .github/workflows/auto-update-videos.yml
   ```

3. **驗證**（在 GitHub Actions 手動觸發）：
   - 檢查 Workflow 是否成功運行
   - 驗證 data.js 是否被正確更新
   - 檢查未分類區是否顯示新影片

4. **完整測試**：
   - 開啟詩雨蔻達的未分類區
   - 檢查三個測試影片是否出現
   - 驗證短片、直播存檔的分類是否正確

### **分階段應用建議**

**階段 1**：應用修復到詩雨蔻達
- 測試完整的五步分類邏輯
- 驗證新影片是否正確添加

**階段 2**：觀察 1-2 個 Workflow 循環
- 確認沒有數據丟失
- 確認沒有重複添加
- 確認 API 配額消耗在預期範圍

**階段 3**：應用到其他 26 位 VTuber
- 使用相同 Workflow 執行

---

## 📌 關鍵改進總結

| 改進項 | 原代碼行數 | 新代碼位置 | 說明 |
|-------|---------|---------|------|
| **STEP 1 官方標誌** | L128-134 | 新版 L157-160 | 使用 `liveContent` 和 `wasLive` 官方字段 |
| **STEP 4 實現** | 缺失 | 新版 L181-190 | 檢測 `duration <= 60` 的短片 |
| **videos.list 調用** | 缺失 | 新版 `fetchVideoDetails` 函數 | 分批獲取影片詳細信息 |
| **去重邏輯** | 缺失 | 新版 `extractExistingVideoIds` + 篩選邏輯 | 過濾已有影片，只添加新影片 |
| **增量更新** | L294 全量替換 | 新版 L313-339 | 讀取現有結構，合併新影片 |

---

## ✅ 驗收標準

修復成功的驗收標準：

- [ ] Workflow 成功調用 videos.list API
- [ ] 三個測試影片被正確分類
- [ ] data.js 的 unclassified 區不為空
- [ ] 沒有重複影片
- [ ] 沒有數據丟失
- [ ] API 配額消耗 ≤ 2 credit/VTuber
- [ ] detail.js 的未分類區能正確顯示新影片

---

## 📝 備註

- 修復版本完全兼容舊結構（陣列 `[]`）和新結構（物件 `{}`）
- 自動將舊陣列結構轉換為新物件結構
- 修復後，unclassified 區將不為空（包含新未分類影片）
- 建議在應用到生產環境前進行充分測試
