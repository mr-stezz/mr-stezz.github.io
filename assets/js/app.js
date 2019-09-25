// Molten Leading
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
  }),
  // SmoothScroll
  function(e, t) {
    "function" == typeof define && define.amd ? define("smoothScroll", t(e)) : "object" == typeof exports ? module.exports = t(e) : e.smoothScroll = t(e)
  }(window || this, function(e) {
    "use strict";
    var t, n, s, a = {},
      o = !!document.querySelector && !!e.addEventListener,
      i = {
        speed: 500,
        easing: "easeInOutCubic",
        offset: 0,
        updateURL: !0,
        callbackBefore: function() {},
        callbackAfter: function() {}
      },
      r = function(e, t, n) {
        if ("[object Object]" === Object.prototype.toString.call(e))
          for (var s in e) Object.prototype.hasOwnProperty.call(e, s) && t.call(n, e[s], s, e);
        else
          for (var a = 0, o = e.length; o > a; a++) t.call(n, e[a], a, e)
      },
      c = function(e, t) {
        var n = {};
        return r(e, function(t, s) {
          n[s] = e[s]
        }), r(t, function(e, s) {
          n[s] = t[s]
        }), n
      },
      l = function(e) {
        return Math.max(e.scrollHeight, e.offsetHeight, e.clientHeight)
      };
    a.animateScroll = function(t, n, a) {
      var o, r = c(r || i, a || {}),
        u = (o = t ? t.getAttribute("data-options") : null) && "object" == typeof JSON && "function" == typeof JSON.parse ? JSON.parse(o) : {};
      r = c(r, u);
      var d = "#" === (n = "#" + function(e) {
          for (var t, n = String(e), s = n.length, a = -1, o = "", i = n.charCodeAt(0); ++a < s;) {
            if (0 === (t = n.charCodeAt(a))) throw new InvalidCharacterError("Invalid character: the input contains U+0000.");
            o += t >= 1 && 31 >= t || 127 == t || 0 === a && t >= 48 && 57 >= t || 1 === a && t >= 48 && 57 >= t && 45 === i ? "\\" + t.toString(16) + " " : t >= 128 || 45 === t || 95 === t || t >= 48 && 57 >= t || t >= 65 && 90 >= t || t >= 97 && 122 >= t ? n.charAt(a) : "\\" + n.charAt(a)
          }
          return o
        }(n.substr(1))) ? document.documentElement : document.querySelector(n),
        f = e.pageYOffset;
      s || (s = document.querySelector("[data-scroll-header]"));
      var m, h, p, g, v, y = null === s ? 0 : l(s) + s.offsetTop,
        w = function(e, t, n) {
          var s = 0;
          if (e.offsetParent)
            do {
              s += e.offsetTop, e = e.offsetParent
            } while (e);
          return (s = s - t - n) >= 0 ? s : 0
        }(d, y, parseInt(r.offset, 10)),
        b = w - f,
        E = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight, document.body.offsetHeight, document.documentElement.offsetHeight, document.body.clientHeight, document.documentElement.clientHeight),
        x = 0;
      g = n, v = r.updateURL, history.pushState && (v || "true" === v) && history.pushState(null, null, [e.location.protocol, "//", e.location.host, e.location.pathname, e.location.search, g].join(""));
      var O = function() {
        var s, a, o, i, c, l, u;
        h = (h = (x += 16) / parseInt(r.speed, 10)) > 1 ? 1 : h, p = f + b * (c = r.easing, l = h, "easeInQuad" === c && (u = l * l), "easeOutQuad" === c && (u = l * (2 - l)), "easeInOutQuad" === c && (u = .5 > l ? 2 * l * l : (4 - 2 * l) * l - 1), "easeInCubic" === c && (u = l * l * l), "easeOutCubic" === c && (u = --l * l * l + 1), "easeInOutCubic" === c && (u = .5 > l ? 4 * l * l * l : (l - 1) * (2 * l - 2) * (2 * l - 2) + 1), "easeInQuart" === c && (u = l * l * l * l), "easeOutQuart" === c && (u = 1 - --l * l * l * l), "easeInOutQuart" === c && (u = .5 > l ? 8 * l * l * l * l : 1 - 8 * --l * l * l * l), "easeInQuint" === c && (u = l * l * l * l * l), "easeOutQuint" === c && (u = 1 + --l * l * l * l * l), "easeInOutQuint" === c && (u = .5 > l ? 16 * l * l * l * l * l : 1 + 16 * --l * l * l * l * l), u || l), e.scrollTo(0, Math.floor(p)), s = p, a = w, o = m, i = e.pageYOffset, (s == a || i == a || e.innerHeight + i >= E) && (clearInterval(o), d.focus(), r.callbackAfter(t, n))
      };
      0 === e.pageYOffset && e.scrollTo(0, 0), r.callbackBefore(t, n), m = setInterval(O, 16)
    };
    var u = function(e) {
        var n = function(e, t) {
          for (var n = t.charAt(0); e && e !== document; e = e.parentNode)
            if ("." === n) {
              if (e.classList.contains(t.substr(1))) return e
            } else if ("#" === n) {
            if (e.id === t.substr(1)) return e
          } else if ("[" === n && e.hasAttribute(t.substr(1, t.length - 2))) return e;
          return !1
        }(e.target, "[data-scroll]");
        n && "a" === n.tagName.toLowerCase() && (e.preventDefault(), a.animateScroll(n, n.hash, t))
      },
      d = function() {
        n || (n = setTimeout(function() {
          n = null, headerHeight = null === s ? 0 : l(s) + s.offsetTop
        }, 66))
      };
    return a.destroy = function() {
      t && (document.removeEventListener("click", u, !1), e.removeEventListener("resize", d, !1), t = null, n = null, s = null)
    }, a.init = function(n) {
      o && (a.destroy(), t = c(i, n || {}), s = document.querySelector("[data-scroll-header]"), document.addEventListener("click", u, !1), s && e.addEventListener("resize", d, !1))
    }, a
  }), smoothScroll.init();
