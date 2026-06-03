#!/usr/bin/env node

/**
 * 26位VTuber自動分類更新腳本
 * 用途：自動抓取YouTube影片、分類、更新data.js
 */

const fs = require('fs');
const https = require('https');

// ═══════════════════════════════════════════════════════════════════
// 讀取 data.js
// ═══════════════════════════════════════════════════════════════════

let dataContent = '';
try {
  dataContent = fs.readFileSync('./js/data.js', 'utf8');
} catch (e) {
  console.log('❌ 無法讀取 data.js');
  process.exit(1);
}

// 提取 API Key
const apiKeyMatch = dataContent.match(/ytApiKey:\s*["']([^"']+)["']/);
const API_KEY = apiKeyMatch ? apiKeyMatch[1] : null;

if (!API_KEY) {
  console.log('❌ 無 API 金鑰');
  process.exit(1);
}

// ═══════════════════════════════════════════════════════════════════
// 提取所有 VTuber 數據（除詩雨蔻達外）
// ═══════════════════════════════════════════════════════════════════

const vtuberMatches = dataContent.matchAll(/{\s*id:\s*"([^"]+)"[\s\S]*?youtubeChannelId:\s*"([^"]+)"[\s\S]*?ytApiKey:/g);
const vtubers = {};

for (const match of vtuberMatches) {
  vtubers[match[1]] = { channelId: match[2] };
}

// 排除詩雨蔻達
const vtuberIds = Object.keys(vtubers).filter(id => id !== 'shiucoda');

console.log(`🎵 開始自動分類 26 位 VTuber`);
console.log(`📊 共 ${vtuberIds.length} 位成員\n`);

// ═══════════════════════════════════════════════════════════════════
// 分類邏輯
// ═══════════════════════════════════════════════════════════════════

function classifyVideo(title) {
  const titleLower = title.toLowerCase();

  // Cover
  if (titleLower.includes('cover') || titleLower.includes('歌ってみた')) {
    return 'covers';
  }

  // Original
  if (titleLower.includes('original') || titleLower.includes('official') || titleLower.includes('原創')) {
    return 'originals';
  }

  // 預設：unclassified
  return 'unclassified';
}

// ═══════════════════════════════════════════════════════════════════
// API 調用
// ═══════════════════════════════════════════════════════════════════

function fetchPlaylistItems(uploadsPlaylistId, pageToken = null) {
  return new Promise((resolve) => {
    let url = 'https://www.googleapis.com/youtube/v3/playlistItems'
      + '?part=snippet'
      + '&playlistId=' + encodeURIComponent(uploadsPlaylistId)
      + '&maxResults=50'
      + '&key=' + encodeURIComponent(API_KEY);

    if (pageToken) url += '&pageToken=' + encodeURIComponent(pageToken);

    https.get(url, { headers: { 'Referer': 'https://shiukonata.github.io/MCStudio/' } }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          const result = JSON.parse(data);
          resolve(result);
        } catch (e) {
          resolve({ items: [], error: e });
        }
      });
    }).on('error', () => resolve({ items: [] }));
  });
}

// ═══════════════════════════════════════════════════════════════════
// 提取現有影片 ID
// ═══════════════════════════════════════════════════════════════════

function extractExistingVideoIds(vId) {
  const existingIds = new Set();

  // 新結構：{ covers: [], originals: [], unclassified: [] }
  const newStructPattern = new RegExp(
    `id:\\s*["']${vId}["'][\\s\\S]*?videos:\\s*({[\\s\\S]*?})[,}]`,
    'm'
  );
  const newMatch = dataContent.match(newStructPattern);
  if (newMatch) {
    const videosStr = newMatch[1];
    const idMatches = videosStr.matchAll(/"id":\s*"([^"]+)"/g);
    for (const m of idMatches) {
      existingIds.add(m[1]);
    }
    return existingIds;
  }

  // 舊結構：[]
  const oldStructPattern = new RegExp(
    `id:\\s*["']${vId}["'][\\s\\S]*?videos:\\s*(\\[[\\s\\S]*?\\])[,}]`,
    'm'
  );
  const oldMatch = dataContent.match(oldStructPattern);
  if (oldMatch) {
    const videosStr = oldMatch[1];
    const idMatches = videosStr.matchAll(/"id":\s*"([^"]+)"/g);
    for (const m of idMatches) {
      existingIds.add(m[1]);
    }
  }

  return existingIds;
}

// ═══════════════════════════════════════════════════════════════════
// 主邏輯
// ═══════════════════════════════════════════════════════════════════

