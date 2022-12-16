import data from '../data.js';

function getTimeComponent() {
  function padDigits(num) {
    return num.toString().padStart(2, '0');
  }

  const time = document.createElement('div');
  time.className = 'time';

  const minutes = document.createElement('span');
  minutes.className = 'minutes';
  minutes.innerText = `${padDigits(data.minutes)}:`;

  const seconds = document.createElement('span');
  seconds.className = 'seconds';
  seconds.innerText = `${padDigits(data.seconds)}:`;

  const milliseconds = document.createElement('span');
  milliseconds.className = 'milliseconds';
  milliseconds.innerText =
    data.milliseconds < 10
      ? '00' + data.milliseconds
      : data.milliseconds < 100
      ? '0' + data.milliseconds
      : data.milliseconds;

  time.append(minutes, seconds, milliseconds);

  const timeEl = document.getElementById('time');
  timeEl.append(time);

  return timeEl;
}

export default getTimeComponent;
