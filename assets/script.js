// Add class selectors
const timeEl = document.getElementById('time');
const questionEl = document.querySelector('h4');
const userInitials = document.getElementById('initials');
let yourScore = document.querySelector('your-score');
const choicesEl = document.querySelector('ol');
const highScoreEl = document.getElementById('high');
const initialStart = document.getElementById('start');
const startButtonEl = document.getElementById('start-button');
const submitBtn = document.getElementById('submitBtn');

let start = true;
let secondsLeft = 50;
let index = 0;
let highScoreCounter = 0;

let questionsArr = [
  {
    question: 'Which of the following keywords is used to define a variable in Javascript?',
    choices: ["var", "let", "Both 1 and 2", "None"],
    answer: "var",
  },
  {
    question: 'Javascript is an _______ language?',
    choices: ["Object-Oriented", "Object-Based", "Procedural", "None of the above"],
    answer: "Object-Oriented",
  },
  {
    question: 'Which of the following methods is used to access HTML elements using Javascript?',
    choices: ["getElemntById()", "getElementByClassName()", "Both 1 and 2", "None of the above"],
    answer: "Both 1 and 2",
  },
  {
    question: 'How can a datatype be declared to be a constant type?',
    choices: ["Const", "Var", "Let", "Constant"],
    answer: "Const",
  }
]

// added start button 
function beginQuiz() {
  secondsLeft = 50;
  startButtonEl.hidden = true;
  initialStart.textContent = "";
  // userInitials.textContent = "";
  startTime();
  displayQuestions()
};

startButtonEl.addEventListener('click', beginQuiz);

// Create count down timer for quiz 
function startTime() {
  const timerInterval = setInterval(function () {
    secondsLeft--;
    timeEl.textContent = "Time Left: " + secondsLeft;
    if (secondsLeft <= 0 || index >= questionsArr.length) {
      clearInterval(timerInterval);
      endGame();
  }
  }, 1000);
};



// sorts array and displays questions + answers 
function displayQuestions() {
  questionEl.textContent = questionsArr[index].question;
  choicesEl.textContent = '';
  for (let i = 0; i < questionsArr[index].choices.length; i++) {
    //create html tag for each one of the choices
    let li = document.createElement('li');
    //display text on li
    li.textContent = questionsArr[index].choices[i]
    choicesEl.appendChild(li)
    li.onclick = checkAnswer;
  }
};

// checks answer adds points or subtracts from timer
function checkAnswer(event) {
  event.preventDefault();
  let chosenAnswer = event.target.innerHTML
  if (chosenAnswer == questionsArr[index].answer) {
    //increase score by 50
    highScoreCounter = highScoreCounter + 50;
  } else {
    //substract time by 10
    secondsLeft = secondsLeft - 10;
    timeEl.textContent = "Time Left: " + secondsLeft;
  }
  index++;
  displayQuestions();
}

// game is ended and highscores page is displayed 
function endGame() {
  timeEl.textContent = "";
  questionEl.textContent = "";
  choicesEl.textContent = "";
  yourScore.textContent = "Your Score is " + highScoreCounter;
  userInitials.style.display = "block";
  // need to display submit form once quiz is finished 
}

// store highscores in local storage 
submitBtn.addEventListener("click", function(event) {
  event.preventDefault();

if (userInitials.textContent === "") {
  alert("Please enter your initials!");
  return;
}

const userScore = {
  user: userInitials.value,
  score: highScoreCounter.value 
};
 

localStorage.setItem("userScore", JSON.stringify(userScore));
renderMessage();
});

function renderMessage() {
  let scoreInput = JSON.parse(localStorage.getItem("userScore"));
  if (scoreInput !== null) {
    yourScore.textContent = scoreInput.user + " score is " + scoreInput.score
  }
}

console.log(userInitials);
console.log(userScore);
console.log();