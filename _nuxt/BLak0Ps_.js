import o from "./BANbGyBU.js";
import {
	d as a,
	r as e,
	o as i,
	t as s,
	J as T,
	v as n,
	z as r,
	a1 as l,
	A as c,
	x as u,
	I as p,
	B as d,
	_ as v,
	Q as x,
	F as y,
	E as C,
} from "./DpD38Hq9.js";
/* empty css        */
import {
	_ as m
} from "./BCo6x5W8.js";
import {
	u as g
} from "./DnjT7zNg.js";
import {
	u as _
} from "./BUzHT0Ek.js";
import {
	u as j
} from "./CE2y24bF.js";
import {
	u as f
} from "./D85Nf4I_.js";
import {
	u as k
} from "./AE7psNvX.js";
import {
	_ as w,
	a as b
} from "./BK-7DiZd.js";
import {
	_ as h
} from "./DrZaQ8bd.js";
import {
	S as I
} from "./CCOQKyZz.js";
import {
	_ as L
} from "./DWWfh0Ho.js";

const S = {
		class: "min-h-screen w-full bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden"
	},
	U = {
		class: "absolute inset-0 overflow-hidden pointer-events-none"
	},
	q = {
		key: 0,
		id: "particles-js",
		class: "absolute inset-0 opacity-40"
	},
	H = {
		class: "container mx-auto min-h-screen flex items-center justify-center p-4"
	},
	M = {
		class: "lg:w-1/2 p-6 lg:p-12 bg-gradient-to-br from-blue-500 to-indigo-600 text-white relative overflow-hidden"
	},
	E = {
		class: "flex items-center space-x-2 mb-6 lg:mb-12"
	},
	F = {
		class: "relative z-10"
	},
	A = {
		key: 0,
		class: "space-y-3 lg:space-y-4"
	},
	B = {
		key: 0,
		class: "absolute -bottom-32 -left-32 w-64 h-64 bg-blue-400 rounded-full opacity-20"
	},
	Q = {
		key: 1,
		class: "absolute -top-32 -right-32 w-64 h-64 bg-indigo-400 rounded-full opacity-20"
	},
	R = {
		key: 2,
		class: "floating-squares"
	},
	Z = {
		class: "lg:w-1/2 p-6 lg:p-12"
	},
	D = {
		class: "max-w-md mx-auto"
	},
	G = {
		class: "mt-6 lg:mt-8"
	},
	K = {
		class: "text-center mt-3 lg:mt-4"
	},
	N = m(a({
		__name: "register",
		setup(props) {
			g({
				title: "用户注册"
			});
			const m = x(),
				formRef = e(null),
				O = k(),
				P = e(!1),
				V = e(!1),
				Y = j(),
				$ = e({
					username: "",
					password: "",
					confirmPassword: ""
				}),
				ee = f(),
				ae = e(!1),
				te = {
					username: [{
						required: !0,
						message: "请输入用户名"
					}, {
						min: 3,
						max: 20,
						message: "用户名长度在 3-20 个字符之间"
					}, {
						pattern: /^[a-zA-Z0-9_-]+$/,
						message: "用户名只能包含字母、数字、下划线和横线"
					}, ],
					password: [{
						required: !0,
						message: "请输入密码"
					}, {
						min: 5,
						max: 20,
						message: "密码长度在 5-20 个字符之间"
					}, ],
					confirmPassword: [{
						required: !0,
						message: "请确认密码"
					}, {
						validator: (t, o) => o === $.value.password,
						message: "两次输入的密码不一致"
					}, ],
				},
				le = async () => {
					var t;
					await ((t = formRef.value) == null ? void 0 : t.validate());
					ae.value = !0;
					_("/api/v1/register", {
						method: "POST",
						body: {
							username: $.value.username,
							password: $.value.password,
						},
					}).execute().then((t => {
						t.success && (O.success("注册成功"), m.push("/login"));
					})).finally((() => {
						ae.value = !1;
					}));
				}, se = () => {
					P.value = !0, W.execute()
				}, re = () => {
					V.value = !0, X.execute()
				};
			return i((() => {
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
			})), (a, e) => {
				const i = o,
					k = h,
					_ = b,
					j = p,
					f = v,
					O = I;
				return n(), s("div", S, [u("div", U, [y(Y) ? T("", !0) : (n(), s("div", q)), e[6] || (e[6] = u("div", {
					class: "absolute inset-0 bg-grid-pattern opacity-10"
				}, null, -1))]), u("div", H, [u("div", {
					class: C(["w-full max-w-6xl bg-white/80 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden flex flex-col lg:flex-row", {
						"hover-float": !y(Y)
					}])
				}, [u("div", M, [u("div", E, [u("img", {
					src: L,
					alt: "Logo",
					class: C([{
						"animate-spin-slow": !y(Y)
					}, "w-8 h-8 lg:w-10 lg:h-10"])
				}, null, 2), e[7] || (e[7] = u("span", {
					class: "text-xl lg:text-2xl font-bold tracking-wider"
				}, "🏹", -1))]), u("div", F, [e[11] || (e[11] = u("h2", {
					class: "text-2xl lg:text-4xl font-bold mb-4 lg:mb-6 gradient-text-white"
				}, " 开启您的探索之旅 ", -1)), e[12] || (e[12] = u("p", {
					class: "text-base lg:text-lg text-blue-100 mb-6 lg:mb-8"
				}, " 加入我们的社区，发现更多可能 ", -1)), y(Y) ? T("", !0) : (n(), s("div", A, [u("div", {
					class: C(["flex items-center space-x-2 lg:space-x-3", {
						"feature-item": !y(Y)
					}])
				}, [r(i, {
					name: "i-ph-check-circle",
					class: "text-xl lg:text-2xl"
				}), e[8] || (e[8] = u("span", {
					class: "text-sm lg:text-base"
				}, "安全可靠的运行机制", -1))], 2), u("div", {
					class: C(["flex items-center space-x-2 lg:space-x-3", {
						"feature-item": !y(Y)
					}])
				}, [r(i, {
					name: "i-ph-users",
					class: "text-xl lg:text-2xl"
				}), e[9] || (e[9] = u("span", {
					class: "text-sm lg:text-base"
				}, "活跃友好的社区氛围", -1))], 2), u("div", {
					class: C(["flex items-center space-x-2 lg:space-x-3", {
						"feature-item": !y(Y)
					}])
				}, [r(i, {
					name: "i-ph-sparkle",
					class: "text-xl lg:text-2xl"
				}), e[10] || (e[10] = u("span", {
					class: "text-sm lg:text-base"
				}, "优质服务的享受", -1))], 2)]))]), y(Y) ? T("", !0) : (n(), s("div", B)), y(Y) ? T("", !0) : (n(), s("div", Q)), y(Y) ? T("", !0) : (n(), s("div", R))]), u("div", Z, [u("div", D, [e[15] || (e[15] = u("h3", {
					class: "text-xl lg:text-2xl font-bold text-gray-800 mb-4 lg:mb-6 text-center"
				}, " 用户注册 ", -1)), r(w, {
					ref_key: "formRef",
					ref: formRef,
					model: $.value,
					rules: te,
					"label-placement": "top",
					"require-mark-placement": "right-hanging",
					size: "large"
				}, {
					default: c((() => [r(_, {
						label: "用户名",
						path: "username"
					}, {
						default: c((() => [r(k, {
							value: $.value.username,
							"onUpdate:value": e[0] || (e[0] = t => $.value.username = t),
							placeholder: "请输入用户名",
							maxlength: 20
						}, {
							prefix: c((() => [r(i, {
								name: "i-ph-user",
								class: "text-gray-400"
							})])),
							_: 1
						}, 8, ["value"])])),
						_: 1
					}), r(_, {
						label: "密码",
						path: "password"
					}, {
						default: c((() => [r(k, {
							value: $.value.password,
							"onUpdate:value": e[1] || (e[1] = t => $.value.password = t),
							type: "password",
							placeholder: "请输入密码",
							"show-password-on": "click",
							maxlength: 20
						}, {
							prefix: c((() => [r(i, {
								name: "i-ph-lock",
								class: "text-gray-400"
							})])),
							_: 1
						}, 8, ["value"])])),
						_: 1
					}), r(_, {
						label: "确认密码",
						path: "confirmPassword"
					}, {
						default: c((() => [r(k, {
							value: $.value.confirmPassword,
							"onUpdate:value": e[2] || (e[2] = t => $.value.confirmPassword = t),
							type: "password",
							placeholder: "请再次输入密码",
							"show-password-on": "click",
							maxlength: 20
						}, {
							prefix: c((() => [r(i, {
								name: "i-ph-lock",
								class: "text-gray-400"
							})])),
							_: 1
						}, 8, ["value"])])),
						_: 1
					}), u("div", G, [r(j, {
						type: "primary",
						block: "",
						loading: ae.value,
						onClick: le,
						size: "large",
						class: "hover:shadow-lg transition-all"
					}, {
						default: c((() => e[13] || (e[13] = [d(" 注册账号 ")]))),
						_: 1
					}, 8, ["loading"])]), u("div", K, [r(j, {
						text: "",
						class: "text-xs lg:text-sm hover:text-primary",
						onClick: e[5] || (e[5] = t => y(m).push("/login"))
					}, {
						default: c((() => e[14] || (e[14] = [d(" 已有账号？立即登录 ")])))
					})])])),
					_: 1
				}, 8, ["model"])])])], 2)])])
			}
		}
	}), [
		["__scopeId", "data-v-fc2c9113"]
	]);
export {
	N as
	default
};
