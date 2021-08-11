var countDown = document.querySelector(".timer");
var start = 555;

function setTime() {
  var timerInterval = setInterval(function() {
    start--;
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
var i = 1; //We're declaring this at 1 for the "next click" or  next question because when user hits "Start Quiz," it already starts at index 0. Once user selects a choice, the next question to appear needs to be in index 1, not 0.          
var answer = 0; // to compare what user selects VS the correct answer in each question object in the quiz array
var correct = 0;
var end = document.getElementById("end-screen");
var score = document.getElementById("final-score");
var initials = document.getElementById("initials");

function displayQuestions(){
  var q = document.getElementById("questions");
      q.style.display = "block"; 
      q.style.fontWeight = "bold"; 
      q.style.color = "skyblue";

  var hide = document.getElementById("start");
      hide.style.display = "none";

  var title = document.getElementById("question-title");

    title.textContent = quiz[0].quest;
    a.textContent = quiz[0].a;
    b.textContent = quiz[0].b;
    c.textContent = quiz[0].c;
    d.textContent = quiz[0].d;

  [a,b,c,d].forEach((button)=>{
    button.addEventListener('click',function(){
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
        score.innerHTML = correct + " out of " + quiz.length;
        }  
    });
  });
} 
function checkABCD(userSelect){
  if(userSelect == quiz[answer].answer){   // see questions.js file to check out the quiz objects and the answers to the multiple choice questions
    correct++;
    console.log(correct +" Correct." + " Answer is " + quiz[answer].answer);
    console.log("You selected " + userSelect);
  }else { 
    console.log("Wrong. " + "Answer is " + quiz[answer].answer);
    console.log("You selected " + userSelect);
  }
}
function saveScore(){
  var n = initials.value;
  var people = [];
  people.push({name: n});
  console.log(n);
  console.log(people);
  window.location.href="assets/highscores.html";
}

//When user clicks the start button, timer starts and questions appear
function startQuiz(a){
  document.getElementById("start").addEventListener("click", a);
}
startQuiz(displayQuestions);
startQuiz(setTime);