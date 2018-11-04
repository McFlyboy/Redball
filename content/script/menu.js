//Sets the color of elements
document.body.style.backgroundColor = bgColor;
document.body.style.color = textColor;
document.querySelector("#red").style.color = buttonColor;
const button = document.querySelector(".button");
button.style.color = innerTextColor;
button.style.backgroundColor = buttonColor;

//High score displays info from cookie
const highscoreText = document.getElementById("highscore");
const lastHighscore = getCookie("highscore");
if(lastHighscore != "") {
	highscoreText.innerHTML = "Welcome back!<br><br>High-score: " + lastHighscore;
}
