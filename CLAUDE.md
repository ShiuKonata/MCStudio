# MC組事務所 — 專案說明（Claude 專用）

---

## 🚨 最高優先規則（2026-06-06 新增）：執行前確認制度

**從 2026-06-06 起，永遠遵守以下規則：**

- ✅ 用戶的每一句話，我都會先說出「要執行什麼操作」
- ✅ 等待用戶明確回答「確認」
- ✅ 用戶確認後，我才執行該操作
- ✅ **絕對禁止自作聰明、自行判斷、乱動任何文件**
- ✅ 如有疑問，必須先詢問用戶而非直接執行

**此規則永遠不會被忽略，優先級高於所有其他規則。**

---

## 🔴 最優先權：詩雨蔻達 > 26位Vtuber（2026-05-30 新增）

### 詩雨蔻達影片分類規章

最優先權 : 詩雨蔻達 > 26位Vtuber

步骤1：YouTube API 获取全部视频 → 排除直播（UULV播放列表）

步骤2：检测未分類區影片的標題，共 5 個關鍵字（不分大小寫）：
  → 放到【Cover】區：contain「cover」或「歌ってみた」
  → 放到【Original】區：contain「Original」或「Official」或「原創」
  若分類後的影片長度小於等於60秒，該影片應在「Shorts 區」和「Cover/Original 區」同時顯示，並在Shorts區上標記

步驟3：新增詩雨蔻達的特殊規則，針對未分類區的影片標題篩選出底下a跟b規則，這兩個特殊規則都需放到Cover區，若特殊規則篩選出來的影片長度小於等於60秒，該影片應在「Shorts 區」和「Cover/Original 區」同時顯示，並在Shorts區上標記
a.標題含有demo
b.標題含有自彈自唱

步驟4：標記≤60秒的影片為 Shorts

步驟5：等待用戶手動分類（一次完成所有調整）

規則1 : 未分類區在偵測步驟1 > 2 > 3 > 4  共4個自動步驟都要出現 ,直到步驟4完成後 ,等待步驟5用戶手動分類結束 ,才要隱藏未分類區

規則2 : 在還沒分類前 ,未分類區都要一直保持存在 ,裡面的影片都要被Youtube API 獲取的影片放在裡面 ,且根據步驟 ,逐漸減少

規則3 : 每個頁面的影片區都要照日期順序排序 ,排序須從最新>最舊排序

規則4 : 全部27位都要這樣做到 ,不准擅自增加代碼或擅自修改代碼

規則5 : 全部26位Vtuber 通通都要照詩雨蔻達的範本做規則 / 條件 / 步驟 / 設計版面 , 除了特殊規則 ,特殊規則屬於個別Vtuber ,互相不抄襲 ,不拷貝 , 不套用 ,禁止用特殊規則套用到別的Vtuber身上 ,複製範本 ,但不能複製特殊規則 ,特殊規則屬個人持有

規則6 : 當步驟1 跟 2 完成後 ,在等待用戶提供步驟3之前 ,已過濾步驟1跟步驟2的剩餘影片 ,全部需要放到未分類區等待分類

規則7 : 每個Vtuber 的加載速度要確實優化 ,讓用戶不用花時間等待加載 ,且不要在同一個Vtuber底下每點一個頁面就重新加載一次 ,理應只要加載一次就要全部都暫存到瀏覽者的暫存區

規則8 : 每6小時就要自動更新 ,以防沒有抓到Vtuber上傳的任何影片

規則9 : 不管是修復 / 修改 / 建立 / 嘗試 ....等 ,對網站有任何更動 ,都需要直接上傳到網路上 ,讓用戶確認是否有正確變動

規則10 : 當網站有問題 ,需要還原的時候請過問用戶是否還原 ,禁止自行還原 

規則11 : 當一定要還原版本 ,禁止把claude.md 的規則/ 步驟 ?禁止事項還原

禁止事項 : 詩雨蔻達是全部26位Vtuber的範本 ,當要求claude ai 做好範本(不管是頁面或者是規則 / 條件 / 步驟 / 設計版面)之後 ,只要用戶說完成就禁止修改 ,取代 ,檢測或自作主張想要串改代碼 ,除非用戶提出有疑慮才能做修改

---

## 🚨 最高優先規則：剪輯頻道收錄資格（掃描前必讀）

