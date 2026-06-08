/**
 * YouTube API 診斷腳本
 * 用途：測試 API 調用並診斷為什麼 workflow 沒有檢測到新視頻
 * 執行：node scripts/test-api-fetch.js
 */

const https = require('https');
const fs = require('fs');

// 讀取 API Key
const dataPath = './js/data.js';
let dataContent = '';

try {
  dataContent = fs.readFileSync(dataPath, 'utf8');
} catch (e) {
  console.log('❌ 讀取 data.js 失敗');
  process.exit(1);
}

const apiKeyMatch = dataContent.match(/ytApiKey:\s*["']([^"']+)["']/);
const API_KEY = apiKeyMatch ? apiKeyMatch[1] : null;

if (!API_KEY) {
  console.log('❌ 無 API 金鑰');
  process.exit(1);
}

// 測試 ShiuCoda（第一個 VTuber）
const testVTuber = {
  id: 'shiucoda',
  name: '詩雨蔻達',
  channelId: 'UCuPHlMEd0cR-tvAYPjGWVwQ'
};

console.log('════════════════════════════════════════');
console.log('🔍 YouTube API 診斷工具');
console.log('════════════════════════════════════════\n');

console.log(`📋 測試對象: ${testVTuber.name}`);
console.log(`📍 Channel ID: ${testVTuber.channelId}`);
console.log(`🔑 API Key: ${API_KEY.substring(0, 10)}...${API_KEY.substring(-10)}\n`);

// 構造 Uploads Playlist ID
const uploadsId = 'UU' + testVTuber.channelId.substring(2);
console.log(`📚 Uploads Playlist ID: ${uploadsId}\n`);

// 調用 API
const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${uploadsId}&maxResults=50&key=${API_KEY}`;

console.log(`📡 API URL: ${url}\n`);
console.log('⏳ 正在調用 API...\n');

https.get(url, { headers: { 'Referer': 'https://shiukonata.github.io/MCStudio/' } }, (res) => {
  console.log(`✅ HTTP Status: ${res.statusCode}`);
  console.log(`📝 Content-Type: ${res.headers['content-type']}\n`);

  if (res.statusCode !== 200) {
    console.log(`❌ 非 200 狀態碼，可能有問題\n`);
  }

  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    try {
      const result = JSON.parse(data);

      // 檢查 API 錯誤
      if (result.error) {
        console.log(`❌ API 返回錯誤:\n${JSON.stringify(result.error, null, 2)}\n`);
        process.exit(1);
      }

      // 檢查響應結構
      if (!result.items) {
        console.log(`⚠️ 無 items 欄位\n`);
        console.log(`📊 API 返回欄位:\n${JSON.stringify(Object.keys(result), null, 2)}\n`);
        process.exit(1);
      }

      console.log(`📬 API 返回 ${result.items.length} 部影片\n`);
      console.log(`📊 最新影片信息:\n`);

      // 顯示最新 5 部影片
      result.items.slice(0, 5).forEach((item, idx) => {
        const title = item.snippet?.title || '(無標題)';
        const vid = item.snippet?.resourceId?.videoId || '(無 ID)';
        const date = item.snippet?.publishedAt?.substring(0, 10) || '(無日期)';

        console.log(`[${idx}] ${date} - ${vid}`);
        console.log(`    標題: ${title.substring(0, 60)}...`);

        // 檢查分類關鍵詞
        const tL = title.toLowerCase();
        const isCover = tL.includes('cover') || tL.includes('歌ってみた');
        const isOriginal = tL.includes('original') || tL.includes('official') || tL.includes('原創');
        const isLivestream = tL.includes('直播') || tL.includes('archive') || tL.includes('livestream');

        if (isLivestream) {
          console.log(`    分類: 🚫 直播（已排除）`);
        } else if (isCover) {
          console.log(`    分類: ✅ Cover`);
        } else if (isOriginal) {
          console.log(`    分類: ✅ Original`);
        } else {
          console.log(`    分類: ❓ 未分類`);
        }

        console.log('');
      });

      // 檢查分頁
      if (result.nextPageToken) {
        console.log(`⚠️ 有更多頁面 (nextPageToken: ${result.nextPageToken.substring(0, 20)}...)\n`);
      }

      // 驗證最新影片是否在 data.js 中
      console.log(`🔎 驗證最新影片:\n`);
      const latestVideo = result.items[0];
      const latestVid = latestVideo.snippet?.resourceId?.videoId;
      const latestTitle = latestVideo.snippet?.title || '';
      const latestDate = latestVideo.snippet?.publishedAt?.substring(0, 10) || '';

      if (dataContent.includes(`"${latestVid}"`) || dataContent.includes(`'${latestVid}'`)) {
        console.log(`✅ 最新影片已在 data.js 中: ${latestVid}`);
        console.log(`   標題: ${latestTitle}`);
        console.log(`   日期: ${latestDate}\n`);
      } else {
        console.log(`❌ 最新影片不在 data.js 中: ${latestVid}`);
        console.log(`   標題: ${latestTitle}`);
        console.log(`   日期: ${latestDate}`);
        console.log(`   ⚠️ 這表示新視頻沒有被自動添加到 data.js\n`);
      }

      console.log('════════════════════════════════════════');
      console.log('✅ 診斷完成\n');

      // 總結
      if (latestDate > '2026-06-06') {
        console.log('🎯 結論: 有新視頻（日期在 6/6 之後），應該被 workflow 檢測到');
      } else if (latestDate === '2026-06-06') {
        console.log('🎯 結論: 最新視頻日期是 6/6，可能是你上傳的 Cover');
      } else {
        console.log('🎯 結論: 最新視頻日期在 6/6 之前，沒有新視頻');
      }

    } catch (e) {
      console.log(`❌ JSON 解析失敗: ${e.message}\n`);
      console.log(`📝 返回數據: ${data.substring(0, 500)}...\n`);
      process.exit(1);
    }
  });
}).on('error', (err) => {
  console.log(`❌ 網路錯誤: ${err.message}\n`);
  process.exit(1);
});
