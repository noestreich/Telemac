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
            player.src({ type: "application/x-mpegURL", src: senderARD });player.play();
            break;
        case 'zdf':
            var player = videojs('telemac-video');
            player.src({ type: "application/x-mpegURL", src: senderZDF });player.play();
            break;
        case 'arte':
            var player = videojs('telemac-video');
            player.src({ type: "application/x-mpegURL", src: senderArte });player.play();
            break;
        case 'br':
            var player = videojs('telemac-video');
            player.src({ type: "application/x-mpegURL", src: senderBR });player.play();
            break;
        case 'alpha':
            var player = videojs('telemac-video');
            player.src({ type: "application/x-mpegURL", src: senderBRalpha });player.play();
            break;
        case 'hr':
            var player = videojs('telemac-video');
            player.src({ type: "application/x-mpegURL", src: senderHR });player.play();
            break;
        case 'mdr':
            var player = videojs('telemac-video');
            player.src({ type: "application/x-mpegURL", src: senderMDR });player.play();
            break;
        case 'ndr':
            var player = videojs('telemac-video');
            player.src({ type: "application/x-mpegURL", src: senderNDR });player.play();
            break;
        case 'rbb':
            var player = videojs('telemac-video');
            player.src({ type: "application/x-mpegURL", src: senderRBB });player.play();
            break;
        case 'sr':
            var player = videojs('telemac-video');
            player.src({ type: "application/x-mpegURL", src: senderSR });player.play();
            break;
        case 'swr':
            var player = videojs('telemac-video');
            player.src({ type: "application/x-mpegURL", src: senderSWR });player.play();
            break;
        case 'wdr':
            var player = videojs('telemac-video');
            player.src({ type: "application/x-mpegURL", src: senderWDR });player.play();
            break;
        case 'tagesschau24':
            var player = videojs('telemac-video');
            player.src({ type: "application/x-mpegURL", src: senderTagesschau24 });player.play();
            break;
        case '3sat':
            var player = videojs('telemac-video');
            player.src({ type: "application/x-mpegURL", src: sender3sat });player.play();
            break;
        case 'kika':
            var player = videojs('telemac-video');
            player.src({ type: "application/x-mpegURL", src: senderKiKa });player.play();
            break;
        case 'phoenix':
            var player = videojs('telemac-video');
            player.src({ type: "application/x-mpegURL", src: senderPhoenix });player.play();
            break;
        case 'zdfinfo':
            var player = videojs('telemac-video');
            player.src({ type: "application/x-mpegURL", src: senderZDFinfo });player.play();
            break;
        case 'zdfneo':
            var player = videojs('telemac-video');
            player.src({ type: "application/x-mpegURL", src: senderZDFneo });player.play();
            break;
        case 'dwelle':
            var player = videojs('telemac-video');
            player.src({ type: "application/x-mpegURL", src: senderDW });player.play();
            break;
        case 'nhk':
            var player = videojs('telemac-video');
            player.src({ type: "application/x-mpegURL", src: senderNHK });player.play();
            break;
        case 'n24':
            var player = videojs('telemac-video');
            player.src({ type: "application/x-mpegURL", src: senderN24 });player.play();
            break;
        case 'abc':
            var player = videojs('telemac-video');
            player.src({ type: "application/x-mpegURL", src: senderABC });player.play();
            break;
        case 'rt':
            var player = videojs('telemac-video');
            player.src({ type: "application/x-mpegURL", src: senderRT });player.play();
            break;
        case 'france24':
            var player = videojs('telemac-video');
            player.src({ type: "application/x-mpegURL", src: senderF24 });player.play();
            break;
        case 'aljazeera':
            var player = videojs('telemac-video');
            player.src({ type: "application/x-mpegURL", src: senderAL });player.play();
            break;
        case 'one':
            var player = videojs('telemac-video');
            player.src({ type: "application/x-mpegURL", src: senderONE });player.play();
            break;
            
    }
}

