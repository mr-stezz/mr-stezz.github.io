// Enable molten leading
! function(e, t, n) {
  function s(e, n) {
    if (!e) throw Error("No selector supplied for Molten Leading");
    if (this.selector = e, this.options = this.extend({}, s.defaultOptions, n), "querySelector" in t && t.querySelector(this.selector)) this.elements = t.querySelectorAll(this.selector);
    else {
      if (!t.getElementsByTagName(this.selector)) throw Error("The element you are trying to select doesn't exist");
      this.elements = t.getElementsByTagName(this.selector)
    }
  }
  s.defaultOptions = {
    minline: 1.2,
    maxline: 1.8,
    minwidth: 320,
    maxwidth: 1024
  }, s.prototype = {
    constructor: s,
    init: function() {
      this.forEach(this.elements, this.hotlead, this), this.addEvent(e, "resize", this, !1)
    },
    hotlead: function(e, t) {
      var n = this.options,
        s = parseInt((t.offsetWidth - n.minwidth) / (n.maxwidth - n.minwidth) * 100, 10),
        a = n.minline + (n.maxline - n.minline) * s / 100;
      0 >= s || a < n.minline ? a = n.minline : (s >= 100 || a > n.maxline) && (a = n.maxline), t.style.lineHeight = a
    },
    resize: function() {
      this.debounce(function() {
        this.forEach(this.elements, this.hotlead, this)
      }, 100)
    },
    extend: function(e) {
      for (var t = arguments, n = 1; n < t.length; n++) {
        var s, a = t[n];
        for (s in a) a.hasOwnProperty(s) && (e[s] = a[s])
      }
      return e
    },
    debounce: function(e, t) {
      var n;
      clearTimeout(n), n = setTimeout(function() {
        n = null
      }, t), e.apply(this, arguments)
    },
    addEvent: function(e, t, n, s) {
      if ("addEventListener" in e) try {
        e.addEventListener(t, n, s)
      } catch (a) {
        if ("object" != typeof n || !n.handleEvent) throw a;
        e.addEventListener(t, function(e) {
          n.handleEvent.call(n, e)
        }, s)
      } else "attachEvent" in e && ("object" == typeof n && n.handleEvent ? e.attachEvent("on" + t, function() {
        n.handleEvent.call(n)
      }) : e.attachEvent("on" + t, n))
    },
    forEach: function(e, t, n) {
      for (var s = 0; s < e.length; s++) t.call(n, s, e[s])
    },
    handleEvent: function(t) {
      switch ((t = t || e.event).type) {
        case "resize":
          this.resize(t)
      }
    }
  }, e.moltenLeading = function(e, t) {
    new s(e, t).init()
  }
}(window, document), moltenLeading(".alpha", {
    minline: 1.2,
    maxline: 1.4,
    minwidth: 400,
    maxwidth: 768
  }), moltenLeading(".gamma", {
    minline: 1.1,
    maxline: 1.35,
    minwidth: 400,
    maxwidth: 768
  }), moltenLeading(".lead", {
    minline: 1.35,
    maxline: 2
  }), moltenLeading("p", {
    minline: 1.4,
    maxline: 1.8,
    minwidth: 400,
    maxwidth: 768
  });

// forked from https://codepen.io/desandro
var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');
  
  
function Pixel( x, y ) {
  this.x = x;
  this.y = y;
  this.hue = Math.floor( Math.random() * 360 );
  var direction = Math.random() > 0.5 ? -1 : 1;
  this.velocity = ( Math.random() * 30 + 20 ) * 0.01 * direction;
}
  
Pixel.prototype.update = function() {
  this.hue += this.velocity;
};
  
Pixel.prototype.render = function( ctx ) {
  var hue = Math.round( this.hue );
  ctx.fillStyle = 'hsl(' + hue + ', 100%, 50% )';
  ctx.fillRect( this.x, this.y, 1, 1 );
}
  
var pixels = [
  new Pixel( 0, 0 ),
  new Pixel( 1, 0 ),
  new Pixel( 0, 1 ),
  new Pixel( 1, 1 ),
];
  
function animate() {
  pixels.forEach( function( pixel ) {
    pixel.update();
    pixel.render( ctx );
  });
  requestAnimationFrame( animate );
}
  
animate();

// Add day/night class on body based on time
// var currentTime = (new Date).getHours();
// 7 <= currentTime && currentTime < 18 ? document.body && (document.body.className = "day") : document.body && (document.body.className = "night");

// Open contact form on enter keyup on .toggle-label
// document.querySelector(".toggle-label").addEventListener("keyup", (e) => {
//   e.preventDefault();
//   if (event.keyCode === 13) {
//     document.querySelector(".toggle-checkbox").click();
//   }
// });

// Play Toad's 'I'm the besssst' audio snippet when hovering over link
// const imTheBest = new Audio('../assets/sounds/im_the_best.mp3')
// 
// document.querySelectorAll('.work-list').forEach(link => {
//     let audioLink = link.querySelector('.js-audio-clip'),
//         timer
// 
//     audioLink.addEventListener('mouseover', e => {
//         imTheBest.play()
//     })
// })

// get current year
new Date().getFullYear();
document.getElementById("year").innerHTML = new Date().getFullYear();