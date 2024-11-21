"use strict";
(function() {
	function Ht(e, r, n, o, c, u, g) {
		try {
			var h = e[u](g),
				l = h.value
		} catch (p) {
			n(p);
			return
		}
		h.done ? r(l) : Promise.resolve(l).then(o, c)
	}

	function Bt(e) {
		return function() {
			var r = this,
				n = arguments;
			return new Promise(function(o, c) {
				var u = e.apply(r, n);

				function g(l) {
					Ht(u, o, c, g, h, "next", l)
				}

				function h(l) {
					Ht(u, o, c, g, h, "throw", l)
				}
				g(void 0)
			})
		}
	}

	function D(e, r) {
		return r != null && typeof Symbol != "undefined" && r[Symbol.hasInstance] ? !!r[Symbol.hasInstance](e) : D(e, r)
	}

	function Me(e, r, n) {
		return r in e ? Object.defineProperty(e, r, {
			value: n,
			enumerable: !0,
			configurable: !0,
			writable: !0
		}) : e[r] = n, e
	}

	function Fe(e) {
		for (var r = 1; r < arguments.length; r++) {
			var n = arguments[r] != null ? arguments[r] : {},
				o = Object.keys(n);
			typeof Object.getOwnPropertySymbols == "function" && (o = o.concat(Object.getOwnPropertySymbols(n).filter(function(c) {
				return Object.getOwnPropertyDescriptor(n, c).enumerable
			}))), o.forEach(function(c) {
				Me(e, c, n[c])
			})
		}
		return e
	}

	function Sr(e, r) {
		var n = Object.keys(e);
		if (Object.getOwnPropertySymbols) {
			var o = Object.getOwnPropertySymbols(e);
			r && (o = o.filter(function(c) {
				return Object.getOwnPropertyDescriptor(e, c).enumerable
			})), n.push.apply(n, o)
		}
		return n
	}

	function nt(e, r) {
		return r = r != null ? r : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Sr(Object(r)).forEach(function(n) {
			Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
		}), e
	}

	function jt(e) {
		if (Array.isArray(e)) return e
	}

	function qt(e, r) {
		var n = e == null ? null : typeof Symbol != "undefined" && e[Symbol.iterator] || e["@@iterator"];
		if (n != null) {
			var o = [],
				c = !0,
				u = !1,
				g, h;
			try {
				for (n = n.call(e); !(c = (g = n.next()).done) && (o.push(g.value), !(r && o.length === r)); c = !0);
			} catch (l) {
				u = !0, h = l
			} finally {
				try {
					!c && n.return != null && n.return()
				} finally {
					if (u) throw h
				}
			}
			return o
		}
	}

	function zt() {
		throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
	}

	function at(e, r) {
		(r == null || r > e.length) && (r = e.length);
		for (var n = 0, o = new Array(r); n < r; n++) o[n] = e[n];
		return o
	}

	function Gt(e, r) {
		if (e) {
			if (typeof e == "string") return at(e, r);
			var n = Object.prototype.toString.call(e).slice(8, -1);
			if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set") return Array.from(n);
			if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return at(e, r)
		}
	}

	function Ae(e, r) {
		return jt(e) || qt(e, r) || Gt(e, r) || zt()
	}

	function F(e) {
		"@swc/helpers - typeof";
		return e && typeof Symbol != "undefined" && e.constructor === Symbol ? "symbol" : typeof e
	}

	function Ue(e, r) {
		var n = {
				label: 0,
				sent: function() {
					if (u[0] & 1) throw u[1];
					return u[1]
				},
				trys: [],
				ops: []
			},
			o, c, u, g;
		return g = {
			next: h(0),
			throw: h(1),
			return: h(2)
		}, typeof Symbol == "function" && (g[Symbol.iterator] = function() {
			return this
		}), g;

		function h(p) {
			return function(E) {
				return l([p, E])
			}
		}

		function l(p) {
			if (o) throw new TypeError("Generator is already executing.");
			for (; g && (g = 0, p[0] && (n = 0)), n;) try {
				if (o = 1, c && (u = p[0] & 2 ? c.return : p[0] ? c.throw || ((u = c.return) && u.call(c), 0) : c.next) && !(u = u.call(c, p[1])).done) return u;
				switch (c = 0, u && (p = [p[0] & 2, u.value]), p[0]) {
					case 0:
					case 1:
						u = p;
						break;
					case 4:
						return n.label++, {
							value: p[1],
							done: !1
						};
					case 5:
						n.label++, c = p[1], p = [0];
						continue;
					case 7:
						p = n.ops.pop(), n.trys.pop();
						continue;
					default:
						if (u = n.trys, !(u = u.length > 0 && u[u.length - 1]) && (p[0] === 6 || p[0] === 2)) {
							n = 0;
							continue
						}
						if (p[0] === 3 && (!u || p[1] > u[0] && p[1] < u[3])) {
							n.label = p[1];
							break
						}
						if (p[0] === 6 && n.label < u[1]) {
							n.label = u[1], u = p;
							break
						}
						if (u && n.label < u[2]) {
							n.label = u[2], n.ops.push(p);
							break
						}
						u[2] && n.ops.pop(), n.trys.pop();
						continue
				}
				p = r.call(e, n)
			} catch (E) {
				p = [6, E], c = 0
			} finally {
				o = u = 0
			}
			if (p[0] & 5) throw p[1];
			return {
				value: p[0] ? p[1] : void 0,
				done: !0
			}
		}
	}
	var Xt = {
		code: 200500,
		internalRepr: "iframe_load_err",
		public: !0,
		retryable: !1,
		description: "Turnstile's api.js was loaded, but the iframe under challenges.cloudflare.com could not be loaded. Has the visitor blocked some parts of challenges.cloudflare.com or are they self-hosting api.js?"
	};
	var Yt = 300020;
	var De = 300030;
	var Ve = 300031;
	var j;
	(function(e) {
		e.MANAGED = "managed", e.NON_INTERACTIVE = "non-interactive", e.INVISIBLE = "invisible"
	})(j || (j = {}));
	var L;
	(function(e) {
		e.NORMAL = "normal", e.COMPACT = "compact", e.INVISIBLE = "invisible", e.FLEXIBLE = "flexible"
	})(L || (L = {}));
	var Pe;
	(function(e) {
		e.AUTO = "auto", e.LIGHT = "light", e.DARK = "dark"
	})(Pe || (Pe = {}));
	var Se;
	(function(e) {
		e.VERIFYING = "verifying", e.VERIFYING_HAVING_TROUBLES = "verifying-having-troubles", e.VERIFYING_OVERRUN = "verifying-overrun", e.FAILURE_WO_HAVING_TROUBLES = "failure-wo-having-troubles", e.FAILURE_HAVING_TROUBLES = "failure-having-troubles", e.FAILURE_FEEDBACK = "failure-feedback", e.FAILURE_FEEDBACK_CODE = "failure-feedback-code", e.EXPIRED_NEVER_REFRESH = "expired-never-refresh", e.EXPIRED_MANUAL_REFRESH = "expired-manual-refresh", e.TIMEOUT_NEVER_REFRESH = "timeout-never-refresh", e.TIMEOUT_MANUAL_REFRESH = "timeout-manual-refresh", e.INTERACTIVITY_REQUIRED = "interactivity-required", e.OUTDATED_BROWSER = "outdated-browser", e.TIME_CHECK_CACHED_WARNING = "time-check-cached-warning", e.INVALID_DOMAIN = "invalid-domain"
	})(Se || (Se = {}));
	var fe;
	(function(e) {
		e.NEVER = "never", e.AUTO = "auto"
	})(fe || (fe = {}));
	var J;
	(function(e) {
		e.NEVER = "never", e.MANUAL = "manual", e.AUTO = "auto"
	})(J || (J = {}));
	var ie;
	(function(e) {
		e.NEVER = "never", e.MANUAL = "manual", e.AUTO = "auto"
	})(ie || (ie = {}));
	var X;
	(function(e) {
		e.ALWAYS = "always", e.EXECUTE = "execute", e.INTERACTION_ONLY = "interaction-only"
	})(X || (X = {}));
	var pe;
	(function(e) {
		e.RENDER = "render", e.EXECUTE = "execute"
	})(pe || (pe = {}));
	var oe;
	(function(e) {
		e.EXECUTE = "execute"
	})(oe || (oe = {}));
	var it;
	(function(e) {
		e.ALWAYS_FAILS = "always-fails", e.SOMETIMES_FAILS = "sometimes-fails", e.KEEPS_LOOPING = "keeps-looping", e.TOO_SLOW = "too-slow", e.OTHER = "other"
	})(it || (it = {}));
	var We;
	(function(e) {
		e.FAILURE = "failure", e.VERIFYING = "verifying", e.OVERRUNNING = "overrunning", e.CUSTOM = "custom"
	})(We || (We = {}));

	function M(e, r) {
		return e.indexOf(r) !== -1
	}

	function ot(e) {
		return M(["auto", "dark", "light"], e)
	}

	function ct(e) {
		return M(["auto", "never"], e)
	}

	function ut(e) {
		return e > 0 && e < 9e5
	}

	function lt(e) {
		return e > 0 && e < 36e4
	}
	var Ir = /^[0-9A-Za-z_-]{3,100}$/;

	function Kt(e) {
		return Ir.test(e)
	}
	var Or = /^[a-z0-9_-]{0,32}$/i;

	function st(e) {
		return e === void 0 ? !0 : typeof e == "string" && Or.test(e)
	}
	var Cr = /^[a-z0-9_\-=]{0,255}$/i;

	function dt(e) {
		return e === void 0 ? !0 : typeof e == "string" && Cr.test(e)
	}

	function ft(e) {
		return M([L.NORMAL, L.COMPACT, L.INVISIBLE, L.FLEXIBLE], e)
	}

	function pt(e) {
		return M(["auto", "manual", "never"], e)
	}

	function vt(e) {
		return M(["auto", "manual", "never"], e)
	}
	var Nr = /^[a-z]{2,3}([-_][a-z]{2})?$/i;

	function mt(e) {
		return e === "auto" || Nr.test(e)
	}

	function gt(e) {
		return M(["always", "execute", "interaction-only"], e)
	}

	function Qt(e) {
		return M(["true", "false"], e)
	}

	function yt(e) {
		return M(["render", "execute"], e)
	}
	var $t = 300,
		Jt = 10;

	function ht(e) {
		var r = new URLSearchParams;
		if (e.params._debugSitekeyOverrides && (e.params._debugSitekeyOverrides.offlabel !== "default" && r.set("offlabel", e.params._debugSitekeyOverrides.offlabel), e.params._debugSitekeyOverrides.clearance_level !== "default" && r.set("clearance_level", e.params._debugSitekeyOverrides.clearance_level)), r.size !== 0) return r.toString()
	}
	var He = "cf-chl-widget-",
		V = "cloudflare-challenge",
		Zt = ".cf-turnstile",
		er = ".cf-challenge",
		tr = ".g-recaptcha",
		_t = "cf_challenge_response",
		bt = "cf-turnstile-response",
		Et = "g-recaptcha-response",
		rr = 8e3,
		xt = "private-token",
		nr = 3,
		ar = 500,
		ir = 500,
		Y = "0/0";
	var kr = ["bg-bg", "da-dk", "de-de", "el-gr", "ja-jp", "ms-my", "ru-ru", "sk-sk", "sl-si", "sr-ba", "tl-ph", "uk-ua"],
		Lr = ["ar-eg", "es-es", "cs-cz", "fa-ir", "fr-fr", "hr-hr", "hu-hu", "id-id", "it-it", "lt-lt", "nb-no", "nl-nl", "pl-pl", "pt-br", "th-th", "tr-tr", "ro-ro"];

	function wt(e, r) {
		var n = "https://challenges.cloudflare.com";
		if (r) {
			var o;
			n = (o = e["base-url"]) !== null && o !== void 0 ? o : n
		}
		return n
	}

	function Tt(e, r, n, o, c, u, g) {
		var h = wt(n, c),
			l = u ? "h/".concat(u, "/") : "",
			p = g ? "?".concat(g) : "",
			E = n["feedback-enabled"] === !1 ? "fbD" : "fbE";
		return "".concat(h, "/cdn-cgi/challenge-platform/").concat(l, "turnstile/if/ov2/av0/rcv").concat(o, "/").concat(e, "/").concat(r, "/").concat(n.theme, "/").concat(E, "/").concat(n.size, "/").concat(n.language, "/").concat(p)
	}
	var Rt = function(e) {
			var r, n, o = window.innerWidth < 400,
				c = e.state === Se.FAILURE_FEEDBACK || e.state === Se.FAILURE_HAVING_TROUBLES,
				u, g = M(kr, (u = (r = e.displayLanguage) === null || r === void 0 ? void 0 : r.toLowerCase()) !== null && u !== void 0 ? u : "nonexistent"),
				h, l = M(Lr, (h = (n = e.displayLanguage) === null || n === void 0 ? void 0 : n.toLowerCase()) !== null && h !== void 0 ? h : "nonexistent");
			return o ? Mr({
				isModeratelyVerbose: l,
				isVerboseLanguage: g,
				isSmallerFeedback: c
			}) : c && g ? "520px" : c && l ? "500px" : c ? "480px" : g ? "580px" : "570px"
		},
		Mr = function(e) {
			var r = e.isVerboseLanguage,
				n = e.isSmallerFeedback,
				o = e.isModeratelyVerbose;
			return n && r ? "540px" : n && o ? "500px" : n ? "480px" : r ? "650px" : o ? "590px" : "570px"
		};

	function Be(e) {
		if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return e
	}

	function or(e, r) {
		if (!D(e, r)) throw new TypeError("Cannot call a class as a function")
	}

	function Z(e, r) {
		return Z = Object.setPrototypeOf || function(o, c) {
			return o.__proto__ = c, o
		}, Z(e, r)
	}

	function cr(e, r) {
		if (typeof r != "function" && r !== null) throw new TypeError("Super expression must either be null or a function");
		e.prototype = Object.create(r && r.prototype, {
			constructor: {
				value: e,
				writable: !0,
				configurable: !0
			}
		}), r && Z(e, r)
	}

	function je() {
		if (typeof Reflect == "undefined" || !Reflect.construct || Reflect.construct.sham) return !1;
		if (typeof Proxy == "function") return !0;
		try {
			return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
		} catch (e) {
			return !1
		}
	}

	function Ie(e, r, n) {
		return je() ? Ie = Reflect.construct : Ie = function(c, u, g) {
			var h = [null];
			h.push.apply(h, u);
			var l = Function.bind.apply(c, h),
				p = new l;
			return g && Z(p, g.prototype), p
		}, Ie.apply(null, arguments)
	}

	function ce(e) {
		return ce = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
			return n.__proto__ || Object.getPrototypeOf(n)
		}, ce(e)
	}

	function ur(e) {
		return Function.toString.call(e).indexOf("[native code]") !== -1
	}

	function qe(e) {
		var r = typeof Map == "function" ? new Map : void 0;
		return qe = function(o) {
			if (o === null || !ur(o)) return o;
			if (typeof o != "function") throw new TypeError("Super expression must either be null or a function");
			if (typeof r != "undefined") {
				if (r.has(o)) return r.get(o);
				r.set(o, c)
			}

			function c() {
				return Ie(o, arguments, ce(this).constructor)
			}
			return c.prototype = Object.create(o.prototype, {
				constructor: {
					value: c,
					enumerable: !1,
					writable: !0,
					configurable: !0
				}
			}), Z(c, o)
		}, qe(e)
	}

	function lr(e, r) {
		return r && (F(r) === "object" || typeof r == "function") ? r : Be(e)
	}

	function sr(e) {
		var r = je();
		return function() {
			var o = ce(e),
				c;
			if (r) {
				var u = ce(this).constructor;
				c = Reflect.construct(o, arguments, u)
			} else c = o.apply(this, arguments);
			return lr(this, c)
		}
	}
	var dr = function(e) {
		"use strict";
		cr(n, e);
		var r = sr(n);

		function n(o, c) {
			or(this, n);
			var u;
			return u = r.call(this, o), Me(Be(u), "code", void 0), u.name = "TurnstileError", u.code = c, u
		}
		return n
	}(qe(Error));

	function m(e, r) {
		var n = "[Cloudflare Turnstile] ".concat(e, ".");
		throw new dr(n, r)
	}

	function b(e) {
		console.warn("[Cloudflare Turnstile] ".concat(e))
	}

	function ze(e) {
		return e.startsWith(He) ? e.substring(He.length) : null
	}

	function K(e) {
		return "".concat(He).concat(e)
	}

	function At() {
		var e = /\/turnstile\/v0(\/.*)?\/api\.js/,
			r = document.currentScript;
		if (D(r, HTMLScriptElement) && e.test(r.src)) return r;
		for (var n = document.querySelectorAll("script"), o = 0, c; c = n[o]; o++)
			if (D(c, HTMLScriptElement) && e.test(c.src)) return c
	}

	function fr() {
		var e = At();
		e || m("Could not find Turnstile script tag, some features may not be available", 43777);
		var r = e.src,
			n = {
				loadedAsync: !1,
				params: new URLSearchParams,
				src: r
			};
		(e.async || e.defer) && (n.loadedAsync = !0);
		var o = r.split("?");
		return o.length > 1 && (n.params = new URLSearchParams(o[1])), n
	}

	function P() {
		return typeof performance != "undefined" && performance.now ? performance.now() : Date.now()
	}
	var St = function(e, r, n) {
			var o = wt(r.params, !1),
				c = "h/".concat("g", "/"),
				u, g, h = "".concat(o, "/cdn-cgi/challenge-platform/").concat(c, "feedback-reports/").concat(ze(e), "/").concat(r.displayLanguage, "/").concat((u = r.params.theme) !== null && u !== void 0 ? u : r.theme, "/").concat(n);
			r.wrapper.parentNode || m("Cannot initialize Widget, Element not found (#".concat(e, ")."), 3074);
			var l = document.createElement("div");
			l.style.position = "fixed", l.style.zIndex = "2147483646", l.style.width = "100vw", l.style.height = "100vh", l.style.top = "0", l.style.left = "0", l.style.transformOrigin = "center center", l.style.overflowX = "hidden", l.style.overflowY = "auto", l.style.background = "rgba(0,0,0,0.4)";
			var p = document.createElement("div");
			p.style.display = "table-cell", p.style.verticalAlign = "middle", p.style.width = "100vw", p.style.height = "100vh";
			var E = document.createElement("div");
			E.className = "cf-turnstile-feedback", E.id = "cf-fr-id", E.style.width = "100vw", E.style.maxWidth = "450px", E.style.height = Rt(r), E.style.position = "relative", E.style.zIndex = "2147483647", E.style.backgroundColor = "#ffffff", E.style.borderRadius = "5px", E.style.left = "0px", E.style.top = "0px", E.style.overflow = "hidden", E.style.margin = "0px auto";
			var I = document.createElement("iframe");
			I.id = "".concat(e, "-fr"), I.setAttribute("src", h), I.setAttribute("allow", "cross-origin-isolated; fullscreen"), I.setAttribute("sandbox", "allow-same-origin allow-scripts allow-popups allow-forms"), I.setAttribute("scrolling", "no"), I.style.borderWidth = "0px", I.style.width = "100%", I.style.height = "100%", I.style.overflow = "hidden";
			var T = document.createElementNS("http://www.w3.org/2000/svg", "svg");
			T.setAttribute("tabindex", "0"), T.setAttribute("role", "img"), T.setAttribute("aria-label", "Close button icon"), T.style.position = "absolute", T.style.width = "26px", T.style.height = "26px", T.style.zIndex = "2147483647", T.style.cursor = "pointer", r.displayRTL ? T.style.left = "6px" : T.style.right = "2px", T.style.top = "5px", T.setAttribute("width", "20"), T.setAttribute("height", "20"), T.addEventListener("click", function() {
				var S;
				(S = l.parentNode) === null || S === void 0 || S.removeChild(l)
			}), T.addEventListener("keydown", function(S) {
				if (S.key === "Enter" || S.key === " ") {
					var _;
					(_ = l.parentNode) === null || _ === void 0 || _.removeChild(l)
				}
			});
			var N = document.createElementNS("http://www.w3.org/2000/svg", "ellipse");
			N.setAttribute("ry", "12"), N.setAttribute("rx", "12"), N.setAttribute("cy", "12"), N.setAttribute("cx", "12"), N.setAttribute("fill", "none"), N.setAttribute("stroke-width", "0"), T.appendChild(N);
			var k = document.createElementNS("http://www.w3.org/2000/svg", "line");
			k.setAttribute("stroke-width", "1"), k.setAttribute("stroke", "#999"), k.setAttribute("fill", "none"), k.setAttribute("x1", "6"), k.setAttribute("x2", "18"), k.setAttribute("y1", "18"), k.setAttribute("y2", "5"), T.appendChild(k);
			var R = document.createElementNS("http://www.w3.org/2000/svg", "line");
			R.setAttribute("stroke-width", "1"), R.setAttribute("stroke", "#999"), R.setAttribute("fill", "none"), R.setAttribute("x1", "6"), R.setAttribute("x2", "18"), R.setAttribute("y1", "5"), R.setAttribute("y2", "18"), T.appendChild(R), E.appendChild(I), E.appendChild(T), p.appendChild(E), l.appendChild(p), l.addEventListener("click", function() {
				var S;
				(S = l.parentNode) === null || S === void 0 || S.removeChild(l)
			}), r.wrapper.parentNode.appendChild(l), window.addEventListener("resize", function() {
				E.style.height = Rt(r)
			})
		},
		pr = function(e) {
			var r, n, o;
			(o = document.getElementById(e)) === null || o === void 0 || (n = o.parentElement) === null || n === void 0 || (r = n.parentElement) === null || r === void 0 || r.remove()
		};
	var It = function(e) {
		var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 3;
		return e.length > r ? e.substring(0, r) : e
	};

	function vr(e) {
		if (!e) return "-";
		var r = function(n, o) {
			if (!n || n.tagName === "BODY") return o;
			for (var c = 1, u = n.previousElementSibling; u;) u.tagName === n.tagName && c++, u = u.previousElementSibling;
			var g = It(n.tagName.toLowerCase()),
				h = "".concat(g, "[").concat(c, "]");
			return r(n.parentNode, "/".concat(h).concat(o))
		};
		return r(e, "")
	}

	function mr(e, r, n) {
		for (var o = "", c = 0, u = document.createNodeIterator(e, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT, {
				acceptNode: function(I) {
					return c > r || o.length > n ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT
				}
			}), g;
			(g = u.nextNode()) !== null && o.length < n;) {
			if (g.nodeType === Node.ELEMENT_NODE) {
				var h = g;
				o += "".concat(It(h.tagName.toLowerCase()));
				for (var l = 0; l < h.attributes.length; l++) {
					var p = h.attributes[l];
					o += "_".concat(It(p.name, 2))
				}
				o += ">"
			} else g.nodeType === Node.TEXT_NODE && (o += "-t");
			var E = g.parentNode;
			for (c = 0; E !== e && E !== null;) c++, E = E.parentNode
		}
		return o.substring(0, n)
	}

	function gr(e) {
		if (typeof e != "string") throw new Error("djb2: expected string, got ".concat(typeof e == "undefined" ? "undefined" : F(e)));
		for (var r = 5381, n = 0; n < e.length; n++) {
			var o = e.charCodeAt(n);
			r = r * 33 ^ o
		}
		return r >>> 0
	}

	function yr(e, r) {
		var n;
		r.upgradeAttempts++;
		var o = At();
		if (!(!o || !o.parentNode)) {
			var c = o == null ? void 0 : o.nonce;
			e._pState = r;
			var u = new URL(o.src),
				g = document.createElement("script");
			u.searchParams.set("_upgrade", "true"), u.searchParams.set("_cb", String(Date.now())), g.async = !0, c && (g.nonce = c), g.setAttribute("crossorigin", "anonymous"), g.src = u.toString(), o == null || (n = o.parentNode) === null || n === void 0 || n.replaceChild(g, o)
		}
	}

	function hr(e, r) {
		var n = e._pState;
		return n ? (r.isReady = n.isReady, r.isRecaptchaCompatibilityMode = n.isRecaptchaCompatibilityMode, r.lastWidgetIdx = n.lastWidgetIdx, r.scriptWasLoadedAsync = n.scriptWasLoadedAsync, r.upgradeAttempts = n.upgradeAttempts, r.upgradeCompletedCount = n.upgradeCompletedCount + 1, r.turnstileLoadInitTimeMs = P(), r.watchCatInterval = null, r.watchCatSeq = n.watchCatSeq, r.widgetMap = n.widgetMap, !0) : !1
	}
	var Fr = 900,
		Ur = 3,
		Dr = 50;

	function Vr(e) {
		e.watchCatSeq++;
		var r = !0,
			n = !1,
			o = void 0;
		try {
			for (var c = e.widgetMap[Symbol.iterator](), u; !(r = (u = c.next()).done); r = !0) {
				var g = Ae(u.value, 2),
					h = g[0],
					l = g[1],
					p;
				l.watchcat.seq = e.watchCatSeq, l.watchcat.lastAckedSeq === 0 && (l.watchcat.lastAckedSeq = e.watchCatSeq);
				var E = K(h);
				if (!E || !l.shadow) {
					l.watchcat.missingWidgetWarning || (b("Cannot find Widget ".concat(E, ", consider using turnstile.remove() to clean up a widget.")), l.watchcat.missingWidgetWarning = !0);
					continue
				}
				var I = l.shadow.querySelector("#".concat(E));
				if (!I) {
					l.watchcat.missingWidgetWarning || (b("Cannot find Widget ".concat(E, ", consider using turnstile.remove() to clean up a widget.")), l.watchcat.missingWidgetWarning = !0);
					continue
				}
				if (!(l.isComplete || l.isFailed)) {
					var T = l.watchcat.seq - 1 - Ur,
						N = l.watchcat.lastAckedSeq < T,
						k = l.watchcat.seq - 1 - Dr,
						R = l.isOverrunning && l.watchcat.overrunBeginSeq < k;
					if ((l.isExecuting || !l.isInitialized || l.isInitialized && !l.isStale && !l.isExecuted) && l.watchcat.lastAckedSeq !== 0 && N || R) {
						var S;
						l.watchcat.lastAckedSeq = 0, l.watchcat.seq = 0, l.isExecuting = !1;
						var _ = function(f, s) {
							console.log("Turnstile Widget seem to have ".concat(f, ": "), s)
						};
						_(N ? "hung" : "crashed", h);
						var a = N ? De : Ve,
							i;
						if ((S = e.msgHandler) === null || S === void 0 || S.call(e, {
								data: {
									source: V,
									widgetId: h,
									code: a,
									event: "fail",
									rcV: (i = l.nextRcV) !== null && i !== void 0 ? i : Y
								}
							}), 0) var t;
						continue
					}(p = I.contentWindow) === null || p === void 0 || p.postMessage({
						source: V,
						widgetId: h,
						seq: e.watchCatSeq,
						event: "meow"
					}, "*")
				}
			}
		} catch (f) {
			n = !0, o = f
		} finally {
			try {
				!r && c.return != null && c.return()
			} finally {
				if (n) throw o
			}
		}
	}

	function Ot(e) {
		e.watchCatInterval === null && (e.watchCatInterval = setInterval(function() {
			Vr(e)
		}, Fr))
	}

	function Ct(e) {
		var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
		e.watchCatInterval !== null && (e.widgetMap.size === 0 || r) && clearInterval(e.watchCatInterval)
	}
	var y = {
		turnstileLoadInitTimeMs: P(),
		isRecaptchaCompatibilityMode: !1,
		scriptWasLoadedAsync: !1,
		scriptUrl: "undefined",
		isReady: !1,
		widgetMap: new Map,
		lastWidgetIdx: 0,
		upgradeAttempts: 0,
		upgradeCompletedCount: 0,
		apiVersion: 1,
		watchCatInterval: null,
		watchCatSeq: 0
	};

	function Nt(e) {
		wr(e, "")
	}

	function Mt() {
		var e = [Zt, er];
		y.isRecaptchaCompatibilityMode && e.push(tr), document.querySelectorAll(e.join(", ")).forEach(function(r) {
			return Ft.render(r)
		})
	}
	var Ut = [];

	function _r() {
		y.isReady = !0;
		var e = !0,
			r = !1,
			n = void 0;
		try {
			for (var o = Ut[Symbol.iterator](), c; !(e = (c = o.next()).done); e = !0) {
				var u = c.value;
				u()
			}
		} catch (g) {
			r = !0, n = g
		} finally {
			try {
				!e && o.return != null && o.return()
			} finally {
				if (r) throw n
			}
		}
	}

	function Pr(e) {
		var r = y.widgetMap.get(e);
		if (!(r === void 0 || r.hasResponseParamEl)) {
			r.hasResponseParamEl = !0;
			var n, o = (n = r.params["response-field"]) !== null && n !== void 0 ? n : !0;
			if (o) {
				var c = document.createElement("input");
				c.type = "hidden";
				var u;
				c.name = (u = r.params["response-field-name"]) !== null && u !== void 0 ? u : bt, c.id = "".concat(e, "_response"), r.wrapper.appendChild(c);
				var g;
				if (typeof r.params["response-field-name"] != "string" && Tr((g = r.params.sitekey) !== null && g !== void 0 ? g : "")) {
					var h = document.createElement("input");
					h.type = "hidden", h.name = _t, h.id = "".concat(e, "_legacy_response"), r.wrapper.appendChild(h)
				}
			}
			if (y.isRecaptchaCompatibilityMode) {
				var l = document.createElement("input");
				l.type = "hidden", l.name = Et, l.id = "".concat(e, "_g_response"), r.wrapper.appendChild(l)
			}
		}
	}

	function wr(e, r) {
		Pr(e);
		var n = document.getElementById("".concat(e, "_response"));
		n !== null && D(n, HTMLInputElement) && (n.value = r);
		var o = document.getElementById("".concat(e, "_legacy_response"));
		if (o !== null && D(o, HTMLInputElement) && (o.value = r), y.isRecaptchaCompatibilityMode) {
			var c = document.getElementById("".concat(e, "_g_response"));
			c !== null && D(c, HTMLInputElement) && (c.value = r)
		}
	}

	function kt(e, r) {
		var n = r.params,
			o = n.size,
			c = o === void 0 ? "normal" : o,
			u = r.mode;
		switch (u) {
			case j.NON_INTERACTIVE:
			case j.MANAGED:
				switch (c) {
					case L.COMPACT:
						e.style.width = "150px", e.style.height = "140px";
						break;
					case L.INVISIBLE:
						m('Invalid value for parameter "size", expected "'.concat(L.COMPACT, '" or "').concat(L.NORMAL, '", got "').concat(c, '"'), 2817);
					case L.NORMAL:
						e.style.width = "300px", e.style.height = "65px";
						break;
					case L.FLEXIBLE:
						e.style.width = "100%", e.style.maxWidth = "100vw", e.style.minWidth = "300px", e.style.height = "65px";
						break
				}
				break;
			case j.INVISIBLE:
				e.style.width = "0", e.style.height = "0", e.style.position = "absolute", e.style.visibility = "hidden", e.setAttribute("tabindex", "-1"), e.setAttribute("aria-hidden", "true");
				break;
			default:
				m('Invalid value for parameter "mode", expected "'.concat(j.NON_INTERACTIVE, '", "').concat(j.MANAGED, '" or "').concat(j.INVISIBLE, '", got "').concat(u, '"'), 2818)
		}
	}

	function br(e) {
		e.style.width = "0", e.style.height = "0"
	}

	function Wr(e, r) {
		var n = r.get("turnstile_iframe_alt");
		n && (e.title = n)
	}

	function Hr(e) {
		return e.origin ? e.origin === "https://challenges.cloudflare.com" || e.origin === "https://challenges-staging.cloudflare.com" : !0
	}

	function Tr(e) {
		return e.startsWith("0x4AAAAAAAAAA") || e.startsWith("0x4AAAAAAAAj")
	}

	function Er() {
		for (var e = window; e && e.top !== e && !e.location.href.startsWith("http");) e = e.top;
		return e == null ? void 0 : e.location.href
	}
	var Ft = function() {
		var e = function(a, i, t, f) {
				return N.apply(this, arguments)
			},
			r = function(a, i, t) {
				if (a.params.retry === fe.AUTO || t) {
					a.isExecuted && (a.msgQueue.push(oe.EXECUTE), a.isExecuted = !0, a.isExecuting = !0);
					var f, s = t ? 0 : 1e3 * 2 + ((f = a.params["retry-interval"]) !== null && f !== void 0 ? f : 0);
					a.retryTimeout = window.setTimeout(function() {
						p(i)
					}, s)
				}
			},
			n = function(a, i, t) {
				var f;
				a.response === void 0 && m("[Internal Error] Widget was completed but no response was given", 1362), a.isExecuting = !1, a.isComplete = !0, wr(i, a.response), (f = a.cbSuccess) === null || f === void 0 || f.call(a, a.response, t)
			},
			o = function(a) {
				if (!a) return [];
				for (var i = a.attributes, t = i.length, f = new Array(t), s = 0; s < t; s++) f[s] = i[s].name;
				return f
			},
			c = function(a, i, t) {
				if (a.rcV = i, 0) var f
			},
			u = function() {
				var a = "abcdefghijklmnopqrstuvwxyz0123456789",
					i = a.length,
					t = "";
				do {
					t = "";
					for (var f = 0; f < 5; f++) t += a.charAt(Math.floor(Math.random() * i))
				} while (y.widgetMap.has(t));
				return t
			},
			g = function(a) {
				var i = !0,
					t = !1,
					f = void 0;
				try {
					for (var s = y.widgetMap[Symbol.iterator](), v; !(i = (v = s.next()).done); i = !0) {
						var x = Ae(v.value, 2),
							w = x[0],
							A = x[1];
						if (A.wrapper.parentElement === a) return w
					}
				} catch (O) {
					t = !0, f = O
				} finally {
					try {
						!i && s.return != null && s.return()
					} finally {
						if (t) throw f
					}
				}
				return null
			},
			h = function(a, i, t) {
				for (; a.msgQueue.length;) {
					var f, s = a.msgQueue.pop();
					(f = t.contentWindow) === null || f === void 0 || f.postMessage({
						source: V,
						widgetId: i,
						event: s
					}, "*")
				}
			},
			l = function(a, i) {
				if (i) {
					var t = ["retry-interval", "retry", "size", "theme", "tabindex", "execution", "refresh-expired", "refresh-timeout", "response-field-name", "response-field", "language", "base-url", "appearance", "sitekey", "feedback-enabled"],
						f = [],
						s = !0,
						v = !1,
						x = void 0;
					try {
						for (var w = t[Symbol.iterator](), A; !(s = (A = w.next()).done); s = !0) {
							var O = A.value;
							i[O] && i[O] !== a.params[O] && f.push(O)
						}
					} catch (U) {
						v = !0, x = U
					} finally {
						try {
							!s && w.return != null && w.return()
						} finally {
							if (v) throw x
						}
					}
					f.length !== 0 && m("The parameters ".concat(t.join(","), " is/are not allowed be changed between the calls of render() and execute() of a widget.\n    Consider rendering a new widget if you want to change the following parameters ").concat(f.join(",")), 3618), i.action && (st(i.action) || m('Invalid input for optional parameter "action", got "'.concat(i.action, '"'), 3604), a.action = i.action), i.cData && (dt(i.cData) || m('Invalid input for optional parameter "cData", got "'.concat(i.cData, '"'), 3605), a.cData = i.cData), i["after-interactive-callback"] && (a.cbAfterInteractive = i["after-interactive-callback"]), i["before-interactive-callback"] && (a.cbBeforeInteractive = i["before-interactive-callback"]), i.callback && (a.cbSuccess = i.callback), i["expired-callback"] && (a.cbExpired = i["expired-callback"]), i["timeout-callback"] && (a.cbTimeout = i["timeout-callback"]), i["error-callback"] && (a.cbError = i["error-callback"]), i["unsupported-callback"] && (a.cbUnsupported = i["unsupported-callback"]), i.chlPageData && (a.chlPageData = i.chlPageData)
				}
			},
			p = function(a) {
				var i = R(a);
				i || m("Nothing to reset found for provided container", 3329);
				var t = y.widgetMap.get(i);
				if (t) {
					var f;
					t.isResetting = !0, t.response = void 0, t.mode = void 0, t.msgQueue = [], t.isComplete = !1, t.isExecuting = !1, t.isExpired = !1, t.isFailed = !1, t.isInitialized = !1, t.isStale = !1, t.watchcat.lastAckedSeq = 0, t.watchcat.seq = 0, t.params.execution === pe.RENDER && (t.msgQueue.push(oe.EXECUTE), t.isExecuted = !0, t.isExecuting = !0);
					var s = K(i),
						v = t.shadow.querySelector("#".concat(s));
					(!s || !v) && m("Widget ".concat(i, " to reset was not found."), 3330), t.params.appearance === X.INTERACTION_ONLY && br(v), t.params.sitekey === null && m("Unexpected Error: Sitekey is null", 3347);
					var x = v.cloneNode(),
						w;
					x.src = Tt(i, t.params.sitekey, t.params, (w = t.rcV) !== null && w !== void 0 ? w : Y, !1, "g", ht(t)), (f = v.parentNode) === null || f === void 0 || f.replaceChild(x, v), Nt(s), t.retryTimeout && window.clearTimeout(t.retryTimeout)
				} else m("Widget ".concat(i, " to reset was not found."), 3331)
			},
			E = function(a) {
				var i, t = R(a);
				if (!t || !y.widgetMap.has(t)) {
					b("Nothing to remove found for the provided container.");
					return
				}
				var f = K(t),
					s = ["input#".concat(f, "_response"), "input#".concat(f, "_legacy_response"), "input#".concat(f, "_g_response")];
				document.querySelectorAll(s.join(", ")).forEach(function(w) {
					return w.remove()
				});
				var v = y.widgetMap.get(t);
				v == null || v.shadow.querySelectorAll(s.join(", ")).forEach(function(w) {
					return w.remove()
				}), v == null || v.wrapper.remove();
				var x = (i = y.widgetMap.get(t)) === null || i === void 0 ? void 0 : i.retryTimeout;
				x && window.clearTimeout(x), y.widgetMap.delete(t), Ct(y)
			},
			I = function(a, i) {
				var t, f, s = P(),
					v;
				if (typeof a == "string") try {
					var x = document.querySelector(a);
					x || m('Unable to find a container for "'.concat(a, '"'), 3585), v = x
				} catch (Wt) {
					m('Invalid type for "container", expected "selector" or an implementation of "HTMLElement", got "'.concat(a, '"'), 3586)
				} else D(a, HTMLElement) ? v = a : m('Invalid type for parameter "container", expected "string" or an implementation of "HTMLElement"', 3587);
				var w = !0,
					A = !1,
					O = void 0;
				try {
					for (var U = y.widgetMap.values()[Symbol.iterator](), W; !(w = (W = U.next()).done); w = !0) {
						var z = W.value;
						if (v.contains(z.wrapper)) {
							b("Turnstile has already been rendered in this container. Did you mean to render it multiple times?");
							break
						}
					}
				} catch (Wt) {
					A = !0, O = Wt
				} finally {
					try {
						!w && U.return != null && U.return()
					} finally {
						if (A) throw O
					}
				}
				var Q = Br(v);
				if (Q) {
					var d = Object.assign(Q, i),
						ge = d.action,
						ee = d.cData,
						Oe = d.chlPageData,
						H = d.sitekey,
						te;
					d.theme = (te = d.theme) !== null && te !== void 0 ? te : Pe.AUTO;
					var ue;
					d.retry = (ue = d.retry) !== null && ue !== void 0 ? ue : fe.AUTO;
					var re;
					d.execution = (re = d.execution) !== null && re !== void 0 ? re : pe.RENDER;
					var ye;
					d.appearance = (ye = d.appearance) !== null && ye !== void 0 ? ye : X.ALWAYS;
					var ne;
					d["retry-interval"] = Number((ne = d["retry-interval"]) !== null && ne !== void 0 ? ne : rr);
					var he;
					d["expiry-interval"] = Number((he = d["expiry-interval"]) !== null && he !== void 0 ? he : ($t - Jt) * 1e3);
					var le;
					d.size = (le = d.size) !== null && le !== void 0 ? le : L.NORMAL;
					var _e = d.callback,
						be = d["expired-callback"],
						Ce = d["timeout-callback"],
						Ee = d["after-interactive-callback"],
						xe = d["before-interactive-callback"],
						G = d["error-callback"],
						Qe = d["unsupported-callback"];
					typeof H != "string" && m('Invalid or missing type for parameter "sitekey", expected "string", got "'.concat(typeof H == "undefined" ? "undefined" : F(H), '"'), 3588), Kt(H) || m('Invalid input for parameter "sitekey", got "'.concat(H, '"'), 3589), ft(d.size) || m('Invalid type for parameter "size", expected normal|compact, got "'.concat(d.size, '" ').concat(F(d.size)), 3590), ot(d.theme) || m('Invalid type for parameter "theme", expected dark|light|auto, got "'.concat(d.theme, '" ').concat(F(d.theme)), 3591), ct(d.retry) || m('Invalid type for parameter "retry", expected never|auto, got "'.concat(d.retry, '" ').concat(F(d.retry)), 3592), d.language || (d.language = "auto"), mt(d.language) || (b('Invalid language value: "'.concat(d.language, ", expected either: auto, or an ISO 639-1 two-letter language code (e.g. en) or language and country code (e.g. en-US).")), d.language = "auto"), gt(d.appearance) || m('Unknown appearance value: "'.concat(d.appearance, ", expected either: 'always', 'execute', or 'interaction-only'."), 3600), yt(d.execution) || m('Unknown execution value: "'.concat(d.execution, ", expected either: 'render' or 'execute'."), 3601), ut(d["retry-interval"]) || m('Invalid retry-interval value: "'.concat(d["retry-interval"], ', expected an integer value > 0 and < 900000"'), 3602), lt(d["expiry-interval"]) || m('Invalid expiry-interval value: "'.concat(d["expiry-interval"], ', expected an integer value > 0 and < 360000"'), 3602);
					var we, $ = (we = d["refresh-expired"]) !== null && we !== void 0 ? we : J.AUTO;
					pt($) ? d["refresh-expired"] = $ : m('Invalid type for parameter "refresh-expired", expected never|manual|auto, got "'.concat($, '" ').concat(typeof $ == "undefined" ? "undefined" : F($)), 3603);
					var Te, ae = (Te = d["refresh-timeout"]) !== null && Te !== void 0 ? Te : ie.AUTO;
					vt($) ? d["refresh-timeout"] = ae : m('Invalid type for parameter "refresh-timeout", expected never|manual|auto, got "'.concat(ae, '" ').concat(typeof ae == "undefined" ? "undefined" : F(ae)), 3603);
					var B = document.createElement("iframe"),
						se = document.createElement("div"),
						Dt = se.attachShadow({
							mode: "closed"
						});
					st(ge) || m('Invalid input for optional parameter "action", got "'.concat(ge, '"'), 3604), dt(ee) || m('Invalid input for optional parameter "cData", got "'.concat(ee, '"'), 3605);
					var Re = u(),
						de = K(Re);
					if (!(!Re || !de)) {
						var Vt = [],
							$e = d.execution === pe.RENDER;
						$e && Vt.push(oe.EXECUTE), y.lastWidgetIdx++;
						var Rr = {};
						y.widgetMap.set(Re, nt(Fe({
							idx: y.lastWidgetIdx,
							action: ge,
							cData: ee,
							chlPageData: Oe,
							cbSuccess: _e,
							cbError: G,
							cbExpired: be,
							cbTimeout: Ce,
							cbUnsupported: Qe,
							cbAfterInteractive: Ee,
							cbBeforeInteractive: xe,
							params: d,
							isStale: !1,
							isComplete: !1,
							isExpired: !1,
							isExecuting: $e,
							isFailed: !1,
							isResetting: !1,
							isExecuted: $e,
							isInitialized: !1,
							hasResponseParamEl: !1,
							msgQueue: Vt,
							rcV: Y,
							watchcat: {
								seq: 0,
								lastAckedSeq: 0,
								missingWidgetWarning: !1,
								overrunBeginSeq: 0
							}
						}, Rr), {
							widgetRenderStartTimeMs: s,
							widgetRenderEndTimeMs: 0,
							widgetParamsStartTimeMs: 0,
							widgetInitStartTimeMs: 0,
							shadow: Dt,
							wrapper: se,
							isOverrunning: !1
						})), Ot(y);
						var Je = y.widgetMap.get(Re);
						Je || m("Turnstile Initialization Error ", 3606), B.style.display = "none", B.style.border = "none", B.style.overflow = "hidden", B.setAttribute("src", Tt(Re, H, d, Y, !1, "g", ht(Je))), B.onerror = function() {
							if (G) {
								G == null || G(String(Xt.code));
								return
							}
							m("Could not load challenge from challenges.cloudflare.com.", 161)
						};
						var Pt = ["cross-origin-isolated", "fullscreen", "autoplay"],
							Ze;
						M((Ze = (f = document.featurePolicy) === null || f === void 0 || (t = f.features) === null || t === void 0 ? void 0 : t.call(f)) !== null && Ze !== void 0 ? Ze : [], xt) && Pt.push(xt), B.setAttribute("allow", Pt.join("; ")), B.setAttribute("sandbox", "allow-same-origin allow-scripts allow-popups"), B.id = de;
						var et;
						B.tabIndex = (et = d.tabindex) !== null && et !== void 0 ? et : 0, B.title = "Widget containing a Cloudflare security challenge", Dt.appendChild(B);
						var tt, Ar = (tt = d["response-field"]) !== null && tt !== void 0 ? tt : !0;
						if (Ar) {
							var Ne = document.createElement("input");
							Ne.type = "hidden";
							var rt;
							if (Ne.name = (rt = d["response-field-name"]) !== null && rt !== void 0 ? rt : bt, Ne.id = "".concat(de, "_response"), se.appendChild(Ne), typeof d["response-field-name"] != "string" && Tr(H)) {
								var ke = document.createElement("input");
								ke.type = "hidden", ke.name = _t, ke.id = "".concat(de, "_legacy_response"), se.appendChild(ke)
							}
						}
						if (y.isRecaptchaCompatibilityMode) {
							var Le = document.createElement("input");
							Le.type = "hidden", Le.name = Et, Le.id = "".concat(de, "_g_response"), se.appendChild(Le)
						}
						return v.appendChild(se), Je.widgetRenderEndTimeMs = P(), de
					}
				}
			},
			T = function() {
				var a, i = -1,
					t = !0,
					f = !1,
					s = void 0;
				try {
					for (var v = y.widgetMap[Symbol.iterator](), x; !(t = (x = v.next()).done); t = !0) {
						var w = Ae(x.value, 2),
							A = w[0],
							O = w[1];
						i < O.idx && (a = A, i = O.idx)
					}
				} catch (U) {
					f = !0, s = U
				} finally {
					try {
						!t && v.return != null && v.return()
					} finally {
						if (f) throw s
					}
				}
				return i === -1 && m("Could not find widget", 43778), a
			};

		function N() {
			return N = Bt(function(_, a, i, t) {
				var f, s, v, x, w, A, O, U, W, z, Q;
				return Ue(this, function(d) {
					switch (d.label) {
						case 0:
							if (f = _.params.sitekey, s = Er(), !s) return b("Cannot determine Turnstile's embedded location, aborting clearance redemption."), n(_, a, !1), [2];
							v = "h/".concat("g", "/"), x = new URL(s), w = "https", A = "", U = "".concat(w, "://").concat(x.host, "/cdn-cgi/challenge-platform/").concat(v, "rc/").concat(t).concat(A), d.label = 1;
						case 1:
							return d.trys.push([1, 6, , 7]), [4, fetch(U, {
								method: "POST",
								headers: {
									"Content-Type": "application/json"
								},
								redirect: "manual",
								body: JSON.stringify({
									sitekey: f,
									secondaryToken: i
								})
							})];
						case 2:
							return W = d.sent(), W.status === 200 ? [3, 3] : (b("Cannot determine Turnstile's embedded location, aborting clearance redemption, are you running Turnstile on a Cloudflare Zone?"), n(_, a, !1), [3, 5]);
						case 3:
							return [4, W.json()];
						case 4:
							if (z = d.sent(), "status" in z && z.status === "redeemed") return n(_, a, !0), [2];
							d.label = 5;
						case 5:
							return [3, 7];
						case 6:
							return Q = d.sent(), b("Error contacting Turnstile, aborting clearance remdeption."), n(_, a, !1), [3, 7];
						case 7:
							return [2]
					}
				})
			}), N.apply(this, arguments)
		}
		var k = function(_) {
			var a = _.data;
			if (a.source === V) {
				if (!Hr(_)) {
					b("Ignored message from wrong origin: ".concat(_.origin, "."));
					return
				}
				if (!(!a.widgetId || !y.widgetMap.has(a.widgetId))) {
					var i = K(a.widgetId),
						t = y.widgetMap.get(a.widgetId);
					if (!(!i || !t)) switch (a.event) {
						case "init": {
							var f;
							t.widgetInitStartTimeMs = P();
							var s = t.shadow.getElementById(i);
							s || m("Cannot initialize Widget, Element not found (#".concat(i, ")."), 3074), t.mode = a.mode, t.nextRcV = a.nextRcV, t.mode === j.INVISIBLE && t.params["refresh-expired"] === J.MANUAL && b("refresh-expired=manual is impossible in invisible mode, consider using '".concat(J.AUTO, "' or '").concat(J.NEVER, ".'")), t.mode !== j.MANAGED && t.params["refresh-timeout"] !== ie.AUTO && b("setting refresh-timeout has no effect on an invisible/non-interactive widget and will be ignored."), t.params.appearance === X.ALWAYS || t.isExecuting && t.params.appearance === X.EXECUTE ? kt(s, t) : br(s), s.style.display = "";
							var v = t.shadow.querySelector("#".concat(i));
							v || m("Received state for an unknown widget: ".concat(a.widgetId), 3078), (f = v.contentWindow) === null || f === void 0 || f.postMessage({
								source: V,
								widgetId: a.widgetId,
								event: "init"
							}, "*");
							break
						}
						case "translationInit": {
							var x = t.shadow.getElementById(i);
							x || m("Cannot initialize Widget, Element not found (#".concat(i, ")."), 3074);
							var w = new Map;
							t.displayLanguage = a.displayLanguage, Object.keys(a.translationData).forEach(function(ae) {
								w.set(ae, a.translationData[ae])
							}), Wr(x, w);
							break
						}
						case "languageUnsupported": {
							b("Language ".concat(t.params.language, " is not supported, falling back to: ").concat(a.fallback, ".")), t.displayLanguage = a.fallback;
							break
						}
						case "reject": {
							var A = t.shadow.getElementById(i);
							if (t.isExecuting = !1, A || m("Cannot initialize Widget, Element not found (#".concat(i, ")."), 3075), a.reason === "outdated_browser") {
								var O;
								(O = t.cbUnsupported) === null || O === void 0 || O.call(t)
							}
							break
						}
						case "food": {
							t.watchcat && a.seq > t.watchcat.lastAckedSeq && (t.watchcat.lastAckedSeq = a.seq);
							break
						}
						case "overrunBegin": {
							t.isOverrunning = !0, t.watchcat && (t.watchcat.overrunBeginSeq = t.watchcat.lastAckedSeq);
							break
						}
						case "overrunEnd": {
							t.isOverrunning = !1;
							break
						}
						case "complete": {
							c(t, Y, a.widgetId), t.response = a.token, a.sToken ? e(t, i, a.sToken, a.chlId) : n(t, i, !1);
							break
						}
						case "fail": {
							a.rcV && c(t, a.rcV, a.widgetId), a.cfChlOut && (t.cfChlOut = a.cfChlOut), a.cfChlOutS && (t.cfChlOutS = a.cfChlOutS), a.code && (t.errorCode = a.code), t.isExecuting = !1, t.isFailed = !0, t.isInitialized = !0, Nt(i);
							var U = t.cbError,
								W = a.code === De || a.code === Ve;
							if (W) {
								var z, Q = t.shadow.querySelector("#".concat(i));
								Q == null || (z = Q.contentWindow) === null || z === void 0 || z.postMessage({
									source: V,
									widgetId: a.widgetId,
									event: "forceFail"
								}, "*")
							}
							if (U) {
								var d;
								U(String((d = a.code) !== null && d !== void 0 ? d : Yt)) ? t.params.retry === fe.AUTO && !t.isResetting && r(t, i, W) : (a.code && b("Error: ".concat(a.code, ".")), r(t, i, W))
							} else a.code ? (r(t, i, W), m("Error: ".concat(a.code), 3076)) : r(t, i, !1);
							break
						}
						case "feedbackInit": {
							var ge = t.wrapper.querySelector("#".concat(i, "-fr"));
							if (ge) {
								b("A feedback report form is already opened for this widget.");
								return
							}
							St(i, t, a.feedbackOrigin);
							break
						}
						case "requestFeedbackData": {
							var ee, Oe = t.shadow.querySelector("#".concat(i));
							Oe || m("Received state for an unknown widget: #".concat(i, " / ").concat(a.widgetId), 3078), (ee = Oe.contentWindow) === null || ee === void 0 || ee.postMessage({
								source: V,
								widgetId: a.widgetId,
								event: "requestTurnstileResults"
							}, "*");
							break
						}
						case "turnstileResults": {
							var H, te, ue = (H = t.wrapper.parentNode) === null || H === void 0 ? void 0 : H.querySelector("#".concat(i, "-fr"));
							ue || m("Received state for an unknown widget: ".concat(a.widgetId), 3078), (te = ue.contentWindow) === null || te === void 0 || te.postMessage({
								source: V,
								widgetId: a.widgetId,
								event: "feedbackData",
								rayId: a.rayId,
								rcV: a.rcV,
								cfChlOut: t.cfChlOut,
								cfChlOutS: t.cfChlOutS,
								errorCode: t.errorCode,
								sitekey: a.sitekey,
								mode: a.mode,
								issuanceUserAgent: a.issuanceUserAgent
							}, "*");
							break
						}
						case "closeFeedbackReportIframe": {
							var re, ye = (re = t.wrapper.parentNode) === null || re === void 0 ? void 0 : re.querySelector("#".concat(i, "-fr"));
							ye || m("Received state for an unknown widget: ".concat(a.widgetId), 3078), pr("".concat(i, "-fr"));
							break
						}
						case "tokenExpired": {
							var ne, he = a.token;
							t.isExpired = !0, (ne = t.cbExpired) === null || ne === void 0 || ne.call(t, he), t.params["refresh-expired"] === J.AUTO && !t.isResetting && p(i);
							break
						}
						case "interactiveTimeout": {
							c(t, Y, a.widgetId), Nt(i);
							var le = t.cbTimeout;
							if (le ? le() : t.params["refresh-timeout"] === ie.NEVER && !t.isResetting && b("The widget encountered an interactive timeout and is set to never refresh. Consider defining a timeout handler and resetting the widget upon timeout as solving a widget in a timed-out state is going to fail."), t.params["refresh-timeout"] === ie.AUTO && !t.isResetting) {
								var _e = t.cbAfterInteractive;
								_e == null || _e(), p(i)
							}
							break
						}
						case "refreshRequest": {
							c(t, Y, a.widgetId), p(i);
							break
						}
						case "reloadRequest": {
							c(t, a.nextRcV, a.widgetId), p(i);
							break
						}
						case "interactiveBegin": {
							var be, Ce = t.shadow.getElementById(i);
							Ce || m("Cannot layout widget, Element not found (#".concat(i, ")."), 3076), (be = t.cbBeforeInteractive) === null || be === void 0 || be.call(t), t.params.appearance === X.INTERACTION_ONLY && kt(Ce, t);
							break
						}
						case "interactiveEnd": {
							var Ee;
							(Ee = t.cbAfterInteractive) === null || Ee === void 0 || Ee.call(t);
							break
						}
						case "widgetStale": {
							t.isStale = !0;
							break
						}
						case "requestExtraParams": {
							var xe;
							t.widgetParamsStartTimeMs = P();
							var G = t.shadow.querySelector("#".concat(i));
							G || m("Received state for an unknown widget: ".concat(a.widgetId), 3078), t.isResetting = !1;
							var Qe = {},
								we = P(),
								$ = {
									"w.iW": window.innerWidth,
									"ht.atrs": o(document.body.parentNode),
									pi: {
										xp: vr(t.wrapper).substring(0, ir),
										pfp: mr(document, nr, ar),
										sL: document.scripts.length,
										ssL: document.styleSheets.length,
										mL: document.getElementsByTagName("meta").length,
										t: gr(document.title),
										tL: document.getElementsByTagName("*").length,
										lH: window.location.href,
										sR: t.wrapper.shadowRoot === null
									}
								},
								Te = P() - we;
							(xe = G.contentWindow) === null || xe === void 0 || xe.postMessage(Fe({
								source: V,
								widgetId: a.widgetId,
								event: "extraParams",
								action: t.action,
								cData: t.cData,
								chlPageData: t.chlPageData,
								rcV: t.rcV,
								ch: "e4025c85ea63",
								au: y.scriptUrl,
								url: Er(),
								retry: t.params.retry,
								"expiry-interval": t.params["expiry-interval"],
								"retry-interval": t.params["retry-interval"],
								"refresh-expired": t.params["refresh-expired"],
								"refresh-timeout": t.params["refresh-timeout"],
								language: t.params.language,
								execution: t.params.execution,
								appearance: t.params.appearance,
								wPr: $,
								turnstileAgeMs: P() - y.turnstileLoadInitTimeMs,
								widgetAgeMs: P() - t.widgetRenderStartTimeMs,
								upgradeAttempts: y.upgradeAttempts,
								upgradeCompletedCount: y.upgradeCompletedCount,
								timeRenderMs: t.widgetRenderEndTimeMs - t.widgetRenderStartTimeMs,
								timeToInitMs: t.widgetInitStartTimeMs - t.widgetRenderEndTimeMs,
								timeToParamsMs: t.widgetParamsStartTimeMs - t.widgetInitStartTimeMs,
								tiefTimeMs: Te
							}, Qe), "*"), h(t, a.widgetId, G), t.isInitialized = !0;
							break
						}
					}
				}
			}
		};
		y.msgHandler = k, window.addEventListener("message", k);

		function R(_) {
			if (typeof _ == "string") {
				var a = ze(_);
				if (a && y.widgetMap.has(a)) return a;
				if (y.widgetMap.has(_)) return _;
				try {
					var i = document.querySelector(_);
					return i ? R(i) : null
				} catch (t) {
					return null
				}
			}
			return D(_, Element) ? g(_) : _ || y.widgetMap.size === 0 ? null : y.widgetMap.keys().next().value
		}
		var S = {};
		return nt(Fe({}, S), {
			ready: function(a) {
				if (y.scriptWasLoadedAsync && (b("turnstile.ready() would break if called *before* the Turnstile api.js script is loaded by visitors."), m("Remove async/defer from the Turnstile api.js script tag before using turnstile.ready().", 3857)), typeof a != "function" && m('turnstile.ready() expected a "function" argument, got "'.concat(typeof a == "undefined" ? "undefined" : F(a), '"'), 3841), y.isReady) {
					a();
					return
				}
				Ut.push(a)
			},
			implicitRender: Mt,
			execute: function(a, i) {
				var t = R(a);
				if (!t) {
					i === void 0 && m("Please provide 2 parameters to execute: container and parameters", 43521);
					var f = I(a, i);
					f || m("Failed to render widget", 43522), t = f
				}
				var s = y.widgetMap.get(t);
				if (s) {
					l(s, i);
					var v = K(t);
					if (s.isExecuting) {
						b("Call to execute() on a widget that is already executing (".concat(v, "), consider using reset() before execute()."));
						return
					}
					if (s.isExecuting = !0, s.response) {
						var x;
						s.isExecuting = !1, b("Call to execute() on a widget that was already executed (".concat(v, "), execute() will return the previous token obtained. Consider using reset() before execute() to obtain a fresh token.")), (x = s.cbSuccess) === null || x === void 0 || x.call(s, s.response, !1);
						return
					}
					s.isExpired && b("Call to execute on a expired-widget (".concat(v, "), consider using reset() before.")), s.isStale && (p(v), s.isExecuting = !0), s.msgQueue.push(oe.EXECUTE), s.isExecuted = !0;
					var w = s.shadow.querySelector("#".concat(v));
					if (w || (s.isExecuting = !1, m("Widget ".concat(v, " to execute was not found"), 43522)), s.isResetting) return;
					if (s.isInitialized && h(s, t, w), s.isInitialized && s.params.appearance === X.EXECUTE && kt(w, s), s.isExecuting) {
						var A, O = s.shadow.querySelector("#".concat(v));
						O || m("Received state for an unknown widget: ".concat(t), 3078), (A = O.contentWindow) === null || A === void 0 || A.postMessage({
							source: V,
							widgetId: t,
							event: "execute"
						}, "*")
					}
				}
			},
			render: I,
			reset: p,
			remove: E,
			_private: {
				showFeedback: function(a) {
					var i = R(a);
					if (i) {
						var t = K(i);
						if (t) {
							var f = y.widgetMap.get(i);
							f && St(t, f, We.CUSTOM)
						}
					}
				}
			},
			getResponse: function(a) {
				var i;
				if (typeof a == "undefined") {
					var t = T();
					if (t) {
						var f, s = y.widgetMap.get(t);
						return s != null && s.isExpired && b("Call to getResponse on a widget that expired, consider refreshing the widget."), (f = y.widgetMap.get(t)) === null || f === void 0 ? void 0 : f.response
					}
					m("Could not find a widget", 43794)
				}
				var v = R(a);
				return v || m("Could not find widget for provided container", 43778), (i = y.widgetMap.get(v)) === null || i === void 0 ? void 0 : i.response
			},
			isExpired: function(a) {
				var i;
				if (typeof a == "undefined") {
					var t = T();
					if (t) {
						var f, s;
						return (s = (f = y.widgetMap.get(t)) === null || f === void 0 ? void 0 : f.isExpired) !== null && s !== void 0 ? s : !1
					}
					m("Could not find a widget", 43794)
				}
				var v = R(a);
				v || m("Could not find widget for provided container", 43778);
				var x;
				return (x = (i = y.widgetMap.get(v)) === null || i === void 0 ? void 0 : i.isExpired) !== null && x !== void 0 ? x : !1
			}
		})
	}();

	function Br(e) {
		var r = e.getAttribute("data-sitekey"),
			n = {
				sitekey: r
			},
			o = e.getAttribute("data-tabindex");
		o && (n.tabindex = Number.parseInt(o, 10));
		var c = e.getAttribute("data-theme");
		c && (ot(c) ? n.theme = c : b('Unknown data-theme value: "'.concat(c, '".')));
		var u = e.getAttribute("data-size");
		if (u && (ft(u) ? n.size = u : b('Unknown data-size value: "'.concat(u, '".'))), 0) var g;
		var h = e.getAttribute("data-action");
		typeof h == "string" && (n.action = h);
		var l = e.getAttribute("data-cdata");
		typeof l == "string" && (n.cData = l);
		var p = e.getAttribute("data-retry");
		p && (ct(p) ? n.retry = p : b('Invalid data-retry value: "'.concat(p, ", expected either 'never' or 'auto'\".")));
		var E = e.getAttribute("data-retry-interval");
		if (E) {
			var I = Number.parseInt(E, 10);
			ut(I) ? n["retry-interval"] = I : b('Invalid data-retry-interval value: "'.concat(E, ', expected an integer value > 0 and < 900000".'))
		}
		var T = e.getAttribute("data-expiry-interval");
		if (T) {
			var N = Number.parseInt(T, 10);
			lt(N) ? n["expiry-interval"] = N : b('Invalid data-expiry-interval value: "'.concat(N, ', expected an integer value > 0 and < 360000".'))
		}
		var k = e.getAttribute("data-refresh-expired");
		k && (pt(k) ? n["refresh-expired"] = k : b('Unknown data-refresh-expired value: "'.concat(k, ", expected either: 'never', 'auto' or 'manual'.")));
		var R = e.getAttribute("data-refresh-timeout");
		R && (vt(R) ? n["refresh-timeout"] = R : b('Unknown data-refresh-timeout value: "'.concat(R, ", expected either: 'never', 'auto' or 'manual'.")));
		var S = e.getAttribute("data-language");
		S && (mt(S) ? n.language = S : b('Invalid data-language value: "'.concat(S, ", expected either: auto, or an ISO 639-1 two-letter language code (e.g. en) or language and country code (e.g. en-US).")));

		function _(w) {
			var A = e.getAttribute(w);
			return A && window[A] ? window[A] : void 0
		}
		var a = ["error-callback", "unsupported-callback", "callback", "expired-callback", "timeout-callback", "after-interactive-callback", "before-interactive-callback"];
		a.forEach(function(w) {
			n[w] = _("data-".concat(w))
		});
		var i = e.getAttribute("data-feedback-enabled");
		i ? (Qt(i) || b('Invalid data-feedback-enabled value: "'.concat(i, ", expected either: 'true' or 'false'. Value is ignored.")), n["feedback-enabled"] = i === "true") : n["feedback-enabled"] = !0;
		var t, f = (t = e.getAttribute("data-response-field")) !== null && t !== void 0 ? t : "true";
		n["response-field"] = f === "true";
		var s = e.getAttribute("data-response-field-name");
		s && (n["response-field-name"] = s);
		var v = e.getAttribute("data-execution");
		v && (yt(v) ? n.execution = v : b('Unknown data-execution value: "'.concat(v, ", expected either: 'render' or 'execute'.")));
		var x = e.getAttribute("data-appearance");
		return x && (gt(x) ? n.appearance = x : b('Unknown data-appearance value: "'.concat(x, ", expected either: 'always', 'execute', or 'interaction-only'."))), n
	}

	function jr() {
		var e = !0;
		Ct(y, e), y.msgHandler && window.removeEventListener("message", y.msgHandler), yr(window.turnstile, y)
	}
	ve = !1, C = fr(), y.scriptWasLoadedAsync = (Ge = C == null ? void 0 : C.loadedAsync) !== null && Ge !== void 0 ? Ge : !1, y.scriptUrl = (Xe = C == null ? void 0 : C.src) !== null && Xe !== void 0 ? Xe : "undefined", C != null && C.params && (me = C.params.get("compat"), (me == null ? void 0 : me.toLowerCase()) === "recaptcha" ? window.grecaptcha ? b("grecaptcha is already defined. The compatibility layer will not be enabled.") : (b("Compatibility layer enabled."), y.isRecaptchaCompatibilityMode = !0, window.grecaptcha = Ft) : me !== null && b('Unknown value for api.js?compat: "'.concat(me, '", ignoring.')), C.params.forEach(function(e, r) {
		M(["onload", "compat", "_cb", "_upgrade", "_reload", "render"], r) || b('Unknown parameter passed to api.js: "?'.concat(r, '=...", ignoring.'))
	}), ve = C.params.get("_upgrade") === "true", q = C.params.get("onload"), q && !ve && setTimeout(function() {
		typeof window[q] == "function" ? window[q]() : (b("Unable to find onload callback '".concat(q, "' immediately after loading, expected 'function', got '").concat(F(window[q]), "'.")), setTimeout(function() {
			typeof window[q] == "function" ? window[q]() : b("Unable to find onload callback '".concat(q, "' after 1 second, expected 'function', got '").concat(F(window[q]), "'."))
		}, 1e3))
	}, 0)), Lt = "turnstile" in window, Lt && !ve ? b("Turnstile already has been loaded. Was Turnstile imported multiple times?") : (Lt && ve && (hr(window.turnstile, y), Ot(y), (C == null || (Ye = C.params) === null || Ye === void 0 ? void 0 : Ye.get("render")) !== "explicit" && setTimeout(Mt, 0)), window.turnstile = Ft, ve || ((C == null || (Ke = C.params) === null || Ke === void 0 ? void 0 : Ke.get("render")) !== "explicit" && Ut.push(Mt), document.readyState === "complete" || document.readyState === "interactive" ? setTimeout(_r, 0) : window.addEventListener("DOMContentLoaded", _r))), xr = 24 * 60 * 60 * 1e3, window.setTimeout(jr, xr);
	var ve, C, Ge, Xe, me, q, Lt, Ye, Ke, xr;
})();