### Rule 0-A：只收錄預見娛樂 27 位 Vtuber
- 預見娛樂共 27 位成員，從零期生至六期生，全部列於 `data.js`
- 掃描任何剪輯頻道時，**非這 27 位一律不收錄，無需詢問、無需確認**
- 判斷方式：直接比對 `data.js` 中是否有該名字的成員資料；沒有 → 跳過

### Rule 0-B：ft. 標注需詢問是否收錄
- 若影片標題**主文沒有出現**27 位成員名字，但有以 `ft.`、`feat.`、`×`、`X` 等方式標注預見娛樂成員
  → **必須列出該影片，詢問使用者是否收錄**，不自行決定
- 範例：`【某頻道】cover 曲名 ft. 詩雨蔻達` → 列出待確認
- hashtag 標注同樣適用此規則（僅出現於 hashtag 的成員名視同 ft.）

---

## 💾 備份規則（2026-05-21 新增）

### 備份腳本位置
`C:\Claude Ai\backup_site.ps1`

### 何時執行備份
- **大規模修改前**（例如批次新增多個剪輯頻道、改動多個 VTuber 資料）
- **有疑慮的操作前**（不確定某個修改是否正確時）
- **使用者要求時**

### 執行方式
```powershell
powershell -ExecutionPolicy Bypass -File "C:\Claude Ai\backup_site.ps1"
```

### 備份內容
- **git tag**：在 GitHub 上標記為 `backup-YYYY-MM-DD_HHMM`，可隨時還原
- **本機檔案**：複製 12 個關鍵檔案至 `C:\Claude Ai\備份\backup-YYYY-MM-DD_HHMM\`，保留最近 30 份

### 還原方式
```powershell
# 還原單一檔案（最常用）
git checkout backup-2026-05-21_2304 -- js/data.js

# 或直接從本機備份資料夾複製
```

---

## 🔴 HTML 檔案編碼安全規則（2026-05-21 因亂碼事件新增）

### 背景
Commit `0efbcdc` 使用 Edit tool 對 HTML 檔案進行批次修改，導致中文字元全部損壞為 PUA 字元（U+E000–U+F8FF）並加入 UTF-8 BOM，網站完全無法顯示。

### 強制規則

**Rule E-1：禁止用 Edit tool 批次修改含中文的 HTML 檔案**
- ❌ 禁止：對 index.html、vtubers.html、vtuber.html 等含中文的 HTML 使用 Edit tool 進行正則/批次替換
- ✅ 正確：用 PowerShell 的字串替換（`-replace`）搭配 UTF8NoBOM 儲存

**Rule E-2：寫入 HTML 檔案必須用 UTF-8 without BOM**
```powershell
# 正確寫法
$utf8NoBOM = New-Object System.Text.UTF8Encoding($false)
$content = [IO.File]::ReadAllText("file.html", [Text.UTF8Encoding]::new($true))
# 修改 $content ...
[IO.File]::WriteAllText("file.html", $content, $utf8NoBOM)

# ❌ 錯誤寫法（會加 BOM）
# Set-Content -Encoding UTF8 ...
# [IO.File]::WriteAllText("file.html", $content, [Text.Encoding]::UTF8)
```

**Rule E-3：commit 前 pre-commit hook 會自動檢查**
- `.git/hooks/pre-commit` 已建立，會檢查 BOM 與 PUA 字元
- 若出現 ❌ 訊息代表有編碼問題，不能繼續 commit
- 若 hook 被跳過（--no-verify），代表繞過了保護，**嚴禁使用 --no-verify**

**Rule E-4：發現亂碼時的修復流程**
1. `git log --oneline -- <file>` 找到最後一個正確的 commit hash
2. `git checkout <good-hash> -- <file>` 還原
3. 用 PowerShell 重新套用需要的修改
4. 用 UTF8NoBOM 儲存後再 commit

---

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
- ✅ 主播姓名、暱稱、角色特有識別詞、群組名稱（如 alluria）、世代名稱（0～6期生）
- ❌ 廣泛標籤（如「精華」「集錦」等過於寬泛的詞）
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

> ⚡ **標準做法：直接用 YouTube API 掃描頻道，不要請使用者手動貼標題。**
> 使用者手動貼標題只適用於頻道無法存取的特殊情況。

#### 5-A　API 掃描流程（標準，適用所有情況）

**⛔ 禁止要求使用者提供 channelId**
使用者只需提供**頻道連結**（如 `https://www.youtube.com/@MICHAN1231K`）。
Claude 必須自行用 API 查詢並驗證，原因：
- 頻道頁面上同時存在影片ID、播放清單ID等大量ID，使用者極易選錯
- channelId 查詢是 Claude 的責任，不應轉嫁給使用者

