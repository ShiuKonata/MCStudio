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
      { id: "69zB23Pnons", title: "【Cover】『違国日記』OP曲－ソナーレ/TOMOO💧詩雨蔻達【cover】", date: "2026-06-06" },
      { id: "pNYUnZmD0Kg", title: "【Cover】mosi mosi? / 楽音💧詩雨蔻達 #弾き語り #歌ってみた",                   date: "2026-05-28" },
      { id: "V6EGDGnCKUw", title: "【Cover】メロウ / 須田景凪💧詩雨蔻達 #弾き語り #歌ってみた",                   date: "2026-04-18" },
      { id: "66XFn8Gd7hM", title: "【Cover】春泥棒 / ヨルシカ 💧詩雨蔻達 #弾き語り #歌ってみた",                   date: "2026-04-11" },
      { id: "G013vVCI0Og", title: "【Cover】千鳥 / ヨルシカ 💧詩雨蔻達 #弾き語り #歌ってみた",                     date: "2026-03-21" },
      { id: "4FtuQiEefSo", title: "【Cover】月が綺麗ねと言われたい！／柿崎ユウタ💧詩雨蔻達#弾き語り #歌ってみた", date: "2026-03-14" },
      { id: "dGNwgv3beyk", title: "【原創】哈士奇寶寶 💧詩雨蔻達【Official Music Video】",                          date: "2026-01-10" },
      { id: "5eQOI0VMG6E", title: "【原創】新年大快樂！！💧詩雨蔻達",                                               date: "2026-01-01" },
      { id: "_DzQNbQW4L0", title: "【Cover】Take Me To The Beach/Imagine Dragons(ft. Ado)💧詩雨蔻達w/艾琳妮雅",    date: "2025-08-30" },
      { id: "qF5DLh8bI2U", title: "【Cover】タコピーの原罪ED『硝子の線』/ Tele 💧詩雨蔻達",                        date: "2025-08-01" },
      { id: "DEekDZDIywE", title: "【Cover】 星座になれたら/結束バンド💧詩雨蔻達",                                  date: "2025-06-06" },
      { id: "gsjf_oEIm6E", title: "【Cover】 正直日記/美波 💧詩雨蔻達",                                            date: "2025-03-10" },
      { id: "_HEJNCB06z0", title: "【原創】 累累病demo💧詩雨蔻達",                                                 date: "2025-02-25" },
      { id: "2uU0Mchu7Ec", title: "【原創】 我們一起demo💧詩雨蔻達",                                               date: "2024-12-26" },
      { id: "WAyPv_ZylIw", title: "【Cover】VH (Vast & Hazy) /求救訊號💧詩雨蔻達",                                 date: "2024-12-18" },
      { id: "qdpJRT0EpJE", title: "【Cover】陳綺貞/太聰明💧詩雨蔻達",                                              date: "2024-12-11" },
      { id: "4yiVqGZNeXs", title: "【Cover】keshi/skeletons💧詩雨蔻達",                                            date: "2024-12-04" },
      { id: "goGim-G9110", title: "【原創】哈四期寶寶 (demo) 💧詩雨蔻達 / 作曲實驗室十月號",                        date: "2024-11-27" },
      { id: "BHI1jM0fwBs", title: "【Cover】たばこ/コレサワ💧詩雨蔻達",                                            date: "2024-08-26" },
      { id: "X-nTQRtbnfU", title: "【Cover】「ちゅ、多様性。」 💧詩雨蔻達",                                        date: "2024-04-01" },
      { id: "8MYxQVjZ3Rg", title: "【Cover】P丸様-シル・ヴ・プレジデント💧詩雨蔻達",                               date: "2024-02-25" },
      { id: "DoQwDdsJmfM", title: "【Cover】【シル・ヴ・プレジデント 】重製版即將在近期上片!! 💧詩雨蔻達 #cover",   date: "2024-02-20" },
      { id: "v_FYUw9MeDE", title: "【Cover】ポリスピカデリ- Rumor (ルーマー)💧詩雨蔻達",                            date: "2024-02-11" },
      { id: "rLf7RaQ6Wtk", title: "【Cover】未接來電／莫宰羊💧詩雨蔻達【#自彈自唱 】 #vtuber",                   date: "2024-01-08" },
      { id: "Eb2ck3LR6WI", title: "【Cover】NEW!!COVER!! 【King -Electro Swing Remix】 #vtuber #king",           date: "2023-10-31" },
      { id: "JNTkmHjzEoI", title: "【Cover】地球儀／米津玄師💧詩雨蔻達【自彈自唱】",                               date: "2023-10-17" },
      { id: "XJX9emztHaA", title: "【Cover】擁抱💧詩雨蔻達【自彈自唱】",                                           date: "2023-10-03" },
      { id: "1_l1d8aYPOs", title: "【Cover】貴方の恋人になりたい💧詩雨蔻達【自彈自唱】",                           date: "2023-09-19" },
      { id: "WPLg85oqyLE", title: "【Cover】たばこ💧詩雨蔻達【自彈自唱】",                                        date: "2023-09-15" },
      { id: "nq0SIJ_lg38", title: "【Cover】ド屑 💧詩雨蔻達【自彈自唱】",                                         date: "2023-09-12" },
      { id: "Jb9x6-JYjm0", title: "【Cover】崎山蒼志  / 燈 💧詩雨蔻達  #cover  #咒術迴戰",                          date: "2023-08-25" },
      { id: "re6fWJzJVpg", title: "【Cover】Ditto / NewJeans 💧詩雨蔻達  #cover  #acappella",                      date: "2023-08-18" },
      { id: "THbDUEda15U", title: "【Cover】秒針を噛む / ずっと真夜中でいいのに💧詩雨蔻達【COVER】",               date: "2023-08-11" },
      { id: "Qc9n_f9saXw", title: "【Cover】小夜子acoustic ver💧詩雨蔻達",                                          date: "2023-08-05" },
      { id: "81caRqdrkLE", title: "【Cover】想和你看五月的晚霞/陳華💧詩雨蔻達【自彈自唱COVER】",                  date: "2023-08-04" },
      { id: "kapfqQ4QEuw", title: "【Cover】怪獣の花唄 / Vaundy 💧詩雨蔻達 #cover #acappella",                    date: "2023-08-01" },
      { id: "djDaHxND-Yk", title: "【Cover】星座になれたら/結束バンド💧詩雨蔻達【自彈自唱COVER】",                  date: "2023-07-25" },
      { id: "z4kgN57UzTk", title: "【Cover】なとり/Overdose💧詩雨蔻達#cover",                                      date: "2023-07-21" },
      { id: "zJY2337dyPQ", title: "【Cover】七月半-HOW哥宇宙 💧詩雨蔻達【自彈自唱cover】",                         date: "2023-07-14" },
      { id: "5__koIwFpsg", title: "【Cover】Aimer-カタオモイ 💧詩雨蔻達【自彈自唱cover】",                        date: "2023-07-11" },
      { id: "UY9ZuglxvB0", title: "【Cover】私は最強 /Ado 💧詩雨蔻達 #cover #acappella",                          date: "2023-07-10" },
      { id: "myLecThcnu0", title: "【Cover】imase - NIGHT DANCER 💧詩雨蔻達",                                       date: "2023-07-01" },
      { id: "YwuzcuUsjgo", title: "【Cover】Vaundy - 踊り子 💧詩雨蔻達【自彈自唱cover】",                        date: "2023-06-30" },
      { id: "ZhGhbQr-rn4", title: "【Cover】イケボ注目 ~【歌ってみた】須田景凪 /ダーリン 💧詩雨蔻達",               date: "2023-06-19" },
      { id: "FMsonPeFovw", title: "【Cover】Taylor Swift-The Best Day💧詩雨蔻達【cover】",                        date: "2023-05-06" },
      { id: "pkQOYj6raUQ", title: "【Cover】#花譜 - トウキョウ・シャンディ・ランデヴ💧詩雨蔻達【cover】",           date: "2023-04-24" },
      { id: "p2UkjpvFA3k", title: "【Original】Official髭男dism -ミックスナッツ 💧詩雨蔻達【cover】",               date: "2023-04-14" },
      { id: "dVtyGge6v_s", title: "【Cover】Yoasobi - 海のまにまに💧詩雨蔻達【cover】",                            date: "2023-04-10" },
      { id: "0bg4dYS8Znk", title: "【Cover】跟Ado一起唱!!『 アタシは問題作 』💧詩雨蔻達【cover】",               date: "2023-03-20" },
      { id: "bzMqxkyO3yA", title: "【Cover】メガテラ・ゼロ -この夜に乾杯 💧詩雨蔻達",                              date: "2023-02-25" },
      { id: "gMWt1w67ZFE", title: "【Cover】Memories/詩雨蔻達 | 吉他自彈自唱",                                     date: "2023-02-15" },
      { id: "-jdQoS_NwCQ", title: "【Cover】走建國路回家但後座少ㄌ泥/詩雨蔻達 | 吉他自彈自唱",                     date: "2023-02-06" },
      { id: "iasDIGQYtBw", title: "【Cover】緑黄色社会-mela! / 詩雨蔻達",                                          date: "2023-01-28" },
      { id: "XHuc832HAfY", title: "【Cover】食虫植物/ 詩雨蔻達 feat.茶浣熊@TanukiiDonCh | 吉他自彈自唱",           date: "2023-01-21" },
      { id: "ON2e3Yc7F6Q", title: "【Cover】星期三的康帕內拉-愛迪生 Edison💧詩雨蔻達【cover】",                   date: "2023-02-21" },
    ],

    // ── Shorts（<61秒的短影片）──────────────────
    shorts: [
      { id: "Ej2tkEtePy8", title: "【Cover】comethru /Jeremy Zucker 💧詩雨蔻達【自彈自唱】",                      date: "2023-08-29", isShorts: true },
      { id: "cRhutR0qGGY", title: "【聖誕佳音XXV/DAY19】聖誕老公公竟是一場騙局??💧詩雨蔻達", date: "2023-12-19", isShorts: true },
    ],

    // ── 手動分類的原創曲（未分類區分配）──────────────────
    originals_manual: [
      { id: "ENI3YCbU468", title: "【原創】【3周年紀念】統美眉，知道甚麼比224還好笑嗎💧詩雨蔻達",                   date: "2026-02-26" },
    ],

    // ── 手動分類的初配信（未分類區分配）──────────────────
    premiere: [
      { id: "fh5ORh6bxx8", title: "【詩雨蔻達｜官方精華】初配就事故!! 大統領上任之日就被YT轉圈圈罷免?!",                         date: "2023-03-01" },
      { id: "wfBKp3_iECY", title: "【謝罪!道歉!】詩雨蔻達初配信謝罪記者會片段流出",                                        date: "2023-02-26" },
      { id: "njJPNuaB2XM", title: "【大統領候選人政見發表大會】2/25號21:30請記得來投票!",                                  date: "2023-02-22" },
      { id: "0NyTOJOkVRY", title: "懇請支持5號詩雨蔻達",                                                            date: "2023-02-08" },
      { id: "bO0Q2c03-aA", title: "🐸詩雨蔻達🐸  初配信預告 - 讓CODA來統治你門把",                               date: "2023-01-17" },
    ],

    // ── 一般影片（官方上傳的綜合內容）──────────────────
    general: [
      { id: "IPJYkvnBd-0", title: "【突發歌回】尼也睡不著咪?來這裡試試看(圖奇留檔)💧詩雨蔻達", date: "2025-12-23" },
      { id: "SMftU9oUHAk", title: "【吉他歌回剪輯】愛愛愛/方大同💧詩雨蔻達", date: "2025-03-05" },
      { id: "62e-Blfl29c", title: "【官方精華-麥塊迷路記】小埃認證大路痴...💧詩雨蔻達 ft. @OumuaXDFP", date: "2023-10-14" },
      { id: "8t6yI60N5M8", title: "【官方精華-最容易被扭蛋騙錢的主播】竟然想把糞OO送給觀眾?!💧詩雨蔻達", date: "2023-10-02" },
      { id: "KGOrZpL_uFk", title: "【官方精華-絕命精神病院】慘叫注意!! 那位愛烙狠話，遇到危險卻是第一個先跑的落跑型大統領💧詩雨蔻達", date: "2023-07-02" },
      { id: "yEXTaPcoHz8", title: "【詩雨蔻達｜官方精華】醉後大統領，那天酒雜發生的事就當作我們的祕密啦", date: "2023-03-30" },
      { id: "OB8yJ_PQ4H4", title: "【詩雨蔻達｜官方精華】早安早安!! 統領車速過快請記得繫好安全帶", date: "2023-03-23" },
      { id: "EwwBQqdReY4", title: "COllmeDAddy", date: "2023-02-12" },
      { id: "LWMx3NkcsY0", title: "【Original】【官方精華-統領原創曲合輯】(亂)寫歌系vtuber酒後寫得歌都是飽含愛意的，除了..💧詩雨蔻達", date: "2023-09-04" },
    ],

    // ── Vlog（日常生活、vlog 類內容）──────────────────
    vlog: [
      { id: "o45tQSU0kdY", title: "COCOCO玉山我要上來囉!! EP.01 💧詩雨蔻達", date: "2024-12-13" },
    ],

    // ── 工商（商業合作、贊助內容）──────────────────
    commerce: [
      { id: "tYvq7Q6prns", title: "這是什麼好玩遊戲??!!!!💧詩雨蔻達#劍紙三國", date: "2026-02-14" },
      { id: "yRjVticYU7s", title: "阿公給我紅包！黎明覺醒更新版本《龍門客來》💧詩雨蔻達", date: "2024-02-15" },
      { id: "Dnt2HtAKJIU", title: "【重返未來：1999】純正英語配音 統領我玩個遊戲都變成英國腔了呢~美術更是頂級復古英倫風 好喜歡!!💧詩雨蔻達", date: "2023-10-20" },
      { id: "2oHxJDTQ_vM", title: "【#絢花百兵帖】統領親手設計最強最婆的武器少女!! 使用 : 肥宅麻痺技!! 💧詩雨蔻達", date: "2023-10-15" },
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
      { id: "UCzqYJKopN_nYJBr7ep93jTA", label: "閃電流氓",      keywords: ["詩雨蔻達", "coda", "shiucoda", "蔻達", "阿統", "統領", "Exitus"], typeKeywords: ["cover", "吉他"] },            // 只抓 Cover
      // 孫小毛（UC4nZ-KbmFr21Qt1lN9rmbdQ）：無音樂剪輯，僅在 videoClipsChannelIds 保留精華影片
      { id: "UCpc15B6xb8OagNa7LScMOBg", label: "椪呱實驗室",    keywords: ["詩雨蔻達", "ShiuCoda", "shiucoda", "蔻達"], typeKeywords: ["cover", "guitar"] },  // 只抓詩雨蔻達的 Cover
      { id: "UCPbbNCUmcCG9wk82O_KElFg", label: "彭彭ぽんぽん",  keywords: ["詩雨蔻達", "shiu coda", "shiucoda", "蔻達"], typeKeywords: ["cover", "歌回"] },             // 混合頻道 → 只抓音樂
      { id: "UCkdXbWulRmheqfVmV7WjaFQ", label: "台灣香蕉王",   keywords: ["詩雨蔻達", "ShiuCoda"] },
      { id: "UCh00s3u4osHhNx8BlSZsECg", label: "章魚虛タコ",    keywords: ["詩雨蔻達", "shiu coda", "shiucoda", "蔻達"] },                                             // 全部為 Cover
      { id: "UCHrOyfkspzM82TjnaAoxJmQ", label: "松鴉Jayauspice", keywords: ["詩雨蔻達", "shiu coda", "shiucoda", "蔻達"] },                                            // Guitar Cover
      { id: "UCZuULhCMI94q4FgmedxEoSw", label: "Fish🌙🐋",   keywords: ["詩雨蔻達", "shiu coda", "shiucoda", "蔻達"], typeKeywords: ["歌切", "cover", "歌回", "合唱", "線下連動"] },
    ],

    // ── 熱門影片精華（直播精華 / Shorts / 遊戲精華）──────────
    // excludeKeywords：標題含任一關鍵字則排除（適合「非 Cover 以外全收」的混合頻道）
    // playlistId     ：UUSH + channelId[2:] = 該頻道 Shorts 專屬清單
    videoClipsChannelIds: [
      { id: "UCsjWfH2QUTGlrFSurA5oj2w", label: "Konata閆娘",   playlistId: "UUSHsjWfH2QUTGlrFSurA5oj2w", keywords: ["詩雨蔻達", "coda", "shiucoda", "蔻達", "Exitus"], excludeKeywords: ["歌回", "cover"] },                           // 非音樂內容（排除歌回 & Cover）
      { id: "UCzqYJKopN_nYJBr7ep93jTA", label: "閃電流氓",      keywords: ["詩雨蔻達", "coda", "shiucoda", "蔻達", "阿統", "統領", "Exitus"], excludeKeywords: ["cover", "吉他"] },                    // 非 Cover 影片
      { id: "UC4nZ-KbmFr21Qt1lN9rmbdQ", label: "孫小毛",        keywords: ["詩雨蔻達", "coda", "shiucoda", "蔻達", "阿統", "統領", "Exitus"], typeKeywords: ["精華"], excludeKeywords: ["帕蘿妮", "帕帕"] },
      { id: "UCpc15B6xb8OagNa7LScMOBg", label: "椪呱實驗室",    keywords: ["詩雨蔻達", "ShiuCoda", "shiucoda", "蔻達", "Exitus"], excludeKeywords: ["cover", "guitar"] },  // 只抓詩雨蔻達的精華
      { id: "UCPbbNCUmcCG9wk82O_KElFg", label: "彭彭ぽんぽん",  keywords: ["詩雨蔻達", "shiu coda", "shiucoda", "蔻達", "Exitus"], typeKeywords: ["精華", "直播"] },
      { id: "UCv9MXWx8AW5BZ07OPJyf7jg", label: "鬧欸", keywords: ["Exitus"], excludeKeywords: ["帕蘿妮", "神無月鹿比", "鹿比", "艾琳妮雅", "歌回", "cover"] },
      { id: "UCMlvVMgOjH76AwolFgKEP1Q", label: "成彦なりひこ", keywords: ["詩雨蔻達", "ShiuCoda", "shiucoda", "Exitus"], excludeKeywords: ["歌回", "cover"] },  // 詩雨蔻達精華片段
    ],

    videoClips: [
      { id: "6DzGvlWL2CU", title: "當統領想給外送員小費時... | 詩雨蔻達 ShiuCoda", keywords: ["詩雨蔻達", "coda", "shiucoda", "蔻達", "阿統", "統領", "Exitus"] },
      { id: "UGFSG4Z4J38", title: "陶喆、蔡依琳 - 今天你要嫁給我 | 詩雨蔻達 ShiuCoda Cover", keywords: ["詩雨蔻達", "coda", "shiucoda", "蔻達", "阿統", "統領", "Exitus"] },
      { id: "UykHeePVhp0", title: "當ㄚ統手上拿到槍第一件事居然做的是..?", keywords: ["詩雨蔻達", "coda", "shiucoda", "蔻達", "阿統", "統領", "Exitus"] },
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
      { label: "喜歡的歌手", items: ["Vaundy", "acane", "163", "李浩偉", "陳嫺靜", "陳綺貞"] },
      { label: "喜歡的顏色", items: ["紫丁香色"] },
      { label: "喜歡的食物", items: ["Fun Tower日式可麗餅", "舒芙蕾", "酸辣湯", "薄荷巧克力冰淇淋", "橘子"] },
    ],
    triviaHates: [
      { label: "討厭的東西", items: ["青椒", "茄子", "鴿子", "米粉"] },
      { label: "討厭的味道", items: ["薰衣草"] },
    ],

    // 會員限定直播（手動填入，id 填 YouTube 影片 ID）
    memberVideos: [
      { id: "iBstTkj9YQs", title: "【會限】2026勞動節吉他彈唱24小part.1💧詩雨蔻達", date: "2026-05-14" },
      { id: "eit0_YgfAk4", title: "【會限】2026勞動節吉他彈唱24小part.2💧詩雨蔻達", date: "2026-05-14" },
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
      { context: "", text: "DDだめよ!!DD不可以" },
      { context: "", text: "我很可愛請給我錢" },
      { context: "", text: "C8" },
      { context: "", text: "睡啦明天再努力" },
      { context: "", text: "哩洗勒工三小 (りしれ供さ小)" },
      { context: "", text: "哩嘎挖惦惦 (りがわ惦惦)" },
      { context: "", text: "好~可~憐~哪~" },
      { context: "", text: "蛤？(虫合)" }
    ],
    description: "大家好，我是懶貓子，我是日本人，初次見面，請多指教，感謝",
    debut: "2021-08-06",
    birthday: "8月13日",
    tags: ["日本", "預見娛樂", "零期生", "懶貓子", "妹系", "大學姐", "橘貓子", "懶沒朋友子", "幼貓子", "忄束頁貓子", "RUMI天才"],

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
      { id: "S24248F5QxQ", title: "【Cover】好想愛這個世界啊/この世界を愛したい 日文ver. 💧Rumi/懶貓子【歌ってみた】", date: "2025-08-13" },
      { id: "PRstz7oaMNs", title: "【Cover】テレパシ - DECO*27 💧Rumi/懶貓子【歌ってみた】", date: "2025-07-13" },
      { id: "XK10jQIaA7s", title: "【Cover】トウキョウ・シャンディ・ランデヴ - MAISONdes feat. 花譜, ツミキ 💧Rumi/懶貓子", date: "2023-01-16" },
      { id: "im9eQdSsN6g", title: "【Cover】OP-EMOCODE 💧Rumi/懶貓子【歌ってみた】", date: "2022-11-22" },
      { id: "wSykZzuxAv0", title: "【Cover】１・２・３／After the Rain 💧Rumi/懶貓子 × 浠Mizuki【歌ってみた】", date: "2022-11-18" },
      { id: "X1T4tqdlrZQ", title: "【Cover】未知未踏アルスハイル 💧Rumi/懶貓子【#Rumi3D】", date: "2022-08-17" },
      { id: "1JGLMnfr67c", title: "【Cover】愛言葉Ⅳ 💧Rumi/懶貓子【歌ってみた】", date: "2022-08-06" },
      { id: "F6MUc26j7fE", title: "【Cover】バレンタイン・キッス 💧Rumi/懶貓子", date: "2022-02-14" },
      { id: "Xfv0OS-M7vM", title: "【Cover】告白氣球 💧Rumi/懶貓子【歌ってみた】", date: "2022-01-22" },
      { id: "lvP5tYintxg", title: "【Cover】クリスマスソング 💧Rumi/懶貓子【歌ってみた】", date: "2021-12-25" },
      { id: "8FmVj4FyO5U", title: "【Cover】ライオン 💧Rumi/懶貓子 × 浠Mizuki【歌ってみた】", date: "2021-11-20" },
      { id: "mXCV8MdAfVE", title: "【Cover】忘れたいことばっかだ 💧Rumi/懶貓子【歌ってみた】", date: "2021-09-25" },
      { id: "HQBR4rTikw4", title: "【Cover】熱愛105°C的你 💧Rumi/懶貓子【歌ってみた】", date: "2021-08-14" },
      { id: "gLNU5_2-Z4w", title: "【Cover】愛言葉Ⅲ 💧Rumi/懶貓子【歌ってみた】", date: "2021-07-18" },
      { id: "qMWfzUt_Nl8", title: "【Cover】Rumi終於歐了一回 💧Rumi/懶貓子 ft. @LancatOfficial", date: "2023-05-08" },
      { id: "K-6YH5t-HgU", title: "【原創】【Original】笑顔はここにある 💧Rumi/懶貓子", date: "2022-06-26" },
      { id: "0Vq4fWh3RMg", title: "【原創】【Original】NON STOP SOUL!!! 💧Rumi/懶貓子", date: "2021-08-01" },
    ],

    shorts: [
    ],

    originals_manual: [
    ],

    premiere: [
    ],

    general: [
    ],

    vlog: [
    ],

    commerce: [
    ],

    memberVideos: [
    ],

    musicClips: [
      { id: "AujK7aWgRsY", title: "HoneyWorks - 可愛くてごめん | Rumi懶貓子 .Cover 〔中日歌詞〕" },
      { id: "J7EUn1BbE18", title: "初音ミク - 神っぽいな| Rumi懶貓子 .Cover 〔中日歌詞〕" },
      { id: "GuFN70xb8W4", title: "【歌枠切り抜き】猫 - Dish【Rumi/懶貓子】【Vtuber精華】" },
    ],

    videoClips: [
      { id: "gIDiqLbaQCQ", title: "老祖宗保佑我【Rumi/懶貓子】【Vtuber精華】", keywords: ["懶貓子", "Rumi"] },
      { id: "fPeQl568_FE", title: "Rumi的視力有...？！【Rumi/懶貓子】【Vtuber精華】", keywords: ["懶貓子", "Rumi"] },
      { id: "zcMfMI0ZHF0", title: "加班？門都沒有！【Rumi/懶貓子】【Vtuber精華】", keywords: ["懶貓子", "Rumi"] },
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
      { id: "UC4X7qMrF5_8egxF7IEspAlg", label: "成彦なりひこ", keywords: ["懶貓子", "Rumi"], typeKeywords: ["歌回", "歌枠"] },
      { id: "UCRqjJ9jxXdvIGdwPrtp8O0w", label: "小恩",         keywords: ["懶貓子", "Rumi"], typeKeywords: ["演唱會"] },
      { id: "UCkdXbWulRmheqfVmV7WjaFQ", label: "台灣香蕉王",   keywords: ["懶貓子", "Rumi"] },
      { id: "UC-1o-O9Vnh6WEMpJVBzIIqg", label: "光ちゃん",    keywords: ["懶貓子", "Rumi"], typeKeywords: ["歌回", "演唱"] },
    ],

    // 熱門影片精華（直播精華 / 遊戲精華）
    videoClipsChannelIds: [
      { id: "UCRqjJ9jxXdvIGdwPrtp8O0w", label: "小恩",         keywords: ["懶貓子", "Rumi"], excludeKeywords: ["演唱會"] },
      { id: "UC4X7qMrF5_8egxF7IEspAlg", label: "成彦なりひこ", keywords: ["懶貓子", "Rumi"], excludeKeywords: ["歌回", "歌枠", "直播"] },
      { id: "UC-1o-O9Vnh6WEMpJVBzIIqg", label: "光ちゃん",    keywords: ["懶貓子", "Rumi"], excludeKeywords: ["歌回", "演唱"] },
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
      { context: "", text: "想想有一隻龍在你的耳邊一直說休息休息休息休息" },
      { context: "", text: "我不是爐豚" }
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
      { id: "Da2ssmX8ZjQ", title: "🎵 要愛愛 - 帕蘿妮 Paroniie 【COVER】", date: "2026-06-06" },
      { id: "jltULZpkneQ", title: "【帕蘿妮精華】萬物皆可蟹x讓人著迷的Roguelike新遊戲x我找到了超強進化路線...嗎?!", date: "2026-05-21" },
      { id: "mnAkfuAZOUE", title: "🎵 Bunny Girl - 帕蘿妮 Paroniie 【COVER】", date: "2026-04-30" },
      { id: "4RTxc8acTlY", title: "🎵 Wake Up! - 帕蘿妮 Paroniie 【COVER】", date: "2026-03-19" },
      { id: "Ck5w-tXkfRQ", title: "🎵 想把哥哥追 - 帕蘿妮 Paroniie 【COVER】", date: "2026-03-07" },
      { id: "Lg9nyNL-AD0", title: "🎵 星願 - 帕蘿妮 Paroniie 【Original】", date: "2026-02-24" },
      { id: "Aud3U7eIn8Y", title: "🎵 劍紙三國 - 帕蘿妮 Paroniie 【COVER】 #劍紙三國", date: "2026-02-19" },
      { id: "kfy3vMYXe1c", title: "🎵 WE ARE EMPIRE《明日方舟：終末地》- 帕蘿妮 Paroniie 【COVER】", date: "2026-02-08" },
      { id: "ZnmKBtrog7A", title: "🎵 討厭你 I hate you - 帕蘿妮 Paroniie 【COVER】", date: "2026-01-07" },
      { id: "DMhDwAMYmwU", title: "[4K] ファンサ／HoneyWorks ♦︎ Paroniie 3DLIVE 星宿單曲無字幕版", date: "2025-05-04" },
      { id: "H-iF0WTmOsY", title: "[4K] 我喜歡你／洪安妮 ♦︎ Paroniie 3DLIVE 星宿單曲無字幕版", date: "2025-05-03" },
      { id: "1jyJWqI9uPE", title: "[4K] ちゅ、多様性／ano ♦︎ Paroniie 3DLIVE 星宿單曲無字幕版", date: "2025-04-27" },
      { id: "Se6pMxLEBgQ", title: "[4K] 夠愛／曾沛慈、東城衞 ♦︎ Paroniie 3DLIVE 星宿單曲無字幕版", date: "2025-04-26" },
      { id: "quQN16MTaS8", title: "[4K] 玫瑰少年／蔡依林 ♦︎ Paroniie 3DLIVE 星宿單曲無字幕版", date: "2025-04-20" },
      { id: "QVhYWdxreiU", title: "[4K] いけないボーダーライン／ワルキューレ ♦︎ Paroniie 3DLIVE 星宿單曲無字幕版", date: "2025-04-19" },
      { id: "PpLvIDxOF1s", title: "[4K] 可愛くてごめん／HoneyWorks ♦︎ Paroniie 3DLIVE 星宿單曲無字幕版", date: "2025-04-13" },
      { id: "X8Fk54RovZk", title: "[4K] Stellar Stellar／星街すいせい ♦︎ Paroniie 3DLIVE 星宿單曲無字幕版", date: "2025-04-12" },
      { id: "tKyPWi-qp0I", title: "【星宿】二周年紀念3D演唱會預告PV ♦︎ #3DLIVE.", date: "2025-01-01" },
      { id: "4rlG9tEt05w", title: "Phony / Paroniie cover. / 1.5周年&米豆綠媽咪生日快樂！！！", date: "2024-08-30" },
      { id: "E5ZXb3uVUOc", title: "早安大少爺 賴床的話會被扣薪水的哦～ ft. @AoiHinamoriCh  🔹#帕蘿妮 #Paroniie #Cover #잘자요아가씨 #晚安大小姐 #早安大少爺", date: "2024-06-04" },
      { id: "_Gh7pFVVm4g", title: "【以心傳心】overdose🔹#帕蘿妮 #Paroniie", date: "2024-05-29" },
      { id: "H_bYEiL3nCs", title: "【以心傳心】Phony🔹#帕蘿妮 #Paroniie", date: "2024-05-28" },
      { id: "8-Sq7IxMitw", title: "【以心傳心】踊り子🔹#帕蘿妮 #Paroniie", date: "2024-05-26" },
      { id: "5s-Lub1eGZU", title: "【以心傳心】僕が死のうと思ったのは ft. 瓦西瓦瓦、希妮亞里絲、酒樂霧子🔹#帕蘿妮 #Paroniie", date: "2024-05-25" },
      { id: "JsX_gsL56Eg", title: "🎵 我會等「與你一起去看外面世界到底多大和你慢慢周旋」｜#帕蘿妮 💧 #Paroniie  #cover.", date: "2024-04-17" },
      { id: "8EFuagFbsvs", title: "🎵 一路生花「我希望許過的願望一路生花也仍感嘆於世界之大」｜#帕蘿妮 💧 #Paroniie  #cover.", date: "2024-04-12" },
      { id: "LKWhIjwTEik", title: "🎵  巴拉萊卡 Balalaika🔹#帕蘿妮 #Paroniie #COVER", date: "2024-03-22" },
      { id: "UInvujUYiX4", title: "🎵 斑馬斑馬「我不想去觸碰你傷口的疤」｜帕蘿妮💧Paroniie cover.", date: "2024-02-27" },
      { id: "U35GC8XpGo8", title: "一週年紀念暨新春COVER🎵 春風十里「我說所有的酒都不如你」｜帕蘿妮💧Paroniie cover.", date: "2024-02-09" },
      { id: "us-m2ZZ-t5s", title: "【新型態預告】即日起到2/23 一起來預測新型態吧！#帕妮是誰 🔹#帕蘿妮 #Paroniie", date: "2024-02-01" },
      { id: "RQjK_mf4CBg", title: "【🎵以心傳心】強風オールバック ft. 洛可洛斯特、柴崎楓音🔹#帕蘿妮 #Paroniie #cover", date: "2024-01-30" },
      { id: "uN4n513eONQ", title: "【🎵以心傳心】曹操 ft. 洛可洛斯特、柴崎楓音🔹#帕蘿妮 #Paroniie #cover", date: "2024-01-29" },
      { id: "ujqFpGj8D0A", title: "【🎵以心傳心】專屬天使 ft. 洛可洛斯特、柴崎楓音🔹#帕蘿妮 #Paroniie #cover", date: "2024-01-28" },
      { id: "P9qau0NhHR4", title: "龍的優雅興趣！聽完這支影片全宇宙都會送錢給你(大概吧?)【帕蘿妮✨官方精華】#shorts", date: "2024-01-23" },
      { id: "KZY1glbbYoo", title: "🎵 強風オールバック🔹#帕蘿妮 #Paroniie cover.", date: "2024-01-23" },
      { id: "nQw9qTPp1ZA", title: "🎵 星光降落「星光降落在你的眼底我也順勢跌進你眼睛」｜帕蘿妮💧Paroniie cover.", date: "2024-01-12" },
      { id: "b4bFZP2ieQo", title: "🎵 追夢人「看我看一眼吧莫讓紅顏守空枕」｜帕蘿妮💧Paroniie cover.", date: "2023-12-15" },
      { id: "hEnaGKFL9_g", title: "【帕蘿妮｜官方精華】光速被拔旗的OO天下第一🔹帕蘿妮 Paroniie", date: "2023-12-01" },
      { id: "gv9mBNcMo_A", title: "#以心傳心 🎵人間不值得 ft. 銀河、小金碧碧🔹帕蘿妮 Paroniie cover.", date: "2023-11-28" },
      { id: "WGnPzwxtefo", title: "#以心傳心 🎵行星 ft. 銀河、小金碧碧🔹帕蘿妮 Paroniie cover.", date: "2023-11-27" },
      { id: "osqomnv6BTQ", title: "#以心傳心 🎵萬千花蕊慈母悲哀 ft. 銀河、小金碧碧🔹帕蘿妮 Paroniie cover.", date: "2023-11-26" },
      { id: "26tyBgCxG6w", title: "🎵 愛如火「你在笑瘋狂的人是我」｜帕蘿妮💧Paroniie cover.", date: "2023-11-17" },
      { id: "YZdRHwnmHow", title: "【帕蘿妮｜官方精華】帕牛妮的誕生🔹帕蘿妮 Paroniie", date: "2023-11-07" },
      { id: "zhzdFLYFpek", title: "🎵 四季予你「送你每個夢境每次清醒陪伴的長情」｜帕蘿妮💧Paroniie cover.", date: "2023-10-13" },
      { id: "TKLwKCbXmlo", title: "【帕蘿妮｜官方精華】疑難雜症棉花糖之法院會告訴你真相", date: "2023-09-29" },
      { id: "5J41hjw0rI8", title: "🎵 孤單北半球「少了你的懷抱當暖爐我還不習慣」｜帕蘿妮💧Paroniie cover.", date: "2023-09-29" },
      { id: "zgZlHpKaqQc", title: "🎵 KING｜帕蘿妮💧Paroniie cover.", date: "2023-09-01" },
      { id: "9X80SF27ULw", title: "🎵 起風了「我曾難自拔於世界之大也沉溺於其中夢話」｜帕蘿妮💧Paroniie cover.", date: "2023-07-28" },
      { id: "MHCZWU_KlY8", title: "🎵 晚風告白「我遇見很多人卻只想和你慢慢周旋」｜帕蘿妮💧Paroniie cover.", date: "2023-07-08" },
      { id: "tGN4sPmQW9o", title: "🎵 本色｜帕蘿妮💧Paroniie cover.", date: "2023-06-23" },
      { id: "-pbygS3LcLw", title: "🎵 他們說我是沒有用的年輕人｜帕蘿妮💧Paroniie cover.", date: "2023-06-02" },
      { id: "CcVF4Nlp5NM", title: "【幻塔｜帕蘿妮】不能錯過這個海底的抽卡風水寶地！", date: "2023-04-30" },
      { id: "DX6wllwsALc", title: "【帕蘿妮｜官方精華】愛笑蘿的忍笑大賽！真的能忍住不笑嗎？", date: "2023-03-21" },
      { id: "KyI_GZXl-Fk", title: "【帕蘿妮｜官方精華】大尾新人初登場就把老闆當空氣！？", date: "2023-02-28" },
      { id: "okXE3-YQHtY", title: "🔹 帕蘿妮 💧 預告 2.24 / 21:30 初配信嗷！", date: "2023-02-23" },
      { id: "QeWFvm0vwz8", title: "🎵 Summertime｜帕蘿妮💧Paroniie cover.", date: "2023-02-18" },
      { id: "KP0UUQVcdJk", title: "帕蘿妮 🧪就決定是你了！快使出搖尾巴！", date: "2023-02-16" },
      { id: "YsTqsdqvxkY", title: "🎵 易燃易爆炸｜帕蘿妮💧Paroniie cover.", date: "2023-02-05" },
      { id: "24Pgn47b148", title: "🎵 彈唱練習ONETAKE ✧ 能認出幾首歌呢？｜帕蘿妮💧Paroniie cover.", date: "2023-02-01" },
      { id: "YGBbknckFV0", title: "👻 🎵 ghost choir｜帕蘿妮💧Paroniie cover.", date: "2023-01-29" },
      { id: "L45AX6zldZY", title: "帕蘿妮 🧪 初配信預告嗷～我想要加一點這個！再加一點那個！🎆", date: "2023-01-17" }
    ],
    shorts: [],
    originals_manual: [],
    premiere: [],
    general: [],
    vlog: [],
    commerce: [],
    memberVideos: [],

    musicClipsChannelIds: [
      { id: "UC4nZ-KbmFr21Qt1lN9rmbdQ", label: "孫小毛",       keywords: ["帕蘿妮", "paroniie", "帕帕", "Exitus"],  typeKeywords: ["點歌台", "歌回", "cover"] },
      { id: "UCMlvVMgOjH76AwolFgKEP1Q", label: "成彦なりひこ", keywords: ["帕蘿妮", "paroniie", "帕帕", "Exitus"],  typeKeywords: ["歌回", "cover"] },
    ],

    videoClipsChannelIds: [
      { id: "UC4nZ-KbmFr21Qt1lN9rmbdQ", label: "孫小毛",       keywords: ["帕蘿妮", "paroniie", "帕帕", "Exitus"],          excludeKeywords: ["點歌台", "歌回", "cover", "瓦瓦", "Vaswawa"] },
      { id: "UCv9MXWx8AW5BZ07OPJyf7jg", label: "鬧欸",         keywords: ["帕蘿妮", "paroniie", "帕帕", "Exitus"], excludeKeywords: ["神無月鹿比", "鹿比", "艾琳妮雅", "歌回", "cover"] },
      { id: "UC66CXCqyFbN3wkhw1cDP3yg", label: "茄子阿光",   keywords: ["帕蘿妮", "paroniie", "帕帕", "Exitus"] },
      { id: "UC-1o-O9Vnh6WEMpJVBzIIqg", label: "光ちゃん",  keywords: ["帕蘿妮", "paroniie", "帕帕", "Exitus"] },
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
    id: "lubee",
    name: "神無月鹿比",
    nameEn: "Kannazuki Lubee",
    group: "預見娛樂",
    generation: "一期生",
    avatar: "https://pbs.twimg.com/profile_images/2006266508633366529/NjcXGLXW_400x400.png",
    coverImage: "https://pbs.twimg.com/profile_banners/1585116375894609920/1674036165/1500x500",
    tagline: "",
    taglines: [
      { context: "", text: "啊~哈~" },
      { context: "", text: "088勒!" },
      { context: "", text: "幹林德哩!" },
      { context: "", text: "12點了，我先去餵咪拎了。" }
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

    videos: [
      { id: "IClW1jRLoM0", title: "【神無月鹿比🦌｜官方精華】Starsavior裡有這麼多UU是可以的嗎！居然還爆衣！！", date: "2026-06-05" },
      { id: "cKfsU7GXpaQ", title: "グレイ - sajou no hana／神無月鹿比【復甦島3 鹿清酒殺青Cover】", date: "2026-05-21" },
      { id: "_O4A4wOId40", title: "【神無月鹿比🦌｜官方精華】在明日方舟：終末地裡尋找咕咕嘎嘎！清波寨怎麼哪裡都好看", date: "2026-03-19" },
      { id: "wa7kLSq_kJA", title: "【神無月鹿比🦌｜官方精華】在伊瑟裡被真理果小舞痛打的我，痛定思痛成為頂尖強者？！（偽）", date: "2025-09-17" },
      { id: "NSyHg5juxUM", title: "YY - 23.exe／神無月鹿比 × ‪熙歌 @CygnusXDFP × ‪哈瓜 @Jongie × ‪REN @Ren0809 × KSP @KSPKSP【Cover】", date: "2025-06-30" },
      { id: "krvrliO5Dm0", title: "【神無月鹿比🦌｜3D Showcase精華】小鹿好好玩 (・ω・)b w/涅默、幻月", date: "2025-05-14" },
      { id: "klyS8sBE5U0", title: "Enemy 中文直譯 - Imagine Dragons x J.I.D／神無月鹿比【Cover】", date: "2025-05-11" },
      { id: "VDj-McWV0JM", title: "刀ピークリスマスのテーマソング2023 - ピーナッツくん／神無月鹿比【Cover】", date: "2025-04-27" },
      { id: "m9RlCKl9wsc", title: "4-6年級健康操標準式連續動作／神無月鹿比【試⋯試跳？】", date: "2025-04-26" },
      { id: "iD81iWZTuG0", title: "【3D SHOWCASE】Deerest【神無月鹿比🦌】", date: "2025-04-12" },
      { id: "5lHhs7qkQlA", title: "【#Deerest】神無月鹿比 4月11日 3D SHOWCASE 預告PV 🎮🦌", date: "2025-03-27" },
      { id: "mSZgWUcEtsE", title: "【#新衣披鹿】發動今天我生日卡！來看看我的新衣裝然後一起來拆禮物吧～！【神無月鹿比🦌】", date: "2024-10-22" },
      { id: "LTK6BeCKCtI", title: "I Really Want to Stay At Your House - Rosa Walton／神無月鹿比【Cover】", date: "2024-10-09" },
      { id: "C4P23l39A0w", title: "【神無月鹿比🦌｜官方精華】LBS遊戲居然是不用出門也可以玩的嗎？來玩玩看陰陽師IP的全新作品《陰陽百鬼物語GO》！", date: "2024-08-30" },
      { id: "z2k4oKsaiQA", title: "【神無月鹿比🦌｜官方精華】全新改版—龍門客來！今年要在末日裡過新年【黎明覺醒】", date: "2024-02-15" },
      { id: "xyMNP4LMKFs", title: "【神無月鹿比🦌｜官方精華】MMORPG 命運之書也太可愛了吧！鹿比能夠抽到SS級嗎？", date: "2023-12-16" },
      { id: "YHilCp_e41Q", title: "【神無月鹿比🦌｜官方精華】入晝夜城第一天！怎麼我的存款一直減少，同事剛見面還都先扁我一拳( ×ω× )", date: "2023-12-13" },
      { id: "bMDm8LKrzek", title: "【神無月鹿比🦌｜官方精華】艾爾登之鹿坐牢（刪除線）成王合集！", date: "2023-10-20" },
      { id: "6u9DzAcUXGo", title: "【絢花百兵帖】台灣自製策略型RPG手遊！香香兵器擬人＋中文配音超讚(๑•̀ㅂ•́)و✧【神無月鹿比🦌】", date: "2023-10-15" },
      { id: "TWvRMegIYhw", title: "【重返未來：1999】英國腔真的....太強了 無法拒絕! 與復古英倫風的畫面搭配絕讚", date: "2023-10-09" },
      { id: "c1sBKwZNuGY", title: "【神無月鹿比🦌｜官方精華】回顧推特卻被鹿餅氣到中風？鹿比想告訴大家的事", date: "2023-09-28" },
      { id: "wnyHtiDaNt4", title: "【神無月鹿比🦌｜官方精華】鹿鹿句尾＋蘿鹿模式雙重爆擊！？", date: "2023-09-21" },
      { id: "rKbdZ1nWwGo", title: "【#雲圖計劃】噴嚏流抽卡！轉金難道…？不可能再歪吧...【神無月鹿比🦌】", date: "2023-08-03" },
      { id: "mZYpAfljg0E", title: "【神無月鹿比🦌｜官方精華】有一個有點王八的老闆是什麼感受？在這裡也許你能稍微感受到(´;ω;`) w/@LancatOfficial", date: "2023-06-24" },
      { id: "SuJ5KaXyPKA", title: "【神無月鹿比🦌｜官方精華】鹿主播強力推薦，揪心大作！舉起彩虹大旗一起來看人與人的連結吧(灬ºωº灬)", date: "2023-06-16" },
      { id: "eNYREifj6JE", title: "【神無月鹿比🦌｜Minecraft接力生存】接力棒傳到我的手中，接下來的人可以不用擔心了！（吧）#紅月接力生存 第六棒", date: "2023-06-10" },
      { id: "eBu2Aa_wcN4", title: "【#雲圖計劃】立旗系VTuber毒奶挑戰！半周年新活動來啦【神無月鹿比🦌】", date: "2023-05-26" },
      { id: "4xkBYXy-oOs", title: "ママ - HoneyWorks／神無月鹿比【Cover】", date: "2023-05-14" },
      { id: "xlghz4htmug", title: "【神無月鹿比🦌｜官方精華】大家敲碗的43小時壺男耐久精華出來啦～！₍₍ ᕕ(´ ω` )ᕗ⁾⁾ 我到底怎麼辦到的…", date: "2023-04-19" },
      { id: "iZdkA2--9As", title: "【#雲圖計劃】鹿比的抽卡玄學！粉絲就乖乖被獻祭吧！#愚者二象性【神無月鹿比🦌】", date: "2023-04-14" },
      { id: "mdmgUoZtDBI", title: "【神無月鹿比🦌｜官方精華】我真的是第一次玩而已可以對新手友善一點嗎( ˘･з･)", date: "2023-03-23" },
      { id: "Ueecmolowc8", title: "【神無月鹿比🦌｜官方精華】遊戲廢鹿降落！澡，當然是玩完遊戲才洗吧", date: "2023-03-02" },
      { id: "jPk8z2_Cic0", title: "神無月鹿比🦌 我真的什麼都沒做啊怎麼就生氣了呢", date: "2023-02-26" },
      { id: "pGrjUTO0j1s", title: "神無月鹿比🦌 怎麼好像什麼事都沒做一天就過去了", date: "2023-02-20" },
      { id: "cuJ3gWMaFlE", title: "チューリングラブ／神無月鹿比 × 厄倫蒂兒@EarendelXDFP 【Cover】", date: "2023-02-14" },
      { id: "sH-V3iPvtDk", title: "神無月鹿比🦌 如何成為一個成功又可愛的遊戲廢鹿", date: "2023-01-30" },
      { id: "dVEPJXnfGoQ", title: "ド屑 - なきそ／神無月鹿比【Cover】", date: "2023-01-20" },
      { id: "MPZwklQ0YfM", title: "神無月鹿比🦌 玩著遊戲唱著歌突然就初配信預告了", date: "2023-01-18" }
    ],
    shorts: [],
    originals_manual: [
      { id: "cKfsU7GXpaQ", title: "【Cover】グレイ - sajou no hana／神無月鹿比【復甦島3 鹿清酒殺青Cover】", date: "2026-05-21" },
      { id: "NSyHg5juxUM", title: "【Cover】YY - 23.exe／神無月鹿比 × ‪熙歌 @CygnusXDFP × ‪哈瓜 @Jongie × ‪REN @Ren0809 × KSP @KSPKSP【Cover】", date: "2025-06-30" },
      { id: "klyS8sBE5U0", title: "【Cover】Enemy 中文直譯 - Imagine Dragons x J.I.D／神無月鹿比【Cover】", date: "2025-05-11" },
      { id: "VDj-McWV0JM", title: "【Cover】刀ピークリスマスのテーマソング2023 - ピーナッツくん／神無月鹿比【Cover】", date: "2025-04-27" },
      { id: "LTK6BeCKCtI", title: "【Cover】I Really Want to Stay At Your House - Rosa Walton／神無月鹿比【Cover】", date: "2024-10-09" },
      { id: "4xkBYXy-oOs", title: "【Cover】ママ - HoneyWorks／神無月鹿比【Cover】", date: "2023-05-14" },
      { id: "cuJ3gWMaFlE", title: "【Cover】チューリングラブ／神無月鹿比 × 厄倫蒂兒@EarendelXDFP 【Cover】", date: "2023-01-30" },
      { id: "dVEPJXnfGoQ", title: "【Cover】ド屑 - なきそ／神無月鹿比【Cover】", date: "2023-01-18" }
    ],
    premiere: [],
    general: [],
    vlog: [],
    commerce: [],
    memberVideos: [],

    scheduleVideoId:  "kc5RN-h_bAs",
    spreadsheetLabel: "鹿比的大小事",
    scheduleTitle:    "鹿比的行程表",

    refSheets: [
      { version: "Ver 1.0", url: "images/神無月鹿比 v1.0.png" },
      { version: "Ver 2.0", url: "images/神無月鹿比 v2.0.jpg" },
    ],

    // 小知識
    fanName: "鹿餅",
    hashTags: [
      { label: "Hashtag", tag: "#鹿過人間" },
      { label: "FanArt",  tag: "#DrawLubee" },
      { label: "Meme",    tag: "#Meme鹿"   },
    ],
    futureGoals: [
      "希望不工作就會有錢從天上掉下來的遊戲廢鹿",
    ],
    triviaLikes: [
      { label: "最喜歡的食物", items: ["酸菜魚（女神逢人就推）", "燒烤", "麻奶鍋", "蛤蠣", "巧克力", "拉麵", "萬波的冬瓜檸檬"] },
    ],
    triviaHates: [
      { label: "不喜歡的食物", items: ["苜蓿芽", "牡蠣", "苦瓜"] },
    ],

    musicClipsChannelIds: [
      { id: "UC7KF3UyPn2SFM-3oLApYYSQ", label: "ミちゃんmichan", keywords: ["哈鹿"], typeKeywords: ["歌回", "合唱"] },
    ],

    videoClipsChannelIds: [
      { id: "UCv9MXWx8AW5BZ07OPJyf7jg", label: "鬧欸", keywords: ["神無月鹿比", "鹿比", "Lubee", "小鹿", "Exitus"], excludeKeywords: ["帕蘿妮", "艾琳妮雅", "歌回", "cover"] },
      { id: "UC7KF3UyPn2SFM-3oLApYYSQ", label: "ミちゃんmichan", keywords: ["神無月鹿比精華", "哈鹿精華", "Exitus"], excludeKeywords: ["歌切", "cover", "歌回", "合唱", "線下連動"] },
      { id: "UC-1o-O9Vnh6WEMpJVBzIIqg", label: "光ちゃん",      keywords: ["神無月鹿比", "Exitus"] },
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
      { id: "SAEckwMO3Tc", title: "【Resident Evil Survival Unit】末日來臨前請先預習！咪奇教你運氣逃生法！", date: "2026-02-08" },
      { id: "362HUnOTN4g", title: "【姬城三千華｜官方精華】💼 明明是箱內歌回接力但一直 cue 到515？？？", date: "2024-05-11" },
      { id: "N_g_Zdfed10", title: "【姬城三千華】加班台之歌", date: "2024-04-05" },
      { id: "pafkuNGdVFA", title: "【姬城三千華】貴方の恋人になりたい/想要成為你的戀人 #國際vtuber紅白歌合戰2023", date: "2024-01-15" },
      { id: "hap3EqxqCk8", title: "【雲圖計劃】今天我要嫁給你了~喔不！是你們！", date: "2023-11-30" },
      { id: "Kjlvoz1UA5I", title: "【重返未來：1999】超棒復古英倫風!! 這麼棒的1999我根本不想回來了!!", date: "2023-10-16" },
      { id: "-wUvENazjkg", title: "【姬城三千華｜官方精華】💼傳說中的神秘人物！這是姬城姐姐！？", date: "2023-09-04" },
      { id: "Na-ZEqskdwg", title: "【#devilbook  命運之書】抽爆所有角色！新條例誕生，員工課金老闆出錢！", date: "2023-09-03" },
      { id: "VtvG-qREg-g", title: "【姬城三千華｜官方精華】💼它追！她逃！她插翅難飛！", date: "2023-08-31" },
      { id: "9J0g59bqgAo", title: "【姬城三千華｜官方精華】💼誰說女鬼橋是恐怖遊戲！？明明很好笑....🎉", date: "2023-08-30" },
      { id: "gsdTv4er_1g", title: "【#雲圖計劃 臨界爆震】不是開玩笑的三蛋黃！？歐咪卡不是蓋的！", date: "2023-07-12" },
      { id: "C5k9mBeKGeE", title: "【姬城三千華｜官方精華】💼被操盤的訂閱數！失去的兩萬訂閱還能回來吧( ´•̥̥̥ω•̥̥̥` ) @LancatOfficial", date: "2023-07-12" },
      { id: "OpjWG80-siY", title: "【姬城三千華｜官方精華】💼一日女團體驗開啟與老闆的金錢對決=͟͟͞͞( •̀д•́) #兩萬挑戰1 @LancatOfficial", date: "2023-07-06" },
      { id: "0r-GJ01B0W4", title: "【#雲圖計劃】毒奶咪v.s.機關咪，究竟 #可露凱 會不會被召喚出來呢?【姬城三千華｜官方精華】", date: "2023-06-08" },
      { id: "3uKMRlECRnQ", title: "【姬城三千華｜官方精華】💼咪奇終於破關小小夢魘了！死法跟玩法都跟大家不太一樣？！", date: "2023-04-30" },
      { id: "98txaTyAJTY", title: "【#雲圖計劃】我聞到了！這就是幻謎的味道...嗎? #愚者二象性【姬城三千華｜官方精華】", date: "2023-04-14" },
      { id: "u8pDbryCMPE", title: "【姬城三千華｜官方精華】💼一年一度共12次的情人節！16歲的奇美拉又做出了什麼事情呢？❤️", date: "2023-03-26" },
      { id: "KoYMNhTbwWc", title: "【姬城三千華｜官方精華】💼榮獲實況主懶貓大人的五星好評！？難道是傳說中的超新星辛人？？？｡:.ﾟヽ(*´∀`)ﾉﾟ.:｡❤️", date: "2023-03-08" },
      { id: "k5m6TgVVKQE", title: "姬城三千華獨家冠名播出 ---- 【眼鏡的故事】", date: "2023-02-23" },
      { id: "tDZxJhvZOPk", title: "姬城三千華 ----「御宅連續技」✧*｡٩(ˊᗜˋ*)و✧*｡", date: "2023-02-13" },
      { id: "m1ldSMcPgYI", title: "姬城小故事 — — — 第二話 【啾....啾啾....嘔】", date: "2023-02-09" },
      { id: "6WoKAIlx3eE", title: "姬城小故事 — — — 第一話 【啾啾！啾～】", date: "2023-01-30" },
      { id: "Kw27GNWjuDo", title: "🔖姬城三千華💼   初配信預告 -- 誒？！要開始上課了？！？？！", date: "2023-01-19" }
    ],
    shorts: [],
    originals_manual: [
      { id: "zigOqYHDOEc", title: "【Cover】ドゥーマー / 東京真中【姬城三千華 -- 歌ってみた】", date: "2026-05-21" },
      { id: "GmvkH4Cfht8", title: "【Cover】みきとP / 少女レイ【姬城三千華 -- 歌ってみた】", date: "2025-09-14" },
      { id: "oU-JnvSj-ww", title: "【Cover】Stray Kids / Cover Me【姬城三千華 FT. @jinbee_v -- 歌ってみた】", date: "2025-08-01" },
      { id: "MzyvgZnoZ_o", title: "【Cover】Stray Kids / Youtiful【姬城三千華 -- 歌ってみた】", date: "2025-05-20" },
      { id: "w0FzCvwu0t8", title: "【Cover】初心LOVE / なにわ男子【姬城三千華 -- 歌ってみた】", date: "2025-02-14" },
      { id: "veuSxQfgPSU", title: "【Cover】可愛くてごめん / HoneyWorks【姬城三千華 -- 歌ってみた】", date: "2024-04-01" },
      { id: "apzY_sCKBj4", title: "【Cover】青のすみか / キタニタツヤ【姬城三千華 -- 歌ってみた】", date: "2023-09-01" },
      { id: "iud7McV0ZC8", title: "【Cover】独りうた 〜September調子はどうだい〜 / うじたまい【姬城三千華 -- 歌ってみた】", date: "2023-02-04" },
      { id: "S_sgv6gTGTg", title: "【Cover】ただ声一つ / ロクデナシ【姬城三千華 -- 歌ってみた】", date: "2023-01-24" },
      { id: "pafkuNGdVFA", title: "【Original】貴方の恋人になりたい/想要成為你的戀人 #國際vtuber紅白歌合戰2023", date: "2024-01-15" },
      { id: "hap3EqxqCk8", title: "【Original】今天我要嫁給你了~喔不！是你們！", date: "2023-11-30" }
    ],
    premiere: [],
    general: [],
    vlog: [],
    commerce: [],
    memberVideos: [],

    scheduleVideoId:  "tPRVSHoEEeg",
    spreadsheetLabel: "咪奇的大小事",
    scheduleTitle:    "咪奇的行程表",

    refSheets: [
      { version: "Ver 1.0", url: "images/姬城三千華 v1.0.png" },
    ],

    // 小知識
    fanName: "姬靈鬼",
    hashTags: [
      { label: "Hashtag", tag: "#一米幾"    },
      { label: "Live",    tag: "#見姬行事"  },
      { label: "Message", tag: "#HiMichi"   },
      { label: "FanArt",  tag: "#M1chiarT"  },
      { label: "Meme",    tag: "#MeMe7ka"   },
    ],
    triviaLikes: [
      { label: "喜歡的食物", items: ["炸雞排", "甜", "辣", "火鍋"] },
    ],
    triviaHates: [
      { label: "不喜歡的食物", items: ["豆類", "香菜", "青椒"] },
    ],

    songStatsGids: {
      "2026": "873622761",
      "2025": "1816981002",
      "2024": "285108625",
      "2023": "1950043660",
    },

    videoClipsChannelIds: [
      { id: "UCv9MXWx8AW5BZ07OPJyf7jg", label: "鬧欸", keywords: ["米幾", "咪七", "MICHI", "咪奇", "Exitus"], excludeKeywords: ["帕蘿妮", "神無月鹿比", "鹿比", "艾琳妮雅", "歌回", "cover"] },
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

    videos: [
      { id: "KIYLfFkJecA", title: "【酔いどれ知らず Yoidore Shirazu】🦇🌕艾琳妮雅·裴利 Arrynia Vaeri", date: "2024-10-31" },
      { id: "oYkW_0lrXWE", title: "【米津玄師 Kenshi Yonezu - KICKBACK】🦇🌕艾琳妮雅·裴利 Arrynia Vaeri #arrynvaer1 #台v #女僕", date: "2024-02-21" },
      { id: "JifHPID7BhA", title: "【黎明覺醒】這是在逛夜市嗎?老闆我要一份烤鮑魚、咸酥雞、炸紅薯、嫩豆腐!🦇🌕艾琳妮雅·裴利 Arrynia Vaeri", date: "2024-02-15" },
      { id: "gmyQC8Qcaz8", title: "【重返未來：1999】The Storm is coming! 快來跟艾琳我一起穿越時空 體驗英倫風電影劇情！", date: "2023-10-13" },
      { id: "NGdgQfB3mmA", title: "【NIJISANJI VER.】ウマ娘 TVアニメ 2期OP「夢よ咲き誇れ」/ 艾琳妮雅", date: "2023-09-22" },
      { id: "xv-Xo9hy_Hs", title: "【官方精華】艾琳妮雅的吸血鬼日常", date: "2023-09-15" },
      { id: "3eWsQ7NMk4Q", title: "【官方精華】Vtuber們的睡眠品質挑戰", date: "2023-08-28" },
      { id: "SQSkw4xmQLs", title: "【官方精華】女僕的晚餐時間", date: "2023-08-10" },
      { id: "HSbXF07k8Qo", title: "【官方精華】吸血鬼的弱點測試", date: "2023-07-25" },
      { id: "q6U9CTqiWds", title: "【官方精華】艾琳跟誰都能聊天", date: "2023-07-18" },
      { id: "BpxqSkUPNHc", title: "【官方精華】Vtuber 才藝秀", date: "2023-06-30" },
      { id: "jwYiJke__Mc", title: "【官方精華】夜晚雜談直播", date: "2023-06-15" },
      { id: "zNyFM9msMXA", title: "【官方精華】遊戲實況趣事", date: "2023-05-25" },
      { id: "V1QsQfowmjw", title: "【官方精華】與粉絲互動時刻", date: "2023-05-10" },
      { id: "hSaFL_NTIqA", title: "【官方精華】Vtuber 配信後聊天", date: "2023-04-28" },
      { id: "nSEyxRvYsEU", title: "【官方精華】吸血鬼女僕的日常碎碎念", date: "2023-04-15" },
      { id: "zoJmxWdNSGg", title: "【官方精華】遊戲中的爆笑時刻", date: "2023-03-30" },
      { id: "cWMDMkr0tvo", title: "【官方精華】Vtuber 美食介紹", date: "2023-03-18" },
      { id: "UIAHnP395Gc", title: "【官方精華】直播間趣事集錦", date: "2023-02-28" },
      { id: "RnOl5GACzFA", title: "艾琳妮雅·裴利🦇🌕Arrynia Vaeri初配信預告 - 主人，我準備好了", date: "2023-01-19" }
    ],
    shorts: [],
    originals_manual: [
      { id: "YQXOIu3YjyU", title: "【失礼しますが、RIP♡ COVER REMIX 2026】🦇🌕艾琳妮雅·裴利 Arrynia Vaeri", date: "2026-03-13" },
      { id: "wINYyn9kDZI", title: "【COVER - 失礼しますが、RIP♡ || Calliope Mori】🦇🌕艾琳妮雅·裴利 Arrynia Vaeri", date: "2024-02-14" },
      { id: "QGSRaxHlOrw", title: "【老公天下第一 Cover - 總共8位Vtuber們的老公天下第一計畫大成功！】🦇🌕艾琳妮雅·裴利 Arrynia Vaeri", date: "2023-12-25" },
      { id: "8yDAiy4UxiA", title: "【KING Electro Swing Remix Cover with @SHIUCODA 】🦇🌕艾琳妮雅·裴利 Arrynia Vaeri", date: "2023-10-31" },
      { id: "gL-gPGV7zpw", title: "【Charlie Puth - Light Switch Japanese Cover】🦇🌕艾琳妮雅·裴利 Arrynia Vaeri", date: "2023-05-13" },
      { id: "L4-cMBPqT8g", title: "Selena Gomez - Good For You / Cover by Arrynia Vaeri ft.@L1KaRuZ", date: "2023-02-10" }
    ],
    premiere: [],
    general: [],
    vlog: [],
    commerce: [],
    memberVideos: [],

    videoClips: [
      { id: "Mf_2asOpiuw", title: "【能者多勞勇者欣梅爾（？】🦇🌕艾琳妮雅·裴利 Arrynia Vaeri", keywords: ["艾琳妮雅", "Arrynia", "Exitus"] },
      { id: "cghr3y7M0Eo", title: "【麥當勞蘋果派竟是遊戲中最強武器！?】🦇🌕艾琳妮雅·裴利 Arrynia Vaeri", keywords: ["艾琳妮雅", "Arrynia", "Exitus"] },
      { id: "4gINlqMLtcU", title: "【統領竟然想丟冰山到艾琳坐的船前面！？】🦇🌕艾琳妮雅·裴利 Arrynia Vaeri", keywords: ["艾琳妮雅", "Arrynia", "Exitus"] },
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
      { id: "UCMlvVMgOjH76AwolFgKEP1Q", label: "成彦なりひこ", keywords: ["艾琳妮雅", "Arrynia", "艾琳", "Exitus"], excludeKeywords: ["精華"] },  // Cover/歌回（排除精華）
      { id: "UCkdXbWulRmheqfVmV7WjaFQ", label: "台灣香蕉王",   keywords: ["艾琳妮雅", "Arrynia Vaeri"] },
    ],

    videoClipsChannelIds: [
      { id: "UCv9MXWx8AW5BZ07OPJyf7jg", label: "鬧欸",        keywords: ["艾琳妮雅", "Arrynia", "Exitus"], excludeKeywords: ["帕蘿妮", "神無月鹿比", "鹿比", "歌回", "cover"] },
      { id: "UCMlvVMgOjH76AwolFgKEP1Q", label: "成彦なりひこ", keywords: ["艾琳妮雅", "Arrynia", "艾琳", "Exitus"], typeKeywords: ["精華"] },  // 只抓精華影片
    ],

    color: "#28004D",  // 艾琳妮雅 代表色（深紫）
    badgeTextColor: "white"  // 深色背景，徽章文字改回白色
  },

  {
    id: "kiriko",
    name: "酒樂霧子",
    nameEn: "Kiriko",
    group: "預見娛樂",
    generation: "二期生",
    avatar: "https://pbs.twimg.com/profile_images/2064722256811655168/t1q77w95.jpg",
    coverImage: "https://pbs.twimg.com/profile_banners/1676559936602644480/1750936798/1500x500",
    tagline: "",
    taglines: [
      { context: "", text: "嗯嗯嗯嗯嗯嗯嗯" },
      { context: "", text: "ㄍㄋㄋㄇㄉㄐㄅ" },
      { context: "", text: "好耶~~" },
      { context: "", text: "媽耶~" }
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
      { id: "masQqLx_G9M", title: "【日本行 VLOG】酒樂一個人霧闖日本！妖生第一次自己出國，真的沒有問題嗎....？【酒樂霧子】", date: "2026-05-21" },
      { id: "amF-oqsPBDk", title: "【全部都是我的聲音】恭喜發財 -  劉德華 / 酒樂霧子", date: "2026-01-25" },
      { id: "gaKcJiE34Vg", title: "【AlluNyx 11人】祝福のメシアとアイの塔 - ひとしずく×やま△ / MeloNyx × Alluria", date: "2025-12-07" },
      { id: "WGq2KqtDmMw", title: "【星穹鐵道 - 貨幣戰爭】只要還能摸牌就是我的回合！青雀追擊流，A8照樣能當神君啟動器", date: "2025-11-23" },
      { id: "0ur-WNZyKNw", title: "【星穹鐵道 - 貨幣戰爭】我、即為鋼彈！青雀鋼彈流，體驗一次開五台鋼彈的快樂 #星穹鐵道 #貨幣戰爭 #鋼彈", date: "2025-11-15" },
      { id: "ToJJ_JBHPd8", title: "【酒鬼誕生日2025】0610 | 今天我生日【酒樂霧子】", date: "2025-06-26" },
      { id: "20uoLY0DQcU", title: "【第一屆精選22台灣美少女V】預見娛樂所屬MeloNyx的酒樂霧子【2025台北國際動漫節】", date: "2025-06-23" },
      { id: "OiqqtC9KhaM", title: "【酒樂霧子 | 官方精華】瑞杏杯最佳斜咖手環王咕嚕 ft. @Koko0416 @波斯畢格", date: "2024-09-22" },
      { id: "LhiiBfhnn4A", title: "【酒樂霧子 | 官方精華】被圍毆的妖怪？酒鬼終於見到了真實面目", date: "2024-09-16" },
      { id: "9FhptzmqPxk", title: "【隆煌與靴子的奇妙之旅】酒樂霧子也來了？妖怪集合！", date: "2024-08-10" },
      { id: "iyg0VcXfOuU", title: "【酒樂霧子 | 官方精華】ASMR？不對，是酒鬼的碎碎念", date: "2024-08-05" },
      { id: "MTTLaTMjXAU", title: "【酒樂霧子 | 官方精華】你會搶著要的女友體質 ft. 各路Vtuber", date: "2024-02-14" },
      { id: "cZ2qvoASNts", title: "【酒樂霧子 | 官方精華】妖怪媽媽的日常", date: "2024-02-03" },
      { id: "MNviybmnj_0", title: "【酒樂霧子 | 官方精華】我真的沒有偏心啦", date: "2024-01-15" },
      { id: "sG4gJ9irA-Y", title: "【酒樂霧子 | 官方精華】最強酒鬼降臨！初配信即開喝？最PON的可愛妖怪在這裡～！", date: "2023-12-10" },
      { id: "FcAddl49AD0", title: "【演奏してみた？】Tequila - The Champs（short ver.） / 酒樂霧子", date: "2023-12-02" },
      { id: "wtRG8mMeWSU", title: "魔競最終面試，BOSS竟然這麼說.... feat. @LancatOfficial", date: "2023-11-10" },
      { id: "OiC5xmBzLDU", title: "BABOBIBOBA", date: "2023-11-03" }
    ],
    shorts: [],
    originals_manual: [
      { id: "6hIGWxBXw9Y", title: "【歌ってみた】レクイエム - Kanaria / 酒樂霧子 × ？？？？", date: "2026-06-08" },
      { id: "Gbmcqb0RVgw", title: "【歌ってみた】「聞いてよ最近彼氏がさ、」愚痴り合い - ASOBI同盟 / 酒樂霧子 × 結月莉莉奈", date: "2026-04-01" },
      { id: "0Jrf1Ci79dA", title: "【歌ってみた】化けの花 - なきそ / 酒樂霧子", date: "2025-06-10" },
      { id: "-76kJpzLgYw", title: "【歌ってみた】在加納共和國離婚 - 菲道爾&大穎 / 酒樂霧子 × 結月莉莉奈", date: "2025-01-01" },
      { id: "bSHOhXAAj9w", title: "【歌ってみた】人マニア - 原口沙輔 / 酒樂霧子", date: "2024-12-07" },
      { id: "Dh3WibJswFo", title: "【歌ってみた】酒が飲めるぞ - 怒髪天（short ver.） / 酒樂霧子", date: "2023-12-05" },
      { id: "NMHByYskJWc", title: "【歌ってみた】寄り酔い - 和ぬか / 酒樂霧子", date: "2023-11-22" },
      { id: "me_twUmyufU", title: "【歌ってみた】酔いどれ知らず - Kanaria / 酒樂霧子", date: "2023-11-01" }
    ],
    premiere: [],
    general: [],
    vlog: [],
    commerce: [],
    memberVideos: [],

    scheduleVideoId:  "CROYjRn86_o",
    spreadsheetLabel: "霧子的大小事",   // 試算表按鈕文字
    scheduleTitle:    "霧子的行程表",    // 行程頁標題

    refSheets: [
      { version: "Ver 1.0", url: "images/酒樂霧子 v1.0.png" },
      { version: "Ver 2.0", url: "images/酒樂霧子 v2.0.jpg" },
    ],

    // 小知識
    fanName: "妖眾",
    hashTags: [
      { label: "一般", tag: "#這裡有酒"  },
      { label: "配信", tag: "#酒鬼夜行"  },
      { label: "創作", tag: "#霧裏看FA"  },
      { label: "Meme", tag: "#me霧"      },
    ],
    futureGoals: [
      "接到酒類工商",
      "跟人類們一起喝酒！",
      "更了解人類們的文化",
      "妖眾越來越多，重現百鬼夜行",
    ],
    triviaLikes: [
      { label: "喜歡的東西",   items: ["一句話就是酒"] },
      { label: "喜歡的動漫",   items: ["Fate Zero", "JOJO", "遊戲人生", "堀與宮村"] },
      { label: "擅長的",       items: ["乞丐超人", "喝酒", "想要吃什麼"] },
      { label: "喜歡的音樂",   items: ["RAP", "J-POP", "VOCALOID", "C-POP", "J-ROCK", "INDIE BAND"] },
    ],
    triviaHates: [
      { label: "不擅長",       items: ["恐怖遊戲", "FPS", "辣的", "運動", "找路"] },
      { label: "討厭的蔬果",   items: ["番茄（非常討厭）"] },
      { label: "討厭的東西",   items: ["太陽", "草＆土", "昆蟲"] },
    ],

    musicClipsChannelIds: [
      { id: "UCv9MXWx8AW5BZ07OPJyf7jg", label: "鬧欸",     keywords: ["酒樂霧子", "Shuraku", "阿酒", "霧子", "MeloNyx"],          typeKeywords: ["歌回", "cover"] },
      { id: "UC66CXCqyFbN3wkhw1cDP3yg", label: "茄子阿光", keywords: ["酒樂霧子歌回剪輯"] },
      { id: "UCkdXbWulRmheqfVmV7WjaFQ", label: "台灣香蕉王", keywords: ["酒樂霧子", "Shuraku", "阿酒", "霧子", "MeloNyx"] },
      { id: "UCBdIlFj6vWDxU_m-PyM3aPQ", label: "bikaxu", keywords: ["酒樂霧子", "Shuraku", "阿酒", "霧子", "MeloNyx"], typeKeywords: ["cover", "歌ってみた"] },
    ],

    videoClipsChannelIds: [
      { id: "UCv9MXWx8AW5BZ07OPJyf7jg", label: "鬧欸",     keywords: ["酒樂霧子", "Shuraku", "阿酒", "霧子", "MeloNyx"],              excludeKeywords: ["歌回", "cover"] },
      { id: "UC66CXCqyFbN3wkhw1cDP3yg", label: "茄子阿光", keywords: ["酒樂霧子精華", "酒樂霧子&黑野悠真精華", "MeloNyx"],        excludeKeywords: ["歌回剪輯"] },
      { id: "UCBdIlFj6vWDxU_m-PyM3aPQ", label: "bikaxu", keywords: ["酒樂霧子", "Shuraku", "阿酒", "霧子", "MeloNyx"], excludeKeywords: ["cover", "歌ってみた"] },
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
      { context: "", text: "好不好" },
      { context: "", text: "大家早安" },
      { context: "", text: "瘋狂捉i" }
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
      {id:"5IiY77i912M",title:"【星鳴 Resonance Of Stars】3D演出精華 即便是噪音也想為你而唱。ODDS & ENDS + PLATONIC GIRL 3D演出精華切片 【瓦西瓦瓦 / Vaswawa】",date:"2026-05-11"},
      {id:"Uyde6kOo648",title:"【重大消息】3D Concert coming soon 2026.04.24 請讓我用全新的姿態與你見面",date:"2026-03-27"},
      {id:"x_JrrCqXmTg",title:"「瓦西瓦瓦讀詩謎」",date:"2025-02-20"},
      {id:"fk0ICJVvs3k",title:"【官方精華剪輯】謎題解不開？那就是訴諸武力的時候了。 #霧鎖王國 #enshrouded 【瓦西瓦瓦 / Vaswawa】",date:"2024-05-08"},
      {id:"Rytw6DTMgK0",title:"【官方精華剪輯】機器人大量入侵直播間！！你是機器人，他是機器人，還有誰不是機器人！？【瓦西瓦瓦 / Vaswawa】",date:"2024-05-01"},
      {id:"tx2dNWh2xl4",title:"【官方精華剪輯】恐怖遊戲 #女鬼橋 公園追逐攻略。【瓦西瓦瓦 / Vaswawa】",date:"2024-04-24"},
      {id:"kRZ3diZ64qo",title:"【官方精華剪輯】假如有天醒來長了一支ㄉ【瓦西瓦瓦 / Vaswawa】",date:"2024-04-17"},
      {id:"nkalo0Im9Yo",title:"【官方精華剪輯】好想交女友，但是認識不到女生怎麼辦？【瓦西瓦瓦 / Vaswawa】",date:"2024-04-10"},
      {id:"LT3RIw2UkKU",title:"【官方精華剪輯】要是人生可以重來，你會選擇再來一次嗎？【瓦西瓦瓦 / Vaswawa】",date:"2024-04-03"},
      {id:"40X9kBvXfDw",title:"你好，我們是MeloRella，我們沒有皮皮，我們現在欠BO一屁股卡債，還差OOOO元就能夠度過難關",date:"2024-03-29"},
      {id:"d2tPj3Izinc",title:"【MeloRella 新人 VTuber 聯動直播】🐰🎀終於來啦～～～我是BoSia！整個R.E.L.L.A 大家族齊聚一堂",date:"2024-03-20"},
      {id:"DaVpyOi5WyM",title:"【MeloRella × 預見娛樂聯動直播】新R.E.L.L.A團體首次齊聚一堂～～🌟",date:"2024-03-19"},
      {id:"pFSrGKS8itQ",title:"【官方精華剪輯】說出來你可能不相信，我其實也是一個蘭迪 | 瓦西瓦瓦",date:"2024-02-27"},
      {id:"0Srj3xEcxHo",title:"【官方精華剪輯】一位全身都會說話的VTuber【瓦西瓦瓦 / Vaswawa】",date:"2024-02-19"},
      {id:"eM-EJXTxgOQ",title:"【官方精華剪輯】我到底是不是人啊？【瓦西瓦瓦 / Vaswawa】",date:"2024-02-12"},
      {id:"05BhxvatBhs",title:"【官方精華剪輯】AI變成了廢墟老鼠！這個直播真的很搞笑【瓦西瓦瓦 / Vaswawa】",date:"2024-02-05"},
      {id:"lxKanTjCmI4",title:"【官方精華剪輯】瓦瓦教你BO怎麼把嘴巴乾坤大挪移【瓦西瓦瓦 / Vaswawa】",date:"2024-01-29"},
      {id:"VpBb--dO8IA",title:"【官方精華剪輯】瓦瓦的神經病獨白 | 瓦西瓦瓦 Vaswawa",date:"2024-01-22"},
      {id:"xdehGiPu_og",title:"【官方精華剪輯】這不是恐怖遊戲直播，這是心理諮詢直播【瓦西瓦瓦 / Vaswawa】",date:"2023-12-18"},
      {id:"tf-15LRLqOo",title:"【官方精華剪輯】瓦瓦開始亂講黑歷史，瓦瓦欠BO五千元【瓦西瓦瓦 / Vaswawa】",date:"2023-12-16"},
      {id:"mlU91UxFU_I",title:"【官方精華】瓦西瓦瓦開箱UNBOX | 瓦草的小惡魔天使真面目大公開",date:"2023-12-15"},
      {id:"E0OiFy05k5Y",title:"【瓦西瓦瓦｜官方精華】一位行走的唱歌迷因誕生了 ! !  現場教你用國小數學(?)原地長高!!",date:"2023-12-06"},
      {id:"sFlmSha7O04",title:"ㅍ_ㅍ (下) / 瓦西瓦瓦 Vaswawa",date:"2023-11-20"},
      {id:"5vyjoRe5-2c",title:"ㅍ_ㅍ (上) / 瓦西瓦瓦 Vaswawa",date:"2023-11-16"},
      {id:"ukILBS9CEl8",title:"《MeloNyx》魔競娛樂新人VTuber團體宣傳PV @SinnieAris @r1ri999 @WakasaIto @ekorru @ShurakuKiriko @EnominyaAndiCh",date:"2023-10-31"}
    ],
    shorts: [],
    originals_manual: [
      {id:"T5p8Unu-iIQ",title:"【星鳴 Resonance Of Stars】3D演出精華 愛情的騙子我問你 ft.二期生MeloNyx 瓦西瓦瓦  Vaswawa Cover 歌ってみた",date:"2026-06-08"},
      {id:"JrplUDEpkPY",title:"【ヨルシカ】千鳥 永德路在呼喚我【瓦西瓦瓦 / Vaswawa Cover 歌ってみた】",date:"2026-06-01"},
      {id:"CLo8Ud9YiT4",title:"【#劍紙三國】劍紙三國 | 遊戲主題曲【瓦西瓦瓦 / Vaswawa Cover 歌ってみた】",date:"2026-02-15"},
      {id:"4hoQdhpvrlE",title:"【アイナ・ジ・エンド】ダンダダン 革命道中 膽大黨 AiNA THE END【瓦西瓦瓦 / Vaswawa Cover 歌ってみた】",date:"2026-01-12"},
      {id:"_4GmpTnqZk4",title:"【BiSH】生日cover プロミスザスター Promise the Star【瓦西瓦瓦 / Vaswawa Cover 歌ってみた】",date:"2025-09-10"},
      {id:"_wlqGL3KLOY",title:"【タコピーの原罪】章魚P的原罪 Happy Lucky Chappy ano【瓦西瓦瓦 / Vaswawa Cover 歌ってみた】",date:"2025-07-03"},
      {id:"j5x3ogafVFs",title:"【給10年後的你】letter song ~十年後のあなたへ~【瓦西瓦瓦 / Vaswawa Cover】",date:"2025-06-04"},
      {id:"9K8H8k3KxX8",title:"【Ave Mujica】顔 瓦西瓦瓦 / Vaswawa Cover",date:"2025-05-26"},
      {id:"ElshG6IdeBs",title:"【みきとP】讓我們相互依偎下去吧 少女レイ ft. @SinnieAris  【瓦西瓦瓦 Vaswawa Cover 翻唱 歌ってみた】",date:"2025-04-14"},
      {id:"FJ1ATW-FHLw",title:"【翻唱】島爺 - 虫干 / 瓦西瓦瓦 Vaswawa Cover 歌ってみた",date:"2025-02-24"},
      {id:"LT2pQUP4DTA",title:"【翻唱】歪 / 瓦西瓦瓦 Vaswawa Cover 歌ってみた",date:"2025-02-10"},
      {id:"GAOAnRAhWC0",title:"【翻唱】打上花火 瓦西瓦瓦 Vaswawa Cover 歌ってみた",date:"2025-01-20"},
      {id:"rr2X5NGcwh4",title:"【翻唱】恋をしたのは 瓦西瓦瓦 Vaswawa Cover 歌ってみた",date:"2025-01-06"},
      {id:"VFSIqmI0vbo",title:"【翻唱】アイ - 瓦西瓦瓦 Vaswawa Cover 歌ってみた",date:"2024-12-23"},
      {id:"pS4V2jlb_E0",title:"【翻唱】ワタシ - 瓦西瓦瓦 Vaswawa Cover 歌ってみた",date:"2024-12-09"},
      {id:"W_l_ZDUHtH8",title:"【翻唱】タイトル未定 - 瓦西瓦瓦 Vaswawa Cover 歌ってみた",date:"2024-12-02"},
      {id:"T2qH5e4h63Q",title:"【翻唱】STAR LIGHT - 瓦西瓦瓦 Vaswawa Cover 歌ってみた",date:"2024-11-25"},
      {id:"lpRYYBzSTGo",title:"【翻唱】光 - 瓦西瓦瓦 Vaswawa Cover 歌ってみた",date:"2024-11-25"},
      {id:"ZcD5-rGcSrY",title:"【ヨルシカ】 又三郎【COVER 歌ってみた 瓦西瓦瓦 / Vaswawa】",date:"2024-11-18"},
      {id:"5j-ZPQK7yZU",title:"【六等星の夜】致每一個悲傷的夜晚裡，最重要的你們。【COVER aimer 歌ってみた 瓦西瓦瓦 / Vaswawa】",date:"2024-09-08"},
      {id:"5tbrCym8Dso",title:"【YOASOBI】夜に駆ける 瓦西瓦瓦 / Vaswawa Cover 歌ってみた",date:"2024-08-19"},
      {id:"7GUAYQ_23qQ",title:"【甲鉄城のカバネリ】ninelie - Aimer with chelly 瓦西瓦瓦 / Vaswawa Cover 一人で歌ってみた",date:"2024-07-01"},
      {id:"mpZm_tlBajM",title:"【翻唱】煌Kirali Liar謊癮 瓦西瓦瓦 / Vaswawa Cover 歌ってみた",date:"2024-03-18"},
      {id:"TVjcpfn_Xjo",title:"【情人節翻唱】コレサワ-たばこ / 瓦西瓦瓦 Vaswawa cover 歌ってみた",date:"2024-02-21"},
      {id:"siKuvLkpaWA",title:"【閩南語翻唱】珂拉琪-萬千花蕊慈母悲哀 / 瓦西瓦瓦 Vaswawa Cover 台灣話",date:"2024-01-17"},
      {id:"vKhiANfAy_c",title:"【Cover】愛在Ro雪季 日文版 Christmas in Love / 瓦西瓦瓦 Vaswawa 翻唱 歌ってみた",date:"2023-12-25"},
      {id:"f4meJV7I7ns",title:"【前進吧！！高捷少女】《START→DASH》瓦西瓦瓦 Vaswawa Cover 翻唱",date:"2023-12-20"},
      {id:"hQX4GvxW-9U",title:"【森森鈴蘭&瑪格麗特 · 諾爾絲】流星會降落在你心上  / 瓦西瓦瓦 Vaswawa Cover 翻唱",date:"2023-12-11"},
      {id:"t7lH48zHUYc",title:"【歌ってみた】Guiano - 月🌙Cover by 瓦西瓦瓦 / Vaswawa",date:"2023-11-27"},
      {id:"G3dTcxsrJN8",title:"【この素晴らしい世界に祝福を！】TOMORROW / 瓦西瓦瓦 Vaswawa 歌ってみた cover",date:"2023-11-19"},
      {id:"_u_XyYERdp0",title:"【星街すいせい】Stellar Stellar 瓦西瓦瓦 Vaswawa 歌ってみた #初投稿  #新人Vtuber",date:"2023-10-31"},
      {id:"Nc1s7Jbb9WY",title:"【1st.原創曲】Virtual Life 虛擬人生 DEMO Ver.【瓦西瓦瓦 / Vaswawa Original Song オリジナル】",date:"2025-10-24"}
    ],
    premiere: [],
    general: [],
    vlog: [],
    commerce: [],
    memberVideos: [],

    musicClipsChannelIds: [
      { id: "UCHrOyfkspzM82TjnaAoxJmQ", label: "松鴉Jayauspice", keywords: ["瓦西瓦瓦", "vaswawa"], typeKeywords: ["cover"] },
      { id: "UCRqjJ9jxXdvIGdwPrtp8O0w", label: "小恩",           keywords: ["瓦西瓦瓦", "Vaswawa", "瓦瓦", "MeloNyx"] },  // 歌回剪輯（全域音樂關鍵字自動分類）
    ],

    bgmVideoId: "Nc1s7Jbb9WY",           // 背景音樂影片 ID
    bgmStart:   0,                        // 開始秒數
    bgmLabel:   "Virtual Life 虛擬人生",  // 播放器顯示的歌名

    scheduleVideoId:  "DvskyppTq-0",
    spreadsheetLabel: "瓦瓦的大小事",
    scheduleTitle:    "瓦瓦的行程表",

    refSheets: [
      { version: "3D 版本",        url:  "images/瓦西瓦瓦 3D版本.jpg" },
      { version: "Ver 1.0",        url:  "images/瓦西瓦瓦 v1.0.png"   },
      { version: "Ver 2.0",        url:  "images/瓦西瓦瓦 v2.0.png"   },
      { version: "粉絲形象 瓦草",  urls: ["images/瓦西瓦瓦_瓦草.jpg", "images/瓦西瓦瓦_瓦草_1.jpg"] },
    ],

    // 小知識
    fanName: "瓦草",
    hashTags: [
      { label: "二創", tag: "#瓦畫了" },
      { label: "配信", tag: "#瓦開了" },
      { label: "一般", tag: "#瓦來了" },
      { label: "迷因", tag: "#吉瓦瓦"  },
    ],
    futureGoals: [
      "一場自己的LIVE",
      "出一首原創曲",
      "很多很多的翻唱",
      "演唱主題曲",
      "成為宇宙裡一顆閃亮的迷因",
    ],
    triviaLikes: [
      { label: "興趣",       items: ["唱歌", "做善事", "做壞事"] },
      { label: "喜歡的食物", items: ["茄子", "炸雞", "披薩", "薯條", "薯片", "可樂"] },
      { label: "喜歡的動漫畫", items: ["東京喰種", "惡魔人Crybaby", "神秘的數字"] },
    ],
    triviaHates: [
      { label: "討厭的動物", items: ["吉娃娃"] },
      { label: "害怕的東西", items: ["蚯蚓", "蠕蟲", "條狀物??"] },
    ],
    triviaExtra: [
      { label: "瓦瓦有多猛", icon: "💪", items: ["芋頭", "番茄", "茄子", "香菜", "夏威夷披薩", "南瓜", "芹菜", "皮蛋", "臭豆腐"] },
    ],

    songStatsGids: {
      "2026": "1100262502",
      "2025": "911579685",
      "2024": "583929937",
      "2023": "1124154412",
    },

    videoClipsChannelIds: [
      { id: "UCv9MXWx8AW5BZ07OPJyf7jg", label: "鬧欸",         keywords: ["MeloNyx"],                          excludeKeywords: ["酒樂霧子", "Shuraku", "歌回", "cover"] },
      { id: "UCpc15B6xb8OagNa7LScMOBg", label: "椪呱實驗室",   keywords: ["瓦西瓦瓦", "vaswawa", "瓦瓦"] },
      { id: "UC4nZ-KbmFr21Qt1lN9rmbdQ", label: "孫小毛",      keywords: ["瓦西瓦瓦", "Vaswawa", "瓦瓦", "MeloNyx"] },
      { id: "UCBdIlFj6vWDxU_m-PyM3aPQ", label: "bikaxu", keywords: ["瓦西瓦瓦", "Vaswawa", "瓦瓦", "MeloNyx"], excludeKeywords: ["cover", "歌ってみた"] },
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
      {id:"cxGwCl0fPY8",title:"✧『愛Dee』/cover by 希妮·亞里絲🤍SinnieAris✨ ft. @Arrynia",date:"2026-06-04"},
      {id:"a03jgfMCy60",title:"ᦠ 希妮·亞里絲 3D LIVE《Ad infinitum 剎那即永恆》ᦠ【Trailer】",date:"2026-04-25"},
      {id:"9CAR_x6aLTk",title:"✧ニホンノミカタ －ネバダカラキマシタ－/出演 by鷲和環&魁&涅爾菲&希哥·啞鈴斯💪Brother C🏋️‍♀️",date:"2026-04-01"},
      {id:"wiQk1dvwizs",title:"【#劍紙三國】《劍紙三國》遊戲主題曲 / cover by 希妮·亞里絲🤍SinnieAris✨",date:"2026-02-17"},
      {id:"fUThlbA1OhI",title:"✧ネバーフィクション / cover by 希妮·亞里絲🤍SinnieAris✨ ft. @NokoriCaKano",date:"2025-12-11"},
      {id:"PC7Fy4OKfA8",title:"【MeloNyx二周年紀念Cover】✧來試著相信永恆不變的愛吧✧  夜もすがら君想ふ cover by 希妮·亞里絲🤍SinnieAris✨ #MeloNyx",date:"2025-12-03"},
      {id:"wrGE8Z6TfcM",title:"✧ジェヘナ / cover by 希妮·亞里絲🤍SinnieAris✨",date:"2025-11-08"},
      {id:"FB1AXCF94Rs",title:"情人節什麼的……死ね！バレンタイン・デー cover by 希妮·亞里絲🤍SinnieAris✨ ft.@whalefallvtuber",date:"2025-08-29"},
      {id:"V5SObNXDUjo",title:"✧做了1000組提臀的後果✧きゅうくらりん/ いよわ cover by希妮·亞里絲🤍SinnieAris✨",date:"2025-07-05"},
      {id:"XNI1klmu62A",title:"✧主播加班加到極致的末路…可憐帕魯們的加班精華！！✧希妮·亞里絲🤍SinnieAris✨ #2025勞動節24H加班接力企劃",date:"2025-06-07"},
      {id:"4yNINOzEDa0",title:"✧女々しくて/出演 by 鷲和環&魅&涅爾妃&希哥·啞鈴斯💪Brother C🏋️‍♀️",date:"2025-03-31"},
      {id:"xT9OtmzaSjM",title:"✧モニタリング / cover by 希妮·亞里絲🤍SinnieAris✨",date:"2025-01-22"},
      {id:"Fk20rU19M8c",title:"✧ムーンライト / cover by 希妮·亞里絲🤍SinnieAris✨",date:"2024-12-11"},
      {id:"59BvxLxDUVo",title:"✧希妮·亞里絲官方精華✧大爆哭！！主播生日當天居然收到這種禮物？！？希妮·亞里絲🤍SinnieAris✨",date:"2024-11-23"},
      {id:"XbUZ93WQ_Zw",title:"✧プロポーズ / cover by 希妮·亞里絲🤍SinnieAris✨",date:"2024-11-08"},
      {id:"XObCWzIerNM",title:"✧沙威瑪傳奇中文主題曲 cover by 希妮·亞里絲🤍SinnieAris✨",date:"2024-10-31"},
      {id:"Bs2yLCQnPdc",title:"✧ビビデバ / cover by 希妮·亞里絲🤍SinnieAris✨",date:"2024-10-10"},
      {id:"3kIqR-5SoQs",title:"✧希妮·亞里絲官方精華✧UNO，一款增進友情的遊戲。希妮·亞里絲🤍SinnieAris✨",date:"2024-06-24"},
      {id:"5PGXTImBaYY",title:"✧希妮·亞里絲官方精華✧讓我來告訴你什麼希宇宙！希妮·亞里絲🤍SinnieAris✨",date:"2024-06-21"},
      {id:"C_xGd5vLPUg",title:"✧希妮·亞里絲官方精華✧什麼？！辣個傳說中的男人居然真實存在...？！？！希妮·亞里絲🤍SinnieAris✨",date:"2024-06-19"},
      {id:"-qaSpGjEIjk",title:"✧希妮·亞里絲官方精華✧讓人沉倫的絕世佳人！希妮·亞里絲🤍SinnieAris✨",date:"2024-04-28"},
      {id:"5NWOV2MTddE",title:"✧希妮·亞里絲官方精華✧歌勢翻車的事能說是翻車麼？！？！希妮·亞里絲🤍SinnieAris✨",date:"2024-04-21"},
      {id:"Npsmw-1om-4",title:"✧希妮·亞里絲官方精華✧一切都是為了人妻！大家快來幫我打氣！！希妮·亞里絲🤍SinnieAris✨",date:"2024-03-10"},
      {id:"o3LxAw6XXZQ",title:"✧官方初配信精華✧6分鐘快速入門超級睿智學！！希妮·亞里絲🤍SinnieAris✨",date:"2023-12-15"},
      {id:"J_CbTkqdF0E",title:"✧78.88億人都震驚了！這首歌居然這麼好哭！✧希妮·亞里絲🤍SinnieAris✨",date:"2023-12-06"},
      {id:"p0e_9G_24CI",title:"✧独りんぼエンヴィー / cover by 希妮·亞里絲🤍SinnieAris✨",date:"2023-11-28"},
      {id:"PIIxw5XwdNg",title:"【歌ってみた】Guiano - 風🌀希妮·亞里絲 / SinnieAris",date:"2023-11-26"},
      {id:"cyiD0E-WZeA",title:"✧ダーリン / cover by 希妮·亞里絲🤍SinnieAris✨",date:"2023-11-02"}
    ],
    shorts: [],
    originals_manual: [],
    premiere: [],
    general: [],
    vlog: [],
    commerce: [],
    memberVideos: [],

    scheduleVideoId:  "vDoOnUBiuW4",
    spreadsheetLabel: "希希的大小事",
    scheduleTitle:    "希希的行程表",

    refSheets: [
      { version: "Ver 1.0",  url: "images/希妮亞里絲 v1.0.png"   },
      { version: "Ver 2.0",  url: "images/希妮亞里絲 v2.0.png"   },
      { version: "3D 版本",  url: "images/希妮亞里絲 3D版本.jpg" },
    ],

    // 小知識
    fanName: "紙箱幫",
    hashTags: [
      { label: "Live",   tag: "#SinnieLive" },
      { label: "FanArt", tag: "#SinnieArt"  },
      { label: "Meme",   tag: "#希錯東西"   },
    ],
    futureGoals: [
      "112000000 訂閱",
      "唱很多喜歡的歌",
      "有很多聽眾",
      "出原創曲",
      "開演唱會",
      "把欠魔競的錢還光",
      "住進信義區豪宅！！！！",
    ],
    triviaLikes: [
      { label: "喜歡的食物",   items: ["茄子"] },
      { label: "擅長的事",     items: ["唱歌", "畫畫", "可愛", "運用無敵的大腦"] },
      { label: "喜歡的東西",   items: ["烤肉", "火鍋", "公園", "豪宅"] },
      { label: "喜歡的音樂",   items: ["VOCALOID", "JPOP"] },
      { label: "喜歡的創作者", items: ["koyori", "みきと", "YOASOBI", "藤井風"] },
      { label: "喜歡的ACG",    items: ["JOJO", "假面騎士", "賽馬娘", "馬力歐賽車8"] },
      { label: "喜歡的吉祥物", items: ["Rilakkuma拉拉熊的茶小熊"] },
    ],
    triviaHates: [
      { label: "不擅長的事",   items: ["數學"] },
      { label: "不喜歡的東西", items: ["難吃的食物", "世界上所有爬蟲兩棲類"] },
    ],

    songStatsGids: {
      "2026": "217431303",
      "2025": "2006517096",
      "2024": "2112021027",
      "2023": "816298850",
    },

    musicClipsChannelIds: [
      { id: "UCkdXbWulRmheqfVmV7WjaFQ", label: "台灣香蕉王", keywords: ["希妮·亞里絲", "SinnieAris"] },
    ],

    videoClipsChannelIds: [
      { id: "UCv9MXWx8AW5BZ07OPJyf7jg", label: "鬧欸", keywords: ["MeloNyx"], excludeKeywords: ["酒樂霧子", "Shuraku", "歌回", "cover"] },
      { id: "UC4nZ-KbmFr21Qt1lN9rmbdQ", label: "孫小毛",      keywords: ["希妮亞里絲", "SinnieAris", "希希", "MeloNyx"] },
      { id: "UCBdIlFj6vWDxU_m-PyM3aPQ", label: "bikaxu", keywords: ["希妮亞里絲", "SinnieAris", "希希", "MeloNyx"], excludeKeywords: ["cover", "歌ってみた"] },
    ],

    color: "#FCE8A4"   // 希妮亞里絲 代表色（奶油黃）
  },

  {
    id: "ririna",
    name: "結月莉莉奈",
    nameEn: "Ririna",
    group: "預見娛樂",
    generation: "二期生",
    avatar: "https://pbs.twimg.com/profile_images/2039763954331951104/OlHLWeDM_400x400.jpg",
    coverImage: "https://pbs.twimg.com/profile_banners/1675184947248926720/1761589480/1500x500",
    bgmVideoId: "o_8vsVg2z9s",
    bgmLabel:   "未眠",
    tagline: "",
    taglines: [
      { context: "", text: "HOYO" },
      { context: "", text: "白癡ㄛ" },
      { context: "", text: "哪有" },
      { context: "", text: "你們今天過得好嗎" },
      { context: "", text: "我去拿個外送，等我回來" },
    ],
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
      {id:"RTbFm_V7JAo",title:"【愚人節COVER】草莓味/桂香GuiXiang 甜自己一把、放自己一馬🤘｜結月莉莉奈Yuzukiririna",date:"2026-04-01"},
      {id:"C4NfTAD_nOY",title:"【明日方舟：終末地】WE ARE EMPIRE/STARSET｜結月莉莉奈Yuzukiririna",date:"2026-02-08"},
      {id:"v-tP4oF6n20",title:"【二周年紀念cover】Dadi/KIRE ft. Vera Chai｜結月莉莉奈Yuzukiririna ft. @煌Kirali",date:"2025-12-13"},
      {id:"gxlLZ8VUwTg",title:"【福利歌曲串燒】威風堂々/老公天下第一/要愛愛｜結月莉莉奈Yuzukiririna",date:"2025-08-16"},
      {id:"o_8vsVg2z9s",title:"【Original原創曲】未眠｜結月莉莉奈YuzukiRirina",date:"2025-03-28"},
      {id:"layFgIuT_FU",title:"破防歌/計畫通行-Cover｜結月莉莉奈Yuzukiririna Ft.薇恩黛娜 @venomdinah_StarryBlock、諾櫻 @ReLiveNoe",date:"2025-03-21"},
      {id:"LGPI3qrJDK0",title:"雨夜之緣/原創音聲｜結月莉莉奈Yuzukiririna",date:"2025-03-14"},
      {id:"evQ47taQJrE",title:"んっあっあっ。/ SLAVE.V-V-R｜結月莉莉奈Yuzukiririna",date:"2025-02-14"},
      {id:"NTaQxI6f5H4",title:"半醒 / ChiliChill - Cover｜結月莉莉奈Yuzukiririna",date:"2024-12-14"},
      {id:"PnZEySCZW7c",title:"【官方精華】我們找了這麼久...你竟然叫他烈焰ㄐㄐ??? #麥塊精華 #爆言注意 #ft超多人所以沒標",date:"2024-11-16"},
      {id:"wWIApyIoTpQ",title:"【誕生日紀念商品】眠眠細語CD吊飾試聽版🎀 ｜結月莉莉奈Ririna",date:"2024-03-28"},
      {id:"OWdceU_uuPc",title:"【結月莉莉奈｜官方精華】好奇怪...怎麼會...這麼暈?!",date:"2023-12-20"},
      {id:"R4I9cAHYNg8",title:"《桜時》戀愛養成遊戲START ▶ ♥♡♡♡♡",date:"2023-12-12"},
      {id:"6HS92yAUjoc",title:"好きだから。 - ユイカ / 結月莉莉奈【歌ってみた】",date:"2023-12-01"},
      {id:"uqpY1-3C4is",title:"什麼?! 太過分惹QQ",date:"2023-12-05"},
      {id:"kYkG75Mjbi8",title:"哄女友的萬能公式",date:"2023-11-27"},
      {id:"0JyY0Pbsbsw",title:"噓...這是秘密唷...(ᐢ⸝⸝˙Ⱉ˙⸝⸝)－結月莉莉奈 Ririna🎀",date:"2023-11-14"},
      {id:"TrKOXO9OFDQ",title:"🎤白月光與硃砂痣-大籽｜結月莉莉奈🎀Ririna cover.",date:"2023-11-03"}
    ],
    shorts: [],
    originals_manual: [],
    premiere: [],
    general: [],
    vlog: [],
    commerce: [],
    memberVideos: [],

    // 剪輯頻道（動態抓取，參考詩雨蔻達版本）
    // ── 熱門音樂剪輯（歌回 / 唱歌）──────────────────
    musicClipsChannelIds: [
      { id: "UCShwcxuYAe6SYCaLNIAr-rg", label: "darkshine bear",                                                      typeKeywords: ["cover", "歌回", "歌切", "清唱"] },
      { id: "UCQXIlyKiz39A2IAxYJOCXkw", label: "LoveRirina",   keywords: ["結月莉莉奈", "ririna", "奈奈", "MeloNyx"],            typeKeywords: ["歌回", "唱歌", "cover"] },
      { id: "UCkdXbWulRmheqfVmV7WjaFQ", label: "台灣香蕉王",   keywords: ["結月莉莉奈", "Ririna"] },
      { id: "UCEGbez6s8Y8P_5julxNh7jA", label: "Ariel 月",   keywords: ["結月莉莉奈", "ririna", "奈奈"], typeKeywords: ["cover", "歌ってみた"] },
    ],

    // ── 熱門影片精華（遊玩實況 / RP 系列）──────────
    videoClipsChannelIds: [
      { id: "UCShwcxuYAe6SYCaLNIAr-rg", label: "darkshine bear",                                                      keywords: ["結月莉莉奈", "ririna", "奈奈", "MeloNyx"], excludeKeywords: ["cover", "歌回", "歌切", "清唱"] },  // 全頻道皆結月莉莉奈內容
      { id: "UCQXIlyKiz39A2IAxYJOCXkw", label: "LoveRirina",   keywords: ["結月莉莉奈", "ririna", "奈奈", "MeloNyx"],            excludeKeywords: ["歌回", "唱歌", "cover"] },  // 非歌回片段
      { id: "UCv9MXWx8AW5BZ07OPJyf7jg", label: "鬧欸",         keywords: ["MeloNyx"],                                 excludeKeywords: ["酒樂霧子", "Shuraku", "歌回", "cover"] },
      { id: "UC4nZ-KbmFr21Qt1lN9rmbdQ", label: "孫小毛",     keywords: ["結月莉莉奈", "ririna", "奈奈", "MeloNyx"] },
      { id: "UCBdIlFj6vWDxU_m-PyM3aPQ", label: "bikaxu", keywords: ["結月莉莉奈", "ririna", "奈奈", "MeloNyx"], excludeKeywords: ["cover", "歌ってみた"] },
      { id: "UCEGbez6s8Y8P_5julxNh7jA", label: "Ariel 月",   keywords: ["結月莉莉奈", "ririna", "奈奈"], excludeKeywords: ["cover", "歌ってみた"] },
    ],

    scheduleVideoId:  "ZgrFrLOQwwo",
    spreadsheetLabel: "奈奈的大小事",
    scheduleTitle:    "奈奈的行程表",

    refSheets: [
      { version: "Ver 1.0", url: "images/結月莉莉奈 v1.0.png" },
      { version: "Ver 2.0", url: "images/結月莉莉奈 v2.0.png" },
    ],

    // 小知識
    fanName: "眠花",
    hashTags: [
      { label: "All",    tag: "#莉莉估奈" },
      { label: "FanArt", tag: "#來張莉繪" },
      { label: "Live",   tag: "#純奈日常" },
    ],
    triviaLikes: [
      { label: "擅長的東西", items: ["哄睡", "做夢", "占卜"] },
      { label: "喜歡的東西", items: ["火鍋", "奶茶", "下雨天", "數字9", "粉色", "睡覺", "毛茸茸的東西"] },
    ],
    triviaHates: [
      { label: "不擅長的東西", items: ["算數", "3C", "路癡"] },
      { label: "討厭的東西",   items: ["蝸牛", "地震", "巨響"] },
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
      {id:"DO0YEDmcC54",title:"✧米津玄師 - Flamingo  歌ってみた / Cover by Commander. R & Brother. C✧",date:"2026-04-05"},
      {id:"Kv58XINzc98",title:"【歌ってみた】真夜中のドア〜stay with me  - 松原みき  / Cover by 依可露",date:"2025-12-18"},
      {id:"twGEF-W4z4w",title:"【COVER？】貪吃可愛大松鼠💜 | 陽光開朗大男孩【依可露】",date:"2024-03-17"},
      {id:"ejbeUrYLwRI",title:"【COVER？】電電啦！蘿莉神鎮魂曲☆ | 粛聖!! ロリ神レクイエム☆【依可露】",date:"2024-01-11"},
      {id:"4hvY1WsZj0w",title:"【Ado】ウタカタララバイ（ウタ from ONE PIECE FILM RED） / Cover by 依可露【歌ってみた】",date:"2023-12-03"},
      {id:"EMCpNgK2sfU",title:"【歌ってみた】Guiano - 鳥🐦Cover by 依可露",date:"2023-11-25"},
      {id:"OmveEARd8-A",title:"「サカサカバンバンバスピスピス」Mandarin Cover【依可露】",date:"2023-11-12"},
      {id:"mRbIHnRrJh4",title:"【歌ってみた】Lemon - 米津玄師 Kenshi Yonezu  / Cover by 依可露",date:"2023-11-04"},
      {id:"e5zKFKb9WZE",title:"【雜談】沖繩行聊聊聊！！！【依可露】#vtuber",date:"2026-03-12"},
      {id:"glKLwXCiVO4",title:"【依可露】【0220】鬼島RP 1.5 下戲後同樂會 PART.2　#鬼島RP",date:"2025-04-02"},
      {id:"owpA2vvscug",title:"【依可露】【0219】鬼島RP 1.5 下戲後同樂會 PART.1　#鬼島RP",date:"2025-04-01"},
      {id:"7UycCdJNfOo",title:"【依可露】【0221】鬼島RP 1.5 小鳥游薰 DAY2　#鬼島RP",date:"2025-03-31"},
      {id:"UE0ME52Hytw",title:"【依可露】【0219】鬼島RP 1.5 小鳥游薰 DAY1　#鬼島RP",date:"2025-03-30"},
      {id:"DsnOofO4DIw",title:"【依可露】【0219】鬼島RP 1.5 塔詩可露 DAY32　#鬼島RP",date:"2025-03-29"},
      {id:"PxJwSSGnIhA",title:"【依可露】【0218】鬼島RP 1.5 塔詩可露 DAY31　#鬼島RP",date:"2025-03-28"},
      {id:"McIYx5AoUCc",title:"【依可露】【0217】鬼島RP 1.5 塔詩可露 DAY30　#鬼島RP",date:"2025-03-27"},
      {id:"_KKvm6VkdoA",title:"【依可露】【0216】鬼島RP 1.5 塔詩可露 DAY29　#鬼島RP",date:"2025-03-26"},
      {id:"PA3ljxU9jps",title:"【依可露】【0215】鬼島RP 1.5 塔詩可露 DAY28　#鬼島RP",date:"2025-03-25"},
      {id:"IutYrrweNaY",title:"【依可露】【0214】鬼島RP 1.5 塔詩可露 DAY27　#鬼島RP",date:"2025-03-24"},
      {id:"wllRnX3o3AY",title:"【依可露】【0214】鬼島RP 1.5 小鳥游薰 DAY0　#鬼島RP",date:"2025-03-23"},
      {id:"a-KhoWFySbs",title:"【依可露】【0213】鬼島RP 1.5 塔詩可露 DAY26　#鬼島RP",date:"2025-03-22"},
      {id:"3GbS01SfLw0",title:"【依可露】【0212】鬼島RP 1.5 塔詩可露 DAY25　#鬼島RP",date:"2025-03-21"},
      {id:"yO3cGprfRHE",title:"【依可露】【0210】鬼島RP 1.5 塔詩可露 DAY24　#鬼島RP",date:"2025-03-20"},
      {id:"SP1T9MtLUSQ",title:"【依可露】【0209】鬼島RP 1.5 塔詩可露 DAY23　#鬼島RP",date:"2025-03-19"},
      {id:"FOm8pm3seA4",title:"【依可露】【0208】鬼島RP 1.5 塔詩可露 DAY22　#鬼島RP",date:"2025-03-18"},
      {id:"ntahY2Tz3AM",title:"【依可露】【0207】鬼島RP 1.5 塔詩可露 DAY21　#鬼島RP",date:"2025-03-17"},
      {id:"ZAGSykd_fvg",title:"【依可露】【0206】鬼島RP 1.5 塔詩可露 DAY20　#鬼島RP",date:"2025-03-16"},
      {id:"Ufom4nEkUTM",title:"【依可露】【0205】鬼島RP 1.5 塔詩可露 DAY19　#鬼島RP",date:"2025-03-15"},
      {id:"0wmIh69re6M",title:"【依可露】【0204】鬼島RP 1.5 塔詩可露 DAY18　#鬼島RP",date:"2025-03-14"},
      {id:"GQ-uJwd7O6w",title:"【依可露】【0203】鬼島RP 1.5 塔詩可露 DAY17　#鬼島RP",date:"2025-03-13"},
      {id:"J8XsROlKkgM",title:"【依可露】【0126】鬼島RP 1.5 塔詩可露 DAY16　#鬼島RP",date:"2025-03-12"},
      {id:"bCKSDuzL4p4",title:"【依可露】【0125】鬼島RP 1.5 塔詩可露 DAY15　#鬼島RP",date:"2025-03-11"},
      {id:"2J6QlKXEiwY",title:"【依可露】【0124】鬼島RP 1.5 塔詩可露 DAY14　#鬼島RP",date:"2025-03-10"},
      {id:"GIykVZ1Xwms",title:"【依可露】【0123】鬼島RP 1.5 塔詩可露 DAY13　#鬼島RP",date:"2025-03-09"},
      {id:"Vm_u_G8JrTg",title:"【依可露】【0122】鬼島RP 1.5 塔詩可露 DAY12　#鬼島RP",date:"2025-03-08"},
      {id:"cA75naFU9Fw",title:"【依可露】【0121】鬼島RP 1.5 塔詩可露 DAY11　#鬼島RP",date:"2025-03-07"},
      {id:"WvpJdiw9mSg",title:"【依可露】【0120】鬼島RP 1.5 塔詩可露 DAY10　#鬼島RP",date:"2025-03-06"},
      {id:"U9BRGA9KkVg",title:"【依可露】【0119】鬼島RP 1.5 塔詩可露 DAY9　#鬼島RP",date:"2025-03-05"},
      {id:"nv__aQFGirM",title:"【依可露】【0118】鬼島RP 1.5 塔詩可露 DAY8　#鬼島RP",date:"2025-03-04"},
      {id:"G5PotvLDKVM",title:"【依可露】【0117】鬼島RP 1.5 塔詩可露 DAY7　#鬼島RP",date:"2025-03-02"},
      {id:"0eFoHFWTbHk",title:"【依可露】【0116】鬼島RP 1.5 塔詩可露 DAY6　#鬼島RP",date:"2025-03-01"},
      {id:"V2rKX4IX_gs",title:"【依可露】【0115】鬼島RP 1.5 塔詩可露 DAY5　#鬼島RP",date:"2025-02-27"},
      {id:"uCFKbeICJRI",title:"【依可露】【0114】鬼島RP 1.5 塔詩可露 DAY4　#鬼島RP",date:"2025-02-26"},
      {id:"52waHMbQyVA",title:"【依可露】【0113】鬼島RP 1.5 塔詩可露 DAY3　#鬼島RP",date:"2025-02-25"},
      {id:"zLtwCEnHx1M",title:"【依可露】【0112】鬼島RP 1.5 塔詩可露 DAY2　#鬼島RP",date:"2025-02-23"},
      {id:"eqK0jntqi3Q",title:"【依可露】【0111】鬼島RP 1.5 塔詩可露 DAY1　#鬼島RP",date:"2025-02-22"},
      {id:"rAxwTyPH7MU",title:"【依可露】「讀詩謎」解答在資訊欄",date:"2025-02-22"},
      {id:"5Uq3W-pJWfc",title:"【依可露精華】廢棄之城RP 蛋九露 EP3 | 逐漸靠近卻逐漸遙遠 薰跡淡 九月 柯以露 ft. 蛋蛋耶 玖宵 #廢棄之城 #abdcityrp #gtav",date:"2024-11-04"},
      {id:"rxEDRpnos1c",title:"【依可露精華】廢棄之城RP 蛋九露 EP2 | 末日中的爭執與真心 薰跡淡 九月 柯以露 ft. 蛋蛋耶 玖宵 #廢棄之城 #abdcityrp #gtav",date:"2024-06-09"},
      {id:"1hcdmx1SBP8",title:"【依可露精華】廢棄之城RP 蛋九露 EP1 | 開始逐漸失衡的關係 薰跡淡 九月 柯以露 ft. 蛋蛋耶  玖宵  #廢棄之城 #abdcityrp #gtav",date:"2024-04-29"},
      {id:"mJJi00WWGAg",title:"【依可露精華】廢棄之城RP | 末日的交易方式 Ft. 八毛.小六 @Bamowmow @wildboy0611  #廢棄之城 #abdcityrp #gtav",date:"2024-04-17"},
      {id:"hbx6Zuuwxz4",title:"【依可露精華】廢棄之城RP 蛋露 EP3 | 薰跡淡的長大宣言 薰跡淡 柯以露 ft. 蛋蛋耶 @DanDan0115  #廢棄之城 #abdcityrp #gtav",date:"2024-04-12"},
      {id:"ySqzQXd-AkY",title:"【依可露精華】廢棄之城RP  |  白色情人節的正確操作方式 FT.很多人   #廢棄之城 #abdcityrp #gtav",date:"2024-04-06"},
      {id:"llpO8kkt_nw",title:"【依可露精華】廢棄之城RP 蛋露 EP2 |  信任的破碎跟建立？ 薰跡淡 柯以露 ft. 蛋蛋耶 @DanDan0115   #廢棄之城 #abdcityrp #gtav",date:"2024-04-05"},
      {id:"uWigNgVZo3M",title:"【依可露精華】廢棄之城RP 蛋露 EP1 |  一切事情的開端 薰跡淡 柯以露 ft. 蛋蛋耶@DanDan0115  #廢棄之城 #abdcityrp #gtav",date:"2024-03-18"},
      {id:"j2kyVQXgKIY",title:"【縱型歌回】早安露戰隊💜晨練的時候到囉🐿️【依可露】1/6直播留檔",date:"2024-01-07"},
      {id:"0zyvKC-Q0ME",title:"【依可露｜官方精華】宣示忠誠的時刻到來了！加入騎士團最大的福利就是…♥",date:"2023-12-26"},
      {id:"qidoOEf2OC0",title:"【Merry Christmas】padoru padoru 【依可露】",date:"2023-12-10"},
      {id:"AGKs2Bm8ibA",title:"褲子裡有松鼠 Feat.芋圓🐿️【依可露】",date:"2023-11-17"},
      {id:"AmgDwAa5AqM",title:"【自我介紹？】我是松鼠🐿️【依可露】",date:"2023-11-08"}
    ],
    shorts: [],
    originals_manual: [],
    premiere: [],
    general: [],
    vlog: [],
    commerce: [],
    memberVideos: [],

    // 小知識
    fanName: "露戰隊",
    hashTags: [
      { label: "Art",          tag: "#korruart"   },
      { label: "Live相關感想", tag: "#korrulive"  },
      { label: "Meme",         tag: "#korrumeme"  },
      { label: "R18",          tag: "#korruR18"   },
      { label: "各種想要可露看的東西", tag: "#報告團長" },
    ],
    futureGoals: [
      "壯大騎士團",
      "國際化騎士團",
      "跟品牌聯名",
      "3DLIVE",
      "征服世界",
    ],
    triviaLikes: [
      { label: "興趣",         items: ["漫畫", "動漫", "畫圖", "唱歌", "遊戲", "看書", "喝酒", "吃美食"] },
      { label: "喜歡的食物",   items: ["茄子", "壽司", "拉麵", "鐵板麵(一定要鐵板炒的)+蛋", "牛奶", "豆漿", "甜口的酒", "地瓜粉雞排", "鹹酥雞"] },
      { label: "喜歡的遊戲",   items: ["有劇情的", "RPG", "合作(Among Us)", "解謎(逆轉裁判)", "恐怖遊戲"] },
      { label: "喜歡的ACG",    items: ["推しの子", "葬送的芙莉蓮", "無職轉生～到了異世界就拿出真本事～", "關於我轉生變成史萊姆這檔事", "網購技能開啟異世界美食之旅"] },
      { label: "喜歡的韓漫",   items: ["皇宮", "重生", "追妻", "戀", "成為公主", "冷世界", "全知"] },
      { label: "喜歡的劇",     items: ["法醫女王", "legalhigh", "校對女王", "深夜食堂", "三星營養午餐", "黑暗榮耀", "非常律師", "韓古裝劇", "怪奇物語", "CSI"] },
    ],
    triviaHates: [
      { label: "不喜歡的食物", items: ["番茄炒蛋", "苦的", "酸的", "烈酒", "啤酒"] },
      { label: "不喜歡的事情", items: ["運動", "討厭流汗", "去人多的地方", "浪費錢"] },
    ],


    // ── 熱門音樂剪輯（歌回 / 唱歌）──────────────────
    musicClipsChannelIds: [
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

    // ── 熱門影片精華──────────────────────────────────
    videoClipsChannelIds: [
      { id: "UCv9MXWx8AW5BZ07OPJyf7jg", label: "鬧欸", keywords: ["依可露", "Ekorru", "團長", "可露", "MeloNyx"], excludeKeywords: ["酒樂霧子", "Shuraku", "歌回", "cover"] },
      { id: "UCBdIlFj6vWDxU_m-PyM3aPQ", label: "bikaxu", keywords: ["依可露", "Ekorru", "團長", "可露", "MeloNyx"], excludeKeywords: ["cover", "歌ってみた"] },
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
    tags: ["台灣", "預見娛樂", "二期生", "MeloNyx", "兔子", "歌勢", "PON", "氣質(?)"],

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
      {id:"neVTNTFQLNg",title:"【歌ってみた】Ayase - シネマ｜1.5周年紀念Cover✨Cover by 若櫻依兔 WakasaIto & 涅爾菲Nyrfier",date:"2025-06-21"},
      {id:"6lvVQTjVnns",title:"【歌ってみた】Aimer - LAST STARDUST｜一周年紀念Cover🌸Cover by 若櫻依兔 WakasaIto",date:"2024-12-21"},
      {id:"xm1jI5ntbDY",title:"初配信精華🌸咦!?忘記開MIC!我BGM呢!!",date:"2024-01-03"},
      {id:"HIkd72idfdE",title:"【歌ってみた】Myuk - 愛の唄🌸Cover by 若櫻依兔",date:"2023-12-09"},
      {id:"8W5qQ3uj-6w",title:"【歌ってみた】Guiano - 花🌸Cover by 若櫻依兔",date:"2023-11-24"},
      {id:"wphrykVkR2Y",title:"【歌ってみた】Aimer - カタオモイ🌸Cover by 若櫻依兔",date:"2023-11-05"}
    ],
    shorts: [],
    originals_manual: [],
    premiere: [],
    general: [],
    vlog: [],
    commerce: [],
    memberVideos: [],

    // 小知識
    fanName: "櫻花糬",
    hashTags: [
      { label: "日常TAG",     tag: "#依起分享" },
      { label: "二創TAG",     tag: "#依起畫畫" },
      { label: "實況&剪輯TAG", tag: "#依起玩"   },
    ],
    triviaLikes: [
      { label: "最愛",       items: ["凪誠士郎"] },
      { label: "專長",       items: ["唱歌", "用媽媽的洗髮精調製煉金藥水", "蓋基地台"] },
      { label: "喜歡的食物", items: ["拉麵", "泰式料理", "川菜", "日式料理", "鬆餅", "櫻花糬", "北極熊"] },
      { label: "愛好",       items: ["喜歡穿裙子(不穿褲子)", "關押黑兔"] },
      { label: "喜歡的ACG",  items: ["魔法少女奈葉", "死神"] },
      { label: "喜歡的音樂", items: ["BBGGMM", "聽海"] },
      { label: "男神偶像",   items: ["吉沢 亮"] },
      { label: "被動技能",   items: ["爆言之力（50%機率爆言）", "海王之力(認識的人80%會被兔兔認為是寶、老婆、老公)"] },
    ],
    triviaHates: [
      { label: "不喜歡的東西", items: ["數學", "鬼怪", "血腥", "恐怖"] },
    ],


    scheduleVideoId:  "5Sn6bnUbeus",
    spreadsheetLabel: "氣質兔兔的大小事",
    scheduleTitle:    "氣質兔兔的行程表",

    refSheets: [
      { version: "Ver 1.0",        url: "images/若櫻依兔 v1.0.png"     },
      { version: "粉絲形象 芝麻糬", url: "images/若櫻依兔_芝麻糬.jpg" },
      { version: "粉絲形象 櫻花糬", url: "images/若櫻依兔_櫻花糬.jpg" },
    ],

    songStatsGids: {
      "2026": "65989690",
      "2025": "1785641721",
      "2024": "653942800",
      "2023": "64486410",
    },

    musicClipsChannelIds: [
      { id: "UCpc15B6xb8OagNa7LScMOBg", label: "椪呱實驗室", keywords: ["若櫻依兔", "WakasaIto", "兔兔", "MeloNyx"], typeKeywords: ["cover", "guitar"] },
    ],

    videoClipsChannelIds: [
      { id: "UCv9MXWx8AW5BZ07OPJyf7jg", label: "鬧欸", keywords: ["若櫻依兔", "WakasaIto", "兔兔", "MeloNyx"], excludeKeywords: ["酒樂霧子", "Shuraku", "歌回", "cover"] },
      { id: "UCBdIlFj6vWDxU_m-PyM3aPQ", label: "bikaxu", keywords: ["若櫻依兔", "WakasaIto", "兔兔", "MeloNyx"], excludeKeywords: ["cover", "歌ってみた"] },
    ],

    color: "#AED4E9"   // 若櫻依兔 代表色（霧藍）
  },

  {
    id: "whalefall",
    name: "鯨諾",
    nameEn: "Whalefall",
    group: "預見娛樂",
    generation: "三期生",
    avatar: "https://pbs.twimg.com/profile_images/2064075801516228608/H0vDY5uC_400x400.jpg",
    coverImage: "https://pbs.twimg.com/profile_banners/1768216252001198080/1710825714/1500x500",
    bgmVideoId: "ULhzSR_wZ3I",
    bgmLabel:   "鯨落",
    tagline: "",
    taglines: [
      { context: "", text: "「聲音為你寫信，天空為你傾聽，我是來自海洋的聲音代筆鯨諾。」" },
      { context: "", text: "「我是你的聲音代筆鯨諾，大家拜拜。」" },
      { context: "", text: "「我很抱歉，但我不會改。」" },
    ],
    description: "來自海洋的聲音代筆\n與音樂和文字結下不解之緣，使用聲音為人寫信。\n是浪漫的諧星及滑稽的藝術家。\n擅長自彈自唱、寫作與編曲，\n電波系、也喜歡諧音梗，在溫柔與搞笑間自由切換。",
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
      {id:"QoI7Dps65ZY",title:"【Alluria 兩週年紀念】Binary Vampire /RE:VALE covered by Alluria |",date:"2026-05-10"},
      {id:"gWYj7Y_b6b4",title:"【cover】旋律と結晶- TENBLANK  | 🌙鯨諾whalefall🐋 | #whalefall #鯨諾",date:"2025-09-19"},
      {id:"QSeCdKTh2Q8",title:"【COVER】PRETENDER | 🌙鯨諾whalefall🐋 | #whalefall #鯨諾",date:"2024-04-19"},
      {id:"I4wMbqNgUM0",title:"【中文填詞】【COVER】推遲償還　モラトリアム | 🌙鯨諾whalefall🐋 | #whalefall #鯨諾",date:"2024-04-02"},
    ],
    shorts: [
      {id:"4UE3eVYRGrM",title:"【2026元宵詩謎】元宵詩謎之九 | 🌙鯨諾whalefall🐋 | #whalefall #鯨諾",date:"2026-03-02"},
      {id:"Nwn1HKyq1Z0",title:"【2026元宵詩謎】元宵詩謎之八 | 🌙鯨諾whalefall🐋 | #whalefall #鯨諾",date:"2026-03-01"},
      {id:"CE6BoWYkegw",title:"【2026元宵詩謎】元宵詩謎之六 | 🌙鯨諾whalefall🐋 | #whalefall #鯨諾",date:"2026-02-27"},
      {id:"vCOsBos2Ruc",title:"【2026元宵詩謎】元宵詩謎之五 | 🌙鯨諾whalefall🐋 | #whalefall #鯨諾",date:"2026-02-26"},
      {id:"6yQF5Ghl6yk",title:"【2026元宵詩謎】元宵詩謎之四 | 🌙鯨諾whalefall🐋 | #whalefall #鯨諾",date:"2026-02-25"},
      {id:"38l_1UuJhWs",title:"【2026元宵企劃】元宵詩謎之二 | 🌙鯨諾whalefall🐋 | #whalefall #鯨諾",date:"2026-02-23"},
      {id:"5kBpNzEHgjM",title:"【2026元宵企劃】元宵詩謎之一 | 🌙鯨諾whalefall🐋 | #whalefall #鯨諾",date:"2026-02-22"},
      {id:"wPIospFGtiE",title:"【預告】鯨諾宇宙公關店 | 🌙鯨諾whalefall🐋 | #whalefall #鯨諾",date:"2025-11-09"},
      {id:"nkXGcZgc0dU",title:"【Alluria】魔競娛樂首批VTuber男團宣傳Teaser｜@Kai_Alluria @Nyrfier @MukuruCh @shiro_leon",date:"2024-03-29"},
    ],
    originals_manual: [
      {id:"ULhzSR_wZ3I",title:"【Original】鯨落 | 🌙鯨諾whalefall🐋 | #whalefall #鯨諾",date:"2025-12-24"},
      {id:"fheAwQNYosk",title:"【原創曲】鯨落 demo | 🌙鯨諾whalefall🐋 | #whalefall #鯨諾",date:"2025-05-08"},
      {id:"-XDu1jJZ3fc",title:"【原創曲】有這麼一首歌demo | 🌙鯨諾whalefall🐋 | #whalefall #鯨諾",date:"2024-09-13"},
    ],
    premiere: [
      {id:"h_O2c9U7FhQ",title:"【官方初配信精華】唱歌寫作編曲樣樣行，卻是個古靈精怪電波男？ | 🌙鯨諾whalefall🐋 | #whalefall #鯨諾",date:"2024-05-17"},
    ],
    general: [
      {id:"bFUWQQZwEkI",title:"【2026元宵詩謎】元宵詩謎之七 | 🌙鯨諾whalefall🐋 | #whalefall #鯨諾",date:"2026-02-28"},
      {id:"0vNCKx7FDwg",title:"【2026元宵詩謎】元宵詩謎之三 | 🌙鯨諾whalefall🐋 | #whalefall #鯨諾",date:"2026-02-24"},
      {id:"xV1JZRTMu8I",title:"【遊戲精華】蛇骨婆｜武士刀與忍者刀｜無傷 | 🌙鯨諾whalefall🐋 | #whalefall #鯨諾",date:"2026-02-20"},
      {id:"3xlDpBIDNf8",title:"Alluria 1.5 Anniversary: The Secret Agent  | Whalefall Route",date:"2025-11-09"},
      {id:"v-12akLei6s",title:"【情境影片】超煩男友Remake | 🌙鯨諾whalefall🐋 | #whalefall #鯨諾",date:"2025-06-14"},
      {id:"aAgw9dvEstg",title:"【惡搞影片】預見盃恐鬼症採訪特輯 | 🌙鯨諾whalefall🐋 | #whalefall #鯨諾",date:"2025-05-16"},
      {id:"h73DzXZwrL0",title:"【2025春節劇場】帥哥年獸新春祝福 | 🌙鯨諾whalefall🐋 | #whalefall #鯨諾",date:"2025-01-30"},
      {id:"_CQHbtiOwgI",title:"【2025春節迷你劇場】帥哥年獸小鬼特工 | 🌙鯨諾whalefall🐋 | #whalefall #鯨諾",date:"2025-01-29"},
      {id:"XNVGZBSjeIM",title:"【2025春節迷你劇場】帥哥年獸廚房歷險 | 🌙鯨諾whalefall🐋 | #whalefall #鯨諾",date:"2025-01-28"},
      {id:"WDusoHo2mck",title:"【2025春節迷你劇場】帥哥年獸首次任務 | 🌙鯨諾whalefall🐋 | #whalefall #鯨諾",date:"2025-01-27"},
      {id:"WLRNTRteusg",title:"【2025春節迷你劇場】帥哥年獸到你家 | 🌙鯨諾whalefall🐋 | #whalefall #鯨諾",date:"2025-01-26"},
      {id:"NmGBLz1CUjI",title:"「【遊戲】抗拒帕魯，了解帕魯，成為帕魯，帕魯玩帕魯的第一集～ | 🌙鯨諾whalefall🐋 | #whalefall #鯨諾」",date:"2024-08-13"},
      {id:"e2SYXTHXy3U",title:"【BGM】片尾Ending　餘波 | 🌙鯨諾whalefall🐋 | #whalefall #鯨諾",date:"2024-05-14"},
      {id:"cNrjZpU7lQ0",title:"【Alluria】魔競娛樂首批VTuber男團宣傳PV｜@Kai_Alluria @MukuruCh @Nyrfier @shiro_leon",date:"2024-04-02"},
    ],
    vlog: [],
    commerce: [],
    memberVideos: [],

    // 小知識
    fanName: "星燭",
    hashTags: [
      { label: "Live Tag",  tag: "#才鯨新聞"  },
      { label: "Fan Art",   tag: "#鯨點藝術"  },
      { label: "Meme",      tag: "#指點迷鯨"  },
      { label: "NSFW",      tag: "#煽鯨伴夜"  },
      { label: "分享詩作",  tag: "#詩書舞鯨"  },
      { label: "周邊分享",  tag: "#千鯨不換"  },
    ],
    futureGoals: [
      "看到大家名字後面有🌙🐋",
      "出一首原創曲",
      "出版鯨諾回憶錄",
      "成為大家的友人M",
    ],
    triviaLikes: [
      { label: "喜歡的東西", items: ["可愛小動物"] },
      { label: "喜歡的食物", items: ["壽司", "拉麵"] },
      { label: "特殊技能",   items: ["狗語者"] },
      { label: "技能",       items: ["吉他彈唱", "鋼琴彈唱", "作曲編曲", "文學相關填詞"] },
    ],
    triviaHates: [
      { label: "不喜歡的事情", items: ["尖銳的氣氛", "打賭"] },
    ],


    musicClipsChannelIds: [
      { id: "UC7jtBvX42r_mga2HUUmoznA", label: "teiko",           keywords: ["鯨諾", "whalefall", "Alluria"], typeKeywords: ["歌切"] },  // 歌切彈唱系列
      { id: "UCPZVkm7COU8x-oxxVBBv6iA", label: "半夜依舊燦爛的陽光", keywords: ["鯨諾", "whalefall", "Alluria"], typeKeywords: ["歌切", "cover", "歌回", "合唱", "線下連動"] },
      { id: "UCbNA4tD_skq8CQF2aMTx9cA", label: "月芊",          keywords: ["鯨諾", "whalefall", "Alluria"], typeKeywords: ["歌切", "cover", "歌回", "合唱", "線下連動"] },
      { id: "UCZuULhCMI94q4FgmedxEoSw", label: "Fish🌙🐋",     keywords: ["鯨諾", "whalefall", "Alluria"], typeKeywords: ["歌切", "cover", "歌回", "合唱", "線下連動"] },
      { id: "UCda9779QCmk1OwyZo7UM4uw", label: "yuan",           keywords: ["鯨諾", "whalefall", "Alluria"], typeKeywords: ["歌切", "cover", "歌回", "合唱", "線下連動"] },
      { id: "UC_jQpk9qoWdvSQ8hqtadkNw", label: "BYA",            keywords: ["鯨諾", "whalefall", "Alluria"], typeKeywords: ["歌切", "cover", "歌回", "合唱", "線下連動"] },
      { id: "UCufN2OUu-yAKmnkD3gr4aNw", label: "ThunderAttributePantsu", keywords: ["鯨諾", "whalefall", "Alluria"], typeKeywords: ["歌切", "cover", "歌回", "合唱", "線下連動"] },
    ],

    videoClipsChannelIds: [
      { id: "UC7jtBvX42r_mga2HUUmoznA", label: "teiko",      keywords: ["鯨諾", "whalefall", "Alluria"], typeKeywords: ["週年", "生日", "應援"] },  // 週年/生日應援企劃
      { id: "UCbZrLw_Lmq062fhqdsShr5w", label: "妮妮子nini", keywords: ["鯨諾", "whalefall", "Alluria", "小心結天團", "派"] },
      { id: "UCST8y6kG6QQyAnRwLv8cv_A", label: "羽feather🌙🐋",     keywords: ["鯨諾", "whalefall", "Alluria"], excludeKeywords: ["歌切", "cover", "歌回", "合唱", "線下連動"] },
    ],

    scheduleVideoId:  "r15JQHl8KL0",
    spreadsheetLabel: "鯨諾的大小事",
    scheduleTitle:    "鯨諾的行程表",

    refSheets: [
      { version: "Ver 1.0",       url: "images/鯨諾 v1.0.jpg"   },
      { version: "Ver 2.0",       url: "images/鯨諾 v2.0.jpg"   },
      { version: "粉絲形象 星燭", url: "images/鯨諾_星燭.jpg"   },
    ],

    songStatsGids: {
      "2026": "592285729",
      "2025": "129810642",
      "2024": "1583821169",
    },

    color: "#66B2FF"   // 鯨諾 代表色（天藍）
  },

  {
    id: "kai",
    name: "魁 Kai",
    nameEn: "Kai",
    group: "預見娛樂",
    generation: "三期生",
    avatar: "https://pbs.twimg.com/profile_images/2060718199705088000/2gEl6-Rk_400x400.jpg",
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
      {id:"EMe9ATWaKwU",title:"絶対零度 Absolute Zero / なとり - 魁 Kai｜【Cover】",date:"2026-05-30"},
      {id:"u46Vc2nbYAo",title:"女孩 / 韋禮安 - 魁 Kai x 克克米伊 KeKeMii｜【Cover】",date:"2025-08-29"},
      {id:"lyagz4xw1cM",title:"Bunny Girl / AKASAKI - 魁 Kai｜【Cover】",date:"2025-02-01"},
      {id:"symqMoTU2-0",title:"Overdose / なとり - 魁 Kai｜【Cover】",date:"2024-10-28"},
      {id:"afnmPQCtNhs",title:"マフィア(Mafia) - 魁 Kai｜【Cover】",date:"2024-04-05"},
    ],
    shorts: [],
    originals_manual: [],
    premiere: [
      {id:"fEHhlj-6re0",title:"【魁Kai精華】現場模仿烏薩奇！？究竟是霸氣擔當還是中二屁孩？【5/10 - 初配信】",date:"2024-05-16"},
    ],
    general: [
      {id:"zhkShFumo6U",title:"【特殊企劃】二週年特別節目－小動物天團出任務！食字路口大挑戰 in 臨江街夜市【魁 Kai🩸🐺｜Alluria】",date:"2026-05-03"},
      {id:"CQxJmeKp4eA",title:"Alluria 1.5 Anniversary: The Secret Agent  | Kai Route",date:"2025-11-09"},
      {id:"wp3xiZ_1b9A",title:"【直播留檔】2025預見雞馬盃！誰才是雞馬王｜@kai_Alluria｜【魁 Kai🩸🐺】",date:"2025-09-30"},
      {id:"6zeuf9OW3B0",title:"【精華】為何叫小心結天團？看完了你就明白【魁 Kai🩸🐺｜Alluria】",date:"2025-09-20"},
      {id:"ulwreCZjyXc",title:"【特殊企劃】一週年特別節目－小動物天團出任務！in 台北動物園【魁 Kai🩸🐺｜Alluria】",date:"2025-05-11"},
      {id:"F7QzZ-BhtMQ",title:"【#勞動滾石娛樂盃】到底誰會把自己的隊伍叫新北耶誕城沒有偶像【魁 Kai🩸🐺｜Alluria】",date:"2025-05-02"},
      {id:"oR4XEWoeus0",title:"【雜談】感覺經歷了三天出道嘉年華【魁 Kai🩸🐺｜Alluria】",date:"2025-04-27"},
    ],
    vlog: [],
    commerce: [],
    memberVideos: [],

    // 小知識
    fanName: "Poppy",
    hashTags: [
      { label: "萬能",  tag: "#這很魁以"  },
      { label: "繪圖",  tag: "#魁以fafa"  },
      { label: "NFSW",  tag: "#魁以瑟澀"  },
      { label: "周邊",  tag: "#Kai動了"   },
      { label: "迷因",  tag: "#開Kai玩笑" },
      { label: "娃娃",  tag: "#AlluriKA"  },
      { label: "性轉",  tag: "#魅寶要寵"  },
    ],
    futureGoals: [
      "讓所有人類都加入血狼組",
      "吃遍全世界的巧克力",
      "創造1000萬個迷因",
      "不要回顧初配信",
      "我還沒有想到這",
    ],
    triviaLikes: [
      { label: "擅長",     items: ["游泳", "尊包友", "吃"] },
      { label: "喜歡的食物", items: ["巧克力", "化工荔枝", "軟芭樂", "百香果", "哈密瓜", "小黃瓜", "茄子", "食物組合", "玫瑰普洱+搖果樂(無糖)"] },
      { label: "喜歡的ACG", items: ["家庭教師", "海賊王", "我英", "新楓之谷", "DBD", "星穹鐵道"] },
      { label: "超想嚕",   items: ["卯咪", "水獺", "兔子", "狐狸", "狗勾", "狐獴", "倉鼠", "迷你豬", "小羊", "懶猴", "小貓熊", "黑紫色挑染的水豚", "綿羊", "兔孫", "綠紅色相間的蛇", "猴子", "豪豬", "松鼠", "藍色大鯨魚", "老虎", "熊貓", "浣熊", "北極熊", "狼獾", "雪豹", "孔雀", "全白的獅子", "棕熊", "海豹", "猞猁", "鹿", "企鵝", "袋熊", "狼", "羊駝", "台灣黑熊", "ㄓㄌ"] },
    ],
    triviaHates: [
      { label: "不擅長",     items: ["示弱", "怕冷", "吃很多"] },
      { label: "不喜歡的食物", items: ["所有的蔬菜", "所有的菇類"] },
    ],


    musicClipsChannelIds: [
      { id: "UCuq11vOzrVqirACayTyRMHg", label: "月桂葉香包", keywords: ["魁", "Kai", "Alluria"], typeKeywords: ["合唱", "歌切", "歌回", "songlist", "兒歌", "cover"] },
      { id: "UCkWWf4NpdWKjcmab-mcbV3Q", label: "貓mao",      keywords: ["魁", "Kai", "Alluria"], typeKeywords: ["卡祖笛"] },  // 卡祖笛兄弟系列
      { id: "UCDql68LqPiQmpGH-tq4jI_g", label: "程憂",       keywords: ["魁", "Kai", "Alluria", "這很魁以", "國境之南"], typeKeywords: ["歌切", "cover", "線下連動"] },  // Alluria 線下連動合唱
      { id: "UCPk2c45wPWSFVgdI7Nry2Xw", label: "槓槓",       keywords: ["魁", "Kai", "Alluria"], typeKeywords: ["歌切", "cover", "歌回", "合唱", "線下連動"] },
      { id: "UCbNA4tD_skq8CQF2aMTx9cA", label: "月芊",     keywords: ["魁", "Kai", "Alluria"], typeKeywords: ["歌切", "cover", "歌回", "合唱", "線下連動"] },
      { id: "UCZuULhCMI94q4FgmedxEoSw", label: "Fish🌙🐋", keywords: ["魁", "Kai", "Alluria"], typeKeywords: ["歌切", "cover", "歌回", "合唱", "線下連動"] },
    ],

    videoClipsChannelIds: [
      { id: "UCuq11vOzrVqirACayTyRMHg", label: "月桂葉香包", keywords: ["魁", "Kai", "Alluria"], excludeKeywords: ["合唱", "歌切", "歌回", "songlist", "兒歌", "cover"] },
      { id: "UCkWWf4NpdWKjcmab-mcbV3Q", label: "貓mao",      keywords: ["魁", "Kai", "Alluria"], excludeKeywords: ["卡祖笛"] },
      { id: "UCbZrLw_Lmq062fhqdsShr5w", label: "妮妮子nini", keywords: ["魁", "Kai", "Alluria", "小心結天團"] },
      { id: "UCPk2c45wPWSFVgdI7Nry2Xw", label: "槓槓",           keywords: ["魁", "Kai", "Alluria"], excludeKeywords: ["歌切", "cover", "歌回", "合唱", "線下連動"] },
      { id: "UCST8y6kG6QQyAnRwLv8cv_A", label: "羽feather🌙🐋", keywords: ["魁", "Kai", "Alluria", "這很魁以"], excludeKeywords: ["歌切", "cover", "歌回", "合唱", "線下連動"] },
    ],

    scheduleVideoId:  "psgIP5rMRTA",
    spreadsheetLabel: "魁慨的大小事",
    scheduleTitle:    "魁慨的行程表",

    songStatsGids: {
      "2026": "2006254463",
      "2025": "933404155",
      "2024": "1583821169",
    },

    // 三視圖
    refSheets: [
      { version: "Ver 1.0",       url: "images/魁kai v1.0.jpg"    },
      { version: "Ver 2.0",       url: "images/魁kai v2.0.jpg"    },
      { version: "魅Mei",          url: "images/魁kai_魅Mei.jpg"   },
      { version: "粉絲形象Poppy", url: "images/魁kai_Poppy.jpg"   },
    ],

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
    taglines: [
      { context: "", text: "什↗麼→意↘思↗" },
      { context: "", text: "哭啊" },
      { context: "", text: "抓抓頭" },
      { context: "", text: "好麻煩" },
      { context: "", text: "這可以講嗎？算了沒事" }
    ],
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

    videos: [],
    shorts: [],
    originals_manual: [],
    premiere: [],
    general: [],
    vlog: [],
    commerce: [],
    memberVideos: [],

    // 小知識
    fanName: "穆浴球",
    hashTags: [
      { label: "Hashtag Live",   tag: "#蕗Live"  },
      { label: "Creation 創作",  tag: "#克畫"    },
      { label: "Meme",           tag: "#咩蕗"    },
      { label: "Call 呼叫",      tag: "#穆Call"  },
      { label: "Goods 周邊",     tag: "#積穆"    },
      { label: "NSFW",           tag: "#不可穆"  },
      { label: "幻想封面",       tag: "#朝思穆享" },
      { label: "回顧、訂閱慶祝", tag: "#時光穆蕗" },
    ],
    futureGoals: [
      "生活電台",
      "神祕學學習",
      "日文教學",
    ],
    triviaLikes: [
      { label: "興趣",     items: ["唱歌", "旅遊", "拍照＆蒐集鍊金術材料"] },
      { label: "喜歡的歌手", items: ["KOKIA", "Annabel"] },
      { label: "喜歡的事情", items: ["床", "泡澡", "水豚", "炸四季豆&青椒&九層塔", "辛香料（蒜頭、香菜(鍋)、辣）"] },
    ],
    triviaHates: [
      { label: "不喜歡的事情", items: ["飲料加料", "蚊子", "苦瓜", "三色豆"] },
    ],


    musicClipsChannelIds: [
      { id: "UCuq11vOzrVqirACayTyRMHg", label: "月桂葉香包", keywords: ["穆克蕗", "Mukuru", "穆穆", "穆總", "Alluria"], typeKeywords: ["合唱", "歌切", "歌回", "songlist", "兒歌", "cover"] },
      { id: "UCDql68LqPiQmpGH-tq4jI_g", label: "程憂",       keywords: ["穆克蕗", "Mukuru", "穆穆", "穆總", "Alluria"], typeKeywords: ["歌切", "cover", "歌回", "合唱", "線下連動"] },
      { id: "UCk1ZS3ZsYNbwXsxaxtJW7Dg", label: "蛋餅_owo",  keywords: ["穆克蕗", "Mukuru", "穆穆", "穆總", "Alluria"], typeKeywords: ["歌切", "cover", "歌回", "合唱", "線下連動"] },
    ],

    videoClipsChannelIds: [
      { id: "UCuq11vOzrVqirACayTyRMHg", label: "月桂葉香包", keywords: ["穆克蕗", "Mukuru", "穆穆", "穆總", "Alluria"], excludeKeywords: ["合唱", "歌切", "歌回", "songlist", "兒歌", "cover"] },
      { id: "UCDql68LqPiQmpGH-tq4jI_g", label: "程憂",       keywords: ["穆克蕗", "Mukuru", "穆穆", "穆總", "Alluria"], excludeKeywords: ["歌切", "cover", "歌回", "合唱", "線下連動"] },
      { id: "UCyOGgk-ScfBwkkeej_RQPYw", label: "晨茉",       keywords: ["穆克蕗", "Mukuru", "穆穆", "穆總", "Alluria"], excludeKeywords: ["歌切", "cover", "歌回", "合唱", "線下連動"] },
      { id: "UCk1ZS3ZsYNbwXsxaxtJW7Dg", label: "蛋餅_owo",  keywords: ["穆克蕗", "Mukuru", "穆穆", "穆總", "Alluria"], excludeKeywords: ["歌切", "cover", "歌回", "合唱", "線下連動", "壞女人", "HO YO"] },
      { id: "UCbZrLw_Lmq062fhqdsShr5w", label: "妮妮子nini", keywords: ["穆克蕗", "Mukuru", "穆穆", "穆總", "Alluria"] },
      { id: "UCu2mKGlGDS_cQbOIwCGuXSQ", label: "二七ER",           keywords: ["穆克蕗", "Mukuru", "穆穆", "穆總", "Alluria"], excludeKeywords: ["歌切", "cover", "歌回", "合唱", "線下連動"] },
      { id: "UCST8y6kG6QQyAnRwLv8cv_A", label: "羽feather🌙🐋", keywords: ["穆克蕗", "Mukuru", "穆穆", "穆總", "Alluria"],          excludeKeywords: ["歌切", "cover", "歌回", "合唱", "線下連動"] },
    ],

    scheduleVideoId:  "fO8nKY_tpzM",
    spreadsheetLabel: "穆總的大小事",
    scheduleTitle:    "穆總的行程表",

    songStatsGids: {
      "2026": "532167774",
      "2025": "1796269030",
      "2024": "1583821169",
    },

    // 三視圖
    refSheets: [
      { version: "Ver 1.0",        url: "images/穆克蕗 v1.0.jpg"      },
      { version: "Ver 2.0",        url: "images/穆克蕗 v2.0.jpg"      },
      { version: "粉絲形象 穆浴球", url: "images/穆克蕗_穆浴球.jpg"   },
    ],

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
      {id:"R7MoB2sMCDE",title:"⚕︎偽顏 / yama - Cover【涅爾菲 Nyrfier】",date:"2025-11-11"},
      {id:"6sQZBOrzcLw",title:"⚕︎東京フラッシュ / Vaundy - Cover【涅爾菲 Nyrfier】",date:"2025-10-11"},
      {id:"gJSfN512xX8",title:"【Alluria一周年紀念】ONE NIGHT/Full Throttle4【Cover】",date:"2025-05-10"},
      {id:"So_EGk9uZnQ",title:"⚕︎跳樓機 Jumping Machine / LBI利比 「最破防的一次」【涅爾菲/Cover】",date:"2025-04-19"},
      {id:"mAOD-T-1Jy4",title:"⚕︎文学講義 / 水槽 - Cover【涅爾菲 ⨯ Nana】",date:"2024-12-24"},
      {id:"iUZcDofSd3c",title:"⚕︎Beyond the way / Giga - Cover【涅爾菲 ⨯ 瓦西瓦瓦 ⨯ 希妮·亞里絲】",date:"2024-10-12"},
      {id:"TrSHRXYxIU0",title:"⚕︎コノハの世界事情 - Cover【涅爾菲 Nyrfier】 #カゲプロ台灣翻唱計畫2024",date:"2024-08-26"},
      {id:"Q8ACkV_ftK8",title:"⚕︎クイーンオブハート(Queen of Hearts)/奏音69 - Cover【涅爾菲 Nyrfier】",date:"2024-05-03"},
      {id:"3bgu64ztKVQ",title:"⚕︎シャンティ(SHANTI) - Cover【涅爾菲 Nyrfier】",date:"2024-04-03"},
    ],
    shorts: [],
    originals_manual: [],
    premiere: [
      {id:"TK83ufSQ1qg",title:"【⚕︎初配信精華】蛇？蚯蚓？有壁虎還有雞？種族最混亂的社恐男公關【涅爾菲 Nyrfier】",date:"2024-05-25"},
    ],
    general: [
      {id:"rABhe3IHrqE",title:"【復甦島3 】Day.6 END【銳恩/涅爾菲】",date:"2026-05-24"},
      {id:"pQ5WV69K8J8",title:"【復甦島3 】Day.5【銳恩/涅爾菲】",date:"2026-05-24"},
      {id:"HLISgae25tc",title:"【復甦島3 】Day.4【銳恩/涅爾菲】",date:"2026-05-24"},
      {id:"nvdkjXH5pU4",title:"【復甦島3 】Day.3【銳恩/涅爾菲】",date:"2026-05-24"},
      {id:"b4zGRTcjnrw",title:"【復甦島3 】Day.2【銳恩/涅爾菲】",date:"2026-05-24"},
      {id:"Afg6dC5qyTQ",title:"【復甦島3  】Day.1【銳恩/涅爾菲】",date:"2026-05-24"},
      {id:"D-MNhg3kYIQ",title:"Alluria 1.5 Anniversary: The Secret Agent  | Nyrfier Route",date:"2025-11-09"},
      {id:"JyjHJCFsEsY",title:"【⚕︎官方精華】無限暖暖丹青季來了！誰能夠拒絕的了調皮貓娘的尾巴 #alluria #台V #涅爾菲",date:"2025-08-21"},
      {id:"Kxkwb_Gdgug",title:"【⚕︎官方精華】這個綠色蛇蛇衣服真的太過分了！！！我要！！！ #alluria #台V #涅爾菲",date:"2025-07-25"},
      {id:"pyKH3Q26c7Y",title:"【⚕︎官方精華】欸欸你們看這個髮型跟我一模一樣欸！！ #alluria #台V #涅爾菲",date:"2025-06-26"},
      {id:"stYBIrNhulE",title:"【⚕︎官方精華】有的時候同事太多是真的很吵 - 4/12預見R.E.P.O. #alluria #台V #涅爾菲",date:"2025-06-20"},
      {id:"8CmYbHQMh2o",title:"【⚕︎官方精華】無限暖暖泡泡季！雙人互動根本就是人緣檢測器QQ #alluria #台V #涅爾菲",date:"2025-05-22"},
      {id:"2YpifFzBDEk",title:"【⚕︎官方精華】無限暖暖妄想季！欸欸欸欸說好的輕鬆解謎呢！！！#alluria #台V #涅爾菲",date:"2025-04-11"},
      {id:"I5bhJJ5JaUU",title:"【⚕︎官方精華】小動物天團喜哩烤混亂邪惡大合輯完整版Plus Pro Max  #alluria #台V #涅爾菲",date:"2024-11-25"},
      {id:"OY9oUQTtA8w",title:"【⚕︎官方精華】與同期們醉後通話！原來害羞鬼喝酒之後會變成... #alluria  #台V #涅爾菲",date:"2024-07-09"},
    ],
    vlog: [],
    commerce: [],
    memberVideos: [],

    // 小知識
    fanName: "菲鼠",
    hashTags: [
      { label: "LiveTag",  tag: "#與蛇共舞"   },
      { label: "FanArt",   tag: "#畫蛇不添足" },
      { label: "Meme",     tag: "#涅手涅腳"   },
      { label: "NSFW",     tag: "#你要不要吃禁果" },
      { label: "周邊",     tag: "#菲賣品"     },
    ],
    futureGoals: [
      "建立自信",
      "交到更多朋友",
      "創造更多回憶",
      "用聲音陪伴大家",
    ],
    triviaLikes: [
      { label: "喜歡的食物", items: ["生魚片"] },
    ],
    triviaHates: [
      { label: "不喜歡的食物", items: ["小黃瓜", "大部分的蔬菜", "動物的肝"] },
    ],


    // 剪輯頻道（動態抓取，參考詩雨蔻達版本）
    musicClipsChannelIds: [
      { id: "UC4BENWXih6K8ETLMOQglk8Q", label: "海默ッ",     keywords: ["涅爾菲", "Nyrfier", "菲菲", "爾菲", "Alluria"], typeKeywords: ["歌切", "合唱"] },
      { id: "UCuq11vOzrVqirACayTyRMHg", label: "月桂葉香包", keywords: ["涅爾菲", "Nyrfier", "菲菲", "爾菲", "Alluria"], typeKeywords: ["合唱", "歌切", "歌回", "songlist", "兒歌", "cover"] },
      { id: "UCkWWf4NpdWKjcmab-mcbV3Q", label: "貓mao",      keywords: ["涅爾菲", "Nyrfier", "菲菲", "爾菲", "Alluria"], typeKeywords: ["卡祖笛"] },  // 卡祖笛兄弟系列
      { id: "UCDql68LqPiQmpGH-tq4jI_g", label: "程憂",       keywords: ["涅爾菲", "Nyrfier", "菲菲", "爾菲", "Alluria"], typeKeywords: ["歌切", "線下連動"] },
      { id: "UCA0M5H7dRqlaR9N9ThQsN7w", label: "水逆え柚希",         keywords: ["涅爾菲", "Nyrfier", "菲菲", "爾菲", "Alluria"], typeKeywords: ["歌切", "cover", "歌回", "合唱", "線下連動"] },
      { id: "UCPZVkm7COU8x-oxxVBBv6iA", label: "半夜依舊燦爛的陽光", keywords: ["涅爾菲", "Nyrfier", "菲菲", "爾菲", "Alluria"], typeKeywords: ["歌切", "cover", "歌回", "合唱", "線下連動"] },
      { id: "UCoH17T3JwOGWtwJQxkUtJ0Q", label: "比邻星🐍🍷",          keywords: ["涅爾菲", "Nyrfier", "菲菲", "爾菲", "Alluria"], typeKeywords: ["歌切", "cover", "歌回", "合唱", "線下連動"] },
      { id: "UCda9779QCmk1OwyZo7UM4uw", label: "yuan",        keywords: ["涅爾菲", "Nyrfier", "菲菲", "爾菲", "Alluria"], typeKeywords: ["歌切", "cover", "歌回", "合唱", "線下連動"] },
      { id: "UCEGbez6s8Y8P_5julxNh7jA", label: "Ariel 月",   keywords: ["涅爾菲", "Nyrfier", "菲菲", "爾菲"], typeKeywords: ["cover", "歌ってみた"] },
    ],
    videoClipsChannelIds: [
      { id: "UC4BENWXih6K8ETLMOQglk8Q", label: "海默ッ",     keywords: ["涅爾菲", "Nyrfier", "菲菲", "爾菲", "Alluria"], excludeKeywords: ["歌切", "合唱"] },
      { id: "UCuq11vOzrVqirACayTyRMHg", label: "月桂葉香包", keywords: ["涅爾菲", "Nyrfier", "菲菲", "爾菲", "Alluria"], excludeKeywords: ["合唱", "歌切", "歌回", "songlist", "兒歌", "cover"] },
      { id: "UCkWWf4NpdWKjcmab-mcbV3Q", label: "貓mao",      keywords: ["涅爾菲", "Nyrfier", "菲菲", "爾菲", "Alluria"], excludeKeywords: ["卡祖笛"] },
      { id: "UCbZrLw_Lmq062fhqdsShr5w", label: "妮妮子nini", keywords: ["涅爾菲", "Nyrfier", "菲菲", "爾菲", "Alluria"] },
      { id: "UCPZVkm7COU8x-oxxVBBv6iA", label: "半夜依舊燦爛的陽光", keywords: ["涅爾菲", "Nyrfier", "菲菲", "爾菲", "Alluria"], excludeKeywords: ["歌切", "cover", "歌回", "合唱", "線下連動"] },
      { id: "UCoH17T3JwOGWtwJQxkUtJ0Q", label: "比邻星🐍🍷",          keywords: ["涅爾菲", "Nyrfier", "菲菲", "爾菲", "Alluria"], excludeKeywords: ["歌切", "cover", "歌回", "合唱", "線下連動"] },
      { id: "UCEGbez6s8Y8P_5julxNh7jA", label: "Ariel 月",   keywords: ["涅爾菲", "Nyrfier", "菲菲", "爾菲"], excludeKeywords: ["cover", "歌ってみた"] },
    ],

    scheduleVideoId:  "fl96oXs9Q1E",
    spreadsheetLabel: "爾菲的大小事",
    scheduleTitle:    "爾菲的行程表",

    songStatsGids: {
      "2026": "339833405",
      "2025": "125957373",
      "2024": "1583821169",
    },

    // 三視圖
    refSheets: [
      { version: "Ver 1.0",       url: "images/涅爾菲 v1.0.jpg"    },
      { version: "Ver 2.0",       url: "images/涅爾菲 v2.0.jpg"    },
      { version: "粉絲形象 菲鼠", url: "images/涅爾菲_菲鼠.jpg"   },
    ],

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
    taglines: [
      { context: "", text: "好色喔" }
    ],
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
      {id:"FKPAGvEY_M0",title:"貴方の恋人になりたい / チョーキューメイ｜量產型猫飼步歌貳貳機 Fuka22【Cover】",date:"2026-02-13"},
      {id:"jP8pzNU3jPI",title:"【企劃還債】隙 / ゆーり｜量產型猫飼步歌貳貳機 Fuka22【Cover】",date:"2026-01-01"},
      {id:"ydAr4VAKMlM",title:"泣きたい夜 / AYANE｜量產型猫飼步歌貳貳機 Fuka22【Cover】",date:"2025-11-22"},
      {id:"37ta7yGOGcg",title:"I LOVE... / Official髭男dism｜量產型猫飼步歌貳貳機 Fuka22【Cover】",date:"2025-08-31"},
      {id:"7jg6W26j_5w",title:"メトロシティ / imase & なとり｜量產型猫飼步歌貳貳機 & 希妮·亞里絲【Cover】",date:"2025-06-15"},
      {id:"b-pL1U7_9Ok",title:"24/7, 365／elijah woods｜量產型猫飼步歌貳貳機 Fuka22【Cover】",date:"2025-02-14"},
      {id:"axDzoqhb1h4",title:"ぎゅっと。 / もさを。｜量產型猫飼步歌貳貳機 Fuka22【Cover】",date:"2024-11-22"},
      {id:"0XIrR6XIzXc",title:"思想犯／ヨルシカ｜量產型猫飼步歌貳貳機 Fuka22【Cover】",date:"2024-08-25"},
      {id:"9aG-anVkWic",title:"ニア／夏代孝明｜量產型猫飼步歌貳貳機 Fuka22【Cover】",date:"2024-08-04"},
      {id:"vFhf_-jyTzM",title:"晚餐歌／tuki.｜量產型猫飼步歌貳貳機 Fuka22【自彈自唱 Cover】",date:"2024-07-07"},
    ],
    shorts: [
      {id:"9PdcpJCs5dA",title:"【企劃】2025元宵詩謎！｜🤖量產型猫飼步歌貳貳機🐱 Fuka22",date:"2025-02-17"},
      {id:"McLgqzqofrQ",title:"【初配信🐱9/11 (三) 20:00】Robot Cat｜量產型猫飼步歌貳貳機【音雲漫步計畫】",date:"2024-08-21"},
    ],
    originals_manual: [],
    premiere: [
      {id:"ZZTY2ZRdXkw",title:"【官方初配信精華】貳貳超可愛教主登場！竟在初配信公然吸X！？｜🤖量產型猫飼步歌貳貳機🐱 Fuka22",date:"2024-09-16"},
    ],
    general: [
      {id:"nbuwPPuXePo",title:"〖#直播存檔〗5/4勞動節24hr加班接力之轉盤之神贈與撒嬌叫老公雜談｜🤖量產型猫飼步歌貳貳機🐱 Fuka22",date:"2025-05-05"},
      {id:"xsmL2zop24E",title:"〖#以心傳心〗群青／YOASOBI ft. @BarkBarkPomi @cocor0_0303 @uchififi ⁨｜🤖量產型猫飼步歌貳貳機🐱 Fuka22",date:"2025-04-06"},
      {id:"E0OlD8YiZlo",title:"〖#以心傳心〗逆光／孫燕姿 ft. @uchififi @cocor0_0303 @BarkBarkPomi ⁨｜🤖量產型猫飼步歌貳貳機🐱 Fuka22",date:"2025-04-06"},
      {id:"Nr2cyRUw4xg",title:"〖#以心傳心〗Ref:rain／Aimer ft. @BarkBarkPomi @uchififi @cocor0_0303 ｜🤖量產型猫飼步歌貳貳機🐱 Fuka22",date:"2025-04-05"},
      {id:"Go2e8wpE7ic",title:"〖#以心傳心〗Mela!／緑黄色社会 ft. @cocor0_0303 @BarkBarkPomi @uchififi ｜🤖量產型猫飼步歌貳貳機🐱 Fuka22",date:"2025-04-04"},
    ],
    vlog: [],
    commerce: [],
    memberVideos: [],

    // 小知識
    fanName: "貳徒",
    hashTags: [
      { label: "LiveTag",     tag: "#步期貳遇" },
      { label: "FanArt",      tag: "#咪圖之飯" },
      { label: "萬用+Meme",   tag: "#迷咪冒卯" },
      { label: "NSFW",        tag: "#面紅貳赤" },
    ],
    futureGoals: [
      "買很多很多好吃的古代食物",
      "帶回去給卯咪主子們",
      "傳教",
    ],
    triviaLikes: [
      { label: "興趣", items: ["吸貓", "嗆人"] },
      { label: "功能", items: ["照顧貓咪", "唱歌", "彈吉他", "偷懶"] },
      { label: "語言", items: ["中文", "貓貓語", "英文", "日文"] },
      { label: "喜歡的東西", items: ["貓咪", "動物", "甜甜的零食"] },
    ],
    triviaHates: [
      { label: "不喜歡的東西", items: ["欺負動物的人", "泥狀的食物"] },
    ],

    // 焦焦小知識
    jiaojiao: {
      photo: "images/貳貳_焦焦.png",
      basicInfo: [
        { label: "種族", value: "全宇宙最可愛的卯咪" },
        { label: "年齡", value: "6歲成 =>7歲" },
        { label: "瞳色", value: "Light cyan" },
        { label: "毛色", value: "Light Gray/Graite Gray" },
        { label: "興趣", value: "品嘗美食、睡覺" },
        { label: "專長", value: "鑑賞音樂" },
      ],
      pairs: [
        { likeLabel: "喜歡",           like: "超好吃肉泥、各種零食",                                                                                           dislikeLabel: "討厭",             dislike: "加水的罐頭、很大的聲音" },
        { likeLabel: "喜歡的食物類型", like: "絲狀的雞肉、很香的魚、新鮮的罐頭",                                                                               dislikeLabel: "不喜歡的食物類型", dislike: "不夠多水的泥狀罐頭、雞肉牛肉罐頭、吃過兩次的罐頭" },
        { likeLabel: "喜歡的點心品牌", like: "嗶○館、CIXX、PuXXna、Axxxa",                                                                                    dislikeLabel: "不喜歡的點心品牌", dislike: "目前沒有" },
        { likeLabel: "喜歡的音樂類型", like: "柔和的純樂器音樂",                                                                                               dislikeLabel: "不喜歡的音樂類型", dislike: "很吵的人唱很吵的歌" },
        { likeLabel: "喜歡的味道",     like: "柴魚片、小魚乾、深海魚肉、雞肉、羊肉、外面的花草味",                                                             dislikeLabel: "不喜歡的味道",     dislike: "涼涼刺鼻的味道" },
        { likeLabel: "喜歡的觸感",     like: "毛毛、軟軟、滑滑、粗粗的抓第一名",                                                                               dislikeLabel: "不喜歡的觸感",     dislike: "冰冰、濕濕、黏黏" },
        { likeLabel: "喜歡做的事",     like: "在窗戶裡面看外面的動物為了生活努力奮鬥的樣樣、看電視、把所有人身上都沾滿自己的味道、把所有東西都佔為己有、當世界之王", dislikeLabel: "不喜歡做的事",     dislike: "出門" },
        { likeLabel: "喜歡喝的水",     like: "大水盆裡面的水、乾淨的水、22洗澡的時候身上的水",                                                                 dislikeLabel: "不喜歡喝的水",     dislike: "杯子裡的水、碗裡的水、不乾淨的水" },
        { likeLabel: "喜歡的玩具",     like: "第一隻小老鼠娃娃、小小的丟到地上會有聲音的球、自己老做的毛球、羽毛",                                               dislikeLabel: "不喜歡的玩具",     dislike: "除了小老鼠娃娃以外玩遍很多次的玩具" },
        { likeLabel: "喜歡睡的地方",   like: "紙箱、地上或沙發上的任何布的上面、亂亂的棉被上",                                                                 dislikeLabel: "不喜歡睡的地方",   dislike: "專門買的貓窩" },
        { likeLabel: "喜歡的生物",     like: "小鳥、蝴蝶",                                                                                                    dislikeLabel: "不喜歡的生物",     dislike: "過於熱情的動物、跑到地盤來的陌生貓" },
        { likeLabel: "喜歡的顏色",     like: "自己身上的顏色",                                                                                                 dislikeLabel: "不喜歡的顏色",     dislike: "沒有" },
        { likeLabel: "喜歡的電視節目", like: "小鳥吃種子",                                                                                                    dislikeLabel: "不喜歡的電視節目", dislike: "很多人講話很大聲很吵的那種、或是唱得很難聽的歌唱節目" },
        { likeLabel: "喜歡被摸的地方", like: "下巴、耳朵前面、從脖子後面開始一路摸到到尾巴",                                                                   dislikeLabel: "不喜歡被摸的地方", dislike: "因人而異" },
      ],
      special: "小小耳朵、小小鼻子、小小嘴巴、團團亮亮眼睛、小小小手手、QQ肉球、澎澎尾巴、超好握抱毛、超好摸小肚肚、澎澎的臉頰、毛毛不同顏色的分界",
    },


    musicClipsChannelIds: [
      { id: "UCUxpbqNNzWup9PZXdLUS8Jw", label: "阿嗚", keywords: ["量產型", "Fuka22", "貳貳", "音雲漫步"], typeKeywords: ["cover", "威風堂々", "嘉賓"] },
    ],

    videoClipsChannelIds: [
      { id: "UCUxpbqNNzWup9PZXdLUS8Jw", label: "阿嗚", keywords: ["量產型", "Fuka22", "貳貳", "音雲漫步"], excludeKeywords: ["cover", "威風堂々", "嘉賓"] },
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
      { context: "轉盤時", text: "屁啦屁啦屁啦、不可能不可能不可能" },
      { context: "", text: "tell me why🎶" },
      { context: "", text: "What do you mean？" },
      { context: "", text: "歐買勾抖" }
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
      {id:"xGyZkUevB6c",title:"Saja Boys - Soda Pop / 魁Kai、崎塔Chita、鯨諾Whalefall、穆克蕗Mukuru、涅爾菲Nyrfier (Cover)",date:"2025-10-25"},
      {id:"zDnT3Q3oyqQ",title:"チェリーポップ / 崎塔CHITA (cover)",date:"2025-10-09"},
      {id:"0H4eCfJnnwY",title:"アニマル / 崎塔CHITA (cover)",date:"2025-03-21"},
    ],
    shorts: [],
    originals_manual: [],
    premiere: [
      {id:"zbBNsQ3y2GM",title:"【官方初配信精華】獨特嗓音+超皮行為！連STAFF都頭痛的崎塔出道秘辛！究竟能不能成為一隻貓呢？ (●´ω｀●)ゞ | 崎塔 Chita",date:"2025-04-26"},
    ],
    general: [
      {id:"h50yg0FYzD8",title:"【2026 漫畫博覽會】崎塔 CHITA 之1v1好難抽！🐾",date:"2026-04-14"},
      {id:"NhXNZysobhk",title:"【2026 漫畫博覽會】崎塔 CHITA 線下見面會：南港展覽館與妳相約！🐾",date:"2026-02-18"},
      {id:"dluL4fRW_Gc",title:"【冒險日誌】人類們，你們的世界好好玩！d(`･∀･)b | 崎塔 Chita",date:"2025-04-23"},
    ],
    vlog: [],
    commerce: [],
    memberVideos: [],

    // 小知識
    fanName: "塔塔醬",
    hashTags: [
      { label: "一般",   tag: "#塔塔出沒中" },
      { label: "FanArt", tag: "#畫崎塔"     },
      { label: "Live",   tag: "#塔塔招財中" },
      { label: "Meme",   tag: "#崎崎怪怪"   },
      { label: "R18",    tag: "#塔咩得斯"   },
      { label: "周邊",   tag: "#堆積成塔"   },
    ],
    futureGoals: [
      "健健康康的直播到65歲",
      "開3D Live演唱會",
      "想跟各國Vtuber一起玩遊戲",
    ],
    triviaLikes: [
      { label: "喜歡的角色類型", items: ["帥氣大叔", "大姊姊", "蘿莉"] },
      { label: "喜歡的食物",     items: ["鮭魚壽司", "生魚片", "咖啡", "茶", "酒"] },
      { label: "喜歡的IP",       items: ["焦焦（貳貳學姐的貓）", "Restia", "土王"] },
    ],
    triviaHates: [
      { label: "不喜歡的味道", items: ["小黃瓜", "便當店的茄子"] },
      { label: "討厭的事物",   items: ["肉被烤焦", "烤魚先烤肉那一面"] },
    ],


    musicClipsChannelIds: [
      { id: "UC4BENWXih6K8ETLMOQglk8Q", label: "海默ッ",     keywords: ["崎塔", "chita", "CaKano"], typeKeywords: ["歌切"] },
      { id: "UCitmNfWNIMaIOXt8G5T1BNQ", label: "檸檬兮兮",   typeKeywords: ["歌回", "之歌"] },   // 歌回剪輯 & CaKano之歌 系列
      { id: "UCuq11vOzrVqirACayTyRMHg", label: "月桂葉香包", keywords: ["崎塔", "chita", "CaKano"], typeKeywords: ["合唱", "歌切", "歌回", "songlist", "兒歌", "cover"] },
      { id: "UCMjxlxGJXiWyiSYcgYdvpMg", label: "miiyaミイヤ",         keywords: ["崎塔", "chita", "CaKano"], typeKeywords: ["歌切", "歌回", "cover"] },
      { id: "UCPZVkm7COU8x-oxxVBBv6iA", label: "半夜依舊燦爛的陽光", keywords: ["崎塔", "chita", "CaKano"],           typeKeywords: ["歌切", "cover", "歌回", "合唱", "線下連動"] },
      { id: "UCEGbez6s8Y8P_5julxNh7jA", label: "Ariel 月", keywords: ["崎塔", "chita", "CaKano"], typeKeywords: ["cover", "歌ってみた"], excludeKeywords: ["諾恪里", "Nokori"] },
    ],

    videoClipsChannelIds: [
      { id: "UC4BENWXih6K8ETLMOQglk8Q", label: "海默ッ",     keywords: ["崎塔", "chita", "CaKano"], excludeKeywords: ["歌切"] },
      { id: "UCitmNfWNIMaIOXt8G5T1BNQ", label: "檸檬兮兮",   keywords: ["崎塔", "chita", "CaKano"], excludeKeywords: ["歌回", "之歌"] },  // 非音樂的非官方精華
      { id: "UCuq11vOzrVqirACayTyRMHg", label: "月桂葉香包", keywords: ["崎塔", "chita", "CaKano"], excludeKeywords: ["合唱", "歌切", "歌回", "songlist", "兒歌", "cover"] },
      { id: "UCbZrLw_Lmq062fhqdsShr5w", label: "妮妮子nini", keywords: ["崎塔", "chita", "CaKano"] },
      { id: "UCEGbez6s8Y8P_5julxNh7jA", label: "Ariel 月", keywords: ["崎塔", "chita", "CaKano"], excludeKeywords: ["cover", "歌ってみた", "諾恪里", "Nokori"] },
    ],

    scheduleVideoId:  "JAzDEWJN8LM",
    spreadsheetLabel: "崎塔的大小事",
    scheduleTitle:    "崎塔的行程表",

    refSheets: [
      { version: "Ver 1.0",        url: "images/崎塔 v1.0.jpg"     },
      { version: "粉絲形象 塔塔醬", url: "images/崎塔_塔塔醬.jpg"  },
    ],

    songStatsPublishedId: "2PACX-1vQ75k5SD7Ie-T4qiFY69ZHJjw5zpvkuNMlqvLAG1DvgJYfwRavF3exXpeqIdJ_7vqP4FozF-zWzXl5W",
    songStatsGids: {
      "2026": "1190833420",
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
    avatar: "https://pbs.twimg.com/profile_images/2057135124555419648/ADdjtliV_400x400.jpg",
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
      {id:"-6u51DXgHJ0",title:"Wake up! / Cover【茶帽瑪緹 ♠︎ Chamamatti】",date:"2026-05-20"},
      {id:"P2MMHQLBj4Y",title:"リードコントロール / Cover【茶帽瑪緹 ♠︎ Chamamatti】",date:"2025-10-24"},
    ],
    shorts: [],
    originals_manual: [],
    premiere: [
      {id:"XtUVGafqII8",title:"【官方精華】嘴比人先瘋，用甜點堆出來的美麗精神狀態【初配信精華】｜茶帽瑪緹 ♠︎ Chamamatti",date:"2025-12-18"},
    ],
    general: [],
    vlog: [],
    commerce: [],
    memberVideos: [],

    // 小知識
    fanName: "",


    musicClipsChannelIds: [
      { id: "UCfy_OLAzKrZH-UGBlwndP6A", label: "浮生0508",   keywords: ["茶帽瑪緹", "chamamatti", "瑪緹", "ælis"], typeKeywords: ["小年夜"] },
      { id: "UC66CXCqyFbN3wkhw1cDP3yg", label: "茄子阿光",   keywords: ["茶帽瑪緹歌回剪輯"] },
    ],

    videoClipsChannelIds: [
      { id: "UCfy_OLAzKrZH-UGBlwndP6A", label: "浮生0508",   keywords: ["茶帽瑪緹", "chamamatti", "瑪緹", "ælis"],          excludeKeywords: ["小年夜"] },
      { id: "UCbZrLw_Lmq062fhqdsShr5w", label: "妮妮子nini", keywords: ["茶帽瑪緹", "chamamatti", "瑪緹", "ælis"] },
      { id: "UC66CXCqyFbN3wkhw1cDP3yg", label: "茄子阿光",   keywords: ["茶帽瑪緹精華"],                            excludeKeywords: ["歌回剪輯"] },
    ],

    scheduleVideoId:  "_Xf6y0jkl-Q",
    spreadsheetLabel: "瑪緹的大小事",
    scheduleTitle:    "瑪緹的行程表",

    refSheets: [
      { version: "Ver 1.0",          url: "images/茶帽瑪緹 v1.0.jpg" },
      { version: "粉絲形象 警察杯杯", url: "images/茶帽瑪緹_警察杯杯.jpg" },
    ],

    songStatsPublishedId: "2PACX-1vRFvbUbnCktCj_QjMNi8szeTM_K8pm71coRd2yyjVetGsN-rgMNv9VH-sMYO-TVXiYxDwU6ZI4Qmn6F",
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
      { context: "", text: "怎麼啦小寶貝" },
      { context: "", text: "吧哺啦！！！" },
      { context: "", text: "這是真的嗎？？" },
      { context: "", text: "買" }
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
      {id:"D_Qysz55C-A",title:"【終末地】We are Empire／希洛萊昂【cover】",date:"2026-02-08"},
      {id:"DJwAuzVk_zY",title:"【Alluria】「INFINITY」／Shu Yamino × Sonny Brisko【COVER】",date:"2025-11-08"},
      {id:"-ddVFG87Bm8",title:"【歌ってみた】乙女解剖 ／希洛萊昂 【Cover】",date:"2025-05-11"},
      {id:"wDaaJ0Sv8MU",title:"【歌ってみた】深昏睡 (Deep coma)／希洛萊昂 【Cover】",date:"2024-12-25"},
      {id:"Xz_BeaCUaZ4",title:"【歌ってみた】泡沫の夜／希洛萊昂 【Cover】",date:"2024-04-26"},
      {id:"P7rG4PrZIIY",title:"【歌ってみた】KING ／希洛萊昂 【Cover】",date:"2024-04-06"},
    ],
    shorts: [
      {id:"H_tYYxKvaCE",title:"【嘎吼】慶祝嘎嘎1歲生日！！對拿拿們的感謝小短片！【希洛萊昂】",date:"2024-07-19"},
    ],
    originals_manual: [],
    premiere: [],
    general: [
      {id:"wMmaUjzsQG4",title:"【Vtuber一問一答】不可能出道快2年才在做這個吧？新人Vtuber？【希洛萊昂Shiro Leon】",date:"2025-11-16"},
      {id:"mMkSbBIAkrY",title:"Alluria 1.5 Anniversary: The Secret Agent | Shiro Leon Route",date:"2025-11-09"},
      {id:"ePv6TRzww8A",title:"【3/14 活動預告】期間限定執事咖啡廳，開張。【希洛萊昂 Shiro Leon】",date:"2025-03-13"},
      {id:"GokdhuEC0gI",title:"【官方精華】又又又忘記關麥克風的嘎嘎對話篇【希洛萊昂 Shiro Leon】",date:"2025-03-09"},
      {id:"tRA6jGl42y8",title:"【12/23】帕魯大改版！趕緊來抓新拿拿加入我們王國禁衛軍【希洛萊昂 Shiro Leon】",date:"2024-12-23"},
      {id:"iHynGvCcdjA",title:"【12/06】帕魯王國初次的石板大戰！還有聯誼茶會【希洛萊昂 Shiro Leon】",date:"2024-12-06"},
      {id:"szZAR6DS-N4",title:"【1201】久違的帕魯，趕緊練等迎接之後的大改版！捕捉新拿拿【希洛萊昂 Shiro Leon】",date:"2024-12-06"},
      {id:"kdDdGlV1obo",title:"【1120】戰神#3 繼續上山拜拜掃墓之旅【希洛萊昂 Shiro Leon】",date:"2024-11-20"},
      {id:"LIyyZ71X6Cc",title:"【1106】戰神#2 亞洲家長管小孩範本的冒險之旅【希洛萊昂 Shiro Leon】",date:"2024-11-10"},
      {id:"MdApZ4y-Zeg",title:"【1030】戰神啟痛！這麼父慈子孝感人熱淚的遊戲怎麼現在才玩？【希洛萊昂 Shiro Leon】",date:"2024-11-10"},
      {id:"io4_KBAe7xs",title:"「【PalWorld】第二據點重建　讓帕魯王國持續偉大！【希洛萊昂 Shiro Leon】#萊覲見 #初見歓迎」",date:"2024-10-20"},
      {id:"zpLvUYygMew",title:"【官方精華】瘋狂推廣IDOLiSH7 的那個男人【希洛萊昂】",date:"2024-06-17"},
      {id:"8oPSlLpht-Y",title:"【輕聲希語】哄睡故事－小王子全集　床邊故事無雜談廣告【希洛萊昂】",date:"2024-06-02"},
      {id:"UuCshPMGSbo",title:"【官方精華】國王？爸爸？用著最平穩的聲音說著最驚人的話？【希洛萊昂】",date:"2024-05-20"},
    ],
    vlog: [],
    commerce: [],
    memberVideos: [],

    // 小知識
    fanName: "拿拿",
    hashTags: [
      { label: "Livetag",  tag: "#萊覲見"      },
      { label: "Fanart",   tag: "#希飯art"      },
      { label: "Memetag",  tag: "#希的meme帽帽" },
      { label: "Fanname",  tag: "#拿拿"         },
      { label: "粉絲剪輯", tag: "#希有精華"     },
      { label: "周邊展示", tag: "#天天開希"     },
    ],
    futureGoals: [
      "養嘎",
    ],
    triviaLikes: [
      { label: "喜歡的角色",        items: ["八乙女樂(快急死希爸、假面騎士)"] },
      { label: "喜歡的ACG",         items: ["反逆的魯魯修", "黑之契約者", "彈丸論破", "Fate/stay night"] },
      { label: "阿嘎喜歡的動畫",    items: ["Bebefinn", "可愛巧虎島", "狗狗汪汪隊", "來自深淵(?)"] },
    ],


    musicClipsChannelIds: [
      { id: "UCuq11vOzrVqirACayTyRMHg", label: "月桂葉香包", keywords: ["希洛萊昂", "ShiroLeon"], typeKeywords: ["合唱", "歌切", "歌回", "songlist", "兒歌", "cover"] },
      { id: "UCDql68LqPiQmpGH-tq4jI_g", label: "程憂", keywords: ["希洛萊昂", "ShiroLeon", "alluria"], typeKeywords: ["歌切", "cover", "線下連動"], excludeKeywords: ["鯨諾", "whalefall", "魁kai", "穆克蕗", "mukuru", "涅爾菲", "nyrfier"] },  // Alluria 線下連動合唱
    ],

    videoClipsChannelIds: [
      { id: "UCuq11vOzrVqirACayTyRMHg", label: "月桂葉香包", keywords: ["希洛萊昂", "ShiroLeon"], excludeKeywords: ["合唱", "歌切", "歌回", "songlist", "兒歌", "cover"] },
      { id: "UCkWWf4NpdWKjcmab-mcbV3Q", label: "貓mao",      keywords: ["希洛萊昂", "ShiroLeon"], excludeKeywords: ["卡祖笛"] },
      { id: "UCDql68LqPiQmpGH-tq4jI_g", label: "程憂", keywords: ["希洛萊昂", "ShiroLeon", "alluria"], excludeKeywords: ["鯨諾", "whalefall", "魁kai", "穆克蕗", "mukuru", "涅爾菲", "nyrfier", "國境之南"] },
    ],

    scheduleVideoId:  "TYDgPZbXl34",
    spreadsheetLabel: "希洛的大小事",
    scheduleTitle:    "希洛的行程表",

    refSheets: [
      { version: "Ver 1.0",       urls: ["images/希洛萊昂 v1.0.jpg", "images/希洛萊昂 v1.0-1.jpg"] },
      { version: "Ver 2.0",       url:  "images/希洛萊昂 v2.0.jpg"  },
      { version: "粉絲形象 拿拿", url:  "images/希洛萊昂_拿拿.jpg"  },
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
    id: "BarkBarkPomi",
    name: "百百波美",
    nameEn: "BarkBarkPomi",
    group: "預見娛樂",
    generation: "四期生",
    avatar: "https://pbs.twimg.com/profile_images/1995498526294609920/tSOMou_Y_400x400.jpg",
    coverImage: "https://pbs.twimg.com/profile_banners/1735595865698607104/1758886688/1500x500",
    bgmVideoId: "IUT2J3KviC0",
    bgmLabel:   "狗勾米米大冒險",
    tagline: "",
    taglines: [
      { context: "", text: "艾連是我老公" },
      { context: "", text: "好色喔" }
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
      {id:"uDdSMgaKxcM",title:"【寄り酔いTipsy | 和ぬかWanuka】Cover 🍷 百百波美 ⌇ BarkBarkPomi",date:"2026-04-11"},
      {id:"YV2CET4jgT0",title:"【キャラクターCharacter | 緑黄色社会】Cover ✨ 百百波美 ⌇ BarkBarkPomi",date:"2026-04-01"},
      {id:"8synTxKI4Vs",title:"【愛♡スクリ～ム！中文版 | AiScReam】Cover ❤️  @Nekokaifuka22 @cocor0_0303 @uchififi 音雲漫步計畫 ⌇ BarkBarkPomi",date:"2025-12-31"},
      {id:"UTOzpslzMV8",title:"【뛰어 JUMP | BLACKPINK】Cover ⚜️ 百百波美 ⌇ BarkBarkPomi",date:"2025-07-21"},
      {id:"IXWLtO5lBL4",title:"【第六感 | Reol】Cover ⚡ 百百波美 ⌇ BarkBarkPomi",date:"2025-04-11"},
      {id:"ZTZGFTKUduU",title:"【怪獣の花唄 | Vaundy】Cover 💐 百百波美 ⌇ BarkBarkPomi",date:"2024-08-24"},
      {id:"WcoRVwhVOiU",title:"【宇宙散步 | DECO*27】Cover 🛸 百百波美 ⌇ BarkBarkPomi",date:"2024-08-03"},
      {id:"Rz5IHkSNgDM",title:"【唱 Show | Ado】Cover 🎙️ 百百波美 ⌇ BarkBarkPomi",date:"2024-07-06"},
    ],
    shorts: [
      {id:"1JqpDh4Na5M",title:"【上車舞】預見娛樂 超大型上車舞神降臨!!! 🛸💨 百百波美 ⌇ BarkBarkPomi",date:"2025-11-16"},
      {id:"YIZQ1PyVA9A",title:"【原創曲試聽 | Original Song】この冷たい感情は。涙 💧 百百波美 ⌇ BarkBarkPomi",date:"2025-04-12"},
      {id:"ZYVcoi-H6iM",title:"【初配信🛸 9/12(四) 20:00】𝗖𝗵𝗿𝗼𝗻𝗼𝗻𝗮𝘂𝘁｜百百波美 BarkBarkPomi【音雲漫步計畫】",date:"2024-08-21"},
    ],
    originals_manual: [
      {id:"IUT2J3KviC0",title:"【原創曲 | Original Song】狗勾米米大冒險【Official MV】 🛸💨 百百波美 ⌇ BarkBarkPomi",date:"2026-04-12"},
    ],
    premiere: [
      {id:"KqG04bHCFaU",title:"【官方初配信精華】展現大人魅力的偶像？這...這就是我要的清涼照！？ 🛸💨 百百波美 ⌇ BarkBarkPomi",date:"2024-09-19"},
    ],
    general: [
      {id:"Q9RQmpn9OVY",title:"【一週年特企】音量注意！六福村大冒險，像極了偶像團體的一天…⁉️【音雲漫步計畫】ft. @Nekokaifuka22 @BarkBarkPomi @cocor0_0303 @uchififi​",date:"2025-09-20"},
    ],
    vlog: [],
    commerce: [],
    memberVideos: [],

    // 小知識
    fanName: "*(米米)",
    hashTags: [
      { label: "LiveTag", tag: "#宇宙屁眼開通中" },
      { label: "Tag",     tag: "#美日任務"       },
      { label: "Fanart",  tag: "#百佬繪"         },
      { label: "Meme",    tag: "#美當安餒"       },
      { label: "R18",     tag: "#波美有H"        },
    ],
    futureGoals: [
      "收集一兆兆個屁眼解除屁眼詛咒",
      "辦演唱會!",
      "每天開屁眼派對嗨到天亮",
    ],
    triviaLikes: [
      { label: "擅長",         items: ["唱歌", "寫歌", "設計"] },
      { label: "喜好",         items: ["穿搭（童裝超時尚穿搭）", "裸睡"] },
      { label: "最喜歡的作品", items: ["進擊的巨人!!!and more.."] },
    ],
    triviaHates: [
      { label: "不擅長", items: ["刷牙", "打字打正雀"] },
    ],


    musicClipsChannelIds: [
      { id: "UCUxpbqNNzWup9PZXdLUS8Jw", label: "阿嗚", keywords: ["百百波美", "Pomi", "波美", "音雲漫步"], typeKeywords: ["cover", "米津玄師", "HoneyWorks", "愛言葉", "歌式"] },
    ],

    videoClipsChannelIds: [
      { id: "UCUxpbqNNzWup9PZXdLUS8Jw", label: "阿嗚",       keywords: ["百百波美", "Pomi", "波美", "音雲漫步"], excludeKeywords: ["cover", "米津玄師", "HoneyWorks", "愛言葉", "歌式"] },
      { id: "UCbZrLw_Lmq062fhqdsShr5w", label: "妮妮子nini", keywords: ["百百波美", "Pomi", "波美", "音雲漫步"] },
      { id: "UCBdIlFj6vWDxU_m-PyM3aPQ", label: "bikaxu", keywords: ["百百波美", "Pomi", "波美", "音雲漫步"], excludeKeywords: ["cover", "歌ってみた"] },
    ],

    scheduleVideoId:  "bSPwY0KHks4",
    spreadsheetLabel: "波美的大小事",
    scheduleTitle:    "波美的行程表",

    refSheets: [
      { version: "Ver 1.0",       url: "images/百百波美 v1.0.jpg"  },
      { version: "粉絲形象 米米", url: "images/百百波美_米米.png" },
    ],

    songStatsGids: {
      "2026": "1197900768",
      "2025": "2141809526",
      "2024": "1583821169",
    },

    color: "#D03869"   // 百百波美 代表色（玫紅）
  },

  {
    id: "cocor0",
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
      {id:"2Npb6-rX-1E",title:"𝐌𝐢𝐥𝐞𝐭 - 𝐓𝐡𝐞 𝐒𝐭𝐨𝐫𝐲 𝐨𝐟 𝐔𝐬 / 心 𝐜𝐨𝐜𝐨𝐫𝟎 𝐂𝐎𝐕𝐄𝐑【𝐂𝐂中文字幕】",date:"2026-03-03"},
      {id:"_ywKD3BRFCE",title:"🎵劍紙三國（清新ver.💕） / 心 𝗰𝗼𝗰𝗼𝗿𝟬 𝗖𝗢𝗩𝗘𝗥 #劍紙三國",date:"2026-02-16"},
      {id:"059cl48SJZs",title:"フォニイ phony  / 心 𝗰𝗼𝗰𝗼𝗿𝟬 歌ってみた【CC中文字幕】(無混音)",date:"2025-09-23"},
      {id:"DF2U3UNYjH4",title:"Bunny Girl  / 心 𝗰𝗼𝗰𝗼𝗿𝟬 𝗖𝗢𝗩𝗘𝗥【CC中文字幕】",date:"2025-09-16"},
      {id:"j2MXlB1gu_I",title:"Radio (Dum Dum) / 心 𝗰𝗼𝗰𝗼𝗿𝟬 𝗖𝗢𝗩𝗘𝗥【CC中文字幕】",date:"2025-09-13"},
      {id:"HLZDqjHI5Xs",title:"佐賀事変 / 音雲漫步計畫 𝗖𝗢𝗩𝗘𝗥 𝗯𝘆 @Nekokaifuka22 , @BarkBarkPomi , @cocor0_0303 , @uchififi​ 【CC中文字幕】",date:"2025-09-06"},
      {id:"WATf7LdaQJk",title:"風のたより / 心 𝗰𝗼𝗰𝗼𝗿𝟬 𝗖𝗢𝗩𝗘𝗥",date:"2025-03-29"},
      {id:"xRc801WM8NM",title:"心做し 𝗞𝗼𝗸𝗼𝗿𝗼𝗻𝗮𝘀𝗵𝗶 / 心 𝗰𝗼𝗰𝗼𝗿𝟬 𝗖𝗢𝗩𝗘𝗥",date:"2024-08-27"},
      {id:"UYNtP1kPjaM",title:"鬼ノ宴 𝗢𝗻𝗶 𝗡𝗼 𝗨𝘁𝗮𝗴𝗲 / 心 𝗰𝗼𝗰𝗼𝗿𝟬 𝗖𝗢𝗩𝗘𝗥",date:"2024-08-06"},
      {id:"m21ZGrJBYGs",title:"「僕は...」Boku wa / 心 𝗰𝗼𝗰𝗼𝗿𝟬 𝗖𝗢𝗩𝗘𝗥",date:"2024-07-09"},
    ],
    shorts: [
      {id:"qYx_Nlwkd0Y",title:"【初配信💜𝟵/𝟭𝟯 (五) 𝟮𝟬:𝟬𝟬】𝟵𝟵.𝟵% 𝗔𝗻𝗱𝗿𝗼𝗶𝗱｜心 𝗰𝗼𝗰𝗼𝗿𝟬【音雲漫步計畫】",date:"2024-08-21"},
    ],
    originals_manual: [],
    premiere: [
      {id:"LLhY9ChlhGc",title:"【💜初配信精華】全球首見 .ᐟ.ᐟ 99.9%仿生人💜｜心 𝗰𝗼𝗰𝗼𝗿𝟬",date:"2024-09-18"},
    ],
    general: [
      {id:"T3cKgabID2I",title:"【心cocor0精華】我才沒有這麼本 ಠ_ಠ｜OUTLAST 絕命精神病院 2｜心 𝗰𝗼𝗰𝗼𝗿𝟬",date:"2025-02-19"},
    ],
    vlog: [],
    commerce: [],
    memberVideos: [],

    // 小知識
    fanName: "牙牙",
    hashTags: [
      { label: "FA",   tag: "#塗塗可可"   },
      { label: "剪輯", tag: "#可可出乃玩" },
      { label: "分享", tag: "#心哥請看"   },
      { label: "R18",  tag: "#co以瑟瑟"  },
    ],
    futureGoals: [
      "唱很多很多歌給大家聽",
      "認識新朋友一起玩遊戲、做企劃",
      "初配信收到1,000個讚讚",
      "辦一場演唱會",
    ],
    triviaExtra: [
      { label: "未來會在地球做哪些事情", items: ["各種療癒的陪伴！", "地球人類觀察報告", "遠大的交朋友計畫"] },
    ],
    triviaLikes: [
      { label: "喜歡的東西", items: ["肉!!很多的肉!!", "軟綿綿的東西", "甜點（棉被、抱枕、棉花糖、奶蓋、舒芙蕾）"] },
      { label: "喜歡的口味", items: ["草莓", "巧克力"] },
    ],
    triviaHates: [
      { label: "討厭的事情", items: ["靜電", "過敏", "出門"] },
    ],


    musicClipsChannelIds: [
      { id: "UCUxpbqNNzWup9PZXdLUS8Jw", label: "阿嗚", keywords: ["心cocor0", "cocor0", "可可", "音雲漫步"], typeKeywords: ["cover"] },
    ],

    videoClipsChannelIds: [
      { id: "UCUxpbqNNzWup9PZXdLUS8Jw", label: "阿嗚", keywords: ["心cocor0", "cocor0", "可可", "音雲漫步"], excludeKeywords: ["cover"] },
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
    id: "UchiFifi",
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
      { context: "", text: "吃答辯吧" },
      { context: "", text: "蛤？" }
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
      {id:"Ci5HabhQB_g",title:"【歌ってみた/Cover】旦那様とのラブラブ・ラブソング/釘宮理惠【羽芝扉扉 Uchi Fifi】",date:"2026-03-12"},
      {id:"35apHWg7RbY",title:"【歌ってみた/Cover】昭陽/祖婭納惜X三無【羽芝扉扉 Uchi Fifi】",date:"2025-10-05"},
      {id:"ylMfcJHAFig",title:"【Cover】HUNTRIX - How It's Done(KPop Demon Hunters) ft. @BarkBarkPomi 【羽芝扉扉 Uchi Fifi】",date:"2025-07-07"},
      {id:"uukmLec6pCw",title:"【歌ってみた/Cover】我在紐約打電話給你／魏如萱【羽芝扉扉 Uchi Fifi】",date:"2025-02-13"},
      {id:"pJ--mECAPjM",title:"【歌ってみた/Cover】虎視眈々/梅とら【羽芝扉扉 Uchi Fifi】",date:"2025-02-07"},
      {id:"RfDzwPEfVqc",title:"【歌ってみた/Cover】あなたがいることで／Uru【羽芝扉扉 Uchi Fifi】",date:"2024-08-26"},
      {id:"Y4khLXkJ1W4",title:"【歌ってみた/Cover】心予報／Eve【羽芝扉扉 Uchi Fifi】",date:"2024-08-05"},
      {id:"OitEWgR4lPE",title:"【歌ってみた/Cover】人間不值得／黃詩扶【羽芝扉扉 Uchi Fifi】",date:"2024-07-08"},
    ],
    shorts: [
      {id:"5kNCGnPuaIA",title:"【初配信💕9/14(六) 20:00】Signal Fairy｜羽芝扉扉【音雲漫步計畫】",date:"2024-08-21"},
    ],
    originals_manual: [],
    premiere: [
      {id:"xCUlxTJh9nI",title:"【官方初配信精華】正宗白衣天使教你治療DD症♡同場佳映ASMR XXX福利?!【羽芝扉扉 Uchi Fifi】",date:"2024-09-19"},
    ],
    general: [
      {id:"2iGHMeviPDk",title:"【ASMR中文音聲】那一夜的水族館之戀♡ ｜耳かき/水族音/囁き/親吻【羽芝扉扉 Uchi Fifi】",date:"2026-05-29"},
      {id:"fzzsEochLVA",title:"【音聲試聽】每個成功的男人背後都需要瘋狂雙修 #3dio #ASMR #中文音聲【羽芝扉扉 Uchi Fifi】",date:"2026-05-22"},
      {id:"eTxRk8iRHn4",title:"【作業用BGM】2HR扉扉音樂盒♡不管放晴或雨天都需要喜歡你的歌【羽芝扉扉 Uchi Fifi】",date:"2026-01-19"},
      {id:"hiGG92mv3Vk",title:"【生日情境劇】只想成為專屬你的每日WIFE💕",date:"2026-01-15"},
      {id:"qWr7weunlL8",title:"【音聲試聽】極致甜蜜純愛♡醫生...請好好的看著我 #KU100 #ASMR #中文音聲【羽芝扉扉 Uchi Fifi】",date:"2025-09-14"},
      {id:"Vji-MYFyQDA",title:"【FF45線下活動】FF第一天♡立旗！互動！用泳裝迎接熱情的你們💕【羽芝扉扉 Uchi Fifi】",date:"2025-08-22"},
      {id:"l4QiQ_moUnU",title:"【音雲漫步計畫】春日影/BanG Dream! MyGO!!!!!【羽芝扉扉 Uchi Fifi】ft. @Nekokaifuka22 @BarkBarkPomi @cocor0_0303",date:"2025-06-01"},
      {id:"dxai9gPLSwQ",title:"【ASMR中文音聲】與你相約的那個日落♡約好囉一輩子 ｜耳かき/海浪聲/囁き【羽芝扉扉 Uchi Fifi】",date:"2025-05-23"},
      {id:"8TTdWVnu138",title:"【作業用BGM】1HR扉扉音樂盒♡用甜蜜充滿感情的歌陪伴你【羽芝扉扉 Uchi Fifi】",date:"2025-05-22"},
      {id:"i1h0KrL5ZuI",title:"【哄睡歌回】輕輕用這些歌伴你入睡♡【羽芝扉扉 Uchi Fifi】",date:"2025-05-04"},
      {id:"KjgaCQdiO_w",title:"【ASMR音聲試聽】遠距離後的極致甜蜜約會♡【羽芝扉扉 Uchi Fifi】",date:"2025-03-13"},
    ],
    vlog: [],
    commerce: [],
    memberVideos: [],

    // 小知識
    fanName: "扉芝粉",
    hashTags: [
      { label: "Live（通用/直播相關）", tag: "#扉出來啦"   },
      { label: "Fan art",              tag: "#扉常想畫"   },
      { label: "迷因",                 tag: "#扉常迷因"   },
      { label: "R18",                  tag: "#想入扉扉"   },
    ],
    futureGoals: [
      "希望大家可以按讚直播",
      "目標銀盾",
      "3D LIVE演唱會!",
      "讓大家得扉扉成癮症",
    ],
    triviaLikes: [
      { label: "喜歡的東西",   items: ["辣 - 49.5%", "心理學、占卜 - 14.85%", "ACG、KPOP - 11.88%", "芋頭火鍋 - 11.88%", "臭臭的東西 - 11.88%"] },
      { label: "之後想做的事情", items: ["歌回", "ASMR", "各種企劃和雜談", "一點點的遊戲"] },
    ],
    triviaHates: [
      { label: "討厭的東西", items: ["蟲蟲"] },
      { label: "不擅長",     items: ["對齊"] },
    ],


    musicClipsChannelIds: [
      { id: "UCUxpbqNNzWup9PZXdLUS8Jw", label: "阿嗚", keywords: ["羽芝扉扉", "Uchi Fifi", "扉扉", "音雲漫步"], typeKeywords: ["cover", "嘉賓"] },
    ],

    videoClipsChannelIds: [
      { id: "UCUxpbqNNzWup9PZXdLUS8Jw", label: "阿嗚", keywords: ["羽芝扉扉", "Uchi Fifi", "扉扉", "音雲漫步"], excludeKeywords: ["cover", "嘉賓"] },
      { id: "UCBdIlFj6vWDxU_m-PyM3aPQ", label: "bikaxu", keywords: ["羽芝扉扉", "Uchi Fifi", "扉扉", "音雲漫步"], excludeKeywords: ["cover", "歌ってみた"] },
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
    taglines: [
      { context: "", text: "你又沒有教我" },
      { context: "", text: "我哪有" },
      { context: "", text: "你今天有開心嗎" }
    ],
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
      {id:"2zgw-HgrbBE",title:"I'm Alive / 李杰明 W.M.L x 陳忻玥 Vicky Chen【男生雙人翻唱】❆ 諾恪里 x 艾斯珀達 cover",date:"2026-05-30"},
      {id:"U8SxZ16wzgw",title:"【CaKano】CH4NGE / Giga ❆ 1st Anniversary (cover)",date:"2026-04-18"},
      {id:"71ctx3MjPXs",title:"【歌ってみた】IRIS OUT / 米津玄師 ❆ 諾恪里Nokori (cover)",date:"2025-11-10"},
      {id:"v38OftyVtlM",title:"【1人2役】プロポーズ / 内緒のピアス ❆ 諾恪里Nokori (cover)",date:"2025-10-19"},
      {id:"47KrXrkTHHg",title:"ACTOR / 友成空【歌ってみた】❆ 諾恪里Nokori cover",date:"2025-03-21"},
    ],
    shorts: [],
    originals_manual: [],
    premiere: [
      {id:"uY9FgGHIaP0",title:"【官方初配信精華】奇蹟?魔法? 擅長繪畫與變聲的年下狐狐? | ❆ 諾恪里Nokori",date:"2025-04-25"},
    ],
    general: [
      {id:"F8vW0q6uRa4",title:"【前導故事】本子危險！在小黃書尋求魔法是否搞錯了什麼? (｡• ω•｡)つ—☆ • * ｡ | ❆ 諾恪里Nokori",date:"2025-04-24"},
    ],
    vlog: [],
    commerce: [],
    memberVideos: [],

    // 小知識
    fanName: "諾米糰子",
    hashTags: [
      { label: "LIVE", tag: "#看這里" },
      { label: "ALL",  tag: "#里里叩叩" },
      { label: "ART",  tag: "#畫給里" },
      { label: "MEME", tag: "#恪了什麼" },
      { label: "18+",  tag: "#恪以瑟瑟" },
      { label: "FOOD", tag: "#來一恪" },
    ],
    futureGoals: [
      "在人類世界生存（養活自己）",
      "結交很多新朋友！",
      "喜歡自己",
      "最重要是成為!!馬猴燒酒!!",
    ],
    triviaLikes: [
      { label: "喜歡的食物", items: ["章魚燒", "鰻魚飯", "拉麵", "珍珠奶茶", "香蕉", "鳳梨"] },
      { label: "喜歡的角色", items: ["咖醬"] },
      { label: "喜歡的面容", items: ["金黃髮"] },
      { label: "喜歡的歌手", items: ["Ado"] },
      { label: "喜歡的唱見", items: ["ふぉるて", "DAZBEE（還有很多）"] },
    ],
    triviaHates: [
      { label: "不喜歡的味道", items: ["最討厭：紅蘿蔔、茄子", "勉強接受：芋頭、苦瓜、三色豆、香菜、魚"] },
    ],
    triviaExtra: [
      { label: "注意事項", items: ["不能吃辣", "蝦子過敏"] },
    ],


    // ── 熱門音樂剪輯（歌回 / 唱歌）──────────────────
    musicClipsChannelIds: [
      { id: "UCEGbez6s8Y8P_5julxNh7jA", label: "Ariel 月", keywords: ["諾恪里", "Nokori", "CaKano"], typeKeywords: ["cover", "歌ってみた"], excludeKeywords: ["崎塔", "chita"] },
    ],

    // ── 熱門影片精華──────────────────────────────────
    videoClipsChannelIds: [
      { id: "UCbZrLw_Lmq062fhqdsShr5w", label: "妮妮子nini",  keywords: ["諾恪里", "小心結天團"] },
      { id: "UCMjxlxGJXiWyiSYcgYdvpMg", label: "miiyaミイヤ", keywords: ["諾恪里", "Nokori", "CaKano"] },
      { id: "UCEGbez6s8Y8P_5julxNh7jA", label: "Ariel 月", keywords: ["諾恪里", "Nokori", "CaKano"], excludeKeywords: ["cover", "歌ってみた", "崎塔", "chita"] },
    ],

    scheduleVideoId:  "Od2Sczr6wmw",
    spreadsheetLabel: "諾諾的大小事",
    scheduleTitle:    "諾諾的行程表",

    refSheets: [
      { version: "Ver 1.0",          url: "images/諾恪里 v1.0.jpg"      },
      { version: "粉絲形象 諾米糰子", url: "images/諾恪里_諾米糰子.jpg" },
    ],

    songStatsPublishedId: "2PACX-1vT7RbQBkhS751OdsTc03TzCtd1RsEeqg5EXfMHsb4S9dmYpWfhmInP4Eohsbfvcut6RvDTsS5fWRK44",
    songStatsGids: {
      "2026": "2008032412",
      "2025": "1583821169",
    },

    color: "#FBC4EF"   // 諾恪里 代表色（夢幻粉）
  },

  {
    id: "KeKeMii",
    name: "克克米伊",
    nameEn: "KeKeMii",
    group: "預見娛樂",
    generation: "五期生",
    avatar: "https://pbs.twimg.com/profile_images/2052756867378798592/6X8FR751_400x400.jpg",
    coverImage: "https://pbs.twimg.com/profile_banners/1888131663596748800/1745276220/1500x500",
    tagline: "",
    taglines: [
      { context: "初配信", text: "度、BANG" },
      { context: "", text: "事實" },
      { context: "", text: "能懂能懂" },
      { context: "爆言或想歪時", text: "阿密豆腐" },
      { context: "", text: "心中有菩薩，看什麼都是菩薩" }
    ],
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
      {id:"A1IM8JblRRw",title:"歡迎合唱哦 ! !  浴火成詩cover - 克克米伊(男聲部分)",date:"2026-02-14"},
      {id:"TuHDyBq42EM",title:"最後一頁 - Cover 【克克米伊】",date:"2025-03-21"},
    ],
    shorts: [],
    originals_manual: [],
    premiere: [
      {id:"z2x0Gyq3abE",title:"【初配信精華】關於我失控的那一天... | 克克米伊",date:"2025-04-26"},
    ],
    general: [
      {id:"TANQE07SDDo",title:"【twitch存檔】繼續看大家的TAG ! #2 (耐久接續",date:"2025-12-05"},
      {id:"pdqnwfb5zR0",title:"【被迫離家】人類世界真的有好多好吃的ʕ•́ ᴥ •̀ ʔ | 克克米伊",date:"2025-04-23"},
    ],
    vlog: [],
    commerce: [],
    memberVideos: [],

    // 小知識
    fanName: "",


    musicClipsChannelIds: [
      { id: "UCMjxlxGJXiWyiSYcgYdvpMg", label: "miiyaミイヤ", keywords: ["克克米伊", "KeKeMii", "米伊", "CaKano"], typeKeywords: ["歌切", "cover"] },
      { id: "UCbNA4tD_skq8CQF2aMTx9cA", label: "月芊",     keywords: ["克克米伊", "KeKeMii", "米伊", "CaKano"], typeKeywords: ["歌切", "cover", "歌回", "合唱", "線下連動"] },
      { id: "UCEGbez6s8Y8P_5julxNh7jA", label: "Ariel 月", keywords: ["克克米伊", "KeKeMii", "米伊"], typeKeywords: ["cover", "歌ってみた"] },
    ],

    videoClipsChannelIds: [
      { id: "UCbZrLw_Lmq062fhqdsShr5w", label: "妮妮子nini",  keywords: ["克克米伊", "KeKeMii", "米伊", "CaKano"] },
      { id: "UCMjxlxGJXiWyiSYcgYdvpMg", label: "miiyaミイヤ", keywords: ["克克米伊", "KeKeMii", "米伊", "CaKano"], excludeKeywords: ["歌切", "cover"] },
      { id: "UCEGbez6s8Y8P_5julxNh7jA", label: "Ariel 月", keywords: ["克克米伊", "KeKeMii", "米伊"], excludeKeywords: ["cover", "歌ってみた"] },
    ],

    scheduleVideoId:  "q5bBqi8DUc8",
    spreadsheetLabel: "米伊的大小事",
    scheduleTitle:    "米伊的行程表",

    refSheets: [
      { version: "Ver 1.0",       url: "images/克克米伊 v1.0.jpg"  },
      { version: "粉絲形象 嘎米", url: "images/克克米伊_嘎米.jpg" },
    ],

    songStatsPublishedId: "2PACX-1vRqKlgOc4TjZWtHw6syOQR1BiHSj-Lab61begqI1ZAxvLaaWtA1OA208eHJPeqbf6EEnnEkcXQR1D_j",
    songStatsGids: {
      "2026": "1841739730",
      "2025": "1583821169",
    },

    // 小知識
    fanName: "嘎米Gummy",
    hashTags: [
      { label: "萬能", tag: "#萬中選伊" },
      { label: "繪圖", tag: "#畫伊畫 #再畫伊畫" },
      { label: "剪輯", tag: "#剪伊剪" },
      { label: "迷因", tag: "#克克米因" },
      { label: "周邊", tag: "#課課米伊" },
      { label: "18+",  tag: "#伊哭走" },
    ],
    futureGoals: [
      "☐ 兩年內達到十萬訂閱！",
      "☐ 能被逞法遊戲逞罰",
      "☐ 征服全世界",
      "☐ 娶一個鹽酥雞攤回家",
      "☑ 初配信的按讚超過1000",
    ],
    triviaLikes: [
      { label: "喜歡的食物", items: ["鹽酥雞", "薯條", "章魚燒"] },
      { label: "喜歡的屬性", items: ["白髮角色"] },
    ],
    triviaHates: [
      { label: "不喜歡的食物", items: ["龍蝦", "鮑魚", "帝王蟹", "香菇", "木耳", "秋葵", "勾芡", "蛞蝓", "<s>伊比利豬</s>", "<s>黑鮪魚中腹</s>", "<s>A5和牛</s>"] },
    ],

    color: "#FFCB55"   // 克克米伊 代表色（蜂蜜黃）
  },

  // ── 六期生 ─────────────────────────────────────
  {
    id: "Pele",
    name: "珮蕾",
    nameEn: "Pele.",
    group: "預見娛樂",
    generation: "六期生",
    avatar: "https://pbs.twimg.com/profile_images/2011801229165559809/gqkdH927_400x400.jpg",
    coverImage: "https://pbs.twimg.com/profile_banners/1933073377113354240/1760704308/1500x500",
    tagline: "幹幹幹",
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
      {id:"NqrevkrJOoc",title:"【 我愛你-上海蟹 】cover / 珮蕾pele",date:"2026-02-14"},
      {id:"Nu1FICbgoPw",title:"【ワールドイズマイン/世界第一的公主殿下 】cover / 珮蕾pele",date:"2025-10-25"},
    ],
    shorts: [],
    originals_manual: [],
    premiere: [],
    general: [
      {id:"Uykcm_BF12Y",title:"【官方精華】要是我在異世界變成這樣，你們還會愛我嗎 #萬物皆可蟹",date:"2026-05-18"},
      {id:"Ic-v5r-eDPc",title:"［夢之形］這是我最後一次說『最後一把』...真的。",date:"2026-03-28"},
      {id:"RtCc_0E2Zs0",title:"【官方精華 】就是你，跟我簽訂契約吧 ~ ♪  / 珮蕾pele",date:"2025-12-20"},
    ],
    vlog: [],
    commerce: [],
    memberVideos: [],

    // 小知識
    fanName: "",


    musicClipsChannelIds: [
      { id: "UCUxpbqNNzWup9PZXdLUS8Jw", label: "阿嗚",         keywords: ["珮蕾", "Pele", "公主", "漢堡", "ælis"],      typeKeywords: ["cover", "嘉賓"] },
      { id: "UC66CXCqyFbN3wkhw1cDP3yg", label: "茄子阿光",     keywords: ["珮蕾歌回剪輯"] },
    ],

    videoClipsChannelIds: [
      { id: "UCUxpbqNNzWup9PZXdLUS8Jw", label: "阿嗚",           keywords: ["珮蕾", "Pele", "公主", "漢堡", "ælis"],                               excludeKeywords: ["cover", "嘉賓"] },
      { id: "UCbZrLw_Lmq062fhqdsShr5w", label: "妮妮子nini",     keywords: ["珮蕾", "Pele", "公主", "漢堡", "ælis"] },
      { id: "UC7KF3UyPn2SFM-3oLApYYSQ", label: "ミちゃんmichan", keywords: ["珮蕾精華", "珮蕾Pele"],                        excludeKeywords: ["歌切", "cover", "歌回", "合唱", "線下連動"] },
      { id: "UC66CXCqyFbN3wkhw1cDP3yg", label: "茄子阿光",       keywords: ["珮蕾精華", "珮蕾&梅奧奧精華"],                 excludeKeywords: ["歌回剪輯"] },
    ],

    scheduleVideoId:  "xjmx-OXRdUg",
    spreadsheetLabel: "公主的大小事",
    scheduleTitle:    "公主的行程表",

    refSheets: [
      { version: "Ver 1.0",        url: "images/珮蕾 v1.0.jpg" },
      { version: "粉絲形象 珮偶",   url: "images/珮蕾_珮偶.jpg" },
    ],

    songStatsPublishedId: "2PACX-1vR3aeWo71SY7CDYdik5DRDUoVHEv4SuSOyiMY8-naejYnceKBuhqsNzSAfRKQRVj8cUzzCCSHhPO5CI",
    songStatsGids: {
      "2026": "1311275024",
      "2025": "1583821169",
    },

    color: "#EF9494"   // 珮蕾 代表色（玫瑰粉）
  },

  {
    id: "Yawnii",
    name: "睏睏幽昵",
    nameEn: "Yawnii",
    group: "預見娛樂",
    generation: "六期生",
    avatar: "https://pbs.twimg.com/profile_images/2057135498200809472/-QFJQgbg_400x400.jpg",
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
      {id:"Rnv3KUovVas",title:"好玩要玩🗡️#劍紙三國🗡️‼️‼️歌ってみた ⊱⏱︎⊰ Covered by  睏睏幽昵Yawnii",date:"2026-02-20"},
      {id:"FgIqS44Flgo",title:"【ラビットホール/DECO*27 】歌ってみた  ⊱⏱︎⊰  Covered by 【睏睏幽昵Yawnii】",date:"2025-10-26"},
    ],
    shorts: [],
    originals_manual: [],
    premiere: [
      {id:"qr-3cM1NtJU",title:"【#初配信精華】♣️傳令官登場！♣️不過怎麼好像呆呆的......嗎？ ⊱⏱︎⊰ 睏睏幽昵Yawnii",date:"2025-12-19"},
    ],
    general: [],
    vlog: [],
    commerce: [],
    memberVideos: [],

    // 小知識
    fanName: "",


    // 小知識
    fanName: "",

    musicClipsChannelIds: [
      { id: "UCRqjJ9jxXdvIGdwPrtp8O0w", label: "小恩",       keywords: ["睏睏幽昵", "幽昵", "Yawnii", "ælis"] },  // 全域音樂關鍵字自動分類
      { id: "UCkdXbWulRmheqfVmV7WjaFQ", label: "台灣香蕉王", keywords: ["睏睏幽昵", "幽昵", "Yawnii", "ælis"] },
    ],

    videoClipsChannelIds: [
      { id: "UCfy_OLAzKrZH-UGBlwndP6A", label: "浮生0508",   keywords: ["睏睏幽昵", "幽昵", "Yawnii", "ælis"] },
      { id: "UCbZrLw_Lmq062fhqdsShr5w", label: "妮妮子nini", keywords: ["睏睏幽昵", "幽昵", "Yawnii", "ælis"] },
    ],

    scheduleVideoId:  "bae5xjjhMsI",
    spreadsheetLabel: "幽昵的大小事",
    scheduleTitle:    "幽昵的行程表",

    refSheets: [
      { version: "Ver 1.0",        url:  "images/睏睏幽昵 v1.0.jpg" },
      { version: "粉絲形象 歐昵醬", urls: ["images/睏睏幽昵_歐昵醬.jpg", "images/睏睏幽昵_歐昵醬_1.jpg", "images/睏睏幽昵_歐昵醬_2.jpg"] },
    ],

    songStatsPublishedId: "2PACX-1vTY5OFOY_Hp-M2rhVdBc5YXsQudgnlc8mkotq7i2zPnyf60n3iy8A401A-LgRs0c9vSepJjcf1dF5kR",
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


