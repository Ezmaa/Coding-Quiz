// Add class selectors
const timeEl = document.getElementById("time");
const questionEl = document.querySelector('h4')
const choicesEl = document.querySelector('ol')
const questionOneEl = document.getElementById("q1");
const questionTwoEl = document.getElementById("q2");
const questionThreeEl = document.getElementById("q3");
const questionFourEl = document.getElementById("q4");
const highScoreEl = document.getElementById('high');
const wrongOrRight = document.getElementById('wrong-right');
const startButtonEl = document.getElementById('start-button');

let start = true;
let secondsLeft = 75;
let index = 0;

let questionsArr = [
  {
    question: 'Which of the following keywords is used to define a variable in Javascript?',
    choices: ["Var", "Let", "Both 1 and 2", "None"],
    answer: 2
  },
  {
    question: 'Javascript is an _______ language?',
    choices: ["Object-Oriented", "Object-Based", "Procedural", "None of the above"],
    answer: 3
  },
  {
    question: 'Which of the following methods is used to access HTML elements using Javascript?',
    choices: ["getElemntById()", "getElementByClassName()", "Both 1 and 2", "None of the above"],
    answer: 4
  },
  {
    question: 'How can a datatype be declared to be a constant type?',
    choices: ["Const", "Var", "Let", "Constant"],
    answer: 0
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
    //tell correct at bottom
    //increase score by 50
  } else {
    //tell incorrect at bottom
    //substract time by 10
  }
 
//compare index to length of questionsArr
//if end of array, end game
//else
  index++;
  displayQuestions();

}

// index++
// example()

function init() {
  getscores();
}
// added start button 
function beginQuiz() {
  secondsLeft = 75;
  startTime();
  displayQuestions()
}

// function questionOne() {
//   questionEl.textContent = "Which of the following keywords is used to define a variable in Javascript?";
//   const rightAnswer = questionOneEl;
//   questionOneEl.textContent = "Var";
//   questionTwoEl.textContent = "Let";
//   questionThreeEl.textContent = "Both 1 and 2";
//   questionFourEl.textContent = "None";
//   if (rightAnswer) {
//     wrongOrRight.textContent = "Correct"
//   } else {
//     wrongOrRight.textContent = "false"
//   }
// }

// function questionTwo() {
//   questionEl.textContent = "Javascript is an _______ language?";
//   questionOneEl.textContent = "Object-Oriented";
//   questionTwoEl.textContent = "Object-Based";
//   questionThreeEl.textContent = "Procedural";
//   questionFourEl.textContent = "None of the above";
//   if ()
// } 

// function questionThree() {
//   questionEl.textContent = "Which of the following methods is used to access HTML elements using Javascript?";
//   questionOneEl.textContent = "getElemntById()";
//   questionTwoEl.textContent = "getElementByClassName()";
//   questionThreeEl.textContent = "Both 1 and 2";
//   questionFourEl.textContent = "None of the above";
//   if ()
// }

// function questionFour() {
//   questionEl.textContent = "How can a datatype be declared to be a constant type?";
//   questionOneEl.textContent = "Const";
//   questionTwoEl.textContent = "Var";
//   questionThreeEl.textContent = "Let";
//   questionFourEl.textContent = "Constant";
//   if ()
// }

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



