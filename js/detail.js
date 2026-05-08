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

  const root = document.documentElement;
  root.style.setProperty('--vt-main',   hex);
  root.style.setProperty('--vt-dark',   toHex(r-60, g-60, b-60));
  root.style.setProperty('--vt-mid',    toHex(r-25, g-25, b-25));
  root.style.setProperty('--vt-light',  toHex(r+50, g+50, b+50));
  root.style.setProperty('--vt-pale',   `rgba(${r},${g},${b},0.08)`);
  root.style.setProperty('--vt-border', `rgba(${r},${g},${b},0.28)`);
  root.style.setProperty('--vt-shadow', `rgba(${r},${g},${b},0.18)`);
  root.style.setProperty('--vt-label',  labelColor);
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
        <h2 style="margin-bottom:1rem;">找不到此 Vtuber</h2>
        <a href="index.html" style="color:var(--vt-main)">← 返回首頁</a>
      </div>`;
    return;
  }

  document.title = `${v.name} — MC組事務所`;

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
    { key: 'profile',    label: '🐸 個人介紹',    color: null },
    ...('refSheets' in v || 'refSheet' in v ? [{ key: 'refsheet', label: '🎨 三視圖', color: null }] : []),
    ...('fanName'  in v ? [{ key: 'trivia',    label: '💡 小知識',    color: '#e65100' }] : []),
    { key: 'videos',     label: '🎵 最新音樂',    color: '#d32f2f' },
    ...(v.shorts     && v.shorts.length     ? [{ key: 'shorts',     label: '📱 最新Shorts',   color: '#ff6f00' }] : []),
    ...(v.musicClips && v.musicClips.length ? [{ key: 'musicclips', label: '🎶 熱門音樂推薦', color: '#7b1fa2' }] : []),
    ...(v.videoClips && v.videoClips.length ? [{ key: 'videoclips', label: '🎬 熱門影片推薦', color: '#1565c0' }] : []),
    { key: 'schedule', label: '📅 行程預覽',    color: '#0277bd' },
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
    const panels = sheets.map((s, i) =>
      `<div class="refsheet-ver-panel${i === 0 ? ' active' : ''}" data-rsidx="${i}">
        ${s.url
          ? `<img class="refsheet-img" src="${s.url}" alt="${v.name} ${s.version}">`
          : `<div class="refsheet-placeholder"><span style="font-size:3rem">🎨</span><p>${s.version} 圖片待上傳</p></div>`
        }
      </div>`
    ).join('');
    const rsInner = sheets.length
      ? `<div class="refsheet-layout">
          <div class="refsheet-ver-list">${btns}</div>
          <div class="refsheet-display">${panels}</div>
        </div>`
      : `<div class="refsheet-placeholder"><span style="font-size:3rem">🎨</span><p>三視圖圖片待上傳</p></div>`;
    refSheetHTML = `
    <div id="tab-refsheet" class="tab-panel">
      <div class="detail-section-title">🎨 三視圖</div>
      ${rsInner}
    </div>`;
  }

  // ── 小知識 HTML ────────────────────────────────
  let triviaHTML = '';
  if (hasTriviaTab) {
    // 粉絲名稱
    let cards = `
      <div class="trivia-card">
        <div class="trivia-label">👥 粉絲名稱</div>
        <div class="trivia-value">${v.fanName || '（待填入）'}</div>
      </div>`;

    // 主題標籤（陣列 hashTags 或舊版字串 hashTag）
    if (v.hashTags && v.hashTags.length) {
      cards += `
      <div class="trivia-card trivia-full">
        <div class="trivia-label"># 主題標籤</div>
        <div class="trivia-items">
          ${v.hashTags.map(h => `<span class="trivia-hashtag-pill"><span class="trivia-tag-cat">${h.label}</span>${h.tag}</span>`).join('')}
        </div>
      </div>`;
    } else {
      cards += `
      <div class="trivia-card">
        <div class="trivia-label"># 主題標籤</div>
        <div class="trivia-value trivia-hashtag">${v.hashTag || '（待填入）'}</div>
      </div>`;
    }

    // 未來目標（陣列 futureGoals 或舊版字串 futureGoal）
    if (v.futureGoals && v.futureGoals.length) {
      cards += `
      <div class="trivia-card trivia-full">
        <div class="trivia-label">🎯 未來目標</div>
        <div class="trivia-goals">
          ${v.futureGoals.map(g => `<div class="trivia-goal-item">✦ ${g}</div>`).join('')}
        </div>
      </div>`;
    } else {
      cards += `
      <div class="trivia-card trivia-full">
        <div class="trivia-label">🎯 未來目標</div>
        <div class="trivia-value">${v.futureGoal || '（待填入）'}</div>
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

    triviaHTML = `
    <div id="tab-trivia" class="tab-panel">
      <div class="detail-section-title">💡 小知識</div>
      <div class="trivia-grid">${cards}</div>
    </div>`;
  }

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
            <a href="${v.youtube}" target="_blank" class="sidebar-social-btn yt" title="YouTube">▶</a>
            <a href="${v.twitter}" target="_blank" class="sidebar-social-btn tw" title="Twitter/X">𝕏</a>
            ${v.twitch ? `<a href="${v.twitch}" target="_blank" class="sidebar-social-btn twitch" title="Twitch">🟣</a>` : ''}
          </div>

          ${v.bgmVideoId ? `
          <!-- BGM 播放器 -->
          <div class="sidebar-bgm">
            <div class="sbgm-label">🎵 背景音樂</div>
            <div id="sbgm-hidden"></div>
            <div class="sbgm-controls">
              <button class="sbgm-play-btn" id="sbgm-play-btn" title="播放 / 暫停">▶</button>
              <div class="sbgm-info">
                <div class="sbgm-song">${v.bgmLabel || v.name}</div>
                <div class="sbgm-status" id="sbgm-status">點擊播放</div>
              </div>
              <button class="sbgm-mute-btn" id="sbgm-mute-btn" title="靜音 / 取消靜音">🔊</button>
            </div>
            <div class="sbgm-bar"><div class="sbgm-bar-fill" id="sbgm-bar-fill"></div></div>
          </div>` : ''}

          <!-- 導航區：所有 Vtuber + 上一位 / 下一位 -->
          <div class="sidebar-nav">
            <a href="vtubers.html" class="sidebar-nav-all">⭐ 所有 Vtuber</a>
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
            <div class="meta-card"><div class="meta-label">所屬公司</div><div class="meta-value">${v.group}</div></div>
            ${genTeamName[v.generation] ? `<div class="meta-card"><div class="meta-label">團體名稱</div><div class="meta-value">${genTeamName[v.generation]}</div></div>` : ''}
            <div class="meta-card"><div class="meta-label">世代</div><div class="meta-value">${v.generation}</div></div>
            <div class="meta-card"><div class="meta-label">出道日期</div><div class="meta-value">${v.debut}</div></div>
            <div class="meta-card"><div class="meta-label">生日</div><div class="meta-value">${v.birthday}</div></div>
          </div>

          <div class="detail-section-title">關於 ${v.name}</div>
          <div class="detail-description">${v.description}</div>

          <div class="detail-section-title">標籤</div>
          <div class="detail-tags">
            ${v.tags.map(t => `<span class="tag">${t}</span>`).join('')}
          </div>

          <div class="detail-section-title" style="margin-top:1.5rem">相關連結</div>
          <div class="detail-links-grid">
            <a href="${v.youtube}" target="_blank" class="detail-link-btn youtube"><span class="link-icon">▶</span> YouTube 頻道</a>
            <a href="${v.twitter}" target="_blank" class="detail-link-btn twitter"><span class="link-icon">𝕏</span> Twitter / X</a>
            ${v.twitch ? `<a href="${v.twitch}" target="_blank" class="detail-link-btn twitch-btn"><span class="link-icon">🟣</span> Twitch</a>` : ''}
            <a href="${v.spreadsheet}" target="_blank" class="detail-link-btn sheets"><span class="link-icon">📋</span> ${v.spreadsheetLabel || v.name + '的大小事'}</a>
          </div>

          <div class="detail-quote">
            <div class="quote-label">口頭禪</div>
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
                : `<div class="quote-empty">（待新增）</div>`
            }
          </div>
        </div>

        ${refSheetHTML}
        ${triviaHTML}

        <!-- TAB: 最新音樂 -->
        <div id="tab-videos" class="tab-panel">
          <div class="detail-section-title">🎵 最新音樂</div>
          <p style="color:rgba(255,255,255,0.75);font-size:0.85rem;margin-bottom:0.7rem;font-weight:600;flex-shrink:0">最新原創&amp;Cover，點擊前往 YouTube 觀看</p>
          <div class="video-grid" id="video-grid"></div>
        </div>

        <!-- TAB: 熱門Short -->
        ${v.shorts && v.shorts.length ? `
        <div id="tab-shorts" class="tab-panel">
          <div class="detail-section-title">📱 最新 Shorts</div>
          <p style="color:rgba(255,255,255,0.75);font-size:0.85rem;margin-bottom:0.7rem;font-weight:600;flex-shrink:0">官方剪輯最新前三短片 Shorts，點擊前往 YouTube 觀看</p>
          <div class="video-grid shorts-grid" id="shorts-grid"></div>
        </div>` : ''}

        <!-- TAB: 熱門音樂推薦 -->
        ${v.musicClips && v.musicClips.length ? `
        <div id="tab-musicclips" class="tab-panel">
          <div class="detail-section-title">🎶 熱門音樂推薦</div>
          <p style="color:rgba(255,255,255,0.75);font-size:0.85rem;margin-bottom:0.7rem;font-weight:600;flex-shrink:0">非官方粉絲剪輯熱門前三音樂，點擊前往 YouTube 觀看</p>
          <div class="video-grid" id="musicclips-grid"></div>
        </div>` : ''}

        <!-- TAB: 熱門影片推薦 -->
        ${v.videoClips && v.videoClips.length ? `
        <div id="tab-videoclips" class="tab-panel">
          <div class="detail-section-title">🎬 熱門影片推薦</div>
          <p style="color:rgba(255,255,255,0.75);font-size:0.85rem;margin-bottom:0.7rem;font-weight:600;flex-shrink:0">非官方粉絲剪輯熱門前三影片，點擊前往 YouTube 觀看</p>
          <div class="video-grid" id="videoclips-grid"></div>
        </div>` : ''}

        <!-- TAB: 行程預覽 -->
        <div id="tab-schedule" class="tab-panel">
          <div class="detail-section-title">📅 ${v.scheduleTitle || v.name + '的行程表'}</div>
          <p style="color:rgba(255,255,255,0.75);font-size:0.85rem;margin-bottom:0.7rem;font-weight:600;flex-shrink:0">每週行程待機室與最新排程</p>
          <div id="schedule-content"></div>
        </div>

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
      <a class="yt-modal-fallback" id="yt-modal-fallback" href="#" target="_blank">
        ▶ 若無法在此播放，點此前往 YouTube 觀看
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

  // ── 共用：渲染影片卡片到指定容器 ────────────────
  function renderVideoCards(items, containerId, placeholderIcon) {
    const container = document.getElementById(containerId);
    if (!container || !items || !items.length) return;
    items.forEach(vid => {
      if (vid.id && !vid.id.startsWith('REPLACE')) {
        // 優先用自訂縮圖，否則抓 YouTube 縮圖
        const thumb    = vid.thumb || `https://img.youtube.com/vi/${vid.id}/maxresdefault.jpg`;
        const thumbFb  = vid.thumb || `https://img.youtube.com/vi/${vid.id}/hqdefault.jpg`;
        const safeTitle = vid.title.replace(/'/g, '&#39;');
        container.innerHTML += `
          <div class="video-card" style="cursor:pointer"
            onclick="(function(){
              document.getElementById('yt-modal-iframe').src='https://www.youtube.com/embed/${vid.id}?autoplay=1&rel=0';
              document.getElementById('yt-modal-fallback').href='https://www.youtube.com/watch?v=${vid.id}';
              document.getElementById('yt-modal-title').textContent='${safeTitle}';
              document.getElementById('yt-modal').classList.add('open');
              document.body.style.overflow='hidden';
            })()">
            <div class="video-thumb-wrap">
              <img class="video-thumb" src="${thumb}" onerror="this.src='${thumbFb}'" alt="${vid.title}">
              <div class="video-title">${vid.title}</div>
              <div class="video-play-overlay"><div class="video-play-btn">▶</div></div>
            </div>
          </div>`;
      } else {
        container.innerHTML += `
          <div class="video-card video-placeholder">
            <div class="video-placeholder-inner">
              <span style="font-size:2.5rem">${placeholderIcon}</span>
              <p>影片待設定</p>
            </div>
          </div>`;
      }
    });
  }

  // ── 各分頁影片渲染 ────────────────────────────
  renderVideoCards(v.videos,     'video-grid',      '🎵');
  renderVideoCards(v.shorts,     'shorts-grid',     '📱');
  renderVideoCards(v.musicClips, 'musicclips-grid', '🎶');
  renderVideoCards(v.videoClips, 'videoclips-grid', '🎬');

  // ── 行程區 ────────────────────────────────────
  const scheduleContent = document.getElementById('schedule-content');
  let scheduleHTML = '';
  if (v.scheduleVideoId && !v.scheduleVideoId.startsWith('REPLACE')) {
    const schedThumb   = `https://img.youtube.com/vi/${v.scheduleVideoId}/maxresdefault.jpg`;
    const schedThumbFb = `https://img.youtube.com/vi/${v.scheduleVideoId}/hqdefault.jpg`;
    const schedUrl     = `https://www.youtube.com/watch?v=${v.scheduleVideoId}`;
    scheduleHTML += `
      <a class="schedule-thumb-link" href="${schedUrl}" target="_blank">
        <div class="schedule-thumb-wrap">
          <img class="schedule-thumb" src="${schedThumb}" onerror="this.src='${schedThumbFb}'" alt="${v.scheduleTitle || v.name + '的行程表'}">
          <div class="schedule-thumb-overlay"><div class="schedule-play-btn">▶ 前往行程表影片</div></div>
        </div>
      </a>`;
  } else {
    scheduleHTML += `<div class="schedule-placeholder"><span style="font-size:3rem">📅</span><p>行程待設定</p></div>`;
  }
  scheduleHTML += `
    <div class="schedule-links-row">
      <a href="${v.youtube}" target="_blank" class="detail-link-btn youtube"><span class="link-icon">▶</span> 前往 YouTube 頻道</a>
      <a href="${v.spreadsheet}" target="_blank" class="detail-link-btn sheets"><span class="link-icon">📋</span> ${v.spreadsheetLabel || v.name + '的大小事'}</a>
    </div>`;
  scheduleContent.innerHTML = scheduleHTML;

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
              updatePlayUI(false);
              const statusEl = document.getElementById('sbgm-status');
              if (statusEl) statusEl.textContent = '已結束';
              clearInterval(barTimer);
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
