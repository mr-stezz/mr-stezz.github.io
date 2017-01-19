! function(e, t, n) {
    function o(e, n) {
        if (!e) throw Error("No selector supplied for Molten Leading");
        if (this.selector = e, this.options = this.extend({}, o.defaultOptions, n), "querySelector" in t && t.querySelector(this.selector)) this.elements = t.querySelectorAll(this.selector);
        else {
            if (!t.getElementsByTagName(this.selector)) throw Error("The element you are trying to select doesn't exist");
            this.elements = t.getElementsByTagName(this.selector)
        }
    }
    o.defaultOptions = {
        minline: 1.2,
        maxline: 1.8,
        minwidth: 320,
        maxwidth: 1024
    }, o.prototype = {
        constructor: o,
        init: function() {
            this.forEach(this.elements, this.hotlead, this), this.addEvent(e, "resize", this, !1)
        },
        hotlead: function(e, t) {
            var n = this.options,
                o = parseInt((t.offsetWidth - n.minwidth) / (n.maxwidth - n.minwidth) * 100, 10),
                i = n.minline + (n.maxline - n.minline) * o / 100;
            0 >= o || i < n.minline ? i = n.minline : (o >= 100 || i > n.maxline) && (i = n.maxline), t.style.lineHeight = i
        },
        resize: function() {
            this.debounce(function() {
                this.forEach(this.elements, this.hotlead, this)
            }, 100)
        },
        extend: function(e) {
            for (var t = arguments, n = 1; n < t.length; n++) {
                var o, i = t[n];
                for (o in i) i.hasOwnProperty(o) && (e[o] = i[o])
            }
            return e
        },
        debounce: function(e, t) {
            var n;
            clearTimeout(n), n = setTimeout(function() {
                n = null
            }, t), e.apply(this, arguments)
        },
        addEvent: function(e, t, n, o) {
            if ("addEventListener" in e) try {
                e.addEventListener(t, n, o)
            } catch (i) {
                if ("object" != typeof n || !n.handleEvent) throw i;
                e.addEventListener(t, function(e) {
                    n.handleEvent.call(n, e)
                }, o)
            } else "attachEvent" in e && ("object" == typeof n && n.handleEvent ? e.attachEvent("on" + t, function() {
                n.handleEvent.call(n)
            }) : e.attachEvent("on" + t, n))
        },
        forEach: function(e, t, n) {
            for (var o = 0; o < e.length; o++) t.call(n, o, e[o])
        },
        handleEvent: function(t) {
            switch (t = t || e.event, t.type) {
                case "resize":
                    this.resize(t)
            }
        }
    }, e.moltenLeading = function(e, t) {
        new o(e, t).init()
    }
}(window, document), moltenLeading("h1", {
    minline: 1.2,
    maxline: 1.4,
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
}), ! function(e, t) {
    "function" == typeof define && define.amd ? define("smoothScroll", t(e)) : "object" == typeof exports ? module.exports = t(e) : e.smoothScroll = t(e)
}(window || this, function(e) {
    "use strict";
    var t, n, o, i = {},
        a = !!document.querySelector && !!e.addEventListener,
        r = {
            speed: 500,
            easing: "easeInOutCubic",
            offset: 0,
            updateURL: !0,
            callbackBefore: function() {},
            callbackAfter: function() {}
        },
        s = function(e, t, n) {
            if ("[object Object]" === Object.prototype.toString.call(e))
                for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.call(n, e[o], o, e);
            else
                for (var i = 0, a = e.length; a > i; i++) t.call(n, e[i], i, e)
        },
        c = function(e, t) {
            var n = {};
            return s(e, function(t, o) {
                n[o] = e[o]
            }), s(t, function(e, o) {
                n[o] = t[o]
            }), n
        },
        l = function(e, t) {
            for (var n = t.charAt(0); e && e !== document; e = e.parentNode)
                if ("." === n) {
                    if (e.classList.contains(t.substr(1))) return e
                } else if ("#" === n) {
                if (e.id === t.substr(1)) return e
            } else if ("[" === n && e.hasAttribute(t.substr(1, t.length - 2))) return e;
            return !1
        },
        u = function(e) {
            return Math.max(e.scrollHeight, e.offsetHeight, e.clientHeight)
        },
        f = function(e) {
            for (var t, n = String(e), o = n.length, i = -1, a = "", r = n.charCodeAt(0); ++i < o;) {
                if (t = n.charCodeAt(i), 0 === t) throw new InvalidCharacterError("Invalid character: the input contains U+0000.");
                a += t >= 1 && 31 >= t || 127 == t || 0 === i && t >= 48 && 57 >= t || 1 === i && t >= 48 && 57 >= t && 45 === r ? "\\" + t.toString(16) + " " : t >= 128 || 45 === t || 95 === t || t >= 48 && 57 >= t || t >= 65 && 90 >= t || t >= 97 && 122 >= t ? n.charAt(i) : "\\" + n.charAt(i)
            }
            return a
        },
        d = function(e, t) {
            var n;
            return "easeInQuad" === e && (n = t * t), "easeOutQuad" === e && (n = t * (2 - t)), "easeInOutQuad" === e && (n = .5 > t ? 2 * t * t : -1 + (4 - 2 * t) * t), "easeInCubic" === e && (n = t * t * t), "easeOutCubic" === e && (n = --t * t * t + 1), "easeInOutCubic" === e && (n = .5 > t ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1), "easeInQuart" === e && (n = t * t * t * t), "easeOutQuart" === e && (n = 1 - --t * t * t * t), "easeInOutQuart" === e && (n = .5 > t ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t), "easeInQuint" === e && (n = t * t * t * t * t), "easeOutQuint" === e && (n = 1 + --t * t * t * t * t), "easeInOutQuint" === e && (n = .5 > t ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t), n || t
        },
        m = function(e, t, n) {
            var o = 0;
            if (e.offsetParent)
                do o += e.offsetTop, e = e.offsetParent; while (e);
            return o = o - t - n, o >= 0 ? o : 0
        },
        h = function() {
            return Math.max(document.body.scrollHeight, document.documentElement.scrollHeight, document.body.offsetHeight, document.documentElement.offsetHeight, document.body.clientHeight, document.documentElement.clientHeight)
        },
        p = function(e) {
            return e && "object" == typeof JSON && "function" == typeof JSON.parse ? JSON.parse(e) : {}
        },
        g = function(t, n) {
            history.pushState && (n || "true" === n) && history.pushState(null, null, [e.location.protocol, "//", e.location.host, e.location.pathname, e.location.search, t].join(""))
        };
    i.animateScroll = function(t, n, i) {
        var a = c(a || r, i || {}),
            s = p(t ? t.getAttribute("data-options") : null);
        a = c(a, s), n = "#" + f(n.substr(1));
        var l = "#" === n ? document.documentElement : document.querySelector(n),
            v = e.pageYOffset;
        o || (o = document.querySelector("[data-scroll-header]"));
        var y, E, b, w = null === o ? 0 : u(o) + o.offsetTop,
            O = m(l, w, parseInt(a.offset, 10)),
            L = O - v,
            S = h(),
            x = 0;
        g(n, a.updateURL);
        var q = function(o, i, r) {
                var s = e.pageYOffset;
                (o == i || s == i || e.innerHeight + s >= S) && (clearInterval(r), l.focus(), a.callbackAfter(t, n))
            },
            I = function() {
                x += 16, E = x / parseInt(a.speed, 10), E = E > 1 ? 1 : E, b = v + L * d(a.easing, E), e.scrollTo(0, Math.floor(b)), q(b, O, y)
            },
            H = function() {
                a.callbackBefore(t, n), y = setInterval(I, 16)
            };
        0 === e.pageYOffset && e.scrollTo(0, 0), H()
    };
    var v = function(e) {
            var n = l(e.target, "[data-scroll]");
            n && "a" === n.tagName.toLowerCase() && (e.preventDefault(), i.animateScroll(n, n.hash, t))
        },
        y = function() {
            n || (n = setTimeout(function() {
                n = null, headerHeight = null === o ? 0 : u(o) + o.offsetTop
            }, 66))
        };
    return i.destroy = function() {
        t && (document.removeEventListener("click", v, !1), e.removeEventListener("resize", y, !1), t = null, n = null, o = null)
    }, i.init = function(n) {
        a && (i.destroy(), t = c(r, n || {}), o = document.querySelector("[data-scroll-header]"), document.addEventListener("click", v, !1), o && e.addEventListener("resize", y, !1))
    }, i
}), smoothScroll.init();
var contactform = document.getElementById("js-form"),
    reciever = document.getElementById("js-reciever"),
    email = "ahoy@stezycki.com";
