(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [7483], {
        6013: function(e, t, n) {
            "use strict";
            n.d(t, {
                Eh: function() {
                    return V
                },
                VY: function() {
                    return U
                },
                fC: function() {
                    return B
                },
                h_: function() {
                    return q
                },
                x8: function() {
                    return z
                },
                xz: function() {
                    return K
                }
            });
            var r = n(45675),
                i = n(70079),
                s = n(72901),
                o = n(49270),
                a = n(36646),
                l = n(49515),
                c = n(54386),
                u = n(44480),
                f = n(88817),
                p = n(25373),
                h = n(67323),
                d = n(55691),
                m = n(39073),
                y = n(94251),
                g = n(86004),
                b = n(66546),
                v = n(54239);
            let w = "Popover",
                [k, E] = (0, a.b)(w, [p.D7]),
                S = (0, p.D7)(),
                [O, A] = k(w),
                _ = e => {
                    let {
                        __scopePopover: t,
                        children: n,
                        open: r,
                        defaultOpen: s,
                        onOpenChange: o,
                        modal: a = !1
                    } = e, l = S(t), c = (0, i.useRef)(null), [u, h] = (0, i.useState)(!1), [d = !1, m] = (0, g.T)({
                        prop: r,
                        defaultProp: s,
                        onChange: o
                    });
                    return (0, i.createElement)(p.fC, l, (0, i.createElement)(O, {
                        scope: t,
                        contentId: (0, f.M)(),
                        triggerRef: c,
                        open: d,
                        onOpenChange: m,
                        onOpenToggle: (0, i.useCallback)(() => m(e => !e), [m]),
                        hasCustomAnchor: u,
                        onCustomAnchorAdd: (0, i.useCallback)(() => h(!0), []),
                        onCustomAnchorRemove: (0, i.useCallback)(() => h(!1), []),
                        modal: a
                    }, n))
                },
                x = (0, i.forwardRef)((e, t) => {
                    let {
                        __scopePopover: n,
                        ...a
                    } = e, l = A("PopoverTrigger", n), c = S(n), u = (0, o.e)(t, l.triggerRef), f = (0, i.createElement)(m.WV.button, (0, r.Z)({
                        type: "button",
                        "aria-haspopup": "dialog",
                        "aria-expanded": l.open,
                        "aria-controls": l.contentId,
                        "data-state": R(l.open)
                    }, a, {
                        ref: u,
                        onClick: (0, s.M)(e.onClick, l.onOpenToggle)
                    }));
                    return l.hasCustomAnchor ? f : (0, i.createElement)(p.ee, (0, r.Z)({
                        asChild: !0
                    }, c), f)
                }),
                N = "PopoverPortal",
                [T, I] = k(N, {
                    forceMount: void 0
                }),
                C = e => {
                    let {
                        __scopePopover: t,
                        forceMount: n,
                        children: r,
                        container: s
                    } = e, o = A(N, t);
                    return (0, i.createElement)(T, {
                        scope: t,
                        forceMount: n
                    }, (0, i.createElement)(d.z, {
                        present: n || o.open
                    }, (0, i.createElement)(h.h, {
                        asChild: !0,
                        container: s
                    }, r)))
                },
                j = "PopoverContent",
                D = (0, i.forwardRef)((e, t) => {
                    let n = I(j, e.__scopePopover),
                        {
                            forceMount: s = n.forceMount,
                            ...o
                        } = e,
                        a = A(j, e.__scopePopover);
                    return (0, i.createElement)(d.z, {
                        present: s || a.open
                    }, a.modal ? (0, i.createElement)(P, (0, r.Z)({}, o, {
                        ref: t
                    })) : (0, i.createElement)(L, (0, r.Z)({}, o, {
                        ref: t
                    })))
                }),
                P = (0, i.forwardRef)((e, t) => {
                    let n = A(j, e.__scopePopover),
                        a = (0, i.useRef)(null),
                        l = (0, o.e)(t, a),
                        c = (0, i.useRef)(!1);
                    return (0, i.useEffect)(() => {
                        let e = a.current;
                        if (e) return (0, b.Ry)(e)
                    }, []), (0, i.createElement)(v.Z, {
                        as: y.g7,
                        allowPinchZoom: !0
                    }, (0, i.createElement)($, (0, r.Z)({}, e, {
                        ref: l,
                        trapFocus: n.open,
                        disableOutsidePointerEvents: !0,
                        onCloseAutoFocus: (0, s.M)(e.onCloseAutoFocus, e => {
                            var t;
                            e.preventDefault(), c.current || null === (t = n.triggerRef.current) || void 0 === t || t.focus()
                        }),
                        onPointerDownOutside: (0, s.M)(e.onPointerDownOutside, e => {
                            let t = e.detail.originalEvent,
                                n = 0 === t.button && !0 === t.ctrlKey,
                                r = 2 === t.button || n;
                            c.current = r
                        }, {
                            checkForDefaultPrevented: !1
                        }),
                        onFocusOutside: (0, s.M)(e.onFocusOutside, e => e.preventDefault(), {
                            checkForDefaultPrevented: !1
                        })
                    })))
                }),
                L = (0, i.forwardRef)((e, t) => {
                    let n = A(j, e.__scopePopover),
                        s = (0, i.useRef)(!1);
                    return (0, i.createElement)($, (0, r.Z)({}, e, {
                        ref: t,
                        trapFocus: !1,
                        disableOutsidePointerEvents: !1,
                        onCloseAutoFocus: t => {
                            var r, i;
                            null === (r = e.onCloseAutoFocus) || void 0 === r || r.call(e, t), t.defaultPrevented || (s.current || null === (i = n.triggerRef.current) || void 0 === i || i.focus(), t.preventDefault()), s.current = !1
                        },
                        onInteractOutside: t => {
                            var r, i;
                            null === (r = e.onInteractOutside) || void 0 === r || r.call(e, t), t.defaultPrevented || (s.current = !0);
                            let o = t.target,
                                a = null === (i = n.triggerRef.current) || void 0 === i ? void 0 : i.contains(o);
                            a && t.preventDefault()
                        }
                    }))
                }),
                $ = (0, i.forwardRef)((e, t) => {
                    let {
                        __scopePopover: n,
                        trapFocus: s,
                        onOpenAutoFocus: o,
                        onCloseAutoFocus: a,
                        disableOutsidePointerEvents: f,
                        onEscapeKeyDown: h,
                        onPointerDownOutside: d,
                        onFocusOutside: m,
                        onInteractOutside: y,
                        ...g
                    } = e, b = A(j, n), v = S(n);
                    return (0, c.EW)(), (0, i.createElement)(u.M, {
                        asChild: !0,
                        loop: !0,
                        trapped: s,
                        onMountAutoFocus: o,
                        onUnmountAutoFocus: a
                    }, (0, i.createElement)(l.XB, {
                        asChild: !0,
                        disableOutsidePointerEvents: f,
                        onInteractOutside: y,
                        onEscapeKeyDown: h,
                        onPointerDownOutside: d,
                        onFocusOutside: m,
                        onDismiss: () => b.onOpenChange(!1)
                    }, (0, i.createElement)(p.VY, (0, r.Z)({
                        "data-state": R(b.open),
                        role: "dialog",
                        id: b.contentId
                    }, v, g, {
                        ref: t,
                        style: { ...g.style,
                            "--radix-popover-content-transform-origin": "var(--radix-popper-transform-origin)",
                            "--radix-popover-content-available-width": "var(--radix-popper-available-width)",
                            "--radix-popover-content-available-height": "var(--radix-popper-available-height)",
                            "--radix-popover-trigger-width": "var(--radix-popper-anchor-width)",
                            "--radix-popover-trigger-height": "var(--radix-popper-anchor-height)"
                        }
                    }))))
                }),
                M = (0, i.forwardRef)((e, t) => {
                    let {
                        __scopePopover: n,
                        ...o
                    } = e, a = A("PopoverClose", n);
                    return (0, i.createElement)(m.WV.button, (0, r.Z)({
                        type: "button"
                    }, o, {
                        ref: t,
                        onClick: (0, s.M)(e.onClick, () => a.onOpenChange(!1))
                    }))
                }),
                F = (0, i.forwardRef)((e, t) => {
                    let {
                        __scopePopover: n,
                        ...s
                    } = e, o = S(n);
                    return (0, i.createElement)(p.Eh, (0, r.Z)({}, o, s, {
                        ref: t
                    }))
                });

            function R(e) {
                return e ? "open" : "closed"
            }
            let B = _,
                K = x,
                q = C,
                U = D,
                z = M,
                V = F
        },
        47103: function(e, t, n) {
            "use strict";
            n.d(t, {
                fC: function() {
                    return w
                },
                bU: function() {
                    return k
                }
            });
            var r = n(45675),
                i = n(70079),
                s = n(72901),
                o = n(49270),
                a = n(36646),
                l = n(86004),
                c = n(82094),
                u = n(39073);
            let f = "Switch",
                [p, h] = (0, a.b)(f),
                [d, m] = p(f),
                y = (0, i.forwardRef)((e, t) => {
                    let {
                        __scopeSwitch: n,
                        name: a,
                        checked: c,
                        defaultChecked: f,
                        required: p,
                        disabled: h,
                        value: m = "on",
                        onCheckedChange: y,
                        ...g
                    } = e, [w, k] = (0, i.useState)(null), E = (0, o.e)(t, e => k(e)), S = (0, i.useRef)(!1), O = !w || !!w.closest("form"), [A = !1, _] = (0, l.T)({
                        prop: c,
                        defaultProp: f,
                        onChange: y
                    });
                    return (0, i.createElement)(d, {
                        scope: n,
                        checked: A,
                        disabled: h
                    }, (0, i.createElement)(u.WV.button, (0, r.Z)({
                        type: "button",
                        role: "switch",
                        "aria-checked": A,
                        "aria-required": p,
                        "data-state": v(A),
                        "data-disabled": h ? "" : void 0,
                        disabled: h,
                        value: m
                    }, g, {
                        ref: E,
                        onClick: (0, s.M)(e.onClick, e => {
                            _(e => !e), O && (S.current = e.isPropagationStopped(), S.current || e.stopPropagation())
                        })
                    })), O && (0, i.createElement)(b, {
                        control: w,
                        bubbles: !S.current,
                        name: a,
                        value: m,
                        checked: A,
                        required: p,
                        disabled: h,
                        style: {
                            transform: "translateX(-100%)"
                        }
                    }))
                }),
                g = (0, i.forwardRef)((e, t) => {
                    let {
                        __scopeSwitch: n,
                        ...s
                    } = e, o = m("SwitchThumb", n);
                    return (0, i.createElement)(u.WV.span, (0, r.Z)({
                        "data-state": v(o.checked),
                        "data-disabled": o.disabled ? "" : void 0
                    }, s, {
                        ref: t
                    }))
                }),
                b = e => {
                    let {
                        control: t,
                        checked: n,
                        bubbles: s = !0,
                        ...o
                    } = e, a = (0, i.useRef)(null), l = function(e) {
                        let t = (0, i.useRef)({
                            value: e,
                            previous: e
                        });
                        return (0, i.useMemo)(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [e])
                    }(n), u = (0, c.t)(t);
                    return (0, i.useEffect)(() => {
                        let e = a.current,
                            t = window.HTMLInputElement.prototype,
                            r = Object.getOwnPropertyDescriptor(t, "checked"),
                            i = r.set;
                        if (l !== n && i) {
                            let t = new Event("click", {
                                bubbles: s
                            });
                            i.call(e, n), e.dispatchEvent(t)
                        }
                    }, [l, n, s]), (0, i.createElement)("input", (0, r.Z)({
                        type: "checkbox",
                        "aria-hidden": !0,
                        defaultChecked: n
                    }, o, {
                        tabIndex: -1,
                        ref: a,
                        style: { ...e.style,
                            ...u,
                            position: "absolute",
                            pointerEvents: "none",
                            opacity: 0,
                            margin: 0
                        }
                    }))
                };

            function v(e) {
                return e ? "checked" : "unchecked"
            }
            let w = y,
                k = g
        },
        65374: function(e, t, n) {
            "use strict";
            n.d(t, {
                VY: function() {
                    return N
                },
                aV: function() {
                    return _
                },
                fC: function() {
                    return A
                },
                xz: function() {
                    return x
                }
            });
            var r = n(45675),
                i = n(70079),
                s = n(72901),
                o = n(36646),
                a = n(83208),
                l = n(55691),
                c = n(39073),
                u = n(28036),
                f = n(86004),
                p = n(88817);
            let h = "Tabs",
                [d, m] = (0, o.b)(h, [a.Pc]),
                y = (0, a.Pc)(),
                [g, b] = d(h),
                v = (0, i.forwardRef)((e, t) => {
                    let {
                        __scopeTabs: n,
                        value: s,
                        onValueChange: o,
                        defaultValue: a,
                        orientation: l = "horizontal",
                        dir: h,
                        activationMode: d = "automatic",
                        ...m
                    } = e, y = (0, u.gm)(h), [b, v] = (0, f.T)({
                        prop: s,
                        onChange: o,
                        defaultProp: a
                    });
                    return (0, i.createElement)(g, {
                        scope: n,
                        baseId: (0, p.M)(),
                        value: b,
                        onValueChange: v,
                        orientation: l,
                        dir: y,
                        activationMode: d
                    }, (0, i.createElement)(c.WV.div, (0, r.Z)({
                        dir: y,
                        "data-orientation": l
                    }, m, {
                        ref: t
                    })))
                }),
                w = (0, i.forwardRef)((e, t) => {
                    let {
                        __scopeTabs: n,
                        loop: s = !0,
                        ...o
                    } = e, l = b("TabsList", n), u = y(n);
                    return (0, i.createElement)(a.fC, (0, r.Z)({
                        asChild: !0
                    }, u, {
                        orientation: l.orientation,
                        dir: l.dir,
                        loop: s
                    }), (0, i.createElement)(c.WV.div, (0, r.Z)({
                        role: "tablist",
                        "aria-orientation": l.orientation
                    }, o, {
                        ref: t
                    })))
                }),
                k = (0, i.forwardRef)((e, t) => {
                    let {
                        __scopeTabs: n,
                        value: o,
                        disabled: l = !1,
                        ...u
                    } = e, f = b("TabsTrigger", n), p = y(n), h = S(f.baseId, o), d = O(f.baseId, o), m = o === f.value;
                    return (0, i.createElement)(a.ck, (0, r.Z)({
                        asChild: !0
                    }, p, {
                        focusable: !l,
                        active: m
                    }), (0, i.createElement)(c.WV.button, (0, r.Z)({
                        type: "button",
                        role: "tab",
                        "aria-selected": m,
                        "aria-controls": d,
                        "data-state": m ? "active" : "inactive",
                        "data-disabled": l ? "" : void 0,
                        disabled: l,
                        id: h
                    }, u, {
                        ref: t,
                        onMouseDown: (0, s.M)(e.onMouseDown, e => {
                            l || 0 !== e.button || !1 !== e.ctrlKey ? e.preventDefault() : f.onValueChange(o)
                        }),
                        onKeyDown: (0, s.M)(e.onKeyDown, e => {
                            [" ", "Enter"].includes(e.key) && f.onValueChange(o)
                        }),
                        onFocus: (0, s.M)(e.onFocus, () => {
                            let e = "manual" !== f.activationMode;
                            m || l || !e || f.onValueChange(o)
                        })
                    })))
                }),
                E = (0, i.forwardRef)((e, t) => {
                    let {
                        __scopeTabs: n,
                        value: s,
                        forceMount: o,
                        children: a,
                        ...u
                    } = e, f = b("TabsContent", n), p = S(f.baseId, s), h = O(f.baseId, s), d = s === f.value, m = (0, i.useRef)(d);
                    return (0, i.useEffect)(() => {
                        let e = requestAnimationFrame(() => m.current = !1);
                        return () => cancelAnimationFrame(e)
                    }, []), (0, i.createElement)(l.z, {
                        present: o || d
                    }, ({
                        present: n
                    }) => (0, i.createElement)(c.WV.div, (0, r.Z)({
                        "data-state": d ? "active" : "inactive",
                        "data-orientation": f.orientation,
                        role: "tabpanel",
                        "aria-labelledby": p,
                        hidden: !n,
                        id: h,
                        tabIndex: 0
                    }, u, {
                        ref: t,
                        style: { ...e.style,
                            animationDuration: m.current ? "0s" : void 0
                        }
                    }), n && a))
                });

            function S(e, t) {
                return `${e}-trigger-${t}`
            }

            function O(e, t) {
                return `${e}-content-${t}`
            }
            let A = v,
                _ = w,
                x = k,
                N = E
        },
        97325: function(e, t) {
            "use strict";
            t.Z = function(e, t) {
                if (e && t) {
                    var n = Array.isArray(t) ? t : t.split(","),
                        r = e.name || "",
                        i = (e.type || "").toLowerCase(),
                        s = i.replace(/\/.*$/, "");
                    return n.some(function(e) {
                        var t = e.trim().toLowerCase();
                        return "." === t.charAt(0) ? r.toLowerCase().endsWith(t) : t.endsWith("/*") ? s === t.replace(/\/.*$/, "") : i === t
                    })
                }
                return !0
            }
        },
        65237: function(e, t) {
            var n = Object.keys;
            t.D = function(e, t) {
                if (e === t) return !0;
                if (!(e instanceof Object) || !(t instanceof Object)) return !1;
                for (var r = n(e), i = r.length, s = 0; s < i; s++)
                    if (!(r[s] in t)) return !1;
                for (var s = 0; s < i; s++)
                    if (e[r[s]] !== t[r[s]]) return !1;
                return i === n(t).length
            }
        },
        84251: function(e, t, n) {
            "use strict";
            var r = n(44675);

            function i(e) {
                return "object" != typeof e || "toString" in e ? e : Object.prototype.toString.call(e).slice(8, -1)
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var s = "object" == typeof r;

            function o(e, t) {
                if (!e) {
                    if (s) throw Error("Invariant failed");
                    throw Error(t())
                }
            }
            t.invariant = o;
            var a = Object.prototype.hasOwnProperty,
                l = Array.prototype.splice,
                c = Object.prototype.toString;

            function u(e) {
                return c.call(e).slice(8, -1)
            }
            var f = Object.assign || function(e, t) {
                    return p(t).forEach(function(n) {
                        a.call(t, n) && (e[n] = t[n])
                    }), e
                },
                p = "function" == typeof Object.getOwnPropertySymbols ? function(e) {
                    return Object.keys(e).concat(Object.getOwnPropertySymbols(e))
                } : function(e) {
                    return Object.keys(e)
                };

            function h(e) {
                return Array.isArray(e) ? f(e.constructor(e.length), e) : "Map" === u(e) ? new Map(e) : "Set" === u(e) ? new Set(e) : e && "object" == typeof e ? f(Object.create(Object.getPrototypeOf(e)), e) : e
            }
            var d = function() {
                function e() {
                    this.commands = f({}, m), this.update = this.update.bind(this), this.update.extend = this.extend = this.extend.bind(this), this.update.isEquals = function(e, t) {
                        return e === t
                    }, this.update.newContext = function() {
                        return new e().update
                    }
                }
                return Object.defineProperty(e.prototype, "isEquals", {
                    get: function() {
                        return this.update.isEquals
                    },
                    set: function(e) {
                        this.update.isEquals = e
                    },
                    enumerable: !0,
                    configurable: !0
                }), e.prototype.extend = function(e, t) {
                    this.commands[e] = t
                }, e.prototype.update = function(e, t) {
                    var n = this,
                        r = "function" == typeof t ? {
                            $apply: t
                        } : t;
                    Array.isArray(e) && Array.isArray(r) || o(!Array.isArray(r), function() {
                        return "update(): You provided an invalid spec to update(). The spec may not contain an array except as the value of $set, $push, $unshift, $splice or any custom command allowing an array value."
                    }), o("object" == typeof r && null !== r, function() {
                        return "update(): You provided an invalid spec to update(). The spec and every included key path must be plain objects containing one of the following commands: " + Object.keys(n.commands).join(", ") + "."
                    });
                    var i = e;
                    return p(r).forEach(function(t) {
                        if (a.call(n.commands, t)) {
                            var s = e === i;
                            i = n.commands[t](r[t], i, r, e), s && n.isEquals(i, e) && (i = e)
                        } else {
                            var o = "Map" === u(e) ? n.update(e.get(t), r[t]) : n.update(e[t], r[t]),
                                l = "Map" === u(i) ? i.get(t) : i[t];
                            n.isEquals(o, l) && (void 0 !== o || a.call(e, t)) || (i === e && (i = h(e)), "Map" === u(i) ? i.set(t, o) : i[t] = o)
                        }
                    }), i
                }, e
            }();
            t.Context = d;
            var m = {
                    $push: function(e, t, n) {
                        return g(t, n, "$push"), e.length ? t.concat(e) : t
                    },
                    $unshift: function(e, t, n) {
                        return g(t, n, "$unshift"), e.length ? e.concat(t) : t
                    },
                    $splice: function(e, t, n, r) {
                        var s;
                        return o(Array.isArray(s = t), function() {
                            return "Expected $splice target to be an array; got " + i(s)
                        }), v(n.$splice), e.forEach(function(e) {
                            v(e), t === r && e.length && (t = h(r)), l.apply(t, e)
                        }), t
                    },
                    $set: function(e, t, n) {
                        return o(1 === Object.keys(n).length, function() {
                            return "Cannot have more than one key in an object with $set"
                        }), e
                    },
                    $toggle: function(e, t) {
                        b(e, "$toggle");
                        var n = e.length ? h(t) : t;
                        return e.forEach(function(e) {
                            n[e] = !t[e]
                        }), n
                    },
                    $unset: function(e, t, n, r) {
                        return b(e, "$unset"), e.forEach(function(e) {
                            Object.hasOwnProperty.call(t, e) && (t === r && (t = h(r)), delete t[e])
                        }), t
                    },
                    $add: function(e, t, n, r) {
                        return w(t, "$add"), b(e, "$add"), "Map" === u(t) ? e.forEach(function(e) {
                            var n = e[0],
                                i = e[1];
                            t === r && t.get(n) !== i && (t = h(r)), t.set(n, i)
                        }) : e.forEach(function(e) {
                            t !== r || t.has(e) || (t = h(r)), t.add(e)
                        }), t
                    },
                    $remove: function(e, t, n, r) {
                        return w(t, "$remove"), b(e, "$remove"), e.forEach(function(e) {
                            t === r && t.has(e) && (t = h(r)), t.delete(e)
                        }), t
                    },
                    $merge: function(e, t, n, r) {
                        var s;
                        return s = t, o(e && "object" == typeof e, function() {
                            return "update(): $merge expects a spec of type 'object'; got " + i(e)
                        }), o(s && "object" == typeof s, function() {
                            return "update(): $merge expects a target of type 'object'; got " + i(s)
                        }), p(e).forEach(function(n) {
                            e[n] !== t[n] && (t === r && (t = h(r)), t[n] = e[n])
                        }), t
                    },
                    $apply: function(e, t) {
                        return o("function" == typeof e, function() {
                            return "update(): expected spec of $apply to be a function; got " + i(e) + "."
                        }), e(t)
                    }
                },
                y = new d;

            function g(e, t, n) {
                o(Array.isArray(e), function() {
                    return "update(): expected target of " + i(n) + " to be an array; got " + i(e) + "."
                }), b(t[n], n)
            }

            function b(e, t) {
                o(Array.isArray(e), function() {
                    return "update(): expected spec of " + i(t) + " to be an array; got " + i(e) + ". Did you forget to wrap your parameter in an array?"
                })
            }

            function v(e) {
                o(Array.isArray(e), function() {
                    return "update(): expected spec of $splice to be an array of arrays; got " + i(e) + ". Did you forget to wrap your parameters in an array?"
                })
            }

            function w(e, t) {
                var n = u(e);
                o("Map" === n || "Set" === n, function() {
                    return "update(): " + i(t) + " expects a target of type Set or Map; got " + i(n)
                })
            }
            t.isEquals = y.update.isEquals, t.extend = y.extend, t.default = y.update, t.default.default = e.exports = f(t.default, t)
        },
        84835: function(e, t, n) {
            "use strict";
            var r = n(11596);

            function i() {}

            function s() {}
            s.resetWarningCache = i, e.exports = function() {
                function e(e, t, n, i, s, o) {
                    if (o !== r) {
                        var a = Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
                        throw a.name = "Invariant Violation", a
                    }
                }

                function t() {
                    return e
                }
                e.isRequired = e;
                var n = {
                    array: e,
                    bigint: e,
                    bool: e,
                    func: e,
                    number: e,
                    object: e,
                    string: e,
                    symbol: e,
                    any: e,
                    arrayOf: t,
                    element: e,
                    elementType: e,
                    instanceOf: t,
                    node: e,
                    objectOf: t,
                    oneOf: t,
                    oneOfType: t,
                    shape: t,
                    exact: t,
                    checkPropTypes: s,
                    resetWarningCache: i
                };
                return n.PropTypes = n, n
            }
        },
        39519: function(e, t, n) {
            e.exports = n(84835)()
        },
        11596: function(e) {
            "use strict";
            e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
        },
        76483: function(e, t, n) {
            "use strict";
            n.d(t, {
                uI: function() {
                    return j
                }
            });
            var r = n(70079),
                i = n(39519),
                s = n.n(i),
                o = n(75883),
                a = new Map([
                    ["aac", "audio/aac"],
                    ["abw", "application/x-abiword"],
                    ["arc", "application/x-freearc"],
                    ["avif", "image/avif"],
                    ["avi", "video/x-msvideo"],
                    ["azw", "application/vnd.amazon.ebook"],
                    ["bin", "application/octet-stream"],
                    ["bmp", "image/bmp"],
                    ["bz", "application/x-bzip"],
                    ["bz2", "application/x-bzip2"],
                    ["cda", "application/x-cdf"],
                    ["csh", "application/x-csh"],
                    ["css", "text/css"],
                    ["csv", "text/csv"],
                    ["doc", "application/msword"],
                    ["docx", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"],
                    ["eot", "application/vnd.ms-fontobject"],
                    ["epub", "application/epub+zip"],
                    ["gz", "application/gzip"],
                    ["gif", "image/gif"],
                    ["heic", "image/heic"],
                    ["heif", "image/heif"],
                    ["htm", "text/html"],
                    ["html", "text/html"],
                    ["ico", "image/vnd.microsoft.icon"],
                    ["ics", "text/calendar"],
                    ["jar", "application/java-archive"],
                    ["jpeg", "image/jpeg"],
                    ["jpg", "image/jpeg"],
                    ["js", "text/javascript"],
                    ["json", "application/json"],
                    ["jsonld", "application/ld+json"],
                    ["mid", "audio/midi"],
                    ["midi", "audio/midi"],
                    ["mjs", "text/javascript"],
                    ["mp3", "audio/mpeg"],
                    ["mp4", "video/mp4"],
                    ["mpeg", "video/mpeg"],
                    ["mpkg", "application/vnd.apple.installer+xml"],
                    ["odp", "application/vnd.oasis.opendocument.presentation"],
                    ["ods", "application/vnd.oasis.opendocument.spreadsheet"],
                    ["odt", "application/vnd.oasis.opendocument.text"],
                    ["oga", "audio/ogg"],
                    ["ogv", "video/ogg"],
                    ["ogx", "application/ogg"],
                    ["opus", "audio/opus"],
                    ["otf", "font/otf"],
                    ["png", "image/png"],
                    ["pdf", "application/pdf"],
                    ["php", "application/x-httpd-php"],
                    ["ppt", "application/vnd.ms-powerpoint"],
                    ["pptx", "application/vnd.openxmlformats-officedocument.presentationml.presentation"],
                    ["rar", "application/vnd.rar"],
                    ["rtf", "application/rtf"],
                    ["sh", "application/x-sh"],
                    ["svg", "image/svg+xml"],
                    ["swf", "application/x-shockwave-flash"],
                    ["tar", "application/x-tar"],
                    ["tif", "image/tiff"],
                    ["tiff", "image/tiff"],
                    ["ts", "video/mp2t"],
                    ["ttf", "font/ttf"],
                    ["txt", "text/plain"],
                    ["vsd", "application/vnd.visio"],
                    ["wav", "audio/wav"],
                    ["weba", "audio/webm"],
                    ["webm", "video/webm"],
                    ["webp", "image/webp"],
                    ["woff", "font/woff"],
                    ["woff2", "font/woff2"],
                    ["xhtml", "application/xhtml+xml"],
                    ["xls", "application/vnd.ms-excel"],
                    ["xlsx", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"],
                    ["xml", "application/xml"],
                    ["xul", "application/vnd.mozilla.xul+xml"],
                    ["zip", "application/zip"],
                    ["7z", "application/x-7z-compressed"],
                    ["mkv", "video/x-matroska"],
                    ["mov", "video/quicktime"],
                    ["msg", "application/vnd.ms-outlook"]
                ]);

            function l(e, t) {
                var n = function(e) {
                    var t = e.name;
                    if (t && -1 !== t.lastIndexOf(".") && !e.type) {
                        var n = t.split(".").pop().toLowerCase(),
                            r = a.get(n);
                        r && Object.defineProperty(e, "type", {
                            value: r,
                            writable: !1,
                            configurable: !1,
                            enumerable: !0
                        })
                    }
                    return e
                }(e);
                if ("string" != typeof n.path) {
                    var r = e.webkitRelativePath;
                    Object.defineProperty(n, "path", {
                        value: "string" == typeof t ? t : "string" == typeof r && r.length > 0 ? r : e.name,
                        writable: !1,
                        configurable: !1,
                        enumerable: !0
                    })
                }
                return n
            }
            var c = [".DS_Store", "Thumbs.db"];

            function u(e) {
                return "object" == typeof e && null !== e
            }

            function f(e) {
                return e.filter(function(e) {
                    return -1 === c.indexOf(e.name)
                })
            }

            function p(e) {
                if (null === e) return [];
                for (var t = [], n = 0; n < e.length; n++) {
                    var r = e[n];
                    t.push(r)
                }
                return t
            }

            function h(e) {
                if ("function" != typeof e.webkitGetAsEntry) return d(e);
                var t = e.webkitGetAsEntry();
                return t && t.isDirectory ? y(t) : d(e)
            }

            function d(e) {
                var t = e.getAsFile();
                return t ? Promise.resolve(l(t)) : Promise.reject("".concat(e, " is not a File"))
            }

            function m(e) {
                return (0, o.mG)(this, void 0, void 0, function() {
                    return (0, o.Jh)(this, function(t) {
                        return [2, e.isDirectory ? y(e) : function(e) {
                            return (0, o.mG)(this, void 0, void 0, function() {
                                return (0, o.Jh)(this, function(t) {
                                    return [2, new Promise(function(t, n) {
                                        e.file(function(n) {
                                            t(l(n, e.fullPath))
                                        }, function(e) {
                                            n(e)
                                        })
                                    })]
                                })
                            })
                        }(e)]
                    })
                })
            }

            function y(e) {
                var t = e.createReader();
                return new Promise(function(e, n) {
                    var r = [];
                    ! function i() {
                        var s = this;
                        t.readEntries(function(t) {
                            return (0, o.mG)(s, void 0, void 0, function() {
                                var s;
                                return (0, o.Jh)(this, function(o) {
                                    switch (o.label) {
                                        case 0:
                                            if (t.length) return [3, 5];
                                            o.label = 1;
                                        case 1:
                                            return o.trys.push([1, 3, , 4]), [4, Promise.all(r)];
                                        case 2:
                                            return e(o.sent()), [3, 4];
                                        case 3:
                                            return n(o.sent()), [3, 4];
                                        case 4:
                                            return [3, 6];
                                        case 5:
                                            s = Promise.all(t.map(m)), r.push(s), i(), o.label = 6;
                                        case 6:
                                            return [2]
                                    }
                                })
                            })
                        }, function(e) {
                            n(e)
                        })
                    }()
                })
            }
            var g = n(27009),
                b = ["children"],
                v = ["open"],
                w = ["refKey", "role", "onKeyDown", "onFocus", "onBlur", "onClick", "onDragEnter", "onDragOver", "onDragLeave", "onDrop"],
                k = ["refKey", "onChange", "onClick"];

            function E(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n, r, i = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != i) {
                        var s = [],
                            o = !0,
                            a = !1;
                        try {
                            for (i = i.call(e); !(o = (n = i.next()).done) && (s.push(n.value), !t || s.length !== t); o = !0);
                        } catch (e) {
                            a = !0, r = e
                        } finally {
                            try {
                                o || null == i.return || i.return()
                            } finally {
                                if (a) throw r
                            }
                        }
                        return s
                    }
                }(e, t) || S(e, t) || function() {
                    throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function S(e, t) {
                if (e) {
                    if ("string" == typeof e) return O(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return O(e, t)
                }
            }

            function O(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function A(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function _(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? A(Object(n), !0).forEach(function(t) {
                        x(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : A(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }

            function x(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }

            function N(e, t) {
                if (null == e) return {};
                var n, r, i = function(e, t) {
                    if (null == e) return {};
                    var n, r, i = {},
                        s = Object.keys(e);
                    for (r = 0; r < s.length; r++) n = s[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
                    return i
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var s = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < s.length; r++) n = s[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
                }
                return i
            }
            var T = (0, r.forwardRef)(function(e, t) {
                var n = e.children,
                    i = j(N(e, b)),
                    s = i.open,
                    o = N(i, v);
                return (0, r.useImperativeHandle)(t, function() {
                    return {
                        open: s
                    }
                }, [s]), r.createElement(r.Fragment, null, n(_(_({}, o), {}, {
                    open: s
                })))
            });
            T.displayName = "Dropzone";
            var I = {
                disabled: !1,
                getFilesFromEvent: function(e) {
                    return (0, o.mG)(this, void 0, void 0, function() {
                        return (0, o.Jh)(this, function(t) {
                            return u(e) && u(e.dataTransfer) ? [2, function(e, t) {
                                return (0, o.mG)(this, void 0, void 0, function() {
                                    var n;
                                    return (0, o.Jh)(this, function(r) {
                                        switch (r.label) {
                                            case 0:
                                                if (!e.items) return [3, 2];
                                                if (n = p(e.items).filter(function(e) {
                                                        return "file" === e.kind
                                                    }), "drop" !== t) return [2, n];
                                                return [4, Promise.all(n.map(h))];
                                            case 1:
                                                return [2, f(function e(t) {
                                                    return t.reduce(function(t, n) {
                                                        return (0, o.ev)((0, o.ev)([], (0, o.CR)(t), !1), (0, o.CR)(Array.isArray(n) ? e(n) : [n]), !1)
                                                    }, [])
                                                }(r.sent()))];
                                            case 2:
                                                return [2, f(p(e.files).map(function(e) {
                                                    return l(e)
                                                }))]
                                        }
                                    })
                                })
                            }(e.dataTransfer, e.type)] : u(e) && u(e.target) ? [2, p(e.target.files).map(function(e) {
                                return l(e)
                            })] : Array.isArray(e) && e.every(function(e) {
                                return "getFile" in e && "function" == typeof e.getFile
                            }) ? [2, function(e) {
                                return (0, o.mG)(this, void 0, void 0, function() {
                                    return (0, o.Jh)(this, function(t) {
                                        switch (t.label) {
                                            case 0:
                                                return [4, Promise.all(e.map(function(e) {
                                                    return e.getFile()
                                                }))];
                                            case 1:
                                                return [2, t.sent().map(function(e) {
                                                    return l(e)
                                                })]
                                        }
                                    })
                                })
                            }(e)] : [2, []]
                        })
                    })
                },
                maxSize: 1 / 0,
                minSize: 0,
                multiple: !0,
                maxFiles: 0,
                preventDropOnDocument: !0,
                noClick: !1,
                noKeyboard: !1,
                noDrag: !1,
                noDragEventsBubbling: !1,
                validator: null,
                useFsAccessApi: !0,
                autoFocus: !1
            };
            T.defaultProps = I, T.propTypes = {
                children: s().func,
                accept: s().objectOf(s().arrayOf(s().string)),
                multiple: s().bool,
                preventDropOnDocument: s().bool,
                noClick: s().bool,
                noKeyboard: s().bool,
                noDrag: s().bool,
                noDragEventsBubbling: s().bool,
                minSize: s().number,
                maxSize: s().number,
                maxFiles: s().number,
                disabled: s().bool,
                getFilesFromEvent: s().func,
                onFileDialogCancel: s().func,
                onFileDialogOpen: s().func,
                useFsAccessApi: s().bool,
                autoFocus: s().bool,
                onDragEnter: s().func,
                onDragLeave: s().func,
                onDragOver: s().func,
                onDrop: s().func,
                onDropAccepted: s().func,
                onDropRejected: s().func,
                onError: s().func,
                validator: s().func
            };
            var C = {
                isFocused: !1,
                isFileDialogActive: !1,
                isDragActive: !1,
                isDragAccept: !1,
                isDragReject: !1,
                acceptedFiles: [],
                fileRejections: []
            };

            function j() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    t = _(_({}, I), e),
                    n = t.accept,
                    i = t.disabled,
                    s = t.getFilesFromEvent,
                    o = t.maxSize,
                    a = t.minSize,
                    l = t.multiple,
                    c = t.maxFiles,
                    u = t.onDragEnter,
                    f = t.onDragLeave,
                    p = t.onDragOver,
                    h = t.onDrop,
                    d = t.onDropAccepted,
                    m = t.onDropRejected,
                    y = t.onFileDialogCancel,
                    b = t.onFileDialogOpen,
                    v = t.useFsAccessApi,
                    A = t.autoFocus,
                    T = t.preventDropOnDocument,
                    j = t.noClick,
                    L = t.noKeyboard,
                    $ = t.noDrag,
                    M = t.noDragEventsBubbling,
                    F = t.onError,
                    R = t.validator,
                    B = (0, r.useMemo)(function() {
                        return (0, g.gS)(n)
                    }, [n]),
                    K = (0, r.useMemo)(function() {
                        return (0, g.zO)(n)
                    }, [n]),
                    q = (0, r.useMemo)(function() {
                        return "function" == typeof b ? b : P
                    }, [b]),
                    U = (0, r.useMemo)(function() {
                        return "function" == typeof y ? y : P
                    }, [y]),
                    z = (0, r.useRef)(null),
                    V = (0, r.useRef)(null),
                    W = E((0, r.useReducer)(D, C), 2),
                    J = W[0],
                    Y = W[1],
                    G = J.isFocused,
                    H = J.isFileDialogActive,
                    Z = (0, r.useRef)("undefined" != typeof window && window.isSecureContext && v && (0, g.fV)()),
                    Q = function() {
                        !Z.current && H && setTimeout(function() {
                            V.current && !V.current.files.length && (Y({
                                type: "closeDialog"
                            }), U())
                        }, 300)
                    };
                (0, r.useEffect)(function() {
                    return window.addEventListener("focus", Q, !1),
                        function() {
                            window.removeEventListener("focus", Q, !1)
                        }
                }, [V, H, U, Z]);
                var X = (0, r.useRef)([]),
                    ee = function(e) {
                        z.current && z.current.contains(e.target) || (e.preventDefault(), X.current = [])
                    };
                (0, r.useEffect)(function() {
                    return T && (document.addEventListener("dragover", g.w0, !1), document.addEventListener("drop", ee, !1)),
                        function() {
                            T && (document.removeEventListener("dragover", g.w0), document.removeEventListener("drop", ee))
                        }
                }, [z, T]), (0, r.useEffect)(function() {
                    return !i && A && z.current && z.current.focus(),
                        function() {}
                }, [z, A, i]);
                var et = (0, r.useCallback)(function(e) {
                        F ? F(e) : console.error(e)
                    }, [F]),
                    en = (0, r.useCallback)(function(e) {
                        var t;
                        e.preventDefault(), e.persist(), em(e), X.current = [].concat(function(e) {
                            if (Array.isArray(e)) return O(e)
                        }(t = X.current) || function(e) {
                            if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                        }(t) || S(t) || function() {
                            throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                        }(), [e.target]), (0, g.Vq)(e) && Promise.resolve(s(e)).then(function(t) {
                            if (!(0, g.np)(e) || M) {
                                var n = t.length,
                                    r = n > 0 && (0, g.zo)({
                                        files: t,
                                        accept: B,
                                        minSize: a,
                                        maxSize: o,
                                        multiple: l,
                                        maxFiles: c,
                                        validator: R
                                    });
                                Y({
                                    isDragAccept: r,
                                    isDragReject: n > 0 && !r,
                                    isDragActive: !0,
                                    type: "setDraggedFiles"
                                }), u && u(e)
                            }
                        }).catch(function(e) {
                            return et(e)
                        })
                    }, [s, u, et, M, B, a, o, l, c, R]),
                    er = (0, r.useCallback)(function(e) {
                        e.preventDefault(), e.persist(), em(e);
                        var t = (0, g.Vq)(e);
                        if (t && e.dataTransfer) try {
                            e.dataTransfer.dropEffect = "copy"
                        } catch (e) {}
                        return t && p && p(e), !1
                    }, [p, M]),
                    ei = (0, r.useCallback)(function(e) {
                        e.preventDefault(), e.persist(), em(e);
                        var t = X.current.filter(function(e) {
                                return z.current && z.current.contains(e)
                            }),
                            n = t.indexOf(e.target); - 1 !== n && t.splice(n, 1), X.current = t, !(t.length > 0) && (Y({
                            type: "setDraggedFiles",
                            isDragActive: !1,
                            isDragAccept: !1,
                            isDragReject: !1
                        }), (0, g.Vq)(e) && f && f(e))
                    }, [z, f, M]),
                    es = (0, r.useCallback)(function(e, t) {
                        var n = [],
                            r = [];
                        e.forEach(function(e) {
                            var t = E((0, g.dR)(e, B), 2),
                                i = t[0],
                                s = t[1],
                                l = E((0, g.XT)(e, a, o), 2),
                                c = l[0],
                                u = l[1],
                                f = R ? R(e) : null;
                            if (i && c && !f) n.push(e);
                            else {
                                var p = [s, u];
                                f && (p = p.concat(f)), r.push({
                                    file: e,
                                    errors: p.filter(function(e) {
                                        return e
                                    })
                                })
                            }
                        }), (!l && n.length > 1 || l && c >= 1 && n.length > c) && (n.forEach(function(e) {
                            r.push({
                                file: e,
                                errors: [g.dX]
                            })
                        }), n.splice(0)), Y({
                            acceptedFiles: n,
                            fileRejections: r,
                            type: "setFiles"
                        }), h && h(n, r, t), r.length > 0 && m && m(r, t), n.length > 0 && d && d(n, t)
                    }, [Y, l, B, a, o, c, h, d, m, R]),
                    eo = (0, r.useCallback)(function(e) {
                        e.preventDefault(), e.persist(), em(e), X.current = [], (0, g.Vq)(e) && Promise.resolve(s(e)).then(function(t) {
                            (!(0, g.np)(e) || M) && es(t, e)
                        }).catch(function(e) {
                            return et(e)
                        }), Y({
                            type: "reset"
                        })
                    }, [s, es, et, M]),
                    ea = (0, r.useCallback)(function() {
                        if (Z.current) {
                            Y({
                                type: "openDialog"
                            }), q(), window.showOpenFilePicker({
                                multiple: l,
                                types: K
                            }).then(function(e) {
                                return s(e)
                            }).then(function(e) {
                                es(e, null), Y({
                                    type: "closeDialog"
                                })
                            }).catch(function(e) {
                                (0, g.PQ)(e) ? (U(e), Y({
                                    type: "closeDialog"
                                })) : (0, g.c_)(e) ? (Z.current = !1, V.current ? (V.current.value = null, V.current.click()) : et(Error("Cannot open the file picker because the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API is not supported and no <input> was provided."))) : et(e)
                            });
                            return
                        }
                        V.current && (Y({
                            type: "openDialog"
                        }), q(), V.current.value = null, V.current.click())
                    }, [Y, q, U, v, es, et, K, l]),
                    el = (0, r.useCallback)(function(e) {
                        z.current && z.current.isEqualNode(e.target) && (" " === e.key || "Enter" === e.key || 32 === e.keyCode || 13 === e.keyCode) && (e.preventDefault(), ea())
                    }, [z, ea]),
                    ec = (0, r.useCallback)(function() {
                        Y({
                            type: "focus"
                        })
                    }, []),
                    eu = (0, r.useCallback)(function() {
                        Y({
                            type: "blur"
                        })
                    }, []),
                    ef = (0, r.useCallback)(function() {
                        j || ((0, g.DF)() ? setTimeout(ea, 0) : ea())
                    }, [j, ea]),
                    ep = function(e) {
                        return i ? null : e
                    },
                    eh = function(e) {
                        return L ? null : ep(e)
                    },
                    ed = function(e) {
                        return $ ? null : ep(e)
                    },
                    em = function(e) {
                        M && e.stopPropagation()
                    },
                    ey = (0, r.useMemo)(function() {
                        return function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                t = e.refKey,
                                n = e.role,
                                r = e.onKeyDown,
                                s = e.onFocus,
                                o = e.onBlur,
                                a = e.onClick,
                                l = e.onDragEnter,
                                c = e.onDragOver,
                                u = e.onDragLeave,
                                f = e.onDrop,
                                p = N(e, w);
                            return _(_(x({
                                onKeyDown: eh((0, g.Mj)(r, el)),
                                onFocus: eh((0, g.Mj)(s, ec)),
                                onBlur: eh((0, g.Mj)(o, eu)),
                                onClick: ep((0, g.Mj)(a, ef)),
                                onDragEnter: ed((0, g.Mj)(l, en)),
                                onDragOver: ed((0, g.Mj)(c, er)),
                                onDragLeave: ed((0, g.Mj)(u, ei)),
                                onDrop: ed((0, g.Mj)(f, eo)),
                                role: "string" == typeof n && "" !== n ? n : "presentation"
                            }, void 0 === t ? "ref" : t, z), i || L ? {} : {
                                tabIndex: 0
                            }), p)
                        }
                    }, [z, el, ec, eu, ef, en, er, ei, eo, L, $, i]),
                    eg = (0, r.useCallback)(function(e) {
                        e.stopPropagation()
                    }, []),
                    eb = (0, r.useMemo)(function() {
                        return function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                t = e.refKey,
                                n = e.onChange,
                                r = e.onClick,
                                i = N(e, k);
                            return _(_({}, x({
                                accept: B,
                                multiple: l,
                                type: "file",
                                style: {
                                    display: "none"
                                },
                                onChange: ep((0, g.Mj)(n, eo)),
                                onClick: ep((0, g.Mj)(r, eg)),
                                tabIndex: -1
                            }, void 0 === t ? "ref" : t, V)), i)
                        }
                    }, [V, n, l, eo, i]);
                return _(_({}, J), {}, {
                    isFocused: G && !i,
                    getRootProps: ey,
                    getInputProps: eb,
                    rootRef: z,
                    inputRef: V,
                    open: ep(ea)
                })
            }

            function D(e, t) {
                switch (t.type) {
                    case "focus":
                        return _(_({}, e), {}, {
                            isFocused: !0
                        });
                    case "blur":
                        return _(_({}, e), {}, {
                            isFocused: !1
                        });
                    case "openDialog":
                        return _(_({}, C), {}, {
                            isFileDialogActive: !0
                        });
                    case "closeDialog":
                        return _(_({}, e), {}, {
                            isFileDialogActive: !1
                        });
                    case "setDraggedFiles":
                        return _(_({}, e), {}, {
                            isDragActive: t.isDragActive,
                            isDragAccept: t.isDragAccept,
                            isDragReject: t.isDragReject
                        });
                    case "setFiles":
                        return _(_({}, e), {}, {
                            acceptedFiles: t.acceptedFiles,
                            fileRejections: t.fileRejections
                        });
                    case "reset":
                        return _({}, C);
                    default:
                        return e
                }
            }

            function P() {}
        },
        27009: function(e, t, n) {
            "use strict";
            n.d(t, {
                DF: function() {
                    return x
                },
                Mj: function() {
                    return N
                },
                PQ: function() {
                    return j
                },
                Vq: function() {
                    return A
                },
                XT: function() {
                    return k
                },
                c_: function() {
                    return D
                },
                dR: function() {
                    return w
                },
                dX: function() {
                    return v
                },
                fV: function() {
                    return T
                },
                gS: function() {
                    return C
                },
                jK: function() {
                    return m
                },
                np: function() {
                    return O
                },
                w0: function() {
                    return _
                },
                zO: function() {
                    return I
                },
                zo: function() {
                    return S
                }
            });
            var r = n(97325);

            function i(e) {
                return function(e) {
                    if (Array.isArray(e)) return u(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || c(e) || function() {
                    throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function s(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function o(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? s(Object(n), !0).forEach(function(t) {
                        a(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : s(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }

            function a(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }

            function l(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n, r, i = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != i) {
                        var s = [],
                            o = !0,
                            a = !1;
                        try {
                            for (i = i.call(e); !(o = (n = i.next()).done) && (s.push(n.value), !t || s.length !== t); o = !0);
                        } catch (e) {
                            a = !0, r = e
                        } finally {
                            try {
                                o || null == i.return || i.return()
                            } finally {
                                if (a) throw r
                            }
                        }
                        return s
                    }
                }(e, t) || c(e, t) || function() {
                    throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function c(e, t) {
                if (e) {
                    if ("string" == typeof e) return u(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return u(e, t)
                }
            }

            function u(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
                return r
            }
            var f = "file-invalid-type",
                p = "file-too-large",
                h = "file-too-small",
                d = "too-many-files",
                m = {
                    FileInvalidType: f,
                    FileTooLarge: p,
                    FileTooSmall: h,
                    TooManyFiles: d
                },
                y = function(e) {
                    var t = Array.isArray(e = Array.isArray(e) && 1 === e.length ? e[0] : e) ? "one of ".concat(e.join(", ")) : e;
                    return {
                        code: f,
                        message: "File type must be ".concat(t)
                    }
                },
                g = function(e) {
                    return {
                        code: p,
                        message: "File is larger than ".concat(e, " ").concat(1 === e ? "byte" : "bytes")
                    }
                },
                b = function(e) {
                    return {
                        code: h,
                        message: "File is smaller than ".concat(e, " ").concat(1 === e ? "byte" : "bytes")
                    }
                },
                v = {
                    code: d,
                    message: "Too many files"
                };

            function w(e, t) {
                var n = "application/x-moz-file" === e.type || (0, r.Z)(e, t);
                return [n, n ? null : y(t)]
            }

            function k(e, t, n) {
                if (E(e.size)) {
                    if (E(t) && E(n)) {
                        if (e.size > n) return [!1, g(n)];
                        if (e.size < t) return [!1, b(t)]
                    } else if (E(t) && e.size < t) return [!1, b(t)];
                    else if (E(n) && e.size > n) return [!1, g(n)]
                }
                return [!0, null]
            }

            function E(e) {
                return null != e
            }

            function S(e) {
                var t = e.files,
                    n = e.accept,
                    r = e.minSize,
                    i = e.maxSize,
                    s = e.multiple,
                    o = e.maxFiles,
                    a = e.validator;
                return (!!s || !(t.length > 1)) && (!s || !(o >= 1) || !(t.length > o)) && t.every(function(e) {
                    var t = l(w(e, n), 1)[0],
                        s = l(k(e, r, i), 1)[0],
                        o = a ? a(e) : null;
                    return t && s && !o
                })
            }

            function O(e) {
                return "function" == typeof e.isPropagationStopped ? e.isPropagationStopped() : void 0 !== e.cancelBubble && e.cancelBubble
            }

            function A(e) {
                return e.dataTransfer ? Array.prototype.some.call(e.dataTransfer.types, function(e) {
                    return "Files" === e || "application/x-moz-file" === e
                }) : !!e.target && !!e.target.files
            }

            function _(e) {
                e.preventDefault()
            }

            function x() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window.navigator.userAgent;
                return -1 !== e.indexOf("MSIE") || -1 !== e.indexOf("Trident/") || -1 !== e.indexOf("Edge/")
            }

            function N() {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                return function(e) {
                    for (var n = arguments.length, r = Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++) r[i - 1] = arguments[i];
                    return t.some(function(t) {
                        return !O(e) && t && t.apply(void 0, [e].concat(r)), O(e)
                    })
                }
            }

            function T() {
                return "showOpenFilePicker" in window
            }

            function I(e) {
                return E(e) ? [{
                    description: "Files",
                    accept: Object.entries(e).filter(function(e) {
                        var t = l(e, 2),
                            n = t[0],
                            r = t[1],
                            i = !0;
                        return P(n) || (console.warn('Skipped "'.concat(n, '" because it is not a valid MIME type. Check https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types for a list of valid MIME types.')), i = !1), Array.isArray(r) && r.every(L) || (console.warn('Skipped "'.concat(n, '" because an invalid file extension was provided.')), i = !1), i
                    }).reduce(function(e, t) {
                        var n = l(t, 2),
                            r = n[0],
                            i = n[1];
                        return o(o({}, e), {}, a({}, r, i))
                    }, {})
                }] : e
            }

            function C(e) {
                if (E(e)) return Object.entries(e).reduce(function(e, t) {
                    var n = l(t, 2),
                        r = n[0],
                        s = n[1];
                    return [].concat(i(e), [r], i(s))
                }, []).filter(function(e) {
                    return P(e) || L(e)
                }).join(",")
            }

            function j(e) {
                return e instanceof DOMException && ("AbortError" === e.name || e.code === e.ABORT_ERR)
            }

            function D(e) {
                return e instanceof DOMException && ("SecurityError" === e.name || e.code === e.SECURITY_ERR)
            }

            function P(e) {
                return "audio/*" === e || "video/*" === e || "image/*" === e || "text/*" === e || /\w+\/[-+.\w]+/g.test(e)
            }

            function L(e) {
                return /^.*\.[\w]+$/.test(e)
            }
        },
        2827: function(e, t, n) {
            "use strict";
            n.d(t, {
                ZP: function() {
                    return d
                },
                SI: function() {
                    return f
                }
            });
            var r, i, s, o = n(39889),
                a = n(70079),
                l = n(75883),
                c = n(65237),
                u = function(e, t) {
                    var n = window.getComputedStyle(t),
                        r = n.borderBottomWidth,
                        i = n.borderTopWidth,
                        s = n.fontSize,
                        o = n.lineHeight,
                        a = n.paddingBottom,
                        l = n.paddingTop,
                        c = "normal" === o ? 1.2 * parseFloat(s) : parseFloat(o);
                    return Math.max(0 === e ? 0 : c * e + parseFloat(r) + parseFloat(i) + parseFloat(a) + parseFloat(l), t.scrollHeight + parseFloat(r) + parseFloat(i))
                },
                f = function(e, t) {
                    if (t) {
                        var n = "hidden",
                            r = window.getComputedStyle(t).maxHeight;
                        "none" !== r && parseFloat(r) < t.scrollHeight && (n = ""), t.style.height = "0", t.style.overflowY = n, t.style.height = "".concat(u(e, t), "px")
                    }
                },
                p = function(e) {
                    var t = (0, a.useRef)(e),
                        n = (0, a.useRef)(0);
                    return (0, c.D)(e, t.current) || (t.current = e, n.current += 1), (0, a.useMemo)(function() {
                        return t.current
                    }, [n.current])
                },
                h = "undefined" == typeof window ? Function.prototype : a.useLayoutEffect,
                d = (r = function(e) {
                    var t = e.forwardedRef,
                        n = (0, o.__rest)(e, ["forwardedRef"]),
                        r = "function" == typeof t,
                        i = p(n.style),
                        s = (0, a.useRef)(),
                        l = r || !t ? s : t,
                        c = n.rows ? parseInt("" + n.rows, 10) : 0,
                        u = n.onChange,
                        d = n.onInput,
                        m = (0, o.__rest)(n, ["onChange", "onInput"]);
                    h(function() {
                        f(c, l.current)
                    }, [n.className, n.value, l, c, i]), h(function() {
                        if (window.ResizeObserver) {
                            var e = new ResizeObserver(function() {
                                f(c, l.current)
                            });
                            return e.observe(l.current),
                                function() {
                                    e.disconnect()
                                }
                        }
                    }, [l, c]);
                    var y = (0, a.useCallback)(function(e) {
                            null == u || u(e), null == d || d(e), f(c, l.current)
                        }, [u, d, l, c]),
                        g = (0, a.useCallback)(function(e) {
                            l.current = e, r && t(e)
                        }, [t, r, l]);
                    return a.createElement("textarea", (0, o.__assign)({}, m, {
                        onInput: y,
                        ref: g,
                        rows: c
                    }))
                }, i = function(e, t) {
                    return a.createElement(r, (0, l.pi)({}, e, {
                        forwardedRef: t
                    }))
                }, s = r.displayName || r.name, i.displayName = "withForwardedRef(" + s + ")", (0, a.forwardRef)(i))
        },
        8844: function(e, t, n) {
            "use strict";
            let r;
            n.d(t, {
                Z: function() {
                    return c
                }
            });
            let i = "undefined" != typeof crypto && crypto.randomUUID && crypto.randomUUID.bind(crypto);
            var s = {
                randomUUID: i
            };
            let o = new Uint8Array(16);

            function a() {
                if (!r && !(r = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto))) throw Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
                return r(o)
            }
            let l = [];
            for (let e = 0; e < 256; ++e) l.push((e + 256).toString(16).slice(1));
            var c = function(e, t, n) {
                if (s.randomUUID && !t && !e) return s.randomUUID();
                e = e || {};
                let r = e.random || (e.rng || a)();
                if (r[6] = 15 & r[6] | 64, r[8] = 63 & r[8] | 128, t) {
                    n = n || 0;
                    for (let e = 0; e < 16; ++e) t[n + e] = r[e];
                    return t
                }
                return function(e, t = 0) {
                    return (l[e[t + 0]] + l[e[t + 1]] + l[e[t + 2]] + l[e[t + 3]] + "-" + l[e[t + 4]] + l[e[t + 5]] + "-" + l[e[t + 6]] + l[e[t + 7]] + "-" + l[e[t + 8]] + l[e[t + 9]] + "-" + l[e[t + 10]] + l[e[t + 11]] + l[e[t + 12]] + l[e[t + 13]] + l[e[t + 14]] + l[e[t + 15]]).toLowerCase()
                }(r)
            }
        },
        41170: function(e, t, n) {
            "use strict";
            var r = n(70079);
            let i = r.forwardRef(function({
                title: e,
                titleId: t,
                ...n
            }, i) {
                return r.createElement("svg", Object.assign({
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24",
                    fill: "currentColor",
                    "aria-hidden": "true",
                    ref: i,
                    "aria-labelledby": t
                }, n), e ? r.createElement("title", {
                    id: t
                }, e) : null, r.createElement("path", {
                    fillRule: "evenodd",
                    d: "M10.5 3.798v5.02a3 3 0 01-.879 2.121l-2.377 2.377a9.845 9.845 0 015.091 1.013 8.315 8.315 0 005.713.636l.285-.071-3.954-3.955a3 3 0 01-.879-2.121v-5.02a23.614 23.614 0 00-3 0zm4.5.138a.75.75 0 00.093-1.495A24.837 24.837 0 0012 2.25a25.048 25.048 0 00-3.093.191A.75.75 0 009 3.936v4.882a1.5 1.5 0 01-.44 1.06l-6.293 6.294c-1.62 1.621-.903 4.475 1.471 4.88 2.686.46 5.447.698 8.262.698 2.816 0 5.576-.239 8.262-.697 2.373-.406 3.092-3.26 1.47-4.881L15.44 9.879A1.5 1.5 0 0115 8.818V3.936z",
                    clipRule: "evenodd"
                }))
            });
            t.Z = i
        },
        90209: function(e, t, n) {
            "use strict";
            var r = n(70079);
            let i = r.forwardRef(function({
                title: e,
                titleId: t,
                ...n
            }, i) {
                return r.createElement("svg", Object.assign({
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24",
                    fill: "currentColor",
                    "aria-hidden": "true",
                    ref: i,
                    "aria-labelledby": t
                }, n), e ? r.createElement("title", {
                    id: t
                }, e) : null, r.createElement("path", {
                    d: "M20.798 11.012l-3.188 3.416L9.462 6.28l4.24-4.542a.75.75 0 011.272.71L12.982 9.75h7.268a.75.75 0 01.548 1.262zM3.202 12.988L6.39 9.572l8.148 8.148-4.24 4.542a.75.75 0 01-1.272-.71l1.992-7.302H3.75a.75.75 0 01-.548-1.262zM3.53 2.47a.75.75 0 00-1.06 1.06l18 18a.75.75 0 101.06-1.06l-18-18z"
                }))
            });
            t.Z = i
        },
        39217: function(e, t, n) {
            "use strict";
            var r = n(70079);
            let i = r.forwardRef(function({
                title: e,
                titleId: t,
                ...n
            }, i) {
                return r.createElement("svg", Object.assign({
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24",
                    fill: "currentColor",
                    "aria-hidden": "true",
                    ref: i,
                    "aria-labelledby": t
                }, n), e ? r.createElement("title", {
                    id: t
                }, e) : null, r.createElement("path", {
                    d: "M5.625 1.5c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0016.5 9h-1.875a1.875 1.875 0 01-1.875-1.875V5.25A3.75 3.75 0 009 1.5H5.625z"
                }), r.createElement("path", {
                    d: "M12.971 1.816A5.23 5.23 0 0114.25 5.25v1.875c0 .207.168.375.375.375H16.5a5.23 5.23 0 013.434 1.279 9.768 9.768 0 00-6.963-6.963z"
                }))
            });
            t.Z = i
        },
        77311: function(e, t, n) {
            "use strict";
            var r = n(70079);
            let i = r.forwardRef(function({
                title: e,
                titleId: t,
                ...n
            }, i) {
                return r.createElement("svg", Object.assign({
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24",
                    fill: "currentColor",
                    "aria-hidden": "true",
                    ref: i,
                    "aria-labelledby": t
                }, n), e ? r.createElement("title", {
                    id: t
                }, e) : null, r.createElement("path", {
                    fillRule: "evenodd",
                    d: "M12 1.5a5.25 5.25 0 00-5.25 5.25v3a3 3 0 00-3 3v6.75a3 3 0 003 3h10.5a3 3 0 003-3v-6.75a3 3 0 00-3-3v-3c0-2.9-2.35-5.25-5.25-5.25zm3.75 8.25v-3a3.75 3.75 0 10-7.5 0v3h7.5z",
                    clipRule: "evenodd"
                }))
            });
            t.Z = i
        },
        74050: function(e, t, n) {
            "use strict";
            n.d(t, {
                _: function() {
                    return i
                }
            });
            var r = n(20485);

            function i(e) {
                var t = function(e, t) {
                    if ("object" !== (0, r._type_of)(e) || null === e) return e;
                    var n = e[Symbol.toPrimitive];
                    if (void 0 !== n) {
                        var i = n.call(e, t || "default");
                        if ("object" !== (0, r._type_of)(i)) return i;
                        throw TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === t ? String : Number)(e)
                }(e, "string");
                return "symbol" === (0, r._type_of)(t) ? t : String(t)
            }
        },
        44009: function(e, t, n) {
            "use strict";
            n.d(t, {
                N: function() {
                    return l
                }
            });
            var r = n(16456),
                i = n(57457),
                s = n(2814);
            class o extends i.z {
                constructor(e, t) {
                    super(e, t)
                }
                bindMethods() {
                    super.bindMethods(), this.fetchNextPage = this.fetchNextPage.bind(this), this.fetchPreviousPage = this.fetchPreviousPage.bind(this)
                }
                setOptions(e, t) {
                    super.setOptions({ ...e,
                        behavior: (0, s.Gm)()
                    }, t)
                }
                getOptimisticResult(e) {
                    return e.behavior = (0, s.Gm)(), super.getOptimisticResult(e)
                }
                fetchNextPage({
                    pageParam: e,
                    ...t
                } = {}) {
                    return this.fetch({ ...t,
                        meta: {
                            fetchMore: {
                                direction: "forward",
                                pageParam: e
                            }
                        }
                    })
                }
                fetchPreviousPage({
                    pageParam: e,
                    ...t
                } = {}) {
                    return this.fetch({ ...t,
                        meta: {
                            fetchMore: {
                                direction: "backward",
                                pageParam: e
                            }
                        }
                    })
                }
                createResult(e, t) {
                    var n, r, i, o, a, l;
                    let {
                        state: c
                    } = e, u = super.createResult(e, t), {
                        isFetching: f,
                        isRefetching: p
                    } = u, h = f && (null == (n = c.fetchMeta) ? void 0 : null == (r = n.fetchMore) ? void 0 : r.direction) === "forward", d = f && (null == (i = c.fetchMeta) ? void 0 : null == (o = i.fetchMore) ? void 0 : o.direction) === "backward";
                    return { ...u,
                        fetchNextPage: this.fetchNextPage,
                        fetchPreviousPage: this.fetchPreviousPage,
                        hasNextPage: (0, s.Qy)(t, null == (a = c.data) ? void 0 : a.pages),
                        hasPreviousPage: (0, s.ZF)(t, null == (l = c.data) ? void 0 : l.pages),
                        isFetchingNextPage: h,
                        isFetchingPreviousPage: d,
                        isRefetching: p && !h && !d
                    }
                }
            }
            var a = n(36856);

            function l(e, t, n) {
                let i = (0, r._v)(e, t, n);
                return (0, a.r)(i, o)
            }
        },
        22121: function(e, t, n) {
            "use strict";
            n.d(t, {
                ZP: function() {
                    return na
                }
            });
            var r = {};
            n.r(r), n.d(r, {
                BOM: function() {
                    return tU
                },
                DOCUMENT: function() {
                    return tz
                },
                FLOW_END: function() {
                    return tV
                },
                SCALAR: function() {
                    return tW
                },
                createScalarToken: function() {
                    return tj
                },
                isCollection: function() {
                    return tJ
                },
                isScalar: function() {
                    return tY
                },
                prettyToken: function() {
                    return tG
                },
                resolveAsScalar: function() {
                    return tC
                },
                setScalarValue: function() {
                    return tD
                },
                stringify: function() {
                    return t$
                },
                tokenType: function() {
                    return tH
                },
                visit: function() {
                    return tq
                }
            });
            var i = {};
            n.r(i), n.d(i, {
                Alias: function() {
                    return F
                },
                CST: function() {
                    return r
                },
                Composer: function() {
                    return tI
                },
                Document: function() {
                    return to
                },
                Lexer: function() {
                    return t5
                },
                LineCounter: function() {
                    return t3
                },
                Pair: function() {
                    return em
                },
                Parser: function() {
                    return nt
                },
                Scalar: function() {
                    return K
                },
                Schema: function() {
                    return ts
                },
                YAMLError: function() {
                    return tl
                },
                YAMLMap: function() {
                    return ek
                },
                YAMLParseError: function() {
                    return tc
                },
                YAMLSeq: function() {
                    return eS
                },
                YAMLWarning: function() {
                    return tu
                },
                isAlias: function() {
                    return p
                },
                isCollection: function() {
                    return b
                },
                isDocument: function() {
                    return h
                },
                isMap: function() {
                    return d
                },
                isNode: function() {
                    return v
                },
                isPair: function() {
                    return m
                },
                isScalar: function() {
                    return y
                },
                isSeq: function() {
                    return g
                },
                parse: function() {
                    return ns
                },
                parseAllDocuments: function() {
                    return nr
                },
                parseDocument: function() {
                    return ni
                },
                stringify: function() {
                    return no
                },
                visit: function() {
                    return A
                },
                visitAsync: function() {
                    return x
                }
            });
            let s = Symbol.for("yaml.alias"),
                o = Symbol.for("yaml.document"),
                a = Symbol.for("yaml.map"),
                l = Symbol.for("yaml.pair"),
                c = Symbol.for("yaml.scalar"),
                u = Symbol.for("yaml.seq"),
                f = Symbol.for("yaml.node.type"),
                p = e => !!e && "object" == typeof e && e[f] === s,
                h = e => !!e && "object" == typeof e && e[f] === o,
                d = e => !!e && "object" == typeof e && e[f] === a,
                m = e => !!e && "object" == typeof e && e[f] === l,
                y = e => !!e && "object" == typeof e && e[f] === c,
                g = e => !!e && "object" == typeof e && e[f] === u;

            function b(e) {
                if (e && "object" == typeof e) switch (e[f]) {
                    case a:
                    case u:
                        return !0
                }
                return !1
            }

            function v(e) {
                if (e && "object" == typeof e) switch (e[f]) {
                    case s:
                    case a:
                    case c:
                    case u:
                        return !0
                }
                return !1
            }
            let w = e => (y(e) || b(e)) && !!e.anchor;
            class k {
                constructor(e) {
                    Object.defineProperty(this, f, {
                        value: e
                    })
                }
                clone() {
                    let e = Object.create(Object.getPrototypeOf(this), Object.getOwnPropertyDescriptors(this));
                    return this.range && (e.range = this.range.slice()), e
                }
            }
            let E = Symbol("break visit"),
                S = Symbol("skip children"),
                O = Symbol("remove node");

            function A(e, t) {
                let n = T(t);
                if (h(e)) {
                    let t = _(null, e.contents, n, Object.freeze([e]));
                    t === O && (e.contents = null)
                } else _(null, e, n, Object.freeze([]))
            }

            function _(e, t, n, r) {
                let i = I(e, t, n, r);
                if (v(i) || m(i)) return C(e, r, i), _(e, i, n, r);
                if ("symbol" != typeof i) {
                    if (b(t)) {
                        r = Object.freeze(r.concat(t));
                        for (let e = 0; e < t.items.length; ++e) {
                            let i = _(e, t.items[e], n, r);
                            if ("number" == typeof i) e = i - 1;
                            else {
                                if (i === E) return E;
                                i === O && (t.items.splice(e, 1), e -= 1)
                            }
                        }
                    } else if (m(t)) {
                        r = Object.freeze(r.concat(t));
                        let e = _("key", t.key, n, r);
                        if (e === E) return E;
                        e === O && (t.key = null);
                        let i = _("value", t.value, n, r);
                        if (i === E) return E;
                        i === O && (t.value = null)
                    }
                }
                return i
            }
            async function x(e, t) {
                let n = T(t);
                if (h(e)) {
                    let t = await N(null, e.contents, n, Object.freeze([e]));
                    t === O && (e.contents = null)
                } else await N(null, e, n, Object.freeze([]))
            }
            async function N(e, t, n, r) {
                let i = await I(e, t, n, r);
                if (v(i) || m(i)) return C(e, r, i), N(e, i, n, r);
                if ("symbol" != typeof i) {
                    if (b(t)) {
                        r = Object.freeze(r.concat(t));
                        for (let e = 0; e < t.items.length; ++e) {
                            let i = await N(e, t.items[e], n, r);
                            if ("number" == typeof i) e = i - 1;
                            else {
                                if (i === E) return E;
                                i === O && (t.items.splice(e, 1), e -= 1)
                            }
                        }
                    } else if (m(t)) {
                        r = Object.freeze(r.concat(t));
                        let e = await N("key", t.key, n, r);
                        if (e === E) return E;
                        e === O && (t.key = null);
                        let i = await N("value", t.value, n, r);
                        if (i === E) return E;
                        i === O && (t.value = null)
                    }
                }
                return i
            }

            function T(e) {
                return "object" == typeof e && (e.Collection || e.Node || e.Value) ? Object.assign({
                    Alias: e.Node,
                    Map: e.Node,
                    Scalar: e.Node,
                    Seq: e.Node
                }, e.Value && {
                    Map: e.Value,
                    Scalar: e.Value,
                    Seq: e.Value
                }, e.Collection && {
                    Map: e.Collection,
                    Seq: e.Collection
                }, e) : e
            }

            function I(e, t, n, r) {
                return "function" == typeof n ? n(e, t, r) : d(t) ? n.Map ? .(e, t, r) : g(t) ? n.Seq ? .(e, t, r) : m(t) ? n.Pair ? .(e, t, r) : y(t) ? n.Scalar ? .(e, t, r) : p(t) ? n.Alias ? .(e, t, r) : void 0
            }

            function C(e, t, n) {
                let r = t[t.length - 1];
                if (b(r)) r.items[e] = n;
                else if (m(r)) "key" === e ? r.key = n : r.value = n;
                else if (h(r)) r.contents = n;
                else {
                    let e = p(r) ? "alias" : "scalar";
                    throw Error(`Cannot replace node with ${e} parent`)
                }
            }
            A.BREAK = E, A.SKIP = S, A.REMOVE = O, x.BREAK = E, x.SKIP = S, x.REMOVE = O;
            let j = {
                    "!": "%21",
                    ",": "%2C",
                    "[": "%5B",
                    "]": "%5D",
                    "{": "%7B",
                    "}": "%7D"
                },
                D = e => e.replace(/[!,[\]{}]/g, e => j[e]);
            class P {
                constructor(e, t) {
                    this.docStart = null, this.docEnd = !1, this.yaml = Object.assign({}, P.defaultYaml, e), this.tags = Object.assign({}, P.defaultTags, t)
                }
                clone() {
                    let e = new P(this.yaml, this.tags);
                    return e.docStart = this.docStart, e
                }
                atDocument() {
                    let e = new P(this.yaml, this.tags);
                    switch (this.yaml.version) {
                        case "1.1":
                            this.atNextDocument = !0;
                            break;
                        case "1.2":
                            this.atNextDocument = !1, this.yaml = {
                                explicit: P.defaultYaml.explicit,
                                version: "1.2"
                            }, this.tags = Object.assign({}, P.defaultTags)
                    }
                    return e
                }
                add(e, t) {
                    this.atNextDocument && (this.yaml = {
                        explicit: P.defaultYaml.explicit,
                        version: "1.1"
                    }, this.tags = Object.assign({}, P.defaultTags), this.atNextDocument = !1);
                    let n = e.trim().split(/[ \t]+/),
                        r = n.shift();
                    switch (r) {
                        case "%TAG":
                            {
                                if (2 !== n.length && (t(0, "%TAG directive should contain exactly two parts"), n.length < 2)) return !1;
                                let [e, r] = n;
                                return this.tags[e] = r,
                                !0
                            }
                        case "%YAML":
                            {
                                if (this.yaml.explicit = !0, 1 !== n.length) return t(0, "%YAML directive should contain exactly one part"), !1;
                                let [e] = n;
                                if ("1.1" === e || "1.2" === e) return this.yaml.version = e, !0; {
                                    let n = /^\d+\.\d+$/.test(e);
                                    return t(6, `Unsupported YAML version ${e}`, n), !1
                                }
                            }
                        default:
                            return t(0, `Unknown directive ${r}`, !0), !1
                    }
                }
                tagName(e, t) {
                    if ("!" === e) return "!";
                    if ("!" !== e[0]) return t(`Not a valid tag: ${e}`), null;
                    if ("<" === e[1]) {
                        let n = e.slice(2, -1);
                        return "!" === n || "!!" === n ? (t(`Verbatim tags aren't resolved, so ${e} is invalid.`), null) : (">" !== e[e.length - 1] && t("Verbatim tags must end with a >"), n)
                    }
                    let [, n, r] = e.match(/^(.*!)([^!]*)$/);
                    r || t(`The ${e} tag has no suffix`);
                    let i = this.tags[n];
                    return i ? i + decodeURIComponent(r) : "!" === n ? e : (t(`Could not resolve tag: ${e}`), null)
                }
                tagString(e) {
                    for (let [t, n] of Object.entries(this.tags))
                        if (e.startsWith(n)) return t + D(e.substring(n.length));
                    return "!" === e[0] ? e : `!<${e}>`
                }
                toString(e) {
                    let t;
                    let n = this.yaml.explicit ? [`%YAML ${this.yaml.version||"1.2"}`] : [],
                        r = Object.entries(this.tags);
                    if (e && r.length > 0 && v(e.contents)) {
                        let n = {};
                        A(e.contents, (e, t) => {
                            v(t) && t.tag && (n[t.tag] = !0)
                        }), t = Object.keys(n)
                    } else t = [];
                    for (let [i, s] of r)("!!" !== i || "tag:yaml.org,2002:" !== s) && (!e || t.some(e => e.startsWith(s))) && n.push(`%TAG ${i} ${s}`);
                    return n.join("\n")
                }
            }

            function L(e) {
                if (/[\x00-\x19\s,[\]{}]/.test(e)) {
                    let t = JSON.stringify(e),
                        n = `Anchor must not contain whitespace or control characters: ${t}`;
                    throw Error(n)
                }
                return !0
            }

            function $(e) {
                let t = new Set;
                return A(e, {
                    Value(e, n) {
                        n.anchor && t.add(n.anchor)
                    }
                }), t
            }

            function M(e, t) {
                for (let n = 1;; ++n) {
                    let r = `${e}${n}`;
                    if (!t.has(r)) return r
                }
            }
            P.defaultYaml = {
                explicit: !1,
                version: "1.2"
            }, P.defaultTags = {
                "!!": "tag:yaml.org,2002:"
            };
            class F extends k {
                constructor(e) {
                    super(s), this.source = e, Object.defineProperty(this, "tag", {
                        set() {
                            throw Error("Alias nodes cannot have tags")
                        }
                    })
                }
                resolve(e) {
                    let t;
                    return A(e, {
                        Node: (e, n) => {
                            if (n === this) return A.BREAK;
                            n.anchor === this.source && (t = n)
                        }
                    }), t
                }
                toJSON(e, t) {
                    if (!t) return {
                        source: this.source
                    };
                    let {
                        anchors: n,
                        doc: r,
                        maxAliasCount: i
                    } = t, s = this.resolve(r);
                    if (!s) {
                        let e = `Unresolved alias (the anchor must be set before the alias): ${this.source}`;
                        throw ReferenceError(e)
                    }
                    let o = n.get(s);
                    if (!o || void 0 === o.res) throw ReferenceError("This should not happen: Alias anchor was not resolved?");
                    if (i >= 0 && (o.count += 1, 0 === o.aliasCount && (o.aliasCount = function e(t, n, r) {
                            if (p(n)) {
                                let e = n.resolve(t),
                                    i = r && e && r.get(e);
                                return i ? i.count * i.aliasCount : 0
                            }
                            if (b(n)) {
                                let i = 0;
                                for (let s of n.items) {
                                    let n = e(t, s, r);
                                    n > i && (i = n)
                                }
                                return i
                            }
                            if (m(n)) {
                                let i = e(t, n.key, r),
                                    s = e(t, n.value, r);
                                return Math.max(i, s)
                            }
                            return 1
                        }(r, s, n)), o.count * o.aliasCount > i)) throw ReferenceError("Excessive alias count indicates a resource exhaustion attack");
                    return o.res
                }
                toString(e, t, n) {
                    let r = `*${this.source}`;
                    if (e) {
                        if (L(this.source), e.options.verifyAliasOrder && !e.anchors.has(this.source)) {
                            let e = `Unresolved alias (the anchor must be set before the alias): ${this.source}`;
                            throw Error(e)
                        }
                        if (e.implicitKey) return `${r} `
                    }
                    return r
                }
            }

            function R(e, t, n) {
                if (Array.isArray(e)) return e.map((e, t) => R(e, String(t), n));
                if (e && "function" == typeof e.toJSON) {
                    if (!n || !w(e)) return e.toJSON(t, n);
                    let r = {
                        aliasCount: 0,
                        count: 1,
                        res: void 0
                    };
                    n.anchors.set(e, r), n.onCreate = e => {
                        r.res = e, delete n.onCreate
                    };
                    let i = e.toJSON(t, n);
                    return n.onCreate && n.onCreate(i), i
                }
                return "bigint" != typeof e || n ? .keep ? e : Number(e)
            }
            let B = e => !e || "function" != typeof e && "object" != typeof e;
            class K extends k {
                constructor(e) {
                    super(c), this.value = e
                }
                toJSON(e, t) {
                    return t ? .keep ? this.value : R(this.value, e, t)
                }
                toString() {
                    return String(this.value)
                }
            }

            function q(e, t, n) {
                let r;
                if (h(e) && (e = e.contents), v(e)) return e;
                if (m(e)) {
                    let t = n.schema[a].createNode ? .(n.schema, null, n);
                    return t.items.push(e), t
                }(e instanceof String || e instanceof Number || e instanceof Boolean || "undefined" != typeof BigInt && e instanceof BigInt) && (e = e.valueOf());
                let {
                    aliasDuplicateObjects: i,
                    onAnchor: s,
                    onTagObj: o,
                    schema: l,
                    sourceObjects: c
                } = n;
                if (i && e && "object" == typeof e) {
                    if (r = c.get(e)) return r.anchor || (r.anchor = s(e)), new F(r.anchor);
                    r = {
                        anchor: null,
                        node: null
                    }, c.set(e, r)
                }
                t ? .startsWith("!!") && (t = "tag:yaml.org,2002:" + t.slice(2));
                let f = function(e, t, n) {
                    if (t) {
                        let e = n.filter(e => e.tag === t),
                            r = e.find(e => !e.format) ? ? e[0];
                        if (!r) throw Error(`Tag ${t} not found`);
                        return r
                    }
                    return n.find(t => t.identify ? .(e) && !t.format)
                }(e, t, l.tags);
                if (!f) {
                    if (e && "function" == typeof e.toJSON && (e = e.toJSON()), !e || "object" != typeof e) {
                        let t = new K(e);
                        return r && (r.node = t), t
                    }
                    f = e instanceof Map ? l[a] : Symbol.iterator in Object(e) ? l[u] : l[a]
                }
                o && (o(f), delete n.onTagObj);
                let p = f ? .createNode ? f.createNode(n.schema, e, n) : new K(e);
                return t && (p.tag = t), r && (r.node = p), p
            }

            function U(e, t, n) {
                let r = n;
                for (let e = t.length - 1; e >= 0; --e) {
                    let n = t[e];
                    if ("number" == typeof n && Number.isInteger(n) && n >= 0) {
                        let e = [];
                        e[n] = r, r = e
                    } else r = new Map([
                        [n, r]
                    ])
                }
                return q(r, void 0, {
                    aliasDuplicateObjects: !1,
                    keepUndefined: !1,
                    onAnchor: () => {
                        throw Error("This should not happen, please report a bug.")
                    },
                    schema: e,
                    sourceObjects: new Map
                })
            }
            K.BLOCK_FOLDED = "BLOCK_FOLDED", K.BLOCK_LITERAL = "BLOCK_LITERAL", K.PLAIN = "PLAIN", K.QUOTE_DOUBLE = "QUOTE_DOUBLE", K.QUOTE_SINGLE = "QUOTE_SINGLE";
            let z = e => null == e || "object" == typeof e && !!e[Symbol.iterator]().next().done;
            class V extends k {
                constructor(e, t) {
                    super(e), Object.defineProperty(this, "schema", {
                        value: t,
                        configurable: !0,
                        enumerable: !1,
                        writable: !0
                    })
                }
                clone(e) {
                    let t = Object.create(Object.getPrototypeOf(this), Object.getOwnPropertyDescriptors(this));
                    return e && (t.schema = e), t.items = t.items.map(t => v(t) || m(t) ? t.clone(e) : t), this.range && (t.range = this.range.slice()), t
                }
                addIn(e, t) {
                    if (z(e)) this.add(t);
                    else {
                        let [n, ...r] = e, i = this.get(n, !0);
                        if (b(i)) i.addIn(r, t);
                        else if (void 0 === i && this.schema) this.set(n, U(this.schema, r, t));
                        else throw Error(`Expected YAML collection at ${n}. Remaining path: ${r}`)
                    }
                }
                deleteIn(e) {
                    let [t, ...n] = e;
                    if (0 === n.length) return this.delete(t);
                    let r = this.get(t, !0);
                    if (b(r)) return r.deleteIn(n);
                    throw Error(`Expected YAML collection at ${t}. Remaining path: ${n}`)
                }
                getIn(e, t) {
                    let [n, ...r] = e, i = this.get(n, !0);
                    return 0 === r.length ? !t && y(i) ? i.value : i : b(i) ? i.getIn(r, t) : void 0
                }
                hasAllNullValues(e) {
                    return this.items.every(t => {
                        if (!m(t)) return !1;
                        let n = t.value;
                        return null == n || e && y(n) && null == n.value && !n.commentBefore && !n.comment && !n.tag
                    })
                }
                hasIn(e) {
                    let [t, ...n] = e;
                    if (0 === n.length) return this.has(t);
                    let r = this.get(t, !0);
                    return !!b(r) && r.hasIn(n)
                }
                setIn(e, t) {
                    let [n, ...r] = e;
                    if (0 === r.length) this.set(n, t);
                    else {
                        let e = this.get(n, !0);
                        if (b(e)) e.setIn(r, t);
                        else if (void 0 === e && this.schema) this.set(n, U(this.schema, r, t));
                        else throw Error(`Expected YAML collection at ${n}. Remaining path: ${r}`)
                    }
                }
            }
            V.maxFlowStringSingleLineLength = 60;
            let W = e => e.replace(/^(?!$)(?: $)?/gm, "#");

            function J(e, t) {
                return /^\n+$/.test(e) ? e.substring(1) : t ? e.replace(/^(?! *$)/gm, t) : e
            }
            let Y = (e, t, n) => e.endsWith("\n") ? J(n, t) : n.includes("\n") ? "\n" + J(n, t) : (e.endsWith(" ") ? "" : " ") + n,
                G = "flow",
                H = "block",
                Z = "quoted";

            function Q(e, t, n = "flow", {
                indentAtStart: r,
                lineWidth: i = 80,
                minContentWidth: s = 20,
                onFold: o,
                onOverflow: a
            } = {}) {
                let l, c, u;
                if (!i || i < 0) return e;
                let f = Math.max(1 + s, 1 + i - t.length);
                if (e.length <= f) return e;
                let p = [],
                    h = {},
                    d = i - t.length;
                "number" == typeof r && (r > i - Math.max(2, s) ? p.push(0) : d = i - r);
                let m = !1,
                    y = -1,
                    g = -1,
                    b = -1;
                for (n === H && -1 !== (y = X(e, y)) && (d = y + f); u = e[y += 1];) {
                    if (n === Z && "\\" === u) {
                        switch (g = y, e[y + 1]) {
                            case "x":
                                y += 3;
                                break;
                            case "u":
                                y += 5;
                                break;
                            case "U":
                                y += 9;
                                break;
                            default:
                                y += 1
                        }
                        b = y
                    }
                    if ("\n" === u) n === H && (y = X(e, y)), d = y + f, l = void 0;
                    else {
                        if (" " === u && c && " " !== c && "\n" !== c && "	" !== c) {
                            let t = e[y + 1];
                            t && " " !== t && "\n" !== t && "	" !== t && (l = y)
                        }
                        if (y >= d) {
                            if (l) p.push(l), d = l + f, l = void 0;
                            else if (n === Z) {
                                for (;
                                    " " === c || "	" === c;) c = u, u = e[y += 1], m = !0;
                                let t = y > b + 1 ? y - 2 : g - 1;
                                if (h[t]) return e;
                                p.push(t), h[t] = !0, d = t + f, l = void 0
                            } else m = !0
                        }
                    }
                    c = u
                }
                if (m && a && a(), 0 === p.length) return e;
                o && o();
                let v = e.slice(0, p[0]);
                for (let r = 0; r < p.length; ++r) {
                    let i = p[r],
                        s = p[r + 1] || e.length;
                    0 === i ? v = `
${t}${e.slice(0,s)}` : (n === Z && h[i] && (v += `${e[i]}\\`), v += `
${t}${e.slice(i+1,s)}`)
                }
                return v
            }

            function X(e, t) {
                let n = e[t + 1];
                for (;
                    " " === n || "	" === n;) {
                    do n = e[t += 1]; while (n && "\n" !== n);
                    n = e[t + 1]
                }
                return t
            }
            let ee = e => ({
                    indentAtStart: e.indentAtStart,
                    lineWidth: e.options.lineWidth,
                    minContentWidth: e.options.minContentWidth
                }),
                et = e => /^(%|---|\.\.\.)/m.test(e);

            function en(e, t) {
                let n = JSON.stringify(e);
                if (t.options.doubleQuotedAsJSON) return n;
                let {
                    implicitKey: r
                } = t, i = t.options.doubleQuotedMinMultiLineLength, s = t.indent || (et(e) ? "  " : ""), o = "", a = 0;
                for (let e = 0, t = n[e]; t; t = n[++e])
                    if (" " === t && "\\" === n[e + 1] && "n" === n[e + 2] && (o += n.slice(a, e) + "\\ ", e += 1, a = e, t = "\\"), "\\" === t) switch (n[e + 1]) {
                        case "u":
                            {
                                o += n.slice(a, e);
                                let t = n.substr(e + 2, 4);
                                switch (t) {
                                    case "0000":
                                        o += "\\0";
                                        break;
                                    case "0007":
                                        o += "\\a";
                                        break;
                                    case "000b":
                                        o += "\\v";
                                        break;
                                    case "001b":
                                        o += "\\e";
                                        break;
                                    case "0085":
                                        o += "\\N";
                                        break;
                                    case "00a0":
                                        o += "\\_";
                                        break;
                                    case "2028":
                                        o += "\\L";
                                        break;
                                    case "2029":
                                        o += "\\P";
                                        break;
                                    default:
                                        "00" === t.substr(0, 2) ? o += "\\x" + t.substr(2) : o += n.substr(e, 6)
                                }
                                e += 5,
                                a = e + 1
                            }
                            break;
                        case "n":
                            if (r || '"' === n[e + 2] || n.length < i) e += 1;
                            else {
                                for (o += n.slice(a, e) + "\n\n";
                                    "\\" === n[e + 2] && "n" === n[e + 3] && '"' !== n[e + 4];) o += "\n", e += 2;
                                o += s, " " === n[e + 2] && (o += "\\"), e += 1, a = e + 1
                            }
                            break;
                        default:
                            e += 1
                    }
                return o = a ? o + n.slice(a) : n, r ? o : Q(o, s, Z, ee(t))
            }

            function er(e, t) {
                if (!1 === t.options.singleQuote || t.implicitKey && e.includes("\n") || /[ \t]\n|\n[ \t]/.test(e)) return en(e, t);
                let n = t.indent || (et(e) ? "  " : ""),
                    r = "'" + e.replace(/'/g, "''").replace(/\n+/g, `$&
${n}`) + "'";
                return t.implicitKey ? r : Q(r, n, G, ee(t))
            }

            function ei(e, t) {
                let n;
                let {
                    singleQuote: r
                } = t.options;
                if (!1 === r) n = en;
                else {
                    let t = e.includes('"'),
                        i = e.includes("'");
                    n = t && !i ? er : i && !t ? en : r ? er : en
                }
                return n(e, t)
            }

            function es({
                comment: e,
                type: t,
                value: n
            }, r, i, s) {
                let o, a, l;
                let {
                    blockQuote: c,
                    commentString: u,
                    lineWidth: f
                } = r.options;
                if (!c || /\n[\t ]+$/.test(n) || /^\s*$/.test(n)) return ei(n, r);
                let p = r.indent || (r.forceBlockIndent || et(n) ? "  " : ""),
                    h = "literal" === c || "folded" !== c && t !== K.BLOCK_FOLDED && (t === K.BLOCK_LITERAL || ! function(e, t, n) {
                        if (!t || t < 0) return !1;
                        let r = t - n,
                            i = e.length;
                        if (i <= r) return !1;
                        for (let t = 0, n = 0; t < i; ++t)
                            if ("\n" === e[t]) {
                                if (t - n > r) return !0;
                                if (i - (n = t + 1) <= r) return !1
                            }
                        return !0
                    }(n, f, p.length));
                if (!n) return h ? "|\n" : ">\n";
                for (a = n.length; a > 0; --a) {
                    let e = n[a - 1];
                    if ("\n" !== e && "	" !== e && " " !== e) break
                }
                let d = n.substring(a),
                    m = d.indexOf("\n"); - 1 === m ? o = "-" : n === d || m !== d.length - 1 ? (o = "+", s && s()) : o = "", d && (n = n.slice(0, -d.length), "\n" === d[d.length - 1] && (d = d.slice(0, -1)), d = d.replace(/\n+(?!\n|$)/g, `$&${p}`));
                let y = !1,
                    g = -1;
                for (l = 0; l < n.length; ++l) {
                    let e = n[l];
                    if (" " === e) y = !0;
                    else if ("\n" === e) g = l;
                    else break
                }
                let b = n.substring(0, g < l ? g + 1 : l);
                b && (n = n.substring(b.length), b = b.replace(/\n+/g, `$&${p}`));
                let v = (h ? "|" : ">") + (y ? p ? "2" : "1" : "") + o;
                if (e && (v += " " + u(e.replace(/ ?[\r\n]+/g, " ")), i && i()), h) return `${v}
${p}${b}${n=n.replace(/\n+/g,`$&${p}`)}${d}`;
                n = n.replace(/\n+/g, "\n$&").replace(/(?:^|\n)([\t ].*)(?:([\n\t ]*)\n(?![\n\t ]))?/g, "$1$2").replace(/\n+/g, `$&${p}`);
                let w = Q(`${b}${n}${d}`, p, H, ee(r));
                return `${v}
${p}${w}`
            }

            function eo(e, t, n, r) {
                let {
                    implicitKey: i,
                    inFlow: s
                } = t, o = "string" == typeof e.value ? e : Object.assign({}, e, {
                    value: String(e.value)
                }), {
                    type: a
                } = e;
                a !== K.QUOTE_DOUBLE && /[\x00-\x08\x0b-\x1f\x7f-\x9f\u{D800}-\u{DFFF}]/u.test(o.value) && (a = K.QUOTE_DOUBLE);
                let l = e => {
                        switch (e) {
                            case K.BLOCK_FOLDED:
                            case K.BLOCK_LITERAL:
                                return i || s ? ei(o.value, t) : es(o, t, n, r);
                            case K.QUOTE_DOUBLE:
                                return en(o.value, t);
                            case K.QUOTE_SINGLE:
                                return er(o.value, t);
                            case K.PLAIN:
                                return function(e, t, n, r) {
                                    let {
                                        type: i,
                                        value: s
                                    } = e, {
                                        actualString: o,
                                        implicitKey: a,
                                        indent: l,
                                        indentStep: c,
                                        inFlow: u
                                    } = t;
                                    if (a && /[\n[\]{},]/.test(s) || u && /[[\]{},]/.test(s)) return ei(s, t);
                                    if (!s || /^[\n\t ,[\]{}#&*!|>'"%@`]|^[?-]$|^[?-][ \t]|[\n:][ \t]|[ \t]\n|[\n\t ]#|[\n\t :]$/.test(s)) return a || u || !s.includes("\n") ? ei(s, t) : es(e, t, n, r);
                                    if (!a && !u && i !== K.PLAIN && s.includes("\n")) return es(e, t, n, r);
                                    if (et(s)) {
                                        if ("" === l) return t.forceBlockIndent = !0, es(e, t, n, r);
                                        if (a && l === c) return ei(s, t)
                                    }
                                    let f = s.replace(/\n+/g, `$&
${l}`);
                                    if (o) {
                                        let e = e => e.default && "tag:yaml.org,2002:str" !== e.tag && e.test ? .test(f),
                                            {
                                                compat: n,
                                                tags: r
                                            } = t.doc.schema;
                                        if (r.some(e) || n ? .some(e)) return ei(s, t)
                                    }
                                    return a ? f : Q(f, l, G, ee(t))
                                }(o, t, n, r);
                            default:
                                return null
                        }
                    },
                    c = l(a);
                if (null === c) {
                    let {
                        defaultKeyType: e,
                        defaultStringType: n
                    } = t.options, r = i && e || n;
                    if (null === (c = l(r))) throw Error(`Unsupported default string type ${r}`)
                }
                return c
            }

            function ea(e, t) {
                let n;
                let r = Object.assign({
                    blockQuote: !0,
                    commentString: W,
                    defaultKeyType: null,
                    defaultStringType: "PLAIN",
                    directives: null,
                    doubleQuotedAsJSON: !1,
                    doubleQuotedMinMultiLineLength: 40,
                    falseStr: "false",
                    flowCollectionPadding: !0,
                    indentSeq: !0,
                    lineWidth: 80,
                    minContentWidth: 20,
                    nullStr: "null",
                    simpleKeys: !1,
                    singleQuote: null,
                    trueStr: "true",
                    verifyAliasOrder: !0
                }, e.schema.toStringOptions, t);
                switch (r.collectionStyle) {
                    case "block":
                        n = !1;
                        break;
                    case "flow":
                        n = !0;
                        break;
                    default:
                        n = null
                }
                return {
                    anchors: new Set,
                    doc: e,
                    flowCollectionPadding: r.flowCollectionPadding ? " " : "",
                    indent: "",
                    indentStep: "number" == typeof r.indent ? " ".repeat(r.indent) : "  ",
                    inFlow: n,
                    options: r
                }
            }

            function el(e, t, n, r) {
                let i;
                if (m(e)) return e.toString(t, n, r);
                if (p(e)) {
                    if (t.doc.directives) return e.toString(t);
                    if (t.resolvedAliases ? .has(e)) throw TypeError("Cannot stringify circular structure without alias nodes");
                    t.resolvedAliases ? t.resolvedAliases.add(e) : t.resolvedAliases = new Set([e]), e = e.resolve(t.doc)
                }
                let s = v(e) ? e : t.doc.createNode(e, {
                    onTagObj: e => i = e
                });
                i || (i = function(e, t) {
                    let n, r;
                    if (t.tag) {
                        let n = e.filter(e => e.tag === t.tag);
                        if (n.length > 0) return n.find(e => e.format === t.format) ? ? n[0]
                    }
                    if (y(t)) {
                        n = t.value;
                        let i = e.filter(e => e.identify ? .(n));
                        r = i.find(e => e.format === t.format) ? ? i.find(e => !e.format)
                    } else n = t, r = e.find(e => e.nodeClass && n instanceof e.nodeClass);
                    if (!r) {
                        let e = n ? .constructor ? .name ? ? typeof n;
                        throw Error(`Tag not resolved for ${e} value`)
                    }
                    return r
                }(t.doc.schema.tags, s));
                let o = function(e, t, {
                    anchors: n,
                    doc: r
                }) {
                    if (!r.directives) return "";
                    let i = [],
                        s = (y(e) || b(e)) && e.anchor;
                    s && L(s) && (n.add(s), i.push(`&${s}`));
                    let o = e.tag ? e.tag : t.default ? null : t.tag;
                    return o && i.push(r.directives.tagString(o)), i.join(" ")
                }(s, i, t);
                o.length > 0 && (t.indentAtStart = (t.indentAtStart ? ? 0) + o.length + 1);
                let a = "function" == typeof i.stringify ? i.stringify(s, t, n, r) : y(s) ? eo(s, t, n, r) : s.toString(t, n, r);
                return o ? y(s) || "{" === a[0] || "[" === a[0] ? `${o} ${a}` : `${o}
${t.indent}${a}` : a
            }
            var ec = n(44675);

            function eu(e, t) {
                ("debug" === e || "warn" === e) && (void 0 !== ec && ec.emitWarning ? ec.emitWarning(t) : console.warn(t))
            }

            function ef(e, t, {
                key: n,
                value: r
            }) {
                if (e ? .doc.schema.merge && ep(n)) {
                    if (g(r = p(r) ? r.resolve(e.doc) : r))
                        for (let n of r.items) eh(e, t, n);
                    else if (Array.isArray(r))
                        for (let n of r) eh(e, t, n);
                    else eh(e, t, r)
                } else {
                    let i = R(n, "", e);
                    if (t instanceof Map) t.set(i, R(r, i, e));
                    else if (t instanceof Set) t.add(i);
                    else {
                        let s = function(e, t, n) {
                                if (null === t) return "";
                                if ("object" != typeof t) return String(t);
                                if (v(e) && n && n.doc) {
                                    let t = ea(n.doc, {});
                                    for (let e of (t.anchors = new Set, n.anchors.keys())) t.anchors.add(e.anchor);
                                    t.inFlow = !0, t.inStringifyKey = !0;
                                    let r = e.toString(t);
                                    if (!n.mapKeyWarned) {
                                        let e = JSON.stringify(r);
                                        e.length > 40 && (e = e.substring(0, 36) + '..."'), eu(n.doc.options.logLevel, `Keys with collection values will be stringified due to JS Object restrictions: ${e}. Set mapAsMap: true to use object keys.`), n.mapKeyWarned = !0
                                    }
                                    return r
                                }
                                return JSON.stringify(t)
                            }(n, i, e),
                            o = R(r, s, e);
                        s in t ? Object.defineProperty(t, s, {
                            value: o,
                            writable: !0,
                            enumerable: !0,
                            configurable: !0
                        }) : t[s] = o
                    }
                }
                return t
            }
            let ep = e => "<<" === e || y(e) && "<<" === e.value && (!e.type || e.type === K.PLAIN);

            function eh(e, t, n) {
                let r = e && p(n) ? n.resolve(e.doc) : n;
                if (!d(r)) throw Error("Merge sources must be maps or map aliases");
                let i = r.toJSON(null, e, Map);
                for (let [e, n] of i) t instanceof Map ? t.has(e) || t.set(e, n) : t instanceof Set ? t.add(e) : Object.prototype.hasOwnProperty.call(t, e) || Object.defineProperty(t, e, {
                    value: n,
                    writable: !0,
                    enumerable: !0,
                    configurable: !0
                });
                return t
            }

            function ed(e, t, n) {
                let r = q(e, void 0, n),
                    i = q(t, void 0, n);
                return new em(r, i)
            }
            class em {
                constructor(e, t = null) {
                    Object.defineProperty(this, f, {
                        value: l
                    }), this.key = e, this.value = t
                }
                clone(e) {
                    let {
                        key: t,
                        value: n
                    } = this;
                    return v(t) && (t = t.clone(e)), v(n) && (n = n.clone(e)), new em(t, n)
                }
                toJSON(e, t) {
                    let n = t ? .mapAsMap ? new Map : {};
                    return ef(t, n, this)
                }
                toString(e, t, n) {
                    return e ? .doc ? function({
                        key: e,
                        value: t
                    }, n, r, i) {
                        let s, o, a;
                        let {
                            allNullValues: l,
                            doc: c,
                            indent: u,
                            indentStep: f,
                            options: {
                                commentString: p,
                                indentSeq: h,
                                simpleKeys: d
                            }
                        } = n, m = v(e) && e.comment || null;
                        if (d) {
                            if (m) throw Error("With simple keys, key nodes cannot have comments");
                            if (b(e)) throw Error("With simple keys, collection cannot be used as a key value")
                        }
                        let w = !d && (!e || m && null == t && !n.inFlow || b(e) || (y(e) ? e.type === K.BLOCK_FOLDED || e.type === K.BLOCK_LITERAL : "object" == typeof e));
                        n = Object.assign({}, n, {
                            allNullValues: !1,
                            implicitKey: !w && (d || !l),
                            indent: u + f
                        });
                        let k = !1,
                            E = !1,
                            S = el(e, n, () => k = !0, () => E = !0);
                        if (!w && !n.inFlow && S.length > 1024) {
                            if (d) throw Error("With simple keys, single line scalar must not span more than 1024 characters");
                            w = !0
                        }
                        if (n.inFlow) {
                            if (l || null == t) return k && r && r(), "" === S ? "?" : w ? `? ${S}` : S
                        } else if (l && !d || null == t && w) return S = `? ${S}`, m && !k ? S += Y(S, n.indent, p(m)) : E && i && i(), S;
                        k && (m = null), w ? (m && (S += Y(S, n.indent, p(m))), S = `? ${S}
${u}:`) : (S = `${S}:`, m && (S += Y(S, n.indent, p(m)))), v(t) ? (s = !!t.spaceBefore, o = t.commentBefore, a = t.comment) : (s = !1, o = null, a = null, t && "object" == typeof t && (t = c.createNode(t))), n.implicitKey = !1, !w && !m && y(t) && (n.indentAtStart = S.length + 1), E = !1, !(!h && f.length >= 2 && !n.inFlow && !w && g(t)) || t.flow || t.tag || t.anchor || (n.indent = n.indent.substring(2));
                        let O = !1,
                            A = el(t, n, () => O = !0, () => E = !0),
                            _ = " ";
                        if (m || s || o) {
                            if (_ = s ? "\n" : "", o) {
                                let e = p(o);
                                _ += `
${J(e,n.indent)}`
                            }
                            "" !== A || n.inFlow ? _ += `
${n.indent}` : "\n" === _ && (_ = "\n\n")
                        } else if (!w && b(t)) {
                            let e = A[0],
                                r = A.indexOf("\n"),
                                i = -1 !== r,
                                s = n.inFlow ? ? t.flow ? ? 0 === t.items.length;
                            if (i || !s) {
                                let t = !1;
                                if (i && ("&" === e || "!" === e)) {
                                    let n = A.indexOf(" ");
                                    "&" === e && -1 !== n && n < r && "!" === A[n + 1] && (n = A.indexOf(" ", n + 1)), (-1 === n || r < n) && (t = !0)
                                }
                                t || (_ = `
${n.indent}`)
                            }
                        } else("" === A || "\n" === A[0]) && (_ = "");
                        return S += _ + A, n.inFlow ? O && r && r() : a && !O ? S += Y(S, n.indent, p(a)) : E && i && i(), S
                    }(this, e, t, n) : JSON.stringify(this)
                }
            }

            function ey(e, t, n) {
                let r = t.inFlow ? ? e.flow;
                return (r ? eb : eg)(e, t, n)
            }

            function eg({
                comment: e,
                items: t
            }, n, {
                blockItemPrefix: r,
                flowChars: i,
                itemIndent: s,
                onChompKeep: o,
                onComment: a
            }) {
                let l;
                let {
                    indent: c,
                    options: {
                        commentString: u
                    }
                } = n, f = Object.assign({}, n, {
                    indent: s,
                    type: null
                }), p = !1, h = [];
                for (let e = 0; e < t.length; ++e) {
                    let i = t[e],
                        o = null;
                    if (v(i)) !p && i.spaceBefore && h.push(""), ev(n, h, i.commentBefore, p), i.comment && (o = i.comment);
                    else if (m(i)) {
                        let e = v(i.key) ? i.key : null;
                        e && (!p && e.spaceBefore && h.push(""), ev(n, h, e.commentBefore, p))
                    }
                    p = !1;
                    let a = el(i, f, () => o = null, () => p = !0);
                    o && (a += Y(a, s, u(o))), p && o && (p = !1), h.push(r + a)
                }
                if (0 === h.length) l = i.start + i.end;
                else {
                    l = h[0];
                    for (let e = 1; e < h.length; ++e) {
                        let t = h[e];
                        l += t ? `
${c}${t}` : "\n"
                    }
                }
                return e ? (l += "\n" + J(u(e), c), a && a()) : p && o && o(), l
            }

            function eb({
                comment: e,
                items: t
            }, n, {
                flowChars: r,
                itemIndent: i,
                onComment: s
            }) {
                let o;
                let {
                    indent: a,
                    indentStep: l,
                    flowCollectionPadding: c,
                    options: {
                        commentString: u
                    }
                } = n;
                i += l;
                let f = Object.assign({}, n, {
                        indent: i,
                        inFlow: !0,
                        type: null
                    }),
                    p = !1,
                    h = 0,
                    d = [];
                for (let e = 0; e < t.length; ++e) {
                    let r = t[e],
                        s = null;
                    if (v(r)) r.spaceBefore && d.push(""), ev(n, d, r.commentBefore, !1), r.comment && (s = r.comment);
                    else if (m(r)) {
                        let e = v(r.key) ? r.key : null;
                        e && (e.spaceBefore && d.push(""), ev(n, d, e.commentBefore, !1), e.comment && (p = !0));
                        let t = v(r.value) ? r.value : null;
                        t ? (t.comment && (s = t.comment), t.commentBefore && (p = !0)) : null == r.value && e && e.comment && (s = e.comment)
                    }
                    s && (p = !0);
                    let o = el(r, f, () => s = null);
                    e < t.length - 1 && (o += ","), s && (o += Y(o, i, u(s))), !p && (d.length > h || o.includes("\n")) && (p = !0), d.push(o), h = d.length
                }
                let {
                    start: y,
                    end: g
                } = r;
                if (0 === d.length) o = y + g;
                else {
                    if (!p) {
                        let e = d.reduce((e, t) => e + t.length + 2, 2);
                        p = e > V.maxFlowStringSingleLineLength
                    }
                    if (p) {
                        for (let e of (o = y, d)) o += e ? `
${l}${a}${e}` : "\n";
                        o += `
${a}${g}`
                    } else o = `${y}${c}${d.join(" ")}${c}${g}`
                }
                return e && (o += Y(o, u(e), a), s && s()), o
            }

            function ev({
                indent: e,
                options: {
                    commentString: t
                }
            }, n, r, i) {
                if (r && i && (r = r.replace(/^\n+/, "")), r) {
                    let i = J(t(r), e);
                    n.push(i.trimStart())
                }
            }

            function ew(e, t) {
                let n = y(t) ? t.value : t;
                for (let r of e)
                    if (m(r) && (r.key === t || r.key === n || y(r.key) && r.key.value === n)) return r
            }
            class ek extends V {
                static get tagName() {
                    return "tag:yaml.org,2002:map"
                }
                constructor(e) {
                    super(a, e), this.items = []
                }
                add(e, t) {
                    let n;
                    n = m(e) ? e : e && "object" == typeof e && "key" in e ? new em(e.key, e.value) : new em(e, e ? .value);
                    let r = ew(this.items, n.key),
                        i = this.schema ? .sortMapEntries;
                    if (r) {
                        if (!t) throw Error(`Key ${n.key} already set`);
                        y(r.value) && B(n.value) ? r.value.value = n.value : r.value = n.value
                    } else if (i) {
                        let e = this.items.findIndex(e => 0 > i(n, e)); - 1 === e ? this.items.push(n) : this.items.splice(e, 0, n)
                    } else this.items.push(n)
                }
                delete(e) {
                    let t = ew(this.items, e);
                    if (!t) return !1;
                    let n = this.items.splice(this.items.indexOf(t), 1);
                    return n.length > 0
                }
                get(e, t) {
                    let n = ew(this.items, e),
                        r = n ? .value;
                    return (!t && y(r) ? r.value : r) ? ? void 0
                }
                has(e) {
                    return !!ew(this.items, e)
                }
                set(e, t) {
                    this.add(new em(e, t), !0)
                }
                toJSON(e, t, n) {
                    let r = n ? new n : t ? .mapAsMap ? new Map : {};
                    for (let e of (t ? .onCreate && t.onCreate(r), this.items)) ef(t, r, e);
                    return r
                }
                toString(e, t, n) {
                    if (!e) return JSON.stringify(this);
                    for (let e of this.items)
                        if (!m(e)) throw Error(`Map items must all be pairs; found ${JSON.stringify(e)} instead`);
                    return !e.allNullValues && this.hasAllNullValues(!1) && (e = Object.assign({}, e, {
                        allNullValues: !0
                    })), ey(this, e, {
                        blockItemPrefix: "",
                        flowChars: {
                            start: "{",
                            end: "}"
                        },
                        itemIndent: e.indent || "",
                        onChompKeep: n,
                        onComment: t
                    })
                }
            }
            let eE = {
                collection: "map",
                createNode: function(e, t, n) {
                    let {
                        keepUndefined: r,
                        replacer: i
                    } = n, s = new ek(e), o = (e, o) => {
                        if ("function" == typeof i) o = i.call(t, e, o);
                        else if (Array.isArray(i) && !i.includes(e)) return;
                        (void 0 !== o || r) && s.items.push(ed(e, o, n))
                    };
                    if (t instanceof Map)
                        for (let [e, n] of t) o(e, n);
                    else if (t && "object" == typeof t)
                        for (let e of Object.keys(t)) o(e, t[e]);
                    return "function" == typeof e.sortMapEntries && s.items.sort(e.sortMapEntries), s
                },
                default: !0,
                nodeClass: ek,
                tag: "tag:yaml.org,2002:map",
                resolve: (e, t) => (d(e) || t("Expected a mapping for this tag"), e)
            };
            class eS extends V {
                static get tagName() {
                    return "tag:yaml.org,2002:seq"
                }
                constructor(e) {
                    super(u, e), this.items = []
                }
                add(e) {
                    this.items.push(e)
                }
                delete(e) {
                    let t = eO(e);
                    if ("number" != typeof t) return !1;
                    let n = this.items.splice(t, 1);
                    return n.length > 0
                }
                get(e, t) {
                    let n = eO(e);
                    if ("number" != typeof n) return;
                    let r = this.items[n];
                    return !t && y(r) ? r.value : r
                }
                has(e) {
                    let t = eO(e);
                    return "number" == typeof t && t < this.items.length
                }
                set(e, t) {
                    let n = eO(e);
                    if ("number" != typeof n) throw Error(`Expected a valid index, not ${e}.`);
                    let r = this.items[n];
                    y(r) && B(t) ? r.value = t : this.items[n] = t
                }
                toJSON(e, t) {
                    let n = [];
                    t ? .onCreate && t.onCreate(n);
                    let r = 0;
                    for (let e of this.items) n.push(R(e, String(r++), t));
                    return n
                }
                toString(e, t, n) {
                    return e ? ey(this, e, {
                        blockItemPrefix: "- ",
                        flowChars: {
                            start: "[",
                            end: "]"
                        },
                        itemIndent: (e.indent || "") + "  ",
                        onChompKeep: n,
                        onComment: t
                    }) : JSON.stringify(this)
                }
            }

            function eO(e) {
                let t = y(e) ? e.value : e;
                return t && "string" == typeof t && (t = Number(t)), "number" == typeof t && Number.isInteger(t) && t >= 0 ? t : null
            }
            let eA = {
                    collection: "seq",
                    createNode: function(e, t, n) {
                        let {
                            replacer: r
                        } = n, i = new eS(e);
                        if (t && Symbol.iterator in Object(t)) {
                            let e = 0;
                            for (let s of t) {
                                if ("function" == typeof r) {
                                    let n = t instanceof Set ? s : String(e++);
                                    s = r.call(t, n, s)
                                }
                                i.items.push(q(s, void 0, n))
                            }
                        }
                        return i
                    },
                    default: !0,
                    nodeClass: eS,
                    tag: "tag:yaml.org,2002:seq",
                    resolve: (e, t) => (g(e) || t("Expected a sequence for this tag"), e)
                },
                e_ = {
                    identify: e => "string" == typeof e,
                    default: !0,
                    tag: "tag:yaml.org,2002:str",
                    resolve: e => e,
                    stringify: (e, t, n, r) => eo(e, t = Object.assign({
                        actualString: !0
                    }, t), n, r)
                },
                ex = {
                    identify: e => null == e,
                    createNode: () => new K(null),
                    default: !0,
                    tag: "tag:yaml.org,2002:null",
                    test: /^(?:~|[Nn]ull|NULL)?$/,
                    resolve: () => new K(null),
                    stringify: ({
                        source: e
                    }, t) => "string" == typeof e && ex.test.test(e) ? e : t.options.nullStr
                },
                eN = {
                    identify: e => "boolean" == typeof e,
                    default: !0,
                    tag: "tag:yaml.org,2002:bool",
                    test: /^(?:[Tt]rue|TRUE|[Ff]alse|FALSE)$/,
                    resolve: e => new K("t" === e[0] || "T" === e[0]),
                    stringify({
                        source: e,
                        value: t
                    }, n) {
                        if (e && eN.test.test(e)) {
                            let n = "t" === e[0] || "T" === e[0];
                            if (t === n) return e
                        }
                        return t ? n.options.trueStr : n.options.falseStr
                    }
                };

            function eT({
                format: e,
                minFractionDigits: t,
                tag: n,
                value: r
            }) {
                if ("bigint" == typeof r) return String(r);
                let i = "number" == typeof r ? r : Number(r);
                if (!isFinite(i)) return isNaN(i) ? ".nan" : i < 0 ? "-.inf" : ".inf";
                let s = JSON.stringify(r);
                if (!e && t && (!n || "tag:yaml.org,2002:float" === n) && /^\d/.test(s)) {
                    let e = s.indexOf(".");
                    e < 0 && (e = s.length, s += ".");
                    let n = t - (s.length - e - 1);
                    for (; n-- > 0;) s += "0"
                }
                return s
            }
            let eI = {
                    identify: e => "number" == typeof e,
                    default: !0,
                    tag: "tag:yaml.org,2002:float",
                    test: /^(?:[-+]?\.(?:inf|Inf|INF|nan|NaN|NAN))$/,
                    resolve: e => "nan" === e.slice(-3).toLowerCase() ? NaN : "-" === e[0] ? Number.NEGATIVE_INFINITY : Number.POSITIVE_INFINITY,
                    stringify: eT
                },
                eC = {
                    identify: e => "number" == typeof e,
                    default: !0,
                    tag: "tag:yaml.org,2002:float",
                    format: "EXP",
                    test: /^[-+]?(?:\.[0-9]+|[0-9]+(?:\.[0-9]*)?)[eE][-+]?[0-9]+$/,
                    resolve: e => parseFloat(e),
                    stringify(e) {
                        let t = Number(e.value);
                        return isFinite(t) ? t.toExponential() : eT(e)
                    }
                },
                ej = {
                    identify: e => "number" == typeof e,
                    default: !0,
                    tag: "tag:yaml.org,2002:float",
                    test: /^[-+]?(?:\.[0-9]+|[0-9]+\.[0-9]*)$/,
                    resolve(e) {
                        let t = new K(parseFloat(e)),
                            n = e.indexOf(".");
                        return -1 !== n && "0" === e[e.length - 1] && (t.minFractionDigits = e.length - n - 1), t
                    },
                    stringify: eT
                },
                eD = e => "bigint" == typeof e || Number.isInteger(e),
                eP = (e, t, n, {
                    intAsBigInt: r
                }) => r ? BigInt(e) : parseInt(e.substring(t), n);

            function eL(e, t, n) {
                let {
                    value: r
                } = e;
                return eD(r) && r >= 0 ? n + r.toString(t) : eT(e)
            }
            let e$ = {
                    identify: e => eD(e) && e >= 0,
                    default: !0,
                    tag: "tag:yaml.org,2002:int",
                    format: "OCT",
                    test: /^0o[0-7]+$/,
                    resolve: (e, t, n) => eP(e, 2, 8, n),
                    stringify: e => eL(e, 8, "0o")
                },
                eM = {
                    identify: eD,
                    default: !0,
                    tag: "tag:yaml.org,2002:int",
                    test: /^[-+]?[0-9]+$/,
                    resolve: (e, t, n) => eP(e, 0, 10, n),
                    stringify: eT
                },
                eF = {
                    identify: e => eD(e) && e >= 0,
                    default: !0,
                    tag: "tag:yaml.org,2002:int",
                    format: "HEX",
                    test: /^0x[0-9a-fA-F]+$/,
                    resolve: (e, t, n) => eP(e, 2, 16, n),
                    stringify: e => eL(e, 16, "0x")
                };

            function eR(e) {
                return "bigint" == typeof e || Number.isInteger(e)
            }
            let eB = ({
                    value: e
                }) => JSON.stringify(e),
                eK = [{
                    identify: e => "string" == typeof e,
                    default: !0,
                    tag: "tag:yaml.org,2002:str",
                    resolve: e => e,
                    stringify: eB
                }, {
                    identify: e => null == e,
                    createNode: () => new K(null),
                    default: !0,
                    tag: "tag:yaml.org,2002:null",
                    test: /^null$/,
                    resolve: () => null,
                    stringify: eB
                }, {
                    identify: e => "boolean" == typeof e,
                    default: !0,
                    tag: "tag:yaml.org,2002:bool",
                    test: /^true|false$/,
                    resolve: e => "true" === e,
                    stringify: eB
                }, {
                    identify: eR,
                    default: !0,
                    tag: "tag:yaml.org,2002:int",
                    test: /^-?(?:0|[1-9][0-9]*)$/,
                    resolve: (e, t, {
                        intAsBigInt: n
                    }) => n ? BigInt(e) : parseInt(e, 10),
                    stringify: ({
                        value: e
                    }) => eR(e) ? e.toString() : JSON.stringify(e)
                }, {
                    identify: e => "number" == typeof e,
                    default: !0,
                    tag: "tag:yaml.org,2002:float",
                    test: /^-?(?:0|[1-9][0-9]*)(?:\.[0-9]*)?(?:[eE][-+]?[0-9]+)?$/,
                    resolve: e => parseFloat(e),
                    stringify: eB
                }],
                eq = [eE, eA].concat(eK, {
                    default: !0,
                    tag: "",
                    test: /^/,
                    resolve: (e, t) => (t(`Unresolved plain scalar ${JSON.stringify(e)}`), e)
                });
            var eU = n(14984).lW;
            let ez = {
                identify: e => e instanceof Uint8Array,
                default: !1,
                tag: "tag:yaml.org,2002:binary",
                resolve(e, t) {
                    if ("function" == typeof eU) return eU.from(e, "base64");
                    if ("function" != typeof atob) return t("This environment does not support reading binary tags; either Buffer or atob is required"), e; {
                        let t = atob(e.replace(/[\n\r]/g, "")),
                            n = new Uint8Array(t.length);
                        for (let e = 0; e < t.length; ++e) n[e] = t.charCodeAt(e);
                        return n
                    }
                },
                stringify({
                    comment: e,
                    type: t,
                    value: n
                }, r, i, s) {
                    let o;
                    if ("function" == typeof eU) o = n instanceof eU ? n.toString("base64") : eU.from(n.buffer).toString("base64");
                    else if ("function" == typeof btoa) {
                        let e = "";
                        for (let t = 0; t < n.length; ++t) e += String.fromCharCode(n[t]);
                        o = btoa(e)
                    } else throw Error("This environment does not support writing binary tags; either Buffer or btoa is required");
                    if (t || (t = K.BLOCK_LITERAL), t !== K.QUOTE_DOUBLE) {
                        let e = Math.max(r.options.lineWidth - r.indent.length, r.options.minContentWidth),
                            n = Math.ceil(o.length / e),
                            i = Array(n);
                        for (let t = 0, r = 0; t < n; ++t, r += e) i[t] = o.substr(r, e);
                        o = i.join(t === K.BLOCK_LITERAL ? "\n" : " ")
                    }
                    return eo({
                        comment: e,
                        type: t,
                        value: o
                    }, r, i, s)
                }
            };

            function eV(e, t) {
                if (g(e))
                    for (let n = 0; n < e.items.length; ++n) {
                        let r = e.items[n];
                        if (!m(r)) {
                            if (d(r)) {
                                r.items.length > 1 && t("Each pair must have its own sequence indicator");
                                let e = r.items[0] || new em(new K(null));
                                if (r.commentBefore && (e.key.commentBefore = e.key.commentBefore ? `${r.commentBefore}
${e.key.commentBefore}` : r.commentBefore), r.comment) {
                                    let t = e.value ? ? e.key;
                                    t.comment = t.comment ? `${r.comment}
${t.comment}` : r.comment
                                }
                                r = e
                            }
                            e.items[n] = m(r) ? r : new em(r)
                        }
                    } else t("Expected a sequence for this tag");
                return e
            }

            function eW(e, t, n) {
                let {
                    replacer: r
                } = n, i = new eS(e);
                i.tag = "tag:yaml.org,2002:pairs";
                let s = 0;
                if (t && Symbol.iterator in Object(t))
                    for (let e of t) {
                        let o, a;
                        if ("function" == typeof r && (e = r.call(t, String(s++), e)), Array.isArray(e)) {
                            if (2 === e.length) o = e[0], a = e[1];
                            else throw TypeError(`Expected [key, value] tuple: ${e}`)
                        } else if (e && e instanceof Object) {
                            let t = Object.keys(e);
                            if (1 === t.length) a = e[o = t[0]];
                            else throw TypeError(`Expected { key: value } tuple: ${e}`)
                        } else o = e;
                        i.items.push(ed(o, a, n))
                    }
                return i
            }
            let eJ = {
                collection: "seq",
                default: !1,
                tag: "tag:yaml.org,2002:pairs",
                resolve: eV,
                createNode: eW
            };
            class eY extends eS {
                constructor() {
                    super(), this.add = ek.prototype.add.bind(this), this.delete = ek.prototype.delete.bind(this), this.get = ek.prototype.get.bind(this), this.has = ek.prototype.has.bind(this), this.set = ek.prototype.set.bind(this), this.tag = eY.tag
                }
                toJSON(e, t) {
                    if (!t) return super.toJSON(e);
                    let n = new Map;
                    for (let e of (t ? .onCreate && t.onCreate(n), this.items)) {
                        let r, i;
                        if (m(e) ? (r = R(e.key, "", t), i = R(e.value, r, t)) : r = R(e, "", t), n.has(r)) throw Error("Ordered maps must not include duplicate keys");
                        n.set(r, i)
                    }
                    return n
                }
            }
            eY.tag = "tag:yaml.org,2002:omap";
            let eG = {
                collection: "seq",
                identify: e => e instanceof Map,
                nodeClass: eY,
                default: !1,
                tag: "tag:yaml.org,2002:omap",
                resolve(e, t) {
                    let n = eV(e, t),
                        r = [];
                    for (let {
                            key: e
                        } of n.items) y(e) && (r.includes(e.value) ? t(`Ordered maps must not include duplicate keys: ${e.value}`) : r.push(e.value));
                    return Object.assign(new eY, n)
                },
                createNode(e, t, n) {
                    let r = eW(e, t, n),
                        i = new eY;
                    return i.items = r.items, i
                }
            };

            function eH({
                value: e,
                source: t
            }, n) {
                return t && (e ? eZ : eQ).test.test(t) ? t : e ? n.options.trueStr : n.options.falseStr
            }
            let eZ = {
                    identify: e => !0 === e,
                    default: !0,
                    tag: "tag:yaml.org,2002:bool",
                    test: /^(?:Y|y|[Yy]es|YES|[Tt]rue|TRUE|[Oo]n|ON)$/,
                    resolve: () => new K(!0),
                    stringify: eH
                },
                eQ = {
                    identify: e => !1 === e,
                    default: !0,
                    tag: "tag:yaml.org,2002:bool",
                    test: /^(?:N|n|[Nn]o|NO|[Ff]alse|FALSE|[Oo]ff|OFF)$/i,
                    resolve: () => new K(!1),
                    stringify: eH
                },
                eX = e => "bigint" == typeof e || Number.isInteger(e);

            function e0(e, t, n, {
                intAsBigInt: r
            }) {
                let i = e[0];
                if (("-" === i || "+" === i) && (t += 1), e = e.substring(t).replace(/_/g, ""), r) {
                    switch (n) {
                        case 2:
                            e = `0b${e}`;
                            break;
                        case 8:
                            e = `0o${e}`;
                            break;
                        case 16:
                            e = `0x${e}`
                    }
                    let t = BigInt(e);
                    return "-" === i ? BigInt(-1) * t : t
                }
                let s = parseInt(e, n);
                return "-" === i ? -1 * s : s
            }

            function e1(e, t, n) {
                let {
                    value: r
                } = e;
                if (eX(r)) {
                    let e = r.toString(t);
                    return r < 0 ? "-" + n + e.substr(1) : n + e
                }
                return eT(e)
            }
            class e2 extends ek {
                constructor(e) {
                    super(e), this.tag = e2.tag
                }
                add(e) {
                    let t;
                    t = m(e) ? e : e && "object" == typeof e && "key" in e && "value" in e && null === e.value ? new em(e.key, null) : new em(e, null);
                    let n = ew(this.items, t.key);
                    n || this.items.push(t)
                }
                get(e, t) {
                    let n = ew(this.items, e);
                    return !t && m(n) ? y(n.key) ? n.key.value : n.key : n
                }
                set(e, t) {
                    if ("boolean" != typeof t) throw Error(`Expected boolean value for set(key, value) in a YAML set, not ${typeof t}`);
                    let n = ew(this.items, e);
                    n && !t ? this.items.splice(this.items.indexOf(n), 1) : !n && t && this.items.push(new em(e))
                }
                toJSON(e, t) {
                    return super.toJSON(e, t, Set)
                }
                toString(e, t, n) {
                    if (!e) return JSON.stringify(this);
                    if (this.hasAllNullValues(!0)) return super.toString(Object.assign({}, e, {
                        allNullValues: !0
                    }), t, n);
                    throw Error("Set items must all have null values")
                }
            }
            e2.tag = "tag:yaml.org,2002:set";
            let e5 = {
                collection: "map",
                identify: e => e instanceof Set,
                nodeClass: e2,
                default: !1,
                tag: "tag:yaml.org,2002:set",
                resolve(e, t) {
                    if (d(e)) {
                        if (e.hasAllNullValues(!0)) return Object.assign(new e2, e);
                        t("Set items must all have null values")
                    } else t("Expected a mapping for this tag");
                    return e
                },
                createNode(e, t, n) {
                    let {
                        replacer: r
                    } = n, i = new e2(e);
                    if (t && Symbol.iterator in Object(t))
                        for (let e of t) "function" == typeof r && (e = r.call(t, e, e)), i.items.push(ed(e, null, n));
                    return i
                }
            };

            function e3(e, t) {
                let n = e[0],
                    r = "-" === n || "+" === n ? e.substring(1) : e,
                    i = e => t ? BigInt(e) : Number(e),
                    s = r.replace(/_/g, "").split(":").reduce((e, t) => e * i(60) + i(t), i(0));
                return "-" === n ? i(-1) * s : s
            }

            function e7(e) {
                let {
                    value: t
                } = e, n = e => e;
                if ("bigint" == typeof t) n = e => BigInt(e);
                else if (isNaN(t) || !isFinite(t)) return eT(e);
                let r = "";
                t < 0 && (r = "-", t *= n(-1));
                let i = n(60),
                    s = [t % i];
                return t < 60 ? s.unshift(0) : (t = (t - s[0]) / i, s.unshift(t % i), t >= 60 && (t = (t - s[0]) / i, s.unshift(t))), r + s.map(e => e < 10 ? "0" + String(e) : String(e)).join(":").replace(/000000\d*$/, "")
            }
            let e8 = {
                    identify: e => "bigint" == typeof e || Number.isInteger(e),
                    default: !0,
                    tag: "tag:yaml.org,2002:int",
                    format: "TIME",
                    test: /^[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+$/,
                    resolve: (e, t, {
                        intAsBigInt: n
                    }) => e3(e, n),
                    stringify: e7
                },
                e9 = {
                    identify: e => "number" == typeof e,
                    default: !0,
                    tag: "tag:yaml.org,2002:float",
                    format: "TIME",
                    test: /^[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+\.[0-9_]*$/,
                    resolve: e => e3(e, !1),
                    stringify: e7
                },
                e4 = {
                    identify: e => e instanceof Date,
                    default: !0,
                    tag: "tag:yaml.org,2002:timestamp",
                    test: RegExp("^([0-9]{4})-([0-9]{1,2})-([0-9]{1,2})(?:(?:t|T|[ \\t]+)([0-9]{1,2}):([0-9]{1,2}):([0-9]{1,2}(\\.[0-9]+)?)(?:[ \\t]*(Z|[-+][012]?[0-9](?::[0-9]{2})?))?)?$"),
                    resolve(e) {
                        let t = e.match(e4.test);
                        if (!t) throw Error("!!timestamp expects a date, starting with yyyy-mm-dd");
                        let [, n, r, i, s, o, a] = t.map(Number), l = t[7] ? Number((t[7] + "00").substr(1, 3)) : 0, c = Date.UTC(n, r - 1, i, s || 0, o || 0, a || 0, l), u = t[8];
                        if (u && "Z" !== u) {
                            let e = e3(u, !1);
                            30 > Math.abs(e) && (e *= 60), c -= 6e4 * e
                        }
                        return new Date(c)
                    },
                    stringify: ({
                        value: e
                    }) => e.toISOString().replace(/((T00:00)?:00)?\.000Z$/, "")
                },
                e6 = [eE, eA, e_, ex, eZ, eQ, {
                    identify: eX,
                    default: !0,
                    tag: "tag:yaml.org,2002:int",
                    format: "BIN",
                    test: /^[-+]?0b[0-1_]+$/,
                    resolve: (e, t, n) => e0(e, 2, 2, n),
                    stringify: e => e1(e, 2, "0b")
                }, {
                    identify: eX,
                    default: !0,
                    tag: "tag:yaml.org,2002:int",
                    format: "OCT",
                    test: /^[-+]?0[0-7_]+$/,
                    resolve: (e, t, n) => e0(e, 1, 8, n),
                    stringify: e => e1(e, 8, "0")
                }, {
                    identify: eX,
                    default: !0,
                    tag: "tag:yaml.org,2002:int",
                    test: /^[-+]?[0-9][0-9_]*$/,
                    resolve: (e, t, n) => e0(e, 0, 10, n),
                    stringify: eT
                }, {
                    identify: eX,
                    default: !0,
                    tag: "tag:yaml.org,2002:int",
                    format: "HEX",
                    test: /^[-+]?0x[0-9a-fA-F_]+$/,
                    resolve: (e, t, n) => e0(e, 2, 16, n),
                    stringify: e => e1(e, 16, "0x")
                }, {
                    identify: e => "number" == typeof e,
                    default: !0,
                    tag: "tag:yaml.org,2002:float",
                    test: /^[-+]?\.(?:inf|Inf|INF|nan|NaN|NAN)$/,
                    resolve: e => "nan" === e.slice(-3).toLowerCase() ? NaN : "-" === e[0] ? Number.NEGATIVE_INFINITY : Number.POSITIVE_INFINITY,
                    stringify: eT
                }, {
                    identify: e => "number" == typeof e,
                    default: !0,
                    tag: "tag:yaml.org,2002:float",
                    format: "EXP",
                    test: /^[-+]?(?:[0-9][0-9_]*)?(?:\.[0-9_]*)?[eE][-+]?[0-9]+$/,
                    resolve: e => parseFloat(e.replace(/_/g, "")),
                    stringify(e) {
                        let t = Number(e.value);
                        return isFinite(t) ? t.toExponential() : eT(e)
                    }
                }, {
                    identify: e => "number" == typeof e,
                    default: !0,
                    tag: "tag:yaml.org,2002:float",
                    test: /^[-+]?(?:[0-9][0-9_]*)?\.[0-9_]*$/,
                    resolve(e) {
                        let t = new K(parseFloat(e.replace(/_/g, ""))),
                            n = e.indexOf(".");
                        if (-1 !== n) {
                            let r = e.substring(n + 1).replace(/_/g, "");
                            "0" === r[r.length - 1] && (t.minFractionDigits = r.length)
                        }
                        return t
                    },
                    stringify: eT
                }, ez, eG, eJ, e5, e8, e9, e4],
                te = new Map([
                    ["core", [eE, eA, e_, ex, eN, e$, eM, eF, eI, eC, ej]],
                    ["failsafe", [eE, eA, e_]],
                    ["json", eq],
                    ["yaml11", e6],
                    ["yaml-1.1", e6]
                ]),
                tt = {
                    binary: ez,
                    bool: eN,
                    float: ej,
                    floatExp: eC,
                    floatNaN: eI,
                    floatTime: e9,
                    int: eM,
                    intHex: eF,
                    intOct: e$,
                    intTime: e8,
                    map: eE,
                    null: ex,
                    omap: eG,
                    pairs: eJ,
                    seq: eA,
                    set: e5,
                    timestamp: e4
                },
                tn = {
                    "tag:yaml.org,2002:binary": ez,
                    "tag:yaml.org,2002:omap": eG,
                    "tag:yaml.org,2002:pairs": eJ,
                    "tag:yaml.org,2002:set": e5,
                    "tag:yaml.org,2002:timestamp": e4
                };

            function tr(e, t) {
                let n = te.get(t);
                if (!n) {
                    if (Array.isArray(e)) n = [];
                    else {
                        let e = Array.from(te.keys()).filter(e => "yaml11" !== e).map(e => JSON.stringify(e)).join(", ");
                        throw Error(`Unknown schema "${t}"; use one of ${e} or define customTags array`)
                    }
                }
                if (Array.isArray(e))
                    for (let t of e) n = n.concat(t);
                else "function" == typeof e && (n = e(n.slice()));
                return n.map(e => {
                    if ("string" != typeof e) return e;
                    let t = tt[e];
                    if (t) return t;
                    let n = Object.keys(tt).map(e => JSON.stringify(e)).join(", ");
                    throw Error(`Unknown custom tag "${e}"; use one of ${n}`)
                })
            }
            let ti = (e, t) => e.key < t.key ? -1 : e.key > t.key ? 1 : 0;
            class ts {
                constructor({
                    compat: e,
                    customTags: t,
                    merge: n,
                    resolveKnownTags: r,
                    schema: i,
                    sortMapEntries: s,
                    toStringDefaults: o
                }) {
                    this.compat = Array.isArray(e) ? tr(e, "compat") : e ? tr(null, e) : null, this.merge = !!n, this.name = "string" == typeof i && i || "core", this.knownTags = r ? tn : {}, this.tags = tr(t, this.name), this.toStringOptions = o ? ? null, Object.defineProperty(this, a, {
                        value: eE
                    }), Object.defineProperty(this, c, {
                        value: e_
                    }), Object.defineProperty(this, u, {
                        value: eA
                    }), this.sortMapEntries = "function" == typeof s ? s : !0 === s ? ti : null
                }
                clone() {
                    let e = Object.create(ts.prototype, Object.getOwnPropertyDescriptors(this));
                    return e.tags = this.tags.slice(), e
                }
            }
            class to {
                constructor(e, t, n) {
                    this.commentBefore = null, this.comment = null, this.errors = [], this.warnings = [], Object.defineProperty(this, f, {
                        value: o
                    });
                    let r = null;
                    "function" == typeof t || Array.isArray(t) ? r = t : void 0 === n && t && (n = t, t = void 0);
                    let i = Object.assign({
                        intAsBigInt: !1,
                        keepSourceTokens: !1,
                        logLevel: "warn",
                        prettyErrors: !0,
                        strict: !0,
                        uniqueKeys: !0,
                        version: "1.2"
                    }, n);
                    this.options = i;
                    let {
                        version: s
                    } = i;
                    n ? ._directives ? (this.directives = n._directives.atDocument(), this.directives.yaml.explicit && (s = this.directives.yaml.version)) : this.directives = new P({
                        version: s
                    }), this.setSchema(s, n), void 0 === e ? this.contents = null : this.contents = this.createNode(e, r, n)
                }
                clone() {
                    let e = Object.create(to.prototype, {
                        [f]: {
                            value: o
                        }
                    });
                    return e.commentBefore = this.commentBefore, e.comment = this.comment, e.errors = this.errors.slice(), e.warnings = this.warnings.slice(), e.options = Object.assign({}, this.options), this.directives && (e.directives = this.directives.clone()), e.schema = this.schema.clone(), e.contents = v(this.contents) ? this.contents.clone(e.schema) : this.contents, this.range && (e.range = this.range.slice()), e
                }
                add(e) {
                    ta(this.contents) && this.contents.add(e)
                }
                addIn(e, t) {
                    ta(this.contents) && this.contents.addIn(e, t)
                }
                createAlias(e, t) {
                    if (!e.anchor) {
                        let n = $(this);
                        e.anchor = !t || n.has(t) ? M(t || "a", n) : t
                    }
                    return new F(e.anchor)
                }
                createNode(e, t, n) {
                    let r;
                    if ("function" == typeof t) e = t.call({
                        "": e
                    }, "", e), r = t;
                    else if (Array.isArray(t)) {
                        let e = t.filter(e => "number" == typeof e || e instanceof String || e instanceof Number).map(String);
                        e.length > 0 && (t = t.concat(e)), r = t
                    } else void 0 === n && t && (n = t, t = void 0);
                    let {
                        aliasDuplicateObjects: i,
                        anchorPrefix: s,
                        flow: o,
                        keepUndefined: a,
                        onTagObj: l,
                        tag: c
                    } = n ? ? {}, {
                        onAnchor: u,
                        setAnchors: f,
                        sourceObjects: p
                    } = function(e, t) {
                        let n = [],
                            r = new Map,
                            i = null;
                        return {
                            onAnchor: r => {
                                n.push(r), i || (i = $(e));
                                let s = M(t, i);
                                return i.add(s), s
                            },
                            setAnchors: () => {
                                for (let e of n) {
                                    let t = r.get(e);
                                    if ("object" == typeof t && t.anchor && (y(t.node) || b(t.node))) t.node.anchor = t.anchor;
                                    else {
                                        let t = Error("Failed to resolve repeated object (this should not happen)");
                                        throw t.source = e, t
                                    }
                                }
                            },
                            sourceObjects: r
                        }
                    }(this, s || "a"), h = {
                        aliasDuplicateObjects: i ? ? !0,
                        keepUndefined: a ? ? !1,
                        onAnchor: u,
                        onTagObj: l,
                        replacer: r,
                        schema: this.schema,
                        sourceObjects: p
                    }, d = q(e, c, h);
                    return o && b(d) && (d.flow = !0), f(), d
                }
                createPair(e, t, n = {}) {
                    let r = this.createNode(e, null, n),
                        i = this.createNode(t, null, n);
                    return new em(r, i)
                }
                delete(e) {
                    return !!ta(this.contents) && this.contents.delete(e)
                }
                deleteIn(e) {
                    return z(e) ? null != this.contents && (this.contents = null, !0) : !!ta(this.contents) && this.contents.deleteIn(e)
                }
                get(e, t) {
                    return b(this.contents) ? this.contents.get(e, t) : void 0
                }
                getIn(e, t) {
                    return z(e) ? !t && y(this.contents) ? this.contents.value : this.contents : b(this.contents) ? this.contents.getIn(e, t) : void 0
                }
                has(e) {
                    return !!b(this.contents) && this.contents.has(e)
                }
                hasIn(e) {
                    return z(e) ? void 0 !== this.contents : !!b(this.contents) && this.contents.hasIn(e)
                }
                set(e, t) {
                    null == this.contents ? this.contents = U(this.schema, [e], t) : ta(this.contents) && this.contents.set(e, t)
                }
                setIn(e, t) {
                    z(e) ? this.contents = t : null == this.contents ? this.contents = U(this.schema, Array.from(e), t) : ta(this.contents) && this.contents.setIn(e, t)
                }
                setSchema(e, t = {}) {
                    let n;
                    switch ("number" == typeof e && (e = String(e)), e) {
                        case "1.1":
                            this.directives ? this.directives.yaml.version = "1.1" : this.directives = new P({
                                version: "1.1"
                            }), n = {
                                merge: !0,
                                resolveKnownTags: !1,
                                schema: "yaml-1.1"
                            };
                            break;
                        case "1.2":
                        case "next":
                            this.directives ? this.directives.yaml.version = e : this.directives = new P({
                                version: e
                            }), n = {
                                merge: !1,
                                resolveKnownTags: !0,
                                schema: "core"
                            };
                            break;
                        case null:
                            this.directives && delete this.directives, n = null;
                            break;
                        default:
                            {
                                let t = JSON.stringify(e);
                                throw Error(`Expected '1.1', '1.2' or null as first argument, but found: ${t}`)
                            }
                    }
                    if (t.schema instanceof Object) this.schema = t.schema;
                    else if (n) this.schema = new ts(Object.assign(n, t));
                    else throw Error("With a null YAML version, the { schema: Schema } option is required")
                }
                toJS({
                    json: e,
                    jsonArg: t,
                    mapAsMap: n,
                    maxAliasCount: r,
                    onAnchor: i,
                    reviver: s
                } = {}) {
                    let o = {
                            anchors: new Map,
                            doc: this,
                            keep: !e,
                            mapAsMap: !0 === n,
                            mapKeyWarned: !1,
                            maxAliasCount: "number" == typeof r ? r : 100,
                            stringify: el
                        },
                        a = R(this.contents, t ? ? "", o);
                    if ("function" == typeof i)
                        for (let {
                                count: e,
                                res: t
                            } of o.anchors.values()) i(t, e);
                    return "function" == typeof s ? function e(t, n, r, i) {
                        if (i && "object" == typeof i) {
                            if (Array.isArray(i))
                                for (let n = 0, r = i.length; n < r; ++n) {
                                    let r = i[n],
                                        s = e(t, i, String(n), r);
                                    void 0 === s ? delete i[n] : s !== r && (i[n] = s)
                                } else if (i instanceof Map)
                                    for (let n of Array.from(i.keys())) {
                                        let r = i.get(n),
                                            s = e(t, i, n, r);
                                        void 0 === s ? i.delete(n) : s !== r && i.set(n, s)
                                    } else if (i instanceof Set)
                                        for (let n of Array.from(i)) {
                                            let r = e(t, i, n, n);
                                            void 0 === r ? i.delete(n) : r !== n && (i.delete(n), i.add(r))
                                        } else
                                            for (let [n, r] of Object.entries(i)) {
                                                let s = e(t, i, n, r);
                                                void 0 === s ? delete i[n] : s !== r && (i[n] = s)
                                            }
                        }
                        return t.call(n, r, i)
                    }(s, {
                        "": a
                    }, "", a) : a
                }
                toJSON(e, t) {
                    return this.toJS({
                        json: !0,
                        jsonArg: e,
                        mapAsMap: !1,
                        onAnchor: t
                    })
                }
                toString(e = {}) {
                    if (this.errors.length > 0) throw Error("Document with errors cannot be stringified");
                    if ("indent" in e && (!Number.isInteger(e.indent) || 0 >= Number(e.indent))) {
                        let t = JSON.stringify(e.indent);
                        throw Error(`"indent" option must be a positive integer, not ${t}`)
                    }
                    return function(e, t) {
                        let n = [],
                            r = !0 === t.directives;
                        if (!1 !== t.directives && e.directives) {
                            let t = e.directives.toString(e);
                            t ? (n.push(t), r = !0) : e.directives.docStart && (r = !0)
                        }
                        r && n.push("---");
                        let i = ea(e, t),
                            {
                                commentString: s
                            } = i.options;
                        if (e.commentBefore) {
                            1 !== n.length && n.unshift("");
                            let t = s(e.commentBefore);
                            n.unshift(J(t, ""))
                        }
                        let o = !1,
                            a = null;
                        if (e.contents) {
                            if (v(e.contents)) {
                                if (e.contents.spaceBefore && r && n.push(""), e.contents.commentBefore) {
                                    let t = s(e.contents.commentBefore);
                                    n.push(J(t, ""))
                                }
                                i.forceBlockIndent = !!e.comment, a = e.contents.comment
                            }
                            let t = a ? void 0 : () => o = !0,
                                l = el(e.contents, i, () => a = null, t);
                            a && (l += Y(l, "", s(a))), ("|" === l[0] || ">" === l[0]) && "---" === n[n.length - 1] ? n[n.length - 1] = `--- ${l}` : n.push(l)
                        } else n.push(el(e.contents, i));
                        if (e.directives ? .docEnd) {
                            if (e.comment) {
                                let t = s(e.comment);
                                t.includes("\n") ? (n.push("..."), n.push(J(t, ""))) : n.push(`... ${t}`)
                            } else n.push("...")
                        } else {
                            let t = e.comment;
                            t && o && (t = t.replace(/^\n+/, "")), t && ((!o || a) && "" !== n[n.length - 1] && n.push(""), n.push(J(s(t), "")))
                        }
                        return n.join("\n") + "\n"
                    }(this, e)
                }
            }

            function ta(e) {
                if (b(e)) return !0;
                throw Error("Expected a YAML collection as document contents")
            }
            class tl extends Error {
                constructor(e, t, n, r) {
                    super(), this.name = e, this.code = n, this.message = r, this.pos = t
                }
            }
            class tc extends tl {
                constructor(e, t, n) {
                    super("YAMLParseError", e, t, n)
                }
            }
            class tu extends tl {
                constructor(e, t, n) {
                    super("YAMLWarning", e, t, n)
                }
            }
            let tf = (e, t) => n => {
                if (-1 === n.pos[0]) return;
                n.linePos = n.pos.map(e => t.linePos(e));
                let {
                    line: r,
                    col: i
                } = n.linePos[0];
                n.message += ` at line ${r}, column ${i}`;
                let s = i - 1,
                    o = e.substring(t.lineStarts[r - 1], t.lineStarts[r]).replace(/[\n\r]+$/, "");
                if (s >= 60 && o.length > 80) {
                    let e = Math.min(s - 39, o.length - 79);
                    o = "…" + o.substring(e), s -= e - 1
                }
                if (o.length > 80 && (o = o.substring(0, 79) + "…"), r > 1 && /^ *$/.test(o.substring(0, s))) {
                    let n = e.substring(t.lineStarts[r - 2], t.lineStarts[r - 1]);
                    n.length > 80 && (n = n.substring(0, 79) + "…\n"), o = n + o
                }
                if (/[^ ]/.test(o)) {
                    let e = 1,
                        t = n.linePos[1];
                    t && t.line === r && t.col > i && (e = Math.min(t.col - i, 80 - s));
                    let a = " ".repeat(s) + "^".repeat(e);
                    n.message += `:

${o}
${a}
`
                }
            };

            function tp(e, {
                flow: t,
                indicator: n,
                next: r,
                offset: i,
                onError: s,
                startOnNewline: o
            }) {
                let a = !1,
                    l = o,
                    c = o,
                    u = "",
                    f = "",
                    p = !1,
                    h = !1,
                    d = !1,
                    m = null,
                    y = null,
                    g = null,
                    b = null,
                    v = null;
                for (let r of e) switch (d && ("space" !== r.type && "newline" !== r.type && "comma" !== r.type && s(r.offset, "MISSING_CHAR", "Tags and anchors must be separated from the next token by white space"), d = !1), r.type) {
                    case "space":
                        !t && l && "doc-start" !== n && "	" === r.source[0] && s(r, "TAB_AS_INDENT", "Tabs are not allowed as indentation"), c = !0;
                        break;
                    case "comment":
                        {
                            c || s(r, "MISSING_CHAR", "Comments must be separated from other tokens by white space characters");
                            let e = r.source.substring(1) || " ";u ? u += f + e : u = e,
                            f = "",
                            l = !1;
                            break
                        }
                    case "newline":
                        l ? u ? u += r.source : a = !0 : f += r.source, l = !0, p = !0, (m || y) && (h = !0), c = !0;
                        break;
                    case "anchor":
                        m && s(r, "MULTIPLE_ANCHORS", "A node can have at most one anchor"), r.source.endsWith(":") && s(r.offset + r.source.length - 1, "BAD_ALIAS", "Anchor ending in : is ambiguous", !0), m = r, null === v && (v = r.offset), l = !1, c = !1, d = !0;
                        break;
                    case "tag":
                        y && s(r, "MULTIPLE_TAGS", "A node can have at most one tag"), y = r, null === v && (v = r.offset), l = !1, c = !1, d = !0;
                        break;
                    case n:
                        (m || y) && s(r, "BAD_PROP_ORDER", `Anchors and tags must be after the ${r.source} indicator`), b && s(r, "UNEXPECTED_TOKEN", `Unexpected ${r.source} in ${t??"collection"}`), b = r, l = !1, c = !1;
                        break;
                    case "comma":
                        if (t) {
                            g && s(r, "UNEXPECTED_TOKEN", `Unexpected , in ${t}`), g = r, l = !1, c = !1;
                            break
                        }
                    default:
                        s(r, "UNEXPECTED_TOKEN", `Unexpected ${r.type} token`), l = !1, c = !1
                }
                let w = e[e.length - 1],
                    k = w ? w.offset + w.source.length : i;
                return d && r && "space" !== r.type && "newline" !== r.type && "comma" !== r.type && ("scalar" !== r.type || "" !== r.source) && s(r.offset, "MISSING_CHAR", "Tags and anchors must be separated from the next token by white space"), {
                    comma: g,
                    found: b,
                    spaceBefore: a,
                    comment: u,
                    hasNewline: p,
                    hasNewlineAfterProp: h,
                    anchor: m,
                    tag: y,
                    end: k,
                    start: v ? ? k
                }
            }

            function th(e) {
                if (!e) return null;
                switch (e.type) {
                    case "alias":
                    case "scalar":
                    case "double-quoted-scalar":
                    case "single-quoted-scalar":
                        if (e.source.includes("\n")) return !0;
                        if (e.end) {
                            for (let t of e.end)
                                if ("newline" === t.type) return !0
                        }
                        return !1;
                    case "flow-collection":
                        for (let t of e.items) {
                            for (let e of t.start)
                                if ("newline" === e.type) return !0;
                            if (t.sep) {
                                for (let e of t.sep)
                                    if ("newline" === e.type) return !0
                            }
                            if (th(t.key) || th(t.value)) return !0
                        }
                        return !1;
                    default:
                        return !0
                }
            }

            function td(e, t, n) {
                if (t ? .type === "flow-collection") {
                    let r = t.end[0];
                    r.indent === e && ("]" === r.source || "}" === r.source) && th(t) && n(r, "BAD_INDENT", "Flow end indicator should be more indented than parent", !0)
                }
            }

            function tm(e, t, n) {
                let {
                    uniqueKeys: r
                } = e.options;
                if (!1 === r) return !1;
                let i = "function" == typeof r ? r : (t, n) => t === n || y(t) && y(n) && t.value === n.value && !("<<" === t.value && e.schema.merge);
                return t.some(e => i(e.key, n))
            }
            let ty = "All mapping items must start at the same column";

            function tg(e, t, n, r) {
                let i = "";
                if (e) {
                    let s = !1,
                        o = "";
                    for (let a of e) {
                        let {
                            source: e,
                            type: l
                        } = a;
                        switch (l) {
                            case "space":
                                s = !0;
                                break;
                            case "comment":
                                {
                                    n && !s && r(a, "MISSING_CHAR", "Comments must be separated from other tokens by white space characters");
                                    let t = e.substring(1) || " ";i ? i += o + t : i = t,
                                    o = "";
                                    break
                                }
                            case "newline":
                                i && (o += e), s = !0;
                                break;
                            default:
                                r(a, "UNEXPECTED_TOKEN", `Unexpected ${l} at node end`)
                        }
                        t += e.length
                    }
                }
                return {
                    comment: i,
                    offset: t
                }
            }
            let tb = "Block collections are not allowed within flow collections",
                tv = e => e && ("block-map" === e.type || "block-seq" === e.type);

            function tw(e, t, n) {
                let r = e.offset,
                    i = function({
                        offset: e,
                        props: t
                    }, n, r) {
                        if ("block-scalar-header" !== t[0].type) return r(t[0], "IMPOSSIBLE", "Block scalar header not found"), null;
                        let {
                            source: i
                        } = t[0], s = i[0], o = 0, a = "", l = -1;
                        for (let t = 1; t < i.length; ++t) {
                            let n = i[t];
                            if (a || "-" !== n && "+" !== n) {
                                let r = Number(n);
                                !o && r ? o = r : -1 === l && (l = e + t)
                            } else a = n
                        } - 1 !== l && r(l, "UNEXPECTED_TOKEN", `Block scalar header includes extra characters: ${i}`);
                        let c = !1,
                            u = "",
                            f = i.length;
                        for (let e = 1; e < t.length; ++e) {
                            let i = t[e];
                            switch (i.type) {
                                case "space":
                                    c = !0;
                                case "newline":
                                    f += i.source.length;
                                    break;
                                case "comment":
                                    n && !c && r(i, "MISSING_CHAR", "Comments must be separated from other tokens by white space characters"), f += i.source.length, u = i.source.substring(1);
                                    break;
                                case "error":
                                    r(i, "UNEXPECTED_TOKEN", i.message), f += i.source.length;
                                    break;
                                default:
                                    {
                                        let e = `Unexpected token in block scalar header: ${i.type}`;r(i, "UNEXPECTED_TOKEN", e);
                                        let t = i.source;t && "string" == typeof t && (f += t.length)
                                    }
                            }
                        }
                        return {
                            mode: s,
                            indent: o,
                            chomp: a,
                            comment: u,
                            length: f
                        }
                    }(e, t, n);
                if (!i) return {
                    value: "",
                    type: null,
                    comment: "",
                    range: [r, r, r]
                };
                let s = ">" === i.mode ? K.BLOCK_FOLDED : K.BLOCK_LITERAL,
                    o = e.source ? function(e) {
                        let t = e.split(/\n( *)/),
                            n = t[0],
                            r = n.match(/^( *)/),
                            i = r ? .[1] ? [r[1], n.slice(r[1].length)] : ["", n],
                            s = [i];
                        for (let e = 1; e < t.length; e += 2) s.push([t[e], t[e + 1]]);
                        return s
                    }(e.source) : [],
                    a = o.length;
                for (let e = o.length - 1; e >= 0; --e) {
                    let t = o[e][1];
                    if ("" === t || "\r" === t) a = e;
                    else break
                }
                if (0 === a) {
                    let t = "+" === i.chomp && o.length > 0 ? "\n".repeat(Math.max(1, o.length - 1)) : "",
                        n = r + i.length;
                    return e.source && (n += e.source.length), {
                        value: t,
                        type: s,
                        comment: i.comment,
                        range: [r, n, n]
                    }
                }
                let l = e.indent + i.indent,
                    c = e.offset + i.length,
                    u = 0;
                for (let e = 0; e < a; ++e) {
                    let [t, r] = o[e];
                    if ("" === r || "\r" === r) 0 === i.indent && t.length > l && (l = t.length);
                    else {
                        t.length < l && n(c + t.length, "MISSING_CHAR", "Block scalars with more-indented leading empty lines must use an explicit indentation indicator"), 0 === i.indent && (l = t.length), u = e;
                        break
                    }
                    c += t.length + r.length + 1
                }
                for (let e = o.length - 1; e >= a; --e) o[e][0].length > l && (a = e + 1);
                let f = "",
                    p = "",
                    h = !1;
                for (let e = 0; e < u; ++e) f += o[e][0].slice(l) + "\n";
                for (let e = u; e < a; ++e) {
                    let [t, r] = o[e];
                    c += t.length + r.length + 1;
                    let a = "\r" === r[r.length - 1];
                    if (a && (r = r.slice(0, -1)), r && t.length < l) {
                        let e = i.indent ? "explicit indentation indicator" : "first line",
                            s = `Block scalar lines must not be less indented than their ${e}`;
                        n(c - r.length - (a ? 2 : 1), "BAD_INDENT", s), t = ""
                    }
                    s === K.BLOCK_LITERAL ? (f += p + t.slice(l) + r, p = "\n") : t.length > l || "	" === r[0] ? (" " === p ? p = "\n" : h || "\n" !== p || (p = "\n\n"), f += p + t.slice(l) + r, p = "\n", h = !0) : "" === r ? "\n" === p ? f += "\n" : p = "\n" : (f += p + r, p = " ", h = !1)
                }
                switch (i.chomp) {
                    case "-":
                        break;
                    case "+":
                        for (let e = a; e < o.length; ++e) f += "\n" + o[e][0].slice(l);
                        "\n" !== f[f.length - 1] && (f += "\n");
                        break;
                    default:
                        f += "\n"
                }
                let d = r + i.length + e.source.length;
                return {
                    value: f,
                    type: s,
                    comment: i.comment,
                    range: [r, d, d]
                }
            }

            function tk(e, t, n) {
                let r, i;
                let {
                    offset: s,
                    type: o,
                    source: a,
                    end: l
                } = e, c = (e, t, r) => n(s + e, t, r);
                switch (o) {
                    case "scalar":
                        r = K.PLAIN, i = function(e, t) {
                            let n = "";
                            switch (e[0]) {
                                case "	":
                                    n = "a tab character";
                                    break;
                                case ",":
                                    n = "flow indicator character ,";
                                    break;
                                case "%":
                                    n = "directive indicator character %";
                                    break;
                                case "|":
                                case ">":
                                    n = `block scalar indicator ${e[0]}`;
                                    break;
                                case "@":
                                case "`":
                                    n = `reserved character ${e[0]}`
                            }
                            return n && t(0, "BAD_SCALAR_START", `Plain value cannot start with ${n}`), tE(e)
                        }(a, c);
                        break;
                    case "single-quoted-scalar":
                        r = K.QUOTE_SINGLE, ("'" !== a[a.length - 1] || 1 === a.length) && c(a.length, "MISSING_CHAR", "Missing closing 'quote"), i = tE(a.slice(1, -1)).replace(/''/g, "'");
                        break;
                    case "double-quoted-scalar":
                        r = K.QUOTE_DOUBLE, i = function(e, t) {
                            let n = "";
                            for (let r = 1; r < e.length - 1; ++r) {
                                let i = e[r];
                                if ("\r" !== i || "\n" !== e[r + 1]) {
                                    if ("\n" === i) {
                                        let {
                                            fold: t,
                                            offset: i
                                        } = function(e, t) {
                                            let n = "",
                                                r = e[t + 1];
                                            for (;
                                                (" " === r || "	" === r || "\n" === r || "\r" === r) && ("\r" !== r || "\n" === e[t + 2]);) "\n" === r && (n += "\n"), t += 1, r = e[t + 1];
                                            return n || (n = " "), {
                                                fold: n,
                                                offset: t
                                            }
                                        }(e, r);
                                        n += t, r = i
                                    } else if ("\\" === i) {
                                        let i = e[++r],
                                            s = tS[i];
                                        if (s) n += s;
                                        else if ("\n" === i)
                                            for (i = e[r + 1];
                                                " " === i || "	" === i;) i = e[++r + 1];
                                        else if ("\r" === i && "\n" === e[r + 1])
                                            for (i = e[++r + 1];
                                                " " === i || "	" === i;) i = e[++r + 1];
                                        else if ("x" === i || "u" === i || "U" === i) {
                                            let s = {
                                                x: 2,
                                                u: 4,
                                                U: 8
                                            }[i];
                                            n += function(e, t, n, r) {
                                                let i = e.substr(t, n),
                                                    s = i.length === n && /^[0-9a-fA-F]+$/.test(i),
                                                    o = s ? parseInt(i, 16) : NaN;
                                                if (isNaN(o)) {
                                                    let i = e.substr(t - 2, n + 2);
                                                    return r(t - 2, "BAD_DQ_ESCAPE", `Invalid escape sequence ${i}`), i
                                                }
                                                return String.fromCodePoint(o)
                                            }(e, r + 1, s, t), r += s
                                        } else {
                                            let i = e.substr(r - 1, 2);
                                            t(r - 1, "BAD_DQ_ESCAPE", `Invalid escape sequence ${i}`), n += i
                                        }
                                    } else if (" " === i || "	" === i) {
                                        let t = r,
                                            s = e[r + 1];
                                        for (;
                                            " " === s || "	" === s;) s = e[++r + 1];
                                        "\n" === s || "\r" === s && "\n" === e[r + 2] || (n += r > t ? e.slice(t, r + 1) : i)
                                    } else n += i
                                }
                            }
                            return ('"' !== e[e.length - 1] || 1 === e.length) && t(e.length, "MISSING_CHAR", 'Missing closing "quote'), n
                        }(a, c);
                        break;
                    default:
                        return n(e, "UNEXPECTED_TOKEN", `Expected a flow scalar value, but found: ${o}`), {
                            value: "",
                            type: null,
                            comment: "",
                            range: [s, s + a.length, s + a.length]
                        }
                }
                let u = s + a.length,
                    f = tg(l, u, t, n);
                return {
                    value: i,
                    type: r,
                    comment: f.comment,
                    range: [s, u, f.offset]
                }
            }

            function tE(e) {
                let t, n;
                try {
                    t = RegExp("(.*?)(?<![ 	])[ 	]*\r?\n", "sy"), n = RegExp("[ 	]*(.*?)(?:(?<![ 	])[ 	]*)?\r?\n", "sy")
                } catch (e) {
                    t = /(.*?)[ \t]*\r?\n/sy, n = /[ \t]*(.*?)[ \t]*\r?\n/sy
                }
                let r = t.exec(e);
                if (!r) return e;
                let i = r[1],
                    s = " ",
                    o = t.lastIndex;
                for (n.lastIndex = o; r = n.exec(e);) "" === r[1] ? "\n" === s ? i += s : s = "\n" : (i += s + r[1], s = " "), o = n.lastIndex;
                let a = /[ \t]*(.*)/sy;
                return a.lastIndex = o, r = a.exec(e), i + s + (r ? .[1] ? ? "")
            }
            let tS = {
                0: "\x00",
                a: "\x07",
                b: "\b",
                e: "\x1b",
                f: "\f",
                n: "\n",
                r: "\r",
                t: "	",
                v: "\v",
                N: "\x85",
                _: "\xa0",
                L: "\u2028",
                P: "\u2029",
                " ": " ",
                '"': '"',
                "/": "/",
                "\\": "\\",
                "	": "	"
            };

            function tO(e, t, n, r) {
                let i;
                let {
                    value: s,
                    type: o,
                    comment: a,
                    range: l
                } = "block-scalar" === t.type ? tw(t, e.options.strict, r) : tk(t, e.options.strict, r), u = n ? e.directives.tagName(n.source, e => r(n, "TAG_RESOLVE_FAILED", e)) : null, f = n && u ? function(e, t, n, r, i) {
                    if ("!" === n) return e[c];
                    let s = [];
                    for (let t of e.tags)
                        if (!t.collection && t.tag === n) {
                            if (!t.default || !t.test) return t;
                            s.push(t)
                        }
                    for (let e of s)
                        if (e.test ? .test(t)) return e;
                    let o = e.knownTags[n];
                    return o && !o.collection ? (e.tags.push(Object.assign({}, o, {
                        default: !1,
                        test: void 0
                    })), o) : (i(r, "TAG_RESOLVE_FAILED", `Unresolved tag: ${n}`, "tag:yaml.org,2002:str" !== n), e[c])
                }(e.schema, s, u, n, r) : "scalar" === t.type ? function({
                    directives: e,
                    schema: t
                }, n, r, i) {
                    let s = t.tags.find(e => e.default && e.test ? .test(n)) || t[c];
                    if (t.compat) {
                        let o = t.compat.find(e => e.default && e.test ? .test(n)) ? ? t[c];
                        if (s.tag !== o.tag) {
                            let t = e.tagString(s.tag),
                                n = e.tagString(o.tag),
                                a = `Value may be parsed as either ${t} or ${n}`;
                            i(r, "TAG_RESOLVE_FAILED", a, !0)
                        }
                    }
                    return s
                }(e, s, t, r) : e.schema[c];
                try {
                    let o = f.resolve(s, e => r(n ? ? t, "TAG_RESOLVE_FAILED", e), e.options);
                    i = y(o) ? o : new K(o)
                } catch (o) {
                    let e = o instanceof Error ? o.message : String(o);
                    r(n ? ? t, "TAG_RESOLVE_FAILED", e), i = new K(s)
                }
                return i.range = l, i.source = s, o && (i.type = o), u && (i.tag = u), f.format && (i.format = f.format), a && (i.comment = a), i
            }
            let tA = {
                composeNode: t_,
                composeEmptyNode: tx
            };

            function t_(e, t, n, r) {
                let i;
                let {
                    spaceBefore: s,
                    comment: o,
                    anchor: a,
                    tag: l
                } = n, c = !0;
                switch (t.type) {
                    case "alias":
                        i = function({
                            options: e
                        }, {
                            offset: t,
                            source: n,
                            end: r
                        }, i) {
                            let s = new F(n.substring(1));
                            "" === s.source && i(t, "BAD_ALIAS", "Alias cannot be an empty string"), s.source.endsWith(":") && i(t + n.length - 1, "BAD_ALIAS", "Alias ending in : is ambiguous", !0);
                            let o = t + n.length,
                                a = tg(r, o, e.strict, i);
                            return s.range = [t, o, a.offset], a.comment && (s.comment = a.comment), s
                        }(e, t, r), (a || l) && r(t, "ALIAS_PROPS", "An alias node must not specify any properties");
                        break;
                    case "scalar":
                    case "single-quoted-scalar":
                    case "double-quoted-scalar":
                    case "block-scalar":
                        i = tO(e, t, l, r), a && (i.anchor = a.source.substring(1));
                        break;
                    case "block-map":
                    case "block-seq":
                    case "flow-collection":
                        i = function(e, t, n, r, i) {
                            let s;
                            switch (n.type) {
                                case "block-map":
                                    s = function({
                                        composeNode: e,
                                        composeEmptyNode: t
                                    }, n, r, i) {
                                        let s = new ek(n.schema);
                                        n.atRoot && (n.atRoot = !1);
                                        let o = r.offset,
                                            a = null;
                                        for (let l of r.items) {
                                            let {
                                                start: c,
                                                key: u,
                                                sep: f,
                                                value: p
                                            } = l, h = tp(c, {
                                                indicator: "explicit-key-ind",
                                                next: u ? ? f ? .[0],
                                                offset: o,
                                                onError: i,
                                                startOnNewline: !0
                                            }), d = !h.found;
                                            if (d) {
                                                if (u && ("block-seq" === u.type ? i(o, "BLOCK_AS_IMPLICIT_KEY", "A block sequence may not be used as an implicit map key") : "indent" in u && u.indent !== r.indent && i(o, "BAD_INDENT", ty)), !h.anchor && !h.tag && !f) {
                                                    a = h.end, h.comment && (s.comment ? s.comment += "\n" + h.comment : s.comment = h.comment);
                                                    continue
                                                }(h.hasNewlineAfterProp || th(u)) && i(u ? ? c[c.length - 1], "MULTILINE_IMPLICIT_KEY", "Implicit keys need to be on a single line")
                                            } else h.found ? .indent !== r.indent && i(o, "BAD_INDENT", ty);
                                            let m = h.end,
                                                y = u ? e(n, u, h, i) : t(n, m, c, null, h, i);
                                            n.schema.compat && td(r.indent, u, i), tm(n, s.items, y) && i(m, "DUPLICATE_KEY", "Map keys must be unique");
                                            let g = tp(f ? ? [], {
                                                indicator: "map-value-ind",
                                                next: p,
                                                offset: y.range[2],
                                                onError: i,
                                                startOnNewline: !u || "block-scalar" === u.type
                                            });
                                            if (o = g.end, g.found) {
                                                d && (p ? .type !== "block-map" || g.hasNewline || i(o, "BLOCK_AS_IMPLICIT_KEY", "Nested mappings are not allowed in compact mappings"), n.options.strict && h.start < g.found.offset - 1024 && i(y.range, "KEY_OVER_1024_CHARS", "The : indicator must be at most 1024 chars after the start of an implicit block mapping key"));
                                                let a = p ? e(n, p, g, i) : t(n, o, f, null, g, i);
                                                n.schema.compat && td(r.indent, p, i), o = a.range[2];
                                                let c = new em(y, a);
                                                n.options.keepSourceTokens && (c.srcToken = l), s.items.push(c)
                                            } else {
                                                d && i(y.range, "MISSING_CHAR", "Implicit map keys need to be followed by map values"), g.comment && (y.comment ? y.comment += "\n" + g.comment : y.comment = g.comment);
                                                let e = new em(y);
                                                n.options.keepSourceTokens && (e.srcToken = l), s.items.push(e)
                                            }
                                        }
                                        return a && a < o && i(a, "IMPOSSIBLE", "Map comment with trailing content"), s.range = [r.offset, o, a ? ? o], s
                                    }(e, t, n, i);
                                    break;
                                case "block-seq":
                                    s = function({
                                        composeNode: e,
                                        composeEmptyNode: t
                                    }, n, r, i) {
                                        let s = new eS(n.schema);
                                        n.atRoot && (n.atRoot = !1);
                                        let o = r.offset,
                                            a = null;
                                        for (let {
                                                start: l,
                                                value: c
                                            } of r.items) {
                                            let u = tp(l, {
                                                indicator: "seq-item-ind",
                                                next: c,
                                                offset: o,
                                                onError: i,
                                                startOnNewline: !0
                                            });
                                            if (!u.found) {
                                                if (u.anchor || u.tag || c) c && "block-seq" === c.type ? i(u.end, "BAD_INDENT", "All sequence items must start at the same column") : i(o, "MISSING_CHAR", "Sequence item without - indicator");
                                                else {
                                                    a = u.end, u.comment && (s.comment = u.comment);
                                                    continue
                                                }
                                            }
                                            let f = c ? e(n, c, u, i) : t(n, u.end, l, null, u, i);
                                            n.schema.compat && td(r.indent, c, i), o = f.range[2], s.items.push(f)
                                        }
                                        return s.range = [r.offset, o, a ? ? o], s
                                    }(e, t, n, i);
                                    break;
                                case "flow-collection":
                                    s = function({
                                        composeNode: e,
                                        composeEmptyNode: t
                                    }, n, r, i) {
                                        let s = "{" === r.start.source,
                                            o = s ? "flow map" : "flow sequence",
                                            a = s ? new ek(n.schema) : new eS(n.schema);
                                        a.flow = !0;
                                        let l = n.atRoot;
                                        l && (n.atRoot = !1);
                                        let c = r.offset + r.start.source.length;
                                        for (let l = 0; l < r.items.length; ++l) {
                                            let u = r.items[l],
                                                {
                                                    start: f,
                                                    key: p,
                                                    sep: h,
                                                    value: d
                                                } = u,
                                                y = tp(f, {
                                                    flow: o,
                                                    indicator: "explicit-key-ind",
                                                    next: p ? ? h ? .[0],
                                                    offset: c,
                                                    onError: i,
                                                    startOnNewline: !1
                                                });
                                            if (!y.found) {
                                                if (!y.anchor && !y.tag && !h && !d) {
                                                    0 === l && y.comma ? i(y.comma, "UNEXPECTED_TOKEN", `Unexpected , in ${o}`) : l < r.items.length - 1 && i(y.start, "UNEXPECTED_TOKEN", `Unexpected empty item in ${o}`), y.comment && (a.comment ? a.comment += "\n" + y.comment : a.comment = y.comment), c = y.end;
                                                    continue
                                                }!s && n.options.strict && th(p) && i(p, "MULTILINE_IMPLICIT_KEY", "Implicit keys of flow sequence pairs need to be on a single line")
                                            }
                                            if (0 === l) y.comma && i(y.comma, "UNEXPECTED_TOKEN", `Unexpected , in ${o}`);
                                            else if (y.comma || i(y.start, "MISSING_CHAR", `Missing , between ${o} items`), y.comment) {
                                                let e = "";
                                                e: for (let t of f) switch (t.type) {
                                                    case "comma":
                                                    case "space":
                                                        break;
                                                    case "comment":
                                                        e = t.source.substring(1);
                                                        break e;
                                                    default:
                                                        break e
                                                }
                                                if (e) {
                                                    let t = a.items[a.items.length - 1];
                                                    m(t) && (t = t.value ? ? t.key), t.comment ? t.comment += "\n" + e : t.comment = e, y.comment = y.comment.substring(e.length + 1)
                                                }
                                            }
                                            if (s || h || y.found) {
                                                let r = y.end,
                                                    l = p ? e(n, p, y, i) : t(n, r, f, null, y, i);
                                                tv(p) && i(l.range, "BLOCK_IN_FLOW", tb);
                                                let m = tp(h ? ? [], {
                                                    flow: o,
                                                    indicator: "map-value-ind",
                                                    next: d,
                                                    offset: l.range[2],
                                                    onError: i,
                                                    startOnNewline: !1
                                                });
                                                if (m.found) {
                                                    if (!s && !y.found && n.options.strict) {
                                                        if (h)
                                                            for (let e of h) {
                                                                if (e === m.found) break;
                                                                if ("newline" === e.type) {
                                                                    i(e, "MULTILINE_IMPLICIT_KEY", "Implicit keys of flow sequence pairs need to be on a single line");
                                                                    break
                                                                }
                                                            }
                                                        y.start < m.found.offset - 1024 && i(m.found, "KEY_OVER_1024_CHARS", "The : indicator must be at most 1024 chars after the start of an implicit flow sequence key")
                                                    }
                                                } else d && ("source" in d && d.source && ":" === d.source[0] ? i(d, "MISSING_CHAR", `Missing space after : in ${o}`) : i(m.start, "MISSING_CHAR", `Missing , or : between ${o} items`));
                                                let g = d ? e(n, d, m, i) : m.found ? t(n, m.end, h, null, m, i) : null;
                                                g ? tv(d) && i(g.range, "BLOCK_IN_FLOW", tb) : m.comment && (l.comment ? l.comment += "\n" + m.comment : l.comment = m.comment);
                                                let b = new em(l, g);
                                                if (n.options.keepSourceTokens && (b.srcToken = u), s) tm(n, a.items, l) && i(r, "DUPLICATE_KEY", "Map keys must be unique"), a.items.push(b);
                                                else {
                                                    let e = new ek(n.schema);
                                                    e.flow = !0, e.items.push(b), a.items.push(e)
                                                }
                                                c = g ? g.range[2] : m.end
                                            } else {
                                                let r = d ? e(n, d, y, i) : t(n, y.end, h, null, y, i);
                                                a.items.push(r), c = r.range[2], tv(d) && i(r.range, "BLOCK_IN_FLOW", tb)
                                            }
                                        }
                                        let u = s ? "}" : "]",
                                            [f, ...p] = r.end,
                                            h = c;
                                        if (f && f.source === u) h = f.offset + f.source.length;
                                        else {
                                            let e = o[0].toUpperCase() + o.substring(1),
                                                t = l ? `${e} must end with a ${u}` : `${e} in block collection must be sufficiently indented and end with a ${u}`;
                                            i(c, l ? "MISSING_CHAR" : "BAD_INDENT", t), f && 1 !== f.source.length && p.unshift(f)
                                        }
                                        if (p.length > 0) {
                                            let e = tg(p, h, n.options.strict, i);
                                            e.comment && (a.comment ? a.comment += "\n" + e.comment : a.comment = e.comment), a.range = [r.offset, h, e.offset]
                                        } else a.range = [r.offset, h, h];
                                        return a
                                    }(e, t, n, i)
                            }
                            if (!r) return s;
                            let o = t.directives.tagName(r.source, e => i(r, "TAG_RESOLVE_FAILED", e));
                            if (!o) return s;
                            let a = s.constructor;
                            if ("!" === o || o === a.tagName) return s.tag = a.tagName, s;
                            let l = d(s) ? "map" : "seq",
                                c = t.schema.tags.find(e => e.collection === l && e.tag === o);
                            if (!c) {
                                let e = t.schema.knownTags[o];
                                if (!e || e.collection !== l) return i(r, "TAG_RESOLVE_FAILED", `Unresolved tag: ${o}`, !0), s.tag = o, s;
                                t.schema.tags.push(Object.assign({}, e, {
                                    default: !1
                                })), c = e
                            }
                            let u = c.resolve(s, e => i(r, "TAG_RESOLVE_FAILED", e), t.options),
                                f = v(u) ? u : new K(u);
                            return f.range = s.range, f.tag = o, c ? .format && (f.format = c.format), f
                        }(tA, e, t, l, r), a && (i.anchor = a.source.substring(1));
                        break;
                    default:
                        {
                            let s = "error" === t.type ? t.message : `Unsupported token (type: ${t.type})`;r(t, "UNEXPECTED_TOKEN", s),
                            i = tx(e, t.offset, void 0, null, n, r),
                            c = !1
                        }
                }
                return a && "" === i.anchor && r(a, "BAD_ALIAS", "Anchor cannot be an empty string"), s && (i.spaceBefore = !0), o && ("scalar" === t.type && "" === t.source ? i.comment = o : i.commentBefore = o), e.options.keepSourceTokens && c && (i.srcToken = t), i
            }

            function tx(e, t, n, r, {
                spaceBefore: i,
                comment: s,
                anchor: o,
                tag: a,
                end: l
            }, c) {
                let u = {
                        type: "scalar",
                        offset: function(e, t, n) {
                            if (t) {
                                null === n && (n = t.length);
                                for (let r = n - 1; r >= 0; --r) {
                                    let n = t[r];
                                    switch (n.type) {
                                        case "space":
                                        case "comment":
                                        case "newline":
                                            e -= n.source.length;
                                            continue
                                    }
                                    for (n = t[++r]; n ? .type === "space";) e += n.source.length, n = t[++r];
                                    break
                                }
                            }
                            return e
                        }(t, n, r),
                        indent: -1,
                        source: ""
                    },
                    f = tO(e, u, a, c);
                return o && (f.anchor = o.source.substring(1), "" === f.anchor && c(o, "BAD_ALIAS", "Anchor cannot be an empty string")), i && (f.spaceBefore = !0), s && (f.comment = s, f.range[2] = l), f
            }

            function tN(e) {
                if ("number" == typeof e) return [e, e + 1];
                if (Array.isArray(e)) return 2 === e.length ? e : [e[0], e[1]];
                let {
                    offset: t,
                    source: n
                } = e;
                return [t, t + ("string" == typeof n ? n.length : 1)]
            }

            function tT(e) {
                let t = "",
                    n = !1,
                    r = !1;
                for (let i = 0; i < e.length; ++i) {
                    let s = e[i];
                    switch (s[0]) {
                        case "#":
                            t += ("" === t ? "" : r ? "\n\n" : "\n") + (s.substring(1) || " "), n = !0, r = !1;
                            break;
                        case "%":
                            e[i + 1] ? .[0] !== "#" && (i += 1), n = !1;
                            break;
                        default:
                            n || (r = !0), n = !1
                    }
                }
                return {
                    comment: t,
                    afterEmptyLine: r
                }
            }
            class tI {
                constructor(e = {}) {
                    this.doc = null, this.atDirectives = !1, this.prelude = [], this.errors = [], this.warnings = [], this.onError = (e, t, n, r) => {
                        let i = tN(e);
                        r ? this.warnings.push(new tu(i, t, n)) : this.errors.push(new tc(i, t, n))
                    }, this.directives = new P({
                        version: e.version || "1.2"
                    }), this.options = e
                }
                decorate(e, t) {
                    let {
                        comment: n,
                        afterEmptyLine: r
                    } = tT(this.prelude);
                    if (n) {
                        let i = e.contents;
                        if (t) e.comment = e.comment ? `${e.comment}
${n}` : n;
                        else if (r || e.directives.docStart || !i) e.commentBefore = n;
                        else if (b(i) && !i.flow && i.items.length > 0) {
                            let e = i.items[0];
                            m(e) && (e = e.key);
                            let t = e.commentBefore;
                            e.commentBefore = t ? `${n}
${t}` : n
                        } else {
                            let e = i.commentBefore;
                            i.commentBefore = e ? `${n}
${e}` : n
                        }
                    }
                    t ? (Array.prototype.push.apply(e.errors, this.errors), Array.prototype.push.apply(e.warnings, this.warnings)) : (e.errors = this.errors, e.warnings = this.warnings), this.prelude = [], this.errors = [], this.warnings = []
                }
                streamInfo() {
                    return {
                        comment: tT(this.prelude).comment,
                        directives: this.directives,
                        errors: this.errors,
                        warnings: this.warnings
                    }
                }* compose(e, t = !1, n = -1) {
                    for (let t of e) yield* this.next(t);
                    yield* this.end(t, n)
                }* next(e) {
                    switch (e.type) {
                        case "directive":
                            this.directives.add(e.source, (t, n, r) => {
                                let i = tN(e);
                                i[0] += t, this.onError(i, "BAD_DIRECTIVE", n, r)
                            }), this.prelude.push(e.source), this.atDirectives = !0;
                            break;
                        case "document":
                            {
                                let t = function(e, t, {
                                    offset: n,
                                    start: r,
                                    value: i,
                                    end: s
                                }, o) {
                                    let a = Object.assign({
                                            _directives: t
                                        }, e),
                                        l = new to(void 0, a),
                                        c = {
                                            atRoot: !0,
                                            directives: l.directives,
                                            options: l.options,
                                            schema: l.schema
                                        },
                                        u = tp(r, {
                                            indicator: "doc-start",
                                            next: i ? ? s ? .[0],
                                            offset: n,
                                            onError: o,
                                            startOnNewline: !0
                                        });
                                    u.found && (l.directives.docStart = !0, i && ("block-map" === i.type || "block-seq" === i.type) && !u.hasNewline && o(u.end, "MISSING_CHAR", "Block collection cannot start on same line with directives-end marker")), l.contents = i ? t_(c, i, u, o) : tx(c, u.end, r, null, u, o);
                                    let f = l.contents.range[2],
                                        p = tg(s, f, !1, o);
                                    return p.comment && (l.comment = p.comment), l.range = [n, f, p.offset], l
                                }(this.options, this.directives, e, this.onError);this.atDirectives && !t.directives.docStart && this.onError(e, "MISSING_CHAR", "Missing directives-end/doc-start indicator line"),
                                this.decorate(t, !1),
                                this.doc && (yield this.doc),
                                this.doc = t,
                                this.atDirectives = !1;
                                break
                            }
                        case "byte-order-mark":
                        case "space":
                            break;
                        case "comment":
                        case "newline":
                            this.prelude.push(e.source);
                            break;
                        case "error":
                            {
                                let t = e.source ? `${e.message}: ${JSON.stringify(e.source)}` : e.message,
                                    n = new tc(tN(e), "UNEXPECTED_TOKEN", t);this.atDirectives || !this.doc ? this.errors.push(n) : this.doc.errors.push(n);
                                break
                            }
                        case "doc-end":
                            {
                                if (!this.doc) {
                                    this.errors.push(new tc(tN(e), "UNEXPECTED_TOKEN", "Unexpected doc-end without preceding document"));
                                    break
                                }
                                this.doc.directives.docEnd = !0;
                                let t = tg(e.end, e.offset + e.source.length, this.doc.options.strict, this.onError);
                                if (this.decorate(this.doc, !0), t.comment) {
                                    let e = this.doc.comment;
                                    this.doc.comment = e ? `${e}
${t.comment}` : t.comment
                                }
                                this.doc.range[2] = t.offset;
                                break
                            }
                        default:
                            this.errors.push(new tc(tN(e), "UNEXPECTED_TOKEN", `Unsupported token ${e.type}`))
                    }
                }* end(e = !1, t = -1) {
                    if (this.doc) this.decorate(this.doc, !0), yield this.doc, this.doc = null;
                    else if (e) {
                        let e = Object.assign({
                                _directives: this.directives
                            }, this.options),
                            n = new to(void 0, e);
                        this.atDirectives && this.onError(t, "MISSING_CHAR", "Missing directives-end indicator line"), n.range = [0, t, t], this.decorate(n, !1), yield n
                    }
                }
            }

            function tC(e, t = !0, n) {
                if (e) {
                    let r = (e, t, r) => {
                        let i = "number" == typeof e ? e : Array.isArray(e) ? e[0] : e.offset;
                        if (n) n(i, t, r);
                        else throw new tc([i, i + 1], t, r)
                    };
                    switch (e.type) {
                        case "scalar":
                        case "single-quoted-scalar":
                        case "double-quoted-scalar":
                            return tk(e, t, r);
                        case "block-scalar":
                            return tw(e, t, r)
                    }
                }
                return null
            }

            function tj(e, t) {
                let {
                    implicitKey: n = !1,
                    indent: r,
                    inFlow: i = !1,
                    offset: s = -1,
                    type: o = "PLAIN"
                } = t, a = eo({
                    type: o,
                    value: e
                }, {
                    implicitKey: n,
                    indent: r > 0 ? " ".repeat(r) : "",
                    inFlow: i,
                    options: {
                        blockQuote: !0,
                        lineWidth: -1
                    }
                }), l = t.end ? ? [{
                    type: "newline",
                    offset: -1,
                    indent: r,
                    source: "\n"
                }];
                switch (a[0]) {
                    case "|":
                    case ">":
                        {
                            let e = a.indexOf("\n"),
                                t = a.substring(0, e),
                                n = a.substring(e + 1) + "\n",
                                i = [{
                                    type: "block-scalar-header",
                                    offset: s,
                                    indent: r,
                                    source: t
                                }];
                            return tP(i, l) || i.push({
                                type: "newline",
                                offset: -1,
                                indent: r,
                                source: "\n"
                            }),
                            {
                                type: "block-scalar",
                                offset: s,
                                indent: r,
                                props: i,
                                source: n
                            }
                        }
                    case '"':
                        return {
                            type: "double-quoted-scalar",
                            offset: s,
                            indent: r,
                            source: a,
                            end: l
                        };
                    case "'":
                        return {
                            type: "single-quoted-scalar",
                            offset: s,
                            indent: r,
                            source: a,
                            end: l
                        };
                    default:
                        return {
                            type: "scalar",
                            offset: s,
                            indent: r,
                            source: a,
                            end: l
                        }
                }
            }

            function tD(e, t, n = {}) {
                let {
                    afterKey: r = !1,
                    implicitKey: i = !1,
                    inFlow: s = !1,
                    type: o
                } = n, a = "indent" in e ? e.indent : null;
                if (r && "number" == typeof a && (a += 2), !o) switch (e.type) {
                    case "single-quoted-scalar":
                        o = "QUOTE_SINGLE";
                        break;
                    case "double-quoted-scalar":
                        o = "QUOTE_DOUBLE";
                        break;
                    case "block-scalar":
                        {
                            let t = e.props[0];
                            if ("block-scalar-header" !== t.type) throw Error("Invalid block scalar header");o = ">" === t.source[0] ? "BLOCK_FOLDED" : "BLOCK_LITERAL";
                            break
                        }
                    default:
                        o = "PLAIN"
                }
                let l = eo({
                    type: o,
                    value: t
                }, {
                    implicitKey: i || null === a,
                    indent: null !== a && a > 0 ? " ".repeat(a) : "",
                    inFlow: s,
                    options: {
                        blockQuote: !0,
                        lineWidth: -1
                    }
                });
                switch (l[0]) {
                    case "|":
                    case ">":
                        ! function(e, t) {
                            let n = t.indexOf("\n"),
                                r = t.substring(0, n),
                                i = t.substring(n + 1) + "\n";
                            if ("block-scalar" === e.type) {
                                let t = e.props[0];
                                if ("block-scalar-header" !== t.type) throw Error("Invalid block scalar header");
                                t.source = r, e.source = i
                            } else {
                                let {
                                    offset: t
                                } = e, n = "indent" in e ? e.indent : -1, s = [{
                                    type: "block-scalar-header",
                                    offset: t,
                                    indent: n,
                                    source: r
                                }];
                                for (let t of (tP(s, "end" in e ? e.end : void 0) || s.push({
                                        type: "newline",
                                        offset: -1,
                                        indent: n,
                                        source: "\n"
                                    }), Object.keys(e))) "type" !== t && "offset" !== t && delete e[t];
                                Object.assign(e, {
                                    type: "block-scalar",
                                    indent: n,
                                    props: s,
                                    source: i
                                })
                            }
                        }(e, l);
                        break;
                    case '"':
                        tL(e, l, "double-quoted-scalar");
                        break;
                    case "'":
                        tL(e, l, "single-quoted-scalar");
                        break;
                    default:
                        tL(e, l, "scalar")
                }
            }

            function tP(e, t) {
                if (t)
                    for (let n of t) switch (n.type) {
                        case "space":
                        case "comment":
                            e.push(n);
                            break;
                        case "newline":
                            return e.push(n), !0
                    }
                return !1
            }

            function tL(e, t, n) {
                switch (e.type) {
                    case "scalar":
                    case "double-quoted-scalar":
                    case "single-quoted-scalar":
                        e.type = n, e.source = t;
                        break;
                    case "block-scalar":
                        {
                            let r = e.props.slice(1),
                                i = t.length;
                            for (let t of ("block-scalar-header" === e.props[0].type && (i -= e.props[0].source.length), r)) t.offset += i;delete e.props,
                            Object.assign(e, {
                                type: n,
                                source: t,
                                end: r
                            });
                            break
                        }
                    case "block-map":
                    case "block-seq":
                        {
                            let r = e.offset + t.length,
                                i = {
                                    type: "newline",
                                    offset: r,
                                    indent: e.indent,
                                    source: "\n"
                                };delete e.items,
                            Object.assign(e, {
                                type: n,
                                source: t,
                                end: [i]
                            });
                            break
                        }
                    default:
                        {
                            let r = "indent" in e ? e.indent : -1,
                                i = "end" in e && Array.isArray(e.end) ? e.end.filter(e => "space" === e.type || "comment" === e.type || "newline" === e.type) : [];
                            for (let t of Object.keys(e)) "type" !== t && "offset" !== t && delete e[t];Object.assign(e, {
                                type: n,
                                indent: r,
                                source: t,
                                end: i
                            })
                        }
                }
            }
            let t$ = e => "type" in e ? tM(e) : tF(e);

            function tM(e) {
                switch (e.type) {
                    case "block-scalar":
                        {
                            let t = "";
                            for (let n of e.props) t += tM(n);
                            return t + e.source
                        }
                    case "block-map":
                    case "block-seq":
                        {
                            let t = "";
                            for (let n of e.items) t += tF(n);
                            return t
                        }
                    case "flow-collection":
                        {
                            let t = e.start.source;
                            for (let n of e.items) t += tF(n);
                            for (let n of e.end) t += n.source;
                            return t
                        }
                    case "document":
                        {
                            let t = tF(e);
                            if (e.end)
                                for (let n of e.end) t += n.source;
                            return t
                        }
                    default:
                        {
                            let t = e.source;
                            if ("end" in e && e.end)
                                for (let n of e.end) t += n.source;
                            return t
                        }
                }
            }

            function tF({
                start: e,
                key: t,
                sep: n,
                value: r
            }) {
                let i = "";
                for (let t of e) i += t.source;
                if (t && (i += tM(t)), n)
                    for (let e of n) i += e.source;
                return r && (i += tM(r)), i
            }
            let tR = Symbol("break visit"),
                tB = Symbol("skip children"),
                tK = Symbol("remove item");

            function tq(e, t) {
                "type" in e && "document" === e.type && (e = {
                        start: e.start,
                        value: e.value
                    }),
                    function e(t, n, r) {
                        let i = r(n, t);
                        if ("symbol" == typeof i) return i;
                        for (let s of ["key", "value"]) {
                            let o = n[s];
                            if (o && "items" in o) {
                                for (let n = 0; n < o.items.length; ++n) {
                                    let i = e(Object.freeze(t.concat([
                                        [s, n]
                                    ])), o.items[n], r);
                                    if ("number" == typeof i) n = i - 1;
                                    else {
                                        if (i === tR) return tR;
                                        i === tK && (o.items.splice(n, 1), n -= 1)
                                    }
                                }
                                "function" == typeof i && "key" === s && (i = i(n, t))
                            }
                        }
                        return "function" == typeof i ? i(n, t) : i
                    }(Object.freeze([]), e, t)
            }
            tq.BREAK = tR, tq.SKIP = tB, tq.REMOVE = tK, tq.itemAtPath = (e, t) => {
                let n = e;
                for (let [e, r] of t) {
                    let t = n ? .[e];
                    if (!t || !("items" in t)) return;
                    n = t.items[r]
                }
                return n
            }, tq.parentCollection = (e, t) => {
                let n = tq.itemAtPath(e, t.slice(0, -1)),
                    r = t[t.length - 1][0],
                    i = n ? .[r];
                if (i && "items" in i) return i;
                throw Error("Parent collection not found")
            };
            let tU = "\uFEFF",
                tz = "\x02",
                tV = "\x18",
                tW = "\x1f",
                tJ = e => !!e && "items" in e,
                tY = e => !!e && ("scalar" === e.type || "single-quoted-scalar" === e.type || "double-quoted-scalar" === e.type || "block-scalar" === e.type);

            function tG(e) {
                switch (e) {
                    case tU:
                        return "<BOM>";
                    case tz:
                        return "<DOC>";
                    case tV:
                        return "<FLOW_END>";
                    case tW:
                        return "<SCALAR>";
                    default:
                        return JSON.stringify(e)
                }
            }

            function tH(e) {
                switch (e) {
                    case tU:
                        return "byte-order-mark";
                    case tz:
                        return "doc-mode";
                    case tV:
                        return "flow-error-end";
                    case tW:
                        return "scalar";
                    case "---":
                        return "doc-start";
                    case "...":
                        return "doc-end";
                    case "":
                    case "\n":
                    case "\r\n":
                        return "newline";
                    case "-":
                        return "seq-item-ind";
                    case "?":
                        return "explicit-key-ind";
                    case ":":
                        return "map-value-ind";
                    case "{":
                        return "flow-map-start";
                    case "}":
                        return "flow-map-end";
                    case "[":
                        return "flow-seq-start";
                    case "]":
                        return "flow-seq-end";
                    case ",":
                        return "comma"
                }
                switch (e[0]) {
                    case " ":
                    case "	":
                        return "space";
                    case "#":
                        return "comment";
                    case "%":
                        return "directive-line";
                    case "*":
                        return "alias";
                    case "&":
                        return "anchor";
                    case "!":
                        return "tag";
                    case "'":
                        return "single-quoted-scalar";
                    case '"':
                        return "double-quoted-scalar";
                    case "|":
                    case ">":
                        return "block-scalar-header"
                }
                return null
            }

            function tZ(e) {
                switch (e) {
                    case void 0:
                    case " ":
                    case "\n":
                    case "\r":
                    case "	":
                        return !0;
                    default:
                        return !1
                }
            }
            let tQ = "0123456789ABCDEFabcdef".split(""),
                tX = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-#;/?:@&=+$_.!~*'()".split(""),
                t0 = ",[]{}".split(""),
                t1 = " ,[]{}\n\r	".split(""),
                t2 = e => !e || t1.includes(e);
            class t5 {
                constructor() {
                    this.atEnd = !1, this.blockScalarIndent = -1, this.blockScalarKeep = !1, this.buffer = "", this.flowKey = !1, this.flowLevel = 0, this.indentNext = 0, this.indentValue = 0, this.lineEndPos = null, this.next = null, this.pos = 0
                }* lex(e, t = !1) {
                    e && (this.buffer = this.buffer ? this.buffer + e : e, this.lineEndPos = null), this.atEnd = !t;
                    let n = this.next ? ? "stream";
                    for (; n && (t || this.hasChars(1));) n = yield* this.parseNext(n)
                }
                atLineEnd() {
                    let e = this.pos,
                        t = this.buffer[e];
                    for (;
                        " " === t || "	" === t;) t = this.buffer[++e];
                    return !t || "#" === t || "\n" === t || "\r" === t && "\n" === this.buffer[e + 1]
                }
                charAt(e) {
                    return this.buffer[this.pos + e]
                }
                continueScalar(e) {
                    let t = this.buffer[e];
                    if (this.indentNext > 0) {
                        let n = 0;
                        for (;
                            " " === t;) t = this.buffer[++n + e];
                        if ("\r" === t) {
                            let t = this.buffer[n + e + 1];
                            if ("\n" === t || !t && !this.atEnd) return e + n + 1
                        }
                        return "\n" !== t && !(n >= this.indentNext) && (t || this.atEnd) ? -1 : e + n
                    }
                    if ("-" === t || "." === t) {
                        let t = this.buffer.substr(e, 3);
                        if (("---" === t || "..." === t) && tZ(this.buffer[e + 3])) return -1
                    }
                    return e
                }
                getLine() {
                    let e = this.lineEndPos;
                    return (("number" != typeof e || -1 !== e && e < this.pos) && (e = this.buffer.indexOf("\n", this.pos), this.lineEndPos = e), -1 === e) ? this.atEnd ? this.buffer.substring(this.pos) : null : ("\r" === this.buffer[e - 1] && (e -= 1), this.buffer.substring(this.pos, e))
                }
                hasChars(e) {
                    return this.pos + e <= this.buffer.length
                }
                setNext(e) {
                    return this.buffer = this.buffer.substring(this.pos), this.pos = 0, this.lineEndPos = null, this.next = e, null
                }
                peek(e) {
                    return this.buffer.substr(this.pos, e)
                }* parseNext(e) {
                    switch (e) {
                        case "stream":
                            return yield* this.parseStream();
                        case "line-start":
                            return yield* this.parseLineStart();
                        case "block-start":
                            return yield* this.parseBlockStart();
                        case "doc":
                            return yield* this.parseDocument();
                        case "flow":
                            return yield* this.parseFlowCollection();
                        case "quoted-scalar":
                            return yield* this.parseQuotedScalar();
                        case "block-scalar":
                            return yield* this.parseBlockScalar();
                        case "plain-scalar":
                            return yield* this.parsePlainScalar()
                    }
                }* parseStream() {
                    let e = this.getLine();
                    if (null === e) return this.setNext("stream");
                    if (e[0] === tU && (yield* this.pushCount(1), e = e.substring(1)), "%" === e[0]) {
                        let t = e.length,
                            n = e.indexOf("#");
                        if (-1 !== n) {
                            let r = e[n - 1];
                            (" " === r || "	" === r) && (t = n - 1)
                        }
                        for (;;) {
                            let n = e[t - 1];
                            if (" " === n || "	" === n) t -= 1;
                            else break
                        }
                        let r = (yield* this.pushCount(t)) + (yield* this.pushSpaces(!0));
                        return yield* this.pushCount(e.length - r), this.pushNewline(), "stream"
                    }
                    if (this.atLineEnd()) {
                        let t = yield* this.pushSpaces(!0);
                        return yield* this.pushCount(e.length - t), yield* this.pushNewline(), "stream"
                    }
                    return yield tz, yield* this.parseLineStart()
                }* parseLineStart() {
                    let e = this.charAt(0);
                    if (!e && !this.atEnd) return this.setNext("line-start");
                    if ("-" === e || "." === e) {
                        if (!this.atEnd && !this.hasChars(4)) return this.setNext("line-start");
                        let e = this.peek(3);
                        if ("---" === e && tZ(this.charAt(3))) return yield* this.pushCount(3), this.indentValue = 0, this.indentNext = 0, "doc";
                        if ("..." === e && tZ(this.charAt(3))) return yield* this.pushCount(3), "stream"
                    }
                    return this.indentValue = yield* this.pushSpaces(!1), this.indentNext > this.indentValue && !tZ(this.charAt(1)) && (this.indentNext = this.indentValue), yield* this.parseBlockStart()
                }* parseBlockStart() {
                    let [e, t] = this.peek(2);
                    if (!t && !this.atEnd) return this.setNext("block-start");
                    if (("-" === e || "?" === e || ":" === e) && tZ(t)) {
                        let e = (yield* this.pushCount(1)) + (yield* this.pushSpaces(!0));
                        return this.indentNext = this.indentValue + 1, this.indentValue += e, yield* this.parseBlockStart()
                    }
                    return "doc"
                }* parseDocument() {
                    yield* this.pushSpaces(!0);
                    let e = this.getLine();
                    if (null === e) return this.setNext("doc");
                    let t = yield* this.pushIndicators();
                    switch (e[t]) {
                        case "#":
                            yield* this.pushCount(e.length - t);
                        case void 0:
                            return yield* this.pushNewline(), yield* this.parseLineStart();
                        case "{":
                        case "[":
                            return yield* this.pushCount(1), this.flowKey = !1, this.flowLevel = 1, "flow";
                        case "}":
                        case "]":
                            return yield* this.pushCount(1), "doc";
                        case "*":
                            return yield* this.pushUntil(t2), "doc";
                        case '"':
                        case "'":
                            return yield* this.parseQuotedScalar();
                        case "|":
                        case ">":
                            return t += (yield* this.parseBlockScalarHeader()) + (yield* this.pushSpaces(!0)), yield* this.pushCount(e.length - t), yield* this.pushNewline(), yield* this.parseBlockScalar();
                        default:
                            return yield* this.parsePlainScalar()
                    }
                }* parseFlowCollection() {
                    let e, t;
                    let n = -1;
                    do(e = yield* this.pushNewline()) > 0 ? (t = yield* this.pushSpaces(!1), this.indentValue = n = t) : t = 0, t += yield* this.pushSpaces(!0); while (e + t > 0);
                    let r = this.getLine();
                    if (null === r) return this.setNext("flow");
                    if (-1 !== n && n < this.indentNext && "#" !== r[0] || 0 === n && (r.startsWith("---") || r.startsWith("...")) && tZ(r[3])) {
                        let e = n === this.indentNext - 1 && 1 === this.flowLevel && ("]" === r[0] || "}" === r[0]);
                        if (!e) return this.flowLevel = 0, yield tV, yield* this.parseLineStart()
                    }
                    let i = 0;
                    for (;
                        "," === r[i];) i += (yield* this.pushCount(1)) + (yield* this.pushSpaces(!0)), this.flowKey = !1;
                    switch (r[i += yield* this.pushIndicators()]) {
                        case void 0:
                            return "flow";
                        case "#":
                            return yield* this.pushCount(r.length - i), "flow";
                        case "{":
                        case "[":
                            return yield* this.pushCount(1), this.flowKey = !1, this.flowLevel += 1, "flow";
                        case "}":
                        case "]":
                            return yield* this.pushCount(1), this.flowKey = !0, this.flowLevel -= 1, this.flowLevel ? "flow" : "doc";
                        case "*":
                            return yield* this.pushUntil(t2), "flow";
                        case '"':
                        case "'":
                            return this.flowKey = !0, yield* this.parseQuotedScalar();
                        case ":":
                            {
                                let e = this.charAt(1);
                                if (this.flowKey || tZ(e) || "," === e) return this.flowKey = !1, yield* this.pushCount(1), yield* this.pushSpaces(!0), "flow"
                            }
                        default:
                            return this.flowKey = !1, yield* this.parsePlainScalar()
                    }
                }* parseQuotedScalar() {
                    let e = this.charAt(0),
                        t = this.buffer.indexOf(e, this.pos + 1);
                    if ("'" === e)
                        for (; - 1 !== t && "'" === this.buffer[t + 1];) t = this.buffer.indexOf("'", t + 2);
                    else
                        for (; - 1 !== t;) {
                            let e = 0;
                            for (;
                                "\\" === this.buffer[t - 1 - e];) e += 1;
                            if (e % 2 == 0) break;
                            t = this.buffer.indexOf('"', t + 1)
                        }
                    let n = this.buffer.substring(0, t),
                        r = n.indexOf("\n", this.pos);
                    if (-1 !== r) {
                        for (; - 1 !== r;) {
                            let e = this.continueScalar(r + 1);
                            if (-1 === e) break;
                            r = n.indexOf("\n", e)
                        } - 1 !== r && (t = r - ("\r" === n[r - 1] ? 2 : 1))
                    }
                    if (-1 === t) {
                        if (!this.atEnd) return this.setNext("quoted-scalar");
                        t = this.buffer.length
                    }
                    return yield* this.pushToIndex(t + 1, !1), this.flowLevel ? "flow" : "doc"
                }* parseBlockScalarHeader() {
                    this.blockScalarIndent = -1, this.blockScalarKeep = !1;
                    let e = this.pos;
                    for (;;) {
                        let t = this.buffer[++e];
                        if ("+" === t) this.blockScalarKeep = !0;
                        else if (t > "0" && t <= "9") this.blockScalarIndent = Number(t) - 1;
                        else if ("-" !== t) break
                    }
                    return yield* this.pushUntil(e => tZ(e) || "#" === e)
                }* parseBlockScalar() {
                    let e, t = this.pos - 1,
                        n = 0;
                    e: for (let r = this.pos; e = this.buffer[r]; ++r) switch (e) {
                        case " ":
                            n += 1;
                            break;
                        case "\n":
                            t = r, n = 0;
                            break;
                        case "\r":
                            {
                                let e = this.buffer[r + 1];
                                if (!e && !this.atEnd) return this.setNext("block-scalar");
                                if ("\n" === e) break
                            }
                        default:
                            break e
                    }
                    if (!e && !this.atEnd) return this.setNext("block-scalar");
                    if (n >= this.indentNext) {
                        -1 === this.blockScalarIndent ? this.indentNext = n : this.indentNext += this.blockScalarIndent;
                        do {
                            let e = this.continueScalar(t + 1);
                            if (-1 === e) break;
                            t = this.buffer.indexOf("\n", e)
                        } while (-1 !== t);
                        if (-1 === t) {
                            if (!this.atEnd) return this.setNext("block-scalar");
                            t = this.buffer.length
                        }
                    }
                    if (!this.blockScalarKeep)
                        for (;;) {
                            let e = t - 1,
                                r = this.buffer[e];
                            "\r" === r && (r = this.buffer[--e]);
                            let i = e;
                            for (;
                                " " === r || "	" === r;) r = this.buffer[--e];
                            if ("\n" === r && e >= this.pos && e + 1 + n > i) t = e;
                            else break
                        }
                    return yield tW, yield* this.pushToIndex(t + 1, !0), yield* this.parseLineStart()
                }* parsePlainScalar() {
                    let e;
                    let t = this.flowLevel > 0,
                        n = this.pos - 1,
                        r = this.pos - 1;
                    for (; e = this.buffer[++r];)
                        if (":" === e) {
                            let e = this.buffer[r + 1];
                            if (tZ(e) || t && "," === e) break;
                            n = r
                        } else if (tZ(e)) {
                        let i = this.buffer[r + 1];
                        if ("\r" === e && ("\n" === i ? (r += 1, e = "\n", i = this.buffer[r + 1]) : n = r), "#" === i || t && t0.includes(i)) break;
                        if ("\n" === e) {
                            let e = this.continueScalar(r + 1);
                            if (-1 === e) break;
                            r = Math.max(r, e - 2)
                        }
                    } else {
                        if (t && t0.includes(e)) break;
                        n = r
                    }
                    return e || this.atEnd ? (yield tW, yield* this.pushToIndex(n + 1, !0), t ? "flow" : "doc") : this.setNext("plain-scalar")
                }* pushCount(e) {
                    return e > 0 ? (yield this.buffer.substr(this.pos, e), this.pos += e, e) : 0
                }* pushToIndex(e, t) {
                    let n = this.buffer.slice(this.pos, e);
                    return n ? (yield n, this.pos += n.length, n.length) : (t && (yield ""), 0)
                }* pushIndicators() {
                    switch (this.charAt(0)) {
                        case "!":
                            return (yield* this.pushTag()) + (yield* this.pushSpaces(!0)) + (yield* this.pushIndicators());
                        case "&":
                            return (yield* this.pushUntil(t2)) + (yield* this.pushSpaces(!0)) + (yield* this.pushIndicators());
                        case "-":
                        case "?":
                        case ":":
                            {
                                let e = this.flowLevel > 0,
                                    t = this.charAt(1);
                                if (tZ(t) || e && t0.includes(t)) return e ? this.flowKey && (this.flowKey = !1) : this.indentNext = this.indentValue + 1, (yield* this.pushCount(1)) + (yield* this.pushSpaces(!0)) + (yield* this.pushIndicators())
                            }
                    }
                    return 0
                }* pushTag() {
                    if ("<" === this.charAt(1)) {
                        let e = this.pos + 2,
                            t = this.buffer[e];
                        for (; !tZ(t) && ">" !== t;) t = this.buffer[++e];
                        return yield* this.pushToIndex(">" === t ? e + 1 : e, !1)
                    } {
                        let e = this.pos + 1,
                            t = this.buffer[e];
                        for (; t;)
                            if (tX.includes(t)) t = this.buffer[++e];
                            else if ("%" === t && tQ.includes(this.buffer[e + 1]) && tQ.includes(this.buffer[e + 2])) t = this.buffer[e += 3];
                        else break;
                        return yield* this.pushToIndex(e, !1)
                    }
                }* pushNewline() {
                    let e = this.buffer[this.pos];
                    return "\n" === e ? yield* this.pushCount(1): "\r" === e && "\n" === this.charAt(1) ? yield* this.pushCount(2): 0
                }* pushSpaces(e) {
                    let t, n = this.pos - 1;
                    do t = this.buffer[++n]; while (" " === t || e && "	" === t);
                    let r = n - this.pos;
                    return r > 0 && (yield this.buffer.substr(this.pos, r), this.pos = n), r
                }* pushUntil(e) {
                    let t = this.pos,
                        n = this.buffer[t];
                    for (; !e(n);) n = this.buffer[++t];
                    return yield* this.pushToIndex(t, !1)
                }
            }
            class t3 {
                constructor() {
                    this.lineStarts = [], this.addNewLine = e => this.lineStarts.push(e), this.linePos = e => {
                        let t = 0,
                            n = this.lineStarts.length;
                        for (; t < n;) {
                            let r = t + n >> 1;
                            this.lineStarts[r] < e ? t = r + 1 : n = r
                        }
                        if (this.lineStarts[t] === e) return {
                            line: t + 1,
                            col: 1
                        };
                        if (0 === t) return {
                            line: 0,
                            col: e
                        };
                        let r = this.lineStarts[t - 1];
                        return {
                            line: t,
                            col: e - r + 1
                        }
                    }
                }
            }

            function t7(e, t) {
                for (let n = 0; n < e.length; ++n)
                    if (e[n].type === t) return !0;
                return !1
            }

            function t8(e) {
                for (let t = 0; t < e.length; ++t) switch (e[t].type) {
                    case "space":
                    case "comment":
                    case "newline":
                        break;
                    default:
                        return t
                }
                return -1
            }

            function t9(e) {
                switch (e ? .type) {
                    case "alias":
                    case "scalar":
                    case "single-quoted-scalar":
                    case "double-quoted-scalar":
                    case "flow-collection":
                        return !0;
                    default:
                        return !1
                }
            }

            function t4(e) {
                switch (e.type) {
                    case "document":
                        return e.start;
                    case "block-map":
                        {
                            let t = e.items[e.items.length - 1];
                            return t.sep ? ? t.start
                        }
                    case "block-seq":
                        return e.items[e.items.length - 1].start;
                    default:
                        return []
                }
            }

            function t6(e) {
                if (0 === e.length) return [];
                let t = e.length;
                e: for (; --t >= 0;) switch (e[t].type) {
                    case "doc-start":
                    case "explicit-key-ind":
                    case "map-value-ind":
                    case "seq-item-ind":
                    case "newline":
                        break e
                }
                for (; e[++t] ? .type === "space";);
                return e.splice(t, e.length)
            }

            function ne(e) {
                if ("flow-seq-start" === e.start.type)
                    for (let t of e.items) !t.sep || t.value || t7(t.start, "explicit-key-ind") || t7(t.sep, "map-value-ind") || (t.key && (t.value = t.key), delete t.key, t9(t.value) ? t.value.end ? Array.prototype.push.apply(t.value.end, t.sep) : t.value.end = t.sep : Array.prototype.push.apply(t.start, t.sep), delete t.sep)
            }
            class nt {
                constructor(e) {
                    this.atNewLine = !0, this.atScalar = !1, this.indent = 0, this.offset = 0, this.onKeyLine = !1, this.stack = [], this.source = "", this.type = "", this.lexer = new t5, this.onNewLine = e
                }* parse(e, t = !1) {
                    for (let n of (this.onNewLine && 0 === this.offset && this.onNewLine(0), this.lexer.lex(e, t))) yield* this.next(n);
                    t || (yield* this.end())
                }* next(e) {
                    if (this.source = e, this.atScalar) {
                        this.atScalar = !1, yield* this.step(), this.offset += e.length;
                        return
                    }
                    let t = tH(e);
                    if (t) {
                        if ("scalar" === t) this.atNewLine = !1, this.atScalar = !0, this.type = "scalar";
                        else {
                            switch (this.type = t, yield* this.step(), t) {
                                case "newline":
                                    this.atNewLine = !0, this.indent = 0, this.onNewLine && this.onNewLine(this.offset + e.length);
                                    break;
                                case "space":
                                    this.atNewLine && " " === e[0] && (this.indent += e.length);
                                    break;
                                case "explicit-key-ind":
                                case "map-value-ind":
                                case "seq-item-ind":
                                    this.atNewLine && (this.indent += e.length);
                                    break;
                                case "doc-mode":
                                case "flow-error-end":
                                    return;
                                default:
                                    this.atNewLine = !1
                            }
                            this.offset += e.length
                        }
                    } else {
                        let t = `Not a YAML token: ${e}`;
                        yield* this.pop({
                            type: "error",
                            offset: this.offset,
                            message: t,
                            source: e
                        }), this.offset += e.length
                    }
                }* end() {
                    for (; this.stack.length > 0;) yield* this.pop()
                }
                get sourceToken() {
                    let e = {
                        type: this.type,
                        offset: this.offset,
                        indent: this.indent,
                        source: this.source
                    };
                    return e
                }* step() {
                    let e = this.peek(1);
                    if ("doc-end" === this.type && (!e || "doc-end" !== e.type)) {
                        for (; this.stack.length > 0;) yield* this.pop();
                        this.stack.push({
                            type: "doc-end",
                            offset: this.offset,
                            source: this.source
                        });
                        return
                    }
                    if (!e) return yield* this.stream();
                    switch (e.type) {
                        case "document":
                            return yield* this.document(e);
                        case "alias":
                        case "scalar":
                        case "single-quoted-scalar":
                        case "double-quoted-scalar":
                            return yield* this.scalar(e);
                        case "block-scalar":
                            return yield* this.blockScalar(e);
                        case "block-map":
                            return yield* this.blockMap(e);
                        case "block-seq":
                            return yield* this.blockSequence(e);
                        case "flow-collection":
                            return yield* this.flowCollection(e);
                        case "doc-end":
                            return yield* this.documentEnd(e)
                    }
                    yield* this.pop()
                }
                peek(e) {
                    return this.stack[this.stack.length - e]
                }* pop(e) {
                    let t = e ? ? this.stack.pop();
                    if (t) {
                        if (0 === this.stack.length) yield t;
                        else {
                            let e = this.peek(1);
                            switch ("block-scalar" === t.type ? t.indent = "indent" in e ? e.indent : 0 : "flow-collection" === t.type && "document" === e.type && (t.indent = 0), "flow-collection" === t.type && ne(t), e.type) {
                                case "document":
                                    e.value = t;
                                    break;
                                case "block-scalar":
                                    e.props.push(t);
                                    break;
                                case "block-map":
                                    {
                                        let n = e.items[e.items.length - 1];
                                        if (n.value) {
                                            e.items.push({
                                                start: [],
                                                key: t,
                                                sep: []
                                            }), this.onKeyLine = !0;
                                            return
                                        }
                                        if (n.sep) n.value = t;
                                        else {
                                            Object.assign(n, {
                                                key: t,
                                                sep: []
                                            }), this.onKeyLine = !t7(n.start, "explicit-key-ind");
                                            return
                                        }
                                        break
                                    }
                                case "block-seq":
                                    {
                                        let n = e.items[e.items.length - 1];n.value ? e.items.push({
                                            start: [],
                                            value: t
                                        }) : n.value = t;
                                        break
                                    }
                                case "flow-collection":
                                    {
                                        let n = e.items[e.items.length - 1];!n || n.value ? e.items.push({
                                            start: [],
                                            key: t,
                                            sep: []
                                        }) : n.sep ? n.value = t : Object.assign(n, {
                                            key: t,
                                            sep: []
                                        });
                                        return
                                    }
                                default:
                                    yield* this.pop(), yield* this.pop(t)
                            }
                            if (("document" === e.type || "block-map" === e.type || "block-seq" === e.type) && ("block-map" === t.type || "block-seq" === t.type)) {
                                let n = t.items[t.items.length - 1];
                                n && !n.sep && !n.value && n.start.length > 0 && -1 === t8(n.start) && (0 === t.indent || n.start.every(e => "comment" !== e.type || e.indent < t.indent)) && ("document" === e.type ? e.end = n.start : e.items.push({
                                    start: n.start
                                }), t.items.splice(-1, 1))
                            }
                        }
                    } else yield {
                        type: "error",
                        offset: this.offset,
                        source: "",
                        message: "Tried to pop an empty stack"
                    }
                }* stream() {
                    switch (this.type) {
                        case "directive-line":
                            yield {
                                type: "directive",
                                offset: this.offset,
                                source: this.source
                            };
                            return;
                        case "byte-order-mark":
                        case "space":
                        case "comment":
                        case "newline":
                            yield this.sourceToken;
                            return;
                        case "doc-mode":
                        case "doc-start":
                            {
                                let e = {
                                    type: "document",
                                    offset: this.offset,
                                    start: []
                                };
                                "doc-start" === this.type && e.start.push(this.sourceToken),
                                this.stack.push(e);
                                return
                            }
                    }
                    yield {
                        type: "error",
                        offset: this.offset,
                        message: `Unexpected ${this.type} token in YAML stream`,
                        source: this.source
                    }
                }* document(e) {
                    if (e.value) return yield* this.lineEnd(e);
                    switch (this.type) {
                        case "doc-start":
                            -1 !== t8(e.start) ? (yield* this.pop(), yield* this.step()) : e.start.push(this.sourceToken);
                            return;
                        case "anchor":
                        case "tag":
                        case "space":
                        case "comment":
                        case "newline":
                            e.start.push(this.sourceToken);
                            return
                    }
                    let t = this.startBlockValue(e);
                    t ? this.stack.push(t) : yield {
                        type: "error",
                        offset: this.offset,
                        message: `Unexpected ${this.type} token in YAML document`,
                        source: this.source
                    }
                }* scalar(e) {
                    if ("map-value-ind" === this.type) {
                        let t;
                        let n = t4(this.peek(2)),
                            r = t6(n);
                        e.end ? ((t = e.end).push(this.sourceToken), delete e.end) : t = [this.sourceToken];
                        let i = {
                            type: "block-map",
                            offset: e.offset,
                            indent: e.indent,
                            items: [{
                                start: r,
                                key: e,
                                sep: t
                            }]
                        };
                        this.onKeyLine = !0, this.stack[this.stack.length - 1] = i
                    } else yield* this.lineEnd(e)
                }* blockScalar(e) {
                    switch (this.type) {
                        case "space":
                        case "comment":
                        case "newline":
                            e.props.push(this.sourceToken);
                            return;
                        case "scalar":
                            if (e.source = this.source, this.atNewLine = !0, this.indent = 0, this.onNewLine) {
                                let e = this.source.indexOf("\n") + 1;
                                for (; 0 !== e;) this.onNewLine(this.offset + e), e = this.source.indexOf("\n", e) + 1
                            }
                            yield* this.pop();
                            break;
                        default:
                            yield* this.pop(), yield* this.step()
                    }
                }* blockMap(e) {
                    let t = e.items[e.items.length - 1];
                    switch (this.type) {
                        case "newline":
                            if (this.onKeyLine = !1, t.value) {
                                let n = "end" in t.value ? t.value.end : void 0,
                                    r = Array.isArray(n) ? n[n.length - 1] : void 0;
                                r ? .type === "comment" ? n ? .push(this.sourceToken) : e.items.push({
                                    start: [this.sourceToken]
                                })
                            } else t.sep ? t.sep.push(this.sourceToken) : t.start.push(this.sourceToken);
                            return;
                        case "space":
                        case "comment":
                            if (t.value) e.items.push({
                                start: [this.sourceToken]
                            });
                            else if (t.sep) t.sep.push(this.sourceToken);
                            else {
                                if (this.atIndentedComment(t.start, e.indent)) {
                                    let n = e.items[e.items.length - 2],
                                        r = n ? .value ? .end;
                                    if (Array.isArray(r)) {
                                        Array.prototype.push.apply(r, t.start), r.push(this.sourceToken), e.items.pop();
                                        return
                                    }
                                }
                                t.start.push(this.sourceToken)
                            }
                            return
                    }
                    if (this.indent >= e.indent) {
                        let n = !this.onKeyLine && this.indent === e.indent && t.sep,
                            r = [];
                        if (n && t.sep && !t.value) {
                            let n = [];
                            for (let r = 0; r < t.sep.length; ++r) {
                                let i = t.sep[r];
                                switch (i.type) {
                                    case "newline":
                                        n.push(r);
                                        break;
                                    case "space":
                                        break;
                                    case "comment":
                                        i.indent > e.indent && (n.length = 0);
                                        break;
                                    default:
                                        n.length = 0
                                }
                            }
                            n.length >= 2 && (r = t.sep.splice(n[1]))
                        }
                        switch (this.type) {
                            case "anchor":
                            case "tag":
                                n || t.value ? (r.push(this.sourceToken), e.items.push({
                                    start: r
                                }), this.onKeyLine = !0) : t.sep ? t.sep.push(this.sourceToken) : t.start.push(this.sourceToken);
                                return;
                            case "explicit-key-ind":
                                t.sep || t7(t.start, "explicit-key-ind") ? n || t.value ? (r.push(this.sourceToken), e.items.push({
                                    start: r
                                })) : this.stack.push({
                                    type: "block-map",
                                    offset: this.offset,
                                    indent: this.indent,
                                    items: [{
                                        start: [this.sourceToken]
                                    }]
                                }) : t.start.push(this.sourceToken), this.onKeyLine = !0;
                                return;
                            case "map-value-ind":
                                if (t7(t.start, "explicit-key-ind")) {
                                    if (t.sep) {
                                        if (t.value) e.items.push({
                                            start: [],
                                            key: null,
                                            sep: [this.sourceToken]
                                        });
                                        else if (t7(t.sep, "map-value-ind")) this.stack.push({
                                            type: "block-map",
                                            offset: this.offset,
                                            indent: this.indent,
                                            items: [{
                                                start: r,
                                                key: null,
                                                sep: [this.sourceToken]
                                            }]
                                        });
                                        else if (t9(t.key) && !t7(t.sep, "newline")) {
                                            let e = t6(t.start),
                                                n = t.key,
                                                r = t.sep;
                                            r.push(this.sourceToken), delete t.key, delete t.sep, this.stack.push({
                                                type: "block-map",
                                                offset: this.offset,
                                                indent: this.indent,
                                                items: [{
                                                    start: e,
                                                    key: n,
                                                    sep: r
                                                }]
                                            })
                                        } else r.length > 0 ? t.sep = t.sep.concat(r, this.sourceToken) : t.sep.push(this.sourceToken)
                                    } else if (t7(t.start, "newline")) Object.assign(t, {
                                        key: null,
                                        sep: [this.sourceToken]
                                    });
                                    else {
                                        let e = t6(t.start);
                                        this.stack.push({
                                            type: "block-map",
                                            offset: this.offset,
                                            indent: this.indent,
                                            items: [{
                                                start: e,
                                                key: null,
                                                sep: [this.sourceToken]
                                            }]
                                        })
                                    }
                                } else t.sep ? t.value || n ? e.items.push({
                                    start: r,
                                    key: null,
                                    sep: [this.sourceToken]
                                }) : t7(t.sep, "map-value-ind") ? this.stack.push({
                                    type: "block-map",
                                    offset: this.offset,
                                    indent: this.indent,
                                    items: [{
                                        start: [],
                                        key: null,
                                        sep: [this.sourceToken]
                                    }]
                                }) : t.sep.push(this.sourceToken) : Object.assign(t, {
                                    key: null,
                                    sep: [this.sourceToken]
                                });
                                this.onKeyLine = !0;
                                return;
                            case "alias":
                            case "scalar":
                            case "single-quoted-scalar":
                            case "double-quoted-scalar":
                                {
                                    let i = this.flowScalar(this.type);n || t.value ? (e.items.push({
                                        start: r,
                                        key: i,
                                        sep: []
                                    }), this.onKeyLine = !0) : t.sep ? this.stack.push(i) : (Object.assign(t, {
                                        key: i,
                                        sep: []
                                    }), this.onKeyLine = !0);
                                    return
                                }
                            default:
                                {
                                    let i = this.startBlockValue(e);
                                    if (i) {
                                        n && "block-seq" !== i.type && t7(t.start, "explicit-key-ind") && e.items.push({
                                            start: r
                                        }), this.stack.push(i);
                                        return
                                    }
                                }
                        }
                    }
                    yield* this.pop(), yield* this.step()
                }* blockSequence(e) {
                    let t = e.items[e.items.length - 1];
                    switch (this.type) {
                        case "newline":
                            if (t.value) {
                                let n = "end" in t.value ? t.value.end : void 0,
                                    r = Array.isArray(n) ? n[n.length - 1] : void 0;
                                r ? .type === "comment" ? n ? .push(this.sourceToken) : e.items.push({
                                    start: [this.sourceToken]
                                })
                            } else t.start.push(this.sourceToken);
                            return;
                        case "space":
                        case "comment":
                            if (t.value) e.items.push({
                                start: [this.sourceToken]
                            });
                            else {
                                if (this.atIndentedComment(t.start, e.indent)) {
                                    let n = e.items[e.items.length - 2],
                                        r = n ? .value ? .end;
                                    if (Array.isArray(r)) {
                                        Array.prototype.push.apply(r, t.start), r.push(this.sourceToken), e.items.pop();
                                        return
                                    }
                                }
                                t.start.push(this.sourceToken)
                            }
                            return;
                        case "anchor":
                        case "tag":
                            if (t.value || this.indent <= e.indent) break;
                            t.start.push(this.sourceToken);
                            return;
                        case "seq-item-ind":
                            if (this.indent !== e.indent) break;
                            t.value || t7(t.start, "seq-item-ind") ? e.items.push({
                                start: [this.sourceToken]
                            }) : t.start.push(this.sourceToken);
                            return
                    }
                    if (this.indent > e.indent) {
                        let t = this.startBlockValue(e);
                        if (t) {
                            this.stack.push(t);
                            return
                        }
                    }
                    yield* this.pop(), yield* this.step()
                }* flowCollection(e) {
                    let t = e.items[e.items.length - 1];
                    if ("flow-error-end" === this.type) {
                        let e;
                        do yield* this.pop(), e = this.peek(1); while (e && "flow-collection" === e.type)
                    } else if (0 === e.end.length) {
                        switch (this.type) {
                            case "comma":
                            case "explicit-key-ind":
                                !t || t.sep ? e.items.push({
                                    start: [this.sourceToken]
                                }) : t.start.push(this.sourceToken);
                                return;
                            case "map-value-ind":
                                !t || t.value ? e.items.push({
                                    start: [],
                                    key: null,
                                    sep: [this.sourceToken]
                                }) : t.sep ? t.sep.push(this.sourceToken) : Object.assign(t, {
                                    key: null,
                                    sep: [this.sourceToken]
                                });
                                return;
                            case "space":
                            case "comment":
                            case "newline":
                            case "anchor":
                            case "tag":
                                !t || t.value ? e.items.push({
                                    start: [this.sourceToken]
                                }) : t.sep ? t.sep.push(this.sourceToken) : t.start.push(this.sourceToken);
                                return;
                            case "alias":
                            case "scalar":
                            case "single-quoted-scalar":
                            case "double-quoted-scalar":
                                {
                                    let n = this.flowScalar(this.type);!t || t.value ? e.items.push({
                                        start: [],
                                        key: n,
                                        sep: []
                                    }) : t.sep ? this.stack.push(n) : Object.assign(t, {
                                        key: n,
                                        sep: []
                                    });
                                    return
                                }
                            case "flow-map-end":
                            case "flow-seq-end":
                                e.end.push(this.sourceToken);
                                return
                        }
                        let n = this.startBlockValue(e);
                        n ? this.stack.push(n) : (yield* this.pop(), yield* this.step())
                    } else {
                        let t = this.peek(2);
                        if ("block-map" !== t.type || ("map-value-ind" !== this.type || t.indent !== e.indent) && ("newline" !== this.type || t.items[t.items.length - 1].sep)) {
                            if ("map-value-ind" === this.type && "flow-collection" !== t.type) {
                                let n = t4(t),
                                    r = t6(n);
                                ne(e);
                                let i = e.end.splice(1, e.end.length);
                                i.push(this.sourceToken);
                                let s = {
                                    type: "block-map",
                                    offset: e.offset,
                                    indent: e.indent,
                                    items: [{
                                        start: r,
                                        key: e,
                                        sep: i
                                    }]
                                };
                                this.onKeyLine = !0, this.stack[this.stack.length - 1] = s
                            } else yield* this.lineEnd(e)
                        } else yield* this.pop(), yield* this.step()
                    }
                }
                flowScalar(e) {
                    if (this.onNewLine) {
                        let e = this.source.indexOf("\n") + 1;
                        for (; 0 !== e;) this.onNewLine(this.offset + e), e = this.source.indexOf("\n", e) + 1
                    }
                    return {
                        type: e,
                        offset: this.offset,
                        indent: this.indent,
                        source: this.source
                    }
                }
                startBlockValue(e) {
                    switch (this.type) {
                        case "alias":
                        case "scalar":
                        case "single-quoted-scalar":
                        case "double-quoted-scalar":
                            return this.flowScalar(this.type);
                        case "block-scalar-header":
                            return {
                                type: "block-scalar",
                                offset: this.offset,
                                indent: this.indent,
                                props: [this.sourceToken],
                                source: ""
                            };
                        case "flow-map-start":
                        case "flow-seq-start":
                            return {
                                type: "flow-collection",
                                offset: this.offset,
                                indent: this.indent,
                                start: this.sourceToken,
                                items: [],
                                end: []
                            };
                        case "seq-item-ind":
                            return {
                                type: "block-seq",
                                offset: this.offset,
                                indent: this.indent,
                                items: [{
                                    start: [this.sourceToken]
                                }]
                            };
                        case "explicit-key-ind":
                            {
                                this.onKeyLine = !0;
                                let t = t4(e),
                                    n = t6(t);
                                return n.push(this.sourceToken),
                                {
                                    type: "block-map",
                                    offset: this.offset,
                                    indent: this.indent,
                                    items: [{
                                        start: n
                                    }]
                                }
                            }
                        case "map-value-ind":
                            {
                                this.onKeyLine = !0;
                                let t = t4(e),
                                    n = t6(t);
                                return {
                                    type: "block-map",
                                    offset: this.offset,
                                    indent: this.indent,
                                    items: [{
                                        start: n,
                                        key: null,
                                        sep: [this.sourceToken]
                                    }]
                                }
                            }
                    }
                    return null
                }
                atIndentedComment(e, t) {
                    return "comment" === this.type && !(this.indent <= t) && e.every(e => "newline" === e.type || "space" === e.type)
                }* documentEnd(e) {
                    "doc-mode" !== this.type && (e.end ? e.end.push(this.sourceToken) : e.end = [this.sourceToken], "newline" === this.type && (yield* this.pop()))
                }* lineEnd(e) {
                    switch (this.type) {
                        case "comma":
                        case "doc-start":
                        case "doc-end":
                        case "flow-seq-end":
                        case "flow-map-end":
                        case "map-value-ind":
                            yield* this.pop(), yield* this.step();
                            break;
                        case "newline":
                            this.onKeyLine = !1;
                        default:
                            e.end ? e.end.push(this.sourceToken) : e.end = [this.sourceToken], "newline" === this.type && (yield* this.pop())
                    }
                }
            }

            function nn(e) {
                let t = !1 !== e.prettyErrors,
                    n = e.lineCounter || t && new t3 || null;
                return {
                    lineCounter: n,
                    prettyErrors: t
                }
            }

            function nr(e, t = {}) {
                let {
                    lineCounter: n,
                    prettyErrors: r
                } = nn(t), i = new nt(n ? .addNewLine), s = new tI(t), o = Array.from(s.compose(i.parse(e)));
                if (r && n)
                    for (let t of o) t.errors.forEach(tf(e, n)), t.warnings.forEach(tf(e, n));
                return o.length > 0 ? o : Object.assign([], {
                    empty: !0
                }, s.streamInfo())
            }

            function ni(e, t = {}) {
                let {
                    lineCounter: n,
                    prettyErrors: r
                } = nn(t), i = new nt(n ? .addNewLine), s = new tI(t), o = null;
                for (let t of s.compose(i.parse(e), !0, e.length))
                    if (o) {
                        if ("silent" !== o.options.logLevel) {
                            o.errors.push(new tc(t.range.slice(0, 2), "MULTIPLE_DOCS", "Source contains multiple documents; please use YAML.parseAllDocuments()"));
                            break
                        }
                    } else o = t;
                return r && n && (o.errors.forEach(tf(e, n)), o.warnings.forEach(tf(e, n))), o
            }

            function ns(e, t, n) {
                let r;
                "function" == typeof t ? r = t : void 0 === n && t && "object" == typeof t && (n = t);
                let i = ni(e, n);
                if (!i) return null;
                if (i.warnings.forEach(e => eu(i.options.logLevel, e)), i.errors.length > 0) {
                    if ("silent" !== i.options.logLevel) throw i.errors[0];
                    i.errors = []
                }
                return i.toJS(Object.assign({
                    reviver: r
                }, n))
            }

            function no(e, t, n) {
                let r = null;
                if ("function" == typeof t || Array.isArray(t) ? r = t : void 0 === n && t && (n = t), "string" == typeof n && (n = n.length), "number" == typeof n) {
                    let e = Math.round(n);
                    n = e < 1 ? void 0 : e > 8 ? {
                        indent: 8
                    } : {
                        indent: e
                    }
                }
                if (void 0 === e) {
                    let {
                        keepUndefined: e
                    } = n ? ? t ? ? {};
                    if (!e) return
                }
                return new to(e, r, n).toString(n)
            }
            var na = i
        },
        25229: function(e, t, n) {
            "use strict";
            n.d(t, {
                tJ: function() {
                    return s
                }
            });
            let r = e => t => {
                    try {
                        let n = e(t);
                        if (n instanceof Promise) return n;
                        return {
                            then: e => r(e)(n),
                            catch (e) {
                                return this
                            }
                        }
                    } catch (e) {
                        return {
                            then(e) {
                                return this
                            },
                            catch: t => r(t)(e)
                        }
                    }
                },
                i = (e, t) => (n, i, s) => {
                    let o, a, l = {
                            getStorage: () => localStorage,
                            serialize: JSON.stringify,
                            deserialize: JSON.parse,
                            partialize: e => e,
                            version: 0,
                            merge: (e, t) => ({ ...t,
                                ...e
                            }),
                            ...t
                        },
                        c = !1,
                        u = new Set,
                        f = new Set;
                    try {
                        o = l.getStorage()
                    } catch (e) {}
                    if (!o) return e((...e) => {
                        console.warn(`[zustand persist middleware] Unable to update item '${l.name}', the given storage is currently unavailable.`), n(...e)
                    }, i, s);
                    let p = r(l.serialize),
                        h = () => {
                            let e;
                            let t = l.partialize({ ...i()
                                }),
                                n = p({
                                    state: t,
                                    version: l.version
                                }).then(e => o.setItem(l.name, e)).catch(t => {
                                    e = t
                                });
                            if (e) throw e;
                            return n
                        },
                        d = s.setState;
                    s.setState = (e, t) => {
                        d(e, t), h()
                    };
                    let m = e((...e) => {
                            n(...e), h()
                        }, i, s),
                        y = () => {
                            var e;
                            if (!o) return;
                            c = !1, u.forEach(e => e(i()));
                            let t = (null == (e = l.onRehydrateStorage) ? void 0 : e.call(l, i())) || void 0;
                            return r(o.getItem.bind(o))(l.name).then(e => {
                                if (e) return l.deserialize(e)
                            }).then(e => {
                                if (e) {
                                    if ("number" != typeof e.version || e.version === l.version) return e.state;
                                    if (l.migrate) return l.migrate(e.state, e.version);
                                    console.error("State loaded from storage couldn't be migrated since no migrate function was provided")
                                }
                            }).then(e => {
                                var t;
                                return n(a = l.merge(e, null != (t = i()) ? t : m), !0), h()
                            }).then(() => {
                                null == t || t(a, void 0), c = !0, f.forEach(e => e(a))
                            }).catch(e => {
                                null == t || t(void 0, e)
                            })
                        };
                    return s.persist = {
                        setOptions: e => {
                            l = { ...l,
                                ...e
                            }, e.getStorage && (o = e.getStorage())
                        },
                        clearStorage: () => {
                            null == o || o.removeItem(l.name)
                        },
                        getOptions: () => l,
                        rehydrate: () => y(),
                        hasHydrated: () => c,
                        onHydrate: e => (u.add(e), () => {
                            u.delete(e)
                        }),
                        onFinishHydration: e => (f.add(e), () => {
                            f.delete(e)
                        })
                    }, y(), a || m
                },
                s = i
        },
        10301: function(e, t, n) {
            "use strict";
            n.d(t, {
                n: function() {
                    return V
                }
            });
            var r, i = Symbol.for("immer-nothing"),
                s = Symbol.for("immer-draftable"),
                o = Symbol.for("immer-state");

            function a(e, ...t) {
                throw Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`)
            }
            var l = Object.getPrototypeOf;

            function c(e) {
                return !!e && !!e[o]
            }

            function u(e) {
                return !!e && (p(e) || Array.isArray(e) || !!e[s] || !!e.constructor ? .[s] || g(e) || b(e))
            }
            var f = Object.prototype.constructor.toString();

            function p(e) {
                if (!e || "object" != typeof e) return !1;
                let t = l(e);
                if (null === t) return !0;
                let n = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
                return n === Object || "function" == typeof n && Function.toString.call(n) === f
            }

            function h(e, t) {
                0 === d(e) ? Object.entries(e).forEach(([n, r]) => {
                    t(n, r, e)
                }) : e.forEach((n, r) => t(r, n, e))
            }

            function d(e) {
                let t = e[o];
                return t ? t.type_ : Array.isArray(e) ? 1 : g(e) ? 2 : b(e) ? 3 : 0
            }

            function m(e, t) {
                return 2 === d(e) ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t)
            }

            function y(e, t, n) {
                let r = d(e);
                2 === r ? e.set(t, n) : 3 === r ? e.add(n) : e[t] = n
            }

            function g(e) {
                return e instanceof Map
            }

            function b(e) {
                return e instanceof Set
            }

            function v(e) {
                return e.copy_ || e.base_
            }

            function w(e, t) {
                if (g(e)) return new Map(e);
                if (b(e)) return new Set(e);
                if (Array.isArray(e)) return Array.prototype.slice.call(e);
                if (!t && p(e)) {
                    if (!l(e)) {
                        let t = Object.create(null);
                        return Object.assign(t, e)
                    }
                    return { ...e
                    }
                }
                let n = Object.getOwnPropertyDescriptors(e);
                delete n[o];
                let r = Reflect.ownKeys(n);
                for (let t = 0; t < r.length; t++) {
                    let i = r[t],
                        s = n[i];
                    !1 === s.writable && (s.writable = !0, s.configurable = !0), (s.get || s.set) && (n[i] = {
                        configurable: !0,
                        writable: !0,
                        enumerable: s.enumerable,
                        value: e[i]
                    })
                }
                return Object.create(l(e), n)
            }

            function k(e, t = !1) {
                return S(e) || c(e) || !u(e) || (d(e) > 1 && (e.set = e.add = e.clear = e.delete = E), Object.freeze(e), t && h(e, (e, t) => k(t, !0), !0)), e
            }

            function E() {
                a(2)
            }

            function S(e) {
                return Object.isFrozen(e)
            }
            var O = {};

            function A(e) {
                let t = O[e];
                return t || a(0, e), t
            }

            function _(e, t) {
                t && (A("Patches"), e.patches_ = [], e.inversePatches_ = [], e.patchListener_ = t)
            }

            function x(e) {
                N(e), e.drafts_.forEach(I), e.drafts_ = null
            }

            function N(e) {
                e === r && (r = e.parent_)
            }

            function T(e) {
                return r = {
                    drafts_: [],
                    parent_: r,
                    immer_: e,
                    canAutoFreeze_: !0,
                    unfinalizedDrafts_: 0
                }
            }

            function I(e) {
                let t = e[o];
                0 === t.type_ || 1 === t.type_ ? t.revoke_() : t.revoked_ = !0
            }

            function C(e, t) {
                t.unfinalizedDrafts_ = t.drafts_.length;
                let n = t.drafts_[0],
                    r = void 0 !== e && e !== n;
                return r ? (n[o].modified_ && (x(t), a(4)), u(e) && (e = j(t, e), t.parent_ || P(t, e)), t.patches_ && A("Patches").generateReplacementPatches_(n[o].base_, e, t.patches_, t.inversePatches_)) : e = j(t, n, []), x(t), t.patches_ && t.patchListener_(t.patches_, t.inversePatches_), e !== i ? e : void 0
            }

            function j(e, t, n) {
                if (S(t)) return t;
                let r = t[o];
                if (!r) return h(t, (i, s) => D(e, r, t, i, s, n), !0), t;
                if (r.scope_ !== e) return t;
                if (!r.modified_) return P(e, r.base_, !0), r.base_;
                if (!r.finalized_) {
                    r.finalized_ = !0, r.scope_.unfinalizedDrafts_--;
                    let t = r.copy_,
                        i = t,
                        s = !1;
                    3 === r.type_ && (i = new Set(t), t.clear(), s = !0), h(i, (i, o) => D(e, r, t, i, o, n, s)), P(e, t, !1), n && e.patches_ && A("Patches").generatePatches_(r, n, e.patches_, e.inversePatches_)
                }
                return r.copy_
            }

            function D(e, t, n, r, i, s, o) {
                if (c(i)) {
                    let o = s && t && 3 !== t.type_ && !m(t.assigned_, r) ? s.concat(r) : void 0,
                        a = j(e, i, o);
                    if (y(n, r, a), !c(a)) return;
                    e.canAutoFreeze_ = !1
                } else o && n.add(i);
                if (u(i) && !S(i)) {
                    if (!e.immer_.autoFreeze_ && e.unfinalizedDrafts_ < 1) return;
                    j(e, i), t && t.scope_.parent_ || P(e, i)
                }
            }

            function P(e, t, n = !1) {
                !e.parent_ && e.immer_.autoFreeze_ && e.canAutoFreeze_ && k(t, n)
            }
            var L = {
                    get(e, t) {
                        if (t === o) return e;
                        let n = v(e);
                        if (!m(n, t)) return function(e, t, n) {
                            let r = F(t, n);
                            return r ? "value" in r ? r.value : r.get ? .call(e.draft_) : void 0
                        }(e, n, t);
                        let r = n[t];
                        return e.finalized_ || !u(r) ? r : r === M(e.base_, t) ? (B(e), e.copy_[t] = K(r, e)) : r
                    },
                    has: (e, t) => t in v(e),
                    ownKeys: e => Reflect.ownKeys(v(e)),
                    set(e, t, n) {
                        let r = F(v(e), t);
                        if (r ? .set) return r.set.call(e.draft_, n), !0;
                        if (!e.modified_) {
                            let r = M(v(e), t),
                                i = r ? .[o];
                            if (i && i.base_ === n) return e.copy_[t] = n, e.assigned_[t] = !1, !0;
                            if ((n === r ? 0 !== n || 1 / n == 1 / r : n != n && r != r) && (void 0 !== n || m(e.base_, t))) return !0;
                            B(e), R(e)
                        }
                        return !!(e.copy_[t] === n && (void 0 !== n || t in e.copy_) || Number.isNaN(n) && Number.isNaN(e.copy_[t])) || (e.copy_[t] = n, e.assigned_[t] = !0, !0)
                    },
                    deleteProperty: (e, t) => (void 0 !== M(e.base_, t) || t in e.base_ ? (e.assigned_[t] = !1, B(e), R(e)) : delete e.assigned_[t], e.copy_ && delete e.copy_[t], !0),
                    getOwnPropertyDescriptor(e, t) {
                        let n = v(e),
                            r = Reflect.getOwnPropertyDescriptor(n, t);
                        return r ? {
                            writable: !0,
                            configurable: 1 !== e.type_ || "length" !== t,
                            enumerable: r.enumerable,
                            value: n[t]
                        } : r
                    },
                    defineProperty() {
                        a(11)
                    },
                    getPrototypeOf: e => l(e.base_),
                    setPrototypeOf() {
                        a(12)
                    }
                },
                $ = {};

            function M(e, t) {
                let n = e[o],
                    r = n ? v(n) : e;
                return r[t]
            }

            function F(e, t) {
                if (!(t in e)) return;
                let n = l(e);
                for (; n;) {
                    let e = Object.getOwnPropertyDescriptor(n, t);
                    if (e) return e;
                    n = l(n)
                }
            }

            function R(e) {
                !e.modified_ && (e.modified_ = !0, e.parent_ && R(e.parent_))
            }

            function B(e) {
                e.copy_ || (e.copy_ = w(e.base_, e.scope_.immer_.useStrictShallowCopy_))
            }

            function K(e, t) {
                let n = g(e) ? A("MapSet").proxyMap_(e, t) : b(e) ? A("MapSet").proxySet_(e, t) : function(e, t) {
                        let n = Array.isArray(e),
                            i = {
                                type_: n ? 1 : 0,
                                scope_: t ? t.scope_ : r,
                                modified_: !1,
                                finalized_: !1,
                                assigned_: {},
                                parent_: t,
                                base_: e,
                                draft_: null,
                                copy_: null,
                                revoke_: null,
                                isManual_: !1
                            },
                            s = i,
                            o = L;
                        n && (s = [i], o = $);
                        let {
                            revoke: a,
                            proxy: l
                        } = Proxy.revocable(s, o);
                        return i.draft_ = l, i.revoke_ = a, l
                    }(e, t),
                    i = t ? t.scope_ : r;
                return i.drafts_.push(n), n
            }
            h(L, (e, t) => {
                $[e] = function() {
                    return arguments[0] = arguments[0][0], t.apply(this, arguments)
                }
            }), $.deleteProperty = function(e, t) {
                return $.set.call(this, e, t, void 0)
            }, $.set = function(e, t, n) {
                return L.set.call(this, e[0], t, n, e[0])
            };
            var q = new class {
                    constructor(e) {
                        this.autoFreeze_ = !0, this.useStrictShallowCopy_ = !1, this.produce = (e, t, n) => {
                            let r;
                            if ("function" == typeof e && "function" != typeof t) {
                                let n = t;
                                t = e;
                                let r = this;
                                return function(e = n, ...i) {
                                    return r.produce(e, e => t.call(this, e, ...i))
                                }
                            }
                            if ("function" != typeof t && a(6), void 0 !== n && "function" != typeof n && a(7), u(e)) {
                                let i = T(this),
                                    s = K(e, void 0),
                                    o = !0;
                                try {
                                    r = t(s), o = !1
                                } finally {
                                    o ? x(i) : N(i)
                                }
                                return _(i, n), C(r, i)
                            }
                            if (e && "object" == typeof e) a(1, e);
                            else {
                                if (void 0 === (r = t(e)) && (r = e), r === i && (r = void 0), this.autoFreeze_ && k(r, !0), n) {
                                    let t = [],
                                        i = [];
                                    A("Patches").generateReplacementPatches_(e, r, t, i), n(t, i)
                                }
                                return r
                            }
                        }, this.produceWithPatches = (e, t) => {
                            let n, r;
                            if ("function" == typeof e) return (t, ...n) => this.produceWithPatches(t, t => e(t, ...n));
                            let i = this.produce(e, t, (e, t) => {
                                n = e, r = t
                            });
                            return [i, n, r]
                        }, "boolean" == typeof e ? .autoFreeze && this.setAutoFreeze(e.autoFreeze), "boolean" == typeof e ? .useStrictShallowCopy && this.setUseStrictShallowCopy(e.useStrictShallowCopy)
                    }
                    createDraft(e) {
                        var t;
                        u(e) || a(8), c(e) && (c(t = e) || a(10, t), e = function e(t) {
                            let n;
                            if (!u(t) || S(t)) return t;
                            let r = t[o];
                            if (r) {
                                if (!r.modified_) return r.base_;
                                r.finalized_ = !0, n = w(t, r.scope_.immer_.useStrictShallowCopy_)
                            } else n = w(t, !0);
                            return h(n, (t, r) => {
                                y(n, t, e(r))
                            }), r && (r.finalized_ = !1), n
                        }(t));
                        let n = T(this),
                            r = K(e, void 0);
                        return r[o].isManual_ = !0, N(n), r
                    }
                    finishDraft(e, t) {
                        let n = e && e[o];
                        n && n.isManual_ || a(9);
                        let {
                            scope_: r
                        } = n;
                        return _(r, t), C(void 0, r)
                    }
                    setAutoFreeze(e) {
                        this.autoFreeze_ = e
                    }
                    setUseStrictShallowCopy(e) {
                        this.useStrictShallowCopy_ = e
                    }
                    applyPatches(e, t) {
                        let n;
                        for (n = t.length - 1; n >= 0; n--) {
                            let r = t[n];
                            if (0 === r.path.length && "replace" === r.op) {
                                e = r.value;
                                break
                            }
                        }
                        n > -1 && (t = t.slice(n + 1));
                        let r = A("Patches").applyPatches_;
                        return c(e) ? r(e, t) : this.produce(e, e => r(e, t))
                    }
                },
                U = q.produce;
            q.produceWithPatches.bind(q), q.setAutoFreeze.bind(q), q.setUseStrictShallowCopy.bind(q), q.applyPatches.bind(q), q.createDraft.bind(q), q.finishDraft.bind(q);
            let z = e => (t, n, r) => (r.setState = (e, n, ...r) => {
                    let i = "function" == typeof e ? U(e) : e;
                    return t(i, n, ...r)
                }, e(r.setState, n, r)),
                V = z
        }
    }
]);