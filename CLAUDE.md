# MC組事務所 — 專案說明（Claude 專用）

## 專案概述
台灣預見娛樂 Vtuber 粉絲介紹網站，純靜態 HTML + CSS + JS，部署於 GitHub Pages。

## 檔案結構
```
vtuber-site/
├── index.html          首頁
├── vtubers.html        Vtuber 一覽頁（含篩選 & 搜尋）
├── vtuber.html         個人詳細介紹頁（動態讀取 ?id=xxx）
├── merch.html          周邊商品頁
├── css/
│   └── style.css       全站樣式（唯一 CSS 檔）
├── js/
│   ├── data.js         ⭐ Vtuber 資料庫（主要修改這裡）
│   ├── main.js         一覽頁邏輯（篩選、渲染卡片）
│   └── detail.js       個人頁邏輯（分頁、影片、行程）
├── CLAUDE.md           本說明文件
├── 一鍵更新.bat        手動部署腳本
└── .claude/
    └── settings.json   Claude Code Hook（完成後自動部署）
```

## 世代順序
零期生 → 一期生 → 二期生 → 三期生 → 四期生 → 五期生 → 六期生

## Vtuber 資料欄位說明（data.js）
| 欄位 | 說明 | 必填 |
|------|------|------|
| id | 唯一識別碼（英文小寫，無空格） | ✅ |
| name | 全名 | ✅ |
| shortName | 簡介卡片顯示的短名（選填，填了才用） | ❌ |
| nameEn | 英文名 | ✅ |
| group | 所屬公司 | ✅ |
| generation | 世代（零/一/二...期生） | ✅ |
| avatar | 頭像 URL | ✅ |
| coverImage | 封面橫幅 URL | ✅ |
| tagline | 口頭禪（可空字串） | ✅ |
| description | 個人介紹 | ✅ |
| debut | 出道日 YYYY-MM-DD | ✅ |
| birthday | 生日（X月X日） | ✅ |
| tags | 標籤陣列，最多10個，每個最多5字 | ✅ |
| youtube | YouTube 頻道 URL | ✅ |
| twitter | Twitter/X URL | ✅ |
| twitch | Twitch URL（選填） | ❌ |
| spreadsheet | Google 試算表 URL | ✅ |
| spreadsheetLabel | 試算表按鈕文字 | ✅ |
| scheduleTitle | 行程頁標題 | ✅ |
| scheduleVideoId | 行程影片 YouTube ID | ✅ |
| videos | 熱門影片陣列（3個，含 id 和 title） | ✅ |
| color | 個人代表色 #RRGGBB | ✅ |

## 部署說明
- 本地修改後，Claude Code 會在對話結束時**自動執行 git push**
- 若自動部署失敗，請手動執行根目錄的 `一鍵更新.bat`
- GitHub Pages 網址：請在 Repository Settings → Pages 中查看

## 注意事項
- 修改 `data.js` 時，影片 ID 若暫無資料請填 `REPLACE_VIDEO_1`（會自動顯示佔位符）
- `generationOrder` 物件需同步更新才能正確排序
- 新增世代時，`generationOrder` 記得加上對應數字

---

## 🔔 與使用者的約定
- 使用者只要說出含有「規則」的字，Claude 必須詢問：「要把這條規則存進 CLAUDE.md 嗎？」
- 確認後立刻寫入並 commit

---

## ⚠️ 剪輯頻道設定規則（違反會造成嚴重顯示錯誤，必須嚴格遵守）

### 一、兩個陣列的用途
| 陣列 | 對應頁籤 | 收錄內容 |
|------|----------|----------|
| `musicClipsChannelIds` | 熱門音樂剪輯 | 歌切、歌回、cover、歌唱相關 |
| `videoClipsChannelIds` | 熱門影片剪輯 | 一般精華、遊戲、聊天等非音樂內容 |

### 二、keywords 填寫規則

**Rule 1：只能放該主播專屬識別詞**
- ✅ 主播姓名、暱稱、角色特有識別詞
- ❌ 群組名稱（如 alluria）、世代名稱、廣泛標籤
- 原因：廣泛標籤出現在頻道大量影片中，導致所有成員頁面出現同一批影片

**Rule 2：歸屬判斷以標題主文為準，hashtag 不算依據**
- 主播名出現在 `【】` 內或正文 → 可信，可作為 keyword
- 主播名只出現在 hashtag → 可信度低（可能是 SEO 標籤），不能直接作為 keyword，需使用者確認

**Rule 3：多人合唱/合集影片的處理**
- 以標題主文中**明確出現的主播名**為 keyword 依據
- 若標題主文看不出哪些主播出現 → **不自行判斷**，列出待確認
- 待使用者**手動告知**該影片包含哪幾位主播後，才設定 keyword
- hashtag 中的主播名只能輔助參考，仍需使用者確認

**Rule 4：動手前必做的確認**
1. 確認該頻道主要剪輯哪幾位主播（使用者告知）
2. 只有被指名的主播才能加入設定
3. 驗算：「這個 keyword 是否只有這位主播的標題主文才有？不會出現在同頻道其他主播的影片標題嗎？」

### 三、typeKeywords 填寫規則
- 音樂剪輯常用：`歌切`、`歌回`、`cover`、`合唱`、`線下連動`
- ❌ 禁用 `粉絲精華`（太廣，誤抓非音樂影片）
- ❌ 禁用群組標籤（如 `alluria`）
- 影片剪輯不需 typeKeywords，改用 `excludeKeywords` 排除音樂關鍵字

### 四、音樂優先原則（防止同一影片重複出現）
`musicClipsChannelIds` 的 `typeKeywords` 與 `videoClipsChannelIds` 的 `excludeKeywords` 必須鏡像對齊：

```javascript
// 音樂剪輯
{ typeKeywords: ["歌切", "cover", "歌回", "合唱", "線下連動"] }
// 影片剪輯（必須包含上方全部詞）
{ excludeKeywords: ["歌切", "cover", "歌回", "合唱", "線下連動"] }
```

若影片標題同時含音樂與非音樂關鍵字 → **音樂優先，只放音樂剪輯**

### 五、新頻道加入後的驗證流程

**Step 1 — 主播歸屬**
| 來源 | 可信度 | 處理 |
|------|--------|------|
| 標題主文有主播名 | ✅ 高 | 自動歸入該主播 |
| 只有 hashtag 有主播名 | ⚠️ 低 | 列出待使用者確認 |
| 完全沒有主播名 | ❌ | 列出待使用者確認 |

**Step 2 — 音樂 or 影片分類（對 Step 1 ✅ 通過的影片）**
| 狀況 | 處理 |
|------|------|
| 只有音樂關鍵字 | 放音樂剪輯 |
| 只有影片關鍵字 | 放影片剪輯 |
| 兩者都有 | 音樂優先，只放音樂剪輯 |
| 都沒有 | 列出待使用者確認 |

**Step 3 — 待確認清單**
所有無法自動分類的影片 → 列出**標題＋日期**，由使用者逐一判斷後再設定。
**Claude 不自行隱藏任何影片，不自行決定分類。**
