(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [8948], {
        60076: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = r(39324),
                i = r(71209),
                o = r(70216),
                u = r(22830),
                l = r(81949);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "default", {
                enumerable: !0,
                get: function() {
                    return w
                }
            });
            var a = r(64838),
                s = r(15542)._(r(70079)),
                c = a._(r(63339)),
                d = r(19023),
                f = r(7202),
                p = r(32109);
            r(51038);
            var m = a._(r(91226)),
                v = {
                    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
                    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
                    path: "/_next/image",
                    loader: "default",
                    dangerouslyAllowSVG: !1,
                    unoptimized: !1
                };

            function h(e) {
                return void 0 !== e.default
            }

            function g(e) {
                return void 0 === e ? e : "number" == typeof e ? Number.isFinite(e) ? e : NaN : "string" == typeof e && /^[0-9]+$/.test(e) ? parseInt(e, 10) : NaN
            }

            function y(e, t, r, o, u, l, a) {
                e && e["data-loaded-src"] !== t && (e["data-loaded-src"] = t, ("decode" in e ? e.decode() : Promise.resolve()).catch(function() {}).then(function() {
                    if (e.parentElement && e.isConnected) {
                        if ("blur" === r && l(!0), null == o ? void 0 : o.current) {
                            var t = new Event("load");
                            Object.defineProperty(t, "target", {
                                writable: !1,
                                value: e
                            });
                            var a = !1,
                                s = !1;
                            o.current(i._(n._({}, t), {
                                nativeEvent: t,
                                currentTarget: e,
                                target: e,
                                isDefaultPrevented: function() {
                                    return a
                                },
                                isPropagationStopped: function() {
                                    return s
                                },
                                persist: function() {},
                                preventDefault: function() {
                                    a = !0, t.preventDefault()
                                },
                                stopPropagation: function() {
                                    s = !0, t.stopPropagation()
                                }
                            }))
                        }(null == u ? void 0 : u.current) && u.current(e)
                    }
                }))
            }

            function b(e) {
                var t = u._(s.version.split("."), 2),
                    r = t[0],
                    n = t[1],
                    i = parseInt(r, 10),
                    o = parseInt(n, 10);
                return i > 18 || 18 === i && o >= 3 ? {
                    fetchPriority: e
                } : {
                    fetchpriority: e
                }
            }
            var E = (0, s.forwardRef)(function(e, t) {
                    var r = e.imgAttributes,
                        u = e.heightInt,
                        l = e.widthInt,
                        a = (e.qualityInt, e.className),
                        c = e.imgStyle,
                        d = e.blurStyle,
                        f = e.isLazy,
                        p = e.fetchPriority,
                        m = e.fill,
                        v = e.placeholder,
                        h = e.loading,
                        g = e.srcString,
                        E = (e.config, e.unoptimized),
                        w = (e.loader, e.onLoadRef),
                        R = e.onLoadingCompleteRef,
                        P = e.setBlurComplete,
                        T = e.setShowAltText,
                        S = (e.onLoad, e.onError),
                        x = o._(e, ["imgAttributes", "heightInt", "widthInt", "qualityInt", "className", "imgStyle", "blurStyle", "isLazy", "fetchPriority", "fill", "placeholder", "loading", "srcString", "config", "unoptimized", "loader", "onLoadRef", "onLoadingCompleteRef", "setBlurComplete", "setShowAltText", "onLoad", "onError"]);
                    return h = f ? "lazy" : h, s.default.createElement(s.default.Fragment, null, s.default.createElement("img", i._(n._(i._(n._({}, x, b(p)), {
                        loading: h,
                        width: l,
                        height: u,
                        decoding: "async",
                        "data-nimg": m ? "fill" : "1",
                        className: a,
                        style: n._({}, c, d)
                    }), r), {
                        ref: (0, s.useCallback)(function(e) {
                            t && ("function" == typeof t ? t(e) : "object" == typeof t && (t.current = e)), e && (S && (e.src = e.src), e.complete && y(e, g, v, w, R, P, E))
                        }, [g, v, w, R, P, S, E, t]),
                        onLoad: function(e) {
                            y(e.currentTarget, g, v, w, R, P, E)
                        },
                        onError: function(e) {
                            T(!0), "blur" === v && P(!0), S && S(e)
                        }
                    })))
                }),
                w = (0, s.forwardRef)(function(e, t) {
                    var r, a, y, w = e.src,
                        R = e.sizes,
                        P = e.unoptimized,
                        T = void 0 !== P && P,
                        S = e.priority,
                        x = void 0 !== S && S,
                        C = e.loading,
                        _ = e.className,
                        I = e.quality,
                        k = e.width,
                        O = e.height,
                        F = e.fill,
                        A = e.style,
                        M = e.onLoad,
                        D = e.onLoadingComplete,
                        L = e.placeholder,
                        N = void 0 === L ? "empty" : L,
                        j = e.blurDataURL,
                        z = e.fetchPriority,
                        H = e.layout,
                        V = e.objectFit,
                        Y = e.objectPosition,
                        U = (e.lazyBoundary, e.lazyRoot, o._(e, ["src", "sizes", "unoptimized", "priority", "loading", "className", "quality", "width", "height", "fill", "style", "onLoad", "onLoadingComplete", "placeholder", "blurDataURL", "fetchPriority", "layout", "objectFit", "objectPosition", "lazyBoundary", "lazyRoot"])),
                        B = (0, s.useContext)(p.ImageConfigContext),
                        $ = (0, s.useMemo)(function() {
                            var e = v || B || f.imageConfigDefault,
                                t = l._(e.deviceSizes).concat(l._(e.imageSizes)).sort(function(e, t) {
                                    return e - t
                                }),
                                r = e.deviceSizes.sort(function(e, t) {
                                    return e - t
                                });
                            return i._(n._({}, e), {
                                allSizes: t,
                                deviceSizes: r
                            })
                        }, [B]),
                        W = U,
                        q = W.loader || m.default;
                    delete W.loader;
                    var G = "__next_img_default" in q;
                    if (G) {
                        if ("custom" === $.loader) throw Error('Image with src "' + w + '" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')
                    } else {
                        var Z = q;
                        q = function(e) {
                            return e.config, Z(o._(e, ["config"]))
                        }
                    }
                    if (H) {
                        "fill" === H && (F = !0);
                        var J = {
                            intrinsic: {
                                maxWidth: "100%",
                                height: "auto"
                            },
                            responsive: {
                                width: "100%",
                                height: "auto"
                            }
                        }[H];
                        J && (A = n._({}, A, J));
                        var Q = {
                            responsive: "100vw",
                            fill: "100vw"
                        }[H];
                        Q && !R && (R = Q)
                    }
                    var K = "",
                        X = g(k),
                        ee = g(O);
                    if ("object" == typeof(r = w) && (h(r) || void 0 !== r.src)) {
                        var et = h(w) ? w.default : w;
                        if (!et.src) throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received " + JSON.stringify(et));
                        if (!et.height || !et.width) throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received " + JSON.stringify(et));
                        if (a = et.blurWidth, y = et.blurHeight, j = j || et.blurDataURL, K = et.src, !F) {
                            if (X || ee) {
                                if (X && !ee) {
                                    var er = X / et.width;
                                    ee = Math.round(et.height * er)
                                } else if (!X && ee) {
                                    var en = ee / et.height;
                                    X = Math.round(et.width * en)
                                }
                            } else X = et.width, ee = et.height
                        }
                    }
                    var ei = !x && ("lazy" === C || void 0 === C);
                    (!(w = "string" == typeof w ? w : K) || w.startsWith("data:") || w.startsWith("blob:")) && (T = !0, ei = !1), $.unoptimized && (T = !0), G && w.endsWith(".svg") && !$.dangerouslyAllowSVG && (T = !0), x && (z = "high");
                    var eo = u._((0, s.useState)(!1), 2),
                        eu = eo[0],
                        el = eo[1],
                        ea = u._((0, s.useState)(!1), 2),
                        es = ea[0],
                        ec = ea[1],
                        ed = g(I),
                        ef = Object.assign(F ? {
                            position: "absolute",
                            height: "100%",
                            width: "100%",
                            left: 0,
                            top: 0,
                            right: 0,
                            bottom: 0,
                            objectFit: V,
                            objectPosition: Y
                        } : {}, es ? {} : {
                            color: "transparent"
                        }, A),
                        ep = "blur" === N && j && !eu ? {
                            backgroundSize: ef.objectFit || "cover",
                            backgroundPosition: ef.objectPosition || "50% 50%",
                            backgroundRepeat: "no-repeat",
                            backgroundImage: 'url("data:image/svg+xml;charset=utf-8,' + (0, d.getImageBlurSvg)({
                                widthInt: X,
                                heightInt: ee,
                                blurWidth: a,
                                blurHeight: y,
                                blurDataURL: j,
                                objectFit: ef.objectFit
                            }) + '")'
                        } : {},
                        em = function(e) {
                            var t = e.config,
                                r = e.src,
                                n = e.unoptimized,
                                i = e.width,
                                o = e.quality,
                                u = e.sizes,
                                a = e.loader;
                            if (n) return {
                                src: r,
                                srcSet: void 0,
                                sizes: void 0
                            };
                            var s = function(e, t, r) {
                                    var n = e.deviceSizes,
                                        i = e.allSizes;
                                    if (r) {
                                        for (var o = /(^|\s)(1?\d?\d)vw/g, u = []; a = o.exec(r); a) u.push(parseInt(a[2]));
                                        if (u.length) {
                                            var a, s, c = .01 * (s = Math).min.apply(s, l._(u));
                                            return {
                                                widths: i.filter(function(e) {
                                                    return e >= n[0] * c
                                                }),
                                                kind: "w"
                                            }
                                        }
                                        return {
                                            widths: i,
                                            kind: "w"
                                        }
                                    }
                                    return "number" != typeof t ? {
                                        widths: n,
                                        kind: "w"
                                    } : {
                                        widths: l._(new Set([t, 2 * t].map(function(e) {
                                            return i.find(function(t) {
                                                return t >= e
                                            }) || i[i.length - 1]
                                        }))),
                                        kind: "x"
                                    }
                                }(t, i, u),
                                c = s.widths,
                                d = s.kind,
                                f = c.length - 1;
                            return {
                                sizes: u || "w" !== d ? u : "100vw",
                                srcSet: c.map(function(e, n) {
                                    return a({
                                        config: t,
                                        src: r,
                                        quality: o,
                                        width: e
                                    }) + " " + ("w" === d ? e : n + 1) + d
                                }).join(", "),
                                src: a({
                                    config: t,
                                    src: r,
                                    quality: o,
                                    width: c[f]
                                })
                            }
                        }({
                            config: $,
                            src: w,
                            unoptimized: T,
                            width: X,
                            quality: ed,
                            sizes: R,
                            loader: q
                        }),
                        ev = w,
                        eh = (0, s.useRef)(M);
                    (0, s.useEffect)(function() {
                        eh.current = M
                    }, [M]);
                    var eg = (0, s.useRef)(D);
                    (0, s.useEffect)(function() {
                        eg.current = D
                    }, [D]);
                    var ey = n._({
                        isLazy: ei,
                        imgAttributes: em,
                        heightInt: ee,
                        widthInt: X,
                        qualityInt: ed,
                        className: _,
                        imgStyle: ef,
                        blurStyle: ep,
                        loading: C,
                        config: $,
                        fetchPriority: z,
                        fill: F,
                        unoptimized: T,
                        placeholder: N,
                        loader: q,
                        srcString: ev,
                        onLoadRef: eh,
                        onLoadingCompleteRef: eg,
                        setBlurComplete: el,
                        setShowAltText: ec
                    }, W);
                    return s.default.createElement(s.default.Fragment, null, s.default.createElement(E, i._(n._({}, ey), {
                        ref: t
                    })), x ? s.default.createElement(c.default, null, s.default.createElement("link", n._({
                        key: "__nimg-" + em.src + em.srcSet + em.sizes,
                        rel: "preload",
                        as: "image",
                        href: em.srcSet ? void 0 : em.src,
                        imageSrcSet: em.srcSet,
                        imageSizes: em.sizes,
                        crossOrigin: W.crossOrigin
                    }, b(z)))) : null)
                });
            ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        35113: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = r(39324),
                i = r(71209);
            Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                function(e, t) {
                    for (var r in t) Object.defineProperty(e, r, {
                        enumerable: !0,
                        get: t[r]
                    })
                }(t, {
                    noSSR: function() {
                        return a
                    },
                    default: function() {
                        return s
                    }
                });
            var o = r(64838),
                u = (r(70079), o._(r(12730)));

            function l(e) {
                return {
                    default: (null == e ? void 0 : e.default) || e
                }
            }

            function a(e, t) {
                return delete t.webpack, delete t.modules, e(t)
            }

            function s(e, t) {
                var r = u.default,
                    o = {
                        loading: function(e) {
                            return e.error, e.isLoading, e.pastDelay, null
                        }
                    };
                e instanceof Promise ? o.loader = function() {
                    return e
                } : "function" == typeof e ? o.loader = e : "object" == typeof e && (o = n._({}, o, e));
                var s = (o = n._({}, o, t)).loader;
                return (o.loadableGenerated && (o = n._({}, o, o.loadableGenerated), delete o.loadableGenerated), "boolean" != typeof o.ssr || o.ssr) ? r(i._(n._({}, o), {
                    loader: function() {
                        return null != s ? s().then(l) : Promise.resolve(l(function() {
                            return null
                        }))
                    }
                })) : (delete o.webpack, delete o.modules, a(r, o))
            }("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        19023: function(e, t) {
            "use strict";

            function r(e) {
                var t = e.widthInt,
                    r = e.heightInt,
                    n = e.blurWidth,
                    i = e.blurHeight,
                    o = e.blurDataURL,
                    u = e.objectFit,
                    l = n || t,
                    a = i || r,
                    s = o.startsWith("data:image/jpeg") ? "%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%" : "";
                return l && a ? "%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 " + l + " " + a + "'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='" + (n && i ? "1" : "20") + "'/%3E" + s + "%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='" + o + "'/%3E%3C/svg%3E" : "%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' preserveAspectRatio='" + ("contain" === u ? "xMidYMid" : "cover" === u ? "xMidYMid slice" : "none") + "' x='0' y='0' height='100%25' width='100%25' href='" + o + "'/%3E%3C/svg%3E"
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "getImageBlurSvg", {
                enumerable: !0,
                get: function() {
                    return r
                }
            })
        },
        91226: function(e, t) {
            "use strict";

            function r(e) {
                var t = e.config,
                    r = e.src,
                    n = e.width,
                    i = e.quality;
                return t.path + "?url=" + encodeURIComponent(r) + "&w=" + n + "&q=" + (i || 75)
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "default", {
                enumerable: !0,
                get: function() {
                    return n
                }
            }), r.__next_img_default = !0;
            var n = r
        },
        12659: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "LoadableContext", {
                enumerable: !0,
                get: function() {
                    return n
                }
            });
            var n = r(64838)._(r(70079)).default.createContext(null)
        },
        12730: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = r(51217),
                i = r(31819),
                o = r(39324),
                u = r(71209);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "default", {
                enumerable: !0,
                get: function() {
                    return h
                }
            });
            var l = r(64838)._(r(70079)),
                a = r(12659),
                s = [],
                c = [],
                d = !1;

            function f(e) {
                var t = e(),
                    r = {
                        loading: !0,
                        loaded: null,
                        error: null
                    };
                return r.promise = t.then(function(e) {
                    return r.loading = !1, r.loaded = e, e
                }).catch(function(e) {
                    throw r.loading = !1, r.error = e, e
                }), r
            }
            var p = function() {
                function e(t, r) {
                    n._(this, e), this._loadFn = t, this._opts = r, this._callbacks = new Set, this._delay = null, this._timeout = null, this.retry()
                }
                return i._(e, [{
                    key: "promise",
                    value: function() {
                        return this._res.promise
                    }
                }, {
                    key: "retry",
                    value: function() {
                        var e = this;
                        this._clearTimeouts(), this._res = this._loadFn(this._opts.loader), this._state = {
                            pastDelay: !1,
                            timedOut: !1
                        };
                        var t = this._res,
                            r = this._opts;
                        t.loading && ("number" == typeof r.delay && (0 === r.delay ? this._state.pastDelay = !0 : this._delay = setTimeout(function() {
                            e._update({
                                pastDelay: !0
                            })
                        }, r.delay)), "number" == typeof r.timeout && (this._timeout = setTimeout(function() {
                            e._update({
                                timedOut: !0
                            })
                        }, r.timeout))), this._res.promise.then(function() {
                            e._update({}), e._clearTimeouts()
                        }).catch(function(t) {
                            e._update({}), e._clearTimeouts()
                        }), this._update({})
                    }
                }, {
                    key: "_update",
                    value: function(e) {
                        this._state = o._(u._(o._({}, this._state), {
                            error: this._res.error,
                            loaded: this._res.loaded,
                            loading: this._res.loading
                        }), e), this._callbacks.forEach(function(e) {
                            return e()
                        })
                    }
                }, {
                    key: "_clearTimeouts",
                    value: function() {
                        clearTimeout(this._delay), clearTimeout(this._timeout)
                    }
                }, {
                    key: "getCurrentValue",
                    value: function() {
                        return this._state
                    }
                }, {
                    key: "subscribe",
                    value: function(e) {
                        var t = this;
                        return this._callbacks.add(e),
                            function() {
                                t._callbacks.delete(e)
                            }
                    }
                }]), e
            }();

            function m(e) {
                return function(e, t) {
                    var r = function() {
                            if (!u) {
                                var t = new p(e, o);
                                u = {
                                    getCurrentValue: t.getCurrentValue.bind(t),
                                    subscribe: t.subscribe.bind(t),
                                    retry: t.retry.bind(t),
                                    promise: t.promise.bind(t)
                                }
                            }
                            return u.promise()
                        },
                        n = function() {
                            r();
                            var e = l.default.useContext(a.LoadableContext);
                            e && Array.isArray(o.modules) && o.modules.forEach(function(t) {
                                e(t)
                            })
                        },
                        i = function(e, t) {
                            n();
                            var r = l.default.useSyncExternalStore(u.subscribe, u.getCurrentValue, u.getCurrentValue);
                            return l.default.useImperativeHandle(t, function() {
                                return {
                                    retry: u.retry
                                }
                            }, []), l.default.useMemo(function() {
                                var t;
                                return r.loading || r.error ? l.default.createElement(o.loading, {
                                    isLoading: r.loading,
                                    pastDelay: r.pastDelay,
                                    timedOut: r.timedOut,
                                    error: r.error,
                                    retry: u.retry
                                }) : r.loaded ? l.default.createElement((t = r.loaded) && t.default ? t.default : t, e) : null
                            }, [e, r])
                        },
                        o = Object.assign({
                            loader: null,
                            loading: null,
                            delay: 200,
                            timeout: null,
                            webpack: null,
                            modules: null
                        }, t),
                        u = null;
                    if (!d) {
                        var s = o.webpack ? o.webpack() : o.modules;
                        s && c.push(function(e) {
                            var t = !0,
                                n = !1,
                                i = void 0;
                            try {
                                for (var o, u = s[Symbol.iterator](); !(t = (o = u.next()).done); t = !0) {
                                    var l = o.value;
                                    if (-1 !== e.indexOf(l)) return r()
                                }
                            } catch (e) {
                                n = !0, i = e
                            } finally {
                                try {
                                    t || null == u.return || u.return()
                                } finally {
                                    if (n) throw i
                                }
                            }
                        })
                    }
                    return i.preload = function() {
                        return r()
                    }, i.displayName = "LoadableComponent", l.default.forwardRef(i)
                }(f, e)
            }

            function v(e, t) {
                for (var r = []; e.length;) {
                    var n = e.pop();
                    r.push(n(t))
                }
                return Promise.all(r).then(function() {
                    if (e.length) return v(e, t)
                })
            }
            m.preloadAll = function() {
                return new Promise(function(e, t) {
                    v(s).then(e, t)
                })
            }, m.preloadReady = function(e) {
                return void 0 === e && (e = []), new Promise(function(t) {
                    var r = function() {
                        return d = !0, t()
                    };
                    v(c, e).then(r, r)
                })
            }, window.__NEXT_PRELOADREADY = m.preloadReady;
            var h = m
        },
        55344: function(e, t, r) {
            e.exports = r(35113)
        },
        19579: function(e, t, r) {
            e.exports = r(60076)
        },
        20525: function(e, t, r) {
            "use strict";
            r.d(t, {
                V: function() {
                    return eu
                }
            });
            var n, i, o, u, l, a = r(70079),
                s = r(78983),
                c = r(4911),
                d = r(14699),
                f = r(86499),
                p = r(28595),
                m = r(58194),
                v = r(28203),
                h = r(98992),
                g = r(29787),
                y = r(58389),
                b = r(81303),
                E = ((n = E || {})[n.Forwards = 0] = "Forwards", n[n.Backwards = 1] = "Backwards", n),
                w = r(26577),
                R = r(46789);

            function P(e, t, r, n) {
                let i = (0, b.E)(r);
                (0, a.useEffect)(() => {
                    function r(e) {
                        i.current(e)
                    }
                    return (e = null != e ? e : window).addEventListener(t, r, n), () => e.removeEventListener(t, r, n)
                }, [e, t, n])
            }
            var T = r(84575);

            function S(e, t) {
                let r = (0, a.useRef)([]),
                    n = (0, y.z)(e);
                (0, a.useEffect)(() => {
                    let e = [...r.current];
                    for (let [i, o] of t.entries())
                        if (r.current[i] !== o) {
                            let i = n(t, e);
                            return r.current = t, i
                        }
                }, [n, ...t])
            }
            var x = ((i = x || {})[i.None = 1] = "None", i[i.InitialFocus = 2] = "InitialFocus", i[i.TabLock = 4] = "TabLock", i[i.FocusLock = 8] = "FocusLock", i[i.RestoreFocus = 16] = "RestoreFocus", i[i.All = 30] = "All", i);
            let C = Object.assign((0, c.yV)(function(e, t) {
                var r, n;
                let i, o, u = (0, a.useRef)(null),
                    l = (0, d.T)(u, t),
                    {
                        initialFocus: f,
                        containers: p,
                        features: m = 30,
                        ...x
                    } = e;
                (0, v.H)() || (m = 1);
                let C = (0, R.i)(u);
                ! function({
                    ownerDocument: e
                }, t) {
                    let r = (0, a.useRef)(null);
                    P(null == e ? void 0 : e.defaultView, "focusout", e => {
                        !t || r.current || (r.current = e.target)
                    }, !0), S(() => {
                        t || ((null == e ? void 0 : e.activeElement) === (null == e ? void 0 : e.body) && (0, g.C5)(r.current), r.current = null)
                    }, [t]);
                    let n = (0, a.useRef)(!1);
                    (0, a.useEffect)(() => (n.current = !1, () => {
                        n.current = !0, (0, T.Y)(() => {
                            n.current && ((0, g.C5)(r.current), r.current = null)
                        })
                    }), [])
                }({
                    ownerDocument: C
                }, !!(16 & m));
                let _ = function({
                    ownerDocument: e,
                    container: t,
                    initialFocus: r
                }, n) {
                    let i = (0, a.useRef)(null),
                        o = (0, w.t)();
                    return S(() => {
                        if (!n) return;
                        let u = t.current;
                        u && (0, T.Y)(() => {
                            if (!o.current) return;
                            let t = null == e ? void 0 : e.activeElement;
                            if (null != r && r.current) {
                                if ((null == r ? void 0 : r.current) === t) {
                                    i.current = t;
                                    return
                                }
                            } else if (u.contains(t)) {
                                i.current = t;
                                return
                            }
                            null != r && r.current ? (0, g.C5)(r.current) : (0, g.jA)(u, g.TO.First) === g.fE.Error && console.warn("There are no focusable elements inside the <FocusTrap />"), i.current = null == e ? void 0 : e.activeElement
                        })
                    }, [n]), i
                }({
                    ownerDocument: C,
                    container: u,
                    initialFocus: f
                }, !!(2 & m));
                ! function({
                    ownerDocument: e,
                    container: t,
                    containers: r,
                    previousActiveElement: n
                }, i) {
                    let o = (0, w.t)();
                    P(null == e ? void 0 : e.defaultView, "focus", e => {
                        if (!i || !o.current) return;
                        let u = new Set(null == r ? void 0 : r.current);
                        u.add(t);
                        let l = n.current;
                        if (!l) return;
                        let a = e.target;
                        a && a instanceof HTMLElement ? function(e, t) {
                            var r;
                            for (let n of e)
                                if (null != (r = n.current) && r.contains(t)) return !0;
                            return !1
                        }(u, a) ? (n.current = a, (0, g.C5)(a)) : (e.preventDefault(), e.stopPropagation(), (0, g.C5)(l)) : (0, g.C5)(n.current)
                    }, !0)
                }({
                    ownerDocument: C,
                    container: u,
                    containers: p,
                    previousActiveElement: _
                }, !!(8 & m));
                let I = (i = (0, a.useRef)(0), r = "keydown", n = e => {
                        "Tab" === e.key && (i.current = e.shiftKey ? 1 : 0)
                    }, o = (0, b.E)(n), (0, a.useEffect)(() => {
                        function e(e) {
                            o.current(e)
                        }
                        return window.addEventListener(r, e, !0), () => window.removeEventListener(r, e, !0)
                    }, [r, !0]), i),
                    k = (0, y.z)(() => {
                        let e = u.current;
                        e && (0, s.E)(I.current, {
                            [E.Forwards]: () => (0, g.jA)(e, g.TO.First),
                            [E.Backwards]: () => (0, g.jA)(e, g.TO.Last)
                        })
                    });
                return a.createElement(a.Fragment, null, !!(4 & m) && a.createElement(h._, {
                    as: "button",
                    type: "button",
                    onFocus: k,
                    features: h.A.Focusable
                }), (0, c.sY)({
                    ourProps: {
                        ref: l
                    },
                    theirProps: x,
                    defaultTag: "div",
                    name: "FocusTrap"
                }), !!(4 & m) && a.createElement(h._, {
                    as: "button",
                    type: "button",
                    onFocus: k,
                    features: h.A.Focusable
                }))
            }), {
                features: x
            });
            var _ = r(52327),
                I = r(98044);
            let k = new Set,
                O = new Map;

            function F(e) {
                e.setAttribute("aria-hidden", "true"), e.inert = !0
            }

            function A(e) {
                let t = O.get(e);
                t && (null === t["aria-hidden"] ? e.removeAttribute("aria-hidden") : e.setAttribute("aria-hidden", t["aria-hidden"]), e.inert = t.inert)
            }
            var M = r(99581);
            let D = (0, a.createContext)(!1);

            function L(e) {
                return a.createElement(D.Provider, {
                    value: e.force
                }, e.children)
            }
            var N = r(34926);
            let j = a.Fragment,
                z = (0, c.yV)(function(e, t) {
                    let r = (0, a.useRef)(null),
                        n = (0, d.T)((0, d.h)(e => {
                            r.current = e
                        }), t),
                        i = (0, R.i)(r),
                        o = function(e) {
                            let t = (0, a.useContext)(D),
                                r = (0, a.useContext)(V),
                                n = (0, R.i)(e),
                                [i, o] = (0, a.useState)(() => {
                                    if (!t && null !== r || N.s) return null;
                                    let e = null == n ? void 0 : n.getElementById("headlessui-portal-root");
                                    if (e) return e;
                                    if (null === n) return null;
                                    let i = n.createElement("div");
                                    return i.setAttribute("id", "headlessui-portal-root"), n.body.appendChild(i)
                                });
                            return (0, a.useEffect)(() => {
                                null !== i && (null != n && n.body.contains(i) || null == n || n.body.appendChild(i))
                            }, [i, n]), (0, a.useEffect)(() => {
                                t || null !== r && o(r.current)
                            }, [r, o, t]), i
                        }(r),
                        [u] = (0, a.useState)(() => {
                            var e;
                            return N.s ? null : null != (e = null == i ? void 0 : i.createElement("div")) ? e : null
                        }),
                        l = (0, v.H)(),
                        s = (0, a.useRef)(!1);
                    return (0, I.e)(() => {
                        if (s.current = !1, !(!o || !u)) return o.contains(u) || (u.setAttribute("data-headlessui-portal", ""), o.appendChild(u)), () => {
                            s.current = !0, (0, T.Y)(() => {
                                var e;
                                s.current && o && u && (o.removeChild(u), o.childNodes.length <= 0 && (null == (e = o.parentElement) || e.removeChild(o)))
                            })
                        }
                    }, [o, u]), l && o && u ? (0, M.createPortal)((0, c.sY)({
                        ourProps: {
                            ref: n
                        },
                        theirProps: e,
                        defaultTag: j,
                        name: "Portal"
                    }), u) : null
                }),
                H = a.Fragment,
                V = (0, a.createContext)(null),
                Y = Object.assign(z, {
                    Group: (0, c.yV)(function(e, t) {
                        let {
                            target: r,
                            ...n
                        } = e, i = {
                            ref: (0, d.T)(t)
                        };
                        return a.createElement(V.Provider, {
                            value: r
                        }, (0, c.sY)({
                            ourProps: i,
                            theirProps: n,
                            defaultTag: H,
                            name: "Popover.Group"
                        }))
                    })
                }),
                U = (0, a.createContext)(null),
                B = (0, c.yV)(function(e, t) {
                    let r = function e() {
                            let t = (0, a.useContext)(U);
                            if (null === t) {
                                let t = Error("You used a <Description /> component, but it is not inside a relevant parent.");
                                throw Error.captureStackTrace && Error.captureStackTrace(t, e), t
                            }
                            return t
                        }(),
                        n = `headlessui-description-${(0,m.M)()}`,
                        i = (0, d.T)(t);
                    (0, I.e)(() => r.register(n), [n, r.register]);
                    let o = {
                        ref: i,
                        ...r.props,
                        id: n
                    };
                    return (0, c.sY)({
                        ourProps: o,
                        theirProps: e,
                        slot: r.slot || {},
                        defaultTag: "p",
                        name: r.name || "Description"
                    })
                });
            var $ = r(37068);
            let W = (0, a.createContext)(() => {});
            W.displayName = "StackContext";
            var q = ((o = q || {})[o.Add = 0] = "Add", o[o.Remove = 1] = "Remove", o);

            function G({
                children: e,
                onUpdate: t,
                type: r,
                element: n,
                enabled: i
            }) {
                let o = (0, a.useContext)(W),
                    u = (0, y.z)((...e) => {
                        null == t || t(...e), o(...e)
                    });
                return (0, I.e)(() => {
                    let e = void 0 === i || !0 === i;
                    return e && u(0, r, n), () => {
                        e && u(1, r, n)
                    }
                }, [u, r, n, i]), a.createElement(W.Provider, {
                    value: u
                }, e)
            }
            var Z = r(53315),
                J = r(32552),
                Q = ((u = Q || {})[u.Open = 0] = "Open", u[u.Closed = 1] = "Closed", u),
                K = ((l = K || {})[l.SetTitleId = 0] = "SetTitleId", l);
            let X = {
                    0: (e, t) => e.titleId === t.id ? e : { ...e,
                        titleId: t.id
                    }
                },
                ee = (0, a.createContext)(null);

            function et(e) {
                let t = (0, a.useContext)(ee);
                if (null === t) {
                    let t = Error(`<${e} /> is missing a parent <Dialog /> component.`);
                    throw Error.captureStackTrace && Error.captureStackTrace(t, et), t
                }
                return t
            }

            function er(e, t) {
                return (0, s.E)(t.type, X, e, t)
            }
            ee.displayName = "DialogContext";
            let en = c.AN.RenderStrategy | c.AN.Static,
                ei = (0, c.yV)(function(e, t) {
                    var r;
                    let {
                        open: n,
                        onClose: i,
                        initialFocus: o,
                        __demoMode: u = !1,
                        ...l
                    } = e, [p, g] = (0, a.useState)(0), b = (0, $.oJ)();
                    void 0 === n && null !== b && (n = (0, s.E)(b, {
                        [$.ZM.Open]: !0,
                        [$.ZM.Closed]: !1
                    }));
                    let E = (0, a.useRef)(new Set),
                        w = (0, a.useRef)(null),
                        T = (0, d.T)(w, t),
                        S = (0, a.useRef)(null),
                        x = (0, R.i)(w),
                        M = e.hasOwnProperty("open") || null !== b,
                        D = e.hasOwnProperty("onClose");
                    if (!M && !D) throw Error("You have to provide an `open` and an `onClose` prop to the `Dialog` component.");
                    if (!M) throw Error("You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.");
                    if (!D) throw Error("You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.");
                    if ("boolean" != typeof n) throw Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${n}`);
                    if ("function" != typeof i) throw Error(`You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${i}`);
                    let N = n ? 0 : 1,
                        [j, z] = (0, a.useReducer)(er, {
                            titleId: null,
                            descriptionId: null,
                            panelRef: (0, a.createRef)()
                        }),
                        H = (0, y.z)(() => i(!1)),
                        V = (0, y.z)(e => z({
                            type: 0,
                            id: e
                        })),
                        B = !!(0, v.H)() && !u && 0 === N,
                        W = p > 1,
                        Q = null !== (0, a.useContext)(ee);
                    (function(e, t = !0) {
                        (0, I.e)(() => {
                            if (!t || !e.current) return;
                            let r = e.current,
                                n = (0, _.r)(r);
                            if (n) {
                                for (let e of (k.add(r), O.keys())) e.contains(r) && (A(e), O.delete(e));
                                return n.querySelectorAll("body > *").forEach(e => {
                                    if (e instanceof HTMLElement) {
                                        for (let t of k)
                                            if (e.contains(t)) return;
                                        1 === k.size && (O.set(e, {
                                            "aria-hidden": e.getAttribute("aria-hidden"),
                                            inert: e.inert
                                        }), F(e))
                                    }
                                }), () => {
                                    if (k.delete(r), k.size > 0) n.querySelectorAll("body > *").forEach(e => {
                                        if (e instanceof HTMLElement && !O.has(e)) {
                                            for (let t of k)
                                                if (e.contains(t)) return;
                                            O.set(e, {
                                                "aria-hidden": e.getAttribute("aria-hidden"),
                                                inert: e.inert
                                            }), F(e)
                                        }
                                    });
                                    else
                                        for (let e of O.keys()) A(e), O.delete(e)
                                }
                            }
                        }, [t])
                    })(w, !!W && B), (0, Z.O)(() => {
                        var e, t;
                        return [...Array.from(null != (e = null == x ? void 0 : x.querySelectorAll("body > *, [data-headlessui-portal]")) ? e : []).filter(e => !(!(e instanceof HTMLElement) || e.contains(S.current) || j.panelRef.current && e.contains(j.panelRef.current))), null != (t = j.panelRef.current) ? t : w.current]
                    }, H, B && !W), P(null == x ? void 0 : x.defaultView, "keydown", e => {
                        e.defaultPrevented || e.key === f.R.Escape && 0 === N && (W || (e.preventDefault(), e.stopPropagation(), H()))
                    }), r = 0 === N && !Q, (0, a.useEffect)(() => {
                        var e;
                        if (!r || !x) return;
                        let t = (0, J.k)();

                        function n(e, r, n) {
                            let i = e.style.getPropertyValue(r);
                            return Object.assign(e.style, {
                                [r]: n
                            }), t.add(() => {
                                Object.assign(e.style, {
                                    [r]: i
                                })
                            })
                        }
                        let i = x.documentElement,
                            o = (null != (e = x.defaultView) ? e : window).innerWidth - i.clientWidth;
                        if (n(i, "overflow", "hidden"), o > 0) {
                            let e = i.clientWidth - i.offsetWidth;
                            n(i, "paddingRight", `${o-e}px`)
                        }
                        if (/iPhone/gi.test(window.navigator.platform) || /Mac/gi.test(window.navigator.platform) && window.navigator.maxTouchPoints > 0) {
                            let e = window.pageYOffset;
                            n(i, "position", "fixed"), n(i, "marginTop", `-${e}px`), n(i, "width", "100%"), t.add(() => window.scrollTo(0, e))
                        }
                        return t.dispose
                    }, [x, r]), (0, a.useEffect)(() => {
                        if (0 !== N || !w.current) return;
                        let e = new IntersectionObserver(e => {
                            for (let t of e) 0 === t.boundingClientRect.x && 0 === t.boundingClientRect.y && 0 === t.boundingClientRect.width && 0 === t.boundingClientRect.height && H()
                        });
                        return e.observe(w.current), () => e.disconnect()
                    }, [N, w, H]);
                    let [K, X] = function() {
                        let [e, t] = (0, a.useState)([]);
                        return [e.length > 0 ? e.join(" ") : void 0, (0, a.useMemo)(() => function(e) {
                            let r = (0, y.z)(e => (t(t => [...t, e]), () => t(t => {
                                    let r = t.slice(),
                                        n = r.indexOf(e);
                                    return -1 !== n && r.splice(n, 1), r
                                }))),
                                n = (0, a.useMemo)(() => ({
                                    register: r,
                                    slot: e.slot,
                                    name: e.name,
                                    props: e.props
                                }), [r, e.slot, e.name, e.props]);
                            return a.createElement(U.Provider, {
                                value: n
                            }, e.children)
                        }, [t])]
                    }(), et = `headlessui-dialog-${(0,m.M)()}`, ei = (0, a.useMemo)(() => [{
                        dialogState: N,
                        close: H,
                        setTitleId: V
                    }, j], [N, j, H, V]), eo = (0, a.useMemo)(() => ({
                        open: 0 === N
                    }), [N]), eu = {
                        ref: T,
                        id: et,
                        role: "dialog",
                        "aria-modal": 0 === N || void 0,
                        "aria-labelledby": j.titleId,
                        "aria-describedby": K
                    };
                    return a.createElement(G, {
                        type: "Dialog",
                        enabled: 0 === N,
                        element: w,
                        onUpdate: (0, y.z)((e, t, r) => {
                            "Dialog" === t && (0, s.E)(e, {
                                [q.Add]() {
                                    E.current.add(r), g(e => e + 1)
                                },
                                [q.Remove]() {
                                    E.current.add(r), g(e => e - 1)
                                }
                            })
                        })
                    }, a.createElement(L, {
                        force: !0
                    }, a.createElement(Y, null, a.createElement(ee.Provider, {
                        value: ei
                    }, a.createElement(Y.Group, {
                        target: w
                    }, a.createElement(L, {
                        force: !1
                    }, a.createElement(X, {
                        slot: eo,
                        name: "Dialog.Description"
                    }, a.createElement(C, {
                        initialFocus: o,
                        containers: E,
                        features: B ? (0, s.E)(W ? "parent" : "leaf", {
                            parent: C.features.RestoreFocus,
                            leaf: C.features.All & ~C.features.FocusLock
                        }) : C.features.None
                    }, (0, c.sY)({
                        ourProps: eu,
                        theirProps: l,
                        slot: eo,
                        defaultTag: "div",
                        features: en,
                        visible: 0 === N,
                        name: "Dialog"
                    })))))))), a.createElement(h._, {
                        features: h.A.Hidden,
                        ref: S
                    }))
                }),
                eo = (0, c.yV)(function(e, t) {
                    let [{
                        dialogState: r,
                        close: n
                    }] = et("Dialog.Overlay"), i = (0, d.T)(t), o = `headlessui-dialog-overlay-${(0,m.M)()}`, u = (0, y.z)(e => {
                        if (e.target === e.currentTarget) {
                            if ((0, p.P)(e.currentTarget)) return e.preventDefault();
                            e.preventDefault(), e.stopPropagation(), n()
                        }
                    }), l = (0, a.useMemo)(() => ({
                        open: 0 === r
                    }), [r]);
                    return (0, c.sY)({
                        ourProps: {
                            ref: i,
                            id: o,
                            "aria-hidden": !0,
                            onClick: u
                        },
                        theirProps: e,
                        slot: l,
                        defaultTag: "div",
                        name: "Dialog.Overlay"
                    })
                }),
                eu = Object.assign(ei, {
                    Backdrop: (0, c.yV)(function(e, t) {
                        let [{
                            dialogState: r
                        }, n] = et("Dialog.Backdrop"), i = (0, d.T)(t), o = `headlessui-dialog-backdrop-${(0,m.M)()}`;
                        (0, a.useEffect)(() => {
                            if (null === n.panelRef.current) throw Error("A <Dialog.Backdrop /> component is being used, but a <Dialog.Panel /> component is missing.")
                        }, [n.panelRef]);
                        let u = (0, a.useMemo)(() => ({
                            open: 0 === r
                        }), [r]);
                        return a.createElement(L, {
                            force: !0
                        }, a.createElement(Y, null, (0, c.sY)({
                            ourProps: {
                                ref: i,
                                id: o,
                                "aria-hidden": !0
                            },
                            theirProps: e,
                            slot: u,
                            defaultTag: "div",
                            name: "Dialog.Backdrop"
                        })))
                    }),
                    Panel: (0, c.yV)(function(e, t) {
                        let [{
                            dialogState: r
                        }, n] = et("Dialog.Panel"), i = (0, d.T)(t, n.panelRef), o = `headlessui-dialog-panel-${(0,m.M)()}`, u = (0, a.useMemo)(() => ({
                            open: 0 === r
                        }), [r]), l = (0, y.z)(e => {
                            e.stopPropagation()
                        });
                        return (0, c.sY)({
                            ourProps: {
                                ref: i,
                                id: o,
                                onClick: l
                            },
                            theirProps: e,
                            slot: u,
                            defaultTag: "div",
                            name: "Dialog.Panel"
                        })
                    }),
                    Overlay: eo,
                    Title: (0, c.yV)(function(e, t) {
                        let [{
                            dialogState: r,
                            setTitleId: n
                        }] = et("Dialog.Title"), i = `headlessui-dialog-title-${(0,m.M)()}`, o = (0, d.T)(t);
                        (0, a.useEffect)(() => (n(i), () => n(null)), [i, n]);
                        let u = (0, a.useMemo)(() => ({
                            open: 0 === r
                        }), [r]);
                        return (0, c.sY)({
                            ourProps: {
                                ref: o,
                                id: i
                            },
                            theirProps: e,
                            slot: u,
                            defaultTag: "h2",
                            name: "Dialog.Title"
                        })
                    }),
                    Description: B
                })
        },
        86499: function(e, t, r) {
            "use strict";
            r.d(t, {
                R: function() {
                    return i
                }
            });
            var n, i = ((n = i || {}).Space = " ", n.Enter = "Enter", n.Escape = "Escape", n.Backspace = "Backspace", n.Delete = "Delete", n.ArrowLeft = "ArrowLeft", n.ArrowUp = "ArrowUp", n.ArrowRight = "ArrowRight", n.ArrowDown = "ArrowDown", n.Home = "Home", n.End = "End", n.PageUp = "PageUp", n.PageDown = "PageDown", n.Tab = "Tab", n)
        },
        7813: function(e, t, r) {
            "use strict";
            r.d(t, {
                v: function() {
                    return j
                }
            });
            var n, i, o, u = r(70079),
                l = r(78983),
                a = r(4911),
                s = r(32552),
                c = r(61296),
                d = r(98044),
                f = r(14699),
                p = r(58194),
                m = r(86499),
                v = r(10186),
                h = r(28595),
                g = r(29787),
                y = r(53315),
                b = r(52327),
                E = r(37068),
                w = r(19992),
                R = r(46789),
                P = r(58389),
                T = ((n = T || {})[n.Open = 0] = "Open", n[n.Closed = 1] = "Closed", n),
                S = ((i = S || {})[i.Pointer = 0] = "Pointer", i[i.Other = 1] = "Other", i),
                x = ((o = x || {})[o.OpenMenu = 0] = "OpenMenu", o[o.CloseMenu = 1] = "CloseMenu", o[o.GoToItem = 2] = "GoToItem", o[o.Search = 3] = "Search", o[o.ClearSearch = 4] = "ClearSearch", o[o.RegisterItem = 5] = "RegisterItem", o[o.UnregisterItem = 6] = "UnregisterItem", o);

            function C(e, t = e => e) {
                let r = null !== e.activeItemIndex ? e.items[e.activeItemIndex] : null,
                    n = (0, g.z2)(t(e.items.slice()), e => e.dataRef.current.domRef.current),
                    i = r ? n.indexOf(r) : null;
                return -1 === i && (i = null), {
                    items: n,
                    activeItemIndex: i
                }
            }
            let _ = {
                    1: e => 1 === e.menuState ? e : { ...e,
                        activeItemIndex: null,
                        menuState: 1
                    },
                    0: e => 0 === e.menuState ? e : { ...e,
                        menuState: 0
                    },
                    2: (e, t) => {
                        var r;
                        let n = C(e),
                            i = (0, v.d)(t, {
                                resolveItems: () => n.items,
                                resolveActiveIndex: () => n.activeItemIndex,
                                resolveId: e => e.id,
                                resolveDisabled: e => e.dataRef.current.disabled
                            });
                        return { ...e,
                            ...n,
                            searchQuery: "",
                            activeItemIndex: i,
                            activationTrigger: null != (r = t.trigger) ? r : 1
                        }
                    },
                    3: (e, t) => {
                        let r = "" !== e.searchQuery ? 0 : 1,
                            n = e.searchQuery + t.value.toLowerCase(),
                            i = (null !== e.activeItemIndex ? e.items.slice(e.activeItemIndex + r).concat(e.items.slice(0, e.activeItemIndex + r)) : e.items).find(e => {
                                var t;
                                return (null == (t = e.dataRef.current.textValue) ? void 0 : t.startsWith(n)) && !e.dataRef.current.disabled
                            }),
                            o = i ? e.items.indexOf(i) : -1;
                        return -1 === o || o === e.activeItemIndex ? { ...e,
                            searchQuery: n
                        } : { ...e,
                            searchQuery: n,
                            activeItemIndex: o,
                            activationTrigger: 1
                        }
                    },
                    4: e => "" === e.searchQuery ? e : { ...e,
                        searchQuery: "",
                        searchActiveItemIndex: null
                    },
                    5: (e, t) => {
                        let r = C(e, e => [...e, {
                            id: t.id,
                            dataRef: t.dataRef
                        }]);
                        return { ...e,
                            ...r
                        }
                    },
                    6: (e, t) => {
                        let r = C(e, e => {
                            let r = e.findIndex(e => e.id === t.id);
                            return -1 !== r && e.splice(r, 1), e
                        });
                        return { ...e,
                            ...r,
                            activationTrigger: 1
                        }
                    }
                },
                I = (0, u.createContext)(null);

            function k(e) {
                let t = (0, u.useContext)(I);
                if (null === t) {
                    let t = Error(`<${e} /> is missing a parent <Menu /> component.`);
                    throw Error.captureStackTrace && Error.captureStackTrace(t, k), t
                }
                return t
            }

            function O(e, t) {
                return (0, l.E)(t.type, _, e, t)
            }
            I.displayName = "MenuContext";
            let F = u.Fragment,
                A = (0, a.yV)(function(e, t) {
                    let r = (0, u.useReducer)(O, {
                            menuState: 1,
                            buttonRef: (0, u.createRef)(),
                            itemsRef: (0, u.createRef)(),
                            items: [],
                            searchQuery: "",
                            activeItemIndex: null,
                            activationTrigger: 1
                        }),
                        [{
                            menuState: n,
                            itemsRef: i,
                            buttonRef: o
                        }, s] = r,
                        c = (0, f.T)(t);
                    (0, y.O)([o, i], (e, t) => {
                        var r;
                        s({
                            type: 1
                        }), (0, g.sP)(t, g.tJ.Loose) || (e.preventDefault(), null == (r = o.current) || r.focus())
                    }, 0 === n);
                    let d = (0, u.useMemo)(() => ({
                        open: 0 === n
                    }), [n]);
                    return u.createElement(I.Provider, {
                        value: r
                    }, u.createElement(E.up, {
                        value: (0, l.E)(n, {
                            0: E.ZM.Open,
                            1: E.ZM.Closed
                        })
                    }, (0, a.sY)({
                        ourProps: {
                            ref: c
                        },
                        theirProps: e,
                        slot: d,
                        defaultTag: F,
                        name: "Menu"
                    })))
                }),
                M = (0, a.yV)(function(e, t) {
                    var r;
                    let [n, i] = k("Menu.Button"), o = (0, f.T)(n.buttonRef, t), l = `headlessui-menu-button-${(0,p.M)()}`, s = (0, c.G)(), d = (0, P.z)(e => {
                        switch (e.key) {
                            case m.R.Space:
                            case m.R.Enter:
                            case m.R.ArrowDown:
                                e.preventDefault(), e.stopPropagation(), i({
                                    type: 0
                                }), s.nextFrame(() => i({
                                    type: 2,
                                    focus: v.T.First
                                }));
                                break;
                            case m.R.ArrowUp:
                                e.preventDefault(), e.stopPropagation(), i({
                                    type: 0
                                }), s.nextFrame(() => i({
                                    type: 2,
                                    focus: v.T.Last
                                }))
                        }
                    }), g = (0, P.z)(e => {
                        e.key === m.R.Space && e.preventDefault()
                    }), y = (0, P.z)(t => {
                        if ((0, h.P)(t.currentTarget)) return t.preventDefault();
                        e.disabled || (0 === n.menuState ? (i({
                            type: 1
                        }), s.nextFrame(() => {
                            var e;
                            return null == (e = n.buttonRef.current) ? void 0 : e.focus({
                                preventScroll: !0
                            })
                        })) : (t.preventDefault(), i({
                            type: 0
                        })))
                    }), b = (0, u.useMemo)(() => ({
                        open: 0 === n.menuState
                    }), [n]), E = {
                        ref: o,
                        id: l,
                        type: (0, w.f)(e, n.buttonRef),
                        "aria-haspopup": !0,
                        "aria-controls": null == (r = n.itemsRef.current) ? void 0 : r.id,
                        "aria-expanded": e.disabled ? void 0 : 0 === n.menuState,
                        onKeyDown: d,
                        onKeyUp: g,
                        onClick: y
                    };
                    return (0, a.sY)({
                        ourProps: E,
                        theirProps: e,
                        slot: b,
                        defaultTag: "button",
                        name: "Menu.Button"
                    })
                }),
                D = a.AN.RenderStrategy | a.AN.Static,
                L = (0, a.yV)(function(e, t) {
                    var r, n;
                    let [i, o] = k("Menu.Items"), l = (0, f.T)(i.itemsRef, t), h = (0, R.i)(i.itemsRef), y = `headlessui-menu-items-${(0,p.M)()}`, w = (0, c.G)(), T = (0, E.oJ)(), S = null !== T ? T === E.ZM.Open : 0 === i.menuState;
                    (0, u.useEffect)(() => {
                        let e = i.itemsRef.current;
                        e && 0 === i.menuState && e !== (null == h ? void 0 : h.activeElement) && e.focus({
                            preventScroll: !0
                        })
                    }, [i.menuState, i.itemsRef, h]),
                    function({
                        container: e,
                        accept: t,
                        walk: r,
                        enabled: n = !0
                    }) {
                        let i = (0, u.useRef)(t),
                            o = (0, u.useRef)(r);
                        (0, u.useEffect)(() => {
                            i.current = t, o.current = r
                        }, [t, r]), (0, d.e)(() => {
                            if (!e || !n) return;
                            let t = (0, b.r)(e);
                            if (!t) return;
                            let r = i.current,
                                u = o.current,
                                l = Object.assign(e => r(e), {
                                    acceptNode: r
                                }),
                                a = t.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, l, !1);
                            for (; a.nextNode();) u(a.currentNode)
                        }, [e, n, i, o])
                    }({
                        container: i.itemsRef.current,
                        enabled: 0 === i.menuState,
                        accept: e => "menuitem" === e.getAttribute("role") ? NodeFilter.FILTER_REJECT : e.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT,
                        walk(e) {
                            e.setAttribute("role", "none")
                        }
                    });
                    let x = (0, P.z)(e => {
                            var t, r;
                            switch (w.dispose(), e.key) {
                                case m.R.Space:
                                    if ("" !== i.searchQuery) return e.preventDefault(), e.stopPropagation(), o({
                                        type: 3,
                                        value: e.key
                                    });
                                case m.R.Enter:
                                    if (e.preventDefault(), e.stopPropagation(), o({
                                            type: 1
                                        }), null !== i.activeItemIndex) {
                                        let {
                                            dataRef: e
                                        } = i.items[i.activeItemIndex];
                                        null == (r = null == (t = e.current) ? void 0 : t.domRef.current) || r.click()
                                    }(0, g.wI)(i.buttonRef.current);
                                    break;
                                case m.R.ArrowDown:
                                    return e.preventDefault(), e.stopPropagation(), o({
                                        type: 2,
                                        focus: v.T.Next
                                    });
                                case m.R.ArrowUp:
                                    return e.preventDefault(), e.stopPropagation(), o({
                                        type: 2,
                                        focus: v.T.Previous
                                    });
                                case m.R.Home:
                                case m.R.PageUp:
                                    return e.preventDefault(), e.stopPropagation(), o({
                                        type: 2,
                                        focus: v.T.First
                                    });
                                case m.R.End:
                                case m.R.PageDown:
                                    return e.preventDefault(), e.stopPropagation(), o({
                                        type: 2,
                                        focus: v.T.Last
                                    });
                                case m.R.Escape:
                                    e.preventDefault(), e.stopPropagation(), o({
                                        type: 1
                                    }), (0, s.k)().nextFrame(() => {
                                        var e;
                                        return null == (e = i.buttonRef.current) ? void 0 : e.focus({
                                            preventScroll: !0
                                        })
                                    });
                                    break;
                                case m.R.Tab:
                                    e.preventDefault(), e.stopPropagation(), o({
                                        type: 1
                                    }), (0, s.k)().nextFrame(() => {
                                        (0, g.EO)(i.buttonRef.current, e.shiftKey ? g.TO.Previous : g.TO.Next)
                                    });
                                    break;
                                default:
                                    1 === e.key.length && (o({
                                        type: 3,
                                        value: e.key
                                    }), w.setTimeout(() => o({
                                        type: 4
                                    }), 350))
                            }
                        }),
                        C = (0, P.z)(e => {
                            e.key === m.R.Space && e.preventDefault()
                        }),
                        _ = (0, u.useMemo)(() => ({
                            open: 0 === i.menuState
                        }), [i]),
                        I = {
                            "aria-activedescendant": null === i.activeItemIndex || null == (r = i.items[i.activeItemIndex]) ? void 0 : r.id,
                            "aria-labelledby": null == (n = i.buttonRef.current) ? void 0 : n.id,
                            id: y,
                            onKeyDown: x,
                            onKeyUp: C,
                            role: "menu",
                            tabIndex: 0,
                            ref: l
                        };
                    return (0, a.sY)({
                        ourProps: I,
                        theirProps: e,
                        slot: _,
                        defaultTag: "div",
                        features: D,
                        visible: S,
                        name: "Menu.Items"
                    })
                }),
                N = u.Fragment,
                j = Object.assign(A, {
                    Button: M,
                    Items: L,
                    Item: (0, a.yV)(function(e, t) {
                        let {
                            disabled: r = !1,
                            ...n
                        } = e, [i, o] = k("Menu.Item"), l = `headlessui-menu-item-${(0,p.M)()}`, c = null !== i.activeItemIndex && i.items[i.activeItemIndex].id === l, m = (0, u.useRef)(null), h = (0, f.T)(t, m);
                        (0, d.e)(() => {
                            if (0 !== i.menuState || !c || 0 === i.activationTrigger) return;
                            let e = (0, s.k)();
                            return e.requestAnimationFrame(() => {
                                var e, t;
                                null == (t = null == (e = m.current) ? void 0 : e.scrollIntoView) || t.call(e, {
                                    block: "nearest"
                                })
                            }), e.dispose
                        }, [m, c, i.menuState, i.activationTrigger, i.activeItemIndex]);
                        let y = (0, u.useRef)({
                            disabled: r,
                            domRef: m
                        });
                        (0, d.e)(() => {
                            y.current.disabled = r
                        }, [y, r]), (0, d.e)(() => {
                            var e, t;
                            y.current.textValue = null == (t = null == (e = m.current) ? void 0 : e.textContent) ? void 0 : t.toLowerCase()
                        }, [y, m]), (0, d.e)(() => (o({
                            type: 5,
                            id: l,
                            dataRef: y
                        }), () => o({
                            type: 6,
                            id: l
                        })), [y, l]);
                        let b = (0, P.z)(e => {
                                if (r) return e.preventDefault();
                                o({
                                    type: 1
                                }), (0, g.wI)(i.buttonRef.current)
                            }),
                            E = (0, P.z)(() => {
                                if (r) return o({
                                    type: 2,
                                    focus: v.T.Nothing
                                });
                                o({
                                    type: 2,
                                    focus: v.T.Specific,
                                    id: l
                                })
                            }),
                            w = (0, P.z)(() => {
                                r || c || o({
                                    type: 2,
                                    focus: v.T.Specific,
                                    id: l,
                                    trigger: 0
                                })
                            }),
                            R = (0, P.z)(() => {
                                r || !c || o({
                                    type: 2,
                                    focus: v.T.Nothing
                                })
                            }),
                            T = (0, u.useMemo)(() => ({
                                active: c,
                                disabled: r
                            }), [c, r]);
                        return (0, a.sY)({
                            ourProps: {
                                id: l,
                                ref: h,
                                role: "menuitem",
                                tabIndex: !0 === r ? void 0 : -1,
                                "aria-disabled": !0 === r || void 0,
                                disabled: void 0,
                                onClick: b,
                                onFocus: E,
                                onPointerMove: w,
                                onMouseMove: w,
                                onPointerLeave: R,
                                onMouseLeave: R
                            },
                            theirProps: n,
                            slot: T,
                            defaultTag: N,
                            name: "Menu.Item"
                        })
                    })
                })
        },
        98359: function(e, t, r) {
            "use strict";
            r.d(t, {
                u: function() {
                    return A
                }
            });
            var n, i, o = r(70079),
                u = r(4911),
                l = r(37068),
                a = r(78983),
                s = r(26577),
                c = r(98044),
                d = r(81303),
                f = r(28203),
                p = r(14699),
                m = r(32552);

            function v(e, ...t) {
                e && t.length > 0 && e.classList.add(...t)
            }

            function h(e, ...t) {
                e && t.length > 0 && e.classList.remove(...t)
            }
            var g = ((n = g || {}).Ended = "ended", n.Cancelled = "cancelled", n),
                y = r(61296),
                b = r(58389);

            function E(e = "") {
                return e.split(" ").filter(e => e.trim().length > 1)
            }
            let w = (0, o.createContext)(null);
            w.displayName = "TransitionContext";
            var R = ((i = R || {}).Visible = "visible", i.Hidden = "hidden", i);
            let P = (0, o.createContext)(null);

            function T(e) {
                return "children" in e ? T(e.children) : e.current.filter(({
                    el: e
                }) => null !== e.current).filter(({
                    state: e
                }) => "visible" === e).length > 0
            }

            function S(e, t) {
                let r = (0, d.E)(e),
                    n = (0, o.useRef)([]),
                    i = (0, s.t)(),
                    l = (0, y.G)(),
                    c = (0, b.z)((e, t = u.l4.Hidden) => {
                        let o = n.current.findIndex(({
                            el: t
                        }) => t === e); - 1 !== o && ((0, a.E)(t, {
                            [u.l4.Unmount]() {
                                n.current.splice(o, 1)
                            },
                            [u.l4.Hidden]() {
                                n.current[o].state = "hidden"
                            }
                        }), l.microTask(() => {
                            var e;
                            !T(n) && i.current && (null == (e = r.current) || e.call(r))
                        }))
                    }),
                    f = (0, b.z)(e => {
                        let t = n.current.find(({
                            el: t
                        }) => t === e);
                        return t ? "visible" !== t.state && (t.state = "visible") : n.current.push({
                            el: e,
                            state: "visible"
                        }), () => c(e, u.l4.Unmount)
                    }),
                    p = (0, o.useRef)([]),
                    m = (0, o.useRef)(Promise.resolve()),
                    v = (0, o.useRef)({
                        enter: [],
                        leave: [],
                        idle: []
                    }),
                    h = (0, b.z)((e, r, n) => {
                        p.current.splice(0), t && (t.chains.current[r] = t.chains.current[r].filter(([t]) => t !== e)), null == t || t.chains.current[r].push([e, new Promise(e => {
                            p.current.push(e)
                        })]), null == t || t.chains.current[r].push([e, new Promise(e => {
                            Promise.all(v.current[r].map(([e, t]) => t)).then(() => e())
                        })]), "enter" === r ? m.current = m.current.then(() => null == t ? void 0 : t.wait.current).then(() => n(r)) : n(r)
                    }),
                    g = (0, b.z)((e, t, r) => {
                        Promise.all(v.current[t].splice(0).map(([e, t]) => t)).then(() => {
                            var e;
                            null == (e = p.current.shift()) || e()
                        }).then(() => r(t))
                    });
                return (0, o.useMemo)(() => ({
                    children: n,
                    register: f,
                    unregister: c,
                    onStart: h,
                    onStop: g,
                    wait: m,
                    chains: v
                }), [f, c, n, h, g, v, m])
            }

            function x() {}
            P.displayName = "NestingContext";
            let C = ["beforeEnter", "afterEnter", "beforeLeave", "afterLeave"];

            function _(e) {
                var t;
                let r = {};
                for (let n of C) r[n] = null != (t = e[n]) ? t : x;
                return r
            }
            let I = u.AN.RenderStrategy,
                k = (0, u.yV)(function(e, t) {
                    var r;
                    let n, {
                            beforeEnter: i,
                            afterEnter: R,
                            beforeLeave: x,
                            afterLeave: C,
                            enter: k,
                            enterFrom: O,
                            enterTo: F,
                            entered: A,
                            leave: M,
                            leaveFrom: D,
                            leaveTo: L,
                            ...N
                        } = e,
                        j = (0, o.useRef)(null),
                        z = (0, p.T)(j, t),
                        H = N.unmount ? u.l4.Unmount : u.l4.Hidden,
                        {
                            show: V,
                            appear: Y,
                            initial: U
                        } = function() {
                            let e = (0, o.useContext)(w);
                            if (null === e) throw Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
                            return e
                        }(),
                        [B, $] = (0, o.useState)(V ? "visible" : "hidden"),
                        W = function() {
                            let e = (0, o.useContext)(P);
                            if (null === e) throw Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
                            return e
                        }(),
                        {
                            register: q,
                            unregister: G
                        } = W,
                        Z = (0, o.useRef)(null);
                    (0, o.useEffect)(() => q(j), [q, j]), (0, o.useEffect)(() => {
                        if (H === u.l4.Hidden && j.current) {
                            if (V && "visible" !== B) {
                                $("visible");
                                return
                            }
                            return (0, a.E)(B, {
                                hidden: () => G(j),
                                visible: () => q(j)
                            })
                        }
                    }, [B, j, q, G, V, H]);
                    let J = (0, d.E)({
                            enter: E(k),
                            enterFrom: E(O),
                            enterTo: E(F),
                            entered: E(A),
                            leave: E(M),
                            leaveFrom: E(D),
                            leaveTo: E(L)
                        }),
                        Q = (r = {
                            beforeEnter: i,
                            afterEnter: R,
                            beforeLeave: x,
                            afterLeave: C
                        }, n = (0, o.useRef)(_(r)), (0, o.useEffect)(() => {
                            n.current = _(r)
                        }, [r]), n),
                        K = (0, f.H)();
                    (0, o.useEffect)(() => {
                        if (K && "visible" === B && null === j.current) throw Error("Did you forget to passthrough the `ref` to the actual DOM node?")
                    }, [j, B, K]);
                    let X = U && !Y,
                        ee = !K || X || Z.current === V ? "idle" : V ? "enter" : "leave",
                        et = (0, b.z)(e => (0, a.E)(e, {
                            enter: () => Q.current.beforeEnter(),
                            leave: () => Q.current.beforeLeave(),
                            idle: () => {}
                        })),
                        er = (0, b.z)(e => (0, a.E)(e, {
                            enter: () => Q.current.afterEnter(),
                            leave: () => Q.current.afterLeave(),
                            idle: () => {}
                        })),
                        en = S(() => {
                            $("hidden"), G(j)
                        }, W);
                    return function({
                        container: e,
                        direction: t,
                        classes: r,
                        onStart: n,
                        onStop: i
                    }) {
                        let o = (0, s.t)(),
                            u = (0, y.G)(),
                            l = (0, d.E)(t);
                        (0, c.e)(() => {
                            let t = (0, m.k)();
                            u.add(t.dispose);
                            let s = e.current;
                            if (s && "idle" !== l.current && o.current) {
                                var c, d, f, p;
                                let e, o, u, y, b, E, w;
                                return t.dispose(), n.current(l.current), t.add((c = s, d = r.current, f = "enter" === l.current, p = e => {
                                    t.dispose(), (0, a.E)(e, {
                                        [g.Ended]() {
                                            i.current(l.current)
                                        },
                                        [g.Cancelled]: () => {}
                                    })
                                }, o = f ? "enter" : "leave", u = (0, m.k)(), y = void 0 !== p ? (e = {
                                    called: !1
                                }, (...t) => {
                                    if (!e.called) return e.called = !0, p(...t)
                                }) : () => {}, "enter" === o && (c.removeAttribute("hidden"), c.style.display = ""), b = (0, a.E)(o, {
                                    enter: () => d.enter,
                                    leave: () => d.leave
                                }), E = (0, a.E)(o, {
                                    enter: () => d.enterTo,
                                    leave: () => d.leaveTo
                                }), w = (0, a.E)(o, {
                                    enter: () => d.enterFrom,
                                    leave: () => d.leaveFrom
                                }), h(c, ...d.enter, ...d.enterTo, ...d.enterFrom, ...d.leave, ...d.leaveFrom, ...d.leaveTo, ...d.entered), v(c, ...b, ...w), u.nextFrame(() => {
                                    h(c, ...w), v(c, ...E),
                                        function(e, t) {
                                            let r = (0, m.k)();
                                            if (!e) return r.dispose;
                                            let {
                                                transitionDuration: n,
                                                transitionDelay: i
                                            } = getComputedStyle(e), [o, u] = [n, i].map(e => {
                                                let [t = 0] = e.split(",").filter(Boolean).map(e => e.includes("ms") ? parseFloat(e) : 1e3 * parseFloat(e)).sort((e, t) => t - e);
                                                return t
                                            });
                                            if (o + u !== 0) {
                                                let n = [];
                                                n.push(r.addEventListener(e, "transitionrun", i => {
                                                    i.target === i.currentTarget && (n.splice(0).forEach(e => e()), n.push(r.addEventListener(e, "transitionend", e => {
                                                        e.target === e.currentTarget && (t("ended"), n.splice(0).forEach(e => e()))
                                                    }), r.addEventListener(e, "transitioncancel", e => {
                                                        e.target === e.currentTarget && (t("cancelled"), n.splice(0).forEach(e => e()))
                                                    })))
                                                }))
                                            } else t("ended");
                                            r.add(() => t("cancelled")), r.dispose
                                        }(c, e => ("ended" === e && (h(c, ...b), v(c, ...d.entered)), y(e)))
                                }), u.dispose)), t.dispose
                            }
                        }, [t])
                    }({
                        container: j,
                        classes: J,
                        direction: ee,
                        onStart: (0, d.E)(e => {
                            en.onStart(j, e, et)
                        }),
                        onStop: (0, d.E)(e => {
                            en.onStop(j, e, er), "leave" !== e || T(en) || ($("hidden"), G(j))
                        })
                    }), (0, o.useEffect)(() => {
                        X && (H === u.l4.Hidden ? Z.current = null : Z.current = V)
                    }, [V, X, B]), o.createElement(P.Provider, {
                        value: en
                    }, o.createElement(l.up, {
                        value: (0, a.E)(B, {
                            visible: l.ZM.Open,
                            hidden: l.ZM.Closed
                        })
                    }, (0, u.sY)({
                        ourProps: {
                            ref: z
                        },
                        theirProps: N,
                        defaultTag: "div",
                        features: I,
                        visible: "visible" === B,
                        name: "Transition.Child"
                    })))
                }),
                O = (0, u.yV)(function(e, t) {
                    let {
                        show: r,
                        appear: n = !1,
                        unmount: i,
                        ...s
                    } = e, d = (0, o.useRef)(null), m = (0, p.T)(d, t);
                    (0, f.H)();
                    let v = (0, l.oJ)();
                    if (void 0 === r && null !== v && (r = (0, a.E)(v, {
                            [l.ZM.Open]: !0,
                            [l.ZM.Closed]: !1
                        })), ![!0, !1].includes(r)) throw Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");
                    let [h, g] = (0, o.useState)(r ? "visible" : "hidden"), y = S(() => {
                        g("hidden")
                    }), [b, E] = (0, o.useState)(!0), R = (0, o.useRef)([r]);
                    (0, c.e)(() => {
                        !1 !== b && R.current[R.current.length - 1] !== r && (R.current.push(r), E(!1))
                    }, [R, r]);
                    let x = (0, o.useMemo)(() => ({
                        show: r,
                        appear: n,
                        initial: b
                    }), [r, n, b]);
                    (0, o.useEffect)(() => {
                        if (r) g("visible");
                        else if (T(y)) {
                            let e = d.current;
                            if (!e) return;
                            let t = e.getBoundingClientRect();
                            0 === t.x && 0 === t.y && 0 === t.width && 0 === t.height && g("hidden")
                        } else g("hidden")
                    }, [r, y]);
                    let C = {
                        unmount: i
                    };
                    return o.createElement(P.Provider, {
                        value: y
                    }, o.createElement(w.Provider, {
                        value: x
                    }, (0, u.sY)({
                        ourProps: { ...C,
                            as: o.Fragment,
                            children: o.createElement(k, {
                                ref: m,
                                ...C,
                                ...s
                            })
                        },
                        theirProps: {},
                        defaultTag: o.Fragment,
                        features: I,
                        visible: "visible" === h,
                        name: "Transition"
                    })))
                }),
                F = (0, u.yV)(function(e, t) {
                    let r = null !== (0, o.useContext)(w),
                        n = null !== (0, l.oJ)();
                    return o.createElement(o.Fragment, null, !r && n ? o.createElement(O, {
                        ref: t,
                        ...e
                    }) : o.createElement(k, {
                        ref: t,
                        ...e
                    }))
                }),
                A = Object.assign(O, {
                    Child: F,
                    Root: O
                })
        },
        61296: function(e, t, r) {
            "use strict";
            r.d(t, {
                G: function() {
                    return o
                }
            });
            var n = r(70079),
                i = r(32552);

            function o() {
                let [e] = (0, n.useState)(i.k);
                return (0, n.useEffect)(() => () => e.dispose(), [e]), e
            }
        },
        58389: function(e, t, r) {
            "use strict";
            r.d(t, {
                z: function() {
                    return o
                }
            });
            var n = r(70079),
                i = r(81303);
            let o = function(e) {
                let t = (0, i.E)(e);
                return n.useCallback((...e) => t.current(...e), [t])
            }
        },
        58194: function(e, t, r) {
            "use strict";
            r.d(t, {
                M: function() {
                    return s
                }
            });
            var n, i = r(70079),
                o = r(98044),
                u = r(28203);
            let l = 0;

            function a() {
                return ++l
            }
            let s = null != (n = i.useId) ? n : function() {
                let e = (0, u.H)(),
                    [t, r] = i.useState(e ? a : null);
                return (0, o.e)(() => {
                    null === t && r(a())
                }, [t]), null != t ? "" + t : void 0
            }
        },
        26577: function(e, t, r) {
            "use strict";
            r.d(t, {
                t: function() {
                    return o
                }
            });
            var n = r(70079),
                i = r(98044);

            function o() {
                let e = (0, n.useRef)(!1);
                return (0, i.e)(() => (e.current = !0, () => {
                    e.current = !1
                }), []), e
            }
        },
        98044: function(e, t, r) {
            "use strict";
            r.d(t, {
                e: function() {
                    return i
                }
            });
            var n = r(70079);
            let i = r(34926).s ? n.useEffect : n.useLayoutEffect
        },
        81303: function(e, t, r) {
            "use strict";
            r.d(t, {
                E: function() {
                    return o
                }
            });
            var n = r(70079),
                i = r(98044);

            function o(e) {
                let t = (0, n.useRef)(e);
                return (0, i.e)(() => {
                    t.current = e
                }, [e]), t
            }
        },
        53315: function(e, t, r) {
            "use strict";
            r.d(t, {
                O: function() {
                    return l
                }
            });
            var n = r(70079),
                i = r(29787),
                o = r(81303);

            function u(e, t, r) {
                let i = (0, o.E)(t);
                (0, n.useEffect)(() => {
                    function t(e) {
                        i.current(e)
                    }
                    return document.addEventListener(e, t, r), () => document.removeEventListener(e, t, r)
                }, [e, r])
            }

            function l(e, t, r = !0) {
                let o = (0, n.useRef)(!1);

                function l(r, n) {
                    if (!o.current || r.defaultPrevented) return;
                    let u = function e(t) {
                            return "function" == typeof t ? e(t()) : Array.isArray(t) || t instanceof Set ? t : [t]
                        }(e),
                        l = n(r);
                    if (null !== l && l.ownerDocument.documentElement.contains(l)) {
                        for (let e of u) {
                            if (null === e) continue;
                            let t = e instanceof HTMLElement ? e : e.current;
                            if (null != t && t.contains(l)) return
                        }
                        return (0, i.sP)(l, i.tJ.Loose) || -1 === l.tabIndex || r.preventDefault(), t(r, l)
                    }
                }(0, n.useEffect)(() => {
                    requestAnimationFrame(() => {
                        o.current = r
                    })
                }, [r]);
                let a = (0, n.useRef)(null);
                u("mousedown", e => {
                    o.current && (a.current = e.target)
                }, !0), u("click", e => {
                    a.current && (l(e, () => a.current), a.current = null)
                }, !0), u("blur", e => l(e, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), !0)
            }
        },
        46789: function(e, t, r) {
            "use strict";
            r.d(t, {
                i: function() {
                    return o
                }
            });
            var n = r(70079),
                i = r(52327);

            function o(...e) {
                return (0, n.useMemo)(() => (0, i.r)(...e), [...e])
            }
        },
        19992: function(e, t, r) {
            "use strict";
            r.d(t, {
                f: function() {
                    return u
                }
            });
            var n = r(70079),
                i = r(98044);

            function o(e) {
                var t;
                if (e.type) return e.type;
                let r = null != (t = e.as) ? t : "button";
                if ("string" == typeof r && "button" === r.toLowerCase()) return "button"
            }

            function u(e, t) {
                let [r, u] = (0, n.useState)(() => o(e));
                return (0, i.e)(() => {
                    u(o(e))
                }, [e.type, e.as]), (0, i.e)(() => {
                    r || !t.current || t.current instanceof HTMLButtonElement && !t.current.hasAttribute("type") && u("button")
                }, [r, t]), r
            }
        },
        28203: function(e, t, r) {
            "use strict";
            r.d(t, {
                H: function() {
                    return o
                }
            });
            var n = r(70079);
            let i = {
                serverHandoffComplete: !1
            };

            function o() {
                let [e, t] = (0, n.useState)(i.serverHandoffComplete);
                return (0, n.useEffect)(() => {
                    !0 !== e && t(!0)
                }, [e]), (0, n.useEffect)(() => {
                    !1 === i.serverHandoffComplete && (i.serverHandoffComplete = !0)
                }, []), e
            }
        },
        14699: function(e, t, r) {
            "use strict";
            r.d(t, {
                T: function() {
                    return l
                },
                h: function() {
                    return u
                }
            });
            var n = r(70079),
                i = r(58389);
            let o = Symbol();

            function u(e, t = !0) {
                return Object.assign(e, {
                    [o]: t
                })
            }

            function l(...e) {
                let t = (0, n.useRef)(e);
                (0, n.useEffect)(() => {
                    t.current = e
                }, [e]);
                let r = (0, i.z)(e => {
                    for (let r of t.current) null != r && ("function" == typeof r ? r(e) : r.current = e)
                });
                return e.every(e => null == e || (null == e ? void 0 : e[o])) ? void 0 : r
            }
        },
        98992: function(e, t, r) {
            "use strict";
            r.d(t, {
                A: function() {
                    return o
                },
                _: function() {
                    return u
                }
            });
            var n, i = r(4911),
                o = ((n = o || {})[n.None = 1] = "None", n[n.Focusable = 2] = "Focusable", n[n.Hidden = 4] = "Hidden", n);
            let u = (0, i.yV)(function(e, t) {
                let {
                    features: r = 1,
                    ...n
                } = e, o = {
                    ref: t,
                    "aria-hidden": (2 & r) == 2 || void 0,
                    style: {
                        position: "fixed",
                        top: 1,
                        left: 1,
                        width: 1,
                        height: 0,
                        padding: 0,
                        margin: -1,
                        overflow: "hidden",
                        clip: "rect(0, 0, 0, 0)",
                        whiteSpace: "nowrap",
                        borderWidth: "0",
                        ...(4 & r) == 4 && (2 & r) != 2 && {
                            display: "none"
                        }
                    }
                };
                return (0, i.sY)({
                    ourProps: o,
                    theirProps: n,
                    slot: {},
                    defaultTag: "div",
                    name: "Hidden"
                })
            })
        },
        37068: function(e, t, r) {
            "use strict";
            r.d(t, {
                ZM: function() {
                    return u
                },
                oJ: function() {
                    return l
                },
                up: function() {
                    return a
                }
            });
            var n, i = r(70079);
            let o = (0, i.createContext)(null);
            o.displayName = "OpenClosedContext";
            var u = ((n = u || {})[n.Open = 0] = "Open", n[n.Closed = 1] = "Closed", n);

            function l() {
                return (0, i.useContext)(o)
            }

            function a({
                value: e,
                children: t
            }) {
                return i.createElement(o.Provider, {
                    value: e
                }, t)
            }
        },
        28595: function(e, t, r) {
            "use strict";

            function n(e) {
                let t = e.parentElement,
                    r = null;
                for (; t && !(t instanceof HTMLFieldSetElement);) t instanceof HTMLLegendElement && (r = t), t = t.parentElement;
                let n = (null == t ? void 0 : t.getAttribute("disabled")) === "";
                return !(n && function(e) {
                    if (!e) return !1;
                    let t = e.previousElementSibling;
                    for (; null !== t;) {
                        if (t instanceof HTMLLegendElement) return !1;
                        t = t.previousElementSibling
                    }
                    return !0
                }(r)) && n
            }
            r.d(t, {
                P: function() {
                    return n
                }
            })
        },
        10186: function(e, t, r) {
            "use strict";
            r.d(t, {
                T: function() {
                    return i
                },
                d: function() {
                    return o
                }
            });
            var n, i = ((n = i || {})[n.First = 0] = "First", n[n.Previous = 1] = "Previous", n[n.Next = 2] = "Next", n[n.Last = 3] = "Last", n[n.Specific = 4] = "Specific", n[n.Nothing = 5] = "Nothing", n);

            function o(e, t) {
                let r = t.resolveItems();
                if (r.length <= 0) return null;
                let n = t.resolveActiveIndex(),
                    i = null != n ? n : -1,
                    o = (() => {
                        switch (e.focus) {
                            case 0:
                                return r.findIndex(e => !t.resolveDisabled(e));
                            case 1:
                                {
                                    let e = r.slice().reverse().findIndex((e, r, n) => (-1 === i || !(n.length - r - 1 >= i)) && !t.resolveDisabled(e));
                                    return -1 === e ? e : r.length - 1 - e
                                }
                            case 2:
                                return r.findIndex((e, r) => !(r <= i) && !t.resolveDisabled(e));
                            case 3:
                                {
                                    let e = r.slice().reverse().findIndex(e => !t.resolveDisabled(e));
                                    return -1 === e ? e : r.length - 1 - e
                                }
                            case 4:
                                return r.findIndex(r => t.resolveId(r) === e.id);
                            case 5:
                                return null;
                            default:
                                ! function(e) {
                                    throw Error("Unexpected object: " + e)
                                }(e)
                        }
                    })();
                return -1 === o ? n : o
            }
        },
        32552: function(e, t, r) {
            "use strict";
            r.d(t, {
                k: function() {
                    return i
                }
            });
            var n = r(84575);

            function i() {
                let e = [],
                    t = [],
                    r = {
                        enqueue(e) {
                            t.push(e)
                        },
                        addEventListener: (e, t, n, i) => (e.addEventListener(t, n, i), r.add(() => e.removeEventListener(t, n, i))),
                        requestAnimationFrame(...e) {
                            let t = requestAnimationFrame(...e);
                            return r.add(() => cancelAnimationFrame(t))
                        },
                        nextFrame: (...e) => r.requestAnimationFrame(() => r.requestAnimationFrame(...e)),
                        setTimeout(...e) {
                            let t = setTimeout(...e);
                            return r.add(() => clearTimeout(t))
                        },
                        microTask(...e) {
                            let t = {
                                current: !0
                            };
                            return (0, n.Y)(() => {
                                t.current && e[0]()
                            }), r.add(() => {
                                t.current = !1
                            })
                        },
                        add: t => (e.push(t), () => {
                            let r = e.indexOf(t);
                            if (r >= 0) {
                                let [t] = e.splice(r, 1);
                                t()
                            }
                        }),
                        dispose() {
                            for (let t of e.splice(0)) t()
                        },
                        async workQueue() {
                            for (let e of t.splice(0)) await e()
                        }
                    };
                return r
            }
        },
        29787: function(e, t, r) {
            "use strict";
            r.d(t, {
                C5: function() {
                    return y
                },
                EO: function() {
                    return E
                },
                TO: function() {
                    return d
                },
                fE: function() {
                    return f
                },
                jA: function() {
                    return w
                },
                sP: function() {
                    return h
                },
                tJ: function() {
                    return v
                },
                wI: function() {
                    return g
                },
                z2: function() {
                    return b
                }
            });
            var n, i, o, u, l = r(32552),
                a = r(78983),
                s = r(52327);
            let c = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map(e => `${e}:not([tabindex='-1'])`).join(",");
            var d = ((n = d || {})[n.First = 1] = "First", n[n.Previous = 2] = "Previous", n[n.Next = 4] = "Next", n[n.Last = 8] = "Last", n[n.WrapAround = 16] = "WrapAround", n[n.NoScroll = 32] = "NoScroll", n),
                f = ((i = f || {})[i.Error = 0] = "Error", i[i.Overflow = 1] = "Overflow", i[i.Success = 2] = "Success", i[i.Underflow = 3] = "Underflow", i),
                p = ((o = p || {})[o.Previous = -1] = "Previous", o[o.Next = 1] = "Next", o);

            function m(e = document.body) {
                return null == e ? [] : Array.from(e.querySelectorAll(c))
            }
            var v = ((u = v || {})[u.Strict = 0] = "Strict", u[u.Loose = 1] = "Loose", u);

            function h(e, t = 0) {
                var r;
                return e !== (null == (r = (0, s.r)(e)) ? void 0 : r.body) && (0, a.E)(t, {
                    0: () => e.matches(c),
                    1() {
                        let t = e;
                        for (; null !== t;) {
                            if (t.matches(c)) return !0;
                            t = t.parentElement
                        }
                        return !1
                    }
                })
            }

            function g(e) {
                let t = (0, s.r)(e);
                (0, l.k)().nextFrame(() => {
                    t && !h(t.activeElement, 0) && y(e)
                })
            }

            function y(e) {
                null == e || e.focus({
                    preventScroll: !0
                })
            }

            function b(e, t = e => e) {
                return e.slice().sort((e, r) => {
                    let n = t(e),
                        i = t(r);
                    if (null === n || null === i) return 0;
                    let o = n.compareDocumentPosition(i);
                    return o & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : o & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0
                })
            }

            function E(e, t) {
                return w(m(), t, !0, e)
            }

            function w(e, t, r = !0, n = null) {
                var i, o, u;
                let l = Array.isArray(e) ? e.length > 0 ? e[0].ownerDocument : document : e.ownerDocument,
                    a = Array.isArray(e) ? r ? b(e) : e : m(e);
                n = null != n ? n : l.activeElement;
                let s = (() => {
                        if (5 & t) return 1;
                        if (10 & t) return -1;
                        throw Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")
                    })(),
                    c = (() => {
                        if (1 & t) return 0;
                        if (2 & t) return Math.max(0, a.indexOf(n)) - 1;
                        if (4 & t) return Math.max(0, a.indexOf(n)) + 1;
                        if (8 & t) return a.length - 1;
                        throw Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")
                    })(),
                    d = 32 & t ? {
                        preventScroll: !0
                    } : {},
                    f = 0,
                    p = a.length,
                    v;
                do {
                    if (f >= p || f + p <= 0) return 0;
                    let e = c + f;
                    if (16 & t) e = (e + p) % p;
                    else {
                        if (e < 0) return 3;
                        if (e >= p) return 1
                    }
                    null == (v = a[e]) || v.focus(d), f += s
                } while (v !== l.activeElement);
                return 6 & t && null != (u = null == (o = null == (i = v) ? void 0 : i.matches) ? void 0 : o.call(i, "textarea,input")) && u && v.select(), v.hasAttribute("tabindex") || v.setAttribute("tabindex", "0"), 2
            }
        },
        78983: function(e, t, r) {
            "use strict";

            function n(e, t, ...r) {
                if (e in t) {
                    let n = t[e];
                    return "function" == typeof n ? n(...r) : n
                }
                let i = Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map(e=>`"${e}"`).join(", ")}.`);
                throw Error.captureStackTrace && Error.captureStackTrace(i, n), i
            }
            r.d(t, {
                E: function() {
                    return n
                }
            })
        },
        84575: function(e, t, r) {
            "use strict";

            function n(e) {
                "function" == typeof queueMicrotask ? queueMicrotask(e) : Promise.resolve().then(e).catch(e => setTimeout(() => {
                    throw e
                }))
            }
            r.d(t, {
                Y: function() {
                    return n
                }
            })
        },
        52327: function(e, t, r) {
            "use strict";
            r.d(t, {
                r: function() {
                    return i
                }
            });
            var n = r(34926);

            function i(e) {
                return n.s ? null : e instanceof Node ? e.ownerDocument : null != e && e.hasOwnProperty("current") && e.current instanceof Node ? e.current.ownerDocument : document
            }
        },
        4911: function(e, t, r) {
            "use strict";
            r.d(t, {
                AN: function() {
                    return l
                },
                l4: function() {
                    return a
                },
                oA: function() {
                    return p
                },
                sY: function() {
                    return s
                },
                yV: function() {
                    return f
                }
            });
            var n, i, o = r(70079),
                u = r(78983),
                l = ((n = l || {})[n.None = 0] = "None", n[n.RenderStrategy = 1] = "RenderStrategy", n[n.Static = 2] = "Static", n),
                a = ((i = a || {})[i.Unmount = 0] = "Unmount", i[i.Hidden = 1] = "Hidden", i);

            function s({
                ourProps: e,
                theirProps: t,
                slot: r,
                defaultTag: n,
                features: i,
                visible: o = !0,
                name: l
            }) {
                let a = d(t, e);
                if (o) return c(a, r, n, l);
                let s = null != i ? i : 0;
                if (2 & s) {
                    let {
                        static: e = !1,
                        ...t
                    } = a;
                    if (e) return c(t, r, n, l)
                }
                if (1 & s) {
                    let {
                        unmount: e = !0,
                        ...t
                    } = a;
                    return (0, u.E)(e ? 0 : 1, {
                        0: () => null,
                        1: () => c({ ...t,
                            hidden: !0,
                            style: {
                                display: "none"
                            }
                        }, r, n, l)
                    })
                }
                return c(a, r, n, l)
            }

            function c(e, t = {}, r, n) {
                let {
                    as: i = r,
                    children: u,
                    refName: l = "ref",
                    ...a
                } = m(e, ["unmount", "static"]), s = void 0 !== e.ref ? {
                    [l]: e.ref
                } : {}, c = "function" == typeof u ? u(t) : u;
                a.className && "function" == typeof a.className && (a.className = a.className(t));
                let f = {};
                if (t) {
                    let e = !1,
                        r = [];
                    for (let [n, i] of Object.entries(t)) "boolean" == typeof i && (e = !0), !0 === i && r.push(n);
                    e && (f["data-headlessui-state"] = r.join(" "))
                }
                if (i === o.Fragment && Object.keys(p(a)).length > 0) {
                    if (!(0, o.isValidElement)(c) || Array.isArray(c) && c.length > 1) throw Error(['Passing props on "Fragment"!', "", `The current component <${n} /> is rendering a "Fragment".`, "However we need to passthrough the following props:", Object.keys(a).map(e => `  - ${e}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".', "Render a single element as the child so that we can forward the props onto that element."].map(e => `  - ${e}`).join(`
`)].join(`
`));
                    return (0, o.cloneElement)(c, Object.assign({}, d(c.props, p(m(a, ["ref"]))), f, s, function(...e) {
                        return {
                            ref: e.every(e => null == e) ? void 0 : t => {
                                for (let r of e) null != r && ("function" == typeof r ? r(t) : r.current = t)
                            }
                        }
                    }(c.ref, s.ref)))
                }
                return (0, o.createElement)(i, Object.assign({}, m(a, ["ref"]), i !== o.Fragment && s, i !== o.Fragment && f), c)
            }

            function d(...e) {
                if (0 === e.length) return {};
                if (1 === e.length) return e[0];
                let t = {},
                    r = {};
                for (let n of e)
                    for (let e in n) e.startsWith("on") && "function" == typeof n[e] ? (null != r[e] || (r[e] = []), r[e].push(n[e])) : t[e] = n[e];
                if (t.disabled || t["aria-disabled"]) return Object.assign(t, Object.fromEntries(Object.keys(r).map(e => [e, void 0])));
                for (let e in r) Object.assign(t, {
                    [e](t, ...n) {
                        for (let i of r[e]) {
                            if ((t instanceof Event || (null == t ? void 0 : t.nativeEvent) instanceof Event) && t.defaultPrevented) return;
                            i(t, ...n)
                        }
                    }
                });
                return t
            }

            function f(e) {
                var t;
                return Object.assign((0, o.forwardRef)(e), {
                    displayName: null != (t = e.displayName) ? t : e.name
                })
            }

            function p(e) {
                let t = Object.assign({}, e);
                for (let e in t) void 0 === t[e] && delete t[e];
                return t
            }

            function m(e, t = []) {
                let r = Object.assign({}, e);
                for (let e of t) e in r && delete r[e];
                return r
            }
        },
        34926: function(e, t, r) {
            "use strict";
            r.d(t, {
                s: function() {
                    return n
                }
            });
            let n = "undefined" == typeof window || "undefined" == typeof document
        },
        68469: function(e, t, r) {
            "use strict";
            r.d(t, {
                F: function() {
                    return i
                },
                e: function() {
                    return o
                }
            });
            var n = r(70079);

            function i(...e) {
                return t => e.forEach(e => {
                    var r;
                    "function" == typeof(r = e) ? r(t): null != r && (r.current = t)
                })
            }

            function o(...e) {
                return (0, n.useCallback)(i(...e), e)
            }
        },
        8859: function(e, t, r) {
            "use strict";
            r.d(t, {
                WV: function() {
                    return l
                },
                jH: function() {
                    return a
                }
            });
            var n = r(45675),
                i = r(70079),
                o = r(99581),
                u = r(26739);
            let l = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"].reduce((e, t) => {
                let r = (0, i.forwardRef)((e, r) => {
                    let {
                        asChild: o,
                        ...l
                    } = e, a = o ? u.g7 : t;
                    return (0, i.useEffect)(() => {
                        window[Symbol.for("radix-ui")] = !0
                    }, []), (0, i.createElement)(a, (0, n.Z)({}, l, {
                        ref: r
                    }))
                });
                return r.displayName = `Primitive.${t}`, { ...e,
                    [t]: r
                }
            }, {});

            function a(e, t) {
                e && (0, o.flushSync)(() => e.dispatchEvent(t))
            }
        },
        26739: function(e, t, r) {
            "use strict";
            r.d(t, {
                g7: function() {
                    return u
                }
            });
            var n = r(45675),
                i = r(70079),
                o = r(68469);
            let u = (0, i.forwardRef)((e, t) => {
                let {
                    children: r,
                    ...o
                } = e, u = i.Children.toArray(r), a = u.find(s);
                if (a) {
                    let e = a.props.children,
                        r = u.map(t => t !== a ? t : i.Children.count(e) > 1 ? i.Children.only(null) : (0, i.isValidElement)(e) ? e.props.children : null);
                    return (0, i.createElement)(l, (0, n.Z)({}, o, {
                        ref: t
                    }), (0, i.isValidElement)(e) ? (0, i.cloneElement)(e, void 0, r) : null)
                }
                return (0, i.createElement)(l, (0, n.Z)({}, o, {
                    ref: t
                }), r)
            });
            u.displayName = "Slot";
            let l = (0, i.forwardRef)((e, t) => {
                let {
                    children: r,
                    ...n
                } = e;
                return (0, i.isValidElement)(r) ? (0, i.cloneElement)(r, { ... function(e, t) {
                        let r = { ...t
                        };
                        for (let n in t) {
                            let i = e[n],
                                o = t[n],
                                u = /^on[A-Z]/.test(n);
                            u ? i && o ? r[n] = (...e) => {
                                o(...e), i(...e)
                            } : i && (r[n] = i) : "style" === n ? r[n] = { ...i,
                                ...o
                            } : "className" === n && (r[n] = [i, o].filter(Boolean).join(" "))
                        }
                        return { ...e,
                            ...r
                        }
                    }(n, r.props),
                    ref: t ? (0, o.F)(t, r.ref) : r.ref
                }) : i.Children.count(r) > 1 ? i.Children.only(null) : null
            });
            l.displayName = "SlotClone";
            let a = ({
                children: e
            }) => (0, i.createElement)(i.Fragment, null, e);

            function s(e) {
                return (0, i.isValidElement)(e) && e.type === a
            }
        },
        32148: function(e, t, r) {
            "use strict";
            r.d(t, {
                T: function() {
                    return u
                },
                f: function() {
                    return l
                }
            });
            var n = r(45675),
                i = r(70079),
                o = r(8859);
            let u = (0, i.forwardRef)((e, t) => (0, i.createElement)(o.WV.span, (0, n.Z)({}, e, {
                    ref: t,
                    style: {
                        position: "absolute",
                        border: 0,
                        width: 1,
                        height: 1,
                        padding: 0,
                        margin: -1,
                        overflow: "hidden",
                        clip: "rect(0, 0, 0, 0)",
                        whiteSpace: "nowrap",
                        wordWrap: "normal",
                        ...e.style
                    }
                }))),
                l = u
        },
        70737: function(e, t, r) {
            "use strict";
            r.d(t, {
                M: function() {
                    return h
                }
            });
            var n = r(70079),
                i = r(3831),
                o = r(48783);

            function u() {
                let e = (0, n.useRef)(!1);
                return (0, o.L)(() => (e.current = !0, () => {
                    e.current = !1
                }), []), e
            }
            var l = r(54561),
                a = r(35375);
            class s extends n.Component {
                getSnapshotBeforeUpdate(e) {
                    let t = this.props.childRef.current;
                    if (t && e.isPresent && !this.props.isPresent) {
                        let e = this.props.sizeRef.current;
                        e.height = t.offsetHeight || 0, e.width = t.offsetWidth || 0, e.top = t.offsetTop, e.left = t.offsetLeft
                    }
                    return null
                }
                componentDidUpdate() {}
                render() {
                    return this.props.children
                }
            }

            function c({
                children: e,
                isPresent: t
            }) {
                let r = (0, n.useId)(),
                    i = (0, n.useRef)(null),
                    o = (0, n.useRef)({
                        width: 0,
                        height: 0,
                        top: 0,
                        left: 0
                    });
                return (0, n.useInsertionEffect)(() => {
                    let {
                        width: e,
                        height: n,
                        top: u,
                        left: l
                    } = o.current;
                    if (t || !i.current || !e || !n) return;
                    i.current.dataset.motionPopId = r;
                    let a = document.createElement("style");
                    return document.head.appendChild(a), a.sheet && a.sheet.insertRule(`
          [data-motion-pop-id="${r}"] {
            position: absolute !important;
            width: ${e}px !important;
            height: ${n}px !important;
            top: ${u}px !important;
            left: ${l}px !important;
          }
        `), () => {
                        document.head.removeChild(a)
                    }
                }, [t]), n.createElement(s, {
                    isPresent: t,
                    childRef: i,
                    sizeRef: o
                }, n.cloneElement(e, {
                    ref: i
                }))
            }
            let d = ({
                children: e,
                initial: t,
                isPresent: r,
                onExitComplete: i,
                custom: o,
                presenceAffectsLayout: u,
                mode: s
            }) => {
                let d = (0, a.h)(f),
                    p = (0, n.useId)(),
                    m = (0, n.useMemo)(() => ({
                        id: p,
                        initial: t,
                        isPresent: r,
                        custom: o,
                        onExitComplete: e => {
                            for (let t of (d.set(e, !0), d.values()))
                                if (!t) return;
                            i && i()
                        },
                        register: e => (d.set(e, !1), () => d.delete(e))
                    }), u ? void 0 : [r]);
                return (0, n.useMemo)(() => {
                    d.forEach((e, t) => d.set(t, !1))
                }, [r]), n.useEffect(() => {
                    r || d.size || !i || i()
                }, [r]), "popLayout" === s && (e = n.createElement(c, {
                    isPresent: r
                }, e)), n.createElement(l.O.Provider, {
                    value: m
                }, e)
            };

            function f() {
                return new Map
            }
            var p = r(73107),
                m = r(83813);
            let v = e => e.key || "",
                h = ({
                    children: e,
                    custom: t,
                    initial: r = !0,
                    onExitComplete: l,
                    exitBeforeEnter: a,
                    presenceAffectsLayout: s = !0,
                    mode: c = "sync"
                }) => {
                    var f;
                    (0, m.k)(!a, "Replace exitBeforeEnter with mode='wait'");
                    let [h] = function() {
                        let e = u(),
                            [t, r] = (0, n.useState)(0),
                            o = (0, n.useCallback)(() => {
                                e.current && r(t + 1)
                            }, [t]),
                            l = (0, n.useCallback)(() => i.Wi.postRender(o), [o]);
                        return [l, t]
                    }(), g = (0, n.useContext)(p.p).forceRender;
                    g && (h = g);
                    let y = u(),
                        b = function(e) {
                            let t = [];
                            return n.Children.forEach(e, e => {
                                (0, n.isValidElement)(e) && t.push(e)
                            }), t
                        }(e),
                        E = b,
                        w = new Set,
                        R = (0, n.useRef)(E),
                        P = (0, n.useRef)(new Map).current,
                        T = (0, n.useRef)(!0);
                    if ((0, o.L)(() => {
                            T.current = !1,
                                function(e, t) {
                                    e.forEach(e => {
                                        let r = v(e);
                                        t.set(r, e)
                                    })
                                }(b, P), R.current = E
                        }), f = () => {
                            T.current = !0, P.clear(), w.clear()
                        }, (0, n.useEffect)(() => () => f(), []), T.current) return n.createElement(n.Fragment, null, E.map(e => n.createElement(d, {
                        key: v(e),
                        isPresent: !0,
                        initial: !!r && void 0,
                        presenceAffectsLayout: s,
                        mode: c
                    }, e)));
                    E = [...E];
                    let S = R.current.map(v),
                        x = b.map(v),
                        C = S.length;
                    for (let e = 0; e < C; e++) {
                        let t = S[e]; - 1 === x.indexOf(t) && w.add(t)
                    }
                    return "wait" === c && w.size && (E = []), w.forEach(e => {
                        if (-1 !== x.indexOf(e)) return;
                        let r = P.get(e);
                        if (!r) return;
                        let i = S.indexOf(e),
                            o = () => {
                                P.delete(e), w.delete(e);
                                let t = R.current.findIndex(t => t.key === e);
                                if (R.current.splice(t, 1), !w.size) {
                                    if (R.current = b, !1 === y.current) return;
                                    h(), l && l()
                                }
                            };
                        E.splice(i, 0, n.createElement(d, {
                            key: v(r),
                            isPresent: !1,
                            onExitComplete: o,
                            custom: t,
                            presenceAffectsLayout: s,
                            mode: c
                        }, r))
                    }), E = E.map(e => {
                        let t = e.key;
                        return w.has(t) ? e : n.createElement(d, {
                            key: v(e),
                            isPresent: !0,
                            presenceAffectsLayout: s,
                            mode: c
                        }, e)
                    }), n.createElement(n.Fragment, null, w.size ? E : E.map(e => (0, n.cloneElement)(e)))
                }
        }
    }
]);