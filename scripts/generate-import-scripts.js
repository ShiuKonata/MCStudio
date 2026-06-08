/**
 * 為所有 26 位 VTuber 自動生成導入腳本
 *
 * 用途：批量建立為每位 VTuber 的影片導入腳本
 * 執行方式：node scripts/generate-import-scripts.js
 */

const fs = require('fs');
const path = require('path');

// ========== 26 位 VTuber 列表 ==========

const VTUBERS = [
  { id: 'rumi', name: '懶貓子Rumi', channelId: 'UCswRX8mNNdn1fjRctZqzjgA' },
  { id: 'paroniie', name: '帕蘿妮', channelId: 'UCChAHq4kdRZ0FJ1Jfjvr9cw' },
  { id: 'lubee', name: 'Lubee', channelId: 'UCF8icKLU4FGF8Ln-KlKakSg' },
  { id: 'himegimichika', name: '姫ぎみちか', channelId: 'UCjcXw7nWechEaodFEWtDk1Q' },
  { id: 'arrynia', name: 'アリニア', channelId: 'UC5bHZZ2df6_oFgOM_34_-aw' },
  { id: 'kiriko', name: 'Kiriko', channelId: 'UCj76pRLEg2JHwDwJJXvZtSw' },
  { id: 'vaswawa', name: 'ヴァスワワ', channelId: 'UCZHa6yKnBnU34yRyvV3EXSA' },
  { id: 'sinniearis', name: 'Sinnie Aris', channelId: 'UCwwVVsJTvdeUK3sj4-qxgMQ' },
  { id: 'ririna', name: 'RiRina', channelId: 'UCbgr8vvzFLElzIxHDr2xV5w' },
  { id: 'ekorru', name: 'ekorru', channelId: 'UCVB6njJBYf-7Di03j8993AA' },
  { id: 'wakasaito', name: '若狹伊藤', channelId: 'UCGGc-KmG4fxc8D03S-H0rbw' },
  { id: 'whalefall', name: 'Whalefall', channelId: 'UCByO_vijBgRH1aWhQNYfw8Q' },
  { id: 'kai', name: 'Kai', channelId: 'UCh2ykSGKiJB3f-Y8w2LWplw' },
  { id: 'mukuru', name: 'Mukuru', channelId: 'UCMwY4OKlMbwJYzT_wDAXs3w' },
  { id: 'nyrfier', name: 'Nyrfier', channelId: 'UCE6fkoGPGOoWE6pYDalwLZQ' },
  { id: 'fuka22', name: 'Fuka', channelId: 'UCbr-a2yffSZRjEbwtB1s2ow' },
  { id: 'chita', name: 'Chita', channelId: 'UC253VhyFxwgm4w1FC6-PoxQ' },
  { id: 'chamamatti', name: 'Chamamatti', channelId: 'UCcT9BcGu92uvq_R1BKvw2fw' },
  { id: 'shiroleon', name: 'ShiroLeon', channelId: 'UCIqsDMfhM3yeM9l6kNyEURg' },
  { id: 'BarkBarkPomi', name: 'BarkBarkPomi', channelId: 'UC5_5l_AfpgJeYCxQnMnL-7A' },
  { id: 'cocor0', name: 'Coco R0', channelId: 'UC9NVe55fqFSC9iOZQJrlwrQ' },
  { id: 'UchiFifi', name: 'Uchi Fifi', channelId: 'UCMhjWfFiyxVjNWBJpkDotcg' },
  { id: 'nokori', name: 'Nokori', channelId: 'UCd4HPP11UbXLuvvhOjSABmw' },
  { id: 'KeKeMii', name: 'KeKeMii', channelId: 'UC5R0yO6i_ApJf3AkcMFe7Tw' },
  { id: 'Pele', name: 'Pele', channelId: 'UCvc-Xz6103-uVlIK-pWTXbA' },
  { id: 'Yawnii', name: 'Yawnii', channelId: 'UCRCKrkjDimBhd-gVVojpUyQ' },
];

