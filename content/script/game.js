const gameStates = { START: 0, RUN: 1, GAME_OVER: 2 };
const target = document.getElementById("target");
const innerTimer = document.getElementById("inner-timer");
const scoreText = document.getElementById("score");
const infoText = document.getElementsByTagName("h1")[0];
const backButton = document.getElementById("back-button");
document.body.style.backgroundColor = bgColor;
document.body.style.color = textColor;
target.style.backgroundColor = buttonColor;
innerTimer.style.backgroundColor = bgColor;
scoreText.style.color = innerTextColor;
backButton.style.color = innerTextColor;
backButton.style.backgroundColor = buttonColor;
const targetTime = 100;
let gameState = gameStates.START;
let score;
let lastClickTime;
let interval = setInterval(function() {
		if(gameState === gameStates.RUN) {
			timeRemaining = Math.floor((new Date().getTime() - lastClickTime) * 0.1);
			innerTimer.style.width = timeRemaining + "%";
			innerTimer.style.height = timeRemaining + "%";
			if(timeRemaining >= targetTime){
				gameState = gameStates.GAME_OVER;
				infoText.innerHTML = "GAME OVER";
				backButton.style.display = "block";
				target.style.left = "50%";
				target.style.bottom = "50%";
				innerTimer.style.width = "0%";
				innerTimer.style.height = "0%";
			}
		}
}, 1);
function hitTarget() {
	if(gameState != gameStates.RUN){
		gameState = gameStates.RUN;
		infoText.innerHTML = "";
		backButton.style.display = "none";
		score = 0;
	}
	target.style.left = Math.floor(Math.random() * (document.documentElement.clientWidth - 70)) + 35 + "px";
	target.style.bottom = Math.floor(Math.random() * (document.documentElement.clientHeight - 150)) + 75 + "px";
	score++;
	scoreText.innerHTML = score;
	lastClickTime = new Date().getTime();
}
