let timer;
let hours = document.getElementById('hours');
let minutes = document.getElementById('minutes');
let seconds = document.getElementById('seconds');
let startButton = document.getElementById('start');
let stopButton = document.getElementById('stop');
let resetButton = document.getElementById('reset');

startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
resetButton.addEventListener('click', resetTimer);

function startTimer() {
  let totalTime = (parseInt(hours.value) || 0) * 3600 +
                 (parseInt(minutes.value) || 0) * 60 +
                 (parseInt(seconds.value) || 0);
  timer = setInterval(() => {
    if (totalTime <= 0) {
      clearInterval(timer);
      alert("Time's up!");
    } else {
      totalTime--;
      updateDisplay(totalTime);
    }
  }, 1000);
}

function stopTimer() {
  clearInterval(timer);
}

function resetTimer() {
  clearInterval(timer);
  hours.value = '';
  minutes.value = '';
  seconds.value = '';
  updateDisplay(0);
}

function updateDisplay(totalTime) {
  hours.value = Math.floor(totalTime / 3600);
  minutes.value = Math.floor((totalTime % 3600) / 60);
  seconds.value = totalTime % 60;
}