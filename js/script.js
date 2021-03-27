var userMove;
var cor = document.getElementById("cor");	//Computer Rock
var cop = document.getElementById("cop");	//Computer Paper
var cos = document.getElementById("cos");	//Computer Scissor
var usr = document.getElementById("usr");	//User Rock
var usp = document.getElementById("usp");	//User Paper
var uss = document.getElementById("uss");	//User Scissor
var msg  = document.getElementById("msg");

function colorr(){
	usp.style.color = "black";
	uss.style.color = "black";
	usr.style.color = "red";
	userMove = 1;
}
function colorg(){
	usr.style.color = "black";
	uss.style.color = "black";
	usp.style.color = "green";
	userMove = 2;
}
function colorb(){
	usr.style.color = "black";
	usp.style.color = "black";
	uss.style.color = "blue";
	userMove = 3;
}

var ran = Math.floor(Math.random() * 3);
var cm;

function compmove(){
	cor.style.color = "black";
	cop.style.color = "black";
	cos.style.color = "black";
	
	let temp_ran = ran;
	while ((ran == temp_ran) && (ran >= 0 && ran <= 2)){
		ran = Math.floor(Math.random() * 3);
		console.log("I'm trying hard!");
	}

	//if (ran == null){
	//	ran = Math.floor(Math.random() * 3);
	//}
	
	if (ran == 0){
		cor.style.color = "red";
		cm = 1;
	}
	else if(ran == 1){
		cop.style.color = "green";
		cm = 2;
	}
	else if(ran == 2){
		cos.style.color = "blue";
		cm = 3;
	}
}

function usermove(){
	compmove();
	if ((userMove==1 && cm==3)||(userMove==2 && cm==1)||(userMove==3 && cm==2)){
		msg.innerHTML = "You Win 😄";
	} else if(userMove==cm) {
		msg.innerHTML = "Its a Draw 😐";
	} else {
		msg.innerHTML = "You Lose 😞";
	}
}

function reset(){
	msg.innerHTML="Choose One 👉";
	cor.style.color = "black";
	cop.style.color = "black";
	cos.style.color = "black";
	usr.style.color = "black";
	usp.style.color = "black";
	uss.style.color = "black";
	//ran = null;
	document.getElementById("usrr").checked = false;
	document.getElementById("uspr").checked = false;
	document.getElementById("ussr").checked = false;
}

usr.addEventListener('click', (e) => {
	reset()
	colorr()
	usermove()
});

usp.addEventListener('click', (e) => {
	reset()
	colorg()
	usermove()
});

uss.addEventListener('click', (e) => {
	reset()
	colorb()
	usermove()
});