const API_KEY = 'AIzaSyBsmWLwQLY-8wszHDufVCZaGZ0RKkRjPlM';
const REFERER = 'https://shiukonata.github.io/MCStudio/';
const SCRIPTS_DIR = './scripts/import-videos';

// ========== 模板 ==========

function generateScriptTemplate(vtuber) {
  return `/**
 * ${vtuber.name} 影片導入腳本（自動生成）
 *
 * 用途：從 YouTube API 批量導入 ${vtuber.name} 的全部影片
 * 使用 STEP 1-4 自動分類
 *
 * 執行方式：
 *   1. 配額重置後（UTC 00:00）
 *   2. node scripts/import-videos/import-${vtuber.id}-videos.js
 *
 * TODO:
 *   - STEP 3: 待提供 ${vtuber.name} 的特殊規則
 *   - STEP 5: 用戶手動分類
 */

const fs = require('fs');
const https = require('https');

// ========== 配置 ==========

const VTUBER = {
  id: '${vtuber.id}',
  name: '${vtuber.name}',
  channelId: '${vtuber.channelId}',
  ytApiKey: '${API_KEY}',
  referer: '${REFERER}'
};

const DATA_JS_PATH = '../../js/data.js';
const MAX_PAGES = 20;
const API_DELAY = 100;

// ========== 工具函數 ==========

async function fetchAllVideos() {
  const uploadsId = 'UU' + VTUBER.channelId.substring(2);
  let allItems = [];
  let pageToken = null;
  let pageCount = 0;

  console.log(\`\\n🚀 開始為 \${VTUBER.name} 導入全部影片\`);
  console.log(\`📍 Channel ID: \${VTUBER.channelId}\`);
  console.log(\`📍 Uploads Playlist: \${uploadsId}\\n\`);

  async function fetchPage(token) {
    return new Promise((resolve, reject) => {
      const url = \`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=\${uploadsId}&maxResults=50&key=\${VTUBER.ytApiKey}\${token ? '&pageToken=' + token : ''}\`;

      https.get(url, { headers: { 'Referer': VTUBER.referer } }, (res) => {
        let data = '';
        res.on('data', chunk => data += chunk);
        res.on('end', () => {
          try {
            const json = JSON.parse(data);
            if (json.error) {
              console.log(\`❌ API 錯誤: \${json.error.message}\`);
              reject(new Error(json.error.message));
              return;
            }

            const items = json.items || [];
            allItems.push(...items);
            pageCount++;
            console.log(\`✅ 第\${pageCount}頁: \${items.length} 部影片 (累計: \${allItems.length}部)\`);

            resolve({ nextPageToken: json.nextPageToken || null, items });
          } catch (e) {
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
        console.log(\`⚠️  達到限制：\${MAX_PAGES}頁\`);
        break;
      }

      if (!token) break;
      await new Promise(r => setTimeout(r, API_DELAY));
    } while (token);

    return { items: allItems, pageCount, totalVideos: allItems.length };
  } catch (err) {
    console.error(\`❌ 導入失敗: \${err.message}\`);
    throw err;
  }
}

function classifyVideos(items) {
  const covers = [], originals = [], shorts = [], unclassified = [];

  items.forEach(item => {
    const title = item.snippet?.title || '';
    const videoId = item.snippet?.resourceId?.videoId;
    const date = item.snippet?.publishedAt?.substring(0, 10);

    if (!videoId || !date) return;

    const titleLower = title.toLowerCase();
    if (titleLower.includes('直播') || titleLower.includes('archive') || titleLower.includes('livestream')) return;

    if (titleLower.includes('cover') || titleLower.includes('歌ってみた')) {
      covers.push({ id: videoId, title: \`【Cover】\${title}\`, date });
    } else if (titleLower.includes('original') || titleLower.includes('official') || titleLower.includes('原創')) {
      originals.push({ id: videoId, title: \`【Original】\${title}\`, date });
    } else {
      unclassified.push({ id: videoId, title, date });
    }
  });

  return { covers, originals, shorts, unclassified };
}

function updateDataJs(classified) {
  try {
    let content = fs.readFileSync(DATA_JS_PATH, 'utf8');
    const regex = new RegExp(\`(id:\\s*["']\${VTUBER.id}["'][\s\S]*?videos:\\s*{)([\s\S]*?)(},\\s*memberVideos:)\`, 'm');

    if (!regex.test(content)) {
      console.log('❌ 無法找到 VTuber 的 videos 物件');
      return false;
    }

    const newVideosContent = \`
      covers: \${JSON.stringify(classified.covers, null, 6)},
      originals: \${JSON.stringify(classified.originals, null, 6)},
      shorts: \${JSON.stringify(classified.shorts, null, 6)},
      unclassified: \${JSON.stringify(classified.unclassified, null, 6)},
      general: [],
      premiere: [],
      vlog: [],
      ads: [],
      commerce: []\`;

    content = content.replace(regex, \`\$1\${newVideosContent}\$3\`);
    fs.writeFileSync(DATA_JS_PATH, content, 'utf8');
    console.log('✅ data.js 更新成功');
    return true;
  } catch (err) {
    console.error(\`❌ 更新失敗: \${err.message}\`);
    return false;
  }
}

// ========== 主程式 ==========

(async () => {
  try {
    console.log('========== ${vtuber.name} 影片導入開始 ==========');

    const apiResult = await fetchAllVideos();
    const classified = classifyVideos(apiResult.items);

    console.log(\`\\n📊 分類結果:\`);
    console.log(\`  ✅ Cover: \${classified.covers.length} 部\`);
    console.log(\`  ✅ Original: \${classified.originals.length} 部\`);
    console.log(\`  ❓ Unclassified: \${classified.unclassified.length} 部\`);

    console.log('\\n更新 data.js...');
    if (updateDataJs(classified)) {
      console.log(\`\\n🎉 ${vtuber.name} 導入完成！\`);
      process.exit(0);
    } else {
      process.exit(1);
    }
  } catch (err) {
    console.error(\`❌ 致命錯誤: \${err.message}\`);
    process.exit(1);
  }
})();
`;
}

