var clear = document.getElementById("clear");
var highscores = document.getElementById("highscores");

var initials = localStorage.getItem("initials");
var score = localStorage.getItem("Correct Answers out of 10");
var time = localStorage.getItem("time");

clear.addEventListener("click", function(){	
	highscores.innerHTML = "";
});
function retrieveData(){
	var li = document.createElement("li");
	li.textContent =  initials + " scored: " + score + "/10 with " + time + " seconds left.";
	highscores.appendChild(li);
}
retrieveData();
