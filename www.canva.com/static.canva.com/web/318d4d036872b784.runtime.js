(() => {
    "use strict";
    var e, t, r, n, o, s = {},
        a = {};

    function i(e) {
        var t = a[e];
        if (void 0 !== t) return t.exports;
        var r = a[e] = {
            id: e,
            loaded: !1,
            exports: {}
        };
        return s[e].call(r.exports, r, r.exports, i), r.loaded = !0, r.exports
    }
    i.m = s, i.amdD = function() {
            throw new Error("define cannot be used indirect")
        }, i.amdO = {}, e = [], i.O = (t, r, n, o) => {
            if (!r) {
                var s = 1 / 0;
                for (l = 0; l < e.length; l++) {
                    for (var [r, n, o] = e[l], a = !0, d = 0; d < r.length; d++)(!1 & o || s >= o) && Object.keys(i.O).every((e => i.O[e](r[d]))) ? r.splice(d--, 1) : (a = !1, o < s && (s = o));
                    if (a) {
                        e.splice(l--, 1);
                        var c = n();
                        void 0 !== c && (t = c)
                    }
                }
                return t
            }
            o = o || 0;
            for (var l = e.length; l > 0 && e[l - 1][2] > o; l--) e[l] = e[l - 1];
            e[l] = [r, n, o]
        }, i.n = e => {
            var t = e && e.__esModule ? () => e.default : () => e;
            return i.d(t, {
                a: t
            }), t
        }, r = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__, i.t = function(e, n) {
            if (1 & n && (e = this(e)), 8 & n) return e;
            if ("object" == typeof e && e) {
                if (4 & n && e.__esModule) return e;
                if (16 & n && "function" == typeof e.then) return e
            }
            var o = Object.create(null);
            i.r(o);
            var s = {};
            t = t || [null, r({}), r([]), r(r)];
            for (var a = 2 & n && e;
                "object" == typeof a && !~t.indexOf(a); a = r(a)) Object.getOwnPropertyNames(a).forEach((t => s[t] = () => e[t]));
            return s.default = () => e, i.d(o, s), o
        }, i.d = (e, t) => {
            for (var r in t) i.o(t, r) && !i.o(e, r) && Object.defineProperty(e, r, {
                enumerable: !0,
                get: t[r]
            })
        }, i.f = {}, i.e = e => Promise.all(Object.keys(i.f).reduce(((t, r) => (i.f[r](e, t), t)), [])), i.u = e => 329 === e ? "b4811363b1730f4d.vendor.js" : 302 === e ? "de8f73a4fe1b0d03.js" : 839 === e ? "bcbf1ecb5aac36f3.js" : 342 === e ? "d7c64579c51ee4e4.js" : 405 === e ? "9999a89462e85fbe.vendor.js" : 501 === e ? "5882974707bfa3c6.vendor.js" : 311 === e ? "b855d03a5ac991eb.vendor.js" : 887 === e ? "07b4433581d3b657.js" : 848 === e ? "02266b9671ce316c.js" : 196 === e ? "bc2c2ec1a8f3cf7d.js" : 456 === e ? "1b203c93f4b26cf6.vendor.js" : 24 === e ? "f94193d9fe8a2853.vendor.js" : void 0, i.miniCssF = e => 810 === e ? "ef46db3751d8e999.runtime.css" : {
            33: 1,
            922: 1,
            329: 1,
            405: 1,
            501: 1,
            311: 1,
            456: 1,
            24: 1
        }[e] ? "ef46db3751d8e999.vendor.css" : 45 === e ? "86d009162535b1a3.css" : 302 === e ? "6af98c1787e09be7.css" : 839 === e ? "b6479476fcdafabb.css" : 342 === e ? "74c42d44f95a31e6.css" : 887 === e ? "d349dfa5ae08ba70.css" : {
            848: 1,
            196: 1
        }[e] ? "ef46db3751d8e999.css" : void 0, i.g = function() {
            if ("object" == typeof globalThis) return globalThis;
            try {
                return this || new Function("return this")()
            } catch (e) {
                if ("object" == typeof window) return window
            }
        }(), i.hmd = e => ((e = Object.create(e)).children || (e.children = []), Object.defineProperty(e, "exports", {
            enumerable: !0,
            set: () => {
                throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: " + e.id)
            }
        }), e), i.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), n = {}, o = "@canva/web:", i.l = (e, t, r, s) => {
            if (n[e]) n[e].push(t);
            else {
                var a, d;
                if (void 0 !== r)
                    for (var c = document.getElementsByTagName("script"), l = 0; l < c.length; l++) {
                        var f = c[l];
                        if (f.getAttribute("src") == e || f.getAttribute("data-webpack") == o + r) {
                            a = f;
                            break
                        }
                    }
                a || (d = !0, (a = document.createElement("script")).charset = "utf-8", a.timeout = 120, i.nc && a.setAttribute("nonce", i.nc), a.setAttribute("data-webpack", o + r), a.src = e, a.async = !1), n[e] = [t];
                var u = (t, r) => {
                        a.onerror = a.onload = null, clearTimeout(p);
                        var o = n[e];
                        if (delete n[e], a.parentNode && a.parentNode.removeChild(a), o && o.forEach((e => e(r))), t) return t(r)
                    },
                    p = setTimeout(u.bind(null, void 0, {
                        type: "timeout",
                        target: a
                    }), 12e4);
                a.onerror = u.bind(null, a.onerror), a.onload = u.bind(null, a.onload), d && document.head.appendChild(a)
            }
        }, i.r = e => {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(e, "__esModule", {
                value: !0
            })
        }, i.nmd = e => (e.paths = [], e.children || (e.children = []), e), (() => {
            const e = i.e,
                t = function e(t, r, n) {
                    return t().catch((function(o) {
                        return 0 === n ? Promise.reject(o) : (s = r, new Promise((function(e) {
                            setTimeout(e, s)
                        }))).then((function() {
                            return e(t, r, n - 1)
                        }));
                        var s
                    }))
                };
            i.e = function(r) {
                return t((function() {
                    return e(r)
                }), 1e3, 5)
            }
        })(), i.p = "",
        function() {
            let e = i.miniCssF,
                t = "undefined" != typeof self && void 0 !== self.document ? self.document.body.parentElement.getAttribute("dir") : "ltr";
            "ltr" !== t && "rtl" !== t && (console.warn("Could not determine the direction of text, please check that the dir attribute is set on the html tag"), t = "ltr"), i.miniCssF = function(r) {
                const n = self.window.cmsg && self.window.cmsg.cssAssets && self.window.cmsg.cssAssets[r] && self.window.cmsg.cssAssets[r][t];
                return n || e.apply(this, arguments)
            }
        }();
    var d, c, l = {};
    i.f.compat = (e, t) => {
        ! function(e, t, r) {
            if (null == t[e]) {
                let r, o;
                try {
                    r = window.cmsg.locale || "en", o = window.cmsg.assets[r][e].js || []
                } catch (n) {
                    return
                }
                t[e] = Promise.all(o.map((r => new Promise(((n, o) => {
                    const s = document.createElement("script");
                    s.async = !1, s.onerror = () => {
                        delete t[e], o(new Error(`Fail to load message files@${r}`))
                    }, s.onload = () => {
                        t[e] = 0, n()
                    }, s.src = i.p + r, document.head.appendChild(s)
                })))))
            }
            t[e] && r.push(t[e])
        }(e, l, t)
    }, d = e => new Promise(((t, r) => {
        var n = i.miniCssF(e),
            o = i.p + n;
        if (((e, t) => {
                for (var r = document.getElementsByTagName("link"), n = 0; n < r.length; n++) {
                    var o = (a = r[n]).getAttribute("data-href") || a.getAttribute("href");
                    if ("stylesheet" === a.rel && (o === e || o === t)) return a
                }
                var s = document.getElementsByTagName("style");
                for (n = 0; n < s.length; n++) {
                    var a;
                    if ((o = (a = s[n]).getAttribute("data-href")) === e || o === t) return a
                }
            })(n, o)) return t();
        ((e, t, r, n) => {
            var o = document.createElement("link");
            o.rel = "stylesheet", o.type = "text/css", o.onerror = o.onload = s => {
                if (o.onerror = o.onload = null, "load" === s.type) r();
                else {
                    var a = s && ("load" === s.type ? "missing" : s.type),
                        i = s && s.target && s.target.href || t,
                        d = new Error("Loading CSS chunk " + e + " failed.\n(" + i + ")");
                    d.code = "CSS_CHUNK_LOAD_FAILED", d.type = a, d.request = i, o.parentNode.removeChild(o), n(d)
                }
            }, o.href = t, document.head.appendChild(o)
        })(e, o, t, r)
    })), c = {
        810: 0
    }, i.f.miniCss = (e, t) => {
        c[e] ? t.push(c[e]) : 0 !== c[e] && {
            302: 1,
            342: 1,
            839: 1,
            887: 1
        }[e] && t.push(c[e] = d(e).then((() => {
            c[e] = 0
        }), (t => {
            throw delete c[e], t
        })))
    }, (() => {
        var e = {
            810: 0
        };
        i.f.j = (t, r) => {
            var n = i.o(e, t) ? e[t] : void 0;
            if (0 !== n)
                if (n) r.push(n[2]);
                else if (810 != t) {
                var o = new Promise(((r, o) => n = e[t] = [r, o]));
                r.push(n[2] = o);
                var s = i.p + i.u(t),
                    a = new Error;
                i.l(s, (r => {
                    if (i.o(e, t) && (0 !== (n = e[t]) && (e[t] = void 0), n)) {
                        var o = r && ("load" === r.type ? "missing" : r.type),
                            s = r && r.target && r.target.src;
                        a.message = "Loading chunk " + t + " failed.\n(" + o + ": " + s + ")", a.name = "ChunkLoadError", a.type = o, a.request = s, n[1](a)
                    }
                }), "chunk-" + t, t)
            } else e[t] = 0
        }, i.O.j = t => 0 === e[t];
        var t = (t, r) => {
                var n, o, [s, a, d] = r,
                    c = 0;
                if (s.some((t => 0 !== e[t]))) {
                    for (n in a) i.o(a, n) && (i.m[n] = a[n]);
                    if (d) var l = d(i)
                }
                for (t && t(r); c < s.length; c++) o = s[c], i.o(e, o) && e[o] && e[o][0](), e[s[c]] = 0;
                return i.O(l)
            },
            r = self.webpackChunk_canva_web = self.webpackChunk_canva_web || [];
        r.forEach(t.bind(null, 0)), r.push = t.bind(null, r.push.bind(r))
    })()
})();
//# sourceMappingURL=sourcemaps/318d4d036872b784.runtime.js.map