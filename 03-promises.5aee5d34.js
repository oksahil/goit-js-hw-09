!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var u=new Error("Cannot find module '"+e+"'");throw u.code="MODULE_NOT_FOUND",u}).register=function(e,t){o[e]=t},t.parcelRequired7c6=r);var u=r("iU1Pc"),i={form:document.querySelector(".form"),delay:document.querySelector('[name="delay"]'),delayStep:document.querySelector('[name="step"]'),amount:document.querySelector('[name="amount"]'),btn:document.querySelector('[type="submit"]')};function l(e,t){var n=Math.random()>.3;return new Promise((function(o,r){return n?o({position:e,delayAll:t}):r({position:e,delayAll:t})}))}i.form.addEventListener("submit",(function(t){t.preventDefault();for(var n=0,o=i.delay.value,r=i.amount.value,a=i.delayStep.value,c=1;c<=Number(r);c+=1){n=c;var d=Number(o)+Number(a)*(n-1);l(n,d).then((function(t){var n=t.position,o=t.delayAll;setTimeout((function(){e(u).Notify.success("✅ Fulfilled promise ".concat(n," in ").concat(o,"ms"))}),o)})).catch((function(t){var n=t.position,o=t.delayAll;setTimeout((function(){e(u).Notify.failure("❌ Rejected promise ".concat(n," in ").concat(o,"ms"))}),o)}))}t.currentTarget.reset()}))}();
//# sourceMappingURL=03-promises.5aee5d34.js.map
