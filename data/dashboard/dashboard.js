! function() {
	try {
		var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
			n = (new Error).stack;
		n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "ed5bbaea-4b6a-5fbb-802e-35c3e0425e98")
	} catch (e) {}
}();
(self.webpackChunk = self.webpackChunk || []).push([
	[44410, 34254, 78770], {
		"../flags.ts": function(W, v, t) {
			"use strict";
			t.d(v, {
				J8: function() {
					return i
				},
				Jd: function() {
					return c
				},
				QY: function() {
					return _
				},
				Qw: function() {
					return a
				},
				ki: function() {
					return u
				}
			});
			var e = t("../react/common/selectors/accountSelectors.ts"),
				o = t("../react/utils/url.ts"),
				s = t("../../../../node_modules/query-string/query-string.js"),
				d = t.n(s),
				l = t("../../../../node_modules/@cloudflare/util-cache/es/index.js"),
				m;
			const a = () => Object.keys(l.Z).reduce((y, T) => (T.indexOf("cf_beta.") === 0 && l.Z.get(T) === "true" && y.push(T.split(".").slice(1).join(".")), y), []),
				u = () => {
					var y, T, O;
					return ((y = window) === null || y === void 0 || (T = y.bootstrap) === null || T === void 0 || (O = T.data) === null || O === void 0 ? void 0 : O.user) && Array.isArray(window.bootstrap.data.user.betas) && window.bootstrap.data.user.betas.length > 0 ? window.bootstrap.data.user.betas : []
				};
			if (((m = window) === null || m === void 0 ? void 0 : m.location) && l.Z) {
				const y = d().parse(window.location.search);
				y.beta_on && l.Z.set(`cf_beta.${y.beta_on}`, !0), y.beta_off && l.Z.set(`cf_beta.${y.beta_off}`, !1)
			}
			const E = {},
				n = y => {
					var T, O, h;
					return Object.prototype.hasOwnProperty.call(E, y) ? E[y] : ((T = window) === null || T === void 0 || (O = T.bootstrap) === null || O === void 0 || (h = O.data) === null || h === void 0 ? void 0 : h.user) && Array.isArray(window.bootstrap.data.user.betas) && window.bootstrap.data.user.betas.some(S => S === y) ? (E[y] = !0, !0) : (E[y] = !1, !1)
				},
				r = y => l.Z ? l.Z.get(`cf_beta.${y}`) === !0 : !1,
				i = y => r(y) || n(y),
				p = () => !0,
				c = () => {
					var y, T, O;
					return ((y = window) === null || y === void 0 || (T = y.bootstrap) === null || T === void 0 || (O = T.data) === null || O === void 0 ? void 0 : O.user) && /@cloudflare\.com$/.test(window.bootstrap.data.user.email)
				},
				_ = y => {
					const T = (0, e.uF)(y),
						O = (T == null ? void 0 : T.roles) || [];
					return (0, o.qR)(location.pathname) && O.length === 1 && O.some(h => h === "Administrator Read Only")
				}
		},
		"../init.ts": function(W, v, t) {
			"use strict";
			t.r(v);
			var e = t("../../../../node_modules/regenerator-runtime/runtime.js"),
				o = t("../../../../node_modules/url-search-params-polyfill/index.js"),
				s = t("../libs/init/initGlobal.ts"),
				d = t("../node_modules/isomorphic-fetch/fetch-npm-browserify.js"),
				l = t("../../../../node_modules/fetch-intercept/lib/browser.js");

			function m(w) {
				for (var U = 1; U < arguments.length; U++) {
					var J = arguments[U] != null ? Object(arguments[U]) : {},
						le = Object.keys(J);
					typeof Object.getOwnPropertySymbols == "function" && le.push.apply(le, Object.getOwnPropertySymbols(J).filter(function(ye) {
						return Object.getOwnPropertyDescriptor(J, ye).enumerable
					})), le.forEach(function(ye) {
						a(w, ye, J[ye])
					})
				}
				return w
			}

			function a(w, U, J) {
				return U = u(U), U in w ? Object.defineProperty(w, U, {
					value: J,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : w[U] = J, w
			}

			function u(w) {
				var U = E(w, "string");
				return typeof U == "symbol" ? U : String(U)
			}

			function E(w, U) {
				if (typeof w != "object" || w === null) return w;
				var J = w[Symbol.toPrimitive];
				if (J !== void 0) {
					var le = J.call(w, U || "default");
					if (typeof le != "object") return le;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (U === "string" ? String : Number)(w)
			}
			const n = w => {
				const U = w && w.headers || {},
					J = new Headers(U);
				return J.append("X-Cross-Site-Security", "dash"), m({}, w, {
					headers: J
				})
			};
			(0, l.register)({
				request: (w, U) => {
					try {
						return new URL(w), w === "https://cdn.cookielaw.org/logos/static/ot_guard_logo.svg" ? ["/static/vendor/onetrust/logos/ot_guard_logo.svg", U] : [w, U]
					} catch {
						return [w, n(U)]
					}
				}
			});
			var r = t("../../../../node_modules/@sentry/core/esm/exports.js"),
				i = t("../../../../node_modules/redux-grim/dist/redux-grim.es.js"),
				p = t("../react/app/providers/storeContainer.js");
			let c = "";
			const _ = 61;

			function y(w) {
				const U = w.substr(1);
				if (U && c !== U) {
					const J = document.getElementById(U);
					if (J) {
						const le = J.getBoundingClientRect().top;
						if (le > 0) {
							const ye = le - _;
							document.documentElement.scrollTop = ye
						}
					}
				}
				c = U
			}

			function T(w) {
				w.listen(U => y(U.hash))
			}
			var O = t("../../../../node_modules/cookie/index.js"),
				h = t("../../../../node_modules/@cloudflare/style-const/es/index.js");
			const S = "CF_dash_version",
				g = "cf_fv_preview",
				C = "cf_pv",
				M = "current",
				b = "hash",
				R = "deploymentPreview",
				A = "fragmentPreview",
				L = w => w === M ? P() : H(),
				P = () => new Date("Thu, 01 Jan 1970 00:00:00 UTC"),
				H = (w = 72) => {
					const U = 36e5;
					return new Date(Date.now() + w * U)
				},
				K = w => {
					switch (w) {
						case 429:
							return {
								title: "Rate Limit Exceeded", description: 'This IP address has been rate limited. Please wait one minute and then <a href="">reload this page</a> to try again. If the issue persists, please visit the <a href="https://cloudflarestatus.com">Cloudflare Status page</a> for up-to-date information regarding any ongoing issues.'
							};
						case 503:
							return {
								title: "The Cloudflare Dashboard is temporarily under maintenance.", description: 'Please visit the <a href="https://www.cloudflarestatus.com/incidents/5xxwjqd2lwgp">Cloudflare Status page</a> for up-to-date information regarding the maintenance.'
							};
						default:
							return {
								title: "The Cloudflare Dashboard is temporarily unavailable.", description: 'Please <a href="">reload this page</a> to try again. If the issue persists, please visit the <a href="https://cloudflarestatus.com">Cloudflare Status page</a> for up-to-date information regarding any ongoing issues.'
							}
					}
				},
				Q = (w, U = !1) => {
					var J;
					const le = K(w),
						ye = `
  <style type="text/css">
    #loading-state {
      display: flex;
      height: 100vh;
      width: 100vw;
      justify-content: center;
      align-items: center;
    }
    .dark-mode body {
      background-color: #1d1d1d;
      color: #d9d9d9;
    }
    .error-container {
      line-height: 1.5;
      font-size: 20px;
      padding: 32px;
    }
    .error-container a {
      color: inherit;
      text-decoration: underline;
    }
    .error-container h1 {
      line-height: 1.5;
      font-size: inherit;
      font-weight: 600;
      margin: 0 auto 16px;
    }
    .error-container p {
      margin: 0;
      max-width: 37.5rem;
    }
    .error-container svg {
      width: 128px;
      margin-bottom: 16px;
    }
  </style>
  <div class="error-container">
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1230.574 519.774" xml:space="preserve">
      <path fill="#F78100" d="M784.025,512.011l5.872-20.311c6.998-24.169,4.394-46.511-7.349-62.926c-10.801-15.122-28.804-24.022-50.666-25.056l-414.114-5.281c-2.788-0.147-5.096-1.403-6.518-3.471c-1.44-2.123-1.773-4.856-0.886-7.478c1.366-4.08,5.41-7.164,9.62-7.349l417.954-5.299c49.576-2.271,103.252-42.505,122.048-91.564l23.837-62.28c0.657-1.696,0.952-3.493,0.94-5.294c-0.007-0.984-0.078-1.969-0.294-2.94C857.383,91.028,748.758,0,618.863,0c-119.685,0-221.312,77.254-257.76,184.623c-23.523-17.652-53.62-27.031-85.969-23.801c-57.423,5.706-103.565,51.94-109.271,109.363c-1.496,14.901-0.277,29.284,3.158,42.8C75.222,315.718,0,392.566,0,487.029c0,8.549,0.646,16.95,1.846,25.166c0.591,3.988,3.952,6.98,7.977,6.98l764.527,0.092c0.076,0,0.142-0.034,0.218-0.036C778.942,519.134,782.79,516.24,784.025,512.011z"/>
      <path fill="#FBAC42" d="M921.982,225.558c-3.841,0-7.663,0.111-11.466,0.295c-0.628,0.033-1.224,0.185-1.796,0.385c-1.985,0.696-3.566,2.305-4.168,4.397l-16.286,56.242c-6.998,24.169-4.395,46.493,7.349,62.907c10.801,15.14,28.804,24.022,50.665,25.056l88.277,5.299c2.604,0.129,4.893,1.385,6.297,3.416c1.477,2.142,1.809,4.893,0.923,7.515c-1.385,4.081-5.41,7.164-9.601,7.349l-91.73,5.299c-49.798,2.29-103.473,42.505-122.27,91.564l-6.629,17.319c-1.206,3.134,1.039,6.472,4.354,6.635c0.084,0.004,0.159,0.031,0.244,0.031h315.626c3.766,0,7.127-2.456,8.142-6.075c5.484-19.498,8.402-40.048,8.402-61.301C1148.315,326.889,1046.984,225.558,921.982,225.558z"/>
    </svg>
    <h1 id="error-title">${le.title}</h1>
    <p id="error-description">${le.description}</p>
  </div>
  `,
						De = U ? `
    <style>
    .preview-banner {
      width: 680px;
      padding: 32px;
      background: ${h.fk.orange[9]};
      border-radius: 5px;
      box-shadow: 1px 1px 4px 0px #999;
    }
    .preview-banner-branch {
      font-family: Courier New;
      font-weight: bold;
    }
    </style>
    <div class="preview-banner">
      <p>You are currently on a preview for branch: <span class="preview-banner-branch">${(J=window.build)===null||J===void 0?void 0:J.branch}</span>.</p>
      <a href="${window.location.href}?deploymentPreview=current">Click here to go to the live dashboard deployment</a>
    </div>` : "";
					return ye + De
				},
				pe = w => {
					var U;
					const J = document.getElementById(w);
					!J || (U = J.parentNode) === null || U === void 0 || U.removeChild(J)
				};

			function te() {
				const w = document.getElementById("loading-state");
				w == null || w.classList.add("hide"), w == null || w.addEventListener("transitionend", () => {
					["loading-state", "loading-styles", "loading-script-dark-mode", "loading-script-i18n"].forEach(pe)
				})
			}

			function Y(w) {
				var U;
				const J = document.getElementById("loading-state"),
					le = !!((U = O.parse(document.cookie)) === null || U === void 0 ? void 0 : U[S]);
				!J || (J.innerHTML = Q(w == null ? void 0 : w.code, le))
			}
			var ie = t("../utils/initStyles.ts"),
				Z = t("../../../../node_modules/@cloudflare/gates-redux/dist/index.mjs"),
				j = t("../../../../node_modules/@sentry/react/esm/sdk.js"),
				$ = t("../react/common/selectors/languagePreferenceSelector.ts"),
				F = t("../flags.ts"),
				X = t("../utils/getDashVersion.ts");
			const oe = "https://a32e52f8871f439f850537cab9b0645a@sentry10.cfdata.org/218",
				Ee = !0,
				B = [/cloudflare\.com/, /staging\.cloudflare\.com/, /cloudflare\.lol/, /127\.0\.0\.1/, /webpack/, /localhost/],
				I = ["top.GLOBALS", "originalCreateNotification", "canvas.contentDocument", "MyApp_RemoveAllHighlights", "http://tt.epicplay.com", "Can't find variable: ZiteReader", "jigsaw is not defined", "ComboSearch is not defined", "http://loading.retry.widdit.com/", "atomicFindClose", "fb_xd_fragment", "bmi_SafeAddOnload", "EBCallBackMessageReceived", "conduitPage", "Script error.", "Failed to construct 'Worker'", "sendBeacon", "ResizeObserver loop limit exceeded", "ResizeObserver loop completed with undelivered notifications.", /Cannot read properties of undefined \(reading '(setCurrentPosition|setDefaultPosition|setMaxSize|setScreenSize|fireEvent|fireReadyEvent|audioVolumeChange|fireChangeEvent)'\)/, "NetworkError when attempting to fetch resource", "Failed to fetch", "Load failed", "The user aborted a request"];
			var x = t("../utils/sentry/lastSentEventId.ts"),
				q = t("../../../../node_modules/@sentry/core/esm/transports/base.js"),
				ee = t("../../../../node_modules/@sentry/utils/esm/syncpromise.js");
			const de = w => {
				const U = async J => {
					var le, ye;
					const De = {
						envelope: J.body,
						url: w.url,
						isPreviewDeploy: (le = window) === null || le === void 0 || (ye = le.build) === null || ye === void 0 ? void 0 : ye.isPreviewDeploy,
						release: (0, X.t)()
					};
					try {
						const Ie = await fetch("https://platform.dash.cloudflare.com/sentry/envelope", {
							method: "POST",
							headers: {
								Accept: "*/*",
								"Content-Type": "application/json"
							},
							body: JSON.stringify(De)
						});
						return {
							statusCode: Ie.status,
							headers: {
								"x-sentry-rate-limits": Ie.headers.get("X-Sentry-Rate-Limits"),
								"retry-after": Ie.headers.get("Retry-After")
							}
						}
					} catch (Ie) {
						return console.log(Ie), (0, ee.$2)(Ie)
					}
				};
				return q.q(w, U)
			};
			var he = t("../../../../node_modules/@sentry/tracing/esm/index.js"),
				Se = t("../../../../node_modules/history/esm/history.js"),
				je = (0, Se.lX)(),
				we = t("../../../../node_modules/@sentry/utils/esm/worldwide.js"),
				$e = t("../react/utils/url.ts");
			const Ke = (0, we.Rf)();
			let z;

			function se(w) {
				return ge(w, "react-router-v5")
			}

			function ge(w, U) {
				return (J, le = !0, ye = !0) => {
					le && Ke && Ke.location && (z = J({
						name: (0, $e.Fl)(Ke.location.pathname),
						op: "pageload",
						tags: {
							"routing.instrumentation": U
						}
					})), ye && w.listen && w.listen((De, Ie) => {
						if (Ie && (Ie === "PUSH" || Ie === "POP")) {
							z && z.finish();
							const nt = {
								"routing.instrumentation": U
							};
							z = J({
								name: (0, $e.Fl)(De.pathname),
								op: "navigation",
								tags: nt
							})
						}
					})
				}
			}
			var N = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				me = t.n(N),
				Pe = t("../../../common/intl/intl-core/src/errors.ts"),
				Be = t("../../../../node_modules/@sentry/utils/esm/object.js"),
				ze = t("../react/common/middleware/sparrow/errors.ts");

			function Oe(w, U, J) {
				return U = Ue(U), U in w ? Object.defineProperty(w, U, {
					value: J,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : w[U] = J, w
			}

			function Ue(w) {
				var U = Fe(w, "string");
				return typeof U == "symbol" ? U : String(U)
			}

			function Fe(w, U) {
				if (typeof w != "object" || w === null) return w;
				var J = w[Symbol.toPrimitive];
				if (J !== void 0) {
					var le = J.call(w, U || "default");
					if (typeof le != "object") return le;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (U === "string" ? String : Number)(w)
			}
			class We {
				constructor() {
					Oe(this, "name", We.id)
				}
				setupOnce() {
					t.g.console && (0, Be.hl)(t.g.console, "error", U => (...J) => {
						const le = J.find(ye => ye instanceof Error);
						if (oe && le) {
							let ye, De = !0;
							if (le instanceof ze.ez) {
								const Ie = le instanceof ze.oV ? le.invalidProperties : void 0;
								ye = {
									tags: {
										"sparrow.eventName": le.eventName
									},
									extra: {
										sparrow: {
											eventName: le.eventName,
											invalidProperties: Ie
										}
									},
									fingerprint: [le.name ? le.name : "SparrowValidationError"]
								}, De = !1
							} else if (le instanceof N.SparrowIdCookieError) ye = {
								extra: {
									sparrowIdCookie: le.cookie
								},
								fingerprint: [le.name ? le.name : "SparrowIdCookieError"]
							};
							else if (le.name === "ChunkLoadError") {
								ye = {
									fingerprint: [le.name]
								};
								try {
									ye.tags = {
										chunkId: le.message.split(" ")[2],
										chunkUrl: le.request
									}
								} catch {}
							} else le instanceof Pe.YB && (ye = {
								fingerprint: ["TranslatorError", le.translationKey]
							});
							De && r.Tb(le, ye)
						}
						typeof U == "function" && U.apply(t.g.console, J)
					})
				}
			}
			Oe(We, "id", "ConsoleErrorIntegration");
			var Ye = null;
			const V = () => {
					if (oe && Ee) {
						var w, U, J, le, ye, De, Ie, nt, _t, Xe;
						let wt = "production";
						((w = window) === null || w === void 0 || (U = w.build) === null || U === void 0 ? void 0 : U.isPreviewDeploy) && (wt += "-preview"), j.S({
							dsn: oe,
							release: (0, X.t)(),
							environment: wt,
							ignoreErrors: I,
							allowUrls: B,
							autoSessionTracking: !1,
							integrations: Et => [...Et.filter(qt => qt.name !== "GlobalHandlers" && qt.name !== "TryCatch"), new We, new he.jK.BrowserTracing({
								routingInstrumentation: se(je)
							})],
							tracesSampleRate: 0,
							transport: de,
							beforeSend: Et => (x.e.setEventId(Et.event_id), Et)
						});
						const Ot = (0, p.bh)().getState();
						r.rJ({
							LOCAL_STORAGE_FLAGS: (0, F.Qw)(),
							USER_BETA_FLAGS: (0, F.ki)(),
							meta: {
								connection: {
									type: (J = window) === null || J === void 0 || (le = J.navigator) === null || le === void 0 || (ye = le.connection) === null || ye === void 0 ? void 0 : ye.effectiveType,
									bandwidth: (De = window) === null || De === void 0 || (Ie = De.navigator) === null || Ie === void 0 || (nt = Ie.connection) === null || nt === void 0 ? void 0 : nt.downlink
								},
								languagePreference: (0, $.r)(Ot),
								isPreviewDeploy: (_t = window) === null || _t === void 0 || (Xe = _t.build) === null || Xe === void 0 ? void 0 : Xe.isPreviewDeploy
							},
							utilGates: (0, Z.T2)(Ot)
						}), window.addEventListener("unhandledrejection", function(Et) {})
					}
				},
				ce = w => {
					w ? r.av({
						id: w
					}) : r.av(null)
				};
			var fe = t("../../../../node_modules/@cloudflare/util-cache/es/index.js"),
				Re = () => {
					let w;
					try {
						w = decodeURIComponent(window.location.search)
					} catch {
						console.log("Could not decode query string. Using non-decoded value."), w = window.location.search
					}
					if (!w.includes("remote[")) return;
					const U = new URLSearchParams(w),
						J = {};
					for (let [le, ye] of U) le.includes("remote") && (J[le.replace(/remote\[|\]/g, "")] = ye);
					fe.Z.set("mfe-remotes", JSON.stringify(J))
				},
				xe = t("../../../../node_modules/@cloudflare/gates-react-redux/dist/index.mjs"),
				Ze = t("../node_modules/uuid/dist/esm-browser/v4.js");
			const ot = "ANON_USER_ID";

			function lt() {
				var w, U, J, le;
				let ye = (w = t.g) === null || w === void 0 || (U = w.bootstrap) === null || U === void 0 || (J = U.data) === null || J === void 0 || (le = J.user) === null || le === void 0 ? void 0 : le.id;
				if (!ye) {
					let De = fe.Z.get(ot);
					if (!De) {
						let Ie = (0, Ze.Z)();
						fe.Z.set(ot, Ie), De = Ie
					}
					return De
				}
				return ye
			}
			async function at() {
				const w = (0, p.bh)();
				w.dispatch((0, xe.nM)({
					apiKey: "a23ecf39a767418a832c8f8a5a902a8c",
					environment: "production"
				})), await w.dispatch((0, Z.UL)({
					userId: lt()
				}))
			}
			class dt extends Error {
				constructor(U, J) {
					super(J);
					this.name = `${U} ${J}`
				}
			}
			const pt = () => {
					document.cookie.split(";").forEach(U => {
						const [J] = U.trim().split("=");
						document.cookie = `${J}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;`
					})
				},
				st = async () => {
					let w = await fetch("/api/v4/system/bootstrap", {
						credentials: "same-origin"
					});
					if (!w.ok) throw w.headers.get("content-type") === "text/html" && (await w.text()).toLowerCase().includes("cookie too large") && (r.$e(function(ye) {
						ye.setTag("init", "cookieTooLarge"), r.Tb("Request Header Or Cookie Too Large in Bootstrap request")
					}), pt(), window.location.reload()), new dt("Bootstrap API Failure", w == null ? void 0 : w.status);
					return (await w.json()).result.data
				};
			var Ge = t("webpack/sharing/consume/default/react/react"),
				Ae = t.n(Ge),
				Qe = t("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				mt = t("webpack/sharing/consume/default/react-dom/react-dom"),
				it = t("webpack/sharing/consume/default/react-redux/react-redux"),
				gt = t("../../../../node_modules/swr/core/dist/index.mjs"),
				G = t("../../../../node_modules/@cloudflare/component-modals/es/index.js"),
				ue = t("../../../../node_modules/svg-classlist-polyfill/polyfill.js"),
				Te = t("../react/shims/focus-visible.js"),
				ne = t("../react/app/components/DeepLink/index.ts"),
				ae = t("../../../../node_modules/prop-types/index.js"),
				Ce = t.n(ae),
				k = t("../react/utils/translator.tsx"),
				re = t("webpack/sharing/consume/default/@cloudflare/intl-react/@cloudflare/intl-react"),
				ve = t("../../../dash/intl/intl-translations/src/index.ts"),
				Le = t("../../../../node_modules/query-string/query-string.js"),
				Ne = t.n(Le),
				Ve = t("../react/common/actions/userActions.ts"),
				Je = t("../react/common/selectors/userSelectors.ts"),
				qe = t("../react/utils/i18n.ts"),
				vt = t("../react/utils/bootstrap.ts");

			function ut(w) {
				for (var U = 1; U < arguments.length; U++) {
					var J = arguments[U] != null ? Object(arguments[U]) : {},
						le = Object.keys(J);
					typeof Object.getOwnPropertySymbols == "function" && le.push.apply(le, Object.getOwnPropertySymbols(J).filter(function(ye) {
						return Object.getOwnPropertyDescriptor(J, ye).enumerable
					})), le.forEach(function(ye) {
						et(w, ye, J[ye])
					})
				}
				return w
			}

			function et(w, U, J) {
				return U = jt(U), U in w ? Object.defineProperty(w, U, {
					value: J,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : w[U] = J, w
			}

			function jt(w) {
				var U = bt(w, "string");
				return typeof U == "symbol" ? U : String(U)
			}

			function bt(w, U) {
				if (typeof w != "object" || w === null) return w;
				var J = w[Symbol.toPrimitive];
				if (J !== void 0) {
					var le = J.call(w, U || "default");
					if (typeof le != "object") return le;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (U === "string" ? String : Number)(w)
			}
			let rt = Ne().parse(location.search);
			const Mt = w => {
					const U = (0, vt.$8)() ? [(0, ve.Fy)(ve.if.changes), (0, ve.Fy)(ve.if.common), (0, ve.Fy)(ve.if.navigation), (0, ve.Fy)(ve.if.overview), (0, ve.Fy)(ve.if.onboarding), (0, ve.Fy)(ve.if.invite), (0, ve.Fy)(ve.if.login), (0, ve.Fy)(ve.if.dns), (0, ve.Fy)(ve.n4.ssl_tls), (0, ve.Fy)(ve.if.message_inbox), (0, ve.Fy)(ve.if.welcome)] : [(0, ve.Fy)(ve.if.common), (0, ve.Fy)(ve.if.invite), (0, ve.Fy)(ve.if.login), (0, ve.Fy)(ve.if.onboarding)];
					rt.lang ? $t(w) : fe.Z.get(qe.th) && Rt(w, (0, qe.Kd)());
					const J = async le => (await Promise.all(U.map(De => De(le)))).reduce((De, Ie) => ut({}, De, Ie), {});
					return Ae().createElement(re.LocaleContext.Provider, {
						value: w.languagePreference
					}, Ae().createElement(re.I18nProvider, {
						translator: k.Vb,
						locale: w.languagePreference
					}, Ae().createElement(re.I18nLoader, {
						loadPhrases: J
					}, w.children)))
				},
				$t = async w => {
					let U = rt.lang.substring(0, rt.lang.length - 2) + rt.lang.substring(rt.lang.length - 2, rt.lang.length).toUpperCase();
					if (!(0, $.v)(U)) {
						console.warn(`${U} is not a supported locale.`), delete rt.lang, w.history.replace({
							search: Ne().stringify(rt)
						});
						return
					}(0, qe.i_)(U), delete rt.lang, Rt(w, U), w.isAuthenticated || w.history.replace({
						search: Ne().stringify(rt)
					})
				}, Rt = async (w, U) => {
					if (w.isAuthenticated) try {
						await w.setUserCommPreferences({
							"language-locale": U
						}, {
							hideErrorAlert: !0
						}), fe.Z.remove(qe.th), w.history.replace({
							search: Ne().stringify(rt)
						})
					} catch (J) {
						fe.Z.set(qe.th, !0), console.error(J)
					} else fe.Z.set(qe.th, !0)
				}, Nt = w => {
					const U = (0, Je.PR)(w);
					return {
						isAuthenticated: !!(U && U.id),
						languagePreference: (0, qe.Kd)() || (0, $.r)(w)
					}
				}, Wt = {
					setUserCommPreferences: Ve.V_
				};
			var Gt = (0, Qe.withRouter)((0, it.connect)(Nt, Wt)(Mt));
			Mt.propTypes = {
				history: Ce().object,
				languagePreference: Ce().string.isRequired,
				children: Ce().node.isRequired,
				isAuthenticated: Ce().bool,
				setUserCommPreferences: Ce().func.isRequired
			};
			var zt = t("../../../../node_modules/@cloudflare/style-provider/es/StyleProvider.js"),
				Kt = t("../../../../node_modules/@cloudflare/style-provider/es/createRenderer.js");
			let f;
			const D = ({
				selectorPrefix: w = "c_"
			} = {}) => (f || (f = (0, Kt.Z)({
				dev: !1,
				selectorPrefix: w
			})), f);
			var _e = t("../react/common/components/ModalManager.tsx"),
				be = t("../react/app/components/ErrorBoundary.tsx"),
				He = t("../react/common/actions/notificationsActions.ts");
			const Ct = (t.g.bootstrap || {}).data || {};
			class ht extends Ae().Component {
				componentDidMount() {
					Ct.messages && this.dispatchNotificationActions(Ct.messages)
				}
				dispatchNotificationActions(U) {
					U.forEach(J => {
						const {
							type: le,
							message: ye,
							persist: De
						} = J;
						["success", "info", "warn", "error"].includes(le) && this.props.notifyAdd(le, (0, k.ZP)(ye), {
							persist: !!De
						})
					})
				}
				render() {
					return null
				}
			}
			var It = (0, Qe.withRouter)((0, it.connect)(null, {
				notifyAdd: He.add
			})(ht));
			ht.propTypes = {
				notifyAdd: Ce().func.isRequired
			};
			var ct = t("../react/app/redux/index.ts");

			function Pt() {
				var w;
				const U = (0, ct.p4)(Je.PR),
					J = (U == null || (w = U.email) === null || w === void 0 ? void 0 : w.endsWith("@cloudflare.com")) ? "cf-internal-employee" : "regular-user",
					le = (0, xe.Yc)();
				(0, Ge.useEffect)(() => {
					le({
						userType: J
					})
				}, [J, le])
			}
			var Tt = t("../react/common/selectors/entitlementsSelectors.ts"),
				At = t("../react/common/selectors/accountSelectors.ts");
			const St = ["accountId", "is_ent"];

			function Lt() {
				const w = (0, xe.f7)(),
					U = (0, Qe.useHistory)(),
					J = (0, $e.uW)(U.location.pathname),
					le = (0, xe.Yc)(),
					ye = (0, xe.O$)(),
					De = (0, ct.p4)(Tt.u1),
					Ie = !De.isRequesting && !!De.data,
					nt = (0, ct.p4)(Tt.p1),
					_t = (0, ct.p4)(At.Xu),
					Xe = (0, ct.p4)(At.uF),
					wt = !_t.isRequesting && !!_t.data;
				(0, Ge.useEffect)(() => {
					if (J && wt && Xe && Ie && J === Xe.account.id) {
						var Ot, Et, xt;
						le({
							accountId: Xe.account.id,
							is_ent: nt,
							is_free_account: !nt && !(Xe == null || (Ot = Xe.account.meta) === null || Ot === void 0 ? void 0 : Ot.has_business_zones) && !(Xe == null || (Et = Xe.account.meta) === null || Et === void 0 ? void 0 : Et.has_pro_zones) && !(Xe == null || (xt = Xe.account.meta) === null || xt === void 0 ? void 0 : xt.has_enterprise_zones)
						})
					} else(!J || J in w && w.accountId !== J) && ye(St)
				}, [wt, Xe, le, ye, Ie, nt, J, w])
			}
			var tt = t("../react/common/selectors/zoneSelectors.ts");

			function Vt() {
				const w = (0, ct.p4)(tt.nA),
					U = (0, xe.Yc)();
				(0, Ge.useEffect)(() => {
					var J;
					U({
						zone_id: w == null ? void 0 : w.id,
						zone_plan: w == null || (J = w.plan) === null || J === void 0 ? void 0 : J.legacy_id
					})
				}, [w, U])
			}
			const Bt = () => (Pt(), Lt(), Vt(), null);
			var en = t("../react/app/components/Persistence/index.tsx"),
				tn = t("../node_modules/@cloudflare/elements/es/index.js"),
				nn = t("../react/app/components/LoadingSuspense.tsx");
			const on = Ae().lazy(() => Promise.all([t.e(2480), t.e(39074), t.e(10008), t.e(73598), t.e(94012), t.e(24074), t.e(11284), t.e(5668), t.e(91126), t.e(77216), t.e(40517), t.e(39760), t.e(60734), t.e(25390), t.e(40453)]).then(t.bind(t, "../react/common/components/DevPanel/Main.tsx")));
			var rn = () => Ae().createElement(nn.Z, null, Ae().createElement(on, null));
			const an = () => (Ge.useEffect(() => te, []), null);
			var sn = t("../../../../node_modules/moment/moment.js"),
				Ht = t.n(sn);
			const cn = w => {
					switch (w) {
						case "en-US":
						case "es-ES":
						case "de-DE":
						case "fr-FR":
						case "it-IT":
						case "ja-JP":
						case "ko-KR":
							return w.slice(0, 2);
						case "es-MX":
						case "es-CL":
						case "es-EC":
						case "pt-BR":
						case "zh-CN":
						case "zh-TW":
							return w.toLowerCase();
						default:
							return "en"
					}
				},
				ln = () => {
					const w = (0, ct.p4)($.r);
					(0, Ge.useEffect)(() => {
						const U = cn(w);
						U !== Ht().locale() && Ht().locale(U), document.documentElement.lang = w
					}, [w])
				},
				un = () => {
					(0, Ge.useEffect)(() => {
						async function w() {
							var U, J;
							let le;
							if (((U = window) === null || U === void 0 || (J = U.build) === null || J === void 0 ? void 0 : J.isPreviewDeploy) && (le = "cookie"), !!le) try {
								const ye = document.head.querySelector("link[rel=icon]");
								ye && (ye.href = (await t("../react/app/assets lazy recursive ^\\.\\/favicon\\-.*\\.ico$")(`./favicon-${le}.ico`)).default)
							} catch {}
						}
						w()
					}, [])
				};
			var dn = t("../react/common/constants/constants.ts");
			const pn = () => {
					var w;
					const U = (0, Qe.useLocation)(),
						[J, le] = (0, Ge.useState)(((w = window) === null || w === void 0 ? void 0 : w.localStorage.getItem("gates_devtools_ui_gates_controller_enabled")) === "true");
					return (0, Ge.useEffect)(() => {
						const ye = Ne().parse(U.search);
						if (ye.pt && fe.Z.set(dn.sJ, ye.pt), ye == null ? void 0 : ye.devPanel) {
							var De, Ie;
							(De = window) === null || De === void 0 || (Ie = De.localStorage) === null || Ie === void 0 || Ie.setItem("gates_devtools_ui_gates_controller_enabled", "true"), le(!0)
						}
					}, [U.search]), {
						devPanelEnabled: J
					}
				},
				mn = ({
					id: w,
					customDataLayer: U = [],
					dataLayerName: J = "dataLayer"
				}) => {
					const le = `<iframe src="https://www.googletagmanager.com/ns.html?id=${w}>m_auth=Bw0h3fTQa4XI3NcjmogT9g>m_preview=env-463>m_cookies_win=x"height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
						ye = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window, document, 'script', '${J}', '${w}')`,
						De = `
    window.${J} = window.${J} || [];
    window.${J}.push(${JSON.stringify(U)})
  `;
					return {
						iframe: le,
						script: ye,
						dataLayerHTML: De
					}
				},
				gn = w => {
					const U = document.createElement("script");
					return U.innerHTML = w, U.async = !0, U
				},
				fn = w => {
					const U = document.createElement("noscript");
					return U.innerHTML = w, U
				},
				Zt = w => {
					const U = document.createElement("script");
					return U.innerHTML = w, U
				},
				Nn = ({
					dataLayer: w,
					dataLayerName: U
				}) => {
					if (window[U]) return window[U].push(w);
					const J = `
      window.${U} = window.${U} || [];
      window.${U}.push(${JSON.stringify(w)})`,
						le = Zt(J);
					document.head.insertBefore(le, document.head.childNodes[0])
				},
				_n = ({
					containerId: w,
					customDataLayer: U,
					gtmFeatureFlag: J = !0
				}) => {
					(0, Ge.useEffect)(() => {
						(() => {
							if (!J) return null;
							const {
								iframe: ye,
								script: De,
								dataLayerHTML: Ie
							} = mn({
								id: w,
								customDataLayer: U
							});
							document.head.insertBefore(Zt(Ie), document.head.childNodes[0]), document.head.insertBefore(gn(De), document.head.childNodes[0]), document.body.insertBefore(fn(ye), document.body.childNodes[0])
						})()
					}, [])
				};
			var Yt = t("../react/common/hooks/useGate.ts");
			const En = ({
				isDev: w,
				gtmFeatureFlag: U
			}) => {
				(0, Ge.useEffect)(() => {
					(() => {
						if (!U) return null;
						let le;
						w ? le = "https://assets.adobedtm.com/f597f8065f97/fa05fa784ee2/launch-c9d8b2cd06a5-development.min.js" : le = "https://assets.adobedtm.com/f597f8065f97/fa05fa784ee2/launch-9b52828fbb9f.min.js";
						const ye = document.createElement("script");
						ye.async = !0, ye.src = le, document.head.insertBefore(ye, document.head.childNodes[0])
					})()
				}, [])
			};
			var vn = t("../react/utils/useDomainConnectRedirect.ts");
			const yn = "GTM-NDGPDFZ",
				Cn = Ae().lazy(() => Promise.all([t.e(2480), t.e(39074), t.e(10008), t.e(73598), t.e(94012), t.e(24074), t.e(11284), t.e(16339), t.e(62803), t.e(91126), t.e(77216), t.e(40517), t.e(39760), t.e(60734), t.e(25390), t.e(32036), t.e(68009), t.e(42864)]).then(t.bind(t, "../react/AuthenticatedApp.jsx"))),
				hn = Ae().lazy(() => Promise.all([t.e(83741), t.e(65447), t.e(39074), t.e(24074), t.e(16339), t.e(60734), t.e(69088), t.e(32036), t.e(76472)]).then(t.bind(t, "../react/UnauthenticatedApp.tsx")));
			var Tn = ({
					userIsAuthed: w
				}) => {
					ln(), un(), (0, vn.y)();
					const {
						devPanelEnabled: U
					} = pn();
					return _n({
						containerId: yn,
						gtmFeatureFlag: !!(0, Yt.Z)("dx-enable-google-tag-manager")
					}), En({
						isDev: !1,
						gtmFeatureFlag: !!(0, Yt.Z)("dx-enable-google-tag-manager")
					}), Ae().createElement(Ge.Suspense, {
						fallback: Ae().createElement(an, null)
					}, Ae().createElement(Qe.Switch, null, !w && !0 && Ae().createElement(Qe.Route, {
						exact: !0,
						path: ["/", "/login"]
					}, Ae().createElement(hn, null)), Ae().createElement(Qe.Route, {
						render: () => Ae().createElement(tn.ZC, {
							minHeight: "100vh"
						}, Ae().createElement(Cn, null))
					})), U && Ae().createElement(rn, null))
				},
				Ut = t("../../../../node_modules/yup/es/index.js"),
				An = t("../../../common/util/types/src/utils/index.ts");
			const Qt = {
				cfEmail: () => Ut.Z_().email((0, k.ZP)("common.validation.email")).required((0, k.ZP)("common.validation.email")),
				cfPassword: () => Ut.Z_().required((0, k.ZP)("common.validation.required"))
			};
			(0, An.Yd)(Qt).forEach(w => {
				Ut.kM(Ut.Z_, w, Qt[w])
			});
			const Xt = Ae().lazy(() => Promise.all([t.e(10008), t.e(94012), t.e(6368), t.e(44264), t.e(33970)]).then(t.bind(t, "../react/AuthOnlyProviders.tsx"))),
				On = () => {
					const w = (0, vt.$8)(),
						[U, J] = (0, Ge.useState)(w ? Xt : Ae().Fragment),
						[le, ye] = (0, Ge.useState)((0, h.Yc)());
					(0, Ge.useEffect)(() => {
						(0, h.fF)(() => ye((0, h.Yc)()))
					}, []);
					const De = Ie => {
						ye(Ie), (0, h.C8)(Ie), document.cookie = `dark-mode=${Ie};Path=/;Max-Age=31536000`
					};
					return (0, Ge.useEffect)(() => {
						J(w ? Xt : Ae().Fragment)
					}, [w]), (0, Ge.useEffect)(() => {
						const Ie = () => De(localStorage.getItem("dark-mode"));
						return window.addEventListener("storage", Ie), () => {
							window.removeEventListener("storage", Ie)
						}
					}, []), Ae().createElement(Ge.Suspense, {
						fallback: null
					}, Ae().createElement(it.Provider, {
						store: (0, p.bh)()
					}, Ae().createElement(Qe.Router, {
						history: je
					}, Ae().createElement(U, null, Ae().createElement(zt.Z, {
						renderer: D()
					}, Ae().createElement(Gt, null, Ae().createElement(be.S, {
						sentryTag: "Root"
					}, Ae().createElement(gt.J$, {
						value: {
							fetcher: Ie => fetch(Ie).then(nt => nt.json())
						}
					}, Ae().createElement(Bt, null), Ae().createElement(It, null), Ae().createElement(en.Z_, {
						onDarkModeChangeCb: De
					}, Ae().createElement(ne.ZP, null, Ae().createElement(Tn, {
						userIsAuthed: w
					}))), Ae().createElement(_e.ZP, null), Ae().createElement(G.F0, null)))))))))
				},
				bn = () => {
					(0, mt.render)(Ae().createElement(On, null), document.getElementById("react-app"))
				};
			var yt = t("../utils/initSparrow.ts"),
				Dt = t("../utils/zaraz.ts");
			const In = () => {
					const w = (0, Je.PR)((0, p.bh)().getState());
					Pn(), (0, yt.Ug)(), (0, Dt.bM)(), (w == null ? void 0 : w.id) && me().setUserId(w == null ? void 0 : w.id), (0, yt.yV)(), !(0, yt.Wi)() && (0, yt.IM)(), w ? (0, Dt.yn)(w) : (0, Dt.Ro)()
				},
				Pn = () => {
					var w, U;
					(w = window) === null || w === void 0 || (U = w.OneTrust) === null || U === void 0 || U.OnConsentChanged(() => {
						const J = (0, Je.PR)((0, p.bh)().getState());
						(0, yt.Wi)() ? (me().setEnabled(!0), (J == null ? void 0 : J.id) ? (me().setUserId(J.id), (0, Dt.yn)(J)) : (0, Dt.Ro)(), (0, yt.yV)()) : (me().setEnabled(!1), (0, yt.IM)())
					})
				};

			function Sn(w) {
				for (var U = 1; U < arguments.length; U++) {
					var J = arguments[U] != null ? Object(arguments[U]) : {},
						le = Object.keys(J);
					typeof Object.getOwnPropertySymbols == "function" && le.push.apply(le, Object.getOwnPropertySymbols(J).filter(function(ye) {
						return Object.getOwnPropertyDescriptor(J, ye).enumerable
					})), le.forEach(function(ye) {
						Ln(w, ye, J[ye])
					})
				}
				return w
			}

			function Ln(w, U, J) {
				return U = Dn(U), U in w ? Object.defineProperty(w, U, {
					value: J,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : w[U] = J, w
			}

			function Dn(w) {
				var U = wn(w, "string");
				return typeof U == "symbol" ? U : String(U)
			}

			function wn(w, U) {
				if (typeof w != "object" || w === null) return w;
				var J = w[Symbol.toPrimitive];
				if (J !== void 0) {
					var le = J.call(w, U || "default");
					if (typeof le != "object") return le;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (U === "string" ? String : Number)(w)
			}
			const Mn = "init",
				Jt = (w, U) => {
					r.$e(function(J) {
						J.setTag(Mn, U), r.Tb(w)
					}), Y(w)
				},
				Ft = async (w, U) => {
					try {
						return await w(), !0
					} catch (J) {
						return Jt(J, U), !1
					}
				};
			(async () => {
				try {
					var w, U, J;
					t.g.build = Sn({}, {
						branch: "master",
						isReleaseCandidate: "true",
						commit: "50731f56b660958649d3f33587933dbc95515b83",
						dashVersion: "31137297",
						env: "production",
						builtAt: 1739885769146,
						versions: {
							"@cloudflare/app-dash": "25.161.22",
							node: "20.10.0",
							yarn: "3.2.2",
							webpack: "5.88.2"
						}
					}, {
						isPreviewDeploy: (0, X.p)()
					}), V();
					const le = [{
						fn: () => t.e(4374).then(t.bind(t, "../react/utils/api.ts")),
						tag: "utils/api"
					}, {
						fn: () => T(je),
						tag: "hashScroll"
					}, {
						fn: ie.Z,
						tag: "styles"
					}, {
						fn: Re,
						tag: "mfePreviewData"
					}];
					for (const _t of le)
						if (!await Ft(_t.fn, _t.tag)) return;
					let ye;
					if (!await Ft(async () => {
							ye = await st()
						}, "bootstrap")) return;
					const De = (0, p.bh)(),
						Ie = ((w = ye) === null || w === void 0 ? void 0 : w.data) || {};
					De.dispatch((0, i.mW)("user", Ie == null ? void 0 : Ie.user));
					const nt = (U = ye) === null || U === void 0 || (J = U.data) === null || J === void 0 ? void 0 : J.user;
					return t.g.bootstrap = ye, nt && nt.id && ce(nt.id), !await Ft(at, "gates") || !await Ft(In, "tracking") ? void 0 : bn()
				} catch (le) {
					Jt(le, "global")
				}
			})()
		},
		"../libs/init/initGlobal.ts": function() {
			window.global || (window.global = window)
		},
		"../react/app/HoCs/withEntities.tsx": function(W, v, t) {
			"use strict";
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t.n(e),
				s = t("../react/app/redux/index.ts"),
				d = t("../react/common/selectors/userSelectors.ts"),
				l = t("../react/common/selectors/zoneSelectors.ts"),
				m = t("../react/common/selectors/accountSelectors.ts"),
				a = t("../react/common/utils/isGuards.ts"),
				u = t("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				E = t.n(u);

			function n() {
				return n = Object.assign ? Object.assign.bind() : function(p) {
					for (var c = 1; c < arguments.length; c++) {
						var _ = arguments[c];
						for (var y in _) Object.prototype.hasOwnProperty.call(_, y) && (p[y] = _[y])
					}
					return p
				}, n.apply(this, arguments)
			}
			const r = p => {
				function c(_) {
					const y = (0, s.UM)(),
						T = (0, u.useHistory)(),
						O = (0, u.useLocation)(),
						h = (0, u.useRouteMatch)("/:accountId([0-9a-f]{32})?/:zoneName?/:app?/:tab?"),
						S = (0, s.p4)(d.PR) || null,
						g = (0, s.p4)(l.nA) || null,
						C = (0, s.p4)(m.uF),
						M = C ? C.account : null;
					if (!h) return null;
					const {
						accountId: b,
						app: R,
						tab: A
					} = h.params, L = h.params.zoneName && ((0, a.v5)(h.params.zoneName) || h.params.zoneName.indexOf(".") > 0) ? h.params.zoneName : void 0;
					return o().createElement(p, n({
						dispatch: y,
						history: T,
						location: O,
						match: h,
						user: S,
						membership: b ? C : null,
						account: b ? M : null,
						accountId: b || null,
						zone: L ? g : null,
						zoneName: L || null,
						app: L ? R : null,
						tab: L ? A : null
					}, _))
				}
				return c.displayName = `withEntities(${i(p)})`, c
			};

			function i(p) {
				return p.displayName || p.name || "Component"
			}
			v.Z = r
		},
		"../react/app/components/AccountHome/tracking.ts": function(W, v, t) {
			"use strict";
			t.d(v, {
				$$: function() {
					return c
				},
				QV: function() {
					return p
				},
				Yt: function() {
					return r
				},
				bA: function() {
					return i
				},
				gX: function() {
					return u
				},
				tw: function() {
					return E
				},
				xD: function() {
					return n
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				o = t.n(e);
			const s = "projects table click",
				d = "click create application",
				l = "account home dev plat - product card click",
				m = "account home dev plat - empty state CTA click",
				a = "account home dev plat - view all projects click",
				u = {
					SPARROW_PROJECTS_TABLE_CLICK: s,
					SPARROW_CREATE_PROJECT_CLICK: d,
					SPARROW_PRODUCT_CARD_CLICK: l,
					SPARROW_EMPTY_STATE_CTA_CLICK: m,
					SPARROW_VIEW_ALL_PROJECTS_CLICK: a
				},
				E = _ => {
					o().sendEvent(s, {
						component: _
					})
				},
				n = _ => {
					o().sendEvent(s, {
						component: "menu",
						subcomponent: _
					})
				},
				r = () => {
					o().sendEvent(d, {
						category: "Projects Table"
					})
				},
				i = ({
					category: _,
					product: y
				}) => {
					o().sendEvent(l, {
						category: _,
						product: y
					})
				},
				p = () => {
					o().sendEvent(m)
				},
				c = () => {
					o().sendEvent(a)
				}
		},
		"../react/app/components/DeepLink/actions.ts": function(W, v, t) {
			"use strict";
			t.d(v, {
				BQ: function() {
					return u
				},
				Bh: function() {
					return m
				},
				CM: function() {
					return E
				},
				MF: function() {
					return o
				},
				TS: function() {
					return i
				},
				WF: function() {
					return l
				},
				Wz: function() {
					return n
				},
				bk: function() {
					return a
				},
				fj: function() {
					return r
				},
				r4: function() {
					return d
				},
				zq: function() {
					return s
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-exhausted-reducers/es/index.js");
			const o = {
					ADD_SITE: "deepLink/ADD_SITE",
					RESOLVING_START: "deepLink/RESOLVING_START",
					RESOLVING_COMPLETE: "deepLink/RESOLVING_COMPLETE",
					SELECT_ZONE: "SELECT_ZONE",
					SELECT_ACCOUNT: "SELECT_ACCOUNT",
					SELECT_PAGES_PROJECT: "SELECT_PAGES_PROJECT",
					SELECT_PAGES_DEPLOYMENT: "SELECT_PAGES_DEPLOYMENT",
					SET_FILTERED_ACCOUNT_IDS: "deepLink/SET_FILTERED_ACCOUNT_IDS",
					DELETE_FILTERED_ACCOUNT_IDS: "deepLink/DELETE_FILTERED_ACCOUNT_IDS",
					SELECT_WORKER: "deepLink/SELECT_WORKER"
				},
				s = (0, e.R)(o.ADD_SITE, p => ({
					payload: p
				})),
				d = (0, e.R)(o.RESOLVING_START),
				l = (0, e.R)(o.RESOLVING_COMPLETE),
				m = (0, e.R)(o.SELECT_ZONE, p => ({
					payload: p
				})),
				a = (0, e.R)(o.SELECT_ACCOUNT, p => ({
					payload: p
				})),
				u = (0, e.R)(o.SELECT_PAGES_PROJECT, p => ({
					payload: p
				})),
				E = (0, e.R)(o.SELECT_PAGES_DEPLOYMENT, p => ({
					payload: p
				})),
				n = (0, e.R)(o.SET_FILTERED_ACCOUNT_IDS, p => ({
					accountIds: p
				})),
				r = (0, e.R)(o.DELETE_FILTERED_ACCOUNT_IDS),
				i = (0, e.R)(o.SELECT_WORKER, p => ({
					payload: p
				}))
		},
		"../react/app/components/DeepLink/constants.ts": function(W, v, t) {
			"use strict";
			t.d(v, {
				BV: function() {
					return e
				},
				Dz: function() {
					return E
				},
				Fj: function() {
					return d
				},
				Kt: function() {
					return m
				},
				O5: function() {
					return l
				},
				Tc: function() {
					return o
				},
				_h: function() {
					return n
				},
				dB: function() {
					return s
				},
				s$: function() {
					return a
				}
			});
			const e = "to",
				o = "_gl",
				s = "freeTrial",
				d = "deepLinkQueryParams",
				l = "resolvedDeepLinkQueryParams",
				m = "add",
				a = "multiSkuProducts",
				u = "/:account/billing/checkout",
				E = "/:account/:zone/billing/checkout",
				n = new RegExp("^/(:account|[a-fA-F0-9]{32})(/(:zone|[^/.]+\\.[^/.]+))?/billing/checkout$")
		},
		"../react/app/components/DeepLink/index.ts": function(W, v, t) {
			"use strict";
			t.d(v, {
				ZP: function() {
					return A
				},
				U: function() {
					return a.U
				},
				dd: function() {
					return a.dd
				},
				bk: function() {
					return m.bk
				},
				Bh: function() {
					return m.Bh
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t("../react/app/redux/index.ts"),
				s = t("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				d = t("../react/app/components/DeepLink/utils.ts"),
				l = t("../react/utils/bootstrap.ts"),
				m = t("../react/app/components/DeepLink/actions.ts"),
				a = t("../react/app/components/DeepLink/selectors.ts"),
				u = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				E = t.n(u);

			function n(L) {
				for (var P = 1; P < arguments.length; P++) {
					var H = arguments[P] != null ? Object(arguments[P]) : {},
						K = Object.keys(H);
					typeof Object.getOwnPropertySymbols == "function" && K.push.apply(K, Object.getOwnPropertySymbols(H).filter(function(Q) {
						return Object.getOwnPropertyDescriptor(H, Q).enumerable
					})), K.forEach(function(Q) {
						r(L, Q, H[Q])
					})
				}
				return L
			}

			function r(L, P, H) {
				return P = i(P), P in L ? Object.defineProperty(L, P, {
					value: H,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : L[P] = H, L
			}

			function i(L) {
				var P = p(L, "string");
				return typeof P == "symbol" ? P : String(P)
			}

			function p(L, P) {
				if (typeof L != "object" || L === null) return L;
				var H = L[Symbol.toPrimitive];
				if (H !== void 0) {
					var K = H.call(L, P || "default");
					if (typeof K != "object") return K;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (P === "string" ? String : Number)(L)
			}
			class c {
				constructor(P, H) {
					r(this, "deepLink", void 0), r(this, "legacyDeepLink", void 0), r(this, "resolvers", void 0), r(this, "startTime", Date.now()), r(this, "endTime", Date.now()), r(this, "_done", !1), r(this, "resolverStart", K => {
						this.resolvers.set(K, {
							name: K,
							startTime: Date.now(),
							userActions: []
						})
					}), r(this, "resolverDone", K => {
						const Q = this.resolvers.get(K);
						Q && (Q.endTime = Date.now(), this.resolvers.set(K, Q))
					}), r(this, "resolverCancel", K => {
						this.resolverDone(K), this.cancel()
					}), r(this, "start", () => {
						this.startTime = Date.now()
					}), r(this, "done", () => {
						this.endTime = Date.now(), this.track("Deep Link Success")
					}), r(this, "cancel", () => {
						this.endTime = Date.now(), this.track("Deep Link Cancel")
					}), r(this, "createUserActionTracker", K => {
						const Q = "NO_ACTION",
							pe = {
								actionType: Q,
								startTime: 0
							};
						return {
							start: (te = Q) => {
								const Y = this.resolvers.get(K);
								pe.actionType = te, pe.startTime = Date.now(), Y && Y.userActions.push(pe)
							},
							finish: (te = Q) => {
								pe.actionType = te, pe.endTime = Date.now()
							},
							cancel: (te = Q) => {
								pe.actionType = te, pe.endTime = Date.now(), this.resolverCancel(K)
							}
						}
					}), this.deepLink = P, this.legacyDeepLink = H, this.resolvers = new Map
				}
				track(P) {
					try {
						if (this._done) return;
						this._done = !0;
						const H = {
								category: "routing",
								deepLink: this.deepLink,
								legacyDeepLink: this.legacyDeepLink,
								totalUserActionsTime: 0,
								totalTime: _(this.startTime, this.endTime),
								totalCpuTime: _(this.startTime, this.endTime)
							},
							K = this.resolvers.size === 0 ? H : Array.from(this.resolvers.values()).reduce((Q, pe) => {
								const te = _(pe.startTime, pe.endTime),
									Y = pe.userActions.reduce((Z, j) => {
										const $ = _(j.startTime, j.endTime);
										return {
											totalTime: Z.totalTime + $,
											actions: Z.actions.set(j.actionType, $)
										}
									}, {
										totalTime: 0,
										actions: new Map
									}),
									ie = te - Y.totalTime;
								return n({}, Q, {
									totalTime: Q.totalTime + te,
									totalUserActionsTime: Q.totalUserActionsTime + Y.totalTime,
									totalCpuTime: Q.totalCpuTime + ie,
									[`${pe.name}ResolverTotalTime`]: te,
									[`${pe.name}ResolverTotalCpuTime`]: ie,
									[`${pe.name}ResolverTotalUserActionsTime`]: Y.totalTime
								}, Array.from(Y.actions.keys()).reduce((Z, j) => n({}, Z, {
									[`${pe.name}Resolver/${j}`]: Y.actions.get(j)
								}), {}))
							}, n({}, H, {
								totalTime: 0,
								totalCpuTime: 0
							}));
						E().sendEvent(P, K)
					} catch (H) {
						console.error(H)
					}
				}
			}

			function _(L = Date.now(), P = Date.now()) {
				return (P - L) / 1e3
			}
			var y = t("../react/app/components/DeepLink/constants.ts"),
				T = t("../react/common/hooks/useCachedState.ts"),
				O = t("../react/common/hooks/usePrevious.ts");

			function h(L) {
				for (var P = 1; P < arguments.length; P++) {
					var H = arguments[P] != null ? Object(arguments[P]) : {},
						K = Object.keys(H);
					typeof Object.getOwnPropertySymbols == "function" && K.push.apply(K, Object.getOwnPropertySymbols(H).filter(function(Q) {
						return Object.getOwnPropertyDescriptor(H, Q).enumerable
					})), K.forEach(function(Q) {
						S(L, Q, H[Q])
					})
				}
				return L
			}

			function S(L, P, H) {
				return P = g(P), P in L ? Object.defineProperty(L, P, {
					value: H,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : L[P] = H, L
			}

			function g(L) {
				var P = C(L, "string");
				return typeof P == "symbol" ? P : String(P)
			}

			function C(L, P) {
				if (typeof L != "object" || L === null) return L;
				var H = L[Symbol.toPrimitive];
				if (H !== void 0) {
					var K = H.call(L, P || "default");
					if (typeof K != "object") return K;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (P === "string" ? String : Number)(L)
			}
			var b = ({
					children: L
				}) => {
					const P = (0, o.TZ)(),
						H = (0, s.useHistory)(),
						K = (0, O.Z)(H.location.pathname),
						Q = (0, o.p4)(a.dd),
						[pe, te] = (0, e.useState)(!0),
						[Y, ie] = (0, T.j)(void 0, {
							key: y.Fj
						}),
						[Z, j] = (0, T.j)(void 0, {
							key: y.O5
						}),
						[$, F] = (0, T.j)(void 0, {
							key: y.s$
						}),
						X = (0, l.$8)();
					let oe = new URLSearchParams(H.location.search);
					const Ee = (0, d.mL)(H.location.pathname, oe);
					let B = null,
						I = null;
					if (oe.has(y.Tc) && oe.delete(y.Tc), oe.get(y.BV)) B = oe.get(y.BV), H.location.hash && (I = H.location.hash);
					else if (Y) {
						const q = new URLSearchParams(Y);
						q.get(y.BV) && (B = q.get(y.BV), oe = q)
					} else Ee && (oe.set(y.BV, Ee), B = Ee);
					if (B && y._h.test(B)) {
						const q = oe.getAll(y.Kt),
							ee = JSON.stringify(q);
						q.length && ee !== $ && F(ee), oe.has(y.Tc) && oe.delete(y.Tc), oe.delete(y.Kt)
					}!X && Y === void 0 && B && ie(oe.toString());
					const x = async () => {
						try {
							if ((0, d.I3)(B) && X && !Q) {
								Y && ie(void 0), P.dispatch((0, m.r4)()), te(!0), B && B !== Z && j(B);
								const q = await (0, d.py)(B, te, P, H, K, new c(B, Ee ? `${H.location.pathname}${H.location.search}` : void 0));
								oe.delete(y.BV);
								const ee = oe.toString();
								H.replace(h({}, H.location, {
									pathname: q,
									search: ee
								}, I ? {
									hash: I
								} : {})), P.dispatch((0, m.WF)())
							}
						} catch (q) {
							P.dispatch((0, m.WF)()), console.error(q)
						} finally {
							te(!1)
						}
					};
					return (0, e.useEffect)(() => {
						x()
					}, [H.location.pathname, H.location.search, Q]), (pe || (0, d.I3)(B)) && X ? null : L
				},
				R = t("../react/app/components/DeepLink/reducer.ts"),
				A = b
		},
		"../react/app/components/DeepLink/reducer.ts": function(W, v, t) {
			"use strict";
			t.d(v, {
				E: function() {
					return d
				},
				r: function() {
					return m
				}
			});
			var e = t("../../../../node_modules/seamless-immutable/seamless-immutable.production.min.js"),
				o = t.n(e),
				s = t("../react/app/components/DeepLink/actions.ts");
			const d = null,
				l = o().from({
					lastAction: d,
					isResolving: !1,
					filteredAccountIds: void 0
				});

			function m(a = l, u) {
				if (u.type === s.MF.RESOLVING_COMPLETE) return l;
				if (u.type === s.MF.RESOLVING_START) return a.set("isResolving", !0);
				if (a.isResolving) {
					if (u.type === s.MF.RESOLVING_COMPLETE) return a.set("isResolving", !1);
					if (u.type === s.MF.SET_FILTERED_ACCOUNT_IDS) return a.set("filteredAccountIds", u.accountIds);
					if (u.type === s.MF.DELETE_FILTERED_ACCOUNT_IDS) return a.set("filteredAccountIds", void 0);
					{
						let E = a;
						try {
							E = a.set("lastAction", u)
						} catch {
							E = a.set("lastAction", {
								type: u.type
							})
						}
						return E
					}
				} else return a
			}
		},
		"../react/app/components/DeepLink/selectors.ts": function(W, v, t) {
			"use strict";
			t.d(v, {
				U: function() {
					return s
				},
				dd: function() {
					return o
				},
				yI: function() {
					return e
				}
			});
			const e = d => d.deepLink.lastAction,
				o = d => d.deepLink.isResolving,
				s = d => d.deepLink.filteredAccountIds
		},
		"../react/app/components/DeepLink/utils.ts": function(W, v, t) {
			"use strict";
			t.d(v, {
				I3: function() {
					return p
				},
				X1: function() {
					return r
				},
				mL: function() {
					return O
				},
				py: function() {
					return T
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-en-garde/es/index.js"),
				o = t("../react/app/components/DeepLink/reducer.ts"),
				s = t("../../../../node_modules/@cloudflare/util-regex/es/index.js");
			const d = h => h.replace(s.default.endsWithSlash, ""),
				l = h => {
					const S = d(h).split("/").slice(3);
					return S.length ? "/" + S.join("/") : ""
				},
				m = h => {
					const S = d(h).split("/").slice(2);
					return S.length ? `apps/${S.join("/")}` : "apps"
				};
			var a = t("../react/app/components/DeepLink/selectors.ts"),
				u = t("../react/app/components/DeepLink/constants.ts"),
				E = t("../react/common/validators/index.js"),
				n = t("../react/common/utils/isGuards.ts");
			const r = h => (0, E.Lb)(h) && (h.split(".").length > 1 || (0, n.v5)(h)),
				i = e.eg.union([e.eg.literal("zone"), e.eg.literal("account"), e.eg.literal("pages-project"), e.eg.literal("pages-deployment"), e.eg.literal("worker")]),
				p = h => typeof h == "string" && h.startsWith("/"),
				c = (h, S) => g => new Promise((C, M) => {
					S.start();
					const b = h.subscribe(() => {
						const R = (0, a.yI)(h.getState());
						R === o.E ? (S.cancel(), b(), M("DeepLink: waitForAction out of context.")) : g(R) && (S.finish(R.type), b(), C(R))
					})
				}),
				_ = (h, S, g) => (C, M) => new Promise((b, R) => {
					g.start();
					const A = S.location.pathname;
					C = new URL(C, window.location.href).pathname, A !== C && (g.cancel(), R(`DeepLink: waitForPageAction didn't execute on pageToAwaitActionOn: "${C}", but on "${A}". You need to redirect to "${C}", and unblockRouter in your Resolver, before you use this function.`));
					const L = h.subscribe(() => {
						const P = (0, a.yI)(h.getState()),
							H = S.location.pathname,
							Q = new URLSearchParams(S.location.search).get(u.BV);
						(H !== C || !!Q) && (g.cancel(), L(), R(`DeepLink: waitForPageAction user navigated away from "${C}" to "${H}${Q?S.location.search:""}"`)), P === o.E ? (g.cancel(), L(), R("DeepLink: waitForPageAction out of context.")) : M(P) && (g.finish(P.type), L(), b(P))
					})
				});

			function y(h) {
				const S = [],
					g = h.split("?")[0].split("/");
				for (let C of g) C.length !== 0 && (C.startsWith(":") ? S.push({
					value: C.substring(1),
					type: "dynamic"
				}) : S.push({
					value: C,
					type: "static"
				}));
				return S
			}
			async function T(h, S, g, C, M, b) {
				b.start();
				const R = y(h),
					L = await (await Promise.all([t.e(32375), t.e(78839), t.e(40517), t.e(8756)]).then(t.bind(t, "../react/app/components/DeepLink/resolvers/index.ts"))).default(),
					P = {};
				let H = "";
				for (const [K, Q] of R.entries())
					if (Q.type === "static") H = [H, Q.value].join("/");
					else if (Q.type === "dynamic" && i.is(Q.value) && Q.value in L) {
					b.resolverStart(Q.value);
					const pe = await L[Q.value]({
						deepLink: h,
						blockRouter: () => S(!0),
						unblockRouter: () => S(!1),
						routerHistory: C,
						resolvedValues: P,
						store: g,
						referringRoute: M,
						uri: {
							currentPartIdx: K,
							parts: R
						},
						waitForAction: c(g, b.createUserActionTracker(Q.value)),
						waitForPageAction: _(g, C, b.createUserActionTracker(Q.value))
					});
					b.resolverDone(Q.value), H = [H, pe].join("/"), P[Q.value] = pe
				} else throw b.cancel(), new Error(`DeepLink: Resolver with name '${Q.value}' is not supported.`);
				return b.done(), H
			}

			function O(h, S) {
				const g = ":account",
					C = ":zone",
					M = S.get("zone");
				if (M) return S.delete("zone"), `/${g}/${C}/${M}`;
				const b = S.get("account");
				if (b) return S.delete("account"), `/${g}/${b}`;
				if (h === "/overview") return `/${g}/${C}`;
				if (h === "/apps") return `/${g}/${C}/${m(h)}`;
				const R = ["/analytics", "/dns", "/spectrum", "/crypto", "/firewall", "/access", "/performance", "/caching", "/workers", "/page-rules", "/network", "/traffic", "/stream", "/customization", "/content-protection", "/rules", "/email"];
				for (const A of R) {
					const L = A.length;
					if (h.startsWith(A) && (h.length === L || h[L] === "/")) return `/${g}/${C}${h}`
				}
				switch (h) {
					case "/account/billing":
						return `/${g}/billing`;
					case "/account/subscriptions":
						return `/${g}/billing/subscriptions`;
					case "/account/virtualDNS":
						return `/${g}/dns-firewall`;
					case "/account/audit-log":
						return `/${g}/audit-log`;
					default:
						return null
				}
			}
		},
		"../react/app/components/ErrorBoundary.tsx": function(W, v, t) {
			"use strict";
			t.d(v, {
				S: function() {
					return u
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t.n(e),
				s = t("../../../../node_modules/@sentry/react/esm/errorboundary.js"),
				d = t("../react/app/components/SomethingWrong.jsx"),
				l = t("../utils/sentry/lastSentEventId.ts"),
				m = t("../react/utils/zaraz.ts"),
				a = t("../react/utils/url.ts");
			const u = ({
				sentryTag: E,
				children: n
			}) => o().createElement(s.SV, {
				beforeCapture: r => {
					m.tg === null || m.tg === void 0 || m.tg.track("page-error", {
						page: (0, a.Fl)(window.location.pathname)
					})
				},
				onError: r => {
					({
						REDUX_LOGGER: void 0,
						E2E: void 0
					}).TESTING && t.g.logAppError(r)
				},
				fallback: ({
					error: r,
					eventId: i
				}) => {
					const p = l.e.getEventId() || i;
					return o().createElement(d.Z, {
						type: "page",
						error: r,
						eventId: p,
						sentryTag: E
					})
				}
			}, n)
		},
		"../react/app/components/Footer.tsx": function(W, v, t) {
			"use strict";
			t.d(v, {
				Z: function() {
					return $
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t.n(e),
				s = t("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				d = t("../node_modules/@cloudflare/elements/es/index.js"),
				l = t("../../../../node_modules/@cloudflare/style-container/es/index.js"),
				m = t("../../../../node_modules/@cloudflare/style-const/es/index.js"),
				a = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				u = t.n(a),
				E = t("../../../../node_modules/@cloudflare/util-responsive/es/index.js"),
				n = t("../react/common/components/Apple/utils.tsx"),
				r = t("../react/utils/translator.tsx"),
				i = t("../../../../node_modules/moment/moment.js"),
				p = t.n(i);
			const c = () => {
					const F = p()().format("YYYY"),
						X = oe => {
							u().sendEvent("follower icloud footer link", {
								category: "icloud registrar",
								link: oe
							})
						};
					return o().createElement(_, {
						marginTop: "auto"
					}, o().createElement(y, null, o().createElement(T, null, o().createElement(O, null, "\xA9 ", F, " Cloudflare, Inc."), o().createElement(O, null, o().createElement(h, null, o().createElement(S, {
						showOnDeskTop: !1
					}, o().createElement(g, {
						fontWeight: 600,
						href: "https://support.cloudflare.com/",
						onClick: () => X("Support")
					}, o().createElement(r.cC, {
						id: "common.support"
					}))), o().createElement(S, null, o().createElement(g, {
						fontWeight: 600,
						href: "https://www.cloudflare.com/privacypolicy/",
						onClick: () => X("Privacy Policy")
					}, o().createElement(r.cC, {
						id: "footer.privacy_policy"
					}))), o().createElement(S, null, o().createElement(g, {
						fontWeight: 600,
						href: "https://www.cloudflare.com/terms/",
						onClick: () => X("Terms of Use")
					}, o().createElement(r.cC, {
						id: "apple.footer.terms_of_use"
					}))), o().createElement(S, null, o().createElement(g, {
						fontWeight: 600,
						href: "https://www.cloudflare.com/cookie-policy/",
						onClick: () => X("Cookie Preferences")
					}, o().createElement(r.cC, {
						id: "apple.footer.cookie_preferences"
					}))), o().createElement(S, null, o().createElement(g, {
						fontWeight: 600,
						href: "https://www.cloudflare.com/trademark/",
						onClick: () => X("Trademark")
					}, o().createElement(r.cC, {
						id: "apple.footer.trademark"
					})))), o().createElement(h, null, o().createElement(S, null, o().createElement(g, {
						fontWeight: 400,
						href: "https://www.icann.org/resources/pages/benefits-2013-09-16-en",
						onClick: () => X("ICANN's Domain Name Registrants' Rights")
					}, o().createElement(r.cC, {
						id: "apple.footer.icanns"
					}))))))))
				},
				_ = (0, l.createComponent)(({
					theme: F,
					marginTop: X
				}) => ({
					backgroundColor: "#1F1F1F",
					width: "100%",
					minHeight: "143px",
					marginTop: X
				})),
				y = (0, l.createComponent)(() => ({
					margin: "0 auto",
					maxWidth: "1000px"
				})),
				T = (0, l.createComponent)(({
					theme: F
				}) => ({
					desktop: {
						marginLeft: "70px",
						padding: "33px 0 0 0"
					},
					mobile: {
						padding: `33px ${F.space[3]}px`
					}
				})),
				O = (0, l.createComponent)(({
					theme: F
				}) => ({
					width: "100%",
					color: F.colors.white,
					fontSize: F.fontSizes[1],
					display: "flex",
					justifyContent: "space-between",
					flexDirection: "column",
					tablet: {
						flexDirection: "row"
					},
					desktop: {
						flexDirection: "row"
					}
				})),
				h = (0, l.createComponent)(({
					theme: F
				}) => ({
					display: "flex",
					flexWrap: "wrap",
					marginTop: F.space[3],
					desktop: {
						flexWrap: "nowrap"
					}
				})),
				S = (0, l.createComponent)(({
					showOnDeskTop: F = !0,
					theme: X
				}) => ({
					color: X.colors.white,
					fontSize: X.fontSizes[1],
					height: "20px",
					display: F ? "flex" : "none",
					alignItems: "center",
					desktop: {
						display: "flex",
						"&:nth-child(2)": {
							marginLeft: X.space[3],
							"&::before": {
								display: "inline-block"
							}
						}
					},
					"&:not(:first-child)": {
						marginLeft: X.space[3],
						"&::before": {
							content: "'\xB7'",
							display: "block",
							position: "relative",
							left: "-8px",
							fontWeight: 800
						}
					},
					"&:nth-child(2)": {
						marginLeft: 0,
						"&::before": {
							display: "none"
						}
					}
				})),
				g = (0, l.createStyledComponent)(({
					theme: F
				}) => ({
					textDecoration: "none",
					color: F.colors.white,
					"&:hover": {
						color: F.colors.white,
						textDecoration: "underline"
					}
				}), "a");
			var C = c,
				M = t("../react/pages/welcome/routes.ts"),
				b = t("../react/utils/cookiePreferences.ts"),
				R = "data:image/svg+xml;base64,PHN2ZyBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAzMCAxNCIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgMzAgMTQiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGwtcnVsZTpldmVub2RkO2NsaXAtcnVsZTpldmVub2RkO2ZpbGw6I0ZGRkZGRjt9Cgkuc3Qxe2ZpbGwtcnVsZTpldmVub2RkO2NsaXAtcnVsZTpldmVub2RkO2ZpbGw6IzAwNjZGRjt9Cgkuc3Qye2ZpbGw6I0ZGRkZGRjt9Cgkuc3Qze2ZpbGw6IzAwNjZGRjt9Cjwvc3R5bGU+CgkJPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEyNzUgLTIwMCkiPgoJCQk8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMjc1IDIwMCkiPgoJCQkJPHBhdGggY2xhc3M9InN0MCIgZD0ibTcuNCAxMi44aDYuOGwzLjEtMTEuNmgtOS45Yy0zLjIgMC01LjggMi42LTUuOCA1LjhzMi42IDUuOCA1LjggNS44eiIvPgoJCQk8L2c+CgkJPC9nPgoJCTxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMjc1IC0yMDApIj4KCQkJPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTI3NSAyMDApIj4KCQkJCTxwYXRoIGNsYXNzPSJzdDEiIGQ9Im0yMi42IDBoLTE1LjJjLTMuOSAwLTcgMy4xLTcgN3MzLjEgNyA3IDdoMTUuMmMzLjkgMCA3LTMuMSA3LTdzLTMuMi03LTctN3ptLTIxIDdjMC0zLjIgMi42LTUuOCA1LjgtNS44aDkuOWwtMy4xIDExLjZoLTYuOGMtMy4yIDAtNS44LTIuNi01LjgtNS44eiIvPgoJCQkJPHBhdGggY2xhc3M9InN0MiIgZD0ibTI0LjYgNGMwLjIgMC4yIDAuMiAwLjYgMCAwLjhsLTIuMSAyLjIgMi4yIDIuMmMwLjIgMC4yIDAuMiAwLjYgMCAwLjhzLTAuNiAwLjItMC44IDBsLTIuMi0yLjItMi4yIDIuMmMtMC4yIDAuMi0wLjYgMC4yLTAuOCAwcy0wLjItMC42IDAtMC44bDIuMS0yLjItMi4yLTIuMmMtMC4yLTAuMi0wLjItMC42IDAtMC44czAuNi0wLjIgMC44IDBsMi4yIDIuMiAyLjItMi4yYzAuMi0wLjIgMC42LTAuMiAwLjggMHoiLz4KCQkJCTxwYXRoIGNsYXNzPSJzdDMiIGQ9Im0xMi43IDQuMWMwLjIgMC4yIDAuMyAwLjYgMC4xIDAuOGwtNC4yIDQuOWMtMC4xIDAuMS0wLjIgMC4yLTAuMyAwLjItMC4yIDAuMS0wLjUgMC4xLTAuNy0wLjFsLTIuMi0yLjJjLTAuMi0wLjItMC4yLTAuNiAwLTAuOHMwLjYtMC4yIDAuOCAwbDEuOCAxLjcgMy44LTQuNWMwLjItMC4yIDAuNi0wLjIgMC45IDB6Ii8+CgkJCTwvZz4KCQk8L2c+Cjwvc3ZnPg==",
				L = () => {
					const [F, X] = (0, e.useState)(!1), oe = (0, b.wV)(), Ee = () => {
						X(!0)
					}, B = () => {
						X(!1)
					}, I = oe && oe === "US" ? (0, r.ZP)("footer.cpra_cta.privacy_choices") : (0, r.ZP)("footer.cpra_cta.cookie_preferences"), x = {
						background: "transparent",
						borderRadius: "none",
						color: F ? (0, m.Yc)() ? "#ee730a" : "#003681" : (0, m.Yc)() ? "#4693ff" : "#0051c3",
						textDecoration: F ? "underline" : "none",
						textUnderlineOffset: "4px",
						cursor: "pointer",
						transitionProperty: "color",
						transitionDuration: "150ms",
						transitionTimingFunction: "ease",
						padding: "0px",
						display: "flex",
						alignItems: "center",
						lineHeight: "1.5",
						height: "fit-content",
						fontSize: "14px",
						fontWeight: 400,
						"&:focus": {
							outline: "2px solid #086fff"
						},
						border: "none",
						overflow: "hidden"
					};
					return o().createElement(d.zx, {
						id: "ot-sdk-btn",
						className: "ot-sdk-show-settings",
						style: x,
						onMouseEnter: Ee,
						onMouseLeave: B
					}, o().createElement(d.Ei, {
						height: 15,
						src: R,
						mr: 2,
						alt: I
					}), I)
				};

			function P() {
				return P = Object.assign ? Object.assign.bind() : function(F) {
					for (var X = 1; X < arguments.length; X++) {
						var oe = arguments[X];
						for (var Ee in oe) Object.prototype.hasOwnProperty.call(oe, Ee) && (F[Ee] = oe[Ee])
					}
					return F
				}, P.apply(this, arguments)
			}

			function H(F, X) {
				if (F == null) return {};
				var oe = K(F, X),
					Ee, B;
				if (Object.getOwnPropertySymbols) {
					var I = Object.getOwnPropertySymbols(F);
					for (B = 0; B < I.length; B++) Ee = I[B], !(X.indexOf(Ee) >= 0) && (!Object.prototype.propertyIsEnumerable.call(F, Ee) || (oe[Ee] = F[Ee]))
				}
				return oe
			}

			function K(F, X) {
				if (F == null) return {};
				var oe = {},
					Ee = Object.keys(F),
					B, I;
				for (I = 0; I < Ee.length; I++) B = Ee[I], !(X.indexOf(B) >= 0) && (oe[B] = F[B]);
				return oe
			}
			const Q = (0, l.createStyledComponent)(() => ({
					borderBottom: "1.5px solid transparent",
					paddingBottom: "1.25px",
					textDecoration: "none",
					":hover": {
						borderBottom: `1.5px solid ${(0,m.Yc)()?m.rS.colors.orange[6]:m.rS.colors.blue[4]}`
					}
				}), d.A),
				pe = (0, l.createStyledComponent)(({
					theme: F
				}) => ({
					color: F.colors.gray[4],
					textDecoration: "none",
					marginTop: (0, E.tq)() ? "8px" : 0,
					":hover, :focus": {
						color: F.colors.gray[4]
					}
				}), d.A),
				te = F => {
					let {
						onClick: X
					} = F, oe = H(F, ["onClick"]);
					return React.createElement(Q, P({
						onClick: Ee => {
							sparrow.sendEvent("navigate footer nav", {
								destinationPage: oe.href
							}), X && X(Ee)
						}
					}, oe))
				},
				Y = F => {
					let {
						children: X,
						target: oe,
						rel: Ee
					} = F, B = H(F, ["children", "target", "rel"]);
					return o().createElement(pe, P({
						target: oe || "_blank",
						rel: Ee || "noopener noreferrer"
					}, B), X)
				},
				ie = (0, l.createStyledComponent)(({
					theme: F
				}) => ({
					margin: 0,
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					flexWrap: "wrap",
					gap: (0, E.tq)() ? "8px" : "16px",
					"& > li": {
						listStyleType: "none",
						"& > a": {
							fontSize: F.fontSizes[2],
							borderLeft: "1px solid",
							borderLeftColor: F.colors.gray[4],
							paddingLeft: "16px"
						},
						"&:first-child > a": {
							borderLeft: "none"
						}
					}
				}), d.Ul),
				Z = (0, l.createStyledComponent)(() => ({
					display: "flex",
					flexDirection: (0, E.tq)() ? "column" : "row",
					justifyContent: "center",
					paddingBottom: "16px"
				}), d.ZC);
			var $ = () => {
				const F = [M.d.root.pattern].some(oe => (0, s.matchPath)(location.pathname, {
					path: oe
				}));
				if ((0, n.PP)()) return o().createElement(C, null);
				if (F) return null;
				const X = new Date().getFullYear();
				return o().createElement(d.$_, {
					height: (0, E.tq)() ? "auto" : 60,
					bg: "background",
					borderTop: "1px solid",
					borderColor: "gray.8",
					py: "19px",
					pb: 0,
					px: [4, 3, 3],
					mt: "auto"
				}, o().createElement(Z, null, o().createElement(ie, null, o().createElement(d.Li, null, o().createElement(Y, {
					href: "https://support.cloudflare.com"
				}, (0, r.ZP)("common.support"))), o().createElement(d.Li, null, o().createElement(Y, {
					href: "https://www.cloudflarestatus.com"
				}, o().createElement(d.Dr, {
					textTransform: "capitalize"
				}, (0, r.ZP)("footer.system_status")))), o().createElement(d.Li, null, o().createElement(Y, {
					href: "https://www.cloudflare.com/careers/"
				}, (0, r.ZP)("footer.careers"))), o().createElement(d.Li, null, o().createElement(Y, {
					href: "https://www.cloudflare.com/website-terms/"
				}, (0, r.ZP)("footer.tos_reduced"))), o().createElement(d.Li, null, o().createElement(Y, {
					href: "https://www.cloudflare.com/disclosure/"
				}, (0, r.ZP)("footer.security_issues"))), o().createElement(d.Li, null, o().createElement(Y, {
					href: "https://www.cloudflare.com/privacypolicy/"
				}, (0, r.ZP)("footer.privacy_policy"))), o().createElement(d.Li, null, o().createElement(L, null)), o().createElement(d.Li, null, o().createElement(d.Dr, {
					fontSize: 2,
					color: "gray.4"
				}, "\xA9 ", X, " Cloudflare, Inc.")))))
			}
		},
		"../react/app/components/Forbidden.jsx": function(W, v, t) {
			"use strict";
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t.n(e),
				s = t("../react/app/components/ErrorStatus.tsx"),
				d = t("../react/utils/translator.tsx");
			const l = m => o().createElement(s.Z, m, (0, d.ZP)("error.forbidden"));
			v.Z = l
		},
		"../react/app/components/GlobalHeader/AddProductDropdown/index.tsx": function(W, v, t) {
			"use strict";
			t.d(v, {
				S: function() {
					return c
				},
				Z: function() {
					return B
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t.n(e),
				s = t("../../../../node_modules/@cloudflare/component-icon/es/index.js"),
				d = t("../node_modules/@cloudflare/elements/es/index.js"),
				l = t("../node_modules/@cloudflare/component-button/es/index.js"),
				m = t("../../../../node_modules/@cloudflare/style-const/es/index.js"),
				a = t("../../../../node_modules/@cloudflare/style-container/es/index.js"),
				u = t("../../../../node_modules/@cloudflare/util-responsive/es/index.js"),
				E = t("../react/common/components/AccessControl/index.js"),
				n = t("../react/common/components/ButtonWithDropdown.tsx"),
				r = t("../react/common/components/Dropdown/index.tsx"),
				i = t("../react/utils/translator.tsx"),
				p = t("../react/common/hooks/useGate.ts");
			const c = {
					ACCOUNT_MEMBERS: "add account members",
					EXISTING_DOMAIN: "add domain",
					NEW_DOMAIN: "register domain",
					PAGES: "add pages",
					R2: "add r2 storage",
					WAF_RULESET: "add waf ruleset",
					WORKERS: "add workers"
				},
				_ = () => {
					const I = (0, p.Z)("super-add-button-copy-change"),
						x = [{
							title: {
								id: "onboarding.add_product.new_domain.title"
							},
							trackingEvent: c.NEW_DOMAIN,
							icon: "globe",
							url: "?to=/:account/registrar/register",
							description: {
								id: "onboarding.add_product.new_domain.description"
							}
						}, {
							title: {
								id: "apps.workers"
							},
							trackingEvent: c.WORKERS,
							icon: "edgeworker",
							url: "?to=/:account/workers-and-pages/create",
							description: {
								id: "onboarding.add_product.workers.description"
							}
						}, {
							title: {
								id: "apps.pages"
							},
							trackingEvent: c.PAGES,
							icon: "workers-pages",
							url: "?to=/:account/workers-and-pages/create/pages",
							description: {
								id: "onboarding.add_product.pages.description"
							}
						}, {
							title: {
								id: "onboarding.add_product.r2.title"
							},
							trackingEvent: c.R2,
							icon: "r2",
							url: "?to=/:account/r2/new",
							description: {
								id: "onboarding.add_product.r2.description"
							}
						}, {
							title: {
								id: "onboarding.add_product.waf_ruleset.title"
							},
							trackingEvent: c.WAF_RULESET,
							icon: "cloudflare-security-application",
							url: "?to=/:account/application-security/waf/custom/create",
							description: {
								id: "onboarding.add_product.waf_ruleset.description"
							}
						}, {
							title: {
								id: "onboarding.add_product.account_member.title"
							},
							trackingEvent: c.ACCOUNT_MEMBERS,
							icon: "user-outline",
							url: "?to=/:account/members/invite",
							description: {
								id: "onboarding.add_product.account_member.description"
							},
							permissionCheck: "#member:edit"
						}];
					switch (I) {
						case "existing-website-app":
							return [{
								title: {
									id: "onboarding.add_product.existing_domain.title.gated.existing_website_app"
								},
								trackingEvent: c.EXISTING_DOMAIN,
								icon: "internet-browser",
								url: "?to=/:account/add-site",
								description: {
									id: "onboarding.add_product.existing_domain.description.fast_and_secure"
								},
								disableOn: "isZoneVersionLocked"
							}, ...x];
						case "existing-site-app":
							return [{
								title: {
									id: "onboarding.add_product.existing_domain.title.gated.existing_site_app"
								},
								trackingEvent: c.EXISTING_DOMAIN,
								icon: "internet-browser",
								url: "?to=/:account/add-site",
								description: {
									id: "onboarding.add_product.existing_domain.description.fast_and_secure"
								},
								disableOn: "isZoneVersionLocked"
							}, ...x];
						case "existing-site":
							return [{
								title: {
									id: "onboarding.add_product.existing_domain.title.gated.existing_site"
								},
								trackingEvent: c.EXISTING_DOMAIN,
								icon: "internet-browser",
								url: "?to=/:account/add-site",
								description: {
									id: "onboarding.add_product.existing_domain.description.fast_and_secure"
								},
								disableOn: "isZoneVersionLocked"
							}, ...x];
						case "your-website-app":
							return [{
								title: {
									id: "onboarding.add_product.existing_domain.title.gated.your_website_app"
								},
								trackingEvent: c.EXISTING_DOMAIN,
								icon: "internet-browser",
								url: "?to=/:account/add-site",
								description: {
									id: "onboarding.add_product.existing_domain.description.fast_and_secure"
								},
								disableOn: "isZoneVersionLocked"
							}, ...x];
						case "your-site-app":
							return [{
								title: {
									id: "onboarding.add_product.existing_domain.title.gated.your_site_app"
								},
								trackingEvent: c.EXISTING_DOMAIN,
								icon: "internet-browser",
								url: "?to=/:account/add-site",
								description: {
									id: "onboarding.add_product.existing_domain.description.fast_and_secure"
								},
								disableOn: "isZoneVersionLocked"
							}, ...x];
						default:
							return [{
								title: {
									id: "onboarding.add_product.existing_domain.title"
								},
								trackingEvent: c.EXISTING_DOMAIN,
								icon: "internet-browser",
								url: "?to=/:account/add-site",
								description: {
									id: "onboarding.add_product.existing_domain.description"
								},
								disableOn: "isZoneVersionLocked"
							}, {
								title: {
									id: "onboarding.add_product.new_domain.title"
								},
								trackingEvent: c.NEW_DOMAIN,
								icon: "globe",
								url: "?to=/:account/registrar/register",
								description: {
									id: "onboarding.add_product.new_domain.description"
								}
							}, {
								title: {
									id: "onboarding.add_product.waf_ruleset.title"
								},
								trackingEvent: c.WAF_RULESET,
								icon: "cloudflare-security-application",
								url: "?to=/:account/application-security/waf/custom/create",
								description: {
									id: "onboarding.add_product.waf_ruleset.description"
								}
							}, {
								title: {
									id: "apps.workers"
								},
								trackingEvent: c.WORKERS,
								icon: "edgeworker",
								url: "?to=/:account/workers-and-pages/create",
								description: {
									id: "onboarding.add_product.workers.description"
								}
							}, {
								title: {
									id: "apps.pages"
								},
								trackingEvent: c.PAGES,
								icon: "workers-pages",
								url: "?to=/:account/workers-and-pages/create/pages",
								description: {
									id: "onboarding.add_product.pages.description"
								}
							}, {
								title: {
									id: "onboarding.add_product.r2.title"
								},
								trackingEvent: c.R2,
								icon: "r2",
								url: "?to=/:account/r2/new",
								description: {
									id: "onboarding.add_product.r2.description"
								}
							}, {
								title: {
									id: "onboarding.add_product.account_member.title"
								},
								trackingEvent: c.ACCOUNT_MEMBERS,
								icon: "user-outline",
								url: "?to=/:account/members/invite",
								description: {
									id: "onboarding.add_product.account_member.description"
								},
								permissionCheck: "#member:edit"
							}]
					}
				},
				y = [{
					title: {
						id: "onboarding.add_product.existing_domain.title"
					},
					trackingEvent: c.EXISTING_DOMAIN,
					icon: "internet-browser",
					url: "?to=/:account/add-site",
					description: {
						id: "onboarding.add_product.existing_domain.description"
					},
					disableOn: "isZoneVersionLocked"
				}, {
					title: {
						id: "onboarding.add_product.new_domain.title"
					},
					trackingEvent: c.NEW_DOMAIN,
					icon: "globe",
					url: "?to=/:account/registrar/register",
					description: {
						id: "onboarding.add_product.new_domain.description"
					}
				}, {
					title: {
						id: "onboarding.add_product.waf_ruleset.title"
					},
					trackingEvent: c.WAF_RULESET,
					icon: "cloudflare-security-application",
					url: "?to=/:account/application-security/waf/custom/create",
					description: {
						id: "onboarding.add_product.waf_ruleset.description"
					}
				}, {
					title: {
						id: "apps.workers"
					},
					trackingEvent: c.WORKERS,
					icon: "edgeworker",
					url: "?to=/:account/workers-and-pages/create",
					description: {
						id: "onboarding.add_product.workers.description"
					}
				}, {
					title: {
						id: "apps.pages"
					},
					trackingEvent: c.PAGES,
					icon: "workers-pages",
					url: "?to=/:account/workers-and-pages/create/pages",
					description: {
						id: "onboarding.add_product.pages.description"
					}
				}, {
					title: {
						id: "onboarding.add_product.r2.title"
					},
					trackingEvent: c.R2,
					icon: "r2",
					url: "?to=/:account/r2/new",
					description: {
						id: "onboarding.add_product.r2.description"
					}
				}, {
					title: {
						id: "onboarding.add_product.account_member.title"
					},
					trackingEvent: c.ACCOUNT_MEMBERS,
					icon: "user-outline",
					url: "?to=/:account/members/invite",
					description: {
						id: "onboarding.add_product.account_member.description"
					},
					permissionCheck: "#member:edit"
				}];
			var T = t("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				O = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				h = t.n(O);

			function S(I) {
				for (var x = 1; x < arguments.length; x++) {
					var q = arguments[x] != null ? Object(arguments[x]) : {},
						ee = Object.keys(q);
					typeof Object.getOwnPropertySymbols == "function" && ee.push.apply(ee, Object.getOwnPropertySymbols(q).filter(function(de) {
						return Object.getOwnPropertyDescriptor(q, de).enumerable
					})), ee.forEach(function(de) {
						g(I, de, q[de])
					})
				}
				return I
			}

			function g(I, x, q) {
				return x = C(x), x in I ? Object.defineProperty(I, x, {
					value: q,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : I[x] = q, I
			}

			function C(I) {
				var x = M(I, "string");
				return typeof x == "symbol" ? x : String(x)
			}

			function M(I, x) {
				if (typeof I != "object" || I === null) return I;
				var q = I[Symbol.toPrimitive];
				if (q !== void 0) {
					var ee = q.call(I, x || "default");
					if (typeof ee != "object") return ee;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (x === "string" ? String : Number)(I)
			}

			function b() {
				return b = Object.assign ? Object.assign.bind() : function(I) {
					for (var x = 1; x < arguments.length; x++) {
						var q = arguments[x];
						for (var ee in q) Object.prototype.hasOwnProperty.call(q, ee) && (I[ee] = q[ee])
					}
					return I
				}, b.apply(this, arguments)
			}

			function R(I, x) {
				if (I == null) return {};
				var q = A(I, x),
					ee, de;
				if (Object.getOwnPropertySymbols) {
					var he = Object.getOwnPropertySymbols(I);
					for (de = 0; de < he.length; de++) ee = he[de], !(x.indexOf(ee) >= 0) && (!Object.prototype.propertyIsEnumerable.call(I, ee) || (q[ee] = I[ee]))
				}
				return q
			}

			function A(I, x) {
				if (I == null) return {};
				var q = {},
					ee = Object.keys(I),
					de, he;
				for (he = 0; he < ee.length; he++) de = ee[he], !(x.indexOf(de) >= 0) && (q[de] = I[de]);
				return q
			}
			const L = I => {
					let {
						title: x,
						trackingEvent: q,
						icon: ee,
						url: de,
						description: he,
						disabled: Se
					} = I, ke = R(I, ["title", "trackingEvent", "icon", "url", "description", "disabled"]);
					return o().createElement(P, b({
						to: !Se && de || "#",
						"aria-disabled": Se,
						onClick: () => {
							h().sendEvent(q, {
								category: "Onboarding",
								component: "Global add dropdown"
							})
						}
					}, ke), o().createElement(d.ZC, {
						display: "flex"
					}, o().createElement(s.J, {
						type: ee,
						size: 24,
						mr: 2
					}), o().createElement(d.ZC, {
						display: "flex",
						flexDirection: "column"
					}, o().createElement(d.ZC, {
						fontSize: 3
					}, o().createElement(i.cC, x)), o().createElement(d.ZC, {
						fontSize: 2,
						color: "gray.4"
					}, o().createElement(i.cC, he)))))
				},
				P = (0, a.createStyledComponent)(({
					theme: I
				}) => {
					const x = {
						cursor: "pointer",
						backgroundColor: (0, m.Yc)() ? I.colors.gray[8] : I.colors.gray[9],
						color: I.colors.gray[2]
					};
					return {
						display: "block",
						width: "100%",
						px: 16,
						py: 8,
						background: I.colors.background,
						color: I.colors.gray[2],
						fontSize: I.fontSizes[2],
						userSelect: "none",
						textDecoration: "none",
						textAlign: "left",
						borderRadius: "1px",
						':hover, :focus, :focus-within, :hover:not([aria-disabled="true"])': x,
						':focus-within:not([aria-disabled="true"])': S({}, x, {
							boxShadow: "none",
							borderRadius: 0
						}),
						':is([aria-disabled="true"])': {
							color: I.colors.gray[6],
							cursor: "not-allowed",
							pointerEvents: "none",
							opacity: .5
						}
					}
				}, T.Link);
			var H = L;

			function K() {
				return K = Object.assign ? Object.assign.bind() : function(I) {
					for (var x = 1; x < arguments.length; x++) {
						var q = arguments[x];
						for (var ee in q) Object.prototype.hasOwnProperty.call(q, ee) && (I[ee] = q[ee])
					}
					return I
				}, K.apply(this, arguments)
			}

			function Q(I) {
				for (var x = 1; x < arguments.length; x++) {
					var q = arguments[x] != null ? Object(arguments[x]) : {},
						ee = Object.keys(q);
					typeof Object.getOwnPropertySymbols == "function" && ee.push.apply(ee, Object.getOwnPropertySymbols(q).filter(function(de) {
						return Object.getOwnPropertyDescriptor(q, de).enumerable
					})), ee.forEach(function(de) {
						pe(I, de, q[de])
					})
				}
				return I
			}

			function pe(I, x, q) {
				return x = te(x), x in I ? Object.defineProperty(I, x, {
					value: q,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : I[x] = q, I
			}

			function te(I) {
				var x = Y(I, "string");
				return typeof x == "symbol" ? x : String(x)
			}

			function Y(I, x) {
				if (typeof I != "object" || I === null) return I;
				var q = I[Symbol.toPrimitive];
				if (q !== void 0) {
					var ee = q.call(I, x || "default");
					if (typeof ee != "object") return ee;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (x === "string" ? String : Number)(I)
			}

			function ie(I, x) {
				if (I == null) return {};
				var q = Z(I, x),
					ee, de;
				if (Object.getOwnPropertySymbols) {
					var he = Object.getOwnPropertySymbols(I);
					for (de = 0; de < he.length; de++) ee = he[de], !(x.indexOf(ee) >= 0) && (!Object.prototype.propertyIsEnumerable.call(I, ee) || (q[ee] = I[ee]))
				}
				return q
			}

			function Z(I, x) {
				if (I == null) return {};
				var q = {},
					ee = Object.keys(I),
					de, he;
				for (he = 0; he < ee.length; he++) de = ee[he], !(x.indexOf(de) >= 0) && (q[de] = I[de]);
				return q
			}
			const j = "GLOBAL_ADD_DROPDOWN",
				$ = (0, a.createStyledComponent)(({
					theme: I
				}) => ({
					"background-color": I.colors.blue[5]
				}), l.zx),
				F = ({
					disableProducts: I,
					topNavType: x
				}) => {
					const q = _(),
						ee = () => (0, u.tq)() || x === "icon-only" ? o().createElement(d.ZC, {
							display: "flex",
							alignItems: "center"
						}, o().createElement($, {
							type: "plain",
							iconType: "plus",
							iconSize: 24,
							padding: 1,
							color: "white"
						})) : x === "text-icon" || x === "icon-only-with-add-button" ? o().createElement(l.zx, {
							type: "primary"
						}, o().createElement(o().Fragment, null, o().createElement(s.J, {
							label: "plus",
							type: "plus"
						}), " ", o().createElement(i.cC, {
							id: "common.add"
						}))) : o().createElement(l.zx, {
							type: "primary"
						}, o().createElement(i.cC, {
							id: "common.add"
						}), " ", o().createElement(s.J, {
							label: "arrow",
							type: "caret-down"
						}));
					return o().createElement(X, {
						role: "group",
						"data-testid": j
					}, o().createElement(r.Lt, {
						trigger: x === "baseline" ? o().createElement(oe, null, o().createElement(s.J, {
							label: "plus",
							type: "plus"
						}), !(0, u.tq)() && o().createElement(o().Fragment, null, o().createElement(i.cC, {
							id: "common.add"
						}), " ", o().createElement(s.J, {
							label: "arrow",
							type: "caret-down"
						}))) : ee(),
						menu: o().createElement(n.v2, {
							overflow: "auto",
							maxHeight: "80vh",
							width: "min(50vw, 340px)",
							whiteSpace: "normal",
							mr: 1,
							p: "8px 0",
							bottom: "auto",
							zIndex: 1200
						}, q.map(de => {
							const he = de || {},
								{
									disableOn: Se,
									permissionCheck: ke
								} = he,
								je = ie(he, ["disableOn", "permissionCheck"]),
								we = Se && I[Se],
								$e = Q({}, je, {
									disabled: we
								});
							return ke ? o().createElement(E.Z, {
								key: de.title.id,
								edit: ke
							}, ({
								isEditable: Ke
							}) => Ke && o().createElement(H, $e)) : o().createElement(H, K({
								key: de.url
							}, $e))
						}))
					}))
				},
				X = (0, a.createStyledComponent)(() => ({
					height: "100%",
					position: "relative",
					display: "flex",
					alignItems: "center"
				})),
				oe = (0, a.createStyledComponent)(({
					theme: I
				}) => ({
					lineHeight: 1,
					pr: 2,
					pl: 2,
					width: "fit-content",
					display: "flex",
					alignItems: "center",
					gap: 1,
					borderRadius: 4,
					borderColor: I.colors.gray[6],
					borderWidth: 1,
					borderStyle: "solid",
					color: (0, m.Yc)() ? I.colors.gray[1] : I.colors.gray[4],
					cursor: "pointer",
					whiteSpace: "nowrap",
					backgroundColor: "transparent",
					mr: 1,
					padding: 2,
					"&:hover": {
						backgroundColor: (0, m.Yc)() ? I.colors.gray[8] : I.colors.gray[9]
					}
				}), d.zx);
			var Ee = F,
				B = Ee
		},
		"../react/app/components/LoadingSuspense.tsx": function(W, v, t) {
			"use strict";
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t.n(e),
				s = t("../../../../node_modules/@cloudflare/component-loading/es/index.js"),
				d = t("../node_modules/@cloudflare/elements/es/index.js"),
				l = t("../react/utils/translator.tsx"),
				m = t("../react/app/components/ErrorStatus.tsx"),
				a = t("../react/common/components/EmptyPage.jsx"),
				u = t("../react/common/hooks/suspenseHelpers.ts");

			function E(i) {
				const [p, c] = (0, e.useState)(!1);
				return (0, e.useEffect)(() => {
					const _ = window.setTimeout(() => c(!0), i);
					return () => window.clearTimeout(_)
				}, []), p
			}
			const n = ({
					loadingTimeout: i = 1e3,
					stillLoadingTimeout: p = 9e3
				}) => {
					const c = E(i),
						_ = E(p);
					if ((0, u.nW)(), !c && !_) return o().createElement(a.Z, null);
					const y = _ ? o().createElement(l.cC, {
						id: "common.still_loading"
					}) : c ? o().createElement(l.cC, {
						id: "common.loading"
					}) : null;
					return o().createElement(m.Z, {
						size: 5
					}, o().createElement(d.ZC, {
						mr: 3
					}, o().createElement(s.g, {
						size: "2x"
					})), y)
				},
				r = ({
					children: i
				}) => o().createElement(e.Suspense, {
					fallback: o().createElement(n, null)
				}, i);
			v.Z = r
		},
		"../react/app/components/Persistence/api.ts": function(W, v, t) {
			"use strict";
			t.d(v, {
				C8: function() {
					return u
				},
				dr: function() {
					return l
				},
				lt: function() {
					return m
				},
				m6: function() {
					return n
				},
				n: function() {
					return E
				},
				yl: function() {
					return d
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-http/@cloudflare/util-http"),
				o = t.n(e);
			const s = "/persistence/user",
				d = async () => {
					try {
						return await (await e.get(s, {
							hideErrorAlert: !0
						})).body
					} catch (r) {
						console.error(r)
					}
				}, l = async r => {
					try {
						return await (await e.get(`/accounts/${r}/organizations`, {
							hideErrorAlert: !0
						})).body
					} catch (i) {
						console.error(i)
					}
				}, m = async (r, i) => {
					try {
						return await (await e.post(`${s}/favorites`, {
							body: JSON.stringify({
								type: "zone",
								name: r,
								accountId: i
							}),
							hideErrorAlert: !0
						})).body
					} catch (p) {
						return console.error(p), []
					}
				}, a = async (r, i) => {
					try {
						return await http.post(`/accounts/${r}/support/help_form/statusPage/subscribe`, {
							body: JSON.stringify({
								incidentId: i
							}),
							hideErrorAlert: !0
						}), !0
					} catch (p) {
						return console.error(p), !1
					}
				}, u = async r => {
					try {
						return await (await e.post(s, {
							body: JSON.stringify({
								darkMode: r
							})
						})).body
					} catch (i) {
						console.error(i)
					}
				}, E = async r => {
					try {
						return await (await e.post(`${s}/recents`, {
							body: JSON.stringify(r),
							hideErrorAlert: !0
						})).body
					} catch (i) {
						console.error(i)
					}
				}, n = async r => {
					try {
						return await (await e.post(`${s}/viewed-changes`, {
							body: JSON.stringify(r),
							hideErrorAlert: !0
						})).body
					} catch (i) {
						throw console.error(i), i
					}
				}
		},
		"../react/app/components/Persistence/index.tsx": function(W, v, t) {
			"use strict";
			t.d(v, {
				Wl: function() {
					return E
				},
				lp: function() {
					return y
				},
				Z_: function() {
					return O
				},
				r7: function() {
					return L
				},
				Tv: function() {
					return ie
				},
				yZ: function() {
					return h
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t.n(e),
				s = t("../react/app/redux/index.ts"),
				d = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				l = t.n(d),
				m = t("../react/utils/bootstrap.ts"),
				a = t("../react/common/selectors/zoneSelectors.ts"),
				u = t("../react/app/components/Persistence/api.ts");
			const E = 10;

			function n(Z) {
				for (var j = 1; j < arguments.length; j++) {
					var $ = arguments[j] != null ? Object(arguments[j]) : {},
						F = Object.keys($);
					typeof Object.getOwnPropertySymbols == "function" && F.push.apply(F, Object.getOwnPropertySymbols($).filter(function(X) {
						return Object.getOwnPropertyDescriptor($, X).enumerable
					})), F.forEach(function(X) {
						r(Z, X, $[X])
					})
				}
				return Z
			}

			function r(Z, j, $) {
				return j = i(j), j in Z ? Object.defineProperty(Z, j, {
					value: $,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : Z[j] = $, Z
			}

			function i(Z) {
				var j = p(Z, "string");
				return typeof j == "symbol" ? j : String(j)
			}

			function p(Z, j) {
				if (typeof Z != "object" || Z === null) return Z;
				var $ = Z[Symbol.toPrimitive];
				if ($ !== void 0) {
					var F = $.call(Z, j || "default");
					if (typeof F != "object") return F;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (j === "string" ? String : Number)(Z)
			}
			const c = {
					darkMode: "off",
					emailVerificationRequest: "",
					favorites: [],
					recents: {},
					viewedChanges: []
				},
				_ = n({}, c, {
					isLoading: !0,
					remainingStarSlots: 10,
					actions: {
						starZone: () => null,
						setDarkMode: () => null,
						isZoneStarred: () => !1,
						canAccountStarZone: () => !0,
						logRouteVisited: () => null,
						viewChange: () => null
					}
				}),
				y = (0, e.createContext)(_),
				T = y.Consumer,
				O = ({
					children: Z,
					onDarkModeChangeCb: j
				}) => {
					const [$, F] = (0, e.useState)(c), [X, oe] = (0, e.useState)(_.isLoading), Ee = (0, m.$8)(), B = (0, s.p4)(ee => (0, a.wH)(ee));
					(0, e.useEffect)(() => {
						Ee ? (0, u.yl)().then(ee => {
							ee && (F(ee), j(ee.darkMode))
						}).finally(() => oe(!1)) : oe(!1)
					}, [Ee]);
					const I = (ee, de) => !!$.favorites.find(he => he.type === "zone" && he.name === ee && he.accountId === de),
						x = E - $.favorites.length,
						q = ee => $.favorites.filter(he => he.type === "zone" && he.accountId === ee).length < E;
					return o().createElement(y.Provider, {
						value: n({}, $, {
							isLoading: X,
							remainingStarSlots: x,
							actions: {
								canAccountStarZone: q,
								isZoneStarred: I,
								starZone: async (ee, de) => {
									var he;
									const Se = !I(ee, de),
										ke = q(de);
									if (Se && !ke) {
										console.log("can not star zone - account is at limit");
										return
									}
									const je = await (0, u.lt)(ee, de);
									l().sendEvent("click star zone", {
										isStarring: Se,
										totalStarredZones: je.filter(we => we.accountId === de && we.type === "zone").length,
										totalZones: B == null || (he = B.paginationData) === null || he === void 0 ? void 0 : he.info.total_count
									}), F(n({}, $, {
										favorites: je
									}))
								},
								setDarkMode: async ee => {
									const de = await (0, u.C8)(ee);
									F(de), j(de.darkMode)
								},
								logRouteVisited: async ee => {
									var de;
									const he = await (0, u.n)(ee);
									F((de = he) !== null && de !== void 0 ? de : n({}, $))
								},
								viewChange: async ee => {
									const de = await (0, u.m6)(ee);
									F(n({}, $, {
										viewedChanges: de
									}))
								}
							}
						})
					}, Z)
				},
				h = () => (0, e.useContext)(y);
			var S = t("../../../../node_modules/@cloudflare/style-const/es/index.js"),
				g = t("../../../../node_modules/@cloudflare/component-icon/es/index.js");

			function C() {
				return C = Object.assign ? Object.assign.bind() : function(Z) {
					for (var j = 1; j < arguments.length; j++) {
						var $ = arguments[j];
						for (var F in $) Object.prototype.hasOwnProperty.call($, F) && (Z[F] = $[F])
					}
					return Z
				}, C.apply(this, arguments)
			}

			function M(Z, j) {
				if (Z == null) return {};
				var $ = b(Z, j),
					F, X;
				if (Object.getOwnPropertySymbols) {
					var oe = Object.getOwnPropertySymbols(Z);
					for (X = 0; X < oe.length; X++) F = oe[X], !(j.indexOf(F) >= 0) && (!Object.prototype.propertyIsEnumerable.call(Z, F) || ($[F] = Z[F]))
				}
				return $
			}

			function b(Z, j) {
				if (Z == null) return {};
				var $ = {},
					F = Object.keys(Z),
					X, oe;
				for (oe = 0; oe < F.length; oe++) X = F[oe], !(j.indexOf(X) >= 0) && ($[X] = Z[X]);
				return $
			}
			const R = {
				light: {
					gold: "gold.6",
					gray: "gray.6"
				},
				dark: {
					gold: "gold.3",
					gray: "gray.4"
				}
			};
			var L = Z => {
					let {
						isStarred: j,
						size: $ = 16
					} = Z, F = M(Z, ["isStarred", "size"]);
					const X = R[(0, S.Yc)() ? "dark" : "light"];
					return o().createElement(g.J, C({
						type: j ? "star" : "star-outline",
						color: j ? X.gold : X.gray,
						size: $
					}, F))
				},
				P = t("../node_modules/@cloudflare/elements/es/index.js");

			function H(Z) {
				for (var j = 1; j < arguments.length; j++) {
					var $ = arguments[j] != null ? Object(arguments[j]) : {},
						F = Object.keys($);
					typeof Object.getOwnPropertySymbols == "function" && F.push.apply(F, Object.getOwnPropertySymbols($).filter(function(X) {
						return Object.getOwnPropertyDescriptor($, X).enumerable
					})), F.forEach(function(X) {
						K(Z, X, $[X])
					})
				}
				return Z
			}

			function K(Z, j, $) {
				return j = Q(j), j in Z ? Object.defineProperty(Z, j, {
					value: $,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : Z[j] = $, Z
			}

			function Q(Z) {
				var j = pe(Z, "string");
				return typeof j == "symbol" ? j : String(j)
			}

			function pe(Z, j) {
				if (typeof Z != "object" || Z === null) return Z;
				var $ = Z[Symbol.toPrimitive];
				if ($ !== void 0) {
					var F = $.call(Z, j || "default");
					if (typeof F != "object") return F;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (j === "string" ? String : Number)(Z)
			}
			const te = {
				light: {
					default: {
						border: "gray.8",
						text: "gray.2",
						bg: "white",
						bgDisabled: "grey.6",
						bgHover: "gray.9"
					},
					active: {
						border: "blue.5",
						text: "blue.5",
						bg: "blue.9",
						bgDisabled: "grey.6",
						bgHover: "button.plain.hover.background"
					}
				},
				dark: {
					default: {
						border: "gray.8",
						text: "gray.1",
						bg: "gray.7",
						bgDisabled: "grey.6",
						bgHover: "gray.6"
					},
					active: {
						border: "blue.5",
						text: "gray.1",
						bg: "blue.9",
						bgDisabled: "grey.6",
						bgHover: "button.plain.hover.background"
					}
				}
			};
			var ie = (0, e.forwardRef)(({
				featurePreview: Z = !1,
				isStarred: j,
				onClickFn: $,
				isDisabled: F,
				testId: X,
				buttonText: oe,
				size: Ee = "large",
				variant: B = "pill"
			}, I) => {
				const [x, q] = (0, e.useState)(!1), ee = te[(0, S.Yc)() ? "dark" : "light"][j && !Z ? "active" : "default"], de = H({}, Ee === "large" && {
					starIconSize: 16,
					fontSize: 3,
					height: "auto",
					paddingLeft: "12px",
					paddingRight: 3
				}, Ee === "medium" && {
					starIconSize: 16,
					fontSize: 2,
					height: "2rem",
					paddingRight: 2,
					paddingLeft: 2
				}, Ee === "small" && {
					starIconSize: 14,
					fontSize: 1,
					height: "1.5rem",
					paddingLeft: "6px",
					paddingRight: 2
				}), he = {
					pill: "50vh",
					button: 4
				};
				return o().createElement(P.zx, {
					onMouseEnter: () => q(!0),
					onMouseLeave: () => q(!1),
					innerRef: I,
					display: "inline-flex",
					alignItems: "center",
					py: 2,
					pr: de.paddingRight,
					gap: 1,
					pl: de.paddingLeft,
					pointerEvents: "inherit",
					borderRadius: he[B],
					border: "1px solid",
					cursor: Z || F ? "default" : "pointer",
					backgroundColor: x ? ee.bgHover : ee.bg,
					color: ee.text,
					borderColor: ee.border,
					onClick: $,
					opacity: F ? .5 : 1,
					disabled: F,
					fontSize: de.fontSize,
					height: de.height,
					"data-testid": X
				}, o().createElement(L, {
					isStarred: Z ? !1 : j,
					size: de.starIconSize
				}), oe)
			})
		},
		"../react/app/components/SidebarNav/permissions.ts": function(W, v, t) {
			"use strict";
			t.d(v, {
				$n: function() {
					return p
				},
				IU: function() {
					return _
				},
				Wq: function() {
					return M
				},
				dL: function() {
					return y
				},
				fO: function() {
					return C
				},
				gw: function() {
					return R
				},
				hv: function() {
					return c
				},
				iY: function() {
					return r
				},
				o_: function() {
					return h
				},
				us: function() {
					return g
				},
				wB: function() {
					return i
				},
				zJ: function() {
					return S
				}
			});
			var e = t("../react/common/components/AccessCheck/index.ts"),
				o = t("../react/common/selectors/entitlementsSelectors.ts"),
				s = t("../react/common/selectors/zoneSelectors.ts"),
				d = t("../react/common/selectors/accountSelectors.ts"),
				l = t("../react/utils/zoneLevelAccess.ts"),
				m = t("../react/pages/stream/selectors.ts"),
				a = t("../react/pages/home/domain-registration/selectors.ts"),
				u = t("../react/pages/images/selectors.ts"),
				E = t("../react/pages/r2/selectors.ts");
			const n = A => !!(0, l.b)(A),
				r = A => n(A) ? (0, e.hT)(A) : !0,
				i = (A, L, P, H = "read") => {
					const K = (0, s.nA)(A);
					return n(A) ? (0, e.WL)(A, (0, e.W9)(P, e.ZZ[H]), (0, e.j)(K == null ? void 0 : K.id)) : (0, d.Yj)(A)(L)[H]
				},
				p = (A, L, P, H = "read") => {
					const K = (0, s.nA)(A),
						Q = e.zs.includes(P);
					return n(A) ? (0, e.WL)(A, Q ? P : (0, e.my)(P, e.ZZ[H === "edit" ? "update" : H]), (0, e.j)(K == null ? void 0 : K.id)) : (0, d.Yj)(A)(L)[H === "update" ? "edit" : H]
				},
				c = A => !!(0, m._Q)(A),
				_ = A => (0, u.pT)(A),
				y = A => (0, u.pT)(A) && (0, u.GH)(A),
				T = A => sourcingKitEnabledSelector(A),
				O = A => !!r2EnabledSelector(A),
				h = A => (0, E.Mv)(A),
				S = A => (0, o.$f)(A, "rulesets.magic_transit_allowed"),
				g = A => (0, o.$f)(A, "flowtrackd.magic_custom_config_allowed"),
				C = A => (0, o.$f)(A, "rulesets.fw_global_rulesets_execute_ddos_l4_allowed"),
				M = A => (0, d.Le)(A, "ddos_protection", "l4_rulesets"),
				b = A => hasAccountEntitlements(A, ["rulesets.owning_root_rulesets_allowed", "rulesets.fw_global_rulesets_execute_firewall_managed_cmr_allowed", "rulesets.fw_global_rulesets_execute_firewall_managed_cor_allowed"]),
				R = A => (0, a.HO)(A)
		},
		"../react/app/components/SomethingWrong.jsx": function(W, v, t) {
			"use strict";
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t.n(e),
				s = t("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				d = t.n(s),
				l = t("../../../../node_modules/prop-types/index.js"),
				m = t.n(l),
				a = t("webpack/sharing/consume/default/react-redux/react-redux"),
				u = t.n(a),
				E = t("webpack/sharing/consume/default/@cloudflare/intl-react/@cloudflare/intl-react"),
				n = t.n(E),
				r = t("../../../../node_modules/@cloudflare/style-container/es/index.js"),
				i = t("../node_modules/@cloudflare/component-button/es/index.js"),
				p = t("../../../../node_modules/@sentry/react/node_modules/@sentry/browser/esm/sdk.js"),
				c = t("../../../../node_modules/@sentry/core/esm/exports.js"),
				_ = t("../../../../node_modules/@cloudflare/component-header/es/index.js"),
				y = t("../../../../node_modules/@cloudflare/component-logo/es/index.js"),
				T = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				O = t.n(T),
				h = t("../react/common/actions/membershipActions.ts"),
				S = t("../react/utils/url.ts"),
				g = t("../react/app/components/Footer.tsx");

			function C(ie) {
				for (var Z = 1; Z < arguments.length; Z++) {
					var j = arguments[Z] != null ? Object(arguments[Z]) : {},
						$ = Object.keys(j);
					typeof Object.getOwnPropertySymbols == "function" && $.push.apply($, Object.getOwnPropertySymbols(j).filter(function(F) {
						return Object.getOwnPropertyDescriptor(j, F).enumerable
					})), $.forEach(function(F) {
						M(ie, F, j[F])
					})
				}
				return ie
			}

			function M(ie, Z, j) {
				return Z = b(Z), Z in ie ? Object.defineProperty(ie, Z, {
					value: j,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : ie[Z] = j, ie
			}

			function b(ie) {
				var Z = R(ie, "string");
				return typeof Z == "symbol" ? Z : String(Z)
			}

			function R(ie, Z) {
				if (typeof ie != "object" || ie === null) return ie;
				var j = ie[Symbol.toPrimitive];
				if (j !== void 0) {
					var $ = j.call(ie, Z || "default");
					if (typeof $ != "object") return $;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (Z === "string" ? String : Number)(ie)
			}
			const A = (0, r.createComponent)(({
					type: ie
				}) => ({
					height: ie !== "fullscreen" ? 451 : "75vh",
					tabletLegacy: {
						marginBottom: "-2.66rem"
					}
				})),
				L = (0, r.createComponent)(({
					theme: ie,
					margin: Z,
					size: j = 6
				}) => ({
					display: "flex",
					flexFlow: "column",
					color: ie.colors.gray[3],
					height: Z ? "auto" : "100%",
					padding: Z ? 0 : ie.space[j > 1 ? j - 2 : 0],
					margin: Z,
					justifyContent: "center",
					alignItems: "center"
				})),
				P = (0, r.createComponent)(() => ({
					textAlign: "left"
				})),
				H = (0, r.createComponent)(() => ({
					textAlign: "right"
				})),
				K = (0, r.createComponent)(({
					theme: ie
				}) => ({
					fontSize: ie.fontSizes[6]
				})),
				Q = (0, r.createComponent)(({
					theme: ie
				}) => ({
					fontSize: ie.fontSizes[4]
				})),
				pe = (0, r.createComponent)(({
					theme: ie
				}) => ({
					fontSize: ie.fontSizes[3]
				})),
				te = (0, r.createComponent)(({
					theme: ie
				}) => ({
					width: "100%",
					height: 125,
					marginTop: ie.space[4],
					padding: ie.space[2]
				}), "textarea");
			class Y extends o().Component {
				constructor(...Z) {
					super(...Z);
					M(this, "state", {
						value: "",
						submitted: !1
					}), M(this, "handleTextareaChange", j => {
						this.setState({
							value: j.target.value
						})
					}), M(this, "sendErrToSentry10", async () => {
						try {
							var j, $, F, X;
							const oe = ((j = window) === null || j === void 0 || ($ = j.bootstrap) === null || $ === void 0 || (F = $.data) === null || F === void 0 || (X = F.user) === null || X === void 0 ? void 0 : X.id) || "Unknown",
								Ee = this.props.eventId || p.eW(),
								B = {
									name: oe,
									email: `${oe}@userid.com`,
									comments: this.state.value,
									eventId: Ee,
									url: window.location.href,
									prevUrl: document.referrer,
									date: Date.now(),
									dashVersion: window.build.dashVersion,
									build: C({}, window.build)
								};
							(await fetch("https://platform.dash.cloudflare.com/sentry/user-feedback", {
								method: "POST",
								headers: {
									Accept: "*/*",
									"Content-Type": "application/json"
								},
								body: JSON.stringify(B)
							})).ok && this.setState({
								submitted: !0,
								value: ""
							}, () => {
								setTimeout(() => window.location.href = "/", 5 * 1e3)
							})
						} catch (oe) {
							console.error(oe)
						}
					}), M(this, "handleSubmit", () => {
						this.state.value !== "" && this.sendErrToSentry10()
					}), M(this, "renderContent", j => o().createElement(E.I18n, null, $ => o().createElement(A, {
						type: j
					}, o().createElement(L, null, o().createElement(P, null, o().createElement(K, null, $.t("error.internal_issues")), o().createElement(Q, null, $.t("error.help_us")), o().createElement(te, {
						name: "comment",
						value: this.state.textareaValue,
						onChange: F => this.handleTextareaChange(F),
						disabled: this.state.submitted,
						placeholder: $.t("error.give_feedback")
					}), o().createElement(H, null, !this.state.submitted && o().createElement(i.zx, {
						onClick: this.handleSubmit,
						type: "primary"
					}, $.t("common.submit")), this.state.submitted && o().createElement(pe, null, $.t("error.feedback_sent"))))))))
				}
				async componentDidMount() {
					const {
						error: Z,
						sentryTag: j,
						membershipsList: $
					} = this.props;
					console.error(`SomethingWrong: ${Z}`);
					let F = "";
					const X = (0, S.e1)();
					if (X) {
						var oe;
						const B = await $({
								parameters: {
									status: "accepted"
								}
							}),
							I = B == null || (oe = B.find(x => x.id === X)) === null || oe === void 0 ? void 0 : oe.roles;
						I && I.length && (F = I.join(", "))
					}
					const Ee = `ErrorBoundary - ${Z}`;
					c.Tb(Ee, {
						tags: {
							errorBoundary: j,
							normalizedPath: (0, S.Fl)(window.location.pathname),
							roles: F.length ? F : void 0
						}
					}), O().sendEvent("something wrong", {
						error: Z,
						roles: F.length ? F : void 0
					})
				}
				render() {
					const {
						type: Z
					} = this.props;
					return Z === "fullscreen" ? o().createElement("div", null, o().createElement(_.h4, null, o().createElement(s.Link, {
						to: "/"
					}, o().createElement(y.TR, null))), this.renderContent(Z), o().createElement(g.Z, null)) : this.renderContent(Z)
				}
			}
			Y.propTypes = {
				type: m().oneOf(["fullscreen", "page"]),
				error: m().oneOfType([m().string, m().object]),
				eventId: m().string,
				sentryTag: m().string,
				membershipsList: m().func
			}, v.Z = (0, a.connect)(() => ({}), {
				membershipsList: h.YT
			})(Y)
		},
		"../react/app/providers/storeContainer.js": function(W, v, t) {
			"use strict";
			t.d(v, {
				bh: function() {
					return H
				}
			});
			var e = t("../../../../node_modules/redux/es/redux.js"),
				o = t("../../../../node_modules/redux-logger/dist/redux-logger.js"),
				s = t.n(o),
				d = t("../../../../node_modules/redux-thunk/es/index.js"),
				l = t("../../../../node_modules/redux-persist/es/index.js"),
				m = t("../../../../node_modules/redux-persist/lib/storage/index.js"),
				a = t("../react/app/rootReducer.js"),
				u = t("../react/app/redux/normalizer.js"),
				E = t("../../../../node_modules/@sentry/react/esm/redux.js"),
				n = t("../react/app/providers/sentryTransformer.js"),
				r = t("../react/app/reducerRegistry.js"),
				i = t("../../../../node_modules/redux-saga/dist/redux-saga-core-npm-proxy.esm.js"),
				p = t("../react/common/sagas/index.js"),
				c = t("../react/app/redux/processActionMiddleware.js"),
				_ = t("../../../../node_modules/redux-grim/dist/redux-grim.es.js"),
				y = t("../../../../node_modules/is-promise/index.js"),
				T = t.n(y);

			function O(K) {
				for (var Q = 1; Q < arguments.length; Q++) {
					var pe = arguments[Q] != null ? Object(arguments[Q]) : {},
						te = Object.keys(pe);
					typeof Object.getOwnPropertySymbols == "function" && te.push.apply(te, Object.getOwnPropertySymbols(pe).filter(function(Y) {
						return Object.getOwnPropertyDescriptor(pe, Y).enumerable
					})), te.forEach(function(Y) {
						h(K, Y, pe[Y])
					})
				}
				return K
			}

			function h(K, Q, pe) {
				return Q = S(Q), Q in K ? Object.defineProperty(K, Q, {
					value: pe,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : K[Q] = pe, K
			}

			function S(K) {
				var Q = g(K, "string");
				return typeof Q == "symbol" ? Q : String(Q)
			}

			function g(K, Q) {
				if (typeof K != "object" || K === null) return K;
				var pe = K[Symbol.toPrimitive];
				if (pe !== void 0) {
					var te = pe.call(K, Q || "default");
					if (typeof te != "object") return te;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (Q === "string" ? String : Number)(K)
			}
			const C = {
					key: "cf-redux-store",
					storage: m.Z,
					whitelist: ["accountAccess", "invite"]
				},
				M = (0, i.ZP)(),
				R = [({
					dispatch: K
				}) => Q => pe => T()(pe) ? pe.then(te => K(te)) : Q(pe), M, d.Z, c.Z, u.qR],
				A = K => (0, l.Wq)(C, O({}, a.Z, K));

			function L() {
				const K = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__,
					pe = e.compose((0, e.applyMiddleware)(...R), E.w({
						actionTransformer: n.b,
						stateTransformer: n.O
					})),
					te = {},
					Y = (0, e.createStore)(A(r.Z.getReducers()), te, pe);
				M.run(p.Z), (0, l.p5)(Y);
				const Z = (t.g.bootstrap || {}).data || {};
				return Y.dispatch((0, _.mW)("user", Z.user)), Y
			}
			let P;
			r.Z.setChangeListener(K => {
				var Q;
				P && ((Q = P) === null || Q === void 0 ? void 0 : Q.replaceReducer) && (P.replaceReducer(A(K)), (0, l.p5)(P))
			});

			function H() {
				return P || (P = L()), P
			}
		},
		"../react/app/redux/index.ts": function(W, v, t) {
			"use strict";
			t.d(v, {
				TZ: function() {
					return s
				},
				UM: function() {
					return l
				},
				ZS: function() {
					return d
				},
				p4: function() {
					return m
				}
			});
			var e = t("webpack/sharing/consume/default/react-redux/react-redux"),
				o = t.n(e);
			const s = () => (0, e.useStore)(),
				d = () => s().getState(),
				l = () => (0, e.useDispatch)(),
				m = e.useSelector
		},
		"../react/app/redux/normalizer.js": function(W, v, t) {
			"use strict";
			t.d(v, {
				P1: function() {
					return E
				},
				jQ: function() {
					return a
				},
				qR: function() {
					return n
				},
				uc: function() {
					return u
				}
			});
			var e = t("../react/pages/home/alerts/config.tsx"),
				o = t("../react/pages/workers/entityTypes.ts"),
				s = t("../react/pages/email/types.ts"),
				d = t("../../../../node_modules/redux-grim/dist/redux-grim.es.js"),
				l = t("../../../../node_modules/seamless-immutable/seamless-immutable.production.min.js"),
				m = t.n(l);
			const a = l.static.from([{
					entityType: "accessOrganization"
				}, {
					entityType: "access-temp-data"
				}, {
					entityType: "accessPolicy"
				}, {
					entityType: "accessGroup"
				}, {
					entityType: "accessPolicies",
					to: "accessPolicy"
				}, {
					entityType: "accessGroups",
					to: "accessGroup"
				}, {
					entityType: "accessAppLauncher"
				}, {
					entityType: "accounts"
				}, {
					entityType: e.w8.alert
				}, {
					entityType: e.w8.alerts,
					to: e.w8.alert
				}, {
					entityType: e.w8.alertsHistory
				}, {
					entityType: e.w8.integrations
				}, {
					entityType: e.w8.pagerDuty
				}, {
					entityType: e.w8.pagerDutyRequest
				}, {
					entityType: e.w8.statuspageComponents
				}, {
					entityType: e.w8.webhook
				}, {
					entityType: e.w8.webhooks
				}, {
					entityType: e.w8.availableAlerts
				}, {
					entityType: e.w8.availableAlertsForProduct
				}, {
					entityType: e.w8.deliveryMechanisms
				}, {
					entityType: "accountsDetailed"
				}, {
					entityType: "accountSubscriptions",
					to: "accountSubscription"
				}, {
					entityType: "zoneSubscriptions",
					to: "zoneSubscription"
				}, {
					entityType: "accountSubscription"
				}, {
					entityType: "billingFreeTrial"
				}, {
					entityType: "accountSubscriptionCancelDowngrade"
				}, {
					entityType: "accountSubscriptionCancellationReason"
				}, {
					entityType: "accountLegoContract"
				}, {
					entityType: "accountMember"
				}, {
					entityType: "accountMembers",
					to: "accountMember"
				}, {
					entityType: "accountSingle"
				}, {
					entityType: "accountRoles"
				}, {
					entityType: "accountHealthChecks"
				}, {
					entityType: "advancedTCPProtection"
				}, {
					entityType: "advancedTCPAllowlistItem"
				}, {
					entityType: "advancedTCPAllowlist",
					to: "advancedTCPAllowlistItem"
				}, {
					entityType: "amp"
				}, {
					entityType: "apiShields",
					to: "apiShield"
				}, {
					entityType: "apiShield"
				}, {
					entityType: "apiToken"
				}, {
					entityType: "apiTokens",
					to: "apiToken"
				}, {
					entityType: "apiTokenZones",
					to: "zone"
				}, {
					entityType: "apiTokenFormZones",
					to: "zone"
				}, {
					entityType: "apiTokenSearchZones",
					to: "zone"
				}, {
					entityType: "billing.usageGraphQL"
				}, {
					entityType: "billingAccount"
				}, {
					entityType: "billingPlans"
				}, {
					entityType: "billingProfile"
				}, {
					entityType: "billingTransactions"
				}, {
					entityType: "billingOutstandingTransactions"
				}, {
					entityType: "billingBadDebt"
				}, {
					entityType: "billingUnpaidInvoices"
				}, {
					entityType: "billingNextBilling"
				}, {
					entityType: "billableUsage"
				}, {
					entityType: "billingContractSelfServeEligibility"
				}, {
					entityType: "certificate"
				}, {
					entityType: "certificates",
					to: "certificate"
				}, {
					entityType: "colosStats"
				}, {
					entityType: "certificatePack"
				}, {
					entityType: "certificatePacks",
					to: "certificatePack"
				}, {
					entityType: "certificateOrder"
				}, {
					entityType: "certificateValidationStatus"
				}, {
					entityType: "clientCertificate"
				}, {
					entityType: "clientCertificates",
					to: "clientCertificate"
				}, {
					entityType: "customerMetadataBoundary"
				}, {
					entityType: "customHostname"
				}, {
					entityType: "customHostnames",
					to: "customHostname"
				}, {
					entityType: "customCSR"
				}, {
					entityType: "customCSRs",
					to: "customCSR"
				}, {
					entityType: "dnsFirewallCluster"
				}, {
					entityType: "dnsFirewallClusters",
					to: "dnsFirewallCluster"
				}, {
					entityType: "dnsRecord"
				}, {
					entityType: "dnsRecords",
					to: "dnsRecord"
				}, {
					entityType: "dnsRecordsBulkAction",
					to: "dnsRecords"
				}, {
					entityType: "dnsRecordsImport"
				}, {
					entityType: "dnsAcl"
				}, {
					entityType: "dnsAcls",
					to: "dnsAcl"
				}, {
					entityType: "dnsTsig"
				}, {
					entityType: "dnsTsigs",
					to: "dnsTsig"
				}, {
					entityType: "dnsOutgoingZoneTransfers"
				}, {
					entityType: "dnsMaster"
				}, {
					entityType: "dnsMasters",
					to: "dnsMaster"
				}, {
					entityType: "dpa"
				}, {
					entityType: "filter"
				}, {
					entityType: "filteredMemberships"
				}, {
					entityType: "firewallRule",
					nestedProps: {
						filter: "filter"
					}
				}, {
					entityType: "firewallRules",
					to: "firewallRule"
				}, {
					entityType: "greTunnel"
				}, {
					entityType: "greTunnels",
					to: "greTunnel"
				}, {
					entityType: "interconnect"
				}, {
					entityType: "interconnects",
					to: "interconnect"
				}, {
					entityType: "healthCheck"
				}, {
					entityType: "healthChecks",
					to: "healthCheck"
				}, {
					entityType: "magicConnector"
				}, {
					entityType: "magicConnectors",
					to: "magicConnector"
				}, {
					entityType: "warpTunnels"
				}, {
					entityType: "hostnameRegions"
				}, {
					entityType: "http2ToOrigin"
				}, {
					entityType: "http2ToOriginMultiplexing"
				}, {
					entityType: "httpStats"
				}, {
					entityType: "httpStatsOverview"
				}, {
					entityType: "identityProvider"
				}, {
					entityType: "identityProviders",
					to: "identityProvider"
				}, {
					entityType: "ipAccessRule"
				}, {
					entityType: "ipAccessRules",
					to: "ipAccessRule"
				}, {
					entityType: "ipPrefix"
				}, {
					entityType: "ipPrefixes",
					to: "ipPrefix"
				}, {
					entityType: "ipsecTunnel"
				}, {
					entityType: "ipsecTunnels",
					to: "ipsecTunnel"
				}, {
					entityType: "pcapBucket"
				}, {
					entityType: "pcapBucketValidation",
					to: "pcapBucket"
				}, {
					entityType: "pcapBuckets",
					to: "pcapBucket"
				}, {
					entityType: "pcapCapture"
				}, {
					entityType: "pcapCaptures",
					to: "pcapCapture"
				}, {
					entityType: "networkMonitoringConfiguration"
				}, {
					entityType: "networkMonitoringRule"
				}, {
					entityType: "networkMonitoringRules",
					to: "networkMonitoringRule"
				}, {
					entityType: "loadBalancer",
					nestedProps: {
						default_pools: "pool",
						fallback_pool: "pool",
						region_pools: "pool",
						country_pools: "pool",
						pop_pools: "pool"
					}
				}, {
					entityType: "languagePreference"
				}, {
					entityType: "loadBalancers",
					to: "loadBalancer"
				}, {
					entityType: "accountLogpushJob"
				}, {
					entityType: "accountLogpushJobs",
					to: "accountLogpushJob"
				}, {
					entityType: "logpushJob"
				}, {
					entityType: "logpushJobs",
					to: "logpushJob"
				}, {
					entityType: "logpushDestinationExists"
				}, {
					entityType: "logpushDestinationValidation"
				}, {
					entityType: "logpushSentOwnershipToken"
				}, {
					entityType: "logpushOwnershipValidation"
				}, {
					entityType: "logpushFieldsAll"
				}, {
					entityType: "logpushFieldsDefault"
				}, {
					entityType: "staticRoute"
				}, {
					entityType: "staticRoutes",
					to: "staticRoute"
				}, {
					entityType: "membership",
					to: "memberships"
				}, {
					entityType: "memberships",
					nestedProps: {
						account: "accounts"
					}
				}, {
					entityType: "monitor"
				}, {
					entityType: "monitors",
					to: "monitor"
				}, {
					entityType: "mTlsHosts"
				}, {
					entityType: "nel"
				}, {
					entityType: "normalizationSetting"
				}, {
					entityType: "schemaValidationV2"
				}, {
					entityType: "paymentMethod"
				}, {
					entityType: "paymentMethods",
					to: "paymentMethod"
				}, {
					entityType: "pool",
					nestedProps: {
						monitor: "monitor"
					}
				}, {
					entityType: "pools",
					to: "pool"
				}, {
					entityType: "prefixDelegation"
				}, {
					entityType: "prefixDelegations",
					to: "prefixDelegation"
				}, {
					entityType: "prefixServices",
					idProp: "prefix_id"
				}, {
					entityType: "onboardingGuide"
				}, {
					entityType: "organization"
				}, {
					entityType: "originCertificate"
				}, {
					entityType: "originCertificates",
					to: "originCertificate"
				}, {
					entityType: "pageRule"
				}, {
					entityType: "pageRules",
					to: "pageRule"
				}, {
					entityType: "purgeCache"
				}, {
					entityType: "sanitizeRuleset"
				}, {
					entityType: "sanitizeRulesetOverrides"
				}, {
					entityType: "sanitizeRulesets",
					to: "sanitizeRuleset"
				}, {
					entityType: "serviceToken"
				}, {
					entityType: "serviceTokens",
					to: "serviceToken"
				}, {
					entityType: "shortLivedCertificate"
				}, {
					entityType: "shortLivedCertificates",
					to: "shortLivedCertificate"
				}, {
					entityType: "shareStats"
				}, {
					entityType: "spectrumApp"
				}, {
					entityType: "spectrumApps",
					to: "spectrumApp"
				}, {
					entityType: "sslRecommenderPreference"
				}, {
					entityType: "sslRecommendation"
				}, {
					entityType: "totalTLSSettings"
				}, {
					entityType: "certificatePacksByHosts"
				}, {
					entityType: "customHostnamesByHosts"
				}, {
					entityType: "synProtectionRule"
				}, {
					entityType: "synProtectionRules",
					to: "synProtectionRule"
				}, {
					entityType: "synProtectionFilter"
				}, {
					entityType: "synProtectionFilters",
					to: "synProtectionFilter"
				}, {
					entityType: "tcpFlowProtectionRule"
				}, {
					entityType: "tcpFlowProtectionRules",
					to: "tcpFlowProtectionRule"
				}, {
					entityType: "tcpProtectionFilter"
				}, {
					entityType: "tcpProtectionFilters",
					to: "tcpProtectionFilter"
				}, {
					entityType: "dnsProtectionRule"
				}, {
					entityType: "dnsProtectionRules",
					to: "dnsProtectionRule"
				}, {
					entityType: "user",
					nestedProps: {
						organizations: "userOrganization"
					}
				}, {
					entityType: "userOrganization"
				}, {
					entityType: "userAgentRule"
				}, {
					entityType: "userAgentRules",
					to: "userAgentRule"
				}, {
					entityType: "userSessions"
				}, {
					entityType: "regionalHostname",
					idProp: "hostname"
				}, {
					entityType: "regionalHostnames",
					to: "regionalHostname"
				}, {
					entityType: "revokeSession"
				}, {
					entityType: "securityKey"
				}, {
					entityType: "securityKeys"
				}, {
					entityType: "rateLimit"
				}, {
					entityType: "rateLimits",
					to: "rateLimit"
				}, {
					entityType: "auditLogs"
				}, {
					entityType: "userCommPreferences"
				}, {
					entityType: "userDetails"
				}, {
					entityType: "userGroup"
				}, {
					entityType: "userGroupMembers"
				}, {
					entityType: "workerRoutes"
				}, {
					entityType: "zone"
				}, {
					entityType: "singleZone",
					to: "zone"
				}, {
					entityType: "zoneSubscription"
				}, {
					entityType: "recheckNameservers"
				}, {
					entityType: "abuseUrls"
				}, {
					entityType: "zoneHold"
				}, {
					entityType: "abuseReview"
				}, {
					entityType: "zones",
					to: "zone"
				}, {
					entityType: "zonesRoot",
					to: "zone"
				}, {
					entityType: "zonesAccount",
					to: "zone"
				}, {
					entityType: "zoneMarketingCampaigns"
				}, {
					entityType: "zoneRuleset"
				}, {
					entityType: "zoneRulesets"
				}, {
					entityType: "zoneRulesetsEnabled"
				}, {
					entityType: "zoneRulesetDLPOverride",
					to: "zoneRuleset"
				}, {
					entityType: "zoneRulesetOverride",
					to: "zoneRuleset"
				}, {
					entityType: "zoneMasters"
				}, {
					entityType: "zoneUiConfig"
				}, {
					entityType: "zoneLockdown"
				}, {
					entityType: "zoneLockdowns",
					to: "zoneLockdown"
				}, {
					entityType: "argoGeoAnalytics"
				}, {
					entityType: "argoGlobalAnalytics"
				}, {
					entityType: "dnsAnalyticsTopNxDomainRecords"
				}, {
					entityType: "dnsAnalyticsTopRecords"
				}, {
					entityType: "dnsAnalyticsTSByRecordType"
				}, {
					entityType: "dnsAnalyticsTSByResponseCode"
				}, {
					entityType: "geographyDnsAnalyticsNoErrorPerColo"
				}, {
					entityType: "geographyDnsAnalyticsNxDomainPerColo"
				}, {
					entityType: "geographyDnsAnalyticsPerColo"
				}, {
					entityType: "geographyHttpAnalytics"
				}, {
					entityType: "h2Prioritization"
				}, {
					entityType: "speedBrain"
				}, {
					entityType: "firstPartyFonts"
				}, {
					entityType: "imageResizing"
				}, {
					entityType: "rateLimitingAnalytics"
				}, {
					entityType: "rulesets"
				}, {
					entityType: "rum"
				}, {
					entityType: "rumRule"
				}, {
					entityType: "rumRuleset"
				}, {
					entityType: "rumSiteTag"
				}, {
					entityType: "rumRedirectToOnboarding"
				}, {
					entityType: "rumSiteInfo"
				}, {
					entityType: "rumSiteInfoList"
				}, {
					entityType: "rumSiteInfoTagList"
				}, {
					entityType: "rumSiteInfoZoneList"
				}, {
					entityType: "rumFeature"
				}, {
					entityType: "performanceHttpAnalytics"
				}, {
					entityType: "csamScanner"
				}, {
					entityType: "csamScannerThirdParty"
				}, {
					entityType: "alwaysOnline"
				}, {
					entityType: "coveoCategoryResults"
				}, {
					entityType: "phoneSupportTwoFactor"
				}, {
					entityType: "supportOpenTickets"
				}, {
					entityType: "knownIssueTickets"
				}, {
					entityType: "ticket"
				}, {
					entityType: "phoneSupportOTP"
				}, {
					entityType: "helperbotDiagnostics"
				}, {
					entityType: "chinaNetwork"
				}, {
					entityType: "automaticPlatformOptimization"
				}, {
					entityType: "pageShieldScript"
				}, {
					entityType: "pageShieldScripts",
					to: "pageShieldScript"
				}, {
					entityType: "pageShieldConnection"
				}, {
					entityType: "pageShieldConnections",
					to: "pageShieldConnection"
				}, {
					entityType: "pageShieldPolicy"
				}, {
					entityType: "pageShieldPolicies",
					to: "pageShieldPolicy"
				}, {
					entityType: "securityHttpAnalytics"
				}, {
					entityType: "speedTesting"
				}, {
					entityType: "webhook"
				}, {
					entityType: "webhooks",
					to: "webhook"
				}, {
					entityType: o.D.route
				}, {
					entityType: o.D.routes,
					to: o.D.route
				}, {
					entityType: "domainGroup"
				}, {
					entityType: "domainGroups",
					to: "domainGroup"
				}, {
					entityType: "domainGroupsAllDomain"
				}, {
					entityType: "domainGroupManagerZones",
					to: "zone"
				}, {
					entityType: "domainGroupFormZones",
					to: "zone"
				}, {
					entityType: "granularResources"
				}, {
					entityType: "HTTPApplicationVersion"
				}, {
					entityType: "HTTPApplicationVersions",
					to: "HTTPApplicationVersion"
				}, {
					entityType: "HTTPApplication",
					nestedProps: {
						versions: "HTTPApplicationVersions"
					}
				}, {
					entityType: "HTTPApplications",
					to: "HTTPApplication"
				}, {
					entityType: "HTTPApplicationConvertedId"
				}, {
					entityType: "WAFMigrationStatus"
				}, {
					entityType: "HTTPApplicationsRuleset"
				}, {
					entityType: "HTTPApplicationsRule"
				}, {
					entityType: "inviteMembersSearchZones",
					to: "zone"
				}, {
					entityType: "inviteMembersZones",
					to: "zone"
				}, {
					entityType: "waitingRoom"
				}, {
					entityType: "waitingRooms",
					to: "waitingRoom"
				}, {
					entityType: "waitingRoomEvent"
				}, {
					entityType: "waitingRoomEvents",
					to: "waitingRoomEvent"
				}, {
					entityType: "zoneVersion"
				}, {
					entityType: "zoneVersionCompare"
				}, {
					entityType: "zoneVersions",
					to: "zoneVersion"
				}, {
					entityType: "zoneApplication",
					nestedProps: {
						versions: "zoneVersions"
					}
				}, {
					entityType: "zoneApplications",
					to: "zoneApplication"
				}, {
					entityType: "WAFMigrationStatus"
				}, {
					entityType: "environments"
				}, {
					entityType: "tenants"
				}, {
					entityType: "accountTypes"
				}, {
					entityType: "permissionGroups"
				}, {
					entityType: "zoneLevelAccessPolicy"
				}, {
					entityType: "zoneLevelAccessPolicies",
					to: "zoneLevelAccessPolicy"
				}, {
					entityType: "oAuthConsentApp"
				}, {
					entityType: "oAuthConsentApps",
					to: "oAuthConsentApp"
				}, {
					entityType: "wafPackages"
				}, {
					entityType: "wafPackageGroup"
				}, {
					entityType: "wafPackageGroups",
					to: "wafPackageGroup"
				}, {
					entityType: "wafRule"
				}, {
					entityType: "wafRules",
					to: "wafRule"
				}, {
					entityType: "web3Hostname"
				}, {
					entityType: "web3Hostnames",
					to: "web3Hostname"
				}, {
					entityType: "web3Blocklist"
				}, {
					entityType: "web3Blocklists",
					to: "web3Blocklist"
				}, {
					entityType: "zaraz"
				}, {
					entityType: s.BB.catchAllRule,
					idProp: "tag"
				}, {
					entityType: s.BB.rule,
					idProp: "tag"
				}, {
					entityType: s.BB.rules,
					to: s.BB.rule
				}, {
					entityType: s.BB.dstAddress,
					idProp: "tag"
				}, {
					entityType: s.BB.dstAddresses,
					to: s.BB.dstAddress
				}, {
					entityType: s.BB.dnsRecord,
					idProp: "tag"
				}, {
					entityType: s.BB.dnsRecords,
					to: s.BB.dnsRecord
				}, {
					entityType: s.BB.zone,
					idProp: "tag"
				}]),
				u = r => r.entities,
				E = (...r) => (0, d.P1)(a, u, ...r),
				n = (0, d.QB)(a)
		},
		"../react/app/redux/utils.ts": function(W, v, t) {
			"use strict";
			t.d(v, {
				F: function() {
					return s
				},
				_: function() {
					return o
				}
			});
			var e = t("../react/app/redux/makeAction.js");
			const o = d => (l, m, a) => (0, e.SC)(l, m, a, {
					hideErrorAlert: !0
				}).catch(d),
				s = d => l => {
					if (l.status === d) return l;
					throw l
				}
		},
		"../react/common/actionTypes.ts": function(W, v, t) {
			"use strict";
			t.d(v, {
				Cm: function() {
					return m
				},
				Cz: function() {
					return o
				},
				HI: function() {
					return a
				},
				Li: function() {
					return E
				},
				Ng: function() {
					return e
				},
				Np: function() {
					return s
				},
				Yc: function() {
					return r
				},
				gM: function() {
					return d
				},
				lV: function() {
					return l
				},
				s1: function() {
					return u
				}
			});
			const e = "NOTIFICATION_OPEN",
				o = "NOTIFICATION_CLOSE",
				s = "MODAL_OPEN",
				d = "MODAL_CLOSE",
				l = "TOGGLE_ON",
				m = "TOGGLE_OFF",
				a = "SET_ACTIVE",
				u = "CLEAR_ACTIVE",
				E = "UPDATE_ACCOUNT_ACCESS",
				n = "UPDATE_LANGUAGE_PREFERENCE";
			let r = function(i) {
				return i.APIKEY = "APIKEY_CAPTCHA_CHALLENGE", i.APITOKEN = "APITOKEN_CAPTCHA_CHALLENGE", i.BILLING_PRE_VERIFICATION = "BILLING_PRE_CC_VERIFICATION_CAPTCHA_CHALLENGE", i.DELETE_USER = "DELETE_USER_CAPTCHA_CHALLENGE", i.EMAIL_ROLLBACK = "EMAIL_ROLLBACK_CAPTCHA_CHALLENGE", i.FORGOT_PASS = "FORGOT_PASS_CAPTCHA_CHALLENGE", i.LOGIN = "LOGIN_CAPTCHA_CHALLENGE", i.ORIGIN_CA_KEY = "ORIGIN_CA_KEY_CHALLENGE", i.SIGNUP = "SIGNUP_CAPTCHA_CHALLENGE", i
			}({})
		},
		"../react/common/actions/membershipActions.ts": function(W, v, t) {
			"use strict";
			t.d(v, {
				AX: function() {
					return i
				},
				YT: function() {
					return E
				},
				ct: function() {
					return a
				},
				d6: function() {
					return n
				},
				kt: function() {
					return r
				}
			});
			var e = t("../react/app/redux/makeActionCreator.ts"),
				o = t("../react/common/constants/index.ts");

			function s(p) {
				for (var c = 1; c < arguments.length; c++) {
					var _ = arguments[c] != null ? Object(arguments[c]) : {},
						y = Object.keys(_);
					typeof Object.getOwnPropertySymbols == "function" && y.push.apply(y, Object.getOwnPropertySymbols(_).filter(function(T) {
						return Object.getOwnPropertyDescriptor(_, T).enumerable
					})), y.forEach(function(T) {
						d(p, T, _[T])
					})
				}
				return p
			}

			function d(p, c, _) {
				return c = l(c), c in p ? Object.defineProperty(p, c, {
					value: _,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : p[c] = _, p
			}

			function l(p) {
				var c = m(p, "string");
				return typeof c == "symbol" ? c : String(c)
			}

			function m(p, c) {
				if (typeof p != "object" || p === null) return p;
				var _ = p[Symbol.toPrimitive];
				if (_ !== void 0) {
					var y = _.call(p, c || "default");
					if (typeof y != "object") return y;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (c === "string" ? String : Number)(p)
			}
			const a = p => {
					const c = p.payload.map(_ => s({}, _, {
						membershipId: _.id,
						id: _.account.id
					}));
					return s({}, p, {
						payload: c
					})
				},
				u = p => {
					const c = a(p);
					return Array.isArray(c.payload) ? s({}, p, {
						payload: c.payload[0]
					}) : s({}, p, {
						payload: null
					})
				},
				E = (0, e.C)("memberships").get`/memberships?no-permissions=1`.on("success", a),
				n = (0, e.C)("memberships").delete`/memberships/${"id"}`,
				r = (...p) => ({
					type: o.UM.MEMBERSHIPS_ROOT_REQUESTED,
					entityType: "filteredMemberships",
					url: "/memberships?no-permissions=1",
					params: p
				}),
				i = (0, e.C)("membership").get`/memberships?no-permissions=1`.on("success", u)
		},
		"../react/common/actions/modalActions.ts": function(W, v, t) {
			"use strict";
			t.r(v), t.d(v, {
				closeModal: function() {
					return d
				},
				openModal: function() {
					return s
				}
			});
			var e = t("../react/common/actionTypes.ts");
			const o = {
				replace: !0
			};

			function s(l, m, a = o) {
				return {
					type: e.Np,
					payload: {
						ModalComponent: l,
						props: m
					},
					options: a
				}
			}

			function d(l) {
				return {
					type: e.gM,
					payload: {
						ModalComponent: l
					}
				}
			}
		},
		"../react/common/actions/notificationsActions.ts": function(W, v, t) {
			"use strict";
			t.r(v), t.d(v, {
				add: function() {
					return l
				},
				error: function() {
					return E
				},
				info: function() {
					return a
				},
				success: function() {
					return m
				},
				warn: function() {
					return u
				}
			});
			var e = t("../react/common/actionTypes.ts");

			function o(n) {
				return {
					type: e.Ng,
					notification: n
				}
			}

			function s(n) {
				return {
					type: e.Cz,
					notificationId: n
				}
			}
			let d = 0;

			function l(n, r, i = {}) {
				return i = i || {},
					function(p) {
						let c = d++,
							_ = {
								id: c,
								type: n,
								message: r,
								delay: i.delay,
								persist: i.persist === void 0 ? !1 : i.persist,
								closable: i.closable === void 0 ? !0 : i.closable,
								onClose() {
									p(s(c)), i.onClose && i.onClose.apply(null, arguments)
								}
							};
						p(o(_))
					}
			}

			function m(n, r) {
				return l("success", n, r)
			}

			function a(n, r) {
				return l("info", n, r)
			}

			function u(n, r) {
				return l("warning", n, r)
			}

			function E(n, r) {
				return l("error", n, r)
			}
		},
		"../react/common/actions/userActions.ts": function(W, v, t) {
			"use strict";
			t.d(v, {
				BT: function() {
					return a
				},
				Ut: function() {
					return T
				},
				V_: function() {
					return O
				},
				Y9: function() {
					return _
				},
				Z0: function() {
					return S
				},
				mp: function() {
					return y
				},
				r3: function() {
					return h
				},
				x0: function() {
					return n
				}
			});
			var e = t("../react/app/redux/makeActionCreator.ts"),
				o = t("../react/app/redux/utils.ts");

			function s(g) {
				for (var C = 1; C < arguments.length; C++) {
					var M = arguments[C] != null ? Object(arguments[C]) : {},
						b = Object.keys(M);
					typeof Object.getOwnPropertySymbols == "function" && b.push.apply(b, Object.getOwnPropertySymbols(M).filter(function(R) {
						return Object.getOwnPropertyDescriptor(M, R).enumerable
					})), b.forEach(function(R) {
						d(g, R, M[R])
					})
				}
				return g
			}

			function d(g, C, M) {
				return C = l(C), C in g ? Object.defineProperty(g, C, {
					value: M,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : g[C] = M, g
			}

			function l(g) {
				var C = m(g, "string");
				return typeof C == "symbol" ? C : String(C)
			}

			function m(g, C) {
				if (typeof g != "object" || g === null) return g;
				var M = g[Symbol.toPrimitive];
				if (M !== void 0) {
					var b = M.call(g, C || "default");
					if (typeof b != "object") return b;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (C === "string" ? String : Number)(g)
			}
			const a = (0, e.C)("user").get`/user`,
				u = (0, e.C)("user").patch`/user`,
				E = (0, e.C)("user").post`/user/create`,
				n = (0, e.C)("user").put`/user/password`,
				r = (0, e.C)("user").post`/user/two_factor_authentication`,
				i = (0, e.C)("user").put`/user/two_factor_authentication`,
				p = (0, e.C)("user").delete`/user/two_factor_authentication`,
				c = (0, e.C)("user").put`/user/email`;

			function _(...g) {
				return c(...g)
			}
			const y = (0, e.C)("userCommPreferences").get`/user/communication_preferences`,
				T = (0, e.C)("userCommPreferences").get`/user/communication_preferences`.apiFetch((0, o._)(g => s({}, g, {
					body: s({}, g.body, {
						result: {}
					})
				}))),
				O = (0, e.C)("userCommPreferences").put`/user/communication_preferences`,
				h = (0, e.C)("userDetails").get`/user/details`,
				S = (0, e.C)("userDetails").get`/user/details/two-factor-recovery`
		},
		"../react/common/components/AccessCheck/AccessCheck.tsx": function(W, v, t) {
			"use strict";
			var e = t("../react/common/components/AccessCheck/useAccessCheck.ts"),
				o = t("../react/utils/zoneLevelAccess.ts");
			const s = ({
				legacyPermission: d,
				canAccess: l,
				children: m,
				render: a
			}) => {
				const u = !!(0, o.P)();
				let E;
				typeof l == "boolean" && l !== void 0 && u ? E = {
					read: l,
					list: l,
					create: l,
					update: l,
					delete: l,
					sign: l
				} : E = (0, e.Z)(d);
				const n = a || m;
				return n ? n(E) : null
			};
			v.Z = s
		},
		"../react/common/components/AccessCheck/constants.ts": function(W, v, t) {
			"use strict";
			t.d(v, {
				L8: function() {
					return n
				},
				W9: function() {
					return E
				},
				ZZ: function() {
					return m
				},
				j: function() {
					return r
				},
				jX: function() {
					return a
				},
				my: function() {
					return u
				},
				u1: function() {
					return e
				},
				zs: function() {
					return l
				}
			});
			const e = "com.cloudflare.api.account",
				o = "com.cloudflare.api.account.",
				s = "com.cloudflare.edge.",
				d = "com.cloudflare.api.account.zone.",
				l = ["com.cloudflare.api.app.manage"];
			let m = function(i) {
				return i.read = "read", i.list = "list", i.create = "create", i.update = "update", i.delete = "delete", i.sign = "sign", i.refresh = "refresh", i
			}({});
			const a = (i, p) => `${o}${i?i+".":""}${p}`,
				u = (i, p) => `${d}${i?i+".":""}${p}`,
				E = (i, p) => `${s}${i}.${p}`,
				n = (i = "") => `${o}${i}`,
				r = (i = "") => `${d}${i}`
		},
		"../react/common/components/AccessCheck/index.ts": function(W, v, t) {
			"use strict";
			t.d(v, {
				L8: function() {
					return d.L8
				},
				W9: function() {
					return d.W9
				},
				WL: function() {
					return s.WL
				},
				ZP: function() {
					return o.Z
				},
				ZZ: function() {
					return d.ZZ
				},
				hT: function() {
					return s.hT
				},
				j: function() {
					return d.j
				},
				jX: function() {
					return d.jX
				},
				my: function() {
					return d.my
				},
				xk: function() {
					return e.Z
				},
				zs: function() {
					return d.zs
				}
			});
			var e = t("../react/common/components/AccessCheck/useAccessCheck.ts"),
				o = t("../react/common/components/AccessCheck/AccessCheck.tsx"),
				s = t("../react/common/components/AccessCheck/useAccessResolver.ts"),
				d = t("../react/common/components/AccessCheck/constants.ts")
		},
		"../react/common/components/AccessCheck/useAccessCheck.ts": function(W, v, t) {
			"use strict";
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t.n(e),
				s = t("../react/app/redux/index.ts"),
				d = t("../react/common/selectors/accountSelectors.ts"),
				l = t("../react/pages/zone-versioning/selectors.ts");

			function m(a) {
				const {
					read: u,
					edit: E
				} = (0, s.p4)(d.Yj)(a);
				let n = E;
				if (a != "zone_versioning") {
					const i = (0, s.p4)(l.G);
					(i == null ? void 0 : i.isLocked) && (n = !1)
				}
				return (0, e.useMemo)(() => ({
					read: u,
					list: u,
					create: n,
					update: n,
					delete: n,
					sign: n
				}), [u, n])
			}
			v.Z = m
		},
		"../react/common/components/AccessCheck/useAccessResolver.ts": function(W, v, t) {
			"use strict";
			t.d(v, {
				WL: function() {
					return i
				},
				hT: function() {
					return _
				}
			});
			var e = t("../../../../node_modules/lodash-es/set.js"),
				o = t("../react/common/selectors/accountSelectors.ts"),
				s = t("../react/pages/home/members/utils.ts"),
				d = t("../react/common/components/AccessCheck/constants.ts"),
				l = t("../react/pages/zone-versioning/selectors.ts");
			const m = {
					allow: "allow",
					deny: "deny"
				},
				a = 0,
				u = 1,
				E = 2,
				n = 3;

			function r(C, M, b, R) {
				let A = {
						read: !1,
						update: !1,
						create: !1,
						delete: !1,
						list: !1,
						sign: !1,
						refresh: !1
					},
					L;
				for (L in A) A[L] = i(C, `${M}.${L}`, b, R);
				return A
			}

			function i(C, M, b, R) {
				var A;
				if (p(M) && !c(M)) {
					const Q = (0, l.G)(C);
					if (Q == null ? void 0 : Q.isLocked) return !1
				}
				const L = (A = (0, o.D0)(C)) === null || A === void 0 ? void 0 : A.id,
					P = L ? [`com.cloudflare.api.account.${L}`] : void 0,
					H = (0, s.vq)(L);
				return !!y(C, H, M, b, R || P)
			}

			function p(C) {
				return ![d.ZZ.read, d.ZZ.list].some(M => C.endsWith(M))
			}

			function c(C) {
				return C.includes("zone.versioning")
			}

			function _(C) {
				const M = (0, o.Ko)(C);
				let b = !1;
				return M == null || M.forEach(R => {
					R.access === m.allow && R.permission_groups.forEach(A => {
						var L;
						(A == null || (L = A.meta) === null || L === void 0 ? void 0 : L.scopes) === d.u1 && (b = !0)
					})
				}), b
			}

			function y(C, M, b, R, A) {
				const L = (0, o.Ko)(C),
					P = {};
				L == null || L.forEach(pe => {
					var te;
					const Y = pe.access;
					let ie = a;
					if (b && pe.permission_groups.forEach(Z => {
							var j, $;
							M == null || (j = M.find(F => F.id === Z.id)) === null || j === void 0 || ($ = j.permissions) === null || $ === void 0 || $.forEach(F => {
								ie = Math.max(ie, T(F, b))
							})
						}), ie !== a && !!R) {
						let Z = a;
						pe.resource_groups.forEach(j => {
							Z = Math.max(Z, h(j.scope, R, A))
						}), ie = Z === a ? Z : ie + Z
					}(P == null || (te = P[Y]) === null || te === void 0 ? void 0 : te[ie]) || (0, e.Z)(P, [Y, ie], []), P[Y][ie].push(pe)
				});
				const H = P[m.allow] && Object.keys(P[m.allow]).map(pe => parseInt(pe)),
					K = P[m.deny] && Object.keys(P[m.deny]).map(pe => parseInt(pe)),
					Q = Math.max.apply(Math, H);
				return Q === a || Math.max.apply(Math, K) >= Q ? null : P[m.allow][Q]
			}

			function T(C, M) {
				if (C.key === M || O(C.key, M)) return n;
				for (const b of (C == null ? void 0 : C.implies) || []) {
					let R = T(b, M);
					if (R > a) return R
				}
				return a
			}

			function O(C, M) {
				const b = M == null ? void 0 : M.lastIndexOf(".");
				return b === -1 ? !1 : (M == null ? void 0 : M.substring(0, b)) + ".*" === C
			}

			function h(C, M, b) {
				var R;
				let A = a;
				if (C == null || (R = C.objects) === null || R === void 0 || R.forEach(L => {
						A = Math.max(A, g(L, M))
					}), A === a) return A;
				if (C.key !== "*") switch (!0) {
					case S(C.key, b) > a:
					case (!(b == null ? void 0 : b.length) && A === n):
						break;
					case (A === u && S(C.key, [M]) > a):
						A = S(C.key, [M]);
						break;
					default:
						return a
				}
				for (const L of C.subset_of || [])
					if (S(L.key, b) === a) return a;
				return A
			}

			function S(C, M = []) {
				for (const b of M || []) {
					if (C === b) return n;
					if (O(C, b)) return E
				}
				return a
			}

			function g(C, M) {
				return C.key === M ? n : C.key === "*" ? u : O(C.key, M) ? E : a
			}
		},
		"../react/common/components/AccessControl/SAAConnect.js": function(W, v, t) {
			"use strict";
			t.d(v, {
				a: function() {
					return d
				}
			});
			var e = t("webpack/sharing/consume/default/react-redux/react-redux"),
				o = t.n(e),
				s = t("../react/common/selectors/accountSelectors.ts");
			const d = m => {
					if (typeof m != "string") throw new Error("invalid Param Type provided");
					const a = m.slice(1).split(":");
					if (a.length !== 2) throw new Error("invalid Param Type provided");
					return {
						key: a[0],
						value: a[1]
					}
				},
				l = (m, a) => {
					const {
						resourceId: u,
						accountId: E,
						legacyPermission: n
					} = a;
					let {
						read: r,
						edit: i
					} = a;
					const p = {};
					n && (i = `#${n}:edit`, r = `#${n}:read`);
					const c = u || E;
					if (r) {
						const _ = Array.isArray(r) ? r : [r];
						p.isReadable = _.some(y => {
							const T = d(y);
							return (0, s.DT)(m, c, O => !!(O[T.key] && O[T.key][T.value]))
						})
					}
					if (i) {
						const _ = Array.isArray(i) ? i : [i];
						p.isEditable = _.some(y => {
							const T = d(y);
							return (0, s.DT)(m, c, O => !!(O[T.key] && O[T.key][T.value]))
						})
					}
					return p
				};
			v.Z = (0, e.connect)(l)
		},
		"../react/common/components/AccessControl/index.js": function(W, v, t) {
			"use strict";
			var e = t("../../../../node_modules/prop-types/index.js"),
				o = t.n(e),
				s = t("../react/app/HoCs/withEntities.tsx"),
				d = t("../react/common/components/AccessControl/SAAConnect.js");

			function l(r) {
				for (var i = 1; i < arguments.length; i++) {
					var p = arguments[i] != null ? Object(arguments[i]) : {},
						c = Object.keys(p);
					typeof Object.getOwnPropertySymbols == "function" && c.push.apply(c, Object.getOwnPropertySymbols(p).filter(function(_) {
						return Object.getOwnPropertyDescriptor(p, _).enumerable
					})), c.forEach(function(_) {
						m(r, _, p[_])
					})
				}
				return r
			}

			function m(r, i, p) {
				return i = a(i), i in r ? Object.defineProperty(r, i, {
					value: p,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : r[i] = p, r
			}

			function a(r) {
				var i = u(r, "string");
				return typeof i == "symbol" ? i : String(i)
			}

			function u(r, i) {
				if (typeof r != "object" || r === null) return r;
				var p = r[Symbol.toPrimitive];
				if (p !== void 0) {
					var c = p.call(r, i || "default");
					if (typeof c != "object") return c;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (i === "string" ? String : Number)(r)
			}

			function E(r) {
				const p = ["isReadable", "isEditable"].reduce((c, _) => r.hasOwnProperty(_) ? l({}, c, {
					[_]: r[_]
				}) : c, {});
				return r.children(p)
			}
			E.propTypes = {
				resourceType: o().string,
				resourceId: o().string,
				read: o().oneOfType([o().string, o().array]),
				edit: o().oneOfType([o().string, o().array]),
				accountId: o().string,
				isReadable: o().bool,
				isEditable: o().bool,
				children: o().func
			};
			const n = (0, s.Z)((0, d.Z)(E));
			n.displayName = "AccessControl", v.Z = n
		},
		"../react/common/components/Apple/utils.tsx": function(W, v, t) {
			"use strict";
			t.d(v, {
				PP: function() {
					return r
				},
				RJ: function() {
					return a
				},
				tz: function() {
					return i
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				o = t.n(e),
				s = t("../../../../node_modules/@cloudflare/util-cache/es/index.js"),
				d = t("../react/pages/onboarding/components/AppleLogin/constants.ts"),
				l = t("../../../../node_modules/@cloudflare/style-const/es/index.js");
			const m = () => u.test(window.location.pathname) || s.E.has(d.Qq),
				a = () => s.E.get(d.Qq),
				u = /^\/login\/apple(\/)?/,
				n = [u, /^\/[a-zA-Z0-9]+\/registrar\/register\/checkout$/, /^\/$/, /^\/email-verification-info(\/)?/],
				r = () => {
					let p = !1;
					n.forEach(_ => {
						if (_.test(window.location.pathname)) {
							p = !0;
							return
						}
					});
					const c = m() && p;
					return c && (0, l.C8)(l.LF.OFF), c
				},
				i = p => {
					p && o().sendEvent("launch icloud registrar onboarding", {
						category: "icloud registrar",
						method: "iCloud SSO"
					});
					let c = "https://oidc.iam.cfapi.net/api/v1/sso/init?client=apple&env=production";
					p && (c = c + `&jwt=${p}`), window.location.href = c
				}
		},
		"../react/common/components/ButtonWithDropdown.tsx": function(W, v, t) {
			"use strict";
			t.d(v, {
				oG: function() {
					return c
				},
				sN: function() {
					return u.sN
				},
				v2: function() {
					return u.v2
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t.n(e),
				s = t("../node_modules/@cloudflare/component-button/es/index.js"),
				d = t("../../../../node_modules/@cloudflare/component-icon/es/index.js"),
				l = t("webpack/sharing/consume/default/@cloudflare/intl-react/@cloudflare/intl-react"),
				m = t.n(l),
				a = t("../../../../node_modules/@cloudflare/style-container/es/index.js"),
				u = t("../react/common/components/Dropdown/index.tsx"),
				E = t("../../../../node_modules/@cloudflare/style-const/es/index.js");

			function n() {
				return n = Object.assign ? Object.assign.bind() : function(_) {
					for (var y = 1; y < arguments.length; y++) {
						var T = arguments[y];
						for (var O in T) Object.prototype.hasOwnProperty.call(T, O) && (_[O] = T[O])
					}
					return _
				}, n.apply(this, arguments)
			}

			function r(_, y) {
				if (_ == null) return {};
				var T = i(_, y),
					O, h;
				if (Object.getOwnPropertySymbols) {
					var S = Object.getOwnPropertySymbols(_);
					for (h = 0; h < S.length; h++) O = S[h], !(y.indexOf(O) >= 0) && (!Object.prototype.propertyIsEnumerable.call(_, O) || (T[O] = _[O]))
				}
				return T
			}

			function i(_, y) {
				if (_ == null) return {};
				var T = {},
					O = Object.keys(_),
					h, S;
				for (S = 0; S < O.length; S++) h = O[S], !(y.indexOf(h) >= 0) && (T[h] = _[h]);
				return T
			}
			const p = (0, a.createStyledComponent)(({
				theme: _
			}) => ({
				display: "inline-flex",
				"& > button:first-child": {
					borderRadius: `${_.radii[2]}px 0 0 ${_.radii[2]}px`,
					borderRight: `1px solid ${_.colors.gray[8]}`
				},
				"& > :last-child": {
					display: "flex"
				},
				"& > :last-child > button": {
					borderRadius: `0 ${_.radii[2]}px ${_.radii[2]}px 0`,
					paddingRight: _.space[2],
					paddingLeft: _.space[2]
				},
				"& button": {
					color: (0, E.Yc)() ? _.colors.text : void 0
				},
				"& button:hover": {
					color: (0, E.Yc)() ? _.colors.text : void 0
				}
			}));

			function c(_) {
				let {
					menu: y,
					containerProps: T,
					disabled: O,
					disabledDropdown: h = O
				} = _, S = r(_, ["menu", "containerProps", "disabled", "disabledDropdown"]);
				const {
					t: g
				} = (0, l.useI18n)();
				return o().createElement(p, n({}, T, {
					role: "group"
				}), o().createElement(s.zx, n({}, S, {
					disabled: O
				})), o().createElement(u.Lt, {
					trigger: o().createElement(s.zx, {
						type: S.type,
						"aria-haspopup": "menu",
						disabled: h
					}, o().createElement(d.J, {
						type: "caret-down",
						label: g("common.more"),
						size: 12
					})),
					menu: y
				}))
			}
		},
		"../react/common/components/Dropdown/Menu.tsx": function(W, v, t) {
			"use strict";
			t.d(v, {
				v: function() {
					return a
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t.n(e),
				s = t("../node_modules/@cloudflare/elements/es/index.js"),
				d = t("../../../../node_modules/@cloudflare/style-const/es/index.js"),
				l = t("../react/common/hooks/useIntersectionObserver.ts");

			function m() {
				return m = Object.assign ? Object.assign.bind() : function(u) {
					for (var E = 1; E < arguments.length; E++) {
						var n = arguments[E];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (u[r] = n[r])
					}
					return u
				}, m.apply(this, arguments)
			}

			function a(u) {
				const E = (0, e.useRef)(null),
					[n, r] = (0, e.useState)(!1);
				(0, e.useLayoutEffect)(() => {
					const p = E.current;
					if (p) {
						const {
							bottom: c
						} = p.getBoundingClientRect();
						c > window.innerHeight && r(!0)
					}
				}, []);
				const i = (0, l.S)(p => {
					for (const c of p) c.intersectionRatio < 1 && r(!0)
				}, {
					threshold: [0, 1]
				});
				return (0, e.useEffect)(() => {
					const p = E.current;
					if (p && i) return i.observe(p), () => {
						i.unobserve(p)
					}
				}, [i]), o().createElement(s.ZC, m({
					role: "menu",
					innerRef: E,
					position: "absolute",
					right: "0",
					backgroundColor: d.rS.colors.background,
					p: 1,
					color: "gray.4",
					border: "1px solid",
					borderColor: "gray.8",
					boxShadow: "rgba(0, 0, 0, 0.025) -1px 2px 1px 1px, rgba(0, 0, 0, 0.05) -3px 3px 7px 0px",
					borderRadius: 2,
					textAlign: "left",
					whiteSpace: "nowrap",
					overflow: "hidden"
				}, n ? {
					bottom: "100%",
					mb: "2px"
				} : {
					top: "100%",
					mt: "2px"
				}, {
					zIndex: 1e3,
					minWidth: 170
				}, u))
			}
		},
		"../react/common/components/Dropdown/MenuItem.tsx": function(W, v, t) {
			"use strict";
			t.d(v, {
				s: function() {
					return y
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t.n(e),
				s = t("../../../../node_modules/@cloudflare/style-container/es/index.js"),
				d = t("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				l = t.n(d);

			function m() {
				return m = Object.assign ? Object.assign.bind() : function(T) {
					for (var O = 1; O < arguments.length; O++) {
						var h = arguments[O];
						for (var S in h) Object.prototype.hasOwnProperty.call(h, S) && (T[S] = h[S])
					}
					return T
				}, m.apply(this, arguments)
			}

			function a(T, O) {
				if (T == null) return {};
				var h = u(T, O),
					S, g;
				if (Object.getOwnPropertySymbols) {
					var C = Object.getOwnPropertySymbols(T);
					for (g = 0; g < C.length; g++) S = C[g], !(O.indexOf(S) >= 0) && (!Object.prototype.propertyIsEnumerable.call(T, S) || (h[S] = T[S]))
				}
				return h
			}

			function u(T, O) {
				if (T == null) return {};
				var h = {},
					S = Object.keys(T),
					g, C;
				for (C = 0; C < S.length; C++) g = S[C], !(O.indexOf(g) >= 0) && (h[g] = T[g]);
				return h
			}

			function E(T) {
				for (var O = 1; O < arguments.length; O++) {
					var h = arguments[O] != null ? Object(arguments[O]) : {},
						S = Object.keys(h);
					typeof Object.getOwnPropertySymbols == "function" && S.push.apply(S, Object.getOwnPropertySymbols(h).filter(function(g) {
						return Object.getOwnPropertyDescriptor(h, g).enumerable
					})), S.forEach(function(g) {
						n(T, g, h[g])
					})
				}
				return T
			}

			function n(T, O, h) {
				return O = r(O), O in T ? Object.defineProperty(T, O, {
					value: h,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : T[O] = h, T
			}

			function r(T) {
				var O = i(T, "string");
				return typeof O == "symbol" ? O : String(O)
			}

			function i(T, O) {
				if (typeof T != "object" || T === null) return T;
				var h = T[Symbol.toPrimitive];
				if (h !== void 0) {
					var S = h.call(T, O || "default");
					if (typeof S != "object") return S;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (O === "string" ? String : Number)(T)
			}
			const p = ({
					theme: T
				}) => {
					const O = {
						cursor: "pointer",
						background: T.colors.gray[9],
						color: T.colors.gray[0]
					};
					return {
						display: "block",
						width: "100%",
						padding: T.space[2],
						background: T.colors.background,
						color: T.colors.gray[3],
						fontSize: T.fontSizes[2],
						userSelect: "none",
						textDecoration: "none",
						textAlign: "left",
						borderRadius: "1px",
						'&:hover:not(:disabled):not([aria-disabled="true"])': O,
						'&:focus-within:not(:disabled):not([aria-disabled="true"])': E({}, O, {
							boxShadow: "none",
							borderRadius: 0
						}),
						'&:is(:disabled, [aria-disabled="true"])': {
							color: T.colors.gray[6],
							cursor: "not-allowed",
							opacity: .5
						}
					}
				},
				c = (0, s.createComponent)(p, "a"),
				_ = (0, s.createComponent)(p, "button");

			function y(T) {
				let {
					disabled: O = !1
				} = T, h = a(T, ["disabled"]);
				const S = (0, d.useHistory)(),
					g = {
						role: "menuitem"
					};
				if ("href" in h && typeof h.href == "string") return o().createElement(c, m({
					"aria-disabled": O
				}, g, h, {
					href: O ? void 0 : h.href,
					onClick: M => {
						var b;
						if (O) return M.stopPropagation();
						M.preventDefault(), (b = h.onClick) === null || b === void 0 || b.call(h, M), S.push(h.href)
					}
				}));
				var C;
				return o().createElement(_, m({
					type: (C = h.type) !== null && C !== void 0 ? C : "button"
				}, g, h, {
					disabled: O
				}))
			}
		},
		"../react/common/components/EmptyPage.jsx": function(W, v, t) {
			"use strict";
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t.n(e),
				s = t("../../../../node_modules/prop-types/index.js"),
				d = t.n(s),
				l = t("../../../../node_modules/@cloudflare/component-box/es/index.js");
			const m = ({
				children: a
			}) => o().createElement(l.xu, {
				height: 411
			}, a);
			m.propTypes = {
				children: d().node
			}, v.Z = m
		},
		"../react/common/components/ModalManager.tsx": function(W, v, t) {
			"use strict";
			t.d(v, {
				ZP: function() {
					return c
				},
				dd: function() {
					return i
				},
				vR: function() {
					return r
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t.n(e),
				s = t("webpack/sharing/consume/default/react-redux/react-redux");
			const d = _ => _.application.modals;
			var l = t("../react/common/actions/modalActions.ts"),
				m = t("../../../../node_modules/swr/core/dist/index.mjs"),
				a = t("../react/pages/zoneless-workers/utils/swrConfig.ts");

			function u() {
				return u = Object.assign ? Object.assign.bind() : function(_) {
					for (var y = 1; y < arguments.length; y++) {
						var T = arguments[y];
						for (var O in T) Object.prototype.hasOwnProperty.call(T, O) && (_[O] = T[O])
					}
					return _
				}, u.apply(this, arguments)
			}
			const E = o().createContext(null);
			class n extends o().Component {
				render() {
					const {
						modals: y,
						closeModal: T
					} = this.props;
					return o().createElement(o().Fragment, null, y.map(({
						ModalComponent: O,
						props: h = {},
						id: S
					}) => {
						const g = () => {
							typeof h.onClose == "function" && h.onClose(), T(O)
						};
						return o().createElement(E.Provider, {
							key: S,
							value: {
								closeModal: g
							}
						}, o().createElement(m.J$, {
							value: a.ZP
						}, o().createElement(O, u({}, h, {
							isOpen: !0,
							closeModal: g
						}))))
					}))
				}
			}

			function r() {
				const _ = o().useContext(E);
				if (!_) throw new Error("useModalContext must be used within a ModalContext");
				return _
			}

			function i() {
				const _ = (0, s.useDispatch)();
				return {
					openModal: (0, e.useCallback)(function(...y) {
						return _(l.openModal(...y))
					}, [_]),
					closeModal: (0, e.useCallback)(function(...y) {
						return _(l.closeModal(...y))
					}, [_])
				}
			}
			var c = (0, s.connect)(_ => ({
				modals: d(_)
			}), l)(n)
		},
		"../react/common/components/analytics/AnalyticsReport/constants.ts": function(W, v, t) {
			"use strict";
			t.d(v, {
				BQ: function() {
					return n
				},
				Gn: function() {
					return u
				},
				JR: function() {
					return E
				},
				Wl: function() {
					return e
				},
				YX: function() {
					return m
				},
				ZI: function() {
					return l
				},
				if: function() {
					return o
				},
				q6: function() {
					return s
				},
				w_: function() {
					return d
				},
				zl: function() {
					return a
				}
			});
			const e = "YYYY.MM.DD-HHmm",
				o = "time-window",
				s = "date-from",
				d = "date-to",
				l = "from",
				m = "to",
				a = "all",
				u = {
					equals: "eq",
					notEquals: "neq",
					greaterThanOrEqual: "geq",
					greaterThan: "gt",
					lessThan: "lt",
					lessThanOrEqual: "leq",
					like: "like",
					notLike: "notlike",
					has: "has",
					notHas: "nothas",
					hasAll: "hasall",
					hasAny: "hasany",
					contains: "contains",
					startsWith: "starts",
					endsWith: "ends",
					notContains: "!contains",
					notStartsWith: "!starts",
					notEndsWith: "!ends",
					in: "in",
					notIn: "!in"
				};
			let E = function(r) {
					return r.ADD_FILTER = "Add filter", r.EDIT_FILTER = "Edit filter", r.REMOVE_FILTER = "Remove filter", r.CHANGE_TIME = "Change time window", r.FEED_PAGE_FORWARD = "Activity feed next page", r.FEED_PAGE_BACKWARD = "Activity feed previous page", r.FEED_EXPAND_EVENT = "Activity feed expand event", r.FEED_CLOSE_EVENT = "Activity feed close event", r.FEED_EXPAND_MATCHES = "Activity feed expand matches", r.OPEN_DOWNLOAD_MODAL = "Activity feed open download modal", r.CANCEL_DOWNLOAD_MODAL = "Activity feed cancel download modal", r.DOWNLOAD_FROM_DOWNLOAD_MODAL = "Activity feed download from modal", r.DOWNLOAD_FEED = "Activity feed download", r.CLICK_ADAPTIVE_SAMPLING = 'Click on "adaptive sampling"', r.CLICK_TO_LOG_EXPLORER_DESCRIPTION = 'Click on "Go to Log Explorer" in the description', r.CLICK_TO_LOG_EXPLORER_BANNER = 'Click on "Go to Log Explorer" in the banner"', r.CLICK_SWITCH_TO_RAW_LOGS = 'Click on "Switch to raw logs"', r.CLICK_SWITCH_TO_SAMPLED_LOGS = 'Click on "Switch back to sampled logs"', r
				}({}),
				n = function(r) {
					return r.TIMESERIES = "Timeseries Chart", r.DISTRIBUTION = "Source Distribution Chart", r.TOP_N = "Top N", r.FILTER_BAR = "Filter Bar", r.SCORES_DISTRIBUTIONS = "Scores Distributions", r.INSIGHTS = "Insights", r.RL_HISTOGRAM = "Rate Limit Histogram", r
				}({})
		},
		"../react/common/components/filter-editor/constants/userJourney.ts": function(W, v, t) {
			"use strict";
			t.d(v, {
				v: function() {
					return e
				}
			});
			let e = function(o) {
				return o.FIELD = "change field", o.OPERATOR = "change operator", o
			}({})
		},
		"../react/common/constants/analytics/botScoreSrc.ts": function(W, v, t) {
			"use strict";
			t.d(v, {
				EG: function() {
					return s
				},
				Me: function() {
					return m
				},
				Vv: function() {
					return l
				},
				sk: function() {
					return d
				}
			});
			var e = t("../../../common/component/component-filter-bar/src/index.js"),
				o = t("../react/common/components/analytics/AnalyticsReport/constants.ts");
			let s = function(a) {
				return a.NOT_COMPUTED = "not_computed", a.MACHINE_LEARNING = "machine_learning", a.HEURISTICS = "heuristics", a.BEHAVIORAL_ANALYSIS = "behavioral_analysis", a.JS_FINGERPRINTING = "js_fingerprinting", a.VERIFIED_BOT = "verified_bot", a.CLOUDFLARE_SERVICE = "cloudflare_service", a
			}({});
			const d = {
					[s.NOT_COMPUTED]: "Not Computed",
					[s.MACHINE_LEARNING]: "Machine Learning",
					[s.HEURISTICS]: "Heuristics",
					[s.BEHAVIORAL_ANALYSIS]: "Behavioral Analysis",
					[s.JS_FINGERPRINTING]: "JS Fingerprinting",
					[s.VERIFIED_BOT]: "Verified Bot",
					[s.CLOUDFLARE_SERVICE]: "Cloudflare Service"
				},
				l = a => Array.isArray(a) ? a.map(u => {
					var E;
					return (E = d[u]) !== null && E !== void 0 ? E : u
				}) : d[a],
				m = {
					label: "analytics.http.filters.labels.botScoreSrcName",
					type: e.kE.select,
					operators: [o.Gn.equals, o.Gn.notEquals, o.Gn.in, o.Gn.notIn],
					options: [s.NOT_COMPUTED, s.MACHINE_LEARNING, s.HEURISTICS, s.BEHAVIORAL_ANALYSIS, s.JS_FINGERPRINTING, s.VERIFIED_BOT, s.CLOUDFLARE_SERVICE],
					urlParam: "bot-score-source",
					rawLogField: "BotScoreSrc"
				}
		},
		"../react/common/constants/billing/index.ts": function(W, v, t) {
			"use strict";
			t.d(v, {
				Gq: function() {
					return d
				},
				g$: function() {
					return s
				},
				WX: function() {
					return e
				},
				E0: function() {
					return E
				},
				Hw: function() {
					return m
				},
				Ed: function() {
					return l
				},
				bi: function() {
					return o
				},
				Gs: function() {
					return p
				},
				hQ: function() {
					return a
				},
				SP: function() {
					return u
				}
			});
			let e = function(c) {
				return c.page_rules = "page_rules", c.automatic_platform_optimization = "automatic_platform_optimization", c
			}({});
			const o = "page_rules",
				s = "automatic_platform_optimization",
				d = {
					price: 5,
					currency: "USD",
					frequency: "monthly",
					requests_included: 0,
					volume_included: 1,
					ubb_frequency: 1,
					ubb_price: .1,
					ubb_unit: "gigabyte"
				},
				l = {
					address: "Address Line 1 NA",
					city: "City NA",
					state: "State NA",
					vat: " ",
					account_type: "-"
				},
				m = {
					currency: "USD",
					frequency: "monthly",
					requests_included: 5e5,
					ubb_price: .5,
					ubb_frequency: 5e5
				},
				a = {
					price: 0,
					currency: "USD",
					frequency: "monthly",
					requests_included: 1e4,
					ubb_frequency: 1e4,
					ubb_price: .05
				},
				u = {
					price: 0,
					currency: "USD",
					frequency: "monthly",
					requests_included: 0,
					ubb_frequency: 1e3,
					ubb_storage_price: 5,
					ubb_streaming_price: 1,
					ubb_unit: "minute"
				},
				E = {
					price: 0,
					currency: "USD",
					frequency: "monthly",
					ubb_unit: "image",
					ubb_delivery_price: 1,
					ubb_frequency_delivery: 1e5,
					ubb_storage_price: 5,
					ubb_storage_frequency: 1e5,
					ubb_transformations_frequency: 2e3,
					ubb_transformations_price: 1
				};
			var n = t("../react/common/constants/billing/tax.ts"),
				r = t("../react/common/constants/billing/tracking.ts"),
				i = t("../react/common/constants/billing/workers.ts");
			const p = ["free", "lite", "pro", "pro_plus", "business", "enterprise"]
		},
		"../react/common/constants/billing/tracking.ts": function(W, v, t) {
			"use strict";
			t.d(v, {
				FP: function() {
					return e
				},
				Nl: function() {
					return l
				},
				SO: function() {
					return s
				},
				aA: function() {
					return o
				}
			});
			const e = {
					NOTIFICATION_CLICK: "Notification link click",
					CANCELED_SUBSCRIPTION: "Canceled subscription"
				},
				o = {
					NOTIFICATIONS: "notifications",
					SUBSCRIPTIONS: "subscriptions"
				},
				s = {
					BILLING: "billing"
				},
				d = {
					LINK: "link",
					EMAIL: "email",
					PHONE: "phone"
				},
				l = {
					BILLING_SYSTEM_UPGRADE: "Billing System Upgrade"
				}
		},
		"../react/common/constants/constants.ts": function(W, v, t) {
			"use strict";
			t.d(v, {
				Dk: function() {
					return p
				},
				Dy: function() {
					return c
				},
				E_: function() {
					return m
				},
				Lv: function() {
					return _
				},
				S4: function() {
					return l
				},
				UM: function() {
					return n
				},
				Xf: function() {
					return E
				},
				Y1: function() {
					return a
				},
				p6: function() {
					return u
				},
				q0: function() {
					return d
				},
				rg: function() {
					return y
				},
				sJ: function() {
					return i
				}
			});
			var e = t("../../../../node_modules/seamless-immutable/seamless-immutable.production.min.js"),
				o = t.n(e),
				s = t("../../../../node_modules/@cloudflare/util-cache/es/index.js");
			const d = "healthy",
				l = "degraded",
				m = "critical",
				a = "unknown",
				u = "not-monitored",
				E = o().from({
					FREE: "free",
					PRO: "pro",
					BIZ: "business",
					ENT: "enterprise"
				}),
				n = {
					ZONES_ROOT_REQUESTED: "zones_root_requested",
					ZONES_ACCOUNT_REQUESTED: "zones_account_requested",
					ZONES_HEADER_REQUESTED: "zones_header_requested",
					MEMBERSHIPS_ROOT_REQUESTED: "membership_root_requested",
					ACCOUNT_MEMBERS_REQUESTED: "account_members_requested"
				},
				r = {
					f: E.FREE,
					p: E.PRO,
					b: E.BIZ
				},
				i = "marketing-pt",
				p = () => {
					const O = s.Z.get(i);
					if (!!O) return r[O]
				},
				c = ["gov"],
				_ = ["graphql_api_v2.enabled_network_analytics_magic_transit", "graphql_api_v2.enabled_network_analytics_spectrum", "graphql_api_v2.enabled_network_analytics_cdn"],
				y = "banner-notification-interactions",
				T = null
		},
		"../react/common/constants/index.ts": function(W, v, t) {
			"use strict";
			t.d(v, {
				Dk: function() {
					return e.Dk
				},
				Dy: function() {
					return e.Dy
				},
				E0: function() {
					return o.E0
				},
				E_: function() {
					return e.E_
				},
				PLANS: function() {
					return e.Xf
				},
				S4: function() {
					return e.S4
				},
				UM: function() {
					return e.UM
				},
				WX: function() {
					return o.WX
				},
				Y1: function() {
					return e.Y1
				},
				bi: function() {
					return o.bi
				},
				g$: function() {
					return o.g$
				},
				p6: function() {
					return e.p6
				},
				q0: function() {
					return e.q0
				},
				rg: function() {
					return e.rg
				},
				sJ: function() {
					return e.sJ
				}
			});
			var e = t("../react/common/constants/constants.ts"),
				o = t("../react/common/constants/billing/index.ts")
		},
		"../react/common/constants/roles.ts": function(W, v, t) {
			"use strict";
			t.d(v, {
				V: function() {
					return e
				}
			});
			let e = function(o) {
				return o.SUPER_ADMINISTRATOR_ALL_PRIVILEGES = "Super Administrator - All Privileges", o.CLOUDFLARE_ACCESS = "Cloudflare Access", o.CLOUDFLARE_ACCESS_APP_ADMIN = "Cloudflare Access App Admin", o.CLOUDFLARE_ACCESS_IDENTITY_PROVIDER_ADMIN = "Cloudflare Access Identity Provider Admin", o.ADMINISTRATOR = "Administrator", o.ADMINISTRATOR_READ_ONLY = "Administrator Read Only", o.ANALYTICS = "Analytics", o.API_GATEWAY = "API Gateway", o.API_GATEWAY_READ = "API Gateway Read", o.AUDIT_LOGS_VIEWER = "Audit Logs Viewer", o.BILLING = "Billing", o.BOT_MANAGEMENT = "Bot Management", o.BOT_MANAGEMENT_ACCOUNT_WIDE = "Bot Management (Account-Wide)", o.CACHE_DOMAIN_PURGE = "Cache Domain Purge", o.CACHE_PURGE = "Cache Purge", o.SSL_TLS_CACHING_PERFORMANCE_PAGE_RULES_AND_CUSTOMIZATION = "SSL/TLS, Caching, Performance, Page Rules, and Customization", o.EMAIL_CONFIGURATION_ADMIN = "Email Configuration Admin", o.EMAIL_INTEGRATION_ADMIN = "Email Integration Admin", o.EMAIL_SECURITY_ANALYST = "Email Security Analyst", o.EMAIL_SECURITY_READONLY = "Email Security Readonly", o.EMAIL_SECURITY_REPORTING = "Email Security Reporting", o.CLOUDFORCE_ONE_ADMIN = "Cloudforce One Admin", o.CLOUDFORCE_ONE_READ = "Cloudforce One Read", o.DNS = "DNS", o.DOMAIN_ADMINISTRATOR = "Domain Administrator", o.DOMAIN_ADMINISTRATOR_READ_ONLY = "Domain Administrator Read Only", o.DOMAIN_API_GATEWAY = "Domain API Gateway", o.DOMAIN_API_GATEWAY_READ = "Domain API Gateway Read", o.DOMAIN_DNS = "Domain DNS", o.DOMAIN_PAGE_SHIELD = "Domain Page Shield", o.DOMAIN_PAGE_SHIELD_READ = "Domain Page Shield Read", o.MAGIC_NETWORK_MONITORING_ADMIN = "Magic Network Monitoring Admin", o.MAGIC_NETWORK_MONITORING = "Magic Network Monitoring", o.MAGIC_NETWORK_MONITORING_READ_ONLY = "Magic Network Monitoring Read-Only", o.CLOUDFLARE_GATEWAY = "Cloudflare Gateway", o.CLOUDFLARE_WORKER_ADMIN = "Cloudflare Worker Admin", o.HTTP_APPLICATIONS = "HTTP Applications", o.HTTP_APPLICATIONS_READ = "HTTP Applications Read", o.CLOUDFLARE_IMAGES = "Cloudflare Images", o.LOAD_BALANCER = "Load Balancer", o.LOG_SHARE = "Log Share", o.NETWORK_SERVICES_WRITE_MAGIC = "Network Services Write (Magic)", o.NETWORK_SERVICES_READ_MAGIC = "Network Services Read (Magic)", o.MINIMAL_ACCOUNT_ACCESS = "Minimal Account Access", o.PAGE_SHIELD = "Page Shield", o.PAGE_SHIELD_READ = "Page Shield Read", o.HYPERDRIVE_ADMIN = "Hyperdrive Admin", o.HYPERDRIVE_READONLY = "Hyperdrive Readonly", o.CLOUDFLARE_R2_ADMIN = "Cloudflare R2 Admin", o.CLOUDFLARE_R2_READ = "Cloudflare R2 Read", o.LOG_SHARE_READER = "Log Share Reader", o.CLOUDFLARE_SNIPPETS_ADMIN = "Cloudflare Snippets Admin", o.CLOUDFLARE_STREAM = "Cloudflare Stream", o.CLOUDFLARE_ZERO_TRUST = "Cloudflare Zero Trust", o.CLOUDFLARE_DEX = "Cloudflare DEX", o.CLOUDFLARE_ZERO_TRUST_PII = "Cloudflare Zero Trust PII", o.CLOUDFLARE_ZERO_TRUST_READ_ONLY = "Cloudflare Zero Trust Read Only", o.CLOUDFLARE_ZERO_TRUST_REPORTING = "Cloudflare Zero Trust Reporting", o.TRANSFORM_RULES = "Transform Rules", o.TRUST_AND_SAFETY = "Trust and Safety", o.TURNSTILE = "Turnstile", o.TURNSTILE_READ = "Turnstile Read", o.VECTORIZE_ADMIN = "Vectorize Admin", o.VECTORIZE_READONLY = "Vectorize Readonly", o.FIREWALL = "Firewall", o.WAITING_ROOM_ADMIN = "Waiting Room Admin", o.WAITING_ROOM_READ = "Waiting Room Read", o.WORKERS_ADMIN = "Workers Admin", o.ZARAZ_ADMIN = "Zaraz Admin", o.ZARAZ_EDIT = "Zaraz Edit", o.ZARAZ_READONLY = "Zaraz Readonly", o.ZONE_VERSIONING = "Zone Versioning", o.ZONE_VERSIONING_ACCOUNT_WIDE = "Zone Versioning (Account-Wide)", o.ZONE_VERSIONING_READ = "Zone Versioning Read", o.ZONE_VERSIONING_READ_ACCOUNT_WIDE = "Zone Versioning Read (Account-Wide)", o.DOMAIN_WAITING_ROOM_ADMIN = "Domain Waiting Room Admin", o.DOMAIN_WAITING_ROOM_READ = "Domain Waiting Room Read", o.BRAND_PROTECTION = "Brand Protection", o
			}({})
		},
		"../react/common/hooks/rulesets/resources/tracking.tsx": function(W, v, t) {
			"use strict";
			t.d(v, {
				QK: function() {
					return e
				},
				dy: function() {
					return o
				},
				sO: function() {
					return s
				},
				x4: function() {
					return d
				}
			});
			let e = function(l) {
				return l.DELETE = "delete", l.CREATE = "create", l.GET = "get", l.UPDATE = "update", l
			}({});
			const o = {
					http_config_settings: "configuration",
					http_request_dynamic_redirect: "redirect",
					http_request_cache_settings: "cache",
					http_request_origin: "origin",
					http_request_late_transform: "modify request header",
					http_request_transform: "rewrite url",
					http_response_headers_transform: "modify response header",
					http_response_compression: "compression",
					http_ratelimit: "rate limiting",
					http_request_firewall_custom: "custom",
					http_request_firewall_managed: "managed"
				},
				s = (l, m, a = !1) => {
					var u;
					return `${m} ${(u=o[l])!==null&&u!==void 0?u:l} ${a?"ruleset":"rule"}${m===e.GET?"s":""}`
				},
				d = () => {
					var l;
					return (l = Object.keys(o).reduce((m, a) => {
						const u = Object.values(e).reduce((E, n) => (E.push(s(a, n)), E.push(s(a, n, !0)), E), []);
						return m.concat(u)
					}, [])) === null || l === void 0 ? void 0 : l.flat()
				}
		},
		"../react/common/hooks/suspenseHelpers.ts": function(W, v, t) {
			"use strict";
			t.d(v, {
				bt: function() {
					return a
				},
				nW: function() {
					return l
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t.n(e),
				s = t("../../../../node_modules/@cloudflare/component-listener/es/index.js");
			const d = "suspenseComplete";

			function l() {
				(0, e.useEffect)(() => () => {
					window.dispatchEvent(new Event(d))
				}, [])
			}

			function m(u) {
				(0, s.OR)(d, () => {
					window.setTimeout(u, 0)
				}, {
					target: window
				})
			}

			function a(...u) {
				const [E, n] = u;
				o().useLayoutEffect(E, n), m(E)
			}
		},
		"../react/common/hooks/useAccountEntitlement.ts": function(W, v, t) {
			"use strict";
			var e = t("../react/app/redux/index.ts"),
				o = t("../react/common/selectors/entitlementsSelectors.ts");

			function s(d) {
				return (0, e.p4)(l => (0, o.BF)(l, d))
			}
			v.Z = s
		},
		"../react/common/hooks/useAccountId.ts": function(W, v, t) {
			"use strict";
			t.d(v, {
				F: function() {
					return l
				}
			});
			var e = t("../react/app/redux/index.ts"),
				o = t("../react/common/selectors/accountSelectors.ts"),
				s = t("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				d = t.n(s);

			function l() {
				var m;
				const {
					accountId: a
				} = (0, s.useParams)(), u = (0, e.p4)(o.D0);
				if (a === void 0 && !u) throw new Error("Account ID not found in URL params");
				return (m = a) !== null && m !== void 0 ? m : u == null ? void 0 : u.id
			}
		},
		"../react/common/hooks/useCachedState.ts": function(W, v, t) {
			"use strict";
			t.d(v, {
				j: function() {
					return d
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t.n(e),
				s = t("../../../../node_modules/@cloudflare/util-cache/es/index.js");

			function d(l, {
				key: m,
				cache: a = s.E,
				ttl: u
			} = {}) {
				var E;
				const n = m !== void 0 && a.get(m),
					[r, i] = (0, e.useState)((E = n) !== null && E !== void 0 ? E : l);
				return [r, c => {
					i(_ => (c instanceof Function && (c = c(_)), m !== void 0 && a.set(m, c, u), c))
				}]
			}
		},
		"../react/common/hooks/useGate.ts": function(W, v, t) {
			"use strict";
			var e = t("../../../../node_modules/@cloudflare/gates-react-redux/dist/index.mjs");

			function o(s) {
				return (0, e.qf)(s)
			}
			v.Z = o
		},
		"../react/common/hooks/useIntersectionObserver.ts": function(W, v, t) {
			"use strict";
			t.d(v, {
				S: function() {
					return s
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t.n(e);

			function s(d, {
				root: l,
				rootMargin: m,
				threshold: a
			} = {}) {
				const u = (0, e.useRef)(null);

				function E() {
					return u.current === null && (u.current = new IntersectionObserver(d, {
						root: l,
						rootMargin: m,
						threshold: a
					})), u.current
				}
				return (0, e.useEffect)(() => (u.current = new IntersectionObserver(d, {
					root: l,
					rootMargin: m,
					threshold: a
				}), () => {
					var n;
					(n = u.current) === null || n === void 0 || n.disconnect()
				}), [d, l, m, a]), E()
			}
		},
		"../react/common/hooks/usePrevious.ts": function(W, v, t) {
			"use strict";
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t.n(e);

			function s(d) {
				const l = (0, e.useRef)(d);
				return (0, e.useEffect)(() => {
					l.current = d
				}, [d]), l.current
			}
			v.Z = s
		},
		"../react/common/hooks/useZoneEntitlement.ts": function(W, v, t) {
			"use strict";
			var e = t("../react/app/redux/index.ts"),
				o = t("../react/common/selectors/entitlementsSelectors.ts");

			function s(d) {
				return (0, e.p4)(l => (0, o.rV)(l, d))
			}
			v.Z = s
		},
		"../react/common/middleware/sparrow/errors.ts": function(W, v, t) {
			"use strict";
			t.d(v, {
				Uh: function() {
					return l
				},
				ez: function() {
					return d
				},
				oV: function() {
					return m
				}
			});

			function e(a, u, E) {
				return u = o(u), u in a ? Object.defineProperty(a, u, {
					value: E,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : a[u] = E, a
			}

			function o(a) {
				var u = s(a, "string");
				return typeof u == "symbol" ? u : String(u)
			}

			function s(a, u) {
				if (typeof a != "object" || a === null) return a;
				var E = a[Symbol.toPrimitive];
				if (E !== void 0) {
					var n = E.call(a, u || "default");
					if (typeof n != "object") return n;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (u === "string" ? String : Number)(a)
			}
			class d extends Error {
				constructor(u, E) {
					super(E);
					e(this, "eventName", void 0), this.eventName = u, this.name = "SparrowValidationError"
				}
			}
			class l extends d {
				constructor(u) {
					super(u, `Event not allowed: "${u}"`);
					this.name = "SparrowEventNotAllowedError"
				}
			}
			class m extends d {
				constructor(u, E) {
					super(u, `Found invalid properties on event: "${u}"`);
					e(this, "invalidProperties", void 0), this.name = "SparrowInvalidPropertiesError", this.invalidProperties = E
				}
			}
		},
		"../react/common/selectors/accountSelectors.ts": function(W, v, t) {
			"use strict";
			t.d(v, {
				AC: function() {
					return Oe
				},
				Au: function() {
					return ce
				},
				B: function() {
					return se
				},
				B3: function() {
					return Pe
				},
				BG: function() {
					return b
				},
				Bp: function() {
					return Qe
				},
				CV: function() {
					return gt
				},
				D0: function() {
					return S
				},
				DT: function() {
					return x
				},
				EL: function() {
					return oe
				},
				EU: function() {
					return ee
				},
				GE: function() {
					return pt
				},
				Ko: function() {
					return I
				},
				Kx: function() {
					return L
				},
				Le: function() {
					return P
				},
				O4: function() {
					return Be
				},
				Ou: function() {
					return j
				},
				Py: function() {
					return Ue
				},
				QI: function() {
					return at
				},
				RO: function() {
					return Ke
				},
				T3: function() {
					return Ye
				},
				T8: function() {
					return M
				},
				UX: function() {
					return X
				},
				VP: function() {
					return ot
				},
				Xo: function() {
					return We
				},
				Xu: function() {
					return Y
				},
				Yi: function() {
					return mt
				},
				Yj: function() {
					return B
				},
				Zu: function() {
					return Ee
				},
				bC: function() {
					return de
				},
				f8: function() {
					return Q
				},
				hI: function() {
					return it
				},
				hN: function() {
					return A
				},
				hX: function() {
					return z
				},
				iq: function() {
					return me
				},
				nE: function() {
					return R
				},
				oD: function() {
					return F
				},
				oI: function() {
					return K
				},
				oJ: function() {
					return V
				},
				tM: function() {
					return $
				},
				uF: function() {
					return ie
				},
				ut: function() {
					return Fe
				},
				vU: function() {
					return st
				},
				wQ: function() {
					return ke
				}
			});
			var e = t("../../../../node_modules/lodash-es/memoize.js"),
				o = t("../../../../node_modules/lodash/get.js"),
				s = t.n(o),
				d = t("../../../../node_modules/seamless-immutable/seamless-immutable.production.min.js"),
				l = t.n(d),
				m = t("../../../../node_modules/reselect/lib/index.js"),
				a = t("../../../../node_modules/moment/moment.js"),
				u = t.n(a),
				E = t("../react/common/utils/formatDate.ts"),
				n = t("../react/app/redux/normalizer.js"),
				r = t("../react/common/selectors/userSelectors.ts"),
				i = t("../react/common/selectors/entitlementsSelectors.ts"),
				p = t("../react/app/components/DeepLink/selectors.ts"),
				c = t("../react/common/constants/roles.ts"),
				_ = t("../react/common/utils/hasRole.ts");

			function y(G) {
				for (var ue = 1; ue < arguments.length; ue++) {
					var Te = arguments[ue] != null ? Object(arguments[ue]) : {},
						ne = Object.keys(Te);
					typeof Object.getOwnPropertySymbols == "function" && ne.push.apply(ne, Object.getOwnPropertySymbols(Te).filter(function(ae) {
						return Object.getOwnPropertyDescriptor(Te, ae).enumerable
					})), ne.forEach(function(ae) {
						T(G, ae, Te[ae])
					})
				}
				return G
			}

			function T(G, ue, Te) {
				return ue = O(ue), ue in G ? Object.defineProperty(G, ue, {
					value: Te,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : G[ue] = Te, G
			}

			function O(G) {
				var ue = h(G, "string");
				return typeof ue == "symbol" ? ue : String(ue)
			}

			function h(G, ue) {
				if (typeof G != "object" || G === null) return G;
				var Te = G[Symbol.toPrimitive];
				if (Te !== void 0) {
					var ne = Te.call(G, ue || "default");
					if (typeof ne != "object") return ne;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (ue === "string" ? String : Number)(G)
			}
			const S = G => {
					const ue = ie(G);
					return ue == null ? void 0 : ue.account
				},
				g = G => {
					const ue = (0, r.PR)(G);
					if (ue) {
						const Te = ue.id;
						return G.accountAccess[Te] || {}
					}
					return {}
				},
				C = G => G.accountsDetailed,
				M = (0, n.P1)("accountsDetailed", C),
				b = G => G.memberships,
				R = (0, m.P1)((0, n.P1)("memberships", b), p.U, (G, ue) => !!ue && !!G ? G.filter(Te => ue.includes(Te.id)) : G),
				A = G => G.accountFlags && G.accountFlags.data,
				L = G => G.accountFlags,
				P = (G, ue, Te) => {
					const ne = A(G);
					return !ne || !ne[ue] ? null : ne[ue][Te]
				},
				H = G => G.accountFlags.isRequesting,
				K = (G, ...ue) => s()(G, ["accountFlagsChanges", "data", ...ue]),
				Q = G => G.accountFlagsChanges.isRequesting,
				pe = (0, m.P1)(A, L, (G, ue) => ({
					data: G,
					meta: ue
				})),
				te = (G, ue, Te) => !!(isEnterpriseSSEnabledSelector(G) && P(G, ue, Te)),
				Y = G => G.membership,
				ie = (0, n.P1)("membership", Y),
				Z = (0, m.P1)(ie, Y, (G, ue) => ({
					data: G,
					meta: ue
				})),
				j = G => {
					const {
						roles: ue = []
					} = ie(G) || {};
					return Boolean(ue.find(Te => Te === "Super Administrator - All Privileges" || Te === "Billing"))
				},
				$ = G => {
					const ue = [c.V.SUPER_ADMINISTRATOR_ALL_PRIVILEGES];
					return (0, _.n)(G, ue)
				},
				F = G => {
					const ue = g(G),
						Te = Ae.getMemberships(G) ? l().asMutable(Ae.getMemberships(G)) : [];
					if (!!Te) return l().from(Te.map(ne => y({}, ne, {
						lastSeen: ue[ne.account.id] ? ue[ne.account.id].lastSeen : null
					})).sort((ne, ae) => ne.lastSeen && ae.lastSeen ? ae.lastSeen - ne.lastSeen : 0))
				},
				X = G => G.filteredMemberships,
				oe = (0, n.P1)("filteredMemberships", X),
				Ee = (0, m.P1)(ie, G => G == null ? void 0 : G.permissions),
				B = (0, m.P1)(Ee, G => (0, e.Z)(ue => {
					var Te;
					return (Te = G == null ? void 0 : G[ue]) !== null && Te !== void 0 ? Te : {
						read: !1,
						edit: !1
					}
				})),
				I = (0, m.P1)(ie, G => G == null ? void 0 : G.policies),
				x = (G, ue, Te) => {
					let ne = Ae.getMembership(G);
					if (!ne) {
						const ae = Ae.getMemberships(G);
						if (!ae || !ue) return !1;
						ne = ae.find(Ce => Ce.account.id === ue)
					}
					if (!ne || !Te) return !1;
					try {
						return Te(ne.permissions)
					} catch {
						return !1
					}
				},
				q = G => {
					var ue, Te;
					return (ue = (Te = S(G)) === null || Te === void 0 ? void 0 : Te.meta.has_pro_zones) !== null && ue !== void 0 ? ue : !1
				},
				ee = G => {
					var ue, Te;
					return (ue = (Te = S(G)) === null || Te === void 0 ? void 0 : Te.meta.has_business_zones) !== null && ue !== void 0 ? ue : !1
				},
				de = G => ee(G) || q(G),
				he = (G, ue) => {
					const Te = Se(G, ue);
					return !!Te && !!Te.enabled
				},
				Se = (G, ue) => {
					const Te = Ae.getMembership(G),
						ne = Te && Te.account;
					return ne && ne.legacy_flags && ne.legacy_flags[ue]
				},
				ke = G => he(G, "custom_pages"),
				je = G => !!G && G["webhooks.webhooks.enabled"],
				we = G => P(G, "bots", "enabled"),
				$e = G => P(G, "billing", "annual_subscriptions_enable"),
				Ke = G => G ? Boolean(P(G, "ConstellationAI", "v2_ui")) : !1,
				z = G => G ? Boolean(P(G, "ConstellationAI", "ai-emergency-waitlist")) : !1,
				se = G => G ? Boolean(P(G, "AIgateway", "enabled")) : !1,
				ge = G => Se(G, "enterprise_zone_quota"),
				N = G => {
					const ue = ge(G);
					return !ue || !ue.available ? -1 : ue.available
				},
				me = G => G.accountMembers,
				Pe = (0, n.P1)("accountMembers", me),
				Be = G => G.accountMember && G.accountMember.isRequesting,
				ze = G => G.accountRoles,
				Oe = (0, n.P1)("accountRoles", ze),
				Ue = (G, ue) => {
					const Te = Ae.getMemberships(G),
						ne = Te && Te.find(k => k.account.id === ue);
					if (ne) return ne.account.name.replace(" Account", " account");
					const ae = Ae.getMembership(G),
						Ce = ae && ae.account;
					return Ce && Ce.id === ue ? Ce.name : null
				},
				Fe = (G, ue) => {
					const Te = Ae.getMemberships(G),
						ne = Te && Te.find(k => k.account.id === ue);
					if (ne) return ne.account.settings.access_approval_expiry;
					const ae = Ae.getMembership(G),
						Ce = ae && ae.account;
					return Ce && Ce.id === ue ? Ce.settings.access_approval_expiry : null
				},
				We = (G, ue) => {
					const Te = Fe(G, ue);
					return Te ? u().utc(Te).isAfter() : !1
				},
				Ye = (G, ue, Te) => {
					const ne = Fe(G, ue);
					let ae = ne ? u().utc(ne) : null;
					return !ae || !ae.isAfter() ? "" : ae && ae.year() === 3e3 ? Te("account.access_approval.card_expiration_forever") : Te("account.access_approval.card_expiration_text", {
						expiryTimestamp: ae.local().format(E.U.DateTime)
					})
				},
				V = G => G && G.member && G.member.edit,
				ce = (G, ue) => {
					const Te = Ae.getMembership(G),
						ne = Te && Te.account;
					return ne ? ne.id !== ue : !1
				},
				fe = G => G.dpa,
				Me = (0, n.P1)("dpa", fe),
				Re = G => G.webhook,
				xe = G => G.webhooks,
				Ze = (0, n.P1)("webhook", xe),
				ot = G => G.accountLegoContract,
				lt = (0, n.P1)("accountLegoContract", ot),
				at = G => {
					const ue = lt(G);
					return (ue == null ? void 0 : ue.lego_state) ? ue.lego_state : ""
				},
				dt = G => at(G) === "signed",
				pt = G => ot(G).isRequesting,
				st = G => {
					const ue = lt(G);
					return ue && ue.subscription_type ? ue.subscription_type : ""
				},
				Ge = G => st(G) !== "",
				Ae = {
					getMembership: ie,
					getMemberships: R,
					getFilteredMemberships: oe,
					getAccountMembers: Pe,
					getAccountRoles: Oe
				},
				Qe = G => G.accountSingle,
				mt = (0, n.P1)("accountSingle", Qe),
				it = G => {
					const ue = [c.V.SUPER_ADMINISTRATOR_ALL_PRIVILEGES, c.V.ADMINISTRATOR];
					return (0, _.n)(G, ue)
				},
				gt = G => (0, _.n)(G, [c.V.BRAND_PROTECTION])
		},
		"../react/common/selectors/entitlementsSelectors.ts": function(W, v, t) {
			"use strict";
			t.d(v, {
				$f: function() {
					return c
				},
				AD: function() {
					return l
				},
				BF: function() {
					return p
				},
				Bs: function() {
					return S
				},
				Ci: function() {
					return Ee
				},
				DA: function() {
					return z
				},
				E6: function() {
					return i
				},
				Gy: function() {
					return we
				},
				Hq: function() {
					return je
				},
				Ms: function() {
					return M
				},
				Nb: function() {
					return ke
				},
				Pj: function() {
					return Ke
				},
				Q2: function() {
					return m
				},
				Qq: function() {
					return de
				},
				Td: function() {
					return O
				},
				Z: function() {
					return x
				},
				a: function() {
					return h
				},
				a5: function() {
					return ee
				},
				c7: function() {
					return he
				},
				du: function() {
					return u
				},
				ec: function() {
					return Q
				},
				f: function() {
					return Se
				},
				hL: function() {
					return q
				},
				ji: function() {
					return B
				},
				jo: function() {
					return b
				},
				l9: function() {
					return ge
				},
				lI: function() {
					return d
				},
				p1: function() {
					return y
				},
				pK: function() {
					return $e
				},
				pf: function() {
					return n
				},
				qR: function() {
					return T
				},
				rV: function() {
					return a
				},
				u1: function() {
					return E
				},
				w4: function() {
					return r
				},
				yD: function() {
					return I
				}
			});
			var e = t("../react/utils/url.ts");

			function o(N, me) {
				return N && N[me]
			}
			const s = N => !d(N).isRequesting;

			function d(N) {
				return N.entitlements.zone
			}

			function l(N) {
				return d(N).data
			}
			const m = N => {
				var me, Pe;
				return ((me = d(N).paginationData) === null || me === void 0 || (Pe = me.options) === null || Pe === void 0 ? void 0 : Pe.editedDate) || {}
			};

			function a(N, me) {
				const Pe = l(N);
				return Pe ? o(Pe, me) : void 0
			}
			const u = (N, me) => a(N, me) === !0;

			function E(N) {
				return N.entitlements.account
			}

			function n(N) {
				return E(N).data
			}
			const r = N => {
				var me, Pe;
				return ((me = E(N).paginationData) === null || me === void 0 || (Pe = me.options) === null || Pe === void 0 ? void 0 : Pe.editedDate) || {}
			};

			function i(N) {
				return !E(N).isRequesting
			}

			function p(N, me) {
				const Pe = n(N);
				return Pe ? o(Pe, me) : void 0
			}

			function c(N, me) {
				return p(N, me) === !0
			}

			function _(N, me) {
				return me.every(Pe => c(N, Pe))
			}

			function y(N) {
				return c(N, "contract.customer_enabled")
			}

			function T(N) {
				return c(N, "contract.self_service_allowed")
			}

			function O(N) {
				return c(N, "billing.partners_managed")
			}
			const h = N => y(N) && T(N),
				S = N => c(N, "enterprise.ecp_allowed");

			function g(N) {
				return C(N) || c(N, "argo.allow_smart_routing") || c(N, "argo.allow_tiered_caching") || c(N, "rate_limiting.enabled") || c(N, "ctm.enabled") || c(N, "workers.enabled") || c(N, "workers.kv_store.enabled") || c(N, "stream.enabled")
			}
			const C = N => u(N, "argo.allow_smart_routing") || u(N, "argo.allow_tiered_caching"),
				M = N => c(N, "zone.cname_setup_allowed") || c(N, "zone.partial_setup_allowed") || u(N, "zone.partial_setup_allowed"),
				b = N => c(N, "argo.allow_smart_routing") || u(N, "argo.allow_smart_routing"),
				R = N => c(N, "argo.allow_tiered_caching") || u(N, "argo.allow_tiered_caching"),
				A = N => b(N) || R(N),
				L = N => c(N, "ctm.enabled"),
				P = N => {
					const me = p(N, "ctm.load_balancers");
					return typeof me == "number" ? me : 0
				},
				H = N => {
					const me = p(N, "ctm.pools");
					return typeof me == "number" ? me : 0
				},
				K = N => {
					const me = p(N, "ctm.origins");
					return typeof me == "number" ? me : 0
				},
				Q = N => c(N, "workers.enabled"),
				pe = N => c(N, "stream.enabled"),
				te = N => {
					const me = p(N, "access.users_allowed");
					return typeof me == "number" ? me : 0
				},
				Y = N => te(N) > 0,
				ie = N => {
					const me = a(N, "dedicated_certificates");
					return typeof me == "number" ? me : 0
				},
				Z = N => ie(N) > 0,
				j = N => {
					const me = a(N, "rate_limiting.max_rules");
					return typeof me == "number" ? me : 0
				},
				$ = N => c(N, "rate_limiting.enabled"),
				F = N => {
					const me = a(N, "page_rules");
					return typeof me == "number" ? me : 0
				},
				X = N => F(N) > 0,
				oe = N => {
					const me = p(N, "dns_firewall.max_clusters_allowed");
					return typeof me == "number" ? me : 0
				},
				Ee = N => oe(N) > 0,
				B = N => u(N, "zone.advanced_certificate_manager") || c(N, "zone.advanced_certificate_manager"),
				I = N => a(N, "authoritative_dns.proxy_record_allowed") === !1 || p(N, "authoritative_dns.proxy_record_allowed") === !1,
				x = N => c(N, "authoritative_dns.outgoing_zone_transfers_allowed") === !0,
				q = N => a(N, "authoritative_dns.outgoing_zone_transfers_allowed") === !0,
				ee = N => {
					const me = a(N, "authoritative_dns.min_record_ttl_allowed");
					return typeof me == "number" && me > 1 ? me : 60
				},
				de = N => c(N, "foundation_dns.advanced_nameservers_allowed") || u(N, "foundation_dns.advanced_nameservers_allowed"),
				he = N => c(N, "account_custom_ns.allowed"),
				Se = (N, me) => ((0, e.el)(window.location.pathname) ? a : p)(N, me),
				ke = N => ((0, e.el)(window.location.pathname) ? l : n)(N),
				je = N => c(N, "authoritative_dns.multi_provider_allowed") || u(N, "authoritative_dns.multi_provider_allowed"),
				we = N => u(N, "authoritative_dns.cname_flattening_allowed"),
				$e = N => c(N, "secondary_dns.secondary_overrides") || u(N, "secondary_dns.secondary_overrides"),
				Ke = N => c(N, "authoritative_dns.custom_soa_allowed") || u(N, "authoritative_dns.custom_soa_allowed"),
				z = N => c(N, "authoritative_dns.custom_ns_ttl_allowed") || u(N, "authoritative_dns.custom_ns_ttl_allowed"),
				se = N => c(N, "secondary.create_zone"),
				ge = N => de(N) || he(N) || je(N) || se(N) || $e(N) || Ke(N) || z(N)
		},
		"../react/common/selectors/languagePreferenceSelector.ts": function(W, v, t) {
			"use strict";
			t.d(v, {
				r: function() {
					return l
				},
				v: function() {
					return m
				}
			});
			var e = t("../react/utils/i18n.ts"),
				o = t("../../../common/intl/intl-types/src/index.ts"),
				s = t("../../../../node_modules/@cloudflare/util-cache/es/index.js"),
				d = t("../react/utils/bootstrap.ts");
			const l = a => {
				if ((0, d.gm)()) return s.Z.set(e.ly, e.ZW), e.ZW;
				const u = a.userCommPreferences.data;
				if (u == null ? void 0 : u["language-locale"]) return (0, e.i_)(u["language-locale"]), u["language-locale"];
				{
					(0, e.Kd)() || (0, e.i_)(e.ZW);
					const E = (0, e.Kd)();
					return m(E) ? E : e.ZW
				}
			};

			function m(a) {
				const u = Object.keys(o.Q).find(E => o.Q[E] === a);
				return !!a && typeof a == "string" && u != null && (0, e.S8)(u)
			}
		},
		"../react/common/selectors/userSelectors.ts": function(W, v, t) {
			"use strict";
			t.d(v, {
				$8: function() {
					return l
				},
				BG: function() {
					return E
				},
				BY: function() {
					return h
				},
				GP: function() {
					return c
				},
				GU: function() {
					return S
				},
				PR: function() {
					return s
				},
				h$: function() {
					return T
				},
				h8: function() {
					return n
				},
				kk: function() {
					return y
				},
				l8: function() {
					return a
				},
				mV: function() {
					return _
				},
				vW: function() {
					return m
				}
			});
			var e = t("../react/app/redux/normalizer.js");
			const o = g => g.user,
				s = (0, e.P1)("user", o),
				d = g => {
					var C;
					return (C = s(g)) === null || C === void 0 ? void 0 : C.email.endsWith("@cloudflare.com")
				},
				l = g => {
					var C;
					return !!((C = s(g)) === null || C === void 0 ? void 0 : C.id)
				},
				m = g => {
					const C = s(g);
					if (!!C) return C.first_name && C.last_name ? `${C.first_name} ${C.last_name}` : C.email
				},
				a = g => {
					const C = s(g);
					return C && C.has_enterprise_zones
				},
				u = g => g.userCommPreferences,
				E = (0, e.P1)("userCommPreferences", u),
				n = g => {
					const C = s(g);
					return C && C.email_verified
				},
				r = g => {
					const C = E(g);
					return C && C.preferences.marketing_communication
				},
				i = g => g.userDetails,
				p = (0, e.P1)("userDetails", i),
				c = g => {
					const C = p(g);
					return C && C["2FA-RECOVERY"] === "scheduled"
				},
				_ = g => {
					const C = p(g);
					return C && C["2FA-RECOVERY"] === "interrupted"
				},
				y = g => {
					const C = p(g);
					return C == null ? void 0 : C["NEW-USER-EMAIL"]
				},
				T = g => g.gates.assignments,
				O = (g, C) => g && g[C];

			function h(g, C) {
				const M = T(g);
				return M ? O(M, C) : void 0
			}
			const S = (g, C) => h(g, C) === !0
		},
		"../react/common/selectors/zoneSelectors.ts": function(W, v, t) {
			"use strict";
			t.d(v, {
				$4: function() {
					return M
				},
				$t: function() {
					return Oe
				},
				A4: function() {
					return y
				},
				Cu: function() {
					return T
				},
				DQ: function() {
					return de
				},
				Ej: function() {
					return R
				},
				FH: function() {
					return h
				},
				ID: function() {
					return $
				},
				Ko: function() {
					return Ke
				},
				Le: function() {
					return ke
				},
				Ly: function() {
					return Ee
				},
				M3: function() {
					return me
				},
				N8: function() {
					return N
				},
				NY: function() {
					return q
				},
				Ns: function() {
					return X
				},
				Ox: function() {
					return We
				},
				P4: function() {
					return A
				},
				RO: function() {
					return Z
				},
				Tr: function() {
					return $e
				},
				U: function() {
					return O
				},
				Ug: function() {
					return g
				},
				V6: function() {
					return Pe
				},
				WR: function() {
					return Ye
				},
				Xg: function() {
					return _
				},
				ZB: function() {
					return Se
				},
				_y: function() {
					return F
				},
				cU: function() {
					return z
				},
				cg: function() {
					return ee
				},
				d2: function() {
					return pe
				},
				il: function() {
					return oe
				},
				jN: function() {
					return P
				},
				jg: function() {
					return I
				},
				kC: function() {
					return b
				},
				kf: function() {
					return Be
				},
				ko: function() {
					return ie
				},
				mK: function() {
					return Ue
				},
				nA: function() {
					return c
				},
				oY: function() {
					return L
				},
				qM: function() {
					return je
				},
				rq: function() {
					return x
				},
				tS: function() {
					return C
				},
				tU: function() {
					return K
				},
				vB: function() {
					return Fe
				},
				vM: function() {
					return H
				},
				wH: function() {
					return S
				},
				wn: function() {
					return he
				},
				xU: function() {
					return Q
				},
				xw: function() {
					return we
				},
				z5: function() {
					return j
				},
				zO: function() {
					return se
				},
				zW: function() {
					return ze
				},
				zh: function() {
					return te
				}
			});
			var e = t("../../../../node_modules/reselect/lib/index.js"),
				o = t("../react/app/redux/normalizer.js"),
				s = t("../../../../node_modules/lodash/get.js"),
				d = t.n(s),
				l = t("../../../../node_modules/moment/moment.js"),
				m = t.n(l),
				a = t("../react/common/constants/billing/index.ts");

			function u(V) {
				for (var ce = 1; ce < arguments.length; ce++) {
					var fe = arguments[ce] != null ? Object(arguments[ce]) : {},
						Me = Object.keys(fe);
					typeof Object.getOwnPropertySymbols == "function" && Me.push.apply(Me, Object.getOwnPropertySymbols(fe).filter(function(Re) {
						return Object.getOwnPropertyDescriptor(fe, Re).enumerable
					})), Me.forEach(function(Re) {
						E(V, Re, fe[Re])
					})
				}
				return V
			}

			function E(V, ce, fe) {
				return ce = n(ce), ce in V ? Object.defineProperty(V, ce, {
					value: fe,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : V[ce] = fe, V
			}

			function n(V) {
				var ce = r(V, "string");
				return typeof ce == "symbol" ? ce : String(ce)
			}

			function r(V, ce) {
				if (typeof V != "object" || V === null) return V;
				var fe = V[Symbol.toPrimitive];
				if (fe !== void 0) {
					var Me = fe.call(V, ce || "default");
					if (typeof Me != "object") return Me;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (ce === "string" ? String : Number)(V)
			}
			const i = (0, o.P1)("zone", V => V.zone),
				p = V => {
					var ce;
					return (ce = V.zoneVersioning) === null || ce === void 0 ? void 0 : ce.zoneVersionSelector
				},
				c = (0, e.P1)(i, p, (V, ce) => {
					var fe, Me, Re;
					let xe;
					if (Array.isArray(V) && V.length === 1 ? xe = V[0] : V && !Array.isArray(V) && (xe = V), !xe) return;
					const Ze = !!(ce == null ? void 0 : ce.enabled);
					return u({}, xe, xe.name && {
						name: Ze ? ce.rootZoneName : xe.name
					}, {
						versioning: {
							enabled: Ze,
							isRoot: !((fe = xe.name) === null || fe === void 0 ? void 0 : fe.endsWith(".config.cfdata.org")),
							version: Ze ? ce.selectedVersion : 0,
							rootZoneId: Ze ? ce.rootZoneId : (Me = (Re = xe) === null || Re === void 0 ? void 0 : Re.id) !== null && Me !== void 0 ? Me : ""
						}
					})
				}),
				_ = V => V.zone,
				y = (0, e.P1)(c, _, (V, ce) => ({
					data: V,
					meta: ce
				})),
				T = V => {
					var ce, fe;
					return (ce = (fe = c(V)) === null || fe === void 0 ? void 0 : fe.id) !== null && ce !== void 0 ? ce : ""
				},
				O = V => V.zones,
				h = V => V.zonesRoot,
				S = V => V.zonesAccount,
				g = (0, o.P1)("zones", O),
				C = (0, o.P1)("zonesRoot", h),
				M = (0, o.P1)("zonesAccount", S);

			function b(V) {
				const ce = c(V);
				return ce ? ce.created_on : null
			}

			function R(V, ce, fe) {
				const Me = b(V);
				if (!Me) return;
				const Re = m().duration(ce, fe),
					xe = new Date(Me),
					Ze = new Date(new Date().getTime() - Re.asMilliseconds());
				return xe.getTime() > Ze.getTime()
			}

			function A(V) {
				const ce = c(V);
				return ce ? ce.status : null
			}

			function L(V) {
				const ce = c(V);
				return ce ? ce.type : null
			}

			function P(V) {
				return V.plan_pending ? V.plan_pending : V.plan
			}

			function H(V) {
				const ce = c(V);
				if (!ce) return;
				const fe = P(ce);
				return fe && fe.legacy_id
			}

			function K(V, ce) {
				const fe = P(V);
				return !!fe && a.Gs.indexOf(fe.legacy_id) >= a.Gs.indexOf(ce)
			}

			function Q(V) {
				return !!V && V.status === "initializing"
			}

			function pe(V) {
				return !!V && V.status === "pending"
			}

			function te(V) {
				return !!V && V.status === "active"
			}

			function Y(V, ce) {
				if (!V) return !1;
				const fe = P(V);
				return !!fe && fe.legacy_id === ce
			}

			function ie(V) {
				return Y(V, "enterprise")
			}
			const Z = V => ie(c(V));

			function j(V) {
				return Y(V, "business")
			}
			const $ = V => j(c(V));

			function F(V) {
				return Y(V, "pro")
			}

			function X(V) {
				return Y(V, "free")
			}
			const oe = V => X(c(V));

			function Ee(V) {
				return !ie(V)
			}

			function B(V) {
				return V && V.owner
			}

			function I(V, ce) {
				const fe = B(ce);
				return !!fe && fe.type === "user" && fe.id === V.id
			}

			function x(V) {
				const ce = c(V);
				return !!ce && ce.type === "partial"
			}

			function q(V) {
				const ce = c(V);
				return !!ce && ce.type === "secondary"
			}
			const ee = V => {
					var ce;
					const fe = c(V);
					return !!(fe == null ? void 0 : fe.host) && !!((ce = fe.plan) === null || ce === void 0 ? void 0 : ce.externally_managed)
				},
				de = V => {
					const ce = g(V);
					return ce && ce.some(ie)
				},
				he = (V, ce) => {
					const fe = c(V);
					return fe && fe.betas ? fe.betas.includes(ce) : !1
				},
				Se = (V, ...ce) => d()(V, ["zoneFlags", "data", ...ce]),
				ke = (V, ...ce) => d()(V, ["accountFlags", "data", ...ce]),
				je = V => V.accountFlags.isRequesting,
				we = V => V.zoneFlags.isRequesting,
				$e = (V, ...ce) => d()(V, ["zoneFlagsChanges", "data", ...ce]),
				Ke = V => V.zoneFlagsChanges.isRequesting,
				z = V => V.zoneFlags && V.zoneFlags.data,
				se = V => V.zoneFlags,
				ge = (0, e.P1)(z, se, (V, ce) => ({
					data: V,
					meta: ce
				})),
				N = (0, o.P1)("abuseUrls", V => V.overview.abuseUrls),
				me = V => {
					const ce = c(V);
					return ce ? `/${ce.account.id}/${ce.name}` : null
				},
				Pe = V => V.zoneMarketingCampaigns,
				Be = V => V.overview.zoneBlocks.data,
				ze = V => V.overview.zoneBlocks.isRequesting,
				Oe = V => V.overview.zoneBlocks.hasData,
				Ue = V => {
					var ce, fe;
					return (V == null || (ce = V.overview.zoneBlocks) === null || ce === void 0 || (fe = ce.paginationData) === null || fe === void 0 ? void 0 : fe.info) || {
						page: 1,
						count: 0,
						total_pages: 0,
						per_page: 10
					}
				},
				Fe = V => V.overview.zoneBlocksReview.isRequesting,
				We = V => V.overview.zoneHold,
				Ye = (0, o.P1)("zoneHold", We)
		},
		"../react/common/utils/formatDate.ts": function(W, v, t) {
			"use strict";
			t.d(v, {
				U: function() {
					return e.pN
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-formatters/es/index.js");
			v.Z = (o, s, d = !1) => (0, e.p6)(o, s, d)
		},
		"../react/common/utils/hasRole.ts": function(W, v, t) {
			"use strict";
			t.d(v, {
				n: function() {
					return o
				}
			});
			var e = t("../react/common/selectors/accountSelectors.ts");
			const o = (s, d) => {
				const {
					roles: l = []
				} = (0, e.uF)(s) || {};
				return d.some(m => l.includes(m))
			}
		},
		"../react/common/utils/isGuards.ts": function(W, v, t) {
			"use strict";
			t.d(v, {
				Q$: function() {
					return s
				},
				t: function() {
					return m
				},
				v5: function() {
					return d
				},
				zE: function() {
					return l
				}
			});
			var e = t("../react/common/constants/index.ts"),
				o = t("../node_modules/uuid/dist/esm-browser/validate.js");
			const s = a => a ? ["page", "per_page", "count", "total_count"].every(E => E in a && a[E]) : !1,
				d = (a = "") => e.Dy.includes(a.toLowerCase()),
				l = a => a !== null && typeof a == "object" && "name" in a && "size" in a && "type" in a && typeof a.slice == "function",
				m = a => (0, o.Z)(a)
		},
		"../react/common/utils/useQueryCache.ts": function(W, v, t) {
			"use strict";
			t.d(v, {
				o: function() {
					return m
				}
			});
			var e = t("../../../../node_modules/react-query/es/index.js");

			function o(a) {
				for (var u = 1; u < arguments.length; u++) {
					var E = arguments[u] != null ? Object(arguments[u]) : {},
						n = Object.keys(E);
					typeof Object.getOwnPropertySymbols == "function" && n.push.apply(n, Object.getOwnPropertySymbols(E).filter(function(r) {
						return Object.getOwnPropertyDescriptor(E, r).enumerable
					})), n.forEach(function(r) {
						s(a, r, E[r])
					})
				}
				return a
			}

			function s(a, u, E) {
				return u = d(u), u in a ? Object.defineProperty(a, u, {
					value: E,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : a[u] = E, a
			}

			function d(a) {
				var u = l(a, "string");
				return typeof u == "symbol" ? u : String(u)
			}

			function l(a, u) {
				if (typeof a != "object" || a === null) return a;
				var E = a[Symbol.toPrimitive];
				if (E !== void 0) {
					var n = E.call(a, u || "default");
					if (typeof n != "object") return n;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (u === "string" ? String : Number)(a)
			}
			const m = a => {
				const u = (0, e.useQueryClient)(),
					E = h => {
						var S;
						return u.getQueriesData((S = h) !== null && S !== void 0 ? S : a)
					},
					n = h => {
						var S;
						return u.getQueryData((S = h) !== null && S !== void 0 ? S : a)
					},
					r = h => {
						var S;
						return u.getQueriesData({
							queryKey: (S = h) !== null && S !== void 0 ? S : a,
							stale: !0
						})
					},
					i = (h, S) => {
						var g;
						u.setQueryData((g = S) !== null && g !== void 0 ? g : a, h)
					},
					p = async h => {
						var S;
						await u.refetchQueries((S = h) !== null && S !== void 0 ? S : a)
					}, c = async (h, S) => {
						var g, C;
						await u.invalidateQueries((g = h) !== null && g !== void 0 ? g : a, o({
							refetchActive: !1
						}, (C = S) !== null && C !== void 0 ? C : {}))
					}, _ = async (h, S) => {
						const g = h || (C => {
							var M;
							return (C == null || (M = C.queryKey) === null || M === void 0 ? void 0 : M[0]) === a
						});
						await u.invalidateQueries(o({
							predicate: g,
							refetchActive: !1,
							refetchInactive: !1
						}, S))
					};
				return {
					refetch: p,
					cancelData: async () => {
						await u.cancelQueries(a)
					},
					invalidate: c,
					setData: i,
					getDataStale: r,
					getData: E,
					prefetchQuery: (h, S) => {
						var g;
						return u.prefetchQuery((g = S) !== null && g !== void 0 ? g : a, h)
					},
					getQueryData: n,
					predicateInvalidate: _,
					batchInvalidate: async ({
						queryKeysToInvalidate: h = [],
						queryKeysToPredicateInvalidate: S = [],
						refetchActive: g = !1,
						refetchInactive: C = !1
					}) => {
						const M = h.map(R => c(R)),
							b = S.map(R => _(A => {
								var L;
								return (A == null || (L = A.queryKey) === null || L === void 0 ? void 0 : L[0]) === R
							}, {
								refetchActive: g,
								refetchInactive: C
							}));
						await Promise.all([...M, ...b])
					}
				}
			}
		},
		"../react/common/validators/index.js": function(W, v, t) {
			"use strict";
			t.d(v, {
				K2: function() {
					return o
				},
				Lb: function() {
					return s
				},
				XI: function() {
					return d
				},
				bK: function() {
					return u
				},
				jk: function() {
					return a
				},
				wb: function() {
					return l
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-regex/es/index.js");
			const o = E => /^https?:\/\/(.*)/.test(E),
				s = E => e.default.hostname.test(E),
				d = E => /^([_a-zA-Z0-9][-_a-zA-Z0-9]*\.)+[-a-zA-Z0-9]{2,20}:(?:[0-9]|[1-9][0-9]{1,3}|[1-5][0-9]{4}|6[0-4][0-9]{3}|65[0-4][0-9]{2}|655[0-2][0-9]|6553[0-5])$/.test(E),
				l = E => /^[!-~]+$/.test(E),
				m = /^(?:(?:[A-Za-z0-9](?:[A-Za-z0-9\-\_]{0,61}[A-Za-z0-9])?)\.)*(?:[A-Za-z0-9](?:[A-Za-z0-9\-]{0,61}[A-Za-z0-9])?)?$/,
				a = E => m.test(E),
				u = E => !!E && !!E.length && /^[ -~]+$/.test(E)
		},
		"../react/pages/analytics/common/utils/gqlUtils.js": function(W, v, t) {
			"use strict";
			t.d(v, {
				DZ: function() {
					return d
				},
				GA: function() {
					return E
				},
				hT: function() {
					return m
				},
				p6: function() {
					return s
				},
				qc: function() {
					return l
				},
				w9: function() {
					return u
				}
			});
			var e = t("../../../../node_modules/moment/moment.js"),
				o = t.n(e);
			const s = i => o().utc(i).format("YYYY-MM-DD"),
				d = i => o().utc(i).format(),
				l = i => o().utc(i).startOf("minute").format(),
				m = i => new Date(i),
				a = {
					0: "datetimeMinute",
					3: "datetimeFiveMinutes",
					12: "datetimeFifteenMinutes",
					48: "datetimeHour",
					240: "date"
				},
				u = i => {
					const p = i / 60 / 60 / 1e3;
					return a[Object.keys(a).sort((c, _) => _ - c).find(c => p >= c)]
				},
				E = (i, p = c => c.avg && c.avg.sampleInterval ? c.avg.sampleInterval : 1) => i.length === 0 ? 1 : i.reduce((c, _) => c + p(_), 0) / i.length,
				n = {
					datetimeMinute: 60 * 1e3,
					datetimeFiveMinutes: 5 * 60 * 1e3,
					datetimeFifteenMinutes: 15 * 60 * 1e3,
					datetimeHour: 60 * 60 * 1e3,
					date: 240 * 60 * 1e3
				},
				r = i => n[i]
		},
		"../react/pages/apps/marketplace/config/initialState.ts": function(W, v, t) {
			"use strict";
			t.d(v, {
				Jz: function() {
					return E
				},
				OK: function() {
					return l
				},
				_Y: function() {
					return a
				},
				fD: function() {
					return r
				},
				h_: function() {
					return u
				},
				w6: function() {
					return i
				},
				yc: function() {
					return n
				}
			});

			function e(c) {
				for (var _ = 1; _ < arguments.length; _++) {
					var y = arguments[_] != null ? Object(arguments[_]) : {},
						T = Object.keys(y);
					typeof Object.getOwnPropertySymbols == "function" && T.push.apply(T, Object.getOwnPropertySymbols(y).filter(function(O) {
						return Object.getOwnPropertyDescriptor(y, O).enumerable
					})), T.forEach(function(O) {
						o(c, O, y[O])
					})
				}
				return c
			}

			function o(c, _, y) {
				return _ = s(_), _ in c ? Object.defineProperty(c, _, {
					value: y,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : c[_] = y, c
			}

			function s(c) {
				var _ = d(c, "string");
				return typeof _ == "symbol" ? _ : String(_)
			}

			function d(c, _) {
				if (typeof c != "object" || c === null) return c;
				var y = c[Symbol.toPrimitive];
				if (y !== void 0) {
					var T = y.call(c, _ || "default");
					if (typeof T != "object") return T;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (_ === "string" ? String : Number)(c)
			}
			let l = function(c) {
					return c.Sending = "sending", c.Success = "success", c.Failed = "failed", c.Latent = "latent", c
				}({}),
				m = function(c) {
					return c[c.Success = 200] = "Success", c[c.BadRequest = 400] = "BadRequest", c
				}({});
			const a = {
					status: l.Latent,
					statusCode: void 0
				},
				u = {
					status: l.Sending
				},
				E = {
					status: l.Success,
					statusCode: m.Success
				},
				n = {
					status: l.Failed,
					statusCode: m.BadRequest
				},
				r = {
					token: null,
					zone: null,
					isTokenValid: !1,
					user: null
				},
				i = {
					appsList: e({
						value: []
					}, a),
					installsList: e({
						value: []
					}, a),
					categoriesList: e({
						value: []
					}, a),
					recommendedAppsList: e({
						value: []
					}, a),
					metadata: e({
						value: null
					}, a),
					app: e({
						value: null
					}, a),
					updatableInstallsList: [],
					developedApps: e({
						value: []
					}, a)
				},
				p = {}
		},
		"../react/pages/apps/marketplace/libraries/helpers.ts": function(W, v, t) {
			"use strict";
			t.d(v, {
				Ux: function() {
					return r
				},
				cz: function() {
					return p
				},
				im: function() {
					return a
				},
				pG: function() {
					return i
				},
				t$: function() {
					return c
				}
			});
			var e = t("../react/pages/apps/marketplace/libraries/constants.ts");

			function o(y) {
				for (var T = 1; T < arguments.length; T++) {
					var O = arguments[T] != null ? Object(arguments[T]) : {},
						h = Object.keys(O);
					typeof Object.getOwnPropertySymbols == "function" && h.push.apply(h, Object.getOwnPropertySymbols(O).filter(function(S) {
						return Object.getOwnPropertyDescriptor(O, S).enumerable
					})), h.forEach(function(S) {
						s(y, S, O[S])
					})
				}
				return y
			}

			function s(y, T, O) {
				return T = d(T), T in y ? Object.defineProperty(y, T, {
					value: O,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : y[T] = O, y
			}

			function d(y) {
				var T = l(y, "string");
				return typeof T == "symbol" ? T : String(T)
			}

			function l(y, T) {
				if (typeof y != "object" || y === null) return y;
				var O = y[Symbol.toPrimitive];
				if (O !== void 0) {
					var h = O.call(y, T || "default");
					if (typeof h != "object") return h;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (T === "string" ? String : Number)(y)
			}
			const m = y => y.test(window.location.hostname),
				a = () => m(e.j9),
				u = () => m(MARKETPLACE_LOCAL_URL_REGEXP),
				E = (y, T) => {
					const O = random(0, 1) ? -1 : 1;
					return y.points === T.points || y.points >= APP_POINTS_THRESHOLD && T.points >= APP_POINTS_THRESHOLD ? O : y.points < 0 || T.points < 0 || y.points >= APP_POINTS_THRESHOLD || T.points >= APP_POINTS_THRESHOLD ? T.points - y.points : O
				},
				n = (y, T, O) => {
					const h = get(T, O),
						S = get(y, O);
					return h && !isEqual(h, S)
				},
				r = {
					transformers: {
						transformAppIdsToApps: (y, T) => T.map(O => y.find(h => h.id === O)),
						addAppVersionInfo: (y, T) => o({}, T, {
							currentVersion: T.versions.find(O => O.tag === y.versionTag),
							latestVersion: T.versions.find(O => O.tag === T.infoVersion)
						}),
						addCurrentSiteInstall: (y, T) => o({}, T, {
							currentSiteInstall: y.find(O => O.appId === T.id)
						})
					}
				},
				i = (y, T, O) => o({}, y, T, O ? {
					value: O
				} : {}),
				p = y => y.map(T => T.status),
				c = y => y.apps ? y.apps : y,
				_ = y => {
					let T = ["by-cloudflare"];
					return y.filter(O => !T.includes(O.id) && O.visible).sort((O, h) => O.points < h.points ? 1 : 0)
				}
		},
		"../react/pages/apps/marketplace/marketplace.translations.ts": function(W, v, t) {
			"use strict";
			t.r(v), t.d(v, {
				categorySlugTranslationKey: function() {
					return l
				},
				keys: function() {
					return o
				},
				namespace: function() {
					return d
				},
				translations: function() {
					return s
				}
			});
			var e = t("../../../common/intl/intl-core/src/prepare.ts");
			const {
				keys: o,
				translations: s,
				namespace: d
			} = (0, e.x)("marketplace", {
				markets_metadata_label_popular: "Just show me the most popular apps",
				markets_metadata_label_blog: "Improve my blog or portfolio",
				markets_metadata_label_store: "Supercharge my online store",
				markets_metadata_label_marketing: "Improve my marketing and lead generation",
				nav_bar_explore_apps: "Explore Apps",
				nav_bar_installed_apps: "Your Installed Apps",
				nav_bar_developed_apps: "Your Developed Apps",
				common_card_button_show_all: "Show All",
				app_card_untitled_app: "Untitled App",
				app_card_installed_flag: "Installed",
				developer_footer_card_title: "developers",
				developer_footer_card_header: "Ship your code to 13 million sites.",
				developer_footer_card_body: "With Cloudflare Apps, getting your tool or service onto millions of sites has never been easier. Any Cloudflare user can preview & install your code on their site in seconds.",
				developer_footer_learn_more: "Learn more \u203A",
				recommended_apps_personalize_save: "Save",
				recommended_apps_personalize_customize: "Customize",
				recommended_apps_card_error_loading: "There was a problem loading popular apps.",
				angular_app_iframe_content: "Could not load content",
				home_page_errored: "There was an error!",
				home_page_apps_search_label: "Search Apps",
				home_page_categories_filter_label: "Filter Apps",
				home_page_categories_filter_options_all: "All",
				home_page_categories_filter_options_popular: "Popular",
				category_card_popular_title: "Popular<0> apps\u203A</0>",
				category_card_popular_subtitle: "Our most popular and highly rated apps.",
				home_page_categories_filter_options_ui_and_design: "UI & Design",
				home_page_categories_filter_options_widgets_and_plugins: "Widgets & Plugins",
				home_page_categories_filter_options_security: "Security",
				home_page_categories_filter_options_performance: "Performance",
				home_page_categories_filter_options_insights: "Insights",
				home_page_categories_filter_options_social_and_communication: "Social & Communication",
				category_card_ui_and_design_title: "UI & Design<0> apps\u203A</0>",
				category_card_ui_and_design_subtitle: "Apps that make your website more beautiful and user friendly.",
				category_card_widgets_and_plugins_title: "Widgets & Plugins<0> apps\u203A</0>",
				category_card_widgets_and_plugins_subtitle: "Apps that add functionality and services to your website.",
				category_card_security_title: "Security<0> apps\u203A</0>",
				category_card_security_subtitle: "Apps which make your site safer and protect you from threats.",
				category_card_insights_title: "Insights<0> apps\u203A</0>",
				category_card_insights_subtitle: "Apps that provide insight into your visitors.",
				category_card_performance_title: "Performance<0> apps\u203A</0>",
				category_card_performance_subtitle: "Improve the speed or perceived responsiveness of your website.",
				category_card_social_and_communication_title: "Social & Communication<0> apps\u203A</0>",
				category_card_social_and_communication_subtitle: "Apps that make it easier to communicate with your customers.",
				home_page_categories_filter_options_powr: "POWR",
				home_page_categories_filter_options_grow_your_email_list: "Grow Your Email List",
				home_page_categories_filter_options_make_money_on_your_site: "Make Money On Your Site",
				home_page_categories_filter_options_recommended_for_all_sites: "Recommended for All Sites",
				home_page_categories_filter_options_performance_and_security: "Performance & Security",
				home_page_categories_filter_options_recommended_for_stores: "Recommended For Stores",
				home_page_categories_filter_options_by_cloudflare: "Cloudflare Labs",
				home_page_categories_filter_options_get_more_customers: "Get More Customers",
				home_page_categories_filter_options_getting_started_apps: "Getting Started",
				home_page_categories_filter_options_recommended_for_marketing_sites: "Recommended for Marketing Sites",
				home_page_categories_filter_options_add_on: "Add-ons",
				home_page_categories_filter_options_communication: "Communication",
				home_page_categories_filter_options_humor: "Humor",
				home_page_categories_filter_options_design: "Design & Polish",
				home_page_categories_filter_options_for_developers: "For Developers",
				home_page_categories_filter_options_recommended_for_blogs: "Recommended for Blogs",
				home_page_categories_filter_options_marketing: "Marketing",
				home_page_categories_filter_options_social_media: "Social Media",
				home_page_categories_filter_options_e_commerce: "E-Commerce",
				home_page_categories_filter_options_analytics: "Analytics",
				category_card_recommended_all_sites_subtitle: "These apps are recommended for all site types.",
				category_card_powr_title: "POWR<0> apps\u203A</0>",
				category_card_powr_subtitle: "Apps created by POWR",
				category_card_grow_your_email_list_title: "Grow Your Email List<0> \u203A</0>",
				category_card_grow_your_email_list_subtitle: "Apps to help you grow your email subscribers.",
				category_card_make_money_on_your_site_title: "Make Money On Your Site<0> \u203A</0>",
				category_card_make_money_on_your_site_subtitle: "Apps to help you make money from your website.",
				category_card_recommended_for_all_sites_title: "Recommended for All Sites<0> \u203A</0>",
				category_card_recommended_for_all_sites_subtitle: "Apps that are recommended for all sites.",
				category_card_performance_and_security_title: "Performance & Security<0> apps\u203A</0>",
				category_card_performance_and_security_subtitle: "Apps that make your website faster and more secure.",
				category_card_recommended_for_stores_title: "Recommended For Stores<0> \u203A</0>",
				category_card_recommended_for_stores_subtitle: "Apps for stores in the recommendation engine.",
				category_card_by_cloudflare_title: "Cloudflare Labs<0> apps\u203A</0>",
				category_card_by_cloudflare_subtitle: "Apps made by Cloudflare.",
				category_card_get_more_customers_title: "Get More Customers<0> \u203A</0>",
				category_card_get_more_customers_subtitle: "Apps to help you grow your customer base.",
				category_card_getting_started_apps_title: "Getting Started<0> apps\u203A</0>",
				category_card_recommended_for_marketing_sites_title: "Recommended for Marketing Sites<0> \u203A</0>",
				category_card_recommended_for_marketing_sites_subtitle: "Apps for marketing sites in the recommendation engine.",
				category_card_add_on_title: "Add-ons<0> \u203A</0>",
				category_card_add_on_subtitle: "Drop-in components to add to your website.",
				category_card_communication_title: "Communication<0> apps\u203A</0>",
				category_card_communication_subtitle: "Communicate with and provide support to your website visitors.",
				category_card_humor_title: "Humor<0> apps\u203A</0>",
				category_card_humor_subtitle: "Apps that add fun widgets and Easter eggs to your site.",
				category_card_design_title: "Design & Polish<0> apps\u203A</0>",
				category_card_design_subtitle: "Improve the look & feel and ease-of-use of your website.",
				category_card_for_developers_title: "For Developers<0> \u203A</0>",
				category_card_for_developers_subtitle: "Apps made for web developers and designers.",
				category_card_recommended_for_blogs_title: "Recommended for Blogs<0> \u203A</0>",
				category_card_recommended_for_blogs_subtitle: "Apps for blogs in the recommendation engine.",
				category_card_marketing_title: "Marketing<0> apps\u203A</0>",
				category_card_marketing_subtitle: "Promote content, collect email addresses, and increase engagement.",
				category_card_social_media_title: "Social Media<0> apps\u203A</0>",
				category_card_social_media_subtitle: "Integrate your website with Twitter, Facebook, and other networks.",
				category_card_e_commerce_title: "E-Commerce<0> apps\u203A</0>",
				category_card_e_commerce_subtitle: "Tools to help your online business.",
				category_card_analytics_title: "Analytics<0> apps\u203A</0>",
				category_card_analytics_subtitle: "Collect and analyze data from your site visitors.",
				app_edit_install: "Edit Install",
				app_uninstall: "Uninstall",
				app_installed: "Installed",
				app_cancel: "Cancel",
				app_retry: "Retry",
				app_info_about: "About",
				app_info_no_description: "This app has no description.",
				app_info_no_description_link: "This app has no description.  <0>Add one here</0>.",
				app_info_try_on_your_site: "Try it out on your site now!",
				app_info_preview: "Preview",
				app_info_header_preview: "Preview on your site",
				app_info_starting_price: "Starting at %{appStartingPrice}",
				app_info_install_free: "Install for FREE",
				app_info_details: "Details",
				app_info_rating: "Rating",
				app_info_feedback_rating_error: "There was an error with your rating. Please try again and <0>contact us</0> if the issue persists.",
				app_info_installed_version: "%{appInstalledVersion} on %{appInstalledDate}",
				app_info_developer: "Developer",
				app_info_support_contact: "Support Contact",
				app_info_category: "Category",
				app_info_categories: "Categories",
				app_info_elsewhere: "Elsewhere",
				app_info_external_link_website: "Website \u203A",
				app_info_external_link_tos: "Terms of Service \u203A",
				app_info_external_link_privacy: "Privacy Policy \u203A",
				app_info_external_link_source: "Source Code \u203A",
				developed_app_card_configure: "Configure",
				developed_app_card_metrics: "Metrics",
				developed_app_card_status_approved: "Approved",
				developed_app_card_status_hidden: "Hidden",
				developed_app_card_status_draft: "Draft",
				developed_app_card_status_pending: "Awaiting approval...",
				installed_app_card_installed_date: "Installed %{appCreatedRelativeTime}",
				installed_app_card_leave_feedback: "Leave Feedback",
				installed_app_card_visit_vendor_site: "Visit vendor site",
				installed_app_card_visit_vendor: "Visit %{title}",
				installed_app_card_external_link: "External Link",
				installed_app_card_upgrade_version: "Upgrade version",
				installed_app_card_update: "Update",
				installed_app_card_default_release_notes: "Bugfixes and stability improvements.",
				installed_apps_group_title_all: "Installed on all pages",
				installed_apps_group_title_page: "Installed on <0>%{page}</0>",
				installed_apps_group_title_page_and_other: "Installed on <0>%{page}</0> and 1 other location",
				installed_apps_group_title_page_and_others: "Installed on <0>%{page}</0> and %{length} other locations",
				uninstall_confirm_all_sites: "Are you sure you want to uninstall %{title} from all sites?",
				uninstall_confirm_sites: "Are you sure you want to uninstall %{title} from the following sites and pages?",
				uninstall_error: "There was an error removing the app. Please try again later or <0>contact us</0> for assistance.",
				page_loading_error: "There was an error loading the page.",
				developed_apps_installed_toast: "Your developed apps can be fully installed and tested on any site managed by your Cloudflare account.",
				developed_apps_no_apps: "No apps were found.",
				developed_apps_create_app: "Create an App",
				developed_apps_banner_title: "Developers",
				developed_apps_banner_body: "To configure, manage, and monitor your developed apps, go to the Developer Dashboard.",
				developed_apps_banner_dashboard: "Developer Dashboard",
				installed_apps_heading: "Apps",
				installed_apps_update_toast: "You have 1 app with pending updates.",
				installed_apps_updates_toast: "You have %{length} apps with pending updates.",
				installed_apps_no_apps_installed_section: "No apps installed on <0>%{section}</0>.",
				installed_apps_no_apps_insatlled_site: "You haven't installed any apps on your site yet."
			});

			function l(m) {
				const a = m.replace(/-/g, "_");
				return Object.keys(o).includes(a) ? a : void 0
			}
		},
		"../react/pages/apps/marketplace/requests/Requester.ts": function(W, v, t) {
			"use strict";
			t.d(v, {
				L: function() {
					return i
				}
			});
			var e = t("../../../../node_modules/url-join/lib/url-join.js"),
				o = t.n(e),
				s = t("../../../../node_modules/lodash-es/defaults.js"),
				d = t("../react/pages/apps/marketplace/libraries/helpers.ts");

			function l(p) {
				for (var c = 1; c < arguments.length; c++) {
					var _ = arguments[c] != null ? Object(arguments[c]) : {},
						y = Object.keys(_);
					typeof Object.getOwnPropertySymbols == "function" && y.push.apply(y, Object.getOwnPropertySymbols(_).filter(function(T) {
						return Object.getOwnPropertyDescriptor(_, T).enumerable
					})), y.forEach(function(T) {
						u(p, T, _[T])
					})
				}
				return p
			}

			function m(p, c) {
				if (p == null) return {};
				var _ = a(p, c),
					y, T;
				if (Object.getOwnPropertySymbols) {
					var O = Object.getOwnPropertySymbols(p);
					for (T = 0; T < O.length; T++) y = O[T], !(c.indexOf(y) >= 0) && (!Object.prototype.propertyIsEnumerable.call(p, y) || (_[y] = p[y]))
				}
				return _
			}

			function a(p, c) {
				if (p == null) return {};
				var _ = {},
					y = Object.keys(p),
					T, O;
				for (O = 0; O < y.length; O++) T = y[O], !(c.indexOf(T) >= 0) && (_[T] = p[T]);
				return _
			}

			function u(p, c, _) {
				return c = E(c), c in p ? Object.defineProperty(p, c, {
					value: _,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : p[c] = _, p
			}

			function E(p) {
				var c = n(p, "string");
				return typeof c == "symbol" ? c : String(c)
			}

			function n(p, c) {
				if (typeof p != "object" || p === null) return p;
				var _ = p[Symbol.toPrimitive];
				if (_ !== void 0) {
					var y = _.call(p, c || "default");
					if (typeof y != "object") return y;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (c === "string" ? String : Number)(p)
			}
			class r {
				constructor(c) {
					u(this, "token", void 0), u(this, "options", void 0), u(this, "setAuthHeader", _ => {
						this.token = _
					}), this.token = "", this.options = (0, s.Z)(c, r.defaults)
				}
				getAuthHeaders() {
					return {
						Authorization: `Bearer ${this.token}`
					}
				}
				async request(c = "GET", _, y = {}) {
					const {
						body: T
					} = y, O = m(y, ["body"]);
					return fetch(o()(this.options.baseUrl, _), l({
						method: c
					}, O, T ? {
						body: JSON.stringify(T)
					} : {}, {
						credentials: "same-origin",
						headers: new Headers(l({
							Accept: "application/json, text/plain, */*"
						}, y.headers, this.getAuthHeaders()))
					}))
				}
				async fetchJSON(c, _ = {}) {
					const y = await this.request("GET", c, _);
					return this.parseJSONResponse(y)
				}
				async postJSON(c, _ = {}) {
					const y = await this.request("POST", c, l({}, _, {
						headers: l({}, _.headers, {
							"Content-Type": "application/json"
						})
					}));
					return this.parseJSONResponse(y)
				}
				parseJSONResponse(c) {
					return c.json()
				}
			}
			u(r, "defaults", {
				baseUrl: (0, d.im)() ? "https://api-staging.appstore.cfdata.org" : "https://api.cloudflareapps.com"
			});
			const i = new r
		},
		"../react/pages/apps/marketplace/requests/common.ts": function(W, v, t) {
			"use strict";
			t.d(v, {
				JX: function() {
					return E
				},
				Jb: function() {
					return r
				},
				RX: function() {
					return u
				}
			});
			var e = t("../../../../node_modules/lodash-es/upperFirst.js"),
				o = t("../../../../node_modules/lodash-es/isEmpty.js"),
				s = t("../../../../node_modules/query-string/query-string.js"),
				d = t.n(s),
				l = t("../../../../node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js"),
				m = t("../react/pages/apps/marketplace/requests/Requester.ts"),
				a = t("../react/pages/apps/marketplace/libraries/resource.ts");

			function* u(c, _, y, T) {
				const O = (0, e.Z)(_),
					[h, S, g] = [`get${O}Sending`, `get${O}Success`, `get${O}Failed`];
				try {
					yield(0, l.gz)(c[h]());
					const C = yield(0, l.RE)(i, y);
					let M = C;
					if (M.error) {
						yield(0, l.gz)(c[g]());
						return
					}
					return T && (M = yield T(C)), yield(0, l.gz)(c[S](M)), M
				} catch {
					yield(0, l.gz)(c[g]())
				}
			}

			function* E(c, _, y, T) {
				const O = (0, e.Z)(_),
					h = `get${O}Sending`,
					S = `get${O}Success`,
					g = `get${O}Failed`;
				try {
					yield(0, l.gz)(c[h]());
					const C = yield(0, l.RE)(p, {
						url: y,
						data: T
					});
					return yield(0, l.gz)(c[S](C)), C
				} catch {
					yield(0, l.gz)(c[g]())
				}
			}
			const n = c => (0, o.Z)(c) ? "" : `?${s.stringify(c)}`,
				r = {
					app: new a.c({
						name: "app",
						url: (c, _) => `apps/${c}${n(_)}`
					}),
					apps: new a.c({
						name: "apps",
						url: () => "apps"
					}),
					installs: {
						default: new a.c({
							name: "installs",
							url: c => `sites/${c}/installs`
						}),
						delete: new a.c({
							name: "installs",
							url: c => `installs/${c}`
						})
					},
					categories: new a.c({
						name: "categories",
						url: (c = {}) => "categories" + n(c)
					}),
					metadata: {
						get: new a.c({
							name: "metadata",
							url: c => `sites/${c}/metadata`
						}),
						post: new a.c({
							name: "metadata",
							url: c => `sites/${c}/metadata`
						})
					},
					ratings: {
						default: new a.c({
							name: "ratings",
							url: (c = {}) => "ratings" + n(c)
						}),
						delete: new a.c({
							name: "ratings",
							url: c => `ratings/${c}`
						})
					},
					recommendedApps: new a.c({
						name: "recommendedApps",
						url: (c = {}) => "apps/recommend" + n(c)
					}),
					developedApps: new a.c({
						name: "developedApps",
						url: c => `user/${c}/apps`
					})
				},
				i = async c => m.L.fetchJSON(c), p = async c => {
					const {
						url: _,
						data: y
					} = c;
					return m.L.postJSON(_, {
						body: y
					})
				}
		},
		"../react/pages/apps/marketplace/state/auth.reducer.ts": function(W, v, t) {
			"use strict";
			t.d(v, {
				Nw: function() {
					return u
				},
				U4: function() {
					return a
				},
				XO: function() {
					return m
				},
				ZP: function() {
					return E
				}
			});
			var e = t("../react/pages/apps/marketplace/config/initialState.ts");

			function o(n) {
				for (var r = 1; r < arguments.length; r++) {
					var i = arguments[r] != null ? Object(arguments[r]) : {},
						p = Object.keys(i);
					typeof Object.getOwnPropertySymbols == "function" && p.push.apply(p, Object.getOwnPropertySymbols(i).filter(function(c) {
						return Object.getOwnPropertyDescriptor(i, c).enumerable
					})), p.forEach(function(c) {
						s(n, c, i[c])
					})
				}
				return n
			}

			function s(n, r, i) {
				return r = d(r), r in n ? Object.defineProperty(n, r, {
					value: i,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : n[r] = i, n
			}

			function d(n) {
				var r = l(n, "string");
				return typeof r == "symbol" ? r : String(r)
			}

			function l(n, r) {
				if (typeof n != "object" || n === null) return n;
				var i = n[Symbol.toPrimitive];
				if (i !== void 0) {
					var p = i.call(n, r || "default");
					if (typeof p != "object") return p;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (r === "string" ? String : Number)(n)
			}
			let m = function(n) {
					return n.SetCurrentUser = "user.set", n
				}({}),
				a = function(n) {
					return n.InitSaga = "MARKETPLACE/AUTH/LOADED_SAGA", n.SetZone = "MARKETPLACE/AUTH/SET_ZONE", n.SetToken = "MARKETPLACE/AUTH/SET_TOKEN", n.ClearToken = "MARKETPLACE/AUTH/CLEAR_TOKEN", n.SetTokenValid = "MARKETPLACE/AUTH/VALID_TOKEN", n.CurrentUserSaga = "MARKETPLACE/AUTH/CURRENT_USER_SAGA", n.CurrentUserSending = "MARKETPLACE/AUTH/CURRENT_USER_SENDING", n.CurrentUserSuccess = "MARKETPLACE/AUTH/CURRENT_USER_SUCCESS", n.CurrentUserFailed = "MARKETPLACE/AUTH/CURRENT_USER_FAILED", n.ResetState = "MARKETPLACE/AUTH/RESET_STATE", n
				}({});
			const u = {
				resetState: () => ({
					type: a.ResetState
				}),
				initSaga: n => ({
					type: a.InitSaga,
					zoneId: n
				}),
				setZone: n => ({
					type: a.SetZone,
					zone: n
				}),
				setToken: n => ({
					type: a.SetToken,
					token: n
				}),
				clearToken: () => ({
					type: a.ClearToken
				}),
				setTokenValid: n => ({
					type: a.SetTokenValid,
					isTokenValid: n
				}),
				getCurrentUserSaga: () => ({
					type: a.CurrentUserSaga
				}),
				getCurrentUserSending: () => ({
					type: a.CurrentUserSending
				}),
				getCurrentUserSuccess: n => ({
					type: a.CurrentUserSuccess,
					user: n
				}),
				getCurrentUserFailed: () => ({
					type: a.CurrentUserFailed
				})
			};

			function E(n = e.fD, r) {
				switch (r.type) {
					case a.ResetState:
						return o({}, e.fD);
					case a.CurrentUserSending:
						return o({}, n);
					case a.CurrentUserSuccess:
						const {
							user: i
						} = r;
						return o({}, n, {
							user: i
						});
					case a.CurrentUserFailed:
						return o({}, n);
					case a.SetZone:
						const {
							zone: p
						} = r;
						return o({}, n, {
							zone: p
						});
					case a.SetToken:
						const {
							token: c
						} = r;
						return o({}, n, {
							token: c
						});
					case a.ClearToken:
						return o({}, n, {
							token: null
						});
					case a.SetTokenValid:
						const {
							isTokenValid: _
						} = r;
						return o({}, n, {
							isTokenValid: _
						});
					default:
						return n
				}
			}
		},
		"../react/pages/apps/marketplace/state/common.reducer.ts": function(W, v, t) {
			"use strict";
			t.d(v, {
				Nw: function() {
					return E
				},
				U4: function() {
					return u
				},
				ZP: function() {
					return n
				},
				dg: function() {
					return a
				}
			});
			var e = t("../react/pages/apps/marketplace/config/initialState.ts"),
				o = t("../react/pages/apps/marketplace/libraries/helpers.ts");

			function s(r) {
				for (var i = 1; i < arguments.length; i++) {
					var p = arguments[i] != null ? Object(arguments[i]) : {},
						c = Object.keys(p);
					typeof Object.getOwnPropertySymbols == "function" && c.push.apply(c, Object.getOwnPropertySymbols(p).filter(function(_) {
						return Object.getOwnPropertyDescriptor(p, _).enumerable
					})), c.forEach(function(_) {
						d(r, _, p[_])
					})
				}
				return r
			}

			function d(r, i, p) {
				return i = l(i), i in r ? Object.defineProperty(r, i, {
					value: p,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : r[i] = p, r
			}

			function l(r) {
				var i = m(r, "string");
				return typeof i == "symbol" ? i : String(i)
			}

			function m(r, i) {
				if (typeof r != "object" || r === null) return r;
				var p = r[Symbol.toPrimitive];
				if (p !== void 0) {
					var c = p.call(r, i || "default");
					if (typeof c != "object") return c;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (i === "string" ? String : Number)(r)
			}
			let a = function(r) {
					return r.CloudflareZoneChangeStart = "zone.start", r
				}({}),
				u = function(r) {
					return r.GetHomePageAssetsSaga = "MARKETPLACE/COMMON/GET_HOME_PAGE_ASSETS_SAGA", r.GetInstalledAppsAssetsSaga = "MARKETPLACE/COMMON/GET_INSTALLED_APPS_ASSETS_SAGA", r.GetDevelopedAppsAssetsSaga = "MARKETPLACE/COMMON/GET_DEVELOPED_APPS_ASSETS_SAGA", r.GetDevelopedAppsSending = "MARKETPLACE/COMMON/GET_DEVELOPED_APPS_SENDING", r.GetDevelopedAppsSuccess = "MARKETPLACE/COMMON/GET_DEVELOPED_APPS_SUCCESS", r.GetDevelopedAppsFailed = "MARKETPLACE/COMMON/GET_DEVELOPED_APPS_FAILED", r.GetAppInfoAssetsSaga = "MARKETPLACE/COMMON/GET_APP_INFO_ASSETS_SAGA", r.SetUpdatableInstalls = "MARKETPLACE/COMMON/SET_UPDATABLE_INSTALLS", r.GetAppSaga = "MARKETPLACE/COMMON/GET_APP_SAGA", r.GetAppSending = "MARKETPLACE/COMMON/GET_APP_SENDING", r.GetAppSuccess = "MARKETPLACE/COMMON/GET_APP_SUCCESS", r.GetAppFailed = "MARKETPLACE/COMMON/GET_APP_FAILED", r.ClearApp = "MARKETPLACE/COMMON/CLEAR_APP", r.GetAppsSaga = "MARKETPLACE/COMMON/GET_APPS_SAGA", r.GetAppsSending = "MARKETPLACE/COMMON/GET_APPS_SENDING", r.GetAppsSuccess = "MARKETPLACE/COMMON/GET_APPS_SUCCESS", r.GetAppsFailed = "MARKETPLACE/COMMON/GET_APPS_FAILED", r.GetInstallsSaga = "MARKETPLACE/COMMON/GET_INSTALLS_SAGA", r.GetInstallsSending = "MARKETPLACE/COMMON/GET_INSTALLS_SENDING", r.GetInstallsSuccess = "MARKETPLACE/COMMON/GET_INSTALLS_SUCCESS", r.GetInstallsFailed = "MARKETPLACE/COMMON/GET_INSTALLS_FAILED", r.GetCategoriesSaga = "MARKETPLACE/COMMON/GET_CATEGORIES_SAGA", r.GetCategoriesSending = "MARKETPLACE/COMMON/GET_CATEGORIES_SENDING", r.GetCategoriesSuccess = "MARKETPLACE/COMMON/GET_CATEGORIES_SUCCESS", r.GetCategoriesFailed = "MARKETPLACE/COMMON/GET_CATEGORIES_FAILED", r.GetMetadataSaga = "MARKETPLACE/COMMON/GET_METADATA_SAGA", r.GetMetadataSending = "MARKETPLACE/COMMON/GET_METADATA_SENDING", r.GetMetadataSuccess = "MARKETPLACE/COMMON/GET_METADATA_SUCCESS", r.GetMetadataFailed = "MARKETPLACE/COMMON/GET_METADATA_FAILED", r.PostMetadataSaga = "MARKETPLACE/COMMON/POST_METADATA_SAGA", r.PostMetadataSending = "MARKETPLACE/COMMON/POST_METADATA_SENDING", r.PostMetadataSuccess = "MARKETPLACE/COMMON/POST_METADATA_SUCCESS", r.PostMetadataFailed = "MARKETPLACE/COMMON/POST_METADATA_FAILED", r.GetRecommendedAppsSaga = "MARKETPLACE/COMMON/GET_RECOMMENDED_APPS_SAGA", r.GetRecommendedAppsSending = "MARKETPLACE/COMMON/GET_RECOMMENDED_APPS_SENDING", r.GetRecommendedAppsSuccess = "MARKETPLACE/COMMON/GET_RECOMMENDED_APPS_SUCCESS", r.GetRecommendedAppsFailed = "MARKETPLACE/COMMON/GET_RECOMMENDED_APPS_FAILED", r.ZoneChangedSaga = "MARKETPLACE/COMMON/ZONE_CHANGED_SAGA", r.ResetState = "MARKETPLACE/COMMON/RESET_STATE", r
				}({});
			const E = {
				resetState: () => ({
					type: u.ResetState
				}),
				zoneChangedSaga: () => ({
					type: u.ZoneChangedSaga
				}),
				getHomePageAssetsSaga: (r, i) => ({
					type: u.GetHomePageAssetsSaga,
					zoneId: r,
					currentResources: i
				}),
				getInstalledAppsAssetsSaga: r => ({
					type: u.GetInstalledAppsAssetsSaga,
					zoneId: r
				}),
				getDevelopedAppsAssetsSaga: (r, i) => ({
					type: u.GetDevelopedAppsAssetsSaga,
					userId: r,
					zoneId: i
				}),
				getDevelopedAppsSending: () => ({
					type: u.GetDevelopedAppsSending
				}),
				getDevelopedAppsSuccess: r => ({
					type: u.GetDevelopedAppsSuccess,
					developedApps: r
				}),
				getDevelopedAppsFailed: () => ({
					type: u.GetDevelopedAppsFailed
				}),
				getAppInfoAssetsSaga: (r, i, p) => ({
					type: u.GetAppInfoAssetsSaga,
					appIdentifier: r,
					zoneId: i,
					version: p
				}),
				setUpdatableInstalls: r => ({
					type: u.SetUpdatableInstalls,
					updatableInstallsList: r
				}),
				getAppSaga: r => ({
					type: u.GetAppSaga,
					appIdentifier: r
				}),
				getAppSending: () => ({
					type: u.GetAppSending
				}),
				getAppSuccess: r => ({
					type: u.GetAppSuccess,
					app: r
				}),
				getAppFailed: () => ({
					type: u.GetAppFailed
				}),
				clearApp: () => ({
					type: u.ClearApp
				}),
				getAppsSaga: () => ({
					type: u.GetAppsSaga
				}),
				getAppsSending: () => ({
					type: u.GetAppsSending
				}),
				getAppsSuccess: r => ({
					type: u.GetAppsSuccess,
					appsList: r
				}),
				getAppsFailed: () => ({
					type: u.GetAppsFailed
				}),
				getInstallsSaga: r => ({
					type: u.GetInstallsSaga,
					zoneId: r
				}),
				getInstallsSending: () => ({
					type: u.GetInstallsSending
				}),
				getInstallsSuccess: r => ({
					type: u.GetInstallsSuccess,
					installsList: r
				}),
				getInstallsFailed: () => ({
					type: u.GetInstallsFailed
				}),
				getCategoriesSaga: r => ({
					type: u.GetCategoriesSaga,
					queryParams: r
				}),
				getCategoriesSending: () => ({
					type: u.GetCategoriesSending
				}),
				getCategoriesSuccess: r => ({
					type: u.GetCategoriesSuccess,
					categoriesList: r
				}),
				getCategoriesFailed: () => ({
					type: u.GetCategoriesFailed
				}),
				getMetadataSaga: r => ({
					type: u.GetMetadataSaga,
					zoneId: r
				}),
				getMetadataSending: () => ({
					type: u.GetMetadataSending
				}),
				getMetadataSuccess: r => ({
					type: u.GetMetadataSuccess,
					metadata: r
				}),
				getMetadataFailed: () => ({
					type: u.GetMetadataFailed
				}),
				postMetadataSaga: (r, i) => ({
					type: u.PostMetadataSaga,
					zoneId: r,
					data: i
				}),
				postMetadataSending: () => ({
					type: u.PostMetadataSending
				}),
				postMetadataSuccess: r => ({
					type: u.PostMetadataSuccess,
					metadata: r
				}),
				postMetadataFailed: () => ({
					type: u.PostMetadataFailed
				}),
				getRecommendedAppsSaga: (r, i, p) => ({
					type: u.GetRecommendedAppsSaga,
					appsList: r,
					installsList: i,
					metadata: p
				}),
				getRecommendedAppsSending: () => ({
					type: u.GetRecommendedAppsSending
				}),
				getRecommendedAppsSuccess: r => ({
					type: u.GetRecommendedAppsSuccess,
					recommendedAppsList: r
				}),
				getRecommendedAppsFailed: () => ({
					type: u.GetRecommendedAppsFailed
				})
			};

			function n(r = e.w6, i) {
				switch (i.type) {
					case u.ResetState:
						return s({}, e.w6);
					case u.ZoneChangedSaga:
						return s({}, r, {
							installsList: s({}, e.w6.installsList),
							recommendedAppsList: s({}, e.w6.recommendedAppsList),
							metadata: s({}, e.w6.metadata)
						});
					case u.GetAppsSending:
						return s({}, r, {
							appsList: s({}, (0, o.pG)(r.appsList, e.h_))
						});
					case u.GetAppsSuccess:
						return s({}, r, {
							appsList: s({}, (0, o.pG)(r.appsList, e.Jz, i.appsList))
						});
					case u.GetAppsFailed:
						return s({}, r, {
							appsList: s({}, (0, o.pG)(r.appsList, e.yc))
						});
					case u.GetInstallsSending:
						return s({}, r, {
							installsList: s({}, (0, o.pG)(r.installsList, e.h_))
						});
					case u.GetInstallsSuccess:
						return s({}, r, {
							installsList: s({}, (0, o.pG)(r.installsList, e.Jz, i.installsList))
						});
					case u.GetInstallsFailed:
						return s({}, r, {
							installsList: s({}, (0, o.pG)(r.installsList, e.yc))
						});
					case u.GetCategoriesSending:
						return s({}, r, {
							categoriesList: s({}, (0, o.pG)(r.categoriesList, e.h_))
						});
					case u.GetCategoriesSuccess:
						return s({}, r, {
							categoriesList: s({}, (0, o.pG)(r.categoriesList, e.Jz, i.categoriesList))
						});
					case u.GetCategoriesFailed:
						return s({}, r, {
							categoriesList: s({}, (0, o.pG)(r.categoriesList, e.yc))
						});
					case u.GetMetadataSending:
						return s({}, r, {
							metadata: s({}, (0, o.pG)(r.metadata, e.h_))
						});
					case u.GetMetadataSuccess:
						return s({}, r, {
							metadata: s({}, (0, o.pG)(r.metadata, e.Jz, i.metadata))
						});
					case u.GetMetadataFailed:
						return s({}, r, {
							metadata: s({}, (0, o.pG)(r.metadata, e.yc))
						});
					case u.PostMetadataSending:
						return s({}, r, {
							metadata: s({}, (0, o.pG)(r.metadata, e.h_))
						});
					case u.PostMetadataSuccess:
						return s({}, r, {
							metadata: s({}, (0, o.pG)(r.metadata, e.Jz, i.metadata))
						});
					case u.PostMetadataFailed:
						return s({}, r, {
							metadata: s({}, (0, o.pG)(r.metadata, e.yc))
						});
					case u.GetRecommendedAppsSending:
						return s({}, r, {
							recommendedAppsList: s({}, (0, o.pG)(r.recommendedAppsList, e.h_))
						});
					case u.GetRecommendedAppsSuccess:
						return s({}, r, {
							recommendedAppsList: s({}, (0, o.pG)(r.recommendedAppsList, e.Jz, i.recommendedAppsList))
						});
					case u.GetRecommendedAppsFailed:
						return s({}, r, {
							recommendedAppsList: s({}, (0, o.pG)(r.recommendedAppsList, e.yc))
						});
					case u.GetAppSending:
						return s({}, r, {
							app: s({}, (0, o.pG)(r.app, e.h_))
						});
					case u.GetAppSuccess:
						return s({}, r, {
							app: s({}, (0, o.pG)(r.app, e.Jz, i.app))
						});
					case u.GetAppFailed:
						return s({}, r, {
							app: s({}, (0, o.pG)(r.app, e.yc))
						});
					case u.ClearApp:
						return s({}, r, {
							app: {
								value: null,
								status: e._Y.status
							}
						});
					case u.SetUpdatableInstalls:
						return s({}, r, {
							updatableInstallsList: i.updatableInstallsList
						});
					case u.GetDevelopedAppsSending:
						return s({}, r, {
							developedApps: s({}, (0, o.pG)(r.developedApps, e.h_))
						});
					case u.GetDevelopedAppsSuccess:
						return s({}, r, {
							developedApps: s({}, (0, o.pG)(r.developedApps, e.Jz, i.developedApps))
						});
					case u.GetDevelopedAppsFailed:
						return s({}, r, {
							developedApps: s({}, (0, o.pG)(r.developedApps, e.yc))
						});
					default:
						return r
				}
			}
		},
		"../react/pages/caching/tracking.tsx": function(W, v, t) {
			"use strict";
			t.d(v, {
				N: function() {
					return e
				}
			});
			let e = function(o) {
				return o.CACHE_PURGE = "submit custom purge", o.TIERED_CACHE = "select tiered cache topology", o.CACHE_ANALYTICS = "load cache analytics data", o
			}({})
		},
		"../react/pages/d1/routes.ts": function(W, v, t) {
			"use strict";
			t.d(v, {
				H: function() {
					return s
				},
				_: function() {
					return o
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-routes/es/index.js");
			const o = {
					root: (0, e.BC)`/${"accountId"}/workers/d1`,
					createDatabase: (0, e.BC)`/${"accountId"}/workers/d1/create`,
					databaseDetails: (0, e.BC)`/${"accountId"}/workers/d1/databases/${"databaseId"}`,
					databaseSettings: (0, e.BC)`/${"accountId"}/workers/d1/databases/${"databaseId"}/settings`,
					databaseConsole: (0, e.BC)`/${"accountId"}/workers/d1/databases/${"databaseId"}/console`,
					backups: (0, e.BC)`/${"accountId"}/workers/d1/databases/${"databaseId"}/backups`,
					metrics: (0, e.BC)`/${"accountId"}/workers/d1/databases/${"databaseId"}/metrics`,
					timeTravel: (0, e.BC)`/${"accountId"}/workers/d1/databases/${"databaseId"}/time-travel`,
					createTable: (0, e.BC)`/${"accountId"}/workers/d1/databases/${"databaseId"}/createTable`,
					tables: (0, e.BC)`/${"accountId"}/workers/d1/databases/${"databaseId"}/tables`,
					tableDetails: (0, e.BC)`/${"accountId"}/workers/d1/databases/${"databaseId"}/tables/${"tableName"}`,
					tableInsertData: (0, e.BC)`/${"accountId"}/workers/d1/databases/${"databaseId"}/tables/${"tableName"}/new`,
					tableUpdateData: (0, e.BC)`/${"accountId"}/workers/d1/databases/${"databaseId"}/tables/${"tableName"}/${"primaryKeyName"}/${"primaryKeyId"}`
				},
				s = {
					databases: (0, e.BC)`/accounts/${"accountId"}/d1/database`,
					database: (0, e.BC)`/accounts/${"accountId"}/d1/database/${"databaseId"}`,
					databaseLimits: (0, e.BC)`/accounts/${"accountId"}/d1/database/${"databaseId"}/limits`,
					tables: (0, e.BC)`/accounts/${"accountId"}/d1/database/${"databaseId"}/table`,
					table: (0, e.BC)`/accounts/${"accountId"}/d1/database/${"databaseId"}/table/${"tableName"}`,
					query: (0, e.BC)`/accounts/${"accountId"}/d1/database/${"databaseId"}/query`,
					raw: (0, e.BC)`/accounts/${"accountId"}/d1/database/${"databaseId"}/raw`,
					backups: (0, e.BC)`/accounts/${"accountId"}/d1/database/${"databaseId"}/backup`,
					restore: (0, e.BC)`/accounts/${"accountId"}/d1/database/${"databaseId"}/backup/${"backupId"}/restore`,
					download: (0, e.BC)`/accounts/${"accountId"}/d1/database/${"databaseId"}/backup/${"backupId"}/download`,
					bookmark: (0, e.BC)`/accounts/${"accountId"}/d1/database/${"databaseId"}/time_travel/bookmark`,
					restoreBookmark: (0, e.BC)`/accounts/${"accountId"}/d1/database/${"databaseId"}/time_travel/restore`
				}
		},
		"../react/pages/dns/dns-records/tracking.ts": function(W, v, t) {
			"use strict";
			t.d(v, {
				U: function() {
					return e
				},
				X: function() {
					return o
				}
			});
			let e = function(s) {
				return s.DNS_RECORD_CREATE = "create DNS records", s.DNS_RECORD_UPDATE = "update DNS records", s.DNS_RECORD_DELETE = "delete DNS records", s.ZONE_TRANSFER_SUCCESS = "successful outgoing zone transfer", s
			}({});
			const o = {
				put: e.DNS_RECORD_UPDATE,
				patch: e.DNS_RECORD_UPDATE,
				delete: e.DNS_RECORD_DELETE
			}
		},
		"../react/pages/email/types.ts": function(W, v, t) {
			"use strict";
			t.d(v, {
				BB: function() {
					return o
				},
				Pm: function() {
					return s
				},
				UZ: function() {
					return e
				}
			});
			let e = function(l) {
				return l.ROOT = "root", l.DSTADDRS_CARD = "dstaddrs_card", l.RULES_CARD = "rules_card", l.CATCHALL_CARD = "catchall_card", l.SETTINGS_PAGE = "settings_page", l.WORKERS_PAGE = "workers_page", l
			}({});
			const o = {
				zone: "emailRoutingZone",
				catchAllRule: "emailRoutingCatchAllRule",
				rule: "emailRoutingRule",
				rules: "emailRoutingRules",
				dstAddress: "emailRoutingDestinationAddress",
				dstAddresses: "emailRoutingDestinationAddresses",
				dnsRecord: "emailRoutingDnsRecord",
				dnsRecords: "emailRoutingDnsRecords"
			};
			let s = function(l) {
				return l[l.Verified = 0] = "Verified", l[l.Pending = 1] = "Pending", l[l.Missing = 2] = "Missing", l[l.WorkerNotFound = 3] = "WorkerNotFound", l[l.Unknown = 4] = "Unknown", l[l.Loading = 5] = "Loading", l
			}({});
			const d = {
				dmarcReports: "emailSecurityDmarcReports"
			}
		},
		"../react/pages/home/alerts/config.tsx": function(W, v, t) {
			"use strict";
			t.d(v, {
				jk: function() {
					return T
				},
				w8: function() {
					return O
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-routes/es/index.js"),
				o = t("../react/pages/home/alerts/integrations/pagerduty/routes.ts"),
				s = t("../react/pages/home/alerts/integrations/webhooks/routes.ts"),
				d = t("../react/pages/home/alerts/integrations/redux/entities.ts");

			function l(h) {
				for (var S = 1; S < arguments.length; S++) {
					var g = arguments[S] != null ? Object(arguments[S]) : {},
						C = Object.keys(g);
					typeof Object.getOwnPropertySymbols == "function" && C.push.apply(C, Object.getOwnPropertySymbols(g).filter(function(M) {
						return Object.getOwnPropertyDescriptor(g, M).enumerable
					})), C.forEach(function(M) {
						m(h, M, g[M])
					})
				}
				return h
			}

			function m(h, S, g) {
				return S = a(S), S in h ? Object.defineProperty(h, S, {
					value: g,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : h[S] = g, h
			}

			function a(h) {
				var S = u(h, "string");
				return typeof S == "symbol" ? S : String(S)
			}

			function u(h, S) {
				if (typeof h != "object" || h === null) return h;
				var g = h[Symbol.toPrimitive];
				if (g !== void 0) {
					var C = g.call(h, S || "default");
					if (typeof C != "object") return C;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (S === "string" ? String : Number)(h)
			}
			const E = "Notifications",
				n = "notification",
				r = (0, e.BC)`/${"accountId"}`,
				i = (0, e.BC)`${r}/notifications`,
				p = (0, e.BC)`${i}/destinations`,
				c = (0, e.BC)`${i}/create`,
				_ = (0, e.BC)`${c}/${"alertType"}`,
				y = (0, e.BC)`${i}/edit/${"alertId"}`,
				T = l({
					account: r,
					alerts: i,
					destinations: p,
					createAlert: c,
					createAlertWithSelection: _,
					editAlert: y
				}, o._j, s._j),
				O = l({
					alert: "accountAlert",
					alerts: "accountAlerts",
					availableAlerts: "availableAlerts",
					availableAlertsForProduct: "availableAlertsForProduct",
					alertsHistory: "accountAlertsHistory"
				}, d.w)
		},
		"../react/pages/home/alerts/integrations/pagerduty/routes.ts": function(W, v, t) {
			"use strict";
			t.d(v, {
				_j: function() {
					return m
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-routes/es/index.js");
			const o = (0, e.BC)`/${"accountId"}/notifications`,
				s = (0, e.BC)`${o}/pagerduty/connect`,
				d = (0, e.BC)`${o}/pagerduty/register`,
				l = (0, e.BC)`${o}/pagerduty`,
				m = {
					pagerDutyConnect: s,
					pagerDutyRegister: d,
					pagerDutyList: l
				};
			var a = null
		},
		"../react/pages/home/alerts/tracking.ts": function(W, v, t) {
			"use strict";
			t.d(v, {
				y: function() {
					return e
				}
			});
			let e = function(o) {
				return o.SECONDARY_DNS_NOTIFICATION_CREATE = "create secondary dns error notification", o.SECONDARY_DNS_NOTIFICATION_UPDATE = "update secondary dns error notification", o.SECONDARY_DNS_NOTIFICATION_DELETE = "delete secondary dns error notification", o
			}({})
		},
		"../react/pages/home/configurations/dns-settings/tracking.ts": function(W, v, t) {
			"use strict";
			t.d(v, {
				Y: function() {
					return e
				}
			});
			let e = function(o) {
				return o.PEER_DNS_CREATE = "create peer server", o.PEER_DNS_UPDATE = "update peer server", o.PEER_DNS_DELETE = "delete peer server", o.ZONE_TRANSFER_ENABLE = "enable outgoing zone transfer", o.ZONE_TRANSFER_DISABLE = "disable outgoing zone transfer", o.ZONE_TRANSFER_SUCCESS = "successful outgoing zone transfer", o
			}({})
		},
		"../react/pages/home/configurations/lists/tracking.ts": function(W, v, t) {
			"use strict";
			t.d(v, {
				y: function() {
					return e
				}
			});
			let e = function(o) {
				return o.CREATE_LIST = "create list", o.DELETE_LIST = "delete list", o.ADD_LIST_ITEM = "add list item", o.DELETE_LIST_ITEM = "delete list item", o
			}({})
		},
		"../react/pages/home/domain-registration/bulk-transfer-util.ts": function(W, v, t) {
			"use strict";
			t.d(v, {
				AA: function() {
					return q
				},
				AN: function() {
					return it
				},
				AY: function() {
					return Te
				},
				Ac: function() {
					return Le
				},
				Am: function() {
					return T
				},
				B2: function() {
					return $
				},
				BB: function() {
					return R
				},
				BF: function() {
					return xe
				},
				BQ: function() {
					return Ae
				},
				E8: function() {
					return G
				},
				Fl: function() {
					return ae
				},
				Fu: function() {
					return P
				},
				Gc: function() {
					return at
				},
				Hc: function() {
					return jt
				},
				IO: function() {
					return Qe
				},
				JK: function() {
					return N
				},
				K: function() {
					return C
				},
				LI: function() {
					return Ge
				},
				LX: function() {
					return Me
				},
				L_: function() {
					return ze
				},
				Ly: function() {
					return Ve
				},
				MR: function() {
					return X
				},
				Mj: function() {
					return Ee
				},
				NB: function() {
					return qe
				},
				Oe: function() {
					return Rt
				},
				Or: function() {
					return I
				},
				P5: function() {
					return Je
				},
				PE: function() {
					return $e
				},
				Pd: function() {
					return vt
				},
				Pk: function() {
					return z
				},
				Pp: function() {
					return Fe
				},
				Q1: function() {
					return L
				},
				Qr: function() {
					return Re
				},
				Qv: function() {
					return Ke
				},
				Rp: function() {
					return Ne
				},
				S7: function() {
					return bt
				},
				Sh: function() {
					return Ce
				},
				Sl: function() {
					return $t
				},
				TZ: function() {
					return x
				},
				Tg: function() {
					return me
				},
				Tp: function() {
					return lt
				},
				Uy: function() {
					return et
				},
				Vw: function() {
					return K
				},
				W3: function() {
					return V
				},
				WR: function() {
					return mt
				},
				WX: function() {
					return Se
				},
				XF: function() {
					return gt
				},
				Xb: function() {
					return ee
				},
				ZB: function() {
					return A
				},
				Zs: function() {
					return Be
				},
				_f: function() {
					return Ze
				},
				b4: function() {
					return he
				},
				bc: function() {
					return Kt
				},
				c2: function() {
					return F
				},
				cE: function() {
					return ve
				},
				dh: function() {
					return Ue
				},
				fE: function() {
					return Oe
				},
				g7: function() {
					return we
				},
				hO: function() {
					return Ye
				},
				hV: function() {
					return ut
				},
				hk: function() {
					return O
				},
				hr: function() {
					return de
				},
				it: function() {
					return We
				},
				j3: function() {
					return rt
				},
				jN: function() {
					return ge
				},
				jo: function() {
					return Wt
				},
				k3: function() {
					return Mt
				},
				m8: function() {
					return ie
				},
				nm: function() {
					return k
				},
				oW: function() {
					return ue
				},
				pH: function() {
					return Z
				},
				pi: function() {
					return Y
				},
				r4: function() {
					return zt
				},
				rI: function() {
					return oe
				},
				s7: function() {
					return dt
				},
				sg: function() {
					return re
				},
				tB: function() {
					return _
				},
				tN: function() {
					return je
				},
				u_: function() {
					return Gt
				},
				vV: function() {
					return ot
				},
				vc: function() {
					return se
				}
			});
			var e = t("../../../../node_modules/lodash/lodash.js"),
				o = t.n(e),
				s = t("../../../../node_modules/moment/moment.js"),
				d = t.n(s),
				l = t("../../../common/util/types/src/api/domain.ts"),
				m = t("../../../../node_modules/@cloudflare/util-regex/es/index.js"),
				a = t("../react/utils/url.ts"),
				u = t("../react/pages/home/domain-registration/config.ts"),
				E = t("../react/pages/home/domain-registration/registrar.translations.ts"),
				n = t("../react/pages/home/domain-registration/types.ts");

			function r(f) {
				for (var D = 1; D < arguments.length; D++) {
					var _e = arguments[D] != null ? Object(arguments[D]) : {},
						be = Object.keys(_e);
					typeof Object.getOwnPropertySymbols == "function" && be.push.apply(be, Object.getOwnPropertySymbols(_e).filter(function(He) {
						return Object.getOwnPropertyDescriptor(_e, He).enumerable
					})), be.forEach(function(He) {
						i(f, He, _e[He])
					})
				}
				return f
			}

			function i(f, D, _e) {
				return D = p(D), D in f ? Object.defineProperty(f, D, {
					value: _e,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : f[D] = _e, f
			}

			function p(f) {
				var D = c(f, "string");
				return typeof D == "symbol" ? D : String(D)
			}

			function c(f, D) {
				if (typeof f != "object" || f === null) return f;
				var _e = f[Symbol.toPrimitive];
				if (_e !== void 0) {
					var be = _e.call(f, D || "default");
					if (typeof be != "object") return be;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (D === "string" ? String : Number)(f)
			}

			function _(f) {
				return f.filter(D => D.isSelected).reduce((D, {
					name: _e,
					fees: be,
					isZoneEntitlementPresent: He
				}) => He || !(0, e.isNumber)(be == null ? void 0 : be.transfer_fee) ? D : Le(_e) ? D + (be == null ? void 0 : be.transfer_fee) * 2 : D + (be == null ? void 0 : be.transfer_fee), 0)
			}

			function y(f) {
				return f.filter(D => D.registrar.toLowerCase() === "godaddy")
			}
			const T = "MMM D, YYYY";

			function O(f, D, _e, be) {
				var He, ft, Ct, ht, kt, It, ct, Pt, Tt, At, St, Lt;
				const tt = f[D.name],
					Vt = () => Le(D.name) ? d()(D.expires_at).add(2, "years").format(T) : d()(D.expires_at).add(1, "year").format(T);
				return r({
					name: D.name,
					zone: tt,
					entitlements: _e,
					registryCheck: be,
					nameservers: D.name_servers,
					isAvailable: D.available,
					lastKnownStatus: D.last_known_status,
					authCode: D.auth_code,
					isEnterpriseZone: (tt == null || (He = tt.plan) === null || He === void 0 ? void 0 : He.legacy_id) === "enterprise",
					isActiveZone: (tt == null ? void 0 : tt.status) === "active",
					corResponsesPending: D.cor_responses_pending,
					isCorLocked: D.cor_locked,
					corLockedUntil: D.cor_locked_until ? d()(D.cor_locked_until).format(T) : null,
					isFullZone: (tt == null ? void 0 : tt.type) == n.xd.Full,
					isLocked: D.locked,
					registrar: D.current_registrar || u.JM,
					zoneId: tt == null ? void 0 : tt.id,
					currentExpiration: d()(D.expires_at).format(T),
					newExpiration: Vt(),
					lastEntitledAt: D.last_entitled_at ? new Date(D.last_entitled_at) : null,
					isZoneEntitlementPresent: Array.isArray(_e) && !!_e.find(Bt => Bt.id === u.g5 && Bt.allocation.value === !0),
					transferAuthCode: "",
					authCodeStatus: D.transfer_in && g(D.transfer_in) || n.BJ.Pending,
					autoTransferStatus: n._n.Pending,
					transferConditions: D.transfer_conditions,
					transferApiCallStatus: n.Yh.Pending,
					transferIn: D.transfer_in,
					transferOut: D.transfer_out,
					autoRenew: D.auto_renew === !0,
					lastTransferredAt: D.last_transferred_at,
					createdAt: D.created_at,
					paymentExpiresAt: d()(D.payment_expires_at).isValid() ? d()(D.payment_expires_at) : d()(D.expires_at).isValid() ? d()(D.expires_at) : "",
					contactIds: {
						[n.l2.Administrator]: (ft = D.contacts) === null || ft === void 0 || (Ct = ft.administrator) === null || Ct === void 0 ? void 0 : Ct.id,
						[n.l2.Billing]: (ht = D.contacts) === null || ht === void 0 || (kt = ht.billing) === null || kt === void 0 ? void 0 : kt.id,
						[n.l2.Registrant]: (It = D.contacts) === null || It === void 0 || (ct = It.registrant) === null || ct === void 0 ? void 0 : ct.id,
						[n.l2.Technical]: (Pt = D.contacts) === null || Pt === void 0 || (Tt = Pt.technical) === null || Tt === void 0 ? void 0 : Tt.id
					},
					landing: D.landing,
					privacy: D.privacy,
					whois: D.whois,
					emailVerified: D.email_verified,
					materialChanges: M(D.material_changes),
					corChanges: D.cor_changes ? R(Object.assign(r({}, S), D.cor_changes)) : {},
					registryStatuses: D.registry_statuses ? D.registry_statuses.split(",") : null,
					domainProtectionServices: {
						status: (At = D.domain_protection_services) === null || At === void 0 ? void 0 : At.status
					},
					deletion: {
						isDeletable: D == null || (St = D.deletion) === null || St === void 0 ? void 0 : St.is_deletable
					},
					premiumType: D == null ? void 0 : D.premium_type,
					fees: D == null ? void 0 : D.fees
				}, D.domain_move && {
					domainMove: {
						ineligibilityReasons: (Lt = D.domain_move) === null || Lt === void 0 ? void 0 : Lt.ineligibility_reasons
					}
				}, D.actionable_metadata && {
					actionableMetadata: h(D.actionable_metadata)
				}, D.policies && {
					policies: r({}, D.policies.suspension && {
						suspension: {
							parked: D.policies.suspension.parked,
							parkingReason: D.policies.suspension.parking_reason,
							paymentExpired: D.policies.suspension.payment_expired
						}
					})
				})
			}

			function h(f) {
				return f.map(D => ({
					accountContext: D.account_context,
					createdAt: D.created_at,
					expiresAt: D.expires_at,
					sentAt: D.sent_at,
					status: D.status,
					type: D.type
				}))
			}
			const S = {
				id: "",
				first_name: "",
				organization: "",
				address: "",
				city: "",
				state: "",
				zip: "",
				country: "",
				phone: "",
				email: "",
				fax: "",
				last_name: "",
				address2: "",
				email_verified: "",
				extensions: {}
			};

			function g(f) {
				switch (f.enter_auth_code) {
					case n.lW.OK:
						return n.BJ.Valid;
					case n.lW.NEEDED:
						return n.BJ.Pending;
					case n.lW.UNKNOWN:
						return n.BJ.Pending;
					case n.lW.REJECTED:
						return n.BJ.Error;
					case n.lW.TRYING:
						return n.BJ.Pending
				}
				return n.BJ.Pending
			}

			function C(f) {
				let D = f.extensions;
				(D == null ? void 0 : D.application_purpose) && (D == null ? void 0 : D.nexus_category) && (f.extensions = {
					nexusCategory: D.nexus_category,
					applicationPurpose: D.application_purpose
				});
				let _e = r({}, typeof f.id == "string" ? {
					id: f.id
				} : {}, {
					first_name: f.firstName,
					organization: f.organization,
					address: f.address1,
					city: f.city,
					state: f.state || "N/A",
					zip: f.zip,
					country: f.country,
					phone: f.phone,
					email: f.email,
					fax: "",
					last_name: f.lastName,
					address2: f.address2,
					email_verified: f.emailVerified
				}, f.extensions ? {
					extensions: {
						nexus_category: f.extensions.nexusCategory,
						application_purpose: f.extensions.applicationPurpose
					}
				} : {});
				return Pe(_e)
			}

			function M(f) {
				let D = [];
				const _e = {
					id: "",
					first_name: "firstName",
					organization: "organization",
					address: "address1",
					city: "city",
					state: "state",
					zip: "zip",
					country: "country",
					phone: "phone",
					email: "email",
					fax: "fax",
					last_name: "lastName",
					address2: "address2",
					email_verified: "emailVerified",
					extensions: null
				};
				for (const be in f) {
					const He = f[be],
						ft = _e[He];
					D.push(ft)
				}
				return D
			}
			const b = f => {
				if (!f) return null;
				let D = f;
				return f.includes("C31") && (D = "C31"), f.includes("C32") && (D = "C32"), D
			};

			function R(f) {
				return r({}, typeof f.id == "string" ? {
					id: f.id
				} : {}, {
					firstName: f.first_name,
					organization: f.organization,
					address1: f.address,
					city: f.city,
					state: f.state,
					zip: f.zip,
					country: f.country,
					phone: f.phone.trim(),
					email: f.email.trim(),
					lastName: f.last_name,
					address2: f.address2,
					emailVerified: f.email_verified
				}, f.extensions ? {
					extensions: {
						nexusCategory: b(f.extensions.nexus_category),
						applicationPurpose: f.extensions.application_purpose
					}
				} : {})
			}

			function A(f = {}) {
				const D = {
					name: "",
					zoneId: "",
					zone: r({
						id: "",
						name: "",
						status: "pending",
						plan: r({
							id: "free",
							legacy_id: "free",
							name: "Free",
							price: 0,
							frequency: "monthly",
							currency: "usd",
							is_subscribed: !0,
							can_subscribe: !0,
							legacy_discount: !1,
							externally_managed: !1
						}, f.zone && f.zone.plan || {}),
						type: n.xd.Full
					}, f.zone || {}),
					emailVerified: !1,
					nameservers: [],
					isCorLocked: !1,
					corLockedUntil: null,
					corResponsesPending: 0,
					isEnterpriseZone: !1,
					autoRenew: !1,
					isActiveZone: !0,
					isFullZone: !0,
					isAvailable: !1,
					isLocked: !0,
					currentExpiration: "",
					newExpiration: "",
					lastEntitledAt: null,
					isZoneEntitlementPresent: null,
					registrar: "",
					autoTransferStatus: n._n.Pending,
					transferAuthCode: "",
					authCodeStatus: n.BJ.Pending,
					transferApiCallStatus: n.Yh.Pending,
					transferConditions: r({
						eligible: !0,
						exists: !0,
						not_premium: !0,
						not_secure: !0,
						not_started: !0,
						not_waiting: !0,
						supported_tld: !0
					}, f.transferConditions || {}),
					transferIn: r({
						unlock_domain: n.lW.UNKNOWN,
						disable_privacy: n.lW.UNKNOWN,
						enter_auth_code: n.lW.UNKNOWN,
						approve_transfer: n.lW.UNKNOWN,
						accept_foa: n.lW.UNKNOWN,
						can_cancel_transfer: !1
					}, f.transferIn || {}),
					lastTransferredAt: "",
					paymentExpiresAt: "",
					contactIds: {},
					landing: {
						eligible: !1,
						enabled: !1
					},
					whois: {
						raw: ""
					},
					privacy: !0,
					materialChanges: [],
					corChanges: {},
					registryStatuses: null,
					deletion: {
						isDeletable: !1
					},
					premiumType: n.Vs.Not_Premium,
					fees: null,
					policies: {
						suspension: {
							parked: !1,
							parkingReason: null,
							paymentExpired: !1
						}
					}
				};
				return Object.assign(D, f)
			}

			function L(f = {}) {
				return Object.assign({
					firstName: "",
					lastName: "",
					address1: "",
					address2: "",
					city: "",
					state: "",
					zip: "",
					country: "",
					organization: "",
					phone: "",
					email: "",
					emailVerified: !1,
					extensions: void 0
				}, f)
			}

			function P(f) {
				const D = u.Py.concat(u.ui).reduce((_e, be) => r({}, _e, {
					[be]: []
				}), {});
				return f.forEach(_e => {
					let be = H(_e.registrar);
					be in D || (be = u.ui), re(_e.name) && (be = "uk"), D[be].push(_e)
				}), Object.keys(D).sort((_e, be) => _e.localeCompare(be)).map(_e => ({
					registrar: _e,
					domains: D[_e]
				})).filter(_e => _e.domains.length > 0)
			}

			function H(f) {
				return f == null ? void 0 : f.toLowerCase().replace(/\s|,|\./g, "")
			}

			function K(f) {
				if (!f || !f.registrar) return "unknown";
				if (re(f.name)) return "uk";
				const D = H(f.registrar);
				return D in u.gM ? D : "unknown"
			}
			const Q = [];

			function pe(f) {
				return Q.some(D => f.endsWith("." + D))
			}

			function te(f) {
				return !f.isEnterpriseZone || !Array.isArray(f.entitlements) ? !1 : !!f.entitlements.find(({
					id: D,
					allocation: _e
				}) => D === u.g5 && _e.value === !0)
			}

			function Y(f) {
				var D;
				const _e = [n.rj.CLIENT_HOLD, n.rj.SERVER_HOLD, n.rj.SERVER_TRANSFER_PROHIBITED, n.rj.PENDING_DELETE, n.rj.PENDING_TRANSFER, n.rj.CLIENT_TRANSFER_PROHIBITED];
				let be = !1,
					He = null;
				return (D = f.registryStatuses) === null || D === void 0 || D.some(ft => {
					_e.includes(ft) && (He = ft, be = !0)
				}), [be, He]
			}

			function ie(f, D = !1) {
				if (!f) return [!1, E.keys.cannot_transfer_default];
				if (f.zone.status !== "active") return [!1, E.keys.cannot_transfer_zone_not_active];
				if (!f.isFullZone && !te(f)) return [!1, E.keys.cannot_transfer_zone_not_eligible];
				if (f.registrar === "Cloudflare") return [!1, E.keys.cannot_transfer_domain_on_cf];
				if (f.isAvailable) return [!1, E.keys.cannot_transfer_domain_available];
				if (!f.transferConditions) return [!1, E.keys.cannot_transfer_domain_transfer_conditions];
				if (!D && et(f == null ? void 0 : f.premiumType)) return [!1, E.keys.cannot_transfer_domain_premium];
				if (Z(f)) return [!1, E.keys.cannot_transfer_domain_transfer_in_progress];
				let _e;
				for (_e in f.transferConditions)
					if (_e !== "not_premium" && !f.transferConditions[_e]) return [!1, E.keys.cannot_transfer_domain_transfer_conditions];
				if (pe(f.name)) return [!1, E.keys.cannot_transfer_domain_tld_not_supported];
				const [be, He] = Y(f);
				return be && He ? [!1, E.keys.cannot_transfer_domain_registry_status[He]] : [!0, ""]
			}

			function Z(f) {
				var D, _e;
				return !!f.transferIn && !((D = f.transferConditions) === null || D === void 0 ? void 0 : D.not_started) && !!(re(f.name) || ((_e = f.registryStatuses) === null || _e === void 0 ? void 0 : _e.includes(n.rj.PENDING_TRANSFER)))
			}

			function j(f) {
				return !!f.registrar && !!f.currentExpiration
			}

			function $(f, D = !1) {
				const [_e] = ie(f, D);
				return j(f) ? ke(f) ? n.M5.InProgressOrOnCF : _e ? n.M5.Supported : n.M5.Unsupported : n.M5.Unknown
			}

			function F(f) {
				return f.transferIn && [n.lW.REJECTED, n.lW.NEEDED].includes(f.transferIn.enter_auth_code) || !1
			}

			function X(f) {
				return f.registrar === "Cloudflare"
			}

			function oe(f) {
				return !!(f == null ? void 0 : f.includes(n.rj.AUTO_RENEW_PERIOD))
			}

			function Ee(f) {
				return !!(f == null ? void 0 : f.includes(n.rj.PENDING_TRANSFER))
			}
			const B = "Invalid date";

			function I(f) {
				return f.newExpiration === B ? "Unavailable" : f.newExpiration
			}

			function x(f) {
				return f.currentExpiration === B ? "Unavailable" : f.currentExpiration
			}

			function q(f) {
				return f.substring(f.indexOf("."))
			}

			function ee(f = "") {
				return f.indexOf(".") !== -1 ? f.substring(0, f.indexOf(".")) : f
			}

			function de(f) {
				return f.map(D => D.name).map(D => q(D)).filter((D, _e, be) => !be.includes(D, _e + 1))
			}

			function he(f) {
				if (u.no) return [!0, ""];
				if (!X(f)) return [!1, n.ok.NotOnCF];
				if (f.isCorLocked) return [!1, f.corLockedUntil ? n.ok.CorLockedUntil : n.ok.CorLock];
				if (f.lastTransferredAt) {
					const D = d()(f.lastTransferredAt),
						_e = d().duration(d()().diff(D)).as("days"),
						be = re(f.name);
					if (_e < (be ? 1 : 60)) return [!1, be ? n.ok.RecentTransferUK : n.ok.RecentTransfer]
				}
				if (f.createdAt) {
					const D = d()(f.createdAt);
					if (d().duration(d()().diff(D)).as("days") < 60) return [!1, n.ok.RecentCreation]
				}
				return [!0, ""]
			}

			function Se(f) {
				return !!(u.Bc || f.transferOut)
			}

			function ke(f) {
				return we(f) || X(f)
			}

			function je(f) {
				return !we(f) && X(f)
			}

			function we(f) {
				return !f || f.lastKnownStatus === "pendingTransfer" || f.lastKnownStatus === "transferFOAPending" || !X(f) && f.transferConditions && !f.transferConditions.not_started || !1
			}

			function $e(f) {
				return !(pe(f.name) || f.transferConditions && !f.transferConditions.supported_tld)
			}

			function Ke(f) {
				return (f == null ? void 0 : f.includes("/")) ? !0 : f.split("").some(D => D.charCodeAt(0) > 123)
			}

			function z(f) {
				switch (f) {
					case "1&1internetse":
						return "1&1 Ionos";
					case "enom":
						return "Enom";
					case "godaddycomllc":
						return "GoDaddy";
					case "namecheap":
						return "Namecheap";
					case "networksolutions":
						return "Network Solutions";
					case "uk":
						return "UK"
				}
			}

			function se(f) {
				return d()(f.paymentExpiresAt).isBefore(d()())
			}

			function ge(f) {
				return f.transferIn && f.transferIn.enter_auth_code === n.lW.REJECTED || !1
			}

			function N(f) {
				const D = ["CU", "KP", "IR", "SY"];
				return f.filter(_e => !D.includes(_e.code))
			}

			function me(f) {
				if (!!f) return `${f.charAt(0).toUpperCase()}${f.slice(1)}${f.charAt(f.length-1)==="."?"":"."}`
			}

			function Pe(f) {
				const D = {};
				for (const [_e, be] of Object.entries(f)) {
					if (be && typeof be == "string") {
						Object.assign(D, {
							[_e]: be.trim()
						});
						continue
					}
					Object.assign(D, {
						[_e]: be
					})
				}
				return D
			}

			function Be(f) {
				return d()(f).add(40, "days")
			}

			function ze(f) {
				const D = f.paymentExpiresAt || f.payment_expires_at,
					_e = Be(D);
				return d()().isBetween(D, _e)
			}

			function Oe(f) {
				var D;
				return !(f == null ? void 0 : f.registryStatuses) || !Array.isArray(f == null ? void 0 : f.registryStatuses) && !(0, e.isString)(f == null ? void 0 : f.registryStatuses) ? !1 : (D = f.registryStatuses) === null || D === void 0 ? void 0 : D.includes(n.rj.REDEMPTION_PERIOD)
			}

			function Ue(f) {
				var D;
				return !(f == null ? void 0 : f.registryStatuses) || !Array.isArray(f == null ? void 0 : f.registryStatuses) && !(0, e.isString)(f == null ? void 0 : f.registryStatuses) ? !1 : (D = f.registryStatuses) === null || D === void 0 ? void 0 : D.includes(n.rj.PENDING_DELETE)
			}

			function Fe(f) {
				return [".us"].includes(f)
			}

			function We(f) {
				return [".us"].includes(f)
			}

			function Ye(f) {
				switch (f) {
					case ".us":
						return fe();
					default:
						return []
				}
			}

			function V(f) {
				switch (f) {
					case ".us":
						return ce;
					default:
						return {}
				}
			}
			const ce = {
				[n.A9.P3]: [n.Fi.C11]
			};

			function fe() {
				return [{
					name: n.IP.application_purpose,
					label: n.rb.application_purpose,
					options: Object.entries(n.A9).map(([f, D]) => ({
						value: f,
						label: D
					})),
					display: {
						columns: 3,
						rowsOnDesktop: 3
					}
				}, {
					name: n.IP.nexus_category,
					label: n.rb.nexus_category,
					options: Object.entries(n.Fi).map(([f, D]) => ({
						value: f,
						label: D
					}))
				}]
			}

			function Me(f, D, _e) {
				return D[D.length - 1][_e] === f[_e]
			}

			function Re(f) {
				return Boolean(Object.keys(f).length === 0)
			}

			function xe(f) {
				return d()().add(f, "year").format(T)
			}

			function Ze({
				accountName: f
			}) {
				var D;
				const _e = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+/;
				return ((D = f.toLowerCase().match(_e)) === null || D === void 0 ? void 0 : D[0]) || ""
			}

			function ot(f) {
				return !!f.match(m.default.email)
			}

			function lt(f) {
				return f === l.W7.PENDING_UPDATE
			}

			function at(f) {
				return f ? Object.values(l.wR).filter(D => D !== l.wR.OFFBOARDED).includes(f) : !1
			}

			function dt(f) {
				return f ? [l.wR.LOCKED, l.wR.ONBOARDED, l.wR.ONBOARDING_INITIATED, l.wR.PENDING_REGISTRY_LOCK, l.wR.PENDING_REGISTRY_UNLOCK, l.wR.PENDING_UNLOCK_APPROVAL].includes(f) : !1
			}

			function pt(f) {
				return f ? l.wR.UNLOCKED === f : !1
			}

			function st(f) {
				return f ? l.wR.LOCKED === f : !1
			}

			function Ge(f) {
				return f ? l.wR.PENDING_REGISTRY_LOCK === f : !1
			}

			function Ae(f) {
				return f ? [l.wR.PENDING_REGISTRY_UNLOCK, l.wR.PENDING_UNLOCK_APPROVAL].includes(f) : !1
			}

			function Qe(f) {
				var D;
				return !1
			}

			function mt(f) {
				var D;
				return !1
			}

			function it(f) {
				var D;
				return !1
			}

			function gt(f) {
				var D;
				return !1
			}

			function G(f) {
				var D;
				return !1
			}

			function ue(f) {
				return Object.keys(l.wR).find(D => l.wR[D].toLowerCase() === f.toLowerCase())
			}

			function Te(f) {
				var D;
				const _e = (D = ue(f)) === null || D === void 0 ? void 0 : D.toLowerCase();
				return _e ? E.keys.protection_status[_e] : E.keys.protection_status.unknown
			}

			function ne(f) {
				return ["com", "net"].includes(f)
			}

			function ae(f) {
				const D = (0, a.pu)(f);
				return ne(D) ? l.wR.PENDING_REGISTRY_LOCK : l.wR.LOCKED
			}

			function Ce(f) {
				return (0, a.pu)(f) === "co" ? 5 : 10
			}

			function k(f, D) {
				return D ? 1 : (0, a.pu)(f) === "co" ? 5 : (0, a.pu)(f) === "org" ? 1 : 10
			}

			function re(f) {
				return (0, a.pu)(f) === "uk"
			}

			function ve(f) {
				return (0, a.pu)(f) === "us"
			}

			function Le(f) {
				return (0, a.pu)(f) === "ai"
			}

			function Ne(f) {
				return d()(f).isValid()
			}

			function Ve(f) {
				return ["app", "boo", "channel", "dad", "day", "dev", "esq", "foo", "how", "mov", "new", "nexus", "page", "phd", "prof", "rsvp", "soy"].includes(f)
			}

			function Je(f) {
				return !!(f == null ? void 0 : f.id)
			}

			function qe(f) {
				return f ? ["restorationPending", "restorationAuthFailure", "restorationFailure", "restorationSuccess", "restorationRenewPending", "restorationRenewFailure", "restorationRenewSettleFailure", "restorationRenewSuccess", "restorationPendingZoneCreate", "restorationPendingZoneActivate", "restorationFailedZoneCreate", "restorationFailedZoneActivate", "restorationZoneCreateSuccess", "restorationZoneActivateSuccess", "restorationSuccessWithoutReport"].includes(f) : !1
			}

			function vt(f) {
				return f ? ["restorationAuthFailure", "restorationFailure", "restorationRenewFailure", "restorationRenewSettleFailure", "restorationRenewSuccess"].includes(f) : !1
			}

			function ut(f) {
				var D;
				return (f == null ? void 0 : f.lastKnownStatus) ? (D = f.lastKnownStatus) === null || D === void 0 ? void 0 : D.includes("deletionIrredeemable") : !1
			}

			function et(f) {
				switch (f) {
					case n.Vs.NonStandard_NonStandard:
					case n.Vs.NonStandard_Standard:
					case n.Vs.Standard_Standard:
					case n.Vs.Standard_NonStandard:
						return !0;
					case n.Vs.Not_Premium:
					default:
						return !1
				}
			}

			function jt(f) {
				if (!f || !f.message) return n.OJ.DEFAULT;
				const {
					message: D
				} = f;
				switch (!0) {
					case D.includes("feature disabled"):
						return n.OJ.FEATURE_DISABLED;
					case D.includes("email unverified"):
						return n.OJ.EMAIL_UNVERIFIED;
					case D.includes("account blocked"):
						return n.OJ.ACCOUNT_BLOCKED;
					default:
						return n.OJ.DEFAULT
				}
			}

			function bt(f) {
				var D, _e;
				return !!(((D = f.policies) === null || D === void 0 || (_e = D.suspension) === null || _e === void 0 ? void 0 : _e.parked) && f.policies.suspension.parkingReason)
			}

			function rt(f) {
				var D, _e;
				return bt(f) && ((D = f.policies) === null || D === void 0 || (_e = D.suspension) === null || _e === void 0 ? void 0 : _e.parkingReason) === n.qK.EMAIL_VERIFICATION
			}

			function Mt(f) {
				var D, _e;
				return bt(f) && ((D = f.policies) === null || D === void 0 || (_e = D.suspension) === null || _e === void 0 ? void 0 : _e.parkingReason) === n.qK.TRUST_AND_SAFETY
			}

			function $t(f) {
				var D;
				return !((D = f.domainMove) === null || D === void 0 ? void 0 : D.ineligibilityReasons.length)
			}

			function Rt(f) {
				var D, _e;
				return !!((D = f.domainMove) === null || D === void 0 || (_e = D.ineligibilityReasons) === null || _e === void 0 ? void 0 : _e.includes(n.Ah.DOMAIN_EXISTING_PENDING_REQUEST))
			}

			function Nt(f) {
				var D;
				return (D = f.actionableMetadata) === null || D === void 0 ? void 0 : D.find(_e => _e.type === n.wg.DOMAIN_MOVE)
			}

			function Wt(f) {
				const D = Nt(f);
				return (D == null ? void 0 : D.status) === "pending" && D.accountContext === n._5.GAINING
			}

			function Gt(f) {
				const D = Nt(f);
				return (D == null ? void 0 : D.status) === "pending" && D.accountContext === n._5.LOSING
			}

			function zt(f) {
				const D = q(f.name);
				return !u.Pf.includes(D)
			}

			function Kt(f) {
				return u.QZ.includes(f)
			}
		},
		"../react/pages/home/domain-registration/config.ts": function(W, v, t) {
			"use strict";
			t.d(v, {
				Bc: function() {
					return E
				},
				HG: function() {
					return $e
				},
				Hv: function() {
					return Ke
				},
				JM: function() {
					return s
				},
				Pf: function() {
					return c
				},
				Py: function() {
					return m
				},
				QZ: function() {
					return _
				},
				WK: function() {
					return r
				},
				g5: function() {
					return i
				},
				gM: function() {
					return l
				},
				gf: function() {
					return u
				},
				jk: function() {
					return we
				},
				no: function() {
					return n
				},
				uY: function() {
					return a
				},
				ui: function() {
					return d
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-routes/es/index.js"),
				o = t("../flags.ts");
			const s = "Unknown",
				d = "unknown",
				l = {
					godaddycomllc: "godaddycomllc",
					namecheap: "namecheap",
					enom: "enom",
					networksolutions: "networksolutions",
					"1&1internetse": "1&1internetse",
					uk: "uk"
				},
				m = Object.keys(l),
				a = !0,
				u = (0, o.J8)("registrar_mock_data") || !1,
				E = (0, o.J8)("registrar_mock_transfer_out") || !1,
				n = (0, o.J8)("registrar_show_unlock_ui") || !1,
				r = 250,
				i = "cf_registrar.enabled",
				p = "@abcABC1234567890123456",
				c = [".us"],
				_ = [".travel", ".us"],
				y = (0, e.BC)`/${"accountId"}`,
				T = (0, e.BC)`${y}/add-site`,
				O = (0, e.BC)`${y}/registrar`,
				h = (0, e.BC)`${O}/domains`,
				S = (0, e.BC)`${O}/action-center`,
				g = (0, e.BC)`${O}/domain/${"zoneName"}`,
				C = (0, e.BC)`${g}/configuration`,
				M = (0, e.BC)`${g}/contacts`,
				b = (0, e.BC)`${O}/pricing`,
				R = (0, e.BC)`${O}/protection`,
				A = (0, e.BC)`${O}/register`,
				L = (0, e.BC)`${A}/checkout`,
				P = (0, e.BC)`${A}/checkout/${"token"}`,
				H = (0, e.BC)`${A}/success`,
				K = (0, e.BC)`${O}/tlds`,
				Q = (0, e.BC)`${O}/transfer`,
				pe = (0, e.BC)`${O}/transfer/${"zoneName"}`,
				te = (0, e.BC)`/registrar/accounts/verify_email`,
				Y = (0, e.BC)`/registrar/domains/verify_email`,
				ie = (0, e.BC)`/sign-up/registrar`,
				Z = (0, e.BC)`${O}/verify-email`,
				j = (0, e.BC)`${y}/${"zoneName"}`,
				$ = (0, e.BC)`${y}/domains`,
				F = (0, e.BC)`${$}/action-center`,
				X = (0, e.BC)`${$}/${"zoneName"}`,
				oe = (0, e.BC)`${g}/configuration`,
				Ee = (0, e.BC)`${g}/contacts`,
				B = (0, e.BC)`${$}/pricing`,
				I = (0, e.BC)`${$}/protection`,
				x = (0, e.BC)`${$}/register`,
				q = (0, e.BC)`${A}/checkout`,
				ee = (0, e.BC)`${A}/checkout/${"token"}`,
				de = (0, e.BC)`${A}/success`,
				he = (0, e.BC)`${$}/tlds`,
				Se = (0, e.BC)`${$}/transfer`,
				ke = (0, e.BC)`${$}/transfer/${"zoneName"}`,
				je = (0, e.BC)`${$}/verify-email`,
				we = {
					addSite: T,
					domains: h,
					domainsActionCenter: S,
					domainsDomain: g,
					domainsDomainConfiguration: C,
					domainsDomainContacts: M,
					domainsPricing: b,
					domainsProtection: R,
					domainsRegister: A,
					domainsRegisterCheckout: L,
					domainsRegisterCheckoutToken: P,
					domainsRegisterSuccess: H,
					domainsTlds: K,
					domainsTransfer: Q,
					domainsTransferZone: pe,
					registrar: O,
					registrarAccountsVerifyEmail: te,
					registrarDomainsVerifyEmail: Y,
					signup: ie,
					verifyEmail: Z,
					zone: j
				},
				$e = {
					LEGACY_domains: $,
					LEGACY_domainsActionCenter: F,
					LEGACY_domainsDomain: X,
					LEGACY_domainsDomainConfiguration: oe,
					LEGACY_domainsDomainContacts: Ee,
					LEGACY_domainsPricing: B,
					LEGACY_domainsProtection: I,
					LEGACY_domainsRegister: x,
					LEGACY_domainsRegisterCheckout: q,
					LEGACY_domainsRegisterCheckoutToken: ee,
					LEGACY_domainsRegisterSuccess: de,
					LEGACY_domainsTlds: he,
					LEGACY_domainsTransfer: Se,
					LEGACY_domainsTransferZone: ke,
					LEGACY_verifyEmail: je
				},
				Ke = {
					domains: (0, e.BC)`/accounts/${"accountId"}/registrar/domains/${"domainName"}`
				}
		},
		"../react/pages/home/domain-registration/selectors.ts": function(W, v, t) {
			"use strict";
			t.d(v, {
				HO: function() {
					return a
				},
				NW: function() {
					return u
				},
				ZQ: function() {
					return d
				},
				b_: function() {
					return m
				}
			});
			var e = t("../react/common/selectors/accountSelectors.ts"),
				o = t("../react/common/selectors/entitlementsSelectors.ts");
			const s = E => {
					const n = E && E.accountFlags && E.accountFlags.data && E.accountFlags.data.registrar && E.accountFlags.data.registrar.canary_tlds;
					return n ? n.split(",").map(r => r.trim()) : []
				},
				d = E => {
					var n, r, i;
					return ((n = E.accountFlags) === null || n === void 0 || (r = n.data) === null || r === void 0 || (i = r.registrar) === null || i === void 0 ? void 0 : i["registrar-managed"]) || !1
				},
				l = E => E.account ? E.account.email : "",
				m = E => !1,
				a = E => m(E) && (0, e.oJ)((0, e.Zu)(E)),
				u = E => {
					const {
						hasTrademarkClaim: n,
						trademarkNoticeAgreement: r
					} = E.registrar.registrations;
					return n && !(r.accepted_date || r.id || r.not_after)
				}
		},
		"../react/pages/home/domain-registration/tracking.ts": function(W, v, t) {
			"use strict";
			t.d(v, {
				J: function() {
					return r
				},
				U: function() {
					return n
				}
			});
			var e = t("../../../../node_modules/moment/moment.js"),
				o = t.n(e),
				s = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				d = t.n(s),
				l = t("../react/pages/home/domain-registration/bulk-transfer-util.ts");

			function m(i) {
				for (var p = 1; p < arguments.length; p++) {
					var c = arguments[p] != null ? Object(arguments[p]) : {},
						_ = Object.keys(c);
					typeof Object.getOwnPropertySymbols == "function" && _.push.apply(_, Object.getOwnPropertySymbols(c).filter(function(y) {
						return Object.getOwnPropertyDescriptor(c, y).enumerable
					})), _.forEach(function(y) {
						a(i, y, c[y])
					})
				}
				return i
			}

			function a(i, p, c) {
				return p = u(p), p in i ? Object.defineProperty(i, p, {
					value: c,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : i[p] = c, i
			}

			function u(i) {
				var p = E(i, "string");
				return typeof p == "symbol" ? p : String(p)
			}

			function E(i, p) {
				if (typeof i != "object" || i === null) return i;
				var c = i[Symbol.toPrimitive];
				if (c !== void 0) {
					var _ = c.call(i, p || "default");
					if (typeof _ != "object") return _;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (p === "string" ? String : Number)(i)
			}
			let n = function(i) {
				return i.REGISTER_DOMAIN_SEARCH_SUBMIT = "search domain", i.REGISTER_DOMAIN_SEARCH_SELECT_DOMAIN = "select domain from search", i.REGISTER_DOMAIN_CHECKOUT_SELECT_PAYMENT_OPTION = "select payment option", i.REGISTER_DOMAIN_CHECKOUT_PURCHASE = "click complete purchase button", i.REGISTER_DOMAIN_CHECKOUT_PURCHASE_ATTEMPT = "purchase attempt", i.REGISTER_DOMAIN_CHECKOUT_PURCHASE_COMPLETED = "purchase completed", i.REGISTER_DOMAIN_CHECKOUT_BILLING_COUNTRY_SELECT = "Billing address country select toggle", i.REGISTER_DOMAIN_CHECKOUT_BILLING_VERIFY_ADDRESS = "verify address", i.REGISTER_DOMAIN_CHECKOUT_BILLING_SELECT_PAYMENT_METHOD = "select payment method", i.REGISTER_DOMAIN_CHECKOUT_TMCH_DOMAIN_HAS_CLAIMS = "domain on cart has trademark claims", i.REGISTER_DOMAIN_CHECKOUT_TMCH_EXPAND_CLAIMS = "click expand trademark claims button", i.REGISTER_DOMAIN_CHECKOUT_TMCH_DISAGREE = "click disagree trademark claims button", i.REGISTER_DOMAIN_CHECKOUT_TMCH_AGREE = "click agree trademark claims button", i.REGISTER_DOMAIN_CHECKOUT_ERROR = "error registering domain", i.TRANSFER_DOMAIN_CHANGE_STEP = "Transfer Step", i.RENEW_DOMAIN_COMPLETED = "domain renewal completed", i.RESTORE_DOMAIN_INIT = "click to open domain restore modal", i.RESTORE_DOMAIN_CLOSE_RESTORE_MODAL = "click to close domain restore modal", i.RESTORE_DOMAIN_OPEN_ADD_PAYMENT_METHOD_MODAL = "open domain restore add payment method modal", i.RESTORE_DOMAIN_CLOSE_ADD_PAYMENT_METHOD_MODAL = "close domain restore add payment method modal", i.RESTORE_DOMAIN_FAILURE = "domain restore failed", i.RESTORE_DOMAIN_COMPLETED = "domain restore completed", i.DOMAIN_DELETE_INIT = "click to begin domain delete", i.DOMAIN_DELETE_COMPLETED = "domain deletion completed sucessfully", i.DOMAIN_DELETE_FAILURE_NO_PERMISSIONS = "domain deletion failed because user does not have permissions", i.DOMAIN_DELETE_FAILURE_INVALID_CONFIRMATION_CODE = "domain deletion failed because user submitted invalid confirmation code", i.DOMAIN_DELETE_FAILURE_UNKNOWN_REASON = "domain deletion failed for unknown reason", i.DOMAIN_DELETE_CONFIRM_DELETE = "click to delete domain", i.DOMAIN_DELETE_CLOSE_CONFIRM_MODAL = "click cancel and closes confirm modal", i.DOMAIN_DELETE_RESEND_CONFIRMATION_CODE = "click to re-send confirmation code", i.DOMAIN_DELETE_CLOSE_VERIFICATION_MODAL = "click cancel and closes verification modal", i.DOMAIN_DELETE_WARNING_MODAL_CONTINUE = "click to continue with domain deletion", i.DOMAIN_DELETE_CLOSE_WARNING_MODAL = "click cancel and closes warning modal", i.DOMAIN_MOVE_START_FLOW = "Start domain move flow", i.DOMAIN_MOVE_OPEN_DOCS = "Open domain move docs", i.DOMAIN_MOVE_CLOSE_FLOW = "Close domain move flow", i.DOMAIN_MOVE_PROGRESS_FLOW = "Progress domain move flow", i.DOMAIN_MOVE_SUBMIT = "Submit domain move", i.DOMAIN_MOVE_INITIATE_SUCCESS = "Domain move initiate success", i.DOMAIN_MOVE_INITIATE_ERROR = "Domain move initiate error", i.DOMAIN_MOVE_CANCEL = "Domain move cancel", i.DOMAIN_MOVE_CANCEL_SUCCESS = "Domain move cancel success", i.DOMAIN_MOVE_CANCEL_ERROR = "Domain move cancel error", i.ACTION_CENTER_NAVIGATE = "Navigate to actions center", i.ACTION_CENTER_DOMAIN_MOVE_DECISION = "Domain move decision applied", i.ACTION_CENTER_DOMAIN_MOVE_DECISION_SUCCESS = "Domain move decision success", i.ACTION_CENTER_DOMAIN_MOVE_DECISION_ERROR = "Domain move decision error", i
			}({});

			function r(i, p, c) {
				if (!(p == null ? void 0 : p.name)) return null;
				d().sendEvent(i, m({
					domain: {
						name: p.name,
						premium: (0, l.Uy)(p == null ? void 0 : p.premiumType),
						paymentExpiresAt: o()(p == null ? void 0 : p.paymentExpiresAt).format()
					},
					category: "registrar"
				}, c))
			}
		},
		"../react/pages/home/members/actions/advancedAuthzActions.ts": function(W, v, t) {
			"use strict";
			t.d(v, {
				f6: function() {
					return m
				},
				s_: function() {
					return d
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-en-garde/es/index.js"),
				o = t("../react/app/redux/makeAction.js");
			const d = [{
					value: {
						workers: "workers"
					}.workers,
					label: "Workers",
					scopeKeyPrefix: "com.cloudflare.edge.worker.script",
					scopeSubsetOfPrefix: "com.cloudflare.api.account"
				}],
				l = e.eg.object({
					id: e.eg.string,
					name: e.eg.string,
					description: e.eg.string
				}),
				m = (0, o.ZP)("granularResources", "get", "/accounts/(accountId)/demoproducts")
		},
		"../react/pages/home/members/constants.ts": function(W, v, t) {
			"use strict";
			t.d(v, {
				Ey: function() {
					return a
				},
				F4: function() {
					return c
				},
				Fq: function() {
					return T
				},
				Go: function() {
					return r
				},
				Lc: function() {
					return g
				},
				Np: function() {
					return E
				},
				Rl: function() {
					return n
				},
				Sb: function() {
					return i
				},
				Sw: function() {
					return S
				},
				Sz: function() {
					return h
				},
				Ti: function() {
					return C
				},
				Uw: function() {
					return y
				},
				Zl: function() {
					return _
				},
				jk: function() {
					return O
				},
				r6: function() {
					return p
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-routes/es/index.js");
			const o = (0, e.BC)`/${"accountId"}`,
				s = (0, e.BC)`${o}/members`,
				d = (0, e.BC)`${s}/invite`,
				l = (0, e.BC)`${s}/invite/${"memberId"}`,
				m = (0, e.BC)`${s}/add-policy/${"memberId"}`,
				a = "com.cloudflare.api.account",
				E = a + "." + "zone",
				n = E + ".",
				r = 100,
				i = 200,
				p = 5,
				c = 300,
				_ = "INVITE_TOAST",
				y = "00000000000000000000000000000000",
				T = "usergroups-ui",
				O = {
					account: o,
					members: s,
					inviteMembers: d,
					editMember: l,
					addPolicy: m
				},
				h = {
					allow: "allow",
					deny: "deny"
				},
				S = {
					all: "all",
					domain_group: "domain_group",
					zone: "zone",
					granular: "granular"
				},
				g = {
					id: "",
					access: !1,
					owner: "",
					permission_groups: [],
					resource_groups: [],
					scopes: []
				},
				C = {
					accountId: "",
					effect: h.allow,
					mode: "",
					zoneId: "",
					resourceGroupId: "",
					granularProduct: ""
				}
		},
		"../react/pages/home/members/utils.ts": function(W, v, t) {
			"use strict";
			t.d(v, {
				AX: function() {
					return h
				},
				Co: function() {
					return T
				},
				JP: function() {
					return O
				},
				Ld: function() {
					return i
				},
				YW: function() {
					return u
				},
				_k: function() {
					return p
				},
				c$: function() {
					return E
				},
				rC: function() {
					return M
				},
				vq: function() {
					return C
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-cache/es/index.js"),
				o = t("../react/pages/home/members/actions/advancedAuthzActions.ts"),
				s = t("../react/pages/home/members/constants.ts");

			function d(b) {
				for (var R = 1; R < arguments.length; R++) {
					var A = arguments[R] != null ? Object(arguments[R]) : {},
						L = Object.keys(A);
					typeof Object.getOwnPropertySymbols == "function" && L.push.apply(L, Object.getOwnPropertySymbols(A).filter(function(P) {
						return Object.getOwnPropertyDescriptor(A, P).enumerable
					})), L.forEach(function(P) {
						l(b, P, A[P])
					})
				}
				return b
			}

			function l(b, R, A) {
				return R = m(R), R in b ? Object.defineProperty(b, R, {
					value: A,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : b[R] = A, b
			}

			function m(b) {
				var R = a(b, "string");
				return typeof R == "symbol" ? R : String(R)
			}

			function a(b, R) {
				if (typeof b != "object" || b === null) return b;
				var A = b[Symbol.toPrimitive];
				if (A !== void 0) {
					var L = A.call(b, R || "default");
					if (typeof L != "object") return L;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (R === "string" ? String : Number)(b)
			}
			const u = () => d({}, s.Ti),
				E = () => d({}, s.Lc, {
					scopes: [u()],
					emails: [],
					auto_accept: !1,
					permission_groups: []
				}),
				n = b => b.map(R => ({
					scope: {
						key: R,
						objects: [{
							key: "*"
						}]
					}
				})),
				r = (b, R, A) => {
					var L;
					let P = [],
						H = [];
					const K = [],
						Q = [];
					b.scopes.forEach(Y => {
						if (Y.mode === s.Sw.all) A ? P.push({
							id: A
						}) : P.push({
							scope: {
								key: `com.cloudflare.api.account.${R}`,
								objects: [{
									key: "*"
								}]
							}
						});
						else if (Y.mode === s.Sw.domain_group) {
							const j = {
								id: Y.resourceGroupId
							};
							Y.effect === s.Sz.allow ? P.push(j) : H.push(j)
						} else if (Y.mode === s.Sw.zone) {
							const j = `${s.Rl}${Y.zoneId}`;
							Y.effect === s.Sz.allow ? K.push(j) : Q.push(j)
						} else if (Y.mode === s.Sw.granular && Y.granularResourceId) {
							var ie, Z;
							const j = Y.granularProduct,
								F = `${(ie=o.s_.find(Ee=>Ee.value==j))===null||ie===void 0?void 0:ie.scopeKeyPrefix}.${Y.granularResourceId}`,
								oe = `${(Z=o.s_.find(Ee=>Ee.value===j))===null||Z===void 0?void 0:Z.scopeSubsetOfPrefix}.${R}`;
							P.push({
								scope: {
									key: `${F}`,
									subset_of: [{
										key: `${oe}`
									}],
									objects: [{
										key: "*"
									}]
								}
							})
						}
					}), K.length && (P = P.concat(n(K))), Q.length && (H = H.concat(n(Q)));
					const pe = (L = b.permission_groups) === null || L === void 0 ? void 0 : L.map(Y => ({
							id: Y
						})),
						te = [];
					return te.push({
						access: s.Sz.allow,
						permission_groups: pe,
						resource_groups: P
					}), H.length && te.push({
						access: s.Sz.deny,
						permission_groups: pe,
						resource_groups: H
					}), te
				},
				i = b => b.map(R => {
					var A;
					return {
						access: R.access,
						permission_groups: R.permission_groups.map(L => ({
							id: L.id
						})),
						resource_groups: (A = R.resource_groups) === null || A === void 0 ? void 0 : A.map(L => ({
							scope: {
								key: L.scope.key,
								objects: L.scope.objects
							},
							id: L.id
						}))
					}
				}),
				p = (b, R, A, L) => {
					const P = b.auto_accept;
					let H = [];
					return H = H.concat(r(b, R, A)), L && (H = H.concat(i(L))), {
						auto_accept: P,
						status: P ? "accepted" : "pending",
						policies: H
					}
				},
				c = b => {
					const R = b.split(".");
					return R[R.length - 1]
				},
				_ = b => {
					var R, A;
					const L = b == null ? void 0 : b.access;
					let P = [],
						H = b == null || (R = b.resource_groups) === null || R === void 0 ? void 0 : R.map(K => {
							var Q;
							const pe = y(K);
							if ((K == null || (Q = K.meta) === null || Q === void 0 ? void 0 : Q.editable) === "false") return {
								effect: L,
								mode: s.Sw.all,
								accountId: c(K.id)
							};
							if (pe) {
								var te;
								const Y = K == null || (te = K.scope) === null || te === void 0 ? void 0 : te.key.split(".").pop();
								return {
									effect: L,
									mode: s.Sw.granular,
									granularProduct: pe.value,
									granularResourceId: Y
								}
							} else if (!K.name) K.scope.key.startsWith(s.Rl) ? P.push({
								key: K.scope.key
							}) : P = P.concat(K.scope.objects);
							else return {
								effect: L,
								mode: s.Sw.domain_group,
								resourceGroupId: c(K.id)
							}
						}).filter(K => K);
					if ((A = P) === null || A === void 0 ? void 0 : A.length) {
						let K = P.map(Q => {
							const pe = c(Q.key);
							return {
								effect: L,
								mode: s.Sw.zone,
								zoneId: pe
							}
						});
						H = H.length ? K.concat(H) : K
					}
					return H
				},
				y = b => {
					var R, A, L, P;
					const H = b == null || (R = b.scope) === null || R === void 0 ? void 0 : R.key.split(".").slice(0, -1).join("."),
						K = b == null || (A = b.scope) === null || A === void 0 || (L = A.subset_of) === null || L === void 0 || (P = L[0]) === null || P === void 0 ? void 0 : P.key.split(".").slice(0, -1).join(".");
					return o.s_.find(Q => Q.scopeKeyPrefix === H && Q.scopeSubsetOfPrefix === K)
				},
				T = b => {
					if (!(b == null ? void 0 : b.length)) return [];
					const R = [];
					return b.forEach(A => {
						var L;
						(L = A.resource_groups) === null || L === void 0 || L.forEach(P => {
							var H, K;
							((H = P.scope) === null || H === void 0 || (K = H.key) === null || K === void 0 ? void 0 : K.startsWith(s.Rl)) && R.push(c(P.scope.key))
						})
					}), R
				},
				O = b => {
					if (!(b == null ? void 0 : b.length)) return [];
					const R = [];
					return b.forEach(A => {
						var L;
						(L = A.resource_groups) === null || L === void 0 || L.forEach(P => {
							var H, K;
							if (!((H = P.scope) === null || H === void 0 || (K = H.key) === null || K === void 0 ? void 0 : K.startsWith(s.Rl))) {
								var Q;
								const te = (Q = P.scope) === null || Q === void 0 ? void 0 : Q.objects;
								for (let Y = 0; Y < (te == null ? void 0 : te.length) && Y < s.r6; Y++) {
									var pe;
									((pe = te[Y].key) === null || pe === void 0 ? void 0 : pe.startsWith(s.Rl)) && R.push(c(te[Y].key))
								}
							}
						})
					}), R
				},
				h = b => {
					var R;
					if (!(b == null ? void 0 : b.length)) return null;
					const A = (R = b[0]) === null || R === void 0 ? void 0 : R.permission_groups.map(K => K.id);
					let L, P;
					b == null || b.forEach(K => {
						K.access === s.Sz.allow && (L = K), K.access === s.Sz.deny && (P = K)
					});
					let H = [];
					return L && (H = _(L)), P && (H = H.concat(_(P))), {
						permission_groups: A,
						scopes: H
					}
				},
				S = "permission-groups-",
				g = new Map,
				C = b => {
					if (!b) return [];
					const R = g.get(b);
					if (R) return R;
					const A = e.E.get(`${S}${b}`);
					return g.set(b, A), A
				},
				M = (b, R) => {
					const A = [];
					for (let L = 0; L < sessionStorage.length; L++) {
						const P = sessionStorage.key(L);
						(P == null ? void 0 : P.startsWith(S)) && A.push(P)
					}
					return A.length >= 5 && e.E.remove(A[0]), e.E.set(`${S}${b}`, R)
				}
		},
		"../react/pages/home/rulesets/account-ruleset-builder/labels.tsx": function(W, v, t) {
			"use strict";
			t.d(v, {
				g: function() {
					return o
				}
			});
			var e = t("../../../common/util/types/src/api/phases/fields.tsx");
			const o = {
				[e.df.HttpRequestFirewallCustom]: {
					HEADING: "account.custom_rulesets.tab.deployed_rulesets",
					DESCRIPTION: "account.custom_rulesets.tab.deployed_rulesets.description",
					DOC_LINK: null,
					DOC_DESCRIPTION: "account.custom_rulesets",
					DOC_LINK_CREATE: "https://developers.cloudflare.com/waf/custom-rules/custom-rulesets/create-dashboard/",
					DOC_RULESET_LINK: "https://developers.cloudflare.com/ruleset-engine/custom-rulesets/add-rules-ruleset/",
					DOC_RULES_LINK: "https://developers.cloudflare.com/waf/custom-rules/create-dashboard/",
					DOC_RULES_LABEL: "account.custom_rulesets.rule",
					DEPLOY_BUTTON: "account.custom_rulesets.create_rule",
					RULESETS_HEADING: "account.custom_rulesets.tab.your_rulesets",
					RULESETS_DESCRIPTION: "account.custom_rulesets.tab.your_rulesets.description",
					BACK_TO_HOME: "account.custom_rulesets.back_to_rulesets",
					DEPLOY_TITLE: "account.custom_rulesets.create_rule",
					EDIT_RULESET: "account.custom_rulesets.edit_custom_ruleset",
					CREATE_RULESET: "account.custom_rulesets.create_custom_ruleset"
				},
				[e.df.HttpRateLimit]: {
					HEADING: "account.rate_limiting.tab.rate_limiting.title",
					DESCRIPTION: "account.rate_limiting.tab.rate_limiting.description",
					DOC_LINK: null,
					DOC_DESCRIPTION: "account.rate_limiting.rate.rule",
					DOC_RULESET_LINK: "https://developers.cloudflare.com/waf/rate-limiting-rules/create-account-dashboard/#1-create-a-custom-rate-limiting-ruleset",
					DOC_LINK_CREATE: "https://developers.cloudflare.com/waf/rate-limiting-rules/create-account-dashboard/",
					RULESETS_HEADING: "account.rate_limiting.tab.your_rulesets.title",
					RULESETS_DESCRIPTION: "account.rate_limiting.tab.your_rulesets.description",
					BACK_TO_HOME: "account.custom_rulesets.back_to_rulesets",
					DEPLOY_TITLE: "account.rate_limiting_rulesets.create_rule",
					EDIT_RULESET: "account.rate_limiting.edit_custom_ruleset",
					CREATE_RULESET: "account.rate_limiting.create_custom_ruleset"
				},
				[e.df.HttpRequestFirewallManaged]: {
					HEADING: "account.managed_rulesets.tab.deployed_rulesets",
					DESCRIPTION: "account.managed_rulesets.card_description",
					DOC_LINK: null,
					DOC_LINK_CREATE: null,
					DOC_DESCRIPTION: "account.managed_rulesets",
					RULESETS_HEADING: null,
					RULESETS_DESCRIPTION: null,
					BACK_TO_HOME: "account.custom_rulesets.back_to_rulesets",
					DEPLOY_TITLE: "",
					EDIT_RULESET: "",
					CREATE_RULESET: "",
					DEPLOY_RULESET_DOC_LINK: "https://developers.cloudflare.com/waf/managed-rules/deploy-account-dashboard/",
					DEPLOY_RULESET_DOC_DESCRIPTION: "account.managed_rulesets.create_rule.doc_description",
					EXCEPTION_DOC_LINK: "https://developers.cloudflare.com/waf/managed-rules/waf-exceptions/define-dashboard/",
					EXCEPTION_DOC_DESCRIPTION: "account.managed_rulesets.skip.form.doc_description"
				}
			}
		},
		"../react/pages/home/rulesets/ddos/tracking.ts": function(W, v, t) {
			"use strict";
			t.d(v, {
				F: function() {
					return e
				}
			});
			let e = function(o) {
				return o.TOGGLE_TCP_PROTECTION = "toggle advanced tcp protection", o.GET_TCP_PROTECTION_PREFIXES = "view tcp protection prefixes list", o.CREATE_TCP_PROTECTION_PREFIXES = "bulk create tcp protection prefixes", o.CREATE_TCP_PROTECTION_PREFIX = "create tcp protection prefix", o.UPDATE_TCP_PROTECTION_PREFIX = "update tcp protection prefix", o.DELETE_TCP_PROTECTION_PREFIX = "delete tcp protection prefix", o.DELETE_TCP_PROTECTION_PREFIXES = "bulk delete tcp protection prefixes", o.GET_TCP_PROTECTION_ALLOWLIST = "view prefixes in tcp protection allowlist", o.CREATE_TCP_PROTECTION_ALLOWLIST = "add prefix to tcp protection allowlist", o.UPDATE_TCP_PROTECTION_ALLOWLIST = "update tcp protection allowlist", o.DELETE_PREFIX_TCP_PROTECTION_ALLOWLIST = "delete prefix from tcp protection allowlist", o.DELETE_TCP_PROTECTION_ALLOWLIST = "delete all prefixes from tcp protection allowlist", o.GET_SYN_PROTECTION_RULE = "view syn protection rules list", o.GET_SYN_PROTECTION_RULES = "view syn protection rule", o.CREATE_SYN_PROTECTION_RULE = "create syn protection rule", o.UPDATE_SYN_PROTECTION_RULE = "update syn protection rule", o.DELETE_SYN_PROTECTION_RULE = "delete syn protection rule", o.GET_SYN_PROTECTION_FILTERS = "view syn protection filter list", o.GET_SYN_PROTECTION_FILTER = "view syn protection filter", o.CREATE_SYN_PROTECTION_FILTER = "create syn protection filter", o.UPDATE_SYN_PROTECTION_FILTER = "update syn protection filter", o.DELETE_SYN_PROTECTION_FILTER = "delete syn protection filter", o.GET_TCP_FLOW_PROTECTION_RULES = "view tcp flow protection rules list", o.GET_TCP_FLOW_PROTECTION_RULE = "view tcp flow protection rule", o.CREATE_TCP_FLOW_PROTECTION_RULE = "create tcp flow protection rule", o.UPDATE_TCP_FLOW_PROTECTION_RULE = "update tcp flow protection rule", o.DELETE_TCP_FLOW_PROTECTION_RULE = "delete tcp flow protection rule", o.GET_TCP_FLOW_PROTECTION_FILTERS = "view tcp flow protection filters list", o.GET_TCP_FLOW_PROTECTION_FILTER = "view tcp flow protection filter", o.CREATE_TCP_FLOW_PROTECTION_FILTER = "create tcp flow protection filter", o.UPDATE_TCP_FLOW_PROTECTION_FILTER = "update tcp flow protection filter", o.DELETE_TCP_FLOW_PROTECTION_FILTER = "delete tcp flow protection filter", o.GET_DNS_PROTECTION_RULES = "view dns protection rules list", o.GET_DNS_PROTECTION_RULE = "view dns protection rule", o.CREATE_DNS_PROTECTION_RULE = "create dns protection rule", o.UPDATE_DNS_PROTECTION_RULE = "update dns protection rule", o.DELETE_DNS_PROTECTION_RULE = "delete dns protection rule", o
			}({})
		},
		"../react/pages/hyperdrive/tracking.ts": function(W, v, t) {
			"use strict";
			t.d(v, {
				KO: function() {
					return a
				},
				L9: function() {
					return n
				},
				N3: function() {
					return E
				},
				zE: function() {
					return u
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				o = t.n(e);

			function s(r) {
				for (var i = 1; i < arguments.length; i++) {
					var p = arguments[i] != null ? Object(arguments[i]) : {},
						c = Object.keys(p);
					typeof Object.getOwnPropertySymbols == "function" && c.push.apply(c, Object.getOwnPropertySymbols(p).filter(function(_) {
						return Object.getOwnPropertyDescriptor(p, _).enumerable
					})), c.forEach(function(_) {
						d(r, _, p[_])
					})
				}
				return r
			}

			function d(r, i, p) {
				return i = l(i), i in r ? Object.defineProperty(r, i, {
					value: p,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : r[i] = p, r
			}

			function l(r) {
				var i = m(r, "string");
				return typeof i == "symbol" ? i : String(i)
			}

			function m(r, i) {
				if (typeof r != "object" || r === null) return r;
				var p = r[Symbol.toPrimitive];
				if (p !== void 0) {
					var c = p.call(r, i || "default");
					if (typeof c != "object") return c;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (i === "string" ? String : Number)(r)
			}
			let a = function(r) {
					return r.PURCHASE_WORKERS_PAID = "navigate to workers plan page", r.LIST_CONFIGS = "list hyperdrive configs", r.SEARCH_CONFIGS = "search hyperdrive configs", r.CREATE_HYPERDRIVE_CONFIG = "create hyperdrive config", r.VIEW_CONFIG_DETAILS = "view hyperdrive config details", r.UPDATE_CACHING_SETTINGS = "update hyperdrive config caching settings", r.DELETE_HYPERDRIVE_CONFIG = "delete hyperdrive config", r.CLICK_HYPERDRIVE_DOCUMENTATION = "click hyperdrive documentation", r.CLICK_GET_STARTED_GUIDE = "click hyperdrive get started guide", r.CLICK_CONNECTIVITY_GUIDES = "click hyperdrive connectivity guides", r.CLICK_QUICK_LINK = "click hyperdrive quick link", r.CLICK_DISCORD = "click hyperdrive discord", r.CLICK_COMMUNITY = "click hyperdrive community", r
				}({}),
				u = function(r) {
					return r[r["connection string"] = 0] = "connection string", r[r.manual = 1] = "manual", r
				}({}),
				E = function(r) {
					return r[r.success = 0] = "success", r[r.failure = 1] = "failure", r
				}({});
			const n = (r, i = {}) => {
				o().sendEvent(r, s({}, i, {
					category: "Hyperdrive"
				}))
			}
		},
		"../react/pages/images/selectors.ts": function(W, v, t) {
			"use strict";
			t.d(v, {
				$4: function() {
					return d
				},
				GH: function() {
					return c
				},
				JZ: function() {
					return y
				},
				aR: function() {
					return i
				},
				db: function() {
					return m
				},
				ib: function() {
					return T
				},
				lW: function() {
					return g
				},
				mo: function() {
					return S
				},
				pT: function() {
					return p
				},
				po: function() {
					return _
				},
				wj: function() {
					return h
				}
			});
			var e = t("../react/common/selectors/accountSelectors.ts"),
				o = t("../react/common/selectors/entitlementsSelectors.ts"),
				s = t("../react/common/selectors/zoneSelectors.ts");
			const d = "sourcing_kit_enabled",
				l = "sourcing_kit_waitlist",
				m = "images",
				a = "unified_images_enabled",
				u = "transformations_allowed_origins_enabled",
				E = "c2pa",
				n = "c2pa_polish",
				r = "CloudflareImages",
				i = C => !!(0, o.BF)(C, "images.transformations_enabled"),
				p = C => Boolean((0, o.BF)(C, "images.enabled")),
				c = C => {
					const M = (0, o.BF)(C, "images.storage");
					return typeof M == "number" && M > 0
				},
				_ = C => Boolean((0, o.BF)(C, "contract.customer_enabled")),
				y = C => Boolean((0, e.oI)(C, m, d)),
				T = C => Boolean((0, s.Le)(C, r, d)),
				O = C => Boolean(getAccountFlipperFlag(C, r, a)),
				h = C => Boolean((0, s.Le)(C, r, u)),
				S = C => Boolean((0, s.Le)(C, r, E)),
				g = C => Boolean((0, s.Le)(C, r, n))
		},
		"../react/pages/magic/constants.ts": function(W, v, t) {
			"use strict";
			t.d(v, {
				GF: function() {
					return p
				},
				H3: function() {
					return a
				},
				H8: function() {
					return l
				},
				J: function() {
					return _
				},
				Nz: function() {
					return u
				},
				UQ: function() {
					return T
				},
				Up: function() {
					return d
				},
				W8: function() {
					return E
				},
				Ws: function() {
					return O
				},
				Xg: function() {
					return r
				},
				Y_: function() {
					return i
				},
				_j: function() {
					return s
				},
				a4: function() {
					return c
				},
				jS: function() {
					return y
				},
				rF: function() {
					return m
				},
				rG: function() {
					return n
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-routes/es/index.js"),
				o = t("../react/utils/translator.tsx");
			const s = {
					homeUrl: (0, e.BC)`/${"accountId"}/${"productName"}`,
					tunnelHealthchecks: (0, e.BC)`/${"accountId"}/${"productName"}/tunnel-healthchecks`,
					alertNotifications: (0, e.BC)`/${"accountId"}/notifications`,
					networkAnalytics: (0, e.BC)`/${"accountId"}/network-analytics/all-traffic`,
					ipPrefixes: (0, e.BC)`/${"accountId"}/ip-addresses/ip-prefixes`,
					configuration: (0, e.BC)`/${"accountId"}/${"productName"}/configuration`,
					configurationScoping: (0, e.BC)`/${"accountId"}/${"productName"}/configuration/scoping`,
					subnetDetails: (0, e.BC)`/${"accountId"}/${"productName"}/configuration/subnet-details`,
					subnetDetailsForm: (0, e.BC)`/${"accountId"}/${"productName"}/configuration/subnet-details/form`,
					tunnels: (0, e.BC)`/${"accountId"}/${"productName"}/configuration/tunnels`,
					tunnelsForm: (0, e.BC)`/${"accountId"}/${"productName"}/configuration/tunnels/form`,
					createGreTunnelsForm: (0, e.BC)`/${"accountId"}/${"productName"}/configuration/tunnels/gre-tunnels/create`,
					editGreTunnelsForm: (0, e.BC)`/${"accountId"}/${"productName"}/configuration/tunnels/gre-tunnels/edit`,
					createIpsecTunnelsForm: (0, e.BC)`/${"accountId"}/${"productName"}/configuration/tunnels/ipsec-tunnels/create`,
					editIpsecTunnelsForm: (0, e.BC)`/${"accountId"}/${"productName"}/configuration/tunnels/ipsec-tunnels/edit`,
					interconnects: (0, e.BC)`/${"accountId"}/${"productName"}/configuration/interconnects`,
					interconnectsCreateForm: (0, e.BC)`/${"accountId"}/${"productName"}/configuration/interconnects/create`,
					interconnectsEditForm: (0, e.BC)`/${"accountId"}/${"productName"}/configuration/interconnects/edit`,
					createInterconnectGREForm: (0, e.BC)`/${"accountId"}/${"productName"}/configuration/interconnects/create/gre`,
					createInterconnectMPLSForm: (0, e.BC)`/${"accountId"}/${"productName"}/configuration/interconnects/create/mpls`,
					staticRoutes: (0, e.BC)`/${"accountId"}/${"productName"}/configuration/static-routes`,
					createStaticRoutesForm: (0, e.BC)`/${"accountId"}/${"productName"}/configuration/static-routes/create`,
					editStaticRoutesForm: (0, e.BC)`/${"accountId"}/${"productName"}/configuration/static-routes/edit`,
					magicWanAddressSpace: (0, e.BC)`/${"accountId"}/${"productName"}/configuration/magic_wan_address_space`,
					connectors: (0, e.BC)`/${"accountId"}/magic-wan/configuration/connectors`,
					editConnector: (0, e.BC)`/${"accountId"}/magic-wan/configuration/connectors/edit`,
					magicFirewallRulesBase: (0, e.BC)`/${"accountId"}/network-security/magic_firewall`,
					pcapsHome: (0, e.BC)`/${"accountId"}/${"productName"}/packet-captures`,
					pcapsCaptures: (0, e.BC)`/${"accountId"}/${"productName"}/packet-captures/captures`,
					pcapsCaptureCreate: (0, e.BC)`/${"accountId"}/${"productName"}/packet-captures/captures/create-capture`,
					pcapsBuckets: (0, e.BC)`/${"accountId"}/${"productName"}/packet-captures/buckets`,
					pcapsBucketsCreate: (0, e.BC)`/${"accountId"}/${"productName"}/packet-captures/buckets/create-bucket`,
					simpleCaptureFormUrl: (0, e.BC)`/${"accountId"}/${"productName"}/packet-captures/buckets/create-bucket/sample`,
					fullCaptureFormUrl: (0, e.BC)`/${"accountId"}/${"productName"}/packet-captures/buckets/create-bucket/full`,
					networkMonitoring: (0, e.BC)`/${"accountId"}/network-monitoring`,
					networkMonitoringPackets: (0, e.BC)`/${"accountId"}/network-monitoring/packets`,
					networkMonitoringConfiguration: (0, e.BC)`/${"accountId"}/network-monitoring/configuration`,
					networkMonitoringViewConfiguration: (0, e.BC)`/${"accountId"}/network-monitoring/view-configuration`,
					networkMonitoringRules: (0, e.BC)`/${"accountId"}/network-monitoring/rules`,
					networkMonitoringRulesCreateForm: (0, e.BC)`/${"accountId"}/network-monitoring/rules/create`,
					networkMonitoringRulesEditForm: (0, e.BC)`/${"accountId"}/network-monitoring/rules/edit`,
					networkMonitoringOnboarding: (0, e.BC)`/${"accountId"}/network-monitoring/onboarding`,
					overview: (0, e.BC)`/${"accountId"}/magic-wan/overview`,
					overviewSiteDetail: (0, e.BC)`/${"accountId"}/magic-wan/overview/${"siteId"}`,
					sites: (0, e.BC)`/${"accountId"}/magic-wan/sites`,
					createSite: (0, e.BC)`/${"accountId"}/magic-wan/sites/create`,
					editSite: (0, e.BC)`/${"accountId"}/magic-wan/sites/edit`,
					editSiteTabSite: (0, e.BC)`/${"accountId"}/magic-wan/sites/edit/${"siteId"}/site`,
					editSiteTabNetwork: (0, e.BC)`/${"accountId"}/magic-wan/sites/edit/${"siteId"}/network`,
					editSiteTabTunnels: (0, e.BC)`/${"accountId"}/magic-wan/sites/edit/${"siteId"}/tunnels`,
					editSiteTabRoutes: (0, e.BC)`/${"accountId"}/magic-wan/sites/edit/${"siteId"}/static-routes`,
					editSiteTabBreakOutAppsTabs: (0, e.BC)`/${"accountId"}/magic-wan/sites/edit/${"siteId"}/breakoutapps`,
					policiesLan: (0, e.BC)`/${"accountId"}/magic-wan/sites/edit/${"siteId"}/policies`,
					quickSearchIpPrefixesUrl: (0, e.BC)`/configuration/subnet-details`,
					quickSearchTunnels: (0, e.BC)`/configuration/tunnels`,
					quickSearchInterconnects: (0, e.BC)`/configuration/interconnects`,
					quickSearchStaticRoutes: (0, e.BC)`/configuration/static-routes`,
					quickSearchWanAddressSpace: (0, e.BC)`/configuration/magic_wan_address_space`,
					quickSearchCaptures: "/packet-captures/captures",
					quickSearchBuckets: "/packet-captures/buckets",
					quickSearchNetworkMonitoringRules: "/rules",
					quickSearchNetworkMonitoringViewConfiguration: "/view-configuration",
					quickSearchConnectors: (0, e.BC)`/configuration/connectors`,
					quickSearchSitesTabSite: "/site",
					quickSearchSitesTabNetwork: "/network",
					quickSearchSitesTabTunnels: "/tunnels",
					quickSearchSitesTabStaticRoutes: "/static-routes",
					quickSearchSitesTabBreakOutApps: "/breakoutapps",
					interconnectsTableAll: "/all",
					interconnectsTablePhysical: "/physical",
					interconnectsTableVirtual: "/virtual",
					interconnectsTableCloud: "/cloud",
					interconnectsAllRoute: (0, e.BC)`/${"accountId"}/${"productName"}/all`,
					interconnectsPhysicalRoute: (0, e.BC)`/${"accountId"}/${"productName"}/physical`,
					interconnectsVirtualRoute: (0, e.BC)`/${"accountId"}/${"productName"}/virtual`,
					interconnectsCloudRoute: (0, e.BC)`/${"accountId"}/${"productName"}/cloud`,
					interconnectsPhysicalCreateRoute: (0, e.BC)`/${"accountId"}/${"productName"}/physical/create`,
					interconnectsPhysicalCreateSpeedRoute: (0, e.BC)`/${"accountId"}/${"productName"}/physical/create/speed/${"slotId"}`,
					interconnectsPhysicalCreateConfirmRoute: (0, e.BC)`/${"accountId"}/${"productName"}/physical/create/confirm`,
					interconnectsPhysicalCreateDownloadRoute: (0, e.BC)`/${"accountId"}/${"productName"}/physical/create/download/${"cniId"}`,
					interconnectsConfigureBgpRoute: (0, e.BC)`/${"accountId"}/${"productName"}/${"cniId"}/bgp`,
					tunnelHealthCheckTunnels: (0, e.BC)`/${"accountId"}/${"productName"}/tunnel-healthchecks/tunnels`,
					tunnelHealthCheckTunnelsList: (0, e.BC)`/${"accountId"}/${"productName"}/tunnel-healthchecks/tunnels/list`,
					tunnelHealthCheckTunnelsHighlight: (0, e.BC)`/${"accountId"}/${"productName"}/tunnel-healthchecks/tunnels/highlight`,
					tunnelHealthCheckTunnelsHighlightDetails: (0, e.BC)`/${"accountId"}/${"productName"}/tunnel-healthchecks/tunnels/highlight/${"tunnelId"}`,
					tunnelHealthCheckTunnelsDetails: (0, e.BC)`/${"accountId"}/${"productName"}/tunnel-healthchecks/tunnels/${"tunnelId"}`,
					asn: (0, e.BC)`/${"accountId"}/${"productName"}/configuration/asn`,
					quickSearchAsn: (0, e.BC)`/configuration/asn`
				},
				d = () => [{
					value: "all",
					label: (0, o.ZP)("account.magic_transit.configuration.static_routes.all_regions")
				}, {
					value: "AFR",
					label: (0, o.ZP)("common.regions.africa")
				}, {
					value: "SAM",
					label: (0, o.ZP)("common.regions.south_america")
				}, {
					value: "APAC",
					label: (0, o.ZP)("common.regions.asia_pacific")
				}, {
					value: "WEUR",
					label: (0, o.ZP)("common.regions.western_europe")
				}, {
					value: "EEUR",
					label: (0, o.ZP)("common.regions.eastern_europe")
				}, {
					value: "WNAM",
					label: (0, o.ZP)("common.regions.western_north_america")
				}, {
					value: "ENAM",
					label: (0, o.ZP)("common.regions.eastern_north_america")
				}, {
					value: "ME",
					label: (0, o.ZP)("common.regions.middle_east")
				}, {
					value: "OC",
					label: (0, o.ZP)("common.regions.oceania")
				}],
				l = h => [{
					value: "low",
					label: h("setting.low")
				}, {
					value: "mid",
					label: h("setting.medium")
				}, {
					value: "high",
					label: h("setting.high")
				}],
				m = h => [{
					value: "request",
					label: h("account.magic_transit.configuration.tunnels.table.health_check.target.request")
				}, {
					value: "reply",
					label: h("account.magic_transit.configuration.tunnels.table.health_check.target.reply")
				}],
				a = h => [{
					value: "unidirectional",
					label: h("account.magic_transit.configuration.tunnels.table.health_check.direction.unidirectional")
				}, {
					value: "bidirectional",
					label: h("account.magic_transit.configuration.tunnels.table.health_check.direction.bidirectional")
				}],
				u = "magic-transit",
				E = "magic-wan",
				n = "gre_tunnel",
				r = "ipsec_tunnel",
				i = "interconnect",
				p = 64,
				c = 1476,
				_ = "mid",
				y = "reply",
				T = h => [{
					value: void 0,
					label: h("account.magic_transit.configuration.tunnels.table.filters.all.default")
				}, {
					value: "gre",
					label: h("account.magic_transit.configuration.gre_tunnels")
				}, {
					value: "mpls",
					label: h("account.magic_transit.configuration.interconnects.mpls_tunnels")
				}],
				O = h => [{
					value: "all",
					label: h("account.magic_transit.configuration.tunnels.table.filters.all.default")
				}, {
					value: "gre_tunnel",
					label: h("account.magic_transit.configuration.gre_tunnels")
				}, {
					value: "ipsec_tunnel",
					label: h("account.magic_transit.configuration.ipsec_tunnels")
				}]
		},
		"../react/pages/magic/network-monitoring/constants.ts": function(W, v, t) {
			"use strict";
			t.d(v, {
				_u: function() {
					return o
				},
				bK: function() {
					return e
				},
				lC: function() {
					return s
				}
			});
			const e = {
					VIEW_RULES: "view rules list",
					CREATE_RULE: "create rule",
					UPDATE_RULE: "update rule",
					DELETE_RULE: "delete rule",
					VIEW_CONFIGURATION: "view configuration",
					CREATE_CONFIGURATION: "create configuration",
					UPDATE_CONFIGURATION: "update configuration",
					DELETE_CONFIGURATION: "delete configuration"
				},
				o = "Magic network monitoring",
				s = "user journey"
		},
		"../react/pages/magic/overview/tracking.ts": function(W, v, t) {
			"use strict";
			t.d(v, {
				VZ: function() {
					return d
				},
				lC: function() {
					return s
				},
				r8: function() {
					return o
				},
				uB: function() {
					return l
				}
			});
			var e = t("../react/pages/magic/constants.ts");
			const o = {
					VIEW_ALERTS: "view alerts",
					VIEW_ALERTS_HISTORY: "view alerts history",
					MAGIC_OVERVIEW_ANALYTICS: "load magic overview analytics"
				},
				s = "user journey",
				d = {
					CREATE_SITE: "create new magic-wan site",
					CREATE_STATIC_ROUTE: "create new route",
					CREATE_TUNNEL: "create new tunnel"
				},
				l = {
					MAGIC_WAN: e.W8,
					MAGIC_TRANSIT: e.Nz,
					MAGIC_OVERVIEW: "Magic overview"
				}
		},
		"../react/pages/magic/packet-captures/constants.ts": function(W, v, t) {
			"use strict";
			t.d(v, {
				W_: function() {
					return o
				},
				X: function() {
					return e
				},
				lC: function() {
					return s
				}
			});
			const e = {
					VIEW_BUCKETS_LIST: "view buckets list",
					CREATE_BUCKET: "create bucket",
					VALIDATE_BUCKET: "validate bucket",
					DELETE_BUCKET: "delete bucket",
					VIEW_CAPTURES_LIST: "view captures list",
					CREATE_SIMPLE_CAPTURE: "create simple capture",
					CREATE_FULL_CAPTURE: "create full capture",
					VIEW_FULL_CAPTURE: "view full capture",
					DOWNLOAD_SIMPLE_CAPTURE: "download simple capture"
				},
				o = "Magic packet captures",
				s = "user journey"
		},
		"../react/pages/onboarding/components/AppleLogin/Images/Graphics.tsx": function(W, v, t) {
			"use strict";
			t.d(v, {
				gb: function() {
					return n
				},
				iP: function() {
					return b
				},
				xL: function() {
					return O
				},
				rD: function() {
					return A
				},
				oT: function() {
					return c
				},
				i2: function() {
					return L
				},
				x1: function() {
					return m
				},
				lW: function() {
					return u
				},
				UA: function() {
					return C
				},
				K5: function() {
					return i
				},
				Ii: function() {
					return S
				},
				PJ: function() {
					return R
				},
				bK: function() {
					return y
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t.n(e),
				s = t("../../../../node_modules/@cloudflare/style-container/es/index.js"),
				d = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOwAAACGCAYAAADevGYoAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAABQKSURBVHgB7Z1djBzVlcdPdfeMxx2jDB7YxWBkY9mOyEMWg8co2l2zBgWCtKs1Jo5AK+KxRaJ9AWOUiIXd1Y4/WPZhZeywD/nYDY4deUb+SKxoMXkC40ghH048TpCtOBD3YAQEPJ7GY8/0TE/XzT3Vfbtu13RXV3dVdd26dX5Sa6q73ePxuP99zz3nf841AFl/urc7a24FBgMAbCkQBKEYLDczlVmVwcvu+aXXuVjvAIIg1KRkbINjq/KpeV/+1VP8LomVIBSFAeydObT6GF5nzLSxyag88e8PL4J/e/hmIAiilvy1WRi9NANnRqfgTG4S3v24fD16aRpahTGDizDNr1L8VoKUUXL707lPTWUG85V7Rvejp5h4avrgXUAQSSZIYfb1ZuCWm7qhpycN83syMDmVgp/9pggGzEIqNcO/lsAwmOv3SLH0bYXhVTlxP8PFnuev6cU7J89OwNrPXgcEoTs5LsAzuSl4l4sz99E0/JaL8rejk5CfLLX8vYQwF16fgcU3zbOu+/j1/J6U9fxkwYTjr12BX4x8AplUY5EuuaHb+rCoYrDthSFbrNZDXY+e2sND4q3igcfW9lmh8ZIb5wFBxB1ZmLhi4mr57sfTbQtz+dIeS5h9vV1zhCmDIv3duWvwi9NX4b0PZ2CK36/H2tsXwD18kUTdfWHXeRj9WAiWZ4WH+m9z/vlMmhX3mEb3P4pyzoGTY9YN97JfWbuQhEvEgqCEmeXiW1hZMRcv4qumJMxmtCNSoa+dRz+oihWj3rSZWVfvtVa+qeeRN5eakB4EI7VJfnLJjd3wxBf/Ep548C+AIKJG3l+OcjHiG/zk2att7S/9CFPGj0gFb5ybgPt3nq/e5ympbdND/XvqfR9DvpN55Fd/lzJSLzvNEyjc8orbBwQRNkEmflCYKMRbuCgxpG1XmDJBiFSAHzw1oTAz9s0M37W50d9t1Huw65FTA4Zh/AcJlwiTMDKyjRI/fglSpDKPfytnbUHLsFyKZdbJWWEnhts3ayTctbdfB//92GL4q6VZIIhmdDIjGyRhiVSAQkXBCnhtdqA4tOr7bq9xFazFwOne7sLsU+X9ba1wKaNMyESVkQ2SsEUqaDUUFjQXbIVGiSmEhJssVMjIBkmnRCqzcfc78ONTwr/EctmpzKr8sVX5Zq/zLFiBm3CpFKQPKmZkgyQKkQpe+slH8PX9F6v3TcbWzQ73n/Dy2pYFK7CEy7pehBSslx+nUlC8UD0jGyRRilSAH35rnj1nRyMG2z5zsH/Q6+vbFqyASkHxIE4Z2SBRQaQyK7f+rqmbyQ3fghVQKUgN4pqRDRLVRCpAN9Ouo+9X7zuN/V4ITLACt1LQ//7zEtrfBoQOGdkgUVWkAgyFV259y36gxVC4+jIIAyoFBYZuGdkgUV2kAtyOrHnunO0VZnCiOLx6XTvfKxzBVqBSkDd0z8gGSVxEKvP1A+/BS6/+qXKvuZvJjVAFK6BSUJkkZWSDJI4iFbTjZnKjI4IVuJWCdEpMJTUjGyRxFqmgXTeTGx0VrECXUhBlZINFB5HKtGrs90IkghXEpRREGdnw0E2kAmcoDCV4SEw+9EOkghWoUgqijGxn0FWkAqebCceUFodWPwUBoIRgLTpUCqKMbDToLlKZ/mfPWtujMt6N/V5QR7AVgioFUUY2epIkUkEQbiY3lBOswGspiDKyapFEkQqCcjO5oaxgBY1KQb3ZtPWVMrLRk2SRyvg19ntB+ZiuMPz5HP/ykLMU1EyoGMaiAOWMLF5n56dImAFAIq3F65hSvyi/wjpxZpTxnBJcHVcsnUeJn5AhkdanlTGlfomdYAWpL7+1j0H3JsZS8Pf39cA/3DcfiOAhkboThpvJjdguQybrPsFlayWkxsZNIIKDROodORS23EyQ3g4hEuO4sWsE7SPIex+0nngiaiGRto441kbAIDMYZAmnHvEVbLqQh1KXdUkrbHuQSNsHQ+GdUr0VQ+HicPtdOF6Jr2CHb8/BxrfRPdI7WWCAt2xPbLfkHYNEGgzY4yqHwtlCetsMhE/cU6mWYPFi7LIJ2ZvTQMyFRBosOKbUnimMiyt7KCjrYTPiLVgGIzzPvRQvL344C7eSYKuQSMMBQ2F5pjC6mYoH14xAh4i7YEdFYWpqikHSIZGGD5ZwbFguaOthM+ItWIPlRCn5YkIzxSTSzlFbwkFjfzhuJjdivsIauSSusCTSzoOhsNyFg6FwYSjcEk494i3YruKIKO1c/FDvFZZEGh3YESaHwtaY0qHOhsKCeAu20JOHrrJQdazFkkjVYNcPP6wp4aQhs7kI0RBvwR67Lc9rsTl+tRTvomj7ro93Jw6JVC3QyWTPFO6Mm8mN+Le0MF6LrexjMfEUR8GSSNUkKjeTGxr0oJlneL7uDryaLMQnLCaRqk+njf1e0ECwPFNcQfXSDok0PjiN/VAythUORRcKC+IvWKkWq2Jph0QaP5xuJmtMaQAzhYNAgxVWvTY7Emm8+dLud6QRRCzHSziBzBQOgvgLtgg5KJdiIy3tkEj1APet9kzhaNxMbsRfsOXSTiRtdiRSvVDFzeSGHpPKGKBF0coUh91mRyLVl6iN/V7QZbRgjt8swYbRZkci1Z9OjSn1iy4rbLXNLqh9LIk0OeCY0trjNXgoPKxWKCzQQ7Apk2eKyw6nIAR7+JUJ+OVIHgrTs3WfJ5HqA+5bvyofC8mMfdPDq0OZKRwEeozAN1PV8Rxjef+CfZd/2E5cy0LJ7Kn7PIqUxKoHc91MqcjdTG7oIVhss6sQxAqL34PxXw0Kdv3fLoIH7v50zfPogMEEBf5nE/ElijGlftFDsDhBsUIggpVW6a0be+Ff/ulmGBpcDncsz1Yfx09l3PfgAUj7ZQsbEQvqGvuHojX2e0GnU6Fy4sKPaOXXLuqzs803LeyCF59cAs9w8eK1AIWLeyASbryYO6Y0tQ1igD6CxQmKFfw0AVySBHtT39zy0Bd5eIyrbSPhfmHneevTm1CXKMeU+kWjFdb8RFyNjbcv2MvSaxe4HEsphLvpwRtrhHuSlwjwUN/HuXhJuOoR9ZhSv2gkWKP6S7/kI1Msv3bFrc2rXgMP3mCFyvUSUyhcfHOQcNUhDm4mN/QRrMGqIc3ly8HsYRfM9/brwRVWJKacwsXwC98ktL+NHhXGlPpFoxW2y97D+pigKAt2xa1d0ApCuN99ZhklphSjrrFf8RJOPfQRbNHOEvtpZJ8q2K+9rs2un+W3zHNNTKFw0Q5HdIZ6Y0rjFgoL9BEsttmVD8eyWuzaLe3UlHVu8NdE4JZRvp9nkykx1RnmjilNh3ZCetjoVIctt9lVmGxjlRX9tAjuX73uYZuBwsXEFGaUZURiioQbHqqNKfWLXoK1JiiWwTa7VmlkmggCXGExo1wvMYVvqjXPniOrY8DE1c3khmYrrNQE0EZILNdvF2TDmVohZ5T/+nPXVR/HGUJkdQyWuBn7vaCXYK02uzLtCdYOo1fc0lqGuFVQuLseX2ztbxc1SEx9/40xoEM02wPLaXPGlMY4FBboJVipza6dCYpj+fBXWCe4vz1YSUw5hfu1b+es5FTuo2kSbgtYJZwjdiiMY0pnFBlT6he9BCu12U0WWn+Lyz7iFYvDXWGdCOFiYmqRw+r4mafeslZdEq435o4pXa3MmFK/6CVYR5tdq6KV67cLstH8ajAxtbtidZTXeAzvULjf2H/REi5RH9XHlPpFsyyxRU5ctGqgqMkSLwxv8mIzRGLqYCWjLAsX92b3P38evvnqR2gAICR0cTO5oZ9gfbTZyY3rQZd12kEI9zvPLONJMHscDe5vv3HgIl9xK4kpEq5F3I39XtBRsKPispU2uzBrsH5BqyOKtlFiCoV74uxEove3zjGluoXCAv0Eax2OVaaVNrtmjesq4JZRfoCvLklNTJ2I0ZhSv2i4wtrHT7bSZue1cV0FULi7K1bHeokpIdwkkOP71q85x5QO9Ss7ptQv+glWKu200mbXauN61AirY73EFAr37ufOwQ4eJo5fVfvMXL/sPFLjZrqgg5vJDf0EW+hpy57YTuO6CsgZZbQ6CuFiHfJ5Hibe/a9ntU1MoYXzBz+tGVOqbSgs0E+w5Ta7nLjrVbR+GtdVQFgdd/Bbo8SUTlbHnLOEw4yX427s94KOdVj8qK2usl5LO0E0rqvA3/BVVnerI0YLX/3WaE0onC2knoYEoKdgpTa7yULrK6zfxnUVEBnlh+/p429w+7857lZH/HnRPHJSmtjBDLYhLmNK/aKpYO1MsZcVNqzG9SjBf82h167B/79pwmxpAZhmt3jYIq4ZZfxZ0TRSgcVtTKlf9BSsVIv1Yk9U2TTRDleumfDNI1dgL79NTDLrnKBZMzs+W8o+DczcBw7hxsXqiD/fA8/XuJku6OhmckPTFdaeoOilza4Tjeud4v1LJXhy72VrdZW4AMXineahz+6ZGV6zOcWKy/h7/zRUhBsHqyP+SI4xpSzFMvdBwtBTsOlCS6WdTjauhwX+C944U4At//Ux/OG9ov0wrqjFiTvhmN3JVBj+PLac3cmFuYWHIxdAEq6qVkcMhZ//YY2xf4fuJZx66CnYcptddYJisza7KBrXgwRXRAyBn/v2uBUCVxjnTzwNR1ZuhgYJmeLw6n0zQ3ctk4RroZrVcfzqbE0ozH/e15MWCgs0DYkt7FW2iUUxysZ1v7w/VoIn9o7NDYHBvBeOrPBk0UPhptjMvVwJ6BJSKjGFH0aOMaUX0pDeAglFX8HKbXZNJiiq0LjeDr/+/TQ8uWcMTp+393VgwI+sEPjwypYypxgmzwz3D+L+tl5iCoWLVsdOCxf/7v/5SXVMKYv7mFK/6CzYaptds0yxKo3rXsFV53uvTFjJpQ/GquE8s0LgQ8s3gI+aZFm45cSUU7hodcSMcqcSU/jhsMvet7LKmNL9kGD0FaxU2mlWi1Wtcd0NLNlgCPx/r1yVH77AFeQ5BPaCEK6J37dBYgq9vGHpFj8Q6owp3QEJR+MV1jZPuK2wcarBnr9Y5FngS3IIjDJ6nZdsUKwnIARmh/tPNEpM4d42DKujcDNJxn5m8r8/yaGwQF/Bemyzi0PjunAtbX7hkjME3g5Hlt8rl2zCAhNTXDbLyokpW7hhWB1HsYRjG/txsd2LHxxAaCxYxwTFRqjeuI4hMJZr0LUkMV4JgQehg/CkFHqmBssZZRM7Y+pnlH2cE4Tq3PhizZjSC7xmvA0IC53LOkhOXDQSrcqN6yIEPnmmID3KTqNrKawQuBl8b2vtb1NQGqgkpuYI935ew8X9Z6uJKeFmksaUJtLN5EZiBNso8aRi47oIgZ/kyaWaENg098DhFXd2IgRuhlO4eOYqSIkp7FWtJqY8CtfhZmI6jin1i96CZWbTCYqqNa47jfsVxvltCxxdqVxoKITLL9fVszpiiIzC/fGpvOv+toGxX+txL+2g+QprZ4obTVBUqXEdjfsYAte6lioh8OHl+0BheFLKSkwxxupmlDfufqdhYspp7GcGjFMoXB+9BSvVYhtNUFShcR3fsMffnLSM+3NC4OLVe1UIgb2Cwk1D0ZPVkVWefOPsRE0orPOYUr+oPx7QF9hmVxbAWJ0VVoXGdcu4f/SK0wuMWeAdPASO5bhODJM5uZ5H3hzkitxnQnoQjNRX+GNWCIPCxdtja/vgc0uyNdZDa0zp8Oq9QNRFb8EWedKpsi2tlyWO2jSBIfBz3xmX2+EQNO5vgCMrYz9FQRLuALDSYD3h8v8F6RXoZkon3s3kht4hcXmCYsM2uygb19G437B39XD8xSojElMmGANOq2MFhkkmnM1EobA7mofEgG+FHP88vwMvsc0ue7O9kkbRuI4h8MvHJ5xeYFbpXdV2Yj0yO9yPX06kHz21jH9dnzHhHmYYn+ab1pFPTWb2J2WQmh/0F6w1QTFlCRbb7G6VBdvhxnXsXf3PA/laL7BGIbBXSkOr8csx/tuvnopOSvVGAlbYVF6Mw3fuYzvZuI4h8As/+ETOApeN+7MTvtrhiGShv2BT5ojYqjsF24nGdQyBD79+zekFZlYWuMNeYCL+6C9Yk6+wFS06JyiG3bhuGfe/Oz43BGZsS1ReYCLe6C9YbLMrlcPdOVniEBvX0biPJZu5IXBxS5yMEIRa6C9YbLPb+LZ1iSsqijbbY4RWg8WPhMOv1QmBTXOvil5gIl4kIEtskeO3pXiB+1YUbBiN6xgCv3T0Chz/+ZT88DiYpS1w9DPHgCB8kgzB4gRFoyxYbLPruz4VeON6eeL+WG0IbBn3ZzdQCEwERUJWWPMTO1OMguoKrHFdhMDfOz4ht8OVQ+DSte1UsiGCJCGCNdCUsAmvhFCDaFzHEPjlV6/ONe4DPM33q/uAIAImGYI1WL7iN6+22fltXG9o3McJhhQCEyGRkBXWbrMTExTbbVzHV+GMpRcO5GtDYJxtNHttG4XARJgkQ7BSm51wN7XTuO7au6q5cZ9QA92HsJVxtNmh46nVxnUMgf0eOkUQfkmGYBEmTVB83y69eDFNiN7VIA6dIgg/JMU4AXKb3cg529vr1lbn2rt6mFZVovMkSLD2BMXzf7SPn2zUuE7GfUJFkiNYa4JieTWVmwDqrbCNe1fJuE9ES4JWWLu0IyM3rjc07lPvKqEIyRFsupAXbXYyonEdQ2BcVWvPsbFKNhsoBCZUITlZ4vJpdnNMDdi4ruKhUwRRjwSFxBYo2F75gZ9ykdY17lPvKqEg0R4m02m+9PaP+L94vcufKBv3FT/HhkguyVphGYw2/oii3lVCfZKzh0Wkw7EkYnnoFJFMErbCGjnHChvrQ6eI5JEswUoTFCGBE/eJ+JOskLjQg1libQ+dIgj92Pj2ABBETPkz3wbhzpWGUaIAAAAASUVORK5CYII=",
				l = t("../node_modules/@cloudflare/elements/es/index.js");
			const m = () => o().createElement(a, null, o().createElement("svg", {
					width: "94",
					height: "5",
					viewBox: "0 0 94 5",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg"
				}, o().createElement("path", {
					d: "M48.416 2.2002L1.99976 2.20021",
					stroke: "#0055DC",
					strokeWidth: "4",
					strokeLinecap: "square"
				}), o().createElement("path", {
					d: "M66.3115 2.2002L59.3767 2.20019",
					stroke: "#0055DC",
					strokeWidth: "4",
					strokeLinecap: "square"
				}), o().createElement("path", {
					d: "M78.7949 2.2002L76.021 2.20019",
					stroke: "#0055DC",
					strokeWidth: "4",
					strokeLinecap: "square"
				}), o().createElement("path", {
					d: "M91.2773 2.2002L88.5034 2.20019",
					stroke: "#0055DC",
					strokeWidth: "4",
					strokeLinecap: "square"
				}))),
				a = (0, s.createComponent)(({
					theme: P
				}) => ({
					position: "absolute",
					display: "none",
					desktop: {
						display: "block",
						top: "58px",
						left: "8%",
						right: "85%"
					}
				})),
				u = () => o().createElement(E, null, o().createElement("svg", {
					width: "211",
					height: "71",
					viewBox: "0 0 211 71",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg"
				}, o().createElement("circle", {
					cx: "175.5",
					cy: "35.5",
					r: "35.5",
					fill: "#044096"
				}), o().createElement("path", {
					d: "M48.7492 28L2.33298 28",
					stroke: "#0055DC",
					strokeWidth: "4",
					strokeLinecap: "square"
				}), o().createElement("path", {
					d: "M66.6457 28L59.7109 28",
					stroke: "#0055DC",
					strokeWidth: "4",
					strokeLinecap: "square"
				}), o().createElement("path", {
					d: "M79.1281 28L76.3542 28",
					stroke: "#6ECCE5",
					strokeWidth: "4",
					strokeLinecap: "square"
				}), o().createElement("path", {
					d: "M91.6106 28.0005L88.8366 28.0005",
					stroke: "#E2F5FA",
					strokeWidth: "4",
					strokeLinecap: "square"
				}), o().createElement("path", {
					d: "M164.092 28.2002L100.767 28.2002",
					stroke: "#6ECCE5",
					strokeWidth: "4",
					strokeLinecap: "square"
				}))),
				E = (0, s.createComponent)(({
					theme: P
				}) => ({
					position: "absolute",
					top: "20px",
					left: "15%",
					right: "85%",
					desktop: {
						top: "45px",
						left: "22%",
						right: "78%"
					}
				})),
				n = () => o().createElement(r, null, o().createElement(l.Ei, {
					alt: "airplane",
					src: d,
					width: "85%"
				})),
				r = (0, s.createComponent)(({
					theme: P
				}) => ({
					position: "absolute",
					width: "90px",
					top: "90px",
					left: "65%",
					right: "35%",
					zIndex: "2",
					desktop: {
						width: "235px"
					}
				})),
				i = () => o().createElement(p, null, o().createElement("svg", {
					width: "104",
					height: "23",
					viewBox: "0 0 104 23",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg"
				}, o().createElement("path", {
					d: "M93.7248 0H90.2837V7.74245H93.7248V0Z",
					fill: "white"
				}), o().createElement("path", {
					d: "M103.187 9.4624H95.4448V12.9035H103.187V9.4624Z",
					fill: "white"
				}), o().createElement("path", {
					d: "M93.7248 14.6245H90.2837V22.367H93.7248V14.6245Z",
					fill: "white"
				}), o().createElement("path", {
					d: "M88.5632 9.4624H80.8208V12.9035H88.5632V9.4624Z",
					fill: "white"
				}), o().createElement("path", {
					d: "M36.0259 10.627L2.00024 10.627",
					stroke: "#0055DC",
					strokeWidth: "4",
					strokeLinecap: "square"
				}), o().createElement("path", {
					d: "M56.8198 10.627L44.5328 10.627",
					stroke: "#6ECCE5",
					strokeWidth: "4",
					strokeLinecap: "square"
				}), o().createElement("path", {
					d: "M72.8872 10.627L65.326 10.627",
					stroke: "#C3E9F3",
					strokeWidth: "4",
					strokeLinecap: "square"
				}))),
				p = (0, s.createComponent)(({
					theme: P
				}) => ({
					position: "absolute",
					display: "none",
					desktop: {
						display: "block",
						top: "130px",
						left: "88%",
						right: "12%"
					}
				})),
				c = () => o().createElement(_, null, o().createElement("svg", {
					width: "13",
					height: "13",
					viewBox: "0 0 13 13",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg"
				}, o().createElement("ellipse", {
					cx: "6.33672",
					cy: "6.34376",
					rx: "6.33672",
					ry: "6.34376",
					fill: "#086FFF"
				}))),
				_ = (0, s.createComponent)(({
					theme: P
				}) => ({
					position: "absolute",
					top: "90px",
					left: "20%",
					right: "80%",
					desktop: {
						top: "156px",
						left: "23%",
						right: "77%"
					}
				})),
				y = () => o().createElement(T, null, o().createElement("svg", {
					width: "15",
					height: "15",
					viewBox: "0 0 15 15",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg"
				}, o().createElement("path", {
					d: "M7.05981 -0.000243833L0 7.05957L7.05981 14.1194L14.1196 7.05957L7.05981 -0.000243833Z",
					fill: "#6ECCE5"
				}))),
				T = (0, s.createComponent)(({
					theme: P
				}) => ({
					position: "absolute",
					top: "38px",
					left: "83%",
					right: "17%",
					desktop: {
						top: "64px",
						left: "44%",
						right: "56%"
					}
				})),
				O = () => o().createElement(h, null, o().createElement("svg", {
					width: "22",
					height: "22",
					viewBox: "0 0 22 22",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg"
				}, o().createElement("path", {
					d: "M12.6922 0H9.30762V7.61541H12.6922V0Z",
					fill: "#C5EBF5"
				}), o().createElement("path", {
					d: "M22.0002 9.30762H14.3848V12.6922H22.0002V9.30762Z",
					fill: "#C5EBF5"
				}), o().createElement("path", {
					d: "M12.6922 14.3848H9.30762V22.0002H12.6922V14.3848Z",
					fill: "#C5EBF5"
				}), o().createElement("path", {
					d: "M7.61542 9.30762H0V12.6922H7.61542V9.30762Z",
					fill: "#C5EBF5"
				}))),
				h = (0, s.createComponent)(({
					theme: P
				}) => ({
					position: "absolute",
					display: "none",
					desktop: {
						display: "block",
						top: "-25px",
						left: "30%",
						right: "70%"
					}
				})),
				S = () => o().createElement(g, null, o().createElement("svg", {
					width: "32",
					height: "32",
					viewBox: "0 0 32 32",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg"
				}, o().createElement("path", {
					d: "M18.0868 0H13.2637V10.852H18.0868V0Z",
					fill: "#FBAD41"
				}), o().createElement("path", {
					d: "M31.35 13.2637H20.498V18.0868H31.35V13.2637Z",
					fill: "#FBAD41"
				}), o().createElement("path", {
					d: "M18.0868 20.498H13.2637V31.35H18.0868V20.498Z",
					fill: "#FBAD41"
				}), o().createElement("path", {
					d: "M10.852 13.2637H0V18.0868H10.852V13.2637Z",
					fill: "#FBAD41"
				}))),
				g = (0, s.createComponent)(({
					theme: P
				}) => ({
					position: "absolute",
					display: "none",
					desktop: {
						display: "block",
						top: "160px",
						left: "70%",
						right: "30%"
					}
				})),
				C = () => o().createElement(M, null, o().createElement("svg", {
					width: "48",
					height: "15",
					viewBox: "0 0 48 15",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg"
				}, o().createElement("path", {
					d: "M40.25 3.0781e-07L33.1902 7.05981L40.25 14.1196L47.3098 7.05981L40.25 3.0781e-07Z",
					fill: "#6ECCE5"
				}), o().createElement("path", {
					d: "M20.9031 6.61694L1.99994 6.61694",
					stroke: "#0055DC",
					strokeWidth: "4",
					strokeLinecap: "square"
				}))),
				M = (0, s.createComponent)(({
					theme: P
				}) => ({
					position: "absolute",
					display: "none",
					desktop: {
						display: "block",
						top: "160px",
						left: "20%",
						right: "70%"
					}
				})),
				b = () => o().createElement("svg", {
					width: "50",
					height: "46",
					viewBox: "0 0 48 40",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg"
				}, o().createElement("path", {
					d: "M12.4025 16.0001L10.265 13.8927L8.015 16.1427C8.86952 12.6096 10.8668 9.45753 13.6967 7.17612C16.5265 4.8947 20.0305 3.6116 23.6645 3.52609C27.2984 3.44059 30.8589 4.55747 33.7929 6.70326C36.3879 8.60112 38.3644 11.2099 39.492 14.2014L40.339 13.9224L41.5646 13.5186L42.4174 13.2377C41.0751 9.5683 38.6567 6.37586 35.4641 4.08759C31.9041 1.53603 27.5888 0.257281 23.2134 0.457383C18.838 0.657484 14.6574 2.32478 11.3452 5.19063C8.03295 8.05648 5.78199 11.954 4.955 16.2551L2.63 13.9151L0.5 16.0001L6.5 22.0001L12.4025 16.0001Z",
					fill: "#C5EBF5"
				}), o().createElement("path", {
					d: "M47.5646 24.0049L41.5646 18.0049L35.6471 24.0049L37.7846 26.1124L40.0346 23.8624C39.1898 27.4009 37.1992 30.561 34.3725 32.851C31.5458 35.1411 28.0415 36.4328 24.4048 36.5252C20.768 36.6176 17.2027 35.5055 14.2634 33.3619C11.5162 31.3585 9.45991 28.559 8.36721 25.3515L7.54721 25.6183L6.37385 26.0001L5.5 26.2845C6.79997 30.1536 9.28442 33.5247 12.6114 35.9135C16.1663 38.4659 20.4765 39.7483 24.8486 39.5544C29.2206 39.3605 33.4003 37.7015 36.7153 34.8443C40.0303 31.9872 42.2878 28.098 43.1246 23.8024L45.4346 26.1199L47.5646 24.0049Z",
					fill: "#C5EBF5"
				})),
				R = () => o().createElement("svg", {
					width: "50",
					height: "46",
					viewBox: "0 0 39 41",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg"
				}, o().createElement("path", {
					d: "M31.1271 6.20742L32.7396 3.67992C25.4571 -1.00008 13.5396 -1.00008 6.17465 3.67992L7.74965 6.21492C14.2521 2.11242 24.7221 2.11242 31.1271 6.20742Z",
					fill: "#C5EBF5"
				}), o().createElement("path", {
					d: "M19.3896 4.67742C15.6941 4.70925 12.0606 5.63105 8.79679 7.36478C5.533 9.09851 2.73499 11.5931 0.639648 14.6374L3.16715 16.2499C5.00538 13.6448 7.43278 11.5105 10.2518 10.0209C13.0708 8.53125 16.2017 7.7283 19.3896 7.67742C28.3896 7.67742 34.1496 13.2724 35.9496 16.2274L38.4996 14.6749C36.4146 11.2174 29.7171 4.67742 19.3896 4.67742Z",
					fill: "#C5EBF5"
				}), o().createElement("path", {
					d: "M19.3971 9.31242C13.4646 9.31242 8.46965 11.8849 5.34215 16.5574C3.6804 19.123 2.6668 22.0539 2.38852 25.0979C2.11024 28.142 2.57563 31.2081 3.74465 34.0324L6.51965 32.8924C5.53401 30.5237 5.1385 27.951 5.36713 25.3956C5.59576 22.8402 6.44168 20.3786 7.83215 18.2224C9.10397 16.3409 10.8316 14.8121 12.8539 13.7787C14.8762 12.7453 17.1272 12.2408 19.3971 12.3124C29.8296 12.3124 32.6421 20.8699 32.8446 24.1699C33.0771 28.0399 30.8646 28.4974 30.4446 28.5424L30.2046 28.5874C29.0973 28.8301 27.9393 28.6509 26.9571 28.0849C26.1096 27.4924 25.5846 26.4049 25.4046 24.8599C24.9171 20.6224 21.6546 18.8599 18.8796 19.0249C15.8271 19.2049 12.5421 21.6724 12.5421 26.6824C12.5421 33.9049 19.1721 39.7174 25.2921 40.9324L25.8921 37.9924C21.5646 37.1449 15.5421 32.7499 15.5421 26.6824C15.5421 23.5999 17.3046 22.1224 19.0521 22.0249C20.4246 21.9424 22.1421 22.7299 22.4271 25.2049C22.7121 27.6799 23.6721 29.4649 25.2771 30.5674C26.9271 31.5879 28.9083 31.9293 30.8046 31.5199C32.7547 31.3024 36.1746 29.4799 35.8372 24.0199C35.5896 19.9024 32.1471 9.31242 19.3971 9.31242Z",
					fill: "#C5EBF5"
				}), o().createElement("path", {
					d: "M11.0346 23.1199C12.2496 19.2499 15.0771 16.9474 18.6471 16.9474C27.0396 16.9474 27.6921 24.1774 27.6921 26.3899H30.6921C30.6921 20.6524 27.5421 13.9474 18.6471 13.9474C13.7646 13.9474 9.75215 17.1274 8.14715 22.1974C7.17854 25.4217 7.25631 28.8699 8.3693 32.0471C9.4823 35.2244 11.5733 37.9674 14.3421 39.8824L16.0296 37.3999C13.7995 35.8488 12.116 33.6332 11.2191 31.069C10.3222 28.5048 10.2576 25.7229 11.0346 23.1199Z",
					fill: "#C5EBF5"
				}), o().createElement("path", {
					d: "M22.9371 31.3399C22.1161 30.5273 21.4749 29.5512 21.055 28.475C20.6351 27.3988 20.4459 26.2464 20.4996 25.0924H17.4996C17.4514 26.6502 17.7256 28.2012 18.3051 29.648C18.8846 31.0948 19.7568 32.4062 20.8671 33.4999C23.4992 35.8335 26.9209 37.0778 30.4371 36.9799C30.7071 36.9799 30.9846 36.9799 31.2546 36.9799L31.1121 33.9799C27.8421 34.1299 24.8571 33.1699 22.9371 31.3399Z",
					fill: "#C5EBF5"
				})),
				A = () => o().createElement("svg", {
					width: "50",
					height: "46",
					viewBox: "0 0 48 28",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg"
				}, o().createElement("path", {
					d: "M24.0165 14.6841C25.4257 14.6841 26.8032 14.2662 27.9749 13.4833C29.1466 12.7004 30.0598 11.5876 30.5991 10.2857C31.1384 8.98378 31.2795 7.55118 31.0046 6.16907C30.7296 4.78695 30.051 3.5174 29.0546 2.52095C28.0581 1.5245 26.7886 0.84591 25.4065 0.57099C24.0244 0.29607 22.5918 0.437169 21.2898 0.976444C19.9879 1.51572 18.8751 2.42895 18.0922 3.60065C17.3093 4.77235 16.8915 6.14989 16.8915 7.55908C16.893 9.44827 17.6442 11.2596 18.9801 12.5955C20.3159 13.9313 22.1273 14.6825 24.0165 14.6841ZM24.0165 3.43783C24.8323 3.43783 25.6298 3.67976 26.3082 4.13302C26.9865 4.58628 27.5153 5.23052 27.8275 5.98427C28.1397 6.73801 28.2214 7.56741 28.0622 8.36758C27.903 9.16775 27.5102 9.90276 26.9333 10.4796C26.3564 11.0565 25.6214 11.4494 24.8212 11.6086C24.021 11.7677 23.1916 11.686 22.4379 11.3738C21.6841 11.0616 21.0399 10.5329 20.5866 9.85456C20.1334 9.17621 19.8915 8.37868 19.8915 7.56283C19.8915 6.46882 20.3261 5.41961 21.0996 4.64602C21.8732 3.87243 22.9224 3.43783 24.0165 3.43783Z",
					fill: "#C5EBF5"
				}), o().createElement("path", {
					d: "M9.03896 17.7928C10.0773 17.7928 11.0923 17.4849 11.9557 16.9081C12.8191 16.3312 13.492 15.5112 13.8893 14.5519C14.2867 13.5926 14.3907 12.537 14.1881 11.5186C13.9855 10.5002 13.4855 9.56475 12.7513 8.83052C12.017 8.0963 11.0816 7.59628 10.0632 7.39371C9.04478 7.19114 7.98918 7.29511 7.02987 7.69247C6.07056 8.08983 5.25062 8.76273 4.67374 9.62609C4.09687 10.4894 3.78896 11.5045 3.78896 12.5428C3.79035 13.9348 4.34392 15.2693 5.32818 16.2536C6.31245 17.2379 7.647 17.7914 9.03896 17.7928ZM9.03896 10.2928C9.48397 10.2928 9.91898 10.4248 10.289 10.672C10.659 10.9193 10.9474 11.2707 11.1177 11.6818C11.288 12.0929 11.3325 12.5453 11.2457 12.9818C11.1589 13.4182 10.9446 13.8192 10.63 14.1338C10.3153 14.4485 9.91437 14.6628 9.47791 14.7496C9.04146 14.8364 8.58906 14.7919 8.17792 14.6216C7.76679 14.4513 7.41539 14.1629 7.16815 13.7929C6.92092 13.4229 6.78896 12.9878 6.78896 12.5428C6.78956 11.9465 7.02687 11.3748 7.44876 10.9533C7.87066 10.5318 8.44261 10.2951 9.03896 10.2951V10.2928Z",
					fill: "#C5EBF5"
				}), o().createElement("path", {
					d: "M40.5112 18.5751H37.4865C36.3725 18.5741 35.2726 18.8238 34.2682 19.3056C33.2866 18.1392 32.0619 17.2014 30.6798 16.5581C29.2977 15.9147 27.7917 15.5813 26.2672 15.5811H21.7327C20.2109 15.5814 18.7076 15.9137 17.3275 16.5549C15.9474 17.1961 14.7238 18.1308 13.7422 19.2936C12.7413 18.8193 11.6473 18.5739 10.5397 18.5751H7.51571C5.5307 18.5773 3.62759 19.3667 2.22384 20.7701C0.820079 22.1736 0.0302906 24.0766 0.02771 26.0616L1.52771 27.5616H46.5L48 26.0616C47.9976 24.0764 47.2077 22.1732 45.8038 20.7697C44.3998 19.3661 42.4964 18.5769 40.5112 18.5751ZM7.51571 21.5751H10.5397C11.083 21.5778 11.6213 21.6794 12.1282 21.8751C11.7558 22.7322 11.5008 23.6356 11.37 24.5608H3.28571C3.59698 23.6878 4.17049 22.9323 4.92771 22.3978C5.68493 21.8634 6.58885 21.576 7.51571 21.5751ZM14.4007 24.5623C14.7489 22.8744 15.6681 21.358 17.0036 20.2685C18.3391 19.1791 20.0092 18.5831 21.7327 18.5811H26.2672C27.9907 18.5829 29.6609 19.1787 30.9966 20.268C32.3322 21.3573 33.2516 22.8736 33.6 24.5616L14.4007 24.5623ZM36.63 24.5623C36.4999 23.6397 36.2462 22.7389 35.8755 21.8841C36.3887 21.6824 36.935 21.5776 37.4865 21.5751H40.5112C41.4382 21.576 42.3422 21.8636 43.0993 22.3984C43.8564 22.9332 44.4297 23.689 44.7405 24.5623H36.63Z",
					fill: "#C5EBF5"
				}), o().createElement("path", {
					d: "M39.0105 17.7928C40.0488 17.7928 41.0638 17.4849 41.9272 16.9081C42.7906 16.3312 43.4635 15.5112 43.8608 14.5519C44.2582 13.5926 44.3622 12.537 44.1596 11.5186C43.957 10.5002 43.457 9.56475 42.7228 8.83052C41.9885 8.0963 41.0531 7.59628 40.0347 7.39371C39.0163 7.19114 37.9607 7.29511 37.0014 7.69247C36.0421 8.08983 35.2221 8.76273 34.6452 9.62609C34.0684 10.4894 33.7605 11.5045 33.7605 12.5428C33.7619 13.9348 34.3154 15.2693 35.2997 16.2536C36.284 17.2379 37.6185 17.7914 39.0105 17.7928ZM39.0105 10.2928C39.4555 10.2928 39.8905 10.4248 40.2605 10.672C40.6305 10.9193 40.9189 11.2707 41.0892 11.6818C41.2595 12.0929 41.304 12.5453 41.2172 12.9818C41.1304 13.4182 40.9161 13.8192 40.6014 14.1338C40.2868 14.4485 39.8859 14.6628 39.4494 14.7496C39.013 14.8364 38.5606 14.7919 38.1494 14.6216C37.7383 14.4513 37.3869 14.1629 37.1397 13.7929C36.8924 13.4229 36.7605 12.9878 36.7605 12.5428C36.7611 11.9465 36.9984 11.3748 37.4203 10.9533C37.8422 10.5318 38.4141 10.2951 39.0105 10.2951V10.2928Z",
					fill: "#C5EBF5"
				})),
				L = () => o().createElement("svg", {
					width: "50",
					height: "46",
					viewBox: "0 0 40 46",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg"
				}, o().createElement("path", {
					d: "M26.4256 15.404C26.4243 15.3512 26.4193 15.2986 26.4106 15.2465C26.4031 15.1415 26.3956 15.0365 26.3806 14.939C26.38 14.9109 26.3749 14.8831 26.3656 14.8565C26.3665 14.8288 26.364 14.8011 26.3581 14.774C26.2831 13.9865 26.1781 13.214 26.0731 12.4715C26.0656 12.4715 26.0506 12.479 26.0506 12.4865C25.1206 12.839 24.1756 13.244 23.2081 13.6865C23.2606 14.084 23.3131 14.504 23.3581 14.9315L23.3656 14.939C23.388 15.0806 23.403 15.2233 23.4106 15.3665C23.4406 15.6065 23.4631 15.8465 23.4856 16.094C23.4931 16.214 23.5156 16.334 23.5156 16.4615C23.5156 16.589 23.5381 16.7165 23.5456 16.8365L23.5606 16.829C24.5581 16.349 25.5256 15.929 26.4406 15.5615H26.4481C26.4406 15.509 26.4331 15.464 26.4256 15.404ZM22.0531 16.3565C21.8356 16.229 21.6181 16.109 21.3931 15.9965C20.9731 15.764 20.5531 15.539 20.1256 15.329C20.0814 15.2982 20.0335 15.273 19.9831 15.254C19.9831 15.239 19.9831 15.239 19.9756 15.2465C18.9181 15.794 17.8581 16.3765 16.7956 16.994H16.7656C16.7131 17.0315 16.6531 17.0615 16.5931 17.099C16.5331 17.1365 16.4656 17.174 16.4131 17.204C15.3331 17.8265 14.2981 18.464 13.2931 19.1165H13.2856C12.2581 19.784 11.2756 20.444 10.3381 21.1115C9.46812 21.734 8.63562 22.3565 7.86312 22.9865C6.68838 23.9077 5.56424 24.8916 4.49562 25.934C1.00812 29.354 -0.199384 32.0765 0.918116 34.0115H0.925616C2.03562 35.939 4.99062 36.2465 9.70061 34.9415C10.4806 34.724 11.2981 34.469 12.1456 34.169C11.9956 33.1865 11.8606 32.1815 11.7481 31.124C7.11312 32.8115 4.08312 33.104 3.52062 32.519C3.49539 32.0868 3.62281 31.6594 3.88062 31.3115C4.70562 29.894 6.85062 27.5615 10.3306 24.854C10.6606 24.6065 10.9831 24.3515 11.3356 24.104C11.4481 24.014 11.5681 23.9315 11.6881 23.849C11.8831 23.7065 12.0781 23.564 12.2806 23.4215C12.3856 23.3465 12.4981 23.264 12.6106 23.1815C12.7006 23.114 12.7981 23.0465 12.8881 22.979C12.9931 22.904 13.0981 22.8365 13.1956 22.7615L13.2031 22.769C14.1331 22.124 15.1456 21.464 16.2181 20.804C16.8181 20.444 17.4481 20.069 18.0931 19.694C18.7381 19.319 19.3681 18.974 19.9831 18.6365C21.0931 18.0365 22.1731 17.4965 23.2006 16.994C22.8181 16.775 22.4356 16.5665 22.0531 16.3565ZM16.6306 31.049C16.5556 30.4415 16.4956 29.8115 16.4431 29.1515C15.4306 29.624 14.4706 30.0515 13.5556 30.419C13.5516 30.4231 13.5463 30.4257 13.5406 30.4265C13.6456 31.4915 13.7731 32.519 13.9306 33.509C13.9306 33.509 13.9306 33.5015 13.9456 33.5015C14.8681 33.1415 15.8131 32.7365 16.7806 32.2865C16.7356 31.889 16.6756 31.475 16.6306 31.049ZM39.0781 11.975H39.0706C37.9606 10.04 34.9981 9.72502 30.2881 11.03C29.5081 11.2475 28.6981 11.5025 27.8506 11.8025V11.8175C28.0006 12.7925 28.1356 13.805 28.2481 14.855C32.8531 13.1825 35.8756 12.8975 36.4756 13.475C36.7006 14.39 34.4431 17.405 29.6506 21.125C29.3356 21.3725 29.0056 21.6275 28.6606 21.8675C28.6606 21.8695 28.6598 21.8714 28.6584 21.8728C28.657 21.8742 28.6551 21.875 28.6531 21.875C28.1656 22.2425 27.6556 22.6175 27.1081 22.9925H27.1006C27.0031 23.06 26.8981 23.1275 26.7931 23.2025C25.8631 23.8475 24.8506 24.5 23.7706 25.175C23.1706 25.5425 22.5481 25.91 21.9031 26.285C21.2581 26.66 20.6206 27.005 20.0056 27.3425C18.8881 27.9425 17.8156 28.4975 16.7881 28.985C17.1631 29.2025 17.5381 29.4125 17.9131 29.615C18.0781 29.7125 18.2431 29.8025 18.4081 29.885C18.4883 29.9342 18.5709 29.9793 18.6556 30.02C19.0381 30.23 19.4206 30.4325 19.7956 30.6275C19.8631 30.665 19.9306 30.695 19.9981 30.725L20.0056 30.7325C21.0631 30.1925 22.1281 29.6 23.2006 28.9925L23.2156 28.985L23.2231 28.9775L23.5831 28.7675V28.76L23.7856 28.6475C24.0931 28.4675 24.3931 28.295 24.6931 28.1075C24.8581 28.0175 25.0156 27.92 25.1731 27.815C25.2568 27.7712 25.337 27.721 25.4131 27.665C25.6006 27.5525 25.7881 27.44 25.9681 27.3275C26.1856 27.1925 26.4031 27.0575 26.6131 26.915L26.6956 26.855H26.7031C26.7707 26.8195 26.8359 26.7794 26.8981 26.735C27.3331 26.4575 27.7531 26.1725 28.1731 25.8875C28.3006 25.805 28.4281 25.715 28.5556 25.625C28.8031 25.46 29.0431 25.295 29.2831 25.1225C29.3956 25.0475 29.5006 24.965 29.6131 24.89L29.6356 24.8675L29.6431 24.875C29.6474 24.8711 29.6501 24.8658 29.6506 24.86L29.6581 24.8525C30.0856 24.545 30.5056 24.23 30.9181 23.93C30.9706 23.885 31.0231 23.8475 31.0756 23.81C31.4431 23.5475 31.7881 23.27 32.1256 23C33.3003 22.0761 34.4244 21.0897 35.4931 20.045C36.6912 18.9223 37.7357 17.6463 38.5996 16.25C39.0383 15.5378 39.329 14.7445 39.4546 13.9175C39.5395 13.2464 39.4076 12.5658 39.0781 11.975Z",
					fill: "#C5EBF5"
				}), o().createElement("path", {
					d: "M26.7931 22.784V22.775C26.7931 22.34 26.7856 21.9125 26.7781 21.485V21.4775C26.7781 21.29 26.7706 21.11 26.7631 20.9225C26.7631 20.825 26.7631 20.7275 26.7556 20.6375C26.7481 20.3 26.7406 19.9625 26.7181 19.6325C26.7181 19.5425 26.7181 19.445 26.7106 19.355C26.7096 19.2798 26.7046 19.2047 26.6956 19.13V19.115C26.6956 19.04 26.6956 18.965 26.6881 18.89C26.6868 18.8198 26.6818 18.7497 26.6731 18.68C26.6656 18.545 26.6581 18.41 26.6581 18.275C26.6281 17.795 26.5981 17.33 26.5606 16.865C26.5531 16.775 26.5456 16.685 26.5381 16.6025C26.5156 16.3475 26.4931 16.1075 26.4706 15.86L26.4481 15.6125C26.442 15.5983 26.4394 15.5829 26.4406 15.5675L26.4481 15.56C26.4406 15.5075 26.4331 15.4625 26.4256 15.4025C26.4243 15.3497 26.4193 15.2971 26.4106 15.245C26.4031 15.14 26.3956 15.035 26.3806 14.9375C26.3799 14.9094 26.3749 14.8816 26.3656 14.855C26.3665 14.8273 26.364 14.7996 26.3581 14.7725C26.2831 13.985 26.1781 13.2125 26.0731 12.47C25.8559 10.9959 25.5631 9.534 25.1956 8.09002C23.9731 3.35752 22.2256 0.95752 19.9981 0.95752C17.7706 0.95752 16.0156 3.36502 14.7931 8.09752C14.5906 8.88502 14.4106 9.71752 14.2381 10.6025C15.1681 10.9625 16.1131 11.3525 17.0806 11.78C17.4032 9.38634 18.0991 7.05805 19.1431 4.88002C19.4581 4.34002 19.7506 4.03252 19.9981 3.96502C20.9056 4.22002 22.3831 7.68502 23.2081 13.685C23.2606 14.0825 23.3131 14.5025 23.3581 14.93L23.3656 14.9375C23.388 15.0791 23.403 15.2218 23.4106 15.365C23.4406 15.605 23.4631 15.845 23.4856 16.0925C23.4931 16.2125 23.5156 16.3325 23.5156 16.46C23.5156 16.5875 23.5381 16.715 23.5456 16.835C23.5531 16.955 23.5681 17.0825 23.5831 17.21V17.2175C23.6731 18.3575 23.7406 19.5575 23.7706 20.825C23.7856 21.53 23.8006 22.25 23.8006 22.9925C23.8006 23.735 23.7931 24.4625 23.7706 25.175C23.7331 26.435 23.6806 27.6275 23.5831 28.76V28.7675C23.6506 28.73 23.7181 28.685 23.7856 28.6475C24.0931 28.4675 24.3931 28.295 24.6931 28.1075C24.8581 28.0175 25.0156 27.92 25.1731 27.815C25.2568 27.7712 25.337 27.721 25.4131 27.665C25.6006 27.5525 25.7881 27.44 25.9681 27.3275C26.1481 27.215 26.3356 27.1025 26.5081 26.99C26.5444 26.9668 26.5794 26.9418 26.6131 26.915L26.6956 26.855H26.7031C26.7631 25.67 26.7931 24.455 26.7931 23.2175L26.7931 23.2025C26.7995 23.1302 26.802 23.0576 26.8006 22.985V22.7975L26.7931 22.784ZM25.3081 29.9315C24.7381 29.6915 24.1606 29.4215 23.5606 29.144L23.5531 29.1515C23.4631 30.269 23.3431 31.3115 23.2156 32.2865C23.7556 32.534 24.2956 32.7665 24.8281 32.9915C25.2406 33.164 25.6606 33.3365 26.0656 33.494L26.0731 33.4865C26.2231 32.504 26.3506 31.4765 26.4481 30.404C26.0746 30.2615 25.6996 30.104 25.3081 29.9315ZM25.7506 35.384C24.8281 35.024 23.8831 34.634 22.9231 34.2065C22.0606 39.0665 20.7931 41.819 20.0131 42.0215C19.1056 41.804 17.6056 38.339 16.7806 32.2865C16.7356 31.889 16.6756 31.4765 16.6306 31.049C16.5556 30.4415 16.4956 29.8115 16.4431 29.1515C16.4281 29.024 16.4206 28.8965 16.4056 28.769C16.3156 27.629 16.2556 26.429 16.2181 25.1615C16.2031 24.4565 16.1956 23.7365 16.1881 22.9865C16.1806 22.2365 16.2031 21.5165 16.2181 20.804C16.2556 19.5515 16.3156 18.359 16.4131 17.2265V17.204C15.3331 17.8265 14.2981 18.464 13.2931 19.1165H13.2856L13.2931 19.1315C13.2331 20.3165 13.1956 21.524 13.1956 22.7615L13.2031 22.769C13.2011 22.769 13.1992 22.7698 13.1978 22.7712C13.1964 22.7726 13.1956 22.7745 13.1956 22.7765C13.1919 22.8465 13.1919 22.9166 13.1956 22.9865V23.1965C13.1881 24.434 13.2256 25.6565 13.2856 26.849V26.864C13.3381 28.0865 13.4281 29.2715 13.5406 30.4265C13.6456 31.4915 13.7731 32.519 13.9306 33.509C14.1329 34.982 14.4209 36.442 14.7931 37.8815C16.0081 42.6215 17.7706 45.0215 19.9906 45.0215H19.9996C21.3346 45.0215 22.4821 44.1665 23.4646 42.4715C24.2378 41.0254 24.8202 39.485 25.1971 37.889C25.3996 37.094 25.5946 36.2615 25.7596 35.384H25.7506ZM15.3406 13.064L14.6206 12.7715C14.3881 12.674 14.1556 12.5765 13.9231 12.4865L13.9156 12.494C13.7731 13.4765 13.6531 14.504 13.5481 15.569C13.9156 15.7265 14.2906 15.884 14.6881 16.0565H14.6956C15.2581 16.2965 15.8356 16.5665 16.4356 16.8515V16.829C16.5331 15.7115 16.6456 14.6765 16.7806 13.7015C16.2931 13.475 15.8206 13.274 15.3406 13.064Z",
					fill: "#C5EBF5"
				}), o().createElement("path", {
					d: "M35.4331 25.904C34.8706 25.3415 34.2631 24.7865 33.6031 24.209H33.5956C32.8231 24.8315 32.0206 25.4465 31.1731 26.069L31.1656 26.0765C31.1581 26.0765 31.1581 26.084 31.1506 26.0915C34.8856 29.219 36.6181 31.6715 36.4006 32.444C35.7631 33.119 32.0506 32.6915 26.4481 30.404C26.0731 30.2615 25.6981 30.104 25.3081 29.9315C24.7381 29.6915 24.1606 29.4215 23.5606 29.144C23.4406 29.084 23.3356 29.0315 23.2231 28.979L23.2156 28.9865C22.1881 28.4915 21.1231 27.944 20.0056 27.344C19.3756 27.0065 18.7456 26.654 18.0931 26.279C17.4406 25.904 16.8181 25.529 16.2181 25.1615C15.1456 24.494 14.1406 23.8415 13.2031 23.204L13.1956 23.1965C13.1881 24.434 13.2256 25.6565 13.2856 26.849V26.864L13.3006 26.8565C14.2981 27.5065 15.3331 28.144 16.4056 28.769L16.7881 28.9865C17.1631 29.204 17.5381 29.414 17.9131 29.6165C18.0781 29.714 18.2431 29.804 18.4081 29.8865C18.4883 29.9357 18.5709 29.9808 18.6556 30.0215C19.0381 30.2315 19.4206 30.434 19.7956 30.629C19.8631 30.6665 19.9306 30.6965 19.9981 30.7265L20.0056 30.734C20.0731 30.7715 20.1406 30.809 20.2081 30.839C20.6656 31.079 21.1231 31.304 21.5806 31.5215C22.1131 31.784 22.6456 32.0315 23.1631 32.2715C23.1791 32.2731 23.1944 32.2782 23.2081 32.2865H23.2156C23.7556 32.534 24.2956 32.7665 24.8281 32.9915C25.2406 33.164 25.6606 33.3365 26.0656 33.494C26.4256 33.6365 26.7856 33.7715 27.1381 33.899C27.4906 34.0265 27.8356 34.1465 28.1806 34.2665C28.2068 34.2695 28.2322 34.2771 28.2556 34.289C28.5931 34.4015 28.9231 34.514 29.2381 34.604C29.5756 34.7165 29.9056 34.814 30.2356 34.904C30.5281 34.9865 30.8131 35.054 31.0906 35.1215C31.3681 35.189 31.6531 35.2565 31.9156 35.309C32.2081 35.369 32.4931 35.429 32.7706 35.474C33.3256 35.564 33.8506 35.6315 34.3306 35.6615C35.2141 35.7338 36.1035 35.6603 36.9631 35.444C37.2573 35.3636 37.5416 35.2504 37.8106 35.1065C38.301 34.8394 38.7084 34.4424 38.9881 33.959C40.1056 32.0315 38.9056 29.324 35.4331 25.904ZM10.3531 21.125H10.3456V21.1175L10.3381 21.11C9.46812 21.7325 8.63562 22.355 7.86312 22.985L7.88561 23C8.65811 23.615 9.46812 24.23 10.3306 24.8525C10.6606 24.605 10.9831 24.35 11.3356 24.1025C11.4481 24.0125 11.5681 23.93 11.6881 23.8475C11.8831 23.705 12.0781 23.5625 12.2806 23.42C12.3781 23.3525 12.4756 23.2775 12.5806 23.21C12.6856 23.1425 12.7756 23.0675 12.8806 22.9925C12.8826 22.9925 12.8845 22.9917 12.8859 22.9903C12.8873 22.9889 12.8881 22.987 12.8881 22.985V22.9775C11.9746 22.3415 11.1331 21.734 10.3531 21.125ZM26.7781 21.485V21.4775C26.7781 21.29 26.7706 21.11 26.7631 20.9225C26.7631 20.825 26.7631 20.7275 26.7556 20.6375C26.7481 20.3 26.7406 19.9625 26.7181 19.6325C26.7181 19.5425 26.7181 19.445 26.7106 19.355C26.7096 19.2798 26.7046 19.2047 26.6956 19.13C25.6981 18.4775 24.6556 17.8475 23.5906 17.2175H23.5831V17.21L23.2006 16.9925C22.8181 16.775 22.4356 16.565 22.0531 16.355C21.8356 16.2275 21.6181 16.1075 21.3931 15.995C20.9731 15.7625 20.5531 15.5375 20.1256 15.3275C20.0814 15.2967 20.0335 15.2715 19.9831 15.2525C19.9831 15.2375 19.9831 15.2375 19.9756 15.245C19.4506 14.9675 18.9331 14.7125 18.4156 14.465C17.8681 14.195 17.3281 13.94 16.7881 13.7H16.7806C16.2931 13.475 15.8206 13.2725 15.3406 13.0625L14.6206 12.77C14.3881 12.6725 14.1556 12.575 13.9231 12.485C13.1956 12.2 12.4831 11.9375 11.7856 11.7125C11.0881 11.4725 10.4056 11.2625 9.75311 11.075C9.46811 11 9.17562 10.925 8.90562 10.865C8.62062 10.7975 8.34311 10.73 8.07311 10.67C7.60812 10.5725 7.16562 10.4975 6.73812 10.4375C6.34812 10.385 5.96562 10.3475 5.61312 10.325C5.31312 10.3025 5.02062 10.3025 4.75062 10.3025C4.48981 10.3046 4.22935 10.3221 3.97062 10.355L3.96312 10.3475C3.63076 10.3889 3.30223 10.4566 2.98062 10.55C2.86812 10.5875 2.75562 10.625 2.65062 10.6625C2.47191 10.7314 2.29888 10.8141 2.13312 10.91C1.89763 11.04 1.68278 11.2043 1.49562 11.3975C1.3031 11.5844 1.1366 11.7963 1.00062 12.0275C-0.116884 13.955 1.08312 16.6625 4.55562 20.0825C5.13312 20.6375 5.74062 21.2075 6.40812 21.77C7.18062 21.1475 7.98312 20.5325 8.83062 19.91C8.83812 19.91 8.83812 19.9025 8.84562 19.9025C5.13312 16.7825 3.39312 14.33 3.59562 13.5275C4.27062 12.875 7.97562 13.3025 13.5481 15.5675C13.9156 15.725 14.2906 15.8825 14.6881 16.055H14.6956C15.2581 16.295 15.8356 16.565 16.4356 16.85C16.5481 16.895 16.6531 16.9475 16.7656 16.9925C16.7697 16.9966 16.7749 16.9992 16.7806 17C17.8081 17.495 18.8756 18.04 19.9831 18.635C20.6131 18.9725 21.2431 19.3325 21.8881 19.7C22.5331 20.0675 23.1631 20.45 23.7706 20.825C24.8506 21.4925 25.8581 22.145 26.7931 22.7825L26.7931 22.775C26.7931 22.3415 26.7856 21.914 26.7781 21.4865L26.7781 21.485ZM32.1106 22.985C31.3381 22.37 30.5131 21.7475 29.6506 21.125C29.3356 21.3725 29.0056 21.6275 28.6606 21.8675C28.6606 21.8695 28.6598 21.8714 28.6584 21.8728C28.657 21.8742 28.6551 21.875 28.6531 21.875C28.1656 22.2425 27.6556 22.6175 27.1081 22.9925H27.1006L27.1081 23C28.0156 23.6375 28.8631 24.26 29.6356 24.8675L29.6431 24.875C29.6474 24.8711 29.6501 24.8658 29.6506 24.86L29.6581 24.8525C30.0856 24.545 30.5056 24.23 30.9181 23.93C30.9706 23.885 31.0231 23.8475 31.0756 23.81C31.4431 23.5475 31.7881 23.27 32.1256 23L32.1106 22.985Z",
					fill: "#C5EBF5"
				}))
		},
		"../react/pages/onboarding/components/AppleLogin/constants.ts": function(W, v, t) {
			"use strict";
			t.d(v, {
				A2: function() {
					return a
				},
				He: function() {
					return l
				},
				N$: function() {
					return m
				},
				Qq: function() {
					return s
				},
				ST: function() {
					return d
				},
				wM: function() {
					return o
				}
			});
			var e = t("../react/pages/onboarding/components/AppleLogin/Images/Graphics.tsx");
			const o = {
					PAGE: "apple-login"
				},
				s = "login-apple-jwt",
				d = "cf-test",
				l = {
					"1": "https://gateway.icloud.com/maildomainws/v1/ios/domain/purchaseAdd",
					"2": "https://gateway.icloud.com/maildomainws/v1/domain/purchaseAdd"
				},
				m = u => [{
					title: "apple.sign_in_with_apple.automatic_setup.title",
					description: "apple.sign_in_with_apple.automatic_setup.description",
					icon: e.iP
				}, {
					title: u ? "apple.sign_in_with_apple.customers_first.title" : "apple.sign_in_with_apple.privacy.title",
					description: u ? "apple.sign_in_with_apple.customers_first.description" : "apple.sign_in_with_apple.privacy.description",
					icon: u ? e.rD : e.PJ
				}, {
					title: "apple.sign_in_with_apple.impact.title",
					description: "apple.sign_in_with_apple.impact.description",
					icon: e.i2
				}],
				a = {
					apple: "applejwt",
					cf: "cfjwt"
				}
		},
		"../react/pages/page-rules/tracking.ts": function(W, v, t) {
			"use strict";
			t.d(v, {
				_: function() {
					return s
				},
				c: function() {
					return d
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				o = t.n(e);
			let s = function(l) {
				return l.TEMPLATE_SELECTED = "template selected", l.TEMPLATE_PRODUCT_SELECTED = "template product selected", l.TEMPLATE_SAVE_DRAFT = "template save draft", l.TEMPLATE_CANCEL = "template cancel", l.TEMPLATE_DEPLOY = "template deploy", l
			}({});
			const d = (l, m) => o().sendEvent(l, {
				template_name: m
			})
		},
		"../react/pages/pages/constants.ts": function(W, v, t) {
			"use strict";
			t.d(v, {
				A: function() {
					return y
				},
				C1: function() {
					return E
				},
				Dp: function() {
					return P
				},
				GF: function() {
					return A
				},
				HD: function() {
					return h
				},
				IK: function() {
					return l
				},
				L7: function() {
					return s
				},
				Li: function() {
					return _
				},
				Ni: function() {
					return M
				},
				OG: function() {
					return te
				},
				QF: function() {
					return Q
				},
				QV: function() {
					return C
				},
				Sx: function() {
					return S
				},
				Ub: function() {
					return K
				},
				X3: function() {
					return r
				},
				aP: function() {
					return a
				},
				eO: function() {
					return i
				},
				fH: function() {
					return c
				},
				fQ: function() {
					return T
				},
				fR: function() {
					return e
				},
				hE: function() {
					return H
				},
				iS: function() {
					return O
				},
				ku: function() {
					return L
				},
				nY: function() {
					return g
				},
				w3: function() {
					return d
				},
				wJ: function() {
					return u
				},
				wp: function() {
					return p
				},
				yu: function() {
					return n
				},
				zF: function() {
					return R
				},
				zG: function() {
					return b
				}
			});
			const e = "api.pages.cloudflare.com",
				o = "cloudflare-workers-and-pages",
				s = {
					dns: "https://cloudflare.com/dns",
					access: "https://www.cloudflare.com/teams-access/",
					access_dashboard: "https://one.dash.cloudflare.com",
					community: "https://community.cloudflare.com/tag/cloudflarepages",
					documentation: {
						access: "https://developers.cloudflare.com/pages/configuration/preview-deployments/#customize-preview-deployments-access",
						buildConfig: "https://developers.cloudflare.com/pages/configuration/build-configuration/",
						buildCache: "https://developers.cloudflare.com/pages/configuration/build-caching/#build-caching-beta",
						configuration: "https://developers.cloudflare.com/pages/configuration/",
						gettingStarted: "https://developers.cloudflare.com/pages/getting-started",
						configuringBuilds: "https://developers.cloudflare.com/pages/platform/build-configuration",
						supportedFrameworks: "https://developers.cloudflare.com/pages/platform/build-configuration#framework-presets",
						supportedTools: "https://developers.cloudflare.com/pages/configuration/language-support-and-tools",
						supportedLanguages: "https://developers.cloudflare.com/pages/configuration/language-support-and-tools/#supported-languages-and-tools",
						deployingBranches: "https://developers.cloudflare.com/pages/platform/preview-deployments",
						buildPaths: "https://developers.cloudflare.com/pages/configuration/build-watch-paths#build-watch-paths",
						root: "https://developers.cloudflare.com/pages/",
						tutorials: "https://developers.cloudflare.com/pages/how-to",
						customDomains: "https://developers.cloudflare.com/pages/platform/custom-domains/",
						contactSupport: "https://developers.cloudflare.com/support/contacting-cloudflare-support/",
						deployHooks: "https://developers.cloudflare.com/pages/platform/deploy-hooks",
						functions: "https://developers.cloudflare.com/pages/platform/functions",
						functionsRoutes: "https://developers.cloudflare.com/pages/platform/functions/routing/",
						invocationRoutes: "https://developers.cloudflare.com/pages/platform/functions/routing/#function-invocation-routes",
						functionsBindings: "https://developers.cloudflare.com/pages/platform/functions/bindings/",
						functionsAIBindings: "https://developers.cloudflare.com/pages/platform/functions/bindings/#ai",
						functionsKVNamespace: "https://developers.cloudflare.com/pages/platform/functions/bindings/#kv-namespaces",
						functionsDurableObjects: "https://developers.cloudflare.com/pages/platform/functions/bindings/#durable-object-namespaces",
						functionsR2: "https://developers.cloudflare.com/pages/platform/functions/bindings/#r2-buckets",
						functionsVectorize: "https://developers.cloudflare.com/pages/platform/functions/bindings/#vectorize-indexes",
						functionsD1: "https://developers.cloudflare.com/pages/platform/functions/bindings/#d1-databases",
						functionsServiceBindings: "https://developers.cloudflare.com/pages/platform/functions/bindings/#service-bindings",
						functionsQueueProducers: "https://developers.cloudflare.com/pages/platform/functions/bindings/#queue-producers",
						functionsAnalyticsEngine: "https://developers.cloudflare.com/pages/platform/functions/bindings/#analytics-engine",
						functionsLimits: "https://developers.cloudflare.com/workers/platform/limits/#worker-limits",
						functionsGABilling: "https://developers.cloudflare.com/pages/platform/functions/pricing/",
						workersObservabilityLimits: "https://developers.cloudflare.com/workers/observability/logs/workers-logs/#limits",
						headers: "https://developers.cloudflare.com/pages/platform/headers",
						redirects: "https://developers.cloudflare.com/pages/platform/redirects",
						branchConfig: "https://developers.cloudflare.com/pages/platform/branch-build-controls/#branch-deployment-controls",
						buildImageVersion: "https://developers.cloudflare.com/pages/platform/language-support-and-tools/",
						compatibilityDates: "https://developers.cloudflare.com/workers/platform/compatibility-dates/",
						compatibilityFlags: "https://developers.cloudflare.com/workers/platform/compatibility-dates/#compatibility-flags",
						usageModels: "https://developers.cloudflare.com/workers/platform/pricing#usage-models",
						functionsPricing: "https://developers.cloudflare.com/pages/functions/pricing",
						requestLimitFailureMode: "https://developers.cloudflare.com/pages/platform/functions/pricing/#free-plan",
						smartPlacement: "https://developers.cloudflare.com/pages/platform/functions/smart-placement",
						notifications: "https://developers.cloudflare.com/notifications/",
						buildCaching: "https://developers.cloudflare.com/pages/platform/build-caching/",
						userCpuLimits: "https://developers.cloudflare.com/workers/platform/pricing/#standard-usage-model",
						gitIntegration: "https://developers.cloudflare.com/pages/platform/git-integration/#troubleshooting",
						configFile: "https://developers.cloudflare.com/pages/functions/wrangler-configuration/"
					},
					github: {
						appHomepage: `https://github.com/apps/${o}`,
						newInstallation: `https://github.com/apps/${o}/installations/new`
					},
					gitlab: {
						authorize: "https://gitlab.com/oauth/authorize",
						manage: "https://gitlab.com/-/profile/applications"
					},
					webAnalytics: "https://developers.cloudflare.com/analytics/web-analytics/",
					feedbackSurvey: "https://forms.gle/dfM8YfpzY4aV3gv56"
				},
				d = "Allow Members - Cloudflare Pages",
				l = 58,
				m = {
					free: {
						concurrentBuilds: 1,
						maxBuilds: 500,
						dailyFunctionsRequests: 1e5
					},
					pro: {
						concurrentBuilds: 5,
						maxBuilds: 5e3,
						dailyFunctionsRequests: 1e5
					},
					business: {
						concurrentBuilds: 20,
						maxBuilds: 2e4,
						dailyFunctionsRequests: 1e5
					}
				},
				a = "production",
				u = 2e3,
				E = 100,
				n = 350,
				r = 1e7,
				i = ["Success:", "Error:", "Failed:"],
				p = 10,
				c = "_headers",
				_ = "_redirects",
				y = "_routes.json",
				T = "_worker.js",
				O = "do-a-barrel-roll",
				h = [c, _, y, T],
				S = 1024 * 1024 * 25,
				g = 1e3,
				C = {
					createPagesProject: "create pages project",
					updatePagesProject: "update pages project",
					deletePagesProject: "delete pages project",
					clickCreateApplication: "click create application",
					createPagesDeployment: "create pages deployment",
					listPagesProjects: "list pages projects",
					paginatePagesProjects: "paginate pages projects",
					searchPagesProjects: "search pages projects",
					setPagesEnvironmentVariables: "set pages environment variables",
					setPagesKVBindings: "set pages kv bindings",
					setPagesDOBindings: "set pages do bindings",
					setPagesAIBindings: "set pages ai bindings",
					setPagesR2Bindings: "set pages r2 bindings",
					setPagesD1Bindings: "set pages d1 bindings",
					setPagesVectorizeBindings: "set pages vectorize bindings",
					setPagesServiceBindings: "set pages service bindings",
					setPagesQueueProducerBindings: "set pages queue producer bindings",
					setPagesAnalyticsEngineBindings: "set pages analytics engine bindings",
					enablePagesAccessPolicy: "enable pages access policy",
					managePagesPolicies: "manage pages policies",
					enablePagesWebAnalytics: "enable pages web analytics",
					disablePagesWebAnalytics: "disable pages web analytics",
					managePagesMembers: "manage pages members",
					beginDeploymentLogStream: "begin deployment log stream",
					setPagesPlacement: "set pages placement",
					setPagesCpuLimit: "set pages cpu limit",
					firstDeployExploreSettings: "click settings first deploy cta",
					firstDeployCustomDomain: "click custom domain first deploy cta",
					firstDeployWebAnalytics: "click web analytics first deploy cta",
					filterWorkersPages: "filter workers and pages",
					sortWorkersPages: "sort workers and pages",
					toggledPagesSmartPlacement: "toggle pages smart placement",
					downloadDemoProject: "download demo project"
				},
				M = 1e5,
				b = 75e3,
				R = 2e5,
				A = 15e4,
				L = "workers",
				P = "cloudflare_pages_build_caching",
				H = 2;
			let K = function(Y) {
				return Y[Y.REPO_NOT_AUTHORIZED_FOR_INSTALLATION = 8000004] = "REPO_NOT_AUTHORIZED_FOR_INSTALLATION", Y[Y.INSTALLATION_NOT_FOUND = 8000008] = "INSTALLATION_NOT_FOUND", Y[Y.INSTALLATION_UNAUTHORIZED = 8000010] = "INSTALLATION_UNAUTHORIZED", Y[Y.INSTALLATION_LINK_NOT_FOUND = 8000011] = "INSTALLATION_LINK_NOT_FOUND", Y[Y.REPO_NOT_FOUND = 8000012] = "REPO_NOT_FOUND", Y[Y.INSTALLATION_SUSPENDED = 8000084] = "INSTALLATION_SUSPENDED", Y
			}({});
			const Q = 1,
				pe = 2,
				te = 2
		},
		"../react/pages/pages/routes.ts": function(W, v, t) {
			"use strict";
			t.d(v, {
				Hv: function() {
					return s
				},
				_j: function() {
					return o
				},
				zE: function() {
					return l
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-routes/es/index.js");
			const o = {
					rootNoAccount: (0, e.BC)`/`,
					root: (0, e.BC)`/${"accountId"}/pages`,
					plans: (0, e.BC)`/${"accountId"}/workers/plans`,
					newProject: (0, e.BC)`/${"accountId"}/pages/new`,
					newProjectAssetUpload: (0, e.BC)`/${"accountId"}/pages/new/upload`,
					newProjectAssetUploadProjectCreatedNoDeployment: (0, e.BC)`/${"accountId"}/pages/new/upload/${"projectName"}`,
					newProjectStepName: (0, e.BC)`/${"accountId"}/pages/new/project`,
					newProjectWranglerGuide: (0, e.BC)`/${"accountId"}/pages/new/wrangler-guide`,
					newProjectProvider: (0, e.BC)`/${"accountId"}/pages/new/provider/${"provider"}`,
					projectDetails: (0, e.BC)`/${"accountId"}/pages/view/${"projectName"}`,
					projectAnalyticsRoot: (0, e.BC)`/${"accountId"}/pages/view/${"projectName"}/analytics`,
					projectAnalytics: (0, e.BC)`/${"accountId"}/pages/view/${"projectName"}/analytics/${"deploymentType"}(preview|production)`,
					projectDomains: (0, e.BC)`/${"accountId"}/pages/view/${"projectName"}/domains`,
					projectIntegrationsRoot: (0, e.BC)`/${"accountId"}/pages/view/${"projectName"}/integrations`,
					projectIntegrations: (0, e.BC)`/${"accountId"}/pages/view/${"projectName"}/integrations/${"deploymentType"}(preview|production)`,
					projectIntegrationsSetupFlow: (0, e.BC)`/${"accountId"}/pages/view/${"projectName"}/integrations/${"deploymentType"}(preview|production)/${"integrationId"}/integrations-setup`,
					projectSettingsRoot: (0, e.BC)`/${"accountId"}/pages/view/${"projectName"}/settings`,
					projectSettings: (0, e.BC)`/${"accountId"}/pages/view/${"projectName"}/settings/${"environment"}(preview|production)`,
					projectBuild: (0, e.BC)`/${"accountId"}/pages/view/${"projectName"}/build`,
					projectManage: (0, e.BC)`/${"accountId"}/pages/view/${"projectName"}/manage`,
					projectSettingsBuildDeployment: (0, e.BC)`/${"accountId"}/pages/view/${"projectName"}/settings/builds-deployments`,
					projectSettingsEnvironmentVariables: (0, e.BC)`/${"accountId"}/pages/view/${"projectName"}/settings/environment-variables`,
					projectSettingsFunctions: (0, e.BC)`/${"accountId"}/pages/view/${"projectName"}/settings/functions`,
					deploymentCreate: (0, e.BC)`/${"accountId"}/pages/view/${"projectName"}/deployments/new`,
					deploymentDetails: (0, e.BC)`/${"accountId"}/pages/view/${"projectName"}/${"deploymentId"}`,
					deploymentDetailsFiles: (0, e.BC)`/${"accountId"}/pages/view/${"projectName"}/${"deploymentId"}/files`,
					deploymentDetailsFunctions: (0, e.BC)`/${"accountId"}/pages/view/${"projectName"}/${"deploymentId"}/functions`,
					deploymentDetailsRedirects: (0, e.BC)`/${"accountId"}/pages/view/${"projectName"}/${"deploymentId"}/redirects`,
					deploymentDetailsHeaders: (0, e.BC)`/${"accountId"}/pages/view/${"projectName"}/${"deploymentId"}/headers`,
					durableObjectDetails: (0, e.BC)`/${"accountId"}/workers/durable-objects/view/${"namespaceId"}`,
					verifyEmail: (0, e.BC)`/${"accountId"}/pages/verify-email`,
					access: (0, e.BC)`/${"accountId"}?zone=access`,
					members: (0, e.BC)`/${"accountId"}/members`,
					zoneOnboarding: (0, e.BC)`/${"accountId"}/add-site`,
					zoneDNS: (0, e.BC)`/${"accountId"}/${"zoneName"}/dns`,
					signUp: (0, e.BC)`/sign-up/pages`,
					defaultUsageModel: (0, e.BC)`/${"accountId"}/pages/default-usage-model`,
					webAnalyticsEnable: (0, e.BC)`/${"accountId"}/pages/view/${"projectName"}/manage#web_analytics_section`,
					webAnalyticsDashboard: (0, e.BC)`/${"accountId"}/web-analytics/overview?siteTag~in=${"siteTag"}`
				},
				s = {
					accountSettings: (0, e.BC)`/accounts/${"accountId"}/pages/account-settings`,
					checkMissing: (0, e.BC)`/pages/assets/check-missing`,
					metrics: (0, e.BC)`/accounts/${"accountId"}/pages/metrics`,
					projects: (0, e.BC)`/accounts/${"accountId"}/pages/projects`,
					projectDetails: (0, e.BC)`/accounts/${"accountId"}/pages/projects/${"projectName"}`,
					purgeCache: (0, e.BC)`/accounts/${"accountId"}/pages/projects/${"projectName"}/purge_build_cache`,
					projectDomains: (0, e.BC)`/accounts/${"accountId"}/pages/projects/${"projectName"}/domains`,
					projectDomain: (0, e.BC)`/accounts/${"accountId"}/pages/projects/${"projectName"}/domains/${"domainName"}`,
					projectUploadFile: (0, e.BC)`/accounts/${"accountId"}/pages/projects/${"projectName"}/file`,
					deploymentCreateTail: (0, e.BC)`/accounts/${"accountId"}/pages/projects/${"projectName"}/deployments/${"deploymentId"}/tails`,
					deploymentDeleteTail: (0, e.BC)`/accounts/${"accountId"}/pages/projects/${"projectName"}/deployments/${"deploymentId"}/tails/${"tailId"}`,
					deployments: (0, e.BC)`/accounts/${"accountId"}/pages/projects/${"projectName"}/deployments`,
					deploymentDetails: (0, e.BC)`/accounts/${"accountId"}/pages/projects/${"projectName"}/deployments/${"deploymentId"}/?force=true`,
					deploymentBuildMetadata: (0, e.BC)`/accounts/${"accountId"}/pages/projects/${"projectName"}/deployments/${"deploymentId"}/build_metadata`,
					deploymentFunctions: (0, e.BC)`/accounts/${"accountId"}/pages/projects/${"projectName"}/deployments/${"deploymentId"}/functions`,
					deploymentCancel: (0, e.BC)`/accounts/${"accountId"}/pages/projects/${"projectName"}/deployments/${"deploymentId"}/cancel`,
					deploymentRetry: (0, e.BC)`/accounts/${"accountId"}/pages/projects/${"projectName"}/deployments/${"deploymentId"}/retry`,
					rollbackDeployment: (0, e.BC)`/accounts/${"accountId"}/pages/projects/${"projectName"}/deployments/${"deploymentId"}/rollback`,
					deploymentLogs: (0, e.BC)`/accounts/${"accountId"}/pages/projects/${"projectName"}/deployments/${"deploymentId"}/history/logs`,
					deploymentLiveLogsJWT: (0, e.BC)`/accounts/${"accountId"}/pages/projects/${"projectName"}/deployments/${"deploymentId"}/live`,
					deploymentLiveLogsWS: (0, e.BC)`wss://${"apiHost"}/logs/ws/get?startIndex=${"startIndex"}&jwt=${"jwt"}`,
					deploymentLiveLogsHTTP: (0, e.BC)`https://${"apiHost"}/logs?jwt=${"jwt"}`,
					getDeploymentConfig: (0, e.BC)`/accounts/${"accountId"}/pages/projects/${"projectName"}/deployment_configs/${"environment"}`,
					setDeploymentConfig: (0, e.BC)`/accounts/${"accountId"}/pages/projects/${"projectName"}/deployment_configs/${"environment"}/envs`,
					gitConnections: (0, e.BC)`/accounts/${"accountId"}/pages/connections`,
					gitConnectionsProvider: (0, e.BC)`/accounts/${"accountId"}/pages/connections/${"provider"}`,
					gitConnectionPermissions: (0, e.BC)`/accounts/${"accountId"}/pages/connections/${"provider"}/${"username"}/permissions`,
					gitRepos: (0, e.BC)`/accounts/${"accountId"}/pages/connections/${"provider"}/${"username"}/repos`,
					gitRepo: (0, e.BC)`/accounts/${"accountId"}/pages/connections/${"provider"}/${"username"}/repos/${"repo"}`,
					gitBranches: (0, e.BC)`/accounts/${"accountId"}/pages/connections/${"provider"}/${"username"}/repos/${"repo"}/branches`,
					domainCheck: (0, e.BC)`/accounts/${"accountId"}/pages/domain_check`,
					getSubdomain: (0, e.BC)`/accounts/${"accountId"}/pages/get_subdomain`,
					deployHooks: (0, e.BC)`/accounts/${"accountId"}/pages/projects/${"projectName"}/deploy_hooks`,
					changeDeployHooks: (0, e.BC)`/accounts/${"accountId"}/pages/projects/${"projectName"}/deploy_hooks/${"hookId"}`,
					accessApps: (0, e.BC)`/accounts/${"accountId"}/access/apps`,
					accessIdPs: (0, e.BC)`/accounts/${"accountId"}/access/identity_providers`,
					accessOrg: (0, e.BC)`/accounts/${"accountId"}/access/organizations`,
					accessPolicies: (0, e.BC)`/accounts/${"accountId"}/access/apps/${"appId"}/policies`,
					accountMembers: (0, e.BC)`/accounts/${"accountId"}/members?per_page=50&page=${"page"}&direction=desc`,
					bootstrap: (0, e.BC)`/system/bootstrap`,
					zones: (0, e.BC)`/zones`,
					zone: (0, e.BC)`/zones/${"zoneId"}`,
					zoneDNSRecords: (0, e.BC)`/zones/${"zoneId"}/dns_records`,
					zoneDNSRecord: (0, e.BC)`/zones/${"zoneId"}/dns_records/${"recordId"}`,
					uploadFiles: (0, e.BC)`/pages/assets/upload`,
					upsertHashes: (0, e.BC)`/pages/assets/upsert-hashes`,
					uploadToken: (0, e.BC)`/accounts/${"accountId"}/pages/projects/${"projectName"}/upload-token`,
					webAnalyticsSiteInfo: (0, e.BC)`/accounts/${"accountId"}/rum/site_info`,
					webAnalyticsSiteTag: (0, e.BC)`/accounts/${"accountId"}/rum/site_info/${"siteTag"}`,
					docsRoot: "https://developers.cloudflare.com",
					buildImageVersions: "https://developers.cloudflare.com/pages/platform/language-support-and-tools.json",
					buildPresets: "https://developers.cloudflare.com/pages/platform/build-configuration.json",
					compatibilityDates: "https://developers.cloudflare.com/workers/platform/compatibility-dates.json"
				},
				d = m => `${m.subdomain}.pages.dev`,
				l = {
					installation: {
						github: {
							user: (0, e.BC)`https://github.com/settings/installations/${"installation_id"}`,
							organization: (0, e.BC)`https://github.com/organizations/${"organization_name"}/settings/installations/${"installation_id"}`
						},
						gitlab: (0, e.BC)`https://gitlab.com/${"username"}/${"repo"}/-/hooks/`
					}
				}
		},
		"../react/pages/pipelines/tracking.ts": function(W, v, t) {
			"use strict";
			t.d(v, {
				KO: function() {
					return a
				},
				L9: function() {
					return E
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				o = t.n(e);

			function s(n) {
				for (var r = 1; r < arguments.length; r++) {
					var i = arguments[r] != null ? Object(arguments[r]) : {},
						p = Object.keys(i);
					typeof Object.getOwnPropertySymbols == "function" && p.push.apply(p, Object.getOwnPropertySymbols(i).filter(function(c) {
						return Object.getOwnPropertyDescriptor(i, c).enumerable
					})), p.forEach(function(c) {
						d(n, c, i[c])
					})
				}
				return n
			}

			function d(n, r, i) {
				return r = l(r), r in n ? Object.defineProperty(n, r, {
					value: i,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : n[r] = i, n
			}

			function l(n) {
				var r = m(n, "string");
				return typeof r == "symbol" ? r : String(r)
			}

			function m(n, r) {
				if (typeof n != "object" || n === null) return n;
				var i = n[Symbol.toPrimitive];
				if (i !== void 0) {
					var p = i.call(n, r || "default");
					if (typeof p != "object") return p;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (r === "string" ? String : Number)(n)
			}
			let a = function(n) {
					return n.LIST_PIPELINES = "list pipelines", n.CREATE_PIPELINE = "create pipeline", n.VIEW_PIPELINE = "view pipeline details", n.DELETE_PIPELINE = "delete pipeline", n.CLICK_PIPELINE_DOCUMENTATION = "click pipeline documentation", n.CLICK_GET_STARTED_GUIDE = "click pipeline get started guide", n.CLICK_QUICK_LINK = "click pipeline quick link", n
				}({}),
				u = function(n) {
					return n[n.success = 0] = "success", n[n.failure = 1] = "failure", n
				}({});
			const E = (n, r = {}) => {
				o().sendEvent(n, s({}, r, {
					category: "Pipelines"
				}))
			}
		},
		"../react/pages/r2/routes.ts": function(W, v, t) {
			"use strict";
			t.d(v, {
				Hv: function() {
					return s
				},
				Jg: function() {
					return m
				},
				_j: function() {
					return o
				},
				vF: function() {
					return l
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-routes/es/index.js");
			const o = {
					root: (0, e.BC)`/${"accountId"}/r2`,
					overview: (0, e.BC)`/${"accountId"}/r2/overview`,
					cliQuickStart: (0, e.BC)`/${"accountId"}/r2/cli`,
					createBucket: (0, e.BC)`/${"accountId"}/r2/new`,
					bucketDetails: (0, e.BC)`/${"accountId"}/r2/${"jurisdiction"}/buckets/${"bucketName"}`,
					bucketDetailsSettings: (0, e.BC)`/${"accountId"}/r2/${"jurisdiction"}/buckets/${"bucketName"}/settings`,
					createBucketEventNotification: (0, e.BC)`/${"accountId"}/r2/${"jurisdiction"}/buckets/${"bucketName"}/notifications/new`,
					bucketDetailsCors: (0, e.BC)`/${"accountId"}/r2/${"jurisdiction"}/buckets/${"bucketName"}/cors/${"op"}`,
					bucketMetrics: (0, e.BC)`/${"accountId"}/r2/${"jurisdiction"}/buckets/${"bucketName"}/metrics`,
					objectDetails: (0, e.BC)`/${"accountId"}/r2/${"jurisdiction"}/buckets/${"bucketName"}/objects/${"objectKey"}/details`,
					apiTokens: (0, e.BC)`/${"accountId"}/r2/api-tokens`,
					createApiToken: (0, e.BC)`/${"accountId"}/r2/api-tokens/create`,
					editApiToken: (0, e.BC)`/${"accountId"}/r2/api-tokens/${"tokenId"}`,
					apiTokenSuccess: (0, e.BC)`/${"accountId"}/r2/api-tokens/success`,
					plans: (0, e.BC)`/${"accountId"}/r2/plans`,
					signUp: (0, e.BC)`/sign-up/r2`,
					verifyEmail: (0, e.BC)`/${"accountId"}/r2/verify-email`,
					profile: (0, e.BC)`/profile/api-tokens`,
					billing: (0, e.BC)`/${"accountId"}/billing/subscriptions`,
					zoneDNS: (0, e.BC)`/${"accountId"}/${"zoneName"}/dns`,
					migrator: (0, e.BC)`/${"accountId"}/r2/slurper`,
					workersPlans: (0, e.BC)`/${"accountId"}/workers/plans`
				},
				s = {
					canUnsubscribe: (0, e.BC)`/accounts/${"accountId"}/r2/canUnsubscribe`,
					defaultRegion: (0, e.BC)`/accounts/${"accountId"}/r2/defaultRegion`,
					buckets: (0, e.BC)`/accounts/${"accountId"}/r2/buckets`,
					bucket: (0, e.BC)`/accounts/${"accountId"}/r2/buckets/${"bucketName"}`,
					objects: (0, e.BC)`/accounts/${"accountId"}/r2/buckets/${"bucketName"}/objects`,
					object: (0, e.BC)`/accounts/${"accountId"}/r2/buckets/${"bucketName"}/objects/${"objectKey"}`,
					bucketUsage: (0, e.BC)`/accounts/${"accountId"}/r2/buckets/${"bucketName"}/usage`,
					bucketManagedDomain: (0, e.BC)`/accounts/${"accountId"}/r2/buckets/${"bucketName"}/domains/managed`,
					bucketCustomDomains: (0, e.BC)`/accounts/${"accountId"}/r2/buckets/${"bucketName"}/domains/custom`,
					bucketCustomDomain: (0, e.BC)`/accounts/${"accountId"}/r2/buckets/${"bucketName"}/domains/custom/${"domainName"}`,
					bucketCors: (0, e.BC)`/accounts/${"accountId"}/r2/buckets/${"bucketName"}/cors`,
					bucketEventConfig: (0, e.BC)`/accounts/${"accountId"}/event_notifications/r2/${"bucketName"}/configuration`,
					bucketEventConfigQueue: (0, e.BC)`/accounts/${"accountId"}/event_notifications/r2/${"bucketName"}/configuration/queues/${"queueId"}`,
					bucketLockRules: (0, e.BC)`/accounts/${"accountId"}/r2/buckets/${"bucketName"}/lock`,
					bucketLifecycle: (0, e.BC)`/accounts/${"accountId"}/r2/buckets/${"bucketName"}/lifecycle`,
					bucketMultipartUploads: (0, e.BC)`/accounts/${"accountId"}/r2/buckets/${"bucketName"}/uploads`,
					bucketSippy: (0, e.BC)`/accounts/${"accountId"}/r2/buckets/${"bucketName"}/sippy`,
					apiTokens: (0, e.BC)`/user/tokens`,
					apiToken: (0, e.BC)`/user/tokens/${"tokenId"}`,
					rollApiToken: (0, e.BC)`/user/tokens/${"tokenId"}/value`,
					permissionGroups: (0, e.BC)`/user/tokens/permission_groups`,
					zones: (0, e.BC)`/zones`
				},
				d = a => {
					const u = "r2.cloudflarestorage.com";
					switch (a) {
						case "default":
							return u;
						case "eu":
							return `eu.${u}`;
						case "fedramp":
							return `fedramp.${u}`
					}
				},
				l = (a, u) => {
					const E = d(u);
					return `https://${a}.${E}`
				},
				m = (a, u, E) => `${l(a,u)}/${E}`
		},
		"../react/pages/r2/selectors.ts": function(W, v, t) {
			"use strict";
			t.d(v, {
				Mv: function() {
					return n
				}
			});
			var e = t("../react/common/selectors/accountSelectors.ts"),
				o = t("../react/common/selectors/entitlementsSelectors.ts"),
				s = t("../react/common/selectors/zoneSelectors.ts");
			const d = "r2_migrator_waitlist",
				l = "r2migrator",
				m = "r2",
				a = "r2_storage_migrator",
				u = "r2_storage_migrator",
				E = i => getAccountEntitlement(i, "r2.enabled"),
				n = i => Boolean((0, s.Le)(i, a, d)),
				r = i => Boolean(getAccountFlipperFlagsChanges(i, u, l))
		},
		"../react/pages/security-center/BlockedContent/constants.ts": function(W, v, t) {
			"use strict";
			t.d(v, {
				Gk: function() {
					return i
				},
				LA: function() {
					return E
				},
				Wk: function() {
					return r
				},
				_V: function() {
					return a
				},
				c5: function() {
					return n
				},
				om: function() {
					return u
				}
			});
			var e = t("../react/pages/security-center/BlockedContent/types.ts"),
				o = t("../../../../node_modules/@cloudflare/component-responsive-table/es/index.js");

			function s(p) {
				for (var c = 1; c < arguments.length; c++) {
					var _ = arguments[c] != null ? Object(arguments[c]) : {},
						y = Object.keys(_);
					typeof Object.getOwnPropertySymbols == "function" && y.push.apply(y, Object.getOwnPropertySymbols(_).filter(function(T) {
						return Object.getOwnPropertyDescriptor(_, T).enumerable
					})), y.forEach(function(T) {
						d(p, T, _[T])
					})
				}
				return p
			}

			function d(p, c, _) {
				return c = l(c), c in p ? Object.defineProperty(p, c, {
					value: _,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : p[c] = _, p
			}

			function l(p) {
				var c = m(p, "string");
				return typeof c == "symbol" ? c : String(c)
			}

			function m(p, c) {
				if (typeof p != "object" || p === null) return p;
				var _ = p[Symbol.toPrimitive];
				if (_ !== void 0) {
					var y = _.call(p, c || "default");
					if (typeof y != "object") return y;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (c === "string" ? String : Number)(p)
			}
			const a = "blocked-content-table-tooltip",
				u = {
					active: "red",
					in_review: "gray",
					pending: "orange",
					canceled: "gray"
				},
				E = ["phishing_interstitial", "malware_interstitial", "legal_block"],
				n = {
					[e.$E.Active]: [e.M3.Active, e.M3.InReview],
					[e.$E.Pending]: [e.M3.Pending, e.M3.Canceled]
				},
				r = {
					initialPaginationState: {
						page: 1,
						perPage: 10
					},
					initialToolbarState: {},
					initialSortState: {
						name: e.fL.EnforcementDate,
						direction: o.Sr.desc
					},
					options: {
						autoFillInitialValues: !0,
						autoFillFilterValues: !0,
						filtersAsArray: Object.values(e.GH)
					},
					filters: Object.values(e.GH).reduce((p, c) => s({}, p, {
						[c]: c
					}), {})
				};
			let i = function(p) {
				return p.COPY_URL = "copy blocked content url", p.REQUEST_REVIEW = "request blocked content review", p.ADD_FILTER = "Add filter", p.REMOVE_FILTER = "Remove filter", p
			}({})
		},
		"../react/pages/security-center/BlockedContent/types.ts": function(W, v, t) {
			"use strict";
			t.d(v, {
				$E: function() {
					return e
				},
				GH: function() {
					return s
				},
				M3: function() {
					return o
				},
				fL: function() {
					return d
				}
			});
			let e = function(m) {
					return m.Pending = "pending", m.Active = "active", m
				}({}),
				o = function(m) {
					return m.Active = "active", m.InReview = "in_review", m.Pending = "pending", m.Canceled = "canceled", m
				}({}),
				s = function(m) {
					return m.Domain = "domain", m.Status = "status", m.BlockType = "blockType", m
				}({}),
				d = function(m) {
					return m.EnforcementDate = "enforcementDate", m.BlockType = "blockType", m.Hostname = "hostname", m.Status = "status", m
				}({}),
				l = function(m) {
					return m.Removed = "removed", m.Misclassified = "misclassified", m
				}({})
		},
		"../react/pages/security-center/tracking.ts": function(W, v, t) {
			"use strict";
			t.d(v, {
				Ev: function() {
					return s
				},
				RY: function() {
					return e
				},
				v9: function() {
					return o
				}
			});
			let e = function(d) {
				return d.LOAD_SCAN_INFO = "load url scan information", d.INITIATE_URL_SCAN = "initiate url scan", d
			}({});
			const o = {
				MANAGE_INSIGHT: "manage security insight",
				BULK_ARCHIVE: "bulk archive security insights",
				EXPAND_INSIGHT_ROW: "expand security issue row",
				ONE_CLICK_RESOLVE_BUTTON: "one click resolve security issue button",
				FOLLOW_RESOLVE_URL: "follow security issue resolve url",
				CLICK_SCAN_NOW: "run security scan",
				CLICK_EXPORT_INSIGHTS: "click export insights",
				CLICK_DETAILS_BUTTON: "click insights row details button"
			};
			let s = function(d) {
				return d.LOAD_THREAT_EVENTS = "load threat events", d.THREAT_EVENT_MORE_DETAILS_CLICK = "click on threat event more details", d.THREAT_EVENTS_FILTERS = "threat events filters applied", d
			}({})
		},
		"../react/pages/security/analytics/resources/labels.ts": function(W, v, t) {
			"use strict";
			t.d(v, {
				AU: function() {
					return s
				},
				Bc: function() {
					return o
				},
				Bt: function() {
					return e
				},
				e_: function() {
					return d
				}
			});
			const e = {
					unknown: "firewall.analytics.actions.labels.unknown",
					allow: "firewall.analytics.actions.labels.allow",
					bypass: "firewall.analytics.actions.labels.bypass",
					block: "firewall.analytics.actions.labels.drop",
					challenge: "firewall.analytics.actions.labels.challenge",
					jschallenge: "firewall.analytics.actions.labels.jschallenge",
					rewrite: "firewall.analytics.actions.labels.rewrite",
					log: "firewall.analytics.actions.labels.log",
					connection_close: "firewall.analytics.actions.labels.connectionClose",
					challenge_solved: "firewall.analytics.actions.labels.challenge_solved",
					challenge_failed: "firewall.analytics.actions.labels.challenge_failed",
					challenge_bypassed: "firewall.analytics.actions.labels.challenge_bypassed",
					jschallenge_solved: "firewall.analytics.actions.labels.jschallenge_solved",
					jschallenge_failed: "firewall.analytics.actions.labels.jschallenge_failed",
					jschallenge_bypassed: "firewall.analytics.actions.labels.jschallenge_bypassed",
					managed_challenge: "firewall.analytics.actions.labels.managed_challenge",
					managed_challenge_interactive_solved: "firewall.analytics.actions.labels.managed_challenge_interactive_solved",
					managed_challenge_non_interactive_solved: "firewall.analytics.actions.labels.managed_challenge_non_interactive_solved",
					managed_challenge_bypassed: "firewall.analytics.actions.labels.managed_challenge_bypassed",
					skip: "firewall.analytics.actions.labels.skip",
					force_connection_close: "firewall.analytics.actions.labels.force_connection_close"
				},
				o = {
					"Behavioral Analysis": "security_analytics.labels.bot_source.behavioral_analysis",
					Heuristics: "security_analytics.labels.bot_source.heuristics",
					"Machine Learning": "security_analytics.labels.bot_source.machine_learning",
					"Not Computed": "security_analytics.labels.bot_source.not_computed",
					"JS Fingerprinting": "security_analytics.labels.bot_source.js_fingerprinting",
					"Verified Bot": "security_analytics.labels.bot_source.verified_bot",
					"Cloudflare Service": "security_analytics.labels.bot_source.cloudflare_service"
				},
				s = {
					ASN: "asn",
					COUNTRY: "country",
					IP: "ip",
					IP_RANGE: "iprange",
					SECURITY_LEVEL: "securitylevel",
					VALIDATION: "validation",
					ZONE_LOCKDOWN: "zonelockdown",
					WAF: "waf",
					UA_BLOCK: "uablock",
					RATE_LIMIT: "ratelimit",
					FIREWALL_RULES: "firewallrules",
					BIC: "bic",
					HOT: "hot",
					L7DOS: "l7ddos",
					BOT_FIGHT_MODE: "botFight",
					API_SHIELD: "apiShield",
					API_SHIELD_SCHEMA_VALIDATION: "apiShieldSchemaValidation",
					API_SHIELD_TOKEN_VALIDATION: "apiShieldTokenValidation",
					API_SHIELD_SEQUENCE_MITIGATION: "apiShieldSequenceMitigation",
					FIREWALL_CUSTOM: "firewallCustom",
					FIREWALL_MANAGED: "firewallManaged",
					SDD: "sdd",
					DLP: "dlp",
					BOT_MANAGEMENT: "botManagement",
					UNKNOWN: "unknown"
				},
				d = {
					[s.ASN]: "firewall.analytics.services.labels.asn",
					[s.COUNTRY]: "firewall.analytics.services.labels.country",
					[s.IP]: "firewall.analytics.services.labels.ip",
					[s.IP_RANGE]: "firewall.analytics.services.labels.ipRange",
					[s.SECURITY_LEVEL]: "firewall.analytics.services.labels.securityLevel",
					[s.VALIDATION]: "firewall.analytics.services.labels.validation",
					[s.ZONE_LOCKDOWN]: "firewall.analytics.services.labels.zoneLockdown",
					[s.WAF]: "firewall.analytics.services.labels.waf",
					[s.UA_BLOCK]: "firewall.analytics.services.labels.uaBlock",
					[s.RATE_LIMIT]: "firewall.analytics.services.labels.rateLimit",
					[s.FIREWALL_RULES]: "firewall.analytics.services.labels.firewallRules",
					[s.BIC]: "firewall.analytics.services.labels.bic",
					[s.HOT]: "firewall.analytics.services.labels.hot",
					[s.UNKNOWN]: "firewall.analytics.services.labels.unknown",
					[s.L7DOS]: "firewall.analytics.services.labels.l7dos",
					[s.BOT_FIGHT_MODE]: "firewall.analytics.services.labels.bot_fight_mode",
					[s.API_SHIELD]: "firewall.analytics.services.labels.apiShield",
					[s.API_SHIELD_SCHEMA_VALIDATION]: "firewall.analytics.services.labels.apiShieldSchemaValidation",
					[s.API_SHIELD_TOKEN_VALIDATION]: "firewall.analytics.services.labels.apiShieldTokenValidation",
					[s.API_SHIELD_SEQUENCE_MITIGATION]: "firewall.analytics.services.labels.apiShieldSequenceMitigation",
					[s.FIREWALL_CUSTOM]: "firewall.analytics.services.labels.firewallCustom",
					[s.FIREWALL_MANAGED]: "firewall.analytics.services.labels.firewallManaged",
					[s.DLP]: "firewall.analytics.services.labels.dlp",
					[s.BOT_MANAGEMENT]: "firewall.analytics.services.labels.botManagement"
				}
		},
		"../react/pages/security/analytics/security-analytics/components/logs/resources/constants.ts": function(W, v, t) {
			"use strict";
			t.d(v, {
				AS: function() {
					return m
				},
				IK: function() {
					return r
				},
				Ki: function() {
					return s
				},
				Lz: function() {
					return i
				},
				nT: function() {
					return u
				},
				o4: function() {
					return p
				},
				oY: function() {
					return d
				},
				qH: function() {
					return n
				},
				x3: function() {
					return a
				}
			});
			var e = t("../react/pages/security/analytics/resources/labels.ts"),
				o = t("../react/common/constants/analytics/botScoreSrc.ts");
			const s = ["block", "challenge", "jschallenge", "managedChallenge"],
				d = ["miss", "expired", "bypass", "dynamic"],
				l = c => Object.fromEntries(Object.entries(c).map(([_, y]) => [y, _])),
				m = {
					block: "block",
					challenge: "challenge",
					jschallenge: "jschallenge",
					managed_challenge: "managedChallenge"
				},
				a = l(m),
				u = {
					asn: e.AU.ASN,
					country: e.AU.COUNTRY,
					ip: e.AU.IP,
					ipRange: e.AU.IP_RANGE,
					securityLevel: e.AU.SECURITY_LEVEL,
					validation: e.AU.VALIDATION,
					zoneLockdown: e.AU.ZONE_LOCKDOWN,
					waf: e.AU.WAF,
					rateLimit: e.AU.RATE_LIMIT,
					firewallRules: e.AU.FIREWALL_RULES,
					bic: e.AU.BIC,
					hot: e.AU.HOT,
					unknown: e.AU.UNKNOWN,
					l7ddos: e.AU.L7DOS,
					botFight: e.AU.BOT_FIGHT_MODE,
					apiShield: e.AU.API_SHIELD,
					apiShieldSchemaValidation: e.AU.API_SHIELD_SCHEMA_VALIDATION,
					apiShieldTokenValidation: e.AU.API_SHIELD_TOKEN_VALIDATION,
					firewallCustom: e.AU.FIREWALL_CUSTOM,
					firewallManaged: e.AU.FIREWALL_MANAGED,
					dlp: e.AU.DLP,
					botManagement: e.AU.BOT_MANAGEMENT,
					uaBlock: e.AU.UA_BLOCK
				},
				E = l(u),
				n = l(o.EG);
			let r = function(c) {
				return c.SAMPLED = "sampled", c.RAW = "raw", c
			}({});
			const i = "security-analytics-log-explorer";
			let p = function(c) {
				return c.CLICK_ADAPTIVE_SAMPLING = 'click on "adaptive sampling"', c.CLICK_TO_LOG_EXPLORER_DESCRIPTION = 'click on "Go to Log Explorer" in the description', c.CLICK_TO_LOG_EXPLORER_BANNER = 'click on "Go to Log Explorer" in the banner"', c.CLICK_SWITCH_TO_RAW_LOGS = 'click on "Switch to raw logs"', c.CLICK_SWITCH_TO_SAMPLED_LOGS = 'click on "Switch back to sampled logs"', c
			}({})
		},
		"../react/pages/security/api-shield/constants.ts": function(W, v, t) {
			"use strict";
			t.d(v, {
				AB: function() {
					return n
				},
				API_SHIELD_TOAST: function() {
					return T
				},
				CR: function() {
					return y
				},
				Cg: function() {
					return u
				},
				L8: function() {
					return i
				},
				Ps: function() {
					return a
				},
				_i: function() {
					return E
				},
				ac: function() {
					return s
				},
				k1: function() {
					return l
				},
				k2: function() {
					return _
				},
				mU: function() {
					return c
				},
				sM: function() {
					return d
				},
				tA: function() {
					return o
				},
				uv: function() {
					return m
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-routes/es/index.js");
			const o = ["log", "block"],
				s = [...o, "disable"],
				d = 10,
				l = "header",
				m = {
					root: (0, e.BC)`/${"accountId"}/${"zoneName"}/security/api-shield`,
					addEndpoints: (0, e.BC)`/${"accountId"}/${"zoneName"}/security/api-shield/add-endpoints`,
					addFromDiscovery: (0, e.BC)`/${"accountId"}/${"zoneName"}/security/api-shield/add-endpoints/discovery`,
					addSchemaEndpointMgmt: (0, e.BC)`/${"accountId"}/${"zoneName"}/security/api-shield/add-endpoints/upload`,
					discovery: (0, e.BC)`/${"accountId"}/${"zoneName"}/security/api-shield/discovery`,
					editSessionIdentifiers: (0, e.BC)`/${"accountId"}/${"zoneName"}/security/api-shield/discovery/session-identifiers`,
					endpointManagement: (0, e.BC)`/${"accountId"}/${"zoneName"}/security/api-shield`,
					operationDetails: (0, e.BC)`/${"accountId"}/${"zoneName"}/security/api-shield/operation`,
					settings: (0, e.BC)`/${"accountId"}/${"zoneName"}/security/api-shield/settings`,
					sequences: (0, e.BC)`/${"accountId"}/${"zoneName"}/security/api-shield/sequences`,
					schemaValidation: (0, e.BC)`/${"accountId"}/${"zoneName"}/security/api-shield/schema-validation`,
					developerPortal: (0, e.BC)`/${"accountId"}/${"zoneName"}/security/api-shield/developer-portal`,
					apiRules: (0, e.BC)`/${"accountId"}/${"zoneName"}/security/api-shield/api-rules`,
					updateJWTRules: (0, e.BC)`/${"accountId"}/${"zoneName"}/security/api-shield/jwt-rules`,
					updateJWTConfiguration: (0, e.BC)`/${"accountId"}/${"zoneName"}/security/api-shield/jwt-configuration`,
					sequenceRules: (0, e.BC)`/${"accountId"}/${"zoneName"}/security/api-shield/sequence-rules`,
					routingRule: (0, e.BC)`/${"accountId"}/${"zoneName"}/security/api-shield/routing`,
					upgrade: (0, e.BC)`/${"accountId"}/${"zoneName"}/security/api-shield/upgrade`
				},
				a = "sess_ids_last_updated",
				u = "all";
			let E = function(O) {
				return O.DISCOVERY_FILTER = "discovery-filter-state", O.ADD_JWT_RULES_FILTER = "add-jwt-rules-state", O.ENDPOINT_MANAGEMENT_FILTER = "endpoint-management-filter-cache-key", O
			}({});
			const n = 63,
				r = 0,
				i = 10,
				p = {
					id: "method",
					desc: !0
				};
			let c = function(O) {
				return O.JWT_CONFIGURATIONS = "API_SHIELD_JWT_CONFIGURATIONS", O
			}({});
			const _ = {
					METHOD: "method.listbox_filter",
					HOSTNAME: "hostname.listbox_filter",
					LABELS: "labels.listbox_filter"
				},
				y = "api-shield-schema-validation-for-all-customers";
			let T = function(O) {
				return O.UPLOAD_SCHEMA = "schemaName", O.ADDED_ENDPOINT = "addedEndpoint", O.DEPLOYED_ROUTE = "deployedRoute", O.DELETED_ROUTE = "deletedRoute", O.UPDATED_LABELS_SINGLE_ENDPOINT = "updateLabelsSingle", O.UPDATED_LABELS_MULTI_ENDPOINT = "updateLabelsMulti", O
			}({})
		},
		"../react/pages/security/api-shield/entitlements.tsx": function(W, v, t) {
			"use strict";
			t.d(v, {
				$0: function() {
					return r
				},
				CR: function() {
					return n
				},
				DM: function() {
					return te
				},
				DN: function() {
					return P
				},
				Dc: function() {
					return Y
				},
				Dg: function() {
					return Q
				},
				FV: function() {
					return H
				},
				LG: function() {
					return h
				},
				Mz: function() {
					return K
				},
				OL: function() {
					return a
				},
				St: function() {
					return T
				},
				UG: function() {
					return i
				},
				Wy: function() {
					return p
				},
				iU: function() {
					return b
				},
				jI: function() {
					return l
				},
				qK: function() {
					return L
				},
				qN: function() {
					return E
				},
				r6: function() {
					return ie
				},
				sK: function() {
					return _
				},
				t1: function() {
					return g
				},
				yk: function() {
					return u
				},
				yo: function() {
					return pe
				},
				zo: function() {
					return C
				},
				zt: function() {
					return m
				}
			});
			var e = t("../react/pages/security/api-shield/types.ts"),
				o = t("../react/common/hooks/useZoneEntitlement.ts"),
				s = t("../react/common/hooks/useAccountEntitlement.ts"),
				d = t("../react/pages/security/api-shield/settings/constants.tsx");
			const l = {
					[e.H.CONFIGURATION]: {
						maxApiShields: "rulesets.max_api_shields",
						centralEndpointsListAllowed: "central_endpoint_list.allowed",
						maxRulesetSize: "central_endpoint_list.api_gateway_phases_max_ruleset_size",
						apiRouting: "api_routing.allowed",
						endpointMatchingAllowed: "endpoint_matching.allowed"
					},
					[e.H.DISCOVERY]: {
						discoveryAllowed: "api_discovery.allowed",
						discoveryThresholdsAllowed: "endpoint_abuse_detection.volumetric_allowed"
					},
					[e.H.JWT]: {
						tokenValidationAllowed: "token_validation.allowed",
						maxTokenValidationRules: "token_validation.max_rules_per_zone",
						maxTokenValidationConfigs: "token_validation.max_configs_per_zone"
					},
					[e.H.OPERATIONS]: {
						maxOperationsAllowed: "central_endpoint_list.max_endpoints_per_zone"
					},
					[e.H.SCHEMA_VALIDATION]: {
						schemaValidationAllowed: "central_endpoint_list.schema_validation_allowed",
						maxValidatedSchemasAllowed: "central_endpoint_list.max_validated_schemas_per_zone",
						maxSchemaBytes: "central_endpoint_list.max_translated_schema_bytes_per_zone"
					},
					[e.H.USER_SCHEMAS]: {
						maxUserSchemasAllowed: "central_endpoint_list.max_schemas_per_zone",
						maxSchemaBytesAllowed: "central_endpoint_list.max_translated_schema_bytes_per_zone"
					},
					[e.H.LEARNED_SCHEMAS]: {
						maxLearnedSchemasAllowed: "central_endpoint_list.max_learned_schemas_per_zone"
					},
					[e.H.SEQUENCE]: {
						sequenceAllowed: "endpoint_abuse_detection.sequential_allowed"
					},
					[e.H.SEQUENCE_RULES]: {
						maxSequenceRules: "endpoint_abuse_detection.sequential_max_rules"
					}
				},
				m = {
					dlpAllowed: "rulesets.fw_global_rulesets_execute_firewall_managed_cramr_allowed",
					logAllowed: "rulesets.log_action_allowed",
					regexOperatorAllowed: "rulesets.regex_operator_allowed",
					sequencesAllowed: "rulesets.sequences_allowed",
					contractEnabled: "contract.customer_enabled"
				},
				a = l[e.H.DISCOVERY],
				u = () => !!(0, o.Z)(a.discoveryAllowed),
				E = () => !!(0, o.Z)(a.discoveryThresholdsAllowed),
				n = l[e.H.JWT],
				r = () => !!(0, o.Z)(n.tokenValidationAllowed),
				i = () => (0, o.Z)(n.maxTokenValidationRules),
				p = () => (0, o.Z)(n.maxTokenValidationConfigs),
				c = l[e.H.SEQUENCE],
				_ = () => !!(0, o.Z)(c.sequenceAllowed),
				y = l[e.H.SEQUENCE_RULES],
				T = () => (0, o.Z)(y.maxSequenceRules),
				O = l[e.H.OPERATIONS],
				h = () => (0, o.Z)(O.maxOperationsAllowed),
				S = l[e.H.USER_SCHEMAS],
				g = () => {
					const Z = (0, o.Z)(S.maxUserSchemasAllowed);
					return typeof Z == "number" ? Z : d.Hs
				},
				C = () => {
					const Z = (0, o.Z)(S.maxSchemaBytesAllowed);
					return typeof Z == "number" ? Z : d.x5
				},
				M = l[e.H.LEARNED_SCHEMAS],
				b = () => (0, o.Z)(M.maxLearnedSchemasAllowed),
				R = l[e.H.SCHEMA_VALIDATION],
				A = () => useZoneEntitlement(R.schemaValidationAllowed),
				L = () => (0, o.Z)(R.maxSchemaBytes),
				P = l[e.H.CONFIGURATION],
				H = () => (0, o.Z)(P.maxApiShields),
				K = () => (0, o.Z)(P.apiRouting),
				Q = () => (0, o.Z)(P.centralEndpointsListAllowed),
				pe = () => !!(0, o.Z)(m.logAllowed),
				te = () => !!(0, o.Z)(m.regexOperatorAllowed),
				Y = () => !!(0, o.Z)(m.dlpAllowed),
				ie = () => !!(0, s.Z)(m.sequencesAllowed)
		},
		"../react/pages/security/api-shield/settings/constants.tsx": function(W, v, t) {
			"use strict";
			t.d(v, {
				Cl: function() {
					return n
				},
				Hs: function() {
					return u
				},
				PD: function() {
					return p
				},
				Sk: function() {
					return c
				},
				TD: function() {
					return E
				},
				Ye: function() {
					return m
				},
				ZR: function() {
					return i
				},
				a2: function() {
					return r
				},
				x5: function() {
					return a
				},
				y$: function() {
					return l
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t.n(e),
				s = t("../react/utils/translator.tsx"),
				d = t("../../../../node_modules/@cloudflare/component-responsive-table/es/index.js");
			let l = function(y) {
				return y.JWT_SECTION = "JWT_SECTION", y.ENDPOINT_SETTINGS = "ENDPOINT_SETTINGS", y.SCHEMA_SETTINGS = "SCHEMA_SETTINGS", y
			}({});
			const m = {
					page: 1,
					perPage: 5,
					totalCount: 0
				},
				a = 2e5,
				u = 5,
				E = {
					name: "created_at",
					direction: d.Sr.desc
				},
				n = {
					title: o().createElement(s.cC, {
						id: "api_shield.schema_validation_v2.settings.new.table.userSchemas.empty.title"
					}),
					description: o().createElement(s.cC, {
						id: "api_shield.schema_validation_v2.settings.new.table.userSchemas.empty.description"
					})
				},
				r = {
					title: o().createElement(s.cC, {
						id: "api_shield.schema_validation_v2.settings.new.table.learnedSchemas.empty.title"
					}),
					description: o().createElement(s.cC, {
						id: "api_shield.schema_validation_v2.settings.new.table.learnedSchemas.empty.description"
					})
				},
				i = {
					title: o().createElement(s.cC, {
						id: "api_shield.schema_validation_v2.settings.new.table.sessionIdentifiers.empty.title"
					}),
					description: o().createElement(s.cC, {
						id: "api_shield.schema_validation_v2.settings.new.table.sessionIdentifiers.empty.description"
					})
				},
				p = {
					MENUBOX_WRAPPER: "menuBox.wrapper",
					JWT_INFOBOX: "settings.infobox.jwt",
					ENDPOINT_INFOBOX: "settings.infobox.endpoint",
					SCHEMA_VALIDATION_INFOBOX: "settings.infobox.schemaValidation",
					FALLTHROUGH_INFOBOX: "settings.infobox.fallthrough",
					MTLS_RULES_CARD_TITLE: "mtls.rulesCard.title",
					MTLS_RULES_CARD_DOC_LINK: "mtls.rulesCard.docLink",
					JWT_CONFIGURATION_TABLE_WRAPPER: "jwt.configuration.tableWrapper",
					JWT_CONFIGURATION_TABLE_ERROR: "jwt.configuration.table.error",
					JWT_CONFIGURATION_ITEM: "jwt.configuration.item",
					SESSION_IDENTIFIERS_LOADING: "sessionsIdentifiers.state.loading",
					SESSION_IDENTIFIERS_TABLE_WRAPPER: "sessionsIdentifiers.table.wrapper",
					SESSION_IDENTIFIERS_ADD_IDENTIFIER_BANNER: "sessionIdentifiers.addIdentifier.banner",
					SESSION_IDENTIFIERS_EDIT_IDENTIFIERS_BUTTON: "sessionIdentifiers.editIdentifiers.button",
					SCHEMA_VALIDATION_NEW_TABLE_FILE_SIZE_CELL: "schemaValidation.newTable.fileSize.cell",
					SCHEMA_VALIDATION_NEW_TABLE_HOSTNAME_CELL: "schemaValidation.newTable.hostname.cell",
					SCHEMA_VALIDATION_NEW_TABLE_FILTER_BUTTON: "schemaValidation.newTable.filter.button"
				},
				c = {
					FALLTHROUGH_SECTION_HEADING: "fallthroughSection.heading",
					FALLTHROUGH_SECTION_DESCRIPTION: "fallthroughSection.description",
					FALLTHROUGH_SECTION_USE_TEMPLATE_BUTTON: "fallthroughSection.button",
					FALLTHROUGH_SECTION_HOSTNAME_NAME: "fallthroughSection.hostname.div",
					FALLTHROUGH_SECTION_SCHEMA_NAME: "fallthroughSection.schema.div",
					FALLTHROUGH_DELETE_HOSTNAME_BUTTON: "fallthroughSection.delete_hostname.button",
					TEMPLATE_MODAL_TITLE: "fallthroughSection.template_modal.title",
					TEMPLATE_MODAL_DESCRIPTION: "fallthroughSection.template_modal.description",
					TEMPLATE_MODAL_LOADING: "fallthroughSection.template_modal.loading",
					TEMPLATE_MODAL_SELECT: "fallthroughSection.template_modal.select",
					TEMPLATE_MODAL_TITLE_LIST: "fallthroughSection.template_modal.title.list",
					TEMPLATE_MODAL_CANCEL_BUTTON: "fallthroughSection.template_modal.button.cancel",
					TEMPLATE_MODAL_REDIRECT_BUTTON: "fallthroughSection.template_modal.button.redirect"
				},
				_ = {
					DEVELOPER_PORTAL: "Mocked DeveloperPortalSection",
					JWT_CONFIGURATION: "Mocked JWTConfigurationSection",
					MTLS: "Mocked MTLSSection",
					SESSION_IDENTIFIERS: "Mocked SessionIdentifiersSection",
					SESSION_IDENTIFIERS_TABLE: "Mocked Session Identifiers Table",
					MENUBOX: "Mocked MenuBox",
					SCHEMA_VALIDATION: "Mocked SV2SettingsSection",
					SCHEMAS_TABLE_NEW: "Mocked New Schemas Table",
					RULESET_ENTRYPOINT_TABLE: "Mocked RulesetEntrypointTable",
					TEMPLATE_MODAL: "Mocked TemplateModal",
					FALLTHROUGH_RULES: "Mocked Fallthrough Rules"
				}
		},
		"../react/pages/security/api-shield/tracking.ts": function(W, v, t) {
			"use strict";
			t.d(v, {
				Fj: function() {
					return u
				},
				kq: function() {
					return a
				},
				xr: function() {
					return E
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				o = t.n(e);

			function s(n) {
				for (var r = 1; r < arguments.length; r++) {
					var i = arguments[r] != null ? Object(arguments[r]) : {},
						p = Object.keys(i);
					typeof Object.getOwnPropertySymbols == "function" && p.push.apply(p, Object.getOwnPropertySymbols(i).filter(function(c) {
						return Object.getOwnPropertyDescriptor(i, c).enumerable
					})), p.forEach(function(c) {
						d(n, c, i[c])
					})
				}
				return n
			}

			function d(n, r, i) {
				return r = l(r), r in n ? Object.defineProperty(n, r, {
					value: i,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : n[r] = i, n
			}

			function l(n) {
				var r = m(n, "string");
				return typeof r == "symbol" ? r : String(r)
			}

			function m(n, r) {
				if (typeof n != "object" || n === null) return n;
				var i = n[Symbol.toPrimitive];
				if (i !== void 0) {
					var p = i.call(n, r || "default");
					if (typeof p != "object") return p;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (r === "string" ? String : Number)(n)
			}
			let a = function(n) {
				return n.MAIN = "API Shield", n.SCHEMA_VALIDATION = "Schema Validation", n.JWT_VALIDATION = "JWT Validation", n.SEQUENCE_ANALYTICS = "Sequence Analytics", n.SEQUENCE_RULES = "Sequence Rules", n.ENDPOINT_MANAGEMENT = "Endpoint Management", n.API_DISCOVERY = "API Discovery", n.SETTINGS = "Settings", n
			}({});
			const u = {
					[a.ENDPOINT_MANAGEMENT]: {
						listOfEndpoints: "view a page of endpoints",
						deleteEndpoint: "delete an endpoint",
						detailedMetrics: "view detailed endpoint metrics with recommended rate limits",
						createEndpoint: "create an endpoint",
						deployRouting: "deploy routing",
						deleteRouting: "delete routing"
					},
					[a.API_DISCOVERY]: {
						viewDiscoveredEndpoints: "view a page of discovered endpoints",
						saveDiscoveredEndpoint: "save discovered endpoints",
						ignoreOrUnignoreDiscoveredEndpoint: "ignore or unignore discovered endpoints"
					},
					[a.SCHEMA_VALIDATION]: {
						viewSchemasList: "view a list of schemas",
						viewSchemaAdoption: "view which endpoints have adopted which schemas",
						addLearnedSchemaByEndpoint: "add a learned schema on a single endpoint",
						uploadSchema: "upload api schemas to schema validation",
						addLearnedSchemaByHostname: "add a learned schema by hostname",
						downloadSchema: "download an existing schema",
						deleteSchema: "delete an existing schema"
					},
					[a.SEQUENCE_ANALYTICS]: {
						viewSequencesPage: "view a page of sequences"
					},
					[a.SEQUENCE_RULES]: {
						listSequenceRules: "view a list of sequence rules",
						deleteSequenceRule: "delete a sequence rule",
						reorderSequenceRule: "reorder a sequence rule",
						createSequenceRule: "create a sequence rule",
						editSequenceRule: "edit a sequence rule"
					},
					[a.JWT_VALIDATION]: {
						viewJWTRules: "view a page of jwt rules",
						addJWTRule: "add a jwt rule",
						editJWTRule: "edit a jwt rule",
						deleteJWTRule: "delete a jwt rule",
						reprioritizeJWTRule: "reprioritize a jwt rule",
						viewJWTConfigs: "view jwt configs",
						addJWTConfig: "add a jwt config",
						editJWTConfig: "edit a jwt config",
						deleteJWTConfig: "delete a jwt config"
					},
					[a.SETTINGS]: {
						redirectToFirewallRulesTemplate: "redirect to firewall rules",
						redirectToPages: "redirect to uploaded developer portal on pages",
						listSessionIdentifiers: "list session identifiers",
						listRequestsContainingSessionIdentifiers: "list requests containing session identifiers",
						addOrRemoveSessionIdentifiers: "add or remove session identifiers",
						listAllFallthroughSettings: "list fallthrough settings",
						listAllFallthroughSchemas: "list fallthrough schemas",
						redirectToCustomRules: "redirect to custom rules from create fallthrough template"
					}
				},
				E = ({
					name: n,
					category: r = "user journey",
					product: i = a.MAIN,
					productName: p,
					additionalData: c
				}) => {
					o().sendEvent(n, s({
						category: r,
						product: i,
						productName: p
					}, c || {}))
				}
		},
		"../react/pages/security/api-shield/types.ts": function(W, v, t) {
			"use strict";
			t.d(v, {
				H: function() {
					return o
				}
			});
			let e = function(s) {
					return s.LIST_OF_JUST_ADDED_IDENTIFIERS = "LIST_OF_JUST_ADDED_IDENTIFIERS", s
				}({}),
				o = function(s) {
					return s.OPERATIONS = "operations", s.JWT = "jwt", s.SCHEMA_VALIDATION = "schemaValidation", s.USER_SCHEMAS = "userSchemas", s.LEARNED_SCHEMAS = "learnedSchemas", s.DISCOVERY = "discovery", s.CONFIGURATION = "configuration", s.SEQUENCE = "sequence", s.SEQUENCE_RULES = "sequenceRules", s.FALLTHROUGH_RULES = "fallThroughRules", s
				}({})
		},
		"../react/pages/security/api-shield/utils/useApiShield.tsx": function(W, v, t) {
			"use strict";
			t.d(v, {
				R: function() {
					return a
				}
			});
			var e = t("../react/pages/security/api-shield/entitlements.tsx"),
				o = t("../react/pages/security/api-shield/constants.ts"),
				s = t("../react/common/hooks/useGate.ts");
			const d = () => !!(0, s.Z)(o.CR);
			var l = t("../react/common/selectors/zoneSelectors.ts"),
				m = t("../react/app/redux/index.ts");
			const a = () => {
				const u = ((0, e.FV)() || 0) > 0,
					E = d(),
					n = (0, e.yk)(),
					r = (0, e.yo)(),
					i = (0, m.p4)(l.nA),
					p = (0, l.Ns)(i),
					c = (0, l._y)(i),
					_ = (0, l.z5)(i),
					y = (0, l.ko)(i);
				return {
					isFreeZone: p,
					isProZone: c,
					isBiz: _,
					isEnterpriseZone: y,
					hasLogAction: r,
					hasApiShields: u,
					hasApiDiscovery: n,
					hasFreeTier: E && !u,
					hasApiShieldsAndApiDiscovery: n && u,
					isEnableFreeTier: E
				}
			}
		},
		"../react/pages/security/bots/tracking.ts": function(W, v, t) {
			"use strict";
			t.d(v, {
				N3: function() {
					return e
				},
				UN: function() {
					return s
				},
				h1: function() {
					return o
				}
			});
			let e = function(d) {
					return d.INITIAL_FETCH_SCORES = "view bots scores distribution", d.FETCH_CONFIGURATION = "view bots configuration page", d.INITIAL_FETCH_TIME_SERIES = "view bots time series analytics", d.INITIAL_FETCH_ATTRIBUTES = "view bots attributes", d.UPDATE_SETTINGS = "update bots settings", d.DELETE_RULE = "delete bots ruleset", d.UPDATE_RULE = "update bots ruleset", d.FETCH_RULES = "view bots ruleset", d.CONFIGURE_BOT_MANAGEMENT = "view bots management", d.WAF_RULES_REDIRECT = "redirect waf rules", d
				}({}),
				o = function(d) {
					return d.PROVIDED_TEMPLATE = "provided template link in detection card", d.CONFIGURE_BOT_MANAGEMENT = "configure bot management link", d.USE_TEMPLATE = "use template", d.CREATE_FIREWALL_RULE = "create firewall rule", d.WAF_RULES = "waf rules", d
				}({});
			const s = "user journey"
		},
		"../react/pages/security/page-shield/resources/index.ts": function(W, v, t) {
			"use strict";
			t.d(v, {
				CP: function() {
					return F
				},
				Ks: function() {
					return ke
				},
				sV: function() {
					return X
				},
				SI: function() {
					return he
				},
				v5: function() {
					return M
				},
				xg: function() {
					return I
				},
				YC: function() {
					return B
				},
				MC: function() {
					return b
				},
				Xe: function() {
					return r
				},
				u8: function() {
					return A
				},
				Oq: function() {
					return $
				},
				VT: function() {
					return L
				},
				qc: function() {
					return H
				},
				V0: function() {
					return C
				},
				Lj: function() {
					return Se
				},
				k2: function() {
					return y
				},
				$g: function() {
					return c
				},
				SJ: function() {
					return K
				},
				KH: function() {
					return j
				},
				Mq: function() {
					return Z
				},
				FV: function() {
					return ee
				},
				j$: function() {
					return Q
				},
				I1: function() {
					return n
				},
				Wq: function() {
					return p
				},
				jf: function() {
					return i
				},
				sW: function() {
					return de
				},
				Uq: function() {
					return g
				},
				yd: function() {
					return te
				},
				QM: function() {
					return Y
				},
				Uc: function() {
					return ie
				},
				R$: function() {
					return _
				},
				pG: function() {
					return ze
				},
				Ar: function() {
					return Be
				},
				Sk: function() {
					return Ee
				},
				gY: function() {
					return Oe
				},
				SE: function() {
					return je
				},
				m: function() {
					return se
				},
				xP: function() {
					return z
				},
				CI: function() {
					return N
				},
				p0: function() {
					return me
				},
				xl: function() {
					return Ke
				},
				Tb: function() {
					return $e
				},
				h3: function() {
					return Ue
				},
				xq: function() {
					return Ce
				},
				SQ: function() {
					return gt
				},
				C0: function() {
					return G
				},
				av: function() {
					return V
				},
				W3: function() {
					return We
				},
				WO: function() {
					return Re
				},
				Dk: function() {
					return at
				},
				we: function() {
					return Ge
				},
				Yt: function() {
					return mt
				},
				ex: function() {
					return Qe
				},
				E1: function() {
					return Ae
				},
				e0: function() {
					return pt
				},
				UH: function() {
					return xe
				},
				Qt: function() {
					return st
				},
				K$: function() {
					return Ze
				},
				dm: function() {
					return fe
				},
				oK: function() {
					return ot
				},
				qZ: function() {
					return it
				},
				_4: function() {
					return ue
				},
				qo: function() {
					return Te
				},
				CB: function() {
					return we
				},
				ti: function() {
					return Pe
				}
			});
			var e = t("../react/app/redux/makeAction.js"),
				o = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				s = t.n(o),
				d = t("../../../common/component/component-filter-bar/src/index.js"),
				l = t("../react/common/components/analytics/AnalyticsReport/constants.ts");

			function m(k) {
				for (var re = 1; re < arguments.length; re++) {
					var ve = arguments[re] != null ? Object(arguments[re]) : {},
						Le = Object.keys(ve);
					typeof Object.getOwnPropertySymbols == "function" && Le.push.apply(Le, Object.getOwnPropertySymbols(ve).filter(function(Ne) {
						return Object.getOwnPropertyDescriptor(ve, Ne).enumerable
					})), Le.forEach(function(Ne) {
						a(k, Ne, ve[Ne])
					})
				}
				return k
			}

			function a(k, re, ve) {
				return re = u(re), re in k ? Object.defineProperty(k, re, {
					value: ve,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : k[re] = ve, k
			}

			function u(k) {
				var re = E(k, "string");
				return typeof re == "symbol" ? re : String(re)
			}

			function E(k, re) {
				if (typeof k != "object" || k === null) return k;
				var ve = k[Symbol.toPrimitive];
				if (ve !== void 0) {
					var Le = ve.call(k, re || "default");
					if (typeof Le != "object") return Le;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (re === "string" ? String : Number)(k)
			}
			let n = function(k) {
				return k.BASE_URI = "base-uri", k.CHILD = "child-src", k.CONNECT = "connect-src", k.DEFAULT = "default-src", k.FONT = "font-src", k.FORM_ACTION = "form-action", k.FRAME = "frame-src", k.FRAME_ANCESTORS = "frame-ancestors", k.IMAGE = "img-src", k.MANIFEST = "manifest-src", k.MEDIA = "media-src", k.OBJECT = "object-src", k.SCRIPT = "script-src", k.STYLE = "style-src", k.WORKER = "worker-src", k.UPGRADE_INSECURE_REQUESTS = "upgrade-insecure-requests", k
			}({});
			const r = m({}, n, {
				BLOCK_ALL_MIXED_CONTENT: "block-all-mixed-content",
				DISOWN_OPENER: "disown-opener",
				NAVIGATE_TO: "navigate-to",
				PLUGIN_TYPES: "plugin-types",
				PREFETCH_SRC: "prefetch-src",
				REFERRER: "referrer",
				REFLECTED_XSS: "reflected-xss",
				REPORT_TO: "report-to",
				REPORT_URI: "report-uri",
				REQUIRE_SRI_FOR: "require-sri-for",
				REQUIRE_TRUSTED_TYPES_FOR: "require-trusted-types-for",
				SANDBOX: "sandbox",
				TRUSTED_TYPES: "trusted-types",
				WEBRTC: "webrtc"
			});
			let i = function(k) {
					return k.MONITOR = "monitor", k.POLICIES = "policies", k.SETTINGS = "settings", k
				}({}),
				p = function(k) {
					return k.SCRIPT_MONITOR = "script", k.CONNECTION_MONITOR = "connection", k.COOKIE_MONITOR = "cookie", k
				}({}),
				c = function(k) {
					return k.CryptominingScore = "cryptomining_score", k.MalwareScore = "malware_score", k.MagecartScore = "magecart_score", k
				}({}),
				_ = function(k) {
					return k.DataflowScore = "dataflow_score", k.ObfuscationScore = "obfuscation_score", k
				}({}),
				y = function(k) {
					return k.DomainMalicious = "domain_reported_malicious", k.UrlMalicious = "url_reported_malicious", k
				}({});

			function T(k) {
				for (var re = 1; re < arguments.length; re++) {
					var ve = arguments[re] != null ? Object(arguments[re]) : {},
						Le = Object.keys(ve);
					typeof Object.getOwnPropertySymbols == "function" && Le.push.apply(Le, Object.getOwnPropertySymbols(ve).filter(function(Ne) {
						return Object.getOwnPropertyDescriptor(ve, Ne).enumerable
					})), Le.forEach(function(Ne) {
						O(k, Ne, ve[Ne])
					})
				}
				return k
			}

			function O(k, re, ve) {
				return re = h(re), re in k ? Object.defineProperty(k, re, {
					value: ve,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : k[re] = ve, k
			}

			function h(k) {
				var re = S(k, "string");
				return typeof re == "symbol" ? re : String(re)
			}

			function S(k, re) {
				if (typeof k != "object" || k === null) return k;
				var ve = k[Symbol.toPrimitive];
				if (ve !== void 0) {
					var Le = ve.call(k, re || "default");
					if (typeof Le != "object") return Le;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (re === "string" ? String : Number)(k)
			}
			const g = 50,
				C = 9,
				M = "copy script url page shield",
				b = "disable page shield",
				R = "click documentation link",
				A = "enable page shield",
				L = "filter search page shield",
				P = "filter search view all page shield",
				H = "hover score tooltip page shield",
				K = "open alert modal page shield",
				Q = "change pagination page shield",
				pe = "close script modal page shield",
				te = "open script modal page shield",
				Y = "select alert type page shield",
				ie = "sort column page shield",
				Z = {
					CLICK_CREATE_POLICY: "click create policy form link",
					CLICK_ENABLE_POLICY_TOGGLE: "enable policy toggle",
					CLICK_EDIT_POLICY: "click edit policy",
					CLICK_BACK_POLICY: "click back to all policies link",
					CLICK_ADD_SOURCES: "click add sources",
					CLICK_REFRESH_SUGGESTIONS: "click refresh suggestions",
					SELECT_DIRECTIVE_DEFAULT_VALUE: "select directive default value",
					SELECT_DIRECTIVE_VALUE: "select directive value",
					EXPAND_DIRECTIVE_VALUE: "expand directive",
					DEPLOY_POLICY: "deploy policy",
					DELETE_POLICY: "delete policy"
				},
				j = {
					STARTS_WITH: l.Gn.startsWith,
					ENDS_WITH: l.Gn.endsWith,
					EQUALS: l.Gn.equals,
					CONTAINS: l.Gn.contains,
					DOES_NOT_CONTAIN: l.Gn.notContains,
					INCLUDES: "includes",
					IS_IN: l.Gn.in
				},
				$ = {
					status: {
						example: "active",
						type: d.kE.select,
						options: ["active", "inactive", "infrequent"],
						label: "common.status",
						urlParam: "status",
						operators: [j.EQUALS]
					},
					urls: {
						example: "malware.js",
						type: d.kE.string,
						options: ["true", "false"],
						operators: [j.CONTAINS, j.DOES_NOT_CONTAIN],
						label: "firewall.page_shield.script",
						urlParam: "urls"
					},
					hosts: {
						example: "hostname.com",
						operators: [j.EQUALS],
						type: d.kE.string,
						label: "firewall.page_shield.host",
						urlParam: "hosts"
					},
					page_url: {
						type: d.kE.string,
						operators: [j.INCLUDES, j.ENDS_WITH, j.STARTS_WITH],
						example: "/cart",
						label: "firewall.page_shield.page",
						urlParam: "page_url"
					}
				},
				F = T({}, $, {
					urls: T({}, $.urls, {
						label: "firewall.page_shield.connection"
					})
				}),
				X = {
					type: {
						example: "first_party",
						type: d.kE.select,
						options: ["first_party", "unknown"],
						label: "common.type",
						urlParam: "type",
						operators: [l.Gn.equals]
					},
					name: {
						example: "cookie_1",
						operators: [l.Gn.equals],
						type: d.kE.string,
						label: "firewall.page_shield.name",
						urlParam: "name"
					},
					domain: {
						example: "hostname.com",
						operators: [l.Gn.equals],
						type: d.kE.string,
						label: "firewall.page_shield.domain",
						urlParam: "domain"
					},
					path: {
						example: "/",
						operators: [l.Gn.equals],
						type: d.kE.string,
						label: "firewall.page_shield.path",
						urlParam: "path"
					},
					same_site: {
						operators: [l.Gn.equals],
						type: d.kE.select,
						options: ["lax", "strict", "none"],
						label: "firewall.page_shield.same_site",
						urlParam: "same_site"
					},
					http_only: {
						operators: [l.Gn.equals],
						type: d.kE.select,
						options: ["true", "false"],
						label: "firewall.page_shield.http_only",
						urlParam: "http_only"
					},
					secure: {
						operators: [l.Gn.equals],
						type: d.kE.select,
						options: ["true", "false"],
						label: "firewall.page_shield.secure",
						urlParam: "secure"
					}
				};
			let oe = function(k) {
				return k.SECURITY_THREATS = "Security Threats", k.C2_BOTNET = "C2 & Botnet", k.CRYPTOMINING = "Cryptomining", k.MALWARE = "Malware", k.PHISHING = "Phishing", k.SPYWARE = "Spyware", k.DGA_DOMAINS = "DGA Domains", k.TYPOSQUATTING_IMPERSONATION = "Typosquatting & Impersonation", k
			}({});
			const Ee = "https://www.cloudflare.com/plans/enterprise/contact/",
				B = {
					[n.BASE_URI]: "page_shield.policies.form.base_uri",
					[n.CHILD]: "page_shield.policies.form.child",
					[n.CONNECT]: "page_shield.policies.form.connections",
					[n.DEFAULT]: "page_shield.policies.form.default",
					[n.FONT]: "page_shield.policies.form.font",
					[n.FORM_ACTION]: "page_shield.policies.form.form",
					[n.FRAME]: "page_shield.policies.form.frame",
					[n.FRAME_ANCESTORS]: "page_shield.policies.form.frame_ancestors",
					[n.IMAGE]: "page_shield.policies.form.img",
					[n.MANIFEST]: "page_shield.policies.form.manifest",
					[n.MEDIA]: "page_shield.policies.form.media",
					[n.OBJECT]: "page_shield.policies.form.object",
					[n.SCRIPT]: "page_shield.policies.form.script",
					[n.STYLE]: "page_shield.policies.form.style",
					[n.UPGRADE_INSECURE_REQUESTS]: "page_shield.policies.form.upgrade_insecure_requests",
					[n.WORKER]: "page_shield.policies.form.worker"
				},
				I = {
					[n.BASE_URI]: "firewall.page_shield.policies.table.base_uri",
					[n.CHILD]: "firewall.page_shield.policies.table.child",
					[n.CONNECT]: "firewall.page_shield.policies.table.connections",
					[n.DEFAULT]: "firewall.page_shield.policies.table.default",
					[n.FONT]: "firewall.page_shield.policies.table.font",
					[n.FORM_ACTION]: "firewall.page_shield.policies.table.form",
					[n.FRAME]: "firewall.page_shield.policies.table.frame",
					[n.FRAME_ANCESTORS]: "firewall.page_shield.policies.table.frame_ancestors",
					[n.IMAGE]: "firewall.page_shield.policies.table.img",
					[n.MANIFEST]: "firewall.page_shield.policies.table.manifest",
					[n.MEDIA]: "firewall.page_shield.policies.table.media",
					[n.OBJECT]: "firewall.page_shield.policies.table.object",
					[n.SCRIPT]: "firewall.page_shield.policies.table.script",
					[n.STYLE]: "firewall.page_shield.policies.table.style",
					[n.UPGRADE_INSECURE_REQUESTS]: "firewall.page_shield.policies.table.upgrade_insecure_requests",
					[n.WORKER]: "firewall.page_shield.policies.table.worker"
				},
				x = {
					[c.CryptominingScore]: "firewall.page_shield.malicious.cryptomining.label",
					[c.MalwareScore]: "firewall.page_shield.malicious.malware.label",
					[c.MagecartScore]: "firewall.page_shield.malicious.magecart.label",
					[_.ObfuscationScore]: "firewall.page_shield.malicious.obfuscation_score.label",
					[_.DataflowScore]: "firewall.page_shield.malicious.dataflow_score.label"
				},
				q = {
					[y.DomainMalicious]: "firewall.page_shield.malicious.domain_reported_malicious.label",
					[y.UrlMalicious]: "firewall.page_shield.malicious.url_reported_malicious.label"
				},
				ee = {
					CONFIGURE_PAGE_SHIELD: "configure page shield",
					VIEW_PAGE_SHIELD_SETTINGS: "view page shield settings",
					VIEW_DETECTED_SCRIPTS: "view detected scripts",
					VIEW_DETECTED_CONNECTIONS: "view detected connections",
					VIEW_DETECTED_COOKIES: "view detected cookies",
					MANAGE_PAGE_SHIELD_POLICY: "manage page shield policy",
					VIEW_PAGE_SHIELD_POLICIES: "view page shield policies",
					SHOW_MUTABLE_VERSION_TOOLTIP: "show mutable version warning tooltip",
					OPEN_MUTABLE_VERSION_TOOLTIP: "open mutable version warning tooltip"
				},
				de = {
					lax: "firewall.page_shield.same_site.lax",
					strict: "firewall.page_shield.same_site.strict",
					none: "firewall.page_shield.same_site.none"
				},
				he = {
					first_party: "firewall.page_shield.cookie.type.first_party",
					unknown: "firewall.page_shield.cookie.type.unknown"
				},
				Se = {
					[p.SCRIPT_MONITOR]: "firewall.page_shield.script_details",
					[p.CONNECTION_MONITOR]: "firewall.page_shield.connection_details",
					[p.COOKIE_MONITOR]: "firewall.page_shield.cookie_details"
				},
				ke = {
					[p.SCRIPT_MONITOR]: "script_monitor.description",
					[p.CONNECTION_MONITOR]: "connection_monitor.description",
					[p.COOKIE_MONITOR]: "cookie_monitor.description"
				},
				je = (0, e.ZP)("pageShieldConfig", "get", "/zones/(zoneId)/page_shield").on("success", k => (s().sendEvent(ee.VIEW_PAGE_SHIELD_SETTINGS, {
					category: "user journey",
					product: "Page shield"
				}), k)),
				we = (0, e.ZP)("pageShieldConfig", "put", "/zones/(zoneId)/page_shield").on("success", k => (s().sendEvent(ee.CONFIGURE_PAGE_SHIELD, {
					category: "user journey",
					product: "Page shield"
				}), k)),
				$e = (0, e.ZP)("pageShieldScripts", "get", "/zones/(zoneId)/page_shield/scripts").on("success", k => (s().sendEvent(ee.VIEW_DETECTED_SCRIPTS, {
					category: "user journey",
					product: "Page shield"
				}), k)),
				Ke = (0, e.ZP)("pageShieldScript", "get", "/zones/(zoneId)/page_shield/scripts/(scriptId)"),
				z = (0, e.ZP)("pageShieldConnections", "get", "/zones/(zoneId)/page_shield/connections").on("success", k => (s().sendEvent(ee.VIEW_DETECTED_CONNECTIONS, {
					category: "user journey",
					product: "Page shield"
				}), k)),
				se = (0, e.ZP)("pageShieldConnection", "get", "/zones/(zoneId)/page_shield/connections/(connectionId)"),
				ge = (0, e.ZP)("pageShieldCookies", "get", "/zones/(zoneId)/page_shield/cookies").on("success", k => (s().sendEvent(ee.VIEW_DETECTED_COOKIES, {
					category: "user journey",
					product: "Page shield"
				}), k)),
				N = (0, e.ZP)("pageShieldPolicies", "get", "/zones/(zoneId)/page_shield/policies").on("success", k => (s().sendEvent(ee.VIEW_PAGE_SHIELD_POLICIES, {
					category: "user journey",
					product: "Page shield"
				}), k)),
				me = (0, e.ZP)("pageShieldPolicy", "get", "/zones/(zoneId)/page_shield/policies/(policiesId)"),
				Pe = (0, e.ZP)("pageShieldPolicy", "put", "/zones/(zoneId)/page_shield/policies/(policiesId)").on("success", k => (s().sendEvent(ee.MANAGE_PAGE_SHIELD_POLICY, {
					category: "user journey",
					product: "Page shield",
					updateType: "update"
				}), k)),
				Be = (0, e.ZP)("pageShieldPolicy", "delete", "/zones/(zoneId)/page_shield/policies/(policiesId)").on("success", k => (s().sendEvent(ee.MANAGE_PAGE_SHIELD_POLICY, {
					category: "user journey",
					product: "Page shield",
					updateType: "delete"
				}), k)),
				ze = (0, e.ZP)("pageShieldPolicy", "post", "/zones/(zoneId)/page_shield/policies").on("success", k => (s().sendEvent(ee.MANAGE_PAGE_SHIELD_POLICY, {
					category: "user journey",
					product: "Page shield",
					updateType: "create"
				}), k)),
				Oe = (0, e.ZP)("pageShieldMonitorDomainDetails", "get", "/accounts/(accountId)/intel/domain?domain=(urlID)"),
				Ue = (0, e.ZP)("pageShieldMonitorWhoIsRecord", "get", "/accounts/(accountId)/intel/whois?domain=(urlID)");
			var Fe = t("../react/app/redux/normalizer.js");
			const We = k => k.pageShield.configuration,
				Ye = k => {
					var re;
					return (re = k.pageShield.configuration.data) === null || re === void 0 ? void 0 : re.enabled
				},
				V = k => {
					var re;
					return (re = We(k)) === null || re === void 0 ? void 0 : re.data
				},
				ce = k => k.pageShield.scripts,
				fe = k => k.pageShield.script,
				Me = k => k.pageShield.connections,
				Re = k => k.pageShield.connection,
				xe = k => k.pageShield.policies,
				Ze = k => k.pageShield.policy,
				ot = (0, Fe.P1)("pageShieldScripts", ce),
				lt = (0, Fe.P1)("pageShieldScript", fe),
				at = (0, Fe.P1)("pageShieldConnections", Me),
				dt = (0, Fe.P1)("pageShieldConnection", Re),
				pt = (0, Fe.P1)("pageShieldPolicies", xe),
				st = (0, Fe.P1)("pageShieldPolicy", Ze),
				Ge = (k, re) => k === p.SCRIPT_MONITOR ? ot(re) || [] : at(re) || [],
				Ae = (k, re) => k === p.SCRIPT_MONITOR ? ce(re) || [] : Me(re) || [],
				Qe = (k, re) => k === p.SCRIPT_MONITOR ? lt(re) : dt(re),
				mt = k => k.pageShield.domainIntel,
				it = k => k.pageShield.whoIsRecord,
				gt = (k, re, ve) => {
					var Le;
					const Ne = Object.values(ve).map(Ve => ({
						key: Ve,
						label: x[Ve],
						score: k[Ve]
					})).filter(Ve => Ve.score !== void 0 && Ve.score <= re);
					return re === C && Ne.length === 0 && ((Le = k.js_integrity_score) !== null && Le !== void 0 ? Le : 100) <= re && Ne.push({
						key: null,
						label: "script_monitor.malicious",
						score: 0
					}), Ne
				},
				G = (k, re) => Object.values(re).filter(ve => k[ve] === !0).map(ve => q[ve]),
				ue = k => k === !1 ? "firewall.page_shield.malicious_content.not_present" : "firewall.page_shield.malicious_content.not_available",
				Te = (k, re) => k[c.MagecartScore] !== void 0 && k[c.MagecartScore] <= re || k[c.MalwareScore] !== void 0 && k[c.MalwareScore] <= re || k[c.CryptominingScore] !== void 0 && k[c.CryptominingScore] <= re || k.js_integrity_score !== void 0 && k.js_integrity_score <= re,
				ne = ["cdn.jsdelivr.net", "unpkg.com"],
				ae = [/^((?!(@)).)*$/, /(?<!(\/))@[a-zA-Z]+(?=\/|$)/, /@\^[0-9]+(\.[0-9]+){0,2}(?=\/|$)/, /@[0-9]+(\.[0-9]+)?(?=\/|$)/],
				Ce = k => {
					if (k.includes("@latest")) {
						const ve = k.split("@latest");
						if (ve.length != 2) return;
						const Le = ve[0].length,
							Ne = Le + "@latest".length;
						return [Le, Ne]
					}
					if (!!ne.some(ve => k.includes(ve)))
						for (const ve of ae) {
							const Le = k.match(ve);
							if (!Le) continue;
							const Ne = Le.index;
							if (Ne === 0) return null;
							const Ve = Ne + Le[0].length;
							return [Ne, Ve]
						}
				}
		},
		"../react/pages/security/resources/constants.tsx": function(W, v, t) {
			"use strict";
			t.d(v, {
				_C: function() {
					return p
				},
				_R: function() {
					return c
				},
				dY: function() {
					return y
				},
				fy: function() {
					return h
				},
				ji: function() {
					return i
				},
				pR: function() {
					return _
				},
				pV: function() {
					return S
				},
				rj: function() {
					return O
				},
				zf: function() {
					return T
				}
			});
			var e = t("../node_modules/@cloudflare/component-link/es/index.js"),
				o = t("../../../common/util/types/src/api/phases/fields.tsx"),
				s = t("webpack/sharing/consume/default/react/react"),
				d = t.n(s),
				l = t("../react/utils/translator.tsx"),
				m = t("../react/pages/security/resources/types.ts"),
				a = t("../react/pages/home/rulesets/account-ruleset-builder/labels.tsx");

			function u(g) {
				for (var C = 1; C < arguments.length; C++) {
					var M = arguments[C] != null ? Object(arguments[C]) : {},
						b = Object.keys(M);
					typeof Object.getOwnPropertySymbols == "function" && b.push.apply(b, Object.getOwnPropertySymbols(M).filter(function(R) {
						return Object.getOwnPropertyDescriptor(M, R).enumerable
					})), b.forEach(function(R) {
						E(g, R, M[R])
					})
				}
				return g
			}

			function E(g, C, M) {
				return C = n(C), C in g ? Object.defineProperty(g, C, {
					value: M,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : g[C] = M, g
			}

			function n(g) {
				var C = r(g, "string");
				return typeof C == "symbol" ? C : String(C)
			}

			function r(g, C) {
				if (typeof g != "object" || g === null) return g;
				var M = g[Symbol.toPrimitive];
				if (M !== void 0) {
					var b = M.call(g, C || "default");
					if (typeof b != "object") return b;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (C === "string" ? String : Number)(g)
			}
			const i = 10;
			let p = function(g) {
					return g.MTLS_ACCESS = "mTLS-enforced authentication", g.ZONE_LOCKDOWN = "Zone lockdown", g.USER_AGENT = "User agent blocking", g.EMAIL_VALIDITY = "Disposable email checks", g.IP_BASED = "IP-based rule", g.GEOGRAPHY_BASE = "Geography-based rule", g
				}({}),
				c = function(g) {
					return g.LEAKED_CREDENTIALS = "Leaked Credentials Checks", g
				}({});
			const _ = {
					CLICK_GEOGRAPHICAL_TEMPLATE: "click geographical rule template from tools",
					CLICK_IP_TEMPLATE: "click IP rule template from tools",
					CLICK_USER_AGENT_TEMPLATE: "click user agent rule template from tools",
					CLICK_ZONE_LOCKDOWN_TEMPLATE: "click zone lockdown rule template from tools"
				},
				y = [{
					title: "firewall.tools.toast.geography",
					template: p.GEOGRAPHY_BASE,
					trackedEvent: _.CLICK_GEOGRAPHICAL_TEMPLATE
				}, {
					title: "firewall.tools.toast.ip",
					template: p.IP_BASED,
					trackedEvent: _.CLICK_IP_TEMPLATE
				}, {
					title: "firewall.tools.toast.user_agent",
					template: p.USER_AGENT,
					trackedEvent: _.CLICK_USER_AGENT_TEMPLATE
				}, {
					title: "firewall.tools.toast.zone_lockdown",
					template: p.ZONE_LOCKDOWN,
					trackedEvent: _.CLICK_ZONE_LOCKDOWN_TEMPLATE
				}],
				T = {
					[m.X.UI_SECTION]: g => ({
						[p.MTLS_ACCESS]: {
							ruleName: p.MTLS_ACCESS,
							displayName: d().createElement(l.cC, {
								id: "custom-rules.templates.rule.mtls_access.name"
							}),
							wafRulesOverview: d().createElement(l.cC, {
								id: "custom-rules.templates.rule.mtls_access.wafRulesOverview",
								Components: [e.QV],
								componentProps: [{
									to: `/${g.account.id}/${g.name}/ssl-tls/client-certificates`
								}]
							})
						},
						[p.ZONE_LOCKDOWN]: {
							ruleName: p.ZONE_LOCKDOWN,
							displayName: d().createElement(l.cC, {
								id: "custom-rules.templates.rule.zone_lockdown.name"
							}),
							wafRulesOverview: d().createElement(l.cC, {
								id: "custom-rules.templates.rule.zone_lockdown.wafRulesOverview",
								Components: [e.QV],
								componentProps: [{
									to: `/${g.account.id}/configurations/lists`
								}]
							})
						},
						[p.USER_AGENT]: {
							ruleName: p.USER_AGENT,
							displayName: d().createElement(l.cC, {
								id: "custom-rules.templates.rule.user_agent.name"
							}),
							wafRulesOverview: d().createElement(l.cC, {
								id: "custom-rules.templates.rule.user_agent.wafRulesOverview",
								Components: [e.QV],
								componentProps: [{
									to: `/${g.account.id}/configurations/lists`
								}]
							})
						},
						[p.EMAIL_VALIDITY]: {
							ruleName: p.EMAIL_VALIDITY,
							displayName: d().createElement(l.cC, {
								id: "custom-rules.templates.rule.disposable_email.name"
							}),
							wafRulesOverview: d().createElement(l.cC, {
								id: "custom-rules.templates.rule.disposable_email.wafRulesOverview"
							}),
							hasWafPermission: !0
						}
					}),
					[m.X.WAF_RULES]: {
						[p.MTLS_ACCESS]: {
							description: "custom-rules.templates.rule.mtls_access.name",
							expression: '(not cf.tls_client_auth.cert_verified and http.request.uri.path in {""})',
							helper: {
								text: "custom-rules.templates.rule.mtls_access.helper",
								role: "info"
							},
							defaultAction: "block",
							emptySelectValue: !0
						},
						[p.ZONE_LOCKDOWN]: {
							description: "custom-rules.templates.rule.zone_lockdown.name",
							expression: '(not ip.src in $0 and http.request.uri.path in {""})',
							helper: {
								text: "custom-rules.templates.rule.zone_lockdown.helper",
								role: "info"
							},
							defaultAction: "block",
							emptySelectValue: !0
						},
						[p.USER_AGENT]: {
							description: "custom-rules.templates.rule.user_agent.name",
							expression: '(http.user_agent eq "BadBot/1.0.2 (+http://bad.bot))"',
							helper: {
								text: "custom-rules.templates.rule.user_agent.helper",
								role: "info"
							},
							defaultAction: "block",
							emptySelectValue: !0
						},
						[p.EMAIL_VALIDITY]: {
							description: "custom-rules.templates.rule.disposable_email.name",
							expression: "(cf.fraud_detection.disposable_email)",
							defaultAction: "block",
							emptySelectValue: !0
						},
						[p.GEOGRAPHY_BASE]: {
							description: "custom-rules.templates.rule.geography.name",
							expression: '(ip.src.asnum eq "") or (ip.src.country eq "") or (ip.src.continent eq "")',
							defaultAction: "block",
							emptySelectValue: !0
						},
						[p.IP_BASED]: {
							description: "firewall.tools.toast.ip",
							expression: '(ip.src eq "")',
							defaultAction: "block",
							emptySelectValue: !0
						}
					}
				},
				O = {
					[m.X.WAF_RULES]: {
						[c.LEAKED_CREDENTIALS]: {
							ruleName: c.LEAKED_CREDENTIALS,
							expression: "(cf.waf.credential_check.password_leaked)",
							ratelimit: {
								characteristics: ["ip.src", "cf.colo.id"],
								requests_to_origin: !1,
								requests_per_period: 5,
								period: 10,
								mitigation_timeout: 10
							},
							defaultAction: "block",
							description: "rules.template.rate-limiting.lcc"
						}
					},
					[m.X.UI_SECTION]: {
						[c.LEAKED_CREDENTIALS]: {
							ruleName: c.LEAKED_CREDENTIALS,
							displayName: d().createElement(l.cC, {
								id: "rules.template.rate-limiting.lcc"
							}),
							wafRulesOverview: d().createElement(l.cC, {
								id: "rules.template.rate-limiting.lcc.description"
							})
						}
					}
				};
			let h = function(g) {
				return g.DISCOVERY = "discovery", g.SEQUENCES = "sequences", g.SCHEMA_VALIDATION = "schema-validation", g.SETTINGS = "settings", g.API_RULES = "api-rules", g.UPGRADE = "upgrade", g
			}({});
			const S = u({}, a.g, {
				[o.df.HttpRequestFirewallManaged]: u({}, a.g[o.df.HttpRequestFirewallManaged], {
					EXCEPTION_DOC_DESCRIPTION: "rule.exception.doc_description"
				}),
				[o.df.HttpRequestFirewallCustom]: u({}, a.g[o.df.HttpRequestFirewallCustom], {
					DOC_DESCRIPTION: "custom-rules.card.doc_description",
					DOC_LINK_CREATE: "https://developers.cloudflare.com/waf/custom-rules/create-dashboard/"
				}),
				[o.df.HttpRateLimit]: u({}, a.g[o.df.HttpRateLimit], {
					DOC_DESCRIPTION: "rate-limiting.doc.description",
					DOC_LINK_CREATE: "https://developers.cloudflare.com/waf/rate-limiting-rules/create-zone-dashboard/"
				}),
				ZONE_LOCKDOWN: {
					HEADING: "zone_lockdown_card.title",
					DOC_LINK: "https://developers.cloudflare.com/waf/tools/zone-lockdown",
					DOC_DESCRIPTION: "zone_lockdown_card.doc_description"
				},
				USER_AGENT: {
					HEADING: "user_agent_rules.card.title",
					DOC_LINK: "https://developers.cloudflare.com/waf/tools/user-agent-blocking",
					DOC_DESCRIPTION: "user_agent_rules.card.doc_description"
				},
				IP_ACCESS: {
					HEADING: "firewall.access_rules.package.name",
					DOC_LINK: "https://developers.cloudflare.com/waf/tools/ip-access-rules/",
					DOC_DESCRIPTION: "firewall.access_rules.package.doc_description"
				}
			})
		},
		"../react/pages/security/resources/types.ts": function(W, v, t) {
			"use strict";
			t.d(v, {
				X: function() {
					return e
				}
			});
			let e = function(o) {
				return o.UI_SECTION = "UI_SECTION", o.WAF_RULES = "WAF_RULES", o
			}({})
		},
		"../react/pages/security/settings/hooks/index.ts": function(W, v, t) {
			"use strict";
			t.d(v, {
				Xu: function() {
					return Y
				},
				Io: function() {
					return B
				},
				FQ: function() {
					return Ke
				},
				vU: function() {
					return te
				},
				M: function() {
					return Z
				},
				d7: function() {
					return ie
				},
				Oz: function() {
					return Ee
				},
				Np: function() {
					return je
				},
				WR: function() {
					return R
				},
				vE: function() {
					return K
				},
				bE: function() {
					return we
				},
				u_: function() {
					return pe
				},
				kU: function() {
					return Q
				},
				pf: function() {
					return I
				}
			});
			var e = t("../../../../node_modules/react-query/es/index.js"),
				o = t("webpack/sharing/consume/default/@cloudflare/util-http/@cloudflare/util-http");
			const s = async z => {
				var se, ge;
				const N = await (0, o.get)(`/zones/${z}/content-upload-scan/settings`, {
					hideErrorAlert: !0
				});
				return ((se = N == null ? void 0 : N.body) === null || se === void 0 || (ge = se.result) === null || ge === void 0 ? void 0 : ge.value) === "enabled"
			}, d = async (z, se) => (await (0, o.post)(`/zones/${z}/content-upload-scan/${se?"enable":"disable"}`, {
				hideErrorAlert: !0
			}), se), l = async z => {
				var se;
				const ge = await (0, o.get)(`/zones/${z}/content-upload-scan/payloads`, {
					hideErrorAlert: !0
				});
				return ((se = ge == null ? void 0 : ge.body) === null || se === void 0 ? void 0 : se.result) || []
			}, m = async (z, se) => {
				var ge;
				const N = await (0, o.post)(`/zones/${z}/content-upload-scan/payloads`, {
					body: [se]
				});
				return (ge = N == null ? void 0 : N.body) === null || ge === void 0 ? void 0 : ge.result
			}, a = async (z, se) => (await (0, o.del)(`/zones/${z}/content-upload-scan/payloads/${se}`, {
				hideErrorAlert: !0
			}), se), u = async z => {
				var se, ge;
				const N = await (0, o.get)(`/zones/${z}/leaked-credential-checks`, {
					hideErrorAlert: !0
				});
				return !!((se = N == null ? void 0 : N.body) === null || se === void 0 || (ge = se.result) === null || ge === void 0 ? void 0 : ge.enabled)
			}, E = async (z, se) => {
				var ge, N;
				const me = await (0, o.post)(`/zones/${z}/leaked-credential-checks`, {
					body: {
						enabled: se
					}
				});
				return !!((ge = me == null ? void 0 : me.body) === null || ge === void 0 || (N = ge.result) === null || N === void 0 ? void 0 : N.enabled)
			}, n = async z => {
				var se;
				const ge = await (0, o.get)(`/zones/${z}/leaked-credential-checks/detections`, {
					hideErrorAlert: !0
				});
				return (se = ge == null ? void 0 : ge.body) === null || se === void 0 ? void 0 : se.result
			}, r = async (z, se) => {
				var ge;
				const N = await (0, o.post)(`/zones/${z}/leaked-credential-checks/detections`, {
					body: se
				});
				return (ge = N == null ? void 0 : N.body) === null || ge === void 0 ? void 0 : ge.result
			}, i = async (z, se) => (await (0, o.del)(`/zones/${z}/leaked-credential-checks/detections/${se}`, {
				hideErrorAlert: !0
			}), se), p = async (z, se) => {
				await (0, o.put)(`/zones/${z}/security-center/securitytxt`, {
					body: se
				})
			}, c = async z => {
				await (0, o.del)(`/zones/${z}/security-center/securitytxt`)
			}, _ = async z => (await (0, o.get)(`/zones/${z}/security-center/securitytxt`)).body;
			var y = t("webpack/sharing/consume/default/react/react"),
				T = t("webpack/sharing/consume/default/react-redux/react-redux"),
				O = t("../react/pages/security/settings/resources/index.ts"),
				h = t("../react/common/hooks/useZoneEntitlement.ts"),
				S = t("../react/common/hooks/useGate.ts"),
				g = t("../react/pages/security/api-shield/utils/useApiShield.tsx"),
				C = t("../react/pages/security/api-shield/entitlements.tsx"),
				M = t("../../../../node_modules/yup/es/index.js"),
				b = t("../react/utils/translator.tsx");
			const R = () => (0, T.useSelector)(O.ui),
				A = "central_endpoint_list.endpoint_labels_allowed",
				L = "system-and-user-generated-labels",
				P = () => !!(0, S.Z)(L),
				H = () => !!(0, h.Z)(A),
				K = () => {
					const z = P(),
						se = H();
					return {
						isLabelsGateOpen: z,
						hasEndpointLabelsEntitlement: se,
						hasLabels: z && se
					}
				},
				Q = () => {
					const {
						hasApiShields: z
					} = (0, g.R)(), {
						hasLabels: se
					} = K(), ge = (0, C.Dg)();
					return se && ge && z
				},
				pe = () => {
					const {
						t: z
					} = (0, b.QT)(), se = M.Z_().required(z("common.field_is_required")).max(24, z("labels.apply.form.name.error.max_characters")).matches(O.DG, z("labels.apply.form.name.error.special_characters")).test("no-cf-prefix", z("labels.apply.form.name.error.cf_forbidden"), me => !O.aW.test(me)), ge = {
						NAMES: {
							CREATE: "labels-create-form",
							EDIT: "labels-edit-form",
							APPLY: "labels-apply-form"
						},
						INITIAL_VALUES: {
							name: "",
							description: ""
						},
						VALIDATION_SCHEMA: me => M.Ry().shape({
							[O.n5.NAME]: me ? M.Z_() : se,
							[O.n5.DESCRIPTION]: me ? M.Z_().optional() : M.Z_().max(150, z("labels.apply.form.description.error.max_characters"))
						})
					}, N = {
						NAME: "edit-labels-modal-form",
						INITIAL_VALUES: {
							[O.N2.NAME]: "",
							[O.N2.SOURCE]: O.W3,
							[O.N2.NEW_LABEL_NAME]: ""
						},
						VALIDATION_SCHEMA: () => M.Ry().shape({
							[O.N2.NEW_LABEL_NAME]: se
						})
					};
					return {
						LABELS_APPLY_FORM: ge,
						EDIT_LABELS_MODAL_FORM: N
					}
				},
				te = ({
					modalHeaderFixedHeight: z = 62,
					modalDefaultPaddings: se = 16
				} = {}) => {
					const ge = (0, y.useRef)(null),
						N = (0, y.useRef)(null),
						[me, Pe] = (0, y.useState)(0),
						[Be, ze] = (0, y.useState)(0),
						Oe = `calc(100vh - ${me}px - ${Be}px - ${se}px)`,
						[Ue, Fe] = (0, y.useState)("");
					return (0, y.useEffect)(() => {
						const We = () => {
							var Ye, V, ce, fe;
							const Me = ge == null || (Ye = ge.current) === null || Ye === void 0 ? void 0 : Ye.offsetHeight,
								Re = N == null || (V = N.current) === null || V === void 0 ? void 0 : V.offsetHeight,
								xe = ((ce = Me) !== null && ce !== void 0 ? ce : 0) + z,
								Ze = (fe = Re) !== null && fe !== void 0 ? fe : 0;
							Pe(xe), ze(Ze)
						};
						return We(), window.addEventListener("resize", We), () => window.removeEventListener("resize", We)
					}, []), {
						searchTerm: Ue,
						setSearchTerm: Fe,
						scrollableSectionMaxHeight: Oe,
						topMenuRef: ge,
						bottomMenuRef: N
					}
				},
				Y = z => {
					const se = R(),
						ge = (0, e.useQueryClient)(),
						N = (0, e.useQuery)({
							queryKey: `content-scanning-enabled-${z}`,
							queryFn: () => s(z),
							enabled: se
						}),
						me = (0, e.useQuery)({
							queryKey: `content-scanning-detections-${z}`,
							queryFn: () => l(z),
							enabled: se && !!(N == null ? void 0 : N.data)
						}),
						Pe = (0, e.useMutation)({
							mutationFn: async ({
								enabled: Oe
							}) => await d(z, Oe),
							onSuccess: Oe => {
								ge.setQueryData([`content-scanning-enabled-${z}`], Oe)
							}
						}),
						Be = (0, e.useMutation)({
							mutationFn: Oe => m(z, Oe),
							onSuccess: Oe => {
								ge.setQueryData([`content-scanning-detections-${z}`], Oe)
							}
						}),
						ze = (0, e.useMutation)({
							mutationFn: Oe => a(z, Oe),
							onSuccess: Oe => {
								var Ue;
								const Fe = (Ue = ge.getQueryData(`content-scanning-detections-${z}`)) !== null && Ue !== void 0 ? Ue : [];
								ge.setQueryData([`content-scanning-detections-${z}`], Fe.filter(({
									id: We
								}) => We !== Oe))
							}
						});
					return {
						entitled: se,
						loading: N.isLoading || me.isLoading,
						error: N.isError || me.isError,
						enabled: {
							data: N.data,
							toggleEnabled: async Oe => Pe.mutateAsync({
								enabled: Oe
							})
						},
						detections: {
							data: me.data,
							add: Be.mutateAsync,
							delete: ze.mutateAsync,
							loading: Be.isLoading || ze.isLoading
						}
					}
				},
				ie = () => {
					const z = (0, S.Z)(O.dC),
						se = (0, T.useSelector)(O.cN),
						ge = (0, T.useSelector)(O.bH),
						N = (0, T.useSelector)(O.P3),
						me = (0, T.useSelector)(O.Ri);
					return {
						hasEditPermission: z && se,
						isEnabled: z && N && (ge.hasSimilarLeaked || ge.hasUsernameAndPasswordLeaked || me)
					}
				},
				Z = z => {
					const se = ie(),
						ge = (0, e.useQueryClient)(),
						N = (0, e.useQuery)({
							queryKey: `leaked-credentials-enabled-${z}`,
							queryFn: () => u(z),
							enabled: !!se.isEnabled
						}),
						me = (0, e.useQuery)({
							queryKey: `leaked-credentials-detections-${z}`,
							queryFn: () => n(z),
							enabled: !!se.isEnabled && !!(N == null ? void 0 : N.data)
						}),
						Pe = (0, e.useMutation)({
							mutationFn: ({
								enabled: Oe
							}) => E(z, Oe),
							onSuccess: Oe => {
								ge.setQueryData([`leaked-credentials-enabled-${z}`], Oe)
							}
						}),
						Be = (0, e.useMutation)({
							mutationFn: async Oe => await r(z, Oe),
							onSuccess: Oe => {
								var Ue;
								const Fe = (Ue = ge.getQueryData(`leaked-credentials-detections-${z}`)) !== null && Ue !== void 0 ? Ue : [];
								ge.setQueryData([`leaked-credentials-detections-${z}`], [...Fe, Oe])
							}
						}),
						ze = (0, e.useMutation)({
							mutationFn: Oe => i(z, Oe),
							onSuccess: Oe => {
								var Ue;
								const Fe = (Ue = ge.getQueryData(`leaked-credentials-detections-${z}`)) !== null && Ue !== void 0 ? Ue : [];
								ge.setQueryData([`leaked-credentials-detections-${z}`], Fe.filter(({
									id: We
								}) => We !== Oe))
							}
						});
					return {
						entitled: se.isEnabled,
						hasEditPermissions: se.hasEditPermission,
						loading: N.isLoading || me.isLoading,
						error: N.isError || N.isError,
						enabled: {
							data: N.data,
							toggleEnabled: async Oe => Pe.mutateAsync({
								enabled: Oe
							})
						},
						detections: {
							data: me.data,
							add: Be.mutateAsync,
							delete: ze.mutateAsync,
							loading: Be.isLoading || ze.isLoading
						}
					}
				};
			var j = t("../react/common/selectors/zoneSelectors.ts"),
				$ = t("../react/common/utils/useQueryCache.ts"),
				F = t("../react/app/redux/index.ts");
			const X = "security-txt",
				oe = {
					securityTxt: ({
						zoneId: z
					}) => [X, z]
				},
				Ee = z => (0, e.useQuery)({
					queryKey: oe.securityTxt({
						zoneId: z
					}),
					queryFn: () => _(z),
					select: se => se.result
				}),
				B = () => {
					const z = (0, F.p4)(j.Cu),
						{
							invalidate: se
						} = (0, $.o)(oe.securityTxt({
							zoneId: z
						}));
					return (0, e.useMutation)({
						mutationFn: () => c(z),
						onSuccess: async () => {
							await se(void 0, {
								exact: !1,
								refetchInactive: !0
							})
						}
					})
				},
				I = z => {
					const {
						invalidate: se
					} = (0, $.o)(oe.securityTxt({
						zoneId: z
					}));
					return (0, e.useMutation)({
						mutationFn: ge => p(z, ge),
						onSuccess: async () => {
							await se(void 0, {
								exact: !1,
								refetchInactive: !0
							})
						}
					})
				};
			var x = t("../../../../node_modules/lodash/isEqual.js"),
				q = t.n(x),
				ee = t("../react/pages/security/settings/pages/labels/api/helpers.ts");

			function de(z) {
				for (var se = 1; se < arguments.length; se++) {
					var ge = arguments[se] != null ? Object(arguments[se]) : {},
						N = Object.keys(ge);
					typeof Object.getOwnPropertySymbols == "function" && N.push.apply(N, Object.getOwnPropertySymbols(ge).filter(function(me) {
						return Object.getOwnPropertyDescriptor(ge, me).enumerable
					})), N.forEach(function(me) {
						he(z, me, ge[me])
					})
				}
				return z
			}

			function he(z, se, ge) {
				return se = Se(se), se in z ? Object.defineProperty(z, se, {
					value: ge,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : z[se] = ge, z
			}

			function Se(z) {
				var se = ke(z, "string");
				return typeof se == "symbol" ? se : String(se)
			}

			function ke(z, se) {
				if (typeof z != "object" || z === null) return z;
				var ge = z[Symbol.toPrimitive];
				if (ge !== void 0) {
					var N = ge.call(z, se || "default");
					if (typeof N != "object") return N;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (se === "string" ? String : Number)(z)
			}
			const je = z => {
					const {
						queryKey: se,
						zoneId: ge
					} = (0, ee.hL)(z), {
						isLoading: N,
						isError: me,
						isSuccess: Pe,
						data: Be,
						refetch: ze,
						isRefetching: Oe
					} = (0, e.useQuery)({
						queryKey: se,
						queryFn: () => ee.Mi.getLabels(de({
							zoneId: ge
						}, z)),
						onSuccess: () => {
							var Ue;
							const Fe = z == null || (Ue = z.filters) === null || Ue === void 0 ? void 0 : Ue.source;
							(Fe === O.LABEL_SOURCES.MANAGED || Fe === O.LABEL_SOURCES.USER) && (0, O.Tf)({
								name: O.QJ.FILTER_USER_MANAGED_LABELS,
								product: O.Iv.SECURITY_SETTINGS,
								pageName: O.R.LABELS_LIST,
								type: Fe
							})
						}
					});
					return {
						data: Be == null ? void 0 : Be.result,
						errors: Be == null ? void 0 : Be.errors,
						paginationData: Be == null ? void 0 : Be.result_info,
						isLoading: N,
						isError: me,
						isSuccess: Pe,
						refetch: ze,
						isRefetching: Oe
					}
				},
				we = ({
					labels: z,
					preselectedLabels: se
				}) => {
					const {
						USER: ge,
						MANAGED: N
					} = O.LABEL_SOURCES, [me, Pe] = (0, y.useState)({
						[ge]: [],
						[N]: []
					}), [Be, ze] = (0, y.useState)(new Set), Oe = Be.size > 0, [Ue, Fe] = (0, y.useState)(!1), We = fe => {
						ze(Me => {
							const Re = new Set(Me);
							return Re.has(fe.name) ? Re.delete(fe.name) : Re.add(fe.name), Re
						})
					}, Ye = fe => Be.has(fe.name), V = (fe, Me) => {
						const Re = Ye(fe) ? 1 : 0;
						return (Ye(Me) ? 1 : 0) - Re
					}, ce = fe => {
						Pe(Me => ({
							[ge]: [...fe ? fe[ge] : Me[ge]].sort(V),
							[N]: [...fe ? fe[N] : Me[N]].sort(V)
						}))
					};
					return (0, y.useEffect)(() => {
						if (z && !Ue) {
							if (se) {
								const fe = new Set;
								z.forEach(Me => {
									se.some(Re => q()(Re, Me)) && fe.add(Me.name)
								}), ze(fe)
							}
							Fe(!0)
						}
					}, [z, se, Ue]), (0, y.useEffect)(() => {
						if (z && Ue) {
							const fe = z.reduce((Re, xe) => (xe.source === ge ? Re[ge].push(xe) : xe.source === N && Re[N].push(xe), Re), {
									[ge]: [],
									[N]: []
								}),
								Me = {
									[ge]: fe[ge].sort(V),
									[N]: fe[N].sort(V)
								};
							Pe(Me)
						}
					}, [ge, N, z, Ue]), {
						userAndManagedLabels: me,
						setUserAndManagedLabels: Pe,
						toggleSelectedLabel: We,
						isLabelSelected: Ye,
						sortLabelsBySelectedStatus: ce,
						hasLabelsSelected: Oe
					}
				};
			var $e = t("../react/pages/security/settings/resources/selectors.ts");
			const Ke = (z = "") => {
				const se = (0, F.p4)($e.Xs),
					ge = se && (z == null ? void 0 : z.includes("cf.threat_score"));
				return {
					isSecurityLevelDeprecated: se,
					hasDeprecatedParameter: ge
				}
			}
		},
		"../react/pages/security/settings/index.tsx": function(W, v, t) {
			"use strict";
			t.d(v, {
				FQ: function() {
					return u.FQ
				},
				Iv: function() {
					return E.Iv
				},
				M: function() {
					return u.M
				},
				Np: function() {
					return u.Np
				},
				Oz: function() {
					return u.Oz
				},
				QJ: function() {
					return E.QJ
				},
				R: function() {
					return E.R
				},
				Tf: function() {
					return E.Tf
				},
				WR: function() {
					return u.WR
				},
				Xs: function() {
					return E.Xs
				},
				Xu: function() {
					return u.Xu
				},
				ZF: function() {
					return E.ZF
				},
				bE: function() {
					return u.bE
				},
				bH: function() {
					return E.bH
				},
				dC: function() {
					return E.dC
				},
				eC: function() {
					return E.eC
				},
				kU: function() {
					return u.kU
				},
				m8: function() {
					return E.m8
				},
				pf: function() {
					return u.pf
				},
				ui: function() {
					return E.ui
				},
				vE: function() {
					return u.vE
				},
				vc: function() {
					return E.vc
				},
				zF: function() {
					return E.zF
				}
			});
			var e = t("../react/common/components/AccessCheck/index.ts"),
				o = t("../react/app/components/Forbidden.jsx"),
				s = t("webpack/sharing/consume/default/react/react"),
				d = t.n(s),
				l = t("../../../../node_modules/@cloudflare/component-page/es/index.js"),
				m = t("webpack/sharing/consume/default/@cloudflare/intl-react/@cloudflare/intl-react"),
				a = t.n(m),
				u = t("../react/pages/security/settings/hooks/index.ts"),
				E = t("../react/pages/security/settings/resources/index.ts");
			const n = d().lazy(() => Promise.all([t.e(37800), t.e(2480), t.e(39074), t.e(10008), t.e(73598), t.e(94012), t.e(24074), t.e(11284), t.e(4e4), t.e(3391), t.e(68204), t.e(2515), t.e(91126), t.e(77216), t.e(40517), t.e(39760), t.e(60911), t.e(60734), t.e(25390), t.e(71449), t.e(9147), t.e(30906), t.e(68009), t.e(42185)]).then(t.bind(t, "../react/pages/security/settings/SettingsRoute.tsx"))),
				r = () => {
					const {
						t: i
					} = (0, m.useI18n)(), p = (0, e.xk)("waf");
					return d().createElement(l.T3, {
						parentPageLabel: i("navigation.zone.security"),
						title: i("navigation.zone.security.settings"),
						type: "narrow"
					}, p.read ? d().createElement(n, null) : d().createElement(o.Z, null))
				};
			v.ZP = r
		},
		"../react/pages/security/settings/pages/labels/api/helpers.ts": function(W, v, t) {
			"use strict";
			t.d(v, {
				Mi: function() {
					return h
				},
				hL: function() {
					return O
				}
			});
			var e = t("../react/app/redux/index.ts"),
				o = t("../react/common/selectors/zoneSelectors.ts"),
				s = t("../react/common/utils/useQueryCache.ts"),
				d = t("../react/pages/security/settings/resources/constants.ts"),
				l = t("../react/common/hooks/useAccountId.ts"),
				m = t("webpack/sharing/consume/default/@cloudflare/util-http/@cloudflare/util-http"),
				a = t("../../../../node_modules/@cloudflare/util-routes/es/index.js");
			const u = {
				labels: (0, a.BC)`/zones/${"zoneId"}/api_gateway/labels`,
				userLabel: (0, a.BC)`/zones/${"zoneId"}/api_gateway/labels/user/${"labelName"}`,
				userLabels: (0, a.BC)`/zones/${"zoneId"}/api_gateway/labels/user`,
				managedLabel: (0, a.BC)`/zones/${"zoneId"}/api_gateway/labels/managed/${"labelName"}`,
				managedLabels: (0, a.BC)`/zones/${"zoneId"}/api_gateway/labels/managed`,
				operationsLinkedToLabels: (0, a.BC)`/zones/${"zoneId"}/api_gateway/operations/labels`,
				userLabelOperations: (0, a.BC)`/zones/${"zoneId"}/api_gateway/labels/user/${"labelName"}/resources/operation`,
				managedLabelOperations: (0, a.BC)`/zones/${"zoneId"}/api_gateway/labels/managed/${"labelName"}/resources/operation`
			};
			var E = t("../../../../node_modules/lodash/lodash.js"),
				n = t("../react/pages/security/settings/resources/utils.ts"),
				r = t("../../../../node_modules/@cloudflare/component-responsive-table/es/index.js");

			function i(g, C) {
				if (g == null) return {};
				var M = p(g, C),
					b, R;
				if (Object.getOwnPropertySymbols) {
					var A = Object.getOwnPropertySymbols(g);
					for (R = 0; R < A.length; R++) b = A[R], !(C.indexOf(b) >= 0) && (!Object.prototype.propertyIsEnumerable.call(g, b) || (M[b] = g[b]))
				}
				return M
			}

			function p(g, C) {
				if (g == null) return {};
				var M = {},
					b = Object.keys(g),
					R, A;
				for (A = 0; A < b.length; A++) R = b[A], !(C.indexOf(R) >= 0) && (M[R] = g[R]);
				return M
			}

			function c(g) {
				for (var C = 1; C < arguments.length; C++) {
					var M = arguments[C] != null ? Object(arguments[C]) : {},
						b = Object.keys(M);
					typeof Object.getOwnPropertySymbols == "function" && b.push.apply(b, Object.getOwnPropertySymbols(M).filter(function(R) {
						return Object.getOwnPropertyDescriptor(M, R).enumerable
					})), b.forEach(function(R) {
						_(g, R, M[R])
					})
				}
				return g
			}

			function _(g, C, M) {
				return C = y(C), C in g ? Object.defineProperty(g, C, {
					value: M,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : g[C] = M, g
			}

			function y(g) {
				var C = T(g, "string");
				return typeof C == "symbol" ? C : String(C)
			}

			function T(g, C) {
				if (typeof g != "object" || g === null) return g;
				var M = g[Symbol.toPrimitive];
				if (M !== void 0) {
					var b = M.call(g, C || "default");
					if (typeof b != "object") return b;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (C === "string" ? String : Number)(g)
			}
			const O = g => {
					const C = (0, e.p4)(o.Cu),
						M = (0, l.F)(),
						b = S.labels(c({
							accountId: M,
							zoneId: C
						}, g ? c({}, g) : {})),
						R = (0, s.o)(b);
					return c({
						zoneId: C,
						queryKey: b,
						batchInvalidateLabels: async () => {
							await R.batchInvalidate({
								queryKeysToPredicateInvalidate: [d.IQ.LABELS],
								refetchActive: !0,
								refetchInactive: !0
							})
						}
					}, R)
				},
				h = {
					getLabels: async g => {
						var C, M, b, R;
						let {
							zoneId: A,
							hideErrorAlert: L = !0
						} = g, P = i(g, ["zoneId", "hideErrorAlert"]);
						return (await m.get(u.labels.toUrl({
							zoneId: A
						}), {
							parameters: {
								page: P == null ? void 0 : P.page,
								per_page: P == null ? void 0 : P.per_page,
								with_mapped_resource_counts: P == null ? void 0 : P.with_mapped_resource_counts,
								filter: P == null || (C = P.filters) === null || C === void 0 ? void 0 : C.search,
								source: (0, n.sQ)(P == null || (M = P.filters) === null || M === void 0 ? void 0 : M.source),
								order: P == null || (b = P.sort) === null || b === void 0 ? void 0 : b.id,
								direction: (P == null ? void 0 : P.sort) ? (P == null || (R = P.sort) === null || R === void 0 ? void 0 : R.desc) ? r.Sr.desc : r.Sr.asc : void 0
							},
							hideErrorAlert: L
						})).body
					},
					getLabel: async g => {
						let {
							zoneId: C,
							labelName: M,
							hideErrorAlert: b = !0
						} = g, R = i(g, ["zoneId", "labelName", "hideErrorAlert"]);
						const A = (0, n.mm)(M) ? u.managedLabel.toUrl({
							zoneId: C,
							labelName: M
						}) : u.userLabel.toUrl({
							zoneId: C,
							labelName: M
						});
						return (await m.get(A, {
							parameters: {
								with_mapped_resource_counts: R == null ? void 0 : R.with_mapped_resource_counts
							},
							hideErrorAlert: b
						})).body
					},
					editLabel: async ({
						zoneId: g,
						label: C,
						replace: M
					}) => {
						const {
							name: b
						} = C, R = i(C, ["name"]);
						return (await (M ? m.put : m.patch)(u.userLabel.toUrl({
							zoneId: g,
							labelName: C.name
						}), {
							body: R
						})).body
					},
					deleteLabel: async ({
						zoneId: g,
						labelName: C
					}) => (await m.del(u.userLabel.toUrl({
						zoneId: g,
						labelName: C
					}))).body,
					createLabel: async g => {
						let {
							zoneId: C
						} = g, M = i(g, ["zoneId"]);
						const {
							product: b
						} = M, R = i(M, ["product"]);
						return (await m.post(u.userLabels.toUrl({
							zoneId: C
						}), {
							body: [R]
						})).body
					},
					bulkApplyLabelsToOperation: async ({
						zoneId: g,
						user: C,
						managed: M,
						operationIds: b,
						replace: R
					}) => (await (R ? m.put : m.post)(u.operationsLinkedToLabels.toUrl({
						zoneId: g
					}), {
						body: c({}, C ? {
							user: {
								labels: C
							}
						} : {}, M ? {
							managed: {
								labels: M
							}
						} : {}, {
							selector: {
								include: {
									operation_ids: b
								}
							}
						})
					})).body,
					bulkApplyOperationsToLabel: async ({
						zoneId: g,
						labelName: C,
						operationIds: M
					}) => {
						const b = (0, n.mm)(C) ? u.managedLabelOperations.toUrl({
							zoneId: g,
							labelName: C
						}) : u.userLabelOperations.toUrl({
							zoneId: g,
							labelName: C
						});
						return (await m.put(b, {
							body: {
								selector: {
									include: {
										operation_ids: M
									}
								}
							}
						})).body
					}
				},
				S = {
					labels: g => {
						let {
							accountId: C,
							zoneId: M
						} = g, b = i(g, ["accountId", "zoneId"]);
						return [d.IQ.LABELS, C, M, ...(0, E.isEmpty)(b) ? [] : [b]]
					}
				}
		},
		"../react/pages/security/settings/resources/constants.ts": function(W, v, t) {
			"use strict";
			t.d(v, {
				DG: function() {
					return y
				},
				EDIT_LABELS_MODAL_FORM_PROPERTIES: function() {
					return a
				},
				GE: function() {
					return M
				},
				IQ: function() {
					return d
				},
				KV: function() {
					return m
				},
				LABELS_LIST_TOASTS: function() {
					return p
				},
				LABEL_SOURCES: function() {
					return l
				},
				QH: function() {
					return c
				},
				V: function() {
					return S
				},
				W3: function() {
					return s
				},
				_8: function() {
					return i
				},
				_c: function() {
					return g
				},
				aW: function() {
					return T
				},
				dC: function() {
					return R
				},
				gY: function() {
					return C
				},
				j8: function() {
					return u
				},
				jz: function() {
					return _
				},
				n5: function() {
					return O
				},
				om: function() {
					return E
				},
				w: function() {
					return o
				},
				zF: function() {
					return b
				}
			});
			var e = t("../../../../node_modules/@cloudflare/component-responsive-table/es/index.js");
			let o = function(A) {
				return A.EXPOSED_CREDENTIALS = "exposed_credentials", A.CONTENT_SCANNING = "content_scanning", A
			}({});
			const s = "all";
			let d = function(A) {
					return A.LABELS = "labels", A
				}({}),
				l = function(A) {
					return A.USER = "user", A.MANAGED = "managed", A
				}({}),
				m = function(A) {
					return A.SOURCE = "source", A
				}({}),
				a = function(A) {
					return A.NAME = "name", A.SOURCE = "source", A.NEW_LABEL_NAME = "newLabelName", A
				}({}),
				u = function(A) {
					return A.ENDPOINT = "endpoint", A.METHOD = "method", A.OPERATION_ID = "operationId", A
				}({}),
				E = function(A) {
					return A.NAME = "name", A.MAPPED_RESOURCES = "mapped_resources.operations", A.SOURCE = "source", A.APPLY = "apply", A
				}({});
			const i = {
				initialPaginationState: {
					page: 1,
					perPage: 10
				},
				initialSortState: {
					name: E.NAME,
					direction: e.Sr.asc
				},
				initialToolbarState: {
					search: "",
					filterValues: {
						[m.SOURCE]: s
					}
				},
				filters: m,
				options: {
					autoFillInitialValues: !0,
					autoFillFilterValues: !0,
					autoClearQs: !0
				}
			};
			let p = function(A) {
				return A.CREATED_LABEL = "createdLabel", A.CREATED_AND_APPLIED_LABEL = "createdAndAppliedLabel", A.DELETED_LABEL = "deletedLabel", A.APPLIED_LABEL = "appliedLabel", A.EDITED_LABEL = "editedLabel", A.EDITED_AND_APPLIED_LABEL = "editedAndAppliedLabel", A
			}({});
			const c = "650px",
				_ = {
					SECURITY_LABEL: "https://developers.cloudflare.com/api-shield/management-and-monitoring/endpoint-labels/"
				},
				y = /^[A-Za-z0-9-]+$/,
				T = /^cf-/;
			let O = function(A) {
				return A.NAME = "name", A.DESCRIPTION = "description", A
			}({});
			const h = "all";
			let S = function(A) {
				return A.METHOD = "method", A.HOSTNAME = "hostname", A
			}({});
			const g = {
				initialPaginationState: {
					page: 1,
					perPage: 5
				},
				initialSortState: {
					name: "method",
					direction: e.Sr.desc
				},
				initialToolbarState: {
					search: "",
					filterValues: {
						[S.METHOD]: h,
						[S.HOSTNAME]: h
					}
				},
				filters: S
			};
			let C = function(A) {
				return A.TITLE = "title", A.DESCRIPTION = "description", A.SUBMIT = "submit", A
			}({});
			const M = 1e3,
				b = {
					LIST_TABLE_WRAPPER: "labels.list.main.table.wrapper",
					LIST_TABLE_CELL_NAME: "labels.list.main.table.cell.name",
					LIST_TABLE_CELL_CONNECTED: "labels.list.main.table.cell.connected",
					LIST_TABLE_CELL_TYPE: "labels.list.main.table.cell.type",
					LIST_TABLE_CELL_APPLY: "labels.list.main.table.cell.apply",
					LIST_TABLE_CELL_APPLY_BUTTON: "labels.list.main.table.cell.apply.button",
					LIST_TABLE_CELL_OVERFLOW_MENU: "labels.list.main.table.cell.overflow",
					LIST_TABLE_DELETE_MODAL_SUBMIT_BUTTON: "labels.list.main.delete_modal.submit_button",
					LIST_TABLE_DELETE_MODAL_CANCEL_BUTTON: "labels.list.main.delete_modal.cancel_button",
					LIST_TABLE_DELETE_MODAL_INPUT: "labels.list.main.delete_modal.input",
					APPLY_HEADER: "labels.apply.header",
					APPLY_FORM_NAME: "labels.apply.form.name",
					APPLY_FORM_NAME_DISABLED: "labels.apply.form.name.disabled",
					APPLY_FORM_DESCRIPTION: "labels.apply.form.description",
					APPLY_FORM_DESCRIPTION_DISABLED: "labels.apply.form.disabled",
					APPLY_FORM_SUBMIT_BUTTON: "labels.apply.form.submit.button",
					OPERATION_DETAILS_OPEN_MODAL_BUTTON: "labels.operation_details.open_modal.button",
					ENDPOINT_MANAGEMENT_LABELS_CONTAINER: "labels.endpoint_management.table.container",
					ENDPOINT_MANAGEMENT_LABELS_MORE_LABELS_BUTTON: "labels.endpoint_management.table.more_labels_button",
					SIDE_MODAL_CONTAINER: "labels.side_modal.container",
					SIDE_MODAL_OPERATION_CELL: "labels.side_modal.operation_cell",
					SIDE_MODAL_SEARCH_BAR: "labels.side_modal.search_bar",
					SIDE_MODAL_SOURCE_LISTBOX: "labels.side_modal.source_listbox",
					SIDE_MODAL_MANAGED_LABELS_CONTAINER: "labels.side_modal.managed_labels.container",
					SIDE_MODAL_USER_LABELS_CONTAINER: "labels.side_modal.user_labels.container",
					SIDE_MODAL_CREATE_LABEL_INACTIVE: "labels.side_modal.create_label.inactive",
					SIDE_MODAL_CREATE_LABEL_INPUT: "labels.side_modal.create_label.input",
					SIDE_MODAL_CREATE_LABEL_BUTTON: "labels.side_modal.create_label.button",
					SIDE_MODAL_SAVE_LABELS_BUTTON: "labels.side_modal.save_labels.button",
					SIDE_MODAL_CANCEL_BUTTON: "labels.side_modal.cancel.button",
					SIDE_MODAL_SELECTED_OPERATIONS_COUNT: "labels.side_modal.selected_operations_count",
					SIDE_MODAL_BULK_OVERWRITE_TOGGLE: "labels.side_modal.bulk.overwrite.toggle"
				},
				R = "exposed-credentials-module"
		},
		"../react/pages/security/settings/resources/index.ts": function(W, v, t) {
			"use strict";
			t.d(v, {
				DG: function() {
					return e.DG
				},
				tR: function() {
					return p
				},
				aW: function() {
					return e.aW
				},
				W3: function() {
					return e.W3
				},
				w: function() {
					return e.w
				},
				N2: function() {
					return e.EDIT_LABELS_MODAL_FORM_PROPERTIES
				},
				dC: function() {
					return e.dC
				},
				n5: function() {
					return e.n5
				},
				Iv: function() {
					return r
				},
				zF: function() {
					return e.zF
				},
				QJ: function() {
					return _
				},
				R: function() {
					return n
				},
				LABEL_SOURCES: function() {
					return e.LABEL_SOURCES
				},
				eC: function() {
					return c
				},
				QH: function() {
					return e.QH
				},
				TG: function() {
					return o.T
				},
				QF: function() {
					return s.QF
				},
				vc: function() {
					return s.vc
				},
				ZF: function() {
					return i
				},
				Xs: function() {
					return O.Xs
				},
				wG: function() {
					return s.N2
				},
				Q4: function() {
					return s.Q4
				},
				Wv: function() {
					return s.Wv
				},
				bH: function() {
					return O.bH
				},
				Mb: function() {
					return s.Mb
				},
				ui: function() {
					return O.ui
				},
				P3: function() {
					return O.P3
				},
				Ri: function() {
					return O.Ri
				},
				cN: function() {
					return O.cN
				},
				m8: function() {
					return T
				},
				Tf: function() {
					return y
				},
				$E: function() {
					return s.$E
				}
			});
			var e = t("../react/pages/security/settings/resources/constants.ts"),
				o = t("../react/pages/security/settings/resources/types.ts"),
				s = t("../react/pages/security/settings/resources/utils.ts"),
				d = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				l = t.n(d);

			function m(h) {
				for (var S = 1; S < arguments.length; S++) {
					var g = arguments[S] != null ? Object(arguments[S]) : {},
						C = Object.keys(g);
					typeof Object.getOwnPropertySymbols == "function" && C.push.apply(C, Object.getOwnPropertySymbols(g).filter(function(M) {
						return Object.getOwnPropertyDescriptor(g, M).enumerable
					})), C.forEach(function(M) {
						a(h, M, g[M])
					})
				}
				return h
			}

			function a(h, S, g) {
				return S = u(S), S in h ? Object.defineProperty(h, S, {
					value: g,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : h[S] = g, h
			}

			function u(h) {
				var S = E(h, "string");
				return typeof S == "symbol" ? S : String(S)
			}

			function E(h, S) {
				if (typeof h != "object" || h === null) return h;
				var g = h[Symbol.toPrimitive];
				if (g !== void 0) {
					var C = g.call(h, S || "default");
					if (typeof C != "object") return C;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (S === "string" ? String : Number)(h)
			}
			let n = function(h) {
					return h.LABELS_LIST = "Labels List page", h.LABELS_APPLY = "Labels Apply page", h.LABELS_SIDE_MODAL = "Labels Side Modal", h.LABELS_ENDPOINT_MANAGEMENT = "Endpoint Management page", h.LABELS_OPERATION_DETAILS = "Operation Details page", h
				}({}),
				r = function(h) {
					return h.API_SHIELD = "API Shield", h.SECURITY_SETTINGS = "Security Settings", h
				}({}),
				i = function(h) {
					return h.OPERATIONS_TABLE_TOOLBAR = "Operations table toolbar", h.OPERATIONS_TABLE_OVERFLOW = "Operations table overflow", h.OPERATIONS_TABLE_ROW = "Operations table row", h.OPERATION_DETAILS_PAGE = "Operation details page", h
				}({}),
				p = function(h) {
					return h.UPSERT = "upsert", h.OVERWRITE = "overwrite", h
				}({}),
				c = function(h) {
					return h.SINGLE = "single", h.MULTIPLE = "multiple", h
				}({}),
				_ = function(h) {
					return h.DISPLAY_LABELS_LIST_PAGE = "show a list of labels in the settings page", h.DELETE_LABEL = "delete a user label in the settings page", h.FILTER_USER_MANAGED_LABELS = "filter user/managed labels in the settings page", h.CREATE_LABEL_CLICKED = "click create label button in the settings page", h.BULK_APPLY_CLICKED = "click bulk apply button in the settings page", h.CONNECTED_ENDPOINTS_CLICKED = "click connected endpoints link in the settings page", h.DISPLAY_APPLY_LABELS_PAGE = "show the apply labels page", h.CLICK_LABELS_DOCUMENTATION_LINK = "click documentation link in the apply labels page", h.APPLY_OPERATIONS_TO_LABEL = "apply operations to label in the apply labels page", h.OPEN_LABELS_SIDE_MODAL = "open labels side modal", h.APPLY_LABELS_TO_OPERATION = "apply labels to operation(s) in the labels side modal", h.CREATE_NEW_LABEL = "create a new label", h
				}({});
			const y = ({
					name: h,
					product: S,
					category: g = "user journey",
					pageName: C,
					from: M,
					write_strategy: b,
					type: R,
					target: A
				}) => {
					l().sendEvent(h, m({
						category: g,
						pageName: C,
						product: S
					}, M ? {
						from: M
					} : {}, b ? {
						write_strategy: b
					} : {}, R ? {
						type: R
					} : {}, A ? {
						target: A
					} : {}))
				},
				T = () => {
					var h;
					return (h = Object.values(_)) === null || h === void 0 ? void 0 : h.flat()
				};
			var O = t("../react/pages/security/settings/resources/selectors.ts")
		},
		"../react/pages/security/settings/resources/selectors.ts": function(W, v, t) {
			"use strict";
			t.d(v, {
				P3: function() {
					return u
				},
				Ri: function() {
					return E
				},
				Xs: function() {
					return r
				},
				bH: function() {
					return n
				},
				cN: function() {
					return a
				},
				ui: function() {
					return m
				}
			});
			var e = t("../react/common/selectors/zoneSelectors.ts"),
				o = t("../react/utils/url.ts"),
				s = t("../react/common/selectors/entitlementsSelectors.ts"),
				d = t("../react/pages/security/settings/resources/constants.ts"),
				l = t("../../../../node_modules/@cloudflare/gates-redux/dist/index.mjs");
			const m = i => {
					const p = (0, e.RO)(i),
						c = !!(0, s.rV)(i, "rulesets.file_upload_scan_allowed"),
						_ = !!(0, s.BF)(i, "rulesets.file_upload_scan_allowed");
					return (0, o.el)(window.location.pathname) ? p && (c || _) : _
				},
				a = i => Number((0, s.rV)(i, "rulesets.max_leaked_credential_checks_custom_detections")) > 0,
				u = i => (0, s.rV)(i, "rulesets.fw_global_rulesets_execute_leaked_credential_checks_allowed"),
				E = i => (0, s.rV)(i, "rulesets.leaked_credential_checks_allowed"),
				n = i => (0, l.z1)(d.dC)(i) ? {
					hasPasswordLeaked: !0,
					hasUsernameAndPasswordLeaked: !!(0, s.rV)(i, "rulesets.leaked_credential_checks_exact_allowed"),
					hasSimilarLeaked: !!(0, s.rV)(i, "rulesets.leaked_credential_checks_similar_allowed")
				} : {
					hasPasswordLeaked: !1,
					hasUsernameAndPasswordLeaked: !1,
					hasSimilarLeaked: !1
				},
				r = i => !!(0, l.z1)("deprecate-security-level")(i)
		},
		"../react/pages/security/settings/resources/types.ts": function(W, v, t) {
			"use strict";
			t.d(v, {
				T: function() {
					return o
				}
			});
			var e = t("../react/pages/security/settings/resources/constants.ts");
			let o = function(s) {
				return s.ENABLED = "enabled", s.CONTACT = "contact", s.EXPIRES = "expires", s.ENCRYPTION = "encryption", s.ACKNOWLEDGMENTS = "acknowledgments", s.CANONICAL = "canonical", s.HIRING = "hiring", s.POLICY = "policy", s.PREFERRED_LANGUAGES = "preferred_languages", s
			}({})
		},
		"../react/pages/security/settings/resources/utils.ts": function(W, v, t) {
			"use strict";
			t.d(v, {
				$E: function() {
					return i
				},
				Mb: function() {
					return p
				},
				N2: function() {
					return S
				},
				Q4: function() {
					return _
				},
				QF: function() {
					return r
				},
				Vy: function() {
					return T
				},
				Wv: function() {
					return c
				},
				mm: function() {
					return h
				},
				sQ: function() {
					return O
				},
				vc: function() {
					return y
				}
			});
			var e = t("../../../../node_modules/yup/es/index.js"),
				o = t("../../../../node_modules/@cloudflare/util-http-file/es/index.js"),
				s = t("../react/pages/security/settings/routes.tsx"),
				d = t("../react/pages/security/settings/resources/constants.ts"),
				l = t("../react/pages/security/settings/resources/types.ts"),
				m = t("../react/pages/analytics/common/utils/gqlUtils.js");

			function a(g) {
				for (var C = 1; C < arguments.length; C++) {
					var M = arguments[C] != null ? Object(arguments[C]) : {},
						b = Object.keys(M);
					typeof Object.getOwnPropertySymbols == "function" && b.push.apply(b, Object.getOwnPropertySymbols(M).filter(function(R) {
						return Object.getOwnPropertyDescriptor(M, R).enumerable
					})), b.forEach(function(R) {
						u(g, R, M[R])
					})
				}
				return g
			}

			function u(g, C, M) {
				return C = E(C), C in g ? Object.defineProperty(g, C, {
					value: M,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : g[C] = M, g
			}

			function E(g) {
				var C = n(g, "string");
				return typeof C == "symbol" ? C : String(C)
			}

			function n(g, C) {
				if (typeof g != "object" || g === null) return g;
				var M = g[Symbol.toPrimitive];
				if (M !== void 0) {
					var b = M.call(g, C || "default");
					if (typeof b != "object") return b;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (C === "string" ? String : Number)(g)
			}
			const r = {
					[l.T.ENABLED]: !0,
					[l.T.CONTACT]: [""],
					[l.T.EXPIRES]: ""
				},
				i = {
					[l.T.CONTACT]: {
						label: "security_txt.fields.contact",
						tooltip: "security_txt.fields.contact.description",
						placeholder: "security_txt.fields.contact.placeholder"
					},
					[l.T.EXPIRES]: {
						label: "security_txt.fields.expires",
						tooltip: "security_txt.fields.expires.description",
						placeholder: "security_txt.fields.expires.placeholder"
					},
					[l.T.ENCRYPTION]: {
						label: "security_txt.fields.encryption",
						tooltip: "security_txt.fields.encryption.description",
						placeholder: "security_txt.fields.encryption.placeholder"
					},
					[l.T.ACKNOWLEDGMENTS]: {
						label: "security_txt.fields.acknowledgements",
						tooltip: "security_txt.fields.acknowledgements.description",
						placeholder: "security_txt.fields.acknowledgements.placeholder"
					},
					[l.T.CANONICAL]: {
						label: "security_txt.fields.canonical",
						tooltip: "security_txt.fields.canonical.description",
						placeholder: "security_txt.fields.canonical.placeholder"
					},
					[l.T.POLICY]: {
						label: "security_txt.fields.policy",
						tooltip: "security_txt.fields.policy.description",
						placeholder: "security_txt.fields.policy.placeholder"
					},
					[l.T.HIRING]: {
						label: "security_txt.fields.hiring",
						tooltip: "security_txt.fields.hiring.description",
						placeholder: "security_txt.fields.hiring.placeholder"
					},
					[l.T.PREFERRED_LANGUAGES]: {
						label: "security_txt.fields.preferred_languages",
						tooltip: "security_txt.fields.preferred_languages.description",
						placeholder: "security_txt.fields.preferred_languages.placeholder"
					}
				},
				p = g => e.Ry({
					[l.T.CONTACT]: e.IX().of(e.Z_().required(g("common.required")).matches(/^((https:\/\/)|(tel:)|(mailto:))/, g("security_txt.fields.contact.format_error"))),
					[l.T.EXPIRES]: e.hT().required(g("common.required")).min(new Date, g("security_txt.fields.expires.min_error"))
				}),
				c = g => {
					const C = {};
					for (const M in g) C[M] = Array.isArray(g[M]) ? g[M].filter(b => !!b) : g[M];
					return a({}, C, {
						expires: (0, m.DZ)(g.expires)
					})
				},
				_ = (g, C, M) => {
					const b = [...new Set([l.T.CONTACT, l.T.EXPIRES, ...Object.values(l.T)])],
						R = Object.entries(g).sort(([A], [L]) => b.indexOf(A) - b.indexOf(L)).filter(([A, L]) => !!i[A] && !!L && (!Array.isArray(L) || !!L.length)).map(([A, L]) => Array.isArray(L) ? L.map(P => `${M(i[A].label)}: ${P}`).join(`
`) : `${M(i[A].label)}: ${L}`).join(`
`);
					(0, o.yH)(`Cloudflare_${C}_security.txt`, R, "text/plain;charset=utf-8")
				};
			let y = function(g) {
				return g.CREATED = "created security.txt", g.ENABLED = "enabled security.txt", g.DISABLED = "disabled security.txt", g.DOWNLOADED = "downloaded security.txt", g.UPDATED = "updated security.txt", g.DELETED = "deleted security.txt", g
			}({});
			const T = g => (g == null ? void 0 : g.source) === d.LABEL_SOURCES.USER ? "labels.list.table.columns.type.user" : (g == null ? void 0 : g.source) === d.LABEL_SOURCES.MANAGED ? "labels.list.table.columns.type.managed" : "common.unknown",
				O = g => g === d.W3 ? void 0 : g,
				h = g => d.aW.test(g),
				S = g => {
					switch (g) {
						case d.w.CONTENT_SCANNING:
							return s.ROUTES.CONTENT_SCANNING;
						case d.w.EXPOSED_CREDENTIALS:
							return s.ROUTES.EXPOSED_CREDENTIALS
					}
				}
		},
		"../react/pages/security/settings/routes.tsx": function(W, v, t) {
			"use strict";
			t.d(v, {
				ROUTES: function() {
					return o
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-routes/es/index.js");
			const o = {
				ROOT: (0, e.BC)`/${"accountId"}/${"zoneName"}/security/settings`,
				DETECTIONS: (0, e.BC)`/${"accountId"}/${"zoneName"}/security/settings/detections`,
				EXPOSED_CREDENTIALS: (0, e.BC)`/${"accountId"}/${"zoneName"}/security/settings/detections/exposed-credentials`,
				CONTENT_SCANNING: (0, e.BC)`/${"accountId"}/${"zoneName"}/security/settings/detections/malicious-content`,
				LABELS: (0, e.BC)`/${"accountId"}/${"zoneName"}/security/settings/labels`,
				LABEL_APPLY: (0, e.BC)`/${"accountId"}/${"zoneName"}/security/settings/labels/apply/:labelName?`,
				SECURITY_TXT: (0, e.BC)`/${"accountId"}/${"zoneName"}/security/settings/security-txt`
			}
		},
		"../react/pages/security/waf/managed-rules/resources/tracking.ts": function(W, v, t) {
			"use strict";
			t.d(v, {
				Sb: function() {
					return E
				},
				Vj: function() {
					return a
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				o = t.n(e);

			function s(n) {
				for (var r = 1; r < arguments.length; r++) {
					var i = arguments[r] != null ? Object(arguments[r]) : {},
						p = Object.keys(i);
					typeof Object.getOwnPropertySymbols == "function" && p.push.apply(p, Object.getOwnPropertySymbols(i).filter(function(c) {
						return Object.getOwnPropertyDescriptor(i, c).enumerable
					})), p.forEach(function(c) {
						d(n, c, i[c])
					})
				}
				return n
			}

			function d(n, r, i) {
				return r = l(r), r in n ? Object.defineProperty(n, r, {
					value: i,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : n[r] = i, n
			}

			function l(n) {
				var r = m(n, "string");
				return typeof r == "symbol" ? r : String(r)
			}

			function m(n, r) {
				if (typeof n != "object" || n === null) return n;
				var i = n[Symbol.toPrimitive];
				if (i !== void 0) {
					var p = i.call(n, r || "default");
					if (typeof p != "object") return p;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (r === "string" ? String : Number)(n)
			}
			const a = {
					SHOW_LCC_MIGRATION_BANNER: "show LCC migration banner",
					SHOW_LCC_MIGRATION_WARNING: "show LCC migration warning",
					CLICK_LCC_DOCUMENTATION: "click link to Leaked credentials detection documentation",
					CLICK_LCC_UPGRADE_GUIDE: "click link to Leaked credentials detection upgrade guide"
				},
				u = {
					product: "WAF Managed Rules"
				},
				E = ({
					event: n,
					category: r = "user journey",
					product: i = "waf",
					productName: p = "Managed Rules",
					additionalData: c
				}) => {
					o().sendEvent(n, s({
						category: r,
						product: i,
						productName: p
					}, c || {}))
				}
		},
		"../react/pages/shared-config/sparrowEvents.tsx": function(W, v, t) {
			"use strict";
			t.d(v, {
				D: function() {
					return e
				}
			});
			let e = function(o) {
				return o.CLICK_MENU_ITEM_SHARE = "click on share item", o.CLICK_ON_CONFIGURE_SHARE_BUTTON = "click on configure share button", o.CLICK_ON_GO_TO_SOURCE_ACCOUNT = "click on go to source account", o.CLICK_ON_EDIT_SHARE_PERMISSION = "click on edit share permission", o.CLICK_ON_CLOSE_SHARE_MODAL = "click on close share modal", o.CLICK_ON_CANCEL_SHARE_MODAL = "click on cancel share modal", o.CLICK_ON_SHARE_BUTTON_SHARE_MODAL = "click on share button share modal", o.CLICK_GO_BACK_SHARE_MODAL = "click go back share modal", o.CLICK_ON_DEPLOY_BUTTON_SHARE_MODAL = "click on deploy button share modal", o.CLICK_ON_DELETE_RULESET = "click on delete ruleset", o.CLICK_ON_SHARE_TABLE_ROW = "click on share table row", o
			}({})
		},
		"../react/pages/spectrum/tracking.tsx": function(W, v, t) {
			"use strict";
			t.d(v, {
				N: function() {
					return e
				}
			});
			let e = function(o) {
				return o.IP_ADDRESS = "create spectrum app using IP address", o.CNAME = "create spectrum app using cname record", o.LB = "create spectrum app using load balancer", o.UPDATE_IP_ADDRESS = "update spectrum app using IP address", o.UPDATE_CNAME = "update spectrum app using cname record", o.UPDATE_LB = "update spectrum app using load balancer", o.DISABLE = "disable spectrum app", o
			}({})
		},
		"../react/pages/stream/actionTypes.ts": function(W, v, t) {
			"use strict";
			t.d(v, {
				U: function() {
					return e
				}
			});
			let e = function(o) {
				return o.ReplaceVideos = "stream.replace_videos", o.PrependVideo = "stream.prepend_video", o.UpdateVideo = "stream.update_video", o.UpdateVideoPending = "steam.update_video_pending", o.RemoveVideos = "stream.remove_videos", o.StoreUploader = "stream.store_uploader", o.UpsertUploads = "stream.upsert_uploads", o.RemoveUploads = "stream.remove_uploads", o.UpdateUploadProgress = "stream.update_upload_progress", o.UploadViaUrl = "stream.upload_via_url", o.SetLoading = "stream.set_loading", o.SetStorageLoading = "stream.set_storage_loading", o.SetStorage = "stream.set_storage", o.SetPage = "stream.set_page", o.SetPausedUploads = "stream.set_paused_uploads", o.RemovePausedUpload = "stream.remove_paused_upload", o.SetRequestTimestamp = "stream.set_request_timestamp", o.ResetState = "stream.reset_state", o
			}({})
		},
		"../react/pages/stream/reducer.ts": function(W, v, t) {
			"use strict";
			t.d(v, {
				ZP: function() {
					return n
				},
				nY: function() {
					return u
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-exhausted-reducers/es/index.js"),
				o = t("../react/pages/stream/actionTypes.ts"),
				s = t("../react/pages/stream/util/pager.ts");

			function d(r) {
				for (var i = 1; i < arguments.length; i++) {
					var p = arguments[i] != null ? Object(arguments[i]) : {},
						c = Object.keys(p);
					typeof Object.getOwnPropertySymbols == "function" && c.push.apply(c, Object.getOwnPropertySymbols(p).filter(function(_) {
						return Object.getOwnPropertyDescriptor(p, _).enumerable
					})), c.forEach(function(_) {
						l(r, _, p[_])
					})
				}
				return r
			}

			function l(r, i, p) {
				return i = m(i), i in r ? Object.defineProperty(r, i, {
					value: p,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : r[i] = p, r
			}

			function m(r) {
				var i = a(r, "string");
				return typeof i == "symbol" ? i : String(i)
			}

			function a(r, i) {
				if (typeof r != "object" || r === null) return r;
				var p = r[Symbol.toPrimitive];
				if (p !== void 0) {
					var c = p.call(r, i || "default");
					if (typeof c != "object") return c;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (i === "string" ? String : Number)(r)
			}
			const u = "stream",
				E = {
					loading: !0,
					storageLoading: !1,
					videos: [],
					requestTimestamp: null,
					videoUpdateStatuses: {}
				};

			function n(r = E, i) {
				switch (i.type) {
					case o.U.ResetState:
						return E;
					case o.U.SetStorageLoading:
						const {
							storageLoading: p
						} = i;
						return d({}, r, {
							storageLoading: p
						});
					case o.U.SetStorage:
						return d({}, r, {
							storage: i.payload ? d({}, r.storage, i.payload) : void 0
						});
					case o.U.ReplaceVideos:
						return d({}, r, {
							videos: i.videos
						});
					case o.U.PrependVideo:
						return d({}, r, {
							videos: [i.video, ...r.videos].filter((c, _) => _ < s.FJ)
						});
					case o.U.UpdateVideo:
						return d({}, r, {
							videos: r.videos.map(c => c.uid === i.video.uid ? i.video : c)
						});
					case o.U.UpdateVideoPending:
						return d({}, r, {
							videoUpdateStatuses: d({}, r.videoUpdateStatuses, {
								[i.uid]: i.status
							})
						});
					case o.U.RemoveVideos:
						return d({}, r, {
							videos: r.videos.filter(c => !i.ids.includes(c.uid))
						});
					case o.U.SetLoading:
						return d({}, r, {
							loading: i.loading
						});
					case o.U.SetRequestTimestamp:
						return d({}, r, {
							requestTimestamp: i.requestTimestamp
						});
					case o.U.UploadViaUrl:
						return r;
					default:
						return (0, e.h)(i, r)
				}
			}
		},
		"../react/pages/stream/selectors.ts": function(W, v, t) {
			"use strict";
			t.d(v, {
				Id: function() {
					return d
				},
				OU: function() {
					return n
				},
				Pf: function() {
					return l
				},
				QL: function() {
					return u
				},
				_A: function() {
					return _
				},
				_Q: function() {
					return r
				},
				aM: function() {
					return c
				},
				bM: function() {
					return a
				},
				bO: function() {
					return i
				},
				bm: function() {
					return p
				},
				mX: function() {
					return y
				},
				pW: function() {
					return m
				},
				xW: function() {
					return E
				}
			});
			var e = t("../react/common/selectors/accountSelectors.ts"),
				o = t("../react/common/selectors/entitlementsSelectors.ts"),
				s = t("../react/pages/stream/reducer.ts");
			const d = T => T[s.nY],
				l = T => d(T).videos,
				m = T => d(T).videoUpdateStatuses,
				a = T => d(T).loading,
				u = T => d(T).requestTimestamp,
				E = T => d(T).storageLoading,
				n = T => d(T).storage,
				r = T => (0, o.BF)(T, "stream.enabled") || (0, e.bC)(T),
				i = T => (0, e.Le)(T, "stream", "connect"),
				p = T => (0, e.Le)(T, "stream", "stream-4371"),
				c = T => (0, e.Le)(T, "stream", "public-details-enabled"),
				_ = T => !!(0, e.Le)(T, "stream", "llhls"),
				y = T => {
					const O = n(T);
					return O !== void 0 && O.limitMins > O.currentMins
				}
		},
		"../react/pages/stream/util/pager.ts": function(W, v, t) {
			"use strict";
			t.d(v, {
				FJ: function() {
					return e
				},
				d6: function() {
					return s
				},
				wL: function() {
					return o
				}
			});
			const e = 30;

			function o(d, l, m) {
				const a = {
					search: m,
					limit: e.toString()
				};
				return l !== void 0 && (a.end = l), a
			}

			function s(d, l, m) {
				return {
					limit: e.toString(),
					search: m,
					asc: "true",
					start_comp: "gt",
					start: l
				}
			}
		},
		"../react/pages/traffic/argo/tracking.ts": function(W, v, t) {
			"use strict";
			t.d(v, {
				V: function() {
					return e
				}
			});
			let e = function(o) {
				return o.ARGO_ENABLEMENT = "change argo enablement", o.ARGO_GEO_ANALYTICS_FETCH = "get argo geo analytics", o.ARGO_GLOBAL_ANALYTICS_FETCH = "get argo global analytics", o
			}({})
		},
		"../react/pages/traffic/load-balancing/tracking.ts": function(W, v, t) {
			"use strict";
			t.d(v, {
				Z: function() {
					return e
				}
			});
			let e = function(o) {
				return o.CREATE_AND_DEPLOY = "create load balancer", o.ANALYTICS = "read analytics", o.LOAD_BALANCING_TABLE = "click on expandable row on load balancing", o.POOL_TABLE = "click on expandable row on pool", o.CREATE_MONITOR_LINK = "click on create a monitor", o.EDIT_MONITOR_LINK = "click on edit a monitor", o.EDIT_MONITOR = "edit monitor", o.CREATE_MONITOR = "create monitor", o.CREATE_POOL_LINK = "click on create a pool", o.EDIT_POOL_LINK = "click on edit a pool", o.EDIT_POOL = "edit pool", o.CREATE_POOL = "create pool", o
			}({})
		},
		"../react/pages/traffic/waiting-rooms/tracking.tsx": function(W, v, t) {
			"use strict";
			t.d(v, {
				N: function() {
					return s
				},
				X: function() {
					return d
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				o = t.n(e);
			let s = function(l) {
				return l.CREATE = "create waiting room", l.UPDATE = "update waiting room", l.EVENTS = "view waiting rooms events", l.ANALYTICS = "view waiting room analytics", l.GENERATE_PREVIEW = "generate waiting room preview link", l
			}({});
			const d = async l => {
				await o().sendEvent(l, {
					category: "user journey",
					product: "waiting room"
				})
			}
		},
		"../react/pages/turnstile/tracking.ts": function(W, v, t) {
			"use strict";
			t.d(v, {
				N3: function() {
					return u
				},
				P: function() {
					return n
				},
				Xh: function() {
					return E
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				o = t.n(e);

			function s(r) {
				for (var i = 1; i < arguments.length; i++) {
					var p = arguments[i] != null ? Object(arguments[i]) : {},
						c = Object.keys(p);
					typeof Object.getOwnPropertySymbols == "function" && c.push.apply(c, Object.getOwnPropertySymbols(p).filter(function(_) {
						return Object.getOwnPropertyDescriptor(p, _).enumerable
					})), c.forEach(function(_) {
						d(r, _, p[_])
					})
				}
				return r
			}

			function d(r, i, p) {
				return i = l(i), i in r ? Object.defineProperty(r, i, {
					value: p,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : r[i] = p, r
			}

			function l(r) {
				var i = m(r, "string");
				return typeof i == "symbol" ? i : String(i)
			}

			function m(r, i) {
				if (typeof r != "object" || r === null) return r;
				var p = r[Symbol.toPrimitive];
				if (p !== void 0) {
					var c = p.call(r, i || "default");
					if (typeof c != "object") return c;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (i === "string" ? String : Number)(r)
			}
			const a = "TURNSTILE";
			let u = function(r) {
				return r.OVERVIEW_PAGE = "view the overview page", r.LIST_OF_WIDGETS = "list of widgets", r.SOLVE_EVENTS = "list solve events", r.REDIRECT_TO_ADD_WIDGET = "redirect to Add Widget page", r.REDIRECT_TO_ANALYTICS = "redirect to Analytics page", r.REDIRECT_TO_EDIT_PAGE = "redirect to Edit page", r.OPEN_DELETE_MODAL = "view the delete modal for one widget", r.OPEN_DELETE_MODAL_MULTIPLE = "view the delete modal for multiple widgets", r.DELETE_WIDGET = "delete successfully widgets", r.LIST_OF_HOSTNAMES = "list hostnames", r.OPEN_ADD_WIDGET_PAGE = "view page to add widget", r.FEEDBACK_ADD = "view Feedback Add", r.SAVE_WIDGET = "save widget", r.ROTATE_KEYS = "rotate keys", r.OPEN_ROTATE_KEYS_MODAL = "view the rotate keys modal", r.GET_WIDGETS = "get widget details", r.OPEN_ANALYTICS_PAGE = "view analytics page", r.ANALYTICS_DATA = "list the analytics data", r
			}({});
			const E = ({
					name: r,
					product: i = a,
					category: p = "user journey",
					page: c,
					additionalData: _ = {}
				}) => {
					o().sendEvent(r, s({
						category: p,
						page: c,
						product: i
					}, _ || {}))
				},
				n = () => {
					var r;
					return (r = Object.values(u)) === null || r === void 0 ? void 0 : r.flat()
				}
		},
		"../react/pages/welcome/routes.ts": function(W, v, t) {
			"use strict";
			t.d(v, {
				d: function() {
					return o
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-routes/es/index.js");
			const o = {
				default: (0, e.BC)`/${"accountId"}/`,
				addSite: (0, e.BC)`/${"accountId"}/add-site`,
				root: (0, e.BC)`/${"accountId"}/welcome`,
				websites: (0, e.BC)`/${"accountId"}/websites`
			}
		},
		"../react/pages/zone-versioning/selectors.ts": function(W, v, t) {
			"use strict";
			t.d(v, {
				$e: function() {
					return M
				},
				$h: function() {
					return h
				},
				G: function() {
					return C
				},
				M3: function() {
					return R
				},
				Tr: function() {
					return T
				},
				UY: function() {
					return _
				},
				bH: function() {
					return r
				},
				fv: function() {
					return A
				},
				hF: function() {
					return S
				},
				iw: function() {
					return p
				},
				m7: function() {
					return n
				},
				re: function() {
					return g
				},
				tp: function() {
					return c
				}
			});
			var e = t("../react/app/redux/normalizer.js"),
				o = t("../../../../node_modules/reselect/lib/index.js"),
				s = t("../react/common/selectors/zoneSelectors.ts"),
				d = t("../react/app/components/SidebarNav/permissions.ts"),
				l = t("../react/common/selectors/entitlementsSelectors.ts");

			function m(L) {
				for (var P = 1; P < arguments.length; P++) {
					var H = arguments[P] != null ? Object(arguments[P]) : {},
						K = Object.keys(H);
					typeof Object.getOwnPropertySymbols == "function" && K.push.apply(K, Object.getOwnPropertySymbols(H).filter(function(Q) {
						return Object.getOwnPropertyDescriptor(H, Q).enumerable
					})), K.forEach(function(Q) {
						a(L, Q, H[Q])
					})
				}
				return L
			}

			function a(L, P, H) {
				return P = u(P), P in L ? Object.defineProperty(L, P, {
					value: H,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : L[P] = H, L
			}

			function u(L) {
				var P = E(L, "string");
				return typeof P == "symbol" ? P : String(P)
			}

			function E(L, P) {
				if (typeof L != "object" || L === null) return L;
				var H = L[Symbol.toPrimitive];
				if (H !== void 0) {
					var K = H.call(L, P || "default");
					if (typeof K != "object") return K;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (P === "string" ? String : Number)(L)
			}
			const n = L => (0, s.nA)(L) ? (0, l.p1)(L) && (0, d.$n)(L, "zone_versioning", "versioning") : !1,
				r = L => L.zoneVersioning.zoneApplications,
				i = (0, e.P1)("zoneApplications", r),
				p = L => L.zoneVersioning.zoneVersions,
				c = (0, e.P1)("zoneVersions", p),
				_ = (0, o.P1)(c, L => {
					if (L) return L.filter(P => P.status == "V")
				}),
				y = L => L.zoneVersioning.environments,
				T = L => L.zoneVersioning.environments.isRequesting,
				O = (0, e.P1)("environments", y),
				h = (0, o.P1)(i, L => {
					if (L) {
						if (L.length === 1) return L[0];
						L.length > 1 && console.error(new Error(`Zone Versioning - Zone Versioning Migration Error: Unexpected number of Zone Applications. Expected: 1, actual: ${L.length}`))
					}
					return null
				}),
				S = (0, o.P1)(O, L => L ? L.environments : []),
				g = L => {
					var P;
					return (P = L.zoneVersioning) === null || P === void 0 ? void 0 : P.zoneVersionSelector
				},
				C = (0, o.P1)(g, c, (L, P) => {
					if (!(L == null ? void 0 : L.isVersion) || !P) return null;
					const H = P.find(K => {
						if (K.version === L.selectedVersion && K.locked) return !0
					});
					return H ? m({}, H, {
						isLocked: !0
					}) : null
				}),
				M = (0, o.P1)(c, S, (L, P) => !P || !L ? [] : L.map(H => {
					const K = [];
					for (const Q in P) P[Q].version === H.version && K.push(P[Q]);
					return m({}, H, {
						environments: K
					})
				})),
				b = L => L.zoneVersioning.WAFMigrationStatus,
				R = (0, e.P1)("WAFMigrationStatus", b),
				A = L => L.zoneVersioning.enableVersioning
		},
		"../react/pages/zoneless-workers/constants.ts": function(W, v, t) {
			"use strict";
			t.d(v, {
				$2: function() {
					return M
				},
				CI: function() {
					return g
				},
				IS: function() {
					return a
				},
				L7: function() {
					return l
				},
				Oj: function() {
					return i
				},
				QV: function() {
					return c
				},
				X$: function() {
					return h
				},
				X6: function() {
					return E
				},
				d4: function() {
					return p
				},
				fE: function() {
					return u
				},
				im: function() {
					return T
				},
				lv: function() {
					return _
				},
				rL: function() {
					return n
				},
				wW: function() {
					return m
				}
			});

			function e(b) {
				for (var R = 1; R < arguments.length; R++) {
					var A = arguments[R] != null ? Object(arguments[R]) : {},
						L = Object.keys(A);
					typeof Object.getOwnPropertySymbols == "function" && L.push.apply(L, Object.getOwnPropertySymbols(A).filter(function(P) {
						return Object.getOwnPropertyDescriptor(A, P).enumerable
					})), L.forEach(function(P) {
						o(b, P, A[P])
					})
				}
				return b
			}

			function o(b, R, A) {
				return R = s(R), R in b ? Object.defineProperty(b, R, {
					value: A,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : b[R] = A, b
			}

			function s(b) {
				var R = d(b, "string");
				return typeof R == "symbol" ? R : String(R)
			}

			function d(b, R) {
				if (typeof b != "object" || b === null) return b;
				var A = b[Symbol.toPrimitive];
				if (A !== void 0) {
					var L = A.call(b, R || "default");
					if (typeof L != "object") return L;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (R === "string" ? String : Number)(b)
			}
			const l = {
					documentation: {
						configFile: "https://developers.cloudflare.com/pages/functions/wrangler-configuration/",
						workersAPI: "https://developers.cloudflare.com/api/operations/worker-script-list-workers",
						root: "https://workers.cloudflare.com/docs",
						configuration: "https://developers.cloudflare.com/workers/configuration",
						compatibilityDates: "https://developers.cloudflare.com/workers/configuration/compatibility-dates/",
						compatibilityFlags: "https://developers.cloudflare.com/workers/configuration/compatibility-dates/#compatibility-flags",
						installWrangler: "https://developers.cloudflare.com/workers/wrangler/install-and-update/",
						wranglerDocs: "https://developers.cloudflare.com/workers/wrangler/",
						wranglerCommands: "https://developers.cloudflare.com/workers/wrangler/commands/",
						starters: "https://developers.cloudflare.com/workers/starters",
						eggheadCourse: "https://egghead.io/courses/introduction-to-cloudflare-workers-5aa3",
						tutorials: "https://developers.cloudflare.com/workers/tutorials",
						examples: "https://developers.cloudflare.com/workers/examples",
						durableObjects: "https://developers.cloudflare.com/workers/learning/using-durable-objects",
						writingWorkers: "https://developers.cloudflare.com/workers/get-started/guide/#5-write-code",
						kv: "https://developers.cloudflare.com/workers/learning/how-kv-works",
						kvGetStarted: "https://developers.cloudflare.com/kv/get-started/",
						kvBindings: "https://developers.cloudflare.com/workers/runtime-apis/kv#kv-bindings",
						kvNamespaces: "https://developers.cloudflare.com/workers/reference/storage/namespaces/",
						kvMetrics: "https://developers.cloudflare.com/kv/observability/metrics-analytics/",
						envVars: "https://developers.cloudflare.com/workers/reference/apis/environment-variables/",
						api: "https://workers.cloudflare.com/docs/reference/tooling/api",
						scheduledEventListener: "https://developers.cloudflare.com/workers/runtime-apis/add-event-listener#scheduled-listener",
						errors: "https://developers.cloudflare.com/workers/platform/limits",
						cpuLimits: "https://developers.cloudflare.com/workers/platform/limits/#cpu-time",
						walltimeLimits: "https://developers.cloudflare.com/workers/platform/limits/#wall-time",
						pagesFunctionsPricing: "https://developers.cloudflare.com/pages/functions/pricing/",
						pricing: "https://developers.cloudflare.com/workers/platform/pricing",
						computeSetting: "https://developers.cloudflare.com/workers/platform/cron-triggers#green-compute",
						usageModels: "https://developers.cloudflare.com/workers/platform/pricing#usage-models",
						usageModelCLIDocs: "https://developers.cloudflare.com/workers/cli-wrangler/configuration#keys",
						wrangler: "https://developers.cloudflare.com/workers/wrangler/",
						pagesDirectUploadCLI: "https://developers.cloudflare.com/pages/get-started/direct-upload/#wrangler-cli",
						bindings: {
							index: "https://developers.cloudflare.com/workers/runtime-apis/bindings",
							ai: "https://developers.cloudflare.com/workers-ai",
							analyticsEngine: "https://developers.cloudflare.com/analytics/analytics-engine",
							assets: "https://developers.cloudflare.com/workers/static-assets/binding",
							browserRendering: "https://developers.cloudflare.com/browser-rendering",
							d1: "https://developers.cloudflare.com/d1",
							dispatchNamespace: "https://developers.cloudflare.com/cloudflare-for-platforms/workers-for-platforms/get-started/configuration",
							durableObjects: "https://developers.cloudflare.com/durable-objects",
							hyperdrive: "https://developers.cloudflare.com/hyperdrive",
							kv: "https://developers.cloudflare.com/kv",
							mTLS: "https://developers.cloudflare.com/workers/runtime-apis/bindings/mtls",
							queues: "https://developers.cloudflare.com/queues/configuration/javascript-apis",
							r2: "https://developers.cloudflare.com/r2/api/workers/workers-api-reference",
							rateLimiting: "https://developers.cloudflare.com/workers/runtime-apis/bindings/rate-limit",
							service: "https://developers.cloudflare.com/workers/runtime-apis/bindings/service-bindings",
							vectorize: "https://developers.cloudflare.com/vectorize/reference/client-api",
							versionMetadata: "https://developers.cloudflare.com/workers/runtime-apis/bindings/version-metadata"
						},
						modules: "https://developers.cloudflare.com/workers/cli-wrangler/configuration#modules",
						routes: "https://developers.cloudflare.com/workers/platform/routes/#matching-behavior",
						routesAndDomains: "https://developers.cloudflare.com/workers/configuration/routing",
						routesDNS: "https://developers.cloudflare.com/workers/platform/triggers/routes/#subdomains-must-have-a-dns-record",
						customDomains: "https://developers.cloudflare.com/workers/platform/routing/custom-domains",
						fetchEvent: "https://developers.cloudflare.com/workers/runtime-apis/fetch-event",
						scheduledWorkers: "https://developers.cloudflare.com/workers/configuration/cron-triggers",
						emailWorkers: "https://developers.cloudflare.com/email-routing/email-workers/",
						cronSyntax: "https://developers.cloudflare.com/workers/platform/cron-triggers#supported-cron-expressions",
						scheduledEvents: "https://developers.cloudflare.com/workers/runtime-apis/scheduled-event",
						languages: "https://developers.cloudflare.com/workers/platform/languages",
						durableObjectsChatExample: "https://developers.cloudflare.com/workers/learning/using-durable-objects#websockets-in-durable-objects",
						durableObjectsCounterExample: "https://developers.cloudflare.com/workers/learning/using-durable-objects#example---counter",
						services: "https://developers.cloudflare.com/workers/platform/services",
						serviceBindings: "https://developers.cloudflare.com/workers/runtime-apis/bindings/service-bindings/",
						metrics: {
							root: "https://developers.cloudflare.com/workers/observability/metrics-and-analytics/",
							requestsTimeseries: "https://developers.cloudflare.com/workers/observability/metrics-and-analytics/#requests",
							cpuTimeTimeseries: "https://developers.cloudflare.com/workers/observability/metrics-and-analytics/#cpu-time-per-execution",
							durationTimeseries: "https://developers.cloudflare.com/workers/observability/metrics-and-analytics/#execution-duration-gb-seconds",
							requestDurationTimeseries: "https://developers.cloudflare.com/workers/learning/metrics-and-analytics/#request-duration",
							dataEgressTimeseries: "https://developers.cloudflare.com/workers/about/metrics/#data-egress",
							subRequestsTimeseries: "https://developers.cloudflare.com/workers/observability/metrics-and-analytics/#subrequests",
							wallTimeTimeseries: "https://developers.cloudflare.com/workers/observability/metrics-and-analytics/#wall-time-per-execution",
							invocationStatuses: "https://developers.cloudflare.com/workers/observability/metrics-and-analytics/#invocation-statuses"
						},
						logpush: {
							generalDocs: "https://developers.cloudflare.com/workers/platform/logpush",
							createJob: "https://developers.cloudflare.com/workers/platform/logpush/#create-a-logpush-job"
						},
						mtlsCertificates: "https://developers.cloudflare.com/workers/runtime-apis/mtls",
						uploadMtlsCertificates: "https://developers.cloudflare.com/workers/wrangler/commands#mtls-certificate",
						smartPlacement: "https://developers.cloudflare.com/workers/platform/smart-placement/",
						smartPlacementStatus: "https://developers.cloudflare.com/workers/configuration/smart-placement/#placement-status",
						smartPlacementHowItWorks: "https://developers.cloudflare.com/workers/configuration/smart-placement/#understand-how-smart-placement-beta-works",
						smartPlacementBackendServices: "https://developers.cloudflare.com/workers/configuration/smart-placement/#unsupported-back-end-services",
						integrations: "https://developers.cloudflare.com/workers/databases/connecting-to-databases/",
						tailWorkers: "https://developers.cloudflare.com/workers/platform/tail-workers",
						dispatchNamespaces: "https://developers.cloudflare.com/cloudflare-for-platforms/workers-for-platforms/platform/outbound-workers",
						invalidCORSPolicy: "https://developers.cloudflare.com/r2/buckets/cors/#common-issues",
						createCloudflare: "https://www.npmjs.com/package/create-cloudflare",
						userCpuLimits: "https://developers.cloudflare.com/workers/platform/pricing/#standard-usage-model",
						versions: "https://developers.cloudflare.com/workers/configuration/versions-and-deployments",
						gradualRollouts: "https://developers.cloudflare.com/workers/configuration/versions-and-deployments/gradual-deployments",
						rollbacks: "https://developers.cloudflare.com/workers/configuration/versions-and-deployments/rollbacks",
						moduleSyntax: "https://developers.cloudflare.com/workers/reference/migrate-to-module-workers/#migrate-from-service-workers-to-es-modules",
						configureQueues: "https://developers.cloudflare.com/queues/configuration/configure-queues/",
						observability: "https://developers.cloudflare.com/workers/observability/",
						observabilityLogs: "https://developers.cloudflare.com/workers/observability/logs/workers-logs/",
						workersAssets: "https://developers.cloudflare.com/workers/static-assets/"
					},
					serverlist: "https://blog.cloudflare.com/tag/serverlist/",
					discord: "https://discord.cloudflare.com/",
					community: "https://community.cloudflare.com/tag/workers",
					billing: "https://developers.cloudflare.com/workers/platform/pricing",
					network: "https://www.cloudflare.com/network",
					builtWithWorkers: "https://workers.cloudflare.com/built-with/",
					workersSupplementalTerms: "https://www.cloudflare.com/supplemental-terms/#CFWorkers",
					freeKvBlogPost: "https://blog.cloudflare.com/workers-kv-free-tier/",
					durableObjectsSurvey: "https://docs.google.com/forms/d/e/1FAIpQLSfJeZKlM_InqG7thczqGCaxEOqwsJm1Xdv8Kz0zd4zp3VNvMg/viewform",
					durableObjectsBetaBlogPost: "https://blog.cloudflare.com/durable-objects-open-beta/",
					usageModelSurvey: "https://docs.google.com/forms/d/e/1FAIpQLSeOKaVp9pC-sXvEQsgmKZc1b-BxdDRcIoL0jpOQWCHlAR9SiA/viewform",
					workersUnboundBlogPost: "https://blog.cloudflare.com/workers-unbound-ga/",
					cloudflareSubscriptionTerms: "https://www.cloudflare.com/terms",
					integrationsFeedback: "https://forms.gle/cMkH8G78MpGFP7Yo6",
					workersStandardPricing: "https://blog.cloudflare.com/workers-pricing-scale-to-zero"
				},
				m = 800,
				a = "40rem",
				u = {
					pricing: {
						requests: .15,
						duration: 12.5,
						egress: .045,
						storage: .2,
						read_units: .2,
						write_units: 1,
						delete: 1,
						currency: "USD"
					}
				},
				E = {
					d1_included_capacity: 5e9,
					d1_included_read_count: 25e9,
					d1_included_write_count: 5e7,
					pricing: {
						storage: .75,
						read_units: .001,
						write_units: 1
					}
				},
				n = {
					price: 5,
					currency: "USD",
					frequency: "monthly",
					requests_included: 1e7,
					ubb_frequency: 1e6,
					ubb_price: .5,
					ubb_price_ent: .6,
					additional_million_requests_price: .15,
					additional_million_requests_price_ent: .18,
					additional_million_standard_requests_price: .3,
					additional_million_standard_cpu_time_price: .02,
					additional_million_gb_duration_price: 12.5,
					additional_million_gb_duration_price_ent: 15,
					additional_egress_gb_transfer_price: .045,
					additional_egress_gb_transfer_price_ent: .054,
					kv_storage_modify_price: 5,
					kv_storage_included_capacity: 1e9,
					kv_storage_read_count: 1e7,
					kv_storage_modify_count: 1e6,
					trace_logs: 1e7,
					additional_million_trace_logs_price: .05,
					trace_logs_frequency: 1e6
				},
				r = {
					price: 0,
					currency: "USD",
					frequency: "monthly",
					requests_included: 1e7,
					ubb_frequency: 1e6,
					ubb_price: .6,
					kv_storage_modify_price: 6,
					kv_storage_included_capacity: 1e9,
					kv_storage_read_count: 1e7,
					kv_storage_modify_count: 1e6
				},
				i = {
					free: {
						rateLimit: 1e3,
						maximumRequests: 1e5,
						maximumRequestsRuntimeCutoff: 12e4,
						limits: {
							Threshold1: .75,
							Threshold2: .9,
							Exceeded: 1
						}
					},
					paid: e({
						ubbRequests: 1e6,
						maximumRequests: 1e7
					}, n),
					ent_ss: e({
						ubbRequests: 1e6,
						maximumRequests: 1e7
					}, r),
					unbound: {
						bundledRequests: 10,
						unboundRequests: 1,
						unboundDuration: 4e5,
						unboundEgress: 5,
						kvMonthlyRead: 10,
						kvMonthlyWrite: 1
					},
					standard: {
						requests: 10,
						cpuTimeMilliseconds: 30
					}
				},
				p = {
					free: {
						events: 1e5,
						retention: 3
					},
					paid: {
						events: 2e7,
						meteredCostPerMillionEvents: .6,
						retention: 7
					}
				},
				c = {
					enableWorkers: "enable workers",
					setupSubdomain: "set up subdomain",
					selectPlan: "select workers plan",
					verifyEmail: "verify email",
					clickApplicationName: "click application name",
					clickChangeComputeSetting: "click change compute setting",
					clickChangeSubdomain: "click change subdomain",
					clickConnectToGit: "click connect to git",
					clickCreateProjectSuccessResource: "click create project success resource",
					clickCreateProjectSuccessNextStep: "click create project success next step",
					clickSetupAE: "click setup AE",
					clickUploadAssets: "click upload assets",
					clickWorkerEditCode: "click worker edit code",
					clickWorkersManageNotificationsAlerts: "click workers manage notifications and alerts",
					clickWorkersManageAccountMembers: "click workers manage account members",
					clickWorkersResource: "click workers resource",
					createApplicationClickWorkersDocs: "create application click workers docs",
					createApplicationClickPagesDocs: "create application click pages docs",
					createApplicationCreateWithCLI: "create application click create with CLI",
					createApplicationSelectWorkers: "create application select workers",
					createApplicationSelectPages: "create application select pages",
					createService: "create service",
					createPlaygroundWorker: "create worker from playground",
					createWorkerSelectFilter: "create worker select filter",
					cancelCreatePlaygroundWorker: "cancel create worker from playground",
					deployWorkerScript: "deploy worker script",
					setupCustomDomain: "set up custom domain",
					addWorkersRoute: "add workers route",
					editWorkersRoute: "edit workers route",
					addCronTrigger: "add cron trigger",
					editCronTrigger: "edit cron trigger",
					beginLogStream: "begin log stream",
					editEnvVariables: "edit service environment variables",
					encryptVariable: "encrypt variable",
					editNamespaceBindings: "edit service kv bindings",
					editR2Bindings: "edit service r2 bindings",
					editQueueBindings: "edit service queue bindings",
					editConstellationBindings: "edit service constellation bindings",
					editHyperdriveBindings: "edit service hyperdrive bindings",
					editAiBindings: "edit service ai bindings",
					editVectorizeBindings: "edit service vectorize bindings",
					editServiceBindings: "edit service to service bindings",
					renameService: "rename service",
					deleteService: "delete service",
					sortServices: "sort services",
					searchServices: "search services",
					paginateServices: "paginate services",
					createKVNamespace: "create kv namespace",
					deleteKVNamespace: "delete kv namespace",
					listKVNamespaces: "list kv namespaces",
					searchKVNamespaces: "search kv namespaces",
					paginateKVNamespaces: "paginate kv namespaces",
					addKVKeyValue: "add kv key-value",
					editKVKeyValue: "edit kv key-value",
					deleteKVKeyValue: "delete kv key-value",
					readKVKeyValue: "read kv key-value",
					listKVKeyValues: "list kv key-values",
					searchKVKeyValues: "search kv key-values",
					paginateKVKeyValues: "paginate kv key-values",
					editMtlsCertificateBindings: "edit service mtls certificate bindings",
					quickEditHttpTab: "quick edit http tab",
					quickEditPreviewTab: "quick edit preview tab",
					quickEditScheduleTab: "quick edit schedule tab",
					quickEditWranglerTab: "quick edit wrangler tab",
					rollbackDeployment: "rollback deployment",
					editTailConsumers: "edit service tail consumers",
					editDispatchNamespaceBindings: "edit dispatch namespace bindings",
					clickedDownloadAnalytics: "clicked Workers download analytics",
					clickedPrintAnalytics: "clicked Workers print analytics",
					toggledSmartPlacement: "toggled Workers smart placement",
					copiedVersionId: "workers copied version id",
					clickedDiscordLink: "clicked sidebar Discord link",
					clickedCommunityLink: "clicked sidebar Community Forum link",
					clickDetailTab: "click worker detail tab",
					clickedBundledUsageModel: "Workers:Clicked Bundled Usage Model",
					clickedUnboundUsageModel: "Workers:Clicked Unbound Usage Model",
					clickedGreenComputeSetting: "Workers:Clicked Green Compute Setting",
					clickedGlobalComputeSetting: "Workers:Clicked Global Compute Setting",
					addWCITriggerToExistingWorker: "WCI:add WCI trigger to existing worker",
					updateWCITrigger: "WCI:update WCI trigger",
					deleteWCITrigger: "WCI:delete WCI trigger",
					addWCITriggerToNewWorker: "WCI:create worker with WCI trigger",
					createWCIBuildForNewWorker: "WCI:create WCI build in create from repo flow",
					completedWCIBuildForNewWorker: "WCI:completed WCI build in create from repo flow",
					clickCreateWorkerFromRepoNextStep: "WCI:click create worker from repo next step",
					clickCreateWorkerFromRepoPreviousStep: "WCI:click create worker from repo previous step",
					changedDefaultConfigurations: "WCI:changed default configuration",
					clickCreateNewSCMConnection: "WCI:click create scm connection",
					redirectFromSCMOAuth: "WCI:redirect from SCM connection OAuth",
					clickSubmitError: "WCI:attempt invalid build configuration",
					selectTemplate: "select workers template",
					templateStubWorkerCreated: "template stub worker created",
					templateStubWorkerCreationFailed: "template stub worker creation failed",
					templateRepositoryCreated: "template repository created",
					templateRepositoryCreationFailed: "template repository creation failed",
					copyTemplateC3Command: "template copy c3 command",
					templateDeployClick: "template deploy click",
					reauthenticateGithubModalShown: "reauthenticate github modal shown",
					updateGithubPermissionsClicked: "update github permissions clicked"
				},
				_ = {
					insufficientData: "insufficient data to create/update trigger",
					createRepoConnectionError: "error creating repo connection",
					createTokenError: "error creating token",
					createUpdateTriggerError: "error creating/updating trigger",
					updateEnvironmentVariablesError: "error updating trigger environment variables",
					createWorkerError: "error creating worker",
					buildWorkerError: "error building worker"
				},
				y = "workers.dev",
				T = "YYYY-MM-DD HH:mm:SS ZZ",
				O = "active",
				h = ["bundled", "unbound", "standard"],
				S = null,
				g = {
					observability: "workers-observability",
					previewUrls: "workers-preview-urls-enabled",
					workersBuildsSCMStatusGitHub: "workers-builds-scm-status-github",
					workersBuildsSCMStatusGitLab: "workers-builds-scm-status-gitlab"
				};
			let C = function(b) {
				return b[b.NONE = 0] = "NONE", b[b.MISS = 1] = "MISS", b[b.EXPIRED = 2] = "EXPIRED", b[b.UPDATING = 3] = "UPDATING", b[b.STALE = 4] = "STALE", b[b.HIT = 5] = "HIT", b[b.IGNORED = 6] = "IGNORED", b[b.BYPASS = 7] = "BYPASS", b[b.REVALIDATED = 8] = "REVALIDATED", b[b.DYNAMIC = 9] = "DYNAMIC", b[b.STREAM_HIT = 10] = "STREAM_HIT", b[b.DEFERRED = 11] = "DEFERRED", b
			}({});
			const M = [C.HIT, C.STREAM_HIT]
		},
		"../react/pages/zoneless-workers/routes.ts": function(W, v, t) {
			"use strict";
			t.d(v, {
				Hv: function() {
					return a
				},
				L: function() {
					return s
				},
				Q9: function() {
					return d
				},
				_j: function() {
					return l
				},
				ky: function() {
					return o
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-routes/es/index.js");
			const o = u => `${u}.workers.dev`,
				s = (u, E, n) => `${n?`${n}.`:""}${u}.${o(E)}`,
				d = (u, E, n) => `https://${s(u,E,n)}`,
				l = {
					workersOverview: (0, e.BC)`/${"accountId"}/workers/overview`,
					zoneRoot: (0, e.BC)`/${"accountId"}/${"zoneName"}/workers`,
					root: (0, e.BC)`/${"accountId"}/workers`,
					onboarding: (0, e.BC)`/${"accountId"}/workers-and-pages/create`,
					overview: (0, e.BC)`/${"accountId"}/workers/overview`,
					subdomain: (0, e.BC)`/${"accountId"}/workers/subdomain`,
					defaultUsageModel: (0, e.BC)`/${"accountId"}/workers/default-usage-model`,
					computeSetting: (0, e.BC)`/${"accountId"}/workers/compute-setting`,
					cli: (0, e.BC)`/${"accountId"}/workers/cli`,
					kvRoot: (0, e.BC)`/${"accountId"}/workers/kv`,
					kvStore: (0, e.BC)`/${"accountId"}/workers/kv/namespaces`,
					d1Store: (0, e.BC)`/${"accountId"}/workers/d1`,
					plans: (0, e.BC)`/${"accountId"}/workers/plans`,
					purchase: (0, e.BC)`/${"accountId"}/workers/plans/purchase`,
					standardOptIn: (0, e.BC)`/${"accountId"}/workers/standard/opt-in`,
					kvNamespace: (0, e.BC)`/${"accountId"}/workers/kv/namespaces/${"namespaceId"}`,
					d1Database: (0, e.BC)`/${"accountId"}/workers/d1/databases/${"databaseId"}`,
					editServiceScript: (0, e.BC)`/${"accountId"}/workers/services/edit/${"serviceId"}/${"environmentName"}`,
					durableObjectDetails: (0, e.BC)`/${"accountId"}/workers/durable-objects/view/${"namespaceId"}`,
					durableObjectDetailsSettings: (0, e.BC)`/${"accountId"}/workers/durable-objects/view/${"namespaceId"}/settings`,
					manageSubscriptions: (0, e.BC)`/${"accountId"}/billing/subscriptions`,
					manageNotifications: (0, e.BC)`/${"accountId"}/notifications`,
					servicesRoot: (0, e.BC)`/${"accountId"}/workers/services`,
					logsLive: (0, e.BC)`/${"accountId"}/workers/services/live-logs/${"serviceId"}/${"environmentName"}`,
					cronEvents: (0, e.BC)`/${"accountId"}/workers/services/cron-events/${"serviceId"}/${"environmentName"}`,
					createService: (0, e.BC)`/${"accountId"}/workers/services/new`,
					manageService: (0, e.BC)`/${"accountId"}/workers/services/view/${"serviceId"}/${"environmentName"}/manage`,
					renameService: (0, e.BC)`/${"accountId"}/workers/services/${"serviceId"}/rename`,
					serviceDetailsRoot: (0, e.BC)`/${"accountId"}/workers/services/view/${"serviceId"}`,
					serviceDetails: (0, e.BC)`/${"accountId"}/workers/services/view/${"serviceId"}/${"environmentName"}`,
					serviceDetailsMetrics: (0, e.BC)`/${"accountId"}/workers/services/view/${"serviceId"}/${"environmentName"}/metrics`,
					serviceDetailsChart: (0, e.BC)`/${"accountId"}/workers/services/view/${"serviceId"}/${"environmentName"}/metrics/charts/${"chart"}`,
					serviceDetailsBuilds: (0, e.BC)`/${"accountId"}/workers/services/view/${"serviceId"}/${"environmentName"}/builds`,
					serviceDetailsBuildDetails: (0, e.BC)`/${"accountId"}/workers/services/view/${"serviceId"}/${"environmentName"}/builds/${"build_uuid"}`,
					serviceDetailsIntegrationsFlow: (0, e.BC)`/${"accountId"}/workers/services/${"serviceId"}/${"environmentName"}/${"integrationId"}/integrations-setup`,
					serviceDetailsTriggers: (0, e.BC)`/${"accountId"}/workers/services/view/${"serviceId"}/${"environmentName"}/triggers`,
					serviceDetailsTriggersV2: (0, e.BC)`/${"accountId"}/workers/services/view/${"serviceId"}/${"environmentName"}/settings#domains`,
					serviceDetailsIntegrations: (0, e.BC)`/${"accountId"}/workers/services/view/${"serviceId"}/${"environmentName"}/integrations`,
					serviceDetailsSettings: (0, e.BC)`/${"accountId"}/workers/services/view/${"serviceId"}/${"environmentName"}/settings`,
					serviceDetailsSettingsGeneral: (0, e.BC)`/${"accountId"}/workers/services/view/${"serviceId"}/${"environmentName"}/settings/general`,
					serviceDetailsSettingsGeneralV2: (0, e.BC)`/${"accountId"}/workers/services/view/${"serviceId"}/${"environmentName"}/settings#general`,
					serviceDetailsSettingsBindings: (0, e.BC)`/${"accountId"}/workers/services/view/${"serviceId"}/${"environmentName"}/settings/bindings`,
					serviceDetailsSettingsBindingsV2: (0, e.BC)`/${"accountId"}/workers/services/view/${"serviceId"}/${"environmentName"}/settings#bindings`,
					serviceDetailsSettingsBuilds: (0, e.BC)`/${"accountId"}/workers/services/view/${"serviceId"}/${"environmentName"}/settings/builds`,
					serviceDetailsSettingsBuildsV2: (0, e.BC)`/${"accountId"}/workers/services/view/${"serviceId"}/${"environmentName"}/settings#builds`,
					serviceDetailsSettingsTriggers: (0, e.BC)`/${"accountId"}/workers/services/view/${"serviceId"}/${"environmentName"}/settings/triggers`,
					serviceDetailsSettingsTriggersV2: (0, e.BC)`/${"accountId"}/workers/services/view/${"serviceId"}/${"environmentName"}/settings#trigger-events`,
					serviceDetailsSettingsObservabilityV2: (0, e.BC)`/${"accountId"}/workers/services/view/${"serviceId"}/${"environmentName"}/settings#observability`,
					serviceDetailsObservabilityLogs: (0, e.BC)`/${"accountId"}/workers/services/view/${"serviceId"}/${"environmentName"}/observability/logs`,
					serviceDetailsManage: (0, e.BC)`/${"accountId"}/workers/services/view/${"serviceId"}/${"environmentName"}/manage`,
					serviceDetailsRename: (0, e.BC)`/${"accountId"}/workers/services/view/${"serviceId"}/${"environmentName"}/rename`,
					createDeployment: (0, e.BC)`/${"accountId"}/workers/services/${"serviceId"}/${"environmentName"}/deploy-version`,
					deploymentHistory: (0, e.BC)`/${"accountId"}/workers/services/${"serviceId"}/${"environmentName"}/deployment-history`,
					createEnvironment: (0, e.BC)`/${"accountId"}/workers/services/${"serviceId"}/${"environmentName"}/environment/new`,
					apiKey: (0, e.BC)`/profile/api-tokens`,
					signUp: (0, e.BC)`/sign-up/workers`,
					dns: (0, e.BC)`/${"accountId"}/${"zoneName"}/dns`,
					ssl: (0, e.BC)`/${"accountId"}/${"zoneName"}/ssl-tls/edge-certificates`,
					analyticsEngine: (0, e.BC)`/${"accountId"}/workers/analytics-engine`,
					emailRouting: (0, e.BC)`/${"accountId"}/${"zoneName"}/email/routing/routes`,
					emailRoutingRule: (0, e.BC)`/${"accountId"}/${"zoneName"}/email/routing/routes/${"ruleId"}`,
					zones: (0, e.BC)`/${"accountId"}`,
					developerPlatform_workers_create: (0, e.BC)`/${"accountId"}/developer-platform/workers/onboarding`,
					developerPlatform_workers_success: (0, e.BC)`/${"accountId"}/developer-platform/workers/success`,
					logpush: (0, e.BC)`/${"accountId"}/logs`,
					members: (0, e.BC)`/${"accountId"}/members`
				},
				m = "https://cron-triggers.cloudflareworkers.com",
				a = {
					accountMtlsCertificates: (0, e.BC)`/accounts/${"accountId"}/mtls_certificates`,
					accountLogpushJobs: (0, e.BC)`/accounts/${"accountId"}/logpush/jobs`,
					accountSettings: (0, e.BC)`/accounts/${"accountId"}/workers/account-settings`,
					builds: {
						build: (0, e.BC)`/accounts/${"accountId"}/builds/builds/${"build_uuid"}`,
						cancelBuild: (0, e.BC)`/accounts/${"accountId"}/builds/builds/${"build_uuid"}/cancel`,
						retryBuild: (0, e.BC)`/accounts/${"accountId"}/builds/triggers/${"trigger_uuid"}/builds`,
						latestBuildsByWorkers: (0, e.BC)`/accounts/${"accountId"}/builds/builds/latest`,
						buildLogs: (0, e.BC)`/accounts/${"accountId"}/builds/builds/${"build_uuid"}/logs`,
						buildsByScriptId: (0, e.BC)`/accounts/${"accountId"}/builds/workers/${"scriptTag"}/builds`,
						buildsByVersionIds: (0, e.BC)`/accounts/${"accountId"}/builds/builds`,
						buildTokens: (0, e.BC)`/accounts/${"accountId"}/builds/tokens`,
						githubUserType: (0, e.BC)`/accounts/${"accountId"}/builds/providers/github/users/${"username"}/type`,
						repoConnections: (0, e.BC)`/accounts/${"accountId"}/builds/repos/connections`,
						repoConnection: (0, e.BC)`/accounts/${"accountId"}/builds/repos/connections/${"repo_connection_uuid"}`,
						triggers: (0, e.BC)`/accounts/${"accountId"}/builds/triggers`,
						trigger: (0, e.BC)`/accounts/${"accountId"}/builds/triggers/${"trigger_uuid"}`,
						purgeTriggerCache: (0, e.BC)`/accounts/${"accountId"}/builds/triggers/${"trigger_uuid"}/purge_build_cache`,
						triggerEnvironmentVariables: (0, e.BC)`/accounts/${"accountId"}/builds/triggers/${"trigger_uuid"}/environment_variables`,
						triggerEnvironmentVariable: (0, e.BC)`/accounts/${"accountId"}/builds/triggers/${"trigger_uuid"}/environment_variables/${"environment_variable_key"}`,
						workerTriggers: (0, e.BC)`/accounts/${"accountId"}/builds/workers/${"scriptTag"}/triggers`,
						configAutofill: (0, e.BC)`/accounts/${"accountId"}/builds/repos/${"providerType"}/${"providerAccountId"}/${"repoId"}/config_autofill?branch=${"branch"}&root_directory=${"rootDirectory"}`
					},
					certificates: (0, e.BC)`/zones/${"zoneId"}/ssl/certificate_packs/${"certId"}`,
					createApiToken: (0, e.BC)`/user/tokens`,
					createTail: (0, e.BC)`/accounts/${"accountId"}/workers/scripts/${"workerId"}/tails`,
					deleteApiToken: (0, e.BC)`/user/tokens/${"tokenId"}`,
					deleteTail: (0, e.BC)`/accounts/${"accountId"}/workers/scripts/${"workerId"}/tails/${"tailId"}`,
					deployments: (0, e.BC)`/accounts/${"accountId"}/workers/scripts/${"scriptName"}/deployments`,
					describeCron: `${m}/describe`,
					dnsRecords: (0, e.BC)`/zones/${"zoneId"}/dns_records`,
					dnsRoute: (0, e.BC)`/accounts/${"accountId"}/workers/domains/records/${"recordId"}`,
					dnsRouteChangeset: (0, e.BC)`/accounts/${"accountId"}/workers/domains/changeset`,
					dnsRoutes: (0, e.BC)`/accounts/${"accountId"}/workers/domains/records`,
					durableObjectNamespace: (0, e.BC)`/accounts/${"accountId"}/workers/durable_objects/namespaces/${"namespaceId"}`,
					durableObjectNamespaces: (0, e.BC)`/accounts/${"accountId"}/workers/durable_objects/namespaces`,
					durableObjectsInNamespace: (0, e.BC)`/accounts/${"accountId"}/workers/durable_objects/namespaces/${"namespaceId"}/objects`,
					edgePreview: (0, e.BC)`/accounts/${"accountId"}/workers/services/${"serviceId"}/environments/${"environmentName"}/edge-preview`,
					edgePreviewInit: (0, e.BC)`/accounts/${"accountId"}/workers/subdomain/edge-preview`,
					edgePreviewZoneInit: (0, e.BC)`/zones/${"zone"}/workers/edge-preview`,
					enableDurableObjects: (0, e.BC)`/accounts/${"accountId"}/flags/products/edgeworker/changes`,
					featureFlagSettings: (0, e.BC)`/accounts/${"accountId"}/workers/settings`,
					integrations: {
						getIntegrations: (0, e.BC)`/accounts/${"accountId"}/integrations`,
						getManifest: (0, e.BC)`/accounts/${"accountId"}/integrations/${"integrationId"}/manifests/${"version"}`,
						invokeGetDataAction: (0, e.BC)`/accounts/${"accountId"}/integrations/${"integrationId"}/manifests/${"version"}/invoke/get-data/${"action"}`,
						invokeGetOptionsAction: (0, e.BC)`/accounts/${"accountId"}/integrations/${"integrationId"}/manifests/${"version"}/invoke/get-options/${"action"}`,
						invokeSubmitFormAction: (0, e.BC)`/accounts/${"accountId"}/integrations/${"integrationId"}/manifests/${"version"}/invoke/submit-form/${"action"}`,
						invokeSubmitTokenAction: (0, e.BC)`/accounts/${"accountId"}/integrations/${"integrationId"}/manifests/${"version"}/invoke/submit-token/${"action"}`,
						invokeUninstallAction: (0, e.BC)`/accounts/${"accountId"}/integrations/${"integrationId"}/manifests/${"version"}/invoke/uninstall/${"action"}`,
						invokeRefAction: (0, e.BC)`/accounts/${"accountId"}/integrations/${"integrationId"}/manifests/${"version"}/invoke/ref/${"action"}`,
						integrationsPreviewWorker: (0, e.BC)`/accounts/${"accountId"}/integrations/${"integrationId"}/manifests/${"version"}/invoke/preview/${"action"}`,
						integrationsDeployWorker: (0, e.BC)`/accounts/${"accountId"}/integrations/${"integrationId"}/manifests/${"version"}/invoke/deploy/${"action"}`,
						oauthAuthorize: (0, e.BC)`/accounts/${"accountId"}/integrations/${"integrationId"}/manifests/${"version"}/oauth/${"oauthProviderId"}/authorize`,
						oauthCallback: (0, e.BC)`/oauth/callback`,
						resourceStates: (0, e.BC)`/accounts/${"accountId"}/integrations/${"integrationId"}/manifests/${"version"}/resource-states`,
						resourceState: (0, e.BC)`/accounts/${"accountId"}/integrations/${"integrationId"}/manifests/${"version"}/resource-states/${"resourceName"}`,
						asset: (0, e.BC)`/accounts/${"accountId"}/integrations/${"integrationId"}/manifests/${"version"}/assets`
					},
					kvNamespace: (0, e.BC)`/accounts/${"accountId"}/storage/kv/namespaces/${"namespaceId"}`,
					kvNamespaces: (0, e.BC)`/accounts/${"accountId"}/storage/kv/namespaces`,
					newVersions: (0, e.BC)`/accounts/${"accountId"}/workers/scripts/${"scriptName"}/versions`,
					nextCron: `${m}/next`,
					outboundDispatchers: (0, e.BC)`/accounts/${"accountId"}/workers/dispatch_outbounds/by-outbound/${"serviceId"}/environment/${"environmentName"}`,
					permissionGroups: (0, e.BC)`/user/tokens/permission_groups`,
					promoteDeployment: (0, e.BC)`/accounts/${"accountId"}/workers/services/${"serviceId"}/environments/${"sourceEnv"}/promote/${"targetEnv"}`,
					queues: (0, e.BC)`/accounts/${"accountId"}/workers/queues`,
					service: (0, e.BC)`/accounts/${"accountId"}/workers/services/${"serviceId"}`,
					serviceBindings: (0, e.BC)`/accounts/${"accountId"}/workers/services/${"serviceId"}/environments/${"environmentName"}/bindings`,
					serviceBindingsReferences: (0, e.BC)`/accounts/${"accountId"}/workers/services/${"serviceId"}/environments/${"environmentName"}/references`,
					serviceCopyEnvironment: (0, e.BC)`/accounts/${"accountId"}/workers/services/${"serviceId"}/environments/${"environmentName"}/copy/${"toEnvironmentName"}`,
					services: (0, e.BC)`/accounts/${"accountId"}/workers/services`,
					serviceSettings: (0, e.BC)`/accounts/${"accountId"}/workers/services/${"serviceId"}/environments/${"environmentName"}/settings`,
					scriptsWithSubdomain: (0, e.BC)`/accounts/${"accountId"}/workers/scripts?include_subdomain_availability=true`,
					scriptsByHandler: (0, e.BC)`/accounts/${"accountId"}/workers/scripts?handlers=${"handler"}`,
					scriptSettingsV2: (0, e.BC)`/accounts/${"accountId"}/workers/scripts/${"serviceId"}/script-settings`,
					serviceCreateTail: (0, e.BC)`/accounts/${"accountId"}/workers/services/${"serviceId"}/environments/${"environmentName"}/tails`,
					serviceDeleteTail: (0, e.BC)`/accounts/${"accountId"}/workers/services/${"serviceId"}/environments/${"environmentName"}/tails/${"tailId"}`,
					serviceEmailTriggers: (0, e.BC)`/accounts/${"accountId"}/email/routing/rules`,
					serviceEnvironment: (0, e.BC)`/accounts/${"accountId"}/workers/services/${"serviceId"}/environments/${"environmentName"}`,
					servicePreview: (0, e.BC)`/accounts/${"accountId"}/workers/services/${"serviceId"}/environments/${"environmentName"}/preview`,
					serviceRoutes: (0, e.BC)`/accounts/${"accountId"}/workers/services/${"serviceId"}/environments/${"environmentName"}/routes`,
					serviceSchedules: (0, e.BC)`/accounts/${"accountId"}/workers/services/${"serviceId"}/environments/${"environmentName"}/schedules`,
					serviceScript: (0, e.BC)`/accounts/${"accountId"}/workers/services/${"serviceId"}/environments/${"environmentName"}/content`,
					serviceScriptRoutes: (0, e.BC)`/accounts/${"accountId"}/workers/scripts/${"workerId"}/routes/${"routeId"}`,
					serviceScriptV2: (0, e.BC)`/accounts/${"accountId"}/workers/services/${"serviceId"}/environments/${"environmentName"}/content/v2?omit=sourcemaps`,
					serviceSubdomain: (0, e.BC)`/accounts/${"accountId"}/workers/services/${"serviceId"}/environments/${"environmentName"}/subdomain`,
					serviceUsageModel: (0, e.BC)`/accounts/${"accountId"}/workers/services/${"serviceId"}/environments/${"environmentName"}/usage-model`,
					spectrum: (0, e.BC)`/zones/${"zoneId"}/spectrum/apps/dns`,
					standard: (0, e.BC)`/accounts/${"accountId"}/workers/standard`,
					subdomain: (0, e.BC)`/accounts/${"accountId"}/workers/subdomain`,
					subdomainCertStatus: (0, e.BC)`/accounts/${"accountId"}/workers/subdomain/ssl`,
					subdomainDeployed: (0, e.BC)`/accounts/${"accountId"}/workers/scripts/${"workerId"}/subdomain`,
					tailsByConsumer: (0, e.BC)`/accounts/${"accountId"}/workers/tails/by-consumer/${"serviceId"}/environment/${"environment"}`,
					validateCron: `${m}/validate`,
					versions: (0, e.BC)`/accounts/${"accountId"}/workers/deployments/by-script/${"scriptTag"}`,
					version: (0, e.BC)`/accounts/${"accountId"}/workers/deployments/by-script/${"scriptTag"}/detail/${"versionTag"}`,
					workersObservability: {
						telemetry: {
							query: (0, e.BC)`/accounts/${"accountId"}/workers/observability/telemetry/query`,
							keys: (0, e.BC)`/accounts/${"accountId"}/workers/observability/telemetry/keys`,
							values: (0, e.BC)`/accounts/${"accountId"}/workers/observability/telemetry/values`
						},
						usage: (0, e.BC)`/accounts/${"accountId"}/workers/observability/usage`,
						usageStatuses: (0, e.BC)`/accounts/${"accountId"}/workers/observability/usage-statuses`,
						liveTail: (0, e.BC)`/accounts/${"accountId"}/workers/observability/telemetry/live-tail`
					},
					workersScript: (0, e.BC)`/accounts/${"accountId"}/workers/scripts/${"scriptName"}`,
					workerScriptContent: (0, e.BC)`/accounts/${"accountId"}/workers/scripts/${"scriptName"}/content`,
					workerScriptSettings: (0, e.BC)`/accounts/${"accountId"}/workers/scripts/${"scriptName"}/settings`,
					workerUsageModel: (0, e.BC)`/accounts/${"accountId"}/workers/scripts/${"workerId"}/usage-model`,
					zones: (0, e.BC)`/zones`
				}
		},
		"../react/pages/zoneless-workers/utils/swrConfig.ts": function(W, v, t) {
			"use strict";
			t.d(v, {
				MN: function() {
					return s
				},
				Yg: function() {
					return l
				},
				i$: function() {
					return d
				},
				l3: function() {
					return m
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-http/@cloudflare/util-http"),
				o = t.n(e);
			const s = async ([a, u]) => (await e.post("/graphql", {
				headers: {
					"content-type": "application/json"
				},
				body: JSON.stringify({
					query: a,
					variables: u
				})
			})).body, d = async (...a) => (await e.get(...a)).body, l = a => async (u, E) => {
				const n = await fetch(u, E).then(r => r.json());
				return a.assertDecode(n)
			}, m = async (...a) => (await d(...a)).result;
			v.ZP = {
				fetcher: a => Array.isArray(a) ? m(...a) : m(a)
			}
		},
		"../react/shims/focus-visible.js": function() {
			(function(W, v) {
				v()
			})(this, function() {
				"use strict";

				function W() {
					var t = !0,
						e = !1,
						o = null,
						s = {
							text: !0,
							search: !0,
							url: !0,
							tel: !0,
							email: !0,
							password: !0,
							number: !0,
							date: !0,
							month: !0,
							week: !0,
							time: !0,
							datetime: !0,
							"datetime-local": !0
						};

					function d(y) {
						return !!(y && y !== document && y.nodeName !== "HTML" && y.nodeName !== "BODY" && "classList" in y && "contains" in y.classList)
					}

					function l(y) {
						var T = y.type,
							O = y.tagName;
						return !!(O == "INPUT" && s[T] && !y.readOnly || O == "TEXTAREA" && !y.readOnly || y.isContentEditable)
					}

					function m(y) {
						y.getAttribute("is-focus-visible") !== "" && y.setAttribute("is-focus-visible", "")
					}

					function a(y) {
						y.getAttribute("is-focus-visible") === "" && y.removeAttribute("is-focus-visible")
					}

					function u(y) {
						d(document.activeElement) && m(document.activeElement), t = !0
					}

					function E(y) {
						t = !1
					}

					function n(y) {
						!d(y.target) || (t || l(y.target)) && m(y.target)
					}

					function r(y) {
						!d(y.target) || y.target.hasAttribute("is-focus-visible") && (e = !0, window.clearTimeout(o), o = window.setTimeout(function() {
							e = !1, window.clearTimeout(o)
						}, 100), a(y.target))
					}

					function i(y) {
						document.visibilityState == "hidden" && (e && (t = !0), p())
					}

					function p() {
						document.addEventListener("mousemove", _), document.addEventListener("mousedown", _), document.addEventListener("mouseup", _), document.addEventListener("pointermove", _), document.addEventListener("pointerdown", _), document.addEventListener("pointerup", _), document.addEventListener("touchmove", _), document.addEventListener("touchstart", _), document.addEventListener("touchend", _)
					}

					function c() {
						document.removeEventListener("mousemove", _), document.removeEventListener("mousedown", _), document.removeEventListener("mouseup", _), document.removeEventListener("pointermove", _), document.removeEventListener("pointerdown", _), document.removeEventListener("pointerup", _), document.removeEventListener("touchmove", _), document.removeEventListener("touchstart", _), document.removeEventListener("touchend", _)
					}

					function _(y) {
						y.target.nodeName.toLowerCase() !== "html" && (t = !1, c())
					}
					document.addEventListener("keydown", u, !0), document.addEventListener("mousedown", E, !0), document.addEventListener("pointerdown", E, !0), document.addEventListener("touchstart", E, !0), document.addEventListener("focus", n, !0), document.addEventListener("blur", r, !0), document.addEventListener("visibilitychange", i, !0), p(), document.documentElement.setAttribute("js-focus-visible-polyfill-available", "")
				}

				function v(t) {
					var e;

					function o() {
						e || (e = !0, t())
					} ["interactive", "complete"].indexOf(document.readyState) >= 0 ? t() : (e = !1, document.addEventListener("DOMContentLoaded", o, !1), window.addEventListener("load", o, !1))
				}
				typeof document != "undefined" && v(W)
			})
		},
		"../react/utils/bootstrap.ts": function(W, v, t) {
			"use strict";
			t.d(v, {
				$8: function() {
					return o
				},
				Ak: function() {
					return e
				},
				Hk: function() {
					return d
				},
				gm: function() {
					return s
				}
			});
			const e = () => {
					var l, m, a;
					return (l = window) === null || l === void 0 || (m = l.bootstrap) === null || m === void 0 || (a = m.data) === null || a === void 0 ? void 0 : a.security_token
				},
				o = () => {
					var l, m, a;
					return !!((l = t.g.bootstrap) === null || l === void 0 || (m = l.data) === null || m === void 0 || (a = m.user) === null || a === void 0 ? void 0 : a.id)
				},
				s = () => {
					var l, m;
					return !!((l = t.g.bootstrap) === null || l === void 0 || (m = l.data) === null || m === void 0 ? void 0 : m.is_kendo)
				},
				d = () => {
					var l, m, a, u;
					return (l = window) === null || l === void 0 || (m = l.bootstrap) === null || m === void 0 || (a = m.data) === null || a === void 0 || (u = a.user) === null || u === void 0 ? void 0 : u.primary_account_tag
				}
		},
		"../react/utils/cookiePreferences.ts": function(W, v, t) {
			"use strict";
			t.d(v, {
				O5: function() {
					return d
				},
				Xm: function() {
					return s
				},
				kT: function() {
					return a
				},
				wV: function() {
					return u
				}
			});
			var e = t("../../../../node_modules/cookie/index.js");
			const o = () => {
					var n;
					return ((n = window) === null || n === void 0 ? void 0 : n.OnetrustActiveGroups) || ""
				},
				s = () => (o() || "").indexOf("C0002") !== -1,
				d = () => (o() || "").indexOf("C0003") !== -1,
				l = () => (o() || "").indexOf("C0004") !== -1,
				m = () => (o() || "").indexOf("C0005") !== -1,
				a = n => {
					const r = ".cloudflare.com";
					document.cookie = `${n}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;domain=${r}`
				},
				u = () => {
					var n;
					const r = (n = window.OneTrust) === null || n === void 0 ? void 0 : n.getGeolocationData();
					return (r == null ? void 0 : r.country) || ""
				},
				E = () => parse(document.cookie)
		},
		"../react/utils/i18n.ts": function(W, v, t) {
			"use strict";
			t.d(v, {
				AI: function() {
					return S
				},
				Kd: function() {
					return r
				},
				S8: function() {
					return h
				},
				ZW: function() {
					return u
				},
				ay: function() {
					return g
				},
				fh: function() {
					return C
				},
				i_: function() {
					return i
				},
				ly: function() {
					return n
				},
				th: function() {
					return a
				},
				ti: function() {
					return c
				}
			});
			var e = t("../../../../node_modules/moment/moment.js"),
				o = t.n(e),
				s = t("../../../common/intl/intl-types/src/index.ts"),
				d = t("../../../common/util/types/src/utils/index.ts"),
				l = t("../../../../node_modules/@cloudflare/util-cache/es/index.js"),
				m = t("../../../../node_modules/cookie/index.js");
			const a = "cf-sync-locale-with-cps",
				u = s.Q.en_US,
				E = "en_US",
				n = "cf-locale";

			function r() {
				const R = (0, m.parse)(document.cookie);
				return l.Z.get(n) || R[n] || null
			}

			function i(R) {
				document.cookie = (0, m.serialize)(n, R, {
					path: "/",
					maxAge: 31536e3
				}), l.Z.set(n, R)
			}

			function p() {
				document.cookie = serializeCookie(n, "", {
					path: "/",
					maxAge: 0
				}), cache.remove(n)
			}
			const c = R => (0, d.Yd)(s.Q).find(A => s.Q[A] === R) || E,
				_ = [],
				y = [],
				T = [s.Q.de_DE, s.Q.en_US, s.Q.es_ES, s.Q.fr_FR, s.Q.it_IT, s.Q.pt_BR, s.Q.ko_KR, s.Q.ja_JP, s.Q.zh_CN, s.Q.zh_TW],
				O = {
					test: [...T, ...y, ..._],
					development: [...T, ...y, ..._],
					staging: [...T, ...y, ..._],
					production: [...T, ...y]
				},
				h = R => {
					const A = s.Q[R];
					return O.production.includes(A)
				},
				S = () => Object.keys(s.Q).filter(R => h(R)),
				g = R => {
					const A = s.Q[R];
					return y.includes(A)
				},
				C = R => M[R],
				M = {
					de_DE: "Deutsch",
					en_US: "English",
					es_CL: "Espa\xF1ol",
					es_EC: "Espa\xF1ol",
					es_ES: "Espa\xF1ol",
					es_MX: "Espa\xF1ol",
					es_PE: "Espa\xF1ol",
					fr_FR: "Fran\xE7ais",
					it_IT: "Italiano",
					pt_BR: "Portugu\xEAs",
					ko_KR: "\uD55C\uAD6D\uC5B4",
					ja_JP: "\u65E5\u672C\u8A9E",
					zh_CN: "\u7B80\u4F53\u4E2D\u6587",
					zh_TW: "\u7E41\u9AD4\u4E2D\u6587"
				},
				b = o().locale();
			o().defineLocale("es-cl", {
				parentLocale: "es",
				longDateFormat: {
					LT: "H:mm",
					LTS: "H:mm:ss",
					L: "DD-MM-YYYY",
					LL: "D [de] MMMM [de] YYYY",
					LLL: "D [de] MMMM [de] YYYY H:mm",
					LLLL: "dddd, D [de] MMMM [de] YYYY H:mm"
				}
			}), o().defineLocale("es-ec", {
				parentLocale: "es",
				longDateFormat: {
					LT: "H:mm",
					LTS: "H:mm:ss",
					L: "D/M/YYYY",
					LL: "D [de] MMMM [de] YYYY",
					LLL: "D [de] MMMM [de] YYYY H:mm",
					LLLL: "dddd, D [de] MMMM [de] YYYY H:mm"
				}
			}), o().defineLocale("es-mx", {
				parentLocale: "es",
				longDateFormat: {
					LT: "h:mm a",
					LTS: "h:mm:ss a",
					L: "D/MM/YYYY",
					LL: "D [de] MMMM [de] YYYY",
					LLL: "D [de] MMMM [de] YYYY h:mm a",
					LLLL: "dddd, D [de] MMMM [de] YYYY h:mm a"
				}
			}), o().defineLocale("es-pe", {
				parentLocale: "es",
				longDateFormat: {
					LT: "HH:mm",
					LTS: "HH:mm:ss",
					L: "D/M/YYYY",
					LL: "D [de] MMMM [de] YYYY",
					LLL: "D [de] MMMM [de] YYYY HH:mm",
					LLLL: "dddd, D [de] MMMM [de] YYYY HH:mm"
				}
			}), o().locale(b)
		},
		"../react/utils/translator.tsx": function(W, v, t) {
			"use strict";
			t.d(v, {
				QT: function() {
					return c
				},
				Vb: function() {
					return u
				},
				Yi: function() {
					return n
				},
				ZP: function() {
					return a
				},
				_m: function() {
					return r
				},
				cC: function() {
					return i
				},
				oc: function() {
					return p
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-markdown/es/index.js"),
				o = t("../../../common/intl/intl-core/src/Translator.ts"),
				s = t("webpack/sharing/consume/default/@cloudflare/intl-react/@cloudflare/intl-react"),
				d = t.n(s),
				l = t("../flags.ts");
			const m = new o.Z({
				pseudoLoc: (0, l.J8)("is_pseudo_loc")
			});

			function a(_, ...y) {
				return m.t(_, ...y)
			}
			const u = m;

			function E(_, ...y) {
				return markdown(a(_, y))
			}

			function n(_) {
				if (Number(_) !== 0) {
					if (_ % 86400 == 0) return a("time.num_days", {
						smart_count: _ / 86400
					});
					if (_ % 3600 == 0) return a("time.num_hours", {
						smart_count: _ / 3600
					});
					if (_ % 60 == 0) return a("time.num_minutes", {
						smart_count: _ / 60
					})
				}
				return a("time.num_seconds", {
					smart_count: _
				})
			}

			function r(_, y) {
				return _ in y ? y[_] : void 0
			}
			const i = s.Trans,
				p = s.I18n,
				c = s.useI18n
		},
		"../react/utils/url.ts": function(W, v, t) {
			"use strict";
			t.d(v, {
				Ct: function() {
					return g
				},
				Fl: function() {
					return X
				},
				KT: function() {
					return Ee
				},
				NF: function() {
					return y
				},
				Nw: function() {
					return h
				},
				Pd: function() {
					return O
				},
				Uh: function() {
					return j
				},
				Y_: function() {
					return _
				},
				e1: function() {
					return S
				},
				el: function() {
					return H
				},
				hW: function() {
					return Q
				},
				pu: function() {
					return oe
				},
				qR: function() {
					return P
				},
				td: function() {
					return T
				},
				uW: function() {
					return te
				}
			});
			var e = t("../../../../node_modules/query-string/query-string.js"),
				o = t.n(e),
				s = t("../../../../node_modules/@cloudflare/util-regex/es/index.js"),
				d = t("../react/pages/stream/routes.ts"),
				l = t("../react/pages/r2/routes.ts"),
				m = t("../react/pages/zoneless-workers/routes.ts"),
				a = t("../react/pages/pages/routes.ts"),
				u = t("../react/pages/d1/routes.ts");

			function E(B) {
				for (var I = 1; I < arguments.length; I++) {
					var x = arguments[I] != null ? Object(arguments[I]) : {},
						q = Object.keys(x);
					typeof Object.getOwnPropertySymbols == "function" && q.push.apply(q, Object.getOwnPropertySymbols(x).filter(function(ee) {
						return Object.getOwnPropertyDescriptor(x, ee).enumerable
					})), q.forEach(function(ee) {
						n(B, ee, x[ee])
					})
				}
				return B
			}

			function n(B, I, x) {
				return I = r(I), I in B ? Object.defineProperty(B, I, {
					value: x,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : B[I] = x, B
			}

			function r(B) {
				var I = i(B, "string");
				return typeof I == "symbol" ? I : String(I)
			}

			function i(B, I) {
				if (typeof B != "object" || B === null) return B;
				var x = B[Symbol.toPrimitive];
				if (x !== void 0) {
					var q = x.call(B, I || "default");
					if (typeof q != "object") return q;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (I === "string" ? String : Number)(B)
			}
			const {
				endsWithSlash: p
			} = s.default, c = (B, I) => {
				const x = B.replace(p, "").split("/");
				return x.slice(0, 2).concat([I]).concat(x.slice(3)).join("/")
			}, _ = () => window.location.hostname.includes("dash.staging.cloudflare") || window.location.hostname.includes("dash.cloudflare"), y = B => `/${B.replace(p,"").replace(/^\//,"")}`, T = B => h("add-site", B), O = B => h("billing", B), h = (B, I) => I ? `/${I}${B?`/${B}`:""}` : `/?to=/:account/${B}`, S = () => {
				const B = location ? location.pathname.match(/^\/([0-9a-f]{32})/) || location.pathname.match(/^\/a\/([0-9a-f]{32})/) : null;
				return B ? B[1] : null
			}, g = (B, I) => o().stringify(E({}, o().parse(B), I)), C = (B = "") => B.toString().replace(/([\/]{1,})$/, ""), M = ["/login", "/sign-up", "/two-factor", "/forgot-password", "/password-reset", "/forgot-email", "/login-help", "/profile", "/zones", "/organizations"], b = /^\/(\w*)\/(([^./]*\.[^./]*))+(\/.*)?/, R = /^\/(\w{32,})(\/[^.]*)?/, A = B => M.includes(B), L = B => !A(B), P = B => !A(B) && R.test(B), H = B => !A(B) && b.test(B), K = B => b.exec(B), Q = B => {
				if (H(B)) return B.split("/").filter(I => I.length > 0)[1]
			}, pe = B => R.exec(B), te = B => {
				if (P(B)) {
					const I = pe(B);
					if (I) return I[1]
				}
			}, Y = B => P(B) && B.split("/")[2] === "register-domain", ie = B => Y(B) ? B.split("/") : null, Z = B => {
				if (H(B)) {
					const [, , , I, x, q, ee, de] = B.split("/");
					return I === "traffic" && x === "load-balancing" && q === "pools" && ee === "edit" && de
				}
			}, j = B => {
				const I = ie(B);
				if (I) return I[3]
			}, $ = (B, I) => {
				var x, q;
				return ((x = B.pattern.match(/\:/g)) !== null && x !== void 0 ? x : []).length - ((q = I.pattern.match(/\:/g)) !== null && q !== void 0 ? q : []).length
			}, F = [...Object.values(d.C), ...Object.values(l._j), ...Object.values(m._j), ...Object.values(a._j), ...Object.values(u._)].sort($);

			function X(B) {
				if (!L(B)) return B;
				for (const de of F)
					if (de.expression.test(B)) return de.pattern;
				const I = ie(B);
				if (I) {
					const [, , de, , ...he] = I;
					return `/:accountId/${de}/:domainName/${he.join("/")}`
				}
				if (Z(B)) return "/:accountId/:zoneName/traffic/load-balancing/pools/edit/:poolId";
				const q = K(B);
				if (q) {
					const [, , , , de] = q;
					return `/:accountId/:zoneName${de||""}`
				}
				const ee = pe(B);
				if (ee) {
					const [, , de] = ee;
					return `/:accountId${de||""}`
				}
				return B
			}

			function oe(B) {
				if (!!B) try {
					const x = B.split(".").pop();
					if (x && x.length > 0) return x
				} catch {}
			}

			function Ee(B, I = document.location.href) {
				try {
					const x = new URL(B),
						q = new URL(I);
					if (x.origin === q.origin) return `${x.pathname}${x.search}${x.hash}`
				} catch {}
			}
		},
		"../react/utils/useDomainConnectRedirect.ts": function(W, v, t) {
			"use strict";
			t.d(v, {
				r: function() {
					return u
				},
				y: function() {
					return E
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t.n(e),
				s = t("../../../../node_modules/@cloudflare/util-cache/es/index.js"),
				d = t("../react/common/hooks/useGate.ts"),
				l = t("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				m = t.n(l);
			const a = /^\/domainconnect\/v2\/domaintemplates\//i,
				u = "domain-connect-redirect",
				E = () => {
					const n = !!(0, d.Z)("domain-connect-redirect-gate"),
						r = (0, l.useLocation)();
					(0, e.useEffect)(() => {
						!n || a.test(r.pathname) && s.Z.set(u, r, 60 * 1e3)
					}, [])
				}
		},
		"../react/utils/zaraz.ts": function(W, v, t) {
			"use strict";
			t.d(v, {
				tg: function() {
					return e.tg
				},
				yn: function() {
					return e.yn
				}
			});
			var e = t("../utils/zaraz.ts")
		},
		"../react/utils/zoneLevelAccess.ts": function(W, v, t) {
			"use strict";
			t.d(v, {
				P: function() {
					return d
				},
				b: function() {
					return l
				}
			});
			var e = t("../react/common/hooks/useGate.ts"),
				o = t("../../../../node_modules/@cloudflare/gates-redux/dist/index.mjs");

			function s() {
				var m, a, u, E, n, r;
				return (m = window) === null || m === void 0 || (a = m.bootstrap) === null || a === void 0 || (u = a.data) === null || u === void 0 || (E = u.user) === null || E === void 0 || (n = E.betas) === null || n === void 0 || (r = n.some) === null || r === void 0 ? void 0 : r.call(n, i => i === "zone_level_access_beta")
			}

			function d() {
				const m = !!(0, e.Z)("zone-level-access");
				return s() || m
			}

			function l(m) {
				const a = !!(0, o.z1)("zone-level-access")(m);
				return s() || a
			}
		},
		"../utils/getDashVersion.ts": function(W, v, t) {
			"use strict";
			t.d(v, {
				p: function() {
					return s
				},
				t: function() {
					return o
				}
			});
			var e = t("../../../../node_modules/cookie/index.js");
			const o = () => {
					var d, l;
					return (d = window) === null || d === void 0 || (l = d.build) === null || l === void 0 ? void 0 : l.dashVersion
				},
				s = () => {
					var d;
					return ((0, e.parse)((d = document) === null || d === void 0 ? void 0 : d.cookie) || {}).CF_dash_version !== void 0
				}
		},
		"../utils/initSparrow.ts": function(W, v, t) {
			"use strict";
			t.d(v, {
				Wi: function() {
					return Te
				},
				IM: function() {
					return ue
				},
				yV: function() {
					return gt
				},
				Ug: function() {
					return it
				},
				v_: function() {
					return G
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				o = t.n(e),
				s = t("../react/utils/bootstrap.ts"),
				d = t("../react/app/providers/storeContainer.js"),
				l = t("../react/common/selectors/languagePreferenceSelector.ts"),
				m = t("../flags.ts"),
				a = t("../../../../node_modules/cookie/index.js"),
				u = t("../react/utils/url.ts"),
				E = t("../react/common/selectors/zoneSelectors.ts"),
				n = t("../../../../node_modules/@cloudflare/util-en-garde/es/index.js"),
				r = t("../../../../node_modules/lodash-es/memoize.js"),
				i = t("../../../../node_modules/@cloudflare/gates-redux/dist/index.mjs"),
				p = t("../utils/getDashVersion.ts"),
				c = t("../react/common/selectors/accountSelectors.ts"),
				_ = t("../react/common/selectors/entitlementsSelectors.ts");

			function y(ne) {
				for (var ae = 1; ae < arguments.length; ae++) {
					var Ce = arguments[ae] != null ? Object(arguments[ae]) : {},
						k = Object.keys(Ce);
					typeof Object.getOwnPropertySymbols == "function" && k.push.apply(k, Object.getOwnPropertySymbols(Ce).filter(function(re) {
						return Object.getOwnPropertyDescriptor(Ce, re).enumerable
					})), k.forEach(function(re) {
						T(ne, re, Ce[re])
					})
				}
				return ne
			}

			function T(ne, ae, Ce) {
				return ae = O(ae), ae in ne ? Object.defineProperty(ne, ae, {
					value: Ce,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : ne[ae] = Ce, ne
			}

			function O(ne) {
				var ae = h(ne, "string");
				return typeof ae == "symbol" ? ae : String(ae)
			}

			function h(ne, ae) {
				if (typeof ne != "object" || ne === null) return ne;
				var Ce = ne[Symbol.toPrimitive];
				if (Ce !== void 0) {
					var k = Ce.call(ne, ae || "default");
					if (typeof k != "object") return k;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (ae === "string" ? String : Number)(ne)
			}
			const S = n.eg.exact(n.eg.object({
					_ga: n.eg.string.optional,
					"AMCV_8AD56F28618A50850A495FB6%40AdobeOrg": n.eg.string.optional
				})),
				g = (0, r.Z)(ne => {
					try {
						return S.assertDecode((0, a.parse)(ne))
					} catch (ae) {
						return console.error(ae), {}
					}
				}),
				C = ne => (ae, Ce, k) => {
					try {
						const Ve = window.location.pathname,
							Je = (0, d.bh)().getState(),
							qe = g(document.cookie),
							vt = y({
								page: (0, u.Fl)(k.page || window.location.pathname),
								dashVersion: (0, p.t)()
							}, qe);
						if (ae === "identify") {
							var re, ve;
							const ut = {
								gates: (0, i.T2)(Je) || {},
								country: (re = t.g) === null || re === void 0 || (ve = re.bootstrap) === null || ve === void 0 ? void 0 : ve.ip_country
							};
							return ne(ae, Ce, y({}, vt, ut, k))
						} else {
							const ut = {
								accountId: (0, u.uW)(Ve),
								zoneName: (0, u.hW)(Ve),
								domainName: (0, u.Uh)(Ve)
							};
							if ((0, u.qR)(Ve)) {
								var Le;
								const et = (0, c.D0)(Je);
								ut.isEntAccount = !!(et == null || (Le = et.meta) === null || Le === void 0 ? void 0 : Le.has_enterprise_zones) || (0, _.p1)(Je)
							}
							if ((0, u.el)(Ve)) {
								var Ne;
								const et = (0, E.nA)(Je);
								ut.zoneId = et == null ? void 0 : et.id, ut.plan = et == null || (Ne = et.plan) === null || Ne === void 0 ? void 0 : Ne.legacy_id
							}
							return ne(ae, Ce, y({}, vt, ut, k))
						}
					} catch (Ve) {
						return console.error(Ve), ne(ae, Ce, k)
					}
				},
				M = ne => async (ae, Ce, k) => {
					try {
						return await ne(ae, Ce, k)
					} catch (re) {
						if (console.error(re), !G()) throw re;
						return {
							status: "rejected",
							reason: re
						}
					}
				};
			var b = t("../react/app/components/GlobalHeader/AddProductDropdown/index.tsx"),
				R = t("../react/common/components/filter-editor/constants/userJourney.ts"),
				A = t("../react/common/hooks/rulesets/resources/tracking.tsx"),
				L = t("../react/common/middleware/sparrow/errors.ts"),
				P = t("../react/pages/caching/tracking.tsx"),
				H = t("../react/pages/dns/dns-records/tracking.ts"),
				K = t("../react/pages/home/alerts/tracking.ts"),
				Q = t("../react/pages/home/configurations/lists/tracking.ts"),
				pe = t("../react/pages/home/configurations/dns-settings/tracking.ts"),
				te = t("../react/pages/home/domain-registration/tracking.ts"),
				Y = t("../react/pages/home/rulesets/ddos/tracking.ts"),
				ie = t("../react/pages/hyperdrive/tracking.ts"),
				Z = t("../react/pages/magic/network-monitoring/constants.ts"),
				j = t("../react/pages/magic/overview/tracking.ts"),
				$ = t("../react/pages/magic/packet-captures/constants.ts"),
				F = t("../react/pages/page-rules/tracking.ts"),
				X = t("../react/pages/pages/constants.ts"),
				oe = t("../react/pages/pipelines/tracking.ts"),
				Ee = t("../react/pages/security-center/BlockedContent/constants.ts"),
				B = t("../react/pages/security-center/tracking.ts"),
				I = t("../react/pages/security/api-shield/tracking.ts"),
				x = t("../react/pages/security/bots/tracking.ts"),
				q = t("../react/pages/security/resources/constants.tsx"),
				ee = t("../react/pages/security/page-shield/resources/index.ts"),
				de = t("../react/pages/security/analytics/security-analytics/components/logs/resources/constants.ts"),
				he = t("../react/pages/security/settings/index.tsx"),
				Se = t("../react/pages/shared-config/sparrowEvents.tsx"),
				ke = t("../react/pages/spectrum/tracking.tsx"),
				je = t("../react/pages/traffic/argo/tracking.ts"),
				we = t("../react/pages/traffic/load-balancing/tracking.ts"),
				$e = t("../react/pages/traffic/waiting-rooms/tracking.tsx"),
				Ke = t("../react/pages/turnstile/tracking.ts"),
				z = t("../react/pages/zoneless-workers/constants.ts"),
				se = t("../react/app/components/AccountHome/tracking.ts"),
				ge = t("../react/pages/security/waf/managed-rules/resources/tracking.ts");
			const me = ((ne, ae, ...Ce) => n.eg.union([n.eg.literal(ne), n.eg.literal(ae), ...Ce.map(k => n.eg.literal(k))]))("abort import", "Access Click", "Access click", "Access Promo Banner Click", "account name menu clicked", "account quick action click", "accounts table click", "ack queue message", "ACM Purchase Success", "activate coveo recommended resource TSF (3.0)", "activate helperbot diagnostic TSF (3.0)", "Activity feed cancel download modal", "Activity feed close event", "Activity feed download from modal", "Activity feed download", "Activity feed expand event", "Activity feed expand matches", "Activity feed next page", "Activity feed open download modal", "Activity feed previous page", "Add API Discovery authorization headers", "Add column", "Add Configuration Rule Settings", "add cron trigger", "Add filter", "add jwt credentials", "add jwt configuration location", "add kv key-value", "Add insight", "Add cache rule setting", "add payment method", "Add site click", "add workers route", "added api shield schema", "Addon Purchase Success", "Advanced Certificate Manager click", "agree to terms", "Analytics Secondary Nav - Tab Click", "Analytics Time Period Change", "anonymizers found", "API documentation click", "apply recommendation", "argo enabled", "argo click", "argo smart routing click", "argo tiered caching click", "argo cancel modal submit feedback clicked", "argo cancel modal open state", "argo cancel modal clicked cancel", "Attempt TOTP reconfigure", "begin deployment log stream", "begin import flow", "begin log stream", "begin zone activation flow", "Billing address country select toggle", "Billing click", "Billing email update failure", "Billing email update success", "Billing invoice download failed", "Billing invoice download success", "brand protection", "bulk delete images", "bulk export images", "Button click", "Cache settings click", "Can not display filter - Unparsable filter", "Can not display filter - Unsupported Fields", "cancel add records later", "cancel addon purchase of automatic platform optimization", "cancel create database", "cancel disable totalTLS", "cancel import flow", "cancel form", "cancel notification create", "cancel notification delete", "cancel notification edit", "cancel notification test", "cancel onboarding flow", "cancel resizing after bundle buy", "cancel snippet form", "cancel source deletion", "cancel switch ca totalTLS", "cancel variant edit", "Canceled rule form", "Canceled subscription", "Certificate Patch click", "change api shield sequence rule config option", "change brand pattern filter", "change certificate authority totalTLS", "change chart time horizon", "Change dataset", "change default action api shield sv", "change DNS file upload error visibility", "change DNS setup method", "Change limit", "change metadata boundary", "change pagination page shield", "Change Plan Frequency", "change priority submitted", "change SSL recommender", "change tab", "Change time window", "change zone setting", "Change zone setup confirmation", "Change zone status confirmation", "change zone status", "chat submission form submit click", "check nameservers", "choose plan", "Continue adding domain", "copy script url page shield", "copy trace json", "Cipher Suites Link Click", "claim yubico promo offer", "click 2fa support token link", "click Account Home TSF (3.0)", "click add settings", "click add sources", "click api shield upsell link", "click api shield enable product button", "click api shield feedback link", "click api shield route", "click API snippet drawer", "click back to all policies link", "click block ai bots", "Click BM bots JS detection", "Click BM bot templates", "Click BM create firewall rule", "Click BM welcome card", "click bot settings", "click cancel downgrade", "click cancel free trial", "click cache reserve purchase", "click chat button", "click chat close modal", "click chat start", "click close callback request form", "click configure 2fa support app link", "click continue quick scan", "click continue to support TSF (3.0)", "click coveo recommended resource TSF (3.0)", "click create ai gateway", "click create load balancer", "click create project success resource", "click create project success next step", "Click Create Rule", "click create policy form link", "click create token from sidebar", "click create table button", "click database detail tab", "click deflect community TSF (3.0)", "click delete database button", "click delete table button", "Click Deploy Rule", "click dns completion wizard suggestion", "click dns email security configure", "click dns email security wizard record type", "click documentation link", "click edit policy", "click edge traffic visualisation link", "click enable argo button", "click end stream button", "click expand known issue", "click expand maintenance view", "click help drawer", "click helperbot diagnostic report TSF (3.0)", "click Hide Self Help Flow", "click learn more link", "click link to waf migration documentation", "click link", "click load more coveo content TSF (3.0)", "click load balancer step", "click login help forgot email selection", "click login help forgot password selection", "click login help lost two factor selection", "click multi-sku confirmation", "click on apply rule ai assistant", "click on close rule ai assistant", "click on edit snippet", "click on content_scanning", "click on exposed_credentials", "click on expand one sequence on api gateway sequences", "click on filter one sequence on api gateway sequences", "click on main filter api gateway sequences", "click on rule ai assistant", "click on view endpoint on api gateway sequences", "click Open a Ticket TSF (3.0)", "click open callback request form", "click payment details", "click plan documentation link", "click purchase ACM - totalTLS", "click refresh suggestions", "Click refresh transfer status", "click Request Live Chat TSF (3.0)", "click restore database button", "click save whois", "click scan again", "click select known issue", "click Self Help Flow Answer", "click Self Help Flow Close", "click Start Over TSF (3.0)", "click Start Self Help Flow", "click start stream button", "click submit callback request form", "click submit domain categorization feedback", "click submit feedback TSF (3.0)", "click subscribe system status", "click table insert data button", "click ticket submission form search result", "click ticket submission form suggestion", "click to create api shield portal", "click to create rate limiting rule for endpoint", "click to Trace link", "click Top N investigate", "click investigate icon", "click trace feedback form", "click TSF (2.0) community more help", "click TSF (2.0) new category", "click TSF (2.0) search result", "click TSF (2.0) step", "click TSF (2.0) suggested help link", "click TSF (2.0) suggestion", "Click query logs", "Click use custom sql", "Click use basic editor", "click update table data row button", "click Upgrade to Business Close", "click Upgrade to Business Start", "click Upgrade to Business Zone Selected", "Click view details", "click waf upgrade banner", "click domain registration link", "click Workers & Pages link", "click worker edit code", "click workers plan icon", "click wrangler cli guide link", "click full DNS setup docs link", "click partial DNS setup docs link", "click secondary DNS setup docs link", "click settings first deploy cta", "click custom domain first deploy cta", "click web analytics first deploy cta", "click start quick scan", "click plan upgrade from rules setting", "click on snippets promo page", "Click", "close chat window", "create migration", "create or update queue consumer", "create trace", "create queue", "create sink", "create trace", "enter summary TSF (3.0)", "reach chat end TSF (3.0)", "submit login help form submission", "toggle TSF (3.0)", "toggle snippet status", "close abort import modal", "close account select dropdown", "close bulk delete image modal", "close configuration switcher sidemodal", "close delete image modal", "close delete variant modal", "close domain switcher sidemodal", "close rename source modal", "close script modal page shield", "close zone select dropdown", "close support dropdown", "collapse row", "collapse sidebar nav", "Collapse top N", "Community page link click", "complete addon purchase of automatic platform optimization", "complete plan change from automatic platform optimization card", "Configuration Rules Link Click", "confirm add records later", "confirm api shield sequence rule config", "confirm auth code", "confirm disable totalTLS", "confirm DNS records", "confirm domain transfer purchase", "confirm source deletion", "confirm zone removal", "Confirm", "contentful banner displayed", "contentful banner dismissed", "continue billing flow", "continue import flow", "continue onboarding flow", "continue to final step", "continue to review step", "continue to overview", "continue to js snippet", "Continue", "Contract SS - Approver contact details cancel", "Contract SS - Approver contact details submit success", "Contract SS - Legal agreement cancel", "Contract SS - Legal agreement submit success", "Contract SS - Payment type cancel", "Contract SS - Payment type selected success", "Contract SS - Purchase cancel", "Contract SS - Purchase flow enter", "Contract SS - Purchase success", "copy account hash", "copy account id", "copy API snippet from drawer", "copy curl command", "copy delivery url", "copy image delivery url", "copy image id", "copy script url page shield", "copy snippet", "Create Bulk Redirect Rule", "create clone", "create application click workers docs", "create application click pages docs", "create application click create with CLI", "create application select workers", "create application select pages", "create default environments", "create database", "create environment", "create job", "create kv namespace", "create migration", "Create New Rule", "create new magic firewall rule", "create notification", "create pages deployment", "create pages deployment", "create pages project", "create pages project", "create r2 api token", "create r2 api token", "create r2 bucket", "create rate limiting rule", "create regional hostname", "create rule", "Create Rule (Save)", "Create Rule as Draft (Save as Draft)", "create service", "create table", "create worker from playground", "create worker select filter", "cancel create worker from playground", "create sink", "create source", "create snippet", "create snippet", "create user", "create variant", "create worker", "create zone", "Create, Update or Edit Save Failures (Builder)", "Create, Update or Edit Save Failures (Editor)", "CT Alerting Change", "Custom Hostname create click", "Custom Hostname create success", "Custom Hostname delete click", "Custom Hostname delete success", "Custom Hostname edit click", "Custom Hostname edit success", "Custom Hostname fallback origin add click", "Custom Hostname fallback origin delete click", "Custom Hostname fallback origin delete success", "Custom Hostname fallback origin edit click", "Custom Hostname fallback origin refresh", "Custom Hostname refresh click", "Custom Trust Store delete click", "Custom Trust Store delete success", "Custom Trust Store upload click", "Custom Trust Store upload success", "customer click URL in support ai chat", "customer close support ai chat", "Dashboard search closed", "Dashboard search opened", "Dashboard search result selected", "Dashboard search results empty", "Dedicated Certificates click", "Deep Link Cancel", "Deep Link Success", "delete api shield route", "delete brand pattern", "Delete click", "Delete confirmation", "delete custom error pages", "delete database", "delete environment", "delete image", "delete kv key-value", "delete kv namespace", "delete multiple selected table data rows", "delete notification", "delete pages project", "delete policy", "delete queue", "delete r2 api token", "delete r2 bucket", "delete r2 objects", "Delete Rule", "delete service", "delete site", "delete snippet", "delete snippet", "delete source", "delete table", "delete table data row", "delete variant", "deploy api shield portal", "deploy api shield route", "deploy policy", "deploy worker script", "deploy worker script", "deploy version", "Details click", "Dev Mode change confirm", "Dev Mode change", "develop with wrangler cli", "Diagnostic failure", "Diagnostic result", "disable page shield", "disable pages web analytics", "Disable Rule", "disable sidebar nav", "disable totalTLS", "dislike redirect in the same window", "dismiss notification", "dismiss recommendation", "dismiss yubico promo banner", "display recommendation module", "display recommendation", "display record wizard notification", "display self help flow", "display yubico promo banner", "display support ai chat", "DNS settings click", "download file", "download progress log", "download r2 object", "download tax doc", "draft new worker script", "edge traffic visualisation is shown", "edit contact information", "edit cron trigger", "edit environment", "Edit filter", "edit image", "edit kv key-value", "edit notification", "edit plan", "edit r2 api token", "edit registration details", "edit service environment variables", "edit service kv bindings", "edit service r2 bindings", "edit service to service bindings", "edit service mtls certificate bindings", "edit service tail consumers", "edit dispatch namespace bindings", "edit variant", "edit workers route", "Edit/Update Rule (Save)", "Enable automatic https rewrites click", "Enable Optimization", "enable or disable api shield sv", "enable page shield", "enable pages access policy", "enable pages web analytics", "Enable Rule", "enable sidebar nav", "enable totalTLS", "enable policy toggle", "enable versioning", "enable workers", "enable cache reserve storage sync", "encrypt variable", "end WAF migration v2", "environment migrate forward", "environment migrate back", "enter domain search value", "enter icloud registrar", "enter summary TSF (3.0)", "live training button clicked", "Error adding or removing records", "Error Analytics link click", "Error when retrieving conflicting records", "error creating snippet", "Event Names", "execute console tab query", "exit onboarding guide", "expand account select dropdown", "expand directive", "expand domain details", "Expand measurement details", "expand row", "expand sidebar nav account selector", "expand sidebar nav zone selector", "expand sidebar nav", "Expand top N", "expand trace accordion", "expand zone select dropdown", "export instant logs", "export single image", "export trace results", "fail addon purchase of automatic platform optimization", "Failed to Switch to Editor", "failed pre-flight check", "Fetched template", "Filter rules", "filter search page shield", "filter search view all page shield", "filter snippet", "filter trace results", "Filter used", "filter workers and pages", "finish import flow", "finish loading gates and microfrontends", "finish onboarding guide later", "finish onboarding guide", "Firewall settings click", "Flow authorize", "Flow cancel", "follow contentful banner link", "follow docs link", "follow link to investigate external", "follow link to investigate", "follow link", "follow policy link", "follow recommendation CTA", "follow return to icloud link", "follow support link", "follow yubico promo banner", "follower icloud footer link", "Follow Trial Offer Link", "Free Long Wait", "get current bookmark id", "Get your API key click", "go back in billing flow", "go to next page", "go to page", "go to prev page", "hover score tooltip page shield", "hover to read risk identified tooltip", "hover to read threshold tooltip", "http worker editor tab", "identify", "image upload complete", "Initialization error", "Initialization success", "initiate addon purchase of automatic platform optimization", "initiate plan change from automatic platform optimization card", "initiate wordpress plugin installation for automatic platform optimization", "insert table data row", "interact with api shield sequence rule main table", "Interaction with Film Strip", "Interacton with Film Strip", "investigate threat search", "IP settings click", "launch icloud registrar onboarding", "launch onboarding guide", "launch sidebar nav survey", "launch teams dashboard", "launch zone overview", "list kv key-values", "list kv namespaces", "list pages projects", "list queues", "list r2 buckets", "list r2 objects", "Load Balancing click", "load web analytics overview", "Logpush Create Job - Open modal", "Logpush Create Job - Step Transition", "Logpush Create Job - Success", "Manage click", "manage pages members", "manage pages policies", "Map detail type changed", "Matches Entitlement Validation error", "migrate waf", "Mixed content notification test 2019-05-03 link click", "multi-sku purchase error", "multi-sku purchase success", "navigate back", "navigate footer nav", "navigate investigate sidebar nav", "navigate quick link", "navigate sidebar nav", "navigate to account", "navigate to api tokens", "navigate to appearance", "navigate to billing", "navigate to community forum", "navigate to community", "navigate to compliance docs", "navigate to contact support", "navigate to create first source", "navigate to documentation", "navigate to edit image", "navigate to enterprise customer portal", "navigate to filtered domains", "navigate to help center", "navigate to import detail", "navigate to images", "navigate to my activities", "navigate to logout", "navigate to previous onboarding guide task", "navigate to profile", "navigate to request feature", "navigate to request feature", "Navigate to speed test", "navigate to source detail", "navigate to variant detail", "navigate to version management through configuration sidemodal", "navigate to version management docs through configuration sidemodal", "navigate to WAF Migration Review configuration view", "navigate topbar", "navigate to tax docs", "navigate to share feedback", "Next onboarding guide section", "next page", "Notification dismissed", "Notification displayed", "Notification link click", "Notification load on page confirmation", "observe automatic platform optimization card", "Onboarding guide elapsed time", "open abort import modal", "open advanced waiting room sales link", "open alert modal page shield", "open argo subscription modal", "open blog post for automatic platform optimization", "open bot management lead generator link", "open bulk delete image modal", "open cancel downgrade modal", "open cancel free trial modal", "open configuration switcher sidemodal", "open create bucket page", "open create database page", "open create notification page", "open delete image modal", "open delete notification modal", "open delete variant modal", "open domain switcher sidemodal", "open edit notification page", "open hostname confirmation modal", "Open Trial Offer Modal", "open help documentation for automatic platform optimization", "open image preview", "open load balancing subscription modal", "Open Modal Enable Access", "open priority change modal", "open onboarding guide task manually", "open remove zone modal", "open rename source modal", "open script modal page shield", "open support dropdown", "open security center url categorization feedback", "open security center categorization tooltip", "open waiting room upsell modal", "open zone plan update modal", "Opened BrowserInsights tab", "opt-in to marketing emails", "Order click", "Order success", "Page Rules click", "pageview", "page load gate deflection TSF", "paginate kv key-values", "paginate kv namespaces", "paginate pages projects", "paginate queues", "paginate r2 buckets", "paginate r2 objects", "paginate services", "Pick validity period success", "Plan Purchase Confirmation", "Plan Purchase Failure", "Plan Purchase Success", "Plan Update Confirmation", "Plan Update Failure", "Plan Update Success", "preview live worker", "preview queue messages", "preview worker editor tab", "previous page", "Private keys in china toggle", "Product Purchase Cancel", "Product Purchase Failure", "Product Purchase Success", "Product Update Failure", "Product Update Success", "prompted to verify email", "promote version", "purchase domain transfer", "purchase from plan change modal", "purchase images subscription", "Purge cache click", "purge everything from cache", "quick actions basic features modal close", "quick actions basic features modal open", "quick actions basic features activate selections", "Rate Limiting click", "Re-activate zone click", "Re-check nameservers click", "reach ticket end TSF (3.0)", "read kv key-value", "ready to update waf migration phase 2", "recheck zone for automatic platform optimization", "redirect chat", "register site", "Remove column", "Remove filter", "Remove insight", "remove item from checkout", "remove zone", "rename account", "rename service", "rename source", "Reprioritize certificate", "Request review click", "resend verification email", "restore database", "resume onboarding", "retry coveo search", "return to developer platform from modal", "return to developer platform from onboarding", "review onboarding guide task from summary", "review products", "request migrator capacity", "rollback version", "roll r2 api token", "Rule event", "Rule preview that was denied because of an unsupported field or operator", "Rule preview that was denied because of lack of data", "Rule preview that was denied due to error", "rules configured", "save contact information", "save and deploy load balancer", "save load balancer", "save load balancer as draft", "save onboarding guide task", "save payment details", "save registration details", "search auto fetch", "search d1 databases", "search kv key-values", "search kv namespaces", "search pages projects", "search queues", "search r2 buckets", "search r2 objects", "search services", "search source", "search table", "Search", "See more click", "select account", "select alert type page shield", "select category TSF (3.0)", "select change nameservers", "select directive default value", "select directive value", "select domain", "select d1 database", "select file", "Select hostname success", "select language", "select mp4 download checkbox", "select automatic deletion checkbox", "select notification type", "select onboarding bundle", "select page rules quantity", "select product", "select r2 plan", "select source", "select storage plan", "select table", "select task", "Select timeseries group by", "select transfer registrars", "Select type success", "select variant", "select version", "select queues plan", "select workers plan", "select workers template", "select zone plan", "select zone", "select summary in support ai chat", "Select", "Selected advanced GeoIP field in rule builder", "selected schema api shield portal", "send verification email", "send queue message", "Set Communication Preferences", "Set communication Preferences", "set page size", "set pages do bindings", "set pages environment variables", "set pages kv bindings", "set pages vectorize bindings", "set r2 bucket storage class", "set up custom domain", "set up subdomain", "Setting up", "show access key", "show cache reserve potential savings", "show cache reserve disabled", "show notification", "show waf upgrade banner v2", "show waf upgrade banner", "showed api shield flyfishing page", "signed exchanges toggle", "Sign in to Area 1 button click", "Go to Zero Trust Email Security button click", "site configured", "skip onboarding guide section", "something wrong", "sort auto fetch", "sort column page shield", "sort queues", "sort r2 buckets", "sort services", "sort table", "sort workers and pages", "Speedheader - change your nameservers click", "Speedtest - Headless Chrome fetch returned error", "Speedtest - tests are completed", "Speedtest - Tests are running", "Speedtest - WPT tests failed", "SPF conflict resolution failure", "SSL click", "SSL Mode Change", "start import flow", "start import manually", "start subscription change", "start WAF migration v2", "start wizard", "Status page link click", "Stream click", "Stream Signup Success", "Stream Video Page Play", "Stream Video Upload Failure", "Stream Video Upload Success", "Stream navigate away from videos page", "Stream Video Upload with link", "Stream video caption uploaded", "Stream video caption deleted", "Stream video caption downloaded", "Stream video caption generating", "Stream video caption regenerating", "submit brand pattern", "submit grotto chat feedback", "submit DNS email security wizard failure", "submit DNS email security wizard", "submit DNS entry method", "submit domain name", "submit login form", "submit login help form submission", "submit new grotto chat request", "submit new support ai chat request", "submit order", "submit signup form", "sign up option clicked", "login option clicked", "Successful flow and user redirected", "Successful rule preview", "Suggestions query confirmation", "suggest category tsf (3.0)", "suggest category displayed tsf (3.0)", "Marketing banner dismissed", "Survey banner closed", "Marketing banner shown", "Survey banner shown", "Survey opened", "switch DNS entry method", "Switch from Editor and Discarded Changes", "Switch to expression editor", "Test", "test notification", "Ticket form step click", "Ticket submission form button click", "Ticket submission form submit click", "Time range changed", "Toast dismiss click", "Toast load on page confirmation", "toggle advanced options", "Toggle API discovery", "toggle automatic platform optimization feature", "toggle cache by device type", "toggle counting expression", "toggle flexible variants", "toggle key", "toggle recommendation module", "toggle TSF (3.0)", "Toggle user level audit logs", "Toggled injection", "trace user jorney", "transfer DNS records", "transformations disabled for zone", "transformations enabled for zone", "Trial Offer Displayed", "Trial Started", "Trial Cancelled", "tried to register unavailable domain", "tried to remove zone of a domain registered on cloudflare registrar", "Under Attack Mode change", "Under attack mode enabled", "undo restore database", "update custom error pages", "update job", "update jwt configuration", "update jwt rule", "update magic firewall rule", "update pages project", "update rule", "update site", "update table data row", "upgrade unique transformations config", "upgrade stream subscription", "upgrade resizing to new stream subscription", "Upload custom click", "Upload custom confirmation", "upload custom error pages", "upload DNS file", "upload image", "Upload keyless click", "Upload keyless confirmation", "Upload list item CSV", "update snippet", "upload r2 objects", "use multiselect api shield sv", "use overflow api shield sv", "use spacebar to pause", "use spacebar to play", "User has recommended optimisations", "User navigated by zone navigation", "Use template", "USSL Certificate Authority: Changed", "USSL Certificate Authority: Modal Launch", "validate spf content", "Validation method change", "Validation success", "verified email successfully", "verify email", "view accounts", "view checkout complete purchase", "View click", "view custom error pages", "view documentation", "view downgrade offer", "view downgrade survey", "view downgrade warning", "view onboarding guide recommendations", "view snippet", "view plan", "view system status", "Viewed Global API Key", "Viewed Origin CA Key", "visit workers developer docs", "visit workers showcase", "visit workers templates", "web analytics upgrade plan click", "web analytics option changed to enabled", "web analytics option changed to enabled with lite", "web analytics option changed to manual", "web analytics option changed to disabled", "WHOIS link click", "Workers:Enablement", "Zap:Opt in", "Zap:Opt out", "zones table click", "Zone setup change", "Bots Report Data", "Information Toast Shown", "Information Toast Closed", "quick edit http tab", "quick edit preview tab", "quick edit schedule tab", "quick edit wrangler tab", "visit product documentation", "visit blog post", "visit recent", "visit blog announcements", "click application name", "click change compute setting", "click change subdomain", "click discover card call to action", "click discover card view products", "click welcome card call to action", "click welcome card view products", "click create application", "click connect to git", "click featured product call to action", "click paygo card cta", "click opt-in", "click opt-out", "click close opt out", "click setup AE", "click stripe beta select plan support link", "click stripe beta change plan support link", "click rule link", "click button to speed recommendation page", "click trace rule details", "click upload assets", "click worker detail tab", "click workers resource", "click workers manage account members", "click workers manage notifications and alerts", "view stripe beta opt out", "error notification shown", "fetch personalized content", "view page", "run speed test", "delete speed test", "create speed test schedule", "delete speed test schedule", "select speed test trend range", "select speed test trend metric", "view speed recommendation", "view lighthouse audit", "enable speed recommendation", "click speed feature link", "click speed optimization documentation link", "enable all speed optimization recommendations", "complete plan change from speed", "start plan change from speed", "view rum disabled screen", "enable rum from speed", "enable rum lite from speed", "select rum map range", "select rum map metric", "has payment plan on file", "click DNS records link", "click disable DNSSEC link", "click migrate DNSSEC link", "click enable DNSSEC link", "click pending domains link", "change appearance", "click star zone", "click star zone filter", "click empty state link", "click view more", "visit system status item", "view system status item menu", "subscribe to system status item", "click feedback link", "click registrar link", "click cloudflare logo", "dismiss change notification", "dismiss change notification modal", "set marketing preference ent ss purchase", "view change notification", "view change notification modal", "expand side drawer", "collapse side drawer", "expand documentation side drawer", "collapse documentation side drawer", "dismiss message", "dismiss all messages", "click message inbox popover", "click message footer action", se.gX.SPARROW_PROJECTS_TABLE_CLICK, se.gX.SPARROW_EMPTY_STATE_CTA_CLICK, se.gX.SPARROW_PRODUCT_CARD_CLICK, se.gX.SPARROW_VIEW_ALL_PROJECTS_CLICK, "clicked sidebar Discord link", "clicked sidebar Community Forum link", z.QV.clickedDownloadAnalytics, z.QV.clickedPrintAnalytics, z.QV.toggledSmartPlacement, "clicked Workers for Platforms CLI Guide link", "clicked Workers for Platforms Documentation link", z.QV.addWCITriggerToExistingWorker, z.QV.updateWCITrigger, z.QV.deleteWCITrigger, z.QV.addWCITriggerToNewWorker, z.QV.createWCIBuildForNewWorker, z.QV.completedWCIBuildForNewWorker, z.QV.changedDefaultConfigurations, X.QV.toggledPagesSmartPlacement, X.QV.downloadDemoProject, z.QV.clickCreateWorkerFromRepoNextStep, z.QV.clickCreateWorkerFromRepoPreviousStep, z.QV.clickCreateNewSCMConnection, z.QV.redirectFromSCMOAuth, z.QV.clickSubmitError, z.QV.selectTemplate, z.QV.templateStubWorkerCreated, z.QV.templateStubWorkerCreationFailed, z.QV.templateRepositoryCreated, z.QV.templateRepositoryCreationFailed, z.QV.copyTemplateC3Command, z.QV.templateDeployClick, z.QV.reauthenticateGithubModalShown, z.QV.updateGithubPermissionsClicked, "clicked R2 feedback link", "clicked R2 CLI guide", "clicked R2 footer link", "clicked Constellation feedback link", x.N3.INITIAL_FETCH_SCORES, x.N3.FETCH_CONFIGURATION, x.N3.INITIAL_FETCH_TIME_SERIES, x.N3.INITIAL_FETCH_ATTRIBUTES, x.N3.UPDATE_SETTINGS, x.N3.DELETE_RULE, x.N3.UPDATE_RULE, x.N3.FETCH_RULES, x.N3.CONFIGURE_BOT_MANAGEMENT, x.N3.WAF_RULES_REDIRECT, Y.F.TOGGLE_TCP_PROTECTION, Y.F.GET_TCP_PROTECTION_PREFIXES, Y.F.CREATE_TCP_PROTECTION_PREFIXES, Y.F.CREATE_TCP_PROTECTION_PREFIX, Y.F.UPDATE_TCP_PROTECTION_PREFIX, Y.F.DELETE_TCP_PROTECTION_PREFIX, Y.F.DELETE_TCP_PROTECTION_PREFIXES, Y.F.GET_TCP_PROTECTION_ALLOWLIST, Y.F.CREATE_TCP_PROTECTION_ALLOWLIST, Y.F.UPDATE_TCP_PROTECTION_ALLOWLIST, Y.F.DELETE_PREFIX_TCP_PROTECTION_ALLOWLIST, Y.F.DELETE_TCP_PROTECTION_ALLOWLIST, Y.F.GET_SYN_PROTECTION_RULES, Y.F.GET_SYN_PROTECTION_RULE, Y.F.CREATE_SYN_PROTECTION_RULE, Y.F.UPDATE_SYN_PROTECTION_RULE, Y.F.DELETE_SYN_PROTECTION_RULE, Y.F.GET_TCP_FLOW_PROTECTION_RULES, Y.F.GET_TCP_FLOW_PROTECTION_RULE, Y.F.CREATE_TCP_FLOW_PROTECTION_RULE, Y.F.UPDATE_TCP_FLOW_PROTECTION_RULE, Y.F.DELETE_TCP_FLOW_PROTECTION_RULE, Y.F.GET_SYN_PROTECTION_FILTERS, Y.F.GET_SYN_PROTECTION_FILTER, Y.F.CREATE_SYN_PROTECTION_FILTER, Y.F.UPDATE_SYN_PROTECTION_FILTER, Y.F.DELETE_SYN_PROTECTION_FILTER, Y.F.GET_TCP_FLOW_PROTECTION_FILTERS, Y.F.GET_TCP_FLOW_PROTECTION_FILTER, Y.F.CREATE_TCP_FLOW_PROTECTION_FILTER, Y.F.UPDATE_TCP_FLOW_PROTECTION_FILTER, Y.F.DELETE_TCP_FLOW_PROTECTION_FILTER, Y.F.GET_DNS_PROTECTION_RULES, Y.F.GET_DNS_PROTECTION_RULE, Y.F.CREATE_DNS_PROTECTION_RULE, Y.F.UPDATE_DNS_PROTECTION_RULE, Y.F.DELETE_DNS_PROTECTION_RULE, ee.FV.MANAGE_PAGE_SHIELD_POLICY, ee.FV.CONFIGURE_PAGE_SHIELD, ee.FV.VIEW_DETECTED_CONNECTIONS, ee.FV.VIEW_DETECTED_SCRIPTS, ee.FV.VIEW_PAGE_SHIELD_POLICIES, ee.FV.VIEW_PAGE_SHIELD_SETTINGS, ee.FV.OPEN_MUTABLE_VERSION_TOOLTIP, ee.FV.SHOW_MUTABLE_VERSION_TOOLTIP, Q.y.CREATE_LIST, Q.y.DELETE_LIST, Q.y.ADD_LIST_ITEM, Q.y.DELETE_LIST_ITEM, ie.KO.PURCHASE_WORKERS_PAID, ie.KO.LIST_CONFIGS, ie.KO.CREATE_HYPERDRIVE_CONFIG, ie.KO.VIEW_CONFIG_DETAILS, ie.KO.UPDATE_CACHING_SETTINGS, ie.KO.DELETE_HYPERDRIVE_CONFIG, ie.KO.CLICK_HYPERDRIVE_DOCUMENTATION, ie.KO.CLICK_GET_STARTED_GUIDE, ie.KO.CLICK_CONNECTIVITY_GUIDES, ie.KO.CLICK_QUICK_LINK, ke.N.CNAME, ke.N.IP_ADDRESS, ke.N.LB, ke.N.UPDATE_CNAME, ke.N.UPDATE_IP_ADDRESS, ke.N.UPDATE_LB, ke.N.DISABLE, P.N.TIERED_CACHE, P.N.CACHE_PURGE, P.N.CACHE_ANALYTICS, ...(0, Ke.P)(), ...(0, A.x4)(), ...(0, he.m8)(), $e.N.CREATE, $e.N.EVENTS, $e.N.ANALYTICS, $e.N.UPDATE, $e.N.GENERATE_PREVIEW, B.RY.INITIATE_URL_SCAN, B.RY.LOAD_SCAN_INFO, B.Ev.LOAD_THREAT_EVENTS, B.Ev.THREAT_EVENT_MORE_DETAILS_CLICK, B.Ev.THREAT_EVENTS_FILTERS, B.v9.EXPAND_INSIGHT_ROW, B.v9.ONE_CLICK_RESOLVE_BUTTON, B.v9.FOLLOW_RESOLVE_URL, B.v9.MANAGE_INSIGHT, B.v9.CLICK_SCAN_NOW, B.v9.CLICK_EXPORT_INSIGHTS, B.v9.BULK_ARCHIVE, B.v9.CLICK_DETAILS_BUTTON, I.Fj[I.kq.ENDPOINT_MANAGEMENT].listOfEndpoints, I.Fj[I.kq.ENDPOINT_MANAGEMENT].detailedMetrics, I.Fj[I.kq.ENDPOINT_MANAGEMENT].createEndpoint, I.Fj[I.kq.ENDPOINT_MANAGEMENT].deleteEndpoint, I.Fj[I.kq.ENDPOINT_MANAGEMENT].deployRouting, I.Fj[I.kq.ENDPOINT_MANAGEMENT].deleteRouting, I.Fj[I.kq.API_DISCOVERY].viewDiscoveredEndpoints, I.Fj[I.kq.API_DISCOVERY].saveDiscoveredEndpoint, I.Fj[I.kq.API_DISCOVERY].ignoreOrUnignoreDiscoveredEndpoint, I.Fj[I.kq.SCHEMA_VALIDATION].viewSchemasList, I.Fj[I.kq.SCHEMA_VALIDATION].uploadSchema, I.Fj[I.kq.SCHEMA_VALIDATION].viewSchemaAdoption, I.Fj[I.kq.SCHEMA_VALIDATION].downloadSchema, I.Fj[I.kq.SCHEMA_VALIDATION].deleteSchema, I.Fj[I.kq.SCHEMA_VALIDATION].addLearnedSchemaByHostname, I.Fj[I.kq.SCHEMA_VALIDATION].addLearnedSchemaByEndpoint, I.Fj[I.kq.SEQUENCE_ANALYTICS].viewSequencesPage, I.Fj[I.kq.JWT_VALIDATION].viewJWTRules, I.Fj[I.kq.JWT_VALIDATION].addJWTRule, I.Fj[I.kq.JWT_VALIDATION].editJWTRule, I.Fj[I.kq.JWT_VALIDATION].deleteJWTRule, I.Fj[I.kq.JWT_VALIDATION].reprioritizeJWTRule, I.Fj[I.kq.JWT_VALIDATION].viewJWTConfigs, I.Fj[I.kq.JWT_VALIDATION].addJWTConfig, I.Fj[I.kq.JWT_VALIDATION].editJWTConfig, I.Fj[I.kq.JWT_VALIDATION].deleteJWTConfig, I.Fj[I.kq.SETTINGS].redirectToFirewallRulesTemplate, I.Fj[I.kq.SETTINGS].redirectToPages, I.Fj[I.kq.SETTINGS].listSessionIdentifiers, I.Fj[I.kq.SETTINGS].listRequestsContainingSessionIdentifiers, I.Fj[I.kq.SETTINGS].addOrRemoveSessionIdentifiers, I.Fj[I.kq.SETTINGS].redirectToCustomRules, I.Fj[I.kq.SETTINGS].listAllFallthroughSchemas, I.Fj[I.kq.SEQUENCE_RULES].listSequenceRules, I.Fj[I.kq.SEQUENCE_RULES].deleteSequenceRule, I.Fj[I.kq.SEQUENCE_RULES].reorderSequenceRule, I.Fj[I.kq.SEQUENCE_RULES].createSequenceRule, I.Fj[I.kq.SEQUENCE_RULES].editSequenceRule, we.Z.ANALYTICS, we.Z.CREATE_AND_DEPLOY, we.Z.CREATE_MONITOR_LINK, we.Z.CREATE_MONITOR, we.Z.CREATE_POOL_LINK, we.Z.CREATE_POOL, we.Z.EDIT_MONITOR, we.Z.EDIT_POOL, we.Z.LOAD_BALANCING_TABLE, we.Z.POOL_TABLE, we.Z.EDIT_MONITOR_LINK, we.Z.EDIT_POOL_LINK, K.y.SECONDARY_DNS_NOTIFICATION_CREATE, K.y.SECONDARY_DNS_NOTIFICATION_UPDATE, K.y.SECONDARY_DNS_NOTIFICATION_DELETE, H.U.ZONE_TRANSFER_SUCCESS, H.U.DNS_RECORD_CREATE, H.U.DNS_RECORD_UPDATE, H.U.DNS_RECORD_DELETE, pe.Y.PEER_DNS_CREATE, pe.Y.PEER_DNS_UPDATE, pe.Y.PEER_DNS_DELETE, pe.Y.ZONE_TRANSFER_ENABLE, pe.Y.ZONE_TRANSFER_DISABLE, je.V.ARGO_ENABLEMENT, je.V.ARGO_GEO_ANALYTICS_FETCH, je.V.ARGO_GLOBAL_ANALYTICS_FETCH, $.X.VIEW_BUCKETS_LIST, $.X.CREATE_BUCKET, $.X.VALIDATE_BUCKET, $.X.DELETE_BUCKET, $.X.VIEW_CAPTURES_LIST, $.X.CREATE_SIMPLE_CAPTURE, $.X.CREATE_FULL_CAPTURE, $.X.VIEW_FULL_CAPTURE, $.X.DOWNLOAD_SIMPLE_CAPTURE, Z.bK.VIEW_RULES, Z.bK.CREATE_RULE, Z.bK.UPDATE_RULE, Z.bK.DELETE_RULE, Z.bK.VIEW_CONFIGURATION, Z.bK.CREATE_CONFIGURATION, Z.bK.UPDATE_CONFIGURATION, Z.bK.DELETE_CONFIGURATION, j.r8.VIEW_ALERTS, j.r8.VIEW_ALERTS_HISTORY, j.r8.MAGIC_OVERVIEW_ANALYTICS, j.VZ.CREATE_SITE, j.VZ.CREATE_TUNNEL, j.VZ.CREATE_STATIC_ROUTE, de.o4.CLICK_ADAPTIVE_SAMPLING, de.o4.CLICK_TO_LOG_EXPLORER_BANNER, de.o4.CLICK_TO_LOG_EXPLORER_DESCRIPTION, de.o4.CLICK_SWITCH_TO_RAW_LOGS, de.o4.CLICK_SWITCH_TO_SAMPLED_LOGS, "send AI feedback", te.U.REGISTER_DOMAIN_SEARCH_SUBMIT, te.U.REGISTER_DOMAIN_SEARCH_SELECT_DOMAIN, te.U.REGISTER_DOMAIN_CHECKOUT_SELECT_PAYMENT_OPTION, te.U.REGISTER_DOMAIN_CHECKOUT_PURCHASE, te.U.REGISTER_DOMAIN_CHECKOUT_PURCHASE_ATTEMPT, te.U.REGISTER_DOMAIN_CHECKOUT_PURCHASE_COMPLETED, te.U.REGISTER_DOMAIN_CHECKOUT_BILLING_COUNTRY_SELECT, te.U.REGISTER_DOMAIN_CHECKOUT_BILLING_VERIFY_ADDRESS, te.U.REGISTER_DOMAIN_CHECKOUT_BILLING_SELECT_PAYMENT_METHOD, te.U.REGISTER_DOMAIN_CHECKOUT_TMCH_DOMAIN_HAS_CLAIMS, te.U.REGISTER_DOMAIN_CHECKOUT_TMCH_EXPAND_CLAIMS, te.U.REGISTER_DOMAIN_CHECKOUT_TMCH_DISAGREE, te.U.REGISTER_DOMAIN_CHECKOUT_TMCH_AGREE, te.U.REGISTER_DOMAIN_CHECKOUT_ERROR, te.U.TRANSFER_DOMAIN_CHANGE_STEP, te.U.RENEW_DOMAIN_COMPLETED, te.U.RESTORE_DOMAIN_INIT, te.U.RESTORE_DOMAIN_CLOSE_RESTORE_MODAL, te.U.RESTORE_DOMAIN_OPEN_ADD_PAYMENT_METHOD_MODAL, te.U.RESTORE_DOMAIN_CLOSE_ADD_PAYMENT_METHOD_MODAL, te.U.RESTORE_DOMAIN_FAILURE, te.U.RESTORE_DOMAIN_COMPLETED, te.U.DOMAIN_DELETE_INIT, te.U.DOMAIN_DELETE_COMPLETED, te.U.DOMAIN_DELETE_FAILURE_NO_PERMISSIONS, te.U.DOMAIN_DELETE_FAILURE_INVALID_CONFIRMATION_CODE, te.U.DOMAIN_DELETE_FAILURE_UNKNOWN_REASON, te.U.DOMAIN_DELETE_CONFIRM_DELETE, te.U.DOMAIN_DELETE_CLOSE_CONFIRM_MODAL, te.U.DOMAIN_DELETE_RESEND_CONFIRMATION_CODE, te.U.DOMAIN_DELETE_CLOSE_VERIFICATION_MODAL, te.U.DOMAIN_DELETE_WARNING_MODAL_CONTINUE, te.U.DOMAIN_DELETE_CLOSE_WARNING_MODAL, te.U.DOMAIN_MOVE_START_FLOW, te.U.DOMAIN_MOVE_OPEN_DOCS, te.U.DOMAIN_MOVE_CLOSE_FLOW, te.U.DOMAIN_MOVE_PROGRESS_FLOW, te.U.DOMAIN_MOVE_SUBMIT, te.U.DOMAIN_MOVE_INITIATE_SUCCESS, te.U.DOMAIN_MOVE_INITIATE_ERROR, te.U.DOMAIN_MOVE_CANCEL, te.U.DOMAIN_MOVE_CANCEL_SUCCESS, te.U.DOMAIN_MOVE_CANCEL_ERROR, te.U.ACTION_CENTER_NAVIGATE, te.U.ACTION_CENTER_DOMAIN_MOVE_DECISION, te.U.ACTION_CENTER_DOMAIN_MOVE_DECISION_SUCCESS, te.U.ACTION_CENTER_DOMAIN_MOVE_DECISION_ERROR, oe.KO.CLICK_GET_STARTED_GUIDE, oe.KO.CLICK_PIPELINE_DOCUMENTATION, oe.KO.CLICK_QUICK_LINK, oe.KO.CREATE_PIPELINE, oe.KO.DELETE_PIPELINE, oe.KO.LIST_PIPELINES, oe.KO.VIEW_PIPELINE, b.S.EXISTING_DOMAIN, b.S.NEW_DOMAIN, b.S.WAF_RULESET, b.S.WORKERS, b.S.PAGES, b.S.R2, b.S.ACCOUNT_MEMBERS, F._.TEMPLATE_PRODUCT_SELECTED, F._.TEMPLATE_SELECTED, F._.TEMPLATE_SAVE_DRAFT, F._.TEMPLATE_CANCEL, F._.TEMPLATE_DEPLOY, Se.D.CLICK_GO_BACK_SHARE_MODAL, Se.D.CLICK_MENU_ITEM_SHARE, Se.D.CLICK_ON_CANCEL_SHARE_MODAL, Se.D.CLICK_ON_CLOSE_SHARE_MODAL, Se.D.CLICK_ON_CONFIGURE_SHARE_BUTTON, Se.D.CLICK_ON_DELETE_RULESET, Se.D.CLICK_ON_DEPLOY_BUTTON_SHARE_MODAL, Se.D.CLICK_ON_EDIT_SHARE_PERMISSION, Se.D.CLICK_ON_GO_TO_SOURCE_ACCOUNT, Se.D.CLICK_ON_SHARE_BUTTON_SHARE_MODAL, Se.D.CLICK_ON_SHARE_TABLE_ROW, q.pR.CLICK_GEOGRAPHICAL_TEMPLATE, q.pR.CLICK_IP_TEMPLATE, q.pR.CLICK_USER_AGENT_TEMPLATE, q.pR.CLICK_ZONE_LOCKDOWN_TEMPLATE, he.vc.CREATED, he.vc.ENABLED, he.vc.DISABLED, he.vc.DELETED, he.vc.UPDATED, he.vc.DOWNLOADED, Ee.Gk.REQUEST_REVIEW, Ee.Gk.COPY_URL, R.v.FIELD, R.v.OPERATOR, ge.Vj.SHOW_LCC_MIGRATION_BANNER, ge.Vj.CLICK_LCC_DOCUMENTATION, ge.Vj.CLICK_LCC_UPGRADE_GUIDE, ge.Vj.SHOW_LCC_MIGRATION_WARNING),
				Pe = n.eg.exactStrict(n.eg.object({
					".agency": n.eg.any.optional,
					".auction": n.eg.any.optional,
					".bet": n.eg.any.optional,
					".center": n.eg.any.optional,
					".church": n.eg.any.optional,
					".com": n.eg.any.optional,
					".community": n.eg.any.optional,
					".energy": n.eg.any.optional,
					".fitness": n.eg.any.optional,
					".guru": n.eg.any.optional,
					".io": n.eg.any.optional,
					".info": n.eg.any.optional,
					".immo": n.eg.any.optional,
					".lgbt": n.eg.any.optional,
					".life": n.eg.any.optional,
					".live": n.eg.any.optional,
					".media": n.eg.any.optional,
					".mobi": n.eg.any.optional,
					".net": n.eg.any.optional,
					".network": n.eg.any.optional,
					".ninja": n.eg.any.optional,
					".online": n.eg.any.optional,
					".org": n.eg.any.optional,
					".photography": n.eg.any.optional,
					".plus": n.eg.any.optional,
					".press": n.eg.any.optional,
					".pro": n.eg.any.optional,
					".services": n.eg.any.optional,
					".store": n.eg.any.optional,
					".tech": n.eg.any.optional,
					".wiki": n.eg.any.optional,
					".wtf": n.eg.any.optional,
					".xyz": n.eg.any.optional,
					_ga: n.eg.any.optional,
					_lpchecked: n.eg.any.optional,
					a: n.eg.any.optional,
					absolute: n.eg.any.optional,
					access: n.eg.any.optional,
					access_users_allowed: n.eg.any.optional,
					account: n.eg.any.optional,
					accountId: n.eg.any.optional,
					"accountResolver/SELECT_ACCOUNT": n.eg.any.optional,
					"accountResolver/NO_ACTION": n.eg.any.optional,
					accountResolverTotalCpuTime: n.eg.any.optional,
					accountResolverTotalTime: n.eg.any.optional,
					accountResolverTotalUserActionsTime: n.eg.any.optional,
					action: n.eg.any.optional,
					addedRecords: n.eg.any.optional,
					addon: n.eg.any.optional,
					address: n.eg.any.optional,
					apiUrl: n.eg.any.optional,
					argo_accelerated_gigabytes: n.eg.any.optional,
					"aria-current": n.eg.any.optional,
					"aria-controls": n.eg.any.optional,
					"aria-label": n.eg.any.optional,
					"aria-selected": n.eg.any.optional,
					authHeaders: n.eg.any.optional,
					autocomplete: n.eg.any.optional,
					autoRenew: n.eg.any.optional,
					autoSetup: n.eg.any.optional,
					b: n.eg.any.optional,
					buckets: n.eg.string.optional,
					banner: n.eg.any.optional,
					bot_management: n.eg.any.optional,
					brokenExpression: n.eg.any.optional,
					bundle: n.eg.any.optional,
					c: n.eg.any.optional,
					cacheKey: n.eg.any.optional,
					cache_by_device_type: n.eg.any.optional,
					cache_rules: n.eg.any.optional,
					campaignId: n.eg.any.optional,
					campaignID: n.eg.any.optional,
					cancelled: n.eg.any.optional,
					category: n.eg.any.optional,
					cd43: n.eg.any.optional,
					cd45: n.eg.any.optional,
					cd47: n.eg.any.optional,
					certificate_pack_id: n.eg.any.optional,
					certificate_pack_type: n.eg.any.optional,
					cf: n.eg.any.optional,
					cfPlan: n.eg.any.optional,
					chartName: n.eg.any.optional,
					charts: n.eg.any.optional,
					childrenCount: n.eg.any.optional,
					childrenSelected: n.eg.any.optional,
					class: n.eg.any.optional,
					code0: n.eg.any.optional,
					columnName: n.eg.string.optional,
					completedTasks: n.eg.any.optional,
					component: n.eg.any.optional,
					component_values: n.eg.any.optional,
					configuration_rules: n.eg.any.optional,
					contentfulId: n.eg.any.optional,
					country: n.eg.any.optional,
					currentCA: n.eg.any.optional,
					currentPerPage: n.eg.any.optional,
					currentPage: n.eg.any.optional,
					d: n.eg.any.optional,
					dashVersion: n.eg.any.optional,
					"data-children-count": n.eg.any.optional,
					"data-tracking-name": n.eg.any.optional,
					"data-tracking-id": n.eg.any.optional,
					"data-testid": n.eg.any.optional,
					dataset: n.eg.any.optional,
					databaseId: n.eg.any.optional,
					dateCreated: n.eg.any.optional,
					dateModified: n.eg.any.optional,
					ddos: n.eg.any.optional,
					description: n.eg.string.optional,
					dedicated_certificates: n.eg.any.optional,
					dedicated_certificates_custom: n.eg.any.optional,
					deepLink: n.eg.any.optional,
					default: n.eg.any.optional,
					destinationPage: n.eg.string.optional,
					detailType: n.eg.any.optional,
					deviceViewport: n.eg.any.optional,
					direction: n.eg.any.optional,
					directive: n.eg.any.optional,
					"DNS import method": n.eg.any.optional,
					domainName: n.eg.any.optional,
					download: n.eg.any.optional,
					duration: n.eg.any.optional,
					dynamic_redirects: n.eg.any.optional,
					e: n.eg.any.optional,
					email_count: n.eg.any.optional,
					end: n.eg.any.optional,
					endDate: n.eg.any.optional,
					enabled: n.eg.any.optional,
					entitled: n.eg.any.optional,
					environment: n.eg.string.optional,
					error: n.eg.any.optional,
					errorCode: n.eg.any.optional,
					errorMessage: n.eg.any.optional,
					errors: n.eg.any.optional,
					exclude_cdn_cgi: n.eg.any.optional,
					expand: n.eg.any.optional,
					experiment: n.eg.any.optional,
					expression: n.eg.any.optional,
					expressionType: n.eg.any.optional,
					features: n.eg.array(n.eg.string).optional,
					failureReasons: n.eg.any.optional,
					featureChange: n.eg.any.optional,
					featureImproved: n.eg.any.optional,
					featureName: n.eg.any.optional,
					featureOriginal: n.eg.any.optional,
					field: n.eg.any.optional,
					fieldName: n.eg.any.optional,
					filterId: n.eg.any.optional,
					firewall_rules: n.eg.any.optional,
					flow: n.eg.any.optional,
					"font-size": n.eg.any.optional,
					form: n.eg.any.optional,
					formView: n.eg.any.optional,
					frequency: n.eg.any.optional,
					from: n.eg.any.optional,
					fromCategorySearch: n.eg.any.optional,
					fromStreamRatePlanId: n.eg.any.optional,
					toStreamRatePlanId: n.eg.any.optional,
					gatesDelayed: n.eg.any.optional,
					geo: n.eg.any.optional,
					guid: n.eg.any.optional,
					hasData: n.eg.any.optional,
					hasRecords: n.eg.any.optional,
					hasSidebarNav: n.eg.boolean.optional,
					"hasTest2019-06-03": n.eg.any.optional,
					hCaptchaDisplayed: n.eg.any.optional,
					header_modification: n.eg.any.optional,
					hostname_count: n.eg.any.optional,
					hostParam: n.eg.any.optional,
					href: n.eg.any.optional,
					id: n.eg.any.optional,
					index: n.eg.any.optional,
					indexLevel: n.eg.any.optional,
					initialRecommendation: n.eg.any.optional,
					ip_access_rules: n.eg.any.optional,
					items: n.eg.number.optional,
					isAuthenticated: n.eg.any.optional,
					isPaused: n.eg.any.optional,
					isCloudflare: n.eg.any.optional,
					isE2e: n.eg.boolean.optional,
					isExpanding: n.eg.boolean.optional,
					isEntAccount: n.eg.boolean.optional,
					isEnterprise: n.eg.boolean.optional,
					isInactive: n.eg.boolean.optional,
					isOpen: n.eg.boolean.optional,
					isScript: n.eg.any.optional,
					isSPA: n.eg.any.optional,
					isStreaming: n.eg.any.optional,
					isParent: n.eg.any.optional,
					isViewAll: n.eg.any.optional,
					isEditingSubscription: n.eg.any.optional,
					is_replacing: n.eg.any.optional,
					isRaw: n.eg.any.optional,
					jurisdiction: n.eg.any.optional,
					key: n.eg.any.optional,
					label: n.eg.any.optional,
					lastTimestamp: n.eg.any.optional,
					last_scan_days_ago: n.eg.any.optional,
					level: n.eg.any.optional,
					limit: n.eg.any.optional,
					link: n.eg.any.optional,
					listType: n.eg.any.optional,
					load_balancing: n.eg.any.optional,
					load_balancing_base: n.eg.any.optional,
					load_balancing_dns_queries: n.eg.any.optional,
					load_balancing_geo_routing: n.eg.any.optional,
					load_balancing_monitor_interval: n.eg.any.optional,
					load_balancing_origins: n.eg.any.optional,
					load_balancing_probe_regions: n.eg.any.optional,
					legacyDeepLink: n.eg.any.optional,
					locale: n.eg.any.optional,
					location: n.eg.any.optional,
					locationHint: n.eg.any.optional,
					maliciousCode: n.eg.any.optional,
					maliciousDomain: n.eg.any.optional,
					maliciousURL: n.eg.any.optional,
					managed_rules: n.eg.any.optional,
					marketingPlan: n.eg.any.optional,
					matchesCount: n.eg.any.optional,
					matchingRequestPercentage: n.eg.any.optional,
					matchingRequests: n.eg.any.optional,
					message0: n.eg.any.optional,
					method: n.eg.any.optional,
					millis: n.eg.any.optional,
					"mirage-recommendation": n.eg.any.optional,
					mode: n.eg.any.optional,
					monitor: n.eg.string.optional,
					monitorType: n.eg.any.optional,
					mrktCheckboxDisplayed: n.eg.any.optional,
					name: n.eg.any.optional,
					newTotalCount: n.eg.any.optional,
					novalidate: n.eg.any.optional,
					numAccounts: n.eg.any.optional,
					numRecords: n.eg.any.optional,
					numRecordsToApply: n.eg.any.optional,
					numRecordsToPrompt: n.eg.any.optional,
					numRecordsToRemove: n.eg.any.optional,
					numRows: n.eg.any.optional,
					origin_rules: n.eg.any.optional,
					nextPlan: n.eg.any.optional,
					numFilters: n.eg.any.optional,
					numRawLogs: n.eg.any.optional,
					numSampledLogs: n.eg.any.optional,
					moreRawLogs: n.eg.any.optional,
					old_expires_on: n.eg.any.optional,
					old_mode: n.eg.any.optional,
					oldFrequency: n.eg.string.optional,
					oldPlan: n.eg.any.optional,
					oldPrice: n.eg.number.optional,
					oldRatePlan: n.eg.string.optional,
					oldStep: n.eg.any.optional,
					oldSubscriptionValues: n.eg.record(n.eg.string, n.eg.any).optional,
					oldValue: n.eg.any.optional,
					onboarding: n.eg.any.optional,
					operator: n.eg.any.optional,
					order: n.eg.string.optional,
					order_by: n.eg.any.optional,
					page: n.eg.any.optional,
					page_rules: n.eg.any.optional,
					pageName: n.eg.any.optional,
					pageNumber: n.eg.any.optional,
					params: n.eg.any.optional,
					paused: n.eg.any.optional,
					phase: n.eg.any.optional,
					origin_url: n.eg.string.optional,
					payment_country: n.eg.string.optional,
					payment_gateway: n.eg.string.optional,
					percentages: n.eg.array(n.eg.number).optional,
					permission: n.eg.string.optional,
					personalisation: n.eg.boolean.optional,
					personalized: n.eg.boolean.optional,
					per_page: n.eg.any.optional,
					plan: n.eg.any.optional,
					plans: n.eg.any.optional,
					planVolume: n.eg.any.optional,
					position: n.eg.number.optional,
					prefs: n.eg.any.optional,
					previousPage: n.eg.any.optional,
					previousTotalCount: n.eg.any.optional,
					price: n.eg.any.optional,
					priority: n.eg.any.optional,
					product: n.eg.any.optional,
					prioritize_malicious: n.eg.any.optional,
					products: n.eg.any.optional,
					productName: n.eg.any.optional,
					productCategory: n.eg.any.optional,
					provider: n.eg.any.optional,
					question: n.eg.any.optional,
					quota: n.eg.any.optional,
					ratePlan: n.eg.any.optional,
					rayId: n.eg.any.optional,
					readTasks: n.eg.any.optional,
					reason: n.eg.any.optional,
					recommendation: n.eg.any.optional,
					recommendationType: n.eg.any.optional,
					recordAdditionMethod: n.eg.any.optional,
					recordTypes: n.eg.any.optional,
					region: n.eg.any.optional,
					registrar: n.eg.any.optional,
					resourceName: n.eg.string.optional,
					rulesCount: n.eg.any.optional,
					gclid: n.eg.any.optional,
					gclsrc: n.eg.any.optional,
					dclid: n.eg.any.optional,
					utm_source: n.eg.any.optional,
					utm_medium: n.eg.any.optional,
					utm_campaign: n.eg.any.optional,
					utm_term: n.eg.any.optional,
					utm_content: n.eg.any.optional,
					rangeMax: n.eg.number.optional,
					rangeMin: n.eg.number.optional,
					rate_limiting: n.eg.any.optional,
					ratePlanId: n.eg.any.optional,
					referring_domain: n.eg.any.optional,
					referrer: n.eg.any.optional,
					registrationPeriod: n.eg.any.optional,
					registrationStatus: n.eg.any.optional,
					rel: n.eg.any.optional,
					relativeTimeRange: n.eg.any.optional,
					resultRank: n.eg.number.optional,
					"rocket_loader-recommendation": n.eg.any.optional,
					role: n.eg.any.optional,
					roles: n.eg.any.optional,
					ruleDescription: n.eg.any.optional,
					ruleId: n.eg.any.optional,
					scanFailed: n.eg.any.optional,
					scope: n.eg.any.optional,
					searchAction: n.eg.any.optional,
					searchDescription: n.eg.any.optional,
					searchParam: n.eg.any.optional,
					searchStatus: n.eg.any.optional,
					searchTerm: n.eg.any.optional,
					searchValue: n.eg.any.optional,
					section: n.eg.any.optional,
					seenOnParam: n.eg.any.optional,
					selected: n.eg.any.optional,
					series: n.eg.any.optional,
					service: n.eg.any.optional,
					setting: n.eg.any.optional,
					setup: n.eg.any.optional,
					showErrors: n.eg.any.optional,
					sortDirection: n.eg.string.optional,
					sortBy: n.eg.string.optional,
					source: n.eg.any.optional,
					startDate: n.eg.any.optional,
					state: n.eg.any.optional,
					status: n.eg.any.optional,
					step: n.eg.any.optional,
					storageClass: n.eg.any.optional,
					string: n.eg.any.optional,
					stream_storage_thousand_minutes: n.eg.any.optional,
					stream_viewed_thousand_minutes: n.eg.any.optional,
					subcategory: n.eg.any.optional,
					subscribedToMarketing: n.eg.any.optional,
					subscriptionValues: n.eg.record(n.eg.string, n.eg.any).optional,
					subcomponent: n.eg.string.optional,
					success: n.eg.any.optional,
					supportLevel: n.eg.any.optional,
					survey: n.eg.any.optional,
					tab: n.eg.any.optional,
					tableName: n.eg.any.optional,
					tag: n.eg.any.optional,
					target: n.eg.any.optional,
					targetPage: n.eg.any.optional,
					targetCA: n.eg.any.optional,
					target_pack_type: n.eg.any.optional,
					task: n.eg.any.optional,
					text: n.eg.any.optional,
					timeRange: n.eg.any.optional,
					title: n.eg.any.optional,
					tld: n.eg.string.optional,
					to: n.eg.any.optional,
					touched: n.eg.any.optional,
					total: n.eg.number.optional,
					transform_rules: n.eg.any.optional,
					trialPlan: n.eg.any.optional,
					trialStart: n.eg.any.optional,
					topic: n.eg.any.optional,
					totalCount: n.eg.any.optional,
					totalCpuTime: n.eg.any.optional,
					totalLevels: n.eg.any.optional,
					totalRequests: n.eg.any.optional,
					totalTime: n.eg.any.optional,
					totalUserActionsTime: n.eg.any.optional,
					type: n.eg.any.optional,
					upgrade: n.eg.boolean.optional,
					uploading: n.eg.any.optional,
					uploadFailed: n.eg.any.optional,
					url_rewrites: n.eg.any.optional,
					hosts: n.eg.string.optional,
					uiType: n.eg.string.optional,
					userId: n.eg.any.optional,
					userType: n.eg.any.optional,
					utm_referrer: n.eg.any.optional,
					validation_method: n.eg.any.optional,
					validity_days: n.eg.any.optional,
					value: n.eg.any.optional,
					visibility: n.eg.any.optional,
					via: n.eg.any.optional,
					waf: n.eg.any.optional,
					wizardName: n.eg.any.optional,
					wordpress: n.eg.any.optional,
					workers: n.eg.any.optional,
					worker_kv_deletes: n.eg.any.optional,
					worker_kv_lists: n.eg.any.optional,
					worker_kv_reads: n.eg.any.optional,
					worker_kv_storage: n.eg.any.optional,
					worker_kv_writes: n.eg.any.optional,
					worker_requests: n.eg.any.optional,
					wp_plugin: n.eg.any.optional,
					write_strategy: n.eg.any.optional,
					zone: n.eg.any.optional,
					zoneId: n.eg.any.optional,
					zoneName: n.eg.any.optional,
					"zoneResolver/NO_ACTION": n.eg.any.optional,
					"zoneResolver/SELECT_ZONE": n.eg.any.optional,
					zoneResolverTotalCpuTime: n.eg.any.optional,
					zoneResolverTotalTime: n.eg.any.optional,
					zoneResolverTotalUserActionsTime: n.eg.any.optional,
					zones: n.eg.any.optional,
					zoneStatus: n.eg.any.optional,
					zoneType: n.eg.any.optional,
					audit: n.eg.any.optional,
					score: n.eg.any.optional,
					potentialSavings: n.eg.any.optional,
					feature: n.eg.any.optional,
					days: n.eg.any.optional,
					minutes: n.eg.any.optional,
					customRange: n.eg.any.optional,
					metric: n.eg.any.optional,
					url: n.eg.any.optional,
					previousPlan: n.eg.any.optional,
					isStarring: n.eg.any.optional,
					isStarred: n.eg.any.optional,
					totalStarredZones: n.eg.number.optional,
					totalZones: n.eg.number.optional,
					widgetName: n.eg.any.optional,
					statusType: n.eg.any.optional,
					outcome: n.eg.any.optional,
					marketingOptInChecked: n.eg.boolean.optional,
					prompt: n.eg.any.optional,
					positive: n.eg.any.optional,
					endpoint: n.eg.any.optional,
					isArgoEnabled: n.eg.any.optional,
					insightClass: n.eg.string.optional,
					insightType: n.eg.string.optional,
					severity: n.eg.string.optional,
					decision: n.eg.any.optional,
					domain: n.eg.any.optional,
					exact: n.eg.any.optional,
					fees: n.eg.any.optional,
					new_selection: n.eg.any.optional,
					numDomainsInCart: n.eg.any.optional,
					payment_method: n.eg.string.optional,
					payment_option: n.eg.string.optional,
					premium: n.eg.any.optional,
					previous_selection: n.eg.any.optional,
					pricing_local: n.eg.any.optional,
					selection: n.eg.any.optional,
					uniqueTopLevelDomains: n.eg.any.optional,
					template_name: n.eg.any.optional,
					productResource: n.eg.any.optional,
					snippets: n.eg.any.optional,
					ddos_l7: n.eg.any.optional,
					http_request_transform: n.eg.any.optional,
					http_request_origin: n.eg.any.optional,
					http_request_cache_settings: n.eg.any.optional,
					http_config_settings: n.eg.any.optional,
					http_request_dynamic_redirect: n.eg.any.optional,
					http_request_sbfm: n.eg.any.optional,
					"transform-rules": n.eg.any.optional,
					http_request_snippets: n.eg.any.optional,
					cloud_connector: n.eg.any.optional,
					is_first_project: n.eg.any.optional,
					is_first_scm_connection: n.eg.any.optional,
					scm_type: n.eg.any.optional,
					existing_connection_total: n.eg.any.optional,
					invalid_fields: n.eg.any.optional,
					is_retry: n.eg.any.optional,
					changed_fields: n.eg.any.optional,
					rulesetName: n.eg.string.optional,
					isECCRuleset: n.eg.boolean.optional,
					isLCCEnabled: n.eg.boolean.optional,
					isECCEnabled: n.eg.boolean.optional
				})),
				Be = (ne, ae) => {
					const [Ce, k] = ze(ae);
					let re, ve;
					return (0, n.nM)(me.decode(ne)) && (re = new L.Uh(ne)), k && k.length > 0 && (ve = new L.oV(ne, k)), [Ce, re, ve]
				},
				ze = ne => {
					const ae = Pe.decode(ne);
					if ((0, n.nM)(ae)) {
						const Ce = ae.left.map(({
							context: k
						}) => k.map(({
							key: re
						}) => re)).reduce((k, re) => k.concat(re), []).filter(k => k in ne);
						return [Oe(Ce, ne), Ce]
					}
					return [ne, []]
				},
				Oe = (ne, ae) => Object.entries(ae).reduce((Ce, [k, re]) => (ne.includes(k) || (Ce[k] = re), Ce), {}),
				Ue = ne => (ae, Ce, k) => {
					const [re, ve, Le] = Be(Ce, k);
					if (ve) throw ve;
					return Le && console.error(Le), ne(ae, Ce, re)
				};
			var Fe = t("../react/utils/zaraz.ts");
			const We = {
					identify: !0
				},
				Ye = ne => (ae, Ce, k) => (We[Ce] || Fe.tg === null || Fe.tg === void 0 || Fe.tg.track(Ce, k), ne(ae, Ce, k));
			var V = t("../react/common/selectors/userSelectors.ts");
			const ce = "pageview",
				fe = "create zone",
				Me = "create user",
				Re = {
					[ce]: !0,
					[fe]: !0,
					[Me]: !0
				},
				xe = ne => {
					var ae;
					return !!((ae = ne.gates.assignments) === null || ae === void 0 ? void 0 : ae["dx-enable-google-tag-manager"])
				},
				Ze = ne => {
					const ae = /\|MCMID\|([0-9]+)\|/,
						Ce = ne.match(ae);
					return Ce ? Ce[1] : void 0
				},
				ot = ne => {
					var ae;
					const {
						deviceViewport: Ce,
						page: k,
						previousPage: re,
						pageName: ve,
						utm_campaign: Le,
						_ga: Ne,
						"AMCV_8AD56F28618A50850A495FB6%40AdobeOrg": Ve
					} = ne, {
						origin: Je
					} = window.location, qe = (0, V.PR)((0, d.bh)().getState());
					return {
						event: re !== void 0 && k !== re ? "virtual_page_view" : "page_load",
						device_type: Ce,
						hostname: Je,
						language: navigator.language,
						locale: (0, l.r)((0, d.bh)().getState()),
						page_location: k ? `${Je}${k}` : "[redacted]",
						page_path: k ? `${k}` : "[redacted]",
						page_referrer: re ? `${Je}/${re}` : "[redacted]",
						page_timestamp: new Date().toISOString(),
						page_title: ve || "[redacted]",
						page_url: k ? `${Je}${k}` : "[redacted]",
						query: Le ? `?utm_campaign=${Le}` : "[redacted]",
						user_properties: {
							ga_client_id: (ae = Ne) !== null && ae !== void 0 ? ae : void 0,
							ga_client_id_s: Ne ? `s${Ne}` : void 0,
							user_id: Te() ? qe == null ? void 0 : qe.id : void 0,
							ecid: Ve ? Ze(Ve) : void 0
						}
					}
				},
				lt = () => ({
					event: "zone_create",
					page_timestamp: new Date().toISOString(),
					currency: "USD",
					value: 0
				}),
				at = ne => {
					const {
						status: ae
					} = ne;
					return ae === "success" ? {
						event: "new_user_create",
						page_timestamp: new Date().toISOString(),
						currency: "USD",
						value: 0
					} : void 0
				},
				dt = (ne, ae) => {
					switch (ne) {
						case "pageview":
							return ot(ae);
						case "create zone":
							return lt();
						case "create user":
							return at(ae);
						default:
							return
					}
				},
				pt = ne => (ae, Ce, k) => {
					if (Re[Ce]) {
						var re;
						const ve = dt(Ce, k);
						ve && ((re = window.dataLayer) === null || re === void 0 || re.push(ve))
					}
					return ne(ae, Ce, k)
				};
			var st = t("../react/utils/cookiePreferences.ts");

			function Ge(ne) {
				for (var ae = 1; ae < arguments.length; ae++) {
					var Ce = arguments[ae] != null ? Object(arguments[ae]) : {},
						k = Object.keys(Ce);
					typeof Object.getOwnPropertySymbols == "function" && k.push.apply(k, Object.getOwnPropertySymbols(Ce).filter(function(re) {
						return Object.getOwnPropertyDescriptor(Ce, re).enumerable
					})), k.forEach(function(re) {
						Ae(ne, re, Ce[re])
					})
				}
				return ne
			}

			function Ae(ne, ae, Ce) {
				return ae = Qe(ae), ae in ne ? Object.defineProperty(ne, ae, {
					value: Ce,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : ne[ae] = Ce, ne
			}

			function Qe(ne) {
				var ae = mt(ne, "string");
				return typeof ae == "symbol" ? ae : String(ae)
			}

			function mt(ne, ae) {
				if (typeof ne != "object" || ne === null) return ne;
				var Ce = ne[Symbol.toPrimitive];
				if (Ce !== void 0) {
					var k = Ce.call(ne, ae || "default");
					if (typeof k != "object") return k;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (ae === "string" ? String : Number)(ne)
			}
			const it = ne => {
					const ae = xe((0, d.bh)().getState());
					o().init(Ge({
						sourceKey: "ca633f741e204a5291e02fcb6c591020",
						debug: !1,
						url: "https://sparrow.cloudflare.com",
						enabled: G() && !(0, s.gm)() && Te(),
						middlewares: [M, Ue, C, Ye, ...ae ? [pt] : []]
					}, ne))
				},
				gt = () => {
					o().identify(Ge({}, (0, e.getAttribution)(), {
						locale: (0, l.r)((0, d.bh)().getState()),
						isCloudflare: !!(0, m.Jd)(),
						isE2e: Boolean(void 0)
					}))
				},
				G = () => !0,
				ue = () => {
					(0, st.kT)("sparrow_id")
				},
				Te = () => (0, st.Xm)()
		},
		"../utils/initStyles.ts": function(W, v, t) {
			"use strict";
			var e = t("../../../../node_modules/@cloudflare/style-const/es/index.js"),
				o = t("../react/app/providers/storeContainer.js");
			const s = "cfBaseStyles",
				d = document.head || document.getElementsByTagName("head")[0],
				l = a => {
					const u = [];
					for (let E in a.colors) {
						const n = a.colors[E];
						if (Array.isArray(n) && E !== "categorical")
							for (let r = 0; r < n.length; ++r) u.push(`--cf-${E}-${r}:${n[r]};`)
					}
					return u.join(`
`)
				},
				m = () => {
					const a = (0, e.Yc)(),
						u = `
    * {
      box-sizing: border-box;
    }

    ::placeholder {
      color: ${e.Rl.colors.gray[5]}
    }

    html, body, button {
      font-size: 16px;
    }

    html {
      -webkit-font-smoothing: antialiased;
      -webkit-text-size-adjust: none;
    }

    body {
      line-height: 1.5;
      color: ${e.Rl.colors.gray[1]};
      background-color: ${e.Rl.colors.background};
      font-family: ${e.Rl.fontFamily};
    }

    text {
      fill: ${e.Rl.colors.gray[1]};
    }

    body, html, ul, ol, li, p, h1, h2, h3, h4, h5, h6 {
      margin: 0;
      padding: 0;
    }

    h1, h2, h3, small {
      line-height: 1.25;
    }

    h1 {
      font-size: 32px;
      font-weight: 400;
    }

    h2 {
      font-size: 24px;
    }

    h3 {
      font-size: 20px;
    }

    h4, h5, h6 {
      font-size: 16px;
    }

    h2, h3, h4, h5 h4, h5, h6 {
      font-weight: 600;
    }

     h3 + p, h4 + p, h5 + p, h6 + p {
       margin-top: 0.5em;
     }

    small {
      font-size: 12px;
    }

    button {
      font-family: ${e.Rl.fontFamily};
      border: none;
    }

    label {
      display: block;
      font-size: 0.875rem;
      margin-bottom: 0.35938em;
      min-height: 1.22em;
    }

    fieldset {
      border: none;
    }

    pre {
      border-radius: 3px;
      color: ${e.Rl.colors.gray[1]};
      display: block;
      font-size: 14px;
      margin: 2rem 0;
      overflow: auto;
      padding: 0.5rem;
      width: 100%;
    }

    code, pre {
      background-color: ${a?e.Rl.colors.gray[8]:e.Rl.colors.gray[9]};
      border: 1px solid ${a?e.Rl.colors.gray[7]:e.Rl.colors.gray[8]};
      font-family: monaco, courier, monospace;
    }

    section {
      margin-bottom: 2.5rem;
      margin-top: 2.5rem;
    }

    thead {
      background-color: ${a?e.Rl.colors.gray[8]:e.Rl.colors.gray[9]}
    }

    th {
      font-weight: 600;
    }

    a {
      color: ${a?e.Rl.colors.blue[3]:e.Rl.colors.blue[4]};
      text-decoration: underline;
      text-underline-offset: 4px;
      transition: color 150ms ease;
    }

    a:hover {
      color: ${a?e.Rl.colors.orange[3]:e.Rl.colors.blue[2]};
      cursor: pointer;
    }

    a:active {
      color: ${a?e.Rl.colors.orange[3]:e.Rl.colors.blue[2]};
      outline: none;
    }

    a:focus {
      color: ${e.Rl.colors.blue[5]};
    }

    a svg, a:active svg, a:hover svg {
      fill: currentColor
    }

    ol, ul, dl {
      list-style-position: outside;
      margin-left: 3em;
    }

    ul {
      list-style-type: disc;
    }

    dd {
      margin: 0;
    }

    dt {
      font-weight: 600;
      font-size: ${e.Rl.fontSizes[3]}px
    }

    p+p, p+ul, p+ol, p+dl, ul+p, ul+h2, ul+h3, ul+h4, ul+h5, ul+h6 {
      margin-top: 1.5em;
    }

    hr {
      border: 0;
      border-top: 1px solid #d5d7d8;
      display: block;
      height: 0;
      margin: 2rem 0;
      width: 100%;
    }

    img, object {
      height: auto;
      max-width: 100%;
    }

    table {
      border-spacing: 0;
    }

    legend {
      padding-inline-start: 0;
    }

    fieldset {
      margin-inline-start: 0;
    }

    input:-webkit-autofill,
    input:-webkit-autofill:hover,
    input:-webkit-autofill:focus {
      background-color: ${e.Rl.colors.background};
      color:  ${e.Rl.colors.gray[8]}
    }

    :root {
      --cf-white: ${e.Rl.colors.white};
      --cf-black: ${e.Rl.colors.black};
      ${l(e.Rl)}
    }
    
    .mode-transition *,
    .mode-transition body,
    .mode-transition input,
    .mode-transition button,
    .mode-transition footer,
    .mode-transition header,
    .mode-transition div {
      transition-duration: ${e.Rl.modeTransitionTime}ms !important;
      transition-property: color, background, background-color, fill, opacity, border, border-color !important;
      transition-timing-function: ease-out !important;
    }

    .ReactVirtualized__List {
      outline: none
    }
    .grim-scroll-sortable-helper {
      pointer-events: auto !important;
      z-index: 2000 !important;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.2) !important;
      background-color: white !important;
    }
    .grim-scroll-sortable-helper * {
      cursor: grabbing !important;
    }
  `;
					let E = document.getElementById(s);
					E ? E.innerText = "" : (E = document.createElement("style"), E.id = s, d.appendChild(E)), E.appendChild(document.createTextNode(u)), (0, o.bh)().dispatch({
						type: "cfForceUpdate"
					})
				};
			(0, e.fF)(m), v.Z = m
		},
		"../utils/sentry/lastSentEventId.ts": function(W, v, t) {
			"use strict";
			t.d(v, {
				e: function() {
					return o
				}
			});
			const o = (() => {
				let s = "";
				return {
					setEventId: m => (!m || typeof m != "string" || (s = m), s),
					getEventId: () => s
				}
			})()
		},
		"../utils/zaraz.ts": function(W, v, t) {
			"use strict";
			t.d(v, {
				Ro: function() {
					return r
				},
				bM: function() {
					return u
				},
				tg: function() {
					return a
				},
				yn: function() {
					return n
				}
			});

			function e(i) {
				for (var p = 1; p < arguments.length; p++) {
					var c = arguments[p] != null ? Object(arguments[p]) : {},
						_ = Object.keys(c);
					typeof Object.getOwnPropertySymbols == "function" && _.push.apply(_, Object.getOwnPropertySymbols(c).filter(function(y) {
						return Object.getOwnPropertyDescriptor(c, y).enumerable
					})), _.forEach(function(y) {
						o(i, y, c[y])
					})
				}
				return i
			}

			function o(i, p, c) {
				return p = s(p), p in i ? Object.defineProperty(i, p, {
					value: c,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : i[p] = c, i
			}

			function s(i) {
				var p = d(i, "string");
				return typeof p == "symbol" ? p : String(p)
			}

			function d(i, p) {
				if (typeof i != "object" || i === null) return i;
				var c = i[Symbol.toPrimitive];
				if (c !== void 0) {
					var _ = c.call(i, p || "default");
					if (typeof _ != "object") return _;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (p === "string" ? String : Number)(i)
			}
			const l = {
					track: (i, p) => null,
					set: (i, p) => console.log(`zaraz.set(${i}, ${p})`)
				},
				m = {
					track: (i, p) => {
						var c;
						(c = window.zaraz) === null || c === void 0 || c.track(i, e({}, p, {
							OnetrustActiveGroups: window.OnetrustActiveGroups
						}))
					},
					set: (i, p) => {
						var c;
						return (c = window.zaraz) === null || c === void 0 ? void 0 : c.set(i, p)
					}
				};
			let a;
			const u = () => {
					window.zaraz, a = m
				},
				E = ["email", "first_name", "last_name"],
				n = i => {
					E.forEach(p => {
						var c;
						(c = a) === null || c === void 0 || c.set(p, i[p])
					})
				},
				r = () => {
					n({})
				}
		},
		"../../../common/component/component-filter-bar/src/FilterBuilder.jsx": function(W, v, t) {
			"use strict";
			var e = t("webpack/sharing/consume/default/react/react"),
				o = t.n(e),
				s = t("../../../common/component/component-filter-bar/node_modules/prop-types/index.js"),
				d = t.n(s),
				l = t("../../../../node_modules/@cloudflare/style-container/es/index.js"),
				m = t("webpack/sharing/consume/default/@cloudflare/intl-react/@cloudflare/intl-react"),
				a = t.n(m),
				u = t("../../../../node_modules/@cloudflare/component-input/es/index.js"),
				E = t("../../../common/component/component-filter-bar/node_modules/@cloudflare/component-button/es/index.js"),
				n = t("../../../../node_modules/@cloudflare/component-icon/es/index.js"),
				r = t("../../../common/component/component-filter-bar/node_modules/@cloudflare/component-arrow-swivel/es/index.js"),
				i = t("../../../../node_modules/@cloudflare/component-forms/es/index.js"),
				p = t("../../../../node_modules/@cloudflare/elements/es/index.js"),
				c = t("../../../common/component/component-filter-bar/src/MultiSelect.js"),
				_ = t("../../../common/component/component-filter-bar/src/ViewMoreLink.jsx"),
				y = t("../../../common/component/component-filter-bar/src/EditFilterDropdown.jsx"),
				T = t("../../../common/component/component-filter-bar/src/constants.js"),
				O = t("../../../common/component/component-filter-bar/src/utils.js");

			function h(j) {
				for (var $ = 1; $ < arguments.length; $++) {
					var F = arguments[$] != null ? Object(arguments[$]) : {},
						X = Object.keys(F);
					typeof Object.getOwnPropertySymbols == "function" && X.push.apply(X, Object.getOwnPropertySymbols(F).filter(function(oe) {
						return Object.getOwnPropertyDescriptor(F, oe).enumerable
					})), X.forEach(function(oe) {
						S(j, oe, F[oe])
					})
				}
				return j
			}

			function S(j, $, F) {
				return $ = g($), $ in j ? Object.defineProperty(j, $, {
					value: F,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : j[$] = F, j
			}

			function g(j) {
				var $ = C(j, "string");
				return typeof $ == "symbol" ? $ : String($)
			}

			function C(j, $) {
				if (typeof j != "object" || j === null) return j;
				var F = j[Symbol.toPrimitive];
				if (F !== void 0) {
					var X = F.call(j, $ || "default");
					if (typeof X != "object") return X;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return ($ === "string" ? String : Number)(j)
			}
			const M = 70,
				b = (0, l.createStyledComponent)(({
					showOverflow: j
				}) => h({
					position: "relative",
					display: "flex",
					flexDirection: "row",
					flexWrap: "wrap",
					width: "100%"
				}, j ? {} : {
					maxHeight: M,
					overflow: "hidden"
				})),
				R = (0, l.createStyledComponent)(() => ({
					marginBottom: ".25rem",
					"&:not(:last-child)": {
						marginRight: ".25rem"
					}
				})),
				A = (0, l.createStyledComponent)(({
					theme: j
				}) => ({
					backgroundColor: j.colors.background,
					py: 1,
					px: 2,
					borderRadius: j.radii[2],
					border: `1px solid ${j.colors.gray[7]}`,
					fontSize: j.fontSizes[2],
					position: "relative",
					cursor: "pointer",
					transition: "border-color 120ms ease-out",
					":hover": {
						borderColor: j.colors.gray[4]
					}
				}), "div"),
				L = (0, l.createStyledComponent)(() => ({
					mr: 1
				}), "span"),
				P = (0, l.createStyledComponent)(({
					theme: j
				}) => ({
					color: j.colors.gray[4],
					mr: 1
				}), "span"),
				H = (0, l.createStyledComponent)(() => ({
					mr: 2,
					maxWidth: 180,
					whiteSpace: "nowrap",
					display: "inline-block",
					verticalAlign: "bottom",
					overflow: "hidden",
					textOverflow: "ellipsis",
					"@media print": {
						marginRight: 0
					}
				}), "span"),
				K = (0, l.createStyledComponent)(({
					buttonStyle: j
				}) => h({
					display: "inline-flex",
					alignItems: "center",
					justifyContent: "center",
					height: 35,
					mr: 3,
					mb: 1,
					py: 1,
					px: 2,
					fontSize: 2,
					"@media print": {
						display: "none"
					}
				}, j), E.zx),
				Q = (0, l.createStyledComponent)(() => ({
					mr: 2,
					fontSize: 2,
					display: "none",
					"@media print": {
						display: "initial"
					}
				}), "h4"),
				pe = (0, l.createStyledComponent)(({
					theme: j
				}) => ({
					backgroundColor: "transparent",
					borderColor: "transparent",
					p: 0,
					lineHeight: 1,
					display: "inline-block",
					color: j.colors.gray[4],
					transition: "color 120ms ease-out",
					cursor: "pointer",
					":hover": {
						color: j.colors.gray[1],
						backgroundColor: "transparent",
						borderColor: "transparent"
					},
					":active": {
						color: j.colors.gray[1],
						backgroundColor: "transparent",
						borderColor: "transparent"
					},
					":focus": {
						color: j.colors.gray[1],
						backgroundColor: "transparent",
						borderColor: "transparent"
					},
					"@media print": {
						display: "none"
					}
				}), "button"),
				te = (0, l.createStyledComponent)(() => ({
					display: "flex",
					justifyContent: "space-between",
					alignItems: "start",
					width: "100%",
					flexWrap: "wrap"
				})),
				Y = j => j.current ? [...j.current.children].reduce(($, F) => (F.offsetTop >= M && $++, $), 0) : 0;
			let ie = 0;
			class Z extends e.Component {
				constructor() {
					super();
					S(this, "overflowWrapper", (0, e.createRef)()), S(this, "hasOverflowed", $ => {
						const F = Y(this.overflowWrapper);
						$.scrollHeight > M && F >= 1 && !this.state.hasOverflowed ? this.setState({
							hasOverflowed: !0
						}) : ($.scrollHeight < M || F === 0) && this.state.hasOverflowed === !0 && this.setState({
							hasOverflowed: !1
						})
					}), S(this, "addNewFilter", () => {
						const {
							filterDefinitions: $
						} = this.props, F = (0, O.TE)($), X = Object.keys(F)[0];
						this.setState({
							openFilter: this.props.filters.length + 1,
							filterChanges: {
								key: X,
								operator: (0, O.uv)(X, F),
								value: (0, O.TT)(X, F)
							}
						})
					}), S(this, "handleOpenFilterEdit", $ => {
						this.setState({
							openFilter: $,
							filterChanges: h({}, this.props.filters[$])
						})
					}), S(this, "handleRemoveFilterClick", ($, F) => {
						$.stopPropagation(), this.removeFilter(F)
					}), S(this, "removeFilter", $ => {
						const {
							handleFiltersChange: F
						} = this.props, X = [...this.props.filters], oe = X[$];
						X.splice($, 1), F(X), this.closeOpenFilterChanges(), this.props.onRemoveFilter({
							field: oe.key,
							operator: oe.operator,
							value: oe.value
						})
					}), S(this, "closeOpenFilterChanges", () => {
						this.setState({
							invalid: !1,
							openFilter: null,
							filterChanges: null
						})
					}), S(this, "handleFilterSubmit", $ => {
						const {
							filterDefinitions: F
						} = this.props;
						$.preventDefault();
						const {
							filterChanges: X
						} = this.state, oe = typeof F[X.key].parse == "function" ? Array.isArray(X.value) ? X.value.map(F[X.key].parse) : F[X.key].parse(X.value) : X.value;
						if (F[X.key].validate && (Array.isArray(oe) ? !oe.every(F[X.key].validate) : !F[X.key].validate(oe))) return this.setState({
							invalid: !0
						});
						const Ee = [...this.props.filters],
							B = h({}, X, {
								value: oe
							}),
							I = !Ee[this.state.openFilter];
						I ? Ee.push(B) : Ee[this.state.openFilter] = h({}, X), this.props.handleFiltersChange(Ee, B), (I ? this.props.onAddFilter : this.props.onEditFilter)({
							field: B.key,
							operator: B.operator,
							value: B.value
						}), this.closeOpenFilterChanges()
					}), S(this, "handlePendingKeyChange", ({
						value: $
					}) => {
						const {
							filterDefinitions: F
						} = this.props;
						this.setState({
							invalid: !1,
							filterChanges: {
								key: $,
								operator: (0, O.uv)($, F),
								value: (0, O.TT)($, F)
							}
						})
					}), S(this, "handlePendingOperatorChange", ({
						value: $
					}) => {
						let F = h({}, this.state.filterChanges, {
							operator: $
						});
						if ((0, O.dr)($)) {
							var X, oe;
							((X = this.state.filterChanges) === null || X === void 0 ? void 0 : X.value) && !Array.isArray((oe = this.state.filterChanges) === null || oe === void 0 ? void 0 : oe.value) && (F.value = [this.state.filterChanges.value])
						} else {
							var Ee, B, I;
							((Ee = this.state.filterChanges) === null || Ee === void 0 ? void 0 : Ee.value) && Array.isArray((B = this.state.filterChanges) === null || B === void 0 ? void 0 : B.value) && ((I = this.state.filterChanges) === null || I === void 0 ? void 0 : I.value.length) > 0 && (F.value = this.state.filterChanges.value[0])
						}
						this.setState({
							invalid: !1,
							filterChanges: F
						})
					}), S(this, "handlePendingValueChange", $ => {
						this.setState({
							invalid: !1,
							filterChanges: h({}, this.state.filterChanges, {
								value: $
							})
						})
					}), S(this, "handleShowOverflow", () => {
						this.setState({
							showOverflow: !this.state.showOverflow
						})
					}), this.state = {
						open: !1,
						invalid: !1,
						openFilter: null,
						filterChanges: null,
						hasOverflowed: !1,
						showOverflow: !1,
						id: ++ie
					}, this.renderPendingChangeValue = this.renderPendingChangeValue.bind(this), this.handleFilterSubmit = this.handleFilterSubmit.bind(this), this.handlePendingKeyChange = this.handlePendingKeyChange.bind(this), this.handlePendingOperatorChange = this.handlePendingOperatorChange.bind(this)
				}
				componentDidMount() {
					this.hasOverflowed(this.overflowWrapper.current)
				}
				componentDidUpdate($) {
					$.filters !== this.props.filters && this.closeOpenFilterChanges(), this.hasOverflowed(this.overflowWrapper.current)
				}
				renderPendingChangeValue($) {
					const {
						formatLabel: F,
						filterDefinitions: X
					} = this.props, {
						operator: oe
					} = this.state.filterChanges, Ee = X[this.state.filterChanges.key], B = this.state.filterChanges.value, I = x => Array.isArray(x) ? x.map(q => q.value) : (x == null ? void 0 : x.value) || null;
					if (Ee.renderValueComponent) return Ee.renderValueComponent({
						value: this.state.filterChanges.value,
						onChange: this.handlePendingValueChange
					});
					switch (Ee.type) {
						case T.k.select:
							return (0, O.dr)(oe) ? o().createElement(c.Z, {
								searchable: !0,
								multi: !0,
								creatable: !Ee.options,
								value: typeof B.split == "function" ? B == null ? void 0 : B.split(",") : Array.isArray(B) ? B : [],
								options: Ee.options ? Ee.options.map(x => ({
									value: x.value || x,
									label: x.label || F(this.state.filterChanges.key, x, $)
								})) : B ? (Array.isArray(B) ? B : B.split(",")).map(x => ({
									label: x,
									value: x
								})) : [],
								noOptionsMessage: () => null,
								placeholder: o().createElement(m.Trans, {
									id: Ee.options ? "filter_editor.value_in_select_placeholder" : "filter_editor.value_in_creatable_placeholder",
									_: Ee.options ? "Select multiple values" : "Enter multiple values"
								}),
								onChange: x => {
									this.handlePendingValueChange(I(x))
								},
								isValidNewOption: x => {
									const q = Ee.validate;
									return !q && x || x && q([x])
								},
								getNewOptionData: (x, q) => ({
									value: x,
									label: q
								})
							}) : o().createElement(i.hQ, {
								hideLabel: !0,
								value: B,
								options: Ee.options.map(x => ({
									value: x,
									label: F(this.state.filterChanges.key, x, $)
								})),
								onChange: ({
									value: x
								}) => this.handlePendingValueChange(x)
							});
						case T.k.string:
						default:
							return (0, O.dr)(oe) ? o().createElement(c.Z, {
								searchable: !0,
								multi: !0,
								creatable: !0,
								value: typeof B.split == "function" ? B == null ? void 0 : B.split(",") : Array.isArray(B) ? B : [],
								options: B ? (Array.isArray(B) ? B : B.split(",")).map(x => ({
									label: x,
									value: x
								})) : [],
								noOptionsMessage: () => null,
								placeholder: $.t("analytics.report.filters.labels.placeholder", {
									example: X[this.state.filterChanges.key].example,
									_: ""
								}),
								onChange: x => {
									this.handlePendingValueChange(I(x))
								},
								isValidNewOption: x => {
									const q = Ee.validate;
									return !q && x || x && q([x])
								},
								getNewOptionData: (x, q) => ({
									value: x,
									label: q
								}),
								formatCreateLabel: x => $.t("filter_editor.value_create_label", {
									value: x
								})
							}) : o().createElement(m.I18n, null, x => o().createElement(u.I, {
								value: this.state.filterChanges.value,
								onChange: q => this.handlePendingValueChange(q.target.value),
								mb: 0,
								name: "custom-value",
								placeholder: x.t("analytics.report.filters.labels.placeholder", {
									example: X[this.state.filterChanges.key].example,
									_: ""
								})
							}))
					}
				}
				render() {
					const {
						formatLabel: $,
						filterDefinitions: F,
						modalStyles: X,
						filterIconType: oe,
						buttonStyle: Ee
					} = this.props, B = Y(this.overflowWrapper), I = `filterPanel${this.state.id}`, x = this.state.openFilter !== null;
					return o().createElement(m.I18n, null, q => o().createElement(p.ZC, {
						display: "flex",
						flexDirection: "row",
						flexWrap: "wrap",
						mr: "auto",
						width: "100%"
					}, o().createElement(te, null, o().createElement(K, {
						type: "primary",
						onClick: this.addNewFilter,
						"aria-expanded": x,
						"aria-controls": I,
						inverted: !0,
						buttonStyle: Ee
					}, o().createElement(n.J, {
						type: oe || "add",
						mr: 1,
						label: q.t("common.add", {
							_: "Add"
						})
					}), o().createElement(m.Trans, {
						id: "analytics.report.filters.labels.add_filter",
						_: "Add filter"
					})), this.props.filters.length > 0 && o().createElement(Q, null, o().createElement(m.Trans, {
						id: "analytics.report.filters.labels.filters",
						_: "Filters:"
					})), this.props.children), o().createElement(b, {
						innerRef: this.overflowWrapper,
						overflowLimit: M,
						showOverflow: this.state.showOverflow
					}, this.props.filters.map((ee, de) => {
						const {
							key: he,
							operator: Se,
							value: ke
						} = ee, je = F[he].ignoreLabelTranslation ? F[he].label : q.t(F[he].label), we = q.t(`analytics.report.filters.operators.${Se}`), $e = Array.isArray(ke) ? ke.map(z => $(he, z, q)).join(", ") : $(he, ke, q), Ke = `${je} ${we} ${$e}`;
						return o().createElement(R, {
							key: `${he}-${Se}-${ke}`,
							title: Ke
						}, o().createElement(A, {
							onClick: () => this.handleOpenFilterEdit(de)
						}, o().createElement(p.ZC, {
							display: "flex"
						}, o().createElement(L, null, je), o().createElement(P, null, we), o().createElement(H, null, $e), (0, O.oN)(ee, F) ? o().createElement(r.OE, {
							startAngle: 90,
							color: "gray.4"
						}) : o().createElement(pe, {
							onClick: z => this.handleRemoveFilterClick(z, de),
							"aria-label": "remove"
						}, o().createElement(n.J, {
							type: "remove"
						})))))
					})), x && o().createElement(y.Z, {
						id: I,
						filterDefinitions: F,
						closeOpenFilterChanges: this.closeOpenFilterChanges,
						handleFilterSubmit: this.handleFilterSubmit,
						handlePendingKeyChange: this.handlePendingKeyChange,
						handlePendingOperatorChange: this.handlePendingOperatorChange,
						renderPendingChangeValue: this.renderPendingChangeValue,
						isNew: this.state.openFilter > this.props.filters.length,
						isPersistent: (0, O.oN)(this.state.filterChanges, F),
						filterChanges: this.state.filterChanges,
						invalid: this.state.invalid,
						formatLabel: $,
						modalStyles: X
					}), this.state.hasOverflowed && o().createElement(_.Z, {
						count: B,
						showOverflow: this.state.showOverflow,
						onClick: this.handleShowOverflow
					})))
				}
			}
			S(Z, "propTypes", {
				filterDefinitions: d().shape({}),
				filters: d().arrayOf(d().shape({
					key: d().string,
					operator: d().string,
					value: d().string
				})),
				handleFiltersChange: d().func.isRequired,
				formatLabel: d().func.isRequired,
				onAddFilter: d().func,
				onEditFilter: d().func,
				onRemoveFilter: d().func,
				children: d().node,
				modalStyles: d().object,
				filterIconType: d().string,
				buttonStyle: d().object
			}), v.Z = Z
		},
		"../../../common/component/component-filter-bar/src/index.js": function(W, v, t) {
			"use strict";
			t.d(v, {
				ME: function() {
					return o.Z
				},
				f8: function() {
					return e.Z
				},
				kE: function() {
					return s.k
				},
				oN: function() {
					return d.oN
				}
			});
			var e = t("../../../common/component/component-filter-bar/src/FilterBar.jsx"),
				o = t("../../../common/component/component-filter-bar/src/FilterBuilder.jsx"),
				s = t("../../../common/component/component-filter-bar/src/constants.js"),
				d = t("../../../common/component/component-filter-bar/src/utils.js"),
				l = t("../../../common/component/component-filter-bar/src/TimerangeSelect.jsx")
		},
		"../../../common/intl/intl-core/src/errors.ts": function(W, v, t) {
			"use strict";
			t.d(v, {
				OZ: function() {
					return l
				},
				YB: function() {
					return d
				}
			});

			function e(a, u, E) {
				return u = o(u), u in a ? Object.defineProperty(a, u, {
					value: E,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : a[u] = E, a
			}

			function o(a) {
				var u = s(a, "string");
				return typeof u == "symbol" ? u : String(u)
			}

			function s(a, u) {
				if (typeof a != "object" || a === null) return a;
				var E = a[Symbol.toPrimitive];
				if (E !== void 0) {
					var n = E.call(a, u || "default");
					if (typeof n != "object") return n;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (u === "string" ? String : Number)(a)
			}
			class d extends Error {
				constructor(u, E) {
					super(E);
					e(this, "translationKey", void 0), this.translationKey = u, this.name = "TranslatorError"
				}
			}
			class l extends d {
				constructor(u) {
					super(u, `Translation key not found: ${u}`);
					this.name = "TranslatorKeyNotFoundError"
				}
			}
			var m = null
		},
		"../../../common/util/types/src/api/domain.ts": function(W, v, t) {
			"use strict";
			t.d(v, {
				Aw: function() {
					return M
				},
				Ib: function() {
					return g
				},
				Ks: function() {
					return b
				},
				MS: function() {
					return C
				},
				PN: function() {
					return _
				},
				Pp: function() {
					return d
				},
				Q3: function() {
					return p
				},
				TS: function() {
					return c
				},
				W7: function() {
					return O
				},
				dN: function() {
					return R
				},
				eF: function() {
					return S
				},
				qp: function() {
					return n
				},
				wR: function() {
					return E
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-en-garde/es/index.js");
			const o = e.eg.union([e.eg.literal("registrationPending"), e.eg.literal("registrationPendingAuthorization"), e.eg.literal("registrationPendingZoneCreate"), e.eg.literal("registrationPendingRegister"), e.eg.literal("registrationPendingZoneActivate"), e.eg.literal("registrationPendingSettlement"), e.eg.literal("registrationFailed"), e.eg.literal("registrationFailedAuthorization"), e.eg.literal("registrationFailedQuote"), e.eg.literal("registrationFailedRegister"), e.eg.literal("registrationFailedZoneCreate"), e.eg.literal("registrationFailedZoneActivate"), e.eg.literal("registrationFailedSettlement"), e.eg.literal("registrationFailedDNSFatal"), e.eg.literal("registrationFailedDNSError"), e.eg.literal("registrationFailedDNSLandingCNameFatal"), e.eg.literal("registrationFailedDNSLandingCNameError"), e.eg.literal("restorationPending"), e.eg.literal("restorationPendingZoneCreate"), e.eg.literal("restorationPendingZoneActivate"), e.eg.literal("restorationFailedZoneCreate"), e.eg.literal("restorationFailedZoneActivate"), e.eg.literal("restorationSuccess"), e.eg.literal("restorationZoneCreateSuccess"), e.eg.literal("restorationZoneActivateSuccess"), e.eg.literal("restorationSuccessWithoutReport"), e.eg.literal("transferFOAPending"), e.eg.literal("transferPending"), e.eg.literal("transferRejected"), e.eg.literal("transferCancelled"), e.eg.literal("transferOutPending"), e.eg.literal("registrationActive"), e.eg.literal("expiredParked"), e.eg.literal("deletionInitiated"), e.eg.literal("deletionIrredeemable"), e.eg.literal("domainTerminated"), e.eg.literal("domainFrozen")]),
				s = e.eg.object({
					eligible: e.eg.boolean,
					enabled: e.eg.boolean.optional
				}),
				d = e.eg.object({
					address: e.eg.string,
					address2: e.eg.string,
					city: e.eg.string,
					country: e.eg.string,
					email: e.eg.string,
					email_verified: e.eg.boolean.optional,
					fax: e.eg.string,
					first_name: e.eg.string,
					id: e.eg.string.optional,
					label: e.eg.union([e.eg.null, e.eg.string]).optional,
					last_name: e.eg.string,
					material_changes: e.eg.array(e.eg.string).optional,
					organization: e.eg.string,
					phone: e.eg.string,
					state: e.eg.string,
					zip: e.eg.string
				}),
				l = e.eg.object({
					exists: e.eg.boolean,
					not_premium: e.eg.boolean,
					not_secure: e.eg.boolean,
					not_started: e.eg.boolean,
					not_waiting: e.eg.boolean,
					supported_tld: e.eg.boolean
				}),
				m = e.eg.object({
					registrant: d.optional,
					technical: d.optional,
					administrator: d.optional,
					billing: d.optional
				}),
				a = e.eg.object({
					auto_renew: e.eg.boolean,
					privacy: e.eg.boolean,
					contacts: m.optional,
					years: e.eg.number
				}),
				u = e.eg.object({
					icann_fee: e.eg.number,
					redemption_fee: e.eg.number,
					registration_fee: e.eg.number,
					renewal_fee: e.eg.number,
					transfer_fee: e.eg.number
				});
			let E = function(A) {
				return A.ONBOARDING_INITIATED = "Onboarding Initiated", A.ONBOARDED = "Onboarded", A.PENDING_REGISTRY_LOCK = "Pending Registry Lock", A.PENDING_REGISTRY_UNLOCK = "Pending Registry Unlock", A.REGISTRY_UNLOCKED = "Registry Unlocked", A.LOCKED = "Locked", A.FAILED_TO_LOCK = "Failed To Lock", A.PENDING_UNLOCK_APPROVAL = "Pending Unlock Approval", A.UNLOCKED = "Unlocked", A.OFFBOARDED = "Offboarded", A
			}({});
			const n = e.eg.object({
					administrator_contact_id: e.eg.union([e.eg.number, e.eg.null]).optional,
					auth_code: e.eg.string.optional,
					auto_renew: e.eg.boolean.optional,
					available: e.eg.boolean,
					billing_contact_id: e.eg.union([e.eg.number, e.eg.null]).optional,
					can_register: e.eg.boolean.optional,
					cloudflare_dns: e.eg.boolean.optional,
					cloudflare_registration: e.eg.boolean.optional,
					contacts: e.eg.any.optional,
					contacts_updated_at: e.eg.string.optional,
					cor_locked: e.eg.boolean.optional,
					cor_locked_until: e.eg.union([e.eg.string, e.eg.null]).optional,
					cor_responses_pending: e.eg.number.optional,
					created_at: e.eg.string.optional,
					created_registrar: e.eg.string.optional,
					current_registrar: e.eg.string.optional,
					domain_protection_services: e.eg.object({
						status: e.eg.enum(E).optional
					}).optional,
					dns: e.eg.array(e.eg.any).optional,
					ds_records: e.eg.array(e.eg.any).optional,
					email_verified: e.eg.boolean.optional,
					expires_at: e.eg.string.optional,
					fees: u.optional,
					landing: e.eg.union([s, e.eg.boolean]).optional,
					last_known_status: e.eg.union([e.eg.string, e.eg.null]).optional,
					locked: e.eg.boolean.optional,
					name: e.eg.string,
					name_servers: e.eg.array(e.eg.string).optional,
					material_changes: e.eg.array(e.eg.string).optional,
					partner_response: e.eg.union([e.eg.string, e.eg.null]).optional,
					payment_expires_at: e.eg.string.optional,
					pending_transfer: e.eg.boolean.optional,
					permissions: e.eg.array(e.eg.string).optional,
					previous_registrar: e.eg.union([e.eg.string, e.eg.null]).optional,
					privacy: e.eg.boolean.optional,
					registered_at: e.eg.union([e.eg.string, e.eg.null]).optional,
					registrant_contact_id: e.eg.union([e.eg.number, e.eg.null]).optional,
					registry_object_id: e.eg.union([e.eg.string, e.eg.null]).optional,
					registry_statuses: e.eg.string.optional,
					supported_tld: e.eg.boolean.optional,
					tags: e.eg.array(e.eg.string).optional,
					technical_contact_id: e.eg.union([e.eg.number, e.eg.null]).optional,
					transfer_conditions: l.optional,
					updated_at: e.eg.union([e.eg.string, e.eg.null]).optional,
					updated_registrar: e.eg.string.optional,
					using_created_registrar_nameservers: e.eg.boolean.optional,
					using_current_registrar_nameservers: e.eg.boolean.optional,
					using_previous_registrar_nameservers: e.eg.boolean.optional,
					using_updated_registrar_nameservers: e.eg.boolean.optional,
					whois: e.eg.unknown.optional
				}),
				r = e.eg.object({
					available: e.eg.boolean
				}),
				i = e.eg.object({
					result: e.eg.array(n),
					result_info: e.eg.object({
						count: e.eg.number,
						page: e.eg.number,
						per_page: e.eg.number,
						total_count: e.eg.number
					}),
					errors: e.eg.array(e.eg.string),
					messages: e.eg.array(e.eg.string),
					success: e.eg.boolean
				}),
				p = e.eg.object({
					check_result: e.eg.union([e.eg.null, e.eg.object({
						name: e.eg.string,
						supported_tld: e.eg.boolean,
						premium: e.eg.boolean,
						available: e.eg.boolean,
						can_register: e.eg.boolean
					})]).optional,
					domains: e.eg.array(e.eg.object({
						name: e.eg.string,
						availability: e.eg.string,
						price: e.eg.number,
						icann_fee: e.eg.number,
						pricing: e.eg.object({
							currency: e.eg.string,
							registration_fee: e.eg.number,
							renewal_fee: e.eg.number
						}),
						pricing_local: e.eg.object({
							currency: e.eg.string,
							registration_fee: e.eg.number,
							renewal_fee: e.eg.number
						})
					}))
				}),
				c = e.eg.object({
					name: e.eg.string,
					can_register: e.eg.union([e.eg.boolean, e.eg.null]),
					supported_tld: e.eg.union([e.eg.boolean, e.eg.null]),
					premium: e.eg.union([e.eg.boolean, e.eg.null]),
					available: e.eg.union([e.eg.boolean, e.eg.null])
				});
			let _ = function(A) {
				return A.PENDING = "pending", A.VERIFIED = "verified", A.REJECTED = "rejected", A.PENDING_DELETE = "pending_delete", A.DELETED = "deleted", A
			}({});
			const y = e.eg.object({
					email: e.eg.string,
					status: e.eg.enum(_),
					first_name: e.eg.union([e.eg.null, e.eg.string]).optional,
					last_name: e.eg.union([e.eg.null, e.eg.string]).optional,
					phone_number: e.eg.union([e.eg.null, e.eg.string]).optional
				}),
				T = e.eg.object({
					designated_approvers: e.eg.array(y)
				});
			let O = function(A) {
				return A.PENDING = "pending", A.PENDING_UPDATE = "pending_update", A.ENABLED = "enabled", A.DISABLED = "disabled", A
			}({});
			const h = e.eg.object({
					auto_relock_after: e.eg.number,
					number_of_designated_approvers: e.eg.number,
					status: e.eg.enum(O)
				}),
				S = e.eg.intersection([h, T]),
				g = e.eg.object({
					status: e.eg.number,
					message: e.eg.string
				});
			let C = function(A) {
				return A.UNLOCK_APPROVAL = "UnlockApprovalRequest", A.CONFIGURATION_UPDATE = "ConfigurationUpdateRequest", A.APPROVER_EMAIL_VERIFICATION = "DesignatedApproverVerificationRequest", A.APPROVER_REMOVAL = "DesignatedApproverRemovalRequest", A
			}({});
			const M = e.eg.object({
					tlds: e.eg.array(e.eg.string)
				}),
				b = e.eg.object({
					message: e.eg.string
				}),
				R = e.eg.object({
					result: e.eg.object({
						entry: e.eg.object({
							address2: e.eg.string,
							address: e.eg.string,
							city: e.eg.string,
							country: e.eg.string,
							default: e.eg.boolean,
							email: e.eg.string,
							email_verified: e.eg.boolean,
							fax: e.eg.string,
							first_name: e.eg.string,
							id: e.eg.string,
							last_name: e.eg.string,
							organization: e.eg.string,
							phone: e.eg.string,
							state: e.eg.string,
							zip: e.eg.string
						})
					})
				})
		},
		"../../../common/util/types/src/api/phases/fields.tsx": function(W, v, t) {
			"use strict";
			t.d(v, {
				df: function() {
					return o
				},
				eX: function() {
					return s
				},
				fG: function() {
					return l
				},
				jI: function() {
					return d
				},
				qu: function() {
					return e
				},
				zc: function() {
					return m
				}
			});
			let e = function(a) {
					return a.Custom = "custom", a.Root = "root", a.Managed = "managed", a.Zone = "zone", a.RateLimit = "ratelimit", a
				}({}),
				o = function(a) {
					return a.Cache = "http_request_cache_settings", a.HttpConfigSettings = "http_config_settings", a.HttpLogCustomFields = "http_log_custom_fields", a.HttpRateLimit = "http_ratelimit", a.HttpRequestDynamicRedirect = "http_request_dynamic_redirect", a.HttpRequestFirewallCustom = "http_request_firewall_custom", a.HttpRequestFirewallManaged = "http_request_firewall_managed", a.HttpRequestFirewallRateLimit = "http_request_firewall_ratelimit", a.HttpRequestLateTransform = "http_request_late_transform", a.HttpRequestMain = "http_request_main", a.HttpRequestOrigin = "http_request_origin", a.HttpRequestRedirect = "http_request_redirect", a.HttpRequestSanitize = "http_request_sanitize", a.HttpRequestSBFM = "http_request_sbfm", a.HttpRequestsSnippets = "http_request_snippets", a.HttpRequestTransform = "http_request_transform", a.HttpResponseCompression = "http_response_compression", a.HttpResponseFirewallManaged = "http_response_firewall_managed", a.HttpResponseTransform = "http_response_headers_transform", a.L4DDoS = "ddos_l4", a.L7DDoS = "ddos_l7", a.MagicIDS = "magic_transit_ids_managed", a.MagicManaged = "magic_transit_managed", a.MagicTransit = "magic_transit", a.MagicTransitRateLimit = "magic_transit_ratelimit", a
				}({}),
				s = function(a) {
					return a.Execute = "execute", a.All = "all", a.Block = "block", a.JSChallenge = "js_challenge", a.Challenge = "challenge", a.Allow = "allow", a.Bypass = "bypass", a.Log = "log", a.Rewrite = "rewrite", a.Score = "score", a.Skip = "skip", a.Managed_Challenge = "managed_challenge", a.DDoS_Dynamic = "ddos_dynamic", a.Select_Config = "select_config", a.Set_Config = "set_config", a.Reset = "reset", a.Redirect = "redirect", a.Cache = "set_cache_settings", a
				}({}),
				d = function(a) {
					return a.ZONE_LOCKDOWN = "zoneLockdown", a.UA_BLOCK = "uaBlock", a.BIC = "bic", a.HOT = "hot", a.SECURITY_LEVEL = "securityLevel", a.RATE_LIMIT = "rateLimit", a.WAF = "waf", a
				}({}),
				l = function(a) {
					return a.DEFAULT = "default", a.MEDIUM = "medium", a.LOW = "low", a.EOFF = "eoff", a.HIGH = "high", a.VERY_HIGH = "very_high", a
				}({}),
				m = function(a) {
					return a.DEFAULT = "", a.XML = "text/xml", a.JSON = "application/json", a.TEXT = "text/plain", a.HTML = "text/html", a
				}({})
		},
		"../../../common/util/types/src/utils/index.ts": function(W, v, t) {
			"use strict";
			t.d(v, {
				Yd: function() {
					return e
				},
				vE: function() {
					return o
				}
			});

			function e(s) {
				return Object.keys(s)
			}
			const o = (s, d) => {
				if (d !== void 0) throw new Error("Unexpected object: " + s);
				return d
			}
		},
		"../react/app/assets lazy recursive ^\\.\\/favicon\\-.*\\.ico$": function(W, v, t) {
			var e = {
				"./favicon-cookie.ico": ["../react/app/assets/favicon-cookie.ico", 48837],
				"./favicon-dev.ico": ["../react/app/assets/favicon-dev.ico", 81377],
				"./favicon-staging.ico": ["../react/app/assets/favicon-staging.ico", 97266],
				"./favicon-zeit.ico": ["../react/app/assets/favicon-zeit.ico", 15850]
			};

			function o(s) {
				if (!t.o(e, s)) return Promise.resolve().then(function() {
					var m = new Error("Cannot find module '" + s + "'");
					throw m.code = "MODULE_NOT_FOUND", m
				});
				var d = e[s],
					l = d[0];
				return t.e(d[1]).then(function() {
					return t.t(l, 1 | 16)
				})
			}
			o.keys = function() {
				return Object.keys(e)
			}, o.id = "../react/app/assets lazy recursive ^\\.\\/favicon\\-.*\\.ico$", W.exports = o
		}
	}
]);

//# debugId=ed5bbaea-4b6a-5fbb-802e-35c3e0425e98