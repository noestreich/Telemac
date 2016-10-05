	onkeyup = function(e){
        if(e.keyCode == 187 || e.keyCode == 107){
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
		else if(e.keyCode == 189 || e.keyCode == 109){
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
