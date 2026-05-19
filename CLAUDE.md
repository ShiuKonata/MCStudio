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

### 兩個陣列的用途
| 陣列 | 對應頁籤 | 收錄內容 |
|------|----------|----------|
| `musicClipsChannelIds` | 熱門音樂剪輯 | 歌切、歌回、cover、歌唱相關 |
| `videoClipsChannelIds` | 熱門影片剪輯 | 一般精華、遊戲、聊天等非音樂內容 |

### keywords 填寫規則（最重要，違反必出錯）

**Rule 1：keywords 只能放「該主播專屬」的識別詞**
- ✅ 可以放：主播姓名、暱稱、角色特有 hashtag（如 `#蕗live`、`#涅手涅腳`）
- ❌ 絕對不能放：群組名稱（如 `alluria`）、世代名稱、廣泛標籤
- 原因：群組 tag 幾乎出現在該頻道所有影片標題，會導致所有成員的頁面都出現同一批影片

**Rule 2：同一頻道加入多位主播時，每位主播的 keywords 必須互不交叉**
- 加入新設定前，先確認該 keyword 是否也出現在「同頻道其他主播」的影片標題中
- 若會交叉，改用更精確的詞

**Rule 3：多人合唱/合集影片要出現在多位主播頁面的做法**
- 使用影片標題內「各主播的專屬 hashtag」作為 keyword（如 `#這很魁以` → 魁 Kai 專屬）
- 若某主播在標題沒有專屬 hashtag，改用影片的「唯一標題詞」（如「國境之南」）
- ❌ 不能用「所有人共有的 tag」（如 alluria）來讓影片出現在所有人頁面

**Rule 4：修改或新增頻道前必須做的確認**
1. 確認該頻道主要剪輯哪幾位主播（使用者會告知）
2. 只有被指名的主播才能加入該頻道的設定
3. 加入設定後，腦內驗算：「這個 keyword 是否只有這位主播的影片才會有？」

### typeKeywords 填寫規則
- 設定了 `typeKeywords`：只顯示標題含其中一個詞的影片
- 沒設定 `typeKeywords` 且沒設定 `excludeKeywords`：自動套用全域音樂關鍵字篩選
- 音樂剪輯常用 typeKeywords：`歌切`、`歌回`、`cover`、`合唱`、`線下連動`、`粉絲精華`
- 影片剪輯不需 typeKeywords，改用 `excludeKeywords` 排除音樂關鍵字
