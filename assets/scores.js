var clear = document.getElementById("clear");
var highscores = document.getElementById("highscores");

clear.addEventListener("click", function(event){
	event.preventDefault();
	highscores.value = "";

	/*
	elements.forEach(function(element) {
    element.textContent = "";
  	});
  	*/

});