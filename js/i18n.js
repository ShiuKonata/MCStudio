// ── MC組事務所 多語系支援（i18n）────────────────────────────────
// 語言：繁體中文（zh-TW，預設）、日本語（ja）
// 使用方式：T('key') 回傳目前語系的翻譯字串
// 變數替換：T('key', { name: '名前' }) → 替換字串中的 {name}
// ─────────────────────────────────────────────────────────────
(function () {
  const LANG_KEY = 'mc_lang';

  // ── 翻譯字典 ────────────────────────────────────────────────
  const translations = {
    'zh-TW': {
      // 語言切換按鈕（顯示「切換到另一語言」）
      'lang.toggle': '日本語',
      // Navbar
      'nav.subtitle': '虛擬 YouTuber 介紹站 ✦ Virtual YouTuber Fan Site',
      'nav.fanNotice': '非預見娛樂官方網站',
      'nav.home':     '🏠 首頁',
      'nav.vtubers':  '⭐ Vtuber 一覽',
      'nav.merch':    '🛍️ 周邊商品',
      'nav.feedback': '🐞 回報問題',
      // Footer
      'footer.madeBy':  '由粉絲用愛製作',
      'footer.source':  '資料來源與圖源：資訊來自預見娛樂官方網站資訊與官方公開圖庫，部分來自網路公開資訊，部分公開圖源則由懶貓（BOSS）提供',
      // Fan notice popup (index.html)
      'fanNotice.title':    '歡迎來到 MC組事務所！',
      'fanNotice.badge':    '📢 訪客須知',
      'fanNotice.fan':      '粉絲自製的介紹站',
      'fanNotice.notOfficial': '並非預見娛樂官方網站',
      'fanNotice.source':   '所有資訊來自官方公開資訊，',
      'fanNotice.love':     '由 MC 組粉絲們用愛整理維護 💚',
      'fanNotice.close':    '我知道了，繼續探索 →',
      'fanNotice.remember': '不再顯示此提示',
      // index.html hero & about
      'index.badge':        '🐸 歡迎來到Vtuber世界',
      'index.explore':      '🐸 開始探索 →',
      'about.allVtubers':   '⭐ 前往 Vtuber 一覽',
      'about.schedule':     '📅 全體直播行程表',
      'about.love':         '粉絲的愛',
      'about.streamers':    '位主播',
      'about.gen':          '世代',
      // vtubers.html hero
      'vtubers.hero.title':    '⭐ Vtuber 一覽',
      'vtubers.hero.subtitle': '點擊卡片查看每位主播的詳細介紹與相關連結',
      'vtubers.search':        '搜尋名字、團體或標籤…',
      // main.js
      'filter.all':     '全部',
      'card.debut':     '出道',
      'card.viewDetail':'✦ 查看詳細介紹',
      'noResults':      '找不到相關 Vtuber，試試其他關鍵字吧！',
      // detail.js — tab 標籤
      'tab.profile':     '🐸 個人介紹',
      'tab.refsheet':    '🎨 三視圖',
      'tab.trivia':      '💡 小知識',
      'tab.schedule':    '📅 行程預覽',
      'tab.livestreams': '📺 直播存檔',
      'tab.member':      '🔒 會員直播',
      'tab.videos':      '🎵 原創曲&Cover',
      'tab.ytshorts':    '📱 Shorts官方剪輯',
      'tab.shorts':      '📱 最新Shorts',
      'tab.wishes':      '🎍 新年願望',
      'tab.gallery':     '🖼️ 畫冊',
      'tab.songstats':   '🎵 歌曲統計',
      'tab.clips':       '🎬 熱門剪輯推薦',
      // detail.js — 個人介紹 meta
      'meta.company':    '所屬公司',
      'meta.team':       '團體名稱',
      'meta.generation': '世代',
      'meta.debut':      '出道日期',
      'meta.birthday':   '生日',
      // detail.js — 出道計時器
      'debut.title': '出道',
      'debut.day':   '日',
      'debut.hour':  '時',
      'debut.min':   '分',
      'debut.sec':   '秒',
      // detail.js — 個人介紹區塊
      'profile.tags':      '標籤',
      'profile.about':     '關於 {name}',
      'profile.tagline':   '口頭禪',
      'profile.noTagline': '（待新增）',
      // BGM
      'bgm.label':  '🎵 背景音樂',
      'bgm.status': '點擊播放',
      // 側欄導航
      'sidebar.allVtubers': '⭐ 所有 Vtuber',
      // 小知識
      'trivia.fanName': '👥 粉絲名稱',
      'trivia.hashtag': '# 主題標籤',
      'trivia.goal':    '🎯 未來目標',
      'trivia.pending': '（待填入）',
      // 三視圖
      'refsheet.pending':    '三視圖圖片待上傳',
      'refsheet.verPending': '{ver} 圖片待上傳',
      // 影片篩選
      'videos.all':      '全部',
      'videos.original': '🎼 原創曲',
      'videos.cover':    '🎤 Cover',
      'video.pending':   '影片待設定',
      'noTitle':         '（無標題）',
      // Shorts
      'shorts.subtitle': '官方剪輯最新前三短片 Shorts，點擊前往 YouTube 觀看',
      // 熱門剪輯
      'clips.music':     '🎶 熱門音樂剪輯',
      'clips.video':     '🎬 熱門影片剪輯',
      'clips.musicDesc': '非官方粉絲剪輯熱門音樂，點擊前往 YouTube 觀看',
      'clips.videoDesc': '非官方粉絲剪輯熱門影片，點擊前往 YouTube 觀看',
      'clips.channel':   '頻道 ',
      // 行程
      'schedule.subtitle':  '每週行程待機室與最新排程',
      'schedule.pending':   '行程待設定',
      'schedule.playBtn':   '▶ 前往行程表影片',
      'schedule.toYouTube': '前往 YouTube 頻道',
      // 會員直播
      'member.notice':    '以下為會員限定直播，需加入頻道會員才能觀看',
      'member.join':      '加入會員 →',
      'member.badge':     '🔒 會員',
      'member.emptyAll':  '尚無會員直播資料',
      'member.emptyYear': '{year} 年尚無資料',
      // 搜尋 / 載入
      'search.ls':     '搜尋直播標題或月份（例：03）',
      'search.mem':    '搜尋標題或月份（例：03）',
      'search.yts':    '搜尋標題或月份（例：03）',
      'search.song':   '搜尋歌名…',
      'loadMore':      '載入更多',
      'loading':       '載入中…',
      'loadFail':      '⚠️ 載入失敗，請稍後再試',
      'loadFail.bare': '載入失敗，請稍後再試',
      'noApiKey':      '尚未設定 YouTube API 金鑰',
      'found.videos':  '找到 {n} / {total} 部',
      'found.streams': '找到 {n} / {total} 部直播',
      'found.songs':   '找到 {n} / {total} 首',
      'noShorts':      '尚無 Shorts 資料',
      'noShorts.year': '{year} 年尚無 Shorts',
      'noStreams':      '尚無直播存檔',
      'noStreams.year': '{year} 年尚無直播存檔',
      'apiError':      'API 錯誤：{msg}',
      // 畫冊
      'gallery.memberLevel': '會員等級',
      'gallery.colorCat':    '顏色分類',
      'gallery.all':         '🎨 全部',
      'gallery.deep':        '💎 深度會員',
      'gallery.basic':       '⭐ 一般會員',
      'gallery.red':    '紅', 'gallery.yellow': '黃', 'gallery.green': '綠',
      'gallery.blue':   '藍', 'gallery.purple': '紫', 'gallery.black': '黑',
      'gallery.white':  '白', 'gallery.other': '其他',
      'gallery.orig':    '全身圖 共 {n} 張',
      'gallery.variant': '白底圖 {n} / {total} 張',
      // 歌曲統計
      'ss.date':      '統計截至 {date}',
      'ss.total':     '🎵 總共唱了 <strong>{n}</strong> 首',
      'ss.unique':    '✨ 不重複 <strong>{n}</strong> 首',
      'ss.top3':      '🏆 演唱最多次',
      'ss.col.no':    '#',
      'ss.col.name':  '歌名',
      'ss.col.lang':  '語言',
      'ss.col.count': '次數',
      // 新年願望表格
      'wishes.no':      'No.',
      'wishes.item':    '項目',
      'wishes.goal':    '目標',
      'wishes.done':    '是否達成',
      'wishes.pending': '{year} 年願望待新增',
      // 直播回放徽章
      'ls.replayBadge': '直播回放',
      // YouTube modal
      'ytModal.fallback': '▶ 若無法在此播放，點此前往 YouTube 觀看',
      // 找不到 Vtuber
      'notFound.title': '找不到此 Vtuber',
      'notFound.back':  '← 返回首頁',
    },

    'ja': {
      // 語言切換按鈕
      'lang.toggle': '中文',
      // Navbar
      'nav.subtitle': 'バーチャルYouTuber紹介サイト ✦ Virtual YouTuber Fan Site',
      'nav.fanNotice': '予見エンターテインメント非公式サイト',
      'nav.home':     '🏠 ホーム',
      'nav.vtubers':  '⭐ Vtuber一覧',
      'nav.merch':    '🛍️ グッズ',
      'nav.feedback': '🐞 バグ報告',
      // Footer
      'footer.madeBy':  'ファンが愛情を込めて制作',
      'footer.source':  '情報・画像出典：予見エンターテインメント公式サイト・公式公開画像より。一部ネット上の公開情報、一部画像はレイジャ（BOSS）提供。',
      // Fan notice popup
      'fanNotice.title':    'MC組事務所へようこそ！',
      'fanNotice.badge':    '📢 来場者へのお知らせ',
      'fanNotice.fan':      'ファン制作の紹介サイト',
      'fanNotice.notOfficial': '予見エンターテインメントの公式サイトではありません',
      'fanNotice.source':   'すべての情報は公式公開情報を基にしており、',
      'fanNotice.love':     'MCグループのファンが愛情を込めて整理・維持しています 💚',
      'fanNotice.close':    'わかりました、探索へ →',
      'fanNotice.remember': '次回から表示しない',
      // index.html hero & about
      'index.badge':     '🐸 Vtuberの世界へようこそ',
      'index.explore':   '🐸 探索を始める →',
      'about.allVtubers':'⭐ Vtuber一覧へ',
      'about.schedule':  '📅 全体配信スケジュール',
      'about.love':      '∞の愛',
      'about.streamers': '名の配信者',
      'about.gen':       '期生',
      // vtubers.html hero
      'vtubers.hero.title':    '⭐ Vtuber一覧',
      'vtubers.hero.subtitle': 'カードをクリックして各配信者の詳細情報とリンクを確認',
      'vtubers.search':        '名前・グループ・タグで検索…',
      // main.js
      'filter.all':     'すべて',
      'card.debut':     'デビュー',
      'card.viewDetail':'✦ 詳細を見る',
      'noResults':      '該当するVtuberが見つかりません。他のキーワードをお試しください。',
      // detail.js — tab 標籤
      'tab.profile':     '🐸 プロフィール',
      'tab.refsheet':    '🎨 三面図',
      'tab.trivia':      '💡 トリビア',
      'tab.schedule':    '📅 スケジュール',
      'tab.livestreams': '📺 配信アーカイブ',
      'tab.member':      '🔒 メン限配信',
      'tab.videos':      '🎵 オリジナル曲＆Cover',
      'tab.ytshorts':    '📱 公式Shorts',
      'tab.shorts':      '📱 最新Shorts',
      'tab.wishes':      '🎍 新年の願い',
      'tab.gallery':     '🖼️ 画冊',
      'tab.songstats':   '🎵 歌曲統計',
      'tab.clips':       '🎬 人気クリップ',
      // detail.js — 個人介紹 meta
      'meta.company':    '所属会社',
      'meta.team':       'グループ名',
      'meta.generation': '期生',
      'meta.debut':      'デビュー日',
      'meta.birthday':   '誕生日',
      // detail.js — 出道計時器
      'debut.title': 'デビューから',
      'debut.day':   '日',
      'debut.hour':  '時',
      'debut.min':   '分',
      'debut.sec':   '秒',
      // detail.js — 個人介紹區塊
      'profile.tags':      'タグ',
      'profile.about':     '{name}について',
      'profile.tagline':   '口癖',
      'profile.noTagline': '（未設定）',
      // BGM
      'bgm.label':  '🎵 BGM',
      'bgm.status': 'クリックして再生',
      // 側欄導航
      'sidebar.allVtubers': '⭐ 全Vtuber一覧',
      // 小知識
      'trivia.fanName': '👥 ファン名称',
      'trivia.hashtag': '# ハッシュタグ',
      'trivia.goal':    '🎯 今後の目標',
      'trivia.pending': '（未設定）',
      // 三視圖
      'refsheet.pending':    '三面図画像 アップロード待ち',
      'refsheet.verPending': '{ver} 画像 アップロード待ち',
      // 影片篩選
      'videos.all':      'すべて',
      'videos.original': '🎼 オリジナル曲',
      'videos.cover':    '🎤 Cover',
      'video.pending':   '動画未設定',
      'noTitle':         '（タイトルなし）',
      // Shorts
      'shorts.subtitle': '公式最新Shorts（上位3本）。クリックしてYouTubeで視聴',
      // 熱門剪輯
      'clips.music':     '🎶 人気音楽クリップ',
      'clips.video':     '🎬 人気動画クリップ',
      'clips.musicDesc': '非公式ファン制作の人気音楽。クリックしてYouTubeで視聴',
      'clips.videoDesc': '非公式ファン制作の人気動画。クリックしてYouTubeで視聴',
      'clips.channel':   'チャンネル ',
      // 行程
      'schedule.subtitle':  '毎週のスケジュール待機室と最新予定',
      'schedule.pending':   'スケジュール未設定',
      'schedule.playBtn':   '▶ スケジュール動画を見る',
      'schedule.toYouTube': 'YouTubeチャンネルへ',
      // 會員直播
      'member.notice':    'メンバー限定配信です。チャンネルメンバーシップ加入後ご覧いただけます',
      'member.join':      'メンバーになる →',
      'member.badge':     '🔒 会員',
      'member.emptyAll':  '会員限定配信データがありません',
      'member.emptyYear': '{year}年のデータがありません',
      // 搜尋 / 載入
      'search.ls':     '配信タイトル・月（例：03）で検索',
      'search.mem':    'タイトル・月（例：03）で検索',
      'search.yts':    'タイトル・月（例：03）で検索',
      'search.song':   '曲名を検索…',
      'loadMore':      'もっと読み込む',
      'loading':       '読み込み中…',
      'loadFail':      '⚠️ 読み込みに失敗しました。後でもう一度お試しください',
      'loadFail.bare': '読み込みに失敗しました。後でもう一度お試しください',
      'noApiKey':      'YouTube APIキーが設定されていません',
      'found.videos':  '{n} / {total} 本 見つかりました',
      'found.streams': '{n} / {total} 本の配信 見つかりました',
      'found.songs':   '{n} / {total} 曲 見つかりました',
      'noShorts':      'Shortsデータがありません',
      'noShorts.year': '{year}年のShortsがありません',
      'noStreams':      '配信アーカイブがありません',
      'noStreams.year': '{year}年の配信アーカイブがありません',
      'apiError':      'APIエラー：{msg}',
      // 畫冊
      'gallery.memberLevel': 'メンバーシップ',
      'gallery.colorCat':    'カラー分類',
      'gallery.all':         '🎨 すべて',
      'gallery.deep':        '💎 上位会員',
      'gallery.basic':       '⭐ 一般会員',
      'gallery.red':    '赤', 'gallery.yellow': '黄', 'gallery.green': '緑',
      'gallery.blue':   '青', 'gallery.purple': '紫', 'gallery.black': '黒',
      'gallery.white':  '白', 'gallery.other': 'その他',
      'gallery.orig':    '全身図 全{n}枚',
      'gallery.variant': '白背景図 {n} / {total}枚',
      // 歌曲統計
      'ss.date':      '集計日：{date}',
      'ss.total':     '🎵 合計 <strong>{n}</strong> 曲',
      'ss.unique':    '✨ ユニーク <strong>{n}</strong> 曲',
      'ss.top3':      '🏆 最多演唱回数',
      'ss.col.no':    '#',
      'ss.col.name':  '曲名',
      'ss.col.lang':  '言語',
      'ss.col.count': '回数',
      // 新年願望表格
      'wishes.no':      'No.',
      'wishes.item':    '項目',
      'wishes.goal':    '目標',
      'wishes.done':    '達成可否',
      'wishes.pending': '{year}年の願い 未設定',
      // 直播回放徽章
      'ls.replayBadge': 'アーカイブ',
      // YouTube modal
      'ytModal.fallback': '▶ 再生できない場合はこちらからYouTubeで視聴',
      // 找不到 Vtuber
      'notFound.title': 'Vtuberが見つかりません',
      'notFound.back':  '← ホームに戻る',
    },
  };

  // ── 目前語系（讀 localStorage，預設 zh-TW）──────────────────
  let _lang = 'zh-TW';
  try { _lang = localStorage.getItem(LANG_KEY) || 'zh-TW'; } catch (e) {}

  // ── 核心函式：取翻譯字串 ────────────────────────────────────
  window.T = function (key, vars) {
    const dict = translations[_lang] || translations['zh-TW'];
    let str = (dict[key] !== undefined) ? dict[key] : (translations['zh-TW'][key] || key);
    if (vars) {
      Object.entries(vars).forEach(function ([k, v]) {
        str = str.replace(new RegExp('\\{' + k + '\\}', 'g'), v);
      });
    }
    return str;
  };

  window.getLang = function () { return _lang; };

  window.setLang = function (lang) {
    _lang = lang;
    try { localStorage.setItem(LANG_KEY, lang); } catch (e) {}
    _applyDomTranslations();
    _updateToggleBtn();
    document.documentElement.lang = (lang === 'ja') ? 'ja' : 'zh-TW';
  };

  // ── DOM 翻譯套用 ─────────────────────────────────────────────
  function _applyDomTranslations() {
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      el.textContent = window.T(el.dataset.i18n);
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
      el.placeholder = window.T(el.dataset.i18nPlaceholder);
    });
    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      el.innerHTML = window.T(el.dataset.i18nHtml);
    });
  }

  function _updateToggleBtn() {
    const btn = document.getElementById('lang-toggle-btn');
    if (btn) btn.textContent = window.T('lang.toggle');
  }

  // ── DOMContentLoaded：注入語言切換按鈕 + 套用翻譯 ──────────
  document.addEventListener('DOMContentLoaded', function () {
    // 注入語言切換按鈕到 nav-links-bar
    const navLinksBar = document.querySelector('.nav-links-bar');
    if (navLinksBar) {
      const btn = document.createElement('button');
      btn.id        = 'lang-toggle-btn';
      btn.className = 'lang-toggle-btn';
      btn.textContent = window.T('lang.toggle');
      btn.addEventListener('click', function () {
        const newLang = (_lang === 'zh-TW') ? 'ja' : 'zh-TW';
        window.setLang(newLang);
        // vtuber 個人頁：需 reload 才能重新渲染所有動態內容
        if (document.getElementById('detail-root')) {
          window.location.reload();
        }
      });
      navLinksBar.appendChild(btn);
    }

    // 套用目前語系翻譯（非預設語系才需要套用）
    if (_lang !== 'zh-TW') {
      _applyDomTranslations();
    }
  });

})();
