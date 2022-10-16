const timeEl = document.querySelector("h1");

let secondsLeft = 75;

function setTime() {
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
  
  setTime();
  
