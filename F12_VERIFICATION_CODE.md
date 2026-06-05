# 🧪 F12 驗證代碼 - 測試五步分類邏輯

## 📋 使用說明

1. 打開 詗雨蔻達 的頁面
2. 按 **F12** 打開開發者工具
3. 切換到 **Console** 標籤
4. 複製下方代碼粘貼到 Console 中運行
5. 查看輸出結果，驗證三個測試影片的分類

---

## 🔧 驗證代碼 1：測試三個影片的分類

```javascript
// ═══ 測試五步分類邏輯 ═══
(async function() {
  console.log('🧪 開始測試五步分類邏輯...\n');

  // 三個測試影片
  const testVideos = [
    { id: 'ENI3YCbU468', title: '【3周年紀念】統美眉', date: '2026-02-26' },
    { id: 'tYvq7Q6prns', title: '這是什麼好玩遊戲', date: '2026-02-14' },
    { id: 'o45tQSU0kdY', title: 'COCOCO玉山我要上來囉', date: '2024-12-13' }
  ];

  // 獲取當前 VTuber 信息
  const currentV = window.currentVTuber;
  if (!currentV) {
    console.error('❌ 無法獲取當前 VTuber 信息');
    return;
  }

  console.log(`✅ 當前 VTuber: ${currentV.name} (${currentV.id})`);
  console.log(`✅ API Key: ${currentV.ytApiKey ? '已設置' : '未設置'}\n`);

  // 獲取現有影片 ID
  let existingIds = new Set();
  let videosArray = [];
  if (Array.isArray(currentV.videos)) {
    videosArray = currentV.videos;
  } else if (currentV.videos && typeof currentV.videos === 'object') {
    videosArray = [
      ...(currentV.videos.covers || []),
      ...(currentV.videos.originals || []),
      ...(currentV.videos.officials || []),
      ...(currentV.videos.shorts || []),
      ...(currentV.videos.unclassified || [])
    ];
  }
  videosArray.forEach(v => existingIds.add(v.id));

  console.log(`📊 data.js 中已有 ${existingIds.size} 部影片\n`);

  // 獲取影片詳細信息
  async function getVideoDetails(videoIds) {
    const detailMap = {};
    
    for (let i = 0; i < videoIds.length; i += 50) {
      const batch = videoIds.slice(i, i + 50);
      const url = 'https://www.googleapis.com/youtube/v3/videos'
        + '?part=contentDetails,snippet,liveStreamingDetails'
        + '&id=' + batch.join(',')
        + '&key=' + encodeURIComponent(currentV.ytApiKey);
      
      try {
        const res = await fetch(url, { 
          headers: { 'Referer': 'https://shiukonata.github.io/MCStudio/' } 
        });
        const data = await res.json();
        
        (data.items || []).forEach(item => {
          const liveContent = item.snippet.liveBroadcastContent || 'none';
          const wasLive = !!(item.liveStreamingDetails && item.liveStreamingDetails.actualStartTime);
          
          // 解析 duration
          const dur = item.contentDetails.duration || 'PT0S';
          const m = dur.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/);
          const durationSec = (parseInt(m[1]||0)*3600) + (parseInt(m[2]||0)*60) + parseInt(m[3]||0);
          
          detailMap[item.id] = {
            duration: durationSec,
            liveContent: liveContent,
            wasLive: wasLive,
            title: item.snippet.title
          };
        });
      } catch (err) {
        console.error(`❌ API 調用失敗:`, err);
      }
    }
    
    return detailMap;
  }

  console.log('📡 正在從 YouTube API 獲取影片詳細信息...\n');
  const videoDetails = await getVideoDetails(testVideos.map(v => v.id));

  // 應用五步分類
  const results = {
    covers: [],
    originals: [],
    officials: [],
    shorts: [],
    unclassified: []
  };

  testVideos.forEach(item => {
    const vid = item.id;
    const title = item.title;
    const date = item.date;
    const titleLower = title.toLowerCase();
    const detail = videoDetails[vid];

    if (!detail) {
      console.error(`❌ 無法獲取 ${vid} 的詳細信息`);
      return;
    }

    console.log(`\n━━━ 分類影片: ${title} ━━━`);
    console.log(`   ID: ${vid}`);
    console.log(`   Duration: ${detail.duration}s | LiveContent: ${detail.liveContent} | WasLive: ${detail.wasLive}`);

    // 檢查是否已在 data.js
    if (existingIds.has(vid)) {
      console.log(`   📍 該影片已在 data.js 中，跳過`);
      return;
    }

    // STEP 1：排除直播存檔
    if (detail.liveContent !== 'none' || detail.wasLive) {
      console.log(`   ❌ [STEP 1] 直播存檔被排除（liveContent=${detail.liveContent}, wasLive=${detail.wasLive}）`);
      return;
    }

    // STEP 2：Cover 檢測
    if (titleLower.includes('cover') || titleLower.includes('歌ってみた')) {
      results.covers.push({ id: vid, title: `【Cover】${title}`, date: date });
      console.log(`   ✅ [STEP 2] 檢測到 Cover → covers`);
      return;
    }

    // STEP 2：Original 檢測
    if (titleLower.includes('original') || titleLower.includes('official') || titleLower.includes('原創')) {
      results.originals.push({ id: vid, title: `【Original】${title}`, date: date });
      console.log(`   ✅ [STEP 2] 檢測到 Original → originals`);
      return;
    }

    // STEP 3：詗雨蔻達特殊規則
    if (currentV.id === 'shiucoda') {
      if (titleLower.includes('demo')) {
        results.covers.push({ id: vid, title: `【Cover】${title}`, date: date });
        console.log(`   ✅ [STEP 3] 檢測到 demo（詗雨蔻達特殊規則）→ covers`);
        return;
      }
      if (titleLower.includes('自彈自唱')) {
        results.covers.push({ id: vid, title: `【Cover】${title}`, date: date });
        console.log(`   ✅ [STEP 3] 檢測到自彈自唱（詗雨蔻達特殊規則）→ covers`);
        return;
      }
    }

    // STEP 4：短片檢測
    if (detail.duration <= 60 && detail.duration > 0) {
      results.shorts.push({ id: vid, title: title, date: date, duration: detail.duration });
      console.log(`   ✅ [STEP 4] 檢測到短片（${detail.duration}s）→ shorts`);
      return;
    }

    // STEP 5：未分類
    results.unclassified.push({ id: vid, title: title, date: date });
    console.log(`   ✅ [STEP 5] 未分類 → unclassified`);
  });

  // 輸出結果
  console.log(`\n${'═'.repeat(60)}`);
  console.log(`📊 分類結果總結:`);
  console.log(`${'═'.repeat(60)}`);
  console.log(`   Covers: ${results.covers.length} 部`);
  console.log(`   Originals: ${results.originals.length} 部`);
  console.log(`   Officials: ${results.officials.length} 部`);
  console.log(`   Shorts: ${results.shorts.length} 部`);
  console.log(`   Unclassified: ${results.unclassified.length} 部`);

  if (results.unclassified.length > 0) {
    console.log(`\n✅ 期望結果：這三個影片應該全部出現在 unclassified 區`);
    console.log(`   JSON 結構供複製到 data.js:`);
    console.log(JSON.stringify(results, null, 2));
  } else if (results.shorts.length > 0) {
    console.log(`\n⚠️ 結果：有影片被分類到 Shorts（如果 ≤60秒是預期的）`);
  }

  console.log(`\n${'═'.repeat(60)}`);
  console.log('✅ 驗證完成！');
})();
```

