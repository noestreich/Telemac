var senderARD = "http://daserste_live-lh.akamaihd.net/i/daserste_de@91204/master.m3u8";
var senderZDF = "http://zdf1314-lh.akamaihd.net/i/de14_v1@392878/master.m3u8";
var senderRBB = "http://rbb_live-lh.akamaihd.net/i/rbb_berlin@108248/master.m3u8";
var senderArte = "http://artelive-lh.akamaihd.net/i/artelive_de@393591/master.m3u8";
var senderZDFneo = "http://zdf1314-lh.akamaihd.net/i/de13_v1@392877/master.m3u8";
var senderZDFinfo = "http://zdf1112-lh.akamaihd.net/i/de12_v1@392882/master.m3u8";
var sender3sat = "http://zdf0910-lh.akamaihd.net/i/dach10_v1@392872/master.m3u8";
var senderPhoenix = "http://zdf0910-lh.akamaihd.net/i/de09_v1@392871/master.m3u8";
var senderWDR = "http://wdr_fs_geo-lh.akamaihd.net/i/wdrfs_geogeblockt@112044/master.m3u8";
var senderNDR = "http://ndr_fs-lh.akamaihd.net/i/ndrfs_hh@119223/master.m3u8";
var senderBR = "http://livestreams.br.de/i/bfsnord_germany@119898/master.m3u8";
var senderBRalpha = "http://livestreams.br.de/i/bralpha_germany@119899/master.m3u8";
var senderSWR = "http://swrrp-lh.akamaihd.net/i/swrrp_live@196739/master.m3u8";
var senderHR = "http://live1_hr-lh.akamaihd.net/i/hr_fernsehen@75910/master.m3u8";
var senderSR = "http://live2_sr-lh.akamaihd.net/i/sr_universal02@107595/master.m3u8";
var senderONE = "http://wdr_einsfestival-lh.akamaihd.net/i/wdr_einsfestival@328300/master.m3u8";
var senderDW = "http://dwstream4-lh.akamaihd.net/i/dwstream4_live@131329/master.m3u8";
var senderKiKa = "http://kika_geo-lh.akamaihd.net/i/livetvkika_de@75114/master.m3u8";
var senderTagesschau24 = "http://tagesschau-lh.akamaihd.net/i/tagesschau_1@119231/master.m3u8";
var senderMDR = "http://mdr_th_hls-lh.akamaihd.net/i/livetvmdrthueringen_de@106903/master.m3u8";
var senderNHK = "http://web-cache.stream.ne.jp/www11/nhkworld-tv/stv/225446/live.m3u8";
var senderF24 = "http://f24hls-i.akamaihd.net/hls/live/221193/F24_EN_LO_HLS/master_500.m3u8";
var senderRT = "http://rt-eng-live.hls.adaptive.level3.net/rt/eng/index.m3u8";
var senderAL = "http://aljazeera-eng-apple-live.adaptive.level3.net/apple/aljazeera/english/800.m3u8";
var senderABC = "http://abclive.abcnews.com/i/abc_live4@136330/index_1200_av-p.m3u8";
var senderN24 = "http://bsn246u6-i.akamaihd.net/hls/live/237201/Live2N24CMS/index.m3u8";
	onkeyup = function(e){
		if(e.keyCode == 187){
			//alert(player.currentSrc());
			switch (player.currentSrc()) {
			case senderARD:
				player.src({ type: "application/x-mpegURL", src: senderZDF });player.play();
				break;
			case senderZDF:
				player.src({ type: "application/x-mpegURL", src: senderRBB });player.play();
				break;
			case senderRBB:
				player.src({ type: "application/x-mpegURL", src: senderArte });player.play();
				break;
			case senderArte:
				player.src({ type: "application/x-mpegURL", src: senderZDFneo });player.play();
				break;
			case senderZDFneo:
				player.src({ type: "application/x-mpegURL", src: senderZDFinfo });player.play();
				break;
			case senderZDFinfo:
				player.src({ type: "application/x-mpegURL", src: sender3sat });player.play();
				break;
			case sender3sat:
				player.src({ type: "application/x-mpegURL", src: senderPhoenix });player.play();
				break;
			case senderPhoenix:
				player.src({ type: "application/x-mpegURL", src: senderWDR });player.play();
				break;
			case senderWDR:
				player.src({ type: "application/x-mpegURL", src: senderNDR });player.play();
				break;
			case senderNDR:
				player.src({ type: "application/x-mpegURL", src: senderBR });player.play();
				break;
			case senderBR:
				player.src({ type: "application/x-mpegURL", src: senderBRalpha });player.play();
				break;
			case senderBRalpha:
				player.src({ type: "application/x-mpegURL", src: senderSWR });player.play();
				break;
			case senderSWR:
				player.src({ type: "application/x-mpegURL", src: senderHR });player.play();
				break;
			case senderHR:
				player.src({ type: "application/x-mpegURL", src: senderSR });player.play();
				break;
			case senderSR:
				player.src({ type: "application/x-mpegURL", src: senderONE });player.play();
				break;
			case senderONE:
				player.src({ type: "application/x-mpegURL", src: senderDW });player.play();
				break;
			case senderDW:
				player.src({ type: "application/x-mpegURL", src: senderKiKa });player.play();
				break;
			case senderKiKa:
				player.src({ type: "application/x-mpegURL", src: senderTagesschau24 });player.play();
				break;
			case senderTagesschau24:
				player.src({ type: "application/x-mpegURL", src: senderMDR });player.play();
				break;
			case senderMDR:
				player.src({ type: "application/x-mpegURL", src: senderNHK });player.play();
				break;
			case senderNHK:
				player.src({ type: "application/x-mpegURL", src: senderF24 });player.play();
				break;
			case senderF24:
				player.src({ type: "application/x-mpegURL", src: senderRT });player.play();
				break;
			case senderRT:
				player.src({ type: "application/x-mpegURL", src: senderAL });player.play();
				break;
			case senderAL:
				player.src({ type: "application/x-mpegURL", src: senderABC });player.play();
				break;
			case senderABC:
				player.src({ type: "application/x-mpegURL", src: senderN24 });player.play();
				break;
			case senderN24:
				player.src({ type: "application/x-mpegURL", src: senderARD });player.play();
				break;
			}
		}
		else if(e.keyCode == 189){
			//alert(player.currentSrc());
			switch (player.currentSrc()) {
			case senderN24:
				player.src({ type: "application/x-mpegURL", src: senderABC });player.play();
				break;
			case senderABC:
				player.src({ type: "application/x-mpegURL", src: senderAL });player.play();
				break;
			case senderAL:
				player.src({ type: "application/x-mpegURL", src: senderRT });player.play();
				break;
			case senderRT:
				player.src({ type: "application/x-mpegURL", src: senderF24 });player.play();
				break;
			case senderF24:
				player.src({ type: "application/x-mpegURL", src: senderNHK });player.play();
				break;
			case senderNHK:
				player.src({ type: "application/x-mpegURL", src: senderMDR });player.play();
				break;
			case senderMDR:
				player.src({ type: "application/x-mpegURL", src: senderTagesschau24 });player.play();
				break;
			case senderTagesschau24:
				player.src({ type: "application/x-mpegURL", src: senderKiKa });player.play();
				break;
			case senderKiKa:
				player.src({ type: "application/x-mpegURL", src: senderDW });player.play();
				break;
			case senderDW:
				player.src({ type: "application/x-mpegURL", src: senderONE });player.play();
				break;
			case senderONE:
				player.src({ type: "application/x-mpegURL", src: senderSR });player.play();
				break;
			case senderSR:
				player.src({ type: "application/x-mpegURL", src: senderHR });player.play();
				break;
			case senderHR:
				player.src({ type: "application/x-mpegURL", src: senderSWR });player.play();
				break;
			case senderSWR:
				player.src({ type: "application/x-mpegURL", src: senderBRalpha });player.play();
				break;
			case senderBRalpha:
				player.src({ type: "application/x-mpegURL", src: senderBR });player.play();
				break;
			case senderBR:
				player.src({ type: "application/x-mpegURL", src: senderNDR });player.play();
				break;
			case senderNDR:
				player.src({ type: "application/x-mpegURL", src: senderWDR });player.play();
				break;
			case senderWDR:
				player.src({ type: "application/x-mpegURL", src: senderPhoenix });player.play();
				break;
			case senderPhoenix:
				player.src({ type: "application/x-mpegURL", src: sender3sat });player.play();
				break;
			case sender3sat:
				player.src({ type: "application/x-mpegURL", src: senderZDFinfo });player.play();
				break;
			case senderZDFinfo:
				player.src({ type: "application/x-mpegURL", src: senderZDFneo });player.play();
				break;
			case senderZDFneo:
				player.src({ type: "application/x-mpegURL", src: senderArte });player.play();
				break;
			case senderArte:
				player.src({ type: "application/x-mpegURL", src: senderRBB });player.play();
				break;
			case senderRBB:
				player.src({ type: "application/x-mpegURL", src: senderZDF });player.play();
				break;
			case senderZDF:
				player.src({ type: "application/x-mpegURL", src: senderARD });player.play();
				break;
			case senderARD:
				player.src({ type: "application/x-mpegURL", src: senderN24 });player.play();
				break;
			}
		}
	}