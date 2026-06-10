# lubee（神無月鹿比）視頻數據獲取指南

## 📋 基本信息
- **VTuber:** lubee（神無月鹿比）
- **Channel ID:** UCF8icKLU4FGF8Ln-KlKakSg
- **API Key:** AIzaSyBsmWLwQLY-8wszHDufVCZaGZ0RKkRjPlM
- **分類方式:** UU - UULV - UUSH = Unclassified

---

## 🔧 獲取步驟

### 第一步：打開無痕模式瀏覽器
1. **完全關閉無痕視窗**
2. **重新打開新的無痕視窗**
3. **訪問任何網站**（例如 google.com）

### 第二步：在控制台中運行以下代碼

在瀏覽器控制台（F12 → Console）中，逐個粘貼並運行：

#### 程式碼 1：定義配置和幫助函數
```javascript
// lubee 的配置
const config = {
  channelId: "UCF8icKLU4FGF8Ln-KlKakSg",
  apiKey: "AIzaSyBsmWLwQLY-8wszHDufVCZaGZ0RKkRjPlM"
};

// 計算播放列表 ID
const uploadsPlaylist = "UU" + config.channelId.slice(2);
const livePlaylist = "UULV" + config.channelId.slice(2);
const shortsPlaylist = "UUSH" + config.channelId.slice(2);

console.log("🔍 lubee 視頻獲取配置：");
console.log("- UU (所有上傳):", uploadsPlaylist);
console.log("- UULV (直播存檔):", livePlaylist);
console.log("- UUSH (Shorts):", shortsPlaylist);

// 幫助函數：獲取播放列表的所有視頻
async function fetchAllPlaylistVideos(playlistId, label) {
  console.log(`\n📊 開始獲取 ${label}...`);
  let allItems = [];
  let pageToken = null;
  let pageCount = 0;

  try {
    do {
      const url = new URL("https://www.googleapis.com/youtube/v3/playlistItems");
      url.searchParams.set("part", "snippet");
      url.searchParams.set("playlistId", playlistId);
      url.searchParams.set("maxResults", "50");
      url.searchParams.set("pageToken", pageToken || "");
      url.searchParams.set("key", config.apiKey);

      const response = await fetch(url.toString());
      const data = await response.json();

      if (data.error) {
        console.error(`❌ 錯誤: ${data.error.message}`);
        return null;
      }

      allItems.push(...(data.items || []));
      pageToken = data.nextPageToken || null;
      pageCount++;

      console.log(`  ✓ 頁面 ${pageCount}：${(data.items || []).length} 項 (總計: ${allItems.length})`);
    } while (pageToken);

    console.log(`✅ 完成 ${label}：共 ${pageCount} 頁，${allItems.length} 部視頻`);
    return allItems;
  } catch (err) {
    console.error(`❌ 獲取失敗: ${err.message}`);
    return null;
  }
}
```

#### 程式碼 2：執行獲取（逐個執行）
```javascript
// 執行獲取
let allVideos = await fetchAllPlaylistVideos(uploadsPlaylist, "UU (所有上傳)");
```

```javascript
let liveVideos = await fetchAllPlaylistVideos(livePlaylist, "UULV (直播存檔)");
```

```javascript
let shortsVideos = await fetchAllPlaylistVideos(shortsPlaylist, "UUSH (Shorts)");
```

#### 程式碼 3：計算和分類
```javascript
// 計算統計
console.log("\n📈 統計結果：");
console.log("- 所有上傳:", allVideos.length);
console.log("- 直播存檔:", liveVideos.length);
console.log("- Shorts:", shortsVideos.length);

// 計算未分類視頻
const liveVideoIds = new Set(liveVideos.map(v => v.snippet.resourceId.videoId));
const shortsVideoIds = new Set(shortsVideos.map(v => v.snippet.resourceId.videoId));

const unclassifiedVideos = allVideos.filter(item => {
  const vid = item.snippet.resourceId.videoId;
  return !liveVideoIds.has(vid) && !shortsVideoIds.has(vid);
});

console.log("- 未分類:", unclassifiedVideos.length);
console.log(`\n計算方式: ${allVideos.length} (UU) - ${liveVideos.length} (UULV) - ${shortsVideos.length} (UUSH) = ${unclassifiedVideos.length} (未分類)`);
```

#### 程式碼 4：提取視頻數據（生成 JSON）
```javascript
// 提取未分類視頻的數據
const videosData = unclassifiedVideos.map(item => {
  const snippet = item.snippet;
  return {
    id: snippet.resourceId.videoId,
    title: snippet.title,
    date: snippet.publishedAt.slice(0, 10)
  };
});

// 生成可複製的 JSON（供貼到 data.js）
console.log("\n📋 複製以下 JSON 到 data.js 中的 lubee.videos：\n");
console.log(JSON.stringify(videosData, null, 2));
```

---

## ✅ 預期結果

運行完程式碼後，應該看到：
1. ✅ 三個播放列表的視頻數量
2. ✅ 計算公式確認
3. ✅ 可複製的 JSON 數據

---

## 📝 後續步驟

1. 複製第 4 個程式碼輸出的 JSON
2. 打開 `js/data.js`
3. 找到 lubee 的 `videos: []` 字段
4. 替換為複製的 JSON 數據
5. 提交和推送到 GitHub

---

**提示：** 如果任何步驟失敗，請查看控制台是否有錯誤信息，並確認 API Key 仍然有效。
