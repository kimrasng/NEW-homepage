let seconds = 1;
let timerId;
timerId = setInterval(function(){
	console.log(seconds++)
	if(seconds > 9){
		clearInterval(timerId)
	}
	
	if(seconds == 2){
		document.getElementById("move").innerHTML = "MERHABA";
	}
	
	if(seconds == 3){
		document.getElementById("move").innerHTML = "こんにちは";
	}
	
	if(seconds == 4){
		document.getElementById("move").innerHTML = "أهلاً";
	}
	
	if(seconds == 5){
		document.getElementById("move").innerHTML = "Szia";
	}
	
	if(seconds == 6){
		document.getElementById("move").innerHTML = "CIAO";
	}
	
	if(seconds == 7){
		document.getElementById("move").innerHTML = "сайн yy";
	}
	
	if(seconds == 8){
		document.getElementById("move").innerHTML = "안 녕 ?";
	}
}, 300);