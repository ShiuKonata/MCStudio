document.addEventListener('DOMContentLoaded', () => {

  // ── Nav 高度 ─────────────────────────────────
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    document.documentElement.style.setProperty('--nav-height', navbar.offsetHeight + 'px');
  }

  // ── 只在有 #vtuber-grid 的頁面執行 ────────
  const grid = document.getElementById('vtuber-grid');
  if (!grid) return;

  // 畢業生資料（只顯示 graduated: true 的成員）
  const graduatedVtubers = vtubers.filter(v => v.graduated);

  let activeFilter = 'all';
  let searchQuery  = '';

  // 出道日排序（早→晚）
  const byDebut = (a, b) => new Date(a.debut) - new Date(b.debut);

  // ── 緊湊卡片 ────────────────────────────────
  function renderCompactCard(v) {
    return `
      <div class="compact-card">
        <a href="vtuber.html?id=${v.id}" class="compact-card-main">
          <img class="compact-avatar" src="${v.avatar}" alt="${v.name}"
            onerror="this.style.background='var(--sky-bg)'">
          <div class="compact-name">${v.shortName || v.name}</div>
          <div class="compact-debut">${T('card.debut')} ${v.debut}</div>
        </a>
        <div class="compact-links">
          <a href="${v.youtube}" target="_blank" rel="noopener noreferrer" class="compact-link yt"
            onclick="event.stopPropagation()" title="YouTube">▶</a>
          <a href="${v.twitter}" target="_blank" rel="noopener noreferrer" class="compact-link tw"
            onclick="event.stopPropagation()" title="Twitter/X">𝕏</a>
          ${v.twitch
            ? `<a href="${v.twitch}" target="_blank" rel="noopener noreferrer" class="compact-link twitch"
                onclick="event.stopPropagation()" title="Twitch">🟣</a>`
            : ''}
        </div>
      </div>`;
  }

  // ── 完整卡片 ─────────────────────────────────
  function renderFullCard(v, i) {
    const card = document.createElement('div');
    card.className = 'vtuber-card fade-in';
    card.style.transitionDelay = `${i * 0.07}s`;
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
          <div class="card-avatar-fallback" style="display:none">🎓</div>
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
          <a href="${v.youtube}" target="_blank" rel="noopener noreferrer" class="card-link yt" onclick="event.stopPropagation()">
            ▶ YouTube
          </a>
          <a href="${v.twitter}" target="_blank" rel="noopener noreferrer" class="card-link tw" onclick="event.stopPropagation()">
            𝕏 Twitter
          </a>
        </div>
        <a href="vtuber.html?id=${v.id}" class="card-more-btn">${T('card.viewDetail')}</a>
      </div>
    `;
    return card;
  }

  // ── 主渲染函式 ───────────────────────────────
  function renderCards() {
    const q = searchQuery.toLowerCase();

    if (activeFilter === 'all') {
      grid.className = 'gen-tree';

      if (graduatedVtubers.length === 0) {
        grid.innerHTML = `
          <div class="no-results" style="grid-column:1/-1">
            <span class="emoji">🎓</span>
            <p data-i18n="graduated.empty">目前沒有畢業生資料</p>
          </div>`;
        return;
      }

      const matched = graduatedVtubers.filter(v =>
        !q ||
        v.name.toLowerCase().includes(q) ||
        v.nameEn.toLowerCase().includes(q) ||
        v.group.toLowerCase().includes(q) ||
        v.tags.some(t => t.toLowerCase().includes(q))
      );

      if (matched.length === 0) {
        grid.innerHTML = `
          <div class="no-results" style="grid-column:1/-1">
            <span class="emoji">🔍</span>
            ${T('noResults')}
          </div>`;
        return;
      }

      const activeSections = generations
        .map(gen => ({
          gen,
          members: matched.filter(v => v.generation === gen).sort(byDebut)
        }))
        .filter(s => s.members.length > 0);

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

    } else {
      grid.className = 'vtuber-grid';

      const filtered = graduatedVtubers
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
            ${T('noResults')}
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

  // ── 篩選按鈕（只顯示有畢業生的世代）─────────
  const filterBar = document.getElementById('filter-bar');
  if (filterBar && graduatedVtubers.length > 0) {
    const graduatedGens = generations.filter(gen =>
      graduatedVtubers.some(v => v.generation === gen)
    );

    if (graduatedGens.length > 0) {
      const allBtn = document.createElement('button');
      allBtn.className = 'filter-btn active';
      allBtn.textContent = T('filter.all');
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

      graduatedGens.forEach(gen => {
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

  // ── Fade-in ───────────────────────────────────
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) e.target.classList.add('visible');
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.fade-in-section').forEach(el => observer.observe(el));
});