---

## 🔧 驗證代碼 2：檢查 UU 播放列表中是否包含測試影片

```javascript
// ═══ 檢查 UU 播放列表 ═══
(async function() {
  console.log('🔍 檢查 UU 播放列表中的影片...\n');

  const currentV = window.currentVTuber;
  if (!currentV) {
    console.error('❌ 無法獲取當前 VTuber 信息');
    return;
  }

  const uploadsPlaylistId = 'UU' + currentV.youtubeChannelId.slice(2);
  const testVideoIds = ['ENI3YCbU468', 'tYvq7Q6prns', 'o45tQSU0kdY'];

  console.log(`✅ VTuber: ${currentV.name}`);
  console.log(`✅ 頻道 ID: ${currentV.youtubeChannelId}`);
  console.log(`✅ UU 播放列表: ${uploadsPlaylistId}`);
  console.log(`📍 搜尋測試影片: ${testVideoIds.join(', ')}\n`);

  let pageToken = null;
  let pageCount = 0;
  let foundCount = 0;
  let totalCount = 0;

  do {
    let url = 'https://www.googleapis.com/youtube/v3/playlistItems'
      + '?part=snippet'
      + '&playlistId=' + encodeURIComponent(uploadsPlaylistId)
      + '&maxResults=50'
      + '&key=' + encodeURIComponent(currentV.ytApiKey);
    if (pageToken) url += '&pageToken=' + encodeURIComponent(pageToken);

    try {
      const res = await fetch(url, { 
        headers: { 'Referer': 'https://shiukonata.github.io/MCStudio/' } 
      });
      const data = await res.json();

      if (data.error) {
        console.error(`❌ API 錯誤: ${data.error.message}`);
        break;
      }

      pageCount++;
      (data.items || []).forEach(item => {
        const vid = item.snippet.resourceId && item.snippet.resourceId.videoId;
        const title = item.snippet.title;
        const date = item.snippet.publishedAt ? item.snippet.publishedAt.slice(0, 10) : '';
        totalCount++;

        if (testVideoIds.includes(vid)) {
          console.log(`✅ 第 ${pageCount} 頁 - 找到測試影片: ${vid}`);
          console.log(`   標題: ${title}`);
          console.log(`   日期: ${date}\n`);
          foundCount++;
        }
      });

      pageToken = data.nextPageToken || null;
    } catch (err) {
      console.error(`❌ API 調用失敗:`, err);
      break;
    }
  } while (pageToken);

  console.log(`${'═'.repeat(60)}`);
  console.log(`📊 掃描結果:`);
  console.log(`   頁數: ${pageCount} 頁`);
  console.log(`   總影片數: ${totalCount} 部`);
  console.log(`   找到的測試影片: ${foundCount} 部`);
  console.log(`${'═'.repeat(60)}`);

  if (foundCount === 3) {
    console.log(`✅ 成功！所有三個測試影片都在 UU 播放列表中`);
  } else if (foundCount > 0) {
    console.log(`⚠️ 只找到 ${foundCount} 個測試影片`);
    console.log(`   可能的原因：`);
    console.log(`   1. 其他影片可能在播放列表更深處（超過 ${pageCount * 50} 部）`);
    console.log(`   2. 這些影片可能被私有化或刪除`);
  } else {
    console.log(`❌ 未找到任何測試影片`);
    console.log(`   可能的原因：`);
    console.log(`   1. 這些影片不在詗雨蔻達頻道的 UU 播放列表中`);
    console.log(`   2. 這些影片 ID 可能錯誤`);
    console.log(`   3. API 金鑰可能無效`);
  }
})();
```

