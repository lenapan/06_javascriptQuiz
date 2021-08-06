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
//assigning multiple choice buttons to a variable
var a = document.getElementById("a");
var b = document.getElementById("b");
var c = document.getElementById("c");
var e = document.getElementById("d");

function displayQuestions(){
  var q = document.getElementById("questions");
      q.style.display = "block"; 
      q.style.fontWeight = "bold"; 
      q.style.color = "skyblue";

  var hide = document.getElementById("start");
      hide.style.display = "none";

  var title = document.getElementById("question-title");
  var choice = document.getElementById("choices");

    title.textContent = quiz[0].quest;
    a.textContent = "A: " +quiz[0].a;
    b.textContent = "B: " +quiz[0].b;
    c.textContent = "C: " +quiz[0].c;
    d.textContent = "D: " +quiz[0].d;

  var i = 1;

  a.addEventListener("click", function(){
  if (i < quiz[i].quest.length) {
    title.textContent = quiz[i].quest;
    i++;
  } else if(quiz[i].quest === undefined){
   console.log("Done!");
  }
  });

   b.addEventListener("click", function(){
  if (i < quiz[i].quest.length) {
    title.textContent = quiz[i].quest;
    i++;
  } else if(quiz[i].quest === undefined){
   console.log("Done!");
  }
  });

    c.addEventListener("click", function(){
  if (i < quiz[i].quest.length) {
    title.textContent = quiz[i].quest;
    i++;
  } else if(quiz[i].quest === undefined){
   console.log("Done!");
  }
  });

     d.addEventListener("click", function(){
  if (i < quiz[i].quest.length) {
    title.textContent = quiz[i].quest;
    i++;
  } else if(quiz[i].quest === undefined){
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