// Molten Leading, plain JavaScript version, v1.02
// https://github.com/viljamis/Molten-Leading
(function(h,f,k){function g(b,c){if(!b)throw Error("No selector supplied for Molten Leading");this.selector=b;this.options=this.extend({},g.defaultOptions,c);if("querySelector"in f&&f.querySelector(this.selector))this.elements=f.querySelectorAll(this.selector);else if(f.getElementsByTagName(this.selector))this.elements=f.getElementsByTagName(this.selector);else throw Error("The element you are trying to select doesn't exist");}g.defaultOptions={minline:1.2,maxline:1.8,minwidth:320,maxwidth:1024};
g.prototype={constructor:g,init:function(){this.forEach(this.elements,this.hotlead,this);this.addEvent(h,"resize",this,!1)},hotlead:function(b,c){var a=this.options,d=parseInt((c.offsetWidth-a.minwidth)/(a.maxwidth-a.minwidth)*100,10),e=a.minline+(a.maxline-a.minline)*d/100;if(0>=d||e<a.minline)e=a.minline;else if(100<=d||e>a.maxline)e=a.maxline;c.style.lineHeight=e},resize:function(){this.debounce(function(){this.forEach(this.elements,this.hotlead,this)},100)},extend:function(b){for(var c=arguments,
a=1;a<c.length;a++){var d=c[a],e;for(e in d)d.hasOwnProperty(e)&&(b[e]=d[e])}return b},debounce:function(b,c){var a;clearTimeout(a);a=setTimeout(function(){a=null},c);b.apply(this,arguments)},addEvent:function(b,c,a,d){if("addEventListener"in b)try{b.addEventListener(c,a,d)}catch(e){if("object"===typeof a&&a.handleEvent)b.addEventListener(c,function(b){a.handleEvent.call(a,b)},d);else throw e;}else"attachEvent"in b&&("object"===typeof a&&a.handleEvent?b.attachEvent("on"+c,function(){a.handleEvent.call(a)}):
b.attachEvent("on"+c,a))},forEach:function(b,c,a){for(var d=0;d<b.length;d++)c.call(a,d,b[d])},handleEvent:function(b){b=b||h.event;switch(b.type){case "resize":this.resize(b)}}};h.moltenLeading=function(b,c){(new g(b,c)).init()}})(window,document);
// settings
moltenLeading("h1", {
  minline: 1.2,
  maxline: 1.4,
  minwidth: 400,
  maxwidth: 768
});

moltenLeading(".lead", {
  minline: 1.35,
  maxline: 2.0
});