---

## 🔧 驗證代碼 3：測試 Workflow 的去重邏輯

```javascript
// ═══ 驗證去重邏輯 ═══
(async function() {
  console.log('🔍 驗證 data.js 中的現有影片 ID...\n');

  const currentV = window.currentVTuber;
  if (!currentV) {
    console.error('❌ 無法獲取當前 VTuber 信息');
    return;
  }

  // 提取現有影片 ID
  let existingIds = new Set();
  let videosArray = [];

  if (Array.isArray(currentV.videos)) {
    videosArray = currentV.videos;
    console.log(`✅ videos 結構: 陣列（舊格式）`);
  } else if (currentV.videos && typeof currentV.videos === 'object') {
    videosArray = [
      ...(currentV.videos.covers || []),
      ...(currentV.videos.originals || []),
      ...(currentV.videos.officials || []),
      ...(currentV.videos.shorts || []),
      ...(currentV.videos.unclassified || [])
    ];
    console.log(`✅ videos 結構: 物件（新格式）`);
  }

  videosArray.forEach(v => existingIds.add(v.id));

  console.log(`✅ 提取影片 ID: ${existingIds.size} 部\n`);

  // 檢查測試影片是否已在 data.js
  const testVideoIds = ['ENI3YCbU468', 'tYvq7Q6prns', 'o45tQSU0kdY'];
  
  console.log(`📊 測試影片在 data.js 中的狀態:`);
  console.log(`${'─'.repeat(60)}`);
  
  testVideoIds.forEach(vid => {
    const exists = existingIds.has(vid);
    console.log(`   ${vid}: ${exists ? '✅ 已存在' : '❌ 不存在'}`);
  });

  console.log(`${'─'.repeat(60)}\n`);

  // 統計信息
  const sections = {
    'covers': currentV.videos.covers ? currentV.videos.covers.length : 0,
    'originals': currentV.videos.originals ? currentV.videos.originals.length : 0,
    'officials': currentV.videos.officials ? currentV.videos.officials.length : 0,
    'shorts': currentV.videos.shorts ? currentV.videos.shorts.length : 0,
    'unclassified': currentV.videos.unclassified ? currentV.videos.unclassified.length : 0
  };

  console.log(`📊 data.js 中的影片分佈:`);
  Object.entries(sections).forEach(([section, count]) => {
    if (count > 0) {
      console.log(`   ${section}: ${count} 部`);
    }
  });

  const total = Object.values(sections).reduce((a, b) => a + b, 0);
  console.log(`   總計: ${total} 部\n`);

  if (sections.unclassified > 0) {
    console.log(`✅ unclassified 區不為空 - 新影片應該會加入這裡`);
  } else {
    console.log(`⚠️ unclassified 區為空 - 新影片需要加入這裡`);
  }
})();
```

