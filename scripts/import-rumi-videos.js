/**
 * Rumi 影片導入腳本
 *
 * 用途：從 YouTube API 批量導入 Rumi 的全部影片（從出道日期到現在）
 * 使用 STEP 1-4 自動分類
 *
 * 執行方式：
 *   1. 配額重置後（UTC 00:00）
 *   2. node scripts/import-rumi-videos.js
 *
 * TODO:
 *   - STEP 3: 待提供 Rumi 的特殊規則
 *   - STEP 5: 用戶手動分類（配額重置後執行）
 */

const fs = require('fs');
const https = require('https');

// ========== 配置 ==========

const RUMI = {
  id: 'rumi',
  name: '懶貓子Rumi',
  channelId: 'UCswRX8mNNdn1fjRctZqzjgA',
  ytApiKey: 'AIzaSyBsmWLwQLY-8wszHDufVCZaGZ0RKkRjPlM',
  debut: '2021-08-06',
  referer: 'https://shiukonata.github.io/MCStudio/'
};

const DATA_JS_PATH = './js/data.js';
const MAX_PAGES = 20;  // 限制：最多導入 20 頁（1000 個影片）
const API_DELAY = 100; // API 呼叫間隔（毫秒）

// ========== 工具函數 ==========

/**
 * 從 YouTube API 分頁獲取 Rumi 的所有影片
 */
