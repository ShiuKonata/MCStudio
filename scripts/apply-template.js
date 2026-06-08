#!/usr/bin/env node

/**
 * 自動為26位Vtuber應用詩雨蔻達的完整範本
 * 功能：
 * 1. 為每位Vtuber添加完整的videos分類結構
 * 2. 為每位Vtuber添加memberVideos空陣列
 * 3. 保留詩雨蔻達不變
 */

const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, '../js/data.js');

// 讀取data.js
let content = fs.readFileSync(dataPath, 'utf8');

// 定義的26位Vtuber ID（除了詩雨蔻達）
const vtuberIds = [
  'rumi', 'paroniie', 'lubee', 'himegimichika', 'arrynia', 'kiriko',
  'vaswawa', 'sinniearis', 'ririna', 'ekorru', 'wakasaito', 'whalefall', 'kai',
  'mukuru', 'nyrfier', 'shiroleon', 'fuka22', 'BarkBarkPomi', 'cocor0', 'UchiFifi',
  'chita', 'nokori', 'KeKeMii', 'chamamatti', 'Pele', 'Yawnii'
];

// 為每位Vtuber應用範本
let processed = 0;
vtuberIds.forEach(vId => {
  // 使用正則表達式找到該Vtuber的完整物件
  const vtuberRegex = new RegExp(
    `(\\{[\\s\\S]*?id:\\s*["']${vId}["'][\\s\\S]*?)(?=(,\\s*\\{\\s*id:|\\];))`,
    'g'
  );

  const match = vtuberRegex.exec(content);
  if (!match) {
    console.log(`❌ 找不到Vtuber: ${vId}`);
    return;
  }

  let vtuberObj = match[1];

  // 檢查是否已經有完整的分類結構
  if (!vtuberObj.includes('covers:')) {
    // 添加完整的分類結構
    const template = `
    covers: [],          // Cover/歌ってみた
    originals: [],       // Original/原創
    shorts: [],          // Shorts（≤60秒）
    general: [],         // 一般影片
    vlog: [],            // Vlog（日常生活內容）
    ads: [],             // 廣告
    premiere: [],        // 初配信
    unclassified: [],    // 未分類（待手動分類）
    memberVideos: [],    // 會員直播（待手動新增）`;

    // 移除原有的videos陣列或空陣列
    const oldVideosRegex = /videos:\s*(\[[\s\S]*?\]|null|undefined)/;
    vtuberObj = vtuberObj.replace(oldVideosRegex, '');

    // 移除原有的memberVideos（如果有的話）
    const oldMemberVideosRegex = /,?\s*memberVideos:\s*\[[\s\S]*?\]/g;
    vtuberObj = vtuberObj.replace(oldMemberVideosRegex, '');

    // 在youtubeChannelId後插入新的分類結構
    const insertPoint = vtuberObj.lastIndexOf(',');
    if (insertPoint > 0) {
      vtuberObj = vtuberObj.slice(0, insertPoint) + ',' + template + vtuberObj.slice(insertPoint + 1);
    }

    // 替換整個Vtuber物件
    const beforeMatch = content.substring(0, match.index);
    const afterMatch = content.substring(match.index + match[0].length);
    content = beforeMatch + vtuberObj + afterMatch;

    console.log(`✅ 應用範本成功: ${vId}`);
    processed++;
  } else {
    console.log(`⏭️  ${vId} 已經有完整分類結構，跳過`);
  }
});

// 保存修改
fs.writeFileSync(dataPath, content, 'utf8');
console.log(`\n✅ 完成！已為 ${processed} 位Vtuber應用範本`);
