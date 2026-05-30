# 🎯 詩雨蔻達規章實現計劃 (Step 2)

**開始日期**: 2026-05-30  
**備份分支**: `backup/before-shiucoda-rules-2026-05-30` (1c94b1b)  
**狀態**: 準備開始實現

---

## 📋 規章概述

詩雨蔻達（ShiuCoda）需要實現特殊的視頻自動分類規則，用於將 YouTube API 獲取的影片進行智能分類。

---

## 🎬 Step 2 核心需求

### 目標
在「官方剪輯」分頁中實現自動分類邏輯，將未分類的影片分發到不同的子區域。

### 分類規則優先級

```
優先級 0️⃣ - 【廣告】(詩雨蔻達特殊規則 - 最高優先)
  └─ 條件: 標題含 "廣告"
  └─ 動作: 分類為廣告區，終止進一步分類

優先級 1️⃣ - 【Cover】(通用規則)
  └─ 條件: 標題含 "cover" 或 "歌ってみた"
  └─ 動作: 分類為 Cover 區

優先級 2️⃣ - 【日文標籤】(Shiucoda Rule 2 + HM-1 + SK-1)
  └─ 條件: 標題含日文字符（假名、漢字等）
  └─ 動作: 分類為日文 Cover 區

優先級 3️⃣ - 【Original】(通用規則)
  └─ 條件: 標題含 "original" 或 "原創"
  └─ 動作: 分類為 Original 區

優先級 4️⃣ - 【Demo】(Shiucoda Rule 1)
  └─ 條件: 標題含 "demo"
  └─ 動作: 分類為 Demo 區

優先級 5️⃣ - 【時長規則】
  └─ 條件: 時長 ≤ 60 秒
  └─ 動作: 移到 Shorts 區（同時保留原區域）
```

---

## 🔧 實現計劃

### Phase 1: 廣告檢測（最高優先）

**目標**: 檢測並分類廣告視頻

**實現位置**: `checkAndAddCoverOfficial()` 函數的開始處

**邏輯**:
```javascript
function checkAndAddCoverOfficial(item, duration, detectionSource) {
  const title = (item.snippet.title || '').toLowerCase();
  
  // 0️⃣ 【廣告檢測】- 最高優先級
  if (title.includes('廣告')) {
    // 添加到廣告數組
    if (!window._adsVideos) window._adsVideos = [];
    window._adsVideos.push({
      id: videoId,
      title: originalTitle,
      date: date,
      thumb: thumbUrl,
    });
    return;  // ← 終止進一步分類
  }
  
  // 後續規則...
}
```

**檢查清單**:
- [ ] 創建 `window._adsVideos` 全局數組
- [ ] 檢測標題中的「廣告」關鍵字
- [ ] 確保廣告檢測後 RETURN（互斥原則）
- [ ] 測試廣告視頻的分類

---

### Phase 2: Cover 和 Original 檢測

**目標**: 檢測並分類 Cover 和 Original 視頻

**實現邏輯**:
```javascript
// 1️⃣ 檢測 Cover
if (titleLower.includes('cover') || titleLower.includes('歌ってみた')) {
  // 分類為 Cover
  // 同時檢查時長，如果 ≤60s，也添加到 Shorts
}

// 2️⃣ 檢測 Original
else if (titleLower.includes('original') || titleLower.includes('原創')) {
  // 分類為 Original
  // 同時檢查時長，如果 ≤60s，也添加到 Shorts
}
```

**檢查清單**:
- [ ] 創建 `window._coversVideos` 數組
- [ ] 創建 `window._originalsVideos` 數組
- [ ] 實現 Cover 關鍵字檢測
- [ ] 實現 Original 關鍵字檢測

---

### Phase 3: 時長規則（≤60 秒視頻）

**目標**: 將所有 ≤60 秒的視頻也添加到 Shorts 區

**邏輯**:
```javascript
// 無論分類結果如何，都檢查時長
if (duration <= 60) {
  // 也添加到 Shorts 區
  window._shortsVideos.push({...});
}
```

**檢查清單**:
- [ ] 為所有區域的視頻檢查時長
- [ ] ≤60s 視頻既分類到其原始區域，也分類到 Shorts
- [ ] Shorts 區域顯示所有 ≤60s 的視頻（無論原始分類）

---

### Phase 4: 日文標籤（可選，後續）

**目標**: 檢測日文標籤視頻（複雜度高，後續實現）

**條件**: 標題包含日文字符

**時間**: 待規則定義完整後

---

