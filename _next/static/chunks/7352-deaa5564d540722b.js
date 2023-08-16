"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [7352], {
        68539: function(e, t, n) {
            n.d(t, {
                B: function() {
                    return a
                }
            });
            var r = n(70079),
                o = n(36646),
                l = n(49270),
                i = n(94251);

            function a(e) {
                let t = e + "CollectionProvider",
                    [n, a] = (0, o.b)(t),
                    [u, c] = n(t, {
                        collectionRef: {
                            current: null
                        },
                        itemMap: new Map
                    }),
                    s = e => {
                        let {
                            scope: t,
                            children: n
                        } = e, o = r.useRef(null), l = r.useRef(new Map).current;
                        return r.createElement(u, {
                            scope: t,
                            itemMap: l,
                            collectionRef: o
                        }, n)
                    },
                    d = e + "CollectionSlot",
                    f = r.forwardRef((e, t) => {
                        let {
                            scope: n,
                            children: o
                        } = e, a = c(d, n), u = (0, l.e)(t, a.collectionRef);
                        return r.createElement(i.g7, {
                            ref: u
                        }, o)
                    }),
                    p = e + "CollectionItemSlot",
                    m = "data-radix-collection-item",
                    v = r.forwardRef((e, t) => {
                        let {
                            scope: n,
                            children: o,
                            ...a
                        } = e, u = r.useRef(null), s = (0, l.e)(t, u), d = c(p, n);
                        return r.useEffect(() => (d.itemMap.set(u, {
                            ref: u,
                            ...a
                        }), () => void d.itemMap.delete(u))), r.createElement(i.g7, {
                            [m]: "",
                            ref: s
                        }, o)
                    });
                return [{
                    Provider: s,
                    Slot: f,
                    ItemSlot: v
                }, function(t) {
                    let n = c(e + "CollectionConsumer", t),
                        o = r.useCallback(() => {
                            let e = n.collectionRef.current;
                            if (!e) return [];
                            let t = Array.from(e.querySelectorAll(`[${m}]`)),
                                r = Array.from(n.itemMap.values()),
                                o = r.sort((e, n) => t.indexOf(e.ref.current) - t.indexOf(n.ref.current));
                            return o
                        }, [n.collectionRef, n.itemMap]);
                    return o
                }, a]
            }
        },
        28036: function(e, t, n) {
            n.d(t, {
                gm: function() {
                    return l
                }
            });
            var r = n(70079);
            let o = (0, r.createContext)(void 0);

            function l(e) {
                let t = (0, r.useContext)(o);
                return e || t || "ltr"
            }
        },
        47428: function(e, t, n) {
            n.d(t, {
                VY: function() {
                    return eW
                },
                ck: function() {
                    return eZ
                },
                __: function() {
                    return eV
                },
                Uv: function() {
                    return eF
                },
                Ee: function() {
                    return eB
                },
                Rk: function() {
                    return eH
                },
                fC: function() {
                    return eA
                },
                xz: function() {
                    return eI
                }
            });
            var r = n(45675),
                o = n(70079),
                l = n(72901),
                i = n(49270),
                a = n(36646),
                u = n(86004),
                c = n(39073),
                s = n(68539),
                d = n(28036),
                f = n(49515),
                p = n(54386),
                m = n(44480),
                v = n(88817),
                h = n(25373),
                g = n(67323),
                w = n(55691),
                y = n(83208),
                b = n(94251),
                x = n(9137),
                E = n(66546),
                C = n(54239);
            let R = ["Enter", " "],
                M = ["ArrowUp", "PageDown", "End"],
                S = ["ArrowDown", "PageUp", "Home", ...M],
                P = {
                    ltr: [...R, "ArrowRight"],
                    rtl: [...R, "ArrowLeft"]
                },
                _ = {
                    ltr: ["ArrowLeft"],
                    rtl: ["ArrowRight"]
                },
                D = "Menu",
                [T, k, O] = (0, s.B)(D),
                [L, A] = (0, a.b)(D, [O, h.D7, y.Pc]),
                I = (0, h.D7)(),
                F = (0, y.Pc)(),
                [W, V] = L(D),
                [Z, B] = L(D),
                H = e => {
                    let {
                        __scopeMenu: t,
                        open: n = !1,
                        children: r,
                        dir: l,
                        onOpenChange: i,
                        modal: a = !0
                    } = e, u = I(t), [c, s] = (0, o.useState)(null), f = (0, o.useRef)(!1), p = (0, x.W)(i), m = (0, d.gm)(l);
                    return (0, o.useEffect)(() => {
                        let e = () => {
                                f.current = !0, document.addEventListener("pointerdown", t, {
                                    capture: !0,
                                    once: !0
                                }), document.addEventListener("pointermove", t, {
                                    capture: !0,
                                    once: !0
                                })
                            },
                            t = () => f.current = !1;
                        return document.addEventListener("keydown", e, {
                            capture: !0
                        }), () => {
                            document.removeEventListener("keydown", e, {
                                capture: !0
                            }), document.removeEventListener("pointerdown", t, {
                                capture: !0
                            }), document.removeEventListener("pointermove", t, {
                                capture: !0
                            })
                        }
                    }, []), (0, o.createElement)(h.fC, u, (0, o.createElement)(W, {
                        scope: t,
                        open: n,
                        onOpenChange: p,
                        content: c,
                        onContentChange: s
                    }, (0, o.createElement)(Z, {
                        scope: t,
                        onClose: (0, o.useCallback)(() => p(!1), [p]),
                        isUsingKeyboardRef: f,
                        dir: m,
                        modal: a
                    }, r)))
                },
                K = (0, o.forwardRef)((e, t) => {
                    let {
                        __scopeMenu: n,
                        ...l
                    } = e, i = I(n);
                    return (0, o.createElement)(h.ee, (0, r.Z)({}, i, l, {
                        ref: t
                    }))
                }),
                N = "MenuPortal",
                [z, U] = L(N, {
                    forceMount: void 0
                }),
                $ = e => {
                    let {
                        __scopeMenu: t,
                        forceMount: n,
                        children: r,
                        container: l
                    } = e, i = V(N, t);
                    return (0, o.createElement)(z, {
                        scope: t,
                        forceMount: n
                    }, (0, o.createElement)(w.z, {
                        present: n || i.open
                    }, (0, o.createElement)(g.h, {
                        asChild: !0,
                        container: l
                    }, r)))
                },
                G = "MenuContent",
                [j, X] = L(G),
                Y = (0, o.forwardRef)((e, t) => {
                    let n = U(G, e.__scopeMenu),
                        {
                            forceMount: l = n.forceMount,
                            ...i
                        } = e,
                        a = V(G, e.__scopeMenu),
                        u = B(G, e.__scopeMenu);
                    return (0, o.createElement)(T.Provider, {
                        scope: e.__scopeMenu
                    }, (0, o.createElement)(w.z, {
                        present: l || a.open
                    }, (0, o.createElement)(T.Slot, {
                        scope: e.__scopeMenu
                    }, u.modal ? (0, o.createElement)(q, (0, r.Z)({}, i, {
                        ref: t
                    })) : (0, o.createElement)(J, (0, r.Z)({}, i, {
                        ref: t
                    })))))
                }),
                q = (0, o.forwardRef)((e, t) => {
                    let n = V(G, e.__scopeMenu),
                        a = (0, o.useRef)(null),
                        u = (0, i.e)(t, a);
                    return (0, o.useEffect)(() => {
                        let e = a.current;
                        if (e) return (0, E.Ry)(e)
                    }, []), (0, o.createElement)(Q, (0, r.Z)({}, e, {
                        ref: u,
                        trapFocus: n.open,
                        disableOutsidePointerEvents: n.open,
                        disableOutsideScroll: !0,
                        onFocusOutside: (0, l.M)(e.onFocusOutside, e => e.preventDefault(), {
                            checkForDefaultPrevented: !1
                        }),
                        onDismiss: () => n.onOpenChange(!1)
                    }))
                }),
                J = (0, o.forwardRef)((e, t) => {
                    let n = V(G, e.__scopeMenu);
                    return (0, o.createElement)(Q, (0, r.Z)({}, e, {
                        ref: t,
                        trapFocus: !1,
                        disableOutsidePointerEvents: !1,
                        disableOutsideScroll: !1,
                        onDismiss: () => n.onOpenChange(!1)
                    }))
                }),
                Q = (0, o.forwardRef)((e, t) => {
                    let {
                        __scopeMenu: n,
                        loop: a = !1,
                        trapFocus: u,
                        onOpenAutoFocus: c,
                        onCloseAutoFocus: s,
                        disableOutsidePointerEvents: d,
                        onEntryFocus: v,
                        onEscapeKeyDown: g,
                        onPointerDownOutside: w,
                        onFocusOutside: x,
                        onInteractOutside: E,
                        onDismiss: R,
                        disableOutsideScroll: P,
                        ..._
                    } = e, D = V(G, n), T = B(G, n), O = I(n), L = F(n), A = k(n), [W, Z] = (0, o.useState)(null), H = (0, o.useRef)(null), K = (0, i.e)(t, H, D.onContentChange), N = (0, o.useRef)(0), z = (0, o.useRef)(""), U = (0, o.useRef)(0), $ = (0, o.useRef)(null), X = (0, o.useRef)("right"), Y = (0, o.useRef)(0), q = P ? C.Z : o.Fragment, J = P ? {
                        as: b.g7,
                        allowPinchZoom: !0
                    } : void 0, Q = e => {
                        var t, n;
                        let r = z.current + e,
                            o = A().filter(e => !e.disabled),
                            l = document.activeElement,
                            i = null === (t = o.find(e => e.ref.current === l)) || void 0 === t ? void 0 : t.textValue,
                            a = o.map(e => e.textValue),
                            u = function(e, t, n) {
                                var r;
                                let o = t.length > 1 && Array.from(t).every(e => e === t[0]),
                                    l = o ? t[0] : t,
                                    i = n ? e.indexOf(n) : -1,
                                    a = (r = Math.max(i, 0), e.map((t, n) => e[(r + n) % e.length])),
                                    u = 1 === l.length;
                                u && (a = a.filter(e => e !== n));
                                let c = a.find(e => e.toLowerCase().startsWith(l.toLowerCase()));
                                return c !== n ? c : void 0
                            }(a, r, i),
                            c = null === (n = o.find(e => e.textValue === u)) || void 0 === n ? void 0 : n.ref.current;
                        ! function e(t) {
                            z.current = t, window.clearTimeout(N.current), "" !== t && (N.current = window.setTimeout(() => e(""), 1e3))
                        }(r), c && setTimeout(() => c.focus())
                    };
                    (0, o.useEffect)(() => () => window.clearTimeout(N.current), []), (0, p.EW)();
                    let ee = (0, o.useCallback)(e => {
                        var t, n;
                        let r = X.current === (null === (t = $.current) || void 0 === t ? void 0 : t.side);
                        return r && function(e, t) {
                            if (!t) return !1;
                            let n = {
                                x: e.clientX,
                                y: e.clientY
                            };
                            return function(e, t) {
                                let {
                                    x: n,
                                    y: r
                                } = e, o = !1;
                                for (let e = 0, l = t.length - 1; e < t.length; l = e++) {
                                    let i = t[e].x,
                                        a = t[e].y,
                                        u = t[l].x,
                                        c = t[l].y,
                                        s = a > r != c > r && n < (u - i) * (r - a) / (c - a) + i;
                                    s && (o = !o)
                                }
                                return o
                            }(n, t)
                        }(e, null === (n = $.current) || void 0 === n ? void 0 : n.area)
                    }, []);
                    return (0, o.createElement)(j, {
                        scope: n,
                        searchRef: z,
                        onItemEnter: (0, o.useCallback)(e => {
                            ee(e) && e.preventDefault()
                        }, [ee]),
                        onItemLeave: (0, o.useCallback)(e => {
                            var t;
                            ee(e) || (null === (t = H.current) || void 0 === t || t.focus(), Z(null))
                        }, [ee]),
                        onTriggerLeave: (0, o.useCallback)(e => {
                            ee(e) && e.preventDefault()
                        }, [ee]),
                        pointerGraceTimerRef: U,
                        onPointerGraceIntentChange: (0, o.useCallback)(e => {
                            $.current = e
                        }, [])
                    }, (0, o.createElement)(q, J, (0, o.createElement)(m.M, {
                        asChild: !0,
                        trapped: u,
                        onMountAutoFocus: (0, l.M)(c, e => {
                            var t;
                            e.preventDefault(), null === (t = H.current) || void 0 === t || t.focus()
                        }),
                        onUnmountAutoFocus: s
                    }, (0, o.createElement)(f.XB, {
                        asChild: !0,
                        disableOutsidePointerEvents: d,
                        onEscapeKeyDown: g,
                        onPointerDownOutside: w,
                        onFocusOutside: x,
                        onInteractOutside: E,
                        onDismiss: R
                    }, (0, o.createElement)(y.fC, (0, r.Z)({
                        asChild: !0
                    }, L, {
                        dir: T.dir,
                        orientation: "vertical",
                        loop: a,
                        currentTabStopId: W,
                        onCurrentTabStopIdChange: Z,
                        onEntryFocus: (0, l.M)(v, e => {
                            T.isUsingKeyboardRef.current || e.preventDefault()
                        })
                    }), (0, o.createElement)(h.VY, (0, r.Z)({
                        role: "menu",
                        "aria-orientation": "vertical",
                        "data-state": eh(D.open),
                        "data-radix-menu-content": "",
                        dir: T.dir
                    }, O, _, {
                        ref: K,
                        style: {
                            outline: "none",
                            ..._.style
                        },
                        onKeyDown: (0, l.M)(_.onKeyDown, e => {
                            let t = e.target,
                                n = t.closest("[data-radix-menu-content]") === e.currentTarget,
                                r = e.ctrlKey || e.altKey || e.metaKey,
                                o = 1 === e.key.length;
                            n && ("Tab" === e.key && e.preventDefault(), !r && o && Q(e.key));
                            let l = H.current;
                            if (e.target !== l || !S.includes(e.key)) return;
                            e.preventDefault();
                            let i = A().filter(e => !e.disabled),
                                a = i.map(e => e.ref.current);
                            M.includes(e.key) && a.reverse(),
                                function(e) {
                                    let t = document.activeElement;
                                    for (let n of e)
                                        if (n === t || (n.focus(), document.activeElement !== t)) return
                                }(a)
                        }),
                        onBlur: (0, l.M)(e.onBlur, e => {
                            e.currentTarget.contains(e.target) || (window.clearTimeout(N.current), z.current = "")
                        }),
                        onPointerMove: (0, l.M)(e.onPointerMove, ey(e => {
                            let t = e.target,
                                n = Y.current !== e.clientX;
                            if (e.currentTarget.contains(t) && n) {
                                let t = e.clientX > Y.current ? "right" : "left";
                                X.current = t, Y.current = e.clientX
                            }
                        }))
                    })))))))
                }),
                ee = (0, o.forwardRef)((e, t) => {
                    let {
                        __scopeMenu: n,
                        ...l
                    } = e;
                    return (0, o.createElement)(c.WV.div, (0, r.Z)({
                        role: "group"
                    }, l, {
                        ref: t
                    }))
                }),
                et = (0, o.forwardRef)((e, t) => {
                    let {
                        __scopeMenu: n,
                        ...l
                    } = e;
                    return (0, o.createElement)(c.WV.div, (0, r.Z)({}, l, {
                        ref: t
                    }))
                }),
                en = "MenuItem",
                er = "menu.itemSelect",
                eo = (0, o.forwardRef)((e, t) => {
                    let {
                        disabled: n = !1,
                        onSelect: a,
                        ...u
                    } = e, s = (0, o.useRef)(null), d = B(en, e.__scopeMenu), f = X(en, e.__scopeMenu), p = (0, i.e)(t, s), m = (0, o.useRef)(!1), v = () => {
                        let e = s.current;
                        if (!n && e) {
                            let t = new CustomEvent(er, {
                                bubbles: !0,
                                cancelable: !0
                            });
                            e.addEventListener(er, e => null == a ? void 0 : a(e), {
                                once: !0
                            }), (0, c.jH)(e, t), t.defaultPrevented ? m.current = !1 : d.onClose()
                        }
                    };
                    return (0, o.createElement)(el, (0, r.Z)({}, u, {
                        ref: p,
                        disabled: n,
                        onClick: (0, l.M)(e.onClick, v),
                        onPointerDown: t => {
                            var n;
                            null === (n = e.onPointerDown) || void 0 === n || n.call(e, t), m.current = !0
                        },
                        onPointerUp: (0, l.M)(e.onPointerUp, e => {
                            var t;
                            m.current || null === (t = e.currentTarget) || void 0 === t || t.click()
                        }),
                        onKeyDown: (0, l.M)(e.onKeyDown, e => {
                            let t = "" !== f.searchRef.current;
                            !n && (!t || " " !== e.key) && R.includes(e.key) && (e.currentTarget.click(), e.preventDefault())
                        })
                    }))
                }),
                el = (0, o.forwardRef)((e, t) => {
                    let {
                        __scopeMenu: n,
                        disabled: a = !1,
                        textValue: u,
                        ...s
                    } = e, d = X(en, n), f = F(n), p = (0, o.useRef)(null), m = (0, i.e)(t, p), [v, h] = (0, o.useState)(!1), [g, w] = (0, o.useState)("");
                    return (0, o.useEffect)(() => {
                        let e = p.current;
                        if (e) {
                            var t;
                            w((null !== (t = e.textContent) && void 0 !== t ? t : "").trim())
                        }
                    }, [s.children]), (0, o.createElement)(T.ItemSlot, {
                        scope: n,
                        disabled: a,
                        textValue: null != u ? u : g
                    }, (0, o.createElement)(y.ck, (0, r.Z)({
                        asChild: !0
                    }, f, {
                        focusable: !a
                    }), (0, o.createElement)(c.WV.div, (0, r.Z)({
                        role: "menuitem",
                        "data-highlighted": v ? "" : void 0,
                        "aria-disabled": a || void 0,
                        "data-disabled": a ? "" : void 0
                    }, s, {
                        ref: m,
                        onPointerMove: (0, l.M)(e.onPointerMove, ey(e => {
                            if (a) d.onItemLeave(e);
                            else if (d.onItemEnter(e), !e.defaultPrevented) {
                                let t = e.currentTarget;
                                t.focus()
                            }
                        })),
                        onPointerLeave: (0, l.M)(e.onPointerLeave, ey(e => d.onItemLeave(e))),
                        onFocus: (0, l.M)(e.onFocus, () => h(!0)),
                        onBlur: (0, l.M)(e.onBlur, () => h(!1))
                    }))))
                }),
                [ei, ea] = ((e, t) => {
                    let {
                        checked: n = !1,
                        onCheckedChange: i,
                        ...a
                    } = e;
                    return (0, o.createElement)(ed, {
                        scope: e.__scopeMenu,
                        checked: n
                    }, (0, o.createElement)(eo, (0, r.Z)({
                        role: "menuitemcheckbox",
                        "aria-checked": eg(n) ? "mixed" : n
                    }, a, {
                        ref: t,
                        "data-state": ew(n),
                        onSelect: (0, l.M)(a.onSelect, () => null == i ? void 0 : i(!!eg(n) || !n), {
                            checkForDefaultPrevented: !1
                        })
                    })))
                }, L("MenuRadioGroup", {
                    value: void 0,
                    onValueChange: () => {}
                })),
                eu = (0, o.forwardRef)((e, t) => {
                    let {
                        value: n,
                        onValueChange: l,
                        ...i
                    } = e, a = (0, x.W)(l);
                    return (0, o.createElement)(ei, {
                        scope: e.__scopeMenu,
                        value: n,
                        onValueChange: a
                    }, (0, o.createElement)(ee, (0, r.Z)({}, i, {
                        ref: t
                    })))
                }),
                ec = (0, o.forwardRef)((e, t) => {
                    let {
                        value: n,
                        ...i
                    } = e, a = ea("MenuRadioItem", e.__scopeMenu), u = n === a.value;
                    return (0, o.createElement)(ed, {
                        scope: e.__scopeMenu,
                        checked: u
                    }, (0, o.createElement)(eo, (0, r.Z)({
                        role: "menuitemradio",
                        "aria-checked": u
                    }, i, {
                        ref: t,
                        "data-state": ew(u),
                        onSelect: (0, l.M)(i.onSelect, () => {
                            var e;
                            return null === (e = a.onValueChange) || void 0 === e ? void 0 : e.call(a, n)
                        }, {
                            checkForDefaultPrevented: !1
                        })
                    })))
                }),
                es = "MenuItemIndicator",
                [ed, ef] = L(es, {
                    checked: !1
                }),
                [ep, em] = ((e, t) => {
                    let {
                        __scopeMenu: n,
                        forceMount: l,
                        ...i
                    } = e, a = ef(es, n);
                    return (0, o.createElement)(w.z, {
                        present: l || eg(a.checked) || !0 === a.checked
                    }, (0, o.createElement)(c.WV.span, (0, r.Z)({}, i, {
                        ref: t,
                        "data-state": ew(a.checked)
                    })))
                }, L("MenuSub")),
                ev = "MenuSubTrigger";

            function eh(e) {
                return e ? "open" : "closed"
            }

            function eg(e) {
                return "indeterminate" === e
            }

            function ew(e) {
                return eg(e) ? "indeterminate" : e ? "checked" : "unchecked"
            }

            function ey(e) {
                return t => "mouse" === t.pointerType ? e(t) : void 0
            }(e, t) => {
                let n = V(ev, e.__scopeMenu),
                    a = B(ev, e.__scopeMenu),
                    u = em(ev, e.__scopeMenu),
                    c = X(ev, e.__scopeMenu),
                    s = (0, o.useRef)(null),
                    {
                        pointerGraceTimerRef: d,
                        onPointerGraceIntentChange: f
                    } = c,
                    p = {
                        __scopeMenu: e.__scopeMenu
                    },
                    m = (0, o.useCallback)(() => {
                        s.current && window.clearTimeout(s.current), s.current = null
                    }, []);
                return (0, o.useEffect)(() => m, [m]), (0, o.useEffect)(() => {
                    let e = d.current;
                    return () => {
                        window.clearTimeout(e), f(null)
                    }
                }, [d, f]), (0, o.createElement)(K, (0, r.Z)({
                    asChild: !0
                }, p), (0, o.createElement)(el, (0, r.Z)({
                    id: u.triggerId,
                    "aria-haspopup": "menu",
                    "aria-expanded": n.open,
                    "aria-controls": u.contentId,
                    "data-state": eh(n.open)
                }, e, {
                    ref: (0, i.F)(t, u.onTriggerChange),
                    onClick: t => {
                        var r;
                        null === (r = e.onClick) || void 0 === r || r.call(e, t), e.disabled || t.defaultPrevented || (t.currentTarget.focus(), n.open || n.onOpenChange(!0))
                    },
                    onPointerMove: (0, l.M)(e.onPointerMove, ey(t => {
                        c.onItemEnter(t), t.defaultPrevented || e.disabled || n.open || s.current || (c.onPointerGraceIntentChange(null), s.current = window.setTimeout(() => {
                            n.onOpenChange(!0), m()
                        }, 100))
                    })),
                    onPointerLeave: (0, l.M)(e.onPointerLeave, ey(e => {
                        var t, r;
                        m();
                        let o = null === (t = n.content) || void 0 === t ? void 0 : t.getBoundingClientRect();
                        if (o) {
                            let t = null === (r = n.content) || void 0 === r ? void 0 : r.dataset.side,
                                l = "right" === t,
                                i = o[l ? "left" : "right"],
                                a = o[l ? "right" : "left"];
                            c.onPointerGraceIntentChange({
                                area: [{
                                    x: e.clientX + (l ? -5 : 5),
                                    y: e.clientY
                                }, {
                                    x: i,
                                    y: o.top
                                }, {
                                    x: a,
                                    y: o.top
                                }, {
                                    x: a,
                                    y: o.bottom
                                }, {
                                    x: i,
                                    y: o.bottom
                                }],
                                side: t
                            }), window.clearTimeout(d.current), d.current = window.setTimeout(() => c.onPointerGraceIntentChange(null), 300)
                        } else {
                            if (c.onTriggerLeave(e), e.defaultPrevented) return;
                            c.onPointerGraceIntentChange(null)
                        }
                    })),
                    onKeyDown: (0, l.M)(e.onKeyDown, t => {
                        let r = "" !== c.searchRef.current;
                        if (!e.disabled && (!r || " " !== t.key) && P[a.dir].includes(t.key)) {
                            var o;
                            n.onOpenChange(!0), null === (o = n.content) || void 0 === o || o.focus(), t.preventDefault()
                        }
                    })
                })))
            }, (e, t) => {
                let n = U(G, e.__scopeMenu),
                    {
                        forceMount: a = n.forceMount,
                        ...u
                    } = e,
                    c = V(G, e.__scopeMenu),
                    s = B(G, e.__scopeMenu),
                    d = em("MenuSubContent", e.__scopeMenu),
                    f = (0, o.useRef)(null),
                    p = (0, i.e)(t, f);
                return (0, o.createElement)(T.Provider, {
                    scope: e.__scopeMenu
                }, (0, o.createElement)(w.z, {
                    present: a || c.open
                }, (0, o.createElement)(T.Slot, {
                    scope: e.__scopeMenu
                }, (0, o.createElement)(Q, (0, r.Z)({
                    id: d.contentId,
                    "aria-labelledby": d.triggerId
                }, u, {
                    ref: p,
                    align: "start",
                    side: "rtl" === s.dir ? "left" : "right",
                    disableOutsidePointerEvents: !1,
                    disableOutsideScroll: !1,
                    trapFocus: !1,
                    onOpenAutoFocus: e => {
                        var t;
                        s.isUsingKeyboardRef.current && (null === (t = f.current) || void 0 === t || t.focus()), e.preventDefault()
                    },
                    onCloseAutoFocus: e => e.preventDefault(),
                    onFocusOutside: (0, l.M)(e.onFocusOutside, e => {
                        e.target !== d.trigger && c.onOpenChange(!1)
                    }),
                    onEscapeKeyDown: (0, l.M)(e.onEscapeKeyDown, e => {
                        s.onClose(), e.preventDefault()
                    }),
                    onKeyDown: (0, l.M)(e.onKeyDown, e => {
                        let t = e.currentTarget.contains(e.target),
                            n = _[s.dir].includes(e.key);
                        if (t && n) {
                            var r;
                            c.onOpenChange(!1), null === (r = d.trigger) || void 0 === r || r.focus(), e.preventDefault()
                        }
                    })
                })))))
            };
            let eb = "DropdownMenu",
                [ex, eE] = (0, a.b)(eb, [A]),
                eC = A(),
                [eR, eM] = ex(eb),
                eS = e => {
                    let {
                        __scopeDropdownMenu: t,
                        children: n,
                        dir: l,
                        open: i,
                        defaultOpen: a,
                        onOpenChange: c,
                        modal: s = !0
                    } = e, d = eC(t), f = (0, o.useRef)(null), [p = !1, m] = (0, u.T)({
                        prop: i,
                        defaultProp: a,
                        onChange: c
                    });
                    return (0, o.createElement)(eR, {
                        scope: t,
                        triggerId: (0, v.M)(),
                        triggerRef: f,
                        contentId: (0, v.M)(),
                        open: p,
                        onOpenChange: m,
                        onOpenToggle: (0, o.useCallback)(() => m(e => !e), [m]),
                        modal: s
                    }, (0, o.createElement)(H, (0, r.Z)({}, d, {
                        open: p,
                        onOpenChange: m,
                        dir: l,
                        modal: s
                    }), n))
                },
                eP = (0, o.forwardRef)((e, t) => {
                    let {
                        __scopeDropdownMenu: n,
                        disabled: a = !1,
                        ...u
                    } = e, s = eM("DropdownMenuTrigger", n), d = eC(n);
                    return (0, o.createElement)(K, (0, r.Z)({
                        asChild: !0
                    }, d), (0, o.createElement)(c.WV.button, (0, r.Z)({
                        type: "button",
                        id: s.triggerId,
                        "aria-haspopup": "menu",
                        "aria-expanded": s.open,
                        "aria-controls": s.open ? s.contentId : void 0,
                        "data-state": s.open ? "open" : "closed",
                        "data-disabled": a ? "" : void 0,
                        disabled: a
                    }, u, {
                        ref: (0, i.F)(t, s.triggerRef),
                        onPointerDown: (0, l.M)(e.onPointerDown, e => {
                            a || 0 !== e.button || !1 !== e.ctrlKey || (s.onOpenToggle(), s.open || e.preventDefault())
                        }),
                        onKeyDown: (0, l.M)(e.onKeyDown, e => {
                            !a && (["Enter", " "].includes(e.key) && s.onOpenToggle(), "ArrowDown" === e.key && s.onOpenChange(!0), ["Enter", " ", "ArrowDown"].includes(e.key) && e.preventDefault())
                        })
                    })))
                }),
                e_ = e => {
                    let {
                        __scopeDropdownMenu: t,
                        ...n
                    } = e, l = eC(t);
                    return (0, o.createElement)($, (0, r.Z)({}, l, n))
                },
                eD = (0, o.forwardRef)((e, t) => {
                    let {
                        __scopeDropdownMenu: n,
                        ...i
                    } = e, a = eM("DropdownMenuContent", n), u = eC(n), c = (0, o.useRef)(!1);
                    return (0, o.createElement)(Y, (0, r.Z)({
                        id: a.contentId,
                        "aria-labelledby": a.triggerId
                    }, u, i, {
                        ref: t,
                        onCloseAutoFocus: (0, l.M)(e.onCloseAutoFocus, e => {
                            var t;
                            c.current || null === (t = a.triggerRef.current) || void 0 === t || t.focus(), c.current = !1, e.preventDefault()
                        }),
                        onInteractOutside: (0, l.M)(e.onInteractOutside, e => {
                            let t = e.detail.originalEvent,
                                n = 0 === t.button && !0 === t.ctrlKey,
                                r = 2 === t.button || n;
                            (!a.modal || r) && (c.current = !0)
                        }),
                        style: { ...e.style,
                            "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
                            "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
                            "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
                            "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
                            "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
                        }
                    }))
                }),
                eT = (0, o.forwardRef)((e, t) => {
                    let {
                        __scopeDropdownMenu: n,
                        ...l
                    } = e, i = eC(n);
                    return (0, o.createElement)(et, (0, r.Z)({}, i, l, {
                        ref: t
                    }))
                }),
                ek = (0, o.forwardRef)((e, t) => {
                    let {
                        __scopeDropdownMenu: n,
                        ...l
                    } = e, i = eC(n);
                    return (0, o.createElement)(eo, (0, r.Z)({}, i, l, {
                        ref: t
                    }))
                }),
                eO = (0, o.forwardRef)((e, t) => {
                    let {
                        __scopeDropdownMenu: n,
                        ...l
                    } = e, i = eC(n);
                    return (0, o.createElement)(eu, (0, r.Z)({}, i, l, {
                        ref: t
                    }))
                }),
                eL = (0, o.forwardRef)((e, t) => {
                    let {
                        __scopeDropdownMenu: n,
                        ...l
                    } = e, i = eC(n);
                    return (0, o.createElement)(ec, (0, r.Z)({}, i, l, {
                        ref: t
                    }))
                }),
                eA = eS,
                eI = eP,
                eF = e_,
                eW = eD,
                eV = eT,
                eZ = ek,
                eB = eO,
                eH = eL
        },
        83208: function(e, t, n) {
            n.d(t, {
                Pc: function() {
                    return x
                },
                ck: function() {
                    return T
                },
                fC: function() {
                    return D
                }
            });
            var r = n(45675),
                o = n(70079),
                l = n(72901),
                i = n(68539),
                a = n(49270),
                u = n(36646),
                c = n(88817),
                s = n(39073),
                d = n(9137),
                f = n(86004),
                p = n(28036);
            let m = "rovingFocusGroup.onEntryFocus",
                v = {
                    bubbles: !1,
                    cancelable: !0
                },
                h = "RovingFocusGroup",
                [g, w, y] = (0, i.B)(h),
                [b, x] = (0, u.b)(h, [y]),
                [E, C] = b(h),
                R = (0, o.forwardRef)((e, t) => (0, o.createElement)(g.Provider, {
                    scope: e.__scopeRovingFocusGroup
                }, (0, o.createElement)(g.Slot, {
                    scope: e.__scopeRovingFocusGroup
                }, (0, o.createElement)(M, (0, r.Z)({}, e, {
                    ref: t
                }))))),
                M = (0, o.forwardRef)((e, t) => {
                    let {
                        __scopeRovingFocusGroup: n,
                        orientation: i,
                        loop: u = !1,
                        dir: c,
                        currentTabStopId: h,
                        defaultCurrentTabStopId: g,
                        onCurrentTabStopIdChange: y,
                        onEntryFocus: b,
                        ...x
                    } = e, C = (0, o.useRef)(null), R = (0, a.e)(t, C), M = (0, p.gm)(c), [S = null, P] = (0, f.T)({
                        prop: h,
                        defaultProp: g,
                        onChange: y
                    }), [D, T] = (0, o.useState)(!1), k = (0, d.W)(b), O = w(n), L = (0, o.useRef)(!1), [A, I] = (0, o.useState)(0);
                    return (0, o.useEffect)(() => {
                        let e = C.current;
                        if (e) return e.addEventListener(m, k), () => e.removeEventListener(m, k)
                    }, [k]), (0, o.createElement)(E, {
                        scope: n,
                        orientation: i,
                        dir: M,
                        loop: u,
                        currentTabStopId: S,
                        onItemFocus: (0, o.useCallback)(e => P(e), [P]),
                        onItemShiftTab: (0, o.useCallback)(() => T(!0), []),
                        onFocusableItemAdd: (0, o.useCallback)(() => I(e => e + 1), []),
                        onFocusableItemRemove: (0, o.useCallback)(() => I(e => e - 1), [])
                    }, (0, o.createElement)(s.WV.div, (0, r.Z)({
                        tabIndex: D || 0 === A ? -1 : 0,
                        "data-orientation": i
                    }, x, {
                        ref: R,
                        style: {
                            outline: "none",
                            ...e.style
                        },
                        onMouseDown: (0, l.M)(e.onMouseDown, () => {
                            L.current = !0
                        }),
                        onFocus: (0, l.M)(e.onFocus, e => {
                            let t = !L.current;
                            if (e.target === e.currentTarget && t && !D) {
                                let t = new CustomEvent(m, v);
                                if (e.currentTarget.dispatchEvent(t), !t.defaultPrevented) {
                                    let e = O().filter(e => e.focusable),
                                        t = e.find(e => e.active),
                                        n = e.find(e => e.id === S),
                                        r = [t, n, ...e].filter(Boolean),
                                        o = r.map(e => e.ref.current);
                                    _(o)
                                }
                            }
                            L.current = !1
                        }),
                        onBlur: (0, l.M)(e.onBlur, () => T(!1))
                    })))
                }),
                S = (0, o.forwardRef)((e, t) => {
                    let {
                        __scopeRovingFocusGroup: n,
                        focusable: i = !0,
                        active: a = !1,
                        tabStopId: u,
                        ...d
                    } = e, f = (0, c.M)(), p = u || f, m = C("RovingFocusGroupItem", n), v = m.currentTabStopId === p, h = w(n), {
                        onFocusableItemAdd: y,
                        onFocusableItemRemove: b
                    } = m;
                    return (0, o.useEffect)(() => {
                        if (i) return y(), () => b()
                    }, [i, y, b]), (0, o.createElement)(g.ItemSlot, {
                        scope: n,
                        id: p,
                        focusable: i,
                        active: a
                    }, (0, o.createElement)(s.WV.span, (0, r.Z)({
                        tabIndex: v ? 0 : -1,
                        "data-orientation": m.orientation
                    }, d, {
                        ref: t,
                        onMouseDown: (0, l.M)(e.onMouseDown, e => {
                            i ? m.onItemFocus(p) : e.preventDefault()
                        }),
                        onFocus: (0, l.M)(e.onFocus, () => m.onItemFocus(p)),
                        onKeyDown: (0, l.M)(e.onKeyDown, e => {
                            if ("Tab" === e.key && e.shiftKey) {
                                m.onItemShiftTab();
                                return
                            }
                            if (e.target !== e.currentTarget) return;
                            let t = function(e, t, n) {
                                var r;
                                let o = (r = e.key, "rtl" !== n ? r : "ArrowLeft" === r ? "ArrowRight" : "ArrowRight" === r ? "ArrowLeft" : r);
                                if (!("vertical" === t && ["ArrowLeft", "ArrowRight"].includes(o)) && !("horizontal" === t && ["ArrowUp", "ArrowDown"].includes(o))) return P[o]
                            }(e, m.orientation, m.dir);
                            if (void 0 !== t) {
                                e.preventDefault();
                                let o = h().filter(e => e.focusable),
                                    l = o.map(e => e.ref.current);
                                if ("last" === t) l.reverse();
                                else if ("prev" === t || "next" === t) {
                                    var n, r;
                                    "prev" === t && l.reverse();
                                    let o = l.indexOf(e.currentTarget);
                                    l = m.loop ? (n = l, r = o + 1, n.map((e, t) => n[(r + t) % n.length])) : l.slice(o + 1)
                                }
                                setTimeout(() => _(l))
                            }
                        })
                    })))
                }),
                P = {
                    ArrowLeft: "prev",
                    ArrowUp: "prev",
                    ArrowRight: "next",
                    ArrowDown: "next",
                    PageUp: "first",
                    Home: "first",
                    PageDown: "last",
                    End: "last"
                };

            function _(e) {
                let t = document.activeElement;
                for (let n of e)
                    if (n === t || (n.focus(), document.activeElement !== t)) return
            }
            let D = R,
                T = S
        },
        84256: function(e, t, n) {
            function r(e) {
                return e.split("-")[1]
            }

            function o(e) {
                return "y" === e ? "height" : "width"
            }

            function l(e) {
                return e.split("-")[0]
            }

            function i(e) {
                return ["top", "bottom"].includes(l(e)) ? "x" : "y"
            }

            function a(e, t, n) {
                let a, {
                        reference: u,
                        floating: c
                    } = e,
                    s = u.x + u.width / 2 - c.width / 2,
                    d = u.y + u.height / 2 - c.height / 2,
                    f = i(t),
                    p = o(f),
                    m = u[p] / 2 - c[p] / 2,
                    v = "x" === f;
                switch (l(t)) {
                    case "top":
                        a = {
                            x: s,
                            y: u.y - c.height
                        };
                        break;
                    case "bottom":
                        a = {
                            x: s,
                            y: u.y + u.height
                        };
                        break;
                    case "right":
                        a = {
                            x: u.x + u.width,
                            y: d
                        };
                        break;
                    case "left":
                        a = {
                            x: u.x - c.width,
                            y: d
                        };
                        break;
                    default:
                        a = {
                            x: u.x,
                            y: u.y
                        }
                }
                switch (r(t)) {
                    case "start":
                        a[f] -= m * (n && v ? -1 : 1);
                        break;
                    case "end":
                        a[f] += m * (n && v ? -1 : 1)
                }
                return a
            }
            n.d(t, {
                Cp: function() {
                    return C
                },
                JB: function() {
                    return s
                },
                RR: function() {
                    return b
                },
                cv: function() {
                    return R
                },
                dp: function() {
                    return _
                },
                dr: function() {
                    return P
                },
                oo: function() {
                    return u
                },
                uY: function() {
                    return S
                },
                x7: function() {
                    return m
                }
            });
            let u = async (e, t, n) => {
                let {
                    placement: r = "bottom",
                    strategy: o = "absolute",
                    middleware: l = [],
                    platform: i
                } = n, u = l.filter(Boolean), c = await (null == i.isRTL ? void 0 : i.isRTL(t)), s = await i.getElementRects({
                    reference: e,
                    floating: t,
                    strategy: o
                }), {
                    x: d,
                    y: f
                } = a(s, r, c), p = r, m = {}, v = 0;
                for (let n = 0; n < u.length; n++) {
                    let {
                        name: l,
                        fn: h
                    } = u[n], {
                        x: g,
                        y: w,
                        data: y,
                        reset: b
                    } = await h({
                        x: d,
                        y: f,
                        initialPlacement: r,
                        placement: p,
                        strategy: o,
                        middlewareData: m,
                        rects: s,
                        platform: i,
                        elements: {
                            reference: e,
                            floating: t
                        }
                    });
                    d = null != g ? g : d, f = null != w ? w : f, m = { ...m,
                        [l]: { ...m[l],
                            ...y
                        }
                    }, b && v <= 50 && (v++, "object" == typeof b && (b.placement && (p = b.placement), b.rects && (s = !0 === b.rects ? await i.getElementRects({
                        reference: e,
                        floating: t,
                        strategy: o
                    }) : b.rects), {
                        x: d,
                        y: f
                    } = a(s, p, c)), n = -1)
                }
                return {
                    x: d,
                    y: f,
                    placement: p,
                    strategy: o,
                    middlewareData: m
                }
            };

            function c(e) {
                return "number" != typeof e ? {
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0,
                    ...e
                } : {
                    top: e,
                    right: e,
                    bottom: e,
                    left: e
                }
            }

            function s(e) {
                return { ...e,
                    top: e.y,
                    left: e.x,
                    right: e.x + e.width,
                    bottom: e.y + e.height
                }
            }
            async function d(e, t) {
                var n;
                void 0 === t && (t = {});
                let {
                    x: r,
                    y: o,
                    platform: l,
                    rects: i,
                    elements: a,
                    strategy: u
                } = e, {
                    boundary: d = "clippingAncestors",
                    rootBoundary: f = "viewport",
                    elementContext: p = "floating",
                    altBoundary: m = !1,
                    padding: v = 0
                } = t, h = c(v), g = a[m ? "floating" === p ? "reference" : "floating" : p], w = s(await l.getClippingRect({
                    element: null == (n = await (null == l.isElement ? void 0 : l.isElement(g))) || n ? g : g.contextElement || await (null == l.getDocumentElement ? void 0 : l.getDocumentElement(a.floating)),
                    boundary: d,
                    rootBoundary: f,
                    strategy: u
                })), y = "floating" === p ? { ...i.floating,
                    x: r,
                    y: o
                } : i.reference, b = await (null == l.getOffsetParent ? void 0 : l.getOffsetParent(a.floating)), x = await (null == l.isElement ? void 0 : l.isElement(b)) && await (null == l.getScale ? void 0 : l.getScale(b)) || {
                    x: 1,
                    y: 1
                }, E = s(l.convertOffsetParentRelativeRectToViewportRelativeRect ? await l.convertOffsetParentRelativeRectToViewportRelativeRect({
                    rect: y,
                    offsetParent: b,
                    strategy: u
                }) : y);
                return {
                    top: (w.top - E.top + h.top) / x.y,
                    bottom: (E.bottom - w.bottom + h.bottom) / x.y,
                    left: (w.left - E.left + h.left) / x.x,
                    right: (E.right - w.right + h.right) / x.x
                }
            }
            let f = Math.min,
                p = Math.max,
                m = e => ({
                    name: "arrow",
                    options: e,
                    async fn(t) {
                        let {
                            element: n,
                            padding: l = 0
                        } = e || {}, {
                            x: a,
                            y: u,
                            placement: s,
                            rects: d,
                            platform: m,
                            elements: v
                        } = t;
                        if (null == n) return {};
                        let h = c(l),
                            g = {
                                x: a,
                                y: u
                            },
                            w = i(s),
                            y = o(w),
                            b = await m.getDimensions(n),
                            x = "y" === w,
                            E = x ? "top" : "left",
                            C = x ? "bottom" : "right",
                            R = x ? "clientHeight" : "clientWidth",
                            M = d.reference[y] + d.reference[w] - g[w] - d.floating[y],
                            S = g[w] - d.reference[w],
                            P = await (null == m.getOffsetParent ? void 0 : m.getOffsetParent(n)),
                            _ = P ? P[R] : 0;
                        _ && await (null == m.isElement ? void 0 : m.isElement(P)) || (_ = v.floating[R] || d.floating[y]);
                        let D = h[E],
                            T = _ - b[y] - h[C],
                            k = _ / 2 - b[y] / 2 + (M / 2 - S / 2),
                            O = p(D, f(k, T)),
                            L = null != r(s) && k != O && d.reference[y] / 2 - (k < D ? h[E] : h[C]) - b[y] / 2 < 0;
                        return {
                            [w]: g[w] - (L ? k < D ? D - k : T - k : 0),
                            data: {
                                [w]: O,
                                centerOffset: k - O
                            }
                        }
                    }
                }),
                v = ["top", "right", "bottom", "left"],
                h = (v.reduce((e, t) => e.concat(t, t + "-start", t + "-end"), []), {
                    left: "right",
                    right: "left",
                    bottom: "top",
                    top: "bottom"
                });

            function g(e) {
                return e.replace(/left|right|bottom|top/g, e => h[e])
            }
            let w = {
                start: "end",
                end: "start"
            };

            function y(e) {
                return e.replace(/start|end/g, e => w[e])
            }
            let b = function(e) {
                return void 0 === e && (e = {}), {
                    name: "flip",
                    options: e,
                    async fn(t) {
                        var n, a, u, c;
                        let {
                            placement: s,
                            middlewareData: f,
                            rects: p,
                            initialPlacement: m,
                            platform: v,
                            elements: h
                        } = t, {
                            mainAxis: w = !0,
                            crossAxis: b = !0,
                            fallbackPlacements: x,
                            fallbackStrategy: E = "bestFit",
                            fallbackAxisSideDirection: C = "none",
                            flipAlignment: R = !0,
                            ...M
                        } = e, S = l(s), P = l(m) === m, _ = await (null == v.isRTL ? void 0 : v.isRTL(h.floating)), D = x || (P || !R ? [g(m)] : function(e) {
                            let t = g(e);
                            return [y(e), t, y(t)]
                        }(m));
                        x || "none" === C || D.push(... function(e, t, n, o) {
                            let i = r(e),
                                a = function(e, t, n) {
                                    let r = ["left", "right"],
                                        o = ["right", "left"];
                                    switch (e) {
                                        case "top":
                                        case "bottom":
                                            return n ? t ? o : r : t ? r : o;
                                        case "left":
                                        case "right":
                                            return t ? ["top", "bottom"] : ["bottom", "top"];
                                        default:
                                            return []
                                    }
                                }(l(e), "start" === n, o);
                            return i && (a = a.map(e => e + "-" + i), t && (a = a.concat(a.map(y)))), a
                        }(m, R, C, _));
                        let T = [m, ...D],
                            k = await d(t, M),
                            O = [],
                            L = (null == (n = f.flip) ? void 0 : n.overflows) || [];
                        if (w && O.push(k[S]), b) {
                            let {
                                main: e,
                                cross: t
                            } = function(e, t, n) {
                                void 0 === n && (n = !1);
                                let l = r(e),
                                    a = i(e),
                                    u = o(a),
                                    c = "x" === a ? l === (n ? "end" : "start") ? "right" : "left" : "start" === l ? "bottom" : "top";
                                return t.reference[u] > t.floating[u] && (c = g(c)), {
                                    main: c,
                                    cross: g(c)
                                }
                            }(s, p, _);
                            O.push(k[e], k[t])
                        }
                        if (L = [...L, {
                                placement: s,
                                overflows: O
                            }], !O.every(e => e <= 0)) {
                            let e = ((null == (a = f.flip) ? void 0 : a.index) || 0) + 1,
                                t = T[e];
                            if (t) return {
                                data: {
                                    index: e,
                                    overflows: L
                                },
                                reset: {
                                    placement: t
                                }
                            };
                            let n = null == (u = L.filter(e => e.overflows[0] <= 0).sort((e, t) => e.overflows[1] - t.overflows[1])[0]) ? void 0 : u.placement;
                            if (!n) switch (E) {
                                case "bestFit":
                                    {
                                        let e = null == (c = L.map(e => [e.placement, e.overflows.filter(e => e > 0).reduce((e, t) => e + t, 0)]).sort((e, t) => e[1] - t[1])[0]) ? void 0 : c[0];e && (n = e);
                                        break
                                    }
                                case "initialPlacement":
                                    n = m
                            }
                            if (s !== n) return {
                                reset: {
                                    placement: n
                                }
                            }
                        }
                        return {}
                    }
                }
            };

            function x(e, t) {
                return {
                    top: e.top - t.height,
                    right: e.right - t.width,
                    bottom: e.bottom - t.height,
                    left: e.left - t.width
                }
            }

            function E(e) {
                return v.some(t => e[t] >= 0)
            }
            let C = function(e) {
                    return void 0 === e && (e = {}), {
                        name: "hide",
                        options: e,
                        async fn(t) {
                            let {
                                strategy: n = "referenceHidden",
                                ...r
                            } = e, {
                                rects: o
                            } = t;
                            switch (n) {
                                case "referenceHidden":
                                    {
                                        let e = x(await d(t, { ...r,
                                            elementContext: "reference"
                                        }), o.reference);
                                        return {
                                            data: {
                                                referenceHiddenOffsets: e,
                                                referenceHidden: E(e)
                                            }
                                        }
                                    }
                                case "escaped":
                                    {
                                        let e = x(await d(t, { ...r,
                                            altBoundary: !0
                                        }), o.floating);
                                        return {
                                            data: {
                                                escapedOffsets: e,
                                                escaped: E(e)
                                            }
                                        }
                                    }
                                default:
                                    return {}
                            }
                        }
                    }
                },
                R = function(e) {
                    return void 0 === e && (e = 0), {
                        name: "offset",
                        options: e,
                        async fn(t) {
                            let {
                                x: n,
                                y: o
                            } = t, a = await async function(e, t) {
                                let {
                                    placement: n,
                                    platform: o,
                                    elements: a
                                } = e, u = await (null == o.isRTL ? void 0 : o.isRTL(a.floating)), c = l(n), s = r(n), d = "x" === i(n), f = ["left", "top"].includes(c) ? -1 : 1, p = u && d ? -1 : 1, m = "function" == typeof t ? t(e) : t, {
                                    mainAxis: v,
                                    crossAxis: h,
                                    alignmentAxis: g
                                } = "number" == typeof m ? {
                                    mainAxis: m,
                                    crossAxis: 0,
                                    alignmentAxis: null
                                } : {
                                    mainAxis: 0,
                                    crossAxis: 0,
                                    alignmentAxis: null,
                                    ...m
                                };
                                return s && "number" == typeof g && (h = "end" === s ? -1 * g : g), d ? {
                                    x: h * p,
                                    y: v * f
                                } : {
                                    x: v * f,
                                    y: h * p
                                }
                            }(t, e);
                            return {
                                x: n + a.x,
                                y: o + a.y,
                                data: a
                            }
                        }
                    }
                };

            function M(e) {
                return "x" === e ? "y" : "x"
            }
            let S = function(e) {
                    return void 0 === e && (e = {}), {
                        name: "shift",
                        options: e,
                        async fn(t) {
                            let {
                                x: n,
                                y: r,
                                placement: o
                            } = t, {
                                mainAxis: a = !0,
                                crossAxis: u = !1,
                                limiter: c = {
                                    fn: e => {
                                        let {
                                            x: t,
                                            y: n
                                        } = e;
                                        return {
                                            x: t,
                                            y: n
                                        }
                                    }
                                },
                                ...s
                            } = e, m = {
                                x: n,
                                y: r
                            }, v = await d(t, s), h = i(l(o)), g = M(h), w = m[h], y = m[g];
                            a && (w = p(w + v["y" === h ? "top" : "left"], f(w, w - v["y" === h ? "bottom" : "right"]))), u && (y = p(y + v["y" === g ? "top" : "left"], f(y, y - v["y" === g ? "bottom" : "right"])));
                            let b = c.fn({ ...t,
                                [h]: w,
                                [g]: y
                            });
                            return { ...b,
                                data: {
                                    x: b.x - n,
                                    y: b.y - r
                                }
                            }
                        }
                    }
                },
                P = function(e) {
                    return void 0 === e && (e = {}), {
                        options: e,
                        fn(t) {
                            let {
                                x: n,
                                y: r,
                                placement: o,
                                rects: a,
                                middlewareData: u
                            } = t, {
                                offset: c = 0,
                                mainAxis: s = !0,
                                crossAxis: d = !0
                            } = e, f = {
                                x: n,
                                y: r
                            }, p = i(o), m = M(p), v = f[p], h = f[m], g = "function" == typeof c ? c(t) : c, w = "number" == typeof g ? {
                                mainAxis: g,
                                crossAxis: 0
                            } : {
                                mainAxis: 0,
                                crossAxis: 0,
                                ...g
                            };
                            if (s) {
                                let e = "y" === p ? "height" : "width",
                                    t = a.reference[p] - a.floating[e] + w.mainAxis,
                                    n = a.reference[p] + a.reference[e] - w.mainAxis;
                                v < t ? v = t : v > n && (v = n)
                            }
                            if (d) {
                                var y, b;
                                let e = "y" === p ? "width" : "height",
                                    t = ["top", "left"].includes(l(o)),
                                    n = a.reference[m] - a.floating[e] + (t && (null == (y = u.offset) ? void 0 : y[m]) || 0) + (t ? 0 : w.crossAxis),
                                    r = a.reference[m] + a.reference[e] + (t ? 0 : (null == (b = u.offset) ? void 0 : b[m]) || 0) - (t ? w.crossAxis : 0);
                                h < n ? h = n : h > r && (h = r)
                            }
                            return {
                                [p]: v,
                                [m]: h
                            }
                        }
                    }
                },
                _ = function(e) {
                    return void 0 === e && (e = {}), {
                        name: "size",
                        options: e,
                        async fn(t) {
                            let n, o;
                            let {
                                placement: a,
                                rects: u,
                                platform: c,
                                elements: s
                            } = t, {
                                apply: m = () => {},
                                ...v
                            } = e, h = await d(t, v), g = l(a), w = r(a), y = "x" === i(a), {
                                width: b,
                                height: x
                            } = u.floating;
                            "top" === g || "bottom" === g ? (n = g, o = w === (await (null == c.isRTL ? void 0 : c.isRTL(s.floating)) ? "start" : "end") ? "left" : "right") : (o = g, n = "end" === w ? "top" : "bottom");
                            let E = x - h[n],
                                C = b - h[o],
                                R = !t.middlewareData.shift,
                                M = E,
                                S = C;
                            if (y) {
                                let e = b - h.left - h.right;
                                S = w || R ? f(C, e) : e
                            } else {
                                let e = x - h.top - h.bottom;
                                M = w || R ? f(E, e) : e
                            }
                            if (R && !w) {
                                let e = p(h.left, 0),
                                    t = p(h.right, 0),
                                    n = p(h.top, 0),
                                    r = p(h.bottom, 0);
                                y ? S = b - 2 * (0 !== e || 0 !== t ? e + t : p(h.left, h.right)) : M = x - 2 * (0 !== n || 0 !== r ? n + r : p(h.top, h.bottom))
                            }
                            await m({ ...t,
                                availableWidth: S,
                                availableHeight: M
                            });
                            let P = await c.getDimensions(s.floating);
                            return b !== P.width || x !== P.height ? {
                                reset: {
                                    rects: !0
                                }
                            } : {}
                        }
                    }
                }
        },
        88905: function(e, t, n) {
            n.d(t, {
                Me: function() {
                    return A
                },
                oo: function() {
                    return I
                }
            });
            var r = n(84256);

            function o(e) {
                var t;
                return (null == (t = e.ownerDocument) ? void 0 : t.defaultView) || window
            }

            function l(e) {
                return o(e).getComputedStyle(e)
            }

            function i(e) {
                return e instanceof o(e).Node
            }

            function a(e) {
                return i(e) ? (e.nodeName || "").toLowerCase() : ""
            }

            function u(e) {
                return e instanceof o(e).HTMLElement
            }

            function c(e) {
                return e instanceof o(e).Element
            }

            function s(e) {
                return "undefined" != typeof ShadowRoot && (e instanceof o(e).ShadowRoot || e instanceof ShadowRoot)
            }

            function d(e) {
                let {
                    overflow: t,
                    overflowX: n,
                    overflowY: r,
                    display: o
                } = l(e);
                return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(o)
            }

            function f(e) {
                let t = p(),
                    n = l(e);
                return "none" !== n.transform || "none" !== n.perspective || !t && !!n.backdropFilter && "none" !== n.backdropFilter || !t && !!n.filter && "none" !== n.filter || ["transform", "perspective", "filter"].some(e => (n.willChange || "").includes(e)) || ["paint", "layout", "strict", "content"].some(e => (n.contain || "").includes(e))
            }

            function p() {
                return !("undefined" == typeof CSS || !CSS.supports) && CSS.supports("-webkit-backdrop-filter", "none")
            }

            function m(e) {
                return ["html", "body", "#document"].includes(a(e))
            }
            let v = Math.min,
                h = Math.max,
                g = Math.round;

            function w(e) {
                let t = l(e),
                    n = parseFloat(t.width) || 0,
                    r = parseFloat(t.height) || 0,
                    o = u(e),
                    i = o ? e.offsetWidth : n,
                    a = o ? e.offsetHeight : r,
                    c = g(n) !== i || g(r) !== a;
                return c && (n = i, r = a), {
                    width: n,
                    height: r,
                    fallback: c
                }
            }

            function y(e) {
                return c(e) ? e : e.contextElement
            }
            let b = {
                x: 1,
                y: 1
            };

            function x(e) {
                let t = y(e);
                if (!u(t)) return b;
                let n = t.getBoundingClientRect(),
                    {
                        width: r,
                        height: o,
                        fallback: l
                    } = w(t),
                    i = (l ? g(n.width) : n.width) / r,
                    a = (l ? g(n.height) : n.height) / o;
                return i && Number.isFinite(i) || (i = 1), a && Number.isFinite(a) || (a = 1), {
                    x: i,
                    y: a
                }
            }
            let E = {
                x: 0,
                y: 0
            };

            function C(e, t, n) {
                var r, l;
                if (void 0 === t && (t = !0), !p()) return E;
                let i = e ? o(e) : window;
                return !n || t && n !== i ? E : {
                    x: (null == (r = i.visualViewport) ? void 0 : r.offsetLeft) || 0,
                    y: (null == (l = i.visualViewport) ? void 0 : l.offsetTop) || 0
                }
            }

            function R(e, t, n, l) {
                void 0 === t && (t = !1), void 0 === n && (n = !1);
                let i = e.getBoundingClientRect(),
                    a = y(e),
                    u = b;
                t && (l ? c(l) && (u = x(l)) : u = x(e));
                let s = C(a, n, l),
                    d = (i.left + s.x) / u.x,
                    f = (i.top + s.y) / u.y,
                    p = i.width / u.x,
                    m = i.height / u.y;
                if (a) {
                    let e = o(a),
                        t = l && c(l) ? o(l) : l,
                        n = e.frameElement;
                    for (; n && l && t !== e;) {
                        let e = x(n),
                            t = n.getBoundingClientRect(),
                            r = getComputedStyle(n);
                        t.x += (n.clientLeft + parseFloat(r.paddingLeft)) * e.x, t.y += (n.clientTop + parseFloat(r.paddingTop)) * e.y, d *= e.x, f *= e.y, p *= e.x, m *= e.y, d += t.x, f += t.y, n = o(n).frameElement
                    }
                }
                return (0, r.JB)({
                    width: p,
                    height: m,
                    x: d,
                    y: f
                })
            }

            function M(e) {
                return ((i(e) ? e.ownerDocument : e.document) || window.document).documentElement
            }

            function S(e) {
                return c(e) ? {
                    scrollLeft: e.scrollLeft,
                    scrollTop: e.scrollTop
                } : {
                    scrollLeft: e.pageXOffset,
                    scrollTop: e.pageYOffset
                }
            }

            function P(e) {
                return R(M(e)).left + S(e).scrollLeft
            }

            function _(e) {
                if ("html" === a(e)) return e;
                let t = e.assignedSlot || e.parentNode || s(e) && e.host || M(e);
                return s(t) ? t.host : t
            }

            function D(e, t) {
                var n;
                void 0 === t && (t = []);
                let r = function e(t) {
                        let n = _(t);
                        return m(n) ? n.ownerDocument.body : u(n) && d(n) ? n : e(n)
                    }(e),
                    l = r === (null == (n = e.ownerDocument) ? void 0 : n.body),
                    i = o(r);
                return l ? t.concat(i, i.visualViewport || [], d(r) ? r : []) : t.concat(r, D(r))
            }

            function T(e, t, n) {
                let i;
                if ("viewport" === t) i = function(e, t) {
                    let n = o(e),
                        r = M(e),
                        l = n.visualViewport,
                        i = r.clientWidth,
                        a = r.clientHeight,
                        u = 0,
                        c = 0;
                    if (l) {
                        i = l.width, a = l.height;
                        let e = p();
                        (!e || e && "fixed" === t) && (u = l.offsetLeft, c = l.offsetTop)
                    }
                    return {
                        width: i,
                        height: a,
                        x: u,
                        y: c
                    }
                }(e, n);
                else if ("document" === t) i = function(e) {
                    let t = M(e),
                        n = S(e),
                        r = e.ownerDocument.body,
                        o = h(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth),
                        i = h(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight),
                        a = -n.scrollLeft + P(e),
                        u = -n.scrollTop;
                    return "rtl" === l(r).direction && (a += h(t.clientWidth, r.clientWidth) - o), {
                        width: o,
                        height: i,
                        x: a,
                        y: u
                    }
                }(M(e));
                else if (c(t)) i = function(e, t) {
                    let n = R(e, !0, "fixed" === t),
                        r = n.top + e.clientTop,
                        o = n.left + e.clientLeft,
                        l = u(e) ? x(e) : {
                            x: 1,
                            y: 1
                        };
                    return {
                        width: e.clientWidth * l.x,
                        height: e.clientHeight * l.y,
                        x: o * l.x,
                        y: r * l.y
                    }
                }(t, n);
                else {
                    let n = C(e);
                    i = { ...t,
                        x: t.x - n.x,
                        y: t.y - n.y
                    }
                }
                return (0, r.JB)(i)
            }

            function k(e, t) {
                return u(e) && "fixed" !== l(e).position ? t ? t(e) : e.offsetParent : null
            }

            function O(e, t) {
                let n = o(e);
                if (!u(e)) return n;
                let r = k(e, t);
                for (; r && ["table", "td", "th"].includes(a(r)) && "static" === l(r).position;) r = k(r, t);
                return r && ("html" === a(r) || "body" === a(r) && "static" === l(r).position && !f(r)) ? n : r || function(e) {
                    let t = _(e);
                    for (; u(t) && !m(t);) {
                        if (f(t)) return t;
                        t = _(t)
                    }
                    return null
                }(e) || n
            }
            let L = {
                getClippingRect: function(e) {
                    let {
                        element: t,
                        boundary: n,
                        rootBoundary: r,
                        strategy: o
                    } = e, i = "clippingAncestors" === n ? function(e, t) {
                        let n = t.get(e);
                        if (n) return n;
                        let r = D(e).filter(e => c(e) && "body" !== a(e)),
                            o = null,
                            i = "fixed" === l(e).position,
                            u = i ? _(e) : e;
                        for (; c(u) && !m(u);) {
                            let t = l(u),
                                n = f(u);
                            n || "fixed" !== t.position || (o = null), (i ? !n && !o : !n && "static" === t.position && o && ["absolute", "fixed"].includes(o.position) || d(u) && !n && function e(t, n) {
                                let r = _(t);
                                return !(r === n || !c(r) || m(r)) && ("fixed" === l(r).position || e(r, n))
                            }(e, u)) ? r = r.filter(e => e !== u) : o = t, u = _(u)
                        }
                        return t.set(e, r), r
                    }(t, this._c) : [].concat(n), u = [...i, r], s = u[0], p = u.reduce((e, n) => {
                        let r = T(t, n, o);
                        return e.top = h(r.top, e.top), e.right = v(r.right, e.right), e.bottom = v(r.bottom, e.bottom), e.left = h(r.left, e.left), e
                    }, T(t, s, o));
                    return {
                        width: p.right - p.left,
                        height: p.bottom - p.top,
                        x: p.left,
                        y: p.top
                    }
                },
                convertOffsetParentRelativeRectToViewportRelativeRect: function(e) {
                    let {
                        rect: t,
                        offsetParent: n,
                        strategy: r
                    } = e, o = u(n), l = M(n);
                    if (n === l) return t;
                    let i = {
                            scrollLeft: 0,
                            scrollTop: 0
                        },
                        c = {
                            x: 1,
                            y: 1
                        },
                        s = {
                            x: 0,
                            y: 0
                        };
                    if ((o || !o && "fixed" !== r) && (("body" !== a(n) || d(l)) && (i = S(n)), u(n))) {
                        let e = R(n);
                        c = x(n), s.x = e.x + n.clientLeft, s.y = e.y + n.clientTop
                    }
                    return {
                        width: t.width * c.x,
                        height: t.height * c.y,
                        x: t.x * c.x - i.scrollLeft * c.x + s.x,
                        y: t.y * c.y - i.scrollTop * c.y + s.y
                    }
                },
                isElement: c,
                getDimensions: function(e) {
                    return w(e)
                },
                getOffsetParent: O,
                getDocumentElement: M,
                getScale: x,
                async getElementRects(e) {
                    let {
                        reference: t,
                        floating: n,
                        strategy: r
                    } = e, o = this.getOffsetParent || O, l = this.getDimensions;
                    return {
                        reference: function(e, t, n) {
                            let r = u(t),
                                o = M(t),
                                l = "fixed" === n,
                                i = R(e, !0, l, t),
                                c = {
                                    scrollLeft: 0,
                                    scrollTop: 0
                                },
                                s = {
                                    x: 0,
                                    y: 0
                                };
                            if (r || !r && !l) {
                                if (("body" !== a(t) || d(o)) && (c = S(t)), u(t)) {
                                    let e = R(t, !0, l, t);
                                    s.x = e.x + t.clientLeft, s.y = e.y + t.clientTop
                                } else o && (s.x = P(o))
                            }
                            return {
                                x: i.left + c.scrollLeft - s.x,
                                y: i.top + c.scrollTop - s.y,
                                width: i.width,
                                height: i.height
                            }
                        }(t, await o(n), r),
                        floating: {
                            x: 0,
                            y: 0,
                            ...await l(n)
                        }
                    }
                },
                getClientRects: e => Array.from(e.getClientRects()),
                isRTL: e => "rtl" === l(e).direction
            };

            function A(e, t, n, r) {
                void 0 === r && (r = {});
                let {
                    ancestorScroll: o = !0,
                    ancestorResize: l = !0,
                    elementResize: i = !0,
                    animationFrame: a = !1
                } = r, u = o || l ? [...c(e) ? D(e) : e.contextElement ? D(e.contextElement) : [], ...D(t)] : [];
                u.forEach(e => {
                    let t = !c(e) && e.toString().includes("V");
                    o && (!a || t) && e.addEventListener("scroll", n, {
                        passive: !0
                    }), l && e.addEventListener("resize", n)
                });
                let s, d = null;
                i && (d = new ResizeObserver(() => {
                    n()
                }), c(e) && !a && d.observe(e), c(e) || !e.contextElement || a || d.observe(e.contextElement), d.observe(t));
                let f = a ? R(e) : null;
                return a && function t() {
                    let r = R(e);
                    f && (r.x !== f.x || r.y !== f.y || r.width !== f.width || r.height !== f.height) && n(), f = r, s = requestAnimationFrame(t)
                }(), n(), () => {
                    var e;
                    u.forEach(e => {
                        o && e.removeEventListener("scroll", n), l && e.removeEventListener("resize", n)
                    }), null == (e = d) || e.disconnect(), d = null, a && cancelAnimationFrame(s)
                }
            }
            let I = (e, t, n) => {
                let o = new Map,
                    l = {
                        platform: L,
                        ...n
                    },
                    i = { ...l.platform,
                        _c: o
                    };
                return (0, r.oo)(e, t, { ...l,
                    platform: i
                })
            }
        },
        10132: function(e, t, n) {
            n.d(t, {
                M: function() {
                    return r
                }
            });

            function r(e, t, {
                checkForDefaultPrevented: n = !0
            } = {}) {
                return function(r) {
                    if (null == e || e(r), !1 === n || !r.defaultPrevented) return null == t ? void 0 : t(r)
                }
            }
        },
        89340: function(e, t, n) {
            n.d(t, {
                B: function() {
                    return a
                }
            });
            var r = n(70079),
                o = n(53559),
                l = n(68469),
                i = n(26739);

            function a(e) {
                let t = e + "CollectionProvider",
                    [n, a] = (0, o.b)(t),
                    [u, c] = n(t, {
                        collectionRef: {
                            current: null
                        },
                        itemMap: new Map
                    }),
                    s = e => {
                        let {
                            scope: t,
                            children: n
                        } = e, o = r.useRef(null), l = r.useRef(new Map).current;
                        return r.createElement(u, {
                            scope: t,
                            itemMap: l,
                            collectionRef: o
                        }, n)
                    },
                    d = e + "CollectionSlot",
                    f = r.forwardRef((e, t) => {
                        let {
                            scope: n,
                            children: o
                        } = e, a = c(d, n), u = (0, l.e)(t, a.collectionRef);
                        return r.createElement(i.g7, {
                            ref: u
                        }, o)
                    }),
                    p = e + "CollectionItemSlot",
                    m = "data-radix-collection-item",
                    v = r.forwardRef((e, t) => {
                        let {
                            scope: n,
                            children: o,
                            ...a
                        } = e, u = r.useRef(null), s = (0, l.e)(t, u), d = c(p, n);
                        return r.useEffect(() => (d.itemMap.set(u, {
                            ref: u,
                            ...a
                        }), () => void d.itemMap.delete(u))), r.createElement(i.g7, {
                            [m]: "",
                            ref: s
                        }, o)
                    });
                return [{
                    Provider: s,
                    Slot: f,
                    ItemSlot: v
                }, function(t) {
                    let n = c(e + "CollectionConsumer", t),
                        o = r.useCallback(() => {
                            let e = n.collectionRef.current;
                            if (!e) return [];
                            let t = Array.from(e.querySelectorAll(`[${m}]`)),
                                r = Array.from(n.itemMap.values()),
                                o = r.sort((e, n) => t.indexOf(e.ref.current) - t.indexOf(n.ref.current));
                            return o
                        }, [n.collectionRef, n.itemMap]);
                    return o
                }, a]
            }
        },
        53559: function(e, t, n) {
            n.d(t, {
                b: function() {
                    return o
                }
            });
            var r = n(70079);

            function o(e, t = []) {
                let n = [],
                    o = () => {
                        let t = n.map(e => (0, r.createContext)(e));
                        return function(n) {
                            let o = (null == n ? void 0 : n[e]) || t;
                            return (0, r.useMemo)(() => ({
                                [`__scope${e}`]: { ...n,
                                    [e]: o
                                }
                            }), [n, o])
                        }
                    };
                return o.scopeName = e, [function(t, o) {
                    let l = (0, r.createContext)(o),
                        i = n.length;

                    function a(t) {
                        let {
                            scope: n,
                            children: o,
                            ...a
                        } = t, u = (null == n ? void 0 : n[e][i]) || l, c = (0, r.useMemo)(() => a, Object.values(a));
                        return (0, r.createElement)(u.Provider, {
                            value: c
                        }, o)
                    }
                    return n = [...n, o], a.displayName = t + "Provider", [a, function(n, a) {
                        let u = (null == a ? void 0 : a[e][i]) || l,
                            c = (0, r.useContext)(u);
                        if (c) return c;
                        if (void 0 !== o) return o;
                        throw Error(`\`${n}\` must be used within \`${t}\``)
                    }]
                }, function(...e) {
                    let t = e[0];
                    if (1 === e.length) return t;
                    let n = () => {
                        let n = e.map(e => ({
                            useScope: e(),
                            scopeName: e.scopeName
                        }));
                        return function(e) {
                            let o = n.reduce((t, {
                                useScope: n,
                                scopeName: r
                            }) => {
                                let o = n(e),
                                    l = o[`__scope${r}`];
                                return { ...t,
                                    ...l
                                }
                            }, {});
                            return (0, r.useMemo)(() => ({
                                [`__scope${t.scopeName}`]: o
                            }), [o])
                        }
                    };
                    return n.scopeName = t.scopeName, n
                }(o, ...t)]
            }
        },
        93372: function(e, t, n) {
            let r;
            n.d(t, {
                I0: function() {
                    return g
                },
                XB: function() {
                    return f
                },
                fC: function() {
                    return h
                }
            });
            var o = n(45675),
                l = n(70079),
                i = n(10132),
                a = n(8859),
                u = n(68469),
                c = n(51629);
            let s = "dismissableLayer.update",
                d = (0, l.createContext)({
                    layers: new Set,
                    layersWithOutsidePointerEventsDisabled: new Set,
                    branches: new Set
                }),
                f = (0, l.forwardRef)((e, t) => {
                    var n;
                    let {
                        disableOutsidePointerEvents: f = !1,
                        onEscapeKeyDown: p,
                        onPointerDownOutside: h,
                        onFocusOutside: g,
                        onInteractOutside: w,
                        onDismiss: y,
                        ...b
                    } = e, x = (0, l.useContext)(d), [E, C] = (0, l.useState)(null), R = null !== (n = null == E ? void 0 : E.ownerDocument) && void 0 !== n ? n : null == globalThis ? void 0 : globalThis.document, [, M] = (0, l.useState)({}), S = (0, u.e)(t, e => C(e)), P = Array.from(x.layers), [_] = [...x.layersWithOutsidePointerEventsDisabled].slice(-1), D = P.indexOf(_), T = E ? P.indexOf(E) : -1, k = x.layersWithOutsidePointerEventsDisabled.size > 0, O = T >= D, L = function(e, t = null == globalThis ? void 0 : globalThis.document) {
                        let n = (0, c.W)(e),
                            r = (0, l.useRef)(!1),
                            o = (0, l.useRef)(() => {});
                        return (0, l.useEffect)(() => {
                            let e = e => {
                                    if (e.target && !r.current) {
                                        let r = {
                                            originalEvent: e
                                        };

                                        function l() {
                                            v("dismissableLayer.pointerDownOutside", n, r, {
                                                discrete: !0
                                            })
                                        }
                                        "touch" === e.pointerType ? (t.removeEventListener("click", o.current), o.current = l, t.addEventListener("click", o.current, {
                                            once: !0
                                        })) : l()
                                    }
                                    r.current = !1
                                },
                                l = window.setTimeout(() => {
                                    t.addEventListener("pointerdown", e)
                                }, 0);
                            return () => {
                                window.clearTimeout(l), t.removeEventListener("pointerdown", e), t.removeEventListener("click", o.current)
                            }
                        }, [t, n]), {
                            onPointerDownCapture: () => r.current = !0
                        }
                    }(e => {
                        let t = e.target,
                            n = [...x.branches].some(e => e.contains(t));
                        !O || n || (null == h || h(e), null == w || w(e), e.defaultPrevented || null == y || y())
                    }, R), A = function(e, t = null == globalThis ? void 0 : globalThis.document) {
                        let n = (0, c.W)(e),
                            r = (0, l.useRef)(!1);
                        return (0, l.useEffect)(() => {
                            let e = e => {
                                e.target && !r.current && v("dismissableLayer.focusOutside", n, {
                                    originalEvent: e
                                }, {
                                    discrete: !1
                                })
                            };
                            return t.addEventListener("focusin", e), () => t.removeEventListener("focusin", e)
                        }, [t, n]), {
                            onFocusCapture: () => r.current = !0,
                            onBlurCapture: () => r.current = !1
                        }
                    }(e => {
                        let t = e.target,
                            n = [...x.branches].some(e => e.contains(t));
                        n || (null == g || g(e), null == w || w(e), e.defaultPrevented || null == y || y())
                    }, R);
                    return ! function(e, t = null == globalThis ? void 0 : globalThis.document) {
                        let n = (0, c.W)(e);
                        (0, l.useEffect)(() => {
                            let e = e => {
                                "Escape" === e.key && n(e)
                            };
                            return t.addEventListener("keydown", e), () => t.removeEventListener("keydown", e)
                        }, [n, t])
                    }(e => {
                        let t = T === x.layers.size - 1;
                        t && (null == p || p(e), !e.defaultPrevented && y && (e.preventDefault(), y()))
                    }, R), (0, l.useEffect)(() => {
                        if (E) return f && (0 === x.layersWithOutsidePointerEventsDisabled.size && (r = R.body.style.pointerEvents, R.body.style.pointerEvents = "none"), x.layersWithOutsidePointerEventsDisabled.add(E)), x.layers.add(E), m(), () => {
                            f && 1 === x.layersWithOutsidePointerEventsDisabled.size && (R.body.style.pointerEvents = r)
                        }
                    }, [E, R, f, x]), (0, l.useEffect)(() => () => {
                        E && (x.layers.delete(E), x.layersWithOutsidePointerEventsDisabled.delete(E), m())
                    }, [E, x]), (0, l.useEffect)(() => {
                        let e = () => M({});
                        return document.addEventListener(s, e), () => document.removeEventListener(s, e)
                    }, []), (0, l.createElement)(a.WV.div, (0, o.Z)({}, b, {
                        ref: S,
                        style: {
                            pointerEvents: k ? O ? "auto" : "none" : void 0,
                            ...e.style
                        },
                        onFocusCapture: (0, i.M)(e.onFocusCapture, A.onFocusCapture),
                        onBlurCapture: (0, i.M)(e.onBlurCapture, A.onBlurCapture),
                        onPointerDownCapture: (0, i.M)(e.onPointerDownCapture, L.onPointerDownCapture)
                    }))
                }),
                p = (0, l.forwardRef)((e, t) => {
                    let n = (0, l.useContext)(d),
                        r = (0, l.useRef)(null),
                        i = (0, u.e)(t, r);
                    return (0, l.useEffect)(() => {
                        let e = r.current;
                        if (e) return n.branches.add(e), () => {
                            n.branches.delete(e)
                        }
                    }, [n.branches]), (0, l.createElement)(a.WV.div, (0, o.Z)({}, e, {
                        ref: i
                    }))
                });

            function m() {
                let e = new CustomEvent(s);
                document.dispatchEvent(e)
            }

            function v(e, t, n, {
                discrete: r
            }) {
                let o = n.originalEvent.target,
                    l = new CustomEvent(e, {
                        bubbles: !1,
                        cancelable: !0,
                        detail: n
                    });
                t && o.addEventListener(e, t, {
                    once: !0
                }), r ? (0, a.jH)(o, l) : o.dispatchEvent(l)
            }
            let h = f,
                g = p
        },
        32768: function(e, t, n) {
            n.d(t, {
                h: function() {
                    return a
                }
            });
            var r = n(45675),
                o = n(70079),
                l = n(99581),
                i = n(8859);
            let a = (0, o.forwardRef)((e, t) => {
                var n;
                let {
                    container: a = null == globalThis ? void 0 : null === (n = globalThis.document) || void 0 === n ? void 0 : n.body,
                    ...u
                } = e;
                return a ? l.createPortal((0, o.createElement)(i.WV.div, (0, r.Z)({}, u, {
                    ref: t
                })), a) : null
            })
        },
        48349: function(e, t, n) {
            let r;
            n.d(t, {
                VY: function() {
                    return e5
                },
                JO: function() {
                    return e7
                },
                ck: function() {
                    return e6
                },
                eT: function() {
                    return e3
                },
                h_: function() {
                    return e2
                },
                fC: function() {
                    return eQ
                },
                $G: function() {
                    return e4
                },
                u_: function() {
                    return e8
                },
                xz: function() {
                    return e0
                },
                B4: function() {
                    return e1
                },
                l_: function() {
                    return e9
                }
            });
            var o = n(45675),
                l = n(70079),
                i = n.t(l, 2),
                a = n(99581);

            function u(e, [t, n]) {
                return Math.min(n, Math.max(t, e))
            }
            var c = n(10132),
                s = n(89340),
                d = n(68469),
                f = n(53559);
            let p = (0, l.createContext)(void 0);
            var m = n(93372);
            let v = 0;

            function h() {
                let e = document.createElement("span");
                return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.cssText = "outline: none; opacity: 0; position: fixed; pointer-events: none", e
            }
            var g = n(8859),
                w = n(51629);
            let y = "focusScope.autoFocusOnMount",
                b = "focusScope.autoFocusOnUnmount",
                x = {
                    bubbles: !1,
                    cancelable: !0
                },
                E = (0, l.forwardRef)((e, t) => {
                    let {
                        loop: n = !1,
                        trapped: r = !1,
                        onMountAutoFocus: i,
                        onUnmountAutoFocus: a,
                        ...u
                    } = e, [c, s] = (0, l.useState)(null), f = (0, w.W)(i), p = (0, w.W)(a), m = (0, l.useRef)(null), v = (0, d.e)(t, e => s(e)), h = (0, l.useRef)({
                        paused: !1,
                        pause() {
                            this.paused = !0
                        },
                        resume() {
                            this.paused = !1
                        }
                    }).current;
                    (0, l.useEffect)(() => {
                        if (r) {
                            function e(e) {
                                if (h.paused || !c) return;
                                let t = e.target;
                                c.contains(t) ? m.current = t : M(m.current, {
                                    select: !0
                                })
                            }

                            function t(e) {
                                if (h.paused || !c) return;
                                let t = e.relatedTarget;
                                null === t || c.contains(t) || M(m.current, {
                                    select: !0
                                })
                            }
                            document.addEventListener("focusin", e), document.addEventListener("focusout", t);
                            let n = new MutationObserver(function(e) {
                                let t = document.activeElement;
                                for (let n of e) n.removedNodes.length > 0 && !(null != c && c.contains(t)) && M(c)
                            });
                            return c && n.observe(c, {
                                childList: !0,
                                subtree: !0
                            }), () => {
                                document.removeEventListener("focusin", e), document.removeEventListener("focusout", t), n.disconnect()
                            }
                        }
                    }, [r, c, h.paused]), (0, l.useEffect)(() => {
                        if (c) {
                            S.add(h);
                            let e = document.activeElement,
                                t = c.contains(e);
                            if (!t) {
                                let t = new CustomEvent(y, x);
                                c.addEventListener(y, f), c.dispatchEvent(t), t.defaultPrevented || (function(e, {
                                    select: t = !1
                                } = {}) {
                                    let n = document.activeElement;
                                    for (let r of e)
                                        if (M(r, {
                                                select: t
                                            }), document.activeElement !== n) return
                                }(C(c).filter(e => "A" !== e.tagName), {
                                    select: !0
                                }), document.activeElement === e && M(c))
                            }
                            return () => {
                                c.removeEventListener(y, f), setTimeout(() => {
                                    let t = new CustomEvent(b, x);
                                    c.addEventListener(b, p), c.dispatchEvent(t), t.defaultPrevented || M(null != e ? e : document.body, {
                                        select: !0
                                    }), c.removeEventListener(b, p), S.remove(h)
                                }, 0)
                            }
                        }
                    }, [c, f, p, h]);
                    let E = (0, l.useCallback)(e => {
                        if (!n && !r || h.paused) return;
                        let t = "Tab" === e.key && !e.altKey && !e.ctrlKey && !e.metaKey,
                            o = document.activeElement;
                        if (t && o) {
                            let t = e.currentTarget,
                                [r, l] = function(e) {
                                    let t = C(e),
                                        n = R(t, e),
                                        r = R(t.reverse(), e);
                                    return [n, r]
                                }(t);
                            r && l ? e.shiftKey || o !== l ? e.shiftKey && o === r && (e.preventDefault(), n && M(l, {
                                select: !0
                            })) : (e.preventDefault(), n && M(r, {
                                select: !0
                            })) : o === t && e.preventDefault()
                        }
                    }, [n, r, h.paused]);
                    return (0, l.createElement)(g.WV.div, (0, o.Z)({
                        tabIndex: -1
                    }, u, {
                        ref: v,
                        onKeyDown: E
                    }))
                });

            function C(e) {
                let t = [],
                    n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
                        acceptNode: e => {
                            let t = "INPUT" === e.tagName && "hidden" === e.type;
                            return e.disabled || e.hidden || t ? NodeFilter.FILTER_SKIP : e.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
                        }
                    });
                for (; n.nextNode();) t.push(n.currentNode);
                return t
            }

            function R(e, t) {
                for (let n of e)
                    if (! function(e, {
                            upTo: t
                        }) {
                            if ("hidden" === getComputedStyle(e).visibility) return !0;
                            for (; e && (void 0 === t || e !== t);) {
                                if ("none" === getComputedStyle(e).display) return !0;
                                e = e.parentElement
                            }
                            return !1
                        }(n, {
                            upTo: t
                        })) return n
            }

            function M(e, {
                select: t = !1
            } = {}) {
                if (e && e.focus) {
                    var n;
                    let r = document.activeElement;
                    e.focus({
                        preventScroll: !0
                    }), e !== r && (n = e) instanceof HTMLInputElement && "select" in n && t && e.select()
                }
            }
            let S = (r = [], {
                add(e) {
                    let t = r[0];
                    e !== t && (null == t || t.pause()), (r = P(r, e)).unshift(e)
                },
                remove(e) {
                    var t;
                    null === (t = (r = P(r, e))[0]) || void 0 === t || t.resume()
                }
            });

            function P(e, t) {
                let n = [...e],
                    r = n.indexOf(t);
                return -1 !== r && n.splice(r, 1), n
            }
            var _ = n(90671);
            let D = i["useId".toString()] || (() => void 0),
                T = 0;

            function k(e) {
                let [t, n] = l.useState(D());
                return (0, _.b)(() => {
                    e || n(e => null != e ? e : String(T++))
                }, [e]), e || (t ? `radix-${t}` : "")
            }
            var O = n(84256),
                L = n(88905);
            let A = e => {
                let {
                    element: t,
                    padding: n
                } = e;
                return {
                    name: "arrow",
                    options: e,
                    fn(e) {
                        if (t && ({}).hasOwnProperty.call(t, "current")) {
                            if (null != t.current) return (0, O.x7)({
                                element: t.current,
                                padding: n
                            }).fn(e)
                        } else if (t) return (0, O.x7)({
                            element: t,
                            padding: n
                        }).fn(e);
                        return {}
                    }
                }
            };
            var I = "undefined" != typeof document ? l.useLayoutEffect : l.useEffect;

            function F(e, t) {
                let n, r, o;
                if (e === t) return !0;
                if (typeof e != typeof t) return !1;
                if ("function" == typeof e && e.toString() === t.toString()) return !0;
                if (e && t && "object" == typeof e) {
                    if (Array.isArray(e)) {
                        if ((n = e.length) != t.length) return !1;
                        for (r = n; 0 != r--;)
                            if (!F(e[r], t[r])) return !1;
                        return !0
                    }
                    if ((n = (o = Object.keys(e)).length) !== Object.keys(t).length) return !1;
                    for (r = n; 0 != r--;)
                        if (!({}).hasOwnProperty.call(t, o[r])) return !1;
                    for (r = n; 0 != r--;) {
                        let n = o[r];
                        if (("_owner" !== n || !e.$$typeof) && !F(e[n], t[n])) return !1
                    }
                    return !0
                }
                return e != e && t != t
            }

            function W(e) {
                if ("undefined" == typeof window) return 1;
                let t = e.ownerDocument.defaultView || window;
                return t.devicePixelRatio || 1
            }

            function V(e, t) {
                let n = W(e);
                return Math.round(t * n) / n
            }

            function Z(e) {
                let t = l.useRef(e);
                return I(() => {
                    t.current = e
                }), t
            }
            let B = (0, l.forwardRef)((e, t) => {
                    let {
                        children: n,
                        width: r = 10,
                        height: i = 5,
                        ...a
                    } = e;
                    return (0, l.createElement)(g.WV.svg, (0, o.Z)({}, a, {
                        ref: t,
                        width: r,
                        height: i,
                        viewBox: "0 0 30 10",
                        preserveAspectRatio: "none"
                    }), e.asChild ? n : (0, l.createElement)("polygon", {
                        points: "0,0 30,0 15,10"
                    }))
                }),
                H = "Popper",
                [K, N] = (0, f.b)(H),
                [z, U] = K(H),
                $ = e => {
                    let {
                        __scopePopper: t,
                        children: n
                    } = e, [r, o] = (0, l.useState)(null);
                    return (0, l.createElement)(z, {
                        scope: t,
                        anchor: r,
                        onAnchorChange: o
                    }, n)
                },
                G = (0, l.forwardRef)((e, t) => {
                    let {
                        __scopePopper: n,
                        virtualRef: r,
                        ...i
                    } = e, a = U("PopperAnchor", n), u = (0, l.useRef)(null), c = (0, d.e)(t, u);
                    return (0, l.useEffect)(() => {
                        a.onAnchorChange((null == r ? void 0 : r.current) || u.current)
                    }), r ? null : (0, l.createElement)(g.WV.div, (0, o.Z)({}, i, {
                        ref: c
                    }))
                }),
                j = "PopperContent",
                [X, Y] = K(j),
                q = (0, l.forwardRef)((e, t) => {
                    var n, r, i, u, c, s, f, p;
                    let {
                        __scopePopper: m,
                        side: v = "bottom",
                        sideOffset: h = 0,
                        align: y = "center",
                        alignOffset: b = 0,
                        arrowPadding: x = 0,
                        collisionBoundary: E = [],
                        collisionPadding: C = 0,
                        sticky: R = "partial",
                        hideWhenDetached: M = !1,
                        avoidCollisions: S = !0,
                        onPlaced: P,
                        ...D
                    } = e, T = U(j, m), [k, B] = (0, l.useState)(null), H = (0, d.e)(t, e => B(e)), [K, N] = (0, l.useState)(null), z = function(e) {
                        let [t, n] = (0, l.useState)(void 0);
                        return (0, _.b)(() => {
                            if (e) {
                                n({
                                    width: e.offsetWidth,
                                    height: e.offsetHeight
                                });
                                let t = new ResizeObserver(t => {
                                    let r, o;
                                    if (!Array.isArray(t) || !t.length) return;
                                    let l = t[0];
                                    if ("borderBoxSize" in l) {
                                        let e = l.borderBoxSize,
                                            t = Array.isArray(e) ? e[0] : e;
                                        r = t.inlineSize, o = t.blockSize
                                    } else r = e.offsetWidth, o = e.offsetHeight;
                                    n({
                                        width: r,
                                        height: o
                                    })
                                });
                                return t.observe(e, {
                                    box: "border-box"
                                }), () => t.unobserve(e)
                            }
                            n(void 0)
                        }, [e]), t
                    }(K), $ = null !== (n = null == z ? void 0 : z.width) && void 0 !== n ? n : 0, G = null !== (r = null == z ? void 0 : z.height) && void 0 !== r ? r : 0, Y = "number" == typeof C ? C : {
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: 0,
                        ...C
                    }, q = Array.isArray(E) ? E : [E], J = q.length > 0, en = {
                        padding: Y,
                        boundary: q.filter(Q),
                        altBoundary: J
                    }, {
                        refs: er,
                        floatingStyles: eo,
                        placement: el,
                        isPositioned: ei,
                        middlewareData: ea
                    } = function(e) {
                        void 0 === e && (e = {});
                        let {
                            placement: t = "bottom",
                            strategy: n = "absolute",
                            middleware: r = [],
                            platform: o,
                            elements: {
                                reference: i,
                                floating: u
                            } = {},
                            transform: c = !0,
                            whileElementsMounted: s,
                            open: d
                        } = e, [f, p] = l.useState({
                            x: 0,
                            y: 0,
                            strategy: n,
                            placement: t,
                            middlewareData: {},
                            isPositioned: !1
                        }), [m, v] = l.useState(r);
                        F(m, r) || v(r);
                        let [h, g] = l.useState(null), [w, y] = l.useState(null), b = l.useCallback(e => {
                            e != R.current && (R.current = e, g(e))
                        }, [g]), x = l.useCallback(e => {
                            e !== M.current && (M.current = e, y(e))
                        }, [y]), E = i || h, C = u || w, R = l.useRef(null), M = l.useRef(null), S = l.useRef(f), P = Z(s), _ = Z(o), D = l.useCallback(() => {
                            if (!R.current || !M.current) return;
                            let e = {
                                placement: t,
                                strategy: n,
                                middleware: m
                            };
                            _.current && (e.platform = _.current), (0, L.oo)(R.current, M.current, e).then(e => {
                                let t = { ...e,
                                    isPositioned: !0
                                };
                                T.current && !F(S.current, t) && (S.current = t, a.flushSync(() => {
                                    p(t)
                                }))
                            })
                        }, [m, t, n, _]);
                        I(() => {
                            !1 === d && S.current.isPositioned && (S.current.isPositioned = !1, p(e => ({ ...e,
                                isPositioned: !1
                            })))
                        }, [d]);
                        let T = l.useRef(!1);
                        I(() => (T.current = !0, () => {
                            T.current = !1
                        }), []), I(() => {
                            if (E && (R.current = E), C && (M.current = C), E && C) {
                                if (P.current) return P.current(E, C, D);
                                D()
                            }
                        }, [E, C, D, P]);
                        let k = l.useMemo(() => ({
                                reference: R,
                                floating: M,
                                setReference: b,
                                setFloating: x
                            }), [b, x]),
                            O = l.useMemo(() => ({
                                reference: E,
                                floating: C
                            }), [E, C]),
                            A = l.useMemo(() => {
                                let e = {
                                    position: n,
                                    left: 0,
                                    top: 0
                                };
                                if (!O.floating) return e;
                                let t = V(O.floating, f.x),
                                    r = V(O.floating, f.y);
                                return c ? { ...e,
                                    transform: "translate(" + t + "px, " + r + "px)",
                                    ...W(O.floating) >= 1.5 && {
                                        willChange: "transform"
                                    }
                                } : {
                                    position: n,
                                    left: t,
                                    top: r
                                }
                            }, [n, c, O.floating, f.x, f.y]);
                        return l.useMemo(() => ({ ...f,
                            update: D,
                            refs: k,
                            elements: O,
                            floatingStyles: A
                        }), [f, D, k, O, A])
                    }({
                        strategy: "fixed",
                        placement: v + ("center" !== y ? "-" + y : ""),
                        whileElementsMounted: L.Me,
                        elements: {
                            reference: T.anchor
                        },
                        middleware: [(0, O.cv)({
                            mainAxis: h + G,
                            alignmentAxis: b
                        }), S && (0, O.uY)({
                            mainAxis: !0,
                            crossAxis: !1,
                            limiter: "partial" === R ? (0, O.dr)() : void 0,
                            ...en
                        }), S && (0, O.RR)({ ...en
                        }), (0, O.dp)({ ...en,
                            apply: ({
                                elements: e,
                                rects: t,
                                availableWidth: n,
                                availableHeight: r
                            }) => {
                                let {
                                    width: o,
                                    height: l
                                } = t.reference, i = e.floating.style;
                                i.setProperty("--radix-popper-available-width", `${n}px`), i.setProperty("--radix-popper-available-height", `${r}px`), i.setProperty("--radix-popper-anchor-width", `${o}px`), i.setProperty("--radix-popper-anchor-height", `${l}px`)
                            }
                        }), K && A({
                            element: K,
                            padding: x
                        }), ee({
                            arrowWidth: $,
                            arrowHeight: G
                        }), M && (0, O.Cp)({
                            strategy: "referenceHidden"
                        })]
                    }), [eu, ec] = et(el), es = (0, w.W)(P);
                    (0, _.b)(() => {
                        ei && (null == es || es())
                    }, [ei, es]);
                    let ed = null === (i = ea.arrow) || void 0 === i ? void 0 : i.x,
                        ef = null === (u = ea.arrow) || void 0 === u ? void 0 : u.y,
                        ep = (null === (c = ea.arrow) || void 0 === c ? void 0 : c.centerOffset) !== 0,
                        [em, ev] = (0, l.useState)();
                    return (0, _.b)(() => {
                        k && ev(window.getComputedStyle(k).zIndex)
                    }, [k]), (0, l.createElement)("div", {
                        ref: er.setFloating,
                        "data-radix-popper-content-wrapper": "",
                        style: { ...eo,
                            transform: ei ? eo.transform : "translate(0, -200%)",
                            minWidth: "max-content",
                            zIndex: em,
                            "--radix-popper-transform-origin": [null === (s = ea.transformOrigin) || void 0 === s ? void 0 : s.x, null === (f = ea.transformOrigin) || void 0 === f ? void 0 : f.y].join(" ")
                        },
                        dir: e.dir
                    }, (0, l.createElement)(X, {
                        scope: m,
                        placedSide: eu,
                        onArrowChange: N,
                        arrowX: ed,
                        arrowY: ef,
                        shouldHideArrow: ep
                    }, (0, l.createElement)(g.WV.div, (0, o.Z)({
                        "data-side": eu,
                        "data-align": ec
                    }, D, {
                        ref: H,
                        style: { ...D.style,
                            animation: ei ? void 0 : "none",
                            opacity: null !== (p = ea.hide) && void 0 !== p && p.referenceHidden ? 0 : void 0
                        }
                    }))))
                }),
                J = {
                    top: "bottom",
                    right: "left",
                    bottom: "top",
                    left: "right"
                };

            function Q(e) {
                return null !== e
            }
            let ee = e => ({
                name: "transformOrigin",
                options: e,
                fn(t) {
                    var n, r, o, l, i;
                    let {
                        placement: a,
                        rects: u,
                        middlewareData: c
                    } = t, s = (null === (n = c.arrow) || void 0 === n ? void 0 : n.centerOffset) !== 0, d = s ? 0 : e.arrowWidth, f = s ? 0 : e.arrowHeight, [p, m] = et(a), v = {
                        start: "0%",
                        center: "50%",
                        end: "100%"
                    }[m], h = (null !== (r = null === (o = c.arrow) || void 0 === o ? void 0 : o.x) && void 0 !== r ? r : 0) + d / 2, g = (null !== (l = null === (i = c.arrow) || void 0 === i ? void 0 : i.y) && void 0 !== l ? l : 0) + f / 2, w = "", y = "";
                    return "bottom" === p ? (w = s ? v : `${h}px`, y = `${-f}px`) : "top" === p ? (w = s ? v : `${h}px`, y = `${u.floating.height+f}px`) : "right" === p ? (w = `${-f}px`, y = s ? v : `${g}px`) : "left" === p && (w = `${u.floating.width+f}px`, y = s ? v : `${g}px`), {
                        data: {
                            x: w,
                            y: y
                        }
                    }
                }
            });

            function et(e) {
                let [t, n = "center"] = e.split("-");
                return [t, n]
            }
            var en = n(32768),
                er = n(26739),
                eo = n(21381),
                el = n(32148),
                ei = n(66546),
                ea = n(54239);
            let eu = [" ", "Enter", "ArrowUp", "ArrowDown"],
                ec = [" ", "Enter"],
                es = "Select",
                [ed, ef, ep] = (0, s.B)(es),
                [em, ev] = (0, f.b)(es, [ep, N]),
                eh = N(),
                [eg, ew] = em(es),
                [ey, eb] = em(es),
                ex = e => {
                    let {
                        __scopeSelect: t,
                        children: n,
                        open: r,
                        defaultOpen: o,
                        onOpenChange: i,
                        value: a,
                        defaultValue: u,
                        onValueChange: c,
                        dir: s,
                        name: d,
                        autoComplete: f,
                        disabled: m,
                        required: v
                    } = e, h = eh(t), [g, w] = (0, l.useState)(null), [y, b] = (0, l.useState)(null), [x, E] = (0, l.useState)(!1), C = function(e) {
                        let t = (0, l.useContext)(p);
                        return e || t || "ltr"
                    }(s), [R = !1, M] = (0, eo.T)({
                        prop: r,
                        defaultProp: o,
                        onChange: i
                    }), [S, P] = (0, eo.T)({
                        prop: a,
                        defaultProp: u,
                        onChange: c
                    }), _ = (0, l.useRef)(null), D = !g || !!g.closest("form"), [T, O] = (0, l.useState)(new Set), L = Array.from(T).map(e => e.props.value).join(";");
                    return (0, l.createElement)($, h, (0, l.createElement)(eg, {
                        required: v,
                        scope: t,
                        trigger: g,
                        onTriggerChange: w,
                        valueNode: y,
                        onValueNodeChange: b,
                        valueNodeHasChildren: x,
                        onValueNodeHasChildrenChange: E,
                        contentId: k(),
                        value: S,
                        onValueChange: P,
                        open: R,
                        onOpenChange: M,
                        dir: C,
                        triggerPointerDownPosRef: _,
                        disabled: m
                    }, (0, l.createElement)(ed.Provider, {
                        scope: t
                    }, (0, l.createElement)(ey, {
                        scope: e.__scopeSelect,
                        onNativeOptionAdd: (0, l.useCallback)(e => {
                            O(t => new Set(t).add(e))
                        }, []),
                        onNativeOptionRemove: (0, l.useCallback)(e => {
                            O(t => {
                                let n = new Set(t);
                                return n.delete(e), n
                            })
                        }, [])
                    }, n)), D ? (0, l.createElement)(eY, {
                        key: L,
                        "aria-hidden": !0,
                        required: v,
                        tabIndex: -1,
                        name: d,
                        autoComplete: f,
                        value: S,
                        onChange: e => P(e.target.value),
                        disabled: m
                    }, void 0 === S ? (0, l.createElement)("option", {
                        value: ""
                    }) : null, Array.from(T)) : null))
                },
                eE = (0, l.forwardRef)((e, t) => {
                    let {
                        __scopeSelect: n,
                        disabled: r = !1,
                        ...i
                    } = e, a = eh(n), u = ew("SelectTrigger", n), s = u.disabled || r, f = (0, d.e)(t, u.onTriggerChange), p = ef(n), [m, v, h] = eq(e => {
                        let t = p().filter(e => !e.disabled),
                            n = t.find(e => e.value === u.value),
                            r = eJ(t, e, n);
                        void 0 !== r && u.onValueChange(r.value)
                    }), w = () => {
                        s || (u.onOpenChange(!0), h())
                    };
                    return (0, l.createElement)(G, (0, o.Z)({
                        asChild: !0
                    }, a), (0, l.createElement)(g.WV.button, (0, o.Z)({
                        type: "button",
                        role: "combobox",
                        "aria-controls": u.contentId,
                        "aria-expanded": u.open,
                        "aria-required": u.required,
                        "aria-autocomplete": "none",
                        dir: u.dir,
                        "data-state": u.open ? "open" : "closed",
                        disabled: s,
                        "data-disabled": s ? "" : void 0,
                        "data-placeholder": void 0 === u.value ? "" : void 0
                    }, i, {
                        ref: f,
                        onClick: (0, c.M)(i.onClick, e => {
                            e.currentTarget.focus()
                        }),
                        onPointerDown: (0, c.M)(i.onPointerDown, e => {
                            let t = e.target;
                            t.hasPointerCapture(e.pointerId) && t.releasePointerCapture(e.pointerId), 0 === e.button && !1 === e.ctrlKey && (w(), u.triggerPointerDownPosRef.current = {
                                x: Math.round(e.pageX),
                                y: Math.round(e.pageY)
                            }, e.preventDefault())
                        }),
                        onKeyDown: (0, c.M)(i.onKeyDown, e => {
                            let t = "" !== m.current,
                                n = e.ctrlKey || e.altKey || e.metaKey;
                            n || 1 !== e.key.length || v(e.key), (!t || " " !== e.key) && eu.includes(e.key) && (w(), e.preventDefault())
                        })
                    })))
                }),
                eC = (0, l.forwardRef)((e, t) => {
                    let {
                        __scopeSelect: n,
                        className: r,
                        style: i,
                        children: a,
                        placeholder: u,
                        ...c
                    } = e, s = ew("SelectValue", n), {
                        onValueNodeHasChildrenChange: f
                    } = s, p = void 0 !== a, m = (0, d.e)(t, s.onValueNodeChange);
                    return (0, _.b)(() => {
                        f(p)
                    }, [f, p]), (0, l.createElement)(g.WV.span, (0, o.Z)({}, c, {
                        ref: m,
                        style: {
                            pointerEvents: "none"
                        }
                    }), void 0 === s.value && void 0 !== u ? u : a)
                }),
                eR = (0, l.forwardRef)((e, t) => {
                    let {
                        __scopeSelect: n,
                        children: r,
                        ...i
                    } = e;
                    return (0, l.createElement)(g.WV.span, (0, o.Z)({
                        "aria-hidden": !0
                    }, i, {
                        ref: t
                    }), r || "▼")
                }),
                eM = e => (0, l.createElement)(en.h, (0, o.Z)({
                    asChild: !0
                }, e)),
                eS = "SelectContent",
                eP = (0, l.forwardRef)((e, t) => {
                    let n = ew(eS, e.__scopeSelect),
                        [r, i] = (0, l.useState)();
                    return ((0, _.b)(() => {
                        i(new DocumentFragment)
                    }, []), n.open) ? (0, l.createElement)(eT, (0, o.Z)({}, e, {
                        ref: t
                    })) : r ? (0, a.createPortal)((0, l.createElement)(e_, {
                        scope: e.__scopeSelect
                    }, (0, l.createElement)(ed.Slot, {
                        scope: e.__scopeSelect
                    }, (0, l.createElement)("div", null, e.children))), r) : null
                }),
                [e_, eD] = em(eS),
                eT = (0, l.forwardRef)((e, t) => {
                    let {
                        __scopeSelect: n,
                        position: r = "item-aligned",
                        onCloseAutoFocus: i,
                        onEscapeKeyDown: a,
                        onPointerDownOutside: u,
                        side: s,
                        sideOffset: f,
                        align: p,
                        alignOffset: g,
                        arrowPadding: w,
                        collisionBoundary: y,
                        collisionPadding: b,
                        sticky: x,
                        hideWhenDetached: C,
                        avoidCollisions: R,
                        ...M
                    } = e, S = ew(eS, n), [P, _] = (0, l.useState)(null), [D, T] = (0, l.useState)(null), k = (0, d.e)(t, e => _(e)), [O, L] = (0, l.useState)(null), [A, I] = (0, l.useState)(null), F = ef(n), [W, V] = (0, l.useState)(!1), Z = (0, l.useRef)(!1);
                    (0, l.useEffect)(() => {
                        if (P) return (0, ei.Ry)(P)
                    }, [P]), (0, l.useEffect)(() => {
                        var e, t;
                        let n = document.querySelectorAll("[data-radix-focus-guard]");
                        return document.body.insertAdjacentElement("afterbegin", null !== (e = n[0]) && void 0 !== e ? e : h()), document.body.insertAdjacentElement("beforeend", null !== (t = n[1]) && void 0 !== t ? t : h()), v++, () => {
                            1 === v && document.querySelectorAll("[data-radix-focus-guard]").forEach(e => e.remove()), v--
                        }
                    }, []);
                    let B = (0, l.useCallback)(e => {
                            let [t, ...n] = F().map(e => e.ref.current), [r] = n.slice(-1), o = document.activeElement;
                            for (let n of e)
                                if (n === o || (null == n || n.scrollIntoView({
                                        block: "nearest"
                                    }), n === t && D && (D.scrollTop = 0), n === r && D && (D.scrollTop = D.scrollHeight), null == n || n.focus(), document.activeElement !== o)) return
                        }, [F, D]),
                        H = (0, l.useCallback)(() => B([O, P]), [B, O, P]);
                    (0, l.useEffect)(() => {
                        W && H()
                    }, [W, H]);
                    let {
                        onOpenChange: K,
                        triggerPointerDownPosRef: N
                    } = S;
                    (0, l.useEffect)(() => {
                        if (P) {
                            let e = {
                                    x: 0,
                                    y: 0
                                },
                                t = t => {
                                    var n, r, o, l;
                                    e = {
                                        x: Math.abs(Math.round(t.pageX) - (null !== (n = null === (r = N.current) || void 0 === r ? void 0 : r.x) && void 0 !== n ? n : 0)),
                                        y: Math.abs(Math.round(t.pageY) - (null !== (o = null === (l = N.current) || void 0 === l ? void 0 : l.y) && void 0 !== o ? o : 0))
                                    }
                                },
                                n = n => {
                                    e.x <= 10 && e.y <= 10 ? n.preventDefault() : P.contains(n.target) || K(!1), document.removeEventListener("pointermove", t), N.current = null
                                };
                            return null !== N.current && (document.addEventListener("pointermove", t), document.addEventListener("pointerup", n, {
                                capture: !0,
                                once: !0
                            })), () => {
                                document.removeEventListener("pointermove", t), document.removeEventListener("pointerup", n, {
                                    capture: !0
                                })
                            }
                        }
                    }, [P, K, N]), (0, l.useEffect)(() => {
                        let e = () => K(!1);
                        return window.addEventListener("blur", e), window.addEventListener("resize", e), () => {
                            window.removeEventListener("blur", e), window.removeEventListener("resize", e)
                        }
                    }, [K]);
                    let [z, U] = eq(e => {
                        let t = F().filter(e => !e.disabled),
                            n = t.find(e => e.ref.current === document.activeElement),
                            r = eJ(t, e, n);
                        r && setTimeout(() => r.ref.current.focus())
                    }), $ = (0, l.useCallback)((e, t, n) => {
                        let r = !Z.current && !n,
                            o = void 0 !== S.value && S.value === t;
                        (o || r) && (L(e), r && (Z.current = !0))
                    }, [S.value]), G = (0, l.useCallback)(() => null == P ? void 0 : P.focus(), [P]), j = (0, l.useCallback)((e, t, n) => {
                        let r = !Z.current && !n,
                            o = void 0 !== S.value && S.value === t;
                        (o || r) && I(e)
                    }, [S.value]), X = "popper" === r ? eO : ek;
                    return (0, l.createElement)(e_, {
                        scope: n,
                        content: P,
                        viewport: D,
                        onViewportChange: T,
                        itemRefCallback: $,
                        selectedItem: O,
                        onItemLeave: G,
                        itemTextRefCallback: j,
                        focusSelectedItem: H,
                        selectedItemText: A,
                        position: r,
                        isPositioned: W,
                        searchRef: z
                    }, (0, l.createElement)(ea.Z, {
                        as: er.g7,
                        allowPinchZoom: !0
                    }, (0, l.createElement)(E, {
                        asChild: !0,
                        trapped: S.open,
                        onMountAutoFocus: e => {
                            e.preventDefault()
                        },
                        onUnmountAutoFocus: (0, c.M)(i, e => {
                            var t;
                            null === (t = S.trigger) || void 0 === t || t.focus({
                                preventScroll: !0
                            }), e.preventDefault()
                        })
                    }, (0, l.createElement)(m.XB, {
                        asChild: !0,
                        disableOutsidePointerEvents: !0,
                        onEscapeKeyDown: a,
                        onPointerDownOutside: u,
                        onFocusOutside: e => e.preventDefault(),
                        onDismiss: () => S.onOpenChange(!1)
                    }, (0, l.createElement)(X, (0, o.Z)({
                        role: "listbox",
                        id: S.contentId,
                        "data-state": S.open ? "open" : "closed",
                        dir: S.dir,
                        onContextMenu: e => e.preventDefault()
                    }, M, X === eO ? {
                        side: s,
                        sideOffset: f,
                        align: p,
                        alignOffset: g,
                        arrowPadding: w,
                        collisionBoundary: y,
                        collisionPadding: b,
                        sticky: x,
                        hideWhenDetached: C,
                        avoidCollisions: R
                    } : {}, {
                        onPlaced: () => V(!0),
                        ref: k,
                        style: {
                            display: "flex",
                            flexDirection: "column",
                            outline: "none",
                            ...M.style
                        },
                        onKeyDown: (0, c.M)(M.onKeyDown, e => {
                            let t = e.ctrlKey || e.altKey || e.metaKey;
                            if ("Tab" === e.key && e.preventDefault(), t || 1 !== e.key.length || U(e.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(e.key)) {
                                let t = F().filter(e => !e.disabled),
                                    n = t.map(e => e.ref.current);
                                if (["ArrowUp", "End"].includes(e.key) && (n = n.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(e.key)) {
                                    let t = e.target,
                                        r = n.indexOf(t);
                                    n = n.slice(r + 1)
                                }
                                setTimeout(() => B(n)), e.preventDefault()
                            }
                        })
                    }))))))
                }),
                ek = (0, l.forwardRef)((e, t) => {
                    let {
                        __scopeSelect: n,
                        onPlaced: r,
                        ...i
                    } = e, a = ew(eS, n), c = eD(eS, n), [s, f] = (0, l.useState)(null), [p, m] = (0, l.useState)(null), v = (0, d.e)(t, e => m(e)), h = ef(n), w = (0, l.useRef)(!1), y = (0, l.useRef)(!0), {
                        viewport: b,
                        selectedItem: x,
                        selectedItemText: E,
                        focusSelectedItem: C
                    } = c, R = (0, l.useCallback)(() => {
                        if (a.trigger && a.valueNode && s && p && b && x && E) {
                            let e = a.trigger.getBoundingClientRect(),
                                t = p.getBoundingClientRect(),
                                n = a.valueNode.getBoundingClientRect(),
                                o = E.getBoundingClientRect();
                            if ("rtl" !== a.dir) {
                                let r = o.left - t.left,
                                    l = n.left - r,
                                    i = e.left - l,
                                    a = e.width + i,
                                    c = Math.max(a, t.width),
                                    d = window.innerWidth - 10,
                                    f = u(l, [10, d - c]);
                                s.style.minWidth = a + "px", s.style.left = f + "px"
                            } else {
                                let r = t.right - o.right,
                                    l = window.innerWidth - n.right - r,
                                    i = window.innerWidth - e.right - l,
                                    a = e.width + i,
                                    c = Math.max(a, t.width),
                                    d = window.innerWidth - 10,
                                    f = u(l, [10, d - c]);
                                s.style.minWidth = a + "px", s.style.right = f + "px"
                            }
                            let l = h(),
                                i = window.innerHeight - 20,
                                c = b.scrollHeight,
                                d = window.getComputedStyle(p),
                                f = parseInt(d.borderTopWidth, 10),
                                m = parseInt(d.paddingTop, 10),
                                v = parseInt(d.borderBottomWidth, 10),
                                g = parseInt(d.paddingBottom, 10),
                                y = f + m + c + g + v,
                                C = Math.min(5 * x.offsetHeight, y),
                                R = window.getComputedStyle(b),
                                M = parseInt(R.paddingTop, 10),
                                S = parseInt(R.paddingBottom, 10),
                                P = e.top + e.height / 2 - 10,
                                _ = x.offsetHeight / 2,
                                D = x.offsetTop + _,
                                T = f + m + D;
                            if (T <= P) {
                                let e = x === l[l.length - 1].ref.current;
                                s.style.bottom = "0px";
                                let t = p.clientHeight - b.offsetTop - b.offsetHeight;
                                s.style.height = T + Math.max(i - P, _ + (e ? S : 0) + t + v) + "px"
                            } else {
                                let e = x === l[0].ref.current;
                                s.style.top = "0px";
                                let t = Math.max(P, f + b.offsetTop + (e ? M : 0) + _);
                                s.style.height = t + (y - T) + "px", b.scrollTop = T - P + b.offsetTop
                            }
                            s.style.margin = "10px 0", s.style.minHeight = C + "px", s.style.maxHeight = i + "px", null == r || r(), requestAnimationFrame(() => w.current = !0)
                        }
                    }, [h, a.trigger, a.valueNode, s, p, b, x, E, a.dir, r]);
                    (0, _.b)(() => R(), [R]);
                    let [M, S] = (0, l.useState)();
                    (0, _.b)(() => {
                        p && S(window.getComputedStyle(p).zIndex)
                    }, [p]);
                    let P = (0, l.useCallback)(e => {
                        e && !0 === y.current && (R(), null == C || C(), y.current = !1)
                    }, [R, C]);
                    return (0, l.createElement)(eL, {
                        scope: n,
                        contentWrapper: s,
                        shouldExpandOnScrollRef: w,
                        onScrollButtonChange: P
                    }, (0, l.createElement)("div", {
                        ref: f,
                        style: {
                            display: "flex",
                            flexDirection: "column",
                            position: "fixed",
                            zIndex: M
                        }
                    }, (0, l.createElement)(g.WV.div, (0, o.Z)({}, i, {
                        ref: v,
                        style: {
                            boxSizing: "border-box",
                            maxHeight: "100%",
                            ...i.style
                        }
                    }))))
                }),
                eO = (0, l.forwardRef)((e, t) => {
                    let {
                        __scopeSelect: n,
                        align: r = "start",
                        collisionPadding: i = 10,
                        ...a
                    } = e, u = eh(n);
                    return (0, l.createElement)(q, (0, o.Z)({}, u, a, {
                        ref: t,
                        align: r,
                        collisionPadding: i,
                        style: {
                            boxSizing: "border-box",
                            ...a.style,
                            "--radix-select-content-transform-origin": "var(--radix-popper-transform-origin)",
                            "--radix-select-content-available-width": "var(--radix-popper-available-width)",
                            "--radix-select-content-available-height": "var(--radix-popper-available-height)",
                            "--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
                            "--radix-select-trigger-height": "var(--radix-popper-anchor-height)"
                        }
                    }))
                }),
                [eL, eA] = em(eS, {}),
                eI = "SelectViewport",
                eF = (0, l.forwardRef)((e, t) => {
                    let {
                        __scopeSelect: n,
                        ...r
                    } = e, i = eD(eI, n), a = eA(eI, n), u = (0, d.e)(t, i.onViewportChange), s = (0, l.useRef)(0);
                    return (0, l.createElement)(l.Fragment, null, (0, l.createElement)("style", {
                        dangerouslySetInnerHTML: {
                            __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
                        }
                    }), (0, l.createElement)(ed.Slot, {
                        scope: n
                    }, (0, l.createElement)(g.WV.div, (0, o.Z)({
                        "data-radix-select-viewport": "",
                        role: "presentation"
                    }, r, {
                        ref: u,
                        style: {
                            position: "relative",
                            flex: 1,
                            overflow: "auto",
                            ...r.style
                        },
                        onScroll: (0, c.M)(r.onScroll, e => {
                            let t = e.currentTarget,
                                {
                                    contentWrapper: n,
                                    shouldExpandOnScrollRef: r
                                } = a;
                            if (null != r && r.current && n) {
                                let e = Math.abs(s.current - t.scrollTop);
                                if (e > 0) {
                                    let r = window.innerHeight - 20,
                                        o = parseFloat(n.style.minHeight),
                                        l = parseFloat(n.style.height),
                                        i = Math.max(o, l);
                                    if (i < r) {
                                        let o = i + e,
                                            l = Math.min(r, o),
                                            a = o - l;
                                        n.style.height = l + "px", "0px" === n.style.bottom && (t.scrollTop = a > 0 ? a : 0, n.style.justifyContent = "flex-end")
                                    }
                                }
                            }
                            s.current = t.scrollTop
                        })
                    }))))
                }),
                [eW, eV] = em("SelectGroup"),
                eZ = "SelectItem",
                [eB, eH] = em(eZ),
                eK = (0, l.forwardRef)((e, t) => {
                    let {
                        __scopeSelect: n,
                        value: r,
                        disabled: i = !1,
                        textValue: a,
                        ...u
                    } = e, s = ew(eZ, n), f = eD(eZ, n), p = s.value === r, [m, v] = (0, l.useState)(null != a ? a : ""), [h, w] = (0, l.useState)(!1), y = (0, d.e)(t, e => {
                        var t;
                        return null === (t = f.itemRefCallback) || void 0 === t ? void 0 : t.call(f, e, r, i)
                    }), b = k(), x = () => {
                        i || (s.onValueChange(r), s.onOpenChange(!1))
                    };
                    return (0, l.createElement)(eB, {
                        scope: n,
                        value: r,
                        disabled: i,
                        textId: b,
                        isSelected: p,
                        onItemTextChange: (0, l.useCallback)(e => {
                            v(t => {
                                var n;
                                return t || (null !== (n = null == e ? void 0 : e.textContent) && void 0 !== n ? n : "").trim()
                            })
                        }, [])
                    }, (0, l.createElement)(ed.ItemSlot, {
                        scope: n,
                        value: r,
                        disabled: i,
                        textValue: m
                    }, (0, l.createElement)(g.WV.div, (0, o.Z)({
                        role: "option",
                        "aria-labelledby": b,
                        "data-highlighted": h ? "" : void 0,
                        "aria-selected": p && h,
                        "data-state": p ? "checked" : "unchecked",
                        "aria-disabled": i || void 0,
                        "data-disabled": i ? "" : void 0,
                        tabIndex: i ? void 0 : -1
                    }, u, {
                        ref: y,
                        onFocus: (0, c.M)(u.onFocus, () => w(!0)),
                        onBlur: (0, c.M)(u.onBlur, () => w(!1)),
                        onPointerUp: (0, c.M)(u.onPointerUp, x),
                        onPointerMove: (0, c.M)(u.onPointerMove, e => {
                            if (i) {
                                var t;
                                null === (t = f.onItemLeave) || void 0 === t || t.call(f)
                            } else e.currentTarget.focus({
                                preventScroll: !0
                            })
                        }),
                        onPointerLeave: (0, c.M)(u.onPointerLeave, e => {
                            if (e.currentTarget === document.activeElement) {
                                var t;
                                null === (t = f.onItemLeave) || void 0 === t || t.call(f)
                            }
                        }),
                        onKeyDown: (0, c.M)(u.onKeyDown, e => {
                            var t;
                            let n = (null === (t = f.searchRef) || void 0 === t ? void 0 : t.current) !== "";
                            n && " " === e.key || (ec.includes(e.key) && x(), " " === e.key && e.preventDefault())
                        })
                    }))))
                }),
                eN = "SelectItemText",
                ez = (0, l.forwardRef)((e, t) => {
                    let {
                        __scopeSelect: n,
                        className: r,
                        style: i,
                        ...u
                    } = e, c = ew(eN, n), s = eD(eN, n), f = eH(eN, n), p = eb(eN, n), [m, v] = (0, l.useState)(null), h = (0, d.e)(t, e => v(e), f.onItemTextChange, e => {
                        var t;
                        return null === (t = s.itemTextRefCallback) || void 0 === t ? void 0 : t.call(s, e, f.value, f.disabled)
                    }), w = null == m ? void 0 : m.textContent, y = (0, l.useMemo)(() => (0, l.createElement)("option", {
                        key: f.value,
                        value: f.value,
                        disabled: f.disabled
                    }, w), [f.disabled, f.value, w]), {
                        onNativeOptionAdd: b,
                        onNativeOptionRemove: x
                    } = p;
                    return (0, _.b)(() => (b(y), () => x(y)), [b, x, y]), (0, l.createElement)(l.Fragment, null, (0, l.createElement)(g.WV.span, (0, o.Z)({
                        id: f.textId
                    }, u, {
                        ref: h
                    })), f.isSelected && c.valueNode && !c.valueNodeHasChildren ? (0, a.createPortal)(u.children, c.valueNode) : null)
                }),
                eU = "SelectScrollUpButton",
                e$ = (0, l.forwardRef)((e, t) => {
                    let n = eD(eU, e.__scopeSelect),
                        r = eA(eU, e.__scopeSelect),
                        [i, a] = (0, l.useState)(!1),
                        u = (0, d.e)(t, r.onScrollButtonChange);
                    return (0, _.b)(() => {
                        if (n.viewport && n.isPositioned) {
                            let t = n.viewport;

                            function e() {
                                let e = t.scrollTop > 0;
                                a(e)
                            }
                            return e(), t.addEventListener("scroll", e), () => t.removeEventListener("scroll", e)
                        }
                    }, [n.viewport, n.isPositioned]), i ? (0, l.createElement)(eX, (0, o.Z)({}, e, {
                        ref: u,
                        onAutoScroll: () => {
                            let {
                                viewport: e,
                                selectedItem: t
                            } = n;
                            e && t && (e.scrollTop = e.scrollTop - t.offsetHeight)
                        }
                    })) : null
                }),
                eG = "SelectScrollDownButton",
                ej = (0, l.forwardRef)((e, t) => {
                    let n = eD(eG, e.__scopeSelect),
                        r = eA(eG, e.__scopeSelect),
                        [i, a] = (0, l.useState)(!1),
                        u = (0, d.e)(t, r.onScrollButtonChange);
                    return (0, _.b)(() => {
                        if (n.viewport && n.isPositioned) {
                            let t = n.viewport;

                            function e() {
                                let e = t.scrollHeight - t.clientHeight,
                                    n = Math.ceil(t.scrollTop) < e;
                                a(n)
                            }
                            return e(), t.addEventListener("scroll", e), () => t.removeEventListener("scroll", e)
                        }
                    }, [n.viewport, n.isPositioned]), i ? (0, l.createElement)(eX, (0, o.Z)({}, e, {
                        ref: u,
                        onAutoScroll: () => {
                            let {
                                viewport: e,
                                selectedItem: t
                            } = n;
                            e && t && (e.scrollTop = e.scrollTop + t.offsetHeight)
                        }
                    })) : null
                }),
                eX = (0, l.forwardRef)((e, t) => {
                    let {
                        __scopeSelect: n,
                        onAutoScroll: r,
                        ...i
                    } = e, a = eD("SelectScrollButton", n), u = (0, l.useRef)(null), s = ef(n), d = (0, l.useCallback)(() => {
                        null !== u.current && (window.clearInterval(u.current), u.current = null)
                    }, []);
                    return (0, l.useEffect)(() => () => d(), [d]), (0, _.b)(() => {
                        var e;
                        let t = s().find(e => e.ref.current === document.activeElement);
                        null == t || null === (e = t.ref.current) || void 0 === e || e.scrollIntoView({
                            block: "nearest"
                        })
                    }, [s]), (0, l.createElement)(g.WV.div, (0, o.Z)({
                        "aria-hidden": !0
                    }, i, {
                        ref: t,
                        style: {
                            flexShrink: 0,
                            ...i.style
                        },
                        onPointerDown: (0, c.M)(i.onPointerDown, () => {
                            null === u.current && (u.current = window.setInterval(r, 50))
                        }),
                        onPointerMove: (0, c.M)(i.onPointerMove, () => {
                            var e;
                            null === (e = a.onItemLeave) || void 0 === e || e.call(a), null === u.current && (u.current = window.setInterval(r, 50))
                        }),
                        onPointerLeave: (0, c.M)(i.onPointerLeave, () => {
                            d()
                        })
                    }))
                }),
                eY = (0, l.forwardRef)((e, t) => {
                    let {
                        value: n,
                        ...r
                    } = e, i = (0, l.useRef)(null), a = (0, d.e)(t, i), u = function(e) {
                        let t = (0, l.useRef)({
                            value: e,
                            previous: e
                        });
                        return (0, l.useMemo)(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [e])
                    }(n);
                    return (0, l.useEffect)(() => {
                        let e = i.current,
                            t = window.HTMLSelectElement.prototype,
                            r = Object.getOwnPropertyDescriptor(t, "value"),
                            o = r.set;
                        if (u !== n && o) {
                            let t = new Event("change", {
                                bubbles: !0
                            });
                            o.call(e, n), e.dispatchEvent(t)
                        }
                    }, [u, n]), (0, l.createElement)(el.T, {
                        asChild: !0
                    }, (0, l.createElement)("select", (0, o.Z)({}, r, {
                        ref: a,
                        defaultValue: n
                    })))
                });

            function eq(e) {
                let t = (0, w.W)(e),
                    n = (0, l.useRef)(""),
                    r = (0, l.useRef)(0),
                    o = (0, l.useCallback)(e => {
                        let o = n.current + e;
                        t(o),
                            function e(t) {
                                n.current = t, window.clearTimeout(r.current), "" !== t && (r.current = window.setTimeout(() => e(""), 1e3))
                            }(o)
                    }, [t]),
                    i = (0, l.useCallback)(() => {
                        n.current = "", window.clearTimeout(r.current)
                    }, []);
                return (0, l.useEffect)(() => () => window.clearTimeout(r.current), []), [n, o, i]
            }

            function eJ(e, t, n) {
                var r;
                let o = t.length > 1 && Array.from(t).every(e => e === t[0]),
                    l = o ? t[0] : t,
                    i = n ? e.indexOf(n) : -1,
                    a = (r = Math.max(i, 0), e.map((t, n) => e[(r + n) % e.length])),
                    u = 1 === l.length;
                u && (a = a.filter(e => e !== n));
                let c = a.find(e => e.textValue.toLowerCase().startsWith(l.toLowerCase()));
                return c !== n ? c : void 0
            }
            eY.displayName = "BubbleSelect";
            let eQ = ex,
                e0 = eE,
                e1 = eC,
                e7 = eR,
                e2 = eM,
                e5 = eP,
                e9 = eF,
                e6 = eK,
                e3 = ez,
                e8 = e$,
                e4 = ej
        },
        51629: function(e, t, n) {
            n.d(t, {
                W: function() {
                    return o
                }
            });
            var r = n(70079);

            function o(e) {
                let t = (0, r.useRef)(e);
                return (0, r.useEffect)(() => {
                    t.current = e
                }), (0, r.useMemo)(() => (...e) => {
                    var n;
                    return null === (n = t.current) || void 0 === n ? void 0 : n.call(t, ...e)
                }, [])
            }
        },
        21381: function(e, t, n) {
            n.d(t, {
                T: function() {
                    return l
                }
            });
            var r = n(70079),
                o = n(51629);

            function l({
                prop: e,
                defaultProp: t,
                onChange: n = () => {}
            }) {
                let [l, i] = function({
                    defaultProp: e,
                    onChange: t
                }) {
                    let n = (0, r.useState)(e),
                        [l] = n,
                        i = (0, r.useRef)(l),
                        a = (0, o.W)(t);
                    return (0, r.useEffect)(() => {
                        i.current !== l && (a(l), i.current = l)
                    }, [l, i, a]), n
                }({
                    defaultProp: t,
                    onChange: n
                }), a = void 0 !== e, u = (0, o.W)(n), c = (0, r.useCallback)(t => {
                    if (a) {
                        let n = "function" == typeof t ? t(e) : t;
                        n !== e && u(n)
                    } else i(t)
                }, [a, e, i, u]);
                return [a ? e : l, c]
            }
        },
        90671: function(e, t, n) {
            n.d(t, {
                b: function() {
                    return o
                }
            });
            var r = n(70079);
            let o = (null == globalThis ? void 0 : globalThis.document) ? r.useLayoutEffect : () => {}
        },
        74686: function(e, t, n) {
            n.d(t, {
                D: function() {
                    return f
                }
            });
            var r = n(70079),
                o = n(71568),
                l = n(16456),
                i = n(57630),
                a = n(84427),
                u = n(28197);
            class c extends u.l {
                constructor(e, t) {
                    super(), this.client = e, this.setOptions(t), this.bindMethods(), this.updateResult()
                }
                bindMethods() {
                    this.mutate = this.mutate.bind(this), this.reset = this.reset.bind(this)
                }
                setOptions(e) {
                    var t;
                    let n = this.options;
                    this.options = this.client.defaultMutationOptions(e), (0, l.VS)(n, this.options) || this.client.getMutationCache().notify({
                        type: "observerOptionsUpdated",
                        mutation: this.currentMutation,
                        observer: this
                    }), null == (t = this.currentMutation) || t.setOptions(this.options)
                }
                onUnsubscribe() {
                    if (!this.listeners.length) {
                        var e;
                        null == (e = this.currentMutation) || e.removeObserver(this)
                    }
                }
                onMutationUpdate(e) {
                    this.updateResult();
                    let t = {
                        listeners: !0
                    };
                    "success" === e.type ? t.onSuccess = !0 : "error" === e.type && (t.onError = !0), this.notify(t)
                }
                getCurrentResult() {
                    return this.currentResult
                }
                reset() {
                    this.currentMutation = void 0, this.updateResult(), this.notify({
                        listeners: !0
                    })
                }
                mutate(e, t) {
                    return this.mutateOptions = t, this.currentMutation && this.currentMutation.removeObserver(this), this.currentMutation = this.client.getMutationCache().build(this.client, { ...this.options,
                        variables: void 0 !== e ? e : this.options.variables
                    }), this.currentMutation.addObserver(this), this.currentMutation.execute()
                }
                updateResult() {
                    let e = this.currentMutation ? this.currentMutation.state : (0, i.R)(),
                        t = { ...e,
                            isLoading: "loading" === e.status,
                            isSuccess: "success" === e.status,
                            isError: "error" === e.status,
                            isIdle: "idle" === e.status,
                            mutate: this.mutate,
                            reset: this.reset
                        };
                    this.currentResult = t
                }
                notify(e) {
                    a.V.batch(() => {
                        if (this.mutateOptions && this.hasListeners()) {
                            var t, n, r, o, l, i, a, u;
                            e.onSuccess ? (null == (t = (n = this.mutateOptions).onSuccess) || t.call(n, this.currentResult.data, this.currentResult.variables, this.currentResult.context), null == (r = (o = this.mutateOptions).onSettled) || r.call(o, this.currentResult.data, null, this.currentResult.variables, this.currentResult.context)) : e.onError && (null == (l = (i = this.mutateOptions).onError) || l.call(i, this.currentResult.error, this.currentResult.variables, this.currentResult.context), null == (a = (u = this.mutateOptions).onSettled) || a.call(u, void 0, this.currentResult.error, this.currentResult.variables, this.currentResult.context))
                        }
                        e.listeners && this.listeners.forEach(e => {
                            e(this.currentResult)
                        })
                    })
                }
            }
            var s = n(13995),
                d = n(18122);

            function f(e, t, n) {
                let i = (0, l.lV)(e, t, n),
                    u = (0, s.NL)({
                        context: i.context
                    }),
                    [f] = r.useState(() => new c(u, i));
                r.useEffect(() => {
                    f.setOptions(i)
                }, [f, i]);
                let m = (0, o.$)(r.useCallback(e => f.subscribe(a.V.batchCalls(e)), [f]), () => f.getCurrentResult(), () => f.getCurrentResult()),
                    v = r.useCallback((e, t) => {
                        f.mutate(e, t).catch(p)
                    }, [f]);
                if (m.error && (0, d.L)(f.options.useErrorBoundary, [m.error])) throw m.error;
                return { ...m,
                    mutate: v,
                    mutateAsync: m.mutate
                }
            }

            function p() {}
        }
    }
]);