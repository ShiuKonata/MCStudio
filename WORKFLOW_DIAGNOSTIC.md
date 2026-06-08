# Auto-Update Workflow 診斷指南

## 問題描述
`auto-update-videos.yml` workflow 返回 "0 部新影片"，即使 VTubers 有新上傳的視頻（例如 ShiuCoda 在 6/6 上傳的 Cover、姬城三千華和帕蘿妮的新 covers）。

---

## 診斷步驟（按順序執行）

### Step 1️⃣：本地測試 API 連接

首先運行診斷腳本來檢查 API 是否正常工作：

```bash
node scripts/test-api-fetch.js
```

**預期輸出示例：**
```
════════════════════════════════════════
🔍 YouTube API 診斷工具
════════════════════════════════════════

📋 測試對象: 詩雨蔻達
📍 Channel ID: UCuPHlMEd0cR-tvAYPjGWVwQ
🔑 API Key: AIzaSyBs...RKkRjPlM

📚 Uploads Playlist ID: UUuPHlMEd0cR-tvAYPjGWVwQ

📡 API URL: https://www.googleapis.com/youtube/v3/playlistItems?part=...
⏳ 正在調用 API...

✅ HTTP Status: 200
📝 Content-Type: application/json

📬 API 返回 50 部影片

📊 最新影片信息:

[0] 2026-06-06 - <video-id-1>
    標題: 【Cover】新影片... 
    分類: ✅ Cover

[1] 2026-05-28 - <video-id-2>
    標題: 【Cover】mosi mosi?...
    分類: ✅ Cover

... (其他 3 部)

🔎 驗證最新影片:

❌ 最新影片不在 data.js 中: <video-id-1>
   標題: 【Cover】新影片...
   日期: 2026-06-06
   ⚠️ 這表示新視頻沒有被自動添加到 data.js

════════════════════════════════════════
✅ 診斷完成

🎯 結論: 有新視頻（日期在 6/6 之後），應該被 workflow 檢測到
```

---

### 根據診斷結果判斷問題：

#### ✅ 情況 A：API 正常返回，有新視頻，但 data.js 中缺失
- **問題**：Workflow 執行時沒有檢測到新視頻
- **原因**：Workflow 邏輯有 bug 或未正確執行
- **解決方案**：
  1. 檢查 GitHub Actions 的 workflow 執行日誌
  2. 查看是否有錯誤訊息（我已改進日誌輸出）
  3. 確認 workflow 的代碼是否真的被執行

#### ❌ 情況 B：API 返回 HTTP 非 200 狀態碼
- **問題**：API 調用失敗
- **原因**：
  - API Key 無效或過期
  - 頻道 ID 錯誤
  - 網路連接問題
- **解決方案**：
  1. 驗證 API Key 是否正確
  2. 驗證 Channel ID 是否正確
  3. 檢查網路連接

#### ❌ 情況 C：API 返回錯誤訊息（如 quotaExceeded）
- **問題**：API 配額已用盡
- **原因**：
  - API 配額在 24 小時內已達到上限
  - 前面的 workflow 執行消耗了配額
- **解決方案**：
  1. 等待配額重置（通常是 UTC 00:00）
  2. 檢查是否有其他程序在消耗配額
  3. 考慮在配額重置後立即運行（時段 1）

#### ⚠️ 情況 D：API 返回 0 部影片
- **問題**：頻道無任何視頻或資料結構異常
- **原因**：
  - 頻道 ID 轉換錯誤
  - YouTube API 更改了響應格式
- **解決方案**：
  1. 驗證頻道 ID 和 Uploads Playlist ID
  2. 查看 API 返回的完整響應結構

---

### Step 2️⃣：運行改進的 Workflow

如果診斷腳本顯示 API 正常工作，接下來運行改進的 workflow：

1. 前往 GitHub 倉庫
2. 選擇 **Actions** 標籤
3. 左側選擇 **🎵 Auto-Update VTuber Videos**
4. 點擊 **Run workflow** → **Run workflow**（確認執行）

---

### Step 3️⃣：查看 Workflow 日誌

Workflow 執行後：

1. 點擊最新的執行記錄
2. 點擊 **🎯 Run auto-update script** 工作步驟
3. 展開完整日誌，查看：

**關鍵日誌輸出：**

```
📥 shiucoda: 抓取 UUuPHlMEd0cR-tvAYPjGWVwQ
  📬 shiucoda: API 返回 50 部影片
  📊 shiucoda: 掃描 50 部影片
  ✅ [0] 2026-06-06 - Cover: 【Cover】新影片...
  ✅ [1] 2026-05-28 - Cover: 【Cover】mosi mosi?...
  ⊘ [2] 2026-04-18 - 已存在: 【Cover】メロウ...
  📈 shiucoda: 新增 1 部, 跳過 49 部
```

