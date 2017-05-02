window.senderARD =      "http://daserste_live-lh.akamaihd.net/i/daserste_de@91204/master.m3u8";
window.senderZDF =      "http://zdf1314-lh.akamaihd.net/i/de14_v1@392878/master.m3u8";
window.senderRBB =      "http://rbblive-lh.akamaihd.net/i/rbb_berlin@144674/index_7_av-p.m3u8";
window.senderArte =     "http://artelive-lh.akamaihd.net/i/artelive_de@393591/master.m3u8";
window.senderZDFneo =   "http://zdf1314-lh.akamaihd.net/i/de13_v1@392877/master.m3u8";
window.senderZDFinfo =  "http://zdf1112-lh.akamaihd.net/i/de12_v1@392882/master.m3u8";
window.sender3sat =     "http://zdf0910-lh.akamaihd.net/i/dach10_v1@392872/master.m3u8";
window.senderPhoenix =  "http://zdf0910-lh.akamaihd.net/i/de09_v1@392871/master.m3u8";
window.senderWDR =      "http://wdr_fs_geo-lh.akamaihd.net/i/wdrfs_geogeblockt@112044/master.m3u8";
window.senderNDR =      "http://ndr_fs-lh.akamaihd.net/i/ndrfs_hh@119223/master.m3u8";
window.senderBR =       "http://livestreams.br.de/i/bfsnord_germany@119898/master.m3u8";
window.senderBRalpha =  "http://livestreams.br.de/i/bralpha_germany@119899/master.m3u8";
window.senderSWR =      "http://swrrp-lh.akamaihd.net/i/swrrp_live@196739/master.m3u8";
window.senderHR =       "http://live1_hr-lh.akamaihd.net/i/hr_fernsehen@75910/master.m3u8";
window.senderSR =       "http://live2_sr-lh.akamaihd.net/i/sr_universal02@107595/master.m3u8";
window.senderONE =      "http://wdr_einsfestival-lh.akamaihd.net/i/wdr_einsfestival@328300/master.m3u8";
window.senderDW =       "http://dwstream4-lh.akamaihd.net/i/dwstream4_live@131329/master.m3u8";
window.senderKiKa =     "http://kika_geo-lh.akamaihd.net/i/livetvkika_de@75114/master.m3u8";
window.senderTagesschau24 = "http://tagesschau-lh.akamaihd.net/i/tagesschau_1@119231/master.m3u8";
window.senderMDR =      "http://mdr_th_hls-lh.akamaihd.net/i/livetvmdrthueringen_de@106903/master.m3u8";
window.senderNHK =      "http://nhkwtvglobal-i.akamaihd.net/hls/live/263941/nhkwtvglobal/index_1180.m3u8";
window.senderF24 =      "http://static.france24.com/live/F24_EN_HI_HLS/live_tv.m3u8";
window.senderRT =       "http://rt-eng-live.hls.adaptive.level3.net/rt/eng/index.m3u8";
window.senderAL =       "http://aljazeera-eng-apple-live.adaptive.level3.net/apple/aljazeera/english/800.m3u8";
window.senderABC =      "http://abclive.abcnews.com/i/abc_live4@136330/index_1200_av-p.m3u8";
window.senderN24 =      "https://live2weltcms-lh.akamaihd.net/i/Live2WeltCMS_1@444563/master.m3u8";
function load(sender){
    player.src({ type: "application/x-mpegURL", src: eval('sender'+sender) });player.play();
}
