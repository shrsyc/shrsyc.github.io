(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([
    [839], {

        /***/
        26365: function(_, __, __webpack_require__) {
            __webpack_require__.n_x = __webpack_require__.n;
            const __web_req__ = __webpack_require__;
            __web_req__(2868);
            self._8b3e58fb1042841aa4d6377195d71189 = self._8b3e58fb1042841aa4d6377195d71189 || {};
            (function(__c) {
                'use strict';
                var K = __c.K,
                    V0, F = __c.F,
                    G = __c.G,
                    Va = __c.Va,
                    V = __c.V,
                    W = __c.W,
                    C = __c.C,
                    D = __c.D,
                    U = __c.U,
                    T = __c.T,
                    E = __c.E,
                    Wa = __c.Wa,
                    dF = __c.dF,
                    $E = __c.$E,
                    eF = __c.eF,
                    aF = __c.aF,
                    y = __c.y,
                    bb = __c.bb,
                    YE = __c.YE,
                    X = __c.X,
                    Xa = __c.Xa,
                    ZE = __c.ZE,
                    Nm = __c.Nm;
                var N0, T0, U0, X0, a1, c1, K0, d1, e1, f1, g1, h1, i1, O0, j1, k1, S0, l1, m1, n1, o1, p1, q1, r1;
                __c.J0 = function(a) {
                    return Array(Math.max(0, Math.floor(a))).fill(0).map((b, c) => 0 + c)
                };
                __c.L0 = function() {
                    const [a, b] = (0, __c.JC)(() => K0 ? __c.PV.next() : void 0);
                    (0, __c.QV)(() => {
                        null == a && b(__c.PV.next())
                    }, []);
                    (0, __c.WB)(() => {
                        K0 = !0
                    }, []);
                    return a
                };
                __c.M0 = function({
                    children: a,
                    count: b = 1
                }) {
                    b = __c.J0(b).map(__c.L0);
                    return K(__c.gC, null, a(...b))
                };
                N0 = function(a) {
                    var b = Object.assign({}, a),
                        c = a.variant;
                    a = a.children;
                    b = (delete b.variant, delete b.children, b);
                    const d = __c.L0(),
                        e = __c.Us(Object.assign({}, b, {
                            variant: c
                        }));
                    return K("div", {
                        className: (0, __c.P)("sqQRZQ", {
                            cy_gNg: "xsmall" === e,
                            ukOaGA: "small" === e,
                            R4mVEg: "medium" === e,
                            rPqAFA: "large" === e
                        })
                    }, K(__c.aW, Object.assign({}, b, {
                        variant: c,
                        shape: "circle"
                    }), __c.Vs(Object.assign({}, b, {
                        oc: b.oc,
                        YG: b.YG || "top",
                        shape: "circle",
                        variant: c,
                        kf: d
                    }))), K("label", {
                            className: "RPdvnA"
                        },
                        K(__c.dV.Ou, {
                            id: d,
                            qe: "none",
                            tagName: "span",
                            jf: "center",
                            color: "dark" === b.ab ? "monoWhiteA100" : "monoBlackA100",
                            lineClamp: 2
                        }, a)))
                };
                T0 = function({
                    ag: a,
                    disabled: b
                }) {
                    const c = O0(P0),
                        d = Q0(() => new R0(c));
                    S0(() => {
                        d.mG(a);
                        if (b) d.Ty();
                        else return c.fB(d, a), d.Ty(), () => {
                            c.LF(d, a)
                        }
                    }, [a, b, d, c]);
                    return {
                        VS: d
                    }
                };
                U0 = function(a) {
                    return "hasAttribute" in a ? a.hasAttribute("data-focus-lock-excepted") : !1
                };
                X0 = function(a) {
                    const b = a.props.ed;
                    a = a.props.Po;
                    return null == b || "background" === a ? null : V0("div", {
                        className: "i7NByQ"
                    }, V0(W0, {
                        onClick: b
                    }))
                };
                a1 = function(a) {
                    a = a.props.Ys;
                    return null == a ? null : V0(__c.Y0, {
                        onClick: a,
                        className: Z0("dxeRgA", "kMfzIA", {
                            g3xmag: __c.yp()
                        }),
                        icon: $0,
                        qk: "large",
                        Bc: __c.$e("M50kBA")
                    })
                };
                c1 = function(a) {
                    a = a.props.Us;
                    return null == a ? null : V0(__c.Y0, {
                        onClick: a,
                        className: Z0("dxeRgA", "qquEjw"),
                        icon: b1,
                        qk: "large",
                        Bc: __c.$e("WMuMxg")
                    })
                };
                K0 = !1;
                d1 = (a) => K(__c.aW, Object.assign({}, a, {
                    shape: "circle"
                }), __c.Vs(Object.assign({}, a, {
                    shape: "circle"
                })));
                __c.Y0 = (a) => {
                    a = Object.assign({}, a, {
                        variant: "basic"
                    });
                    return "link" === a.type ? null != a.oc && 0 < a.oc.length ? K(__c.$V, Object.assign({}, a, {
                        oc: a.oc
                    })) : K(__c.YV, Object.assign({}, a, {
                        oc: void 0
                    })) : __c.Vs(a)
                };
                e1 = (a) => "undefined" !== typeof a.children ? K(N0, Object.assign({}, a)) : K(d1, Object.assign({}, a));
                f1 = (a) => {
                    const b = a.children;
                    ({
                        ref: a
                    } = __c.fD(a.map, {
                        bp: a.bp
                    }));
                    return K(__c.gC, null, b({
                        ref: a
                    }))
                };
                g1 = __webpack_require__(67294);
                h1 = g1.createContext;
                i1 = g1.memo;
                O0 = g1.useContext;
                j1 = g1.useEffect;
                V0 = __c.V0 = g1.createElement;
                k1 = g1.Fragment;
                S0 = g1.useLayoutEffect;
                l1 = g1.forwardRef;
                m1 = g1.useState;
                n1 = g1.useRef;
                o1 = g1.useCallback;
                p1 = g1.PureComponent;
                q1 = g1.Component;
                r1 = g1.createRef;
                var s1 = __webpack_require__(22188).LO;
                var t1 = __webpack_require__(70655).gn;
                var Q0 = __webpack_require__(33581).hN;
                var u1 = __webpack_require__(99601).Z;
                var v1 = __webpack_require__(29323).Pi;
                var w1 = __webpack_require__,
                    x1 = w1(94184),
                    Z0 = w1.n_x(x1)();
                var y1 = __webpack_require__(96630),
                    z1 = y1.ZP,
                    A1 = y1.cn;
                var B1 = h1(!0),
                    C1 = i1(function({
                        open: a,
                        bw: b,
                        KZ: c = document.body,
                        yc: d,
                        Eo: e = "window",
                        children: f,
                        SO: g
                    }) {
                        const h = O0(B1),
                            k = h && a;
                        j1(() => {
                            if (k) {
                                const n = c.style.overflow;
                                c.style.overflow = "hidden";
                                return () => {
                                    c.style.overflow = n
                                }
                            }
                        }, [k, c]);
                        const l = k && "none" !== g;
                        j1(() => {
                            if (l) {
                                const n = b || document.querySelector("#root");
                                if (null != n) {
                                    const p = "moderate" === g ? "Tr4BVQ" : "_8O9_Zg",
                                        t = Array.from(n.parentNode ? n.parentNode.children : []).filter((q) => 2 > (parseInt(window.getComputedStyle(q).zIndex, 10) || 0)).concat(n);
                                    t.forEach((q) => {
                                        q.classList.add(p);
                                        q.setAttribute("aria-hidden", "true")
                                    });
                                    return () => {
                                        t.forEach((q) => {
                                            q.classList.remove(p);
                                            q.removeAttribute("aria-hidden")
                                        })
                                    }
                                }
                            }
                        }, [b, l, g]);
                        a = V0(B1.Provider, {
                            value: !1
                        }, f);
                        return h && "window" === e ? V0(__c.IL, {
                            open: !0,
                            level: 3,
                            yc: d
                        }, a) : V0(k1, null, a)
                    });
                var D1 = "<svg width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M20.06 5.94a1.5 1.5 0 0 1 0 2.12l-6.878 6.88a1.5 1.5 0 0 0 0 2.12l6.879 6.88a1.5 1.5 0 0 1-2.122 2.12l-6.878-6.878a4.5 4.5 0 0 1 0-6.364l6.878-6.879a1.5 1.5 0 0 1 2.122 0Z\" fill=\"currentColor\"/></svg>";
                var E1 = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 16 16\"><path fill=\"currentColor\" d=\"M9.53 11.71 5.99 8.18a.25.25 0 0 1 0-.36L9.53 4.3a.75.75 0 1 0-1.06-1.06L4.93 6.76c-.68.69-.68 1.8 0 2.48l3.54 3.53a.75.75 0 0 0 1.06-1.06z\"/></svg>";
                var F1 = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"12\" height=\"12\" viewBox=\"0 0 12 12\"><path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-width=\"1.25\" d=\"M7 3.17 4.88 5.3a1 1 0 0 0 0 1.42L7 8.83\"/></svg>";
                var G1 = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path fill=\"currentColor\" d=\"M15.45 17.97 9.5 12.01a.25.25 0 0 1 0-.36l5.87-5.87a.75.75 0 0 0-1.06-1.06l-5.87 5.87c-.69.68-.69 1.8 0 2.48l5.96 5.96a.75.75 0 0 0 1.06-1.06z\"/></svg>";
                var $0 = __c.HU({
                    mq: F1,
                    small: E1,
                    medium: G1,
                    Gk: D1
                }, !0);
                var H1 = "<svg width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M11.94 26.06a1.5 1.5 0 0 1 0-2.12l6.878-6.88a1.5 1.5 0 0 0 0-2.12l-6.879-6.88a1.5 1.5 0 1 1 2.122-2.12l6.878 6.878a4.5 4.5 0 0 1 0 6.364l-6.878 6.879a1.5 1.5 0 0 1-2.122 0Z\" fill=\"currentColor\"/></svg>";
                var I1 = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 16 16\"><path fill=\"currentColor\" d=\"m6.47 4.29 3.54 3.53c.1.1.1.26 0 .36L6.47 11.7a.75.75 0 1 0 1.06 1.06l3.54-3.53c.68-.69.68-1.8 0-2.48L7.53 3.23a.75.75 0 0 0-1.06 1.06z\"/></svg>";
                var J1 = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"12\" height=\"12\" viewBox=\"0 0 12 12\"><path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-width=\"1.25\" d=\"M5 8.83 7.12 6.7a1 1 0 0 0 0-1.42L5 3.17\"/></svg>";
                var K1 = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path fill=\"currentColor\" d=\"m8.55 5.78 5.96 5.97c.1.1.1.25 0 .35l-5.87 5.87a.75.75 0 0 0 1.06 1.06l5.87-5.87c.69-.68.69-1.79 0-2.47L9.61 4.72a.75.75 0 0 0-1.06 1.06z\"/></svg>";
                var b1 = __c.HU({
                    mq: J1,
                    small: I1,
                    medium: K1,
                    Gk: H1
                }, !0);
                var L1 = (a) => !a.hasAttribute("data-focus-guard"),
                    M1 = (a) => "-1" !== a.getAttribute("tabIndex");
                var R0 = class {
                    constructor(a) {
                        this.tF = a;
                        this.Gj = new Map;
                        this.ag = window;
                        this.qv = !1
                    }
                    get hx() {
                        if (!this.tF) return !0;
                        const a = this.tF.Gj.get(this.ag);
                        return a ? a[a.length - 1] === this ? this.tF.hx : !1 : !0
                    }
                    get gq() {
                        if (!this.isReady || !this.hx) return !0;
                        const a = this.Gj.get(this.ag);
                        return a && 0 !== a.length ? !0 : !1
                    }
                    get isReady() {
                        return this.qv
                    }
                    Ty() {
                        this.qv = !0
                    }
                    mG(a) {
                        this.ag = a
                    }
                    fB(a, b) {
                        var c;
                        const d = null !== (c = this.Gj.get(b)) && void 0 !== c ? c : [];
                        this.Gj.set(b, [...d, a])
                    }
                    LF(a, b) {
                        var c = this.Gj.get(b);
                        c && (c = c.filter((d) => d !== a), 0 === c.length ?
                            this.Gj.delete(b) : this.Gj.set(b, c))
                    }
                };
                __c.m = R0.prototype;
                _dp([s1.shallow], R0.prototype, "Gj", void 0);
                _dmr(R0, "ag");
                _dmr(R0, "qv");
                _dmc(R0, "hx");
                _dmc(R0, "gq");
                _dmc(R0, "isReady");
                _dmb(R0, "Ty", null);
                _dmb(R0, "mG", null);
                _dmb(R0, "fB", null);
                _dmb(R0, "LF", null);
                var P0 = h1(new R0),
                    N1 = P0.Provider;
                var O1 = {
                        "data-focus-guard": !0
                    },
                    P1 = v1(l1(function(a, b) {
                        var {
                            autoFocus: c = !0,
                            children: d,
                            className: e,
                            disabled: f = !1,
                            d2: g,
                            aV: h = !0,
                            preventScroll: k = !1,
                            i2: l = !1
                        } = a;
                        const [n, p] = m1(window), t = n1(window.document.activeElement), q = n1(null), w = n1([]), z = n1(!0);
                        S0(() => {
                            var R;
                            const qa = null === (R = q.current) || void 0 === R ? void 0 : R.ownerDocument.defaultView;
                            qa && qa !== window && (p(qa), t.current = qa.document.activeElement)
                        }, []);
                        const {
                            VS: A
                        } = T0({
                            ag: n,
                            disabled: f
                        }), B = f || A.gq;
                        S0(() => {
                            if (q.current && !B) {
                                var R = new MutationObserver(() => {
                                    z.current = !0
                                });
                                R.observe(q.current, {
                                    childList: !0,
                                    subtree: !0
                                });
                                return () => {
                                    R.disconnect()
                                }
                            }
                        }, [B]);
                        const I = o1(() => {
                                z.current && q.current && (z.current = !1, w.current = Array.from(q.current.querySelectorAll("button:enabled,select:enabled,textarea:enabled,input:enabled,a[href],area[href],summary,iframe,object,embed,audio[controls],video[controls],[tabindex],[contenteditable],[autofocus]")).filter(L1).filter(M1))
                            }, []),
                            H = o1(() => {
                                I();
                                0 < w.current.length && w.current[0].focus({
                                    preventScroll: k
                                })
                            }, [k, I]);
                        a = o1(() => {
                            I();
                            0 < w.current.length && w.current[w.current.length - 1].focus({
                                preventScroll: k
                            })
                        }, [k, I]);
                        const N = o1((R) => {
                                q.current && null != R.target && (U0(R.target) || null != R.relatedTarget || q.current.contains(R.target) || H())
                            }, [H]),
                            L = o1((R) => {
                                q.current && !A.gq && (!R.relatedTarget || q.current.contains(R.relatedTarget) || U0(R.relatedTarget) || (R.target && q.current.contains(R.target) ? R.target.focus({
                                    preventScroll: k
                                }) : H()))
                            }, [H, A, k]);
                        S0(() => {
                            if (!B) return n.document.addEventListener("focusout", L, !0), n.document.addEventListener("focusin",
                                N, !0), () => {
                                n.document.removeEventListener("focusout", L, !0);
                                n.document.removeEventListener("focusin", N, !0)
                            }
                        }, [n.document, B, N, L]);
                        const O = n1(!1);
                        S0(() => {
                            if (!O.current && A.isReady && (O.current = !0, !f && !A.gq))
                                if (c) {
                                    var R;
                                    q.current ? (R = q.current.querySelector("[data-focus-lock-autofocus='true']")) ? (R = Array.from(R.querySelectorAll("button:enabled,select:enabled,textarea:enabled,input:enabled,a[href],area[href],summary,iframe,object,embed,audio[controls],video[controls],[tabindex],[contenteditable],[autofocus]")),
                                        R = 0 < R.length ? R[0] : null) : R = null : R = null;
                                    R ? R.focus({
                                        preventScroll: k
                                    }) : H()
                                } else(R = n.document.activeElement) && q.current && !q.current.contains(R) && R.blur()
                        }, [c, n.document, H, A.isReady, A.gq, k, f]);
                        const Y = n1(h && !B);
                        Y.current = h && !B;
                        j1(() => {
                            const R = t.current;
                            return () => {
                                Y.current && R && R.focus({
                                    preventScroll: k
                                })
                            }
                        }, []);
                        return V0(N1, {
                            value: A
                        }, V0("div", Object.assign({}, g, {
                            className: e,
                            ref: u1(q, b),
                            tabIndex: l ? -1 : void 0
                        }), V0("div", Object.assign({}, {
                            "aria-hidden": !0,
                            onFocus: B ? void 0 : a,
                            tabIndex: B ?
                                void 0 : 0
                        }, O1)), d, V0("div", Object.assign({}, {
                            "aria-hidden": !0,
                            onFocus: B ? void 0 : H,
                            tabIndex: B ? void 0 : 0
                        }, O1))))
                    }));
                var Q1, R1, W0, S1, U1;
                Q1 = {
                    enter: 0,
                    exit: 250
                };
                __c.T1 = v1(function({
                    kf: a,
                    Og: b,
                    children: c,
                    $W: d,
                    Eo: e,
                    mode: f = __c.Cp() ? "sheet" : "backdrop",
                    M6: g = "auto",
                    from: h,
                    J_: k,
                    bw: l,
                    yc: n,
                    Ls: p,
                    Xo: t,
                    open: q,
                    Ha: w,
                    CK: z,
                    Po: A,
                    Ys: B,
                    Us: I,
                    ed: H,
                    Wh: N,
                    autoFocus: L
                }) {
                    const O = o1((Y) => {
                        q && H && (Y.stopPropagation(), H())
                    }, [q, H]);
                    c = d ? V0(d, {
                        mode: f
                    }) : c;
                    if ("backdrop" === f || "positioned-ancestor" === e) return V0(R1, {
                        kf: a,
                        Og: b,
                        bw: l,
                        yc: n,
                        Eo: e,
                        Ls: p,
                        Xo: t,
                        open: q,
                        Ha: w,
                        CK: z,
                        Po: A,
                        Ys: B,
                        Us: I,
                        ed: H,
                        Wh: N,
                        autoFocus: L
                    }, V0(S1, {
                        Xo: t
                    }, c));
                    if ("sheet" === f) return V0(__c.V_, {
                        content: V0("div", {
                            className: "iUtNrw Z2VWzw"
                        }, c),
                        open: q,
                        from: h,
                        rg: !0,
                        Nk: O,
                        ed: H,
                        Wh: N,
                        size: g,
                        $Q: k,
                        Ha: w
                    });
                    throw new __c.x(f)
                });
                R1 = class extends p1 {
                    render() {
                        const {
                            kf: a,
                            Og: b,
                            children: c,
                            bw: d,
                            yc: e,
                            Eo: f,
                            Ls: g,
                            Xo: h,
                            open: k,
                            Po: l = "buttonOrBackground",
                            CK: n,
                            Ha: p = __c.Zs.Ha,
                            autoFocus: t,
                            Ys: q,
                            Us: w,
                            ed: z,
                            Wh: A
                        } = this.props, B = !__c.xp() && !__c.Zs.bQ;
                        return V0(z1, { in: k,
                            timeout: p ? Q1 : 0,
                            mountOnEnter: !0,
                            unmountOnExit: !0,
                            appear: !0
                        }, (I) => V0(C1, {
                            open: k,
                            bw: d,
                            yc: e,
                            Eo: f,
                            SO: B ? n ? "intense" : "moderate" : "none"
                        }, V0(U1, {
                            kf: a,
                            Og: b,
                            open: I === A1,
                            Eo: f || "window",
                            Ha: p,
                            Ls: g,
                            autoFocus: t,
                            Po: l,
                            KO: n ? B ? "moderate" : "intense" : B ? "none" : "moderate",
                            Xo: h,
                            Ys: q,
                            Us: w,
                            ed: z,
                            Wh: A
                        }, c)))
                    }
                };
                W0 = ({
                    onClick: a
                }) => V0(e1, {
                    variant: "contrast",
                    className: "T2s_Vg",
                    onClick: a,
                    Bc: __c.$e("ezdcfw"),
                    icon: __c.fW,
                    qk: "small",
                    size: "xsmall"
                });
                S1 = l1(({
                    children: a,
                    bZ: b,
                    ed: c,
                    Xo: d
                }, e) => V0("div", {
                    className: "HmLo5g",
                    ref: e
                }, c && V0("div", {
                    className: "MxkZUA"
                }, V0(W0, {
                    onClick: c
                })), V0("div", {
                    className: Z0("JFEjrQ OdX8fA Z2VWzw", b, {
                        y8vKyg: d
                    })
                }, a)));
                U1 = class extends q1 {
                    constructor() {
                        super(...arguments);
                        this.Jv = r1();
                        this.Kb = r1();
                        this.mL = null;
                        this.GS = [
                            ["Escape", (a) => {
                                const b = this.props.ed;
                                null != b && (b(), a.preventDefault())
                            }],
                            ["ArrowLeft", (a) => {
                                const b = this.props.Ys;
                                null != b && (b(), a.preventDefault())
                            }],
                            ["ArrowRight", (a) => {
                                const b = this.props.Us;
                                null != b && (b(), a.preventDefault())
                            }]
                        ];
                        this.Nk = (a) => {
                            const b = this.props.ed;
                            this.props.open && b && (a.stopPropagation(), b())
                        };
                        this.wT = (a) => {
                            const b = this.props.ed;
                            "button" !== this.props.Po && this.Jv.current === a.target && 0 === a.touches.length && (
                                b && b(), a.preventDefault())
                        };
                        this.uT = (a) => {
                            const b = this.props.ed;
                            "button" !== this.props.Po && this.Jv.current === a.target && this.mL === a.target && b && b()
                        };
                        this.vT = (a) => {
                            this.mL = a.target
                        }
                    }
                    componentDidMount() {
                        var a, b, c;
                        const {
                            autoFocus: d = !0
                        } = this.props;
                        d && (null === (a = this.Kb.current) || void 0 === a ? void 0 : a.focus(), null === (c = null === (b = this.Jv.current) || void 0 === b ? void 0 : b.scrollTo) || void 0 === c ? void 0 : c.call(b, 0, 0))
                    }
                    componentWillUnmount() {
                        const a = this.props.Wh;
                        a && a()
                    }
                    render() {
                        const {
                            kf: a,
                            Og: b,
                            role: c = "dialog",
                            children: d,
                            open: e,
                            Eo: f,
                            KO: g,
                            Ha: h = __c.Zs.Ha,
                            Xo: k,
                            Ls: l
                        } = this.props, n = Z0("MxhaIQ", {
                            R4vkCQ: h,
                            V6lwGg: "positioned-ancestor" === f,
                            _5aUrJg: e,
                            upxRvA: "moderate" === g,
                            mvLZKw: "intense" === g
                        }), p = Z0("IywfPg", l, {
                            _5aUrJg: e
                        });
                        return V0(__c.PC, {
                            Nk: this.Nk
                        }, V0(f1, {
                            bp: !1,
                            map: this.GS
                        }, ({
                            ref: t
                        }) => V0(k1, null, V0("div", {
                            className: n,
                            onTouchEnd: this.wT,
                            onMouseDown: this.vT,
                            onClick: this.uT,
                            ref: u1(this.Jv, t)
                        }, V0(P1, {
                            disabled: __c.Zs.cQ,
                            autoFocus: !1,
                            aV: !0,
                            className: p
                        }, a1(this), V0(__c.M0,
                            null, (q) => V0("div", {
                                tabIndex: -1,
                                ref: this.Kb,
                                role: c,
                                "aria-modal": !0,
                                "aria-labelledby": `${q} ${null!==a&&void 0!==a?a:""}`,
                                "aria-describedby": b,
                                className: Z0("EYTKnA", {
                                    y8vKyg: k
                                })
                            }, V0(__c.at, {
                                id: q
                            }, __c.$e("MfH6Iw")), d)), c1(this), X0(this))))))
                    }
                };
                U1 = t1([v1], U1);
                var V1 = {
                    monoBlackA150: "rgba(17, 23, 29, 0.6)",
                    monoWhite: "rgb(255, 255, 255)",
                    monoWhiteA100: "rgba(255, 255, 255, 0.65)",
                    gridBaseline: "8px",
                    colorTypographyPrimary: "var(--pUV7hA)",
                    colorTypographyTertiary: "var(--fSfh3A)",
                    unthemed: "body:not(:global(.theme))",
                    fontWeightSemiBold: "600",
                    textMedium: "fFOiLQ",
                    textSmall: "_5RSqIg",
                    labelMargin: "8px",
                    label: "FFnr-w",
                    medium: "_0bqX9Q fFOiLQ",
                    small: "_69xTJA _5RSqIg",
                    smallRegular: "TCjqdQ _5RSqIg",
                    disabled: "z2dDaQ",
                    dark: "Rkqp9g"
                };
                __c.W1 = (a) => {
                    var {
                        id: b,
                        className: c,
                        disabled: d = !1,
                        fontVariant: e,
                        children: f,
                        ab: g
                    } = a;
                    if (!f && 0 !== f) return null;
                    a = Z0(c, "FFnr-w", V1[e], {
                        z2dDaQ: d,
                        Rkqp9g: "dark" === g
                    });
                    return "string" === typeof f ? V0("p", {
                        id: b,
                        className: a
                    }, f) : V0("div", {
                        id: b,
                        className: a
                    }, f)
                };
                __c.X1 = F(() => ({}));
                F(() => ({}));
                var Y1 = G(() => [1, 2, 3], 1);
                var Z1 = G(() => [1, 2], 1);
                var $1 = F(() => ({
                    source: Va(1, Z1),
                    V6: V(2),
                    Z6: W(3),
                    Y6: W(4)
                }));
                var a2 = G(() => [1, 2], 1);
                __c.b2 = F(() => ({
                    container: Va(1, a2)
                }));
                var c2 = F(() => ({
                    Ia: V(1),
                    key: V(2)
                }));
                __c.d2 = F(() => ({
                    Ay: C(1, __c.b2),
                    reference: D(2, c2),
                    url: W(3)
                }));
                var e2 = F(() => ({
                    filename: V(1),
                    Ia: V(2),
                    key: V(3),
                    url: W(4)
                }));
                __c.f2 = F(() => ({
                    width: U(1),
                    height: U(2),
                    reference: D(3, c2),
                    url: W(4)
                }));
                var g2 = G(() => [1, 2], 1);
                var h2 = F(() => ({
                    lk: V(1),
                    SV: W(2)
                }));
                var i2 = F(() => ({
                    b8: V(1),
                    c8: V(2)
                }));
                __c.j2 = F(() => ({
                    Yc: U(1),
                    mJ: T(17),
                    zv: E(2, __c.f2),
                    title: W(3),
                    I5: Wa(20, g2),
                    lk: dF(4),
                    SV: dF(19),
                    x0: E(21, h2),
                    fT: dF(5),
                    nY: $E(6),
                    z7: dF(7),
                    ud: dF(8),
                    label: W(9),
                    m5: dF(10),
                    $v: dF(11),
                    mD: eF(12),
                    K5: aF(13),
                    I: dF(14),
                    description: W(15),
                    W6: D(16, i2)
                }));
                var k2 = F(() => ({
                    title: W(1),
                    description: W(2),
                    I: dF(3)
                }));
                var l2 = G(() => [1, 2, 3, 4, 5, 6], 1);
                var m2 = F(() => Object.assign({}, {}, {
                    type: y("A?", 1, "BRAND_USER"),
                    brand: V(1),
                    user: V(2)
                }));
                var n2 = F(() => Object.assign({}, {}, {
                    type: y("A?", 2, "BRAND_GROUP"),
                    brand: V(1),
                    group: V(2)
                }));
                var o2 = F(() => Object.assign({}, {}, {
                    type: y("A?", 3, "BRAND"),
                    brand: V(1)
                }));
                var p2 = bb(() => ({
                    type: [1, m2, 2, n2, 3, o2]
                }), () => ({}));
                var q2 = F(() => Object.assign({}, {}, {
                    type: y("A?", 1, "FOLDER_ORIGIN"),
                    LJ: V(1)
                }));
                var r2 = F(() => Object.assign({}, {}, {
                    type: y("A?", 2, "USER_ORIGIN"),
                    user: V(1)
                }));
                var s2 = bb(() => ({
                    type: [1, q2, 2, r2]
                }), () => ({}));
                var t2 = F(() => ({
                    Xk: C(1, p2),
                    origin: C(2, s2),
                    version: YE(3)
                }));
                var u2 = G(() => [1, 2, 3, 4], 1);
                var v2 = F(() => ({
                    key: C(1, t2),
                    NH: Va(2, u2)
                }));
                var w2 = F(() => ({
                    Bl: V("token", 1),
                    Cr: YE("expiry", 2)
                }));
                var x2 = G(() => [1, 2], 1);
                __c.y2 = F(() => ({
                    id: V(1),
                    brand: V(2),
                    user: W(3),
                    status: V(4),
                    xe: X(5),
                    T: Va(10, __c.ZR),
                    LS: Wa(22, x2),
                    Cj: eF(6),
                    Vp: Va(11, Y1),
                    pV: eF(16),
                    qV: aF(17),
                    source: D(7, $1),
                    files: E(8, __c.d2),
                    sourceFile: D(13, e2),
                    metadata: D(9, __c.j2),
                    yx: (0, __c.kF)(21, k2),
                    gR: W(12),
                    uv: Xa(14, l2),
                    Vf: E(15, v2),
                    Fi: D(20, w2),
                    Sm: aF(18),
                    ck: aF(19)
                }));
                var z2 = G(() => [1, "CENTIMETERS", 2, "INCHES", 3, "MILLIMETERS", 4, "PIXELS"]);
                var A2 = G(() => [0, "LOSSLESS", 1, "EDITING_AFFECTED", 2, "RENDERING_AFFECTED", 3, "UNREPRESENTABLE"]);
                var B2 = G(() => [1, "SINGLE", 2, "COLLAB"]);
                var C2 = G(() => [1, 2, 3]);
                __c.D2 = F(() => ({
                    Bl: W(1),
                    email: V(2),
                    role: Va(3, __c.kH),
                    status: Va(4, C2),
                    expiresAt: YE(5)
                }));
                __c.E2 = F(() => ({
                    rules: E("rules", 1, __c.vR),
                    IK: E("invites", 4, __c.D2),
                    version: U("version", 2),
                    Ve: C("owner", 3, __c.nH)
                }));
                __c.lb = F(() => ({}));
                __c.F2 = F(() => Object.assign({}, {}, {
                    type: y("type", "REFERENCE", 9, "REFERENCE"),
                    id: V("id", 1),
                    version: U("version", 2)
                }));
                __c.G2 = F(() => Object.assign({}, {}, {
                    type: y("type", "INLINE", 10, "INLINE"),
                    width: T("width", 1),
                    height: T("height", 2),
                    units: Va("units", 3, z2)
                }));
                var H2 = bb(() => ({
                    type: [9, __c.F2, 10, __c.G2]
                }), () => ({}));
                var I2 = F(() => ({
                    id: V("id", 1),
                    version: U("version", 2)
                }));
                __c.J2 = F(() => ({
                    title: W("title", 2),
                    description: W("description", 3),
                    I: dF("keywords", 4),
                    doctype: C("doctype", 5, H2)
                }));
                __c.K2 = F(() => ({
                    Ia: V("bucket", 1),
                    key: V("key", 2),
                    page: U("page", 3),
                    N4: $E("pageHash", 5),
                    height: $E("height", 6),
                    width: $E("width", 7),
                    url: W("url", 4)
                }));
                __c.L2 = F(() => ({
                    height: U("height", 1),
                    width: U("width", 2),
                    version: U("version", 3),
                    images: E("images", 4, __c.K2)
                }));
                __c.M2 = F(() => ({
                    Kn: C("thumbnail", 1, __c.L2),
                    ot: D("preview", 2, __c.L2)
                }));
                __c.N2 = F(() => ({
                    content: C("content", 1, __c.J2),
                    yg: V("schema", 11),
                    Bt: V("schemaFamily", 12),
                    version: U("version", 2),
                    timestamp: YE("timestamp", 3),
                    vW: X("untouched", 13),
                    Vk: U("pageCount", 5),
                    gh: C("imageSets", 8, __c.M2),
                    ZH: W("associatedMedia", 9)
                }));
                var O2 = F(() => ({
                    timestamp: YE("timestamp", 1)
                }));
                __c.P2 = F(() => ({
                    id: V("id", 1),
                    HL: V("owningBrand", 10),
                    ck: YE("creationDate", 2),
                    origin: D("origin", 9, I2),
                    extensions: D("extensions", 3, __c.b0),
                    tags: dF("tags", 5),
                    Vf: C("acl", 6, __c.E2),
                    Ul: X("brandTemplate", 13),
                    Ec: C("draft", 4, __c.N2),
                    version: U("version", 7),
                    timestamp: aF("timestamp", 8),
                    Cj: D("trashed", 11, O2),
                    CP: (0, __c.hF)("contributors", 12)
                }));
                F(() => ({
                    eT: X("modified", 1)
                }));
                F(() => ({
                    eT: X("modified", 1)
                }));
                F(() => ({}));
                F(() => ({
                    document: C("document", 1, __c.P2),
                    pO: Va("accessRole", 3, __c.kH)
                }));
                F(() => ({
                    Vf: C("acl", 1, __c.E2)
                }));
                F(() => ({
                    nm: E("documents", 1, __c.P2),
                    rX: (0, __c.jF)("accessRoles", 3, __c.kH),
                    bk: W("continuation", 2)
                }));
                F(() => ({
                    Vf: C("acl", 1, __c.E2)
                }));
                __c.Q2 = F(() => ({
                    timestamp: YE(2),
                    version: U(3),
                    Ve: C(4, __c.nH),
                    reason: W(5)
                }));
                F(() => ({
                    d6: E(1, __c.Q2)
                }));
                F(() => ({
                    Iy: C(1, __c.Q2)
                }));
                F(() => ({
                    tags: dF("tags", 1)
                }));
                F(() => ({}));
                F(() => ({}));
                __c.R2 = F(() => ({
                    yg: V("schema", 10),
                    content: C("content", 1, __c.eb),
                    version: U("version", 2),
                    timestamp: YE("timestamp", 3),
                    vW: X("untouched", 13),
                    Vk: U("pageCount", 5),
                    gh: C("imageSets", 8, __c.M2),
                    ZH: W("associatedMedia", 9),
                    SY: Wa("collaborationMode", 15, B2)
                }));
                __c.S2 = F(() => ({
                    id: V("id", 1),
                    HL: V("owningBrand", 10),
                    ck: YE("creationDate", 2),
                    origin: D("origin", 9, I2),
                    extensions: C("extensions", 3, __c.b0),
                    tags: dF("tags", 5),
                    Vf: C("acl", 6, __c.E2),
                    Ul: X("brandTemplate", 13),
                    K2: W("narrationId", 15),
                    Ec: C("draft", 4, __c.R2),
                    version: U("version", 7),
                    timestamp: aF("timestamp", 8),
                    CP: (0, __c.hF)("contributors", 12)
                }));
                __c.gb = F(() => ({
                    document: C("document", 1, __c.S2),
                    ye: U("session", 4),
                    KI: Wa("conversionResult", 5, A2)
                }));
                F(() => ({
                    document: C("document", 1, __c.S2),
                    fonts: E("fonts", 2, __c.bS),
                    s2: E("mediaMap", 3, __c.i0),
                    Aa: E("videos", 4, __c.Cm),
                    audio: E("audio", 5, __c.$R),
                    embeds: E("embeds", 6, __c.yW),
                    pO: Va("accessRole", 7, __c.kH),
                    EP: W("conversionLoss", 8),
                    KI: Wa("conversionResult", 9, A2)
                }));
                F(() => ({
                    content: C("content", 1, __c.eb),
                    EP: W("conversionLoss", 2),
                    KI: Wa("conversionResult", 3, A2)
                }));
                __c.CH = F(() => ({
                    fonts: E("fonts", 2, __c.bS),
                    Jw: E("fontFiles", 7, __c.q0),
                    media: E("media", 3, __c.i0),
                    Aa: E("videos", 4, __c.Cm),
                    audio: E("audio", 5, __c.$R),
                    embeds: E("embeds", 6, __c.yW),
                    bk: W("continuation", 1)
                }));
                __c.DH = F(() => ({
                    embed: D("embed", 1, __c.yW)
                }));
                __c.ib = F(() => ({}));
                var T2 = G(() => [1, "NOT_APPLICABLE", 2, "FREE", 3, "STANDARD"]);
                __c.U2 = F(() => ({
                    url: V("url", 1),
                    Ia: V("bucket", 5),
                    key: V("key", 4),
                    format: Va("format", 2, __c.By),
                    Ua: U("sizeBytes", 3)
                }));
                var V2 = () => ({
                    url: V("url", 3),
                    format: Va("format", 4, __c.By),
                    Ua: U("sizeBytes", 5)
                });
                var W2 = F(() => Object.assign({}, V2(), {
                    type: y("type", "GLYPH_SUBSETTED_FONT_FILE", 1, "GLYPH_SUBSETTED_FONT_FILE"),
                    e1: V("glyphs", 1)
                }));
                var X2 = F(() => Object.assign({}, V2(), {
                    type: y("type", "LOCALE_SUBSETTED_FONT_FILE", 2, "LOCALE_SUBSETTED_FONT_FILE"),
                    Be: E("unicodeRanges", 1, __c.j0),
                    supportedLocales: dF("supportedLocales", 2)
                }));
                var Y2 = bb(() => ({
                    type: [1, W2, 2, X2]
                }), V2);
                var Z2 = G(() => [0, "FONT_NAME", 1, "STYLE_NAME"]);
                __c.$2 = F(() => ({
                    url: V("url", 1),
                    width: U("width", 2),
                    height: U("height", 3),
                    role: Va("role", 4, Z2),
                    quality: $E("quality", 5)
                }));
                __c.a3 = F(() => ({
                    style: Va("style", 1, __c.wY),
                    vl: W("styleName", 6),
                    ht: W("postscriptName", 7),
                    weight: $E("weight", 9),
                    files: E("files", 2, __c.U2),
                    uj: E("subsettedFiles", 8, Y2),
                    Ib: X("canSubset", 3),
                    metadata: D("metadata", 4, __c.o0),
                    images: E("images", 5, __c.$2)
                }));
                var b3 = G(() => [0, "FONT_FAMILY", 1, "SCRIPT_PREVIEW", 2, "MARKETING_POSTER"]);
                __c.c3 = F(() => ({
                    url: V("url", 1),
                    width: U("width", 2),
                    height: U("height", 3),
                    role: Va("role", 4, b3),
                    locale: dF("locale", 5),
                    Tb: eF("preferredImage", 6),
                    quality: $E("quality", 7)
                }));
                var d3 = F(() => ({
                    locale: V("locale", 1),
                    I: dF("keywords", 2)
                }));
                var e3 = F(() => ({
                    script: V("script", 1),
                    G4: U("ordering", 2)
                }));
                var f3 = F(() => ({
                    s7: W("syncId", 1),
                    t7: aF("syncVersion", 2),
                    W7: aF("updatedAt", 3)
                }));
                __c.g3 = F(() => ({
                    id: V("id", 1),
                    version: U("version", 2),
                    nh: W("legacyId", 3),
                    name: V("name", 4),
                    brand: W("brand", 5),
                    T: Wa("licensing", 6, T2),
                    hidden: X("hidden", 7),
                    mc: X("needsLigatures", 8),
                    lc: X("library", 9),
                    jd: X("premium", 10),
                    fonts: E("fonts", 11, __c.a3),
                    locales: dF("locales", 12),
                    Kf: dF("primaryLocales", 16),
                    images: E("images", 13, __c.c3),
                    I: E("keywords", 14, d3),
                    FU: E("recommendations", 15, e3),
                    cZ: D("contentSyncMetadata", 17, f3)
                }));
                var h3 = G(() => [2, "RASTER", 3, "VECTOR", 4, "DESIGN", 5, "FONT", 6, "ELEMENT_GROUP"]);
                var i3 = G(() => [13, "APP_STORE", 15, "DEVICE", 1, "DROPBOX", 2, "FACEBOOK", 3, "GETTY", 4, "INSTAGRAM", 5, "FLICKR", 11, "GOOGLE_DRIVE", 9, "LENSDROP", 12, "MEDIA_PRIVATE", 6, "PEXELS", 14, "PINTEREST", {
                    El: !0
                }, 7, "PIXABAY", 8, "STOCK_UNLIMITED", 10, "VCG", 16, "VIEWSTOCK", 17, "PUBLIC_CONTENT_APP", {
                    El: !0
                }]);
                __c.j3 = F(() => ({
                    zU: Va("provider", 1, i3),
                    p5: W("providerGroupId", 3),
                    id: V("id", 2)
                }));
                __c.k3 = F(() => ({
                    rK: W("importBucket", 1),
                    importKey: W("importKey", 2),
                    dS: W("importFilename", 3),
                    tK: W("importVersion", 4),
                    bJ: W("design", 5),
                    YP: $E("designVersion", 6),
                    type: Wa("type", 7, h3),
                    xe: eF("restrictedAccess", 8),
                    yp: eF("listed", 9),
                    dT: Xa("mintUrls", 10, __c.iH),
                    locale: W("locale", 11),
                    set: W("set", 12),
                    dR: D("externalRef", 13, __c.j3),
                    KV: W("sourceMedia", 14),
                    Fi: W("accessToken", 16),
                    appId: W("appId", 15)
                }));
                F(() => ({
                    fileSize: aF("fileSize", 1),
                    file: W("file", 2),
                    Y5: eF("restricted", 3),
                    yp: eF("listed", 4),
                    cM: Xa("qualities", 5, __c.iH),
                    Q_: Wa("externalRefProvider", 6, i3),
                    R_: W("externalRefProviderGroupId", 9),
                    P_: W("externalRefId", 7),
                    KV: W("sourceMedia", 10),
                    Fi: W("accessToken", 12),
                    appId: W("appId", 11),
                    body: D("body", 8, __c.k3)
                }));
                var l3 = G(() => [1, "PENDING_SUBMISSION", 2, "PENDING_REVIEW", 3, "APPROVED", 4, "SOFT_REJECTED", 5, "HARD_REJECTED", 6, "ETCH_REJECTED", 7, "SET_REJECTED", 8, "DIFFICULT_VECTOR_REJECTED", 9, "CANCELLED"]);
                var m3 = G(() => [0, 1]);
                var n3 = G(() => [1, "GENERAL", 2, "PARENTAL_GUIDANCE"]);
                __c.o3 = F(() => ({
                    locale: V("locale", 1),
                    text: V("text", 2)
                }));
                var p3 = F(() => ({
                    Ia: V("bucket", 1),
                    key: V("key", 2),
                    page: U("page", 3)
                }));
                __c.q3 = F(() => ({
                    page: U("page", 1),
                    quality: Va("quality", 2, __c.iH),
                    Ia: V("bucket", 3),
                    key: V("key", 4),
                    width: $E("width", 5),
                    height: $E("height", 6),
                    l: X("watermarked", 7),
                    Ac: X("spritesheet", 10),
                    url: V("url", 8),
                    Sc: aF("urlExpiry", 11),
                    jb: X("urlDenied", 9),
                    Gr: aF("fileSizeBytes", 12)
                }));
                var r3 = F(() => ({
                    family: V("family", 1),
                    style: V("style", 2),
                    P1: X("italic", 3),
                    weight: U("weight", 4),
                    manufacturer: W("manufacturer", 5)
                }));
                __c.s3 = F(() => ({
                    timestamp: aF("timestamp", 1),
                    $X: W("author", 2),
                    Es: V("keyword", 3)
                }));
                var t3 = G(() => [1, "P", 6, "G"]);
                var u3 = F(() => ({
                    left: T("left", 1),
                    top: T("top", 2),
                    width: T("width", 3),
                    height: T("height", 4),
                    jV: T("score", 5)
                }));
                var v3 = F(() => ({
                    name: V("name", 1),
                    jV: T("score", 2),
                    lY: E("boundingBoxes", 3, u3)
                }));
                var w3 = F(() => ({
                    model: V("model", 1),
                    version: V("version", 2),
                    tags: E("tags", 3, v3)
                }));
                var x3 = F(() => ({
                    country: V(1),
                    language: V(2)
                }));
                var y3 = F(() => ({
                    U_: C(1, u3),
                    F_: V(2),
                    xX: V(3),
                    v0: V(4)
                }));
                __c.z3 = F(() => ({
                    title: W("title", 1),
                    description: W("description", 2),
                    I: E("keywords", 3, __c.o3),
                    UV: E("superKeywords2", 4, __c.s3),
                    r2: Wa("mediaContentType", 5, t3),
                    tags: E("tags", 6, w3),
                    D_: dF("ethnicities", 7),
                    qS: D("intendedAudienceLocale", 8, x3),
                    V_: E("faces", 9, y3)
                }));
                __c.A3 = F(() => ({
                    pm: (0, __c.gF)("dominantColors", 1),
                    tP: (0, __c.fF)("colorHistogram", 2),
                    H5: dF("recolorableVectorColors", 3)
                }));
                var B3 = G(() => [1, "MODERN", 2, "STOCK"]);
                var C3 = F(() => ({
                    quality: $E("quality", 1),
                    nZ: eF("curated", 2),
                    style: Wa("style", 3, B3),
                    X_: aF("featured", 4)
                }));
                var D3 = F(() => ({
                    locale: V("locale", 1, "en"),
                    title: W("title", 2),
                    description: W("description", 3),
                    I: dF("keywords", 4),
                    o7: dF("superKeywords", 5)
                }));
                __c.E3 = F(() => ({
                    M_: W("externalId", 1),
                    displayName: W("displayName", 2),
                    TX: W("artistUrl", 3)
                }));
                __c.F3 = F(() => ({
                    version: U("version", 1),
                    tK: W("importVersion", 2),
                    z1: W("importFileUrl", 3),
                    YP: $E("designVersion", 4),
                    BZ: W("designType", 5),
                    zZ: W("designSchemaVersion", 6),
                    yp: X("listed", 7),
                    sK: Va("importState", 8, __c.eX),
                    eS: W("importMessage", 9),
                    status: Va("status", 10, l3),
                    cS: Wa("importFailureType", 46, m3),
                    JU: W("rejectionReason", 11),
                    k7: W("submittedBy", 12),
                    l7: aF("submittedDate", 13),
                    cV: W("reviewedBy", 14),
                    c6: aF("reviewedDate", 15),
                    Sm: YE("modifiedDate",
                        16),
                    ud: W("artist", 17),
                    title: W("title", 18),
                    description: W("description", 19),
                    locale: W("locale", 20),
                    background: X("background", 21),
                    VI: X("cutout", 22),
                    RK: X("isolated", 23),
                    RL: X("photoholder", 24),
                    cN: X("textholder", 25),
                    lM: X("repeating", 26),
                    gM: X("recolorable", 27),
                    Mi: W("colorSpace", 28),
                    quality: $E("quality", 29),
                    QH: Wa("ageRating", 30, n3),
                    I: E("keywords", 31, __c.o3),
                    XL: E("processedFiles", 32, p3),
                    files: E("files", 45, __c.q3),
                    b0: E("files_", 33, __c.q3),
                    xP: E("componentMedia", 34, __c.cS),
                    r0: D("fontMetadata", 35, r3),
                    bf: D("spritesheetMetadata", 36, __c.jX),
                    T: Va("licensing", 37, __c.dX),
                    fb: D("contentMetadata", 38, __c.z3),
                    fileSize: aF("fileSize", 39),
                    Xl: D("colorInfo", 40, __c.A3),
                    Ay: D("qualityMetadata", 41, C3),
                    yx: (0, __c.kF)("localizedMetadata", 42, D3),
                    YH: D("artistMetadata", 43, __c.E3),
                    appId: W("appId", 44)
                }));
                var G3 = G(() => [1, "APP", 2, "COPY", 3, "TRANSFORMATION"]);
                var H3 = F(() => ({
                    R4: C("parentMedia", 1, __c.cS),
                    i6: C("rootMedia", 2, __c.cS),
                    type: Wa("type", 3, G3)
                }));
                var I3 = G(() => [1, "GET", 2, "UPDATE_METADATA", 3, "UPDATE", 4, "DEACTIVATE", 5, "MANAGE_ACL", 6, "REMIX"]);
                var J3 = F(() => Object.assign({}, {}, {
                    GF: y("principalType", "USER", 1, "USER"),
                    brand: V("brand", 1),
                    user: V("user", 2)
                }));
                var K3 = F(() => Object.assign({}, {}, {
                    GF: y("principalType", "GROUP", 2, "GROUP"),
                    brand: V("brand", 1),
                    group: V("group", 2)
                }));
                var L3 = F(() => Object.assign({}, {}, {
                    GF: y("principalType", "BRAND", 3, "BRAND"),
                    brand: V("brand", 1)
                }));
                var M3 = bb(() => ({
                    GF: [1, J3, 2, K3, 3, L3]
                }), () => ({}));
                var N3 = F(() => Object.assign({}, {}, {
                    iF: y("originType", "FOLDER_ORIGIN", 1, "FOLDER_ORIGIN"),
                    LJ: V("folder", 1)
                }));
                var O3 = F(() => Object.assign({}, {}, {
                    iF: y("originType", "USER_ORIGIN", 2, "USER_ORIGIN"),
                    user: V("user", 1)
                }));
                var P3 = F(() => Object.assign({}, {}, {
                    iF: y("originType", "BRAND_KIT_ORIGIN", 3, "BRAND_KIT_ORIGIN"),
                    oY: V("brandKit", 1)
                }));
                var Q3 = bb(() => ({
                    iF: [1, N3, 2, O3, 3, P3]
                }), () => ({}));
                var R3 = F(() => ({
                    Xk: C("principal", 1, M3),
                    l6: C("ruleOrigin", 2, Q3)
                }));
                var S3 = F(() => ({
                    i5: C("principalOrigin", 1, R3),
                    version: YE("version", 2)
                }));
                var T3 = G(() => [1, "VIEWER", 2, "REMIXER", 3, "EDITOR"]);
                var U3 = F(() => ({
                    key: C("key", 1, S3),
                    NH: Va("access", 2, T3)
                }));
                var V3 = F(() => Object.assign({}, {}, {
                    type: y("type", "BACKGROUNDREMOVAL", 1, "BACKGROUNDREMOVAL")
                }));
                var W3 = F(() => Object.assign({}, {}, {
                    type: y("type", "LUT", 2, "LUT"),
                    zk: T("intensity", 1),
                    name: V("name", 2),
                    m6: U("samplesPerChannel", 3),
                    A: V("layout", 4)
                }));
                var X3 = F(() => Object.assign({}, {}, {
                    type: y("type", "ADJUSTMENTS", 3, "ADJUSTMENTS"),
                    blur: ZE("blur", 1),
                    nf: ZE("clarity", 2),
                    Af: ZE("highlights", 3),
                    Mf: ZE("shadows", 4),
                    Qf: ZE("vibrance", 5),
                    brightness: ZE("brightness", 6),
                    contrast: ZE("contrast", 7),
                    saturation: ZE("saturation", 8),
                    Rf: ZE("warmth", 9),
                    F7: ZE("tintHue", 10),
                    G7: ZE("tintIntensity", 11),
                    wf: ZE("fade", 12),
                    t8: ZE("xprocess", 13)
                }));
                var Y3 = F(() => Object.assign({}, {}, {
                    type: y("type", "VIGNETTE", 4, "VIGNETTE"),
                    i7: T("strength", 1)
                }));
                var Z3 = F(() => Object.assign({}, {}, {
                    type: y("type", "DUOTONE", 5, "DUOTONE"),
                    zk: T("intensity", 1),
                    p1: V("highlightColorHex", 2),
                    K6: V("shadowColorHex", 3)
                }));
                var $3 = F(() => Object.assign({}, {}, {
                    type: y("type", "CROPANDROTATE", 6, "CROPANDROTATE"),
                    width: T("width", 1),
                    height: T("height", 2),
                    L7: __c.bF("transformationMatrix", 3)
                }));
                var a4 = F(() => Object.assign({}, {}, {
                    type: y("type", "INPAINTING", 7, "INPAINTING")
                }));
                var b4 = bb(() => ({
                    type: [1, V3, 2, W3, 3, X3, 4, Y3, 5, Z3, 6, $3, 7, a4]
                }), () => ({}));
                __c.c4 = F(() => ({
                    id: V("id", 1),
                    brand: V("brand", 2),
                    user: W("user", 3),
                    rK: W("importBucket", 4),
                    importKey: W("importKey", 5),
                    dS: W("importFilename", 6),
                    type: Va("type", 7, h3),
                    la: C("bundle", 11, __c.F3),
                    XI: X("deactivated", 12),
                    Sk: X("oneTimeUseDiscountable", 13),
                    bJ: W("design", 14),
                    set: W("set", 15),
                    dR: D("externalRef", 16, __c.j3),
                    wZ: D("derivationMetadata", 21, H3),
                    Pf: E("transformations", 24, b4),
                    xe: X("restrictedAccess", 17),
                    uv: Xa("aclAllowedActions", 18, I3),
                    Vf: E("acl", 19, U3),
                    created: YE("created", 20),
                    updated: YE("updated", 22),
                    Fi: D("accessToken", 23, __c.fX)
                }));
                var d4 = F(() => ({
                    background: X("background", 1),
                    VI: X("cutout", 2),
                    RK: X("isolated", 3),
                    RL: X("photoholder", 4),
                    cN: X("textholder", 5),
                    lM: X("repeating", 6),
                    gM: X("recolorable", 7),
                    Mi: W("colorSpace", 8)
                }));
                var e4 = G(() => [1, "A", 2, "R"]);
                var f4 = G(() => [1, "MERGE", 2, "REPLACE"]);
                var g4 = F(() => ({
                    data: C("data", 1, __c.z3),
                    R1: Wa("keywordsUpdatePolicy", 2, f4),
                    q7: Wa("superKeywordsUpdatePolicy", 3, f4),
                    p7: Wa("superKeywords2UpdatePolicy", 4, f4),
                    E_: Wa("ethnicitiesUpdatePolicy", 5, f4),
                    W_: Wa("facesUpdatePolicy", 6, f4)
                }));
                var h4 = F(() => ({
                    files: E("files", 1, __c.q3)
                }));
                var i4 = F(() => ({
                    XL: E("processedFiles", 1, p3)
                }));
                var j4 = F(() => ({
                    data: C("data", 1, C3),
                    NY: eF("clearFeatured", 2)
                }));
                var k4 = F(() => ({
                    yx: (0, __c.kF)("localizedMetadata", 1, D3)
                }));
                var l4 = F(() => ({
                    data: C("data", 1, __c.E3)
                }));
                F(() => ({
                    id: V("id", 1),
                    version: U("version", 2),
                    commit: eF("commit", 3),
                    reset: eF("reset", 4),
                    W3: eF("newImport", 5),
                    sK: Wa("importState", 7, __c.eX),
                    eS: W("importMessage", 8),
                    status: Wa("status", 9, l3),
                    cS: Wa("importFailureType", 38, m3),
                    JU: W("rejectionReason", 10),
                    quality: $E("quality", 11),
                    QH: Wa("ageRating", 12, n3),
                    tK: W("importVersion", 13),
                    A1: aF("importSize", 14),
                    style: D("style", 15, d4),
                    T: Wa("licensing", 16, __c.dX),
                    XI: eF("deactivated", 17),
                    xe: eF("restrictedAccess",
                        18),
                    yp: eF("listed", 19),
                    bf: D("spritesheetMetadata", 24, __c.jX),
                    dT: Xa("mintUrls", 25, __c.iH),
                    locale: W("locale", 26),
                    cV: W("reviewedBy", 27),
                    E6: Wa("setOperation", 28, e4),
                    set: W("set", 29),
                    fb: D("contentMetadata", 30, g4),
                    Xl: D("colorInfo", 31, __c.A3),
                    files: D("files", 32, h4),
                    l5: D("processedFiles_", 33, i4),
                    Ay: D("qualityMetadata", 35, j4),
                    yx: D("localizedMetadata", 36, k4),
                    YH: D("artistMetadata", 37, l4)
                }));
                var m4 = G(() => [1, 2, {
                    El: !0
                }, 3, {
                    El: !0
                }, 4, 5]);
                __c.n4 = F(() => ({
                    body: C(5, __c.FI)
                }));
                __c.o4 = F(() => ({
                    CI: __c.cF(1)
                }));
                F(() => ({
                    prompt: Va(1, m4)
                }));
                var p4 = F(() => ({
                    Yo: X(1),
                    performance: X(2),
                    Eg: X(3),
                    cq: X(4)
                }));
                F(() => ({
                    WY: X("consentRequired", 5),
                    J5: X("rejectAllRequired", 6),
                    pZ: D("defaultConsent", 7, p4),
                    qZ: __c.cF("defaultConsented", 9),
                    B2: __c.cF("minInformed", 8)
                }));
                var q4 = F(() => ({
                    zl: U(1),
                    yl: U(2),
                    Lk: U(7),
                    dj: U(3),
                    Kk: U(4),
                    hl: T(5),
                    url: V(6),
                    Sc: aF(8)
                }));
                __c.r4 = F(() => ({
                    id: V(1),
                    status: V(2),
                    ue: dF(3),
                    Rc: E(13, q4),
                    mH: dF(5),
                    title: W(6),
                    Ja: $E(7),
                    Yc: ZE(12),
                    width: U(8),
                    height: U(9),
                    contentType: V(10),
                    description: W(11)
                }));
                F(() => ({
                    video: C(1, Nm)
                }));
                __c.s4 = F(() => ({
                    aa: (0, __c.iF)(1),
                    TL: V(2),
                    rU: V(3)
                }));
                var t4 = F(() => ({
                    S4: U(1),
                    uY: YE(2),
                    tY: YE(3),
                    TL: V(4)
                }));
                var u4 = F(() => ({
                    parts: E(1, t4)
                }));
                F(() => ({
                    video: C(1, Nm),
                    X7: D(2, __c.s4),
                    I2: D(3, u4)
                }));
                F(() => ({
                    Aa: E(1, Nm),
                    bk: W(2)
                }));
                F(() => ({
                    Aa: E(1, Nm)
                }));
                F(() => ({
                    video: C(1, Nm)
                }));
                F(() => ({
                    brand: V(1),
                    user: V(2),
                    I7: YE(3),
                    J7: U(4)
                }));
                F(() => ({
                    video: C(1, Nm)
                }));
                F(() => ({
                    video: C(1, Nm)
                }));
                F(() => ({
                    video: C(1, Nm)
                }));
            }).call(self, self._8b3e58fb1042841aa4d6377195d71189);
        }

    }
])
//# sourceMappingURL=sourcemaps/bcbf1ecb5aac36f3.js.map