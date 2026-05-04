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
