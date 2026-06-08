/**
 * STEP 1-5 視頻分類邏輯
 * 根據詩雨蔻達的規則應用到所有 26 位 VTuber
 *
 * STEP 1: 排除直播（UULV 播放列表）
 * STEP 2: 檢測 5 個關鍵字 → 分類到 covers/originals
 * STEP 3: 特殊規則（待補充，先略過）
 * STEP 4: 標記 ≤60秒為 Shorts
 * STEP 5: 用戶手動分類（待補充，先略過）
 */

// ========== STEP 1-4 分類邏輯 ==========

/**
 * STEP 2: 檢測標題關鍵字
 * @param {string} title - 影片標題
 * @returns {string} - 'cover' | 'original' | null
 */
function detectKeywordInTitle(title) {
  const titleLower = title.toLowerCase();

  // 檢測 Cover 關鍵字
  if (titleLower.includes('cover') || titleLower.includes('歌ってみた')) {
    return 'cover';
  }

  // 檢測 Original 關鍵字
  if (titleLower.includes('original') || titleLower.includes('official') || titleLower.includes('原創')) {
    return 'original';
  }

  return null;
}

/**
 * STEP 3: 特殊規則（VTuber 特定）
 * TODO: 為每個 VTuber 定義特殊規則
 *
 * 詩雨蔻達例子:
 *   - demo → cover
 *   - 自彈自唱 → cover
 *
 * @param {string} vtuberId - VTuber ID
 * @param {string} title - 影片標題
 * @returns {string} - 'cover' | 'original' | null
 */
function applySpecialRules(vtuberId, title) {
  const titleLower = title.toLowerCase();

  // TODO: 為每個 VTuber 添加特殊規則
  // if (vtuberId === 'shiucoda') {
  //   if (titleLower.includes('demo') || titleLower.includes('自彈自唱')) return 'cover';
  // }
  // if (vtuberId === 'rumi') {
  //   // Rumi 的特殊規則（待提供）
  // }

  return null;
}

/**
 * STEP 4: 檢查視頻時長，標記 Shorts
 * @param {number} durationSeconds - 視頻時長（秒）
 * @returns {boolean} - 是否為 Shorts (≤60秒)
 */
function isShorts(durationSeconds) {
  return durationSeconds <= 60;
}

/**
 * 完整分類流程 (STEP 1-4)
 * @param {Array} items - YouTube API 返回的 playlistItems
 * @param {string} vtuberId - VTuber ID
 * @param {Set} liveVideoIds - 直播 video ID 集合（STEP 1 用）
 * @returns {Object} - { covers, originals, shorts, unclassified }
 */
function classifyVideosStep1To4(items, vtuberId, liveVideoIds = new Set()) {
  const covers = [];
  const originals = [];
  const shorts = [];
  const unclassified = [];

  if (!items || items.length === 0) return { covers, originals, shorts, unclassified };

  items.forEach(item => {
    const title = item.snippet?.title || '';
    const videoId = item.snippet?.resourceId?.videoId;
    const publishedAt = item.snippet?.publishedAt;
    const date = publishedAt ? publishedAt.substring(0, 10) : '';

    if (!videoId || !date) return;

    // STEP 1: 排除直播
    if (liveVideoIds.has(videoId)) {
      console.log(`⏭️  STEP 1: 跳過直播 - ${title}`);
      return;
    }

    // STEP 2: 檢測關鍵字
    let classification = detectKeywordInTitle(title);

    // STEP 3: 應用特殊規則
    if (!classification) {
      const specialRuleResult = applySpecialRules(vtuberId, title);
      if (specialRuleResult) {
        classification = specialRuleResult;
        console.log(`✨ STEP 3: 特殊規則 [${vtuberId}] - ${title}`);
      }
    }

    // 構造影片對象
    const videoObj = {
      id: videoId,
      title: title,
      date: date
    };

    // 根據分類放入對應陣列
    if (classification === 'cover') {
      covers.push(videoObj);
      console.log(`✅ Cover: ${title}`);
    } else if (classification === 'original') {
      originals.push(videoObj);
      console.log(`✅ Original: ${title}`);
    } else {
      unclassified.push(videoObj);
      console.log(`❓ Unclassified: ${title}`);
    }

    // STEP 4: 標記 Shorts（需要從 YouTube API 取得時長）
    // TODO: 實作時長檢查邏輯
    // if (isShorts(durationSeconds)) {
    //   videoObj.isShorts = true;
    //   shorts.push(videoObj);
    // }
  });

  return { covers, originals, shorts, unclassified };
}

// ========== 導出函數 ==========

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    detectKeywordInTitle,
    applySpecialRules,
    isShorts,
    classifyVideosStep1To4
  };
}
