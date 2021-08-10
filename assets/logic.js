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
var d = document.getElementById("d");
// index for looping through the quiz array of question objects
var i = 1; //We're starting at 1 because line 47-51 already starts at index 0. Once user selects a choice, the next question to appear needs to be in index 1, not 0.          
var answer = 0; // see line 120 for the purpose of this variable
var correct = 0;
var end = document.getElementById("end-screen");

function displayQuestions(){
  var q = document.getElementById("questions");
      q.style.display = "block"; 
      q.style.fontWeight = "bold"; 
      q.style.color = "skyblue";

  var hide = document.getElementById("start");
      hide.style.display = "none";

  var title = document.getElementById("question-title");
  //var choice = document.getElementById("choices");
    title.textContent = quiz[0].quest;
    a.textContent = quiz[0].a;
    b.textContent = quiz[0].b;
    c.textContent = quiz[0].c;
    d.textContent = quiz[0].d;
  
  
  a.addEventListener("click", function(){
  if (i < quiz.length) {
    title.textContent = quiz[i].quest;
    a.textContent = quiz[i].a;
    b.textContent = quiz[i].b;
    c.textContent = quiz[i].c;
    d.textContent = quiz[i].d;
    i++;
    answer++;   
    }else{
      q.style.display = "none";
      end.style.display = "block";
    }
  });

  b.addEventListener("click", function(){
  if (i < quiz.length) {
    title.textContent = quiz[i].quest;
    a.textContent = quiz[i].a;
    b.textContent = quiz[i].b;
    c.textContent = quiz[i].c;
    d.textContent = quiz[i].d;
    i++;
    answer++;
    } 
    else{
    q.style.display = "none";
    end.style.display = "block";
    }
  });

  c.addEventListener("click", function(){
  if (i < quiz.length) {
    title.textContent = quiz[i].quest;
    a.textContent = quiz[i].a;
    b.textContent = quiz[i].b;
    c.textContent = quiz[i].c;
    d.textContent = quiz[i].d;
    i++;
    answer++; 
    } else{
    q.style.display = "none";
    end.style.display = "block";
    }
  });
  d.addEventListener("click", function(){
  if (i < quiz.length) {
    title.textContent = quiz[i].quest;
    a.textContent = quiz[i].a;
    b.textContent = quiz[i].b;
    c.textContent = quiz[i].c;
    d.textContent = quiz[i].d;
    i++;
    answer++;
    } else{
    q.style.display = "none";
    end.style.display = "block";
    }
  }); 

  } 
var score = document.getElementById("final-score");

function checkABCD(userSelect){
  if(userSelect == quiz[answer].answer){   // see questions.js file to check out the quiz objects and the answers to the multiple choice questions
    correct++;
    console.log(correct +" Correct. " + "Answer is " + quiz[answer].answer);
   // score.push(valueOf(correct));
    console.log("You selected " + userSelect);
  }else { 
    console.log("Wrong. " + "Answer is " + quiz[answer].answer);
    console.log("You selected " + userSelect);
  }
}

//When user clicks the start button, timer starts and questions appear
function startQuiz(a){
  document.getElementById("start").addEventListener("click", a);
}
startQuiz(displayQuestions);
startQuiz(setTime);