/**
 * rumi 影片自動分類腳本
 * 功能：抓取全部 UU 播放列表影片，使用 STEP 1-5 進行分類
 */

const https = require('https');
const fs = require('fs');

// rumi 的配置
const VTUBER = {
  id: 'rumi',
  name: '懶貓子Rumi',
  channelId: 'UCswRX8mNNdn1fjRctZqzjgA',
};

// 從 data.js 讀取 API Key
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

console.log('════════════════════════════════════════');
console.log('🎬 rumi（懶貓子Rumi）影片自動分類');
console.log('════════════════════════════════════════\n');

// 轉換 Channel ID 為 Uploads Playlist ID
const uploadsId = 'UU' + VTUBER.channelId.substring(2);

console.log(`📊 基本信息：`);
console.log(`  VTuber: ${VTUBER.name}`);
console.log(`  Channel ID: ${VTUBER.channelId}`);
console.log(`  Uploads Playlist: ${uploadsId}\n`);

/**
 * STEP 1: 過濾直播存檔
 */
function isLivestream(title) {
  const lowerTitle = title.toLowerCase();
  return lowerTitle.includes('直播') ||
         lowerTitle.includes('archive') ||
         lowerTitle.includes('livestream') ||
         lowerTitle.includes('live');
}

/**
 * STEP 2: 偵測 5 個關鍵詞
 */
function detectKeywords(title) {
  const lowerTitle = title.toLowerCase();

  const keywords = {
    cover: lowerTitle.includes('cover') || lowerTitle.includes('歌ってみた'),
    original: lowerTitle.includes('original') || lowerTitle.includes('official') || lowerTitle.includes('原創'),
  };

  return keywords;
}

/**
 * STEP 3: rumi 的特殊規則
 */
function applyRumiRules(title, keywords) {
  const lowerTitle = title.toLowerCase();

  // rumi 沒有特殊規則（可根據需要添加）

  return keywords;
}

/**
 * STEP 4: 檢查是否為 Shorts
 */
function isShorts(duration) {
  return duration && duration <= 60;
}

/**
 * STEP 5: 分配分類
 */
function classify(title, duration, keywords) {
  let category = 'general'; // 默認分類

  if (keywords.cover) {
    category = 'originals_manual'; // cover → originals_manual
  } else if (keywords.original) {
    category = 'originals_manual'; // original → originals_manual
  }

  return category;
}

/**
 * 遞迴獲取全部播放列表影片
 */
function fetchAllVideos(playlistId, pageToken = null) {
  return new Promise((resolve) => {
    const url = new URL('https://www.googleapis.com/youtube/v3/playlistItems');
    url.searchParams.append('part', 'snippet,contentDetails');
    url.searchParams.append('playlistId', playlistId);
    url.searchParams.append('maxResults', '50');
    url.searchParams.append('key', API_KEY);

    if (pageToken) {
      url.searchParams.append('pageToken', pageToken);
    }

    https.get(url.toString(), { headers: { 'Referer': 'https://shiukonata.github.io/MCStudio/' } }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          const result = JSON.parse(data);

          if (result.error) {
            console.log(`❌ API 錯誤: ${result.error.message}`);
            resolve([]);
            return;
          }

          let items = result.items || [];

          // 如果有下一頁，繼續抓取
          if (result.nextPageToken) {
            console.log(`  ⏳ 獲取第 ${Math.ceil((items.length) / 50)} 頁...`);
            fetchAllVideos(playlistId, result.nextPageToken).then(nextItems => {
              resolve([...items, ...nextItems]);
            });
          } else {
            resolve(items);
          }
        } catch (e) {
          console.log(`❌ JSON 解析失敗: ${e.message}`);
          resolve([]);
        }
      });
    }).on('error', (err) => {
      console.log(`❌ 網路錯誤: ${err.message}`);
      resolve([]);
    });
  });
}

/**
 * 主程式
 */
