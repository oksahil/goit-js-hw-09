function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},n={},l=t.parcelRequired7c6;null==l&&((l=function(e){if(e in o)return o[e].exports;if(e in n){var t=n[e];delete n[e];var l={id:e,exports:{}};return o[e]=l,t.call(l.exports,l,l.exports),l.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){n[e]=t},t.parcelRequired7c6=l);var r=l("eWCmQ");const u={form:document.querySelector(".form"),delay:document.querySelector('[name="delay"]'),delayStep:document.querySelector('[name="step"]'),amount:document.querySelector('[name="amount"]'),btn:document.querySelector('[type="submit"]')};function i(e,t){const o=Math.random()>.3;return new Promise(((n,l)=>o?n({position:e,delayAll:t}):l({position:e,delayAll:t})))}u.btn.addEventListener("click",(function(t){t.preventDefault();let o=0,n=u.delay.value;const l=u.amount.value,a=u.delayStep.value;for(let t=1;t<=Number(l);t+=1){o=t;let l=Number(n)+Number(a)*o;i(o,l).then((({position:t,delayAll:o})=>{setTimeout((()=>{e(r).Notify.success(`✅ Fulfilled promise ${t} in ${o}ms`)}),o)})).catch((({position:t,delayAll:o})=>{setTimeout((()=>{e(r).Notify.failure(`❌ Rejected promise ${t} in ${o}ms`)}),o)}))}}));
//# sourceMappingURL=03-promises.c9517a0c.js.map