(async () => {
  const results = {};
  let totalAdded = 0;

  for (const vId of vtuberIds) {
    const channelId = vtubers[vId].channelId;
    const uploadsPlaylistId = 'UU' + channelId.substring(2);

    console.log(`\n🔵 [${vId}] 正在處理...`);

    // 獲取所有影片
    let allItems = [];
    let pageToken = null;
    let pageCount = 0;

    do {
      const data = await fetchPlaylistItems(uploadsPlaylistId, pageToken);
      if (data.error) break;

      allItems.push(...(data.items || []));
      pageToken = data.nextPageToken || null;
      pageCount++;

      console.log(`   第 ${pageCount} 頁，獲取 ${(data.items || []).length} 部`);
    } while (pageToken);

    console.log(`   共獲取 ${allItems.length} 部影片`);

    // 提取現有影片 ID
    const existingIds = extractExistingVideoIds(vId);

    // 分類新影片
    const classified = { covers: [], originals: [], unclassified: [] };

    for (const item of allItems) {
      const vid = item.snippet?.resourceId?.videoId;
      if (!vid || existingIds.has(vid)) continue;

      const title = item.snippet.title;
      const date = item.snippet.publishedAt ? item.snippet.publishedAt.slice(0, 10) : '';
      const category = classifyVideo(title);

      classified[category].push({
        id: vid,
        title: title,
        date: date
      });
    }

    const newCount = classified.covers.length + classified.originals.length + classified.unclassified.length;
    console.log(`   ✅ 分類完成：${classified.covers.length} Cover + ${classified.originals.length} Original + ${classified.unclassified.length} 未分類`);

    if (newCount > 0) {
      results[vId] = classified;
      totalAdded += newCount;
    }

    await new Promise(r => setTimeout(r, 300)); // 避免 API 限制
  }

  // ═══════════════════════════════════════════════════════════════════
  // 更新 data.js
  // ═══════════════════════════════════════════════════════════════════

  if (totalAdded > 0) {
    console.log(`\n\n📝 更新 data.js...`);

    let updatedContent = dataContent;
    let updateCount = 0;

    for (const vId in results) {
      const classified = results[vId];

      // 檢查現有結構
      const newStructPattern = new RegExp(
        `(id:\\s*["']${vId}["'][\\s\\S]*?videos:\\s*)({[\\s\\S]*?})[,}]`,
        'm'
      );
      const newMatch = dataContent.match(newStructPattern);

      if (newMatch) {
        // 新結構：合併數據
        const existingVideos = JSON.parse(newMatch[2]);
        existingVideos.covers = (existingVideos.covers || []).concat(classified.covers);
        existingVideos.originals = (existingVideos.originals || []).concat(classified.originals);
        existingVideos.unclassified = (existingVideos.unclassified || []).concat(classified.unclassified);

        const replacement = `$1${JSON.stringify(existingVideos, null, 2)},`;
        updatedContent = updatedContent.replace(newStructPattern, replacement);
        updateCount++;
        console.log(`   ✅ ${vId} 已更新（新結構）`);
      } else {
        // 舊結構：轉換為新結構
        const oldStructPattern = new RegExp(
          `(id:\\s*["']${vId}["'][\\s\\S]*?videos:\\s*)\\[\\]([,}])`,
          'm'
        );

        if (oldStructPattern.test(updatedContent)) {
          const newVideos = {
            covers: classified.covers,
            originals: classified.originals,
            unclassified: classified.unclassified
          };

          const replacement = `$1${JSON.stringify(newVideos, null, 2)}$2`;
          updatedContent = updatedContent.replace(oldStructPattern, replacement);
          updateCount++;
          console.log(`   ✅ ${vId} 已更新（舊→新結構）`);
        }
      }
    }

    // 寫入 data.js
    fs.writeFileSync('./js/data.js', updatedContent, 'utf8');
    console.log(`\n✅ data.js 已更新 (${updateCount} 位 VTuber)\n`);

    // Git 操作
    console.log(`📤 推送到 GitHub...`);

    const { execSync } = require('child_process');
    try {
      execSync('git add js/data.js', { stdio: 'pipe' });
      execSync('git commit -m "feat: 自動分類 26 位 VTuber 的新影片"', { stdio: 'pipe' });
      execSync('git push', { stdio: 'pipe' });
      console.log(`✅ 已推送\n`);
    } catch (e) {
      console.log(`⚠️ Git 操作出錯（可能沒有新改動）\n`);
    }

    // 輸出結果
    console.log(`\n📊 ════════════════════════════════════════`);
    console.log(`📊 自動分類結果`);
    console.log(`📊 ════════════════════════════════════════`);
    console.log(`共更新 ${updateCount} 位 VTuber`);
    console.log(`共添加 ${totalAdded} 部新影片\n`);

    for (const vId in results) {
      const c = results[vId];
      const total = c.covers.length + c.originals.length + c.unclassified.length;
      console.log(`  ${vId}: +${total} (Cover: ${c.covers.length}, Original: ${c.originals.length}, 未分類: ${c.unclassified.length})`);
    }
    console.log(`📊 ════════════════════════════════════════\n`);
  } else {
    console.log(`\n✅ 所有 VTuber 都已是最新狀態，無需更新`);
  }

  process.exit(0);
})();
