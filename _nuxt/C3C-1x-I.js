import e from "./BANbGyBU.js";
import {
	_ as a
} from "./DWWfh0Ho.js";
import {
	d as t,
	r as l,
	o as s,
	e as r,
	t as i,
	x as o,
	z as n,
	J as d,
	F as c,
	E as u,
	A as p,
	_ as m,
	Q as v,
	v as x,
	I as g,
	B as f
} from "./DpD38Hq9.js";
import {
	u as h
} from "./DnjT7zNg.js";
import {
	u as w
} from "./BUzHT0Ek.js";
import {
	u as b
} from "./CE2y24bF.js";
import {
	u as y
} from "./D85Nf4I_.js";
import {
	_
} from "./q0BhiYYv.js";
import {
	S as k
} from "./CCOQKyZz.js";
import {
	u as j
} from "./AE7psNvX.js";
import {
	_ as T,
	a as z
} from "./BK-7DiZd.js";
import {
	_ as C
} from "./DrZaQ8bd.js";
import {
	_ as J
} from "./BCo6x5W8.js";
import "./B4ZxnYc8.js";
import "./l2rsThpR.js";
import "./CYSlBwxp.js";
import "./Bz3-pLFH.js";
const L = {
		class: "min-h-screen w-full bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden"
	},
	S = {
		class: "absolute inset-0 overflow-hidden pointer-events-none"
	},
	U = {
		key: 0,
		id: "particles-js",
		class: "absolute inset-0 opacity-40"
	},
	q = {
		class: "container mx-auto min-h-screen flex items-center justify-center p-4"
	},
	H = {
		class: "lg:w-1/2 p-6 lg:p-12 bg-gradient-to-br from-blue-500 to-indigo-600 text-white relative overflow-hidden"
	},
	M = {
		class: "flex items-center space-x-2 mb-6 lg:mb-12"
	},
	E = {
		class: "relative z-10"
	},
	F = {
		key: 0,
		class: "space-y-3 lg:space-y-4"
	},
	A = {
		key: 0,
		class: "absolute -bottom-32 -left-32 w-64 h-64 bg-blue-400 rounded-full opacity-20"
	},
	B = {
		key: 1,
		class: "absolute -top-32 -right-32 w-64 h-64 bg-indigo-400 rounded-full opacity-20"
	},
	I = {
		key: 2,
		class: "floating-squares"
	},
	D = {
		class: "lg:w-1/2 p-6 lg:p-12"
	},
	Q = {
		class: "max-w-md mx-auto"
	},
	R = {
		class: "flex justify-between items-center mb-4"
	},
	Z = {
		class: "mt-4 lg:mt-6"
	},
	G = ["innerHTML"],
	K = ["innerHTML"],
	N = J(t({
		__name: "login",
		setup(t) {
			h({
				title: "用户登录"
			});
			const J = v(),
				N = l(null),
				O = j(),
				P = l(!1),
				V = l(!1),
				W = w("/api/v1/agreement/user"),
				X = w("/api/v1/agreement/privacy"),
				Y = b(),
				$ = l({
					username: "",
					password: "",
					agreeToTerms: !1
				}),
				ee = y(),
				ae = l(!1),
				te = {
					username: [{
						required: !0,
						message: "请输入用户名"
					}],
					password: [{
						required: !0,
						message: "请输入密码"
					}]
				},
				le = async () => {
					var e;
					$.value.agreeToTerms = 1;
					!1 !== $.value.agreeToTerms ? (await (null == (e = N.value) ? void 0 : e.validate()), ae.value = !0, ee.login($.value.username, $.value.password)
						.finally((() => {
							ae.value = !1
						}))) : O.error("请先同意用户协议和隐私政策")
				}, se = () => {
					P.value = !0, W.execute()
				}, re = () => {
					V.value = !0, X.execute()
				};
			return s((() => {
				!Y.value && "undefined" != typeof window && window.particlesJS && window.particlesJS("particles-js", {
					particles: {
						number: {
							value: 40,
							density: {
								enable: !0,
								value_area: 800
							}
						},
						color: {
							value: "#4F46E5"
						},
						shape: {
							type: "circle"
						},
						opacity: {
							value: .5,
							random: !1
						},
						size: {
							value: 3,
							random: !0
						},
						line_linked: {
							enable: !0,
							distance: 150,
							color: "#4F46E5",
							opacity: .2,
							width: 1
						},
						move: {
							enable: !0,
							speed: 2,
							direction: "none",
							random: !1,
							straight: !1,
							out_mode: "out",
							bounce: !1
						}
					},
					interactivity: {
						detect_on: "canvas",
						events: {
							onhover: {
								enable: !0,
								mode: "grab"
							},
							onclick: {
								enable: !0,
								mode: "push"
							},
							resize: !0
						}
					},
					retina_detect: !0
				})
			})), r((() => {
				window.particlesJS && window.particlesJS("particles-js", "destroy")
			})), (t, l) => {
				var s, r;
				const v = e,
					h = C,
					w = z,
					b = g,
					y = _,
					j = T,
					O = k,
					ee = m;
				return x(), i("div", L, [o("div", S, [c(Y) ? d("", !0) : (x(), i("div", U)), l[6] || (l[6] = o("div", {
					class: "absolute inset-0 bg-grid-pattern opacity-10"
				}, null, -1))]), o("div", q, [o("div", {
					class: u(["w-full max-w-6xl bg-white/80 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden flex flex-col lg:flex-row", {
						"hover-float": !c(Y)
					}])
				}, [o("div", H, [o("div", M, [o("img", {
					src: a,
					alt: "Logo",
					class: u([{
						"animate-spin-slow": !c(Y)
					}, "w-8 h-8 lg:w-10 lg:h-10"])
				}, null, 2), l[7] || (l[7] = o("span", {
					class: "text-xl lg:text-2xl font-bold tracking-wider"
				}, "希露薇❤", -1))]), o("div", E, [l[11] || (l[11] = o("h2", {
					class: "text-2xl lg:text-4xl font-bold mb-4 lg:mb-6 gradient-text-white"
				}, " 欢迎回来 ", -1)), c(Y) ? d("", !0) : (x(), i("div", F, [o("div", {
					class: u(["flex items-center space-x-2 lg:space-x-3", {
						"feature-item": !c(Y)
					}])
				}, [n(v, {
					name: "i-ph-check-circle",
					class: "text-xl lg:text-2xl"
				}), l[8] || (l[8] = o("span", {
					class: "text-sm lg:text-base"
				}, "安全可靠的运行机制", -1))], 2), o("div", {
					class: u(["flex items-center space-x-2 lg:space-x-3", {
						"feature-item": !c(Y)
					}])
				}, [n(v, {
					name: "i-ph-users",
					class: "text-xl lg:text-2xl"
				}), l[9] || (l[9] = o("span", {
					class: "text-sm lg:text-base"
				}, "活跃友好的社区氛围", -1))], 2), o("div", {
					class: u(["flex items-center space-x-2 lg:space-x-3", {
						"feature-item": !c(Y)
					}])
				}, [n(v, {
					name: "i-ph-sparkle",
					class: "text-xl lg:text-2xl"
				}), l[10] || (l[10] = o("span", {
					class: "text-sm lg:text-base"
				}, "优质服务的享受", -1))], 2)]))]), c(Y) ? d("", !0) : (x(), i("div", A)), c(Y) ? d("", !0) : (x(), i("div", B)), c(Y) ? d("", !0) : (x(), i("div", I))]), o("div", D, [o("div", Q, [l[19] || (l[19] = o("h3", {
					class: "text-xl lg:text-2xl font-bold text-gray-800 mb-4 lg:mb-6 text-center"
				}, " 用户登录 ", -1)), n(j, {
					ref_key: "formRef",
					ref: N,
					model: $.value,
					rules: te,
					"label-placement": "top",
					"require-mark-placement": "right-hanging",
					size: "large"
				}, {
					default: p((() => [n(w, {
						label: "用户名",
						path: "username"
					}, {
						default: p((() => [n(h, {
							value: $.value.username,
							"onUpdate:value": l[0] || (l[0] = e => $.value.username = e),
							placeholder: "请输入用户名",
							maxlength: 50
						}, {
							prefix: p((() => [n(v, {
								name: "i-ph-user",
								class: "text-gray-400"
							})])),
							_: 1
						}, 8, ["value"])])),
						_: 1
					}), n(w, {
						label: "密码",
						path: "password"
					}, {
						default: p((() => [n(h, {
							value: $.value.password,
							"onUpdate:value": l[1] || (l[1] = e => $.value.password = e),
							type: "password",
							placeholder: "请输入密码",
							"show-password-on": "click",
							maxlength: 20
						}, {
							prefix: p((() => [n(v, {
								name: "i-ph-lock",
								class: "text-gray-400"
							})])),
							_: 1
						}, 8, ["value"])])),
						_: 1
					}), o("div", Z, [n(b, {
						type: "primary",
						block: "",
						loading: ae.value,
						onClick: le,
						size: "large",
						class: "hover:shadow-lg transition-all"
					}, {
						default: p((() => l[17] || (l[17] = [f(" 登录 ")]))),
						_: 1
					}, 8, ["loading"])]), o("div", {
						class: "mt-4 lg:mt-6 text-center"
					}, [n(b, {
						text: "",
						class: "text-sm text-gray-500 hover:text-primary",
						onClick: l[18] || (l[18] = e => c(J)
							.push("/register"))
					}, {
						default: p((() => [f("没有账号？立即注册")])),
						_: 1
					})])])),
					_: 1
				}, 8, ["model"])])])], 2)]), n(ee, {
					show: P.value,
					"onUpdate:show": l[4] || (l[4] = e => P.value = e),
					preset: "card",
					style: {
						width: "800px"
					},
					title: null == (s = c(W)
						.data.value) ? void 0 : s.title,
					bordered: !1,
					loading: c(X)
						.loading
				}, {
					default: p((() => [n(O, {
						style: {
							"max-height": "60vh"
						}
					}, {
						default: p((() => {
							var e;
							return [o("div", {
								class: "whitespace-pre-wrap editor-content-view",
								innerHTML: null == (e = c(W)
									.data.value) ? void 0 : e.content
							}, null, 8, G)]
						})),
						_: 1
					})])),
					_: 1
				}, 8, ["show", "title", "loading"]), n(ee, {
					show: V.value,
					"onUpdate:show": l[5] || (l[5] = e => V.value = e),
					preset: "card",
					style: {
						width: "800px"
					},
					title: null == (r = c(X)
						.data.value) ? void 0 : r.title,
					bordered: !1,
					loading: c(X)
						.loading
				}, {
					default: p((() => [n(O, {
						style: {
							"max-height": "60vh"
						}
					}, {
						default: p((() => {
							var e;
							return [o("div", {
								class: "whitespace-pre-wrap editor-content-view",
								innerHTML: null == (e = c(X)
									.data.value) ? void 0 : e.content
							}, null, 8, K)]
						})),
						_: 1
					})])),
					_: 1
				}, 8, ["show", "title", "loading"])])
			}
		}
	}), [
		["__scopeId", "data-v-82b616be"]
	]);
export {
	N as
	default
};
