/*
$(document).ready(function(){

	$("#start").on("click", function(){
    $(".timer").empty();
  });

});
*/

/************************************************** */
var countDown = document.querySelector(".timer");
var start = 0;

function setTime() {
  var timerInterval = setInterval(function() {
    start++;
    countDown.style.color="red";
    countDown.textContent = "Time: " + start;

  }, 1000);
}

/************************************************** */

function displayQuestions(){
  var q = document.getElementById("questions");
      q.style.display = "block"; 
      q.style.fontWeight = "bold"; 
      q.style.color = "skyblue";

  var hide = document.getElementById("start");
      hide.style.display = "none";

  var title = document.getElementById("question-title");
  var choice = document.getElementById("choices");

  var choice1 = document.createElement("button");
  var choice2 = document.createElement("button");
  var choice3 = document.createElement("button");

    choice1.textContent = "A: " + quiz[0].a;
    choice2.textContent = "B: " +quiz[0].b;
    choice3.textContent = "C: " +quiz[0].c;
    q.appendChild(choice1);
    q.appendChild(choice2); 
    q.appendChild(choice3);

  var i = 0;

  title.addEventListener("click", function(){
  if (i < quiz[i].q.length) {
    title.textContent = quiz[i].q;
    i++;
  } else if(quiz[i].q === undefined){
   console.log("Done!");
  }
  });

  }
  
//When user clicks the start button, timer starts and questions appear
function startQuiz(a){
  document.getElementById("start").addEventListener("click", a);
}
startQuiz(displayQuestions);
startQuiz(setTime);