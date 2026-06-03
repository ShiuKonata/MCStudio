# 🎵 26位VTuber 自動分類更新 - 執行計劃

## 📋 任務概述
- **目標**：為 26 位 VTuber（除詩雨蔻達外）自動抓取新影片並分類
- **分類規則**：
  - 📕 Cover：標題含 「cover」或「歌ってみた」
  - 📗 Original：標題含「original」或「official」或「原創」
  - 📘 Shorts：≤60秒的影片
  - ⚪ Unclassified：其他

## 🔍 API 驗證結果

✅ YouTube API 可用
✅ Referer 頭設置正確
✅ API Key 有效

**測試案例：Rumi（懶貓子Rumi）**
- 頻道 ID：UCswRX8mNNdn1fjRctZqzjgA
- 上傳播放列表：UUswRX8mNNdn1fjRctZqzjgA
- 最新影片：「520企劃禮物製作💕Part2【雑談】」（2026-06-02）

分類結果：**未分類**（純對話內容，不符合任何特定分類）

## 📊 26 位 VTuber 列表

| # | ID | 中文名 | 現狀 |
|---|----|----|------|
| 1 | rumi | 懶貓子Rumi | 需掃描 |
| 2 | paroniie | 帕若妮耶 | 需掃描 |
| 3 | lubee | 露比 | 需掃描 |
| 4 | himegimichika | 姬魅美智香 | 需掃描 |
| 5 | arrynia | 艾琳妮雅 | 需掃描 |
| 6 | kiriko | 桐子 | 需掃描 |
| 7 | vaswawa | 瓦絲瓦 | 需掃描 |
| 8 | sinniearis | 辛妮雅瑞絲 | 需掃描 |
| 9 | ririna | 里莉娜 | 需掃描 |
| 10 | ekorru | 艾可璐 | 需掃描 |
| 11 | wakasaito | 和可紗衣 | 需掃描 |
| 12 | whalefall | 鯨落 | 需掃描 |
| 13 | kai | 凱 | 需掃描 |
| 14 | mukuru | 木呉璐 | 需掃描 |
| 15 | nyrfier | 妮法爾 | 需掃描 |
| 16 | fuka22 | 楓花 | 需掃描 |
| 17 | chita | 契玲 | 需掃描 |
| 18 | chamamatti | 茶抹緹 | 需掃描 |
| 19 | shiroleon | 白獅 | 需掃描 |
| 20 | BarkBarkPomi | 汪汪蓬咪 | 需掃描 |
| 21 | cocor0 | 可可蘿 | 需掃描 |
| 22 | UchiFifi | 內非飛 | 需掃描 |
| 23 | nokori | 野薑花 | 需掃描 |
| 24 | KeKeMii | 克克美 | 需掃描 |
| 25 | Pele | 佩莉 | 需掃描 |
| 26 | Yawnii | 亞雯妮 | 需掃描 |

## 🔧 技術方案

### 方案對比

| 方案 | Node.js | PowerShell | 混合方案 |
|------|---------|-----------|--------|
| API 調用 | ✅ | ✅ | ✅ curl |
| JSON 處理 | ✅ | ⚠️ 複雜 | ✅ |
| data.js 更新 | ✅ | ⚠️ 複雜 | ✅ sed/Edit |
| Git 操作 | ✅ | ✅ | ✅ git |
| 推薦度 | ⭐⭐⭐⭐⭐ | ⭐⭐ | ⭐⭐⭐ |

**選擇**：混合方案（curl API + sed 更新 + git 推送）

## 📝 執行步驟

### Step 1：API 掃描（批量進行）
```bash
for vtuber_id in rumi paroniie lubee ...; do
  # 獲取該 VTuber 的上傳播放列表
  # 提取新影片 ID、標題、日期
  # 按規則分類
done
```

### Step 2：data.js 更新
- 為每位有新影片的成員，更新其 `videos` 欄位
- 舊結構 `[]` → 新結構 `{ covers: [], originals: [], unclassified: [] }`
- 合併新舊影片（去重）

### Step 3：Git 操作
```bash
git add js/data.js
git commit -m "feat: 自動分類 26 位 VTuber 的新影片"
git push
```

## ⚠️ 預期挑戰

1. **API 配額**：每個成員最多 50-100 個影片掃描，約 2-3 配額
   - 26 成員 × 2.5 配額 = 65 配額（可接受）

2. **影片時長檢測**（STEP 4）：需要額外的 `videos.list` API 調用
   - 評估：暫時不實現（時間限制），手動標記

3. **資料完整性**：確保現有影片不被覆蓋
   - 對策：在更新前提取現有 ID，進行去重

4. **編碼問題**：中文字符可能損壞（已知 PowerShell 問題）
   - 對策：使用 sed 或 Edit tool（UTF-8 正確）

## 📊 預期結果

假設平均每位成員有 5-10 部新影片：

```
總掃描成員數：26
平均新影片數/成員：7
總新增影片數：~182 部

預期分類分布：
├─ Cover：~70 部（38%）
├─ Original：~20 部（11%）
└─ Unclassified：~92 部（51%）

預期時長分布（假設）：
├─ ≥60秒：~140 部（77%）
└─ ≤60秒（Shorts）：~42 部（23%）
```

## ✅ 成功標準

- [ ] 所有 26 位成員的 videos 已更新
- [ ] 新影片已正確分類
- [ ] 數據已推送至 GitHub
- [ ] 無資料損失或重複
- [ ] data.js 格式正確

## ⏱️ 預計時間

- API 掃描：~3-5 分鐘（受限於 API 速率限制）
- data.js 更新：~2-3 分鐘
- Git 操作：<1 分鐘
- **總計**：~5-10 分鐘

---

**狀態**：📋 計劃已擬定，準備執行
**下一步**：確認執行方案並開始批量掃描
