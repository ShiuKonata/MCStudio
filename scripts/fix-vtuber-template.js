#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, '../js/data.js');

console.log('📝 開始修改data.js...\n');

// 讀取檔案
let content = fs.readFileSync(dataPath, 'utf8');

// 定義26位Vtuber ID（除了shiucoda）
const vtuberIds = [
  'rumi', 'paroniie', 'lubee', 'himegimichika', 'arrynia', 'kiriko',
  'vaswawa', 'sinniearis', 'ririna', 'ekorru', 'wakasaito', 'whalefall', 'kai',
  'mukuru', 'nyrfier', 'shiroleon', 'fuka22', 'BarkBarkPomi', 'cocor0', 'UchiFifi',
  'chita', 'nokori', 'KeKeMii', 'chamamatti', 'Pele', 'Yawnii'
];

const newVideosStructure = `    videos: {
      covers: [],
      originals: [],
      shorts: [],
      general: [],
      premiere: [],
      vlog: [],
      ads: [],
      commerce: [],
      unclassified: []
    },
    memberVideos: [],`;

let processed = 0;
let skipped = 0;

vtuberIds.forEach(vId => {
  // 尋找該Vtuber的物件開始位置
  const vtuberStartRegex = new RegExp(`\\{\\s*id:\\s*["\']${vId}["\'](\\s|,)[\\s\\S]*?(?=id:\\s*["\'][a-z]|\\];)`, 'i');

  // 更精確的配對：找到該Vtuber到下一個Vtuber或陣列結尾
  const lines = content.split('\n');
  let vtuberStartLine = -1;
  let vtuberEndLine = -1;

  // 尋找 id: "xxx" 的行
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].includes(`id: "${vId}"`) || lines[i].includes(`id: '${vId}'`)) {
      vtuberStartLine = i;
      break;
    }
  }

  if (vtuberStartLine === -1) {
    console.log(`❌ 找不到Vtuber: ${vId}`);
    return;
  }

  // 檢查是否已經有新格式（covers: []）
  let checkContent = lines.slice(vtuberStartLine, Math.min(vtuberStartLine + 100, lines.length)).join('\n');
  if (checkContent.includes('covers:')) {
    console.log(`⏭️  ${vId} 已是新格式，跳過`);
    skipped++;
    return;
  }

  // 尋找該Vtuber的結束位置（下一個 {）
  for (let i = vtuberStartLine + 1; i < lines.length; i++) {
    if (lines[i].trim().startsWith('{') && !lines[i].includes('id:')) {
      // 這是下一個Vtuber
      vtuberEndLine = i - 1;
      break;
    }
    if (lines[i].trim() === '];') {
      vtuberEndLine = i;
      break;
    }
  }

  if (vtuberEndLine === -1) {
    vtuberEndLine = lines.length - 1;
  }

  // 尋找videos字段的位置（在這個Vtuber內）
  let videosLineIndex = -1;
  for (let i = vtuberStartLine; i <= vtuberEndLine; i++) {
    if (lines[i].includes('videos:')) {
      videosLineIndex = i;
      break;
    }
  }

  if (videosLineIndex === -1) {
    console.log(`⚠️  ${vId} 找不到videos字段`);
    return;
  }

  // 找到videos陣列的結尾（下一個逗號）
  let videosEndIndex = videosLineIndex;
  let bracketCount = 0;
  let foundStart = false;

  for (let i = videosLineIndex; i <= vtuberEndLine; i++) {
    const line = lines[i];
    for (let j = 0; j < line.length; j++) {
      if (line[j] === '[') {
        bracketCount++;
        foundStart = true;
      }
      if (line[j] === ']') {
        bracketCount--;
        if (foundStart && bracketCount === 0) {
          videosEndIndex = i;
          break;
        }
      }
    }
    if (videosEndIndex !== videosLineIndex) break;
  }

  // 替換從videos開始到videosEndIndex的所有行
  lines.splice(videosLineIndex, videosEndIndex - videosLineIndex + 1, newVideosStructure);

  console.log(`✅ 已修改: ${vId}`);
  processed++;
});

// 寫回檔案
content = lines.join('\n');
fs.writeFileSync(dataPath, content, 'utf8');

console.log(`\n📊 統計：`);
console.log(`✅ 已修改: ${processed}`);
console.log(`⏭️  已跳過（已是新格式）: ${skipped}`);
console.log(`\n✨ 修改完成！`);