## 📊 數據結構設計

### 全局數組

```javascript
window._adsVideos = [];           // 廣告視頻
window._coversVideos = [];        // Cover 視頻
window._originalsVideos = [];     // Original 視頻
window._shortsVideos = [];        // ≤60s 視頻（所有來源）
window._unclassifiedVideos = [];  // 未分類視頻
```

### 視頻對象結構

```javascript
{
  id: "video_id",
  title: "影片標題",
  date: "2026-05-30",
  thumb: "https://img.youtube.com/vi/.../hqdefault.jpg",
  duration: 180,                  // 秒
  isShorts: false,                // 是否 ≤60s
  classification: {
    primary: "cover",             // 主要分類
    secondary: "shorts",          // 副分類（如果適用）
    detectionRules: ["cover"],    // 匹配的規則
  }
}
```

---

## 🔄 實現流程

### Step 1 (已完成) ✅
- [x] 從 YouTube API 加載所有視頻到「未分類區」
- [x] 關閉其他區域的自動加載

### Step 2 (準備開始) 🔄
- [ ] **Phase 1**: 實現廣告檢測
- [ ] **Phase 2**: 實現 Cover/Original 檢測
- [ ] **Phase 3**: 實現時長規則（≤60s Shorts）
- [ ] **Phase 4**: (可選) 實現日文標籤檢測
- [ ] **驗證**: 在所有 27 個 VTuber 上測試

### Step 3 (未來)
- [ ] 用戶確認界面
- [ ] 手動編輯分類

### Step 4-5 (未來)
- [ ] 高級規則和自訂分類

---

## 🧪 測試計劃

### 單元測試
```javascript
test('廣告檢測', () => {
  const item = { snippet: { title: '【廣告】新產品' } };
  classifyVideo(item);
  expect(window._adsVideos.length).toBe(1);
});

test('Cover 檢測', () => {
  const item = { snippet: { title: 'cover 歌曲名' } };
  classifyVideo(item);
  expect(window._coversVideos.length).toBe(1);
});

test('時長規則', () => {
  const item = { snippet: { title: '短視頻' } };
  classifyVideo(item, 45); // 45 秒
  expect(window._shortsVideos.length).toBe(1);
});
```

### 集成測試
- [ ] 詩雨蔻達頁面加載
- [ ] 自動分類視頻
- [ ] 檢查每個分類區域的內容正確性
- [ ] 驗證沒有視頻被遺漏或重複分類

### 回歸測試（27 個 VTuber）
- [ ] 挑選 5 個有視頻的 VTuber（包括不同數量的視頻）
- [ ] 驗證每個 VTuber 的分類結果
- [ ] 檢查是否有黑畫面或錯誤

---

## ⚠️ 風險與注意事項

### 高風險點
1. **分類邏輯的複雜性**
   - 多層嵌套的 if-else 容易出錯
   - 優先級順序很重要（必須確保互斥）

2. **全局變數污染**
   - 多個區域使用相同的全局數組
   - 需要確保數據不會混淆

3. **性能問題**
   - 如果視頻數量很多，分類邏輯可能很慢
   - 需要監控 API 請求和 DOM 操作的耗時

### 中等風險點
1. **關鍵字匹配的準確性**
   - "cover" 可能出現在各種上下文中
   - 日文標籤檢測需要正確的正則表達式

2. **邊界情況**
   - 沒有標題的視頻
   - 時長信息缺失的視頻

---

## 📝 備份與恢復

### 備份分支
```bash
分支名稱: backup/before-shiucoda-rules-2026-05-30
提交哈希: 1c94b1b
日期:     2026-05-30
內容:     實現詩雨蔻達規章前的完整代碼快照
```

### 快速恢復命令
```bash
# 恢復到實現前的版本
git checkout backup/before-shiucoda-rules-2026-05-30

# 或重置到該提交
git reset --hard 1c94b1b
```

---

## 🎯 下一步

1. ✅ **確認計劃**
   - 是否同意上述分類規則和實現順序？
   - 是否有調整或補充？

2. 🔄 **開始 Phase 1**
   - 實現廣告檢測邏輯
   - 在詩雨蔻達頁面上測試

3. 📊 **逐步推進**
   - 每個 Phase 完成後進行測試
   - 確認無誤後再進行下一個 Phase

---

**狀態**: 準備就緒，等待確認開始實現

**備份位置**: `backup/before-shiucoda-rules-2026-05-30`

**快速恢復**: `git checkout backup/before-shiucoda-rules-2026-05-30`