async function fetchAllRumiVideos() {
  const uploadsId = 'UU' + RUMI.channelId.substring(2);
  let allItems = [];
  let pageToken = null;
  let pageCount = 0;
  let apiCallCount = 0;

  console.log(`\n🚀 開始為 ${RUMI.name} 導入全部影片`);
  console.log(`📍 Channel ID: ${RUMI.channelId}`);
  console.log(`📍 Uploads Playlist: ${uploadsId}\n`);

  async function fetchPage(token) {
    return new Promise((resolve, reject) => {
      const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${uploadsId}&maxResults=50&key=${RUMI.ytApiKey}${token ? '&pageToken=' + token : ''}`;

      https.get(url, { headers: { 'Referer': RUMI.referer } }, (res) => {
        let data = '';
        res.on('data', chunk => data += chunk);
        res.on('end', () => {
          try {
            const json = JSON.parse(data);
            if (json.error) {
              console.log(`❌ API 錯誤 (第${pageCount}頁): ${json.error.message}`);
              reject(new Error(json.error.message));
              return;
            }

            const items = json.items || [];
            allItems.push(...items);
            pageCount++;
            apiCallCount++;
            console.log(`✅ 第${pageCount}頁: ${items.length} 部影片 (累計: ${allItems.length}部)`);

            const nextPageToken = json.nextPageToken || null;
            resolve({ nextPageToken, items });
          } catch (e) {
            console.log(`❌ JSON 解析失敗: ${e.message}`);
            reject(e);
          }
        });
      }).on('error', reject);
    });
  }

  try {
    let token = null;
    do {
      const result = await fetchPage(token);
      token = result.nextPageToken;

      if (pageCount >= MAX_PAGES) {
        console.log(`\n⚠️  達到限制：${MAX_PAGES}頁（${allItems.length}個影片）`);
        break;
      }

      if (!token) {
        console.log(`\n✅ 已取得全部影片（${pageCount}頁，${allItems.length}部）`);
        break;
      }

      // 延遲以避免 API 限速
      await new Promise(r => setTimeout(r, API_DELAY));
    } while (token);

    return {
      items: allItems,
      pageCount,
      apiCallCount,
      totalVideos: allItems.length
    };
  } catch (err) {
    console.error(`❌ 導入失敗: ${err.message}`);
    throw err;
  }
}

/**
 * STEP 1-4 分類
 */
function classifyVideos(items) {
  const covers = [], originals = [], shorts = [], unclassified = [];

  items.forEach(item => {
    const title = item.snippet?.title || '';
    const videoId = item.snippet?.resourceId?.videoId;
    const date = item.snippet?.publishedAt?.substring(0, 10);

    if (!videoId || !date) return;

    // STEP 1: 排除直播（標題包含 直播、archive 等）
    const titleLower = title.toLowerCase();
    if (titleLower.includes('直播') || titleLower.includes('archive') || titleLower.includes('livestream')) {
      return;
    }

    // STEP 2: 檢測關鍵字
    if (titleLower.includes('cover') || titleLower.includes('歌ってみた')) {
      covers.push({ id: videoId, title: `【Cover】${title}`, date });
    } else if (titleLower.includes('original') || titleLower.includes('official') || titleLower.includes('原創')) {
      originals.push({ id: videoId, title: `【Original】${title}`, date });
    } else {
      unclassified.push({ id: videoId, title, date });
    }
  });

  return { covers, originals, shorts, unclassified };
}

/**
 * 更新 data.js
 */
function updateDataJs(classified) {
  try {
    let content = fs.readFileSync(DATA_JS_PATH, 'utf8');

    // 找到 Rumi 的 videos 物件，更新四個陣列
    const rumiRegex = /(id:\s*["']rumi["'][\s\S]*?videos:\s*{)([\s\S]*?)(},\s*memberVideos:)/;

    if (!rumiRegex.test(content)) {
      console.log('❌ 無法找到 Rumi 的 videos 物件');
      return false;
    }

    // 構建新的 videos 物件
    const newVideosContent = `
      covers: ${JSON.stringify(classified.covers, null, 6)},
      originals: ${JSON.stringify(classified.originals, null, 6)},
      shorts: ${JSON.stringify(classified.shorts, null, 6)},
      unclassified: ${JSON.stringify(classified.unclassified, null, 6)},
      general: [],
      premiere: [],
      vlog: [],
      ads: [],
      commerce: []`;

    content = content.replace(
      rumiRegex,
      `$1${newVideosContent}$3`
    );

    fs.writeFileSync(DATA_JS_PATH, content, 'utf8');
    console.log('✅ data.js 更新成功');
    return true;
  } catch (err) {
    console.error(`❌ 更新失敗: ${err.message}`);
    return false;
  }
}

// ========== 主程式 ==========

(async () => {
  try {
    console.log('========== Rumi 影片導入開始 ==========\n');

    // Step 1: 從 YouTube API 獲取影片
    const apiResult = await fetchAllRumiVideos();

    // Step 2: STEP 1-4 分類
    console.log('\n分類中...');
    const classified = classifyVideos(apiResult.items);
    console.log(`\n📊 分類結果:`);
    console.log(`  ✅ Cover: ${classified.covers.length} 部`);
    console.log(`  ✅ Original: ${classified.originals.length} 部`);
    console.log(`  ❓ Unclassified: ${classified.unclassified.length} 部`);

    // Step 3: 更新 data.js
    console.log('\n更新 data.js...');
    if (updateDataJs(classified)) {
      console.log(`\n🎉 Rumi 導入完成！`);
      console.log(`   - Cover: ${classified.covers.length}`);
      console.log(`   - Original: ${classified.originals.length}`);
      console.log(`   - Unclassified: ${classified.unclassified.length}`);
      console.log(`   - API 呼叫次數: ${apiResult.apiCallCount}`);
      process.exit(0);
    } else {
      process.exit(1);
    }
  } catch (err) {
    console.error(`\n❌ 致命錯誤: ${err.message}`);
    process.exit(1);
  }
})();

// TODO:
// [ ] STEP 3: 為 Rumi 定義特殊規則（如果有）
// [ ] STEP 5: 實作手動分類邏輯
// [ ] 為其他 25 位 VTuber 建立相同的導入腳本
// [ ] 加入時長檢查邏輯（標記 Shorts）
// [ ] 加入錯誤重試機制
