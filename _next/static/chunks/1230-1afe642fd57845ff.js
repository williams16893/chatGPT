"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1230], {
        95954: function(e, t, n) {
            var r, a, o, i, s, l, d, u, c, f, g, p, h, m, v, x, b;
            n.d(t, {
                Jq: function() {
                    return c
                },
                Os: function() {
                    return o
                },
                PX: function() {
                    return s
                },
                RF: function() {
                    return u
                },
                uU: function() {
                    return i
                }
            }), (f = r || (r = {})).Default = "default", f.Dark = "dark", (a || (a = {})).Retrieval = "retrieval", (g = o || (o = {})).Next = "next", g.Variant = "variant", g.Continue = "continue", (p = i || (i = {})).Unknown = "unknown", p.User = "user", p.Assistant = "assistant", p.System = "system", p.Critic = "critic", p.Tool = "tool", (h = s || (s = {})).Text = "text", h.MultimodalText = "multimodal_text", h.TetherBrowsingCode = "tether_browsing_code", h.Code = "code", h.ExecutionOutput = "execution_output", h.SystemError = "system_error", h.SystemMessage = "system_message", h.TetherBrowsingDisplay = "tether_browsing_display", h.TetherQuote = "tether_quote", h.UserEditableContext = "user_editable_context", (m = l || (l = {})).Search = "search", m.Click = "click", m.OpenUrl = "open_url", m.Quote = "quote", m.QuoteFull = "quote_full", m.Back = "back", m.Scroll = "scroll", (v = d || (d = {})).Running = "running", v.Finished = "finished", (x = u || (u = {})).Starting = "starting", x.Running = "running", x.Done = "done", x.Timeout = "timeout", x.Error = "error", (b = c || (c = {})).Root = "root", b.System = "system", b.Prompt = "prompt", b.Completion = "completion"
        },
        28512: function(e, t, n) {
            n.d(t, {
                Z: function() {
                    return m
                }
            });
            var r = n(39324),
                a = n(22830),
                o = n(4337),
                i = n(35250),
                s = n(70079),
                l = n(1454),
                d = n(94968),
                u = n(32004),
                c = n(21389),
                f = n(19012),
                g = n(88327);

            function p() {
                var e = (0, o._)(["flex ml-auto gap-2"]);
                return p = function() {
                    return e
                }, e
            }
            var h = (0, d.vU)({
                copied: {
                    id: "CopyButton.copied",
                    defaultMessage: "Copied!",
                    description: "Text displayed when the content has been copied"
                }
            });

            function m(e) {
                var t = e.buttonText,
                    n = e.onCopy,
                    o = e.className,
                    d = (0, a._)((0, s.useState)(!1), 2),
                    c = d[0],
                    p = d[1],
                    m = (0, f.Z)(),
                    x = (0, s.useCallback)(function() {
                        n(), p(!0), setTimeout(function() {
                            m() && p(!1)
                        }, 2e3)
                    }, [m, n]);
                return (0, i.jsxs)(i.Fragment, {
                    children: [!c && (0, i.jsxs)(v, {
                        onClick: x,
                        className: o,
                        children: [(0, i.jsx)(g.ZP, {
                            icon: l.j4u
                        }), t]
                    }), c && (0, i.jsxs)(v, {
                        className: o,
                        children: [(0, i.jsx)(g.ZP, {
                            icon: l.UgA
                        }), t && (0, i.jsx)(u.Z, (0, r._)({}, h.copied))]
                    })]
                })
            }
            var v = c.Z.button(p())
        },
        78018: function(e, t, n) {
            n.d(t, {
                Z: function() {
                    return h
                }
            });
            var r = n(22830),
                a = n(35250),
                o = n(39217),
                i = n(19841),
                s = n(70079),
                l = n(1454),
                d = n(70671),
                u = n(94968),
                c = n(45635),
                f = n(88327);

            function g(e) {
                var t = e.percentage,
                    n = e.className,
                    r = 2 * Math.PI * 45;
                return (0, a.jsxs)("svg", {
                    width: "120",
                    height: "120",
                    viewBox: "0 0 120 120",
                    className: n,
                    children: [(0, a.jsx)("circle", {
                        className: "origin-[50%_50%] -rotate-90 stroke-gray-200 transition-[stroke-dashoffset] duration-1000 ease-in-out",
                        strokeWidth: "20",
                        fill: "transparent",
                        r: 45,
                        cx: "60",
                        cy: "60"
                    }), (0, a.jsx)("circle", {
                        className: "origin-[50%_50%] -rotate-90 transition-[stroke-dashoffset]",
                        stroke: "currentColor",
                        strokeWidth: "20",
                        strokeDashoffset: r - t / 100 * r,
                        strokeDasharray: "".concat(r, " ").concat(r),
                        fill: "transparent",
                        r: 45,
                        cx: "60",
                        cy: "60"
                    })]
                })
            }

            function p(e) {
                return e instanceof File
            }

            function h(e) {
                var t, n, u, h, v = e.onRemoveFileClick,
                    x = e.file,
                    b = e.loadingPercentage,
                    y = e.onDownloadClick,
                    C = (0, d.Z)(),
                    _ = null != y,
                    w = p(x) ? x.name : x,
                    M = !!p(x) && x.type.startsWith("image/"),
                    j = (t = p(x) ? x : null, u = (n = (0, r._)((0, s.useState)(void 0), 2))[0], h = n[1], (0, s.useEffect)(function() {
                        if (t && t.type.startsWith("image/")) {
                            var e = new FileReader;
                            e.addEventListener("load", function() {
                                var t = e.result;
                                h("string" == typeof t ? t : void 0)
                            }), e.readAsDataURL(t)
                        } else h(void 0)
                    }, [t]), u);
                return (0, a.jsxs)("div", {
                    className: "group relative inline-block text-xs text-gray-900",
                    children: [(0, a.jsx)(_ ? "button" : "span", {
                        className: "flex items-stretch justify-center",
                        onClick: function() {
                            return _ && (null == y ? void 0 : y())
                        },
                        children: M && null != j ? (0, a.jsx)("span", {
                            className: (0, i.default)("box-border h-10 w-10 rounded-md border border-black/5 bg-cover bg-center dark:border-white/20", _ && "group-hover:bg-black"),
                            style: {
                                backgroundImage: void 0 !== j ? "url(".concat(j, ")") : "none"
                            },
                            children: _ && (0, a.jsx)(f.ZP, {
                                icon: l._hL,
                                className: (0, i.default)("h-5 w-5", "hidden group-hover:block")
                            })
                        }) : (0, a.jsxs)(a.Fragment, {
                            children: [(0, a.jsxs)("span", {
                                className: (0, i.default)("rounded-l-md bg-gray-500 px-2 py-2 text-white transition-colors dark:bg-gray-500", _ && "group-hover:bg-black"),
                                children: [(0, a.jsx)(f.ZP, {
                                    icon: o.Z,
                                    className: (0, i.default)("h-5 w-5", _ && "group-hover:hidden")
                                }), _ && (0, a.jsx)(f.ZP, {
                                    icon: l._hL,
                                    className: (0, i.default)("h-5 w-5", "hidden group-hover:block")
                                })]
                            }), (0, a.jsx)("span", {
                                className: "flex max-w-xs items-center truncate rounded-r-md bg-gray-50 px-3 py-2 font-medium",
                                children: (0, a.jsx)("span", {
                                    className: "truncate",
                                    children: w
                                })
                            })]
                        })
                    }), void 0 !== b && b < 100 && (0, a.jsx)("div", {
                        className: "absolute right-1 top-1 -translate-y-1/2 translate-x-1/2 rounded-full border border-white bg-white p-0.5 text-blue-700 dark:border-gray-700",
                        children: (0, a.jsx)(g, {
                            percentage: b,
                            className: "h-4 w-4"
                        })
                    }), null != v && (0, a.jsx)("button", {
                        onClick: v,
                        className: "absolute right-1 top-1 -translate-y-1/2 translate-x-1/2 rounded-full border border-white bg-gray-500 p-0.5 text-white transition-colors hover:bg-black hover:opacity-100 group-hover:opacity-100 md:opacity-0",
                        children: (0, a.jsx)(c.u, {
                            label: C.formatMessage(m.removeFile),
                            side: "top",
                            sideOffset: 4,
                            children: (0, a.jsx)(f.ZP, {
                                icon: l.q5L
                            })
                        })
                    })]
                })
            }
            var m = (0, u.vU)({
                removeFile: {
                    id: "FileTile.removeFile",
                    defaultMessage: "Remove file",
                    description: "Tooltip label for removing a file from the textarea"
                }
            })
        },
        51973: function(e, t, n) {
            var r = n(39324),
                a = n(22830),
                o = n(4337),
                i = n(35250),
                s = n(19841),
                l = n(70079),
                d = n(21389),
                u = n(88327);

            function c() {
                var e = (0, o._)(["absolute right-0 top-1/2 -translate-y-1/2"]);
                return c = function() {
                    return e
                }, e
            }
            t.Z = l.forwardRef(function(e, t) {
                var n = e.name,
                    o = e.placeholder,
                    d = e.type,
                    c = e.displayName,
                    g = e.onChange,
                    p = e.onBlur,
                    h = e.value,
                    m = e.saveOnBlur,
                    v = e.icon,
                    x = e.onInputIconClick,
                    b = e.className,
                    y = e.autoComplete,
                    C = e.autoFocus,
                    _ = e.onPressEnter,
                    w = (0, a._)((0, l.useState)(h), 2),
                    M = w[0],
                    j = w[1],
                    T = (0, l.useCallback)(function(e) {
                        null == p || p(e), m && j(e.target.value)
                    }, [p, m]),
                    k = (0, l.useCallback)(function(e) {
                        null == g || g(e), m && j(e.target.value)
                    }, [g, m]),
                    I = (0, l.useCallback)(function(e) {
                        "Enter" === e.key && _ && (e.preventDefault(), _())
                    }, [_]);
                (0, l.useEffect)(function() {
                    j(h)
                }, [h]);
                var P = (0, r._)({}, m ? {} : {
                    value: h
                }, m ? {
                    value: M
                } : {});
                return (0, i.jsxs)("div", {
                    className: (0, s.default)("rounded-md border border-gray-300 px-3 py-2 shadow-sm focus-within:border-indigo-600 focus-within:ring-1 focus-within:ring-indigo-600 dark:bg-gray-700", b),
                    children: [(0, i.jsx)("label", {
                        htmlFor: n,
                        className: "block text-xs font-medium text-gray-900 dark:text-gray-100",
                        children: c
                    }), (0, i.jsxs)("div", {
                        className: (0, s.default)(c && "mt-1", "relative"),
                        children: [(0, i.jsx)("input", (0, r._)({
                            ref: t,
                            type: d,
                            name: n,
                            id: n,
                            className: (0, s.default)("block w-full border-0 p-0 text-gray-900 placeholder-gray-500 outline-none focus:ring-0 dark:bg-gray-700 dark:text-gray-100 sm:text-sm", v && "pr-6"),
                            placeholder: o,
                            onBlur: T,
                            onChange: k,
                            onKeyDown: I,
                            autoComplete: y,
                            autoFocus: C
                        }, P)), v && (0, i.jsx)(f, {
                            onClick: x,
                            children: (0, i.jsx)(u.ZP, {
                                icon: v
                            })
                        })]
                    })]
                })
            });
            var f = d.Z.button(c())
        },
        40058: function(e, t, n) {
            n.d(t, {
                WT: function() {
                    return v
                },
                YE: function() {
                    return m
                },
                ZP: function() {
                    return x
                }
            });
            var r = n(81949),
                a = n(35250),
                o = n(77311),
                i = n(70079),
                s = n(50795),
                l = n(82081),
                d = n(88327),
                u = n(35588),
                c = n(15610),
                f = n(98076),
                g = n(44510),
                p = n(65642),
                h = n(16592),
                m = "gpt-4-upsell",
                v = "gpt_4";

            function x(e) {
                var t = e.onModelChange,
                    n = e.shouldShowPlusUpsell,
                    x = e.currentModel,
                    b = (0, f.BT)(),
                    y = (0, h.ZP)(),
                    C = (0, g.xT)(),
                    _ = (0, u.t)(function(e) {
                        return {
                            setShowAccountPaymentModal: e.setShowAccountPaymentModal,
                            showAccountPaymentModal: e.showAccountPaymentModal
                        }
                    }).setShowAccountPaymentModal,
                    w = (0, i.useCallback)(function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "upgrade-hover-button";
                        s.o.logEvent(l.a.openModalAccountPaymentfromModelPicker, {
                            content: e
                        }), _(!0)
                    }, [_]),
                    M = (0, p.Z)(),
                    j = (0, i.useMemo)(function() {
                        return {
                            categoryId: "gpt_4",
                            value: m,
                            name: "GPT-4",
                            description: "Our most capable model, great for tasks that require creativity and advanced reasoning.",
                            disclaimer: "Available exclusively to Plus users\n\n".concat(M.textareaDisclaimer),
                            buttonActiveClass: "text-brand-purple",
                            buttonHoverClass: "group-hover/button:text-brand-purple",
                            iconClass: "group-hover/option:!text-brand-purple group-hover/options:text-gray-500",
                            icon: d.Bj,
                            iconAfter: o.Z,
                            iconAfterClass: "group-hover/options:text-gray-500 !text-gray-500 -ml-2",
                            options: [],
                            disabled: !1,
                            showSelectedValueBelow: !1,
                            ctaContentText: "Upgrade to ChatGPT Plus",
                            onCtaContentClick: w
                        }
                    }, [M, w]),
                    T = (0, i.useCallback)(function(e) {
                        if (b !== e) {
                            if (n && e === m) {
                                w("gpt-4-lock-button");
                                return
                            }
                            t(e), C(e), s.o.logEvent(l.a.toggleModel, {
                                model: e
                            })
                        }
                    }, [b, C, t, w, n]),
                    k = (0, i.useMemo)(function() {
                        return y ? y.some(function(e) {
                            return e.categoryId === v
                        }) ? y : n ? (0, r._)(y).concat([j]) : y : []
                    }, [y, j, n]);
                return 1 === k.length ? null : (0, a.jsx)(c.Z, {
                    value: null == x ? void 0 : x.id,
                    onChange: T,
                    items: k
                })
            }
        },
        32566: function(e, t, n) {
            n.d(t, {
                Z: function() {
                    return em
                },
                g: function() {
                    return eI
                }
            });
            var r = n(39324),
                a = n(22830),
                o = n(4337),
                i = n(35250),
                s = n(19841),
                l = n(97296),
                d = n(70079),
                u = n(76483),
                c = n(2827),
                f = n(1454),
                g = n(70671),
                p = n(32004),
                h = n(94968),
                m = n(21389),
                v = n(50795),
                x = n(82081),
                b = n(16920),
                y = n(75641),
                C = n(95954),
                _ = n(31621),
                w = n(46020),
                M = n(54118),
                j = n(32542),
                T = n(33669),
                k = n(67273),
                I = n(45635),
                P = n(47044),
                N = n(54986),
                S = n(77224),
                E = n(89314),
                Z = n(78781),
                D = n(63031),
                R = n(78018),
                F = n(88327),
                L = n(48397),
                B = n(88798),
                A = n(42569),
                U = n(16592),
                O = n(65261),
                H = n(58268),
                W = n(21722),
                z = n(75883),
                G = n(6013),
                J = n(32148),
                q = n(54655),
                V = n(5268),
                $ = n(99486);

            function Q() {
                return (0, V.a)(["visionContent"], (0, W._)(function() {
                    return (0, z.Jh)(this, function(e) {
                        switch (e.label) {
                            case 0:
                                return [4, $.ZP.getContent("vision").catch(function() {
                                    return B.m.danger("Failed to load content"), {
                                        onboarding: {
                                            title: "",
                                            content: []
                                        }
                                    }
                                })];
                            case 1:
                                return [2, e.sent()]
                        }
                    })
                }))
            }

            function X(e) {
                var t = e.onPick,
                    n = (0, a._)((0, d.useState)(!1), 2),
                    o = n[0],
                    s = n[1],
                    l = (0, d.useCallback)(function(e, n) {
                        s(!1), t(e, n)
                    }, [t]),
                    u = (0, g.Z)(),
                    c = Q().data,
                    f = (null == c ? void 0 : c.examples) || [];
                return 0 === f.length ? null : (0, i.jsxs)(G.fC, {
                    onOpenChange: s,
                    open: o,
                    children: [(0, i.jsx)(G.xz, {
                        asChild: !0,
                        children: (0, i.jsx)("div", {
                            className: "cursor-pointer",
                            children: (0, i.jsx)(I.u, {
                                label: u.formatMessage(Y.tryAnExample),
                                side: "top",
                                sideOffset: 4,
                                open: !0 !== o && void 0,
                                children: (0, i.jsxs)("div", {
                                    children: [(0, i.jsx)(F.ZP, {
                                        className: "text-gray-500 dark:text-gray-300",
                                        icon: q.DcN
                                    }), (0, i.jsx)(J.T, {
                                        children: u.formatMessage(Y.tryAnExample)
                                    })]
                                })
                            })
                        })
                    }), (0, i.jsx)(G.h_, {
                        children: (0, i.jsxs)(G.VY, {
                            side: "top",
                            sideOffset: 8,
                            className: "relative max-w-md animate-slideUpAndFade select-none rounded-xl border-gray-100 bg-white p-3 text-sm text-gray-600 shadow-xs dark:bg-gray-900 dark:text-white",
                            children: [(0, i.jsxs)("div", {
                                className: "mb-3 flex items-center justify-center gap-2 text-center text-sm font-medium",
                                children: [(0, i.jsx)(F.ZP, {
                                    className: "text-gray-500 dark:text-gray-300",
                                    icon: q.DcN
                                }), (0, i.jsx)(p.Z, (0, r._)({}, Y.tryAnExample))]
                            }), (0, i.jsx)("div", {
                                className: "flex flex-col gap-2",
                                children: f.map(function(e) {
                                    return (0, i.jsx)(K, {
                                        imageUrl: e.imageUrl,
                                        thumbnailUrl: e.thumbnailUrl,
                                        label: e.label,
                                        prompt: e.prompt,
                                        onPick: l
                                    }, e.imageUrl)
                                })
                            })]
                        })
                    })]
                })
            }

            function K(e) {
                var t = e.imageUrl,
                    n = e.thumbnailUrl,
                    r = e.label,
                    a = e.prompt,
                    o = e.onPick,
                    s = (0, d.useCallback)((0, W._)(function() {
                        var e, n, r, i, s;
                        return (0, z.Jh)(this, function(l) {
                            switch (l.label) {
                                case 0:
                                    return l.trys.push([0, 3, , 4]), [4, fetch(t)];
                                case 1:
                                    if (!(e = l.sent()).ok) throw Error("Failed to load example image");
                                    return [4, e.blob()];
                                case 2:
                                    return n = l.sent(), i = (r = t.split("/"))[r.length - 1], o(new File([n], i, {
                                        type: null !== (s = e.headers.get("Content-Type")) && void 0 !== s ? s : void 0
                                    }), a), [3, 4];
                                case 3:
                                    return l.sent(), B.m.danger("Failed to load example image"), [3, 4];
                                case 4:
                                    return [2]
                            }
                        })
                    }), [t, o, a]);
                return (0, i.jsxs)("button", {
                    className: "group flex h-14 w-64 flex-row items-stretch overflow-hidden rounded text-left",
                    onClick: s,
                    children: [(0, i.jsx)("div", {
                        className: "w-14 flex-none bg-cover bg-center",
                        style: {
                            backgroundImage: "url(".concat(n, ")")
                        }
                    }), (0, i.jsxs)("div", {
                        className: "items-left flex min-w-0 flex-auto flex-col justify-center bg-gray-50 px-3 transition group-hover:bg-gray-100 dark:bg-gray-800 dark:group-hover:bg-gray-700",
                        children: [(0, i.jsx)("div", {
                            className: "font-medium leading-none",
                            children: r
                        }), (0, i.jsx)("div", {
                            className: "mt-2 truncate text-xs leading-none text-gray-600 dark:text-gray-300",
                            children: a
                        })]
                    })]
                })
            }
            var Y = (0, h.vU)({
                    tryAnExample: {
                        id: "VisionExamplePicker.tryAnExample",
                        defaultMessage: "Try an example",
                        description: "Label for examples popover"
                    }
                }),
                ee = n(13002),
                et = n(6948),
                en = n(97747),
                er = n(89368),
                ea = "oai/apps/hasSeenVisionOnboarding",
                eo = (0, h.vU)({
                    contentModalButton: {
                        id: "VisionOnboarding.contentModalButton",
                        defaultMessage: "Continue",
                        description: "Continue button in the content modal"
                    }
                });

            function ei(e) {
                var t, n = e.currentModelConfig,
                    r = e.disabled,
                    o = (0, a._)((0, d.useState)(function() {
                        var e = et.m.getItem(ea);
                        return "number" == typeof e && e
                    }), 2),
                    s = o[0],
                    l = o[1];
                return (null === (t = null == n ? void 0 : n.product_features.attachments) || void 0 === t ? void 0 : t.type) !== y.Cd.Multimodal || r || !1 !== s ? null : (0, i.jsx)(el, {
                    onDismiss: function() {
                        var e = Date.now();
                        et.m.setItem(ea, e), l(e)
                    }
                })
            }
            var es = {
                lock: ee.Zp7,
                use_cases: ee.dvR
            };

            function el(e) {
                var t = e.onDismiss,
                    n = (0, g.Z)(),
                    r = Q().data,
                    a = null == r ? void 0 : r.onboarding;
                return a ? (0, i.jsx)(er.Z, {
                    isOpen: !0,
                    onClose: t,
                    type: "success",
                    primaryButton: (0, i.jsx)(en.ZP.Button, {
                        title: n.formatMessage(eo.contentModalButton),
                        color: "primary",
                        onClick: t
                    }),
                    title: a.title,
                    size: "custom",
                    className: "max-w-[510px] text-gray-800 outline-none dark:text-gray-300",
                    children: a.content.map(function(e, t) {
                        if ("paragraph" === e.type) return (0, i.jsx)("p", {
                            children: e.text
                        }, t);
                        if ("callout" === e.type) {
                            var n;
                            return (0, i.jsx)(ed, {
                                icon: null !== (n = es[e.icon]) && void 0 !== n ? n : es.beaker,
                                title: e.title,
                                text: e.text,
                                color: e.color || 0
                            }, t)
                        }
                        return null
                    })
                }) : null
            }

            function ed(e) {
                var t = e.icon,
                    n = e.title,
                    r = e.text,
                    a = e.color;
                return (0, i.jsxs)("div", {
                    className: "my-4 flex flex-row",
                    children: [(0, i.jsx)("div", {
                        className: (0, s.default)("w-14 flex-none pl-2 pt-2", 0 === a ? "text-brand-green" : "text-brand-purple"),
                        children: (0, i.jsx)(t, {
                            size: 32
                        })
                    }), (0, i.jsxs)("div", {
                        className: "max-w-60 flex-auto",
                        children: [(0, i.jsx)("div", {
                            className: "font-bold text-black dark:text-white",
                            children: n
                        }), (0, i.jsx)("div", {
                            children: r
                        })]
                    })]
                })
            }

            function eu() {
                var e = (0, o._)(["mb-3 px-[10px] md:pl-0 md:pr-4 flex flex-wrap gap-2"]);
                return eu = function() {
                    return e
                }, e
            }

            function ec() {
                var e = (0, o._)(["absolute p-1 rounded-md bottom-[10px] md:bottom-3 md:p-2 md:right-3 dark:hover:bg-gray-900 dark:disabled:hover:bg-transparent right-2 disabled:text-gray-400 enabled:bg-brand-purple text-white"]);
                return ec = function() {
                    return e
                }, e
            }

            function ef() {
                var e = (0, o._)(["absolute left-4 bottom-2 md:left-4 md:bottom-3.5"]);
                return ef = function() {
                    return e
                }, e
            }

            function eg() {
                var e = (0, o._)(["absolute p-1 bottom-[10px] md:bottom-3 md:p-2 right-12 transition-opacity ", ""]);
                return eg = function() {
                    return e
                }, e
            }

            function ep() {
                var e = (0, o._)(["\nflex flex-col w-full py-[10px] flex-grow md:py-4 md:pl-4 relative border border-black/10 bg-white dark:border-gray-900/50 dark:text-white dark:bg-gray-700 rounded-xl shadow-xs dark:shadow-xs\n", "\n", "\n"]);
                return ep = function() {
                    return e
                }, e
            }

            function eh() {
                var e = (0, o._)(["", " flex ml-1 md:w-full md:m-auto md:mb-4 gap-0 md:gap-2 justify-center"]);
                return eh = function() {
                    return e
                }, e
            }
            var em = (0, d.forwardRef)(function(e, t) {
                var n, o, l, f, p, h = e.onAbortCompletion,
                    m = e.onCreateNewCompletion,
                    k = e.onRequestMoreCompletions,
                    L = e.onContinueGenerating,
                    W = e.canRegenerateResponse,
                    z = e.currentModelId,
                    G = e.clientThreadId,
                    J = e.isCompletionInProgress,
                    q = e.className,
                    V = e.disabled,
                    $ = void 0 !== V && V,
                    Q = e.shouldRetry,
                    K = e.canPause,
                    Y = void 0 !== K && K,
                    ee = e.canContinue,
                    et = e.suggestions,
                    en = e.isInteractableSharedThread,
                    er = (0, g.Z)(),
                    ea = (0, _.oq)(G),
                    eo = (0, _.Hk)(G),
                    es = (0, U.Ri)(z),
                    el = (0, T.w$)(),
                    ed = (0, d.useContext)(j.QL).historyDisabled,
                    eu = (0, d.useRef)(null),
                    ec = (0, a._)((0, d.useState)(""), 2),
                    ef = ec[0],
                    eg = ec[1],
                    ep = (0, A.B9)(),
                    eh = null !== z ? ep.get(z) : void 0,
                    em = (0, M.Fl)().isCodeInterpreterAvailable,
                    ex = S.AJ.None;
                em && (null === (n = null == eh ? void 0 : eh.product_features.attachments) || void 0 === n ? void 0 : n.type) === y.Cd.CodeInterpreter ? ex = S.AJ.Interpreter : (null === (o = null == eh ? void 0 : eh.product_features.attachments) || void 0 === o ? void 0 : o.type) === y.Cd.Multimodal || (null == eh ? void 0 : null === (l = eh.enabledTools) || void 0 === l ? void 0 : l.includes("Hi Jane, come visit us for lunch at OpenAI? \uD83D\uDC9C")) ? ex = S.AJ.Multimodal : (null === (f = null == eh ? void 0 : eh.product_features.attachments) || void 0 === f ? void 0 : f.type) === y.Cd.Retrieval && (ex = S.AJ.Retrieval);
                var ey = ex !== S.AJ.None,
                    eC = (0, Z.gF)(function(e) {
                        return e.files
                    }),
                    e_ = eC.length > 0,
                    ew = (0, Z.gF)(Z.HR.hasUploadInProgress),
                    eM = e_ ? !ew : "" !== ef,
                    ej = eC.length >= P.Z0,
                    eT = eM && !$ && !J,
                    eI = (0, O.S)(er, eh),
                    eD = eI.handleFileAccepted,
                    eF = eI.handleFileRejected,
                    eL = (0, u.uI)((0, r._)({
                        disabled: $ || !ey || ej,
                        noClick: !0,
                        onDropAccepted: eD,
                        onDropRejected: eF,
                        multiple: !0,
                        maxSize: P.xC
                    }, (0, D.Z8)(eh))),
                    eB = eL.getInputProps,
                    eA = eL.open,
                    eU = (0, d.useCallback)(function() {
                        eg(""), (0, c.SI)(1, eu.current), (0, H.sb)(), Z.Dw.reset()
                    }, []),
                    eO = (0, d.useCallback)(function(e) {
                        if (null == e || e.preventDefault(), !$) {
                            var t, n, r = Z.HR.getReadyFiles(Z.gF.getState()),
                                a = null === (t = eu.current) || void 0 === t ? void 0 : t.value,
                                o = "".concat(null === (n = eu.current) || void 0 === n ? void 0 : n.dataset.id, "-nextPrompt");
                            if (eM) {
                                var i = null != a ? a : "",
                                    s = [],
                                    l = [];
                                r.forEach(function(e) {
                                    ex === S.AJ.Interpreter || ex === S.AJ.Retrieval ? s.push(e.file) : ex === S.AJ.Multimodal && "width" in e.file && "height" in e.file && l.push({
                                        asset_pointer: (0, D.L8)(e.file.id),
                                        size_bytes: e.file.size,
                                        width: e.file.width,
                                        height: e.file.height
                                    })
                                }), ex === S.AJ.Multimodal && l.length > 0 && (l.push(null != a ? a : ""), i = {
                                    content_type: C.PX.MultimodalText,
                                    parts: l
                                }), w.vm.hideThreadHeader(), m(o, {
                                    content: i,
                                    attachments: s
                                }, {
                                    eventSource: e ? "mouse" : "keyboard"
                                }, {
                                    suggestions: et
                                }), eU(), void 0 !== et && b.m9.logEvent("chatgpt_prompt_ignore_suggestions")
                            }
                        }
                    }, [$, eM, m, et, eU, ex]),
                    eH = (0, d.useMemo)(function() {
                        return {
                            Enter: {
                                validator: function() {
                                    return eT
                                },
                                handler: function(e) {
                                    (e.metaKey || el && !e.shiftKey && !e.nativeEvent.isComposing) && (e.preventDefault(), eO())
                                }
                            },
                            Escape: {
                                validator: function() {
                                    return Y && J
                                },
                                handler: function() {
                                    h("", eo), v.o.logEvent(x.a.pauseCompletion, {
                                        threadId: _.tQ.getServerThreadId(G),
                                        eventSource: "keyboard"
                                    })
                                }
                            }
                        }
                    }, [eT, el, J, eO, Y, h, eo, G]),
                    eW = (0, d.useCallback)(function(e) {
                        var t;
                        (null === (t = eH[e.key]) || void 0 === t ? void 0 : t.validator(e)) && eH[e.key].handler(e)
                    }, [eH]),
                    ez = (0, d.useCallback)(function(e) {
                        if (e.clipboardData.files.length > 0 && ex === S.AJ.Multimodal) {
                            var t, n = e.clipboardData.files[0],
                                r = null === (t = null == eh ? void 0 : eh.product_features.attachments) || void 0 === t ? void 0 : t.accepted_mime_types;
                            if (void 0 !== r && !r.includes(n.type)) {
                                B.m.danger(er.formatMessage(eR.unsupportedFileType, {
                                    file_type: n.type
                                })), e.preventDefault();
                                return
                            }
                            w.vm.hideThreadHeader(), Z.Dw.uploadFile((0, E.W7)(n), n, ex, er)
                        }
                    }, [ex, null === (p = null == eh ? void 0 : eh.product_features.attachments) || void 0 === p ? void 0 : p.accepted_mime_types, er]);
                (0, d.useEffect)(function() {
                    var e;
                    null === (e = eu.current) || void 0 === e || e.focus()
                }, []), (0, d.useEffect)(function() {
                    Z.Dw.reset()
                }, [z]);
                var eG = (0, i.jsx)(eb, {
                    clientThreadId: G,
                    currentLeafId: ea,
                    currentRequestId: eo,
                    shouldRetry: Q,
                    canRegenerateResponse: void 0 !== W && W,
                    canContinue: void 0 !== ee && ee,
                    canPause: Y,
                    suggestions: et,
                    isCompletionInProgress: J,
                    onAbortCompletion: h,
                    onCreateNewCompletion: m,
                    onRequestMoreCompletions: k,
                    onContinueGenerating: L,
                    onResetState: eU
                });
                (0, d.useImperativeHandle)(t, function() {
                    return {
                        setInputValue: eg
                    }
                });
                var eJ = eT ? {
                    backgroundColor: null == es ? void 0 : es.backgroundColor
                } : {};
                return (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)("form", {
                        className: q,
                        onSubmit: eO,
                        children: (0, i.jsxs)("div", {
                            className: "relative flex h-full flex-1 items-stretch md:flex-col",
                            children: [el && eG, !Q && (0, i.jsxs)(eZ, {
                                $disabled: Q,
                                $historyDisabled: ed,
                                children: [e_ && (0, i.jsx)(eP, {
                                    children: eC.map(function(e) {
                                        return (0, i.jsx)(R.Z, {
                                            onRemoveFileClick: function() {
                                                return Z.Dw.remove(e.tempId)
                                            },
                                            file: e.file.name,
                                            loadingPercentage: e.status === S.Wk.Uploading ? e.progress : void 0
                                        }, e.tempId)
                                    })
                                }), (0, i.jsx)(c.ZP, {
                                    id: ek,
                                    tabIndex: 0,
                                    value: ef,
                                    "data-id": ea,
                                    ref: eu,
                                    style: {
                                        maxHeight: "200px"
                                    },
                                    rows: 1,
                                    onKeyDown: eW,
                                    onChange: function(e) {
                                        w.vm.hideThreadHeader(), eg(e.target.value)
                                    },
                                    onPaste: ez,
                                    placeholder: en ? er.formatMessage(eR.continueSharedConversationPlaceholder) : er.formatMessage(eR.placeholder),
                                    className: (0, s.default)("m-0 w-full resize-none border-0 bg-transparent p-0 pr-10 focus:ring-0 focus-visible:ring-0 dark:bg-transparent md:pr-12", !ej && ey ? "pl-12 md:pl-[30px]" : "pl-3 md:pl-0"),
                                    disabled: Q
                                }), !ej && ey && (0, i.jsx)(eS, {
                                    children: (0, i.jsx)(N.Z, {
                                        openFileDialog: eA,
                                        disabled: Q,
                                        getInputProps: eB,
                                        attachmentsType: eh.product_features.attachments.type,
                                        onSelectRecentFile: function(e) {
                                            return Z.Dw.addRecentFile(JSON.stringify({
                                                file: e.name,
                                                currentTime: new Date().toString()
                                            }), e, ex, er)
                                        }
                                    })
                                }), ex === S.AJ.Multimodal && (0, i.jsx)(eE, {
                                    $visible: !eM && !ej && !J,
                                    children: (0, i.jsx)(X, {
                                        onPick: function(e, t) {
                                            Z.Dw.uploadFile((0, E.W7)(e), e, ex, er), eg(t)
                                        }
                                    })
                                }), (0, i.jsx)(eN, {
                                    disabled: !eT || Q,
                                    style: eJ,
                                    className: (0, s.default)("bottom-1.5", J ? "disabled:bottom-0.5 md:disabled:bottom-0" : "transition-colors disabled:opacity-40"),
                                    children: J ? (0, i.jsx)("div", {
                                        className: "text-2xl",
                                        children: (0, i.jsx)(ev, {})
                                    }) : (0, i.jsx)(I.u, {
                                        label: er.formatMessage(eR.sendMessageTooltip),
                                        children: (0, i.jsx)(F.ZP, {
                                            icon: F.IX,
                                            size: "small",
                                            className: "m-1 md:m-0"
                                        })
                                    })
                                })]
                            }), !el && eG]
                        })
                    }), (0, i.jsx)(ei, {
                        currentModelConfig: eh,
                        disabled: en
                    })]
                })
            });

            function ev() {
                var e = (0, a._)((0, d.useState)(0), 2),
                    t = e[0],
                    n = e[1];
                (0, d.useEffect)(function() {
                    var e = setInterval(function() {
                        n(function(e) {
                            return (e + 1) % 3
                        })
                    }, 350);
                    return function() {
                        return clearInterval(e)
                    }
                }, []);
                for (var r = [], o = 0; o < 3; o++) r.push((0, i.jsx)("span", {
                    className: o <= t ? "" : "invisible",
                    children: "\xb7"
                }, o));
                return (0, i.jsx)(i.Fragment, {
                    children: r
                })
            }
            var ex = function(e, t) {
                b.m9.logEvent("chatgpt_prompt_use_suggestion", (0, L.bf)(e), {
                    index: "".concat(t),
                    type: (0, L.QO)(e) ? L.jK.Reply : L.jK.Starter
                }), (0, L.QO)(e) ? v.o.logEvent(x.a.useSuggestedReply, {
                    value: (0, L.bf)(e),
                    prompt_type: L.jK.Reply
                }) : v.o.logEvent(x.a.useStarterPrompt, {
                    value: (0, L.bf)(e),
                    prompt_type: L.jK.Starter,
                    title: e.title
                })
            };

            function eb(e) {
                var t = e.clientThreadId,
                    n = e.currentLeafId,
                    r = e.currentRequestId,
                    a = e.shouldRetry,
                    o = e.canRegenerateResponse,
                    s = e.canContinue,
                    l = e.canPause,
                    u = e.suggestions,
                    c = e.isCompletionInProgress,
                    f = e.onAbortCompletion,
                    g = e.onCreateNewCompletion,
                    p = e.onRequestMoreCompletions,
                    h = e.onContinueGenerating,
                    m = e.onResetState,
                    b = (0, d.useCallback)(function() {
                        f("", r), p(n, {
                            eventSource: "mouse"
                        }), eI()
                    }, [f, p, r, n]),
                    y = (0, d.useCallback)(function() {
                        f("", r), v.o.logEvent(x.a.pauseCompletion, {
                            threadId: _.tQ.getServerThreadId(t),
                            eventSource: "mouse"
                        }), eI()
                    }, [f, t, r]),
                    C = (0, d.useCallback)(function() {
                        h(n), eI()
                    }, [h, n]),
                    M = (0, d.useCallback)(function(e, t) {
                        w.vm.hideThreadHeader(), g("".concat(n, "-nextPrompt"), {
                            content: (0, L.bf)(e),
                            attachments: []
                        }, {
                            eventSource: "mouse"
                        }, {
                            suggestions: u
                        }), m(), ex(e, t), eI()
                    }, [m, n, g, u]);
                return a || o || s || l || void 0 !== u ? a ? (0, i.jsx)(eT, {
                    canRegenerateResponse: o,
                    onRegenerateResponse: b
                }) : (0, i.jsx)(eC, {
                    canContinue: s,
                    canPause: l,
                    canRegenerateResponse: o,
                    isCompletionInProgress: c,
                    onHandleContinueGenerating: C,
                    onRegenerateResponse: b,
                    onSelectingSuggestedReply: M,
                    onStopGenerating: y,
                    suggestions: u
                }) : null
            }
            var ey = function(e) {
                    var t = e.children;
                    return (0, i.jsx)(l.E.div, {
                        initial: {
                            opacity: 0
                        },
                        animate: {
                            opacity: 1
                        },
                        exit: {
                            opacity: 0,
                            transition: {
                                duration: .1,
                                delay: 0
                            }
                        },
                        transition: {
                            type: "tween",
                            duration: .3,
                            delay: .2
                        },
                        children: t
                    })
                },
                eC = function(e) {
                    var t = e.canContinue,
                        n = e.canPause,
                        r = e.canRegenerateResponse,
                        a = e.isCompletionInProgress,
                        o = e.onRegenerateResponse,
                        s = e.onStopGenerating,
                        l = e.onHandleContinueGenerating,
                        d = e.onSelectingSuggestedReply,
                        u = e.suggestions;
                    return (0, i.jsx)("div", {
                        children: (0, i.jsxs)(eD, {
                            children: [(0, i.jsx)("div", {
                                className: "grow",
                                children: void 0 !== u && (0, i.jsx)(L.Gt, {
                                    suggestions: u,
                                    onSelectingSuggestedReply: d
                                })
                            }), (0, i.jsx)(e_, {
                                canContinue: t,
                                canPause: n,
                                canRegenerateResponse: r,
                                isCompletionInProgress: a,
                                onHandleContinueGenerating: l,
                                onRegenerateResponse: o,
                                onStopGenerating: s
                            })]
                        })
                    })
                },
                e_ = function(e) {
                    var t = e.canContinue,
                        n = e.canPause,
                        r = e.canRegenerateResponse,
                        a = e.isCompletionInProgress,
                        o = e.onHandleContinueGenerating,
                        s = e.onRegenerateResponse,
                        l = e.onStopGenerating;
                    return t ? (0, i.jsx)("div", {
                        className: "flex items-center md:items-end",
                        children: (0, i.jsx)(ew, {
                            onHandleContinueGenerating: o
                        })
                    }) : n && a ? (0, i.jsx)("div", {
                        className: "flex items-center md:items-end",
                        children: (0, i.jsx)(eM, {
                            onStopGenerating: l
                        })
                    }) : r ? (0, i.jsx)("div", {
                        className: "flex items-center md:items-end",
                        children: (0, i.jsx)(ej, {
                            onRegenerateResponse: s
                        })
                    }) : null
                },
                ew = function(e) {
                    var t = e.onHandleContinueGenerating,
                        n = (0, T.w$)();
                    return (0, i.jsx)(ey, {
                        children: (0, i.jsxs)(k.z, {
                            as: "button",
                            color: "neutral",
                            onClick: t,
                            className: "whitespace-nowrap border-0 md:border",
                            children: [(0, i.jsx)(F.ZP, {
                                icon: f.lV_,
                                className: "-rotate-180",
                                size: n ? "xsmall" : "small"
                            }), n && (0, i.jsx)(p.Z, (0, r._)({}, eR.continueGenerating))]
                        })
                    })
                },
                eM = function(e) {
                    var t = e.onStopGenerating,
                        n = (0, T.w$)();
                    return (0, i.jsx)(ey, {
                        children: (0, i.jsxs)(k.z, {
                            as: "button",
                            color: "neutral",
                            onClick: t,
                            className: "whitespace-nowrap border-0 md:border",
                            children: [(0, i.jsx)(F.ZP, {
                                icon: f.jxP,
                                size: n ? "xsmall" : "small"
                            }), n && (0, i.jsx)(p.Z, (0, r._)({}, eR.stopGenerating))]
                        })
                    })
                },
                ej = function(e) {
                    var t = e.shouldRetry,
                        n = void 0 !== t && t,
                        a = e.onRegenerateResponse,
                        o = (0, T.w$)();
                    return (0, i.jsx)(ey, {
                        children: (0, i.jsxs)(k.z, {
                            as: "button",
                            color: n ? "primary" : o ? "neutral" : "none",
                            onClick: a,
                            className: (0, s.default)("whitespace-nowrap", n ? "m-auto" : "-z-0 border-0 md:border"),
                            children: [(0, i.jsx)(F.ZP, {
                                icon: f.Qxo,
                                size: o ? "xsmall" : "small",
                                className: "flex-shrink-0"
                            }), (o || n) && (0, i.jsx)(p.Z, (0, r._)({}, eR.regenerateResponse))]
                        })
                    })
                },
                eT = function(e) {
                    var t = e.canRegenerateResponse,
                        n = e.onRegenerateResponse;
                    return (0, i.jsxs)("div", {
                        className: "w-full",
                        children: [(0, i.jsx)("div", {
                            className: "mb-3 text-center text-xs",
                            children: (0, i.jsx)(p.Z, (0, r._)({}, eR.errorGeneratingResponse))
                        }), (0, i.jsx)(eD, {
                            $shouldRetry: !0,
                            children: t && (0, i.jsx)("div", {
                                className: "flex flex-col justify-end",
                                children: (0, i.jsx)(ej, {
                                    onRegenerateResponse: n,
                                    shouldRetry: !0
                                })
                            })
                        })]
                    })
                },
                ek = "prompt-textarea";

            function eI() {
                var e;
                null === (e = document.getElementById(ek)) || void 0 === e || e.focus()
            }
            var eP = m.Z.div(eu()),
                eN = m.Z.button(ec()),
                eS = m.Z.div(ef()),
                eE = m.Z.div(eg(), function(e) {
                    return e.$visible ? "opacity-100" : "opacity-0 pointer-events-none"
                }),
                eZ = m.Z.div(ep(), function(e) {
                    return e.$historyDisabled ? "bg-gray-900 text-white shadow-xs dark:bg-gray-900 dark:text-white dark:shadow-xs" : ""
                }, function(e) {
                    return e.$disabled && "bg-gray-100"
                }),
                eD = m.Z.div(eh(), function(e) {
                    return e.$shouldRetry ? "" : "h-full"
                }),
                eR = (0, h.vU)({
                    errorGeneratingResponse: {
                        id: "PromptTextarea.errorGeneratingResponse",
                        defaultMessage: "There was an error generating a response",
                        description: "Error message shown when the response generation fails"
                    },
                    regenerateResponse: {
                        id: "PromptTextarea.regenerateResponse",
                        defaultMessage: "Regenerate",
                        description: "Button label for regenerating response"
                    },
                    continueGenerating: {
                        id: "PromptTextarea.continueGenerating",
                        defaultMessage: "Continue generating",
                        description: "Button label for continuing response generation"
                    },
                    stopGenerating: {
                        id: "PromptTextarea.stopGenerating",
                        defaultMessage: "Stop generating",
                        description: "Button label for stopping response generation"
                    },
                    placeholder: {
                        id: "PromptTextarea.placeholder",
                        defaultMessage: "Send a message",
                        description: "Placeholder text for the input field"
                    },
                    continueSharedConversationPlaceholder: {
                        id: "PromptTextarea.continueSharedConversationPlaceholder",
                        defaultMessage: "Send a message to continue the conversation.",
                        description: "Placeholder text for the input field when viewing a shared chat"
                    },
                    sendMessageTooltip: {
                        id: "PromptTextarea.sendMessageTooltip",
                        defaultMessage: "Send message",
                        description: "Tooltip for the send message button"
                    },
                    pauseTooltip: {
                        id: "PromptTextarea.pauseTooltip",
                        defaultMessage: "Pause",
                        description: "Tooltip for the pause button"
                    },
                    dragInstructions: {
                        id: "PromptTextarea.dragInstructions",
                        defaultMessage: "Upload file",
                        description: "Instructions for dragging and dropping a file to upload"
                    },
                    unsupportedFileType: {
                        id: "PromptTextarea.unsupportedFileType",
                        defaultMessage: 'Uploads with file type "{file_type}" are not supported, please try another file.',
                        description: "Error shown when an invalid file type is uploaded"
                    }
                })
        },
        50921: function(e, t, n) {
            n.d(t, {
                Z: function() {
                    return d
                }
            });
            var r = n(35250),
                a = n(47103),
                o = n(19841),
                i = n(70079),
                s = n(1454),
                l = n(88327);

            function d(e) {
                var t = e.onChange,
                    n = e.enabled,
                    d = e.label,
                    u = e.disabled,
                    c = e.withLockIcon,
                    f = (0, i.useCallback)(function() {
                        t(!n)
                    }, [n, t]);
                return (0, r.jsx)(a.fC, {
                    checked: n,
                    disabled: u,
                    onCheckedChange: f,
                    "aria-label": d,
                    className: (0, o.default)(u ? "cursor-not-allowed opacity-50" : "cursor-pointer", "bg-gray-200 radix-state-checked:bg-green-600", "relative h-[25px] w-[42px] rounded-full"),
                    children: (0, r.jsx)(a.bU, {
                        className: (0, o.default)("flex h-[21px] w-[21px] items-center justify-center rounded-full", "translate-x-0.5 transition-transform duration-100 will-change-transform radix-state-checked:translate-x-[19px]", "bg-white shadow-[0_1px_2px_rgba(0,0,0,0.45)]"),
                        children: void 0 !== c && c ? (0, r.jsx)(l.ZP, {
                            icon: s.UIZ,
                            size: "xsmall"
                        }) : null
                    })
                })
            }
        },
        15610: function(e, t, n) {
            n.d(t, {
                V: function() {
                    return Z
                },
                Z: function() {
                    return j
                }
            });
            var r = n(96237),
                a = n(39324),
                o = n(71209),
                i = n(22830),
                s = n(4337),
                l = n(35250),
                d = n(90209),
                u = n(47428),
                c = n(19841),
                f = n(70079),
                g = n(7137),
                p = n(1454),
                h = n(21389),
                m = n(33669),
                v = n(67273),
                x = n(88327),
                b = n(32566);

            function y() {
                var e = (0, s._)(["absolute w-[2.5px] h-5 -rotate-45 -top-0.5 left-1.5 bg-gray-500 border-[0.5px] border-gray-100 group-hover/toggle:bg-red-500 dark:border-[#4E4F60]"]);
                return y = function() {
                    return e
                }, e
            }

            function C() {
                var e = (0, s._)(["group/options flex flex-col rounded-xl border border-gray-100 bg-white text-left shadow-xxs dark:text-gray-100 dark:bg-gray-900 dark:border-gray-800 dark:shadow-xs mx-2 sm:mx-1 overflow-hidden"]);
                return C = function() {
                    return e
                }, e
            }

            function _() {
                var e = (0, s._)(["px-5 flex gap-2.5 flex-col py-4 whitespace-pre-line"]);
                return _ = function() {
                    return e
                }, e
            }

            function w() {
                var e = (0, s._)(["block dark:text-white text-gray-900"]);
                return w = function() {
                    return e
                }, e
            }

            function M() {
                var e = (0, s._)(["block text-xs text-gray-500"]);
                return M = function() {
                    return e
                }, e
            }

            function j(e) {
                var t = e.items,
                    n = e.value,
                    s = e.onChange,
                    d = S(),
                    u = (0, i._)((0, f.useState)(function() {
                        return t.reduce(function(e, t) {
                            if (t.options.length > 0) {
                                var r = t.options.find(function(e) {
                                    return e.value === n
                                });
                                if (r) return e[t.value] = r.value, e;
                                e[t.value] = t.options[0].value
                            }
                            return e
                        }, {})
                    }), 2),
                    c = u[0],
                    g = u[1],
                    p = (0, f.useCallback)(function(e, i) {
                        var l, u = n,
                            f = t.find(function(t) {
                                return t.value === e
                            }),
                            p = (null == c ? void 0 : c[e]) !== void 0,
                            h = p && t.some(function(t) {
                                return t.value === e && t.options.some(function(t) {
                                    return t.value === c[e]
                                })
                            }),
                            m = i;
                        d && void 0 === i && (m = p ? c[e] : null !== (l = null == f ? void 0 : f.options[0].value) && void 0 !== l ? l : void 0), (u = void 0 !== m ? m : h ? c[e] : e) !== n && (s(u), g(function(t) {
                            return (0, o._)((0, a._)({}, t), (0, r._)({}, e, u))
                        }))
                    }, [d, t, c, s, n]),
                    h = (0, i._)((0, f.useState)(new Set), 2),
                    m = h[0],
                    v = h[1],
                    x = (0, f.useCallback)(function(e, t) {
                        t ? v(function(t) {
                            var n = new Set(t);
                            return n.add(e), n
                        }) : v(function(t) {
                            var n = new Set(t);
                            return n.delete(e), n
                        })
                    }, []);
                return (0, l.jsx)("div", {
                    className: "relative flex rounded-xl bg-gray-100 p-1 text-gray-900 dark:bg-gray-900",
                    children: (0, l.jsx)("ul", {
                        className: "flex w-full list-none gap-1 sm:w-auto",
                        children: t.map(function(e, r) {
                            var a, o, i, s, d, u, f = n === e.value || e.options.some(function(e) {
                                    return e.value === n
                                }),
                                g = f ? n : null == c ? void 0 : c[e.value],
                                h = null != g ? g : null === (o = e.options) || void 0 === o ? void 0 : null === (i = o[0]) || void 0 === i ? void 0 : i.value,
                                v = null !== (s = e.options.find(function(e) {
                                    return e.value === h
                                })) && void 0 !== s ? s : e.options[0],
                                b = null !== (d = null == v ? void 0 : v.icon) && void 0 !== d ? d : null;
                            return (0, l.jsx)(k, {
                                onToggleItemOpenChanged: x,
                                item: e,
                                isSelected: f,
                                isOtherToggleDropdownOpen: m.size > 0 && !m.has(e.categoryId),
                                currentValue: n,
                                defaultOption: null == v ? void 0 : v.value,
                                onChange: p,
                                currentIcon: b,
                                displayCurrentValue: f && e.showSelectedValueBelow && null !== (u = null == v ? void 0 : v.name) && void 0 !== u ? u : "",
                                contentAlign: (a = t.length, 0 === r ? "start" : r === a - 1 ? "end" : "center")
                            }, r)
                        })
                    })
                })
            }

            function T(e) {
                var t = e.item,
                    n = e.isSelected,
                    r = e.isOtherToggleDropdownOpen,
                    a = e.isOpen,
                    o = e.currentIcon,
                    i = e.displayCurrentValue,
                    s = null != o ? o : t.icon,
                    d = t.options.length > 1 || t.alwaysShowOptions,
                    u = S();
                return (0, l.jsxs)("div", {
                    className: (0, c.default)("group/button", "relative flex w-full items-center justify-center gap-1 rounded-lg border py-3 outline-none transition-opacity duration-100 sm:w-auto sm:min-w-[148px] md:gap-2 md:py-2.5", n ? "border-black/10 bg-white text-gray-900 shadow-[0_1px_7px_0px_rgba(0,0,0,0.06)] hover:!opacity-100 dark:border-[#4E4F60] dark:bg-gray-700 dark:text-gray-100" : "border-transparent text-gray-500 hover:text-gray-800 hover:dark:text-gray-100", void 0 !== a && a && "text-gray-800 dark:text-gray-100", r && n && "opacity-50"),
                    children: [(0, l.jsxs)("span", {
                        className: (0, c.default)("relative max-[370px]:hidden", t.disabled && "group-hover/button:text-red-500"),
                        children: [null != s && (0, l.jsx)(x.ZP, {
                            icon: s,
                            className: (0, c.default)("transition-colors", n ? t.buttonActiveClass : t.buttonHoverClass)
                        }), t.disabled && (0, l.jsx)(D, {})]
                    }), (0, l.jsx)("span", {
                        className: (0, c.default)("truncate text-sm font-medium md:pr-1.5", !u && "pr-1.5"),
                        children: t.name
                    }), null != t.iconAfter && (0, l.jsx)(x.ZP, {
                        icon: t.iconAfter,
                        className: (0, c.default)("ml-0.5 h-4 w-4 transition-colors sm:ml-0", t.iconAfterClass, n ? t.buttonActiveClass : t.buttonHoverClass)
                    }), u && (n || d) && (0, l.jsx)(x.ZP, {
                        icon: d ? p.bTu : g.DAO,
                        className: "toggle-item-button-open ml-0.5 text-gray-500"
                    }), u && (0, l.jsx)(x.ZP, {
                        icon: p.rH8,
                        className: "toggle-item-button-closed ml-0.5 text-gray-500"
                    }), null != i && "" !== i && (0, l.jsx)("span", {
                        className: "absolute left-0 top-full mt-4 w-full truncate overflow-ellipsis text-sm text-gray-500",
                        children: i
                    })]
                })
            }

            function k(e) {
                var t = e.item,
                    n = e.isSelected,
                    r = e.defaultOption,
                    a = e.onChange,
                    o = e.currentIcon,
                    s = e.currentValue,
                    d = e.displayCurrentValue,
                    g = e.contentAlign,
                    p = e.onToggleItemOpenChanged,
                    h = e.isOtherToggleDropdownOpen,
                    m = (0, i._)((0, f.useState)(void 0), 2),
                    v = m[0],
                    x = m[1],
                    y = (0, f.useRef)(null),
                    C = t.options.length > 1 || t.alwaysShowOptions,
                    _ = !(void 0 === t.description && void 0 === t.disclaimer),
                    w = S(),
                    M = (0, f.useCallback)(function(e) {
                        x(e), p(t.categoryId, !!e)
                    }, [t.categoryId, p]);
                return (0, l.jsx)(u.fC, {
                    open: v,
                    modal: !1,
                    onOpenChange: function(e) {
                        w && e && !n && C && a(t.value)
                    },
                    children: (0, l.jsxs)("li", {
                        className: "group/toggle w-full",
                        "data-testid": t.value,
                        onMouseEnter: function() {
                            return !w && M(!0)
                        },
                        onMouseLeave: function() {
                            return !w && M(void 0)
                        },
                        children: [(0, l.jsx)(u.xz, {
                            ref: y,
                            className: "w-full cursor-pointer",
                            onClick: function() {
                                t.disabled || a(t.value)
                            },
                            children: (0, l.jsx)(T, {
                                isOpen: !!v,
                                isOtherToggleDropdownOpen: h,
                                item: t,
                                isSelected: n,
                                currentIcon: o,
                                displayCurrentValue: d
                            })
                        }), (0, l.jsx)(u.Uv, {
                            children: (0, l.jsx)(u.VY, {
                                className: (0, c.default)("w-full min-w-[100vw] max-w-[100vw] select-none pt-3 font-medium sm:w-[312px] sm:min-w-[312px] md:max-w-none", "will-change-[opacity,transform] radix-side-bottom:animate-slideDownAndFade radix-side-left:animate-slideLeftAndFade radix-side-right:animate-slideRightAndFade radix-side-top:animate-slideUpAndFade", {
                                    "sm:min-w-[420px]": "Alpha" === t.name
                                }),
                                align: g,
                                onCloseAutoFocus: function(e) {
                                    v || e.preventDefault()
                                },
                                onEscapeKeyDown: function(e) {
                                    var t;
                                    e.preventDefault(), null === (t = y.current) || void 0 === t || t.focus()
                                },
                                children: (0, l.jsxs)(R, {
                                    children: [_ && (0, l.jsx)(I, {
                                        item: t
                                    }), (C || !v && !w) && (0, l.jsx)(P, {
                                        defaultOption: n ? s : r,
                                        item: t,
                                        currentValue: s,
                                        onChange: function(e, t) {
                                            a(e, t), M(void 0), (0, b.g)()
                                        },
                                        className: (0, c.default)("max-h-[calc(100vh-300px)] overflow-auto text-sm", _ && "mb-1 border-t border-gray-100 dark:border-gray-800")
                                    })]
                                })
                            })
                        }, t.categoryId)]
                    })
                })
            }

            function I(e) {
                var t = e.item;
                return (0, l.jsxs)(F, {
                    className: "text-sm sm:text-base",
                    children: [void 0 !== t.description && (0, l.jsx)(L, {
                        children: t.description
                    }), void 0 !== t.disclaimer && (0, l.jsx)(B, {
                        children: t.disclaimer
                    }), t.onCtaContentClick && t.ctaContentText && (0, l.jsx)("div", {
                        className: "mt-2",
                        children: (0, l.jsx)(v.z, {
                            onClick: function() {
                                return t.onCtaContentClick && t.onCtaContentClick("info-button")
                            },
                            color: "primary",
                            className: "w-full !bg-brand-purple py-3 text-xs hover:bg-brand-purple hover:brightness-90",
                            children: t.ctaContentText
                        })
                    })]
                })
            }

            function P(e) {
                var t = e.item,
                    n = e.className,
                    r = e.onChange,
                    a = e.currentValue,
                    o = e.defaultOption;
                return (0, l.jsx)(u.Ee, {
                    defaultValue: o,
                    value: a,
                    className: n,
                    children: t.options.map(function(e, n) {
                        return (0, l.jsx)(N, {
                            option: e,
                            selected: a === e.value,
                            active: o === e.value,
                            iconClass: t.iconClass,
                            iconActiveClass: t.buttonActiveClass,
                            showBorder: n !== t.options.length - 1,
                            isDisabled: e.disabled,
                            onChange: function() {
                                e.disabled || r(t.value, e.value)
                            }
                        }, e.value)
                    })
                })
            }

            function N(e) {
                var t, n = e.option,
                    r = e.selected,
                    a = e.active,
                    o = e.iconClass,
                    i = e.iconActiveClass,
                    s = e.isDisabled,
                    f = e.onChange,
                    g = e.showBorder,
                    p = null !== (t = n.activeIcon) && void 0 !== t ? t : n.icon;
                return (0, l.jsx)(u.Rk, {
                    disabled: s,
                    asChild: !0,
                    value: n.value,
                    onClick: f,
                    className: "select-none outline-none",
                    children: (0, l.jsxs)("div", {
                        className: (0, c.default)("group/option relative flex w-full items-center gap-2 px-5 py-3 pr-11 font-medium focus:bg-gray-50 focus:dark:bg-gray-700", s ? "text-gray-500" : "text-gray-900 dark:text-gray-100", {
                            "cursor-pointer hover:!bg-gray-50 dark:hover:!bg-gray-700": !s,
                            "bg-gray-50 group-hover/options:bg-transparent dark:bg-gray-700": a && !r,
                            "text-gray-800 dark:text-gray-100": r || a,
                            "border-b border-gray-100 dark:border-gray-800": g
                        }),
                        children: [null != n.icon && null != p ? (0, l.jsx)(x.ZP, {
                            icon: r ? n.icon : p,
                            className: (0, c.default)("max-[370px]:hidden", !s && !r && o, r || a ? i : "text-gray-500")
                        }) : null, (0, l.jsx)("span", {
                            title: "string" == typeof n.name && n.name ? n.name : "",
                            className: (0, c.default)("truncate", {
                                "group-hover/option:text-gray-800 dark:group-hover/option:text-gray-100": !s,
                                "text-gray-800 dark:text-gray-100": a && !s
                            }),
                            children: n.name
                        }), n.tags.map(function(e) {
                            return Z(e)
                        }), (0, l.jsx)("span", {
                            className: (0, c.default)({
                                "absolute right-3 rounded-full p-1 text-blue-400": !0,
                                "opacity-0 group-hover/options:opacity-0": !r && !s,
                                "text-red-500": s
                            }),
                            children: (0, l.jsx)(x.ZP, {
                                icon: s ? d.Z : x.nQ,
                                className: "h-5 w-5"
                            })
                        })]
                    })
                })
            }
            var S = function() {
                    return !(0, m.w$)()
                },
                E = new Set(["beta", "confidential", "alpha"]),
                Z = function(e) {
                    return E.has(e) && (0, l.jsx)("span", {
                        className: (0, c.default)("py-0.25 rounded px-1 text-sm capitalize", "beta" === e && "bg-blue-200 text-blue-500", "alpha" === e && "bg-blue-200 text-blue-500", "confidential" === e && "bg-red-200 text-red-800"),
                        children: e
                    }, e)
                },
                D = h.Z.span(y()),
                R = h.Z.div(C()),
                F = h.Z.div(_()),
                L = h.Z.span(w()),
                B = h.Z.span(M())
        },
        86273: function(e, t, n) {
            n.d(t, {
                iW: function() {
                    return O
                },
                wm: function() {
                    return z
                },
                sY: function() {
                    return U
                }
            });
            var r = n(21722),
                a = n(39324),
                o = n(71209),
                i = n(22830),
                s = n(75883),
                l = n(35250),
                d = n(6013),
                u = n(13995),
                c = n(74686),
                f = n(5268),
                g = n(19841),
                p = n(70737),
                h = n(97296),
                m = n(70079),
                v = n(1454),
                x = n(94968),
                b = n(70671),
                y = n(32004),
                C = n(62509),
                _ = n(16920),
                w = n(99486),
                M = n(32877),
                j = n(46020),
                T = n(78931),
                k = n(33669),
                I = n(97747),
                P = n(89368),
                N = n(45635),
                S = n(88327),
                E = n(1821),
                Z = n(88798),
                D = n(50921),
                R = n(61888),
                F = n(6948),
                L = "".concat("oai/apps/hasUserContextFirstTime", "/").concat("2023-06-29"),
                B = function(e) {
                    var t = e.onClose,
                        n = (0, b.Z)(),
                        r = (0, m.useCallback)(function() {
                            F.m.setItem(L, !0), t()
                        }, [t]);
                    return (0, l.jsxs)(P.Z, {
                        isOpen: !0,
                        onClose: R.noop,
                        size: "custom",
                        className: "max-w-xl",
                        type: "success",
                        title: n.formatMessage(A.title),
                        primaryButton: (0, l.jsx)(I.ZP.Button, {
                            onClick: r,
                            title: n.formatMessage(A.ok),
                            color: "primary"
                        }),
                        children: [(0, l.jsxs)("div", {
                            className: "mb-6 flex flex-col gap-3",
                            children: [(0, l.jsx)("p", {
                                children: (0, l.jsx)(y.Z, (0, a._)({}, A.body1))
                            }), (0, l.jsx)("p", {
                                children: (0, l.jsx)(y.Z, (0, a._)({}, A.body2))
                            })]
                        }), (0, l.jsx)("div", {
                            className: "flex flex-col gap-3 text-sm text-gray-500",
                            children: (0, l.jsx)("p", {
                                children: (0, l.jsx)(y.Z, (0, o._)((0, a._)({}, A.legal1), {
                                    values: {
                                        article: function(e) {
                                            return (0, l.jsx)("a", {
                                                href: O,
                                                target: "_blank",
                                                className: "underline",
                                                rel: "noopener noreferrer",
                                                children: e
                                            })
                                        }
                                    }
                                }))
                            })
                        })]
                    })
                },
                A = (0, x.vU)({
                    title: {
                        id: "UserContextFirstTimeModal.title",
                        defaultMessage: "Introducing Custom Instructions",
                        description: "Title of the UserContextFirstTimeModal"
                    },
                    body1: {
                        id: "UserContextFirstTimeModal.body1",
                        defaultMessage: "Customize your interactions with ChatGPT by providing specific details and guidelines for your chats.",
                        description: "Body of the first paragraph UserContextFirstTimeModal"
                    },
                    body2: {
                        id: "UserContextFirstTimeModal.body2",
                        defaultMessage: "Whenever you edit your custom instructions, they'll take effect in all new chats you create. Existing chats won't be updated.",
                        description: "Body of the second paragraph UserContextFirstTimeModal"
                    },
                    legal1: {
                        id: "UserContextFirstTimeModal.legal1",
                        defaultMessage: "Your instructions will be used to make our models better unless you've opted out and may be shared with any plugins you've enabled. Visit our <article>Help Center</article> to learn more.",
                        description: "Legal text of the first paragraph UserContextFirstTimeModal"
                    },
                    ok: {
                        id: "UserContextFirstTimeModal.ok",
                        defaultMessage: "OK",
                        description: "Button to close the UserContextFirstTimeModal"
                    }
                }),
                U = (0, x.vU)({
                    tipsHeader: {
                        id: "userContextModal.tipsHeader",
                        defaultMessage: "Thought starters",
                        description: "header for Custom instructions tips"
                    },
                    aboutUserTip1: {
                        id: "userContextModal.aboutUserTip1",
                        defaultMessage: "Where are you based?",
                        description: "tips for Custom instructions about you"
                    },
                    aboutUserTip2: {
                        id: "userContextModal.aboutUserTip2",
                        defaultMessage: "What do you do for work?",
                        description: "tips for Custom instructions about you"
                    },
                    aboutUserTip3: {
                        id: "userContextModal.aboutUserTip3",
                        defaultMessage: "What are your hobbies and interests?",
                        description: "tips for Custom instructions about you"
                    },
                    aboutUserTip4: {
                        id: "userContextModal.aboutUserTip4",
                        defaultMessage: "What subjects can you talk about for hours?",
                        description: "tips for Custom instructions about you"
                    },
                    aboutUserTip5: {
                        id: "userContextModal.aboutUserTip5",
                        defaultMessage: "What are some goals you have?",
                        description: "tips for Custom instructions about you"
                    },
                    modelTip1: {
                        id: "userContextModal.modelTip1",
                        defaultMessage: "How formal or casual should ChatGPT be?",
                        description: "tips for Custom instructions about model"
                    },
                    modelTip2: {
                        id: "userContextModal.modelTip2",
                        defaultMessage: "How long or short should responses generally be?",
                        description: "tips for Custom instructions about model"
                    },
                    modelTip3: {
                        id: "userContextModal.modelTip3",
                        defaultMessage: "How do you want to be addressed?",
                        description: "tips for Custom instructions about model"
                    },
                    modelTip4: {
                        id: "userContextModal.modelTip4",
                        defaultMessage: "Should ChatGPT have opinions on topics or remain neutral?",
                        description: "tips for Custom instructions about model"
                    },
                    save: {
                        id: "userContextModal.save",
                        defaultMessage: "Save",
                        description: "save button for my profile modal"
                    },
                    chatPreferencesIsEnabled: {
                        id: "userContextModal.chatPreferencesIsEnabled",
                        defaultMessage: "Enable for new chats",
                        description: "chat preferences is enabled"
                    },
                    chatPreferencesIsDisabled: {
                        id: "userContextModal.chatPreferencesIsDisabled",
                        defaultMessage: "Disable for new chats",
                        description: "chat preferences is disabled"
                    },
                    enableToggleLabel: {
                        id: "userContextModal.enableToggleLabel",
                        defaultMessage: "Enable chat preferences",
                        description: "enable chat preferences toggle label"
                    },
                    disableToggleLabel: {
                        id: "userContextModal.disableToggleLabel",
                        defaultMessage: "Disable chat preferences",
                        description: "disable chat preferences toggle label"
                    },
                    cancel: {
                        id: "userContextModal.cancel",
                        defaultMessage: "Cancel",
                        description: "Cancel button for Custom instructions modal"
                    },
                    aboutYouHelpText: {
                        id: "userContextModal.aboutYouHelpText",
                        defaultMessage: "What would you like ChatGPT to know about you to provide better responses?",
                        description: "help text for about you section of Custom instructions"
                    },
                    modelHelpText: {
                        id: "userContextModal.modelHelpText",
                        defaultMessage: "How would you like ChatGPT to respond?",
                        description: "help text for about you section of Custom instructions"
                    },
                    profileTitle: {
                        id: "userContextModal.title",
                        defaultMessage: "Custom instructions",
                        description: "title for Custom instructions modal"
                    },
                    profileSubhead: {
                        id: "userContextModal.subhead",
                        defaultMessage: "<article>Learn more</article> about Custom instructions and how they’re used to help ChatGPT provide better responses.",
                        description: "subhead for Custom instructions modal"
                    },
                    messageLimitError: {
                        id: "userContextModal.messageLimitError",
                        defaultMessage: "Please limit your responses to {limit} characters or less.",
                        description: "error message for Custom instructions modal"
                    },
                    showTips: {
                        id: "userContextModal.showTips",
                        defaultMessage: "Show tips",
                        description: "show tips button for Custom instructions modal"
                    },
                    hideTips: {
                        id: "userContextModal.hideTips",
                        defaultMessage: "Hide tips",
                        description: "hide tips button for Custom instructions modal"
                    },
                    confirmCloseTitle: {
                        id: "userContextModal.confirmCloseTitle",
                        defaultMessage: "You have unsaved changes.",
                        description: "title for confirm close modal"
                    },
                    confirmCloseBody: {
                        id: "userContextModal.confirmCloseBody",
                        defaultMessage: "Are you sure you want to exit? Any changes you made will be permanently lost.",
                        description: "confirm close modal"
                    },
                    confirmCloseCancel: {
                        id: "userContextModal.confirmCloseCancel",
                        defaultMessage: "Back",
                        description: "cancel button for confirm close modal"
                    },
                    confirmCloseOk: {
                        id: "userContextModal.confirmCloseOk",
                        defaultMessage: "Exit",
                        description: "ok button for confirm close modal"
                    },
                    modApiVoilation: {
                        id: "userContextModal.modApiVoilation",
                        defaultMessage: "This content may violate our <policyLink>content policy</policyLink>. If you believe this to be in error, please <feedbackLink>submit your feedback</feedbackLink> — your input will aid our research in this area.",
                        description: "error message for mod api voilation"
                    }
                }),
                O = "https://help.openai.com/en/articles/8096356-custom-instructions-for-chatgpt",
                H = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                    return ["userContext", e]
                },
                W = {
                    aboutUserMessage: void 0,
                    aboutModelMessage: void 0,
                    enabled: void 0
                };

            function z() {
                var e, t, n, d, g, p, h, v, x, k, R, A, z, $, Q = (0, b.Z)(),
                    X = !1 == !!F.m.getItem(L),
                    K = (0, i._)((0, m.useState)(!1), 2),
                    Y = K[0],
                    ee = K[1],
                    et = (0, C.kP)().isAuthenticated,
                    en = (0, j.tN)(function(e) {
                        return e.activeModals.has(j.B.UserContext)
                    }),
                    er = (t = (e = (0, C.kP)()).session, n = e.isAuthenticated, g = (d = (0, T.hz)()).has(M.Rw) || d.has(M.uo), (0, f.a)(H(null == t ? void 0 : t.accessToken), function() {
                        return w.ZP.getUserSystemMessage((null == t ? void 0 : t.accessToken) || "").catch(function() {
                            Z.m.danger("Failed to get your Custom Instructions")
                        })
                    }, {
                        enabled: !!(en && et && n && g),
                        select: function(e) {
                            var t, n, r;
                            return {
                                aboutUserMessage: null !== (t = null == e ? void 0 : e.about_user_message) && void 0 !== t ? t : "",
                                aboutModelMessage: null !== (n = null == e ? void 0 : e.about_model_message) && void 0 !== n ? n : "",
                                enabled: null === (r = null == e ? void 0 : e.enabled) || void 0 === r || r
                            }
                        }
                    })),
                    ea = er.isLoading,
                    eo = er.data,
                    ei = null != eo ? eo : {},
                    es = ei.aboutUserMessage,
                    el = void 0 === es ? "" : es,
                    ed = ei.aboutModelMessage,
                    eu = void 0 === ed ? "" : ed,
                    ec = ei.enabled,
                    ef = (0, i._)((0, m.useState)(W), 2),
                    eg = ef[0],
                    ep = ef[1],
                    eh = eg.aboutUserMessage,
                    em = eg.aboutModelMessage,
                    ev = eg.enabled,
                    ex = null != ev ? ev : !!ec,
                    eb = (0, i._)((0, m.useState)(null), 2),
                    ey = eb[0],
                    eC = eb[1],
                    e_ = (0, m.useCallback)(function() {
                        j.vm.closeModal(j.B.UserContext), ep(W), eC(null)
                    }, []),
                    ew = (h = (p = {
                        onSuccess: function() {
                            e_()
                        },
                        onError: function(e) {
                            var t, n, r, a;
                            return (null === (t = e.response) || void 0 === t ? void 0 : t.reason) === "content_policy" && (null === (n = e.response) || void 0 === n ? void 0 : n.field) ? eC(null === (r = e.response) || void 0 === r ? void 0 : r.field) : Z.m.danger(null !== (a = e.message) && void 0 !== a ? a : "Failed to update Custom Instructions."), e
                        }
                    }).onSuccess, v = p.onError, x = (0, C.kP)().session, k = (0, u.NL)(), (0, c.D)({
                        mutationFn: function(e) {
                            var t = e.userContext;
                            return w.ZP.createOrUpdateUserSystemMessage((null == x ? void 0 : x.accessToken) || "", t)
                        },
                        onSettled: function(e, t) {
                            var n = H(null == x ? void 0 : x.accessToken);
                            null === e || t ? k.invalidateQueries({
                                queryKey: n
                            }) : k.setQueryData(n, e)
                        },
                        onSuccess: h,
                        onError: v
                    })),
                    eM = ew.isLoading,
                    ej = ew.mutate,
                    eT = (0, i._)((0, m.useState)(!1), 2),
                    ek = eT[0],
                    eI = eT[1],
                    eP = q(null != eh ? eh : "") || q(null != em ? em : ""),
                    eN = void 0 !== em && em !== eu || void 0 !== eh && eh !== el || void 0 !== ev && ev !== ec,
                    eS = (0, m.useCallback)(function() {
                        eN ? eI(!0) : e_()
                    }, [e_, eN]),
                    eE = (0, m.useCallback)((0, r._)(function() {
                        return (0, s.Jh)(this, function(e) {
                            switch (e.label) {
                                case 0:
                                    if (eM) return [3, 2];
                                    return eC(null), [4, ej({
                                        userContext: {
                                            aboutUserMessage: null != eh ? eh : "",
                                            aboutModelMessage: null != em ? em : "",
                                            enabled: !!ev
                                        }
                                    })];
                                case 1:
                                    e.sent(), e.label = 2;
                                case 2:
                                    return [2]
                            }
                        })
                    }), [eM, em, eh, ev, ej]),
                    eZ = (0, m.useCallback)(function() {
                        if (eP) {
                            var e, t, n = q(null != eh ? eh : ""),
                                r = q(null != em ? em : "");
                            n && _.m9.logEvent("chatgpt_user_context_modal__message_past_limit", void 0, {
                                type: "about_user_message",
                                limit: J.toString(),
                                character_length: null !== (e = null == eh ? void 0 : eh.length.toString()) && void 0 !== e ? e : ""
                            }), r && _.m9.logEvent("chatgpt_user_context_modal__message_past_limit", void 0, {
                                type: "about_model_message",
                                limit: J.toString(),
                                character_length: null !== (t = null == em ? void 0 : em.length.toString()) && void 0 !== t ? t : ""
                            }), Z.m.danger(Q.formatMessage(U.messageLimitError, {
                                limit: J
                            }), {
                                duration: 4,
                                hasCloseButton: !0
                            });
                            return
                        }
                        eE()
                    }, [Q, eP, em, eh, eE]);
                if (en && X && !Y) return (0, l.jsx)(B, {
                    onClose: function() {
                        ee(!0)
                    }
                });
                if (en && ek) {
                    var eD = function() {
                        eI(!1)
                    };
                    return (0, l.jsx)(P.Z, {
                        isOpen: !0,
                        onClose: eD,
                        type: "success",
                        title: Q.formatMessage(U.confirmCloseTitle),
                        primaryButton: (0, l.jsx)(I.ZP.Button, {
                            title: Q.formatMessage(U.confirmCloseOk),
                            color: "danger",
                            onClick: function() {
                                e_(), eD()
                            }
                        }),
                        secondaryButton: (0, l.jsx)(I.ZP.Button, {
                            title: Q.formatMessage(U.confirmCloseCancel),
                            color: "neutral",
                            onClick: eD
                        }),
                        children: (0, l.jsx)("div", {
                            className: "text-sm",
                            children: (0, l.jsx)(y.Z, (0, a._)({}, U.confirmCloseBody))
                        })
                    }, "confirm-close")
                }
                return (0, l.jsxs)(P.Z, {
                    isOpen: en,
                    onClose: eS,
                    type: "success",
                    size: "custom",
                    className: "max-w-lg xl:max-w-xl",
                    title: (0, l.jsxs)("div", {
                        className: "flex flex-row gap-2",
                        children: [(0, l.jsx)(y.Z, (0, a._)({}, U.profileTitle)), (0, l.jsx)(N.u, {
                            sideOffset: 4,
                            interactive: !0,
                            delayDuration: 0,
                            label: (0, l.jsx)("div", {
                                children: (0, l.jsx)(y.Z, (0, o._)((0, a._)({}, U.profileSubhead), {
                                    values: {
                                        article: function(e) {
                                            return (0, l.jsx)("a", {
                                                href: O,
                                                target: "_blank",
                                                className: "underline",
                                                rel: "noreferrer",
                                                children: e
                                            })
                                        }
                                    }
                                }))
                            }),
                            side: "bottom",
                            children: (0, l.jsx)(S.HV, {
                                className: "h-6 w-6 flex-shrink-0 text-gray-500"
                            })
                        })]
                    }),
                    children: [ea ? (0, l.jsx)("div", {
                        className: "flex h-14 items-center justify-center",
                        children: (0, l.jsx)(E.Z, {})
                    }) : (0, l.jsxs)(l.Fragment, {
                        children: [(0, l.jsx)("p", {
                            className: "text-muted pb-3 pt-2 text-sm text-gray-600",
                            children: (0, l.jsx)(y.Z, (0, a._)({}, U.aboutYouHelpText))
                        }), (0, l.jsx)(V, {
                            className: "mb-3",
                            onSubmit: eZ,
                            disabled: !ex,
                            tip: (0, l.jsx)(G, {
                                children: (0, l.jsxs)("ul", {
                                    className: "list-disc pl-5",
                                    children: [(0, l.jsx)("li", {
                                        children: (0, l.jsx)(y.Z, (0, a._)({}, U.aboutUserTip1))
                                    }), (0, l.jsx)("li", {
                                        children: (0, l.jsx)(y.Z, (0, a._)({}, U.aboutUserTip2))
                                    }), (0, l.jsx)("li", {
                                        children: (0, l.jsx)(y.Z, (0, a._)({}, U.aboutUserTip3))
                                    }), (0, l.jsx)("li", {
                                        children: (0, l.jsx)(y.Z, (0, a._)({}, U.aboutUserTip4))
                                    }), (0, l.jsx)("li", {
                                        children: (0, l.jsx)(y.Z, (0, a._)({}, U.aboutUserTip5))
                                    })]
                                })
                            }),
                            hasModError: "about_user_message" === ey,
                            value: null != eh ? eh : el,
                            onChange: function(e) {
                                return ep(function(t) {
                                    return {
                                        aboutModelMessage: null !== (R = t.aboutModelMessage) && void 0 !== R ? R : eu,
                                        aboutUserMessage: e.target.value,
                                        enabled: null !== (A = t.enabled) && void 0 !== A ? A : ex
                                    }
                                })
                            }
                        }), (0, l.jsx)("p", {
                            className: "text-muted py-3 text-sm text-gray-600",
                            children: (0, l.jsx)(y.Z, (0, a._)({}, U.modelHelpText))
                        }), (0, l.jsx)(V, {
                            onSubmit: eZ,
                            disabled: !ex,
                            tip: (0, l.jsx)(G, {
                                children: (0, l.jsxs)("ul", {
                                    className: "list-disc pl-5",
                                    children: [(0, l.jsx)("li", {
                                        children: (0, l.jsx)(y.Z, (0, a._)({}, U.modelTip1))
                                    }), (0, l.jsx)("li", {
                                        children: (0, l.jsx)(y.Z, (0, a._)({}, U.modelTip2))
                                    }), (0, l.jsx)("li", {
                                        children: (0, l.jsx)(y.Z, (0, a._)({}, U.modelTip3))
                                    }), (0, l.jsx)("li", {
                                        children: (0, l.jsx)(y.Z, (0, a._)({}, U.modelTip4))
                                    })]
                                })
                            }),
                            hasModError: "about_model_message" === ey,
                            value: null != em ? em : eu,
                            onChange: function(e) {
                                return ep(function(t) {
                                    return {
                                        aboutUserMessage: null !== (z = t.aboutUserMessage) && void 0 !== z ? z : el,
                                        aboutModelMessage: e.target.value,
                                        enabled: null !== ($ = t.enabled) && void 0 !== $ ? $ : ex
                                    }
                                })
                            }
                        })]
                    }), (0, l.jsx)("div", {
                        className: "mt-5 sm:mt-4",
                        children: (0, l.jsxs)("div", {
                            className: "flex flex-grow flex-col items-stretch justify-between gap-0 sm:flex-row sm:items-center sm:gap-3",
                            children: [(0, l.jsxs)("label", {
                                className: "mt-5 flex cursor-pointer flex-row justify-between gap-2 sm:mt-4",
                                children: [(0, l.jsx)("div", {
                                    className: "self-center text-sm text-gray-600",
                                    children: ex ? (0, l.jsx)(y.Z, (0, a._)({}, U.chatPreferencesIsEnabled)) : (0, l.jsx)(y.Z, (0, a._)({}, U.chatPreferencesIsDisabled))
                                }), (0, l.jsx)(D.Z, {
                                    enabled: ex,
                                    onChange: function(e) {
                                        var t, n;
                                        ep(function(r) {
                                            return {
                                                aboutUserMessage: null !== (t = r.aboutUserMessage) && void 0 !== t ? t : el,
                                                aboutModelMessage: null !== (n = r.aboutModelMessage) && void 0 !== n ? n : eu,
                                                enabled: e
                                            }
                                        })
                                    },
                                    label: ex ? Q.formatMessage(U.disableToggleLabel) : Q.formatMessage(U.enableToggleLabel)
                                })]
                            }), (0, l.jsx)(I.ZP.Actions, {
                                secondaryButton: (0, l.jsx)(I.ZP.Button, {
                                    onClick: eS,
                                    children: (0, l.jsx)(y.Z, (0, a._)({}, U.cancel))
                                }),
                                primaryButton: (0, l.jsx)(I.ZP.Button, {
                                    loading: eM,
                                    onClick: eZ,
                                    color: "primary",
                                    visuallyDisabled: eP,
                                    disabled: !eN,
                                    children: (0, l.jsx)(y.Z, (0, a._)({}, U.save))
                                })
                            })]
                        })
                    })]
                }, "user-context")
            }
            var G = function(e) {
                    var t = e.children;
                    return (0, l.jsx)("div", {
                        className: "whitespace-pre-line",
                        children: t
                    })
                },
                J = 1500,
                q = function(e) {
                    return e.length > J
                },
                V = function(e) {
                    var t = e.disabled,
                        n = e.onChange,
                        r = e.onSubmit,
                        s = e.placeholder,
                        u = e.value,
                        c = e.tip,
                        f = e.hasModError,
                        x = e.className,
                        C = (0, b.Z)(),
                        _ = (0, m.useRef)(null),
                        w = (0, k.x_)(),
                        M = (0, k.aj)(),
                        j = !w,
                        T = (0, i._)((0, m.useState)(!1), 2),
                        N = T[0],
                        E = T[1],
                        Z = (0, i._)((0, m.useState)(j), 2),
                        D = Z[0],
                        R = Z[1],
                        F = q(u);
                    return (0, l.jsxs)(l.Fragment, {
                        children: [(0, l.jsx)(P.Z, {
                            isOpen: j && !D,
                            type: "success",
                            size: "custom",
                            className: "max-w-lg",
                            title: C.formatMessage(U.tipsHeader),
                            closeButton: (0, l.jsx)(I.ZP.CloseButton, {
                                onClose: function() {
                                    R(!0)
                                }
                            }),
                            onClose: function() {
                                R(!0)
                            },
                            children: c
                        }), (0, l.jsxs)(d.fC, {
                            open: !j && N && !D,
                            children: [(0, l.jsxs)("div", {
                                className: x,
                                children: [(0, l.jsx)(d.xz, {
                                    asChild: !0,
                                    children: (0, l.jsx)("textarea", {
                                        ref: _,
                                        className: (0, g.default)("w-full	resize-none rounded p-4 placeholder:text-gray-300 dark:bg-gray-800", {
                                            "border-orange-400 focus:border-orange-400": f,
                                            "border-red-500 focus:border-red-500": F && !f,
                                            "border-gray-100 focus:border-brand-green": !F && !f,
                                            "bg-gray-50 text-gray-300": t
                                        }),
                                        disabled: t,
                                        placeholder: s,
                                        onKeyDown: function(e) {
                                            t || "Enter" !== e.key || !e.metaKey || e.shiftKey || e.nativeEvent.isComposing || (e.preventDefault(), r())
                                        },
                                        rows: w && !M ? 8 : 7,
                                        value: u,
                                        onChange: n,
                                        onBlur: function() {
                                            E(!1)
                                        },
                                        onFocus: function() {
                                            E(!0)
                                        }
                                    })
                                }), (0, l.jsx)("div", {
                                    className: (0, g.default)("flex items-center justify-between px-1 text-xs", F ? "text-red-600" : "text-gray-400"),
                                    children: f ? (0, l.jsx)("div", {
                                        className: "visible mt-2 text-left text-xs text-orange-400 ",
                                        children: (0, l.jsx)(y.Z, (0, o._)((0, a._)({}, U.modApiVoilation), {
                                            values: {
                                                policyLink: function(e) {
                                                    return (0, l.jsx)("a", {
                                                        href: "https://platform.openai.com/docs/usage-policies/content-policy",
                                                        className: "underline",
                                                        target: "_blank",
                                                        rel: "noreferrer",
                                                        children: e
                                                    })
                                                },
                                                feedbackLink: function(e) {
                                                    return (0, l.jsx)("a", {
                                                        href: "https://forms.gle/3gyAMj5r5rTEcgbs5",
                                                        className: "underline",
                                                        target: "_blank",
                                                        rel: "noreferrer",
                                                        children: e
                                                    })
                                                }
                                            }
                                        }))
                                    }) : (0, l.jsxs)(l.Fragment, {
                                        children: [(0, l.jsx)("div", {
                                            children: "".concat(u.length, "/").concat(J)
                                        }), (0, l.jsx)("button", {
                                            className: (0, g.default)("flex items-center gap-1", N ? "text-gray-400" : "text-gray-200"),
                                            onClick: function() {
                                                var e;
                                                null === (e = _.current) || void 0 === e || e.focus(), R(!D)
                                            },
                                            tabIndex: -1,
                                            children: (0, l.jsx)(p.M, {
                                                initial: !1,
                                                children: N && (0, l.jsx)(h.E.div, {
                                                    className: "flex items-center gap-1",
                                                    initial: {
                                                        opacity: 0
                                                    },
                                                    animate: {
                                                        opacity: 1,
                                                        transition: {
                                                            duration: .2,
                                                            ease: "easeIn"
                                                        }
                                                    },
                                                    exit: {
                                                        opacity: 0,
                                                        transition: {
                                                            duration: .2,
                                                            ease: "easeIn"
                                                        }
                                                    },
                                                    children: D ? (0, l.jsxs)(l.Fragment, {
                                                        children: [(0, l.jsx)(y.Z, (0, a._)({}, U.showTips)), (0, l.jsx)(S.ZP, {
                                                            size: "xsmall",
                                                            icon: v.rDJ
                                                        })]
                                                    }) : (0, l.jsxs)(l.Fragment, {
                                                        children: [(0, l.jsx)(y.Z, (0, a._)({}, U.hideTips)), (0, l.jsx)(S.ZP, {
                                                            size: "xsmall",
                                                            icon: v.rzC
                                                        })]
                                                    })
                                                }, "show-hide")
                                            })
                                        })]
                                    })
                                })]
                            }), (0, l.jsx)(d.h_, {
                                children: (0, l.jsx)(d.VY, {
                                    side: "right",
                                    align: "start",
                                    sideOffset: 12,
                                    className: "relative max-w-[220px] animate-slideLeftAndFade select-none rounded-xl border-gray-100 bg-white p-4 text-sm text-gray-600 shadow-[0px_4px_14px_rgba(0,0,0,0.06)] dark:bg-gray-900 dark:text-white xl:max-w-xs",
                                    onOpenAutoFocus: function(e) {
                                        e.preventDefault()
                                    },
                                    onCloseAutoFocus: function(e) {
                                        e.preventDefault()
                                    },
                                    children: (0, l.jsxs)("div", {
                                        className: "flex flex-col gap-1",
                                        children: [(0, l.jsx)("strong", {
                                            children: (0, l.jsx)(y.Z, (0, a._)({}, U.tipsHeader))
                                        }), c]
                                    })
                                })
                            })]
                        })]
                    })
                }
        },
        10580: function(e, t, n) {
            var r = n(39324),
                a = n(71209),
                o = n(70216),
                i = n(35250),
                s = n(48349),
                l = n(70079),
                d = n(1454),
                u = n(88327),
                c = n(89705),
                f = {
                    Root: s.fC,
                    Trigger: function(e) {
                        return (0, i.jsx)(c.J7, (0, r._)({
                            $as: s.xz
                        }, e))
                    },
                    Value: s.B4,
                    Icon: function() {
                        return (0, i.jsx)(s.JO, {
                            children: (0, i.jsx)(u.ZP, {
                                icon: d.bTu,
                                size: "small"
                            })
                        })
                    },
                    Portal: s.h_,
                    Content: function(e) {
                        var t = e.children,
                            n = (0, o._)(e, ["children"]);
                        return (0, i.jsxs)(c.ay, (0, a._)((0, r._)({
                            $as: s.VY,
                            side: "bottom",
                            sideOffset: 4,
                            position: "popper"
                        }, n), {
                            children: [(0, i.jsx)(s.u_, {
                                className: "flex h-8 cursor-default items-center justify-center bg-white text-gray-700 dark:bg-gray-900 dark:text-gray-200",
                                children: (0, i.jsx)(u.ZP, {
                                    icon: d.rH8
                                })
                            }), (0, i.jsx)(s.l_, {
                                children: t
                            }), (0, i.jsx)(s.$G, {
                                className: "flex h-8 cursor-default items-center justify-center bg-white text-gray-700 dark:bg-gray-900 dark:text-gray-200",
                                children: (0, i.jsx)(u.ZP, {
                                    icon: d.bTu
                                })
                            })]
                        }))
                    },
                    Item: l.forwardRef(function(e, t) {
                        var n = e.children,
                            l = (0, o._)(e, ["children"]);
                        return (0, i.jsx)(c.mS, (0, a._)((0, r._)({
                            $as: s.ck,
                            ref: t
                        }, l), {
                            children: (0, i.jsx)(s.eT, {
                                children: n
                            })
                        }))
                    })
                };
            t.Z = f
        },
        55629: function(e, t, n) {
            var r = n(39324),
                a = n(71209),
                o = n(22830),
                i = n(35250),
                s = n(19841),
                l = n(70079);
            t.Z = {
                Root: function(e) {
                    var t = e.children,
                        n = e.fixed,
                        r = e.className,
                        a = e.size,
                        d = (0, l.useRef)(null),
                        u = (0, l.useRef)(null),
                        c = (0, o._)((0, l.useState)(!1), 2),
                        f = c[0],
                        g = c[1];
                    return (0, l.useEffect)(function() {
                        var e = d.current,
                            t = u.current;
                        if (e && t) {
                            var n = new ResizeObserver(function() {
                                g(t.scrollHeight > e.clientHeight)
                            });
                            return n.observe(e),
                                function() {
                                    return n.disconnect()
                                }
                        }
                    }, []), (0, i.jsx)("div", {
                        className: (0, s.default)("overflow-y-auto text-gray-600 dark:text-gray-300", "normal" === (void 0 === a ? "normal" : a) ? "text-base" : "text-sm", f && "pr-1", r),
                        ref: d,
                        children: (0, i.jsx)("table", {
                            className: (0, s.default)("w-full border-separate border-spacing-0", void 0 !== n && n && "table-fixed"),
                            ref: u,
                            children: t
                        })
                    })
                },
                Header: function(e) {
                    var t = e.children;
                    return (0, i.jsx)("thead", {
                        children: (0, i.jsx)("tr", {
                            children: t
                        })
                    })
                },
                HeaderCell: function(e) {
                    var t = e.textAlign,
                        n = e.children,
                        r = e.className;
                    return (0, i.jsx)("th", {
                        className: (0, s.default)("sticky top-0 z-10 border-b border-black/10 bg-white py-2 pr-4 font-medium last:pr-0 dark:border-white/10", "left" === (void 0 === t ? "left" : t) ? "text-left" : "text-right", void 0 === r ? "dark:bg-gray-900" : r),
                        children: n
                    })
                },
                Body: function(e) {
                    var t = e.children;
                    return (0, i.jsx)("tbody", {
                        children: t
                    })
                },
                Row: function(e) {
                    var t = e.children,
                        n = e.disabled,
                        o = void 0 !== n && n;
                    return (0, i.jsx)("tr", (0, a._)((0, r._)({}, o ? {
                        "data-disabled": !0
                    } : {}), {
                        className: (0, s.default)(o ? "pointer-events-none" : ""),
                        children: t
                    }))
                },
                Cell: function(e) {
                    var t = e.textAlign,
                        n = e.children,
                        r = e.className;
                    return (0, i.jsx)("td", {
                        className: (0, s.default)("border-b border-black/10 pr-4 last:pr-0 dark:border-white/10 [tr:last-child_&]:border-b-0", "left" === (void 0 === t ? "left" : t) ? "text-left" : "text-right", r),
                        children: (0, i.jsx)("div", {
                            className: "flex min-h-[40px] items-center [tr[data-disabled=true]_&]:opacity-50",
                            children: n
                        })
                    })
                },
                Actions: function(e) {
                    var t = e.children;
                    return (0, i.jsx)("div", {
                        className: "text-md flex items-center justify-end gap-2",
                        children: t
                    })
                }
            }
        },
        89705: function(e, t, n) {
            n.d(t, {
                J7: function() {
                    return l
                },
                ay: function() {
                    return u
                },
                mS: function() {
                    return d
                }
            });
            var r = n(4337),
                a = n(21389);

            function o() {
                var e = (0, r._)(["\ntext-gray-700 border border-transparent inline-flex h-9 items-center justify-center gap-4 rounded-md bg-white px-3 text-sm\ndark:text-gray-200 dark:transparent dark:bg-transparent\nleading-none outline-none cursor-pointer\nhover:bg-gray-50 dark:hover:bg-[#494A54]\nfocus-visible:border-blue-500 dark:focus-visible:border-blue-500\nradix-state-active:text-gray-600 dark:radix-state-active::text-gray-400\nradix-disabled:cursor-auto radix-disabled:bg-transparent radix-disabled:text-gray-500 dark:radix-disabled:bg-transparent dark:radix-disabled:text-gray-500\n"]);
                return o = function() {
                    return e
                }, e
            }

            function i() {
                var e = (0, r._)(["\nrelative flex h-8 cursor-pointer select-none items-center rounded-md pl-3 pr-7 text-sm leading-none text-gray-700 hover:bg-gray-50 radix-disabled:pointer-events-none radix-highlighted:bg-gray-50 radix-disabled:text-gray-300 radix-highlighted:outline-none dark:text-gray-200 dark:hover:bg-[#2E2F33] dark:radix-highlighted:bg-[#2E2F33] dark:radix-disabled:text-gray-600 dark:radix-highlighted:hover:bg-[#2E2F33]\n"]);
                return i = function() {
                    return e
                }, e
            }

            function s() {
                var e = (0, r._)(["\nmin-w-[220px] rounded-lg bg-white dark:bg-gray-900 p-[5px] shadow-xs will-change-[opacity,transform] radix-side-bottom:animate-slideUpAndFade radix-side-left:animate-slideRightAndFade radix-side-right:animate-slideLeftAndFade radix-side-top:animate-slideDownAndFade\n"]);
                return s = function() {
                    return e
                }, e
            }
            var l = a.Z.button(o()),
                d = a.Z.div(i()),
                u = a.Z.div(s())
        },
        65261: function(e, t, n) {
            n.d(t, {
                S: function() {
                    return k
                },
                Z: function() {
                    return T
                }
            });
            var r = n(39324),
                a = n(71209),
                o = n(4337),
                i = n(81949),
                s = n(35250),
                l = n(70079),
                d = n(76483),
                u = n(94968),
                c = n(70671),
                f = n(32004),
                g = n(21389),
                p = n(50795),
                h = n(82081),
                m = n(88327),
                v = n(88798),
                x = n(47044),
                b = n(54986),
                y = n(77224),
                C = n(89314),
                _ = n(78781),
                w = n(63031);

            function M() {
                var e = (0, o._)(["absolute inset-0 bg-gray-100 opacity-80 flex gap-2 flex-col justify-center items-center dark:bg-gray-800 dark:text-gray-100"]);
                return M = function() {
                    return e
                }, e
            }
            var j = (0, u.vU)({
                dragInstructions: {
                    id: "ThreadLayout.dragInstructions",
                    defaultMessage: "Add anything",
                    description: "Instructions for dragging and dropping a file to upload"
                }
            });

            function T(e) {
                var t = e.className,
                    n = e.children,
                    o = e.currentModelConfig,
                    l = (0, c.Z)(),
                    u = (0, w.i_)(o) !== y.AJ.None,
                    g = (0, _.gF)(function(e) {
                        return e.files
                    }).length >= x.Z0,
                    p = k(l, o),
                    h = p.handleFileAccepted,
                    v = p.handleFileRejected,
                    b = (0, w.Z8)(o),
                    C = (0, d.uI)((0, r._)({
                        maxFiles: x.Z0,
                        disabled: !u || g,
                        noClick: !0,
                        onDropAccepted: h,
                        onDropRejected: v,
                        multiple: !0,
                        maxSize: x.xC
                    }, b)),
                    M = C.getRootProps,
                    T = C.isDragActive,
                    P = function() {
                        if (!b.accept || 0 === Object.keys(b.accept).length) return [];
                        var e = [];
                        return Object.values(b.accept).forEach(function(t) {
                            return e.push.apply(e, (0, i._)(t))
                        }), e.sort()
                    }();
                return (0, s.jsxs)("div", (0, a._)((0, r._)({}, M({
                    className: t
                })), {
                    children: [n, T && (0, s.jsxs)(I, {
                        children: [(0, s.jsx)(m.Fk, {}), (0, s.jsx)("h3", {
                            children: (0, s.jsx)(f.Z, (0, r._)({}, j.dragInstructions))
                        }), P.length > 0 && (0, s.jsx)("h4", {
                            children: P.join(", ")
                        })]
                    })]
                }))
            }

            function k(e, t) {
                var n = (0, w.i_)(t);
                return {
                    handleFileAccepted: (0, l.useCallback)(function(t, r) {
                        p.o.logEvent(h.a.uploadFile, {
                            eventSource: "drag"
                        }), t.length > 0 && t.forEach(function(t) {
                            _.Dw.uploadFile((0, C.W7)(t), t, n, e)
                        })
                    }, [e, n]),
                    handleFileRejected: (0, l.useCallback)(function(t) {
                        t[0].errors.forEach(function(t) {
                            var n = (0, b.s)(t);
                            "string" == typeof n ? v.m.danger(n) : v.m.danger(e.formatMessage(n, {
                                size: x.EZ,
                                maxNum: x.Z0
                            }))
                        })
                    }, [e])
                }
            }
            var I = g.Z.div(M())
        },
        54986: function(e, t, n) {
            n.d(t, {
                Z: function() {
                    return x
                },
                s: function() {
                    return y
                }
            });
            var r = n(39324),
                a = n(35250),
                o = n(47428),
                i = n(27009),
                s = n(1454),
                l = n(70671),
                d = n(32004),
                u = n(94968),
                c = n(50795),
                f = n(82081),
                g = n(75641),
                p = n(67273),
                h = n(45635),
                m = n(88327),
                v = n(73610);

            function x(e) {
                var t = e.disabled,
                    n = e.getInputProps,
                    i = e.openFileDialog,
                    d = e.attachmentsType,
                    u = e.onSelectRecentFile,
                    c = (0, l.Z)(),
                    f = d === g.Cd.Retrieval,
                    v = (0, a.jsx)(p.z, {
                        onClick: f ? void 0 : function(e) {
                            e.preventDefault(), i()
                        },
                        disabled: t,
                        color: "none",
                        className: "rounded-full bg-gray-500 p-0 text-white outline-none hover:bg-black",
                        "aria-label": c.formatMessage(C.uploadFile),
                        children: (0, a.jsx)(m.ZP, {
                            icon: s.OvN,
                            size: "small"
                        })
                    }),
                    x = (0, a.jsx)("input", (0, r._)({}, n({
                        className: "hidden"
                    })));
                return f ? (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsxs)(o.fC, {
                        children: [(0, a.jsx)(o.xz, {
                            disabled: t,
                            asChild: !0,
                            children: v
                        }), (0, a.jsx)(o.Uv, {
                            children: (0, a.jsx)(b, {
                                openFileDialog: i,
                                onSelectRecentFile: u
                            })
                        })]
                    }), x]
                }) : (0, a.jsxs)(h.u, {
                    label: c.formatMessage(C.uploadFile),
                    side: "top",
                    sideOffset: 4,
                    children: [v, x]
                })
            }

            function b(e) {
                var t, n = e.openFileDialog,
                    i = e.onSelectRecentFile,
                    l = (0, v.W)().data,
                    u = (null !== (t = null == l ? void 0 : l.files) && void 0 !== t ? t : []).filter(function(e) {
                        return e.use_case === g.Ei.MyFiles && e.retrieval_index_status === g.Xf.Success
                    }).reverse().slice(0, 4),
                    c = u.map(function(e) {
                        return (0, a.jsx)(o.ck, {
                            className: "cursor-pointer px-3 py-2.5 outline-none focus:bg-green-600 focus:text-white",
                            onSelect: function() {
                                return i({
                                    id: e.id,
                                    name: e.name,
                                    size: e.size
                                })
                            },
                            children: (0, a.jsx)("div", {
                                className: "line-clamp-1",
                                children: e.name
                            })
                        }, e.id)
                    });
                return (0, a.jsxs)(o.VY, {
                    side: "top",
                    sideOffset: 8,
                    align: "start",
                    alignOffset: -20,
                    className: "w-64 rounded-xl border border-gray-100 bg-white text-sm shadow-xxs dark:border-gray-800 dark:bg-gray-900 dark:text-gray-100 dark:shadow-xs",
                    children: [u.length > 0 && (0, a.jsx)(o.__, {
                        className: "px-3 pb-1 pt-3 font-medium",
                        children: (0, a.jsx)(d.Z, (0, r._)({}, C.recentFiles))
                    }), c, (0, a.jsx)(o.ck, {
                        className: "group cursor-pointer p-1 outline-none",
                        onSelect: n,
                        children: (0, a.jsxs)("div", {
                            className: "flex items-center gap-2 rounded-lg bg-black px-3 py-2.5 text-white group-radix-highlighted:bg-green-600",
                            children: [(0, a.jsx)(m.ZP, {
                                icon: s.iRh
                            }), (0, a.jsx)("div", {
                                children: (0, a.jsx)(d.Z, (0, r._)({}, C.upload))
                            })]
                        })
                    })]
                })
            }

            function y(e) {
                var t = e.code,
                    n = e.message;
                switch (t) {
                    case i.jK.FileTooLarge:
                        return C.errorFileTooLarge;
                    case i.jK.TooManyFiles:
                        return c.o.logEvent(f.a.uploadedMaxFilesError), C.errorTooManyFiles;
                    default:
                        return n
                }
            }
            var C = (0, u.vU)({
                uploadFile: {
                    id: "PromptFilePicker.uploadFile",
                    defaultMessage: "Upload file",
                    description: "Tooltip label for uploading a file button"
                },
                errorFileTooLarge: {
                    id: "PromptFilePicker.errorFileTooLarge",
                    defaultMessage: "File is too large. Maximum file size is {size}MB",
                    description: "Error message when file is too large"
                },
                errorTooManyFiles: {
                    id: "PromptFilePicker.errorTooManyFiles",
                    defaultMessage: "Too many files uploaded. Maximum number of files at a time is {maxNum}",
                    description: "Error message when too many files are uploaded"
                },
                recentFiles: {
                    id: "PromptFilePicker.recentFiles",
                    defaultMessage: "Recent files",
                    description: "Header text for the list of recent files"
                },
                upload: {
                    id: "PromptFilePicker.upload",
                    defaultMessage: "Upload",
                    description: "Button text for uploading a file"
                }
            })
        },
        47044: function(e, t, n) {
            n.d(t, {
                $e: function() {
                    return a
                },
                EZ: function() {
                    return o
                },
                Z0: function() {
                    return r
                },
                xC: function() {
                    return i
                }
            });
            var r = 10,
                a = {
                    duration: 20,
                    hasCloseButton: !0
                },
                o = 512,
                i = 536870912
        },
        77224: function(e, t, n) {
            var r, a, o, i, s, l;
            n.d(t, {
                AJ: function() {
                    return r
                },
                Wk: function() {
                    return o
                },
                qM: function() {
                    return a
                }
            }), (i = r || (r = {}))[i.None = 0] = "None", i[i.Multimodal = 1] = "Multimodal", i[i.Interpreter = 2] = "Interpreter", i[i.Retrieval = 3] = "Retrieval", (s = a || (a = {})).CreateFile = "create-file", s.UploadToCdn = "upload-to-cdn", (l = o || (o = {})).Uploading = "uploading", l.Ready = "ready"
        },
        89314: function(e, t, n) {
            n.d(t, {
                Km: function() {
                    return x
                },
                T1: function() {
                    return m
                },
                W7: function() {
                    return g
                },
                ul: function() {
                    return p
                }
            });
            var r = n(21722),
                a = n(75883),
                o = n(75641),
                i = n(23111),
                s = n(99486),
                l = n(68993),
                d = n(88798),
                u = n(78781),
                c = n(63031),
                f = {
                    duration: 20,
                    hasCloseButton: !0
                };

            function g(e) {
                return JSON.stringify({
                    file: e.name,
                    modified: e.lastModified,
                    currentTime: new Date().toString()
                })
            }

            function p(e, t, n) {
                return h.apply(this, arguments)
            }

            function h() {
                return (h = (0, r._)(function(e, t, n) {
                    var r, i, l, d, c, f, g;
                    return (0, a.Jh)(this, function(a) {
                        switch (a.label) {
                            case 0:
                                r = o.Ei.Multimodal, a.label = 1;
                            case 1:
                                return a.trys.push([1, 4, , 5]), [4, s.ZP.createFile(t.name, t.size, r)];
                            case 2:
                                return l = (i = a.sent()).file_id, d = i.upload_url, (g = new FileReader).onload = function() {
                                    var e = new Image;
                                    e.onload = function() {
                                        c = e.width, f = e.height
                                    }, e.src = g.result
                                }, g.readAsDataURL(t), u.Dw.createFileCompleted(e, l, d), [4, y(e, t, l, d, !0)];
                            case 3:
                                return a.sent(), u.Dw.uploadCompleted(e, null != c && null != f ? {
                                    width: c,
                                    height: f
                                } : void 0), [3, 5];
                            case 4:
                                return w(n, t, a.sent()), u.Dw.remove(e), [3, 5];
                            case 5:
                                return [2]
                        }
                    })
                })).apply(this, arguments)
            }

            function m(e, t, n) {
                return v.apply(this, arguments)
            }

            function v() {
                return (v = (0, r._)(function(e, t, n) {
                    var r, i, l, d;
                    return (0, a.Jh)(this, function(a) {
                        switch (a.label) {
                            case 0:
                                r = o.Ei.AceUpload, a.label = 1;
                            case 1:
                                return a.trys.push([1, 4, , 5]), [4, s.ZP.createFile(t.name, t.size, r)];
                            case 2:
                                return l = (i = a.sent()).file_id, d = i.upload_url, u.Dw.createFileCompleted(e, l, d), [4, y(e, t, l, d, !1)];
                            case 3:
                                return a.sent(), u.Dw.uploadCompleted(e), [3, 5];
                            case 4:
                                return w(n, t, a.sent()), u.Dw.remove(e), [3, 5];
                            case 5:
                                return [2]
                        }
                    })
                })).apply(this, arguments)
            }

            function x(e, t, n) {
                return b.apply(this, arguments)
            }

            function b() {
                return (b = (0, r._)(function(e, t, n) {
                    var r, i, l, d;
                    return (0, a.Jh)(this, function(a) {
                        switch (a.label) {
                            case 0:
                                return a.trys.push([0, 3, , 4]), r = o.Ei.MyFiles, [4, s.ZP.createFile(t.name, t.size, r)];
                            case 1:
                                return l = (i = a.sent()).file_id, d = i.upload_url, u.Dw.createFileCompleted(e, l, d), [4, y(e, t, l, d, !0)];
                            case 2:
                                return a.sent(), u.Dw.uploadCompleted(e), [3, 4];
                            case 3:
                                return w(n, t, a.sent()), u.Dw.remove(e), [3, 4];
                            case 4:
                                return [2]
                        }
                    })
                })).apply(this, arguments)
            }

            function y(e, t, n, r) {
                return C.apply(this, arguments)
            }

            function C() {
                return (C = (0, r._)(function(e, t, n, o) {
                    var i, l, d = arguments;
                    return (0, a.Jh)(this, function(c) {
                        switch (c.label) {
                            case 0:
                                var f;
                                return i = d.length > 4 && void 0 !== d[4] && d[4], l = d.length > 5 && void 0 !== d[5] && d[5], [4, s.ZP.uploadFileToAzureStorage(t, o, function(t) {
                                    l && u.Dw.updateProgress(e, 10 + 80 * t)
                                }).then((f = (0, r._)(function(t) {
                                    return (0, a.Jh)(this, function(r) {
                                        switch (r.label) {
                                            case 0:
                                                return u.Dw.updateProgress(e, 90), 201 !== t.status && function(e, t) {
                                                    _.apply(this, arguments)
                                                }(t, n, i), [4, s.ZP.processFileUpload(n)];
                                            case 1:
                                                return r.sent(), [2]
                                        }
                                    })
                                }), function(e) {
                                    return f.apply(this, arguments)
                                }))];
                            case 1:
                                return [2, c.sent()]
                        }
                    })
                })).apply(this, arguments)
            }

            function _() {
                return (_ = (0, r._)(function(e, t) {
                    var n, r, o = arguments;
                    return (0, a.Jh)(this, function(a) {
                        switch (a.label) {
                            case 0:
                                n = o.length > 2 && void 0 !== o[2] && o[2], r = "Unknown error", a.label = 1;
                            case 1:
                                return a.trys.push([1, 3, , 4]), [4, e.data];
                            case 2:
                                return r = a.sent(), [3, 4];
                            case 3:
                                return a.sent(), [3, 4];
                            case 4:
                                throw n && s.ZP.markFileUploadFailed(t, r), new l.gK("File upload to blobstore failed", void 0, "default_upload_error")
                        }
                    })
                })).apply(this, arguments)
            }

            function w(e, t, n) {
                var r = (0, c.kr)(e, "default_upload_error", {
                    fileName: t.name
                });
                (0, i.T)(n) && void 0 !== n.code && (r = (0, c.kr)(e, n.code)), d.m.danger(r, f)
            }
        },
        78781: function(e, t, n) {
            n.d(t, {
                Dw: function() {
                    return v
                },
                HR: function() {
                    return m
                },
                gF: function() {
                    return h
                }
            });
            var r = n(39324),
                a = n(71209),
                o = n(81949),
                i = n(94968),
                s = n(78103),
                l = n(50795),
                d = n(82081),
                u = n(88798),
                c = n(47044),
                f = n(77224),
                g = n(89314),
                p = {
                    files: []
                },
                h = (0, s.ZP)(function() {
                    return p
                }),
                m = {
                    hasUploadInProgress: function(e) {
                        return e.files.some(function(e) {
                            return e.status === f.Wk.Uploading
                        })
                    },
                    getReadyFiles: function(e) {
                        return e.files.filter(function(e) {
                            return e.status === f.Wk.Ready
                        })
                    }
                },
                v = {
                    reset: function() {
                        h.setState(p)
                    },
                    addRecentFile: function(e, t, n, r) {
                        var a = h.getState().files,
                            i = {
                                tempId: e,
                                type: n,
                                status: f.Wk.Ready,
                                file: t
                            };
                        a.length === c.Z0 ? (l.o.logEvent(d.a.uploadedMaxFilesError), u.m.danger(r.formatMessage(x.maxUploadsAtATime, {
                            maxUploads: c.Z0,
                            fileName: t.name
                        }), c.$e)) : h.setState(function(e) {
                            var t = e.files;
                            return {
                                files: (0, o._)(t).concat([i])
                            }
                        })
                    },
                    uploadFile: function(e, t, n, r) {
                        var a = h.getState().files,
                            i = {
                                tempId: e,
                                type: n,
                                status: f.Wk.Uploading,
                                step: f.qM.CreateFile,
                                file: t,
                                progress: 1,
                                fileId: null
                            };
                        a.length === c.Z0 ? (l.o.logEvent(d.a.uploadedMaxFilesError), u.m.danger(r.formatMessage(x.maxUploadsAtATime, {
                            maxUploads: c.Z0,
                            fileName: t.name
                        }), c.$e)) : (h.setState(function(e) {
                            var t = e.files;
                            return {
                                files: (0, o._)(t).concat([i])
                            }
                        }), n === f.AJ.Multimodal ? (0, g.ul)(e, t, r) : n === f.AJ.Interpreter ? (0, g.T1)(e, t, r) : n === f.AJ.Retrieval && (0, g.Km)(e, t, r))
                    },
                    getFileState: function(e) {
                        var t;
                        return null == e ? null : null !== (t = h.getState().files.find(function(t) {
                            return t.tempId === e
                        })) && void 0 !== t ? t : null
                    },
                    createFileCompleted: function(e, t, n) {
                        var i = h.getState().files,
                            s = i.findIndex(function(t) {
                                return t.tempId === e
                            }),
                            l = i[s];
                        if (s >= 0 && l.status === f.Wk.Uploading) {
                            var d = (0, o._)(i);
                            d.splice(s, 1, (0, a._)((0, r._)({}, l), {
                                step: f.qM.UploadToCdn,
                                progress: 10,
                                fileId: t,
                                cdnUrl: n
                            })), h.setState({
                                files: d
                            })
                        }
                    },
                    updateProgress: function(e, t) {
                        var n = h.getState().files,
                            i = n.findIndex(function(t) {
                                return t.tempId === e
                            }),
                            s = n[i];
                        if (i >= 0 && s.status === f.Wk.Uploading) {
                            var l = (0, o._)(n);
                            l.splice(i, 1, (0, a._)((0, r._)({}, s), {
                                progress: t
                            })), h.setState({
                                files: l
                            })
                        }
                    },
                    uploadCompleted: function(e, t) {
                        var n = h.getState().files,
                            i = n.findIndex(function(t) {
                                return t.tempId === e
                            }),
                            s = n[i];
                        if (i >= 0 && s.status === f.Wk.Uploading && null !== s.fileId) {
                            var l = (0, o._)(n);
                            l.splice(i, 1, (0, a._)((0, r._)({}, s), {
                                tempId: e,
                                status: f.Wk.Ready,
                                file: (0, r._)({
                                    name: s.file.name,
                                    id: s.fileId,
                                    size: s.file.size
                                }, t || {})
                            })), h.setState({
                                files: l
                            })
                        }
                    },
                    remove: function(e) {
                        var t = h.getState().files,
                            n = t.findIndex(function(t) {
                                return t.tempId === e
                            });
                        if (n >= 0) {
                            var r = (0, o._)(t);
                            r.splice(n, 1), h.setState({
                                files: r
                            })
                        }
                    }
                },
                x = (0, i.vU)({
                    maxUploadsAtATime: {
                        id: "useFilePickerState.maxUploadsAtATime",
                        defaultMessage: "Unable to upload {fileName}. Max {maxUploads} uploads at a time",
                        description: "Error message when user tries to upload more than the max number of files"
                    }
                })
        },
        63031: function(e, t, n) {
            n.d(t, {
                $H: function() {
                    return m
                },
                Iy: function() {
                    return p
                },
                L8: function() {
                    return h
                },
                O6: function() {
                    return b
                },
                VF: function() {
                    return x
                },
                Z8: function() {
                    return _
                },
                i_: function() {
                    return C
                },
                kr: function() {
                    return v
                },
                qS: function() {
                    return y
                }
            });
            var r = n(21722),
                a = n(75883),
                o = n(70079),
                i = n(70671),
                s = n(94968),
                l = n(62509),
                d = n(75641),
                u = n(99486),
                c = n(54118),
                f = n(88798),
                g = n(77224);

            function p(e) {
                return e.replace("file-service://", "")
            }

            function h(e) {
                return "file-service://" + e
            }

            function m(e) {
                return e.startsWith("file-service://")
            }

            function v(e, t, n) {
                switch (t) {
                    case "file_too_large":
                        return e.formatMessage(w.fileTooLarge, n);
                    case "over_user_quota":
                        return e.formatMessage(w.overUserQuota, n);
                    case "file_not_found":
                        return e.formatMessage(w.fileNotFound, n);
                    case "file_timed_out":
                        return e.formatMessage(w.fileTimedOut, n);
                    case "ace_pod_expired":
                        return e.formatMessage(w.codeInterpreterSessionTimeout, n);
                    case "default_upload_error":
                        return e.formatMessage(w.defaultCreateEntryError, n);
                    case "default_download_link_error":
                        return e.formatMessage(w.defaultDownloadLinkError, n);
                    default:
                        return e.formatMessage(w.unknownError)
                }
            }

            function x() {
                var e = (0, i.Z)();
                return (0, o.useCallback)(function(t, n) {
                    return v(e, t, n)
                }, [e])
            }

            function b() {
                var e, t = (0, l.kP)().session,
                    n = (0, i.Z)();
                return e = (0, r._)(function(e, r) {
                        var o, i, s, l, c;
                        return (0, a.Jh)(this, function(a) {
                            switch (a.label) {
                                case 0:
                                    if (null == t) return f.m.danger(n.formatMessage(w.fileDownloadFailed)), [2, !1];
                                    a.label = 1;
                                case 1:
                                    return a.trys.push([1, 4, , 5]), [4, u.ZP.getFileDownloadLink(e, t.accessToken)];
                                case 2:
                                    if ((o = a.sent()).status !== d.KF.Success) throw Error("File is not ready to download: " + JSON.stringify(o));
                                    return [4, fetch(o.download_url).then(function(e) {
                                        return e.blob()
                                    })];
                                case 3:
                                    return i = a.sent(), s = URL.createObjectURL(i), (l = window.open(s, "_blank")) && l.addEventListener("beforeunload", function() {
                                        URL.revokeObjectURL(s)
                                    }), (c = document.createElement("a")).href = s, c.download = r, c.style.display = "none", c.click(), URL.revokeObjectURL(s), [3, 5];
                                case 4:
                                    return a.sent(), f.m.danger(n.formatMessage(w.fileDownloadFailed)), [2, !1];
                                case 5:
                                    return [2, !0]
                            }
                        })
                    }),
                    function(t, n) {
                        return e.apply(this, arguments)
                    }
            }

            function y() {
                var e, t = (0, l.kP)().session,
                    n = b();
                return e = (0, r._)(function(e, r) {
                        var o;
                        return (0, a.Jh)(this, function(a) {
                            switch (a.label) {
                                case 0:
                                    if (null == t) return [2];
                                    o = 0, a.label = 1;
                                case 1:
                                    if (!(o < e.length)) return [3, 4];
                                    return [4, Promise.all(e.slice(o, o + r).map(function(e) {
                                        return n(e.id, e.name)
                                    }))];
                                case 2:
                                    a.sent(), a.label = 3;
                                case 3:
                                    return o += r, [3, 1];
                                case 4:
                                    return [2]
                            }
                        })
                    }),
                    function(t, n) {
                        return e.apply(this, arguments)
                    }
            }

            function C(e) {
                var t, n, r, a, o = (0, c.Fl)().isCodeInterpreterAvailable,
                    i = g.AJ.None;
                return o && (null === (t = null == e ? void 0 : e.product_features.attachments) || void 0 === t ? void 0 : t.type) === d.Cd.CodeInterpreter ? i = g.AJ.Interpreter : (null === (n = null == e ? void 0 : e.product_features.attachments) || void 0 === n ? void 0 : n.type) === d.Cd.Multimodal || (null == e ? void 0 : null === (r = e.enabledTools) || void 0 === r ? void 0 : r.includes("Hi Jane, come visit us for lunch at OpenAI? \uD83D\uDC9C")) ? i = g.AJ.Multimodal : (null === (a = null == e ? void 0 : e.product_features.attachments) || void 0 === a ? void 0 : a.type) === d.Cd.Retrieval && (i = g.AJ.Retrieval), i
            }

            function _(e) {
                return (0, o.useMemo)(function() {
                    var t, n = null === (t = null == e ? void 0 : e.product_features.attachments) || void 0 === t ? void 0 : t.accepted_mime_types;
                    if (void 0 === n) return {};
                    var r = {
                        "image/jpeg": [".jpg", ".jpeg"],
                        "image/svg+xml": [".svg"],
                        "application/vnd.openxmlformats-officedocument.wordprocessingml.document": [".docx"],
                        "application/vnd.openxmlformats-officedocument.presentationml.presentation": [".pptx"]
                    };
                    return {
                        accept: n.reduce(function(e, t) {
                            return t in r ? e[t] = r[t] : t.includes("/") && (e[t] = [".".concat(t.split("/")[1])]), e
                        }, {})
                    }
                }, [e])
            }
            var w = (0, s.vU)({
                defaultCreateEntryError: {
                    id: "fileUpload.defaultCreateEntryError",
                    defaultMessage: "Unable to upload {fileName}",
                    description: "Error message when file upload fails"
                },
                defaultDownloadLinkError: {
                    id: "fileUpload.defaultDownloadLinkError",
                    defaultMessage: "Failed to get upload status for {fileName}",
                    description: "Error message when file download link fails"
                },
                unknownError: {
                    id: "fileUpload.unknownError",
                    defaultMessage: "Unknown error occurred",
                    description: "Error message when file upload fails"
                },
                fileTooLarge: {
                    id: "fileUpload.fileTooLarge",
                    defaultMessage: "File is too large",
                    description: "Error message when file is too large to upload"
                },
                overUserQuota: {
                    id: "fileUpload.overUserQuota",
                    defaultMessage: "User quota exceeded",
                    description: "Error message when user storage space (quote) has been exceeded"
                },
                fileNotFound: {
                    id: "fileUpload.fileNotFound",
                    defaultMessage: "File not found",
                    description: "Error message when file was not found"
                },
                fileTimedOut: {
                    id: "fileUpload.fileTimedOut",
                    defaultMessage: "File upload timed out. Please try again.",
                    description: "Error message when file upload timed out"
                },
                codeInterpreterSessionTimeout: {
                    id: "fileUpload.codeInterpreterSessionTimeout",
                    defaultMessage: "Code interpreter session expired",
                    description: "Error message when code interpreter session expired"
                },
                fileDownloadFailed: {
                    id: "filesModal.fileDownloadFailed",
                    defaultMessage: "File download failed. Please try again.",
                    description: "Error message when file download fails"
                }
            })
        },
        47703: function(e, t, n) {
            n.d(t, {
                ZC: function() {
                    return b
                },
                ZP: function() {
                    return y
                },
                xz: function() {
                    return C
                }
            });
            var r = n(39324),
                a = n(71209),
                o = n(4337),
                i = n(35250),
                s = n(60554),
                l = n(70079),
                d = n(32004),
                u = n(94968),
                c = n(21389),
                f = n(16600),
                g = n(31621),
                p = n(68993),
                h = n(67273),
                m = n(98076);

            function v() {
                var e = (0, o._)(["\npy-2 px-3 border text-gray-600 rounded-md text-sm dark:text-gray-100\n", "\n", "\n", "\n"]);
                return v = function() {
                    return e
                }, e
            }

            function x() {
                var e = (0, o._)(["bold underline"]);
                return x = function() {
                    return e
                }, e
            }

            function b(e) {
                if (void 0 === e) return {
                    flagSeverity: void 0,
                    shouldHideContent: !1,
                    errCode: void 0,
                    errMessage: void 0
                };
                var t, n, r = e.errType,
                    a = e.errCode,
                    o = e.err;
                return (null === (t = e.message.metadata) || void 0 === t ? void 0 : null === (n = t.finish_details) || void 0 === n ? void 0 : n.type) === "content_filter" ? {
                    flagSeverity: "warning",
                    shouldHideContent: !1,
                    errCode: f.XZ,
                    errMessage: o
                } : {
                    flagSeverity: r,
                    shouldHideContent: "danger" === r && a === f.Dd,
                    errCode: a,
                    errMessage: o
                }
            }

            function y(e) {
                var t = e.message,
                    n = e.onRequestMoreCompletions,
                    a = e.clientThreadId,
                    o = e.id,
                    s = b(t),
                    l = s.errCode,
                    u = s.errMessage,
                    c = s.flagSeverity;
                switch (l) {
                    case f.Kg:
                        return (0, i.jsx)(k, {
                            $flag: c,
                            children: (0, i.jsx)(M, {})
                        });
                    case f.XZ:
                        return (0, i.jsx)(k, {
                            $flag: c,
                            children: (0, i.jsx)(j, {})
                        });
                    case f.Dd:
                        return (0, i.jsx)(k, {
                            $flag: c,
                            children: (0, i.jsx)(T, {})
                        });
                    case m.uU:
                        return (0, i.jsx)(_, {
                            id: o,
                            onRequestMoreCompletions: n,
                            flag: c,
                            clientThreadId: a
                        });
                    case p.wp:
                        return (0, i.jsx)(k, {
                            $flag: c,
                            children: (0, i.jsx)(d.Z, (0, r._)({}, E.historyDisabledConversationMissing))
                        });
                    default:
                        return void 0 !== u ? (0, i.jsx)(k, {
                            $flag: c,
                            children: u
                        }) : null
                }
            }

            function C(e) {
                var t = e && new Date(e),
                    n = t && new Date(t);
                return n ? "after ".concat(n.getHours() % 12 || 12, ":").concat(10 > n.getMinutes() ? "0" : "").concat(n.getMinutes(), " ").concat(n.getHours() >= 12 ? "PM" : "AM") : "later"
            }

            function _(e) {
                var t = e.id,
                    n = e.onRequestMoreCompletions,
                    o = e.flag,
                    u = e.clientThreadId,
                    c = (0, s.useRouter)(),
                    f = (0, m.Y8)(function(e) {
                        return e.isoDate
                    }),
                    p = C(f),
                    v = (0, l.useCallback)(function() {
                        n(t, {
                            eventSource: "mouse"
                        }, !0, "none", !1)
                    }, [t, n]),
                    x = (0, l.useCallback)(function() {
                        var e = void 0 !== u ? g.tQ.getServerThreadId(u) : void 0;
                        void 0 === e ? c.replace("/", void 0, {
                            shallow: !0
                        }) : (0, m.m0)(e), n(t, {
                            eventSource: "mouse"
                        }, !0, "none", !0)
                    }, [t, n, c, u]),
                    b = null != f ? (0, i.jsx)("span", {
                        children: (0, i.jsx)(d.Z, (0, a._)((0, r._)({}, E.gptUsageCapExceeded), {
                            values: {
                                link: w,
                                formattedTime: p
                            }
                        }))
                    }) : (0, i.jsx)(d.Z, (0, r._)({}, E.gptUsageCapExceededExpired));
                return (0, i.jsx)(k, {
                    $flag: null != f ? o : void 0,
                    children: (0, i.jsxs)("div", {
                        className: "flex items-center gap-6",
                        children: [b, null == f && (0, i.jsx)(h.z, {
                            color: "light",
                            className: "flex-shrink-0 bg-white",
                            onClick: v,
                            children: (0, i.jsx)(d.Z, (0, r._)({}, E.buttonTryAgain))
                        }), null != f && (0, i.jsx)(h.z, {
                            color: "light",
                            className: "flex-shrink-0 bg-white",
                            onClick: x,
                            children: (0, i.jsx)(d.Z, (0, r._)({}, E.buttonUseDefaultModel))
                        })]
                    })
                })
            }
            var w = function(e) {
                return (0, i.jsx)("a", {
                    href: "https://share.hsforms.com/16d0ZZVM3QZirXnCD_q7u1Q4sk30",
                    target: "_blank",
                    rel: "noreferrer",
                    className: "underline",
                    children: e
                })
            };

            function M() {
                return (0, i.jsx)(d.Z, (0, a._)((0, r._)({}, E.unusualBehavior), {
                    values: {
                        feedbackLink: N
                    }
                }))
            }

            function j() {
                return (0, i.jsx)(d.Z, (0, a._)((0, r._)({}, E.contentOrTosViolation), {
                    values: {
                        contentPolicyLink: P,
                        feedbackLink: N,
                        termsLink: S
                    }
                }))
            }

            function T() {
                return (0, i.jsx)(d.Z, (0, a._)((0, r._)({}, E.contentPolicyViolation), {
                    values: {
                        contentPolicyLink: P,
                        feedbackLink: N
                    }
                }))
            }
            var k = c.Z.div(v(), function(e) {
                    return "warning" === e.$flag && "border-orange-500 bg-orange-500/10"
                }, function(e) {
                    return "danger" === e.$flag && "border-red-500 bg-red-500/10"
                }, function(e) {
                    return void 0 === e.$flag && "border-green-500 bg-green-500/10"
                }),
                I = c.Z.a(x()),
                P = function(e) {
                    return (0, i.jsx)(I, {
                        target: "_blank",
                        href: "https://openai.com/policies/usage-policies",
                        rel: "noreferrer",
                        children: e
                    })
                },
                N = function(e) {
                    return (0, i.jsx)(I, {
                        target: "_blank",
                        href: "https://forms.gle/3gyAMj5r5rTEcgbs5",
                        rel: "noreferrer",
                        children: e
                    })
                },
                S = function(e) {
                    return (0, i.jsx)(I, {
                        target: "_blank",
                        href: "https://openai.com/policies/terms-of-use",
                        rel: "noreferrer",
                        children: e
                    })
                },
                E = (0, u.vU)({
                    contentPolicyViolation: {
                        id: "TextMessageDisplay.contentPolicyViolation",
                        defaultMessage: "This content may violate our <contentPolicyLink>content policy</contentPolicyLink>. If you believe this to be in error, please <feedbackLink>submit your feedback</feedbackLink> — your input will aid our research in this area.",
                        description: "Content policy violation message"
                    },
                    contentOrTosViolation: {
                        id: "TextMessageDisplay.contentOrTosViolation",
                        defaultMessage: "This content may violate our <contentPolicyLink>content policy</contentPolicyLink> or <termsLink>terms of use</termsLink>. If you believe this to be in error, please <feedbackLink>submit your feedback</feedbackLink> — your input will aid our research in this area.",
                        description: "Content policy violation or terms of use policy violation message"
                    },
                    unusualBehavior: {
                        id: "TextMessageDisplay.unusualBehavior",
                        defaultMessage: "This content may involve unusual patterns of activity. Please proceed with caution. If you believe this to be in error, please <feedbackLink>submit your feedback</feedbackLink> — your input will aid our research in this area.",
                        description: "Unusual behavior content policy violation message"
                    },
                    historyDisabledConversationMissing: {
                        id: "TextMessageDisplay.historyDisabledConversationMissing",
                        defaultMessage: "Sorry, conversations created when Chat History is off expire after 6 hours of inactivity. Please start a new conversation to continue using ChatGPT.",
                        description: "History disabled conversation not found message"
                    },
                    gptUsageCapExceeded: {
                        id: "TextMessageDisplay.gptUsageCapExceeded",
                        defaultMessage: "You've reached the current usage cap for GPT-4. You can continue with the default model now, or try again {formattedTime}. <link>Learn more</link>",
                        description: "GPT usage cap exceeded message"
                    },
                    gptUsageCapExceededExpired: {
                        id: "TextMessageDisplay.gptUsageCapExceededExpired",
                        defaultMessage: "You previously reached your usage cap for GPT-4, but you can now try sending your message again",
                        description: "GPT usage cap exceeded expired message"
                    },
                    buttonUseDefaultModel: {
                        id: "TextMessageDisplay.buttonUseDefaultModel",
                        defaultMessage: "Use default model",
                        description: "Button to use default model"
                    },
                    buttonTryAgain: {
                        id: "TextMessageDisplay.buttonTryAgain",
                        defaultMessage: "Try again",
                        description: "Button to try again"
                    }
                })
        },
        41230: function(e, t, n) {
            n.d(t, {
                oC: function() {
                    return ea
                },
                ZP: function() {
                    return en
                },
                u7: function() {
                    return eh
                },
                zO: function() {
                    return ep
                },
                up: function() {
                    return ev
                },
                Dj: function() {
                    return em
                }
            });
            var r, a, o = n(39324),
                i = n(71209),
                s = n(22830),
                l = n(4337),
                d = n(35250),
                u = n(65374),
                c = n(74686),
                f = n(19841),
                g = n(91530),
                p = n.n(g),
                h = n(77997),
                m = n(70079),
                v = n(1454),
                x = n(13002),
                b = n(70671),
                y = n(32004),
                C = n(94968),
                _ = n(21389),
                w = n(62509),
                M = n(99486),
                j = n(32877),
                T = n(54118),
                k = n(78931),
                I = n(32542),
                P = n(33669),
                N = n(87389),
                S = n(67273),
                E = n(97747),
                Z = n(89368),
                D = n(10580),
                R = n(45635),
                F = n(88327),
                L = n(51973),
                B = n(82816),
                A = n(56817),
                U = n(21722),
                O = n(75883),
                H = n(47428),
                W = n(13995),
                z = n(5268),
                G = n(55629),
                J = n(88798),
                q = ["sharedConversations"],
                V = (0, C.vU)({
                    name: {
                        id: "sharedConversationModal.name",
                        defaultMessage: "Name",
                        description: "Table column header"
                    },
                    dateShared: {
                        id: "sharedConversationModal.dateShared",
                        defaultMessage: "Date shared",
                        description: "Table column header"
                    },
                    loading: {
                        id: "sharedConversationModal.loading",
                        defaultMessage: "Loading...",
                        description: "Loading message"
                    },
                    somethingWentWrong: {
                        id: "sharedConversationModal.somethingWentWrong",
                        defaultMessage: "Something went wrong...",
                        description: "Error message"
                    },
                    retry: {
                        id: "sharedConversationModal.retry",
                        defaultMessage: "Retry",
                        description: "Retry button text"
                    },
                    noSharedConversations: {
                        id: "sharedConversationModal.noSharedConversations",
                        defaultMessage: "You have no shared links.",
                        description: "No shared links message"
                    },
                    title: {
                        id: "sharedConversationModal.title",
                        defaultMessage: "Shared Links",
                        description: "Shared links modal title"
                    },
                    goToOriginConversation: {
                        id: "sharedConversationModal.goToOriginConversation",
                        defaultMessage: "View source chat",
                        description: "Label for conversation icon"
                    },
                    deleteSharedLink: {
                        id: "sharedConversationModal.deleteSharedLink",
                        defaultMessage: "Delete shared link",
                        description: "Label for delete shared link icon"
                    },
                    deleteSharedLinkFailed: {
                        id: "sharedConversationModal.deleteSharedLinkFailed",
                        defaultMessage: "Deleting shared link failed",
                        description: "Toaster message when deleting share link fails"
                    },
                    deleteAllSharedLinks: {
                        id: "sharedConversationModal.deleteSharedAllConversations",
                        defaultMessage: "Delete all shared links",
                        description: "Menu item for deleting all shared links"
                    },
                    deleteAllSharedLinksConfirm: {
                        id: "sharedConversationModal.deleteSharedAllConversationsConfirm",
                        defaultMessage: "Are you sure you want to delete all your shared links?",
                        description: "Confirmation message for deleting share links"
                    },
                    deleteAllSharedLinksFailed: {
                        id: "sharedConversationModal.deleteSharedAllConversationsFailed",
                        defaultMessage: "Deleting shared links failed",
                        description: "Toaster message when deleting all share links fails"
                    }
                });

            function $() {
                var e = (0, W.NL)(),
                    t = (0, b.Z)(),
                    n = (0, c.D)({
                        mutationFn: function() {
                            return M.ZP.deleteAllSharedConversations()
                        },
                        onSettled: function() {
                            e.invalidateQueries(q)
                        },
                        onError: function() {
                            J.m.danger(t.formatMessage(V.deleteAllSharedLinksFailed))
                        }
                    }).mutate;
                return (0, d.jsxs)(H.fC, {
                    children: [(0, d.jsx)(H.xz, {
                        asChild: !0,
                        children: (0, d.jsx)("button", {
                            className: "text-gray-500 hover:text-gray-600 radix-state-open:text-gray-600 dark:hover:text-gray-400 dark:radix-state-open:text-gray-400",
                            children: (0, d.jsx)(F.ZP, {
                                icon: v.K9M
                            })
                        })
                    }), (0, d.jsx)(H.Uv, {
                        children: (0, d.jsx)(H.VY, {
                            className: "min-w-[8rem] rounded-md bg-white py-1 shadow-lg dark:bg-gray-800",
                            side: "bottom",
                            sideOffset: 4,
                            children: (0, d.jsx)(H.ck, {
                                onClick: function() {
                                    window.confirm(t.formatMessage(V.deleteAllSharedLinksConfirm)) && n()
                                },
                                className: "cursor-pointer select-none px-2 py-1 text-red-500 radix-highlighted:bg-gray-50 dark:radix-highlighted:bg-gray-700",
                                children: (0, d.jsx)(y.Z, (0, o._)({}, V.deleteAllSharedLinks))
                            })
                        })
                    })]
                })
            }

            function Q() {
                return M.ZP.getSharedConversations()
            }

            function X(e) {
                var t, n = e.sharedConversation,
                    r = (0, b.Z)(),
                    a = (0, W.NL)(),
                    o = (0, c.D)({
                        mutationFn: (t = (0, U._)(function(e) {
                            var t;
                            return (0, O.Jh)(this, function(n) {
                                return t = e.sharedConversationId, [2, M.ZP.deleteShareLink({
                                    share_id: t
                                })]
                            })
                        }), function(e) {
                            return t.apply(this, arguments)
                        }),
                        onSettled: function() {
                            a.invalidateQueries(q)
                        },
                        onError: function() {
                            J.m.danger(r.formatMessage(V.deleteSharedLinkFailed))
                        }
                    }),
                    i = o.mutate,
                    s = o.isLoading;
                return (0, d.jsxs)(G.Z.Row, {
                    disabled: s,
                    children: [(0, d.jsx)(G.Z.Cell, {
                        children: (0, d.jsxs)("a", {
                            href: "/share/".concat(n.id),
                            target: "_blank",
                            rel: "noreferrer",
                            className: "inline-flex items-center gap-2 align-top text-blue-500 dark:text-blue-400",
                            children: [(0, d.jsx)(F.ZP, {
                                icon: v.XKb,
                                className: "flex-shrink-0"
                            }), n.title]
                        })
                    }), (0, d.jsx)(G.Z.Cell, {
                        children: null != n.create_time ? (0, d.jsx)(C.Ji, {
                            value: n.create_time,
                            month: "long",
                            year: "numeric",
                            day: "numeric"
                        }) : null
                    }), (0, d.jsx)(G.Z.Cell, {
                        children: (0, d.jsxs)(G.Z.Actions, {
                            children: [(0, d.jsx)(R.u, {
                                label: r.formatMessage(V.goToOriginConversation),
                                sideOffset: 4,
                                side: "top",
                                children: (0, d.jsx)("a", {
                                    href: "/c/".concat(n.conversation_id),
                                    target: "_blank",
                                    rel: "noreferrer",
                                    "aria-label": r.formatMessage(V.goToOriginConversation),
                                    className: "cursor-pointer text-gray-500 hover:text-gray-600 dark:hover:text-gray-400",
                                    children: (0, d.jsx)(F.ZP, {
                                        icon: v.IC0
                                    })
                                })
                            }), (0, d.jsx)(R.u, {
                                label: r.formatMessage(V.deleteSharedLink),
                                sideOffset: 4,
                                side: "top",
                                children: (0, d.jsx)("button", {
                                    onClick: function() {
                                        i({
                                            sharedConversationId: n.id
                                        })
                                    },
                                    "aria-label": r.formatMessage(V.deleteSharedLink),
                                    className: "text-gray-500 hover:text-gray-600 dark:hover:text-gray-400",
                                    children: (0, d.jsx)(F.ZP, {
                                        icon: v.Ybf
                                    })
                                })
                            })]
                        })
                    })]
                })
            }

            function K(e) {
                var t, n = e.onClose,
                    r = (0, z.a)({
                        queryKey: q,
                        queryFn: Q,
                        refetchOnMount: "always"
                    }),
                    a = r.data,
                    i = r.isLoading,
                    s = r.isError,
                    l = r.refetch,
                    u = (0, b.Z)();
                return t = i ? (0, d.jsx)("div", {
                    className: "pb-8 text-gray-400 dark:text-gray-600",
                    children: (0, d.jsx)(y.Z, (0, o._)({}, V.loading))
                }) : s ? (0, d.jsxs)("div", {
                    children: [(0, d.jsx)("div", {
                        className: "mb-4 text-red-500",
                        children: (0, d.jsx)(y.Z, (0, o._)({}, V.somethingWentWrong))
                    }), (0, d.jsx)("div", {
                        children: (0, d.jsx)(S.z, {
                            color: "neutral",
                            onClick: function() {
                                l()
                            },
                            children: (0, d.jsx)(y.Z, (0, o._)({}, V.retry))
                        })
                    })]
                }) : 0 === a.total ? (0, d.jsx)("div", {
                    className: "pb-8 text-gray-600 dark:text-gray-400",
                    children: (0, d.jsx)(y.Z, (0, o._)({}, V.noSharedConversations))
                }) : (0, d.jsxs)(G.Z.Root, {
                    className: "max-h-[28rem]",
                    size: "compact",
                    children: [(0, d.jsxs)(G.Z.Header, {
                        children: [(0, d.jsx)(G.Z.HeaderCell, {
                            children: (0, d.jsx)(y.Z, (0, o._)({}, V.name))
                        }), (0, d.jsx)(G.Z.HeaderCell, {
                            children: (0, d.jsx)(y.Z, (0, o._)({}, V.dateShared))
                        }), (0, d.jsx)(G.Z.HeaderCell, {
                            textAlign: "right",
                            children: (0, d.jsx)($, {})
                        })]
                    }), (0, d.jsx)(G.Z.Body, {
                        children: a.items.map(function(e) {
                            return (0, d.jsx)(X, {
                                sharedConversation: e
                            }, e.id)
                        })
                    })]
                }), (0, d.jsx)(Z.Z, {
                    isOpen: !0,
                    onClose: n,
                    size: "custom",
                    className: "max-w-5xl",
                    type: "success",
                    title: u.formatMessage(V.title),
                    closeButton: (0, d.jsx)(E.ZP.CloseButton, {
                        onClose: n
                    }),
                    children: t
                })
            }
            var Y = n(50921),
                ee = n(50828);

            function et() {
                var e = (0, l._)(["block text-sm font-medium mb-1"]);
                return et = function() {
                    return e
                }, e
            }

            function en(e) {
                var t, n, r = e.onClose,
                    l = e.onToggleHistoryDisabled,
                    c = e.onDeleteHistory,
                    g = (0, b.Z)(),
                    h = (0, ee.LC)(),
                    v = (0, P.w$)(),
                    C = (0, s._)((0, m.useState)(!1), 2),
                    _ = C[0],
                    M = C[1],
                    S = (0, s._)((0, m.useState)(!1), 2),
                    D = S[0],
                    R = S[1],
                    F = (0, s._)((0, m.useState)(!1), 2),
                    L = F[0],
                    A = F[1],
                    U = (0, s._)((0, m.useState)(!1), 2),
                    O = U[0],
                    H = U[1],
                    W = (0, s._)((0, m.useState)(a.General), 2),
                    z = W[0],
                    G = W[1],
                    J = (0, m.useContext)(I.QL),
                    q = J.historyDisabled,
                    V = J.toggleHistoryDisabled,
                    $ = (0, B.OS)(function(e) {
                        return e.isOpen
                    }),
                    Q = (0, k.hz)(),
                    X = (0, k.ec)(k.F_.isBusinessWorkspace),
                    Y = !X && Q.has(j.RJ),
                    et = (0, w.kP)().session,
                    en = (0, T.Fl)(),
                    eg = en.isBetaFeaturesUiEnabled,
                    ep = en.isPluginsAvailable,
                    eh = en.isBrowsingAvailable,
                    em = en.isCodeInterpreterAvailable,
                    ev = (0, m.useCallback)(function() {
                        M(!1)
                    }, []),
                    eb = (0, m.useCallback)(function() {
                        R(!1)
                    }, []),
                    ey = (0, m.useCallback)(function() {
                        A(!1)
                    }, []),
                    eC = (0, m.useCallback)(function() {
                        M(!0)
                    }, []),
                    e_ = (0, m.useCallback)(function() {
                        R(!0)
                    }, []),
                    ew = (0, m.useCallback)(function() {
                        A(!0)
                    }, []),
                    eM = (0, m.useCallback)(function() {
                        null == l || l(), V()
                    }, [l, V]),
                    ej = (0, N.S)(),
                    eT = ej.setupMfa,
                    ek = ej.isUsernamePassword,
                    eI = ej.removeMfa;
                return _ ? (0, d.jsx)(el, {
                    onClose: ev
                }) : D ? (0, d.jsx)(es, {
                    onClose: eb,
                    onDeleteHistory: c
                }) : L ? (0, d.jsx)(ef, {
                    onClose: ey
                }) : O ? (0, d.jsx)(K, {
                    onClose: function() {
                        H(!1)
                    }
                }) : (0, d.jsx)(Z.Z, {
                    isOpen: !0,
                    onClose: r,
                    size: "custom",
                    className: "md:max-w-[680px]",
                    type: "success",
                    title: g.formatMessage(ex.settings),
                    closeButton: (0, d.jsx)(E.ZP.CloseButton, {
                        onClose: r
                    }),
                    children: (0, d.jsxs)(u.fC, {
                        className: "flex flex-col gap-6 md:flex-row",
                        defaultValue: z,
                        orientation: v ? "vertical" : void 0,
                        onValueChange: function(e) {
                            G(e)
                        },
                        children: [(0, d.jsxs)(u.aV, {
                            className: (0, f.default)("-ml-[8px] flex min-w-[180px] flex-shrink-0", v ? "flex-col" : "flex-row rounded-lg bg-gray-100 p-1 dark:bg-gray-800/30"),
                            children: [(0, d.jsx)(ed, {
                                value: a.General,
                                icon: x.oq2,
                                label: (0, d.jsx)(y.Z, (0, o._)({}, ex.generalTab))
                            }), eg && (eh || ep || em) && (0, d.jsx)(ed, {
                                value: a.BetaFeatures,
                                icon: x.rTN,
                                label: (0, d.jsx)(y.Z, (0, o._)({}, ex.betaTab))
                            }), (0, d.jsx)(ed, {
                                value: a.DataControls,
                                icon: x.tQn,
                                label: (0, d.jsx)(y.Z, (0, o._)({}, ex.dataControlsTab))
                            })]
                        }), (0, d.jsxs)(eu, {
                            value: a.General,
                            children: [(0, d.jsx)(ec, {
                                children: (0, d.jsx)(ei, {})
                            }), !X && Q.has("tools3_dev") && (0, d.jsx)(ec, {
                                children: (0, d.jsx)(ea, {
                                    label: g.formatMessage(ex.openPluginDevtools),
                                    enabled: $,
                                    onChange: B.Ds.setIsOpen
                                })
                            }), (0, d.jsx)(ec, {
                                children: (0, d.jsx)(eo, {
                                    color: "danger",
                                    disabled: !h,
                                    label: g.formatMessage(ex.clearChatLabel),
                                    buttonLabel: g.formatMessage(ex.clearChatButton),
                                    onClick: e_
                                })
                            })]
                        }), (0, d.jsx)(eu, {
                            value: a.BetaFeatures,
                            children: (0, d.jsx)(er, {})
                        }), (0, d.jsxs)(eu, {
                            value: a.DataControls,
                            children: [X ? (0, d.jsxs)(d.Fragment, {
                                children: [(0, d.jsx)(ec, {
                                    children: (0, d.jsx)(ea, {
                                        label: g.formatMessage(ex.chatHistoryLabel),
                                        enabled: !q,
                                        onChange: eM,
                                        description: (0, d.jsx)(y.Z, (0, i._)((0, o._)({}, ex.chatHistoryOnlyDescription), {
                                            values: {
                                                link: function(e) {
                                                    return (0, d.jsx)("a", {
                                                        href: "https://help.openai.com/en/articles/7730893 ",
                                                        target: "_blank",
                                                        className: "underline",
                                                        rel: "noreferrer",
                                                        children: e
                                                    })
                                                }
                                            }
                                        }))
                                    })
                                }), (0, d.jsx)(ec, {
                                    children: (0, d.jsx)(ea, {
                                        label: g.formatMessage(ex.chatTrainingLabel),
                                        disabled: !0,
                                        enabled: !1,
                                        onChange: p(),
                                        description: (0, d.jsx)(y.Z, (0, o._)({}, ex.chatTrainingEnterpriseDescription)),
                                        toggleTooltip: (0, d.jsx)(y.Z, (0, o._)({}, ex.chatTrainingEnterpriseTooltip))
                                    })
                                })]
                            }) : (0, d.jsx)(ec, {
                                children: (0, d.jsx)(ea, {
                                    label: g.formatMessage(ex.chatHistoryToggleLabel),
                                    enabled: !q,
                                    onChange: eM,
                                    description: (0, d.jsx)(y.Z, (0, i._)((0, o._)({}, ex.chatHistoryDescription), {
                                        values: {
                                            link: function(e) {
                                                return (0, d.jsx)("a", {
                                                    href: "https://help.openai.com/en/articles/7730893 ",
                                                    target: "_blank",
                                                    className: "underline",
                                                    rel: "noreferrer",
                                                    children: e
                                                })
                                            }
                                        }
                                    }))
                                })
                            }), Y && (0, d.jsx)(ec, {
                                children: (0, d.jsx)(eo, {
                                    label: g.formatMessage(ex.sharedConversations),
                                    buttonLabel: g.formatMessage(ex.sharedConversationsButton),
                                    onClick: function() {
                                        H(!0)
                                    }
                                })
                            }), !X && (0, d.jsxs)(d.Fragment, {
                                children: [(0, d.jsx)(ec, {
                                    children: (0, d.jsx)(eo, {
                                        label: g.formatMessage(ex.exportData),
                                        buttonLabel: g.formatMessage(ex.exportButton),
                                        onClick: eC
                                    })
                                }), (0, d.jsx)(ec, {
                                    children: (0, d.jsx)(eo, {
                                        label: g.formatMessage(ex.deleteAccount),
                                        buttonLabel: g.formatMessage(ex.deleteAccountButton),
                                        color: "danger",
                                        onClick: ew
                                    })
                                })]
                            }), Q.has(j.i) && !(null == et ? void 0 : null === (t = et.user) || void 0 === t ? void 0 : t.mfa) && ek && (0, d.jsx)(ec, {
                                children: (0, d.jsx)(eo, {
                                    label: g.formatMessage(ex.enable2fa),
                                    buttonLabel: g.formatMessage(ex.enable),
                                    onClick: eT
                                })
                            }), (null == et ? void 0 : null === (n = et.user) || void 0 === n ? void 0 : n.mfa) && ek && (0, d.jsx)(ec, {
                                children: (0, d.jsx)(eo, {
                                    label: g.formatMessage(ex.disable2fa),
                                    buttonLabel: g.formatMessage(ex.disable),
                                    onClick: eI,
                                    color: "danger"
                                })
                            })]
                        })]
                    })
                })
            }

            function er() {
                var e, t = (0, b.Z)(),
                    n = (0, w.kP)().session,
                    r = (0, T.N2)(),
                    a = (0, T.Fl)(),
                    i = a.isBrowsingAvailable,
                    s = a.isBrowsingEnabled,
                    l = a.isPluginsAvailable,
                    u = a.isPluginsEnabled,
                    f = a.isCodeInterpreterAvailable,
                    g = a.isCodeInterpreterEnabled,
                    p = (0, c.D)({
                        mutationFn: function(t) {
                            var r = t.feature,
                                a = t.enabled;
                            return M.ZP.setUserSettingsBetaFeature(null !== (e = null == n ? void 0 : n.accessToken) && void 0 !== e ? e : "", r, a)
                        },
                        onSettled: r,
                        onError: function() {
                            J.m.danger(t.formatMessage(ex.betaSettingsUpdateFailed))
                        }
                    }),
                    h = p.isLoading,
                    m = p.variables,
                    v = p.mutate,
                    x = h && (null == m ? void 0 : m.feature) === T.tr.BROWSING,
                    C = h && (null == m ? void 0 : m.feature) === T.tr.CODE_INTERPRETER,
                    _ = h && (null == m ? void 0 : m.feature) === T.tr.PLUGINS;
                return (0, d.jsxs)(d.Fragment, {
                    children: [(0, d.jsx)(ec, {
                        children: (0, d.jsx)("p", {
                            children: (0, d.jsx)(y.Z, (0, o._)({}, ex.betaIntro))
                        })
                    }), i && (0, d.jsx)(ec, {
                        children: (0, d.jsx)(ea, {
                            label: t.formatMessage(ex.betaBrowsingToggleLabel),
                            disabled: x,
                            enabled: x ? null == m ? void 0 : m.enabled : s,
                            onChange: function(e) {
                                v({
                                    feature: T.tr.BROWSING,
                                    enabled: e
                                })
                            },
                            description: (0, d.jsx)(y.Z, (0, o._)({}, ex.betaBrowsingToggleDescription))
                        })
                    }), l && (0, d.jsx)(ec, {
                        children: (0, d.jsx)(ea, {
                            label: t.formatMessage(ex.betaPluginToggleLabel),
                            disabled: _,
                            enabled: _ ? null == m ? void 0 : m.enabled : u,
                            onChange: function(e) {
                                v({
                                    feature: T.tr.PLUGINS,
                                    enabled: e
                                })
                            },
                            description: (0, d.jsx)(y.Z, (0, o._)({}, ex.betaPluginToggleDescription))
                        })
                    }), f && (0, d.jsx)(ec, {
                        children: (0, d.jsx)(ea, {
                            label: t.formatMessage(ex.betaCodeInterpreterToggleLabel),
                            disabled: C,
                            enabled: C ? null == m ? void 0 : m.enabled : g,
                            onChange: function(e) {
                                v({
                                    feature: T.tr.CODE_INTERPRETER,
                                    enabled: e
                                })
                            },
                            description: (0, d.jsx)(y.Z, (0, o._)({}, ex.betaCodeInterpreterToggleDescription))
                        })
                    })]
                })
            }

            function ea(e) {
                var t = e.label,
                    n = e.disabled,
                    r = e.enabled,
                    a = e.onChange,
                    o = e.description,
                    i = e.toggleTooltip,
                    s = (0, d.jsx)(Y.Z, {
                        disabled: n,
                        enabled: r,
                        onChange: a,
                        label: t,
                        withLockIcon: n
                    });
                return null != i && (s = (0, d.jsx)(R.u, {
                    label: i,
                    side: "top",
                    sideOffset: 4,
                    children: s
                })), (0, d.jsxs)(d.Fragment, {
                    children: [(0, d.jsxs)("div", {
                        className: "flex items-center justify-between",
                        children: [(0, d.jsx)("div", {
                            children: t
                        }), s]
                    }), null != o && (0, d.jsx)("div", {
                        className: "mt-2 text-xs text-token-text-tertiary",
                        children: o
                    })]
                })
            }

            function eo(e) {
                var t = e.color,
                    n = e.disabled,
                    r = e.label,
                    a = e.buttonLabel,
                    o = e.onClick;
                return (0, d.jsxs)("div", {
                    className: "flex items-center justify-between",
                    children: [(0, d.jsx)("div", {
                        children: r
                    }), (0, d.jsx)(S.z, {
                        color: void 0 === t ? "neutral" : t,
                        disabled: !!n,
                        onClick: o,
                        children: a
                    })]
                })
            }

            function ei() {
                var e = (0, h.F)(),
                    t = e.theme,
                    n = e.setTheme;
                return (0, d.jsxs)("div", {
                    className: "flex items-center justify-between",
                    children: [(0, d.jsx)("div", {
                        children: (0, d.jsx)(y.Z, (0, o._)({}, ex.theme))
                    }), (0, d.jsxs)(D.Z.Root, {
                        value: t,
                        onValueChange: function(e) {
                            return n(e)
                        },
                        children: [(0, d.jsxs)(D.Z.Trigger, {
                            children: [(0, d.jsx)(D.Z.Value, {}), (0, d.jsx)(D.Z.Icon, {})]
                        }), (0, d.jsx)(D.Z.Portal, {
                            children: (0, d.jsxs)(D.Z.Content, {
                                children: [(0, d.jsx)(D.Z.Item, {
                                    value: "system",
                                    children: (0, d.jsx)(y.Z, (0, o._)({}, ex.system))
                                }), (0, d.jsx)(D.Z.Item, {
                                    value: "dark",
                                    children: (0, d.jsx)(y.Z, (0, o._)({}, ex.dark))
                                }), (0, d.jsx)(D.Z.Item, {
                                    value: "light",
                                    children: (0, d.jsx)(y.Z, (0, o._)({}, ex.light))
                                })]
                            })
                        })]
                    })]
                })
            }

            function es(e) {
                var t = e.onClose,
                    n = e.onDeleteHistory,
                    r = (0, b.Z)();
                return (0, d.jsx)(Z.Z, {
                    isOpen: !0,
                    onClose: t,
                    type: "success",
                    title: r.formatMessage(ex.deleteHistoryModalTitle),
                    primaryButton: (0, d.jsx)(E.ZP.Button, {
                        title: r.formatMessage(ex.deleteHistoryModalConfirm),
                        color: "primary",
                        onClick: function() {
                            n(), t()
                        }
                    }),
                    secondaryButton: (0, d.jsx)(E.ZP.Button, {
                        title: r.formatMessage(ex.deleteHistoryModalCancel),
                        color: "neutral",
                        onClick: t
                    })
                })
            }

            function el(e) {
                var t = e.onClose,
                    n = (0, b.Z)(),
                    r = (0, w.kP)().session,
                    a = null == r ? void 0 : r.accessToken,
                    i = (0, m.useCallback)(function() {
                        try {
                            M.ZP.submitDataExport(a).then(function() {
                                J.m.success(n.formatMessage(ex.dataExportRequested)), t()
                            })
                        } catch (e) {
                            J.m.warning(n.formatMessage(ex.dataExportFailed), {
                                hasCloseButton: !0
                            })
                        }
                    }, [a, n, t]);
                return (0, d.jsx)(Z.Z, {
                    isOpen: !0,
                    onClose: t,
                    type: "success",
                    title: n.formatMessage(ex.dataExportModalTitle),
                    primaryButton: (0, d.jsx)(E.ZP.Button, {
                        title: n.formatMessage(ex.dataExportModalConfirm),
                        color: "primary",
                        onClick: i
                    }),
                    secondaryButton: (0, d.jsx)(E.ZP.Button, {
                        title: n.formatMessage(ex.dataExportModalCancel),
                        color: "neutral",
                        onClick: t
                    }),
                    children: (0, d.jsxs)("div", {
                        className: "text-sm",
                        children: [(0, d.jsxs)("ul", {
                            className: "my-3 flex list-disc flex-col gap-1 pl-3",
                            children: [(0, d.jsx)("li", {
                                children: (0, d.jsx)(y.Z, (0, o._)({}, ex.dataExportModalDescription1))
                            }), (0, d.jsx)("li", {
                                children: (0, d.jsx)(y.Z, (0, o._)({}, ex.dataExportModalDescription2))
                            }), (0, d.jsx)("li", {
                                children: (0, d.jsx)(y.Z, (0, o._)({}, ex.dataExportModalDescription3))
                            }), (0, d.jsx)("li", {
                                children: (0, d.jsx)(y.Z, (0, o._)({}, ex.dataExportModalDescription4))
                            })]
                        }), (0, d.jsx)("div", {
                            children: (0, d.jsx)(y.Z, (0, o._)({}, ex.dataExportModalDescription5))
                        })]
                    })
                })
            }

            function ed(e) {
                var t = e.value,
                    n = e.icon,
                    r = e.label,
                    a = (0, P.w$)();
                return (0, d.jsxs)(u.xz, {
                    className: (0, f.default)("group flex items-center justify-start gap-2 rounded-md px-2 py-1.5 text-sm radix-state-active:bg-gray-800 radix-state-active:text-white dark:text-gray-500 dark:radix-state-active:text-white", {
                        "flex-1 items-center justify-center": !a
                    }),
                    value: t,
                    children: [(0, d.jsx)(F.ZP, {
                        icon: n,
                        strokeWidth: 0,
                        className: "h-5 w-5 fill-gray-800 group-radix-state-active:fill-white dark:fill-gray-500"
                    }), (0, d.jsx)("div", {
                        children: r
                    })]
                })
            }

            function eu(e) {
                var t = e.value,
                    n = e.children;
                return (0, d.jsx)(u.VY, {
                    className: "w-full md:min-h-[300px]",
                    value: t,
                    children: (0, d.jsx)("div", {
                        className: "flex flex-col gap-3 text-sm text-token-text-secondary",
                        children: n
                    })
                })
            }

            function ec(e) {
                var t = e.children;
                return (0, d.jsx)("div", {
                    className: "border-b pb-3 last-of-type:border-b-0 dark:border-gray-700",
                    children: t
                })
            }

            function ef(e) {
                var t, n = e.onClose,
                    r = (0, b.Z)(),
                    a = (0, w.kP)().session,
                    i = null == a ? void 0 : a.accessToken,
                    l = null == a ? void 0 : null === (t = a.user) || void 0 === t ? void 0 : t.email,
                    u = (0, s._)((0, m.useState)(""), 2),
                    c = u[0],
                    f = u[1],
                    g = (0, s._)((0, m.useState)(""), 2),
                    p = g[0],
                    h = g[1],
                    x = (0, m.useCallback)(function() {
                        var e, t = null == a ? void 0 : null === (e = a.user) || void 0 === e ? void 0 : e.iat;
                        return void 0 === t || Date.now() / 1e3 - t < 600
                    }, [a]),
                    C = (0, m.useCallback)(function() {
                        try {
                            x() ? M.ZP.deactivateAccount(i).then(function() {
                                (0, w.w7)()
                            }) : J.m.warning(r.formatMessage(ex.deleteAccountSessionTooOld), {
                                hasCloseButton: !0
                            })
                        } catch (e) {
                            J.m.warning(r.formatMessage(ex.deleteAccountFailed), {
                                hasCloseButton: !0
                            })
                        }
                    }, [i, r, x]),
                    _ = (0, m.useCallback)(function() {
                        (0, w.w7)()
                    }, []),
                    j = "DELETE" === p && (void 0 === l || c.toLowerCase() === l.toLowerCase()),
                    T = (0, s._)((0, m.useState)(function() {
                        return x()
                    }), 1)[0],
                    I = (0, k.e2)();
                return (0, d.jsx)(Z.Z, {
                    isOpen: !0,
                    onClose: n,
                    type: "success",
                    title: r.formatMessage(ex.deleteAccountTitle),
                    closeButton: (0, d.jsx)(E.ZP.CloseButton, {
                        onClose: n
                    }),
                    children: (0, d.jsxs)("div", {
                        className: "text-sm",
                        children: [(0, d.jsxs)("ul", {
                            className: "mb-6 mt-4 flex list-disc flex-col gap-1 pl-3",
                            children: [(0, d.jsx)("li", {
                                children: (0, d.jsx)(y.Z, (0, o._)({}, ex.deleteAccountWarning))
                            }), (0, d.jsx)("li", {
                                children: (0, d.jsx)(y.Z, (0, o._)({}, ex.reuseEmailPhoneWarning))
                            }), (0, d.jsx)("li", {
                                children: (0, d.jsx)(y.Z, (0, o._)({}, ex.dataRemovalWarning))
                            }), (0, d.jsx)("li", {
                                children: (0, d.jsx)(y.Z, (0, o._)({}, ex.apiAccessDeletionWarning))
                            }), (null == I ? void 0 : I.purchase_origin_platform) === A._4.MOBILE_IOS && (0, d.jsx)("li", {
                                children: (0, d.jsx)(y.Z, (0, o._)({}, ex.iapSubscriptionWarning))
                            }), (null == I ? void 0 : I.purchase_origin_platform) === A._4.MOBILE_ANDROID && (0, d.jsx)("li", {
                                children: (0, d.jsx)(y.Z, (0, o._)({}, ex.playStoreSubscriptionWarning))
                            })]
                        }), T ? (0, d.jsxs)(d.Fragment, {
                            children: [void 0 !== l ? (0, d.jsxs)("div", {
                                className: "mb-4",
                                children: [(0, d.jsx)(eg, {
                                    children: (0, d.jsx)(y.Z, (0, o._)({}, ex.typeEmailLabel))
                                }), (0, d.jsx)(L.Z, {
                                    value: c,
                                    placeholder: l,
                                    name: "email",
                                    onChange: function(e) {
                                        f(e.target.value)
                                    }
                                })]
                            }) : null, (0, d.jsxs)("div", {
                                className: "mb-4",
                                children: [(0, d.jsx)(eg, {
                                    children: (0, d.jsx)(y.Z, (0, o._)({}, ex.typeDeleteInputLabel))
                                }), (0, d.jsx)(L.Z, {
                                    value: p,
                                    onChange: function(e) {
                                        h(e.target.value)
                                    },
                                    name: "delete",
                                    className: "mb-4"
                                })]
                            }), (0, d.jsx)(S.z, {
                                color: j ? "danger" : "disabled",
                                onClick: C,
                                disabled: !j,
                                className: "w-full",
                                children: j ? (0, d.jsxs)(d.Fragment, {
                                    children: [(0, d.jsx)(F.ZP, {
                                        icon: v.BJv
                                    }), " ", (0, d.jsx)(y.Z, (0, o._)({}, ex.deleteAccountButtonLabel))]
                                }) : (0, d.jsxs)(d.Fragment, {
                                    children: [(0, d.jsx)(F.ZP, {
                                        icon: v.UIZ
                                    }), " ", (0, d.jsx)(y.Z, (0, o._)({}, ex.lockedButtonLabel))]
                                })
                            })]
                        }) : (0, d.jsxs)(d.Fragment, {
                            children: [(0, d.jsx)("p", {
                                className: "pb-4 text-xs text-gray-500",
                                children: (0, d.jsx)(y.Z, (0, o._)({}, ex.recentLoginMessage))
                            }), (0, d.jsx)(S.z, {
                                color: "primary",
                                onClick: _,
                                className: "w-full",
                                children: (0, d.jsx)(y.Z, (0, o._)({}, ex.refreshLoginButtonLabel))
                            })]
                        })]
                    })
                })
            }(r = a || (a = {})).General = "General", r.BetaFeatures = "BetaFeatures", r.DataControls = "DataControls";
            var eg = _.Z.label(et());

            function ep(e) {
                return e.formatMessage(ex.betaCodeInterpreterToggleLabel)
            }

            function eh(e) {
                return e.formatMessage(ex.betaCodeInterpreterToggleDescription)
            }

            function em(e) {
                return e.formatMessage(ex.betaPluginToggleLabel)
            }

            function ev(e) {
                return e.formatMessage(ex.betaPluginToggleDescription)
            }
            var ex = (0, C.vU)({
                settings: {
                    id: "settingsModal.settings",
                    defaultMessage: "Settings",
                    description: "Title for the settings modal"
                },
                theme: {
                    id: "settingsModal.theme",
                    defaultMessage: "Theme",
                    description: "Label for the theme setting"
                },
                system: {
                    id: "settingsModal.system",
                    defaultMessage: "System",
                    description: "Option for the system theme"
                },
                dark: {
                    id: "settingsModal.dark",
                    defaultMessage: "Dark",
                    description: "Option for the dark theme"
                },
                light: {
                    id: "settingsModal.light",
                    defaultMessage: "Light",
                    description: "Option for the light theme"
                },
                sharedConversations: {
                    id: "settingsModal.sharedConversations",
                    defaultMessage: "Shared links",
                    description: "Label for the shared chat/link button"
                },
                sharedConversationsButton: {
                    id: "settingsModal.sharedConversationsButton",
                    defaultMessage: "Manage",
                    description: "Manage shared links/conversations button"
                },
                exportData: {
                    id: "settingsModal.exportData",
                    defaultMessage: "Export data",
                    description: "Label for the export data button"
                },
                exportButton: {
                    id: "settingsModal.exportButton",
                    defaultMessage: "Export",
                    description: "Export data button"
                },
                deleteAccount: {
                    id: "settingsModal.deleteAccount",
                    defaultMessage: "Delete account",
                    description: "Label for the delete account button"
                },
                deleteAccountButton: {
                    id: "settingsModal.deleteButton",
                    defaultMessage: "Delete",
                    description: "Delete account button"
                },
                openPluginDevtools: {
                    id: "settingsModal.openPluginDevtools",
                    defaultMessage: "Open plugin devtools",
                    description: "Label for the open plugin devtools setting"
                },
                enable2fa: {
                    id: "settingsModal.enable2fa",
                    defaultMessage: "Enable two-factor authentication",
                    description: "Label for the enable 2FA button"
                },
                enable: {
                    id: "settingsModal.enable",
                    defaultMessage: "Enable",
                    description: "Enable 2FA button"
                },
                disable: {
                    id: "settingsModal.disable",
                    defaultMessage: "Disable",
                    description: "Disable 2FA button"
                },
                disable2fa: {
                    id: "settingsModal.disable2fa",
                    defaultMessage: "Disable two factor authentication",
                    description: "Label for the mfa remove button."
                },
                chatHistoryDescription: {
                    id: "settingsModal.chatHistoryDescription",
                    defaultMessage: "Save new chats on this browser to your history and allow them to be used to improve our models. Unsaved chats will be deleted from our systems within 30 days. This setting does not sync across browsers or devices. <link>Learn more</link>",
                    description: "Description for the chat history setting"
                },
                deleteHistoryModalTitle: {
                    id: "settingsModal.deleteHistoryModalTitle",
                    defaultMessage: "Clear your conversation history - are you sure?",
                    description: "Title for the delete history modal"
                },
                deleteHistoryModalConfirm: {
                    id: "settingsModal.deleteHistoryModalConfirm",
                    defaultMessage: "Confirm deletion",
                    description: "Confirm button for the delete history modal"
                },
                deleteHistoryModalCancel: {
                    id: "settingsModal.deleteHistoryModalCancel",
                    defaultMessage: "Cancel",
                    description: "Cancel button for the delete history modal"
                },
                dataExportRequested: {
                    id: "settingsModal.dataExportRequested",
                    defaultMessage: "Successfully exported data. You should receive an email shortly with your data.",
                    description: "Message shown when a data export request is received"
                },
                dataExportFailed: {
                    id: "settingsModal.dataExportFailed",
                    defaultMessage: "We were unable to process your export at this time. Please try again later.",
                    description: "Message shown when a data export request fails"
                },
                dataExportModalTitle: {
                    id: "settingsModal.dataExportModalTitle",
                    defaultMessage: "Request data export - are you sure?",
                    description: "Title for the data export modal"
                },
                dataExportModalConfirm: {
                    id: "settingsModal.dataExportModalConfirm",
                    defaultMessage: "Confirm export",
                    description: "Confirm button for the data export modal"
                },
                dataExportModalCancel: {
                    id: "settingsModal.dataExportModalCancel",
                    defaultMessage: "Cancel",
                    description: "Cancel button for the data export modal"
                },
                dataExportModalDescription1: {
                    id: "settingsModal.dataExportModalDescription1",
                    defaultMessage: "Your account details and conversations will be included in the export.",
                    description: "Description for the data export modal"
                },
                dataExportModalDescription2: {
                    id: "settingsModal.dataExportModalDescription2",
                    defaultMessage: "The data will be sent to your registered email in a downloadable file.",
                    description: "Description for the data export modal"
                },
                dataExportModalDescription3: {
                    id: "settingsModal.dataExportModalDescription3",
                    defaultMessage: "The download link will expire 24 hours after you receive it.",
                    description: "Description for the data export modal"
                },
                dataExportModalDescription4: {
                    id: "settingsModal.dataExportModalDescription4",
                    defaultMessage: "Processing may take some time. You'll be notified when it's ready.",
                    description: "Description for the data export modal"
                },
                dataExportModalDescription5: {
                    id: "settingsModal.dataExportModalDescription5",
                    defaultMessage: 'To proceed, click "Confirm export" below.',
                    description: "Description for the data export modal"
                },
                deleteAccountSessionTooOld: {
                    id: "settingsModal.deleteAccountSessionTooOld",
                    defaultMessage: "Your login session is too old. Please log in again before deleting your account.",
                    description: "Message shown when the user's login session is too old to delete their account."
                },
                deleteAccountFailed: {
                    id: "settingsModal.deleteAccountFailed",
                    defaultMessage: "Failed to delete account. Please try again later.",
                    description: "Message shown when there's an error deleting the user's account."
                },
                deleteAccountTitle: {
                    id: "settingsModal.deleteAccountTitle",
                    defaultMessage: "Delete account - are you sure?",
                    description: "Title for the delete account confirmation modal."
                },
                deleteAccountWarning: {
                    id: "settingsModal.deleteAccountWarning",
                    defaultMessage: "Deleting your account is permanent and cannot be undone.",
                    description: "Warning message about account deletion being permanent."
                },
                reuseEmailPhoneWarning: {
                    id: "settingsModal.reuseEmailPhoneWarning",
                    defaultMessage: "For security reasons, you cannot reuse the same email or phone number for a new account.",
                    description: "Warning message about not being able to reuse email or phone number for a new account."
                },
                dataRemovalWarning: {
                    id: "settingsModal.dataRemovalWarning",
                    defaultMessage: "All your data, including profile, conversations, and API usage, will be removed.",
                    description: "Warning message about data removal after account deletion."
                },
                apiAccessDeletionWarning: {
                    id: "settingsModal.apiAccessDeletionWarning",
                    defaultMessage: "If you've been using ChatGPT with the API, this access will also be deleted.",
                    description: "Warning message about API access being deleted."
                },
                iapSubscriptionWarning: {
                    id: "settingsModal.iapSubscriptionWarning",
                    defaultMessage: "You will need to cancel your in-app purchase subscription in the Apple App Store. We cannot cancel your subscription for you.",
                    description: "Warning message about cancelling in-app subscriptions."
                },
                playStoreSubscriptionWarning: {
                    id: "settingsModal.playStoreSubscriptionWarning",
                    defaultMessage: "You will need to cancel your in-app purchase subscription in the Google Play Store. We cannot cancel your subscription for you.",
                    description: "Warning message about cancelling in-app subscriptions."
                },
                typeEmailLabel: {
                    id: "settingsModal.typeEmailLabel",
                    defaultMessage: "Please type your account email.",
                    description: "Label for email input field when deleting an account."
                },
                typeDeleteInputLabel: {
                    id: "settingsModal.typeDeleteInputLabel",
                    defaultMessage: 'To proceed, type "DELETE" in the input field below.',
                    description: "Label for DELETE input field when deleting an account."
                },
                lockedButtonLabel: {
                    id: "settingsModal.lockedButtonLabel",
                    defaultMessage: "Locked",
                    description: "Label for the locked button when deleting an account."
                },
                deleteAccountButtonLabel: {
                    id: "settingsModal.deleteAccountButtonLabel",
                    defaultMessage: "Permanently delete my account",
                    description: "Label for the button to confirm account deletion."
                },
                recentLoginMessage: {
                    id: "settingsModal.recentLoginMessage",
                    defaultMessage: "You may only delete your account if you have logged in within the last 10 minutes. Please log in again, then return here to continue.",
                    description: "Message shown when the user needs to log in again to delete their account."
                },
                refreshLoginButtonLabel: {
                    id: "settingsModal.refreshLoginButtonLabel",
                    defaultMessage: "Refresh login",
                    description: "Label for the button to refresh login."
                },
                chatHistoryToggleLabel: {
                    id: "settingsModal.chatHistoryToggleLabel",
                    defaultMessage: "Chat history & training",
                    description: "Label for the chat history toggle."
                },
                chatHistoryLabel: {
                    id: "settingsModal.chatHistoryLabel",
                    defaultMessage: "Chat history",
                    description: "Label for the chat history toggle."
                },
                chatHistoryOnlyDescription: {
                    id: "settingsModal.chatHistoryOnlyDescription",
                    defaultMessage: "Save new chats on this browser to your history. Unsaved chats will be deleted from our systems within 30 days. This setting does not sync across browsers or devices. <link>Learn more</link>",
                    description: "Description for the chat history setting"
                },
                chatTrainingLabel: {
                    id: "settingsModal.chatTrainingLabel",
                    defaultMessage: "Chat training",
                    description: "Label for the chat training toggle."
                },
                chatTrainingEnterpriseDescription: {
                    id: "settingsModal.chatTrainingEnterpriseDescription",
                    defaultMessage: "This workspace is private and opted out of training.",
                    description: "Description for the disabled chat training toggle."
                },
                chatTrainingEnterpriseTooltip: {
                    id: "settingsModal.chatTrainingEnterpriseTooltip",
                    defaultMessage: "ChatGPT Enterprise automatically disables training.",
                    description: "Tooltip for the disabled chat training toggle."
                },
                dataControlsTab: {
                    id: "settingsModal.dataControls",
                    defaultMessage: "Data controls",
                    description: "Label for the data controls tab"
                },
                betaIntro: {
                    id: "settingsModal.betaIntro",
                    defaultMessage: "As a Plus user, enjoy early access to experimental new features, which may change during development.",
                    description: "Introduction for the beta features tab"
                },
                betaSettingsUpdateFailed: {
                    id: "settingsModal.betaSettingsUpdateFailed",
                    defaultMessage: "Failed to update your beta setting",
                    description: "Message shown when there's an error updating beta settings"
                },
                betaPluginToggleLabel: {
                    id: "settingsModal.betaPluginToggleLabel",
                    defaultMessage: "Plugins",
                    description: "Label for the Plugins beta toggle."
                },
                betaPluginToggleDescription: {
                    id: "settingsModal.betaPluginToggleDescription",
                    defaultMessage: "Try a version of ChatGPT that knows when and how to use third-party plugins that you enable.",
                    description: "Description for the Plugins beta toggle."
                },
                betaBrowsingToggleLabel: {
                    id: "settingsModal.betaBrowsingToggleLabel",
                    defaultMessage: "Browse with Bing",
                    description: "Label for the Browse with Bing beta toggle."
                },
                betaBrowsingToggleDescription: {
                    id: "settingsModal.betaBrowsingToggleDescription",
                    defaultMessage: "Try a version of ChatGPT that knows when and how to browse the internet to answer questions about recent topics and events.",
                    description: "Description for the Browsing beta toggle."
                },
                betaCodeInterpreterToggleLabel: {
                    id: "settingsModal.betaCodeInterpreterToggleLabel",
                    defaultMessage: "Code interpreter",
                    description: "Label for the Code interpreter beta toggle."
                },
                betaCodeInterpreterToggleDescription: {
                    id: "settingsModal.betaCodeInterpreterToggleDescription",
                    defaultMessage: "Try a version of ChatGPT that knows how to write and execute python code, and can work with file uploads. Try asking for help with data analysis, image conversions, or editing a code file. Note: files will not persist beyond a single session.",
                    description: "Description for the Code interpreter beta toggle."
                },
                generalTab: {
                    id: "settingsModal.generalTab",
                    defaultMessage: "General",
                    description: "Label for the general tab"
                },
                betaTab: {
                    id: "settingsModal.betaTab",
                    defaultMessage: "Beta features",
                    description: "Label for the Beta Features tab"
                },
                clearChatLabel: {
                    id: "settingsModal.clearChatLabel",
                    defaultMessage: "Clear all chats",
                    description: "Label for the clear chat button"
                },
                clearChatButton: {
                    id: "settingsModal.clearChatButton",
                    defaultMessage: "Clear",
                    description: "Clear chat button"
                }
            })
        },
        82816: function(e, t, n) {
            n.d(t, {
                Ds: function() {
                    return P
                },
                OS: function() {
                    return I
                },
                ZP: function() {
                    return N
                }
            });
            var r = n(21722),
                a = n(39324),
                o = n(71209),
                i = n(22830),
                s = n(75883),
                l = n(35250),
                d = n(13995),
                u = n(70079),
                c = n(1454),
                f = n(70671),
                g = n(32004),
                p = n(94968),
                h = n(78103),
                m = n(62509),
                v = n(32877),
                x = n(78931),
                b = n(67273),
                y = n(70293),
                C = n(1821),
                _ = n(88798),
                w = n(15608),
                M = n(73908),
                j = n(31486),
                T = n(48759),
                k = n(85330),
                I = (0, h.ZP)(function() {
                    return {
                        isOpen: !1
                    }
                }),
                P = {
                    close: function() {
                        I.setState({
                            isOpen: !1
                        })
                    },
                    setIsOpen: function(e) {
                        I.setState({
                            isOpen: e
                        })
                    }
                };

            function N(e) {
                var t = e.slideOver,
                    n = (0, f.Z)(),
                    p = (0, i._)((0, u.useState)(), 2),
                    h = p[0],
                    N = p[1],
                    E = (0, i._)((0, u.useState)(!1), 2),
                    Z = E[0],
                    D = E[1],
                    R = (0, i._)((0, u.useState)(!1), 2),
                    F = R[0],
                    L = R[1],
                    B = (0, i._)((0, u.useState)(!1), 2),
                    A = B[0],
                    U = B[1],
                    O = (0, m.kP)().session,
                    H = (0, x.hz)(),
                    W = (null == O ? void 0 : O.user) != null && (0, m.yl)(O.user) || H.has(v.YI),
                    z = (0, d.NL)(),
                    G = I(function(e) {
                        return e.isOpen
                    }),
                    J = (0, k.p0)(),
                    q = (0, w.sd)().fetchManifestAndSpec,
                    V = (0, u.useMemo)(function() {
                        return W ? J[0] : J.find(M.cf)
                    }, [J, W]),
                    $ = (0, u.useCallback)((0, r._)(function() {
                        return (0, s.Jh)(this, function(e) {
                            return V && (N(void 0), q({
                                domain: V.domain,
                                onSuccess: function(e) {
                                    N({
                                        manifestValidationInfo: e.scrapeManifestResponse.manifest_validation_info,
                                        apiValidationInfo: e.apiValidationInfo
                                    }), null != e.scrapeManifestResponse.plugin && (0, w.$L)(e.scrapeManifestResponse.plugin, z)
                                },
                                onError: function(e) {
                                    _.m.danger((null == e ? void 0 : e.message) || "Error refreshing plugin.")
                                }
                            })), [2]
                        })
                    }), [V, z, q]);
                return ((0, u.useEffect)(function() {
                    G && $()
                }, [G, $]), H.has(v.Wk)) ? (0, l.jsx)(y.ZP, {
                    icon: c.V7f,
                    title: n.formatMessage(S.title),
                    isOpen: G,
                    slideOver: t,
                    onClose: P.close,
                    children: (0, l.jsx)("div", {
                        className: "border-t border-gray-100 p-2 text-sm dark:border-gray-700",
                        children: null != V ? (0, l.jsxs)("div", {
                            className: "flex flex-col gap-2",
                            children: [(0, l.jsx)("div", {
                                children: (0, l.jsx)(b.z, {
                                    size: "small",
                                    color: "neutral",
                                    onClick: $,
                                    children: (0, l.jsx)(g.Z, (0, a._)({}, S.refreshPlugin))
                                })
                            }), h ? (0, l.jsxs)(l.Fragment, {
                                children: [(0, l.jsx)(j.Z, {
                                    plugin: V
                                }), (0, l.jsx)("div", {
                                    children: (0, l.jsx)(g.Z, (0, o._)((0, a._)({}, S.pluginId), {
                                        values: {
                                            id: V.id
                                        }
                                    }))
                                }), (0, l.jsx)(T.rC, {
                                    manifestValidationInfo: h.manifestValidationInfo,
                                    expanded: Z,
                                    onChangeExpanded: D
                                }), null != h.apiValidationInfo && (0, l.jsxs)(l.Fragment, {
                                    children: [(0, l.jsx)(T.q6, {
                                        apiValidationInfo: h.apiValidationInfo,
                                        expanded: F,
                                        onChangeExpanded: L
                                    }), (0, l.jsx)(T.bf, {
                                        apiValidationInfo: h.apiValidationInfo,
                                        expanded: A,
                                        onChangeExpanded: U
                                    })]
                                })]
                            }) : (0, l.jsx)("div", {
                                className: "self-center",
                                children: (0, l.jsx)(C.Z, {})
                            })]
                        }) : (0, l.jsx)("div", {
                            className: "mt-4 text-center",
                            children: W ? (0, l.jsx)(g.Z, (0, a._)({}, S.enableLocalhostPluginWithDevTools)) : (0, l.jsx)(g.Z, (0, a._)({}, S.enableLocalhostPlugin))
                        })
                    })
                }) : null
            }
            var S = (0, p.vU)({
                title: {
                    id: "PluginDevtools.title",
                    description: "Title of the plugin devtools component.",
                    defaultMessage: "Plugin devtools"
                },
                refreshPlugin: {
                    id: "PluginDevtools.refreshPlugin",
                    description: "Refresh plugin button text.",
                    defaultMessage: "Refresh plugin"
                },
                pluginId: {
                    id: "PluginDevtools.pluginId",
                    description: "Text for showing the plugin id.",
                    defaultMessage: "Plugin id: {id}"
                },
                enableLocalhostPlugin: {
                    id: "PluginDevtools.enableLocalhostPlugin",
                    description: "Text displayed when a localhost plugin should be enabled to use devtools.",
                    defaultMessage: "Please enable a localhost plugin to use devtools."
                },
                enableLocalhostPluginWithDevTools: {
                    id: "PluginDevtools.enableLocalhostPlugin",
                    description: "Text displayed when a localhost plugin should be enabled to use devtools.",
                    defaultMessage: "Please enable a localhost plugin (or any plugin if you're a plugin reviewer) to use devtools."
                }
            })
        },
        31486: function(e, t, n) {
            n.d(t, {
                Z: function() {
                    return o
                }
            });
            var r = n(35250),
                a = n(91809);

            function o(e) {
                var t = e.plugin,
                    n = t.manifest.name_for_human;
                return (0, r.jsxs)("div", {
                    className: "flex gap-4 rounded bg-gray-50 px-4 py-2 dark:bg-gray-800",
                    children: [(0, r.jsx)(a.Z, {
                        url: t.manifest.logo_url,
                        name: n,
                        size: 32,
                        className: "flex-shrink-0"
                    }), (0, r.jsxs)("div", {
                        className: "flex flex-col gap-1",
                        children: [(0, r.jsx)("h2", {
                            className: "align-top text-base font-medium",
                            children: n
                        }), (0, r.jsx)("div", {
                            className: "text-sm",
                            children: t.manifest.description_for_human
                        })]
                    })]
                })
            }
        },
        48759: function(e, t, n) {
            n.d(t, {
                bf: function() {
                    return f
                },
                q6: function() {
                    return c
                },
                rC: function() {
                    return u
                }
            });
            var r = n(39324),
                a = n(70216),
                o = n(22830),
                i = n(35250),
                s = n(70079),
                l = n(1454),
                d = n(88327);

            function u(e) {
                var t = e.manifestValidationInfo,
                    n = (0, a._)(e, ["manifestValidationInfo"]),
                    o = t.manifest_dict,
                    s = t.warnings,
                    l = t.errors;
                return (0, i.jsx)(g, (0, r._)({
                    name: "manifest",
                    content: o,
                    warnings: s,
                    errors: l
                }, n))
            }

            function c(e) {
                var t = e.apiValidationInfo,
                    n = (0, a._)(e, ["apiValidationInfo"]),
                    o = t.openapi_spec_dict,
                    s = t.warnings,
                    l = t.errors;
                return (0, i.jsx)(g, (0, r._)({
                    name: "OpenAPI spec",
                    content: o,
                    warnings: s,
                    errors: l
                }, n))
            }

            function f(e) {
                var t = e.apiValidationInfo,
                    n = (0, a._)(e, ["apiValidationInfo"]),
                    o = t.api_typescript;
                return o ? (0, i.jsx)(p, (0, r._)({
                    text: "Prompt for ChatGPT",
                    content: o
                }, n)) : null
            }

            function g(e) {
                var t = e.name,
                    n = e.content,
                    o = e.warnings,
                    s = e.errors,
                    u = (0, a._)(e, ["name", "content", "warnings", "errors"]),
                    c = o && o.length > 0,
                    f = s && s.length > 0,
                    g = "Validated ".concat(t),
                    h = (0, i.jsx)(d.ZP, {
                        icon: l.UgA,
                        className: "text-green-500"
                    });
                return f ? (g = "Errors in ".concat(t), h = (0, i.jsx)(d.ZP, {
                    icon: l.q5L,
                    className: "text-red-500"
                })) : c && (g = "Warnings in ".concat(t), h = (0, i.jsx)(d.ZP, {
                    icon: l.bcx,
                    className: "text-yellow-500"
                })), (0, i.jsx)(p, (0, r._)({
                    icon: h,
                    text: g,
                    content: n,
                    warnings: o,
                    errors: s
                }, u))
            }

            function p(e) {
                var t = e.icon,
                    n = e.text,
                    r = e.content,
                    a = e.warnings,
                    u = e.errors,
                    c = e.expanded,
                    f = e.onChangeExpanded,
                    g = (0, o._)((0, s.useState)(!1), 2),
                    p = g[0],
                    h = g[1],
                    m = null != c ? c : p,
                    v = (0, s.useCallback)(function() {
                        f ? f(!m) : h(function(e) {
                            return !e
                        })
                    }, [m, f]);
                return (0, i.jsxs)("div", {
                    className: "flex flex-col gap-2 text-sm",
                    children: [(0, i.jsxs)("div", {
                        className: "flex items-center gap-1",
                        children: [t && (0, i.jsx)("div", {
                            children: t
                        }), (0, i.jsx)("div", {
                            children: n
                        }), (0, i.jsx)("div", {
                            role: "button",
                            className: "cursor-pointer text-gray-500 hover:text-gray-700",
                            onClick: v,
                            children: (0, i.jsx)(d.ZP, {
                                icon: m ? l.rH8 : l.bTu
                            })
                        })]
                    }), m && (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsxs)("div", {
                            className: "flex flex-col gap-2 font-semibold",
                            children: [u && u.map(function(e, t) {
                                return (0, i.jsx)("div", {
                                    className: "text-red-500",
                                    children: e
                                }, t)
                            }), a && a.map(function(e, t) {
                                return (0, i.jsx)("div", {
                                    className: "text-yellow-500",
                                    children: e
                                }, t)
                            })]
                        }), r && (0, i.jsx)("pre", {
                            className: "overflow-auto whitespace-pre-wrap text-xs",
                            children: "string" == typeof r ? r : JSON.stringify(r, null, 2)
                        })]
                    })]
                })
            }
        },
        15608: function(e, t, n) {
            n.d(t, {
                $L: function() {
                    return b
                },
                Bb: function() {
                    return x
                },
                U$: function() {
                    return m
                },
                Up: function() {
                    return y
                },
                nT: function() {
                    return _
                },
                qo: function() {
                    return v
                },
                sd: function() {
                    return w
                }
            });
            var r = n(21722),
                a = n(39324),
                o = n(71209),
                i = n(22830),
                s = n(81949),
                l = n(75883),
                d = n(13995),
                u = n(74686),
                c = n(70079),
                f = n(99486),
                g = n(73908),
                p = n(35101),
                h = n(14444);

            function m(e) {
                var t = e.onSuccess,
                    n = e.onError,
                    r = e.onSettled,
                    a = (0, d.NL)(),
                    o = (0, u.D)(f.ZP.updatePluginUserSettings.bind(f.ZP), {
                        onSuccess: function(e) {
                            x(e, a), b(e, a), t(e)
                        },
                        onError: n,
                        onSettled: r
                    }).mutate;
                return (0, c.useCallback)(function(e) {
                    o({
                        pluginId: e,
                        isInstalled: !0
                    })
                }, [o])
            }

            function v(e) {
                var t = e.onSuccess,
                    n = e.onError,
                    r = e.onSettled,
                    a = (0, d.NL)(),
                    o = (0, u.D)(f.ZP.updatePluginUserSettings.bind(f.ZP), {
                        onSuccess: function(e) {
                            (function(e, t) {
                                var n = h.Z;
                                t.setQueryData(n, function(t) {
                                    var n = (0, s._)((null == t ? void 0 : t.items) || []),
                                        r = n.findIndex(function(t) {
                                            return t.id === e.id
                                        });
                                    return -1 !== r && n.splice(r, 1), {
                                        count: n.length,
                                        items: n
                                    }
                                })
                            })(e, a), b(e, a), t(e)
                        },
                        onError: n,
                        onSettled: r
                    }).mutate;
                return (0, c.useCallback)(function(e) {
                    o({
                        pluginId: e,
                        isInstalled: !1
                    })
                }, [o])
            }

            function x(e, t) {
                var n = h.Z;
                t.setQueryData(n, function(t) {
                    var n = (0, s._)((null == t ? void 0 : t.items) || []),
                        r = n.findIndex(function(t) {
                            return t.id === e.id
                        });
                    return -1 !== r ? n[r] = e : n.push(e), {
                        count: n.length,
                        items: n
                    }
                })
            }

            function b(e, t) {
                var n = p.V;
                t.setQueriesData(n, function(t) {
                    if (!t) return t;
                    var n = t.items.findIndex(function(t) {
                        return t.id === e.id
                    });
                    if (-1 === n) return t;
                    var r = (0, s._)(t.items);
                    return r[n] = e, (0, o._)((0, a._)({}, t), {
                        items: r
                    })
                })
            }

            function y(e, t) {
                return C.apply(this, arguments)
            }

            function C() {
                return (C = (0, r._)(function(e, t) {
                    var n, r;
                    return (0, l.Jh)(this, function(a) {
                        switch (a.label) {
                            case 0:
                                return n = "".concat(window.location.origin, "/aip/").concat(e.id, "/oauth/callback"), [4, f.ZP.pluginOauthRedirect(e.id, n, t)];
                            case 1:
                                return r = a.sent(), window.location.href = r.redirect_uri, [2]
                        }
                    })
                })).apply(this, arguments)
            }

            function _(e) {
                var t = e.manifest.auth;
                if ("oauth" !== t.type || !e.oauth_client_id) return null;
                var n = new URLSearchParams({
                    response_type: "code",
                    client_id: e.oauth_client_id,
                    redirect_uri: "".concat(window.location.origin, "/aip/").concat(e.id, "/oauth/callback"),
                    scope: t.scope
                });
                return t.client_url.includes("slack.com") && (n.delete("scope"), n.append("user_scope", t.scope)), "".concat(t.client_url, "?").concat(n)
            }

            function w() {
                var e, t = (0, i._)((0, c.useState)(!1), 2),
                    n = t[0],
                    a = t[1];
                return {
                    fetchManifestAndSpec: (0, c.useCallback)((e = (0, r._)(function(e) {
                        var t, n, r, o, i, s, d, u, c;
                        return (0, l.Jh)(this, function(l) {
                            switch (l.label) {
                                case 0:
                                    t = e.domain, n = e.manifestAccessToken, r = e.onSuccess, o = e.onError, i = (0, g.NB)(t), l.label = 1;
                                case 1:
                                    if (l.trys.push([1, 10, 11, 12]), a(!0), !(null != i)) return [3, 3];
                                    return [4, (0, g.Zb)(i)];
                                case 2:
                                    if (void 0 === (s = l.sent())) return [2];
                                    return r({
                                        domain: i,
                                        scrapeManifestResponse: {
                                            plugin: s.plugin,
                                            manifest_validation_info: s.manifest_validation_info
                                        },
                                        apiValidationInfo: s.api_validation_info
                                    }), [3, 9];
                                case 3:
                                    return [4, f.ZP.scrapePluginManifest({
                                        domain: t,
                                        manifestAccessToken: n
                                    })];
                                case 4:
                                    if (!(d = l.sent()).plugin) return [3, 8];
                                    l.label = 5;
                                case 5:
                                    return l.trys.push([5, 7, , 8]), [4, f.ZP.getPluginApi({
                                        id: d.plugin.id
                                    })];
                                case 6:
                                    return u = l.sent().api_validation_info, [3, 8];
                                case 7:
                                    return l.sent(), [3, 8];
                                case 8:
                                    r({
                                        domain: t,
                                        scrapeManifestResponse: d,
                                        apiValidationInfo: u,
                                        manifestAccessToken: n
                                    }), l.label = 9;
                                case 9:
                                    return [3, 12];
                                case 10:
                                    return c = l.sent(), o(null != i ? c : void 0), [3, 12];
                                case 11:
                                    return a(!1), [7];
                                case 12:
                                    return [2]
                            }
                        })
                    }), function(t) {
                        return e.apply(this, arguments)
                    }), []),
                    isLoading: n
                }
            }
        },
        73908: function(e, t, n) {
            n.d(t, {
                NB: function() {
                    return m
                },
                Zb: function() {
                    return v
                },
                cf: function() {
                    return h
                },
                qZ: function() {
                    return f
                },
                wR: function() {
                    return c
                }
            });
            var r = n(21722),
                a = n(39324),
                o = n(75883),
                i = n(8844),
                s = n(22121),
                l = n(95954),
                d = n(99486),
                u = n(88798);

            function c(e) {
                var t, n, r, a, o = null !== (a = null === (t = e.metadata) || void 0 === t ? void 0 : null === (n = t.invoked_plugin) || void 0 === n ? void 0 : n.http_api_call_data) && void 0 !== a ? a : null === (r = e.metadata) || void 0 === r ? void 0 : r.http_api_call_data;
                if (void 0 !== o) {
                    if (e.author.role !== l.uU.Assistant) {
                        console.error("Refusing to make localhost plugin HTTP call from non-assistant message", e);
                        return
                    }
                    if ("object" != typeof o || "string" != typeof o.namespace || 0 === o.namespace.length || "string" != typeof o.function_name || 0 === o.function_name.length || "string" != typeof o.parent_message_id || 0 === o.parent_message_id.length || "string" != typeof o.url || 0 === o.url.length || "string" != typeof o.method || !["get", "post", "put", "delete", "patch"].includes(o.method) || !Array.isArray(o.qs_params) || o.qs_params.some(function(e) {
                            return !Array.isArray(e) || 2 !== e.length || "string" != typeof e[0] || "string" != typeof e[1]
                        }) || "object" != typeof o.headers || Object.keys(o.headers).some(function(e) {
                            return "string" != typeof e
                        }) || Object.values(o.headers).some(function(e) {
                            return "string" != typeof e
                        }) || !(null === o.body || "object" == typeof o.body && Object.keys(o.body).every(function(e) {
                            return "string" == typeof e
                        })) || "string" != typeof o.api_function_type || !["kwargs", "chat"].includes(o.api_function_type)) {
                        console.error("Refusing to make localhost plugin HTTP call with invalid metadata", e);
                        return
                    }
                    if (!/^https?:\/\/localhost:/.test(o.url)) {
                        console.error("Refusing to make localhost plugin HTTP call with non-localhost URL", e);
                        return
                    }
                    return o
                }
            }

            function f(e) {
                return g.apply(this, arguments)
            }

            function g() {
                return (g = (0, r._)(function(e) {
                    var t;
                    return (0, o.Jh)(this, function(n) {
                        switch (n.label) {
                            case 0:
                                return n.trys.push([0, 2, , 3]), [4, function(e) {
                                    return p.apply(this, arguments)
                                }(e)];
                            case 1:
                                return [2, n.sent()];
                            case 2:
                                return console.error("Error making localhost plugin HTTP call", t = n.sent()), [2, [{
                                    id: (0, i.Z)(),
                                    author: {
                                        role: l.uU.Tool,
                                        name: "plugin_service"
                                    },
                                    content: {
                                        content_type: l.PX.Text,
                                        parts: ["Error making localhost plugin HTTP call: ".concat(t)]
                                    },
                                    recipient: "all"
                                }]];
                            case 3:
                                return [2]
                        }
                    })
                })).apply(this, arguments)
            }

            function p() {
                return (p = (0, r._)(function(e) {
                    var t, n, r, s;

                    function d(e) {
                        return Object.keys(e).map(function(e) {
                            return e.toLowerCase()
                        })
                    }
                    return (0, o.Jh)(this, function(o) {
                        switch (o.label) {
                            case 0:
                                var u;
                                if (t = {
                                        "content-type": "application/json"
                                    }, u = [d(e.headers), d(t)].flat(), new Set(u).size !== u.length) throw Error("Refusing to make localhost plugin HTTP call with duplicate header keys");
                                return n = e.url, e.qs_params.length > 0 && (n = n + "?" + new URLSearchParams(e.qs_params)), r = void 0, null !== e.body && (r = JSON.stringify(e.body)), [4, fetch(n, {
                                    method: e.method,
                                    headers: (0, a._)({}, t, e.headers),
                                    body: r
                                })];
                            case 1:
                                return [4, o.sent().text()];
                            case 2:
                                if (s = o.sent(), "chat" === e.api_function_type) return [2, [JSON.parse(s)]];
                                if ("kwargs" === e.api_function_type) return [2, [{
                                    id: (0, i.Z)(),
                                    author: {
                                        role: l.uU.Tool,
                                        name: "".concat(e.namespace, ".").concat(e.function_name)
                                    },
                                    content: {
                                        content_type: l.PX.Text,
                                        parts: [s]
                                    },
                                    recipient: "all"
                                }]];
                                throw Error("Not implemented")
                        }
                    })
                })).apply(this, arguments)
            }

            function h(e) {
                return !!m(e.domain)
            }

            function m(e) {
                return /^localhost:\d+$/.test(e) ? "http://".concat(e) : /^https?:\/\/localhost:\d+$/.test(e) ? e : null
            }

            function v(e) {
                return x.apply(this, arguments)
            }

            function x() {
                return (x = (0, r._)(function(e) {
                    var t, n, r, a, i, l;
                    return (0, o.Jh)(this, function(o) {
                        switch (o.label) {
                            case 0:
                                return o.trys.push([0, 3, , 4]), [4, fetch(e + "/.well-known/ai-plugin.json")];
                            case 1:
                                return [4, o.sent().json()];
                            case 2:
                                return n = o.sent(), [3, 4];
                            case 3:
                                return o.sent(), u.m.danger("Failed to fetch localhost manifest. Check to ensure your localhost is running and your localhost server has CORS enabled."), [2];
                            case 4:
                                if (null == (r = null == n ? void 0 : null === (t = n.api) || void 0 === t ? void 0 : t.url)) return u.m.danger("Localhost manifest is missing OpenAPI spec URL."), [2];
                                if ("pathname" === (a = function(e) {
                                        try {
                                            return new URL(e), "full url"
                                        } catch (t) {
                                            if (e.startsWith("/")) return "pathname";
                                            return "neither"
                                        }
                                    }(r))) r = e + r;
                                else if ("neither" === a) return u.m.danger("Localhost manifest OpenAPI spec URL is not a valid URL or path."), [2];
                                o.label = 5;
                            case 5:
                                return o.trys.push([5, 8, , 9]), [4, fetch(r)];
                            case 6:
                                return [4, o.sent().text()];
                            case 7:
                                return i = o.sent(), [3, 9];
                            case 8:
                                return o.sent(), u.m.danger("Failed to fetch localhost OpenAPI spec."), [2];
                            case 9:
                                try {
                                    l = s.ZP.parse(i)
                                } catch (e) {}
                                try {
                                    l = JSON.parse(i)
                                } catch (e) {}
                                if (null == l) return u.m.danger("Failed to parse localhost OpenAPI spec as JSON or YAML."), [2];
                                o.label = 10;
                            case 10:
                                return o.trys.push([10, 12, , 13]), [4, d.ZP.createOrUpdateLocalhostPlugin({
                                    localhost: e,
                                    manifest: n,
                                    openapiSpec: l
                                })];
                            case 11:
                                return [2, o.sent()];
                            case 12:
                                return o.sent(), u.m.danger("Failed to create or update localhost plugin at ".concat(e)), [3, 13];
                            case 13:
                                return [2]
                        }
                    })
                })).apply(this, arguments)
            }
        },
        35101: function(e, t, n) {
            n.d(t, {
                V: function() {
                    return l
                },
                Z: function() {
                    return d
                }
            });
            var r = n(81949),
                a = n(5268),
                o = n(62509),
                i = n(99486),
                s = n(54118),
                l = ["approvedAip"];

            function d(e) {
                var t = e.category,
                    n = e.search,
                    d = e.offset,
                    u = e.limit,
                    c = (0, o.kP)(),
                    f = c.session,
                    g = c.isAuthenticated,
                    p = (0, s.Fl)().isPluginsAvailable;
                return (0, a.a)((0, r._)(l).concat([{
                    category: t,
                    search: n
                }, {
                    limit: u,
                    offset: d
                }]), function() {
                    return i.ZP.getApprovedPlugins({
                        offset: d,
                        limit: u,
                        category: t,
                        search: n,
                        accessToken: null == f ? void 0 : f.accessToken
                    })
                }, {
                    enabled: p && g,
                    keepPreviousData: !0,
                    onError: function(e) {
                        console.error(e)
                    }
                })
            }
        },
        85330: function(e, t, n) {
            n.d(t, {
                dT: function() {
                    return g
                },
                hZ: function() {
                    return l
                },
                iO: function() {
                    return d
                },
                p0: function() {
                    return f
                },
                wu: function() {
                    return p
                }
            });
            var r = n(81949),
                a = n(70079),
                o = n(78103),
                i = n(6948),
                s = n(14444),
                l = 3,
                d = [
                    ["www.klarna.com", "server.shop.app"],
                    ["apim.expedia.com", "kayak.com"],
                    ["www.redfin.com", "plugins.zillow.com"],
                    ["instacart.com", "api.tasty.co"]
                ],
                u = "oai/enabledPluginIds",
                c = (0, o.ZP)(function() {
                    var e = Array.from(new Set(i.m.getItem(u)));
                    return {
                        enabledPluginIds: new Set(e.splice(0, l))
                    }
                });

            function f() {
                var e = (0, s.C)().installedPlugins,
                    t = c().enabledPluginIds;
                return (0, a.useMemo)(function() {
                    return e.filter(function(e) {
                        return t.has(e.id)
                    })
                }, [t, e])
            }

            function g(e) {
                e.length > l || c.setState(function() {
                    return i.m.setItem(u, e), {
                        enabledPluginIds: new Set(e)
                    }
                })
            }

            function p(e) {
                c.setState(function(t) {
                    if (t.enabledPluginIds.size >= l) return t;
                    var n = (0, r._)(t.enabledPluginIds).concat([e]);
                    return i.m.setItem(u, n), {
                        enabledPluginIds: new Set(n)
                    }
                })
            }
        },
        14444: function(e, t, n) {
            n.d(t, {
                C: function() {
                    return d
                },
                Z: function() {
                    return l
                }
            });
            var r = n(5268),
                a = n(70079),
                o = n(62509),
                i = n(99486),
                s = n(54118),
                l = ["installedAip"];

            function d() {
                var e = (0, o.kP)(),
                    t = e.session,
                    n = e.isAuthenticated,
                    d = (0, s.Fl)().isPluginsAvailable,
                    u = (0, r.a)(l, function() {
                        return i.ZP.getPlugins({
                            offset: 0,
                            limit: 250,
                            isInstalled: !0,
                            accessToken: null == t ? void 0 : t.accessToken
                        })
                    }, {
                        enabled: d && n,
                        onError: function(e) {
                            console.error(e)
                        }
                    }),
                    c = u.data,
                    f = u.isLoading;
                return (0, a.useMemo)(function() {
                    return {
                        installedPlugins: c ? c.items : [],
                        isLoading: f
                    }
                }, [c, f])
            }
        },
        56817: function(e, t, n) {
            n.d(t, {
                Zr: function() {
                    return o
                },
                _4: function() {
                    return i
                },
                m1: function() {
                    return a
                },
                ti: function() {
                    return r
                }
            });
            var r = "https://help.openai.com/en/collections/3943089-billing",
                a = "https://help.openai.com/en/articles/7905690-how-do-i-cancel-my-apple-subscription-for-chatgpt-plus-in-the-chatgpt-ios-app",
                o = "https://help.openai.com/en/articles/8258076-how-to-cancel-my-plus-subscription-in-the-chatgpt-android-app",
                i = {
                    WEBAPP: "chatgpt_web",
                    MOBILE_IOS: "chatgpt_mobile_ios",
                    MOBILE_ANDROID: "chatgpt_mobile_android",
                    GRANTED: "chatgpt_gratis_recepient",
                    NOT_PURCHASED: "chatgpt_not_purchased"
                }
        },
        35588: function(e, t, n) {
            n.d(t, {
                t: function() {
                    return d
                }
            });
            var r = n(39324),
                a = n(71209),
                o = n(91530),
                i = n.n(o),
                s = n(78103),
                l = {
                    showAccountPaymentModal: !1
                },
                d = (0, s.ZP)()(function(e) {
                    return (0, a._)((0, r._)({}, l), {
                        setShowAccountPaymentModal: function(t) {
                            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i();
                            e({
                                showAccountPaymentModal: t
                            }), n && n()
                        }
                    })
                })
        },
        70293: function(e, t, n) {
            n.d(t, {
                fv: function() {
                    return I
                },
                ZP: function() {
                    return k
                },
                Ub: function() {
                    return P
                }
            });
            var r = n(39324),
                a = n(22830),
                o = n(4337),
                i = n(35250),
                s = n(70079),
                l = n(1454),
                d = n(32004),
                u = n(70671),
                c = n(94968),
                f = n(21389),
                g = n(11084),
                p = n(31621),
                h = n(78931),
                m = n(52787),
                v = n(67273),
                x = n(28512),
                b = n(89368),
                y = n(88327),
                C = n(98359),
                _ = n(20525);

            function w(e) {
                var t = e.children,
                    n = e.sidebarOpen,
                    r = e.onClose;
                return (0, i.jsx)(C.u.Root, {
                    show: n,
                    as: s.Fragment,
                    children: (0, i.jsxs)(_.V, {
                        as: "div",
                        className: "relative z-10",
                        onClose: r,
                        children: [(0, i.jsx)("div", {
                            className: "fixed inset-0"
                        }), (0, i.jsx)("div", {
                            className: "fixed inset-0 overflow-hidden",
                            children: (0, i.jsx)("div", {
                                className: "absolute inset-0 overflow-hidden",
                                children: (0, i.jsx)("div", {
                                    className: "pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10",
                                    children: (0, i.jsx)(C.u.Child, {
                                        as: s.Fragment,
                                        enter: "transform transition ease-in-out duration-100 sm:duration-300",
                                        enterFrom: "translate-x-full",
                                        enterTo: "translate-x-0",
                                        leave: "transform transition ease-in-out duration-300 sm:duration-500",
                                        leaveFrom: "translate-x-0",
                                        leaveTo: "translate-x-full",
                                        children: (0, i.jsx)(_.V.Panel, {
                                            className: "pointer-events-auto w-screen max-w-md border-l border-gray-100 dark:border-gray-700",
                                            children: (0, i.jsx)("div", {
                                                className: "h-full overflow-y-auto bg-white shadow-xl dark:bg-gray-800",
                                                children: t
                                            })
                                        })
                                    })
                                })
                            })
                        })]
                    })
                })
            }

            function M() {
                var e = (0, o._)(["overflow-y-auto h-full md:w-[250px] lg:w-[300px] xl:w-[350px] 2xl:w-[400px] md:border-l md:border-gray-100 md:dark:border-gray-700 bg-white dark:bg-gray-900"]);
                return M = function() {
                    return e
                }, e
            }

            function j() {
                var e = (0, o._)(["whitespace-pre-wrap text-sm"]);
                return j = function() {
                    return e
                }, e
            }

            function T() {
                var e = (0, o._)(["px-6 py-4 flex flex-col gap-1 hover:bg-gray-50 dark:hover:bg-gray-500/10 cursor-pointer border-b dark:border-white/10 border-gray-200"]);
                return T = function() {
                    return e
                }, e
            }

            function k(e) {
                var t = e.children,
                    n = e.title,
                    a = e.icon,
                    o = e.isOpen,
                    s = e.slideOver,
                    u = e.onClose,
                    c = (0, i.jsxs)(S, {
                        children: [(0, i.jsxs)("div", {
                            className: "flex items-start justify-between",
                            children: [(0, i.jsxs)("div", {
                                className: "flex items-center gap-2 px-4 py-2 text-lg font-medium text-gray-900 dark:text-white",
                                children: [(0, i.jsx)(y.ZP, {
                                    icon: a
                                }), n]
                            }), (0, i.jsx)("div", {
                                className: "mr-2 mt-2 flex h-7 items-center",
                                children: (0, i.jsxs)("button", {
                                    type: "button",
                                    className: "rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2",
                                    onClick: u,
                                    children: [(0, i.jsx)("span", {
                                        className: "sr-only",
                                        children: (0, i.jsx)(d.Z, (0, r._)({}, D.closeSidebar))
                                    }), (0, i.jsx)(y.ZP, {
                                        icon: l.q5L,
                                        size: "medium",
                                        "aria-hidden": "true"
                                    })]
                                })
                            })]
                        }), t]
                    });
                return s ? (0, i.jsx)(w, {
                    sidebarOpen: o,
                    onClose: u,
                    children: c
                }) : o ? c : null
            }

            function I(e) {
                var t = e.clientThreadId,
                    n = e.isOpen,
                    r = e.slideOver,
                    o = e.onClose,
                    d = (0, u.Z)(),
                    c = p.tQ.getThreadCurrentLeafId(t),
                    f = (0, p.u9)(t, c),
                    v = (0, a._)((0, s.useState)(), 2),
                    y = v[0],
                    C = v[1],
                    _ = (0, h.hz)(),
                    w = (0, s.useCallback)(function() {
                        C(void 0)
                    }, []),
                    M = (0, s.useCallback)(function() {
                        var e = p.tQ.getTree(t);
                        (0, g.S)(e.getTextFromThread(c))
                    }, [c, t]);
                if (!_.has("debug")) return null;
                var j = f.map(function(e, t) {
                    var n = e.author,
                        r = n.role,
                        a = n.name;
                    return (0, i.jsxs)(Z, {
                        role: "button",
                        onClick: function() {
                            return C(t)
                        },
                        children: [(0, i.jsxs)("div", {
                            className: "text-xs font-medium uppercase text-gray-400",
                            children: [r, a && a !== r && " (".concat(a, ")"), " -> ", (0, m.Ej)(e)]
                        }), (0, i.jsx)("div", {
                            children: (0, m.RR)(e)
                        })]
                    }, e.id)
                });
                return (0, i.jsxs)(k, {
                    icon: l.cDN,
                    title: d.formatMessage(D.debugTitle),
                    isOpen: n,
                    slideOver: r,
                    onClose: o,
                    children: [(0, i.jsxs)("div", {
                        className: "flex items-center justify-around gap-2 px-4 py-1 text-xs font-medium uppercase ",
                        children: [(0, i.jsx)(N, {
                            clientThreadId: t,
                            messages: f
                        }), (0, i.jsx)("div", {
                            children: (0, i.jsx)(x.Z, {
                                onCopy: M,
                                buttonText: d.formatMessage(D.copyText)
                            })
                        })]
                    }), (0, i.jsx)(E, {
                        children: j
                    }), void 0 !== y && (0, i.jsx)(b.Z, {
                        isOpen: !0,
                        onClose: w,
                        type: "success",
                        children: (0, i.jsx)("pre", {
                            className: "max-h-[80vh] overflow-auto whitespace-pre-wrap text-xs",
                            children: JSON.stringify(f[y], null, 2)
                        })
                    }, "DebugMessageModal-".concat(y))]
                })
            }

            function P(e, t) {
                var n = JSON.stringify(t) + "\n",
                    r = new Blob([n], {
                        type: "application/json"
                    }),
                    a = URL.createObjectURL(r),
                    o = document.createElement("a");
                o.href = a, o.download = "messages-".concat(p.tQ.getServerThreadId(e), ".jsonl"), o.click(), URL.revokeObjectURL(a)
            }

            function N(e) {
                var t = e.clientThreadId,
                    n = e.messages,
                    a = (0, s.useCallback)(function() {
                        P(t, n)
                    }, [t, n]);
                return (0, i.jsxs)(v.z, {
                    onClick: a,
                    color: "dark",
                    size: "small",
                    children: [(0, i.jsx)(y.ZP, {
                        icon: l._hL
                    }), (0, i.jsx)(d.Z, (0, r._)({}, D.downloadRawConversation))]
                })
            }
            var S = f.Z.div(M()),
                E = f.Z.pre(j()),
                Z = f.Z.div(T()),
                D = (0, c.vU)({
                    debugTitle: {
                        id: "DebugSidebar.debugTitle",
                        description: "Title of the Debug sidebar",
                        defaultMessage: "Debug"
                    },
                    copyText: {
                        id: "DebugSidebar.copyText",
                        description: "Button text to copy the content to clipboard",
                        defaultMessage: "Copy text"
                    },
                    downloadRawConversation: {
                        id: "DebugSidebar.downloadRawConversation",
                        description: "Button text to download raw conversation",
                        defaultMessage: "Download raw conversation"
                    },
                    closeSidebar: {
                        id: "DebugSidebar.closeSidebar",
                        description: "Aria-label for the close sidebar button",
                        defaultMessage: "Close sidebar"
                    }
                })
        },
        50828: function(e, t, n) {
            n.d(t, {
                LC: function() {
                    return p
                },
                MO: function() {
                    return g
                },
                Od: function() {
                    return m
                },
                iF: function() {
                    return h
                }
            });
            var r = n(44009),
                a = n(13995),
                o = n(70079),
                i = n(62509),
                s = n(6948),
                l = n(99486),
                d = n(32877),
                u = n(78931),
                c = "oai/apps/hasSeenHistoryFilteredDisclosure/".concat("2023-03-21"),
                f = "conversationHistory";

            function g() {
                var e, t = (0, u.hz)().has(d.Ud),
                    n = (0, u.$T)(),
                    a = (0, i.kP)(),
                    s = a.session,
                    c = a.isAuthenticated,
                    g = !t && c && !n,
                    p = (0, r.N)({
                        queryKey: [f],
                        queryFn: function(e) {
                            var t = e.pageParam;
                            return l.ZP.getConversations(t || 0, 28, null == s ? void 0 : s.accessToken)
                        },
                        getNextPageParam: function(e) {
                            var t = e.offset + e.limit;
                            return t < e.total ? t : void 0
                        },
                        enabled: g
                    }),
                    h = p.data,
                    m = p.fetchNextPage,
                    v = p.hasNextPage,
                    x = p.isInitialLoading,
                    b = p.isFetchingNextPage,
                    y = p.isError,
                    C = (0, o.useMemo)(function() {
                        return null !== (e = null == h ? void 0 : h.pages.flatMap(function(e) {
                            return e.items
                        })) && void 0 !== e ? e : []
                    }, [h]);
                return {
                    data: h,
                    conversations: C,
                    fetchNextPage: m,
                    hasNextPage: v,
                    isLoading: x,
                    isFetchingNextPage: b,
                    isError: g && y
                }
            }

            function p() {
                var e = g().conversations;
                return (0, o.useMemo)(function() {
                    return e.length > 0
                }, [e])
            }

            function h() {
                var e = (0, a.NL)();
                return (0, o.useCallback)(function() {
                    e.invalidateQueries([f])
                }, [e])
            }

            function m() {
                (0, o.useEffect)(function() {
                    s.m.removeItem(c)
                }, [])
            }
        },
        98076: function(e, t, n) {
            n.d(t, {
                BT: function() {
                    return d
                },
                Y8: function() {
                    return u
                },
                kc: function() {
                    return s
                },
                m0: function() {
                    return l
                },
                uU: function() {
                    return i
                }
            });
            var r = n(81949),
                a = n(78103),
                o = n(25229),
                i = "model_cap_exceeded",
                s = (0, a.ZP)(function() {
                    return {
                        serverThreadIds: new Set
                    }
                });

            function l(e) {
                s.setState(function(t) {
                    return {
                        serverThreadIds: new Set((0, r._)(t.serverThreadIds).concat([e]))
                    }
                })
            }

            function d() {
                var e = u(function(e) {
                        return e.isoDate
                    }),
                    t = u(function(e) {
                        return e.clearCapTimeout
                    }),
                    n = Date.now(),
                    r = e && new Date(e).getTime();
                return e && r && r <= n ? (t(), null) : e ? "gpt-4" : null
            }
            var u = (0, a.ZP)()((0, o.tJ)(function(e) {
                return {
                    isoDate: "",
                    setCapTimeout: function(t) {
                        e(function() {
                            return {
                                isoDate: t
                            }
                        })
                    },
                    clearCapTimeout: function() {
                        e(function() {
                            return {
                                isoDate: ""
                            }
                        })
                    }
                }
            }, {
                name: "oai/apps/capExpiresAt"
            }))
        },
        73610: function(e, t, n) {
            n.d(t, {
                W: function() {
                    return g
                }
            });
            var r = n(21722),
                a = n(75883),
                o = n(5268),
                i = n(94968),
                s = n(70671),
                l = n(62509),
                d = n(99486),
                u = n(78931),
                c = n(88798),
                f = (0, i.vU)({
                    errorLoadingFiles: {
                        id: "filesModal.errorLoadingFiles",
                        defaultMessage: "Failed to load files",
                        description: "Error message when loading files fails"
                    }
                });

            function g() {
                var e = (0, l.kP)(),
                    t = e.session,
                    n = e.isAuthenticated,
                    i = (0, u.hz)(),
                    g = (0, s.Z)();
                return (0, o.a)(["files"], (0, r._)(function() {
                    return (0, a.Jh)(this, function(e) {
                        switch (e.label) {
                            case 0:
                                return [4, d.ZP.listFiles(t.accessToken).catch(function() {
                                    return c.m.danger(g.formatMessage(f.errorLoadingFiles)), {
                                        files: []
                                    }
                                })];
                            case 1:
                                return [2, e.sent()]
                        }
                    })
                }), {
                    enabled: n && i.has("files_list_ui")
                })
            }
        },
        44510: function(e, t, n) {
            n.d(t, {
                _C: function() {
                    return l
                },
                xT: function() {
                    return d
                }
            });
            var r = n(70079),
                a = n(62509),
                o = n(6948),
                i = n(78931),
                s = function(e, t) {
                    return "oai/apps/".concat(t, "/").concat(e, "/lastModelUsed")
                };

            function l() {
                var e, t = (0, i.hz)(),
                    n = (0, a.kP)().session,
                    r = null == n ? void 0 : null === (e = n.user) || void 0 === e ? void 0 : e.id,
                    l = (0, i.ec)(function(e) {
                        return {
                            currentWorkspace: e.currentWorkspace
                        }
                    }).currentWorkspace,
                    d = null == l ? void 0 : l.id;
                return t.has("persist_last_used_model") ? o.m.getItem("".concat(s(d, r))) : null
            }

            function d() {
                var e, t = (0, a.kP)().session,
                    n = null == t ? void 0 : null === (e = t.user) || void 0 === e ? void 0 : e.id,
                    l = (0, i.ec)(function(e) {
                        return {
                            currentWorkspace: e.currentWorkspace
                        }
                    }).currentWorkspace,
                    d = null == l ? void 0 : l.id;
                return (0, r.useCallback)(function(e) {
                    if (!e) return null;
                    var t = Date.now();
                    o.m.setItem("".concat(s(d, n)), {
                        modelId: e,
                        updatedAt: t
                    })
                }, [d, n])
            }
        },
        65642: function(e, t, n) {
            n.d(t, {
                Z: function() {
                    return u
                }
            });
            var r = n(5268),
                a = n(70079),
                o = n(62509),
                i = n(99486),
                s = n(47703),
                l = n(98076),
                d = {
                    textarea: "",
                    "model-switcher": ""
                };

            function u() {
                var e = (0, o.kP)().isAuthenticated,
                    t = (0, l.Y8)(function(e) {
                        return e.isoDate
                    }),
                    n = (0, s.xz)(t),
                    u = (0, r.a)(["modelMessageCap"], function() {
                        return i.ZP.getModelMessageCap()
                    }, {
                        enabled: e
                    }).data;
                return (0, a.useMemo)(function() {
                    var e = (null == u ? void 0 : u.message_cap) || 0,
                        t = (null == u ? void 0 : u.message_cap_window) || 1,
                        r = function(e) {
                            if (e < 60) return e < 2 ? "minute" : "".concat(e, " minutes");
                            var t = Math.floor(e / 60);
                            if (t < 24) return t < 2 ? "hour" : "".concat(t, " hours");
                            var n = Math.floor(t / 24);
                            if (n < 7) return n < 2 ? "day" : "".concat(n, " days")
                        }(t),
                        a = (null == u ? void 0 : u.message_disclaimer) || d;
                    return r ? u && t && e ? {
                        textareaDisclaimer: a.textarea.replaceAll("%FORMATTED_TIME%", n).replaceAll("%NUMERATOR%", "".concat(e)).replaceAll("%DENOMINATOR%", r),
                        modelSwitcherDisclaimer: a["model-switcher"].replaceAll("%FORMATTED_TIME%", n).replaceAll("%NUMERATOR%", "".concat(e)).replaceAll("%DENOMINATOR%", r)
                    } : {
                        textareaDisclaimer: d.textarea,
                        modelSwitcherDisclaimer: d["model-switcher"]
                    } : {
                        textareaDisclaimer: a.textarea,
                        modelSwitcherDisclaimer: a["model-switcher"]
                    }
                }, [u, n])
            }
        },
        16592: function(e, t, n) {
            n.d(t, {
                Ri: function() {
                    return I
                },
                ZP: function() {
                    return N
                },
                dN: function() {
                    return a
                },
                i0: function() {
                    return P
                }
            });
            var r, a, o, i, s, l, d, u, c, f, g = n(96237),
                p = n(39324),
                h = n(81949),
                m = n(35250),
                v = n(41170),
                x = n(70079),
                b = n(54118),
                y = n(78931),
                C = n(88327),
                _ = n(40058),
                w = n(98076),
                M = n(65642),
                j = n(42569);
            (r = a || (a = {})).BROWSING = "browsing_model", r.CODE_INTERPRETER = "code_interpreter_model", r.PLUGINS = "plugins_model";
            var T = (o = {}, (0, g._)(o, "gpt_3.5", {
                    icon: C.jr,
                    activeIcon: C.jr,
                    backgroundColor: "#19c37d",
                    buttonActiveClass: "text-brand-green",
                    buttonHoverClass: "group-hover/button:text-brand-green",
                    iconClass: "group-hover/option:!text-brand-green group-hover/options:text-gray-500",
                    disclaimer: "Available to Free and Plus users",
                    showSelectedValueBelow: !1
                }), (0, g._)(o, "gpt_4", {
                    icon: C.Bj,
                    activeIcon: C.MP,
                    backgroundColor: "#AB68FF",
                    buttonActiveClass: "text-brand-purple",
                    buttonHoverClass: "group-hover/button:text-brand-purple",
                    iconClass: "group-hover/option:!text-brand-purple group-hover/options:text-gray-500",
                    disclaimer: "Available exclusively to Plus users",
                    showSelectedValueBelow: !1
                }), (0, g._)(o, "other", {
                    icon: v.Z,
                    activeIcon: v.Z,
                    backgroundColor: "#E06C2B",
                    buttonActiveClass: "text-orange-500",
                    buttonHoverClass: "group-hover/button:text-orange-500",
                    showSelectedValueBelow: !0
                }), (0, g._)(o, "experiments", {
                    icon: v.Z,
                    activeIcon: v.Z,
                    backgroundColor: "#E06C2B",
                    buttonActiveClass: "text-blue-500",
                    buttonHoverClass: "group-hover/button:text-blue-500",
                    showSelectedValueBelow: !0
                }), o),
                k = (f = {}, (0, g._)(f, a.BROWSING, {
                    iconByCategory: (i = {}, (0, g._)(i, "gpt_3.5", C.O1), (0, g._)(i, "gpt_4", C.Fz), i),
                    activeIconByCategory: (s = {}, (0, g._)(s, "gpt_3.5", C.X7), (0, g._)(s, "gpt_4", C.Ae), s),
                    name: (0, m.jsxs)("span", {
                        children: ["Browse with", " ", (0, m.jsx)(C.ZP, {
                            icon: C.jE,
                            className: "-mt-[3px] inline-block"
                        }), " ", "Bing"]
                    })
                }), (0, g._)(f, a.CODE_INTERPRETER, {
                    iconByCategory: (l = {}, (0, g._)(l, "gpt_3.5", C.lv), (0, g._)(l, "gpt_4", C.Q$), l),
                    activeIconByCategory: (d = {}, (0, g._)(d, "gpt_3.5", C.vy), (0, g._)(d, "gpt_4", C.$V), d),
                    name: "Code Interpreter"
                }), (0, g._)(f, a.PLUGINS, {
                    iconByCategory: (u = {}, (0, g._)(u, "gpt_3.5", C.AQ), (0, g._)(u, "gpt_4", C.IT), u),
                    activeIconByCategory: (c = {}, (0, g._)(c, "gpt_3.5", C.Np), (0, g._)(c, "gpt_4", C.j3), c),
                    name: "Plugins"
                }), f);

            function I(e) {
                var t = N();
                return (0, x.useMemo)(function() {
                    return function(e, t) {
                        if (t)
                            for (var n = 0; n < e.length; n++) {
                                var r = e[n];
                                if (r.options.length > 0) {
                                    var a, o, i = r.options.find(function(e) {
                                        return e.value === t
                                    });
                                    if (i) return {
                                        item: i,
                                        categoryId: r.categoryId,
                                        backgroundColor: T[r.categoryId].backgroundColor,
                                        icon: null !== (o = null !== (a = i.icon) && void 0 !== a ? a : r.icon) && void 0 !== o ? o : T[r.categoryId].icon
                                    }
                                }
                            }
                    }(t, e)
                }, [t, e])
            }

            function P(e, t) {
                return (0, j.OX)().some(function(n) {
                    return n[t] === e
                })
            }

            function N() {
                var e = (0, j.OX)(),
                    t = (0, j.B9)(),
                    n = (0, w.BT)(),
                    r = (0, b.Fl)(),
                    o = (0, y.ec)(y.F_.isBusinessWorkspace),
                    i = (0, M.Z)().modelSwitcherDisclaimer,
                    s = (0, y.hz)(),
                    l = (0, j.B8)(),
                    d = l.enabledModelsInCategoriesById,
                    u = l.enabledModelsNotInCategoriesById,
                    c = (0, M.Z)();
                return (0, x.useMemo)(function() {
                    var l = [],
                        f = !0,
                        g = !1,
                        p = void 0;
                    try {
                        for (var m, v = e[Symbol.iterator](); !(f = (m = v.next()).done); f = !0) ! function() {
                            var e = m.value;
                            if (d.has(e.default_model)) {
                                var u = T[e.category] || {},
                                    f = n === e.default_model,
                                    g = t.get(e.default_model),
                                    p = f ? [] : function(e, t, n, r, o) {
                                        var i = e.isBrowsingEnabled,
                                            s = e.isBrowsingPublisherRedTeam,
                                            l = e.isPluginsEnabled,
                                            d = e.isCodeInterpreterEnabled,
                                            u = [];
                                        if ((i || s) && null != n[a.BROWSING] && r.has(n[a.BROWSING])) {
                                            var c = k[a.BROWSING];
                                            u.push(S(o.get(n[a.BROWSING]), {
                                                icon: c.iconByCategory[n.category],
                                                name: c.name,
                                                activeIcon: c.activeIconByCategory[n.category],
                                                disabled: t.has("browsing_disabled")
                                            }))
                                        }
                                        if (d && null != n[a.CODE_INTERPRETER] && r.has(n[a.CODE_INTERPRETER])) {
                                            var f = k[a.CODE_INTERPRETER];
                                            u.push(S(o.get(n[a.CODE_INTERPRETER]), {
                                                icon: f.iconByCategory[n.category],
                                                name: f.name,
                                                activeIcon: f.activeIconByCategory[n.category],
                                                disabled: t.has("code_interpreter_disabled")
                                            }))
                                        }
                                        if (l && null != n[a.PLUGINS] && r.has(n[a.PLUGINS])) {
                                            var g = k[a.PLUGINS];
                                            u.push(S(o.get(n[a.PLUGINS]), {
                                                icon: g.iconByCategory[n.category],
                                                name: g.name,
                                                activeIcon: g.activeIconByCategory[n.category],
                                                disabled: t.has("plugins_disabled")
                                            }))
                                        }
                                        return u
                                    }(r, s, e, d, t),
                                    v = e.category === _.WT && null != c,
                                    x = o ? v ? c.textareaDisclaimer : void 0 : v ? u.disclaimer + "\n\n" + c.textareaDisclaimer : u.disclaimer;
                                l.push({
                                    categoryId: e.category,
                                    value: g.id,
                                    name: e.human_category_name,
                                    description: f ? i : g.description,
                                    disclaimer: x,
                                    buttonActiveClass: u.buttonActiveClass,
                                    buttonHoverClass: u.buttonHoverClass,
                                    iconClass: u.iconClass,
                                    icon: u.icon,
                                    activeIcon: u.activeIcon,
                                    options: [S(g, {
                                        icon: u.icon,
                                        activeIcon: u.activeIcon,
                                        name: "Default"
                                    })].concat((0, h._)(p)),
                                    disabled: f,
                                    showSelectedValueBelow: !1
                                })
                            }
                        }()
                    } catch (e) {
                        g = !0, p = e
                    } finally {
                        try {
                            f || null == v.return || v.return()
                        } finally {
                            if (g) throw p
                        }
                    }
                    var x = Array.from(u).map(function(e) {
                            return t.get(e)
                        }).filter(function(e) {
                            return -1 === e.id.indexOf(":")
                        }),
                        b = Array.from(u).map(function(e) {
                            return t.get(e)
                        }).filter(function(e) {
                            return -1 !== e.id.indexOf(":")
                        }),
                        y = x.some(function(e) {
                            return e.id === _.YE
                        });
                    if (x.length > 0 && !y) {
                        var C = x[0],
                            w = T.other;
                        l.push({
                            categoryId: "other",
                            value: null == C ? void 0 : C.id,
                            name: "Alpha",
                            buttonActiveClass: w.buttonActiveClass,
                            buttonHoverClass: w.buttonHoverClass,
                            options: x.map(function(e) {
                                return S(e)
                            }),
                            showSelectedValueBelow: !0,
                            icon: w.icon,
                            activeIcon: w.activeIcon,
                            alwaysShowOptions: !0
                        })
                    }
                    if (b.length > 0) {
                        var M = b[0],
                            j = T.experiments;
                        l.push({
                            categoryId: "experiments",
                            value: null == M ? void 0 : M.id,
                            name: "Experiments",
                            buttonActiveClass: j.buttonActiveClass,
                            buttonHoverClass: j.buttonHoverClass,
                            options: b.map(function(e) {
                                return S(e)
                            }),
                            showSelectedValueBelow: !0,
                            icon: j.icon,
                            activeIcon: j.activeIcon,
                            alwaysShowOptions: !0
                        })
                    }
                    return l
                }, [u, e, d, n, t, r, s, c, i, o])
            }

            function S(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                return (0, p._)({
                    value: e.id,
                    name: e.title,
                    tags: e.tags
                }, t)
            }
        },
        42569: function(e, t, n) {
            n.d(t, {
                B8: function() {
                    return R
                },
                B9: function() {
                    return N
                },
                Bv: function() {
                    return Z
                },
                Gg: function() {
                    return S
                },
                H6: function() {
                    return F
                },
                OX: function() {
                    return I
                },
                Q_: function() {
                    return k
                },
                S: function() {
                    return a
                },
                Xy: function() {
                    return D
                },
                ZL: function() {
                    return T
                },
                fm: function() {
                    return E
                },
                iu: function() {
                    return P
                },
                n2: function() {
                    return M
                }
            });
            var r, a, o = n(21722),
                i = n(39324),
                s = n(71209),
                l = n(81949),
                d = n(75883),
                u = n(5268),
                c = n(60554),
                f = n(70079),
                g = n(62509),
                p = n(99486),
                h = n(31621),
                m = n(54118),
                v = n(78931),
                x = n(32542),
                b = n(98076),
                y = n(44510),
                C = n(16592),
                _ = "text-davinci-002-render-sha";
            (r = a || (a = {})).GPT_3_5 = "gpt3.5", r.GPT_4 = "gpt4", r.MOBILE = "mobile";
            var w = F({
                    slug: _,
                    max_tokens: 4097,
                    title: "Default",
                    description: "",
                    tags: [a.GPT_3_5],
                    product_features: {}
                }),
                M = new Set(["text-davinci-002-render-paid"]);

            function j(e) {
                var t = (0, f.useContext)(x.QL).historyDisabled,
                    n = (0, g.kP)(),
                    r = n.session,
                    a = n.isAuthenticated,
                    i = null == r ? void 0 : r.accessToken;
                return (0, u.a)({
                    retry: 5,
                    queryKey: ["models", {
                        isHistoryDisabled: !t
                    }],
                    queryFn: (0, o._)(function() {
                        return (0, d.Jh)(this, function(e) {
                            switch (e.label) {
                                case 0:
                                    return [4, p.ZP.getModels(i, t)];
                                case 1:
                                    return [2, e.sent()]
                            }
                        })
                    }),
                    enabled: a,
                    select: e
                })
            }

            function T() {
                return j().isLoading
            }

            function k() {
                return j().isSuccess
            }

            function I() {
                var e = j(function(e) {
                    return e.categories
                }).data;
                return null != e ? e : []
            }

            function P() {
                var e = j(function(e) {
                    return e.models
                }).data;
                return (0, f.useMemo)(function() {
                    return new Set(e ? e.map(function(e) {
                        return e.slug
                    }) : [_])
                }, [e])
            }

            function N() {
                var e = j(function(e) {
                    return e.models
                }).data;
                return (0, f.useMemo)(function() {
                    return new Map(e ? e.map(function(e) {
                        return [e.slug, F(e)]
                    }) : [
                        [_, w]
                    ])
                }, [e])
            }

            function S(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = function(e) {
                        var t, n, r = i.get(e);
                        return null !== (n = null == r ? void 0 : null === (t = r.tags) || void 0 === t ? void 0 : t.includes(a.GPT_3_5)) && void 0 !== n && n
                    },
                    r = (0, v.hz)(),
                    o = (0, l._)(e),
                    i = N();
                if (!t && r.has("priority_driven_models_list")) return o[0];
                var s = (0, l._)(o).find(function(e) {
                    return n(e)
                });
                return null != s ? s : o[0]
            }

            function E() {
                var e = (0, c.useRouter)(),
                    t = e.query;
                return (0, f.useCallback)(function(n) {
                    e.replace({
                        pathname: e.basePath,
                        query: (0, s._)((0, i._)({}, t), {
                            model: encodeURIComponent(n)
                        })
                    }, void 0, {
                        shallow: !0
                    })
                }, [t, e])
            }

            function Z(e, t) {
                var n, r = decodeURIComponent(null !== (n = (0, c.useRouter)().query.model) && void 0 !== n ? n : ""),
                    a = (0, h.XK)(t),
                    o = R().enabledModelsById,
                    i = (0, m.Fl)().isBetaFeaturesUiEnabled,
                    s = (0, b.kc)().serverThreadIds,
                    l = P(),
                    d = (0, y._C)(),
                    u = i ? o : l,
                    g = S(u);
                return (0, f.useMemo)(function() {
                    if (0 !== u.size) {
                        var t, n = void 0 !== a && s.has(a);
                        return !n && null != e && l.has(e) ? null != e ? e : void 0 : !n && r && u.has(r) ? null != r ? r : void 0 : d && u.has(d.modelId) ? null !== (t = d.modelId) && void 0 !== t ? t : void 0 : null != g ? g : void 0
                    }
                }, [l, g, e, r, d, u, a, s])
            }

            function D(e, t) {
                var n = Z(e, t),
                    r = N();
                return (0, f.useMemo)(function() {
                    var e;
                    return null == n ? w : null !== (e = r.get(n)) && void 0 !== e ? e : w
                }, [n, r])
            }

            function R() {
                var e = I(),
                    t = P(),
                    n = N(),
                    r = (0, m.Fl)();
                return (0, f.useMemo)(function() {
                    var o, i = e.reduce(function(e, a) {
                            var o, i, s, l, d, u, c = e.enabledModelsInCategoriesById,
                                f = e.availableModelsInCategoriesById,
                                g = t.has(a.default_model) ? a.default_model : null;
                            null != g && (f.add(g), c.add(g));
                            var p = t.has(null !== (o = a[C.dN.BROWSING]) && void 0 !== o ? o : "") ? n.get(null !== (i = a[C.dN.BROWSING]) && void 0 !== i ? i : "") : null;
                            p && (f.add(p.id), (r.isBrowsingEnabled || r.isBrowsingPublisherRedTeam) && c.add(p.id));
                            var h = t.has(null !== (s = a[C.dN.CODE_INTERPRETER]) && void 0 !== s ? s : "") ? n.get(null !== (l = a[C.dN.CODE_INTERPRETER]) && void 0 !== l ? l : "") : null;
                            h && (f.add(h.id), r.isCodeInterpreterEnabled && c.add(h.id));
                            var m = t.has(null !== (d = a[C.dN.PLUGINS]) && void 0 !== d ? d : "") ? n.get(null !== (u = a[C.dN.PLUGINS]) && void 0 !== u ? u : "") : null;
                            return m && (f.add(m.id), r.isPluginsEnabled && c.add(m.id)), e
                        }, {
                            enabledModelsInCategoriesById: new Set,
                            availableModelsInCategoriesById: new Set
                        }),
                        s = i.enabledModelsInCategoriesById,
                        d = i.availableModelsInCategoriesById,
                        u = new Set(Array.from(t).filter(function(e) {
                            return !d.has(e)
                        })),
                        c = new Set(Array.from(u).filter(function(e) {
                            var t;
                            return !(null === (t = n.get(e)) || void 0 === t ? void 0 : t.tags.includes(a.MOBILE))
                        }));
                    return {
                        enabledModelsInCategoriesById: s,
                        availableModelsInCategoriesById: d,
                        enabledModelsNotInCategoriesById: c,
                        enabledModelsById: new Set((0, l._)(s).concat((0, l._)(c)))
                    }
                }, [e, t, r, n])
            }

            function F(e) {
                return {
                    id: e.slug,
                    maxTokens: e.max_tokens,
                    title: e.title,
                    description: e.description,
                    tags: e.tags,
                    enabledTools: e.enabled_tools,
                    product_features: e.product_features
                }
            }
        },
        58268: function(e, t, n) {
            n.d(t, {
                sb: function() {
                    return p
                },
                x0: function() {
                    return f
                },
                yu: function() {
                    return g
                }
            });
            var r, a = n(21722),
                o = n(39324),
                i = n(75883),
                s = n(78103),
                l = n(99486),
                d = {
                    data: void 0
                },
                u = (0, s.ZP)()(function() {
                    return (0, o._)({}, d)
                });

            function c(e) {
                if (null == e.data) return u.setState(e);
                var t = e.data.suggestions.map(function(e) {
                    return {
                        text: e
                    }
                });
                u.setState({
                    data: {
                        messageId: e.data.messageId,
                        suggestions: t
                    }
                })
            }

            function f() {
                return u(function(e) {
                    return e.data
                })
            }
            var g = (r = (0, a._)(function(e, t, n) {
                    return (0, i.Jh)(this, function(r) {
                        switch (r.label) {
                            case 0:
                                c({
                                    data: void 0
                                }), r.label = 1;
                            case 1:
                                return r.trys.push([1, 3, , 4]), [4, l.ZP.generateSuggestions(e, t, n)];
                            case 2:
                                return c({
                                    data: {
                                        messageId: t,
                                        suggestions: r.sent().suggestions
                                    }
                                }), [3, 4];
                            case 3:
                                return console.error(r.sent()), [3, 4];
                            case 4:
                                return [2]
                        }
                    })
                }), function(e, t, n) {
                    return r.apply(this, arguments)
                }),
                p = function() {
                    c(d)
                }
        },
        31621: function(e, t, n) {
            n.d(t, {
                tQ: function() {
                    return L
                },
                iN: function() {
                    return F
                },
                _L: function() {
                    return a
                },
                OX: function() {
                    return N
                },
                Zz: function() {
                    return S
                },
                aS: function() {
                    return ea
                },
                ax: function() {
                    return B
                },
                r7: function() {
                    return eo
                },
                XK: function() {
                    return A
                },
                je: function() {
                    return K
                },
                Uy: function() {
                    return X
                },
                GD: function() {
                    return q
                },
                JI: function() {
                    return J
                },
                U0: function() {
                    return G
                },
                oq: function() {
                    return W
                },
                Hk: function() {
                    return V
                },
                UL: function() {
                    return U
                },
                Kt: function() {
                    return O
                },
                cj: function() {
                    return ei
                },
                Ro: function() {
                    return z
                },
                GR: function() {
                    return H
                },
                qA: function() {
                    return $
                },
                XL: function() {
                    return Q
                },
                u9: function() {
                    return en
                },
                nh: function() {
                    return Y
                },
                lA: function() {
                    return ee
                },
                dz: function() {
                    return et
                },
                Qi: function() {
                    return er
                },
                qN: function() {
                    return Z
                }
            });
            var r, a, o = n(39324),
                i = n(71209),
                s = n(5268),
                l = n(61888),
                d = n(60554),
                u = n(70079),
                c = n(78103),
                f = n(10301),
                g = n(62509),
                p = n(70216);
            n(68993);
            var h = n(77370),
                m = n(16600);
            n(44675).env.INTERNAL_API_URL;
            var v = n(11084),
                x = n(50795),
                b = n(82081),
                y = n(16920),
                C = n(75641),
                _ = n(95954),
                w = n(88798),
                M = n(42569);
            n(86273);
            var j = n(99486),
                T = n(32542),
                k = n(52787),
                I = "NEW:",
                P = 0;

            function N() {
                return "".concat(I).concat(P++)
            }

            function S(e) {
                return e.startsWith(I)
            }(r = a || (a = {})).NewChat = "NewChat", r.Server = "Server", r.User = "User", r.Generated = "Generated", r.Unknown = "Unknown";
            var E = {},
                Z = (0, c.ZP)((0, f.n)(function() {
                    return {
                        threads: {},
                        clientNewThreadIdToServerIdMapping: {},
                        threadRetainCounts: {}
                    }
                })),
                D = Z.getState,
                R = Z.setState,
                F = {
                    resolveThreadId: function(e) {
                        var t, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : D();
                        return null !== (t = n.clientNewThreadIdToServerIdMapping[e]) && void 0 !== t ? t : e
                    },
                    getThreadCustomTitle: function(e) {
                        var t, n, r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : D(),
                            a = F.resolveThreadId(e, r);
                        return null !== (n = null === (t = r.threads[a]) || void 0 === t ? void 0 : t.title) && void 0 !== n ? n : void 0
                    },
                    getThreadDataTitle: function(e) {
                        var t, n, r, a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : D(),
                            o = F.resolveThreadId(e, a);
                        return null !== (r = null === (t = a.threads[o]) || void 0 === t ? void 0 : null === (n = t.initialThreadData) || void 0 === n ? void 0 : n.title) && void 0 !== r ? r : void 0
                    },
                    getThreadTitleSource: function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : D(),
                            n = F.resolveThreadId(e, t);
                        return null != t.threads[n] ? t.threads[n].titleSource : a.Unknown
                    },
                    getThreadCreateTime: function(e) {
                        var t, n, r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : D(),
                            a = F.resolveThreadId(e, r);
                        return null === (t = r.threads[a]) || void 0 === t ? void 0 : null === (n = t.initialThreadData) || void 0 === n ? void 0 : n.createTime
                    }
                },
                L = {
                    getOrInitThread: function(e) {
                        var t = L.resolveThreadId(e);
                        return null != D().threads[t] ? D().threads[t] : (L.resetThread(e), D().threads[e])
                    },
                    getServerThreadId: function(e) {
                        return S(e) ? D().clientNewThreadIdToServerIdMapping[e] : e
                    },
                    setServerIdForNewThread: function(e, t) {
                        void 0 === D().clientNewThreadIdToServerIdMapping[e] && R(function(n) {
                            n.threads[t] = n.threads[e], delete n.threads[e], n.clientNewThreadIdToServerIdMapping[e] = t
                        })
                    },
                    initThreadFromServerData: function(e, t) {
                        var n, r, s, l, d, u, c, f, g, v, x, b, y = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                            C = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : void 0,
                            _ = L.resolveThreadId(e);
                        if (null != D().threads[_] || y) {
                            var w = (s = null === (n = Object.values(t.mapping).find(function(e) {
                                return null === e.parent
                            })) || void 0 === n ? void 0 : n.id, l = new Set, d = new Set, (null !== (r = t.moderation_results) && void 0 !== r ? r : []).forEach(function(e) {
                                e.blocked ? d.add(e.message_id) : e.flagged && l.add(e.message_id)
                            }), {
                                rootId: s,
                                mapping: Object.keys(t.mapping).reduce(function(e, n) {
                                    var r, a, s = t.mapping[n],
                                        u = s.parent,
                                        c = s.children,
                                        f = (0, p._)(s, ["parent", "children"]),
                                        g = null !== (r = t.mapping[n].message) && void 0 !== r ? r : h.Cv.createRootMessage();
                                    return d.has(g.id) ? a = m.sK : l.has(g.id) && (a = m.Mf), e[n] = (0, o._)((0, i._)((0, o._)({}, f), {
                                        message: g,
                                        children: null != c ? c : [],
                                        parentId: u || "",
                                        type: h.uV[g.author.role]
                                    }), a && {
                                        metadata: a
                                    }), e
                                }, {}),
                                initialCurrentLeafId: t.current_node,
                                authorName: t.author_name
                            });
                            if ((null === (u = D().threads[_]) || void 0 === u ? void 0 : u.isLoading) !== !1) {
                                var j = null !== (c = w.mapping) && void 0 !== c ? c : h.Cv.createTree(),
                                    T = {
                                        thread: j,
                                        initialCurrentLeafId: null !== (g = null !== (f = w.initialCurrentLeafId) && void 0 !== f ? f : w.rootId) && void 0 !== g ? g : "root",
                                        threadId: _,
                                        title: null !== (v = t.title) && void 0 !== v ? v : null,
                                        lastModelUsed: function e(t, n) {
                                            var r, a, o = t[n];
                                            return (null == o ? void 0 : null === (r = o.message) || void 0 === r ? void 0 : null === (a = r.metadata) || void 0 === a ? void 0 : a.model_slug) ? o.message.metadata.model_slug : (null == o ? void 0 : o.parentId) ? e(t, o.parentId) : null
                                        }(w.mapping, w.initialCurrentLeafId),
                                        hasUserEditableContextFlag: null !== (x = t.has_user_editable_context) && void 0 !== x && x,
                                        pluginIds: null !== (b = t.plugin_ids) && void 0 !== b ? b : [],
                                        authorName: w.authorName,
                                        model: "model" in t && null != t.model ? (0, M.H6)(t.model) : void 0,
                                        createTime: "create_time" in t ? new Date(1e3 * t.create_time) : void 0
                                    },
                                    k = new h.Cv(j),
                                    I = T.initialCurrentLeafId;
                                R(function(e) {
                                    var t;
                                    e.threads[_] = (0, i._)((0, o._)({}, null !== (t = e.threads[_]) && void 0 !== t ? t : {}), {
                                        initialThreadData: T,
                                        title: T.title,
                                        titleSource: a.Server,
                                        tree: k,
                                        currentLeafId: I,
                                        isLoading: !1,
                                        continuingFromSharedConversationId: C
                                    })
                                }), L.recomputeConversationTurns(_, D().threads[_].currentLeafId, [])
                            }
                        }
                    },
                    resetThread: function(e) {
                        var t = {
                            thread: h.Cv.createTree(),
                            initialCurrentLeafId: "root",
                            threadId: null,
                            title: null,
                            lastModelUsed: null,
                            pluginIds: [],
                            authorName: void 0
                        };
                        L.deleteThread(e), R(function(n) {
                            n.threads[e] = {
                                initialThreadData: t,
                                tree: new h.Cv(t.thread),
                                title: t.title,
                                titleSource: a.NewChat,
                                currentLeafId: t.initialCurrentLeafId,
                                conversationTurns: [],
                                isLoading: !S(e)
                            }
                        })
                    },
                    updateInitialThreadDataForNewThread: function(e, t, n) {
                        R(function(r) {
                            r.threads[e].initialThreadData.lastModelUsed = t, r.threads[e].initialThreadData.pluginIds = n
                        })
                    },
                    getThreadCurrentLeafId: function(e) {
                        var t, n, r = L.resolveThreadId(e);
                        return null !== (n = null === (t = D().threads[r]) || void 0 === t ? void 0 : t.currentLeafId) && void 0 !== n ? n : "root"
                    },
                    setThreadCurrentLeafId: function(e, t) {
                        var n, r, a = L.resolveThreadId(e);
                        if (null != D().threads[a]) {
                            R(function(e) {
                                e.threads[a].currentLeafId = t
                            });
                            var o = D();
                            L.recomputeConversationTurns(a, t, null !== (r = null === (n = o.threads[a]) || void 0 === n ? void 0 : n.conversationTurns) && void 0 !== r ? r : [])
                        }
                    },
                    setTitle: function(e, t, n) {
                        var r = L.resolveThreadId(e);
                        null != D().threads[r] && R(function(e) {
                            e.threads[r].title = t, e.threads[r].titleSource = n
                        })
                    },
                    getTitle: function(e) {
                        var t;
                        return null !== (t = F.getThreadCustomTitle(e)) && void 0 !== t ? t : F.getThreadDataTitle(e)
                    },
                    getTitleAndSource: function(e) {
                        var t;
                        return {
                            title: null !== (t = F.getThreadCustomTitle(e)) && void 0 !== t ? t : F.getThreadDataTitle(e),
                            titleSource: F.getThreadTitleSource(e)
                        }
                    },
                    updateTree: function(e, t) {
                        var n, r, a, o, i = L.resolveThreadId(e);
                        if (!(null != D().threads[i])) {
                            console.warn("Thread does not exist, cannot update tree: ", i);
                            return
                        }
                        t(L.getTree(e));
                        var s = D(),
                            l = null !== (a = null === (n = s.threads[i]) || void 0 === n ? void 0 : n.currentLeafId) && void 0 !== a ? a : "root",
                            d = null !== (o = null === (r = s.threads[i]) || void 0 === r ? void 0 : r.conversationTurns) && void 0 !== o ? o : [];
                        L.recomputeConversationTurns(i, l, d)
                    },
                    getTree: function(e) {
                        var t, n, r = L.resolveThreadId(e);
                        return null !== (n = null === (t = D().threads[r]) || void 0 === t ? void 0 : t.tree) && void 0 !== n ? n : new h.Cv
                    },
                    resolveThreadId: function(e) {
                        return F.resolveThreadId(e)
                    },
                    recomputeConversationTurns: function(e, t, n) {
                        var r = L.resolveThreadId(e);
                        R(function(e) {
                            if (e.threads[r]) {
                                var a = L.computeThreadConversationTurns(r, t, n);
                                e.threads[r].conversationTurns = a
                            }
                        })
                    },
                    computeThreadConversationTurns: function(e, t, n) {
                        var r = L.resolveThreadId(e);
                        return L.getTree(r).getConversationTurns(t).map(function(e, t) {
                            var r = null == n ? void 0 : n[t];
                            return (0, l.isEqual)(r, e) ? r : e
                        })
                    },
                    getThreadConversationTurns: function(e, t, n) {
                        var r, a, o, i, s = L.resolveThreadId(e),
                            l = null !== (o = null === (r = D().threads[s]) || void 0 === r ? void 0 : r.currentLeafId) && void 0 !== o ? o : "root";
                        return null != t && t !== l ? L.computeThreadConversationTurns(s, t, null != n ? n : []) : null !== (i = null === (a = D().threads[s]) || void 0 === a ? void 0 : a.conversationTurns) && void 0 !== i ? i : []
                    },
                    getThreadModel: function(e) {
                        var t, n = L.resolveThreadId(e);
                        return null === (t = D().threads[n]) || void 0 === t ? void 0 : t.initialThreadData.model
                    },
                    removeContinuingFromSharedConversationId: function(e) {
                        var t = L.resolveThreadId(e);
                        R(function(e) {
                            var n;
                            (null === (n = e.threads[t]) || void 0 === n ? void 0 : n.continuingFromSharedConversationId) != null && delete e.threads[t].continuingFromSharedConversationId
                        })
                    },
                    copyLastMessageToClipboard: function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "mouse",
                            n = L.getThreadCurrentLeafId(e),
                            r = L.getThreadConversationTurns(e, n);
                        return L.copyMessageToClipboard(e, r.length - 1, t)
                    },
                    copyMessageToClipboard: function(e, t) {
                        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "mouse",
                            r = L.getThreadCurrentLeafId(e),
                            a = L.getThreadConversationTurns(e, r)[t];
                        if (!a) return Promise.reject();
                        var o = a.messages,
                            i = o.reduce(function(e, t) {
                                return t.err || t.message.author.role !== _.uU.Assistant || "all" !== t.message.recipient ? e : e + (e ? "\n\n" : "") + (0, k.RR)(t.message)
                            }, "");
                        return (0, v.S)(i).then(function() {
                            x.o.logEvent(b.a.copyToClipboard, {
                                threadId: L.getServerThreadId(e),
                                id: o[0].message.id,
                                eventSource: n
                            }), y.m9.logEvent("chatgpt_copy_to_clipboard")
                        })
                    },
                    deleteThread: function(e) {
                        R(function(t) {
                            delete t.threads[e], delete t.clientNewThreadIdToServerIdMapping[e]
                        })
                    },
                    retainThread: function(e) {
                        R(function(t) {
                            var n;
                            t.threadRetainCounts[e] = (null !== (n = t.threadRetainCounts[e]) && void 0 !== n ? n : 0) + 1
                        }), clearTimeout(E[e])
                    },
                    releaseThread: function(e) {
                        null != D().threads[e] && (R(function(t) {
                            var n;
                            t.threadRetainCounts[e] = Math.max((null !== (n = t.threadRetainCounts[e]) && void 0 !== n ? n : 0) - 1, 0)
                        }), D().threadRetainCounts[e] > 0 || (clearTimeout(E[e]), E[e] = setTimeout(function() {
                            null == D().threads[e] || D().threadRetainCounts[e] > 0 || L.deleteThread(e)
                        }, 3e4)))
                    }
                },
                B = function(e) {
                    var t = (0, d.useRouter)(),
                        n = (0, g.kP)(),
                        r = n.session,
                        a = n.isAuthenticated,
                        o = (0, u.useContext)(T.QL).historyDisabled,
                        i = null !== (0, u.useContext)(T.gB);
                    (0, s.a)(["conversation", e], function() {
                        return j.ZP.getConversation(e, null == r ? void 0 : r.accessToken)
                    }, {
                        enabled: !S(e) && a && !o && !i,
                        onError: function() {
                            t.replace("/", void 0, {
                                shallow: !0
                            }), w.m.danger("Unable to load conversation ".concat(e))
                        },
                        onSuccess: function(t) {
                            t && L.initThreadFromServerData(e, t)
                        }
                    }), (0, u.useEffect)(function() {
                        L.getOrInitThread(e)
                    }, [e, t])
                },
                A = function(e) {
                    return Z(function(t) {
                        return S(e) ? t.clientNewThreadIdToServerIdMapping[e] : e
                    })
                },
                U = function(e) {
                    return Z(function(t) {
                        var n, r, a = L.resolveThreadId(e);
                        return null !== (r = null === (n = t.threads[a]) || void 0 === n ? void 0 : n.initialThreadData) && void 0 !== r ? r : Object.freeze({
                            thread: h.Cv.createTree(),
                            threadId: null,
                            initialCurrentLeafId: "root",
                            title: null,
                            lastModelUsed: null
                        })
                    })
                },
                O = function(e) {
                    return Z(function(t) {
                        var n, r, a = L.resolveThreadId(e);
                        return null !== (r = null === (n = t.threads[a]) || void 0 === n ? void 0 : n.isLoading) && void 0 !== r && r
                    })
                },
                H = function(e) {
                    var t = Z(function(t) {
                        var n, r, a = L.resolveThreadId(e);
                        return null === (n = t.threads[a]) || void 0 === n ? void 0 : null === (r = n.initialThreadData) || void 0 === r ? void 0 : r.pluginIds
                    });
                    return (0, u.useMemo)(function() {
                        return null != t ? t : []
                    }, [t])
                },
                W = function(e) {
                    return Z(function() {
                        return L.getThreadCurrentLeafId(e)
                    })
                },
                z = function(e) {
                    return Z(function() {
                        return L.getThreadModel(e)
                    })
                },
                G = function(e, t) {
                    var n = (0, u.useRef)([]);
                    return Z(function() {
                        var r, a = L.getThreadConversationTurns(e, t, n.current);
                        return n.current = a, null !== (r = null == a ? void 0 : a.length) && void 0 !== r ? r : 0
                    })
                },
                J = function(e, t) {
                    var n = (0, u.useRef)([]);
                    return Z(function() {
                        var r = L.getThreadConversationTurns(e, t, n.current);
                        return n.current = r, r
                    })
                },
                q = function(e, t, n) {
                    var r = (0, u.useRef)([]);
                    return Z(function() {
                        var a = L.getThreadConversationTurns(e, n, r.current);
                        return r.current = a, a[t]
                    })
                },
                V = function(e) {
                    var t = W(e);
                    return (0, u.useMemo)(function() {
                        var n, r, a = L.getThreadConversationTurns(e, t, []),
                            o = null !== (n = null == a ? void 0 : a.length) && void 0 !== n ? n : 0,
                            i = null !== (r = null == a ? void 0 : a[o - 1]) && void 0 !== r ? r : null;
                        return 0 === o ? t : h.Cv.getRequestIdFromConversationTurn(i)
                    }, [t, e])
                },
                $ = function(e) {
                    return Z(function() {
                        return L.getTitle(e)
                    })
                },
                Q = function(e) {
                    return Z(function() {
                        return L.getTitleAndSource(e)
                    })
                },
                X = function(e) {
                    return Z(function() {
                        var t, n = L.resolveThreadId(e);
                        return null === (t = D().threads[n]) || void 0 === t ? void 0 : t.continuingFromSharedConversationId
                    })
                },
                K = function(e) {
                    return Z(function() {
                        var t, n, r = L.resolveThreadId(e);
                        return null === (t = D().threads[r]) || void 0 === t ? void 0 : null === (n = t.initialThreadData) || void 0 === n ? void 0 : n.authorName
                    })
                },
                Y = function(e, t) {
                    return Z(function() {
                        var n = L.getTree(e).getNodeByIdOrMessageId(t);
                        if (null == n) throw Error("useThreadTreeNode: cannot get tree node for ".concat(t, " in thread ").concat(e));
                        return n
                    })
                },
                ee = function(e, t) {
                    return Z(function() {
                        var n, r;
                        return null !== (r = null === (n = L.getTree(e)) || void 0 === n ? void 0 : n.getHasErrorFromNode(t)) && void 0 !== r && r
                    })
                },
                et = function(e, t) {
                    return Z(function() {
                        var n, r;
                        return null !== (r = null === (n = L.getTree(e)) || void 0 === n ? void 0 : n.isMessageIncomplete(t)) && void 0 !== r && r
                    })
                },
                en = function(e, t) {
                    return Z(function() {
                        var n = L.getTree(e);
                        return null == n ? [] : n.getBranchFromLeaf(t).filter(function(e) {
                            return e.type !== _.Jq.Root
                        }).map(function(e) {
                            return e.message
                        })
                    })
                },
                er = function(e) {
                    var t = L.getTree(e).getUserContext();
                    if (null == t) return null;
                    var n = t.message,
                        r = null !== (i = null === (a = n.metadata) || void 0 === a ? void 0 : a.shared_conversation_id) && void 0 !== i ? i : null;
                    if ((null === (o = n.metadata) || void 0 === o ? void 0 : o.user_context_message_data) != null) {
                        var a, o, i, s, l, d = n.metadata.user_context_message_data,
                            u = d.about_user_message,
                            c = d.about_model_message;
                        return {
                            aboutUserMessage: null !== (s = null == u ? void 0 : u.trim()) && void 0 !== s ? s : "",
                            aboutModelMessage: null !== (l = null == c ? void 0 : c.trim()) && void 0 !== l ? l : "",
                            fallback: null,
                            shareId: r
                        }
                    }
                    return {
                        aboutUserMessage: null,
                        aboutModelMessage: null,
                        fallback: (0, k.RR)(n),
                        shareId: r
                    }
                },
                ea = function(e) {
                    var t = Z(function(t) {
                        var n, r, a = L.resolveThreadId(e);
                        return null === (n = t.threads[a]) || void 0 === n ? void 0 : null === (r = n.initialThreadData) || void 0 === r ? void 0 : r.hasUserEditableContextFlag
                    });
                    return null != er(e) || !!t
                },
                eo = function(e) {
                    return Z(function() {
                        var t, n = L.resolveThreadId(e);
                        return (null === (t = D().threads[n]) || void 0 === t ? void 0 : t.continuingFromSharedConversationId) != null
                    })
                },
                ei = function(e) {
                    var t, n, r, a = U(e),
                        o = null !== (r = null == a ? void 0 : null === (t = a.model) || void 0 === t ? void 0 : t.id) && void 0 !== r ? r : null == a ? void 0 : a.lastModelUsed,
                        i = (0, M.B9)(),
                        s = void 0 != o ? i.get(o) : void 0;
                    return (null === (n = null == s ? void 0 : s.product_features.attachments) || void 0 === n ? void 0 : n.type) === C.Cd.Multimodal
                }
        },
        54118: function(e, t, n) {
            n.d(t, {
                DN: function() {
                    return j
                },
                Fl: function() {
                    return T
                },
                N2: function() {
                    return M
                },
                tr: function() {
                    return a
                }
            });
            var r, a, o, i = n(96237),
                s = n(39324),
                l = n(71209),
                d = n(22830),
                u = n(13995),
                c = n(5268),
                f = n(70079),
                g = n(78103),
                p = n(62509),
                h = n(6948),
                m = n(99486),
                v = n(46020),
                x = n(78931),
                b = {
                    isBetaFeaturesUiEnabled: !1,
                    isBrowsingAvailable: !1,
                    isBrowsingEnabled: !1,
                    isBrowsingPublisherRedTeam: !1,
                    isPluginsAvailable: !1,
                    isPluginsEnabled: !1,
                    isCodeInterpreterAvailable: !1,
                    isCodeInterpreterEnabled: !1
                };
            (r = a || (a = {})).BROWSING = "browsing", r.CODE_INTERPRETER = "code_interpreter", r.PLUGINS = "plugins";
            var y = (o = {}, (0, i._)(o, a.BROWSING, "isBrowsingEnabled"), (0, i._)(o, a.CODE_INTERPRETER, "isCodeInterpreterEnabled"), (0, i._)(o, a.PLUGINS, "isPluginsEnabled"), o),
                C = (0, g.ZP)()(function() {
                    return b
                }),
                _ = {
                    updateUserSettings: function(e) {
                        C.setState(function(t) {
                            return (0, s._)({}, t, e)
                        })
                    },
                    updateUserSettingsFromFeatures: function(e) {
                        C.setState(function(t) {
                            var n = _.getUserSettingsFromFeatures(e, t);
                            return (0, s._)({}, t, n)
                        })
                    },
                    getUserSettingsFromFeatures: function(e, t) {
                        return Object.entries(e).reduce(function(e, n) {
                            var r = (0, d._)(n, 2),
                                a = r[0],
                                o = r[1],
                                u = y[a],
                                c = !1;
                            return (("isBrowsingEnabled" === u && t.isBrowsingAvailable || "isCodeInterpreterEnabled" === u && t.isCodeInterpreterAvailable || "isPluginsEnabled" === u && t.isPluginsAvailable) && (c = o), u) ? (0, l._)((0, s._)({}, e), (0, i._)({}, u, c)) : e
                        }, {})
                    }
                },
                w = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                    return ["userSettings", e]
                };

            function M() {
                var e = (0, p.kP)().session,
                    t = (0, u.NL)();
                return function() {
                    return t.invalidateQueries({
                        queryKey: w(null == e ? void 0 : e.accessToken)
                    })
                }
            }
            var j = "oai/apps/hasSeenBrowsingDisabledJuly2023";

            function T() {
                var e = (0, p.kP)(),
                    t = e.session,
                    n = e.isAuthenticated,
                    r = (0, x.hz)(),
                    a = r.has("beta_features"),
                    o = (0, x.ec)(x.F_.isBusinessWorkspace);
                return (0, c.a)(w(null == t ? void 0 : t.accessToken), function() {
                    return m.ZP.getUserSettingBetaFeatures(t.accessToken).then(function(e) {
                        null != e && _.updateUserSettingsFromFeatures(e);
                        var t = !!h.m.getItem(j);
                        return e.browsing && !t && v.vm.openModal(v.B.TempBrowseToast), e
                    })
                }, {
                    enabled: (a || o) && n
                }), (0, f.useEffect)(function() {
                    _.updateUserSettings({
                        isBetaFeaturesUiEnabled: a,
                        isBrowsingAvailable: (null == t ? void 0 : t.user) != null && (0, p.yl)(null == t ? void 0 : t.user),
                        isBrowsingPublisherRedTeam: r.has("browsing_publisher_red_team"),
                        isCodeInterpreterAvailable: r.has("code_interpreter_available") || r.has("tools2"),
                        isPluginsAvailable: r.has("plugins_available") || r.has("tools3")
                    })
                }, [r, a, null == t ? void 0 : t.user]), C(function(e) {
                    return e
                })
            }
        },
        52787: function(e, t, n) {
            n.d(t, {
                Cs: function() {
                    return a
                },
                Ej: function() {
                    return h
                },
                JD: function() {
                    return c
                },
                Lx: function() {
                    return m
                },
                RR: function() {
                    return p
                },
                Rc: function() {
                    return g
                },
                lD: function() {
                    return u
                },
                oH: function() {
                    return d
                },
                qi: function() {
                    return l
                },
                qs: function() {
                    return f
                },
                rH: function() {
                    return s
                }
            });
            var r, a, o = n(22830),
                i = n(95954);

            function s(e) {
                if (e.author.role === i.uU.Assistant) {
                    var t = m(e.recipient);
                    if ("browser" === e.recipient || "browser_one_box" === e.recipient || "wiki_browser" == e.recipient) return a.Browsing;
                    if ("myfiles_browser" === e.recipient) return a.RetrievalBrowsing;
                    if ("browsing_team" === e.recipient) return a.ParallelBrowsing;
                    if ("python" === e.recipient) return a.Code;
                    else if ((null == t ? void 0 : t.namespace) === "dalle") return a.Dalle;
                    else if (null != t) return a.Plugin
                } else if (e.author.role === i.uU.Tool) {
                    var n = m(e.author.name);
                    if ("browser" === e.author.name || "browser_one_box" === e.author.name || "wiki_browser" == e.author.name) return a.BrowseTool;
                    if ("myfiles_browser" === e.author.name) return a.RetrievalBrowsingTool;
                    if ("browsing_team" === e.author.name) return a.ParallelBrowsingTool;
                    if (e.content.content_type === i.PX.ExecutionOutput) return a.CodeExecutionOutput;
                    else if ((null == n ? void 0 : n.namespace) === "dalle") return a.DalleTool;
                    else if (null != n || "plugin_service" === e.author.name) return a.PluginTool
                } else if (e.author.role === i.uU.User && e.content.content_type === i.PX.UserEditableContext) return a.UserEditableContext;
                return e.content.content_type === i.PX.Text || e.content.content_type === i.PX.MultimodalText ? a.Text : a.Unknown
            }

            function l(e) {
                var t;
                return (null === (t = e.metadata) || void 0 === t ? void 0 : t.finish_details) != null
            }

            function d(e) {
                var t, n;
                return (null === (t = e.metadata) || void 0 === t ? void 0 : null === (n = t.finish_details) || void 0 === n ? void 0 : n.type) === "stop"
            }

            function u(e) {
                var t, n;
                return (null === (t = e.metadata) || void 0 === t ? void 0 : null === (n = t.finish_details) || void 0 === n ? void 0 : n.type) === "max_tokens"
            }

            function c(e) {
                var t, n;
                return (null === (t = e.metadata) || void 0 === t ? void 0 : null === (n = t.finish_details) || void 0 === n ? void 0 : n.type) === "interrupted"
            }

            function f(e) {
                var t;
                return (null === (t = e.metadata) || void 0 === t ? void 0 : t.message_type) === "continue"
            }

            function g(e) {
                var t;
                return null === (t = e.metadata) || void 0 === t ? void 0 : t.model_slug
            }

            function p(e) {
                switch (e.content.content_type) {
                    case i.PX.Text:
                        return e.content.parts.join("");
                    case i.PX.MultimodalText:
                        return e.content.parts.map(function(e) {
                            return "string" == typeof e ? e : '[media pointer="'.concat(e.asset_pointer, '"]')
                        }).join("\n");
                    case i.PX.TetherBrowsingDisplay:
                        return e.content.result;
                    case i.PX.TetherQuote:
                    case i.PX.TetherBrowsingCode:
                    case i.PX.Code:
                    case i.PX.ExecutionOutput:
                    case i.PX.SystemError:
                    case "system_error":
                        return e.content.text;
                    case i.PX.SystemMessage:
                        var t = e.content.text,
                            n = !0,
                            r = !1,
                            a = void 0;
                        try {
                            for (var o, s = Object.values(e.content.tools_section)[Symbol.iterator](); !(n = (o = s.next()).done); n = !0) {
                                var l = o.value;
                                t += "\n\n".concat(l)
                            }
                        } catch (e) {
                            r = !0, a = e
                        } finally {
                            try {
                                n || null == s.return || s.return()
                            } finally {
                                if (r) throw a
                            }
                        }
                        return t;
                    case i.PX.UserEditableContext:
                        return "".concat(e.content.user_profile, "\n").concat(e.content.user_instructions);
                    default:
                        return ""
                }
            }

            function h(e) {
                var t;
                return null !== (t = e.recipient) && void 0 !== t ? t : ""
            }

            function m(e) {
                if (null == e || !e.includes(".")) return null;
                var t = (0, o._)(e.split("."), 2);
                return {
                    namespace: t[0],
                    functionName: t[1]
                }
            }(r = a || (a = {}))[r.Text = 0] = "Text", r[r.Browsing = 1] = "Browsing", r[r.BrowseTool = 2] = "BrowseTool", r[r.Code = 3] = "Code", r[r.CodeExecutionOutput = 4] = "CodeExecutionOutput", r[r.MultimodalText = 5] = "MultimodalText", r[r.Plugin = 6] = "Plugin", r[r.PluginTool = 7] = "PluginTool", r[r.RetrievalBrowsing = 8] = "RetrievalBrowsing", r[r.RetrievalBrowsingTool = 9] = "RetrievalBrowsingTool", r[r.ParallelBrowsing = 10] = "ParallelBrowsing", r[r.ParallelBrowsingTool = 11] = "ParallelBrowsingTool", r[r.UserEditableContext = 12] = "UserEditableContext", r[r.Dalle = 13] = "Dalle", r[r.DalleTool = 14] = "DalleTool", r[r.Unknown = 15] = "Unknown"
        },
        77370: function(e, t, n) {
            n.d(t, {
                Cv: function() {
                    return k
                },
                Vh: function() {
                    return C
                },
                uV: function() {
                    return w
                }
            });
            var r, a, o = n(51217),
                i = n(53596),
                s = n(66816),
                l = n(49406),
                d = n(31819),
                u = n(96237),
                c = n(39324),
                f = n(70216),
                g = n(81949),
                p = n(74050),
                h = n(84251),
                m = n.n(h),
                v = n(8844),
                x = n(16600),
                b = n(95954),
                y = n(52787),
                C = "request-",
                _ = (r = {}, (0, u._)(r, b.Jq.Root, b.uU.Unknown), (0, u._)(r, b.Jq.Prompt, b.uU.User), (0, u._)(r, b.Jq.Completion, b.uU.Assistant), (0, u._)(r, b.Jq.System, b.uU.System), r),
                w = (a = {}, (0, u._)(a, b.uU.Unknown, b.Jq.Root), (0, u._)(a, b.uU.System, b.Jq.System), (0, u._)(a, b.uU.User, b.Jq.Prompt), (0, u._)(a, b.uU.Assistant, b.Jq.Completion), (0, u._)(a, b.uU.Critic, b.Jq.Completion), (0, u._)(a, b.uU.Tool, b.Jq.Completion), a);

            function M(e) {
                var t = (0, v.Z)();
                return "".concat(e).concat(t.substring(e.length))
            }
            var j = new WeakMap,
                T = new WeakMap,
                k = function() {
                    function e(t) {
                        (0, o._)(this, e), (0, s._)(this, j, {
                            writable: !0,
                            value: void 0
                        }), (0, s._)(this, T, {
                            writable: !0,
                            value: void 0
                        }), (0, l._)(this, j, null != t ? t : e.createTree());
                        var n, r = Object.values((0, i._)(this, j)).find(function(e) {
                            return e.type === b.Jq.Root
                        });
                        (0, l._)(this, T, null !== (n = null == r ? void 0 : r.id) && void 0 !== n ? n : "root")
                    }
                    var t = e.prototype;
                    return t.getNodeByIdOrMessageId = function(e) {
                        if (null != (0, i._)(this, j)[e]) return (0, i._)(this, j)[e];
                        var t = !0,
                            n = !1,
                            r = void 0;
                        try {
                            for (var a, o = Object.values((0, i._)(this, j))[Symbol.iterator](); !(t = (a = o.next()).done); t = !0) {
                                var s = a.value;
                                if (s.message.id === e) return s
                            }
                        } catch (e) {
                            n = !0, r = e
                        } finally {
                            try {
                                t || null == o.return || o.return()
                            } finally {
                                if (n) throw r
                            }
                        }
                        throw Error("getNodeByIdOrMessageId - no node found by id: ".concat(e))
                    }, t.getMessage = function(e) {
                        return this.getNodeByIdOrMessageId(e).message
                    }, t.getMessageId = function(e) {
                        try {
                            var t;
                            return null === (t = this.getNodeByIdOrMessageId(e)) || void 0 === t ? void 0 : t.message.id
                        } catch (t) {
                            throw console.error("Tree: Unable to getMessageId for node: ".concat(e)), t
                        }
                    }, t.getMetadata = function(e) {
                        return this.getNodeByIdOrMessageId(e).metadata
                    }, t.getLeafFromNode = function(e) {
                        for (var t = this.getNodeByIdOrMessageId(e);;) {
                            if (0 === t.children.length) return t;
                            var n = t.children.values().next().value;
                            t = this.getNodeByIdOrMessageId(n)
                        }
                    }, t.getParent = function(e) {
                        var t = this.getNodeByIdOrMessageId(e).parentId;
                        return this.getNodeByIdOrMessageId(t)
                    }, t.getParentId = function(e) {
                        var t;
                        return (null === (t = this.getParent(e)) || void 0 === t ? void 0 : t.id) || "root"
                    }, t.getBranchFromLeaf = function(e) {
                        for (var t = [], n = this.getNodeByIdOrMessageId(e); null != n;) {
                            if (t.includes(n)) {
                                console.error("Infinite loop detected in getBranchFromLeaf. Branch already contains node ".concat(null == n ? void 0 : n.id, ". Parent id: ").concat(null == n ? void 0 : n.parentId, "."), {
                                    branch: t
                                });
                                break
                            }
                            if (t.push(n), "root" === n.type) break;
                            n = this.getNodeByIdOrMessageId(n.parentId)
                        }
                        return t.reverse()
                    }, t.getChildrenFromNode = function(e) {
                        var t = this,
                            n = this.getNodeByIdOrMessageId(e);
                        return null == n ? [] : Array.from(n.children).map(function(e) {
                            return t.getNodeByIdOrMessageId(e)
                        })
                    }, t.getFirstPrompt = function() {
                        for (var e, t, n = this.getNodeByIdOrMessageId((0, i._)(this, T));;) {
                            if (null == n) return;
                            if (n.type === b.Jq.Prompt || n.type === b.Jq.System && (null === (e = n.message.metadata) || void 0 === e ? void 0 : e.upload_filename)) return n;
                            n = this.getNodeByIdOrMessageId(null === (t = n.children) || void 0 === t ? void 0 : t[0])
                        }
                    }, t.getUserContext = function() {
                        for (var e, t, n = this.getNodeByIdOrMessageId((0, i._)(this, T));;) {
                            if (null == n) return;
                            if (null === (e = n.message.metadata) || void 0 === e ? void 0 : e.is_user_system_message) return n;
                            if (n.type === b.Jq.Prompt) return null;
                            n = this.getNodeByIdOrMessageId(null === (t = n.children) || void 0 === t ? void 0 : t[0])
                        }
                    }, t.isMessageIncomplete = function(e) {
                        var t = this.getMessage(e);
                        return (0, y.lD)(t)
                    }, t.addNodeToEnd = function(e, t) {
                        var n = this.getNodeByIdOrMessageId(e);
                        if (null == n) return console.error("Cannot addNodeToEnd with parentNodeId: ".concat(e, " - not found")), (0, u._)({}, t.id, t);
                        (0, l._)(this, j, m()((0, i._)(this, j), (0, u._)({
                            $merge: (0, u._)({}, t.id, t)
                        }, n.id, {
                            children: {
                                $apply: function(e) {
                                    return Array.from(new Set((0, g._)(e).concat([t.id])))
                                }
                            }
                        })))
                    }, t.appendSystemMessageToRoot = function(e) {
                        var t, n, r = null === (t = this.getFirstPrompt()) || void 0 === t ? void 0 : t.parentId;
                        if (null != r) {
                            var a = this.getNodeByIdOrMessageId(r),
                                o = this.getNodeByIdOrMessageId(a.children[0]),
                                s = {
                                    id: e.id,
                                    children: a.children,
                                    parentId: a.id,
                                    message: e
                                };
                            (0, l._)(this, j, m()((0, i._)(this, j), (n = {
                                $merge: (0, u._)({}, s.id, s)
                            }, (0, u._)(n, a.id, {
                                children: {
                                    $set: [s.id]
                                }
                            }), (0, u._)(n, o.id, {
                                parentId: {
                                    $set: s.id
                                }
                            }), n)))
                        }
                    }, t.addNode = function(t, n, r, a, o, i) {
                        if (t === r) throw Error("addNode: parentId and id cannot be the same: ".concat(t));
                        var s = "string" == typeof n ? e.getTextAsMessage(n, a, i) : "content_type" in n ? e.getContentAsMessage(n, a, i) : n,
                            l = (0, c._)({
                                id: this.messageIdToNodeId(t),
                                children: [],
                                parentId: this.messageIdToNodeId(r),
                                type: a,
                                message: s
                            }, o ? {
                                nodeMetadata: o
                            } : {});
                        this.addNodeToEnd(r, l)
                    }, t.updateNode = function(e, t) {
                        (0, l._)(this, j, m()((0, i._)(this, j), (0, u._)({}, this.messageIdToNodeId(e), t)))
                    }, t.updateNodeMessage = function(e, t) {
                        (0, l._)(this, j, m()((0, i._)(this, j), (0, u._)({}, this.messageIdToNodeId(e), {
                            message: {
                                $set: t
                            }
                        })))
                    }, t.updateNodeMessageMetadata = function(e, t) {
                        (0, l._)(this, j, m()((0, i._)(this, j), (0, u._)({}, this.messageIdToNodeId(e), {
                            message: {
                                metadata: {
                                    $merge: t
                                }
                            }
                        })))
                    }, t.updateNodeText = function(e, t) {
                        (0, l._)(this, j, m()((0, i._)(this, j), (0, u._)({}, this.messageIdToNodeId(e), {
                            message: {
                                content: {
                                    parts: {
                                        $set: [t]
                                    }
                                }
                            }
                        })))
                    }, t.deleteNode = function(e) {
                        var t = this.messageIdToNodeId(e),
                            n = (0, i._)(this, j),
                            r = n[t],
                            a = (0, f._)(n, [t].map(p._)),
                            o = r.parentId;
                        (0, l._)(this, j, m()(a, (0, u._)({}, o, {
                            children: {
                                $apply: function(e) {
                                    return e.filter(function(e) {
                                        return e !== t
                                    })
                                }
                            }
                        })))
                    }, t.getTextFromNode = function(e) {
                        return (0, y.RR)(this.getMessage(e))
                    }, t.getHasErrorFromNode = function(e) {
                        var t, n, r = this.getNodeByIdOrMessageId(e);
                        return (null == r ? void 0 : null === (t = r.metadata) || void 0 === t ? void 0 : t.errType) === "danger" || (null == r ? void 0 : null === (n = r.metadata) || void 0 === n ? void 0 : n.errType) === "warning"
                    }, t.getIsBlockedFromNode = function(e) {
                        var t, n, r = this.getNodeByIdOrMessageId(e);
                        return (null == r ? void 0 : null === (t = r.metadata) || void 0 === t ? void 0 : t.errCode) === x.Dd && (null == r ? void 0 : null === (n = r.metadata) || void 0 === n ? void 0 : n.errType) === "danger"
                    }, t.getTextFromThread = function(e) {
                        return this.getBranchFromLeaf(e).filter(function(e) {
                            return e.type !== b.Jq.Root && e.type !== b.Jq.System
                        }).map(function(e) {
                            return (0, y.RR)(e.message)
                        }).join("\n\n")
                    }, t.shouldFilterNode = function(e) {
                        var t = e.message,
                            n = t.content.content_type,
                            r = e.message.author.role === b.uU.System,
                            a = e.message.author.role === b.uU.Tool,
                            o = void 0 !== t.recipient && "all" !== t.recipient;
                        return r || o || a && !("code" === n || "execution_output" === n || "system_error" === n || "tether_browsing_display" === n || "tether_quote" === n)
                    }, t.getTextFromTurnsById = function(e) {
                        var t = this;
                        return e.map(function(e) {
                            return t.getNodeByIdOrMessageId(e)
                        }).filter(function(e) {
                            return !t.shouldFilterNode(e)
                        }).map(function(e) {
                            return t.getTextFromNode(e.id)
                        }).join("\n\n")
                    }, t.getTextFromLastNTurns = function(e, t) {
                        var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                        return this.getConversationTurns(e, this.shouldFilterNode).slice(-t).map(function(e) {
                            var t = e.messages.map(function(e) {
                                return (0, y.RR)(e.message)
                            }).filter(function(e) {
                                return "" !== e
                            }).join("\n");
                            return n ? "[".concat(e.role, "]\n").concat(t) : t
                        }).join("\n")
                    }, t.getConversationTurns = function(e, t) {
                        var n = this,
                            r = [];
                        return this.getBranchFromLeaf(e).forEach(function(e) {
                            var a = e.id,
                                o = e.parentId,
                                i = e.message,
                                s = e.metadata;
                            if (null == t || !t(e)) {
                                var l = r[r.length - 1];
                                (null == l ? void 0 : l.role) === i.author.role || i.author.role === b.uU.Tool ? r[r.length - 1].messages.push((0, c._)({
                                    nodeId: a,
                                    parentId: o,
                                    message: i
                                }, s)) : r.push({
                                    role: i.author.role,
                                    messages: [(0, c._)({
                                        nodeId: a,
                                        parentId: o,
                                        message: i
                                    }, s)],
                                    variantIds: o ? Array.from(n.getNodeByIdOrMessageId(o).children) : [a]
                                })
                            }
                        }), r
                    }, t.getLastValidNode = function(e) {
                        for (var t, n = this.getNodeByIdOrMessageId(e); null != n && null != n && (null === (t = n.metadata) || void 0 === t ? void 0 : t.err) != null;) n = this.getNodeByIdOrMessageId(n.parentId);
                        return n
                    }, t.getParentPromptNode = function(e) {
                        for (var t, n = this.getNodeByIdOrMessageId(e); null != n && null != n && (null === (t = n.message) || void 0 === t ? void 0 : t.author.role) !== b.uU.User && "root" !== n.type;) n = this.getNodeByIdOrMessageId(n.parentId);
                        return n
                    }, t.messageIdToNodeId = function(e) {
                        if (null != (0, i._)(this, j)[e]) return e;
                        var t = !0,
                            n = !1,
                            r = void 0;
                        try {
                            for (var a, o = Object.values((0, i._)(this, j))[Symbol.iterator](); !(t = (a = o.next()).done); t = !0) {
                                var s, l = a.value;
                                if ((null === (s = l.message) || void 0 === s ? void 0 : s.id) === e) return l.id
                            }
                        } catch (e) {
                            n = !0, r = e
                        } finally {
                            try {
                                t || null == o.return || o.return()
                            } finally {
                                if (n) throw r
                            }
                        }
                        return e
                    }, t.unstable_getMapping = function() {
                        return (0, i._)(this, j)
                    }, e.createTree = function() {
                        return {
                            root: {
                                id: "root",
                                children: [],
                                parentId: "",
                                type: b.Jq.Root,
                                message: e.createRootMessage()
                            }
                        }
                    }, e.createRootMessage = function() {
                        return {
                            id: M("aaa1"),
                            author: {
                                role: _[b.Jq.Root]
                            },
                            content: {
                                content_type: b.PX.Text,
                                parts: []
                            }
                        }
                    }, e.getRequestIdFromConversationTurn = function(e) {
                        for (var t = e.messages.length - 1; t >= 0; t--) {
                            var n = e.messages[t];
                            if (n.nodeId.startsWith(C)) return n.nodeId
                        }
                        return e.messages[0].nodeId
                    }, e.getTextAsMessage = function(e, t, n) {
                        var r = {
                            content_type: b.PX.Text,
                            parts: [e]
                        };
                        return this.getContentAsMessage(r, t, n)
                    }, e.getContentAsMessage = function(e, t, n) {
                        return {
                            id: M("aaa2"),
                            author: {
                                role: _[t]
                            },
                            content: e,
                            metadata: n
                        }
                    }, (0, d._)(e, [{
                        key: "isFirstCompletion",
                        get: function() {
                            var e = this.getFirstPrompt();
                            if (e) {
                                var t = this.getNodeByIdOrMessageId(e.children[0]);
                                if ((null == t ? void 0 : t.children.length) === 0) return !0
                            }
                            return !1
                        }
                    }]), e
                }()
        },
        19012: function(e, t, n) {
            var r = n(70079);
            t.Z = function() {
                var e = (0, r.useRef)(!1);
                return (0, r.useEffect)(function() {
                    return e.current = !0,
                        function() {
                            e.current = !1
                        }
                }, []), (0, r.useCallback)(function() {
                    return e.current
                }, [])
            }
        },
        87389: function(e, t, n) {
            n.d(t, {
                S: function() {
                    return f
                }
            });
            var r = n(21722),
                a = n(39324),
                o = n(22830),
                i = n(75883),
                s = n(12155),
                l = n(60554),
                d = n(70079),
                u = n(62509),
                c = n(99486);

            function f() {
                var e, t, n = (0, l.useRouter)(),
                    f = (0, u.kP)().session,
                    g = (null == f ? void 0 : null === (e = f.user) || void 0 === e ? void 0 : e.idp) === "auth0",
                    p = !!(null == f ? void 0 : null === (t = f.user) || void 0 === t ? void 0 : t.mfa),
                    h = (0, o._)((0, d.useState)(!1), 2),
                    m = h[0],
                    v = h[1],
                    x = (0, d.useCallback)((0, r._)(function() {
                        var e;
                        return (0, i.Jh)(this, function(t) {
                            if (e = new URL(n.asPath, window.location.origin).toString(), !g) throw Error("Only username/password users can enable MFA");
                            if (!f) throw Error("No session found, cannot enable MFA");
                            if ("mocked" === f.authProvider) throw Error("Mock users can't enable MFA! Please setup Auth0 following the instructions in the README");
                            return (0, s.signIn)(f.authProvider, {
                                callbackUrl: e
                            }, (0, a._)({
                                prompt: "login"
                            }, f.authProvider === u.Ho.OpenAI ? {
                                login_hint: (0, u.W_)({
                                    oai_enforce_mfa: !0,
                                    idp: "openai"
                                })
                            } : {
                                oai_enforce_mfa: "true"
                            })), [2]
                        })
                    }), [n.asPath, f, g]),
                    b = (0, d.useCallback)((0, r._)(function() {
                        var e;
                        return (0, i.Jh)(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    if (!g) throw Error("Only username/password users can disable MFA");
                                    if (!f) throw Error("No session found, cannot enable MFA");
                                    if ("mocked" === f.authProvider) throw Error("Mock users can't enable MFA! Please setup Auth0 following the instructions in the README");
                                    return v(!0), [4, c.ZP.deleteMfa()];
                                case 1:
                                    return t.sent(), [4, (0, s.signOut)({
                                        redirect: !1,
                                        callbackUrl: "/auth/login?next=".concat(encodeURIComponent(n.asPath))
                                    })];
                                case 2:
                                    return e = t.sent(), v(!1), n.push(e.url), [2]
                            }
                        })
                    }), [g, n, f]);
                return {
                    setupMfa: x,
                    isUsernamePassword: g,
                    isLoggedInWithMfa: p,
                    removeMfa: b,
                    isLoading: m
                }
            }
        },
        11084: function(e, t, n) {
            n.d(t, {
                S: function() {
                    return o
                }
            });
            var r = n(88798);

            function a() {
                r.m.danger("Failed to copy to clipboard.", {
                    duration: 4,
                    hasCloseButton: !0
                })
            }

            function o(e) {
                return new Promise(function(t, n) {
                    if ("undefined" == typeof navigator || !navigator.clipboard) return a(), n();
                    try {
                        navigator.clipboard.writeText(e)
                    } catch (e) {
                        return a(), n()
                    }
                    return t("success")
                })
            }
        },
        16600: function(e, t, n) {
            n.d(t, {
                Dd: function() {
                    return r
                },
                Kg: function() {
                    return o
                },
                Mf: function() {
                    return i
                },
                XZ: function() {
                    return a
                },
                sK: function() {
                    return s
                }
            });
            var r = "content_policy",
                a = "content_or_tos",
                o = "unusual_behavior",
                i = {
                    errType: "warning",
                    errCode: r
                },
                s = {
                    err: "Contents may violate our content policy",
                    errType: "danger",
                    errCode: r
                }
        }
    }
]);