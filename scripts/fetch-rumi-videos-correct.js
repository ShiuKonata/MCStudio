#!/usr/bin/env node
/**
 * 使用詩雨蔻達的完全相同方式抓取 rumi 的全部影片
 * 直接複製詩雨蔻達網站的 fetch() 邏輯到 Node.js
 */

const fs = require('fs');

const CHANNEL_ID = 'UCswRX8mNNdn1fjRctZqzjgA';
const UPLOADS_ID = 'UU' + CHANNEL_ID.slice(2);
const API_KEY = 'AIzaSyBsmWLwQLY-8wszHDufVCZaGZ0RKkRjPlM';

async function fetchAllVideos() {
  console.log('🎬 使用詩雨蔻達的方式完整抓取 rumi 影片\n');
  console.log(`📌 頻道: ${CHANNEL_ID}`);
  console.log(`📌 播放列表: ${UPLOADS_ID}\n`);

  const rawVideos = [];
  let pageToken = '';
  let pageCount = 0;

  try {
    do {
      pageCount++;
      console.log(`📥 正在抓取第 ${pageCount} 頁...`);

      // 完全複製詩雨蔻達網站的 URL 構造方式（第 1250 行）
      const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${UPLOADS_ID}&maxResults=50&key=${API_KEY}${pageToken ? '&pageToken=' + pageToken : ''}`;

      // 使用 Node.js 的 fetch（與瀏覽器相同）
      const res = await fetch(url);

      if (!res.ok) {
        console.log(`❌ HTTP ${res.status}: ${res.statusText}`);
        break;
      }

      const json = await res.json();

      if (json.error) {
        console.log(`❌ API 錯誤: ${json.error.message}`);
        break;
      }

      const items = json.items || [];
      console.log(`   ✅ +${items.length} 部，累計 ${rawVideos.length + items.length} 部`);

      // 完全複製詩雨蔻達的資料結構（第 1254-1262 行）
      items.forEach(item => {
        const vid = item.snippet.resourceId?.videoId;
        if (!vid) return;
        rawVideos.push({
          id:    vid,
          title: item.snippet.title || '',
          date:  (item.snippet.publishedAt || '').slice(0, 10),
          thumb: item.snippet.thumbnails?.medium?.url || ''
        });
      });

      pageToken = json.nextPageToken || '';
    } while (pageToken && pageCount < 30);

    console.log(`\n🎉 成功獲取 ${rawVideos.length} 部影片！`);

    // 依日期由新到舊排序（詩雨蔻達第 1270 行）
    rawVideos.sort((a, b) => (b.date > a.date ? 1 : -1));

    // 保存為 JSON
    fs.writeFileSync('rumi-videos-complete.json', JSON.stringify({ items: rawVideos }, null, 2), 'utf8');
    console.log('✅ 結果已保存到 rumi-videos-complete.json\n');

    return rawVideos;
  } catch (e) {
    console.log(`❌ 錯誤: ${e.message}`);
    return [];
  }
}

// 執行
fetchAllVideos();
