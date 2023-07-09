let number = 0;
let cron;
let p = document.querySelector('p');
let lapsList = document.getElementById('listLaps');

function start() {
  cron = setInterval(function () {
    number++;
    p.innerHTML = formatTime(number);
  }, 1000);
}

function stop() {
  clearInterval(cron);
}

function laps() {
  let lapTime = formatTime(number);
  let lapItem = document.createElement('li');
  lapItem.textContent = lapTime;
  lapsList.appendChild(lapItem);
}

function reset() {
  number = 0;
  p.innerHTML = '00:00:00';
  lapsList.innerHTML = '';
  clearInterval(cron);
}

function formatTime(time) {
  let hours = Math.floor(time / 3600);
  let minutes = Math.floor((time % 3600) / 60);
  let seconds = time % 60;

  return (
    padZero(hours) + ':' +
    padZero(minutes) + ':' +
    padZero(seconds)
  );
}

function padZero(number) {
  return number.toString().padStart(2, '0');
}
