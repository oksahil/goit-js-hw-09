const throttle = require('lodash.throttle');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  body: document.querySelector('body'),
  startBtn: document.querySelector('[data-start]'),
  stopBtn: document.querySelector('[data-stop]'),
}

refs.startBtn.addEventListener('click', startBtnClick);
refs.stopBtn.addEventListener('click', stopBtnClick);
refs.stopBtn.setAttribute('disabled', true);
// let colorClick = 0;
function startBtnClick() {
    startColorId = setInterval(() => {
        const colorClick = getRandomHexColor();
        refs.body.style.backgroundColor = colorClick;
  }, 1000);
  

    
    refs.startBtn.setAttribute('disabled', true);
    refs.stopBtn.removeAttribute('disabled');
    
};


function stopBtnClick() {
    clearInterval(startColorId);
    refs.stopBtn.setAttribute('disabled', true);
    refs.startBtn.removeAttribute('disabled');
};