**日誌含義：**
- `📥` - 開始抓取該 VTuber
- `📬` - API 返回的視頻數量
- `✅` - 新視頻已分類
- `⊘` - 視頻已存在於 data.js（被跳過）
- `🚫` - 視頻是直播（被過濾）
- `❓` - 視頻未分類（需手動分配）
- `❌` - 出現錯誤

---

## 常見問題和解決方案

### Q1：Workflow 返回 0 部新影片，但診斷腳本顯示有新視頻

**原因**：Workflow 的分類邏輯有 bug

**解決方案**：
1. 檢查 workflow 日誌中是否有 `❌` 或 `⚠️` 訊息
2. 查看視頻是否被過濾（直播、已存在等）
3. 驗證分類關鍵詞是否正確

### Q2：Workflow 執行時出現 "API 配額超限"

**解決方案**：
1. 等待配額重置（UTC 00:00 開始新的 24 小時）
2. 確認 API Key 沒有被其他程序使用
3. 考慮分批運行 workflow（每個時段處理 6-7 位 VTuber）

### Q3：某個 VTuber 的新視頻一直沒被檢測到

**可能原因**：
1. 視頻標題不包含分類關鍵詞（cover、歌ってみた、original 等）
2. 視頻標題中有拼寫錯誤
3. 需要為該 VTuber 添加特殊規則（STEP 3）

**解決方案**：
1. 查看視頻實際標題
2. 確認是否符合分類規則
3. 如需要，為該 VTuber 在 workflow 中添加特殊規則

---

## Workflow 改進內容

我已改進了 `auto-update-videos.yml`，包括：

### ✅ 更詳細的日誌輸出
- 每個視頻都會顯示分類過程
- 包含視頻索引、日期、標題縮寫
- 明確標示已存在、直播過濾、未分類等狀態

### ✅ 更好的 API 驗證
- HTTP 狀態碼檢查（確保收到 200 回應）
- API 錯誤訊息詳細顯示
- 響應數據結構驗證

### ✅ 最終統計報告
```
════════════════════════════════════════
📊 掃描統計結果：
  ✅ Cover: 5 部
  ✅ Original: 2 部
  ❓ 未分類: 3 部
  📈 合計: 10 部新影片（客戶端自動分類）
════════════════════════════════════════
```

---

## 下一步行動

### 短期（立即執行）
1. ✅ 運行診斷腳本確認 API 工作正常
2. ✅ 運行改進的 workflow 並檢查日誌
3. ✅ 根據日誌結果診斷具體問題

### 中期（如需要）
1. 為某些 VTuber 添加特殊分類規則（STEP 3）
2. 優化分類邏輯以覆蓋更多視頻類型
3. 添加分頁支持以處理超過 50 個視頻的頻道

### 長期（完整方案）
1. 實現 STEP 5 的自動化手動分配介面
2. 支持特殊規則配置（每個 VTuber）
3. 實現增量更新而不是每次掃描所有視頻

---

## 技術細節

### STEP 1-2 分類邏輯（Workflow）

```javascript
// STEP 1：排除直播
if (title.includes('直播') || title.includes('archive')) return;

// STEP 2：檢測關鍵詞
if (title.includes('cover') || title.includes('歌ってみた')) → Cover
if (title.includes('original') || title.includes('original') || title.includes('原創')) → Original
else → 未分類
```

### 視頻已存在檢查

```javascript
if (dataContent.includes(`"${videoId}"`) || dataContent.includes(`'${videoId}'`)) {
  // 視頻已在 data.js 中，跳過
}
```

---

## 日誌示例

### 成功案例
```
📥 shiucoda: 抓取 UUuPHlMEd0cR-tvAYPjGWVwQ
  📬 shiucoda: API 返回 50 部影片
  📊 shiucoda: 掃描 50 部影片
  ✅ [0] 2026-06-06 - Cover: 【Cover】新Cover...
  ✅ [1] 2026-06-05 - Original: 【原創】新Original...
  ⊘ [2] 2026-05-28 - 已存在: 【Cover】mosi mosi?...
  🚫 [3] 2026-05-20 - 直播已排除: 【直播】...
  ❓ [4] 2026-05-15 - 未分類: 新視頻標題...
  📈 shiucoda: 新增 2 部, 跳過 48 部

✅ shiucoda: 新增 2 部影片
```

### 錯誤案例
```
📥 shiucoda: 抓取 UUuPHlMEd0cR-tvAYPjGWVwQ
❌ shiucoda: HTTP 403
```

或

```
📥 shiucoda: 抓取 UUuPHlMEd0cR-tvAYPjGWVwQ
❌ shiucoda: API 錯誤 - Invalid API Key
```

---

## 聯絡與反饋

如果按照以上步驟仍無法解決問題，請提供：
1. 診斷腳本的完整輸出
2. Workflow 執行日誌的完整輸出
3. 新上傳視頻的具體標題和日期
4. 可能的錯誤訊息截圖

---

**最後更新**：2026-06-08  
**狀態**：✅ 改進完成，待測試