// Date Class Adder
var currentTime = (new Date).getHours();
7 <= currentTime && currentTime < 18 ? document.body && (document.body.className = "day") : document.body && (document.body.className = "night");
// Formspree Form
// var contactform = document.getElementById("js-form"),
//   reciever = document.getElementById("js-reciever"),
//   email = "ahoy@stezycki.com";
// if (contactform.setAttribute("action", "//formspree.io/" + email), reciever.textContent = email, document.forms[0] && window.FormData) {
//   var message = new Object;
//   message.loading = "<svg class='status__img'><use xmlns:xlink='http://www.w3.org/1999/xlink' xlink:href='#spinner'></use></svg><span class='status__title'>Loading&hellip;</span><span class='status__body'>Reticulating splines.</span>", message.success = "<svg class='status__img'><use xmlns:xlink='http://www.w3.org/1999/xlink' xlink:href='#success'></use></svg><span class='status__title'>Email sent!</span><span class='status__body'>Please wait at least 48 hours for a response :)</span>", message.failure = "<svg class='status__img'><use xmlns:xlink='http://www.w3.org/1999/xlink' xlink:href='#error'></use></svg><span class='status__title'>Email didn't send!</span><span class='status__body'>Please refresh the page and try again.</span>";
//   var statusMessage = document.createElement("div");
//   statusMessage.className = "status";
//   var request = new XMLHttpRequest;
//   request.open("POST", "//formspree.io/" + email, !0), request.setRequestHeader("accept", "application/json"), contactform.addEventListener("submit", function(e) {
//     e.preventDefault(), contactform.appendChild(statusMessage);
//     var t = new FormData(contactform);
//     request.send(t), request.onreadystatechange = function() {
//       4 === request.readyState && 200 == request.status && request.status < 300 ? statusMessage.innerHTML = message.success : statusMessage.innerHTML = message.failure
//     }
//   })
// }
