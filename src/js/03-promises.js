import Notiflix from 'notiflix';

const refs = {
    form: document.querySelector('.form'),
    delay: document.querySelector('[name="delay"]'),
    delayStep: document.querySelector('[name="step"]'),
    amount: document.querySelector('[name="amount"]'),
    btn: document.querySelector('[type="submit"]'),
}
//
refs.btn.addEventListener('click', startPromise);

function createPromise(position, delayAll) {
  const shouldResolve = Math.random() > 0.3;
    return new Promise((resolve, reject) => {
             if (shouldResolve) {
          return resolve({ position, delayAll });
        } else {
          return reject({ position, delayAll });
        }
  })
};

function startPromise(e) {
  e.preventDefault();
  let position = 0;
  let delayInput = refs.delay.value;
  const amountInput = refs.amount.value;
  const delayStepInput = refs.delayStep.value;
 
    for (let i = 1; i <= Number(amountInput); i += 1) {
      position = i;
      
      let delayAll = Number(delayInput) + Number(delayStepInput) * position;
     createPromise(position, delayAll)
        .then(({ position, delayAll }) => {
            setTimeout(() => {
            Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delayAll}ms`);
          }, delayAll);
        })
    
        .catch(({ position, delayAll }) => {
            setTimeout(() => {
            Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delayAll}ms`);
          }, delayAll);
        });
    }
};