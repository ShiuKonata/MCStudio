// ── 動態套用 Vtuber 個人色 ──────────────────────────
function applyVtuberColor(hex) {
  const r = parseInt(hex.slice(1,3), 16);
  const g = parseInt(hex.slice(3,5), 16);
  const b = parseInt(hex.slice(5,7), 16);
  const clamp = v => Math.max(0, Math.min(255, v));
  const toHex = (r,g,b) => '#' + [r,g,b].map(x => clamp(x).toString(16).padStart(2,'0')).join('');

  const root = document.documentElement;
  root.style.setProperty('--vt-main',   hex);
  root.style.setProperty('--vt-dark',   toHex(r-60, g-60, b-60));
  root.style.setProperty('--vt-mid',    toHex(r-25, g-25, b-25));
  root.style.setProperty('--vt-light',  toHex(r+50, g+50, b+50));
  root.style.setProperty('--vt-pale',   `rgba(${r},${g},${b},0.08)`);
  root.style.setProperty('--vt-border', `rgba(${r},${g},${b},0.28)`);
  root.style.setProperty('--vt-shadow', `rgba(${r},${g},${b},0.18)`);
}

// ── 分頁設定（含個人色） ────────────────────────────
const TAB_CONFIG = [
  { key: 'profile',  label: '🐸 個人介紹', color: null },       // null = 用 vt-main
  { key: 'videos',   label: '▶ 熱門直播',  color: '#d32f2f' },  // YouTube 紅
  { key: 'schedule', label: '📅 行程預覽', color: '#0277bd' },  // 天空藍
];

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

  // ── 注入頂部分頁列 ─────────────────────────────
  const tabBar = document.getElementById('vtuber-tab-bar');
  TAB_CONFIG.forEach((tab, i) => {
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
          <div class="detail-meta-grid">
            <div class="meta-card"><div class="meta-label">所屬團體</div><div class="meta-value">${v.group}</div></div>
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

          ${(v.taglines && v.taglines.length) || v.tagline ? `
          <div class="detail-quote">
            <div class="quote-label">口頭禪</div>
            ${v.taglines && v.taglines.length
              ? `<div class="quote-list">
                  ${v.taglines.map(t => `
                    <div class="quote-item">
                      ${t.context ? `<span class="quote-context">${t.context}</span>` : ''}
                      <span class="quote-item-text">「${t.text}」</span>
                    </div>`).join('')}
                </div>`
              : `<div class="quote-text">「${v.tagline}」</div>`
            }
          </div>` : ''}
        </div>

        <!-- TAB: 熱門直播 -->
        <div id="tab-videos" class="tab-panel">
          <div class="detail-section-title">🎬 熱門直播 / 影片</div>
          <p style="color:rgba(255,255,255,0.75);font-size:0.85rem;margin-bottom:0.7rem;font-weight:600;flex-shrink:0">精選三部人氣直播與影片，點擊前往 YouTube 觀看</p>
          <div class="video-grid" id="video-grid"></div>
        </div>

        <!-- TAB: 行程預覽 -->
        <div id="tab-schedule" class="tab-panel">
          <div class="detail-section-title">📅 ${v.scheduleTitle || v.name + '的行程表'}</div>
          <p style="color:rgba(255,255,255,0.75);font-size:0.85rem;margin-bottom:0.7rem;font-weight:600;flex-shrink:0">每週行程待機室與最新排程</p>
          <div id="schedule-content"></div>
        </div>

      </main>
    </div>
  `;

  // ── 影片區 ────────────────────────────────────
  const videoGrid = document.getElementById('video-grid');
  if (v.videos && v.videos.length) {
    v.videos.forEach(vid => {
      if (vid.id && !vid.id.startsWith('REPLACE')) {
        const thumb   = `https://img.youtube.com/vi/${vid.id}/maxresdefault.jpg`;
        const thumbFb = `https://img.youtube.com/vi/${vid.id}/hqdefault.jpg`;
        const ytUrl   = `https://www.youtube.com/watch?v=${vid.id}`;
        videoGrid.innerHTML += `
          <a class="video-card" href="${ytUrl}" target="_blank">
            <div class="video-thumb-wrap">
              <img class="video-thumb" src="${thumb}" onerror="this.src='${thumbFb}'" alt="${vid.title}">
              <div class="video-title">${vid.title}</div>
              <div class="video-play-overlay"><div class="video-play-btn">▶</div></div>
            </div>
          </a>`;
      } else {
        videoGrid.innerHTML += `
          <div class="video-card video-placeholder">
            <div class="video-placeholder-inner">
              <span style="font-size:2.5rem">🎬</span>
              <p>影片待設定</p>
            </div>
          </div>`;
      }
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
});
