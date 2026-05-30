// ── XSS 防護：HTML 跳脫函數 ─────────────────────────────────────────────
function esc(s) {
  return String(s == null ? '' : s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

// ── 全域音樂剪輯關鍵字（自動分類：標題含其中一個 → 歸為音樂剪輯）────
const GLOBAL_MUSIC_KEYWORDS = [
  'cover', '翻唱', '清唱', '歌回', '歌切', '原創曲', '原創',
  '演唱', '演唱會', '唱歌', '歌曲', '歌聲', '精唱', '歌單',
  '主題曲', 'mv', 'ost', '卡拉ok', 'karaoke', '深海少女',
];

// ── 世代 → 團體名稱對應 ──────────────────────────────
const genTeamName = {
  // 零期生無團體名稱，不列入
  '一期生': 'Exitus',
  '二期生': 'MeloNyx',
  '三期生': 'Alluria',
  '四期生': '音雲漫步',
  '五期生': 'CaKano',
  '六期生': 'ælis',
  // 未來七期生、八期生…在此新增對應即可
};

// ── 動態套用 Vtuber 個人色 ──────────────────────────
function applyVtuberColor(hex) {
  const r = parseInt(hex.slice(1,3), 16);
  const g = parseInt(hex.slice(3,5), 16);
  const b = parseInt(hex.slice(5,7), 16);
  const clamp = v => Math.max(0, Math.min(255, v));
  const toHex = (r,g,b) => '#' + [r,g,b].map(x => clamp(x).toString(16).padStart(2,'0')).join('');

  // 計算感知亮度（0~255），暗色系代表色在深色卡片上不可見
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;
  // 亮度 < 110 → 代表色太深，改用白色；否則直接用代表色
  const labelColor = brightness < 110 ? 'rgba(255,255,255,0.85)' : hex;
  // 亮度 > 160 → 代表色太亮（如薄荷白），背景上文字改用深色；否則白字
  const textColor  = brightness > 160 ? '#111' : 'rgba(255,255,255,0.95)';

  const root = document.documentElement;
  root.style.setProperty('--vt-main',   hex);
  root.style.setProperty('--vt-dark',   toHex(r-60, g-60, b-60));
  root.style.setProperty('--vt-mid',    toHex(r-25, g-25, b-25));
  root.style.setProperty('--vt-light',  toHex(r+50, g+50, b+50));
  root.style.setProperty('--vt-pale',   `rgba(${r},${g},${b},0.08)`);
  root.style.setProperty('--vt-border', `rgba(${r},${g},${b},0.28)`);
  root.style.setProperty('--vt-shadow', `rgba(${r},${g},${b},0.18)`);
  root.style.setProperty('--vt-label',  labelColor);
  root.style.setProperty('--vt-text',   textColor);
}

// TAB_CONFIG 已改為在 DOMContentLoaded 內依 vtuber 資料動態生成

document.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');
  const v = vtubers.find(x => x.id === id);

  if (!v) {
    document.getElementById('detail-root').innerHTML = `
      <div style="text-align:center;padding:8rem 2rem;color:white;">
        <p style="font-size:4rem;margin-bottom:1rem;">😢</p>
        <h2 style="margin-bottom:1rem;">${T('notFound.title')}</h2>
        <a href="index.html" style="color:var(--vt-main)">${T('notFound.back')}</a>
      </div>`;
    return;
  }

  // ── 多頻道支援：統一轉為陣列（相容舊版單一 channelId 欄位）──
  const _musicClipsChs = v.musicClipsChannelIds
    ? v.musicClipsChannelIds
    : (v.musicClipsChannelId ? [v.musicClipsChannelId] : []);
  const _videoClipsChs = v.videoClipsChannelIds
    ? v.videoClipsChannelIds
    : (v.videoClipsChannelId ? [v.videoClipsChannelId] : []);

  document.title = `${v.name} — MC組事務所`;

  // ── 動態更新 OG / Twitter Card meta（讓 LINE 等平台抓到正確的 Vtuber 資訊）──
  const _setMeta = (sel, val) => { const el = document.querySelector(sel); if (el) el.setAttribute('content', val); };
  const _ogTitle = `${v.name}（${v.nameEn}）— MC組事務所`;
  const _ogDesc  = `${v.description || v.name + ' 的個人介紹頁'}　收錄直播存檔、熱門影片、歌曲統計與更多資訊。`;
  const _ogImg   = v.coverImage || v.avatar || '';
  const _ogUrl   = `https://shiukonata.github.io/MCStudio/vtuber.html?id=${v.id}`;
  _setMeta('meta[property="og:title"]',       _ogTitle);
  _setMeta('meta[property="og:description"]', _ogDesc);
  _setMeta('meta[property="og:image"]',       _ogImg);
  _setMeta('meta[property="og:url"]',         _ogUrl);
  _setMeta('meta[name="twitter:title"]',      _ogTitle);
  _setMeta('meta[name="twitter:description"]',_ogDesc);
  _setMeta('meta[name="twitter:image"]',      _ogImg);
  _setMeta('meta[name="description"]',        _ogDesc);

  // ── 計算上一位 / 下一位（依出道日排序，循環）──
  const sorted = [...vtubers].sort((a, b) => new Date(a.debut) - new Date(b.debut));
  const idx  = sorted.findIndex(x => x.id === v.id);
  const prev = sorted[(idx - 1 + sorted.length) % sorted.length];
  const next = sorted[(idx + 1) % sorted.length];

  // 套用個人色
  if (v.color) applyVtuberColor(v.color);

  // 套用封面圖為全版背景
  if (v.coverImage) {
    document.body.style.backgroundImage    = `url('${v.coverImage}')`;
    document.body.style.backgroundSize     = 'cover';
    document.body.style.backgroundPosition = 'center top';
    document.body.style.backgroundAttachment = 'fixed';
  }

  // ── 動態分頁設定（依 vtuber 資料決定顯示哪些分頁）──
  const tabConfig = [
    { key: 'profile',    label: T('tab.profile'),     color: null },
    ...('refSheets' in v || 'refSheet' in v ? [{ key: 'refsheet',    label: T('tab.refsheet'),    color: null }] : []),
    ...('fanName'  in v ? [{ key: 'trivia',            label: T('tab.trivia'),      color: '#e65100' }] : []),
    { key: 'schedule',   label: T('tab.schedule'),     color: '#0277bd' },
    ...('youtubeChannelId' in v ? [{ key: 'livestreams', label: T('tab.livestreams'), color: '#cc0000' }] : []),
    ...(v.memberVideos && v.memberVideos.length ? [{ key: 'member', label: T('tab.member'),      color: '#8e24aa' }] : []),
    { key: 'videos',     label: T('tab.videos'),       color: '#d32f2f' },
    ...('youtubeChannelId' in v              ? [{ key: 'officialvideos', label: T('tab.officialvideos'), color: '#ff6f00' }] :
        v.shorts && v.shorts.length          ? [{ key: 'shorts',         label: T('tab.shorts'),         color: '#ff6f00' }] : []),
    ...(v.newYearWishes ? [{ key: 'wishes', label: T('tab.wishes'), color: '#e91e63' }] : []),
    ...(v.gallery && v.gallery.length ? [{ key: 'gallery', label: T('tab.gallery'), color: '#7b5ea7' }] : []),
    ...('songStatsGids' in v ? [{ key: 'songstats', label: T('tab.songstats'), color: '#c62828' }] : []),
    ...((v.musicClips && v.musicClips.length) || (v.videoClips && v.videoClips.length) || _musicClipsChs.length || _videoClipsChs.length ? [{ key: 'clips', label: T('tab.clips'), color: '#1565c0' }] : []),
  ];

  // ── 注入頂部分頁列 ─────────────────────────────
  const tabBar = document.getElementById('vtuber-tab-bar');
  tabConfig.forEach((tab, i) => {
    const color = tab.color || v.color || '#888';
    const btn = document.createElement('button');
    btn.className = 'vtab-btn' + (i === 0 ? ' active' : '');
    btn.dataset.tab = tab.key;
    btn.dataset.color = color;
    btn.textContent = tab.label;
    btn.style.setProperty('--tab-color', color);
    tabBar.appendChild(btn);
  });

  // 計算 nav 高度（包含分頁列）
  requestAnimationFrame(() => {
    const navbar = document.getElementById('main-navbar');
    if (navbar) {
      document.documentElement.style.setProperty('--nav-height', navbar.offsetHeight + 'px');
    }
  });

  // ── 三視圖 HTML ────────────────────────────────
  const hasRefSheet  = 'refSheets' in v || 'refSheet' in v;
  const hasTriviaTab = 'fanName'   in v;

  let refSheetHTML = '';
  if (hasRefSheet) {
    // 支援新版陣列 refSheets 或舊版字串 refSheet（向下相容）
    const sheets = v.refSheets || (v.refSheet ? [{ version: '三視圖', url: v.refSheet }] : []);

    // 一律顯示左側版本列（單版本時只有一個按鈕作為版本標示）
    const btns = sheets.map((s, i) =>
      `<button class="refsheet-ver-btn${i === 0 ? ' active' : ''}" data-rsidx="${i}">${s.version}</button>`
    ).join('');
    const panels = sheets.map((s, i) => {
      // 支援單張 url 或多張 urls（上下排列）
      const urlList = s.urls ? s.urls : (s.url ? [s.url] : []);
      const imgHTML = urlList.length
        ? urlList.map(u => `<img class="refsheet-img" src="${u}" alt="${v.name} ${s.version}">`).join('')
        : `<div class="refsheet-placeholder"><span style="font-size:3rem">🎨</span><p>${T('refsheet.verPending', {ver: s.version})}</p></div>`;
      return `<div class="refsheet-ver-panel${i === 0 ? ' active' : ''}" data-rsidx="${i}">${imgHTML}</div>`;
    }).join('');
    const rsInner = sheets.length
      ? `<div class="refsheet-layout">
          <div class="refsheet-ver-list">${btns}</div>
          <div class="refsheet-display">${panels}</div>
        </div>`
      : `<div class="refsheet-placeholder"><span style="font-size:3rem">🎨</span><p>${T('refsheet.pending')}</p></div>`;
    refSheetHTML = `
    <div id="tab-refsheet" class="tab-panel">
      <div class="detail-section-title">${T('tab.refsheet')}</div>
      ${rsInner}
    </div>`;
  }

  // ── 小知識 HTML ────────────────────────────────
  let triviaHTML = '';
  if (hasTriviaTab) {
    // 粉絲名稱
    let cards = `
      <div class="trivia-card">
        <div class="trivia-label">${T('trivia.fanName')}</div>
        <div class="trivia-value">${v.fanName || T('trivia.pending')}</div>
      </div>`;

    // 主題標籤（陣列 hashTags 或舊版字串 hashTag）
    if (v.hashTags && v.hashTags.length) {
      cards += `
      <div class="trivia-card trivia-full">
        <div class="trivia-label">${T('trivia.hashtag')}</div>
        <div class="trivia-items">
          ${v.hashTags.map(h => `<span class="trivia-hashtag-pill"><span class="trivia-tag-cat">${h.label}</span>${h.tag}</span>`).join('')}
        </div>
      </div>`;
    } else if (v.hashTag) {
      cards += `
      <div class="trivia-card">
        <div class="trivia-label">${T('trivia.hashtag')}</div>
        <div class="trivia-value trivia-hashtag">${v.hashTag}</div>
      </div>`;
    }

    // 未來目標（陣列 futureGoals 或舊版字串 futureGoal）
    if (v.futureGoals && v.futureGoals.length) {
      cards += `
      <div class="trivia-card trivia-full">
        <div class="trivia-label">${T('trivia.goal')}</div>
        <div class="trivia-goals">
          ${v.futureGoals.map(g => `<div class="trivia-goal-item">✦ ${g}</div>`).join('')}
        </div>
      </div>`;
    } else if (v.futureGoal) {
      cards += `
      <div class="trivia-card trivia-full">
        <div class="trivia-label">${T('trivia.goal')}</div>
        <div class="trivia-value">${v.futureGoal}</div>
      </div>`;
    }

    // 喜好（支援陣列或單一物件）
    const likesList = Array.isArray(v.triviaLikes) ? v.triviaLikes : (v.triviaLikes ? [v.triviaLikes] : []);
    likesList.forEach(like => {
      if (!like.items || !like.items.length) return;
      cards += `
      <div class="trivia-card">
        <div class="trivia-label">💚 ${like.label}</div>
        <div class="trivia-items">
          ${like.items.map(item => `<span class="trivia-item trivia-like">${item}</span>`).join('')}
        </div>
      </div>`;
    });

    // 討厭（支援陣列或單一物件）
    const hatesList = Array.isArray(v.triviaHates) ? v.triviaHates : (v.triviaHates ? [v.triviaHates] : []);
    hatesList.forEach(hate => {
      if (!hate.items || !hate.items.length) return;
      cards += `
      <div class="trivia-card">
        <div class="trivia-label">🚫 ${hate.label}</div>
        <div class="trivia-items">
          ${hate.items.map(item => `<span class="trivia-item trivia-hate">${item}</span>`).join('')}
        </div>
      </div>`;
    });

    // 自訂欄位（triviaExtra：icon 選填，items 陣列）
    const extraList = Array.isArray(v.triviaExtra) ? v.triviaExtra : [];
    extraList.forEach(extra => {
      if (!extra.items || !extra.items.length) return;
      const prefix = extra.icon ? `${extra.icon} ` : '';
      cards += `
      <div class="trivia-card">
        <div class="trivia-label">${prefix}${extra.label}</div>
        <div class="trivia-items">
          ${extra.items.map(item => `<span class="trivia-item trivia-extra">${item}</span>`).join('')}
        </div>
      </div>`;
    });

    triviaHTML = `
    <div id="tab-trivia" class="tab-panel">
      <div class="detail-section-title">${T('tab.trivia')}</div>
      <div class="trivia-grid">${cards}</div>
    </div>`;
  }

  // ── 相關連結 HTML ──────────────────────────────
  const linksHTML = (v.overrideLinks && v.overrideLinks.length)
    ? v.overrideLinks
        .filter(l => l.url)
        .map(l => `<a href="${l.url}" target="_blank" rel="noopener noreferrer" class="detail-link-btn ${l.class}"><span class="link-icon">${l.icon}</span> ${l.label}</a>`)
        .join('')
    : '<a href="' + v.youtube + '" target="_blank" rel="noopener noreferrer" class="detail-link-btn youtube"><span class="link-icon">▶</span> YouTube 頻道</a>' +
      '<a href="' + v.twitter + '" target="_blank" rel="noopener noreferrer" class="detail-link-btn twitter"><span class="link-icon">𝕏</span> Twitter / X</a>' +
      (v.twitch ? '<a href="' + v.twitch + '" target="_blank" rel="noopener noreferrer" class="detail-link-btn twitch-btn"><span class="link-icon">🟣</span> Twitch</a>' : '') +
      '<a href="' + v.spreadsheet + '" target="_blank" rel="noopener noreferrer" class="detail-link-btn sheets"><span class="link-icon">📋</span> ' + (v.spreadsheetLabel || v.name + '的大小事') + '</a>';

  // ── 動態年份按鈕 ──────────────────────────────
  const debutYear = parseInt(v.debut.split('-')[0]);
  const currentYear = new Date().getFullYear();
  const lsYearBtns = Array.from({length: currentYear - debutYear + 1}, (_, i) => currentYear - i)
    .map(y => `<button class="ls-year-btn" data-year="${y}">${y}</button>`)
    .join('');
  const ytsYearBtns = Array.from({length: currentYear - debutYear + 1}, (_, i) => currentYear - i)
    .map(y => `<button class="ls-year-btn" data-ytsyear="${y}">${y}</button>`)
    .join('');
  const ovuYearBtns = Array.from({length: currentYear - debutYear + 1}, (_, i) => currentYear - i)
    .map(y => `<button class="ls-year-btn" data-ovuyear="${y}">${y}</button>`)
    .join('');
  const memYearBtns = Array.from({length: currentYear - debutYear + 1}, (_, i) => currentYear - i)
    .map(y => `<button class="ls-year-btn" data-memyear="${y}">${y}</button>`)
    .join('');

  // ── 主要 HTML ──────────────────────────────────
  const root = document.getElementById('detail-root');
  root.innerHTML = `
    <div class="vtuber-page-layout">

      <!-- ===== 左側欄：頭像 + 社群 ===== -->
      <aside class="vtuber-sidebar">
        <div class="sidebar-card">
          <img class="detail-avatar" src="${v.avatar}" alt="${v.name}"
            onerror="this.style.background='var(--vt-main)'">
          <div class="detail-name">${v.name}</div>
          <div class="detail-name-en">${v.nameEn}</div>
          <div class="sidebar-badge" ${v.badgeTextColor ? `style="color:${v.badgeTextColor}"` : ''}>${v.group} · ${v.generation}</div>

          <div class="sidebar-social">
            <a href="${v.youtube}" target="_blank" rel="noopener noreferrer" class="sidebar-social-btn yt" title="YouTube">▶</a>
            <a href="${v.twitter}" target="_blank" rel="noopener noreferrer" class="sidebar-social-btn tw" title="Twitter/X">𝕏</a>
            ${v.twitch ? `<a href="${v.twitch}" target="_blank" rel="noopener noreferrer" class="sidebar-social-btn twitch" title="Twitch"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714z"/></svg></a>` : ''}
            ${v.facebook  ? `<a href="${v.facebook}"  target="_blank" rel="noopener noreferrer" class="sidebar-social-btn fb" title="Facebook"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="15" height="15"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg></a>` : ''}
            ${v.instagram ? `<a href="${v.instagram}" target="_blank" rel="noopener noreferrer" class="sidebar-social-btn ig" title="Instagram"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="15" height="15"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg></a>` : ''}
          </div>

          ${v.bgmVideoId ? `
          <!-- BGM 播放器 -->
          <div class="sidebar-bgm">
            <div class="sbgm-label">${T('bgm.label')}</div>
            <div id="sbgm-hidden"></div>
            <div class="sbgm-controls">
              <button class="sbgm-play-btn" id="sbgm-play-btn" title="播放 / 暫停">▶</button>
              <div class="sbgm-info">
                <div class="sbgm-song">${v.bgmLabel || v.name}</div>
                <div class="sbgm-status" id="sbgm-status">${T('bgm.status')}</div>
              </div>
              <button class="sbgm-mute-btn" id="sbgm-mute-btn" title="靜音 / 取消靜音">🔊</button>
            </div>
            <div class="sbgm-bar"><div class="sbgm-bar-fill" id="sbgm-bar-fill"></div></div>
          </div>` : ''}

          <!-- 導航區：所有 Vtuber + 上一位 / 下一位 -->
          <div class="sidebar-nav">
            <a href="vtubers.html" class="sidebar-nav-all">${T('sidebar.allVtubers')}</a>
            <div class="sidebar-nav-arrows">
              <a href="vtuber.html?id=${prev.id}" class="sidebar-nav-btn sidebar-nav-prev" title="${prev.name}">
                <span class="snav-arrow">‹</span>
                <span class="snav-label">${prev.name}</span>
              </a>
              <a href="vtuber.html?id=${next.id}" class="sidebar-nav-btn sidebar-nav-next" title="${next.name}">
                <span class="snav-label">${next.name}</span>
                <span class="snav-arrow">›</span>
              </a>
            </div>
          </div>
        </div>
      </aside>

      <!-- ===== 右側：分頁內容 ===== -->
      <main class="vtuber-content">

        <!-- TAB: 個人介紹 -->
        <div id="tab-profile" class="tab-panel active">
          <div class="detail-meta-grid" style="grid-template-columns: repeat(${genTeamName[v.generation] ? 5 : 4}, 1fr)">
            <div class="meta-card"><div class="meta-label">${T('meta.company')}</div><div class="meta-value">${v.group}</div></div>
            ${genTeamName[v.generation] ? `<div class="meta-card"><div class="meta-label">${T('meta.team')}</div><div class="meta-value">${genTeamName[v.generation]}</div></div>` : ''}
            <div class="meta-card"><div class="meta-label">${T('meta.generation')}</div><div class="meta-value">${v.generation}</div></div>
            <div class="meta-card"><div class="meta-label">${T('meta.debut')}</div><div class="meta-value">${v.debut}</div></div>
            <div class="meta-card"><div class="meta-label">${T('meta.birthday')}</div><div class="meta-value">${v.birthday}</div></div>
          </div>

          <!-- 出道計時器 -->
          <div class="debut-counter">
            <div class="debut-counter-title">${T('debut.title')}</div>
            <div class="debut-counter-display">
              <div class="debut-unit">
                <span class="debut-num" id="debut-days">--</span>
                <span class="debut-label">${T('debut.day')}</span>
              </div>
              <div class="debut-sep">:</div>
              <div class="debut-unit">
                <span class="debut-num" id="debut-hours">--</span>
                <span class="debut-label">${T('debut.hour')}</span>
              </div>
              <div class="debut-sep">:</div>
              <div class="debut-unit">
                <span class="debut-num" id="debut-minutes">--</span>
                <span class="debut-label">${T('debut.min')}</span>
              </div>
              <div class="debut-sep">:</div>
              <div class="debut-unit">
                <span class="debut-num debut-num-sec" id="debut-seconds">--</span>
                <span class="debut-label">${T('debut.sec')}</span>
              </div>
            </div>
          </div>

          <div class="detail-section-title">${T('profile.tags')}</div>
          <div class="detail-tags">
            ${v.tags.map(t => `<span class="tag">${t}</span>`).join('')}
          </div>

          <div class="detail-links-grid" style="margin-bottom:1rem">
            ${linksHTML}
          </div>

          <!-- 關於 ＋ 口頭禪 並排雙框 -->
          <div class="profile-duo">
            <div class="profile-about-col">
              <div class="detail-quote">
                <div class="quote-label">${T('profile.about', {name: v.name})}</div>
                <p class="profile-about-text">${v.description}</p>
              </div>
            </div>
            <div class="profile-quote-col">
              <div class="detail-quote">
                <div class="quote-label">${T('profile.tagline')}</div>
                ${(v.taglines && v.taglines.length)
                  ? `<div class="quote-list">
                      ${v.taglines.map(t => `
                        <div class="quote-item">
                          ${t.context ? `<span class="quote-context">${t.context}</span>` : ''}
                          <span class="quote-item-text">「${t.text}」</span>
                        </div>`).join('')}
                    </div>`
                  : v.tagline
                    ? `<div class="quote-text">「${v.tagline}」</div>`
                    : `<div class="quote-empty">${T('profile.noTagline')}</div>`
                }
              </div>
            </div>
          </div>
        </div>

        ${refSheetHTML}
        ${triviaHTML}

        <!-- TAB: 原創曲&Cover -->
        <div id="tab-videos" class="tab-panel">
          <div class="detail-section-title">${T('tab.videos')}</div>
          <div class="ls-year-bar" id="videos-filter-bar">
            <button class="ls-year-btn active" data-vfilter="all">${T('videos.all')}</button>
            <button class="ls-year-btn" data-vfilter="原創曲">${T('videos.original')}</button>
            <button class="ls-year-btn" data-vfilter="Cover">${T('videos.cover')}</button>
            <button class="ls-year-btn" data-vfilter="unclassified" style="display:none">❓ 未分類</button>
          </div>
          <div class="livestreams-container" id="video-grid"></div>
        </div>

        <!-- TAB: 手動 Shorts（無 youtubeChannelId 時使用）-->
        ${!v.youtubeChannelId && v.shorts && v.shorts.length ? `
        <div id="tab-shorts" class="tab-panel">
          <div class="detail-section-title">${T('tab.shorts')}</div>
          <p style="color:rgba(255,255,255,0.75);font-size:0.85rem;margin-bottom:0.7rem;font-weight:600;flex-shrink:0">${T('shorts.subtitle')}</p>
          <div class="video-grid shorts-grid" id="shorts-grid"></div>
        </div>` : ''}

        <!-- TAB: 官方剪輯（官方上傳影片 + Shorts） -->
        ${v.youtubeChannelId ? `
        <div id="tab-officialvideos" class="tab-panel">
          <div class="detail-section-title">${T('tab.officialvideos')}</div>

          <!-- 大分類切換 -->
          <div class="ov-section-bar">
            <button class="ov-section-btn active" data-ovsection="uploads">${T('officialvideos.uploads')}</button>
            <button class="ov-section-btn" data-ovsection="shorts">${T('officialvideos.shorts')}</button>
            <button class="ov-section-btn" data-ovsection="ads">📺 廣告</button>
            <button class="ov-section-btn" data-ovsection="unclassified">❓ 未分類</button>
          </div>

          <!-- 官方上傳影片 section -->
          <div id="ov-uploads-section">
            <div class="ls-year-bar" id="ovu-year-bar">
              <button class="ls-year-btn active" data-ovuyear="all">${T('videos.all')}</button>
              ${ovuYearBtns}
            </div>
            <div class="ls-search-bar">
              <span class="ls-search-icon">🔍</span>
              <input class="ls-search-input" id="ovu-search-input" type="text" placeholder="${T('search.ovu')}" autocomplete="off">
              <button class="ls-search-clear" id="ovu-search-clear" title="清除">✕</button>
            </div>
            <div class="ls-search-count" id="ovu-search-count"></div>
            <div class="livestreams-container" id="ovu-container"></div>
            <div class="ls-load-more-wrap" id="ovu-load-more-wrap" style="display:none">
              <button class="ls-load-more-btn" id="ovu-load-more-btn">${T('loadMore')}</button>
            </div>
          </div>

          <!-- 官方 Shorts section -->
          <div id="ov-shorts-section" style="display:none">
            <div class="ls-year-bar" id="yts-year-bar">
              <button class="ls-year-btn active" data-ytsyear="all">${T('videos.all')}</button>
              ${ytsYearBtns}
            </div>
            <div class="ls-search-bar">
              <span class="ls-search-icon">🔍</span>
              <input class="ls-search-input" id="yts-search-input" type="text" placeholder="${T('search.yts')}" autocomplete="off">
              <button class="ls-search-clear" id="yts-search-clear" title="清除">✕</button>
            </div>
            <div class="ls-search-count" id="yts-search-count"></div>
            <div class="livestreams-container" id="yts-container"></div>
            <div class="ls-load-more-wrap" id="yts-load-more-wrap" style="display:none">
              <button class="ls-load-more-btn" id="yts-load-more-btn">${T('loadMore')}</button>
            </div>
          </div>

          <!-- 廣告 section -->
          <div id="ov-ads-section" style="display:none">
            <div class="ls-year-bar" id="ov-ads-year-bar">
              <button class="ls-year-btn active" data-ovadsyear="all">${T('videos.all')}</button>
              ${ovuYearBtns}
            </div>
            <div class="ls-search-bar">
              <span class="ls-search-icon">🔍</span>
              <input class="ls-search-input" id="ov-ads-search-input" type="text" placeholder="搜尋廣告影片" autocomplete="off">
              <button class="ls-search-clear" id="ov-ads-search-clear" title="清除">✕</button>
            </div>
            <div class="ls-search-count" id="ov-ads-search-count"></div>
            <div class="livestreams-container" id="ov-ads-container"></div>
          </div>

          <!-- 未分類 section -->
          <div id="ov-unclassified-section" style="display:none">
            <div class="ls-year-bar" id="ov-unclassified-year-bar">
              <button class="ls-year-btn active" data-ovunclassifiedyear="all">${T('videos.all')}</button>
              ${ovuYearBtns}
            </div>
            <div class="ls-search-bar">
              <span class="ls-search-icon">🔍</span>
              <input class="ls-search-input" id="ov-unclassified-search-input" type="text" placeholder="搜尋未分類影片" autocomplete="off">
              <button class="ls-search-clear" id="ov-unclassified-search-clear" title="清除">✕</button>
            </div>
            <div class="ls-search-count" id="ov-unclassified-search-count"></div>
            <div class="livestreams-container" id="ov-unclassified-container"></div>
          </div>
        </div>` : ''}

        <!-- TAB: 新年願望 -->
        ${v.newYearWishes ? `
        <div id="tab-wishes" class="tab-panel">
          <div class="detail-section-title">${T('tab.wishes')}</div>
          <div class="ls-year-bar" id="wishes-year-bar">
            <button class="ls-year-btn active" data-wishyear="2026">2026</button>
            <button class="ls-year-btn" data-wishyear="2025">2025</button>
            <button class="ls-year-btn" data-wishyear="2024">2024</button>
          </div>
          <div class="wishes-table-wrap" id="wishes-table-wrap"></div>
        </div>` : ''}

        <!-- TAB: 畫冊 -->
        ${v.gallery && v.gallery.length ? `
        <div id="tab-gallery" class="tab-panel">
          <div class="detail-section-title">${T('tab.gallery')}</div>
          <!-- 會員等級篩選 -->
          <div class="gallery-filter-label">${T('gallery.memberLevel')}</div>
          <div class="ls-year-bar" id="gallery-member-bar">
            <button class="ls-year-btn active" data-gmember="all">${T('videos.all')}</button>
            <button class="ls-year-btn" data-gmember="深度">${T('gallery.deep')}</button>
            <button class="ls-year-btn" data-gmember="一般">${T('gallery.basic')}</button>
          </div>
          <!-- 顏色篩選 -->
          <div class="gallery-filter-label" style="margin-top:0.6rem">${T('gallery.colorCat')}</div>
          <div class="ls-year-bar" id="gallery-color-bar">
            <button class="ls-year-btn active" data-gcolor="all">${T('gallery.all')}</button>
            <button class="ls-year-btn" data-gcolor="red"><span class="gcolor-dot" style="background:#e53935"></span>${T('gallery.red')}</button>
            <button class="ls-year-btn" data-gcolor="yellow"><span class="gcolor-dot" style="background:#fdd835"></span>${T('gallery.yellow')}</button>
            <button class="ls-year-btn" data-gcolor="green"><span class="gcolor-dot" style="background:#43a047"></span>${T('gallery.green')}</button>
            <button class="ls-year-btn" data-gcolor="blue"><span class="gcolor-dot" style="background:#1e88e5"></span>${T('gallery.blue')}</button>
            <button class="ls-year-btn" data-gcolor="purple"><span class="gcolor-dot" style="background:#8e24aa"></span>${T('gallery.purple')}</button>
            <button class="ls-year-btn" data-gcolor="black"><span class="gcolor-dot" style="background:#424242;border:1.5px solid rgba(255,255,255,0.35)"></span>${T('gallery.black')}</button>
            <button class="ls-year-btn" data-gcolor="white"><span class="gcolor-dot" style="background:#f0f0f0;border:1.5px solid rgba(255,255,255,0.35)"></span>${T('gallery.white')}</button>
            <button class="ls-year-btn" data-gcolor="other">${T('gallery.other')}</button>
          </div>
          <div class="gallery-stats" id="gallery-stats"></div>
          <div class="gallery-grid" id="gallery-grid"></div>
        </div>` : ''}

        <!-- TAB: 歌曲統計 -->
        ${'songStatsGids' in v ? `
        <div id="tab-songstats" class="tab-panel">
          <div class="detail-section-title">${T('tab.songstats')}</div>
          <div class="ls-year-bar" id="ss-year-bar">
            ${Object.keys(v.songStatsGids).sort((a,b)=>b-a).map((y,i)=>
              `<button class="ls-year-btn${i===0?' active':''}" data-ssyear="${y}">${y}年</button>`
            ).join('')}
          </div>
          <div id="songstats-root"></div>
        </div>` : ''}

        <!-- TAB: 熱門剪輯推薦（音樂 + 影片合併） -->
        ${(v.musicClips && v.musicClips.length) || (v.videoClips && v.videoClips.length) || _musicClipsChs.length || _videoClipsChs.length ? `
        <div id="tab-clips" class="tab-panel">
          <div class="detail-section-title">${T('tab.clips')}</div>
          <div class="ls-year-bar" id="clips-type-bar">
            ${(v.musicClips && v.musicClips.length) || _musicClipsChs.length ? `<button class="ls-year-btn active" data-cliptype="music">${T('clips.music')}</button>` : ''}
            ${(v.videoClips && v.videoClips.length) || _videoClipsChs.length ? `<button class="ls-year-btn${!((v.musicClips && v.musicClips.length) || _musicClipsChs.length) ? ' active' : ''}" data-cliptype="video">${T('clips.video')}</button>` : ''}
          </div>
          <div id="clips-music-panel"${!((v.musicClips && v.musicClips.length) || _musicClipsChs.length) ? ' style="display:none"' : ''}>
            <p class="clips-desc">${T('clips.musicDesc')}</p>
            ${_musicClipsChs.length >= 1 ? `<div class="ls-year-bar clips-ch-bar" id="musicclips-ch-bar">
              ${_musicClipsChs.map((ch, i) => {
                const lbl = (typeof ch === 'object' && ch.label) ? ch.label : (T('clips.channel') + (i + 1));
                return `<button class="ls-year-btn${i === 0 ? ' active' : ''}" data-chidx="${i}">🎞 ${lbl}</button>`;
              }).join('')}
            </div>` : ''}
            <div class="video-grid" id="musicclips-grid"></div>
          </div>
          <div id="clips-video-panel"${((v.musicClips && v.musicClips.length) || _musicClipsChs.length) ? ' style="display:none"' : ''}>
            <p class="clips-desc">${T('clips.videoDesc')}</p>
            ${_videoClipsChs.length >= 1 ? `<div class="ls-year-bar clips-ch-bar" id="videoclips-ch-bar">
              ${_videoClipsChs.map((ch, i) => {
                const lbl = (typeof ch === 'object' && ch.label) ? ch.label : (T('clips.channel') + (i + 1));
                return `<button class="ls-year-btn${i === 0 ? ' active' : ''}" data-chidx="${i}">🎞 ${lbl}</button>`;
              }).join('')}
            </div>` : ''}
            <div class="video-grid" id="videoclips-grid"></div>
          </div>
        </div>` : ''}

        <!-- TAB: 行程預覽 -->
        <div id="tab-schedule" class="tab-panel">
          <div class="detail-section-title">${v.scheduleTitle || (T('tab.schedule').replace(/^📅 /, '') + ' — ' + v.name)}</div>
          <p style="color:rgba(255,255,255,0.75);font-size:0.85rem;margin-bottom:0.7rem;font-weight:600;flex-shrink:0">${T('schedule.subtitle')}</p>
          <div id="schedule-content"></div>
        </div>

        ${v.memberVideos && v.memberVideos.length ? `
        <!-- TAB: 會員直播 -->
        <div id="tab-member" class="tab-panel">
          <div class="detail-section-title">${T('tab.member')}</div>
          <div class="mem-notice">
            <span class="mem-notice-icon">🔐</span>
            <span>${T('member.notice')}</span>
            <a href="${v.youtube}/membership" target="_blank" rel="noopener noreferrer" class="mem-join-btn">${T('member.join')}</a>
          </div>
          <!-- 年份篩選 -->
          <div class="ls-year-bar" id="mem-year-bar">
            <button class="ls-year-btn active" data-memyear="all">${T('videos.all')}</button>
            ${memYearBtns}
          </div>
          <!-- 搜尋列 -->
          <div class="ls-search-bar">
            <span class="ls-search-icon">🔍</span>
            <input class="ls-search-input" id="mem-search-input" type="text" placeholder="${T('search.mem')}" autocomplete="off">
            <button class="ls-search-clear" id="mem-search-clear" title="清除">✕</button>
          </div>
          <div class="ls-search-count" id="mem-search-count"></div>
          <div class="mem-grid" id="mem-grid"></div>
        </div>` : ''}

        ${v.youtubeChannelId ? `
        <!-- TAB: 直播存檔 -->
        <div id="tab-livestreams" class="tab-panel">
          <div class="detail-section-title">${T('tab.livestreams')}</div>
          <!-- 年份篩選 -->
          <div class="ls-year-bar" id="ls-year-bar">
            <button class="ls-year-btn active" data-year="all">${T('videos.all')}</button>
            ${lsYearBtns}
          </div>
          <!-- 搜尋列 -->
          <div class="ls-search-bar">
            <span class="ls-search-icon">🔍</span>
            <input class="ls-search-input" id="ls-search-input" type="text" placeholder="${T('search.ls')}" autocomplete="off">
            <button class="ls-search-clear" id="ls-search-clear" title="清除">✕</button>
          </div>
          <div class="ls-search-count" id="ls-search-count"></div>
          <div class="livestreams-container" id="livestreams-container"></div>
          <div class="ls-load-more-wrap" id="ls-load-more-wrap" style="display:none">
            <button class="ls-load-more-btn" id="ls-load-more-btn">${T('loadMore')}</button>
          </div>
        </div>` : ''}

      </main>
    </div>
  `;

  // ── 三視圖版本切換 ──────────────────────────────
  document.querySelectorAll('.refsheet-ver-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const idx = btn.dataset.rsidx;
      document.querySelectorAll('.refsheet-ver-btn').forEach(b => b.classList.remove('active'));
      document.querySelectorAll('.refsheet-ver-panel').forEach(p => p.classList.remove('active'));
      btn.classList.add('active');
      const panel = document.querySelector(`.refsheet-ver-panel[data-rsidx="${idx}"]`);
      if (panel) panel.classList.add('active');
    });
  });

  // ── 熱門剪輯子分頁切換 ──────────────────────────
  document.getElementById('clips-type-bar')?.addEventListener('click', e => {
    const btn = e.target.closest('.ls-year-btn[data-cliptype]');
    if (!btn) return;
    document.querySelectorAll('#clips-type-bar .ls-year-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const type = btn.dataset.cliptype;
    const music = document.getElementById('clips-music-panel');
    const video = document.getElementById('clips-video-panel');
    if (music) music.style.display = type === 'music' ? '' : 'none';
    if (video) video.style.display = type === 'video' ? '' : 'none';
  });

  // ── 歌曲統計 ──────────────────────────────────
  if (v.songStatsGids) {
    const _ssSpreadsheetId = (v.spreadsheet || '').match(/\/d\/([a-zA-Z0-9_-]+)\//)?.[1];
    const _ssCacheTTL = 30 * 60 * 1000;
    let _ssActiveYear = Object.keys(v.songStatsGids).sort((a,b)=>b-a)[0]; // 預設最新年

    // 簡易 CSV 解析（支援引號欄位）
    function _parseCSV(text) {
      const rows = [];
      let row = [], field = '', inQ = false;
      for (let i = 0; i < text.length; i++) {
        const c = text[i];
        if (inQ) {
          if (c === '"' && text[i+1] === '"') { field += '"'; i++; }
          else if (c === '"') inQ = false;
          else field += c;
        } else {
          if (c === '"') inQ = true;
          else if (c === ',') { row.push(field.trim()); field = ''; }
          else if (c === '\n') { row.push(field.trim()); rows.push(row); row = []; field = ''; }
          else if (c !== '\r') field += c;
        }
      }
      if (field || row.length) { row.push(field.trim()); rows.push(row); }
      return rows;
    }

    function _parseStats(rows) {
      const stats = { date: '', total: 0, unique: 0, top3: [], songs: {}, langOrder: [] };

      // 日期：支援「統計日期, date」或「, date」(2023 格式)
      stats.date   = rows[0]?.[1] || '';
      stats.total  = parseInt(rows[1]?.[1]) || 0;
      stats.unique = parseInt(rows[2]?.[1]) || 0;

      // 前三名（列 3~5，欄 1=歌名, 3=次數）
      for (let i = 3; i <= 5; i++) {
        const name = rows[i]?.[1];
        const cnt  = parseInt(rows[i]?.[3]);
        if (name && name.trim()) stats.top3.push({ name: name.trim(), count: cnt || 1 });
      }

      // 動態找語言標題列（第一欄為任一已知語言名稱即視為標題列）
      const _knownLangs = new Set(['中文','英文','日文','自創曲','台語','V朋朋','V朋朋唱歌','其它語系','韓文']);
      let headerRow = null, tableStart = -1;
      for (let i = 0; i < rows.length; i++) {
        if (_knownLangs.has(rows[i]?.[0])) { headerRow = rows[i]; tableStart = i + 1; break; }
      }
      if (!headerRow) return stats;

      // 動態解析語言欄位（每語言佔兩欄：名稱, 數量）
      const langCols = [];
      for (let c = 0; c < headerRow.length - 1; c += 2) {
        const lang = headerRow[c];
        if (lang && lang.trim()) {
          langCols.push({ lang: lang.trim(), nc: c, cc: c + 1 });
          stats.songs[lang.trim()] = [];
          stats.langOrder.push(lang.trim());
        }
      }

      for (let i = tableStart; i < rows.length; i++) {
        const row = rows[i];
        if (!row || row.every(c => !c)) continue;
        langCols.forEach(({ lang, nc, cc }) => {
          const name = row[nc];
          const cnt  = parseInt(row[cc]) || 1;
          if (name && name.trim()) stats.songs[lang].push({ name: name.trim(), count: cnt });
        });
      }

      // 若統計摘要列沒有歌名，從解析後的歌曲資料自動推算前三名
      if (stats.top3.length === 0) {
        const allFlat = Object.values(stats.songs).flat().sort((a, b) => b.count - a.count);
        stats.top3 = allFlat.slice(0, 3);
      }

      return stats;
    }

    const langColors = { '中文':'#e53935','英文':'#1e88e5','日文':'#8e24aa','自創曲':'#fb8c00','台語':'#43a047','V朋朋':'#00acc1','V朋朋唱歌':'#00acc1','其它語系':'#607d8b' };

    function _renderSongStats(stats) {
      const root = document.getElementById('songstats-root');
      if (!root) return;

      const validLangs = stats.langOrder.filter(l => (stats.songs[l] || []).length > 0);
      const langCounts = {};
      validLangs.forEach(l => langCounts[l] = stats.songs[l].length);

      // 合併全部歌曲，照次數降序
      const allSongs = [];
      validLangs.forEach(l => (stats.songs[l] || []).forEach(s => allSongs.push({...s, lang: l})));
      allSongs.sort((a, b) => b.count - a.count || a.name.localeCompare(b.name, 'zh'));

      root.innerHTML = `
        <div class="ss-summary">
          <span class="ss-date">${T('ss.date', {date: stats.date})}</span>
          <span class="ss-num">${T('ss.total', {n: stats.total})}</span>
          <span class="ss-num">${T('ss.unique', {n: stats.unique})}</span>
        </div>
        ${stats.top3.length ? `
        <div class="ss-top3">
          <div class="ss-top3-title">${T('ss.top3')}</div>
          ${stats.top3.map((s,i) => `
            <div class="ss-top3-item">
              <span class="ss-medal">${['🥇','🥈','🥉'][i]}</span>
              <span class="ss-top3-name">${s.name}</span>
              <span class="ss-top3-cnt">×${s.count}</span>
            </div>`).join('')}
        </div>` : ''}
        <div class="ls-year-bar" id="ss-lang-bar">
          ${validLangs.map((l,i) => `<button class="ls-year-btn${i===0?' active':''}" data-slang="${l}" style="--tab-color:${langColors[l]||'#888'}">${l} (${langCounts[l]})</button>`).join('')}
        </div>
        <div class="ls-search-bar">
          <span class="ls-search-icon">🔍</span>
          <input class="ls-search-input" id="ss-search" type="text" placeholder="${T('search.song')}" autocomplete="off">
          <button class="ls-search-clear" id="ss-clear" title="清除" style="display:none">✕</button>
        </div>
        <div class="ls-search-count" id="ss-count"></div>
        <div class="ss-table-wrap">
          <table class="ss-table">
            <thead><tr><th>${T('ss.col.no')}</th><th>${T('ss.col.name')}</th><th>${T('ss.col.lang')}</th><th>${T('ss.col.count')}</th></tr></thead>
            <tbody id="ss-tbody"></tbody>
          </table>
        </div>`;

      let activeLang = validLangs[0] || '', searchQ = '';

      function updateTable() {
        const filtered = allSongs.filter(s =>
          s.lang === activeLang &&
          (!searchQ || s.name.toLowerCase().includes(searchQ.toLowerCase()))
        );
        document.getElementById('ss-tbody').innerHTML = filtered.map((s, i) => `
          <tr>
            <td class="ss-no">${i + 1}</td>
            <td class="ss-name">${s.name}</td>
            <td class="ss-lang"><span class="ss-lang-dot" style="background:${langColors[s.lang]||'#888'}"></span>${s.lang}</td>
            <td class="ss-cnt">${s.count > 1 ? `<span class="ss-cnt-badge">×${s.count}</span>` : '1'}</td>
          </tr>`).join('');
        const cntEl = document.getElementById('ss-count');
        cntEl.textContent = searchQ ? T('found.songs', {n: filtered.length, total: allSongs.filter(s=>s.lang===activeLang).length}) : '';
      }
      updateTable();

      document.getElementById('ss-lang-bar').addEventListener('click', e => {
        const btn = e.target.closest('.ls-year-btn[data-slang]');
        if (!btn) return;
        document.querySelectorAll('#ss-lang-bar .ls-year-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        activeLang = btn.dataset.slang;
        updateTable();
      });

      const inp = document.getElementById('ss-search');
      const clr = document.getElementById('ss-clear');
      inp.addEventListener('input', () => {
        searchQ = inp.value;
        clr.style.display = searchQ ? 'flex' : 'none';
        updateTable();
      });
      clr.addEventListener('click', () => {
        inp.value = ''; searchQ = '';
        clr.style.display = 'none';
        updateTable();
      });
    }

    async function _fetchAndRender(year) {
      const root = document.getElementById('songstats-root');
      if (!root || !_ssSpreadsheetId) return;
      root.innerHTML = `<div class="ls-loading"><span class="ls-spin"></span> ${T('loading')}</div>`;

      const cacheKey = `songstats_v2_${v.id}_${year}`;
      try {
        const c = sessionStorage.getItem(cacheKey);
        if (c) {
          const { data, time } = JSON.parse(c);
          if (Date.now() - time < _ssCacheTTL) { _renderSongStats(data); return; }
        }
      } catch(e) {}

      const gid = v.songStatsGids[year];
      const url = v.songStatsPublishedId
        ? `https://docs.google.com/spreadsheets/d/e/${v.songStatsPublishedId}/pub?gid=${gid}&single=true&output=csv`
        : `https://docs.google.com/spreadsheets/d/${_ssSpreadsheetId}/pub?gid=${gid}&single=true&output=csv`;
      try {
        const res = await fetch(url);
        if (!res.ok) throw new Error('HTTP ' + res.status);
        const text = await res.text();
        const stats = _parseStats(_parseCSV(text));
        try { sessionStorage.setItem(cacheKey, JSON.stringify({ data: stats, time: Date.now() })); } catch(e) {}
        _renderSongStats(stats);
      } catch(e) {
        if (root) root.innerHTML = `<div class="ls-empty">${T('loadFail')}</div>`;
      }
    }

    // 年份切換
    document.getElementById('ss-year-bar')?.addEventListener('click', e => {
      const btn = e.target.closest('.ls-year-btn[data-ssyear]');
      if (!btn) return;
      document.querySelectorAll('#ss-year-bar .ls-year-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      _ssActiveYear = btn.dataset.ssyear;
      _fetchAndRender(_ssActiveYear);
    });

    window._loadSongStats = function() { _fetchAndRender(_ssActiveYear); };
  }

  // ── YouTube 彈出視窗（Modal）────────────────────
  const ytModal = document.createElement('div');
  ytModal.id = 'yt-modal';
  ytModal.className = 'yt-modal-overlay';
  ytModal.innerHTML = `
    <div class="yt-modal-box">
      <button class="yt-modal-close" id="yt-modal-close" title="關閉">✕</button>
      <div class="yt-modal-title" id="yt-modal-title"></div>
      <div class="yt-modal-iframe-wrap">
        <iframe id="yt-modal-iframe" src="" frameborder="0"
          allowfullscreen allow="autoplay; encrypted-media; picture-in-picture"></iframe>
      </div>
      <a class="yt-modal-fallback" id="yt-modal-fallback" href="#" target="_blank" rel="noopener noreferrer">
        ${T('ytModal.fallback')}
      </a>
    </div>`;
  document.body.appendChild(ytModal);

  function openYTModal(videoId, title) {
    document.getElementById('yt-modal-iframe').src =
      `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;
    document.getElementById('yt-modal-fallback').href =
      `https://www.youtube.com/watch?v=${videoId}`;
    document.getElementById('yt-modal-title').textContent = title || '';
    ytModal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeYTModal() {
    document.getElementById('yt-modal-iframe').src = '';
    ytModal.classList.remove('open');
    document.body.style.overflow = '';
  }

  document.getElementById('yt-modal-close').addEventListener('click', closeYTModal);
  ytModal.addEventListener('click', e => { if (e.target === ytModal) closeYTModal(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeYTModal(); });

  // ── 共用：渲染影片卡片（ls-card 格式，公開影片用 modal）────
  function renderVideoCards(items, containerId, placeholderIcon) {
    const container = document.getElementById(containerId);
    if (!container || !items || !items.length) return;
    items.forEach(vid => {
      if (vid.id && !vid.id.startsWith('REPLACE')) {
        const thumbUrl  = vid.thumb || ('https://img.youtube.com/vi/' + vid.id + '/hqdefault.jpg');
        const safeTitle = esc(vid.title || '');
        container.innerHTML += `
          <div class="ls-card" onclick="(function(){
            document.getElementById('yt-modal-iframe').src='https://www.youtube.com/embed/${vid.id}?autoplay=1&rel=0';
            document.getElementById('yt-modal-fallback').href='https://www.youtube.com/watch?v=${vid.id}';
            document.getElementById('yt-modal-title').textContent='${safeTitle}';
            document.getElementById('yt-modal').classList.add('open');
            document.body.style.overflow='hidden';
          })()">
            <div class="ls-thumb-wrap">
              <img class="ls-thumb" src="${thumbUrl}" alt="${safeTitle}" loading="lazy">
              <div class="ls-play-overlay"><div class="ls-play-btn">▶</div></div>
            </div>
            <div class="ls-info">
              <div class="ls-title">${safeTitle || T('noTitle')}</div>
              ${vid.date ? '<div class="ls-date">' + vid.date + '</div>' : ''}
            </div>
          </div>`;
      } else {
        container.innerHTML += `
          <div class="ls-card" style="cursor:default">
            <div class="ls-thumb-wrap" style="display:flex;align-items:center;justify-content:center;background:rgba(0,0,0,0.3)">
              <span style="font-size:2.5rem">${placeholderIcon}</span>
            </div>
            <div class="ls-info"><div class="ls-title" style="opacity:.5">${T('video.pending')}</div></div>
          </div>`;
      }
    });
  }

  // ── 各分頁影片渲染 ────────────────────────────
  // 原創曲&Cover：如果有 youtubeChannelId，則改用自動載入；否則用手動資料
  if (!v.youtubeChannelId && v.videos) {
    renderVideoCards(v.videos, 'video-grid', '🎵');
  }
  renderVideoCards(v.shorts,     'shorts-grid',     '📱');
  renderVideoCards(v.musicClips, 'musicclips-grid', '🎶');
  renderVideoCards(v.videoClips, 'videoclips-grid', '🎬');

  // ── 剪輯頻道自動抓取（單一頻道，支援三層篩選）────
  // chEntry 欄位說明：
  //   keywords        → 人名過濾（OR，任一命中才收錄）
  //   typeKeywords    → 內容類型白名單（AND，還需命中此列其中一個）
  //   excludeKeywords → 內容類型黑名單（標題含其中任一 → 排除）
  //   playlistId      → 指定播放清單（如 UUSH… = Shorts 清單）
  async function _fetchClipsForChannel(chEntry, gridId, emoji, subTabBtn) {
    const grid = document.getElementById(gridId);
    if (!grid || !chEntry || !v.ytApiKey) return;
    // 支援多頻道合併（ids 陣列）或單頻道（id / 字串）
    const channelIds  = typeof chEntry === 'string' ? [chEntry]
      : (chEntry.ids ? chEntry.ids : [chEntry.id]);
    const channelId   = channelIds[0]; // 主 ID（向下相容）
    const kws         = (typeof chEntry === 'object' && chEntry.keywords)
      ? chEntry.keywords.map(k => k.toLowerCase()) : null;
    const typeKws     = (typeof chEntry === 'object' && chEntry.typeKeywords)
      ? chEntry.typeKeywords.map(k => k.toLowerCase()) : null;
    const excludeKws  = (typeof chEntry === 'object' && chEntry.excludeKeywords)
      ? chEntry.excludeKeywords.map(k => k.toLowerCase()) : null;
    // 每個頻道 ID 對應的上傳播放清單（playlistId 只對單頻道有效）
    const uploadsIds  = channelIds.map((id, i) =>
      (i === 0 && typeof chEntry === 'object' && chEntry.playlistId)
        ? chEntry.playlistId : 'UU' + id.slice(2)
    );
    // 快取原始資料（不含篩選），以所有頻道 ID 排序後組合為 key
    const cacheKey = `clips_ch_raw_v2_${[...channelIds].sort().join('_')}`;

    // 於顯示時套用各主播自己的關鍵字篩選
    // 若未設定 typeKeywords / excludeKeywords，則自動套用全域音樂關鍵字：
    //   ・音樂格（musicclips-grid）→ 標題須含全域音樂關鍵字之一
    //   ・影片格（videoclips-grid）→ 標題不得含全域音樂關鍵字
    function applyFilters(rawItems) {
      const isMusicGrid = gridId === 'musicclips-grid';
      const isVideoGrid = gridId === 'videoclips-grid';
      // 音樂格：只在「既無 typeKeywords 也無 excludeKeywords」時才套用全域關鍵字
      // （若已設 excludeKeywords 代表人工定義了分類邊界，不再額外限縮）
      const effectiveTypeKws    = typeKws    ?? ((isMusicGrid && !excludeKws) ? GLOBAL_MUSIC_KEYWORDS : null);
      const effectiveExcludeKws = excludeKws ?? (isVideoGrid ? GLOBAL_MUSIC_KEYWORDS : null);
      return rawItems.filter(item => {
        const t = item.title.toLowerCase();
        if (kws                  && !kws.some(k                 => t.includes(k))) return false; // 人名白名單（OR）
        if (effectiveTypeKws     && !effectiveTypeKws.some(k    => t.includes(k))) return false; // 類型白名單（OR）
        if (effectiveExcludeKws  &&  effectiveExcludeKws.some(k => t.includes(k))) return false; // 類型黑名單（排除）
        return true;
      });
    }

    // 渲染結果；若無影片則隱藏子標籤按鈕並自動切換到下一個有影片的標籤
    function _done(videosArr, subTabBtn) {
      grid.innerHTML = '';
      if (!videosArr || videosArr.length === 0) {
        if (subTabBtn) {
          subTabBtn.hidden = true;
          if (subTabBtn.classList.contains('active')) {
            subTabBtn.classList.remove('active');
            const bar = subTabBtn.closest('.clips-ch-bar');
            const next = bar && [...bar.querySelectorAll('[data-chidx]')].find(b => !b.hidden);
            if (next) next.click(); // 觸發點擊 → 載入下一個頻道
          }
        }
        return;
      }
      renderVideoCards(videosArr, gridId, emoji || '🎶');
    }

    // 先讀 raw cache → 套用篩選後直接顯示
    try {
      const c = sessionStorage.getItem(cacheKey);
      if (c) {
        const { data, time } = JSON.parse(c);
        if (Date.now() - time < 30 * 60 * 1000) { _done(applyFilters(data), subTabBtn); return; }
      }
    } catch(e) {}
    grid.innerHTML = `<div class="ls-loading"><span class="ls-spin"></span> ${T('loading')}</div>`;
    let rawVideos = [];
    try {
      // 逐一抓取所有頻道（多頻道時合併）
      for (const uploadsId of uploadsIds) {
        let pageToken = '', pageCount = 0;
        try {
          do {
            const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${uploadsId}&maxResults=50&key=${v.ytApiKey}${pageToken ? '&pageToken=' + pageToken : ''}`;
            const res = await fetch(url);
            if (!res.ok) break; // 此頻道失敗則跳過，繼續下一個
            const json = await res.json();
            (json.items || []).forEach(item => {
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
            pageCount++;
          } while (pageToken && pageCount < 20);
        } catch(e) {} // 單頻道失敗不影響其他頻道
      }
      // 依日期由新到舊排序合併結果
      rawVideos.sort((a, b) => (b.date > a.date ? 1 : -1));
      // 快取原始資料
      try { sessionStorage.setItem(cacheKey, JSON.stringify({ data: rawVideos, time: Date.now() })); } catch(e) {}
      // 套用本主播的篩選後顯示
      _done(applyFilters(rawVideos), subTabBtn);
    } catch(e) {
      grid.innerHTML = `<div class="ls-empty">${T('loadFail')}</div>`;
    }
  }

  // ── 頻道子標籤點擊處理 ────────────────────────────
  function _setupChSubTabs(barId, chsList, gridId, emoji) {
    const bar = document.getElementById(barId);
    if (!bar) return;
    bar.addEventListener('click', e => {
      const btn = e.target.closest('[data-chidx]');
      if (!btn) return;
      bar.querySelectorAll('[data-chidx]').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      // 傳入 btn → fetch 完後若無影片自動隱藏此標籤並切換到下一個
      _fetchClipsForChannel(chsList[parseInt(btn.dataset.chidx)], gridId, emoji, btn);
    });
  }
  _setupChSubTabs('musicclips-ch-bar', _musicClipsChs, 'musicclips-grid', '🎶');
  _setupChSubTabs('videoclips-ch-bar', _videoClipsChs, 'videoclips-grid', '🎬');

  // 進入 clips tab 時載入第一個頻道（預設），同時傳入按鈕以便空結果時自動隱藏
  if (_musicClipsChs.length) window._loadMusicClipsChannel = () => {
    const btn = document.querySelector('#musicclips-ch-bar [data-chidx="0"]');
    _fetchClipsForChannel(_musicClipsChs[0], 'musicclips-grid', '🎶', btn);
  };
  if (_videoClipsChs.length) window._loadVideoClipsChannel = () => {
    const btn = document.querySelector('#videoclips-ch-bar [data-chidx="0"]');
    _fetchClipsForChannel(_videoClipsChs[0], 'videoclips-grid', '🎬', btn);
  };

  // ── 新年願望 ──────────────────────────────────
  if (v.newYearWishes) {
    function renderWishes(year) {
      const wrap = document.getElementById('wishes-table-wrap');
      if (!wrap) return;
      const list = v.newYearWishes[year] || [];
      if (!list.length) {
        wrap.innerHTML = '<div class="ls-no-key"><span style="font-size:2.5rem">🎍</span><p>' + T('wishes.pending', {year}) + '</p></div>';
        return;
      }
      wrap.innerHTML = `
        <table class="wishes-table">
          <thead>
            <tr>
              <th class="wt-no">${T('wishes.no')}</th>
              <th class="wt-item">${T('wishes.item')}</th>
              <th class="wt-goal">${T('wishes.goal')}</th>
              <th class="wt-done">${T('wishes.done')}</th>
            </tr>
          </thead>
          <tbody>
            ${list.map((w, i) => `
              <tr>
                <td class="wt-no">${i + 1}</td>
                <td class="wt-item">${w.item || ''}</td>
                <td class="wt-goal">${w.goal || ''}</td>
                <td class="wt-done">${w.achieved || '<span class="wt-blank">—</span>'}</td>
              </tr>`).join('')}
          </tbody>
        </table>`;
    }

    renderWishes(2026);

    document.addEventListener('click', e => {
      const btn = e.target.closest('.ls-year-btn[data-wishyear]');
      if (!btn) return;
      document.querySelectorAll('.ls-year-btn[data-wishyear]').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderWishes(Number(btn.dataset.wishyear));
    });
  }

  // ── 原創曲&Cover 篩選按鈕 ──────────────────────
  document.addEventListener('click', e => {
    const btn = e.target.closest('.ls-year-btn[data-vfilter]');
    if (!btn) return;
    document.querySelectorAll('.ls-year-btn[data-vfilter]').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.dataset.vfilter;
    document.querySelectorAll('#video-grid .ls-card').forEach(card => {
      const videoType = card.dataset.videoType;
      const title = (card.querySelector('.ls-title')?.textContent || '').toLowerCase();
      if (filter === 'all') {
        card.style.display = '';
      } else if (filter === '原創曲') {
        // 優先用 data-video-type，如果沒有則fallback到標題判斷（相容舊的手動影片）
        if (videoType) {
          card.style.display = videoType === 'original' ? '' : 'none';
        } else {
          card.style.display = title.includes('【原創】') || title.includes('原創') ? '' : 'none';
        }
      } else if (filter === 'Cover') {
        // 優先用 data-video-type，如果沒有則fallback到標題判斷（相容舊的手動影片）
        if (videoType) {
          card.style.display = videoType === 'cover' ? '' : 'none';
        } else {
          card.style.display = title.includes('【cover】') || title.toLowerCase().includes('cover') ? '' : 'none';
        }
      } else if (filter === 'unclassified') {
        card.style.display = videoType === 'unclassified' ? '' : 'none';
      }
    });
  });

  // ── 畫冊（Gallery）────────────────────────────
  if (v.gallery && v.gallery.length) {
    // 正規化：支援純字串路徑或 {src, title, color, member} 物件
    const galleryItems = v.gallery.map(item =>
      typeof item === 'string'
        ? { src: item, title: '', color: '', member: '' }
        : { src: '', title: '', color: '', member: '', ...item }
    );

    const GALLERY_CACHE_KEY = 'mc_gallery_' + v.id;
    let galleryColors = {};
    try {
      const raw = localStorage.getItem(GALLERY_CACHE_KEY);
      if (raw) galleryColors = JSON.parse(raw);
    } catch(e) {}

    let galleryActiveColor  = 'all';
    let galleryActiveMember = 'all';

    const colorDotMap = {
      red:    '#e53935', yellow: '#fdd835',
      green:  '#43a047', blue:   '#1e88e5', purple: '#8e24aa',
      black:  '#424242', white:  '#f0f0f0', other:  '#9e9e9e'
    };

    // RGB → 顏色分類名稱
    function pixelToColorName(r, g, b) {
      const rn = r/255, gn = g/255, bn = b/255;
      const max = Math.max(rn, gn, bn), min = Math.min(rn, gn, bn);
      const l = (max + min) / 2;
      const delta = max - min;
      const s = delta === 0 ? 0 : (l > 0.5 ? delta / (2 - max - min) : delta / (max + min));

      if (l > 0.88 && s < 0.18) return 'white';
      if (l < 0.12) return 'black';
      if (s < 0.14) return l > 0.5 ? 'white' : 'black';

      let h;
      if (delta === 0) h = 0;
      else if (max === rn) h = ((gn - bn) / delta % 6) * 60;
      else if (max === gn) h = ((bn - rn) / delta + 2) * 60;
      else                 h = ((rn - gn) / delta + 4) * 60;
      if (h < 0) h += 360;

      if (h < 15 || h >= 345) return 'red';
      if (h < 70)  return 'yellow'; // 橙色範圍（H 15-40°）併入黃色
      if (h < 150) return 'green';
      if (h < 258) return 'blue';
      return 'purple';
    }

    // Canvas 像素取樣偵測主色（白底版：過濾白色背景，只看角色顏色）
    function detectImgColor(imgEl) {
      try {
        const sz = 40; // 40×40 足夠準確，比 80×80 快 4 倍
        const c = document.createElement('canvas');
        c.width = sz; c.height = sz;
        const ctx = c.getContext('2d');
        ctx.drawImage(imgEl, 0, 0, sz, sz);
        const d = ctx.getImageData(0, 0, sz, sz).data;
        const tally = {};
        for (let i = 0; i < d.length; i += 4) {
          const r = d[i], g = d[i+1], b = d[i+2], a = d[i+3];
          if (a < 100) continue;
          // 過濾白色／近白色背景
          if (r > 220 && g > 220 && b > 220) continue;
          // 過濾輪廓黑線
          if (r < 40 && g < 40 && b < 40) continue;
          const cn = pixelToColorName(r, g, b);
          // 過濾掉 white / black 分類（確保只留彩色）
          if (cn === 'white' || cn === 'black') continue;
          tally[cn] = (tally[cn] || 0) + 1;
        }
        const entries = Object.entries(tally);
        if (!entries.length) return 'other';
        return entries.sort((a, b) => b[1] - a[1])[0][0];
      } catch(e) { return 'other'; }
    }

    function saveGalleryColors() {
      try { localStorage.setItem(GALLERY_CACHE_KEY, JSON.stringify(galleryColors)); } catch(e) {}
    }

    function getItemColor(item) {
      if (item.color) return item.color;
      const key = (item.src || '').split('/').pop();
      return galleryColors[key] || null;
    }

    function renderGalleryGrid() {
      const grid    = document.getElementById('gallery-grid');
      const statsEl = document.getElementById('gallery-stats');
      if (!grid) return;

      // 同時套用顏色篩選 + 會員等級篩選
      const visible = galleryItems.filter(item => {
        const fname     = (item.src || '').split('/').pop();
        const isVariant = /-1\.[^.]+$/.test(fname); // -1.png = 白底版

        // 「全部」→ 只顯示 ooo.png（全身圖，複雜背景）
        // 顏色按鈕 → 只顯示 ooo-1.png（白底）中符合顏色的圖
        const colorMatch = galleryActiveColor === 'all'
          ? !isVariant   // 全部模式：只顯示 ooo.png
          : isVariant && (
              galleryActiveColor === 'other'
                ? !getItemColor(item) || getItemColor(item) === 'other'
                : getItemColor(item) === galleryActiveColor
            );

        const memberMatch = galleryActiveMember === 'all'
          ? true
          : (item.member || '') === galleryActiveMember;

        return colorMatch && memberMatch;
      });

      if (statsEl) {
        const totalOrig    = galleryItems.filter(gi => !/-1\.[^.]+$/.test((gi.src||'').split('/').pop())).length;
        const totalVariant = galleryItems.filter(gi =>  /-1\.[^.]+$/.test((gi.src||'').split('/').pop())).length;
        if (galleryActiveColor === 'all') {
          statsEl.textContent = T('gallery.orig', {n: totalOrig});
        } else {
          statsEl.textContent = T('gallery.variant', {n: visible.length, total: totalVariant});
        }
      }

      grid.innerHTML = visible.map((item, vi) => {
        // 判斷是否為白底版（-1.png）
        const fname      = (item.src || '').split('/').pop();
        const isVariant  = /-1\.[^.]+$/.test(fname);
        // 只有白底版才顯示顏色圓點
        const color      = isVariant ? getItemColor(item) : null;
        const dotColor   = color ? (colorDotMap[color] || '#888') : null;
        const dotStyle   = dotColor ? 'background:' + dotColor : 'opacity:0';
        // 顯示名稱：優先用 title，沒有就用檔案名（去掉副檔名）
        const displayName = item.title || fname.replace(/\.[^.]+$/, '');
        const safeTitle   = esc(displayName);
        // 會員徽章
        const memberBadge = item.member === '深度' ? '💎' : item.member === '一般' ? '⭐' : '';
        return `
          <div class="gallery-item" data-vi="${vi}" data-src="${item.src}" data-title="${safeTitle}">
            <img src="${item.src}" alt="${safeTitle}" loading="lazy" crossorigin="anonymous"
              onerror="this.parentElement.classList.add('gallery-item-error')">
            <div class="gallery-color-dot" style="${dotStyle}"></div>
            ${memberBadge ? `<div class="gallery-member-badge">${memberBadge}</div>` : ''}
            <div class="gallery-item-label">${safeTitle}</div>
          </div>`;
      }).join('');

      // 只對白底版（-1.png）做自動顏色偵測
      grid.querySelectorAll('.gallery-item img').forEach(img => {
        const wrapper  = img.closest('.gallery-item');
        const src      = wrapper.dataset.src;
        const fname    = src.split('/').pop();
        const isVariant = /-1\.[^.]+$/.test(fname);
        if (!isVariant) return;                   // 非白底版跳過
        const dataItem = galleryItems.find(gi => gi.src === src);
        if (!dataItem || dataItem.color) return;  // 已有手動顏色
        if (galleryColors[fname]) return;         // 已偵測過

        const tryDetect = () => {
          if (img.naturalWidth === 0) return;
          const detected = detectImgColor(img);
          galleryColors[fname] = detected;
          saveGalleryColors();
          const dot = wrapper.querySelector('.gallery-color-dot');
          if (dot && detected !== 'other') {
            dot.style.cssText = 'background:' + (colorDotMap[detected] || '#888');
          }
        };

        if (img.complete && img.naturalWidth > 0) tryDetect();
        else img.addEventListener('load', tryDetect, { once: true });
      });
    }

    renderGalleryGrid();

    // ── 背景預載所有白底版（-1.png），加速首次顏色偵測 ──
    // 不等使用者滑到圖片位置，直接在背景把顏色算好存進快取
    // 等使用者點顏色按鈕時，圓點可以立即顯示
    (function schedulePreload() {
      const run = () => {
        galleryItems.forEach(item => {
          const fname = (item.src || '').split('/').pop();
          if (!/-1\.[^.]+$/.test(fname)) return; // 只處理白底版
          if (item.color || galleryColors[fname]) return; // 已有顏色，跳過
          const img = new Image();
          img.crossOrigin = 'anonymous';
          img.onload = () => {
            if (img.naturalWidth === 0) return;
            const detected = detectImgColor(img);
            galleryColors[fname] = detected;
            saveGalleryColors();
            // 若此圖目前在 DOM 裡顯示，立即更新右上角圓點
            const wrapper = document.querySelector(
              '.gallery-item[data-src="' + item.src.replace(/\\/g, '\\\\').replace(/"/g, '\\"') + '"]'
            );
            const dot = wrapper && wrapper.querySelector('.gallery-color-dot');
            if (dot && colorDotMap[detected]) {
              dot.style.cssText = 'background:' + colorDotMap[detected];
            }
          };
          img.src = item.src;
        });
      };
      // 等主要內容渲染完才開始，避免搶佔頁面資源
      if ('requestIdleCallback' in window) {
        requestIdleCallback(run, { timeout: 4000 });
      } else {
        setTimeout(run, 1000);
      }
    })();

    // 顏色篩選按鈕
    document.addEventListener('click', e => {
      const btn = e.target.closest('.ls-year-btn[data-gcolor]');
      if (!btn) return;
      document.querySelectorAll('.ls-year-btn[data-gcolor]').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      galleryActiveColor = btn.dataset.gcolor;
      renderGalleryGrid();
    });

    // 會員等級篩選按鈕
    document.addEventListener('click', e => {
      const btn = e.target.closest('.ls-year-btn[data-gmember]');
      if (!btn) return;
      document.querySelectorAll('.ls-year-btn[data-gmember]').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      galleryActiveMember = btn.dataset.gmember;
      renderGalleryGrid();
    });

    // 燈箱（Lightbox）
    const galleryLightbox = document.createElement('div');
    galleryLightbox.id = 'gallery-lightbox';
    galleryLightbox.className = 'gallery-lightbox';
    galleryLightbox.innerHTML = `
      <button class="gallery-lb-close" id="gallery-lb-close" title="關閉">✕</button>
      <button class="gallery-lb-nav gallery-lb-prev" id="gallery-lb-prev">‹</button>
      <div class="gallery-lightbox-inner">
        <img id="gallery-lb-img" src="" alt="">
        <div class="gallery-lb-title" id="gallery-lb-title"></div>
        <div class="gallery-lb-counter" id="gallery-lb-counter"></div>
      </div>
      <button class="gallery-lb-nav gallery-lb-next" id="gallery-lb-next">›</button>`;
    document.body.appendChild(galleryLightbox);

    let lbVisibleItems = [];
    let lbIdx = 0;

    function openGalleryLb(idx, items) {
      lbVisibleItems = items;
      lbIdx = idx;
      document.getElementById('gallery-lb-img').src       = items[idx].src;
      document.getElementById('gallery-lb-title').textContent   = items[idx].title || '';
      document.getElementById('gallery-lb-counter').textContent = (idx + 1) + ' / ' + items.length;
      galleryLightbox.classList.add('open');
      document.body.style.overflow = 'hidden';
    }

    function closeGalleryLb() {
      galleryLightbox.classList.remove('open');
      setTimeout(() => { document.getElementById('gallery-lb-img').src = ''; }, 200);
      document.body.style.overflow = '';
    }

    function navGalleryLb(delta) {
      lbIdx = (lbIdx + delta + lbVisibleItems.length) % lbVisibleItems.length;
      document.getElementById('gallery-lb-img').src             = lbVisibleItems[lbIdx].src;
      document.getElementById('gallery-lb-title').textContent   = lbVisibleItems[lbIdx].title || '';
      document.getElementById('gallery-lb-counter').textContent = (lbIdx + 1) + ' / ' + lbVisibleItems.length;
    }

    document.getElementById('gallery-lb-close').addEventListener('click', closeGalleryLb);
    document.getElementById('gallery-lb-prev').addEventListener('click', () => navGalleryLb(-1));
    document.getElementById('gallery-lb-next').addEventListener('click', () => navGalleryLb(1));
    galleryLightbox.addEventListener('click', e => { if (e.target === galleryLightbox) closeGalleryLb(); });
    document.addEventListener('keydown', e => {
      if (!galleryLightbox.classList.contains('open')) return;
      if (e.key === 'Escape')      closeGalleryLb();
      if (e.key === 'ArrowLeft')   navGalleryLb(-1);
      if (e.key === 'ArrowRight')  navGalleryLb(1);
    });

    // 點擊畫冊圖片開啟燈箱
    document.addEventListener('click', e => {
      const item = e.target.closest('.gallery-item');
      if (!item) return;
      const grid = document.getElementById('gallery-grid');
      if (!grid || !grid.contains(item)) return;
      const allItems   = [...grid.querySelectorAll('.gallery-item')];
      const clickedIdx = allItems.indexOf(item);
      const snapItems  = allItems.map(el => {
        const s = el.dataset.src || '';
        const t = el.dataset.title || s.split('/').pop().replace(/\.[^.]+$/, '');
        return { src: s, title: t };
      });
      openGalleryLb(clickedIdx, snapItems);
    });
  }

  // ── 行程區 ────────────────────────────────────
  const scheduleContent = document.getElementById('schedule-content');
  let scheduleHTML = '';
  if (v.scheduleVideoId && !v.scheduleVideoId.startsWith('REPLACE')) {
    const schedThumb   = `https://img.youtube.com/vi/${v.scheduleVideoId}/maxresdefault.jpg`;
    const schedThumbFb = `https://img.youtube.com/vi/${v.scheduleVideoId}/hqdefault.jpg`;
    const schedUrl     = `https://www.youtube.com/watch?v=${v.scheduleVideoId}`;
    scheduleHTML += `
      <a class="schedule-thumb-link" href="${schedUrl}" target="_blank" rel="noopener noreferrer">
        <div class="schedule-thumb-wrap">
          <img class="schedule-thumb" src="${schedThumb}" onerror="this.src='${schedThumbFb}'" alt="${v.scheduleTitle || v.name}">
          <div class="schedule-thumb-overlay"><div class="schedule-play-btn">${T('schedule.playBtn')}</div></div>
        </div>
      </a>`;
  } else {
    scheduleHTML += `<div class="schedule-placeholder"><span style="font-size:3rem">📅</span><p>${T('schedule.pending')}</p></div>`;
  }
  scheduleHTML += `
    <div class="schedule-links-row">
      <a href="${v.youtube}" target="_blank" rel="noopener noreferrer" class="detail-link-btn youtube"><span class="link-icon">▶</span> ${T('schedule.toYouTube')}</a>
      <a href="${v.spreadsheet}" target="_blank" rel="noopener noreferrer" class="detail-link-btn sheets"><span class="link-icon">📋</span> ${v.spreadsheetLabel || v.name + '的大小事'}</a>
    </div>`;
  scheduleContent.innerHTML = scheduleHTML;

  // ── 會員直播（手動資料渲染）────────────────────
  if (v.memberVideos && v.memberVideos.length) {
    let memCurrentYear = 'all';

    function renderMemGrid(year) {
      memCurrentYear = year;
      const grid     = document.getElementById('mem-grid');
      const countEl  = document.getElementById('mem-search-count');
      const input    = document.getElementById('mem-search-input');
      if (!grid) return;
      if (input)  input.value = '';
      if (countEl) countEl.style.display = 'none';

      const filtered = v.memberVideos.filter(item => {
        if (!item.id || item.id.startsWith('REPLACE')) return false;
        if (year === 'all') return true;
        return item.date && item.date.startsWith(year);
      });

      if (!filtered.length) {
        grid.innerHTML = '<div class="ls-no-key"><span style="font-size:2.5rem">📭</span><p>'
          + (year === 'all' ? T('member.emptyAll') : T('member.emptyYear', {year}))
          + '</p></div>';
        return;
      }

      grid.innerHTML = filtered.map(item => {
        const thumb    = item.thumb || ('https://img.youtube.com/vi/' + item.id + '/hqdefault.jpg');
        const ytUrl    = 'https://www.youtube.com/watch?v=' + item.id;
        const safeTitle = esc(item.title || '');
        return `
          <a class="ls-card mem-card" href="${ytUrl}" target="_blank" rel="noopener noreferrer" title="${safeTitle}">
            <div class="ls-thumb-wrap">
              <img class="ls-thumb" src="${thumb}" alt="${safeTitle}" loading="lazy">
              <div class="ls-play-overlay"><div class="ls-play-btn">▶</div></div>
              <div class="ls-duration-badge mem-badge">${T('member.badge')}</div>
            </div>
            <div class="ls-info">
              <div class="ls-title">${safeTitle || T('noTitle')}</div>
              ${item.date ? '<div class="ls-date">' + item.date + '</div>' : ''}
            </div>
          </a>`;
      }).join('');
    }

    // 初始渲染
    renderMemGrid('all');

    // 年份切換
    document.addEventListener('click', e => {
      const btn = e.target.closest('.ls-year-btn[data-memyear]');
      if (!btn) return;
      document.querySelectorAll('.ls-year-btn[data-memyear]').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderMemGrid(btn.dataset.memyear);
    });

    // 搜尋篩選
    function applyMemSearch() {
      const input    = document.getElementById('mem-search-input');
      const countEl  = document.getElementById('mem-search-count');
      const clearBtn = document.getElementById('mem-search-clear');
      if (!input) return;
      const q = input.value.trim().toLowerCase();
      const cards = document.querySelectorAll('#mem-grid .mem-card');
      let shown = 0;
      cards.forEach(card => {
        const title = (card.querySelector('.ls-title')?.textContent || '').toLowerCase();
        const date  = (card.querySelector('.ls-date')?.textContent  || '').toLowerCase();
        const match = !q || title.includes(q) || date.includes(q);
        card.style.display = match ? '' : 'none';
        if (match) shown++;
      });
      if (clearBtn) clearBtn.style.display = q ? 'flex' : 'none';
      if (countEl) {
        if (q && cards.length > 0) {
          countEl.textContent = T('found.videos', {n: shown, total: cards.length});
          countEl.style.display = 'block';
        } else {
          countEl.style.display = 'none';
        }
      }
    }

    document.addEventListener('input', e => {
      if (e.target && e.target.id === 'mem-search-input') applyMemSearch();
    });
    document.addEventListener('click', e => {
      if (e.target && e.target.id === 'mem-search-clear') {
        const input = document.getElementById('mem-search-input');
        if (input) { input.value = ''; input.focus(); }
        applyMemSearch();
      }
    });
  }

  // ── 官方上傳影片（YouTube Data API v3）──────────
  // 從 UU 上傳清單抓取，排除直播存檔（有 liveStreamingDetails.actualStartTime）與 Shorts（duration≤60s）
  let tryLoadOfficialUploads = null;
  if (v.youtubeChannelId) {
    // 清除官方上傳和官方Shorts的快取（Step 2：準備重新分類）
    const yearsToCheck = ['all', '2026', '2025', '2024', '2023', '2022', '2021', '2020'];
    yearsToCheck.forEach(year => {
      sessionStorage.removeItem('mc_ovu_' + v.youtubeChannelId + '_' + year);
      sessionStorage.removeItem('mc_yts_' + v.youtubeChannelId + '_' + year);
    });

    // 清除容器中的所有影片內容
    const ovuContainer = document.getElementById('ovu-container');
    if (ovuContainer) ovuContainer.innerHTML = '';
    const ytsContainer = document.getElementById('yts-container');
    if (ytsContainer) ytsContainer.innerHTML = '';

    const uploadsPlaylistId = 'UU' + v.youtubeChannelId.slice(2);
    let ovuLoading       = false;
    let ovuCurrentYear   = 'all';
    let ovuNextPageToken = null;

    function parseDurationSec(dur) {
      const m = dur.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/);
      if (!m) return 0;
      return (parseInt(m[1]||0)*3600) + (parseInt(m[2]||0)*60) + parseInt(m[3]||0);
    }

    async function fetchUploadsPage(pageToken) {
      let url = 'https://www.googleapis.com/youtube/v3/playlistItems'
        + '?part=snippet'
        + '&playlistId=' + encodeURIComponent(uploadsPlaylistId)
        + '&maxResults=50'
        + '&key=' + encodeURIComponent(v.ytApiKey);
      if (pageToken) url += '&pageToken=' + encodeURIComponent(pageToken);
      const res = await fetch(url, { headers: { 'Referer': 'https://shiukonata.github.io/MCStudio/' } });
      return await res.json();
    }

    async function fetchVideoDetails(videoIds) {
      if (!videoIds.length) return {};
      // liveStreamingDetails：有此欄位 = 曾是直播（存檔），無此欄位 = 一般上傳
      const url = 'https://www.googleapis.com/youtube/v3/videos'
        + '?part=contentDetails,snippet,liveStreamingDetails'
        + '&id=' + videoIds.join(',')
        + '&key=' + encodeURIComponent(v.ytApiKey);
      const res = await fetch(url, { headers: { 'Referer': 'https://shiukonata.github.io/MCStudio/' } });
      const data = await res.json();
      const map = {};
      (data.items || []).forEach(item => {
        map[item.id] = {
          duration:    parseDurationSec(item.contentDetails.duration || 'PT0S'),
          liveContent: item.snippet.liveBroadcastContent || 'none',
          wasLive:     !!(item.liveStreamingDetails && item.liveStreamingDetails.actualStartTime),
        };
      });
      return map;
    }

    function renderOvuCard(container, item, durationSec) {
      const snip     = item.snippet;
      const vid      = snip.resourceId && snip.resourceId.videoId;
      if (!vid) return;
      const thumb    = snip.thumbnails && (snip.thumbnails.high || snip.thumbnails.medium || snip.thumbnails.default);
      const thumbUrl = thumb ? thumb.url : ('https://img.youtube.com/vi/' + vid + '/hqdefault.jpg');
      const date     = snip.publishedAt ? snip.publishedAt.slice(0,10) : '';
      const title    = esc(snip.title || '');
      const mins     = Math.floor(durationSec / 60);
      const secs     = durationSec % 60;
      const durLabel = durationSec > 0 ? `${mins}:${String(secs).padStart(2,'0')}` : '';
      container.innerHTML += `
        <div class="ls-card" onclick="(function(){
          document.getElementById('yt-modal-iframe').src='https://www.youtube.com/embed/${vid}?autoplay=1&rel=0';
          document.getElementById('yt-modal-fallback').href='https://www.youtube.com/watch?v=${vid}';
          document.getElementById('yt-modal-title').textContent='${title}';
          document.getElementById('yt-modal').classList.add('open');
          document.body.style.overflow='hidden';
        })()">
          <div class="ls-thumb-wrap">
            <img class="ls-thumb" src="${thumbUrl}" alt="${title}" loading="lazy">
            <div class="ls-play-overlay"><div class="ls-play-btn">▶</div></div>
            ${durLabel ? `<div class="ls-duration-badge">${durLabel}</div>` : ''}
          </div>
          <div class="ls-info">
            <div class="ls-title">${title || '（無標題）'}</div>
            ${date ? '<div class="ls-date">' + date + '</div>' : ''}
          </div>
        </div>`;
    }

    async function loadOvuYear(year) {
      if (ovuLoading) return;
      ovuLoading = true;
      ovuCurrentYear   = year;
      ovuNextPageToken = null;
      const container = document.getElementById('ovu-container');
      const moreWrap  = document.getElementById('ovu-load-more-wrap');
      const countEl   = document.getElementById('ovu-search-count');
      const input     = document.getElementById('ovu-search-input');
      if (!container) { ovuLoading = false; return; }
      if (input)  input.value = '';
      if (countEl) countEl.style.display = 'none';

      const ovuCacheKey = 'mc_ovu_' + v.youtubeChannelId + '_' + year;
      const ovuCached   = cacheGet(ovuCacheKey);
      if (ovuCached) {
        container.innerHTML  = ovuCached.html;
        ovuNextPageToken = ovuCached.nextPageToken || null;
        if (moreWrap) moreWrap.style.display = ovuNextPageToken ? 'flex' : 'none';
        ovuLoading = false;
        applyOvuSearch();
        return;
      }

      container.innerHTML = `<div class="ls-loading"><div class="ls-spinner"></div><span>${T('loading')}</span></div>`;
      if (moreWrap) moreWrap.style.display = 'none';

      try {
        if (year === 'all') {
          // 只載入第一頁（50筆），之後「載入更多」
          const data = await fetchUploadsPage(null);
          if (data.error) throw new Error(data.error.message);
          container.innerHTML = '';
          const items    = data.items || [];
          const videoIds = items.map(i => i.snippet.resourceId && i.snippet.resourceId.videoId).filter(Boolean);
          const detailMap = await fetchVideoDetails(videoIds);
          let count = 0;
          for (const item of items) {
            const vid = item.snippet.resourceId && item.snippet.resourceId.videoId;
            if (!vid) continue;
            const d = detailMap[vid];
            if (!d) continue;
            if (d.wasLive) continue;                   // 排除直播存檔
            if (d.duration <= 60) continue;            // 排除 Shorts
            renderOvuCard(container, item, d.duration);
            count++;
          }
          if (count === 0) container.innerHTML = `<div class="ls-no-key"><span style="font-size:2.5rem">📭</span><p>${T('noUploads')}</p></div>`;
          ovuNextPageToken = data.nextPageToken || null;
          if (moreWrap) moreWrap.style.display = ovuNextPageToken ? 'flex' : 'none';
          cacheSet(ovuCacheKey, { html: container.innerHTML, nextPageToken: ovuNextPageToken });
        } else {
          // 年份模式：翻頁直到該年份全部抓完
          let pageToken  = null;
          let totalCount = 0;
          let done       = false;
          container.innerHTML = '';
          do {
            const data = await fetchUploadsPage(pageToken);
            if (data.error) throw new Error(data.error.message);
            const items    = data.items || [];
            const videoIds = items.map(i => i.snippet.resourceId && i.snippet.resourceId.videoId).filter(Boolean);
            const detailMap = await fetchVideoDetails(videoIds);
            for (const item of items) {
              const itemYear = item.snippet.publishedAt ? item.snippet.publishedAt.slice(0,4) : '';
              if (itemYear < year) { done = true; break; }
              if (itemYear !== String(year)) continue;
              const vid = item.snippet.resourceId && item.snippet.resourceId.videoId;
              if (!vid) continue;
              const d = detailMap[vid];
              if (!d) continue;
              if (d.wasLive) continue;
              if (d.duration <= 60) continue;
              renderOvuCard(container, item, d.duration);
              totalCount++;
            }
            pageToken = data.nextPageToken || null;
          } while (pageToken && !done);
          if (totalCount === 0) container.innerHTML = `<div class="ls-no-key"><span style="font-size:2.5rem">📭</span><p>${T('noUploads.year', {year})}</p></div>`;
          if (moreWrap) moreWrap.style.display = 'none';
          cacheSet(ovuCacheKey, { html: container.innerHTML, nextPageToken: null });
        }
      } catch (err) {
        container.innerHTML = `<div class="ls-no-key"><span style="font-size:2.5rem">⚠️</span><p>${T('apiError', {msg: err.message})}</p></div>`;
      }
      ovuLoading = false;
      applyOvuSearch();
    }

    tryLoadOfficialUploads = function() { loadOvuYear(ovuCurrentYear); };

    // 「載入更多」（全部模式）
    document.addEventListener('click', e => {
      if (e.target && e.target.id === 'ovu-load-more-btn') {
        if (ovuLoading || !ovuNextPageToken) return;
        ovuLoading = true;
        e.target.disabled = true;
        const container = document.getElementById('ovu-container');
        const moreWrap  = document.getElementById('ovu-load-more-wrap');
        fetchUploadsPage(ovuNextPageToken).then(async data => {
          if (data.error) { ovuLoading = false; return; }
          const items    = data.items || [];
          const videoIds = items.map(i => i.snippet.resourceId && i.snippet.resourceId.videoId).filter(Boolean);
          const detailMap = await fetchVideoDetails(videoIds);
          for (const item of items) {
            const vid = item.snippet.resourceId && item.snippet.resourceId.videoId;
            if (!vid) continue;
            const d = detailMap[vid];
            if (!d) continue;
            if (d.wasLive) continue;
            if (d.duration <= 60) continue;
            renderOvuCard(container, item, d.duration);
          }
          ovuNextPageToken = data.nextPageToken || null;
          if (moreWrap) moreWrap.style.display = ovuNextPageToken ? 'flex' : 'none';
          const btn = document.getElementById('ovu-load-more-btn');
          if (btn) btn.disabled = false;
          ovuLoading = false;
          applyOvuSearch();
        });
      }
    });

    // 年份切換
    document.addEventListener('click', e => {
      const btn = e.target.closest('.ls-year-btn[data-ovuyear]');
      if (!btn) return;
      document.querySelectorAll('.ls-year-btn[data-ovuyear]').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      loadOvuYear(btn.dataset.ovuyear);
    });

    // 搜尋篩選
    function applyOvuSearch() {
      const input    = document.getElementById('ovu-search-input');
      const countEl  = document.getElementById('ovu-search-count');
      const clearBtn = document.getElementById('ovu-search-clear');
      if (!input) return;
      const q = input.value.trim().toLowerCase();
      const cards = document.querySelectorAll('#ovu-container .ls-card');
      let shown = 0;
      cards.forEach(card => {
        const title = (card.querySelector('.ls-title')?.textContent || '').toLowerCase();
        const date  = (card.querySelector('.ls-date')?.textContent  || '').toLowerCase();
        const match = !q || title.includes(q) || date.includes(q);
        card.style.display = match ? '' : 'none';
        if (match) shown++;
      });
      if (clearBtn) clearBtn.style.display = q ? 'flex' : 'none';
      if (countEl) {
        if (q && cards.length > 0) {
          countEl.textContent = T('found.videos', {n: shown, total: cards.length});
          countEl.style.display = 'block';
        } else {
          countEl.style.display = 'none';
        }
      }
    }
    document.addEventListener('input', e => { if (e.target.id === 'ovu-search-input') applyOvuSearch(); });
    document.addEventListener('click', e => { if (e.target.id === 'ovu-search-clear') { document.getElementById('ovu-search-input').value = ''; applyOvuSearch(); } });

    // 大分類切換（官方上傳影片 ↔ 官方Shorts ↔ 廣告 ↔ 未分類）
    document.addEventListener('click', e => {
      const btn = e.target.closest('.ov-section-btn');
      if (!btn) return;
      const section = btn.dataset.ovsection;
      document.querySelectorAll('.ov-section-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const uploadsEl = document.getElementById('ov-uploads-section');
      const shortsEl  = document.getElementById('ov-shorts-section');
      const adsEl     = document.getElementById('ov-ads-section');
      const unclassifiedEl = document.getElementById('ov-unclassified-section');
      if (uploadsEl) uploadsEl.style.display = section === 'uploads' ? '' : 'none';
      if (shortsEl)  shortsEl.style.display  = section === 'shorts'  ? '' : 'none';
      if (adsEl)     adsEl.style.display     = section === 'ads'     ? '' : 'none';
      if (unclassifiedEl) unclassifiedEl.style.display = section === 'unclassified' ? '' : 'none';

      // Shorts：首次切換時才觸發載入
      if (section === 'shorts' && tryLoadYtShorts && !window._ytsLoaded) {
        window._ytsLoaded = true;
        tryLoadYtShorts();
      }

      // 未分類：首次切換時才觸發 Step 1 載入
      if (section === 'unclassified' && tryLoadUnclassifiedStep1 && !window._unclassifiedLoaded) {
        window._unclassifiedLoaded = true;
        tryLoadUnclassifiedStep1();
      }
    });
  }

  // ── 原創曲&Cover 自動分類（YouTube Data API v3 + 排除法）───
  // 功能：自動抓取頻道全部上傳，排除直播存檔 & Shorts，用 keywords 分類
  let tryLoadCoverOriginal = null;
  if (v.youtubeChannelId) {
    // 清除原創曲&Cover的快取（Step 2：準備重新分類）
    sessionStorage.removeItem('mc_co_' + v.youtubeChannelId);
    // 清空頁面上的容器
    const videoGridContainer = document.getElementById('video-grid');
    if (videoGridContainer) {
      videoGridContainer.innerHTML = '';
    }

    const coLoading = { inProgress: false };
    const uploadsPlaylistId_CO = 'UU' + v.youtubeChannelId.slice(2);

    async function fetchCoPage(pageToken) {
      let url = 'https://www.googleapis.com/youtube/v3/playlistItems'
        + '?part=snippet'
        + '&playlistId=' + encodeURIComponent(uploadsPlaylistId_CO)
        + '&maxResults=50'
        + '&key=' + encodeURIComponent(v.ytApiKey);
      if (pageToken) url += '&pageToken=' + encodeURIComponent(pageToken);
      const res = await fetch(url, { headers: { 'Referer': 'https://shiukonata.github.io/MCStudio/' } });
      return await res.json();
    }

    function parseDurationSecCO(dur) {
      const m = dur.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/);
      if (!m) return 0;
      return (parseInt(m[1]||0)*3600) + (parseInt(m[2]||0)*60) + parseInt(m[3]||0);
    }

    async function fetchVideoDetailsCO(videoIds) {
      if (!videoIds.length) return {};
      const url = 'https://www.googleapis.com/youtube/v3/videos'
        + '?part=contentDetails,snippet,liveStreamingDetails'
        + '&id=' + videoIds.join(',')
        + '&key=' + encodeURIComponent(v.ytApiKey);
      const res = await fetch(url, { headers: { 'Referer': 'https://shiukonata.github.io/MCStudio/' } });
      const data = await res.json();
      const map = {};
      (data.items || []).forEach(item => {
        map[item.id] = {
          duration:    parseDurationSecCO(item.contentDetails.duration || 'PT0S'),
          wasLive:     !!(item.liveStreamingDetails && item.liveStreamingDetails.actualStartTime),
        };
      });
      return map;
    }

    function renderCoCard(container, item, videoType) {
      const snip     = item.snippet;
      const vid      = snip.resourceId && snip.resourceId.videoId;
      if (!vid) return;
      const thumb    = snip.thumbnails && (snip.thumbnails.high || snip.thumbnails.medium || snip.thumbnails.default);
      const thumbUrl = thumb ? thumb.url : ('https://img.youtube.com/vi/' + vid + '/hqdefault.jpg');
      const date     = snip.publishedAt ? snip.publishedAt.slice(0,10) : '';
      const originalTitle = snip.title || '';
      // 加上分類前綴
      let displayTitle = originalTitle;
      let badgeHTML = '';
      if (videoType === 'cover') {
        displayTitle = `【Cover】${originalTitle}`;
      } else if (videoType === 'original') {
        displayTitle = `【原創】${originalTitle}`;
      } else if (videoType === 'unclassified') {
        badgeHTML = '<div class="ls-unclassified-badge">❓ 未分類</div>';
      }
      const title    = esc(displayTitle);
      const cardStyle = videoType === 'unclassified' ? 'opacity:0.85;border:2px dashed rgba(255,255,255,0.3);' : '';
      container.innerHTML += `
        <div class="ls-card" data-video-type="${videoType}" style="${cardStyle}" onclick="(function(){
          document.getElementById('yt-modal-iframe').src='https://www.youtube.com/embed/${vid}?autoplay=1&rel=0';
          document.getElementById('yt-modal-fallback').href='https://www.youtube.com/watch?v=${vid}';
          document.getElementById('yt-modal-title').textContent='${title}';
          document.getElementById('yt-modal').classList.add('open');
          document.body.style.overflow='hidden';
        })()">
          <div class="ls-thumb-wrap">
            <img class="ls-thumb" src="${thumbUrl}" alt="${title}" loading="lazy">
            <div class="ls-play-overlay"><div class="ls-play-btn">▶</div></div>
            ${badgeHTML}
          </div>
          <div class="ls-info">
            <div class="ls-title">${title || '（無標題）'}</div>
            ${date ? '<div class="ls-date">' + date + '</div>' : ''}
          </div>
        </div>`;
    }

    async function loadCoverOriginal() {
      // Step 1 期間：禁用原創曲&Cover的所有功能
      // 所有視頻應該只在「官方剪輯」底下的「未分類區」顯示
      const container = document.getElementById('video-grid');
      if (container) container.innerHTML = '';
      return;

      // 以下代碼在 Step 2 前暫時禁用
      if (coLoading.inProgress) return;
      coLoading.inProgress = true;
      if (!container) { coLoading.inProgress = false; return; }

      container.innerHTML = `<div class="ls-loading"><div class="ls-spinner"></div><span>${T('loading')}</span></div>`;

      try {
        const coCacheKey = 'mc_co_' + v.youtubeChannelId;
        const coCached = cacheGet(coCacheKey);
        if (coCached) {
          container.innerHTML = coCached.html;
          coLoading.inProgress = false;
          return;
        }

        container.innerHTML = '';
        let pageToken = null;
        let allVideos = [];
        let unclassified = [];

        // 翻頁抓取所有上傳（不設上限，讓它跑到沒有分頁為止）
        do {
          const data = await fetchCoPage(pageToken);
          if (data.error) {
            console.error('CO API Error:', data.error.message);
            throw new Error(data.error.message);
          }

          const items = data.items || [];
          const videoIds = items.map(i => i.snippet.resourceId && i.snippet.resourceId.videoId).filter(Boolean);
          if (videoIds.length === 0) break;

          const detailMap = await fetchVideoDetailsCO(videoIds);
          for (const item of items) {
            const vid = item.snippet.resourceId && item.snippet.resourceId.videoId;
            if (!vid) continue;
            const d = detailMap[vid];
            if (!d) continue;
            // 排除：直播存檔 & Shorts
            if (d.wasLive) continue;
            if (d.duration <= 60) continue;
            allVideos.push({ item, title: item.snippet.title, date: item.snippet.publishedAt?.slice(0,10) || '' });
          }

          pageToken = data.nextPageToken || null;
          if (!pageToken) break;
        } while (true);

        // 分類邏輯：標題含 "cover" 或 "official"（不分大小寫）
        const coverKeywords = ['cover'];
        const officialKeywords = ['official'];

        let coverCount = 0, originalCount = 0, unclassifiedCount = 0;

        for (const item of allVideos) {
          const titleLower = item.title.toLowerCase();
          const isCover = coverKeywords.some(kw => titleLower.includes(kw));
          const isOfficial = officialKeywords.some(kw => titleLower.includes(kw));

          if (isCover) {
            renderCoCard(container, item.item, 'cover');
            coverCount++;
          } else if (isOfficial) {
            renderCoCard(container, item.item, 'original');
            originalCount++;
          } else {
            // 未分類的影片也渲染，但用特殊標記
            renderCoCard(container, item.item, 'unclassified');
            unclassifiedCount++;
            unclassified.push(item);
          }
        }

        // 如果沒有任何影片，顯示提示
        if (coverCount === 0 && originalCount === 0 && unclassifiedCount === 0) {
          container.innerHTML = `<div class="ls-no-key"><span style="font-size:2.5rem">📭</span><p>${T('noUploads')}</p></div>`;
        }

        // 快取結果
        cacheSet(coCacheKey, { html: container.innerHTML });

        // 更新未分類按鈕的顯示狀態
        const unclassifiedBtn = document.querySelector('.ls-year-btn[data-vfilter="unclassified"]');
        if (unclassifiedBtn) {
          if (unclassifiedCount > 0) {
            unclassifiedBtn.style.display = '';
            unclassifiedBtn.textContent = `❓ 未分類 (${unclassifiedCount})`;
          } else {
            unclassifiedBtn.style.display = 'none';
          }
        }

        // 將未分類影片輸出到 console（供參考）
        if (unclassified.length > 0) {
          console.group(`🎵 ${v.name} 未分類影片（共 ${unclassified.length} 部）`);
          console.log('請在網頁上點擊「未分類」標籤查看，或根據以下列表判斷：');
          unclassified.forEach((vitem, idx) => {
            console.log(`${idx + 1}. [${vitem.date}] ${vitem.title}`);
          });
          console.groupEnd();
        }

        coLoading.inProgress = false;
      } catch (err) {
        container.innerHTML = `<div class="ls-no-key"><span style="font-size:2.5rem">⚠️</span><p>${T('apiError', {msg: err.message})}</p></div>`;
        coLoading.inProgress = false;
      }
    }

    tryLoadCoverOriginal = function() { loadCoverOriginal(); };
  }

  // ── Shorts 存檔（YouTube Data API v3）───────────
  let tryLoadYtShorts = null;
  if (v.youtubeChannelId) {
    let ytsLoading       = false;
    let ytsCurrentYear   = 'all';
    let ytsNextPageToken = null;

    // Shorts 專屬播放清單 ID：UUSH + channelId 去掉前兩字 UC
    const shortsPlaylistId = 'UUSH' + v.youtubeChannelId.slice(2);

    function renderYtsCard(container, item) {
      const snip     = item.snippet;
      const vid      = snip.resourceId && snip.resourceId.videoId;
      if (!vid) return;
      const thumb    = snip.thumbnails && (snip.thumbnails.high || snip.thumbnails.medium || snip.thumbnails.default);
      const thumbUrl = thumb ? thumb.url : ('https://img.youtube.com/vi/' + vid + '/hqdefault.jpg');
      const date     = snip.publishedAt ? snip.publishedAt.slice(0,10) : '';
      const title    = esc(snip.title || '');
      container.innerHTML += `
        <div class="ls-card" onclick="(function(){
          document.getElementById('yt-modal-iframe').src='https://www.youtube.com/embed/${vid}?autoplay=1&rel=0';
          document.getElementById('yt-modal-fallback').href='https://www.youtube.com/watch?v=${vid}';
          document.getElementById('yt-modal-title').textContent='${title}';
          document.getElementById('yt-modal').classList.add('open');
          document.body.style.overflow='hidden';
        })()">
          <div class="ls-thumb-wrap">
            <img class="ls-thumb" src="${thumbUrl}" alt="${title}" loading="lazy">
            <div class="ls-play-overlay"><div class="ls-play-btn">▶</div></div>
            <div class="ls-duration-badge" style="background:rgba(255,111,0,0.9)">Shorts</div>
          </div>
          <div class="ls-info">
            <div class="ls-title">${title || '（無標題）'}</div>
            ${date ? '<div class="ls-date">' + date + '</div>' : ''}
          </div>
        </div>`;
    }

    async function fetchYtsPage(pageToken) {
      let url = 'https://www.googleapis.com/youtube/v3/playlistItems'
        + '?part=snippet'
        + '&playlistId=' + encodeURIComponent(shortsPlaylistId)
        + '&maxResults=50'
        + '&key=' + encodeURIComponent(v.ytApiKey);
      if (pageToken) url += '&pageToken=' + encodeURIComponent(pageToken);
      const res = await fetch(url);
      return await res.json();
    }

    async function loadYtsYear(year) {
      if (ytsLoading) return;
      ytsLoading = true;
      ytsCurrentYear   = year;
      ytsNextPageToken = null;

      const container = document.getElementById('yts-container');
      const moreWrap  = document.getElementById('yts-load-more-wrap');
      const countEl   = document.getElementById('yts-search-count');
      const input     = document.getElementById('yts-search-input');
      if (!container) { ytsLoading = false; return; }
      if (input)  input.value = '';
      if (countEl) countEl.style.display = 'none';

      // ── 讀快取 ──────────────────────────────────
      const ytsCacheKey = 'mc_yts_' + v.youtubeChannelId + '_' + year;
      const ytsCached   = cacheGet(ytsCacheKey);
      if (ytsCached) {
        container.innerHTML = ytsCached.html;
        ytsNextPageToken = ytsCached.nextPageToken || null;
        if (moreWrap) moreWrap.style.display = ytsNextPageToken ? 'flex' : 'none';
        ytsLoading = false;
        applyYtsSearch();
        return;
      }

      container.innerHTML = `<div class="ls-loading"><div class="ls-spinner"></div><span>${T('loading')}</span></div>`;
      if (moreWrap) moreWrap.style.display = 'none';

      try {
        if (year === 'all') {
          const data = await fetchYtsPage(null);
          if (data.error) throw new Error(data.error.message);
          container.innerHTML = '';
          const items = data.items || [];
          if (!items.length) {
            container.innerHTML = `<div class="ls-no-key"><span style="font-size:2.5rem">📭</span><p>${T('noShorts')}</p></div>`;
          } else {
            items.forEach(item => renderYtsCard(container, item));
          }
          ytsNextPageToken = data.nextPageToken || null;
          if (moreWrap) moreWrap.style.display = ytsNextPageToken ? 'flex' : 'none';
          cacheSet(ytsCacheKey, { html: container.innerHTML, nextPageToken: ytsNextPageToken });
        } else {
          let pageToken  = null;
          let totalCount = 0;
          let done       = false;
          container.innerHTML = '';
          do {
            const data = await fetchYtsPage(pageToken);
            if (data.error) throw new Error(data.error.message);
            for (const item of (data.items || [])) {
              const itemYear = item.snippet.publishedAt ? item.snippet.publishedAt.slice(0,4) : '';
              if (itemYear < year) { done = true; break; }
              if (itemYear === year) { renderYtsCard(container, item); totalCount++; }
            }
            pageToken = data.nextPageToken || null;
          } while (pageToken && !done);
          if (totalCount === 0) {
            container.innerHTML = `<div class="ls-no-key"><span style="font-size:2.5rem">📭</span><p>${T('noShorts.year', {year})}</p></div>`;
          }
          if (moreWrap) moreWrap.style.display = 'none';
          cacheSet(ytsCacheKey, { html: container.innerHTML, nextPageToken: null });
        }
      } catch (err) {
        container.innerHTML = `<div class="ls-no-key"><span style="font-size:2.5rem">⚠️</span><p>${T('apiError', {msg: err.message})}</p></div>`;
      }
      ytsLoading = false;
      applyYtsSearch();
    }

    tryLoadYtShorts = function() { loadYtsYear(ytsCurrentYear); };

    // 「載入更多」（全部模式）
    document.addEventListener('click', e => {
      if (e.target && e.target.id === 'yts-load-more-btn') {
        if (ytsLoading || !ytsNextPageToken) return;
        ytsLoading = true;
        e.target.disabled = true;
        const container = document.getElementById('yts-container');
        const moreWrap  = document.getElementById('yts-load-more-wrap');
        fetchYtsPage(ytsNextPageToken).then(data => {
          if (data.error) { ytsLoading = false; return; }
          (data.items || []).forEach(item => renderYtsCard(container, item));
          ytsNextPageToken = data.nextPageToken || null;
          if (moreWrap) moreWrap.style.display = ytsNextPageToken ? 'flex' : 'none';
          const btn = document.getElementById('yts-load-more-btn');
          if (btn) btn.disabled = false;
          ytsLoading = false;
          applyYtsSearch();
        });
      }
    });

    // 年份切換
    document.addEventListener('click', e => {
      const btn = e.target.closest('.ls-year-btn[data-ytsyear]');
      if (!btn) return;
      document.querySelectorAll('.ls-year-btn[data-ytsyear]').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      loadYtsYear(btn.dataset.ytsyear);
    });

    // 搜尋篩選
    function applyYtsSearch() {
      const input    = document.getElementById('yts-search-input');
      const countEl  = document.getElementById('yts-search-count');
      const clearBtn = document.getElementById('yts-search-clear');
      if (!input) return;
      const q = input.value.trim().toLowerCase();
      const cards = document.querySelectorAll('#yts-container .ls-card');
      let shown = 0;
      cards.forEach(card => {
        const title = (card.querySelector('.ls-title')?.textContent || '').toLowerCase();
        const date  = (card.querySelector('.ls-date')?.textContent  || '').toLowerCase();
        const match = !q || title.includes(q) || date.includes(q);
        card.style.display = match ? '' : 'none';
        if (match) shown++;
      });
      if (clearBtn) clearBtn.style.display = q ? 'flex' : 'none';
      if (countEl) {
        if (q && cards.length > 0) {
          countEl.textContent = T('found.videos', {n: shown, total: cards.length});
          countEl.style.display = 'block';
        } else {
          countEl.style.display = 'none';
        }
      }
    }

    document.addEventListener('input', e => {
      if (e.target && e.target.id === 'yts-search-input') applyYtsSearch();
    });
    document.addEventListener('click', e => {
      if (e.target && e.target.id === 'yts-search-clear') {
        const input = document.getElementById('yts-search-input');
        if (input) { input.value = ''; input.focus(); }
        applyYtsSearch();
      }
    });
  }

  // ── Step 1: 未分類區 - YouTube API 抓取全部影片（排除直播存檔）──
  let tryLoadUnclassifiedStep1 = null;
  if (v.youtubeChannelId) {
    const uploadsPlaylistId_Step1 = 'UU' + v.youtubeChannelId.slice(2);
    let unclassifiedLoading = false;

    function parseDurationSec_Step1(dur) {
      const m = dur.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/);
      if (!m) return 0;
      return (parseInt(m[1]||0)*3600) + (parseInt(m[2]||0)*60) + parseInt(m[3]||0);
    }

    async function fetchStep1Page(pageToken) {
      let url = 'https://www.googleapis.com/youtube/v3/playlistItems'
        + '?part=snippet'
        + '&playlistId=' + encodeURIComponent(uploadsPlaylistId_Step1)
        + '&maxResults=50'
        + '&key=' + encodeURIComponent(v.ytApiKey);
      if (pageToken) url += '&pageToken=' + encodeURIComponent(pageToken);
      const res = await fetch(url, { headers: { 'Referer': 'https://shiukonata.github.io/MCStudio/' } });
      return await res.json();
    }

    async function fetchVideoDetailsStep1(videoIds) {
      if (!videoIds.length) return {};
      const url = 'https://www.googleapis.com/youtube/v3/videos'
        + '?part=contentDetails,snippet,liveStreamingDetails'
        + '&id=' + videoIds.join(',')
        + '&key=' + encodeURIComponent(v.ytApiKey);
      const res = await fetch(url, { headers: { 'Referer': 'https://shiukonata.github.io/MCStudio/' } });
      const data = await res.json();
      const map = {};
      (data.items || []).forEach(item => {
        map[item.id] = {
          duration:    parseDurationSec_Step1(item.contentDetails.duration || 'PT0S'),
          wasLive:     !!(item.liveStreamingDetails && item.liveStreamingDetails.actualStartTime),
        };
      });
      return map;
    }

    function renderUnclassifiedCard(container, item, durationSec) {
      const snip     = item.snippet;
      const vid      = snip.resourceId && snip.resourceId.videoId;
      if (!vid) return;
      const thumb    = snip.thumbnails && (snip.thumbnails.high || snip.thumbnails.medium || snip.thumbnails.default);
      const thumbUrl = thumb ? thumb.url : ('https://img.youtube.com/vi/' + vid + '/hqdefault.jpg');
      const date     = snip.publishedAt ? snip.publishedAt.slice(0,10) : '';
      const title    = esc(snip.title || '');
      const mins     = Math.floor(durationSec / 60);
      const secs     = durationSec % 60;
      const durLabel = durationSec > 0 ? `${mins}:${String(secs).padStart(2,'0')}` : '';
      container.innerHTML += `
        <div class="ls-card" onclick="(function(){
          document.getElementById('yt-modal-iframe').src='https://www.youtube.com/embed/${vid}?autoplay=1&rel=0';
          document.getElementById('yt-modal-fallback').href='https://www.youtube.com/watch?v=${vid}';
          document.getElementById('yt-modal-title').textContent='${title}';
          document.getElementById('yt-modal').classList.add('open');
          document.body.style.overflow='hidden';
        })()">
          <div class="ls-thumb-wrap">
            <img class="ls-thumb" src="${thumbUrl}" alt="${title}" loading="lazy">
            <div class="ls-play-overlay"><div class="ls-play-btn">▶</div></div>
            ${durLabel ? `<div class="ls-duration-badge">${durLabel}</div>` : ''}
            <div class="ls-unclassified-badge">❓ 未分類</div>
          </div>
          <div class="ls-info">
            <div class="ls-title">${title || '（無標題）'}</div>
            ${date ? '<div class="ls-date">' + date + '</div>' : ''}
          </div>
        </div>`;
    }

    async function loadUnclassifiedStep1() {
      if (unclassifiedLoading) return;
      unclassifiedLoading = true;

      const container = document.getElementById('ov-unclassified-container');
      if (!container) { unclassifiedLoading = false; return; }

      container.innerHTML = `<div class="ls-loading"><div class="ls-spinner"></div><span>${T('loading')}</span></div>`;

      try {
        let pageToken = null;
        let allVideos = [];

        // 翻頁抓取所有上傳
        do {
          const data = await fetchStep1Page(pageToken);
          if (data.error) throw new Error(data.error.message);

          const items = data.items || [];
          const videoIds = items.map(i => i.snippet.resourceId && i.snippet.resourceId.videoId).filter(Boolean);
          if (videoIds.length === 0) break;

          const detailMap = await fetchVideoDetailsStep1(videoIds);
          for (const item of items) {
            const vid = item.snippet.resourceId && item.snippet.resourceId.videoId;
            if (!vid) continue;
            const d = detailMap[vid];
            if (!d) continue;
            // 排除：直播存檔（但保留 Shorts）
            if (d.wasLive) continue;
            allVideos.push({ item, duration: d.duration });
          }

          pageToken = data.nextPageToken || null;
          if (!pageToken) break;
        } while (true);

        // 排序（日期新→舊）
        allVideos.sort((a, b) => {
          const dateA = a.item.snippet.publishedAt || '';
          const dateB = b.item.snippet.publishedAt || '';
          return dateB.localeCompare(dateA);
        });

        // 渲染所有影片到未分類區
        container.innerHTML = '';
        if (allVideos.length === 0) {
          container.innerHTML = `<div class="ls-no-key"><span style="font-size:2.5rem">📭</span><p>${T('noUploads')}</p></div>`;
        } else {
          allVideos.forEach(({ item, duration }) => {
            renderUnclassifiedCard(container, item, duration);
          });
          console.log(`📝 Step 1 完成：已加載 ${allVideos.length} 部未分類影片到未分類區`);
        }
      } catch (err) {
        container.innerHTML = `<div class="ls-no-key"><span style="font-size:2.5rem">⚠️</span><p>${T('apiError', {msg: err.message})}</p></div>`;
        console.error('Step 1 加載失敗:', err);
      }

      unclassifiedLoading = false;
    }

    tryLoadUnclassifiedStep1 = function() { loadUnclassifiedStep1(); };
  }

  // ── 共用快取工具（sessionStorage，30 分鐘過期）──
  const CACHE_TTL = 30 * 60 * 1000;
  function cacheGet(key) {
    try {
      const raw = sessionStorage.getItem(key);
      if (!raw) return null;
      const obj = JSON.parse(raw);
      if (Date.now() - obj.ts > CACHE_TTL) { sessionStorage.removeItem(key); return null; }
      return obj;
    } catch(e) { return null; }
  }
  function cacheSet(key, data) {
    try { sessionStorage.setItem(key, JSON.stringify({ ...data, ts: Date.now() })); } catch(e) {}
  }

  // ── 直播存檔（playlistItems API，1 單位/次）──────
  let tryLoadLiveStreams = null;
  if (v.youtubeChannelId) {
    let lsLoading       = false;
    let lsCurrentYear   = 'all';
    let lsNextPageToken = null;

    // 直播專屬播放清單：UULV + channelId 去掉 UC
    const lsPlaylistId = 'UULV' + v.youtubeChannelId.slice(2);

    function renderLsCard(container, item) {
      const snip = item.snippet;
      const vid  = snip.resourceId && snip.resourceId.videoId;
      if (!vid) return;
      const thumb    = snip.thumbnails && (snip.thumbnails.high || snip.thumbnails.medium || snip.thumbnails.default);
      const thumbUrl = thumb ? thumb.url : ('https://img.youtube.com/vi/' + vid + '/hqdefault.jpg');
      const date     = snip.publishedAt ? snip.publishedAt.slice(0,10) : '';
      const title    = esc(snip.title || '');
      container.innerHTML += `
        <div class="ls-card" onclick="(function(){
          document.getElementById('yt-modal-iframe').src='https://www.youtube.com/embed/${vid}?autoplay=1&rel=0';
          document.getElementById('yt-modal-fallback').href='https://www.youtube.com/watch?v=${vid}';
          document.getElementById('yt-modal-title').textContent='${title}';
          document.getElementById('yt-modal').classList.add('open');
          document.body.style.overflow='hidden';
        })()">
          <div class="ls-thumb-wrap">
            <img class="ls-thumb" src="${thumbUrl}" alt="${title}" loading="lazy">
            <div class="ls-play-overlay"><div class="ls-play-btn">▶</div></div>
            <div class="ls-duration-badge">${T('ls.replayBadge')}</div>
          </div>
          <div class="ls-info">
            <div class="ls-title">${title || '（無標題）'}</div>
            ${date ? '<div class="ls-date">' + date + '</div>' : ''}
          </div>
        </div>`;
    }

    async function fetchLsPage(pageToken) {
      let url = 'https://www.googleapis.com/youtube/v3/playlistItems'
        + '?part=snippet'
        + '&playlistId=' + encodeURIComponent(lsPlaylistId)
        + '&maxResults=50'
        + '&key=' + encodeURIComponent(v.ytApiKey);
      if (pageToken) url += '&pageToken=' + encodeURIComponent(pageToken);
      const res = await fetch(url);
      return await res.json();
    }

    async function loadYear(year) {
      if (lsLoading) return;
      lsLoading = true;
      lsCurrentYear   = year;
      lsNextPageToken = null;

      const container = document.getElementById('livestreams-container');
      const moreWrap  = document.getElementById('ls-load-more-wrap');
      const countEl   = document.getElementById('ls-search-count');
      const input     = document.getElementById('ls-search-input');
      if (!container) { lsLoading = false; return; }
      if (input)  input.value = '';
      if (countEl) countEl.style.display = 'none';

      if (!v.ytApiKey) {
        container.innerHTML = `<div class="ls-no-key"><span style="font-size:2.5rem">🔑</span><p>${T('noApiKey')}</p></div>`;
        lsLoading = false;
        return;
      }

      // ── 讀快取 ──────────────────────────────────
      const cacheKey = 'mc_ls_' + v.youtubeChannelId + '_' + year;
      const cached   = cacheGet(cacheKey);
      if (cached) {
        container.innerHTML = cached.html;
        lsNextPageToken = cached.nextPageToken || null;
        if (moreWrap) moreWrap.style.display = lsNextPageToken ? 'flex' : 'none';
        lsLoading = false;
        applyLsSearch();
        return;
      }

      container.innerHTML = `<div class="ls-loading"><div class="ls-spinner"></div><span>${T('loading')}</span></div>`;
      if (moreWrap) moreWrap.style.display = 'none';

      try {
        if (year === 'all') {
          const data = await fetchLsPage(null);
          if (data.error) throw new Error(data.error.message);
          container.innerHTML = '';
          const items = data.items || [];
          if (!items.length) {
            container.innerHTML = `<div class="ls-no-key"><span style="font-size:2.5rem">📭</span><p>${T('noStreams')}</p></div>`;
          } else {
            items.forEach(item => renderLsCard(container, item));
          }
          lsNextPageToken = data.nextPageToken || null;
          if (moreWrap) moreWrap.style.display = lsNextPageToken ? 'flex' : 'none';
          cacheSet(cacheKey, { html: container.innerHTML, nextPageToken: lsNextPageToken });
        } else {
          let pageToken  = null;
          let totalCount = 0;
          let done       = false;
          container.innerHTML = '';
          do {
            const data = await fetchLsPage(pageToken);
            if (data.error) throw new Error(data.error.message);
            for (const item of (data.items || [])) {
              const itemYear = item.snippet.publishedAt ? item.snippet.publishedAt.slice(0,4) : '';
              if (itemYear < year) { done = true; break; }
              if (itemYear === year) { renderLsCard(container, item); totalCount++; }
            }
            pageToken = data.nextPageToken || null;
          } while (pageToken && !done);
          if (totalCount === 0) {
            container.innerHTML = `<div class="ls-no-key"><span style="font-size:2.5rem">📭</span><p>${T('noStreams.year', {year})}</p></div>`;
          }
          if (moreWrap) moreWrap.style.display = 'none';
          cacheSet(cacheKey, { html: container.innerHTML, nextPageToken: null });
        }
      } catch (err) {
        container.innerHTML = `<div class="ls-no-key"><span style="font-size:2.5rem">⚠️</span><p>${T('apiError', {msg: err.message})}</p></div>`;
      }
      lsLoading = false;
      applyLsSearch();
    }

    tryLoadLiveStreams = function() { loadYear(lsCurrentYear); };

    document.addEventListener('click', e => {
      if (e.target && e.target.id === 'ls-load-more-btn') {
        if (lsLoading || !lsNextPageToken) return;
        lsLoading = true;
        e.target.disabled = true;
        const container = document.getElementById('livestreams-container');
        const moreWrap  = document.getElementById('ls-load-more-wrap');
        fetchLsPage(lsNextPageToken).then(data => {
          if (data.error) { lsLoading = false; return; }
          (data.items || []).forEach(item => renderLsCard(container, item));
          lsNextPageToken = data.nextPageToken || null;
          if (moreWrap) moreWrap.style.display = lsNextPageToken ? 'flex' : 'none';
          const btn = document.getElementById('ls-load-more-btn');
          if (btn) btn.disabled = false;
          lsLoading = false;
          applyLsSearch();
        });
      }
    });

    document.addEventListener('click', e => {
      const btn = e.target.closest('.ls-year-btn[data-year]');
      if (!btn) return;
      document.querySelectorAll('.ls-year-btn[data-year]').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      loadYear(btn.dataset.year);
    });

    function applyLsSearch() {
      const input    = document.getElementById('ls-search-input');
      const countEl  = document.getElementById('ls-search-count');
      const clearBtn = document.getElementById('ls-search-clear');
      if (!input) return;
      const q = input.value.trim().toLowerCase();
      const cards = document.querySelectorAll('#livestreams-container .ls-card');
      let shown = 0;
      cards.forEach(card => {
        const title = (card.querySelector('.ls-title')?.textContent || '').toLowerCase();
        const date  = (card.querySelector('.ls-date')?.textContent  || '').toLowerCase();
        const match = !q || title.includes(q) || date.includes(q);
        card.style.display = match ? '' : 'none';
        if (match) shown++;
      });
      if (clearBtn) clearBtn.style.display = q ? 'flex' : 'none';
      if (countEl) {
        if (q && cards.length > 0) {
          countEl.textContent = T('found.streams', {n: shown, total: cards.length});
          countEl.style.display = 'block';
        } else {
          countEl.style.display = 'none';
        }
      }
    }

    document.addEventListener('input', e => {
      if (e.target && e.target.id === 'ls-search-input') applyLsSearch();
    });
    document.addEventListener('click', e => {
      if (e.target && e.target.id === 'ls-search-clear') {
        const input = document.getElementById('ls-search-input');
        if (input) { input.value = ''; input.focus(); }
        applyLsSearch();
      }
    });
  }

  // ── 分頁切換邏輯 ──────────────────────────────
  const vtabBtns  = document.querySelectorAll('.vtab-btn');
  const tabPanels = document.querySelectorAll('.tab-panel');

  // 切換分頁，同步更新上一位/下一位的連結（保留分頁狀態）
  function activateTab(key) {
    vtabBtns.forEach(b => b.classList.remove('active'));
    tabPanels.forEach(p => p.classList.remove('active'));

    const targetBtn   = document.querySelector(`.vtab-btn[data-tab="${key}"]`);
    const targetPanel = document.getElementById('tab-' + key);
    if (targetBtn)   targetBtn.classList.add('active');
    if (targetPanel) targetPanel.classList.add('active');

    // 更新上/下一位連結，帶入目前分頁
    const prevLink = document.querySelector('.sidebar-nav-prev');
    const nextLink = document.querySelector('.sidebar-nav-next');
    if (prevLink) prevLink.href = `vtuber.html?id=${prev.id}&tab=${key}`;
    if (nextLink) nextLink.href = `vtuber.html?id=${next.id}&tab=${key}`;

    // 原創曲&Cover：首次進入分頁時才開始載入
    if (key === 'videos' && tryLoadCoverOriginal && !window._coLoaded) {
      window._coLoaded = true;
      tryLoadCoverOriginal();
    }
    // 直播存檔：首次進入分頁時才開始載入
    if (key === 'livestreams' && tryLoadLiveStreams && !window._lsLoaded) {
      window._lsLoaded = true;
      tryLoadLiveStreams(false);
    }
    // 官方剪輯：首次進入分頁時載入「官方上傳影片」（預設section）
    if (key === 'officialvideos' && tryLoadOfficialUploads && !window._ovuLoaded) {
      window._ovuLoaded = true;
      tryLoadOfficialUploads();
    }
    // 歌曲統計：首次進入分頁時才開始載入
    if (key === 'songstats' && window._loadSongStats && !window._ssLoaded) {
      window._ssLoaded = true;
      window._loadSongStats();
    }
    // 剪輯頻道：首次進入 clips 分頁時才開始載入
    if (key === 'clips') {
      if (window._loadMusicClipsChannel && !window._mcClipsLoaded) {
        window._mcClipsLoaded = true;
        window._loadMusicClipsChannel();
      }
      if (window._loadVideoClipsChannel && !window._vcClipsLoaded) {
        window._vcClipsLoaded = true;
        window._loadVideoClipsChannel();
      }
    }
  }

  // ── 出道計時器 ────────────────────────────────
  if (v.debut) {
    const [yr, mo, dy] = v.debut.split('-').map(Number);
    const debutDate = new Date(yr, mo - 1, dy, 0, 0, 0);

    function updateDebutCounter() {
      const diff = Date.now() - debutDate.getTime();
      if (diff < 0) return;
      const totalSec = Math.floor(diff / 1000);
      const days    = Math.floor(totalSec / 86400);
      const hours   = Math.floor((totalSec % 86400) / 3600);
      const minutes = Math.floor((totalSec % 3600) / 60);
      const seconds = totalSec % 60;
      const pad = n => String(n).padStart(2, '0');
      const dEl = document.getElementById('debut-days');
      const hEl = document.getElementById('debut-hours');
      const mEl = document.getElementById('debut-minutes');
      const sEl = document.getElementById('debut-seconds');
      if (dEl) dEl.textContent = days;
      if (hEl) hEl.textContent = pad(hours);
      if (mEl) mEl.textContent = pad(minutes);
      if (sEl) sEl.textContent = pad(seconds);
    }
    updateDebutCounter();
    setInterval(updateDebutCounter, 1000);
  }

  // 讀取網址中的 tab 參數，預設為 profile
  const initTab = params.get('tab') || 'profile';
  activateTab(initTab);

  vtabBtns.forEach(btn => {
    btn.addEventListener('click', () => activateTab(btn.dataset.tab));
  });

  // ── 側欄 BGM 播放器（YouTube IFrame API）──────────
  if (v.bgmVideoId) {
    // 載入 YouTube IFrame API
    if (!document.getElementById('yt-iframe-api')) {
      const ytScript = document.createElement('script');
      ytScript.id  = 'yt-iframe-api';
      ytScript.src = 'https://www.youtube.com/iframe_api';
      document.head.appendChild(ytScript);
    }

    let ytPlayer    = null;
    let playerReady = false;
    let isPlaying   = false;
    let isMuted     = false;
    let barTimer    = null;

    const bgmVideoId = v.bgmVideoId;
    const bgmStart   = v.bgmStart || 0;

    function updatePlayUI(playing) {
      isPlaying = playing;
      const playBtn  = document.getElementById('sbgm-play-btn');
      const statusEl = document.getElementById('sbgm-status');
      if (playBtn)  playBtn.textContent  = playing ? '⏸' : '▶';
      if (statusEl) statusEl.textContent = playing ? '播放中' : '已暫停';
      if (playing) {
        clearInterval(barTimer);
        barTimer = setInterval(() => {
          const bar = document.getElementById('sbgm-bar-fill');
          if (!bar || !ytPlayer) return;
          const dur = ytPlayer.getDuration();
          const cur = ytPlayer.getCurrentTime();
          if (dur > 0) bar.style.width = (cur / dur * 100) + '%';
        }, 1000);
      } else {
        clearInterval(barTimer);
      }
    }

    window.onYouTubeIframeAPIReady = function () {
      ytPlayer = new YT.Player('sbgm-hidden', {
        height: '1',
        width:  '1',
        videoId: bgmVideoId,
        playerVars: {
          start:          bgmStart,
          autoplay:       0,
          controls:       0,
          disablekb:      1,
          fs:             0,
          rel:            0,
          modestbranding: 1,
          playsinline:    1,
        },
        events: {
          onReady: () => {
            playerReady = true;
            // 讓 iframe 允許 autoplay（部分瀏覽器需要）
            const iframe = ytPlayer.getIframe();
            if (iframe) iframe.setAttribute('allow', 'autoplay; encrypted-media');
          },
          onStateChange: (e) => {
            // 只處理明確的播放 / 暫停 / 結束，忽略初始化狀態 (-1, 3, 5)
            if (e.data === YT.PlayerState.PLAYING) {
              updatePlayUI(true);
            } else if (e.data === YT.PlayerState.PAUSED) {
              updatePlayUI(false);
            } else if (e.data === YT.PlayerState.ENDED) {
              // LOOP：結束後從 bgmStart 重新播放
              ytPlayer.seekTo(bgmStart, true);
              ytPlayer.playVideo();
            }
            // -1 (UNSTARTED), 3 (BUFFERING), 5 (CUED) → 不改 UI
          },
          onError: (e) => {
            const statusEl = document.getElementById('sbgm-status');
            // 101/150 = 禁止嵌入, 100 = 影片不存在, 5 = HTML5錯誤
            const msg = (e.data === 101 || e.data === 150)
              ? '影片禁止嵌入'
              : `載入失敗 (${e.data})`;
            if (statusEl) statusEl.textContent = msg;
          }
        }
      });

      // ── 按鈕事件（在 API ready 後才綁定，確保 ytPlayer 存在）──
      const playBtn = document.getElementById('sbgm-play-btn');
      const muteBtn = document.getElementById('sbgm-mute-btn');

      if (playBtn) {
        playBtn.addEventListener('click', () => {
          if (!playerReady) return;
          if (isPlaying) { ytPlayer.pauseVideo(); }
          else           { ytPlayer.playVideo();  }
        });
      }

      if (muteBtn) {
        muteBtn.addEventListener('click', () => {
          if (!playerReady) return;
          if (isMuted) {
            ytPlayer.unMute();
            muteBtn.textContent = '🔊';
          } else {
            ytPlayer.mute();
            muteBtn.textContent = '🔇';
          }
          isMuted = !isMuted;
        });
      }
    };
  }
});
