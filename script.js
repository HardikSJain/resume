// Promise Polyfill
(function () {
    'use strict'; var f, g = []; function l(a) { g.push(a); 1 == g.length && f() } function m() { for (; g.length;)g[0](), g.shift() } f = function () { setTimeout(m) }; function n(a) { this.a = p; this.b = void 0; this.f = []; var b = this; try { a(function (a) { q(b, a) }, function (a) { r(b, a) }) } catch (c) { r(b, c) } } var p = 2; function t(a) { return new n(function (b, c) { c(a) }) } function u(a) { return new n(function (b) { b(a) }) } function q(a, b) { if (a.a == p) { if (b == a) throw new TypeError; var c = !1; try { var d = b && b.then; if (null != b && "object" == typeof b && "function" == typeof d) { d.call(b, function (b) { c || q(a, b); c = !0 }, function (b) { c || r(a, b); c = !0 }); return } } catch (e) { c || r(a, e); return } a.a = 0; a.b = b; v(a) } }
    function r(a, b) { if (a.a == p) { if (b == a) throw new TypeError; a.a = 1; a.b = b; v(a) } } function v(a) { l(function () { if (a.a != p) for (; a.f.length;) { var b = a.f.shift(), c = b[0], d = b[1], e = b[2], b = b[3]; try { 0 == a.a ? "function" == typeof c ? e(c.call(void 0, a.b)) : e(a.b) : 1 == a.a && ("function" == typeof d ? e(d.call(void 0, a.b)) : b(a.b)) } catch (h) { b(h) } } }) } n.prototype.g = function (a) { return this.c(void 0, a) }; n.prototype.c = function (a, b) { var c = this; return new n(function (d, e) { c.f.push([a, b, d, e]); v(c) }) };
    function w(a) { return new n(function (b, c) { function d(c) { return function (d) { h[c] = d; e += 1; e == a.length && b(h) } } var e = 0, h = []; 0 == a.length && b(h); for (var k = 0; k < a.length; k += 1)u(a[k]).c(d(k), c) }) } function x(a) { return new n(function (b, c) { for (var d = 0; d < a.length; d += 1)u(a[d]).c(b, c) }) }; window.Promise || (window.Promise = n, window.Promise.resolve = u, window.Promise.reject = t, window.Promise.race = x, window.Promise.all = w, window.Promise.prototype.then = n.prototype.c, window.Promise.prototype["catch"] = n.prototype.g);
}());

