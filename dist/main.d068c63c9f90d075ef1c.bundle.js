(()=>{"use strict";var e,t={5527:(e,t,n)=>{n(5377),n(6248),n(1418),n(3238);function i(e,t,n,i,r,o,s){try{var a=e[o](s),c=a.value}catch(e){return void n(e)}a.done?t(c):Promise.resolve(c).then(i,r)}function r(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var s=e.apply(t,n);function a(e){i(s,r,o,a,c,"next",e)}function c(e){i(s,r,o,a,c,"throw",e)}a(void 0)}))}}function o(){return(o=r(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.resolve("async is workimg");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}(function(){return o.apply(this,arguments)})().then(console.log("Babel!"));n(5849),n(2274),n(3214),n(5901),n(2189),n(1047),n(7460),n(5769),n(4078);function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var a=function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.container,i=void 0===n?null:n,r=t.btns,o=void 0===r?null:r,a=t.next,c=void 0===a?null:a,l=t.prev,u=void 0===l?null:l,f=t.activeClass,d=void 0===f?"":f,h=t.animate,p=t.autoplay;s(this,e),this.container=document.querySelector(i);try{this.slides=this.container.children}catch(e){}this.btns=document.querySelectorAll(o),this.prev=document.querySelector(u),this.next=document.querySelector(c),this.activeClass=d,this.animate=h,this.autoplay=p,this.slideIndex=1};function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function f(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,i=h(e);if(t){var r=h(this).constructor;n=Reflect.construct(i,arguments,r)}else n=i.apply(this,arguments);return d(this,n)}}function d(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var p=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}(o,e);var t,n,i,r=f(o);function o(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o),r.call(this,e)}return t=o,(n=[{key:"showSlides",value:function(e){var t=this;e>this.slides.length&&(this.slideIndex=1),e<1&&(this.slideIndex=this.slides.length);try{this.hanson.style.opacity="0",3==e?(this.hanson.classList.add("animated"),setTimeout((function(){t.hanson.style.opacity="1",t.hanson.classList.add("slideInUp")}),3e3)):this.hanson.classList.remove("slideInUp")}catch(e){}this.slides.forEach((function(e,t){e.style.display="none"})),this.slides[this.slideIndex-1].style.display="block",this.slides[this.slideIndex-1].classList.add("animated","fadeIn")}},{key:"plusSlides",value:function(e){this.showSlides(this.slideIndex+=e)}},{key:"bindTriggers",value:function(){var e=this;this.btns.forEach((function(t){t.addEventListener("click",(function(){e.plusSlides(1)})),t.parentNode.previousElementSibling.addEventListener("click",(function(t){t.preventDefault(),e.slideIndex=1,e.showSlides(e.slideIndex)}))})),document.querySelectorAll(".prevmodule").forEach((function(t){t.addEventListener("click",(function(t){t.stopPropagation(),t.preventDefault(),e.plusSlides(-1)}))})),document.querySelectorAll(".nextmodule").forEach((function(t){t.addEventListener("click",(function(t){t.stopPropagation(),t.preventDefault(),e.plusSlides(1)}))}))}},{key:"render",value:function(){if(this.container){try{this.hanson=document.querySelector(".hanson")}catch(e){}this.showSlides(this.slideIndex),this.bindTriggers()}}}])&&l(t.prototype,n),i&&l(t,i),o}(a);function y(e){return(y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function v(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function b(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,i=w(e);if(t){var r=w(this).constructor;n=Reflect.construct(i,arguments,r)}else n=i.apply(this,arguments);return g(this,n)}}function g(e,t){return!t||"object"!==y(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function w(e){return(w=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var _=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(o,e);var t,n,i,r=b(o);function o(e,t,n,i,s,a){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o),r.call(this,e,t,n,i,s,a)}return t=o,(n=[{key:"init",value:function(){var e=this;try{this.container.style.cssText="\n            display: flex;\n            flex-wrap: wrap;\n            overflow: hidden;\n            align-items: flex-start;\n        ",this.bindTriggers(),this.decorizeSlides(),this.autoplay&&setInterval((function(){e.nextSlide()}),5e3)}catch(e){}}},{key:"bindTriggers",value:function(){var e=this;this.next.addEventListener("click",(function(){e.nextSlide()})),this.prev.addEventListener("click",(function(){for(var t=e.slides.length-1;t>0;t--)if("BUTTON"!==e.slides[t].tagName){var n=e.slides[t];e.container.insertBefore(n,e.slides[0]),e.decorizeSlides();break}}))}},{key:"decorizeSlides",value:function(){var e=this;this.slides.forEach((function(t){t.classList.remove(e.activeClass),e.animate&&(t.querySelector(".card__title").style.opacity="0.4",t.querySelector(".card__controls-arrow").style.opacity="0")})),this.slides[0].closest("button")||this.slides[0].classList.add(this.activeClass),this.animate&&(this.slides[0].querySelector(".card__title").style.opacity="1",this.slides[0].querySelector(".card__controls-arrow").style.opacity="1")}},{key:"nextSlide",value:function(){"BUTTON"==this.slides[1].tagName&&"BUTTON"==this.slides[2].tagName?(this.container.appendChild(this.slides[0]),this.container.appendChild(this.slides[1]),this.container.appendChild(this.slides[2]),this.decorizeSlides()):"BUTTON"==this.slides[1].tagName?(this.container.appendChild(this.slides[0]),this.container.appendChild(this.slides[1]),this.decorizeSlides()):(this.container.appendChild(this.slides[0]),this.decorizeSlides())}}])&&v(t.prototype,n),i&&v(t,i),o}(a);n(8010);function S(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var k=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.btns=document.querySelectorAll(t),this.overlay=document.querySelector(n),this.close=this.overlay.querySelector(".close"),this.onPlayerStateChange=this.onPlayerStateChange.bind(this)}var t,n,i;return t=e,(n=[{key:"bindTriggers",value:function(){var e=this;this.btns.forEach((function(t,n){try{var i=t.closest(".module__video-item").nextElementSibling;n%2==0&&i.setAttribute("data-disabled","true")}catch(e){}t.addEventListener("click",(function(){t.closest(".module__video-item")&&"true"===t.closest(".module__video-item").getAttribute("data-disabled")||(e.activeBtn=t,document.querySelector("iframe#frame")?(e.overlay.style.display="flex",e.path!==t.getAttribute("data-url")&&(e.path=t.getAttribute("data-url"),e.player.loadVideoById({videoId:e.path}))):(e.path=t.getAttribute("data-url"),e.createPlayer(e.path)))}))}))}},{key:"bindCloseBtn",value:function(){var e=this;this.close.addEventListener("click",(function(){e.overlay.style.display="none",e.player.stopVideo()}))}},{key:"createPlayer",value:function(e){this.player=new YT.Player("frame",{height:"100%",width:"100%",videoId:"".concat(e),events:{onStateChange:this.onPlayerStateChange}}),this.overlay.style.display="flex"}},{key:"onPlayerStateChange",value:function(e){try{var t=this.activeBtn.closest(".module__video-item").nextElementSibling,n=this.activeBtn.querySelector("svg").cloneNode(!0);0===e.data&&t.querySelector(".play__circle").classList.contains("closed")&&(t.querySelector(".play__circle").classList.remove("closed"),t.querySelector("svg").remove(),t.querySelector(".play__circle").appendChild(n),t.querySelector(".play__text").textContent="play video",t.querySelector(".play__text").classList.remove("attention"),t.style.opacity=1,t.style.filter="none",t.setAttribute("data-disabled","false"))}catch(e){}}},{key:"init",value:function(){if(this.btns.length>0){var e=document.createElement("script");e.src="https://www.youtube.com/iframe_api";var t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t),this.bindTriggers(),this.bindCloseBtn()}}}])&&S(t.prototype,n),i&&S(t,i),e}();function x(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var E=function(){function e(t,n,i){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e);try{this.oldOfficer=document.querySelector(t),this.newOfficer=document.querySelector(n),this.oldItems=this.oldOfficer.querySelectorAll(i),this.newItems=this.newOfficer.querySelectorAll(i),this.oldCounter=0,this.newCounter=0}catch(e){}}var t,n,i;return t=e,(n=[{key:"bindTriggers",value:function(e,t,n){e.querySelector(".plus").addEventListener("click",(function(){n!==t.length-2?(t[n].style.display="flex",t[n].classList.add("animated","flipInX"),n++):(t[n].style.display="flex",t[n].classList.add("animated","flipInX"),t[t.length-1].remove())}))}},{key:"hideItems",value:function(e){e.forEach((function(e,t,n){t!==n.length-1&&(e.style.display="none")}))}},{key:"init",value:function(){try{this.hideItems(this.oldItems),this.hideItems(this.newItems),this.bindTriggers(this.oldOfficer,this.oldItems,this.oldCounter),this.bindTriggers(this.newOfficer,this.newItems,this.newCounter)}catch(e){}}}])&&x(t.prototype,n),i&&x(t,i),e}();n(1203),n(7760),n(911),n(1940),n(1370);function O(e,t,n,i,r,o,s){try{var a=e[o](s),c=a.value}catch(e){return void n(e)}a.done?t(c):Promise.resolve(c).then(i,r)}function C(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var T=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.forms=document.querySelectorAll(t),this.inputs=document.querySelectorAll("input"),this.message={loading:"Загрузка...",success:"Спасибо! Скоро мы с вами свяжемся!",failure:"Что-то пошло не так..."},this.path="assets/question.php"}var t,n,i,r,o;return t=e,(n=[{key:"clearInputs",value:function(){this.inputs.forEach((function(e){e.value=""}))}},{key:"checkMailInputs",value:function(){document.querySelectorAll('[type="email"]').forEach((function(e){e.addEventListener("keypress",(function(e){e.key.match(/[^a-z 0-9 @ \.]/gi)&&e.preventDefault()}))}))}},{key:"initMask",value:function(){function e(e){var t="+1 (___) ___-____",n=0,i=t.replace(/\D/g,""),r=this.value.replace(/\D/g,"");i.length>=r.length&&(r=i),this.value=t.replace(/./g,(function(e){return/[_\d]/.test(e)&&n<r.length?r.charAt(n++):n>=r.length?"":e})),"blur"===e.type?2==this.value.length&&(this.value=""):function(e,t){if(t.focus(),t.setSelectionRange)t.setSelectionRange(e,e);else if(t.createTextRange){var n=t.createTextRange();n.collapse(!0),n.moveEnd("character",e),n.moveStart("character",e),n.select()}}(this.value.length,this)}document.querySelectorAll('[name="phone"]').forEach((function(t){t.addEventListener("input",e),t.addEventListener("focus",e),t.addEventListener("blur",e)}))}},{key:"postData",value:(r=regeneratorRuntime.mark((function e(t,n){var i;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t,{method:"POST",body:n});case 2:return i=e.sent,e.next=5,i.text();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})),o=function(){var e=this,t=arguments;return new Promise((function(n,i){var o=r.apply(e,t);function s(e){O(o,n,i,s,a,"next",e)}function a(e){O(o,n,i,s,a,"throw",e)}s(void 0)}))},function(e,t){return o.apply(this,arguments)})},{key:"init",value:function(){var e=this;this.checkMailInputs(),this.initMask(),this.forms.forEach((function(t){t.addEventListener("submit",(function(n){n.preventDefault();var i=document.createElement("div");i.style.cssText="\n                    margin-top: 15px;\n                    font-size: 18px;\n                    color: grey;\n                ",t.parentNode.appendChild(i),i.textContent=e.message.loading;var r=new FormData(t),o=Object.fromEntries(r.entries());console.log("values:",o),e.postData(e.path,r).then((function(t){console.log(t),i.textContent=e.message.success})).catch((function(){i.textContent=e.message.failure})).finally((function(){e.clearInputs(),setTimeout((function(){i.remove()}),6e3)}))}))}))}}])&&C(t.prototype,n),i&&C(t,i),e}();function I(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var q=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.btns=document.querySelectorAll(t)}var t,n,i;return t=e,(n=[{key:"init",value:function(){this.btns.forEach((function(e){var t=!1;e.addEventListener("click",(function(){e.classList.add("active");var n=e.closest(".module__info-show").nextElementSibling;t?(n.classList.add("fadeOut"),e.classList.remove("active"),setTimeout((function(){n.style.display="none",n.classList.remove("animated","fadeIn","fadeOut"),t=!1}),500)):(n.style.display="block",n.classList.add("animated","fadeIn"),t=!0)}))}))}}])&&I(t.prototype,n),i&&I(t,i),e}();function L(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var P=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.btns=document.querySelectorAll(t),this.path="assets/img/mainbg.jpg"}var t,n,i;return t=e,(n=[{key:"init",value:function(){var e=this;this.btns.forEach((function(t){t.addEventListener("click",(function(t){t.preventDefault(),t.stopPropagation(),e.downloadItem(e.path)}))}))}},{key:"downloadItem",value:function(e){var t=document.createElement("a");t.setAttribute("href",e),t.setAttribute("download","nice__picture"),t.style.display="none",document.body.appendChild(t),t.click(),document.body.removeChild(t)}}])&&L(t.prototype,n),i&&L(t,i),e}();window.addEventListener("DOMContentLoaded",(function(){new p({btns:".next",container:".page"}).render(),new p({container:".moduleapp",btns:".next"}).render(),new _({container:".showup__content-slider",prev:".showup__prev",next:".showup__next",activeClass:"card-active",animate:!0}).init(),new _({container:".modules__content-slider",prev:".modules__info-btns .slick-prev",next:".modules__info-btns .slick-next",activeClass:"card-active",animate:!0,autoplay:!0}).init(),new _({container:".feed__slider",prev:".feed__slider .slick-prev",next:".feed__slider .slick-next",activeClass:"feed__item-active"}).init(),new k(".showup .play",".overlay").init(),new k(".module__video-item .play",".overlay").init(),new E(".officerold",".officernew",".officer__card-item").init(),new T(".form").init(),new q(".plus__content").init(),new P(".download").init()}))}},n={};function i(e){var r=n[e];if(void 0!==r)return r.exports;var o=n[e]={exports:{}};return t[e](o,o.exports,i),o.exports}i.m=t,e=[],i.O=(t,n,r,o)=>{if(!n){var s=1/0;for(l=0;l<e.length;l++){for(var[n,r,o]=e[l],a=!0,c=0;c<n.length;c++)(!1&o||s>=o)&&Object.keys(i.O).every((e=>i.O[e](n[c])))?n.splice(c--,1):(a=!1,o<s&&(s=o));a&&(e.splice(l--,1),t=r())}return t}o=o||0;for(var l=e.length;l>0&&e[l-1][2]>o;l--)e[l]=e[l-1];e[l]=[n,r,o]},i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={179:0};i.O.j=t=>0===e[t];var t=(t,n)=>{var r,o,[s,a,c]=n,l=0;for(r in a)i.o(a,r)&&(i.m[r]=a[r]);for(c&&c(i),t&&t(n);l<s.length;l++)o=s[l],i.o(e,o)&&e[o]&&e[o][0](),e[s[l]]=0;i.O()},n=self.webpackChunk=self.webpackChunk||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var r=i.O(void 0,[60],(()=>i(5527)));r=i.O(r)})();