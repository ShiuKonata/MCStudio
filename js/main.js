document.addEventListener('DOMContentLoaded', () => {

  // ── Nav 高度 ─────────────────────────────────
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    document.documentElement.style.setProperty('--nav-height', navbar.offsetHeight + 'px');
  }

  // ── 粒子背景（首頁用）────────────────────────
  const particlesContainer = document.querySelector('.particles');
  if (particlesContainer) {
    for (let i = 0; i < 20; i++) {
      const p = document.createElement('div');
      p.className = 'particle';
      p.style.cssText = `
        left: ${Math.random() * 100}%;
        width: ${Math.random() * 4 + 2}px;
        height: ${Math.random() * 4 + 2}px;
        animation-duration: ${Math.random() * 15 + 10}s;
        animation-delay: ${Math.random() * 10}s;
        opacity: ${Math.random() * 0.4 + 0.1};
        background: ${Math.random() > 0.5 ? '#a855f7' : '#ec4899'};
      `;
      particlesContainer.appendChild(p);
    }
  }

  // ── 統計數字（優先執行，防止後續程式崩潰影響）─
  const statCount  = document.getElementById('stat-count');
  const statGroups = document.getElementById('stat-groups');
  if (statCount)  statCount.textContent  = vtubers.length;
  if (statGroups) statGroups.textContent = groups.length;

  // ── 以下只在有 #vtuber-grid 的頁面執行 ────────
  const grid = document.getElementById('vtuber-grid');
  if (!grid) return;

  let activeFilter = 'all';
  let searchQuery  = '';

  // 出道日排序（早→晚）
  const byDebut = (a, b) => new Date(a.debut) - new Date(b.debut);

  // ── 緊湊卡片（樹狀全部頁面用）───────────────
  function renderCompactCard(v) {
    return `
      <div class="compact-card">
        <a href="vtuber.html?id=${v.id}" class="compact-card-main">
          <img class="compact-avatar" src="${v.avatar}" alt="${v.name}"
            onerror="this.style.background='var(--sky-bg)'">
          <div class="compact-name">${v.shortName || v.name}</div>
          <div class="compact-debut">出道 ${v.debut}</div>
        </a>
        <div class="compact-links">
          <a href="${v.youtube}" target="_blank" class="compact-link yt"
            onclick="event.stopPropagation()" title="YouTube">▶</a>
          <a href="${v.twitter}" target="_blank" class="compact-link tw"
            onclick="event.stopPropagation()" title="Twitter/X">𝕏</a>
          ${v.twitch
            ? `<a href="${v.twitch}" target="_blank" class="compact-link twitch"
                onclick="event.stopPropagation()" title="Twitch">🟣</a>`
            : ''}
        </div>
      </div>`;
  }

  // ── 完整卡片（各世代頁面用）─────────────────
  function renderFullCard(v, i) {
    const card = document.createElement('div');
    card.className = 'vtuber-card fade-in';
    card.style.transitionDelay = `${i * 0.07}s`;
    // 標籤：最多 10 個
    // 規則：純英文數字 → 最多 8 字；含中文（含中英混合）→ 最多 5 字
    const tags = v.tags.slice(0, 10).map(t => {
      const hasChinese = /[一-鿿]/.test(t);
      return t.slice(0, hasChinese ? 5 : 8);
    });
    card.innerHTML = `
      <div class="card-cover" style="background-image: url('${v.coverImage}')">
        <div class="card-group-badge">${v.group} · ${v.generation}</div>
        <div class="card-avatar-wrap">
          <img class="card-avatar" src="${v.avatar}" alt="${v.name}"
            onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
          <div class="card-avatar-fallback" style="display:none">⭐</div>
        </div>
      </div>
      <div class="card-body">
        <div class="card-name">${v.name}</div>
        <div class="card-name-en">${v.nameEn}</div>
        ${v.tagline ? `<div class="card-tagline">"${v.tagline}"</div>` : ''}
        <div class="card-tags">
          ${tags.map(t => `<span class="tag">${t}</span>`).join('')}
        </div>
        <div class="card-links">
          <a href="${v.youtube}" target="_blank" class="card-link yt" onclick="event.stopPropagation()">
            ▶ YouTube
          </a>
          <a href="${v.twitter}" target="_blank" class="card-link tw" onclick="event.stopPropagation()">
            𝕏 Twitter
          </a>
        </div>
        <a href="vtuber.html?id=${v.id}" class="card-more-btn">✦ 查看詳細介紹</a>
      </div>
    `;
    return card;
  }

  // ── 主渲染函式 ───────────────────────────────
  function renderCards() {
    const q = searchQuery.toLowerCase();

    if (activeFilter === 'all') {
      // ===== 全部：三欄佈局，每欄由上到下填入世代區塊 =====
      grid.className = 'gen-tree';

      const matched = vtubers.filter(v =>
        !q ||
        v.name.toLowerCase().includes(q) ||
        v.nameEn.toLowerCase().includes(q) ||
        v.group.toLowerCase().includes(q) ||
        v.tags.some(t => t.toLowerCase().includes(q))
      );

      // 只保留有成員的世代
      const activeSections = generations
        .map(gen => ({
          gen,
          members: matched.filter(v => v.generation === gen).sort(byDebut)
        }))
        .filter(s => s.members.length > 0);

      if (activeSections.length === 0) {
        grid.innerHTML = `
          <div class="no-results" style="grid-column:1/-1">
            <span class="emoji">🔍</span>
            找不到相關 Vtuber，試試其他關鍵字吧！
          </div>`;
      } else {
        // 2 欄：左欄前半（最多3個）、右欄後半
        const COLS = 2;
        const perCol = Math.max(3, Math.ceil(activeSections.length / COLS));
        let html = '';
        for (let c = 0; c < COLS; c++) {
          const colSections = activeSections.slice(c * perCol, (c + 1) * perCol);
          html += `<div class="gen-col">`;
          html += colSections.map(({ gen, members }) => `
            <div class="gen-section">
              <div class="gen-section-header">
                <span class="gen-section-label">${gen}</span>
              </div>
              <div class="gen-section-cards">
                ${members.map(v => renderCompactCard(v)).join('')}
              </div>
            </div>`).join('');
          html += `</div>`;
        }
        grid.innerHTML = html;
      }

    } else {
      // ===== 特定世代：完整卡片，出道日由早至晚 =====
      grid.className = 'vtuber-grid';

      const filtered = vtubers
        .filter(v => {
          const matchGen = v.generation === activeFilter;
          const matchSearch = !q ||
            v.name.toLowerCase().includes(q) ||
            v.nameEn.toLowerCase().includes(q) ||
            v.group.toLowerCase().includes(q) ||
            v.tags.some(t => t.toLowerCase().includes(q));
          return matchGen && matchSearch;
        })
        .sort(byDebut);

      grid.innerHTML = '';

      if (filtered.length === 0) {
        grid.innerHTML = `
          <div class="no-results">
            <span class="emoji">🔍</span>
            找不到相關 Vtuber，試試其他關鍵字吧！
          </div>`;
        return;
      }

      filtered.forEach((v, i) => {
        const card = renderFullCard(v, i);
        grid.appendChild(card);
        requestAnimationFrame(() => {
          setTimeout(() => card.classList.add('visible'), 50 + i * 70);
        });
      });
    }
  }

  // ── 篩選按鈕（全部 / 零期生 / 一期生 …）────
  const filterBar = document.getElementById('filter-bar');
  if (filterBar) {
    const allBtn = document.createElement('button');
    allBtn.className = 'filter-btn active';
    allBtn.textContent = '全部';
    allBtn.dataset.gen = 'all';
    filterBar.appendChild(allBtn);

    const genLabel = {
      '零期生': '0期生 大學姐',
      '一期生': '1期生 Exitus',
      '二期生': '2期生 MeloNyx',
      '三期生': '3期生 Alluria',
      '四期生': '4期生 音雲漫步',
      '五期生': '5期生 CaKano',
      '六期生': '6期生 ælis',
    };

    generations.forEach(gen => {
      const btn = document.createElement('button');
      btn.className = 'filter-btn';
      btn.textContent = genLabel[gen] || gen;
      btn.dataset.gen = gen;
      filterBar.appendChild(btn);
    });

    filterBar.addEventListener('click', e => {
      if (!e.target.matches('.filter-btn')) return;
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');
      activeFilter = e.target.dataset.gen;
      renderCards();
    });
  }

  // ── 搜尋 ─────────────────────────────────────
  const searchInput = document.getElementById('search-input');
  if (searchInput) {
    searchInput.addEventListener('input', e => {
      searchQuery = e.target.value;
      renderCards();
    });
  }

  renderCards();

  // ── Fade-in（區塊用）─────────────────────────
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) e.target.classList.add('visible');
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.fade-in-section').forEach(el => observer.observe(el));
});