**Step 0-A — 從頻道 handle 查詢 channelId**
```
GET https://www.googleapis.com/youtube/v3/channels
  ?part=snippet
  &forHandle={handle}        ← 從 URL 取出，例：MICHAN1231K
  &key={ytApiKey}
  &Referer: https://shiukonata.github.io/MCStudio/
```
回傳的 `items[0].id` 即為正確 channelId，`items[0].snippet.title` 用來向使用者確認頻道名稱。
**必須顯示頻道名稱讓使用者確認，才能繼續掃描。**

**Step 0-B — 取得頻道上傳播放清單 ID**
```
uploadsPlaylistId = "UU" + channelId.slice(2)
// 例：UC7KF3UyPn2SFM-3oLApYYSQ → UU7KF3UyPn2SFM-3oLApYYSQ
```
API Key 位於 `js/data.js` 任一 vtuber 的 `ytApiKey` 欄位（全站共用同一把）。

**Step 1 — 抓取所有影片**
```
GET https://www.googleapis.com/youtube/v3/playlistItems
  ?part=snippet
  &playlistId={uploadsPlaylistId}
  &maxResults=50
  &key={ytApiKey}
  &pageToken={nextPageToken}   ← 有 nextPageToken 就繼續翻頁，直到抓完
```
每次呼叫消耗 1 單位，1000 部影片約 20 單位，遠低於每日 10,000 配額。

**Step 2 — 主播歸屬判斷**
| 來源 | 可信度 | 處理 |
|------|--------|------|
| 標題主文有主播名 | ✅ 高 | 自動歸入該主播 |
| 只有 hashtag 有主播名 | ⚠️ 低 | 列入待確認清單 |
| 完全沒有主播名 | ❌ | 列入待確認清單 |

**Step 3 — 音樂 or 影片分類（僅對 Step 2 ✅ 通過的影片）**
| 狀況 | 處理 |
|------|------|
| 標題含音樂關鍵字（歌切/cover/歌回/合唱…） | 放音樂剪輯 |
| 標題無音樂關鍵字 | 放影片精華 |
| 兩者都有 | 音樂優先，只放音樂剪輯 |
| 分類不明 | 列入待確認清單 |

**Step 4 — 回報結果給使用者**
1. 先列出「自動分類完成」的摘要（幾部音樂 / 幾部影片）
2. 再列出**待確認清單**（標題 ＋ 日期），請使用者逐一判斷
3. 收到確認後才寫入 data.js

#### 5-B　手動貼標題流程（備用，僅限 API 無法存取時）
使用者自行提供標題清單 → 套用 Step 2～4 的同樣規則。

**Step 3 — 待確認清單**
所有無法自動分類的影片 → 列出**標題＋日期**，由使用者逐一判斷後再設定。
**Claude 不自行隱藏任何影片，不自行決定分類。**

### 六、確認範圍與設定副作用規則（⚠️ 重要，防止未確認影片意外出現）

**Rule A：確認範圍只涵蓋被明確列出的影片**
- 使用者確認某部影片屬於某分類 → 只代表**那一部**通過
- 不能用設定邏輯的副作用（如移除 keywords）讓其他未確認的影片一併進來
- 若無法針對單部影片精確設定，必須先告知使用者「這樣設定會同時帶入以下未確認影片：…」並等待同意

**Rule B：設定變更前必須進行影響範圍評估**
在套用任何 keywords／excludeKeywords 變更之前，必須自問：
> 「這個設定除了涵蓋使用者確認的影片之外，還會讓哪些影片進入或消失？」

若答案是「還會影響其他影片」→ 必須列出清單告知使用者，等確認後才能動手。

**Rule C：每次確認後主動提示剩餘未分類影片**
使用者說明完部分影片的分類後，若該頻道還有其他尚未被分類的影片，Claude 必須主動提示：
> 「以下影片還沒有被分類，請問要怎麼處理？」
> 列出：**標題 ＋ 日期**

目的：確保每部影片都被明確分配，不留模糊地帶，也不讓任何影片因為設定的廣泛性意外出現。