moltenLeading("p", {
  minline: 1.4,
  maxline: 1.8,
  minwidth: 400,
  maxwidth: 768
});
/** smooth-scroll v5.3.3, by Chris Ferdinandi | http://github.com/cferdinandi/smooth-scroll | Licensed under MIT: http://gomakethings.com/mit/ */
!function(e,t){"function"==typeof define&&define.amd?define("smoothScroll",t(e)):"object"==typeof exports?module.exports=t(e):e.smoothScroll=t(e)}(window||this,function(e){"use strict";var t,n,o,r={},a=!!document.querySelector&&!!e.addEventListener,c={speed:500,easing:"easeInOutCubic",offset:0,updateURL:!0,callbackBefore:function(){},callbackAfter:function(){}},u=function(e,t,n){if("[object Object]"===Object.prototype.toString.call(e))for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.call(n,e[o],o,e);else for(var r=0,a=e.length;a>r;r++)t.call(n,e[r],r,e)},i=function(e,t){var n={};return u(e,function(t,o){n[o]=e[o]}),u(t,function(e,o){n[o]=t[o]}),n},l=function(e,t){for(var n=t.charAt(0);e&&e!==document;e=e.parentNode)if("."===n){if(e.classList.contains(t.substr(1)))return e}else if("#"===n){if(e.id===t.substr(1))return e}else if("["===n&&e.hasAttribute(t.substr(1,t.length-2)))return e;return!1},s=function(e){return Math.max(e.scrollHeight,e.offsetHeight,e.clientHeight)},f=function(e){for(var t,n=String(e),o=n.length,r=-1,a="",c=n.charCodeAt(0);++r<o;){if(t=n.charCodeAt(r),0===t)throw new InvalidCharacterError("Invalid character: the input contains U+0000.");a+=t>=1&&31>=t||127==t||0===r&&t>=48&&57>=t||1===r&&t>=48&&57>=t&&45===c?"\\"+t.toString(16)+" ":t>=128||45===t||95===t||t>=48&&57>=t||t>=65&&90>=t||t>=97&&122>=t?n.charAt(r):"\\"+n.charAt(r)}return a},d=function(e,t){var n;return"easeInQuad"===e&&(n=t*t),"easeOutQuad"===e&&(n=t*(2-t)),"easeInOutQuad"===e&&(n=.5>t?2*t*t:-1+(4-2*t)*t),"easeInCubic"===e&&(n=t*t*t),"easeOutCubic"===e&&(n=--t*t*t+1),"easeInOutCubic"===e&&(n=.5>t?4*t*t*t:(t-1)*(2*t-2)*(2*t-2)+1),"easeInQuart"===e&&(n=t*t*t*t),"easeOutQuart"===e&&(n=1- --t*t*t*t),"easeInOutQuart"===e&&(n=.5>t?8*t*t*t*t:1-8*--t*t*t*t),"easeInQuint"===e&&(n=t*t*t*t*t),"easeOutQuint"===e&&(n=1+--t*t*t*t*t),"easeInOutQuint"===e&&(n=.5>t?16*t*t*t*t*t:1+16*--t*t*t*t*t),n||t},h=function(e,t,n){var o=0;if(e.offsetParent)do o+=e.offsetTop,e=e.offsetParent;while(e);return o=o-t-n,o>=0?o:0},m=function(){return Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight)},p=function(e){return e&&"object"==typeof JSON&&"function"==typeof JSON.parse?JSON.parse(e):{}},v=function(t,n){history.pushState&&(n||"true"===n)&&history.pushState(null,null,[e.location.protocol,"//",e.location.host,e.location.pathname,e.location.search,t].join(""))};r.animateScroll=function(t,n,r){var a=i(a||c,r||{}),u=p(t?t.getAttribute("data-options"):null);a=i(a,u),n="#"+f(n.substr(1));var l="#"===n?document.documentElement:document.querySelector(n),g=e.pageYOffset;o||(o=document.querySelector("[data-scroll-header]"));var b,O,y,S=null===o?0:s(o)+o.offsetTop,I=h(l,S,parseInt(a.offset,10)),H=I-g,E=m(),A=0;v(n,a.updateURL);var L=function(o,r,c){var u=e.pageYOffset;(o==r||u==r||e.innerHeight+u>=E)&&(clearInterval(c),l.focus(),a.callbackAfter(t,n))},Q=function(){A+=16,O=A/parseInt(a.speed,10),O=O>1?1:O,y=g+H*d(a.easing,O),e.scrollTo(0,Math.floor(y)),L(y,I,b)},C=function(){a.callbackBefore(t,n),b=setInterval(Q,16)};0===e.pageYOffset&&e.scrollTo(0,0),C()};var g=function(e){var n=l(e.target,"[data-scroll]");n&&"a"===n.tagName.toLowerCase()&&(e.preventDefault(),r.animateScroll(n,n.hash,t))},b=function(){n||(n=setTimeout(function(){n=null,headerHeight=null===o?0:s(o)+o.offsetTop},66))};return r.destroy=function(){t&&(document.removeEventListener("click",g,!1),e.removeEventListener("resize",b,!1),t=null,n=null,o=null)},r.init=function(n){a&&(r.destroy(),t=i(c,n||{}),o=document.querySelector("[data-scroll-header]"),document.addEventListener("click",g,!1),o&&e.addEventListener("resize",b,!1))},r});
// initialise smooth scroll
smoothScroll.init();
// AJAX Formspree Contact Form
// David Darnes code:
var contactform = document.getElementById('js-form');
var reciever = document.getElementById('js-reciever');
var email = 'ahoy' + '@' + 'stezycki' + '.' + 'com';
contactform.setAttribute('action', '//formspree.io/' + email);
reciever.textContent = email;
// function isParent(parent, child) {
// var node = child.parentNode;
//   while (node != null) {
//     if (node == parent) {
//       return true;
//     }
//     node = node.parentNode;
//   }
//   return false;
// }
// var checkbox = document.querySelector('input[name="toggle-checkbox"]');
// var container = document.querySelector('.container');
// document.addEventListener('click', function(e) {
//   if (checkbox.checked == true) {
//   if (!isParent(container, e.target) && checkbox.checked == true) {
//     checkbox.checked = false;
//   }
// });
// As per: http://jdp.org.uk/ajax/2015/05/20/ajax-forms-without-jquery.html
if (document.forms[0] && window.FormData) {

  var message = new Object();
  message.loading = 'Loading&hellip';
  message.success = '🚀';
  message.failure = '🚫';

  var statusMessage = document.createElement('div');
  statusMessage.className = 'status';

  // Set up the AJAX request
  var request = new XMLHttpRequest();
  request.open('POST', '//formspree.io/' + email, true);
  request.setRequestHeader('accept', 'application/json');

  // Listen for the form being submitted
  contactform.addEventListener('submit', function(evt) {
    evt.preventDefault();
    contactform.appendChild(statusMessage);

    // Create a new FormData object passing in the form's key value pairs (that was easy!)
    var formData = new FormData(contactform);

    // Send the formData
    request.send(formData);

    // Watch for changes to request.readyState and update the statusMessage accordingly
    request.onreadystatechange = function() {
      // <4 =  waiting on response from server
      if (request.readyState < 4)
        statusMessage.innerHTML = message.loading;
      // 4 = Response from server has been completely loaded.
      else if (request.readyState === 4) {
        // 200 - 299 = successful
        if (request.status == 200 && request.status < 300)
          statusMessage.innerHTML = message.success;
          // TODO! Remove open class after timeout
        else
          contactform.insertAdjacentHTML('beforeend', message.failure);
      }
    }
  });
}
