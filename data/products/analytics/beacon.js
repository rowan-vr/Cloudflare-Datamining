! function() {
	var e = {
			343: function(e) {
				"use strict";
				for (var t = [], n = 0; n < 256; ++n) t[n] = (n + 256).toString(16).substr(1);
				e.exports = function(e, n) {
					var r = n || 0,
						i = t;
					return [i[e[r++]], i[e[r++]], i[e[r++]], i[e[r++]], "-", i[e[r++]], i[e[r++]], "-", i[e[r++]], i[e[r++]], "-", i[e[r++]], i[e[r++]], "-", i[e[r++]], i[e[r++]], i[e[r++]], i[e[r++]], i[e[r++]], i[e[r++]]].join("")
				}
			},
			944: function(e) {
				"use strict";
				var t = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || "undefined" != typeof msCrypto && "function" == typeof window.msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto);
				if (t) {
					var n = new Uint8Array(16);
					e.exports = function() {
						return t(n), n
					}
				} else {
					var r = new Array(16);
					e.exports = function() {
						for (var e, t = 0; t < 16; t++) 0 == (3 & t) && (e = 4294967296 * Math.random()), r[t] = e >>> ((3 & t) << 3) & 255;
						return r
					}
				}
			},
			508: function(e, t, n) {
				"use strict";
				var r = n(944),
					i = n(343);
				e.exports = function(e, t, n) {
					var o = t && n || 0;
					"string" == typeof e && (t = "binary" === e ? new Array(16) : null, e = null);
					var a = (e = e || {}).random || (e.rng || r)();
					if (a[6] = 15 & a[6] | 64, a[8] = 63 & a[8] | 128, t)
						for (var c = 0; c < 16; ++c) t[o + c] = a[c];
					return t || i(a)
				}
			},
			168: function(e, t, n) {
				"use strict";
				var r = this && this.__assign || function() {
					return r = Object.assign || function(e) {
						for (var t, n = 1, r = arguments.length; n < r; n++)
							for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
						return e
					}, r.apply(this, arguments)
				};
				t.__esModule = !0;
				var i = n(699),
					o = n(752),
					a = n(104),
					c = n(508);
				! function() {
					function e(e) {
						var t = "";
						if (t = window.location.origin ? window.location.origin : "".concat(window.location.protocol, "://").concat(window.location.host), e && "string" == typeof e)
							if (0 === e.indexOf("/")) t += e;
							else try {
								var n = new URL(e);
								return "".concat(n.protocol, "://").concat(n.host).concat(n.pathname)
							} catch (e) {} else {
								var r = window.location.pathname;
								r && r.length > 0 && (t += r)
							}
						return t
					}

					function t(e) {
						return null == e ? void 0 : Math.round(1e3 * e) / 1e3
					}

					function n(e, t) {
						for (var n in e) {
							var r = e[n];
							void 0 !== t && ("number" == typeof r || "string" == typeof r ? t[n] = r : Array.isArray(r) && (t[n] = JSON.parse(JSON.stringify(r))))
						}
					}! function() {
						var u, s, f = window.performance || window.webkitPerformance || window.msPerformance || window.mozPerformance,
							d = "data-cf-beacon",
							l = document.currentScript || ("function" == typeof document.querySelector ? document.querySelector("script[".concat(d, "]")) : void 0),
							v = c(),
							p = [],
							m = window.__cfBeacon ? window.__cfBeacon : {};
						if (!m || "single" !== m.load) {
							if (l) {
								var g = l.getAttribute(d);
								if (g) try {
									m = r(r({}, m), JSON.parse(g))
								} catch (e) {} else {
									var y = l.getAttribute("src");
									if (y && "function" == typeof URLSearchParams) {
										var h = new URLSearchParams(y.replace(/^[^\?]+\??/, "")),
											T = h.get("token");
										T && (m.token = T);
										var w = h.get("spa");
										m.spa = null === w || "true" === w
									}
								}
								m && "multi" !== m.load && (m.load = "single"), window.__cfBeacon = m
							}
							if (f && m && m.token) {
								var S, b = !1;
								document.addEventListener("visibilitychange", (function() {
									if ("hidden" === document.visibilityState) {
										if (L && A()) {
											var t = e();
											(null == S ? void 0 : S.url) == t && (null == S ? void 0 : S.triggered) || P(), O(t)
										}!b && S && (b = !0, R())
									} else "visible" === document.visibilityState && (new Date).getTime()
								}));
								var E = {};
								"function" == typeof PerformanceObserver && ((0, a.onLCP)(_), (0, a.onFID)(_), (0, a.onFCP)(_), (0, a.onINP)(_), (0, a.onTTFB)(_), PerformanceObserver.supportedEntryTypes && PerformanceObserver.supportedEntryTypes.includes("layout-shift") && (0, a.onCLS)(_));
								var L = m && (void 0 === m.spa || !0 === m.spa),
									C = m.send && m.send.to ? m.send.to : void 0 === m.version ? "https://cloudflareinsights.com/cdn-cgi/rum" : null,
									P = function(r) {
										var a = function(e, t) {
												c.resources = e, 0 != t && (c.bypassTiming = !0), m && (1 === m.r && (c.resources = []), (0, o.sendObjectBeacon)("", c, (function() {}), !1, C), void 0 !== m.forward && void 0 !== m.forward.url && (0, o.sendObjectBeacon)("", c, (function() {}), !1, m.forward.url))
											},
											c = function(r) {
												var o, a, c, s = f.timing,
													d = f.memory,
													l = r || e(),
													g = {
														memory: {},
														timings: {},
														resources: [],
														tempResources: [],
														referrer: (a = document.referrer || "", c = p[p.length - 1], L && S && c ? c.url : a),
														eventType: i.EventType.Load,
														firstPaint: 0,
														firstContentfulPaint: 0,
														startTime: x(),
														versions: {
															fl: m ? m.version : "",
															js: "2023.7.1",
															timings: 1
														},
														pageloadId: v,
														location: l,
														wd: k(),
														b: m.b
													};
												if (null == u) {
													if ("function" == typeof f.getEntriesByType) {
														var y = f.getEntriesByType("navigation");
														y && Array.isArray(y) && y.length > 0 && (g.timingsV2 = {}, g.versions.timings = 2, delete g.timings, n(y[0], g.timingsV2))
													}
													1 === g.versions.timings && n(s, g.timings), n(d, g.memory)
												} else M(g);
												if (g.firstPaint = N("first-paint"), g.firstContentfulPaint = N("first-contentful-paint"), m && (m.icTag && (g.icTag = m.icTag), g.siteToken = m.token), "function" == typeof f.getEntriesByType) {
													var h = null !== (o = f.getEntriesByType("resource")) && void 0 !== o ? o : [],
														T = 0,
														w = 0;
													h.forEach((function(e) {
														var n = {
															n: e.name,
															s: t(e.startTime),
															d: t(e.duration),
															i: e.initiatorType,
															p: e.nextHopProtocol,
															rs: t(e.redirectStart),
															re: t(e.redirectEnd),
															fs: t(e.fetchStart),
															ds: t(e.domainLookupStart),
															de: t(e.domainLookupEnd),
															cs: t(e.connectStart),
															ce: t(e.connectEnd),
															qs: t(e.requestStart),
															ps: t(e.responseStart),
															pe: t(e.responseEnd),
															ws: t(e.workerStart),
															ss: t(e.secureConnectionStart),
															ts: e.transferSize,
															ec: e.encodedBodySize,
															dc: e.decodedBodySize
														};
														g.tempResources && void 0 === g.tempResources[w] && (g.tempResources[w] = []);
														var r = JSON.stringify(n).length;
														T + r < 62e3 && g.tempResources ? (T += r, g.tempResources[w].push(n)) : (w++, T = 0)
													}))
												}
												return JSON.stringify(g).length >= 64e3 && (g.resources = []), void 0 !== u && (delete g.timings, delete g.memory), g
											}(r);
										if (c && m) {
											var s = c.tempResources;
											if (delete c.tempResources, L && s && 0 === s.length && a([], 0), !s) return;
											s.forEach((function(e, t) {
												a(e, t)
											}))
										}
									},
									R = function() {
										var t = function() {
											var t = f.getEntriesByType("navigation")[0],
												n = "";
											try {
												n = "function" == typeof f.getEntriesByType ? new URL(null == t ? void 0 : t.name).pathname : s ? new URL(s).pathname : window.location.pathname
											} catch (e) {}
											var r = {
												referrer: document.referrer || "",
												eventType: i.EventType.WebVitalsV2,
												versions: {
													js: "2023.7.1"
												},
												pageloadId: v,
												location: e(),
												landingPath: n,
												startTime: x(),
												wd: k(),
												b: m.b
											};
											return m && (m.version && (r.versions.fl = m.version), m.icTag && (r.icTag = m.icTag), r.siteToken = m.token), E && ["lcp", "fid", "cls", "fcp", "ttfb", "inp"].forEach((function(e) {
												r[e] = {
													value: -1,
													path: void 0
												}, E[e] && void 0 !== E[e].value && (r[e] = E[e])
											})), M(r), r
										}();
										L || (t.resources = [], delete t.tempResources), m && (0, o.sendObjectBeacon)("", t, (function() {}), !0, C)
									},
									B = function() {
										var t = window.__cfRl && window.__cfRl.done || window.__cfQR && window.__cfQR.done;
										t ? t.then(P) : P(), S = {
											id: v,
											url: e(),
											ts: (new Date).getTime(),
											triggered: !0
										}
									};
								"complete" === window.document.readyState ? B() : window.addEventListener("load", (function() {
									window.setTimeout(B)
								}));
								var A = function() {
										return L && 0 === p.filter((function(e) {
											return e.id === v
										})).length
									},
									O = function(e) {
										p.push({
											id: v,
											url: e,
											ts: (new Date).getTime()
										}), p.length > 3 && p.shift()
									};
								L && (s = e(), function(t) {
									var n = t.pushState;
									if (n) {
										var r = function() {
											v = c(), "function" == typeof f.clearResourceTimings && f.clearResourceTimings()
										};
										t.pushState = function(i, o, a) {
											u = e(a);
											var c = e(),
												s = !0;
											return u == c && (s = !1), s && (A() && ((null == S ? void 0 : S.url) == c && (null == S ? void 0 : S.triggered) || P(c), O(c)), r()), n.apply(t, [i, o, a])
										}, window.addEventListener("popstate", (function(t) {
											A() && ((null == S ? void 0 : S.url) == u && (null == S ? void 0 : S.triggered) || P(u), O(u)), u = e(), r()
										}))
									}
								}(window.history))
							}
						}

						function _(e) {
							var t, n, r, i, o, a, c, u = window.location.pathname;
							switch ("INP" !== e.name && (E[e.name.toLowerCase()] = {
									value: e.value,
									path: u
								}), e.name) {
								case "CLS":
									(c = e.attribution) && E.cls && (E.cls.element = c.largestShiftTarget, E.cls.currentRect = null === (t = c.largestShiftSource) || void 0 === t ? void 0 : t.currentRect, E.cls.previousRect = null === (n = c.largestShiftSource) || void 0 === n ? void 0 : n.previousRect);
									break;
								case "FID":
									(c = e.attribution) && E.fid && (E.fid.element = c.eventTarget, E.fid.name = c.eventType);
									break;
								case "LCP":
									(c = e.attribution) && E.lcp && (E.lcp.element = c.element, E.lcp.size = null === (r = c.lcpEntry) || void 0 === r ? void 0 : r.size, E.lcp.url = c.url, E.lcp.rld = c.resourceLoadDelay, E.lcp.rlt = c.resourceLoadTime, E.lcp.erd = c.elementRenderDelay, E.lcp.it = null === (i = c.lcpResourceEntry) || void 0 === i ? void 0 : i.initiatorType, E.lcp.fp = null === (a = null === (o = c.lcpEntry) || void 0 === o ? void 0 : o.element) || void 0 === a ? void 0 : a.getAttribute("fetchpriority"));
									break;
								case "INP":
									(null == E.inp || Number(E.inp.value) < Number(e.value)) && (E.inp = {
										value: Number(e.value),
										path: u
									}, (c = e.attribution) && E.inp && (E.inp.element = c.eventTarget, E.inp.name = c.eventType))
							}
						}

						function x() {
							return f.timeOrigin
						}

						function k() {
							return navigator.webdriver
						}

						function M(e) {
							if ("function" == typeof f.getEntriesByType) {
								var t = f.getEntriesByType("navigation"),
									r = {};
								e.timingsV2 = {}, t && t[0] && t[0].nextHopProtocol && (r.nextHopProtocol = t[0].nextHopProtocol), n(r, e.timingsV2)
							}
						}

						function N(e) {
							var t;
							if ("first-contentful-paint" === e && E.fcp && E.fcp.value) return E.fcp.value;
							if ("function" == typeof f.getEntriesByType) {
								var n = null === (t = f.getEntriesByType("paint")) || void 0 === t ? void 0 : t.filter((function(t) {
									return t.name === e
								}))[0];
								return n ? n.startTime : 0
							}
							return 0
						}
					}()
				}()
			},
			752: function(e, t) {
				"use strict";
				t.__esModule = !0, t.sendObjectBeacon = void 0, t.sendObjectBeacon = function(e, t, n, r, i) {
					void 0 === r && (r = !1), void 0 === i && (i = null);
					var o = i || (t.siteToken && t.versions.fl ? "/cdn-cgi/rum?".concat(e) : "/cdn-cgi/beacon/performance?".concat(e)),
						a = !0;
					if (navigator && "string" == typeof navigator.userAgent) try {
						var c = navigator.userAgent.match(/Chrome\/([0-9]+)/);
						c && c[0].toLowerCase().indexOf("chrome") > -1 && parseInt(c[1]) < 81 && (a = !1)
					} catch (e) {}
					if (navigator && "function" == typeof navigator.sendBeacon && a && r) {
						t.st = 1;
						var u = JSON.stringify(t),
							s = navigator.sendBeacon && navigator.sendBeacon.bind(navigator);
						null == s || s(o, new Blob([u], {
							type: "application/json"
						}))
					} else {
						t.st = 2, u = JSON.stringify(t);
						var f = new XMLHttpRequest;
						n && (f.onreadystatechange = function() {
							4 == this.readyState && 204 == this.status && n()
						}), f.open("POST", o, !0), f.setRequestHeader("content-type", "application/json"), f.send(u)
					}
				}
			},
			699: function(e, t) {
				"use strict";
				var n, r;
				t.__esModule = !0, t.FetchPriority = t.EventType = void 0, (r = t.EventType || (t.EventType = {}))[r.Load = 1] = "Load", r[r.Additional = 2] = "Additional", r[r.WebVitalsV2 = 3] = "WebVitalsV2", (n = t.FetchPriority || (t.FetchPriority = {})).High = "high", n.Low = "low", n.Auto = "auto"
			},
			104: function(e, t) {
				! function(e) {
					"use strict";
					var t, n, r, i, o, a = function() {
							return window.performance && performance.getEntriesByType && performance.getEntriesByType("navigation")[0]
						},
						c = function(e) {
							if ("loading" === document.readyState) return "loading";
							var t = a();
							if (t) {
								if (e < t.domInteractive) return "loading";
								if (0 === t.domContentLoadedEventStart || e < t.domContentLoadedEventStart) return "dom-interactive";
								if (0 === t.domComplete || e < t.domComplete) return "dom-content-loaded"
							}
							return "complete"
						},
						u = function(e) {
							var t = e.nodeName;
							return 1 === e.nodeType ? t.toLowerCase() : t.toUpperCase().replace(/^#/, "")
						},
						s = function(e, t) {
							var n = "";
							try {
								for (; e && 9 !== e.nodeType;) {
									var r = e,
										i = r.id ? "#" + r.id : u(r) + (r.className && r.className.length ? "." + r.className.replace(/\s+/g, ".") : "");
									if (n.length + i.length > (t || 100) - 1) return n || i;
									if (n = n ? i + ">" + n : i, r.id) break;
									e = r.parentNode
								}
							} catch (e) {}
							return n
						},
						f = -1,
						d = function() {
							return f
						},
						l = function(e) {
							addEventListener("pageshow", (function(t) {
								t.persisted && (f = t.timeStamp, e(t))
							}), !0)
						},
						v = function() {
							var e = a();
							return e && e.activationStart || 0
						},
						p = function(e, t) {
							var n = a(),
								r = "navigate";
							return d() >= 0 ? r = "back-forward-cache" : n && (r = document.prerendering || v() > 0 ? "prerender" : document.wasDiscarded ? "restore" : n.type.replace(/_/g, "-")), {
								name: e,
								value: void 0 === t ? -1 : t,
								rating: "good",
								delta: 0,
								entries: [],
								id: "v3-".concat(Date.now(), "-").concat(Math.floor(8999999999999 * Math.random()) + 1e12),
								navigationType: r
							}
						},
						m = function(e, t, n) {
							try {
								if (PerformanceObserver.supportedEntryTypes.includes(e)) {
									var r = new PerformanceObserver((function(e) {
										Promise.resolve().then((function() {
											t(e.getEntries())
										}))
									}));
									return r.observe(Object.assign({
										type: e,
										buffered: !0
									}, n || {})), r
								}
							} catch (e) {}
						},
						g = function(e, t, n, r) {
							var i, o;
							return function(a) {
								t.value >= 0 && (a || r) && ((o = t.value - (i || 0)) || void 0 === i) && (i = t.value, t.delta = o, t.rating = function(e, t) {
									return e > t[1] ? "poor" : e > t[0] ? "needs-improvement" : "good"
								}(t.value, n), e(t))
							}
						},
						y = function(e) {
							requestAnimationFrame((function() {
								return requestAnimationFrame((function() {
									return e()
								}))
							}))
						},
						h = function(e) {
							var t = function(t) {
								"pagehide" !== t.type && "hidden" !== document.visibilityState || e(t)
							};
							addEventListener("visibilitychange", t, !0), addEventListener("pagehide", t, !0)
						},
						T = function(e) {
							var t = !1;
							return function(n) {
								t || (e(n), t = !0)
							}
						},
						w = -1,
						S = function() {
							return "hidden" !== document.visibilityState || document.prerendering ? 1 / 0 : 0
						},
						b = function(e) {
							"hidden" === document.visibilityState && w > -1 && (w = "visibilitychange" === e.type ? e.timeStamp : 0, L())
						},
						E = function() {
							addEventListener("visibilitychange", b, !0), addEventListener("prerenderingchange", b, !0)
						},
						L = function() {
							removeEventListener("visibilitychange", b, !0), removeEventListener("prerenderingchange", b, !0)
						},
						C = function() {
							return w < 0 && (w = S(), E(), l((function() {
								setTimeout((function() {
									w = S(), E()
								}), 0)
							}))), {
								get firstHiddenTime() {
									return w
								}
							}
						},
						P = function(e) {
							document.prerendering ? addEventListener("prerenderingchange", (function() {
								return e()
							}), !0) : e()
						},
						R = function(e, t) {
							t = t || {}, P((function() {
								var n, r = [1800, 3e3],
									i = C(),
									o = p("FCP"),
									a = m("paint", (function(e) {
										e.forEach((function(e) {
											"first-contentful-paint" === e.name && (a.disconnect(), e.startTime < i.firstHiddenTime && (o.value = Math.max(e.startTime - v(), 0), o.entries.push(e), n(!0)))
										}))
									}));
								a && (n = g(e, o, r, t.reportAllChanges), l((function(i) {
									o = p("FCP"), n = g(e, o, r, t.reportAllChanges), y((function() {
										o.value = performance.now() - i.timeStamp, n(!0)
									}))
								})))
							}))
						},
						B = {
							passive: !0,
							capture: !0
						},
						A = new Date,
						O = function(e, i) {
							t || (t = i, n = e, r = new Date, k(removeEventListener), _())
						},
						_ = function() {
							if (n >= 0 && n < r - A) {
								var e = {
									entryType: "first-input",
									name: t.type,
									target: t.target,
									cancelable: t.cancelable,
									startTime: t.timeStamp,
									processingStart: t.timeStamp + n
								};
								i.forEach((function(t) {
									t(e)
								})), i = []
							}
						},
						x = function(e) {
							if (e.cancelable) {
								var t = (e.timeStamp > 1e12 ? new Date : performance.now()) - e.timeStamp;
								"pointerdown" == e.type ? function(e, t) {
									var n = function() {
											O(e, t), i()
										},
										r = function() {
											i()
										},
										i = function() {
											removeEventListener("pointerup", n, B), removeEventListener("pointercancel", r, B)
										};
									addEventListener("pointerup", n, B), addEventListener("pointercancel", r, B)
								}(t, e) : O(t, e)
							}
						},
						k = function(e) {
							["mousedown", "keydown", "touchstart", "pointerdown"].forEach((function(t) {
								return e(t, x, B)
							}))
						},
						M = function(e, r) {
							r = r || {}, P((function() {
								var o, a = [100, 300],
									c = C(),
									u = p("FID"),
									s = function(e) {
										e.startTime < c.firstHiddenTime && (u.value = e.processingStart - e.startTime, u.entries.push(e), o(!0))
									},
									f = function(e) {
										e.forEach(s)
									},
									d = m("first-input", f);
								o = g(e, u, a, r.reportAllChanges), d && h(T((function() {
									f(d.takeRecords()), d.disconnect()
								}))), d && l((function() {
									var c;
									u = p("FID"), o = g(e, u, a, r.reportAllChanges), i = [], n = -1, t = null, k(addEventListener), c = s, i.push(c), _()
								}))
							}))
						},
						N = 0,
						F = 1 / 0,
						I = 0,
						D = function(e) {
							e.forEach((function(e) {
								e.interactionId && (F = Math.min(F, e.interactionId), I = Math.max(I, e.interactionId), N = I ? (I - F) / 7 + 1 : 0)
							}))
						},
						V = function() {
							return o ? N : performance.interactionCount || 0
						},
						j = function() {
							"interactionCount" in performance || o || (o = m("event", D, {
								type: "event",
								buffered: !0,
								durationThreshold: 0
							}))
						},
						q = 0,
						H = function() {
							return V() - q
						},
						J = [],
						U = {},
						z = function(e) {
							var t = J[J.length - 1],
								n = U[e.interactionId];
							if (n || J.length < 10 || e.duration > t.latency) {
								if (n) n.entries.push(e), n.latency = Math.max(n.latency, e.duration);
								else {
									var r = {
										id: e.interactionId,
										latency: e.duration,
										entries: [e]
									};
									U[r.id] = r, J.push(r)
								}
								J.sort((function(e, t) {
									return t.latency - e.latency
								})), J.splice(10).forEach((function(e) {
									delete U[e.id]
								}))
							}
						},
						W = {},
						Q = function e(t) {
							document.prerendering ? P((function() {
								return e(t)
							})) : "complete" !== document.readyState ? addEventListener("load", (function() {
								return e(t)
							}), !0) : setTimeout(t, 0)
						},
						X = function(e, t) {
							t = t || {};
							var n = [800, 1800],
								r = p("TTFB"),
								i = g(e, r, n, t.reportAllChanges);
							Q((function() {
								var o = a();
								if (o) {
									var c = o.responseStart;
									if (c <= 0 || c > performance.now()) return;
									r.value = Math.max(c - v(), 0), r.entries = [o], i(!0), l((function() {
										r = p("TTFB", 0), (i = g(e, r, n, t.reportAllChanges))(!0)
									}))
								}
							}))
						};
					e.onCLS = function(e, t) {
						! function(e, t) {
							t = t || {}, R(T((function() {
								var n, r = [.1, .25],
									i = p("CLS", 0),
									o = 0,
									a = [],
									c = function(e) {
										e.forEach((function(e) {
											if (!e.hadRecentInput) {
												var t = a[0],
													n = a[a.length - 1];
												o && e.startTime - n.startTime < 1e3 && e.startTime - t.startTime < 5e3 ? (o += e.value, a.push(e)) : (o = e.value, a = [e])
											}
										})), o > i.value && (i.value = o, i.entries = a, n())
									},
									u = m("layout-shift", c);
								u && (n = g(e, i, r, t.reportAllChanges), h((function() {
									c(u.takeRecords()), n(!0)
								})), l((function() {
									o = 0, i = p("CLS", 0), n = g(e, i, r, t.reportAllChanges), y((function() {
										return n()
									}))
								})), setTimeout(n, 0))
							})))
						}((function(t) {
							! function(e) {
								if (e.entries.length) {
									var t = e.entries.reduce((function(e, t) {
										return e && e.value > t.value ? e : t
									}));
									if (t && t.sources && t.sources.length) {
										var n = (r = t.sources).find((function(e) {
											return e.node && 1 === e.node.nodeType
										})) || r[0];
										if (n) return void(e.attribution = {
											largestShiftTarget: s(n.node),
											largestShiftTime: t.startTime,
											largestShiftValue: t.value,
											largestShiftSource: n,
											largestShiftEntry: t,
											loadState: c(t.startTime)
										})
									}
								}
								var r;
								e.attribution = {}
							}(t), e(t)
						}), t)
					}, e.onFCP = function(e, t) {
						R((function(t) {
							! function(e) {
								if (e.entries.length) {
									var t = a(),
										n = e.entries[e.entries.length - 1];
									if (t) {
										var r = t.activationStart || 0,
											i = Math.max(0, t.responseStart - r);
										return void(e.attribution = {
											timeToFirstByte: i,
											firstByteToFCP: e.value - i,
											loadState: c(e.entries[0].startTime),
											navigationEntry: t,
											fcpEntry: n
										})
									}
								}
								e.attribution = {
									timeToFirstByte: 0,
									firstByteToFCP: e.value,
									loadState: c(d())
								}
							}(t), e(t)
						}), t)
					}, e.onFID = function(e, t) {
						M((function(t) {
							! function(e) {
								var t = e.entries[0];
								e.attribution = {
									eventTarget: s(t.target),
									eventType: t.name,
									eventTime: t.startTime,
									eventEntry: t,
									loadState: c(t.startTime)
								}
							}(t), e(t)
						}), t)
					}, e.onINP = function(e, t) {
						! function(e, t) {
							t = t || {}, P((function() {
								var n = [200, 500];
								j();
								var r, i = p("INP"),
									o = function(e) {
										e.forEach((function(e) {
											e.interactionId && z(e), "first-input" === e.entryType && !J.some((function(t) {
												return t.entries.some((function(t) {
													return e.duration === t.duration && e.startTime === t.startTime
												}))
											})) && z(e)
										}));
										var t, n = (t = Math.min(J.length - 1, Math.floor(H() / 50)), J[t]);
										n && n.latency !== i.value && (i.value = n.latency, i.entries = n.entries, r())
									},
									a = m("event", o, {
										durationThreshold: t.durationThreshold || 40
									});
								r = g(e, i, n, t.reportAllChanges), a && (a.observe({
									type: "first-input",
									buffered: !0
								}), h((function() {
									o(a.takeRecords()), i.value < 0 && H() > 0 && (i.value = 0, i.entries = []), r(!0)
								})), l((function() {
									J = [], q = V(), i = p("INP"), r = g(e, i, n, t.reportAllChanges)
								})))
							}))
						}((function(t) {
							! function(e) {
								if (e.entries.length) {
									var t = e.entries.sort((function(e, t) {
										return t.duration - e.duration || t.processingEnd - t.processingStart - (e.processingEnd - e.processingStart)
									}))[0];
									e.attribution = {
										eventTarget: s(t.target),
										eventType: t.name,
										eventTime: t.startTime,
										eventEntry: t,
										loadState: c(t.startTime)
									}
								} else e.attribution = {}
							}(t), e(t)
						}), t)
					}, e.onLCP = function(e, t) {
						! function(e, t) {
							t = t || {}, P((function() {
								var n, r = [2500, 4e3],
									i = C(),
									o = p("LCP"),
									a = function(e) {
										var t = e[e.length - 1];
										if (t) {
											var r = Math.max(t.startTime - v(), 0);
											r < i.firstHiddenTime && (o.value = r, o.entries = [t], n())
										}
									},
									c = m("largest-contentful-paint", a);
								if (c) {
									n = g(e, o, r, t.reportAllChanges);
									var u = T((function() {
										W[o.id] || (a(c.takeRecords()), c.disconnect(), W[o.id] = !0, n(!0))
									}));
									["keydown", "click"].forEach((function(e) {
										addEventListener(e, u, !0)
									})), h(u), l((function(i) {
										o = p("LCP"), n = g(e, o, r, t.reportAllChanges), y((function() {
											o.value = performance.now() - i.timeStamp, W[o.id] = !0, n(!0)
										}))
									}))
								}
							}))
						}((function(t) {
							! function(e) {
								if (e.entries.length) {
									var t = a();
									if (t) {
										var n = t.activationStart || 0,
											r = e.entries[e.entries.length - 1],
											i = r.url && performance.getEntriesByType("resource").filter((function(e) {
												return e.name === r.url
											}))[0],
											o = Math.max(0, t.responseStart - n),
											c = Math.max(o, i ? (i.requestStart || i.startTime) - n : 0),
											u = Math.max(c, i ? i.responseEnd - n : 0),
											f = Math.max(u, r ? r.startTime - n : 0),
											d = {
												element: s(r.element),
												timeToFirstByte: o,
												resourceLoadDelay: c - o,
												resourceLoadTime: u - c,
												elementRenderDelay: f - u,
												navigationEntry: t,
												lcpEntry: r
											};
										return r.url && (d.url = r.url), i && (d.lcpResourceEntry = i), void(e.attribution = d)
									}
								}
								e.attribution = {
									timeToFirstByte: 0,
									resourceLoadDelay: 0,
									resourceLoadTime: 0,
									elementRenderDelay: e.value
								}
							}(t), e(t)
						}), t)
					}, e.onTTFB = function(e, t) {
						X((function(t) {
							! function(e) {
								if (e.entries.length) {
									var t = e.entries[0],
										n = t.activationStart || 0,
										r = Math.max(t.domainLookupStart - n, 0),
										i = Math.max(t.connectStart - n, 0),
										o = Math.max(t.requestStart - n, 0);
									e.attribution = {
										waitingTime: r,
										dnsTime: i - r,
										connectionTime: o - i,
										requestTime: e.value - o,
										navigationEntry: t
									}
								} else e.attribution = {
									waitingTime: 0,
									dnsTime: 0,
									connectionTime: 0,
									requestTime: 0
								}
							}(t), e(t)
						}), t)
					}, Object.defineProperty(e, "__esModule", {
						value: !0
					})
				}(t)
			}
		},
		t = {};
	! function n(r) {
		var i = t[r];
		if (void 0 !== i) return i.exports;
		var o = t[r] = {
			exports: {}
		};
		return e[r].call(o.exports, o, o.exports, n), o.exports
	}(168)
}();