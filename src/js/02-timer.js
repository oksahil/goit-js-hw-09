import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

const refs = {
    body: document.querySelector('body'),
    myInput: document.querySelector('input#datetime-picker'),
    startBtn: document.querySelector('[data-start]'),
    days: document.querySelector('[data-days]'),
    hours: document.querySelector('[data-hours]'),
    minutes: document.querySelector('[data-minutes]'),
    seconds: document.querySelector('[data-seconds]'),
    timer: document.querySelector('.timer'),
 
}

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
    onClose(selectedDates) {
     
    // console.log(selectedDates);
  },
};
 
const fp = flatpickr(refs.myInput, options);


refs.startBtn.addEventListener('click', startBtnClick);
refs.startBtn.setAttribute('disabled', true);
check();
refs.body.addEventListener('click', check);

function check() {
    refs.startBtn.setAttribute('disabled', true);  
   const selectedDate = new Date(fp.selectedDates); 
    if (options.defaultDate > selectedDate) {
        Notiflix.Notify.failure('Please choose a date in the future');
        refs.startBtn.setAttribute('disabled', true);
    } else {
        refs.startBtn.removeAttribute('disabled');
        Notiflix.Notify.info('Enter START');
    }
}


function startBtnClick() {
    refs.startBtn.setAttribute('disabled', true); 
    const selectedDate = new Date(fp.selectedDates);
    let ms = selectedDate.getTime() - options.defaultDate.getTime();
    startTimerId = setInterval(() => {
        ms = ms - 1000;
        convertMs(ms);
    }, 1000);
};

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
    if (days === 0 & hours === 0 & minutes === 0 & seconds === 0) {
        clearInterval(startTimerId);
        Notiflix.Notify.success('Success');
    }
    // console.log(days, hours, minutes, seconds);
    refs.days.textContent = addLeadingZero(days);
    refs.hours.textContent = addLeadingZero(hours);
    refs.minutes.textContent = addLeadingZero(minutes);
    refs.seconds.textContent = addLeadingZero(seconds);
  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
    const zeroValue = value.toString().padStart(2, '0');
    return zeroValue;
}