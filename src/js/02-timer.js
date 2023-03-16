const inputEl = document.querySelector('#datetime-picker');
const buttoEl = document.querySelector('[data-start]');
const timerEl = document.querySelector('.timer');

import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

let selDate;
let curDate;
let timerId;

const flatpickrOptions = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    selDate = Date.parse(selectedDates[0]);
    curDate = Date.parse(flatpickrOptions.defaultDate);
    if (selDate <= curDate) {
      window.alert('Please choose a date in the future');
    } else {
      buttoEl.disabled = false;
      buttoEl.addEventListener('click', onBtnClick);
    }
  },
};

buttoEl.disabled = true;
inputEl.disabled = false;

const fl = flatpickr(inputEl, flatpickrOptions);

function onBtnClick(evt) {
  timerId = setInterval(() => {
    setTimer(selDate, timerEl);
  }, 1000);
  evt.target.disabled = true;
  inputEl.disabled = true;
  fl.destroy();
}

function setTimer(selDate, timerElement) {
  const curDate = Date.parse(new Date());

  if (selDate < curDate) {
    clearInterval(timerId);
    return;
  } else {
    const timerMs = selDate - curDate;
    const { days, hours, minutes, seconds } = convertMs(timerMs);
    timerElement.querySelector('[data-days]').textContent =
      addLeadingZero(days);
    timerElement.querySelector('[data-hours]').textContent =
      addLeadingZero(hours);
    timerElement.querySelector('[data-minutes]').textContent =
      addLeadingZero(minutes);
    timerElement.querySelector('[data-seconds]').textContent =
      addLeadingZero(seconds);
  }
}
function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}
