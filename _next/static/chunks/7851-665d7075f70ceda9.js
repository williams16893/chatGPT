"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [7851], {
        20476: function(e, t, n) {
            var a = n(39324),
                r = n(4337),
                i = n(35250),
                s = n(32004),
                o = n(94968),
                l = n(78931),
                c = n(21389),
                u = n(75641);

            function d() {
                var e = (0, r._)(["bg-yellow-200 text-yellow-900 py-0.5 px-1.5 text-xs md:text-sm rounded-md uppercase"]);
                return d = function() {
                    return e
                }, e
            }

            function f() {
                var e = (0, r._)(["bg-blue-200 text-blue-700"]);
                return f = function() {
                    return e
                }, e
            }
            var g = c.Z.span(d()),
                m = (0, c.Z)(g)(f());
            t.ZP = function() {
                var e = (0, l.ec)(function(e) {
                        return e.currentWorkspace
                    }),
                    t = (0, l.WY)();
                return (null == e ? void 0 : e.structure) === "workspace" ? (0, i.jsx)(m, {
                    children: (0, i.jsx)(s.Z, (0, a._)({}, h.enterprisePlanName))
                }) : (null == e ? void 0 : e.structure) === u.CZ.PERSONAL && t ? (0, i.jsx)(g, {
                    children: "Plus"
                }) : null
            };
            var h = (0, o.vU)({
                enterprisePlanName: {
                    id: "badge.enterprisePlanName",
                    defaultMessage: "Enterprise",
                    description: "label for enterprise tier account"
                }
            })
        },
        77851: function(e, t, n) {
            n.d(t, {
                FB: function() {
                    return ev
                },
                ZP: function() {
                    return ey
                },
                wS: function() {
                    return eb
                }
            });
            var a = n(22830),
                r = n(35250),
                i = n(87758),
                s = n(70079),
                o = n(88798),
                l = n(21739),
                c = n(32542),
                u = n(77010),
                d = n(6948),
                f = n(32877),
                g = n(31621),
                m = n(46020),
                h = n(54118),
                p = n(78931),
                x = n(61888),
                v = n(20476),
                b = n(89368),
                y = n(39324),
                j = n(71209),
                w = n(94968),
                k = n(70671),
                M = n(32004),
                C = n(62509),
                _ = n(50795),
                T = n(82081),
                P = n(97747),
                N = (0, w.vU)({
                    welcomeBack: {
                        id: "existingUserAgeConfirmationModal.welcomeBack",
                        defaultMessage: "Welcome back, Italy!",
                        description: "Title for the age confirmation modal for Italian users"
                    },
                    ageRequirementsButton: {
                        id: "existingUserAgeConfirmationModal.ageRequirementsButton",
                        defaultMessage: "I meet OpenAI's age requirements",
                        description: "Primary button to confirm the user meets the age requirements"
                    },
                    logoutButton: {
                        id: "existingUserAgeConfirmationModal.logoutButton",
                        defaultMessage: "Log out",
                        description: "Secondary button to log out of the platform"
                    },
                    announcementParagraph1: {
                        id: "existingUserAgeConfirmationModal.announcementParagraph1",
                        defaultMessage: "We’re pleased to resume offering ChatGPT in Italy. To continue on ChatGPT, please confirm that you are 18+ or are 13+ and have consent from your parent or guardian to use ChatGPT.",
                        description: "First paragraph of the announcement, explaining the age requirements"
                    },
                    privacyPolicyLink: {
                        id: "existingUserAgeConfirmationModal.privacyPolicyLink",
                        defaultMessage: "Privacy policy",
                        description: "Link to the privacy policy"
                    },
                    helpCenterArticleLink: {
                        id: "existingUserAgeConfirmationModal.helpCenterArticleLink",
                        defaultMessage: "this help center article",
                        description: "Link to the help center article about ChatGPT development"
                    },
                    announcementParagraph2: {
                        id: "existingUserAgeConfirmationModal.announcementParagraph2",
                        defaultMessage: "For information about how we collect and use personal data, please see our {privacyPolicyLink}. For information about how we develop and train ChatGPT, please see {helpCenterArticleLink}.",
                        description: "Second paragraph of the announcement, providing links to more information"
                    }
                }),
                S = "2023-04-25",
                Z = "".concat("oai/apps/hasSeenAgeConfirmationModal", "/").concat(S);

            function I(e) {
                var t = e.onClose,
                    n = (0, k.Z)(),
                    a = (0, s.useCallback)(function() {
                        d.m.setItem(Z, !0), t()
                    }, [t]);
                return (0, s.useEffect)(function() {
                    _.o.logEvent(T.a.ageConfirmationModal, {
                        content: S
                    })
                }, []), (0, r.jsx)(b.Z, {
                    isOpen: !0,
                    onClose: x.noop,
                    type: "success",
                    title: n.formatMessage(N.welcomeBack),
                    primaryButton: (0, r.jsx)(P.ZP.Button, {
                        title: n.formatMessage(N.ageRequirementsButton),
                        color: "primary",
                        onClick: a
                    }),
                    secondaryButton: (0, r.jsx)(P.ZP.Button, {
                        title: n.formatMessage(N.logoutButton),
                        color: "light",
                        onClick: function() {
                            _.o.logEvent(T.a.clickLogOut, {
                                eventSource: "mouse"
                            }), (0, C.w7)()
                        },
                        className: "border-gray-800 hover:border-gray-700"
                    }),
                    children: (0, r.jsx)(D, {})
                })
            }
            var D = function() {
                    var e = (0, k.Z)();
                    return (0, r.jsx)("div", {
                        className: "mb-6 mt-4 sm:mt-6",
                        children: (0, r.jsxs)("div", {
                            className: "prose prose-invert text-base text-gray-500",
                            children: [(0, r.jsx)("p", {
                                children: (0, r.jsx)(M.Z, (0, y._)({}, N.announcementParagraph1))
                            }), (0, r.jsx)("p", {
                                children: (0, r.jsx)(M.Z, (0, j._)((0, y._)({}, N.announcementParagraph2), {
                                    values: {
                                        privacyPolicyLink: (0, r.jsx)("a", {
                                            href: "https://openai.com/policies/privacy-policy",
                                            target: "_blank",
                                            className: "text-gray-500 underline",
                                            rel: "noreferrer",
                                            children: e.formatMessage(N.privacyPolicyLink)
                                        }),
                                        helpCenterArticleLink: (0, r.jsx)("a", {
                                            href: "https://help.openai.com/en/articles/7842364-how-chatgpt-and-our-language-models-are-developed",
                                            target: "_blank",
                                            className: "text-gray-500 underline",
                                            rel: "noreferrer",
                                            children: e.formatMessage(N.helpCenterArticleLink)
                                        })
                                    }
                                }))
                            })]
                        })
                    })
                },
                B = n(7614),
                F = n(4337),
                R = n(21389),
                L = n(67273);

            function E() {
                var e = (0, F._)(["flex gap-4 mt-6"]);
                return E = function() {
                    return e
                }, e
            }

            function A() {
                var e = (0, F._)(["prose dark:prose-invert"]);
                return A = function() {
                    return e
                }, e
            }

            function q() {
                var e = (0, F._)(["mb-4"]);
                return q = function() {
                    return e
                }, e
            }
            var U = (0, w.vU)({
                paginationBack: {
                    id: "shared.pagination.back",
                    defaultMessage: "Back",
                    description: 'Text for the "Back" button in Pagination component.'
                },
                paginationNext: {
                    id: "shared.pagination.next",
                    defaultMessage: "Next",
                    description: 'Text for the "Next" button in Pagination component.'
                },
                paginationDone: {
                    id: "shared.pagination.done",
                    defaultMessage: "Done",
                    description: 'Text for the "Done" button in Pagination component.'
                }
            });

            function O(e) {
                var t = e.pages,
                    n = e.onSubmit,
                    i = (0, a._)((0, s.useState)(0), 2),
                    o = i[0],
                    l = i[1];
                return (0, r.jsx)(H, {
                    children: t.map(function(e, t) {
                        return o === t ? (0, r.jsx)(e, {
                            onChangePage: l,
                            onSubmit: n
                        }) : null
                    })
                })
            }

            function z(e) {
                var t = e.onBack,
                    n = e.onNext,
                    a = e.onSubmit;
                return (0, r.jsxs)(W, {
                    children: [t && (0, r.jsx)(L.z, {
                        as: "button",
                        color: "neutral",
                        onClick: t,
                        children: (0, r.jsx)(M.Z, (0, y._)({}, U.paginationBack))
                    }), n && (0, r.jsx)(L.z, {
                        as: "button",
                        onClick: n,
                        color: "neutral",
                        className: "ml-auto",
                        children: (0, r.jsx)(M.Z, (0, y._)({}, U.paginationNext))
                    }), a && (0, r.jsx)(L.z, {
                        as: "button",
                        onClick: a,
                        color: "primary",
                        className: "ml-auto",
                        children: (0, r.jsx)(M.Z, (0, y._)({}, U.paginationDone))
                    })]
                })
            }
            var W = R.Z.div(E()),
                H = R.Z.div(A()),
                Q = R.Z.h4(q()),
                V = "oai/apps/hasSeenOnboarding",
                $ = "chat",
                G = function(e) {
                    var t = (0, s.useCallback)(function() {
                            d.m.setItem("".concat(V, "/").concat(e), new Date().toLocaleDateString("en-CA", {
                                year: "numeric",
                                month: "2-digit",
                                day: "2-digit"
                            }))
                        }, [e]),
                        n = (0, a._)((0, s.useState)(null), 2),
                        r = n[0],
                        i = n[1];
                    (0, s.useEffect)(function() {
                        var t = d.m.getItem("".concat(V, "/").concat(e));
                        i(!!t && t)
                    }, [e]);
                    var o = (0, s.useCallback)(function() {
                        return r ? new Date(!0 === r ? "2022-12-14" : r) : r
                    }, [r]);
                    return (0, s.useMemo)(function() {
                        return {
                            setHasSeenOnboarding: t,
                            getHasSeenOnboardingDate: o
                        }
                    }, [o, t])
                };

            function J(e) {
                var t = e.onClose,
                    n = G($).setHasSeenOnboarding,
                    a = (0, s.useCallback)(function() {
                        t(!0), n()
                    }, [t, n]);
                return (0, r.jsx)(O, {
                    pages: [Y, K, X],
                    onSubmit: a
                })
            }
            var Y = function(e) {
                    var t = e.onChangePage;
                    return (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)(Q, {
                            children: (0, r.jsx)(M.Z, (0, y._)({}, ee.page0Subtitle))
                        }), (0, r.jsxs)(B.I, {
                            children: [(0, r.jsx)(B.Z, {
                                icon: "\uD83D\uDD2C",
                                children: (0, r.jsx)(M.Z, (0, y._)({}, ee.page0Disclaimer1))
                            }), (0, r.jsx)(B.Z, {
                                icon: "\uD83D\uDEA8",
                                children: (0, r.jsx)(M.Z, (0, y._)({}, ee.page0Disclaimer2))
                            })]
                        }), (0, r.jsx)(z, {
                            onNext: function() {
                                return t(1)
                            }
                        })]
                    })
                },
                K = function(e) {
                    var t = e.onChangePage;
                    return (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)(Q, {
                            children: (0, r.jsx)(M.Z, (0, y._)({}, ee.page1Subtitle))
                        }), (0, r.jsxs)(B.I, {
                            children: [(0, r.jsx)(B.Z, {
                                icon: "\uD83E\uDDBE",
                                children: (0, r.jsx)(M.Z, (0, y._)({}, ee.page1Disclaimer1))
                            }), (0, r.jsx)(B.Z, {
                                icon: "\uD83D\uDD10",
                                children: (0, r.jsx)(M.Z, (0, y._)({}, ee.page1Disclaimer2))
                            })]
                        }), (0, r.jsx)(z, {
                            onBack: function() {
                                return t(0)
                            },
                            onNext: function() {
                                return t(2)
                            }
                        })]
                    })
                },
                X = function(e) {
                    var t = e.onChangePage,
                        n = e.onSubmit,
                        a = (0, s.useRef)(null);
                    return (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)(Q, {
                            children: (0, r.jsx)(M.Z, (0, y._)({}, ee.page2Subtitle))
                        }), (0, r.jsxs)(B.I, {
                            children: [(0, r.jsx)(B.Z, {
                                icon: "\uD83D\uDC4D",
                                children: (0, r.jsx)(M.Z, (0, y._)({}, ee.page2Disclaimer1))
                            }), (0, r.jsx)(B.Z, {
                                icon: "\uD83D\uDCAC",
                                children: (0, r.jsx)(M.Z, (0, j._)((0, y._)({}, ee.page2Disclaimer2), {
                                    values: {
                                        link: function(e) {
                                            return (0, r.jsx)("a", {
                                                href: "https://discord.gg/openai",
                                                target: "_blank",
                                                rel: "noreferrer",
                                                children: e
                                            })
                                        }
                                    }
                                }))
                            })]
                        }), (0, r.jsx)(z, {
                            onBack: function() {
                                return t(1)
                            },
                            onSubmit: function() {
                                return null == n ? void 0 : n(a)
                            }
                        })]
                    })
                },
                ee = (0, w.vU)({
                    keepInMind: {
                        id: "onboarding.keepInMind",
                        defaultMessage: "Here are a few things to keep in mind before we get started:",
                        description: "Introduction text for the onboarding process"
                    },
                    page0Subtitle: {
                        id: "onboarding.page0Subtitle",
                        defaultMessage: "This is a free research preview.",
                        description: "Subtitle for Page 0"
                    },
                    page0Disclaimer1: {
                        id: "onboarding.page0Disclaimer1",
                        defaultMessage: "Our goal is to get external feedback in order to improve our systems and make them safer.",
                        description: "Disclaimer 1 for Page 0"
                    },
                    page0Disclaimer2: {
                        id: "onboarding.page0Disclaimer2",
                        defaultMessage: "While we have safeguards in place, the system may occasionally generate incorrect or misleading information and produce offensive or biased content. It is not intended to give advice.",
                        description: "Disclaimer 2 for Page 0"
                    },
                    page1Subtitle: {
                        id: "onboarding.page1Subtitle",
                        defaultMessage: "How we collect data",
                        description: "Subtitle for Page 1"
                    },
                    page1Disclaimer1: {
                        id: "onboarding.page1Disclaimer1",
                        defaultMessage: "Conversations may be reviewed by our AI trainers to improve our systems.",
                        description: "Disclaimer 1 for Page 1"
                    },
                    page1Disclaimer2: {
                        id: "onboarding.page1Disclaimer2",
                        defaultMessage: "Please don't share any sensitive information in your conversations.",
                        description: "Disclaimer 2 for Page 1"
                    },
                    page2Subtitle: {
                        id: "onboarding.page2Subtitle",
                        defaultMessage: "We'd love your feedback!",
                        description: "Subtitle for Page 2"
                    },
                    page2Disclaimer1: {
                        id: "onboarding.page2Disclaimer1",
                        defaultMessage: "This system is optimized for dialogue. Let us know if a particular response was good or unhelpful.",
                        description: "Disclaimer 1 for Page 2"
                    },
                    page2Disclaimer2: {
                        id: "onboarding.page2Disclaimer2",
                        defaultMessage: "Share your feedback in our <link>Discord server</link>.",
                        description: "Disclaimer 2 for Page 2, with link to Discord"
                    }
                }),
                et = n(52696),
                en = "workspace";

            function ea(e) {
                var t = e.onClose,
                    n = G(en).setHasSeenOnboarding,
                    a = (0, s.useCallback)(function() {
                        t(!0), n()
                    }, [t, n]);
                return (0, r.jsx)(O, {
                    pages: [er, ei],
                    onSubmit: a
                })
            }
            var er = function(e) {
                    var t = e.onChangePage,
                        n = (0, et.Ix)();
                    return (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)(Q, {
                            children: (0, r.jsx)(M.Z, (0, j._)((0, y._)({}, es.page0Subtitle), {
                                values: {
                                    workspaceName: n
                                }
                            }))
                        }), (0, r.jsxs)(B.I, {
                            children: [(0, r.jsx)(B.Z, {
                                icon: "\uD83C\uDFE2",
                                children: (0, r.jsx)(M.Z, (0, y._)({}, es.page0Disclaimer1))
                            }), (0, r.jsx)(B.Z, {
                                icon: "\uD83D\uDEA8",
                                children: (0, r.jsx)(M.Z, (0, y._)({}, es.page0Disclaimer2))
                            })]
                        }), (0, r.jsx)(z, {
                            onNext: function() {
                                return t(1)
                            }
                        })]
                    })
                },
                ei = function(e) {
                    var t = e.onChangePage,
                        n = e.onSubmit,
                        a = (0, s.useRef)(null);
                    return (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)(Q, {
                            children: (0, r.jsx)(M.Z, (0, y._)({}, es.page1Subtitle))
                        }), (0, r.jsxs)(B.I, {
                            children: [(0, r.jsx)(B.Z, {
                                icon: "\uD83D\uDED1",
                                children: (0, r.jsx)(M.Z, (0, y._)({}, es.page1Disclaimer1))
                            }), (0, r.jsx)(B.Z, {
                                icon: "\uD83D\uDD12",
                                children: (0, r.jsx)(M.Z, (0, j._)((0, y._)({}, es.page1Disclaimer2), {
                                    values: {
                                        link: function(e) {
                                            return (0, r.jsx)("a", {
                                                href: "https://openai.com/policies/api-data-usage-policies",
                                                target: "_blank",
                                                rel: "noreferrer",
                                                children: e
                                            })
                                        }
                                    }
                                }))
                            })]
                        }), (0, r.jsx)(z, {
                            onBack: function() {
                                return t(0)
                            },
                            onSubmit: function() {
                                return null == n ? void 0 : n(a)
                            }
                        })]
                    })
                },
                es = (0, w.vU)({
                    page0Subtitle: {
                        id: "WorkspaceOnboarding.page0Subtitle",
                        defaultMessage: "Welcome to the {workspaceName} workspace",
                        description: "Subtitle for the first page of the business onboarding flow"
                    },
                    page0Disclaimer1: {
                        id: "WorkspaceOnboarding.page0Disclaimer1",
                        defaultMessage: "This workspace is private, only select members and roles can use it.",
                        description: "First disclaimer for the first page of the business onboarding flow"
                    },
                    page0Disclaimer2: {
                        id: "WorkspaceOnboarding.page0Disclaimer2",
                        defaultMessage: "While we have safeguards in place, the system may occasionally generate incorrect or misleading information and produce offensive or biased content. It is not intended to give advice.",
                        description: "Second disclaimer for the first page of the business onboarding flow"
                    },
                    page1Subtitle: {
                        id: "WorkspaceOnboarding.page1Subtitle",
                        defaultMessage: "Data management",
                        description: "Subtitle for the second page of the business onboarding flow"
                    },
                    page1Disclaimer1: {
                        id: "WorkspaceOnboarding.page1Disclaimer1",
                        defaultMessage: "Conversations in this workspace are opted out of training and not available to other users.",
                        description: "First disclaimer for the second page of the business onboarding flow"
                    },
                    page1Disclaimer2: {
                        id: "WorkspaceOnboarding.page1Disclaimer2",
                        defaultMessage: "Chats are securely stored for 30 days for <link>Trust and Safety Protocols</link>.",
                        description: "Second disclaimer for the second page of the business onboarding flow"
                    }
                }),
                eo = function(e) {
                    var t = e.onClose;
                    return (0, r.jsx)(b.Z, {
                        isOpen: !0,
                        onClose: x.noop,
                        type: "success",
                        primaryButton: void 0,
                        title: "ChatGPT",
                        children: (0, r.jsx)(J, {
                            onClose: t
                        })
                    })
                },
                el = function(e) {
                    var t = e.onClose;
                    return (0, r.jsx)(b.Z, {
                        isOpen: !0,
                        onClose: x.noop,
                        type: "success",
                        primaryButton: void 0,
                        title: (0, r.jsxs)("span", {
                            children: ["ChatGPT ", (0, r.jsx)(v.ZP, {})]
                        }),
                        children: (0, r.jsx)(ea, {
                            onClose: t
                        })
                    })
                };

            function ec(e) {
                var t, n, i = e.userCountry,
                    o = (0, a._)((0, s.useState)(0), 2),
                    l = o[0],
                    c = o[1],
                    u = G($).getHasSeenOnboardingDate,
                    f = G(en).getHasSeenOnboardingDate,
                    g = (0, p.ec)(p.F_.isBusinessWorkspace),
                    m = (t = (0, p.hz)(), n = !!d.m.getItem(Z), 0 === t.size ? "loading" : "IT" !== i || n ? "hide" : "show"),
                    h = (0, s.useMemo)(function() {
                        return [{
                            Modal: I,
                            getModalState: function() {
                                return m
                            }
                        }, {
                            Modal: eo,
                            getModalState: function() {
                                if (g) return "hide";
                                var e = u();
                                return null === e ? "loading" : !1 === e ? "show" : "hide"
                            }
                        }, {
                            Modal: el,
                            getModalState: function() {
                                if (!g) return "hide";
                                var e = f();
                                return null === e ? "loading" : !1 === e ? "show" : "hide"
                            }
                        }]
                    }, [u, f, g, m]);
                (0, s.useEffect)(function() {
                    h[l] && "hide" === h[l].getModalState() && c(h.findIndex(function(e) {
                        return "hide" !== e.getModalState()
                    }))
                }, [l, h]);
                var x = h[l];
                if (!x) return null;
                var v = x.getModalState();
                if ("loading" === v) return null;
                "hide" === v && c(function(e) {
                    return e + 1
                });
                var b = h[l].Modal;
                return (0, r.jsx)(b, {
                    onClose: function() {
                        c(function(e) {
                            return e + 1
                        })
                    }
                })
            }
            var eu = n(93345),
                ed = n(19841),
                ef = n(10664),
                eg = function(e) {
                    var t = e.action;
                    return (0, r.jsxs)("div", {
                        className: "flex items-center justify-between overflow-hidden text-gray-600 dark:text-gray-300",
                        children: [(0, r.jsx)("div", {
                            className: "flex flex-shrink items-center overflow-hidden text-sm",
                            children: (0, r.jsx)("div", {
                                className: "truncate",
                                children: t.text
                            })
                        }), (0, r.jsx)("div", {
                            className: "ml-3 flex flex-row gap-2",
                            children: (0, ef.A3)(t.keyboardBinding).map(function(e, n) {
                                return (0, r.jsx)(em, {
                                    keyName: e
                                }, "".concat(t.key, "-").concat(n))
                            })
                        })]
                    })
                },
                em = function(e) {
                    var t = e.keyName,
                        n = (0, ed.default)("my-2 flex h-8 items-center justify-center rounded-[4px] border border-black/10 capitalize text-gray-600 dark:border-white/10 dark:text-gray-300");
                    return t.length > 1 ? t.length > 3 ? (0, r.jsx)("div", {
                        className: (0, ed.default)(n, "min-w-[50px]"),
                        children: (0, r.jsx)("span", {
                            className: "text-xs",
                            children: t
                        })
                    }) : (0, r.jsx)("div", {
                        className: (0, ed.default)(n, "min-w-[32px]"),
                        children: (0, r.jsx)("span", {
                            className: "text-xs",
                            children: t
                        })
                    }) : (0, r.jsx)("div", {
                        className: (0, ed.default)(n, "min-w-[32px]"),
                        children: (0, r.jsx)("span", {
                            className: "text-sm",
                            children: t
                        })
                    })
                },
                eh = (0, w.vU)({
                    keyboardActionsModalTitle: {
                        id: "KeyboardActionsModal.keyboardActionsModalTitle",
                        defaultMessage: "Keyboard shortcuts",
                        description: "Title of the keyboard shortcuts modal"
                    }
                }),
                ep = function() {
                    var e = (0, k.Z)(),
                        t = (0, m.tN)(function(e) {
                            return e.activeModals.has(m.B.KeyboardActions)
                        }),
                        n = function() {
                            m.vm.closeModal(m.B.KeyboardActions)
                        },
                        a = (0, ef.JS)(),
                        i = (0, s.useMemo)(function() {
                            var e = Math.ceil(a.length / 2);
                            return [a.slice(0, e), a.slice(e)]
                        }, [a]);
                    return (0, r.jsx)(b.Z, {
                        isOpen: t,
                        onClose: n,
                        type: "success",
                        size: "custom",
                        className: "md:max-w-[672px] lg:max-w-[796px] xl:max-w-4xl",
                        closeButton: (0, r.jsx)(P.ZP.CloseButton, {
                            onClose: n
                        }),
                        title: e.formatMessage(eh.keyboardActionsModalTitle),
                        children: (0, r.jsx)(r.Fragment, {
                            children: (0, r.jsx)("div", {
                                className: "grid grid-flow-row grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-x-9",
                                children: i.map(function(e, t) {
                                    return (0, r.jsx)("div", {
                                        className: "flex flex-col overflow-hidden",
                                        children: e.map(function(e) {
                                            return (0, r.jsx)(eg, {
                                                action: e
                                            }, e.key)
                                        })
                                    }, "col-".concat(t))
                                })
                            })
                        })
                    })
                },
                ex = n(15610),
                ev = Symbol("invalid path");

            function eb(e) {
                var t, n = e.split(/[#?]/)[0];
                if ("/" !== n) {
                    var a = /\/c\/([a-f0-9-]+)/.exec(n);
                    return null !== (t = null == a ? void 0 : a[1]) && void 0 !== t ? t : ev
                }
            }

            function ey(e) {
                var t = e.urlThreadId,
                    n = e.clientThreadId,
                    x = e.isUserInCanPayGroup,
                    v = e.serviceStatus,
                    b = e.serviceAnnouncement,
                    y = e.userCountry,
                    j = (0, a._)((0, s.useState)(function() {
                        return void 0 !== t ? t : void 0 !== n ? n : (0, g.OX)()
                    }), 2),
                    w = j[0],
                    k = j[1];
                void 0 !== t && w !== t && k(t), void 0 !== t || (0, g.Zz)(w) || k((0, g.OX)());
                var M = (0, p.$T)(),
                    C = (0, p.WY)(),
                    _ = (0, p.ec)(p.F_.workspaceId),
                    T = (0, l.g)(function(e) {
                        return e.updateFlagValue
                    }),
                    P = (0, p.hz)().has(f.PL);
                (0, s.useEffect)(function() {
                    P && u.Z.gatherData()
                }, [P]), (0, s.useEffect)(function() {
                    void 0 !== x && T("isUserInCanPayGroup", x)
                }, [T, x]), (0, s.useEffect)(function() {
                    (null == v ? void 0 : v.type) && !1 === C && o.m.warning(v.message, {
                        hasCloseButton: !0,
                        duration: 5
                    })
                }, [C, null == v ? void 0 : v.message, null == v ? void 0 : v.type]);
                var N = (0, g.GR)(w),
                    S = (0, s.useRef)(!1);
                (0, s.useEffect)(function() {
                    if (!M) {
                        var e = C ? b.paid : b.public;
                        if ((null == e ? void 0 : e.type) && (null == e ? void 0 : e.message) && !S.current) {
                            S.current = !0;
                            var t = e.message,
                                n = {
                                    hasCloseButton: !0,
                                    duration: 15
                                };
                            switch (e.type) {
                                case "danger":
                                    o.m.danger(t, n);
                                    break;
                                case "info":
                                    o.m.info(t, n);
                                    break;
                                case "warning":
                                    o.m.warning(t, n)
                            }
                        }
                    }
                }, [b, M, C]);
                var Z = (0, m.tN)(function(e) {
                    return e.activeModals.has(m.B.TempBrowseToast)
                });
                return (0, r.jsx)(c.XA.Provider, {
                    value: N,
                    children: (0, r.jsxs)(c.gB.Provider, {
                        value: null,
                        children: [(0, r.jsx)(ec, {
                            userCountry: y
                        }, _), (0, r.jsx)(ep, {}), (0, r.jsx)(eu.Z, {
                            clientThreadId: w,
                            setClientThreadId: k
                        }), (0, r.jsxs)(i.zt, {
                            children: [(0, r.jsxs)(i.fC, {
                                className: "grid max-w-sm grid-cols-[auto_max-content] items-center gap-x-[15px] rounded-lg bg-white p-[15px] shadow-xs [grid-template-areas:_'title_action'_'description_action'] radix-state-closed:animate-hide radix-state-open:animate-slideIn dark:bg-gray-950 md:max-w-[390px]",
                                open: Z,
                                children: [(0, r.jsxs)(i.Dx, {
                                    className: "text-slate12 mb-[5px] text-[15px] font-medium [grid-area:_title]",
                                    children: ["We've temporarily disabled the Browse with Bing ", (0, ex.V)("beta"), " feature"]
                                }), (0, r.jsxs)(i.dk, {
                                    className: "text-slate11 m-0 text-[13px] leading-[1.3] [grid-area:_description]",
                                    children: ["Read the", " ", (0, r.jsx)("a", {
                                        href: "https://help.openai.com/articles/8077698-how-do-i-use-chatgpt-browse-with-bing-to-search-the-web",
                                        target: "_blank",
                                        rel: "noreferrer",
                                        className: "cursor-pointer underline",
                                        children: "Help Center article"
                                    }), "."]
                                }), (0, r.jsx)(i.aU, {
                                    altText: "Dismiss notification",
                                    asChild: !0,
                                    children: (0, r.jsx)(L.z, {
                                        color: "neutral",
                                        size: "small",
                                        onClick: function() {
                                            m.vm.closeModal(m.B.TempBrowseToast), d.m.setItem(h.DN, "true")
                                        },
                                        children: "Dismiss"
                                    })
                                }), (0, r.jsx)(i.x8, {})]
                            }), (0, r.jsx)(i.l_, {
                                className: "z-100 fixed bottom-0 right-0 m-0 flex  max-w-[100vw] list-none flex-col gap-[10px] p-[var(--viewport-padding)] outline-none [--viewport-padding:_25px]"
                            })]
                        })]
                    })
                })
            }
        },
        93345: function(e, t, n) {
            n.d(t, {
                Z: function() {
                    return l4
                }
            });
            var a, r, i, s, o, l, c, u, d, f, g, m, h, p, x, v = n(39324),
                b = n(70216),
                y = n(35250),
                j = n(13995),
                w = n(60554),
                k = n(70079),
                M = n(1454),
                C = n(32004),
                _ = n(94968),
                T = n(99486),
                P = n(31621),
                N = n(46020),
                S = n(78931),
                Z = n(32542),
                I = n(10664),
                D = n(33669),
                B = n(22830);

            function F(e, t, n) {
                var a = (0, P.XL)(e),
                    r = a.title,
                    i = a.titleSource,
                    s = (0, B._)((0, k.useState)(!1), 2),
                    o = s[0],
                    l = s[1],
                    c = null != r ? r : t,
                    u = (0, k.useRef)(c);
                return (0, k.useEffect)(function() {
                    return n && i === P._L.Generated && c !== u.current && l(!0),
                        function() {
                            u.current = c
                        }
                }, [n, c, i]), {
                    isTypingEffect: o,
                    resolvedTitle: c
                }
            }
            var R = n(51217),
                L = n(19012);

            function E(e) {
                var t = e.text,
                    n = (0, L.Z)(),
                    a = (0, B._)((0, k.useState)(!0), 2),
                    r = a[0],
                    i = a[1],
                    s = (0, B._)((0, k.useState)(0), 2),
                    o = s[0],
                    l = s[1],
                    c = (0, k.useMemo)(function() {
                        return new A().humanTypingDelaysQuertyDistance(t)
                    }, [t]);
                return (0, k.useEffect)(function() {
                    t && r && (i(!0), c.forEach(function(e, t) {
                        setTimeout(function() {
                            n() && (l(t), t === c.length - 1 && i(!1))
                        }, e)
                    }))
                }, [c, n, r, t]), (0, y.jsxs)(y.Fragment, {
                    children: [t.substring(0, o + 1), r && "▋"]
                })
            }
            var A = function() {
                    function e() {
                        (0, R._)(this, e)
                    }
                    var t = e.prototype;
                    return t.qwertyDistance = function(e, t) {
                        var n, a, r = {
                                q: [0, 0],
                                w: [1, 0],
                                e: [2, 0],
                                r: [3, 0],
                                t: [4, 0],
                                y: [5, 0],
                                u: [6, 0],
                                i: [7, 0],
                                o: [8, 0],
                                p: [9, 0],
                                a: [0, 1],
                                s: [1, 1],
                                d: [2, 1],
                                f: [3, 1],
                                g: [4, 1],
                                h: [5, 1],
                                j: [6, 1],
                                k: [7, 1],
                                l: [8, 1],
                                z: [0, 2],
                                x: [1, 2],
                                c: [2, 2],
                                v: [3, 2],
                                b: [4, 2],
                                n: [5, 2],
                                m: [6, 2]
                            },
                            i = (0, B._)(null !== (n = r[e.toLowerCase()]) && void 0 !== n ? n : [0, 0], 2),
                            s = i[0],
                            o = i[1],
                            l = (0, B._)(null !== (a = r[t.toLowerCase()]) && void 0 !== a ? a : [0, 0], 2);
                        return Math.abs(s - l[0]) + Math.abs(o - l[1])
                    }, t.humanTypingDelaysQuertyDistance = function(e) {
                        for (var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10, n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100, a = 0, r = [], i = 0; i < e.length; ++i) {
                            var s = void 0;
                            if (i > 0) {
                                var o = this.qwertyDistance(e[i - 1], e[i]);
                                s = 0 === o ? this.getRandomInt(t, Math.floor(n / 2)) : 1 === o ? this.getRandomInt(t, Math.floor(2 * n / 3)) : this.getRandomInt(t, n)
                            } else s = this.getRandomInt(t, n);
                            r.push(s + a), a += s
                        }
                        return r
                    }, t.getRandomInt = function(e, t) {
                        return Math.floor(Math.random() * (t - e + 1)) + e
                    }, e
                }(),
                q = n(96237),
                U = n(71209),
                O = n(43477),
                z = n(78103),
                W = (0, O.Z)(function() {
                    return {
                        activeRequests: {}
                    }
                }),
                H = (0, z.ZP)(W);

            function Q(e) {
                return H(function(t) {
                    return null != t.activeRequests[e]
                })
            }

            function V() {
                return H(function(e) {
                    return Object.keys(e.activeRequests).length > 0
                })
            }
            var $ = {
                    addRequest: function(e, t) {
                        W.setState(function(n) {
                            return {
                                activeRequests: (0, U._)((0, v._)({}, n.activeRequests), (0, q._)({}, e, {
                                    id: e,
                                    abortController: t
                                }))
                            }
                        })
                    },
                    removeRequest: function(e) {
                        W.setState(function(t) {
                            var n = (0, v._)({}, t.activeRequests);
                            return delete n[e], {
                                activeRequests: n
                            }
                        })
                    },
                    clear: function() {
                        W.setState({
                            activeRequests: {}
                        })
                    },
                    abortRequest: function(e) {
                        var t = W.getState().activeRequests;
                        return null != t[e] && (t[e].abortController.abort(), $.removeRequest(e), !0)
                    },
                    abortRequests: function(e) {
                        var t = W.getState().activeRequests,
                            n = (0, v._)({}, t),
                            a = !0,
                            r = !1,
                            i = void 0;
                        try {
                            for (var s, o = e[Symbol.iterator](); !(a = (s = o.next()).done); a = !0) {
                                var l = s.value;
                                null != n[l] && (n[l].abortController.abort(), delete n[l])
                            }
                        } catch (e) {
                            r = !0, i = e
                        } finally {
                            try {
                                a || null == o.return || o.return()
                            } finally {
                                if (r) throw i
                            }
                        }
                        W.setState({
                            activeRequests: n
                        })
                    },
                    abortAllRequests: function() {
                        Object.values(W.getState().activeRequests).forEach(function(e) {
                            e.abortController.abort()
                        }), $.clear()
                    }
                },
                G = n(4337),
                J = n(19841),
                Y = n(72201),
                K = n(26430),
                X = n(84913),
                ee = n(44043),
                et = n(82187),
                en = n(69262),
                ea = n(70737),
                er = n(97296),
                ei = n(91530),
                es = n.n(ei),
                eo = n(70671),
                el = n(21389),
                ec = n(50795),
                eu = n(82081),
                ed = n(32877),
                ef = n(21817),
                eg = n(67273),
                em = n(97747),
                eh = n(89368),
                ep = n(88327),
                ex = n(1821),
                ev = n(50828);

            function eb() {
                var e = (0, G._)(["flex flex-col gap-2 pb-2 text-gray-100 text-sm\n", ""]);
                return eb = function() {
                    return e
                }, e
            }

            function ey() {
                var e = (0, G._)(["flex py-3 px-3 items-center gap-3 relative rounded-md hover:bg-[#2A2B32] cursor-pointer break-all\n", "\n"]);
                return ey = function() {
                    return e
                }, e
            }

            function ej() {
                var e = (0, G._)(["flex py-3 px-3 items-center gap-3 relative rounded-md hover:bg-[#2A2B32] cursor-pointer hover:pr-14 break-all\n", "\n"]);
                return ej = function() {
                    return e
                }, e
            }

            function ew() {
                var e = (0, G._)(["text-sm border-none bg-transparent p-0 m-0 w-full"]);
                return ew = function() {
                    return e
                }, e
            }

            function ek() {
                var e = (0, G._)(["flex-1 text-ellipsis max-h-5 overflow-hidden break-all relative"]);
                return ek = function() {
                    return e
                }, e
            }

            function eM() {
                var e = (0, G._)(["h-9 pb-2 pt-3 px-3 text-xs text-gray-500 font-medium text-ellipsis overflow-hidden break-all bg-gray-900"]);
                return eM = function() {
                    return e
                }, e
            }

            function eC() {
                var e = (0, G._)(["absolute inset-y-0 right-0 w-8 z-10 bg-gradient-to-l\n", ""]);
                return eC = function() {
                    return e
                }, e
            }

            function e_() {
                var e = (0, G._)(["absolute flex right-1 z-10 text-gray-300\n", ""]);
                return e_ = function() {
                    return e
                }, e
            }

            function eT() {
                var e = (0, G._)(["p-1 hover:text-white"]);
                return eT = function() {
                    return e
                }, e
            }
            var eP = (0, _.vU)({
                    historyBucketToday: {
                        id: "history.bucket.today",
                        defaultMessage: "Today",
                        description: "Label for today's history bucket"
                    },
                    historyBucketYesterday: {
                        id: "history.bucket.yesterday",
                        defaultMessage: "Yesterday",
                        description: "Label for yesterday's history bucket"
                    },
                    historyBucketLastSeven: {
                        id: "history.bucket.lastSeven",
                        defaultMessage: "Previous 7 Days",
                        description: "Label for the history bucket of the previous 7 days"
                    },
                    historyBucketLastThirty: {
                        id: "history.bucket.lastThirty",
                        defaultMessage: "Previous 30 Days",
                        description: "Label for the history bucket of the previous 30 days"
                    },
                    unableToLoadHistory: {
                        id: "history.unableToLoad",
                        defaultMessage: "Unable to load history",
                        description: "Error message when history fails to load"
                    },
                    retryButton: {
                        id: "history.retryButton",
                        defaultMessage: "Retry",
                        description: "Button to retry loading history"
                    },
                    showMoreButton: {
                        id: "history.showMoreButton",
                        defaultMessage: "Show more",
                        description: "Button to show more history items"
                    },
                    deleteModalTitle: {
                        id: "history.deleteModalTitle",
                        defaultMessage: "Delete chat?",
                        description: "Title of the modal to confirm deleting a conversation"
                    },
                    deleteModalBody: {
                        id: "history.deleteModalBody",
                        defaultMessage: "This will delete {title}.",
                        description: "Body of the modal to confirm deleting a conversation"
                    },
                    deleteModalConfirm: {
                        id: "history.deleteModalConfirm",
                        defaultMessage: "Delete",
                        description: "Button to confirm deleting a conversation"
                    },
                    deleteModalCancel: {
                        id: "history.deleteModalCancel",
                        defaultMessage: "Cancel",
                        description: "Button to cancel deleting a conversation"
                    }
                }),
                eN = {
                    initial: function(e) {
                        return e.isNew ? {
                            opacity: 0,
                            height: 0,
                            overflow: "hidden"
                        } : {}
                    },
                    animate: function() {
                        return {
                            opacity: 1,
                            height: "auto"
                        }
                    },
                    exit: function() {
                        return {
                            opacity: 0,
                            height: 0
                        }
                    }
                };

            function eS(e) {
                var t, n, a = e.activeId,
                    r = e.onNewThread,
                    i = (0, eo.Z)(),
                    s = (0, B._)((0, k.useState)(!1), 2),
                    o = s[0],
                    l = s[1],
                    c = (0, B._)((0, k.useState)(0), 2),
                    u = c[0],
                    d = c[1],
                    f = (0, ef.Z)(),
                    g = (0, ev.MO)(),
                    m = g.conversations,
                    h = g.hasNextPage,
                    p = g.fetchNextPage,
                    x = g.isLoading,
                    b = g.isFetchingNextPage,
                    j = g.isError,
                    w = (0, S.hz)().has(ed.DY),
                    M = (0, k.useRef)(null),
                    _ = (0, k.useCallback)(function(e) {
                        var t;
                        w && !x && null != e && (null === (t = M.current) || void 0 === t || t.disconnect(), M.current = new IntersectionObserver(function(e) {
                            e[0].isIntersecting && h && p()
                        }), M.current.observe(e))
                    }, [w, x, h, p]);
                (0, k.useEffect)(function() {
                    return function() {
                        var e;
                        null === (e = M.current) || void 0 === e || e.disconnect()
                    }
                }, []);
                var T = (0, ev.iF)();
                (0, ev.Od)();
                var P = (t = (0, k.useRef)(), n = (0, k.useRef)(), ((0, k.useEffect)(function() {
                    t.current = n.current, n.current = m
                }, [m]), m === n.current) ? t.current : n.current);
                (0, k.useEffect)(function() {
                    f(function() {
                        d(u + 1)
                    }, (0, K.Z)((0, X.Z)(), Date.now()) + 1e3)
                }, [u, f]);
                var N = 0 === m.length,
                    Z = (0, k.useMemo)(function() {
                        return m.reduce(function(e, t) {
                            var n, a, r = new Date(null !== (a = null !== (n = t.update_time) && void 0 !== n ? n : t.create_time) && void 0 !== a ? a : 0),
                                s = (0, Y.Z)(new Date, r);
                            if (0 === s) e.recent.today.items.push(t);
                            else if (s <= 1) e.recent.yesterday.items.push(t);
                            else if (s <= 7) e.recent.lastSeven.items.push(t);
                            else if (s <= 30) e.recent.lastThirty.items.push(t);
                            else if ((0, en.Z)(r)) {
                                var o = (0, et.Z)(r),
                                    l = (0, ee.Z)(r),
                                    c = "".concat(o, "-").concat(l);
                                e.dynamicMonths[c] ? e.dynamicMonths[c].items.push(t) : e.dynamicMonths[c] = {
                                    label: i.formatDate(r, {
                                        month: "long"
                                    }),
                                    items: [t]
                                }
                            } else {
                                var u = (0, et.Z)(r),
                                    d = "".concat(u, "-");
                                e.dynamicYears[d] ? e.dynamicYears[d].items.push(t) : e.dynamicYears[d] = {
                                    label: i.formatDate(r, {
                                        year: "numeric"
                                    }),
                                    items: [t]
                                }
                            }
                            return e
                        }, {
                            recent: {
                                today: {
                                    label: (0, y.jsx)(C.Z, (0, v._)({}, eP.historyBucketToday)),
                                    items: []
                                },
                                yesterday: {
                                    label: (0, y.jsx)(C.Z, (0, v._)({}, eP.historyBucketYesterday)),
                                    items: []
                                },
                                lastSeven: {
                                    label: (0, y.jsx)(C.Z, (0, v._)({}, eP.historyBucketLastSeven)),
                                    items: []
                                },
                                lastThirty: {
                                    label: (0, y.jsx)(C.Z, (0, v._)({}, eP.historyBucketLastThirty)),
                                    items: []
                                }
                            },
                            dynamicMonths: {},
                            dynamicYears: {}
                        })
                    }, [u, m]);
                return (0, y.jsxs)(eZ, {
                    $centered: x || j && N,
                    children: [N && x && (0, y.jsx)(ex.Z, {
                        className: "m-auto"
                    }), N && j && (0, y.jsxs)("div", {
                        className: "p-3 text-center italic text-gray-500",
                        children: [(0, y.jsx)(C.Z, (0, v._)({}, eP.unableToLoadHistory)), !o && (0, y.jsx)("div", {
                            className: "mt-1",
                            children: (0, y.jsx)(eg.z, {
                                as: "button",
                                color: "dark",
                                size: "small",
                                className: "m-auto mt-2",
                                onClick: function() {
                                    l(!0), T()
                                },
                                children: (0, y.jsx)(C.Z, (0, v._)({}, eP.retryButton))
                            })
                        })]
                    }), !x && (0, y.jsx)("div", {
                        children: (0, y.jsx)(ea.M, {
                            initial: !1,
                            children: [Z.recent, Z.dynamicMonths, Z.dynamicYears].flatMap(function(e, t) {
                                return (0, y.jsx)("span", {
                                    children: Object.entries(e).map(function(e) {
                                        var t = (0, B._)(e, 2),
                                            n = t[0],
                                            i = t[1],
                                            s = i.items,
                                            o = i.label;
                                        if ("today" !== n && !s.length) return null;
                                        var l = !!s.find(function(e) {
                                            var t;
                                            return m.length > 0 && e.id === (null === (t = m[0]) || void 0 === t ? void 0 : t.id)
                                        });
                                        return (0, y.jsxs)(er.E.div, {
                                            className: "relative",
                                            layoutId: "bucket-".concat(n),
                                            layout: "position",
                                            initial: {
                                                height: 0,
                                                opacity: 1,
                                                position: "relative"
                                            },
                                            animate: {
                                                height: "auto",
                                                opacity: 1,
                                                transition: {
                                                    duration: .2,
                                                    ease: "easeIn"
                                                }
                                            },
                                            children: [s.length > 0 && (0, y.jsx)(er.E.div, {
                                                className: (0, J.default)("sticky top-0", l ? "z-[16]" : "z-[14]"),
                                                layoutId: "bucketTitle-".concat(n),
                                                layout: "position",
                                                children: (0, y.jsx)(eE, {
                                                    children: o
                                                })
                                            }), (0, y.jsx)("ol", {
                                                children: s.map(function(e, t) {
                                                    var n = a === e.id,
                                                        i = null == P ? void 0 : P.find(function(t) {
                                                            return t.id === e.id
                                                        });
                                                    return (0, y.jsx)(er.E.li, {
                                                        className: (0, J.default)("relative", l && 0 === t ? "z-[15]" : ""),
                                                        layoutId: "".concat(e.id),
                                                        layout: "position",
                                                        custom: {
                                                            isNew: !i
                                                        },
                                                        variants: eN,
                                                        initial: "initial",
                                                        animate: "animate",
                                                        exit: "exit",
                                                        children: (0, y.jsx)(eI, {
                                                            id: e.id,
                                                            title: e.title,
                                                            active: n,
                                                            onNewThread: r,
                                                            forwardRef: h && m[m.length - 5 - 1].id === e.id ? _ : void 0
                                                        })
                                                    }, "history-item-".concat(e.id))
                                                })
                                            })]
                                        }, n)
                                    })
                                }, "category-".concat(t))
                            })
                        })
                    }), w ? b && (0, y.jsx)("div", {
                        className: "m-4 mb-5 flex justify-center",
                        children: (0, y.jsx)(ex.Z, {})
                    }) : (0, y.jsx)(y.Fragment, {
                        children: h && (0, y.jsx)(eg.z, {
                            as: "button",
                            onClick: function() {
                                return p()
                            },
                            color: "dark",
                            className: "m-auto mb-2",
                            size: "small",
                            loading: b,
                            children: (0, y.jsx)(C.Z, (0, v._)({}, eP.showMoreButton))
                        })
                    })]
                })
            }
            var eZ = el.Z.div(eb(), function(e) {
                return e.$centered && "h-full justify-center items-center"
            });

            function eI(e) {
                var t = e.id,
                    n = e.title,
                    a = e.active,
                    r = e.onNewThread,
                    i = e.forwardRef,
                    s = (0, D.w$)(),
                    o = (0, w.useRouter)(),
                    l = (0, B._)((0, k.useState)(!1), 2),
                    c = l[0],
                    u = l[1],
                    d = (0, k.useRef)(null),
                    f = (0, ev.iF)(),
                    g = (0, k.useCallback)(function(e) {
                        var a, r;
                        if (null == e || e.preventDefault(), u(!1), (null === (a = d.current) || void 0 === a ? void 0 : a.value) && (null === (r = d.current) || void 0 === r ? void 0 : r.value) !== n) {
                            var i = d.current.value;
                            T.ZP.patchConversation(t, {
                                title: i
                            }), P.tQ.setTitle(t, i, P._L.User), ec.o.logEvent(eu.a.renameThread, {
                                threadId: t,
                                content: i
                            }), f()
                        }
                    }, [t, f, n]),
                    m = (0, k.useCallback)(function(e) {
                        "Enter" === e.key && g()
                    }, [g]),
                    h = (0, k.useCallback)(function() {
                        T.ZP.patchConversation(t, {
                            is_visible: !1
                        }).then(function() {
                            f()
                        }), r()
                    }, [t, r, f]),
                    p = (0, k.useCallback)(function(e) {
                        $.abortAllRequests(), e.preventDefault(), ec.o.logEvent(eu.a.loadThread, {
                            threadId: t
                        }), o.push("/c/".concat(t), void 0, {
                            shallow: !0
                        })
                    }, [t, o]),
                    x = F(t, n, a),
                    v = x.resolvedTitle,
                    b = x.isTypingEffect;
                if (c) return (0, y.jsxs)(eF, {
                    $active: a,
                    children: [(0, y.jsx)(ep.ZP, {
                        icon: M.IC0,
                        className: "flex-shrink-0"
                    }), (0, y.jsx)(eR, {
                        ref: d,
                        type: "text",
                        defaultValue: null != v ? v : "",
                        autoFocus: !0,
                        onKeyDown: m,
                        className: "mr-0",
                        onBlur: g
                    }), (0, y.jsxs)(eq, {
                        $active: !0,
                        children: [(0, y.jsx)(eU, {
                            onClick: g,
                            children: (0, y.jsx)(ep.ZP, {
                                icon: M.UgA
                            })
                        }), (0, y.jsx)(eU, {
                            onClick: function(e) {
                                e.preventDefault(), u(!1)
                            },
                            children: (0, y.jsx)(ep.ZP, {
                                icon: M.q5L
                            })
                        })]
                    })]
                });
                var j = b && a && s;
                return (0, y.jsxs)(y.Fragment, {
                    children: [a && (0, y.jsx)(eD, {
                        title: n,
                        handleDelete: h
                    }), (0, y.jsxs)(eB, {
                        onClick: a ? es() : p,
                        $active: a,
                        className: (0, J.default)("group", j && "animate-flash"),
                        ref: i,
                        children: [(0, y.jsx)(ep.ZP, {
                            icon: M.IC0
                        }), (0, y.jsxs)(eL, {
                            children: [j ? (0, y.jsx)(E, {
                                text: null != v ? v : ""
                            }) : v, (!b || !a) && (0, y.jsx)(eA, {
                                $active: a
                            })]
                        }), a && (0, y.jsxs)(eq, {
                            $active: a,
                            children: [(0, y.jsx)(eU, {
                                onClick: function(e) {
                                    e.preventDefault(), u(!0)
                                },
                                children: (0, y.jsx)(ep.ZP, {
                                    icon: M.Nte
                                })
                            }), (0, y.jsx)(eU, {
                                onClick: function() {
                                    N.vm.openModal(N.B.DeleteChatConfirmation)
                                },
                                children: (0, y.jsx)(ep.ZP, {
                                    icon: M.Ybf
                                })
                            })]
                        })]
                    })]
                })
            }
            var eD = function(e) {
                    var t = e.handleDelete,
                        n = e.title,
                        a = (0, eo.Z)(),
                        r = (0, N.tN)(function(e) {
                            return e.activeModals.has(N.B.DeleteChatConfirmation)
                        }),
                        i = function() {
                            N.vm.closeModal(N.B.DeleteChatConfirmation)
                        };
                    return (0, y.jsx)(eh.Z, {
                        isOpen: r,
                        onClose: i,
                        type: "success",
                        title: a.formatMessage(eP.deleteModalTitle),
                        primaryButton: (0, y.jsx)(em.ZP.Button, {
                            title: a.formatMessage(eP.deleteModalConfirm),
                            color: "danger",
                            onClick: function() {
                                t(), i()
                            }
                        }),
                        secondaryButton: (0, y.jsx)(em.ZP.Button, {
                            title: a.formatMessage(eP.deleteModalCancel),
                            color: "neutral",
                            onClick: i
                        }),
                        children: (0, y.jsx)(C.Z, (0, U._)((0, v._)({}, eP.deleteModalBody), {
                            values: {
                                title: (0, y.jsx)("strong", {
                                    children: n
                                })
                            }
                        }))
                    })
                },
                eB = el.Z.a(ey(), function(e) {
                    return e.$active ? "bg-gray-800 pr-14 hover:bg-gray-800" : "hover:pr-4 bg-gray-900"
                }),
                eF = el.Z.div(ej(), function(e) {
                    return e.$active ? "pr-14 bg-gray-800 hover:bg-gray-800" : "bg-gray-900"
                }),
                eR = el.Z.input(ew()),
                eL = el.Z.div(ek()),
                eE = el.Z.h3(eM()),
                eA = el.Z.div(eC(), function(e) {
                    return e.$active ? "from-gray-800" : "from-gray-900 group-hover:from-[#2A2B32]"
                }),
                eq = el.Z.div(e_(), function(e) {
                    return e.$active ? "visible" : "invisible group-hover:visible"
                }),
                eU = el.Z.button(eT()),
                eO = n(32148),
                ez = n(44544),
                eW = n(70596),
                eH = n(21739),
                eQ = n(21722),
                eV = n(75883),
                e$ = n(25260),
                eG = n(19579),
                eJ = n.n(eG),
                eY = n(62509),
                eK = n(75641),
                eX = n(88809),
                e0 = n(6038),
                e1 = n(32367),
                e2 = n(52696);

            function e3(e) {
                var t = e.workspace,
                    n = (0, eY.kP)().session,
                    a = (0, S.ec)(function(e) {
                        return e.currentWorkspace
                    }),
                    r = (null == a ? void 0 : a.id) === t.id,
                    i = (0, B._)((0, k.useState)(!1), 2),
                    s = i[0],
                    o = i[1],
                    l = (0, e1.Z)().onEnableHistory,
                    c = (0, k.useCallback)((0, eQ._)(function() {
                        return (0, eV.Jh)(this, function(e) {
                            return o(!0), t.structure === eK.CZ.WORKSPACE ? (0, ez.setCookie)(eW.Y, t.id) : S.ec.getState().workspaces.some(function(e) {
                                return e.structure === eK.CZ.WORKSPACE
                            }) ? (0, ez.setCookie)(eW.Y, eW.b) : (0, ez.deleteCookie)(eW.Y), S.w_.setCurrentWorkspace(t), l(), (0, eX.M)(), [2]
                        })
                    }), [t, l]),
                    u = (0, e2.Ix)(t),
                    d = (0, e2.qH)(t),
                    f = (0, y.jsx)("div", {
                        className: "flex items-center justify-center",
                        children: (0, y.jsx)(e0.B0, {})
                    });
                if (t.structure === eK.CZ.PERSONAL) {
                    if (!(null == n ? void 0 : n.user)) return null;
                    f = (0, y.jsx)("div", {
                        className: "flex items-center justify-center",
                        children: (0, y.jsx)(eJ(), {
                            alt: "Profile",
                            src: n.user.picture,
                            width: 32,
                            height: 32,
                            className: "flex items-center justify-center rounded-sm"
                        })
                    })
                }
                return (0, y.jsxs)(r ? "div" : "button", {
                    onClick: r ? es() : c,
                    className: (0, J.default)({
                        "flex w-full items-center gap-2 rounded-lg  p-4 hover:bg-gray-50 focus:bg-gray-50 dark:hover:bg-gray-800 dark:focus:bg-gray-800": !0,
                        "bg-gray-50 dark:bg-gray-800": r
                    }),
                    children: [(0, y.jsxs)("div", {
                        className: "flex w-full gap-4",
                        children: [f, (0, y.jsxs)("div", {
                            className: "flex w-full flex-1 flex-col items-start justify-start",
                            children: [(0, y.jsx)("div", {
                                className: "inline align-top font-medium",
                                children: u
                            }), (0, y.jsx)("div", {
                                className: "text-sm text-gray-500",
                                children: d
                            })]
                        })]
                    }), (0, y.jsxs)("div", {
                        className: "flex h-full items-center p-1",
                        children: [r && !s && (0, y.jsx)(ep.ZP, {
                            icon: e$.Z,
                            size: "medium"
                        }), s && (0, y.jsx)(ex.Z, {})]
                    })]
                })
            }

            function e4(e) {
                var t = e.data.map(function(e) {
                    return (0, y.jsx)(e3, {
                        workspace: e
                    }, e.id)
                });
                return (0, y.jsx)("div", {
                    className: "flex w-full flex-col gap-2",
                    children: t
                })
            }

            function e5() {
                var e = (0, N.EV)(N.B.WorkspaceSwitcher),
                    t = (0, e2._O)(),
                    n = (0, eo.Z)(),
                    a = (0, k.useCallback)(function() {
                        N.vm.closeModal(N.B.WorkspaceSwitcher)
                    }, []);
                return 0 === t.length ? null : (0, y.jsx)(eh.Z, {
                    onClose: a,
                    closeButton: (0, y.jsx)(em.ZP.CloseButton, {
                        onClose: a
                    }),
                    type: "success",
                    isOpen: e,
                    size: "normal",
                    title: n.formatMessage(e8.workspaceSwitcherTitle),
                    children: (0, y.jsx)("div", {
                        className: "flex w-full items-center justify-between",
                        children: (0, y.jsx)(e4, {
                            data: t
                        })
                    })
                })
            }
            var e8 = (0, _.vU)({
                    workspaceSwitcherTitle: {
                        id: "workspaceSwitcher.title",
                        defaultMessage: "Choose Account",
                        description: "title for account switcher modal"
                    }
                }),
                e7 = n(81949),
                e6 = n(74686),
                e9 = n(56115),
                te = n(92720),
                tt = n(55629),
                tn = n(45635);

            function ta(e) {
                var t = e.accept,
                    n = e.onFilePicked,
                    a = e.loading,
                    r = e.disabled,
                    i = e.className,
                    s = e.text,
                    o = e.multiple,
                    l = (0, k.useRef)(null),
                    c = (0, k.useCallback)(function() {
                        var e;
                        null === (e = l.current) || void 0 === e || e.click()
                    }, []),
                    u = (0, k.useCallback)(function(e) {
                        var t = e.target.files;
                        t && t.length > 0 && (n(Array.from(t)), e.target.value = "")
                    }, [n]);
                return (0, y.jsxs)(y.Fragment, {
                    children: [(0, y.jsx)(eg.z, {
                        onClick: c,
                        disabled: r || a,
                        color: "none",
                        className: i,
                        children: (0, y.jsxs)("div", {
                            className: "flex items-center space-x-2",
                            children: [a ? (0, y.jsx)(ex.Z, {
                                className: "h-4 w-4"
                            }) : (0, y.jsx)(ep.ZP, {
                                icon: M.OvN,
                                size: "small"
                            }), s && (0, y.jsx)("span", {
                                children: s
                            })]
                        })
                    }), (0, y.jsx)("input", {
                        type: "file",
                        accept: t,
                        ref: l,
                        className: "hidden",
                        onChange: u,
                        multiple: void 0 !== o && o
                    })]
                })
            }
            var tr = n(63031),
                ti = n(88798),
                ts = n(73610),
                to = ["application/pdf", "text/plain", "text/markdown", "application/vnd.openxmlformats-officedocument.wordprocessingml.document", "application/vnd.openxmlformats-officedocument.presentationml.presentation", "text/csv"],
                tl = (0, _.vU)({
                    myFiles: {
                        id: "filesModal.myFiles",
                        defaultMessage: "My Files",
                        description: "Title for the files modal"
                    },
                    noFilesFound: {
                        id: "filesModal.noFilesFound",
                        defaultMessage: "No files found.",
                        description: "Message displayed when no files are found"
                    },
                    uploadFile: {
                        id: "filesModal.uploadFile",
                        defaultMessage: "Upload File",
                        description: "Label for the upload file button"
                    },
                    fileDownloadFailed: {
                        id: "filesModal.fileDownloadFailed",
                        defaultMessage: "File download failed. Please try again.",
                        description: "Error message when file download fails"
                    },
                    fileDeleteFailed: {
                        id: "filesModal.fileDeleteFailed",
                        defaultMessage: "File delete failed. Please try again.",
                        description: "Error message when file delete fails"
                    },
                    fileUploadFailed: {
                        id: "filesModal.fileUploadFailed",
                        defaultMessage: "File upload failed. Please try again.",
                        description: "Error message when file upload fails"
                    },
                    fileUploaded: {
                        id: "filesModal.fileUploaded",
                        defaultMessage: "Uploaded file",
                        description: "Success message when file is uploaded"
                    },
                    fileDeleted: {
                        id: "filesModal.fileDeleted",
                        defaultMessage: "File deleted",
                        description: "Success message when file is deleted"
                    },
                    allFilesDeleted: {
                        id: "filesModal.allFilesDeleted",
                        defaultMessage: "All files deleted",
                        description: "Success message when all files are deleted"
                    },
                    allFilesDeleteFailed: {
                        id: "filesModal.allFilesDeletedFailed",
                        defaultMessage: "All files delete failed. Please try again.",
                        description: "Error message when all files delete fails"
                    },
                    confirmDeleteAll: {
                        id: "filesModal.confirmDeleteAll",
                        defaultMessage: "Are you sure you want to delete all files?",
                        description: "Confirmation message for deleting all files"
                    },
                    downloadAll: {
                        id: "filesModal.downloadAll",
                        defaultMessage: "Download All",
                        description: "Label for the download all button"
                    },
                    deleteAll: {
                        id: "filesModal.deleteAll",
                        defaultMessage: "Delete All",
                        description: "Label for the delete all button"
                    },
                    name: {
                        id: "filesModal.name",
                        defaultMessage: "Name",
                        description: "Label for the name column"
                    },
                    date: {
                        id: "filesModal.date",
                        defaultMessage: "Date",
                        description: "Label for the date column"
                    },
                    size: {
                        id: "filesModal.size",
                        defaultMessage: "Size",
                        description: "Label for the size column"
                    },
                    successfullyEmbeddedFileTooltip: {
                        id: "filesModal.successfullyEmbeddedFileTooltip",
                        defaultMessage: "Successfully processed file for searching",
                        description: "Tooltip for the successfully embedded file icon"
                    },
                    failedToEmbedFileTooltip: {
                        id: "filesModal.failedToEmbedFileTooltip",
                        defaultMessage: "Failed to process file for searching,\nplease try deleting and re-uploading",
                        description: "Tooltip for the failed to embed file icon"
                    },
                    embeddingFileTooltip: {
                        id: "filesModal.embeddingFileTooltip",
                        defaultMessage: "Processing file for searching...",
                        description: "Tooltip for the embedding file icon"
                    },
                    deleteHistoryModalCancel: {
                        id: "filesModal.deleteHistoryModalCancel",
                        defaultMessage: "Cancel",
                        description: "Label for the cancel button"
                    },
                    confirmDownloadAll: {
                        id: "filesModal.confirmDownloadAll",
                        defaultMessage: "Are you sure you want to download all files?",
                        description: "Confirmation message for downloading all files"
                    },
                    confirmCancelDownloadAll: {
                        id: "filesModal.confirmCancelDownloadAll",
                        defaultMessage: "Cancel Download All",
                        description: "Label for the cancel download all button in the confirmation modal"
                    },
                    tooManyFilesWithSameName: {
                        id: "filesModal.tooManyFilesWithSameName",
                        defaultMessage: "Too many files with the same name. Please rename your file.",
                        description: "Error message when too many files have the same name"
                    },
                    tooManyFilesUploadedAtOnce: {
                        id: "filesModal.tooManyFilesUploadedAtOnce",
                        defaultMessage: "You can only upload up to {maxFiles} files at a time.",
                        description: "Error message when too many files are uploaded at once"
                    },
                    totalFileSizeExceedsLimit: {
                        id: "filesModal.totalFileSizeExceedsLimit",
                        defaultMessage: "The total size of the files exceeds the limit of {maxSize}.",
                        description: "Error message when the total file size exceeds the limit"
                    },
                    filesModalDescription: {
                        id: "filesModal.filesModalDescription",
                        defaultMessage: "Files can be used with the My Files Browsing model. {totalUploadedSize} / {maxFileSize} of storage used.",
                        description: "Description for the files modal"
                    }
                });
            (a = u || (u = {})).Uploading = "uploading", a.Deleting = "deleting";
            var tc = function(e, t) {
                for (var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1e3, a = 1, r = e, i = e.lastIndexOf("."), s = i >= 0 ? e.slice(0, i) : e, o = i >= 0 ? e.slice(i) : ""; t.find(function(e) {
                        return e.name === r
                    }) && a <= n;) r = "".concat(s, " (").concat(a, ")").concat(o), a++;
                if (a > n) throw Error();
                return r
            };

            function tu(e) {
                var t = e.label,
                    n = e.children;
                return (0, y.jsx)(tn.u, {
                    side: "top",
                    size: "xsmall",
                    sideOffset: 4,
                    label: t,
                    children: n
                })
            }

            function td(e) {
                var t = e.file,
                    n = e.refetch,
                    a = e.handleFileDelete,
                    r = e.handleFileDeleteFailed,
                    i = e.session,
                    s = e.downloadedFiles,
                    o = e.setDownloadedFiles,
                    l = (0, k.useMemo)(function() {
                        return (0, e9.Z)(new Date(t.ready_time), "MMM d, yyyy")
                    }, [t.ready_time]),
                    c = (0, k.useMemo)(function() {
                        var e;
                        return (e = t.size) < 1048576 ? "".concat((e / 1024).toFixed(0), " KB") : "".concat((e / 1048576).toFixed(1), " MB")
                    }, [t.size]),
                    d = (0, eo.Z)(),
                    f = (0, tr.O6)(),
                    g = (0, k.useCallback)((0, eQ._)(function() {
                        return (0, eV.Jh)(this, function(e) {
                            switch (e.label) {
                                case 0:
                                    return [4, f(t.id, t.name)];
                                case 1:
                                    return e.sent() && o((0, e7._)(s).concat([t.id])), [2]
                            }
                        })
                    }), [t, s, o, f]),
                    m = (0, k.useCallback)((0, eQ._)(function() {
                        return (0, eV.Jh)(this, function(e) {
                            switch (e.label) {
                                case 0:
                                    if (!i) return [2];
                                    a(t), e.label = 1;
                                case 1:
                                    return e.trys.push([1, 4, , 5]), [4, T.ZP.deleteFileFromFileService(t.id, i.accessToken)];
                                case 2:
                                    return e.sent(), ti.m.success(d.formatMessage(tl.fileDeleted)), [4, n()];
                                case 3:
                                    return e.sent(), [3, 5];
                                case 4:
                                    return e.sent(), r(t), ti.m.danger(d.formatMessage(tl.fileDeleteFailed)), [3, 5];
                                case 5:
                                    return [2]
                            }
                        })
                    }), [a, r, i, t, n, d]);
                return (0, y.jsxs)(tt.Z.Row, {
                    disabled: t.state === u.Uploading,
                    children: [(0, y.jsx)(tt.Z.Cell, {
                        children: (0, y.jsxs)("div", {
                            className: "inline-flex max-w-full gap-2 align-top",
                            children: [t.retrieval_index_status === eK.Xf.Success ? (0, y.jsx)(tu, {
                                label: d.formatMessage(tl.successfullyEmbeddedFileTooltip),
                                children: (0, y.jsx)(ep.ZP, {
                                    icon: M._rq,
                                    size: "xsmall",
                                    className: "mt-1 flex-shrink-0 text-green-600"
                                })
                            }) : t.retrieval_index_status === eK.Xf.Failed ? (0, y.jsx)(tu, {
                                label: d.formatMessage(tl.failedToEmbedFileTooltip),
                                children: (0, y.jsx)(ep.ZP, {
                                    icon: M.$Rx,
                                    size: "xsmall",
                                    className: "mt-1 flex-shrink-0 text-red-500"
                                })
                            }) : (0, y.jsx)(tu, {
                                label: d.formatMessage(tl.embeddingFileTooltip),
                                children: (0, y.jsx)(ex.Z, {
                                    className: "mt-1 flex-shrink-0 text-gray-500 dark:text-gray-100"
                                })
                            }), (0, y.jsx)("button", {
                                className: (0, J.default)(s.includes(t.id) ? "text-[#800080]" : "hover:text-gray-900 dark:hover:text-gray-100", "truncate whitespace-normal break-words text-left focus:outline-none"),
                                onClick: g,
                                children: (0, y.jsx)("span", {
                                    children: t.name
                                })
                            })]
                        })
                    }), (0, y.jsx)(tt.Z.Cell, {
                        className: "align-top",
                        children: t.state !== u.Uploading && l
                    }), (0, y.jsx)(tt.Z.Cell, {
                        className: "align-top",
                        children: t.state !== u.Uploading && c
                    }), (0, y.jsx)(tt.Z.Cell, {
                        textAlign: "right",
                        className: "align-top",
                        children: (0, y.jsx)("div", {
                            className: "flex justify-end space-x-2",
                            children: t.state !== u.Uploading && (0, y.jsxs)(y.Fragment, {
                                children: [(0, y.jsx)("button", {
                                    className: "text-gray-500 hover:text-gray-600",
                                    onClick: g,
                                    children: (0, y.jsx)(ep.ZP, {
                                        icon: M._hL,
                                        size: "small"
                                    })
                                }), (0, y.jsx)("button", {
                                    className: "text-gray-500 hover:text-gray-600",
                                    onClick: m,
                                    children: (0, y.jsx)(ep.ZP, {
                                        icon: M.Ybf,
                                        size: "small"
                                    })
                                })]
                            })
                        })
                    })]
                })
            }

            function tf() {
                var e, t, n, a, r, i = (0, eo.Z)(),
                    s = (0, ts.W)(),
                    o = s.data,
                    l = s.isLoading,
                    c = s.refetch,
                    d = (0, B._)((0, k.useState)([]), 2),
                    f = d[0],
                    g = d[1],
                    m = (0, k.useRef)([]),
                    h = (0, B._)((0, k.useState)([]), 2),
                    p = h[0],
                    x = h[1],
                    b = (0, ef.Z)(),
                    j = (0, eY.kP)().session,
                    w = (0, k.useMemo)(function() {
                        return null !== (r = null == o ? void 0 : o.files) && void 0 !== r ? r : []
                    }, [o]),
                    _ = (0, B._)((0, k.useState)([]), 2),
                    P = _[0],
                    S = _[1],
                    Z = (0, B._)((0, k.useState)(!1), 2),
                    I = Z[0],
                    D = Z[1],
                    F = (0, B._)((0, k.useState)(!1), 2),
                    R = F[0],
                    L = F[1],
                    E = (0, tr.qS)(),
                    A = (0, k.useCallback)(function() {
                        N.vm.closeFilesModal(), f.length > 0 && c()
                    }, [c, f]),
                    q = (0, e6.D)({
                        mutationFn: function(e) {
                            return T.ZP.uploadFileUsingFileService(e, eK.Ei.MyFiles, j.accessToken)
                        },
                        onMutate: (e = (0, eQ._)(function(e) {
                            return (0, eV.Jh)(this, function(t) {
                                return [2, e]
                            })
                        }), function(t) {
                            return e.apply(this, arguments)
                        }),
                        onSuccess: (t = (0, eQ._)(function(e) {
                            return (0, eV.Jh)(this, function(t) {
                                switch (t.label) {
                                    case 0:
                                        return [4, c()];
                                    case 1:
                                        return t.sent(), ti.m.success(i.formatMessage(tl.fileUploaded)), m.current.push(e.file_id), x((0, e7._)(m.current)), [2]
                                }
                            })
                        }), function(e) {
                            return t.apply(this, arguments)
                        }),
                        onError: function(e, t) {
                            g(function(e) {
                                return e.filter(function(e) {
                                    return e.name !== t.name
                                })
                            }), ti.m.danger(i.formatMessage(tl.fileUploadFailed))
                        }
                    }),
                    O = (0, k.useCallback)((n = (0, eQ._)(function(e) {
                        var t;
                        return (0, eV.Jh)(this, function(n) {
                            switch (n.label) {
                                case 0:
                                    if (!j) return [2];
                                    n.label = 1;
                                case 1:
                                    return n.trys.push([1, 6, , 7]), [4, T.ZP.getFileInfo(e, j.accessToken)];
                                case 2:
                                    if (!((t = n.sent()).retrieval_index_status === eK.Xf.Success || t.retrieval_index_status === eK.Xf.Failed)) return [3, 4];
                                    return m.current = m.current.filter(function(t) {
                                        return t !== e
                                    }), [4, c()];
                                case 3:
                                    return n.sent(), [3, 5];
                                case 4:
                                    b(function() {
                                        return O(e)
                                    }, 500), n.label = 5;
                                case 5:
                                    return [3, 7];
                                case 6:
                                    return n.sent(), m.current = m.current.filter(function(t) {
                                        return t !== e
                                    }), [3, 7];
                                case 7:
                                    return [2]
                            }
                        })
                    }), function(e) {
                        return n.apply(this, arguments)
                    }), [c, j, b]);
                (0, k.useEffect)(function() {
                    m.current.length > 0 && O(m.current[m.current.length - 1])
                }, [p, O]);
                var z = (0, k.useCallback)((0, eQ._)(function() {
                        var e;
                        return (0, eV.Jh)(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    if (!j) return [2];
                                    t.label = 1;
                                case 1:
                                    return t.trys.push([1, 3, , 4]), [4, E(e = w.filter(function(e) {
                                        return e.use_case === eK.Ei.MyFiles
                                    }), 30)];
                                case 2:
                                    return t.sent(), S((0, e7._)(P).concat((0, e7._)(e.map(function(e) {
                                        return e.id
                                    })))), [3, 4];
                                case 3:
                                    return t.sent(), ti.m.danger(i.formatMessage(tl.fileDownloadFailed)), [3, 4];
                                case 4:
                                    return [2]
                            }
                        })
                    }), [j, w, i, P, S, E]),
                    W = (0, k.useCallback)((0, eQ._)(function() {
                        var e;
                        return (0, eV.Jh)(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    if (e = w.map(function(e) {
                                            return (0, U._)((0, v._)({}, e), {
                                                state: u.Deleting
                                            })
                                        }), !j) return [2];
                                    g((0, e7._)(f).concat((0, e7._)(e))), t.label = 1;
                                case 1:
                                    return t.trys.push([1, 4, , 5]), [4, Promise.all(e.filter(function(e) {
                                        return e.use_case === eK.Ei.MyFiles
                                    }).map(function(e) {
                                        return T.ZP.deleteFileFromFileService(e.id, j.accessToken)
                                    }))];
                                case 2:
                                    return t.sent(), ti.m.success(i.formatMessage(tl.allFilesDeleted)), [4, c()];
                                case 3:
                                    return t.sent(), [3, 5];
                                case 4:
                                    return t.sent(), g([]), ti.m.danger(i.formatMessage(tl.allFilesDeleteFailed)), [3, 5];
                                case 5:
                                    return [2]
                            }
                        })
                    }), [w, f, j, i, c]),
                    H = (0, k.useCallback)(function() {
                        D(!0)
                    }, []),
                    Q = (0, k.useCallback)(function() {
                        L(!0)
                    }, []),
                    V = (0, k.useCallback)((0, eQ._)(function() {
                        return (0, eV.Jh)(this, function(e) {
                            return D(!1), W(), [2]
                        })
                    }), [W]),
                    $ = (0, k.useCallback)(function() {
                        D(!1)
                    }, []),
                    G = (0, k.useCallback)((0, eQ._)(function() {
                        return (0, eV.Jh)(this, function(e) {
                            return L(!1), z(), [2]
                        })
                    }), [z]),
                    J = (0, k.useCallback)(function() {
                        L(!1)
                    }, []),
                    Y = (0, k.useCallback)(function(e, t) {
                        return e.findIndex(function(e) {
                            return e.name === t.name && e.state !== u.Uploading
                        })
                    }, []),
                    K = (0, k.useCallback)(function(e) {
                        var t = (0, U._)((0, v._)({}, e), {
                            state: u.Deleting
                        });
                        g(function(e) {
                            return (0, e7._)(e).concat([t])
                        })
                    }, []),
                    X = (0, k.useCallback)(function(e) {
                        g(function(t) {
                            return t.filter(function(t) {
                                return t.name !== e.name
                            })
                        })
                    }, []),
                    ee = (0, k.useMemo)(function() {
                        return (0, e7._)(w).concat((0, e7._)(f)).filter(function(e, t, n) {
                            if (e.use_case !== eK.Ei.MyFiles) return !1;
                            e.retrieval_index_status === eK.Xf.Success || e.retrieval_index_status === eK.Xf.Failed || m.current.includes(e.id) || (m.current.push(e.id), x((0, e7._)(m.current)));
                            var a = Y(n, e);
                            return e.state === u.Uploading && -1 !== a ? (g(function(t) {
                                return t.filter(function(t) {
                                    return t.name !== e.name || t.state !== u.Uploading
                                })
                            }), !1) : e.state === u.Deleting && -1 === n.findIndex(function(t) {
                                return t.name === e.name && t.state !== u.Deleting
                            }) ? (g(function(t) {
                                return t.filter(function(t) {
                                    return t.name !== e.name
                                })
                            }), !1) : -1 === n.findIndex(function(t) {
                                return t.name === e.name && t.state === u.Deleting
                            })
                        }).sort(function(e, t) {
                            return new Date(t.ready_time).getTime() - new Date(e.ready_time).getTime()
                        })
                    }, [w, Y, f]),
                    et = (0, k.useMemo)(function() {
                        return ee.reduce(function(e, t) {
                            return e + (t.size || 0)
                        }, 0)
                    }, [ee]),
                    en = (0, k.useMemo)(function() {
                        return et / 1073741824
                    }, [et]),
                    ea = (0, k.useCallback)((a = (0, eQ._)(function(e) {
                        var t, n, a, r, s, o, l, c, d, f;
                        return (0, eV.Jh)(this, function(m) {
                            if (e.length > 10) return ti.m.warning(i.formatMessage(tl.tooManyFilesUploadedAtOnce, {
                                maxFiles: 10
                            })), [2];
                            t = et, n = !0, a = !1, r = void 0;
                            try {
                                for (s = e[Symbol.iterator](); !(n = (o = s.next()).done); n = !0) {
                                    if (l = o.value, (t += l.size) > 2147483648) {
                                        ti.m.warning(i.formatMessage(tl.totalFileSizeExceedsLimit, {
                                            maxSize: "".concat(2, "GB")
                                        }));
                                        break
                                    }
                                    if (c = l.name, w.filter(function(e) {
                                            return e.use_case === eK.Ei.MyFiles
                                        }).find(function(e) {
                                            return e.name === c
                                        })) try {
                                        c = tc(c, w)
                                    } catch (e) {
                                        ti.m.warning(i.formatMessage(tl.tooManyFilesWithSameName));
                                        break
                                    }
                                    d = {
                                        id: "",
                                        name: c,
                                        ready_time: new Date().toISOString(),
                                        use_case: eK.Ei.MyFiles,
                                        size: l.size,
                                        state: u.Uploading
                                    }, g(function(e) {
                                        return (0, e7._)(e).concat([d])
                                    }), f = new File([l], c, {
                                        type: l.type
                                    }), q.mutate(f)
                                }
                            } catch (e) {
                                a = !0, r = e
                            } finally {
                                try {
                                    n || null == s.return || s.return()
                                } finally {
                                    if (a) throw r
                                }
                            }
                            return [2]
                        })
                    }), function(e) {
                        return a.apply(this, arguments)
                    }), [w, i, q, et]);
                return (0, y.jsxs)(y.Fragment, {
                    children: [(0, y.jsxs)(eh.Z, {
                        isOpen: !0,
                        onClose: A,
                        size: "custom",
                        className: "max-w-5xl",
                        type: "success",
                        title: i.formatMessage(tl.myFiles),
                        closeButton: (0, y.jsx)(em.ZP.CloseButton, {
                            onClose: A
                        }),
                        children: [l ? (0, y.jsx)("div", {
                            className: "flex h-64 items-center justify-center",
                            children: (0, y.jsx)(ex.Z, {
                                className: "text-gray-500"
                            })
                        }) : ee.length > 0 ? (0, y.jsxs)("div", {
                            className: "flex flex-col",
                            children: [(0, y.jsx)("div", {
                                className: "mb-2 text-xs text-gray-600 dark:text-gray-300",
                                children: (0, y.jsx)(C.Z, (0, U._)((0, v._)({}, tl.filesModalDescription), {
                                    values: {
                                        totalUploadedSize: (0, y.jsx)("span", {
                                            className: "font-bold",
                                            children: "".concat(Number(en).toPrecision(2), "GB")
                                        }),
                                        maxFileSize: "".concat(2, "GB")
                                    }
                                }))
                            }), (0, y.jsxs)(tt.Z.Root, {
                                className: "max-h-[28rem]",
                                fixed: !0,
                                size: "compact",
                                children: [(0, y.jsxs)(tt.Z.Header, {
                                    children: [(0, y.jsx)(tt.Z.HeaderCell, {
                                        className: "max-w-8/12 w-8/12 dark:bg-gray-900",
                                        children: i.formatMessage(tl.name)
                                    }), (0, y.jsx)(tt.Z.HeaderCell, {
                                        children: i.formatMessage(tl.date)
                                    }), (0, y.jsx)(tt.Z.HeaderCell, {
                                        children: i.formatMessage(tl.size)
                                    }), (0, y.jsx)(tt.Z.HeaderCell, {
                                        textAlign: "right",
                                        children: (0, y.jsxs)(te.Z.Root, {
                                            children: [(0, y.jsx)(te.Z.Trigger, {
                                                children: (0, y.jsx)(ep.ZP, {
                                                    icon: M.K9M
                                                })
                                            }), (0, y.jsx)(te.Z.Portal, {
                                                children: (0, y.jsxs)(te.Z.Content, {
                                                    children: [(0, y.jsxs)(te.Z.Item, {
                                                        onClick: Q,
                                                        className: "flex gap-2",
                                                        children: [(0, y.jsx)(ep.ZP, {
                                                            icon: M._hL,
                                                            size: "small"
                                                        }), (0, y.jsx)("span", {
                                                            children: i.formatMessage(tl.downloadAll)
                                                        })]
                                                    }), (0, y.jsxs)(te.Z.Item, {
                                                        onClick: H,
                                                        className: "flex gap-2",
                                                        children: [(0, y.jsx)(ep.ZP, {
                                                            icon: M.Ybf,
                                                            size: "small"
                                                        }), (0, y.jsx)("span", {
                                                            children: i.formatMessage(tl.deleteAll)
                                                        })]
                                                    })]
                                                })
                                            })]
                                        })
                                    })]
                                }), (0, y.jsx)(tt.Z.Body, {
                                    children: ee.map(function(e, t) {
                                        return (0, y.jsx)(td, {
                                            file: e,
                                            refetch: c,
                                            handleFileDelete: K,
                                            handleFileDeleteFailed: X,
                                            session: j,
                                            downloadedFiles: P,
                                            setDownloadedFiles: S
                                        }, t)
                                    })
                                })]
                            })]
                        }) : (0, y.jsx)(C.Z, (0, v._)({}, tl.noFilesFound)), (0, y.jsx)(ta, {
                            accept: to.join(","),
                            onFilePicked: ea,
                            loading: q.isLoading,
                            disabled: q.isLoading,
                            className: "mt-4 flex items-center space-x-2 rounded bg-green-600 px-4 py-2 text-white",
                            text: i.formatMessage(tl.uploadFile),
                            multiple: !0
                        })]
                    }), (0, y.jsx)(eh.Z, {
                        isOpen: I,
                        onClose: function() {
                            return D(!1)
                        },
                        type: "danger",
                        title: i.formatMessage(tl.confirmDeleteAll),
                        primaryButton: (0, y.jsx)(em.ZP.Button, {
                            title: i.formatMessage(tl.deleteAll),
                            color: "danger",
                            onClick: V
                        }),
                        secondaryButton: (0, y.jsx)(em.ZP.Button, {
                            title: i.formatMessage(tl.deleteHistoryModalCancel),
                            color: "neutral",
                            onClick: $
                        })
                    }), (0, y.jsx)(eh.Z, {
                        isOpen: R,
                        onClose: function() {
                            return L(!1)
                        },
                        type: "success",
                        title: i.formatMessage(tl.confirmDownloadAll),
                        primaryButton: (0, y.jsx)(em.ZP.Button, {
                            title: i.formatMessage(tl.downloadAll),
                            color: "primary",
                            onClick: G
                        }),
                        secondaryButton: (0, y.jsx)(em.ZP.Button, {
                            title: i.formatMessage(tl.confirmCancelDownloadAll),
                            color: "neutral",
                            onClick: J
                        })
                    })]
                })
            }
            var tg = n(41230),
                tm = n(35588),
                th = n(13090),
                tp = n(86273),
                tx = n(15329),
                tv = n(7813),
                tb = n(70788),
                ty = n(6948),
                tj = n(6013);

            function tw() {
                var e = (0, G._)(["bg-green-500 text-white py-0.5 px-1.5 text-[10px] leading-normal font-semibold rounded uppercase"]);
                return tw = function() {
                    return e
                }, e
            }
            var tk = (0, _.vU)({
                    title: {
                        id: "customInstructionsAnnouncement.title",
                        defaultMessage: "Set your Custom instructions",
                        description: "Text displayed in tooltip announcing custom instructions"
                    },
                    new: {
                        id: "customInstructionsAnnouncement.new",
                        defaultMessage: "New",
                        description: "New badge text"
                    }
                }),
                tM = "oai/apps/announcement/customInstructions";

            function tC(e) {
                var t = e.children,
                    n = function() {
                        var e = Date.now();
                        ty.m.setItem(tM, e), s(e)
                    },
                    a = (0, D.w$)(),
                    r = (0, B._)((0, k.useState)(function() {
                        var e = ty.m.getItem(tM);
                        return "number" == typeof e && e
                    }), 2),
                    i = r[0],
                    s = r[1],
                    o = (0, N.tN)(function(e) {
                        return e.isDesktopNavCollapsed
                    }),
                    l = (0, S.hz)(),
                    c = l.has(ed.Rw) || l.has(ed.uo),
                    u = (0, k.useRef)(null);
                return (0, y.jsxs)(tj.fC, {
                    open: c && !o && a && !1 === i,
                    onOpenChange: function(e) {
                        e || n()
                    },
                    children: [(0, y.jsx)(tj.xz, {
                        asChild: !0,
                        ref: u,
                        children: t
                    }), (0, y.jsx)(tj.h_, {
                        children: (0, y.jsxs)(tj.VY, {
                            side: "right",
                            sideOffset: 16,
                            onOpenAutoFocus: function(e) {
                                e.preventDefault()
                            },
                            onCloseAutoFocus: function(e) {
                                e.preventDefault()
                            },
                            onInteractOutside: function(e) {
                                var t;
                                e.target instanceof Element && (null === (t = u.current) || void 0 === t ? void 0 : t.contains(e.target)) ? n() : e.preventDefault()
                            },
                            className: "relative animate-slideLeftAndFade select-none rounded-xl bg-gray-900 p-4 text-sm text-white shadow-sm dark:bg-gray-50 dark:text-gray-700",
                            children: [(0, y.jsx)("div", {
                                children: (0, y.jsxs)("div", {
                                    className: "mb-0.5 flex items-center gap-2",
                                    children: [(0, y.jsx)(t_, {
                                        children: (0, y.jsx)(C.Z, (0, v._)({}, tk.new))
                                    }), (0, y.jsx)("div", {
                                        className: "font-medium",
                                        children: (0, y.jsx)(C.Z, (0, v._)({}, tk.title))
                                    }), (0, y.jsx)(tj.x8, {
                                        className: "-my-1 -mr-1 ml-1 p-1 opacity-70 transition hover:opacity-100",
                                        children: (0, y.jsx)(ep.ZP, {
                                            icon: M.q5L
                                        })
                                    })]
                                })
                            }), (0, y.jsx)(tj.Eh, {
                                asChild: !0,
                                children: (0, y.jsx)("div", {
                                    className: "relative top-[-6px] h-3 w-3 rotate-45 transform rounded-br-sm bg-gray-900 dark:bg-gray-50"
                                })
                            })]
                        })
                    })]
                })
            }
            var t_ = el.Z.span(tw()),
                tT = n(98359);

            function tP(e) {
                var t = e.children;
                return (0, y.jsx)(tT.u, {
                    as: k.Fragment,
                    enter: "transition ease-out duration-200",
                    enterFrom: "opacity-0 translate-y-1",
                    enterTo: "opacity-100 translate-y-0",
                    leave: "transition ease-in duration-150",
                    leaveFrom: "opacity-100 translate-y-0",
                    leaveTo: "opacity-0 translate-y-1",
                    children: t
                })
            }

            function tN() {
                var e = (0, S.WY)(),
                    t = (0, S.hz)(),
                    n = (0, S.ec)(S.F_.hasMultipleWorkspaces),
                    a = (0, k.useCallback)(function() {
                        ec.o.logEvent(eu.a.clickSidebarAccountPortalMenuItem), N.vm.openModal(N.B.AccountPortal)
                    }, []),
                    r = t.has(ed.Rw) || t.has(ed.uo);
                return (0, y.jsxs)(y.Fragment, {
                    children: [n && (0, y.jsx)(tx.R, {}), !0 === e && (0, y.jsxs)(tx.ZP, {
                        onClick: a,
                        children: [(0, y.jsx)(ep.ZP, {
                            icon: M.fzv
                        }), (0, y.jsx)(C.Z, (0, v._)({}, tS.myPlan))]
                    }), r && (0, y.jsxs)(tx.ZP, {
                        onClick: function() {
                            return N.vm.openModal(N.B.UserContext)
                        },
                        children: [(0, y.jsx)(ep.wP, {
                            className: "h-4 w-4"
                        }), (0, y.jsx)(C.Z, (0, v._)({}, tS.chatPreferences))]
                    }), !1]
                })
            }
            var tS = (0, _.vU)({
                    myPlan: {
                        id: "popoverNavigation.myPlan",
                        defaultMessage: "My plan",
                        description: "My plan menu item"
                    },
                    chatPreferences: {
                        id: "popoverNavigation.chatPreferences",
                        defaultMessage: "Custom instructions",
                        description: "Custom instructions menu item"
                    },
                    myFiles: {
                        id: "popoverNavigation.myFiles",
                        defaultMessage: "My files",
                        description: "Files menu item"
                    }
                }),
                tZ = n(57101),
                tI = n(9181),
                tD = n.n(tI);

            function tB() {
                var e = (0, S.ec)(S.F_.hasMultipleWorkspaces),
                    t = (0, S.hz)(),
                    n = (0, S.N$)().has(ed.Rw) || (0, S.N$)().has(ed.uo);
                return (0, y.jsxs)(y.Fragment, {
                    children: [(0, y.jsxs)(tF, {
                        href: "/admin",
                        children: [(0, y.jsx)(ep.ZP, {
                            icon: tZ.Z
                        }), (0, y.jsx)(C.Z, (0, v._)({}, tR.myWorkspaceSettings))]
                    }), e && (0, y.jsx)(tx.R, {}), n && (0, y.jsxs)(tx.ZP, {
                        onClick: function() {
                            return N.vm.openModal(N.B.UserContext)
                        },
                        children: [(0, y.jsx)(ep.wP, {
                            className: "h-4 w-4"
                        }), (0, y.jsx)(C.Z, (0, v._)({}, tR.chatPreferences))]
                    }), t.has(ed.L0.WorkspaceConversationTemplates) && (0, y.jsxs)(tx.ZP, {
                        onClick: function() {
                            N.vm.openModal(N.B.BrowseConversationTemplates)
                        },
                        children: [(0, y.jsx)(M.CSS, {
                            className: "h-4 w-4"
                        }), (0, y.jsx)("span", {
                            children: "Specialists"
                        })]
                    })]
                })
            }

            function tF(e) {
                var t = e.href,
                    n = e.children;
                return (0, y.jsx)(tv.v.Item, {
                    children: function(e) {
                        var a = e.active;
                        return (0, y.jsx)(tD(), {
                            href: t,
                            children: (0, y.jsx)(tx.ZB, {
                                $as: "span",
                                className: (0, J.default)(a ? "bg-gray-700" : "cursor-pointer hover:bg-gray-700"),
                                children: n
                            })
                        })
                    }
                })
            }
            var tR = (0, _.vU)({
                myWorkspaceSettings: {
                    id: "workspacePopoverNavigation.myWorkspaceSettings",
                    defaultMessage: "Workspace settings",
                    description: "Workspace settings menu item"
                },
                chatPreferences: {
                    id: "workspacePopoverNavigation.chatPreferences",
                    defaultMessage: "Custom instructions",
                    description: "Custom instructions menu item"
                }
            });

            function tL(e) {
                var t = e.onClickSettings;
                return (0, y.jsxs)(tv.v, {
                    as: "div",
                    className: "group relative",
                    children: [(0, y.jsx)(tO, {}), (0, y.jsx)(tP, {
                        children: (0, y.jsx)(tv.v.Items, {
                            className: "absolute bottom-full left-0 z-20 mb-2 w-full overflow-hidden rounded-md bg-gray-950 pb-1.5 pt-1 outline-none",
                            children: (0, y.jsx)(tU, {
                                onClickSettings: t
                            })
                        })
                    })]
                })
            }

            function tE() {
                var e = (0, eY.kP)().session,
                    t = null == e ? void 0 : e.user,
                    n = (0, e2.Ix)();
                return t ? (0, y.jsx)(y.Fragment, {
                    children: (0, y.jsx)(tx.ZP, {
                        onClick: function() {
                            N.vm.openModal(N.B.WorkspaceSwitcher)
                        },
                        children: (0, y.jsxs)("div", {
                            className: "flex w-full flex-col gap-2",
                            children: [(0, y.jsx)(e0.zf, {
                                className: "h-10 w-10",
                                iconSize: "medium"
                            }), (0, y.jsxs)("div", {
                                className: "flex w-full items-center justify-between gap-2",
                                children: [(0, y.jsxs)("div", {
                                    className: "flex flex-col items-start gap-1",
                                    children: [(0, y.jsx)("div", {
                                        className: "text-base text-white",
                                        children: n
                                    }), (0, y.jsx)("div", {
                                        className: "text-sm text-gray-500",
                                        children: null == t ? void 0 : t.email
                                    })]
                                }), (0, y.jsx)("div", {
                                    children: (0, y.jsx)(ep.ZP, {
                                        icon: tb.Z,
                                        size: "small"
                                    })
                                })]
                            })]
                        })
                    })
                }) : null
            }
            var tA = "oai/apps/hasSeenUserSurvey6_23";

            function tq() {
                var e = (0, eo.Z)(),
                    t = (0, D.w$)(),
                    n = (0, B._)((0, k.useState)(!1), 2),
                    a = n[0],
                    r = n[1],
                    i = ty.m.getItem(tA);
                return a || i ? null : (0, y.jsx)("div", {
                    className: "mx-1 mb-1 rounded-sm bg-[#0077FF]",
                    children: (0, y.jsxs)("div", {
                        className: "flex flex-col items-center justify-stretch gap-3 p-3 text-sm text-white",
                        children: [(0, y.jsxs)("div", {
                            className: "flex w-full items-start",
                            children: [(0, y.jsxs)("div", {
                                className: "flex-grow",
                                children: [(0, y.jsx)("div", {
                                    className: "font-bold",
                                    children: (0, y.jsx)(C.Z, (0, v._)({}, tW.surveyTitle))
                                }), (0, y.jsx)("div", {
                                    children: (0, y.jsx)(C.Z, (0, v._)({}, tW.surveyDescription))
                                })]
                            }), (0, y.jsx)("button", {
                                className: "text-white/25 hover:text-white/40",
                                onClick: function() {
                                    r(!0), ty.m.setItem(tA, !0)
                                },
                                "aria-label": e.formatMessage(tW.surveyDismiss),
                                children: (0, y.jsx)(ep.QF, {
                                    width: t ? "20px" : "24px",
                                    height: t ? "20px" : "24px"
                                })
                            })]
                        }), (0, y.jsxs)("a", {
                            href: "https://openai.qualtrics.com/jfe/form/SV_7QmSGWHymCCmIxE",
                            target: "_blank",
                            className: "flex w-full flex-row items-center justify-center gap-2 rounded-[4px] bg-white/25 p-2 hover:bg-white/40",
                            rel: "noreferrer",
                            onClick: function() {
                                ty.m.setItem(tA, !0), r(!0)
                            },
                            children: [(0, y.jsx)(ep.ZP, {
                                size: "small",
                                icon: M.AlO
                            }), (0, y.jsx)(C.Z, (0, v._)({}, tW.takeSurveyButton))]
                        })]
                    })
                })
            }

            function tU(e) {
                var t = e.onClickSettings,
                    n = (0, S.WY)(),
                    a = (0, S.ec)(S.F_.isBusinessWorkspace),
                    r = (0, S.hz)(),
                    i = r.has(ed.G_),
                    s = (0, S.ec)(S.F_.hasMultipleWorkspaces),
                    o = (0, D.w$)(),
                    l = r.has(ed.rk);
                return (0, y.jsxs)("nav", {
                    children: [i && (0, y.jsx)(tq, {}), s && (0, y.jsx)(tE, {}), a ? (0, y.jsx)(tB, {}) : (0, y.jsx)(tN, {}), (!l || !o) && (0, y.jsxs)(tx.ZP, {
                        as: "a",
                        href: "https://help.openai.com/en/collections/3742473-chatgpt",
                        target: "_blank",
                        onClick: function() {
                            ec.o.logEvent(eu.a.clickFaqLink)
                        },
                        children: [(0, y.jsx)(ep.ZP, {
                            icon: M.AlO
                        }), (0, y.jsx)(C.Z, (0, v._)({}, tW.helpAndFaq))]
                    }), (0, y.jsxs)(tx.ZP, {
                        onClick: t,
                        children: [(0, y.jsx)(ep.ZP, {
                            icon: M.nbt
                        }), n ? (0, y.jsx)(C.Z, (0, v._)({}, tW.settingsPlus)) : (0, y.jsx)(C.Z, (0, v._)({}, tW.settings))]
                    }), (0, y.jsx)(tx.R, {}), (0, y.jsxs)(tx.ZP, {
                        onClick: function() {
                            ec.o.logEvent(eu.a.clickLogOut, {
                                eventSource: "mouse"
                            }), (0, eY.w7)()
                        },
                        children: [(0, y.jsx)(ep.ZP, {
                            icon: M.xqh
                        }), (0, y.jsx)(C.Z, (0, v._)({}, tW.logOut))]
                    })]
                })
            }

            function tO() {
                var e = (0, eY.kP)().session;
                return (null == e ? void 0 : e.user) ? (0, y.jsx)(tz, {}) : null
            }

            function tz() {
                var e = (0, e2.Ix)();
                return (0, y.jsx)(tC, {
                    children: (0, y.jsxs)(tv.v.Button, {
                        className: "flex w-full items-center gap-2.5 rounded-md px-3 py-3 text-sm transition-colors duration-200 hover:bg-gray-800 group-ui-open:bg-gray-800",
                        children: [(0, y.jsx)("div", {
                            className: "flex-shrink-0",
                            children: (0, y.jsx)(e0.zf, {
                                iconSize: "redesign"
                            })
                        }), (0, y.jsx)("div", {
                            className: "grow overflow-hidden text-ellipsis whitespace-nowrap text-left text-white",
                            children: e
                        }), (0, y.jsx)(ep.ZP, {
                            icon: M.K9M,
                            size: "small",
                            className: "flex-shrink-0 text-gray-500"
                        })]
                    })
                })
            }
            var tW = (0, _.vU)({
                helpAndFaq: {
                    id: "navigation.helpAndFaq",
                    defaultMessage: "Help & FAQ",
                    description: "Help & FAQ menu item"
                },
                settings: {
                    id: "navigation.settings",
                    defaultMessage: "Settings",
                    description: "Settings menu item"
                },
                settingsPlus: {
                    id: "navigation.settingsPlus",
                    defaultMessage: "Settings & Beta",
                    description: "Settings menu item for Plus users"
                },
                logOut: {
                    id: "navigation.logOut",
                    defaultMessage: "Log out",
                    description: "Log out menu item"
                },
                takeSurveyButton: {
                    id: "navigation.survey.takeSurveyButton",
                    defaultMessage: "Take survey",
                    description: "Survey offer call to action"
                },
                surveyDismiss: {
                    id: "navigation.surveyDismiss",
                    defaultMessage: "Dismiss survey",
                    description: "Survey offer dismiss button"
                },
                surveyDescription: {
                    id: "navigation.surveyDescription",
                    defaultMessage: "Shape the future of ChatGPT.",
                    description: "Survey offer description"
                },
                surveyTitle: {
                    id: "navigation.surveyTitle",
                    defaultMessage: "We’d love to hear from you!",
                    description: "Survey offer title"
                }
            });

            function tH() {
                var e = (0, G._)(["flex-col flex-1 transition-opacity duration-500\n  ", "\n  ", ""]);
                return tH = function() {
                    return e
                }, e
            }

            function tQ(e) {
                var t = e.onDeleteHistory,
                    n = e.onNewThread,
                    a = e.children,
                    r = (0, eo.Z)(),
                    i = (0, S.hz)(),
                    s = i.has(ed.Ue),
                    o = (0, S.WY)(),
                    l = (0, S.$T)(),
                    c = (0, B._)((0, k.useState)(function() {
                        var e = (0, ez.getCookie)(eW.Y);
                        return "string" == typeof e && e !== eW.b
                    }), 1)[0],
                    u = i.has(ed.Rw) || i.has(ed.uo),
                    d = (0, S.ec)(S.F_.isBusinessWorkspace),
                    f = (0, eH.g)(function(e) {
                        return e.flags.isUserInCanPayGroup
                    }),
                    g = (0, tm.t)(function(e) {
                        return {
                            setShowAccountPaymentModal: e.setShowAccountPaymentModal
                        }
                    }).setShowAccountPaymentModal,
                    m = (0, k.useCallback)(function() {
                        g(!0, function() {
                            ec.o.logEvent(eu.a.clickSidebarAccountPaymentMenuItem)
                        })
                    }, [g]),
                    h = (0, k.useRef)(null),
                    p = (0, B._)((0, k.useState)(!1), 2),
                    x = p[0],
                    b = p[1],
                    j = (0, k.useContext)(Z.QL),
                    w = j.historyDisabled,
                    _ = j.toggleHistoryDisabled,
                    T = j.getModifiedSettings,
                    P = j.unsetModifiedSettings,
                    I = T(),
                    D = (0, N.tN)(function(e) {
                        return e.activeModals.has(N.B.Settings)
                    }),
                    F = (0, k.useCallback)(function() {
                        N.vm.openModal(N.B.Settings)
                    }, []),
                    R = (0, k.useCallback)(function() {
                        N.vm.closeModal(N.B.Settings), P()
                    }, [P]);
                (0, k.useEffect)(function() {
                    I && N.vm.openModal(N.B.Settings)
                }, []);
                var L = (0, k.useCallback)(function() {
                        n(), _()
                    }, [n, _]),
                    E = (0, y.jsxs)("div", {
                        className: (0, J.default)("absolute left-0 top-14 z-20 overflow-hidden transition-all duration-500", w ? "visible max-h-72" : "invisible max-h-0"),
                        children: [(0, y.jsxs)("div", {
                            className: "bg-gray-900 px-4 py-3",
                            children: [(0, y.jsx)("div", {
                                className: "p-1 text-sm text-gray-100",
                                children: (0, y.jsx)(C.Z, (0, v._)({}, t$.chatHistoryOff))
                            }), (0, y.jsx)("div", {
                                className: "p-1 text-xs text-gray-500",
                                children: (0, y.jsx)(C.Z, (0, U._)((0, v._)({}, d ? t$.chatHistoryOffDescriptionBusiness : t$.chatHistoryOffDescription), {
                                    values: {
                                        learnMore: (0, y.jsx)("a", {
                                            href: "https://help.openai.com/en/articles/7730893",
                                            target: "_blank",
                                            className: "underline",
                                            rel: "noreferrer",
                                            children: (0, y.jsx)(C.Z, (0, v._)({}, t$.learnMore))
                                        }),
                                        b: function(e) {
                                            return (0, y.jsx)("strong", {
                                                children: e
                                            })
                                        }
                                    }
                                }))
                            }), (0, y.jsxs)(eg.z, {
                                className: "mt-4 w-full",
                                onClick: L,
                                color: "primary",
                                size: "medium",
                                children: [(0, y.jsx)(ep.ZP, {
                                    icon: M.$IY
                                }), (0, y.jsx)(C.Z, (0, v._)({}, t$.enableChatHistory))]
                            })]
                        }), (0, y.jsx)("div", {
                            className: "h-24 bg-gradient-to-t from-gray-900/0 to-gray-900"
                        })]
                    });
                (0, k.useEffect)(function() {
                    var e;
                    h.current && b((e = h.current).scrollHeight > e.clientHeight || e.scrollWidth > e.clientWidth)
                }, [a]);
                var A = !(0, S.WY)() && !i.has("disable_upgrade_ui"),
                    q = (0, S.KQ)(),
                    O = (0, N.tN)(function(e) {
                        return e.isFilesModalOpen
                    });
                return (0, y.jsxs)(y.Fragment, {
                    children: [(0, y.jsxs)("div", {
                        className: "scrollbar-trigger relative h-full w-full flex-1 items-start border-white/20",
                        children: [(0, y.jsx)(eO.f, {
                            asChild: !0,
                            children: (0, y.jsx)("h2", {
                                children: (0, y.jsx)(C.Z, (0, v._)({}, t$.chatHistoryLabel))
                            })
                        }), (0, y.jsxs)("nav", {
                            className: "flex h-full w-full flex-col p-2",
                            "aria-label": r.formatMessage(t$.chatHistoryLabel),
                            children: [(0, y.jsxs)("div", {
                                className: "mb-1 flex flex-row gap-2",
                                children: [(0, y.jsxs)(th.MP, {
                                    onClick: n,
                                    children: [(0, y.jsx)(ep.ZP, {
                                        icon: w ? M.Bw1 : M.OvN
                                    }), (0, y.jsx)(C.Z, (0, v._)({}, w ? t$.clearChat : t$.newChat))]
                                }), s && (0, y.jsx)(th.H, {})]
                            }), E, (0, y.jsx)(tV, {
                                ref: h,
                                $offsetScrollbar: x,
                                $disableScroll: w,
                                children: a
                            }), c && l ? null : (0, y.jsxs)("div", {
                                className: "border-t border-white/20 pt-2 empty:hidden",
                                children: [!l && !1 === o && f && !d && (0, y.jsx)(tx.Vq, {
                                    onClick: m,
                                    className: "rounded-md",
                                    children: (0, y.jsxs)("span", {
                                        className: "flex w-full flex-row justify-between",
                                        children: [(0, y.jsxs)("span", {
                                            className: "gold-new-button flex items-center gap-3",
                                            children: [(0, y.jsx)(ep.ZP, {
                                                icon: M.fzv
                                            }), q ? (0, y.jsx)(C.Z, (0, v._)({}, t$.renewPlus)) : (0, y.jsx)(C.Z, (0, v._)({}, t$.upgradeToPlus))]
                                        }), A && !q && (0, y.jsx)("span", {
                                            className: "rounded-md bg-yellow-200 px-1.5 py-0.5 text-xs font-medium uppercase text-gray-800",
                                            children: (0, y.jsx)(C.Z, (0, v._)({}, t$.newLabel))
                                        })]
                                    })
                                }), (0, y.jsx)(tL, {
                                    onClickSettings: F
                                })]
                            })]
                        })]
                    }), D && (0, y.jsx)(tg.ZP, {
                        onClose: R,
                        onToggleHistoryDisabled: n,
                        onDeleteHistory: t
                    }), i.has("files_list_ui") && O && (0, y.jsx)(tf, {}), u && (0, y.jsx)(tp.wm, {}), (0, y.jsx)(e5, {})]
                })
            }
            var tV = el.Z.div(tH(), function(e) {
                    return e.$disableScroll ? "overflow-y-hidden opacity-20 pointer-events-none" : "overflow-y-auto"
                }, function(e) {
                    return e.$offsetScrollbar && "-mr-2"
                }),
                t$ = (0, _.vU)({
                    upgradeToPlus: {
                        id: "NavigationContent.upgradeToPlus",
                        defaultMessage: "Upgrade to Plus",
                        description: "Upgrade to Plus menu item"
                    },
                    renewPlus: {
                        id: "NavigationContent.renewPlus",
                        defaultMessage: "Renew Plus",
                        description: "Renew Plus menu item"
                    },
                    chatHistoryLabel: {
                        id: "NavigationContent.chatHistoryLabel",
                        defaultMessage: "Chat history",
                        description: "Chat history label heading"
                    },
                    chatHistoryOff: {
                        id: "NavigationContent.chatHistoryOff",
                        defaultMessage: "Chat History is off for this browser.",
                        description: "Text indicating that chat history is turned off"
                    },
                    chatHistoryOffDescription: {
                        id: "NavigationContent.chatHistoryOffDescription",
                        defaultMessage: "When history is turned off, new chats on this browser won't appear in your history on any of your devices, be used to train our models, or stored for longer than 30 days. <b>This setting does not sync across browsers or devices.</b> {learnMore}",
                        description: "Description for chat history being off"
                    },
                    chatHistoryOffDescriptionBusiness: {
                        id: "NavigationContent.chatHistoryOffDescriptionBusiness",
                        defaultMessage: "When history is turned off, new chats on this browser won't appear in your history on any of your devices, or stored for longer than 30 days. <b>This setting does not sync across browsers or devices.</b> {learnMore}",
                        description: "Description for chat history being off"
                    },
                    learnMore: {
                        id: "NavigationContent.learnMore",
                        defaultMessage: "Learn more",
                        description: "Learn more link text"
                    },
                    enableChatHistory: {
                        id: "NavigationContent.enableChatHistory",
                        defaultMessage: "Enable chat history",
                        description: "Enable chat history button label"
                    },
                    newLabel: {
                        id: "NavigationContent.newLabel",
                        defaultMessage: "NEW",
                        description: "Label for new features or items"
                    },
                    clearChat: {
                        id: "NavigationContent.clearChat",
                        defaultMessage: "Clear chat",
                        description: "Clear chat button label"
                    },
                    newChat: {
                        id: "NavigationContent.newChat",
                        defaultMessage: "New chat",
                        description: "New chat button label"
                    }
                }),
                tG = n(82816),
                tJ = n(70293),
                tY = n(82277),
                tK = n(6128),
                tX = n(55344),
                t0 = n.n(tX),
                t1 = n(73413),
                t2 = n.n(t1),
                t3 = n(11253),
                t4 = n.n(t3),
                t5 = n(8844),
                t8 = n(77010),
                t7 = n(16600),
                t6 = n(95954),
                t9 = n(54118),
                ne = n(52787),
                nt = n(5268);

            function nn(e) {
                var t = e.conversationTemplate;
                return (0, y.jsx)(tt.Z.Row, {
                    children: (0, y.jsx)(tt.Z.Cell, {
                        children: t.name
                    })
                })
            }

            function na(e) {
                var t, n, a = (t = e.workspaceId, n = (0, eY.kP)().session, (0, nt.a)(["conversation-templates", {
                    workspaceId: t
                }], {
                    queryFn: (0, eQ._)(function() {
                        return (0, eV.Jh)(this, function(e) {
                            return [2, T.ZP.getConversationTemplates(n.accessToken, t)]
                        })
                    }),
                    enabled: null != n
                })).data;
                return (0, y.jsx)("div", {
                    children: null != a && (a.length > 0 ? (0, y.jsx)(tt.Z.Root, {
                        children: (0, y.jsx)(tt.Z.Body, {
                            children: null == a ? void 0 : a.map(function(e) {
                                return (0, y.jsx)(nn, {
                                    conversationTemplate: e
                                }, e.id)
                            })
                        })
                    }) : (0, y.jsx)("div", {
                        className: "text-token-text-tertiary",
                        children: "No specialists found"
                    }))
                })
            }

            function nr() {
                var e = (0, S.ec)().currentWorkspace;
                return (0, y.jsxs)("div", {
                    children: [(0, y.jsx)("div", {
                        className: "mb-4",
                        children: (0, y.jsx)(eg.z, {
                            onClick: function() {
                                N.vm.closeModal(N.B.BrowseConversationTemplates), N.vm.openModal(N.B.CreateConversationTemplate)
                            },
                            children: "Create specialist"
                        })
                    }), null != e && (0, y.jsxs)("div", {
                        children: [(0, y.jsxs)("div", {
                            className: "mb-2 font-medium",
                            children: ["Specialists at ", e.name]
                        }), (0, y.jsx)(na, {
                            workspaceId: e.id
                        })]
                    })]
                })
            }

            function ni() {
                var e = function() {
                        N.vm.closeModal(N.B.BrowseConversationTemplates)
                    },
                    t = (0, N.EV)(N.B.BrowseConversationTemplates);
                return (0, y.jsx)(em.ZP.Root, {
                    isOpen: t,
                    onClose: e,
                    children: (0, y.jsx)(em.ZP.Overlay, {
                        children: (0, y.jsxs)(em.ZP.Content, {
                            className: "max-w-lg",
                            children: [(0, y.jsx)(em.ZP.Header, {
                                type: "success",
                                title: "Specialist directory",
                                closeButton: (0, y.jsx)(em.ZP.CloseButton, {
                                    onClose: e
                                })
                            }), (0, y.jsx)("div", {
                                className: "max-h-96 overflow-auto p-4 sm:p-6 sm:pt-4",
                                children: (0, y.jsx)(nr, {})
                            })]
                        })
                    })
                })
            }

            function ns() {
                var e = (0, G._)(["block mb-2 font-medium"]);
                return ns = function() {
                    return e
                }, e
            }

            function no() {
                var e = (0, G._)(["mb-4"]);
                return no = function() {
                    return e
                }, e
            }

            function nl(e) {
                var t, n, a, r, i = (t = e.workspaceId, n = (0, j.NL)(), a = (0, eY.kP)().session, (0, e6.D)({
                        mutationFn: (r = (0, eQ._)(function(e) {
                            var n, r, i;
                            return (0, eV.Jh)(this, function(s) {
                                switch (s.label) {
                                    case 0:
                                        return r = (n = e.templateData).name, i = n.contextMessage, [4, T.ZP.createConversationTemplate(a.accessToken, t, r, {
                                            contextMessage: i
                                        })];
                                    case 1:
                                        return [2, s.sent()]
                                }
                            })
                        }), function(e) {
                            return r.apply(this, arguments)
                        }),
                        onSettled: function() {
                            n.refetchQueries({
                                queryKey: ["conversation-templates", {
                                    workspaceId: t
                                }]
                            })
                        }
                    })),
                    s = (0, B._)((0, k.useState)(""), 2),
                    o = s[0],
                    l = s[1],
                    c = (0, B._)((0, k.useState)(""), 2),
                    u = c[0],
                    d = c[1];
                return (0, y.jsxs)("form", {
                    onSubmit: function(e) {
                        e.preventDefault(), i.mutate({
                            templateData: {
                                name: o,
                                contextMessage: u
                            }
                        }, {
                            onSuccess: function(e) {
                                e.id, N.vm.closeModal(N.B.CreateConversationTemplate), N.vm.openModal(N.B.BrowseConversationTemplates)
                            }
                        })
                    },
                    children: [(0, y.jsxs)(nu, {
                        children: [(0, y.jsx)(nc, {
                            children: "Specialist name"
                        }), (0, y.jsx)("input", {
                            type: "text",
                            placeholder: "Onboarding bot",
                            value: o,
                            onChange: function(e) {
                                return l(e.target.value)
                            },
                            className: "w-full rounded"
                        })]
                    }), (0, y.jsxs)(nu, {
                        children: [(0, y.jsx)(nc, {
                            children: "Instructions"
                        }), (0, y.jsx)("textarea", {
                            value: u,
                            onChange: function(e) {
                                return d(e.target.value)
                            },
                            className: "w-full rounded"
                        })]
                    }), (0, y.jsx)(em.ZP.Actions, {
                        primaryButton: (0, y.jsx)(eg.z, {
                            disabled: i.isLoading || "" === o || "" === u,
                            children: "Create specialist"
                        })
                    })]
                })
            }
            var nc = el.Z.label(ns()),
                nu = el.Z.div(no());

            function nd() {
                var e = (0, S.ec)().currentWorkspace;
                return (0, y.jsx)("div", {
                    children: null != e && (0, y.jsx)(nl, {
                        workspaceId: e.id
                    })
                })
            }

            function nf() {
                var e = function() {
                        N.vm.closeModal(N.B.CreateConversationTemplate)
                    },
                    t = (0, N.EV)(N.B.CreateConversationTemplate);
                return (0, y.jsx)(em.ZP.Root, {
                    isOpen: t,
                    onClose: e,
                    children: (0, y.jsx)(em.ZP.Overlay, {
                        children: (0, y.jsxs)(em.ZP.Content, {
                            className: "max-w-md",
                            children: [(0, y.jsx)(em.ZP.Header, {
                                type: "success",
                                title: "New specialist",
                                closeButton: (0, y.jsx)(em.ZP.CloseButton, {
                                    onClose: e
                                })
                            }), (0, y.jsx)("div", {
                                className: "p-4 sm:p-6 sm:pt-4",
                                children: (0, y.jsx)(nd, {})
                            })]
                        })
                    })
                })
            }
            var ng = n(2827),
                nm = n(77370);

            function nh(e) {
                var t = e.id,
                    n = e.label,
                    a = e.disabled;
                return (0, y.jsxs)("div", {
                    className: "form-check",
                    children: [(0, y.jsx)("input", {
                        className: "form-check-input float-left mr-2 mt-1 h-4 w-4 cursor-pointer appearance-none rounded-sm border border-gray-300 bg-white bg-contain bg-center bg-no-repeat align-top transition duration-200 checked:border-blue-600 checked:bg-blue-600 focus:outline-none",
                        type: "checkbox",
                        disabled: a,
                        value: "",
                        id: t
                    }), (0, y.jsx)("label", {
                        className: "form-check-label text-gray-800 dark:text-gray-100",
                        htmlFor: t,
                        children: n
                    })]
                })
            }
            var np = n(54655);

            function nx() {
                var e = (0, G._)(["p-2 rounded-md hover:bg-gray-200 hover:text-gray-800 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-200 flex items-center gap-2"]);
                return nx = function() {
                    return e
                }, e
            }

            function nv() {
                var e = (0, G._)(["flex justify-between items-center p-4 rounded-md bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm"]);
                return nv = function() {
                    return e
                }, e
            }

            function nb(e) {
                var t = e.clientThreadId,
                    n = e.messageForRating,
                    a = e.variantIds,
                    r = e.conversationTurnMountTime,
                    i = function(e) {
                        var i, s, c = P.tQ.getTree(t),
                            u = a[0] || "",
                            d = (null == c ? void 0 : c.getConversationTurns(u)) || [],
                            f = d[d.length - 1],
                            g = (null == f ? void 0 : f.messages) || [],
                            m = g[g.length - 1],
                            h = (null == m ? void 0 : null === (i = m.message) || void 0 === i ? void 0 : i.id) || "",
                            p = a[1] || "",
                            x = (null == c ? void 0 : c.getConversationTurns(p)) || [],
                            b = x[x.length - 1],
                            y = (null == b ? void 0 : b.messages) || [],
                            j = y[y.length - 1],
                            w = (null == j ? void 0 : null === (s = j.message) || void 0 === s ? void 0 : s.id) || "";
                        T.ZP.submitMessageComparisonFeedback({
                            feedback_version: "inline_regen_feedback:a:1.0",
                            original_message_id: h,
                            new_message_id: w,
                            rating: "none",
                            conversation_id: P.tQ.getServerThreadId(t),
                            text: "",
                            tags: [],
                            completion_comparison_rating: e,
                            new_completion_placement: "not-applicable",
                            feedback_start_time: r,
                            compare_step_start_time: r,
                            new_completion_load_start_time: o,
                            new_completion_load_end_time: l,
                            frontend_submission_time: Date.now(),
                            timezone_offset_min: new Date().getTimezoneOffset()
                        }), P.tQ.updateTree(t, function(t) {
                            t.updateNode(n.nodeId, {
                                metadata: {
                                    $set: (0, U._)((0, v._)({}, t.getMetadata(n.nodeId)), {
                                        inlineComparisonRating: e
                                    })
                                }
                            })
                        }), P.tQ.updateTree(t, function(e) {
                            e.updateNode(m.nodeId, {
                                metadata: {
                                    $set: (0, U._)((0, v._)({}, e.getMetadata(m.nodeId)), {
                                        inlineComparisonRating: "baseline"
                                    })
                                }
                            })
                        })
                    },
                    s = (0, eo.Z)(),
                    o = (0, B._)((0, k.useState)(function() {
                        return null != n.message.create_time ? 1e3 * n.message.create_time : Date.now()
                    }), 1)[0],
                    l = (0, B._)((0, k.useState)(function() {
                        return Date.now()
                    }), 1)[0];
                return (0, y.jsxs)(nj, {
                    children: [(0, y.jsx)("div", {
                        className: (0, J.default)("mr-4"),
                        children: (0, y.jsx)(C.Z, (0, v._)({}, nw.regenTitle))
                    }), (0, y.jsxs)(ny, {
                        onClick: function() {
                            return i("new")
                        },
                        title: s.formatMessage(nw.regenBetterLabel),
                        children: [(0, y.jsx)(ep.ZP, {
                            icon: M.fmn,
                            className: (0, J.default)("mr-1")
                        }), (0, y.jsx)(C.Z, (0, v._)({}, nw.regenBetterText))]
                    }), (0, y.jsxs)(ny, {
                        onClick: function() {
                            return i("original")
                        },
                        title: s.formatMessage(nw.regenWorseLabel),
                        children: [(0, y.jsx)(ep.ZP, {
                            icon: M.oLd,
                            className: (0, J.default)("mr-1")
                        }), (0, y.jsx)(C.Z, (0, v._)({}, nw.regenWorseText))]
                    }), (0, y.jsxs)(ny, {
                        onClick: function() {
                            return i("same")
                        },
                        title: s.formatMessage(nw.regenSameLabel),
                        children: [(0, y.jsx)(ep.ZP, {
                            icon: np.Ny3,
                            className: (0, J.default)("mr-1 rounded-full border border-gray-400 dark:border-gray-300")
                        }), (0, y.jsx)(C.Z, (0, v._)({}, nw.regenSameText))]
                    }), (0, y.jsx)(ny, {
                        onClick: function() {
                            P.tQ.updateTree(t, function(e) {
                                e.updateNode(n.nodeId, {
                                    metadata: {
                                        $set: (0, U._)((0, v._)({}, e.getMetadata(n.nodeId)), {
                                            inlineComparisonRating: "skip"
                                        })
                                    }
                                })
                            })
                        },
                        title: s.formatMessage(nw.regenSkipLabel),
                        children: (0, y.jsx)(ep.ZP, {
                            icon: M.q5L,
                            size: "medium"
                        })
                    })]
                })
            }
            var ny = el.Z.button(nx()),
                nj = el.Z.div(nv()),
                nw = (0, _.vU)({
                    regenTitle: {
                        id: "ConversationTurnInlineFeedback.regenTitle",
                        description: "Title of the regeneration rating",
                        defaultMessage: "Was this response better or worse?"
                    },
                    regenBetterLabel: {
                        id: "ConversationTurnInlineFeedback.regenBetterLabel",
                        description: "Regeneration was better button label",
                        defaultMessage: "This response was better than the previous response"
                    },
                    regenBetterText: {
                        id: "ConversationTurnInlineFeedback.regenBetterText",
                        description: "Regeneration was better button text",
                        defaultMessage: "Better"
                    },
                    regenWorseLabel: {
                        id: "ConversationTurnInlineFeedback.regenWorseLabel",
                        description: "Regeneration was worse button label",
                        defaultMessage: "This response was worse than the previous response"
                    },
                    regenWorseText: {
                        id: "ConversationTurnInlineFeedback.regenWorseText",
                        description: "Regeneration was worse button text",
                        defaultMessage: "Worse"
                    },
                    regenSameLabel: {
                        id: "ConversationTurnInlineFeedback.regenSameLabel",
                        description: "Regeneration was Same button label",
                        defaultMessage: "This response was the same in quality"
                    },
                    regenSameText: {
                        id: "ConversationTurnInlineFeedback.regenSameText",
                        description: "Regeneration was Same button text",
                        defaultMessage: "Same"
                    },
                    regenSkipLabel: {
                        id: "ConversationTurnInlineFeedback.regenSkipLabel",
                        description: "Regeneration skip button label",
                        defaultMessage: "Skip this comparison"
                    }
                }),
                nk = n(28512),
                nM = n(47635),
                nC = n(16920);

            function n_(e) {
                var t, n = e.url,
                    a = e.size,
                    r = void 0 === a ? 16 : a,
                    i = e.className;
                try {
                    t = new URL(n)
                } catch (e) {
                    return console.error(e), null
                }
                return (0, y.jsx)("img", {
                    src: "https://icons.duckduckgo.com/ip3/".concat(t.hostname, ".ico"),
                    alt: "Favicon",
                    width: r,
                    height: r,
                    className: i
                })
            }
            var nT = "&#8203;",
                nP = "oaicite:";

            function nN(e) {
                var t = e.displayInfo,
                    n = (0, tr.O6)(),
                    a = t.metadata,
                    r = (null == a ? void 0 : a.type) === "file";
                return (0, y.jsx)(tn.u, {
                    label: (0, y.jsx)(nS, {
                        citationMetadata: a,
                        invalidReason: t.invalid_reason
                    }),
                    side: "top",
                    sideOffset: 4,
                    withArrow: !1,
                    interactive: !0,
                    wide: !0,
                    children: r ? (0, y.jsx)("button", {
                        onClick: function() {
                            return n(a.id, a.name)
                        },
                        className: "px-0.5 text-green-600",
                        children: (0, y.jsx)("sup", {
                            children: t.number
                        })
                    }) : (0, y.jsx)("a", {
                        href: null == a ? void 0 : a.url,
                        target: "_blank",
                        rel: "noreferrer",
                        className: "px-0.5 text-green-600 !no-underline",
                        children: (0, y.jsx)("sup", {
                            children: t.number
                        })
                    })
                })
            }

            function nS(e) {
                var t = e.citationMetadata,
                    n = e.invalidReason,
                    a = e.onClick,
                    r = (0, tr.O6)(),
                    i = (null == t ? void 0 : t.type) === "file",
                    s = t ? (0, y.jsxs)("div", {
                        className: "flex items-center gap-2",
                        children: [(0, y.jsx)("div", {
                            className: "flex shrink-0 items-center justify-center",
                            children: i ? (0, y.jsx)(M.NOg, {}) : (0, y.jsx)(n_, {
                                url: t.url,
                                className: "my-0"
                            })
                        }), (0, y.jsx)("div", {
                            className: "max-w-xs truncate",
                            children: i ? t.name : t.title
                        }), (0, y.jsx)("div", {
                            className: "shrink-0",
                            children: (0, y.jsx)(ep.ZP, {
                                icon: M.AlO,
                                size: "xsmall"
                            })
                        })]
                    }) : (0, y.jsx)("div", {
                        className: "text-red-500",
                        children: null != n ? n : (0, y.jsx)(C.Z, (0, v._)({}, nI.invalid))
                    });
                return i ? (0, y.jsx)("button", {
                    onClick: function() {
                        r(t.id, t.name), null == a || a()
                    },
                    className: "text-xs",
                    children: s
                }) : (0, y.jsx)("a", {
                    href: null == t ? void 0 : t.url,
                    target: "_blank",
                    rel: "noreferrer",
                    className: "text-xs !no-underline",
                    onClick: a,
                    children: s
                })
            }

            function nZ(e) {
                return "file" === e.type ? e.id : e.url
            }
            var nI = (0, _.vU)({
                    invalid: {
                        id: "citations.invalid",
                        description: "Text when citation is invalid",
                        defaultMessage: "Invalid citation"
                    }
                }),
                nD = n(55068),
                nB = n(61491),
                nF = n(59837),
                nR = n(62853),
                nL = n(53089);

            function nE() {
                var e = (0, G._)(["0px 0px 0px ", "px rgba(171, 104, 255, ", ")"]);
                return nE = function() {
                    return e
                }, e
            }

            function nA() {
                var e = (0, G._)(["", "px solid rgba(171, 104, 255, 1.0)"]);
                return nA = function() {
                    return e
                }, e
            }

            function nq() {
                var e = (0, G._)(["flex flex-col items-start gap-2"]);
                return nq = function() {
                    return e
                }, e
            }
            var nU = nD._.apply(void 0, (0, e7._)([.28, .52, .83, .67])),
                nO = function(e, t) {
                    return function(n) {
                        var a = n % 2150;
                        return a < 250 ? e : (e - t) * (1 - Math.sin(2 * (1900 * nU((a - 250) / 1900)) * Math.PI / 1900 - Math.PI / 2)) / 2 + t
                    }
                },
                nz = k.memo(function(e) {
                    var t = e.children,
                        n = e.isComplete,
                        a = e.expanderClosedLabel,
                        r = e.expanderOpenLabel,
                        i = e.resultsPreview,
                        s = e.results,
                        o = e.initialExpanded,
                        l = e.onExpand,
                        c = e.onNewLoop,
                        u = (0, B._)((0, k.useState)(void 0 !== o && o), 2),
                        d = u[0],
                        f = u[1],
                        g = (0, J.default)("text-xs bg-white text-gray-900 rounded-xl overflow-hidden max-w-full", n ? "border-black/10 border" : "");
                    return (0, y.jsxs)(nQ, {
                        children: [(0, y.jsx)(nW, {
                            className: g,
                            onNewLoop: c,
                            isComplete: n,
                            children: (0, y.jsxs)("div", {
                                className: "flex w-60 items-center justify-between",
                                children: [t, n && null != s && (0, y.jsxs)("button", {
                                    className: "flex items-center gap-2",
                                    onClick: function() {
                                        f(function(e) {
                                            return !e
                                        }), null == l || l()
                                    },
                                    children: [null != r && null != a && (0, y.jsx)("div", {
                                        className: "text-xs text-gray-600",
                                        children: d ? r : a
                                    }), !d && i, (0, y.jsx)(ep.ZP, {
                                        icon: d ? M.rH8 : M.bTu,
                                        className: "mr-3 text-gray-600/50"
                                    })]
                                })]
                            })
                        }), null != s && n && d && (0, y.jsx)("div", {
                            className: g,
                            children: s
                        })]
                    })
                }),
                nW = function(e) {
                    var t = e.children,
                        n = e.className,
                        a = e.isComplete,
                        r = e.onNewLoop;
                    return a ? (0, y.jsx)("div", {
                        className: n,
                        children: t
                    }) : (0, y.jsx)(nH, {
                        className: n,
                        onNewLoop: r,
                        children: t
                    })
                },
                nH = function(e) {
                    var t = e.children,
                        n = e.className,
                        a = e.onNewLoop,
                        r = (0, B._)((0, k.useState)(0), 2),
                        i = r[0],
                        s = r[1],
                        o = (0, nB.r)(),
                        l = (0, nF.H)(o, nO(.08, .2)),
                        c = (0, nF.H)(o, nO(4, 8)),
                        u = (0, nF.H)(o, nO(1, 1.5)),
                        d = (0, nR.Y)(nE(), c, l),
                        f = (0, nR.Y)(nA(), u);
                    return (0, nL.W)(o, "change", function(e) {
                        s(e);
                        var t = Math.floor(e / 2150);
                        Math.floor(i / 2150) !== t && a(t)
                    }), (0, y.jsx)(er.E.div, {
                        className: n,
                        style: {
                            boxShadow: d,
                            border: f
                        },
                        children: t
                    })
                },
                nQ = el.Z.div(nq());

            function nV() {
                var e = (0, G._)(["flex flex-col items-start"]);
                return nV = function() {
                    return e
                }, e
            }

            function n$() {
                var e = (0, G._)(["flex items-center text-xs bg-green-100 rounded p-3 text-gray-900 ", ""]);
                return n$ = function() {
                    return e
                }, e
            }

            function nG() {
                var e = (0, G._)(["max-w-full overflow-x-auto mt-3 flex flex-col gap-2 rounded bg-gray-100 p-3 text-sm text-gray-800"]);
                return nG = function() {
                    return e
                }, e
            }
            var nJ = k.memo(function(e) {
                    var t = e.children,
                        n = e.isComplete,
                        a = e.expanderClosedLabel,
                        r = e.expanderOpenLabel,
                        i = e.resultsPreview,
                        s = e.results,
                        o = e.initialExpanded,
                        l = e.onExpand,
                        c = (0, B._)((0, k.useState)(void 0 !== o && o), 2),
                        u = c[0],
                        d = c[1],
                        f = (0, k.useCallback)(function() {
                            d(function(e) {
                                return !e
                            }), null == l || l()
                        }, [l]);
                    return (0, y.jsxs)(nY, {
                        children: [(0, y.jsxs)(nK, {
                            $complete: n,
                            children: [(0, y.jsx)("div", {
                                children: t
                            }), !n && (0, y.jsx)(ex.Z, {
                                className: (0, J.default)("shrink-0", null != s ? "ml-1" : "ml-12")
                            }), null != s && (0, y.jsxs)("div", {
                                className: "ml-12 flex items-center gap-2",
                                role: "button",
                                onClick: f,
                                children: [null != r && null != a && (0, y.jsx)("div", {
                                    className: "text-xs text-gray-600",
                                    children: u ? r : a
                                }), !u && i, (0, y.jsx)(ep.ZP, {
                                    icon: u ? M.rH8 : M.bTu
                                })]
                            })]
                        }), u && s]
                    })
                }),
                nY = el.Z.div(nV()),
                nK = el.Z.div(n$(), function(e) {
                    return e.$complete && "bg-gray-100"
                }),
                nX = el.Z.div(nG()),
                n0 = (0, _.vU)({
                    startingBrowsing: {
                        id: "browsingMessage.startingBrowsing",
                        defaultMessage: "Opened a new tab",
                        description: "Status message when browsing is starting"
                    },
                    startingFileSearch: {
                        id: "browsingMessage.startingFileSearch",
                        defaultMessage: "Searching files...",
                        description: "Status message when searching files is starting"
                    },
                    finishedBrowsing: {
                        id: "browsingMessage.finishedBrowsing",
                        defaultMessage: "Finished browsing",
                        description: "Status message when browsing is finished"
                    },
                    finishedFileSearch: {
                        id: "browsingMessage.finishedFileSearch",
                        defaultMessage: "Finished searching files",
                        description: "Status message when searching files is finished"
                    },
                    thinking: {
                        id: "browsingMessage.thinking",
                        defaultMessage: "Thinking...",
                        description: "Status message when the next browsing command is being generated"
                    },
                    searchInProgressTitle: {
                        id: "browsingMessage.searchInProgressTitle",
                        defaultMessage: "Browsing",
                        description: "Browsing command title when in progress"
                    },
                    searchFinishedTitle: {
                        id: "browsingMessage.searchFinishedTitle",
                        defaultMessage: "Browsed",
                        description: "Browsing command title when finished"
                    },
                    searchInProgressWeb: {
                        id: "browsingMessage.command.search.inProgress.web",
                        defaultMessage: "Browsing",
                        description: "Browsing command to search Bing is in progress"
                    },
                    searchInProgressFiles: {
                        id: "browsingMessage.command.search.inProgress.files",
                        defaultMessage: "Searching files: <bold>“{searchQuery}”</bold>",
                        description: "Browsing command to search files is in progress"
                    },
                    searchFinishedWeb: {
                        id: "browsingMessage.command.search.finished.web",
                        defaultMessage: "Searched Bing: <bold>“<link>{searchQuery}</link>”</bold>",
                        description: "Browsing command to search Bing finished"
                    },
                    searchFinishedFiles: {
                        id: "browsingMessage.command.search.finished.files",
                        defaultMessage: "Searched files: <bold>“{searchQuery}”</bold>",
                        description: "Browsing command to search files finished"
                    },
                    searchError: {
                        id: "browsingMessage.command.search.error",
                        defaultMessage: "Search failed",
                        description: "Browsing command to search the web failed"
                    },
                    clickInProgressForUrl: {
                        id: "browsingMessage.command.click.inProgressForUrl",
                        defaultMessage: "Clicking on {url}",
                        description: "Browsing command to click on a link is in progress"
                    },
                    clickInProgress: {
                        id: "browsingMessage.command.click.inProgress",
                        defaultMessage: "Clicking…",
                        description: "Browsing command to click on a link is in progress"
                    },
                    openFileInProgress: {
                        id: "browsingMessage.command.openFile.inProgress",
                        defaultMessage: "Opening a file...",
                        description: "Browsing command to click into a file is in progress"
                    },
                    clickFinished: {
                        id: "browsingMessage.command.click.finished",
                        defaultMessage: "Clicked on a link",
                        description: "Browsing command to click on a link finished"
                    },
                    openFileFinished: {
                        id: "browsingMessage.command.openFile.finished",
                        defaultMessage: "Opened a file",
                        description: "Browsing command to click into a file finished"
                    },
                    clickFinishedWithLink: {
                        id: "browsingMessage.command.click.finishedWithLink",
                        defaultMessage: "Clicked on:",
                        description: "Browsing command to click on a link finished. The link that was clicked will be displayed after the :"
                    },
                    openFileFinishedWithLink: {
                        id: "browsingMessage.command.openFile.finishedWithLink",
                        defaultMessage: "Opened:",
                        description: "Browsing command to click into a file finished. The file that was opened will be displayed after the :"
                    },
                    clickError: {
                        id: "browsingMessage.command.click.error",
                        defaultMessage: "Click failed",
                        description: "Browsing command to click on a link failed"
                    },
                    openFileError: {
                        id: "browsingMessage.command.openFile.error",
                        defaultMessage: "Opening file failed",
                        description: "Browsing command to click on a link failed"
                    },
                    quote: {
                        id: "browsingMessage.command.quote",
                        defaultMessage: "Reading content",
                        description: "Browsing command to read a specific quote from a page"
                    },
                    quoteError: {
                        id: "browsingMessage.command.quote.error",
                        defaultMessage: "Reading content failed",
                        description: "Browsing command to read a specific quote from a page failed"
                    },
                    error: {
                        id: "browsingMessage.command.error",
                        defaultMessage: "Trying something new",
                        description: "Browsing command when there was an error"
                    },
                    back: {
                        id: "browsingMessage.command.back",
                        defaultMessage: "Going back",
                        description: "Browsing command to go back to the last page"
                    },
                    backError: {
                        id: "browsingMessage.command.back.error",
                        defaultMessage: "Going back failed",
                        description: "Browsing command to go back to the last page failed"
                    },
                    scroll: {
                        id: "browsingMessage.command.scroll",
                        defaultMessage: "Scrolling page",
                        description: "Browsing command to scroll down on a page"
                    },
                    scrollError: {
                        id: "browsingMessage.command.scroll.error",
                        defaultMessage: "Scroll failed",
                        description: "Browsing command to scroll down on a page failed"
                    },
                    pagesViewed: {
                        id: "browsingMessage.pagesViewed",
                        defaultMessage: "Viewed {itemCount, plural, =0 {no pages} one {# page} other {# pages}}",
                        description: "Browsing command to scroll down on a page failed"
                    }
                }),
                n1 = k.memo(function(e) {
                    var t = e.messages,
                        n = e.isComplete,
                        a = e.isRetrieval,
                        r = (0, S.hz)(),
                        i = t.map(function(e) {
                            return e.message
                        }),
                        s = i.map(function(e, t) {
                            if (e.author.role !== t6.uU.Tool || t > 0 && al(e) && al(i[t - 1])) return null;
                            if ("browser_one_box" === e.author.name) return {
                                type: "search",
                                didError: "system_error" === e.content.content_type,
                                message: e
                            };
                            var n = e.metadata;
                            if (!n) return null;
                            var a = n.command,
                                r = n.status;
                            return a ? {
                                type: a,
                                status: r,
                                didError: "system_error" === e.content.content_type,
                                message: e
                            } : null
                        }).filter(Boolean),
                        o = s.map(function(e, t) {
                            return (0, y.jsx)(n2, {
                                command: e,
                                isRetrieval: a
                            }, t)
                        }),
                        l = (0, B._)((0, k.useState)(null), 2),
                        c = l[0],
                        u = l[1],
                        d = null;
                    if (n) {
                        o.push((0, y.jsx)(an, {
                            isRetrieval: a
                        }, "finished"));
                        var f = s.filter(function(e) {
                            return !e.didError && ("click" === e.type || "open_url" === e.type)
                        });
                        d = a ? (0, y.jsx)(an, {
                            isRetrieval: a,
                            compact: !0
                        }) : (0, y.jsx)(an, {
                            isRetrieval: a,
                            compact: !0,
                            message: (0, y.jsx)(C.Z, (0, U._)((0, v._)({}, n0.pagesViewed), {
                                values: {
                                    itemCount: f.length
                                }
                            }))
                        })
                    } else 0 === o.length ? (o.push((0, y.jsx)(at, {
                        isRetrieval: a
                    }, "waiting")), d = (0, y.jsx)(at, {
                        isRetrieval: a,
                        compact: !0
                    })) : "finished" === s[s.length - 1].status && o.push((0, y.jsx)(ai, {
                        icon: M.Wqx,
                        isRetrieval: a,
                        children: (0, y.jsx)(C.Z, (0, v._)({}, n0.thinking))
                    }, "thinking"));
                    d || (d = (0, y.jsx)(n2, {
                        command: s[s.length - 1],
                        isRetrieval: a,
                        compact: !0
                    }));
                    var g = r.has(ed.UG) && !n ? function(e) {
                        var t, n = e.reverse().find(function(e) {
                            return e.author.role === t6.uU.Assistant
                        });
                        if (!n) return null;
                        for (var a = (0, ne.RR)(n), r = /^#\s*(.*)/gm, i = []; null !== (t = r.exec(a));) i.push(t[1]);
                        return i.length > 0 ? i.join("\n") : null
                    }(i) : null;
                    return a ? (0, y.jsxs)(nJ, {
                        isComplete: n,
                        results: (0, y.jsx)(nX, {
                            className: "text-xs",
                            children: o
                        }),
                        children: [null != g && (0, y.jsx)("div", {
                            className: "mb-2 whitespace-pre-wrap font-medium",
                            children: g
                        }), d]
                    }) : (0, y.jsxs)(nz, {
                        isComplete: n,
                        results: (0, y.jsx)("div", {
                            className: "flex flex-col",
                            children: o
                        }),
                        onNewLoop: function() {
                            u(d)
                        },
                        children: [null != g && (0, y.jsx)("div", {
                            className: "mb-2 whitespace-pre-wrap font-medium",
                            children: g
                        }), n ? d : null != c ? c : d]
                    })
                });

            function n2(e) {
                var t = e.command,
                    n = e.isRetrieval,
                    a = e.compact;
                if (t.didError) {
                    var r, i, s = null === (r = t.message.metadata) || void 0 === r ? void 0 : null === (i = r._cite_metadata) || void 0 === i ? void 0 : i.metadata_list[0];
                    return (0, y.jsx)(n9, {
                        isRetrieval: n,
                        commandType: t.type,
                        citationMetadata: s
                    })
                }
                switch (t.type) {
                    case "search":
                        var o, l, c, u, d = "browser_one_box" === t.message.author.name ? null === (o = t.message.metadata) || void 0 === o ? void 0 : null === (l = o._cite_metadata) || void 0 === l ? void 0 : l.original_query : null === (c = t.message.metadata) || void 0 === c ? void 0 : null === (u = c.args) || void 0 === u ? void 0 : u[0];
                        if (null == d) return null;
                        return (0, y.jsx)(n3, {
                            searchQuery: d,
                            isComplete: "finished" === t.status,
                            isRetrieval: n,
                            compact: a
                        });
                    case "click":
                    case "open_url":
                        var f, g, m = null === (f = t.message.metadata) || void 0 === f ? void 0 : null === (g = f._cite_metadata) || void 0 === g ? void 0 : g.metadata_list[0];
                        return (0, y.jsx)(n5, {
                            isRetrieval: n,
                            citationMetadata: m,
                            compact: a
                        });
                    case "quote":
                    case "quote_full":
                        var h, p, x = null === (h = t.message.metadata) || void 0 === h ? void 0 : null === (p = h._cite_metadata) || void 0 === p ? void 0 : p.metadata_list[0];
                        return (0, y.jsx)(n8, {
                            isRetrieval: n,
                            compact: a,
                            citationMetadata: x
                        });
                    case "back":
                        var v, b, j = null === (v = t.message.metadata) || void 0 === v ? void 0 : null === (b = v._cite_metadata) || void 0 === b ? void 0 : b.metadata_list[0];
                        return (0, y.jsx)(n7, {
                            isRetrieval: n,
                            compact: a,
                            citationMetadata: j
                        });
                    case "scroll":
                        var w, k, M = null === (w = t.message.metadata) || void 0 === w ? void 0 : null === (k = w._cite_metadata) || void 0 === k ? void 0 : k.metadata_list[0];
                        return (0, y.jsx)(n6, {
                            isRetrieval: n,
                            compact: a,
                            citationMetadata: M
                        });
                    default:
                        return null
                }
            }

            function n3(e) {
                var t = e.searchQuery,
                    n = e.isComplete,
                    a = e.isRetrieval,
                    r = e.compact,
                    i = T.ZP.getBingLink({
                        query: t
                    });
                if (!a) return (0, y.jsxs)(ai, {
                    isRetrieval: a,
                    icon: M.jRj,
                    compact: r,
                    iconBase: (0, y.jsx)(ep.jE, {
                        icon: null
                    }),
                    link: i,
                    children: ["“", t, "”"]
                });
                var s = n0.searchInProgressFiles,
                    o = n0.searchFinishedFiles;
                return (0, y.jsx)(ao, {
                    icon: M.jRj,
                    compact: r,
                    children: n ? (0, y.jsx)(C.Z, (0, U._)((0, v._)({}, o), {
                        values: {
                            bold: function(e) {
                                return (0, y.jsx)("span", {
                                    className: "font-medium",
                                    children: e
                                })
                            },
                            searchQuery: t
                        }
                    })) : (0, y.jsx)(C.Z, (0, U._)((0, v._)({}, s), {
                        values: {
                            bold: function(e) {
                                return (0, y.jsx)("span", {
                                    className: "font-medium",
                                    children: e
                                })
                            },
                            searchQuery: t
                        }
                    }))
                })
            }
            var n4 = function(e) {
                return null == e ? "" : (null == e ? void 0 : e.type) !== "file" ? e.url : ""
            };

            function n5(e) {
                var t = e.isRetrieval,
                    n = e.citationMetadata,
                    a = e.compact,
                    r = t ? n0.openFileInProgress : n0.clickInProgress;
                if (!t) {
                    var i = n ? (0, y.jsx)(ar, {
                            citationMetadata: n,
                            size: 20
                        }) : null,
                        s = n4(n),
                        o = null == s ? void 0 : s.replace(/^https?:\/\/(www.)?/, "");
                    return null != s && (r = n0.clickInProgressForUrl), (0, y.jsx)(ai, {
                        isRetrieval: t,
                        icon: ep.G$,
                        iconBase: i,
                        compact: a,
                        link: s,
                        children: (0, y.jsx)(C.Z, (0, U._)((0, v._)({}, r), {
                            values: {
                                url: o
                            }
                        }))
                    })
                }
                var l = t ? n0.openFileFinished : n0.clickFinished,
                    c = t ? n0.openFileFinishedWithLink : n0.clickFinishedWithLink;
                return (0, y.jsx)(ao, {
                    icon: M.NOg,
                    compact: a,
                    children: n ? !0 === a ? (0, y.jsx)(C.Z, (0, v._)({}, l)) : (0, y.jsxs)("div", {
                        className: "flex items-center gap-2",
                        children: [(0, y.jsx)(C.Z, (0, v._)({}, c)), (0, y.jsx)("div", {
                            className: "rounded border border-black/10 bg-white px-2 py-1",
                            children: (0, y.jsx)(nS, {
                                citationMetadata: n,
                                onClick: function() {
                                    if (void 0 === n.type || "webpage" === n.type) {
                                        var e;
                                        nC.m9.logEvent("chatgpt_browsing_click_link", n.url, {
                                            domain: null !== (e = nM.get(new URL(n.url).hostname)) && void 0 !== e ? e : ""
                                        })
                                    }
                                }
                            })
                        })]
                    }) : (0, y.jsx)(C.Z, (0, v._)({}, r))
                })
            }

            function n8(e) {
                var t = e.compact,
                    n = e.citationMetadata,
                    a = e.isRetrieval,
                    r = n ? (0, y.jsx)(ar, {
                        citationMetadata: n
                    }) : void 0;
                return (0, y.jsx)(ai, {
                    iconBase: r,
                    icon: a ? M.SnF : void 0,
                    compact: t,
                    isRetrieval: a,
                    children: (0, y.jsx)(C.Z, (0, v._)({}, n0.quote))
                })
            }

            function n7(e) {
                var t = e.compact,
                    n = e.citationMetadata,
                    a = e.isRetrieval,
                    r = n ? (0, y.jsx)(ar, {
                        citationMetadata: n,
                        size: 20
                    }) : null;
                return (0, y.jsx)(ai, {
                    isRetrieval: a,
                    icon: a ? M.cww : ep.o0,
                    compact: t,
                    iconBase: r,
                    children: (0, y.jsx)(C.Z, (0, v._)({}, n0.back))
                })
            }

            function n6(e) {
                var t = e.compact,
                    n = e.citationMetadata,
                    a = e.isRetrieval,
                    r = n ? (0, y.jsx)(ar, {
                        citationMetadata: n,
                        size: 20
                    }) : null;
                return (0, y.jsx)(ai, {
                    icon: a ? M.nlg : ep.NV,
                    compact: t,
                    iconBase: r,
                    isRetrieval: a,
                    children: (0, y.jsx)(C.Z, (0, v._)({}, n0.scroll))
                })
            }

            function n9(e) {
                var t, n = e.commandType,
                    a = e.compact,
                    r = e.citationMetadata,
                    i = e.isRetrieval;
                if (!i) return (0, y.jsx)(ae, {
                    compact: a,
                    citationMetadata: r,
                    isRetrieval: i
                });
                switch (n) {
                    case "search":
                        t = n0.searchError;
                        break;
                    case "click":
                    case "open_url":
                        t = n0.clickError;
                        break;
                    case "quote":
                    case "quote_full":
                        t = n0.quoteError;
                        break;
                    case "back":
                        t = n0.backError;
                        break;
                    case "scroll":
                        t = n0.scrollError;
                        break;
                    default:
                        return null
                }
                return (0, y.jsx)(ao, {
                    icon: M.bcx,
                    compact: a,
                    children: (0, y.jsx)(C.Z, (0, v._)({}, t))
                })
            }

            function ae(e) {
                var t = e.compact,
                    n = e.citationMetadata,
                    a = e.isRetrieval,
                    r = n ? (0, y.jsx)(ar, {
                        citationMetadata: n,
                        size: 20
                    }) : null;
                return (0, y.jsx)(ai, {
                    icon: ep.o0,
                    compact: t,
                    iconBase: r,
                    isRetrieval: a,
                    children: (0, y.jsx)(C.Z, (0, v._)({}, n0.error))
                })
            }

            function at(e) {
                var t = e.isRetrieval,
                    n = e.compact,
                    a = t ? n0.startingFileSearch : n0.startingBrowsing;
                return (0, y.jsx)(ai, {
                    compact: n,
                    iconBase: (0, y.jsx)(aa, {}),
                    isRetrieval: t,
                    children: (0, y.jsx)(C.Z, (0, v._)({}, a))
                })
            }

            function an(e) {
                var t = e.message,
                    n = e.isRetrieval,
                    a = e.compact;
                if (!t) {
                    var r = n ? n0.finishedFileSearch : n0.finishedBrowsing;
                    return (0, y.jsx)(ai, {
                        iconBase: (0, y.jsx)(aa, {}),
                        icon: n ? M._rq : void 0,
                        compact: a,
                        isComplete: !0,
                        isRetrieval: n,
                        children: (0, y.jsx)(C.Z, (0, v._)({}, r))
                    })
                }
                return (0, y.jsx)(ai, {
                    iconBase: (0, y.jsx)(aa, {}),
                    icon: n ? M._rq : void 0,
                    compact: a,
                    isComplete: !0,
                    isRetrieval: n,
                    children: t
                })
            }
            var aa = function() {
                    return (0, y.jsx)("div", {
                        className: "flex h-8 w-8 items-center justify-center rounded-md border border-black/10 bg-[rgba(30,203,239,0.07)]",
                        children: (0, y.jsx)(ep.ZP, {
                            icon: ep.jE,
                            size: "medium"
                        })
                    })
                },
                ar = function(e) {
                    var t = e.citationMetadata,
                        n = e.size,
                        a = void 0 === n ? 24 : n;
                    return (0, y.jsx)("div", {
                        className: "flex items-center justify-center overflow-hidden rounded-sm bg-[rgba(30,203,239,0.07)]",
                        style: {
                            width: a,
                            height: a
                        },
                        children: (0, y.jsx)(n_, {
                            url: n4(t),
                            size: a
                        })
                    })
                };

            function ai(e) {
                var t = e.isRetrieval,
                    n = (0, b._)(e, ["isRetrieval"]);
                return t ? (0, y.jsx)(ao, (0, v._)({}, n)) : (0, y.jsx)(as, (0, v._)({}, n))
            }

            function as(e) {
                var t = e.children,
                    n = e.icon,
                    a = e.compact,
                    r = e.iconBase,
                    i = e.link,
                    s = e.isComplete,
                    o = null != n ? null != r ? (0, y.jsxs)(y.Fragment, {
                        children: [(0, y.jsx)("div", {
                            className: "absolute left-1 top-1 h-5 w-5",
                            children: r
                        }), (0, y.jsx)(ep.ZP, {
                            icon: n,
                            className: "absolute bottom-1 right-1",
                            size: "small"
                        })]
                    }) : (0, y.jsx)(ep.ZP, {
                        icon: n,
                        size: "xlarge"
                    }) : (0, y.jsx)("div", {
                        className: "flex h-full w-full items-center justify-center",
                        children: r
                    }),
                    l = (0, y.jsxs)("div", {
                        className: (0, J.default)("flex w-full items-center gap-[10px] px-3 py-2", !0 !== a && "min-h-[24px]"),
                        children: [(0, y.jsx)("div", {
                            className: "relative flex h-[34px] w-[34px] shrink-0 items-center justify-center",
                            children: o
                        }), (0, y.jsxs)("div", {
                            className: "flex shrink flex-col overflow-hidden text-sm text-gray-900",
                            children: [(0, y.jsx)("div", {
                                className: "font-semibold",
                                children: s ? (0, y.jsx)(C.Z, (0, v._)({}, n0.searchFinishedTitle)) : (0, y.jsx)(C.Z, (0, v._)({}, n0.searchInProgressTitle))
                            }), (0, y.jsx)("div", {
                                className: "truncate opacity-60",
                                children: t
                            })]
                        })]
                    });
                return a || null == i ? l : (0, y.jsx)("a", {
                    href: i,
                    target: "_blank",
                    rel: "noreferrer",
                    className: "block hover:bg-black/5 dark:hover:bg-gray-800",
                    children: (0, y.jsxs)("div", {
                        className: "flex items-center justify-between",
                        children: [(0, y.jsx)("div", {
                            className: "shrink overflow-hidden",
                            children: l
                        }), (0, y.jsx)("div", {
                            className: "mr-3 shrink-0 text-gray-600/50",
                            children: (0, y.jsx)(ep.ZP, {
                                icon: M.Tfp
                            })
                        })]
                    })
                })
            }

            function ao(e) {
                var t = e.children,
                    n = e.icon,
                    a = e.compact;
                return (0, y.jsxs)("div", {
                    className: (0, J.default)("flex items-center gap-2", !0 !== a && "min-h-[24px]"),
                    children: [(0, y.jsx)(ep.ZP, {
                        icon: null != n ? n : null,
                        className: "shrink-0"
                    }), (0, y.jsx)("div", {
                        children: t
                    })]
                })
            }

            function al(e) {
                var t, n;
                return (null === (t = e.metadata) || void 0 === t ? void 0 : t.command) === "quote" || (null === (n = e.metadata) || void 0 === n ? void 0 : n.command) === "quote_full"
            }
            var ac = k.memo(function(e) {
                var t, n = e.message,
                    a = e.isCollapsed,
                    r = (0, eo.Z)(),
                    i = null === (t = n.message.metadata) || void 0 === t ? void 0 : t.aggregate_result;
                if (!i) return console.error("Corrupt code execution result message"), null;
                var s = i.messages.filter(ah),
                    o = a && s.length > 0,
                    l = a && null != i.final_expression_output,
                    c = a && null != i.in_kernel_exception,
                    u = !a && i.messages.filter(ag).length > 0;
                return (0, y.jsxs)(y.Fragment, {
                    children: [o && (0, y.jsx)(au, {
                        label: "STDOUT/STDERR",
                        output: s.map(function(e, t) {
                            return (0, y.jsx)("span", {
                                className: "stderr" === e.stream_name ? "text-red-500" : "",
                                children: e.text
                            }, "".concat(t))
                        })
                    }), l && (0, y.jsx)(au, {
                        label: r.formatMessage(ap.resultLabel),
                        output: i.final_expression_output
                    }), c && (0, y.jsx)("div", {
                        className: "overflow-auto rounded border-t border-gray-500 bg-black text-white",
                        children: (0, y.jsx)("div", {
                            className: "border-l-4 border-red-500 p-2 text-xs",
                            children: (0, y.jsx)("div", {
                                className: "scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-700 flex max-h-64 flex-col-reverse",
                                children: (0, y.jsx)("pre", {
                                    className: "shrink-0",
                                    children: i.in_kernel_exception.traceback.join("")
                                })
                            })
                        })
                    }), u && i.messages.filter(ag).map(function(e, t) {
                        return (0, y.jsx)("div", {
                            className: "empty:hidden",
                            children: (0, y.jsx)(am, {
                                jupyterMessage: e
                            })
                        }, t)
                    })]
                })
            });

            function au(e) {
                var t = e.label,
                    n = e.output;
                return (0, y.jsxs)("div", {
                    className: "rounded-md bg-black p-4 text-xs",
                    children: [(0, y.jsx)("div", {
                        className: "mb-1 text-gray-400",
                        children: t
                    }), (0, y.jsx)("div", {
                        className: "scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-700 prose flex max-h-64 flex-col-reverse overflow-auto text-white",
                        children: (0, y.jsx)("pre", {
                            className: "shrink-0",
                            children: n
                        })
                    })]
                })
            }
            var ad = Math.log(151) / Math.log(1.5);

            function af(e) {
                var t = e.fileId,
                    n = (0, B._)((0, k.useState)(""), 2),
                    a = n[0],
                    r = n[1];
                return (0, nt.a)({
                    queryKey: ["getFileDownloadLink", t],
                    queryFn: function() {
                        return T.ZP.getFileDownloadLink(t).then(function(e) {
                            return (null == e ? void 0 : e.status) === "success" && r(e.download_url), e
                        })
                    },
                    refetchInterval: function(e, t) {
                        var n = t.state.dataUpdateCount;
                        return (null == e ? void 0 : e.status) !== "success" && !(n > ad) && "error" !== t.state.status && 100 * Math.pow(1.5, n)
                    }
                }), (0, y.jsxs)(y.Fragment, {
                    children: [" ", a && (0, y.jsx)("img", {
                        src: a
                    }), " "]
                })
            }

            function ag(e) {
                return "image" === e.message_type || "image_url" in e && (0, tr.$H)(e.image_url + "")
            }

            function am(e) {
                var t = e.jupyterMessage;
                if (null !== (0, k.useContext)(Z.gB)) return (0, y.jsxs)("div", {
                    className: "flex h-52 w-full max-w-xs flex-col items-center justify-center gap-2 rounded-md border-black/5 bg-gray-100 p-7 text-center text-gray-500 dark:border-white/10",
                    children: [(0, y.jsx)(ep.ZP, {
                        icon: M.LFN,
                        size: "medium"
                    }), (0, y.jsx)(C.Z, (0, v._)({}, ap.imageNotSupported))]
                });
                if (null != t.image_payload) return (0, y.jsx)("img", {
                    src: "data:image/png;base64,".concat(t.image_payload)
                });
                if (null != t.image_url) {
                    var n = (0, tr.Iy)(t.image_url);
                    return (0, y.jsx)(af, {
                        fileId: n
                    })
                }
                return null
            }

            function ah(e) {
                return "stream" === e.message_type
            }
            var ap = (0, _.vU)({
                    imageNotSupported: {
                        id: "CodeExecutionOutputMessage.imageNotSupported",
                        defaultMessage: "Image output is not supported in a shared chat",
                        description: "Message shown when an image is output in a shared thread"
                    },
                    resultLabel: {
                        id: "CodeExecutionOutputMessage.resultLabel",
                        defaultMessage: "RESULT",
                        description: "Label show with the code execution result output"
                    }
                }),
                ax = n(77997),
                av = n(31636),
                ab = n(47567),
                ay = n(61110),
                aj = n(55975),
                aw = n(46050),
                ak = n(29874),
                aM = n(8449),
                aC = n(15472),
                a_ = {
                    tokenize: function(e, t, n) {
                        var a = function(t) {
                                return t === aj.q.eof || (0, ak.Ch)(t) ? r(t) : (e.enter("mathFlowFenceMeta"), e.enter(aC.V.chunkString, {
                                    contentType: aM._.contentTypeString
                                }), function t(a) {
                                    return a === aj.q.eof || (0, ak.Ch)(a) ? (e.exit(aC.V.chunkString), e.exit("mathFlowFenceMeta"), r(a)) : a === aj.q.rightSquareBracket ? n(a) : (e.consume(a), t)
                                }(t))
                            },
                            r = function(n) {
                                return e.exit("mathFlowFence"), o.interrupt ? t(n) : function t(n) {
                                    return n === aj.q.eof ? i(n) : (0, ak.Ch)(n) ? e.attempt(aT, e.attempt({
                                        tokenize: s,
                                        partial: !0
                                    }, i, c ? (0, aw.f)(e, t, aC.V.linePrefix, c + 1) : t), i)(n) : (e.enter("mathFlowValue"), function n(a) {
                                        return a === aj.q.eof || (0, ak.Ch)(a) ? (e.exit("mathFlowValue"), t(a)) : (e.consume(a), n)
                                    }(n))
                                }(n)
                            },
                            i = function(n) {
                                return e.exit("mathFlow"), t(n)
                            },
                            s = function(e, t, n) {
                                var a = [];
                                return (0, aw.f)(e, function(t) {
                                    return e.enter("mathFlowFence"), e.enter("mathFlowFenceSequence"),
                                        function t(i) {
                                            return i === aj.q.backslash && 0 === a.length || i === aj.q.rightSquareBracket && a[0] === aj.q.backslash ? (e.consume(i), a.push(i), t) : a < u ? n(i) : (e.exit("mathFlowFenceSequence"), (0, aw.f)(e, r, aC.V.whitespace)(i))
                                        }(t)
                                }, aC.V.linePrefix, aM._.tabSize);

                                function r(a) {
                                    return a === aj.q.eof || (0, ak.Ch)(a) ? (e.exit("mathFlowFence"), t(a)) : n(a)
                                }
                            },
                            o = this,
                            l = this.events[this.events.length - 1],
                            c = l && l[1].type === aC.V.linePrefix ? l[2].sliceSerialize(l[1], !0).length : 0,
                            u = [];
                        return function(t) {
                            return aj.q.backslash, e.enter("mathFlow"), e.enter("mathFlowFence"), e.enter("mathFlowFenceSequence"),
                                function t(r) {
                                    return r === aj.q.backslash || r === aj.q.leftSquareBracket && u[0] === aj.q.backslash ? (e.consume(r), u.push(r), t) : (e.exit("mathFlowFenceSequence"), u.length < 2 ? n(r) : (0, aw.f)(e, a, aC.V.whitespace)(r))
                                }(t)
                        }
                    },
                    concrete: !0
                },
                aT = {
                    tokenize: function(e, t, n) {
                        var a = function(e) {
                                return r.parser.lazy[r.now().line] ? n(e) : t(e)
                            },
                            r = this;
                        return function(t) {
                            return e.enter(aC.V.lineEnding), e.consume(t), e.exit(aC.V.lineEnding), a
                        }
                    },
                    partial: !0
                },
                aP = {
                    tokenize: function(e, t, n) {
                        var a = function(t) {
                                return t === aj.q.eof || (0, ak.Ch)(t) ? r(t) : (e.enter("mathFlowFenceMeta"), e.enter(aC.V.chunkString, {
                                    contentType: aM._.contentTypeString
                                }), function t(a) {
                                    return a === aj.q.eof || (0, ak.Ch)(a) ? (e.exit(aC.V.chunkString), e.exit("mathFlowFenceMeta"), r(a)) : a === aj.q.dollarSign ? n(a) : (e.consume(a), t)
                                }(t))
                            },
                            r = function(n) {
                                return e.exit("mathFlowFence"), o.interrupt ? t(n) : function t(n) {
                                    return n === aj.q.eof ? i(n) : (0, ak.Ch)(n) ? e.attempt(aN, e.attempt({
                                        tokenize: s,
                                        partial: !0
                                    }, i, c ? (0, aw.f)(e, t, aC.V.linePrefix, c + 1) : t), i)(n) : (e.enter("mathFlowValue"), function n(a) {
                                        return a === aj.q.eof || (0, ak.Ch)(a) ? (e.exit("mathFlowValue"), t(a)) : (e.consume(a), n)
                                    }(n))
                                }(n)
                            },
                            i = function(n) {
                                return e.exit("mathFlow"), t(n)
                            },
                            s = function(e, t, n) {
                                var a = 0;
                                return (0, aw.f)(e, function(t) {
                                    return e.enter("mathFlowFence"), e.enter("mathFlowFenceSequence"),
                                        function t(i) {
                                            return i === aj.q.dollarSign ? (e.consume(i), a++, t) : a < u ? n(i) : (e.exit("mathFlowFenceSequence"), (0, aw.f)(e, r, aC.V.whitespace)(i))
                                        }(t)
                                }, aC.V.linePrefix, aM._.tabSize);

                                function r(a) {
                                    return a === aj.q.eof || (0, ak.Ch)(a) ? (e.exit("mathFlowFence"), t(a)) : n(a)
                                }
                            },
                            o = this,
                            l = o.events[o.events.length - 1],
                            c = l && l[1].type === aC.V.linePrefix ? l[2].sliceSerialize(l[1], !0).length : 0,
                            u = 0;
                        return function(t) {
                            return aj.q.dollarSign, e.enter("mathFlow"), e.enter("mathFlowFence"), e.enter("mathFlowFenceSequence"),
                                function t(r) {
                                    return r === aj.q.dollarSign ? (e.consume(r), u++, t) : (e.exit("mathFlowFenceSequence"), u < 2 ? n(r) : (0, aw.f)(e, a, aC.V.whitespace)(r))
                                }(t)
                        }
                    },
                    concrete: !0
                },
                aN = {
                    tokenize: function(e, t, n) {
                        var a = function(e) {
                                return r.parser.lazy[r.now().line] ? n(e) : t(e)
                            },
                            r = this;
                        return function(t) {
                            return (0, ak.Ch)(t), e.enter(aC.V.lineEnding), e.consume(t), e.exit(aC.V.lineEnding), a
                        }
                    },
                    partial: !0
                };

            function aS(e) {
                var t, n, a = e.length - 4,
                    r = 3;
                if ((e[3][1].type === aC.V.lineEnding || "space" === e[r][1].type) && (e[a][1].type === aC.V.lineEnding || "space" === e[a][1].type)) {
                    for (t = r; ++t < a;)
                        if ("mathTextData" === e[t][1].type) {
                            e[a][1].type = "mathTextPadding", e[r][1].type = "mathTextPadding", r += 2, a -= 2;
                            break
                        }
                }
                for (t = r - 1, a++; ++t <= a;) void 0 === n ? t !== a && e[t][1].type !== aC.V.lineEnding && (n = t) : (t === a || e[t][1].type === aC.V.lineEnding) && (e[n][1].type = "mathTextData", t !== n + 2 && (e[n][1].end = e[t - 1][1].end, e.splice(n + 2, t - n - 2), a -= t - n - 2, t = n + 2), n = void 0);
                return e
            }

            function aZ(e) {
                return e !== aj.q.backslash || this.events[this.events.length - 1][1].type === aC.V.characterEscape
            }

            function aI(e) {
                var t, n, a = e.length - 4,
                    r = 3;
                if ((e[3][1].type === aC.V.lineEnding || "space" === e[r][1].type) && (e[a][1].type === aC.V.lineEnding || "space" === e[a][1].type)) {
                    for (t = r; ++t < a;)
                        if ("mathTextData" === e[t][1].type) {
                            e[a][1].type = "mathTextPadding", e[r][1].type = "mathTextPadding", r += 2, a -= 2;
                            break
                        }
                }
                for (t = r - 1, a++; ++t <= a;) void 0 === n ? t !== a && e[t][1].type !== aC.V.lineEnding && (n = t) : (t === a || e[t][1].type === aC.V.lineEnding) && (e[n][1].type = "mathTextData", t !== n + 2 && (e[n][1].end = e[t - 1][1].end, e.splice(n + 2, t - n - 2), a -= t - n - 2, t = n + 2), n = void 0);
                return e
            }

            function aD(e) {
                return e !== aj.q.dollarSign || this.events[this.events.length - 1][1].type === aC.V.characterEscape
            }

            function aB(e) {
                var t, n, a = e.length - 4,
                    r = 3;
                if ((e[3][1].type === aC.V.lineEnding || "space" === e[r][1].type) && (e[a][1].type === aC.V.lineEnding || "space" === e[a][1].type)) {
                    for (t = r; ++t < a;)
                        if ("mathTextData" === e[t][1].type) {
                            e[a][1].type = "mathTextPadding", e[r][1].type = "mathTextPadding", r += 2, a -= 2;
                            break
                        }
                }
                for (t = r - 1, a++; ++t <= a;) void 0 === n ? t !== a && e[t][1].type !== aC.V.lineEnding && (n = t) : (t === a || e[t][1].type === aC.V.lineEnding) && (e[n][1].type = "mathTextData", t !== n + 2 && (e[n][1].end = e[t - 1][1].end, e.splice(n + 2, t - n - 2), a -= t - n - 2, t = n + 2), n = void 0);
                return e
            }

            function aF(e) {
                return e !== aj.q.backslash || this.events[this.events.length - 1][1].type === aC.V.characterEscape
            }
            var aR = n(67726),
                aL = n(63395),
                aE = n(93362),
                aA = n(45369),
                aq = n(42426),
                aU = n(65028),
                aO = n(88366),
                az = n(11084);

            function aW() {
                var e = (0, G._)(["bg-black rounded-md"]);
                return aW = function() {
                    return e
                }, e
            }

            function aH() {
                var e = (0, G._)(["flex items-center relative text-gray-200 bg-gray-800 px-4 py-2 text-xs font-sans justify-between rounded-t-md ", ""]);
                return aH = function() {
                    return e
                }, e
            }

            function aQ() {
                var e = (0, G._)(["p-4 overflow-y-auto"]);
                return aQ = function() {
                    return e
                }, e
            }

            function aV() {
                var e = (0, G._)(["", ""]);
                return aV = function() {
                    return e
                }, e
            }
            var a$ = el.Z.div(aW()),
                aG = el.Z.div(aH(), function(e) {
                    return e.$isMessageRedesign && "dark:bg-gray-900"
                }),
                aJ = el.Z.div(aQ()),
                aY = el.Z.code(aV(), function(e) {
                    return e.$shouldWrap ? "!whitespace-pre-wrap" : "!whitespace-pre"
                });

            function aK(e) {
                var t = e.children,
                    n = e.className,
                    a = e.language,
                    r = e.content,
                    i = (0, k.useCallback)(function() {
                        (0, az.S)(r)
                    }, [r]);
                return (0, y.jsx)(aX, {
                    title: a,
                    headerDecoration: (0, y.jsx)(nk.Z, {
                        buttonText: "Copy code",
                        onCopy: i
                    }),
                    className: "mb-4",
                    codeClassName: n,
                    children: t
                })
            }

            function aX(e) {
                var t = e.children,
                    n = e.title,
                    a = e.headerDecoration,
                    r = e.shouldWrapCode,
                    i = e.className,
                    s = e.codeClassName,
                    o = (0, S.hz)().has(ed.FZ);
                return (0, y.jsxs)(a$, {
                    className: i,
                    children: [(0, y.jsxs)(aG, {
                        $isMessageRedesign: o,
                        children: [n && (0, y.jsx)("span", {
                            children: n
                        }), a]
                    }), (0, y.jsx)(aJ, {
                        children: (0, y.jsx)(aY, {
                            $shouldWrap: void 0 !== r && r,
                            className: s,
                            children: t
                        })
                    })]
                })
            }
            var a0 = "sandbox:";

            function a1(e) {
                var t, n, a, r = e.messageId,
                    i = e.clientThreadId,
                    s = e.href,
                    o = (0, b._)(e, ["messageId", "clientThreadId", "href"]),
                    l = null !== (0, k.useContext)(Z.gB),
                    c = (0, j.NL)(),
                    u = (0, B._)((0, k.useState)(!1), 2),
                    d = u[0],
                    f = u[1],
                    g = s.substring(a0.length),
                    m = P.tQ.getServerThreadId(i),
                    h = (0, eo.Z)(),
                    p = (0, k.useCallback)(function(e) {
                        var t = document.createElement("a");
                        t.href = e, t.click(), f(!1)
                    }, []),
                    x = (t = (0, k.useCallback)(function(e) {
                        f(!1), ti.m.danger(e)
                    }, []), n = (0, tr.VF)(), (0, nt.a)({
                        queryKey: a3(r, g),
                        queryFn: function() {
                            return T.ZP.downloadFromInterpreter(r, m, g).then(function(e) {
                                return (null == e ? void 0 : e.status) === "success" && p(e.download_url), e
                            }).catch(function(e) {
                                var a = n("default_download_link_error", {
                                    fileName: g
                                });
                                throw void 0 !== e.code && (a = n(e.code)), null == t || t(a), e
                            })
                        },
                        enabled: !!(d && !l && r && m && g)
                    })).data,
                    w = (0, k.useCallback)((a = (0, eQ._)(function(e) {
                        return (0, eV.Jh)(this, function(t) {
                            return void 0 !== i && (e.preventDefault(), (void 0 === x || (null == x ? void 0 : x.status) === "error") && c.invalidateQueries({
                                queryKey: a3(r, g)
                            }), (null == x ? void 0 : x.status) == "success" && (null == x ? void 0 : x.download_url) ? p(x.download_url) : f(!0)), [2]
                        })
                    }), function(e) {
                        return a.apply(this, arguments)
                    }), [i, x, c, r, g, p]);
                return (0, y.jsx)(tn.u, {
                    closeOnOutsideClick: !1,
                    delayDuration: 0,
                    label: (0, y.jsxs)("span", {
                        className: "flex items-center gap-1",
                        children: [d ? h.formatMessage(a4.startingDownload) : h.formatMessage(a4.downloadFile), d && (0, y.jsx)(ex.Z, {})]
                    }),
                    side: "top",
                    sideOffset: 4,
                    children: (0, y.jsx)("a", (0, U._)((0, v._)({}, o), {
                        className: "cursor-pointer",
                        onClick: function(e) {
                            return !d && w(e)
                        }
                    }))
                })
            }

            function a2(e) {
                return (0, y.jsx)(tn.u, {
                    closeOnOutsideClick: !1,
                    delayDuration: 0,
                    label: (0, y.jsx)("span", {
                        className: "flex items-center gap-1",
                        children: (0, y.jsx)(C.Z, (0, v._)({}, a4.downloadUnavailable))
                    }),
                    side: "top",
                    sideOffset: 4,
                    children: (0, y.jsx)("span", (0, U._)((0, v._)({}, e), {
                        className: "font-semibold text-gray-500 underline dark:text-gray-300"
                    }))
                })
            }

            function a3(e, t) {
                return ["downloadSandboxLink", e, t]
            }
            var a4 = (0, _.vU)({
                    downloadFile: {
                        id: "SandboxDownload.downloadFile",
                        defaultMessage: "Download file",
                        description: "Tooltip label for downloading a file button"
                    },
                    startingDownload: {
                        id: "SandboxDownload.startingDownload",
                        defaultMessage: "Starting download",
                        description: "Tooltip label for downloading started for file button"
                    },
                    downloadUnavailable: {
                        id: "SandboxDownload.downloadUnavailable",
                        defaultMessage: "File download not supported in a shared chat",
                        description: "Tooltip label indicating file is unavailable to download for shared conversations"
                    }
                }),
                a5 = function(e) {
                    return e.startsWith(a0) ? e : (0, aL.A)(e)
                },
                a8 = [aU.Z, [function() {
                    var e, t, n = function(e, t) {
                            (a[e] ? a[e] : a[e] = []).push(t)
                        },
                        a = this.data();
                    n("micromarkExtensions", {
                        flow: (e = {}, (0, q._)(e, aj.q.dollarSign, aP), (0, q._)(e, aj.q.backslash, a_), e),
                        text: (t = {}, (0, q._)(t, aj.q.dollarSign, {
                            tokenize: function(e, t, n) {
                                var a, r, i = 0;
                                return function(t) {
                                    return e.enter("mathText"), e.enter("mathTextSequence"),
                                        function t(a) {
                                            return a === aj.q.dollarSign ? (e.consume(a), i++, t) : i < 2 ? n(a) : (e.exit("mathTextSequence"), s(a))
                                        }(t)
                                };

                                function s(l) {
                                    return l === aj.q.eof ? n(l) : l === aj.q.dollarSign ? (r = e.enter("mathTextSequence"), a = 0, function n(s) {
                                        return s === aj.q.dollarSign ? (e.consume(s), a++, n) : a === i ? (e.exit("mathTextSequence"), e.exit("mathText"), t(s)) : (r.type = "mathTextData", o(s))
                                    }(l)) : l === aj.q.space ? (e.enter("space"), e.consume(l), e.exit("space"), s) : (0, ak.Ch)(l) ? (e.enter(aC.V.lineEnding), e.consume(l), e.exit(aC.V.lineEnding), s) : (e.enter("mathTextData"), o(l))
                                }

                                function o(t) {
                                    return t === aj.q.eof || t === aj.q.space || t === aj.q.dollarSign || (0, ak.Ch)(t) ? (e.exit("mathTextData"), s(t)) : (e.consume(t), o)
                                }
                            },
                            resolve: aI,
                            previous: aD
                        }), (0, q._)(t, aj.q.backslash, [{
                            tokenize: function(e, t, n) {
                                var a, r = [],
                                    i = [],
                                    s = this;
                                return function(t) {
                                    return aj.q.backslash, aZ.call(s, s.previous) && s.previous, e.enter("mathText"), e.enter("mathTextSequence"),
                                        function t(a) {
                                            return (r.join(","), a === aj.q.backslash && 0 === r.length || a === aj.q.leftParenthesis && 1 === r.length) ? (e.consume(a), r.push(a), t) : r.length < 2 ? n(a) : (e.exit("mathTextSequence"), o(a))
                                        }(t)
                                };

                                function o(s) {
                                    return s === aj.q.eof ? n(s) : s === aj.q.backslash ? (a = e.enter("mathTextSequence"), i = [], function n(s) {
                                        return (r.join(","), s === aj.q.backslash && 0 === i.length || s === aj.q.rightParenthesis && 1 === i.length) ? (e.consume(s), i.push(s), n) : i.length === r.length ? (e.exit("mathTextSequence"), e.exit("mathText"), t(s)) : (a.type = "mathTextData", l(s))
                                    }(s)) : s === aj.q.space ? (e.enter("space"), e.consume(s), e.exit("space"), o) : (0, ak.Ch)(s) ? (e.enter(aC.V.lineEnding), e.consume(s), e.exit(aC.V.lineEnding), o) : (e.enter("mathTextData"), l(s))
                                }

                                function l(t) {
                                    return t === aj.q.eof || t === aj.q.space || t === aj.q.backslash || (0, ak.Ch)(t) ? (e.exit("mathTextData"), o(t)) : (e.consume(t), l)
                                }
                            },
                            resolve: aS,
                            previous: aZ
                        }, {
                            tokenize: function(e, t, n) {
                                var a, r = [],
                                    i = [],
                                    s = this;
                                return function(t) {
                                    return aj.q.backslash, aF.call(s, s.previous) && s.previous, e.enter("mathText"), e.enter("mathTextSequence"),
                                        function t(a) {
                                            return (r.join(","), a === aj.q.backslash && 0 === r.length || a === aj.q.leftSquareBracket && 1 === r.length) ? (e.consume(a), r.push(a), t) : r.length < 2 ? n(a) : (e.exit("mathTextSequence"), o(a))
                                        }(t)
                                };

                                function o(s) {
                                    return s === aj.q.eof ? n(s) : s === aj.q.backslash ? (a = e.enter("mathTextSequence"), i = [], function n(s) {
                                        return (r.join(","), s === aj.q.backslash && 0 === i.length || s === aj.q.rightSquareBracket && 1 === i.length) ? (e.consume(s), i.push(s), n) : i.length === r.length ? (e.exit("mathTextSequence"), e.exit("mathText"), t(s)) : (a.type = "mathTextData", l(s))
                                    }(s)) : s === aj.q.space ? (e.enter("space"), e.consume(s), e.exit("space"), o) : (0, ak.Ch)(s) ? (e.enter(aC.V.lineEnding), e.consume(s), e.exit(aC.V.lineEnding), o) : (e.enter("mathTextData"), l(s))
                                }

                                function l(t) {
                                    return t === aj.q.eof || t === aj.q.space || t === aj.q.backslash || (0, ak.Ch)(t) ? (e.exit("mathTextData"), o(t)) : (e.consume(t), l)
                                }
                            },
                            resolve: aB,
                            previous: aF
                        }]), t)
                    }), n("fromMarkdownExtensions", (0, ay.N)()), n("toMarkdownExtensions", (0, ay.O)())
                }, {
                    singleDollarTextMath: !1
                }]],
                a7 = [
                    [aE.Z, {
                        languages: {
                            mathematica: aR.Z
                        },
                        detect: !0,
                        subset: ["arduino", "bash", "c", "cpp", "csharp", "css", "diff", "go", "graphql", "java", "javascript", "json", "kotlin", "latex", "less", "lua", "makefile", "makefile", "markdown", "matlab", "mathematica", "nginx", "objectivec", "perl", "pgsql", "php-template", "php", "plaintext", "python-repl", "python", "r", "ruby", "rust", "scss", "shell", "sql", "swift", "typescript", "vbnet", "wasm", "xml", "yaml"],
                        ignoreMissing: !0,
                        aliases: {
                            mathematica: "wolfram"
                        }
                    }], aA.Z, [aq.Z, {
                        newlines: !0
                    }]
                ],
                a6 = {
                    code: function(e) {
                        var t = e.inline,
                            n = e.node,
                            a = e.className,
                            r = e.children,
                            i = (0, b._)(e, ["inline", "node", "className", "children"]);
                        if (t) {
                            var s = function(e) {
                                if (!e.startsWith(nP)) return null;
                                try {
                                    return JSON.parse(e.slice(nP.length))
                                } catch (e) {
                                    return {
                                        number: -1
                                    }
                                }
                            }((0, aO.B)(n));
                            return s ? (0, y.jsx)(nN, {
                                displayInfo: s
                            }) : (0, y.jsx)("code", (0, U._)((0, v._)({
                                className: a
                            }, i), {
                                children: r
                            }))
                        }
                        var o, l = null === (o = null == a ? void 0 : a.split(" ").filter(function(e) {
                                return e.startsWith("language-")
                            })) || void 0 === o ? void 0 : o[0],
                            c = l ? l.split("-")[1] : "";
                        return (0, y.jsx)(aK, {
                            language: c,
                            className: a,
                            content: (0, aO.B)(n),
                            children: r
                        })
                    }
                };

            function a9(e) {
                var t = e.size,
                    n = e.children,
                    a = e.className,
                    r = e.clientThreadId,
                    i = e.messageId,
                    s = (0, ax.F)().theme,
                    o = (0, t9.Fl)().isCodeInterpreterAvailable,
                    l = null !== (0, k.useContext)(Z.gB),
                    c = (0, k.useMemo)(function() {
                        return (0, U._)((0, v._)({}, a6), {
                            a: function(e) {
                                var t = e.node,
                                    n = (0, b._)(e, ["node"]);
                                return t.properties.href.startsWith(a0) ? l ? (0, y.jsx)(a2, (0, v._)({}, n)) : o ? (0, y.jsx)(a1, (0, v._)({
                                    clientThreadId: r,
                                    messageId: i
                                }, n)) : null : (0, y.jsx)("a", (0, v._)({}, n))
                            },
                            img: function(e) {
                                var t = e.node,
                                    n = (0, b._)(e, ["node"]),
                                    a = t.properties.src;
                                return a.startsWith(a0) || a.startsWith("attachment:") ? null : (0, y.jsx)("img", (0, v._)({}, n))
                            }
                        })
                    }, [r, o, l, i]);
                return (0, y.jsx)(av.SV, {
                    fallback: function() {
                        return (0, y.jsx)(y.Fragment, {
                            children: n
                        })
                    },
                    children: (0, y.jsx)(ab.D, {
                        rehypePlugins: a7,
                        remarkPlugins: a8,
                        linkTarget: "_new",
                        className: (0, J.default)(a, "markdown prose w-full break-words dark:prose-invert", "dark" === s ? "dark" : "light", "small" === (void 0 === t ? "medium" : t) && "prose-xs"),
                        transformLinkUri: a5,
                        components: c,
                        children: n
                    })
                })
            }
            var re = {},
                rt = {};

            function rn(e) {
                var t = e.message,
                    n = e.outputMessage,
                    a = e.clientThreadId,
                    r = e.isComplete,
                    i = (0, eo.Z)(),
                    s = (0, ax.F)().theme;
                (0, k.useEffect)(function() {
                    re[t.message.id] || (ec.o.logEvent(eu.a.renderTool2Message, {
                        id: t.message.id,
                        finishedExecuting: r
                    }), re[t.message.id] = !0)
                }, [t, r]);
                var o = (0, k.useCallback)(function() {
                        rt[t.message.id] || (ec.o.logEvent(eu.a.expandTool2Message, {
                            id: t.message.id,
                            finishedExecuting: r
                        }), rt[t.message.id] = !0)
                    }, [t, r]),
                    l = (0, y.jsxs)(y.Fragment, {
                        children: [(0, y.jsx)("div", {
                            className: "mt-3 self-stretch",
                            children: (0, y.jsx)(a9, {
                                clientThreadId: a,
                                messageId: t.message.id,
                                className: (0, J.default)("markdown prose w-full break-words dark:prose-invert", "dark" === s ? "dark" : "light"),
                                children: function(e) {
                                    var t = function(e, t) {
                                        return "```".concat(t, "\n").concat(e, "\n```")
                                    };
                                    if ("code" === e.message.content.content_type) return t(e.message.content.text, "python");
                                    if ("python" === e.message.recipient) {
                                        if ("text" !== e.message.content.content_type) throw Error("Unexpected content type for code message");
                                        var n = e.message.content.parts;
                                        if (1 !== n.length || "string" != typeof n[0]) throw Error("Unexpected parts for code message");
                                        return t(n[0], "python")
                                    }
                                    throw Error("Unexpected code message format")
                                }(t)
                            })
                        }), n && (0, y.jsx)("div", {
                            className: "self-stretch",
                            children: (0, y.jsx)(ac, {
                                message: n,
                                isCollapsed: !0
                            })
                        })]
                    });
                return (0, y.jsx)(nJ, {
                    expanderClosedLabel: i.formatMessage(ra.expanderClosedLabel),
                    expanderOpenLabel: i.formatMessage(ra.expanderOpenLabel),
                    isComplete: r,
                    results: l,
                    onExpand: o,
                    children: r ? (0, y.jsx)(C.Z, (0, v._)({}, ra.finishedWorking)) : (0, y.jsx)(C.Z, (0, v._)({}, ra.working))
                })
            }
            var ra = (0, _.vU)({
                    expanderClosedLabel: {
                        id: "CodeMessage.expanderClosedLabel",
                        defaultMessage: "Show work",
                        description: "Label for the button to expand and show the code execution details"
                    },
                    expanderOpenLabel: {
                        id: "CodeMessage.expanderOpenLabel",
                        defaultMessage: "Hide work",
                        description: "Label for the button to collapse and hide the code execution details"
                    },
                    finishedWorking: {
                        id: "CodeMessage.finishedWorking",
                        defaultMessage: "Finished working",
                        description: "Status text indicating the code execution has completed"
                    },
                    working: {
                        id: "CodeMessage.working",
                        defaultMessage: "Working...",
                        description: "Status text indicating the code execution is in progress"
                    }
                }),
                rr = n(40803);

            function ri(e) {
                return (0, ne.qi)(e) && !(0, ne.oH)(e)
            }

            function rs() {
                var e = (0, G._)(["grid gap-4\n", ""]);
                return rs = function() {
                    return e
                }, e
            }
            var ro = (0, _.vU)({
                generatedImage: {
                    id: "pluginDisplayParams.generatedImage",
                    defaultMessage: "Generated by plugin",
                    description: "Description text for an image that was generated by a plugin"
                }
            });

            function rl(e) {
                var t, n, a, r = e.plugin,
                    i = e.pluginMessage,
                    s = e.toolMessage;
                if (null != r && "plugin-bd1fbb6d-40f9-4159-8da9-7a8975c5793b" !== r.id) return null;
                var o = d.WIDE;
                if ("text" === i.content.content_type) try {
                    (null == (t = function(e) {
                        var t = !0,
                            n = !1,
                            a = void 0;
                        try {
                            for (var r, i = ["", "}", '"}', "]}", '"]}'][Symbol.iterator](); !(t = (r = i.next()).done); t = !0) {
                                var s = r.value,
                                    o = e.trimEnd().endsWith(",") ? e.trimEnd().slice(0, -1) : e;
                                try {
                                    return {
                                        result: JSON.parse(o + s),
                                        isComplete: "" === s
                                    }
                                } catch (e) {}
                            }
                        } catch (e) {
                            n = !0, a = e
                        } finally {
                            try {
                                t || null == i.return || i.return()
                            } finally {
                                if (n) throw a
                            }
                        }
                        return {
                            result: JSON.parse(e),
                            isComplete: !1
                        }
                    }(i.content.parts[0]).result) ? void 0 : t.image_shape) != null && (o = t.image_shape)
                } catch (e) {}
                var l = !1;
                if (null != s) {
                    if ("text" === s.content.content_type) {
                        try {
                            n = JSON.parse(s.content.parts[0])
                        } catch (e) {}
                        if ((null == n ? void 0 : n.images) != null) return (0, y.jsx)(ru, {
                            images: n.images,
                            gridItemShape: o
                        })
                    }
                    l = !0
                }
                return (null == t ? void 0 : t.prompts) != null ? (0, y.jsx)(rc, {
                    numItems: null !== (a = null == t ? void 0 : t.n) && void 0 !== a ? a : Math.max(t.prompts.length, 1),
                    prompts: t.prompts,
                    gridItemShape: o,
                    showErrorState: l || ri(i)
                }) : null
            }

            function rc(e) {
                for (var t = e.numItems, n = e.prompts, a = e.gridItemShape, r = e.showErrorState, i = [], s = 0; s < t; s++) {
                    var o = n[s];
                    i.push((0, y.jsx)(rd, {
                        className: (0, J.default)("text-sm", r && "text-gray-500"),
                        shape: a,
                        bgColor: r ? "medium" : null == o ? "dark" : "light",
                        children: (0, y.jsx)(rr.default, {
                            className: "hide-scrollbar h-full",
                            followButtonClassName: "hidden",
                            children: (0, y.jsx)("div", {
                                className: "flex min-h-full flex-col items-center justify-center gap-3 px-4 pb-5",
                                children: r ? (0, y.jsx)(ep.ZP, {
                                    icon: M.bcx,
                                    className: "self-center text-gray-400"
                                }) : (0, y.jsx)(ex.Z, {
                                    className: "h-4 w-4 self-center"
                                })
                            })
                        })
                    }, s))
                }
                return (0, y.jsx)(rg, {
                    $numItems: t,
                    children: i
                })
            }

            function ru(e) {
                var t = e.images,
                    n = e.gridItemShape;
                return (0, y.jsx)(rg, {
                    $numItems: t.length,
                    children: t.map(function(e, t) {
                        return (0, y.jsx)(rf, {
                            imageUrl: e.url,
                            shape: n
                        }, t)
                    })
                })
            }

            function rd(e) {
                var t = e.children,
                    n = e.shape,
                    a = e.className,
                    r = e.bgColor,
                    i = void 0 === r ? "light" : r;
                return (0, y.jsxs)("div", {
                    className: (0, J.default)("relative overflow-hidden rounded", a, n === d.WIDE && "aspect-[7/4]", n === d.SQUARE && "aspect-square max-w-[400px]", n === d.TALL && "aspect-[4/7] max-w-xs"),
                    children: [(0, y.jsx)("div", {
                        className: (0, J.default)("pointer-events-none absolute inset-0 blur-xl", "light" === i && "bg-black/[.04]", "medium" === i && "bg-black/[.08]", "dark" === i && "bg-black/[.12]")
                    }), t]
                })
            }

            function rf(e) {
                var t = e.imageUrl,
                    n = e.shape,
                    a = (0, eo.Z)();
                return (0, y.jsx)(rd, {
                    shape: n,
                    children: (0, y.jsx)("a", {
                        href: t,
                        target: "_blank",
                        rel: "noreferrer",
                        children: (0, y.jsx)("img", {
                            src: t,
                            alt: a.formatMessage(ro.generatedImage)
                        })
                    })
                })
            }(r = d || (d = {})).WIDE = "wide", r.SQUARE = "square", r.TALL = "tall";
            var rg = el.Z.div(rs(), function(e) {
                return 1 === e.$numItems ? "grid-cols-1" : "grid-cols-2"
            });

            function rm(e) {
                var t = e.messages,
                    n = (0, B._)(t, 2),
                    a = n[0],
                    r = n[1],
                    i = ri(a.message);
                return (0, y.jsxs)(y.Fragment, {
                    children: [(0, y.jsx)(nJ, {
                        isComplete: null != r || i,
                        children: null != r ? (0, y.jsx)(C.Z, (0, v._)({}, rh.finishedGenerating)) : i ? (0, y.jsx)(C.Z, (0, v._)({}, rh.stoppedGenerating)) : (0, y.jsx)(C.Z, (0, v._)({}, rh.generating))
                    }), null != a ? (0, y.jsx)(rl, {
                        pluginMessage: null == a ? void 0 : a.message,
                        toolMessage: null == r ? void 0 : r.message
                    }) : null]
                })
            }
            var rh = (0, _.vU)({
                    generating: {
                        id: "dalleMessage.generating",
                        defaultMessage: "Generating images...",
                        description: "Status message when DALL\xb7E is generating images"
                    },
                    stoppedGenerating: {
                        id: "browsingMessage.generating.stopped",
                        defaultMessage: "Stopped generating images",
                        description: "Status message when DALL\xb7E stopped generating images"
                    },
                    finishedGenerating: {
                        id: "browsingMessage.generating.finished",
                        defaultMessage: "Finished generating images",
                        description: "Status message when DALL\xb7E finished generating images"
                    }
                }),
                rp = n(47703),
                rx = n(78018);

            function rv() {
                var e = (0, G._)(["text-center mt-2 flex justify-center"]);
                return rv = function() {
                    return e
                }, e
            }

            function rb() {
                var e = (0, G._)(["flex gap-2 flex-wrap mt-2"]);
                return rb = function() {
                    return e
                }, e
            }
            var ry = (0, _.vU)({
                    saveAndSubmit: {
                        id: "NodeEditor.saveAndSubmit",
                        defaultMessage: "Save & Submit",
                        description: "Save and submit button label in the NodeEditor component."
                    },
                    cancel: {
                        id: "NodeEditor.cancel",
                        defaultMessage: "Cancel",
                        description: "Cancel button label in the NodeEditor component."
                    }
                }),
                rj = el.Z.div(rv());

            function rw(e) {
                var t = e.initialText,
                    n = e.role,
                    a = e.clientThreadId,
                    r = e.currentLeaf,
                    i = e.onUpdateNode,
                    s = e.onChangeItemInView,
                    o = e.onExitEdit,
                    l = e.onDeleteNode,
                    c = e.onRequestCompletion,
                    u = e.onCreateEditNode,
                    d = e.disabled,
                    f = e.attachments,
                    g = (0, k.useId)(),
                    m = "".concat(r, "-").concat(g),
                    h = (0, B._)((0, k.useState)(null != t ? t : ""), 2),
                    p = h[0],
                    x = h[1],
                    b = (0, k.useRef)(null);
                (0, k.useEffect)(function() {
                    u(r, m, null != t ? t : "", f ? {
                        attachments: f
                    } : void 0)
                }, []);
                var j = (0, k.useCallback)(function(e) {
                        x(e.currentTarget.value)
                    }, []),
                    w = (0, k.useCallback)(function() {
                        i(m, p), s(m), c(t6.Os.Next, m, {
                            eventSource: "mouse"
                        }, !0), o(), ec.o.logEvent(eu.a.changeNode, {
                            intent: "edit_save"
                        })
                    }, [i, m, p, s, c, o]),
                    M = (0, k.useCallback)(function() {
                        l(m), s(r), ec.o.logEvent(eu.a.changeNode, {
                            intent: "edit_cancel"
                        }), o();
                        var e = n === t6.uU.User ? eu.a.cancelEditPrompt : eu.a.cancelEditCompletion;
                        ec.o.logEvent(e, {
                            threadId: P.tQ.getServerThreadId(a)
                        })
                    }, [m, r, s, l, o, n, a]);
                (0, k.useEffect)(function() {
                    var e = b.current,
                        t = function(e) {
                            "Enter" === e.key && e.metaKey ? w() : "Escape" === e.key && M()
                        };
                    return e && e.addEventListener("keydown", t),
                        function() {
                            e && e.removeEventListener("keydown", t)
                        }
                }, [M, w]);
                var _ = f && f.length > 0;
                return (0, y.jsxs)(y.Fragment, {
                    children: [(0, y.jsx)(ng.ZP, {
                        ref: b,
                        value: p,
                        onChange: j,
                        className: "m-0 resize-none border-0 bg-transparent p-0 focus:ring-0 focus-visible:ring-0"
                    }), _ && (0, y.jsx)(rk, {
                        children: f.map(function(e) {
                            return (0, y.jsx)(rx.Z, {
                                file: e.name
                            }, e.id)
                        })
                    }), (0, y.jsxs)(rj, {
                        children: [(0, y.jsx)(eg.z, {
                            as: "button",
                            onClick: w,
                            className: "mr-2",
                            disabled: d,
                            children: (0, y.jsx)(C.Z, (0, v._)({}, ry.saveAndSubmit))
                        }), (0, y.jsx)(eg.z, {
                            as: "button",
                            color: "neutral",
                            onClick: M,
                            children: (0, y.jsx)(C.Z, (0, v._)({}, ry.cancel))
                        })]
                    })]
                })
            }
            var rk = el.Z.div(rb()),
                rM = n(30644),
                rC = n(91809);

            function r_() {
                var e = (0, G._)(["text-xs text-black\n", ""]);
                return r_ = function() {
                    return e
                }, e
            }

            function rT() {
                var e = (0, G._)(["relative w-full overflow-hidden pt-[67%]"]);
                return rT = function() {
                    return e
                }, e
            }

            function rP(e) {
                var t, n = e.title,
                    a = e.url,
                    r = e.imageUrl,
                    i = e.logoUrl,
                    s = e.className,
                    o = e.mini,
                    l = (0, eo.Z)(),
                    c = !!r,
                    u = (0, k.useCallback)(function() {
                        ec.o.logEvent(eu.a.carouselCardClick, {
                            content: a
                        })
                    }, [a]);
                try {
                    t = nM.get(new URL(a).hostname)
                } catch (e) {
                    return console.error("Invalid card url: ", e), null
                }
                return (0, y.jsxs)(a ? "a" : "div", {
                    className: (0, J.default)("flex h-full w-full flex-col overflow-hidden rounded-md border border-black/10 bg-gray-50 shadow-[0_2px_24px_rgba(0,0,0,0.05)]", s),
                    href: a,
                    target: a ? "_blank" : "",
                    onClick: u,
                    children: [c && (0, y.jsx)(rS, {
                        children: (0, y.jsx)("div", {
                            className: "absolute inset-0",
                            children: (0, y.jsx)("img", {
                                src: r,
                                alt: l.formatMessage(rZ.imageAlt, {
                                    title: n
                                }),
                                className: "h-full w-full border-b border-black/10 object-cover"
                            })
                        })
                    }), (0, y.jsxs)("div", {
                        className: "flex flex-1 flex-col justify-between gap-1.5 p-3",
                        children: [(0, y.jsx)(rN, {
                            $clamp: void 0 !== o && o || c,
                            children: n
                        }), (0, y.jsxs)("div", {
                            className: "flex items-center gap-1",
                            children: [i ? (0, y.jsx)(rC.Z, {
                                url: i,
                                name: t,
                                size: 13
                            }) : (0, y.jsx)(n_, {
                                url: a,
                                size: 13
                            }), (0, y.jsx)("div", {
                                className: "text-[10px] leading-3 text-gray-500 line-clamp-1",
                                children: t
                            })]
                        })]
                    })]
                })
            }
            var rN = el.Z.div(r_(), function(e) {
                    return e.$clamp && "line-clamp-2"
                }),
                rS = el.Z.div(rT()),
                rZ = (0, _.vU)({
                    imageAlt: {
                        id: "Card.imageAlt",
                        description: "Alt text for the image, describing the content of the image",
                        defaultMessage: "image of {title}"
                    }
                }),
                rI = n(33554),
                rD = n(46244),
                rB = n(95182),
                rF = n.n(rB);

            function rR(e) {
                var t = e.disabled,
                    n = e.onClick,
                    a = e.left,
                    r = e.children;
                return (0, y.jsx)("button", {
                    disabled: t,
                    onClick: n,
                    "aria-disabled": t,
                    className: (0, J.default)("flex h-6 w-[30px] items-center justify-center rounded-full", "bg-gray-900 text-white shadow-sm hover:bg-gray-700 disabled:hover:bg-gray-900 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200 dark:disabled:hover:bg-white", "transition-opacity disabled:opacity-20", "cursor-pointer disabled:cursor-auto", "absolute top-full translate-y-3 lg:top-1/2 lg:-translate-y-1/2", void 0 !== a && a ? "left-1/2 -translate-x-[calc(100%+4px)] lg:-left-3 lg:-translate-x-full" : "left-1/2 translate-x-1 lg:-right-3 lg:left-auto lg:translate-x-full", t && "lg:hidden"),
                    children: r
                })
            }
            var rL = function(e) {
                    var t = e.x,
                        n = e.children,
                        a = e.className;
                    return (0, y.jsx)(er.E.div, {
                        className: (0, J.default)("mr-3 h-full w-full flex-none sm:w-[calc((100%-12px)/2)] lg:w-[calc((100%-24px)/3)]", a),
                        style: {
                            x: t
                        },
                        children: n
                    })
                },
                rE = {
                    type: "spring",
                    bounce: 0
                },
                rA = (0, k.forwardRef)(function(e, t) {
                    return (0, y.jsx)("div", {
                        ref: t,
                        className: (0, J.default)("relative flex h-full w-full overflow-hidden", e.className),
                        children: e.children
                    })
                });
            rA.displayName = "CarouselContainer";
            var rq = (f = {}, (0, q._)(f, D._G.Mobile, 1), (0, q._)(f, D._G.Small, 2), (0, q._)(f, D._G.Medium, 2), (0, q._)(f, D._G.Large, 3), (0, q._)(f, D._G.XLarge, 3), f);

            function rU(e) {
                var t = e.children,
                    n = e.loop,
                    a = void 0 === n || n,
                    r = e.className,
                    i = (0, rI.c)(0),
                    s = (0, k.useRef)(null),
                    o = (0, B._)((0, k.useState)(0), 2),
                    l = o[0],
                    c = o[1],
                    u = rq[(0, D.dQ)()] || 1,
                    d = k.Children.count(t) > u,
                    f = k.Children.toArray(t),
                    g = (0, k.useCallback)(function() {
                        var e, t = null === (e = s.current) || void 0 === e ? void 0 : e.clientWidth;
                        return t ? -Math.floor(l / u) * (t + 12) : 0
                    }, [u, l]),
                    m = (0, k.useCallback)(function(e) {
                        var t = u * e;
                        a ? c(function(e) {
                            return (e + t) % f.length - 1
                        }) : c(function(e) {
                            return rF()(e + t, 0, f.length - 1)
                        })
                    }, [f.length, a, u]),
                    h = (0, k.useCallback)(function() {
                        m(1)
                    }, [m]),
                    p = (0, k.useCallback)(function() {
                        m(-1)
                    }, [m]),
                    x = (0, B._)((0, k.useMemo)(function() {
                        if (a) return [!0, !0];
                        var e = l < f.length - u;
                        return [l > 0, e]
                    }, [f.length, l, a, u]), 2),
                    v = x[0],
                    b = x[1];
                return (0, k.useEffect)(function() {
                    return (0, rD.j)(i, g(), rE).stop
                }, [g, l, i]), (0, y.jsxs)("div", {
                    className: (0, J.default)("relative h-full w-full", r, d && "mb-12 lg:mb-0"),
                    children: [(0, y.jsx)(rA, {
                        ref: s,
                        children: f.map(function(e, t) {
                            return (0, y.jsx)(rL, {
                                x: i,
                                children: e
                            }, t)
                        })
                    }), d && (0, y.jsxs)(y.Fragment, {
                        children: [(0, y.jsx)(rR, {
                            onClick: p,
                            left: !0,
                            disabled: !v,
                            children: (0, y.jsx)(ep.ZP, {
                                icon: M.YFh
                            })
                        }), (0, y.jsx)(rR, {
                            onClick: h,
                            disabled: !b,
                            children: (0, y.jsx)(ep.ZP, {
                                icon: M.Tfp
                            })
                        })]
                    })]
                })
            }
            var rO = n(20485),
                rz = n(35101),
                rW = n(14444);

            function rH(e) {
                return rQ.apply(this, arguments)
            }

            function rQ() {
                return (rQ = (0, eQ._)(function(e) {
                    var t;
                    return (0, eV.Jh)(this, function(n) {
                        switch (n.label) {
                            case 0:
                                return t = e.queryKey, [4, T.ZP.publicGetPluginsById({
                                    ids: t
                                })];
                            case 1:
                                return [2, n.sent().items]
                        }
                    })
                })).apply(this, arguments)
            }

            function rV() {
                var e, t, n;
                return null !== (e = (t = (0, k.useContext)(Z.XA), n = (0, j.NL)(), (0, nt.a)({
                    queryKey: t,
                    queryFn: rH,
                    select: void 0,
                    initialData: function() {
                        var e = null === (l = n.getQueryData(rW.Z)) || void 0 === l ? void 0 : l.items,
                            a = null === (c = n.getQueryData(rz.V)) || void 0 === c ? void 0 : c.items,
                            r = [],
                            i = !0,
                            s = !1,
                            o = void 0;
                        try {
                            for (var l, c, u, d = t[Symbol.iterator](); !(i = (u = d.next()).done); i = !0) {
                                var f = function() {
                                    var t, n = u.value,
                                        i = null !== (t = null == e ? void 0 : e.find(function(e) {
                                            return e.id === n
                                        })) && void 0 !== t ? t : null == a ? void 0 : a.find(function(e) {
                                            return e.id === n
                                        });
                                    if (null == i) return {
                                        v: void 0
                                    };
                                    r.push(i)
                                }();
                                if ("object" === (0, rO._)(f)) return f.v
                            }
                        } catch (e) {
                            s = !0, o = e
                        } finally {
                            try {
                                i || null == d.return || d.return()
                            } finally {
                                if (s) throw o
                            }
                        }
                        return r
                    }
                })).data) && void 0 !== e ? e : []
            }
            var r$ = new Set(["og:site_name", "og:title", "og:description", "og:image", "og:url"]),
                rG = {
                    "og:site_name": "metadataTitle",
                    "og:title": "title",
                    "og:description": "description",
                    "og:image": "imageUrl",
                    "og:url": "url"
                },
                rJ = /https:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/g,
                rY = k.memo(function(e) {
                    var t, n, a = e.urls,
                        r = rV(),
                        i = (t = (0, eY.kP)().isAuthenticated, n = (0, rM.h)({
                            queries: a.map(function(e) {
                                return {
                                    queryKey: ["opengraph", e],
                                    queryFn: (0, eQ._)(function() {
                                        return (0, eV.Jh)(this, function(t) {
                                            switch (t.label) {
                                                case 0:
                                                    return [4, T.ZP.getPageMetadata({
                                                        url: e
                                                    })];
                                                case 1:
                                                    return [2, t.sent()]
                                            }
                                        })
                                    }),
                                    enabled: !!(e && t),
                                    retry: !1
                                }
                            })
                        }), (0, k.useMemo)(function() {
                            return n.map(function(e, t) {
                                var n = e.data,
                                    r = e.isError,
                                    i = e.isLoading,
                                    s = a[t];
                                if (r || i) return null;
                                var o = n.tags.reduce(function(e, t) {
                                    return r$.has(t.type) && (e[rG[t.type]] = t.value), e
                                }, {});
                                try {
                                    var l, c = s.split(/[#?]/)[0],
                                        u = null === (l = o.url) || void 0 === l ? void 0 : l.endsWith("/login"),
                                        d = o.url && "/" === new URL(o.url || "").pathname;
                                    if (c !== o.url && (u || d)) return null
                                } catch (e) {
                                    return null
                                }
                                return o.url = s, o
                            }).filter(Boolean)
                        }, [n, a])),
                        s = (0, k.useMemo)(function() {
                            return !i.some(function(e) {
                                return !!(null == e ? void 0 : e.imageUrl)
                            })
                        }, [i]),
                        o = (0, k.useMemo)(function() {
                            return r.reduce(function(e, t) {
                                return e[nM.get(t.domain)] = t.manifest.logo_url, e
                            }, {})
                        }, [r]),
                        l = (0, k.useMemo)(function() {
                            return i.map(function(e) {
                                var t, n;
                                if (!e) return null;
                                try {
                                    t = nM.get(new URL(e.url).hostname)
                                } catch (e) {
                                    return console.error("Invalid card url: ", e), null
                                }
                                return t in o && (n = o[t]), (0, y.jsx)(rP, {
                                    title: e.title || "",
                                    url: e.url,
                                    imageUrl: e.imageUrl,
                                    logoUrl: n,
                                    mini: s
                                }, e.url)
                            })
                        }, [i, s, o]);
                    return 0 === i.length ? null : (0, y.jsx)(rU, {
                        loop: !1,
                        children: l
                    })
                }),
                rK = n(44675);

            function rX() {
                var e = (0, G._)(["w-full max-w-lg dark:bg-gray-700 dark:text-gray-400 bg-gray-100 text-gray-500 h-auto rounded-md overflow-hidden flex items-center justify-center"]);
                return rX = function() {
                    return e
                }, e
            }

            function r0(e) {
                var t = e.asset,
                    n = (0, k.useContext)(Z.gB);
                return (null == n ? void 0 : n.serverSharedThreadId) != null ? (0, y.jsx)(r1, {
                    asset: t,
                    staticSharedThreadId: n.serverSharedThreadId
                }) : (0, y.jsx)(r2, {
                    asset: t
                })
            }

            function r1(e) {
                var t, n = e.asset,
                    a = e.staticSharedThreadId,
                    r = n.asset_pointer,
                    i = n.width,
                    s = n.height,
                    o = (0, eo.Z)(),
                    l = (0, k.useRef)(null),
                    c = (0, B._)((0, k.useState)(!1), 2),
                    u = c[0],
                    d = c[1];
                (0, k.useEffect)(function() {
                    var e;
                    (null === (e = l.current) || void 0 === e ? void 0 : e.complete) || d(!1)
                }, [r, a]);
                var f = (0, tr.Iy)(r),
                    g = null !== (t = rK.env.CDN_IMAGE_BASE_URL) && void 0 !== t ? t : "",
                    m = "".concat(a, "/image/").concat(f),
                    h = g ? "".concat(g, "/").concat(m) : "".concat(T.B, "/share/").concat(m);
                return (0, y.jsx)(r3, {
                    children: (0, y.jsx)(eJ(), {
                        alt: o.formatMessage(r4.alt),
                        src: h,
                        width: i,
                        height: s,
                        unoptimized: !0,
                        ref: l,
                        onLoadingComplete: function() {
                            return d(!0)
                        },
                        className: (0, J.default)("max-w-full rounded-md transition-opacity duration-300", u ? "opacity-100" : "opacity-0")
                    })
                })
            }

            function r2(e) {
                var t, n = e.asset,
                    a = n.asset_pointer,
                    r = n.width,
                    i = n.height,
                    s = (0, eo.Z)(),
                    o = (t = (0, tr.Iy)(a), (0, nt.a)({
                        queryKey: ["getFileDownloadLink", t],
                        queryFn: (0, eQ._)(function() {
                            return (0, eV.Jh)(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, T.ZP.getFileDownloadLink(t).catch(function(e) {
                                            throw console.error("Could not fetch file with ID ".concat(t, " from file service"), e.message), e
                                        })];
                                    case 1:
                                        return [2, e.sent()]
                                }
                            })
                        })
                    })),
                    l = o.data,
                    c = o.isLoading,
                    u = (0, k.useRef)(null),
                    d = (0, B._)((0, k.useState)(!1), 2),
                    f = d[0],
                    g = d[1];
                (0, k.useEffect)(function() {
                    var e;
                    (null === (e = u.current) || void 0 === e ? void 0 : e.complete) || g(!1)
                }, [a]);
                var m = c || !f;
                return (null == l ? void 0 : l.status) === eK.KF.Success ? (0, y.jsx)(r3, {
                    children: (0, y.jsx)(eJ(), {
                        alt: s.formatMessage(r4.alt),
                        src: l.download_url,
                        width: r,
                        height: i,
                        unoptimized: !0,
                        ref: u,
                        onLoadingComplete: function() {
                            return g(!0)
                        },
                        className: (0, J.default)("max-w-full rounded-md transition-opacity duration-300", f ? "opacity-100" : "opacity-0")
                    })
                }) : (0, y.jsx)(r3, {
                    style: {
                        aspectRatio: "".concat(r, " / ").concat(i),
                        width: r
                    },
                    title: m ? s.formatMessage(r4.loading) : s.formatMessage(r4.error),
                    children: m ? (0, y.jsx)(ex.Z, {}) : (0, y.jsx)(M.BJv, {})
                })
            }
            var r3 = el.Z.div(rX()),
                r4 = (0, _.vU)({
                    loading: {
                        id: "imageAsset.loading",
                        defaultMessage: "Loading...",
                        description: "Text that describes a loading image"
                    },
                    error: {
                        id: "imageAsset.error",
                        defaultMessage: "Could not load image",
                        description: "Text that describes an image that failed to load"
                    },
                    alt: {
                        id: "imageAsset.alt",
                        defaultMessage: "Uploaded image",
                        description: "Alt text for image asset"
                    }
                });

            function r5() {
                var e = (0, G._)(["flex gap-2 flex-wrap"]);
                return r5 = function() {
                    return e
                }, e
            }
            var r8 = k.memo(function(e) {
                var t, n, a, r = e.message,
                    i = e.isEditing,
                    s = e.format,
                    o = e.isCompletionInProgress,
                    l = e.className,
                    c = e.isCompletion,
                    u = e.isResponseToPluginMessage,
                    d = (0, b._)(e, ["message", "isEditing", "format", "isCompletionInProgress", "className", "isCompletion", "isResponseToPluginMessage"]),
                    f = (0, k.useMemo)(function() {
                        return "parts" in r.message.content ? r.message.content.parts : [(0, ne.RR)(r.message)]
                    }, [r]);
                return i ? (0, y.jsx)(rw, (0, v._)({
                    currentLeaf: r.nodeId,
                    initialText: (0, ne.RR)(r.message),
                    role: r.message.author.role,
                    attachments: null === (a = r.message.metadata) || void 0 === a ? void 0 : a.attachments
                }, d)) : (0, y.jsx)(r7, {
                    parts: f,
                    message: r,
                    isCompletionInProgress: o,
                    format: s,
                    className: l,
                    citations: null === (t = r.message.metadata) || void 0 === t ? void 0 : t.citations,
                    attachments: null === (n = r.message.metadata) || void 0 === n ? void 0 : n.attachments,
                    isCompletion: c,
                    id: r.nodeId,
                    onRequestMoreCompletions: d.onRequestMoreCompletions,
                    clientThreadId: d.clientThreadId,
                    showExtractedLinkCards: u
                })
            });

            function r7(e) {
                var t, n, a, r = e.attachments,
                    i = e.citations,
                    s = e.className,
                    o = e.clientThreadId,
                    l = e.format,
                    c = e.id,
                    u = e.isCompletion,
                    d = e.isCompletionInProgress,
                    f = e.message,
                    g = e.onRequestMoreCompletions,
                    m = e.parts,
                    h = e.showExtractedLinkCards,
                    p = e.size,
                    x = void 0 === p ? "medium" : p,
                    v = (0, rp.ZC)(f),
                    b = v.flagSeverity,
                    j = v.shouldHideContent,
                    w = !m.some(function(e) {
                        return "" !== e
                    }),
                    M = (n = (t = {
                        text: m.map(function(e) {
                            return "string" == typeof e ? e : ""
                        }).join(""),
                        isCompletionInProgress: d
                    }).text, a = t.isCompletionInProgress, (0, k.useMemo)(function() {
                        if (a) return [];
                        var e = n.match(rJ);
                        return Array.from(new Set(e))
                    }, [a, n])),
                    C = (0, S.hz)().has(ed.FZ),
                    _ = r && r.length > 0 && !u,
                    T = "danger" !== b && d;
                return (0, y.jsxs)("div", {
                    className: (0, J.default)(s, "flex flex-col items-start gap-3 overflow-x-auto whitespace-pre-wrap break-words", "danger" === b && "text-red-500", "warning" === b && "text-orange-500", C && "text-base"),
                    children: [_ && (0, y.jsx)(r6, {
                        children: r.map(function(e) {
                            return (0, y.jsx)(rx.Z, {
                                file: e.name
                            }, e.id)
                        })
                    }), m.map(function(e, t) {
                        return "string" == typeof e ? w || j || !l ? (0, y.jsx)("div", {
                            className: "empty:hidden",
                            children: j ? null : e
                        }, t) : (0, y.jsx)(a9, {
                            clientThreadId: o,
                            messageId: c,
                            size: x,
                            className: (0, J.default)(T && "result-streaming", "danger" === b && "text-red-500", "warning" === b && "text-orange-500"),
                            children: "" === e ? "&#8203;" : function(e, t) {
                                if (!t) return e;
                                for (var n = [], a = 1, r = {}, i = 0; i < t.length; i++) {
                                    var s = t[i],
                                        o = s.metadata,
                                        l = s.invalid_reason;
                                    if (o) {
                                        var c = nZ(o);
                                        null == r[c] && (r[c] = a, a++), n.push(r[c])
                                    } else null != l && (n.push(a), a++)
                                }
                                for (var u = t.length - 1; u >= 0; u--) {
                                    var d = t[u],
                                        f = d.start_ix,
                                        g = d.end_ix,
                                        m = d.metadata,
                                        h = d.invalid_reason,
                                        p = {
                                            number: n[u]
                                        };
                                    m ? p.metadata = m : null != h && (p.invalid_reason = h);
                                    var x = !1;
                                    if (u > 0) {
                                        var v = t[u - 1];
                                        null != v.metadata && null != m && nZ(v.metadata) === nZ(m) && 0 === e.slice(v.end_ix, d.start_ix).trim().length && (e = e.slice(0, v.end_ix) + e.slice(d.end_ix), x = !0)
                                    }
                                    x || (e = e.slice(0, f) + "".concat(nT, "``").concat(nP).concat(JSON.stringify(p), "``").concat(nT) + e.slice(g))
                                }
                                return e
                            }(e, i)
                        }, t) : (0, y.jsx)(r0, {
                            asset: e
                        }, t)
                    }), (0, y.jsx)(rp.ZP, {
                        message: f,
                        id: c,
                        onRequestMoreCompletions: g,
                        clientThreadId: o
                    }), u && h && M.length > 0 && (0, y.jsx)(rY, {
                        urls: M
                    })]
                })
            }
            var r6 = el.Z.div(r5());

            function r9(e) {
                var t = e.messages,
                    n = e.clientThreadId,
                    a = e.isCompletionInProgress,
                    r = e.isCompletion,
                    i = e.onRequestMoreCompletions,
                    s = (0, k.useMemo)(function() {
                        return [t.reduce(function(e, t) {
                            return null == t.err ? e + (0, ne.RR)(t.message) : e
                        }, "")]
                    }, [t]);
                return (0, y.jsx)(r7, {
                    clientThreadId: n,
                    parts: s,
                    format: !0,
                    isCompletion: r,
                    isCompletionInProgress: a,
                    id: "",
                    onRequestMoreCompletions: i
                })
            }(i = g || (g = {})).Planning = "planning", i.Running = "running", i.Done = "done", i.Stopped = "stopped";
            var ie = k.memo(function(e) {
                var t, n = e.messages,
                    a = (0, B._)(n, 2),
                    r = a[0],
                    i = a[1],
                    s = function(e, t) {
                        if (ri(e.message)) return {
                            status: g.Stopped,
                            numTotalSubAgents: 0,
                            numCompletedSubAgents: 0
                        };
                        var n, a, r = null === (n = null == t ? void 0 : t.message.metadata) || void 0 === n ? void 0 : null === (a = n.parallel_browse) || void 0 === a ? void 0 : a.frontend_info.sub_agent_infos;
                        if (null == r) return {
                            status: g.Planning,
                            numTotalSubAgents: 0,
                            numCompletedSubAgents: 0
                        };
                        var i = ia(r),
                            s = i.length,
                            o = i.filter(ir).length;
                        return {
                            status: o === s ? g.Done : g.Running,
                            numTotalSubAgents: s,
                            numCompletedSubAgents: o
                        }
                    }(r, i);
                switch (s.status) {
                    case g.Planning:
                        t = ii.planning;
                        break;
                    case g.Running:
                        t = ii.running;
                        break;
                    case g.Done:
                        t = ii.done;
                        break;
                    case g.Stopped:
                        t = ii.stopped
                }
                return (0, y.jsx)(nJ, {
                    isComplete: s.status === g.Done || s.status === g.Stopped,
                    results: null != i ? (0, y.jsx)(nX, {
                        children: (0, y.jsx)(it, {
                            toolMessage: i
                        })
                    }) : void 0,
                    children: (0, y.jsx)(C.Z, (0, U._)((0, v._)({}, t), {
                        values: {
                            numCompleted: s.numCompletedSubAgents,
                            numTotal: s.numTotalSubAgents
                        }
                    }))
                })
            });

            function it(e) {
                var t, n, a = null === (t = e.toolMessage.message.metadata) || void 0 === t ? void 0 : null === (n = t.parallel_browse) || void 0 === n ? void 0 : n.frontend_info.sub_agent_infos;
                if (null == a) return null;
                var r = ia(a).map(function(e, t) {
                    return (0, y.jsxs)("div", {
                        children: [(0, y.jsx)("div", {
                            className: "font-bold",
                            children: (0, y.jsx)(C.Z, (0, v._)({}, function(e) {
                                switch (e) {
                                    case t6.RF.Running:
                                        return ii.subAgentRunning;
                                    case t6.RF.Done:
                                        return ii.subAgentDone;
                                    case t6.RF.Timeout:
                                    case t6.RF.Error:
                                        return ii.subAgentFailed;
                                    case t6.RF.Starting:
                                    default:
                                        return ii.subAgentStarting
                                }
                            }(e.status)))
                        }), (0, y.jsx)("div", {
                            children: e.task_instruction
                        })]
                    }, t)
                });
                return (0, y.jsx)("div", {
                    className: "flex flex-col gap-4",
                    children: r
                })
            }

            function ia(e) {
                return Object.values(Object.values(e).reduce(function(e, t) {
                    var n = t.task_index;
                    return null == e[n] && (e[n] = []), e[n].push(t), e
                }, {})).map(function(e) {
                    return (0, U._)((0, v._)({}, e[0]), {
                        status: function(e) {
                            var t = e.map(function(e) {
                                    return e.status
                                }),
                                n = [t6.RF.Starting, t6.RF.Running, t6.RF.Done, t6.RF.Error, t6.RF.Timeout],
                                a = !0,
                                r = !1,
                                i = void 0;
                            try {
                                for (var s, o = n[Symbol.iterator](); !(a = (s = o.next()).done); a = !0) {
                                    var l = function() {
                                        var e = s.value;
                                        if (t.some(function(t) {
                                                return t === e
                                            })) return {
                                            v: e
                                        }
                                    }();
                                    if ("object" === (0, rO._)(l)) return l.v
                                }
                            } catch (e) {
                                r = !0, i = e
                            } finally {
                                try {
                                    a || null == o.return || o.return()
                                } finally {
                                    if (r) throw i
                                }
                            }
                            return t6.RF.Starting
                        }(e)
                    })
                }).sort(function(e, t) {
                    return e.task_index - t.task_index
                })
            }

            function ir(e) {
                return e.status === t6.RF.Done || e.status === t6.RF.Timeout || e.status === t6.RF.Error
            }
            var ii = (0, _.vU)({
                    planning: {
                        id: "parallelBrowsingMessage.planning",
                        defaultMessage: "Creating a browsing plan...",
                        description: "Status message when browsing is being planned"
                    },
                    running: {
                        id: "parallelBrowsingMessage.running",
                        defaultMessage: "Executing browsing plan ({numCompleted}/{numTotal})",
                        description: "Status message when browsing is in progress"
                    },
                    done: {
                        id: "parallelBrowsingMessage.done",
                        defaultMessage: "Finished browsing",
                        description: "Status message when browsing is finished"
                    },
                    stopped: {
                        id: "parallelBrowsingMessage.stopped",
                        defaultMessage: "Stopped browsing",
                        description: "Status message when browsing was stopped"
                    },
                    subAgentStarting: {
                        id: "parallelBrowsingMessage.subAgent.starting",
                        defaultMessage: "Waiting to start",
                        description: "Status when a browsing task is waiting to start"
                    },
                    subAgentRunning: {
                        id: "parallelBrowsingMessage.subAgent.running",
                        defaultMessage: "In progress",
                        description: "Status when a browsing task is in progress"
                    },
                    subAgentDone: {
                        id: "parallelBrowsingMessage.subAgent.done",
                        defaultMessage: "Completed",
                        description: "Status when a browsing task is complete"
                    },
                    subAgentFailed: {
                        id: "parallelBrowsingMessage.subAgent.failed",
                        defaultMessage: "Could not complete",
                        description: "Status when a browsing task failed to complete"
                    }
                }),
                is = n(73908);

            function io() {
                var e = (0, G._)(["flex h-[18px] w-[18px] items-center justify-center rounded-[5px] bg-red-200 text-red-800"]);
                return io = function() {
                    return e
                }, e
            }

            function il() {
                var e = (0, G._)(["flex items-center gap-1 rounded-[5px] bg-red-200 py-0.5 px-1.5 text-xs font-medium uppercase text-red-800"]);
                return il = function() {
                    return e
                }, e
            }
            var ic = el.Z.div(io()),
                iu = (0, _.vU)({
                    unapprovedTag: {
                        id: "TagComponents.unapprovedTag",
                        defaultMessage: "Unverified",
                        description: "Text shown inside the UnapprovedTagWithText component"
                    },
                    localhostTag: {
                        id: "TagComponents.localhostTag",
                        defaultMessage: "Localhost",
                        description: "Text shown inside the LocalhostTagWithText component"
                    }
                });

            function id() {
                return (0, y.jsx)(ic, {
                    children: (0, y.jsx)(ep.ZP, {
                        icon: M.OH,
                        className: "h-3 w-3",
                        strokeWidth: 2.5
                    })
                })
            }

            function ig() {
                return (0, y.jsx)(ic, {
                    children: (0, y.jsx)(ep.ZP, {
                        icon: M.V7f,
                        className: "h-3 w-3"
                    })
                })
            }
            var im = el.Z.div(il());

            function ih() {
                return (0, y.jsxs)(im, {
                    children: [(0, y.jsx)(ep.ZP, {
                        icon: M.OH,
                        className: "h-3 w-3",
                        strokeWidth: 2.5
                    }), (0, y.jsx)("div", {
                        children: (0, y.jsx)(C.Z, (0, v._)({}, iu.unapprovedTag))
                    })]
                })
            }

            function ip() {
                return (0, y.jsxs)(im, {
                    children: [(0, y.jsx)(ep.ZP, {
                        icon: M.V7f,
                        className: "h-3 w-3"
                    }), (0, y.jsx)("div", {
                        children: (0, y.jsx)(C.Z, (0, v._)({}, iu.localhostTag))
                    })]
                })
            }
            var ix = k.memo(function(e) {
                var t, n = e.messages,
                    a = (0, B._)(n, 2),
                    r = a[0],
                    i = a[1],
                    s = rV(),
                    o = (0, ne.Lx)(r.message.recipient),
                    l = s.find(function(e) {
                        return e.namespace === (null == o ? void 0 : o.namespace)
                    }),
                    c = null == l ? void 0 : l.manifest.name_for_human,
                    u = ri(r.message),
                    d = null != c ? (0, y.jsx)("b", {
                        children: c
                    }) : "unknown plugin",
                    f = null != i ? (0, y.jsx)("div", {
                        children: (0, y.jsx)(C.Z, (0, U._)((0, v._)({}, iy.used), {
                            values: {
                                pluginName: d
                            }
                        }))
                    }) : u ? (0, y.jsx)("div", {
                        children: (0, y.jsx)(C.Z, (0, U._)((0, v._)({}, iy.triedToUse), {
                            values: {
                                pluginName: d
                            }
                        }))
                    }) : (0, y.jsx)("div", {
                        children: (0, y.jsx)(C.Z, (0, U._)((0, v._)({}, iy.using), {
                            values: {
                                pluginName: d
                            }
                        }))
                    });
                return l && ((0, is.cf)(l) ? t = (0, y.jsx)(ip, {}) : "approved" !== l.status && (t = (0, y.jsx)(ih, {}))), (0, y.jsxs)(y.Fragment, {
                    children: [(0, y.jsx)(nJ, {
                        isComplete: null != i || u,
                        results: (0, y.jsx)(iv, {
                            pluginName: null != c ? c : "unknown plugin",
                            pluginMessage: r,
                            toolMessage: i
                        }),
                        children: (0, y.jsxs)("div", {
                            className: "flex items-center gap-3",
                            children: [f, t]
                        })
                    }), null != l && (0, y.jsx)(rl, {
                        plugin: l,
                        pluginMessage: r.message,
                        toolMessage: null == i ? void 0 : i.message
                    })]
                })
            });

            function iv(e) {
                var t = e.pluginName,
                    n = e.pluginMessage,
                    a = e.toolMessage,
                    r = (0, eo.Z)(),
                    i = (0, ne.RR)(n.message),
                    s = a ? (0, ne.RR)(a.message) : null;
                try {
                    i = JSON.stringify(JSON.parse(i), null, 2), null != s && (s = JSON.stringify(JSON.parse(s), null, 2))
                } catch (e) {}
                var o = (null == a ? void 0 : a.message.author.name) === "plugin_service";
                return (0, y.jsxs)("div", {
                    className: "my-3 flex max-w-full flex-col gap-3",
                    children: [(0, y.jsx)(ib, {
                        title: r.formatMessage(iy.requestTo, {
                            pluginName: t
                        }),
                        infoTooltip: n.message.recipient,
                        children: i
                    }), null != s && (0, y.jsx)(ib, {
                        title: o ? r.formatMessage(iy.error) : r.formatMessage(iy.responseFrom, {
                            pluginName: t
                        }),
                        infoTooltip: n.message.recipient,
                        children: (0, y.jsx)("span", {
                            className: (0, J.default)(o && "text-red-500"),
                            children: s
                        })
                    })]
                })
            }

            function ib(e) {
                var t = e.title,
                    n = e.infoTooltip,
                    a = e.children;
                return (0, y.jsx)(aX, {
                    title: (0, y.jsx)("span", {
                        className: "uppercase",
                        children: t
                    }),
                    headerDecoration: void 0 !== n ? (0, y.jsx)(tn.u, {
                        label: n,
                        children: (0, y.jsx)(ep.ZP, {
                            icon: M.H33,
                            className: "text-white/50"
                        })
                    }) : void 0,
                    shouldWrapCode: !0,
                    className: "w-full text-xs text-white/80",
                    children: a
                })
            }
            var iy = (0, _.vU)({
                    used: {
                        id: "PluginMessage.used",
                        description: "Used plugin text",
                        defaultMessage: "Used {pluginName}"
                    },
                    triedToUse: {
                        id: "PluginMessage.triedToUse",
                        description: "Tried to use plugin text",
                        defaultMessage: "Tried to use {pluginName}"
                    },
                    using: {
                        id: "PluginMessage.using",
                        description: "Using plugin text",
                        defaultMessage: "Using {pluginName}..."
                    },
                    requestTo: {
                        id: "ResultsSection.requestTo",
                        description: "Request to plugin title",
                        defaultMessage: "Request to {pluginName}"
                    },
                    responseFrom: {
                        id: "ResultsSection.responseFrom",
                        description: "Response from plugin title",
                        defaultMessage: "Response from {pluginName}"
                    },
                    error: {
                        id: "ResultsSection.error",
                        description: "Error title",
                        defaultMessage: "Error"
                    }
                }),
                ij = n(63857),
                iw = n(42569);

            function ik() {
                var e = (0, G._)([""]);
                return ik = function() {
                    return e
                }, e
            }

            function iM() {
                var e = (0, G._)(["flex flex-grow flex-col gap-3"]);
                return iM = function() {
                    return e
                }, e
            }

            function iC() {
                var e = (0, G._)(["flex p-4 gap-4 ", "\n  ", ""]);
                return iC = function() {
                    return e
                }, e
            }

            function i_() {
                var e = (0, G._)(["flex-shrink-0 flex flex-col relative items-end"]);
                return i_ = function() {
                    return e
                }, e
            }

            function iT() {
                var e = (0, G._)(["p-1 ", ""]);
                return iT = function() {
                    return e
                }, e
            }

            function iP() {
                var e = (0, G._)(["text-gray-400 flex self-end lg:self-center justify-center mt-2 gap-2 md:gap-3 lg:gap-1 lg:absolute lg:top-0 lg:translate-x-full lg:right-0 lg:mt-0 lg:pl-2\n", ""]);
                return iP = function() {
                    return e
                }, e
            }

            function iN() {
                var e = (0, G._)(["text-center border-b p-3 text-gray-500 dark:border-black/20 dark:text-gray-400 text-xs"]);
                return iN = function() {
                    return e
                }, e
            }
            var iS = ["#7989FF"];
            (s = m || (m = {}))[s.Text = 0] = "Text", s[s.MultiText = 1] = "MultiText", s[s.Browsing = 2] = "Browsing", s[s.Code = 3] = "Code", s[s.CodeExecutionOutput = 4] = "CodeExecutionOutput", s[s.Plugin = 5] = "Plugin", s[s.RetrievalBrowsing = 6] = "RetrievalBrowsing", s[s.ParallelBrowsing = 7] = "ParallelBrowsing", s[s.Dalle = 8] = "Dalle";
            var iZ = "#19c37d",
                iI = "openai",
                iD = "#1a7f64",
                iB = k.memo(function(e) {
                    var t, n, a, r = e.turnIndex,
                        i = e.conversationLeafId,
                        s = e.isFinalTurn,
                        o = e.clientThreadId,
                        l = e.onChangeItemInView,
                        c = e.onChangeRating,
                        u = e.onRequestMoreCompletions,
                        d = e.onDeleteNode,
                        f = e.onRequestCompletion,
                        g = e.onUpdateNode,
                        h = e.showInlineEmbeddedDisplay,
                        p = void 0 !== h && h,
                        x = e.currentModelId,
                        v = e.initiallyHighlightedMessageId,
                        b = e.avatarColor,
                        j = null !== (0, k.useContext)(Z.gB),
                        w = (0, S.ec)(S.F_.isBusinessWorkspace),
                        C = (0, P.GD)(o, r, i),
                        _ = C.role,
                        T = C.messages,
                        I = C.variantIds,
                        F = (0, D.x_)(),
                        R = (0, B._)((0, k.useState)(!1), 2),
                        L = R[0],
                        E = R[1],
                        A = (0, k.useMemo)(function() {
                            return I.findIndex(function(e) {
                                return e === T[0].nodeId
                            })
                        }, [I, T]),
                        q = _ !== t6.uU.User,
                        U = (0, k.useContext)(Z.QL).historyDisabled,
                        O = (0, S.hz)().has(ed.FZ),
                        z = (0, t9.Fl)(),
                        W = z.isBrowsingAvailable,
                        H = z.isPluginsAvailable,
                        $ = z.isCodeInterpreterAvailable,
                        G = (0, N.tN)(function(e) {
                            return e.isDesktopNavCollapsed
                        }),
                        Y = T.some(function(e) {
                            return e.message.content.content_type === t6.PX.MultimodalText
                        }),
                        K = W || H || $,
                        X = (0, k.useRef)(null);
                    (0, k.useEffect)(function() {
                        var e;
                        null != v && C.messages.map(function(e) {
                            return e.message.id
                        }).includes(v) && (null === (e = X.current) || void 0 === e || e.scrollIntoView({
                            behavior: "auto"
                        }))
                    }, [v]);
                    var ee = T[T.length - 1],
                        et = ee.rating,
                        en = rV(),
                        ea = (0, k.useMemo)(function() {
                            return q && (null == T ? void 0 : T[0]) != null && (0, ne.Rc)(T[0].message) || x
                        }, [q, T, x]),
                        er = (0, k.useCallback)(function() {
                            if (1 === T.length) {
                                var e = _ === t6.uU.User ? eu.a.editPrompt : eu.a.editCompletion;
                                ec.o.logEvent(e, {
                                    id: T[0].message.id,
                                    threadId: P.tQ.getServerThreadId(o)
                                }), E(!0)
                            }
                        }, [T, _, o]),
                        ei = (0, k.useCallback)(function() {
                            E(!1)
                        }, []),
                        es = (0, k.useCallback)(function() {
                            P.tQ.copyMessageToClipboard(o, r)
                        }, [o, r]),
                        eo = (0, k.useCallback)(function(e) {
                            c(ee.nodeId, ee.message.id, e)
                        }, [ee, c]),
                        el = (0, B._)((0, k.useState)(function() {
                            return Date.now()
                        }), 1)[0],
                        ef = Q((0, k.useMemo)(function() {
                            return nm.Cv.getRequestIdFromConversationTurn(C)
                        }, [C])),
                        eg = V(),
                        em = (0, k.useMemo)(function() {
                            var e = !0,
                                t = !1,
                                n = void 0;
                            try {
                                for (var a, r = T[Symbol.iterator](); !(e = (a = r.next()).done); e = !0) {
                                    var i = a.value,
                                        s = (0, rp.ZC)(i).flagSeverity;
                                    if (void 0 !== s) return s
                                }
                            } catch (e) {
                                t = !0, n = e
                            } finally {
                                try {
                                    e || null == r.return || r.return()
                                } finally {
                                    if (t) throw n
                                }
                            }
                        }, [T]),
                        eh = (0, k.useMemo)(function() {
                            if (q) {
                                var e, t, n = P.tQ.getTree(o),
                                    a = T[0],
                                    r = null == a ? void 0 : a.nodeId;
                                if (null == a || null == r || "" === r) return null;
                                var i = n.getParentPromptNode(r),
                                    s = null == i ? void 0 : i.parentId;
                                if (null == s || "" === s) return null;
                                var l = n.getNodeByIdOrMessageId(s),
                                    c = null == l ? void 0 : null === (e = l.message) || void 0 === e ? void 0 : null === (t = e.metadata) || void 0 === t ? void 0 : t.model_slug;
                                if (ea && null != c && ea !== c) return iw.n2.has(c) ? "The previous model used in this conversation has been deprecated. We've switched you to the latest default model." : "The previous model used in this conversation is unavailable. We've switched you to the latest default model."
                            }
                            return null
                        }, [ea, q, T, o]),
                        ex = (0, k.useMemo)(function() {
                            if (!K) return {
                                avatarIcon: iI,
                                avatarColor: iZ
                            };
                            if (ef && T.length > 0) {
                                var e = T[T.length - 1],
                                    t = (0, ne.rH)(e.message);
                                switch (t) {
                                    case ne.Cs.Text:
                                        if ((0, ne.RR)(e.message).length > 0 || T.length > 1) return {
                                            avatarIcon: "text",
                                            avatarColor: iD
                                        };
                                        break;
                                    case ne.Cs.Browsing:
                                    case ne.Cs.BrowseTool:
                                        return {
                                            avatarIcon: "browsing",
                                            avatarColor: iD
                                        };
                                    case ne.Cs.Code:
                                    case ne.Cs.CodeExecutionOutput:
                                        return {
                                            avatarIcon: "code",
                                            avatarColor: iD
                                        };
                                    case ne.Cs.Plugin:
                                    case ne.Cs.PluginTool:
                                        var n = (0, ne.Lx)(t === ne.Cs.Plugin ? e.message.recipient : e.message.author.name),
                                            a = en.find(function(e) {
                                                return e.namespace === (null == n ? void 0 : n.namespace)
                                            });
                                        if (a) return {
                                            avatarPlugin: a
                                        };
                                        return {
                                            avatarIcon: "plugin",
                                            avatarColor: iD
                                        }
                                }
                            }
                            return {
                                avatarIcon: iI,
                                avatarColor: iZ
                            }
                        }, [K, ef, T, en]),
                        ev = ex.avatarIcon,
                        eb = ex.avatarColor,
                        ey = ex.avatarPlugin,
                        ej = (0, k.useCallback)(function(e, t, n, a) {
                            P.tQ.updateTree(o, function(r) {
                                var i = r.getParentId(e);
                                r.addNode(t, n, i, t6.Jq.Prompt, void 0, a)
                            })
                        }, [o]),
                        ew = (0, k.useMemo)(function() {
                            var e = [];
                            return T.forEach(function(t, n) {
                                var a = (0, ne.rH)(t.message),
                                    r = null == T ? void 0 : T[n - 1],
                                    i = null != r && ((0, ne.lD)(r.message) || (0, ne.qs)(t.message)),
                                    s = a === ne.Cs.Text && (0, ne.RR)(t.message);
                                if (a === ne.Cs.Browsing || a === ne.Cs.BrowseTool) {
                                    var o = e[e.length - 1];
                                    (null == o ? void 0 : o.type) === m.Browsing ? o.messages.push(t) : e.push({
                                        type: m.Browsing,
                                        messages: [t]
                                    })
                                } else if (a === ne.Cs.RetrievalBrowsing || a === ne.Cs.RetrievalBrowsingTool) {
                                    var l = e[e.length - 1];
                                    (null == l ? void 0 : l.type) === m.RetrievalBrowsing ? l.messages.push(t) : e.push({
                                        type: m.RetrievalBrowsing,
                                        messages: [t]
                                    })
                                } else if (a === ne.Cs.ParallelBrowsing || a === ne.Cs.ParallelBrowsingTool) {
                                    var c = e[e.length - 1];
                                    (null == c ? void 0 : c.type) === m.ParallelBrowsing ? c.messages.push(t) : e.push({
                                        type: m.ParallelBrowsing,
                                        messages: [t]
                                    })
                                } else if (a === ne.Cs.Plugin || a === ne.Cs.PluginTool) {
                                    var u = e[e.length - 1];
                                    a === ne.Cs.PluginTool && (null == u ? void 0 : u.type) === m.Plugin ? u.messages.push(t) : e.push({
                                        type: m.Plugin,
                                        messages: [t]
                                    })
                                } else if (a === ne.Cs.Dalle || a === ne.Cs.DalleTool) {
                                    var d = e[e.length - 1];
                                    a === ne.Cs.DalleTool && (null == d ? void 0 : d.type) === m.Dalle ? d.messages.push(t) : e.push({
                                        type: m.Dalle,
                                        messages: [t]
                                    })
                                } else if (a === ne.Cs.Code) e.push({
                                    type: m.Code,
                                    message: t
                                });
                                else if (a === ne.Cs.CodeExecutionOutput) e.push({
                                    type: m.CodeExecutionOutput,
                                    message: t
                                });
                                else if (i && null != s) {
                                    var f = e.pop();
                                    (null == f ? void 0 : f.type) === m.MultiText ? (f.messages.push(t), e.push(f)) : (null == f ? void 0 : f.type) === m.Text && e.push({
                                        type: m.MultiText,
                                        messages: [f.message, t]
                                    })
                                } else e.push({
                                    type: m.Text,
                                    message: t
                                })
                            }), e.map(function(t, n) {
                                var a, r = n === e.length - 1;
                                switch (t.type) {
                                    case m.Text:
                                        return (0, y.jsx)(r8, {
                                            className: "min-h-[20px]",
                                            message: t.message,
                                            isEditing: L,
                                            format: q,
                                            isCompletionInProgress: r && ef,
                                            onCreateEditNode: ej,
                                            clientThreadId: o,
                                            onUpdateNode: g,
                                            onDeleteNode: d,
                                            onChangeItemInView: l,
                                            onRequestCompletion: f,
                                            onExitEdit: ei,
                                            disabled: eg,
                                            isCompletion: q,
                                            onRequestMoreCompletions: u,
                                            isResponseToPluginMessage: (null === (a = e[n - 1]) || void 0 === a ? void 0 : a.type) === m.Plugin
                                        }, t.message.nodeId);
                                    case m.MultiText:
                                        return (0, y.jsx)(r9, {
                                            clientThreadId: o,
                                            messages: t.messages,
                                            isCompletionInProgress: r && ef,
                                            isCompletion: q,
                                            onRequestMoreCompletions: u
                                        }, n);
                                    case m.Browsing:
                                    case m.RetrievalBrowsing:
                                        var i = t.messages[t.messages.length - 1];
                                        return (0, y.jsx)(n1, {
                                            messages: t.messages,
                                            isComplete: !s || !r || !eg || ri(i.message),
                                            isRetrieval: t.type === m.RetrievalBrowsing
                                        }, t.messages[0].nodeId);
                                    case m.ParallelBrowsing:
                                        return (0, y.jsx)(ie, {
                                            messages: t.messages
                                        }, t.messages[0].nodeId);
                                    case m.Code:
                                        var c, h, p = e[n + 1],
                                            x = p && p.type === m.CodeExecutionOutput ? p.message : void 0;
                                        return (0, y.jsx)(rn, {
                                            clientThreadId: o,
                                            message: t.message,
                                            outputMessage: x,
                                            isComplete: !s || !r || !eg || (null == (h = null === (c = null == x ? void 0 : x.message.metadata) || void 0 === c ? void 0 : c.aggregate_result) ? void 0 : h.status) !== void 0 && (null == h ? void 0 : h.status) !== "running" || ri(t.message.message)
                                        }, t.message.nodeId);
                                    case m.CodeExecutionOutput:
                                        return (0, y.jsx)(ac, {
                                            message: t.message,
                                            isCollapsed: !1
                                        }, t.message.nodeId);
                                    case m.Plugin:
                                        return (0, y.jsx)(ix, {
                                            messages: t.messages
                                        }, t.messages[0].nodeId);
                                    case m.Dalle:
                                        return (0, y.jsx)(rm, {
                                            messages: t.messages
                                        }, t.messages[0].nodeId);
                                    default:
                                        return null
                                }
                            })
                        }, [T, L, q, ef, ej, o, g, d, l, f, ei, eg, u, s]),
                        ek = (0, P.r7)(o),
                        eM = !w && !j && !ek && !U && F && q && !ef && !p && !L && 1 === A && s && !ee.inlineComparisonRating && !et && 2 === I.length && Date.now() - (null !== (a = ee.message.create_time) && void 0 !== a ? a : 0) * 1e3 < 6e5,
                        eC = q && !p && !j && !ek,
                        e_ = !j && !p && !L,
                        eT = !q && !p && !j && !Y && 1 === T.length && !L,
                        eP = function(e) {
                            l(I[e]), ec.o.logEvent(eu.a.changeNode, {
                                intent: "toggle_between"
                            })
                        };
                    if (C.role === t6.uU.Unknown || C.role === t6.uU.System) return null;
                    var eN = eT ? (0, y.jsx)(iA, {
                            $isMessageRedesign: O,
                            onClick: er,
                            className: (0, J.default)(!O && F && "md:invisible md:group-hover:visible"),
                            children: (0, y.jsx)(ep.ZP, {
                                icon: M.vPQ
                            })
                        }) : null,
                        eS = q && !p ? (0, y.jsx)(nk.Z, {
                            onCopy: es,
                            className: (0, J.default)("rounded-md p-1", O ? "text-gray-500 hover:text-gray-700 dark:hover:text-gray-400" : "hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-200 disabled:dark:hover:text-gray-400")
                        }) : null,
                        eZ = eC && !w ? (0, y.jsxs)("div", {
                            className: "flex gap-1",
                            children: ["thumbsDown" !== et && !U && (0, y.jsx)(iA, {
                                $isMessageRedesign: O,
                                onClick: function() {
                                    return eo("thumbsUp")
                                },
                                disabled: "thumbsUp" === et,
                                className: (0, J.default)("thumbsUp" === et && (O ? "bg-gray-100 dark:bg-gray-700" : "!dark:text-gray-200 bg-gray-100 text-gray-700 dark:bg-gray-700")),
                                children: (0, y.jsx)(ep.ZP, {
                                    icon: M.fmn
                                })
                            }, "thumbsUp:".concat(ee.nodeId)), "thumbsUp" !== et && !U && (0, y.jsx)(iA, {
                                $isMessageRedesign: O,
                                onClick: function() {
                                    return eo("thumbsDown")
                                },
                                disabled: "thumbsDown" === et,
                                className: (0, J.default)("thumbsDown" === et && (O ? "bg-gray-100 dark:bg-gray-700" : "!dark:text-gray-200 bg-gray-100 text-gray-700 dark:bg-gray-700")),
                                children: (0, y.jsx)(ep.ZP, {
                                    icon: M.oLd
                                })
                            }, "thumbsDown:".concat(ee.nodeId))]
                        }) : null,
                        eI = eM ? (0, y.jsx)(nb, {
                            clientThreadId: o,
                            messageForRating: ee,
                            variantIds: I,
                            conversationTurnMountTime: el
                        }) : null,
                        eD = e_ && I.length > 1,
                        eB = function() {
                            return (0, y.jsxs)("div", {
                                className: "flex gap-1",
                                children: [eZ, eN, eS]
                            })
                        },
                        eF = null === (n = T[0].message.metadata) || void 0 === n ? void 0 : n.shared_conversation_id,
                        eR = null != eF;
                    return (0, y.jsxs)(iF, {
                        className: (0, J.default)("group", "w-full text-token-text-primary", O ? (0, J.default)("sm:rounded-2xl", q ? "my-2 hover:bg-gray-50/50 dark:hover:bg-gray-700/50" : "bg-gray-50 hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600") : (0, J.default)(!p && "border-b border-black/10 dark:border-gray-900/50", q ? "bg-gray-50 dark:bg-[#444654]" : "dark:bg-gray-800")),
                        ref: X,
                        children: [eh && (0, y.jsx)(iU, {
                            children: eh
                        }), (0, y.jsxs)(iL, {
                            $isStaticSharedThread: j,
                            $isDesktopNavCollapsed: G,
                            $isMessageRedesign: O,
                            className: (0, J.default)(p ? "ml-5" : "m-auto"),
                            children: [(0, y.jsxs)(iE, {
                                children: [(0, y.jsx)("div", {
                                    className: O ? "" : "w-[30px]",
                                    children: q ? ey ? (0, y.jsx)(e0.Ph, {
                                        plugin: ey,
                                        notice: null != em ? em : void 0
                                    }) : (0, y.jsx)(e0.k$, {
                                        background: null != b ? b : eb,
                                        iconName: ev,
                                        notice: null != em ? em : void 0
                                    }) : eR || p ? (0, y.jsx)(e0.k$, {
                                        background: iS[(null !== (t = null == eF ? void 0 : eF.charCodeAt(0)) && void 0 !== t ? t : 0) % iS.length],
                                        iconName: "user"
                                    }) : (0, y.jsx)(e0.zf, {
                                        notice: null != em ? em : void 0
                                    })
                                }), !O && e_ && F && (0, y.jsx)(ij.Z, {
                                    currentPage: A,
                                    onChangeIndex: eP,
                                    length: I.length,
                                    className: (0, J.default)("invisible absolute left-0 top-2 -ml-4 -translate-x-full group-hover:visible", I.length > 1 ? "visible" : "!invisible")
                                })]
                            }), (0, y.jsxs)("div", {
                                className: (0, J.default)("relative", O ? "min-w-0 grow" : "flex w-[calc(100%-50px)] flex-col gap-1 md:gap-3 lg:w-[calc(100%-115px)]"),
                                children: [O && (0, y.jsx)("div", {
                                    className: "mb-1 select-none text-xs font-medium tracking-wide text-gray-400",
                                    children: q ? "ChatGPT" : eR ? "User" : "You"
                                }), (0, y.jsx)(iR, {
                                    children: ew
                                }), O ? (!F || eD || null != eI) && !p && (0, y.jsxs)("div", {
                                    className: "mt-2 flex flex-col gap-4",
                                    children: [(0, y.jsxs)("div", {
                                        className: "flex gap-2 text-gray-400",
                                        children: [eD && (0, y.jsx)(ij.Z, {
                                            currentPage: A,
                                            onChangeIndex: eP,
                                            length: I.length,
                                            className: "rounded-xl border border-gray-100 bg-white p-1 dark:border-gray-600 dark:bg-gray-700"
                                        }), !F && eB()]
                                    }), eI]
                                }) : (0, y.jsxs)(y.Fragment, {
                                    children: [eT && F && (0, y.jsx)(iq, {
                                        $hidden: eg,
                                        children: eN
                                    }), (eC || e_) && (0, y.jsxs)("div", {
                                        className: "flex justify-between lg:block",
                                        children: [!F && e_ && (0, y.jsx)(ij.Z, {
                                            currentPage: A,
                                            onChangeIndex: eP,
                                            length: I.length,
                                            className: (0, J.default)("self-center pt-2", I.length > 1 ? "visible" : "!invisible")
                                        }), eT && !F && (0, y.jsx)(iq, {
                                            $hidden: ef,
                                            children: eN
                                        }), eC && (0, y.jsxs)(iq, {
                                            $hidden: ef,
                                            children: [eS, eZ]
                                        }), eM && eI]
                                    })]
                                })]
                            }), O && F && !L && !p && (!j || q) && (0, y.jsx)("div", {
                                className: "absolute -top-4 right-4 hidden rounded bg-white p-1 shadow-[0_0.5px_2px_rgba(0,0,0,0.15)] group-hover:block dark:bg-gray-900",
                                children: eB()
                            })]
                        })]
                    })
                }),
                iF = el.Z.div(ik()),
                iR = el.Z.div(iM()),
                iL = el.Z.div(iC(), function(e) {
                    return e.$isMessageRedesign ? "relative" : e.$isDesktopNavCollapsed ? "text-base md:gap-6 md:max-w-3xl md:py-6 lg:px-0" : "text-base md:gap-6 md:max-w-2xl lg:max-w-[38rem] xl:max-w-3xl md:py-6 lg:px-0"
                }, function(e) {
                    return e.$isStaticSharedThread ? "pl-0 pr-4" : ""
                }),
                iE = el.Z.div(i_()),
                iA = el.Z.button(iT(), function(e) {
                    return e.$isMessageRedesign ? "text-gray-500 enabled:hover:text-gray-700 enabled:dark:hover:text-gray-400 rounded-sm" : "rounded-md hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-200 disabled:dark:hover:text-gray-400"
                }),
                iq = el.Z.div(iP(), function(e) {
                    return e.$hidden ? "invisible" : "visible"
                }),
                iU = el.Z.div(iN());

            function iO() {
                var e = (0, G._)(["mb-2 mt-auto ml-auto mr-auto"]);
                return iO = function() {
                    return e
                }, e
            }

            function iz() {
                var e = (0, G._)(["relative rounded-md border border-black/10 bg-gray-50 dark:border-gray-900/50 dark:bg-[#444654] flex flex-col overflow-hidden"]);
                return iz = function() {
                    return e
                }, e
            }

            function iW() {
                var e = (0, G._)(["mb-5 border dark:bg-gray-800 overflow-hidden"]);
                return iW = function() {
                    return e
                }, e
            }

            function iH() {
                var e = (0, G._)([""]);
                return iH = function() {
                    return e
                }, e
            }
            var iQ = (0, _.vU)({
                submitFeedback: {
                    id: "feedbackModal.submitFeedback",
                    defaultMessage: "Submit feedback",
                    description: "Button text for submitting the feedback"
                },
                submitReport: {
                    id: "feedbackModal.submitReport",
                    defaultMessage: "Submit report",
                    description: "Button text for submitting a content-moderation report"
                },
                submitRejectModeration: {
                    id: "feedbackModal.moderationReject",
                    defaultMessage: "Block Content",
                    description: "Button text for rejecting the share link and blocking it from being viewed"
                },
                submitAcceptModeration: {
                    id: "feedbackModal.moderationAccept",
                    defaultMessage: "Allow Content",
                    description: "Button text for accepting the share link and allowing it to be viewed"
                },
                thumbsUpPlaceholder: {
                    id: "feedbackModal.thumbsUpPlaceholder",
                    defaultMessage: "What do you like about the response?",
                    description: "Placeholder for textarea input when user chooses thumbs up"
                },
                thumbsDownPlaceholder: {
                    id: "feedbackModal.thumbsDownPlaceholder",
                    defaultMessage: "What was the issue with the response? How could it be improved?",
                    description: "Placeholder for textarea input when user chooses thumbs down"
                },
                reportContentExplanationPlaceholder: {
                    id: "feedbackModal.reportContentExplanationPlaceholder",
                    defaultMessage: "What is wrong with the response? What about this response is harmful? Please be as specific as possible, and add any details that are not present in the checkboxes below.",
                    description: "Placeholder for textarea input when user chooses to report a shared chat"
                },
                harmfulUnsafe: {
                    id: "feedbackModal.harmfulUnsafe",
                    defaultMessage: "This is harmful / unsafe",
                    description: "Label for harmful/unsafe checkbox"
                },
                harmfulOffensive: {
                    id: "feedbackModal.harmfulOffensive",
                    defaultMessage: "This content is harmful or offensive",
                    description: "Label for harmful/offensive checkbox"
                },
                copyrightContent: {
                    id: "feedbackModal.copyrightContent",
                    defaultMessage: "This content violates copyright law",
                    description: "Label for Copyrighted Content checkbox"
                },
                reportOtherContent: {
                    id: "feedbackModal.reportOtherContent",
                    defaultMessage: "I don't like this for some other reason (please describe)",
                    description: "Label for Report Other Content checkbox"
                },
                notTrue: {
                    id: "feedbackModal.notTrue",
                    defaultMessage: "This isn't true",
                    description: "Label for not true checkbox"
                },
                notHelpful: {
                    id: "feedbackModal.notHelpful",
                    defaultMessage: "This isn't helpful",
                    description: "Label for not helpful checkbox"
                },
                dontLikeThis: {
                    id: "feedbackModal.dontLikeThis",
                    defaultMessage: "I don't like this",
                    description: "Label for I Don't Like This checkbox"
                },
                sexualAbuse: {
                    id: "feedbackModal.sexualAbuse",
                    defaultMessage: "This content contains sexual abuse",
                    description: "Label for Sexual Abuse checkbox"
                },
                provideAdditionalFeedback: {
                    id: "feedbackModal.provideAdditionalFeedback",
                    defaultMessage: "Provide additional feedback",
                    description: "Title for the critique feedback modal"
                },
                provideReportModalTitle: {
                    id: "feedbackModal.provideReportModalTitle",
                    defaultMessage: "Report This Content",
                    description: "Title for the 'report' feedback modal"
                },
                pickBestAnswer: {
                    id: "feedbackModal.pickBestAnswer",
                    defaultMessage: "Pick the best answer to improve the model",
                    description: "Title for the compare feedback modal"
                },
                newAnswer: {
                    id: "feedbackModal.newAnswer",
                    defaultMessage: "New Answer",
                    description: "Title for the new answer during comparison"
                },
                originalAnswer: {
                    id: "feedbackModal.originalAnswer",
                    defaultMessage: "Original Answer",
                    description: "Title for the original answer during comparison"
                },
                newAnswerBetter: {
                    id: "feedbackModal.newAnswerBetter",
                    defaultMessage: "New answer is better",
                    description: "Button text for choosing new answer during comparison"
                },
                originalAnswerBetter: {
                    id: "feedbackModal.originalAnswerBetter",
                    defaultMessage: "Original answer is better",
                    description: "Button text for choosing original answer during comparison"
                },
                neitherAnswerBetter: {
                    id: "feedbackModal.neitherAnswerBetter",
                    defaultMessage: "Neither answer is better",
                    description: "Button text for choosing neither answer during comparison"
                },
                skipStep: {
                    id: "feedbackModal.skipStep",
                    defaultMessage: "Skip this step",
                    description: "Button text for skipping comparison step"
                },
                continueWithChosenAnswer: {
                    id: "feedbackModal.continueWithChosenAnswer",
                    defaultMessage: "The conversation will continue with the answer you choose.",
                    description: "Information text for user during comparison"
                }
            });

            function iV(e) {
                var t, n, a, r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                return (null == e ? void 0 : null === (t = e.messages) || void 0 === t ? void 0 : t.length) === 1 && !(null == e ? void 0 : null === (n = e.messages) || void 0 === n ? void 0 : n.some(function(e) {
                    return "error" in e
                })) && (!r || !((null == e ? void 0 : null === (a = e.messages) || void 0 === a ? void 0 : a.length) === 1 && (0, ne.RR)(null == e ? void 0 : e.messages[0].message).length < 20))
            }

            function i$(e) {
                var t, n, a = e.ratingModalNodeId,
                    r = e.ratingModalOpen,
                    i = e.onCloseRatingModal,
                    s = e.handleSubmitFeedback,
                    o = e.onHandleChangeFeedbackComparisonRating,
                    l = e.feedbackTextareaRef,
                    c = e.clientThreadId,
                    u = e.currentModelId,
                    d = e.onChangeItemInView,
                    f = e.onRequestMoreCompletions,
                    g = e.onDeleteNode,
                    m = e.onRequestCompletion,
                    h = e.onUpdateNode,
                    p = (0, eo.Z)(),
                    x = P.tQ.getTree(c),
                    b = (0, P.XK)(c);
                (0, k.useEffect)(function() {
                    "report" === r && eY.pg.forceEnableSession()
                }, [r]);
                var j = (0, k.useRef)(.5 > Math.random() ? "left" : "right"),
                    w = null == x ? void 0 : x.getConversationTurns(a || "root"),
                    _ = w.length - 1,
                    N = w[w.length - 1],
                    Z = (0, S.hz)().has(ed.FZ),
                    I = (0, B._)((0, k.useState)("critique"), 2),
                    F = I[0],
                    R = I[1],
                    L = (0, D.w$)(),
                    E = iV(N, !0) && L,
                    A = (0, k.useMemo)(function() {
                        return {
                            id: a || "root",
                            threadId: P.tQ.getServerThreadId(c),
                            rating: r,
                            model: u
                        }
                    }, [a, c, r, u]),
                    q = null == w ? void 0 : w[(null == w ? void 0 : w.length) - 1].variantIds,
                    O = null == q ? void 0 : q[(null == q ? void 0 : q.length) - 1],
                    z = (n = (t = null == x ? void 0 : x.getConversationTurns(O))[t.length - 1]).messages[n.messages.length - 1].nodeId,
                    W = null == x ? void 0 : x.getConversationTurns(z),
                    H = (0, k.useMemo)(function() {
                        var e = null == W ? void 0 : W[(null == W ? void 0 : W.length) - 1];
                        return "thumbsDown" === r && E && iV(e) && iV(N)
                    }, [r, E, W, N]),
                    V = (0, k.useRef)(Date.now()),
                    $ = (0, k.useRef)(-1),
                    G = (0, k.useRef)(Date.now()),
                    Y = (0, k.useRef)(Date.now());
                (0, k.useEffect)(function() {
                    "compare" === F ? ($.current = Date.now(), ec.o.logEvent(eu.a.displayedComparisonUIV0, A)) : "critique" === F && "thumbsDown" === r && ec.o.logEvent(eu.a.displayedThumbsDownFeedbackForm, A)
                }, [F]);
                var K = w.length - 2,
                    X = W.length - 1,
                    ee = W[W.length - 1],
                    et = Q((0, k.useMemo)(function() {
                        return ee && nm.Cv.getRequestIdFromConversationTurn(ee)
                    }, [ee]));
                (0, k.useMemo)(function() {
                    et || (Y.current = Date.now())
                }, [et]);
                var en = N.messages,
                    ea = en[en.length - 1],
                    er = ea.message.id,
                    ei = ea.nodeId,
                    el = x.getLeafFromNode(ei),
                    ef = ee.messages,
                    eg = ef[ef.length - 1],
                    ep = eg.message.id,
                    ex = eg.nodeId,
                    ev = x.getLeafFromNode(ex),
                    eb = "critique" === F ? "report" === r ? p.formatMessage(iQ.provideReportModalTitle) : p.formatMessage(iQ.provideAdditionalFeedback) : p.formatMessage(iQ.pickBestAnswer),
                    ey = (0, k.useRef)([]),
                    ej = (0, k.useRef)(""),
                    ew = (0, k.useCallback)(function() {
                        var e, t = null === (e = l.current) || void 0 === e ? void 0 : e.elements;
                        ey.current = (0, e7._)(t || []).filter(function(e) {
                            return e.checked
                        }).map(function(e) {
                            return e.id
                        }).map(function(e) {
                            return e.replace("feedback-", "")
                        }), ej.current = (null == t ? void 0 : t["feedback-other"].value) || ""
                    }, [l]),
                    ek = (0, k.useCallback)(function() {
                        ew(), s(ej.current, ey.current), "thumbsDown" === r && ec.o.logEvent(eu.a.submitThumbsDownFeedbackForm, A), H ? R("compare") : i()
                    }, [ew, s, r, H, A, i]),
                    eM = (0, k.useCallback)(function(e, t) {
                        var n = P.tQ.getServerThreadId(c);
                        if (null != n) {
                            var a = P.tQ.getThreadCurrentLeafId(c);
                            T.ZP.submitSharedConversationReportFeedback({
                                message_id: a,
                                shared_conversation_id: n,
                                text: e,
                                tags: t
                            }).then(function() {
                                ti.m.success("Moderation logged successfully")
                            }).catch(function() {
                                ti.m.danger("Moderation NOT logged successfully! Please try again")
                            }), i()
                        }
                    }, [c, i]),
                    eC = (0, k.useCallback)(function() {
                        ew(), ey.current.push("moderation-reject"), eM(ej.current, ey.current)
                    }, [eM, ew]),
                    e_ = (0, k.useCallback)(function() {
                        ew(), ey.current.push("moderation-accept"), eM(ej.current, ey.current)
                    }, [eM, ew]),
                    eT = "moderate" === r ? (0, y.jsxs)(y.Fragment, {
                        children: [(0, y.jsx)(em.ZP.Button, {
                            title: p.formatMessage(iQ.submitRejectModeration),
                            color: "danger",
                            onClick: eC
                        }), (0, y.jsx)(em.ZP.Button, {
                            title: p.formatMessage(iQ.submitAcceptModeration),
                            color: "primary",
                            onClick: e_
                        })]
                    }) : "critique" === F ? (0, y.jsx)(em.ZP.Button, {
                        title: p.formatMessage("report" === r ? iQ.submitReport : iQ.submitFeedback),
                        onClick: ek
                    }) : null,
                    eP = "left" === j.current,
                    eN = eP ? ei : ex,
                    eS = eP ? "new" : "original",
                    eZ = eP ? "original" : "new",
                    eI = eP ? p.formatMessage(iQ.newAnswer) : p.formatMessage(iQ.originalAnswer),
                    eD = eP ? p.formatMessage(iQ.originalAnswer) : p.formatMessage(iQ.newAnswer),
                    eB = eP ? p.formatMessage(iQ.newAnswerBetter) : p.formatMessage(iQ.originalAnswerBetter),
                    eF = eP ? p.formatMessage(iQ.originalAnswerBetter) : p.formatMessage(iQ.newAnswerBetter),
                    eR = r && "report" !== r && "moderate" !== r,
                    eL = (0, k.useCallback)(function(e) {
                        var t = "left" === e ? eS : "right" === e ? eZ : "same";
                        if (ec.o.logEvent(eu.a.submittedComparisonUIV0, Object.assign({}, A, {
                                choice: t
                            })), eR) {
                            var n = P.tQ.getTree(c),
                                a = n.getMetadata(ei);
                            n.updateNode(ei, {
                                metadata: {
                                    $set: (0, U._)((0, v._)({}, a), {
                                        inlineComparisonRating: "baseline"
                                    })
                                }
                            });
                            var s = n.getMetadata(ex);
                            n.updateNode(ex, {
                                metadata: {
                                    $set: (0, U._)((0, v._)({}, s), {
                                        inlineComparisonRating: t
                                    })
                                }
                            }), o(er, ep, r, t, j.current, V.current, $.current, G.current, Y.current, ej.current, ey.current)
                        }
                        P.tQ.setThreadCurrentLeafId(c, e === j.current ? ev.id : el.id), i()
                    }, [eS, eZ, A, eR, c, ev.id, el.id, i, ei, ex, o, er, ep, r]),
                    eE = !et && null != Y.current && H,
                    eA = (0, k.useCallback)(function() {
                        i(), "critique" === F ? ec.o.logEvent(eu.a.skippedThumbsDownFeedbackForm, Object.assign({}, A)) : "compare" === F && ec.o.logEvent(eu.a.skippedComparisonUIV0, Object.assign({}, A))
                    }, [i, A, F]),
                    eq = (0, B._)((0, k.useState)([]), 2),
                    eU = eq[0],
                    eO = eq[1];
                return (0, k.useEffect)(function() {
                    "moderate" === r && T.ZP.fetchShareModerationCategories().then(function(e) {
                        var t = e.moderation_categories;
                        eO(Object.keys(t).map(function(e) {
                            return [e, t[e]]
                        }))
                    })
                }, []), (0, y.jsxs)(eh.Z, {
                    isOpen: !0,
                    onClose: eA,
                    size: "custom",
                    className: "md:max-w-[672px] lg:max-w-[896px] xl:max-w-6xl",
                    type: "critique" === F ? "thumbsUp" === r ? "success" : "danger" : "success",
                    icon: "critique" === F ? "thumbsUp" === r ? M.fmn : M.oLd : void 0,
                    title: eb,
                    closeButton: (0, y.jsx)(em.ZP.CloseButton, {
                        onClose: eA
                    }),
                    children: ["critique" === F && (0, y.jsxs)("form", {
                        ref: l,
                        children: [(0, y.jsx)(ng.ZP, {
                            id: "feedback-other",
                            placeholder: "thumbsUp" === r ? p.formatMessage(iQ.thumbsUpPlaceholder) : "report" === r ? p.formatMessage(iQ.reportContentExplanationPlaceholder) : p.formatMessage(iQ.thumbsDownPlaceholder),
                            rows: 3,
                            className: "mb-1 mt-4 w-full rounded-md dark:bg-gray-800 dark:focus:border-white dark:focus:ring-white"
                        }), "thumbsDown" === r && (0, y.jsxs)("div", {
                            className: "mb-4",
                            children: [(0, y.jsx)(nh, {
                                id: "feedback-harmful",
                                label: p.formatMessage(iQ.harmfulUnsafe)
                            }), (0, y.jsx)(nh, {
                                id: "feedback-false",
                                label: p.formatMessage(iQ.notTrue)
                            }), (0, y.jsx)(nh, {
                                id: "feedback-not-helpful",
                                label: p.formatMessage(iQ.notHelpful)
                            })]
                        }), null != r && !eR && (0, y.jsx)(y.Fragment, {
                            children: (0, y.jsxs)("div", {
                                className: "mb-4",
                                children: ["report" === r && (0, y.jsxs)(y.Fragment, {
                                    children: [(0, y.jsx)(nh, {
                                        id: "feedback-dont-like-this",
                                        label: p.formatMessage(iQ.dontLikeThis)
                                    }), (0, y.jsx)(nh, {
                                        id: "feedback-false",
                                        label: p.formatMessage(iQ.notTrue)
                                    }), (0, y.jsx)(nh, {
                                        id: "feedback-not-helpful",
                                        label: p.formatMessage(iQ.notHelpful)
                                    }), (0, y.jsx)(nh, {
                                        id: "feedback-harmful-offensive",
                                        label: p.formatMessage(iQ.harmfulOffensive)
                                    }), (0, y.jsx)(nh, {
                                        id: "feedback-sexual-abuse",
                                        label: p.formatMessage(iQ.sexualAbuse)
                                    })]
                                }), "moderate" === r && (0, y.jsxs)(y.Fragment, {
                                    children: [eU.map(function(e) {
                                        var t = (0, B._)(e, 2),
                                            n = t[0],
                                            a = t[1];
                                        return (0, y.jsx)(nh, {
                                            id: "feedback-" + n,
                                            label: a
                                        }, n)
                                    }), (0, y.jsx)(nh, {
                                        id: "feedback-copyright",
                                        label: p.formatMessage(iQ.copyrightContent)
                                    })]
                                }), (0, y.jsx)(nh, {
                                    id: "feedback-content-other",
                                    label: p.formatMessage(iQ.reportOtherContent)
                                })]
                            })
                        })]
                    }), "compare" === F && W && void 0 !== b && (0, y.jsxs)("div", {
                        className: (0, J.default)("w-full"),
                        children: [(0, y.jsx)("p", {
                            className: (0, J.default)("mb-7 mt-3"),
                            children: (0, y.jsx)(C.Z, (0, v._)({}, iQ.continueWithChosenAnswer))
                        }), (0, y.jsx)(iY, {
                            className: Z ? "rounded-2xl" : "rounded-md",
                            children: (0, y.jsx)(iK, {
                                children: (0, y.jsx)(iB, {
                                    currentModelId: u,
                                    turnIndex: K,
                                    conversationLeafId: eN,
                                    isFinalTurn: !1,
                                    clientThreadId: c,
                                    onChangeItemInView: d,
                                    onChangeRating: es(),
                                    onRequestMoreCompletions: f,
                                    onDeleteNode: g,
                                    onRequestCompletion: m,
                                    onUpdateNode: h,
                                    showInlineEmbeddedDisplay: !0
                                })
                            })
                        }), (0, y.jsxs)("div", {
                            className: (0, J.default)(),
                            children: [(0, y.jsxs)("div", {
                                className: (0, J.default)("mb-2 grid w-full grid-cols-2 gap-5"),
                                children: [(0, y.jsx)("div", {
                                    children: (0, y.jsx)("p", {
                                        className: (0, J.default)("font-semibold"),
                                        children: eI
                                    })
                                }), (0, y.jsx)("div", {
                                    children: (0, y.jsx)("p", {
                                        className: (0, J.default)("font-semibold"),
                                        children: eD
                                    })
                                })]
                            }), (0, y.jsxs)("div", {
                                className: (0, J.default)("mb-5 grid w-full grid-cols-2 gap-5"),
                                children: [(0, y.jsxs)(iJ, {
                                    children: [(0, y.jsx)(iK, {
                                        children: (0, y.jsx)(iB, {
                                            currentModelId: u,
                                            turnIndex: eP ? X : _,
                                            conversationLeafId: eP ? ex : ei,
                                            isFinalTurn: !0,
                                            clientThreadId: c,
                                            onChangeItemInView: d,
                                            onChangeRating: es(),
                                            onDeleteNode: g,
                                            onRequestMoreCompletions: f,
                                            onRequestCompletion: m,
                                            onUpdateNode: h,
                                            showInlineEmbeddedDisplay: !0
                                        })
                                    }), (0, y.jsx)(iG, {
                                        children: (0, y.jsx)(em.ZP.Button, {
                                            disabled: !eE,
                                            title: eB,
                                            onClick: function() {
                                                return eL("left")
                                            },
                                            color: "dark"
                                        })
                                    })]
                                }), (0, y.jsxs)(iJ, {
                                    children: [(0, y.jsx)(iK, {
                                        children: (0, y.jsx)(iB, {
                                            currentModelId: u,
                                            turnIndex: eP ? _ : X,
                                            conversationLeafId: eN,
                                            isFinalTurn: !0,
                                            clientThreadId: c,
                                            onChangeItemInView: d,
                                            onChangeRating: es(),
                                            onDeleteNode: g,
                                            onRequestMoreCompletions: f,
                                            onRequestCompletion: m,
                                            onUpdateNode: h,
                                            showInlineEmbeddedDisplay: !0
                                        })
                                    }), (0, y.jsx)(iG, {
                                        children: (0, y.jsx)(em.ZP.Button, {
                                            disabled: !eE,
                                            title: eF,
                                            onClick: function() {
                                                return eL("right")
                                            },
                                            color: "dark"
                                        })
                                    })]
                                })]
                            }), (0, y.jsx)("div", {
                                className: (0, J.default)("grid w-full"),
                                children: (0, y.jsxs)("div", {
                                    className: (0, J.default)("mb-2 text-right"),
                                    children: [(0, y.jsx)(em.ZP.Button, {
                                        disabled: !eE,
                                        title: p.formatMessage(iQ.neitherAnswerBetter),
                                        color: "primary",
                                        onClick: function() {
                                            return eL("same")
                                        },
                                        className: (0, J.default)("mr-2")
                                    }), (0, y.jsx)(em.ZP.Button, {
                                        title: p.formatMessage(iQ.skipStep),
                                        onClick: function() {
                                            return i()
                                        }
                                    })]
                                })
                            })]
                        })]
                    }), (0, y.jsx)(em.ZP.Actions, {
                        primaryButton: eT
                    })]
                }, "RatingModal-".concat(a))
            }
            var iG = el.Z.div(iO()),
                iJ = el.Z.div(iz()),
                iY = el.Z.div(iW()),
                iK = el.Z.div(iH()),
                iX = n(65261),
                i0 = n(50744),
                i1 = n(87389),
                i2 = n(31486),
                i3 = n(85330);

            function i4() {
                var e, t, n, a, r, i, s = (0, eo.Z)(),
                    o = (t = (e = (0, i1.S)()).isLoggedInWithMfa, n = e.isUsernamePassword, a = e.setupMfa, i = (r = (0, i3.p0)()).filter(function(e) {
                        return !("none" === e.manifest.auth.type || "service_http" === e.manifest.auth.type)
                    }), (t || !n) && (i = []), {
                        disablePluginsThatWeCantUse: function() {
                            var e = r.filter(function(e) {
                                return "none" === e.manifest.auth.type || "service_http" === e.manifest.auth.type
                            });
                            (0, i3.dT)(e.map(function(e) {
                                return e.id
                            }))
                        },
                        pluginsWeCantUse: i,
                        setupMfa: a
                    }),
                    l = o.disablePluginsThatWeCantUse,
                    c = o.pluginsWeCantUse,
                    u = o.setupMfa,
                    d = (0, k.useCallback)(function() {
                        l()
                    }, [l]);
                return 0 === c.length ? null : (0, y.jsx)(eh.Z, {
                    isOpen: !0,
                    onClose: d,
                    title: (0, y.jsx)(C.Z, (0, v._)({}, i5.title)),
                    primaryButton: (0, y.jsx)(em.ZP.Button, {
                        onClick: u,
                        title: s.formatMessage(i5.primaryButtonTitle),
                        color: "primary"
                    }),
                    secondaryButton: (0, y.jsx)(em.ZP.Button, {
                        onClick: l,
                        title: s.formatMessage(i5.secondaryButtonTitle)
                    }),
                    type: "danger",
                    children: (0, y.jsx)("div", {
                        className: "flex flex-col gap-2 py-4",
                        children: c.map(function(e) {
                            return (0, y.jsx)("div", {
                                className: "w-full",
                                children: (0, y.jsx)(i2.Z, {
                                    plugin: e
                                })
                            }, e.id)
                        })
                    })
                })
            }
            var i5 = (0, _.vU)({
                    title: {
                        id: "RequireMfaForAuthPluginsModal.title",
                        description: "Title for the Require MFA for Auth Plugins modal",
                        defaultMessage: "Some of your plugins require two-factor authentication."
                    },
                    primaryButtonTitle: {
                        id: "RequireMfaForAuthPluginsModal.primaryButtonTitle",
                        description: "Title for the primary button to set up two-factor authentication",
                        defaultMessage: "Setup two-factor authentication"
                    },
                    secondaryButtonTitle: {
                        id: "RequireMfaForAuthPluginsModal.secondaryButtonTitle",
                        description: "Title for the secondary button to disable plugins",
                        defaultMessage: "Turn off the plugins"
                    }
                }),
                i8 = n(56817),
                i7 = n(96175),
                i6 = n(19350),
                i9 = n(51061);

            function se(e) {
                var t = e.isOpen,
                    n = e.onClose,
                    a = (0, B._)((0, k.useState)(!1), 2),
                    r = a[0],
                    i = a[1],
                    s = (0, w.useRouter)(),
                    o = (0, k.useCallback)(function() {
                        ec.o.logEvent(eu.a.closeAccountPaymentModal), n()
                    }, [n]),
                    l = (0, k.useCallback)((0, eQ._)(function() {
                        var e;
                        return (0, eV.Jh)(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    i(!0), ec.o.logEvent(eu.a.clickAccountCustomerPortal), t.label = 1;
                                case 1:
                                    return t.trys.push([1, 3, 4, 5]), [4, T.ZP.fetchCustomerPortalUrl()];
                                case 2:
                                    return e = t.sent(), s.push(e.url), [3, 5];
                                case 3:
                                    return t.sent(), ti.m.warning("The account management page encountered an error. Please try again. If the problem continues, please visit help.openai.com.", {
                                        hasCloseButton: !0
                                    }), [3, 5];
                                case 4:
                                    return i(!1), [7];
                                case 5:
                                    return [2]
                            }
                        })
                    }), [s, i]),
                    c = (0, k.useCallback)(function() {
                        ec.o.logEvent(eu.a.clickAccountPaymentGetHelp)
                    }, []),
                    u = (0, k.useCallback)(function() {
                        ec.o.logEvent(eu.a.clickAccountManageIos)
                    }, []),
                    d = (0, k.useCallback)(function() {
                        ec.o.logEvent(eu.a.clickAccountManageAndroid)
                    }, []),
                    f = (0, S.e2)(),
                    g = (0, S.YD)();
                return (0, y.jsxs)(i7.x, {
                    isOpen: t,
                    onClose: n,
                    children: [(0, y.jsxs)("div", {
                        className: "flex w-full flex-row items-center justify-between border-b px-4 py-3 dark:border-gray-700",
                        children: [(0, y.jsx)("span", {
                            className: "text-base font-semibold sm:text-base",
                            children: (0, y.jsx)(C.Z, (0, v._)({}, st.modalTitle))
                        }), (0, y.jsx)("button", {
                            className: "text-gray-700 opacity-50 transition hover:opacity-75 dark:text-white",
                            onClick: o,
                            children: (0, y.jsx)(M.q5L, {
                                className: "h-6 w-6"
                            })
                        })]
                    }), (0, y.jsx)("div", {
                        className: "grid",
                        children: (0, y.jsx)("div", {
                            className: "relative order-1 col-span-1 sm:order-2",
                            children: (0, y.jsx)(i6.Oi, {
                                rowElements: [(0, y.jsx)(i6.Cu, {
                                    text: i9.S.plus.name,
                                    children: (0, y.jsx)("span", {
                                        className: "font-semibold text-gray-500",
                                        children: i9.S.plus.costInDollars
                                    })
                                }, "row-plus-plan-name"), (0, y.jsx)(i6.hi, {
                                    disabled: !0,
                                    variant: "primary-disabled",
                                    text: i9.S.plus.callToAction.active
                                }, "row-plus-plan-button"), (0, y.jsx)(i6.G, {
                                    text: i9.S.plus.demandAccess
                                }, "row-plus-plan-demand"), (0, y.jsx)(i6.G, {
                                    text: i9.S.plus.responseSpeed
                                }, "row-plus-plan-speed"), (0, y.jsx)(i6.G, {
                                    className: "sm:pb-1",
                                    text: i9.S.plus.modelFeatures
                                }, "row-plus-plan-feathers"), (null == f ? void 0 : f.purchase_origin_platform) === i8._4.MOBILE_IOS && (0, y.jsx)(tD(), {
                                    href: i8.m1,
                                    target: "_blank",
                                    passHref: !0,
                                    children: (0, y.jsx)(i6.nR, {
                                        className: "sm:pb-1",
                                        isLoading: !1,
                                        text: i9.S.manageSubscriptionIos.callToAction,
                                        onClick: u
                                    })
                                }, "row-plus-plan-manage-ios"), (null == f ? void 0 : f.purchase_origin_platform) === i8._4.MOBILE_ANDROID && (0, y.jsx)(tD(), {
                                    href: i8.Zr,
                                    target: "_blank",
                                    passHref: !0,
                                    children: (0, y.jsx)(i6.nR, {
                                        className: "sm:pb-1",
                                        isLoading: !1,
                                        text: i9.S.manageSubscriptionAndroid.callToAction,
                                        onClick: d
                                    })
                                }, "row-plus-plan-manage-android"), (!f || f.purchase_origin_platform === i8._4.WEBAPP || f.purchase_origin_platform === i8._4.GRANTED) && g && (0, y.jsx)(i6.nR, {
                                    className: "sm:pb-1",
                                    isLoading: r,
                                    text: i9.S.manageSubscriptionWeb.callToAction,
                                    onClick: l
                                }, "row-plus-plan-manage"), (0, y.jsx)(tD(), {
                                    href: i8.ti,
                                    target: "_blank",
                                    passHref: !0,
                                    children: (0, y.jsx)(i6.nR, {
                                        className: "sm:pb-1",
                                        isLoading: !1,
                                        isTextOnly: !0,
                                        text: i9.S.getHelp.callToAction,
                                        onClick: c
                                    }, "row-plus-plan-help")
                                }, "row-plus-plan-help-link")]
                            })
                        })
                    })]
                })
            }
            var st = (0, _.vU)({
                    modalTitle: {
                        id: "AccountCustomerPortalModal.modalTitle",
                        description: "Title for the account custom portal page modal",
                        defaultMessage: "Your plan"
                    }
                }),
                sn = n(93683),
                sa = n(32566),
                sr = n(26003),
                si = n(13002),
                ss = (0, k.createContext)(),
                so = function(e) {
                    return (0, z.oR)((0, k.useContext)(ss), e)
                },
                sl = n(68993);

            function sc(e) {
                return e.some(function(e) {
                    return e.messages.some(function(e) {
                        var t, n, a, r;
                        return (null == (a = null === (t = e.message.metadata) || void 0 === t ? void 0 : t.aggregate_result) ? void 0 : null === (n = a.messages) || void 0 === n ? void 0 : n.some(ag)) || ("parts" in (r = e.message.content) ? r.parts.join("") : "").includes("sandbox:")
                    })
                })
            }
            var su = function(e) {
                    var t = e.children,
                        n = e.color,
                        a = void 0 === n ? "yellow" : n,
                        r = e.icon;
                    return (0, y.jsxs)("div", {
                        className: (0, J.default)("mb-4 flex items-start justify-start gap-2.5 rounded-md p-4 last:mb-0", {
                            "bg-yellow-300 text-[#756B5C]": "yellow" === a,
                            "bg-gray-50 text-gray-800 dark:bg-[#444654] dark:text-gray-100": "gray" === a
                        }),
                        children: [null != r && (0, y.jsx)(ep.ZP, {
                            icon: r,
                            size: "small",
                            className: "mt-1 flex-shrink-0"
                        }), t]
                    })
                },
                sd = n(20476),
                sf = n(75318);

            function sg() {
                var e = (0, G._)(["text-gray-800 w-full mx-auto md:max-w-2xl lg:max-w-3xl md:h-full md:flex md:flex-col px-6 dark:text-gray-100"]);
                return sg = function() {
                    return e
                }, e
            }

            function sm() {
                var e = (0, G._)(["text-4xl font-semibold text-center mt-6 sm:mt-[20vh] ml-auto mr-auto mb-10 sm:mb-16 flex gap-2 items-center justify-center"]);
                return sm = function() {
                    return e
                }, e
            }

            function sh() {
                var e = (0, G._)(["md:flex items-start text-center gap-3.5"]);
                return sh = function() {
                    return e
                }, e
            }

            function sp() {
                var e = (0, G._)(["flex flex-col mb-8 md:mb-auto gap-3.5 flex-1"]);
                return sp = function() {
                    return e
                }, e
            }

            function sx() {
                var e = (0, G._)(["flex gap-3 items-center m-auto text-lg font-normal md:flex-col md:gap-2"]);
                return sx = function() {
                    return e
                }, e
            }

            function sv() {
                var e = (0, G._)(["flex flex-col gap-3.5 w-full sm:max-w-md m-auto"]);
                return sv = function() {
                    return e
                }, e
            }

            function sb() {
                var e = (0, G._)(["w-full bg-gray-50 dark:bg-white/5 p-3 rounded-md"]);
                return sb = function() {
                    return e
                }, e
            }

            function sy() {
                var e = (0, G._)(["w-full bg-gray-50 dark:bg-white/5 p-3 rounded-md after:content-['\"'] before:content-['\"']"]);
                return sy = function() {
                    return e
                }, e
            }

            function sj() {
                var e = (0, G._)(["w-full bg-gray-50 dark:bg-white/5 p-3 rounded-md hover:bg-gray-200 dark:hover:bg-gray-900"]);
                return sj = function() {
                    return e
                }, e
            }
            el.Z.div(sg()), el.Z.h1(sm());
            var sw = el.Z.div(sh()),
                sk = el.Z.div(sp()),
                sM = el.Z.h2(sx()),
                sC = el.Z.ul(sv()),
                s_ = el.Z.li(sb());
            el.Z.li(sy());
            var sT = el.Z.button(sj());

            function sP() {
                var e = (0, G._)(["text-4xl font-semibold text-center mt-6 sm:mt-[6vh] ml-auto mr-auto mb-4 sm:mb-16 flex gap-2 items-center justify-center"]);
                return sP = function() {
                    return e
                }, e
            }

            function sN() {
                var e = (0, G._)(["text-gray-800 w-full mx-auto md:max-w-2xl lg:max-w-3xl md:flex md:flex-col px-6 dark:text-gray-100"]);
                return sN = function() {
                    return e
                }, e
            }
            var sS = (0, _.vU)({
                title: {
                    id: "Placeholder.title",
                    description: "Title text for the Placeholder component",
                    defaultMessage: "ChatGPT"
                },
                examplesHeader: {
                    id: "Placeholder.examplesHeader",
                    description: "Header text for the examples list",
                    defaultMessage: "Examples"
                },
                capabilitiesHeader: {
                    id: "Placeholder.capabilitiesHeader",
                    description: "Header text for the capabilities list",
                    defaultMessage: "Capabilities"
                },
                limitationsHeader: {
                    id: "Placeholder.limitationsHeader",
                    description: "Header text for the limitations list",
                    defaultMessage: "Limitations"
                },
                quantumComputingExample: {
                    id: "Placeholder.quantumComputingExample",
                    description: "Example text for quantum computing explanation",
                    defaultMessage: "Explain quantum computing in simple terms"
                },
                birthdayIdeasExample: {
                    id: "Placeholder.birthdayIdeasExample",
                    description: "Example text for creative birthday ideas",
                    defaultMessage: "Got any creative ideas for a 10 year old's birthday?"
                },
                httpRequestExample: {
                    id: "Placeholder.httpRequestExample",
                    description: "Example text for making an HTTP request in Javascript",
                    defaultMessage: "How do I make an HTTP request in Javascript?"
                },
                remembersEarlierConversation: {
                    id: "Placeholder.remembersEarlierConversation",
                    description: "Capability description for remembering earlier conversation",
                    defaultMessage: "Remembers what user said earlier in the conversation"
                },
                allowsFollowUpCorrections: {
                    id: "Placeholder.allowsFollowUpCorrections",
                    description: "Capability description for allowing follow-up corrections",
                    defaultMessage: "Allows user to provide follow-up corrections"
                },
                declinesInappropriateRequests: {
                    id: "Placeholder.declinesInappropriateRequests",
                    description: "Capability description for declining inappropriate requests",
                    defaultMessage: "Trained to decline inappropriate requests"
                },
                mayGenerateIncorrectInfo: {
                    id: "Placeholder.mayGenerateIncorrectInfo",
                    description: "Limitation description for occasionally generating incorrect information",
                    defaultMessage: "May occasionally generate incorrect information"
                },
                mayProduceHarmfulInstructions: {
                    id: "Placeholder.mayProduceHarmfulInstructions",
                    description: "Limitation description for occasionally producing harmful instructions or biased content",
                    defaultMessage: "May occasionally produce harmful instructions or biased content"
                },
                limitedKnowledgeAfter2021: {
                    id: "Placeholder.limitedKnowledgeAfter2021",
                    description: "Limitation description for limited knowledge of world and events after 2021",
                    defaultMessage: "Limited knowledge of world and events after 2021"
                }
            });

            function sZ(e) {
                var t = e.text,
                    n = e.onChangeCurrentPrompt,
                    a = (0, k.useCallback)(function() {
                        n(t)
                    }, [t, n]);
                return (0, y.jsxs)(sT, {
                    onClick: a,
                    children: ['"', t, '" →']
                })
            }

            function sI(e) {
                var t = function(e) {
                        var t;
                        null == n || null === (t = n.current) || void 0 === t || t.setInputValue(e)
                    },
                    n = e.promptTextareaRef,
                    a = (0, eo.Z)();
                return (0, y.jsxs)(sB, {
                    children: [(0, y.jsxs)(sD, {
                        children: [(0, y.jsx)(C.Z, (0, v._)({}, sS.title)), (0, y.jsx)(sd.ZP, {})]
                    }), (0, y.jsxs)(sw, {
                        children: [(0, y.jsxs)(sk, {
                            children: [(0, y.jsxs)(sM, {
                                children: [(0, y.jsx)(ep.ZP, {
                                    icon: M.kXG,
                                    size: "medium"
                                }), (0, y.jsx)(C.Z, (0, v._)({}, sS.examplesHeader))]
                            }), (0, y.jsxs)(sC, {
                                children: [(0, y.jsx)(sZ, {
                                    text: a.formatMessage(sS.quantumComputingExample),
                                    onChangeCurrentPrompt: t
                                }), (0, y.jsx)(sZ, {
                                    text: a.formatMessage(sS.birthdayIdeasExample),
                                    onChangeCurrentPrompt: t
                                }), (0, y.jsx)(sZ, {
                                    text: a.formatMessage(sS.httpRequestExample),
                                    onChangeCurrentPrompt: t
                                })]
                            })]
                        }), (0, y.jsxs)(sk, {
                            children: [(0, y.jsxs)(sM, {
                                children: [(0, y.jsx)(ep.ZP, {
                                    icon: sf.Z,
                                    size: "medium"
                                }), (0, y.jsx)(C.Z, (0, v._)({}, sS.capabilitiesHeader))]
                            }), (0, y.jsxs)(sC, {
                                children: [(0, y.jsx)(s_, {
                                    children: (0, y.jsx)(C.Z, (0, v._)({}, sS.remembersEarlierConversation))
                                }), (0, y.jsx)(s_, {
                                    children: (0, y.jsx)(C.Z, (0, v._)({}, sS.allowsFollowUpCorrections))
                                }), (0, y.jsx)(s_, {
                                    children: (0, y.jsx)(C.Z, (0, v._)({}, sS.declinesInappropriateRequests))
                                })]
                            })]
                        }), (0, y.jsxs)(sk, {
                            children: [(0, y.jsxs)(sM, {
                                children: [(0, y.jsx)(ep.ZP, {
                                    icon: M.BJv,
                                    size: "medium"
                                }), (0, y.jsx)(C.Z, (0, v._)({}, sS.limitationsHeader))]
                            }), (0, y.jsxs)(sC, {
                                children: [(0, y.jsx)(s_, {
                                    children: (0, y.jsx)(C.Z, (0, v._)({}, sS.mayGenerateIncorrectInfo))
                                }), (0, y.jsx)(s_, {
                                    children: (0, y.jsx)(C.Z, (0, v._)({}, sS.mayProduceHarmfulInstructions))
                                }), (0, y.jsx)(s_, {
                                    children: (0, y.jsx)(C.Z, (0, v._)({}, sS.limitedKnowledgeAfter2021))
                                })]
                            })]
                        })]
                    })]
                })
            }
            var sD = el.Z.h1(sP()),
                sB = el.Z.div(sN()),
                sF = n(40058),
                sR = n(26563),
                sL = n(57526),
                sE = n(99581);

            function sA() {
                var e = (0, G._)(["rounded-lg bg-white ring-1 ring-black/10 dark:bg-gray-800 dark:ring-white/20 shadow-[0_1px_7px_0_rgba(0,0,0,0.03)]"]);
                return sA = function() {
                    return e
                }, e
            }

            function sq() {
                var e = (0, G._)(["absolute z-[17] mt-2 flex max-h-60 w-full flex-col overflow-hidden text-base focus:outline-none dark:last:border-0 sm:text-sm md:w-[100%]"]);
                return sq = function() {
                    return e
                }, e
            }

            function sU() {
                var e = (0, G._)(["absolute z-[17] -ml-[1px] flex flex-col gap-2 p-3 sm:p-4"]);
                return sU = function() {
                    return e
                }, e
            }

            function sO() {
                var e = (0, G._)(["flex items-center gap-2 truncate"]);
                return sO = function() {
                    return e
                }, e
            }

            function sz() {
                var e = (0, G._)(["h-6 w-6 shrink-0"]);
                return sz = function() {
                    return e
                }, e
            }

            function sW() {
                var e = (0, G._)(["absolute inset-y-0 right-0 flex items-center pr-5 text-gray-800 dark:text-gray-100"]);
                return sW = function() {
                    return e
                }, e
            }

            function sH() {
                var e = (0, G._)(["absolute inset-y-0 right-0 flex items-center pr-3 text-gray-800 dark:text-gray-100"]);
                return sH = function() {
                    return e
                }, e
            }
            var sQ = ["confidential", "alpha", "plus"];

            function sV(e) {
                var t = e.selectedOptions,
                    n = e.selectedLabel,
                    a = e.onChange,
                    r = e.onAction,
                    i = e.onOpen,
                    s = e.onClose,
                    o = e.dropdownRef,
                    l = (0, b._)(e, ["selectedOptions", "selectedLabel", "onChange", "onAction", "onOpen", "onClose", "dropdownRef"]),
                    c = (0, k.useCallback)(function(e) {
                        if (e.some(function(e) {
                                return "string" == typeof e
                            })) {
                            var t = e.find(function(e) {
                                return "string" == typeof e
                            });
                            null == r || r(t)
                        } else a(e)
                    }, [a, r]);
                return (0, y.jsx)(sR.R, {
                    value: t.map(function(e) {
                        return e.value
                    }),
                    multiple: !0,
                    onChange: c,
                    children: function(e) {
                        var a = e.open;
                        return (0, y.jsx)(s$, (0, v._)({
                            ref: o,
                            selectedLabel: n || "".concat(t.length, " selected"),
                            open: a,
                            onOpen: i,
                            onClose: s,
                            multiple: !0
                        }, l))
                    }
                })
            }
            var s$ = (0, k.forwardRef)(function(e, t) {
                var n = e.name,
                    a = e.selectedLabel,
                    r = e.open,
                    i = e.options,
                    s = e.actions,
                    o = e.multiple,
                    l = e.isLoading,
                    c = e.loadingState,
                    u = e.header,
                    d = e.onOpen,
                    f = e.onClose,
                    g = e.theme,
                    m = (0, k.useRef)(null),
                    h = (0, k.useRef)(null),
                    p = (0, D.oc)();
                (0, k.useImperativeHandle)(t, function() {
                    return {
                        open: function() {
                            if (!r) {
                                var e;
                                null === (e = m.current) || void 0 === e || e.click()
                            }
                        },
                        close: function() {
                            if (r) {
                                var e;
                                null === (e = m.current) || void 0 === e || e.click()
                            }
                        }
                    }
                }, [r]);
                var x = l ? c || (0, y.jsx)("div", {
                    className: "flex h-[42px] items-center justify-center",
                    children: (0, y.jsx)(ex.Z, {})
                }) : (0, y.jsxs)(y.Fragment, {
                    children: [u, (0, y.jsxs)(sR.R.Options, {
                        className: "overflow-auto",
                        children: [i.map(function(e, t) {
                            return (0, y.jsx)(sG, {
                                value: e.value,
                                disabled: e.disabled,
                                theme: g,
                                children: function(t) {
                                    var n = t.selected,
                                        a = t.active;
                                    return (0, y.jsxs)(y.Fragment, {
                                        children: [(0, y.jsxs)(s8, {
                                            children: [e.imageUrl && (0, y.jsx)(s7, {
                                                children: (0, y.jsx)(rC.Z, {
                                                    url: e.imageUrl,
                                                    name: e.title,
                                                    size: "100%"
                                                })
                                            }), (0, y.jsxs)("span", {
                                                className: (0, J.default)(n && !o && "font-semibold", "flex h-6 items-center gap-1 text-gray-800 dark:text-gray-100"),
                                                children: [e.title, e.tags.map(function(e) {
                                                    return s0(e)
                                                }), e.customTags]
                                            })]
                                        }), o && !e.disabled ? (0, y.jsx)(sY, {
                                            theme: g,
                                            selected: n
                                        }) : n && (0, y.jsx)(sJ, {
                                            theme: g,
                                            icon: "mini" === g ? ep.HQ : M.UgA
                                        }), e.disabled && (0, y.jsx)(sJ, {
                                            theme: g,
                                            icon: sL.Z,
                                            className: "text-red-700 dark:text-red-500"
                                        }), a && p && (0, sE.createPortal)((0, y.jsx)(sX, {
                                            option: e,
                                            dropdownRef: h
                                        }), document.body)]
                                    })
                                }
                            }, t)
                        }), null == s ? void 0 : s.map(function(e, t) {
                            return (0, y.jsx)(sG, {
                                value: e.id,
                                theme: g,
                                children: function() {
                                    return (0, y.jsxs)(y.Fragment, {
                                        children: [(0, y.jsx)("div", {
                                            className: "text-gray-800 dark:text-gray-100",
                                            children: e.label
                                        }), (0, y.jsx)(sJ, {
                                            theme: g,
                                            icon: e.icon
                                        })]
                                    })
                                }
                            }, t)
                        })]
                    })]
                });
                return (0, y.jsxs)("div", {
                    className: "relative w-full md:w-1/2 lg:w-1/3 xl:w-1/4",
                    children: [(0, y.jsxs)(sR.R.Button, {
                        ref: m,
                        onClick: r ? f : d,
                        className: (0, J.default)("relative flex cursor-pointer flex-col bg-white py-2 pr-10 text-left dark:bg-gray-800 sm:text-sm", "mini" === g ? "mx-auto w-auto rounded-lg border border-transparent pl-4 pr-7 hover:border-black/10 dark:hover:border-white/10" : "w-full rounded-md border border-black/10 pl-3 focus:border-green-600 focus:outline-none focus:ring-1 focus:ring-green-600 dark:border-white/20"),
                        children: ["mini" !== g && (0, y.jsx)(sR.R.Label, {
                            className: "block text-xs text-gray-700 dark:text-gray-500",
                            children: n
                        }), (0, y.jsx)("span", {
                            className: "inline-flex w-full truncate",
                            children: (0, y.jsx)("span", {
                                className: "flex h-6 items-center gap-1 truncate",
                                children: a
                            })
                        }), (0, y.jsx)("span", {
                            className: "pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2",
                            children: (0, y.jsx)(ep.ZP, {
                                icon: M.bTu,
                                className: " text-gray-400",
                                "aria-hidden": "true"
                            })
                        })]
                    }), (0, y.jsx)(tT.u, {
                        show: r,
                        as: k.Fragment,
                        leave: "transition ease-in duration-100",
                        leaveFrom: "opacity-100",
                        leaveTo: "opacity-0",
                        children: (0, y.jsx)(s2, {
                            ref: h,
                            children: x
                        })
                    })]
                })
            });

            function sG(e) {
                var t = e.value,
                    n = e.disabled,
                    a = e.children,
                    r = e.theme;
                return (0, y.jsx)(sR.R.Option, {
                    className: function(e) {
                        var t = e.active;
                        return (0, J.default)("mini" === r ? s4 : s5, t && !n ? "bg-gray-100 dark:bg-gray-700" : "text-gray-900", n && "cursor-auto bg-gray-50 text-gray-400 dark:bg-gray-700 dark:text-gray-100")
                    },
                    value: t,
                    children: a
                })
            }

            function sJ(e) {
                var t = e.icon,
                    n = e.className,
                    a = e.theme;
                return (0, y.jsx)("mini" === a ? s6 : s9, {
                    children: (0, y.jsx)(ep.ZP, {
                        icon: t,
                        className: (0, J.default)("h-5 w-5", n),
                        "aria-hidden": "true"
                    })
                })
            }

            function sY(e) {
                var t = e.selected,
                    n = e.disabled;
                return "mini" === e.theme ? (0, y.jsxs)(s6, {
                    children: [(0, y.jsx)(ep.ZP, {
                        icon: t ? ep.HQ : ep.i9,
                        className: "h-5 w-5 text-blue-600",
                        strokeWidth: t ? 2.5 : 2
                    }), !t && (0, y.jsx)(ep.ZP, {
                        icon: ep.nQ,
                        className: (0, J.default)("absolute h-5 w-5 text-blue-600 opacity-0 transition-opacity", !n && "group-hover:opacity-100")
                    })]
                }) : (0, y.jsx)(s9, {
                    children: (0, y.jsx)("div", {
                        className: (0, J.default)("flex h-6 w-6 items-center justify-center rounded-full border transition-colors", t ? "border-transparent bg-green-600 text-white" : "border-black/5 dark:border-white/20"),
                        "aria-hidden": "true",
                        children: (0, y.jsx)(ep.ZP, {
                            icon: M.UgA,
                            className: (0, J.default)("h-3 w-3 transition-opacity", t && "opacity-100", !t && "opacity-0", !t && !n && "group-hover:opacity-50"),
                            strokeWidth: t ? 2.5 : 2
                        })
                    })
                })
            }

            function sK(e) {
                var t = e.showCheckbox,
                    n = e.theme;
                return (0, y.jsxs)("div", {
                    className: (0, J.default)("mini" === n ? s4 : s5, "cursor-auto"),
                    children: [(0, y.jsxs)(s8, {
                        children: [(0, y.jsx)(s7, {
                            children: (0, y.jsx)("div", {
                                className: "h-full w-full rounded-sm bg-gray-200"
                            })
                        }), (0, y.jsx)("div", {
                            className: "h-[12px] w-[88px] rounded-sm bg-gray-100"
                        })]
                    }), t && (0, y.jsx)(sY, {
                        theme: n,
                        selected: !1,
                        disabled: !0
                    })]
                })
            }

            function sX(e) {
                var t = e.option,
                    n = e.dropdownRef,
                    a = (0, B._)((0, k.useState)(), 2),
                    r = a[0],
                    i = a[1];
                return ((0, k.useEffect)(function() {
                    var e = function() {
                        if (n.current) {
                            var e = n.current.getBoundingClientRect();
                            i({
                                top: e.top,
                                left: e.left - 260,
                                minHeight: e.height
                            })
                        }
                    };
                    return e(), window.addEventListener("resize", e),
                        function() {
                            return window.removeEventListener("resize", e)
                        }
                }, [n]), r) ? (0, y.jsxs)(s3, {
                    style: {
                        width: 260,
                        minHeight: r.minHeight,
                        top: r.top,
                        left: r.left
                    },
                    children: [t.disabled && (0, y.jsx)(ep.ZP, {
                        icon: sL.Z,
                        size: "medium",
                        className: "text-red-700 dark:text-red-500"
                    }), t.imageUrl && (0, y.jsx)(rC.Z, {
                        url: t.imageUrl,
                        name: t.title,
                        size: 70
                    }), (0, y.jsxs)("div", {
                        className: "flex items-center gap-1",
                        children: [t.title, " ", t.tags.map(function(e) {
                            return s0(e)
                        }), " ", t.customTags]
                    }), (0, y.jsx)("div", {
                        className: "whitespace-pre-line text-xs",
                        children: t.description
                    })]
                }) : null
            }
            var s0 = function(e) {
                    return sQ.includes(e) && (0, y.jsx)("span", {
                        className: (0, J.default)("py-0.25 rounded px-1 text-[10px] font-semibold uppercase", "confidential" === e && "bg-red-200 text-red-800", "alpha" === e && "bg-blue-200 text-blue-500", "plus" === e && "bg-yellow-200 text-yellow-900"),
                        children: e
                    }, e)
                },
                s1 = el.Z.div(sA()),
                s2 = (0, el.Z)(s1)(sq()),
                s3 = (0, el.Z)(s1)(sU()),
                s4 = "group relative flex h-[50px] cursor-pointer select-none items-center overflow-hidden border-b border-black/10 pl-5 pr-12 last:border-0 dark:border-white/20",
                s5 = "group relative flex h-[42px] cursor-pointer select-none items-center overflow-hidden border-b border-black/10 pl-3 pr-9 last:border-0 dark:border-white/20",
                s8 = el.Z.span(sO()),
                s7 = el.Z.span(sz()),
                s6 = el.Z.span(sW()),
                s9 = el.Z.span(sH()),
                oe = n(51973),
                ot = n(7614),
                on = n(15608);

            function oa() {
                var e = (0, G._)(["mt-4 flex flex-col gap-4"]);
                return oa = function() {
                    return e
                }, e
            }

            function or() {
                var e = (0, G._)(["text-sm text-red-500"]);
                return or = function() {
                    return e
                }, e
            }
            var oi = el.Z.div(oa()),
                os = el.Z.div(or()),
                oo = n(48759),
                ol = (0, _.vU)({
                    enterWebsiteDomainTitle: {
                        id: "DevelopPluginModal.enterWebsiteDomainTitle",
                        description: "Title for the section where users enter their website domain",
                        defaultMessage: "Enter your website domain"
                    },
                    learnToBuildPlugin: {
                        id: "DevelopPluginModal.learnToBuildPlugin",
                        description: "Text for the link directing users to the plugin documentation",
                        defaultMessage: "Visit our documentation to learn how to build a plugin."
                    },
                    pluginApprovalWarning: {
                        id: "DevelopPluginModal.pluginApprovalWarning",
                        description: "Warning about plugin review process if the manifest is modified",
                        defaultMessage: "If your plugin has been approved to be in the ChatGPT plugin store, and you have made changes to your plugin's manifest, your plugin will be removed from the store, and you will need to <resubmitLink>resubmit it for review</resubmitLink>."
                    },
                    domainInputPlaceholder: {
                        id: "DevelopPluginModal.domainInputPlaceholder",
                        description: "Placeholder text for the domain input field",
                        defaultMessage: "ex: openai.com or localhost:3000"
                    },
                    authenticationFileText: {
                        id: "DevelopPluginModal.authenticationFileText",
                        description: "Text for the link to expand authentication settings",
                        defaultMessage: "My file requires authentication"
                    },
                    authenticationTypeText: {
                        id: "DevelopPluginModal.authenticationTypeText",
                        description: "Label for the section to choose authentication type",
                        defaultMessage: "Authentication type"
                    },
                    accessTokenText: {
                        id: "DevelopPluginModal.accessTokenText",
                        description: "Label for the section to input the access token",
                        defaultMessage: "Access token"
                    },
                    findManifestFileText: {
                        id: "DevelopPluginModal.findManifestFileText",
                        description: "Button text to find the manifest file",
                        defaultMessage: "Find manifest file"
                    },
                    cancelButtonText: {
                        id: "DevelopPluginModal.cancelButtonText",
                        description: "Button text for the cancel button",
                        defaultMessage: "Cancel"
                    },
                    domainDisplayName: {
                        id: "DevelopPluginModal.domainDisplayName",
                        description: "Display name for the domain input",
                        defaultMessage: "Domain"
                    },
                    bearerLabel: {
                        id: "DevelopPluginModal.bearerLabel",
                        description: "Label for the Bearer authentication type radio button",
                        defaultMessage: "Bearer"
                    },
                    basicLabel: {
                        id: "DevelopPluginModal.basicLabel",
                        description: "Label for the Basic authentication type radio button",
                        defaultMessage: "Basic"
                    },
                    refetchManifestButtonText: {
                        id: "DevelopPluginModal.refetchManifestButtonText",
                        description: "Button text for refetching the manifest",
                        defaultMessage: "Refetch manifest"
                    },
                    installLocalhostPluginButtonText: {
                        id: "DevelopPluginModal.installLocalhostPluginButtonText",
                        description: "Button text for installing localhost plugin",
                        defaultMessage: "Install localhost plugin"
                    },
                    nextButtonText: {
                        id: "DevelopPluginModal.nextButtonText",
                        description: "Button text for the next step",
                        defaultMessage: "Next"
                    },
                    foundPluginTitle: {
                        id: "DevelopPluginModal.foundPluginTitle",
                        description: "Title for the modal when a plugin is found",
                        defaultMessage: "Found plugin"
                    },
                    enterServiceAccessTokenLabel: {
                        id: "DevelopPluginModal.enterServiceAccessTokenLabel",
                        description: "Label for entering the service access token",
                        defaultMessage: "Enter your service access token:"
                    },
                    enterOAuthCredentialsLabel: {
                        id: "DevelopPluginModal.enterOAuthCredentialsLabel",
                        description: "Label for entering OAuth credentials",
                        defaultMessage: "Enter your OAuth credentials:"
                    },
                    addVerificationTokenTitle: {
                        id: "DevelopPluginModal.addVerificationTokenTitle",
                        description: "Title for the modal when adding verification tokens",
                        defaultMessage: "Add verification token"
                    },
                    verifyTokensButtonText: {
                        id: "DevelopPluginModal.verifyTokensButtonText",
                        description: "Button text for verifying tokens",
                        defaultMessage: "Verify tokens"
                    },
                    addTokensLaterButtonText: {
                        id: "DevelopPluginModal.addTokensLaterButtonText",
                        description: "Button text for adding tokens later",
                        defaultMessage: "I'll add the tokens later"
                    },
                    addVerificationTokensText: {
                        id: "DevelopPluginModal.addVerificationTokensText",
                        description: "Text for adding verification tokens to the manifest file",
                        defaultMessage: "Add the following verification tokens to your manifest file:"
                    },
                    readyToInstallTitle: {
                        id: "DevelopPluginModal.readyToInstallTitle",
                        description: "Title for the modal when the plugin is ready to install",
                        defaultMessage: "Ready to install"
                    },
                    installForMeButtonText: {
                        id: "DevelopPluginModal.installForMeButtonText",
                        description: "Button text for installing the plugin for the user",
                        defaultMessage: "Install for me"
                    },
                    installLaterButtonText: {
                        id: "DevelopPluginModal.installLaterButtonText",
                        description: "Button text for installing the plugin later",
                        defaultMessage: "Install later"
                    },
                    unverifiedPluginText: {
                        id: "DevelopPluginModal.unverifiedPluginText",
                        description: "Text about the unverified plugin being installed by a limited number of developers",
                        defaultMessage: "Your unverified plugin can now be installed by <developersLink>up to 15 developers</developersLink>. Once you're ready to make your plugin available to everyone, you can <submitPluginLink>submit your plugin for review</submitPluginLink>."
                    }
                });

            function oc(e) {
                var t = e.onClickInstall,
                    n = e.onInstallLocalhost,
                    a = e.onClose,
                    r = (0, B._)((0, k.useState)(), 2),
                    i = r[0],
                    s = r[1],
                    o = (0, B._)((0, k.useState)(), 2),
                    l = o[0],
                    c = o[1],
                    u = (0, B._)((0, k.useState)(!1), 2),
                    d = u[0],
                    f = u[1],
                    g = (0, k.useCallback)(function(e) {
                        s(e)
                    }, []),
                    m = (0, k.useCallback)(function() {
                        f(!0)
                    }, []);
                return d && (null == i ? void 0 : i.scrapeManifestResponse.plugin) ? (0, y.jsx)(om, {
                    plugin: null == i ? void 0 : i.scrapeManifestResponse.plugin,
                    onClickInstall: t,
                    onClose: a
                }) : l && (null == i ? void 0 : i.scrapeManifestResponse.plugin) ? (0, y.jsx)(og, {
                    plugin: i.scrapeManifestResponse.plugin,
                    manifestAccessToken: i.manifestAccessToken,
                    verificationTokens: l,
                    onReadyToInstall: m,
                    onClose: a
                }) : i ? (0, y.jsx)( of , {
                    loadManifestResult: i,
                    onRefetch: g,
                    onSubmitAuthInfo: c,
                    onReadyToInstall: m,
                    onInstallLocalhost: n,
                    onClose: a
                }) : (0, y.jsx)(ou, {
                    onFetch: g,
                    onClose: a
                })
            }

            function ou(e) {
                var t = e.onFetch,
                    n = e.onClose,
                    a = (0, eo.Z)(),
                    r = (0, eY.kP)().session,
                    i = (0, B._)((0, k.useState)(!1), 2),
                    s = i[0],
                    o = i[1],
                    l = (0, B._)((0, k.useState)("bearer"), 2),
                    c = l[0],
                    u = l[1],
                    d = (0, B._)((0, k.useState)(), 2),
                    f = d[0],
                    g = d[1],
                    m = (0, k.useRef)(null),
                    h = (0, k.useRef)(null),
                    p = (0, on.sd)(),
                    x = p.fetchManifestAndSpec,
                    b = p.isLoading;
                (0, k.useEffect)(function() {
                    var e;
                    null === (e = m.current) || void 0 === e || e.focus()
                }, []);
                var j = (0, k.useCallback)(function() {
                        o(function(e) {
                            return !e
                        })
                    }, []),
                    w = (0, k.useCallback)(function(e) {
                        u(e.target.value)
                    }, []),
                    _ = (0, k.useCallback)((0, eQ._)(function() {
                        var e, n, r;
                        return (0, eV.Jh)(this, function(i) {
                            return (r = null === (e = m.current) || void 0 === e ? void 0 : e.value) ? (x({
                                domain: r,
                                manifestAccessToken: s ? {
                                    authorization_type: c,
                                    token: (null === (n = h.current) || void 0 === n ? void 0 : n.value) || ""
                                } : void 0,
                                onSuccess: t,
                                onError: function(e) {
                                    return g((null == e ? void 0 : e.message) || "Couldn't find manifest.")
                                }
                            }), [2]) : (g(a.formatMessage(ol.domainInputPlaceholder)), [2])
                        })
                    }), [x, t, c, s, a]);
                return (0, y.jsx)(eh.Z, {
                    isOpen: !0,
                    onClose: n,
                    type: "success",
                    title: (0, y.jsx)(C.Z, (0, v._)({}, ol.enterWebsiteDomainTitle)),
                    primaryButton: (0, y.jsx)(em.ZP.Button, {
                        title: a.formatMessage(ol.findManifestFileText),
                        color: "primary",
                        onClick: _,
                        loading: b
                    }),
                    secondaryButton: (0, y.jsx)(em.ZP.Button, {
                        title: a.formatMessage(ol.cancelButtonText),
                        color: "neutral",
                        onClick: n
                    }),
                    children: (0, y.jsxs)(oi, {
                        children: [(0, y.jsx)("a", {
                            href: "https://platform.openai.com/docs/plugins/getting-started",
                            target: "_blank",
                            rel: "noreferrer",
                            className: "text-green-600",
                            children: (0, y.jsx)(C.Z, (0, v._)({}, ol.learnToBuildPlugin))
                        }), (0, y.jsx)(ot.Z, {
                            icon: "\uD83D\uDEA8",
                            children: (0, y.jsx)(C.Z, (0, U._)((0, v._)({}, ol.pluginApprovalWarning), {
                                values: {
                                    resubmitLink: function(e) {
                                        return (0, y.jsx)("a", {
                                            target: "_blank",
                                            rel: "noreferrer",
                                            className: "text-green-600",
                                            href: "https://platform.openai.com/docs/plugins/review/submit-a-plugin-for-review",
                                            children: e
                                        })
                                    }
                                }
                            }))
                        }), (0, y.jsx)(oe.Z, {
                            ref: m,
                            name: "url",
                            displayName: a.formatMessage(ol.domainDisplayName),
                            placeholder: a.formatMessage(ol.domainInputPlaceholder),
                            onPressEnter: _,
                            autoFocus: !0
                        }), (null == r ? void 0 : r.user) != null && (0, eY.yl)(r.user) && (0, y.jsxs)(y.Fragment, {
                            children: [(0, y.jsxs)("div", {
                                role: "button",
                                className: "flex cursor-pointer items-center gap-1 text-sm text-black/60 hover:text-black/70",
                                onClick: j,
                                children: [(0, y.jsx)("div", {
                                    children: (0, y.jsx)(C.Z, (0, v._)({}, ol.authenticationFileText))
                                }), (0, y.jsx)(ep.ZP, {
                                    icon: s ? M.rH8 : M.bTu
                                })]
                            }), s && (0, y.jsxs)(y.Fragment, {
                                children: [(0, y.jsxs)("div", {
                                    className: "flex flex-col gap-2 text-sm",
                                    children: [(0, y.jsx)("div", {
                                        children: (0, y.jsx)(C.Z, (0, v._)({}, ol.authenticationTypeText))
                                    }), (0, y.jsxs)("div", {
                                        className: "flex gap-6",
                                        children: [(0, y.jsx)(od, {
                                            label: a.formatMessage(ol.bearerLabel),
                                            value: "bearer",
                                            checked: "bearer" === c,
                                            onChange: w
                                        }), (0, y.jsx)(od, {
                                            label: a.formatMessage(ol.basicLabel),
                                            value: "basic",
                                            checked: "basic" === c,
                                            onChange: w
                                        })]
                                    })]
                                }), (0, y.jsxs)("div", {
                                    className: "flex flex-col gap-2 text-sm",
                                    children: [(0, y.jsx)("div", {
                                        children: (0, y.jsx)(C.Z, (0, v._)({}, ol.accessTokenText))
                                    }), (0, y.jsx)(oe.Z, {
                                        ref: h,
                                        name: "manifestToken",
                                        onPressEnter: _
                                    })]
                                })]
                            })]
                        }), f && (0, y.jsx)(os, {
                            children: f
                        })]
                    })
                })
            }

            function od(e) {
                var t = e.label,
                    n = e.value,
                    a = e.checked,
                    r = e.onChange;
                return (0, y.jsxs)("label", {
                    className: "flex items-center gap-2",
                    children: [(0, y.jsx)("input", {
                        name: "manifestAuthType",
                        type: "radio",
                        value: n,
                        checked: a,
                        onChange: r,
                        className: "text-green-600 focus:ring-green-600"
                    }), t]
                })
            }

            function of (e) {
                var t = e.loadManifestResult,
                    n = e.onRefetch,
                    a = e.onSubmitAuthInfo,
                    r = e.onReadyToInstall,
                    i = e.onInstallLocalhost,
                    s = e.onClose,
                    o = (0, eo.Z)(),
                    l = t.domain,
                    c = t.manifestAccessToken,
                    u = t.scrapeManifestResponse,
                    d = t.apiValidationInfo,
                    f = u.plugin,
                    g = u.manifest_validation_info,
                    m = (0, B._)((0, k.useState)(), 2),
                    h = m[0],
                    p = m[1],
                    x = (0, B._)((0, k.useState)(!1), 2),
                    b = x[0],
                    w = x[1],
                    M = (0, k.useRef)(null),
                    _ = (0, k.useRef)(null),
                    P = (0, k.useRef)(null),
                    N = (0, on.sd)(),
                    S = N.fetchManifestAndSpec,
                    Z = N.isLoading,
                    I = (0, j.NL)(),
                    D = f && (0, is.cf)(f),
                    F = (null == f ? void 0 : f.manifest.auth.type) === "service_http",
                    R = (null == f ? void 0 : f.manifest.auth.type) === "oauth",
                    L = g.errors && g.errors.length > 0 || (null == d ? void 0 : d.errors) && (null == d ? void 0 : d.errors.length) > 0,
                    E = (0, k.useCallback)((0, eQ._)(function() {
                        var e, t, o, u, d;
                        return (0, eV.Jh)(this, function(g) {
                            switch (g.label) {
                                case 0:
                                    if (!L) return [3, 1];
                                    return S({
                                        domain: l,
                                        manifestAccessToken: c,
                                        onSuccess: n,
                                        onError: function(e) {
                                            return p((null == e ? void 0 : e.message) || "Couldn't find manifest.")
                                        }
                                    }), [3, 15];
                                case 1:
                                    if (!D) return [3, 2];
                                    return (0, on.Bb)(f, I), i(f), [3, 15];
                                case 2:
                                    if (!F) return [3, 8];
                                    if (!(null === (e = M.current) || void 0 === e ? void 0 : e.value)) return p("Please provide your service access token."), [2];
                                    g.label = 3;
                                case 3:
                                    return g.trys.push([3, 5, 6, 7]), w(!0), [4, T.ZP.setPluginServiceHttpToken({
                                        id: f.id,
                                        serviceAccessToken: M.current.value
                                    })];
                                case 4:
                                    return a(g.sent().verification_tokens), [3, 7];
                                case 5:
                                    return g.sent(), p("Error setting access token."), [3, 7];
                                case 6:
                                    return w(!1), [7];
                                case 7:
                                    return [3, 15];
                                case 8:
                                    if (!R) return [3, 14];
                                    if (u = null === (t = _.current) || void 0 === t ? void 0 : t.value, d = null === (o = P.current) || void 0 === o ? void 0 : o.value, !u || !d) return p("Please provide your OAuth credentials."), [2];
                                    g.label = 9;
                                case 9:
                                    return g.trys.push([9, 11, 12, 13]), [4, T.ZP.setPluginOAuthClientCredentials({
                                        id: f.id,
                                        clientId: _.current.value,
                                        clientSecret: P.current.value
                                    })];
                                case 10:
                                    return a(g.sent().verification_tokens), [3, 13];
                                case 11:
                                    return g.sent(), p("Error setting OAuth credentials."), [3, 13];
                                case 12:
                                    return w(!1), [7];
                                case 13:
                                    return [3, 15];
                                case 14:
                                    f ? r(f) : s(), g.label = 15;
                                case 15:
                                    return [2]
                            }
                        })
                    }), [F, R, f, l, c, L, D, I, S, n, a, r, i, s]);
                return (0, y.jsx)(eh.Z, {
                    isOpen: !0,
                    onClose: s,
                    type: "success",
                    title: (0, y.jsx)(C.Z, (0, v._)({}, ol.foundPluginTitle)),
                    primaryButton: (0, y.jsx)(em.ZP.Button, {
                        title: L ? o.formatMessage(ol.refetchManifestButtonText) : D ? o.formatMessage(ol.installLocalhostPluginButtonText) : o.formatMessage(ol.nextButtonText),
                        color: "primary",
                        onClick: E,
                        loading: b || Z
                    }),
                    secondaryButton: (L || F || R) && (0, y.jsx)(em.ZP.Button, {
                        title: o.formatMessage(ol.cancelButtonText),
                        color: "neutral",
                        onClick: s
                    }),
                    children: (0, y.jsxs)(oi, {
                        children: [(0, y.jsx)(oo.rC, {
                            manifestValidationInfo: g
                        }), d && (0, y.jsx)(oo.q6, {
                            apiValidationInfo: d
                        }), f && (0, y.jsx)(i2.Z, {
                            plugin: f
                        }), F && !L && (0, y.jsxs)("div", {
                            children: [(0, y.jsx)("div", {
                                className: "text-sm",
                                children: (0, y.jsx)(C.Z, (0, v._)({}, ol.enterServiceAccessTokenLabel))
                            }), (0, y.jsx)("div", {
                                className: "mt-2",
                                children: (0, y.jsx)(oe.Z, {
                                    ref: M,
                                    name: "serviceToken",
                                    placeholder: "Service access token",
                                    autoComplete: "off",
                                    onPressEnter: E,
                                    autoFocus: !0
                                })
                            })]
                        }), R && !L && (0, y.jsxs)("div", {
                            children: [(0, y.jsx)("div", {
                                className: "text-sm",
                                children: (0, y.jsx)(C.Z, (0, v._)({}, ol.enterOAuthCredentialsLabel))
                            }), (0, y.jsx)("div", {
                                className: "mt-2",
                                children: (0, y.jsx)(oe.Z, {
                                    ref: _,
                                    name: "clientId",
                                    placeholder: "Client ID",
                                    autoComplete: "off",
                                    onPressEnter: E,
                                    autoFocus: !0
                                })
                            }), (0, y.jsx)("div", {
                                className: "mt-2",
                                children: (0, y.jsx)(oe.Z, {
                                    ref: P,
                                    type: "password",
                                    name: "clientSecret",
                                    placeholder: "Client secret",
                                    autoComplete: "off",
                                    onPressEnter: E
                                })
                            })]
                        }), h && (0, y.jsx)(os, {
                            children: h
                        })]
                    })
                })
            }

            function og(e) {
                var t = e.plugin,
                    n = e.manifestAccessToken,
                    a = e.verificationTokens,
                    r = e.onReadyToInstall,
                    i = e.onClose,
                    s = (0, eo.Z)(),
                    o = (0, B._)((0, k.useState)(), 2),
                    l = o[0],
                    c = o[1],
                    u = (0, B._)((0, k.useState)(!1), 2),
                    d = u[0],
                    f = u[1],
                    g = (0, k.useCallback)((0, eQ._)(function() {
                        var e, i;
                        return (0, eV.Jh)(this, function(s) {
                            switch (s.label) {
                                case 0:
                                    return s.trys.push([0, 2, 3, 4]), f(!0), [4, T.ZP.scrapePluginManifest({
                                        domain: t.domain,
                                        manifestAccessToken: n
                                    })];
                                case 1:
                                    if (e = s.sent().plugin) {
                                        for (var o in i = "service_http" === e.manifest.auth.type || "oauth" === e.manifest.auth.type ? e.manifest.auth.verification_tokens : {}, a)
                                            if (a[o] !== i[o]) return c('Please add the "'.concat(o, '" token to your manifest file.')), [2];
                                        r(e)
                                    } else c("Error creating plugin.");
                                    return [3, 4];
                                case 2:
                                    return s.sent(), c("Error creating plugin."), [3, 4];
                                case 3:
                                    return f(!1), [7];
                                case 4:
                                    return [2]
                            }
                        })
                    }), [t, n, a, r]);
                return (0, y.jsx)(eh.Z, {
                    isOpen: !0,
                    onClose: i,
                    type: "success",
                    title: (0, y.jsx)(C.Z, (0, v._)({}, ol.addVerificationTokenTitle)),
                    primaryButton: (0, y.jsx)(em.ZP.Button, {
                        title: s.formatMessage(ol.verifyTokensButtonText),
                        color: "primary",
                        onClick: g,
                        loading: d
                    }),
                    secondaryButton: (0, y.jsx)(em.ZP.Button, {
                        title: s.formatMessage(ol.addTokensLaterButtonText),
                        color: "neutral",
                        onClick: i
                    }),
                    children: (0, y.jsxs)(oi, {
                        children: [(0, y.jsx)(i2.Z, {
                            plugin: t
                        }), (0, y.jsx)("div", {
                            className: "text-sm",
                            children: (0, y.jsx)(C.Z, (0, v._)({}, ol.addVerificationTokensText))
                        }), (0, y.jsx)("pre", {
                            className: "text-sm",
                            children: JSON.stringify(a, null)
                        }), l && (0, y.jsx)(os, {
                            children: l
                        })]
                    })
                })
            }

            function om(e) {
                var t = e.plugin,
                    n = e.onClickInstall,
                    a = e.onClose,
                    r = (0, eo.Z)(),
                    i = (0, k.useCallback)(function() {
                        n(t)
                    }, [t, n]);
                return (0, y.jsx)(eh.Z, {
                    isOpen: !0,
                    onClose: a,
                    type: "success",
                    title: (0, y.jsx)(C.Z, (0, v._)({}, ol.readyToInstallTitle)),
                    primaryButton: (0, y.jsx)(em.ZP.Button, {
                        title: r.formatMessage(ol.installForMeButtonText),
                        color: "primary",
                        onClick: i
                    }),
                    secondaryButton: (0, y.jsx)(em.ZP.Button, {
                        title: r.formatMessage(ol.installLaterButtonText),
                        color: "neutral",
                        onClick: a
                    }),
                    children: (0, y.jsx)(oi, {
                        children: (0, y.jsx)("div", {
                            className: "text-sm",
                            children: (0, y.jsx)(C.Z, (0, U._)((0, v._)({}, ol.unverifiedPluginText), {
                                values: {
                                    developersLink: function(e) {
                                        return (0, y.jsx)("a", {
                                            href: "https://platform.openai.com/docs/plugins/production/can-i-invite-people-to-try-my-plugin",
                                            target: "_blank",
                                            rel: "noreferrer",
                                            className: "text-green-600",
                                            children: e
                                        })
                                    },
                                    submitPluginLink: function(e) {
                                        return (0, y.jsx)("a", {
                                            href: "https://platform.openai.com/docs/plugins/review/submit-a-plugin-for-review",
                                            target: "_blank",
                                            rel: "noreferrer",
                                            className: "text-green-600",
                                            children: e
                                        })
                                    }
                                }
                            }))
                        })
                    })
                })
            }
            var oh = (0, _.vU)({
                title: {
                    id: "InstallUnverifiedDisclaimerModal.title",
                    defaultMessage: "Unverified plugin",
                    description: "Title for the Install Unverified Disclaimer Modal"
                },
                continue: {
                    id: "InstallUnverifiedDisclaimerModal.continue",
                    defaultMessage: "Continue",
                    description: "Primary action button for proceeding with installation"
                },
                cancel: {
                    id: "InstallUnverifiedDisclaimerModal.cancel",
                    defaultMessage: "Cancel",
                    description: "Secondary action button for cancelling the installation"
                },
                warning: {
                    id: "InstallUnverifiedDisclaimerModal.warning",
                    defaultMessage: "OpenAI hasn't vetted this plugin. This plugin may pose risks to your information. Be sure you trust this plugin before proceeding.",
                    description: "Warning message about unverified plugins"
                }
            });

            function op(e) {
                var t = e.onConfirm,
                    n = e.onClose,
                    a = (0, eo.Z)();
                return (0, y.jsx)(eh.Z, {
                    isOpen: !0,
                    onClose: n,
                    type: "success",
                    title: a.formatMessage(oh.title),
                    primaryButton: (0, y.jsx)(em.ZP.Button, {
                        title: a.formatMessage(oh.continue),
                        color: "primary",
                        onClick: t
                    }),
                    secondaryButton: (0, y.jsx)(em.ZP.Button, {
                        title: a.formatMessage(oh.cancel),
                        color: "neutral",
                        onClick: n
                    }),
                    children: (0, y.jsx)(oi, {
                        children: (0, y.jsx)(ot.I, {
                            children: (0, y.jsx)(ot.Z, {
                                icon: "\uD83D\uDEA8",
                                children: (0, y.jsx)(C.Z, (0, v._)({}, oh.warning))
                            })
                        })
                    })
                })
            }

            function ox(e) {
                var t = e.plugin,
                    n = e.onInstall,
                    a = e.onClose,
                    r = (0, B._)((0, k.useState)(!1), 2),
                    i = r[0],
                    s = r[1],
                    o = (0, B._)((0, k.useState)(t), 2),
                    l = o[0],
                    c = o[1],
                    u = (0, k.useCallback)(function() {
                        s(!0)
                    }, []);
                return l ? i ? (0, y.jsx)(ob, {
                    plugin: l,
                    onInstall: n,
                    onClose: a
                }) : (0, y.jsx)(op, {
                    onConfirm: u,
                    onClose: a
                }) : (0, y.jsx)(ov, {
                    onLoad: c,
                    onClose: a
                })
            }

            function ov(e) {
                var t = e.onLoad,
                    n = e.onClose,
                    a = (0, eo.Z)(),
                    r = (0, k.useRef)(null),
                    i = (0, B._)((0, k.useState)(!1), 2),
                    s = i[0],
                    o = i[1],
                    l = (0, B._)((0, k.useState)(), 2),
                    c = l[0],
                    u = l[1];
                (0, k.useEffect)(function() {
                    setTimeout(function() {
                        var e;
                        null === (e = r.current) || void 0 === e || e.focus()
                    }, 50)
                }, []);
                var d = (0, k.useCallback)((0, eQ._)(function() {
                    var e, n, a;
                    return (0, eV.Jh)(this, function(i) {
                        switch (i.label) {
                            case 0:
                                if (!(n = null === (e = r.current) || void 0 === e ? void 0 : e.value)) return u("Please provide a URL."), [2];
                                if ((0, is.NB)(n)) return u('To add a localhost plugin, please go to "Develop your own plugin."'), [2];
                                i.label = 1;
                            case 1:
                                return i.trys.push([1, 3, 4, 5]), o(!0), [4, T.ZP.getPluginByDomain({
                                    domain: n
                                })];
                            case 2:
                                return (a = i.sent()) ? t(a) : u("That plugin doesn't exist."), [3, 5];
                            case 3:
                                return i.sent(), u("Couldn't find plugin."), [3, 5];
                            case 4:
                                return o(!1), [7];
                            case 5:
                                return [2]
                        }
                    })
                }), [t, o, u]);
                return (0, y.jsx)(eh.Z, {
                    isOpen: !0,
                    onClose: n,
                    type: "success",
                    title: a.formatMessage(oy.installUnverifiedPluginTitle),
                    primaryButton: (0, y.jsx)(em.ZP.Button, {
                        title: a.formatMessage(oy.findPlugin),
                        color: "primary",
                        onClick: d,
                        loading: s
                    }),
                    secondaryButton: (0, y.jsx)(em.ZP.Button, {
                        title: a.formatMessage(oy.cancel),
                        color: "neutral",
                        onClick: n
                    }),
                    children: (0, y.jsxs)(oi, {
                        children: [(0, y.jsx)("div", {
                            children: (0, y.jsx)(C.Z, (0, v._)({}, oy.pleaseProvideDomain))
                        }), (0, y.jsx)(oe.Z, {
                            ref: r,
                            name: "url",
                            placeholder: "openai.com",
                            onPressEnter: d
                        }), c && (0, y.jsx)(os, {
                            children: c
                        })]
                    })
                })
            }

            function ob(e) {
                var t = e.plugin,
                    n = e.onInstall,
                    a = e.onClose,
                    r = (0, eo.Z)(),
                    i = (0, B._)((0, k.useState)(), 2),
                    s = i[0],
                    o = i[1],
                    l = (0, B._)((0, k.useState)(!1), 2),
                    c = l[0],
                    u = l[1],
                    d = (0, k.useRef)(null),
                    f = (0, on.U$)({
                        onSuccess: function(e) {
                            n(e), a()
                        },
                        onError: function(e) {
                            o("Couldn't install plugin.")
                        }
                    }),
                    g = (0, S.hz)(),
                    m = t.manifest.name_for_human,
                    h = "user_http" === t.manifest.auth.type,
                    p = "oauth" === t.manifest.auth.type,
                    x = (0, k.useCallback)((0, eQ._)(function() {
                        var e, n;
                        return (0, eV.Jh)(this, function(a) {
                            switch (a.label) {
                                case 0:
                                    if (!p) return [3, 1];
                                    if (g.has("new_plugin_oauth_endpoint")) return (0, on.Up)(t), [2];
                                    return (e = (0, on.nT)(t)) ? window.location.href = e : o("Missing plugin configuration for ".concat(m, ".")), [3, 8];
                                case 1:
                                    if (!h) return [3, 7];
                                    if (!(null === (n = d.current) || void 0 === n ? void 0 : n.value)) return o("Please provide your credentials."), [2];
                                    a.label = 2;
                                case 2:
                                    return a.trys.push([2, 4, 5, 6]), u(!0), [4, T.ZP.setPluginUserHttpToken({
                                        id: t.id,
                                        userAccessToken: d.current.value
                                    })];
                                case 3:
                                    return a.sent(), f(t.id), [3, 6];
                                case 4:
                                    return a.sent(), o("Couldn't install plugin."), [3, 6];
                                case 5:
                                    return u(!1), [7];
                                case 6:
                                    return [3, 8];
                                case 7:
                                    try {
                                        u(!0), f(t.id)
                                    } catch (e) {
                                        o("Couldn't install plugin.")
                                    } finally {
                                        u(!1)
                                    }
                                    a.label = 8;
                                case 8:
                                    return [2]
                            }
                        })
                    }), [g, t, m, p, h, f]);
                return (0, y.jsx)(eh.Z, {
                    isOpen: !0,
                    onClose: a,
                    type: "success",
                    title: r.formatMessage(oy.unverifiedPluginTitle),
                    primaryButton: (0, y.jsx)(em.ZP.Button, {
                        title: p ? r.formatMessage(oy.loginWithPlugin, {
                            pluginName: m
                        }) : r.formatMessage(oy.installPlugin),
                        color: "primary",
                        onClick: x,
                        loading: c
                    }),
                    secondaryButton: (0, y.jsx)(em.ZP.Button, {
                        title: r.formatMessage(oy.cancel),
                        color: "neutral",
                        onClick: a
                    }),
                    children: (0, y.jsxs)(oi, {
                        children: [(0, y.jsx)(i2.Z, {
                            plugin: t
                        }), h && (0, y.jsxs)("div", {
                            children: [(0, y.jsx)("div", {
                                className: "text-sm",
                                children: t.manifest.auth.instructions || (0, y.jsx)(C.Z, (0, v._)({}, oy.enterHttpAccessToken))
                            }), (0, y.jsx)("div", {
                                className: "mt-2",
                                children: (0, y.jsx)(oe.Z, {
                                    ref: d,
                                    type: "password",
                                    name: "token",
                                    placeholder: "Enter your credentials",
                                    autoComplete: "off",
                                    onPressEnter: x
                                })
                            })]
                        }), p && (0, y.jsx)("div", {
                            children: (0, y.jsx)(C.Z, (0, U._)((0, v._)({}, oy.youWillBeRedirected), {
                                values: {
                                    pluginName: (0, y.jsx)("span", {
                                        className: "font-medium",
                                        children: m
                                    })
                                }
                            }))
                        }), s && (0, y.jsx)(os, {
                            children: s
                        })]
                    })
                })
            }
            var oy = (0, _.vU)({
                    installUnverifiedPluginTitle: {
                        id: "InstallPluginModal.installUnverifiedPluginTitle",
                        description: "Title for the Install an Unverified Plugin modal",
                        defaultMessage: "Install an unverified plugin"
                    },
                    pleaseProvideDomain: {
                        id: "InstallPluginModal.pleaseProvideDomain",
                        description: "Text asking the user to provide the website domain of the unverified plugin",
                        defaultMessage: "Please provide the website domain of the unverified plugin you'd like to install."
                    },
                    findPlugin: {
                        id: "InstallPluginModal.findPlugin",
                        description: "Text for the Find Plugin button",
                        defaultMessage: "Find plugin"
                    },
                    cancel: {
                        id: "InstallPluginModal.cancel",
                        description: "Text for the Cancel button",
                        defaultMessage: "Cancel"
                    },
                    unverifiedPluginTitle: {
                        id: "InstallPluginModal.unverifiedPluginTitle",
                        description: "Title for the Unverified Plugin modal",
                        defaultMessage: "Unverified plugin"
                    },
                    loginWithPlugin: {
                        id: "InstallPluginModal.loginWithPlugin",
                        description: "Text for the Log in with plugin button",
                        defaultMessage: "Log in with {pluginName}"
                    },
                    installPlugin: {
                        id: "InstallPluginModal.installPlugin",
                        description: "Text for the Install Plugin button",
                        defaultMessage: "Install plugin"
                    },
                    enterHttpAccessToken: {
                        id: "InstallPluginModal.enterHttpAccessToken",
                        description: "Text asking user to enter their HTTP access token",
                        defaultMessage: "Enter your HTTP access token below:"
                    },
                    youWillBeRedirected: {
                        id: "InstallPluginModal.youWillBeRedirected",
                        description: "Text informing the user they will be redirected to the plugin's login page",
                        defaultMessage: "You will be redirected to {pluginName} to log in."
                    }
                }),
                oj = n(89678),
                ow = n.n(oj);
            (o = h || (h = {}))[o.All = 0] = "All", o[o.Installed = 1] = "Installed", (l = p || (p = {})).New = "newly_added", l.Popular = "most_popular";
            var ok = [{
                    id: p.Popular,
                    title: "Popular"
                }, {
                    id: p.New,
                    title: "New"
                }, {
                    id: h.All,
                    title: "All"
                }, {
                    id: h.Installed,
                    title: "Installed"
                }],
                oM = (0, _.vU)({
                    prev: {
                        id: "PaginationControls.prev",
                        defaultMessage: "Prev",
                        description: "Label for the previous page button in the pagination controls"
                    },
                    next: {
                        id: "PaginationControls.next",
                        defaultMessage: "Next",
                        description: "Label for the next page button in the pagination controls"
                    }
                });

            function oC(e) {
                var t = e.page,
                    n = e.numPages,
                    a = e.goToPage,
                    r = t > 0,
                    i = t < n - 1,
                    s = (0, k.useCallback)(function() {
                        a(Math.max(t - 1, 0))
                    }, [t, a]),
                    o = (0, k.useCallback)(function() {
                        a(Math.min(t + 1, n - 1))
                    }, [t, n, a]),
                    l = [],
                    c = !0,
                    u = !1,
                    d = void 0;
                try {
                    for (var f, g = (function(e, t) {
                            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 10,
                                a = Math.max(0, t - n + 1);
                            if (0 === a) return o_(0, t);
                            var r = o_(0, e),
                                i = o_(e + 1, t);
                            if (a < i.length - 1) i.splice(Math.floor((i.length - a) / 2), a, -1);
                            else if (a < r.length - 1) r.splice(Math.floor((r.length - a) / 2), a, -1);
                            else {
                                var s = Math.min(i.length - 3, a),
                                    o = a - s + 1;
                                i.splice(Math.floor((i.length - s) / 2), s, -1), r.splice(Math.floor((r.length - o) / 2), o, -2)
                            }
                            return (0, e7._)(r).concat([e], (0, e7._)(i))
                        })(t, n)[Symbol.iterator](); !(c = (f = g.next()).done); c = !0) ! function() {
                        var e = f.value;
                        e < 0 ? l.push((0, y.jsx)("div", {
                            role: "button",
                            className: "flex h-5 w-5 items-center justify-center",
                            children: "…"
                        }, "ellipsis-".concat(e))) : l.push((0, y.jsx)(oU, {
                            role: "button",
                            className: (0, J.default)("flex h-5 w-5 items-center justify-center", e === t && "text-blue-600 hover:text-blue-600 dark:text-blue-600 dark:hover:text-blue-600"),
                            onClick: function() {
                                return a(e)
                            },
                            children: e + 1
                        }, e))
                    }()
                } catch (e) {
                    u = !0, d = e
                } finally {
                    try {
                        c || null == g.return || g.return()
                    } finally {
                        if (u) throw d
                    }
                }
                return (0, y.jsxs)("div", {
                    className: "flex flex-wrap gap-2 text-sm text-black/60 dark:text-white/70",
                    children: [(0, y.jsxs)(oU, {
                        role: "button",
                        className: (0, J.default)("flex items-center", !r && "opacity-50"),
                        onClick: s,
                        $disabled: !r,
                        children: [(0, y.jsx)(ep.ZP, {
                            icon: M.YFh
                        }), (0, y.jsx)(C.Z, (0, v._)({}, oM.prev))]
                    }), l, (0, y.jsxs)(oU, {
                        role: "button",
                        className: (0, J.default)("flex items-center", !i && "opacity-50"),
                        onClick: o,
                        $disabled: !i,
                        children: [(0, y.jsx)(C.Z, (0, v._)({}, oM.next)), (0, y.jsx)(ep.ZP, {
                            icon: M.Tfp
                        })]
                    })]
                })
            }

            function o_(e, t) {
                return Array.from({
                    length: t - e
                }, function(t, n) {
                    return n + e
                })
            }
            var oT = (0, _.vU)({
                title: {
                    id: "RequiresMfaModal.title",
                    defaultMessage: "Enable two-factor authentication",
                    description: "Title for the modal to enable two-factor authentication"
                },
                enableMfaButton: {
                    id: "RequiresMfaModal.enableMfaButton",
                    defaultMessage: "Enable two-factor authentication",
                    description: "Label for the button to enable two-factor authentication"
                },
                cancelButton: {
                    id: "RequiresMfaModal.cancelButton",
                    defaultMessage: "Cancel",
                    description: "Label for the cancel button"
                },
                disclaimer: {
                    id: "RequiresMfaModal.disclaimer",
                    defaultMessage: "This plugin requires you to have two-factor authentication enabled for additional security. Please set up two-factor authentication and try again.",
                    description: "Disclaimer text informing the user that the plugin requires two-factor authentication"
                }
            });

            function oP(e) {
                var t = e.onClose,
                    n = (0, i1.S)().setupMfa,
                    a = (0, eo.Z)();
                return (0, y.jsx)(eh.Z, {
                    isOpen: !0,
                    onClose: t,
                    type: "success",
                    title: a.formatMessage(oT.title),
                    primaryButton: (0, y.jsx)(em.ZP.Button, {
                        title: a.formatMessage(oT.enableMfaButton),
                        color: "primary",
                        onClick: n
                    }),
                    secondaryButton: (0, y.jsx)(em.ZP.Button, {
                        title: a.formatMessage(oT.cancelButton),
                        color: "neutral",
                        onClick: t
                    }),
                    children: (0, y.jsx)(oi, {
                        children: (0, y.jsx)(ot.I, {
                            children: (0, y.jsx)(ot.Z, {
                                icon: "\uD83D\uDEA8",
                                children: (0, y.jsx)(C.Z, (0, v._)({}, oT.disclaimer))
                            })
                        })
                    })
                })
            }

            function oN() {
                var e = (0, G._)(["text-sm text-black/70 dark:text-white/70 whitespace-nowrap ", ""]);
                return oN = function() {
                    return e
                }, e
            }

            function oS() {
                var e = (0, G._)(["hidden h-4 border-l border-black/30 dark:border-white/30 sm:block"]);
                return oS = function() {
                    return e
                }, e
            }
            var oZ = (x = {}, (0, q._)(x, D._G.Mobile, 8), (0, q._)(x, D._G.Small, 4), (0, q._)(x, D._G.Medium, 4), (0, q._)(x, D._G.Large, 6), (0, q._)(x, D._G.XLarge, 8), x),
                oI = (0, _.vU)({
                    title: {
                        id: "PluginStoreModal.title",
                        defaultMessage: "Plugin store",
                        description: "Title of the plugin store"
                    },
                    searchPlaceholder: {
                        id: "PluginStoreModal.searchPlaceholder",
                        defaultMessage: "Search plugins",
                        description: "Placeholder text for the plugin store search bar"
                    },
                    noSearchResultsTitle: {
                        id: "PluginStoreModal.noSearchResults",
                        defaultMessage: 'No plugins found for "{query}"',
                        description: "Message shown when no plugins are found for a search query"
                    },
                    noSearchResultsHint: {
                        id: "PluginStoreModal.noSearchResultsHint",
                        defaultMessage: "Try a different query or category",
                        description: "Hint shown when no plugins are found for a search query"
                    },
                    installUnverifiedPlugin: {
                        id: "PluginStoreModal.installUnverifiedPlugin",
                        defaultMessage: "Install an unverified plugin",
                        description: "Link to dialog to install an unverified plugin"
                    },
                    developPlugin: {
                        id: "PluginStoreModal.developPlugin",
                        defaultMessage: "Develop your own plugin",
                        description: "Link to dialog to develop your own plugin"
                    },
                    aboutPlugins: {
                        id: "PluginStoreModal.aboutPlugins",
                        defaultMessage: "About plugins",
                        description: "Link to learn more about plugins"
                    },
                    install: {
                        id: "PluginStoreModal.card.install",
                        defaultMessage: "Install",
                        description: "Button to install a plugin"
                    },
                    uninstall: {
                        id: "PluginStoreModal.card.uninstall",
                        defaultMessage: "Uninstall",
                        description: "Button to uninstall a plugin"
                    },
                    installing: {
                        id: "PluginStoreModal.card.installing",
                        defaultMessage: "Installing",
                        description: "Status label when installing a plugin"
                    },
                    uninstalling: {
                        id: "PluginStoreModal.card.uninstalling",
                        defaultMessage: "Uninstalling",
                        description: "Status label when uninstalling a plugin"
                    },
                    developerInfo: {
                        id: "PluginStoreModal.card.developerInfo",
                        defaultMessage: "Developer info",
                        description: "Label for plugin developer information"
                    }
                }),
                oD = p.Popular;

            function oB(e) {
                var t, n, a, r = e.onInstallWithAuthRequired,
                    i = e.onClickInstallDeveloper,
                    s = e.onClickDevelop,
                    o = e.onClickAbout,
                    l = e.onClose,
                    c = (0, eo.Z)(),
                    u = (0, S.hz)(),
                    d = (0, B._)((0, k.useState)(oD), 2),
                    f = d[0],
                    g = d[1],
                    m = (0, B._)((0, k.useState)(""), 2),
                    p = m[0],
                    x = m[1],
                    b = (0, B._)((0, k.useState)(""), 2),
                    j = b[0],
                    w = b[1],
                    _ = (n = (t = (0, rW.C)()).isLoading, a = t.installedPlugins, {
                        availableFilters: (0, k.useMemo)(function() {
                            return ok.filter(function(e) {
                                return e.id !== h.Installed || a.length > 0
                            })
                        }, [a]),
                        isLoading: n
                    }).availableFilters;
                (0, k.useEffect)(function() {
                    _.some(function(e) {
                        return e.id === f
                    }) || g(oD)
                }, [f, _]);
                var T = (0, k.useCallback)(ow()(function(e) {
                    w(e)
                }, 300), []);
                return (0, y.jsx)(eh.Z, {
                    isOpen: !0,
                    onClose: l,
                    size: "custom",
                    className: "w-full max-w-7xl bg-gray-50 md:min-w-[672px] lg:min-w-[896px] xl:min-w-[1024px]",
                    type: "success",
                    title: c.formatMessage(oI.title),
                    closeButton: (0, y.jsx)(em.ZP.CloseButton, {
                        onClose: l
                    }),
                    children: (0, y.jsxs)(oi, {
                        children: [_.length > 1 && (0, y.jsxs)("div", {
                            className: "flex flex-wrap gap-3",
                            children: [_.map(function(e) {
                                return (0, y.jsx)(oR, {
                                    selected: f === e.id,
                                    onClick: function() {
                                        g(e.id)
                                    },
                                    children: e.title
                                }, e.id)
                            }), (0, y.jsxs)("div", {
                                className: "relative",
                                children: [(0, y.jsx)("div", {
                                    className: "pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3",
                                    children: (0, y.jsx)(ep.ZP, {
                                        icon: M.jRj,
                                        className: "h-5 w-5 text-gray-500 dark:text-gray-400"
                                    })
                                }), (0, y.jsx)(oe.Z, {
                                    className: "pl-10",
                                    autoFocus: !0,
                                    type: "search",
                                    placeholder: c.formatMessage(oI.searchPlaceholder),
                                    value: p,
                                    onChange: function(e) {
                                        x(e.target.value), g(h.All), T(e.target.value)
                                    },
                                    name: "search"
                                })]
                            })]
                        }), (0, y.jsx)(oF, {
                            filter: f,
                            query: j,
                            onInstallWithAuthRequired: r,
                            children: (0, y.jsxs)("div", {
                                className: "flex flex-col items-center gap-2 sm:flex-row",
                                children: [u.has("tools3_dev") && (0, y.jsxs)(y.Fragment, {
                                    children: [(0, y.jsx)(oU, {
                                        onClick: i,
                                        children: (0, y.jsx)(C.Z, (0, v._)({}, oI.installUnverifiedPlugin))
                                    }), (0, y.jsx)(oO, {}), (0, y.jsx)(oU, {
                                        onClick: s,
                                        children: (0, y.jsx)(C.Z, (0, v._)({}, oI.developPlugin))
                                    }), (0, y.jsx)(oO, {})]
                                }), (0, y.jsx)(oU, {
                                    onClick: o,
                                    children: (0, y.jsx)(C.Z, (0, v._)({}, oI.aboutPlugins))
                                })]
                            })
                        })]
                    })
                })
            }

            function oF(e) {
                var t = e.filter,
                    n = e.query,
                    a = e.onInstallWithAuthRequired,
                    r = e.children,
                    i = oZ[(0, D.dQ)()],
                    s = (0, B._)((0, k.useState)(0), 2),
                    o = s[0],
                    l = s[1],
                    c = function(e) {
                        var t = e.filter,
                            n = e.query,
                            a = e.page,
                            r = e.pageSize,
                            i = (0, rz.Z)({
                                category: function(e) {
                                    if (e !== h.All && e !== h.Installed) return e
                                }(t),
                                search: n,
                                offset: r * a,
                                limit: r
                            }),
                            s = i.data,
                            o = i.isLoading,
                            l = (0, rW.C)(),
                            c = l.installedPlugins,
                            u = l.isLoading,
                            d = (0, k.useMemo)(function() {
                                return "" !== n ? c.map(function(e) {
                                    return {
                                        plugin: e,
                                        score: function(e, t) {
                                            var n = t.toLowerCase(),
                                                a = n.trim().split(/\s+/),
                                                r = e.manifest.description_for_human.toLowerCase(),
                                                i = e.manifest.name_for_human.toLowerCase(),
                                                s = 0;
                                            if (i === n || e.domain.toLowerCase() === n) return 1e3;
                                            if (i.startsWith(n)) return 500;
                                            if (i.includes(n)) return 100;
                                            var o = !0,
                                                l = !1,
                                                c = void 0;
                                            try {
                                                for (var u, d = a[Symbol.iterator](); !(o = (u = d.next()).done); o = !0) {
                                                    var f = u.value;
                                                    if (i.startsWith(f)) s += 50;
                                                    else if (i.includes(f)) s += 10;
                                                    else {
                                                        if (!r.includes(f)) return 0;
                                                        s += 1
                                                    }
                                                }
                                            } catch (e) {
                                                l = !0, c = e
                                            } finally {
                                                try {
                                                    o || null == d.return || d.return()
                                                } finally {
                                                    if (l) throw c
                                                }
                                            }
                                            return s
                                        }(e, n)
                                    }
                                }).filter(function(e) {
                                    return e.score > 0
                                }).sort(function(e, t) {
                                    return t.score - e.score
                                }).map(function(e) {
                                    return e.plugin
                                }) : c.sort(function(e, t) {
                                    return e.manifest.name_for_human.localeCompare(t.manifest.name_for_human)
                                })
                            }, [c, n]);
                        if (t === h.Installed) {
                            var f, g, m, p, x, v, b = (g = (f = {
                                page: a,
                                items: d,
                                pageSize: r
                            }).page, m = f.items, p = f.pageSize, x = Math.ceil(m.length / p), v = g * p, {
                                pagesTotal: x,
                                pageItems: m.slice(v, v + p)
                            });
                            return {
                                isLoading: u,
                                items: b.pageItems,
                                pagesTotal: b.pagesTotal
                            }
                        }
                        var y = null != s ? s : {
                                count: void 0,
                                items: void 0
                            },
                            j = y.count;
                        return {
                            isLoading: o,
                            items: y.items,
                            pagesTotal: void 0 !== j ? Math.ceil(j / r) : void 0
                        }
                    }({
                        pageSize: i,
                        filter: t,
                        query: n,
                        page: o
                    }),
                    u = c.isLoading,
                    d = c.items,
                    f = c.pagesTotal;
                (0, k.useEffect)(function() {
                    l(0)
                }, [t, n]);
                var g = (0, B._)((0, k.useState)(!1), 2),
                    m = g[0],
                    p = g[1];
                return m ? (0, y.jsx)(oP, {
                    onClose: function() {
                        p(!1)
                    }
                }) : (0, y.jsxs)(y.Fragment, {
                    children: [(0, y.jsx)(oL, {
                        plugins: null != d ? d : [],
                        numSkeletons: i,
                        query: n,
                        isLoading: u,
                        onInstallWithAuthRequired: a,
                        onRequestMfa: function() {
                            return p(!0)
                        }
                    }), (0, y.jsxs)("div", {
                        className: "flex flex-col flex-wrap items-center justify-center gap-6 sm:flex-row md:justify-between",
                        children: [(0, y.jsx)("div", {
                            className: "flex flex-1 justify-start max-lg:justify-center",
                            children: void 0 !== f && f > 1 && (0, y.jsx)(oC, {
                                page: o,
                                numPages: f,
                                goToPage: l
                            })
                        }), r]
                    })]
                })
            }

            function oR(e) {
                var t = e.selected,
                    n = e.onClick,
                    a = e.children;
                return (0, y.jsx)(eg.z, {
                    color: t ? "light" : "neutral",
                    className: (0, J.default)("focus:ring-0", t && "hover:bg-gray-200", !t && "text-black/50"),
                    onClick: n,
                    children: a
                })
            }

            function oL(e) {
                var t = e.plugins,
                    n = e.numSkeletons,
                    a = e.isLoading,
                    r = e.onInstallWithAuthRequired,
                    i = e.onRequestMfa,
                    s = e.query;
                if (0 === t.length && !a && s) return (0, y.jsxs)("div", {
                    className: "flex h-[404px] flex-col items-center justify-center gap-4",
                    children: [(0, y.jsx)("div", {
                        className: "text-lg font-medium",
                        children: (0, y.jsx)(C.Z, (0, U._)((0, v._)({}, oI.noSearchResultsTitle), {
                            values: {
                                query: s
                            }
                        }))
                    }), (0, y.jsx)("div", {
                        className: "text-sm text-black/50",
                        children: (0, y.jsx)(C.Z, (0, v._)({}, oI.noSearchResultsHint))
                    })]
                });
                var o = a ? Array(n).fill(0).map(function(e, t) {
                    return (0, y.jsx)(oA, {}, t)
                }) : t.map(function(e) {
                    return (0, y.jsx)(oE, {
                        plugin: e,
                        onInstallWithAuthRequired: r,
                        onRequestMfa: i
                    }, e.id)
                });
                return (0, y.jsx)("div", {
                    className: "grid grid-cols-1 gap-3 sm:grid-cols-2 sm:grid-rows-2 lg:grid-cols-3 xl:grid-cols-4",
                    children: o
                })
            }

            function oE(e) {
                var t, n, a = e.plugin,
                    r = e.onInstallWithAuthRequired,
                    i = e.onRequestMfa,
                    s = (0, B._)((0, k.useState)(!1), 2),
                    o = s[0],
                    l = s[1],
                    c = (0, B._)((0, k.useState)(!1), 2),
                    u = c[0],
                    d = c[1],
                    f = (0, on.U$)({
                        onSuccess: function(e) {
                            (0, i3.wu)(e.id)
                        },
                        onError: function(e) {
                            console.error(e), ti.m.danger("Error installing ".concat(a.manifest.name_for_human, "."))
                        },
                        onSettled: function() {
                            l(!1)
                        }
                    }),
                    g = (0, on.qo)({
                        onSuccess: function() {},
                        onError: function(e) {
                            console.error(e), ti.m.danger("Error uninstalling ".concat(a.manifest.name_for_human, "."))
                        },
                        onSettled: function() {
                            d(!1)
                        }
                    }),
                    m = (0, eY.kP)().session,
                    h = (0, S.hz)(),
                    p = (0, eo.Z)(),
                    x = (0, i1.S)().isUsernamePassword,
                    b = (0, k.useCallback)(function() {
                        var e, t = a.manifest.auth.type;
                        if (!("none" === t || "service_http" === t) && !(null == m ? void 0 : null === (e = m.user) || void 0 === e ? void 0 : e.mfa) && h.has(ed.i) && x) {
                            i();
                            return
                        }
                        if ("oauth" === t) {
                            if (h.has("new_plugin_oauth_endpoint")) {
                                (0, on.Up)(a);
                                return
                            }
                            var n = (0, on.nT)(a);
                            null != n ? window.location.href = n : ti.m.danger("Missing plugin configuration for ".concat(a.manifest.name_for_human, "."))
                        } else "user_http" === t ? r(a) : (l(!0), f(a.id))
                    }, [a, f, r, i, x, m, h]),
                    j = (0, k.useCallback)(function() {
                        d(!0), g(a.id)
                    }, [a, g]);
                return n = o || u ? (0, y.jsxs)(eg.z, {
                    color: "light",
                    className: "bg-green-100 hover:bg-green-100",
                    children: [o ? p.formatMessage(oI.installing) : p.formatMessage(oI.uninstalling), (0, y.jsx)(ex.Z, {})]
                }) : (null === (t = a.user_settings) || void 0 === t ? void 0 : t.is_installed) ? (0, y.jsxs)(eg.z, {
                    color: "light",
                    className: "hover:bg-gray-200",
                    onClick: j,
                    children: [(0, y.jsx)(C.Z, (0, v._)({}, oI.uninstall)), (0, y.jsx)(ep.ZP, {
                        icon: M.$Rx
                    })]
                }) : (0, y.jsxs)(eg.z, {
                    onClick: b,
                    children: [(0, y.jsx)(C.Z, (0, v._)({}, oI.install)), (0, y.jsx)(ep.ZP, {
                        icon: M.wzc
                    })]
                }), (0, y.jsx)(oq, {
                    logo: (0, y.jsx)(rC.Z, {
                        url: a.manifest.logo_url,
                        name: a.manifest.name_for_human,
                        size: "100%",
                        large: !0
                    }),
                    tag: (0, is.cf)(a) ? (0, y.jsx)(ig, {}) : "approved" !== a.status ? (0, y.jsx)(id, {}) : void 0,
                    title: (0, y.jsx)("div", {
                        className: "max-w-full truncate text-lg leading-6",
                        children: a.manifest.name_for_human
                    }),
                    button: n,
                    description: a.manifest.description_for_human,
                    developerInfo: (0, y.jsxs)("div", {
                        className: "flex items-center gap-1.5",
                        children: [(0, y.jsx)(C.Z, (0, v._)({}, oI.developerInfo)), (0, y.jsx)("a", {
                            href: a.manifest.legal_info_url,
                            target: "_blank",
                            rel: "noreferrer",
                            children: (0, y.jsx)(ep.ZP, {
                                icon: M.RsK,
                                size: "xsmall"
                            })
                        }), (0, y.jsx)("a", {
                            href: "mailto:".concat(a.manifest.contact_email),
                            children: (0, y.jsx)(ep.ZP, {
                                icon: M.Imn,
                                size: "xsmall"
                            })
                        })]
                    })
                })
            }

            function oA() {
                return (0, y.jsx)(oq, {
                    logo: (0, y.jsx)("div", {
                        className: "h-full w-full rounded-[5px] bg-gray-300"
                    }),
                    title: (0, y.jsx)("div", {
                        className: "h-[19px] w-[103px] rounded-[5px] bg-gray-100"
                    }),
                    button: (0, y.jsx)("div", {
                        className: "h-[36px] w-[103px] rounded-[5px] bg-gray-200"
                    }),
                    description: (0, y.jsxs)("div", {
                        className: "flex flex-col gap-1.5",
                        children: [(0, y.jsx)("div", {
                            className: "h-[14px] w-[209px] rounded-[5px] bg-gray-100"
                        }), (0, y.jsx)("div", {
                            className: "h-[14px] w-[218px] rounded-[5px] bg-gray-100"
                        }), (0, y.jsx)("div", {
                            className: "h-[14px] w-[184px] rounded-[5px] bg-gray-100"
                        })]
                    }),
                    developerInfo: (0, y.jsx)("div", {
                        className: "h-full w-[120px] rounded-[5px] bg-gray-50"
                    })
                })
            }

            function oq(e) {
                var t = e.logo,
                    n = e.tag,
                    a = e.title,
                    r = e.button,
                    i = e.description,
                    s = e.developerInfo;
                return (0, y.jsxs)("div", {
                    className: "flex flex-col gap-4 rounded border border-black/10 bg-white p-6 dark:border-white/20 dark:bg-gray-900",
                    children: [(0, y.jsxs)("div", {
                        className: "flex gap-4",
                        children: [(0, y.jsx)("div", {
                            className: "h-[70px] w-[70px] shrink-0",
                            children: t
                        }), (0, y.jsxs)("div", {
                            className: "flex min-w-0 flex-col items-start justify-between",
                            children: [null != n ? (0, y.jsxs)("div", {
                                className: "flex items-center gap-1.5",
                                children: [n, a]
                            }) : a, r]
                        })]
                    }), (0, y.jsx)("div", {
                        className: "h-[60px] text-sm text-black/70 line-clamp-3 dark:text-white/70",
                        children: i
                    }), (0, y.jsx)("div", {
                        className: "h-[14px] text-xs text-black/60 dark:text-white/60",
                        children: s
                    })]
                })
            }
            var oU = el.Z.button(oN(), function(e) {
                    return e.$disabled ? "opacity-50 cursor-default" : "hover:text-black/50 dark:hover:text-white/50"
                }),
                oO = el.Z.div(oS()),
                oz = (0, _.vU)({
                    aboutPlugins: {
                        id: "StoreDisclaimerModal.aboutPlugins",
                        defaultMessage: "About plugins",
                        description: "Title for the About Plugins modal"
                    },
                    okButton: {
                        id: "StoreDisclaimerModal.okButton",
                        defaultMessage: "OK",
                        description: "OK button text"
                    },
                    cancelButton: {
                        id: "StoreDisclaimerModal.cancelButton",
                        defaultMessage: "Cancel",
                        description: "Cancel button text"
                    },
                    thirdPartyWarning: {
                        id: "StoreDisclaimerModal.thirdPartyWarning",
                        defaultMessage: "Plugins are powered by third party applications that are not controlled by OpenAI. Be sure you trust a plugin before installation.",
                        description: "Warning about third-party applications and trust"
                    },
                    externalAppsWarning: {
                        id: "StoreDisclaimerModal.externalAppsWarning",
                        defaultMessage: "Plugins connect ChatGPT to external apps. If you enable a plugin, ChatGPT may send your conversation, Custom Instructions, and the country or state you're in to the plugin.",
                        description: "Warning about external apps and data sharing"
                    },
                    autoUseWarning: {
                        id: "StoreDisclaimerModal.autoUseWarning",
                        defaultMessage: "ChatGPT automatically chooses when to use plugins during a conversation, depending on the plugins you've enabled.",
                        description: "Information about automatic plugin usage during conversations"
                    }
                });

            function oW(e) {
                var t = e.allowClose,
                    n = e.onConfirm,
                    a = e.onClose,
                    r = (0, eo.Z)();
                return (0, y.jsx)(eh.Z, {
                    isOpen: !0,
                    onClose: a,
                    type: "success",
                    title: r.formatMessage(oz.aboutPlugins),
                    primaryButton: (0, y.jsx)(em.ZP.Button, {
                        title: r.formatMessage(oz.okButton),
                        color: "primary",
                        onClick: n
                    }),
                    secondaryButton: t && (0, y.jsx)(em.ZP.Button, {
                        title: r.formatMessage(oz.cancelButton),
                        color: "neutral",
                        onClick: a
                    }),
                    children: (0, y.jsx)(oi, {
                        children: (0, y.jsxs)(ot.I, {
                            children: [(0, y.jsx)(ot.Z, {
                                icon: "\uD83D\uDEA8",
                                children: (0, y.jsx)(C.Z, (0, v._)({}, oz.thirdPartyWarning))
                            }), (0, y.jsx)(ot.Z, {
                                icon: "\uD83C\uDF10",
                                children: (0, y.jsx)(C.Z, (0, v._)({}, oz.externalAppsWarning))
                            }), (0, y.jsx)(ot.Z, {
                                icon: "\uD83E\uDDE0",
                                children: (0, y.jsx)(C.Z, (0, v._)({}, oz.autoUseWarning))
                            })]
                        })
                    })
                })
            }
            var oH = "oai/apps/hasSeenPluginsDisclaimer";

            function oQ(e) {
                var t = e.onInstall,
                    n = e.onClose,
                    a = (0, B._)((0, k.useState)(!!ty.m.getItem(oH)), 2),
                    r = a[0],
                    i = a[1],
                    s = (0, B._)((0, k.useState)(!1), 2),
                    o = s[0],
                    l = s[1],
                    c = (0, B._)((0, k.useState)(!1), 2),
                    u = c[0],
                    d = c[1],
                    f = (0, B._)((0, k.useState)(), 2),
                    g = f[0],
                    m = f[1],
                    h = (0, B._)((0, k.useState)(!1), 2),
                    p = h[0],
                    x = h[1],
                    v = (0, k.useCallback)(function() {
                        i(!0), l(!1), ty.m.setItem(oH, !0)
                    }, []),
                    b = (0, k.useCallback)(function(e) {
                        m(e), d(!0)
                    }, []),
                    j = (0, k.useCallback)(function() {
                        d(!0)
                    }, []),
                    w = (0, k.useCallback)(function() {
                        x(!0)
                    }, []),
                    M = (0, k.useCallback)(function() {
                        l(!0)
                    }, []),
                    C = (0, k.useCallback)(function(e) {
                        (0, i3.wu)(e.id), n(), t(e)
                    }, [t, n]),
                    _ = (0, k.useCallback)(function() {
                        m(void 0), d(!1), n()
                    }, [n]),
                    T = (0, k.useCallback)(function() {
                        x(!1), n()
                    }, [n]);
                return !r || o ? (0, y.jsx)(oW, {
                    allowClose: !r,
                    onConfirm: v,
                    onClose: n
                }) : u ? (0, y.jsx)(ox, {
                    plugin: g,
                    onInstall: C,
                    onClose: _
                }) : p ? (0, y.jsx)(oc, {
                    onClickInstall: b,
                    onInstallLocalhost: C,
                    onClose: T
                }) : (0, y.jsx)(oB, {
                    onInstallWithAuthRequired: b,
                    onClickInstallDeveloper: j,
                    onClickDevelop: w,
                    onClickAbout: M,
                    onClose: n
                })
            }

            function oV() {
                var e = (0, G._)(["flex h-8 flex-shrink-0 items-center justify-center border-b border-black/10 bg-gray-50 text-xs text-gray-800 dark:border-white/20 dark:bg-[#272832] dark:text-white"]);
                return oV = function() {
                    return e
                }, e
            }

            function o$(e) {
                var t, n = e.theme,
                    a = void 0 === n ? "default" : n,
                    r = (0, B._)((0, k.useState)(!1), 2),
                    i = r[0],
                    s = r[1],
                    o = (0, B._)((0, k.useState)(!1), 2),
                    l = o[0],
                    c = o[1],
                    u = (0, w.useRouter)(),
                    d = (0, rW.C)(),
                    f = d.installedPlugins,
                    g = d.isLoading,
                    m = (0, i3.p0)(),
                    h = (0, k.useRef)(null);
                (0, k.useEffect)(function() {
                    if (!g) {
                        var e = u.query,
                            t = e.loginAip,
                            n = e.loginSuccess,
                            a = (0, b._)(e, ["loginAip", "loginSuccess"]);
                        if (t) {
                            var r, i, s = f.find(function(e) {
                                return e.id === t
                            });
                            s && "true" === n ? ((0, i3.wu)(u.query.loginAip), null === (r = h.current) || void 0 === r || r.open()) : ti.m.warning("Couldn't log in with ".concat(null !== (i = null == s ? void 0 : s.manifest.name_for_human) && void 0 !== i ? i : "plugin", ".")), u.replace({
                                pathname: u.pathname,
                                query: a
                            })
                        }
                    }
                }, [u, f, g]);
                var p = (0, k.useCallback)(function() {
                        var e;
                        null === (e = h.current) || void 0 === e || e.open()
                    }, []),
                    x = (0, k.useCallback)(function() {
                        s(!1)
                    }, []),
                    j = (0, B._)((0, k.useState)(m), 2),
                    _ = j[0],
                    T = j[1],
                    P = (0, k.useCallback)(function(e) {
                        if (e.length > i3.hZ) c(!0), setTimeout(function() {
                            c(!1)
                        }, 600);
                        else {
                            var t = e.filter(function(e) {
                                    return !m.find(function(t) {
                                        return t.id === e.id
                                    })
                                }),
                                n = !0,
                                a = !1,
                                r = void 0;
                            try {
                                for (var i, s = i3.iO[Symbol.iterator](); !(n = (i = s.next()).done); n = !0) {
                                    var o = function() {
                                        var e = i.value,
                                            n = m.find(function(t) {
                                                return e.includes(t.domain)
                                            });
                                        if (n) {
                                            var a = e.find(function(e) {
                                                    return e !== n.domain
                                                }),
                                                r = t.find(function(e) {
                                                    return e.domain === a
                                                });
                                            if (r) return ti.m.warning("You can't enable ".concat(r.manifest.name_for_human, " while ").concat(n.manifest.name_for_human, " is enabled.")), {
                                                v: void 0
                                            }
                                        }
                                    }();
                                    if ("object" === (0, rO._)(o)) return o.v
                                }
                            } catch (e) {
                                a = !0, r = e
                            } finally {
                                try {
                                    n || null == s.return || s.return()
                                } finally {
                                    if (a) throw r
                                }
                            }(0, i3.dT)(e.map(function(e) {
                                return e.id
                            }))
                        }
                    }, [m]),
                    N = (0, k.useCallback)(function(e) {
                        var t;
                        null === (t = h.current) || void 0 === t || t.close(), "store" === e && s(!0)
                    }, []),
                    S = (0, k.useCallback)(function() {
                        T(m), nC.m9.logEvent("chatgpt_plugin_chooser_opened", null, {
                            num_enabled_plugins: "".concat(m.length)
                        })
                    }, [m]),
                    Z = (0, k.useCallback)(function() {
                        var e = _.filter(function(e) {
                                return !m.find(function(t) {
                                    return t.id === e.id
                                })
                            }),
                            t = m.filter(function(e) {
                                return !_.find(function(t) {
                                    return t.id === e.id
                                })
                            }),
                            n = !0,
                            a = !1,
                            r = void 0;
                        try {
                            for (var i, s = t[Symbol.iterator](); !(n = (i = s.next()).done); n = !0) {
                                var o = i.value;
                                nC.m9.logEvent("chatgpt_plugin_enabled", null, {
                                    plugin_id: o.id
                                })
                            }
                        } catch (e) {
                            a = !0, r = e
                        } finally {
                            try {
                                n || null == s.return || s.return()
                            } finally {
                                if (a) throw r
                            }
                        }
                        var l = !0,
                            c = !1,
                            u = void 0;
                        try {
                            for (var d, f = e[Symbol.iterator](); !(l = (d = f.next()).done); l = !0) {
                                var g = d.value;
                                nC.m9.logEvent("chatgpt_plugin_disabled", null, {
                                    plugin_id: g.id
                                })
                            }
                        } catch (e) {
                            c = !0, u = e
                        } finally {
                            try {
                                l || null == f.return || f.return()
                            } finally {
                                if (c) throw u
                            }
                        }
                    }, [m, _]),
                    I = f.map(function(e) {
                        return {
                            value: e,
                            title: e.manifest.name_for_human,
                            description: e.manifest.description_for_human,
                            tags: [],
                            customTags: (0, is.cf)(e) ? (0, y.jsx)(ig, {}) : "approved" !== e.status ? (0, y.jsx)(id, {}) : void 0,
                            imageUrl: e.manifest.logo_url
                        }
                    }),
                    D = I.filter(function(e) {
                        return m.find(function(t) {
                            return t.id === e.value.id
                        })
                    }),
                    F = (0, y.jsx)(C.Z, (0, U._)((0, v._)({}, oJ.pluginsEnabled), {
                        values: {
                            count: m.length
                        }
                    }));
                if (m.length > 0 && m.length < 6) {
                    var R = m.map(function(e, t) {
                        return (0, y.jsx)(rC.Z, {
                            url: e.manifest.logo_url,
                            name: e.manifest.name_for_human,
                            size: 24
                        }, t)
                    });
                    F = (0, y.jsx)("div", {
                        className: "flex gap-2",
                        children: R
                    })
                }
                var L = [{
                    id: "store",
                    label: "Plugin store",
                    icon: M.Rgz
                }];
                f.length > i3.hZ && (t = (0, y.jsx)(oG, {
                    className: (0, J.default)("transition-colors duration-300", l && "bg-red-200 text-red-800 dark:bg-red-200 dark:text-red-800"),
                    children: (0, y.jsx)(C.Z, (0, U._)((0, v._)({}, oJ.enabledPluginsLimit), {
                        values: {
                            enabledPlugins: m.length,
                            maxEnabledPlugins: i3.hZ
                        }
                    }))
                }));
                var E = (0, y.jsxs)(y.Fragment, {
                    children: [(0, y.jsx)(oG, {
                        children: (0, y.jsx)(C.Z, (0, v._)({}, oJ.loading))
                    }), (0, y.jsx)(sK, {
                        showCheckbox: !0,
                        theme: a
                    }), (0, y.jsx)(sK, {
                        showCheckbox: !0,
                        theme: a
                    }), (0, y.jsx)(sK, {
                        showCheckbox: !0,
                        theme: a
                    }), (0, y.jsx)(sK, {
                        showCheckbox: !0,
                        theme: a
                    }), (0, y.jsx)(sK, {
                        showCheckbox: !0,
                        theme: a
                    })]
                });
                return (0, y.jsxs)(y.Fragment, {
                    children: [(0, y.jsx)(sV, {
                        name: "Plugins",
                        selectedOptions: D,
                        selectedLabel: F,
                        options: I,
                        actions: L,
                        onChange: P,
                        onAction: N,
                        onOpen: S,
                        onClose: Z,
                        dropdownRef: h,
                        isLoading: g,
                        loadingState: E,
                        header: t,
                        theme: "mini" === a ? "mini" : "default"
                    }), i && (0, y.jsx)(oQ, {
                        onInstall: p,
                        onClose: x
                    })]
                })
            }
            var oG = el.Z.div(oV()),
                oJ = (0, _.vU)({
                    pluginsEnabled: {
                        id: "PluginChooser.pluginsEnabled",
                        description: "Text shown with the number of enabled plugins.",
                        defaultMessage: "{count, plural, =0 {No plugins} one {# plugin} other {# plugins}} enabled"
                    },
                    loading: {
                        id: "PluginChooser.loading",
                        description: "Text shown when plugin information is being loaded.",
                        defaultMessage: "Loading..."
                    },
                    enabledPluginsLimit: {
                        id: "PluginChooser.enabledPluginsLimit",
                        description: "Text shown with the number of enabled plugins and the maximum limit.",
                        defaultMessage: "{enabledPlugins}/{maxEnabledPlugins} Enabled"
                    }
                });

            function oY(e) {
                var t, n = e.currentModelId,
                    a = e.shouldShowPlusUpsell,
                    r = (0, iw.fm)(),
                    i = (0, iw.Q_)(),
                    s = (0, iw.B9)(),
                    o = void 0 !== n ? s.get(n) : void 0,
                    l = (0, t9.Fl)().isPluginsAvailable;
                return o && i ? (0, y.jsxs)("div", {
                    className: "relative flex flex-col items-stretch justify-center gap-2 sm:items-center",
                    children: [(0, y.jsx)(sF.ZP, {
                        shouldShowPlusUpsell: a,
                        currentModel: o,
                        onModelChange: r
                    }), l && (null == o ? void 0 : null === (t = o.enabledTools) || void 0 === t ? void 0 : t.includes("tools3")) && (0, y.jsx)(o$, {
                        theme: "mini"
                    })]
                }) : null
            }

            function oK() {
                var e = (0, G._)(["px-2 relative w-full flex flex-col py-2 md:py-6 sticky top-0"]);
                return oK = function() {
                    return e
                }, e
            }

            function oX() {
                var e = (0, G._)(["text-4xl font-semibold text-center text-gray-200 dark:text-gray-600 ml-auto mr-auto mb-10 sm:mb-16 flex gap-2 items-center justify-center flex-grow"]);
                return oX = function() {
                    return e
                }, e
            }
            var o0 = function(e) {
                    var t = e.shouldShowThreadSettings,
                        n = e.shouldShowPlusUpsell,
                        a = e.showSpinner,
                        r = e.currentModelId,
                        i = e.title,
                        s = e.promptTextareaRef,
                        o = e.shouldShowPlaceholder;
                    return (0, S.hz)().has(ed.Zz) ? (0, y.jsx)(o1, {
                        promptTextareaRef: s,
                        shouldShowPlaceholder: o,
                        shouldShowPlusUpsell: n,
                        shouldShowThreadSettings: t,
                        showSpinner: a,
                        currentModelId: r,
                        title: i
                    }) : (0, y.jsxs)(y.Fragment, {
                        children: [t && (0, y.jsx)(o2, {
                            children: (0, y.jsx)(oY, {
                                shouldShowPlusUpsell: n,
                                currentModelId: r
                            })
                        }), t && !o && (0, y.jsx)("div", {
                            className: "align-center flex h-full w-full flex-col justify-center self-center px-2 pb-2 md:pb-[8vh]",
                            children: (0, y.jsxs)(o3, {
                                children: [i, (0, y.jsx)(sd.ZP, {})]
                            })
                        }), o && (0, y.jsx)(sI, {
                            promptTextareaRef: s
                        }), a && (0, y.jsx)(ex.Z, {
                            className: "mt-4 self-center"
                        })]
                    })
                },
                o1 = function(e) {
                    var t = e.shouldShowThreadSettings,
                        n = e.shouldShowPlusUpsell,
                        a = e.currentModelId,
                        r = e.shouldShowPlaceholder,
                        i = e.showSpinner,
                        s = e.title;
                    return r ? (0, y.jsxs)("div", {
                        className: "flex h-full flex-col items-center justify-between pb-64",
                        children: [t && (0, y.jsxs)(y.Fragment, {
                            children: [(0, y.jsx)(o2, {
                                children: (0, y.jsx)(oY, {
                                    shouldShowPlusUpsell: n,
                                    currentModelId: a
                                })
                            }), (0, y.jsx)("div", {
                                className: "align-center flex h-full w-full flex-col justify-center self-center px-2 pb-2 md:pb-[8vh]",
                                children: (0, y.jsxs)(o3, {
                                    children: [s, (0, y.jsx)(sd.ZP, {})]
                                })
                            })]
                        }), (0, y.jsx)("div", {
                            className: "align-center flex h-full w-full flex-col justify-center self-center px-2 pb-2 md:pb-[8vh]",
                            children: i && (0, y.jsx)(ex.Z, {
                                className: "mt-4 self-center"
                            })
                        })]
                    }) : null
                },
                o2 = el.Z.div(oK()),
                o3 = el.Z.h1(oX()),
                o4 = function(e) {
                    var t = e.children,
                        n = e.contentClassName,
                        a = e.content,
                        r = e.side,
                        i = e.sideOffset,
                        s = (0, B._)((0, k.useState)(void 0), 2),
                        o = s[0],
                        l = s[1],
                        c = function() {
                            l(!0)
                        },
                        u = function() {
                            l(void 0)
                        };
                    return (0, y.jsxs)(tj.fC, {
                        open: o,
                        onOpenChange: function(e) {
                            l(!0 === e || void 0)
                        },
                        children: [(0, y.jsx)(tj.xz, {
                            asChild: !0,
                            onMouseEnter: c,
                            onMouseLeave: u,
                            children: t
                        }), (0, y.jsx)(tj.h_, {
                            children: (0, y.jsx)(tj.VY, {
                                onMouseEnter: c,
                                onMouseLeave: u,
                                side: r,
                                sideOffset: i,
                                collisionPadding: 16,
                                className: n,
                                onOpenAutoFocus: function(e) {
                                    e.preventDefault()
                                },
                                onCloseAutoFocus: function(e) {
                                    e.preventDefault()
                                },
                                children: a
                            })
                        })]
                    })
                },
                o5 = n(42271);

            function o8() {
                var e = (0, G._)(["translateY(", ")"]);
                return o8 = function() {
                    return e
                }, e
            }
            var o7 = [0, 60],
                o6 = function(e) {
                    var t = e.clientThreadId,
                        n = (0, eo.Z)(),
                        a = null !== (0, k.useContext)(Z.gB),
                        r = (0, S.hz)(),
                        i = P.tQ.getServerThreadId(t),
                        s = (0, S.ec)(S.F_.isBusinessWorkspace),
                        o = (0, P.cj)(t),
                        l = !s && r.has(ed.RJ) && (!o || r.has(ed.Ln));
                    return !a && void 0 !== i && l ? (0, y.jsx)(tn.u, {
                        side: "left",
                        label: n.formatMessage(lt.shareChat),
                        children: (0, y.jsx)(o5.O, {
                            onClick: function() {
                                return N.vm.openSharingModal(i)
                            },
                            "aria-label": n.formatMessage(lt.shareChat),
                            children: (0, y.jsx)(ep.ZP, {
                                icon: M.A8q
                            })
                        })
                    }) : null
                },
                o9 = function(e) {
                    var t, n, a, r = e.currentModelConfig,
                        i = e.clientThreadId,
                        s = e.icon,
                        o = (0, eo.Z)(),
                        l = null !== (0, k.useContext)(Z.gB),
                        c = (0, N.tN)(N.bM.isThreadHeaderVisible),
                        u = (0, N.tN)(function(e) {
                            return "debug" === e.activeSidebar
                        }),
                        d = (0, S.hz)(),
                        f = d.has("debug") && !u,
                        g = [];
                    f && g.push((0, y.jsx)(tn.u, {
                        side: "left",
                        label: o.formatMessage(lt.openDebug),
                        children: (0, y.jsx)(o5.O, {
                            onClick: function() {
                                return N.vm.toggleActiveSidebar("debug")
                            },
                            "aria-label": o.formatMessage(lt.openDebug),
                            children: (0, y.jsx)(ep.ZP, {
                                icon: M.cDN
                            })
                        })
                    })), g.push((0, y.jsx)(o6, {
                        clientThreadId: i
                    }));
                    var m = (0, rI.c)(0),
                        h = (0, k.useRef)(null),
                        p = (0, k.useRef)(null),
                        x = (0, B._)((0, rr.useAtTop)(), 1)[0],
                        b = (0, k.useCallback)(function(e) {
                            var t = e.scrollTop;
                            if (null == h.current || h.current === t) {
                                h.current = t;
                                return
                            }
                            if (p.current = h.current, h.current = t, p.current > h.current) {
                                N.vm.showThreadHeader();
                                var n = Math.max(o7[0], m.get() - Math.abs(p.current - h.current));
                                n !== m.get() && m.set(n)
                            } else {
                                var a = Math.min(o7[1], m.get() + Math.abs(p.current - h.current));
                                a !== m.get() && m.set(a)
                            }
                        }, [m]),
                        j = (0, nF.H)(m, o7, ["0%", "-100%"]),
                        _ = (0, B._)((0, k.useState)(j.get()), 2),
                        T = (_[0], _[1]);
                    (0, nL.W)(j, "change", function(e) {
                        T(e)
                    });
                    var I = (0, nR.Y)(o8(), j);
                    (0, k.useEffect)(function() {
                        N.vm.showThreadHeader()
                    }, []), (0, rr.useObserveScrollPosition)(l ? void 0 : b);
                    var D = (0, P.Qi)(i),
                        F = null != D,
                        R = F && null == D.aboutModelMessage && null == D.aboutUserMessage && null !== D.shareId,
                        L = d.has(ed.b5),
                        E = (0, P.Ro)(i);
                    void 0 === E && (E = r);
                    var A = E.tags.filter(function(e) {
                            return sQ.includes(e)
                        }).map(function(e) {
                            return s0(e)
                        }),
                        q = rV();
                    if (q.length > 0) {
                        var U = q.map(function(e, t) {
                            return (0, y.jsx)(rC.Z, {
                                url: e.manifest.logo_url,
                                name: e.manifest.name_for_human,
                                size: 16
                            }, t)
                        });
                        a = (0, y.jsxs)(y.Fragment, {
                            children: [(0, y.jsx)("div", {
                                children: (0, y.jsx)(C.Z, (0, v._)({}, lt.enabledPlugins))
                            }), U]
                        })
                    }
                    var O = (0, w.useRouter)(),
                        z = l && (null === (t = O.query) || void 0 === t ? void 0 : null === (n = t.shareParams) || void 0 === n ? void 0 : n[1]) === "moderate",
                        W = (0, N.tN)(function(e) {
                            return e.activeModals.has(N.B.DownloadMessages)
                        }),
                        H = P.tQ.getThreadCurrentLeafId(i),
                        Q = (0, P.u9)(i, H),
                        V = (0, k.useCallback)(function() {
                            L && (0, tJ.Ub)(i, Q)
                        }, [i, L, Q]);
                    return (0, y.jsxs)(y.Fragment, {
                        children: [L && (0, y.jsx)(eh.Z, {
                            type: "success",
                            isOpen: W,
                            onClose: function() {
                                N.vm.closeModal(N.B.DownloadMessages)
                            },
                            closeButton: (0, y.jsx)(em.ZP.CloseButton, {
                                onClose: function() {
                                    N.vm.closeModal(N.B.DownloadMessages)
                                }
                            }),
                            primaryButton: (0, y.jsx)(em.ZP.Button, {
                                onClick: V,
                                children: (0, y.jsx)(C.Z, (0, v._)({}, lt.downloadButton))
                            }),
                            title: o.formatMessage(lt.downloadChatDebugInfo),
                            secondaryButton: (0, y.jsx)(em.ZP.Button, {
                                onClick: function() {
                                    N.vm.closeModal(N.B.DownloadMessages)
                                },
                                children: (0, y.jsx)(C.Z, (0, v._)({}, lt.cancelButton))
                            })
                        }), (0, y.jsx)(er.E.header, {
                            animate: c ? void 0 : {
                                top: c ? 0 : "-90px",
                                transition: {
                                    duration: .2,
                                    ease: "easeIn"
                                }
                            },
                            style: {
                                boxShadow: !x && c ? "0px 4px 24px 0px #0000000D" : void 0,
                                transform: c ? I : void 0
                            },
                            className: "sticky top-0 z-[9] w-full",
                            children: (0, y.jsxs)("div", {
                                className: "relative z-20 flex min-h-[60px] flex-wrap items-center justify-between gap-3 border-b border-black/10 bg-white p-2 text-gray-500 dark:border-gray-900/50 dark:bg-gray-800 dark:text-gray-300",
                                onClick: function(e) {
                                    L && !l && 3 === e.detail && N.vm.openModal(N.B.DownloadMessages)
                                },
                                children: [(0, y.jsx)("div", {
                                    className: "hidden flex-shrink flex-row sm:flex",
                                    children: g.map(function(e, t) {
                                        return (0, y.jsx)(o5.h, {}, t)
                                    })
                                }), (0, y.jsxs)("div", {
                                    className: "flex flex-1 flex-grow items-center gap-1 p-1 text-gray-600 dark:text-gray-200 sm:justify-center sm:p-0",
                                    children: [l && (0, y.jsxs)("div", {
                                        className: "flex items-center justify-center gap-1",
                                        children: [(0, y.jsx)("span", {
                                            children: (0, y.jsx)(C.Z, (0, v._)({}, lt.sharedChat))
                                        }), (0, y.jsx)("span", {
                                            className: "px-1",
                                            children: "•"
                                        })]
                                    }), !l && void 0 !== s && (0, y.jsx)(ep.ZP, {
                                        icon: s
                                    }), (0, y.jsx)("span", {
                                        children: r.title
                                    }), A, a ? (0, y.jsxs)("div", {
                                        className: "flex items-center justify-center gap-1",
                                        children: [(0, y.jsx)("span", {
                                            className: "px-1",
                                            children: "•"
                                        }), a]
                                    }) : null, z && (0, y.jsxs)("div", {
                                        className: "flex items-center justify-center gap-1",
                                        children: [(0, y.jsx)("span", {
                                            className: "px-1",
                                            children: "•"
                                        }), (0, y.jsx)("strong", {
                                            children: (0, y.jsx)(C.Z, (0, v._)({}, lt.moderationView))
                                        })]
                                    }), !l && F && !R && (0, y.jsx)("div", {
                                        className: "",
                                        children: (0, y.jsx)(le, {
                                            clientThreadId: i
                                        })
                                    })]
                                }), (0, y.jsx)("div", {
                                    className: "flex flex-shrink flex-row",
                                    children: g.map(function(e, t) {
                                        return (0, y.jsx)("span", {
                                            children: e
                                        }, t)
                                    })
                                })]
                            })
                        })]
                    })
                },
                le = function(e) {
                    var t = e.clientThreadId,
                        n = (0, P.Qi)(t),
                        a = (0, k.useMemo)(function() {
                            if (null == n) return null;
                            var e = n.aboutUserMessage,
                                t = n.aboutModelMessage,
                                a = n.fallback;
                            return null != e && null != t ? (0, y.jsxs)("div", {
                                className: "flex flex-col gap-7",
                                children: [null !== e && "" !== e && (0, y.jsxs)("div", {
                                    className: "flex flex-col gap-3",
                                    children: [(0, y.jsx)("div", {
                                        className: "font-medium text-gray-600 dark:text-gray-200",
                                        children: (0, y.jsx)(C.Z, (0, v._)({}, tp.sY.aboutYouHelpText))
                                    }), (0, y.jsx)("div", {
                                        className: "flex flex-row gap-1 text-gray-500",
                                        children: e
                                    })]
                                }), null !== t && "" !== t && (0, y.jsxs)("div", {
                                    className: "flex flex-col gap-3",
                                    children: [(0, y.jsx)("div", {
                                        className: "font-medium text-gray-600 dark:text-gray-200",
                                        children: (0, y.jsx)(C.Z, (0, v._)({}, tp.sY.modelHelpText))
                                    }), (0, y.jsx)("div", {
                                        className: "flex flex-row gap-1 text-gray-500",
                                        children: t
                                    })]
                                })]
                            }) : null != a ? a : null
                        }, [n]);
                    return null === n ? null : (0, y.jsx)(y.Fragment, {
                        children: (0, y.jsx)(o4, {
                            contentClassName: "relative max-h-[450px] min-w-[300px] max-w-[350px] animate-slideDownAndFade select-none overflow-y-auto whitespace-pre-line rounded-xl border-gray-100 bg-white p-4 text-sm text-gray-600 shadow-xs dark:bg-gray-900 dark:text-white sm:max-w-lg md:max-w-xl",
                            side: "bottom",
                            sideOffset: 8,
                            content: (0, y.jsxs)(y.Fragment, {
                                children: [(0, y.jsx)("div", {
                                    className: "mb-5 mt-1 border-b border-black/10 pb-5 dark:border-white/10",
                                    children: (0, y.jsx)("div", {
                                        className: "flex flex-row items-center gap-2 text-gray-500",
                                        children: (0, y.jsx)(C.Z, (0, v._)({}, lt.chatPreferencesNote))
                                    })
                                }), a]
                            }),
                            children: (0, y.jsxs)("div", {
                                className: "cursor-pointer pt-0.5",
                                children: [(0, y.jsx)(ep.HV, {
                                    className: "h-4 w-4 flex-shrink-0 sm:mb-0.5 sm:h-5 sm:w-5"
                                }), (0, y.jsx)(eO.T, {
                                    children: (0, y.jsx)(C.Z, (0, v._)({}, lt.chatPreferencesInfoLabel))
                                })]
                            })
                        })
                    })
                },
                lt = (0, _.vU)({
                    chatPreferencesInfoLabel: {
                        id: "ThreadSettings.chatPreferencesInfoLabel",
                        defaultMessage: "Custom instructions details",
                        description: "Label for the Custom instructions info icon"
                    },
                    chatPreferencesNote: {
                        id: "ThreadSettings.chatPreferencesNote",
                        defaultMessage: "Custom instructions are on and can only be changed at the beginning of the chat.",
                        description: "Label in the popover for Custom Instructions"
                    },
                    openDebug: {
                        id: "ThreadSettings.openDebug",
                        defaultMessage: "Open debug sidebar",
                        description: "Open debug sidebar button tooltip"
                    },
                    shareChat: {
                        id: "ThreadSettings.shareChat",
                        defaultMessage: "Share chat",
                        description: "Open share modal button tooltip"
                    },
                    sharedChat: {
                        id: "ThreadHeader.sharedChat",
                        defaultMessage: "Shared Chat",
                        description: "Label for shared chat status"
                    },
                    enabledPlugins: {
                        id: "ThreadHeader.enabledPlugins",
                        defaultMessage: "Enabled plugins:",
                        description: "Label for enabled plugins in the header"
                    },
                    moderationView: {
                        id: "ThreadHeader.moderationView",
                        defaultMessage: "MODERATION VIEW",
                        description: "Label for moderation view status"
                    },
                    downloadChatDebugInfo: {
                        id: "ThreadHeader.downloadChatDebugInfo",
                        defaultMessage: "Download chat debug info",
                        description: "Title for the Download chat debug info modal"
                    },
                    downloadButton: {
                        id: "ThreadHeader.downloadButton",
                        defaultMessage: "Download",
                        description: "Download button text in the Download chat debug info modal"
                    },
                    cancelButton: {
                        id: "ThreadHeader.cancelButton",
                        defaultMessage: "Cancel",
                        description: "Cancel button text in the Download chat debug info modal"
                    }
                }),
                ln = n(16592);

            function la() {
                var e = (0, G._)(["\n  flex flex-col text-sm dark:bg-gray-800\n  ", "\n"]);
                return la = function() {
                    return e
                }, e
            }

            function lr() {
                var e = (0, G._)(["h-32 md:h-48 flex-shrink-0"]);
                return lr = function() {
                    return e
                }, e
            }

            function li() {
                var e = (0, G._)(["cursor-pointer absolute right-6 bottom-[124px] md:bottom-[180px] lg:bottom-[120px] z-10 rounded-full border border-gray-200 bg-gray-50 text-gray-600 dark:border-white/10 dark:bg-white/10 dark:text-gray-200"]);
                return li = function() {
                    return e
                }, e
            }
            var ls = (0, _.vU)({
                codeInterpreterSupportDisclaimer: {
                    id: "sharedConversation.codeInterpreterSupportDisclaimer",
                    defaultMessage: "This chat contains files or images produced by Code Interpreter which are not yet visible in Shared Chats.",
                    description: "Disclaimer about our lack of support for Code Interpreter inline images and file downloads with shared links"
                },
                userContextCustomProfileDisclaimer: {
                    id: "sharedConversation.userContextCustomProfileDisclaimer",
                    defaultMessage: "This conversation may reflect the link creator’s Custom Instructions, which aren’t shared and can meaningfully change how the model responds.",
                    description: "Disclaimer about our lack of support for custom profiles with shared links"
                },
                userContextCustomProfileAndCodeInterpreterSupportDisclaimer: {
                    id: "sharedConversation.userContextCustomProfileAndCodeInterpreterSupportDisclaimer",
                    defaultMessage: "This conversation may reflect the link creator’s Custom Instructions, which aren’t shared and can meaningfully change how the model responds. The chat contains files or images produced by Code Interpreter which are not yet visible in Shared Chats.",
                    description: "Disclaimer about our lack of support for Code Interpreter inline images and file downloads with shared links and not sharing custom profile data"
                }
            });

            function lo(e) {
                var t = e.clientThreadId,
                    n = (0, P.qA)(t),
                    a = (0, P.je)(t),
                    r = (0, P.qN)(function(e) {
                        return P.iN.getThreadCreateTime(t, e)
                    }),
                    i = (0, P.oq)(t),
                    s = (0, P.JI)(t, i),
                    o = (0, k.useMemo)(function() {
                        return sc(s)
                    }, [s]),
                    l = (0, P.aS)(t);
                return (0, y.jsxs)("div", {
                    className: "mb-1 border-b border-gray-100 pt-3 sm:mb-2 sm:pb-6 sm:pt-8",
                    children: [(0, y.jsx)("h1", {
                        className: "max-w-md text-3xl font-semibold leading-tight text-gray-700 dark:text-gray-100 sm:text-4xl",
                        children: n
                    }), (null != a || null != r) && (0, y.jsxs)("div", {
                        className: "pt-3 text-base text-gray-400 sm:pt-4",
                        children: [null != a && (0, y.jsx)("span", {
                            children: a
                        }), null != a && null != r && (0, y.jsx)("span", {
                            className: "px-2",
                            children: "•"
                        }), null != r && (0, y.jsx)(_.Ji, {
                            value: r,
                            month: "long",
                            year: "numeric",
                            day: "numeric"
                        })]
                    }), (0, y.jsx)(ll, {
                        shouldShowCodeInterpreterDisclaimer: o,
                        shouldShowUserContextCustomProfileDisclaimer: l
                    })]
                })
            }
            var ll = function(e) {
                var t = e.shouldShowCodeInterpreterDisclaimer,
                    n = e.shouldShowUserContextCustomProfileDisclaimer;
                return t && n ? (0, y.jsx)("div", {
                    className: "mt-4",
                    children: (0, y.jsx)(su, {
                        icon: M.H33,
                        children: (0, y.jsx)(C.Z, (0, v._)({}, ls.userContextCustomProfileAndCodeInterpreterSupportDisclaimer))
                    })
                }) : (0, y.jsxs)(y.Fragment, {
                    children: [t && (0, y.jsx)("div", {
                        className: "mt-4",
                        children: (0, y.jsx)(su, {
                            icon: M.H33,
                            color: "gray",
                            children: (0, y.jsx)(C.Z, (0, v._)({}, ls.codeInterpreterSupportDisclaimer))
                        })
                    }), n && (0, y.jsx)("div", {
                        className: "mt-4",
                        children: (0, y.jsx)(su, {
                            icon: M.H33,
                            color: "gray",
                            children: (0, y.jsx)(C.Z, (0, v._)({}, ls.userContextCustomProfileDisclaimer))
                        })
                    })]
                })
            };

            function lc(e) {
                var t, n = e.onChangeItemInView,
                    a = e.onRequestMoreCompletions,
                    r = e.onUpdateNode,
                    i = e.onChangeRating,
                    s = e.onDeleteNode,
                    o = e.onRequestCompletion,
                    l = e.clientThreadId,
                    c = e.conversationLeafId,
                    u = e.isNewThread,
                    d = e.currentThreadModel,
                    f = e.inlineEmbeddedDisplay,
                    g = e.initiallyHighlightedMessageId,
                    m = e.promptTextareaRef,
                    h = null !== (0, k.useContext)(Z.gB),
                    p = (0, rr.useScrollToBottom)(),
                    x = (0, B._)((0, rr.useSticky)(), 1)[0],
                    v = (0, S.hz)(),
                    b = (0, t9.Fl)().isBetaFeaturesUiEnabled,
                    j = (0, P.Kt)(l),
                    w = (0, S.$T)(),
                    C = (0, iw.iu)(),
                    _ = (0, iw.ZL)(),
                    T = (0, iw.Xy)(d, l),
                    I = (0, N.tN)(function(e) {
                        return e.isDesktopNavCollapsed
                    }),
                    D = v.has("model_switcher") && C.size > 1,
                    F = v.has("model_switcher_upsell"),
                    R = u && !w && !_ && (v.has(ed.Zz) || !D),
                    L = (0, B._)((0, k.useState)(!1), 2),
                    E = L[0],
                    A = L[1],
                    q = (0, ln.Ri)(T.id),
                    U = (0, P.U0)(l, c);
                (0, k.useEffect)(function() {
                    if (j) {
                        var e = setTimeout(function() {
                            A(!0)
                        }, 1e3);
                        return function() {
                            clearTimeout(e)
                        }
                    }
                    A(!1)
                }, [j]);
                var O = u && !w,
                    z = v.has(ed.FZ),
                    W = !b && T.tags.includes(iw.S.GPT_4) ? "black" : null !== (t = null == q ? void 0 : q.backgroundColor) && void 0 !== t ? t : void 0,
                    H = (0, e7._)(Array(U).keys()).map(function(e) {
                        return (0, y.jsx)(iB, {
                            isFinalTurn: e === U - 1,
                            turnIndex: e,
                            clientThreadId: l,
                            conversationLeafId: c,
                            onChangeItemInView: n,
                            onChangeRating: i,
                            onRequestMoreCompletions: a,
                            onDeleteNode: s,
                            onRequestCompletion: o,
                            onUpdateNode: r,
                            currentModelId: T.id,
                            showInlineEmbeddedDisplay: f,
                            initiallyHighlightedMessageId: g,
                            avatarColor: W
                        }, e)
                    });
                return (0, y.jsxs)(lu, {
                    $shouldShowThreadSettings: O,
                    children: [(0, y.jsx)(o0, {
                        title: "ChatGPT",
                        showSpinner: E,
                        shouldShowThreadSettings: O,
                        shouldShowPlusUpsell: F,
                        currentModelId: T.id,
                        promptTextareaRef: m,
                        shouldShowPlaceholder: R
                    }), !u && (h || !w) && !f && (0, y.jsx)(o9, {
                        icon: b ? null == q ? void 0 : q.icon : void 0,
                        currentModelConfig: T,
                        clientThreadId: l
                    }), z ? H.length > 0 && (0, y.jsx)("div", {
                        className: (0, J.default)("flex flex-col items-center", I ? "sm:px-14" : "sm:px-4"),
                        children: (0, y.jsxs)("div", {
                            className: "w-full max-w-[44rem] pt-4",
                            children: [h && !f && (0, y.jsx)(lo, {
                                clientThreadId: l
                            }), H]
                        })
                    }) : (0, y.jsxs)(y.Fragment, {
                        children: [h && !f && (0, y.jsx)("div", {
                            className: "mx-auto w-full p-4 md:max-w-2xl lg:max-w-xl lg:px-0 xl:max-w-3xl",
                            children: (0, y.jsx)(lo, {
                                clientThreadId: l
                            })
                        }), H]
                    }), !f && !R && (0, y.jsx)(ld, {}), !x && !f && (0, y.jsx)(lf, {
                        onClick: p,
                        children: (0, y.jsx)(ep.ZP, {
                            icon: M.tv1,
                            className: "m-1"
                        })
                    })]
                })
            }
            var lu = el.Z.div(la(), function(e) {
                    return e.$shouldShowThreadSettings && "h-full"
                }),
                ld = el.Z.div(lr()),
                lf = el.Z.button(li());

            function lg() {
                var e = (0, G._)(["relative h-full w-full transition-width flex flex-col overflow-hidden items-stretch"]);
                return lg = function() {
                    return e
                }, e
            }

            function lm() {
                var e = (0, G._)(["grow flex-1 overflow-hidden"]);
                return lm = function() {
                    return e
                }, e
            }

            function lh() {
                var e = (0, G._)(["w-full mb-4 shadow-[0_2px_12px_0px_rgba(0,0,0,0.08)] dark:bg-gray-800/90 rounded-lg border border-gray-100 dark:border-gray-700 overflow-hidden bg-gray-50"]);
                return lh = function() {
                    return e
                }, e
            }

            function lp() {
                var e = (0, G._)(["flex p-4 bg-white dark:bg-gray-800/90 border-t border-gray-100 dark:border-gray-700 rounded-b-lg w-full h-full\n", "\n"]);
                return lp = function() {
                    return e
                }, e
            }

            function lx() {
                var e = (0, G._)(["flex w-full items-center justify-left gap-2 min-h-[1.5rem]"]);
                return lx = function() {
                    return e
                }, e
            }

            function lv() {
                var e = (0, G._)(["border-none focus:ring-gray-200 dark:focus:ring-gray-600 bg-transparent py-0.5 -my-0.5 pl-1 -ml-1 w-full"]);
                return lv = function() {
                    return e
                }, e
            }

            function lb() {
                var e = (0, G._)(["flex-none h-full mt-auto mb-auto"]);
                return lb = function() {
                    return e
                }, e
            }
            var ly = (0, _.vU)({
                sharingModalTitle: {
                    id: "thread.sharingModal.title",
                    defaultMessage: "Share Link to Chat",
                    description: "Title of sharing feature in the title of the sharing modal"
                },
                sharingModalDescription: {
                    id: "sharingModal.description",
                    defaultMessage: "Messages you send after creating your link won't be shared. Anyone with the URL will be able to view the shared chat.",
                    description: "Description of sharing feature in the first paragraph of the sharing modal"
                },
                existingShareDescription: {
                    id: "sharingModal.exisitingDescription",
                    defaultMessage: "You have shared this chat <existingLink>before</existingLink>. If you want to update the shared chat content, <deleteLink>delete this link</deleteLink> and create a new shared link.",
                    description: "Description in sharing modal when viewing an existing link"
                },
                sharingModalMoreInfo: {
                    id: "thread.sharingModal.moreInfo",
                    defaultMessage: "More Info",
                    description: "Link to a helpdesk article with more information about the sharing modal"
                },
                moderationBlocked: {
                    id: "sharingModal.moderationBlocked",
                    defaultMessage: "This shared link has been disabled by moderation.",
                    description: "Error message in sharing modal when shared link has been moderated."
                },
                confirmCloseWithChanges: {
                    id: "thread.sharingModal.confirmCloseWithChanges",
                    defaultMessage: "You have unsaved changes. Do you want to continue?",
                    description: "Confirmation message when closing share modal with changes"
                },
                confirmDeleteLink: {
                    id: "sharingModal.confirmDeleteLink",
                    defaultMessage: "Are you sure you want to delete the share link?",
                    description: "Confirmation message when deleting share link"
                },
                codeInterpreterSupportDisclaimer: {
                    id: "sharingModal.codeInterpreterSupportDisclaimer",
                    defaultMessage: "Recipients won’t be able to view Code Interpreter images or download files.",
                    description: "Disclaimer about our lack of support for Code Interpreter inline images and file downloads with shared links"
                },
                userContextCustomProfileDisclaimer: {
                    id: "sharingModal.userContextCustomProfileDisclaimer",
                    defaultMessage: "Your Custom Instructions won’t be shared with viewers.",
                    description: "Disclaimer about our policy to not copy over custom profile data which could have PII"
                },
                userContextCustomProfileAndCodeInterpreterSupportDisclaimer: {
                    id: "sharingModal.userContextCustomProfileAndCodeInterpreterSupportDisclaimer",
                    defaultMessage: "Recipients won’t be able to view images, download files, or custom profiles.",
                    description: "Disclaimer about our lack of support for Code Interpreter inline images and file downloads with shared links and not sharing custom profile data"
                },
                copied: {
                    id: "thread.sharingModal.copied",
                    defaultMessage: "Copied!",
                    description: "Status message after successfully copying the shared link"
                },
                copying: {
                    id: "thread.sharingModal.copying",
                    defaultMessage: "Copying...",
                    description: "Status message while copying the shared link"
                },
                updateAndCopyLink: {
                    id: "thread.sharingModal.updateAndCopyLink",
                    defaultMessage: "Update and Copy Link",
                    description: "Button text to update and copy the shared link"
                },
                shareYourName: {
                    id: "sharingModal.shareYourName",
                    defaultMessage: "Share your name",
                    description: "Button text to change sharing to show the user's name"
                },
                shareAnonymously: {
                    id: "sharingModal.shareAnonymously",
                    defaultMessage: "Share anonymously",
                    description: "Button text to change sharing to be anonymous"
                },
                deleteLink: {
                    id: "sharingModal.deleteLink",
                    defaultMessage: "Delete Link",
                    description: "Button text to delete the share link"
                },
                failedToCopyLink: {
                    id: "thread.sharingModal.failedToCopyLink",
                    defaultMessage: "Failed to copy link to clipboard",
                    description: "Error message when failing to copy link to clipboard"
                },
                copyLink: {
                    id: "thread.sharingModal.copyLink",
                    defaultMessage: "Copy Link",
                    description: "Button text to copy the shared link"
                },
                copiedSharedConversationURL: {
                    id: "thread.sharingModal.copiedSharedConversationURL",
                    defaultMessage: "Copied shared conversation URL to clipboard!",
                    description: "Success message when shared conversation URL is copied"
                },
                failedToDeleteSharedLink: {
                    id: "thread.sharingModal.failedToDeleteSharedLink",
                    defaultMessage: "Failed to delete shared link",
                    description: "Error message when failing to delete shared link"
                }
            });

            function lj(e) {
                var t = e.serverThreadId,
                    n = (0, P.oq)(t),
                    a = (0, B._)((0, k.useState)(function() {
                        return (0, O.Z)(function(e, t) {
                            return {
                                title: void 0,
                                highlightedMessageId: void 0,
                                initiallyHighlightedMessageId: void 0,
                                currentNodeId: void 0,
                                shareLinkId: void 0,
                                shareLinkUrl: void 0,
                                isPublic: !1,
                                isDeleted: !1,
                                isAnonymous: !0,
                                linkAlreadyExisted: !1,
                                linkError: void 0,
                                moderationState: void 0
                            }
                        })
                    }), 1)[0],
                    r = !V() && "root" !== n,
                    i = (0, k.useRef)(!1);
                return (0, k.useEffect)(function() {
                    if (r && !i.current) {
                        i.current = !0;
                        var e = P.tQ.getThreadCurrentLeafId(t),
                            n = P.tQ.getTree(t).getMessageId(e);
                        T.ZP.createShareLink({
                            current_node_id: n,
                            conversation_id: t,
                            is_anonymous: !0
                        }).then(function(e) {
                            a.setState({
                                shareLinkId: e.share_id,
                                shareLinkUrl: e.share_url,
                                isPublic: e.is_public,
                                isDeleted: !e.is_visible,
                                title: e.title,
                                highlightedMessageId: e.highlighted_message_id,
                                initiallyHighlightedMessageId: e.highlighted_message_id,
                                currentNodeId: e.current_node_id,
                                linkAlreadyExisted: e.already_exists,
                                isAnonymous: e.is_anonymous,
                                moderationState: e.moderation_state
                            })
                        }).catch(function(e) {
                            e instanceof sl.Q0 && "string" == typeof e.message ? a.setState({
                                linkError: e.message
                            }) : (ti.m.danger("Failed to copy link to clipboard - could not create link"), N.vm.closeSharingModal())
                        })
                    }
                }, [r]), (0, y.jsx)(ss.Provider, {
                    value: a,
                    children: (0, y.jsx)(lk, (0, v._)({}, e))
                })
            }

            function lw(e) {
                return !0 === e.has_been_auto_blocked || !0 === e.has_been_auto_moderated || !0 === e.has_been_blocked
            }

            function lk(e) {
                var t, n, a, r, i, s = e.serverThreadId,
                    o = e.currentThreadModel,
                    l = function() {
                        (!X || window.confirm(c.formatMessage(ly.confirmCloseWithChanges))) && N.vm.closeSharingModal()
                    },
                    c = (0, eo.Z)(),
                    u = (0, k.useRef)(null),
                    d = (0, B._)((0, k.useState)(!1), 2),
                    f = d[0],
                    g = d[1],
                    m = (0, B._)((0, k.useState)(!1), 2),
                    h = m[0],
                    p = m[1],
                    x = (0, B._)((0, k.useState)(!1), 2),
                    b = x[0],
                    j = x[1],
                    w = (0, k.useContext)(ss),
                    S = so(function(e) {
                        return e.title
                    }),
                    I = so(function(e) {
                        return e.shareLinkId
                    }),
                    D = so(function(e) {
                        return e.shareLinkUrl
                    }),
                    F = so(function(e) {
                        return e.isAnonymous
                    }),
                    R = so(function(e) {
                        return e.initiallyHighlightedMessageId
                    }),
                    L = so(function(e) {
                        return e.currentNodeId
                    }),
                    E = so(function(e) {
                        return e.isPublic
                    }),
                    A = so(function(e) {
                        return e.linkAlreadyExisted
                    }) && E,
                    q = so(function(e) {
                        return e.linkError
                    }),
                    O = so(function(e) {
                        return e.moderationState
                    }),
                    z = null != O && lw(O),
                    W = (0, P.oq)(s),
                    H = (0, k.useRef)(),
                    Q = (0, k.useRef)();
                (0, k.useEffect)(function() {
                    A && (H.current = S, Q.current = F)
                }, [A]);
                var V = (0, eY.kP)().session,
                    $ = (0, P.JI)(s, null != L ? L : W),
                    G = (0, k.useMemo)(function() {
                        return sc($)
                    }, [$]),
                    Y = (0, P.aS)(s),
                    K = (t = (0, eQ._)(function(e, t) {
                        var n, a, r, i, s, o, l;
                        return (0, eV.Jh)(this, function(u) {
                            switch (u.label) {
                                case 0:
                                    p(!0), a = (n = w.getState()).highlightedMessageId, r = n.title, i = n.isDeleted, s = n.isAnonymous;
                                    try {
                                        (0, az.S)(t)
                                    } catch (e) {
                                        return ti.m.warning(c.formatMessage(ly.failedToCopyLink)), p(!1), [2]
                                    }
                                    u.label = 1;
                                case 1:
                                    return u.trys.push([1, 3, 4, 5]), [4, T.ZP.updateShareLink({
                                        share_id: e,
                                        highlighted_message_id: a,
                                        title: null != r ? r : void 0,
                                        is_public: !i,
                                        is_visible: !i,
                                        is_anonymous: s
                                    })];
                                case 2:
                                    if (lw(o = u.sent().moderation_state)) return w.setState({
                                        moderationState: o
                                    }), [2];
                                    return w.setState({
                                        isPublic: !0,
                                        moderationState: o
                                    }), j(!0), setTimeout(function() {
                                        N.vm.closeSharingModal(), ti.m.success(c.formatMessage(ly.copiedSharedConversationURL))
                                    }, 500), [3, 5];
                                case 3:
                                    return (l = u.sent()) instanceof sl.Q0 && "string" == typeof l.message && w.setState({
                                        linkError: l.message
                                    }), [3, 5];
                                case 4:
                                    return p(!1), [7];
                                case 5:
                                    return [2]
                            }
                        })
                    }), function(e, n) {
                        return t.apply(this, arguments)
                    }),
                    X = A && (S !== H.current || F !== Q.current),
                    ee = (0, y.jsxs)(em.ZP.Button, {
                        onClick: function() {
                            return K(I, D)
                        },
                        color: "primary",
                        disabled: h || b || null == I || null == D || null != q || z,
                        children: [b ? (0, y.jsx)(ep.ZP, {
                            icon: M.LSm
                        }) : h ? (0, y.jsx)(ex.Z, {}) : (0, y.jsx)(ep.ZP, {
                            icon: M.XKb
                        }), b ? (0, y.jsx)(C.Z, (0, v._)({}, ly.copied)) : h ? (0, y.jsx)(C.Z, (0, v._)({}, ly.copying)) : X ? (0, y.jsx)(C.Z, (0, v._)({}, ly.updateAndCopyLink)) : (0, y.jsx)(C.Z, (0, v._)({}, ly.copyLink))]
                    }),
                    et = (0, k.useCallback)(function(e) {
                        var t;
                        null == e || e.preventDefault(), w.setState({
                            title: null === (t = u.current) || void 0 === t ? void 0 : t.value
                        }), g(!1)
                    }, [w]),
                    en = (0, k.useCallback)(function(e) {
                        "Enter" === e.key && et()
                    }, [et]),
                    ea = (n = (0, eQ._)(function() {
                        return (0, eV.Jh)(this, function(e) {
                            switch (e.label) {
                                case 0:
                                    return [4, T.ZP.deleteShareLink({
                                        share_id: w.getState().shareLinkId
                                    }).catch(function(e) {
                                        ti.m.danger(c.formatMessage(ly.failedToDeleteSharedLink))
                                    }).then(function() {
                                        N.vm.closeSharingModal()
                                    })];
                                case 1:
                                    return e.sent(), [2]
                            }
                        })
                    }), function() {
                        return n.apply(this, arguments)
                    }),
                    er = (a = (0, eQ._)(function() {
                        return (0, eV.Jh)(this, function(e) {
                            return w.setState({
                                isAnonymous: !0
                            }), P.qN.setState(function(e) {
                                e.threads[s].initialThreadData.authorName = void 0
                            }), [2]
                        })
                    }), function() {
                        return a.apply(this, arguments)
                    }),
                    ei = (r = (0, eQ._)(function() {
                        return (0, eV.Jh)(this, function(e) {
                            return w.setState({
                                isAnonymous: !1
                            }), P.qN.setState(function(e) {
                                var t;
                                e.threads[s].initialThreadData.authorName = null == V ? void 0 : null === (t = V.user) || void 0 === t ? void 0 : t.name
                            }), [2]
                        })
                    }), function() {
                        return r.apply(this, arguments)
                    }),
                    el = (0, y.jsxs)(lP, {
                        $active: f,
                        children: [(0, y.jsxs)("div", {
                            className: "flex-1 pr-1",
                            children: [void 0 !== S ? f ? (0, y.jsx)(lS, {
                                ref: u,
                                type: "text",
                                defaultValue: null != S ? S : "",
                                autoFocus: !0,
                                onKeyDown: en,
                                onBlur: et
                            }) : (0, y.jsxs)(lN, {
                                onDoubleClick: function() {
                                    return g(!0)
                                },
                                children: [S, f || null == S || A ? null : (0, y.jsx)("button", {
                                    onClick: function() {
                                        return g(!0)
                                    },
                                    className: "text-gray-500",
                                    children: (0, y.jsx)(ep.ZP, {
                                        icon: M.Nte,
                                        size: "small"
                                    })
                                })]
                            }) : (0, y.jsx)("div", {
                                className: "h-6"
                            }), (0, y.jsxs)("div", {
                                className: "mt-1 text-gray-500",
                                children: [!F && (0, y.jsx)("span", {
                                    children: "".concat(null == V ? void 0 : null === (i = V.user) || void 0 === i ? void 0 : i.name, " \xb7 ")
                                }), (0, y.jsx)(_.Ji, {
                                    value: new Date,
                                    month: "long",
                                    day: "numeric",
                                    year: "numeric"
                                })]
                            })]
                        }), (0, y.jsx)(lZ, {
                            children: (0, y.jsxs)(tj.fC, {
                                children: [(0, y.jsx)(tj.xz, {
                                    asChild: !0,
                                    children: (0, y.jsx)(eg.z, {
                                        color: "neutral",
                                        className: "mb-auto mt-auto",
                                        children: (0, y.jsx)(si.JEI, {})
                                    })
                                }), (0, y.jsx)(tj.h_, {
                                    children: (0, y.jsxs)(tj.VY, {
                                        className: "PopoverContent rounded-sm bg-white p-2 pb-0.5 shadow-xl dark:bg-gray-800/90",
                                        side: "top",
                                        align: "end",
                                        children: [F && (0, y.jsx)(eg.z, {
                                            color: "neutral",
                                            className: "mb-2 flex w-full border-0",
                                            onClick: ei,
                                            children: (0, y.jsxs)("div", {
                                                className: "flex w-full items-start",
                                                children: [(0, y.jsx)(ep.ZP, {
                                                    icon: M.fzv,
                                                    className: "float-left mb-auto mr-4 mt-auto"
                                                }), (0, y.jsx)("div", {
                                                    children: (0, y.jsx)(C.Z, (0, v._)({}, ly.shareYourName))
                                                })]
                                            })
                                        }), !F && (0, y.jsx)(eg.z, {
                                            color: "neutral",
                                            className: "mb-2 flex w-full border-0",
                                            onClick: er,
                                            children: (0, y.jsxs)("div", {
                                                className: "flex w-full items-start",
                                                children: [(0, y.jsx)(ep.ZP, {
                                                    icon: M.fzv,
                                                    className: "float-left mb-auto mr-4 mt-auto"
                                                }), (0, y.jsx)("div", {
                                                    children: (0, y.jsx)(C.Z, (0, v._)({}, ly.shareAnonymously))
                                                })]
                                            })
                                        }), A && (0, y.jsx)(eg.z, {
                                            color: "neutral",
                                            className: "mb-2 flex w-full border-0",
                                            onClick: ea,
                                            children: (0, y.jsxs)("div", {
                                                className: "flex w-full items-start",
                                                children: [(0, y.jsx)(ep.ZP, {
                                                    icon: M.Ybf,
                                                    className: "float-left mb-auto mr-4 mt-auto"
                                                }), (0, y.jsx)("div", {
                                                    children: (0, y.jsx)(C.Z, (0, v._)({}, ly.deleteLink))
                                                })]
                                            })
                                        })]
                                    })
                                })]
                            })
                        })]
                    }),
                    ec = q;
                return null == ec && ((null == O ? void 0 : O.has_been_auto_blocked) || (null == O ? void 0 : O.has_been_auto_moderated) || (null == O ? void 0 : O.has_been_blocked)) && (ec = (0, y.jsx)(C.Z, (0, v._)({}, ly.moderationBlocked))), (0, y.jsxs)(eh.Z, {
                    isOpen: !0,
                    onClose: function() {
                        l()
                    },
                    size: "custom",
                    className: "max-w-[550px]",
                    type: "success",
                    title: c.formatMessage(ly.sharingModalTitle),
                    closeButton: (0, y.jsx)(em.ZP.CloseButton, {
                        onClose: function() {
                            l()
                        }
                    }),
                    children: [null != ec && (0, y.jsx)("div", {
                        className: "mb-4 rounded-md bg-red-500 p-4 text-white",
                        children: ec
                    }), (0, y.jsx)("div", {
                        className: (0, J.default)("w-full"),
                        children: (0, y.jsx)("p", {
                            className: (0, J.default)("mb-6 text-gray-500"),
                            children: A ? (0, y.jsx)(C.Z, (0, U._)((0, v._)({}, ly.existingShareDescription), {
                                values: {
                                    existingLink: function(e) {
                                        return (0, y.jsx)("a", {
                                            href: D,
                                            target: "_blank",
                                            rel: "noreferrer",
                                            className: "underline",
                                            children: e
                                        })
                                    },
                                    deleteLink: function(e) {
                                        return (0, y.jsx)("a", {
                                            href: "#",
                                            onClick: function(e) {
                                                e.preventDefault(), window.confirm(c.formatMessage(ly.confirmDeleteLink)) && ea()
                                            },
                                            className: "underline",
                                            children: e
                                        })
                                    }
                                }
                            })) : (0, y.jsx)(C.Z, (0, v._)({}, ly.sharingModalDescription))
                        })
                    }), (0, y.jsx)(lM, {
                        shouldShowCodeInterpreterDisclaimer: G,
                        shouldShowUserContextCustomProfileDisclaimer: Y
                    }), (0, y.jsx)(lT, {
                        children: (0, y.jsx)("div", {
                            className: "flex h-full max-w-full flex-1 flex-col",
                            children: (0, y.jsx)(lC, {
                                children: (0, y.jsxs)(l_, {
                                    children: [(0, y.jsx)(sr.f, {
                                        ratio: 1.9,
                                        className: "overflow-auto bg-white dark:bg-gray-800",
                                        children: null != L ? (0, y.jsx)(Z.gB.Provider, {
                                            value: {
                                                serverSharedThreadId: null
                                            },
                                            children: (0, y.jsx)(lc, {
                                                onChangeItemInView: es(),
                                                onRequestMoreCompletions: es(),
                                                onUpdateNode: es(),
                                                onChangeRating: es(),
                                                onDeleteNode: es(),
                                                onRequestCompletion: es(),
                                                clientThreadId: s,
                                                conversationLeafId: L,
                                                currentThreadModel: o,
                                                inlineEmbeddedDisplay: !0,
                                                isNewThread: !1,
                                                initiallyHighlightedMessageId: R
                                            })
                                        }) : (0, y.jsx)("div", {
                                            className: "flex h-full items-center justify-center",
                                            children: (0, y.jsx)(ex.Z, {
                                                className: "text-gray-400 dark:text-gray-500"
                                            })
                                        })
                                    }), el]
                                })
                            })
                        })
                    }), (0, y.jsx)(em.ZP.Actions, {
                        isSpacedBetween: !0,
                        primaryButton: ee,
                        secondaryButton: (0, y.jsx)("div", {
                            children: (0, y.jsxs)("a", {
                                href: "https://help.openai.com/en/articles/7925741-chatgpt-shared-links-faq",
                                className: "flex items-center gap-2 text-gray-500 hover:text-gray-600 dark:hover:text-gray-400",
                                target: "_blank",
                                rel: "noreferrer",
                                children: [c.formatMessage(ly.sharingModalMoreInfo), (0, y.jsx)(ep.ZP, {
                                    icon: M.AlO
                                })]
                            })
                        })
                    })]
                })
            }
            var lM = function(e) {
                    var t = e.shouldShowCodeInterpreterDisclaimer,
                        n = e.shouldShowUserContextCustomProfileDisclaimer;
                    return t && n ? (0, y.jsx)(su, {
                        icon: M.H33,
                        children: (0, y.jsx)(C.Z, (0, v._)({}, ly.userContextCustomProfileAndCodeInterpreterSupportDisclaimer))
                    }) : (0, y.jsxs)(y.Fragment, {
                        children: [t && (0, y.jsx)(su, {
                            icon: M.H33,
                            children: (0, y.jsx)(C.Z, (0, v._)({}, ly.codeInterpreterSupportDisclaimer))
                        }), n && (0, y.jsxs)("p", {
                            className: "mb-6 flex flex-row gap-2.5 text-gray-500",
                            children: [(0, y.jsx)(ep.ZP, {
                                icon: M.H33,
                                size: "small",
                                className: "mt-1 flex-shrink-0"
                            }), (0, y.jsx)(C.Z, (0, v._)({}, ly.userContextCustomProfileDisclaimer))]
                        })]
                    })
                },
                lC = el.Z.main(lg()),
                l_ = el.Z.div(lm()),
                lT = el.Z.div(lh()),
                lP = el.Z.div(lp(), function(e) {
                    return e.$active, ""
                }),
                lN = el.Z.div(lx()),
                lS = el.Z.input(lv()),
                lZ = el.Z.div(lb());

            function lI() {
                return (lI = (0, eQ._)(function(e, t) {
                    var n, a;
                    return (0, eV.Jh)(this, function(r) {
                        switch (r.label) {
                            case 0:
                                if ((null === (n = t.metadata) || void 0 === n ? void 0 : n.client_actions) === void 0 || 0 === t.metadata.client_actions.length || 0 == (a = t.metadata.client_actions.filter(function(e) {
                                        return "browser_tool" === e.type
                                    })).length) return [2, []];
                                return [4, Promise.all(a.map(function(n) {
                                    return function(e, t, n) {
                                        return lB.apply(this, arguments)
                                    }(e, n.action, t)
                                }))];
                            case 1:
                                return [2, r.sent().flat()]
                        }
                    })
                })).apply(this, arguments)
            }
            var lD = function() {
                function e(t) {
                    (0, R._)(this, e), this.conversationId = t
                }
                var t = e.prototype;
                return t.createRequest = function(e) {
                    var t = this;
                    return new Promise(function(n, a) {
                        var r = new BroadcastChannel(Math.random().toString()),
                            i = setTimeout(function() {
                                a("Timeout"), r.close()
                            }, 6e4);
                        r.onmessage = function(e) {
                            n(e.data), clearTimeout(i), r.close()
                        };
                        var s = (0, U._)((0, v._)({
                            action: "browse",
                            id: t.conversationId
                        }, e), {
                            channel: r.name
                        });
                        window.postMessage(s, "*")
                    })
                }, t.browse = function(e) {
                    return this.createRequest({
                        url: e,
                        type: "browse"
                    })
                }, t.back = function() {
                    return this.createRequest({
                        type: "back"
                    })
                }, t.click = function(e) {
                    return this.createRequest({
                        target: e,
                        type: "click"
                    })
                }, t.scroll = function(e) {
                    return this.createRequest({
                        amount: e,
                        type: "scroll"
                    })
                }, t.quote = function(e, t) {
                    return this.createRequest({
                        quote_start: e,
                        quote_end: t,
                        type: "quote"
                    })
                }, e
            }();

            function lB() {
                return (lB = (0, eQ._)(function(e, t, n) {
                    var a, r;
                    return (0, eV.Jh)(this, function(n) {
                        var i, s;
                        switch (n.label) {
                            case 0:
                                a = new lD(e), n.label = 1;
                            case 1:
                                switch (n.trys.push([1, 14, , 15]), t.command) {
                                    case "back":
                                        return [3, 2];
                                    case "quote":
                                        return [3, 4];
                                    case "scroll":
                                        return [3, 6];
                                    case "open_url":
                                        return [3, 8];
                                    case "click":
                                        return [3, 10]
                                }
                                return [3, 12];
                            case 2:
                                return [4, a.back()];
                            case 3:
                            case 7:
                            case 9:
                            case 11:
                                return [2, [(! function(e) {
                                    for (var t in e.urls) e.text.includes("".concat(t)) || delete e.urls[t]
                                }(i = n.sent()), {
                                    id: (0, t5.Z)(),
                                    author: {
                                        role: t6.uU.Tool,
                                        name: "browser"
                                    },
                                    content: {
                                        content_type: t6.PX.TetherBrowsingDisplay,
                                        result: i.text,
                                        summary: i.title
                                    },
                                    metadata: {
                                        _cite_metadata: {
                                            citation_format: {
                                                name: "tether_og"
                                            },
                                            metadata_list: [{
                                                type: "webpage",
                                                title: i.title,
                                                url: i.url,
                                                text: i.text
                                            }]
                                        }
                                    },
                                    recipient: "all"
                                })]];
                            case 4:
                                return [4, a.quote(t.quote_start, t.quote_end)];
                            case 5:
                                return [2, [(s = n.sent(), {
                                    id: (0, t5.Z)(),
                                    author: {
                                        role: t6.uU.Tool,
                                        name: "browser"
                                    },
                                    content: {
                                        content_type: t6.PX.Text,
                                        parts: ["".concat(JSON.stringify(s))]
                                    },
                                    recipient: "all"
                                })]];
                            case 6:
                                return [4, a.scroll(t.amount)];
                            case 8:
                                return [4, a.browse(t.url)];
                            case 10:
                                return [4, a.click(t.target)];
                            case 12:
                                throw Error("Unsupported browser action type " + t);
                            case 13:
                                return [3, 15];
                            case 14:
                                return console.error(r = n.sent()), [2, [{
                                    id: (0, t5.Z)(),
                                    author: {
                                        role: t6.uU.Tool,
                                        name: "browser"
                                    },
                                    content: {
                                        content_type: t6.PX.Text,
                                        parts: ["Error making browse call: ".concat(r)]
                                    },
                                    recipient: "all"
                                }]];
                            case 15:
                                return [2]
                        }
                    })
                })).apply(this, arguments)
            }
            var lF = n(23111),
                lR = n(43744),
                lL = n(98076);

            function lE(e, t, n, a, r, i, s) {
                return lA.apply(this, arguments)
            }

            function lA() {
                return (lA = (0, eQ._)(function(e, t, n, a, r, i, s) {
                    var o, l, c;
                    return (0, eV.Jh)(this, function(u) {
                        switch (u.label) {
                            case 0:
                                if (l = null === (o = r.get(n)) || void 0 === o ? void 0 : o.tags.includes(iw.S.GPT_4), a && l && t8.Z.gatherData(), P.tQ.updateTree(e, function(e) {
                                        var n = !0,
                                            a = !1,
                                            r = void 0;
                                        try {
                                            for (var i, o = s[Symbol.iterator](); !(n = (i = o.next()).done); n = !0) {
                                                var l = i.value;
                                                e.addNode(l.id, l, t, t6.Jq.Completion, {
                                                    completionSampleFinishTime: Date.now()
                                                }), t = l.id
                                            }
                                        } catch (e) {
                                            a = !0, r = e
                                        } finally {
                                            try {
                                                n || null == o.return || o.return()
                                            } finally {
                                                if (a) throw r
                                            }
                                        }
                                    }), P.tQ.setThreadCurrentLeafId(e, t), !(a && l)) return [3, 2];
                                return [4, t8.Z.getEnforcementToken()];
                            case 1:
                                c = u.sent(), u.label = 2;
                            case 2:
                                return i({
                                    model: n,
                                    completionType: t6.Os.Next,
                                    parentNodeId: t,
                                    metadata: {},
                                    arkoseToken: null != c ? c : null
                                }), [2]
                        }
                    })
                })).apply(this, arguments)
            }
            var lq = [/\bnigger\w*/i, /\bfaggot\w*/i, /\bkike\w*/i, /\bdykes?\b/i, /\bwetbacks?\b/i, /\bchinks?\b/i, /\bgooks?\b/i, /\bpakis?\b/i, /\binjuns?\b/i, /\btrannys?\b/i, /\btrannies\b/i, /\bspicks?\b/i, /\bshemales?\b/i],
                lU = n(58268);

            function lO(e) {
                return lz.apply(this, arguments)
            }

            function lz() {
                return (lz = (0, eQ._)(function(e) {
                    var t, n;
                    return (0, eV.Jh)(this, function(a) {
                        switch (a.label) {
                            case 0:
                                return (t = (0, B._)(e.queryKey, 2))[0], n = t[1], [4, T.ZP.getThreadInterpreterState(n).then(function(e) {
                                    return 0 === e.time_remaining_ms && e.kernel_started && ti.m.warning("This code interpreter (beta) chat has timed out. You may continue the conversation, but previous files, links, and code blocks below may not work as expected.", {
                                        hasCloseButton: !0,
                                        duration: 0
                                    }), e
                                })];
                            case 1:
                                return [2, a.sent()]
                        }
                    })
                })).apply(this, arguments)
            }
            var lW = t0()(function() {
                return Promise.resolve().then(n.bind(n, 40803))
            }, {
                loadableGenerated: {
                    webpack: function() {
                        return [40803]
                    }
                },
                ssr: !1
            });

            function lH(e) {
                var t = e.children;
                return (0, y.jsx)(lW, {
                    className: "h-full dark:bg-gray-800",
                    followButtonClassName: "scroll-convo",
                    initialScrollBehavior: "auto",
                    children: t
                })
            }

            function lQ() {
                var e = (0, G._)(["grow flex-1 overflow-hidden"]);
                return lQ = function() {
                    return e
                }, e
            }

            function lV() {
                var e = (0, G._)(["absolute bottom-0 left-0 w-full border-t md:border-t-0 dark:border-white/20 md:border-transparent md:dark:border-transparent md:bg-vert-light-gradient bg-white dark:bg-gray-800 md:!bg-transparent dark:md:bg-vert-dark-gradient pt-2 md:pl-2 md:w-[calc(100%-.5rem)]"]);
                return lV = function() {
                    return e
                }, e
            }
            var l$ = t0()(function() {
                    return Promise.all([n.e(1966), n.e(1724)]).then(n.bind(n, 51724))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [51724]
                        }
                    },
                    ssr: !1
                }),
                lG = (0, _.vU)({
                    contentPolicyViolation: {
                        id: "thread.modal.restrictedTerms.title",
                        defaultMessage: "This prompt may violate our content policy.",
                        description: "Title for the restricted terms modal"
                    },
                    acknowledge: {
                        id: "thread.modal.common.acknowledge",
                        defaultMessage: "Acknowledge",
                        description: "Acknowledge button text"
                    },
                    doNotShareSensitive: {
                        id: "thread.modal.onboarding.title",
                        defaultMessage: "Do not share sensitive materials with this application",
                        description: "Title for the onboarding warning modal"
                    },
                    freeResearchPreview: {
                        id: "thread.chatgptFreeResearchPreview-aug3-23",
                        defaultMessage: "Free Research Preview. ChatGPT may produce inaccurate information about people, places, or facts. <link>ChatGPT August 3 Version</link>",
                        description: "Free Research Preview disclaimer"
                    },
                    mayProduceInaccurateInformation: {
                        id: "thread.chatgptMayProduceInaccurateInformation-aug3-23",
                        defaultMessage: "ChatGPT may produce inaccurate information about people, places, or facts. <link>ChatGPT August 3 Version</link>",
                        description: "ChatGPT disclaimer for producing inaccurate information"
                    },
                    businessDisclaimer: {
                        id: "thread.businessDisclaimer-aug3-23",
                        defaultMessage: "Your data is protected in this chat. ChatGPT may produce inaccurate information about people, places, or facts. <link>ChatGPT August 3 Version</link>",
                        description: "Business disclaimer with protected data assurance"
                    },
                    somethingWentWrong: {
                        id: "thread.modal.unrecoverableError.title",
                        defaultMessage: "Something went wrong",
                        description: "Title for the UnrecoverableErrorModal"
                    },
                    tryAgainLater: {
                        id: "thread.modal.unrecoverableError.description",
                        defaultMessage: "We're sorry, but something went wrong. Please try again later.",
                        description: "Description for the UnrecoverableErrorModal"
                    },
                    resetThread: {
                        id: "thread.modal.unrecoverableError.resetThread",
                        defaultMessage: "Reset thread",
                        description: "Reset thread button text"
                    },
                    reportModalThankYouTitle: {
                        id: "thread.modal.reportModalThankYou.title",
                        defaultMessage: "Thank you for your report!",
                        description: "Title for the post-report thank-you modal"
                    },
                    reportModalThankYouDescription: {
                        id: "thread.modal.reportModalThankYou.description",
                        defaultMessage: "Thank you for your report.",
                        description: "Description for the post-report thank-you modal"
                    },
                    reportModalThankYouDismiss: {
                        id: "thread.modal.reportModalThankYou.dismissButton",
                        defaultMessage: "Close",
                        description: "Close button for the post-report thank-you modal"
                    },
                    sharedConversationContinueConversation: {
                        id: "thread.sharedConversation.continue",
                        defaultMessage: "Continue this conversation",
                        description: "Button for shared links to allow user to continue conversation in their own history"
                    },
                    sharedConversationReportConversation: {
                        id: "thread.sharedConversation.report",
                        defaultMessage: "Report conversation",
                        description: "Button for shared links to report chat for legal, safety, or other reasons"
                    },
                    sharedConversationModerateConversation: {
                        id: "thread.sharedConversation.moderate",
                        defaultMessage: "Moderate conversation",
                        description: "Button for shared links to moderate a chat for legal, safety, or other reasons"
                    },
                    reportSharedConversation: {
                        id: "thread.reportSharedConversation",
                        defaultMessage: "Report content",
                        description: "Report shared chat footer link text"
                    },
                    termsOfUse: {
                        id: "thread.termsOfUse",
                        defaultMessage: "Terms of use",
                        description: "Terms of use footer link text"
                    },
                    privacyPolicy: {
                        id: "thread.privacyPolicy",
                        defaultMessage: "Privacy policy",
                        description: "Privacy policy footer link text"
                    },
                    helpAndFaq: {
                        id: "thread.helpAndFaq",
                        defaultMessage: "Help & FAQ",
                        description: "Help & FAQ menu item"
                    },
                    keyboardShortcutsMenu: {
                        id: "thread.keyboardShortcutsMenu",
                        defaultMessage: "Keyboard shortcuts",
                        description: "Keyboard shortcuts menu item"
                    },
                    latencyButton: {
                        id: "thread.latencyButton",
                        defaultMessage: "Latency",
                        description: "Button to open the latency menu"
                    }
                });

            function lJ(e) {
                var t = e.onClickReportSharedConversation;
                return (0, y.jsxs)("div", {
                    className: "flex justify-center gap-3 text-gray-500",
                    children: [(0, y.jsx)("button", {
                        onClick: function() {
                            t()
                        },
                        children: (0, y.jsx)(C.Z, (0, v._)({}, lG.reportSharedConversation))
                    }), (0, y.jsx)("span", {
                        children: "|"
                    }), (0, y.jsx)("a", {
                        href: "https://openai.com/policies/terms-of-use",
                        target: "_blank",
                        rel: "noreferrer",
                        children: (0, y.jsx)(C.Z, (0, v._)({}, lG.termsOfUse))
                    }), (0, y.jsx)("span", {
                        children: "|"
                    }), (0, y.jsx)("a", {
                        href: "https://openai.com/policies/privacy-policy",
                        target: "_blank",
                        rel: "noreferrer",
                        children: (0, y.jsx)(C.Z, (0, v._)({}, lG.privacyPolicy))
                    })]
                })
            }

            function lY() {
                var e = (0, S.ec)(S.F_.isBusinessWorkspace),
                    t = (0, S.WY)(),
                    n = function(e) {
                        return (0, y.jsx)("a", {
                            href: "https://help.openai.com/en/articles/6825453-chatgpt-release-notes",
                            target: "_blank",
                            rel: "noreferrer",
                            className: "underline",
                            children: e
                        })
                    };
                return e ? (0, y.jsx)("span", {
                    children: (0, y.jsx)(C.Z, (0, U._)((0, v._)({}, lG.businessDisclaimer), {
                        values: {
                            link: n
                        }
                    }))
                }) : t ? (0, y.jsx)("span", {
                    children: (0, y.jsx)(C.Z, (0, U._)((0, v._)({}, lG.mayProduceInaccurateInformation), {
                        values: {
                            link: n
                        }
                    }))
                }) : (0, y.jsx)("span", {
                    children: (0, y.jsx)(C.Z, (0, U._)((0, v._)({}, lG.freeResearchPreview), {
                        values: {
                            link: n
                        }
                    }))
                })
            }

            function lK() {
                return (0, y.jsxs)(y.Fragment, {
                    children: [(0, y.jsx)(nf, {}), (0, y.jsx)(ni, {})]
                })
            }
            var lX = function(e) {
                    var t, n, a, r, i, s, o, l, c, u, d, f, g, m, h, p, x, j, _, I, F, R, L, E, A, q, O, z, W, H, G, Y, K, X, ee, et, en, ea, er, ei, el, ef, ex, eb = e.initialThreadData,
                        ey = e.clientThreadId,
                        ej = e.handleResetThread,
                        ew = e.initiallyHighlightedMessageId,
                        ek = e.continueConversationUrl,
                        eM = null !== (0, k.useContext)(Z.gB),
                        eC = (0, eo.Z)(),
                        e_ = (0, S.hz)(),
                        eT = (0, t9.Fl)().isPluginsAvailable,
                        eP = (0, D.w$)(),
                        eN = (0, k.useContext)(Z.QL).historyDisabled,
                        eS = (0, w.useRouter)(),
                        eZ = eM && (null === (er = eS.query) || void 0 === er ? void 0 : null === (ei = er.shareParams) || void 0 === ei ? void 0 : ei[1]) === "moderate",
                        eI = (0, P.Kt)(ey),
                        eD = (0, P.oq)(ey),
                        eB = (0, P.U0)(ey, eD),
                        eF = (0, P.je)(ey),
                        eR = (0, P.Hk)(ey),
                        eL = (0, k.useContext)(Z.gt).serviceStatus,
                        eE = Q(eR),
                        eA = "root" !== eD && !eE && !(null == eL ? void 0 : eL.oof),
                        eq = (0, B._)((0, k.useState)(!1), 2),
                        eU = eq[0],
                        eO = eq[1],
                        ez = (0, B._)((0, k.useState)(!1), 2),
                        eW = ez[0],
                        e$ = ez[1],
                        eG = (0, B._)((0, k.useState)(), 2),
                        eJ = eG[0],
                        eK = eG[1],
                        eX = (0, B._)((0, k.useState)(!1), 2),
                        e0 = eX[0],
                        e1 = eX[1],
                        e2 = (0, B._)((0, k.useState)(), 2),
                        e3 = e2[0],
                        e4 = e2[1],
                        e5 = (0, B._)((0, k.useState)(), 2),
                        e8 = e5[0],
                        e7 = e5[1],
                        e6 = (0, B._)((0, k.useState)(), 2),
                        e9 = e6[0],
                        te = e6[1],
                        tt = (0, k.useRef)(null),
                        tn = (0, S.WY)(),
                        ta = (0, eH.g)(function(e) {
                            return e.flags.isUserInCanPayGroup
                        }),
                        tr = e_.has(ed.AL),
                        ti = e_.has(ed.FZ),
                        ts = (0, B._)((0, k.useState)(!1), 2),
                        to = ts[0],
                        tl = ts[1],
                        tc = (s = (i = {
                            exempt: !1,
                            onRestrictedTermFound: (0, k.useCallback)(function(e) {
                                tl(!0), ec.o.logEvent(eu.a.promptUsedRestrictedWords, {
                                    threadId: P.tQ.getServerThreadId(ey),
                                    content: e
                                })
                            }, [ey])
                        }).exempt, o = i.onRestrictedTermFound, c = (l = (0, B._)((0, k.useState)(!1), 2))[0], u = l[1], {
                            hasRestrictedTerms: c,
                            checkRestrictedTerms: (0, k.useCallback)(function(e) {
                                var t;
                                return (lq.some(function(n) {
                                    var a = n.exec(e);
                                    return a && (t = a[0]), a
                                }), !s && t) ? (u(!0), null == o || o(t), !0) : (u(!1), !1)
                            }, [s, o])
                        }),
                        tu = tc.hasRestrictedTerms,
                        td = tc.checkRestrictedTerms,
                        tf = (0, B._)((0, k.useState)(!0), 2),
                        tg = tf[0],
                        th = tf[1],
                        tp = (0, B._)((0, k.useState)(!1), 2),
                        tx = tp[0],
                        tv = tp[1],
                        tb = (0, iw.iu)(),
                        tj = (0, i3.p0)(),
                        tw = (0, iw.Gg)(tb, !0),
                        tk = null !== (ex = (0, iw.Bv)(eb.lastModelUsed, ey)) && void 0 !== ex ? ex : tw,
                        tM = (0, iw.B9)(),
                        tC = void 0 !== tk ? tM.get(tk) : void 0,
                        t_ = (0, ev.iF)(),
                        tT = (0, k.useCallback)(function() {
                            t_(), ec.o.logEvent(eu.a.newThread)
                        }, [t_]),
                        tP = P.tQ.getTitle(ey),
                        tN = (0, k.useCallback)(function(e, t) {
                            var n = null != t ? t : "";
                            eN || "" === n || T.ZP.generateTitle(n, e, tk).then(function(e) {
                                var a = e.title;
                                P.tQ.setTitle(n, a, P._L.Generated), t_(), ec.o.logEvent(eu.a.renameThread, {
                                    threadId: t,
                                    content: a,
                                    model: tk
                                })
                            }).catch(function(e) {
                                console.error(e)
                            })
                        }, [eN, tk, t_]),
                        tS = (0, lU.x0)();
                    (0, k.useEffect)(function() {
                        (0, lU.sb)()
                    }, []);
                    var tZ = eB >= 2,
                        tI = (d = (0, S.hz)(), f = (0, eY.kP)().session, m = (g = (0, nt.a)(["promptStarters", ey], function() {
                            return T.ZP.getSampledPromptStarter(4, null == f ? void 0 : f.accessToken)
                        }, {
                            enabled: d.has(ed.Zz) && !tZ && !eI
                        })).data, h = g.isLoading, p = g.isSuccess, d.has(ed.Zz) ? {
                            promptStarters: (null == m ? void 0 : m.items.map(function(e) {
                                return {
                                    title: e.title,
                                    body: e.description,
                                    prompt: e.prompt
                                }
                            })) || [],
                            isLoading: h,
                            isSuccess: p
                        } : {
                            promptStarters: [],
                            isLoading: !1,
                            isSuccess: !0
                        }),
                        tD = tI.promptStarters,
                        tB = tI.isSuccess,
                        tF = (0, k.useMemo)(function() {
                            var e, t;
                            return (null == tS ? void 0 : tS.messageId) === (null === (e = P.tQ.getTree(ey).getLastValidNode(eD)) || void 0 === e ? void 0 : null === (t = e.message) || void 0 === t ? void 0 : t.id) ? null == tS ? void 0 : tS.suggestions : tZ || eI || !tB ? void 0 : tD
                        }, [ey, eD, tZ, eI, tD, null == tS ? void 0 : tS.messageId, null == tS ? void 0 : tS.suggestions, tB]),
                        tR = (0, k.useCallback)(function(e, t, n) {
                            var a = (0, S.N$)().has(ed.uj);
                            eN || !a || void 0 === n || (0, ne.lD)(n) || (0, ne.JD)(n) || (0, lU.yu)(e, t, tk)
                        }, [eN, tk]),
                        tL = (0, P.Uy)(ey),
                        tE = (x = eT && (null == tC ? void 0 : null === (el = tC.enabledTools) || void 0 === el ? void 0 : el.includes("tools3")) ? tj.map(function(e) {
                            return e.id
                        }) : void 0, _ = (j = (0, S.hz)()).has(ed.PL), I = (0, k.useId)(), F = (0, lL.Y8)(function(e) {
                            return null == e ? void 0 : e.setCapTimeout
                        }), R = (0, lL.Y8)(function(e) {
                            return null == e ? void 0 : e.clearCapTimeout
                        }), L = (0, k.useContext)(Z.QL).historyDisabled, E = (0, iw.B9)(), A = (0, k.useRef)(0), q = (0, k.useRef)(void 0), (0, k.useEffect)(function() {
                            return function() {
                                var e;
                                return null === (e = q.current) || void 0 === e ? void 0 : e.call(q)
                            }
                        }, []), O = (0, k.useRef)(performance.now()), z = (0, k.useRef)(performance.now()), W = (0, k.useRef)("".concat(I, "-").concat(A.current)), H = (0, k.useCallback)(function(e, t, n, a) {
                            var r, i, s, o, l, c = a.eventSource,
                                u = function() {
                                    nC.m9.logEvent("chatgpt_focus_after_blur_during_completion", null, {
                                        completion_duration_ms: "".concat(s - T),
                                        blur_time_ms: "".concat(o - T),
                                        refocus_time_ms: "".concat(l - T)
                                    })
                                },
                                d = function() {
                                    if (void 0 === o) {
                                        o = Date.now();
                                        var e = function() {
                                                window.removeEventListener("focus", t), q.current = void 0
                                            },
                                            t = function() {
                                                l = Date.now(), void 0 !== s && u(), e()
                                            };
                                        window.addEventListener("focus", t), q.current = e
                                    }
                                },
                                f = function() {
                                    window.removeEventListener("blur", d), setTimeout(function() {
                                        $.removeRequest(n), P.tQ.releaseThread(ey)
                                    }, 0)
                                },
                                g = P.tQ.getTree(ey),
                                m = n,
                                h = t === t6.Os.Continue,
                                p = !0,
                                x = !1,
                                b = g.getMessage(m),
                                y = new Set,
                                w = !1,
                                k = !1;
                            z.current = performance.now(), O.current = performance.now();
                            var M = 0,
                                C = [],
                                T = Date.now();
                            window.addEventListener("blur", d);
                            var N = ow()(function() {
                                    w || P.tQ.updateTree(ey, function(e) {
                                        e.updateNodeMessage(m, b)
                                    })
                                }, 50, {
                                    leading: !0,
                                    maxWait: 50
                                }),
                                S = function(e) {
                                    var t, n, a = performance.now(),
                                        r = a - O.current,
                                        i = a - z.current;
                                    O.current = a, M += 1;
                                    var s = b.content.content_type == t6.PX.Text ? null == b ? void 0 : null === (t = b.content) || void 0 === t ? void 0 : t.parts[(null == b ? void 0 : null === (n = b.content) || void 0 === n ? void 0 : n.parts.length) - 1] : "",
                                        o = {
                                            requestCount: M,
                                            requestDuration: i,
                                            lastTokenDuration: Number(JSON.stringify(r)),
                                            messageType: b.content.content_type,
                                            content: s
                                        };
                                    C.push(o), "message" === e.type && (0, lR.Ae)(W.current, o)
                                };
                            return r = (0, eQ._)(function(a) {
                                    var r, d, M, C, Z, I, D, B, L, A, q, O, z, H, Q, V, $, G, J, K, X, ee, et, en, ea, er, ei;
                                    return (0, eV.Jh)(this, function(es) {
                                        switch (es.label) {
                                            case 0:
                                                if (S(a), "error" === a.type) return console.error(r = a.error), d = (null == r ? void 0 : r.message) || "Something went wrong", P.tQ.updateTree(ey, function(e) {
                                                    e.updateNode(m, {
                                                        message: {
                                                            $set: b
                                                        },
                                                        metadata: {
                                                            $set: {
                                                                err: d,
                                                                errType: "danger",
                                                                errCode: (0, lF.T)(r) && r.code || "",
                                                                completionSampleFinishTime: Date.now()
                                                            }
                                                        }
                                                    })
                                                }), f(), (0, lF.T)(r) && (null == r ? void 0 : r.code) === lL.uU && (null == r ? void 0 : r.clearsIn) && (F(new Date(Date.now() + 1e3 * r.clearsIn).toISOString()), setTimeout(function() {
                                                    R()
                                                }, 1e3 * r.clearsIn)), [2];
                                                if ("moderation" === a.type && (M = a.isCompletion, C = a.messageId, Z = a.conversationId, I = a.flagged, D = a.blocked, (I || D) && (k = !0, D && M && (w = !0), P.tQ.updateTree(ey, function(e) {
                                                        var t = e.messageIdToNodeId(C);
                                                        e.updateNode(t, (0, U._)((0, v._)({}, I ? {} : {
                                                            message: {
                                                                content: {
                                                                    parts: {
                                                                        $set: [""]
                                                                    }
                                                                }
                                                            }
                                                        }), {
                                                            metadata: {
                                                                $set: (0, U._)((0, v._)({}, D ? t7.sK : t7.Mf), {
                                                                    completionSampleFinishTime: Date.now()
                                                                })
                                                            }
                                                        }))
                                                    }), ec.o.logEvent(M ? D ? eu.a.completionBlockedByModeration : eu.a.completionFlaggedByModeration : D ? eu.a.promptBlockedByModeration : eu.a.promptFlaggedByModeration, {
                                                        threadId: Z,
                                                        id: C
                                                    }))), "message" === a.type) {
                                                    if (B = a.message, L = a.conversationId, p && g.isFirstCompletion) {
                                                        if ((null == B ? void 0 : B.author.role) === t6.uU.System) return g.appendSystemMessageToRoot(B), [2];
                                                        if ((null == B ? void 0 : B.author.role) === t6.uU.User) return [2]
                                                    }
                                                    p ? (q = (null === (A = P.qN.getState().threads[ey]) || void 0 === A ? void 0 : A.continuingFromSharedConversationId) != null, P.tQ.removeContinuingFromSharedConversationId(ey), p = !1, x = g.isFirstCompletion || q, (null == B ? void 0 : B.id) && y.add(n), void 0 !== L && (i = L, (0, P.Zz)(ey) && P.tQ.setServerIdForNewThread(ey, L)), P.tQ.updateTree(ey, function(e) {
                                                        e.updateNodeMessage(m, B)
                                                    }), x && tT(L), O = {
                                                        id: n,
                                                        threadId: L,
                                                        completionType: t,
                                                        eventSource: c,
                                                        model: e
                                                    }, t === t6.Os.Next && ($ = null == (V = P.qN.getState().threads[L]) ? void 0 : null === (z = V.conversationTurns) || void 0 === z ? void 0 : z.length, (J = null === (Q = (G = null == V ? void 0 : null === (H = V.conversationTurns) || void 0 === H ? void 0 : H.filter(function(e) {
                                                        return e.role == t6.uU.User
                                                    }))[G.length - 1]) || void 0 === Q ? void 0 : Q.messages[0].message).content.content_type == t6.PX.Text && (K = J.content.parts.join("").length, ee = null !== (X = G.length) && void 0 !== X ? X : 0, O.countConversationTurns = $, O.countUserSubmittedMessages = ee, O.countLastUserPromptTextMessageLength = K)), ec.o.logEvent(eu.a.generateCompletion, O)) : h || B.id === g.getMessageId(m) || (y.add(B.id), N.flush(), P.tQ.updateTree(ey, function(e) {
                                                        var t, n = null === (t = B.metadata) || void 0 === t ? void 0 : t.parent_id;
                                                        if (null == n) throw Error("Received a message with no parentId: ".concat(JSON.stringify(B), "}"));
                                                        e.addNode(B.id, B, n, t6.Jq.Completion)
                                                    }), m = B.id, P.tQ.setThreadCurrentLeafId(ey, m)), b = B
                                                }
                                                if (N(), "done" !== a.type) return [3, 4];
                                                if (i && ((0, lR.kn)(W.current), (0, lR.gL)(W.current)), w || (N.flush(), k || (en = g.getMessageId(m), x && tN(en, i), tR(i, en, b))), P.tQ.updateTree(ey, function(e) {
                                                        e.updateNode(m, {
                                                            metadata: {
                                                                $set: (0, U._)((0, v._)({}, g.getMetadata(m)), {
                                                                    completionSampleFinishTime: Date.now()
                                                                })
                                                            }
                                                        })
                                                    }), f(), !((null == b ? void 0 : null === (et = b.metadata) || void 0 === et ? void 0 : et.client_actions) !== void 0)) return [3, 2];
                                                return [4, function(e, t) {
                                                    return lI.apply(this, arguments)
                                                }(ey, b)];
                                            case 1:
                                                (ea = es.sent()).length > 0 && lE(ey, m, e, _, E, Y, ea), es.label = 2;
                                            case 2:
                                                if (void 0 !== o && (s = Date.now(), nC.m9.logEvent("chatgpt_blur_during_completion", null, {
                                                        completion_duration_ms: "".concat(s - T),
                                                        blur_time_ms: "".concat(o - T)
                                                    }), void 0 !== l && u()), !j.has("tools3_dev") || !(er = (0, is.wR)(b))) return [3, 4];
                                                return ei = [ey, m, e, _, E, Y], [4, (0, is.qZ)(er)];
                                            case 3:
                                                lE.apply(void 0, ei.concat([es.sent()])), es.label = 4;
                                            case 4:
                                                return [2]
                                        }
                                    })
                                }),
                                function(e) {
                                    return r.apply(this, arguments)
                                }
                        }, [tT, tN, ey]), Y = (0, k.useCallback)((G = (0, eQ._)(function(e) {
                            var t, n, a, r, i, s, o, l, c, u, d, f, g, m, h, p, v, b, y, j;
                            return (0, eV.Jh)(this, function(w) {
                                switch (w.label) {
                                    case 0:
                                        return t = e.model, n = e.completionType, a = e.parentNodeId, r = e.metadata, s = void 0 === (i = e.focusOnNewCompletion) || i, o = e.completionMetadata, l = e.arkoseToken, c = P.tQ.getTree(ey), P.tQ.retainThread(ey), u = "".concat(nm.Vh).concat(I, "-").concat(A.current++), W.current = "".concat(I, "-").concat(A.current), P.tQ.updateTree(ey, function(e) {
                                            e.addNode(u, "", a, t6.Jq.Completion)
                                        }), s && P.tQ.setThreadCurrentLeafId(ey, u), f = [], g = c.getNodeByIdOrMessageId(a), n === t6.Os.Next || n === t6.Os.Variant ? (d = (null === (m = (h = c.getNodeByIdOrMessageId(g.parentId)).message) || void 0 === m ? void 0 : m.id) || h.id, f.push(g.message)) : d = g.message.id, void 0 === (p = P.tQ.getServerThreadId(ey)) && (0, P.Zz)(ey) && P.tQ.updateInitialThreadDataForNewThread(ey, t, x), v = {
                                            model: t,
                                            completionType: n,
                                            threadId: p,
                                            continueFromSharedConversationId: tL,
                                            historyDisabled: L,
                                            parentMessageId: d,
                                            messages: f,
                                            arkoseToken: null != l ? l : null,
                                            enabledPluginIds: x,
                                            completionMetadata: o
                                        }, b = function(e, t) {
                                            (0, lR.F4)(W.current, t, e)
                                        }, y = H(t, n, u, r), [4, T.ZP.publicApiCompletionStream(v, y, b)];
                                    case 1:
                                        return j = w.sent(), $.addRequest(u, j), [2]
                                }
                            })
                        }), function(e) {
                            return G.apply(this, arguments)
                        }), [I, ey, tL, x, H, L])),
                        tA = (0, k.useCallback)(function() {
                            if (eD) {
                                var e = P.tQ.getTree(ey).getBranchFromLeaf(eD);
                                $.abortRequests(e.map(function(e) {
                                    return e.id
                                }))
                            }
                        }, [eD, ey]),
                        tq = e_.has(ed.PL),
                        tU = (0, k.useCallback)((K = (0, eQ._)(function(e, t, n, a) {
                            var r, i, s, o, l, c, u, d, f = arguments;
                            return (0, eV.Jh)(this, function(g) {
                                switch (g.label) {
                                    case 0:
                                        if (r = !(f.length > 4) || void 0 === f[4] || f[4], i = f.length > 5 ? f[5] : void 0, s = f.length > 6 ? f[6] : void 0, (0, lU.sb)(), a && tA(), l = P.tQ.getTree(ey), e !== t6.Os.Continue && td(l.getTextFromNode(t))) return [2];
                                        if (c = i ? tw : tk, u = null === (o = tM.get(c)) || void 0 === o ? void 0 : o.tags.includes(iw.S.GPT_4), !(tq && u)) return [3, 2];
                                        return [4, t8.Z.getEnforcementToken()];
                                    case 1:
                                        d = g.sent(), g.label = 2;
                                    case 2:
                                        return tE({
                                            model: c,
                                            completionType: e,
                                            parentNodeId: t,
                                            metadata: n,
                                            focusOnNewCompletion: r,
                                            completionMetadata: s,
                                            arkoseToken: null != d ? d : null
                                        }), [2]
                                }
                            })
                        }), function(e, t, n, a) {
                            return K.apply(this, arguments)
                        }), [ey, td, tw, tk, tM, tq, tE, tA]),
                        tO = (0, k.useCallback)(function(e, t, n, a) {
                            P.tQ.updateTree(ey, function(r) {
                                r.addNode(e, n, t, t6.Jq.Prompt, void 0, a)
                            })
                        }, [ey]),
                        tz = (0, k.useCallback)(function(e, t, n) {
                            var a = t.content,
                                r = t.attachments,
                                i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
                            tO(e, eD, a, r.length > 0 ? {
                                attachments: r
                            } : {}), tU(t6.Os.Next, e, n, !0, void 0, void 0, i)
                        }, [eD, tO, tU]),
                        tW = (0, k.useRef)(!1),
                        tH = (0, iw.B8)(),
                        tQ = (0, eY.kP)().session;
                    (0, k.useEffect)(function() {
                        if (tQ && void 0 !== tC && (void 0 === tC.enabledTools || !(tC.enabledTools.length > 0)) && e_.has(ed.Yj) && 0 !== tH.enabledModelsInCategoriesById.size && !tW.current && void 0 === P.tQ.getServerThreadId(ey)) {
                            var e, t = eS.query,
                                n = t.m,
                                a = (0, b._)(t, ["m"]);
                            if (void 0 !== n) {
                                e = Array.isArray(n) ? n[0] : n;
                                var r = (0, t5.Z)();
                                tW.current = !0, tz(r, {
                                    content: e,
                                    attachments: []
                                }, {
                                    eventSource: "url"
                                }), eS.replace({
                                    pathname: eS.pathname,
                                    query: a
                                }, void 0, {
                                    shallow: !0
                                })
                            }
                        }
                    }, [tC, eS, tz, tQ, tH, e_, ey]);
                    var tV = (0, P.nh)(ey, eD),
                        t$ = V(),
                        tG = (0, k.useMemo)(function() {
                            var e, t, n = tV.type === t6.Jq.Prompt,
                                a = (null === (e = tV.metadata) || void 0 === e ? void 0 : e.err) && (null === (t = tV.metadata) || void 0 === t ? void 0 : t.errCode) !== t7.Dd;
                            return !!(n || a) && !t$
                        }, [t$, tV]),
                        tJ = (0, lL.Y8)(function(e) {
                            return e.isoDate
                        }),
                        tY = (0, k.useMemo)(function() {
                            var e, t = (null === (e = tV.metadata) || void 0 === e ? void 0 : e.errCode) === lL.uU;
                            return tG && t && null != tJ && "" !== tJ
                        }, [null === (ef = tV.metadata) || void 0 === ef ? void 0 : ef.errCode, tG, tJ]),
                        tX = (0, k.useCallback)(function(e, t) {
                            var n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
                                a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "none",
                                r = arguments.length > 4 ? arguments[4] : void 0,
                                i = P.tQ.getTree(ey).getParentPromptNode(e).id;
                            tU(t6.Os.Variant, i, t, !1, n, r, {
                                variantPurpose: a
                            })
                        }, [tU, ey]),
                        t0 = (0, k.useCallback)(function(e) {
                            ec.o.logEvent(eu.a.continueCompletion), tU(t6.Os.Continue, e, {
                                eventSource: "mouse"
                            }, !1)
                        }, [tU]),
                        t1 = (0, k.useCallback)(function(e) {
                            var t = P.tQ.getTree(ey).getLeafFromNode(e);
                            P.tQ.setThreadCurrentLeafId(ey, t.id)
                        }, [ey]),
                        t3 = (0, k.useCallback)(function(e, t) {
                            P.tQ.updateTree(ey, function(n) {
                                n.updateNodeText(e, t)
                            })
                        }, [ey]),
                        nn = (0, k.useCallback)(function(e, t, n) {
                            var a = P.tQ.getServerThreadId(ey);
                            if (ec.o.logEvent(eu.a.thumbRating, {
                                    id: t,
                                    threadId: a,
                                    rating: n,
                                    model: tk
                                }), void 0 !== a && T.ZP.submitMessageFeedback({
                                    message_id: t,
                                    conversation_id: a,
                                    rating: n
                                }), e7(e), te(t), e4(n), P.tQ.updateTree(ey, function(t) {
                                    var a = t.getMetadata(e);
                                    t.updateNode(e, {
                                        metadata: {
                                            $set: (0, U._)((0, v._)({}, a), {
                                                rating: n
                                            })
                                        }
                                    })
                                }), "thumbsDown" === n && eP) {
                                var r = P.tQ.getTree(ey).getConversationTurns(e || "root");
                                iV(r[r.length - 1]) && tX(e, {
                                    eventSource: "mouse",
                                    intent: "comparison"
                                }, !1, "comparison")
                            }
                        }, [ey, tk, eP, tX]),
                        na = (0, k.useCallback)(function(e, t) {
                            if (e3 && null != e8 && "" !== e8 && (e || t.length > 0)) {
                                var n = P.tQ.getServerThreadId(ey);
                                ec.o.logEvent(eu.a.reportResult, {
                                    id: e9,
                                    threadId: n,
                                    content: e,
                                    model: tk,
                                    rating: e3,
                                    tags: t
                                }), ey && e9 && T.ZP.submitMessageFeedback({
                                    message_id: e9,
                                    conversation_id: n,
                                    rating: e3,
                                    text: e,
                                    tags: t
                                })
                            }
                        }, [e3, e8, ey, e9, tk]),
                        nr = (0, k.useCallback)(function(e, t) {
                            if (eU && null != eJ && "" !== eJ) {
                                var n = P.tQ.getServerThreadId(ey);
                                ec.o.logEvent(eu.a.reportResult, {
                                    id: e9,
                                    threadId: n,
                                    content: e,
                                    model: tk,
                                    rating: e3,
                                    tags: t
                                }), T.ZP.submitSharedConversationReportFeedback({
                                    message_id: eJ,
                                    shared_conversation_id: n,
                                    text: e,
                                    tags: t
                                }), e$(!0)
                            }
                        }, [e3, eU, eJ, ey, e9, tk]),
                        ni = (0, k.useCallback)((X = (0, eQ._)(function(e, t, n, a, r, i, s, o, l, c, u) {
                            return (0, eV.Jh)(this, function(d) {
                                switch (d.label) {
                                    case 0:
                                        return [4, T.ZP.submitMessageComparisonFeedback({
                                            feedback_version: "comparison_feedback_modal:a:1.0",
                                            original_message_id: e,
                                            new_message_id: t,
                                            rating: n,
                                            conversation_id: P.tQ.getServerThreadId(ey),
                                            text: c,
                                            tags: u.map(function(e) {
                                                return e.replace("feedback-", "")
                                            }),
                                            completion_comparison_rating: a,
                                            new_completion_placement: r,
                                            feedback_start_time: i,
                                            compare_step_start_time: s,
                                            new_completion_load_start_time: o,
                                            new_completion_load_end_time: l,
                                            frontend_submission_time: Date.now(),
                                            timezone_offset_min: new Date().getTimezoneOffset()
                                        })];
                                    case 1:
                                        return d.sent(), [2]
                                }
                            })
                        }), function(e, t, n, a, r, i, s, o, l, c, u) {
                            return X.apply(this, arguments)
                        }), [ey]),
                        ns = (0, k.useCallback)(function(e, t) {
                            var n = P.tQ.getTree(ey).getConversationTurns(e),
                                a = null == n ? void 0 : n[(null == n ? void 0 : n.length) - 1].variantIds,
                                r = (null == a ? void 0 : a.length) === 1;
                            tX(e, r ? (0, U._)((0, v._)({}, t), {
                                intent: "comparison_implicit"
                            }) : t, !0, r ? "comparison_implicit" : "none")
                        }, [tX, ey]),
                        no = (0, k.useCallback)(function(e) {
                            P.tQ.updateTree(ey, function(t) {
                                t.deleteNode(e)
                            })
                        }, [ey]),
                        nl = (0, k.useCallback)(function() {
                            N.vm.closeModal(N.B.AccountPortal)
                        }, []),
                        nc = (0, tm.t)(function(e) {
                            return {
                                setShowAccountPaymentModal: e.setShowAccountPaymentModal,
                                showAccountPaymentModal: e.showAccountPaymentModal
                            }
                        }),
                        nu = nc.showAccountPaymentModal,
                        nd = nc.setShowAccountPaymentModal,
                        nf = (0, k.useCallback)(function() {
                            nd(!1)
                        }, [nd]),
                        ng = (0, k.useCallback)(function(e, t) {
                            var n = P.tQ.getTree(ey);
                            if (n.isFirstCompletion && !eN) {
                                var a, r = n.getParent(t);
                                (null === (a = r.metadata) || void 0 === a ? void 0 : a.errCode) !== t7.Dd && setTimeout(function() {
                                    tN(r.message.id)
                                }, 500)
                            }
                            $.abortRequest(t) && P.tQ.updateTree(ey, function(e) {
                                e.updateNodeMessageMetadata(t, {
                                    finish_details: {
                                        type: "interrupted"
                                    }
                                })
                            })
                        }, [tN, eN, ey]),
                        nh = (0, k.useCallback)(function() {
                            tv(!0)
                        }, []);
                    (0, k.useEffect)(function() {
                        var e = t4().subscribe("AbortCompletion", ng),
                            t = t4().subscribe("UnrecoverableError", nh);
                        return function() {
                            t4().unsubscribe(e), t4().unsubscribe(t)
                        }
                    }, [ng, nh]);
                    var np = (0, P.Zz)(ey) && !tZ,
                        nx = (0, k.useCallback)(function() {
                            th(!0), ty.m.setItem("oai/librarian/hasSeenWarning", "true")
                        }, []),
                        nv = (0, k.useCallback)(function() {
                            tl(!1)
                        }, []),
                        nb = (0, P.lA)(ey, eD),
                        ny = (0, P.dz)(ey, eD),
                        nj = Q(eR),
                        nw = (0, k.useRef)(null),
                        nk = (0, k.useMemo)(function() {
                            return !!e_.has("allow_continue") && !nj && !nb && ny
                        }, [nb, ny, nj, e_]),
                        nM = (0, N.tN)(function(e) {
                            return e.activeModals.has(N.B.AccountPortal)
                        }),
                        n_ = (0, P.XK)(ey),
                        nT = (0, N.tN)(function(e) {
                            return e.sharingModalThreadId === n_
                        });
                    et = (ee = {
                        clientThreadId: ey,
                        currentModelId: tk
                    }).clientThreadId, en = ee.currentModelId, t = (0, ln.i0)(en, ln.dN.CODE_INTERPRETER), n = null !== (0, k.useContext)(Z.gB), a = (0, eY.kP)().isAuthenticated, r = P.tQ.getServerThreadId(et), (0, nt.a)({
                        queryKey: ["interpreterState", r],
                        queryFn: lO,
                        enabled: !!(t && r && !n && a),
                        cacheTime: 0
                    });
                    var nP = (0, P.r7)(ey);
                    return (0, y.jsxs)(y.Fragment, {
                        children: [tr && (0, y.jsx)(l$, {}), (0, y.jsxs)(t2(), {
                            children: [null != tP && (0, y.jsx)("title", {
                                children: tP
                            }), eM && (0, y.jsxs)(y.Fragment, {
                                children: [(0, y.jsx)("meta", {
                                    property: "og:site_name",
                                    content: "ChatGPT"
                                }), (0, y.jsx)("meta", {
                                    name: "robots",
                                    content: "noindex,nofollow"
                                }, "robots"), (0, y.jsx)("meta", {
                                    property: "og:title",
                                    content: null != tP ? tP : "Shared Chat on ChatGPT"
                                }, "og:title"), (0, y.jsx)("meta", {
                                    property: "og:decription",
                                    content: "Shared " + (null != eF ? "by ".concat(eF, " ") : "") + "via ChatGPT"
                                }, "og:description"), (0, y.jsx)("meta", {
                                    property: "og:image",
                                    content: "/images/chatgpt-share-og.png"
                                }, "og:image")]
                            })]
                        }), e_.has(ed.i) ? (0, y.jsx)(i4, {}) : null, !tg && (0, y.jsx)(eh.Z, {
                            isOpen: !0,
                            onClose: nx,
                            icon: tK.Z,
                            title: eC.formatMessage(lG.doNotShareSensitive),
                            primaryButton: (0, y.jsx)(em.ZP.Button, {
                                onClick: nx,
                                title: eC.formatMessage(lG.acknowledge)
                            }),
                            type: "danger"
                        }, "OnboardingModal"), tu && to && (0, y.jsx)(eh.Z, {
                            isOpen: !0,
                            onClose: nv,
                            icon: M.U0j,
                            title: eC.formatMessage(lG.contentPolicyViolation),
                            primaryButton: (0, y.jsx)(em.ZP.Button, {
                                onClick: nv,
                                title: eC.formatMessage(lG.acknowledge)
                            }),
                            type: "danger"
                        }, "RestrictedTerms"), nT && null != n_ && (0, y.jsx)(lj, {
                            serverThreadId: n_,
                            currentThreadModel: eb.lastModelUsed
                        }), null != e3 && (0, y.jsx)(i$, {
                            ratingModalNodeId: e8,
                            ratingModalOpen: e3,
                            onCloseRatingModal: function() {
                                return e4(void 0)
                            },
                            handleSubmitFeedback: na,
                            onHandleChangeFeedbackComparisonRating: ni,
                            currentModelId: tk,
                            feedbackTextareaRef: tt,
                            clientThreadId: ey,
                            onChangeItemInView: t1,
                            onRequestMoreCompletions: tX,
                            onUpdateNode: t3,
                            onChangeRating: nn,
                            onDeleteNode: no,
                            onRequestCompletion: tU
                        }), eU && (0, y.jsx)(i$, {
                            ratingModalNodeId: eJ,
                            ratingModalOpen: "report",
                            onCloseRatingModal: function() {
                                return eO(!1)
                            },
                            handleSubmitFeedback: nr,
                            onHandleChangeFeedbackComparisonRating: function() {},
                            currentModelId: tk,
                            feedbackTextareaRef: tt,
                            clientThreadId: ey,
                            onChangeItemInView: t1,
                            onRequestMoreCompletions: tX,
                            onUpdateNode: t3,
                            onChangeRating: nn,
                            onDeleteNode: no,
                            onRequestCompletion: tU
                        }), eW && (0, y.jsx)(eh.Z, {
                            onClose: function() {
                                return e$(!1)
                            },
                            isOpen: !0,
                            icon: tK.Z,
                            title: eC.formatMessage(lG.reportModalThankYouTitle),
                            description: eC.formatMessage(lG.reportModalThankYouDescription),
                            primaryButton: (0, y.jsx)(em.ZP.Button, {
                                onClick: function() {
                                    return e$(!1)
                                },
                                title: eC.formatMessage(lG.reportModalThankYouDismiss)
                            }),
                            type: "danger"
                        }), e0 && (0, y.jsx)(i$, {
                            ratingModalNodeId: eD,
                            ratingModalOpen: "moderate",
                            onCloseRatingModal: function() {
                                return e1(!1)
                            },
                            handleSubmitFeedback: es(),
                            onHandleChangeFeedbackComparisonRating: function() {},
                            currentModelId: tk,
                            feedbackTextareaRef: tt,
                            clientThreadId: ey,
                            onChangeItemInView: t1,
                            onRequestMoreCompletions: tX,
                            onUpdateNode: t3,
                            onChangeRating: nn,
                            onDeleteNode: no,
                            onRequestCompletion: tU
                        }), (0, y.jsxs)(iX.Z, {
                            currentModelConfig: tC,
                            className: "flex h-full",
                            children: [(0, y.jsx)(l1, {
                                children: !eI && (np || tZ) && (ea = (0, y.jsx)(lc, {
                                    onChangeItemInView: t1,
                                    onRequestMoreCompletions: tX,
                                    onUpdateNode: t3,
                                    onChangeRating: nn,
                                    onDeleteNode: no,
                                    onRequestCompletion: tU,
                                    isNewThread: np,
                                    clientThreadId: ey,
                                    currentThreadModel: eb.lastModelUsed,
                                    initiallyHighlightedMessageId: ew,
                                    inlineEmbeddedDisplay: !1,
                                    promptTextareaRef: nw,
                                    conversationLeafId: eD
                                }, ey), eM ? (0, y.jsx)("div", {
                                    className: "h-full overflow-auto dark:bg-gray-800",
                                    children: ea
                                }) : (0, y.jsx)(lH, {
                                    children: ea
                                }))
                            }), (0, y.jsxs)(l2, {
                                children: [!tY && !eM && (0, y.jsx)(i0.Z, {
                                    children: (0, y.jsx)(sa.Z, {
                                        clientThreadId: ey,
                                        canRegenerateResponse: eA,
                                        onRequestMoreCompletions: ns,
                                        onCreateNewCompletion: tz,
                                        onAbortCompletion: ng,
                                        onContinueGenerating: t0,
                                        currentModelId: tk,
                                        isCompletionInProgress: eE,
                                        className: (0, J.default)("stretch mx-2 flex flex-row gap-3 last:mb-2 md:mx-4 md:last:mb-6 lg:mx-auto", ti ? "mx-auto max-w-[44rem] px-2 sm:px-0" : "lg:max-w-2xl xl:max-w-3xl"),
                                        shouldRetry: tG,
                                        canContinue: nk,
                                        suggestions: null != tF ? tF : [],
                                        disabled: !tb.size,
                                        canPause: nj,
                                        isInteractableSharedThread: nP,
                                        ref: nw
                                    }, ey)
                                }), eM && (0, y.jsx)(y.Fragment, {
                                    children: (0, y.jsxs)("div", {
                                        className: "relative flex h-full w-full flex-1 items-center justify-center gap-2",
                                        children: [(0, y.jsx)(eg.z, {
                                            as: "link",
                                            to: ek,
                                            children: eC.formatMessage(lG.sharedConversationContinueConversation)
                                        }), eZ && (0, y.jsx)(eg.z, {
                                            onClick: function() {
                                                e1(!0)
                                            },
                                            children: eC.formatMessage(lG.sharedConversationModerateConversation)
                                        })]
                                    })
                                }), (0, y.jsx)("div", {
                                    className: "pb-3 pt-2 text-center text-xs text-gray-600 dark:text-gray-300 md:px-[60px] md:pb-6 md:pt-3",
                                    children: eM ? (0, y.jsx)(lJ, {
                                        onClickReportSharedConversation: function() {
                                            eK(eD), eO(!0)
                                        }
                                    }) : (0, y.jsx)(lY, {})
                                }), (0, y.jsxs)("div", {
                                    className: "group absolute bottom-5 right-4 z-10 flex flex-row items-center gap-3",
                                    children: [tr && (0, y.jsx)(eg.z, {
                                        className: "invisible md:visible",
                                        size: "small",
                                        color: "neutral",
                                        onClick: function() {
                                            N.vm.showLatencyDevTools()
                                        },
                                        children: (0, y.jsxs)("div", {
                                            className: "flex flex-row space-x-1",
                                            children: [(0, y.jsx)(ep.ZP, {
                                                icon: M.DKx
                                            }), (0, y.jsx)("span", {
                                                className: "text-xs",
                                                children: (0, y.jsx)(C.Z, (0, v._)({}, lG.latencyButton))
                                            })]
                                        })
                                    }), (0, y.jsx)(l0, {})]
                                })]
                            })]
                        }), ta && (0, y.jsx)(sn.Z, {
                            isOpen: nu,
                            onClose: nf
                        }), void 0 !== tn && tn && (0, y.jsx)(se, {
                            isOpen: nM,
                            onClose: nl
                        }), tx && (0, y.jsx)(eh.Z, {
                            onClose: es(),
                            isOpen: !0,
                            icon: tK.Z,
                            title: eC.formatMessage(lG.somethingWentWrong),
                            description: eC.formatMessage(lG.tryAgainLater),
                            primaryButton: (0, y.jsx)(em.ZP.Button, {
                                onClick: function() {
                                    ej(), tv(!1)
                                },
                                title: eC.formatMessage(lG.resetThread)
                            }),
                            type: "danger"
                        }, "UnrecoverableErrorModal"), (0, y.jsx)(lK, {})]
                    })
                },
                l0 = function() {
                    return (0, S.hz)().has(ed.rk) ? (0, y.jsxs)(tv.v, {
                        as: "div",
                        className: "group relative",
                        children: [(0, y.jsx)(tv.v.Button, {
                            className: "invisible flex items-center justify-center rounded-full border border-gray-200 bg-gray-50 text-gray-600 dark:border-white/10 dark:bg-white/10 dark:text-gray-200 md:visible",
                            children: (0, y.jsx)("div", {
                                className: "h-6 w-6",
                                children: "?"
                            })
                        }), (0, y.jsx)(tP, {
                            children: (0, y.jsxs)(tv.v.Items, {
                                className: "absolute bottom-full right-0 z-20 mb-2 w-full min-w-[175px] overflow-hidden rounded-md bg-gray-950 pb-1.5 pt-1 outline-none",
                                children: [(0, y.jsxs)(tx.ZP, {
                                    as: "a",
                                    href: "https://help.openai.com/en/collections/3742473-chatgpt",
                                    target: "_blank",
                                    onClick: function() {
                                        ec.o.logEvent(eu.a.clickFaqLink)
                                    },
                                    children: [(0, y.jsx)(ep.ZP, {
                                        icon: M.AlO
                                    }), (0, y.jsx)("span", {
                                        className: "text-xs",
                                        children: (0, y.jsx)(C.Z, (0, v._)({}, lG.helpAndFaq))
                                    })]
                                }), (0, y.jsxs)(tx.ZP, {
                                    onClick: function() {
                                        N.vm.openModal(N.B.KeyboardActions)
                                    },
                                    children: [(0, y.jsx)(ep.ZP, {
                                        icon: M.aCJ
                                    }), (0, y.jsx)("span", {
                                        className: "text-xs",
                                        children: (0, y.jsx)(C.Z, (0, v._)({}, lG.keyboardShortcutsMenu))
                                    })]
                                })]
                            })
                        })]
                    }) : null
                },
                l1 = el.Z.div(lQ()),
                l2 = el.Z.div(lV());

            function l3(e) {
                var t, n = e.clientThreadId,
                    a = null !== (t = P.tQ.getTitle(n)) && void 0 !== t ? t : "New chat",
                    r = F(n, a, !0),
                    i = r.resolvedTitle,
                    s = r.isTypingEffect,
                    o = (0, k.useContext)(Z.QL),
                    l = o.historyDisabled,
                    c = o.toggleHistoryDisabled;
                return (0, y.jsx)(y.Fragment, {
                    children: l ? (0, y.jsxs)("button", {
                        className: "flex cursor-pointer flex-row place-items-center items-center justify-center gap-3",
                        onClick: function() {
                            return c()
                        },
                        children: [(0, y.jsx)(ep.ZP, {
                            icon: M.$IY
                        }), (0, y.jsx)(C.Z, (0, v._)({}, l5.enableChatHistory))]
                    }) : s && null != i ? (0, y.jsx)(E, {
                        text: i
                    }) : null != i ? i : (0, y.jsx)(C.Z, (0, v._)({}, l5.newChat))
                })
            }
            var l4 = (c = function(e) {
                    var t = e.clientThreadId,
                        n = e.setClientThreadId,
                        a = (0, b._)(e, ["clientThreadId", "setClientThreadId"]),
                        r = null !== (0, k.useContext)(Z.gB),
                        i = (0, P.UL)(t),
                        s = (0, P.XK)(t),
                        o = (0, w.useRouter)(),
                        l = (0, S.hz)(),
                        c = (0, k.useContext)(Z.QL).historyDisabled,
                        u = (0, iw.Xy)(i.lastModelUsed, t),
                        d = (0, j.NL)();
                    (0, k.useEffect)(function() {
                        return P.tQ.retainThread(t),
                            function() {
                                setTimeout(function() {
                                    d.invalidateQueries(["conversation", t])
                                }, 0), P.tQ.releaseThread(t)
                            }
                    }, [t, d]), (0, k.useEffect)(function() {
                        N.vm.closeSharingModal()
                    }, [t, s]);
                    var f = (0, k.useCallback)(function() {
                        n((0, P.OX)()), o.replace(u.tags.includes(iw.S.GPT_4) ? "/" : "/?model=".concat(u.id), void 0, {
                            shallow: !0
                        })
                    }, [n, u.tags, u.id, o]);
                    (0, I.yx)({
                        resetThreadAction: f,
                        clientThreadId: t
                    });
                    var g = (0, N.tN)(function(e) {
                            return e.activeSidebar
                        }),
                        m = (0, D.w$)();
                    (0, k.useEffect)(function() {
                        return function() {
                            $.abortAllRequests()
                        }
                    }, [t]);
                    var h = (0, ev.iF)(),
                        p = (0, k.useCallback)(function() {
                            T.ZP.deleteConversations().then(function() {
                                h()
                            }), f(), "/" !== o.asPath && o.replace({
                                pathname: "/"
                            }, void 0, {
                                shallow: !0
                            })
                        }, [f, h, o]);
                    return (0, y.jsxs)(tY.Z, {
                        showNavigation: !r,
                        renderTitle: (0, y.jsx)(l3, {
                            clientThreadId: t
                        }),
                        renderMobileHeaderRightContent: (0, y.jsx)(th.js, {
                            onClick: f,
                            children: (0, y.jsx)(ep.ZP, {
                                icon: c ? M.Bw1 : M.OvN,
                                size: "medium"
                            })
                        }),
                        renderSidebar: (0, y.jsx)(tQ, {
                            onDeleteHistory: p,
                            onNewThread: f,
                            children: (0, y.jsx)(eS, {
                                activeId: c ? void 0 : s,
                                onNewThread: f
                            })
                        }),
                        children: [(0, y.jsx)(lX, (0, v._)({
                            initialThreadData: i,
                            clientThreadId: t,
                            handleResetThread: f
                        }, a), t), (0, y.jsxs)(tY.Z.Sidebars, {
                            children: [l.has("debug") && "debug" === g && (0, y.jsx)(tJ.fv, {
                                clientThreadId: t,
                                slideOver: !m,
                                onClose: function() {
                                    return N.vm.toggleActiveSidebar("debug")
                                },
                                isOpen: !0
                            }), l.has("tools3_dev") && (0, y.jsx)(tG.ZP, {
                                slideOver: !m
                            })]
                        })]
                    })
                }, function(e) {
                    var t = e.clientThreadId;
                    (0, P.ax)(t);
                    var n = (0, P.UL)(t);
                    return (0, k.useEffect)(function() {
                        N.vm.setActiveSidebar(!1), $.clear()
                    }, [n.threadId]), (0, y.jsx)(c, (0, v._)({}, e))
                }),
                l5 = (0, _.vU)({
                    enableChatHistory: {
                        id: "navigation.enableChatHistory",
                        defaultMessage: "Enable chat history",
                        description: "Enable chat history button label"
                    },
                    newChat: {
                        id: "navigation.newChat",
                        defaultMessage: "New chat",
                        description: "New chat header title"
                    }
                })
        },
        24215: function(e, t, n) {
            n.d(t, {
                kd: function() {
                    return r
                },
                Oq: function() {
                    return l
                },
                gj: function() {
                    return c
                }
            });
            var a, r, i = n(61888),
                s = n(43744);

            function o(e, t) {
                var n = e.slice().sort(function(e, t) {
                        return e - t
                    }),
                    a = t * (n.length - 1),
                    r = Math.floor(a),
                    i = Math.ceil(a);
                if (r === i) return n[r];
                var s = a - r;
                return (1 - s) * n[r] + s * n[i]
            }(a = r || (r = {})).FirstTokenLatency = "first_token_lat", a.TotalRequestTime = "total_request_time", a.TokenCount = "token_count", a.StdDevTokenLatency = "std_dev_token_lat", a.MeanTokenLatency = "mean_token_lat", a.MedianTokenLatency = "median_token_lat", a.MinTokenLatency = "min_token_lat", a.MaxTokenLatency = "max_token_lat", a.P95TokenLatency = "p95_token_lat", a.P99TokenLatency = "p99_token_lat";
            var l = function(e) {
                    var t, n = e.filter(function(e) {
                            return e.requestCount > 1
                        }),
                        a = e.length ? e[0] : null,
                        s = o(n.map(function(e) {
                            return e.lastTokenDuration
                        }), .95),
                        l = o(n.map(function(e) {
                            return e.lastTokenDuration
                        }), .99),
                        c = (0, i.mean)(n.map(function(e) {
                            return e.lastTokenDuration
                        })),
                        u = function(e) {
                            if (0 === e.length) return null;
                            var t = e.slice().sort(function(e, t) {
                                    return e - t
                                }),
                                n = Math.floor(t.length / 2);
                            return t.length % 2 == 0 ? (t[n - 1] + t[n]) / 2 : t[n]
                        }(n.map(function(e) {
                            return e.lastTokenDuration
                        })),
                        d = n.filter(function(e) {
                            return 0 !== e.lastTokenDuration
                        }).reduce(function(e, t) {
                            return Math.min(e, t.lastTokenDuration)
                        }, 1 / 0),
                        f = n.reduce(function(e, t) {
                            return Math.max(e, t.lastTokenDuration)
                        }, -1 / 0),
                        g = function(e) {
                            var t = e.length;
                            if (0 === t) return 0;
                            var n = (0 === e.length ? null : e.reduce(function(e, t) {
                                return e + t
                            }, 0) / e.length) || 0;
                            return Math.sqrt(e.reduce(function(e, t) {
                                return e + Math.pow(t - n, 2)
                            }, 0) / t)
                        }(n.map(function(e) {
                            return e.lastTokenDuration
                        })),
                        m = null === (t = e[e.length - 1]) || void 0 === t ? void 0 : t.requestDuration;
                    return [{
                        id: r.FirstTokenLatency,
                        name: "First Token lat.",
                        stat: a ? "".concat(a.lastTokenDuration.toFixed(2), "ms") : null,
                        value: a ? a.lastTokenDuration : null,
                        category: "summary"
                    }, {
                        id: r.TotalRequestTime,
                        name: "Total request time",
                        stat: m ? "".concat((m / 1e3).toFixed(2), "s") : null,
                        value: m || null,
                        category: "summary"
                    }, {
                        id: r.TokenCount,
                        name: "Token count",
                        stat: "".concat(e.length),
                        value: e.length,
                        category: "summary"
                    }, {
                        id: r.StdDevTokenLatency,
                        name: "Std dev Token lat.",
                        stat: "".concat(g.toFixed(2)),
                        value: g,
                        category: "token"
                    }, {
                        id: r.MeanTokenLatency,
                        name: "Mean Token lat.",
                        stat: c ? "".concat(c.toFixed(2), "ms") : null,
                        value: null != c ? c : null,
                        category: "aggregate"
                    }, {
                        id: r.MedianTokenLatency,
                        name: "Median Token lat.",
                        stat: u ? "".concat(u.toFixed(2), "ms") : null,
                        value: null != u ? u : null,
                        category: "token"
                    }, {
                        id: r.MinTokenLatency,
                        name: "Min Token lat.",
                        stat: "".concat(d.toFixed(2), "ms"),
                        value: null != d ? d : null,
                        category: "token"
                    }, {
                        id: r.MaxTokenLatency,
                        name: "Max Token lat.",
                        stat: "".concat(f.toFixed(2), "ms"),
                        value: null != f ? f : null,
                        category: "token"
                    }, {
                        id: r.P95TokenLatency,
                        name: "p95 Token lat.",
                        stat: s ? "".concat(s.toFixed(2), "ms") : null,
                        value: null != s ? s : null,
                        category: "aggregate"
                    }, {
                        id: r.P99TokenLatency,
                        name: "p99 Token lat.",
                        stat: l ? "".concat(l.toFixed(2), "ms") : null,
                        value: null != l ? l : null,
                        category: "aggregate"
                    }]
                },
                c = function() {
                    var e, t = (0, s.JP)(),
                        n = (0, s.AA)();
                    if (!t || !n) return {
                        stats: [],
                        targetLatencyData: []
                    };
                    var a = t[n],
                        r = null !== (e = null == a ? void 0 : a.data) && void 0 !== e ? e : [];
                    return {
                        stats: l(r),
                        targetLatencyData: r
                    }
                }
        },
        43744: function(e, t, n) {
            n.d(t, {
                AA: function() {
                    return M
                },
                Ae: function() {
                    return m
                },
                BC: function() {
                    return w
                },
                F4: function() {
                    return g
                },
                JP: function() {
                    return k
                },
                Q7: function() {
                    return b
                },
                WD: function() {
                    return v
                },
                gL: function() {
                    return p
                },
                iZ: function() {
                    return y
                },
                j7: function() {
                    return j
                },
                kn: function() {
                    return x
                }
            });
            var a = n(96237),
                r = n(39324),
                i = n(71209),
                s = n(81949),
                o = n(78103),
                l = n(99486),
                c = n(24215),
                u = (0, o.ZP)(function() {
                    return {
                        messagesDevData: {},
                        activeNodeId: void 0,
                        ui: {
                            focusedNodeId: void 0
                        }
                    }
                }),
                d = u.getState,
                f = u.setState,
                g = function(e, t, n) {
                    f(function(s) {
                        return (0, i._)((0, r._)({}, s), {
                            activeNodeId: e,
                            ui: {
                                focusedNodeId: e
                            },
                            messagesDevData: (0, i._)((0, r._)({}, s.messagesDevData), (0, a._)({}, e, {
                                status: "active",
                                data: [],
                                model: t,
                                serverRequestId: n
                            }))
                        })
                    })
                },
                m = function(e, t) {
                    f(function(n) {
                        var o = n.messagesDevData[e];
                        return (0, i._)((0, r._)({}, n), {
                            activeNodeId: e,
                            messagesDevData: (0, i._)((0, r._)({}, n.messagesDevData), (0, a._)({}, e, (0, i._)((0, r._)({}, o), {
                                data: (0, s._)(o.data).concat([t])
                            })))
                        })
                    })
                },
                h = function(e, t) {
                    var n;
                    return null === (n = t.find(function(t) {
                        return t.id === e
                    })) || void 0 === n ? void 0 : n.value
                },
                p = function(e) {
                    var t = k(),
                        n = (0, c.Oq)(t[e].data),
                        a = {
                            model: t[e].model,
                            serverRequestId: t[e].serverRequestId,
                            countTokens: h(c.kd.TokenCount, n),
                            tsFirstToken: h(c.kd.FirstTokenLatency, n),
                            tsMaxTokenTime: h(c.kd.MaxTokenLatency, n),
                            tsMeanTokenWithoutFirst: h(c.kd.MeanTokenLatency, n),
                            tsMedianTokenWithoutFirst: h(c.kd.MedianTokenLatency, n),
                            tsMinTokenTime: h(c.kd.MinTokenLatency, n),
                            tsStdDevTokenTime: h(c.kd.StdDevTokenLatency, n),
                            tsP95TokenWithoutFirst: h(c.kd.P95TokenLatency, n),
                            tsP99TokenWithoutFirst: h(c.kd.P99TokenLatency, n),
                            tsTotalRequestTime: h(c.kd.TotalRequestTime, n)
                        };
                    l.ZP.postLatencyTimingEvent(a)
                },
                x = function(e) {
                    return f(function(t) {
                        var n = (0, i._)((0, r._)({}, t.messagesDevData[e]), {
                            status: "finished"
                        });
                        return (0, i._)((0, r._)({}, t), {
                            messagesDevData: (0, i._)((0, r._)({}, t.messagesDevData), (0, a._)({}, e, n))
                        })
                    })
                },
                v = function(e) {
                    return f(function(t) {
                        return (0, i._)((0, r._)({}, t), {
                            ui: (0, i._)((0, r._)({}, t.ui), {
                                focusedNodeId: e
                            })
                        })
                    })
                };

            function b(e) {
                var t = Object.keys(k()),
                    n = t.indexOf(e);
                if (-1 === n) throw Error("Key not found in object");
                var a = (n + 1) % t.length;
                return t[a]
            }

            function y(e) {
                var t = Object.keys(k()),
                    n = t.indexOf(e);
                if (-1 === n) throw Error("Key not found in object");
                var a = (n - 1 + t.length) % t.length;
                return t[a]
            }

            function j(e) {
                return Object.keys(k()).indexOf(e)
            }
            var w = function() {
                    return Object.keys(k()).length
                },
                k = function() {
                    return d().messagesDevData
                },
                M = function() {
                    return d().ui.focusedNodeId
                }
        },
        63857: function(e, t, n) {
            n.d(t, {
                Z: function() {
                    return g
                }
            });
            var a = n(4337),
                r = n(35250),
                i = n(95182),
                s = n.n(i),
                o = n(1454),
                l = n(21389),
                c = n(88327);

            function u() {
                var e = (0, a._)(["text-xs flex items-center justify-center gap-1"]);
                return u = function() {
                    return e
                }, e
            }

            function d() {
                var e = (0, a._)(["dark:text-white disabled:text-gray-300 dark:disabled:text-gray-400"]);
                return d = function() {
                    return e
                }, e
            }

            function f() {
                var e = (0, a._)(["flex-grow flex-shrink-0"]);
                return f = function() {
                    return e
                }, e
            }

            function g(e) {
                var t = e.currentPage,
                    n = e.onChangeIndex,
                    a = e.length,
                    i = e.className,
                    l = function(e) {
                        n(s()(t + e, 0, a - 1))
                    };
                return (0, r.jsxs)(m, {
                    className: i,
                    children: [(0, r.jsx)(h, {
                        onClick: function() {
                            return l(-1)
                        },
                        disabled: 0 === t,
                        children: (0, r.jsx)(c.ZP, {
                            size: "xsmall",
                            icon: o.YFh
                        })
                    }), (0, r.jsx)(p, {
                        children: "".concat(t + 1, " / ").concat(a)
                    }), (0, r.jsx)(h, {
                        onClick: function() {
                            return l(1)
                        },
                        disabled: t === a - 1,
                        children: (0, r.jsx)(c.ZP, {
                            size: "xsmall",
                            icon: o.Tfp
                        })
                    })]
                })
            }
            var m = l.Z.div(u()),
                h = l.Z.button(d()),
                p = l.Z.span(f())
        },
        92720: function(e, t, n) {
            var a = n(39324),
                r = n(71209),
                i = n(70216),
                s = n(35250),
                o = n(47428),
                l = n(70079),
                c = n(89705),
                u = {
                    Root: o.fC,
                    Trigger: function(e) {
                        return (0, s.jsx)(c.J7, (0, a._)({
                            $as: o.xz
                        }, e))
                    },
                    Portal: o.Uv,
                    Content: function(e) {
                        return (0, s.jsx)(c.ay, (0, a._)({
                            $as: o.VY,
                            sideOffset: 4,
                            align: "start"
                        }, e))
                    },
                    Item: l.forwardRef(function(e, t) {
                        var n = e.children,
                            l = e.onSelect,
                            u = (0, i._)(e, ["children", "onSelect"]);
                        return (0, s.jsx)(c.mS, (0, r._)((0, a._)({
                            $as: o.ck,
                            ref: t,
                            onSelect: l
                        }, u), {
                            children: n
                        }))
                    })
                };
            t.Z = u
        },
        7614: function(e, t, n) {
            n.d(t, {
                I: function() {
                    return m
                },
                Z: function() {
                    return u
                }
            });
            var a = n(4337),
                r = n(35250),
                i = n(21389);

            function s() {
                var e = (0, a._)(["flex p-4 bg-gray-50 dark:bg-white/5 rounded-md items-center gap-4 min-h-[71px]"]);
                return s = function() {
                    return e
                }, e
            }

            function o() {
                var e = (0, a._)(["w-10 text-2xl text-center"]);
                return o = function() {
                    return e
                }, e
            }

            function l() {
                var e = (0, a._)(["flex-1 leading-5"]);
                return l = function() {
                    return e
                }, e
            }

            function c() {
                var e = (0, a._)(["flex gap-4 flex-col text-sm"]);
                return c = function() {
                    return e
                }, e
            }

            function u(e) {
                var t = e.icon,
                    n = e.children;
                return (0, r.jsxs)(d, {
                    children: [(0, r.jsx)(f, {
                        children: t
                    }), (0, r.jsx)(g, {
                        children: n
                    })]
                })
            }
            var d = i.Z.div(s()),
                f = i.Z.div(o()),
                g = i.Z.div(l()),
                m = i.Z.div(c())
        },
        10664: function(e, t, n) {
            n.d(t, {
                A3: function() {
                    return N
                },
                yx: function() {
                    return D
                },
                JS: function() {
                    return I
                }
            });
            var a, r, i, s = n(96237),
                o = n(39324),
                l = n(81949),
                c = n(15858),
                u = n(61888),
                d = n(70079),
                f = n(11084),
                g = n(82534),
                m = n(50795),
                h = n(82081),
                p = n(95954),
                x = n(32566),
                v = n(88798),
                b = n(32877),
                y = n(31621),
                j = n(46020),
                w = n(78931),
                k = n(52787),
                M = n(45248),
                C = d.useLayoutEffect,
                _ = RegExp("```.*?\\n([\\s\\S]+?)\\n?```[^`]*$", "gms");
            (a = r || (r = {})).Core = "Core", a.Chat = "Chat", a.Settings = "Settings";
            var T = (0, o._)({
                    Mod: "mod",
                    Comma: ","
                }, c.s),
                P = (i = {}, (0, s._)(i, T.Mod, /Mac|iPod|iPhone|iPad/.test(window.navigator.platform) ? "⌘" : "Ctrl"), (0, s._)(i, T.Comma, ","), (0, s._)(i, T.Enter, "⏎"), (0, s._)(i, T.Escape, "Esc"), (0, s._)(i, T.ArrowUp, "↑"), (0, s._)(i, T.ArrowDown, "↓"), (0, s._)(i, T.ArrowLeft, "←"), (0, s._)(i, T.ArrowRight, "→"), (0, s._)(i, T.Backspace, "⌫"), (0, s._)(i, T.Delete, "⌦"), (0, s._)(i, T.Tab, "⇥"), (0, s._)(i, T.Control, "Ctrl"), (0, s._)(i, T.Shift, "Shift"), i),
                N = function(e) {
                    var t;
                    return e.map(function(e) {
                        return null !== (t = P[e]) && void 0 !== t ? t : e
                    })
                },
                S = function(e) {
                    var t = e.resetThreadAction,
                        n = e.clientThreadId,
                        a = e.features;
                    return [{
                        key: "newChat",
                        action: t || u.noop,
                        text: "Open new chat",
                        group: r.Core,
                        keyboardBinding: [T.Mod, T.Shift, "o"]
                    }, {
                        key: "focusPromptTextarea",
                        action: x.g,
                        text: "Focus chat input",
                        group: r.Chat,
                        keyboardBinding: [T.Shift, T.Escape]
                    }, {
                        key: "copyLastCodeBlock",
                        action: function() {
                            if (null != n)
                                for (var e = y.tQ.getThreadCurrentLeafId(n), t = y.tQ.getThreadConversationTurns(n, e), a = t.length - 1; a >= 0; a--) {
                                    var r = t[a].messages.reduce(function(e, t) {
                                            return null == t.err && t.message.author.role === p.uU.Assistant && "all" === t.message.recipient ? e + (e ? "\n\n" : "") + (0, k.RR)(t.message) : e
                                        }, ""),
                                        i = (0, l._)(r.matchAll(_)),
                                        s = i.length ? i[i.length - 1][1] : null;
                                    if (null != s) {
                                        (0, f.S)(s).then(function() {
                                            v.m.success("Copied code block to clipboard")
                                        });
                                        break
                                    }
                                }
                        },
                        text: "Copy last code block",
                        group: r.Chat,
                        keyboardBinding: [T.Mod, T.Shift, ";"],
                        altKeyboardBindings: [
                            [T.Mod, T.Shift, ":"]
                        ]
                    }, {
                        key: "copyLastResponse",
                        action: function() {
                            null != n && y.tQ.copyLastMessageToClipboard(n, "keyboard").then(function() {
                                v.m.success("Last response copied to clipboard")
                            })
                        },
                        text: "Copy last response",
                        group: r.Chat,
                        keyboardBinding: [T.Mod, T.Shift, "c"]
                    }, {
                        key: "toggleCustomInstructions",
                        action: function() {
                            return j.vm.toggleModal(j.B.UserContext)
                        },
                        text: "Set custom instructions",
                        group: r.Settings,
                        keyboardBinding: [T.Mod, T.Shift, "i"],
                        enabled: a.has(b.Rw) || a.has(b.uo)
                    }, {
                        key: "navigationToggle",
                        action: function() {
                            return j.vm.toggleDesktopNavCollapsed()
                        },
                        text: "Toggle sidebar",
                        group: r.Core,
                        keyboardBinding: [T.Mod, T.Shift, "s"]
                    }, {
                        key: "deleteChat",
                        action: function() {
                            return j.vm.toggleModal(j.B.DeleteChatConfirmation)
                        },
                        text: "Delete chat",
                        group: r.Chat,
                        keyboardBinding: [T.Mod, T.Shift, T.Backspace],
                        altKeyboardBindings: [
                            [T.Mod, T.Shift, T.Delete]
                        ]
                    }, {
                        key: "toggleKeyboardActions",
                        action: function() {
                            return j.vm.toggleModal(j.B.KeyboardActions)
                        },
                        text: "Show shortcuts",
                        group: r.Settings,
                        keyboardBinding: [T.Mod, "/"]
                    }]
                },
                Z = function(e) {
                    var t, n, a, r = (0, w.hz)().has(b.rk);
                    return t = function(e) {
                        m.o.logEvent(h.a.keyboardShortcut, {
                            keyboardActionKey: e.key
                        }), g.U.addAction("chatgpt_keyboard_shortcut", {
                            keyboardActionKey: e.key
                        })
                    }, n = {
                        enabled: r
                    }, a = e.map(function(e) {
                        var t = e.keyboardBinding.join("+");
                        if (e.altKeyboardBindings) {
                            t = [t];
                            var n = e.altKeyboardBindings.map(function(e) {
                                return e.join("+")
                            });
                            t = t.concat(n)
                        }
                        return (0, M.ZP)(t, {
                            byKey: !0
                        })
                    }), void C(function() {
                        if ((null == n ? void 0 : n.enabled) !== !1) {
                            var r = function(n) {
                                    if (!n.repeat)
                                        for (var r = 0; r < a.length; r++) a[r](n) && (void 0 === e[r].enabled || e[r].enabled) && (n.preventDefault(), t(e[r]), e[r].action())
                                },
                                i = function(e) {
                                    void 0 !== e.key && r(e)
                                },
                                s = document;
                            return s.addEventListener("keydown", i),
                                function() {
                                    s.removeEventListener("keydown", i)
                                }
                        }
                    }, [e, n])
                },
                I = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        t = e.resetThreadAction,
                        n = e.clientThreadId,
                        a = (0, w.hz)();
                    return (0, d.useMemo)(function() {
                        return S({
                            features: a,
                            resetThreadAction: t,
                            clientThreadId: n
                        }).filter(function(e) {
                            var t = e.enabled;
                            return void 0 === t || t
                        })
                    }, [n, a, t])
                },
                D = function(e) {
                    Z(I({
                        resetThreadAction: e.resetThreadAction,
                        clientThreadId: e.clientThreadId
                    }))
                }
        },
        21817: function(e, t, n) {
            n.d(t, {
                Z: function() {
                    return r
                }
            });
            var a = n(70079);

            function r() {
                var e = (0, a.useRef)([]),
                    t = (0, a.useRef)(function(t, n) {
                        var a = setTimeout(t, n);
                        return e.current.push(a), a
                    });
                return (0, a.useEffect)(function() {
                    var t = e.current;
                    return function() {
                        t.forEach(function(e) {
                            clearTimeout(e)
                        })
                    }
                }, []), t.current
            }
        }
    }
]);