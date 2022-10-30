// Add class selectors
const timeEl = document.getElementById("time");
const questionEl = document.querySelector('h4')
const choicesEl = document.querySelector('ol')
const highScoreEl = document.getElementById('high');
const wrongOrRight = document.querySelector('h5');
const startButtonEl = document.getElementById('start-button');

let start = true;
let secondsLeft = 0;
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
    answer: "Object-oriented",
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

function displayQuestions() {
  questionEl.textContent = questionsArr[index].question

  choicesEl.textContent = '';
  for (let i = 0; i < questionsArr[index].choices.length; i++) {
    //create html tag for each one of the choices
    let li = document.createElement('li');

    //display text on li
    li.textContent = questionsArr[index].choices[i]

    choicesEl.appendChild(li)

    li.onclick = checkAnswer;
  }
}

function checkAnswer(event) {
  event.preventDefault();
  console.log(event.target.innerHTML)
  console.log(this.textContent)

  let chosenAnswer = event.target.innerHTML
  if (chosenAnswer == questionsArr[index].answer) {
    //increase score by 50
    highScoreCounter = highScoreCounter + 50;
  } else {
    //substract time by 10
    secondsLeft = secondsLeft - 10;
    timeEl.textContent = "Time Left: " + secondsLeft;
  }
  //compare index to length of questionsArr
  //if end of array, end game
  //else
  index++;
  displayQuestions();
}

function endGame() {

}

// index++
// example()

function init() {
  getscores();
}
// added start button 
function beginQuiz() {
  secondsLeft = 50;
  startButtonEl.disabled = true;
  startTime();
  displayQuestions()
}

startButtonEl.addEventListener('click', beginQuiz);

// Create count down timer for quiz 
function startTime() {
  const timerInterval = setInterval(function () {
    secondsLeft--;
    timeEl.textContent = "Time Left: " + secondsLeft;
    if (secondsLeft === 0) {
      clearInterval(timerInterval);
      sendMessage();
    }

  }, 1000);
}

function sendMessage() {
  timeEl.textContent = " ";
  

}



