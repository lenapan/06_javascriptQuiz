var countDown = document.querySelector(".timer");
var start = 999;
var interval;

function setTime() {
    interval = setInterval(function() {
    start--;
    countDown.style.color="red";
    countDown.textContent = "Time: " + start;

  }, 1000);
}
function reduceByTen() {
    setInterval(function() {
    start= start-10;
  }, 1000);
}
function pauseTime(){
  clearInterval(interval);
}
/************************************************** */
//assigning multiple choice buttons to a variable
var a = document.getElementById("a");
var b = document.getElementById("b");
var c = document.getElementById("c");
var d = document.getElementById("d");

// index for looping through the quiz array of question objects
var i = 1; //'click' loop to start at index 1, not 0. Because the previous question is already at index 0 when you hit "Start Quiz"         
var answer = 0; // to be used for looping through the corresponding answers to each question for COMPARISON
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
        pauseTime(); console.log(countDown.innerText + " seconds remaining");
        }  
    });
  });
} 
function checkABCD(userSelect){
  if(userSelect == quiz[answer].answer){   // see questions.js file to check out the quiz objects and the answers to the multiple choice questions
    correct++; 
    console.log(correct +" Correct." + " Answer is " + quiz[answer].answer);
    console.log("You selected " + userSelect);
    localStorage.getItem(correct);
    localStorage.setItem("Correct Answers out of 10", correct);
  }else { 
    console.log("Wrong. " + "Answer is " + quiz[answer].answer);
    console.log("You selected " + userSelect);
    reduceByTen();
  }
}
function saveScore(){
  var n = initials.value;
  var people = [];
  people.push({name: n});

  console.log(n);
  console.log(people);

  localStorage.getItem(n);
  localStorage.setItem("initial", n);
 // window.location.href="assets/highscores.html";
}
//When user clicks the start button, timer starts and questions appear
function startQuiz(a){
  document.getElementById("start").addEventListener("click", a);
}
startQuiz(displayQuestions);
startQuiz(setTime);