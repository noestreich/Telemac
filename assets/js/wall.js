function getQueryParams(qs) {
    qs = qs.split('+').join(' ');

    var params = {},
        tokens,
        re = /[?&]?([^=]+)=([^&]*)/g;

    while (tokens = re.exec(qs)) {
        params[decodeURIComponent(tokens[1])] = decodeURIComponent(tokens[2]);
    }

    return params;
}

var query = getQueryParams(document.location.search);
if (query.programm){
	switch (query.programm){
		case 'ard':
			var player = videojs('telemac-video');
			player.src({ type: "application/x-mpegURL", src: "http://daserste_live-lh.akamaihd.net/i/daserste_de@91204/master.m3u8" });player.play();
			break;
		case 'zdf':
			var player = videojs('telemac-video');
			player.src({ type: "application/x-mpegURL", src: "http://zdf1314-lh.akamaihd.net/i/de14_v1@392878/master.m3u8" });player.play();
			break;
		case 'arte':
			var player = videojs('telemac-video');
			player.src({ type: "application/x-mpegURL", src: "http://artelive-lh.akamaihd.net/i/artelive_de@393591/master.m3u8" });player.play();
			break;
		case 'br':
			var player = videojs('telemac-video');
			player.src({ type: "application/x-mpegURL", src: "http://livestreams.br.de/i/bfsnord_germany@119898/master.m3u8" });player.play();
			break;
		case 'alpha':
			var player = videojs('telemac-video');
			player.src({ type: "application/x-mpegURL", src: "http://livestreams.br.de/i/bralpha_germany@119899/master.m3u8" });player.play();
			break;
		case 'hr':
			var player = videojs('telemac-video');
			player.src({ type: "application/x-mpegURL", src: "http://live1_hr-lh.akamaihd.net/i/hr_fernsehen@75910/master.m3u8" });player.play();
			break;
		case 'mdr':
			var player = videojs('telemac-video');
			player.src({ type: "application/x-mpegURL", src: "http://mdr_th_hls-lh.akamaihd.net/i/livetvmdrthueringen_de@106903/master.m3u8" });player.play();
			break;
		case 'ndr':
			var player = videojs('telemac-video');
			player.src({ type: "application/x-mpegURL", src: "http://ndr_fs-lh.akamaihd.net/i/ndrfs_hh@119223/master.m3u8" });player.play();
			break;
		case 'rbb':
			var player = videojs('telemac-video');
			player.src({ type: "application/x-mpegURL", src: "http://rbb_live-lh.akamaihd.net/i/rbb_berlin@108248/master.m3u8" });player.play();
			break;
		case 'sr':
			var player = videojs('telemac-video');
			player.src({ type: "application/x-mpegURL", src: "http://live2_sr-lh.akamaihd.net/i/sr_universal02@107595/master.m3u8" });player.play();
			break;
		case 'swr':
			var player = videojs('telemac-video');
			player.src({ type: "application/x-mpegURL", src: "http://swrrp-lh.akamaihd.net/i/swrrp_live@196739/master.m3u8" });player.play();
			break;
		case 'wdr':
			var player = videojs('telemac-video');
			player.src({ type: "application/x-mpegURL", src: "http://wdr_fs_geo-lh.akamaihd.net/i/wdrfs_geogeblockt@112044/master.m3u8" });player.play();
			break;
		case 'tagesschau24':
			var player = videojs('telemac-video');
			player.src({ type: "application/x-mpegURL", src: "http://tagesschau-lh.akamaihd.net/i/tagesschau_1@119231/master.m3u8" });player.play();
			break;
		case '3sat':
			var player = videojs('telemac-video');
			player.src({ type: "application/x-mpegURL", src: "http://zdf0910-lh.akamaihd.net/i/dach10_v1@392872/master.m3u8" });player.play();
			break;
		case 'kika':
			var player = videojs('telemac-video');
			player.src({ type: "application/x-mpegURL", src: "http://kika_geo-lh.akamaihd.net/i/livetvkika_de@75114/master.m3u8" });player.play();
			break;
		case 'phoenix':
			var player = videojs('telemac-video');
			player.src({ type: "application/x-mpegURL", src: "http://zdf0910-lh.akamaihd.net/i/de09_v1@392871/master.m3u8" });player.play();
			break;
		case 'zdfinfo':
			var player = videojs('telemac-video');
			player.src({ type: "application/x-mpegURL", src: "http://zdf1112-lh.akamaihd.net/i/de12_v1@392882/master.m3u8" });player.play();
			break;
		case 'zdfneo':
			var player = videojs('telemac-video');
			player.src({ type: "application/x-mpegURL", src: "http://zdf1314-lh.akamaihd.net/i/de13_v1@392877/master.m3u8" });player.play();
			break;
		case 'zdfkultur':
			var player = videojs('telemac-video');
			player.src({ type: "application/x-mpegURL", src: "http://zdf1112-lh.akamaihd.net/i/de11_v1@392881/master.m3u8" });player.play();
			break;
		case 'dwelle':
			var player = videojs('telemac-video');
			player.src({ type: "application/x-mpegURL", src: "http://dwstream4-lh.akamaihd.net/i/dwstream4_live@131329/master.m3u8" });player.play();
			break;
		case 'nhk':
			var player = videojs('telemac-video');
			player.src({ type: "application/x-mpegURL", src: "http://nhkwglobal-i.akamaihd.net/hls/live/222714/nhkwglobal/index_1180.m3u8" });player.play();
			break;
		case 'n24':
			var player = videojs('telemac-video');
			player.src({ type: "application/x-mpegURL", src: "http://bsn246u6-i.akamaihd.net/hls/live/237201/Live2N24CMS/index.m3u8" });player.play();
			break;
		case 'abc':
			var player = videojs('telemac-video');
			player.src({ type: "application/x-mpegURL", src: "http://abclive.abcnews.com/i/abc_live4@136330/index_1200_av-p.m3u8" });player.play();
			break;
		case 'rt':
			var player = videojs('telemac-video');
			player.src({ type: "application/x-mpegURL", src: "http://rt-lh.akamaihd.net/i/ch_01@325605/index_320p_av-p.m3u8" });player.play();
			break;
		case 'rtdoc':
			var player = videojs('telemac-video');
			player.src({ type: "application/x-mpegURL", src: "http://rt-lh.akamaihd.net/i/ch_05@325609/index_320p_av-p.m3u8" });player.play();
			break;
		case 'france24':
			var player = videojs('telemac-video');
			player.src({ type: "application/x-mpegURL", src: "http://f24hls-i.akamaihd.net/hls/live/221193/F24_EN_LO_HLS/master_500.m3u8" });player.play();
			break;
		case 'aljazeera':
			var player = videojs('telemac-video');
			player.src({ type: "application/x-mpegURL", src: "http://aljazeera-eng-apple-live.adaptive.level3.net/apple/aljazeera/english/800.m3u8" });player.play();
			break;

	}
}