(async () => {
  console.log('📥 正在抓取全部 UU 播放列表影片...\n');

  const allItems = await fetchAllVideos(uploadsId);

  if (allItems.length === 0) {
    console.log('❌ 無法獲取影片');
    process.exit(1);
  }

  console.log(`\n✅ 成功獲取 ${allItems.length} 部影片\n`);

  // 分類結果
  const classified = {
    videos: [],
    shorts: [],
    originals_manual: [],
    premiere: [],
    general: [],
    vlog: [],
    commerce: [],
    memberVideos: [],
  };

  const stats = {
    total: 0,
    livestream: 0,
    cover: 0,
    original: 0,
    general: 0,
    shorts: 0,
    unclassified: 0,
  };

  console.log('📊 開始分類影片（STEP 1-5）...\n');

  allItems.forEach((item, idx) => {
    const videoId = item.snippet?.resourceId?.videoId;
    const title = item.snippet?.title || '(無標題)';
    const date = item.snippet?.publishedAt?.substring(0, 10) || '(無日期)';
    const duration = item.contentDetails?.videoLength ? parseDuration(item.contentDetails.videoLength) : null;

    if (!videoId) return;

    stats.total++;

    // STEP 1: 過濾直播
    if (isLivestream(title)) {
      console.log(`🚫 [${idx + 1}] ${date} - 直播已排除: ${title.substring(0, 50)}`);
      stats.livestream++;
      return;
    }

    // STEP 2: 偵測關鍵詞
    let keywords = detectKeywords(title);

    // STEP 3: 應用特殊規則
    keywords = applyRumiRules(title, keywords);

    // STEP 4: 檢查 Shorts
    let isShort = isShorts(duration);

    // STEP 5: 分配分類
    let category = classify(title, duration, keywords);

    if (isShort) {
      classified.shorts.push({ id: videoId, title, date });
      console.log(`📹 [${idx + 1}] ${date} - Shorts: ${title.substring(0, 50)}`);
      stats.shorts++;
    } else if (keywords.cover) {
      classified.originals_manual.push({ id: videoId, title: `【Cover】${title}`, date });
      console.log(`✅ [${idx + 1}] ${date} - Cover: ${title.substring(0, 50)}`);
      stats.cover++;
    } else if (keywords.original) {
      classified.originals_manual.push({ id: videoId, title: `【Original】${title}`, date });
      console.log(`✅ [${idx + 1}] ${date} - Original: ${title.substring(0, 50)}`);
      stats.original++;
    } else {
      classified.general.push({ id: videoId, title, date });
      console.log(`❓ [${idx + 1}] ${date} - 未分類: ${title.substring(0, 50)}`);
      stats.general++;
    }
  });

  console.log('\n════════════════════════════════════════');
  console.log('📈 分類統計結果：');
  console.log(`  總計: ${stats.total} 部`);
  console.log(`  🚫 直播: ${stats.livestream} 部`);
  console.log(`  ✅ Cover: ${stats.cover} 部`);
  console.log(`  ✅ Original: ${stats.original} 部`);
  console.log(`  ❓ 未分類: ${stats.general} 部`);
  console.log(`  📹 Shorts: ${stats.shorts} 部`);
  console.log('════════════════════════════════════════\n');

  // 輸出分類結果
  console.log('📝 分類結果：\n');
  console.log('videos:', JSON.stringify(classified.videos, null, 2));
  console.log('\nshorts:', JSON.stringify(classified.shorts, null, 2));
  console.log('\noriginals_manual:', JSON.stringify(classified.originals_manual, null, 2));
  console.log('\ngeneral:', JSON.stringify(classified.general, null, 2));

  process.exit(0);
})();

/**
 * 解析 YouTube Duration 格式（PT 格式）
 */
function parseDuration(duration) {
  const match = duration.match(/PT(\d+H)?(\d+M)?(\d+S)?/);
  if (!match) return 0;

  const hours = (match[1] ? parseInt(match[1]) : 0);
  const minutes = (match[2] ? parseInt(match[2]) : 0);
  const seconds = (match[3] ? parseInt(match[3]) : 0);

  return hours * 3600 + minutes * 60 + seconds;
}
