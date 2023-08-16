"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6493], {
        91809: function(e, n, t) {
            t.d(n, {
                Z: function() {
                    return l
                }
            });
            var r = t(35250),
                i = t(19841),
                a = t(94968),
                s = t(70671),
                o = (0, a.vU)({
                    altText: {
                        id: "AppLogo.altText",
                        description: "The alt text for the app logo image",
                        defaultMessage: "{name} logo"
                    }
                });

            function l(e) {
                var n = e.url,
                    t = e.name,
                    a = e.size,
                    l = e.large,
                    u = e.className,
                    c = (0, s.Z)();
                return (0, r.jsxs)("div", {
                    className: (0, i.default)("relative", u),
                    style: {
                        width: a,
                        height: a
                    },
                    children: [(0, r.jsx)("img", {
                        src: n,
                        alt: c.formatMessage(o.altText, {
                            name: t
                        }),
                        className: (0, i.default)("h-full w-full bg-white", l ? "rounded-[5px]" : "rounded-sm")
                    }), (0, r.jsx)("div", {
                        className: (0, i.default)("absolute inset-0 ring-1 ring-inset ring-black/10", l ? "rounded-[5px]" : "rounded-sm")
                    })]
                })
            }
        },
        6038: function(e, n, t) {
            t.d(n, {
                B0: function() {
                    return R
                },
                Ph: function() {
                    return M
                },
                k$: function() {
                    return y
                },
                zf: function() {
                    return P
                }
            });
            var r = t(4337),
                i = t(35250),
                a = t(19841),
                s = t(19579),
                o = t.n(s),
                l = t(1454),
                u = t(13002),
                c = t(70671),
                d = t(94968),
                f = t(21389),
                v = t(62509),
                m = t(32877),
                h = t(78931),
                p = t(91809),
                x = t(88327);

            function g() {
                var e = (0, r._)(["relative p-1 ", " text-white flex items-center justify-center"]);
                return g = function() {
                    return e
                }, e
            }

            function b() {
                var e = (0, r._)(["\n  absolute w-4 h-4 rounded-full text-[10px] text-white flex  justify-center items-center right-0 top-[20px] -mr-2 border border-white\n  ", "\n  ", "\n"]);
                return b = function() {
                    return e
                }, e
            }

            function w() {
                var e = (0, r._)(["text-white flex justify-center items-center relative tracking-widest"]);
                return w = function() {
                    return e
                }, e
            }

            function j() {
                var e = (0, r._)(["relative flex"]);
                return j = function() {
                    return e
                }, e
            }
            var k = f.Z.div(g(), function(e) {
                    return e.$isMessageRedesign ? "rounded-full h-7 w-7" : "rounded-sm h-[30px] w-[30px]"
                }),
                N = f.Z.span(b(), function(e) {
                    return "warning" === e.$type && "bg-orange-500 text-white"
                }, function(e) {
                    return "danger" === e.$type && "bg-red-500 text-white"
                }),
                y = function(e) {
                    var n = e.iconName,
                        t = e.background,
                        r = e.notice,
                        a = (0, h.hz)().has(m.FZ),
                        s = x.nI;
                    switch (n) {
                        case "globe":
                            s = l.RsK;
                            break;
                        case "terminal":
                            s = l.cDN;
                            break;
                        case "text":
                            s = l.RUS;
                            break;
                        case "browsing":
                            s = l.jRj;
                            break;
                        case "code":
                            s = u.oT$;
                            break;
                        case "plugin":
                            s = l.yG;
                            break;
                        case "user":
                            s = l.fzv
                    }
                    return (0, i.jsxs)(k, {
                        $isMessageRedesign: a,
                        style: {
                            backgroundColor: t
                        },
                        children: [(0, i.jsx)(x.ZP, {
                            icon: s,
                            size: "medium",
                            className: a ? "!h-5 !w-5" : ""
                        }), r && (0, i.jsx)(N, {
                            $type: r,
                            children: "!"
                        })]
                    })
                },
                M = function(e) {
                    var n = e.plugin,
                        t = e.notice,
                        r = (0, h.hz)().has(m.FZ);
                    return (0, i.jsxs)(k, {
                        $isMessageRedesign: r,
                        className: "p-0",
                        children: [(0, i.jsx)(p.Z, {
                            url: n.manifest.logo_url,
                            name: n.manifest.name_for_human,
                            size: "100%"
                        }), t && (0, i.jsx)(N, {
                            $type: t,
                            children: "!"
                        })]
                    })
                },
                S = f.Z.div(w()),
                C = f.Z.div(j()),
                Z = {
                    small: 20,
                    redesign: 28,
                    medium: 38,
                    large: 48
                },
                T = {
                    small: "small",
                    redesign: "small",
                    medium: "medium",
                    large: "medium"
                },
                _ = function(e) {
                    var n, t = e.user,
                        r = e.size,
                        s = e.notice,
                        u = e.rounded,
                        c = s && (0, i.jsx)(N, {
                            $type: s,
                            children: "!"
                        }),
                        d = (0, h.hz)().has(m.FZ);
                    if ((null == t ? void 0 : t.picture) != null) return (0, i.jsxs)(C, {
                        children: [(0, i.jsx)(o(), {
                            src: t.picture,
                            alt: "User",
                            width: Z[r],
                            height: Z[r],
                            className: d || void 0 !== u && u ? "rounded-full" : "rounded-sm"
                        }), c]
                    });
                    var f = (null !== (n = null == t ? void 0 : t.name) && void 0 !== n ? n : "").split(" ").map(function(e) {
                        return e[0]
                    }).join("");
                    return (0, i.jsxs)(S, {
                        className: (0, a.default)("bg-blue-300", "redesign" === r ? "h-7 w-7 text-xs" : "small" === r ? "h-5 w-5 text-xs" : "h-[30px] w-[30px] text-sm", d ? "rounded-full" : "rounded-sm"),
                        children: [f || (0, i.jsx)(x.ZP, {
                            icon: l.fzv,
                            size: T[r]
                        }), c]
                    })
                };

            function R(e) {
                var n = e.size,
                    t = void 0 === n ? "medium" : n,
                    r = (0, c.Z)();
                return (0, i.jsx)(C, {
                    children: (0, i.jsx)(o(), {
                        src: "/images/office-building-24x24.svg",
                        alt: r.formatMessage(A.workspaceAvatarAlt),
                        width: Z[t],
                        height: Z[t],
                        className: (0, a.default)("medium" === t && "rounded-sm", "large" === t && "rounded")
                    })
                })
            }

            function P(e) {
                var n = e.className,
                    t = e.iconSize,
                    r = void 0 === t ? "medium" : t,
                    s = e.notice,
                    o = (0, h.ec)(function(e) {
                        return e.currentWorkspace
                    }),
                    l = (0, h.ec)(h.F_.isPersonalWorkspace),
                    u = (0, v.kP)().session;
                return !o || l && (null == u ? void 0 : u.user) !== void 0 ? (0, i.jsx)(_, {
                    user: null == u ? void 0 : u.user,
                    size: r,
                    notice: s
                }) : (0, i.jsxs)("div", {
                    className: (0, a.default)("flex items-center justify-center rounded", n),
                    children: [(0, i.jsx)(R, {
                        size: r
                    }), s && (0, i.jsx)(N, {
                        $type: s,
                        children: "!"
                    })]
                })
            }
            var A = (0, d.vU)({
                workspaceAvatarAlt: {
                    id: "Avatar.workspaceAvatarAlt",
                    defaultMessage: "Avatar of an office building",
                    description: "Alt text for workspace avatar"
                }
            })
        },
        50744: function(e, n, t) {
            var r = t(35250),
                i = t(55344),
                a = t.n(i);
            t(70079);
            var s = function(e) {
                var n = e.children;
                return (0, r.jsx)(r.Fragment, {
                    children: n
                })
            };
            n.Z = a()(function() {
                return Promise.resolve(s)
            }, {
                ssr: !1
            })
        },
        82277: function(e, n, t) {
            t.d(n, {
                Z: function() {
                    return v
                }
            });
            var r = t(4337),
                i = t(35250),
                a = t(70079),
                s = t(21389),
                o = t(46020),
                l = t(33669),
                u = t(50744),
                c = t(13090);

            function d() {
                var e = (0, r._)(["overflow-hidden w-full h-full relative flex z-0"]);
                return d = function() {
                    return e
                }, e
            }

            function f() {
                var e = (0, r._)(["relative h-full w-full transition-width overflow-auto"]);
                return f = function() {
                    return e
                }, e
            }

            function v(e) {
                var n = e.children,
                    t = e.showNavigation,
                    r = e.renderTitle,
                    s = e.renderMobileHeaderRightContent,
                    d = e.renderSidebar,
                    f = (0, l.w$)(),
                    p = [],
                    x = null;
                return a.Children.forEach(n, function(e) {
                    a.isValidElement(e) && (e.type === v.Sidebars ? x = e : p.push(e))
                }), (0, i.jsxs)(m, {
                    children: [f && t && (0, i.jsx)(u.Z, {
                        children: (0, i.jsx)(c.l6, {
                            children: d
                        })
                    }), (0, i.jsxs)("div", {
                        className: "relative flex h-full max-w-full flex-1 overflow-hidden",
                        children: [(0, i.jsxs)("div", {
                            className: "flex h-full max-w-full flex-1 flex-col",
                            children: [!f && t && (0, i.jsx)(u.Z, {
                                children: (0, i.jsx)(c.Vs, {
                                    onClickOpenSidebar: function() {
                                        return o.vm.toggleActiveSidebar("mobile-nav")
                                    },
                                    renderTitle: r,
                                    renderSidebar: d,
                                    renderRightContent: s
                                })
                            }), (0, i.jsx)(h, {
                                className: "flex-1",
                                children: p
                            })]
                        }), x]
                    })]
                })
            }
            var m = s.Z.div(d()),
                h = s.Z.main(f());
            v.Sidebars = function(e) {
                var n = e.children;
                return (0, i.jsx)(i.Fragment, {
                    children: n
                })
            }
        },
        13090: function(e, n, t) {
            t.d(n, {
                H: function() {
                    return y
                },
                MP: function() {
                    return k
                },
                Vs: function() {
                    return S
                },
                js: function() {
                    return N
                },
                l6: function() {
                    return C
                }
            });
            var r = t(39324),
                i = t(70216),
                a = t(35250),
                s = t(98359),
                o = t(20525),
                l = t(32148),
                u = t(97296),
                c = t(70737),
                d = t(70079),
                f = t(1454),
                v = t(70671),
                m = t(32004),
                h = t(94968),
                p = t(46020),
                x = t(33669),
                g = t(42271),
                b = t(45635),
                w = t(88327),
                j = t(15329);

            function k(e) {
                var n = e.onClick,
                    t = (0, i._)(e, ["onClick"]);
                return (0, a.jsx)(j.zV, (0, r._)({
                    onClick: n,
                    className: "flex-shrink-0 flex-grow"
                }, t))
            }

            function N(e) {
                var n = e.onClick,
                    t = (0, i._)(e, ["onClick"]);
                return (0, a.jsx)("button", (0, r._)({
                    type: "button",
                    className: "px-3",
                    onClick: n
                }, t))
            }

            function y() {
                var e = (0, v.Z)();
                return (0, x.w$)() ? (0, a.jsx)(b.u, {
                    side: "right",
                    label: e.formatMessage(Z.closeSidebar),
                    children: (0, a.jsxs)(j.zV, {
                        onClick: p.vm.toggleDesktopNavCollapsed,
                        className: "w-11 flex-shrink-0 items-center justify-center",
                        children: [(0, a.jsx)(w.ZP, {
                            icon: f.iYc
                        }), (0, a.jsx)(l.f, {
                            children: (0, a.jsx)(m.Z, (0, r._)({}, Z.closeSidebar))
                        })]
                    })
                }) : null
            }
            var M = function(e) {
                    var n = e.onClose,
                        t = e.sidebarOpen,
                        i = e.children;
                    return (0, a.jsx)(s.u.Root, {
                        show: t,
                        as: d.Fragment,
                        children: (0, a.jsxs)(o.V, {
                            as: "div",
                            className: "relative",
                            onClose: n,
                            children: [(0, a.jsx)(s.u.Child, {
                                as: d.Fragment,
                                enter: "transition-opacity ease-linear duration-300",
                                enterFrom: "opacity-0",
                                enterTo: "opacity-100",
                                leave: "transition-opacity ease-linear duration-300",
                                leaveFrom: "opacity-100",
                                leaveTo: "opacity-0",
                                children: (0, a.jsx)("div", {
                                    className: "fixed inset-0 bg-gray-600 bg-opacity-75"
                                })
                            }), (0, a.jsxs)("div", {
                                className: "fixed inset-0 flex",
                                children: [(0, a.jsx)(s.u.Child, {
                                    as: d.Fragment,
                                    enter: "transition ease-in-out duration-300 transform",
                                    enterFrom: "-translate-x-full",
                                    enterTo: "translate-x-0",
                                    leave: "transition ease-in-out duration-300 transform",
                                    leaveFrom: "translate-x-0",
                                    leaveTo: "-translate-x-full",
                                    children: (0, a.jsxs)(o.V.Panel, {
                                        className: "relative flex w-full max-w-xs flex-1 flex-col bg-gray-900",
                                        children: [(0, a.jsx)(s.u.Child, {
                                            as: d.Fragment,
                                            enter: "ease-in-out duration-300",
                                            enterFrom: "opacity-0",
                                            enterTo: "opacity-100",
                                            leave: "ease-in-out duration-300",
                                            leaveFrom: "opacity-100",
                                            leaveTo: "opacity-0",
                                            children: (0, a.jsx)("div", {
                                                className: "absolute right-0 top-0 -mr-12 pt-2",
                                                children: (0, a.jsxs)("button", {
                                                    type: "button",
                                                    className: "ml-1 flex h-10 w-10 items-center justify-center focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white",
                                                    onClick: n,
                                                    children: [(0, a.jsx)("span", {
                                                        className: "sr-only",
                                                        children: (0, a.jsx)(m.Z, (0, r._)({}, Z.closeSidebar))
                                                    }), (0, a.jsx)(w.ZP, {
                                                        icon: f.q5L,
                                                        size: "medium",
                                                        className: "text-white",
                                                        "aria-hidden": "true"
                                                    })]
                                                })
                                            })
                                        }), i]
                                    })
                                }), (0, a.jsx)("div", {
                                    className: "w-14 flex-shrink-0"
                                })]
                            })]
                        })
                    })
                },
                S = function(e) {
                    var n = e.onClickOpenSidebar,
                        t = e.renderTitle,
                        i = e.renderSidebar,
                        s = e.renderRightContent,
                        o = (0, p.tN)(function(e) {
                            return e.activeSidebar
                        });
                    return (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsxs)("div", {
                            className: "sticky top-0 z-10 flex items-center border-b border-white/20 bg-gray-800 pl-1 pt-1 text-gray-200 sm:pl-3 md:hidden",
                            children: [(0, a.jsxs)("button", {
                                type: "button",
                                className: "-ml-0.5 -mt-0.5 inline-flex h-10 w-10 items-center justify-center rounded-md hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white dark:hover:text-white",
                                onClick: n,
                                children: [(0, a.jsx)("span", {
                                    className: "sr-only",
                                    children: (0, a.jsx)(m.Z, (0, r._)({}, Z.openSidebar))
                                }), (0, a.jsx)(w.ZP, {
                                    icon: f.cur,
                                    "aria-hidden": "true",
                                    size: "medium"
                                })]
                            }), (0, a.jsx)("h1", {
                                className: "flex-1 text-center text-base font-normal",
                                children: t
                            }), s]
                        }), (0, a.jsx)(M, {
                            onClose: function() {
                                p.vm.setActiveSidebar(!1)
                            },
                            sidebarOpen: "mobile-nav" === o,
                            children: i
                        })]
                    })
                };

            function C(e) {
                var n = e.children,
                    t = (0, v.Z)(),
                    r = (0, d.useRef)(null),
                    i = (0, p.tN)(function(e) {
                        return e.isDesktopNavCollapsed
                    });
                return (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)(u.E.div, {
                        className: "dark flex-shrink-0 overflow-x-hidden bg-gray-900",
                        ref: r,
                        initial: !1,
                        animate: {
                            width: i ? 0 : "260px",
                            transition: {
                                duration: .165,
                                ease: "easeOut"
                            }
                        },
                        onAnimationStart: function() {
                            r.current && (r.current.style.visibility = "visible")
                        },
                        onAnimationComplete: function() {
                            r.current && i && (r.current.style.visibility = "hidden")
                        },
                        children: (0, a.jsx)("div", {
                            className: "h-full w-[260px]",
                            children: (0, a.jsx)("div", {
                                className: "flex h-full min-h-0 flex-col ",
                                children: n
                            })
                        })
                    }), (0, a.jsx)(c.M, {
                        initial: !1,
                        children: i && (0, a.jsx)(u.E.div, {
                            className: "absolute left-2 top-2 z-10 hidden md:inline-block",
                            initial: {
                                opacity: 0
                            },
                            animate: {
                                opacity: 1,
                                transition: {
                                    duration: .165,
                                    ease: "easeIn"
                                }
                            },
                            children: (0, a.jsx)(b.u, {
                                side: "right",
                                label: t.formatMessage(Z.openSidebar),
                                children: (0, a.jsx)(g.O, {
                                    onClick: p.vm.toggleDesktopNavCollapsed,
                                    "aria-label": t.formatMessage(Z.openSidebar),
                                    children: (0, a.jsx)(w.ZP, {
                                        className: "text-black dark:text-white",
                                        icon: f.iYc
                                    })
                                })
                            })
                        })
                    })]
                })
            }
            var Z = (0, h.vU)({
                closeSidebar: {
                    id: "navigation.closeSidebar",
                    defaultMessage: "Close sidebar",
                    description: "Close sidebar button label"
                },
                openSidebar: {
                    id: "navigation.openSidebar",
                    defaultMessage: "Open sidebar",
                    description: "Open sidebar button label"
                }
            })
        },
        52696: function(e, n, t) {
            t.d(n, {
                Ap: function() {
                    return c
                },
                Gk: function() {
                    return m
                },
                Ix: function() {
                    return f
                },
                _O: function() {
                    return v
                },
                bE: function() {
                    return h
                },
                qH: function() {
                    return d
                }
            });
            var r = t(96237),
                i = t(70079),
                a = t(70671),
                s = t(94968),
                o = t(62509),
                l = t(75641),
                u = t(78931);

            function c() {
                var e = (0, a.Z)(),
                    n = e.formatMessage(p.adminRoleName),
                    t = e.formatMessage(p.ownerRoleName),
                    s = e.formatMessage(p.standardRoleName);
                return (0, i.useMemo)(function() {
                    var e;
                    return e = {}, (0, r._)(e, l.r3.OWNER, t), (0, r._)(e, l.r3.ADMIN, n), (0, r._)(e, l.r3.STANDARD, s), e
                }, [t, n, s])
            }

            function d(e) {
                var n = (0, a.Z)();
                return e ? e.structure === l.CZ.PERSONAL ? n.formatMessage(p.personalPlanName) : n.formatMessage(p.enterprisePlanName) : n.formatMessage(p.personalPlanName)
            }

            function f(e) {
                var n, t, r, i, s, c, d = (0, o.kP)().session,
                    f = (0, u.ec)(function(e) {
                        return e.currentWorkspace
                    }),
                    v = (0, u.ec)(u.F_.isPersonalWorkspace),
                    m = (0, u.$T)(),
                    h = (t = (0, a.Z)(), null !== (n = null == f ? void 0 : f.name) && void 0 !== n ? n : t.formatMessage(p.defaultWorkspaceTitle)),
                    x = null !== (c = null !== (s = null == d ? void 0 : null === (r = d.user) || void 0 === r ? void 0 : r.name) && void 0 !== s ? s : null == d ? void 0 : null === (i = d.user) || void 0 === i ? void 0 : i.email) && void 0 !== c ? c : null;
                return e && !m ? e.structure === l.CZ.PERSONAL ? x : e.name : f ? v ? x : h : x
            }

            function v() {
                return (0, u.ec)(function(e) {
                    return e.workspaces
                })
            }

            function m(e) {
                var n = v().find(function(n) {
                    return n.id === e
                });
                return (null == n ? void 0 : n.role) === l.r3.OWNER
            }

            function h(e) {
                var n = v().find(function(n) {
                    return n.id === e
                });
                return (null == n ? void 0 : n.role) === l.r3.ADMIN
            }
            var p = (0, s.vU)({
                defaultWorkspaceTitle: {
                    id: "useWorkspaces.defaultWorkspaceTitle",
                    defaultMessage: "Untitled Workspace",
                    description: "title for workspace without a name"
                },
                personalPlanName: {
                    id: "useWorkspaces.personalPlanName",
                    defaultMessage: "Personal",
                    description: "label for personal tier account"
                },
                enterprisePlanName: {
                    id: "useWorkspaces.enterprisePlanName",
                    defaultMessage: "Enterprise",
                    description: "label for enterprise tier account"
                },
                adminRoleName: {
                    id: "useWorkspaces.adminRoleName",
                    defaultMessage: "Admin",
                    description: "Role name for an admin user"
                },
                ownerRoleName: {
                    id: "useWorkspaces.ownerRoleName",
                    defaultMessage: "Owner",
                    description: "Role name for an owner user"
                },
                standardRoleName: {
                    id: "useWorkspacews.standardRoleName",
                    defaultMessage: "Member",
                    description: "Role name for a standard user"
                }
            })
        },
        42271: function(e, n, t) {
            t.d(n, {
                O: function() {
                    return o
                },
                h: function() {
                    return l
                }
            });
            var r = t(4337),
                i = t(21389);

            function a() {
                var e = (0, r._)(["flex p-3 items-center gap-3 transition-colors duration-200 text-gray-600 dark:text-gray-200 cursor-pointer text-sm rounded-md bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 h-11"]);
                return a = function() {
                    return e
                }, e
            }

            function s() {
                var e = (0, r._)(["h-11 w-11"]);
                return s = function() {
                    return e
                }, e
            }
            var o = i.Z.button(a()),
                l = i.Z.div(s())
        },
        15329: function(e, n, t) {
            t.d(n, {
                R: function() {
                    return p
                },
                Vq: function() {
                    return x
                },
                ZB: function() {
                    return m
                },
                ZP: function() {
                    return v
                },
                zV: function() {
                    return h
                }
            });
            var r = t(4337),
                i = t(35250),
                a = t(7813),
                s = t(19841),
                o = t(21389);

            function l() {
                var e = (0, r._)(["p-2 rounded-md hover:bg-black/10 hover:dark:bg-white/10 cursor-pointer"]);
                return l = function() {
                    return e
                }, e
            }

            function u() {
                var e = (0, r._)(["flex p-3 items-center gap-3 transition-colors duration-200 text-white cursor-pointer text-sm"]);
                return u = function() {
                    return e
                }, e
            }

            function c() {
                var e = (0, r._)(["rounded-md border border-white/20 hover:bg-gray-500/10 h-11"]);
                return c = function() {
                    return e
                }, e
            }

            function d() {
                var e = (0, r._)(["my-1.5 h-px bg-white/20"]);
                return d = function() {
                    return e
                }, e
            }

            function f() {
                var e = (0, r._)(["", ""]);
                return f = function() {
                    return e
                }, e
            }

            function v(e) {
                var n = e.onClick,
                    t = e.href,
                    r = e.target,
                    o = e.children;
                return (0, i.jsx)(a.v.Item, {
                    children: function(e) {
                        var a = e.active;
                        return (0, i.jsx)(m, {
                            as: void 0 !== t ? "a" : "button",
                            onClick: n,
                            href: t,
                            target: r,
                            className: (0, s.default)(a ? "bg-gray-700" : "hover:bg-gray-700"),
                            children: o
                        })
                    }
                })
            }
            o.Z.a(l());
            var m = o.Z.a(u()),
                h = (0, o.Z)(m)(c()),
                p = o.Z.div(d()),
                x = (0, o.Z)(m)(f(), function(e) {
                    return e.$active ? "bg-gray-800" : "hover:bg-gray-800"
                })
        },
        46020: function(e, n, t) {
            t.d(n, {
                B: function() {
                    return i
                },
                EV: function() {
                    return m
                },
                bM: function() {
                    return f
                },
                tN: function() {
                    return d
                },
                vm: function() {
                    return v
                }
            });
            var r, i, a, s = t(39324),
                o = t(78103),
                l = t(6948);
            (r = i || (i = {})).AccountPortal = "account-portal", r.DeleteChatConfirmation = "delete-chat-confirmation", r.DownloadMessages = "download-messages", r.InviteUsersToWorkspace = "invite-users-to-workspace", r.KeyboardActions = "keyboard-actions", r.Settings = "settings", r.TempBrowseToast = "temp-browse-toast", r.UserContext = "user-context", r.WorkspaceSwitcher = "workspace-switcher", r.CreateConversationTemplate = "create-conversation-template", r.BrowseConversationTemplates = "browse-conversation-templates";
            var u = "UiState.isNavigationCollapsed.1",
                c = {
                    isThreadHeaderVisible: !0,
                    isDesktopNavCollapsed: null !== (a = l.m.getItem(u)) && void 0 !== a && a,
                    sharingModalThreadId: void 0,
                    isFilesModalOpen: !1,
                    activeSidebar: !1,
                    activeModals: new Set,
                    isLatencyDevToolsVisible: !1
                },
                d = (0, o.ZP)()(function() {
                    return (0, s._)({}, c)
                }),
                f = {
                    isDesktopNavCollapsed: function(e) {
                        return e.isDesktopNavCollapsed
                    },
                    isThreadHeaderVisible: function(e) {
                        return e.isThreadHeaderVisible
                    },
                    isLatencyDevtoolsVisible: function(e) {
                        return e.isLatencyDevToolsVisible
                    }
                },
                v = {
                    toggleDesktopNavCollapsed: function() {
                        d.setState(function(e) {
                            var n = !e.isDesktopNavCollapsed;
                            return l.m.setItem(u, n), {
                                isDesktopNavCollapsed: n
                            }
                        })
                    },
                    hideThreadHeader: function() {
                        d.setState({
                            isThreadHeaderVisible: !1
                        })
                    },
                    showThreadHeader: function() {
                        d.setState({
                            isThreadHeaderVisible: !0
                        })
                    },
                    openSharingModal: function(e) {
                        d.setState({
                            sharingModalThreadId: e
                        })
                    },
                    closeSharingModal: function() {
                        d.setState({
                            sharingModalThreadId: void 0
                        })
                    },
                    openFilesModal: function() {
                        d.setState({
                            isFilesModalOpen: !0
                        })
                    },
                    closeFilesModal: function() {
                        d.setState({
                            isFilesModalOpen: !1
                        })
                    },
                    setActiveSidebar: function(e) {
                        d.setState({
                            activeSidebar: e
                        })
                    },
                    toggleActiveSidebar: function(e) {
                        d.setState(function(n) {
                            return {
                                activeSidebar: n.activeSidebar !== e && e
                            }
                        })
                    },
                    toggleModal: function(e) {
                        d.setState(function(n) {
                            var t = new Set(n.activeModals);
                            return t.has(e) ? t.delete(e) : t.add(e), {
                                activeModals: t
                            }
                        })
                    },
                    openModal: function(e) {
                        d.setState(function(n) {
                            var t = new Set(n.activeModals);
                            return t.add(e), {
                                activeModals: t
                            }
                        })
                    },
                    closeModal: function(e) {
                        d.setState(function(n) {
                            var t = new Set(n.activeModals);
                            return t.delete(e), {
                                activeModals: t
                            }
                        })
                    },
                    hideLatencyDevTools: function() {
                        d.setState({
                            isLatencyDevToolsVisible: !1
                        })
                    },
                    showLatencyDevTools: function() {
                        d.setState({
                            isLatencyDevToolsVisible: !0
                        })
                    }
                };

            function m(e) {
                return d(function(n) {
                    return n.activeModals.has(e)
                })
            }
        }
    }
]);