if (contactform.setAttribute("action", "//formspree.io/" + email), reciever.textContent = email, document.forms[0] && window.FormData) {
    var message = new Object;
    message.loading = "Loading&hellip", message.success = "<svg class='status__img'><use xmlns:xlink='http://www.w3.org/1999/xlink' xlink:href='#success'></use></svg><span class='status__title'>Email sent!</span><span class='status__body'>Please wait at least 48 hours for a response :)</span>", message.failure = "<div class='status'><svg class='status__img'><use xmlns:xlink='http://www.w3.org/1999/xlink' xlink:href='#error'></use></svg><span class='status__title'>Email didn't send!</span><span class='status__body'>Please try again.</span></div>";
    var statusMessage = document.createElement("div");
    statusMessage.className = "status";
    var request = new XMLHttpRequest;
    request.open("POST", "//formspree.io/" + email, !0), request.setRequestHeader("accept", "application/json"), contactform.addEventListener("submit", function(e) {
        e.preventDefault(), contactform.appendChild(statusMessage);
        var t = new FormData(contactform);
        request.send(t), request.onreadystatechange = function() {
            request.readyState < 4 ? statusMessage.innerHTML = message.loading : 4 === request.readyState && (200 == request.status && request.status < 300 ? statusMessage.innerHTML = message.success : contactform.insertAdjacentHTML("beforeend", message.failure))
        }
    })
}
