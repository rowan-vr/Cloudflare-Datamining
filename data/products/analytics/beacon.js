! function() {
	var e = {
			343: function(e) {
				"use strict";
				for (var t = [], n = 0; n < 256; ++n) t[n] = (n + 256).toString(16).substr(1);
				e.exports = function(e, n) {
					var i = n || 0,
						r = t;
					return [r[e[i++]], r[e[i++]], r[e[i++]], r[e[i++]], "-", r[e[i++]], r[e[i++]], "-", r[e[i++]], r[e[i++]], "-", r[e[i++]], r[e[i++]], "-", r[e[i++]], r[e[i++]], r[e[i++]], r[e[i++]], r[e[i++]], r[e[i++]]].join("")
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
					var i = new Array(16);
					e.exports = function() {
						for (var e, t = 0; t < 16; t++) 0 == (3 & t) && (e = 4294967296 * Math.random()), i[t] = e >>> ((3 & t) << 3) & 255;
						return i
					}
				}
			},
			508: function(e, t, n) {
				"use strict";
				var i = n(944),
					r = n(343);
				e.exports = function(e, t, n) {
					var o = t && n || 0;
					"string" == typeof e && (t = "binary" === e ? new Array(16) : null, e = null);
					var a = (e = e || {}).random || (e.rng || i)();
					if (a[6] = 15 & a[6] | 64, a[8] = 63 & a[8] | 128, t)
						for (var c = 0; c < 16; ++c) t[o + c] = a[c];
					return t || r(a)
				}
			},
			168: function(e, t, n) {
				"use strict";
				var i = this && this.__assign || function() {
					return i = Object.assign || function(e) {
						for (var t, n = 1, i = arguments.length; n < i; n++)
							for (var r in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
						return e
					}, i.apply(this, arguments)
				};
				t.__esModule = !0;
				var r = n(699),
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
								var i = window.location.pathname;
								i && i.length > 0 && (t += i)
							}
						return t
					}

					function t(e, t) {
						for (var n in e) {
							var i = e[n];
							void 0 !== t && ("number" == typeof i || "string" == typeof i ? t[n] = i : Array.isArray(i) && (t[n] = JSON.parse(JSON.stringify(i))))
						}
					}! function() {
						var n, u, s = window.performance || window.webkitPerformance || window.msPerformance || window.mozPerformance,
							f = "data-cf-beacon",
							d = document.currentScript || ("function" == typeof document.querySelector ? document.querySelector("script[".concat(f, "]")) : void 0),
							l = c(),
							v = [],
							p = window.__cfBeacon ? window.__cfBeacon : {};
						if (!p || "single" !== p.load) {
							if (d) {
								var m = d.getAttribute(f);
								if (m) try {
									p = i(i({}, p), JSON.parse(m))
								} catch (e) {} else {
									var g = d.getAttribute("src");
									if (g && "function" == typeof URLSearchParams) {
										var y = new URLSearchParams(g.replace(/^[^\?]+\??/, "")),
											h = y.get("token");
										h && (p.token = h);
										var T = y.get("spa");
										p.spa = null === T || "true" === T
									}
								}
								p && "multi" !== p.load && (p.load = "single"), window.__cfBeacon = p
							}
							if (s && p && p.token) {
								var w, S, b = !1;
								document.addEventListener("visibilitychange", (function() {
									if ("hidden" === document.visibilityState) {
										if (L && R()) {
											var t = e();
											(null == w ? void 0 : w.url) == t && (null == w ? void 0 : w.triggered) || P(), x(t)
										}!b && w && (b = !0, B())
									} else "visible" === document.visibilityState && (new Date).getTime()
								}));
								var E = {};
								"function" == typeof PerformanceObserver && ((0, a.onLCP)(F), (0, a.onFID)(F), (0, a.onFCP)(F), (0, a.onINP)(F), (0, a.onTTFB)(F), PerformanceObserver.supportedEntryTypes && PerformanceObserver.supportedEntryTypes.includes("layout-shift") && (0, a.onCLS)(F));
								var L = p && (void 0 === p.spa || !0 === p.spa),
									C = p.send && p.send.to ? p.send.to : void 0 === p.version ? "https://cloudflareinsights.com/cdn-cgi/rum" : null,
									P = function(i) {
										var a = function(i) {
											var o, a, c = s.timing,
												u = s.memory,
												f = i || e(),
												d = {
													memory: {},
													timings: {},
													resources: [],
													referrer: (o = document.referrer || "", a = v[v.length - 1], L && w && a ? a.url : o),
													eventType: r.EventType.Load,
													firstPaint: 0,
													firstContentfulPaint: 0,
													startTime: I(),
													versions: {
														fl: p ? p.version : "",
														js: "2024.5.0",
														timings: 1
													},
													pageloadId: l,
													location: f,
													nt: S
												};
											if (null == n) {
												if ("function" == typeof s.getEntriesByType) {
													var m = s.getEntriesByType("navigation");
													m && Array.isArray(m) && m.length > 0 && (d.timingsV2 = {}, d.versions.timings = 2, d.dt = m[0].deliveryType, delete d.timings, t(m[0], d.timingsV2))
												}
												1 === d.versions.timings && t(c, d.timings), t(u, d.memory)
											} else O(d);
											return d.firstPaint = _("first-paint"), d.firstContentfulPaint = _("first-contentful-paint"), p && (p.icTag && (d.icTag = p.icTag), d.siteToken = p.token), void 0 !== n && (delete d.timings, delete d.memory), d
										}(i);
										a && p && (a.resources = [], p && ((0, o.sendObjectBeacon)("", a, (function() {}), !1, C), void 0 !== p.forward && void 0 !== p.forward.url && (0, o.sendObjectBeacon)("", a, (function() {}), !1, p.forward.url)))
									},
									B = function() {
										var t = function() {
											var t = s.getEntriesByType("navigation")[0],
												n = "";
											try {
												n = "function" == typeof s.getEntriesByType ? new URL(null == t ? void 0 : t.name).pathname : u ? new URL(u).pathname : window.location.pathname
											} catch (e) {}
											var i = {
												referrer: document.referrer || "",
												eventType: r.EventType.WebVitalsV2,
												versions: {
													js: "2024.5.0"
												},
												pageloadId: l,
												location: e(),
												landingPath: n,
												startTime: I(),
												nt: S
											};
											return p && (p.version && (i.versions.fl = p.version), p.icTag && (i.icTag = p.icTag), i.siteToken = p.token), E && ["lcp", "fid", "cls", "fcp", "ttfb", "inp"].forEach((function(e) {
												i[e] = {
													value: -1,
													path: void 0
												}, E[e] && void 0 !== E[e].value && (i[e] = E[e])
											})), O(i), i
										}();
										p && (0, o.sendObjectBeacon)("", t, (function() {}), !0, C)
									},
									A = function() {
										var t = window.__cfRl && window.__cfRl.done || window.__cfQR && window.__cfQR.done;
										t ? t.then(P) : P(), w = {
											id: l,
											url: e(),
											ts: (new Date).getTime(),
											triggered: !0
										}
									};
								"complete" === window.document.readyState ? A() : window.addEventListener("load", (function() {
									window.setTimeout(A)
								}));
								var R = function() {
										return L && 0 === v.filter((function(e) {
											return e.id === l
										})).length
									},
									x = function(e) {
										v.push({
											id: l,
											url: e,
											ts: (new Date).getTime()
										}), v.length > 3 && v.shift()
									};
								L && (u = e(), function(t) {
									var i = t.pushState;
									if (i) {
										var r = function() {
											l = c()
										};
										t.pushState = function(o, a, c) {
											n = e(c);
											var u = e(),
												s = !0;
											return n == u && (s = !1), s && (R() && ((null == w ? void 0 : w.url) == u && (null == w ? void 0 : w.triggered) || P(u), x(u)), r()), i.apply(t, [o, a, c])
										}, window.addEventListener("popstate", (function(t) {
											R() && ((null == w ? void 0 : w.url) == n && (null == w ? void 0 : w.triggered) || P(n), x(n)), n = e(), r()
										}))
									}
								}(window.history))
							}
						}

						function F(e) {
							var t, n, i, r, o, a, c, u = window.location.pathname;
							switch (S || (S = e.navigationType), "INP" !== e.name && (E[e.name.toLowerCase()] = {
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
									(c = e.attribution) && E.lcp && (E.lcp.element = c.element, E.lcp.size = null === (i = c.lcpEntry) || void 0 === i ? void 0 : i.size, E.lcp.url = c.url, E.lcp.rld = c.resourceLoadDelay, E.lcp.rlt = c.resourceLoadTime, E.lcp.erd = c.elementRenderDelay, E.lcp.it = null === (r = c.lcpResourceEntry) || void 0 === r ? void 0 : r.initiatorType, E.lcp.fp = null === (a = null === (o = c.lcpEntry) || void 0 === o ? void 0 : o.element) || void 0 === a ? void 0 : a.getAttribute("fetchpriority"));
									break;
								case "INP":
									(null == E.inp || Number(E.inp.value) < Number(e.value)) && (E.inp = {
										value: Number(e.value),
										path: u
									}, (c = e.attribution) && E.inp && (E.inp.element = c.eventTarget, E.inp.name = c.eventType))
							}
						}

						function I() {
							return s.timeOrigin
						}

						function O(e) {
							if ("function" == typeof s.getEntriesByType) {
								var n = s.getEntriesByType("navigation"),
									i = {};
								e.timingsV2 = {}, n && n[0] && (n[0].nextHopProtocol && (i.nextHopProtocol = n[0].nextHopProtocol), n[0].transferSize && (i.transferSize = n[0].transferSize), n[0].decodedBodySize && (i.decodedBodySize = n[0].decodedBodySize), e.dt = n[0].deliveryType), t(i, e.timingsV2)
							}
						}

						function _(e) {
							var t;
							if ("first-contentful-paint" === e && E.fcp && E.fcp.value) return E.fcp.value;
							if ("function" == typeof s.getEntriesByType) {
								var n = null === (t = s.getEntriesByType("paint")) || void 0 === t ? void 0 : t.filter((function(t) {
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
				t.__esModule = !0, t.sendObjectBeacon = void 0, t.sendObjectBeacon = function(e, t, n, i, r) {
					void 0 === i && (i = !1), void 0 === r && (r = null);
					var o = r || (t.siteToken && t.versions.fl ? "/cdn-cgi/rum?".concat(e) : "/cdn-cgi/beacon/performance?".concat(e)),
						a = !0;
					if (navigator && "string" == typeof navigator.userAgent) try {
						var c = navigator.userAgent.match(/Chrome\/([0-9]+)/);
						c && c[0].toLowerCase().indexOf("chrome") > -1 && parseInt(c[1]) < 81 && (a = !1)
					} catch (e) {}
					if (navigator && "function" == typeof navigator.sendBeacon && a && i) {
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
				var n, i;
				t.__esModule = !0, t.FetchPriority = t.EventType = void 0, (i = t.EventType || (t.EventType = {}))[i.Load = 1] = "Load", i[i.Additional = 2] = "Additional", i[i.WebVitalsV2 = 3] = "WebVitalsV2", (n = t.FetchPriority || (t.FetchPriority = {})).High = "high", n.Low = "low", n.Auto = "auto"
			},
			104: function(e, t) {
				! function(e) {
					"use strict";
					var t, n, i, r, o, a = function() {
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
									var i = e,
										r = i.id ? "#" + i.id : u(i) + (i.classList && i.classList.value && i.classList.value.trim() && i.classList.value.trim().length ? "." + i.classList.value.trim().replace(/\s+/g, ".") : "");
									if (n.length + r.length > (t || 100) - 1) return n || r;
									if (n = n ? r + ">" + n : r, i.id) break;
									e = i.parentNode
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
								i = "navigate";
							return d() >= 0 ? i = "back-forward-cache" : n && (document.prerendering || v() > 0 ? i = "prerender" : document.wasDiscarded ? i = "restore" : n.type && (i = n.type.replace(/_/g, "-"))), {
								name: e,
								value: void 0 === t ? -1 : t,
								rating: "good",
								delta: 0,
								entries: [],
								id: "v3-".concat(Date.now(), "-").concat(Math.floor(8999999999999 * Math.random()) + 1e12),
								navigationType: i
							}
						},
						m = function(e, t, n) {
							try {
								if (PerformanceObserver.supportedEntryTypes.includes(e)) {
									var i = new PerformanceObserver((function(e) {
										Promise.resolve().then((function() {
											t(e.getEntries())
										}))
									}));
									return i.observe(Object.assign({
										type: e,
										buffered: !0
									}, n || {})), i
								}
							} catch (e) {}
						},
						g = function(e, t, n, i) {
							var r, o;
							return function(a) {
								t.value >= 0 && (a || i) && ((o = t.value - (r || 0)) || void 0 === r) && (r = t.value, t.delta = o, t.rating = function(e, t) {
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
						B = [1800, 3e3],
						A = function(e, t) {
							t = t || {}, P((function() {
								var n, i = C(),
									r = p("FCP"),
									o = m("paint", (function(e) {
										e.forEach((function(e) {
											"first-contentful-paint" === e.name && (o.disconnect(), e.startTime < i.firstHiddenTime && (r.value = Math.max(e.startTime - v(), 0), r.entries.push(e), n(!0)))
										}))
									}));
								o && (n = g(e, r, B, t.reportAllChanges), l((function(i) {
									r = p("FCP"), n = g(e, r, B, t.reportAllChanges), y((function() {
										r.value = performance.now() - i.timeStamp, n(!0)
									}))
								})))
							}))
						},
						R = [.1, .25],
						x = {
							passive: !0,
							capture: !0
						},
						F = new Date,
						I = function(e, r) {
							t || (t = r, n = e, i = new Date, M(removeEventListener), O())
						},
						O = function() {
							if (n >= 0 && n < i - F) {
								var e = {
									entryType: "first-input",
									name: t.type,
									target: t.target,
									cancelable: t.cancelable,
									startTime: t.timeStamp,
									processingStart: t.timeStamp + n
								};
								r.forEach((function(t) {
									t(e)
								})), r = []
							}
						},
						_ = function(e) {
							if (e.cancelable) {
								var t = (e.timeStamp > 1e12 ? new Date : performance.now()) - e.timeStamp;
								"pointerdown" == e.type ? function(e, t) {
									var n = function() {
											I(e, t), r()
										},
										i = function() {
											r()
										},
										r = function() {
											removeEventListener("pointerup", n, x), removeEventListener("pointercancel", i, x)
										};
									addEventListener("pointerup", n, x), addEventListener("pointercancel", i, x)
								}(t, e) : I(t, e)
							}
						},
						M = function(e) {
							["mousedown", "keydown", "touchstart", "pointerdown"].forEach((function(t) {
								return e(t, _, x)
							}))
						},
						k = [100, 300],
						N = function(e, i) {
							i = i || {}, P((function() {
								var o, a = C(),
									c = p("FID"),
									u = function(e) {
										e.startTime < a.firstHiddenTime && (c.value = e.processingStart - e.startTime, c.entries.push(e), o(!0))
									},
									s = function(e) {
										e.forEach(u)
									},
									f = m("first-input", s);
								o = g(e, c, k, i.reportAllChanges), f && h(T((function() {
									s(f.takeRecords()), f.disconnect()
								}))), f && l((function() {
									var a;
									c = p("FID"), o = g(e, c, k, i.reportAllChanges), r = [], n = -1, t = null, M(addEventListener), a = u, r.push(a), O()
								}))
							}))
						},
						D = 0,
						V = 1 / 0,
						j = 0,
						q = function(e) {
							e.forEach((function(e) {
								e.interactionId && (V = Math.min(V, e.interactionId), j = Math.max(j, e.interactionId), D = j ? (j - V) / 7 + 1 : 0)
							}))
						},
						H = function() {
							return o ? D : performance.interactionCount || 0
						},
						z = function() {
							"interactionCount" in performance || o || (o = m("event", q, {
								type: "event",
								buffered: !0,
								durationThreshold: 0
							}))
						},
						J = [200, 500],
						U = 0,
						W = function() {
							return H() - U
						},
						Q = [],
						X = {},
						G = function(e) {
							var t = Q[Q.length - 1],
								n = X[e.interactionId];
							if (n || Q.length < 10 || e.duration > t.latency) {
								if (n) n.entries.push(e), n.latency = Math.max(n.latency, e.duration);
								else {
									var i = {
										id: e.interactionId,
										latency: e.duration,
										entries: [e]
									};
									X[i.id] = i, Q.push(i)
								}
								Q.sort((function(e, t) {
									return t.latency - e.latency
								})), Q.splice(10).forEach((function(e) {
									delete X[e.id]
								}))
							}
						},
						K = [2500, 4e3],
						Y = {},
						Z = [800, 1800],
						$ = function e(t) {
							document.prerendering ? P((function() {
								return e(t)
							})) : "complete" !== document.readyState ? addEventListener("load", (function() {
								return e(t)
							}), !0) : setTimeout(t, 0)
						},
						ee = function(e, t) {
							t = t || {};
							var n = p("TTFB"),
								i = g(e, n, Z, t.reportAllChanges);
							$((function() {
								var r = a();
								if (r) {
									var o = r.responseStart;
									if (o <= 0 || o > performance.now()) return;
									n.value = Math.max(o - v(), 0), n.entries = [r], i(!0), l((function() {
										n = p("TTFB", 0), (i = g(e, n, Z, t.reportAllChanges))(!0)
									}))
								}
							}))
						};
					e.CLSThresholds = R, e.FCPThresholds = B, e.FIDThresholds = k, e.INPThresholds = J, e.LCPThresholds = K, e.TTFBThresholds = Z, e.onCLS = function(e, t) {
						! function(e, t) {
							t = t || {}, A(T((function() {
								var n, i = p("CLS", 0),
									r = 0,
									o = [],
									a = function(e) {
										e.forEach((function(e) {
											if (!e.hadRecentInput) {
												var t = o[0],
													n = o[o.length - 1];
												r && e.startTime - n.startTime < 1e3 && e.startTime - t.startTime < 5e3 ? (r += e.value, o.push(e)) : (r = e.value, o = [e])
											}
										})), r > i.value && (i.value = r, i.entries = o, n())
									},
									c = m("layout-shift", a);
								c && (n = g(e, i, R, t.reportAllChanges), h((function() {
									a(c.takeRecords()), n(!0)
								})), l((function() {
									r = 0, i = p("CLS", 0), n = g(e, i, R, t.reportAllChanges), y((function() {
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
										var n = (i = t.sources).find((function(e) {
											return e.node && 1 === e.node.nodeType
										})) || i[0];
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
								var i;
								e.attribution = {}
							}(t), e(t)
						}), t)
					}, e.onFCP = function(e, t) {
						A((function(t) {
							! function(e) {
								if (e.entries.length) {
									var t = a(),
										n = e.entries[e.entries.length - 1];
									if (t) {
										var i = t.activationStart || 0,
											r = Math.max(0, t.responseStart - i);
										return void(e.attribution = {
											timeToFirstByte: r,
											firstByteToFCP: e.value - r,
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
						N((function(t) {
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
								var n;
								z();
								var i, r = p("INP"),
									o = function(e) {
										e.forEach((function(e) {
											e.interactionId && G(e), "first-input" === e.entryType && !Q.some((function(t) {
												return t.entries.some((function(t) {
													return e.duration === t.duration && e.startTime === t.startTime
												}))
											})) && G(e)
										}));
										var t, n = (t = Math.min(Q.length - 1, Math.floor(W() / 50)), Q[t]);
										n && n.latency !== r.value && (r.value = n.latency, r.entries = n.entries, i())
									},
									a = m("event", o, {
										durationThreshold: null !== (n = t.durationThreshold) && void 0 !== n ? n : 40
									});
								i = g(e, r, J, t.reportAllChanges), a && ("PerformanceEventTiming" in window && "interactionId" in PerformanceEventTiming.prototype && a.observe({
									type: "first-input",
									buffered: !0
								}), h((function() {
									o(a.takeRecords()), r.value < 0 && W() > 0 && (r.value = 0, r.entries = []), i(!0)
								})), l((function() {
									Q = [], U = H(), r = p("INP"), i = g(e, r, J, t.reportAllChanges)
								})))
							}))
						}((function(t) {
							! function(e) {
								if (e.entries.length) {
									var t = e.entries.sort((function(e, t) {
											return t.duration - e.duration || t.processingEnd - t.processingStart - (e.processingEnd - e.processingStart)
										}))[0],
										n = e.entries.find((function(e) {
											return e.target
										}));
									e.attribution = {
										eventTarget: s(n && n.target),
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
								var n, i = C(),
									r = p("LCP"),
									o = function(e) {
										var t = e[e.length - 1];
										t && t.startTime < i.firstHiddenTime && (r.value = Math.max(t.startTime - v(), 0), r.entries = [t], n())
									},
									a = m("largest-contentful-paint", o);
								if (a) {
									n = g(e, r, K, t.reportAllChanges);
									var c = T((function() {
										Y[r.id] || (o(a.takeRecords()), a.disconnect(), Y[r.id] = !0, n(!0))
									}));
									["keydown", "click"].forEach((function(e) {
										addEventListener(e, (function() {
											return setTimeout(c, 0)
										}), !0)
									})), h(c), l((function(i) {
										r = p("LCP"), n = g(e, r, K, t.reportAllChanges), y((function() {
											r.value = performance.now() - i.timeStamp, Y[r.id] = !0, n(!0)
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
											i = e.entries[e.entries.length - 1],
											r = i.url && performance.getEntriesByType("resource").filter((function(e) {
												return e.name === i.url
											}))[0],
											o = Math.max(0, t.responseStart - n),
											c = Math.max(o, r ? (r.requestStart || r.startTime) - n : 0),
											u = Math.max(c, r ? r.responseEnd - n : 0),
											f = Math.max(u, i ? i.startTime - n : 0),
											d = {
												element: s(i.element),
												timeToFirstByte: o,
												resourceLoadDelay: c - o,
												resourceLoadTime: u - c,
												elementRenderDelay: f - u,
												navigationEntry: t,
												lcpEntry: i
											};
										return i.url && (d.url = i.url), r && (d.lcpResourceEntry = r), void(e.attribution = d)
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
						ee((function(t) {
							! function(e) {
								if (e.entries.length) {
									var t = e.entries[0],
										n = t.activationStart || 0,
										i = Math.max(t.domainLookupStart - n, 0),
										r = Math.max(t.connectStart - n, 0),
										o = Math.max(t.requestStart - n, 0);
									e.attribution = {
										waitingTime: i,
										dnsTime: r - i,
										connectionTime: o - r,
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
					}
				}(t)
			}
		},
		t = {};
	! function n(i) {
		var r = t[i];
		if (void 0 !== r) return r.exports;
		var o = t[i] = {
			exports: {}
		};
		return e[i].call(o.exports, o, o.exports, n), o.exports
	}(168)
}();