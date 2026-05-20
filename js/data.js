const vtubers = [
  {
    id: "shiucoda",
    name: "詩雨蔻達",
    nameEn: "ShiuCoda",
    group: "預見娛樂",
    generation: "一期生",
    avatar: "https://pbs.twimg.com/profile_images/1932726820966969345/2mjbudV0_400x400.jpg",
    coverImage: "https://pbs.twimg.com/profile_banners/1613858607606665217/1707594955/1500x500",
    tagline: "",
    taglines: [
      { context: "", text: "窩跟ㄋ縮" },
      { context: "", text: "窩要嫁給妳" },
      { context: "", text: "瘋掉" },
      { context: "", text: "對簿幾" },
      { context: "", text: "窩給ㄋ跪" },
    ],
    description: "我是即將成為大統領的精靈CODA°(╭╮)° 跟隨我吧…嘿嘿✐☡",
    debut: "2023-02-25",
    birthday: "6月6日",
    tags: ["台灣", "預見娛樂", "一期生", "Exitus", "歌勢", "吉他彈唱", "傲嬌可愛", "188cm"],

    // 社群連結
    youtube: "https://www.youtube.com/@SHIUCODA",
    twitter:   "https://twitter.com/SHIUCODA",
    twitch:    "https://www.twitch.tv/sh1uc0da",
    facebook:  "https://www.facebook.com/SHIUCODA/",
    instagram: "https://www.instagram.com/shiucoda/",
    spreadsheet: "https://docs.google.com/spreadsheets/d/1hC-VJ2lyGj_uBfgybDi4ycdmQlxera42o1rNtdFXdH0/edit?gid=130416740#gid=130416740",

    // YouTube 頻道 ID（直播存檔用）
    youtubeChannelId: "UCuPHlMEd0cR-tvAYPjGWVwQ",
    ytApiKey: "AIzaSyBsmWLwQLY-8wszHDufVCZaGZ0RKkRjPlM",

    // 自訂相關連結（覆蓋預設 YT/Twitter/Twitch 按鈕）
    overrideLinks: [
      { label: 'Coda的大小事', url: 'https://docs.google.com/spreadsheets/d/1hC-VJ2lyGj_uBfgybDi4ycdmQlxera42o1rNtdFXdH0/edit?gid=130416740#gid=130416740', class: 'sheets',     icon: '📋' },
      { label: 'HiveBee',  url: 'https://www.hivebee.com.tw/ShiuCoda/Donate',     class: 'hivebee',    icon: '🐝' },
      { label: '深度會員', url: 'https://www.hivebee.com.tw/ShiuCoda/Subscribe', class: 'membership', icon: '💎' },
      { label: '棉花糖',   url: 'https://marshmallow-qa.com/sh1uc0da',           class: 'marshmallow', icon: '🍬' },
    ],

    videos: [
      { id: "5eQOI0VMG6E", title: "【原創】新年大快樂！！💧詩雨蔻達",                                               date: "2026-01-01" },
      { id: "dGNwgv3beyk", title: "【原創】哈士奇寶寶 💧詩雨蔻達【Official Music Video】",                          date: "2026-01-10" },
      { id: "2uU0Mchu7Ec", title: "【原創】 我們一起demo💧詩雨蔻達",                                               date: "2025-12-26" },
      { id: "qF5DLh8bI2U", title: "【Cover】タコピーの原罪ED『硝子の線』/ Tele 💧詩雨蔻達",                        date: "2025-08-01" },
      { id: "_DzQNbQW4L0", title: "【Cover】Take Me To The Beach/Imagine Dragons(ft. Ado)💧詩雨蔻達w/艾琳妮雅",    date: "2025-08-30" },
      { id: "DEekDZDIywE", title: "【Cover】 星座になれたら/結束バンド💧詩雨蔻達",                                  date: "2025-06-06" },
      { id: "gsjf_oEIm6E", title: "【Cover】 正直日記/美波 💧詩雨蔻達",                                            date: "2025-03-10" },
      { id: "_HEJNCB06z0", title: "【原創】 累累病demo💧詩雨蔻達",                                                 date: "2025-02-25" },
      { id: "WAyPv_ZylIw", title: "【Cover】VH (Vast & Hazy) /求救訊號💧詩雨蔻達",                                 date: "2024-12-18" },
      { id: "qdpJRT0EpJE", title: "【Cover】陳綺貞/太聰明💧詩雨蔻達",                                              date: "2024-12-11" },
      { id: "4yiVqGZNeXs", title: "【Cover】keshi/skeletons💧詩雨蔻達",                                            date: "2024-12-04" },
      { id: "goGim-G9110", title: "【原創】哈四期寶寶 (demo) 💧詩雨蔻達 / 作曲實驗室十月號",                        date: "2024-11-27" },
      { id: "BHI1jM0fwBs", title: "【Cover】たばこ/コレサワ💧詩雨蔻達",                                            date: "2024-08-26" },
      { id: "X-nTQRtbnfU", title: "【Cover】「ちゅ、多様性。」 💧詩雨蔻達",                                        date: "2024-04-01" },
      { id: "8MYxQVjZ3Rg", title: "【Cover】P丸様-シル・ヴ・プレジデント💧詩雨蔻達",                               date: "2024-02-25" },
      { id: "v_FYUw9MeDE", title: "【Cover】ポリスピカデリ- Rumor (ルーマー)💧詩雨蔻達",                            date: "2024-02-11" },
      { id: "Qc9n_f9saXw", title: "【Cover】小夜子acoustic ver💧詩雨蔻達",                                          date: "2023-08-05" },
      { id: "myLecThcnu0", title: "【Cover】imase - NIGHT DANCER 💧詩雨蔻達",                                       date: "2023-07-01" },
      { id: "bzMqxkyO3yA", title: "【Cover】メガテラ・ゼロ -この夜に乾杯 💧詩雨蔻達",                              date: "2023-02-25" },
      { id: "gMWt1w67ZFE", title: "【Cover】Memories/詩雨蔻達 | 吉他自彈自唱",                                     date: "2023-02-15" },
      { id: "-jdQoS_NwCQ", title: "【Cover】走建國路回家但後座少ㄌ泥/詩雨蔻達 | 吉他自彈自唱",                     date: "2023-02-06" },
      { id: "iasDIGQYtBw", title: "【Cover】緑黄色社会-mela! / 詩雨蔻達",                                          date: "2023-01-28" },
      { id: "XHuc832HAfY", title: "【Cover】食虫植物/ 詩雨蔻達 feat.茶浣熊@TanukiiDonCh | 吉他自彈自唱",           date: "2023-01-21" },
    ],

    // 剪輯頻道設定說明：
    //   label        : 子標籤名稱
    //   keywords     : 人名過濾（OR），不填則全收
    //   typeKeywords : 內容類型過濾（AND 搭配 keywords）；不填則全收
    //                  混合頻道可同時加入 musicClipsChannelIds 和 videoClipsChannelIds，
    //                  各自設不同 typeKeywords 達到自動分類

    // ── 熱門音樂剪輯（Cover / 歌回）────────────────
    musicClipsChannelIds: [
      { id: "UCsjWfH2QUTGlrFSurA5oj2w", label: "Konata閆娘", typeKeywords: ["歌回", "cover"] },                                                                       // 歌回總集篇 + Cover
      { id: "UCzqYJKopN_nYJBr7ep93jTA", label: "閃電流氓",      keywords: ["詩雨蔻達", "shiu coda", "shiucoda", "蔻達"], typeKeywords: ["cover", "吉他"] },            // 只抓 Cover
      // 孫小毛（UC4nZ-KbmFr21Qt1lN9rmbdQ）：無音樂剪輯，僅在 videoClipsChannelIds 保留精華影片
      { id: "UCpc15B6xb8OagNa7LScMOBg", label: "椪呱實驗室",    keywords: ["詩雨蔻達", "ShiuCoda", "shiucoda", "蔻達"], typeKeywords: ["cover", "guitar"] },  // 只抓詩雨蔻達的 Cover
      { id: "UCPbbNCUmcCG9wk82O_KElFg", label: "彭彭ぽんぽん",  keywords: ["詩雨蔻達", "shiu coda", "shiucoda", "蔻達"], typeKeywords: ["cover", "歌回"] },             // 混合頻道 → 只抓音樂
      { id: "UCh00s3u4osHhNx8BlSZsECg", label: "章魚虛タコ",    keywords: ["詩雨蔻達", "shiu coda", "shiucoda", "蔻達"] },                                             // 全部為 Cover
      { id: "UCHrOyfkspzM82TjnaAoxJmQ", label: "松鴉Jayauspice", keywords: ["詩雨蔻達", "shiu coda", "shiucoda", "蔻達"] },                                            // Guitar Cover
    ],

    // ── 熱門影片精華（直播精華 / Shorts / 遊戲精華）──────────
    // excludeKeywords：標題含任一關鍵字則排除（適合「非 Cover 以外全收」的混合頻道）
    // playlistId     ：UUSH + channelId[2:] = 該頻道 Shorts 專屬清單
    videoClipsChannelIds: [
      { id: "UCsjWfH2QUTGlrFSurA5oj2w", label: "Konata閆娘",   playlistId: "UUSHsjWfH2QUTGlrFSurA5oj2w", excludeKeywords: ["歌回", "cover"] },                           // 非音樂內容（排除歌回 & Cover）
      { id: "UCzqYJKopN_nYJBr7ep93jTA", label: "閃電流氓",      keywords: ["詩雨蔻達", "shiu coda", "shiucoda", "蔻達"], excludeKeywords: ["cover", "吉他"] },                    // 非 Cover 影片
      { id: "UC4nZ-KbmFr21Qt1lN9rmbdQ", label: "孫小毛",        keywords: ["詩雨蔻達", "shiu coda", "shiucoda", "蔻達"], typeKeywords: ["精華"], excludeKeywords: ["帕蘿妮", "帕帕"] },
      { id: "UCpc15B6xb8OagNa7LScMOBg", label: "椪呱實驗室",    keywords: ["詩雨蔻達", "ShiuCoda", "shiucoda", "蔻達"], excludeKeywords: ["cover", "guitar"] },  // 只抓詩雨蔻達的精華
      { id: "UCPbbNCUmcCG9wk82O_KElFg", label: "彭彭ぽんぽん",  keywords: ["詩雨蔻達", "shiu coda", "shiucoda", "蔻達"], typeKeywords: ["精華", "直播"] },
      { id: "UCv9MXWx8AW5BZ07OPJyf7jg", label: "鬧欸", keywords: ["Exitus"], excludeKeywords: ["帕蘿妮", "神無月鹿比", "鹿比", "艾琳妮雅", "歌回", "cover"] },
      { id: "UCMlvVMgOjH76AwolFgKEP1Q", label: "成彦なりひこ", keywords: ["詩雨蔻達", "ShiuCoda", "shiucoda"], excludeKeywords: ["歌回", "cover"] },  // 詩雨蔻達精華片段
    ],

    videoClips: [
      { id: "6DzGvlWL2CU", title: "當統領想給外送員小費時... | 詩雨蔻達 ShiuCoda" },
      { id: "UGFSG4Z4J38", title: "陶喆、蔡依琳 - 今天你要嫁給我 | 詩雨蔻達 ShiuCoda Cover" },
      { id: "UykHeePVhp0", title: "當ㄚ統手上拿到槍第一件事居然做的是..?" },
    ],

    scheduleVideoId:  "cCaZa-NTz0o",
    spreadsheetLabel: "Coda的大小事",   // 試算表按鈕文字
    scheduleTitle:    "大統領行程表",    // 行程頁標題

    bgmVideoId: "dGNwgv3beyk",  // 背景音樂影片 ID
    bgmStart:   0,             // 開始秒數（可調整到精華位置）
    bgmLabel:   "哈士奇寶寶",   // 播放器顯示的歌名

    // 三視圖（refSheets 陣列，每個版本一筆；欄位存在即顯示分頁）
    refSheets: [
      { version: "Ver 1.0", url: "images/Coda 三視圖.jpg" },
    ],

    // 歌曲統計（各年度 Google Sheets 統計頁 GID，填了才顯示分頁）
    songStatsGids: {
      "2026": "1765508669",
      "2025": "197402931",
      "2024": "1363418050",
      "2023": "695777376",
    },

    // 畫冊（圖片放在 images/shiucoda/gallery/ 資料夾）
    // 欄位說明：
    //   src    ：圖片路徑（必填）
    //   title  ：顯示名稱（選填；若留空則自動顯示檔案名稱）
    //   member ："深度" / "一般"（選填；填了才能用會員篩選）
    //   color  ：留空＝自動偵測主色；或手動填入 red/orange/yellow/green/blue/purple/black/white/other
    gallery: [
      // ── 深度會員 ──────────────────────────────────
      // color 有填 = 手動指定（不自動偵測）；沒填 = 自動偵測主色
      { src: "images/shiucoda/gallery/086.png",         member: "深度" },
      { src: "images/shiucoda/gallery/086-1.png",       member: "深度", color: "yellow" },
      { src: "images/shiucoda/gallery/brian.png",       member: "深度" },
      { src: "images/shiucoda/gallery/brian-1.png",     member: "深度", color: "black"  },
      { src: "images/shiucoda/gallery/feng.png",        member: "深度" },
      { src: "images/shiucoda/gallery/feng-1.png",      member: "深度", color: "red"    },
      { src: "images/shiucoda/gallery/HP.png",          member: "深度" },
      { src: "images/shiucoda/gallery/HP-1.png",        member: "深度" },
      { src: "images/shiucoda/gallery/Knos.png",        member: "深度" },
      { src: "images/shiucoda/gallery/Knos-1.png",      member: "深度" },
      { src: "images/shiucoda/gallery/Konata闆娘.png",   member: "深度" },
      { src: "images/shiucoda/gallery/Konata闆娘-1.png", member: "深度" },
      { src: "images/shiucoda/gallery/KT.png",          member: "深度" },
      { src: "images/shiucoda/gallery/KT-1.png",        member: "深度", color: "white"  },
      { src: "images/shiucoda/gallery/Lee提姆.png",      member: "深度" },
      { src: "images/shiucoda/gallery/Lee提姆-1.png",    member: "深度", color: "yellow" },
      { src: "images/shiucoda/gallery/Patrick.png",     member: "深度" },
      { src: "images/shiucoda/gallery/Patrick-1.png",   member: "深度", color: "white"  },
      { src: "images/shiucoda/gallery/WayneWang.png",   member: "深度" },
      { src: "images/shiucoda/gallery/WayneWang-1.png", member: "深度", color: "purple" },
      { src: "images/shiucoda/gallery/中文繁體字.png",    member: "深度" },
      { src: "images/shiucoda/gallery/中文繁體字-1.png",  member: "深度", color: "yellow" },
      { src: "images/shiucoda/gallery/孫小毛.png",       member: "深度" },
      { src: "images/shiucoda/gallery/孫小毛-1.png",     member: "深度" },
      { src: "images/shiucoda/gallery/果醬.png",         member: "深度" },
      { src: "images/shiucoda/gallery/果醬-1.png",       member: "深度" },
      { src: "images/shiucoda/gallery/松鴉.png",         member: "深度" },
      { src: "images/shiucoda/gallery/松鴉-1.png",       member: "深度" },
      { src: "images/shiucoda/gallery/彭彭.png",         member: "深度" },
      { src: "images/shiucoda/gallery/彭彭-1.png",       member: "深度", color: "green"  },
      { src: "images/shiucoda/gallery/渙奐.png",         member: "深度" },
      { src: "images/shiucoda/gallery/渙奐-1.png",       member: "深度" },
      { src: "images/shiucoda/gallery/瞌睡丸.png",       member: "深度" },
      { src: "images/shiucoda/gallery/瞌睡丸-1.png",     member: "深度" },
      { src: "images/shiucoda/gallery/老米.png",         member: "深度" },
      { src: "images/shiucoda/gallery/老米-1.png",       member: "深度" },
      { src: "images/shiucoda/gallery/羽冬酥.png",       member: "深度" },
      { src: "images/shiucoda/gallery/羽冬酥-1.png",     member: "深度" },
      { src: "images/shiucoda/gallery/芽芽王.png",       member: "深度" },
      { src: "images/shiucoda/gallery/芽芽王-1.png",     member: "深度", color: "black"  },
      { src: "images/shiucoda/gallery/翔名.png",         member: "深度" },
      { src: "images/shiucoda/gallery/翔名-1.png",       member: "深度" },
      { src: "images/shiucoda/gallery/肥宅快樂水.png",    member: "深度" },
      { src: "images/shiucoda/gallery/肥宅快樂水-1.png",  member: "深度", color: "green"  },
      { src: "images/shiucoda/gallery/詩玥.png",         member: "深度" },
      { src: "images/shiucoda/gallery/詩玥-1.png",       member: "深度", color: "yellow" },
      { src: "images/shiucoda/gallery/閃電流氓.png",      member: "深度" },
      { src: "images/shiucoda/gallery/閃電流氓-1.png",    member: "深度", color: "white"  },
      { src: "images/shiucoda/gallery/竣安.png",         member: "深度" },
      { src: "images/shiucoda/gallery/竣安-1.png",       member: "深度" },
      // ── 一般會員（待新增）──────────────────────────
    ],

    // 小知識（fanName 欄位存在即顯示分頁）
    fanName: "呱民",
    hashTags: [
      { label: "Live",   tag: "#c0dalive" },
      { label: "FanArt", tag: "#c0dart"   },
      { label: "All",    tag: "#c0daddy"  },
      { label: "Meme",   tag: "#詩雨願違" },
      { label: "Music",  tag: "#c0dalala" },
      { label: "R18",    tag: "#c0danude" },
    ],
    futureGoals: [
      "成為大家的桌布或被裱框",
      "出原創歌曲、一堆周邊",
      "帶給大家滿滿的能量",
      "跟很多人合唱、連動",
      "玩很多很多恐怖遊戲",
      "得到很多政治獻金",
    ],
    triviaLikes: [
      { label: "喜歡的樂團", items: ["擊沉女孩", "海豚刑警", "午夜乒乓", "甜約翰", "美秀集團", "芒果醬"] },
      { label: "喜歡的歌手", items: ["Vaundy", "acane", "163", "李浩偉"] },
      { label: "喜歡的顏色", items: ["紫丁香色"] },
      { label: "喜歡的食物", items: ["Fun Tower日式可麗餅", "舒芙蕾", "酸辣湯", "薄荷巧克力冰淇淋", "橘子"] },
    ],
    triviaHates: [
      { label: "討厭的東西", items: ["青椒", "茄子", "鴿子", "米粉"] },
      { label: "討厭的味道", items: ["薰衣草"] },
    ],

    // 會員限定直播（手動填入，id 填 YouTube 影片 ID）
    memberVideos: [
      { id: "bSATcgUVhpo", title: "桌寵最終版分享!!順便代抽💧詩雨蔻達", date: "2026-05-20" },
      { id: "3wQiTBf7iHk", title: "【會限】練練歌，聊聊(炫耀)會員福利!!💧詩雨蔻達 #CODA報報", date: "2026-03-25" },
      { id: "iawtSS8RxPk", title: "【會限】練歌練吉他，連做最簡單ㄉ事都像在復健💧詩雨蔻達", date: "2026-02-04" },
      { id: "2SfBMMaMLWY", title: "【會限】初次練歌台，絕對不是因為被逼到牆角ㄌ💧詩雨蔻達", date: "2025-11-25" },
      { id: "QTuPCPnCKD0", title: "【會限】來做哈寶的衣服(希望五根手指都安好)💧詩雨蔻達◬三次元蛙手露出注意", date: "2025-10-29" },
      { id: "WagLfY1NTRs", title: "【會限】跟我一起生寶寶!!💧詩雨蔻達", date: "2025-08-25" },
      { id: "0UtsWOfRS4Y", title: "【會限酒雜】每次酒雜都在爆言，不如直接在會限開好ㄌ💧詩雨蔻達", date: "2025-07-21" },
      { id: "3tvBE2kwOjY", title: "【會限】蛙手露出注意!! 去年ㄉ生日禮物竟然還沒拼完ㄇ?💧詩雨蔻達", date: "2025-06-30" },
      { id: "E0XHVbNPu78", title: "【會限】來搶先聽看看生日要發ㄉ那個吧✨💧詩雨蔻達", date: "2025-05-26" },
      { id: "NuGWOasZH6s", title: "【會限】生日已經開放收禮啦!!一起聊聊今年生日的計畫!!💧詩雨蔻達", date: "2025-03-24" },
      { id: "6OM1PiuNlKc", title: "【會限吃醋台】因為我是個大方的人所以會限ㄉ事就留在會限💧詩雨蔻達", date: "2025-02-17" },
      { id: "oLhxgQm7bjA", title: "【會限】在傷心欲絕的時候會寫出神麼樣的歌呢?💧詩雨蔻達", date: "2025-01-22" },
      { id: "jgFcr62d-84", title: "【會限】今年最後一次!! 來喝點小酒 💧詩雨蔻達", date: "2024-12-30" },
      { id: "G0MnRU-XJco", title: "【會限】好久沒跟大家一起拼拼圖!! 順便聊聊接下來ㄉ企劃 💧詩雨蔻達", date: "2024-11-26" },
      { id: "PJpK40hiMjo", title: "【會限】今天來拚生日禮物拿到的妙蛙種子樂高!!! 💧詩雨蔻達", date: "2024-10-21" },
      { id: "uJgCGluaqLs", title: "【會限】音樂祭爛醉談!! 關於阿統為了外交喝ㄍ爛醉差點去裸跑ㄉ小故事💧詩雨蔻達", date: "2024-10-07" },
      { id: "hsDtZyQNLiQ", title: "【會限】差不多要過聖誕節ㄌ!! 一起寫寫聖誕計畫!💧詩雨蔻達", date: "2024-09-24" },
      { id: "ewMKm_wjAck", title: "【會限】同步視聽，媽媽得癌症💧詩雨蔻達", date: "2024-08-26" },
      { id: "13iKUlA3eqk", title: "【會限】emo寫歌台，跟統領一起哭ㄅ💧詩雨蔻達", date: "2024-07-29" },
      { id: "fsJvUpuv3N8", title: "【會限】時隔兩個月又來寫歌啦~💧詩雨蔻達", date: "2024-06-24" },
      { id: "bZwgvwBpjnY", title: "【會限】蛙手拼樂高 # 10329💧詩雨蔻達", date: "2024-05-13" },
      { id: "BVj-LJVlYAs", title: "【飲酒歌回>轉會限】來把統領灌醉吧!! 調酒轉盤啟動!💧詩雨蔻達", date: "2024-04-27" },
      { id: "EOuyEZbpTbs", title: "【會限】想寫點神摸~寫情歌嗎?💧詩雨蔻達", date: "2024-04-15" },
      { id: "5-VzyA9JLpg", title: "【會限】開酒聊聊~~周年心得 & 未來💧詩雨蔻達", date: "2024-03-07" },
      { id: "lTlV_CEQTLY", title: "【會限】鳥鳥田，來自大統領的年節問候💧詩雨蔻達", date: "2024-02-05" },
      { id: "NcM1a2j1HPo", title: "【會限】金手指蔻達出沒代抽啦!把尼的未來交給我💧詩雨蔻達", date: "2024-01-15" },
      { id: "a4BBGd3a5PA", title: "【會限】聊聊那些跟錢錢有關的事💧詩雨蔻達", date: "2023-12-18" },
      { id: "VF8bqvRQVlY", title: "【會限-許願大會】有想看統領做的事或是企劃嗎? 在這邊許願吧! 💧詩雨蔻達", date: "2023-11-20" },
      { id: "0fIEpOXgK9Y", title: "【會限】把尼們骯髒的秘密都跟我說吧，CODA絕對不會怪尼的💧詩雨蔻達", date: "2023-10-30" },
      { id: "_gI_W6G49Gg", title: "【會限-同步視聽】葬送的芙莉蓮 ep.1-5 💧詩雨蔻達", date: "2023-10-13" },
      { id: "FmQoToebwao", title: "【會限】開箱小小CODA的壁畫，三次元牆壁露出注意!!💧詩雨蔻達", date: "2023-09-08" },
      { id: "2uLP3_v0LyQ", title: "【#歌枠】還債福利瑟瑟歌回..這麼早就瑟瑟真的好嗎🌡結束後直播檔轉300會限💧詩雨蔻達 #初見歡迎", date: "2023-08-16" },
      { id: "lxxppwJZFY8", title: "【會限】秘呱悄悄話 : 來聊聊統領當VT以來的心路歷程💧詩雨蔻達", date: "2023-08-11" },
      { id: "SymKhrtzd3w", title: "【會限-同步視聽】紫羅蘭永恆花園劇場版💧詩雨蔻達", date: "2023-07-19" },
      { id: "JG1-e0GiWFk", title: "【會限】統領原神初體驗就代抽!! 究竟金手指這個稱號還掛不掛得住呢?💧詩雨蔻達", date: "2023-05-13" },
      { id: "dDvl71efDfw", title: "【會限歌回】秘呱之歌搶先聽❤💧詩雨蔻達", date: "2023-04-29" },
      { id: "uZAWa35SEvE", title: "【會限】見證秘呱之歌的誕生過程(絕對沒有請AI幫我寫) 💧詩雨蔻達", date: "2023-04-07" },
      { id: "iARUXWRvT0g", title: "【會限】 Gartic Phone!! 一起來畫畫傳話啦!!!💧詩雨蔻達", date: "2023-03-21" },
    ],

    // 新年願望（每年填入項目、目標、是否達成）
    newYearWishes: {
      2026: [
        { item: "日文歌",     goal: "唱日文歌能更順暢的看懂平假名與片假名，不再依靠羅馬拼音，想嘗試唱日K看看",                                                                                                         achieved: "" },
        { item: "西文檢定",   goal: "考過西文檢定B1",                                                                                                                                                                achieved: "" },
        { item: "音樂祭",     goal: "參加國外音樂祭 CENTRAL26 / FUJI ROCK，並且能買伴手禮回來給呱民們",                                                                                                               achieved: "" },
        { item: "酷又幽默",   goal: "成為又酷又機智幽默的人。多看點書（重要）、分析好笑的關鍵；文字上的產出：例如讀後心得、歌詞、電影筆記之類",                                                                       achieved: "" },
        { item: "吉他500首",  goal: "挑戰彈奏500首吉他歌（目前286/500）",                                                                                                                                            achieved: "" },
        { item: "呱民手冊",   goal: "希望畫完呱民，出整本呱民手冊",                                                                                                                                                  achieved: "" },
        { item: "細心負責",   goal: "要做一個細心負責的人",                                                                                                                                                          achieved: "" },
        { item: "控制飲酒",   goal: "很難戒酒，所以要控制：酒精濃度高的酒最多1次2shot，啤酒最多一手，出門喝酒不碰高濃度",                                                                                            achieved: "" },
        { item: "深度溝通",   goal: "希望可以展開與觀眾的深度溝通",                                                                                                                                                  achieved: "" },
        { item: "玉山攻頂",   goal: "玉山攻頂!!",                                                                                                                                                                    achieved: "" },
        { item: "果斷",       goal: "要做果斷的人，不要猶豫不決",                                                                                                                                                    achieved: "" },
        { item: "陳綺貞全歌", goal: "長期挑戰：挑戰唱完全部陳綺貞的歌曲",                                                                                                                                           achieved: "" },
      ],
      2025: [
        { item: "快樂",     goal: "希望過得更快樂",                                                                       achieved: "✅ 完成" },
        { item: "時間管理", goal: "把時間安排得更好一點",                                                                  achieved: "還有進步空間" },
        { item: "柏德之門", goal: "把柏德之門玩完一周目",                                                                  achieved: "2026年過年有機會" },
        { item: "新突破",   goal: "希望今年能做點不一樣的事情，例如Vtuber / 直播 / 人生，能有點不一樣的突破",              achieved: "✅ 完成" },
        { item: "很酷很帥", goal: "成為很酷很帥的人，唱歌也要，像GD一樣玩世不恭",                                         achieved: "✅ 呱民說已經是了，完成" },
        { item: "搭遊輪",   goal: "搭遊輪出去玩",                                                                          achieved: "太忙辦不到" },
        { item: "過年新歌", goal: "如果能跟呱呱們過年，寫一首過年新歌",                                                    achieved: "沒有新歌了" },
      ],
      2024: [
        { item: "平安健康",   goal: "希望大家平安健康",                  achieved: "大家都生病" },
        { item: "爬玉山",     goal: "爬玉山",                             achieved: "只爬了第一座七星山，距離玉山還很遙遠" },
        { item: "還債",       goal: "希望把欠的債還完",                   achieved: "還不完" },
        { item: "3萬訂閱",    goal: "達到3萬訂閱",                        achieved: "✅ 達成！" },
        { item: "麥塊製藥",   goal: "蓋完麥塊詩雨製藥",                   achieved: "沒蓋" },
        { item: "玩遊戲",     goal: "多玩想玩的遊戲",                     achieved: "✅ 都有玩到" },
        { item: "升級電腦",   goal: "升級電腦",                           achieved: "沒升級（明年升級）" },
        { item: "V朋朋",      goal: "找V朋朋來家裡玩",                    achieved: "沒朋朋" },
        { item: "跑場",       goal: "多聽團跑場",                         achieved: "✅ 完成！跑到爛" },
        { item: "呱民委託",   goal: "呱民委託畫完",                       achieved: "畫不完" },
        { item: "樂器",       goal: "買烏克莉莉夥伴、買電吉他",           achieved: "✅ 完成！有抹布子囉" },
        { item: "胖起來",     goal: "胖起來",                             achieved: "沒胖" },
      ],
    },

    color: "#B9C468"   // SHIUCODA 代表色
  },

  {
    id: "rumi",
    name: "懶貓子Rumi",
    nameEn: "Rumi",
    group: "預見娛樂",
    generation: "零期生",
    avatar: "https://pbs.twimg.com/profile_images/1907308386783539200/Ubw0gB20_400x400.jpg",
    coverImage: "https://pbs.twimg.com/profile_banners/1407616438886486021/1693552071/1500x500",
    tagline: "",
    taglines: [
      { context: "", text: "喵好" },
      { context: "", text: "DDだまよ!!DD不可以" },
      { context: "", text: "我很可愛請給我錢" }
    ],
    description: "大家好，我是懶貓子，我是日本人，初次見面，請多指教，感謝",
    debut: "2021-08-06",
    birthday: "8月13日",
    tags: ["日本", "預見娛樂", "零期生", "懶貓子", "妹系", "大學姐"],

    // 社群連結
    youtube: "https://www.youtube.com/@Lanmewko",
    youtubeChannelId: "UCswRX8mNNdn1fjRctZqzjgA",
    ytApiKey: "AIzaSyBsmWLwQLY-8wszHDufVCZaGZ0RKkRjPlM",
    twitter: "https://twitter.com/Rumi__0813",
    twitch: "https://www.twitch.tv/rumi0813",
    facebook:  "https://www.facebook.com/lanmewko",
    instagram: "https://www.instagram.com/lanmewko/",
    spreadsheet: "https://docs.google.com/spreadsheets/d/1Que-F4MyXCj5cVTquXECu9oAF-GQF46w543Ik5jxoyU/edit?gid=0#gid=0",

    overrideLinks: [
      { label: '懶貓子Rumi的大小事', url: 'https://docs.google.com/spreadsheets/d/1Que-F4MyXCj5cVTquXECu9oAF-GQF46w543Ik5jxoyU/edit?gid=0#gid=0', class: 'sheets', icon: '📋' },
      { label: 'HiveBee',  url: 'https://www.hivebee.com.tw/lanmewko/Donate',     class: 'hivebee',    icon: '🐝' },
      { label: '深度會員', url: 'https://www.hivebee.com.tw/lanmewko/Subscribe',  class: 'membership', icon: '💎' },
      { label: '棉花糖',   url: 'https://marshmallow-qa.com/lanmewko',            class: 'marshmallow', icon: '🍬' },
    ],

    videos: [
      { id: "S24248F5QxQ", title: "【Cover】【生日紀念】好想愛這個世界啊/この世界を愛したい 日文ver.【歌ってみた】",                             date: "2025-08-13" },
      { id: "PRstz7oaMNs", title: "【Cover】【距離生日還有一個月🍰✨】テレパシ - DECO*27【歌ってみた】",                                        date: "2025-07-13" },
      { id: "4G1RBpF2ySc", title: "【Cover】瞬間ハートビート / 歌ってみた",                                                                    date: "2024-11-17" },
      { id: "2l3YXy7hKHY", title: "【Cover】【歌ってみた】シカ色デイズ (Shikairo Days) /シカ部 (Deer Club)",                                   date: "2024-08-16" },
      { id: "gVUi_W9l__Q", title: "【Cover】5ma之歌Challeng💭💞 #5machallenge #shorts",                                                       date: "2024-03-21" },
      { id: "AVP8tBh9IFo", title: "【Cover】KICK BACK - 米津玄師 -Cover- 1O feat. Rumi/懶貓子,ボスナ",                                        date: "2024-01-16" },
      { id: "jz-BHXgTf2Q", title: "【Cover】Rabbit - Cover by 杏仁ミルｘRumi懶貓子【歌ってみた】",                                            date: "2023-08-16" },
      { id: "4pWZQJy7jPY", title: "【Cover】【會員限定Full Ver.】点描の唄 (feat.井上苑子) / Mrs. GREEN APPLE",                                  date: "2023-06-06" },
      { id: "CaKBHMQUF48", title: "【Cover】ロキ - 涅默Nemesis ft. Rumi懶貓子",                                                               date: "2023-03-30" },
      { id: "HTnl7qKiqtA", title: "【Cover】magnet / 浠Mizuki X Rumi懶貓子",                                                                  date: "2022-12-24" },
      { id: "im9eQdSsN6g", title: "【Cover】【雲圖計劃-】OP-EMOCODE 【歌ってみた】",                                                           date: "2022-11-22" },
      { id: "wSykZzuxAv0", title: "【Cover】【歌ってみた】１・２・３／After the Rain ｜covered by Rumi懶貓子 × 浠Mizuki",                      date: "2022-11-18" },
      { id: "X1T4tqdlrZQ", title: "【Cover】【3D cover】未知未踏アルスハイル【#Rumi3D】【CC字幕】｜Rumi/懶貓子",                               date: "2022-08-17" },
      { id: "10TDfSzRnp8", title: "【原創曲】【3Ddance ver.】NON STOP SOUL!!!【#Rumi3D】【CC字幕】｜Rumi/懶貓子",                              date: "2022-08-16" },
      { id: "ugTNvBA3-So", title: "【原創曲】【3Ddance ver.】笑顔はここにある【#Rumi3D】｜Rumi/懶貓子",                                        date: "2022-08-16" },
      { id: "1JGLMnfr67c", title: "【Cover】【一周年紀念】愛言葉Ⅳ【歌ってみた】｜covered by Rumi懶貓子",                                      date: "2022-08-06" },
      { id: "K-6YH5t-HgU", title: "【原創曲】【Original】笑顔はここにある｜Rumi/懶貓子",                                                      date: "2022-06-26" },
      { id: "F6MUc26j7fE", title: "【Cover】【歌ってみた】バレンタイン・キッス｜covered by Rumi懶貓子",                                        date: "2022-02-14" },
      { id: "Xfv0OS-M7vM", title: "【Cover】【歌ってみた】告白氣球｜covered by Rumi懶貓子",                                                   date: "2022-01-22" },
      { id: "lvP5tYintxg", title: "【Cover】【歌ってみた】クリスマスソング｜covered by Rumi懶貓子",                                            date: "2021-12-25" },
      { id: "8FmVj4FyO5U", title: "【Cover】【歌ってみた】ライオン ｜covered by Rumi懶貓子 × 浠Mizuki",                                       date: "2021-11-20" },
      { id: "3uclMILBoGY", title: "【Cover】GETCHA! / Rumi懶貓子 × 浠Mizuki 【歌ってみた】",                                                  date: "2021-10-13" },
      { id: "mXCV8MdAfVE", title: "【Cover】【歌ってみた】忘れたいことばっかだ｜covered by Rumi/懶貓子",                                       date: "2021-09-25" },
      { id: "HQBR4rTikw4", title: "【Cover】【歌ってみた】熱愛105°C的你 #shorts｜covered by Rumi/懶貓子",                                     date: "2021-08-14" },
      { id: "0Vq4fWh3RMg", title: "【原創曲】【Original】NON STOP SOUL!!!｜Rumi/懶貓子",                                                      date: "2021-08-01" },
      { id: "gLNU5_2-Z4w", title: "【Cover】【歌ってみた】愛言葉Ⅲ｜covered by Rumi/懶貓子",                                                   date: "2021-07-18" },
    ],

    musicClips: [
      { id: "AujK7aWgRsY", title: "HoneyWorks - 可愛くてごめん | Rumi懶貓子 .Cover 〔中日歌詞〕" },
      { id: "J7EUn1BbE18", title: "初音ミク - 神っぽいな| Rumi懶貓子 .Cover 〔中日歌詞〕" },
      { id: "GuFN70xb8W4", title: "【歌枠切り抜き】猫 - Dish【Rumi/懶貓子】【Vtuber精華】" },
    ],

    videoClips: [
      { id: "gIDiqLbaQCQ", title: "老祖宗保佑我【Rumi/懶貓子】【Vtuber精華】" },
      { id: "fPeQl568_FE", title: "Rumi的視力有...？！【Rumi/懶貓子】【Vtuber精華】" },
      { id: "zcMfMI0ZHF0", title: "加班？門都沒有！【Rumi/懶貓子】【Vtuber精華】" },
    ],

    scheduleVideoId:  "M5f-d9Ic1O4",
    spreadsheetLabel: "懶貓子Rumi的大小事",  // 試算表按鈕文字
    scheduleTitle:    "懶貓子Rumi的行程表",   // 行程頁標題

    bgmVideoId: "0Vq4fWh3RMg",  // 背景音樂影片 ID
    bgmStart:   0,               // 開始秒數
    bgmLabel:   "NON STOP SOUL!!!",  // 播放器顯示的歌名

    // 三視圖
    refSheets: [
      { version: "3D 版本",  url: "images/懶貓子 3D版本.jpg" },
      { version: "Ver 1.0",  url: "images/懶貓子 v1.0.png"  },
      { version: "Ver 2.0",  url: "images/懶貓子 v2.0.jpg"  },
      { version: "Ver 2.01", url: "images/懶貓子 v2.01.png" },
      { version: "Ver 3.0",  url: "images/懶貓子 v3.0.jpg"  },
    ],

    // 小知識
    fanName: "Rumily",
    hashTags: [
      { label: "配信相關 🎙", tag: "#Rumiちゃんみてみて" },
      { label: "粉絲繪畫 🎨", tag: "#Rumiちゃん絵"      },
      { label: "其他 💌",     tag: "#Rumiちゃんへ"       },
    ],
    futureGoals: [
      "有很多朋友",
    ],
    triviaLikes: [
      { label: "興趣",       items: ["吃壽司", "睡啦明天再努力", "課金", "畫畫", "玩遊戲"] },
      { label: "喜歡的事情", items: ["BO鼠?", "FPS遊戲", "起司蛋糕", "壽司", "酒", "寶可夢"] },
      { label: "喜歡的顏色", items: ["全部（除了橘色）"] },
      { label: "喜歡的漫畫", items: ["反叛的魯路修", "進擊的巨人"] },
      { label: "喜歡的角色", items: ["托拉法爾加 · 羅（海賊王）"] },
    ],
    triviaHates: [
      { label: "討厭的東西", items: ["牛奶", "恐怖遊戲"] },
    ],

    // 熱門音樂精華（歌回 / 歌枠切り抜き / 演唱會）
    musicClipsChannelIds: [
      { id: "UC4X7qMrF5_8egxF7IEspAlg", label: "成彦なりひこ", typeKeywords: ["歌回", "歌枠"] },
      { id: "UCRqjJ9jxXdvIGdwPrtp8O0w", label: "小恩",         keywords: ["懶貓子", "Rumi", "懶貓"], typeKeywords: ["演唱會"] },
    ],

    // 熱門影片精華（直播精華 / 遊戲精華）
    videoClipsChannelIds: [
      { id: "UCRqjJ9jxXdvIGdwPrtp8O0w", label: "小恩",         keywords: ["懶貓子", "Rumi", "懶貓"], excludeKeywords: ["演唱會"] },
      { id: "UC4X7qMrF5_8egxF7IEspAlg", label: "成彦なりひこ", excludeKeywords: ["歌回", "歌枠", "直播"] },  // @narihiko0714
    ],

    // 歌曲統計（各年度 Google Sheets 統計頁 GID，填了才顯示分頁）
    songStatsGids: {
      "2026": "97600450",
      "2025": "373787059",
      "2024": "1845689314",
      "2023": "1160373825",
      "2022": "1291302646",
      "2021": "590127451",
    },

    color: "#F4A7C3"   // 懶貓子Rumi 代表色（柔粉紅）
  },

  {
    id: "paroniie",
    name: "帕蘿妮",
    nameEn: "Paroniie",
    group: "預見娛樂",
    generation: "一期生",
    avatar: "https://pbs.twimg.com/profile_images/1951138431612100608/9TNlSfqW_400x400.jpg",
    coverImage: "https://pbs.twimg.com/profile_banners/1603332340482158592/1744906715/1500x500",
    tagline: "",
    taglines: [
      { context: "", text: "想想有一隻龍在你的耳邊一直說休息休息休息休息" }
    ],
    description: "這裡是帕蘿妮嗷～💧 會唱歌會吃飯會睡覺～🦖✨聽說我的一分鐘只有60秒 🎆 o(*ﾟ▽ﾟ*)o",
    debut: "2023-02-24",
    birthday: "4月17日",
    tags: ["台灣", "預見娛樂", "一期生", "Exitus", "龍", "歌勢", "吃肉肉", "亮金金"],

    // 社群連結
    youtube: "https://www.youtube.com/@Paroniie",
    youtubeChannelId: "UCChAHq4kdRZ0FJ1Jfjvr9cw",
    ytApiKey: "AIzaSyBsmWLwQLY-8wszHDufVCZaGZ0RKkRjPlM",
    twitter: "https://twitter.com/Paroniie",
    twitch: "https://www.twitch.tv/paroniie",
    facebook:  "https://www.facebook.com/Paron11e",
    spreadsheet: "https://docs.google.com/spreadsheets/d/1NcaRipM4j0rsy3z-JMYnft7IS_Gg-6qsBTW5174_zrU/edit?gid=1879656289#gid=1879656289",

    overrideLinks: [
      { label: '帕蘿妮的大小事', url: 'https://docs.google.com/spreadsheets/d/1NcaRipM4j0rsy3z-JMYnft7IS_Gg-6qsBTW5174_zrU/edit?gid=1879656289#gid=1879656289', class: 'sheets', icon: '📋' },
      { label: 'HiveBee',  url: 'https://www.hivebee.com.tw/Paroniie/Donate',     class: 'hivebee',    icon: '🐝' },
      { label: '深度會員', url: 'https://www.hivebee.com.tw/Paroniie/Subscribe',  class: 'membership', icon: '💎' },
      { label: '棉花糖',   url: 'https://marshmallow-qa.com/paroniie',            class: 'marshmallow', icon: '🍬' },
    ],

    videos: [
      { id: "mnAkfuAZOUE", title: "【Cover】🎵 Bunny Girl - 帕蘿妮 Paroniie 【COVER】",                                                                                              date: "2026-05-01" },
      { id: "4RTxc8acTlY", title: "【Cover】🎵 Wake Up! - 帕蘿妮 Paroniie 【COVER】",                                                                                               date: "2026-03-20" },
      { id: "9njR8G8MLpk", title: "【Cover】威風堂々｜AoiHinamori／帕蘿妮💧Paroniie @Paroniie 【Cover】",                                                                            date: "2026-03-14" },
      { id: "Ck5w-tXkfRQ", title: "【Cover】🎵 想把哥哥追 - 帕蘿妮 Paroniie 【COVER】",                                                                                            date: "2026-03-07" },
      { id: "Lg9nyNL-AD0", title: "【原創曲】🎵 星願 - 帕蘿妮 Paroniie",                                                                                                           date: "2026-02-24" },
      { id: "Aud3U7eIn8Y", title: "【Cover】🎵 劍紙三國 - 帕蘿妮 Paroniie 【COVER】#劍紙三國",                                                                                     date: "2026-02-19" },
      { id: "kfy3vMYXe1c", title: "【Cover】🎵 WE ARE EMPIRE《明日方舟：終末地》- 帕蘿妮 Paroniie 【COVER】",                                                                       date: "2026-02-08" },
      { id: "ZnmKBtrog7A", title: "【Cover】🎵 討厭你 I hate you - 帕蘿妮 Paroniie 【COVER】",                                                                                      date: "2026-01-07" },
      { id: "DMhDwAMYmwU", title: "【Cover】[4K] ファンサ／HoneyWorks ♦︎ Paroniie 3DLIVE 星宿單曲無字幕版",                                                                        date: "2025-05-04" },
      { id: "H-iF0WTmOsY", title: "【Cover】[4K] 我喜歡你／洪安妮 ♦︎ Paroniie 3DLIVE 星宿單曲無字幕版",                                                                           date: "2025-05-03" },
      { id: "1jyJWqI9uPE", title: "【Cover】[4K] ちゅ、多様性／ano ♦︎ Paroniie 3DLIVE 星宿單曲無字幕版",                                                                           date: "2025-04-27" },
      { id: "Se6pMxLEBgQ", title: "【Cover】[4K] 夠愛／曾沛慈、東城衞 ♦︎ Paroniie 3DLIVE 星宿單曲無字幕版",                                                                       date: "2025-04-26" },
      { id: "quQN16MTaS8", title: "【Cover】[4K] 玫瑰少年／蔡依林 ♦︎ Paroniie 3DLIVE 星宿單曲無字幕版",                                                                           date: "2025-04-20" },
      { id: "QVhYWdxreiU", title: "【Cover】いけないボーダーライン／ワルキューレ ♦︎ Paroniie 3DLIVE 星宿單曲無字幕版",                                                             date: "2025-04-19" },
      { id: "PpLvIDxOF1s", title: "【Cover】可愛くてごめん／HoneyWorks ♦︎ Paroniie 3DLIVE 星宿單曲無字幕版",                                                                       date: "2025-04-13" },
      { id: "X8Fk54RovZk", title: "【Cover】Stellar Stellar／星街すいせい ♦︎ Paroniie 3DLIVE 星宿單曲無字幕版",                                                                    date: "2025-04-12" },
      { id: "4rlG9tEt05w", title: "【Cover】Phony / Paroniie cover. / 1.5周年&米豆綠媽咪生日快樂！！！",                                                                           date: "2024-08-30" },
      { id: "E5ZXb3uVUOc", title: "【Cover】早安大少爺 賴床的話會被扣薪水的哦～ ft. @AoiHinamoriCh 🔹#帕蘿妮 #Paroniie #Cover",                                                   date: "2024-06-04" },
      { id: "_Gh7pFVVm4g", title: "【Cover】【以心傳心】overdose🔹#帕蘿妮 #Paroniie",                                                                                              date: "2024-05-29" },
      { id: "H_bYEiL3nCs", title: "【Cover】【以心傳心】Phony🔹#帕蘿妮 #Paroniie",                                                                                                 date: "2024-05-28" },
      { id: "8-Sq7IxMitw", title: "【Cover】【以心傳心】踊り子🔹#帕蘿妮 #Paroniie",                                                                                                date: "2024-05-26" },
      { id: "5s-Lub1eGZU", title: "【Cover】【以心傳心】僕が死のうと思ったのは ft. 瓦西瓦瓦、希妮亞里絲、酒樂霧子🔹#帕蘿妮 #Paroniie",                                           date: "2024-05-25" },
      { id: "JsX_gsL56Eg", title: "【Cover】🎵 我會等「與你一起去看外面世界到底多大和你慢慢周旋」｜#帕蘿妮 💧 #Paroniie #cover.",                                               date: "2024-04-17" },
      { id: "8EFuagFbsvs", title: "【Cover】🎵 一路生花「我希望許過的願望一路生花也仍感嘆於世界之大」｜帕蘿妮💧Paroniie cover.",                                                date: "2024-04-12" },
      { id: "LKWhIjwTEik", title: "【Cover】🎵 バラライカ 巴拉萊卡 Balalaika🔹#帕蘿妮 #Paroniie #COVER",                                                                          date: "2024-03-22" },
      { id: "UInvujUYiX4", title: "【Cover】🎵 斑馬斑馬「我不想去觸碰你傷口的疤」｜帕蘿妮💧Paroniie cover.",                                                                    date: "2024-02-27" },
      { id: "U35GC8XpGo8", title: "【Cover】一週年紀念暨新春COVER🎵 春風十里「我說所有的酒都不如你」｜帕蘿妮💧Paroniie cover.",                                                date: "2024-02-09" },
      { id: "RQjK_mf4CBg", title: "【Cover】【🎵以心傳心】強風オールバック ft. 洛可洛斯特、柴崎楓音🔹#帕蘿妮 #Paroniie #cover",                                               date: "2024-01-30" },
      { id: "uN4n513eONQ", title: "【Cover】【🎵以心傳心】曹操 ft. 洛可洛斯特、柴崎楓音🔹#帕蘿妮 #Paroniie #cover",                                                            date: "2024-01-29" },
      { id: "ujqFpGj8D0A", title: "【Cover】【🎵以心傳心】專屬天使 ft. 洛可洛斯特、柴崎楓音🔹#帕蘿妮 #Paroniie #cover",                                                        date: "2024-01-28" },
      { id: "KZY1glbbYoo", title: "【Cover】🎵 強風オールバック🔹#帕蘿妮 #Paroniie cover.",                                                                                        date: "2024-01-23" },
      { id: "nQw9qTPp1ZA", title: "【Cover】🎵 星光降落「星光降落在你的眼底我也順勢跌進你眼睛」｜帕蘿妮💧Paroniie cover.",                                                    date: "2024-01-12" },
      { id: "b4bFZP2ieQo", title: "【Cover】🎵 追夢人「看我看一眼吧莫讓紅顏守空枕」｜帕蘿妮💧Paroniie cover.",                                                                date: "2023-12-15" },
      { id: "gv9mBNcMo_A", title: "【Cover】#以心傳心 🎵人間不值得 ft. 銀河、小金碧碧🔹帕蘿妮 Paroniie cover.",                                                               date: "2023-11-28" },
      { id: "WGnPzwxtefo", title: "【Cover】#以心傳心 🎵行星 ft. 銀河、小金碧碧🔹帕蘿妮 Paroniie cover.",                                                                      date: "2023-11-27" },
      { id: "osqomnv6BTQ", title: "【Cover】#以心傳心 🎵萬千花蕊慈母悲哀 ft. 銀河、小金碧碧🔹帕蘿妮 Paroniie cover.",                                                         date: "2023-11-26" },
      { id: "26tyBgCxG6w", title: "【Cover】🎵 愛如火「你在笑瘋狂的人是我」｜帕蘿妮💧Paroniie cover.",                                                                        date: "2023-11-17" },
      { id: "zhzdFLYFpek", title: "【Cover】🎵 四季予你「送你每個夢境每次清醒陪伴的長情」｜帕蘿妮💧Paroniie cover.",                                                          date: "2023-10-13" },
      { id: "5J41hjw0rI8", title: "【Cover】🎵 孤單北半球「少了你的懷抱當暖爐我還不習慣」｜帕蘿妮💧Paroniie cover.",                                                          date: "2023-09-29" },
      { id: "zgZlHpKaqQc", title: "【Cover】🎵 KING｜帕蘿妮💧Paroniie cover.",                                                                                                     date: "2023-09-01" },
      { id: "9X80SF27ULw", title: "【Cover】🎵 起風了「我曾難自拔於世界之大也沉溺於其中夢話」｜帕蘿妮💧Paroniie cover.",                                                      date: "2023-07-28" },
      { id: "MHCZWU_KlY8", title: "【Cover】🎵 晚風告白「我遇見很多人卻只想和你慢慢周旋」｜帕蘿妮💧Paroniie cover.",                                                          date: "2023-07-08" },
      { id: "tGN4sPmQW9o", title: "【Cover】🎵 本色｜帕蘿妮💧Paroniie cover.",                                                                                                     date: "2023-06-23" },
      { id: "-pbygS3LcLw", title: "【Cover】🎵 他們說我是沒有用的年輕人｜帕蘿妮💧Paroniie cover.",                                                                               date: "2023-06-02" },
      { id: "QeWFvm0vwz8", title: "【Cover】🎵 Summertime｜帕蘿妮💧Paroniie cover.",                                                                                                date: "2023-02-18" },
      { id: "YsTqsdqvxkY", title: "【Cover】🎵 易燃易爆炸｜帕蘿妮💧Paroniie cover.",                                                                                               date: "2023-02-05" },
      { id: "24Pgn47b148", title: "【Cover】🎵 彈唱練習ONETAKE ✧ 能認出幾首歌呢？｜帕蘿妮💧Paroniie cover.",                                                                    date: "2023-02-01" },
    ],

    musicClipsChannelIds: [
      { id: "UC4nZ-KbmFr21Qt1lN9rmbdQ", label: "孫小毛",       keywords: ["帕蘿妮", "paroniie"],  typeKeywords: ["點歌台", "歌回", "cover"] },
      { id: "UCMlvVMgOjH76AwolFgKEP1Q", label: "成彦なりひこ", keywords: ["帕蘿妮", "Paroniie"],  typeKeywords: ["歌回", "cover"] },  // 歌回/Cover 剪輯
    ],

    videoClipsChannelIds: [
      { id: "UC4nZ-KbmFr21Qt1lN9rmbdQ", label: "孫小毛",       keywords: ["帕蘿妮", "paroniie"],          excludeKeywords: ["點歌台", "歌回", "cover", "瓦瓦", "Vaswawa"] },
      { id: "UCv9MXWx8AW5BZ07OPJyf7jg", label: "鬧欸",         keywords: ["帕蘿妮", "Paroniie", "Exitus"], excludeKeywords: ["神無月鹿比", "鹿比", "艾琳妮雅", "歌回", "cover"] },
    ],

    scheduleVideoId:  "3CkoMAZxoec",
    spreadsheetLabel: "帕蘿妮的大小事",
    scheduleTitle:    "帕蘿妮的行程表",

    bgmVideoId: "Lg9nyNL-AD0",  // 背景音樂影片 ID
    bgmStart:   0,               // 開始秒數
    bgmLabel:   "星願",           // 播放器顯示的歌名

    refSheets: [
      { version: "Ver 1.0", url: "images/帕蘿妮 v1.0.png" },
      { version: "Ver 2.0", url: "images/帕蘿妮 v2.0.jpg" },
      { version: "Ver 3.0", url: "images/帕蘿妮 v3.0.png" },
    ],

    // 小知識
    fanName: "蘿妮控",
    hashTags: [
      { label: "召喚我",      tag: "#帕妮看"    },
      { label: "實況＆剪輯",  tag: "#Liveniie"  },
      { label: "食物跟食譜",  tag: "#帕吃不到"  },
      { label: "拍拍我",      tag: "#Patoniie"  },
      { label: "MEME",        tag: "#Drapon"    },
      { label: "忍笑大會",    tag: "#2theniie"  },
      { label: "FanArt",      tag: "#pARTniie"  },
      { label: "NSFW",        tag: "#18theniie" },
    ],
    futureGoals: [
      "訂閱目標 1萬 → 2萬 → 5萬 → 10萬 → 20萬 → 100萬",
      "收集寶物、賺很多錢、去很多地方吃很多的肉",
      "學習更多的語言",
      "演唱會＆見面會、跟很多人連動唱歌",
      "成為最偉大的煉金術師（性轉藥水 / BOINGBOING藥水 / 變大變小藥水 / 聰明藥水）",
      "做料理！做給大家吃（肯定捧場）",
    ],
    triviaLikes: [
      { label: "喜歡的事情", items: ["吃肉肉（所有的肉）", "亮金金的金幣", "彩虹（盡頭有寶藏）"] },
    ],
    triviaHates: [
      { label: "討厭的東西", items: ["蜘蛛", "打雷"] },
      { label: "討厭的食物", items: ["香菜"] },
    ],

    songStatsGids: {
      "2026": "899748093",
      "2025": "2009275188",
      "2024": "737996358",
      "2023": "197521655",
    },

    color: "#B2E3FF"   // 帕蘿妮 代表色（天空藍）
  },

  {
    id: "kannazukilubee",
    name: "神無月鹿比",
    nameEn: "Kannazuki Lubee",
    group: "預見娛樂",
    generation: "一期生",
    avatar: "https://pbs.twimg.com/profile_images/2006266508633366529/NjcXGLXW_400x400.png",
    coverImage: "https://pbs.twimg.com/profile_banners/1585116375894609920/1674036165/1500x500",
    tagline: "",
    taglines: [
      { context: "", text: "啊~哈~" }
    ],
    description: "預見所屬 EXITUS - 神無月鹿比 the 浴血地獄のザ‧梅花鹿天使 aka 世紀の開創者",
    debut: "2023-02-27",
    birthday: "10月22日",
    tags: ["台灣", "預見娛樂", "一期生", "Exitus", "廢鹿", "遊戲勢", "鹿女神", "攻略少女"],

    // 社群連結
    youtube: "https://www.youtube.com/@KannazukiLubee",
    youtubeChannelId: "UCF8icKLU4FGF8Ln-KlKakSg",
    ytApiKey: "AIzaSyBsmWLwQLY-8wszHDufVCZaGZ0RKkRjPlM",
    twitter: "https://twitter.com/kannazukilubee",
    twitch: "https://www.twitch.tv/kannazukilubee",
    facebook:  "https://www.facebook.com/KannazukiLubee",
    instagram: "https://www.instagram.com/kannazukilubee/",
    spreadsheet: "https://docs.google.com/spreadsheets/d/1Ld0rL7quLZlt1aW0oJvzdicmQuoVP7pJ85qnguNbG2E/edit?gid=45727533#gid=45727533",

    overrideLinks: [
      { label: '鹿比的大小事', url: 'https://docs.google.com/spreadsheets/d/1Ld0rL7quLZlt1aW0oJvzdicmQuoVP7pJ85qnguNbG2E/edit?gid=45727533#gid=45727533', class: 'sheets', icon: '📋' },
      { label: 'HiveBee',  url: 'https://www.hivebee.com.tw/KannazukiLubee/Donate',     class: 'hivebee',    icon: '🐝' },
      { label: '深度會員', url: 'https://www.hivebee.com.tw/KannazukiLubee/Subscribe',  class: 'membership', icon: '💎' },
      { label: '棉花糖',   url: 'https://marshmallow-qa.com/kannazukilubee',            class: 'marshmallow', icon: '🍬' },
    ],

    videos: [],

    videoClips: [
      { id: "ap2nB-I1vic", title: "鹿餅們沒日沒夜加工出來的寶石，我拍胸脯保證！(拍)【神無月鹿比】【VTuber精華】" },

    ],

    scheduleVideoId:  "kc5RN-h_bAs",
    spreadsheetLabel: "鹿比的大小事",
    scheduleTitle:    "鹿比的行程表",

    refSheets: [
      { version: "Ver 1.0", url: "images/神無月鹿比 v1.0.png" },
      { version: "Ver 2.0", url: "images/神無月鹿比 v2.0.jpg" },
    ],

    videoClipsChannelIds: [
      { id: "UCv9MXWx8AW5BZ07OPJyf7jg", label: "鬧欸", keywords: ["神無月鹿比", "鹿比", "Lubee", "鹿寶", "Exitus"], excludeKeywords: ["帕蘿妮", "艾琳妮雅", "歌回", "cover"] },
    ],

    color: "#F2A8B9"   // 神無月鹿比 代表色（粉紅）
  },

  {
    id: "himegimichika",
    name: "姬城三千華",
    nameEn: "Himegi Michika",
    group: "預見娛樂",
    generation: "一期生",
    avatar: "https://pbs.twimg.com/profile_images/1845639618013904896/CqahvjNX_400x400.jpg",
    coverImage: "https://pbs.twimg.com/profile_banners/1603329733940641792/1693759492/1500x500",
    tagline: "",
    description: "世界第一超級無敵可愛奇美拉 § 高中生",
    debut: "2023-03-04",
    birthday: "5月20日",
    tags: ["台灣", "預見娛樂", "一期生", "Exitus", "奇美拉", "高中生", "青春無敵"],

    // 社群連結
    youtube: "https://www.youtube.com/@HimegiMichika",
    youtubeChannelId: "UCjcXw7nWechEaodFEWtDk1Q",
    ytApiKey: "AIzaSyBsmWLwQLY-8wszHDufVCZaGZ0RKkRjPlM",
    twitter: "https://twitter.com/himegi17ka",
    twitch: "https://www.twitch.tv/himegimichika",
    facebook:  "https://www.facebook.com/HimegiM17Ka",
    instagram: "https://www.instagram.com/himegi_m17ka/",
    spreadsheet: "https://docs.google.com/spreadsheets/d/1jBY63fnJ80H0yB60-NXEyg8tLcOQwhPbc5CckgNNeEM/edit?gid=1398960308#gid=1398960308",

    overrideLinks: [
      { label: '咪奇的大小事', url: 'https://docs.google.com/spreadsheets/d/1jBY63fnJ80H0yB60-NXEyg8tLcOQwhPbc5CckgNNeEM/edit?gid=1398960308#gid=1398960308', class: 'sheets', icon: '📋' },
      { label: 'HiveBee',  url: 'https://www.hivebee.com.tw/HimegiMichika/Donate',     class: 'hivebee',    icon: '🐝' },
      { label: '深度會員', url: 'https://www.hivebee.com.tw/HimegiMichika/Subscribe',  class: 'membership', icon: '💎' },
      { label: '棉花糖',   url: 'https://marshmallow-qa.com/himegi17ka',               class: 'marshmallow', icon: '🍬' },
    ],

    videos: [
      { id: "REPLACE_VIDEO_1", title: "熱門直播 #1" },
      { id: "REPLACE_VIDEO_2", title: "熱門直播 #2" },
      { id: "REPLACE_VIDEO_3", title: "熱門直播 #3" }
    ],

    scheduleVideoId:  "tPRVSHoEEeg",
    spreadsheetLabel: "咪奇的大小事",
    scheduleTitle:    "咪奇的行程表",

    refSheets: [
      { version: "Ver 1.0", url: "images/姬城三千華 v1.0.png" },
    ],

    songStatsGids: {
      "2026": "873622761",
      "2025": "1816981002",
      "2024": "285108625",
      "2023": "1950043660",
    },

    videoClipsChannelIds: [
      { id: "UCv9MXWx8AW5BZ07OPJyf7jg", label: "鬧欸", keywords: ["Exitus"], excludeKeywords: ["帕蘿妮", "神無月鹿比", "鹿比", "艾琳妮雅", "歌回", "cover"] },
    ],

    color: "#D4A8C8"   // 姬城三千華 代表色（薰衣草玫瑰，自動生成）
  },

  {
    id: "arrynia",
    name: "艾琳妮雅",
    nameEn: "Arrynia Vaeri",
    group: "預見娛樂",
    generation: "一期生",
    avatar: "https://pbs.twimg.com/profile_images/1616018346641850369/hAKPytgg_400x400.jpg",
    coverImage: "https://pbs.twimg.com/profile_banners/1582662135426867200/1673621522/1500x500",
    tagline: "",
    taglines: [
      { context: "", text: "天ㄚ 怎麼會有人… 這樣" }
    ],
    description: "努力體驗人類生活的搞事吸血鬼女僕🧛‍♀️",
    debut: "2023-03-03",
    birthday: "11月11日",
    tags: ["台灣", "預見娛樂", "一期生", "Exitus", "吸血鬼", "女僕", "搞事"],

    // 社群連結
    youtube: "https://www.youtube.com/@Arrynia",
    youtubeChannelId: "UC5bHZZ2df6_oFgOM_34_-aw",
    ytApiKey: "AIzaSyBsmWLwQLY-8wszHDufVCZaGZ0RKkRjPlM",
    twitter: "https://twitter.com/Arryn1a",
    twitch: "https://www.twitch.tv/arryn1a",
    facebook:  "https://www.facebook.com/arryn1a/",
    spreadsheet: "https://docs.google.com/spreadsheets/d/1pd0C6wMa43aP5s0mXttaF7eOdmD79mDVCzuqctrTKfw/edit?gid=1723685746#gid=1723685746",

    overrideLinks: [
      { label: '艾琳妮雅的大小事', url: 'https://docs.google.com/spreadsheets/d/1pd0C6wMa43aP5s0mXttaF7eOdmD79mDVCzuqctrTKfw/edit?gid=1723685746#gid=1723685746', class: 'sheets', icon: '📋' },
      { label: 'HiveBee',  url: 'https://www.hivebee.com.tw/ArryniaVaeri/Donate',     class: 'hivebee',    icon: '🐝' },
      { label: '深度會員', url: 'https://www.hivebee.com.tw/ArryniaVaeri/Subscribe',  class: 'membership', icon: '💎' },
      { label: '棉花糖',   url: 'https://marshmallow-qa.com/arryn1a',                 class: 'marshmallow', icon: '🍬' },
    ],

    videos: [],

    musicClips: [
      { id: "mkLydHtl-UI", title: "【You Don't Own Me - Grace】🦇🌕Covered by艾琳妮雅·裴利 Arrynia Vaeri" },
      { id: "CfvU9Lp-0IU", title: "【Bad Guy - Billie Eilish】🦇🌕Covered by艾琳妮雅·裴利 Arrynia Vaeri" },
      { id: "RMDjK2wxp-E", title: "【Blank Space - Taylor Swift】🦇🌕Covered by艾琳妮雅·裴利 Arrynia Vaeri" },
    ],

    videoClips: [
      { id: "Mf_2asOpiuw", title: "【能者多勞勇者欣梅爾（？】🦇🌕艾琳妮雅·裴利 Arrynia Vaeri" },
      { id: "cghr3y7M0Eo", title: "【麥當勞蘋果派竟是遊戲中最強武器！?】🦇🌕艾琳妮雅·裴利 Arrynia Vaeri" },
      { id: "4gINlqMLtcU", title: "【統領竟然想丟冰山到艾琳坐的船前面！？】🦇🌕艾琳妮雅·裴利 Arrynia Vaeri" },
    ],

    scheduleVideoId:  "YewmD63V5r0",
    spreadsheetLabel: "艾琳妮雅的大小事",
    scheduleTitle:    "艾琳妮雅的行程表",

    refSheets: [
      { version: "Ver 1.0", url: "images/艾琳妮雅 v1.0.png" },
      { version: "Ver 2.0", url: "images/艾琳妮雅 v2.0.png" },
    ],

    // 小知識
    fanName: "塵艾",
    hashTags: [
      { label: "🦇 General", tag: "#ArrynVaer1"   },
      { label: "🌕 Live",    tag: "#airingVaer1"  },
      { label: "🦇 Meme",   tag: "#aMEMEa"        },
      { label: "🌕 Art",    tag: "#ARTyn1a"        },
      { label: "🌕 Nomnom", tag: "#孩子Vaeri艾吃" },
    ],
    futureGoals: [
      "幹大事", "跟大家一起", "蒐集恐遊",
      "寫＋演繹故事", "製冰冰箱", "我叫你笑",
    ],
    triviaLikes: [
      { label: "興趣",       items: ["泡澡", "聊天", "幫忙", "寫手帳", "YouTube", "做甜點", "咖啡", "看BL漫畫", "手做", "下廚", "故事"] },
      { label: "喜歡的事情", items: ["網路", "香香的", "夜晚", "甜點", "玻璃筆", "文具", "料理", "床"] },
      { label: "喜歡的節目", items: ["真實犯罪", "動漫跟劇"] },
      { label: "喜歡的遊戲", items: ["精神時光機", "養成類", "恐怖類"] },
      { label: "喜歡的食物", items: ["冰淇淋(夏威夷豆口味)", "筍子", "菠菜", "咖哩", "酸辣湯", "烏魚子", "海鮮", "巧克力軟餅乾", "Subway", "湯類食物", "早餐", "小辣"] },
    ],
    triviaHates: [
      { label: "討厭的東西", items: ["一個人", "艾哭", "葡萄乾(or any 乾)", "太辣的食物", "蟲", "陽光沙灘海", "太複雜的事物(用腦)", "暴雷", "臭臭的"] },
    ],

    songStatsGids: {
      "2026": "1859743337",
      "2025": "627050697",
      "2024": "1342130594",
      "2023": "1872053935",
    },

    musicClipsChannelIds: [
      { id: "UCMlvVMgOjH76AwolFgKEP1Q", label: "成彦なりひこ", keywords: ["艾琳妮雅", "Arrynia"], excludeKeywords: ["精華"] },  // Cover/歌回（排除精華）
    ],

    videoClipsChannelIds: [
      { id: "UCv9MXWx8AW5BZ07OPJyf7jg", label: "鬧欸",        keywords: ["艾琳妮雅", "Arrynia", "Exitus"], excludeKeywords: ["帕蘿妮", "神無月鹿比", "鹿比", "歌回", "cover"] },
      { id: "UCMlvVMgOjH76AwolFgKEP1Q", label: "成彦なりひこ", keywords: ["艾琳妮雅", "Arrynia"], typeKeywords: ["精華"] },  // 只抓精華影片
    ],

    color: "#28004D",  // 艾琳妮雅 代表色（深紫）
    badgeTextColor: "white"  // 深色背景，徽章文字改回白色
  },

  {
    id: "shurakukiriko",
    name: "酒樂霧子",
    nameEn: "Kiriko",
    group: "預見娛樂",
    generation: "二期生",
    avatar: "https://pbs.twimg.com/profile_images/2039773906706534400/RTy0EGZQ_400x400.jpg",
    coverImage: "https://pbs.twimg.com/profile_banners/1676559936602644480/1750936798/1500x500",
    tagline: "",
    taglines: [
      { context: "", text: "一句話就是酒，嗯嗯嗯嗯嗯嗯嗯" }
    ],
    description: "一隻喜歡酒的大妖怪！每天都要快樂的喝酒聊天打遊戲🍺",
    debut: "2023-12-07",
    birthday: "6月10日",
    tags: ["台灣", "預見娛樂", "二期生", "MeloNyx", "大妖怪", "喝酒", "遊戲", "聊天"],

    // 社群連結
    youtube: "https://youtube.com/@ShurakuKiriko",
    youtubeChannelId: "UCj76pRLEg2JHwDwJJXvZtSw",
    ytApiKey: "AIzaSyBsmWLwQLY-8wszHDufVCZaGZ0RKkRjPlM",
    twitter: "https://twitter.com/shurakukiriko",
    twitch: "https://www.twitch.tv/shurakukiriko",
    facebook:  "https://www.facebook.com/profile.php?id=61552360240141",
    spreadsheet: "https://docs.google.com/spreadsheets/d/13JIIvG5_XTPc7M0zV0WAgFUBpZgcpRfxszdjbFZ0Ul4/edit?gid=47542312#gid=47542312",

    overrideLinks: [
      { label: '霧子的大小事', url: 'https://docs.google.com/spreadsheets/d/13JIIvG5_XTPc7M0zV0WAgFUBpZgcpRfxszdjbFZ0Ul4/edit?gid=47542312#gid=47542312', class: 'sheets', icon: '📋' },
      { label: 'HiveBee',  url: 'https://www.hivebee.com.tw/shurakukiriko/Donate',     class: 'hivebee',    icon: '🐝' },
      { label: '深度會員', url: 'https://www.hivebee.com.tw/shurakukiriko/Subscribe',  class: 'membership', icon: '💎' },
      { label: '棉花糖',   url: 'https://marshmallow-qa.com/8p8hbwh8tnb77y',          class: 'marshmallow', icon: '🍬' },
    ],

    videos: [
      { id: "REPLACE_VIDEO_1", title: "熱門直播 #1" },
      { id: "REPLACE_VIDEO_2", title: "熱門直播 #2" },
      { id: "REPLACE_VIDEO_3", title: "熱門直播 #3" }
    ],

    scheduleVideoId:  "CROYjRn86_o",
    spreadsheetLabel: "霧子的大小事",   // 試算表按鈕文字
    scheduleTitle:    "霧子的行程表",    // 行程頁標題

    refSheets: [
      { version: "Ver 1.0", url: "images/酒樂霧子 v1.0.png" },
    ],

    musicClipsChannelIds: [
      { id: "UCv9MXWx8AW5BZ07OPJyf7jg", label: "鬧欸", keywords: ["酒樂霧子", "Shuraku"], typeKeywords: ["歌回", "cover"] },
    ],

    videoClipsChannelIds: [
      { id: "UCv9MXWx8AW5BZ07OPJyf7jg", label: "鬧欸", keywords: ["酒樂霧子", "Shuraku", "MeloNyX"], excludeKeywords: ["歌回", "cover"] },
    ],

    color: "#C93447"   // 酒樂霧子 代表色（深紅）
  },

  {
    id: "vaswawa",
    name: "瓦西瓦瓦",
    nameEn: "Vaswawa",
    group: "預見娛樂",
    generation: "二期生",
    avatar: "https://pbs.twimg.com/profile_images/2040470338254053376/j6n_yPob_400x400.jpg",
    coverImage: "https://pbs.twimg.com/profile_banners/1669746708853706753/1775321014/1500x500",
    tagline: "",
    taglines: [
      { context: "", text: "大概是這樣" },
    ],
    description: "初めまして！瓦瓦です～～～～～可愛迷人混亂小惡魔天使",
    debut: "2023-12-04",
    birthday: "9月9日",
    tags: ["台灣", "預見娛樂", "二期生", "MeloNyx", "小惡魔", "天使", "混亂"],

    // 社群連結
    youtube: "https://www.youtube.com/@Vaswawa",
    youtubeChannelId: "UCZHa6yKnBnU34yRyvV3EXSA",
    ytApiKey: "AIzaSyBsmWLwQLY-8wszHDufVCZaGZ0RKkRjPlM",
    twitter: "https://twitter.com/Vaswawa",
    twitch: "https://www.twitch.tv/vaswawa0000",
    facebook:  "https://www.facebook.com/Vaswawa/",
    instagram: "https://www.instagram.com/vaswawa/",
    spreadsheet: "https://docs.google.com/spreadsheets/d/14GkvYxFdP0cGi-ZbXoq7a_rVAtpfAKSf9WxTGSlDavk/edit?gid=47542312#gid=47542312",

    overrideLinks: [
      { label: '瓦瓦的大小事', url: 'https://docs.google.com/spreadsheets/d/14GkvYxFdP0cGi-ZbXoq7a_rVAtpfAKSf9WxTGSlDavk/edit?gid=47542312#gid=47542312', class: 'sheets', icon: '📋' },
      { label: 'HiveBee',  url: 'https://www.hivebee.com.tw/user953a1698654472/Donate',     class: 'hivebee',    icon: '🐝' },
      { label: '深度會員', url: 'https://www.hivebee.com.tw/user953a1698654472/Subscribe',  class: 'membership', icon: '💎' },
      { label: '棉花糖',   url: 'https://marshmallow-qa.com/y13sf73hnbn4lz4',              class: 'marshmallow', icon: '🍬' },
    ],

    videos: [
      { id: "REPLACE_VIDEO_1", title: "熱門直播 #1" },
      { id: "REPLACE_VIDEO_2", title: "熱門直播 #2" },
      { id: "REPLACE_VIDEO_3", title: "熱門直播 #3" }
    ],

    musicClipsChannelIds: [
      { id: "UCHrOyfkspzM82TjnaAoxJmQ", label: "松鴉Jayauspice", keywords: ["瓦西瓦瓦", "vaswawa"], typeKeywords: ["cover"] },
      { id: "UCRqjJ9jxXdvIGdwPrtp8O0w", label: "小恩",           keywords: ["瓦西瓦瓦", "Vaswawa", "vaswawa", "瓦瓦"] },  // 歌回剪輯（全域音樂關鍵字自動分類）
    ],

    bgmVideoId: "Nc1s7Jbb9WY",           // 背景音樂影片 ID
    bgmStart:   0,                        // 開始秒數
    bgmLabel:   "Virtual Life 虛擬人生",  // 播放器顯示的歌名

    scheduleVideoId:  "DvskyppTq-0",
    spreadsheetLabel: "瓦瓦的大小事",
    scheduleTitle:    "瓦瓦的行程表",

    refSheets: [
      { version: "3D 版本", url: "images/瓦西瓦瓦 3D版本.jpg" },
      { version: "Ver 1.0", url: "images/瓦西瓦瓦 v1.0.png"  },
      { version: "Ver 2.0", url: "images/瓦西瓦瓦 v2.0.png"  },
    ],

    songStatsGids: {
      "2026": "1100262502",
      "2025": "911579685",
      "2024": "583929937",
      "2023": "1124154412",
    },

    videoClipsChannelIds: [
      { id: "UCv9MXWx8AW5BZ07OPJyf7jg", label: "鬧欸",         keywords: ["MeloNyX"],                          excludeKeywords: ["酒樂霧子", "Shuraku", "歌回", "cover"] },
      { id: "UCpc15B6xb8OagNa7LScMOBg", label: "椪呱實驗室",   keywords: ["瓦西瓦瓦", "vaswawa", "瓦瓦"] },
      { id: "UC4nZ-KbmFr21Qt1lN9rmbdQ", label: "孫小毛",      keywords: ["瓦西瓦瓦", "Vaswawa", "vaswawa", "瓦瓦"] },
      { id: "UCRqjJ9jxXdvIGdwPrtp8O0w", label: "小恩",         keywords: ["瓦西瓦瓦", "Vaswawa", "vaswawa", "瓦瓦"] },  // 全域音樂關鍵字自動排除
    ],

    color: "#B8FFEC"   // 瓦西瓦瓦 代表色（薄荷綠）
  },

  {
    id: "sinniearis",
    name: "希妮亞里絲",
    nameEn: "Sinnie Aris",
    group: "預見娛樂",
    generation: "二期生",
    avatar: "https://pbs.twimg.com/profile_images/2047990430235799552/8hLQvduO_400x400.jpg",
    coverImage: "https://pbs.twimg.com/profile_banners/1669708581632114689/1777113944/1500x500",
    tagline: "",
    taglines: [
      { context: "", text: "你們這些白痴" },
      { context: "", text: "閉嘴啦" },
      { context: "", text: "什麼意思!" },
      { context: "", text: "這首可能唱不好!所以要原諒我!" },
      { context: "", text: "幹嘛啦!...幹....幹嘛啦!" },
      { context: "", text: "O哩娘" },
      { context: "", text: "河河河" },
      { context: "", text: "我不排斥當總受" },
      { context: "", text: "一般般" },
    ],
    description: "最愛你們的！可愛又睿智的！ 小天使꒰ঌᐢ. ̫ .ᐢ໒꒱",
    debut: "2023-12-11",
    birthday: "11月8日",
    tags: ["台灣", "預見娛樂", "二期生", "MeloNyx", "天使", "可愛", "睿智"],

    // 社群連結
    youtube: "https://www.youtube.com/@SinnieAris",
    youtubeChannelId: "UCwwVVsJTvdeUK3sj4-qxgMQ",
    ytApiKey: "AIzaSyBsmWLwQLY-8wszHDufVCZaGZ0RKkRjPlM",
    twitter: "https://twitter.com/SinnieAris",
    twitch: "https://www.twitch.tv/sinniearis",
    facebook:  "https://www.facebook.com/profile.php?id=61552753801614",
    instagram: "https://www.instagram.com/sinniearis/",
    spreadsheet: "https://docs.google.com/spreadsheets/d/1PmHGlH05mnDac3Po0e_p93AkNLv5Wr2Hz6PnMEW___Y/edit?gid=47542312#gid=47542312",

    overrideLinks: [
      { label: '希希的大小事', url: 'https://docs.google.com/spreadsheets/d/1PmHGlH05mnDac3Po0e_p93AkNLv5Wr2Hz6PnMEW___Y/edit?gid=47542312#gid=47542312', class: 'sheets', icon: '📋' },
      { label: 'HiveBee',  url: 'https://www.hivebee.com.tw/SinnieAris/Donate',     class: 'hivebee',    icon: '🐝' },
      { label: '深度會員', url: 'https://www.hivebee.com.tw/SinnieAris/Subscribe',  class: 'membership', icon: '💎' },
      { label: '棉花糖',   url: 'https://marshmallow-qa.com/1hlxorat4xskrkv',       class: 'marshmallow', icon: '🍬' },
    ],

    videos: [
      { id: "REPLACE_VIDEO_1", title: "熱門直播 #1" },
      { id: "REPLACE_VIDEO_2", title: "熱門直播 #2" },
      { id: "REPLACE_VIDEO_3", title: "熱門直播 #3" }
    ],

    scheduleVideoId:  "vDoOnUBiuW4",
    spreadsheetLabel: "希希的大小事",
    scheduleTitle:    "希希的行程表",

    refSheets: [
      { version: "Ver 1.0", url: "images/希妮亞里絲 v1.0.png" },
      { version: "Ver 2.0", url: "images/希妮亞里絲 v2.0.png" },
    ],

    songStatsGids: {
      "2026": "217431303",
      "2025": "2006517096",
      "2024": "2112021027",
      "2023": "816298850",
    },

    videoClipsChannelIds: [
      { id: "UCv9MXWx8AW5BZ07OPJyf7jg", label: "鬧欸", keywords: ["MeloNyX"], excludeKeywords: ["酒樂霧子", "Shuraku", "歌回", "cover"] },
      { id: "UC4nZ-KbmFr21Qt1lN9rmbdQ", label: "孫小毛",      keywords: ["希妮亞里絲", "SinnieAris", "sinniearis"] },
    ],

    color: "#FCE8A4"   // 希妮亞里絲 代表色（奶油黃）
  },

  {
    id: "yuzukiririna",
    name: "結月莉莉奈",
    nameEn: "Ririna",
    group: "預見娛樂",
    generation: "二期生",
    avatar: "https://pbs.twimg.com/profile_images/2039763954331951104/OlHLWeDM_400x400.jpg",
    coverImage: "https://pbs.twimg.com/profile_banners/1675184947248926720/1761589480/1500x500",
    tagline: "",
    description: "👆🏻這是一隻只有奶茶跟火鍋能叫得醒的夢魔🧋🍲",
    debut: "2023-12-14",
    birthday: "3月29日",
    tags: ["台灣", "預見娛樂", "二期生", "MeloNyx", "夢魔", "奶茶", "火鍋"],

    // 社群連結
    youtube: "https://www.youtube.com/@r1ri999",
    youtubeChannelId: "UCbgr8vvzFLElzIxHDr2xV5w",
    ytApiKey: "AIzaSyBsmWLwQLY-8wszHDufVCZaGZ0RKkRjPlM",
    twitter: "https://twitter.com/hiririna",
    twitch: "https://www.twitch.tv/yuzukiririna",
    facebook:  "https://www.facebook.com/ririna999",
    instagram: "https://www.instagram.com/hiririna/",
    spreadsheet: "https://docs.google.com/spreadsheets/d/1HciwDa9K66fYEIDNPm3C1lP1JoX_8zRTIc8Z8KHEwOU/edit?gid=47542312#gid=47542312",

    overrideLinks: [
      { label: '奈奈的大小事', url: 'https://docs.google.com/spreadsheets/d/1HciwDa9K66fYEIDNPm3C1lP1JoX_8zRTIc8Z8KHEwOU/edit?gid=47542312#gid=47542312', class: 'sheets', icon: '📋' },
      { label: 'HiveBee',  url: 'https://www.hivebee.com.tw/riri999/Donate',     class: 'hivebee',    icon: '🐝' },
      { label: '深度會員', url: 'https://www.hivebee.com.tw/riri999/Subscribe',  class: 'membership', icon: '💎' },
      { label: '棉花糖',   url: 'https://marshmallow-qa.com/s7sy7hnhkxrze7x',   class: 'marshmallow', icon: '🍬' },
    ],

    videos: [
      { id: "REPLACE_VIDEO_1", title: "熱門直播 #1" },
      { id: "REPLACE_VIDEO_2", title: "熱門直播 #2" },
      { id: "REPLACE_VIDEO_3", title: "熱門直播 #3" }
    ],

    // 剪輯頻道（動態抓取，參考詩雨蔻達版本）
    // ── 熱門音樂剪輯（歌回 / 唱歌）──────────────────
    musicClipsChannelIds: [
      { id: "UCShwcxuYAe6SYCaLNIAr-rg", label: "darkshine bear",                                                      typeKeywords: ["cover", "歌回", "歌切", "清唱"] },
      { id: "UCQXIlyKiz39A2IAxYJOCXkw", label: "LoveRirina",   keywords: ["結月莉莉奈", "ririna", "純奈"],            typeKeywords: ["歌回", "唱歌", "cover"] },
    ],

    // ── 熱門影片精華（遊玩實況 / RP 系列）──────────
    videoClipsChannelIds: [
      { id: "UCShwcxuYAe6SYCaLNIAr-rg", label: "darkshine bear",                                                      excludeKeywords: ["cover", "歌回", "歌切", "清唱"] },  // 全頻道皆結月莉莉奈內容
      { id: "UCQXIlyKiz39A2IAxYJOCXkw", label: "LoveRirina",   keywords: ["結月莉莉奈", "ririna", "純奈"],            excludeKeywords: ["歌回", "唱歌", "cover"] },  // 非歌回片段
      { id: "UCv9MXWx8AW5BZ07OPJyf7jg", label: "鬧欸",         keywords: ["MeloNyX"],                                 excludeKeywords: ["酒樂霧子", "Shuraku", "歌回", "cover"] },
      { id: "UC4nZ-KbmFr21Qt1lN9rmbdQ", label: "孫小毛",     keywords: ["結月莉莉奈", "ririna", "r1ri999"] },
    ],

    scheduleVideoId:  "ZgrFrLOQwwo",
    spreadsheetLabel: "奈奈的大小事",
    scheduleTitle:    "奈奈的行程表",

    refSheets: [
      { version: "Ver 1.0", url: "images/結月莉莉奈 v1.0.png" },
      { version: "Ver 2.0", url: "images/結月莉莉奈 v2.0.png" },
    ],

    songStatsGids: {
      "2026": "576233128",
      "2025": "76355894",
      "2024": "1422762545",
      "2023": "1341669122",
    },

    color: "#FCDFE7"   // 結月莉莉奈 代表色（粉嫩玫瑰）
  },

  {
    id: "ekorru",
    name: "依可露",
    nameEn: "Ekorru",
    group: "預見娛樂",
    generation: "二期生",
    avatar: "https://pbs.twimg.com/profile_images/2040061692458291200/7sfKahBl_400x400.jpg",
    coverImage: "https://pbs.twimg.com/profile_banners/1670724836996546564/1712038675/1500x500",
    tagline: "",
    taglines: [
      { context: "", text: "靠背喔, 白癡歐" }
    ],
    description: "皇家騎士團最帥氣睿智美麗的團長松鼠",
    debut: "2023-12-18",
    birthday: "7月17日",
    tags: ["台灣", "預見娛樂", "二期生", "MeloNyx", "松鼠", "騎士團長", "忠誠"],

    // 社群連結
    youtube: "https://www.youtube.com/@ekorru",
    youtubeChannelId: "UCVB6njJBYf-7Di03j8993AA",
    ytApiKey: "AIzaSyBsmWLwQLY-8wszHDufVCZaGZ0RKkRjPlM",
    twitter: "https://twitter.com/ekorru",
    twitch: "https://www.twitch.tv/ekorru",
    facebook:  "https://www.facebook.com/profile.php?id=61551716686360",
    instagram: "https://www.instagram.com/ekorru_vtuber/",
    spreadsheet: "https://docs.google.com/spreadsheets/d/1I3_WmwXk9YXXlHM2Z0lI0XEBPJSSl51ORizgqHkUWjY/edit?gid=47542312#gid=47542312",

    overrideLinks: [
      { label: '可露團長的大小事', url: 'https://docs.google.com/spreadsheets/d/1I3_WmwXk9YXXlHM2Z0lI0XEBPJSSl51ORizgqHkUWjY/edit?gid=47542312#gid=47542312', class: 'sheets', icon: '📋' },
      { label: 'HiveBee',  url: 'https://www.hivebee.com.tw/ekorru/Donate',     class: 'hivebee',    icon: '🐝' },
      { label: '深度會員', url: 'https://www.hivebee.com.tw/ekorru/Subscribe',  class: 'membership', icon: '💎' },
      { label: '棉花糖',   url: 'https://marshmallow-qa.com/3kkf9wa19fnb675',   class: 'marshmallow', icon: '🍬' },
    ],

    videos: [
      { id: "REPLACE_VIDEO_1", title: "熱門直播 #1" },
      { id: "REPLACE_VIDEO_2", title: "熱門直播 #2" },
      { id: "REPLACE_VIDEO_3", title: "熱門直播 #3" }
    ],

    scheduleVideoId:  "lLZlENnAYUQ",
    spreadsheetLabel: "可露團長的大小事",
    scheduleTitle:    "可露團長的行程表",

    refSheets: [
      { version: "Ver 1.0", url: "images/依可露 v1.0.png" },
    ],

    songStatsGids: {
      "2026": "779899835",
      "2025": "396716880",
      "2024": "1345145423",
      "2023": "870278721",
    },

    videoClipsChannelIds: [
      { id: "UCv9MXWx8AW5BZ07OPJyf7jg", label: "鬧欸", keywords: ["MeloNyX"], excludeKeywords: ["酒樂霧子", "Shuraku", "歌回", "cover"] },
    ],

    color: "#9671B0"   // 依可露 代表色（紫羅蘭）
  },

  {
    id: "wakasaito",
    name: "若櫻依兔",
    nameEn: "WakasaIto",
    group: "預見娛樂",
    generation: "二期生",
    avatar: "https://pbs.twimg.com/profile_images/1936436065180549120/T_EPkPr6_400x400.jpg",
    coverImage: "https://pbs.twimg.com/profile_banners/1669648295508201474/1734874910/1500x500",
    tagline: "",
    taglines: [
      { context: "", text: "我是氣質的偶像" },
      { context: "", text: "我不是夣女" },
      { context: "", text: "我跟凪是真實存在的" }
    ],
    description: "一隻容易失眠的小兔子🌸喜歡的東西是唱歌、寵物莓咪和草莓🍓",
    debut: "2023-12-21",
    birthday: "10月1日",
    tags: ["台灣", "預見娛樂", "二期生", "MeloNyx", "兔子", "歌勢", "草莓"],

    // 社群連結
    youtube: "https://www.youtube.com/@WakasaIto",
    youtubeChannelId: "UCGGc-KmG4fxc8D03S-H0rbw",
    ytApiKey: "AIzaSyBsmWLwQLY-8wszHDufVCZaGZ0RKkRjPlM",
    twitter: "https://twitter.com/Wakasa_Ito",
    twitch: "https://www.twitch.tv/wakasaito",
    facebook:  "https://www.facebook.com/profile.php?id=61552604717695",
    instagram: "https://www.instagram.com/wakasa.ito/",
    spreadsheet: "https://docs.google.com/spreadsheets/d/1ZiBxhztylcH5JYlRgBeQ872rHJznpYnM_Jns_RTCCKI/edit?gid=47542312#gid=47542312",

    overrideLinks: [
      { label: '氣質兔兔的大小事', url: 'https://docs.google.com/spreadsheets/d/1ZiBxhztylcH5JYlRgBeQ872rHJznpYnM_Jns_RTCCKI/edit?gid=47542312#gid=47542312', class: 'sheets', icon: '📋' },
      { label: 'HiveBee',  url: 'https://www.hivebee.com.tw/WakasaIto/Donate',     class: 'hivebee',    icon: '🐝' },
      { label: '深度會員', url: 'https://www.hivebee.com.tw/WakasaIto/Subscribe',  class: 'membership', icon: '💎' },
      { label: '棉花糖',   url: 'https://marshmallow-qa.com/xdvmp8tskakyxdr',      class: 'marshmallow', icon: '🍬' },
    ],

    videos: [
      { id: "REPLACE_VIDEO_1", title: "熱門直播 #1" },
      { id: "REPLACE_VIDEO_2", title: "熱門直播 #2" },
      { id: "REPLACE_VIDEO_3", title: "熱門直播 #3" }
    ],

    scheduleVideoId:  "5Sn6bnUbeus",
    spreadsheetLabel: "氣質兔兔的大小事",
    scheduleTitle:    "氣質兔兔的行程表",

    refSheets: [
      { version: "Ver 1.0", url: "images/若櫻依兔 v1.0.png" },
    ],

    songStatsGids: {
      "2026": "65989690",
      "2025": "1785641721",
      "2024": "653942800",
      "2023": "64486410",
    },

    musicClipsChannelIds: [
      { id: "UCpc15B6xb8OagNa7LScMOBg", label: "椪呱實驗室", keywords: ["若櫻依兔", "WakasaIto", "wakasaito", "Wakasalto"], typeKeywords: ["cover", "guitar"] },
    ],

    videoClipsChannelIds: [
      { id: "UCv9MXWx8AW5BZ07OPJyf7jg", label: "鬧欸", keywords: ["MeloNyX"], excludeKeywords: ["酒樂霧子", "Shuraku", "歌回", "cover"] },
    ],

    color: "#AED4E9"   // 若櫻依兔 代表色（霧藍）
  },

  {
    id: "whalefall",
    name: "鯨諾",
    nameEn: "Whalefall",
    group: "預見娛樂",
    generation: "三期生",
    avatar: "https://pbs.twimg.com/profile_images/2056019431940382720/6WdljP_c_400x400.jpg",
    coverImage: "https://pbs.twimg.com/profile_banners/1768216252001198080/1710825714/1500x500",
    tagline: "",
    taglines: [
      { context: "", text: "屁啦！怎麼可能！" },
    ],
    description: "來自小動物天團Alluria的陽壽和氣質擔當鯨諾，直播內容主要圍繞着文學和音樂，當然還有玩遊戲啦，但不知道為什麼總是PON PON 的",
    debut: "2024-05-10",
    birthday: "11月13日",
    tags: ["台灣", "預見娛樂", "三期生", "Alluria", "鯨魚", "文學家", "作曲編曲", "電波"],

    // 社群連結
    youtube: "https://www.youtube.com/@whalefallvtuber",
    youtubeChannelId: "UCByO_vijBgRH1aWhQNYfw8Q",
    ytApiKey: "AIzaSyBsmWLwQLY-8wszHDufVCZaGZ0RKkRjPlM",
    twitter: "https://x.com/whalefallvtuber",
    twitch: "https://www.twitch.tv/whalefallvtuber",
    facebook:  "https://www.facebook.com/profile.php?id=61557412539806",
    spreadsheet: "https://docs.google.com/spreadsheets/d/1Sd96nc7gMum_r51aSD_2yxeaTrTHCmkM9FdhulEBshs/edit?gid=130416740#gid=130416740",
    overrideLinks: [
      { label: '鯨諾的大小事', url: 'https://docs.google.com/spreadsheets/d/1Sd96nc7gMum_r51aSD_2yxeaTrTHCmkM9FdhulEBshs/edit?gid=130416740#gid=130416740', class: 'sheets', icon: '📋' },
      { label: 'HiveBee',  url: 'https://www.hivebee.com.tw/whalefallvtuber/Donate',     class: 'hivebee',    icon: '🐝' },
      { label: '深度會員', url: 'https://www.hivebee.com.tw/whalefallvtuber/Subscribe', class: 'membership', icon: '💎' },
    ],

    videos: [
      { id: "REPLACE_VIDEO_1", title: "熱門直播 #1" },
      { id: "REPLACE_VIDEO_2", title: "熱門直播 #2" },
      { id: "REPLACE_VIDEO_3", title: "熱門直播 #3" }
    ],

    musicClipsChannelIds: [
      { id: "UC7jtBvX42r_mga2HUUmoznA", label: "teiko",  keywords: ["鯨諾", "whalefall"], typeKeywords: ["歌切"] },  // 歌切彈唱系列
    ],

    videoClipsChannelIds: [
      { id: "UC7jtBvX42r_mga2HUUmoznA", label: "teiko",      keywords: ["鯨諾", "whalefall"], typeKeywords: ["週年", "生日", "應援"] },  // 週年/生日應援企劃
      { id: "UCbZrLw_Lmq062fhqdsShr5w", label: "妮妮子nini", keywords: ["鯨諾", "whalefall", "小心結天團", "派"] },
    ],

    scheduleVideoId:  "r15JQHl8KL0",
    spreadsheetLabel: "鯨諾的大小事",
    scheduleTitle:    "鯨諾的行程表",

    refSheets: [
      { version: "Ver 1.0", url: "images/鯨諾 v1.0.jpg" },
      { version: "Ver 2.0", url: "images/鯨諾 v2.0.jpg" },
    ],

    songStatsGids: {
      "2026": "592285729",
      "2025": "129810642",
      "2024": "1583821169",
    },

    color: "#66B2FF"   // 鯨諾 代表色（天藍）
  },

  {
    id: "kaialluria",
    name: "魁 Kai",
    nameEn: "Kai",
    group: "預見娛樂",
    generation: "三期生",
    avatar: "https://pbs.twimg.com/profile_images/2053099803433967616/sOoacE2S_400x400.jpg",
    coverImage: "https://pbs.twimg.com/profile_banners/1768274785728172033/1769527111/1500x500",
    tagline: "",
    taglines: [
      { context: "", text: "哭啊" },
      { context: "", text: "gogogo" },
      { context: "", text: "什麼意思" },
      { context: "", text: "下次一定" },
    ],
    description: "是個喜歡貓貓迷因&想被巧克力淹沒的黑手黨首領",
    debut: "2024-05-10",
    birthday: "8月2日",
    tags: ["台灣", "預見娛樂", "三期生", "Alluria", "貓咪", "黑手黨", "巧克力"],

    // 社群連結
    youtube: "https://www.youtube.com/@Kai_Alluria",
    youtubeChannelId: "UCh2ykSGKiJB3f-Y8w2LWplw",
    ytApiKey: "AIzaSyBsmWLwQLY-8wszHDufVCZaGZ0RKkRjPlM",
    twitter: "https://x.com/Kai_Alluria",
    twitch: "https://www.twitch.tv/kai_alluria",
    facebook:  "https://www.facebook.com/profile.php?id=61557632429774",
    instagram: "https://www.instagram.com/kai_alluria/",
    spreadsheet: "https://docs.google.com/spreadsheets/d/1YZXyEv223KaR6OP0zQhs3SwVWvzKXE14IRPDfvrC85I/edit?gid=130416740#gid=130416740",
    overrideLinks: [
      { label: '魁慨的大小事', url: 'https://docs.google.com/spreadsheets/d/1YZXyEv223KaR6OP0zQhs3SwVWvzKXE14IRPDfvrC85I/edit?gid=130416740#gid=130416740', class: 'sheets', icon: '📋' },
      { label: 'HiveBee',  url: 'https://www.hivebee.com.tw/Kai/Donate',     class: 'hivebee',    icon: '🐝' },
      { label: '深度會員', url: 'https://www.hivebee.com.tw/Kai/Subscribe', class: 'membership', icon: '💎' },
      { label: '棉花糖',   url: 'https://marshmallow-qa.com/xdco270x5hdimzj', class: 'marshmallow', icon: '🍬' },
    ],

    videos: [
      { id: "REPLACE_VIDEO_1", title: "熱門直播 #1" },
      { id: "REPLACE_VIDEO_2", title: "熱門直播 #2" },
      { id: "REPLACE_VIDEO_3", title: "熱門直播 #3" }
    ],

    musicClipsChannelIds: [
      { id: "UCuq11vOzrVqirACayTyRMHg", label: "月桂葉香包", keywords: ["魁", "Kai"], typeKeywords: ["合唱", "歌切", "歌回", "songlist", "兒歌", "cover"] },
      { id: "UCkWWf4NpdWKjcmab-mcbV3Q", label: "貓mao",      keywords: ["魁", "Kai"], typeKeywords: ["卡祖笛"] },  // 卡祖笛兄弟系列
      { id: "UCDql68LqPiQmpGH-tq4jI_g", label: "程憂",       keywords: ["魁", "Kai", "這很魁以", "國境之南"], typeKeywords: ["歌切", "cover", "線下連動"] },  // Alluria 線下連動合唱
    ],

    videoClipsChannelIds: [
      { id: "UCuq11vOzrVqirACayTyRMHg", label: "月桂葉香包", keywords: ["魁", "Kai"], excludeKeywords: ["合唱", "歌切", "歌回", "songlist", "兒歌", "cover"] },
      { id: "UCkWWf4NpdWKjcmab-mcbV3Q", label: "貓mao",      keywords: ["魁", "Kai"], excludeKeywords: ["卡祖笛"] },
      { id: "UCbZrLw_Lmq062fhqdsShr5w", label: "妮妮子nini", keywords: ["魁", "Kai", "小心結天團"] },
    ],

    scheduleVideoId:  "psgIP5rMRTA",
    spreadsheetLabel: "魁慨的大小事",
    scheduleTitle:    "魁慨的行程表",

    songStatsGids: {
      "2026": "2006254463",
      "2025": "933404155",
      "2024": "1583821169",
    },

    color: "#8B0000"   // 魁 Kai 代表色（深紅）
  },

  {
    id: "mukuru",
    name: "穆克蕗",
    nameEn: "Mukuru",
    group: "預見娛樂",
    generation: "三期生",
    avatar: "https://pbs.twimg.com/profile_images/2048735497955254272/xggURAvf_400x400.jpg",
    coverImage: "https://pbs.twimg.com/profile_banners/1767153840456077312/1765882602/1500x500",
    tagline: "",
    description: "想要成為水豚的煉金術師",
    debut: "2024-05-11",
    birthday: "7月10日",
    tags: ["台灣", "預見娛樂", "三期生", "Alluria", "水豚", "煉金術師"],

    // 社群連結
    youtube: "https://www.youtube.com/@MukuruCh",
    youtubeChannelId: "UCMwY4OKlMbwJYzT_wDAXs3w",
    ytApiKey: "AIzaSyBsmWLwQLY-8wszHDufVCZaGZ0RKkRjPlM",
    twitter: "https://x.com/Mukuruvtuber",
    twitch: "https://www.twitch.tv/mukuru_vtuber",
    facebook:  "https://www.facebook.com/profile.php?id=61557195855008",
    instagram: "https://www.instagram.com/mukuru_vtuber/",
    spreadsheet: "https://docs.google.com/spreadsheets/d/1_hmrmI-L1cni5pwt_52CUcyZ8njXK0KtqnEq5FZka8U/edit?gid=130416740#gid=130416740",
    overrideLinks: [
      { label: '穆總的大小事', url: 'https://docs.google.com/spreadsheets/d/1_hmrmI-L1cni5pwt_52CUcyZ8njXK0KtqnEq5FZka8U/edit?gid=130416740#gid=130416740', class: 'sheets', icon: '📋' },
      { label: 'HiveBee',  url: 'https://www.hivebee.com.tw/Mukuru/Donate',     class: 'hivebee',    icon: '🐝' },
      { label: '深度會員', url: 'https://www.hivebee.com.tw/Mukuru/Subscribe', class: 'membership', icon: '💎' },
      { label: '棉花糖',   url: 'https://marshmallow-qa.com/oahdwpbhn26xgh5', class: 'marshmallow', icon: '🍬' },
    ],

    videos: [
      { id: "REPLACE_VIDEO_1", title: "熱門直播 #1" },
      { id: "REPLACE_VIDEO_2", title: "熱門直播 #2" },
      { id: "REPLACE_VIDEO_3", title: "熱門直播 #3" }
    ],

    musicClipsChannelIds: [
      { id: "UCuq11vOzrVqirACayTyRMHg", label: "月桂葉香包", keywords: ["穆克蕗", "穆總", "Mukuru"], typeKeywords: ["合唱", "歌切", "歌回", "songlist", "兒歌", "cover"] },
      { id: "UCDql68LqPiQmpGH-tq4jI_g", label: "程憂",       keywords: ["穆克蕗", "Mukuru", "mukuru", "蕗live", "國境之南"], typeKeywords: ["歌切", "cover", "歌回", "合唱", "線下連動"] },
    ],

    videoClipsChannelIds: [
      { id: "UCuq11vOzrVqirACayTyRMHg", label: "月桂葉香包", keywords: ["穆克蕗", "穆總", "Mukuru"], excludeKeywords: ["合唱", "歌切", "歌回", "songlist", "兒歌", "cover"] },
      { id: "UCDql68LqPiQmpGH-tq4jI_g", label: "程憂",       keywords: ["穆克蕗", "Mukuru", "mukuru", "蕗live"], excludeKeywords: ["歌切", "cover", "歌回", "合唱", "線下連動"] },
      { id: "UCyOGgk-ScfBwkkeej_RQPYw", label: "晨茉",       keywords: ["穆克蕗", "穆總", "Mukuru", "mukuru"], excludeKeywords: ["歌切", "cover", "歌回", "合唱", "線下連動"] },
      { id: "UCk1ZS3ZsYNbwXsxaxtJW7Dg", label: "蛋餅_owo",  keywords: ["穆克蕗", "穆總", "Mukuru", "mukuru"], excludeKeywords: ["歌切", "cover", "歌回", "合唱", "線下連動"] },
      { id: "UCbZrLw_Lmq062fhqdsShr5w", label: "妮妮子nini", keywords: ["穆克蕗", "穆總", "Mukuru", "穆", "小心結天團"] },
    ],

    scheduleVideoId:  "fO8nKY_tpzM",
    spreadsheetLabel: "穆總的大小事",
    scheduleTitle:    "穆總的行程表",

    songStatsGids: {
      "2026": "532167774",
      "2025": "1796269030",
      "2024": "1583821169",
    },

    color: "#DCC5E0"   // 穆克蕗 代表色（淡紫）
  },

  {
    id: "nyrfier",
    name: "涅爾菲",
    nameEn: "Nyrfier",
    group: "預見娛樂",
    generation: "三期生",
    avatar: "https://pbs.twimg.com/profile_images/2052764874808385536/3tKm2bSY_400x400.jpg",
    coverImage: "https://pbs.twimg.com/profile_banners/1765762475037966336/1777735064/1500x500",
    tagline: "",
    taglines: [
      { context: "", text: "好累喔" },
      { context: "", text: "阿對對對" }
    ],
    description: "曾經是一隻蛇，對，會嘶嘶嘶那種，比看起來更容易害羞，還請各位小心餵食(,,・ω・,,)",
    debut: "2024-05-11",
    birthday: "10月12日",
    tags: ["台灣", "預見娛樂", "三期生", "Alluria", "蛇", "害羞"],

    // 社群連結
    youtube: "https://www.youtube.com/@Nyrfier",
    youtubeChannelId: "UCE6fkoGPGOoWE6pYDalwLZQ",
    ytApiKey: "AIzaSyBsmWLwQLY-8wszHDufVCZaGZ0RKkRjPlM",
    twitter: "https://x.com/Nyrfier",
    twitch: "https://www.twitch.tv/nyrfier",
    facebook:  "https://www.facebook.com/nyrfier",
    instagram: "https://www.instagram.com/nyrfier/",
    spreadsheet: "https://docs.google.com/spreadsheets/d/1XeB6d74Tw8tdvl5jeQYCNbEEgrMPK24OMTfTWEHR6is/edit?gid=130416740#gid=130416740",
    overrideLinks: [
      { label: '爾菲的大小事', url: 'https://docs.google.com/spreadsheets/d/1XeB6d74Tw8tdvl5jeQYCNbEEgrMPK24OMTfTWEHR6is/edit?gid=130416740#gid=130416740', class: 'sheets', icon: '📋' },
      { label: 'HiveBee',  url: 'https://www.hivebee.com.tw/Nyrfier/Donate',     class: 'hivebee',    icon: '🐝' },
      { label: '深度會員', url: 'https://www.hivebee.com.tw/Nyrfier/Subscribe', class: 'membership', icon: '💎' },
      { label: '棉花糖',   url: 'https://marshmallow-qa.com/4176c8dv62xp8tj', class: 'marshmallow', icon: '🍬' },
    ],

    videos: [
      { id: "REPLACE_VIDEO_1", title: "熱門直播 #1" },
      { id: "REPLACE_VIDEO_2", title: "熱門直播 #2" },
      { id: "REPLACE_VIDEO_3", title: "熱門直播 #3" }
    ],

    // 剪輯頻道（動態抓取，參考詩雨蔻達版本）
    musicClipsChannelIds: [
      { id: "UC4BENWXih6K8ETLMOQglk8Q", label: "海默ッ",     keywords: ["涅爾菲", "nyrfier"], typeKeywords: ["歌切", "合唱"] },
      { id: "UCuq11vOzrVqirACayTyRMHg", label: "月桂葉香包", keywords: ["涅爾菲", "Nyrfier", "爾菲"], typeKeywords: ["合唱", "歌切", "歌回", "songlist", "兒歌", "cover"] },
      { id: "UCkWWf4NpdWKjcmab-mcbV3Q", label: "貓mao",      keywords: ["涅爾菲", "Nyrfier", "爾菲"], typeKeywords: ["卡祖笛"] },  // 卡祖笛兄弟系列
      { id: "UCDql68LqPiQmpGH-tq4jI_g", label: "程憂",       keywords: ["涅爾菲", "Nyrfier", "nyrfier", "爾菲", "涅手涅腳", "國境之南"], typeKeywords: ["歌切", "線下連動"] },
    ],
    videoClipsChannelIds: [
      { id: "UC4BENWXih6K8ETLMOQglk8Q", label: "海默ッ",     keywords: ["涅爾菲", "nyrfier"], excludeKeywords: ["歌切", "合唱"] },
      { id: "UCuq11vOzrVqirACayTyRMHg", label: "月桂葉香包", keywords: ["涅爾菲", "Nyrfier", "爾菲"], excludeKeywords: ["合唱", "歌切", "歌回", "songlist", "兒歌", "cover"] },
      { id: "UCkWWf4NpdWKjcmab-mcbV3Q", label: "貓mao",      keywords: ["涅爾菲", "Nyrfier", "爾菲"], excludeKeywords: ["卡祖笛"] },
      { id: "UCbZrLw_Lmq062fhqdsShr5w", label: "妮妮子nini", keywords: ["涅爾菲", "Nyrfier", "爾菲", "魁菲", "小心結天團"] },
    ],

    scheduleVideoId:  "fl96oXs9Q1E",
    spreadsheetLabel: "爾菲的大小事",
    scheduleTitle:    "爾菲的行程表",

    songStatsGids: {
      "2026": "339833405",
      "2025": "125957373",
      "2024": "1583821169",
    },

    color: "#008B8B"   // 涅爾菲 代表色（暗青）
  },

  {
    id: "fuka22",
    name: "量產型猫飼步歌貳貳機 Fuka22",
    shortName: "貳貳",
    nameEn: "Fuka22",
    group: "預見娛樂",
    generation: "四期生",
    avatar: "https://pbs.twimg.com/profile_images/1992530964615163905/1U7O9j0Q_400x400.jpg",
    coverImage: "https://pbs.twimg.com/profile_banners/1800118433755086848/1718715523/1500x500",
    tagline: "",
    description: "給我罐罐！喵！ฅ^✧ﻌ✧^ฅ 給我貓貓也可以喔！ฅ^ↀﻌↀ^ฅ",
    debut: "2024-09-11",
    birthday: "11月22日",
    tags: ["台灣", "預見娛樂", "四期生", "音雲漫步", "貓咪", "罐罐"],

    // 社群連結
    youtube: "https://www.youtube.com/@Nekokaifuka22",
    youtubeChannelId: "UCbr-a2yffSZRjEbwtB1s2ow",
    ytApiKey: "AIzaSyBsmWLwQLY-8wszHDufVCZaGZ0RKkRjPlM",
    twitter: "https://x.com/nekokaifuka22",
    twitch: "https://www.twitch.tv/nekokaifuka",
    facebook:  "https://www.facebook.com/nekokaifuka22/",
    instagram: "https://www.instagram.com/nekokaifuka22/",
    spreadsheet: "https://docs.google.com/spreadsheets/d/1Wm4qzVapSKuzc5yk1lpD7aa-4CFvL5nGeAzY6BIj-tQ/edit?gid=130416740#gid=130416740",
    overrideLinks: [
      { label: '貳貳的大小事', url: 'https://docs.google.com/spreadsheets/d/1Wm4qzVapSKuzc5yk1lpD7aa-4CFvL5nGeAzY6BIj-tQ/edit?gid=130416740#gid=130416740', class: 'sheets', icon: '📋' },
      { label: 'HiveBee',  url: 'https://www.hivebee.com.tw/nekokaifuka22/Donate',     class: 'hivebee',    icon: '🐝' },
      { label: '深度會員', url: 'https://www.hivebee.com.tw/nekokaifuka22/Subscribe', class: 'membership', icon: '💎' },
      { label: '棉花糖',   url: 'https://marshmallow-qa.com/o8my2qsvfd8q1we', class: 'marshmallow', icon: '🍬' },
    ],

    videos: [
      { id: "REPLACE_VIDEO_1", title: "熱門直播 #1" },
      { id: "REPLACE_VIDEO_2", title: "熱門直播 #2" },
      { id: "REPLACE_VIDEO_3", title: "熱門直播 #3" }
    ],

    musicClipsChannelIds: [
      { id: "UCUxpbqNNzWup9PZXdLUS8Jw", label: "阿嗚", keywords: ["量產型", "Fuka22", "貳貳"], typeKeywords: ["cover", "威風堂々", "嘉賓"] },
    ],

    videoClipsChannelIds: [
      { id: "UCUxpbqNNzWup9PZXdLUS8Jw", label: "阿嗚", keywords: ["量產型", "Fuka22", "貳貳"], excludeKeywords: ["cover", "威風堂々", "嘉賓"] },
    ],

    scheduleVideoId:  "haBTRQQeUoY",
    spreadsheetLabel: "貳貳的大小事",
    scheduleTitle:    "貳貳的行程表",

    refSheets: [
      { version: "Ver 1.0", url: "images/貳貳 v1.0.jpg" },
    ],

    songStatsGids: {
      "2026": "1294831140",
      "2025": "1598736421",
      "2024": "1583821169",
    },

    color: "#DFF7F3"   // 貳貳 代表色（薄荷白）
  },

  {
    id: "chita",
    name: "崎塔",
    nameEn: "Chita",
    group: "預見娛樂",
    generation: "五期生",
    avatar: "https://pbs.twimg.com/profile_images/2039385129848905729/9pojrhsS_400x400.jpg",
    coverImage: "https://pbs.twimg.com/profile_banners/1867131518747095040/1761495244/1500x500",
    tagline: "",
    taglines: [
      { context: "遊戲時", text: "我是個波貝、打那是什麼勾巴" },
      { context: "轉盤時", text: "屁啦屁啦屁啦、不可能不可能不可能" }
    ],
    description: "想成為貓的豹　(⁰▿⁰)",
    debut: "2025-04-18",
    birthday: "9月20日",
    tags: ["台灣", "預見娛樂", "五期生", "CaKano", "豹", "遊戲勢"],

    // 社群連結
    youtube: "https://www.youtube.com/@Chita_CH",
    youtubeChannelId: "UC253VhyFxwgm4w1FC6-PoxQ",
    ytApiKey: "AIzaSyBsmWLwQLY-8wszHDufVCZaGZ0RKkRjPlM",
    twitter: "https://x.com/chita_cakano",
    twitch: "https://www.twitch.tv/chita_cakano",
    facebook:  "https://www.facebook.com/Chita.Cakano",
    instagram: "https://www.instagram.com/chita_cakano/",
    spreadsheet: "https://docs.google.com/spreadsheets/d/1psY9WxG-Sdajms-s8oJ7LoEy0i6n6Jp6fiqlNz9jEYQ/edit?gid=130416740#gid=130416740",
    overrideLinks: [
      { label: '崎塔的大小事', url: 'https://docs.google.com/spreadsheets/d/1psY9WxG-Sdajms-s8oJ7LoEy0i6n6Jp6fiqlNz9jEYQ/edit?gid=130416740#gid=130416740', class: 'sheets', icon: '📋' },
      { label: 'HiveBee',  url: 'https://www.hivebee.com.tw/chita/Donate',     class: 'hivebee',    icon: '🐝' },
      { label: '深度會員', url: 'https://www.hivebee.com.tw/chita/Subscribe', class: 'membership', icon: '💎' },
      { label: '棉花糖',   url: 'https://marshmallow-qa.com/57v5h7z1m9gxuyk', class: 'marshmallow', icon: '🍬' },
    ],

    videos: [
      { id: "REPLACE_VIDEO_1", title: "熱門直播 #1" },
      { id: "REPLACE_VIDEO_2", title: "熱門直播 #2" },
      { id: "REPLACE_VIDEO_3", title: "熱門直播 #3" }
    ],

    musicClipsChannelIds: [
      { id: "UC4BENWXih6K8ETLMOQglk8Q", label: "海默ッ",     keywords: ["崎塔", "chita"], typeKeywords: ["歌切"] },
      { id: "UCitmNfWNIMaIOXt8G5T1BNQ", label: "檸檬兮兮",   typeKeywords: ["歌回", "之歌"] },   // 歌回剪輯 & CaKano之歌 系列
      { id: "UCuq11vOzrVqirACayTyRMHg", label: "月桂葉香包", keywords: ["崎塔", "Chita"], typeKeywords: ["合唱", "歌切", "歌回", "songlist", "兒歌", "cover"] },
      { id: "UCMjxlxGJXiWyiSYcgYdvpMg", label: "miiyaミイヤ", keywords: ["崎塔", "Chita"], typeKeywords: ["歌切", "歌回", "cover"] },
    ],

    videoClipsChannelIds: [
      { id: "UC4BENWXih6K8ETLMOQglk8Q", label: "海默ッ",     keywords: ["崎塔", "chita"], excludeKeywords: ["歌切"] },
      { id: "UCitmNfWNIMaIOXt8G5T1BNQ", label: "檸檬兮兮",   excludeKeywords: ["歌回", "之歌"] },  // 非音樂的非官方精華
      { id: "UCuq11vOzrVqirACayTyRMHg", label: "月桂葉香包", keywords: ["崎塔", "Chita"], excludeKeywords: ["合唱", "歌切", "歌回", "songlist", "兒歌", "cover"] },
      { id: "UCbZrLw_Lmq062fhqdsShr5w", label: "妮妮子nini", keywords: ["崎塔", "Chita", "小心結天團", "派"] },
    ],

    scheduleVideoId:  "JAzDEWJN8LM",
    spreadsheetLabel: "崎塔的大小事",
    scheduleTitle:    "崎塔的行程表",

    refSheets: [
      { version: "Ver 1.0", url: "images/崎塔 v1.0.jpg" },
    ],

    songStatsGids: {
      "2025": "1583821169",
    },

    color: "#6EE8DB"   // 崎塔 代表色（青綠）
  },

  {
    id: "chamamatti",
    name: "茶帽瑪緹",
    nameEn: "chamamatti",
    group: "預見娛樂",
    generation: "六期生",
    avatar: "https://pbs.twimg.com/profile_images/2039205870517809152/quUDhptw_400x400.jpg",
    coverImage: "https://pbs.twimg.com/profile_banners/1938167133592268800/1772707441/1500x500",
    tagline: "",
    description: "「請坐吧，無論你今天過得如何，都能在這裡稍稍歇息一下。」",
    debut: "2025-11-28",
    birthday: "10月6日",
    tags: ["台灣", "預見娛樂", "六期生", "ælis", "溫柔", "療癒"],

    // 社群連結
    youtube: "https://www.youtube.com/@chamamatti",
    youtubeChannelId: "UCcT9BcGu92uvq_R1BKvw2fw",
    ytApiKey: "AIzaSyBsmWLwQLY-8wszHDufVCZaGZ0RKkRjPlM",
    twitter: "https://x.com/ch9mamatt1",
    twitch: "https://www.twitch.tv/aelis_chamamatti",
    facebook:  "https://www.facebook.com/chamamatti/",
    instagram: "https://www.instagram.com/aelis_chamamatti/",
    spreadsheet: "https://docs.google.com/spreadsheets/d/1KhII6yxRC1bR8X1Qhrd7OqYiOGyh651yimsYzi-diKg/edit?gid=130416740#gid=130416740",
    overrideLinks: [
      { label: '瑪緹的大小事', url: 'https://docs.google.com/spreadsheets/d/1KhII6yxRC1bR8X1Qhrd7OqYiOGyh651yimsYzi-diKg/edit?gid=130416740#gid=130416740', class: 'sheets', icon: '📋' },
      { label: 'HiveBee',  url: 'https://www.hivebee.com.tw/chamamatti/Donate',     class: 'hivebee',    icon: '🐝' },
      { label: '深度會員', url: 'https://www.hivebee.com.tw/chamamatti/Subscribe', class: 'membership', icon: '💎' },
    ],

    videos: [
      { id: "REPLACE_VIDEO_1", title: "熱門直播 #1" },
      { id: "REPLACE_VIDEO_2", title: "熱門直播 #2" },
      { id: "REPLACE_VIDEO_3", title: "熱門直播 #3" }
    ],

    musicClipsChannelIds: [
      { id: "UCfy_OLAzKrZH-UGBlwndP6A", label: "浮生0508", keywords: ["茶帽瑪緹", "chamamatti", "帽帽"], typeKeywords: ["小年夜"] },
    ],

    videoClipsChannelIds: [
      { id: "UCfy_OLAzKrZH-UGBlwndP6A", label: "浮生0508",   keywords: ["茶帽瑪緹", "chamamatti", "帽帽"],          excludeKeywords: ["小年夜"] },
      { id: "UCbZrLw_Lmq062fhqdsShr5w", label: "妮妮子nini", keywords: ["茶帽瑪緹", "chamamatti", "帽帽", "ælis"] },
    ],

    scheduleVideoId:  "_Xf6y0jkl-Q",
    spreadsheetLabel: "瑪緹的大小事",
    scheduleTitle:    "瑪緹的行程表",

    refSheets: [
      { version: "Ver 1.0", url: "images/茶帽瑪緹 v1.0.jpg" },
    ],

    songStatsGids: {
      "2026": "1217976372",
      "2025": "1583821169",
    },

    color: "#48D6CA"   // 茶帽瑪緹 代表色（青藍）
  },

  {
    id: "shiroleon",
    name: "希洛萊昂",
    nameEn: "Shiro Leon",
    group: "預見娛樂",
    generation: "三期生",
    avatar: "https://pbs.twimg.com/profile_images/1924669241590218753/o_vbRJAJ_400x400.jpg",
    coverImage: "https://pbs.twimg.com/profile_banners/1735622572354703360/1711083555/1500x500",
    tagline: "",
    taglines: [
      { context: "", text: "白癡喔！" },
      { context: "", text: "蛤？" },
      { context: "", text: "怎麼啦小寶貝" }
    ],
    description: "♔歡迎來到我的國度♔",
    debut: "2024-05-11",
    birthday: "4月2日",
    tags: ["台灣", "預見娛樂", "三期生", "Alluria", "國度", "帝王"],

    // 社群連結
    youtube: "https://www.youtube.com/@shiro_leon/featured",
    youtubeChannelId: "UCIqsDMfhM3yeM9l6kNyEURg",
    ytApiKey: "AIzaSyBsmWLwQLY-8wszHDufVCZaGZ0RKkRjPlM",
    twitter: "https://x.com/ShiroLeon_",
    twitch: "https://www.twitch.tv/shirol30n",
    facebook:  "https://www.facebook.com/profile.php?id=61557139277358",
    instagram: "https://www.instagram.com/shiroleon_0402",
    spreadsheet: "https://docs.google.com/spreadsheets/d/1ukOsxfhoUFdqHDgucEJAu_xQOZTT-f-f8VrImew_1Vg/edit?gid=130416740#gid=130416740",
    overrideLinks: [
      { label: '希洛的大小事', url: 'https://docs.google.com/spreadsheets/d/1ukOsxfhoUFdqHDgucEJAu_xQOZTT-f-f8VrImew_1Vg/edit?gid=130416740#gid=130416740', class: 'sheets', icon: '📋' },
      { label: 'HiveBee',  url: 'https://www.hivebee.com.tw/ShiroLeon/Donate',     class: 'hivebee',    icon: '🐝' },
      { label: '深度會員', url: 'https://www.hivebee.com.tw/ShiroLeon/Subscribe', class: 'membership', icon: '💎' },
      { label: '棉花糖',   url: 'https://marshmallow-qa.com/lcedt6tbm7j9olg', class: 'marshmallow', icon: '🍬' },
    ],

    videos: [
      { id: "REPLACE_VIDEO_1", title: "熱門直播 #1" },
      { id: "REPLACE_VIDEO_2", title: "熱門直播 #2" },
      { id: "REPLACE_VIDEO_3", title: "熱門直播 #3" }
    ],

    musicClipsChannelIds: [
      { id: "UCuq11vOzrVqirACayTyRMHg", label: "月桂葉香包", keywords: ["希洛萊昂", "希洛", "ShiroLeon"], typeKeywords: ["合唱", "歌切", "歌回", "songlist", "兒歌", "cover"] },
      { id: "UCDql68LqPiQmpGH-tq4jI_g", label: "程憂",       keywords: ["希洛萊昂", "希洛", "ShiroLeon", "國境之南"], typeKeywords: ["歌切", "cover", "線下連動"] },  // Alluria 線下連動合唱
    ],

    videoClipsChannelIds: [
      { id: "UCuq11vOzrVqirACayTyRMHg", label: "月桂葉香包", keywords: ["希洛萊昂", "希洛", "ShiroLeon"], excludeKeywords: ["合唱", "歌切", "歌回", "songlist", "兒歌", "cover"] },
      { id: "UCkWWf4NpdWKjcmab-mcbV3Q", label: "貓mao",      keywords: ["希洛萊昂", "希洛", "ShiroLeon"], excludeKeywords: ["卡祖笛"] },
    ],

    scheduleVideoId:  "TYDgPZbXl34",
    spreadsheetLabel: "希洛的大小事",
    scheduleTitle:    "希洛的行程表",

    refSheets: [
      { version: "Ver 1.0", urls: ["images/希洛萊昂 v1.0.jpg", "images/希洛萊昂 v1.0-1.jpg"] },
      { version: "Ver 2.0", url: "images/希洛萊昂 v2.0.jpg" },
    ],

    songStatsGids: {
      "2026": "1568612405",
      "2025": "959970978",
      "2024": "1583821169",
    },

    color: "#FBFFBC"   // 希洛萊昂 代表色（奶油黃）
  },

  // ── 四期生 ─────────────────────────────────────
  {
    id: "momowami",
    name: "百百波美",
    nameEn: "BarkBarkPomi",
    group: "預見娛樂",
    generation: "四期生",
    avatar: "https://pbs.twimg.com/profile_images/1995498526294609920/tSOMou_Y_400x400.jpg",
    coverImage: "https://pbs.twimg.com/profile_banners/1735595865698607104/1758886688/1500x500",
    tagline: "",
    taglines: [
      { context: "", text: "艾連是我老公" }
    ],
    description: "\"要不要聽我說兩句廢話呢?\" \"嘻嘻我說完ㄌ\" \"路過此地！屁眼留下來(≖ᴗ≖๑)\"",
    debut: "2024-09-12",
    birthday: "4月12日",
    tags: ["台灣", "預見娛樂", "四期生", "音雲漫步", "廢話", "搞笑"],

    youtube: "https://www.youtube.com/@BarkBarkPomi",
    youtubeChannelId: "UC5_5l_AfpgJeYCxQnMnL-7A",
    ytApiKey: "AIzaSyBsmWLwQLY-8wszHDufVCZaGZ0RKkRjPlM",
    twitter: "https://x.com/BarkBarkPomi",
    twitch: "https://www.twitch.tv/barkbarkpomi",
    facebook:  "https://www.facebook.com/NekumoWanderProject",
    instagram: "https://www.instagram.com/barkbarkpomi/",
    spreadsheet: "https://docs.google.com/spreadsheets/d/1yUMlbwC5wLRKL56z9n21jHK0BTFRMlK6SCfGlp7J98g/edit?gid=130416740#gid=130416740",
    overrideLinks: [
      { label: '波美的大小事', url: 'https://docs.google.com/spreadsheets/d/1yUMlbwC5wLRKL56z9n21jHK0BTFRMlK6SCfGlp7J98g/edit?gid=130416740#gid=130416740', class: 'sheets', icon: '📋' },
      { label: 'HiveBee',  url: 'https://www.hivebee.com.tw/BarkBarkPomi/Donate',     class: 'hivebee',    icon: '🐝' },
      { label: '深度會員', url: 'https://www.hivebee.com.tw/BarkBarkPomi/Subscribe', class: 'membership', icon: '💎' },
      { label: '棉花糖',   url: 'https://marshmallow-qa.com/yd8135pe2m366q3', class: 'marshmallow', icon: '🍬' },
    ],

    videos: [
      { id: "REPLACE_VIDEO_1", title: "熱門直播 #1" },
      { id: "REPLACE_VIDEO_2", title: "熱門直播 #2" },
      { id: "REPLACE_VIDEO_3", title: "熱門直播 #3" }
    ],

    musicClipsChannelIds: [
      { id: "UCUxpbqNNzWup9PZXdLUS8Jw", label: "阿嗚", keywords: ["百百波美", "波美", "BarkBarkPomi", "Pomi"], typeKeywords: ["cover", "米津玄師", "HoneyWorks", "愛言葉", "歌式"] },
    ],

    videoClipsChannelIds: [
      { id: "UCUxpbqNNzWup9PZXdLUS8Jw", label: "阿嗚",       keywords: ["百百波美", "波美", "BarkBarkPomi", "Pomi"], excludeKeywords: ["cover", "米津玄師", "HoneyWorks", "愛言葉", "歌式"] },
      { id: "UCbZrLw_Lmq062fhqdsShr5w", label: "妮妮子nini", keywords: ["百百波美", "波美", "BarkBarkPomi", "Pomi", "派"] },
    ],

    scheduleVideoId:  "bSPwY0KHks4",
    spreadsheetLabel: "波美的大小事",
    scheduleTitle:    "波美的行程表",

    refSheets: [
      { version: "Ver 1.0", url: "images/百百波美 v1.0.jpg" },
    ],

    songStatsGids: {
      "2026": "1197900768",
      "2025": "2141809526",
      "2024": "1583821169",
    },

    color: "#D03869"   // 百百波美 代表色（玫紅）
  },

  {
    id: "cocoro",
    name: "心 cocor0",
    nameEn: "cocor0",
    group: "預見娛樂",
    generation: "四期生",
    avatar: "https://pbs.twimg.com/profile_images/1803285070645796864/dqPN0I-3_400x400.jpg",
    coverImage: "https://pbs.twimg.com/profile_banners/1800430912188084224/1718093197/1500x500",
    tagline: "",
    description: "博士都叫我可可, 大家也叫我可可就好 🉑",
    debut: "2024-09-13",
    birthday: "3月3日",
    tags: ["台灣", "預見娛樂", "四期生", "音雲漫步", "可可"],

    youtube: "https://www.youtube.com/@cocor0_0303",
    youtubeChannelId: "UC9NVe55fqFSC9iOZQJrlwrQ",
    ytApiKey: "AIzaSyBsmWLwQLY-8wszHDufVCZaGZ0RKkRjPlM",
    twitter: "https://x.com/cocor0_0303",
    twitch: "https://www.twitch.tv/cocor0_0303",
    facebook:  "https://www.facebook.com/NekumoWanderProject",
    instagram: "https://www.instagram.com/cocor0_0303/",
    spreadsheet: "https://docs.google.com/spreadsheets/d/1C0uXF-iSvTFRqamTMrFGQdTocxO7kUiVDW_1vCxVZUE/edit?gid=130416740#gid=130416740",
    overrideLinks: [
      { label: '可可的大小事', url: 'https://docs.google.com/spreadsheets/d/1C0uXF-iSvTFRqamTMrFGQdTocxO7kUiVDW_1vCxVZUE/edit?gid=130416740#gid=130416740', class: 'sheets', icon: '📋' },
      { label: 'HiveBee',  url: 'https://www.hivebee.com.tw/cocor0/Donate',     class: 'hivebee',    icon: '🐝' },
      { label: '深度會員', url: 'https://www.hivebee.com.tw/cocor0/Subscribe', class: 'membership', icon: '💎' },
    ],

    videos: [
      { id: "REPLACE_VIDEO_1", title: "熱門直播 #1" },
      { id: "REPLACE_VIDEO_2", title: "熱門直播 #2" },
      { id: "REPLACE_VIDEO_3", title: "熱門直播 #3" }
    ],

    musicClipsChannelIds: [
      { id: "UCUxpbqNNzWup9PZXdLUS8Jw", label: "阿嗚", keywords: ["cocor0", "可可", "心 cocor0"], typeKeywords: ["cover"] },
    ],

    videoClipsChannelIds: [
      { id: "UCUxpbqNNzWup9PZXdLUS8Jw", label: "阿嗚", keywords: ["cocor0", "可可", "心 cocor0"], excludeKeywords: ["cover"] },
    ],

    scheduleVideoId:  "q1ls6HmTVwc",
    spreadsheetLabel: "可可的大小事",
    scheduleTitle:    "可可的行程表",

    refSheets: [
      { version: "Ver 1.0", url: "images/心 cocor0 v1.0.jpg" },
    ],

    songStatsGids: {
      "2026": "490206861",
      "2025": "1661370640",
      "2024": "1583821169",
    },

    color: "#FFB7C5"   // 心 cocor0 代表色（櫻花粉）
  },

  {
    id: "hanetobi",
    name: "羽芝扉扉",
    nameEn: "Uchi Fifi",
    group: "預見娛樂",
    generation: "四期生",
    avatar: "https://pbs.twimg.com/profile_images/2039510641430663168/4xpOGnRl_400x400.jpg",
    coverImage: "https://pbs.twimg.com/profile_banners/1800777319789019136/1718174532/1500x500",
    tagline: "",
    taglines: [
      { context: "", text: "關我屁事" },
      { context: "", text: "北七" },
      { context: "", text: "好想工作" },
      { context: "", text: "發瘋" },
      { context: "", text: "吃答辯吧" }
    ],
    description: "有網路的地方就會有扉扉",
    debut: "2024-09-14",
    birthday: "1月14日",
    tags: ["台灣", "預見娛樂", "四期生", "音雲漫步"],

    youtube: "https://www.youtube.com/@uchififi",
    youtubeChannelId: "UCMhjWfFiyxVjNWBJpkDotcg",
    ytApiKey: "AIzaSyBsmWLwQLY-8wszHDufVCZaGZ0RKkRjPlM",
    twitter: "https://x.com/uchi_fifi",
    twitch: "https://www.twitch.tv/uchififi",
    facebook:  "https://www.facebook.com/uchif1f1/",
    instagram: "https://www.instagram.com/uchi_fifi",
    spreadsheet: "https://docs.google.com/spreadsheets/d/1-KHxcePbW1x5PYboBtEWTSyjUDznk9mGM1waQ6aEgVg/edit?gid=130416740#gid=130416740",
    overrideLinks: [
      { label: '扉扉的大小事', url: 'https://docs.google.com/spreadsheets/d/1-KHxcePbW1x5PYboBtEWTSyjUDznk9mGM1waQ6aEgVg/edit?gid=130416740#gid=130416740', class: 'sheets', icon: '📋' },
      { label: 'HiveBee',  url: 'https://www.hivebee.com.tw/uchififi/Donate',     class: 'hivebee',    icon: '🐝' },
      { label: '深度會員', url: 'https://www.hivebee.com.tw/uchififi/Subscribe', class: 'membership', icon: '💎' },
      { label: '棉花糖',   url: 'https://marshmallow-qa.com/icg1idg6i513ru4', class: 'marshmallow', icon: '🍬' },
    ],

    videos: [
      { id: "REPLACE_VIDEO_1", title: "熱門直播 #1" },
      { id: "REPLACE_VIDEO_2", title: "熱門直播 #2" },
      { id: "REPLACE_VIDEO_3", title: "熱門直播 #3" }
    ],

    musicClipsChannelIds: [
      { id: "UCUxpbqNNzWup9PZXdLUS8Jw", label: "阿嗚", keywords: ["羽芝扉扉", "扉扉", "fifi", "uchififi"], typeKeywords: ["cover", "嘉賓"] },
    ],

    videoClipsChannelIds: [
      { id: "UCUxpbqNNzWup9PZXdLUS8Jw", label: "阿嗚", keywords: ["羽芝扉扉", "扉扉", "fifi", "uchififi"], excludeKeywords: ["cover", "嘉賓"] },
    ],

    scheduleVideoId:  "Vk_0sRnEmp0",
    spreadsheetLabel: "扉扉的大小事",
    scheduleTitle:    "扉扉的行程表",

    refSheets: [
      { version: "Ver 1.0", url: "images/羽芝扉扉 v1.0.jpg" },
    ],

    songStatsGids: {
      "2026": "285758286",
      "2025": "635663891",
      "2024": "1583821169",
    },

    color: "#FFBA84"   // 羽芝扉扉 代表色（暖橘）
  },

  // ── 五期生 ─────────────────────────────────────
  {
    id: "nokori",
    name: "諾恪里",
    nameEn: "Nokori",
    group: "預見娛樂",
    generation: "五期生",
    avatar: "https://pbs.twimg.com/profile_images/2045739065392476160/7v9ySc-G_400x400.jpg",
    coverImage: "https://pbs.twimg.com/profile_banners/2032034853131337735/1773318142/1500x500",
    tagline: "",
    description: "在熬夜、焦慮與奶茶之間，選擇成為魔法少女ฅ •ﻌ•♡",
    debut: "2025-04-19",
    birthday: "6月21日",
    tags: ["台灣", "預見娛樂", "五期生", "CaKano", "魔法少女", "奶茶"],

    youtube: "https://www.youtube.com/@NokoriCaKaNo",
    youtubeChannelId: "UCd4HPP11UbXLuvvhOjSABmw",
    ytApiKey: "AIzaSyBsmWLwQLY-8wszHDufVCZaGZ0RKkRjPlM",
    twitter: "https://x.com/nokori_0420",
    twitch: "https://www.twitch.tv/nokori0420",
    facebook:  "https://www.facebook.com/NokoriCaKaNo",
    instagram: "https://www.instagram.com/n0kori_/",
    spreadsheet: "https://docs.google.com/spreadsheets/d/1H0BkPVKCPEXLsxNA_XlN_hf0Kn1t-FTuCDQ-ivLZ3z0/edit?gid=130416740#gid=130416740",
    overrideLinks: [
      { label: '諾諾的大小事', url: 'https://docs.google.com/spreadsheets/d/1H0BkPVKCPEXLsxNA_XlN_hf0Kn1t-FTuCDQ-ivLZ3z0/edit?gid=130416740#gid=130416740', class: 'sheets', icon: '📋' },
      { label: 'HiveBee',  url: 'https://www.hivebee.com.tw/Nokoricakano/Donate',     class: 'hivebee',    icon: '🐝' },
      { label: '深度會員', url: 'https://www.hivebee.com.tw/Nokoricakano/Subscribe', class: 'membership', icon: '💎' },
      { label: '棉花糖',   url: 'https://marshmallow-qa.com/vq7fin259ukl3mi', class: 'marshmallow', icon: '🍬' },
    ],

    videos: [
      { id: "REPLACE_VIDEO_1", title: "熱門直播 #1" },
      { id: "REPLACE_VIDEO_2", title: "熱門直播 #2" },
      { id: "REPLACE_VIDEO_3", title: "熱門直播 #3" }
    ],

    videoClipsChannelIds: [
      { id: "UCbZrLw_Lmq062fhqdsShr5w", label: "妮妮子nini",  keywords: ["諾恪里", "小心結天團"] },
      { id: "UCMjxlxGJXiWyiSYcgYdvpMg", label: "miiyaミイヤ", keywords: ["諾恪里", "Nokori"] },
    ],

    scheduleVideoId:  "Od2Sczr6wmw",
    spreadsheetLabel: "諾諾的大小事",
    scheduleTitle:    "諾諾的行程表",

    refSheets: [
      { version: "Ver 1.0", url: "images/諾恪里 v1.0.jpg" },
    ],

    songStatsGids: {
      "2026": "2008032412",
      "2025": "1583821169",
    },

    color: "#FBC4EF"   // 諾恪里 代表色（夢幻粉）
  },

  {
    id: "kokomii",
    name: "克克米伊",
    nameEn: "KeKeMii",
    group: "預見娛樂",
    generation: "五期生",
    avatar: "https://pbs.twimg.com/profile_images/2052756867378798592/6X8FR751_400x400.jpg",
    coverImage: "https://pbs.twimg.com/profile_banners/1888131663596748800/1745276220/1500x500",
    tagline: "",
    description: "是隻喜歡睡覺的熊!",
    debut: "2025-04-20",
    birthday: "7月5日",
    tags: ["台灣", "預見娛樂", "五期生", "CaKano", "熊", "睡覺"],

    youtube: "https://www.youtube.com/@kekemii_0705",
    youtubeChannelId: "UC5R0yO6i_ApJf3AkcMFe7Tw",
    ytApiKey: "AIzaSyBsmWLwQLY-8wszHDufVCZaGZ0RKkRjPlM",
    twitter: "https://x.com/kekemii_0705",
    twitch: "https://www.twitch.tv/kekemii_0705",
    facebook:  "https://www.facebook.com/kekemii0705",
    instagram: "https://www.instagram.com/kekemii_0705/",
    spreadsheet: "https://docs.google.com/spreadsheets/d/1kr3W1pizZkdn2Lg5gkPorcnDovyKgfWn1VnfTI0i9_U/edit?gid=130416740#gid=130416740",
    overrideLinks: [
      { label: '米伊的大小事', url: 'https://docs.google.com/spreadsheets/d/1kr3W1pizZkdn2Lg5gkPorcnDovyKgfWn1VnfTI0i9_U/edit?gid=130416740#gid=130416740', class: 'sheets', icon: '📋' },
      { label: 'HiveBee',  url: 'https://www.hivebee.com.tw/user10081741941094/Donate',     class: 'hivebee',    icon: '🐝' },
      { label: '深度會員', url: 'https://www.hivebee.com.tw/user10081741941094/Subscribe', class: 'membership', icon: '💎' },
      { label: '棉花糖',   url: 'https://marshmallow-qa.com/9ir7u6drnzlzo7a', class: 'marshmallow', icon: '🍬' },
    ],

    videos: [
      { id: "REPLACE_VIDEO_1", title: "熱門直播 #1" },
      { id: "REPLACE_VIDEO_2", title: "熱門直播 #2" },
      { id: "REPLACE_VIDEO_3", title: "熱門直播 #3" }
    ],

    musicClipsChannelIds: [
      { id: "UCMjxlxGJXiWyiSYcgYdvpMg", label: "miiyaミイヤ", keywords: ["克克米伊", "米伊", "kekemii", "克克米"], typeKeywords: ["歌切", "cover"] },
    ],

    videoClipsChannelIds: [
      { id: "UCbZrLw_Lmq062fhqdsShr5w", label: "妮妮子nini",  keywords: ["克克米伊", "米伊", "kekemii", "克克米", "派"] },
      { id: "UCMjxlxGJXiWyiSYcgYdvpMg", label: "miiyaミイヤ", keywords: ["克克米伊", "米伊", "kekemii", "克克米"], excludeKeywords: ["歌切", "cover"] },
    ],

    scheduleVideoId:  "q5bBqi8DUc8",
    spreadsheetLabel: "米伊的大小事",
    scheduleTitle:    "米伊的行程表",

    refSheets: [
      { version: "Ver 1.0", url: "images/克克米伊 v1.0.jpg" },
    ],

    songStatsGids: {
      "2026": "1841739730",
      "2025": "1583821169",
    },

    color: "#FFCB55"   // 克克米伊 代表色（蜂蜜黃）
  },

  // ── 六期生 ─────────────────────────────────────
  {
    id: "peirei",
    name: "珮蕾",
    nameEn: "Pele.",
    group: "預見娛樂",
    generation: "六期生",
    avatar: "https://pbs.twimg.com/profile_images/2011801229165559809/gqkdH927_400x400.jpg",
    coverImage: "https://pbs.twimg.com/profile_banners/1933073377113354240/1760704308/1500x500",
    tagline: "",
    taglines: [
      { context: "", text: "我接喔" },
      { context: "", text: "你白目嗎?" },
      { context: "", text: "挖喜公主ㄟ" },
      { context: "", text: "挖喜v吐爸ㄟ" },
      { context: "", text: "這是真的嗎?" }
    ],
    description: "「來自賭場的世界第一公主大人」(不容許任何質疑)",
    debut: "2025-11-29",
    birthday: "6月3日",
    tags: ["台灣", "預見娛樂", "六期生", "ælis", "公主", "賭場"],

    youtube: "https://www.youtube.com/@Peleouo",
    youtubeChannelId: "UCvc-Xz6103-uVlIK-pWTXbA",
    ytApiKey: "AIzaSyBsmWLwQLY-8wszHDufVCZaGZ0RKkRjPlM",
    twitter: "https://x.com/aelis_pele",
    twitch: "https://www.twitch.tv/p1lepe1el1",
    facebook:  "https://www.facebook.com/Peleouo",
    instagram: "https://www.instagram.com/aelis_pele",
    spreadsheet: "https://docs.google.com/spreadsheets/d/18yEOmU3YVlMIJUaS6FntVI0voe9YzsepXfANRgz2SFM/edit?gid=130416740#gid=130416740",
    overrideLinks: [
      { label: '公主的大小事', url: 'https://docs.google.com/spreadsheets/d/18yEOmU3YVlMIJUaS6FntVI0voe9YzsepXfANRgz2SFM/edit?gid=130416740#gid=130416740', class: 'sheets', icon: '📋' },
      { label: 'HiveBee',  url: 'https://www.hivebee.com.tw/userf1171757063028/Donate',     class: 'hivebee',    icon: '🐝' },
      { label: '深度會員', url: 'https://www.hivebee.com.tw/userf1171757063028/Subscribe', class: 'membership', icon: '💎' },
      { label: '棉花糖',   url: 'https://marshmallow-qa.com/pqnlqsethgm3px2', class: 'marshmallow', icon: '🍬' },
    ],

    videos: [
      { id: "REPLACE_VIDEO_1", title: "熱門直播 #1" },
      { id: "REPLACE_VIDEO_2", title: "熱門直播 #2" },
      { id: "REPLACE_VIDEO_3", title: "熱門直播 #3" }
    ],

    musicClipsChannelIds: [
      { id: "UCUxpbqNNzWup9PZXdLUS8Jw", label: "阿嗚", keywords: ["珮蕾", "Pele"], typeKeywords: ["cover", "嘉賓"] },
    ],

    videoClipsChannelIds: [
      { id: "UCUxpbqNNzWup9PZXdLUS8Jw", label: "阿嗚",       keywords: ["珮蕾", "Pele"],          excludeKeywords: ["cover", "嘉賓"] },
      { id: "UCbZrLw_Lmq062fhqdsShr5w", label: "妮妮子nini", keywords: ["珮蕾", "Pele", "ælis"] },
    ],

    scheduleVideoId:  "xjmx-OXRdUg",
    spreadsheetLabel: "公主的大小事",
    scheduleTitle:    "公主的行程表",

    refSheets: [
      { version: "Ver 1.0", url: "images/珮蕾 v1.0.jpg" },
    ],

    songStatsGids: {
      "2026": "1311275024",
      "2025": "1583821169",
    },

    color: "#EF9494"   // 珮蕾 代表色（玫瑰粉）
  },

  {
    id: "konkouyuni",
    name: "睏睏幽昵",
    nameEn: "Yawnii",
    group: "預見娛樂",
    generation: "六期生",
    avatar: "https://pbs.twimg.com/profile_images/2039229710425784320/VOBggSrM_400x400.jpg",
    coverImage: "https://pbs.twimg.com/profile_banners/1939968445539377152/1779096779/1500x500",
    tagline: "",
    taglines: [
      { context: "", text: "捏" }
    ],
    description: "📜 您好呀，我是幽昵，來自仙境深處的傳令官……！",
    debut: "2025-11-30",
    birthday: "7月2日",
    tags: ["台灣", "預見娛樂", "六期生", "ælis", "傳令官", "仙境"],

    youtube: "https://www.youtube.com/@yawnii_aelis",
    youtubeChannelId: "UCRCKrkjDimBhd-gVVojpUyQ",
    ytApiKey: "AIzaSyBsmWLwQLY-8wszHDufVCZaGZ0RKkRjPlM",
    twitter: "https://x.com/yawnii_aelis",
    twitch: "https://www.twitch.tv/yawnii_aelis",
    facebook:  "https://www.facebook.com/Yawnii.aelis/",
    instagram: "https://www.instagram.com/yawnii_aelis/",
    spreadsheet: "https://docs.google.com/spreadsheets/d/1axdysWPjMJrUgmU9qHWPkyrS3htc9SaiOpTbxERaa2A/edit?gid=130416740#gid=130416740",
    overrideLinks: [
      { label: '幽昵的大小事', url: 'https://docs.google.com/spreadsheets/d/1axdysWPjMJrUgmU9qHWPkyrS3htc9SaiOpTbxERaa2A/edit?gid=130416740#gid=130416740', class: 'sheets', icon: '📋' },
      { label: 'HiveBee',  url: 'https://www.hivebee.com.tw/Yawnii/Donate',     class: 'hivebee',    icon: '🐝' },
      { label: '深度會員', url: 'https://www.hivebee.com.tw/Yawnii/Subscribe', class: 'membership', icon: '💎' },
    ],

    videos: [
      { id: "REPLACE_VIDEO_1", title: "熱門直播 #1" },
      { id: "REPLACE_VIDEO_2", title: "熱門直播 #2" },
      { id: "REPLACE_VIDEO_3", title: "熱門直播 #3" }
    ],

    musicClipsChannelIds: [
      { id: "UCRqjJ9jxXdvIGdwPrtp8O0w", label: "小恩", keywords: ["睏睏幽昵", "幽昵", "Yawnii"] },  // 全域音樂關鍵字自動分類
    ],

    videoClipsChannelIds: [
      { id: "UCRqjJ9jxXdvIGdwPrtp8O0w", label: "小恩",       keywords: ["睏睏幽昵", "幽昵", "Yawnii"] },  // 全域音樂關鍵字自動排除
      { id: "UCfy_OLAzKrZH-UGBlwndP6A", label: "浮生0508",   keywords: ["睏睏幽昵", "幽昵", "Yawnii"] },
      { id: "UCbZrLw_Lmq062fhqdsShr5w", label: "妮妮子nini", keywords: ["睏睏幽昵", "幽昵", "Yawnii", "ælis"] },
    ],

    scheduleVideoId:  "bae5xjjhMsI",
    spreadsheetLabel: "幽昵的大小事",
    scheduleTitle:    "幽昵的行程表",

    refSheets: [
      { version: "Ver 1.0", url: "images/睏睏幽昵 v1.0.jpg" },
    ],

    songStatsGids: {
      "2026": "1047080886",
      "2025": "1583821169",
    },

    color: "#D5DFEF"   // 睏睏幽昵 代表色（霧藍灰）
  }
];

const groups = [...new Set(vtubers.map(v => v.group))];

// 世代篩選清單（依出道順序排列）
const generationOrder = { '零期生': 0, '一期生': 1, '二期生': 2, '三期生': 3, '四期生': 4, '五期生': 5, '六期生': 6 };
const generations = [...new Set(vtubers.map(v => v.generation))]
  .sort((a, b) => (generationOrder[a] ?? 99) - (generationOrder[b] ?? 99));

// 各世代團體名稱（零期生為大學姐，不計入正式期生團體）
const generationTeams = {
  '一期生': 'Exitus',
  '二期生': 'MeloNyx',
  '三期生': 'Alluria',
  '四期生': '音雲漫步',
  '五期生': 'CaKano',
  '六期生': 'ælis',
};

// 各世代代表漸層色 [起始色, 結束色]（零期生不顯示卡片）
const generationColors = {
  '一期生': ['#6366F1', '#4F46E5'],
  '二期生': ['#EC4899', '#DB2777'],
  '三期生': ['#0EA5E9', '#0284C7'],
  '四期生': ['#F97316', '#EA580C'],
  '五期生': ['#10B981', '#059669'],
  '六期生': ['#A855F7', '#9333EA'],
};
