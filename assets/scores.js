var clear = document.getElementById("clear");
var highscores = document.getElementById("highscores");

var initials = localStorage.getItem("initials");
var score = localStorage.getItem("correct");
var time = localStorage.getItem("time");
// var people = localStorage.getItem("people"); //[]

clear.addEventListener("click", function(){	
	highscores.innerHTML = "";
	//localStorage.clear();
	localStorage.removeItem('initials');
	localStorage.removeItem('time');
	localStorage.removeItem('correct');
	
});
// let player = {}
function retrieveData(){
	if (score !== null || initials !== null || time !== null){
	var li = document.createElement("li");
	li.textContent =  initials + " scored: " + score + "/10 with " + time + " seconds left.";
	highscores.appendChild(li);
	}
}
retrieveData();

// var people = [];
// function retrieveArr(){
	
// 		var p = document.createElement("p");
// 		p.textContent = people;
// 		highscores.appendChild(p);

// }
// retrieveArr();