// ========== 生成所有腳本 ==========

(async () => {
  try {
    // 建立目錄
    if (!fs.existsSync(SCRIPTS_DIR)) {
      fs.mkdirSync(SCRIPTS_DIR, { recursive: true });
      console.log(`✅ 建立目錄: ${SCRIPTS_DIR}`);
    }

    // 為每位 VTuber 生成腳本
    VTUBERS.forEach(vtuber => {
      const scriptPath = path.join(SCRIPTS_DIR, `import-${vtuber.id}-videos.js`);
      const content = generateScriptTemplate(vtuber);
      fs.writeFileSync(scriptPath, content, 'utf8');
      console.log(`✅ 已生成: import-${vtuber.id}-videos.js`);
    });

    console.log(\`\n🎉 已為全部 ${VTUBERS.length} 位 VTuber 生成導入腳本！\`);
    console.log(`\n使用方式：\`);
    console.log(\`  1. 配額重置後（UTC 00:00）\`);
    console.log(\`  2. node scripts/import-videos/import-<vtuber-id>-videos.js\`);
    console.log(\`\nTODO:\`);
    console.log(\`  [ ] 為每位 VTuber 定義特殊規則（STEP 3）\`);
    console.log(\`  [ ] 實作時長檢查邏輯（Shorts）\`);
  } catch (err) {
    console.error(\`❌ 生成失敗: \${err.message}\`);
    process.exit(1);
  }
})();
`;
}

module.exports = { generateScriptTemplate };

// 如果直接執行此腳本
if (require.main === module) {
  console.log('🔄 正在為所有 26 位 VTuber 生成導入腳本...\n');
  // 調用上面的程式邏輯
  eval(generateScriptTemplate.toString().split('function generateScriptTemplate')[0] + generateScriptTemplate.toString().split('// ========== 生成所有腳本 ==========')[1]);
}
