!function(){var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function e(t){return t&&t.__esModule?t.default:t}var n={};Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(t){return t&&t.constructor===Symbol?"symbol":typeof t};var o="Expected a function",r=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,a=/^0o[0-7]+$/i,f=parseInt,c="object"==typeof t&&t&&t.Object===Object&&t,d="object"==typeof self&&self&&self.Object===Object&&self,l=c||d||Function("return this")(),s=Object.prototype.toString,b=Math.max,v=Math.min,p=function(){return l.Date.now()};function y(t,e,n){var r,i,u,a,f,c,d=0,l=!1,s=!1,y=!0;if("function"!=typeof t)throw new TypeError(o);function j(e){var n=r,o=i;return r=i=void 0,d=e,a=t.apply(o,n)}function h(t){return d=t,f=setTimeout(O,e),l?j(t):a}function B(t){var n=t-c;return void 0===c||n>=e||n<0||s&&t-d>=u}function O(){var t=p();if(B(t))return T(t);f=setTimeout(O,function(t){var n=e-(t-c);return s?v(n,u-(t-d)):n}(t))}function T(t){return f=void 0,y&&r?j(t):(r=i=void 0,a)}function w(){var t=p(),n=B(t);if(r=arguments,i=this,c=t,n){if(void 0===f)return h(c);if(s)return f=setTimeout(O,e),j(c)}return void 0===f&&(f=setTimeout(O,e)),a}return e=g(e)||0,m(n)&&(l=!!n.leading,u=(s="maxWait"in n)?b(g(n.maxWait)||0,e):u,y="trailing"in n?!!n.trailing:y),w.cancel=function(){void 0!==f&&clearTimeout(f),d=0,r=c=i=f=void 0},w.flush=function(){return void 0===f?a:T(p())},w}function m(t){var o=void 0===t?"undefined":e(n)(t);return!!t&&("object"==o||"function"==o)}function g(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(n)(t))||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==s.call(t)}(t))return NaN;if(m(t)){var o="function"==typeof t.valueOf?t.valueOf():t;t=m(o)?o+"":o}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(r,"");var c=u.test(t);return c||a.test(t)?f(t.slice(2),c?2:8):i.test(t)?NaN:+t}var j={body:document.querySelector("body"),startBtn:document.querySelector("[data-start]"),stopBtn:document.querySelector("[data-stop]")};j.startBtn.addEventListener("click",(function(){startColorId=setInterval((function(){var t="#".concat(Math.floor(16777215*Math.random()).toString(16));j.body.style.backgroundColor=t}),1e3),j.startBtn.setAttribute("disabled",!0),j.stopBtn.removeAttribute("disabled")})),j.stopBtn.addEventListener("click",(function(){clearInterval(startColorId),j.stopBtn.setAttribute("disabled",!0),j.startBtn.removeAttribute("disabled")})),j.stopBtn.setAttribute("disabled",!0)}();
//# sourceMappingURL=01-color-switcher.12e86dbf.js.map