// Font Face Observer https://github.com/bramstein/fontfaceobserver
(function () {
    function l(a, b) { document.addEventListener ? a.addEventListener("scroll", b, !1) : a.attachEvent("scroll", b) } function m(a) { document.body ? a() : document.addEventListener ? document.addEventListener("DOMContentLoaded", function c() { document.removeEventListener("DOMContentLoaded", c); a() }) : document.attachEvent("onreadystatechange", function k() { if ("interactive" == document.readyState || "complete" == document.readyState) document.detachEvent("onreadystatechange", k), a() }) }; function q(a) {
        this.a = document.createElement("div"); this.a.setAttribute("aria-hidden", "true"); this.a.appendChild(document.createTextNode(a)); this.b = document.createElement("span"); this.c = document.createElement("span"); this.h = document.createElement("span"); this.f = document.createElement("span"); this.g = -1; this.b.style.cssText = "max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;"; this.c.style.cssText = "max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;";
        this.f.style.cssText = "max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;"; this.h.style.cssText = "display:inline-block;width:200%;height:200%;font-size:16px;max-width:none;"; this.b.appendChild(this.h); this.c.appendChild(this.f); this.a.appendChild(this.b); this.a.appendChild(this.c)
    }
    function w(a, b) { a.a.style.cssText = "max-width:none;min-width:20px;min-height:20px;display:inline-block;overflow:hidden;position:absolute;width:auto;margin:0;padding:0;top:-999px;left:-999px;white-space:nowrap;font:" + b + ";" } function x(a) { var b = a.a.offsetWidth, c = b + 100; a.f.style.width = c + "px"; a.c.scrollLeft = c; a.b.scrollLeft = a.b.scrollWidth + 100; return a.g !== b ? (a.g = b, !0) : !1 } function z(a, b) { function c() { var a = k; x(a) && null !== a.a.parentNode && b(a.g) } var k = a; l(a.b, c); l(a.c, c); x(a) }; function A(a, b) { var c = b || {}; this.family = a; this.style = c.style || "normal"; this.weight = c.weight || "normal"; this.stretch = c.stretch || "normal" } var B = null, C = null, D = null; function H() { if (null === C) { var a = document.createElement("div"); try { a.style.font = "condensed 100px sans-serif" } catch (b) { } C = "" !== a.style.font } return C } function I(a, b) { return [a.style, a.weight, H() ? a.stretch : "", "100px", b].join(" ") }
    A.prototype.load = function (a, b) {
        var c = this, k = a || "BESbswy", y = b || 3E3, E = (new Date).getTime(); return new Promise(function (a, b) {
            null === D && (D = !!window.FontFace); if (D) { var J = new Promise(function (a, b) { function e() { (new Date).getTime() - E >= y ? b() : document.fonts.load(I(c, c.family), k).then(function (c) { 1 <= c.length ? a() : setTimeout(e, 25) }, function () { b() }) } e() }), K = new Promise(function (a, c) { setTimeout(c, y) }); Promise.race([K, J]).then(function () { a(c) }, function () { b(c) }) } else m(function () {
                function r() {
                    var b; if (b = -1 != f &&
                        -1 != g || -1 != f && -1 != h || -1 != g && -1 != h) (b = f != g && f != h && g != h) || (null === B && (b = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent), B = !!b && (536 > parseInt(b[1], 10) || 536 === parseInt(b[1], 10) && 11 >= parseInt(b[2], 10))), b = B && (f == t && g == t && h == t || f == u && g == u && h == u || f == v && g == v && h == v)), b = !b; b && (null !== d.parentNode && d.parentNode.removeChild(d), clearTimeout(G), a(c))
                } function F() {
                    if ((new Date).getTime() - E >= y) null !== d.parentNode && d.parentNode.removeChild(d), b(c); else {
                        var a = document.hidden; if (!0 === a || void 0 ===
                            a) f = e.a.offsetWidth, g = n.a.offsetWidth, h = p.a.offsetWidth, r(); G = setTimeout(F, 50)
                    }
                } var e = new q(k), n = new q(k), p = new q(k), f = -1, g = -1, h = -1, t = -1, u = -1, v = -1, d = document.createElement("div"), G = 0; d.dir = "ltr"; w(e, I(c, "sans-serif")); w(n, I(c, "serif")); w(p, I(c, "monospace")); d.appendChild(e.a); d.appendChild(n.a); d.appendChild(p.a); document.body.appendChild(d); t = e.a.offsetWidth; u = n.a.offsetWidth; v = p.a.offsetWidth; F(); z(e, function (a) { f = a; r() }); w(e, I(c, '"' + c.family + '",sans-serif')); z(n, function (a) { g = a; r() }); w(n, I(c, '"' +
                    c.family + '",serif')); z(p, function (a) { h = a; r() }); w(p, I(c, '"' + c.family + '",monospace'))
            })
        })
    }; "undefined" !== typeof module ? module.exports = A : (window.FontFaceObserver = A, window.FontFaceObserver.prototype.load = A.prototype.load);
}());

// Use that observer to enable the web fonts once they're loaded
var fonts = [
    (new FontFaceObserver("Open Sans", { weight: 300 })).load(),
    (new FontFaceObserver("Open Sans", { weight: 400 })).load(),
    (new FontFaceObserver("Open Sans", { weight: 600 })).load(),
    (new FontFaceObserver("Open Sans", { weight: 700 })).load(),
];

function removeLoading() {
    document.body.className = document.body.className.replace(/fonts-loading/, "");
}

Promise.all(fonts).then(function () {
    document.body.className += " fonts-loaded";
    removeLoading();
}, function () {
    removeLoading();
});

// This avoids a flash of unstyled content in cases where the fonts are already
setTimeout(removeLoading, 100);

// Google analytics
(function (i, s, o, g, r, a, m) {
    i['GoogleAnalyticsObject'] = r; i[r] = i[r] || function () {
        (i[r].q = i[r].q || []).push(arguments)
    }, i[r].l = 1 * new Date(); a = s.createElement(o),
        m = s.getElementsByTagName(o)[0]; a.async = 1; a.src = g; m.parentNode.insertBefore(a, m)
})(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');

ga('create', 'UA-51104787-3', 'auto');
ga('send', 'pageview');