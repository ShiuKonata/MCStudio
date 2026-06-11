// ── MC組事務所 生日彈窗 ──────────────────────────────────────────
// 當天有成員生日時，進站自動跳出慶祝彈窗（每個 session 只顯示一次）
(function () {
  'use strict';

  // ── session 防重複 ─────────────────────────────────────────────
  const SESSION_KEY = 'mc_bday_' + new Date().toISOString().slice(0, 10);
  if (sessionStorage.getItem(SESSION_KEY)) return;

  // ── 備用生日資料（當 data.js 未載入時使用）─────────────────────
  const FALLBACK = [
    { id:'shiucoda',      name:'詩雨蔻達',                  avatar:'https://pbs.twimg.com/profile_images/1932726820966969345/2mjbudV0_400x400.jpg',  birthday:'6月6日'  },
    { id:'rumi',          name:'懶貓子Rumi',                avatar:'https://pbs.twimg.com/profile_images/1907308386783539200/Ubw0gB20_400x400.jpg',  birthday:'8月13日' },
    { id:'paroniie',      name:'帕蘿妮',                    avatar:'https://pbs.twimg.com/profile_images/1951138431612100608/9TNlSfqW_400x400.jpg',  birthday:'4月17日' },
    { id:'lubee',         name:'神無月鹿比',                avatar:'https://pbs.twimg.com/profile_images/2006266508633366529/NjcXGLXW_400x400.png',  birthday:'10月22日'},
    { id:'himegimichika', name:'姬城三千華',                avatar:'https://pbs.twimg.com/profile_images/1845639618013904896/CqahvjNX_400x400.jpg',  birthday:'5月20日' },
    { id:'arrynia',       name:'艾琳妮雅',                  avatar:'https://pbs.twimg.com/profile_images/1616018346641850369/hAKPytgg_400x400.jpg',  birthday:'11月11日'},
    { id:'kiriko',        name:'酒樂霧子',                  avatar:'https://pbs.twimg.com/profile_images/2039773906706534400/RTy0EGZQ_400x400.jpg',  birthday:'6月10日' },
    { id:'vaswawa',       name:'瓦西瓦瓦',                  avatar:'https://pbs.twimg.com/profile_images/2040470338254053376/j6n_yPob_400x400.jpg',  birthday:'9月9日'  },
    { id:'sinniearis',    name:'希妮亞里絲',                avatar:'https://pbs.twimg.com/profile_images/2047990430235799552/8hLQvduO_400x400.jpg',  birthday:'11月8日' },
    { id:'ririna',        name:'結月莉莉奈',                avatar:'https://pbs.twimg.com/profile_images/2039763954331951104/OlHLWeDM_400x400.jpg',  birthday:'3月29日' },
    { id:'ekorru',        name:'依可露',                    avatar:'https://pbs.twimg.com/profile_images/2040061692458291200/7sfKahBl_400x400.jpg',  birthday:'7月17日' },
    { id:'wakasaito',     name:'若櫻依兔',                  avatar:'https://pbs.twimg.com/profile_images/1936436065180549120/T_EPkPr6_400x400.jpg',  birthday:'10月1日' },
    { id:'whalefall',     name:'鯨諾',                      avatar:'https://pbs.twimg.com/profile_images/2064075801516228608/H0vDY5uC_400x400.jpg',  birthday:'11月13日'},
    { id:'kai',           name:'魁 Kai',                    avatar:'https://pbs.twimg.com/profile_images/2060718199705088000/2gEl6-Rk_400x400.jpg',  birthday:'8月2日'  },
    { id:'mukuru',        name:'穆克蕗',                    avatar:'https://pbs.twimg.com/profile_images/2048735497955254272/xggURAvf_400x400.jpg',  birthday:'7月10日' },
    { id:'nyrfier',       name:'涅爾菲',                    avatar:'https://pbs.twimg.com/profile_images/2052764874808385536/3tKm2bSY_400x400.jpg',  birthday:'10月12日'},
    { id:'fuka22',        name:'貳貳',                      avatar:'https://pbs.twimg.com/profile_images/1992530964615163905/1U7O9j0Q_400x400.jpg',  birthday:'11月22日'},
    { id:'chita',         name:'崎塔',                      avatar:'https://pbs.twimg.com/profile_images/2039385129848905729/9pojrhsS_400x400.jpg',  birthday:'9月20日' },
    { id:'chamamatti',    name:'茶帽瑪緹',                  avatar:'https://pbs.twimg.com/profile_images/2057135124555419648/ADdjtliV_400x400.jpg',  birthday:'10月6日' },
    { id:'shiroleon',     name:'希洛萊昂',                  avatar:'https://pbs.twimg.com/profile_images/1924669241590218753/o_vbRJAJ_400x400.jpg',  birthday:'4月2日'  },
    { id:'BarkBarkPomi',  name:'百百波美',                  avatar:'https://pbs.twimg.com/profile_images/1995498526294609920/tSOMou_Y_400x400.jpg',  birthday:'4月12日' },
    { id:'cocor0',        name:'心 cocor0',                 avatar:'https://pbs.twimg.com/profile_images/1803285070645796864/dqPN0I-3_400x400.jpg',  birthday:'3月3日'  },
    { id:'UchiFifi',      name:'羽芝扉扉',                  avatar:'https://pbs.twimg.com/profile_images/2039510641430663168/4xpOGnRl_400x400.jpg',  birthday:'1月14日' },
    { id:'nokori',        name:'諾恪里',                    avatar:'https://pbs.twimg.com/profile_images/2045739065392476160/7v9ySc-G_400x400.jpg',  birthday:'6月21日' },
    { id:'KeKeMii',       name:'克克米伊',                  avatar:'https://pbs.twimg.com/profile_images/2052756867378798592/6X8FR751_400x400.jpg',  birthday:'7月5日'  },
    { id:'Pele',          name:'珮蕾',                      avatar:'https://pbs.twimg.com/profile_images/2011801229165559809/gqkdH927_400x400.jpg',  birthday:'6月3日'  },
    { id:'Yawnii',        name:'睏睏幽昵',                  avatar:'https://pbs.twimg.com/profile_images/2057135498200809472/-QFJQgbg_400x400.jpg',  birthday:'7月2日'  },
  ];

  // ── 工具函式 ───────────────────────────────────────────────────
  function parseBd(str) {
    if (!str) return null;
    const m = str.match(/(\d+)月(\d+)日/);
    return m ? { month: +m[1], day: +m[2] } : null;
  }

  function isToday(bd) {
    if (!bd) return false;
    const n = new Date();
    return n.getMonth() + 1 === bd.month && n.getDate() === bd.day;
  }

  // ── 煙火動畫 ───────────────────────────────────────────────────
  function launchFireworks(canvas) {
    const ctx = canvas.getContext('2d');
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;

    const COLORS = ['#ff6b6b','#feca57','#48dbfb','#ff9ff3','#54a0ff','#00d2d3','#ff9f43','#a29bfe','#55efc4'];
    let particles = [], rockets = [], raf, launches = 0;
    const MAX = 14;

    function Rocket(x) {
      this.x = x;
      this.y = canvas.height;
      this.vy = -(Math.random() * 7 + 9);
      this.targetY = canvas.height * (0.08 + Math.random() * 0.38);
      this.color = COLORS[Math.floor(Math.random() * COLORS.length)];
      this.trail = [];
    }

    function burst(x, y, color) {
      const n = 90 + Math.floor(Math.random() * 50);
      for (let i = 0; i < n; i++) {
        const a = (Math.PI * 2 / n) * i + Math.random() * 0.2;
        const s = Math.random() * 5 + 1.5;
        particles.push({
          x, y, vx: Math.cos(a) * s, vy: Math.sin(a) * s - 1,
          color, size: Math.random() * 2.8 + 0.8,
          life: 1, decay: 0.011 + Math.random() * 0.016
        });
      }
    }

    function fire() {
      rockets.push(new Rocket(canvas.width * (0.1 + Math.random() * 0.8)));
      launches++;
      if (launches < MAX) setTimeout(fire, 350 + Math.random() * 550);
    }

    function tick() {
      ctx.fillStyle = 'rgba(0,0,0,0.13)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      rockets.forEach((r, ri) => {
        r.trail.push({ x: r.x, y: r.y });
        if (r.trail.length > 9) r.trail.shift();
        r.trail.forEach((pt, ti) => {
          ctx.save();
          ctx.globalAlpha = (ti / r.trail.length) * 0.55;
          ctx.fillStyle = r.color;
          ctx.beginPath();
          ctx.arc(pt.x, pt.y, 2, 0, Math.PI * 2);
          ctx.fill();
          ctx.restore();
        });
        r.y += r.vy; r.vy += 0.22;
        if (r.y <= r.targetY || r.vy >= 0) {
          burst(r.x, r.y, r.color);
          rockets.splice(ri, 1);
        }
      });

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx; p.y += p.vy;
        p.vy += 0.07; p.vx *= 0.97;
        p.life -= p.decay;
        ctx.save();
        ctx.globalAlpha = Math.max(0, p.life);
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
        if (p.life <= 0) particles.splice(i, 1);
      }

      if (rockets.length || particles.length) raf = requestAnimationFrame(tick);
      else ctx.clearRect(0, 0, canvas.width, canvas.height);
    }

    setTimeout(fire, 200);
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }

  // ── 彈窗建立 ───────────────────────────────────────────────────
  function showPopup(celebrants) {
    sessionStorage.setItem(SESSION_KEY, '1');

    const isSingle = celebrants.length === 1;
    const avatarsHTML = celebrants.map(v => `
      <div style="display:flex;flex-direction:column;align-items:center;gap:0.4rem;flex:0 0 auto">
        <img src="${v.avatar}" alt="${v.name}" style="
          width:${isSingle ? 88 : 70}px;height:${isSingle ? 88 : 70}px;
          border-radius:50%;border:3px solid #feca57;object-fit:cover;
          box-shadow:0 4px 20px rgba(0,0,0,0.35)">
        <span style="font-size:${isSingle ? 1.05 : 0.9}rem;font-weight:900;color:#fff;
          text-shadow:0 1px 4px rgba(0,0,0,0.4);max-width:120px;
          overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${v.name}</span>
        <span style="font-size:0.8rem;color:rgba(255,255,255,0.82);font-weight:600">${v.birthday}</span>
      </div>`).join('');

    const css = `
      @keyframes _mcFadeIn  { from{opacity:0}to{opacity:1} }
      @keyframes _mcSlideUp { from{transform:translateY(36px);opacity:0}to{transform:translateY(0);opacity:1} }
      @keyframes _mcCakeBob { 0%,100%{transform:rotate(-8deg) scale(1)} 50%{transform:rotate(8deg) scale(1.08)} }
      #_mcBdayCard { animation: _mcSlideUp 0.5s ease 0.1s both; }
      #_mcBdayCake { animation: _mcCakeBob 1.8s ease-in-out infinite; display:inline-block; }
      #_mcBdayCelebBtn:hover { transform:scale(1.06) !important; }
    `;

    const overlay = document.createElement('div');
    overlay.id = '_mcBdayOverlay';
    Object.assign(overlay.style, {
      position:'fixed', inset:'0', zIndex:'99999',
      background:'rgba(0,0,0,0.75)',
      display:'flex', alignItems:'center', justifyContent:'center',
      animation:'_mcFadeIn 0.35s ease'
    });

    overlay.innerHTML = `
      <style>${css}</style>
      <canvas id="_mcBdayCanvas" style="position:fixed;inset:0;width:100%;height:100%;pointer-events:none;z-index:0"></canvas>
      <div id="_mcBdayCard" style="
        position:relative;z-index:1;
        background:linear-gradient(160deg,#12122a 0%,#1a1a3e 55%,#0d2b50 100%);
        border:1.5px solid rgba(255,255,255,0.14);
        border-radius:22px;
        padding:2rem 2.2rem 1.8rem;
        max-width:460px;width:90%;
        text-align:center;
        box-shadow:0 28px 90px rgba(0,0,0,0.55);
      ">
        <button id="_mcBdayClose" style="
          position:absolute;top:0.75rem;right:0.75rem;
          background:rgba(255,255,255,0.1);border:1px solid rgba(255,255,255,0.2);
          border-radius:50%;width:32px;height:32px;cursor:pointer;
          color:rgba(255,255,255,0.75);font-size:1rem;line-height:1;
          display:flex;align-items:center;justify-content:center;
          transition:background 0.15s;
        ">✕</button>

        <div id="_mcBdayCake" style="font-size:3.2rem;margin-bottom:0.4rem">🎂</div>
        <h2 style="color:#feca57;font-size:1.2rem;font-weight:900;margin:0 0 0.3rem;letter-spacing:0.02em">
          🎉 今天是特別的日子！
        </h2>
        <p style="color:rgba(255,255,255,0.65);font-size:0.83rem;margin:0 0 1.4rem">
          以下成員今天生日，快一起去慶祝吧！
        </p>

        <div style="display:flex;justify-content:center;gap:1.2rem;flex-wrap:wrap;margin-bottom:1.6rem">
          ${avatarsHTML}
        </div>

        <div style="display:flex;gap:0.75rem;justify-content:center;flex-wrap:wrap">
          <a id="_mcBdayCelebBtn" href="birthday.html" style="
            background:linear-gradient(135deg,#f06292 0%,#ce93d8 100%);
            color:white;text-decoration:none;
            padding:0.65rem 1.6rem;border-radius:50px;
            font-weight:800;font-size:0.9rem;
            box-shadow:0 4px 18px rgba(240,98,146,0.45);
            transition:transform 0.15s;
          ">🎉 一起去慶祝！</a>
          <button id="_mcBdayLater" style="
            background:rgba(255,255,255,0.08);
            border:1px solid rgba(255,255,255,0.22);
            color:rgba(255,255,255,0.65);
            padding:0.65rem 1.2rem;border-radius:50px;
            cursor:pointer;font-size:0.83rem;font-weight:600;
          ">之後再說</button>
        </div>
      </div>`;

    document.body.appendChild(overlay);

    launchFireworks(overlay.querySelector('#_mcBdayCanvas'));

    function close() {
      overlay.style.opacity = '0';
      overlay.style.transition = 'opacity 0.3s ease';
      setTimeout(() => overlay.remove(), 310);
    }
    overlay.querySelector('#_mcBdayClose').addEventListener('click', close);
    overlay.querySelector('#_mcBdayLater').addEventListener('click', close);
    overlay.addEventListener('click', e => { if (e.target === overlay) close(); });
  }

  // ── 初始化 ─────────────────────────────────────────────────────
  function run() {
    const src = (window.vtubers && Array.isArray(window.vtubers)) ? window.vtubers : FALLBACK;
    const today = src.filter(v => isToday(parseBd(v.birthday)));
    if (today.length === 0) return;
    showPopup(today);
  }

  const DELAY = 1800;
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => setTimeout(run, DELAY));
  } else {
    setTimeout(run, DELAY);
  }
})();
