(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([
    [196], {

        /***/
        40459: function(_, __, __webpack_require__) {
            __webpack_require__.n_x = __webpack_require__.n;
            const __web_req__ = __webpack_require__;
            __web_req__(2868);
            self._8b3e58fb1042841aa4d6377195d71189 = self._8b3e58fb1042841aa4d6377195d71189 || {};
            (function(__c) {
                'use strict';
                var Qaa = async function(a, b) {
                        const c = __c.ua(__c.sa([Paa, "create"])),
                            [d, {
                                cO: e
                            }] = await Promise.all([a.ie.post(c, __c.lI.Ea(b)), __c.fb().then(() => ({
                                cO: __c.X1
                            }))]);
                        return e.ma(d)
                    },
                    L$ = function(a) {
                        if (a.Bo.Eg) return a.un || (a.un = new Promise((b) => {
                            a.global.sensorsDataAnalytic201505 = "sa";
                            a.global.sa = {
                                para: {
                                    name: "sa",
                                    server_url: a.My.url,
                                    cross_domain: !0,
                                    show_log: a.iE,
                                    send_type: a.My.Wt ? "beacon" : "ajax",
                                    preset_properties: {
                                        latest_referrer_host: !0,
                                        url: !1
                                    }
                                }
                            };
                            __webpack_require__.e(456).then(__webpack_require__.t.bind(__webpack_require__,
                                32871, 23)).then(() => {
                                b(__c.v(a.global.sa))
                            }).catch(() => {
                                b(void 0)
                            })
                        }), a.un.then((b) => {
                            null != b && null != a.My.Sd && null != b.identify && b.identify(a.My.Sd, !0)
                        })), a.un
                    },
                    M$ = function(a, b) {
                        var c, d, e;
                        return {
                            app_name: null === (c = b.app) || void 0 === c ? void 0 : c.name,
                            product_variant: null === (d = b.app) || void 0 === d ? void 0 : d.variant,
                            experience: a.jg,
                            country_code: null === (e = a.location) || void 0 === e ? void 0 : e.Ud,
                            locale: a.locale,
                            brand: a.Tl,
                            experience_brand: a.Lh
                        }
                    },
                    N$ = function(a) {
                        return new Date(a.eb.now()).toISOString()
                    },
                    O$ = async function(a, b) {
                        a: {
                            var c = window.document.cookie.split(";");
                            for (let d = 0; d < c.length; d++)
                                if (0 === c[d].trim().indexOf("CAI=")) {
                                    c = !1;
                                    break a
                                }
                            c = !0
                        }
                        b = new __c.lI({
                            event: b,
                            tS: c
                        });await Qaa(a.xO, b)
                    },
                    Raa = function(a) {
                        return new Promise((b, c) => {
                            const d = document.createElement("script");
                            d.onload = () => b();
                            d.onerror = () => c(Error("Failed to load URL: " + a));
                            d.src = a;
                            document.body.appendChild(d)
                        })
                    },
                    Taa = function(a) {
                        if (!a.YK) {
                            const b = __c.ua(__c.ta(__c.sa(["hm.js"]), a.config.Cv, !0));
                            a.YK = a.QS(`${Saa}${b}`).catch(() => {
                                a.YK = void 0
                            })
                        }
                    },
                    P$ = function(a, b) {
                        a.dataLayer.push({
                            event: "consent_state",
                            consent: {
                                essential: "yes",
                                functionality: b.Yo ? "yes" : "no",
                                performance: b.performance ? "yes" : "no",
                                targeting: b.Eg ? "yes" : "no",
                                social_media: b.cq ? "yes" : "no"
                            }
                        })
                    },
                    Uaa = function(a) {
                        if (!document.getElementById(Q$)) {
                            a.dataLayer.push({
                                event: "gtm.js",
                                "gtm.start": a.eb.now()
                            });
                            var b = document.createElement("script");
                            b.id = Q$;
                            b.src = `https://www.googletagmanager.com/gtm.js?id=${a.config.containerId}&l=dataLayer`;
                            b.async = !0;
                            b.onerror = () => {
                                a.stop()
                            };
                            document.head.appendChild(b)
                        }
                    },
                    Vaa = function(a) {
                        const b = {};
                        Object.entries(a).forEach((c) => {
                            var [d, e] = c;
                            void 0 !== e && (b[d] = e)
                        });
                        return b
                    },
                    R$ = function(a) {
                        a = Waa(a);
                        return Xaa(a)
                    },
                    Waa = function(a) {
                        return Object.entries(a).reduce((b, [c, d]) => {
                            "name" !== c && null != d && (c = c.replace(/[-.]/g, "_"), b[c] = d);
                            return b
                        }, {})
                    },
                    Xaa = function(a) {
                        return Object.entries(a).reduce((b, [c, d]) => {
                            if ("name" !== c && null != d) {
                                const f = typeof d;
                                var e = f;
                                e = S$.has(c) && S$.get(c) !== e;
                                b[`${c}${e?`_${f}`:""}`] = d
                            }
                            return b
                        }, {})
                    },
                    T$ = function(a) {
                        var b, c, d;
                        if (null === (b = a.Dx) || void 0 === b ? 0 : b.status) {
                            switch (null === (c = a.Dx) || void 0 === c ? void 0 : c.status) {
                                case 2:
                                    a = "online";
                                    break;
                                case 1:
                                    a = "offline";
                                    break;
                                case 3:
                                    return {};
                                default:
                                    throw new __c.x(null === (d = a.Dx) || void 0 === d ? void 0 : d.status);
                            }
                            return {
                                network: {
                                    status: a
                                }
                            }
                        }
                        return {}
                    },
                    Paa = "ae",
                    Yaa = __webpack_require__(22188).U5;
                var U$ = __webpack_require__,
                    Zaa = U$(37051),
                    $aa = U$.n_x(Zaa);
                var aba = new Set("design_create design_first_edited design_open design_opened design_publish editor_template_applied mobile_design_create_enriched new_event_partnership_artwork_created partnership_artwork_created post_publish_dialog_clicked printegration_page_content_selected printegration_page_loaded publish_button_clicked publish_completed publish_endpoint_clicked publish_print_confirm_bleed_continue_clicked publish_print_confirm_order_details_continue_clicked publish_print_editor_unlocked publish_print_funnel_step_selected publish_print_margin_check_continue_clicked publish_print_panel_shown publish_print_pay_clicked publish_print_proof_pdf_download publish_print_proof_review_continue_clicked publish_print_resolution_check_continue_clicked publish_print_shipping_details_continue_clicked signup_completed".split(" "));
                var bba = __c.F(() => ({
                    zS: __c.X(1)
                }));
                var cba = __c.F(() => ({
                    event: __c.C(1, __c.kI)
                }));
                var V$;
                V$ = class {
                    constructor(a, b, c, d, e) {
                        e = void 0 === e ? __c.wb : e;
                        this.xO = a;
                        this.kI = b;
                        this.xr = c;
                        this.ej = d;
                        this.eb = e;
                        Yaa(() => {
                            var f;
                            return null === (f = this.ej) || void 0 === f ? void 0 : f.status
                        }, async () => {
                            var f;
                            const g = new bba({
                                zS: 1 === (null === (f = this.ej) || void 0 === f ? void 0 : f.status)
                            });
                            f = await this.kI;
                            await (null === f || void 0 === f ? void 0 : f.DW(g))
                        })
                    }
                    static create(a, b, c, d) {
                        return new V$(a, c, b, d)
                    }
                    identify(a) {
                        const b = Object.assign({}, M$(a.xa, a.uc), a.Lz);
                        a = new __c.gI(Object.assign({}, a, {
                            xa: new __c.eI(Object.assign({}, a.xa, {
                                $F: N$(this)
                            })),
                            Lz: JSON.stringify(b)
                        }));
                        return this.dispatchEvent(a)
                    }
                    page(a) {
                        const b = Object.assign({}, M$(a.xa, a.uc), a.we);
                        a = new __c.hI(Object.assign({}, a, {
                            xa: new __c.eI(Object.assign({}, a.xa, {
                                $F: N$(this)
                            })),
                            we: JSON.stringify(b)
                        }));
                        return this.dispatchEvent(a)
                    }
                    track(a) {
                        var b = Object,
                            c = b.assign;
                        var d = a.xa;
                        d = aba.has(a.event) ? d.Lh : void 0;
                        b = c.call(b, {}, {
                            experience_brand: d
                        }, a.we);
                        a = new __c.jI(Object.assign({}, a, {
                            xa: new __c.eI(Object.assign({}, a.xa, {
                                $F: N$(this)
                            })),
                            we: JSON.stringify(b)
                        }));
                        return this.dispatchEvent(a)
                    }
                    async reset() {}
                    async dispatchEvent(a) {
                        const b =
                            this,
                            c = await this.kI;
                        c && this.xr || (await O$(this, a));
                        await (null === c || void 0 === c ? void 0 : c.handleEvent(new cba({
                            event: a
                        })).catch(async () => {
                            await O$(b, a)
                        }))
                    }
                    od() {}
                };
                __c.Kc = {};
                __c.Kc.GN = V$;
                var W$, Saa;
                W$ = class {
                    constructor(a, b = Raa) {
                        this.config = a;
                        this.QS = b
                    }
                    async track() {}
                    async identify() {}
                    async page() {}
                    async reset() {}
                    static create(a, b) {
                        a = new W$(a);
                        a.od(b);
                        return a
                    }
                    od(a) {
                        a.Eg && Taa(this)
                    }
                };
                Saa = "https://hm.baidu.com";
                __c.Nc = {};
                __c.Nc.JN = W$;
                var X$;
                X$ = class {
                    constructor(a, b, c) {
                        this.config = a;
                        this.getUserId = b;
                        this.appboy = c;
                        this.active = !1
                    }
                    static create(a, b, c, d = $aa()) {
                        b = new X$(b, c, d);
                        a.iI && b.start();
                        return b
                    }
                    start() {
                        if (!this.active) {
                            this.appboy.initialize(this.config.Cv, {
                                baseUrl: "sdk.iad-01.braze.com",
                                manageServiceWorkerExternally: !0
                            });
                            var a = this.getUserId();
                            a && this.appboy.changeUser(a);
                            this.appboy.openSession();
                            this.active = !0
                        }
                    }
                    stop() {
                        !1 !== this.active && (this.appboy.wipeData(), this.appboy.destroy(), this.active = !1)
                    }
                    od(a) {
                        a.iI ? this.start() : this.stop()
                    }
                    async identify(a) {
                        this.active && a.xa.Dh &&
                            this.appboy.changeUser(a.xa.Dh)
                    }
                    async page() {}
                    async track() {}
                    async reset() {}
                };
                __c.Oc = {};
                __c.Oc.KN = X$;
                var Y$, Q$;
                Y$ = class {
                    constructor(a, b, c) {
                        this.config = a;
                        this.eb = b;
                        this.global = c;
                        this.active = !1;
                        this.dataLayer = [];
                        __c.u(void 0 === c.dataLayer, "dataLayer is already initialized. You might be creating more than 1 instance of GoogleTagManagerPlugin.");
                        c.dataLayer = this.dataLayer
                    }
                    static create(a, b, c, d) {
                        c = void 0 === c ? __c.wb : c;
                        d = void 0 === d ? window : d;
                        a = new Y$(a, c, d);
                        b.Eg && (a.start(), P$(a, b));
                        return a
                    }
                    async identify() {}
                    async page(a) {
                        if (this.active) {
                            var b = {
                                type: "TRACK",
                                xa: a.xa,
                                uc: a.uc,
                                Wd: a.Wd,
                                event: "Loaded a Page",
                                we: {}
                            };
                            this.track(b);
                            if (a = a.name) b = Object.assign({}, b, {
                                event: `Viewed ${a} Page`,
                                we: {
                                    name: a
                                }
                            }), this.track(b)
                        }
                    }
                    async track(a) {
                        if (this.active) {
                            var b = Object.assign({}, M$(a.xa, a.uc), a.we, {
                                userId: a.xa.Dh,
                                segmentAnonymousId: a.xa.Sd
                            });
                            a = Object.assign({}, Vaa(b), {
                                event: a.event
                            });
                            this.dataLayer.push(a)
                        }
                    }
                    async reset() {}
                    od(a) {
                        a.Eg ? (this.start(), P$(this, a)) : (P$(this, a), this.stop())
                    }
                    start() {
                        this.active = !0;
                        Uaa(this)
                    }
                    stop() {
                        this.active = !1
                    }
                };
                Q$ = "gtm-plugin-script-tag";
                __c.Lc = {};
                __c.Lc.SN = Y$;
                var dba = class {
                    constructor() {
                        var a;
                        this.fetch = a = void 0 === a ? (...b) => self.fetch(...b) : a
                    }
                    mM(a) {
                        return this.sendRequest(Object.assign({}, a, {
                            responseType: "blob"
                        }))
                    }
                    Fy(a) {
                        return this.sendRequest(Object.assign({}, a, {
                            responseType: "text"
                        }))
                    }
                    sendRequest(a) {
                        __c.u(null == a.qN, "FetchEngine does not support upload progress, use XHREngine instead.");
                        return new Promise(async (b, c) => {
                            a.timeout && setTimeout(() => c(new __c.BI("fetchEngine")), a.timeout);
                            var d = {};
                            if (a.headers)
                                for (const f in a.headers) {
                                    const g = a.headers[f];
                                    null != g && (d[f] = g)
                                }
                            let e;
                            try {
                                e = await this.fetch(a.url, {
                                    method: a.method,
                                    headers: d,
                                    body: a.body,
                                    credentials: a.withCredentials ? "include" : "omit"
                                })
                            } catch (f) {
                                c(f);
                                return
                            }
                            if ("blob" === a.responseType) d = await e.blob();
                            else if ("text" === a.responseType) d = await e.text();
                            else throw new __c.x(a.responseType);
                            b({
                                status: e.status,
                                body: d,
                                getResponseHeader: (f) => e.headers.get(f)
                            })
                        })
                    }
                };
                var Z$, hba, fba, gba, eba;
                Z$ = class {
                    constructor(a, b, c = new dba, d = __c.Xb, e = __c.wb, f = window) {
                        this.config = a;
                        this.Xi = c;
                        this.JW = d;
                        this.eb = e;
                        this.global = f;
                        this.active = b.FL
                    }
                    static create(a, b) {
                        return new Z$(a, b)
                    }
                    identify() {
                        return Promise.resolve(void 0)
                    }
                    page() {
                        return Promise.resolve(void 0)
                    }
                    async track(a) {
                        if (this.active) {
                            var b;
                            if (b = "undefined" === typeof URLSearchParams ? null : new URLSearchParams(this.global.location.search).get("ovid")) {
                                a = a.event;
                                var c = eba.get(a);
                                c && (b = {
                                    account_id: this.config.qO,
                                    project_id: this.config.projectId,
                                    client_name: fba,
                                    client_version: gba,
                                    anonymize_ip: !0,
                                    enrich_decisions: !0,
                                    visitors: [{
                                        visitor_id: b,
                                        snapshots: [{
                                            decisions: [],
                                            events: [{
                                                timestamp: this.eb.now(),
                                                uuid: this.JW(),
                                                key: a,
                                                entity_id: c,
                                                tags: []
                                            }]
                                        }]
                                    }]
                                }, this.sendEvent(b))
                            }
                        }
                    }
                    async reset() {}
                    sendEvent(a) {
                        a = {
                            url: hba,
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify(a)
                        };
                        return this.Xi.Fy(a).then(() => {}).catch(() => {})
                    }
                    od(a) {
                        this.active = a.FL
                    }
                };
                hba = "https://logx.optimizely.com/v1/events";
                fba = "canva/optimizely-analytics-plugin";
                gba = "0.0.1";
                eba = new Map([
                    ["signup_submitted", "17936623469"],
                    ["signup_completed", "17963771082"],
                    ["login_submitted", "17924893243"],
                    ["login_success", "17971061254"],
                    ["password_changed", "17929437843"],
                    ["authenticating_item_clicked", "17971740897"],
                    ["homepage_visit", "17953652549"],
                    ["pre_signup_step_clicked", "17904425976"]
                ]);
                __c.Mc = {};
                __c.Mc.$N = Z$;
                var S$ = new Map([
                    ["page", "number"]
                ]);
                var $$;
                $$ = class {
                    constructor(a, b, c) {
                        c = void 0 === c ? window : c;
                        this.Et = b;
                        this.global = c;
                        this.active = !1;
                        a.Eg && (this.active = !0)
                    }
                    static create(a, b) {
                        return new $$(a, b)
                    }
                    async identify(a) {
                        var b, c, d, e;
                        if (this.active) {
                            var f = await L$(this.Et);
                            null != f && f.login && f.setProfile && (f.login(null !== (b = a.xa.Dh) && void 0 !== b ? b : ""), b = R$(a.Lz), f.setProfile(this.Oy(__c.Nb(Object.assign({}, {
                                app_name: null === (c = a.uc.app) || void 0 === c ? void 0 : c.name,
                                experience: a.xa.jg,
                                country_code: null === (d = a.xa.location) || void 0 === d ? void 0 : d.Ud,
                                locale: a.xa.locale,
                                brand: a.xa.Tl,
                                experience_brand: a.xa.Lh,
                                product_variant: null === (e = a.uc.app) || void 0 === e ? void 0 : e.variant
                            }, T$(a.uc), b)))))
                        }
                    }
                    async page(a) {
                        var b, c, d, e;
                        if (this.active) {
                            var f = await L$(this.Et);
                            if (f) {
                                const g = ["utm_source", "utm_medium", "utm_term", "utm_content", "utm_campaign"];
                                if (f.registerPage) {
                                    const h = new URLSearchParams(this.global.location.search),
                                        k = {};
                                    g.forEach((l) => {
                                        const n = h.get(l);
                                        n && (k[l] = n)
                                    });
                                    f.registerPage(Object.assign({}, k, {
                                        referrer: null === (b = a.xa.page) ||
                                            void 0 === b ? void 0 : b.referrer,
                                        title: "",
                                        url: null === (c = a.xa.page) || void 0 === c ? void 0 : c.url,
                                        path: null === (d = a.xa.page) || void 0 === d ? void 0 : d.path,
                                        search: null === (e = a.xa.page) || void 0 === e ? void 0 : e.search,
                                        userAgent: a.uc.userAgent
                                    }))
                                }
                                return this.track({
                                    type: "TRACK",
                                    event: "page_visit",
                                    xa: a.xa,
                                    uc: a.uc,
                                    we: {},
                                    Wd: a.Wd
                                })
                            }
                        }
                    }
                    async track(a) {
                        var b, c, d;
                        if (this.active) {
                            var e = await L$(this.Et);
                            if (null != e) {
                                const f = R$(a.we);
                                e.track && e.track(a.event, this.Oy(__c.Nb(Object.assign({}, {
                                    app_name: null === (
                                        b = a.uc.app) || void 0 === b ? void 0 : b.name,
                                    experience: a.xa.jg,
                                    country_code: null === (c = a.xa.location) || void 0 === c ? void 0 : c.Ud,
                                    locale: a.xa.locale,
                                    brand: a.xa.Tl,
                                    experience_brand: a.xa.Lh,
                                    product_variant: null === (d = a.uc.app) || void 0 === d ? void 0 : d.variant
                                }, T$(a.uc), f))))
                            }
                        }
                    }
                    async reset() {
                        const a = await L$(this.Et);
                        null != a && a.logout && a.logout(!0)
                    }
                    od(a) {
                        this.active = a.Eg;
                        this.Et.od(a)
                    }
                    Oy(a) {
                        const b = {};
                        for (const c of Object.entries(a)) {
                            const [d, e] = c;
                            Array.isArray(e) ? "string" === typeof e[0] ? b[d] =
                                e : b[d] = e.map((f) => JSON.stringify(f)) : b[d] = "object" === typeof e ? JSON.stringify(e) : e
                        }
                        return b
                    }
                };
                __c.Pc = {};
                __c.Pc.fO = $$;
            }).call(self, self._8b3e58fb1042841aa4d6377195d71189);
        }

    }
])
//# sourceMappingURL=sourcemaps/bc2c2ec1a8f3cf7d.js.map