---

## 📋 驗證檢查清單

運行上述代碼後，檢查以下項目：

- [ ] **驗證代碼 1**：三個影片是否被正確分類為 `unclassified`？
- [ ] **驗證代碼 2**：三個影片是否都在 UU 播放列表中？
- [ ] **驗證代碼 3**：data.js 中的現有影片 ID 是否被正確提取？
- [ ] **邏輯驗證**：如果影片不符合 STEP 2-4，是否進入 unclassified？
- [ ] **缺失驗證**：如果影片被分類但不在 data.js，是否應該添加？

---

## 🎯 預期輸出

### **正確的輸出樣例**：

```
🧪 開始測試五步分類邏輯...

✅ 當前 VTuber: 詗雨蔻達 (shiucoda)
✅ API Key: 已設置

📊 data.js 中已有 50 部影片

📡 正在從 YouTube API 獲取影片詳細信息...

━━━ 分類影片: 【3周年紀念】統美眉 ━━━
   ID: ENI3YCbU468
   Duration: 300s | LiveContent: none | WasLive: false
   ✅ [STEP 5] 未分類 → unclassified

━━━ 分類影片: 這是什麼好玩遊戲 ━━━
   ID: tYvq7Q6prns
   Duration: 1200s | LiveContent: none | WasLive: false
   ✅ [STEP 5] 未分類 → unclassified

━━━ 分類影片: COCOCO玉山我要上來囉 ━━━
   ID: o45tQSU0kdY
   Duration: 45s | LiveContent: none | WasLive: false
   ✅ [STEP 4] 檢測到短片（45s）→ shorts

════════════════════════════════════════════════════════════
📊 分類結果總結:
════════════════════════════════════════════════════════════
   Covers: 0 部
   Originals: 0 部
   Officials: 0 部
   Shorts: 1 部
   Unclassified: 2 部

✅ 期望結果：這三個影片應該全部出現在 unclassified 或 shorts 區
```

---

## ⚠️ 常見問題排查

| 問題 | 原因 | 解決方法 |
|------|------|--------|
| API 調用失敗 | API Key 無效或超配額 | 檢查 data.js 中的 ytApiKey |
| 無法獲取 VTuber 信息 | currentVTuber 未定義 | 刷新頁面，確保詗雨蔻達頁面已加載 |
| 返回 0 結果 | 影片不在播放列表中 | 檢查影片 ID 是否正確 |
| duration 為 0 | API 未返回詳細信息 | 檢查 API 配額和網絡連接 |

