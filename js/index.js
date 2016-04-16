$(function(){
// CONTROL OF LIGHTS ON EACH SQUARE
	// ROW 1
	$("#majorRoot").click(playMajorRoot);
	$("#major2nd").click(playMajor2nd);
	$("#major3rd").click(playMajor3rd);
	$("#major4th").click(playMajor4th);
	// ROW 2
	$("#major5th").click(playMajor5th);
	$("#major6th").click(playMajor6th);
	$("#major7th").click(playMajor7th);
	$("#major8va").click(playMajor8va);
	// ROW 3
	$("#minorRoot").click(playMinorRoot);
	$("#minor2nd").click(playMinor2nd);
	$("#minor3rd").click(playMinor3rd);
	$("#minor4th").click(playMinor4th);
	// ROW 4
	$("#minor5th").click(playMinor5th);
	$("#minor6th").click(playMinor6th);
	$("#minor7th").click(playMinor7th);
	$("#minor8va").click(playMinor8va);

	// Holder array to track played notes.
	var holder = [];


// TIMEOUT FUNCTION TO HIGHLIGHT MAJOR OR MINOR
	function timeout2(elem, color) {
		var resetMajor = $('.rowOne')
		var resetMinor = $('.rowThree')
		setTimeout(function() {
			elem.css("backgroundColor", color);
		}, 6000);
	}
	
	$(".rowOne").click(majorLight);
	$(".rowTwo").click(majorLight);

	function majorLight(){
		$("#h1Background1").css("backgroundColor", "#a8e6cf");
		timeout2($("#h1Background1"), '#E0E2E3');
	}

	$(".rowThree").click(minorLight);
	$(".rowFour").click(minorLight);

	function minorLight(){
		$("#h1Background2").css("backgroundColor", "#D991A2");
		timeout2($("#h1Background2"), '#D1D2D4');
	}

	function shutMajorLight() {
		console.log('shut light')
		if(holder.length === 0) $('#h1Background1').css('background', '#E0E2E3');
	}

	
// TIMEOUT FUNCTION FOR PADS
	function timeout(elem, color) {
		setTimeout(function() {
			elem.css("backgroundColor", color);
			// holder.pop();
			// console.log(holder.length);
			// shutMajorLight();
		}, 3000);
	}

// SET VARIABLE TO GET TEXT VALUE OF #keySelected ENABLING CORRECT AUDIO TO BE PLAYED
	var key; 
	key = $("#keySelected").text().toLowerCase();	

// ROW 1 : PADS 1 - 4
	function playMajorRoot(){
		key = $("#keySelected").text().toLowerCase();
		$("#majorRoot").css("backgroundColor", "#a8e6cf");
		timeout($("#majorRoot"), '#dcedc1');
		// holder.push(true);
		// console.log(holder.length);
		if(key === "a"){
			$("#AudioTriggerA")[0].play();
		}
		else if(key === "bb"){
			$("#AudioTriggerBb")[0].play();
		}
		else if(key === "b"){
			$("#AudioTriggerB")[0].play();
		}
		else if(key === "c"){
			$("#AudioTriggerC")[0].play();
		}
		else if(key === "c#"){
			$("#AudioTriggerCsharp")[0].play();
		}
		else if(key === "d"){
			$("#AudioTriggerD")[0].play();
		}
		else if(key === "eb"){
			$("#AudioTriggerEb")[0].play();
		}
		else if(key === "e"){
			$("#AudioTriggerE")[0].play();
		}
		else if(key === "f"){
			$("#AudioTriggerF")[0].play();
		}
		else if(key === "f#"){
			$("#AudioTriggerFsharp")[0].play();
		}
		else if(key === "g"){
			$("#AudioTriggerG")[0].play();
		}
		else if(key === "ab"){
			$("#AudioTriggerAb")[0].play();
		}
		else{
		}
	}

	function playMajor2nd(){
		key = $("#keySelected").text().toLowerCase();
		$("#major2nd").css("backgroundColor", "#a8e6cf");
		timeout($("#major2nd"), '#dcedc1');
		if(key === "a"){
			$("#AudioTriggerB")[0].play();
		}
		else if(key === "bb"){
			$("#AudioTriggerC")[0].play();
		}
		else if(key === "b"){
			$("#AudioTriggerCsharp")[0].play();
		}
		else if(key === "c"){
			$("#AudioTriggerD")[0].play();
		}
		else if(key === "c#"){
			$("#AudioTriggerEb")[0].play();
		}
		else if(key === "d"){
			$("#AudioTriggerE")[0].play();
		}
		else if(key === "eb"){
			$("#AudioTriggerF")[0].play();
		}
		else if(key === "e"){
			$("#AudioTriggerFsharp")[0].play();
		}
		else if(key === "f"){
			$("#AudioTriggerG")[0].play();
		}
		else if(key === "f#"){
			$("#AudioTriggerAb")[0].play();
		}
		else if(key === "g"){
			$("#AudioTriggerHighA")[0].play();
		}
		else if(key === "ab"){
			$("#AudioTriggerHighBb")[0].play();
		}
		else{
		}
	}

	function playMajor3rd(){
		key = $("#keySelected").text().toLowerCase();
		$("#major3rd").css("backgroundColor", "#a8e6cf");
		timeout($("#major3rd"), '#dcedc1');
		if(key === "a"){
			$("#AudioTriggerCsharp")[0].play();
		}
		else if(key === "bb"){
			$("#AudioTriggerD")[0].play();
		}
		else if(key === "b"){
			$("#AudioTriggerEb")[0].play();
		}
		else if(key === "c"){
			$("#AudioTriggerE")[0].play();
		}
		else if(key === "c#"){
			$("#AudioTriggerF")[0].play();
		}
		else if(key === "d"){
			$("#AudioTriggerFsharp")[0].play();
		}
		else if(key === "eb"){
			$("#AudioTriggerG")[0].play();
		}
		else if(key === "e"){
			$("#AudioTriggerAb")[0].play();
		}
		else if(key === "f"){
			$("#AudioTriggerHighA")[0].play();
		}
		else if(key === "f#"){
			$("#AudioTriggerHighBb")[0].play();
		}
		else if(key === "g"){
			$("#AudioTriggerHighB")[0].play();
		}
		else if(key === "ab"){
			$("#AudioTriggerHighC")[0].play();
		}
		else{
		}
	}

	function playMajor4th(){
	key = $("#keySelected").text().toLowerCase();
		$("#major4th").css("backgroundColor", "#a8e6cf");
		timeout($("#major4th"), '#dcedc1');
		if(key === "a"){
			$("#AudioTriggerD")[0].play();
		}
		else if(key === "bb"){
			$("#AudioTriggerEb")[0].play();
		}
		else if(key === "b"){
			$("#AudioTriggerE")[0].play();
		}
		else if(key === "c"){
			$("#AudioTriggerF")[0].play();
		}
		else if(key === "c#"){
			$("#AudioTriggerFsharp")[0].play();
		}
		else if(key === "d"){
			$("#AudioTriggerG")[0].play();
		}
		else if(key === "eb"){
			$("#AudioTriggerAb")[0].play();
		}
		else if(key === "e"){
			$("#AudioTriggerHighA")[0].play();
		}
		else if(key === "f"){
			$("#AudioTriggerHighBb")[0].play();
		}
		else if(key === "f#"){
			$("#AudioTriggerHighB")[0].play();
		}
		else if(key === "g"){
			$("#AudioTriggerHighC")[0].play();
		}
		else if(key === "ab"){
			$("#AudioTriggerHighCsharp")[0].play();
		}
		else{
		}
	}

// ROW 2 : PADS 5 - 8
	function playMajor5th(){
	key = $("#keySelected").text().toLowerCase();	
		$("#major5th").css("backgroundColor", "	#FFC36D");
		timeout($("#major5th"), '#ffd3b6');
		if(key === "a"){
			$("#AudioTriggerE")[0].play();
		}
		else if(key === "bb"){
			$("#AudioTriggerF")[0].play();
		}
		else if(key === "b"){
			$("#AudioTriggerFsharp")[0].play();
		}
		else if(key === "c"){
			$("#AudioTriggerG")[0].play();
		}
		else if(key === "c#"){
			$("#AudioTriggerAb")[0].play();
		}
		else if(key === "d"){
			$("#AudioTriggerHighA")[0].play();
		}
		else if(key === "eb"){
			$("#AudioTriggerHighBb")[0].play();
		}
		else if(key === "e"){
			$("#AudioTriggerHighB")[0].play();
		}
		else if(key === "f"){
			$("#AudioTriggerHighC")[0].play();
		}
		else if(key === "f#"){
			$("#AudioTriggerHighCsharp")[0].play();
		}
		else if(key === "g"){
			$("#AudioTriggerHighD")[0].play();
		}
		else if(key === "ab"){
			$("#AudioTriggerHighEb")[0].play();			
		}
		else{
		}
	}

	function playMajor6th(){
	key = $("#keySelected").text().toLowerCase();
		$("#major6th").css("backgroundColor", "#FFC36D");
		timeout($("#major6th"), '#ffd3b6');
		if(key === "a"){
			$("#AudioTriggerFsharp")[0].play();
		}
		else if(key === "bb"){
			$("#AudioTriggerG")[0].play();
		}
		else if(key === "b"){
			$("#AudioTriggerAb")[0].play();
		}
		else if(key === "c"){
			$("#AudioTriggerHighA")[0].play();
		}
		else if(key === "c#"){
			$("#AudioTriggerHighBb")[0].play();
		}
		else if(key === "d"){
			$("#AudioTriggerHighB")[0].play();
		}
		else if(key === "eb"){
			$("#AudioTriggerHighC")[0].play();
		}
		else if(key === "e"){
			$("#AudioTriggerHighCsharp")[0].play();
		}
		else if(key === "f"){
			$("#AudioTriggerHighD")[0].play();
		}
		else if(key === "f#"){
			$("#AudioTriggerHighEb")[0].play();
		}
		else if(key === "g"){
			$("#AudioTriggerHighE")[0].play();
		}
		else if(key === "ab"){
			$("#AudioTriggerHighF")[0].play();
		}
		else{
		}
	}

	function playMajor7th(){
	key = $("#keySelected").text().toLowerCase();
		$("#major7th").css("backgroundColor", "#FFC36D");
		timeout($("#major7th"), '#ffd3b6');
		if(key === "a"){
			$("#AudioTriggerAb")[0].play();
		}
		else if(key === "bb"){
			$("#AudioTriggerHighA")[0].play();
		}
		else if(key === "b"){
			$("#AudioTriggerHighBb")[0].play();
		}
		else if(key === "c"){
			$("#AudioTriggerHighB")[0].play();
		}
		else if(key === "c#"){
			$("#AudioTriggerHighC")[0].play();
		}
		else if(key === "d"){
			$("#AudioTriggerHighCsharp")[0].play();
		}
		else if(key === "eb"){
			$("#AudioTriggerHighD")[0].play();
		}
		else if(key === "e"){
			$("#AudioTriggerHighEb")[0].play();
		}
		else if(key === "f"){
			$("#AudioTriggerHighE")[0].play();
		}
		else if(key === "f#"){
			$("#AudioTriggerHighF")[0].play();
		}
		else if(key === "g"){
			$("#AudioTriggerHighFsharp")[0].play();
		}
		else if(key === "ab"){
			$("#AudioTriggerHighG")[0].play();
		}
		else{
		}
	}

	function playMajor8va(){
	key = $("#keySelected").text().toLowerCase();
		$("#major8va").css("backgroundColor", "#FFC36D");
		timeout($("#major8va"), '#ffd3b6');
		if(key === "a"){
			$("#AudioTriggerHighA")[0].play();
		}
		else if(key === "bb"){
			$("#AudioTriggerHighBb")[0].play();
		}
		else if(key === "b"){
			$("#AudioTriggerHighB")[0].play();
		}
		else if(key === "c"){
			$("#AudioTriggerHighC")[0].play();
		}
		else if(key === "c#"){
			$("#AudioTriggerHighCsharp")[0].play();
		}
		else if(key === "d"){
			$("#AudioTriggerHighD")[0].play();
		}
		else if(key === "eb"){
			$("#AudioTriggerHighEb")[0].play();
		}
		else if(key === "e"){
			$("#AudioTriggerHighE")[0].play();
		}
		else if(key === "f"){
			$("#AudioTriggerHighF")[0].play();
		}
		else if(key === "f#"){
			$("#AudioTriggerHighFsharp")[0].play();
		}
		else if(key === "g"){
			$("#AudioTriggerHighG")[0].play();
		}
		else if(key === "ab"){
			$("#AudioTriggerHighAb")[0].play();
		}
		else{
		}
	}

// ROW 3 : PADS 9 - 12
	function playMinorRoot(){
	key = $("#keySelected").text().toLowerCase();	
		$("#minorRoot").css("backgroundColor", "#D991A2");
		timeout($("#minorRoot"), '#ffaaa5');
		if(key === "a"){
			$("#AudioTriggerA")[0].play();
		}
		else if(key === "bb"){
			$("#AudioTriggerBb")[0].play();
		}
		else if(key === "b"){
			$("#AudioTriggerB")[0].play();
		}
		else if(key === "c"){
			$("#AudioTriggerC")[0].play();
		}
		else if(key === "c#"){
			$("#AudioTriggerCsharp")[0].play();
		}
		else if(key === "d"){
			$("#AudioTriggerD")[0].play();
		}
		else if(key === "eb"){
			$("#AudioTriggerEb")[0].play();
		}
		else if(key === "e"){
			$("#AudioTriggerE")[0].play();
		}
		else if(key === "f"){
			$("#AudioTriggerF")[0].play();
		}
		else if(key === "f#"){
			$("#AudioTriggerFsharp")[0].play();
		}
		else if(key === "g"){
			$("#AudioTriggerG")[0].play();
		}
		else if(key === "ab"){
			$("#AudioTriggerAb")[0].play();
		}
		else{
		}
	}

	function playMinor2nd(){
	key = $("#keySelected").text().toLowerCase();	
		$("#minor2nd").css("backgroundColor", "#D991A2");
		timeout($("#minor2nd"), '#ffaaa5');
		if(key === "a"){
			$("#AudioTriggerB")[0].play();
		}
		else if(key === "bb"){
			$("#AudioTriggerC")[0].play();
		}
		else if(key === "b"){
			$("#AudioTriggerCsharp")[0].play();
		}
		else if(key === "c"){
			$("#AudioTriggerD")[0].play();
		}
		else if(key === "c#"){
			$("#AudioTriggerEb")[0].play();
		}
		else if(key === "d"){
			$("#AudioTriggerE")[0].play();
		}
		else if(key === "eb"){
			$("#AudioTriggerF")[0].play();
		}
		else if(key === "e"){
			$("#AudioTriggerFsharp")[0].play();
		}
		else if(key === "f"){
			$("#AudioTriggerG")[0].play();
		}
		else if(key === "f#"){
			$("#AudioTriggerAb")[0].play();
		}
		else if(key === "g"){
			$("#AudioTriggerHighA")[0].play();
		}
		else if(key === "ab"){
			$("#AudioTriggerHighBb")[0].play();
		}
		else{
		}
	}

	function playMinor3rd(){
	key = $("#keySelected").text().toLowerCase();	
		$("#minor3rd").css("backgroundColor", "#D991A2");
		timeout($("#minor3rd"), '#ffaaa5');
		if(key === "a"){
			$("#AudioTriggerC")[0].play();
		}
		else if(key === "bb"){
			$("#AudioTriggerCsharp")[0].play();
		}
		else if(key === "b"){
			$("#AudioTriggerD")[0].play();
		}
		else if(key === "c"){
			$("#AudioTriggerEb")[0].play();
		}
		else if(key === "c#"){
			$("#AudioTriggerE")[0].play();
		}
		else if(key === "d"){
			$("#AudioTriggerF")[0].play();
		}
		else if(key === "eb"){
			$("#AudioTriggerFsharp")[0].play();
		}
		else if(key === "e"){
			$("#AudioTriggerG")[0].play();
		}
		else if(key === "f"){
			$("#AudioTriggerAb")[0].play();
		}
		else if(key === "f#"){
			$("#AudioTriggerHighA")[0].play();
		}
		else if(key === "g"){
			$("#AudioTriggerHighBb")[0].play();
		}
		else if(key === "ab"){
			$("#AudioTriggerHighB")[0].play();
		}
		else{
		}
	}

	function playMinor4th(){
	key = $("#keySelected").text().toLowerCase();	
		$("#minor4th").css("backgroundColor", "#D991A2");
		timeout($("#minor4th"), '#ffaaa5');
		if(key === "a"){
			$("#AudioTriggerD")[0].play();
		}
		else if(key === "bb"){
			$("#AudioTriggerEb")[0].play();
		}
		else if(key === "b"){
			$("#AudioTriggerE")[0].play();
		}
		else if(key === "c"){
			$("#AudioTriggerF")[0].play();
		}
		else if(key === "c#"){
			$("#AudioTriggerFsharp")[0].play();
		}
		else if(key === "d"){
			$("#AudioTriggerG")[0].play();
		}
		else if(key === "eb"){
			$("#AudioTriggerAb")[0].play();
		}
		else if(key === "e"){
			$("#AudioTriggerHighA")[0].play();
		}
		else if(key === "f"){
			$("#AudioTriggerHighBb")[0].play();
		}
		else if(key === "f#"){
			$("#AudioTriggerHighB")[0].play();
		}
		else if(key === "g"){
			$("#AudioTriggerHighC")[0].play();
		}
		else if(key === "ab"){
			$("#AudioTriggerHighCsharp")[0].play();
		}
		else{
		}
	}

// ROW 4 : PADS 13 - 16
	function playMinor5th(){
	key = $("#keySelected").text().toLowerCase();	
		$("#minor5th").css("backgroundColor", "#B25D71");
		timeout($("#minor5th"), '#ff8b94');
		if(key === "a"){
			$("#AudioTriggerE")[0].play();
		}
		else if(key === "bb"){
			$("#AudioTriggerF")[0].play();
		}
		else if(key === "b"){
			$("#AudioTriggerFsharp")[0].play();
		}
		else if(key === "c"){
			$("#AudioTriggerG")[0].play();
		}
		else if(key === "c#"){
			$("#AudioTriggerAb")[0].play();
		}
		else if(key === "d"){
			$("#AudioTriggerHighA")[0].play();
		}
		else if(key === "eb"){
			$("#AudioTriggerHighBb")[0].play();
		}
		else if(key === "e"){
			$("#AudioTriggerHighB")[0].play();
		}
		else if(key === "f"){
			$("#AudioTriggerHighC")[0].play();
		}
		else if(key === "f#"){
			$("#AudioTriggerHighCsharp")[0].play();
		}
		else if(key === "g"){
			$("#AudioTriggerHighD")[0].play();
		}
		else if(key === "ab"){
			$("#AudioTriggerHighEb")[0].play();			
		}
		else{
		}
	}

	function playMinor6th(){
	key = $("#keySelected").text().toLowerCase();	
		$("#minor6th").css("backgroundColor", "#B25D71");
		timeout($("#minor6th"), '#ff8b94');
		if(key === "a"){
			$("#AudioTriggerF")[0].play();
		}
		else if(key === "bb"){
			$("#AudioTriggerFsharp")[0].play();
		}
		else if(key === "b"){
			$("#AudioTriggerG")[0].play();
		}
		else if(key === "c"){
			$("#AudioTriggerAb")[0].play();
		}
		else if(key === "c#"){
			$("#AudioTriggerHighA")[0].play();
		}
		else if(key === "d"){
			$("#AudioTriggerHighBb")[0].play();
		}
		else if(key === "eb"){
			$("#AudioTriggerHighB")[0].play();
		}
		else if(key === "e"){
			$("#AudioTriggerHighC")[0].play();
		}
		else if(key === "f"){
			$("#AudioTriggerHighCsharp")[0].play();
		}
		else if(key === "f#"){
			$("#AudioTriggerHighD")[0].play();
		}
		else if(key === "g"){
			$("#AudioTriggerHighEb")[0].play();
		}
		else if(key === "ab"){
			$("#AudioTriggerHighE")[0].play();
		}
		else{
		}
	}

	function playMinor7th(){
	key = $("#keySelected").text().toLowerCase();	
		$("#minor7th").css("backgroundColor", "#B25D71");
		timeout($("#minor7th"), '#ff8b94');
		if(key === "a"){
			$("#AudioTriggerG")[0].play();
		}
		else if(key === "bb"){
			$("#AudioTriggerAb")[0].play();
		}
		else if(key === "b"){
			$("#AudioTriggerHighA")[0].play();
		}
		else if(key === "c"){
			$("#AudioTriggerHighBb")[0].play();
		}
		else if(key === "c#"){
			$("#AudioTriggerHighB")[0].play();
		}
		else if(key === "d"){
			$("#AudioTriggerHighC")[0].play();
		}
		else if(key === "eb"){
			$("#AudioTriggerHighCsharp")[0].play();
		}
		else if(key === "e"){
			$("#AudioTriggerHighD")[0].play();
		}
		else if(key === "f"){
			$("#AudioTriggerHighEb")[0].play();
		}
		else if(key === "f#"){
			$("#AudioTriggerHighE")[0].play();
		}
		else if(key === "g"){
			$("#AudioTriggerHighF")[0].play();
		}
		else if(key === "ab"){
			$("#AudioTriggerHighG")[0].play();
		}
		else{
		}
	}

	function playMinor8va(){
	key = $("#keySelected").text().toLowerCase();	
		$("#minor8va").css("backgroundColor", "#B25D71");
		timeout($("#minor8va"), '#ff8b94');
		if(key === "a"){
			$("#AudioTriggerHighA")[0].play();
		}
		else if(key === "bb"){
			$("#AudioTriggerHighBb")[0].play();
		}
		else if(key === "b"){
			$("#AudioTriggerHighB")[0].play();
		}
		else if(key === "c"){
			$("#AudioTriggerHighC")[0].play();
		}
		else if(key === "c#"){
			$("#AudioTriggerHighCsharp")[0].play();
		}
		else if(key === "d"){
			$("#AudioTriggerHighD")[0].play();
		}
		else if(key === "eb"){
			$("#AudioTriggerHighEb")[0].play();
		}
		else if(key === "e"){
			$("#AudioTriggerHighE")[0].play();
		}
		else if(key === "f"){
			$("#AudioTriggerHighF")[0].play();
		}
		else if(key === "f#"){
			$("#AudioTriggerHighFsharp")[0].play();
		}
		else if(key === "g"){
			$("#AudioTriggerHighG")[0].play();
		}
		else if(key === "ab"){
			$("#AudioTriggerHighAb")[0].play();
		}
		else{
		}
	}


// ASSIGN KEYBOARD CONTROL OF PADS
	$(document).keydown(function(e){
		switch(e.keyCode){
			
// MAJOR KEY CONTROL 1 -8
			case 49: {//1
				$('#majorRoot').trigger('click');
				break;
			}
			case 50: {//2
				$('#major2nd').trigger('click');
				break;
			}
			case 51: {//3
				$('#major3rd').trigger('click');
				break;
			}
			case 52: {//4
				$('#major4th').trigger('click');
				break;
			}
			case 53: {//5
				$('#major5th').trigger('click');
				break;
			}
			case 54: {//6
				$('#major6th').trigger('click');
				break;
			}
			case 55: {//7
				$('#major7th').trigger('click');
				break;
			}
			case 56: {//8
				$('#major8va').trigger('click');
				break;
			}

// MINOR KEY CONTROL QWERTYUI
			case 81: {//Q
				$('#minorRoot').trigger('click');
				break;
			}
			case 87: {//W
				$('#minor2nd').trigger('click');
				break;
			}
			case 69: {//E
				$('#minor3rd').trigger('click');
				break;
			}
			case 82: {//R
				$('#minor4th').trigger('click');
				break;
			}
			case 84: {//T
				$('#minor5th').trigger('click');
				break;
			}
			case 89: {//Y
				$('#minor6th').trigger('click');
				break;
			}
			case 85: {//U
				$('#minor7th').trigger('click');
				break;
			}
			case 73: {//I
				$('#minor8va').trigger('click');
				break;
			}
			
		}
	});
	

// CODE FOR ASIDE SELECT KEY
// ONCE SELECTED IT SHOWS WHICH ONE WAS CLICKED ON BY CHANGING THE <H3 ID="keySelected">
	$("#a").click(changeKeyA);
	$("#bb").click(changeKeyBb);	
	$("#b").click(changeKeyB);
	$("#c").click(changeKeyC);
	$("#cSharp").click(changeKeyCSharp);
	$("#d").click(changeKeyD);
	$("#eb").click(changeKeyEb);
	$("#e").click(changeKeyE);
	$("#f").click(changeKeyF);
	$("#fSharp").click(changeKeyFSharp);
	$("#g").click(changeKeyG);
	$("#ab").click(changeKeyAb);
	
	function changeKeyA(){
		$("#keySelected").text("A");
		// MAJOR
		$("#majorScale1").text("A");
		$("#majorScale2").text("B");
		$("#majorScale3").text("C#");
		$("#majorScale4").text("D");
		$("#majorScale5").text("E");
		$("#majorScale6").text("F#");
		$("#majorScale7").text("G#");
		$("#majorScale8").text("A");
		// MINOR
		$("#minorScale1").text("A");
		$("#minorScale2").text("B");
		$("#minorScale3").text("C");
		$("#minorScale4").text("D");
		$("#minorScale5").text("E");
		$("#minorScale6").text("F");
		$("#minorScale7").text("G");
		$("#minorScale8").text("A");
	}

	function changeKeyBb(){
		$("#keySelected").text("Bb");
		// MAJOR
		$("#majorScale1").text("Bb");
		$("#majorScale2").text("C");
		$("#majorScale3").text("D");
		$("#majorScale4").text("Eb");
		$("#majorScale5").text("F");
		$("#majorScale6").text("G");
		$("#majorScale7").text("A");
		$("#majorScale8").text("Bb");
		// MINOR
		$("#minorScale1").text("Bb");
		$("#minorScale2").text("C");
		$("#minorScale3").text("Db");
		$("#minorScale4").text("Eb");
		$("#minorScale5").text("F");
		$("#minorScale6").text("Gb");
		$("#minorScale7").text("Ab");
		$("#minorScale8").text("Bb");
	}

	function changeKeyB(){
		$("#keySelected").text("B");
		// MAJOR
		$("#majorScale1").text("B");
		$("#majorScale2").text("C#");
		$("#majorScale3").text("D#");
		$("#majorScale4").text("E");
		$("#majorScale5").text("F#");
		$("#majorScale6").text("G#");
		$("#majorScale7").text("A#");
		$("#majorScale8").text("B");
		// MINOR
		$("#minorScale1").text("B");
		$("#minorScale2").text("C#");
		$("#minorScale3").text("D");
		$("#minorScale4").text("E");
		$("#minorScale5").text("F#");
		$("#minorScale6").text("G");
		$("#minorScale7").text("A");
		$("#minorScale8").text("B");
	}

	function changeKeyC(){
		$("#keySelected").text("C");
		// MAJOR
		$("#majorScale1").text("C");
		$("#majorScale2").text("D");
		$("#majorScale3").text("E");
		$("#majorScale4").text("F");
		$("#majorScale5").text("G");
		$("#majorScale6").text("A");
		$("#majorScale7").text("B");
		$("#majorScale8").text("C");
		// MINOR
		$("#minorScale1").text("C");
		$("#minorScale2").text("D");
		$("#minorScale3").text("Eb");
		$("#minorScale4").text("F");
		$("#minorScale5").text("G");
		$("#minorScale6").text("Ab");
		$("#minorScale7").text("Bb");
		$("#minorScale8").text("C");
	}

	function changeKeyCSharp(){
		$("#keySelected").text("C#");
		// MAJOR
		$("#majorScale1").text("C#");
		$("#majorScale2").text("D#");
		$("#majorScale3").text("E#");
		$("#majorScale4").text("F#");
		$("#majorScale5").text("G#");
		$("#majorScale6").text("A#");
		$("#majorScale7").text("B#");
		$("#majorScale8").text("C#");
		// MINOR
		$("#minorScale1").text("C#");
		$("#minorScale2").text("D#");
		$("#minorScale3").text("E");
		$("#minorScale4").text("F#");
		$("#minorScale5").text("G#");
		$("#minorScale6").text("A");
		$("#minorScale7").text("B");
		$("#minorScale8").text("C#");
	}

	function changeKeyD(){
		$("#keySelected").text("D");
		// MAJOR
		$("#majorScale1").text("D");
		$("#majorScale2").text("E");
		$("#majorScale3").text("F#");
		$("#majorScale4").text("G");
		$("#majorScale5").text("A");
		$("#majorScale6").text("B");
		$("#majorScale7").text("C#");
		$("#majorScale8").text("D");
		// MINOR
		$("#minorScale1").text("D");
		$("#minorScale2").text("E");
		$("#minorScale3").text("F");
		$("#minorScale4").text("G");
		$("#minorScale5").text("A");
		$("#minorScale6").text("Bb");
		$("#minorScale7").text("C");
		$("#minorScale8").text("D");
	}
	
	function changeKeyEb(){
		$("#keySelected").text("Eb");
		// MAJOR
		$("#majorScale1").text("Eb");
		$("#majorScale2").text("F");
		$("#majorScale3").text("G");
		$("#majorScale4").text("Ab");
		$("#majorScale5").text("Bb");
		$("#majorScale6").text("C");
		$("#majorScale7").text("D");
		$("#majorScale8").text("Eb");
		// MINOR
		$("#minorScale1").text("Eb");
		$("#minorScale2").text("F");
		$("#minorScale3").text("Gb");
		$("#minorScale4").text("Ab");
		$("#minorScale5").text("Bb");
		$("#minorScale6").text("Cb");
		$("#minorScale7").text("Db");
		$("#minorScale8").text("Eb");
	}

	function changeKeyE(){
		$("#keySelected").text("E");
		// MAJOR
		$("#majorScale1").text("E");
		$("#majorScale2").text("F#");
		$("#majorScale3").text("G#");
		$("#majorScale4").text("A");
		$("#majorScale5").text("B");
		$("#majorScale6").text("C#");
		$("#majorScale7").text("D#");
		$("#majorScale8").text("E");
		// MINOR
		$("#minorScale1").text("E");
		$("#minorScale2").text("F#");
		$("#minorScale3").text("G");
		$("#minorScale4").text("A");
		$("#minorScale5").text("B");
		$("#minorScale6").text("C");
		$("#minorScale7").text("D");
		$("#minorScale8").text("E");
	}

	function changeKeyF(){
		$("#keySelected").text("F");
		// MAJOR
		$("#majorScale1").text("F");
		$("#majorScale2").text("G");
		$("#majorScale3").text("A");
		$("#majorScale4").text("Bb");
		$("#majorScale5").text("C");
		$("#majorScale6").text("D");
		$("#majorScale7").text("E");
		$("#majorScale8").text("F");
		// MINOR
		$("#minorScale1").text("F");
		$("#minorScale2").text("G");
		$("#minorScale3").text("Ab");
		$("#minorScale4").text("Bb");
		$("#minorScale5").text("C");
		$("#minorScale6").text("Db");
		$("#minorScale7").text("Eb");
		$("#minorScale8").text("F");
	}

	function changeKeyFSharp(){
		$("#keySelected").text("F#");
		// MAJOR
		$("#majorScale1").text("F#");
		$("#majorScale2").text("G#");
		$("#majorScale3").text("A#");
		$("#majorScale4").text("B");
		$("#majorScale5").text("C#");
		$("#majorScale6").text("D#");
		$("#majorScale7").text("E#");
		$("#majorScale8").text("F#");
		// MINOR
		$("#minorScale1").text("F#");
		$("#minorScale2").text("G#");
		$("#minorScale3").text("A");
		$("#minorScale4").text("B");
		$("#minorScale5").text("C#");
		$("#minorScale6").text("D");
		$("#minorScale7").text("E");
		$("#minorScale8").text("F#");
	}

	function changeKeyG(){
		$("#keySelected").text("G");
		// MAJOR
		$("#majorScale1").text("G");
		$("#majorScale2").text("A");
		$("#majorScale3").text("B");
		$("#majorScale4").text("C");
		$("#majorScale5").text("D");
		$("#majorScale6").text("E");
		$("#majorScale7").text("F#");
		$("#majorScale8").text("G");
		// MINOR
		$("#minorScale1").text("G");
		$("#minorScale2").text("A");
		$("#minorScale3").text("Bb");
		$("#minorScale4").text("C");
		$("#minorScale5").text("D");
		$("#minorScale6").text("Eb");
		$("#minorScale7").text("F");
		$("#minorScale8").text("G");
	}

	function changeKeyAb(){
		$("#keySelected").text("Ab");
		// MAJOR
		$("#majorScale1").text("Ab");
		$("#majorScale2").text("Bb");
		$("#majorScale3").text("C");
		$("#majorScale4").text("Db");
		$("#majorScale5").text("Eb");
		$("#majorScale6").text("F");
		$("#majorScale7").text("G");
		$("#majorScale8").text("Ab");
		// MINOR
		$("#minorScale1").text("Ab");
		$("#minorScale2").text("Bb");
		$("#minorScale3").text("Cb");
		$("#minorScale4").text("Db");
		$("#minorScale5").text("Eb");
		$("#minorScale6").text("Fb");
		$("#minorScale7").text("Fx(G)");
		$("#minorScale8").text("Ab");
	}

	$(".inline").colorbox({inline:true, width:"50%"});

// END
});
// 



// function timeTest() {
// 	var $b = $('body');

// 	$b.css('background', 'blue');

// 	setTimeout(function() {
// 		$b.css('background', 'white');
// 	}, 3000);
// }
