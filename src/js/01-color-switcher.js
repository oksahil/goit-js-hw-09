const throttle = require('lodash.throttle');
let startColorId = null;
const refs = {
  body: document.querySelector('body'),
  startBtn: document.querySelector('[data-start]'),
  stopBtn: document.querySelector('[data-stop]'),
}

refs.startBtn.addEventListener('click', startBtnClick);
refs.stopBtn.addEventListener('click', stopBtnClick);
refs.stopBtn.setAttribute('disabled', true);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function startBtnClick() {
   startColorId = setInterval(() => {
        const colorClick = getRandomHexColor();
        refs.body.style.backgroundColor = colorClick;
    }, 1000);
    refs.startBtn.setAttribute('disabled', true);
    refs.stopBtn.removeAttribute('disabled');
    return startColorId;
    
};


function stopBtnClick() {
    clearInterval(startColorId);
    refs.stopBtn.setAttribute('disabled', true);
    refs.startBtn.removeAttribute('disabled');
};