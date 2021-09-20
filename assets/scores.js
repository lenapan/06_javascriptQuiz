var clear = document.getElementById("clear");
var highscores = document.getElementById("highscores");

var initials = JSON.parse(localStorage.getItem("initials"));
var score = localStorage.getItem("Correct Answers out of 10");
var time = JSON.parse(localStorage.getItem("time"));
var all = localStorage.getItem("ALL");

clear.addEventListener("click", function(){	
	highscores.innerHTML = "";
	//localStorage.clear();
	localStorage.removeItem('initials');
	localStorage.removeItem('time');
	localStorage.removeItem('Correct Answers out of 10');
	localStorage.removeItem("ALL");
});
// let player = {}
function retrieveData(){
	if (score !== null || initials !== null || time !== null){
	var li = document.createElement("li");
	li.textContent =  "Newest Score: " + initials + " scored: " + score + "/10 with " + time + " seconds left.";
	highscores.appendChild(li);
	}
}
retrieveData();

function retrieveALL(){
	if (all !== null){
	var p = document.createElement("p");
	p.textContent =  all.replace(/[\{\}"\,\[\]']+/g,' ');
	p.style.width = '50%';
	highscores.appendChild(p);
	}
}
retrieveALL();