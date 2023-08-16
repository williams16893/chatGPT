"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [8937], {
        93683: function(e, a, n) {
            n.d(a, {
                Z: function() {
                    return C
                }
            });
            var r = n(21722),
                s = n(39324),
                t = n(22830),
                i = n(75883),
                o = n(35250),
                l = n(9181),
                c = n.n(l),
                d = n(60554),
                u = n(70079),
                p = n(1454),
                m = n(70671),
                f = n(32004),
                x = n(94968),
                h = n(50795),
                g = n(82081),
                b = n(99486),
                v = n(78931),
                y = n(88798),
                j = n(56817),
                w = n(96175),
                k = n(19350),
                N = n(51061);

            function C(e) {
                var a = e.isOpen,
                    n = e.onClose,
                    l = (0, m.Z)(),
                    x = (0, v.hz)(),
                    C = (0, t._)((0, u.useState)(!1), 2),
                    A = C[0],
                    T = C[1],
                    S = (0, d.useRouter)(),
                    _ = (0, u.useCallback)(function() {
                        h.o.logEvent(g.a.closeAccountPaymentModal), n()
                    }, [n]),
                    E = (0, u.useCallback)((0, r._)(function() {
                        var e;
                        return (0, i.Jh)(this, function(a) {
                            switch (a.label) {
                                case 0:
                                    T(!0), h.o.logEvent(g.a.clickAccountPaymentCheckout), a.label = 1;
                                case 1:
                                    return a.trys.push([1, 3, 4, 5]), [4, b.ZP.getCheckoutLink()];
                                case 2:
                                    return e = a.sent(), S.push(e.url), [3, 5];
                                case 3:
                                    return a.sent(), y.m.warning(l.formatMessage(P.paymentErrorWarning), {
                                        hasCloseButton: !0
                                    }), [3, 5];
                                case 4:
                                    return T(!1), [7];
                                case 5:
                                    return [2]
                            }
                        })
                    }), [l, S]),
                    M = (0, u.useCallback)((0, r._)(function() {
                        var e;
                        return (0, i.Jh)(this, function(a) {
                            switch (a.label) {
                                case 0:
                                    T(!0), h.o.logEvent(g.a.clickAccountCustomerPortal), a.label = 1;
                                case 1:
                                    return a.trys.push([1, 3, 4, 5]), [4, b.ZP.fetchCustomerPortalUrl()];
                                case 2:
                                    return e = a.sent(), S.push(e.url), [3, 5];
                                case 3:
                                    return a.sent(), y.m.warning(l.formatMessage(P.accountErrorWarning), {
                                        hasCloseButton: !0
                                    }), [3, 5];
                                case 4:
                                    return T(!1), [7];
                                case 5:
                                    return [2]
                            }
                        })
                    }), [l, S]),
                    Z = (0, u.useCallback)(function() {
                        h.o.logEvent(g.a.clickAccountPaymentGetHelp)
                    }, []),
                    G = (0, v.YD)(),
                    D = x.has("disable_upgrade_ui");
                return (0, o.jsxs)(w.x, {
                    isOpen: a,
                    onClose: n,
                    children: [(0, o.jsxs)("div", {
                        className: "flex w-full flex-row items-center justify-between border-b px-4 py-3 dark:border-gray-700",
                        children: [(0, o.jsx)("span", {
                            className: "text-base font-semibold sm:text-base",
                            children: (0, o.jsx)(f.Z, (0, s._)({}, P.modalTitle))
                        }), (0, o.jsx)("button", {
                            className: "text-gray-700 opacity-50 transition hover:opacity-75 dark:text-white",
                            onClick: _,
                            children: (0, o.jsx)(p.q5L, {
                                className: "h-6 w-6"
                            })
                        })]
                    }), (0, o.jsxs)("div", {
                        className: "grid sm:grid-cols-2",
                        children: [(0, o.jsx)("div", {
                            className: "relative order-2 col-span-1 border-r-0 border-t dark:border-gray-700 sm:order-1 sm:border-r sm:border-t-0",
                            children: (0, o.jsx)(k.Oi, {
                                rowElements: [(0, o.jsx)(k.Cu, {
                                    text: "Free plan"
                                }, "row-free-plan-name"), (0, o.jsx)(k.hi, {
                                    variant: "disabled",
                                    disabled: !0,
                                    text: N.S.free.callToAction.active
                                }, "row-free-plan-button"), (0, o.jsx)(k.G, {
                                    variant: "secondary",
                                    text: N.S.free.demandAccess
                                }, "row-free-plan-demand"), (0, o.jsx)(k.G, {
                                    variant: "secondary",
                                    text: N.S.free.responseSpeed
                                }, "row-free-plan-speed"), (0, o.jsx)(k.G, {
                                    className: "sm:pb-2",
                                    variant: "secondary",
                                    text: N.S.free.modelFeatures
                                }, "row-free-plan-updates")]
                            })
                        }), (0, o.jsx)("div", {
                            className: "relative order-1 col-span-1 sm:order-2",
                            children: (0, o.jsx)(k.Oi, {
                                rowElements: [(0, o.jsx)(k.Cu, {
                                    text: N.S.plus.name,
                                    children: (0, o.jsx)("span", {
                                        className: "font-semibold text-gray-500",
                                        children: N.S.plus.costInDollars
                                    })
                                }, "row-plus-plan-title"), (0, o.jsx)(k.hi, {
                                    variant: "primary",
                                    disabledText: D ? l.formatMessage(P.highDemandDisabledText) : "",
                                    disabled: A,
                                    isLoading: A,
                                    onClick: E,
                                    text: N.S.plus.callToAction.inactivePayment
                                }, "row-plus-plan-button"), (0, o.jsx)(k.G, {
                                    variant: "primary",
                                    text: N.S.plus.demandAccess
                                }, "row-plus-plan-demand"), (0, o.jsx)(k.G, {
                                    variant: "primary",
                                    text: N.S.plus.responseSpeed
                                }, "row-plus-plan-speed"), (0, o.jsx)(k.G, {
                                    className: "sm:pb-2",
                                    variant: "primary",
                                    text: N.S.plus.modelFeatures
                                }, "row-plus-plan-updates"), G && (0, o.jsx)(k.nR, {
                                    className: "sm:pb-1",
                                    isLoading: A,
                                    text: N.S.manageSubscriptionWeb.callToAction,
                                    onClick: M
                                }, "row-plus-plan-manage"), (0, o.jsx)(c(), {
                                    target: "_blank",
                                    href: j.ti,
                                    onClick: Z,
                                    passHref: !0,
                                    children: (0, o.jsx)(k.nR, {
                                        className: "sm:pb-1",
                                        isLoading: !1,
                                        isTextOnly: !0,
                                        text: N.S.getHelp.callToAction
                                    }, "row-plus-plan-help")
                                }, "row-plus-plan-help-link")]
                            })
                        })]
                    })]
                })
            }
            var P = (0, x.vU)({
                paymentErrorWarning: {
                    id: "AccountPaymentModal.paymentErrorWarning",
                    description: "Error toast when payment page has an error",
                    defaultMessage: "The payments page encountered an error. Please try again. If the problem continues, please visit help.openai.com."
                },
                accountErrorWarning: {
                    id: "AccountPaymentModal.accountErrorWarning",
                    description: "Error toast when account page has an error",
                    defaultMessage: "The account management page encountered an error. Please try again. If the problem continues, please visit help.openai.com."
                },
                modalTitle: {
                    id: "AccountPaymentModal.modalTitle",
                    description: "Title for the payment page modal",
                    defaultMessage: "Your plan"
                },
                highDemandDisabledText: {
                    id: "AccountPaymentModal.highDemandDisabledText",
                    description: "Message shown when demand is too high and payments are disabled",
                    defaultMessage: "Due to high demand, we've temporarily paused upgrades."
                }
            })
        },
        96175: function(e, a, n) {
            n.d(a, {
                x: function() {
                    return l
                }
            });
            var r = n(4337),
                s = n(35250),
                t = n(21389),
                i = n(89368);

            function o() {
                var e = (0, r._)(["flex grow justify-center bg-white dark:bg-gray-900 rounded-md flex-col items-start overflow-hidden border shadow-md dark:border-gray-700"]);
                return o = function() {
                    return e
                }, e
            }
            var l = function(e) {
                    var a = e.children,
                        n = e.isOpen,
                        r = e.onClose;
                    return (0, s.jsx)(i.Z, {
                        size: "fullscreen",
                        isOpen: n,
                        onClose: r,
                        type: "success",
                        className: "!bg-transparent !shadow-none md:w-[672px] lg:w-[896px] xl:w-[1024px]",
                        children: (0, s.jsx)("div", {
                            className: "focus-none flex h-full flex-col items-center justify-start outline-none",
                            children: (0, s.jsx)("div", {
                                className: "relative",
                                children: (0, s.jsx)(c, {
                                    children: a
                                })
                            })
                        })
                    })
                },
                c = t.Z.div(o())
        },
        19350: function(e, a, n) {
            n.d(a, {
                Cu: function() {
                    return g
                },
                G: function() {
                    return y
                },
                Oi: function() {
                    return h
                },
                hi: function() {
                    return v
                },
                nR: function() {
                    return j
                }
            });
            var r = n(4337),
                s = n(35250),
                t = n(19841),
                i = n(61888),
                o = n(70079),
                l = n(1454),
                c = n(21389),
                d = n(67273),
                u = n(45635),
                p = n(88327);

            function m() {
                var e = (0, r._)(["p-4 flex flex-col gap-3 bg-white z-20 relative dark:bg-gray-900"]);
                return m = function() {
                    return e
                }, e
            }

            function f() {
                var e = (0, r._)(["gap-2 flex flex-row justify-start text-sm items-start"]);
                return f = function() {
                    return e
                }, e
            }

            function x() {
                var e = (0, r._)(["text-xl font-semibold justify-between items-center flex"]);
                return x = function() {
                    return e
                }, e
            }
            var h = function(e) {
                    var a = e.rowElements;
                    return (0, s.jsx)(w, {
                        children: a.map(function(e) {
                            return e
                        })
                    })
                },
                g = function(e) {
                    var a = e.className,
                        n = e.text,
                        r = e.children;
                    return (0, s.jsxs)(N, {
                        className: a,
                        children: [(0, s.jsx)("span", {
                            children: n
                        }), r]
                    })
                },
                b = {
                    "primary-disabled": "border-none bg-gray-200 py-3 font-semibold hover:bg-gray-200",
                    primary: "border-none py-3 font-semibold",
                    disabled: "dark:text-gray-white border-none bg-gray-300 py-3 font-semibold text-gray-800 hover:bg-gray-300 dark:bg-gray-500 dark:opacity-100"
                },
                v = (0, o.forwardRef)(function(e, a) {
                    var n = e.isLoading,
                        r = void 0 !== n && n,
                        i = e.disabled,
                        o = e.onClick,
                        c = e.variant,
                        m = void 0 === c ? "primary" : c,
                        f = e.text,
                        x = e.disabledText;
                    return x ? (0, s.jsx)("div", {
                        className: "relative",
                        children: (0, s.jsx)(u.u, {
                            side: "bottom",
                            sideOffset: 20,
                            label: x,
                            usePortal: !1,
                            children: (0, s.jsxs)(d.z, {
                                ref: a,
                                as: "button",
                                color: "disabled",
                                className: (0, t.default)("w-full", b[m]),
                                children: [f, r && (0, s.jsx)(p.ZP, {
                                    className: "animate-spin",
                                    icon: l.dAq
                                })]
                            })
                        })
                    }) : (0, s.jsxs)(d.z, {
                        disabled: void 0 !== i && i,
                        onClick: o,
                        ref: a,
                        as: "button",
                        className: (0, t.default)(b[m]),
                        children: [(0, s.jsx)("span", {
                            className: (0, t.default)("inline-block", {
                                "text-gray-700": "primary-disabled" === m,
                                "text-white": "primary" === m
                            }),
                            children: f
                        }), r && (0, s.jsx)(p.ZP, {
                            className: "animate-spin",
                            icon: l.dAq
                        })]
                    })
                });
            v.displayName = "PricingPlanButton";
            var y = function(e) {
                    var a = e.variant,
                        n = void 0 === a ? "primary" : a,
                        r = e.className,
                        i = e.text;
                    return (0, s.jsxs)(k, {
                        className: r,
                        children: [(0, s.jsx)(p.ZP, {
                            icon: l._rq,
                            className: (0, t.default)("h-5 w-5", {
                                "text-green-700": "primary" == n,
                                "text-gray-400": "secondary" == n
                            })
                        }), (0, s.jsx)("span", {
                            className: "max-w-[250px]",
                            children: i
                        })]
                    })
                },
                j = function(e) {
                    var a = e.className,
                        n = e.text,
                        r = e.isLoading,
                        t = e.isTextOnly,
                        c = e.onClick,
                        d = void 0 === c ? i.noop : c,
                        u = "flex flex-row items-center space-x-1 underline",
                        m = (0, o.useMemo)(function() {
                            return (0, s.jsxs)(s.Fragment, {
                                children: [(0, s.jsx)("span", {
                                    children: n
                                }), r && (0, s.jsx)(p.ZP, {
                                    className: "animate-spin",
                                    icon: l.dAq
                                })]
                            })
                        }, [r, n]);
                    return (0, s.jsx)(k, {
                        className: a,
                        children: void 0 !== t && t ? (0, s.jsx)("div", {
                            className: u,
                            children: m
                        }) : (0, s.jsx)("button", {
                            onClick: d,
                            className: u,
                            children: m
                        })
                    })
                },
                w = c.Z.div(m()),
                k = c.Z.div(f()),
                N = c.Z.div(x())
        },
        51061: function(e, a, n) {
            n.d(a, {
                S: function() {
                    return r
                }
            });
            var r = {
                free: {
                    name: "Free plan",
                    callToAction: {
                        active: "Your current plan",
                        inactive: "Your current plan"
                    },
                    costInDollars: "",
                    demandAccess: "Access to our GPT-3.5 model",
                    responseSpeed: "Standard response speed",
                    modelFeatures: "Regular model updates"
                },
                plus: {
                    name: "ChatGPT Plus",
                    callToAction: {
                        active: "Your current plan",
                        inactive: "I'm interested",
                        inactivePayment: "Upgrade to Plus"
                    },
                    costInDollars: "USD $20/mo",
                    demandAccess: "Access to GPT-4, our most capable model",
                    responseSpeed: "Faster response speed",
                    modelFeatures: "Exclusive access to beta features like Browsing, Plugins, and Code Interpreter"
                },
                manageSubscriptionWeb: {
                    callToAction: "Manage my subscription"
                },
                manageSubscriptionIos: {
                    callToAction: "Manage my subscription in the ChatGPT iOS app"
                },
                manageSubscriptionAndroid: {
                    callToAction: "Manage my subscription in the ChatGPT Android app"
                },
                getHelp: {
                    callToAction: "I need help with a billing issue"
                },
                business: {
                    callToAction: "Buy for my team"
                }
            }
        },
        21739: function(e, a, n) {
            n.d(a, {
                g: function() {
                    return l
                }
            });
            var r = n(96237),
                s = n(39324),
                t = n(71209),
                i = n(78103),
                o = {
                    flags: {
                        isUserInCanPayGroup: !1,
                        failwhaleBypassEnabled: !1,
                        sharingEnabled: !1,
                        messageRedesign: !1
                    }
                },
                l = (0, i.ZP)()(function(e, a) {
                    return (0, t._)((0, s._)({}, o), {
                        updateFlagValue: function(n, i) {
                            var o = a().flags;
                            e({
                                flags: (0, t._)((0, s._)({}, o), (0, r._)({}, n, i))
                            })
                        }
                    })
                })
        }
    }
]);