// Add class selectors
const timeEl = document.querySelector("h1");
const questionEl = document.querySelector('h4')
const questionOneEl = document.getElementById("q1");
const questionTwoEl = document.getElementById("q2");
const questionThreeEl = document.getElementById("q3");
const questionFourEl = document.getElementById("q4");
const highScoreEl = document.getElementById('high');
const wrongOrRight = document.getElementById('wrong-right');
const startButtonEl = document.getElementById('start-button');

const start = true;
let secondsLeft = 75;

function init() {
  getscores ();
}
// added start button 
function beginQuiz() {
  secondsLeft = 75;
  startTime();
}

function questionOne() {
  questionEl.textContent = "Which of the following keywords is used to define a variable in Javascript?";
  const rightAnswer = questionOneEl;
  questionOneEl.textContent = "Var";
  questionTwoEl.textContent = "Let";
  questionThreeEl.textContent = "Both 1 and 2";
  questionFourEl.textContent = "None";
  if (rightAnswer) {
    wrongOrRight.textContent = "Correct"
  } else {
    wrongOrRight.textContent = "false"
  }
}

function questionTwo() {
  questionEl.textContent = "Javascript is an _______ language?";
  questionOneEl.textContent = "Object-Oriented";
  questionTwoEl.textContent = "Object-Based";
  questionThreeEl.textContent = "Procedural";
  questionFourEl.textContent = "None of the above";
  if ()
} 

function questionThree() {
  questionEl.textContent = "Which of the following methods is used to access HTML elements using Javascript?";
  questionOneEl.textContent = "getElemntById()";
  questionTwoEl.textContent = "getElementByClassName()";
  questionThreeEl.textContent = "Both 1 and 2";
  questionFourEl.textContent = "None of the above";
  if ()
}

function questionFour() {
  questionEl.textContent = "How can a datatype be declared to be a constant type?";
  questionOneEl.textContent = "Const";
  questionTwoEl.textContent = "Var";
  questionThreeEl.textContent = "Let";
  questionFourEl.textContent = "Constant";
  if ()
}

startButtonEl.addEventListener('click', beginQuiz); 













// Create count down timer for quiz 


function startTime() {
  const timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = "Time Left:" + secondsLeft;
    if(secondsLeft === 0) {
        clearInterval(timerInterval);
        sendMessage();
      }
  
    }, 1000);
  }

  function sendMessage() {
    timeEl.textContent = " ";
  
  }
  

  
