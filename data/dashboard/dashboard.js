! function() {
	try {
		var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
			n = (new Error).stack;
		n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "de758df4-5854-5652-bcd5-efb7348da376")
	} catch (e) {}
}();
(self.webpackChunk = self.webpackChunk || []).push([
	[44410, 34254, 78770], {
		"../flags.ts": function(G, _, n) {
			"use strict";
			n.d(_, {
				J8: function() {
					return a
				},
				Jd: function() {
					return i
				},
				QY: function() {
					return u
				},
				Qw: function() {
					return d
				},
				ki: function() {
					return p
				}
			});
			var e = n("../react/common/selectors/accountSelectors.ts"),
				o = n("../react/utils/url.ts"),
				c = n("../../../../node_modules/query-string/query-string.js"),
				f = n.n(c),
				s = n("../../../../node_modules/@cloudflare/util-cache/es/index.js"),
				g;
			const d = () => Object.keys(s.Z).reduce((E, A) => (A.indexOf("cf_beta.") === 0 && s.Z.get(A) === "true" && E.push(A.split(".").slice(1).join(".")), E), []),
				p = () => {
					var E, A, v;
					return ((E = window) === null || E === void 0 || (A = E.bootstrap) === null || A === void 0 || (v = A.data) === null || v === void 0 ? void 0 : v.user) && Array.isArray(window.bootstrap.data.user.betas) && window.bootstrap.data.user.betas.length > 0 ? window.bootstrap.data.user.betas : []
				};
			if (((g = window) === null || g === void 0 ? void 0 : g.location) && s.Z) {
				const E = f().parse(window.location.search);
				E.beta_on && s.Z.set(`cf_beta.${E.beta_on}`, !0), E.beta_off && s.Z.set(`cf_beta.${E.beta_off}`, !1)
			}
			const y = {},
				t = E => {
					var A, v, C;
					return Object.prototype.hasOwnProperty.call(y, E) ? y[E] : ((A = window) === null || A === void 0 || (v = A.bootstrap) === null || v === void 0 || (C = v.data) === null || C === void 0 ? void 0 : C.user) && Array.isArray(window.bootstrap.data.user.betas) && window.bootstrap.data.user.betas.some(S => S === E) ? (y[E] = !0, !0) : (y[E] = !1, !1)
				},
				r = E => s.Z ? s.Z.get(`cf_beta.${E}`) === !0 : !1,
				a = E => r(E) || t(E),
				l = () => !0,
				i = () => {
					var E, A, v;
					return ((E = window) === null || E === void 0 || (A = E.bootstrap) === null || A === void 0 || (v = A.data) === null || v === void 0 ? void 0 : v.user) && /@cloudflare\.com$/.test(window.bootstrap.data.user.email)
				},
				u = E => {
					const A = (0, e.uF)(E),
						v = (A == null ? void 0 : A.roles) || [];
					return (0, o.qR)(location.pathname) && v.length === 1 && v.some(C => C === "Administrator Read Only")
				}
		},
		"../init.ts": function(G, _, n) {
			"use strict";
			n.r(_);
			var e = n("../../../../node_modules/regenerator-runtime/runtime.js"),
				o = n("../../../../node_modules/url-search-params-polyfill/index.js"),
				c = n("../libs/init/initGlobal.ts"),
				f = n("../node_modules/isomorphic-fetch/fetch-npm-browserify.js"),
				s = n("../../../../node_modules/fetch-intercept/lib/browser.js");

			function g(O) {
				for (var N = 1; N < arguments.length; N++) {
					var Z = arguments[N] != null ? Object(arguments[N]) : {},
						re = Object.keys(Z);
					typeof Object.getOwnPropertySymbols == "function" && re.push.apply(re, Object.getOwnPropertySymbols(Z).filter(function(de) {
						return Object.getOwnPropertyDescriptor(Z, de).enumerable
					})), re.forEach(function(de) {
						d(O, de, Z[de])
					})
				}
				return O
			}

			function d(O, N, Z) {
				return N = p(N), N in O ? Object.defineProperty(O, N, {
					value: Z,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : O[N] = Z, O
			}

			function p(O) {
				var N = y(O, "string");
				return typeof N == "symbol" ? N : String(N)
			}

			function y(O, N) {
				if (typeof O != "object" || O === null) return O;
				var Z = O[Symbol.toPrimitive];
				if (Z !== void 0) {
					var re = Z.call(O, N || "default");
					if (typeof re != "object") return re;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (N === "string" ? String : Number)(O)
			}
			const t = O => {
				const N = O && O.headers || {},
					Z = new Headers(N);
				return Z.append("X-Cross-Site-Security", "dash"), g({}, O, {
					headers: Z
				})
			};
			(0, s.register)({
				request: (O, N) => {
					try {
						return new URL(O), O === "https://cdn.cookielaw.org/logos/static/ot_guard_logo.svg" ? ["/static/vendor/onetrust/logos/ot_guard_logo.svg", N] : [O, N]
					} catch {
						return [O, t(N)]
					}
				}
			});
			var r = n("../../../../node_modules/@sentry/core/esm/exports.js"),
				a = n("../../../../node_modules/redux-grim/dist/redux-grim.es.js"),
				l = n("../react/app/providers/storeContainer.js");
			let i = "";
			const u = 61;

			function E(O) {
				const N = O.substr(1);
				if (N && i !== N) {
					const Z = document.getElementById(N);
					if (Z) {
						const re = Z.getBoundingClientRect().top;
						if (re > 0) {
							const de = re - u;
							document.documentElement.scrollTop = de
						}
					}
				}
				i = N
			}

			function A(O) {
				O.listen(N => E(N.hash))
			}
			var v = n("../../../../node_modules/cookie/index.js"),
				C = n("../../../../node_modules/@cloudflare/style-const/es/index.js");
			const S = "CF_dash_version",
				T = "cf_fv_preview",
				h = "current",
				I = "hash",
				F = "deploymentPreview",
				M = "fragmentPreview",
				U = O => O === h ? V() : R(),
				V = () => new Date("Thu, 01 Jan 1970 00:00:00 UTC"),
				R = (O = 72) => {
					const N = 36e5;
					return new Date(Date.now() + O * N)
				},
				z = O => {
					switch (O) {
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
				te = (O, N = !1) => {
					var Z;
					const re = z(O),
						de = `
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
    <h1 id="error-title">${re.title}</h1>
    <p id="error-description">${re.description}</p>
  </div>
  `,
						Ce = N ? `
    <style>
    .preview-banner {
      width: 680px;
      padding: 32px;
      background: ${C.fk.orange[9]};
      border-radius: 5px;
      box-shadow: 1px 1px 4px 0px #999;
    }
    .preview-banner-branch {
      font-family: Courier New;
      font-weight: bold;
    }
    </style>
    <div class="preview-banner">
      <p>You are currently on a preview for branch: <span class="preview-banner-branch">${(Z=window.build)===null||Z===void 0?void 0:Z.branch}</span>.</p>
      <a href="${window.location.href}?deploymentPreview=current">Click here to go to the live dashboard deployment</a>
    </div>` : "";
					return de + Ce
				},
				Y = O => {
					var N;
					const Z = document.getElementById(O);
					!Z || (N = Z.parentNode) === null || N === void 0 || N.removeChild(Z)
				};

			function ce() {
				const O = document.getElementById("loading-state");
				O == null || O.classList.add("hide"), O == null || O.addEventListener("transitionend", () => {
					["loading-state", "loading-styles", "loading-script-dark-mode", "loading-script-i18n"].forEach(Y)
				})
			}

			function Q(O) {
				var N;
				const Z = document.getElementById("loading-state"),
					re = !!((N = v.parse(document.cookie)) === null || N === void 0 ? void 0 : N[S]);
				!Z || (Z.innerHTML = te(O == null ? void 0 : O.code, re))
			}
			var ae = n("../utils/initStyles.ts"),
				$ = n("../../../../node_modules/@cloudflare/gates-redux/dist/index.mjs"),
				x = n("../../../../node_modules/@sentry/react/esm/sdk.js"),
				w = n("../../../../node_modules/@sentry/react/node_modules/@sentry/browser/esm/index.js"),
				K = n("../../../../node_modules/@sentry/tracing/esm/index.js"),
				ee = n("../../../../node_modules/history/esm/history.js"),
				B = (0, ee.lX)(),
				P = n("../../../../node_modules/@sentry/utils/esm/worldwide.js"),
				L = n("../react/utils/url.ts");
			const D = (0, P.Rf)();
			let H;

			function J(O) {
				return X(O, "react-router-v5")
			}

			function X(O, N) {
				return (Z, re = !0, de = !0) => {
					re && D && D.location && (H = Z({
						name: (0, L.Fl)(D.location.pathname),
						op: "pageload",
						tags: {
							"routing.instrumentation": N
						}
					})), de && O.listen && O.listen((Ce, ve) => {
						if (ve && (ve === "PUSH" || ve === "POP")) {
							H && H.finish();
							const Ue = {
								"routing.instrumentation": N
							};
							H = Z({
								name: (0, L.Fl)(Ce.pathname),
								op: "navigation",
								tags: Ue
							})
						}
					})
				}
			}
			var me = n("../react/common/selectors/languagePreferenceSelector.ts"),
				Le = n("../flags.ts"),
				Ie = n("../utils/getDashVersion.ts"),
				W = n("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				se = n.n(W),
				be = n("../../../common/intl/intl-core/src/errors.ts"),
				je = n("../../../../node_modules/@sentry/utils/esm/object.js"),
				Fe = n("../react/common/middleware/sparrow/errors.ts");
			const Ge = "https://a32e52f8871f439f850537cab9b0645a@sentry10.cfdata.org/218",
				Ve = !0,
				Ze = [/cloudflare\.com/, /staging\.cloudflare\.com/, /cloudflare\.lol/, /127\.0\.0\.1/, /webpack/, /localhost/],
				st = ["top.GLOBALS", "originalCreateNotification", "canvas.contentDocument", "MyApp_RemoveAllHighlights", "http://tt.epicplay.com", "Can't find variable: ZiteReader", "jigsaw is not defined", "ComboSearch is not defined", "http://loading.retry.widdit.com/", "atomicFindClose", "fb_xd_fragment", "bmi_SafeAddOnload", "EBCallBackMessageReceived", "conduitPage", "Script error.", "Failed to construct 'Worker'", "sendBeacon", "ResizeObserver loop limit exceeded", "ResizeObserver loop completed with undelivered notifications."];

			function He(O, N, Z) {
				return N = Ye(N), N in O ? Object.defineProperty(O, N, {
					value: Z,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : O[N] = Z, O
			}

			function Ye(O) {
				var N = Ke(O, "string");
				return typeof N == "symbol" ? N : String(N)
			}

			function Ke(O, N) {
				if (typeof O != "object" || O === null) return O;
				var Z = O[Symbol.toPrimitive];
				if (Z !== void 0) {
					var re = Z.call(O, N || "default");
					if (typeof re != "object") return re;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (N === "string" ? String : Number)(O)
			}
			class xe {
				constructor() {
					He(this, "name", xe.id)
				}
				setupOnce() {
					n.g.console && (0, je.hl)(n.g.console, "error", N => (...Z) => {
						const re = Z.find(de => de instanceof Error);
						if (Ge && re) {
							let de, Ce = !0;
							if (re instanceof Fe.ez) {
								const ve = re instanceof Fe.oV ? re.invalidProperties : void 0;
								de = {
									tags: {
										"sparrow.eventName": re.eventName
									},
									extra: {
										sparrow: {
											eventName: re.eventName,
											invalidProperties: ve
										}
									},
									fingerprint: [re.name ? re.name : "SparrowValidationError"]
								}, Ce = !1
							} else if (re instanceof W.SparrowIdCookieError) de = {
								extra: {
									sparrowIdCookie: re.cookie
								},
								fingerprint: [re.name ? re.name : "SparrowIdCookieError"]
							};
							else if (re.name === "ChunkLoadError") {
								de = {
									fingerprint: [re.name]
								};
								try {
									de.tags = {
										chunkId: re.message.split(" ")[2],
										chunkUrl: re.request
									}
								} catch {}
							} else re instanceof be.YB && (de = {
								fingerprint: ["TranslatorError", re.translationKey]
							});
							Ce && r.Tb(re, de)
						}
						typeof N == "function" && N.apply(n.g.console, Z)
					})
				}
			}
			He(xe, "id", "ConsoleErrorIntegration");
			var Je = null,
				Qe = n("../utils/sentry/lastSentEventId.ts"),
				ze = n("../../../../node_modules/@sentry/core/esm/transports/base.js"),
				qe = n("../../../../node_modules/@sentry/utils/esm/syncpromise.js");
			const Xe = O => {
					const N = async Z => {
						var re, de;
						const Ce = {
							envelope: Z.body,
							url: O.url,
							isPreviewDeploy: (re = window) === null || re === void 0 || (de = re.build) === null || de === void 0 ? void 0 : de.isPreviewDeploy,
							release: (0, Ie.t)()
						};
						try {
							const ve = await fetch("https://platform.dash.cloudflare.com/sentry/envelope", {
								method: "POST",
								headers: {
									Accept: "*/*",
									"Content-Type": "application/json"
								},
								body: JSON.stringify(Ce)
							});
							return {
								statusCode: ve.status,
								headers: {
									"x-sentry-rate-limits": ve.headers.get("X-Sentry-Rate-Limits"),
									"retry-after": ve.headers.get("Retry-After")
								}
							}
						} catch (ve) {
							return console.log(ve), (0, qe.$2)(ve)
						}
					};
					return ze.q(O, N)
				},
				et = () => {
					if (Ge && Ve) {
						var O, N, Z, re, de, Ce, ve, Ue, ot, it;
						let Pt = "production";
						((O = window) === null || O === void 0 || (N = O.build) === null || N === void 0 ? void 0 : N.isPreviewDeploy) && (Pt += "-preview"), x.S({
							dsn: Ge,
							release: (0, Ie.t)(),
							environment: Pt,
							ignoreErrors: st,
							allowUrls: Ze,
							autoSessionTracking: !1,
							integrations: [new w.jK.GlobalHandlers({
								onerror: !0,
								onunhandledrejection: !1
							}), new xe, new K.jK.BrowserTracing({
								routingInstrumentation: J(B)
							})],
							tracesSampleRate: 0,
							transport: Xe,
							beforeSend: Kt => (Qe.e.setEventId(Kt.event_id), Kt)
						});
						const Xt = (0, l.bh)().getState();
						r.rJ({
							LOCAL_STORAGE_FLAGS: (0, Le.Qw)(),
							USER_BETA_FLAGS: (0, Le.ki)(),
							meta: {
								connection: {
									type: (Z = window) === null || Z === void 0 || (re = Z.navigator) === null || re === void 0 || (de = re.connection) === null || de === void 0 ? void 0 : de.effectiveType,
									bandwidth: (Ce = window) === null || Ce === void 0 || (ve = Ce.navigator) === null || ve === void 0 || (Ue = ve.connection) === null || Ue === void 0 ? void 0 : Ue.downlink
								},
								languagePreference: (0, me.r)(Xt),
								isPreviewDeploy: (ot = window) === null || ot === void 0 || (it = ot.build) === null || it === void 0 ? void 0 : it.isPreviewDeploy
							},
							utilGates: (0, $.T2)(Xt)
						}), window.addEventListener("unhandledrejection", function(Kt) {})
					}
				},
				j = O => {
					O ? r.av({
						id: O
					}) : r.av(null)
				};
			var ne = n("../../../../node_modules/@cloudflare/util-cache/es/index.js"),
				we = () => {
					let O;
					try {
						O = decodeURIComponent(window.location.search)
					} catch {
						console.log("Could not decode query string. Using non-decoded value."), O = window.location.search
					}
					if (!O.includes("remote[")) return;
					const N = new URLSearchParams(O),
						Z = {};
					for (let [re, de] of N) re.includes("remote") && (Z[re.replace(/remote\[|\]/g, "")] = de);
					ne.Z.set("mfe-remotes", JSON.stringify(Z))
				},
				De = n("../../../../node_modules/@cloudflare/gates-react-redux/dist/index.mjs"),
				le = n("../node_modules/uuid/dist/esm-browser/v4.js");
			const ue = "ANON_USER_ID";

			function fe() {
				var O, N, Z, re;
				let de = (O = n.g) === null || O === void 0 || (N = O.bootstrap) === null || N === void 0 || (Z = N.data) === null || Z === void 0 || (re = Z.user) === null || re === void 0 ? void 0 : re.id;
				if (!de) {
					let Ce = ne.Z.get(ue);
					if (!Ce) {
						let ve = (0, le.Z)();
						ne.Z.set(ue, ve), Ce = ve
					}
					return Ce
				}
				return de
			}
			async function _e() {
				const O = (0, l.bh)();
				O.dispatch((0, De.nM)({
					apiKey: "a23ecf39a767418a832c8f8a5a902a8c",
					environment: "production"
				})), await O.dispatch((0, $.UL)({
					userId: fe()
				}))
			}
			var Te = n("../libs/init/initBootstrap.ts"),
				Oe = n("webpack/sharing/consume/default/react/react"),
				Ee = n.n(Oe),
				Ne = n("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				Se = n("webpack/sharing/consume/default/react-dom/react-dom"),
				$e = n("webpack/sharing/consume/default/react-redux/react-redux"),
				rt = n("../../../../node_modules/swr/core/dist/index.mjs"),
				at = n("../../../../node_modules/@cloudflare/component-modals/es/index.js"),
				k = n("../../../../node_modules/svg-classlist-polyfill/polyfill.js"),
				q = n("../react/shims/focus-visible.js"),
				pe = n("../react/app/components/DeepLink/index.ts"),
				ye = n("../../../../node_modules/prop-types/index.js"),
				Ae = n.n(ye),
				ke = n("../react/utils/translator.tsx"),
				tt = n("../../../common/intl/intl-react/src/index.ts"),
				Pe = n("../../../dash/intl/intl-translations/src/index.ts"),
				Ot = n("../../../../node_modules/query-string/query-string.js"),
				ct = n.n(Ot),
				Nt = n("../react/common/actions/userActions.ts"),
				dt = n("../react/common/selectors/userSelectors.ts"),
				nt = n("../react/utils/i18n.ts"),
				It = n("../react/utils/bootstrap.ts");

			function lt(O) {
				for (var N = 1; N < arguments.length; N++) {
					var Z = arguments[N] != null ? Object(arguments[N]) : {},
						re = Object.keys(Z);
					typeof Object.getOwnPropertySymbols == "function" && re.push.apply(re, Object.getOwnPropertySymbols(Z).filter(function(de) {
						return Object.getOwnPropertyDescriptor(Z, de).enumerable
					})), re.forEach(function(de) {
						Bt(O, de, Z[de])
					})
				}
				return O
			}

			function Bt(O, N, Z) {
				return N = jt(N), N in O ? Object.defineProperty(O, N, {
					value: Z,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : O[N] = Z, O
			}

			function jt(O) {
				var N = Ut(O, "string");
				return typeof N == "symbol" ? N : String(N)
			}

			function Ut(O, N) {
				if (typeof O != "object" || O === null) return O;
				var Z = O[Symbol.toPrimitive];
				if (Z !== void 0) {
					var re = Z.call(O, N || "default");
					if (typeof re != "object") return re;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (N === "string" ? String : Number)(O)
			}
			let We = ct().parse(location.search);
			const Lt = O => {
					const N = (0, It.$8)() ? [(0, Pe.Fy)(Pe.if.changes), (0, Pe.Fy)(Pe.if.common), (0, Pe.Fy)(Pe.if.navigation), (0, Pe.Fy)(Pe.if.overview), (0, Pe.Fy)(Pe.if.onboarding), (0, Pe.Fy)(Pe.if.invite), (0, Pe.Fy)(Pe.if.login), (0, Pe.Fy)(Pe.if.dns), (0, Pe.Fy)(Pe.n4.ssl_tls), (0, Pe.Fy)(Pe.if.message_inbox), (0, Pe.Fy)(Pe.if.welcome)] : [(0, Pe.Fy)(Pe.if.common), (0, Pe.Fy)(Pe.if.invite), (0, Pe.Fy)(Pe.if.login), (0, Pe.Fy)(Pe.if.onboarding)];
					We.lang ? Ft(O) : ne.Z.get(nt.th) && Dt(O, (0, nt.Kd)());
					const Z = async re => (await Promise.all(N.map(Ce => Ce(re)))).reduce((Ce, ve) => lt({}, Ce, ve), {});
					return Ee().createElement(tt.RD.Provider, {
						value: O.languagePreference
					}, Ee().createElement(tt.bd, {
						translator: ke.Vb,
						locale: O.languagePreference
					}, Ee().createElement(tt.lm, {
						loadPhrases: Z
					}, O.children)))
				},
				Ft = async O => {
					let N = We.lang.substring(0, We.lang.length - 2) + We.lang.substring(We.lang.length - 2, We.lang.length).toUpperCase();
					if (!(0, me.v)(N)) {
						console.warn(`${N} is not a supported locale.`), delete We.lang, O.history.replace({
							search: ct().stringify(We)
						});
						return
					}(0, nt.i_)(N), delete We.lang, Dt(O, N), O.isAuthenticated || O.history.replace({
						search: ct().stringify(We)
					})
				}, Dt = async (O, N) => {
					if (O.isAuthenticated) try {
						await O.setUserCommPreferences({
							"language-locale": N
						}, {
							hideErrorAlert: !0
						}), ne.Z.remove(nt.th), O.history.replace({
							search: ct().stringify(We)
						})
					} catch (Z) {
						ne.Z.set(nt.th, !0), console.error(Z)
					} else ne.Z.set(nt.th, !0)
				}, St = O => {
					const N = (0, dt.PR)(O);
					return {
						isAuthenticated: !!(N && N.id),
						languagePreference: (0, nt.Kd)() || (0, me.r)(O)
					}
				}, xt = {
					setUserCommPreferences: Nt.V_
				};
			var gt = (0, Ne.withRouter)((0, $e.connect)(St, xt)(Lt));
			Lt.propTypes = {
				history: Ae().object,
				languagePreference: Ae().string.isRequired,
				children: Ae().node.isRequired,
				isAuthenticated: Ae().bool,
				setUserCommPreferences: Ae().func.isRequired
			};
			var $t = n("../../../../node_modules/@cloudflare/style-provider/es/StyleProvider.js"),
				Wt = n("../../../../node_modules/@cloudflare/style-provider/es/createRenderer.js");
			let ft;
			const zt = ({
				selectorPrefix: O = "c_"
			} = {}) => (ft || (ft = (0, Wt.Z)({
				dev: !1,
				selectorPrefix: O
			})), ft);
			var wt = n("../react/common/components/ModalManager.tsx"),
				Gt = n("../react/app/components/ErrorBoundary.tsx"),
				Ht = n("../react/common/actions/notificationsActions.ts");
			const b = (n.g.bootstrap || {}).data || {};
			class oe extends Ee().Component {
				componentDidMount() {
					b.messages && this.dispatchNotificationActions(b.messages)
				}
				dispatchNotificationActions(N) {
					N.forEach(Z => {
						const {
							type: re,
							message: de,
							persist: Ce
						} = Z;
						["success", "info", "warn", "error"].includes(re) && this.props.notifyAdd(re, (0, ke.ZP)(de), {
							persist: !!Ce
						})
					})
				}
				render() {
					return null
				}
			}
			var Me = (0, Ne.withRouter)((0, $e.connect)(null, {
				notifyAdd: Ht.IH
			})(oe));
			oe.propTypes = {
				notifyAdd: Ae().func.isRequired
			};
			var Re = n("../react/app/redux/index.ts");

			function Et() {
				var O;
				const N = (0, Re.p4)(dt.PR),
					Z = (N == null || (O = N.email) === null || O === void 0 ? void 0 : O.endsWith("@cloudflare.com")) ? "cf-internal-employee" : "regular-user",
					re = (0, De.Yc)();
				(0, Oe.useEffect)(() => {
					re({
						userType: Z
					})
				}, [Z, re])
			}
			var pt = n("../react/common/selectors/entitlementsSelectors.ts"),
				mt = n("../react/common/selectors/accountSelectors.ts");
			const _t = ["accountId", "is_ent"];

			function yt() {
				const O = (0, De.f7)(),
					N = (0, Ne.useHistory)(),
					Z = (0, L.uW)(N.location.pathname),
					re = (0, De.Yc)(),
					de = (0, De.O$)(),
					Ce = (0, Re.p4)(pt.u1),
					ve = !Ce.isRequesting && !!Ce.data,
					Ue = (0, Re.p4)(pt.p1),
					ot = (0, Re.p4)(mt.Xu),
					it = (0, Re.p4)(mt.uF),
					Pt = !ot.isRequesting && !!ot.data;
				(0, Oe.useEffect)(() => {
					Z && Pt && it && ve && Z === it.account.id ? re({
						accountId: it.account.id,
						is_ent: Ue
					}) : (!Z || Z in O && O.accountId !== Z) && de(_t)
				}, [Pt, it, re, de, ve, Ue, Z, O])
			}
			var vt = n("../react/common/selectors/zoneSelectors.ts");

			function ht() {
				const O = (0, Re.p4)(vt.nA),
					N = (0, De.Yc)();
				(0, Oe.useEffect)(() => {
					var Z;
					N({
						zone_id: O == null ? void 0 : O.id,
						zone_plan: O == null || (Z = O.plan) === null || Z === void 0 ? void 0 : Z.legacy_id
					})
				}, [O, N])
			}
			const Ct = () => (Et(), yt(), ht(), null);
			var bt = n("../react/app/components/Persistence/index.tsx"),
				Tt = n("../node_modules/@cloudflare/elements/es/index.js"),
				Be = n("../react/app/components/LoadingSuspense.tsx");
			const Mt = Ee().lazy(() => Promise.all([n.e(43234), n.e(2480), n.e(10008), n.e(12821), n.e(94012), n.e(97999), n.e(72019), n.e(67497), n.e(5668), n.e(60091), n.e(77216), n.e(60003), n.e(39760), n.e(94923), n.e(60734), n.e(79012), n.e(40453)]).then(n.bind(n, "../react/common/components/DevPanel/Main.tsx")));
			var Jt = () => Ee().createElement(Be.Z, null, Ee().createElement(Mt, null));
			const qt = () => (Oe.useEffect(() => ce, []), null);
			var en = n("../../../../node_modules/moment/moment.js"),
				Vt = n.n(en);
			const tn = O => {
					switch (O) {
						case "en-US":
						case "es-ES":
						case "de-DE":
						case "fr-FR":
						case "it-IT":
						case "ja-JP":
						case "ko-KR":
							return O.slice(0, 2);
						case "es-MX":
						case "es-CL":
						case "es-EC":
						case "pt-BR":
						case "zh-CN":
						case "zh-TW":
							return O.toLowerCase();
						default:
							return "en"
					}
				},
				nn = () => {
					const O = (0, Re.p4)(me.r);
					(0, Oe.useEffect)(() => {
						const N = tn(O);
						N !== Vt().locale() && Vt().locale(N), document.documentElement.lang = O
					}, [O])
				},
				on = () => {
					(0, Oe.useEffect)(() => {
						async function O() {
							var N, Z;
							let re;
							if (((N = window) === null || N === void 0 || (Z = N.build) === null || Z === void 0 ? void 0 : Z.isPreviewDeploy) && (re = "cookie"), !!re) try {
								const de = document.head.querySelector("link[rel=icon]");
								de && (de.href = (await n("../react/app/assets lazy recursive ^\\.\\/favicon\\-.*\\.ico$")(`./favicon-${re}.ico`)).default)
							} catch {}
						}
						O()
					}, [])
				};
			var rn = n("../react/common/constants/constants.ts");
			const an = () => {
					var O;
					const N = (0, Ne.useLocation)(),
						[Z, re] = (0, Oe.useState)(((O = window) === null || O === void 0 ? void 0 : O.localStorage.getItem("gates_devtools_ui_gates_controller_enabled")) === "true");
					return (0, Oe.useEffect)(() => {
						const de = ct().parse(N.search);
						if (de.pt && ne.Z.set(rn.sJ, de.pt), de == null ? void 0 : de.devPanel) {
							var Ce, ve;
							(Ce = window) === null || Ce === void 0 || (ve = Ce.localStorage) === null || ve === void 0 || ve.setItem("gates_devtools_ui_gates_controller_enabled", "true"), re(!0)
						}
					}, [N.search]), {
						devPanelEnabled: Z
					}
				},
				sn = Ee().lazy(() => Promise.all([n.e(43234), n.e(2480), n.e(10008), n.e(12821), n.e(94012), n.e(97999), n.e(72019), n.e(67497), n.e(88474), n.e(87372), n.e(60091), n.e(77216), n.e(60003), n.e(39760), n.e(94923), n.e(60734), n.e(79012), n.e(64124), n.e(42864)]).then(n.bind(n, "../react/AuthenticatedApp.jsx"))),
				cn = Ee().lazy(() => Promise.all([n.e(83741), n.e(65447), n.e(43234), n.e(97999), n.e(88474), n.e(60091), n.e(60734), n.e(69088), n.e(64124), n.e(76472)]).then(n.bind(n, "../react/UnauthenticatedApp.tsx")));
			var ln = ({
					userIsAuthed: O
				}) => {
					nn(), on();
					const {
						devPanelEnabled: N
					} = an();
					return Ee().createElement(Oe.Suspense, {
						fallback: Ee().createElement(qt, null)
					}, Ee().createElement(Ne.Switch, null, !O && !0 && Ee().createElement(Ne.Route, {
						exact: !0,
						path: ["/", "/login"]
					}, Ee().createElement(cn, null)), Ee().createElement(Ne.Route, {
						render: () => Ee().createElement(Tt.ZC, {
							minHeight: "100vh"
						}, Ee().createElement(sn, null))
					})), N && Ee().createElement(Jt, null))
				},
				kt = n("../../../../node_modules/yup/es/index.js"),
				un = n("../../../common/util/types/src/utils/index.ts");
			const Zt = {
				cfEmail: () => kt.Z_().email((0, ke.ZP)("common.validation.email")).required((0, ke.ZP)("common.validation.email")),
				cfPassword: () => kt.Z_().required((0, ke.ZP)("common.validation.required"))
			};
			(0, un.Yd)(Zt).forEach(O => {
				kt.kM(kt.Z_, O, Zt[O])
			});
			const Yt = Ee().lazy(() => Promise.all([n.e(10008), n.e(94012), n.e(6368), n.e(44264), n.e(33970)]).then(n.bind(n, "../react/AuthOnlyProviders.tsx"))),
				dn = () => {
					const O = (0, It.$8)(),
						[N, Z] = (0, Oe.useState)(O ? Yt : Ee().Fragment),
						[re, de] = (0, Oe.useState)((0, C.Yc)());
					(0, Oe.useEffect)(() => {
						(0, C.fF)(() => de((0, C.Yc)()))
					}, []);
					const Ce = ve => {
						de(ve), (0, C.C8)(ve)
					};
					return (0, Oe.useEffect)(() => {
						Z(O ? Yt : Ee().Fragment)
					}, [O]), (0, Oe.useEffect)(() => {
						const ve = () => Ce(localStorage.getItem("dark-mode"));
						return window.addEventListener("storage", ve), () => {
							window.removeEventListener("storage", ve)
						}
					}, []), Ee().createElement(Oe.Suspense, {
						fallback: null
					}, Ee().createElement($e.Provider, {
						store: (0, l.bh)()
					}, Ee().createElement(Ne.Router, {
						history: B
					}, Ee().createElement(N, null, Ee().createElement($t.Z, {
						renderer: zt()
					}, Ee().createElement(gt, null, Ee().createElement(Gt.Z, {
						sentryTag: "Root"
					}, Ee().createElement(rt.J$, {
						value: {
							fetcher: ve => fetch(ve).then(Ue => Ue.json())
						}
					}, Ee().createElement(Ct, null), Ee().createElement(Me, null), Ee().createElement(bt.Z_, {
						onDarkModeChangeCb: Ce
					}, Ee().createElement(pe.ZP, null, Ee().createElement(ln, {
						userIsAuthed: O
					}))), Ee().createElement(wt.ZP, null), Ee().createElement(at.F0, null)))))))))
				},
				pn = () => {
					(0, Se.render)(Ee().createElement(dn, null), document.getElementById("react-app"))
				};
			var ut = n("../utils/initSparrow.ts"),
				At = n("../utils/zaraz.ts");
			const mn = () => {
					const O = (0, dt.PR)((0, l.bh)().getState());
					gn(), (0, ut.Ug)(), (0, At.bM)(), (O == null ? void 0 : O.id) && se().setUserId(O == null ? void 0 : O.id), (0, ut.yV)(), !(0, ut.Wi)() && (0, ut.IM)(), O ? (0, At.yn)(O) : (0, At.Ro)()
				},
				gn = () => {
					var O, N;
					(O = window) === null || O === void 0 || (N = O.OneTrust) === null || N === void 0 || N.OnConsentChanged(() => {
						const Z = (0, dt.PR)((0, l.bh)().getState());
						(0, ut.Wi)() ? (se().setEnabled(!0), (Z == null ? void 0 : Z.id) ? (se().setUserId(Z.id), (0, At.yn)(Z)) : (0, At.Ro)(), (0, ut.yV)()) : (se().setEnabled(!1), (0, ut.IM)())
					})
				};

			function fn(O) {
				for (var N = 1; N < arguments.length; N++) {
					var Z = arguments[N] != null ? Object(arguments[N]) : {},
						re = Object.keys(Z);
					typeof Object.getOwnPropertySymbols == "function" && re.push.apply(re, Object.getOwnPropertySymbols(Z).filter(function(de) {
						return Object.getOwnPropertyDescriptor(Z, de).enumerable
					})), re.forEach(function(de) {
						En(O, de, Z[de])
					})
				}
				return O
			}

			function En(O, N, Z) {
				return N = _n(N), N in O ? Object.defineProperty(O, N, {
					value: Z,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : O[N] = Z, O
			}

			function _n(O) {
				var N = yn(O, "string");
				return typeof N == "symbol" ? N : String(N)
			}

			function yn(O, N) {
				if (typeof O != "object" || O === null) return O;
				var Z = O[Symbol.toPrimitive];
				if (Z !== void 0) {
					var re = Z.call(O, N || "default");
					if (typeof re != "object") return re;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (N === "string" ? String : Number)(O)
			}
			const vn = "init",
				Qt = (O, N) => {
					r.$e(function(Z) {
						Z.setTag(vn, N), r.Tb(O)
					}), Q(O)
				},
				Rt = async (O, N) => {
					try {
						return await O(), !0
					} catch (Z) {
						return Qt(Z, N), !1
					}
				};
			(async () => {
				try {
					var O, N, Z;
					n.g.build = fn({}, {
						branch: "master",
						isReleaseCandidate: "true",
						commit: "51cbc6bf68b54832b21ce8e17f5f641d82baba2a",
						dashVersion: "28519859",
						env: "production",
						builtAt: 1730313190317,
						versions: {
							"@cloudflare/app-dash": "25.161.22",
							node: "20.10.0",
							yarn: "3.2.2",
							webpack: "5.88.2"
						}
					}, {
						isPreviewDeploy: (0, Ie.p)()
					}), et();
					const re = [{
						fn: () => n.e(4374).then(n.bind(n, "../react/utils/api.ts")),
						tag: "utils/api"
					}, {
						fn: () => A(B),
						tag: "hashScroll"
					}, {
						fn: ae.Z,
						tag: "styles"
					}, {
						fn: we,
						tag: "mfePreviewData"
					}];
					for (const ot of re)
						if (!await Rt(ot.fn, ot.tag)) return;
					let de;
					if (!await Rt(async () => {
							de = await (0, Te.k)()
						}, "bootstrap")) return;
					const Ce = (0, l.bh)(),
						ve = ((O = de) === null || O === void 0 ? void 0 : O.data) || {};
					Ce.dispatch((0, a.mW)("user", ve == null ? void 0 : ve.user));
					const Ue = (N = de) === null || N === void 0 || (Z = N.data) === null || Z === void 0 ? void 0 : Z.user;
					return n.g.bootstrap = de, Ue && Ue.id && j(Ue.id), !await Rt(_e, "gates") || !await Rt(mn, "tracking") ? void 0 : pn()
				} catch (re) {
					Qt(re, "global")
				}
			})()
		},
		"../libs/init/initBootstrap.ts": function(G, _, n) {
			"use strict";
			n.d(_, {
				k: function() {
					return f
				}
			});
			var e = n("../../../../node_modules/@sentry/core/esm/exports.js");
			class o extends Error {
				constructor(g, d) {
					super(d);
					this.name = `${g} ${d}`
				}
			}
			const c = () => {
					document.cookie.split(";").forEach(g => {
						const [d] = g.trim().split("=");
						document.cookie = `${d}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;`
					})
				},
				f = async () => {
					let s = await fetch("/api/v4/system/bootstrap", {
						credentials: "same-origin"
					});
					if (!s.ok) throw s.headers.get("content-type") === "text/html" && (await s.text()).toLowerCase().includes("cookie too large") && (e.$e(function(y) {
						y.setTag("init", "cookieTooLarge"), e.Tb("Request Header Or Cookie Too Large in Bootstrap request")
					}), c(), window.location.reload()), new o("Bootstrap API Failure", s == null ? void 0 : s.status);
					return (await s.json()).result.data
				}
		},
		"../libs/init/initGlobal.ts": function() {
			window.global || (window.global = window)
		},
		"../react/app/HoCs/withEntities.tsx": function(G, _, n) {
			"use strict";
			var e = n("webpack/sharing/consume/default/react/react"),
				o = n.n(e),
				c = n("../react/app/redux/index.ts"),
				f = n("../react/common/selectors/userSelectors.ts"),
				s = n("../react/common/selectors/zoneSelectors.ts"),
				g = n("../react/common/selectors/accountSelectors.ts"),
				d = n("../react/common/utils/isGuards.ts"),
				p = n("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				y = n.n(p);

			function t() {
				return t = Object.assign ? Object.assign.bind() : function(l) {
					for (var i = 1; i < arguments.length; i++) {
						var u = arguments[i];
						for (var E in u) Object.prototype.hasOwnProperty.call(u, E) && (l[E] = u[E])
					}
					return l
				}, t.apply(this, arguments)
			}
			const r = l => {
				function i(u) {
					const E = (0, c.UM)(),
						A = (0, p.useHistory)(),
						v = (0, p.useLocation)(),
						C = (0, p.useRouteMatch)("/:accountId([0-9a-f]{32})?/:zoneName?/:app?/:tab?"),
						S = (0, c.p4)(f.PR) || null,
						T = (0, c.p4)(s.nA) || null,
						h = (0, c.p4)(g.uF),
						I = h ? h.account : null;
					if (!C) return null;
					const {
						accountId: F,
						app: M,
						tab: U
					} = C.params, V = C.params.zoneName && ((0, d.v5)(C.params.zoneName) || C.params.zoneName.indexOf(".") > 0) ? C.params.zoneName : void 0;
					return o().createElement(l, t({
						dispatch: E,
						history: A,
						location: v,
						match: C,
						user: S,
						membership: F ? h : null,
						account: F ? I : null,
						accountId: F || null,
						zone: V ? T : null,
						zoneName: V || null,
						app: V ? M : null,
						tab: V ? U : null
					}, u))
				}
				return i.displayName = `withEntities(${a(l)})`, i
			};

			function a(l) {
				return l.displayName || l.name || "Component"
			}
			_.Z = r
		},
		"../react/app/components/DeepLink/actions.ts": function(G, _, n) {
			"use strict";
			n.d(_, {
				BQ: function() {
					return p
				},
				Bh: function() {
					return g
				},
				CM: function() {
					return y
				},
				MF: function() {
					return o
				},
				TS: function() {
					return a
				},
				WF: function() {
					return s
				},
				Wz: function() {
					return t
				},
				bk: function() {
					return d
				},
				fj: function() {
					return r
				},
				r4: function() {
					return f
				},
				zq: function() {
					return c
				}
			});
			var e = n("../../../../node_modules/@cloudflare/util-exhausted-reducers/es/index.js");
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
				c = (0, e.R)(o.ADD_SITE, l => ({
					payload: l
				})),
				f = (0, e.R)(o.RESOLVING_START),
				s = (0, e.R)(o.RESOLVING_COMPLETE),
				g = (0, e.R)(o.SELECT_ZONE, l => ({
					payload: l
				})),
				d = (0, e.R)(o.SELECT_ACCOUNT, l => ({
					payload: l
				})),
				p = (0, e.R)(o.SELECT_PAGES_PROJECT, l => ({
					payload: l
				})),
				y = (0, e.R)(o.SELECT_PAGES_DEPLOYMENT, l => ({
					payload: l
				})),
				t = (0, e.R)(o.SET_FILTERED_ACCOUNT_IDS, l => ({
					accountIds: l
				})),
				r = (0, e.R)(o.DELETE_FILTERED_ACCOUNT_IDS),
				a = (0, e.R)(o.SELECT_WORKER, l => ({
					payload: l
				}))
		},
		"../react/app/components/DeepLink/constants.ts": function(G, _, n) {
			"use strict";
			n.d(_, {
				BV: function() {
					return e
				},
				Dz: function() {
					return y
				},
				Fj: function() {
					return f
				},
				Kt: function() {
					return g
				},
				O5: function() {
					return s
				},
				Tc: function() {
					return o
				},
				_h: function() {
					return t
				},
				dB: function() {
					return c
				},
				s$: function() {
					return d
				}
			});
			const e = "to",
				o = "_gl",
				c = "freeTrial",
				f = "deepLinkQueryParams",
				s = "resolvedDeepLinkQueryParams",
				g = "add",
				d = "multiSkuProducts",
				p = "/:account/billing/checkout",
				y = "/:account/:zone/billing/checkout",
				t = new RegExp("^/(:account|[a-fA-F0-9]{32})(/(:zone|[^/.]+\\.[^/.]+))?/billing/checkout$")
		},
		"../react/app/components/DeepLink/index.ts": function(G, _, n) {
			"use strict";
			n.d(_, {
				ZP: function() {
					return U
				},
				U: function() {
					return d.U
				},
				dd: function() {
					return d.dd
				},
				bk: function() {
					return g.bk
				},
				Bh: function() {
					return g.Bh
				}
			});
			var e = n("webpack/sharing/consume/default/react/react"),
				o = n("../react/app/redux/index.ts"),
				c = n("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				f = n("../react/app/components/DeepLink/utils.ts"),
				s = n("../react/utils/bootstrap.ts"),
				g = n("../react/app/components/DeepLink/actions.ts"),
				d = n("../react/app/components/DeepLink/selectors.ts"),
				p = n("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				y = n.n(p);

			function t(V) {
				for (var R = 1; R < arguments.length; R++) {
					var z = arguments[R] != null ? Object(arguments[R]) : {},
						te = Object.keys(z);
					typeof Object.getOwnPropertySymbols == "function" && te.push.apply(te, Object.getOwnPropertySymbols(z).filter(function(Y) {
						return Object.getOwnPropertyDescriptor(z, Y).enumerable
					})), te.forEach(function(Y) {
						r(V, Y, z[Y])
					})
				}
				return V
			}

			function r(V, R, z) {
				return R = a(R), R in V ? Object.defineProperty(V, R, {
					value: z,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : V[R] = z, V
			}

			function a(V) {
				var R = l(V, "string");
				return typeof R == "symbol" ? R : String(R)
			}

			function l(V, R) {
				if (typeof V != "object" || V === null) return V;
				var z = V[Symbol.toPrimitive];
				if (z !== void 0) {
					var te = z.call(V, R || "default");
					if (typeof te != "object") return te;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (R === "string" ? String : Number)(V)
			}
			class i {
				constructor(R, z) {
					r(this, "deepLink", void 0), r(this, "legacyDeepLink", void 0), r(this, "resolvers", void 0), r(this, "startTime", Date.now()), r(this, "endTime", Date.now()), r(this, "_done", !1), r(this, "resolverStart", te => {
						this.resolvers.set(te, {
							name: te,
							startTime: Date.now(),
							userActions: []
						})
					}), r(this, "resolverDone", te => {
						const Y = this.resolvers.get(te);
						Y && (Y.endTime = Date.now(), this.resolvers.set(te, Y))
					}), r(this, "resolverCancel", te => {
						this.resolverDone(te), this.cancel()
					}), r(this, "start", () => {
						this.startTime = Date.now()
					}), r(this, "done", () => {
						this.endTime = Date.now(), this.track("Deep Link Success")
					}), r(this, "cancel", () => {
						this.endTime = Date.now(), this.track("Deep Link Cancel")
					}), r(this, "createUserActionTracker", te => {
						const Y = "NO_ACTION",
							ce = {
								actionType: Y,
								startTime: 0
							};
						return {
							start: (Q = Y) => {
								const ae = this.resolvers.get(te);
								ce.actionType = Q, ce.startTime = Date.now(), ae && ae.userActions.push(ce)
							},
							finish: (Q = Y) => {
								ce.actionType = Q, ce.endTime = Date.now()
							},
							cancel: (Q = Y) => {
								ce.actionType = Q, ce.endTime = Date.now(), this.resolverCancel(te)
							}
						}
					}), this.deepLink = R, this.legacyDeepLink = z, this.resolvers = new Map
				}
				track(R) {
					try {
						if (this._done) return;
						this._done = !0;
						const z = {
								category: "routing",
								deepLink: this.deepLink,
								legacyDeepLink: this.legacyDeepLink,
								totalUserActionsTime: 0,
								totalTime: u(this.startTime, this.endTime),
								totalCpuTime: u(this.startTime, this.endTime)
							},
							te = this.resolvers.size === 0 ? z : Array.from(this.resolvers.values()).reduce((Y, ce) => {
								const Q = u(ce.startTime, ce.endTime),
									ae = ce.userActions.reduce((x, w) => {
										const K = u(w.startTime, w.endTime);
										return {
											totalTime: x.totalTime + K,
											actions: x.actions.set(w.actionType, K)
										}
									}, {
										totalTime: 0,
										actions: new Map
									}),
									$ = Q - ae.totalTime;
								return t({}, Y, {
									totalTime: Y.totalTime + Q,
									totalUserActionsTime: Y.totalUserActionsTime + ae.totalTime,
									totalCpuTime: Y.totalCpuTime + $,
									[`${ce.name}ResolverTotalTime`]: Q,
									[`${ce.name}ResolverTotalCpuTime`]: $,
									[`${ce.name}ResolverTotalUserActionsTime`]: ae.totalTime
								}, Array.from(ae.actions.keys()).reduce((x, w) => t({}, x, {
									[`${ce.name}Resolver/${w}`]: ae.actions.get(w)
								}), {}))
							}, t({}, z, {
								totalTime: 0,
								totalCpuTime: 0
							}));
						y().sendEvent(R, te)
					} catch (z) {
						console.error(z)
					}
				}
			}

			function u(V = Date.now(), R = Date.now()) {
				return (R - V) / 1e3
			}
			var E = n("../react/app/components/DeepLink/constants.ts"),
				A = n("../react/common/hooks/useCachedState.ts"),
				v = n("../react/common/hooks/usePrevious.ts");

			function C(V) {
				for (var R = 1; R < arguments.length; R++) {
					var z = arguments[R] != null ? Object(arguments[R]) : {},
						te = Object.keys(z);
					typeof Object.getOwnPropertySymbols == "function" && te.push.apply(te, Object.getOwnPropertySymbols(z).filter(function(Y) {
						return Object.getOwnPropertyDescriptor(z, Y).enumerable
					})), te.forEach(function(Y) {
						S(V, Y, z[Y])
					})
				}
				return V
			}

			function S(V, R, z) {
				return R = T(R), R in V ? Object.defineProperty(V, R, {
					value: z,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : V[R] = z, V
			}

			function T(V) {
				var R = h(V, "string");
				return typeof R == "symbol" ? R : String(R)
			}

			function h(V, R) {
				if (typeof V != "object" || V === null) return V;
				var z = V[Symbol.toPrimitive];
				if (z !== void 0) {
					var te = z.call(V, R || "default");
					if (typeof te != "object") return te;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (R === "string" ? String : Number)(V)
			}
			var F = ({
					children: V
				}) => {
					const R = (0, o.TZ)(),
						z = (0, c.useHistory)(),
						te = (0, v.Z)(z.location.pathname),
						Y = (0, o.p4)(d.dd),
						[ce, Q] = (0, e.useState)(!0),
						[ae, $] = (0, A.j)(void 0, {
							key: E.Fj
						}),
						[x, w] = (0, A.j)(void 0, {
							key: E.O5
						}),
						[K, ee] = (0, A.j)(void 0, {
							key: E.s$
						}),
						ie = (0, s.$8)();
					let B = new URLSearchParams(z.location.search);
					const P = (0, f.mL)(z.location.pathname, B);
					let L = null,
						D = null;
					if (B.has(E.Tc) && B.delete(E.Tc), B.get(E.BV)) L = B.get(E.BV), z.location.hash && (D = z.location.hash);
					else if (ae) {
						const J = new URLSearchParams(ae);
						J.get(E.BV) && (L = J.get(E.BV), B = J)
					} else P && (B.set(E.BV, P), L = P);
					if (L && E._h.test(L)) {
						const J = B.getAll(E.Kt),
							X = JSON.stringify(J);
						J.length && X !== K && ee(X), B.has(E.Tc) && B.delete(E.Tc), B.delete(E.Kt)
					}!ie && ae === void 0 && L && $(B.toString());
					const H = async () => {
						try {
							if ((0, f.I3)(L) && ie && !Y) {
								ae && $(void 0), R.dispatch((0, g.r4)()), Q(!0), L && L !== x && w(L);
								const J = await (0, f.py)(L, Q, R, z, te, new i(L, P ? `${z.location.pathname}${z.location.search}` : void 0));
								B.delete(E.BV);
								const X = B.toString();
								z.replace(C({}, z.location, {
									pathname: J,
									search: X
								}, D ? {
									hash: D
								} : {})), R.dispatch((0, g.WF)())
							}
						} catch (J) {
							R.dispatch((0, g.WF)()), console.error(J)
						} finally {
							Q(!1)
						}
					};
					return (0, e.useEffect)(() => {
						H()
					}, [z.location.pathname, z.location.search, Y]), (ce || (0, f.I3)(L)) && ie ? null : V
				},
				M = n("../react/app/components/DeepLink/reducer.ts"),
				U = F
		},
		"../react/app/components/DeepLink/reducer.ts": function(G, _, n) {
			"use strict";
			n.d(_, {
				E: function() {
					return f
				},
				r: function() {
					return g
				}
			});
			var e = n("../../../../node_modules/seamless-immutable/seamless-immutable.production.min.js"),
				o = n.n(e),
				c = n("../react/app/components/DeepLink/actions.ts");
			const f = null,
				s = o().from({
					lastAction: f,
					isResolving: !1,
					filteredAccountIds: void 0
				});

			function g(d = s, p) {
				if (p.type === c.MF.RESOLVING_COMPLETE) return s;
				if (p.type === c.MF.RESOLVING_START) return d.set("isResolving", !0);
				if (d.isResolving) {
					if (p.type === c.MF.RESOLVING_COMPLETE) return d.set("isResolving", !1);
					if (p.type === c.MF.SET_FILTERED_ACCOUNT_IDS) return d.set("filteredAccountIds", p.accountIds);
					if (p.type === c.MF.DELETE_FILTERED_ACCOUNT_IDS) return d.set("filteredAccountIds", void 0);
					{
						let y = d;
						try {
							y = d.set("lastAction", p)
						} catch {
							y = d.set("lastAction", {
								type: p.type
							})
						}
						return y
					}
				} else return d
			}
		},
		"../react/app/components/DeepLink/selectors.ts": function(G, _, n) {
			"use strict";
			n.d(_, {
				U: function() {
					return c
				},
				dd: function() {
					return o
				},
				yI: function() {
					return e
				}
			});
			const e = f => f.deepLink.lastAction,
				o = f => f.deepLink.isResolving,
				c = f => f.deepLink.filteredAccountIds
		},
		"../react/app/components/DeepLink/utils.ts": function(G, _, n) {
			"use strict";
			n.d(_, {
				I3: function() {
					return l
				},
				X1: function() {
					return r
				},
				mL: function() {
					return v
				},
				py: function() {
					return A
				}
			});
			var e = n("../../../../node_modules/@cloudflare/util-en-garde/es/index.js"),
				o = n("../react/app/components/DeepLink/reducer.ts"),
				c = n("../../../../node_modules/@cloudflare/util-regex/es/index.js");
			const f = C => C.replace(c.default.endsWithSlash, ""),
				s = C => {
					const S = f(C).split("/").slice(3);
					return S.length ? "/" + S.join("/") : ""
				},
				g = C => {
					const S = f(C).split("/").slice(2);
					return S.length ? `apps/${S.join("/")}` : "apps"
				};
			var d = n("../react/app/components/DeepLink/selectors.ts"),
				p = n("../react/app/components/DeepLink/constants.ts"),
				y = n("../react/common/validators/index.js"),
				t = n("../react/common/utils/isGuards.ts");
			const r = C => (0, y.Lb)(C) && (C.split(".").length > 1 || (0, t.v5)(C)),
				a = e.eg.union([e.eg.literal("zone"), e.eg.literal("account"), e.eg.literal("pages-project"), e.eg.literal("pages-deployment"), e.eg.literal("worker")]),
				l = C => typeof C == "string" && C.startsWith("/"),
				i = (C, S) => T => new Promise((h, I) => {
					S.start();
					const F = C.subscribe(() => {
						const M = (0, d.yI)(C.getState());
						M === o.E ? (S.cancel(), F(), I("DeepLink: waitForAction out of context.")) : T(M) && (S.finish(M.type), F(), h(M))
					})
				}),
				u = (C, S, T) => (h, I) => new Promise((F, M) => {
					T.start();
					const U = S.location.pathname;
					h = new URL(h, window.location.href).pathname, U !== h && (T.cancel(), M(`DeepLink: waitForPageAction didn't execute on pageToAwaitActionOn: "${h}", but on "${U}". You need to redirect to "${h}", and unblockRouter in your Resolver, before you use this function.`));
					const V = C.subscribe(() => {
						const R = (0, d.yI)(C.getState()),
							z = S.location.pathname,
							Y = new URLSearchParams(S.location.search).get(p.BV);
						(z !== h || !!Y) && (T.cancel(), V(), M(`DeepLink: waitForPageAction user navigated away from "${h}" to "${z}${Y?S.location.search:""}"`)), R === o.E ? (T.cancel(), V(), M("DeepLink: waitForPageAction out of context.")) : I(R) && (T.finish(R.type), V(), F(R))
					})
				});

			function E(C) {
				const S = [],
					T = C.split("?")[0].split("/");
				for (let h of T) h.length !== 0 && (h.startsWith(":") ? S.push({
					value: h.substring(1),
					type: "dynamic"
				}) : S.push({
					value: h,
					type: "static"
				}));
				return S
			}
			async function A(C, S, T, h, I, F) {
				F.start();
				const M = E(C),
					V = await (await Promise.all([n.e(32375), n.e(72019), n.e(78839), n.e(60091), n.e(94923), n.e(8756)]).then(n.bind(n, "../react/app/components/DeepLink/resolvers/index.ts"))).default(),
					R = {};
				let z = "";
				for (const [te, Y] of M.entries())
					if (Y.type === "static") z = [z, Y.value].join("/");
					else if (Y.type === "dynamic" && a.is(Y.value) && Y.value in V) {
					F.resolverStart(Y.value);
					const ce = await V[Y.value]({
						deepLink: C,
						blockRouter: () => S(!0),
						unblockRouter: () => S(!1),
						routerHistory: h,
						resolvedValues: R,
						store: T,
						referringRoute: I,
						uri: {
							currentPartIdx: te,
							parts: M
						},
						waitForAction: i(T, F.createUserActionTracker(Y.value)),
						waitForPageAction: u(T, h, F.createUserActionTracker(Y.value))
					});
					F.resolverDone(Y.value), z = [z, ce].join("/"), R[Y.value] = ce
				} else throw F.cancel(), new Error(`DeepLink: Resolver with name '${Y.value}' is not supported.`);
				return F.done(), z
			}

			function v(C, S) {
				const T = ":account",
					h = ":zone",
					I = S.get("zone");
				if (I) return S.delete("zone"), `/${T}/${h}/${I}`;
				const F = S.get("account");
				if (F) return S.delete("account"), `/${T}/${F}`;
				if (C === "/overview") return `/${T}/${h}`;
				if (C === "/apps") return `/${T}/${h}/${g(C)}`;
				const M = ["/analytics", "/dns", "/spectrum", "/crypto", "/firewall", "/access", "/performance", "/caching", "/workers", "/page-rules", "/network", "/traffic", "/stream", "/customization", "/content-protection", "/rules", "/email"];
				for (const U of M) {
					const V = U.length;
					if (C.startsWith(U) && (C.length === V || C[V] === "/")) return `/${T}/${h}${C}`
				}
				switch (C) {
					case "/account/billing":
						return `/${T}/billing`;
					case "/account/subscriptions":
						return `/${T}/billing/subscriptions`;
					case "/account/virtualDNS":
						return `/${T}/dns-firewall`;
					case "/account/audit-log":
						return `/${T}/audit-log`;
					default:
						return null
				}
			}
		},
		"../react/app/components/ErrorBoundary.tsx": function(G, _, n) {
			"use strict";
			var e = n("webpack/sharing/consume/default/react/react"),
				o = n.n(e),
				c = n("../../../../node_modules/@sentry/react/esm/errorboundary.js"),
				f = n("../react/app/components/SomethingWrong.jsx"),
				s = n("../utils/sentry/lastSentEventId.ts"),
				g = n("../react/utils/zaraz.ts"),
				d = n("../react/utils/url.ts");
			const p = ({
				sentryTag: y,
				children: t
			}) => o().createElement(c.SV, {
				beforeCapture: r => {
					y && r.setTag("errorBoundary", y), g.tg === null || g.tg === void 0 || g.tg.track("page-error", {
						page: (0, d.Fl)(window.location.pathname)
					})
				},
				onError: r => {
					({
						REDUX_LOGGER: void 0
					}).TESTING && n.g.logAppError(r)
				},
				fallback: ({
					error: r,
					eventId: a
				}) => {
					const l = s.e.getEventId() || a;
					return o().createElement(f.Z, {
						type: "page",
						error: r,
						eventId: l
					})
				}
			}, t);
			_.Z = p
		},
		"../react/app/components/Footer.tsx": function(G, _, n) {
			"use strict";
			n.d(_, {
				Z: function() {
					return P
				}
			});
			var e = n("webpack/sharing/consume/default/react/react"),
				o = n.n(e),
				c = n("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				f = n("../../../../node_modules/@cloudflare/component-icon/es/index.js"),
				s = n("../node_modules/@cloudflare/elements/es/index.js"),
				g = n("../../../../node_modules/@cloudflare/style-container/es/index.js"),
				d = n("../../../../node_modules/@cloudflare/style-const/es/index.js"),
				p = n("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				y = n.n(p),
				t = n("../../../../node_modules/@cloudflare/util-responsive/es/index.js"),
				r = n("../react/common/components/Apple/utils.tsx"),
				a = n("../react/utils/translator.tsx"),
				l = n("../../../../node_modules/moment/moment.js"),
				i = n.n(l);
			const u = () => {
					const L = i()().format("YYYY"),
						D = H => {
							y().sendEvent("follower icloud footer link", {
								category: "icloud registrar",
								link: H
							})
						};
					return o().createElement(E, {
						marginTop: "auto"
					}, o().createElement(A, null, o().createElement(v, null, o().createElement(C, null, "\xA9 ", L, " Cloudflare, Inc."), o().createElement(C, null, o().createElement(S, null, o().createElement(T, {
						showOnDeskTop: !1
					}, o().createElement(h, {
						fontWeight: 600,
						href: "https://support.cloudflare.com/",
						onClick: () => D("Support")
					}, o().createElement(a.cC, {
						id: "common.support"
					}))), o().createElement(T, null, o().createElement(h, {
						fontWeight: 600,
						href: "https://www.cloudflare.com/privacypolicy/",
						onClick: () => D("Privacy Policy")
					}, o().createElement(a.cC, {
						id: "footer.privacy_policy"
					}))), o().createElement(T, null, o().createElement(h, {
						fontWeight: 600,
						href: "https://www.cloudflare.com/terms/",
						onClick: () => D("Terms of Use")
					}, o().createElement(a.cC, {
						id: "apple.footer.terms_of_use"
					}))), o().createElement(T, null, o().createElement(h, {
						fontWeight: 600,
						href: "https://www.cloudflare.com/cookie-policy/",
						onClick: () => D("Cookie Preferences")
					}, o().createElement(a.cC, {
						id: "apple.footer.cookie_preferences"
					}))), o().createElement(T, null, o().createElement(h, {
						fontWeight: 600,
						href: "https://www.cloudflare.com/trademark/",
						onClick: () => D("Trademark")
					}, o().createElement(a.cC, {
						id: "apple.footer.trademark"
					})))), o().createElement(S, null, o().createElement(T, null, o().createElement(h, {
						fontWeight: 400,
						href: "https://www.icann.org/resources/pages/benefits-2013-09-16-en",
						onClick: () => D("ICANN's Domain Name Registrants' Rights")
					}, o().createElement(a.cC, {
						id: "apple.footer.icanns"
					}))))))))
				},
				E = (0, g.createComponent)(({
					theme: L,
					marginTop: D
				}) => ({
					backgroundColor: "#1F1F1F",
					width: "100%",
					minHeight: "143px",
					marginTop: D
				})),
				A = (0, g.createComponent)(() => ({
					margin: "0 auto",
					maxWidth: "1000px"
				})),
				v = (0, g.createComponent)(({
					theme: L
				}) => ({
					desktop: {
						marginLeft: "70px",
						padding: "33px 0 0 0"
					},
					mobile: {
						padding: `33px ${L.space[3]}px`
					}
				})),
				C = (0, g.createComponent)(({
					theme: L
				}) => ({
					width: "100%",
					color: L.colors.white,
					fontSize: L.fontSizes[1],
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
				S = (0, g.createComponent)(({
					theme: L
				}) => ({
					display: "flex",
					flexWrap: "wrap",
					marginTop: L.space[3],
					desktop: {
						flexWrap: "nowrap"
					}
				})),
				T = (0, g.createComponent)(({
					showOnDeskTop: L = !0,
					theme: D
				}) => ({
					color: D.colors.white,
					fontSize: D.fontSizes[1],
					height: "20px",
					display: L ? "flex" : "none",
					alignItems: "center",
					desktop: {
						display: "flex",
						"&:nth-child(2)": {
							marginLeft: D.space[3],
							"&::before": {
								display: "inline-block"
							}
						}
					},
					"&:not(:first-child)": {
						marginLeft: D.space[3],
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
				h = (0, g.createStyledComponent)(({
					theme: L
				}) => ({
					textDecoration: "none",
					color: L.colors.white,
					"&:hover": {
						color: L.colors.white,
						textDecoration: "underline"
					}
				}), "a");
			var I = u,
				F = n("../react/common/hooks/useGate.ts"),
				M = n("../react/pages/welcome/routes.ts"),
				U = n("../react/utils/cookiePreferences.ts"),
				V = "data:image/svg+xml;base64,PHN2ZyBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAzMCAxNCIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgMzAgMTQiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGwtcnVsZTpldmVub2RkO2NsaXAtcnVsZTpldmVub2RkO2ZpbGw6I0ZGRkZGRjt9Cgkuc3Qxe2ZpbGwtcnVsZTpldmVub2RkO2NsaXAtcnVsZTpldmVub2RkO2ZpbGw6IzAwNjZGRjt9Cgkuc3Qye2ZpbGw6I0ZGRkZGRjt9Cgkuc3Qze2ZpbGw6IzAwNjZGRjt9Cjwvc3R5bGU+CgkJPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEyNzUgLTIwMCkiPgoJCQk8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMjc1IDIwMCkiPgoJCQkJPHBhdGggY2xhc3M9InN0MCIgZD0ibTcuNCAxMi44aDYuOGwzLjEtMTEuNmgtOS45Yy0zLjIgMC01LjggMi42LTUuOCA1LjhzMi42IDUuOCA1LjggNS44eiIvPgoJCQk8L2c+CgkJPC9nPgoJCTxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMjc1IC0yMDApIj4KCQkJPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTI3NSAyMDApIj4KCQkJCTxwYXRoIGNsYXNzPSJzdDEiIGQ9Im0yMi42IDBoLTE1LjJjLTMuOSAwLTcgMy4xLTcgN3MzLjEgNyA3IDdoMTUuMmMzLjkgMCA3LTMuMSA3LTdzLTMuMi03LTctN3ptLTIxIDdjMC0zLjIgMi42LTUuOCA1LjgtNS44aDkuOWwtMy4xIDExLjZoLTYuOGMtMy4yIDAtNS44LTIuNi01LjgtNS44eiIvPgoJCQkJPHBhdGggY2xhc3M9InN0MiIgZD0ibTI0LjYgNGMwLjIgMC4yIDAuMiAwLjYgMCAwLjhsLTIuMSAyLjIgMi4yIDIuMmMwLjIgMC4yIDAuMiAwLjYgMCAwLjhzLTAuNiAwLjItMC44IDBsLTIuMi0yLjItMi4yIDIuMmMtMC4yIDAuMi0wLjYgMC4yLTAuOCAwcy0wLjItMC42IDAtMC44bDIuMS0yLjItMi4yLTIuMmMtMC4yLTAuMi0wLjItMC42IDAtMC44czAuNi0wLjIgMC44IDBsMi4yIDIuMiAyLjItMi4yYzAuMi0wLjIgMC42LTAuMiAwLjggMHoiLz4KCQkJCTxwYXRoIGNsYXNzPSJzdDMiIGQ9Im0xMi43IDQuMWMwLjIgMC4yIDAuMyAwLjYgMC4xIDAuOGwtNC4yIDQuOWMtMC4xIDAuMS0wLjIgMC4yLTAuMyAwLjItMC4yIDAuMS0wLjUgMC4xLTAuNy0wLjFsLTIuMi0yLjJjLTAuMi0wLjItMC4yLTAuNiAwLTAuOHMwLjYtMC4yIDAuOCAwbDEuOCAxLjcgMy44LTQuNWMwLjItMC4yIDAuNi0wLjIgMC45IDB6Ii8+CgkJCTwvZz4KCQk8L2c+Cjwvc3ZnPg==",
				z = () => {
					const [L, D] = (0, e.useState)(!1), H = (0, U.wV)(), J = () => {
						D(!0)
					}, X = () => {
						D(!1)
					}, me = H && H === "US" ? (0, a.ZP)("footer.cpra_cta.privacy_choices") : (0, a.ZP)("footer.cpra_cta.cookie_preferences"), Le = {
						background: "transparent",
						borderRadius: "none",
						color: L ? (0, d.Yc)() ? "#ee730a" : "#003681" : (0, d.Yc)() ? "#4693ff" : "#0051c3",
						textDecoration: L ? "underline" : "none",
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
					return o().createElement(s.zx, {
						id: "ot-sdk-btn",
						className: "ot-sdk-show-settings",
						style: Le,
						onMouseEnter: J,
						onMouseLeave: X
					}, o().createElement(s.Ei, {
						height: 15,
						src: V,
						mr: 2,
						alt: me
					}), me)
				};

			function te() {
				return te = Object.assign ? Object.assign.bind() : function(L) {
					for (var D = 1; D < arguments.length; D++) {
						var H = arguments[D];
						for (var J in H) Object.prototype.hasOwnProperty.call(H, J) && (L[J] = H[J])
					}
					return L
				}, te.apply(this, arguments)
			}

			function Y(L, D) {
				if (L == null) return {};
				var H = ce(L, D),
					J, X;
				if (Object.getOwnPropertySymbols) {
					var me = Object.getOwnPropertySymbols(L);
					for (X = 0; X < me.length; X++) J = me[X], !(D.indexOf(J) >= 0) && (!Object.prototype.propertyIsEnumerable.call(L, J) || (H[J] = L[J]))
				}
				return H
			}

			function ce(L, D) {
				if (L == null) return {};
				var H = {},
					J = Object.keys(L),
					X, me;
				for (me = 0; me < J.length; me++) X = J[me], !(D.indexOf(X) >= 0) && (H[X] = L[X]);
				return H
			}
			const Q = 24,
				ae = (0, g.createStyledComponent)(() => ({
					borderBottom: "1.5px solid transparent",
					paddingBottom: "1.25px",
					textDecoration: "none",
					":hover": {
						borderBottom: `1.5px solid ${(0,d.Yc)()?d.rS.colors.orange[6]:d.rS.colors.blue[4]}`
					}
				}), s.A),
				$ = (0, g.createStyledComponent)(({
					theme: L
				}) => ({
					color: L.colors.gray[4],
					textDecoration: "none",
					marginTop: (0, t.tq)() ? "8px" : 0,
					":hover, :focus": {
						color: L.colors.gray[4]
					}
				}), s.A),
				x = L => {
					let {
						onClick: D
					} = L, H = Y(L, ["onClick"]);
					return o().createElement(ae, te({
						onClick: J => {
							y().sendEvent("navigate footer nav", {
								destinationPage: H.href
							}), D && D(J)
						}
					}, H))
				},
				w = L => {
					let {
						children: D,
						target: H,
						rel: J
					} = L, X = Y(L, ["children", "target", "rel"]);
					return o().createElement(x, te({
						target: H || "_blank",
						rel: J || "noopener noreferrer"
					}, X), D, o().createElement(f.J, {
						size: 12,
						ml: 1,
						label: "external-link",
						type: "external-link"
					}))
				},
				K = L => {
					let {
						children: D,
						target: H,
						rel: J
					} = L, X = Y(L, ["children", "target", "rel"]);
					return o().createElement($, te({
						target: H || "_blank",
						rel: J || "noopener noreferrer"
					}, X), D)
				},
				ee = (0, g.createStyledComponent)(({
					theme: L
				}) => ({
					margin: 0,
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					flexWrap: "wrap",
					gap: (0, t.tq)() ? "8px" : "16px",
					"& > li": {
						listStyleType: "none",
						"& > a": {
							fontSize: L.fontSizes[2],
							borderLeft: "1px solid",
							borderLeftColor: L.colors.gray[4],
							paddingLeft: "16px"
						},
						"&:first-child > a": {
							borderLeft: "none"
						}
					}
				}), s.Ul),
				ie = (0, g.createStyledComponent)(() => ({
					display: "flex",
					flexDirection: (0, t.tq)() ? "column" : "row",
					justifyContent: "center",
					paddingBottom: "16px"
				}), s.ZC);
			var P = () => {
				var L, D;
				const H = [M.d.root.pattern].some(Ie => (0, c.matchPath)(location.pathname, {
						path: Ie
					})),
					J = location.pathname === "/sign-up",
					X = (0, F.Z)("dx-footer-simplify") === "experiment",
					me = (0, F.Z)("prg-signup-next-steps-experiment") === "experiment" && J;
				if ((0, r.PP)()) return o().createElement(I, null);
				if (H) return null;
				const Le = new Date().getFullYear();
				return o().createElement(s.$_, te({
					height: (0, t.tq)() ? "auto" : 60,
					bg: "background",
					borderTop: "1px solid",
					borderColor: "gray.8",
					py: X ? "19px" : 4,
					pb: 0,
					px: [4, 3, 3],
					mt: me ? 0 : "auto"
				}, me && X && {
					height: "10vh"
				}), X ? o().createElement(ie, null, o().createElement(ee, null, o().createElement(s.Li, null, o().createElement(K, {
					href: "https://support.cloudflare.com"
				}, (0, a.ZP)("common.support"))), o().createElement(s.Li, null, o().createElement(K, {
					href: "https://www.cloudflarestatus.com"
				}, o().createElement(s.Dr, {
					textTransform: "capitalize"
				}, (0, a.ZP)("footer.system_status")))), o().createElement(s.Li, null, o().createElement(K, {
					href: "https://www.cloudflare.com/careers/"
				}, (0, a.ZP)("footer.careers"))), o().createElement(s.Li, null, o().createElement(K, {
					href: "https://www.cloudflare.com/website-terms/"
				}, (0, a.ZP)("footer.tos_reduced"))), o().createElement(s.Li, null, o().createElement(K, {
					href: "https://www.cloudflare.com/disclosure/"
				}, (0, a.ZP)("footer.security_issues"))), o().createElement(s.Li, null, o().createElement(K, {
					href: "https://www.cloudflare.com/privacypolicy/"
				}, (0, a.ZP)("footer.privacy_policy"))), o().createElement(s.Li, null, o().createElement(z, null)), o().createElement(s.Li, null, o().createElement(s.Dr, {
					fontSize: 2,
					color: "gray.4"
				}, "\xA9 ", Le, " Cloudflare, Inc.")))) : o().createElement(s.ZC, {
					display: "flex",
					flexWrap: "wrap",
					mx: "auto",
					maxWidth: "64rem"
				}, o().createElement(s.ZC, {
					mb: 3,
					width: [1 / 2, 1 / 5, 1 / 5]
				}, o().createElement(s.Dl, {
					fontSize: 2,
					ml: 0,
					listStyle: "none"
				}, o().createElement(s.Dt, {
					mb: 2
				}, (0, a.ZP)("footer.contact")), o().createElement(s.Dd, {
					mb: 2
				}, o().createElement(w, {
					href: "https://support.cloudflare.com"
				}, (0, a.ZP)("footer.contact_support"))), o().createElement(s.Dd, {
					mb: 2
				}, o().createElement(w, {
					href: "https://www.cloudflare.com/enterprise-service-request"
				}, (0, a.ZP)("footer.contact_sales"))), o().createElement(s.Dd, {
					mt: 3
				}, o().createElement(s.ZC, {
					display: "flex",
					justifyContent: "flex-start"
				}, o().createElement(x, {
					"aria-label": (0, a.ZP)("footer.twitter_link_purpose"),
					target: "_blank",
					rel: "noopener noreferrer",
					href: "https://twitter.com/Cloudflare",
					mr: 1,
					height: `${Q}px`
				}, o().createElement(f.J, {
					type: "twitter",
					size: Q
				})), o().createElement(x, {
					"aria-label": (0, a.ZP)("footer.facebook_link_purpose"),
					target: "_blank",
					rel: "noopener noreferrer",
					href: "https://www.facebook.com/Cloudflare",
					mr: 1,
					height: `${Q}px`
				}, o().createElement(f.J, {
					type: "facebook",
					size: Q
				})), o().createElement(x, {
					"aria-label": (0, a.ZP)("footer.linked_in_link_purpose"),
					target: "_blank",
					rel: "noopener noreferrer",
					href: "https://www.linkedin.com/company/407222",
					mr: 1,
					height: `${Q}px`
				}, o().createElement(f.J, {
					type: "linkedin",
					size: Q
				})))))), o().createElement(s.ZC, {
					mb: 3,
					px: [0, 3, 3],
					width: [1 / 2, 1 / 5, 1 / 5]
				}, o().createElement(s.Dl, {
					fontSize: 2,
					ml: 0,
					listStyle: "none"
				}, o().createElement(s.Dt, {
					mb: 2
				}, (0, a.ZP)("footer.what_we_do")), o().createElement(s.Dd, {
					mb: 2
				}, o().createElement(w, {
					href: "https://www.cloudflare.com/plans"
				}, (0, a.ZP)("footer.plans"))), o().createElement(s.Dd, {
					mb: 2
				}, o().createElement(w, {
					href: "https://www.cloudflare.com/overview"
				}, (0, a.ZP)("footer.about"))), o().createElement(s.Dd, {
					mb: 2
				}, o().createElement(w, {
					href: "https://www.cloudflare.com/network-map"
				}, (0, a.ZP)("footer.network_map"))))), o().createElement(s.ZC, {
					mb: 3,
					px: [0, 3, 3],
					width: [1 / 2, 1 / 5, 1 / 5]
				}, o().createElement(s.Dl, {
					fontSize: 2,
					ml: 0,
					listStyle: "none"
				}, o().createElement(s.Dt, {
					mb: 2
				}, (0, a.ZP)("footer.resources")), o().createElement(s.Dd, {
					mb: 2
				}, o().createElement(w, {
					href: "https://developers.cloudflare.com"
				}, (0, a.ZP)("footer.product_docs"))), o().createElement(s.Dd, {
					mb: 2
				}, o().createElement(w, {
					href: "https://blog.cloudflare.com"
				}, (0, a.ZP)("footer.blog"))), o().createElement(s.Dd, {
					mb: 2
				}, o().createElement(w, {
					href: "https://www.cloudflare.com/case-studies"
				}, (0, a.ZP)("footer.testimonials"))), o().createElement(s.Dd, {
					mb: 2
				}, o().createElement(w, {
					href: "https://partners.cloudflare.com"
				}, (0, a.ZP)("footer.hosting_partners"))), o().createElement(s.Dd, {
					mb: 2
				}, o().createElement(w, {
					href: "https://api.cloudflare.com"
				}, (0, a.ZP)("footer.api"))))), o().createElement(s.ZC, {
					mb: 3,
					px: [0, 3, 3],
					width: [1 / 2, 1 / 5, 1 / 5]
				}, o().createElement("div", {
					"aria-hidden": "true",
					title: `Current version: ${((L=window)===null||L===void 0||(D=L.build)===null||D===void 0?void 0:D.dashVersion)||"unknown"}`
				}), o().createElement(s.Dl, {
					fontSize: 2,
					ml: 0,
					listStyle: "none"
				}, o().createElement(s.Dt, {
					mb: 2
				}, (0, a.ZP)("footer.support")), o().createElement(s.Dd, {
					mb: 2
				}, o().createElement(w, {
					href: "https://support.cloudflare.com"
				}, (0, a.ZP)("footer.help_center"))), o().createElement(s.Dd, {
					mb: 2
				}, o().createElement(w, {
					href: "https://community.cloudflare.com"
				}, (0, a.ZP)("footer.community"))), o().createElement(s.Dd, {
					mb: 2
				}, o().createElement(w, {
					href: "https://www.cloudflarestatus.com"
				}, (0, a.ZP)("footer.system_status"))), o().createElement(s.Dd, {
					mb: 2
				}, o().createElement(w, {
					href: "https://www.cloudflare.com/abuse"
				}, (0, a.ZP)("footer.trust_safety"))))), o().createElement(s.ZC, {
					mb: 3,
					width: [1 / 2, 1 / 5, 1 / 5]
				}, o().createElement(s.Dl, {
					fontSize: 2,
					ml: 0,
					listStyle: "none"
				}, o().createElement(s.Dt, {
					mb: 2
				}, (0, a.ZP)("footer.about_us")), o().createElement(s.Dd, {
					mb: 2
				}, o().createElement(w, {
					href: "https://www.cloudflare.com/people"
				}, (0, a.ZP)("footer.team"))), o().createElement(s.Dd, {
					mb: 2
				}, o().createElement(w, {
					href: "https://www.cloudflare.com/careers"
				}, (0, a.ZP)("footer.careers"))), o().createElement(s.Dd, {
					mb: 2
				}, o().createElement(w, {
					href: "https://www.cloudflare.com/press-center"
				}, (0, a.ZP)("footer.press"))), o().createElement(s.Dd, {
					mb: 2
				}, o().createElement(w, {
					href: "https://www.cloudflare.com/website-terms/"
				}, (0, a.ZP)("footer.tos"))), o().createElement(s.Dd, {
					mb: 2
				}, o().createElement(w, {
					href: "https://www.cloudflare.com/subscriptionagreement/"
				}, (0, a.ZP)("footer.subs_agreement"))), o().createElement(s.Dd, {
					mb: 2
				}, o().createElement(w, {
					href: "https://www.cloudflare.com/privacypolicy/"
				}, (0, a.ZP)("footer.privacy_policy"))))), o().createElement(z, null)))
			}
		},
		"../react/app/components/GlobalHeader/AddProductDropdown/index.tsx": function(G, _, n) {
			"use strict";
			n.d(_, {
				S: function() {
					return a
				},
				Z: function() {
					return ie
				}
			});
			var e = n("webpack/sharing/consume/default/react/react"),
				o = n.n(e),
				c = n("../../../../node_modules/@cloudflare/component-icon/es/index.js"),
				f = n("../node_modules/@cloudflare/elements/es/index.js"),
				s = n("../../../../node_modules/@cloudflare/style-const/es/index.js"),
				g = n("../../../../node_modules/@cloudflare/style-container/es/index.js"),
				d = n("../../../../node_modules/@cloudflare/util-responsive/es/index.js"),
				p = n("../react/common/components/AccessControl/index.js"),
				y = n("../react/common/components/ButtonWithDropdown.tsx"),
				t = n("../react/common/components/Dropdown/index.tsx"),
				r = n("../react/utils/translator.tsx");
			const a = {
					ACCOUNT_MEMBERS: "add account members",
					EXISTING_DOMAIN: "add domain",
					NEW_DOMAIN: "register domain",
					PAGES: "add pages",
					R2: "add r2 storage",
					WAF_RULESET: "add waf ruleset",
					WORKERS: "add workers"
				},
				l = [{
					title: {
						id: "onboarding.add_product.existing_domain.title"
					},
					trackingEvent: a.EXISTING_DOMAIN,
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
					trackingEvent: a.NEW_DOMAIN,
					icon: "globe",
					url: "?to=/:account/domains/register",
					description: {
						id: "onboarding.add_product.new_domain.description"
					}
				}, {
					title: {
						id: "onboarding.add_product.waf_ruleset.title"
					},
					trackingEvent: a.WAF_RULESET,
					icon: "cloudflare-security-application",
					url: "?to=/:account/application-security/waf/custom/create",
					description: {
						id: "onboarding.add_product.waf_ruleset.description"
					}
				}, {
					title: {
						id: "apps.workers"
					},
					trackingEvent: a.WORKERS,
					icon: "edgeworker",
					url: "?to=/:account/workers-and-pages/create",
					description: {
						id: "onboarding.add_product.workers.description"
					}
				}, {
					title: {
						id: "apps.pages"
					},
					trackingEvent: a.PAGES,
					icon: "workers-pages",
					url: "?to=/:account/workers-and-pages/create/pages",
					description: {
						id: "onboarding.add_product.pages.description"
					}
				}, {
					title: {
						id: "onboarding.add_product.r2.title"
					},
					trackingEvent: a.R2,
					icon: "r2",
					url: "?to=/:account/r2/new",
					description: {
						id: "onboarding.add_product.r2.description"
					}
				}, {
					title: {
						id: "onboarding.add_product.account_member.title"
					},
					trackingEvent: a.ACCOUNT_MEMBERS,
					icon: "user-outline",
					url: "?to=/:account/members/invite",
					description: {
						id: "onboarding.add_product.account_member.description"
					},
					permissionCheck: "#member:edit"
				}];
			var i = n("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				u = n("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				E = n.n(u);

			function A(B) {
				for (var P = 1; P < arguments.length; P++) {
					var L = arguments[P] != null ? Object(arguments[P]) : {},
						D = Object.keys(L);
					typeof Object.getOwnPropertySymbols == "function" && D.push.apply(D, Object.getOwnPropertySymbols(L).filter(function(H) {
						return Object.getOwnPropertyDescriptor(L, H).enumerable
					})), D.forEach(function(H) {
						v(B, H, L[H])
					})
				}
				return B
			}

			function v(B, P, L) {
				return P = C(P), P in B ? Object.defineProperty(B, P, {
					value: L,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : B[P] = L, B
			}

			function C(B) {
				var P = S(B, "string");
				return typeof P == "symbol" ? P : String(P)
			}

			function S(B, P) {
				if (typeof B != "object" || B === null) return B;
				var L = B[Symbol.toPrimitive];
				if (L !== void 0) {
					var D = L.call(B, P || "default");
					if (typeof D != "object") return D;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (P === "string" ? String : Number)(B)
			}

			function T() {
				return T = Object.assign ? Object.assign.bind() : function(B) {
					for (var P = 1; P < arguments.length; P++) {
						var L = arguments[P];
						for (var D in L) Object.prototype.hasOwnProperty.call(L, D) && (B[D] = L[D])
					}
					return B
				}, T.apply(this, arguments)
			}

			function h(B, P) {
				if (B == null) return {};
				var L = I(B, P),
					D, H;
				if (Object.getOwnPropertySymbols) {
					var J = Object.getOwnPropertySymbols(B);
					for (H = 0; H < J.length; H++) D = J[H], !(P.indexOf(D) >= 0) && (!Object.prototype.propertyIsEnumerable.call(B, D) || (L[D] = B[D]))
				}
				return L
			}

			function I(B, P) {
				if (B == null) return {};
				var L = {},
					D = Object.keys(B),
					H, J;
				for (J = 0; J < D.length; J++) H = D[J], !(P.indexOf(H) >= 0) && (L[H] = B[H]);
				return L
			}
			const F = B => {
					let {
						title: P,
						trackingEvent: L,
						icon: D,
						url: H,
						description: J,
						disabled: X
					} = B, me = h(B, ["title", "trackingEvent", "icon", "url", "description", "disabled"]);
					return o().createElement(M, T({
						to: !X && H || "#",
						"aria-disabled": X,
						onClick: () => {
							E().sendEvent(L, {
								category: "Onboarding",
								component: "Global add dropdown"
							})
						}
					}, me), o().createElement(f.ZC, {
						display: "flex"
					}, o().createElement(c.J, {
						type: D,
						size: 24,
						mr: 2
					}), o().createElement(f.ZC, {
						display: "flex",
						flexDirection: "column"
					}, o().createElement(f.ZC, {
						fontSize: 3
					}, o().createElement(r.cC, P)), o().createElement(f.ZC, {
						fontSize: 2,
						color: "gray.4"
					}, o().createElement(r.cC, J)))))
				},
				M = (0, g.createStyledComponent)(({
					theme: B
				}) => {
					const P = {
						cursor: "pointer",
						backgroundColor: (0, s.Yc)() ? B.colors.gray[8] : B.colors.gray[9],
						color: B.colors.gray[2]
					};
					return {
						display: "block",
						width: "100%",
						px: 16,
						py: 8,
						background: B.colors.background,
						color: B.colors.gray[2],
						fontSize: B.fontSizes[2],
						userSelect: "none",
						textDecoration: "none",
						textAlign: "left",
						borderRadius: "1px",
						':hover, :focus, :focus-within, :hover:not([aria-disabled="true"])': P,
						':focus-within:not([aria-disabled="true"])': A({}, P, {
							boxShadow: "none",
							borderRadius: 0
						}),
						':is([aria-disabled="true"])': {
							color: B.colors.gray[6],
							cursor: "not-allowed",
							pointerEvents: "none",
							opacity: .5
						}
					}
				}, i.Link);
			var U = F,
				V = n("../react/common/hooks/useGate.ts");

			function R() {
				return R = Object.assign ? Object.assign.bind() : function(B) {
					for (var P = 1; P < arguments.length; P++) {
						var L = arguments[P];
						for (var D in L) Object.prototype.hasOwnProperty.call(L, D) && (B[D] = L[D])
					}
					return B
				}, R.apply(this, arguments)
			}

			function z(B) {
				for (var P = 1; P < arguments.length; P++) {
					var L = arguments[P] != null ? Object(arguments[P]) : {},
						D = Object.keys(L);
					typeof Object.getOwnPropertySymbols == "function" && D.push.apply(D, Object.getOwnPropertySymbols(L).filter(function(H) {
						return Object.getOwnPropertyDescriptor(L, H).enumerable
					})), D.forEach(function(H) {
						te(B, H, L[H])
					})
				}
				return B
			}

			function te(B, P, L) {
				return P = Y(P), P in B ? Object.defineProperty(B, P, {
					value: L,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : B[P] = L, B
			}

			function Y(B) {
				var P = ce(B, "string");
				return typeof P == "symbol" ? P : String(P)
			}

			function ce(B, P) {
				if (typeof B != "object" || B === null) return B;
				var L = B[Symbol.toPrimitive];
				if (L !== void 0) {
					var D = L.call(B, P || "default");
					if (typeof D != "object") return D;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (P === "string" ? String : Number)(B)
			}

			function Q(B, P) {
				if (B == null) return {};
				var L = ae(B, P),
					D, H;
				if (Object.getOwnPropertySymbols) {
					var J = Object.getOwnPropertySymbols(B);
					for (H = 0; H < J.length; H++) D = J[H], !(P.indexOf(D) >= 0) && (!Object.prototype.propertyIsEnumerable.call(B, D) || (L[D] = B[D]))
				}
				return L
			}

			function ae(B, P) {
				if (B == null) return {};
				var L = {},
					D = Object.keys(B),
					H, J;
				for (J = 0; J < D.length; J++) H = D[J], !(P.indexOf(H) >= 0) && (L[H] = B[H]);
				return L
			}
			const $ = "GLOBAL_ADD_DROPDOWN",
				x = ({
					disableProducts: B
				}) => {
					const P = (0, V.Z)("dashon-18-reduced-add-button-on-mobile") === "experiment" && (0, d.tq)();
					return o().createElement(w, {
						role: "group",
						"data-testid": $
					}, o().createElement(t.Lt, {
						trigger: o().createElement(K, null, o().createElement(c.J, {
							label: "plus",
							type: "plus"
						}), !P && o().createElement(o().Fragment, null, o().createElement(r.cC, {
							id: "common.add"
						}), " ", o().createElement(c.J, {
							label: "arrow",
							type: "caret-down"
						}))),
						menu: o().createElement(y.v2, {
							overflow: "auto",
							maxHeight: "80vh",
							width: "min(50vw, 340px)",
							whiteSpace: "normal",
							mr: 1,
							p: "8px 0",
							bottom: "auto",
							zIndex: 1200
						}, l.map(L => {
							const D = L || {},
								{
									disableOn: H,
									permissionCheck: J
								} = D,
								X = Q(D, ["disableOn", "permissionCheck"]),
								me = H && B[H],
								Le = z({}, X, {
									disabled: me
								});
							return J ? o().createElement(p.Z, {
								key: L.title.id,
								edit: J
							}, ({
								isEditable: Ie
							}) => Ie && o().createElement(U, Le)) : o().createElement(U, R({
								key: L.url
							}, Le))
						}))
					}))
				},
				w = (0, g.createStyledComponent)(() => ({
					height: "100%",
					position: "relative",
					display: "flex",
					alignItems: "center"
				})),
				K = (0, g.createStyledComponent)(({
					theme: B
				}) => ({
					lineHeight: 1,
					pr: 2,
					pl: 2,
					width: "fit-content",
					display: "flex",
					alignItems: "center",
					gap: 1,
					borderRadius: 4,
					borderColor: B.colors.gray[6],
					borderWidth: 1,
					borderStyle: "solid",
					color: (0, s.Yc)() ? B.colors.gray[1] : B.colors.gray[4],
					cursor: "pointer",
					whiteSpace: "nowrap",
					backgroundColor: "transparent",
					mr: 1,
					padding: 2,
					"&:hover": {
						backgroundColor: (0, s.Yc)() ? B.colors.gray[8] : B.colors.gray[9]
					}
				}), f.zx);
			var ee = x,
				ie = ee
		},
		"../react/app/components/LoadingSuspense.tsx": function(G, _, n) {
			"use strict";
			var e = n("webpack/sharing/consume/default/react/react"),
				o = n.n(e),
				c = n("../../../../node_modules/@cloudflare/component-loading/es/index.js"),
				f = n("../node_modules/@cloudflare/elements/es/index.js"),
				s = n("../react/utils/translator.tsx"),
				g = n("../react/app/components/ErrorStatus.tsx"),
				d = n("../react/common/components/EmptyPage.jsx"),
				p = n("../react/common/hooks/suspenseHelpers.ts");

			function y(a) {
				const [l, i] = (0, e.useState)(!1);
				return (0, e.useEffect)(() => {
					const u = window.setTimeout(() => i(!0), a);
					return () => window.clearTimeout(u)
				}, []), l
			}
			const t = ({
					loadingTimeout: a = 1e3,
					stillLoadingTimeout: l = 9e3
				}) => {
					const i = y(a),
						u = y(l);
					if ((0, p.nW)(), !i && !u) return o().createElement(d.Z, null);
					const E = u ? o().createElement(s.cC, {
						id: "common.still_loading"
					}) : i ? o().createElement(s.cC, {
						id: "common.loading"
					}) : null;
					return o().createElement(g.Z, {
						size: 5
					}, o().createElement(f.ZC, {
						mr: 3
					}, o().createElement(c.g, {
						size: "2x"
					})), E)
				},
				r = ({
					children: a
				}) => o().createElement(e.Suspense, {
					fallback: o().createElement(t, null)
				}, a);
			_.Z = r
		},
		"../react/app/components/Persistence/api.ts": function(G, _, n) {
			"use strict";
			n.d(_, {
				C8: function() {
					return p
				},
				d3: function() {
					return d
				},
				dr: function() {
					return s
				},
				lt: function() {
					return g
				},
				m6: function() {
					return t
				},
				n: function() {
					return y
				},
				yl: function() {
					return f
				}
			});
			var e = n("webpack/sharing/consume/default/@cloudflare/util-http/@cloudflare/util-http"),
				o = n.n(e);
			const c = "/persistence/user",
				f = async () => {
					try {
						return await (await e.get(c, {
							hideErrorAlert: !0
						})).body
					} catch (r) {
						console.error(r)
					}
				}, s = async r => {
					try {
						return await (await e.get(`/accounts/${r}/organizations`, {
							hideErrorAlert: !0
						})).body
					} catch (a) {
						console.error(a)
					}
				}, g = async (r, a) => {
					try {
						return await (await e.post(`${c}/favorites`, {
							body: JSON.stringify({
								type: "zone",
								name: r,
								accountId: a
							}),
							hideErrorAlert: !0
						})).body
					} catch (l) {
						return console.error(l), []
					}
				}, d = async (r, a) => {
					try {
						return await e.post(`/accounts/${r}/support/help_form/statusPage/subscribe`, {
							body: JSON.stringify({
								incidentId: a
							}),
							hideErrorAlert: !0
						}), !0
					} catch (l) {
						return console.error(l), !1
					}
				}, p = async r => {
					try {
						return await (await e.post(c, {
							body: JSON.stringify({
								darkMode: r
							})
						})).body
					} catch (a) {
						console.error(a)
					}
				}, y = async r => {
					try {
						return await (await e.post(`${c}/recents`, {
							body: JSON.stringify(r),
							hideErrorAlert: !0
						})).body
					} catch (a) {
						console.error(a)
					}
				}, t = async r => {
					try {
						return await (await e.post(`${c}/viewed-changes`, {
							body: JSON.stringify(r),
							hideErrorAlert: !0
						})).body
					} catch (a) {
						throw console.error(a), a
					}
				}
		},
		"../react/app/components/Persistence/index.tsx": function(G, _, n) {
			"use strict";
			n.d(_, {
				Wl: function() {
					return y
				},
				lp: function() {
					return E
				},
				Z_: function() {
					return v
				},
				r7: function() {
					return V
				},
				Tv: function() {
					return $
				},
				yZ: function() {
					return C
				}
			});
			var e = n("webpack/sharing/consume/default/react/react"),
				o = n.n(e),
				c = n("../react/app/redux/index.ts"),
				f = n("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				s = n.n(f),
				g = n("../react/utils/bootstrap.ts"),
				d = n("../react/common/selectors/zoneSelectors.ts"),
				p = n("../react/app/components/Persistence/api.ts");
			const y = 10;

			function t(x) {
				for (var w = 1; w < arguments.length; w++) {
					var K = arguments[w] != null ? Object(arguments[w]) : {},
						ee = Object.keys(K);
					typeof Object.getOwnPropertySymbols == "function" && ee.push.apply(ee, Object.getOwnPropertySymbols(K).filter(function(ie) {
						return Object.getOwnPropertyDescriptor(K, ie).enumerable
					})), ee.forEach(function(ie) {
						r(x, ie, K[ie])
					})
				}
				return x
			}

			function r(x, w, K) {
				return w = a(w), w in x ? Object.defineProperty(x, w, {
					value: K,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : x[w] = K, x
			}

			function a(x) {
				var w = l(x, "string");
				return typeof w == "symbol" ? w : String(w)
			}

			function l(x, w) {
				if (typeof x != "object" || x === null) return x;
				var K = x[Symbol.toPrimitive];
				if (K !== void 0) {
					var ee = K.call(x, w || "default");
					if (typeof ee != "object") return ee;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (w === "string" ? String : Number)(x)
			}
			const i = {
					darkMode: "off",
					emailVerificationRequest: "",
					favorites: [],
					recents: {},
					viewedChanges: []
				},
				u = t({}, i, {
					isLoading: !0,
					actions: {
						starZone: () => null,
						setDarkMode: () => null,
						isZoneStarred: () => !1,
						canAccountStarZone: () => !0,
						logRouteVisited: () => null,
						viewChange: () => null
					}
				}),
				E = (0, e.createContext)(u),
				A = E.Consumer,
				v = ({
					children: x,
					onDarkModeChangeCb: w
				}) => {
					const [K, ee] = (0, e.useState)(i), [ie, B] = (0, e.useState)(u.isLoading), P = (0, g.$8)(), L = (0, c.p4)(J => (0, d.wH)(J));
					(0, e.useEffect)(() => {
						P ? (0, p.yl)().then(J => {
							J && (ee(J), w(J.darkMode))
						}).finally(() => B(!1)) : B(!1)
					}, [P]);
					const D = (J, X) => !!K.favorites.find(me => me.type === "zone" && me.name === J && me.accountId === X),
						H = J => K.favorites.filter(me => me.type === "zone" && me.accountId === J).length < y;
					return o().createElement(E.Provider, {
						value: t({}, K, {
							isLoading: ie,
							actions: {
								canAccountStarZone: H,
								isZoneStarred: D,
								starZone: async (J, X) => {
									var me;
									const Le = !D(J, X),
										Ie = H(X);
									if (Le && !Ie) {
										console.log("can not star zone - account is at limit");
										return
									}
									const W = await (0, p.lt)(J, X);
									s().sendEvent("click star zone", {
										isStarring: Le,
										totalStarredZones: W.filter(se => se.accountId === X && se.type === "zone").length,
										totalZones: L == null || (me = L.paginationData) === null || me === void 0 ? void 0 : me.info.total_count
									}), ee(t({}, K, {
										favorites: W
									}))
								},
								setDarkMode: async J => {
									const X = await (0, p.C8)(J);
									ee(X), w(X.darkMode)
								},
								logRouteVisited: async J => {
									var X;
									const me = await (0, p.n)(J);
									ee((X = me) !== null && X !== void 0 ? X : t({}, K))
								},
								viewChange: async J => {
									const X = await (0, p.m6)(J);
									ee(t({}, K, {
										viewedChanges: X
									}))
								}
							}
						})
					}, x)
				},
				C = () => (0, e.useContext)(E);
			var S = n("../../../../node_modules/@cloudflare/style-const/es/index.js"),
				T = n("../../../../node_modules/@cloudflare/component-icon/es/index.js");

			function h() {
				return h = Object.assign ? Object.assign.bind() : function(x) {
					for (var w = 1; w < arguments.length; w++) {
						var K = arguments[w];
						for (var ee in K) Object.prototype.hasOwnProperty.call(K, ee) && (x[ee] = K[ee])
					}
					return x
				}, h.apply(this, arguments)
			}

			function I(x, w) {
				if (x == null) return {};
				var K = F(x, w),
					ee, ie;
				if (Object.getOwnPropertySymbols) {
					var B = Object.getOwnPropertySymbols(x);
					for (ie = 0; ie < B.length; ie++) ee = B[ie], !(w.indexOf(ee) >= 0) && (!Object.prototype.propertyIsEnumerable.call(x, ee) || (K[ee] = x[ee]))
				}
				return K
			}

			function F(x, w) {
				if (x == null) return {};
				var K = {},
					ee = Object.keys(x),
					ie, B;
				for (B = 0; B < ee.length; B++) ie = ee[B], !(w.indexOf(ie) >= 0) && (K[ie] = x[ie]);
				return K
			}
			const M = {
				light: {
					gold: "gold.6",
					gray: "gray.6"
				},
				dark: {
					gold: "gold.3",
					gray: "gray.4"
				}
			};
			var V = x => {
					let {
						isStarred: w,
						size: K = 16
					} = x, ee = I(x, ["isStarred", "size"]);
					const ie = M[(0, S.Yc)() ? "dark" : "light"];
					return o().createElement(T.J, h({
						type: w ? "star" : "star-outline",
						color: w ? ie.gold : ie.gray,
						size: K
					}, ee))
				},
				R = n("../node_modules/@cloudflare/elements/es/index.js");

			function z(x) {
				for (var w = 1; w < arguments.length; w++) {
					var K = arguments[w] != null ? Object(arguments[w]) : {},
						ee = Object.keys(K);
					typeof Object.getOwnPropertySymbols == "function" && ee.push.apply(ee, Object.getOwnPropertySymbols(K).filter(function(ie) {
						return Object.getOwnPropertyDescriptor(K, ie).enumerable
					})), ee.forEach(function(ie) {
						te(x, ie, K[ie])
					})
				}
				return x
			}

			function te(x, w, K) {
				return w = Y(w), w in x ? Object.defineProperty(x, w, {
					value: K,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : x[w] = K, x
			}

			function Y(x) {
				var w = ce(x, "string");
				return typeof w == "symbol" ? w : String(w)
			}

			function ce(x, w) {
				if (typeof x != "object" || x === null) return x;
				var K = x[Symbol.toPrimitive];
				if (K !== void 0) {
					var ee = K.call(x, w || "default");
					if (typeof ee != "object") return ee;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (w === "string" ? String : Number)(x)
			}
			const Q = {
				light: {
					default: {
						border: "gray.8",
						text: "gray.2",
						bg: "white",
						bgDisabled: "grey.6"
					},
					active: {
						border: "blue.5",
						text: "blue.5",
						bg: "blue.9",
						bgDisabled: "grey.6"
					}
				},
				dark: {
					default: {
						border: "gray.8",
						text: "gray.1",
						bg: "gray.7",
						bgDisabled: "grey.6"
					},
					active: {
						border: "blue.5",
						text: "gray.1",
						bg: "blue.9",
						bgDisabled: "grey.6"
					}
				}
			};
			var $ = (0, e.forwardRef)(({
				featurePreview: x = !1,
				isStarred: w,
				onClickFn: K,
				isDisabled: ee,
				testId: ie,
				buttonText: B,
				size: P = "large"
			}, L) => {
				const D = Q[(0, S.Yc)() ? "dark" : "light"][w && !x ? "active" : "default"],
					H = z({}, P === "large" && {
						starIconSize: 16,
						fontSize: 3,
						height: "auto",
						paddingLeft: "12px",
						paddingRight: 3
					}, P === "small" && {
						starIconSize: 14,
						fontSize: 1,
						height: "1.5rem",
						paddingLeft: "6px",
						paddingRight: 2
					});
				return o().createElement(R.zx, {
					innerRef: L,
					display: "inline-flex",
					alignItems: "center",
					py: 2,
					pr: H.paddingRight,
					gap: 1,
					pl: H.paddingLeft,
					pointerEvents: "inherit",
					borderRadius: "50vh",
					border: "1px solid",
					cursor: x || ee ? "default" : "pointer",
					backgroundColor: D.bg,
					color: D.text,
					borderColor: D.border,
					onClick: K,
					opacity: ee ? .5 : 1,
					disabled: ee,
					fontSize: H.fontSize,
					height: H.height,
					"data-testid": ie
				}, o().createElement(V, {
					isStarred: x ? !1 : w,
					size: H.starIconSize
				}), B)
			})
		},
		"../react/app/components/SomethingWrong.jsx": function(G, _, n) {
			"use strict";
			var e = n("webpack/sharing/consume/default/react/react"),
				o = n.n(e),
				c = n("../../../../node_modules/prop-types/index.js"),
				f = n.n(c),
				s = n("../../../common/intl/intl-react/src/index.ts"),
				g = n("../../../../node_modules/@cloudflare/style-container/es/index.js"),
				d = n("../node_modules/@cloudflare/component-button/es/index.js"),
				p = n("../../../../node_modules/@sentry/react/node_modules/@sentry/browser/esm/sdk.js"),
				y = n("../../../../node_modules/@sentry/core/esm/exports.js"),
				t = n("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				r = n.n(t),
				a = n("../../../../node_modules/@cloudflare/component-header/es/index.js"),
				l = n("../../../../node_modules/@cloudflare/component-logo/es/index.js"),
				i = n("../react/app/components/Footer.tsx"),
				u = n("../react/utils/url.ts");

			function E(z) {
				for (var te = 1; te < arguments.length; te++) {
					var Y = arguments[te] != null ? Object(arguments[te]) : {},
						ce = Object.keys(Y);
					typeof Object.getOwnPropertySymbols == "function" && ce.push.apply(ce, Object.getOwnPropertySymbols(Y).filter(function(Q) {
						return Object.getOwnPropertyDescriptor(Y, Q).enumerable
					})), ce.forEach(function(Q) {
						A(z, Q, Y[Q])
					})
				}
				return z
			}

			function A(z, te, Y) {
				return te = v(te), te in z ? Object.defineProperty(z, te, {
					value: Y,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : z[te] = Y, z
			}

			function v(z) {
				var te = C(z, "string");
				return typeof te == "symbol" ? te : String(te)
			}

			function C(z, te) {
				if (typeof z != "object" || z === null) return z;
				var Y = z[Symbol.toPrimitive];
				if (Y !== void 0) {
					var ce = Y.call(z, te || "default");
					if (typeof ce != "object") return ce;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (te === "string" ? String : Number)(z)
			}
			const S = (0, g.createComponent)(({
					type: z
				}) => ({
					height: z !== "fullscreen" ? 451 : "75vh",
					tabletLegacy: {
						marginBottom: "-2.66rem"
					}
				})),
				T = (0, g.createComponent)(({
					theme: z,
					margin: te,
					size: Y = 6
				}) => ({
					display: "flex",
					flexFlow: "column",
					color: z.colors.gray[3],
					height: te ? "auto" : "100%",
					padding: te ? 0 : z.space[Y > 1 ? Y - 2 : 0],
					margin: te,
					justifyContent: "center",
					alignItems: "center"
				})),
				h = (0, g.createComponent)(() => ({
					textAlign: "left"
				})),
				I = (0, g.createComponent)(() => ({
					textAlign: "right"
				})),
				F = (0, g.createComponent)(({
					theme: z
				}) => ({
					fontSize: z.fontSizes[6]
				})),
				M = (0, g.createComponent)(({
					theme: z
				}) => ({
					fontSize: z.fontSizes[4]
				})),
				U = (0, g.createComponent)(({
					theme: z
				}) => ({
					fontSize: z.fontSizes[3]
				})),
				V = (0, g.createComponent)(({
					theme: z
				}) => ({
					width: "100%",
					height: 125,
					marginTop: z.space[4],
					padding: z.space[2]
				}), "textarea");
			class R extends o().Component {
				constructor(...te) {
					super(...te);
					A(this, "state", {
						value: "",
						submitted: !1
					}), A(this, "handleTextareaChange", Y => {
						this.setState({
							value: Y.target.value
						})
					}), A(this, "sendErrToSentry10", async () => {
						try {
							var Y, ce, Q, ae;
							const $ = ((Y = window) === null || Y === void 0 || (ce = Y.bootstrap) === null || ce === void 0 || (Q = ce.data) === null || Q === void 0 || (ae = Q.user) === null || ae === void 0 ? void 0 : ae.id) || "Unknown",
								x = this.props.eventId || p.eW(),
								w = {
									name: $,
									email: `${$}@userid.com`,
									comments: this.state.value,
									eventId: x,
									url: window.location.href,
									prevUrl: document.referrer,
									date: Date.now(),
									dashVersion: window.build.dashVersion,
									build: E({}, window.build)
								};
							(await fetch("https://platform.dash.cloudflare.com/sentry/user-feedback", {
								method: "POST",
								headers: {
									Accept: "*/*",
									"Content-Type": "application/json"
								},
								body: JSON.stringify(w)
							})).ok && this.setState({
								submitted: !0,
								value: ""
							}, () => {
								setTimeout(() => window.location.href = "/", 5 * 1e3)
							})
						} catch ($) {
							console.error($)
						}
					}), A(this, "handleSubmit", () => {
						this.state.value !== "" && this.sendErrToSentry10()
					}), A(this, "renderContent", Y => o().createElement(s.oc, null, ce => o().createElement(S, {
						type: Y
					}, o().createElement(T, null, o().createElement(h, null, o().createElement(F, null, ce.t("error.internal_issues")), o().createElement(M, null, ce.t("error.help_us")), o().createElement(V, {
						name: "comment",
						value: this.state.textareaValue,
						onChange: Q => this.handleTextareaChange(Q),
						disabled: this.state.submitted,
						placeholder: ce.t("error.give_feedback")
					}), o().createElement(I, null, !this.state.submitted && o().createElement(d.zx, {
						onClick: this.handleSubmit,
						type: "primary"
					}, ce.t("common.submit")), this.state.submitted && o().createElement(U, null, ce.t("error.feedback_sent"))))))))
				}
				componentDidMount() {
					const te = this.props.error;
					console.error(`SomethingWrong: ${te}`), y.YA("user_feedback_form_displayed", "yes"), y.YA("normalizedPath", (0, u.Fl)(window.location.pathname))
				}
				render() {
					const {
						type: te
					} = this.props;
					return te === "fullscreen" ? o().createElement("div", null, o().createElement(a.h4, null, o().createElement(t.Link, {
						to: "/"
					}, o().createElement(l.TR, null))), this.renderContent(te), o().createElement(i.Z, null)) : this.renderContent(te)
				}
			}
			R.propTypes = {
				type: f().oneOf(["fullscreen", "page"]),
				error: f().oneOfType([f().string, f().object]),
				eventId: f().string
			}, _.Z = R
		},
		"../react/app/redux/index.ts": function(G, _, n) {
			"use strict";
			n.d(_, {
				TZ: function() {
					return c
				},
				UM: function() {
					return s
				},
				ZS: function() {
					return f
				},
				p4: function() {
					return g
				}
			});
			var e = n("webpack/sharing/consume/default/react-redux/react-redux"),
				o = n.n(e);
			const c = () => (0, e.useStore)(),
				f = () => c().getState(),
				s = () => (0, e.useDispatch)(),
				g = e.useSelector
		},
		"../react/app/redux/normalizer.js": function(G, _, n) {
			"use strict";
			n.d(_, {
				P1: function() {
					return y
				},
				jQ: function() {
					return d
				},
				qR: function() {
					return t
				},
				uc: function() {
					return p
				}
			});
			var e = n("../react/pages/home/alerts/config.tsx"),
				o = n("../react/pages/workers/entityTypes.ts"),
				c = n("../react/pages/email/types.ts"),
				f = n("../../../../node_modules/redux-grim/dist/redux-grim.es.js"),
				s = n("../../../../node_modules/seamless-immutable/seamless-immutable.production.min.js"),
				g = n.n(s);
			const d = s.static.from([{
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
					entityType: "hostnameRegions"
				}, {
					entityType: "http2ToOrigin"
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
					entityType: c.BB.catchAllRule,
					idProp: "tag"
				}, {
					entityType: c.BB.rule,
					idProp: "tag"
				}, {
					entityType: c.BB.rules,
					to: c.BB.rule
				}, {
					entityType: c.BB.dstAddress,
					idProp: "tag"
				}, {
					entityType: c.BB.dstAddresses,
					to: c.BB.dstAddress
				}, {
					entityType: c.BB.dnsRecord,
					idProp: "tag"
				}, {
					entityType: c.BB.dnsRecords,
					to: c.BB.dnsRecord
				}, {
					entityType: c.BB.zone,
					idProp: "tag"
				}]),
				p = r => r.entities,
				y = (...r) => (0, f.P1)(d, p, ...r),
				t = (0, f.QB)(d)
		},
		"../react/app/redux/utils.ts": function(G, _, n) {
			"use strict";
			n.d(_, {
				F: function() {
					return c
				},
				_: function() {
					return o
				}
			});
			var e = n("../react/app/redux/makeAction.js");
			const o = f => (s, g, d) => (0, e.SC)(s, g, d, {
					hideErrorAlert: !0
				}).catch(f),
				c = f => s => {
					if (s.status === f) return s;
					throw s
				}
		},
		"../react/common/actionTypes.ts": function(G, _, n) {
			"use strict";
			n.d(_, {
				Cm: function() {
					return g
				},
				Cz: function() {
					return o
				},
				HI: function() {
					return d
				},
				Li: function() {
					return y
				},
				Ng: function() {
					return e
				},
				Np: function() {
					return c
				},
				Yc: function() {
					return r
				},
				gM: function() {
					return f
				},
				lV: function() {
					return s
				},
				s1: function() {
					return p
				}
			});
			const e = "NOTIFICATION_OPEN",
				o = "NOTIFICATION_CLOSE",
				c = "MODAL_OPEN",
				f = "MODAL_CLOSE",
				s = "TOGGLE_ON",
				g = "TOGGLE_OFF",
				d = "SET_ACTIVE",
				p = "CLEAR_ACTIVE",
				y = "UPDATE_ACCOUNT_ACCESS",
				t = "UPDATE_LANGUAGE_PREFERENCE";
			let r = function(a) {
				return a.APIKEY = "APIKEY_CAPTCHA_CHALLENGE", a.APITOKEN = "APITOKEN_CAPTCHA_CHALLENGE", a.BILLING_PRE_VERIFICATION = "BILLING_PRE_CC_VERIFICATION_CAPTCHA_CHALLENGE", a.DELETE_USER = "DELETE_USER_CAPTCHA_CHALLENGE", a.EMAIL_ROLLBACK = "EMAIL_ROLLBACK_CAPTCHA_CHALLENGE", a.FORGOT_PASS = "FORGOT_PASS_CAPTCHA_CHALLENGE", a.LOGIN = "LOGIN_CAPTCHA_CHALLENGE", a.ORIGIN_CA_KEY = "ORIGIN_CA_KEY_CHALLENGE", a.SIGNUP = "SIGNUP_CAPTCHA_CHALLENGE", a
			}({})
		},
		"../react/common/actions/membershipActions.ts": function(G, _, n) {
			"use strict";
			n.d(_, {
				AX: function() {
					return a
				},
				YT: function() {
					return y
				},
				ct: function() {
					return d
				},
				d6: function() {
					return t
				},
				kt: function() {
					return r
				}
			});
			var e = n("../react/app/redux/makeActionCreator.ts"),
				o = n("../react/common/constants/index.ts");

			function c(l) {
				for (var i = 1; i < arguments.length; i++) {
					var u = arguments[i] != null ? Object(arguments[i]) : {},
						E = Object.keys(u);
					typeof Object.getOwnPropertySymbols == "function" && E.push.apply(E, Object.getOwnPropertySymbols(u).filter(function(A) {
						return Object.getOwnPropertyDescriptor(u, A).enumerable
					})), E.forEach(function(A) {
						f(l, A, u[A])
					})
				}
				return l
			}

			function f(l, i, u) {
				return i = s(i), i in l ? Object.defineProperty(l, i, {
					value: u,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : l[i] = u, l
			}

			function s(l) {
				var i = g(l, "string");
				return typeof i == "symbol" ? i : String(i)
			}

			function g(l, i) {
				if (typeof l != "object" || l === null) return l;
				var u = l[Symbol.toPrimitive];
				if (u !== void 0) {
					var E = u.call(l, i || "default");
					if (typeof E != "object") return E;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (i === "string" ? String : Number)(l)
			}
			const d = l => {
					const i = l.payload.map(u => c({}, u, {
						membershipId: u.id,
						id: u.account.id
					}));
					return c({}, l, {
						payload: i
					})
				},
				p = l => {
					const i = d(l);
					return Array.isArray(i.payload) ? c({}, l, {
						payload: i.payload[0]
					}) : c({}, l, {
						payload: null
					})
				},
				y = (0, e.C)("memberships").get`/memberships?no-permissions=1`.on("success", d),
				t = (0, e.C)("memberships").delete`/memberships/${"id"}`,
				r = (...l) => ({
					type: o.UM.MEMBERSHIPS_ROOT_REQUESTED,
					entityType: "filteredMemberships",
					url: "/memberships?no-permissions=1",
					params: l
				}),
				a = (0, e.C)("membership").get`/memberships?no-permissions=1`.on("success", p)
		},
		"../react/common/actions/modalActions.ts": function(G, _, n) {
			"use strict";
			n.r(_), n.d(_, {
				closeModal: function() {
					return f
				},
				openModal: function() {
					return c
				}
			});
			var e = n("../react/common/actionTypes.ts");
			const o = {
				replace: !0
			};

			function c(s, g, d = o) {
				return {
					type: e.Np,
					payload: {
						ModalComponent: s,
						props: g
					},
					options: d
				}
			}

			function f(s) {
				return {
					type: e.gM,
					payload: {
						ModalComponent: s
					}
				}
			}
		},
		"../react/common/actions/notificationsActions.ts": function(G, _, n) {
			"use strict";
			n.d(_, {
				IH: function() {
					return s
				},
				Vp: function() {
					return g
				},
				ZK: function() {
					return p
				},
				um: function() {
					return d
				},
				vU: function() {
					return y
				}
			});
			var e = n("../react/common/actionTypes.ts");

			function o(t) {
				return {
					type: e.Ng,
					notification: t
				}
			}

			function c(t) {
				return {
					type: e.Cz,
					notificationId: t
				}
			}
			let f = 0;

			function s(t, r, a = {}) {
				return a = a || {},
					function(l) {
						let i = f++,
							u = {
								id: i,
								type: t,
								message: r,
								delay: a.delay,
								persist: a.persist === void 0 ? !1 : a.persist,
								closable: a.closable === void 0 ? !0 : a.closable,
								onClose() {
									l(c(i)), a.onClose && a.onClose.apply(null, arguments)
								}
							};
						l(o(u))
					}
			}

			function g(t, r) {
				return s("success", t, r)
			}

			function d(t, r) {
				return s("info", t, r)
			}

			function p(t, r) {
				return s("warning", t, r)
			}

			function y(t, r) {
				return s("error", t, r)
			}
		},
		"../react/common/actions/userActions.ts": function(G, _, n) {
			"use strict";
			n.d(_, {
				BT: function() {
					return d
				},
				Ut: function() {
					return A
				},
				V_: function() {
					return v
				},
				Y9: function() {
					return u
				},
				Z0: function() {
					return S
				},
				mp: function() {
					return E
				},
				r3: function() {
					return C
				},
				x0: function() {
					return t
				}
			});
			var e = n("../react/app/redux/makeActionCreator.ts"),
				o = n("../react/app/redux/utils.ts");

			function c(T) {
				for (var h = 1; h < arguments.length; h++) {
					var I = arguments[h] != null ? Object(arguments[h]) : {},
						F = Object.keys(I);
					typeof Object.getOwnPropertySymbols == "function" && F.push.apply(F, Object.getOwnPropertySymbols(I).filter(function(M) {
						return Object.getOwnPropertyDescriptor(I, M).enumerable
					})), F.forEach(function(M) {
						f(T, M, I[M])
					})
				}
				return T
			}

			function f(T, h, I) {
				return h = s(h), h in T ? Object.defineProperty(T, h, {
					value: I,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : T[h] = I, T
			}

			function s(T) {
				var h = g(T, "string");
				return typeof h == "symbol" ? h : String(h)
			}

			function g(T, h) {
				if (typeof T != "object" || T === null) return T;
				var I = T[Symbol.toPrimitive];
				if (I !== void 0) {
					var F = I.call(T, h || "default");
					if (typeof F != "object") return F;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (h === "string" ? String : Number)(T)
			}
			const d = (0, e.C)("user").get`/user`,
				p = (0, e.C)("user").patch`/user`,
				y = (0, e.C)("user").post`/user/create`,
				t = (0, e.C)("user").put`/user/password`,
				r = (0, e.C)("user").post`/user/two_factor_authentication`,
				a = (0, e.C)("user").put`/user/two_factor_authentication`,
				l = (0, e.C)("user").delete`/user/two_factor_authentication`,
				i = (0, e.C)("user").put`/user/email`;

			function u(...T) {
				return i(...T)
			}
			const E = (0, e.C)("userCommPreferences").get`/user/communication_preferences`,
				A = (0, e.C)("userCommPreferences").get`/user/communication_preferences`.apiFetch((0, o._)(T => c({}, T, {
					body: c({}, T.body, {
						result: {}
					})
				}))),
				v = (0, e.C)("userCommPreferences").put`/user/communication_preferences`,
				C = (0, e.C)("userDetails").get`/user/details`,
				S = (0, e.C)("userDetails").get`/user/details/two-factor-recovery`
		},
		"../react/common/components/AccessControl/SAAConnect.js": function(G, _, n) {
			"use strict";
			n.d(_, {
				a: function() {
					return f
				}
			});
			var e = n("webpack/sharing/consume/default/react-redux/react-redux"),
				o = n.n(e),
				c = n("../react/common/selectors/accountSelectors.ts");
			const f = g => {
					if (typeof g != "string") throw new Error("invalid Param Type provided");
					const d = g.slice(1).split(":");
					if (d.length !== 2) throw new Error("invalid Param Type provided");
					return {
						key: d[0],
						value: d[1]
					}
				},
				s = (g, d) => {
					const {
						resourceId: p,
						accountId: y,
						legacyPermission: t
					} = d;
					let {
						read: r,
						edit: a
					} = d;
					const l = {};
					t && (a = `#${t}:edit`, r = `#${t}:read`);
					const i = p || y;
					if (r) {
						const u = Array.isArray(r) ? r : [r];
						l.isReadable = u.some(E => {
							const A = f(E);
							return (0, c.DT)(g, i, v => !!(v[A.key] && v[A.key][A.value]))
						})
					}
					if (a) {
						const u = Array.isArray(a) ? a : [a];
						l.isEditable = u.some(E => {
							const A = f(E);
							return (0, c.DT)(g, i, v => !!(v[A.key] && v[A.key][A.value]))
						})
					}
					return l
				};
			_.Z = (0, e.connect)(s)
		},
		"../react/common/components/AccessControl/index.js": function(G, _, n) {
			"use strict";
			var e = n("../../../../node_modules/prop-types/index.js"),
				o = n.n(e),
				c = n("../react/app/HoCs/withEntities.tsx"),
				f = n("../react/common/components/AccessControl/SAAConnect.js");

			function s(r) {
				for (var a = 1; a < arguments.length; a++) {
					var l = arguments[a] != null ? Object(arguments[a]) : {},
						i = Object.keys(l);
					typeof Object.getOwnPropertySymbols == "function" && i.push.apply(i, Object.getOwnPropertySymbols(l).filter(function(u) {
						return Object.getOwnPropertyDescriptor(l, u).enumerable
					})), i.forEach(function(u) {
						g(r, u, l[u])
					})
				}
				return r
			}

			function g(r, a, l) {
				return a = d(a), a in r ? Object.defineProperty(r, a, {
					value: l,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : r[a] = l, r
			}

			function d(r) {
				var a = p(r, "string");
				return typeof a == "symbol" ? a : String(a)
			}

			function p(r, a) {
				if (typeof r != "object" || r === null) return r;
				var l = r[Symbol.toPrimitive];
				if (l !== void 0) {
					var i = l.call(r, a || "default");
					if (typeof i != "object") return i;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (a === "string" ? String : Number)(r)
			}

			function y(r) {
				const l = ["isReadable", "isEditable"].reduce((i, u) => r.hasOwnProperty(u) ? s({}, i, {
					[u]: r[u]
				}) : i, {});
				return r.children(l)
			}
			y.propTypes = {
				resourceType: o().string,
				resourceId: o().string,
				read: o().oneOfType([o().string, o().array]),
				edit: o().oneOfType([o().string, o().array]),
				accountId: o().string,
				isReadable: o().bool,
				isEditable: o().bool,
				children: o().func
			};
			const t = (0, c.Z)((0, f.Z)(y));
			t.displayName = "AccessControl", _.Z = t
		},
		"../react/common/components/Apple/utils.tsx": function(G, _, n) {
			"use strict";
			n.d(_, {
				PP: function() {
					return r
				},
				RJ: function() {
					return d
				},
				tz: function() {
					return a
				}
			});
			var e = n("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				o = n.n(e),
				c = n("../../../../node_modules/@cloudflare/util-cache/es/index.js"),
				f = n("../react/pages/onboarding/components/AppleLogin/constants.ts"),
				s = n("../../../../node_modules/@cloudflare/style-const/es/index.js");
			const g = () => p.test(window.location.pathname) || c.E.has(f.Qq),
				d = () => c.E.get(f.Qq),
				p = /^\/login\/apple(\/)?/,
				t = [p, /^\/[a-zA-Z0-9]+\/domains\/register\/checkout$/, /^\/$/, /^\/email-verification-info(\/)?/],
				r = () => {
					let l = !1;
					t.forEach(u => {
						if (u.test(window.location.pathname)) {
							l = !0;
							return
						}
					});
					const i = g() && l;
					return i && (0, s.C8)(s.LF.OFF), i
				},
				a = l => {
					l && o().sendEvent("launch icloud registrar onboarding", {
						category: "icloud registrar",
						method: "iCloud SSO"
					});
					let i = "https://oidc.iam.cfapi.net/api/v1/sso/init?client=apple&env=production";
					l && (i = i + `&jwt=${l}`), window.location.href = i
				}
		},
		"../react/common/components/ButtonWithDropdown.tsx": function(G, _, n) {
			"use strict";
			n.d(_, {
				oG: function() {
					return l
				},
				sN: function() {
					return d.sN
				},
				v2: function() {
					return d.v2
				}
			});
			var e = n("webpack/sharing/consume/default/react/react"),
				o = n.n(e),
				c = n("../node_modules/@cloudflare/component-button/es/index.js"),
				f = n("../../../../node_modules/@cloudflare/component-icon/es/index.js"),
				s = n("../../../common/intl/intl-react/src/index.ts"),
				g = n("../../../../node_modules/@cloudflare/style-container/es/index.js"),
				d = n("../react/common/components/Dropdown/index.tsx"),
				p = n("../../../../node_modules/@cloudflare/style-const/es/index.js");

			function y() {
				return y = Object.assign ? Object.assign.bind() : function(i) {
					for (var u = 1; u < arguments.length; u++) {
						var E = arguments[u];
						for (var A in E) Object.prototype.hasOwnProperty.call(E, A) && (i[A] = E[A])
					}
					return i
				}, y.apply(this, arguments)
			}

			function t(i, u) {
				if (i == null) return {};
				var E = r(i, u),
					A, v;
				if (Object.getOwnPropertySymbols) {
					var C = Object.getOwnPropertySymbols(i);
					for (v = 0; v < C.length; v++) A = C[v], !(u.indexOf(A) >= 0) && (!Object.prototype.propertyIsEnumerable.call(i, A) || (E[A] = i[A]))
				}
				return E
			}

			function r(i, u) {
				if (i == null) return {};
				var E = {},
					A = Object.keys(i),
					v, C;
				for (C = 0; C < A.length; C++) v = A[C], !(u.indexOf(v) >= 0) && (E[v] = i[v]);
				return E
			}
			const a = (0, g.createStyledComponent)(({
				theme: i
			}) => ({
				display: "inline-flex",
				"& > button:first-child": {
					borderRadius: `${i.radii[2]}px 0 0 ${i.radii[2]}px`,
					borderRight: `1px solid ${i.colors.gray[8]}`
				},
				"& > :last-child": {
					display: "flex"
				},
				"& > :last-child > button": {
					borderRadius: `0 ${i.radii[2]}px ${i.radii[2]}px 0`,
					paddingRight: i.space[2],
					paddingLeft: i.space[2]
				},
				"& button": {
					color: (0, p.Yc)() ? i.colors.text : void 0
				},
				"& button:hover": {
					color: (0, p.Yc)() ? i.colors.text : void 0
				}
			}));

			function l(i) {
				let {
					menu: u,
					containerProps: E,
					disabled: A,
					disabledDropdown: v = A
				} = i, C = t(i, ["menu", "containerProps", "disabled", "disabledDropdown"]);
				const {
					t: S
				} = (0, s.QT)();
				return o().createElement(a, y({}, E, {
					role: "group"
				}), o().createElement(c.zx, y({}, C, {
					disabled: A
				})), o().createElement(d.Lt, {
					trigger: o().createElement(c.zx, {
						type: C.type,
						"aria-haspopup": "menu",
						disabled: v
					}, o().createElement(f.J, {
						type: "caret-down",
						label: S("common.more"),
						size: 12
					})),
					menu: u
				}))
			}
		},
		"../react/common/components/EmptyPage.jsx": function(G, _, n) {
			"use strict";
			var e = n("webpack/sharing/consume/default/react/react"),
				o = n.n(e),
				c = n("../../../../node_modules/prop-types/index.js"),
				f = n.n(c),
				s = n("../../../../node_modules/@cloudflare/component-box/es/index.js");
			const g = ({
				children: d
			}) => o().createElement(s.xu, {
				height: 411
			}, d);
			g.propTypes = {
				children: f().node
			}, _.Z = g
		},
		"../react/common/components/ModalManager.tsx": function(G, _, n) {
			"use strict";
			n.d(_, {
				ZP: function() {
					return i
				},
				dd: function() {
					return a
				},
				vR: function() {
					return r
				}
			});
			var e = n("webpack/sharing/consume/default/react/react"),
				o = n.n(e),
				c = n("webpack/sharing/consume/default/react-redux/react-redux");
			const f = u => u.application.modals;
			var s = n("../react/common/actions/modalActions.ts"),
				g = n("../../../../node_modules/swr/core/dist/index.mjs"),
				d = n("../react/pages/zoneless-workers/utils/swrConfig.ts");

			function p() {
				return p = Object.assign ? Object.assign.bind() : function(u) {
					for (var E = 1; E < arguments.length; E++) {
						var A = arguments[E];
						for (var v in A) Object.prototype.hasOwnProperty.call(A, v) && (u[v] = A[v])
					}
					return u
				}, p.apply(this, arguments)
			}
			const y = o().createContext(null);
			class t extends o().Component {
				render() {
					const {
						modals: E,
						closeModal: A
					} = this.props;
					return o().createElement(o().Fragment, null, E.map(({
						ModalComponent: v,
						props: C = {},
						id: S
					}) => {
						const T = () => {
							typeof C.onClose == "function" && C.onClose(), A(v)
						};
						return o().createElement(y.Provider, {
							key: S,
							value: {
								closeModal: T
							}
						}, o().createElement(g.J$, {
							value: d.ZP
						}, o().createElement(v, p({}, C, {
							isOpen: !0,
							closeModal: T
						}))))
					}))
				}
			}

			function r() {
				const u = o().useContext(y);
				if (!u) throw new Error("useModalContext must be used within a ModalContext");
				return u
			}

			function a() {
				const u = (0, c.useDispatch)();
				return {
					openModal: (0, e.useCallback)(function(...E) {
						return u(s.openModal(...E))
					}, [u]),
					closeModal: (0, e.useCallback)(function(...E) {
						return u(s.closeModal(...E))
					}, [u])
				}
			}
			var i = (0, c.connect)(u => ({
				modals: f(u)
			}), s)(t)
		},
		"../react/common/components/analytics/AnalyticsReport/constants.ts": function(G, _, n) {
			"use strict";
			n.d(_, {
				BQ: function() {
					return t
				},
				Gn: function() {
					return p
				},
				JR: function() {
					return y
				},
				Wl: function() {
					return e
				},
				YX: function() {
					return g
				},
				ZI: function() {
					return s
				},
				if: function() {
					return o
				},
				q6: function() {
					return c
				},
				w_: function() {
					return f
				},
				zl: function() {
					return d
				}
			});
			const e = "YYYY.MM.DD-HHmm",
				o = "time-window",
				c = "date-from",
				f = "date-to",
				s = "from",
				g = "to",
				d = "all",
				p = {
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
			let y = function(r) {
					return r.ADD_FILTER = "Add filter", r.EDIT_FILTER = "Edit filter", r.REMOVE_FILTER = "Remove filter", r.CHANGE_TIME = "Change time window", r.FEED_PAGE_FORWARD = "Activity feed next page", r.FEED_PAGE_BACKWARD = "Activity feed previous page", r.FEED_EXPAND_EVENT = "Activity feed expand event", r.FEED_CLOSE_EVENT = "Activity feed close event", r.FEED_EXPAND_MATCHES = "Activity feed expand matches", r.OPEN_DOWNLOAD_MODAL = "Activity feed open download modal", r.CANCEL_DOWNLOAD_MODAL = "Activity feed cancel download modal", r.DOWNLOAD_FROM_DOWNLOAD_MODAL = "Activity feed download from modal", r.DOWNLOAD_FEED = "Activity feed download", r.CLICK_ADAPTIVE_SAMPLING = 'Click on "adaptive sampling"', r.CLICK_TO_LOG_EXPLORER_DESCRIPTION = 'Click on "Go to Log Explorer" in the description', r.CLICK_TO_LOG_EXPLORER_BANNER = 'Click on "Go to Log Explorer" in the banner"', r.CLICK_SWITCH_TO_RAW_LOGS = 'Click on "Switch to raw logs"', r.CLICK_SWITCH_TO_SAMPLED_LOGS = 'Click on "Switch back to sampled logs"', r
				}({}),
				t = function(r) {
					return r.TIMESERIES = "Timeseries Chart", r.DISTRIBUTION = "Source Distribution Chart", r.TOP_N = "Top N", r.FILTER_BAR = "Filter Bar", r.SCORES_DISTRIBUTIONS = "Scores Distributions", r.INSIGHTS = "Insights", r.RL_HISTOGRAM = "Rate Limit Histogram", r
				}({})
		},
		"../react/common/constants/analytics/botScoreSrc.ts": function(G, _, n) {
			"use strict";
			n.d(_, {
				EG: function() {
					return c
				},
				Me: function() {
					return s
				},
				sk: function() {
					return f
				}
			});
			var e = n("../../../common/component/component-filter-bar/src/index.js"),
				o = n("../react/common/components/analytics/AnalyticsReport/constants.ts");
			let c = function(g) {
				return g.NOT_COMPUTED = "not_computed", g.MACHINE_LEARNING = "machine_learning", g.HEURISTICS = "heuristics", g.BEHAVIORAL_ANALYSIS = "behavioral_analysis", g.JS_FINGERPRINTING = "js_fingerprinting", g.VERIFIED_BOT = "verified_bot", g.CLOUDFLARE_SERVICE = "cloudflare_service", g
			}({});
			const f = {
					[c.NOT_COMPUTED]: "Not Computed",
					[c.MACHINE_LEARNING]: "Machine Learning",
					[c.HEURISTICS]: "Heuristics",
					[c.BEHAVIORAL_ANALYSIS]: "Behavioral Analysis",
					[c.JS_FINGERPRINTING]: "JS Fingerprinting",
					[c.VERIFIED_BOT]: "Verified Bot",
					[c.CLOUDFLARE_SERVICE]: "Cloudflare Service"
				},
				s = {
					label: "analytics.http.filters.labels.botScoreSrcName",
					type: e.kE.select,
					operators: [o.Gn.equals, o.Gn.notEquals, o.Gn.in, o.Gn.notIn],
					options: [c.NOT_COMPUTED, c.MACHINE_LEARNING, c.HEURISTICS, c.BEHAVIORAL_ANALYSIS, c.JS_FINGERPRINTING, c.VERIFIED_BOT, c.CLOUDFLARE_SERVICE],
					urlParam: "bot-score-source",
					rawLogField: "BotScoreSrc"
				}
		},
		"../react/common/constants/billing/index.ts": function(G, _, n) {
			"use strict";
			n.d(_, {
				Gq: function() {
					return f
				},
				g$: function() {
					return c
				},
				WX: function() {
					return e
				},
				E0: function() {
					return y
				},
				Hw: function() {
					return g
				},
				Ed: function() {
					return s
				},
				bi: function() {
					return o
				},
				Gs: function() {
					return l
				},
				hQ: function() {
					return d
				},
				SP: function() {
					return p
				}
			});
			let e = function(i) {
				return i.page_rules = "page_rules", i.automatic_platform_optimization = "automatic_platform_optimization", i
			}({});
			const o = "page_rules",
				c = "automatic_platform_optimization",
				f = {
					price: 5,
					currency: "USD",
					frequency: "monthly",
					requests_included: 0,
					volume_included: 1,
					ubb_frequency: 1,
					ubb_price: .1,
					ubb_unit: "gigabyte"
				},
				s = {
					address: "Address Line 1 NA",
					city: "City NA",
					state: "State NA",
					vat: " ",
					account_type: "-"
				},
				g = {
					currency: "USD",
					frequency: "monthly",
					requests_included: 5e5,
					ubb_price: .5,
					ubb_frequency: 5e5
				},
				d = {
					price: 0,
					currency: "USD",
					frequency: "monthly",
					requests_included: 1e4,
					ubb_frequency: 1e4,
					ubb_price: .05
				},
				p = {
					price: 0,
					currency: "USD",
					frequency: "monthly",
					requests_included: 0,
					ubb_frequency: 1e3,
					ubb_storage_price: 5,
					ubb_streaming_price: 1,
					ubb_unit: "minute"
				},
				y = {
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
			var t = n("../react/common/constants/billing/tax.ts"),
				r = n("../react/common/constants/billing/tracking.ts"),
				a = n("../react/common/constants/billing/workers.ts");
			const l = ["free", "lite", "pro", "pro_plus", "business", "enterprise"]
		},
		"../react/common/constants/billing/tracking.ts": function(G, _, n) {
			"use strict";
			n.d(_, {
				FP: function() {
					return e
				},
				Nl: function() {
					return s
				},
				SO: function() {
					return c
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
				c = {
					BILLING: "billing"
				},
				f = {
					LINK: "link",
					EMAIL: "email",
					PHONE: "phone"
				},
				s = {
					BILLING_SYSTEM_UPGRADE: "Billing System Upgrade"
				}
		},
		"../react/common/constants/constants.ts": function(G, _, n) {
			"use strict";
			n.d(_, {
				Dk: function() {
					return l
				},
				Dy: function() {
					return i
				},
				E_: function() {
					return g
				},
				K$: function() {
					return v
				},
				Lv: function() {
					return u
				},
				S4: function() {
					return s
				},
				UM: function() {
					return t
				},
				Xf: function() {
					return y
				},
				Y1: function() {
					return d
				},
				p6: function() {
					return p
				},
				q0: function() {
					return f
				},
				rg: function() {
					return E
				},
				sJ: function() {
					return a
				}
			});
			var e = n("../../../../node_modules/seamless-immutable/seamless-immutable.production.min.js"),
				o = n.n(e),
				c = n("../../../../node_modules/@cloudflare/util-cache/es/index.js");
			const f = "healthy",
				s = "degraded",
				g = "critical",
				d = "unknown",
				p = "not-monitored",
				y = o().from({
					FREE: "free",
					PRO: "pro",
					BIZ: "business",
					ENT: "enterprise"
				}),
				t = {
					ZONES_ROOT_REQUESTED: "zones_root_requested",
					ZONES_ACCOUNT_REQUESTED: "zones_account_requested",
					ZONES_HEADER_REQUESTED: "zones_header_requested",
					MEMBERSHIPS_ROOT_REQUESTED: "membership_root_requested",
					ACCOUNT_MEMBERS_REQUESTED: "account_members_requested"
				},
				r = {
					f: y.FREE,
					p: y.PRO,
					b: y.BIZ
				},
				a = "marketing-pt",
				l = () => {
					const C = c.Z.get(a);
					if (!!C) return r[C]
				},
				i = ["gov"],
				u = ["graphql_api_v2.enabled_network_analytics_magic_transit", "graphql_api_v2.enabled_network_analytics_spectrum", "graphql_api_v2.enabled_network_analytics_cdn"],
				E = "banner-notification-interactions",
				A = null;
			let v = function(C) {
				return C.SUPER_ADMIN = "Super Administrator - All Privileges", C.ADMIN = "Administrator", C.ADMIN_READ_ONLY = "Administrator Read Only", C
			}({})
		},
		"../react/common/constants/index.ts": function(G, _, n) {
			"use strict";
			n.d(_, {
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
				K$: function() {
					return e.K$
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
			var e = n("../react/common/constants/constants.ts"),
				o = n("../react/common/constants/billing/index.ts")
		},
		"../react/common/hooks/suspenseHelpers.ts": function(G, _, n) {
			"use strict";
			n.d(_, {
				bt: function() {
					return d
				},
				nW: function() {
					return s
				}
			});
			var e = n("webpack/sharing/consume/default/react/react"),
				o = n.n(e),
				c = n("../../../../node_modules/@cloudflare/component-listener/es/index.js");
			const f = "suspenseComplete";

			function s() {
				(0, e.useEffect)(() => () => {
					window.dispatchEvent(new Event(f))
				}, [])
			}

			function g(p) {
				(0, c.OR)(f, () => {
					window.setTimeout(p, 0)
				}, {
					target: window
				})
			}

			function d(...p) {
				const [y, t] = p;
				o().useLayoutEffect(y, t), g(y)
			}
		},
		"../react/common/hooks/useAccountId.ts": function(G, _, n) {
			"use strict";
			n.d(_, {
				F: function() {
					return s
				}
			});
			var e = n("../react/app/redux/index.ts"),
				o = n("../react/common/selectors/accountSelectors.ts"),
				c = n("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				f = n.n(c);

			function s() {
				var g;
				const {
					accountId: d
				} = (0, c.useParams)(), p = (0, e.p4)(o.D0);
				if (d === void 0 && !p) throw new Error("Account ID not found in URL params");
				return (g = d) !== null && g !== void 0 ? g : p == null ? void 0 : p.id
			}
		},
		"../react/common/hooks/useCachedState.ts": function(G, _, n) {
			"use strict";
			n.d(_, {
				j: function() {
					return f
				}
			});
			var e = n("webpack/sharing/consume/default/react/react"),
				o = n.n(e),
				c = n("../../../../node_modules/@cloudflare/util-cache/es/index.js");

			function f(s, {
				key: g,
				cache: d = c.E,
				ttl: p
			} = {}) {
				var y;
				const t = g !== void 0 && d.get(g),
					[r, a] = (0, e.useState)((y = t) !== null && y !== void 0 ? y : s);
				return [r, i => {
					a(u => (i instanceof Function && (i = i(u)), g !== void 0 && d.set(g, i, p), i))
				}]
			}
		},
		"../react/common/hooks/usePrevious.ts": function(G, _, n) {
			"use strict";
			var e = n("webpack/sharing/consume/default/react/react"),
				o = n.n(e);

			function c(f) {
				const s = (0, e.useRef)(f);
				return (0, e.useEffect)(() => {
					s.current = f
				}, [f]), s.current
			}
			_.Z = c
		},
		"../react/common/hooks/useZoneEntitlement.ts": function(G, _, n) {
			"use strict";
			var e = n("../react/app/redux/index.ts"),
				o = n("../react/common/selectors/entitlementsSelectors.ts");

			function c(f) {
				return (0, e.p4)(s => (0, o.rV)(s, f))
			}
			_.Z = c
		},
		"../react/common/middleware/sparrow/errors.ts": function(G, _, n) {
			"use strict";
			n.d(_, {
				Uh: function() {
					return s
				},
				ez: function() {
					return f
				},
				oV: function() {
					return g
				}
			});

			function e(d, p, y) {
				return p = o(p), p in d ? Object.defineProperty(d, p, {
					value: y,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : d[p] = y, d
			}

			function o(d) {
				var p = c(d, "string");
				return typeof p == "symbol" ? p : String(p)
			}

			function c(d, p) {
				if (typeof d != "object" || d === null) return d;
				var y = d[Symbol.toPrimitive];
				if (y !== void 0) {
					var t = y.call(d, p || "default");
					if (typeof t != "object") return t;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (p === "string" ? String : Number)(d)
			}
			class f extends Error {
				constructor(p, y) {
					super(y);
					e(this, "eventName", void 0), this.eventName = p, this.name = "SparrowValidationError"
				}
			}
			class s extends f {
				constructor(p) {
					super(p, `Event not allowed: "${p}"`);
					this.name = "SparrowEventNotAllowedError"
				}
			}
			class g extends f {
				constructor(p, y) {
					super(p, `Found invalid properties on event: "${p}"`);
					e(this, "invalidProperties", void 0), this.name = "SparrowInvalidPropertiesError", this.invalidProperties = y
				}
			}
		},
		"../react/common/selectors/accountSelectors.ts": function(G, _, n) {
			"use strict";
			n.d(_, {
				AC: function() {
					return Je
				},
				Au: function() {
					return j
				},
				B: function() {
					return Ve
				},
				B3: function() {
					return Ye
				},
				BG: function() {
					return F
				},
				Bp: function() {
					return $e
				},
				D0: function() {
					return S
				},
				DT: function() {
					return H
				},
				EL: function() {
					return B
				},
				EU: function() {
					return X
				},
				GE: function() {
					return Oe
				},
				Ko: function() {
					return D
				},
				Kx: function() {
					return V
				},
				Le: function() {
					return R
				},
				O4: function() {
					return Ke
				},
				Ou: function() {
					return w
				},
				Py: function() {
					return Qe
				},
				QI: function() {
					return _e
				},
				RO: function() {
					return Fe
				},
				T3: function() {
					return Xe
				},
				T8: function() {
					return I
				},
				UX: function() {
					return ie
				},
				VP: function() {
					return ue
				},
				Xo: function() {
					return qe
				},
				Xu: function() {
					return ae
				},
				Yi: function() {
					return rt
				},
				Yj: function() {
					return L
				},
				Zu: function() {
					return P
				},
				bC: function() {
					return me
				},
				f8: function() {
					return Y
				},
				hI: function() {
					return at
				},
				hN: function() {
					return U
				},
				hX: function() {
					return Ge
				},
				iq: function() {
					return He
				},
				nE: function() {
					return M
				},
				oD: function() {
					return ee
				},
				oI: function() {
					return te
				},
				oJ: function() {
					return et
				},
				tM: function() {
					return K
				},
				uF: function() {
					return $
				},
				ut: function() {
					return ze
				},
				vU: function() {
					return Ee
				},
				wQ: function() {
					return W
				}
			});
			var e = n("../../../../node_modules/lodash-es/memoize.js"),
				o = n("../../../../node_modules/lodash/get.js"),
				c = n.n(o),
				f = n("../../../../node_modules/seamless-immutable/seamless-immutable.production.min.js"),
				s = n.n(f),
				g = n("../../../../node_modules/reselect/lib/index.js"),
				d = n("../../../../node_modules/moment/moment.js"),
				p = n.n(d),
				y = n("../react/common/utils/formatDate.ts"),
				t = n("../react/app/redux/normalizer.js"),
				r = n("../react/common/selectors/userSelectors.ts"),
				a = n("../react/common/selectors/entitlementsSelectors.ts"),
				l = n("../react/app/components/DeepLink/selectors.ts"),
				i = n("../react/common/constants/index.ts"),
				u = n("../react/common/utils/hasRole.ts");

			function E(k) {
				for (var q = 1; q < arguments.length; q++) {
					var pe = arguments[q] != null ? Object(arguments[q]) : {},
						ye = Object.keys(pe);
					typeof Object.getOwnPropertySymbols == "function" && ye.push.apply(ye, Object.getOwnPropertySymbols(pe).filter(function(Ae) {
						return Object.getOwnPropertyDescriptor(pe, Ae).enumerable
					})), ye.forEach(function(Ae) {
						A(k, Ae, pe[Ae])
					})
				}
				return k
			}

			function A(k, q, pe) {
				return q = v(q), q in k ? Object.defineProperty(k, q, {
					value: pe,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : k[q] = pe, k
			}

			function v(k) {
				var q = C(k, "string");
				return typeof q == "symbol" ? q : String(q)
			}

			function C(k, q) {
				if (typeof k != "object" || k === null) return k;
				var pe = k[Symbol.toPrimitive];
				if (pe !== void 0) {
					var ye = pe.call(k, q || "default");
					if (typeof ye != "object") return ye;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (q === "string" ? String : Number)(k)
			}
			const S = k => {
					const q = $(k);
					return q == null ? void 0 : q.account
				},
				T = k => {
					const q = (0, r.PR)(k);
					if (q) {
						const pe = q.id;
						return k.accountAccess[pe] || {}
					}
					return {}
				},
				h = k => k.accountsDetailed,
				I = (0, t.P1)("accountsDetailed", h),
				F = k => k.memberships,
				M = (0, g.P1)((0, t.P1)("memberships", F), l.U, (k, q) => !!q && !!k ? k.filter(pe => q.includes(pe.id)) : k),
				U = k => k.accountFlags && k.accountFlags.data,
				V = k => k.accountFlags,
				R = (k, q, pe) => {
					const ye = U(k);
					return !ye || !ye[q] ? null : ye[q][pe]
				},
				z = k => k.accountFlags.isRequesting,
				te = (k, ...q) => c()(k, ["accountFlagsChanges", "data", ...q]),
				Y = k => k.accountFlagsChanges.isRequesting,
				ce = (0, g.P1)(U, V, (k, q) => ({
					data: k,
					meta: q
				})),
				Q = (k, q, pe) => !!(isEnterpriseSSEnabledSelector(k) && R(k, q, pe)),
				ae = k => k.membership,
				$ = (0, t.P1)("membership", ae),
				x = (0, g.P1)($, ae, (k, q) => ({
					data: k,
					meta: q
				})),
				w = k => {
					const {
						roles: q = []
					} = $(k) || {};
					return Boolean(q.find(pe => pe === "Super Administrator - All Privileges" || pe === "Billing"))
				},
				K = k => {
					const q = [i.K$.SUPER_ADMIN];
					return (0, u.n)(k, q)
				},
				ee = k => {
					const q = T(k),
						pe = Se.getMemberships(k) ? s().asMutable(Se.getMemberships(k)) : [];
					if (!!pe) return s().from(pe.map(ye => E({}, ye, {
						lastSeen: q[ye.account.id] ? q[ye.account.id].lastSeen : null
					})).sort((ye, Ae) => ye.lastSeen && Ae.lastSeen ? Ae.lastSeen - ye.lastSeen : 0))
				},
				ie = k => k.filteredMemberships,
				B = (0, t.P1)("filteredMemberships", ie),
				P = (0, g.P1)($, k => k == null ? void 0 : k.permissions),
				L = (0, g.P1)(P, k => (0, e.Z)(q => {
					var pe;
					return (pe = k == null ? void 0 : k[q]) !== null && pe !== void 0 ? pe : {
						read: !1,
						edit: !1
					}
				})),
				D = (0, g.P1)($, k => k == null ? void 0 : k.policies),
				H = (k, q, pe) => {
					let ye = Se.getMembership(k);
					if (!ye) {
						const Ae = Se.getMemberships(k);
						if (!Ae || !q) return !1;
						ye = Ae.find(ke => ke.account.id === q)
					}
					if (!ye || !pe) return !1;
					try {
						return pe(ye.permissions)
					} catch {
						return !1
					}
				},
				J = k => {
					var q, pe;
					return (q = (pe = S(k)) === null || pe === void 0 ? void 0 : pe.meta.has_pro_zones) !== null && q !== void 0 ? q : !1
				},
				X = k => {
					var q, pe;
					return (q = (pe = S(k)) === null || pe === void 0 ? void 0 : pe.meta.has_business_zones) !== null && q !== void 0 ? q : !1
				},
				me = k => X(k) || J(k),
				Le = (k, q) => {
					const pe = Ie(k, q);
					return !!pe && !!pe.enabled
				},
				Ie = (k, q) => {
					const pe = Se.getMembership(k),
						ye = pe && pe.account;
					return ye && ye.legacy_flags && ye.legacy_flags[q]
				},
				W = k => Le(k, "custom_pages"),
				se = k => !!k && k["webhooks.webhooks.enabled"],
				be = k => R(k, "bots", "enabled"),
				je = k => R(k, "billing", "annual_subscriptions_enable"),
				Fe = k => k ? Boolean(R(k, "ConstellationAI", "v2_ui")) : !1,
				Ge = k => k ? Boolean(R(k, "ConstellationAI", "ai-emergency-waitlist")) : !1,
				Ve = k => k ? Boolean(R(k, "AIgateway", "enabled")) : !1,
				Ze = k => Ie(k, "enterprise_zone_quota"),
				st = k => {
					const q = Ze(k);
					return !q || !q.available ? -1 : q.available
				},
				He = k => k.accountMembers,
				Ye = (0, t.P1)("accountMembers", He),
				Ke = k => k.accountMember && k.accountMember.isRequesting,
				xe = k => k.accountRoles,
				Je = (0, t.P1)("accountRoles", xe),
				Qe = (k, q) => {
					const pe = Se.getMemberships(k),
						ye = pe && pe.find(tt => tt.account.id === q);
					if (ye) return ye.account.name.replace(" Account", " account");
					const Ae = Se.getMembership(k),
						ke = Ae && Ae.account;
					return ke && ke.id === q ? ke.name : null
				},
				ze = (k, q) => {
					const pe = Se.getMemberships(k),
						ye = pe && pe.find(tt => tt.account.id === q);
					if (ye) return ye.account.settings.access_approval_expiry;
					const Ae = Se.getMembership(k),
						ke = Ae && Ae.account;
					return ke && ke.id === q ? ke.settings.access_approval_expiry : null
				},
				qe = (k, q) => {
					const pe = ze(k, q);
					return pe ? p().utc(pe).isAfter() : !1
				},
				Xe = (k, q, pe) => {
					const ye = ze(k, q);
					let Ae = ye ? p().utc(ye) : null;
					return !Ae || !Ae.isAfter() ? "" : Ae && Ae.year() === 3e3 ? pe("account.access_approval.card_expiration_forever") : pe("account.access_approval.card_expiration_text", {
						expiryTimestamp: Ae.local().format(y.U.DateTime)
					})
				},
				et = k => k && k.member && k.member.edit,
				j = (k, q) => {
					const pe = Se.getMembership(k),
						ye = pe && pe.account;
					return ye ? ye.id !== q : !1
				},
				ne = k => k.dpa,
				ge = (0, t.P1)("dpa", ne),
				we = k => k.webhook,
				De = k => k.webhooks,
				le = (0, t.P1)("webhook", De),
				ue = k => k.accountLegoContract,
				fe = (0, t.P1)("accountLegoContract", ue),
				_e = k => {
					const q = fe(k);
					return (q == null ? void 0 : q.lego_state) ? q.lego_state : ""
				},
				Te = k => _e(k) === "signed",
				Oe = k => ue(k).isRequesting,
				Ee = k => {
					const q = fe(k);
					return q && q.subscription_type ? q.subscription_type : ""
				},
				Ne = k => Ee(k) !== "",
				Se = {
					getMembership: $,
					getMemberships: M,
					getFilteredMemberships: B,
					getAccountMembers: Ye,
					getAccountRoles: Je
				},
				$e = k => k.accountSingle,
				rt = (0, t.P1)("accountSingle", $e),
				at = k => {
					const q = [i.K$.SUPER_ADMIN, i.K$.ADMIN];
					return (0, u.n)(k, q)
				}
		},
		"../react/common/selectors/entitlementsSelectors.ts": function(G, _, n) {
			"use strict";
			n.d(_, {
				$f: function() {
					return i
				},
				AD: function() {
					return s
				},
				BF: function() {
					return l
				},
				Bs: function() {
					return S
				},
				Ci: function() {
					return P
				},
				E6: function() {
					return a
				},
				Hq: function() {
					return Ie
				},
				Ms: function() {
					return I
				},
				Q2: function() {
					return g
				},
				Td: function() {
					return v
				},
				Z: function() {
					return H
				},
				a: function() {
					return C
				},
				a5: function() {
					return X
				},
				du: function() {
					return p
				},
				ec: function() {
					return Y
				},
				f: function() {
					return Le
				},
				hL: function() {
					return J
				},
				ji: function() {
					return L
				},
				jo: function() {
					return F
				},
				k4: function() {
					return me
				},
				lI: function() {
					return f
				},
				p1: function() {
					return E
				},
				pf: function() {
					return t
				},
				qR: function() {
					return A
				},
				rV: function() {
					return d
				},
				u1: function() {
					return y
				},
				w4: function() {
					return r
				},
				yD: function() {
					return D
				}
			});
			var e = n("../react/utils/url.ts");

			function o(W, se) {
				return W && W[se]
			}
			const c = W => !f(W).isRequesting;

			function f(W) {
				return W.entitlements.zone
			}

			function s(W) {
				return f(W).data
			}
			const g = W => {
				var se, be;
				return ((se = f(W).paginationData) === null || se === void 0 || (be = se.options) === null || be === void 0 ? void 0 : be.editedDate) || {}
			};

			function d(W, se) {
				const be = s(W);
				return be ? o(be, se) : void 0
			}
			const p = (W, se) => d(W, se) === !0;

			function y(W) {
				return W.entitlements.account
			}

			function t(W) {
				return y(W).data
			}
			const r = W => {
				var se, be;
				return ((se = y(W).paginationData) === null || se === void 0 || (be = se.options) === null || be === void 0 ? void 0 : be.editedDate) || {}
			};

			function a(W) {
				return !y(W).isRequesting
			}

			function l(W, se) {
				const be = t(W);
				return be ? o(be, se) : void 0
			}

			function i(W, se) {
				return l(W, se) === !0
			}

			function u(W, se) {
				return se.every(be => i(W, be))
			}

			function E(W) {
				return i(W, "contract.customer_enabled")
			}

			function A(W) {
				return i(W, "contract.self_service_allowed")
			}

			function v(W) {
				return i(W, "billing.partners_managed")
			}
			const C = W => E(W) && A(W),
				S = W => i(W, "enterprise.ecp_allowed");

			function T(W) {
				return h(W) || i(W, "argo.allow_smart_routing") || i(W, "argo.allow_tiered_caching") || i(W, "rate_limiting.enabled") || i(W, "ctm.enabled") || i(W, "workers.enabled") || i(W, "workers.kv_store.enabled") || i(W, "stream.enabled")
			}
			const h = W => p(W, "argo.allow_smart_routing") || p(W, "argo.allow_tiered_caching"),
				I = W => i(W, "zone.cname_setup_allowed") || i(W, "zone.partial_setup_allowed") || p(W, "zone.partial_setup_allowed"),
				F = W => i(W, "argo.allow_smart_routing") || p(W, "argo.allow_smart_routing"),
				M = W => i(W, "argo.allow_tiered_caching") || p(W, "argo.allow_tiered_caching"),
				U = W => F(W) || M(W),
				V = W => i(W, "ctm.enabled"),
				R = W => {
					const se = l(W, "ctm.load_balancers");
					return typeof se == "number" ? se : 0
				},
				z = W => {
					const se = l(W, "ctm.pools");
					return typeof se == "number" ? se : 0
				},
				te = W => {
					const se = l(W, "ctm.origins");
					return typeof se == "number" ? se : 0
				},
				Y = W => i(W, "workers.enabled"),
				ce = W => i(W, "stream.enabled"),
				Q = W => {
					const se = l(W, "access.users_allowed");
					return typeof se == "number" ? se : 0
				},
				ae = W => Q(W) > 0,
				$ = W => {
					const se = d(W, "dedicated_certificates");
					return typeof se == "number" ? se : 0
				},
				x = W => $(W) > 0,
				w = W => {
					const se = d(W, "rate_limiting.max_rules");
					return typeof se == "number" ? se : 0
				},
				K = W => i(W, "rate_limiting.enabled"),
				ee = W => {
					const se = d(W, "page_rules");
					return typeof se == "number" ? se : 0
				},
				ie = W => ee(W) > 0,
				B = W => {
					const se = l(W, "dns_firewall.max_clusters_allowed");
					return typeof se == "number" ? se : 0
				},
				P = W => B(W) > 0,
				L = W => p(W, "zone.advanced_certificate_manager") || i(W, "zone.advanced_certificate_manager"),
				D = W => d(W, "authoritative_dns.proxy_record_allowed") === !1 || l(W, "authoritative_dns.proxy_record_allowed") === !1,
				H = W => i(W, "authoritative_dns.outgoing_zone_transfers_allowed") === !0,
				J = W => d(W, "authoritative_dns.outgoing_zone_transfers_allowed") === !0,
				X = W => {
					const se = d(W, "authoritative_dns.min_record_ttl_allowed");
					return typeof se == "number" && se > 1 ? se : 60
				},
				me = W => i(W, "foundation_dns.advanced_nameservers_allowed") || p(W, "foundation_dns.advanced_nameservers_allowed"),
				Le = (W, se) => ((0, e.el)(window.location.pathname) ? d : l)(W, se),
				Ie = W => i(W, "authoritative_dns.multi_provider_allowed") || p(W, "authoritative_dns.multi_provider_allowed")
		},
		"../react/common/selectors/languagePreferenceSelector.ts": function(G, _, n) {
			"use strict";
			n.d(_, {
				r: function() {
					return c
				},
				v: function() {
					return f
				}
			});
			var e = n("../react/utils/i18n.ts"),
				o = n("../../../common/intl/intl-types/src/index.ts");
			const c = s => {
				const g = s.userCommPreferences.data;
				if (g == null ? void 0 : g["language-locale"]) return (0, e.i_)(g["language-locale"]), g["language-locale"];
				{
					(0, e.Kd)() || (0, e.i_)(e.ZW);
					const d = (0, e.Kd)();
					return f(d) ? d : e.ZW
				}
			};

			function f(s) {
				const g = Object.keys(o.Q).find(d => o.Q[d] === s);
				return !!s && typeof s == "string" && g != null && (0, e.S8)(g)
			}
		},
		"../react/common/selectors/userSelectors.ts": function(G, _, n) {
			"use strict";
			n.d(_, {
				$8: function() {
					return s
				},
				BG: function() {
					return y
				},
				BY: function() {
					return C
				},
				GP: function() {
					return i
				},
				GU: function() {
					return S
				},
				PR: function() {
					return c
				},
				h$: function() {
					return A
				},
				h8: function() {
					return t
				},
				kk: function() {
					return E
				},
				l8: function() {
					return d
				},
				mV: function() {
					return u
				},
				vW: function() {
					return g
				}
			});
			var e = n("../react/app/redux/normalizer.js");
			const o = T => T.user,
				c = (0, e.P1)("user", o),
				f = T => {
					var h;
					return (h = c(T)) === null || h === void 0 ? void 0 : h.email.endsWith("@cloudflare.com")
				},
				s = T => {
					var h;
					return !!((h = c(T)) === null || h === void 0 ? void 0 : h.id)
				},
				g = T => {
					const h = c(T);
					if (!!h) return h.first_name && h.last_name ? `${h.first_name} ${h.last_name}` : h.email
				},
				d = T => {
					const h = c(T);
					return h && h.has_enterprise_zones
				},
				p = T => T.userCommPreferences,
				y = (0, e.P1)("userCommPreferences", p),
				t = T => {
					const h = c(T);
					return h && h.email_verified
				},
				r = T => {
					const h = y(T);
					return h && h.preferences.marketing_communication
				},
				a = T => T.userDetails,
				l = (0, e.P1)("userDetails", a),
				i = T => {
					const h = l(T);
					return h && h["2FA-RECOVERY"] === "scheduled"
				},
				u = T => {
					const h = l(T);
					return h && h["2FA-RECOVERY"] === "interrupted"
				},
				E = T => {
					const h = l(T);
					return h == null ? void 0 : h["NEW-USER-EMAIL"]
				},
				A = T => T.gates.assignments,
				v = (T, h) => T && T[h];

			function C(T, h) {
				const I = A(T);
				return I ? v(I, h) : void 0
			}
			const S = (T, h) => C(T, h) === !0
		},
		"../react/common/selectors/zoneSelectors.ts": function(G, _, n) {
			"use strict";
			n.d(_, {
				$4: function() {
					return I
				},
				$t: function() {
					return Qe
				},
				A4: function() {
					return E
				},
				Cu: function() {
					return A
				},
				DQ: function() {
					return Le
				},
				Ej: function() {
					return M
				},
				FH: function() {
					return C
				},
				ID: function() {
					return K
				},
				Ko: function() {
					return Ge
				},
				Le: function() {
					return se
				},
				Ly: function() {
					return P
				},
				M3: function() {
					return Ye
				},
				N8: function() {
					return He
				},
				NY: function() {
					return J
				},
				Ns: function() {
					return ie
				},
				Ox: function() {
					return Xe
				},
				P4: function() {
					return U
				},
				RO: function() {
					return x
				},
				SX: function() {
					return X
				},
				Tr: function() {
					return Fe
				},
				U: function() {
					return v
				},
				Ug: function() {
					return T
				},
				V6: function() {
					return Ke
				},
				WR: function() {
					return et
				},
				Xg: function() {
					return u
				},
				ZB: function() {
					return W
				},
				_y: function() {
					return ee
				},
				cU: function() {
					return Ve
				},
				cg: function() {
					return me
				},
				d2: function() {
					return ce
				},
				il: function() {
					return B
				},
				jN: function() {
					return R
				},
				jg: function() {
					return D
				},
				kC: function() {
					return F
				},
				kf: function() {
					return xe
				},
				ko: function() {
					return $
				},
				mK: function() {
					return ze
				},
				nA: function() {
					return i
				},
				oY: function() {
					return V
				},
				qM: function() {
					return be
				},
				rq: function() {
					return H
				},
				tS: function() {
					return h
				},
				tU: function() {
					return te
				},
				vB: function() {
					return qe
				},
				vM: function() {
					return z
				},
				wH: function() {
					return S
				},
				wn: function() {
					return Ie
				},
				xU: function() {
					return Y
				},
				xw: function() {
					return je
				},
				z5: function() {
					return w
				},
				zO: function() {
					return Ze
				},
				zW: function() {
					return Je
				},
				zh: function() {
					return Q
				}
			});
			var e = n("../../../../node_modules/reselect/lib/index.js"),
				o = n("../react/app/redux/normalizer.js"),
				c = n("../../../../node_modules/lodash/get.js"),
				f = n.n(c),
				s = n("../../../../node_modules/moment/moment.js"),
				g = n.n(s),
				d = n("../react/common/constants/billing/index.ts");

			function p(j) {
				for (var ne = 1; ne < arguments.length; ne++) {
					var ge = arguments[ne] != null ? Object(arguments[ne]) : {},
						we = Object.keys(ge);
					typeof Object.getOwnPropertySymbols == "function" && we.push.apply(we, Object.getOwnPropertySymbols(ge).filter(function(De) {
						return Object.getOwnPropertyDescriptor(ge, De).enumerable
					})), we.forEach(function(De) {
						y(j, De, ge[De])
					})
				}
				return j
			}

			function y(j, ne, ge) {
				return ne = t(ne), ne in j ? Object.defineProperty(j, ne, {
					value: ge,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : j[ne] = ge, j
			}

			function t(j) {
				var ne = r(j, "string");
				return typeof ne == "symbol" ? ne : String(ne)
			}

			function r(j, ne) {
				if (typeof j != "object" || j === null) return j;
				var ge = j[Symbol.toPrimitive];
				if (ge !== void 0) {
					var we = ge.call(j, ne || "default");
					if (typeof we != "object") return we;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (ne === "string" ? String : Number)(j)
			}
			const a = (0, o.P1)("zone", j => j.zone),
				l = j => {
					var ne;
					return (ne = j.zoneVersioning) === null || ne === void 0 ? void 0 : ne.zoneVersionSelector
				},
				i = (0, e.P1)(a, l, (j, ne) => {
					var ge, we, De;
					let le;
					if (Array.isArray(j) && j.length === 1 ? le = j[0] : j && !Array.isArray(j) && (le = j), !le) return;
					const ue = !!(ne == null ? void 0 : ne.enabled);
					return p({}, le, le.name && {
						name: ue ? ne.rootZoneName : le.name
					}, {
						versioning: {
							enabled: ue,
							isRoot: !((ge = le.name) === null || ge === void 0 ? void 0 : ge.endsWith(".config.cfdata.org")),
							version: ue ? ne.selectedVersion : 0,
							rootZoneId: ue ? ne.rootZoneId : (we = (De = le) === null || De === void 0 ? void 0 : De.id) !== null && we !== void 0 ? we : ""
						}
					})
				}),
				u = j => j.zone,
				E = (0, e.P1)(i, u, (j, ne) => ({
					data: j,
					meta: ne
				})),
				A = j => {
					var ne, ge;
					return (ne = (ge = i(j)) === null || ge === void 0 ? void 0 : ge.id) !== null && ne !== void 0 ? ne : ""
				},
				v = j => j.zones,
				C = j => j.zonesRoot,
				S = j => j.zonesAccount,
				T = (0, o.P1)("zones", v),
				h = (0, o.P1)("zonesRoot", C),
				I = (0, o.P1)("zonesAccount", S);

			function F(j) {
				const ne = i(j);
				return ne ? ne.created_on : null
			}

			function M(j, ne, ge) {
				const we = F(j);
				if (!we) return;
				const De = g().duration(ne, ge),
					le = new Date(we),
					ue = new Date(new Date().getTime() - De.asMilliseconds());
				return le.getTime() > ue.getTime()
			}

			function U(j) {
				const ne = i(j);
				return ne ? ne.status : null
			}

			function V(j) {
				const ne = i(j);
				return ne ? ne.type : null
			}

			function R(j) {
				return j.plan_pending ? j.plan_pending : j.plan
			}

			function z(j) {
				const ne = i(j);
				if (!ne) return;
				const ge = R(ne);
				return ge && ge.legacy_id
			}

			function te(j, ne) {
				const ge = R(j);
				return !!ge && d.Gs.indexOf(ge.legacy_id) >= d.Gs.indexOf(ne)
			}

			function Y(j) {
				return !!j && j.status === "initializing"
			}

			function ce(j) {
				return !!j && j.status === "pending"
			}

			function Q(j) {
				return !!j && j.status === "active"
			}

			function ae(j, ne) {
				if (!j) return !1;
				const ge = R(j);
				return !!ge && ge.legacy_id === ne
			}

			function $(j) {
				return ae(j, "enterprise")
			}
			const x = j => $(i(j));

			function w(j) {
				return ae(j, "business")
			}
			const K = j => w(i(j));

			function ee(j) {
				return ae(j, "pro")
			}

			function ie(j) {
				return ae(j, "free")
			}
			const B = j => ie(i(j));

			function P(j) {
				return !$(j)
			}

			function L(j) {
				return j && j.owner
			}

			function D(j, ne) {
				const ge = L(ne);
				return !!ge && ge.type === "user" && ge.id === j.id
			}

			function H(j) {
				const ne = i(j);
				return !!ne && ne.type === "partial"
			}

			function J(j) {
				const ne = i(j);
				return !!ne && ne.type === "secondary"
			}

			function X(j) {
				const ne = i(j);
				return ne && H(j) && ne.host
			}
			const me = j => {
					var ne;
					const ge = i(j);
					return !!(ge == null ? void 0 : ge.host) && !!((ne = ge.plan) === null || ne === void 0 ? void 0 : ne.externally_managed)
				},
				Le = j => {
					const ne = T(j);
					return ne && ne.some($)
				},
				Ie = (j, ne) => {
					const ge = i(j);
					return ge && ge.betas ? ge.betas.includes(ne) : !1
				},
				W = (j, ...ne) => f()(j, ["zoneFlags", "data", ...ne]),
				se = (j, ...ne) => f()(j, ["accountFlags", "data", ...ne]),
				be = j => j.accountFlags.isRequesting,
				je = j => j.zoneFlags.isRequesting,
				Fe = (j, ...ne) => f()(j, ["zoneFlagsChanges", "data", ...ne]),
				Ge = j => j.zoneFlagsChanges.isRequesting,
				Ve = j => j.zoneFlags && j.zoneFlags.data,
				Ze = j => j.zoneFlags,
				st = (0, e.P1)(Ve, Ze, (j, ne) => ({
					data: j,
					meta: ne
				})),
				He = (0, o.P1)("abuseUrls", j => j.overview.abuseUrls),
				Ye = j => {
					const ne = i(j);
					return ne ? `/${ne.account.id}/${ne.name}` : null
				},
				Ke = j => j.zoneMarketingCampaigns,
				xe = j => j.overview.zoneBlocks.data,
				Je = j => j.overview.zoneBlocks.isRequesting,
				Qe = j => j.overview.zoneBlocks.hasData,
				ze = j => {
					var ne, ge;
					return (j == null || (ne = j.overview.zoneBlocks) === null || ne === void 0 || (ge = ne.paginationData) === null || ge === void 0 ? void 0 : ge.info) || {
						page: 1,
						count: 0,
						total_pages: 0,
						per_page: 10
					}
				},
				qe = j => j.overview.zoneBlocksReview.isRequesting,
				Xe = j => j.overview.zoneHold,
				et = (0, o.P1)("zoneHold", Xe)
		},
		"../react/common/utils/formatDate.ts": function(G, _, n) {
			"use strict";
			n.d(_, {
				U: function() {
					return e.pN
				}
			});
			var e = n("../../../../node_modules/@cloudflare/util-formatters/es/index.js");
			_.Z = (o, c, f = !1) => (0, e.p6)(o, c, f)
		},
		"../react/common/utils/hasRole.ts": function(G, _, n) {
			"use strict";
			n.d(_, {
				n: function() {
					return o
				}
			});
			var e = n("../react/common/selectors/accountSelectors.ts");
			const o = (c, f) => {
				const {
					roles: s = []
				} = (0, e.uF)(c) || {};
				return f.some(g => s.includes(g))
			}
		},
		"../react/common/utils/isGuards.ts": function(G, _, n) {
			"use strict";
			n.d(_, {
				Q$: function() {
					return c
				},
				t: function() {
					return g
				},
				v5: function() {
					return f
				},
				zE: function() {
					return s
				}
			});
			var e = n("../react/common/constants/index.ts"),
				o = n("../node_modules/uuid/dist/esm-browser/validate.js");
			const c = d => d ? ["page", "per_page", "count", "total_count"].every(y => y in d && d[y]) : !1,
				f = (d = "") => e.Dy.includes(d.toLowerCase()),
				s = d => d !== null && typeof d == "object" && "name" in d && "size" in d && "type" in d && typeof d.slice == "function",
				g = d => (0, o.Z)(d)
		},
		"../react/common/utils/useQueryCache.ts": function(G, _, n) {
			"use strict";
			n.d(_, {
				o: function() {
					return g
				}
			});
			var e = n("../../../../node_modules/react-query/es/index.js");

			function o(d) {
				for (var p = 1; p < arguments.length; p++) {
					var y = arguments[p] != null ? Object(arguments[p]) : {},
						t = Object.keys(y);
					typeof Object.getOwnPropertySymbols == "function" && t.push.apply(t, Object.getOwnPropertySymbols(y).filter(function(r) {
						return Object.getOwnPropertyDescriptor(y, r).enumerable
					})), t.forEach(function(r) {
						c(d, r, y[r])
					})
				}
				return d
			}

			function c(d, p, y) {
				return p = f(p), p in d ? Object.defineProperty(d, p, {
					value: y,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : d[p] = y, d
			}

			function f(d) {
				var p = s(d, "string");
				return typeof p == "symbol" ? p : String(p)
			}

			function s(d, p) {
				if (typeof d != "object" || d === null) return d;
				var y = d[Symbol.toPrimitive];
				if (y !== void 0) {
					var t = y.call(d, p || "default");
					if (typeof t != "object") return t;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (p === "string" ? String : Number)(d)
			}
			const g = d => {
				const p = (0, e.useQueryClient)(),
					y = v => {
						var C;
						return p.getQueriesData((C = v) !== null && C !== void 0 ? C : d)
					},
					t = v => {
						var C;
						return p.getQueryData((C = v) !== null && C !== void 0 ? C : d)
					},
					r = v => {
						var C;
						return p.getQueriesData({
							queryKey: (C = v) !== null && C !== void 0 ? C : d,
							stale: !0
						})
					},
					a = (v, C) => {
						var S;
						p.setQueryData((S = C) !== null && S !== void 0 ? S : d, v)
					},
					l = async (v, C) => {
						var S, T;
						await p.invalidateQueries((S = v) !== null && S !== void 0 ? S : d, o({
							refetchActive: !1
						}, (T = C) !== null && T !== void 0 ? T : {}))
					}, i = async (v, C) => {
						const S = v || (T => {
							var h;
							return (T == null || (h = T.queryKey) === null || h === void 0 ? void 0 : h[0]) === d
						});
						await p.invalidateQueries(o({
							predicate: S,
							refetchActive: !1,
							refetchInactive: !1
						}, C))
					};
				return {
					cancelData: async () => {
						await p.cancelQueries(d)
					},
					invalidate: l,
					setData: a,
					getDataStale: r,
					getData: y,
					prefetchQuery: (v, C) => {
						var S;
						return p.prefetchQuery((S = C) !== null && S !== void 0 ? S : d, v)
					},
					getQueryData: t,
					predicateInvalidate: i,
					batchInvalidate: async ({
						queryKeysToInvalidate: v = [],
						queryKeysToPredicateInvalidate: C = [],
						refetchActive: S = !1,
						refetchInactive: T = !1
					}) => {
						const h = v.map(F => l(F)),
							I = C.map(F => i(M => {
								var U;
								return (M == null || (U = M.queryKey) === null || U === void 0 ? void 0 : U[0]) === F
							}, {
								refetchActive: S,
								refetchInactive: T
							}));
						await Promise.all([...h, ...I])
					}
				}
			}
		},
		"../react/common/validators/index.js": function(G, _, n) {
			"use strict";
			n.d(_, {
				K2: function() {
					return o
				},
				Lb: function() {
					return c
				},
				XI: function() {
					return f
				},
				bK: function() {
					return p
				},
				jk: function() {
					return d
				},
				wb: function() {
					return s
				}
			});
			var e = n("../../../../node_modules/@cloudflare/util-regex/es/index.js");
			const o = y => /^https?:\/\/(.*)/.test(y),
				c = y => e.default.hostname.test(y),
				f = y => /^([_a-zA-Z0-9][-_a-zA-Z0-9]*\.)+[-a-zA-Z0-9]{2,20}:(?:[0-9]|[1-9][0-9]{1,3}|[1-5][0-9]{4}|6[0-4][0-9]{3}|65[0-4][0-9]{2}|655[0-2][0-9]|6553[0-5])$/.test(y),
				s = y => /^[!-~]+$/.test(y),
				g = /^(?:(?:[A-Za-z0-9](?:[A-Za-z0-9\-\_]{0,61}[A-Za-z0-9])?)\.)*(?:[A-Za-z0-9](?:[A-Za-z0-9\-]{0,61}[A-Za-z0-9])?)?$/,
				d = y => g.test(y),
				p = y => !!y && !!y.length && /^[ -~]+$/.test(y)
		},
		"../react/pages/analytics/common/utils/gqlUtils.js": function(G, _, n) {
			"use strict";
			n.d(_, {
				DZ: function() {
					return f
				},
				GA: function() {
					return y
				},
				hT: function() {
					return g
				},
				p6: function() {
					return c
				},
				qc: function() {
					return s
				},
				w9: function() {
					return p
				}
			});
			var e = n("../../../../node_modules/moment/moment.js"),
				o = n.n(e);
			const c = a => o().utc(a).format("YYYY-MM-DD"),
				f = a => o().utc(a).format(),
				s = a => o().utc(a).startOf("minute").format(),
				g = a => new Date(a),
				d = {
					0: "datetimeMinute",
					3: "datetimeFiveMinutes",
					12: "datetimeFifteenMinutes",
					48: "datetimeHour",
					240: "date"
				},
				p = a => {
					const l = a / 60 / 60 / 1e3;
					return d[Object.keys(d).sort((i, u) => u - i).find(i => l >= i)]
				},
				y = (a, l = i => i.avg && i.avg.sampleInterval ? i.avg.sampleInterval : 1) => a.length === 0 ? 1 : a.reduce((i, u) => i + l(u), 0) / a.length,
				t = {
					datetimeMinute: 60 * 1e3,
					datetimeFiveMinutes: 5 * 60 * 1e3,
					datetimeFifteenMinutes: 15 * 60 * 1e3,
					datetimeHour: 60 * 60 * 1e3,
					date: 240 * 60 * 1e3
				},
				r = a => t[a]
		},
		"../react/pages/apps/marketplace/config/initialState.ts": function(G, _, n) {
			"use strict";
			n.d(_, {
				Jz: function() {
					return y
				},
				OK: function() {
					return s
				},
				_Y: function() {
					return d
				},
				fD: function() {
					return r
				},
				h_: function() {
					return p
				},
				w6: function() {
					return a
				},
				yc: function() {
					return t
				}
			});

			function e(i) {
				for (var u = 1; u < arguments.length; u++) {
					var E = arguments[u] != null ? Object(arguments[u]) : {},
						A = Object.keys(E);
					typeof Object.getOwnPropertySymbols == "function" && A.push.apply(A, Object.getOwnPropertySymbols(E).filter(function(v) {
						return Object.getOwnPropertyDescriptor(E, v).enumerable
					})), A.forEach(function(v) {
						o(i, v, E[v])
					})
				}
				return i
			}

			function o(i, u, E) {
				return u = c(u), u in i ? Object.defineProperty(i, u, {
					value: E,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : i[u] = E, i
			}

			function c(i) {
				var u = f(i, "string");
				return typeof u == "symbol" ? u : String(u)
			}

			function f(i, u) {
				if (typeof i != "object" || i === null) return i;
				var E = i[Symbol.toPrimitive];
				if (E !== void 0) {
					var A = E.call(i, u || "default");
					if (typeof A != "object") return A;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (u === "string" ? String : Number)(i)
			}
			let s = function(i) {
					return i.Sending = "sending", i.Success = "success", i.Failed = "failed", i.Latent = "latent", i
				}({}),
				g = function(i) {
					return i[i.Success = 200] = "Success", i[i.BadRequest = 400] = "BadRequest", i
				}({});
			const d = {
					status: s.Latent,
					statusCode: void 0
				},
				p = {
					status: s.Sending
				},
				y = {
					status: s.Success,
					statusCode: g.Success
				},
				t = {
					status: s.Failed,
					statusCode: g.BadRequest
				},
				r = {
					token: null,
					zone: null,
					isTokenValid: !1,
					user: null
				},
				a = {
					appsList: e({
						value: []
					}, d),
					installsList: e({
						value: []
					}, d),
					categoriesList: e({
						value: []
					}, d),
					recommendedAppsList: e({
						value: []
					}, d),
					metadata: e({
						value: null
					}, d),
					app: e({
						value: null
					}, d),
					updatableInstallsList: [],
					developedApps: e({
						value: []
					}, d)
				},
				l = {}
		},
		"../react/pages/apps/marketplace/libraries/helpers.ts": function(G, _, n) {
			"use strict";
			n.d(_, {
				Dl: function() {
					return a
				},
				Ux: function() {
					return l
				},
				cz: function() {
					return u
				},
				im: function() {
					return y
				},
				pG: function() {
					return i
				},
				t$: function() {
					return E
				}
			});
			var e = n("../../../../node_modules/lodash-es/get.js"),
				o = n("../../../../node_modules/lodash-es/isEqual.js"),
				c = n("../react/pages/apps/marketplace/libraries/constants.ts");

			function f(v) {
				for (var C = 1; C < arguments.length; C++) {
					var S = arguments[C] != null ? Object(arguments[C]) : {},
						T = Object.keys(S);
					typeof Object.getOwnPropertySymbols == "function" && T.push.apply(T, Object.getOwnPropertySymbols(S).filter(function(h) {
						return Object.getOwnPropertyDescriptor(S, h).enumerable
					})), T.forEach(function(h) {
						s(v, h, S[h])
					})
				}
				return v
			}

			function s(v, C, S) {
				return C = g(C), C in v ? Object.defineProperty(v, C, {
					value: S,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : v[C] = S, v
			}

			function g(v) {
				var C = d(v, "string");
				return typeof C == "symbol" ? C : String(C)
			}

			function d(v, C) {
				if (typeof v != "object" || v === null) return v;
				var S = v[Symbol.toPrimitive];
				if (S !== void 0) {
					var T = S.call(v, C || "default");
					if (typeof T != "object") return T;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (C === "string" ? String : Number)(v)
			}
			const p = v => v.test(window.location.hostname),
				y = () => p(c.j9),
				t = () => p(MARKETPLACE_LOCAL_URL_REGEXP),
				r = (v, C) => {
					const S = random(0, 1) ? -1 : 1;
					return v.points === C.points || v.points >= APP_POINTS_THRESHOLD && C.points >= APP_POINTS_THRESHOLD ? S : v.points < 0 || C.points < 0 || v.points >= APP_POINTS_THRESHOLD || C.points >= APP_POINTS_THRESHOLD ? C.points - v.points : S
				},
				a = (v, C, S) => {
					const T = (0, e.Z)(C, S),
						h = (0, e.Z)(v, S);
					return T && !(0, o.Z)(T, h)
				},
				l = {
					transformers: {
						transformAppIdsToApps: (v, C) => C.map(S => v.find(T => T.id === S)),
						addAppVersionInfo: (v, C) => f({}, C, {
							currentVersion: C.versions.find(S => S.tag === v.versionTag),
							latestVersion: C.versions.find(S => S.tag === C.infoVersion)
						}),
						addCurrentSiteInstall: (v, C) => f({}, C, {
							currentSiteInstall: v.find(S => S.appId === C.id)
						})
					}
				},
				i = (v, C, S) => f({}, v, C, S ? {
					value: S
				} : {}),
				u = v => v.map(C => C.status),
				E = v => v.apps ? v.apps : v,
				A = v => {
					let C = ["by-cloudflare"];
					return v.filter(S => !C.includes(S.id) && S.visible).sort((S, T) => S.points < T.points ? 1 : 0)
				}
		},
		"../react/pages/apps/marketplace/marketplace.translations.ts": function(G, _, n) {
			"use strict";
			n.r(_), n.d(_, {
				categorySlugTranslationKey: function() {
					return s
				},
				keys: function() {
					return o
				},
				namespace: function() {
					return f
				},
				translations: function() {
					return c
				}
			});
			var e = n("../../../common/intl/intl-core/src/prepare.ts");
			const {
				keys: o,
				translations: c,
				namespace: f
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

			function s(g) {
				const d = g.replace(/-/g, "_");
				return Object.keys(o).includes(d) ? d : void 0
			}
		},
		"../react/pages/apps/marketplace/requests/Requester.ts": function(G, _, n) {
			"use strict";
			n.d(_, {
				L: function() {
					return a
				}
			});
			var e = n("../../../../node_modules/url-join/lib/url-join.js"),
				o = n.n(e),
				c = n("../../../../node_modules/lodash-es/defaults.js"),
				f = n("../react/pages/apps/marketplace/libraries/helpers.ts");

			function s(l) {
				for (var i = 1; i < arguments.length; i++) {
					var u = arguments[i] != null ? Object(arguments[i]) : {},
						E = Object.keys(u);
					typeof Object.getOwnPropertySymbols == "function" && E.push.apply(E, Object.getOwnPropertySymbols(u).filter(function(A) {
						return Object.getOwnPropertyDescriptor(u, A).enumerable
					})), E.forEach(function(A) {
						p(l, A, u[A])
					})
				}
				return l
			}

			function g(l, i) {
				if (l == null) return {};
				var u = d(l, i),
					E, A;
				if (Object.getOwnPropertySymbols) {
					var v = Object.getOwnPropertySymbols(l);
					for (A = 0; A < v.length; A++) E = v[A], !(i.indexOf(E) >= 0) && (!Object.prototype.propertyIsEnumerable.call(l, E) || (u[E] = l[E]))
				}
				return u
			}

			function d(l, i) {
				if (l == null) return {};
				var u = {},
					E = Object.keys(l),
					A, v;
				for (v = 0; v < E.length; v++) A = E[v], !(i.indexOf(A) >= 0) && (u[A] = l[A]);
				return u
			}

			function p(l, i, u) {
				return i = y(i), i in l ? Object.defineProperty(l, i, {
					value: u,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : l[i] = u, l
			}

			function y(l) {
				var i = t(l, "string");
				return typeof i == "symbol" ? i : String(i)
			}

			function t(l, i) {
				if (typeof l != "object" || l === null) return l;
				var u = l[Symbol.toPrimitive];
				if (u !== void 0) {
					var E = u.call(l, i || "default");
					if (typeof E != "object") return E;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (i === "string" ? String : Number)(l)
			}
			class r {
				constructor(i) {
					p(this, "token", void 0), p(this, "options", void 0), p(this, "setAuthHeader", u => {
						this.token = u
					}), this.token = "", this.options = (0, c.Z)(i, r.defaults)
				}
				getAuthHeaders() {
					return {
						Authorization: `Bearer ${this.token}`
					}
				}
				async request(i = "GET", u, E = {}) {
					const {
						body: A
					} = E, v = g(E, ["body"]);
					return fetch(o()(this.options.baseUrl, u), s({
						method: i
					}, v, A ? {
						body: JSON.stringify(A)
					} : {}, {
						credentials: "same-origin",
						headers: new Headers(s({
							Accept: "application/json, text/plain, */*"
						}, E.headers, this.getAuthHeaders()))
					}))
				}
				async fetchJSON(i, u = {}) {
					const E = await this.request("GET", i, u);
					return this.parseJSONResponse(E)
				}
				async postJSON(i, u = {}) {
					const E = await this.request("POST", i, s({}, u, {
						headers: s({}, u.headers, {
							"Content-Type": "application/json"
						})
					}));
					return this.parseJSONResponse(E)
				}
				parseJSONResponse(i) {
					return i.json()
				}
			}
			p(r, "defaults", {
				baseUrl: (0, f.im)() ? "https://api-staging.appstore.cfdata.org" : "https://api.cloudflareapps.com"
			});
			const a = new r
		},
		"../react/pages/apps/marketplace/requests/common.ts": function(G, _, n) {
			"use strict";
			n.d(_, {
				JX: function() {
					return y
				},
				Jb: function() {
					return r
				},
				RX: function() {
					return p
				}
			});
			var e = n("../../../../node_modules/lodash-es/upperFirst.js"),
				o = n("../../../../node_modules/lodash-es/isEmpty.js"),
				c = n("../../../../node_modules/query-string/query-string.js"),
				f = n.n(c),
				s = n("../../../../node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js"),
				g = n("../react/pages/apps/marketplace/requests/Requester.ts"),
				d = n("../react/pages/apps/marketplace/libraries/resource.ts");

			function* p(i, u, E, A) {
				const v = (0, e.Z)(u),
					[C, S, T] = [`get${v}Sending`, `get${v}Success`, `get${v}Failed`];
				try {
					yield(0, s.gz)(i[C]());
					const h = yield(0, s.RE)(a, E);
					let I = h;
					if (I.error) {
						yield(0, s.gz)(i[T]());
						return
					}
					return A && (I = yield A(h)), yield(0, s.gz)(i[S](I)), I
				} catch {
					yield(0, s.gz)(i[T]())
				}
			}

			function* y(i, u, E, A) {
				const v = (0, e.Z)(u),
					C = `get${v}Sending`,
					S = `get${v}Success`,
					T = `get${v}Failed`;
				try {
					yield(0, s.gz)(i[C]());
					const h = yield(0, s.RE)(l, {
						url: E,
						data: A
					});
					return yield(0, s.gz)(i[S](h)), h
				} catch {
					yield(0, s.gz)(i[T]())
				}
			}
			const t = i => (0, o.Z)(i) ? "" : `?${c.stringify(i)}`,
				r = {
					app: new d.c({
						name: "app",
						url: (i, u) => `apps/${i}${t(u)}`
					}),
					apps: new d.c({
						name: "apps",
						url: () => "apps"
					}),
					installs: {
						default: new d.c({
							name: "installs",
							url: i => `sites/${i}/installs`
						}),
						delete: new d.c({
							name: "installs",
							url: i => `installs/${i}`
						})
					},
					categories: new d.c({
						name: "categories",
						url: (i = {}) => "categories" + t(i)
					}),
					metadata: {
						get: new d.c({
							name: "metadata",
							url: i => `sites/${i}/metadata`
						}),
						post: new d.c({
							name: "metadata",
							url: i => `sites/${i}/metadata`
						})
					},
					ratings: {
						default: new d.c({
							name: "ratings",
							url: (i = {}) => "ratings" + t(i)
						}),
						delete: new d.c({
							name: "ratings",
							url: i => `ratings/${i}`
						})
					},
					recommendedApps: new d.c({
						name: "recommendedApps",
						url: (i = {}) => "apps/recommend" + t(i)
					}),
					developedApps: new d.c({
						name: "developedApps",
						url: i => `user/${i}/apps`
					})
				},
				a = async i => g.L.fetchJSON(i), l = async i => {
					const {
						url: u,
						data: E
					} = i;
					return g.L.postJSON(u, {
						body: E
					})
				}
		},
		"../react/pages/apps/marketplace/state/auth.reducer.ts": function(G, _, n) {
			"use strict";
			n.d(_, {
				Nw: function() {
					return p
				},
				U4: function() {
					return d
				},
				XO: function() {
					return g
				},
				ZP: function() {
					return y
				}
			});
			var e = n("../react/pages/apps/marketplace/config/initialState.ts");

			function o(t) {
				for (var r = 1; r < arguments.length; r++) {
					var a = arguments[r] != null ? Object(arguments[r]) : {},
						l = Object.keys(a);
					typeof Object.getOwnPropertySymbols == "function" && l.push.apply(l, Object.getOwnPropertySymbols(a).filter(function(i) {
						return Object.getOwnPropertyDescriptor(a, i).enumerable
					})), l.forEach(function(i) {
						c(t, i, a[i])
					})
				}
				return t
			}

			function c(t, r, a) {
				return r = f(r), r in t ? Object.defineProperty(t, r, {
					value: a,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : t[r] = a, t
			}

			function f(t) {
				var r = s(t, "string");
				return typeof r == "symbol" ? r : String(r)
			}

			function s(t, r) {
				if (typeof t != "object" || t === null) return t;
				var a = t[Symbol.toPrimitive];
				if (a !== void 0) {
					var l = a.call(t, r || "default");
					if (typeof l != "object") return l;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (r === "string" ? String : Number)(t)
			}
			let g = function(t) {
					return t.SetCurrentUser = "user.set", t
				}({}),
				d = function(t) {
					return t.InitSaga = "MARKETPLACE/AUTH/LOADED_SAGA", t.SetZone = "MARKETPLACE/AUTH/SET_ZONE", t.SetToken = "MARKETPLACE/AUTH/SET_TOKEN", t.ClearToken = "MARKETPLACE/AUTH/CLEAR_TOKEN", t.SetTokenValid = "MARKETPLACE/AUTH/VALID_TOKEN", t.CurrentUserSaga = "MARKETPLACE/AUTH/CURRENT_USER_SAGA", t.CurrentUserSending = "MARKETPLACE/AUTH/CURRENT_USER_SENDING", t.CurrentUserSuccess = "MARKETPLACE/AUTH/CURRENT_USER_SUCCESS", t.CurrentUserFailed = "MARKETPLACE/AUTH/CURRENT_USER_FAILED", t.ResetState = "MARKETPLACE/AUTH/RESET_STATE", t
				}({});
			const p = {
				resetState: () => ({
					type: d.ResetState
				}),
				initSaga: t => ({
					type: d.InitSaga,
					zoneId: t
				}),
				setZone: t => ({
					type: d.SetZone,
					zone: t
				}),
				setToken: t => ({
					type: d.SetToken,
					token: t
				}),
				clearToken: () => ({
					type: d.ClearToken
				}),
				setTokenValid: t => ({
					type: d.SetTokenValid,
					isTokenValid: t
				}),
				getCurrentUserSaga: () => ({
					type: d.CurrentUserSaga
				}),
				getCurrentUserSending: () => ({
					type: d.CurrentUserSending
				}),
				getCurrentUserSuccess: t => ({
					type: d.CurrentUserSuccess,
					user: t
				}),
				getCurrentUserFailed: () => ({
					type: d.CurrentUserFailed
				})
			};

			function y(t = e.fD, r) {
				switch (r.type) {
					case d.ResetState:
						return o({}, e.fD);
					case d.CurrentUserSending:
						return o({}, t);
					case d.CurrentUserSuccess:
						const {
							user: a
						} = r;
						return o({}, t, {
							user: a
						});
					case d.CurrentUserFailed:
						return o({}, t);
					case d.SetZone:
						const {
							zone: l
						} = r;
						return o({}, t, {
							zone: l
						});
					case d.SetToken:
						const {
							token: i
						} = r;
						return o({}, t, {
							token: i
						});
					case d.ClearToken:
						return o({}, t, {
							token: null
						});
					case d.SetTokenValid:
						const {
							isTokenValid: u
						} = r;
						return o({}, t, {
							isTokenValid: u
						});
					default:
						return t
				}
			}
		},
		"../react/pages/apps/marketplace/state/common.reducer.ts": function(G, _, n) {
			"use strict";
			n.d(_, {
				Nw: function() {
					return y
				},
				U4: function() {
					return p
				},
				ZP: function() {
					return t
				},
				dg: function() {
					return d
				}
			});
			var e = n("../react/pages/apps/marketplace/config/initialState.ts"),
				o = n("../react/pages/apps/marketplace/libraries/helpers.ts");

			function c(r) {
				for (var a = 1; a < arguments.length; a++) {
					var l = arguments[a] != null ? Object(arguments[a]) : {},
						i = Object.keys(l);
					typeof Object.getOwnPropertySymbols == "function" && i.push.apply(i, Object.getOwnPropertySymbols(l).filter(function(u) {
						return Object.getOwnPropertyDescriptor(l, u).enumerable
					})), i.forEach(function(u) {
						f(r, u, l[u])
					})
				}
				return r
			}

			function f(r, a, l) {
				return a = s(a), a in r ? Object.defineProperty(r, a, {
					value: l,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : r[a] = l, r
			}

			function s(r) {
				var a = g(r, "string");
				return typeof a == "symbol" ? a : String(a)
			}

			function g(r, a) {
				if (typeof r != "object" || r === null) return r;
				var l = r[Symbol.toPrimitive];
				if (l !== void 0) {
					var i = l.call(r, a || "default");
					if (typeof i != "object") return i;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (a === "string" ? String : Number)(r)
			}
			let d = function(r) {
					return r.CloudflareZoneChangeStart = "zone.start", r
				}({}),
				p = function(r) {
					return r.GetHomePageAssetsSaga = "MARKETPLACE/COMMON/GET_HOME_PAGE_ASSETS_SAGA", r.GetInstalledAppsAssetsSaga = "MARKETPLACE/COMMON/GET_INSTALLED_APPS_ASSETS_SAGA", r.GetDevelopedAppsAssetsSaga = "MARKETPLACE/COMMON/GET_DEVELOPED_APPS_ASSETS_SAGA", r.GetDevelopedAppsSending = "MARKETPLACE/COMMON/GET_DEVELOPED_APPS_SENDING", r.GetDevelopedAppsSuccess = "MARKETPLACE/COMMON/GET_DEVELOPED_APPS_SUCCESS", r.GetDevelopedAppsFailed = "MARKETPLACE/COMMON/GET_DEVELOPED_APPS_FAILED", r.GetAppInfoAssetsSaga = "MARKETPLACE/COMMON/GET_APP_INFO_ASSETS_SAGA", r.SetUpdatableInstalls = "MARKETPLACE/COMMON/SET_UPDATABLE_INSTALLS", r.GetAppSaga = "MARKETPLACE/COMMON/GET_APP_SAGA", r.GetAppSending = "MARKETPLACE/COMMON/GET_APP_SENDING", r.GetAppSuccess = "MARKETPLACE/COMMON/GET_APP_SUCCESS", r.GetAppFailed = "MARKETPLACE/COMMON/GET_APP_FAILED", r.ClearApp = "MARKETPLACE/COMMON/CLEAR_APP", r.GetAppsSaga = "MARKETPLACE/COMMON/GET_APPS_SAGA", r.GetAppsSending = "MARKETPLACE/COMMON/GET_APPS_SENDING", r.GetAppsSuccess = "MARKETPLACE/COMMON/GET_APPS_SUCCESS", r.GetAppsFailed = "MARKETPLACE/COMMON/GET_APPS_FAILED", r.GetInstallsSaga = "MARKETPLACE/COMMON/GET_INSTALLS_SAGA", r.GetInstallsSending = "MARKETPLACE/COMMON/GET_INSTALLS_SENDING", r.GetInstallsSuccess = "MARKETPLACE/COMMON/GET_INSTALLS_SUCCESS", r.GetInstallsFailed = "MARKETPLACE/COMMON/GET_INSTALLS_FAILED", r.GetCategoriesSaga = "MARKETPLACE/COMMON/GET_CATEGORIES_SAGA", r.GetCategoriesSending = "MARKETPLACE/COMMON/GET_CATEGORIES_SENDING", r.GetCategoriesSuccess = "MARKETPLACE/COMMON/GET_CATEGORIES_SUCCESS", r.GetCategoriesFailed = "MARKETPLACE/COMMON/GET_CATEGORIES_FAILED", r.GetMetadataSaga = "MARKETPLACE/COMMON/GET_METADATA_SAGA", r.GetMetadataSending = "MARKETPLACE/COMMON/GET_METADATA_SENDING", r.GetMetadataSuccess = "MARKETPLACE/COMMON/GET_METADATA_SUCCESS", r.GetMetadataFailed = "MARKETPLACE/COMMON/GET_METADATA_FAILED", r.PostMetadataSaga = "MARKETPLACE/COMMON/POST_METADATA_SAGA", r.PostMetadataSending = "MARKETPLACE/COMMON/POST_METADATA_SENDING", r.PostMetadataSuccess = "MARKETPLACE/COMMON/POST_METADATA_SUCCESS", r.PostMetadataFailed = "MARKETPLACE/COMMON/POST_METADATA_FAILED", r.GetRecommendedAppsSaga = "MARKETPLACE/COMMON/GET_RECOMMENDED_APPS_SAGA", r.GetRecommendedAppsSending = "MARKETPLACE/COMMON/GET_RECOMMENDED_APPS_SENDING", r.GetRecommendedAppsSuccess = "MARKETPLACE/COMMON/GET_RECOMMENDED_APPS_SUCCESS", r.GetRecommendedAppsFailed = "MARKETPLACE/COMMON/GET_RECOMMENDED_APPS_FAILED", r.ZoneChangedSaga = "MARKETPLACE/COMMON/ZONE_CHANGED_SAGA", r.ResetState = "MARKETPLACE/COMMON/RESET_STATE", r
				}({});
			const y = {
				resetState: () => ({
					type: p.ResetState
				}),
				zoneChangedSaga: () => ({
					type: p.ZoneChangedSaga
				}),
				getHomePageAssetsSaga: (r, a) => ({
					type: p.GetHomePageAssetsSaga,
					zoneId: r,
					currentResources: a
				}),
				getInstalledAppsAssetsSaga: r => ({
					type: p.GetInstalledAppsAssetsSaga,
					zoneId: r
				}),
				getDevelopedAppsAssetsSaga: (r, a) => ({
					type: p.GetDevelopedAppsAssetsSaga,
					userId: r,
					zoneId: a
				}),
				getDevelopedAppsSending: () => ({
					type: p.GetDevelopedAppsSending
				}),
				getDevelopedAppsSuccess: r => ({
					type: p.GetDevelopedAppsSuccess,
					developedApps: r
				}),
				getDevelopedAppsFailed: () => ({
					type: p.GetDevelopedAppsFailed
				}),
				getAppInfoAssetsSaga: (r, a, l) => ({
					type: p.GetAppInfoAssetsSaga,
					appIdentifier: r,
					zoneId: a,
					version: l
				}),
				setUpdatableInstalls: r => ({
					type: p.SetUpdatableInstalls,
					updatableInstallsList: r
				}),
				getAppSaga: r => ({
					type: p.GetAppSaga,
					appIdentifier: r
				}),
				getAppSending: () => ({
					type: p.GetAppSending
				}),
				getAppSuccess: r => ({
					type: p.GetAppSuccess,
					app: r
				}),
				getAppFailed: () => ({
					type: p.GetAppFailed
				}),
				clearApp: () => ({
					type: p.ClearApp
				}),
				getAppsSaga: () => ({
					type: p.GetAppsSaga
				}),
				getAppsSending: () => ({
					type: p.GetAppsSending
				}),
				getAppsSuccess: r => ({
					type: p.GetAppsSuccess,
					appsList: r
				}),
				getAppsFailed: () => ({
					type: p.GetAppsFailed
				}),
				getInstallsSaga: r => ({
					type: p.GetInstallsSaga,
					zoneId: r
				}),
				getInstallsSending: () => ({
					type: p.GetInstallsSending
				}),
				getInstallsSuccess: r => ({
					type: p.GetInstallsSuccess,
					installsList: r
				}),
				getInstallsFailed: () => ({
					type: p.GetInstallsFailed
				}),
				getCategoriesSaga: r => ({
					type: p.GetCategoriesSaga,
					queryParams: r
				}),
				getCategoriesSending: () => ({
					type: p.GetCategoriesSending
				}),
				getCategoriesSuccess: r => ({
					type: p.GetCategoriesSuccess,
					categoriesList: r
				}),
				getCategoriesFailed: () => ({
					type: p.GetCategoriesFailed
				}),
				getMetadataSaga: r => ({
					type: p.GetMetadataSaga,
					zoneId: r
				}),
				getMetadataSending: () => ({
					type: p.GetMetadataSending
				}),
				getMetadataSuccess: r => ({
					type: p.GetMetadataSuccess,
					metadata: r
				}),
				getMetadataFailed: () => ({
					type: p.GetMetadataFailed
				}),
				postMetadataSaga: (r, a) => ({
					type: p.PostMetadataSaga,
					zoneId: r,
					data: a
				}),
				postMetadataSending: () => ({
					type: p.PostMetadataSending
				}),
				postMetadataSuccess: r => ({
					type: p.PostMetadataSuccess,
					metadata: r
				}),
				postMetadataFailed: () => ({
					type: p.PostMetadataFailed
				}),
				getRecommendedAppsSaga: (r, a, l) => ({
					type: p.GetRecommendedAppsSaga,
					appsList: r,
					installsList: a,
					metadata: l
				}),
				getRecommendedAppsSending: () => ({
					type: p.GetRecommendedAppsSending
				}),
				getRecommendedAppsSuccess: r => ({
					type: p.GetRecommendedAppsSuccess,
					recommendedAppsList: r
				}),
				getRecommendedAppsFailed: () => ({
					type: p.GetRecommendedAppsFailed
				})
			};

			function t(r = e.w6, a) {
				switch (a.type) {
					case p.ResetState:
						return c({}, e.w6);
					case p.ZoneChangedSaga:
						return c({}, r, {
							installsList: c({}, e.w6.installsList),
							recommendedAppsList: c({}, e.w6.recommendedAppsList),
							metadata: c({}, e.w6.metadata)
						});
					case p.GetAppsSending:
						return c({}, r, {
							appsList: c({}, (0, o.pG)(r.appsList, e.h_))
						});
					case p.GetAppsSuccess:
						return c({}, r, {
							appsList: c({}, (0, o.pG)(r.appsList, e.Jz, a.appsList))
						});
					case p.GetAppsFailed:
						return c({}, r, {
							appsList: c({}, (0, o.pG)(r.appsList, e.yc))
						});
					case p.GetInstallsSending:
						return c({}, r, {
							installsList: c({}, (0, o.pG)(r.installsList, e.h_))
						});
					case p.GetInstallsSuccess:
						return c({}, r, {
							installsList: c({}, (0, o.pG)(r.installsList, e.Jz, a.installsList))
						});
					case p.GetInstallsFailed:
						return c({}, r, {
							installsList: c({}, (0, o.pG)(r.installsList, e.yc))
						});
					case p.GetCategoriesSending:
						return c({}, r, {
							categoriesList: c({}, (0, o.pG)(r.categoriesList, e.h_))
						});
					case p.GetCategoriesSuccess:
						return c({}, r, {
							categoriesList: c({}, (0, o.pG)(r.categoriesList, e.Jz, a.categoriesList))
						});
					case p.GetCategoriesFailed:
						return c({}, r, {
							categoriesList: c({}, (0, o.pG)(r.categoriesList, e.yc))
						});
					case p.GetMetadataSending:
						return c({}, r, {
							metadata: c({}, (0, o.pG)(r.metadata, e.h_))
						});
					case p.GetMetadataSuccess:
						return c({}, r, {
							metadata: c({}, (0, o.pG)(r.metadata, e.Jz, a.metadata))
						});
					case p.GetMetadataFailed:
						return c({}, r, {
							metadata: c({}, (0, o.pG)(r.metadata, e.yc))
						});
					case p.PostMetadataSending:
						return c({}, r, {
							metadata: c({}, (0, o.pG)(r.metadata, e.h_))
						});
					case p.PostMetadataSuccess:
						return c({}, r, {
							metadata: c({}, (0, o.pG)(r.metadata, e.Jz, a.metadata))
						});
					case p.PostMetadataFailed:
						return c({}, r, {
							metadata: c({}, (0, o.pG)(r.metadata, e.yc))
						});
					case p.GetRecommendedAppsSending:
						return c({}, r, {
							recommendedAppsList: c({}, (0, o.pG)(r.recommendedAppsList, e.h_))
						});
					case p.GetRecommendedAppsSuccess:
						return c({}, r, {
							recommendedAppsList: c({}, (0, o.pG)(r.recommendedAppsList, e.Jz, a.recommendedAppsList))
						});
					case p.GetRecommendedAppsFailed:
						return c({}, r, {
							recommendedAppsList: c({}, (0, o.pG)(r.recommendedAppsList, e.yc))
						});
					case p.GetAppSending:
						return c({}, r, {
							app: c({}, (0, o.pG)(r.app, e.h_))
						});
					case p.GetAppSuccess:
						return c({}, r, {
							app: c({}, (0, o.pG)(r.app, e.Jz, a.app))
						});
					case p.GetAppFailed:
						return c({}, r, {
							app: c({}, (0, o.pG)(r.app, e.yc))
						});
					case p.ClearApp:
						return c({}, r, {
							app: {
								value: null,
								status: e._Y.status
							}
						});
					case p.SetUpdatableInstalls:
						return c({}, r, {
							updatableInstallsList: a.updatableInstallsList
						});
					case p.GetDevelopedAppsSending:
						return c({}, r, {
							developedApps: c({}, (0, o.pG)(r.developedApps, e.h_))
						});
					case p.GetDevelopedAppsSuccess:
						return c({}, r, {
							developedApps: c({}, (0, o.pG)(r.developedApps, e.Jz, a.developedApps))
						});
					case p.GetDevelopedAppsFailed:
						return c({}, r, {
							developedApps: c({}, (0, o.pG)(r.developedApps, e.yc))
						});
					default:
						return r
				}
			}
		},
		"../react/pages/caching/tracking.tsx": function(G, _, n) {
			"use strict";
			n.d(_, {
				N: function() {
					return e
				}
			});
			let e = function(o) {
				return o.CACHE_PURGE = "submit custom purge", o.TIERED_CACHE = "select tiered cache topology", o.CACHE_ANALYTICS = "load cache analytics data", o
			}({})
		},
		"../react/pages/dns/dns-records/tracking.ts": function(G, _, n) {
			"use strict";
			n.d(_, {
				U: function() {
					return e
				},
				X: function() {
					return o
				}
			});
			let e = function(c) {
				return c.DNS_RECORD_CREATE = "create DNS records", c.DNS_RECORD_UPDATE = "update DNS records", c.DNS_RECORD_DELETE = "delete DNS records", c.ZONE_TRANSFER_SUCCESS = "successful outgoing zone transfer", c
			}({});
			const o = {
				put: e.DNS_RECORD_UPDATE,
				patch: e.DNS_RECORD_UPDATE,
				delete: e.DNS_RECORD_DELETE
			}
		},
		"../react/pages/email/types.ts": function(G, _, n) {
			"use strict";
			n.d(_, {
				BB: function() {
					return o
				},
				Pm: function() {
					return c
				},
				UZ: function() {
					return e
				}
			});
			let e = function(s) {
				return s.ROOT = "root", s.DSTADDRS_CARD = "dstaddrs_card", s.RULES_CARD = "rules_card", s.CATCHALL_CARD = "catchall_card", s.SETTINGS_PAGE = "settings_page", s.WORKERS_PAGE = "workers_page", s
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
			let c = function(s) {
				return s[s.Verified = 0] = "Verified", s[s.Pending = 1] = "Pending", s[s.Missing = 2] = "Missing", s[s.WorkerNotFound = 3] = "WorkerNotFound", s[s.Unknown = 4] = "Unknown", s[s.Loading = 5] = "Loading", s
			}({});
			const f = {
				dmarcReports: "emailSecurityDmarcReports"
			}
		},
		"../react/pages/firewall/analytics/labels.ts": function(G, _, n) {
			"use strict";
			n.d(_, {
				AU: function() {
					return c
				},
				Bc: function() {
					return o
				},
				Bt: function() {
					return e
				},
				e_: function() {
					return f
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
				c = {
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
				f = {
					[c.ASN]: "firewall.analytics.services.labels.asn",
					[c.COUNTRY]: "firewall.analytics.services.labels.country",
					[c.IP]: "firewall.analytics.services.labels.ip",
					[c.IP_RANGE]: "firewall.analytics.services.labels.ipRange",
					[c.SECURITY_LEVEL]: "firewall.analytics.services.labels.securityLevel",
					[c.VALIDATION]: "firewall.analytics.services.labels.validation",
					[c.ZONE_LOCKDOWN]: "firewall.analytics.services.labels.zoneLockdown",
					[c.WAF]: "firewall.analytics.services.labels.waf",
					[c.UA_BLOCK]: "firewall.analytics.services.labels.uaBlock",
					[c.RATE_LIMIT]: "firewall.analytics.services.labels.rateLimit",
					[c.FIREWALL_RULES]: "firewall.analytics.services.labels.firewallRules",
					[c.BIC]: "firewall.analytics.services.labels.bic",
					[c.HOT]: "firewall.analytics.services.labels.hot",
					[c.UNKNOWN]: "firewall.analytics.services.labels.unknown",
					[c.L7DOS]: "firewall.analytics.services.labels.l7dos",
					[c.BOT_FIGHT_MODE]: "firewall.analytics.services.labels.bot_fight_mode",
					[c.API_SHIELD]: "firewall.analytics.services.labels.apiShield",
					[c.API_SHIELD_SCHEMA_VALIDATION]: "firewall.analytics.services.labels.apiShieldSchemaValidation",
					[c.API_SHIELD_TOKEN_VALIDATION]: "firewall.analytics.services.labels.apiShieldTokenValidation",
					[c.API_SHIELD_SEQUENCE_MITIGATION]: "firewall.analytics.services.labels.apiShieldSequenceMitigation",
					[c.FIREWALL_CUSTOM]: "firewall.analytics.services.labels.firewallCustom",
					[c.FIREWALL_MANAGED]: "firewall.analytics.services.labels.firewallManaged",
					[c.DLP]: "firewall.analytics.services.labels.dlp",
					[c.BOT_MANAGEMENT]: "firewall.analytics.services.labels.botManagement"
				}
		},
		"../react/pages/firewall/api-shield/tracking.ts": function(G, _, n) {
			"use strict";
			n.d(_, {
				Fj: function() {
					return p
				},
				kq: function() {
					return d
				},
				xr: function() {
					return y
				}
			});
			var e = n("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				o = n.n(e);

			function c(t) {
				for (var r = 1; r < arguments.length; r++) {
					var a = arguments[r] != null ? Object(arguments[r]) : {},
						l = Object.keys(a);
					typeof Object.getOwnPropertySymbols == "function" && l.push.apply(l, Object.getOwnPropertySymbols(a).filter(function(i) {
						return Object.getOwnPropertyDescriptor(a, i).enumerable
					})), l.forEach(function(i) {
						f(t, i, a[i])
					})
				}
				return t
			}

			function f(t, r, a) {
				return r = s(r), r in t ? Object.defineProperty(t, r, {
					value: a,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : t[r] = a, t
			}

			function s(t) {
				var r = g(t, "string");
				return typeof r == "symbol" ? r : String(r)
			}

			function g(t, r) {
				if (typeof t != "object" || t === null) return t;
				var a = t[Symbol.toPrimitive];
				if (a !== void 0) {
					var l = a.call(t, r || "default");
					if (typeof l != "object") return l;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (r === "string" ? String : Number)(t)
			}
			let d = function(t) {
				return t.MAIN = "API Shield", t.SCHEMA_VALIDATION = "Schema Validation", t.JWT_VALIDATION = "JWT Validation", t.SEQUENCE_ANALYTICS = "Sequence Analytics", t.SEQUENCE_RULES = "Sequence Rules", t.ENDPOINT_MANAGEMENT = "Endpoint Management", t.API_DISCOVERY = "API Discovery", t.SETTINGS = "Settings", t
			}({});
			const p = {
					[d.ENDPOINT_MANAGEMENT]: {
						listOfEndpoints: "view a page of endpoints",
						deleteEndpoint: "delete an endpoint",
						detailedMetrics: "view detailed endpoint metrics with recommended rate limits",
						createEndpoint: "create an endpoint",
						deployRouting: "deploy routing",
						deleteRouting: "delete routing"
					},
					[d.API_DISCOVERY]: {
						viewDiscoveredEndpoints: "view a page of discovered endpoints",
						saveDiscoveredEndpoint: "save discovered endpoints",
						ignoreOrUnignoreDiscoveredEndpoint: "ignore or unignore discovered endpoints"
					},
					[d.SCHEMA_VALIDATION]: {
						viewSchemasList: "view a list of schemas",
						viewSchemaAdoption: "view which endpoints have adopted which schemas",
						addLearnedSchemaByEndpoint: "add a learned schema on a single endpoint",
						uploadSchema: "upload api schemas to schema validation",
						addLearnedSchemaByHostname: "add a learned schema by hostname",
						downloadSchema: "download an existing schema",
						deleteSchema: "delete an existing schema"
					},
					[d.SEQUENCE_ANALYTICS]: {
						viewSequencesPage: "view a page of sequences"
					},
					[d.SEQUENCE_RULES]: {
						listSequenceRules: "view a list of sequence rules",
						deleteSequenceRule: "delete a sequence rule",
						reorderSequenceRule: "reorder a sequence rule",
						createSequenceRule: "create a sequence rule",
						editSequenceRule: "edit a sequence rule"
					},
					[d.JWT_VALIDATION]: {
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
					[d.SETTINGS]: {
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
				y = ({
					name: t,
					category: r = "user journey",
					product: a = d.MAIN,
					productName: l,
					additionalData: i
				}) => {
					o().sendEvent(t, c({
						category: r,
						product: a,
						productName: l
					}, i || {}))
				}
		},
		"../react/pages/firewall/bots/tracking.ts": function(G, _, n) {
			"use strict";
			n.d(_, {
				N3: function() {
					return e
				},
				UN: function() {
					return c
				},
				h1: function() {
					return o
				}
			});
			let e = function(f) {
					return f.INITIAL_FETCH_SCORES = "view bots scores distribution", f.FETCH_CONFIGURATION = "view bots configuration page", f.INITIAL_FETCH_TIME_SERIES = "view bots time series analytics", f.INITIAL_FETCH_ATTRIBUTES = "view bots attributes", f.UPDATE_SETTINGS = "update bots settings", f.DELETE_RULE = "delete bots ruleset", f.UPDATE_RULE = "update bots ruleset", f.FETCH_RULES = "view bots ruleset", f.CONFIGURE_BOT_MANAGEMENT = "view bots management", f.WAF_RULES_REDIRECT = "redirect waf rules", f
				}({}),
				o = function(f) {
					return f.PROVIDED_TEMPLATE = "provided template link in detection card", f.CONFIGURE_BOT_MANAGEMENT = "configure bot management link", f.USE_TEMPLATE = "use template", f.CREATE_FIREWALL_RULE = "create firewall rule", f.WAF_RULES = "waf rules", f
				}({});
			const c = "user journey"
		},
		"../react/pages/firewall/page-shield/tracking.ts": function(G, _, n) {
			"use strict";
			n.d(_, {
				F: function() {
					return e
				}
			});
			const e = {
				CONFIGURE_PAGE_SHIELD: "configure page shield",
				VIEW_PAGE_SHIELD_SETTINGS: "view page shield settings",
				VIEW_DETECTED_SCRIPTS: "view detected scripts",
				VIEW_DETECTED_CONNECTIONS: "view detected connections",
				VIEW_DETECTED_COOKIES: "view detected cookies",
				MANAGE_PAGE_SHIELD_POLICY: "manage page shield policy",
				VIEW_PAGE_SHIELD_POLICIES: "view page shield policies"
			}
		},
		"../react/pages/firewall/rulesets/tracking.tsx": function(G, _, n) {
			"use strict";
			n.d(_, {
				QK: function() {
					return e
				},
				dy: function() {
					return o
				},
				sO: function() {
					return c
				},
				x4: function() {
					return f
				}
			});
			let e = function(s) {
				return s.DELETE = "delete", s.CREATE = "create", s.GET = "get", s.UPDATE = "update", s
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
				c = (s, g) => {
					var d;
					return `${g} ${(d=o[s])!==null&&d!==void 0?d:s} rule${g===e.GET?"s":""}`
				},
				f = () => {
					var s, g;
					return (s = Object.keys(o)) === null || s === void 0 || (g = s.map(d => {
						var p;
						return (p = Object.values(e)) === null || p === void 0 ? void 0 : p.map(y => c(d, y))
					})) === null || g === void 0 ? void 0 : g.flat()
				}
		},
		"../react/pages/firewall/security-analytics/logs/constants.ts": function(G, _, n) {
			"use strict";
			n.d(_, {
				AS: function() {
					return g
				},
				IK: function() {
					return r
				},
				Ki: function() {
					return c
				},
				Lz: function() {
					return a
				},
				nT: function() {
					return p
				},
				o4: function() {
					return l
				},
				oY: function() {
					return f
				},
				qH: function() {
					return t
				},
				x3: function() {
					return d
				}
			});
			var e = n("../react/pages/firewall/analytics/labels.ts"),
				o = n("../react/common/constants/analytics/botScoreSrc.ts");
			const c = ["block", "challenge", "jschallenge", "managedChallenge"],
				f = ["miss", "expired", "bypass", "dynamic"],
				s = i => Object.fromEntries(Object.entries(i).map(([u, E]) => [E, u])),
				g = {
					block: "block",
					challenge: "challenge",
					jschallenge: "jschallenge",
					managed_challenge: "managedChallenge"
				},
				d = s(g),
				p = {
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
				y = s(p),
				t = s(o.EG);
			let r = function(i) {
				return i.SAMPLED = "sampled", i.RAW = "raw", i
			}({});
			const a = "security-analytics-log-explorer";
			let l = function(i) {
				return i.CLICK_ADAPTIVE_SAMPLING = 'click on "adaptive sampling"', i.CLICK_TO_LOG_EXPLORER_DESCRIPTION = 'click on "Go to Log Explorer" in the description', i.CLICK_TO_LOG_EXPLORER_BANNER = 'click on "Go to Log Explorer" in the banner"', i.CLICK_SWITCH_TO_RAW_LOGS = 'click on "Switch to raw logs"', i.CLICK_SWITCH_TO_SAMPLED_LOGS = 'click on "Switch back to sampled logs"', i
			}({})
		},
		"../react/pages/firewall/settings/cards/security-txt/helpers.ts": function(G, _, n) {
			"use strict";
			n.d(_, {
				$E: function() {
					return t
				},
				Mb: function() {
					return r
				},
				Q4: function() {
					return l
				},
				QF: function() {
					return y
				},
				Wv: function() {
					return a
				},
				vc: function() {
					return i
				}
			});
			var e = n("../react/pages/firewall/settings/cards/security-txt/types.ts"),
				o = n("../../../../node_modules/yup/es/index.js"),
				c = n("../../../../node_modules/@cloudflare/util-http-file/es/index.js"),
				f = n("../react/pages/analytics/common/utils/gqlUtils.js");

			function s(u) {
				for (var E = 1; E < arguments.length; E++) {
					var A = arguments[E] != null ? Object(arguments[E]) : {},
						v = Object.keys(A);
					typeof Object.getOwnPropertySymbols == "function" && v.push.apply(v, Object.getOwnPropertySymbols(A).filter(function(C) {
						return Object.getOwnPropertyDescriptor(A, C).enumerable
					})), v.forEach(function(C) {
						g(u, C, A[C])
					})
				}
				return u
			}

			function g(u, E, A) {
				return E = d(E), E in u ? Object.defineProperty(u, E, {
					value: A,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : u[E] = A, u
			}

			function d(u) {
				var E = p(u, "string");
				return typeof E == "symbol" ? E : String(E)
			}

			function p(u, E) {
				if (typeof u != "object" || u === null) return u;
				var A = u[Symbol.toPrimitive];
				if (A !== void 0) {
					var v = A.call(u, E || "default");
					if (typeof v != "object") return v;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (E === "string" ? String : Number)(u)
			}
			const y = {
					[e.T.ENABLED]: !0,
					[e.T.CONTACT]: [""],
					[e.T.EXPIRES]: ""
				},
				t = {
					[e.T.CONTACT]: {
						label: "security_txt.fields.contact",
						tooltip: "security_txt.fields.contact.description",
						placeholder: "security_txt.fields.contact.placeholder"
					},
					[e.T.EXPIRES]: {
						label: "security_txt.fields.expires",
						tooltip: "security_txt.fields.expires.description",
						placeholder: "security_txt.fields.expires.placeholder"
					},
					[e.T.ENCRYPTION]: {
						label: "security_txt.fields.encryption",
						tooltip: "security_txt.fields.encryption.description",
						placeholder: "security_txt.fields.encryption.placeholder"
					},
					[e.T.ACKNOWLEDGMENTS]: {
						label: "security_txt.fields.acknowledgements",
						tooltip: "security_txt.fields.acknowledgements.description",
						placeholder: "security_txt.fields.acknowledgements.placeholder"
					},
					[e.T.CANONICAL]: {
						label: "security_txt.fields.canonical",
						tooltip: "security_txt.fields.canonical.description",
						placeholder: "security_txt.fields.canonical.placeholder"
					},
					[e.T.POLICY]: {
						label: "security_txt.fields.policy",
						tooltip: "security_txt.fields.policy.description",
						placeholder: "security_txt.fields.policy.placeholder"
					},
					[e.T.HIRING]: {
						label: "security_txt.fields.hiring",
						tooltip: "security_txt.fields.hiring.description",
						placeholder: "security_txt.fields.hiring.placeholder"
					},
					[e.T.PREFERRED_LANGUAGES]: {
						label: "security_txt.fields.preferred_languages",
						tooltip: "security_txt.fields.preferred_languages.description",
						placeholder: "security_txt.fields.preferred_languages.placeholder"
					}
				},
				r = u => o.Ry({
					[e.T.CONTACT]: o.IX().of(o.Z_().required(u("common.required")).matches(/^((https:\/\/)|(tel:)|(mailto:))/, u("security_txt.fields.contact.format_error"))),
					[e.T.EXPIRES]: o.hT().required(u("common.required")).min(new Date, u("security_txt.fields.expires.min_error"))
				}),
				a = u => {
					const E = {};
					for (const A in u) E[A] = Array.isArray(u[A]) ? u[A].filter(v => !!v) : u[A];
					return s({}, E, {
						expires: (0, f.DZ)(u.expires)
					})
				},
				l = (u, E, A) => {
					const v = [...new Set([e.T.CONTACT, e.T.EXPIRES, ...Object.values(e.T)])],
						C = Object.entries(u).sort(([S], [T]) => v.indexOf(S) - v.indexOf(T)).filter(([S, T]) => !!t[S] && !!T && (!Array.isArray(T) || !!T.length)).map(([S, T]) => Array.isArray(T) ? T.map(h => `${A(t[S].label)}: ${h}`).join(`
`) : `${A(t[S].label)}: ${T}`).join(`
`);
					(0, c.yH)(`Cloudflare_${E}_security.txt`, C, "text/plain;charset=utf-8")
				};
			let i = function(u) {
				return u.CREATED = "created security.txt", u.ENABLED = "enabled security.txt", u.DISABLED = "disabled security.txt", u.DOWNLOADED = "downloaded security.txt", u.UPDATED = "updated security.txt", u.DELETED = "deleted security.txt", u
			}({})
		},
		"../react/pages/firewall/settings/cards/security-txt/types.ts": function(G, _, n) {
			"use strict";
			n.d(_, {
				T: function() {
					return e
				}
			});
			let e = function(o) {
				return o.ENABLED = "enabled", o.CONTACT = "contact", o.EXPIRES = "expires", o.ENCRYPTION = "encryption", o.ACKNOWLEDGMENTS = "acknowledgments", o.CANONICAL = "canonical", o.HIRING = "hiring", o.POLICY = "policy", o.PREFERRED_LANGUAGES = "preferred_languages", o
			}({})
		},
		"../react/pages/firewall/settings/labels/api/helpers.ts": function(G, _, n) {
			"use strict";
			n.d(_, {
				Mi: function() {
					return C
				},
				hL: function() {
					return v
				}
			});
			var e = n("../react/app/redux/index.ts"),
				o = n("../react/common/selectors/zoneSelectors.ts"),
				c = n("../react/common/utils/useQueryCache.ts"),
				f = n("../react/pages/firewall/settings/resources/constants/index.ts"),
				s = n("../react/common/hooks/useAccountId.ts"),
				g = n("webpack/sharing/consume/default/@cloudflare/util-http/@cloudflare/util-http"),
				d = n("../../../../node_modules/@cloudflare/util-routes/es/index.js");
			const p = {
				labels: (0, d.BC)`/zones/${"zoneId"}/api_gateway/labels`,
				userLabel: (0, d.BC)`/zones/${"zoneId"}/api_gateway/labels/user/${"labelName"}`,
				userLabels: (0, d.BC)`/zones/${"zoneId"}/api_gateway/labels/user`,
				managedLabel: (0, d.BC)`/zones/${"zoneId"}/api_gateway/labels/managed/${"labelName"}`,
				managedLabels: (0, d.BC)`/zones/${"zoneId"}/api_gateway/labels/managed`,
				operationsLinkedToLabels: (0, d.BC)`/zones/${"zoneId"}/api_gateway/operations/labels`,
				userLabelOperations: (0, d.BC)`/zones/${"zoneId"}/api_gateway/labels/user/${"labelName"}/resources/operation`,
				managedLabelOperations: (0, d.BC)`/zones/${"zoneId"}/api_gateway/labels/managed/${"labelName"}/resources/operation`
			};
			var y = n("../../../../node_modules/lodash/lodash.js"),
				t = n("../react/pages/firewall/settings/resources/utils/index.ts"),
				r = n("../../../../node_modules/@cloudflare/component-responsive-table/es/index.js");

			function a(T, h) {
				if (T == null) return {};
				var I = l(T, h),
					F, M;
				if (Object.getOwnPropertySymbols) {
					var U = Object.getOwnPropertySymbols(T);
					for (M = 0; M < U.length; M++) F = U[M], !(h.indexOf(F) >= 0) && (!Object.prototype.propertyIsEnumerable.call(T, F) || (I[F] = T[F]))
				}
				return I
			}

			function l(T, h) {
				if (T == null) return {};
				var I = {},
					F = Object.keys(T),
					M, U;
				for (U = 0; U < F.length; U++) M = F[U], !(h.indexOf(M) >= 0) && (I[M] = T[M]);
				return I
			}

			function i(T) {
				for (var h = 1; h < arguments.length; h++) {
					var I = arguments[h] != null ? Object(arguments[h]) : {},
						F = Object.keys(I);
					typeof Object.getOwnPropertySymbols == "function" && F.push.apply(F, Object.getOwnPropertySymbols(I).filter(function(M) {
						return Object.getOwnPropertyDescriptor(I, M).enumerable
					})), F.forEach(function(M) {
						u(T, M, I[M])
					})
				}
				return T
			}

			function u(T, h, I) {
				return h = E(h), h in T ? Object.defineProperty(T, h, {
					value: I,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : T[h] = I, T
			}

			function E(T) {
				var h = A(T, "string");
				return typeof h == "symbol" ? h : String(h)
			}

			function A(T, h) {
				if (typeof T != "object" || T === null) return T;
				var I = T[Symbol.toPrimitive];
				if (I !== void 0) {
					var F = I.call(T, h || "default");
					if (typeof F != "object") return F;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (h === "string" ? String : Number)(T)
			}
			const v = T => {
					const h = (0, e.p4)(o.Cu),
						I = (0, s.F)(),
						F = S.labels(i({
							accountId: I,
							zoneId: h
						}, T ? i({}, T) : {})),
						M = (0, c.o)(F);
					return i({
						zoneId: h,
						queryKey: F,
						batchInvalidateLabels: async () => {
							await M.batchInvalidate({
								queryKeysToPredicateInvalidate: [f.IQ.LABELS],
								refetchActive: !0,
								refetchInactive: !0
							})
						}
					}, M)
				},
				C = {
					getLabels: async T => {
						var h, I, F, M;
						let {
							zoneId: U,
							hideErrorAlert: V = !0
						} = T, R = a(T, ["zoneId", "hideErrorAlert"]);
						return (await g.get(p.labels.toUrl({
							zoneId: U
						}), {
							parameters: {
								page: R == null ? void 0 : R.page,
								per_page: R == null ? void 0 : R.per_page,
								with_mapped_resource_counts: R == null ? void 0 : R.with_mapped_resource_counts,
								filter: R == null || (h = R.filters) === null || h === void 0 ? void 0 : h.search,
								source: (0, t.sQ)(R == null || (I = R.filters) === null || I === void 0 ? void 0 : I.source),
								order: R == null || (F = R.sort) === null || F === void 0 ? void 0 : F.id,
								direction: (R == null ? void 0 : R.sort) ? (R == null || (M = R.sort) === null || M === void 0 ? void 0 : M.desc) ? r.Sr.desc : r.Sr.asc : void 0
							},
							hideErrorAlert: V
						})).body
					},
					getLabel: async T => {
						let {
							zoneId: h,
							labelName: I,
							hideErrorAlert: F = !0
						} = T, M = a(T, ["zoneId", "labelName", "hideErrorAlert"]);
						const U = (0, t.mm)(I) ? p.managedLabel.toUrl({
							zoneId: h,
							labelName: I
						}) : p.userLabel.toUrl({
							zoneId: h,
							labelName: I
						});
						return (await g.get(U, {
							parameters: {
								with_mapped_resource_counts: M == null ? void 0 : M.with_mapped_resource_counts
							},
							hideErrorAlert: F
						})).body
					},
					editLabel: async ({
						zoneId: T,
						label: h,
						replace: I
					}) => {
						const {
							name: F
						} = h, M = a(h, ["name"]);
						return (await (I ? g.put : g.patch)(p.userLabel.toUrl({
							zoneId: T,
							labelName: h.name
						}), {
							body: M
						})).body
					},
					deleteLabel: async ({
						zoneId: T,
						labelName: h
					}) => (await g.del(p.userLabel.toUrl({
						zoneId: T,
						labelName: h
					}))).body,
					createLabel: async T => {
						let {
							zoneId: h
						} = T, I = a(T, ["zoneId"]);
						const {
							product: F
						} = I, M = a(I, ["product"]);
						return (await g.post(p.userLabels.toUrl({
							zoneId: h
						}), {
							body: [M]
						})).body
					},
					bulkApplyLabelsToOperation: async ({
						zoneId: T,
						user: h,
						managed: I,
						operationIds: F,
						replace: M
					}) => (await (M ? g.put : g.post)(p.operationsLinkedToLabels.toUrl({
						zoneId: T
					}), {
						body: i({}, h ? {
							user: {
								labels: h
							}
						} : {}, I ? {
							managed: {
								labels: I
							}
						} : {}, {
							selector: {
								include: {
									operation_ids: F
								}
							}
						})
					})).body,
					bulkApplyOperationsToLabel: async ({
						zoneId: T,
						labelName: h,
						operationIds: I
					}) => {
						const F = (0, t.mm)(h) ? p.managedLabelOperations.toUrl({
							zoneId: T,
							labelName: h
						}) : p.userLabelOperations.toUrl({
							zoneId: T,
							labelName: h
						});
						return (await g.put(F, {
							body: {
								selector: {
									include: {
										operation_ids: I
									}
								}
							}
						})).body
					}
				},
				S = {
					labels: T => {
						let {
							accountId: h,
							zoneId: I
						} = T, F = a(T, ["accountId", "zoneId"]);
						return [f.IQ.LABELS, h, I, ...(0, y.isEmpty)(F) ? [] : [F]]
					}
				}
		},
		"../react/pages/firewall/settings/labels/api/hooks/useGetLabel.ts": function(G, _, n) {
			"use strict";
			n.d(_, {
				E: function() {
					return y
				},
				V: function() {
					return t
				}
			});
			var e = n("webpack/sharing/consume/default/react/react"),
				o = n.n(e),
				c = n("../../../../node_modules/react-query/es/index.js"),
				f = n("../react/pages/firewall/settings/labels/api/helpers.ts");

			function s(r) {
				for (var a = 1; a < arguments.length; a++) {
					var l = arguments[a] != null ? Object(arguments[a]) : {},
						i = Object.keys(l);
					typeof Object.getOwnPropertySymbols == "function" && i.push.apply(i, Object.getOwnPropertySymbols(l).filter(function(u) {
						return Object.getOwnPropertyDescriptor(l, u).enumerable
					})), i.forEach(function(u) {
						g(r, u, l[u])
					})
				}
				return r
			}

			function g(r, a, l) {
				return a = d(a), a in r ? Object.defineProperty(r, a, {
					value: l,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : r[a] = l, r
			}

			function d(r) {
				var a = p(r, "string");
				return typeof a == "symbol" ? a : String(a)
			}

			function p(r, a) {
				if (typeof r != "object" || r === null) return r;
				var l = r[Symbol.toPrimitive];
				if (l !== void 0) {
					var i = l.call(r, a || "default");
					if (typeof i != "object") return i;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (a === "string" ? String : Number)(r)
			}
			const y = r => {
					const {
						queryKey: a,
						zoneId: l
					} = (0, f.hL)(r), {
						isLoading: i,
						isError: u,
						isSuccess: E,
						data: A,
						refetch: v,
						isRefetching: C
					} = (0, c.useQuery)({
						queryKey: a,
						queryFn: () => f.Mi.getLabel(s({
							zoneId: l
						}, r)),
						enabled: !!(r == null ? void 0 : r.labelName)
					});
					return {
						data: A == null ? void 0 : A.result,
						errors: A == null ? void 0 : A.errors,
						paginationData: A == null ? void 0 : A.result_info,
						isLoading: i,
						isError: u,
						isSuccess: E,
						refetch: v,
						isRefetching: C
					}
				},
				t = r => {
					const a = (0, c.useQueryClient)(),
						{
							queryKey: l,
							zoneId: i
						} = (0, f.hL)(r),
						u = (0, e.useCallback)(async ({
							labelName: A
						}) => {
							if (!A) throw new Error("Error: unable to get label; missing label name");
							return await f.Mi.getLabel(s({
								zoneId: i,
								labelName: A
							}, r))
						}, [i, r]);
					return {
						getLabel: (0, e.useCallback)(async ({
							labelName: A
						}) => await a.fetchQuery(l, () => u({
							labelName: A
						}), {
							staleTime: 0,
							cacheTime: 0
						}), [a, l, u])
					}
				}
		},
		"../react/pages/firewall/settings/resources/constants/constants.tsx": function(G, _, n) {
			"use strict";
			n.d(_, {
				DG: function() {
					return i
				},
				GE: function() {
					return T
				},
				IQ: function() {
					return f
				},
				KV: function() {
					return g
				},
				QH: function() {
					return r
				},
				V: function() {
					return v
				},
				W3: function() {
					return c
				},
				_8: function() {
					return y
				},
				_c: function() {
					return C
				},
				aW: function() {
					return u
				},
				gY: function() {
					return S
				},
				jz: function() {
					return a
				},
				n5: function() {
					return E
				},
				pZ: function() {
					return t
				},
				wq: function() {
					return s
				},
				zF: function() {
					return h
				}
			});
			var e = n("../../../../node_modules/@cloudflare/component-responsive-table/es/index.js"),
				o = n("../react/pages/firewall/settings/resources/constants/labelsTableProperties.tsx");
			const c = "all";
			let f = function(I) {
					return I.LABELS = "labels", I
				}({}),
				s = function(I) {
					return I.USER = "user", I.MANAGED = "managed", I
				}({}),
				g = function(I) {
					return I.SOURCE = "source", I
				}({});
			const y = {
				initialPaginationState: {
					page: 1,
					perPage: 10
				},
				initialSortState: {
					name: o.o.NAME,
					direction: e.Sr.asc
				},
				initialToolbarState: {
					search: "",
					filterValues: {
						[g.SOURCE]: c
					}
				},
				filters: g,
				options: {
					autoFillInitialValues: !0,
					autoFillFilterValues: !0,
					autoClearQs: !0
				}
			};
			let t = function(I) {
				return I.CREATED_LABEL = "createdLabel", I.CREATED_AND_APPLIED_LABEL = "createdAndAppliedLabel", I.DELETED_LABEL = "deletedLabel", I.APPLIED_LABEL = "appliedLabel", I.EDITED_LABEL = "editedLabel", I.EDITED_AND_APPLIED_LABEL = "editedAndAppliedLabel", I
			}({});
			const r = "650px",
				a = {
					SECURITY_LABEL: "https://developers.cloudflare.com/api-shield/management-and-monitoring/endpoint-labels/"
				},
				l = /^[\x20-\x7E]+$/,
				i = /^[A-Za-z0-9-]+$/,
				u = /^cf-/;
			let E = function(I) {
				return I.NAME = "name", I.DESCRIPTION = "description", I
			}({});
			const A = "all";
			let v = function(I) {
				return I.METHOD = "method", I.HOSTNAME = "hostname", I
			}({});
			const C = {
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
						[v.METHOD]: A,
						[v.HOSTNAME]: A
					}
				},
				filters: v
			};
			let S = function(I) {
				return I.TITLE = "title", I.DESCRIPTION = "description", I.SUBMIT = "submit", I
			}({});
			const T = 1e3,
				h = {
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
				}
		},
		"../react/pages/firewall/settings/resources/constants/index.ts": function(G, _, n) {
			"use strict";
			n.d(_, {
				gY: function() {
					return e.gY
				},
				aW: function() {
					return e.aW
				},
				W3: function() {
					return e.W3
				},
				jz: function() {
					return e.jz
				},
				EDIT_LABELS_MODAL_FORM_PROPERTIES: function() {
					return f
				},
				n5: function() {
					return e.n5
				},
				IQ: function() {
					return e.IQ
				},
				_c: function() {
					return e._c
				},
				V: function() {
					return e.V
				},
				j8: function() {
					return c
				},
				LABELS_LIST_TOASTS: function() {
					return e.pZ
				},
				_8: function() {
					return e._8
				},
				KV: function() {
					return e.KV
				},
				om: function() {
					return o.o
				},
				zF: function() {
					return e.zF
				},
				LABEL_SOURCES: function() {
					return e.wq
				},
				GE: function() {
					return e.GE
				},
				QH: function() {
					return e.QH
				}
			});
			var e = n("../react/pages/firewall/settings/resources/constants/constants.tsx"),
				o = n("../react/pages/firewall/settings/resources/constants/labelsTableProperties.tsx");
			let c = function(s) {
					return s.ENDPOINT = "endpoint", s.METHOD = "method", s.OPERATION_ID = "operationId", s
				}({}),
				f = function(s) {
					return s.NAME = "name", s.SOURCE = "source", s.NEW_LABEL_NAME = "newLabelName", s
				}({})
		},
		"../react/pages/firewall/settings/resources/constants/labelsTableProperties.tsx": function(G, _, n) {
			"use strict";
			n.d(_, {
				o: function() {
					return e
				}
			});
			let e = function(o) {
				return o.NAME = "name", o.MAPPED_RESOURCES = "mapped_resources.operations", o.SOURCE = "source", o.APPLY = "apply", o
			}({})
		},
		"../react/pages/firewall/settings/resources/utils/index.ts": function(G, _, n) {
			"use strict";
			n.d(_, {
				Iv: function() {
					return s.Iv
				},
				ZF: function() {
					return s.ZF
				},
				Vy: function() {
					return o
				},
				mm: function() {
					return f
				},
				m8: function() {
					return s.m8
				},
				sQ: function() {
					return c
				},
				vU: function() {
					return t
				},
				vE: function() {
					return A
				},
				u_: function() {
					return T
				},
				rP: function() {
					return y
				}
			});
			var e = n("../react/pages/firewall/settings/resources/constants/index.ts");
			const o = h => (h == null ? void 0 : h.source) === e.LABEL_SOURCES.USER ? "labels.list.table.columns.type.user" : (h == null ? void 0 : h.source) === e.LABEL_SOURCES.MANAGED ? "labels.list.table.columns.type.managed" : "common.unknown",
				c = h => h === e.W3 ? void 0 : h,
				f = h => e.aW.test(h);
			var s = n("../react/pages/firewall/settings/resources/utils/tracking.ts"),
				g = n("webpack/sharing/consume/default/react/react"),
				d = n("../../../../node_modules/lodash/lodash.js"),
				p = n("../react/pages/firewall/settings/labels/api/hooks/useGetLabel.ts");
			const y = () => {
					const [h, I] = (0, g.useState)(!0), [F, M] = (0, g.useState)(!1), [U, V] = (0, g.useState)(!1), {
						getLabel: R
					} = (0, p.V)(), z = (0, g.useRef)(null), te = (0, g.useRef)(""), Y = (0, g.useCallback)(async $ => {
						M(!0);
						try {
							const {
								success: x
							} = await R({
								labelName: $
							});
							I(!x), te.current = $
						} catch {
							I(!0)
						} finally {
							M(!1), V(!1)
						}
					}, [R]), ce = (0, g.useCallback)($ => {
						z.current || (z.current = (0, d.debounce)(Y, 400)), V(!0), z.current($)
					}, [Y]), Q = (0, g.useCallback)($ => {
						const {
							value: x
						} = $.target;
						ce(x)
					}, [ce]), ae = (0, g.useCallback)(async $ => {
						(U || $ !== te.current) && (z.current && z.current.cancel(), await Y($))
					}, [U, Y]);
					return {
						isLabelUnique: h,
						setIsLabelUnique: I,
						handleInputChange: Q,
						isLoading: F,
						isCheckPending: U,
						ensureChecked: ae
					}
				},
				t = ({
					modalHeaderFixedHeight: h = 62,
					modalDefaultPaddings: I = 16
				} = {}) => {
					const F = (0, g.useRef)(null),
						M = (0, g.useRef)(null),
						[U, V] = (0, g.useState)(0),
						[R, z] = (0, g.useState)(0),
						te = `calc(100vh - ${U}px - ${R}px - ${I}px)`,
						[Y, ce] = (0, g.useState)("");
					return (0, g.useEffect)(() => {
						const Q = () => {
							var ae, $, x, w;
							const K = F == null || (ae = F.current) === null || ae === void 0 ? void 0 : ae.offsetHeight,
								ee = M == null || ($ = M.current) === null || $ === void 0 ? void 0 : $.offsetHeight,
								ie = ((x = K) !== null && x !== void 0 ? x : 0) + h,
								B = (w = ee) !== null && w !== void 0 ? w : 0;
							V(ie), z(B)
						};
						return Q(), window.addEventListener("resize", Q), () => window.removeEventListener("resize", Q)
					}, []), {
						searchTerm: Y,
						setSearchTerm: ce,
						scrollableSectionMaxHeight: te,
						topMenuRef: F,
						bottomMenuRef: M
					}
				};
			var r = n("../react/common/hooks/useZoneEntitlement.ts"),
				a = n("../react/common/hooks/useGate.ts");
			const l = "central_endpoint_list.endpoint_labels_allowed",
				i = "system-and-user-generated-labels",
				u = () => !!(0, a.Z)(i),
				E = () => !!(0, r.Z)(l),
				A = () => {
					const h = u(),
						I = E();
					return {
						isLabelsGateOpen: h,
						hasEndpointLabelsEntitlement: I,
						hasLabels: h && I
					}
				};
			var v = n("../../../../node_modules/yup/es/index.js"),
				C = n("../react/utils/translator.tsx"),
				S = n("../react/pages/firewall/settings/resources/constants/constants.tsx");
			const T = () => {
				const {
					t: h
				} = (0, C.QT)(), I = v.Z_().required(h("common.field_is_required")).max(24, h("labels.apply.form.name.error.max_characters")).matches(S.DG, h("labels.apply.form.name.error.special_characters")).test("no-cf-prefix", h("labels.apply.form.name.error.cf_forbidden"), U => !S.aW.test(U)), F = {
					NAMES: {
						CREATE: "labels-create-form",
						EDIT: "labels-edit-form",
						APPLY: "labels-apply-form"
					},
					INITIAL_VALUES: {
						name: "",
						description: ""
					},
					VALIDATION_SCHEMA: U => v.Ry().shape({
						[S.n5.NAME]: U ? v.Z_() : I,
						[S.n5.DESCRIPTION]: U ? v.Z_().optional() : v.Z_().max(150, h("labels.apply.form.description.error.max_characters"))
					})
				}, M = {
					NAME: "edit-labels-modal-form",
					INITIAL_VALUES: {
						[e.EDIT_LABELS_MODAL_FORM_PROPERTIES.NAME]: "",
						[e.EDIT_LABELS_MODAL_FORM_PROPERTIES.SOURCE]: S.W3,
						[e.EDIT_LABELS_MODAL_FORM_PROPERTIES.NEW_LABEL_NAME]: ""
					},
					VALIDATION_SCHEMA: () => v.Ry().shape({
						[e.EDIT_LABELS_MODAL_FORM_PROPERTIES.NEW_LABEL_NAME]: I
					})
				};
				return {
					LABELS_APPLY_FORM: F,
					EDIT_LABELS_MODAL_FORM: M
				}
			}
		},
		"../react/pages/firewall/settings/resources/utils/tracking.ts": function(G, _, n) {
			"use strict";
			n.d(_, {
				Iv: function() {
					return p
				},
				QJ: function() {
					return a
				},
				R: function() {
					return d
				},
				Tf: function() {
					return l
				},
				ZF: function() {
					return y
				},
				eC: function() {
					return r
				},
				m8: function() {
					return i
				},
				tR: function() {
					return t
				}
			});
			var e = n("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				o = n.n(e);

			function c(u) {
				for (var E = 1; E < arguments.length; E++) {
					var A = arguments[E] != null ? Object(arguments[E]) : {},
						v = Object.keys(A);
					typeof Object.getOwnPropertySymbols == "function" && v.push.apply(v, Object.getOwnPropertySymbols(A).filter(function(C) {
						return Object.getOwnPropertyDescriptor(A, C).enumerable
					})), v.forEach(function(C) {
						f(u, C, A[C])
					})
				}
				return u
			}

			function f(u, E, A) {
				return E = s(E), E in u ? Object.defineProperty(u, E, {
					value: A,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : u[E] = A, u
			}

			function s(u) {
				var E = g(u, "string");
				return typeof E == "symbol" ? E : String(E)
			}

			function g(u, E) {
				if (typeof u != "object" || u === null) return u;
				var A = u[Symbol.toPrimitive];
				if (A !== void 0) {
					var v = A.call(u, E || "default");
					if (typeof v != "object") return v;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (E === "string" ? String : Number)(u)
			}
			let d = function(u) {
					return u.LABELS_LIST = "Labels List page", u.LABELS_APPLY = "Labels Apply page", u.LABELS_SIDE_MODAL = "Labels Side Modal", u.LABELS_ENDPOINT_MANAGEMENT = "Endpoint Management page", u.LABELS_OPERATION_DETAILS = "Operation Details page", u
				}({}),
				p = function(u) {
					return u.API_SHIELD = "API Shield", u.SECURITY_SETTINGS = "Security Settings", u
				}({}),
				y = function(u) {
					return u.OPERATIONS_TABLE_TOOLBAR = "Operations table toolbar", u.OPERATIONS_TABLE_OVERFLOW = "Operations table overflow", u.OPERATIONS_TABLE_ROW = "Operations table row", u.OPERATION_DETAILS_PAGE = "Operation details page", u
				}({}),
				t = function(u) {
					return u.UPSERT = "upsert", u.OVERWRITE = "overwrite", u
				}({}),
				r = function(u) {
					return u.SINGLE = "single", u.MULTIPLE = "multiple", u
				}({}),
				a = function(u) {
					return u.DISPLAY_LABELS_LIST_PAGE = "show a list of labels in the settings page", u.DELETE_LABEL = "delete a user label in the settings page", u.FILTER_USER_MANAGED_LABELS = "filter user/managed labels in the settings page", u.CREATE_LABEL_CLICKED = "click create label button in the settings page", u.BULK_APPLY_CLICKED = "click bulk apply button in the settings page", u.CONNECTED_ENDPOINTS_CLICKED = "click connected endpoints link in the settings page", u.DISPLAY_APPLY_LABELS_PAGE = "show the apply labels page", u.CLICK_LABELS_DOCUMENTATION_LINK = "click documentation link in the apply labels page", u.APPLY_OPERATIONS_TO_LABEL = "apply operations to label in the apply labels page", u.OPEN_LABELS_SIDE_MODAL = "open labels side modal", u.APPLY_LABELS_TO_OPERATION = "apply labels to operation(s) in the labels side modal", u.CREATE_NEW_LABEL = "create a new label", u
				}({});
			const l = ({
					name: u,
					product: E,
					category: A = "user journey",
					pageName: v,
					from: C,
					write_strategy: S,
					type: T,
					target: h
				}) => {
					o().sendEvent(u, c({
						category: A,
						pageName: v,
						product: E
					}, C ? {
						from: C
					} : {}, S ? {
						write_strategy: S
					} : {}, T ? {
						type: T
					} : {}, h ? {
						target: h
					} : {}))
				},
				i = () => {
					var u;
					return (u = Object.values(a)) === null || u === void 0 ? void 0 : u.flat()
				}
		},
		"../react/pages/home/alerts/config.tsx": function(G, _, n) {
			"use strict";
			n.d(_, {
				jk: function() {
					return A
				},
				w8: function() {
					return v
				}
			});
			var e = n("../../../../node_modules/@cloudflare/util-routes/es/index.js"),
				o = n("../react/pages/home/alerts/integrations/pagerduty/routes.ts"),
				c = n("../react/pages/home/alerts/integrations/webhooks/routes.ts"),
				f = n("../react/pages/home/alerts/integrations/redux/entities.ts");

			function s(C) {
				for (var S = 1; S < arguments.length; S++) {
					var T = arguments[S] != null ? Object(arguments[S]) : {},
						h = Object.keys(T);
					typeof Object.getOwnPropertySymbols == "function" && h.push.apply(h, Object.getOwnPropertySymbols(T).filter(function(I) {
						return Object.getOwnPropertyDescriptor(T, I).enumerable
					})), h.forEach(function(I) {
						g(C, I, T[I])
					})
				}
				return C
			}

			function g(C, S, T) {
				return S = d(S), S in C ? Object.defineProperty(C, S, {
					value: T,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : C[S] = T, C
			}

			function d(C) {
				var S = p(C, "string");
				return typeof S == "symbol" ? S : String(S)
			}

			function p(C, S) {
				if (typeof C != "object" || C === null) return C;
				var T = C[Symbol.toPrimitive];
				if (T !== void 0) {
					var h = T.call(C, S || "default");
					if (typeof h != "object") return h;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (S === "string" ? String : Number)(C)
			}
			const y = "Notifications",
				t = "notification",
				r = (0, e.BC)`/${"accountId"}`,
				a = (0, e.BC)`${r}/notifications`,
				l = (0, e.BC)`${a}/destinations`,
				i = (0, e.BC)`${a}/create`,
				u = (0, e.BC)`${i}/${"alertType"}`,
				E = (0, e.BC)`${a}/edit/${"alertId"}`,
				A = s({
					account: r,
					alerts: a,
					destinations: l,
					createAlert: i,
					createAlertWithSelection: u,
					editAlert: E
				}, o._j, c._j),
				v = s({
					alert: "accountAlert",
					alerts: "accountAlerts",
					availableAlerts: "availableAlerts",
					availableAlertsForProduct: "availableAlertsForProduct",
					alertsHistory: "accountAlertsHistory"
				}, f.w)
		},
		"../react/pages/home/alerts/integrations/pagerduty/routes.ts": function(G, _, n) {
			"use strict";
			n.d(_, {
				_j: function() {
					return g
				}
			});
			var e = n("../../../../node_modules/@cloudflare/util-routes/es/index.js");
			const o = (0, e.BC)`/${"accountId"}/notifications`,
				c = (0, e.BC)`${o}/pagerduty/connect`,
				f = (0, e.BC)`${o}/pagerduty/register`,
				s = (0, e.BC)`${o}/pagerduty`,
				g = {
					pagerDutyConnect: c,
					pagerDutyRegister: f,
					pagerDutyList: s
				};
			var d = null
		},
		"../react/pages/home/alerts/tracking.ts": function(G, _, n) {
			"use strict";
			n.d(_, {
				y: function() {
					return e
				}
			});
			let e = function(o) {
				return o.SECONDARY_DNS_NOTIFICATION_CREATE = "create secondary dns error notification", o.SECONDARY_DNS_NOTIFICATION_UPDATE = "update secondary dns error notification", o.SECONDARY_DNS_NOTIFICATION_DELETE = "delete secondary dns error notification", o
			}({})
		},
		"../react/pages/home/configurations/lists/tracking.ts": function(G, _, n) {
			"use strict";
			n.d(_, {
				y: function() {
					return e
				}
			});
			let e = function(o) {
				return o.CREATE_LIST = "create list", o.DELETE_LIST = "delete list", o.ADD_LIST_ITEM = "add list item", o.DELETE_LIST_ITEM = "delete list item", o
			}({})
		},
		"../react/pages/home/configurations/secondary-dns/tracking.ts": function(G, _, n) {
			"use strict";
			n.d(_, {
				Y: function() {
					return e
				}
			});
			let e = function(o) {
				return o.PEER_DNS_CREATE = "create peer server", o.PEER_DNS_UPDATE = "update peer server", o.PEER_DNS_DELETE = "delete peer server", o.ZONE_TRANSFER_ENABLE = "enable outgoing zone transfer", o.ZONE_TRANSFER_DISABLE = "disable outgoing zone transfer", o.ZONE_TRANSFER_SUCCESS = "successful outgoing zone transfer", o
			}({})
		},
		"../react/pages/home/domain-registration/bulk-transfer-util.ts": function(G, _, n) {
			"use strict";
			n.d(_, {
				AA: function() {
					return X
				},
				AN: function() {
					return ke
				},
				AY: function() {
					return ct
				},
				Am: function() {
					return v
				},
				B2: function() {
					return ee
				},
				BB: function() {
					return U
				},
				BF: function() {
					return le
				},
				BQ: function() {
					return pe
				},
				E8: function() {
					return Pe
				},
				Fl: function() {
					return dt
				},
				Fu: function() {
					return z
				},
				Gc: function() {
					return $e
				},
				Hc: function() {
					return xt
				},
				IO: function() {
					return ye
				},
				JK: function() {
					return He
				},
				K: function() {
					return I
				},
				LI: function() {
					return q
				},
				LX: function() {
					return we
				},
				L_: function() {
					return Je
				},
				Ly: function() {
					return Ut
				},
				M9: function() {
					return Oe
				},
				MR: function() {
					return B
				},
				Mj: function() {
					return L
				},
				NB: function() {
					return Lt
				},
				Oe: function() {
					return zt
				},
				Or: function() {
					return H
				},
				P5: function() {
					return We
				},
				PE: function() {
					return Fe
				},
				Pd: function() {
					return Ft
				},
				Pk: function() {
					return Ve
				},
				Pp: function() {
					return qe
				},
				Q1: function() {
					return R
				},
				Qr: function() {
					return De
				},
				Qv: function() {
					return Ge
				},
				Rp: function() {
					return jt
				},
				S7: function() {
					return gt
				},
				Sh: function() {
					return nt
				},
				Sl: function() {
					return ft
				},
				TZ: function() {
					return J
				},
				Tg: function() {
					return Ye
				},
				Tp: function() {
					return Se
				},
				Uy: function() {
					return St
				},
				Vw: function() {
					return Y
				},
				W3: function() {
					return j
				},
				WR: function() {
					return Ae
				},
				WX: function() {
					return W
				},
				XF: function() {
					return tt
				},
				Xb: function() {
					return me
				},
				Xc: function() {
					return Te
				},
				ZB: function() {
					return V
				},
				Zs: function() {
					return xe
				},
				_f: function() {
					return ue
				},
				_k: function() {
					return Ne
				},
				b4: function() {
					return Ie
				},
				c2: function() {
					return ie
				},
				cE: function() {
					return Bt
				},
				dh: function() {
					return ze
				},
				fE: function() {
					return Qe
				},
				g7: function() {
					return je
				},
				hO: function() {
					return et
				},
				hV: function() {
					return Dt
				},
				hk: function() {
					return C
				},
				hr: function() {
					return Le
				},
				it: function() {
					return Xe
				},
				j3: function() {
					return $t
				},
				jG: function() {
					return _e
				},
				jN: function() {
					return st
				},
				jo: function() {
					return Gt
				},
				k3: function() {
					return Wt
				},
				m8: function() {
					return x
				},
				nm: function() {
					return It
				},
				oW: function() {
					return Ot
				},
				oc: function() {
					return A
				},
				pH: function() {
					return w
				},
				pi: function() {
					return $
				},
				rI: function() {
					return P
				},
				s7: function() {
					return rt
				},
				sO: function() {
					return Ee
				},
				sg: function() {
					return lt
				},
				tB: function() {
					return E
				},
				tN: function() {
					return be
				},
				u_: function() {
					return Ht
				},
				vV: function() {
					return fe
				},
				vc: function() {
					return Ze
				}
			});
			var e = n("../../../../node_modules/lodash/lodash.js"),
				o = n.n(e),
				c = n("../../../../node_modules/moment/moment.js"),
				f = n.n(c),
				s = n("../../../common/util/types/src/api/domain.ts"),
				g = n("../../../../node_modules/@cloudflare/util-regex/es/index.js"),
				d = n("../react/utils/translator.tsx"),
				p = n("../react/utils/url.ts"),
				y = n("../react/pages/home/domain-registration/config.ts"),
				t = n("../react/pages/home/domain-registration/registrar.translations.ts"),
				r = n("../react/pages/home/domain-registration/types.ts");

			function a(m) {
				for (var b = 1; b < arguments.length; b++) {
					var oe = arguments[b] != null ? Object(arguments[b]) : {},
						he = Object.keys(oe);
					typeof Object.getOwnPropertySymbols == "function" && he.push.apply(he, Object.getOwnPropertySymbols(oe).filter(function(Me) {
						return Object.getOwnPropertyDescriptor(oe, Me).enumerable
					})), he.forEach(function(Me) {
						l(m, Me, oe[Me])
					})
				}
				return m
			}

			function l(m, b, oe) {
				return b = i(b), b in m ? Object.defineProperty(m, b, {
					value: oe,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : m[b] = oe, m
			}

			function i(m) {
				var b = u(m, "string");
				return typeof b == "symbol" ? b : String(b)
			}

			function u(m, b) {
				if (typeof m != "object" || m === null) return m;
				var oe = m[Symbol.toPrimitive];
				if (oe !== void 0) {
					var he = oe.call(m, b || "default");
					if (typeof he != "object") return he;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (b === "string" ? String : Number)(m)
			}

			function E(m) {
				return m.filter(b => b.isSelected).reduce((b, {
					fees: oe,
					isZoneEntitlementPresent: he
				}) => he || !(0, e.isNumber)(oe == null ? void 0 : oe.transfer_fee) ? b : b + (oe == null ? void 0 : oe.transfer_fee), 0)
			}

			function A(m) {
				return m.filter(b => b.registrar.toLowerCase() === "godaddy")
			}
			const v = "MMM D, YYYY";

			function C(m, b, oe, he) {
				var Me, Re, Et, pt, mt, _t, yt, vt, ht, Ct, bt, Tt;
				const Be = m[b.name];
				return a({
					name: b.name,
					zone: Be,
					entitlements: oe,
					registryCheck: he,
					nameservers: b.name_servers,
					isAvailable: b.available,
					lastKnownStatus: b.last_known_status,
					authCode: b.auth_code,
					isEnterpriseZone: (Be == null || (Me = Be.plan) === null || Me === void 0 ? void 0 : Me.legacy_id) === "enterprise",
					isActiveZone: (Be == null ? void 0 : Be.status) === "active",
					corResponsesPending: b.cor_responses_pending,
					isCorLocked: b.cor_locked,
					corLockedUntil: b.cor_locked_until ? f()(b.cor_locked_until).format(v) : null,
					isFullZone: (Be == null ? void 0 : Be.type) == r.xd.Full,
					isLocked: b.locked,
					registrar: b.current_registrar || y.JM,
					zoneId: Be == null ? void 0 : Be.id,
					currentExpiration: f()(b.expires_at).format(v),
					newExpiration: f()(b.expires_at).add(1, "year").format(v),
					lastEntitledAt: b.last_entitled_at ? new Date(b.last_entitled_at) : null,
					isZoneEntitlementPresent: Array.isArray(oe) && !!oe.find(Mt => Mt.id === y.g5 && Mt.allocation.value === !0),
					transferAuthCode: "",
					authCodeStatus: b.transfer_in && h(b.transfer_in) || r.BJ.Pending,
					autoTransferStatus: r._n.Pending,
					transferConditions: b.transfer_conditions,
					transferApiCallStatus: r.Yh.Pending,
					transferIn: b.transfer_in,
					transferOut: b.transfer_out,
					autoRenew: b.auto_renew === !0,
					lastTransferredAt: b.last_transferred_at,
					createdAt: b.created_at,
					paymentExpiresAt: f()(b.payment_expires_at).isValid() ? f()(b.payment_expires_at) : f()(b.expires_at).isValid() ? f()(b.expires_at) : "",
					contactIds: {
						[r.l2.Administrator]: (Re = b.contacts) === null || Re === void 0 || (Et = Re.administrator) === null || Et === void 0 ? void 0 : Et.id,
						[r.l2.Billing]: (pt = b.contacts) === null || pt === void 0 || (mt = pt.billing) === null || mt === void 0 ? void 0 : mt.id,
						[r.l2.Registrant]: (_t = b.contacts) === null || _t === void 0 || (yt = _t.registrant) === null || yt === void 0 ? void 0 : yt.id,
						[r.l2.Technical]: (vt = b.contacts) === null || vt === void 0 || (ht = vt.technical) === null || ht === void 0 ? void 0 : ht.id
					},
					landing: b.landing,
					whois: b.whois,
					emailVerified: b.email_verified,
					materialChanges: F(b.material_changes),
					corChanges: b.cor_changes ? U(Object.assign(a({}, T), b.cor_changes)) : {},
					registryStatuses: b.registry_statuses ? b.registry_statuses.split(",") : null,
					domainProtectionServices: {
						status: (Ct = b.domain_protection_services) === null || Ct === void 0 ? void 0 : Ct.status
					},
					deletion: {
						isDeletable: b == null || (bt = b.deletion) === null || bt === void 0 ? void 0 : bt.is_deletable
					},
					premiumType: b == null ? void 0 : b.premium_type,
					fees: b == null ? void 0 : b.fees
				}, b.domain_move && {
					domainMove: {
						ineligibilityReasons: (Tt = b.domain_move) === null || Tt === void 0 ? void 0 : Tt.ineligibility_reasons
					}
				}, b.actionable_metadata && {
					actionableMetadata: S(b.actionable_metadata)
				}, b.policies && {
					policies: a({}, b.policies.suspension && {
						suspension: {
							parked: b.policies.suspension.parked,
							parkingReason: b.policies.suspension.parking_reason,
							paymentExpired: b.policies.suspension.payment_expired
						}
					})
				})
			}

			function S(m) {
				return m.map(b => ({
					accountContext: b.account_context,
					createdAt: b.created_at,
					expiresAt: b.expires_at,
					sentAt: b.sent_at,
					status: b.status,
					type: b.type
				}))
			}
			const T = {
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

			function h(m) {
				switch (m.enter_auth_code) {
					case r.lW.OK:
						return r.BJ.Valid;
					case r.lW.NEEDED:
						return r.BJ.Pending;
					case r.lW.UNKNOWN:
						return r.BJ.Pending;
					case r.lW.REJECTED:
						return r.BJ.Error;
					case r.lW.TRYING:
						return r.BJ.Pending
				}
				return r.BJ.Pending
			}

			function I(m) {
				let b = m.extensions;
				(b == null ? void 0 : b.application_purpose) && (b == null ? void 0 : b.nexus_category) && (m.extensions = {
					nexusCategory: b.nexus_category,
					applicationPurpose: b.application_purpose
				});
				let oe = a({}, typeof m.id == "string" ? {
					id: m.id
				} : {}, {
					first_name: m.firstName,
					organization: m.organization,
					address: m.address1,
					city: m.city,
					state: m.state || "N/A",
					zip: m.zip,
					country: m.country,
					phone: m.phone,
					email: m.email,
					fax: "",
					last_name: m.lastName,
					address2: m.address2,
					email_verified: m.emailVerified
				}, m.extensions ? {
					extensions: {
						nexus_category: m.extensions.nexusCategory,
						application_purpose: m.extensions.applicationPurpose
					}
				} : {});
				return Ke(oe)
			}

			function F(m) {
				let b = [];
				const oe = {
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
				for (const he in m) {
					const Me = m[he],
						Re = oe[Me];
					b.push(Re)
				}
				return b
			}
			const M = m => {
				if (!m) return null;
				let b = m;
				return m.includes("C31") && (b = "C31"), m.includes("C32") && (b = "C32"), b
			};

			function U(m) {
				return a({}, typeof m.id == "string" ? {
					id: m.id
				} : {}, {
					firstName: m.first_name,
					organization: m.organization,
					address1: m.address,
					city: m.city,
					state: m.state,
					zip: m.zip,
					country: m.country,
					phone: m.phone.trim(),
					email: m.email.trim(),
					lastName: m.last_name,
					address2: m.address2,
					emailVerified: m.email_verified
				}, m.extensions ? {
					extensions: {
						nexusCategory: M(m.extensions.nexus_category),
						applicationPurpose: m.extensions.application_purpose
					}
				} : {})
			}

			function V(m = {}) {
				const b = {
					name: "",
					zoneId: "",
					zone: a({
						id: "",
						name: "",
						status: "pending",
						plan: a({
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
						}, m.zone && m.zone.plan || {}),
						type: r.xd.Full
					}, m.zone || {}),
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
					autoTransferStatus: r._n.Pending,
					transferAuthCode: "",
					authCodeStatus: r.BJ.Pending,
					transferApiCallStatus: r.Yh.Pending,
					transferConditions: a({
						eligible: !0,
						exists: !0,
						not_premium: !0,
						not_secure: !0,
						not_started: !0,
						not_waiting: !0,
						supported_tld: !0
					}, m.transferConditions || {}),
					transferIn: a({
						unlock_domain: r.lW.UNKNOWN,
						disable_privacy: r.lW.UNKNOWN,
						enter_auth_code: r.lW.UNKNOWN,
						approve_transfer: r.lW.UNKNOWN,
						accept_foa: r.lW.UNKNOWN,
						can_cancel_transfer: !1
					}, m.transferIn || {}),
					lastTransferredAt: "",
					paymentExpiresAt: "",
					contactIds: {},
					landing: {
						eligible: !1,
						enabled: !1
					},
					whois: {
						raw: "",
						privacy: !0
					},
					materialChanges: [],
					corChanges: {},
					registryStatuses: null,
					deletion: {
						isDeletable: !1
					},
					premiumType: r.Vs.Not_Premium,
					fees: null,
					policies: {
						suspension: {
							parked: !1,
							parkingReason: null,
							paymentExpired: !1
						}
					}
				};
				return Object.assign(b, m)
			}

			function R(m = {}) {
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
				}, m)
			}

			function z(m) {
				const b = y.Py.concat(y.ui).reduce((oe, he) => a({}, oe, {
					[he]: []
				}), {});
				return m.forEach(oe => {
					let he = te(oe.registrar);
					he in b || (he = y.ui), lt(oe.name) && (he = "uk"), b[he].push(oe)
				}), Object.keys(b).sort((oe, he) => oe.localeCompare(he)).map(oe => ({
					registrar: oe,
					domains: b[oe]
				})).filter(oe => oe.domains.length > 0)
			}

			function te(m) {
				return m == null ? void 0 : m.toLowerCase().replace(/\s|,|\./g, "")
			}

			function Y(m) {
				if (!m || !m.registrar) return "unknown";
				if (lt(m.name)) return "uk";
				const b = te(m.registrar);
				return b in y.gM ? b : "unknown"
			}
			const ce = [];

			function Q(m) {
				return ce.some(b => m.endsWith("." + b))
			}

			function ae(m) {
				return !m.isEnterpriseZone || !Array.isArray(m.entitlements) ? !1 : !!m.entitlements.find(({
					id: b,
					allocation: oe
				}) => b === y.g5 && oe.value === !0)
			}

			function $(m) {
				var b;
				const oe = [r.rj.CLIENT_HOLD, r.rj.SERVER_HOLD, r.rj.SERVER_TRANSFER_PROHIBITED, r.rj.PENDING_DELETE, r.rj.PENDING_TRANSFER, r.rj.CLIENT_TRANSFER_PROHIBITED];
				let he = !1,
					Me = null;
				return (b = m.registryStatuses) === null || b === void 0 || b.some(Re => {
					oe.includes(Re) && (Me = Re, he = !0)
				}), [he, Me]
			}

			function x(m, b = !1) {
				if (!m) return [!1, t.keys.cannot_transfer_default];
				if (m.zone.status !== "active") return [!1, t.keys.cannot_transfer_zone_not_active];
				if (!m.isFullZone && !ae(m)) return [!1, t.keys.cannot_transfer_zone_not_eligible];
				if (m.registrar === "Cloudflare") return [!1, t.keys.cannot_transfer_domain_on_cf];
				if (m.isAvailable) return [!1, t.keys.cannot_transfer_domain_available];
				if (!m.transferConditions) return [!1, t.keys.cannot_transfer_domain_transfer_conditions];
				if (!b && St(m == null ? void 0 : m.premiumType)) return [!1, t.keys.cannot_transfer_domain_premium];
				if (w(m)) return [!1, t.keys.cannot_transfer_domain_transfer_in_progress];
				let oe;
				for (oe in m.transferConditions)
					if (oe !== "not_premium" && !m.transferConditions[oe]) return [!1, t.keys.cannot_transfer_domain_transfer_conditions];
				if (Q(m.name)) return [!1, t.keys.cannot_transfer_domain_tld_not_supported];
				const [he, Me] = $(m);
				return he && Me ? [!1, t.keys.cannot_transfer_domain_registry_status[Me]] : [!0, ""]
			}

			function w(m) {
				var b, oe;
				return !!m.transferIn && !((b = m.transferConditions) === null || b === void 0 ? void 0 : b.not_started) && !!(lt(m.name) || ((oe = m.registryStatuses) === null || oe === void 0 ? void 0 : oe.includes(r.rj.PENDING_TRANSFER)))
			}

			function K(m) {
				return !!m.registrar && !!m.currentExpiration
			}

			function ee(m, b = !1) {
				const [oe] = x(m, b);
				return K(m) ? se(m) ? r.M5.InProgressOrOnCF : oe ? r.M5.Supported : r.M5.Unsupported : r.M5.Unknown
			}

			function ie(m) {
				return m.transferIn && [r.lW.REJECTED, r.lW.NEEDED].includes(m.transferIn.enter_auth_code) || !1
			}

			function B(m) {
				return m.registrar === "Cloudflare"
			}

			function P(m) {
				return !!(m == null ? void 0 : m.includes(r.rj.AUTO_RENEW_PERIOD))
			}

			function L(m) {
				return !!(m == null ? void 0 : m.includes(r.rj.PENDING_TRANSFER))
			}
			const D = "Invalid date";

			function H(m) {
				return m.newExpiration === D ? "Unavailable" : m.newExpiration
			}

			function J(m) {
				return m.currentExpiration === D ? "Unavailable" : m.currentExpiration
			}

			function X(m) {
				return m.substring(m.indexOf("."))
			}

			function me(m = "") {
				return m.indexOf(".") !== -1 ? m.substring(0, m.indexOf(".")) : m
			}

			function Le(m) {
				return m.map(b => b.name).map(b => X(b)).filter((b, oe, he) => !he.includes(b, oe + 1))
			}

			function Ie(m) {
				if (y.no) return [!0, ""];
				if (!B(m)) return [!1, r.ok.NotOnCF];
				if (m.isCorLocked) return [!1, m.corLockedUntil ? r.ok.CorLockedUntil : r.ok.CorLock];
				if (m.lastTransferredAt) {
					const b = f()(m.lastTransferredAt),
						oe = f().duration(f()().diff(b)).as("days"),
						he = lt(m.name);
					if (oe < (he ? 1 : 60)) return [!1, he ? r.ok.RecentTransferUK : r.ok.RecentTransfer]
				}
				if (m.createdAt) {
					const b = f()(m.createdAt);
					if (f().duration(f()().diff(b)).as("days") < 60) return [!1, r.ok.RecentCreation]
				}
				return [!0, ""]
			}

			function W(m) {
				return !!(y.Bc || m.transferOut)
			}

			function se(m) {
				return je(m) || B(m)
			}

			function be(m) {
				return !je(m) && B(m)
			}

			function je(m) {
				return !m || m.lastKnownStatus === "pendingTransfer" || m.lastKnownStatus === "transferFOAPending" || !B(m) && m.transferConditions && !m.transferConditions.not_started || !1
			}

			function Fe(m) {
				return !(Q(m.name) || m.transferConditions && !m.transferConditions.supported_tld)
			}

			function Ge(m) {
				return (m == null ? void 0 : m.includes("/")) ? !0 : m.split("").some(b => b.charCodeAt(0) > 123)
			}

			function Ve(m) {
				switch (m) {
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

			function Ze(m) {
				return f()(m.paymentExpiresAt).isBefore(f()())
			}

			function st(m) {
				return m.transferIn && m.transferIn.enter_auth_code === r.lW.REJECTED || !1
			}

			function He(m) {
				const b = ["CU", "KP", "IR", "SY"];
				return m.filter(oe => !b.includes(oe.code))
			}

			function Ye(m) {
				if (!!m) return `${m.charAt(0).toUpperCase()}${m.slice(1)}${m.charAt(m.length-1)==="."?"":"."}`
			}

			function Ke(m) {
				const b = {};
				for (const [oe, he] of Object.entries(m)) {
					if (he && typeof he == "string") {
						Object.assign(b, {
							[oe]: he.trim()
						});
						continue
					}
					Object.assign(b, {
						[oe]: he
					})
				}
				return b
			}

			function xe(m) {
				return f()(m).add(40, "days")
			}

			function Je(m) {
				const b = m.paymentExpiresAt || m.payment_expires_at,
					oe = xe(b);
				return f()().isBetween(b, oe)
			}

			function Qe(m) {
				var b;
				return !(m == null ? void 0 : m.registryStatuses) || !Array.isArray(m == null ? void 0 : m.registryStatuses) && !(0, e.isString)(m == null ? void 0 : m.registryStatuses) ? !1 : (b = m.registryStatuses) === null || b === void 0 ? void 0 : b.includes(r.rj.REDEMPTION_PERIOD)
			}

			function ze(m) {
				var b;
				return !(m == null ? void 0 : m.registryStatuses) || !Array.isArray(m == null ? void 0 : m.registryStatuses) && !(0, e.isString)(m == null ? void 0 : m.registryStatuses) ? !1 : (b = m.registryStatuses) === null || b === void 0 ? void 0 : b.includes(r.rj.PENDING_DELETE)
			}

			function qe(m) {
				return [".us"].includes(m)
			}

			function Xe(m) {
				return [".us"].includes(m)
			}

			function et(m) {
				switch (m) {
					case ".us":
						return ge();
					default:
						return []
				}
			}

			function j(m) {
				switch (m) {
					case ".us":
						return ne;
					default:
						return {}
				}
			}
			const ne = {
				[r.A9.P3]: [r.Fi.C11]
			};

			function ge() {
				return [{
					name: r.IP.application_purpose,
					label: r.rb.application_purpose,
					options: Object.entries(r.A9).map(([m, b]) => ({
						value: m,
						label: b
					})),
					display: {
						columns: 3,
						rowsOnDesktop: 3
					}
				}, {
					name: r.IP.nexus_category,
					label: r.rb.nexus_category,
					options: Object.entries(r.Fi).map(([m, b]) => ({
						value: m,
						label: b
					}))
				}]
			}

			function we(m, b, oe) {
				return b[b.length - 1][oe] === m[oe]
			}

			function De(m) {
				return Boolean(Object.keys(m).length === 0)
			}

			function le(m) {
				return f()().add(m, "year").format(v)
			}

			function ue({
				accountName: m
			}) {
				var b;
				const oe = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+/;
				return ((b = m.toLowerCase().match(oe)) === null || b === void 0 ? void 0 : b[0]) || ""
			}

			function fe(m) {
				return !!m.match(g.default.email)
			}

			function _e(m) {
				return m === "Registration banned zone error"
			}

			function Te(m) {
				return m == null ? void 0 : m.startsWith("Quote error")
			}

			function Oe(m) {
				return m == null ? void 0 : m.startsWith("Invalid acknowledgement")
			}

			function Ee(m) {
				return m === (0, d.ZP)(t.keys.registration_checkout_trademark_notice_error_message)
			}

			function Ne(m) {
				return m === "DNS conflict"
			}

			function Se(m) {
				return m === s.W7.PENDING_UPDATE
			}

			function $e(m) {
				return m ? Object.values(s.wR).filter(b => b !== s.wR.OFFBOARDED).includes(m) : !1
			}

			function rt(m) {
				return m ? [s.wR.LOCKED, s.wR.ONBOARDED, s.wR.ONBOARDING_INITIATED, s.wR.PENDING_REGISTRY_LOCK, s.wR.PENDING_REGISTRY_UNLOCK, s.wR.PENDING_UNLOCK_APPROVAL].includes(m) : !1
			}

			function at(m) {
				return m ? s.wR.UNLOCKED === m : !1
			}

			function k(m) {
				return m ? s.wR.LOCKED === m : !1
			}

			function q(m) {
				return m ? s.wR.PENDING_REGISTRY_LOCK === m : !1
			}

			function pe(m) {
				return m ? [s.wR.PENDING_REGISTRY_UNLOCK, s.wR.PENDING_UNLOCK_APPROVAL].includes(m) : !1
			}

			function ye(m) {
				var b;
				return !1
			}

			function Ae(m) {
				var b;
				return !1
			}

			function ke(m) {
				var b;
				return !1
			}

			function tt(m) {
				var b;
				return !1
			}

			function Pe(m) {
				var b;
				return !1
			}

			function Ot(m) {
				return Object.keys(s.wR).find(b => s.wR[b].toLowerCase() === m.toLowerCase())
			}

			function ct(m) {
				var b;
				const oe = (b = Ot(m)) === null || b === void 0 ? void 0 : b.toLowerCase();
				return oe ? t.keys.protection_status[oe] : t.keys.protection_status.unknown
			}

			function Nt(m) {
				return ["com", "net"].includes(m)
			}

			function dt(m) {
				const b = (0, p.pu)(m);
				return Nt(b) ? s.wR.PENDING_REGISTRY_LOCK : s.wR.LOCKED
			}

			function nt(m) {
				return (0, p.pu)(m) === "co" ? 5 : 10
			}

			function It(m, b) {
				return b ? 1 : (0, p.pu)(m) === "co" ? 5 : (0, p.pu)(m) === "org" ? 1 : 10
			}

			function lt(m) {
				return (0, p.pu)(m) === "uk"
			}

			function Bt(m) {
				return (0, p.pu)(m) === "us"
			}

			function jt(m) {
				return f()(m).isValid()
			}

			function Ut(m) {
				return ["app", "boo", "channel", "dad", "day", "dev", "esq", "foo", "how", "mov", "new", "nexus", "page", "phd", "prof", "rsvp", "soy"].includes(m)
			}

			function We(m) {
				return !!(m == null ? void 0 : m.id)
			}

			function Lt(m) {
				return m ? ["restorationPending", "restorationAuthFailure", "restorationFailure", "restorationSuccess", "restorationRenewPending", "restorationRenewFailure", "restorationRenewSettleFailure", "restorationRenewSuccess", "restorationPendingZoneCreate", "restorationPendingZoneActivate", "restorationFailedZoneCreate", "restorationFailedZoneActivate", "restorationZoneCreateSuccess", "restorationZoneActivateSuccess", "restorationSuccessWithoutReport"].includes(m) : !1
			}

			function Ft(m) {
				return m ? ["restorationAuthFailure", "restorationFailure", "restorationRenewFailure", "restorationRenewSettleFailure", "restorationRenewSuccess"].includes(m) : !1
			}

			function Dt(m) {
				var b;
				return (m == null ? void 0 : m.lastKnownStatus) ? (b = m.lastKnownStatus) === null || b === void 0 ? void 0 : b.includes("deletionIrredeemable") : !1
			}

			function St(m) {
				switch (m) {
					case r.Vs.NonStandard_NonStandard:
					case r.Vs.NonStandard_Standard:
					case r.Vs.Standard_Standard:
					case r.Vs.Standard_NonStandard:
						return !0;
					case r.Vs.Not_Premium:
					default:
						return !1
				}
			}

			function xt(m) {
				if (!m || !m.message) return r.OJ.DEFAULT;
				const {
					message: b
				} = m;
				switch (!0) {
					case b.includes("feature disabled"):
						return r.OJ.FEATURE_DISABLED;
					case b.includes("email unverified"):
						return r.OJ.EMAIL_UNVERIFIED;
					case b.includes("account blocked"):
						return r.OJ.ACCOUNT_BLOCKED;
					default:
						return r.OJ.DEFAULT
				}
			}

			function gt(m) {
				var b, oe;
				return !!(((b = m.policies) === null || b === void 0 || (oe = b.suspension) === null || oe === void 0 ? void 0 : oe.parked) && m.policies.suspension.parkingReason)
			}

			function $t(m) {
				var b, oe;
				return gt(m) && ((b = m.policies) === null || b === void 0 || (oe = b.suspension) === null || oe === void 0 ? void 0 : oe.parkingReason) === r.qK.EMAIL_VERIFICATION
			}

			function Wt(m) {
				var b, oe;
				return gt(m) && ((b = m.policies) === null || b === void 0 || (oe = b.suspension) === null || oe === void 0 ? void 0 : oe.parkingReason) === r.qK.TRUST_AND_SAFETY
			}

			function ft(m) {
				var b;
				return !((b = m.domainMove) === null || b === void 0 ? void 0 : b.ineligibilityReasons.length)
			}

			function zt(m) {
				var b, oe;
				return !!((b = m.domainMove) === null || b === void 0 || (oe = b.ineligibilityReasons) === null || oe === void 0 ? void 0 : oe.includes(r.rQ.DOMAIN_EXISTING_PENDING_REQUEST))
			}

			function wt(m) {
				var b;
				return (b = m.actionableMetadata) === null || b === void 0 ? void 0 : b.find(oe => oe.type === r.wg.DOMAIN_MOVE)
			}

			function Gt(m) {
				const b = wt(m);
				return (b == null ? void 0 : b.status) === "pending" && b.accountContext === r._5.GAINING
			}

			function Ht(m) {
				const b = wt(m);
				return (b == null ? void 0 : b.status) === "pending" && b.accountContext === r._5.LOSING
			}
		},
		"../react/pages/home/domain-registration/config.ts": function(G, _, n) {
			"use strict";
			n.d(_, {
				Bc: function() {
					return y
				},
				Hv: function() {
					return x
				},
				JM: function() {
					return c
				},
				Py: function() {
					return g
				},
				WK: function() {
					return r
				},
				g5: function() {
					return a
				},
				gM: function() {
					return s
				},
				gf: function() {
					return p
				},
				jk: function() {
					return $
				},
				no: function() {
					return t
				},
				uY: function() {
					return d
				},
				ui: function() {
					return f
				}
			});
			var e = n("../../../../node_modules/@cloudflare/util-routes/es/index.js"),
				o = n("../flags.ts");
			const c = "Unknown",
				f = "unknown",
				s = {
					godaddycomllc: "godaddycomllc",
					namecheap: "namecheap",
					enom: "enom",
					networksolutions: "networksolutions",
					"1&1internetse": "1&1internetse",
					uk: "uk"
				},
				g = Object.keys(s),
				d = !0,
				p = (0, o.J8)("registrar_mock_data") || !1,
				y = (0, o.J8)("registrar_mock_transfer_out") || !1,
				t = (0, o.J8)("registrar_show_unlock_ui") || !1,
				r = 250,
				a = "cf_registrar.enabled",
				l = "@abcABC1234567890123456",
				i = (0, e.BC)`/${"accountId"}`,
				u = (0, e.BC)`${i}/add-site`,
				E = (0, e.BC)`${i}/domains`,
				A = (0, e.BC)`${E}/action-center`,
				v = (0, e.BC)`${E}/${"zoneName"}`,
				C = (0, e.BC)`${v}/configuration`,
				S = (0, e.BC)`${v}/contacts`,
				T = (0, e.BC)`${E}/pricing`,
				h = (0, e.BC)`${E}/protection`,
				I = (0, e.BC)`${E}/register`,
				F = (0, e.BC)`${I}/checkout`,
				M = (0, e.BC)`${I}/checkout/${"token"}`,
				U = (0, e.BC)`${I}/success`,
				V = (0, e.BC)`${E}/tlds`,
				R = (0, e.BC)`${E}/transfer`,
				z = (0, e.BC)`${E}/transfer/${"zoneName"}`,
				te = (0, e.BC)`/registrar/accounts/verify_email`,
				Y = (0, e.BC)`/registrar/domains/verify_email`,
				ce = (0, e.BC)`/sign-up/registrar`,
				Q = (0, e.BC)`${E}/verify-email`,
				ae = (0, e.BC)`${i}/${"zoneName"}`,
				$ = {
					addSite: u,
					domains: E,
					domainsActionCenter: A,
					domainsDomain: v,
					domainsDomainConfiguration: C,
					domainsDomainContacts: S,
					domainsPricing: T,
					domainsProtection: h,
					domainsRegister: I,
					domainsRegisterCheckout: F,
					domainsRegisterCheckoutToken: M,
					domainsRegisterSuccess: U,
					domainsTlds: V,
					domainsTransfer: R,
					domainsTransferZone: z,
					registrarAccountsVerifyEmail: te,
					registrarDomainsVerifyEmail: Y,
					signup: ce,
					verifyEmail: Q,
					zone: ae
				},
				x = {
					domains: (0, e.BC)`/accounts/${"accountId"}/registrar/domains/${"domainName"}`
				}
		},
		"../react/pages/home/domain-registration/tracking.ts": function(G, _, n) {
			"use strict";
			n.d(_, {
				J: function() {
					return r
				},
				U: function() {
					return t
				}
			});
			var e = n("../../../../node_modules/moment/moment.js"),
				o = n.n(e),
				c = n("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				f = n.n(c),
				s = n("../react/pages/home/domain-registration/bulk-transfer-util.ts");

			function g(a) {
				for (var l = 1; l < arguments.length; l++) {
					var i = arguments[l] != null ? Object(arguments[l]) : {},
						u = Object.keys(i);
					typeof Object.getOwnPropertySymbols == "function" && u.push.apply(u, Object.getOwnPropertySymbols(i).filter(function(E) {
						return Object.getOwnPropertyDescriptor(i, E).enumerable
					})), u.forEach(function(E) {
						d(a, E, i[E])
					})
				}
				return a
			}

			function d(a, l, i) {
				return l = p(l), l in a ? Object.defineProperty(a, l, {
					value: i,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : a[l] = i, a
			}

			function p(a) {
				var l = y(a, "string");
				return typeof l == "symbol" ? l : String(l)
			}

			function y(a, l) {
				if (typeof a != "object" || a === null) return a;
				var i = a[Symbol.toPrimitive];
				if (i !== void 0) {
					var u = i.call(a, l || "default");
					if (typeof u != "object") return u;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (l === "string" ? String : Number)(a)
			}
			let t = function(a) {
				return a.REGISTER_DOMAIN_SEARCH_SUBMIT = "search domain", a.REGISTER_DOMAIN_SEARCH_SELECT_DOMAIN = "select domain from search", a.REGISTER_DOMAIN_CHECKOUT_SELECT_PAYMENT_OPTION = "select payment option", a.REGISTER_DOMAIN_CHECKOUT_PURCHASE = "click complete purchase button", a.REGISTER_DOMAIN_CHECKOUT_PURCHASE_ATTEMPT = "purchase attempt", a.REGISTER_DOMAIN_CHECKOUT_PURCHASE_COMPLETED = "purchase completed", a.REGISTER_DOMAIN_CHECKOUT_BILLING_COUNTRY_SELECT = "Billing address country select toggle", a.REGISTER_DOMAIN_CHECKOUT_BILLING_VERIFY_ADDRESS = "verify address", a.REGISTER_DOMAIN_CHECKOUT_BILLING_SELECT_PAYMENT_METHOD = "select payment method", a.REGISTER_DOMAIN_CHECKOUT_TMCH_DOMAIN_HAS_CLAIMS = "domain on cart has trademark claims", a.REGISTER_DOMAIN_CHECKOUT_TMCH_EXPAND_CLAIMS = "click expand trademark claims button", a.REGISTER_DOMAIN_CHECKOUT_TMCH_DISAGREE = "click disagree trademark claims button", a.REGISTER_DOMAIN_CHECKOUT_TMCH_AGREE = "click agree trademark claims button", a.REGISTER_DOMAIN_CHECKOUT_ERROR = "error registering domain", a.TRANSFER_DOMAIN_CHANGE_STEP = "Transfer Step", a.RENEW_DOMAIN_COMPLETED = "domain renewal completed", a.RESTORE_DOMAIN_INIT = "click to open domain restore modal", a.RESTORE_DOMAIN_CLOSE_RESTORE_MODAL = "click to close domain restore modal", a.RESTORE_DOMAIN_OPEN_ADD_PAYMENT_METHOD_MODAL = "open domain restore add payment method modal", a.RESTORE_DOMAIN_CLOSE_ADD_PAYMENT_METHOD_MODAL = "close domain restore add payment method modal", a.RESTORE_DOMAIN_FAILURE = "domain restore failed", a.RESTORE_DOMAIN_COMPLETED = "domain restore completed", a.DOMAIN_DELETE_INIT = "click to begin domain delete", a.DOMAIN_DELETE_COMPLETED = "domain deletion completed sucessfully", a.DOMAIN_DELETE_FAILURE_NO_PERMISSIONS = "domain deletion failed because user does not have permissions", a.DOMAIN_DELETE_FAILURE_INVALID_CONFIRMATION_CODE = "domain deletion failed because user submitted invalid confirmation code", a.DOMAIN_DELETE_FAILURE_UNKNOWN_REASON = "domain deletion failed for unknown reason", a.DOMAIN_DELETE_CONFIRM_DELETE = "click to delete domain", a.DOMAIN_DELETE_CLOSE_CONFIRM_MODAL = "click cancel and closes confirm modal", a.DOMAIN_DELETE_RESEND_CONFIRMATION_CODE = "click to re-send confirmation code", a.DOMAIN_DELETE_CLOSE_VERIFICATION_MODAL = "click cancel and closes verification modal", a.DOMAIN_DELETE_WARNING_MODAL_CONTINUE = "click to continue with domain deletion", a.DOMAIN_DELETE_CLOSE_WARNING_MODAL = "click cancel and closes warning modal", a
			}({});

			function r(a, l, i) {
				if (!(l == null ? void 0 : l.name)) return null;
				f().sendEvent(a, g({
					domain: {
						name: l.name,
						premium: (0, s.Uy)(l == null ? void 0 : l.premiumType),
						paymentExpiresAt: o()(l == null ? void 0 : l.paymentExpiresAt).format()
					},
					category: "registrar"
				}, i))
			}
		},
		"../react/pages/home/rulesets/ddos/tracking.ts": function(G, _, n) {
			"use strict";
			n.d(_, {
				F: function() {
					return e
				}
			});
			let e = function(o) {
				return o.TOGGLE_TCP_PROTECTION = "toggle advanced tcp protection", o.GET_TCP_PROTECTION_PREFIXES = "view tcp protection prefixes list", o.CREATE_TCP_PROTECTION_PREFIXES = "bulk create tcp protection prefixes", o.CREATE_TCP_PROTECTION_PREFIX = "create tcp protection prefix", o.UPDATE_TCP_PROTECTION_PREFIX = "update tcp protection prefix", o.DELETE_TCP_PROTECTION_PREFIX = "delete tcp protection prefix", o.DELETE_TCP_PROTECTION_PREFIXES = "bulk delete tcp protection prefixes", o.GET_TCP_PROTECTION_ALLOWLIST = "view prefixes in tcp protection allowlist", o.CREATE_TCP_PROTECTION_ALLOWLIST = "add prefix to tcp protection allowlist", o.UPDATE_TCP_PROTECTION_ALLOWLIST = "update tcp protection allowlist", o.DELETE_PREFIX_TCP_PROTECTION_ALLOWLIST = "delete prefix from tcp protection allowlist", o.DELETE_TCP_PROTECTION_ALLOWLIST = "delete all prefixes from tcp protection allowlist", o.GET_SYN_PROTECTION_RULE = "view syn protection rules list", o.GET_SYN_PROTECTION_RULES = "view syn protection rule", o.CREATE_SYN_PROTECTION_RULE = "create syn protection rule", o.UPDATE_SYN_PROTECTION_RULE = "update syn protection rule", o.DELETE_SYN_PROTECTION_RULE = "delete syn protection rule", o.GET_SYN_PROTECTION_FILTERS = "view syn protection filter list", o.GET_SYN_PROTECTION_FILTER = "view syn protection filter", o.CREATE_SYN_PROTECTION_FILTER = "create syn protection filter", o.UPDATE_SYN_PROTECTION_FILTER = "update syn protection filter", o.DELETE_SYN_PROTECTION_FILTER = "delete syn protection filter", o.GET_TCP_FLOW_PROTECTION_RULES = "view tcp flow protection rules list", o.GET_TCP_FLOW_PROTECTION_RULE = "view tcp flow protection rule", o.CREATE_TCP_FLOW_PROTECTION_RULE = "create tcp flow protection rule", o.UPDATE_TCP_FLOW_PROTECTION_RULE = "update tcp flow protection rule", o.DELETE_TCP_FLOW_PROTECTION_RULE = "delete tcp flow protection rule", o.GET_TCP_FLOW_PROTECTION_FILTERS = "view tcp flow protection filters list", o.GET_TCP_FLOW_PROTECTION_FILTER = "view tcp flow protection filter", o.CREATE_TCP_FLOW_PROTECTION_FILTER = "create tcp flow protection filter", o.UPDATE_TCP_FLOW_PROTECTION_FILTER = "update tcp flow protection filter", o.DELETE_TCP_FLOW_PROTECTION_FILTER = "delete tcp flow protection filter", o.GET_DNS_PROTECTION_RULES = "view dns protection rules list", o.GET_DNS_PROTECTION_RULE = "view dns protection rule", o.CREATE_DNS_PROTECTION_RULE = "create dns protection rule", o.UPDATE_DNS_PROTECTION_RULE = "update dns protection rule", o.DELETE_DNS_PROTECTION_RULE = "delete dns protection rule", o
			}({})
		},
		"../react/pages/hyperdrive/tracking.ts": function(G, _, n) {
			"use strict";
			n.d(_, {
				KO: function() {
					return d
				},
				L9: function() {
					return t
				},
				N3: function() {
					return y
				},
				zE: function() {
					return p
				}
			});
			var e = n("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				o = n.n(e);

			function c(r) {
				for (var a = 1; a < arguments.length; a++) {
					var l = arguments[a] != null ? Object(arguments[a]) : {},
						i = Object.keys(l);
					typeof Object.getOwnPropertySymbols == "function" && i.push.apply(i, Object.getOwnPropertySymbols(l).filter(function(u) {
						return Object.getOwnPropertyDescriptor(l, u).enumerable
					})), i.forEach(function(u) {
						f(r, u, l[u])
					})
				}
				return r
			}

			function f(r, a, l) {
				return a = s(a), a in r ? Object.defineProperty(r, a, {
					value: l,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : r[a] = l, r
			}

			function s(r) {
				var a = g(r, "string");
				return typeof a == "symbol" ? a : String(a)
			}

			function g(r, a) {
				if (typeof r != "object" || r === null) return r;
				var l = r[Symbol.toPrimitive];
				if (l !== void 0) {
					var i = l.call(r, a || "default");
					if (typeof i != "object") return i;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (a === "string" ? String : Number)(r)
			}
			let d = function(r) {
					return r.PURCHASE_WORKERS_PAID = "navigate to workers plan page", r.LIST_CONFIGS = "list hyperdrive configs", r.CREATE_HYPERDRIVE_CONFIG = "create hyperdrive config", r.VIEW_CONFIG_DETAILS = "view hyperdrive config details", r.UPDATE_CACHING_SETTINGS = "update hyperdrive config caching settings", r.DELETE_HYPERDRIVE_CONFIG = "delete hyperdrive config", r.CLICK_HYPERDRIVE_DOCUMENTATION = "click hyperdrive documentation", r.CLICK_GET_STARTED_GUIDE = "click hyperdrive get started guide", r.CLICK_CONNECTIVITY_GUIDES = "click hyperdrive connectivity guides", r.CLICK_QUICK_LINK = "click hyperdrive quick link", r
				}({}),
				p = function(r) {
					return r[r["connection string"] = 0] = "connection string", r[r.manual = 1] = "manual", r
				}({}),
				y = function(r) {
					return r[r.success = 0] = "success", r[r.failure = 1] = "failure", r
				}({});
			const t = (r, a = {}) => {
				o().sendEvent(r, c({}, a, {
					category: "Hyperdrive"
				}))
			}
		},
		"../react/pages/magic/constants.ts": function(G, _, n) {
			"use strict";
			n.d(_, {
				GF: function() {
					return a
				},
				H3: function() {
					return d
				},
				H8: function() {
					return s
				},
				J: function() {
					return i
				},
				Nz: function() {
					return p
				},
				UQ: function() {
					return E
				},
				Up: function() {
					return f
				},
				W8: function() {
					return y
				},
				Ws: function() {
					return A
				},
				Xg: function() {
					return r
				},
				_j: function() {
					return c
				},
				a4: function() {
					return l
				},
				jS: function() {
					return u
				},
				rF: function() {
					return g
				},
				rG: function() {
					return t
				}
			});
			var e = n("../../../../node_modules/@cloudflare/util-routes/es/index.js"),
				o = n("../react/utils/translator.tsx");
			const c = {
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
					tunnelHealthCheckTunnels: (0, e.BC)`/${"accountId"}/${"productName"}/tunnel-healthchecks/tunnels`,
					tunnelHealthCheckTunnelsList: (0, e.BC)`/${"accountId"}/${"productName"}/tunnel-healthchecks/tunnels/list`,
					tunnelHealthCheckTunnelsHighlight: (0, e.BC)`/${"accountId"}/${"productName"}/tunnel-healthchecks/tunnels/highlight`,
					tunnelHealthCheckTunnelsHighlightDetails: (0, e.BC)`/${"accountId"}/${"productName"}/tunnel-healthchecks/tunnels/highlight/${"tunnelId"}`,
					tunnelHealthCheckTunnelsDetails: (0, e.BC)`/${"accountId"}/${"productName"}/tunnel-healthchecks/tunnels/${"tunnelId"}`
				},
				f = () => [{
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
				s = v => [{
					value: "low",
					label: v("setting.low")
				}, {
					value: "mid",
					label: v("setting.medium")
				}, {
					value: "high",
					label: v("setting.high")
				}],
				g = v => [{
					value: "request",
					label: v("account.magic_transit.configuration.tunnels.table.health_check.target.request")
				}, {
					value: "reply",
					label: v("account.magic_transit.configuration.tunnels.table.health_check.target.reply")
				}],
				d = v => [{
					value: "unidirectional",
					label: v("account.magic_transit.configuration.tunnels.table.health_check.direction.unidirectional")
				}, {
					value: "bidirectional",
					label: v("account.magic_transit.configuration.tunnels.table.health_check.direction.bidirectional")
				}],
				p = "magic-transit",
				y = "magic-wan",
				t = "gre_tunnel",
				r = "ipsec_tunnel",
				a = 64,
				l = 1476,
				i = "mid",
				u = "reply",
				E = v => [{
					value: void 0,
					label: v("account.magic_transit.configuration.tunnels.table.filters.all.default")
				}, {
					value: "gre",
					label: v("account.magic_transit.configuration.gre_tunnels")
				}, {
					value: "mpls",
					label: v("account.magic_transit.configuration.interconnects.mpls_tunnels")
				}],
				A = v => [{
					value: "all",
					label: v("account.magic_transit.configuration.tunnels.table.filters.all.default")
				}, {
					value: "gre_tunnel",
					label: v("account.magic_transit.configuration.gre_tunnels")
				}, {
					value: "ipsec_tunnel",
					label: v("account.magic_transit.configuration.ipsec_tunnels")
				}]
		},
		"../react/pages/magic/network-monitoring/constants.ts": function(G, _, n) {
			"use strict";
			n.d(_, {
				_u: function() {
					return o
				},
				bK: function() {
					return e
				},
				lC: function() {
					return c
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
				c = "user journey"
		},
		"../react/pages/magic/overview/tracking.ts": function(G, _, n) {
			"use strict";
			n.d(_, {
				VZ: function() {
					return f
				},
				lC: function() {
					return c
				},
				r8: function() {
					return o
				},
				uB: function() {
					return s
				}
			});
			var e = n("../react/pages/magic/constants.ts");
			const o = {
					VIEW_ALERTS: "view alerts",
					VIEW_ALERTS_HISTORY: "view alerts history",
					MAGIC_OVERVIEW_ANALYTICS: "load magic overview analytics"
				},
				c = "user journey",
				f = {
					CREATE_SITE: "create new magic-wan site",
					CREATE_STATIC_ROUTE: "create new route",
					CREATE_TUNNEL: "create new tunnel"
				},
				s = {
					MAGIC_WAN: e.W8,
					MAGIC_TRANSIT: e.Nz,
					MAGIC_OVERVIEW: "Magic overview"
				}
		},
		"../react/pages/magic/packet-captures/constants.ts": function(G, _, n) {
			"use strict";
			n.d(_, {
				W_: function() {
					return o
				},
				X: function() {
					return e
				},
				lC: function() {
					return c
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
				c = "user journey"
		},
		"../react/pages/onboarding/components/AppleLogin/Images/Graphics.tsx": function(G, _, n) {
			"use strict";
			n.d(_, {
				gb: function() {
					return t
				},
				iP: function() {
					return F
				},
				xL: function() {
					return v
				},
				rD: function() {
					return U
				},
				oT: function() {
					return i
				},
				i2: function() {
					return V
				},
				x1: function() {
					return g
				},
				lW: function() {
					return p
				},
				UA: function() {
					return h
				},
				K5: function() {
					return a
				},
				Ii: function() {
					return S
				},
				PJ: function() {
					return M
				},
				bK: function() {
					return E
				}
			});
			var e = n("webpack/sharing/consume/default/react/react"),
				o = n.n(e),
				c = n("../../../../node_modules/@cloudflare/style-container/es/index.js"),
				f = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOwAAACGCAYAAADevGYoAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAABQKSURBVHgB7Z1djBzVlcdPdfeMxx2jDB7YxWBkY9mOyEMWg8co2l2zBgWCtKs1Jo5AK+KxRaJ9AWOUiIXd1Y4/WPZhZeywD/nYDY4deUb+SKxoMXkC40ghH048TpCtOBD3YAQEPJ7GY8/0TE/XzT3Vfbtu13RXV3dVdd26dX5Sa6q73ePxuP99zz3nf841AFl/urc7a24FBgMAbCkQBKEYLDczlVmVwcvu+aXXuVjvAIIg1KRkbINjq/KpeV/+1VP8LomVIBSFAeydObT6GF5nzLSxyag88e8PL4J/e/hmIAiilvy1WRi9NANnRqfgTG4S3v24fD16aRpahTGDizDNr1L8VoKUUXL707lPTWUG85V7Rvejp5h4avrgXUAQSSZIYfb1ZuCWm7qhpycN83syMDmVgp/9pggGzEIqNcO/lsAwmOv3SLH0bYXhVTlxP8PFnuev6cU7J89OwNrPXgcEoTs5LsAzuSl4l4sz99E0/JaL8rejk5CfLLX8vYQwF16fgcU3zbOu+/j1/J6U9fxkwYTjr12BX4x8AplUY5EuuaHb+rCoYrDthSFbrNZDXY+e2sND4q3igcfW9lmh8ZIb5wFBxB1ZmLhi4mr57sfTbQtz+dIeS5h9vV1zhCmDIv3duWvwi9NX4b0PZ2CK36/H2tsXwD18kUTdfWHXeRj9WAiWZ4WH+m9z/vlMmhX3mEb3P4pyzoGTY9YN97JfWbuQhEvEgqCEmeXiW1hZMRcv4qumJMxmtCNSoa+dRz+oihWj3rSZWVfvtVa+qeeRN5eakB4EI7VJfnLJjd3wxBf/Ep548C+AIKJG3l+OcjHiG/zk2att7S/9CFPGj0gFb5ybgPt3nq/e5ympbdND/XvqfR9DvpN55Fd/lzJSLzvNEyjc8orbBwQRNkEmflCYKMRbuCgxpG1XmDJBiFSAHzw1oTAz9s0M37W50d9t1Huw65FTA4Zh/AcJlwiTMDKyjRI/fglSpDKPfytnbUHLsFyKZdbJWWEnhts3ayTctbdfB//92GL4q6VZIIhmdDIjGyRhiVSAQkXBCnhtdqA4tOr7bq9xFazFwOne7sLsU+X9ba1wKaNMyESVkQ2SsEUqaDUUFjQXbIVGiSmEhJssVMjIBkmnRCqzcfc78ONTwr/EctmpzKr8sVX5Zq/zLFiBm3CpFKQPKmZkgyQKkQpe+slH8PX9F6v3TcbWzQ73n/Dy2pYFK7CEy7pehBSslx+nUlC8UD0jGyRRilSAH35rnj1nRyMG2z5zsH/Q6+vbFqyASkHxIE4Z2SBRQaQyK7f+rqmbyQ3fghVQKUgN4pqRDRLVRCpAN9Ouo+9X7zuN/V4ITLACt1LQ//7zEtrfBoQOGdkgUVWkAgyFV259y36gxVC4+jIIAyoFBYZuGdkgUV2kAtyOrHnunO0VZnCiOLx6XTvfKxzBVqBSkDd0z8gGSVxEKvP1A+/BS6/+qXKvuZvJjVAFK6BSUJkkZWSDJI4iFbTjZnKjI4IVuJWCdEpMJTUjGyRxFqmgXTeTGx0VrECXUhBlZINFB5HKtGrs90IkghXEpRREGdnw0E2kAmcoDCV4SEw+9EOkghWoUgqijGxn0FWkAqebCceUFodWPwUBoIRgLTpUCqKMbDToLlKZ/mfPWtujMt6N/V5QR7AVgioFUUY2epIkUkEQbiY3lBOswGspiDKyapFEkQqCcjO5oaxgBY1KQb3ZtPWVMrLRk2SRyvg19ntB+ZiuMPz5HP/ykLMU1EyoGMaiAOWMLF5n56dImAFAIq3F65hSvyi/wjpxZpTxnBJcHVcsnUeJn5AhkdanlTGlfomdYAWpL7+1j0H3JsZS8Pf39cA/3DcfiOAhkboThpvJjdguQybrPsFlayWkxsZNIIKDROodORS23EyQ3g4hEuO4sWsE7SPIex+0nngiaiGRto441kbAIDMYZAmnHvEVbLqQh1KXdUkrbHuQSNsHQ+GdUr0VQ+HicPtdOF6Jr2CHb8/BxrfRPdI7WWCAt2xPbLfkHYNEGgzY4yqHwtlCetsMhE/cU6mWYPFi7LIJ2ZvTQMyFRBosOKbUnimMiyt7KCjrYTPiLVgGIzzPvRQvL344C7eSYKuQSMMBQ2F5pjC6mYoH14xAh4i7YEdFYWpqikHSIZGGD5ZwbFguaOthM+ItWIPlRCn5YkIzxSTSzlFbwkFjfzhuJjdivsIauSSusCTSzoOhsNyFg6FwYSjcEk494i3YruKIKO1c/FDvFZZEGh3YESaHwtaY0qHOhsKCeAu20JOHrrJQdazFkkjVYNcPP6wp4aQhs7kI0RBvwR67Lc9rsTl+tRTvomj7ro93Jw6JVC3QyWTPFO6Mm8mN+Le0MF6LrexjMfEUR8GSSNUkKjeTGxr0oJlneL7uDryaLMQnLCaRqk+njf1e0ECwPFNcQfXSDok0PjiN/VAythUORRcKC+IvWKkWq2Jph0QaP5xuJmtMaQAzhYNAgxVWvTY7Emm8+dLud6QRRCzHSziBzBQOgvgLtgg5KJdiIy3tkEj1APet9kzhaNxMbsRfsOXSTiRtdiRSvVDFzeSGHpPKGKBF0coUh91mRyLVl6iN/V7QZbRgjt8swYbRZkci1Z9OjSn1iy4rbLXNLqh9LIk0OeCY0trjNXgoPKxWKCzQQ7Apk2eKyw6nIAR7+JUJ+OVIHgrTs3WfJ5HqA+5bvyofC8mMfdPDq0OZKRwEeozAN1PV8Rxjef+CfZd/2E5cy0LJ7Kn7PIqUxKoHc91MqcjdTG7oIVhss6sQxAqL34PxXw0Kdv3fLoIH7v50zfPogMEEBf5nE/ElijGlftFDsDhBsUIggpVW6a0be+Ff/ulmGBpcDncsz1Yfx09l3PfgAUj7ZQsbEQvqGvuHojX2e0GnU6Fy4sKPaOXXLuqzs803LeyCF59cAs9w8eK1AIWLeyASbryYO6Y0tQ1igD6CxQmKFfw0AVySBHtT39zy0Bd5eIyrbSPhfmHneevTm1CXKMeU+kWjFdb8RFyNjbcv2MvSaxe4HEsphLvpwRtrhHuSlwjwUN/HuXhJuOoR9ZhSv2gkWKP6S7/kI1Msv3bFrc2rXgMP3mCFyvUSUyhcfHOQcNUhDm4mN/QRrMGqIc3ly8HsYRfM9/brwRVWJKacwsXwC98ktL+NHhXGlPpFoxW2y97D+pigKAt2xa1d0ApCuN99ZhklphSjrrFf8RJOPfQRbNHOEvtpZJ8q2K+9rs2un+W3zHNNTKFw0Q5HdIZ6Y0rjFgoL9BEsttmVD8eyWuzaLe3UlHVu8NdE4JZRvp9nkykx1RnmjilNh3ZCetjoVIctt9lVmGxjlRX9tAjuX73uYZuBwsXEFGaUZURiioQbHqqNKfWLXoK1JiiWwTa7VmlkmggCXGExo1wvMYVvqjXPniOrY8DE1c3khmYrrNQE0EZILNdvF2TDmVohZ5T/+nPXVR/HGUJkdQyWuBn7vaCXYK02uzLtCdYOo1fc0lqGuFVQuLseX2ztbxc1SEx9/40xoEM02wPLaXPGlMY4FBboJVipza6dCYpj+fBXWCe4vz1YSUw5hfu1b+es5FTuo2kSbgtYJZwjdiiMY0pnFBlT6he9BCu12U0WWn+Lyz7iFYvDXWGdCOFiYmqRw+r4mafeslZdEq435o4pXa3MmFK/6CVYR5tdq6KV67cLstH8ajAxtbtidZTXeAzvULjf2H/REi5RH9XHlPpFsyyxRU5ctGqgqMkSLwxv8mIzRGLqYCWjLAsX92b3P38evvnqR2gAICR0cTO5oZ9gfbTZyY3rQZd12kEI9zvPLONJMHscDe5vv3HgIl9xK4kpEq5F3I39XtBRsKPispU2uzBrsH5BqyOKtlFiCoV74uxEove3zjGluoXCAv0Eax2OVaaVNrtmjesq4JZRfoCvLklNTJ2I0ZhSv2i4wtrHT7bSZue1cV0FULi7K1bHeokpIdwkkOP71q85x5QO9Ss7ptQv+glWKu200mbXauN61AirY73EFAr37ufOwQ4eJo5fVfvMXL/sPFLjZrqgg5vJDf0EW+hpy57YTuO6CsgZZbQ6CuFiHfJ5Hibe/a9ntU1MoYXzBz+tGVOqbSgs0E+w5Ta7nLjrVbR+GtdVQFgdd/Bbo8SUTlbHnLOEw4yX427s94KOdVj8qK2usl5LO0E0rqvA3/BVVnerI0YLX/3WaE0onC2knoYEoKdgpTa7yULrK6zfxnUVEBnlh+/p429w+7857lZH/HnRPHJSmtjBDLYhLmNK/aKpYO1MsZcVNqzG9SjBf82h167B/79pwmxpAZhmt3jYIq4ZZfxZ0TRSgcVtTKlf9BSsVIv1Yk9U2TTRDleumfDNI1dgL79NTDLrnKBZMzs+W8o+DczcBw7hxsXqiD/fA8/XuJku6OhmckPTFdaeoOilza4Tjeud4v1LJXhy72VrdZW4AMXineahz+6ZGV6zOcWKy/h7/zRUhBsHqyP+SI4xpSzFMvdBwtBTsOlCS6WdTjauhwX+C944U4At//Ux/OG9ov0wrqjFiTvhmN3JVBj+PLac3cmFuYWHIxdAEq6qVkcMhZ//YY2xf4fuJZx66CnYcptddYJisza7KBrXgwRXRAyBn/v2uBUCVxjnTzwNR1ZuhgYJmeLw6n0zQ3ctk4RroZrVcfzqbE0ozH/e15MWCgs0DYkt7FW2iUUxysZ1v7w/VoIn9o7NDYHBvBeOrPBk0UPhptjMvVwJ6BJSKjGFH0aOMaUX0pDeAglFX8HKbXZNJiiq0LjeDr/+/TQ8uWcMTp+393VgwI+sEPjwypYypxgmzwz3D+L+tl5iCoWLVsdOCxf/7v/5SXVMKYv7mFK/6CzYaptds0yxKo3rXsFV53uvTFjJpQ/GquE8s0LgQ8s3gI+aZFm45cSUU7hodcSMcqcSU/jhsMvet7LKmNL9kGD0FaxU2mlWi1Wtcd0NLNlgCPx/r1yVH77AFeQ5BPaCEK6J37dBYgq9vGHpFj8Q6owp3QEJR+MV1jZPuK2wcarBnr9Y5FngS3IIjDJ6nZdsUKwnIARmh/tPNEpM4d42DKujcDNJxn5m8r8/yaGwQF/Bemyzi0PjunAtbX7hkjME3g5Hlt8rl2zCAhNTXDbLyokpW7hhWB1HsYRjG/txsd2LHxxAaCxYxwTFRqjeuI4hMJZr0LUkMV4JgQehg/CkFHqmBssZZRM7Y+pnlH2cE4Tq3PhizZjSC7xmvA0IC53LOkhOXDQSrcqN6yIEPnmmID3KTqNrKawQuBl8b2vtb1NQGqgkpuYI935ew8X9Z6uJKeFmksaUJtLN5EZiBNso8aRi47oIgZ/kyaWaENg098DhFXd2IgRuhlO4eOYqSIkp7FWtJqY8CtfhZmI6jin1i96CZWbTCYqqNa47jfsVxvltCxxdqVxoKITLL9fVszpiiIzC/fGpvOv+toGxX+txL+2g+QprZ4obTVBUqXEdjfsYAte6lioh8OHl+0BheFLKSkwxxupmlDfufqdhYspp7GcGjFMoXB+9BSvVYhtNUFShcR3fsMffnLSM+3NC4OLVe1UIgb2Cwk1D0ZPVkVWefOPsRE0orPOYUr+oPx7QF9hmVxbAWJ0VVoXGdcu4f/SK0wuMWeAdPASO5bhODJM5uZ5H3hzkitxnQnoQjNRX+GNWCIPCxdtja/vgc0uyNdZDa0zp8Oq9QNRFb8EWedKpsi2tlyWO2jSBIfBz3xmX2+EQNO5vgCMrYz9FQRLuALDSYD3h8v8F6RXoZkon3s3kht4hcXmCYsM2uygb19G437B39XD8xSojElMmGANOq2MFhkkmnM1EobA7mofEgG+FHP88vwMvsc0ue7O9kkbRuI4h8MvHJ5xeYFbpXdV2Yj0yO9yPX06kHz21jH9dnzHhHmYYn+ab1pFPTWb2J2WQmh/0F6w1QTFlCRbb7G6VBdvhxnXsXf3PA/laL7BGIbBXSkOr8csx/tuvnopOSvVGAlbYVF6Mw3fuYzvZuI4h8As/+ETOApeN+7MTvtrhiGShv2BT5ojYqjsF24nGdQyBD79+zekFZlYWuMNeYCL+6C9Yk6+wFS06JyiG3bhuGfe/Oz43BGZsS1ReYCLe6C9YbLMrlcPdOVniEBvX0biPJZu5IXBxS5yMEIRa6C9YbLPb+LZ1iSsqijbbY4RWg8WPhMOv1QmBTXOvil5gIl4kIEtskeO3pXiB+1YUbBiN6xgCv3T0Chz/+ZT88DiYpS1w9DPHgCB8kgzB4gRFoyxYbLPruz4VeON6eeL+WG0IbBn3ZzdQCEwERUJWWPMTO1OMguoKrHFdhMDfOz4ht8OVQ+DSte1UsiGCJCGCNdCUsAmvhFCDaFzHEPjlV6/ONe4DPM33q/uAIAImGYI1WL7iN6+22fltXG9o3McJhhQCEyGRkBXWbrMTExTbbVzHV+GMpRcO5GtDYJxtNHttG4XARJgkQ7BSm51wN7XTuO7au6q5cZ9QA92HsJVxtNmh46nVxnUMgf0eOkUQfkmGYBEmTVB83y69eDFNiN7VIA6dIgg/JMU4AXKb3cg529vr1lbn2rt6mFZVovMkSLD2BMXzf7SPn2zUuE7GfUJFkiNYa4JieTWVmwDqrbCNe1fJuE9ES4JWWLu0IyM3rjc07lPvKqEIyRFsupAXbXYyonEdQ2BcVWvPsbFKNhsoBCZUITlZ4vJpdnNMDdi4ruKhUwRRjwSFxBYo2F75gZ9ykdY17lPvKqEg0R4m02m+9PaP+L94vcufKBv3FT/HhkguyVphGYw2/oii3lVCfZKzh0Wkw7EkYnnoFJFMErbCGjnHChvrQ6eI5JEswUoTFCGBE/eJ+JOskLjQg1libQ+dIgj92Pj2ABBETPkz3wbhzpWGUaIAAAAASUVORK5CYII=",
				s = n("../node_modules/@cloudflare/elements/es/index.js");
			const g = () => o().createElement(d, null, o().createElement("svg", {
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
				d = (0, c.createComponent)(({
					theme: R
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
				p = () => o().createElement(y, null, o().createElement("svg", {
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
				y = (0, c.createComponent)(({
					theme: R
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
				t = () => o().createElement(r, null, o().createElement(s.Ei, {
					alt: "airplane",
					src: f,
					width: "85%"
				})),
				r = (0, c.createComponent)(({
					theme: R
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
				a = () => o().createElement(l, null, o().createElement("svg", {
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
				l = (0, c.createComponent)(({
					theme: R
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
				i = () => o().createElement(u, null, o().createElement("svg", {
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
				u = (0, c.createComponent)(({
					theme: R
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
				E = () => o().createElement(A, null, o().createElement("svg", {
					width: "15",
					height: "15",
					viewBox: "0 0 15 15",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg"
				}, o().createElement("path", {
					d: "M7.05981 -0.000243833L0 7.05957L7.05981 14.1194L14.1196 7.05957L7.05981 -0.000243833Z",
					fill: "#6ECCE5"
				}))),
				A = (0, c.createComponent)(({
					theme: R
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
				v = () => o().createElement(C, null, o().createElement("svg", {
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
				C = (0, c.createComponent)(({
					theme: R
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
				S = () => o().createElement(T, null, o().createElement("svg", {
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
				T = (0, c.createComponent)(({
					theme: R
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
				h = () => o().createElement(I, null, o().createElement("svg", {
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
				I = (0, c.createComponent)(({
					theme: R
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
				F = () => o().createElement("svg", {
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
				M = () => o().createElement("svg", {
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
				U = () => o().createElement("svg", {
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
				V = () => o().createElement("svg", {
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
		"../react/pages/onboarding/components/AppleLogin/constants.ts": function(G, _, n) {
			"use strict";
			n.d(_, {
				A2: function() {
					return d
				},
				He: function() {
					return s
				},
				N$: function() {
					return g
				},
				Qq: function() {
					return c
				},
				ST: function() {
					return f
				},
				wM: function() {
					return o
				}
			});
			var e = n("../react/pages/onboarding/components/AppleLogin/Images/Graphics.tsx");
			const o = {
					PAGE: "apple-login"
				},
				c = "login-apple-jwt",
				f = "cf-test",
				s = {
					"1": "https://gateway.icloud.com/maildomainws/v1/ios/domain/purchaseAdd",
					"2": "https://gateway.icloud.com/maildomainws/v1/domain/purchaseAdd"
				},
				g = p => [{
					title: "apple.sign_in_with_apple.automatic_setup.title",
					description: "apple.sign_in_with_apple.automatic_setup.description",
					icon: e.iP
				}, {
					title: p ? "apple.sign_in_with_apple.customers_first.title" : "apple.sign_in_with_apple.privacy.title",
					description: p ? "apple.sign_in_with_apple.customers_first.description" : "apple.sign_in_with_apple.privacy.description",
					icon: p ? e.rD : e.PJ
				}, {
					title: "apple.sign_in_with_apple.impact.title",
					description: "apple.sign_in_with_apple.impact.description",
					icon: e.i2
				}],
				d = {
					apple: "applejwt",
					cf: "cfjwt"
				}
		},
		"../react/pages/page-rules/tracking.ts": function(G, _, n) {
			"use strict";
			n.d(_, {
				_: function() {
					return c
				},
				c: function() {
					return f
				}
			});
			var e = n("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				o = n.n(e);
			let c = function(s) {
				return s.TEMPLATE_SELECTED = "template selected", s.TEMPLATE_PRODUCT_SELECTED = "template product selected", s.TEMPLATE_SAVE_DRAFT = "template save draft", s.TEMPLATE_CANCEL = "template cancel", s.TEMPLATE_DEPLOY = "template deploy", s
			}({});
			const f = (s, g) => o().sendEvent(s, {
				template_name: g
			})
		},
		"../react/pages/pages/constants.ts": function(G, _, n) {
			"use strict";
			n.d(_, {
				A: function() {
					return E
				},
				C1: function() {
					return y
				},
				Dp: function() {
					return R
				},
				GF: function() {
					return U
				},
				HD: function() {
					return C
				},
				IK: function() {
					return s
				},
				L7: function() {
					return c
				},
				Li: function() {
					return u
				},
				Ni: function() {
					return I
				},
				OG: function() {
					return Q
				},
				QF: function() {
					return Y
				},
				QV: function() {
					return h
				},
				Sx: function() {
					return S
				},
				Ub: function() {
					return te
				},
				X3: function() {
					return r
				},
				aP: function() {
					return d
				},
				eO: function() {
					return a
				},
				fH: function() {
					return i
				},
				fQ: function() {
					return A
				},
				fR: function() {
					return e
				},
				hE: function() {
					return z
				},
				iS: function() {
					return v
				},
				ku: function() {
					return V
				},
				nY: function() {
					return T
				},
				w3: function() {
					return f
				},
				wJ: function() {
					return p
				},
				wp: function() {
					return l
				},
				yu: function() {
					return t
				},
				zF: function() {
					return M
				},
				zG: function() {
					return F
				}
			});
			const e = "api.pages.cloudflare.com",
				o = "cloudflare-workers-and-pages",
				c = {
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
				f = "Allow Members - Cloudflare Pages",
				s = 58,
				g = {
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
				d = "production",
				p = 2e3,
				y = 100,
				t = 350,
				r = 1e7,
				a = ["Success:", "Error:", "Failed:"],
				l = 10,
				i = "_headers",
				u = "_redirects",
				E = "_routes.json",
				A = "_worker.js",
				v = "do-a-barrel-roll",
				C = [i, u, E, A],
				S = 1024 * 1024 * 25,
				T = 1e3,
				h = {
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
				I = 1e5,
				F = 75e3,
				M = 2e5,
				U = 15e4,
				V = "workers",
				R = "cloudflare_pages_build_caching",
				z = 2;
			let te = function(ae) {
				return ae[ae.REPO_NOT_AUTHORIZED_FOR_INSTALLATION = 8000004] = "REPO_NOT_AUTHORIZED_FOR_INSTALLATION", ae[ae.INSTALLATION_NOT_FOUND = 8000008] = "INSTALLATION_NOT_FOUND", ae[ae.INSTALLATION_UNAUTHORIZED = 8000010] = "INSTALLATION_UNAUTHORIZED", ae[ae.INSTALLATION_LINK_NOT_FOUND = 8000011] = "INSTALLATION_LINK_NOT_FOUND", ae[ae.REPO_NOT_FOUND = 8000012] = "REPO_NOT_FOUND", ae[ae.INSTALLATION_SUSPENDED = 8000084] = "INSTALLATION_SUSPENDED", ae
			}({});
			const Y = 1,
				ce = 2,
				Q = 2
		},
		"../react/pages/pages/routes.ts": function(G, _, n) {
			"use strict";
			n.d(_, {
				Hv: function() {
					return c
				},
				_j: function() {
					return o
				}
			});
			var e = n("../../../../node_modules/@cloudflare/util-routes/es/index.js");
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
				c = {
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
				f = s => `${s.subdomain}.pages.dev`
		},
		"../react/pages/pipelines/tracking.ts": function(G, _, n) {
			"use strict";
			n.d(_, {
				KO: function() {
					return d
				},
				L9: function() {
					return y
				}
			});
			var e = n("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				o = n.n(e);

			function c(t) {
				for (var r = 1; r < arguments.length; r++) {
					var a = arguments[r] != null ? Object(arguments[r]) : {},
						l = Object.keys(a);
					typeof Object.getOwnPropertySymbols == "function" && l.push.apply(l, Object.getOwnPropertySymbols(a).filter(function(i) {
						return Object.getOwnPropertyDescriptor(a, i).enumerable
					})), l.forEach(function(i) {
						f(t, i, a[i])
					})
				}
				return t
			}

			function f(t, r, a) {
				return r = s(r), r in t ? Object.defineProperty(t, r, {
					value: a,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : t[r] = a, t
			}

			function s(t) {
				var r = g(t, "string");
				return typeof r == "symbol" ? r : String(r)
			}

			function g(t, r) {
				if (typeof t != "object" || t === null) return t;
				var a = t[Symbol.toPrimitive];
				if (a !== void 0) {
					var l = a.call(t, r || "default");
					if (typeof l != "object") return l;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (r === "string" ? String : Number)(t)
			}
			let d = function(t) {
					return t.LIST_PIPELINES = "list pipelines", t.CREATE_PIPELINE = "create pipeline", t.VIEW_PIPELINE = "view pipeline details", t.DELETE_PIPELINE = "delete pipeline", t.CLICK_PIPELINE_DOCUMENTATION = "click pipeline documentation", t.CLICK_GET_STARTED_GUIDE = "click pipeline get started guide", t.CLICK_QUICK_LINK = "click pipeline quick link", t
				}({}),
				p = function(t) {
					return t[t.success = 0] = "success", t[t.failure = 1] = "failure", t
				}({});
			const y = (t, r = {}) => {
				o().sendEvent(t, c({}, r, {
					category: "Pipelines"
				}))
			}
		},
		"../react/pages/r2/routes.ts": function(G, _, n) {
			"use strict";
			n.d(_, {
				Hv: function() {
					return c
				},
				Jg: function() {
					return g
				},
				_j: function() {
					return o
				},
				pZ: function() {
					return d
				},
				vF: function() {
					return s
				}
			});
			var e = n("../../../../node_modules/@cloudflare/util-routes/es/index.js");
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
				c = {
					canUnsubscribe: (0, e.BC)`/accounts/${"accountId"}/r2/canUnsubscribe`,
					defaultRegion: (0, e.BC)`/accounts/${"accountId"}/r2/defaultRegion`,
					buckets: (0, e.BC)`/accounts/${"accountId"}/r2/buckets`,
					bucket: (0, e.BC)`/accounts/${"accountId"}/r2/buckets/${"bucketName"}`,
					objects: (0, e.BC)`/accounts/${"accountId"}/r2/buckets/${"bucketName"}/objects`,
					object: (0, e.BC)`/accounts/${"accountId"}/r2/buckets/${"bucketName"}/objects/${"objectKey"}`,
					bucketUsage: (0, e.BC)`/accounts/${"accountId"}/r2/buckets/${"bucketName"}/usage`,
					bucketAccess: (0, e.BC)`/accounts/${"accountId"}/r2/buckets/${"bucketName"}/policy`,
					bucketCustomDomains: (0, e.BC)`/accounts/${"accountId"}/r2/buckets/${"bucketName"}/custom_domains`,
					bucketCustomDomain: (0, e.BC)`/accounts/${"accountId"}/r2/buckets/${"bucketName"}/custom_domains/${"domainName"}`,
					bucketCors: (0, e.BC)`/accounts/${"accountId"}/r2/buckets/${"bucketName"}/cors`,
					bucketEventConfig: (0, e.BC)`/accounts/${"accountId"}/event_notifications/r2/${"bucketName"}/configuration`,
					bucketEventConfigQueue: (0, e.BC)`/accounts/${"accountId"}/event_notifications/r2/${"bucketName"}/configuration/queues/${"queueId"}`,
					bucketLifecycle: (0, e.BC)`/accounts/${"accountId"}/r2/buckets/${"bucketName"}/lifecycle`,
					bucketMultipartUploads: (0, e.BC)`/accounts/${"accountId"}/r2/buckets/${"bucketName"}/uploads`,
					bucketSippy: (0, e.BC)`/accounts/${"accountId"}/r2/buckets/${"bucketName"}/sippy`,
					apiTokens: (0, e.BC)`/user/tokens`,
					apiToken: (0, e.BC)`/user/tokens/${"tokenId"}`,
					rollApiToken: (0, e.BC)`/user/tokens/${"tokenId"}/value`,
					permissionGroups: (0, e.BC)`/user/tokens/permission_groups`,
					zones: (0, e.BC)`/zones`
				},
				f = t => {
					const r = "r2.cloudflarestorage.com";
					switch (t) {
						case "default":
							return r;
						case "eu":
							return `eu.${r}`;
						case "fedramp":
							return `fedramp.${r}`
					}
				},
				s = (t, r) => {
					const a = f(r);
					return `https://${t}.${a}`
				},
				g = (t, r, a) => `${s(t,r)}/${a}`,
				d = () => "r2.dev",
				p = t => {
					const r = d();
					return `https://${t}.${r}`
				},
				y = (t, r) => `${p(t)}/${r}`
		},
		"../react/pages/security-center/BlockedContent/constants.ts": function(G, _, n) {
			"use strict";
			n.d(_, {
				Gk: function() {
					return a
				},
				LA: function() {
					return y
				},
				Wk: function() {
					return r
				},
				_V: function() {
					return d
				},
				c5: function() {
					return t
				},
				om: function() {
					return p
				}
			});
			var e = n("../react/pages/security-center/BlockedContent/types.ts"),
				o = n("../../../../node_modules/@cloudflare/component-responsive-table/es/index.js");

			function c(l) {
				for (var i = 1; i < arguments.length; i++) {
					var u = arguments[i] != null ? Object(arguments[i]) : {},
						E = Object.keys(u);
					typeof Object.getOwnPropertySymbols == "function" && E.push.apply(E, Object.getOwnPropertySymbols(u).filter(function(A) {
						return Object.getOwnPropertyDescriptor(u, A).enumerable
					})), E.forEach(function(A) {
						f(l, A, u[A])
					})
				}
				return l
			}

			function f(l, i, u) {
				return i = s(i), i in l ? Object.defineProperty(l, i, {
					value: u,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : l[i] = u, l
			}

			function s(l) {
				var i = g(l, "string");
				return typeof i == "symbol" ? i : String(i)
			}

			function g(l, i) {
				if (typeof l != "object" || l === null) return l;
				var u = l[Symbol.toPrimitive];
				if (u !== void 0) {
					var E = u.call(l, i || "default");
					if (typeof E != "object") return E;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (i === "string" ? String : Number)(l)
			}
			const d = "blocked-content-table-tooltip",
				p = {
					active: "red",
					in_review: "gray",
					pending: "orange",
					canceled: "gray"
				},
				y = ["phishing_interstitial", "malware_interstitial", "legal_block"],
				t = {
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
					filters: Object.values(e.GH).reduce((l, i) => c({}, l, {
						[i]: i
					}), {})
				};
			let a = function(l) {
				return l.COPY_URL = "copy blocked content url", l.REQUEST_REVIEW = "request blocked content review", l.ADD_FILTER = "Add filter", l.REMOVE_FILTER = "Remove filter", l
			}({})
		},
		"../react/pages/security-center/BlockedContent/types.ts": function(G, _, n) {
			"use strict";
			n.d(_, {
				$E: function() {
					return e
				},
				GH: function() {
					return c
				},
				M3: function() {
					return o
				},
				fL: function() {
					return f
				}
			});
			let e = function(g) {
					return g.Pending = "pending", g.Active = "active", g
				}({}),
				o = function(g) {
					return g.Active = "active", g.InReview = "in_review", g.Pending = "pending", g.Canceled = "canceled", g
				}({}),
				c = function(g) {
					return g.Domain = "domain", g.Status = "status", g.BlockType = "blockType", g
				}({}),
				f = function(g) {
					return g.EnforcementDate = "enforcementDate", g.BlockType = "blockType", g.Hostname = "hostname", g.Status = "status", g
				}({}),
				s = function(g) {
					return g.Removed = "removed", g.Misclassified = "misclassified", g
				}({})
		},
		"../react/pages/security-center/tracking.ts": function(G, _, n) {
			"use strict";
			n.d(_, {
				R: function() {
					return e
				},
				v: function() {
					return o
				}
			});
			let e = function(c) {
				return c.LOAD_SCAN_INFO = "load url scan information", c.INITIATE_URL_SCAN = "initiate url scan", c
			}({});
			const o = {
				MANAGE_INSIGHT: "manage security insight",
				BULK_ARCHIVE: "bulk archive security insights",
				EXPAND_INSIGHT_ROW: "expand security issue row",
				CLICK_RESOLVE_BUTTON: "click resolve security issue button",
				FOLLOW_RESOLVE_URL: "follow security issue resolve url",
				CLICK_SCAN_NOW: "run security scan",
				CLICK_EXPORT_INSIGHTS: "click export insights"
			}
		},
		"../react/pages/shared-config/sparrowEvents.tsx": function(G, _, n) {
			"use strict";
			n.d(_, {
				D: function() {
					return e
				}
			});
			let e = function(o) {
				return o.CLICK_MENU_ITEM_SHARE = "click on share item", o.CLICK_ON_CONFIGURE_SHARE_BUTTON = "click on configure share button", o.CLICK_ON_GO_TO_SOURCE_ACCOUNT = "click on go to source account", o.CLICK_ON_EDIT_SHARE_PERMISSION = "click on edit share permission", o.CLICK_ON_CLOSE_SHARE_MODAL = "click on close share modal", o.CLICK_ON_CANCEL_SHARE_MODAL = "click on cancel share modal", o.CLICK_ON_SHARE_BUTTON_SHARE_MODAL = "click on share button share modal", o.CLICK_GO_BACK_SHARE_MODAL = "click go back share modal", o.CLICK_ON_DEPLOY_BUTTON_SHARE_MODAL = "click on deploy button share modal", o.CLICK_ON_DELETE_RULESET = "click on delete ruleset", o.CLICK_ON_SHARE_TABLE_ROW = "click on share table row", o
			}({})
		},
		"../react/pages/spectrum/tracking.tsx": function(G, _, n) {
			"use strict";
			n.d(_, {
				N: function() {
					return e
				}
			});
			let e = function(o) {
				return o.IP_ADDRESS = "create spectrum app using IP address", o.CNAME = "create spectrum app using cname record", o.LB = "create spectrum app using load balancer", o.UPDATE_IP_ADDRESS = "update spectrum app using IP address", o.UPDATE_CNAME = "update spectrum app using cname record", o.UPDATE_LB = "update spectrum app using load balancer", o.DISABLE = "disable spectrum app", o
			}({})
		},
		"../react/pages/traffic/argo/tracking.ts": function(G, _, n) {
			"use strict";
			n.d(_, {
				V: function() {
					return e
				}
			});
			let e = function(o) {
				return o.ARGO_ENABLEMENT = "change argo enablement", o.ARGO_GEO_ANALYTICS_FETCH = "get argo geo analytics", o.ARGO_GLOBAL_ANALYTICS_FETCH = "get argo global analytics", o
			}({})
		},
		"../react/pages/traffic/load-balancing/tracking.ts": function(G, _, n) {
			"use strict";
			n.d(_, {
				Z: function() {
					return e
				}
			});
			let e = function(o) {
				return o.CREATE_AND_DEPLOY = "create load balancer", o.ANALYTICS = "read analytics", o
			}({})
		},
		"../react/pages/traffic/waiting-rooms/tracking.tsx": function(G, _, n) {
			"use strict";
			n.d(_, {
				N: function() {
					return e
				}
			});
			let e = function(o) {
				return o.CREATE = "create waiting room", o.UPDATE = "update waiting room", o.EVENTS = "view waiting rooms events", o.ANALYTICS = "view waiting room analytics", o.GENERATE_PREVIEW = "generate waiting room preview link", o
			}({})
		},
		"../react/pages/turnstile/tracking.ts": function(G, _, n) {
			"use strict";
			n.d(_, {
				N3: function() {
					return p
				},
				P: function() {
					return t
				},
				Xh: function() {
					return y
				}
			});
			var e = n("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				o = n.n(e);

			function c(r) {
				for (var a = 1; a < arguments.length; a++) {
					var l = arguments[a] != null ? Object(arguments[a]) : {},
						i = Object.keys(l);
					typeof Object.getOwnPropertySymbols == "function" && i.push.apply(i, Object.getOwnPropertySymbols(l).filter(function(u) {
						return Object.getOwnPropertyDescriptor(l, u).enumerable
					})), i.forEach(function(u) {
						f(r, u, l[u])
					})
				}
				return r
			}

			function f(r, a, l) {
				return a = s(a), a in r ? Object.defineProperty(r, a, {
					value: l,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : r[a] = l, r
			}

			function s(r) {
				var a = g(r, "string");
				return typeof a == "symbol" ? a : String(a)
			}

			function g(r, a) {
				if (typeof r != "object" || r === null) return r;
				var l = r[Symbol.toPrimitive];
				if (l !== void 0) {
					var i = l.call(r, a || "default");
					if (typeof i != "object") return i;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (a === "string" ? String : Number)(r)
			}
			const d = "TURNSTILE";
			let p = function(r) {
				return r.OVERVIEW_PAGE = "view the overview page", r.LIST_OF_WIDGETS = "list of widgets", r.SOLVE_EVENTS = "list solve events", r.REDIRECT_TO_ADD_WIDGET = "redirect to Add Widget page", r.REDIRECT_TO_ANALYTICS = "redirect to Analytics page", r.REDIRECT_TO_EDIT_PAGE = "redirect to Edit page", r.OPEN_DELETE_MODAL = "view the delete modal for one widget", r.OPEN_DELETE_MODAL_MULTIPLE = "view the delete modal for multiple widgets", r.DELETE_WIDGET = "delete successfully widgets", r.LIST_OF_HOSTNAMES = "list hostnames", r.OPEN_ADD_WIDGET_PAGE = "view page to add widget", r.FEEDBACK_ADD = "view Feedback Add", r.SAVE_WIDGET = "save widget", r.ROTATE_KEYS = "rotate keys", r.OPEN_ROTATE_KEYS_MODAL = "view the rotate keys modal", r.GET_WIDGETS = "get widget details", r.OPEN_ANALYTICS_PAGE = "view analytics page", r.ANALYTICS_DATA = "list the analytics data", r
			}({});
			const y = ({
					name: r,
					product: a = d,
					category: l = "user journey",
					page: i,
					additionalData: u = {}
				}) => {
					o().sendEvent(r, c({
						category: l,
						page: i,
						product: a
					}, u || {}))
				},
				t = () => {
					var r;
					return (r = Object.values(p)) === null || r === void 0 ? void 0 : r.flat()
				}
		},
		"../react/pages/welcome/routes.ts": function(G, _, n) {
			"use strict";
			n.d(_, {
				d: function() {
					return o
				}
			});
			var e = n("../../../../node_modules/@cloudflare/util-routes/es/index.js");
			const o = {
				default: (0, e.BC)`/${"accountId"}/`,
				addSite: (0, e.BC)`/${"accountId"}/add-site`,
				root: (0, e.BC)`/${"accountId"}/welcome`,
				websites: (0, e.BC)`/${"accountId"}/websites`
			}
		},
		"../react/pages/zoneless-workers/constants.ts": function(G, _, n) {
			"use strict";
			n.d(_, {
				$2: function() {
					return h
				},
				CI: function() {
					return S
				},
				IS: function() {
					return d
				},
				L7: function() {
					return s
				},
				Oj: function() {
					return a
				},
				QV: function() {
					return i
				},
				X$: function() {
					return v
				},
				X6: function() {
					return y
				},
				d4: function() {
					return l
				},
				fE: function() {
					return p
				},
				im: function() {
					return E
				},
				rL: function() {
					return t
				},
				wW: function() {
					return g
				}
			});

			function e(I) {
				for (var F = 1; F < arguments.length; F++) {
					var M = arguments[F] != null ? Object(arguments[F]) : {},
						U = Object.keys(M);
					typeof Object.getOwnPropertySymbols == "function" && U.push.apply(U, Object.getOwnPropertySymbols(M).filter(function(V) {
						return Object.getOwnPropertyDescriptor(M, V).enumerable
					})), U.forEach(function(V) {
						o(I, V, M[V])
					})
				}
				return I
			}

			function o(I, F, M) {
				return F = c(F), F in I ? Object.defineProperty(I, F, {
					value: M,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : I[F] = M, I
			}

			function c(I) {
				var F = f(I, "string");
				return typeof F == "symbol" ? F : String(F)
			}

			function f(I, F) {
				if (typeof I != "object" || I === null) return I;
				var M = I[Symbol.toPrimitive];
				if (M !== void 0) {
					var U = M.call(I, F || "default");
					if (typeof U != "object") return U;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (F === "string" ? String : Number)(I)
			}
			const s = {
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
						kvBindings: "https://developers.cloudflare.com/workers/runtime-apis/kv#kv-bindings",
						kvNamespaces: "https://developers.cloudflare.com/workers/reference/storage/namespaces/",
						kvMetrics: "https://developers.cloudflare.com/kv/observability/metrics-analytics/",
						envVars: "https://developers.cloudflare.com/workers/reference/apis/environment-variables/",
						api: "https://workers.cloudflare.com/docs/reference/tooling/api",
						scheduledEventListener: "https://developers.cloudflare.com/workers/runtime-apis/add-event-listener#scheduled-listener",
						errors: "https://developers.cloudflare.com/workers/platform/limits",
						cpuLimits: "https://developers.cloudflare.com/workers/platform/limits/#cpu-runtime",
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
				g = 800,
				d = "40rem",
				p = {
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
				y = {
					d1_included_capacity: 5e9,
					d1_included_read_count: 25e9,
					d1_included_write_count: 5e7,
					pricing: {
						storage: .75,
						read_units: .001,
						write_units: 1
					}
				},
				t = {
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
				a = {
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
					}, t),
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
				l = {
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
				i = {
					enableWorkers: "enable workers",
					setupSubdomain: "set up subdomain",
					selectPlan: "select workers plan",
					selectTemplate: "select workers template",
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
					clickedGlobalComputeSetting: "Workers:Clicked Global Compute Setting"
				},
				u = "workers.dev",
				E = "YYYY-MM-DD HH:mm:SS ZZ",
				A = "active",
				v = ["bundled", "unbound", "standard"],
				C = null,
				S = {
					observability: "workers-observability",
					previewUrls: "workers-preview-urls-enabled",
					workersBuildsSCMStatusGitHub: "workers-builds-scm-status-github",
					workersBuildsSCMStatusGitLab: "workers-builds-scm-status-gitlab"
				};
			let T = function(I) {
				return I[I.NONE = 0] = "NONE", I[I.MISS = 1] = "MISS", I[I.EXPIRED = 2] = "EXPIRED", I[I.UPDATING = 3] = "UPDATING", I[I.STALE = 4] = "STALE", I[I.HIT = 5] = "HIT", I[I.IGNORED = 6] = "IGNORED", I[I.BYPASS = 7] = "BYPASS", I[I.REVALIDATED = 8] = "REVALIDATED", I[I.DYNAMIC = 9] = "DYNAMIC", I[I.STREAM_HIT = 10] = "STREAM_HIT", I[I.DEFERRED = 11] = "DEFERRED", I
			}({});
			const h = [T.HIT, T.STREAM_HIT]
		},
		"../react/pages/zoneless-workers/routes.ts": function(G, _, n) {
			"use strict";
			n.d(_, {
				Hv: function() {
					return d
				},
				L: function() {
					return c
				},
				Q9: function() {
					return f
				},
				_j: function() {
					return s
				},
				ky: function() {
					return o
				}
			});
			var e = n("../../../../node_modules/@cloudflare/util-routes/es/index.js");
			const o = p => `${p}.workers.dev`,
				c = (p, y, t) => `${t?`${t}.`:""}${p}.${o(y)}`,
				f = (p, y, t) => `https://${c(p,y,t)}`,
				s = {
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
					serviceDetailsBuilds: (0, e.BC)`/${"accountId"}/workers/services/view/${"serviceId"}/${"environmentName"}/builds`,
					serviceDetailsBuildDetails: (0, e.BC)`/${"accountId"}/workers/services/view/${"serviceId"}/${"environmentName"}/builds/${"build_uuid"}`,
					serviceDetailsDeployments: (0, e.BC)`/${"accountId"}/workers/services/view/${"serviceId"}/${"environmentName"}/deployments`,
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
				g = "https://cron-triggers.cloudflareworkers.com",
				d = {
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
						repoConnections: (0, e.BC)`/accounts/${"accountId"}/builds/repos/connections`,
						repoConnection: (0, e.BC)`/accounts/${"accountId"}/builds/repos/connections/${"repo_connection_uuid"}`,
						triggers: (0, e.BC)`/accounts/${"accountId"}/builds/triggers`,
						trigger: (0, e.BC)`/accounts/${"accountId"}/builds/triggers/${"trigger_uuid"}`,
						purgeTriggerCache: (0, e.BC)`/accounts/${"accountId"}/builds/triggers/${"trigger_uuid"}/purge_build_cache`,
						triggerEnvironmentVariables: (0, e.BC)`/accounts/${"accountId"}/builds/triggers/${"trigger_uuid"}/environment_variables`,
						triggerEnvironmentVariable: (0, e.BC)`/accounts/${"accountId"}/builds/triggers/${"trigger_uuid"}/environment_variables/${"environment_variable_key"}`,
						workerTriggers: (0, e.BC)`/accounts/${"accountId"}/builds/workers/${"scriptTag"}/triggers`
					},
					certificates: (0, e.BC)`/zones/${"zoneId"}/ssl/certificate_packs/${"certId"}`,
					createApiToken: (0, e.BC)`/user/tokens`,
					createTail: (0, e.BC)`/accounts/${"accountId"}/workers/scripts/${"workerId"}/tails`,
					deleteApiToken: (0, e.BC)`/user/tokens/${"tokenId"}`,
					deleteTail: (0, e.BC)`/accounts/${"accountId"}/workers/scripts/${"workerId"}/tails/${"tailId"}`,
					deployments: (0, e.BC)`/accounts/${"accountId"}/workers/scripts/${"scriptName"}/deployments`,
					describeCron: `${g}/describe`,
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
					kvRequestMetrics: (0, e.BC)`/accounts/${"accountId"}/storage/analytics`,
					kvStorageMetrics: (0, e.BC)`/accounts/${"accountId"}/storage/analytics/stored`,
					newVersions: (0, e.BC)`/accounts/${"accountId"}/workers/scripts/${"scriptName"}/versions`,
					nextCron: `${g}/next`,
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
					validateCron: `${g}/validate`,
					versions: (0, e.BC)`/accounts/${"accountId"}/workers/deployments/by-script/${"scriptTag"}`,
					version: (0, e.BC)`/accounts/${"accountId"}/workers/deployments/by-script/${"scriptTag"}/detail/${"versionTag"}`,
					workersObservability: {
						telemetry: {
							query: (0, e.BC)`/accounts/${"accountId"}/workers/observability/telemetry/query`,
							keys: (0, e.BC)`/accounts/${"accountId"}/workers/observability/telemetry/keys`,
							values: (0, e.BC)`/accounts/${"accountId"}/workers/observability/telemetry/values`
						},
						usage: (0, e.BC)`/accounts/${"accountId"}/workers/observability/usage`,
						usageStatuses: (0, e.BC)`/accounts/${"accountId"}/workers/observability/usage-statuses`
					},
					workersScript: (0, e.BC)`/accounts/${"accountId"}/workers/scripts/${"scriptName"}`,
					workerScriptContent: (0, e.BC)`/accounts/${"accountId"}/workers/scripts/${"scriptName"}/content`,
					workerScriptSettings: (0, e.BC)`/accounts/${"accountId"}/workers/scripts/${"scriptName"}/settings`,
					workerUsageModel: (0, e.BC)`/accounts/${"accountId"}/workers/scripts/${"workerId"}/usage-model`,
					zones: (0, e.BC)`/zones`
				}
		},
		"../react/pages/zoneless-workers/utils/swrConfig.ts": function(G, _, n) {
			"use strict";
			n.d(_, {
				MN: function() {
					return c
				},
				Yg: function() {
					return s
				},
				i$: function() {
					return f
				},
				l3: function() {
					return g
				}
			});
			var e = n("webpack/sharing/consume/default/@cloudflare/util-http/@cloudflare/util-http"),
				o = n.n(e);
			const c = async ([d, p]) => (await e.post("/graphql", {
				headers: {
					"content-type": "application/json"
				},
				body: JSON.stringify({
					query: d,
					variables: p
				})
			})).body, f = async (...d) => (await e.get(...d)).body, s = d => async (p, y) => {
				const t = await fetch(p, y).then(r => r.json());
				return d.assertDecode(t)
			}, g = async (...d) => (await f(...d)).result;
			_.ZP = {
				fetcher: d => Array.isArray(d) ? g(...d) : g(d)
			}
		},
		"../react/shims/focus-visible.js": function() {
			(function(G, _) {
				_()
			})(this, function() {
				"use strict";

				function G() {
					var n = !0,
						e = !1,
						o = null,
						c = {
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

					function f(E) {
						return !!(E && E !== document && E.nodeName !== "HTML" && E.nodeName !== "BODY" && "classList" in E && "contains" in E.classList)
					}

					function s(E) {
						var A = E.type,
							v = E.tagName;
						return !!(v == "INPUT" && c[A] && !E.readOnly || v == "TEXTAREA" && !E.readOnly || E.isContentEditable)
					}

					function g(E) {
						E.getAttribute("is-focus-visible") !== "" && E.setAttribute("is-focus-visible", "")
					}

					function d(E) {
						E.getAttribute("is-focus-visible") === "" && E.removeAttribute("is-focus-visible")
					}

					function p(E) {
						f(document.activeElement) && g(document.activeElement), n = !0
					}

					function y(E) {
						n = !1
					}

					function t(E) {
						!f(E.target) || (n || s(E.target)) && g(E.target)
					}

					function r(E) {
						!f(E.target) || E.target.hasAttribute("is-focus-visible") && (e = !0, window.clearTimeout(o), o = window.setTimeout(function() {
							e = !1, window.clearTimeout(o)
						}, 100), d(E.target))
					}

					function a(E) {
						document.visibilityState == "hidden" && (e && (n = !0), l())
					}

					function l() {
						document.addEventListener("mousemove", u), document.addEventListener("mousedown", u), document.addEventListener("mouseup", u), document.addEventListener("pointermove", u), document.addEventListener("pointerdown", u), document.addEventListener("pointerup", u), document.addEventListener("touchmove", u), document.addEventListener("touchstart", u), document.addEventListener("touchend", u)
					}

					function i() {
						document.removeEventListener("mousemove", u), document.removeEventListener("mousedown", u), document.removeEventListener("mouseup", u), document.removeEventListener("pointermove", u), document.removeEventListener("pointerdown", u), document.removeEventListener("pointerup", u), document.removeEventListener("touchmove", u), document.removeEventListener("touchstart", u), document.removeEventListener("touchend", u)
					}

					function u(E) {
						E.target.nodeName.toLowerCase() !== "html" && (n = !1, i())
					}
					document.addEventListener("keydown", p, !0), document.addEventListener("mousedown", y, !0), document.addEventListener("pointerdown", y, !0), document.addEventListener("touchstart", y, !0), document.addEventListener("focus", t, !0), document.addEventListener("blur", r, !0), document.addEventListener("visibilitychange", a, !0), l(), document.documentElement.setAttribute("js-focus-visible-polyfill-available", "")
				}

				function _(n) {
					var e;

					function o() {
						e || (e = !0, n())
					} ["interactive", "complete"].indexOf(document.readyState) >= 0 ? n() : (e = !1, document.addEventListener("DOMContentLoaded", o, !1), window.addEventListener("load", o, !1))
				}
				typeof document != "undefined" && _(G)
			})
		},
		"../react/utils/bootstrap.ts": function(G, _, n) {
			"use strict";
			n.d(_, {
				$8: function() {
					return o
				},
				Ak: function() {
					return e
				},
				Hk: function() {
					return f
				},
				gm: function() {
					return c
				}
			});
			const e = () => {
					var s, g, d;
					return (s = window) === null || s === void 0 || (g = s.bootstrap) === null || g === void 0 || (d = g.data) === null || d === void 0 ? void 0 : d.security_token
				},
				o = () => {
					var s, g, d;
					return !!((s = n.g.bootstrap) === null || s === void 0 || (g = s.data) === null || g === void 0 || (d = g.user) === null || d === void 0 ? void 0 : d.id)
				},
				c = () => {
					var s, g;
					return !!((s = n.g.bootstrap) === null || s === void 0 || (g = s.data) === null || g === void 0 ? void 0 : g.is_kendo)
				},
				f = () => {
					var s, g, d, p;
					return (s = window) === null || s === void 0 || (g = s.bootstrap) === null || g === void 0 || (d = g.data) === null || d === void 0 || (p = d.user) === null || p === void 0 ? void 0 : p.primary_account_tag
				}
		},
		"../react/utils/cookiePreferences.ts": function(G, _, n) {
			"use strict";
			n.d(_, {
				O5: function() {
					return f
				},
				Xm: function() {
					return c
				},
				kT: function() {
					return d
				},
				wV: function() {
					return p
				}
			});
			var e = n("../../../../node_modules/cookie/index.js");
			const o = () => {
					var t;
					return ((t = window) === null || t === void 0 ? void 0 : t.OnetrustActiveGroups) || ""
				},
				c = () => (o() || "").indexOf("C0002") !== -1,
				f = () => (o() || "").indexOf("C0003") !== -1,
				s = () => (o() || "").indexOf("C0004") !== -1,
				g = () => (o() || "").indexOf("C0005") !== -1,
				d = t => {
					const r = ".cloudflare.com";
					document.cookie = `${t}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;domain=${r}`
				},
				p = () => {
					var t;
					const r = (t = window.OneTrust) === null || t === void 0 ? void 0 : t.getGeolocationData();
					return (r == null ? void 0 : r.country) || ""
				},
				y = () => parse(document.cookie)
		},
		"../react/utils/i18n.ts": function(G, _, n) {
			"use strict";
			n.d(_, {
				AI: function() {
					return S
				},
				Kd: function() {
					return r
				},
				S8: function() {
					return C
				},
				ZW: function() {
					return p
				},
				ay: function() {
					return T
				},
				fh: function() {
					return h
				},
				i_: function() {
					return a
				},
				th: function() {
					return d
				},
				ti: function() {
					return i
				}
			});
			var e = n("../../../../node_modules/moment/moment.js"),
				o = n.n(e),
				c = n("../../../common/intl/intl-types/src/index.ts"),
				f = n("../../../common/util/types/src/utils/index.ts"),
				s = n("../../../../node_modules/@cloudflare/util-cache/es/index.js"),
				g = n("../../../../node_modules/cookie/index.js");
			const d = "cf-sync-locale-with-cps",
				p = c.Q.en_US,
				y = "en_US",
				t = "cf-locale";

			function r() {
				const M = (0, g.parse)(document.cookie);
				return s.Z.get(t) || M[t] || null
			}

			function a(M) {
				document.cookie = (0, g.serialize)(t, M, {
					path: "/",
					maxAge: 31536e3
				}), s.Z.set(t, M)
			}

			function l() {
				document.cookie = serializeCookie(t, "", {
					path: "/",
					maxAge: 0
				}), cache.remove(t)
			}
			const i = M => (0, f.Yd)(c.Q).find(U => c.Q[U] === M) || y,
				u = [],
				E = [],
				A = [c.Q.de_DE, c.Q.en_US, c.Q.es_ES, c.Q.fr_FR, c.Q.it_IT, c.Q.pt_BR, c.Q.ko_KR, c.Q.ja_JP, c.Q.zh_CN, c.Q.zh_TW],
				v = {
					test: [...A, ...E, ...u],
					development: [...A, ...E, ...u],
					staging: [...A, ...E, ...u],
					production: [...A, ...E]
				},
				C = M => {
					const U = c.Q[M];
					return v.production.includes(U)
				},
				S = () => Object.keys(c.Q).filter(M => C(M)),
				T = M => {
					const U = c.Q[M];
					return E.includes(U)
				},
				h = M => I[M],
				I = {
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
				F = o().locale();
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
			}), o().locale(F)
		},
		"../react/utils/translator.tsx": function(G, _, n) {
			"use strict";
			n.d(_, {
				QT: function() {
					return l
				},
				Vb: function() {
					return d
				},
				Yi: function() {
					return y
				},
				ZP: function() {
					return g
				},
				_m: function() {
					return t
				},
				cC: function() {
					return r
				},
				oc: function() {
					return a
				}
			});
			var e = n("../../../../node_modules/@cloudflare/util-markdown/es/index.js"),
				o = n("../../../common/intl/intl-core/src/Translator.ts"),
				c = n("../../../common/intl/intl-react/src/index.ts"),
				f = n("../flags.ts");
			const s = new o.Z({
				pseudoLoc: (0, f.J8)("is_pseudo_loc")
			});

			function g(i, ...u) {
				return s.t(i, ...u)
			}
			const d = s;

			function p(i, ...u) {
				return markdown(g(i, u))
			}

			function y(i) {
				if (Number(i) !== 0) {
					if (i % 86400 == 0) return g("time.num_days", {
						smart_count: i / 86400
					});
					if (i % 3600 == 0) return g("time.num_hours", {
						smart_count: i / 3600
					});
					if (i % 60 == 0) return g("time.num_minutes", {
						smart_count: i / 60
					})
				}
				return g("time.num_seconds", {
					smart_count: i
				})
			}

			function t(i, u) {
				return i in u ? u[i] : void 0
			}
			const r = c.cC,
				a = c.oc,
				l = c.QT
		},
		"../react/utils/url.ts": function(G, _, n) {
			"use strict";
			n.d(_, {
				Ct: function() {
					return S
				},
				Fl: function() {
					return ee
				},
				KT: function() {
					return B
				},
				NF: function() {
					return u
				},
				Nw: function() {
					return v
				},
				Pd: function() {
					return A
				},
				Uh: function() {
					return x
				},
				Y_: function() {
					return i
				},
				e1: function() {
					return C
				},
				el: function() {
					return R
				},
				hW: function() {
					return te
				},
				pu: function() {
					return ie
				},
				qR: function() {
					return V
				},
				td: function() {
					return E
				},
				uW: function() {
					return ce
				}
			});
			var e = n("../../../../node_modules/query-string/query-string.js"),
				o = n.n(e),
				c = n("../../../../node_modules/@cloudflare/util-regex/es/index.js"),
				f = n("../react/pages/stream/routes.ts"),
				s = n("../react/pages/r2/routes.ts"),
				g = n("../react/pages/zoneless-workers/routes.ts"),
				d = n("../react/pages/pages/routes.ts");

			function p(P) {
				for (var L = 1; L < arguments.length; L++) {
					var D = arguments[L] != null ? Object(arguments[L]) : {},
						H = Object.keys(D);
					typeof Object.getOwnPropertySymbols == "function" && H.push.apply(H, Object.getOwnPropertySymbols(D).filter(function(J) {
						return Object.getOwnPropertyDescriptor(D, J).enumerable
					})), H.forEach(function(J) {
						y(P, J, D[J])
					})
				}
				return P
			}

			function y(P, L, D) {
				return L = t(L), L in P ? Object.defineProperty(P, L, {
					value: D,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : P[L] = D, P
			}

			function t(P) {
				var L = r(P, "string");
				return typeof L == "symbol" ? L : String(L)
			}

			function r(P, L) {
				if (typeof P != "object" || P === null) return P;
				var D = P[Symbol.toPrimitive];
				if (D !== void 0) {
					var H = D.call(P, L || "default");
					if (typeof H != "object") return H;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (L === "string" ? String : Number)(P)
			}
			const {
				endsWithSlash: a
			} = c.default, l = (P, L) => {
				const D = P.replace(a, "").split("/");
				return D.slice(0, 2).concat([L]).concat(D.slice(3)).join("/")
			}, i = () => window.location.hostname.includes("dash.staging.cloudflare") || window.location.hostname.includes("dash.cloudflare"), u = P => `/${P.replace(a,"").replace(/^\//,"")}`, E = P => v("add-site", P), A = P => v("billing", P), v = (P, L) => L ? `/${L}${P?`/${P}`:""}` : `/?to=/:account/${P}`, C = () => {
				const P = location ? location.pathname.match(/^\/([0-9a-f]{32})/) || location.pathname.match(/^\/a\/([0-9a-f]{32})/) : null;
				return P ? P[1] : null
			}, S = (P, L) => o().stringify(p({}, o().parse(P), L)), T = (P = "") => P.toString().replace(/([\/]{1,})$/, ""), h = ["/login", "/sign-up", "/two-factor", "/forgot-password", "/password-reset", "/forgot-email", "/login-help", "/profile", "/zones", "/organizations"], I = /^\/(\w*)\/(([^./]*\.[^./]*))+(\/.*)?/, F = /^\/(\w{32,})(\/[^.]*)?/, M = P => h.includes(P), U = P => !M(P), V = P => !M(P) && F.test(P), R = P => !M(P) && I.test(P), z = P => I.exec(P), te = P => {
				if (R(P)) return P.split("/").filter(L => L.length > 0)[1]
			}, Y = P => F.exec(P), ce = P => {
				if (V(P)) {
					const L = Y(P);
					if (L) return L[1]
				}
			}, Q = P => V(P) && P.split("/")[2] === "register-domain", ae = P => Q(P) ? P.split("/") : null, $ = P => {
				if (R(P)) {
					const [, , , L, D, H, J, X] = P.split("/");
					return L === "traffic" && D === "load-balancing" && H === "pools" && J === "edit" && X
				}
			}, x = P => {
				const L = ae(P);
				if (L) return L[3]
			}, w = (P, L) => {
				var D, H;
				return ((D = P.pattern.match(/\:/g)) !== null && D !== void 0 ? D : []).length - ((H = L.pattern.match(/\:/g)) !== null && H !== void 0 ? H : []).length
			}, K = [...Object.values(f.C), ...Object.values(s._j), ...Object.values(g._j), ...Object.values(d._j)].sort(w);

			function ee(P) {
				if (!U(P)) return P;
				for (const X of K)
					if (X.expression.test(P)) return X.pattern;
				const L = ae(P);
				if (L) {
					const [, , X, , ...me] = L;
					return `/:accountId/${X}/:domainName/${me.join("/")}`
				}
				if ($(P)) return "/:accountId/:zoneName/traffic/load-balancing/pools/edit/:poolId";
				const H = z(P);
				if (H) {
					const [, , , , X] = H;
					return `/:accountId/:zoneName${X||""}`
				}
				const J = Y(P);
				if (J) {
					const [, , X] = J;
					return `/:accountId${X||""}`
				}
				return P
			}

			function ie(P) {
				if (!!P) try {
					const D = P.split(".").pop();
					if (D && D.length > 0) return D
				} catch {}
			}

			function B(P, L = document.location.href) {
				try {
					const D = new URL(P),
						H = new URL(L);
					if (D.origin === H.origin) return `${D.pathname}${D.search}${D.hash}`
				} catch {}
			}
		},
		"../react/utils/zaraz.ts": function(G, _, n) {
			"use strict";
			n.d(_, {
				tg: function() {
					return e.tg
				},
				yn: function() {
					return e.yn
				}
			});
			var e = n("../utils/zaraz.ts")
		},
		"../utils/getDashVersion.ts": function(G, _, n) {
			"use strict";
			n.d(_, {
				p: function() {
					return c
				},
				t: function() {
					return o
				}
			});
			var e = n("../../../../node_modules/cookie/index.js");
			const o = () => {
					var f, s;
					return (f = window) === null || f === void 0 || (s = f.build) === null || s === void 0 ? void 0 : s.dashVersion
				},
				c = () => {
					var f;
					return ((0, e.parse)((f = document) === null || f === void 0 ? void 0 : f.cookie) || {}).CF_dash_version !== void 0
				}
		},
		"../utils/initSparrow.ts": function(G, _, n) {
			"use strict";
			n.d(_, {
				Wi: function() {
					return De
				},
				IM: function() {
					return we
				},
				yV: function() {
					return ne
				},
				Ug: function() {
					return j
				},
				v_: function() {
					return ge
				}
			});
			var e = n("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				o = n.n(e),
				c = n("../react/utils/bootstrap.ts"),
				f = n("../react/app/providers/storeContainer.js"),
				s = n("../react/common/selectors/languagePreferenceSelector.ts"),
				g = n("../flags.ts"),
				d = n("../../../../node_modules/cookie/index.js"),
				p = n("../react/utils/url.ts"),
				y = n("../react/common/selectors/zoneSelectors.ts"),
				t = n("../../../../node_modules/@cloudflare/util-en-garde/es/index.js"),
				r = n("../../../../node_modules/lodash-es/memoize.js"),
				a = n("../../../../node_modules/@cloudflare/gates-redux/dist/index.mjs"),
				l = n("../utils/getDashVersion.ts"),
				i = n("../react/common/selectors/accountSelectors.ts");

			function u(le) {
				for (var ue = 1; ue < arguments.length; ue++) {
					var fe = arguments[ue] != null ? Object(arguments[ue]) : {},
						_e = Object.keys(fe);
					typeof Object.getOwnPropertySymbols == "function" && _e.push.apply(_e, Object.getOwnPropertySymbols(fe).filter(function(Te) {
						return Object.getOwnPropertyDescriptor(fe, Te).enumerable
					})), _e.forEach(function(Te) {
						E(le, Te, fe[Te])
					})
				}
				return le
			}

			function E(le, ue, fe) {
				return ue = A(ue), ue in le ? Object.defineProperty(le, ue, {
					value: fe,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : le[ue] = fe, le
			}

			function A(le) {
				var ue = v(le, "string");
				return typeof ue == "symbol" ? ue : String(ue)
			}

			function v(le, ue) {
				if (typeof le != "object" || le === null) return le;
				var fe = le[Symbol.toPrimitive];
				if (fe !== void 0) {
					var _e = fe.call(le, ue || "default");
					if (typeof _e != "object") return _e;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (ue === "string" ? String : Number)(le)
			}
			const C = t.eg.exact(t.eg.object({
					_ga: t.eg.string.optional
				})),
				S = (0, r.Z)(le => {
					try {
						return C.assertDecode((0, d.parse)(le))
					} catch (ue) {
						return console.error(ue), {}
					}
				}),
				T = le => (ue, fe, _e) => {
					try {
						const Se = window.location.pathname,
							$e = (0, f.bh)().getState(),
							rt = S(document.cookie),
							at = u({
								page: (0, p.Fl)(_e.page || window.location.pathname),
								dashVersion: (0, l.t)()
							}, rt);
						if (ue === "identify") {
							var Te, Oe;
							const k = {
								gates: (0, a.T2)($e) || {},
								country: (Te = n.g) === null || Te === void 0 || (Oe = Te.bootstrap) === null || Oe === void 0 ? void 0 : Oe.ip_country
							};
							return le(ue, fe, u({}, at, k, _e))
						} else {
							const k = {
								accountId: (0, p.uW)(Se),
								zoneName: (0, p.hW)(Se),
								domainName: (0, p.Uh)(Se)
							};
							if ((0, p.qR)(Se)) {
								var Ee;
								const q = (0, i.D0)($e);
								k.isEntAccount = q == null || (Ee = q.meta) === null || Ee === void 0 ? void 0 : Ee.has_enterprise_zones
							}
							if ((0, p.el)(Se)) {
								var Ne;
								const q = (0, y.nA)($e);
								k.zoneId = q == null ? void 0 : q.id, k.plan = q == null || (Ne = q.plan) === null || Ne === void 0 ? void 0 : Ne.legacy_id
							}
							return le(ue, fe, u({}, at, k, _e))
						}
					} catch (Se) {
						return console.error(Se), le(ue, fe, _e)
					}
				},
				h = le => async (ue, fe, _e) => {
					try {
						return await le(ue, fe, _e)
					} catch (Te) {
						if (console.error(Te), !ge()) throw Te;
						return {
							status: "rejected",
							reason: Te
						}
					}
				};
			var I = n("../react/common/middleware/sparrow/errors.ts"),
				F = n("../react/pages/firewall/bots/tracking.ts"),
				M = n("../react/pages/caching/tracking.tsx"),
				U = n("../react/pages/turnstile/tracking.ts"),
				V = n("../react/pages/firewall/settings/resources/utils/index.ts"),
				R = n("../react/pages/magic/packet-captures/constants.ts"),
				z = n("../react/pages/firewall/page-shield/tracking.ts"),
				te = n("../react/pages/firewall/rulesets/tracking.tsx"),
				Y = n("../react/pages/traffic/waiting-rooms/tracking.tsx"),
				ce = n("../react/pages/spectrum/tracking.tsx"),
				Q = n("../react/pages/home/rulesets/ddos/tracking.ts"),
				ae = n("../react/pages/security-center/tracking.ts"),
				$ = n("../react/pages/firewall/api-shield/tracking.ts"),
				x = n("../react/pages/home/configurations/lists/tracking.ts"),
				w = n("../react/pages/traffic/load-balancing/tracking.ts"),
				K = n("../react/pages/home/alerts/tracking.ts"),
				ee = n("../react/pages/dns/dns-records/tracking.ts"),
				ie = n("../react/pages/home/configurations/secondary-dns/tracking.ts"),
				B = n("../react/pages/traffic/argo/tracking.ts"),
				P = n("../react/pages/magic/network-monitoring/constants.ts"),
				L = n("../react/pages/firewall/security-analytics/logs/constants.ts"),
				D = n("../react/pages/magic/overview/tracking.ts"),
				H = n("../react/pages/hyperdrive/tracking.ts"),
				J = n("../react/pages/pipelines/tracking.ts"),
				X = n("../react/pages/home/domain-registration/tracking.ts"),
				me = n("../react/pages/zoneless-workers/constants.ts"),
				Le = n("../react/pages/pages/constants.ts"),
				Ie = n("../react/pages/page-rules/tracking.ts"),
				W = n("../react/app/components/GlobalHeader/AddProductDropdown/index.tsx"),
				se = n("../react/pages/shared-config/sparrowEvents.tsx"),
				be = n("../react/pages/firewall/settings/cards/security-txt/helpers.ts"),
				je = n("../react/pages/security-center/BlockedContent/constants.ts");
			const Ge = ((le, ue, ...fe) => t.eg.union([t.eg.literal(le), t.eg.literal(ue), ...fe.map(_e => t.eg.literal(_e))]))("abort import", "Access Click", "Access click", "Access Promo Banner Click", "ack queue message", "ACM Purchase Success", "activate coveo recommended resource TSF (3.0)", "activate helperbot diagnostic TSF (3.0)", "Activity feed cancel download modal", "Activity feed close event", "Activity feed download from modal", "Activity feed download", "Activity feed expand event", "Activity feed expand matches", "Activity feed next page", "Activity feed open download modal", "Activity feed previous page", "Add API Discovery authorization headers", "Add column", "Add Configuration Rule Settings", "add cron trigger", "Add filter", "add jwt credentials", "add jwt configuration location", "add kv key-value", "Add insight", "Add cache rule setting", "add payment method", "Add site click", "add workers route", "added api shield schema", "Addon Purchase Success", "Advanced Certificate Manager click", "agree to terms", "Analytics Secondary Nav - Tab Click", "Analytics Time Period Change", "anonymizers found", "API documentation click", "apply recommendation", "argo enabled", "argo click", "argo smart routing click", "argo tiered caching click", "argo cancel modal submit feedback clicked", "argo cancel modal open state", "argo cancel modal clicked cancel", "Attempt TOTP reconfigure", "begin deployment log stream", "begin import flow", "begin log stream", "begin zone activation flow", "Billing address country select toggle", "Billing click", "Billing email update failure", "Billing email update success", "Billing invoice download failed", "Billing invoice download success", "brand protection", "bulk delete images", "bulk export images", "Button click", "Cache settings click", "Can not display filter - Unparsable filter", "Can not display filter - Unsupported Fields", "cancel add records later", "cancel addon purchase of automatic platform optimization", "cancel create database", "cancel disable totalTLS", "cancel import flow", "cancel form", "cancel notification create", "cancel notification delete", "cancel notification edit", "cancel notification test", "cancel onboarding flow", "cancel resizing after bundle buy", "cancel snippet form", "cancel source deletion", "cancel switch ca totalTLS", "cancel variant edit", "Canceled rule form", "Canceled subscription", "Certificate Patch click", "change api shield sequence rule config option", "change brand pattern filter", "change certificate authority totalTLS", "change chart time horizon", "Change dataset", "change default action api shield sv", "change DNS file upload error visibility", "change DNS setup method", "Change limit", "change metadata boundary", "change pagination page shield", "Change Plan Frequency", "change priority submitted", "change SSL recommender", "change tab", "Change time window", "change zone setting", "Change zone setup confirmation", "Change zone status confirmation", "change zone status", "chat submission form submit click", "check nameservers", "choose plan", "Continue adding domain", "copy script url page shield", "copy trace json", "Cipher Suites Link Click", "claim yubico promo offer", "click 2fa support token link", "click Account Home TSF (3.0)", "click add settings", "click add sources", "click api shield upsell link", "click api shield enable product button", "click api shield feedback link", "click api shield route", "click API snippet drawer", "click back to all policies link", "click block ai bots", "Click BM bots JS detection", "Click BM bot templates", "Click BM create firewall rule", "Click BM welcome card", "click bot settings", "click cancel downgrade", "click cancel free trial", "click cache reserve purchase", "click chat button", "click chat close modal", "click chat start", "click close callback request form", "click configure 2fa support app link", "click continue quick scan", "click continue to support TSF (3.0)", "click coveo recommended resource TSF (3.0)", "click create ai gateway", "click create load balancer", "click create project success resource", "click create project success next step", "Click Create Rule", "click create policy form link", "click create token from sidebar", "click create table button", "click database detail tab", "click deflect community TSF (3.0)", "click delete database button", "click delete table button", "Click Deploy Rule", "click dns completion wizard suggestion", "click dns email security configure", "click dns email security wizard record type", "click documentation link", "click edit policy", "click edge traffic visualisation link", "click enable argo button", "click end stream button", "click expand known issue", "click expand maintenance view", "click help drawer", "click helperbot diagnostic report TSF (3.0)", "click Hide Self Help Flow", "click learn more link", "click link to waf migration documentation", "click link", "click load more coveo content TSF (3.0)", "click load balancer step", "click login help forgot email selection", "click login help forgot password selection", "click login help lost two factor selection", "click multi-sku confirmation", "click on apply rule ai assistant", "click on close rule ai assistant", "click on edit snippet", "click on content_scanning", "click on exposed_credentials", "click on expand one sequence on api gateway sequences", "click on filter one sequence on api gateway sequences", "click on main filter api gateway sequences", "click on rule ai assistant", "click on view endpoint on api gateway sequences", "click Open a Ticket TSF (3.0)", "click open callback request form", "click payment details", "click plan documentation link", "click purchase ACM - totalTLS", "click refresh suggestions", "Click refresh transfer status", "click Request Live Chat TSF (3.0)", "click restore database button", "click save whois", "click scan again", "click select known issue", "click Self Help Flow Answer", "click Self Help Flow Close", "click Start Over TSF (3.0)", "click Start Self Help Flow", "click start stream button", "click submit callback request form", "click submit domain categorization feedback", "click submit feedback TSF (3.0)", "click subscribe system status", "click table insert data button", "click ticket submission form search result", "click ticket submission form suggestion", "click to create api shield portal", "click to create rate limiting rule for endpoint", "click to Trace link", "click Top N investigate", "click investigate icon", "click trace feedback form", "click TSF (2.0) community more help", "click TSF (2.0) new category", "click TSF (2.0) search result", "click TSF (2.0) step", "click TSF (2.0) suggested help link", "click TSF (2.0) suggestion", "Click query logs", "Click use custom sql", "Click use basic editor", "click update table data row button", "click Upgrade to Business Close", "click Upgrade to Business Start", "click Upgrade to Business Zone Selected", "Click view details", "click waf upgrade banner", "click domain registration link", "click Workers & Pages link", "click worker edit code", "click workers plan icon", "click wrangler cli guide link", "click full DNS setup docs link", "click partial DNS setup docs link", "click secondary DNS setup docs link", "click settings first deploy cta", "click custom domain first deploy cta", "click web analytics first deploy cta", "click start quick scan", "Click", "close chat window", "create migration", "create or update queue consumer", "create trace", "create queue", "create sink", "create trace", "enter summary TSF (3.0)", "reach chat end TSF (3.0)", "submit login help form submission", "toggle TSF (3.0)", "toggle snippet status", "close abort import modal", "close account select dropdown", "close bulk delete image modal", "close configuration switcher sidemodal", "close delete image modal", "close delete variant modal", "close domain switcher sidemodal", "close rename source modal", "close script modal page shield", "close zone select dropdown", "close support dropdown", "collapse row", "collapse sidebar nav", "Collapse top N", "Community page link click", "complete addon purchase of automatic platform optimization", "complete plan change from automatic platform optimization card", "Configuration Rules Link Click", "confirm add records later", "confirm api shield sequence rule config", "confirm auth code", "confirm disable totalTLS", "confirm DNS records", "confirm domain transfer purchase", "confirm source deletion", "confirm zone removal", "Confirm", "contentful banner displayed", "contentful banner dismissed", "continue billing flow", "continue import flow", "continue onboarding flow", "continue to final step", "continue to review step", "continue to overview", "continue to js snippet", "Continue", "Contract SS - Approver contact details cancel", "Contract SS - Approver contact details submit success", "Contract SS - Legal agreement cancel", "Contract SS - Legal agreement submit success", "Contract SS - Payment type cancel", "Contract SS - Payment type selected success", "Contract SS - Purchase cancel", "Contract SS - Purchase flow enter", "Contract SS - Purchase success", "copy account hash", "copy account id", "copy API snippet from drawer", "copy curl command", "copy delivery url", "copy image delivery url", "copy image id", "copy script url page shield", "copy snippet", "Create Bulk Redirect Rule", "create clone", "create application click workers docs", "create application click pages docs", "create application click create with CLI", "create application select workers", "create application select pages", "create default environments", "create database", "create environment", "create job", "create kv namespace", "create migration", "Create New Rule", "create new magic firewall rule", "create notification", "create pages deployment", "create pages deployment", "create pages project", "create pages project", "create r2 api token", "create r2 api token", "create r2 bucket", "create rate limiting rule", "create regional hostname", "create rule", "Create Rule (Save)", "Create Rule as Draft (Save as Draft)", "create service", "create table", "create worker from playground", "create worker select filter", "cancel create worker from playground", "create sink", "create source", "create snippet", "create snippet", "create user", "create variant", "create worker", "create zone", "Create, Update or Edit Save Failures (Builder)", "Create, Update or Edit Save Failures (Editor)", "CT Alerting Change", "Custom Hostname create click", "Custom Hostname create success", "Custom Hostname delete click", "Custom Hostname delete success", "Custom Hostname edit click", "Custom Hostname edit success", "Custom Hostname fallback origin add click", "Custom Hostname fallback origin delete click", "Custom Hostname fallback origin delete success", "Custom Hostname fallback origin edit click", "Custom Hostname fallback origin refresh", "Custom Hostname refresh click", "Custom Trust Store delete click", "Custom Trust Store delete success", "Custom Trust Store upload click", "Custom Trust Store upload success", "customer click URL in support ai chat", "customer close support ai chat", "Dashboard search closed", "Dashboard search opened", "Dashboard search result selected", "Dashboard search results empty", "Dedicated Certificates click", "Deep Link Cancel", "Deep Link Success", "delete api shield route", "delete brand pattern", "Delete click", "Delete confirmation", "delete custom error pages", "delete database", "delete environment", "delete image", "delete kv key-value", "delete kv namespace", "delete multiple selected table data rows", "delete notification", "delete pages project", "delete policy", "delete queue", "delete r2 api token", "delete r2 bucket", "delete r2 objects", "Delete Rule", "delete service", "delete site", "delete snippet", "delete snippet", "delete source", "delete table", "delete table data row", "delete variant", "deploy api shield portal", "deploy api shield route", "deploy policy", "deploy worker script", "deploy worker script", "deploy version", "Details click", "Dev Mode change confirm", "Dev Mode change", "develop with wrangler cli", "Diagnostic failure", "Diagnostic result", "disable page shield", "disable pages web analytics", "Disable Rule", "disable sidebar nav", "disable totalTLS", "dislike redirect in the same window", "dismiss notification", "dismiss recommendation", "dismiss yubico promo banner", "display recommendation module", "display recommendation", "display record wizard notification", "display self help flow", "display yubico promo banner", "display support ai chat", "DNS settings click", "download file", "download progress log", "download r2 object", "download tax doc", "draft new worker script", "edge traffic visualisation is shown", "edit contact information", "edit cron trigger", "edit environment", "Edit filter", "edit image", "edit kv key-value", "edit notification", "edit plan", "edit r2 api token", "edit registration details", "edit service environment variables", "edit service kv bindings", "edit service r2 bindings", "edit service to service bindings", "edit service mtls certificate bindings", "edit service tail consumers", "edit dispatch namespace bindings", "edit variant", "edit workers route", "Edit/Update Rule (Save)", "Enable automatic https rewrites click", "Enable Optimization", "enable or disable api shield sv", "enable page shield", "enable pages access policy", "enable pages web analytics", "Enable Rule", "enable sidebar nav", "enable totalTLS", "enable policy toggle", "enable versioning", "enable workers", "encrypt variable", "end WAF migration v2", "environment migrate forward", "environment migrate back", "enter domain search value", "enter icloud registrar", "enter summary TSF (3.0)", "Error adding or removing records", "Error Analytics link click", "Error when retrieving conflicting records", "error creating snippet", "Event Names", "execute console tab query", "exit onboarding guide", "expand account select dropdown", "expand directive", "expand domain details", "Expand measurement details", "expand row", "expand sidebar nav account selector", "expand sidebar nav zone selector", "expand sidebar nav", "Expand top N", "expand trace accordion", "expand zone select dropdown", "export instant logs", "export single image", "export trace results", "fail addon purchase of automatic platform optimization", "Failed to Switch to Editor", "failed pre-flight check", "Fetched template", "Filter rules", "filter search page shield", "filter search view all page shield", "filter snippet", "filter trace results", "Filter used", "filter workers and pages", "finish import flow", "finish loading gates and microfrontends", "finish onboarding guide later", "finish onboarding guide", "Firewall settings click", "Flow authorize", "Flow cancel", "follow contentful banner link", "follow docs link", "follow link to investigate external", "follow link to investigate", "follow link", "follow policy link", "follow recommendation CTA", "follow return to icloud link", "follow support link", "follow yubico promo banner", "follower icloud footer link", "Follow Trial Offer Link", "Free Long Wait", "get current bookmark id", "Get your API key click", "go back in billing flow", "go to next page", "go to page", "go to prev page", "hover score tooltip page shield", "hover to read risk identified tooltip", "hover to read threshold tooltip", "http worker editor tab", "identify", "image upload complete", "Initialization error", "Initialization success", "initiate addon purchase of automatic platform optimization", "initiate plan change from automatic platform optimization card", "initiate wordpress plugin installation for automatic platform optimization", "insert table data row", "interact with api shield sequence rule main table", "Interaction with Film Strip", "Interacton with Film Strip", "investigate threat search", "IP settings click", "launch icloud registrar onboarding", "launch onboarding guide", "launch sidebar nav survey", "launch teams dashboard", "launch zone overview", "list kv key-values", "list kv namespaces", "list pages projects", "list queues", "list r2 buckets", "list r2 objects", "Load Balancing click", "load web analytics overview", "Logpush Create Job - Open modal", "Logpush Create Job - Step Transition", "Logpush Create Job - Success", "Manage click", "manage pages members", "manage pages policies", "Map detail type changed", "Matches Entitlement Validation error", "migrate waf", "Mixed content notification test 2019-05-03 link click", "multi-sku purchase error", "multi-sku purchase success", "navigate back", "navigate footer nav", "navigate investigate sidebar nav", "navigate quick link", "navigate sidebar nav", "navigate to account", "navigate to api tokens", "navigate to appearance", "navigate to billing", "navigate to community forum", "navigate to community", "navigate to compliance docs", "navigate to contact support", "navigate to create first source", "navigate to documentation", "navigate to edit image", "navigate to enterprise customer portal", "navigate to filtered domains", "navigate to help center", "navigate to import detail", "navigate to images", "navigate to my activities", "navigate to logout", "navigate to previous onboarding guide task", "navigate to profile", "navigate to request feature", "navigate to request feature", "Navigate to speed test", "navigate to source detail", "navigate to variant detail", "navigate to version management through configuration sidemodal", "navigate to version management docs through configuration sidemodal", "navigate to WAF Migration Review configuration view", "navigate topbar", "navigate to tax docs", "Next onboarding guide section", "next page", "Notification dismissed", "Notification displayed", "Notification link click", "Notification load on page confirmation", "observe automatic platform optimization card", "Onboarding guide elapsed time", "open abort import modal", "open advanced waiting room sales link", "open alert modal page shield", "open argo subscription modal", "open blog post for automatic platform optimization", "open bot management lead generator link", "open bulk delete image modal", "open cancel downgrade modal", "open cancel free trial modal", "open configuration switcher sidemodal", "open create database page", "open create notification page", "open delete image modal", "open delete notification modal", "open delete variant modal", "open domain switcher sidemodal", "open edit notification page", "open hostname confirmation modal", "Open Trial Offer Modal", "open help documentation for automatic platform optimization", "open image preview", "open load balancing subscription modal", "Open Modal Enable Access", "open priority change modal", "open onboarding guide task manually", "open remove zone modal", "open rename source modal", "open script modal page shield", "open support dropdown", "open security center url categorization feedback", "open security center categorization tooltip", "open waiting room upsell modal", "open zone plan update modal", "Opened BrowserInsights tab", "opt-in to marketing emails", "Order click", "Order success", "Page Rules click", "pageview", "page load gate deflection TSF", "paginate kv key-values", "paginate kv namespaces", "paginate pages projects", "paginate queues", "paginate r2 buckets", "paginate r2 objects", "paginate services", "Pick validity period success", "Plan Purchase Confirmation", "Plan Purchase Failure", "Plan Purchase Success", "Plan Update Confirmation", "Plan Update Failure", "Plan Update Success", "preview live worker", "preview queue messages", "preview worker editor tab", "previous page", "Private keys in china toggle", "Product Purchase Cancel", "Product Purchase Failure", "Product Purchase Success", "Product Update Failure", "Product Update Success", "prompted to verify email", "promote version", "purchase domain transfer", "purchase images subscription", "Purge cache click", "purge everything from cache", "quick actions basic features modal close", "quick actions basic features modal open", "quick actions basic features activate selections", "Rate Limiting click", "Re-activate zone click", "Re-check nameservers click", "reach ticket end TSF (3.0)", "read kv key-value", "ready to update waf migration phase 2", "recheck zone for automatic platform optimization", "redirect chat", "register site", "Remove column", "Remove filter", "Remove insight", "remove item from checkout", "remove zone", "rename account", "rename service", "rename source", "Reprioritize certificate", "Request review click", "resend verification email", "restore database", "resume onboarding", "retry coveo search", "return to developer platform from modal", "return to developer platform from onboarding", "review onboarding guide task from summary", "review products", "request migrator capacity", "rollback version", "roll r2 api token", "Rule event", "Rule preview that was denied because of an unsupported field or operator", "Rule preview that was denied because of lack of data", "Rule preview that was denied due to error", "rules configured", "save contact information", "save and deploy load balancer", "save load balancer", "save load balancer as draft", "save onboarding guide task", "save payment details", "save registration details", "search auto fetch", "search d1 databases", "search kv key-values", "search kv namespaces", "search pages projects", "search queues", "search r2 buckets", "search r2 objects", "search services", "search source", "search table", "Search", "See more click", "select account", "select alert type page shield", "select category TSF (3.0)", "select change nameservers", "select directive default value", "select directive value", "select domain", "select d1 database", "select file", "Select hostname success", "select language", "select mp4 download checkbox", "select automatic deletion checkbox", "select notification type", "select onboarding bundle", "select page rules quantity", "select product", "select r2 plan", "select source", "select storage plan", "select table", "select task", "Select timeseries group by", "select transfer registrars", "Select type success", "select variant", "select version", "select queues plan", "select workers plan", "select workers template", "select zone plan", "select zone", "select summary in support ai chat", "Select", "Selected advanced GeoIP field in rule builder", "selected schema api shield portal", "send verification email", "send queue message", "Set Communication Preferences", "Set communication Preferences", "set page size", "set pages do bindings", "set pages environment variables", "set pages kv bindings", "set pages vectorize bindings", "set r2 bucket storage class", "set up custom domain", "set up subdomain", "Setting up", "show access key", "show notification", "show waf upgrade banner v2", "show waf upgrade banner", "showed api shield flyfishing page", "signed exchanges toggle", "Sign in to Area 1 button click", "Go to Zero Trust Email Security button click", "site configured", "skip onboarding guide section", "sort auto fetch", "sort column page shield", "sort queues", "sort r2 buckets", "sort services", "sort table", "sort workers and pages", "Speedheader - change your nameservers click", "Speedtest - Headless Chrome fetch returned error", "Speedtest - tests are completed", "Speedtest - Tests are running", "Speedtest - WPT tests failed", "SPF conflict resolution failure", "SSL click", "SSL Mode Change", "start import flow", "start import manually", "start subscription change", "start WAF migration v2", "start wizard", "Status page link click", "Stream click", "Stream Signup Success", "Stream Video Page Play", "Stream Video Upload Failure", "Stream Video Upload Success", "Stream navigate away from videos page", "Stream Video Upload with link", "Stream video caption uploaded", "Stream video caption deleted", "Stream video caption downloaded", "Stream video caption generating", "Stream video caption regenerating", "submit brand pattern", "submit grotto chat feedback", "submit DNS email security wizard failure", "submit DNS email security wizard", "submit DNS entry method", "submit domain name", "submit login form", "submit login help form submission", "submit new grotto chat request", "submit new support ai chat request", "submit order", "submit signup form", "Successful flow and user redirected", "Successful rule preview", "Suggestions query confirmation", "suggest category tsf (3.0)", "suggest category displayed tsf (3.0)", "Marketing banner dismissed", "Survey banner closed", "Marketing banner shown", "Survey banner shown", "Survey opened", "switch DNS entry method", "Switch from Editor and Discarded Changes", "Switch to expression editor", "Test", "test notification", "Ticket form step click", "Ticket submission form button click", "Ticket submission form submit click", "Time range changed", "Toast dismiss click", "Toast load on page confirmation", "toggle advanced options", "Toggle API discovery", "toggle automatic platform optimization feature", "toggle cache by device type", "toggle flexible variants", "toggle key", "toggle recommendation module", "toggle TSF (3.0)", "Toggle user level audit logs", "Toggled injection", "trace user jorney", "transfer DNS records", "transformations disabled for zone", "transformations enabled for zone", "Trial Offer Displayed", "Trial Started", "Trial Cancelled", "tried to register unavailable domain", "tried to remove zone of a domain registered on cloudflare registrar", "Under Attack Mode change", "undo restore database", "update custom error pages", "update job", "update jwt configuration", "update jwt rule", "update magic firewall rule", "update pages project", "update rule", "update site", "update table data row", "upgrade unique transformations config", "upgrade stream subscription", "upgrade resizing to new stream subscription", "Upload custom click", "Upload custom confirmation", "upload custom error pages", "upload DNS file", "upload image", "Upload keyless click", "Upload keyless confirmation", "Upload list item CSV", "update snippet", "upload r2 objects", "use multiselect api shield sv", "use overflow api shield sv", "use spacebar to pause", "use spacebar to play", "User has recommended optimisations", "User navigated by zone navigation", "Use template", "USSL Certificate Authority: Changed", "USSL Certificate Authority: Modal Launch", "validate spf content", "Validation method change", "Validation success", "verified email successfully", "verify email", "view accounts", "view checkout complete purchase", "View click", "view custom error pages", "view documentation", "view downgrade offer", "view downgrade survey", "view downgrade warning", "view onboarding guide recommendations", "view snippet", "view plan", "view system status", "Viewed Global API Key", "Viewed Origin CA Key", "visit workers developer docs", "visit workers showcase", "visit workers templates", "web analytics upgrade plan click", "WHOIS link click", "Workers:Enablement", "Zap:Opt in", "Zap:Opt out", "zones table click", "Zone setup change", "Bots Report Data", "Information Toast Shown", "Information Toast Closed", "quick edit http tab", "quick edit preview tab", "quick edit schedule tab", "quick edit wrangler tab", "visit product documentation", "visit blog post", "visit recent", "visit blog announcements", "click application name", "click change compute setting", "click change subdomain", "click discover card call to action", "click discover card view products", "click welcome card call to action", "click welcome card view products", "click create application", "click connect to git", "click featured product call to action", "click paygo card cta", "click opt-in", "click opt-out", "click close opt out", "click setup AE", "click stripe beta select plan support link", "click stripe beta change plan support link", "click rule link", "click button to speed recommendation page", "click trace rule details", "click upload assets", "click worker detail tab", "click workers resource", "click workers manage account members", "click workers manage notifications and alerts", "view stripe beta opt out", "error notification shown", "fetch personalized content", "view page", "run speed test", "delete speed test", "create speed test schedule", "delete speed test schedule", "select speed test trend range", "select speed test trend metric", "view speed recommendation", "view lighthouse audit", "enable speed recommendation", "click speed feature link", "click speed optimization documentation link", "enable all speed optimization recommendations", "complete plan change from speed", "start plan change from speed", "view rum disabled screen", "enable rum from speed", "select rum map range", "select rum map metric", "has payment plan on file", "click DNS records link", "click disable DNSSEC link", "click migrate DNSSEC link", "click enable DNSSEC link", "click pending domains link", "change appearance", "click star zone", "click star zone filter", "click empty state link", "click view more", "visit system status item", "view system status item menu", "subscribe to system status item", "click feedback link", "click registrar link", "click cloudflare logo", "dismiss change notification", "dismiss change notification modal", "set marketing preference ent ss purchase", "view change notification", "view change notification modal", "expand side drawer", "collapse side drawer", "expand documentation side drawer", "collapse documentation side drawer", "dismiss message", "dismiss all messages", "click message inbox popover", "click message footer action", "clicked sidebar Discord link", "clicked sidebar Community Forum link", me.QV.clickedDownloadAnalytics, me.QV.clickedPrintAnalytics, me.QV.toggledSmartPlacement, "clicked Workers for Platforms CLI Guide link", "clicked Workers for Platforms Documentation link", Le.QV.toggledPagesSmartPlacement, Le.QV.downloadDemoProject, "clicked R2 feedback link", "clicked R2 CLI guide", "clicked Constellation feedback link", F.N3.INITIAL_FETCH_SCORES, F.N3.FETCH_CONFIGURATION, F.N3.INITIAL_FETCH_TIME_SERIES, F.N3.INITIAL_FETCH_ATTRIBUTES, F.N3.UPDATE_SETTINGS, F.N3.DELETE_RULE, F.N3.UPDATE_RULE, F.N3.FETCH_RULES, F.N3.CONFIGURE_BOT_MANAGEMENT, F.N3.WAF_RULES_REDIRECT, Q.F.TOGGLE_TCP_PROTECTION, Q.F.GET_TCP_PROTECTION_PREFIXES, Q.F.CREATE_TCP_PROTECTION_PREFIXES, Q.F.CREATE_TCP_PROTECTION_PREFIX, Q.F.UPDATE_TCP_PROTECTION_PREFIX, Q.F.DELETE_TCP_PROTECTION_PREFIX, Q.F.DELETE_TCP_PROTECTION_PREFIXES, Q.F.GET_TCP_PROTECTION_ALLOWLIST, Q.F.CREATE_TCP_PROTECTION_ALLOWLIST, Q.F.UPDATE_TCP_PROTECTION_ALLOWLIST, Q.F.DELETE_PREFIX_TCP_PROTECTION_ALLOWLIST, Q.F.DELETE_TCP_PROTECTION_ALLOWLIST, Q.F.GET_SYN_PROTECTION_RULES, Q.F.GET_SYN_PROTECTION_RULE, Q.F.CREATE_SYN_PROTECTION_RULE, Q.F.UPDATE_SYN_PROTECTION_RULE, Q.F.DELETE_SYN_PROTECTION_RULE, Q.F.GET_TCP_FLOW_PROTECTION_RULES, Q.F.GET_TCP_FLOW_PROTECTION_RULE, Q.F.CREATE_TCP_FLOW_PROTECTION_RULE, Q.F.UPDATE_TCP_FLOW_PROTECTION_RULE, Q.F.DELETE_TCP_FLOW_PROTECTION_RULE, Q.F.GET_SYN_PROTECTION_FILTERS, Q.F.GET_SYN_PROTECTION_FILTER, Q.F.CREATE_SYN_PROTECTION_FILTER, Q.F.UPDATE_SYN_PROTECTION_FILTER, Q.F.DELETE_SYN_PROTECTION_FILTER, Q.F.GET_TCP_FLOW_PROTECTION_FILTERS, Q.F.GET_TCP_FLOW_PROTECTION_FILTER, Q.F.CREATE_TCP_FLOW_PROTECTION_FILTER, Q.F.UPDATE_TCP_FLOW_PROTECTION_FILTER, Q.F.DELETE_TCP_FLOW_PROTECTION_FILTER, Q.F.GET_DNS_PROTECTION_RULES, Q.F.GET_DNS_PROTECTION_RULE, Q.F.CREATE_DNS_PROTECTION_RULE, Q.F.UPDATE_DNS_PROTECTION_RULE, Q.F.DELETE_DNS_PROTECTION_RULE, z.F.MANAGE_PAGE_SHIELD_POLICY, z.F.CONFIGURE_PAGE_SHIELD, z.F.VIEW_DETECTED_CONNECTIONS, z.F.VIEW_DETECTED_SCRIPTS, z.F.VIEW_PAGE_SHIELD_POLICIES, z.F.VIEW_PAGE_SHIELD_SETTINGS, x.y.CREATE_LIST, x.y.DELETE_LIST, x.y.ADD_LIST_ITEM, x.y.DELETE_LIST_ITEM, H.KO.PURCHASE_WORKERS_PAID, H.KO.LIST_CONFIGS, H.KO.CREATE_HYPERDRIVE_CONFIG, H.KO.VIEW_CONFIG_DETAILS, H.KO.UPDATE_CACHING_SETTINGS, H.KO.DELETE_HYPERDRIVE_CONFIG, H.KO.CLICK_HYPERDRIVE_DOCUMENTATION, H.KO.CLICK_GET_STARTED_GUIDE, H.KO.CLICK_CONNECTIVITY_GUIDES, H.KO.CLICK_QUICK_LINK, ce.N.CNAME, ce.N.IP_ADDRESS, ce.N.LB, ce.N.UPDATE_CNAME, ce.N.UPDATE_IP_ADDRESS, ce.N.UPDATE_LB, ce.N.DISABLE, M.N.TIERED_CACHE, M.N.CACHE_PURGE, M.N.CACHE_ANALYTICS, ...(0, U.P)(), ...(0, te.x4)(), ...(0, V.m8)(), Y.N.CREATE, Y.N.EVENTS, Y.N.ANALYTICS, Y.N.UPDATE, Y.N.GENERATE_PREVIEW, ae.R.INITIATE_URL_SCAN, ae.R.LOAD_SCAN_INFO, ae.v.EXPAND_INSIGHT_ROW, ae.v.CLICK_RESOLVE_BUTTON, ae.v.FOLLOW_RESOLVE_URL, ae.v.MANAGE_INSIGHT, ae.v.CLICK_SCAN_NOW, ae.v.CLICK_EXPORT_INSIGHTS, ae.v.BULK_ARCHIVE, $.Fj[$.kq.ENDPOINT_MANAGEMENT].listOfEndpoints, $.Fj[$.kq.ENDPOINT_MANAGEMENT].detailedMetrics, $.Fj[$.kq.ENDPOINT_MANAGEMENT].createEndpoint, $.Fj[$.kq.ENDPOINT_MANAGEMENT].deleteEndpoint, $.Fj[$.kq.ENDPOINT_MANAGEMENT].deployRouting, $.Fj[$.kq.ENDPOINT_MANAGEMENT].deleteRouting, $.Fj[$.kq.API_DISCOVERY].viewDiscoveredEndpoints, $.Fj[$.kq.API_DISCOVERY].saveDiscoveredEndpoint, $.Fj[$.kq.API_DISCOVERY].ignoreOrUnignoreDiscoveredEndpoint, $.Fj[$.kq.SCHEMA_VALIDATION].viewSchemasList, $.Fj[$.kq.SCHEMA_VALIDATION].uploadSchema, $.Fj[$.kq.SCHEMA_VALIDATION].viewSchemaAdoption, $.Fj[$.kq.SCHEMA_VALIDATION].downloadSchema, $.Fj[$.kq.SCHEMA_VALIDATION].deleteSchema, $.Fj[$.kq.SCHEMA_VALIDATION].addLearnedSchemaByHostname, $.Fj[$.kq.SCHEMA_VALIDATION].addLearnedSchemaByEndpoint, $.Fj[$.kq.SEQUENCE_ANALYTICS].viewSequencesPage, $.Fj[$.kq.JWT_VALIDATION].viewJWTRules, $.Fj[$.kq.JWT_VALIDATION].addJWTRule, $.Fj[$.kq.JWT_VALIDATION].editJWTRule, $.Fj[$.kq.JWT_VALIDATION].deleteJWTRule, $.Fj[$.kq.JWT_VALIDATION].reprioritizeJWTRule, $.Fj[$.kq.JWT_VALIDATION].viewJWTConfigs, $.Fj[$.kq.JWT_VALIDATION].addJWTConfig, $.Fj[$.kq.JWT_VALIDATION].editJWTConfig, $.Fj[$.kq.JWT_VALIDATION].deleteJWTConfig, $.Fj[$.kq.SETTINGS].redirectToFirewallRulesTemplate, $.Fj[$.kq.SETTINGS].redirectToPages, $.Fj[$.kq.SETTINGS].listSessionIdentifiers, $.Fj[$.kq.SETTINGS].listRequestsContainingSessionIdentifiers, $.Fj[$.kq.SETTINGS].addOrRemoveSessionIdentifiers, $.Fj[$.kq.SETTINGS].redirectToCustomRules, $.Fj[$.kq.SETTINGS].listAllFallthroughSchemas, $.Fj[$.kq.SEQUENCE_RULES].listSequenceRules, $.Fj[$.kq.SEQUENCE_RULES].deleteSequenceRule, $.Fj[$.kq.SEQUENCE_RULES].reorderSequenceRule, $.Fj[$.kq.SEQUENCE_RULES].createSequenceRule, $.Fj[$.kq.SEQUENCE_RULES].editSequenceRule, w.Z.CREATE_AND_DEPLOY, w.Z.ANALYTICS, K.y.SECONDARY_DNS_NOTIFICATION_CREATE, K.y.SECONDARY_DNS_NOTIFICATION_UPDATE, K.y.SECONDARY_DNS_NOTIFICATION_DELETE, ee.U.ZONE_TRANSFER_SUCCESS, ee.U.DNS_RECORD_CREATE, ee.U.DNS_RECORD_UPDATE, ee.U.DNS_RECORD_DELETE, ie.Y.PEER_DNS_CREATE, ie.Y.PEER_DNS_UPDATE, ie.Y.PEER_DNS_DELETE, ie.Y.ZONE_TRANSFER_ENABLE, ie.Y.ZONE_TRANSFER_DISABLE, B.V.ARGO_ENABLEMENT, B.V.ARGO_GEO_ANALYTICS_FETCH, B.V.ARGO_GLOBAL_ANALYTICS_FETCH, R.X.VIEW_BUCKETS_LIST, R.X.CREATE_BUCKET, R.X.VALIDATE_BUCKET, R.X.DELETE_BUCKET, R.X.VIEW_CAPTURES_LIST, R.X.CREATE_SIMPLE_CAPTURE, R.X.CREATE_FULL_CAPTURE, R.X.VIEW_FULL_CAPTURE, R.X.DOWNLOAD_SIMPLE_CAPTURE, P.bK.VIEW_RULES, P.bK.CREATE_RULE, P.bK.UPDATE_RULE, P.bK.DELETE_RULE, P.bK.VIEW_CONFIGURATION, P.bK.CREATE_CONFIGURATION, P.bK.UPDATE_CONFIGURATION, P.bK.DELETE_CONFIGURATION, D.r8.VIEW_ALERTS, D.r8.VIEW_ALERTS_HISTORY, D.r8.MAGIC_OVERVIEW_ANALYTICS, D.VZ.CREATE_SITE, D.VZ.CREATE_TUNNEL, D.VZ.CREATE_STATIC_ROUTE, L.o4.CLICK_ADAPTIVE_SAMPLING, L.o4.CLICK_TO_LOG_EXPLORER_BANNER, L.o4.CLICK_TO_LOG_EXPLORER_DESCRIPTION, L.o4.CLICK_SWITCH_TO_RAW_LOGS, L.o4.CLICK_SWITCH_TO_SAMPLED_LOGS, "send AI feedback", X.U.REGISTER_DOMAIN_SEARCH_SUBMIT, X.U.REGISTER_DOMAIN_SEARCH_SELECT_DOMAIN, X.U.REGISTER_DOMAIN_CHECKOUT_SELECT_PAYMENT_OPTION, X.U.REGISTER_DOMAIN_CHECKOUT_PURCHASE, X.U.REGISTER_DOMAIN_CHECKOUT_PURCHASE_ATTEMPT, X.U.REGISTER_DOMAIN_CHECKOUT_PURCHASE_COMPLETED, X.U.REGISTER_DOMAIN_CHECKOUT_BILLING_COUNTRY_SELECT, X.U.REGISTER_DOMAIN_CHECKOUT_BILLING_VERIFY_ADDRESS, X.U.REGISTER_DOMAIN_CHECKOUT_BILLING_SELECT_PAYMENT_METHOD, X.U.REGISTER_DOMAIN_CHECKOUT_TMCH_DOMAIN_HAS_CLAIMS, X.U.REGISTER_DOMAIN_CHECKOUT_TMCH_EXPAND_CLAIMS, X.U.REGISTER_DOMAIN_CHECKOUT_TMCH_DISAGREE, X.U.REGISTER_DOMAIN_CHECKOUT_TMCH_AGREE, X.U.REGISTER_DOMAIN_CHECKOUT_ERROR, X.U.TRANSFER_DOMAIN_CHANGE_STEP, X.U.RENEW_DOMAIN_COMPLETED, X.U.RESTORE_DOMAIN_INIT, X.U.RESTORE_DOMAIN_CLOSE_RESTORE_MODAL, X.U.RESTORE_DOMAIN_OPEN_ADD_PAYMENT_METHOD_MODAL, X.U.RESTORE_DOMAIN_CLOSE_ADD_PAYMENT_METHOD_MODAL, X.U.RESTORE_DOMAIN_FAILURE, X.U.RESTORE_DOMAIN_COMPLETED, X.U.DOMAIN_DELETE_INIT, X.U.DOMAIN_DELETE_COMPLETED, X.U.DOMAIN_DELETE_FAILURE_NO_PERMISSIONS, X.U.DOMAIN_DELETE_FAILURE_INVALID_CONFIRMATION_CODE, X.U.DOMAIN_DELETE_FAILURE_UNKNOWN_REASON, X.U.DOMAIN_DELETE_CONFIRM_DELETE, X.U.DOMAIN_DELETE_CLOSE_CONFIRM_MODAL, X.U.DOMAIN_DELETE_RESEND_CONFIRMATION_CODE, X.U.DOMAIN_DELETE_CLOSE_VERIFICATION_MODAL, X.U.DOMAIN_DELETE_WARNING_MODAL_CONTINUE, X.U.DOMAIN_DELETE_CLOSE_WARNING_MODAL, J.KO.CLICK_GET_STARTED_GUIDE, J.KO.CLICK_PIPELINE_DOCUMENTATION, J.KO.CLICK_QUICK_LINK, J.KO.CREATE_PIPELINE, J.KO.DELETE_PIPELINE, J.KO.LIST_PIPELINES, J.KO.VIEW_PIPELINE, W.S.EXISTING_DOMAIN, W.S.NEW_DOMAIN, W.S.WAF_RULESET, W.S.WORKERS, W.S.PAGES, W.S.R2, W.S.ACCOUNT_MEMBERS, Ie._.TEMPLATE_PRODUCT_SELECTED, Ie._.TEMPLATE_SELECTED, Ie._.TEMPLATE_SAVE_DRAFT, Ie._.TEMPLATE_CANCEL, Ie._.TEMPLATE_DEPLOY, se.D.CLICK_GO_BACK_SHARE_MODAL, se.D.CLICK_MENU_ITEM_SHARE, se.D.CLICK_ON_CANCEL_SHARE_MODAL, se.D.CLICK_ON_CLOSE_SHARE_MODAL, se.D.CLICK_ON_CONFIGURE_SHARE_BUTTON, se.D.CLICK_ON_DELETE_RULESET, se.D.CLICK_ON_DEPLOY_BUTTON_SHARE_MODAL, se.D.CLICK_ON_EDIT_SHARE_PERMISSION, se.D.CLICK_ON_GO_TO_SOURCE_ACCOUNT, se.D.CLICK_ON_SHARE_BUTTON_SHARE_MODAL, se.D.CLICK_ON_SHARE_TABLE_ROW, be.vc.CREATED, be.vc.ENABLED, be.vc.DISABLED, be.vc.DELETED, be.vc.UPDATED, be.vc.DOWNLOADED, je.Gk.REQUEST_REVIEW, je.Gk.COPY_URL),
				Ve = t.eg.exactStrict(t.eg.object({
					".agency": t.eg.any.optional,
					".auction": t.eg.any.optional,
					".bet": t.eg.any.optional,
					".center": t.eg.any.optional,
					".church": t.eg.any.optional,
					".com": t.eg.any.optional,
					".community": t.eg.any.optional,
					".energy": t.eg.any.optional,
					".fitness": t.eg.any.optional,
					".guru": t.eg.any.optional,
					".io": t.eg.any.optional,
					".info": t.eg.any.optional,
					".immo": t.eg.any.optional,
					".lgbt": t.eg.any.optional,
					".life": t.eg.any.optional,
					".live": t.eg.any.optional,
					".media": t.eg.any.optional,
					".mobi": t.eg.any.optional,
					".net": t.eg.any.optional,
					".network": t.eg.any.optional,
					".ninja": t.eg.any.optional,
					".online": t.eg.any.optional,
					".org": t.eg.any.optional,
					".photography": t.eg.any.optional,
					".plus": t.eg.any.optional,
					".press": t.eg.any.optional,
					".pro": t.eg.any.optional,
					".services": t.eg.any.optional,
					".store": t.eg.any.optional,
					".tech": t.eg.any.optional,
					".wiki": t.eg.any.optional,
					".wtf": t.eg.any.optional,
					".xyz": t.eg.any.optional,
					_ga: t.eg.any.optional,
					_lpchecked: t.eg.any.optional,
					a: t.eg.any.optional,
					absolute: t.eg.any.optional,
					access: t.eg.any.optional,
					access_users_allowed: t.eg.any.optional,
					account: t.eg.any.optional,
					accountId: t.eg.any.optional,
					"accountResolver/SELECT_ACCOUNT": t.eg.any.optional,
					"accountResolver/NO_ACTION": t.eg.any.optional,
					accountResolverTotalCpuTime: t.eg.any.optional,
					accountResolverTotalTime: t.eg.any.optional,
					accountResolverTotalUserActionsTime: t.eg.any.optional,
					action: t.eg.any.optional,
					addedRecords: t.eg.any.optional,
					addon: t.eg.any.optional,
					address: t.eg.any.optional,
					apiUrl: t.eg.any.optional,
					argo_accelerated_gigabytes: t.eg.any.optional,
					"aria-current": t.eg.any.optional,
					"aria-controls": t.eg.any.optional,
					"aria-label": t.eg.any.optional,
					"aria-selected": t.eg.any.optional,
					authHeaders: t.eg.any.optional,
					autocomplete: t.eg.any.optional,
					autoRenew: t.eg.any.optional,
					autoSetup: t.eg.any.optional,
					b: t.eg.any.optional,
					buckets: t.eg.string.optional,
					banner: t.eg.any.optional,
					bot_management: t.eg.any.optional,
					brokenExpression: t.eg.any.optional,
					bundle: t.eg.any.optional,
					c: t.eg.any.optional,
					cacheKey: t.eg.any.optional,
					cache_by_device_type: t.eg.any.optional,
					cache_rules: t.eg.any.optional,
					campaignId: t.eg.any.optional,
					campaignID: t.eg.any.optional,
					cancelled: t.eg.any.optional,
					category: t.eg.any.optional,
					cd43: t.eg.any.optional,
					cd45: t.eg.any.optional,
					cd47: t.eg.any.optional,
					certificate_pack_id: t.eg.any.optional,
					certificate_pack_type: t.eg.any.optional,
					cf: t.eg.any.optional,
					cfPlan: t.eg.any.optional,
					chartName: t.eg.any.optional,
					charts: t.eg.any.optional,
					childrenCount: t.eg.any.optional,
					childrenSelected: t.eg.any.optional,
					class: t.eg.any.optional,
					code0: t.eg.any.optional,
					columnName: t.eg.string.optional,
					completedTasks: t.eg.any.optional,
					component: t.eg.any.optional,
					component_values: t.eg.any.optional,
					configuration_rules: t.eg.any.optional,
					contentfulId: t.eg.any.optional,
					country: t.eg.any.optional,
					currentCA: t.eg.any.optional,
					currentPerPage: t.eg.any.optional,
					currentPage: t.eg.any.optional,
					d: t.eg.any.optional,
					dashVersion: t.eg.any.optional,
					"data-children-count": t.eg.any.optional,
					"data-tracking-name": t.eg.any.optional,
					"data-tracking-id": t.eg.any.optional,
					"data-testid": t.eg.any.optional,
					dataset: t.eg.any.optional,
					databaseId: t.eg.any.optional,
					dateCreated: t.eg.any.optional,
					dateModified: t.eg.any.optional,
					ddos: t.eg.any.optional,
					description: t.eg.string.optional,
					dedicated_certificates: t.eg.any.optional,
					dedicated_certificates_custom: t.eg.any.optional,
					deepLink: t.eg.any.optional,
					default: t.eg.any.optional,
					destinationPage: t.eg.string.optional,
					detailType: t.eg.any.optional,
					deviceViewport: t.eg.any.optional,
					direction: t.eg.any.optional,
					directive: t.eg.any.optional,
					domainName: t.eg.any.optional,
					download: t.eg.any.optional,
					duration: t.eg.any.optional,
					dynamic_redirects: t.eg.any.optional,
					e: t.eg.any.optional,
					email_count: t.eg.any.optional,
					end: t.eg.any.optional,
					endDate: t.eg.any.optional,
					enabled: t.eg.any.optional,
					entitled: t.eg.any.optional,
					environment: t.eg.string.optional,
					error: t.eg.any.optional,
					errorCode: t.eg.any.optional,
					errorMessage: t.eg.any.optional,
					errors: t.eg.any.optional,
					exclude_cdn_cgi: t.eg.any.optional,
					expand: t.eg.any.optional,
					experiment: t.eg.any.optional,
					expression: t.eg.any.optional,
					expressionType: t.eg.any.optional,
					features: t.eg.array(t.eg.string).optional,
					failureReasons: t.eg.any.optional,
					featureChange: t.eg.any.optional,
					featureImproved: t.eg.any.optional,
					featureName: t.eg.any.optional,
					featureOriginal: t.eg.any.optional,
					field: t.eg.any.optional,
					fieldName: t.eg.any.optional,
					filterId: t.eg.any.optional,
					firewall_rules: t.eg.any.optional,
					flow: t.eg.any.optional,
					"font-size": t.eg.any.optional,
					form: t.eg.any.optional,
					formView: t.eg.any.optional,
					frequency: t.eg.any.optional,
					from: t.eg.any.optional,
					fromCategorySearch: t.eg.any.optional,
					fromStreamRatePlanId: t.eg.any.optional,
					toStreamRatePlanId: t.eg.any.optional,
					gatesDelayed: t.eg.any.optional,
					geo: t.eg.any.optional,
					guid: t.eg.any.optional,
					hasData: t.eg.any.optional,
					hasRecords: t.eg.any.optional,
					hasSidebarNav: t.eg.boolean.optional,
					"hasTest2019-06-03": t.eg.any.optional,
					hCaptchaDisplayed: t.eg.any.optional,
					header_modification: t.eg.any.optional,
					hostname_count: t.eg.any.optional,
					hostParam: t.eg.any.optional,
					href: t.eg.any.optional,
					id: t.eg.any.optional,
					index: t.eg.any.optional,
					indexLevel: t.eg.any.optional,
					initialRecommendation: t.eg.any.optional,
					ip_access_rules: t.eg.any.optional,
					items: t.eg.number.optional,
					isAuthenticated: t.eg.any.optional,
					isPaused: t.eg.any.optional,
					isCloudflare: t.eg.any.optional,
					isExpanding: t.eg.boolean.optional,
					isEntAccount: t.eg.boolean.optional,
					isEnterprise: t.eg.boolean.optional,
					isInactive: t.eg.boolean.optional,
					isOpen: t.eg.boolean.optional,
					isScript: t.eg.any.optional,
					isSPA: t.eg.any.optional,
					isStreaming: t.eg.any.optional,
					isStripeBilling: t.eg.boolean.optional,
					isParent: t.eg.any.optional,
					isViewAll: t.eg.any.optional,
					isEditingSubscription: t.eg.any.optional,
					is_replacing: t.eg.any.optional,
					isRaw: t.eg.any.optional,
					jurisdiction: t.eg.any.optional,
					key: t.eg.any.optional,
					label: t.eg.any.optional,
					lastTimestamp: t.eg.any.optional,
					last_scan_days_ago: t.eg.any.optional,
					level: t.eg.any.optional,
					limit: t.eg.any.optional,
					link: t.eg.any.optional,
					listType: t.eg.any.optional,
					load_balancing: t.eg.any.optional,
					load_balancing_base: t.eg.any.optional,
					load_balancing_dns_queries: t.eg.any.optional,
					load_balancing_geo_routing: t.eg.any.optional,
					load_balancing_monitor_interval: t.eg.any.optional,
					load_balancing_origins: t.eg.any.optional,
					load_balancing_probe_regions: t.eg.any.optional,
					legacyDeepLink: t.eg.any.optional,
					locale: t.eg.any.optional,
					location: t.eg.any.optional,
					locationHint: t.eg.any.optional,
					maliciousCode: t.eg.any.optional,
					maliciousDomain: t.eg.any.optional,
					maliciousURL: t.eg.any.optional,
					managed_rules: t.eg.any.optional,
					marketingPlan: t.eg.any.optional,
					matchesCount: t.eg.any.optional,
					matchingRequestPercentage: t.eg.any.optional,
					matchingRequests: t.eg.any.optional,
					message0: t.eg.any.optional,
					method: t.eg.any.optional,
					millis: t.eg.any.optional,
					"mirage-recommendation": t.eg.any.optional,
					mode: t.eg.any.optional,
					monitor: t.eg.string.optional,
					monitorType: t.eg.any.optional,
					mrktCheckboxDisplayed: t.eg.any.optional,
					name: t.eg.any.optional,
					newTotalCount: t.eg.any.optional,
					novalidate: t.eg.any.optional,
					numAccounts: t.eg.any.optional,
					numRecords: t.eg.any.optional,
					numRecordsToApply: t.eg.any.optional,
					numRecordsToPrompt: t.eg.any.optional,
					numRecordsToRemove: t.eg.any.optional,
					numRows: t.eg.any.optional,
					origin_rules: t.eg.any.optional,
					numFilters: t.eg.any.optional,
					numRawLogs: t.eg.any.optional,
					numSampledLogs: t.eg.any.optional,
					moreRawLogs: t.eg.any.optional,
					old_expires_on: t.eg.any.optional,
					old_mode: t.eg.any.optional,
					oldFrequency: t.eg.string.optional,
					oldPlan: t.eg.any.optional,
					oldPrice: t.eg.number.optional,
					oldRatePlan: t.eg.string.optional,
					oldStep: t.eg.any.optional,
					oldSubscriptionValues: t.eg.record(t.eg.string, t.eg.any).optional,
					oldValue: t.eg.any.optional,
					onboarding: t.eg.any.optional,
					operator: t.eg.any.optional,
					order: t.eg.string.optional,
					order_by: t.eg.any.optional,
					page: t.eg.any.optional,
					page_rules: t.eg.any.optional,
					pageName: t.eg.any.optional,
					pageNumber: t.eg.any.optional,
					params: t.eg.any.optional,
					paused: t.eg.any.optional,
					phase: t.eg.any.optional,
					origin_url: t.eg.string.optional,
					payment_country: t.eg.string.optional,
					payment_gateway: t.eg.string.optional,
					percentages: t.eg.array(t.eg.number).optional,
					permission: t.eg.string.optional,
					personalisation: t.eg.boolean.optional,
					personalized: t.eg.boolean.optional,
					per_page: t.eg.any.optional,
					plan: t.eg.any.optional,
					plans: t.eg.any.optional,
					planVolume: t.eg.any.optional,
					position: t.eg.number.optional,
					prefs: t.eg.any.optional,
					previousPage: t.eg.any.optional,
					previousTotalCount: t.eg.any.optional,
					price: t.eg.any.optional,
					priority: t.eg.any.optional,
					product: t.eg.any.optional,
					prioritize_malicious: t.eg.any.optional,
					products: t.eg.any.optional,
					productName: t.eg.any.optional,
					productCategory: t.eg.any.optional,
					provider: t.eg.any.optional,
					question: t.eg.any.optional,
					quota: t.eg.any.optional,
					ratePlan: t.eg.any.optional,
					rayId: t.eg.any.optional,
					readTasks: t.eg.any.optional,
					reason: t.eg.any.optional,
					recommendation: t.eg.any.optional,
					recommendationType: t.eg.any.optional,
					recordAdditionMethod: t.eg.any.optional,
					recordTypes: t.eg.any.optional,
					region: t.eg.any.optional,
					registrar: t.eg.any.optional,
					resourceName: t.eg.string.optional,
					rulesCount: t.eg.any.optional,
					gclid: t.eg.any.optional,
					gclsrc: t.eg.any.optional,
					dclid: t.eg.any.optional,
					utm_source: t.eg.any.optional,
					utm_medium: t.eg.any.optional,
					utm_campaign: t.eg.any.optional,
					utm_term: t.eg.any.optional,
					utm_content: t.eg.any.optional,
					rangeMax: t.eg.number.optional,
					rangeMin: t.eg.number.optional,
					rate_limiting: t.eg.any.optional,
					ratePlanId: t.eg.any.optional,
					referring_domain: t.eg.any.optional,
					referrer: t.eg.any.optional,
					registrationPeriod: t.eg.any.optional,
					registrationStatus: t.eg.any.optional,
					rel: t.eg.any.optional,
					relativeTimeRange: t.eg.any.optional,
					resultRank: t.eg.number.optional,
					"rocket_loader-recommendation": t.eg.any.optional,
					role: t.eg.any.optional,
					ruleDescription: t.eg.any.optional,
					ruleId: t.eg.any.optional,
					scanFailed: t.eg.any.optional,
					scope: t.eg.any.optional,
					searchAction: t.eg.any.optional,
					searchDescription: t.eg.any.optional,
					searchParam: t.eg.any.optional,
					searchStatus: t.eg.any.optional,
					searchTerm: t.eg.any.optional,
					searchValue: t.eg.any.optional,
					section: t.eg.any.optional,
					seenOnParam: t.eg.any.optional,
					selected: t.eg.any.optional,
					series: t.eg.any.optional,
					service: t.eg.any.optional,
					setting: t.eg.any.optional,
					setup: t.eg.any.optional,
					showErrors: t.eg.any.optional,
					sortDirection: t.eg.string.optional,
					sortBy: t.eg.string.optional,
					source: t.eg.any.optional,
					startDate: t.eg.any.optional,
					state: t.eg.any.optional,
					status: t.eg.any.optional,
					step: t.eg.any.optional,
					storageClass: t.eg.any.optional,
					string: t.eg.any.optional,
					stream_storage_thousand_minutes: t.eg.any.optional,
					stream_viewed_thousand_minutes: t.eg.any.optional,
					subcategory: t.eg.any.optional,
					subscribedToMarketing: t.eg.any.optional,
					subscriptionValues: t.eg.record(t.eg.string, t.eg.any).optional,
					subcomponent: t.eg.string.optional,
					success: t.eg.any.optional,
					supportLevel: t.eg.any.optional,
					tab: t.eg.any.optional,
					tableName: t.eg.any.optional,
					tag: t.eg.any.optional,
					target: t.eg.any.optional,
					targetPage: t.eg.any.optional,
					targetCA: t.eg.any.optional,
					target_pack_type: t.eg.any.optional,
					task: t.eg.any.optional,
					text: t.eg.any.optional,
					timeRange: t.eg.any.optional,
					title: t.eg.any.optional,
					tld: t.eg.string.optional,
					to: t.eg.any.optional,
					touched: t.eg.any.optional,
					total: t.eg.number.optional,
					transform_rules: t.eg.any.optional,
					trialPlan: t.eg.any.optional,
					trialStart: t.eg.any.optional,
					topic: t.eg.any.optional,
					totalCount: t.eg.any.optional,
					totalCpuTime: t.eg.any.optional,
					totalLevels: t.eg.any.optional,
					totalRequests: t.eg.any.optional,
					totalTime: t.eg.any.optional,
					totalUserActionsTime: t.eg.any.optional,
					type: t.eg.any.optional,
					upgrade: t.eg.boolean.optional,
					uploading: t.eg.any.optional,
					uploadFailed: t.eg.any.optional,
					url_rewrites: t.eg.any.optional,
					hosts: t.eg.string.optional,
					uiType: t.eg.string.optional,
					userId: t.eg.any.optional,
					userType: t.eg.any.optional,
					utm_referrer: t.eg.any.optional,
					validation_method: t.eg.any.optional,
					validity_days: t.eg.any.optional,
					value: t.eg.any.optional,
					visibility: t.eg.any.optional,
					via: t.eg.any.optional,
					waf: t.eg.any.optional,
					wizardName: t.eg.any.optional,
					wordpress: t.eg.any.optional,
					workers: t.eg.any.optional,
					worker_kv_deletes: t.eg.any.optional,
					worker_kv_lists: t.eg.any.optional,
					worker_kv_reads: t.eg.any.optional,
					worker_kv_storage: t.eg.any.optional,
					worker_kv_writes: t.eg.any.optional,
					worker_requests: t.eg.any.optional,
					wp_plugin: t.eg.any.optional,
					write_strategy: t.eg.any.optional,
					zone: t.eg.any.optional,
					zoneId: t.eg.any.optional,
					zoneName: t.eg.any.optional,
					"zoneResolver/NO_ACTION": t.eg.any.optional,
					"zoneResolver/SELECT_ZONE": t.eg.any.optional,
					zoneResolverTotalCpuTime: t.eg.any.optional,
					zoneResolverTotalTime: t.eg.any.optional,
					zoneResolverTotalUserActionsTime: t.eg.any.optional,
					zones: t.eg.any.optional,
					zoneStatus: t.eg.any.optional,
					zoneType: t.eg.any.optional,
					audit: t.eg.any.optional,
					score: t.eg.any.optional,
					potentialSavings: t.eg.any.optional,
					feature: t.eg.any.optional,
					days: t.eg.any.optional,
					minutes: t.eg.any.optional,
					customRange: t.eg.any.optional,
					metric: t.eg.any.optional,
					url: t.eg.any.optional,
					previousPlan: t.eg.any.optional,
					isStarring: t.eg.any.optional,
					isStarred: t.eg.any.optional,
					totalStarredZones: t.eg.number.optional,
					totalZones: t.eg.number.optional,
					widgetName: t.eg.any.optional,
					statusType: t.eg.any.optional,
					outcome: t.eg.any.optional,
					marketingOptInChecked: t.eg.boolean.optional,
					prompt: t.eg.any.optional,
					positive: t.eg.any.optional,
					endpoint: t.eg.any.optional,
					isArgoEnabled: t.eg.any.optional,
					insightClass: t.eg.string.optional,
					insightType: t.eg.string.optional,
					severity: t.eg.string.optional,
					domain: t.eg.any.optional,
					exact: t.eg.any.optional,
					fees: t.eg.any.optional,
					new_selection: t.eg.any.optional,
					numDomainsInCart: t.eg.any.optional,
					payment_method: t.eg.string.optional,
					payment_option: t.eg.string.optional,
					premium: t.eg.any.optional,
					previous_selection: t.eg.any.optional,
					pricing_local: t.eg.any.optional,
					selection: t.eg.any.optional,
					uniqueTopLevelDomains: t.eg.any.optional,
					template_name: t.eg.any.optional,
					productResource: t.eg.any.optional
				})),
				Ze = (le, ue) => {
					const [fe, _e] = st(ue);
					let Te, Oe;
					return (0, t.nM)(Ge.decode(le)) && (Te = new I.Uh(le)), _e && _e.length > 0 && (Oe = new I.oV(le, _e)), [fe, Te, Oe]
				},
				st = le => {
					const ue = Ve.decode(le);
					if ((0, t.nM)(ue)) {
						const fe = ue.left.map(({
							context: _e
						}) => _e.map(({
							key: Te
						}) => Te)).reduce((_e, Te) => _e.concat(Te), []).filter(_e => _e in le);
						return [He(fe, le), fe]
					}
					return [le, []]
				},
				He = (le, ue) => Object.entries(ue).reduce((fe, [_e, Te]) => (le.includes(_e) || (fe[_e] = Te), fe), {}),
				Ye = le => (ue, fe, _e) => {
					const [Te, Oe, Ee] = Ze(fe, _e);
					if (Oe) throw Oe;
					return Ee && console.error(Ee), le(ue, fe, Te)
				};
			var Ke = n("../react/utils/zaraz.ts");
			const xe = {
					identify: !0
				},
				Je = le => (ue, fe, _e) => (xe[fe] || Ke.tg === null || Ke.tg === void 0 || Ke.tg.track(fe, _e), le(ue, fe, _e));
			var Qe = n("../react/utils/cookiePreferences.ts");

			function ze(le) {
				for (var ue = 1; ue < arguments.length; ue++) {
					var fe = arguments[ue] != null ? Object(arguments[ue]) : {},
						_e = Object.keys(fe);
					typeof Object.getOwnPropertySymbols == "function" && _e.push.apply(_e, Object.getOwnPropertySymbols(fe).filter(function(Te) {
						return Object.getOwnPropertyDescriptor(fe, Te).enumerable
					})), _e.forEach(function(Te) {
						qe(le, Te, fe[Te])
					})
				}
				return le
			}

			function qe(le, ue, fe) {
				return ue = Xe(ue), ue in le ? Object.defineProperty(le, ue, {
					value: fe,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : le[ue] = fe, le
			}

			function Xe(le) {
				var ue = et(le, "string");
				return typeof ue == "symbol" ? ue : String(ue)
			}

			function et(le, ue) {
				if (typeof le != "object" || le === null) return le;
				var fe = le[Symbol.toPrimitive];
				if (fe !== void 0) {
					var _e = fe.call(le, ue || "default");
					if (typeof _e != "object") return _e;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (ue === "string" ? String : Number)(le)
			}
			const j = le => {
					o().init(ze({
						sourceKey: "ca633f741e204a5291e02fcb6c591020",
						debug: !1,
						url: "https://sparrow.cloudflare.com",
						enabled: ge() && !(0, c.gm)() && De(),
						middlewares: [h, Ye, T, Je]
					}, le))
				},
				ne = () => {
					o().identify(ze({}, (0, e.getAttribution)(), {
						locale: (0, s.r)((0, f.bh)().getState()),
						isCloudflare: !!(0, g.Jd)()
					}))
				},
				ge = () => !0,
				we = () => {
					(0, Qe.kT)("sparrow_id")
				},
				De = () => (0, Qe.Xm)()
		},
		"../utils/initStyles.ts": function(G, _, n) {
			"use strict";
			var e = n("../../../../node_modules/@cloudflare/style-const/es/index.js"),
				o = n("../react/app/providers/storeContainer.js");
			const c = "cfBaseStyles",
				f = document.head || document.getElementsByTagName("head")[0],
				s = d => {
					const p = [];
					for (let y in d.colors) {
						const t = d.colors[y];
						if (Array.isArray(t) && y !== "categorical")
							for (let r = 0; r < t.length; ++r) p.push(`--cf-${y}-${r}:${t[r]};`)
					}
					return p.join(`
`)
				},
				g = () => {
					const d = (0, e.Yc)(),
						p = `
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
      background-color: ${d?e.Rl.colors.gray[8]:e.Rl.colors.gray[9]};
      border: 1px solid ${d?e.Rl.colors.gray[7]:e.Rl.colors.gray[8]};
      font-family: monaco, courier, monospace;
    }

    section {
      margin-bottom: 2.5rem;
      margin-top: 2.5rem;
    }

    thead {
      background-color: ${d?e.Rl.colors.gray[8]:e.Rl.colors.gray[9]}
    }

    th {
      font-weight: 600;
    }

    a {
      color: ${d?e.Rl.colors.blue[3]:e.Rl.colors.blue[4]};
      text-decoration: underline;
      text-underline-offset: 4px;
      transition: color 150ms ease;
    }

    a:hover {
      color: ${d?e.Rl.colors.orange[3]:e.Rl.colors.blue[2]};
      cursor: pointer;
    }

    a:active {
      color: ${d?e.Rl.colors.orange[3]:e.Rl.colors.blue[2]};
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
      ${s(e.Rl)}
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
					let y = document.getElementById(c);
					y ? y.innerText = "" : (y = document.createElement("style"), y.id = c, f.appendChild(y)), y.appendChild(document.createTextNode(p)), (0, o.bh)().dispatch({
						type: "cfForceUpdate"
					})
				};
			(0, e.fF)(g), _.Z = g
		},
		"../utils/sentry/lastSentEventId.ts": function(G, _, n) {
			"use strict";
			n.d(_, {
				e: function() {
					return o
				}
			});
			const o = (() => {
				let c = "";
				return {
					setEventId: g => (!g || typeof g != "string" || (c = g), c),
					getEventId: () => c
				}
			})()
		},
		"../utils/zaraz.ts": function(G, _, n) {
			"use strict";
			n.d(_, {
				Ro: function() {
					return r
				},
				bM: function() {
					return p
				},
				tg: function() {
					return d
				},
				yn: function() {
					return t
				}
			});

			function e(a) {
				for (var l = 1; l < arguments.length; l++) {
					var i = arguments[l] != null ? Object(arguments[l]) : {},
						u = Object.keys(i);
					typeof Object.getOwnPropertySymbols == "function" && u.push.apply(u, Object.getOwnPropertySymbols(i).filter(function(E) {
						return Object.getOwnPropertyDescriptor(i, E).enumerable
					})), u.forEach(function(E) {
						o(a, E, i[E])
					})
				}
				return a
			}

			function o(a, l, i) {
				return l = c(l), l in a ? Object.defineProperty(a, l, {
					value: i,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : a[l] = i, a
			}

			function c(a) {
				var l = f(a, "string");
				return typeof l == "symbol" ? l : String(l)
			}

			function f(a, l) {
				if (typeof a != "object" || a === null) return a;
				var i = a[Symbol.toPrimitive];
				if (i !== void 0) {
					var u = i.call(a, l || "default");
					if (typeof u != "object") return u;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (l === "string" ? String : Number)(a)
			}
			const s = {
					track: (a, l) => null,
					set: (a, l) => console.log(`zaraz.set(${a}, ${l})`)
				},
				g = {
					track: (a, l) => {
						var i;
						(i = window.zaraz) === null || i === void 0 || i.track(a, e({}, l, {
							OnetrustActiveGroups: window.OnetrustActiveGroups
						}))
					},
					set: (a, l) => {
						var i;
						return (i = window.zaraz) === null || i === void 0 ? void 0 : i.set(a, l)
					}
				};
			let d;
			const p = () => {
					window.zaraz, d = g
				},
				y = ["email", "first_name", "last_name"],
				t = a => {
					y.forEach(l => {
						var i;
						(i = d) === null || i === void 0 || i.set(l, a[l])
					})
				},
				r = () => {
					t({})
				}
		},
		"../../../common/component/component-filter-bar/src/FilterBuilder.jsx": function(G, _, n) {
			"use strict";
			var e = n("webpack/sharing/consume/default/react/react"),
				o = n.n(e),
				c = n("../../../common/component/component-filter-bar/node_modules/prop-types/index.js"),
				f = n.n(c),
				s = n("../../../../node_modules/@cloudflare/style-container/es/index.js"),
				g = n("../../../common/intl/intl-react/src/index.ts"),
				d = n("../../../../node_modules/@cloudflare/component-input/es/index.js"),
				p = n("../../../common/component/component-filter-bar/node_modules/@cloudflare/component-button/es/index.js"),
				y = n("../../../../node_modules/@cloudflare/component-icon/es/index.js"),
				t = n("../../../common/component/component-filter-bar/node_modules/@cloudflare/component-arrow-swivel/es/index.js"),
				r = n("../../../../node_modules/@cloudflare/component-forms/es/index.js"),
				a = n("../../../../node_modules/@cloudflare/elements/es/index.js"),
				l = n("../../../common/component/component-filter-bar/src/MultiSelect.js"),
				i = n("../../../common/component/component-filter-bar/src/ViewMoreLink.jsx"),
				u = n("../../../common/component/component-filter-bar/src/EditFilterDropdown.jsx"),
				E = n("../../../common/component/component-filter-bar/src/constants.js"),
				A = n("../../../common/component/component-filter-bar/src/utils.js");

			function v(x) {
				for (var w = 1; w < arguments.length; w++) {
					var K = arguments[w] != null ? Object(arguments[w]) : {},
						ee = Object.keys(K);
					typeof Object.getOwnPropertySymbols == "function" && ee.push.apply(ee, Object.getOwnPropertySymbols(K).filter(function(ie) {
						return Object.getOwnPropertyDescriptor(K, ie).enumerable
					})), ee.forEach(function(ie) {
						C(x, ie, K[ie])
					})
				}
				return x
			}

			function C(x, w, K) {
				return w = S(w), w in x ? Object.defineProperty(x, w, {
					value: K,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : x[w] = K, x
			}

			function S(x) {
				var w = T(x, "string");
				return typeof w == "symbol" ? w : String(w)
			}

			function T(x, w) {
				if (typeof x != "object" || x === null) return x;
				var K = x[Symbol.toPrimitive];
				if (K !== void 0) {
					var ee = K.call(x, w || "default");
					if (typeof ee != "object") return ee;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (w === "string" ? String : Number)(x)
			}
			const h = 70,
				I = (0, s.createStyledComponent)(({
					showOverflow: x
				}) => v({
					position: "relative",
					display: "flex",
					flexDirection: "row",
					flexWrap: "wrap",
					width: "100%"
				}, x ? {} : {
					maxHeight: h,
					overflow: "hidden"
				})),
				F = (0, s.createStyledComponent)(() => ({
					marginBottom: ".25rem",
					"&:not(:last-child)": {
						marginRight: ".25rem"
					}
				})),
				M = (0, s.createStyledComponent)(({
					theme: x
				}) => ({
					backgroundColor: x.colors.background,
					py: 1,
					px: 2,
					borderRadius: x.radii[2],
					border: `1px solid ${x.colors.gray[7]}`,
					fontSize: x.fontSizes[2],
					position: "relative",
					cursor: "pointer",
					transition: "border-color 120ms ease-out",
					":hover": {
						borderColor: x.colors.gray[4]
					}
				}), "div"),
				U = (0, s.createStyledComponent)(() => ({
					mr: 1
				}), "span"),
				V = (0, s.createStyledComponent)(({
					theme: x
				}) => ({
					color: x.colors.gray[4],
					mr: 1
				}), "span"),
				R = (0, s.createStyledComponent)(() => ({
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
				z = (0, s.createStyledComponent)(({
					buttonStyle: x
				}) => v({
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
				}, x), p.zx),
				te = (0, s.createStyledComponent)(() => ({
					mr: 2,
					fontSize: 2,
					display: "none",
					"@media print": {
						display: "initial"
					}
				}), "h4"),
				Y = (0, s.createStyledComponent)(({
					theme: x
				}) => ({
					backgroundColor: "transparent",
					borderColor: "transparent",
					p: 0,
					lineHeight: 1,
					display: "inline-block",
					color: x.colors.gray[4],
					transition: "color 120ms ease-out",
					cursor: "pointer",
					":hover": {
						color: x.colors.gray[1],
						backgroundColor: "transparent",
						borderColor: "transparent"
					},
					":active": {
						color: x.colors.gray[1],
						backgroundColor: "transparent",
						borderColor: "transparent"
					},
					":focus": {
						color: x.colors.gray[1],
						backgroundColor: "transparent",
						borderColor: "transparent"
					},
					"@media print": {
						display: "none"
					}
				}), "button"),
				ce = (0, s.createStyledComponent)(() => ({
					display: "flex",
					justifyContent: "space-between",
					alignItems: "start",
					width: "100%",
					flexWrap: "wrap"
				})),
				Q = x => x.current ? [...x.current.children].reduce((w, K) => (K.offsetTop >= h && w++, w), 0) : 0;
			let ae = 0;
			class $ extends e.Component {
				constructor() {
					super();
					C(this, "overflowWrapper", (0, e.createRef)()), C(this, "hasOverflowed", w => {
						const K = Q(this.overflowWrapper);
						w.scrollHeight > h && K >= 1 && !this.state.hasOverflowed ? this.setState({
							hasOverflowed: !0
						}) : (w.scrollHeight < h || K === 0) && this.state.hasOverflowed === !0 && this.setState({
							hasOverflowed: !1
						})
					}), C(this, "addNewFilter", () => {
						const {
							filterDefinitions: w
						} = this.props, K = (0, A.TE)(w), ee = Object.keys(K)[0];
						this.setState({
							openFilter: this.props.filters.length + 1,
							filterChanges: {
								key: ee,
								operator: (0, A.uv)(ee, K),
								value: (0, A.TT)(ee, K)
							}
						})
					}), C(this, "handleOpenFilterEdit", w => {
						this.setState({
							openFilter: w,
							filterChanges: v({}, this.props.filters[w])
						})
					}), C(this, "handleRemoveFilterClick", (w, K) => {
						w.stopPropagation(), this.removeFilter(K)
					}), C(this, "removeFilter", w => {
						const {
							handleFiltersChange: K
						} = this.props, ee = [...this.props.filters], ie = ee[w];
						ee.splice(w, 1), K(ee), this.closeOpenFilterChanges(), this.props.onRemoveFilter({
							field: ie.key,
							operator: ie.operator,
							value: ie.value
						})
					}), C(this, "closeOpenFilterChanges", () => {
						this.setState({
							invalid: !1,
							openFilter: null,
							filterChanges: null
						})
					}), C(this, "handleFilterSubmit", w => {
						const {
							filterDefinitions: K
						} = this.props;
						w.preventDefault();
						const {
							filterChanges: ee
						} = this.state, ie = typeof K[ee.key].parse == "function" ? Array.isArray(ee.value) ? ee.value.map(K[ee.key].parse) : K[ee.key].parse(ee.value) : ee.value;
						if (K[ee.key].validate && (Array.isArray(ie) ? !ie.every(K[ee.key].validate) : !K[ee.key].validate(ie))) return this.setState({
							invalid: !0
						});
						const B = [...this.props.filters],
							P = v({}, ee, {
								value: ie
							}),
							L = !B[this.state.openFilter];
						L ? B.push(P) : B[this.state.openFilter] = v({}, ee), this.props.handleFiltersChange(B, P), (L ? this.props.onAddFilter : this.props.onEditFilter)({
							field: P.key,
							operator: P.operator,
							value: P.value
						}), this.closeOpenFilterChanges()
					}), C(this, "handlePendingKeyChange", ({
						value: w
					}) => {
						const {
							filterDefinitions: K
						} = this.props;
						this.setState({
							invalid: !1,
							filterChanges: {
								key: w,
								operator: (0, A.uv)(w, K),
								value: (0, A.TT)(w, K)
							}
						})
					}), C(this, "handlePendingOperatorChange", ({
						value: w
					}) => {
						let K = v({}, this.state.filterChanges, {
							operator: w
						});
						if ((0, A.dr)(w)) {
							var ee, ie;
							((ee = this.state.filterChanges) === null || ee === void 0 ? void 0 : ee.value) && !Array.isArray((ie = this.state.filterChanges) === null || ie === void 0 ? void 0 : ie.value) && (K.value = [this.state.filterChanges.value])
						} else {
							var B, P, L;
							((B = this.state.filterChanges) === null || B === void 0 ? void 0 : B.value) && Array.isArray((P = this.state.filterChanges) === null || P === void 0 ? void 0 : P.value) && ((L = this.state.filterChanges) === null || L === void 0 ? void 0 : L.value.length) > 0 && (K.value = this.state.filterChanges.value[0])
						}
						this.setState({
							invalid: !1,
							filterChanges: K
						})
					}), C(this, "handlePendingValueChange", w => {
						this.setState({
							invalid: !1,
							filterChanges: v({}, this.state.filterChanges, {
								value: w
							})
						})
					}), C(this, "handleShowOverflow", () => {
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
						id: ++ae
					}, this.renderPendingChangeValue = this.renderPendingChangeValue.bind(this), this.handleFilterSubmit = this.handleFilterSubmit.bind(this), this.handlePendingKeyChange = this.handlePendingKeyChange.bind(this), this.handlePendingOperatorChange = this.handlePendingOperatorChange.bind(this)
				}
				componentDidMount() {
					this.hasOverflowed(this.overflowWrapper.current)
				}
				componentDidUpdate(w) {
					w.filters !== this.props.filters && this.closeOpenFilterChanges(), this.hasOverflowed(this.overflowWrapper.current)
				}
				renderPendingChangeValue(w) {
					const {
						formatLabel: K,
						filterDefinitions: ee
					} = this.props, {
						operator: ie
					} = this.state.filterChanges, B = ee[this.state.filterChanges.key], P = this.state.filterChanges.value, L = D => Array.isArray(D) ? D.map(H => H.value) : (D == null ? void 0 : D.value) || null;
					if (B.renderValueComponent) return B.renderValueComponent({
						value: this.state.filterChanges.value,
						onChange: this.handlePendingValueChange
					});
					switch (B.type) {
						case E.k.select:
							return (0, A.dr)(ie) ? o().createElement(l.Z, {
								searchable: !0,
								multi: !0,
								creatable: !B.options,
								value: typeof P.split == "function" ? P == null ? void 0 : P.split(",") : Array.isArray(P) ? P : [],
								options: B.options ? B.options.map(D => ({
									value: D.value || D,
									label: D.label || K(this.state.filterChanges.key, D, w)
								})) : P ? (Array.isArray(P) ? P : P.split(",")).map(D => ({
									label: D,
									value: D
								})) : [],
								noOptionsMessage: () => null,
								placeholder: o().createElement(g.cC, {
									id: B.options ? "filter_editor.value_in_select_placeholder" : "filter_editor.value_in_creatable_placeholder",
									_: B.options ? "Select multiple values" : "Enter multiple values"
								}),
								onChange: D => {
									this.handlePendingValueChange(L(D))
								},
								isValidNewOption: D => {
									const H = B.validate;
									return !H && D || D && H([D])
								},
								getNewOptionData: (D, H) => ({
									value: D,
									label: H
								})
							}) : o().createElement(r.hQ, {
								hideLabel: !0,
								value: P,
								options: B.options.map(D => ({
									value: D,
									label: K(this.state.filterChanges.key, D, w)
								})),
								onChange: ({
									value: D
								}) => this.handlePendingValueChange(D)
							});
						case E.k.string:
						default:
							return (0, A.dr)(ie) ? o().createElement(l.Z, {
								searchable: !0,
								multi: !0,
								creatable: !0,
								value: typeof P.split == "function" ? P == null ? void 0 : P.split(",") : Array.isArray(P) ? P : [],
								options: P ? (Array.isArray(P) ? P : P.split(",")).map(D => ({
									label: D,
									value: D
								})) : [],
								noOptionsMessage: () => null,
								placeholder: w.t("analytics.report.filters.labels.placeholder", {
									example: ee[this.state.filterChanges.key].example,
									_: ""
								}),
								onChange: D => {
									this.handlePendingValueChange(L(D))
								},
								isValidNewOption: D => {
									const H = B.validate;
									return !H && D || D && H([D])
								},
								getNewOptionData: (D, H) => ({
									value: D,
									label: H
								}),
								formatCreateLabel: D => w.t("filter_editor.value_create_label", {
									value: D
								})
							}) : o().createElement(g.oc, null, D => o().createElement(d.I, {
								value: this.state.filterChanges.value,
								onChange: H => this.handlePendingValueChange(H.target.value),
								mb: 0,
								name: "custom-value",
								placeholder: D.t("analytics.report.filters.labels.placeholder", {
									example: ee[this.state.filterChanges.key].example,
									_: ""
								})
							}))
					}
				}
				render() {
					const {
						formatLabel: w,
						filterDefinitions: K,
						modalStyles: ee,
						filterIconType: ie,
						buttonStyle: B
					} = this.props, P = Q(this.overflowWrapper), L = `filterPanel${this.state.id}`, D = this.state.openFilter !== null;
					return o().createElement(g.oc, null, H => o().createElement(a.ZC, {
						display: "flex",
						flexDirection: "row",
						flexWrap: "wrap",
						mr: "auto",
						width: "100%"
					}, o().createElement(ce, null, o().createElement(z, {
						type: "primary",
						onClick: this.addNewFilter,
						"aria-expanded": D,
						"aria-controls": L,
						inverted: !0,
						buttonStyle: B
					}, o().createElement(y.J, {
						type: ie || "add",
						mr: 1,
						label: H.t("common.add", {
							_: "Add"
						})
					}), o().createElement(g.cC, {
						id: "analytics.report.filters.labels.add_filter",
						_: "Add filter"
					})), this.props.filters.length > 0 && o().createElement(te, null, o().createElement(g.cC, {
						id: "analytics.report.filters.labels.filters",
						_: "Filters:"
					})), this.props.children), o().createElement(I, {
						innerRef: this.overflowWrapper,
						overflowLimit: h,
						showOverflow: this.state.showOverflow
					}, this.props.filters.map((J, X) => {
						const {
							key: me,
							operator: Le,
							value: Ie
						} = J, W = K[me].ignoreLabelTranslation ? K[me].label : H.t(K[me].label), se = H.t(`analytics.report.filters.operators.${Le}`), be = Array.isArray(Ie) ? Ie.map(Fe => w(me, Fe, H)).join(", ") : w(me, Ie, H), je = `${W} ${se} ${be}`;
						return o().createElement(F, {
							key: `${me}-${Le}-${Ie}`,
							title: je
						}, o().createElement(M, {
							onClick: () => this.handleOpenFilterEdit(X)
						}, o().createElement(a.ZC, {
							display: "flex"
						}, o().createElement(U, null, W), o().createElement(V, null, se), o().createElement(R, null, be), (0, A.oN)(J, K) ? o().createElement(t.OE, {
							startAngle: 90,
							color: "gray.4"
						}) : o().createElement(Y, {
							onClick: Fe => this.handleRemoveFilterClick(Fe, X),
							"aria-label": "remove"
						}, o().createElement(y.J, {
							type: "remove"
						})))))
					})), D && o().createElement(u.Z, {
						id: L,
						filterDefinitions: K,
						closeOpenFilterChanges: this.closeOpenFilterChanges,
						handleFilterSubmit: this.handleFilterSubmit,
						handlePendingKeyChange: this.handlePendingKeyChange,
						handlePendingOperatorChange: this.handlePendingOperatorChange,
						renderPendingChangeValue: this.renderPendingChangeValue,
						isNew: this.state.openFilter > this.props.filters.length,
						isPersistent: (0, A.oN)(this.state.filterChanges, K),
						filterChanges: this.state.filterChanges,
						invalid: this.state.invalid,
						formatLabel: w,
						modalStyles: ee
					}), this.state.hasOverflowed && o().createElement(i.Z, {
						count: P,
						showOverflow: this.state.showOverflow,
						onClick: this.handleShowOverflow
					})))
				}
			}
			C($, "propTypes", {
				filterDefinitions: f().shape({}),
				filters: f().arrayOf(f().shape({
					key: f().string,
					operator: f().string,
					value: f().string
				})),
				handleFiltersChange: f().func.isRequired,
				formatLabel: f().func.isRequired,
				onAddFilter: f().func,
				onEditFilter: f().func,
				onRemoveFilter: f().func,
				children: f().node,
				modalStyles: f().object,
				filterIconType: f().string,
				buttonStyle: f().object
			}), _.Z = $
		},
		"../../../common/component/component-filter-bar/src/index.js": function(G, _, n) {
			"use strict";
			n.d(_, {
				ME: function() {
					return o.Z
				},
				f8: function() {
					return e.Z
				},
				kE: function() {
					return c.k
				},
				oN: function() {
					return f.oN
				}
			});
			var e = n("../../../common/component/component-filter-bar/src/FilterBar.jsx"),
				o = n("../../../common/component/component-filter-bar/src/FilterBuilder.jsx"),
				c = n("../../../common/component/component-filter-bar/src/constants.js"),
				f = n("../../../common/component/component-filter-bar/src/utils.js"),
				s = n("../../../common/component/component-filter-bar/src/TimerangeSelect.jsx")
		},
		"../../../common/intl/intl-core/src/errors.ts": function(G, _, n) {
			"use strict";
			n.d(_, {
				OZ: function() {
					return s
				},
				YB: function() {
					return f
				}
			});

			function e(d, p, y) {
				return p = o(p), p in d ? Object.defineProperty(d, p, {
					value: y,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : d[p] = y, d
			}

			function o(d) {
				var p = c(d, "string");
				return typeof p == "symbol" ? p : String(p)
			}

			function c(d, p) {
				if (typeof d != "object" || d === null) return d;
				var y = d[Symbol.toPrimitive];
				if (y !== void 0) {
					var t = y.call(d, p || "default");
					if (typeof t != "object") return t;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (p === "string" ? String : Number)(d)
			}
			class f extends Error {
				constructor(p, y) {
					super(y);
					e(this, "translationKey", void 0), this.translationKey = p, this.name = "TranslatorError"
				}
			}
			class s extends f {
				constructor(p) {
					super(p, `Translation key not found: ${p}`);
					this.name = "TranslatorKeyNotFoundError"
				}
			}
			var g = null
		},
		"../../../common/intl/intl-react/src/I18nProvider.tsx": function(G, _, n) {
			"use strict";
			var e = n("webpack/sharing/consume/default/react/react"),
				o = n.n(e),
				c = n("../../../common/intl/intl-react/src/i18nContext.ts");

			function f() {
				return f = Object.assign ? Object.assign.bind() : function(y) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var a in r) Object.prototype.hasOwnProperty.call(r, a) && (y[a] = r[a])
					}
					return y
				}, f.apply(this, arguments)
			}

			function s(y, t) {
				if (y == null) return {};
				var r = g(y, t),
					a, l;
				if (Object.getOwnPropertySymbols) {
					var i = Object.getOwnPropertySymbols(y);
					for (l = 0; l < i.length; l++) a = i[l], !(t.indexOf(a) >= 0) && (!Object.prototype.propertyIsEnumerable.call(y, a) || (r[a] = y[a]))
				}
				return r
			}

			function g(y, t) {
				if (y == null) return {};
				var r = {},
					a = Object.keys(y),
					l, i;
				for (i = 0; i < a.length; i++) l = a[i], !(t.indexOf(l) >= 0) && (r[l] = y[l]);
				return r
			}
			class d extends e.Component {
				constructor(t) {
					super(t);
					const {
						locale: r,
						phrases: a,
						translator: l
					} = t;
					r && l.locale(r), a && l.extend(a)
				}
				componentDidUpdate(t) {
					t.phrases !== this.props.phrases && this.props.phrases && this.props.translator.locale(this.props.locale)
				}
				render() {
					const {
						children: t
					} = this.props;
					return t
				}
			}
			const p = y => {
				let {
					translator: t
				} = y, r = s(y, ["translator"]);
				const a = () => e.createElement(c.oc, null, l => e.createElement(d, f({
					translator: l
				}, r)));
				return t ? (t.locale(r.locale), e.createElement(c.bd, {
					value: t
				}, a())) : a()
			};
			_.Z = p
		},
		"../../../common/intl/intl-react/src/index.ts": function(G, _, n) {
			"use strict";
			n.d(_, {
				oc: function() {
					return p.oc
				},
				lm: function() {
					return o.Z
				},
				bd: function() {
					return e.Z
				},
				RD: function() {
					return F
				},
				cC: function() {
					return S
				},
				QT: function() {
					return h.Q
				}
			});
			var e = n("../../../common/intl/intl-react/src/I18nProvider.tsx"),
				o = n("../../../common/intl/intl-react/src/I18nLoader.tsx"),
				c = n("webpack/sharing/consume/default/react/react"),
				f = n.n(c),
				s = n("../../../../node_modules/lodash/escape.js"),
				g = n.n(s),
				d = n("../../../../node_modules/@cloudflare/util-markdown/es/index.js"),
				p = n("../../../common/intl/intl-react/src/i18nContext.ts");

			function y(M) {
				for (var U = 1; U < arguments.length; U++) {
					var V = arguments[U] != null ? Object(arguments[U]) : {},
						R = Object.keys(V);
					typeof Object.getOwnPropertySymbols == "function" && R.push.apply(R, Object.getOwnPropertySymbols(V).filter(function(z) {
						return Object.getOwnPropertyDescriptor(V, z).enumerable
					})), R.forEach(function(z) {
						t(M, z, V[z])
					})
				}
				return M
			}

			function t(M, U, V) {
				return U = r(U), U in M ? Object.defineProperty(M, U, {
					value: V,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : M[U] = V, M
			}

			function r(M) {
				var U = a(M, "string");
				return typeof U == "symbol" ? U : String(U)
			}

			function a(M, U) {
				if (typeof M != "object" || M === null) return M;
				var V = M[Symbol.toPrimitive];
				if (V !== void 0) {
					var R = V.call(M, U || "default");
					if (typeof R != "object") return R;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (U === "string" ? String : Number)(M)
			}

			function l() {
				return l = Object.assign ? Object.assign.bind() : function(M) {
					for (var U = 1; U < arguments.length; U++) {
						var V = arguments[U];
						for (var R in V) Object.prototype.hasOwnProperty.call(V, R) && (M[R] = V[R])
					}
					return M
				}, l.apply(this, arguments)
			}
			const i = /<(\d+)>(.*)<\/\1>|<(\d+)\/>/,
				u = /(?:\r\n|\r|\n)/g;

			function E(M, U, V) {
				return c.createElement("span", {
					key: M,
					"data-testid": V,
					dangerouslySetInnerHTML: {
						__html: U
					}
				})
			}

			function A(M, U = [], V = [], R) {
				let z = 0;
				const te = M.replace(u, "").split(i);
				if (te.length === 1) return [E(z, M, R)];
				const Y = [],
					ce = te.shift();
				if (ce) {
					const Q = E(z, ce, R);
					Y.push(Q), typeof Q != "string" && z++
				}
				for (const [Q, ae, $] of v(te)) {
					U[Q] || window.console && console.warn(`Missing Component for translation key: ${M}, index: ${Q}. Fragment will be used.`);
					const x = U[Q] || c.Fragment,
						w = V[Q] || {},
						K = E(0, ae);
					if (Y.push(c.createElement(x, l({
							key: z
						}, w), K)), z++, $) {
						const ee = E(z, $);
						Y.push(ee), typeof ee != "string" && z++
					}
				}
				return Y
			}

			function v(M) {
				if (!M.length) return [];
				const [U, V, R, z] = M.slice(0, 4);
				return [
					[parseInt(U || R), V || "", z]
				].concat(v(M.slice(4, M.length)))
			}

			function C({
				id: M = "",
				smartCount: U,
				_: V,
				values: R,
				applyMarkdown: z,
				Components: te,
				componentProps: Y,
				testId: ce
			}) {
				return c.createElement(p.oc, null, Q => {
					R && Object.keys(R).forEach(w => R[w] = g()(R[w])), Y && Y.forEach(w => {
						Object.keys(w).forEach(K => {
							typeof w[K] == "string" && (w[K] = g()(w[K]))
						})
					});
					const ae = y({
							smart_count: U,
							_: V
						}, R),
						$ = z ? (0, d.Z)(Q.t(M.toString(), ae), {
							__dangerouslyDontSanitizeMarkdown: !0
						}) : Q.t(M.toString(), ae),
						x = A($, te, Y, ce);
					return x.length > 1 ? c.createElement(c.Fragment, null, x) : x[0]
				})
			}
			var S = C,
				T = n("../../../common/intl/intl-react/src/withTranslator.tsx"),
				h = n("../../../common/intl/intl-react/src/useI18n.tsx"),
				I = n("../../../common/intl/intl-types/src/index.ts"),
				F = f().createContext(I.Q.en_US)
		},
		"../../../common/util/types/src/api/domain.ts": function(G, _, n) {
			"use strict";
			n.d(_, {
				Aw: function() {
					return I
				},
				Ib: function() {
					return T
				},
				Ks: function() {
					return F
				},
				MS: function() {
					return h
				},
				PN: function() {
					return u
				},
				Pp: function() {
					return f
				},
				Q3: function() {
					return l
				},
				TS: function() {
					return i
				},
				W7: function() {
					return v
				},
				dN: function() {
					return M
				},
				eF: function() {
					return S
				},
				qp: function() {
					return t
				},
				wR: function() {
					return y
				}
			});
			var e = n("../../../../node_modules/@cloudflare/util-en-garde/es/index.js");
			const o = e.eg.union([e.eg.literal("registrationPending"), e.eg.literal("registrationPendingAuthorization"), e.eg.literal("registrationPendingZoneCreate"), e.eg.literal("registrationPendingRegister"), e.eg.literal("registrationPendingZoneActivate"), e.eg.literal("registrationPendingSettlement"), e.eg.literal("registrationFailed"), e.eg.literal("registrationFailedAuthorization"), e.eg.literal("registrationFailedQuote"), e.eg.literal("registrationFailedRegister"), e.eg.literal("registrationFailedZoneCreate"), e.eg.literal("registrationFailedZoneActivate"), e.eg.literal("registrationFailedSettlement"), e.eg.literal("registrationFailedDNSFatal"), e.eg.literal("registrationFailedDNSError"), e.eg.literal("registrationFailedDNSLandingCNameFatal"), e.eg.literal("registrationFailedDNSLandingCNameError"), e.eg.literal("restorationPending"), e.eg.literal("restorationPendingZoneCreate"), e.eg.literal("restorationPendingZoneActivate"), e.eg.literal("restorationFailedZoneCreate"), e.eg.literal("restorationFailedZoneActivate"), e.eg.literal("restorationSuccess"), e.eg.literal("restorationZoneCreateSuccess"), e.eg.literal("restorationZoneActivateSuccess"), e.eg.literal("restorationSuccessWithoutReport"), e.eg.literal("transferFOAPending"), e.eg.literal("transferPending"), e.eg.literal("transferRejected"), e.eg.literal("transferCancelled"), e.eg.literal("transferOutPending"), e.eg.literal("registrationActive"), e.eg.literal("expiredParked"), e.eg.literal("deletionInitiated"), e.eg.literal("deletionIrredeemable"), e.eg.literal("domainTerminated"), e.eg.literal("domainFrozen")]),
				c = e.eg.object({
					eligible: e.eg.boolean,
					enabled: e.eg.boolean.optional
				}),
				f = e.eg.object({
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
				s = e.eg.object({
					exists: e.eg.boolean,
					not_premium: e.eg.boolean,
					not_secure: e.eg.boolean,
					not_started: e.eg.boolean,
					not_waiting: e.eg.boolean,
					supported_tld: e.eg.boolean
				}),
				g = e.eg.object({
					registrant: f.optional,
					technical: f.optional,
					administrator: f.optional,
					billing: f.optional
				}),
				d = e.eg.object({
					auto_renew: e.eg.boolean,
					privacy: e.eg.boolean,
					contacts: g.optional,
					years: e.eg.number
				}),
				p = e.eg.object({
					icann_fee: e.eg.number,
					redemption_fee: e.eg.number,
					registration_fee: e.eg.number,
					renewal_fee: e.eg.number,
					transfer_fee: e.eg.number
				});
			let y = function(U) {
				return U.ONBOARDING_INITIATED = "Onboarding Initiated", U.ONBOARDED = "Onboarded", U.PENDING_REGISTRY_LOCK = "Pending Registry Lock", U.PENDING_REGISTRY_UNLOCK = "Pending Registry Unlock", U.REGISTRY_UNLOCKED = "Registry Unlocked", U.LOCKED = "Locked", U.FAILED_TO_LOCK = "Failed To Lock", U.PENDING_UNLOCK_APPROVAL = "Pending Unlock Approval", U.UNLOCKED = "Unlocked", U.OFFBOARDED = "Offboarded", U
			}({});
			const t = e.eg.object({
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
						status: e.eg.enum(y).optional
					}).optional,
					dns: e.eg.array(e.eg.any).optional,
					ds_records: e.eg.array(e.eg.any).optional,
					email_verified: e.eg.boolean.optional,
					expires_at: e.eg.string.optional,
					fees: p.optional,
					landing: e.eg.union([c, e.eg.boolean]).optional,
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
					transfer_conditions: s.optional,
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
				a = e.eg.object({
					result: e.eg.array(t),
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
				l = e.eg.object({
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
				i = e.eg.object({
					name: e.eg.string,
					can_register: e.eg.union([e.eg.boolean, e.eg.null]),
					supported_tld: e.eg.union([e.eg.boolean, e.eg.null]),
					premium: e.eg.union([e.eg.boolean, e.eg.null]),
					available: e.eg.union([e.eg.boolean, e.eg.null])
				});
			let u = function(U) {
				return U.PENDING = "pending", U.VERIFIED = "verified", U.REJECTED = "rejected", U.PENDING_DELETE = "pending_delete", U.DELETED = "deleted", U
			}({});
			const E = e.eg.object({
					email: e.eg.string,
					status: e.eg.enum(u),
					first_name: e.eg.union([e.eg.null, e.eg.string]).optional,
					last_name: e.eg.union([e.eg.null, e.eg.string]).optional,
					phone_number: e.eg.union([e.eg.null, e.eg.string]).optional
				}),
				A = e.eg.object({
					designated_approvers: e.eg.array(E)
				});
			let v = function(U) {
				return U.PENDING = "pending", U.PENDING_UPDATE = "pending_update", U.ENABLED = "enabled", U.DISABLED = "disabled", U
			}({});
			const C = e.eg.object({
					auto_relock_after: e.eg.number,
					number_of_designated_approvers: e.eg.number,
					status: e.eg.enum(v)
				}),
				S = e.eg.intersection([C, A]),
				T = e.eg.object({
					status: e.eg.number,
					message: e.eg.string
				});
			let h = function(U) {
				return U.UNLOCK_APPROVAL = "UnlockApprovalRequest", U.CONFIGURATION_UPDATE = "ConfigurationUpdateRequest", U.APPROVER_EMAIL_VERIFICATION = "DesignatedApproverVerificationRequest", U.APPROVER_REMOVAL = "DesignatedApproverRemovalRequest", U
			}({});
			const I = e.eg.object({
					tlds: e.eg.array(e.eg.string)
				}),
				F = e.eg.object({
					message: e.eg.string
				}),
				M = e.eg.object({
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
		"../../../common/util/types/src/utils/index.ts": function(G, _, n) {
			"use strict";
			n.d(_, {
				Yd: function() {
					return e
				},
				vE: function() {
					return o
				}
			});

			function e(c) {
				return Object.keys(c)
			}
			const o = (c, f) => {
				if (f !== void 0) throw new Error("Unexpected object: " + c);
				return f
			}
		},
		"../react/app/assets lazy recursive ^\\.\\/favicon\\-.*\\.ico$": function(G, _, n) {
			var e = {
				"./favicon-cookie.ico": ["../react/app/assets/favicon-cookie.ico", 48837],
				"./favicon-dev.ico": ["../react/app/assets/favicon-dev.ico", 81377],
				"./favicon-staging.ico": ["../react/app/assets/favicon-staging.ico", 97266],
				"./favicon-zeit.ico": ["../react/app/assets/favicon-zeit.ico", 15850]
			};

			function o(c) {
				if (!n.o(e, c)) return Promise.resolve().then(function() {
					var g = new Error("Cannot find module '" + c + "'");
					throw g.code = "MODULE_NOT_FOUND", g
				});
				var f = e[c],
					s = f[0];
				return n.e(f[1]).then(function() {
					return n.t(s, 1 | 16)
				})
			}
			o.keys = function() {
				return Object.keys(e)
			}, o.id = "../react/app/assets lazy recursive ^\\.\\/favicon\\-.*\\.ico$", G.exports = o
		}
	}
]);

//# debugId=de758df4-5854-5652-bcd5-efb7348da376