# 26 位 VTuber 頁面實現計畫

**狀態：前置架構完成，等待配額重置**

---

## 📋 目標

為 26 位 VTuber 實現四個頁面，按照詩雨蔻達的 STEP 1-5 邏輯：

1. **原創曲&Cover**（TAB: 原創曲&Cover）
2. **官方剪輯**（TAB: 官方剪輯，含 7 個分類）
3. **會員直播**（TAB: 會員直播）
4. **直播存檔**（TAB: 直播存檔）

---

## ✅ 已完成的前置工作

### 1. 代碼架構
- ✅ **HTML 結構**：四個頁面的 HTML 在 detail.js 中已存在（第 482、503、663、687 行）
- ✅ **JavaScript 邏輯**：基本的渲染函數已存在（loadGeneralYear、loadAdsYear 等）
- ✅ **數據結構**：所有 26 位都有 `videos` 對象結構（covers, originals, shorts 等）

### 2. 分類邏輯
- ✅ **js/classification-step-1-4.js**：完整的 STEP 1-4 分類函數
  - STEP 1: 排除直播
  - STEP 2: 檢測 5 個關鍵字
  - STEP 3: 特殊規則（框架已備，待補充）
  - STEP 4: 標記 Shorts

### 3. 導入腳本
- ✅ **scripts/import-rumi-videos.js**：Rumi 專用導入腳本（可立即使用）
- ✅ **scripts/generate-import-scripts.js**：自動為所有 26 位生成導入腳本

### 4. 文檔
- ✅ **本文檔**：實現計畫和執行步驟

---

## 🔄 執行流程

### Phase 1：配額重置後（UTC 00:00）

#### Step 1: 生成所有導入腳本
```bash
node scripts/generate-import-scripts.js
```

結果：在 `scripts/import-videos/` 目錄下生成 26 個腳本
- `import-rumi-videos.js`
- `import-paroniie-videos.js`
- ... 等

#### Step 2: 逐一執行導入（監控配額）

**方案 A：逐個執行（安全）**
```bash
node scripts/import-videos/import-rumi-videos.js          # ~25-50 units
node scripts/import-videos/import-paroniie-videos.js      # ~25-50 units
# ... 繼續其他人
```

**方案 B：並行執行（快速，需監控）**
```bash
# 在 Node.js 或 Bash 中並行執行多個腳本
```

#### Step 3: 驗證結果
- 檢查 data.js 中每位 VTuber 的 videos 對象是否正確填充
- 檢查網站上是否能看到導入的影片

### Phase 2：後續手動分配（STEP 5）

#### 對象：general, premiere, vlog, commerce, ads

**步驟：**
1. 查看各 VTuber 的 unclassified 陣列
2. 根據內容分配到相應分類
3. 編輯 data.js 中的對應陣列

---

## ⚠️ 需要補充的部分（STEP 3 特殊規則）

每位 VTuber 可能有特殊的標籤或風格需要在 STEP 3 中處理。

### 詩雨蔻達例子：
```javascript
// STEP 3: 特殊規則
if (titleLower.includes('demo')) return 'cover';
if (titleLower.includes('自彈自唱')) return 'cover';
```

### 待補充列表：
- [ ] **Rumi**: ??? 
- [ ] **Paroniie**: ???
- [ ] **Lubee**: ???
- [ ] ... 其他 23 位

**操作方式：**
在 `js/classification-step-1-4.js` 的 `applySpecialRules()` 函數中添加

---

## 📊 API 配額消耗估算

### 配額限制
- YouTube API: 10,000 queries/day
- 每次 playlistItems 呼叫: ~1-2 units

### 消耗估算（26 位 VTuber）
- 假設每位平均 500 部影片 (10 頁分頁)
- 每位消耗: 10 次 API 呼叫 × ~1 unit = 10-20 units
- 總消耗: 26 × 15 units ≈ **390 units**（佔 3.9% 配額）

**結論：單日可完成全部 26 位導入。**

---

## 🎯 關鍵檔案

| 檔案 | 用途 |
|------|------|
| `js/detail.js` | HTML & JS：四個頁面的渲染邏輯 |
| `js/data.js` | 數據：26 位 VTuber 的影片數據 |
| `js/classification-step-1-4.js` | 分類邏輯（STEP 1-4） |
| `scripts/import-rumi-videos.js` | Rumi 導入腳本 |
| `scripts/generate-import-scripts.js` | 腳本生成器 |

---

## 📝 檢查清單

### 導入前準備
- [ ] 配額已重置（UTC 00:00）
- [ ] 已備份 data.js

### 導入執行
- [ ] 運行 `generate-import-scripts.js` 生成所有腳本
- [ ] 逐個執行各 VTuber 的導入腳本
- [ ] 監控控制台輸出，確保無錯誤

### 驗證
- [ ] 檢查 data.js 中所有 VTuber 的 videos 對象
- [ ] 在網站上驗證各頁面能否正常顯示
- [ ] 檢查影片分類是否正確

### 後續工作
- [ ] 為缺失的 VTuber 補充 STEP 3 特殊規則
- [ ] 手動分配 STEP 5 的 unclassified 影片
- [ ] 測試 git commit 並上傳

---

## 🚨 注意事項

1. **字符編碼**：修改 data.js 時需注意 UTF-8 編碼（無 BOM）
2. **正則表達式**：data.js 的 regex 替換需謹慎，避免破壞結構
3. **API Key**：確保不洩露到公開倉庫
4. **Git 提交**：每完成一位 VTuber，建議提交一次

---

## 📞 聯絡/反饋

如有問題或需要修改計畫，請告知。

---

**最後更新**：2026-06-07  
**狀態**：✅ 前置架構完成，等待配額重置
