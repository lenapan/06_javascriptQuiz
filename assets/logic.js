/*
$(document).ready(function(){

	$("#start").on("click", function(){
    $(".timer").empty();
  });

});
*/
var quiz =   
  {
    id:1,
    question: "Why?"
  }

  
  
   
  
  

/************************************************** */
var countDown = document.querySelector(".timer");
var secondsLeft = 1000;

function setTime() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    countDown.style.color="red";
    countDown.textContent = "Time Remaining: " + secondsLeft;

    if(secondsLeft === 0) {
      clearInterval(timerInterval);
      sendMessage();
    }

  }, 1000);
}
function sendMessage() {
 alert("Time is up");
}
/************************************************** */
function displayQuestions(){
  q = document.getElementById("questions");

  q.style.display = "block";
  q.style.fontWeight = "bold";
  q.style.color = "skyblue";
  
  q.textContent = quiz.question;
}

//When user clicks the start button, timer starts and questions appear
document.getElementById("start").addEventListener("click", displayQuestions);
document.getElementById("start").addEventListener("click", setTime);
        //  $("#start").on("click", setTime());