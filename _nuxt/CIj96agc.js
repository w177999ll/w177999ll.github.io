import {
	a4 as e,
	a5 as o,
	d as t,
	h as a,
	a8 as s,
	a9 as r,
	j as n,
	ah as l,
	u as i,
	r as d,
	o as c,
	O as m,
	v as u,
	_ as p,
	A as v,
	x as f,
	z as b,
	F as g,
	y as h,
	B as y,
	I as _,
	t as j,
	cq as k,
	aO as x,
	J as w,
	K as C,
	n as M,
	N as T,
	Z as z,
	g as I
} from "./DpD38Hq9.js";
import {
	_ as L
} from "./DWWfh0Ho.js";
import {
	c as D,
	M as A
} from "./Ba0GNlIZ.js";
import {
	u as Y
} from "./D85Nf4I_.js";
import {
	f as B
} from "./CqBTH17V.js"; /* empty css        */
import {
	u as H,
	k as R,
	b as $,
	l as O
} from "./BUzHT0Ek.js";
import {
	u as U
} from "./AE7psNvX.js";
import {
	_ as K,
	a as P
} from "./BT-Ag9Lw.js";
import {
	_ as S
} from "./q0BhiYYv.js";
import {
	_ as W
} from "./BCo6x5W8.js";
import {
	a as Z
} from "./CTx_gHj7.js";
import q from "./BANbGyBU.js";
import {
	p as F
} from "./lCjFnaQV.js";
import {
	l as J,
	_ as N,
	b as V,
	c as E
} from "./CHnkYDsv.js";
import {
	_ as G
} from "./Bff37aro.js";
import {
	_ as Q
} from "./DVDxt4Gb.js";
import {
	_ as X
} from "./Dx5HKwqO.js";
import {
	_ as ee
} from "./CR7-GpTB.js";
import "./DLyGchdh.js";
import "./CLmcmnGu.js";
import "./BOzaSZwJ.js";
import "./B4ZxnYc8.js";
import "./DjN1tzHg.js";
import "./CYSlBwxp.js";
import "./l2rsThpR.js";
import "./DiJwGkuW.js";
import "./F3BADSHd.js";
import "./BpvzvWyB.js";
import "./DeVOemtc.js";
import "./DQ0nmumO.js";
import "./DNc6_3jH.js";
import "./D3ikBJ7G.js";
import "./Cap6sGiE.js";
import "./Cwo8lmsB.js";
import "./MJhzGfyV.js";
import "./BjAOOWF7.js";
const oe = e("layout-footer", "\n transition:\n box-shadow .3s var(--n-bezier),\n color .3s var(--n-bezier),\n background-color .3s var(--n-bezier),\n border-color .3s var(--n-bezier);\n color: var(--n-text-color);\n background-color: var(--n-color);\n box-sizing: border-box;\n", [o("absolute-positioned", "\n position: absolute;\n left: 0;\n right: 0;\n bottom: 0;\n "), o("bordered", "\n border-top: solid 1px var(--n-border-color);\n ")]),
	te = t({
		name: "LayoutFooter",
		props: Object.assign(Object.assign({}, r.props), {
			inverted: Boolean,
			position: F,
			bordered: Boolean
		}),
		setup(e) {
			const {
				mergedClsPrefixRef: o,
				inlineThemeDisabled: t
			} = s(e), a = r("Layout", "-layout-footer", oe, J, e, o), i = n((() => {
				const {
					common: {
						cubicBezierEaseInOut: o
					},
					self: t
				} = a.value, s = {
					"--n-bezier": o
				};
				return e.inverted ? (s["--n-color"] = t.footerColorInverted, s["--n-text-color"] = t.textColorInverted, s["--n-border-color"] = t.footerBorderColorInverted) : (s["--n-color"] = t.footerColor, s["--n-text-color"] = t.textColor, s["--n-border-color"] = t.footerBorderColor), s
			})), d = t ? l("layout-footer", n((() => e.inverted ? "a" : "b")), i, e) : void 0;
			return {
				mergedClsPrefix: o,
				cssVars: t ? void 0 : i,
				themeClass: null == d ? void 0 : d.themeClass,
				onRender: null == d ? void 0 : d.onRender
			}
		},
		render() {
			var e;
			const {
				mergedClsPrefix: o
			} = this;
			return null === (e = this.onRender) || void 0 === e || e.call(this), a("div", {
				class: [`${o}-layout-footer`, this.themeClass, this.position && `${o}-layout-footer--${this.position}-positioned`, this.bordered && `${o}-layout-footer--bordered`],
				style: this.cssVars
			}, this.$slots)
		}
	}),
	ae = {
		class: "agreement-content"
	},
	se = {
		class: "content-card"
	},
	re = ["innerHTML"],
	ne = {
		class: "update-time"
	},
	le = {
		class: "content-card"
	},
	ie = ["innerHTML"],
	de = {
		class: "update-time"
	},
	ce = {
		class: "agreement-actions"
	},
	me = W(t({
		__name: "AgreementModal",
		emits: ["agree", "update:show"],
		setup(e, {
			emit: o
		}) {
			const t = U();
			i();
			const a = o,
				s = d(!0),
				r = d(!1),
				n = d("user"),
				{
					data: l,
					execute: j
				} = H("/api/v1/agreement/user"),
				{
					data: k,
					execute: x
				} = H("/api/v1/agreement/privacy");
			c((() => {
				j(), x()
			}));
			const w = () => {
				r.value ? (localStorage.setItem("agreementAccepted", "true"), s.value = !1, a("agree")) : t.warning("请先阅读并同意用户协议和隐私政策")
			};
			return (e, o) => {
				const t = P,
					a = K,
					i = S,
					d = _,
					c = p;
				return u(), m(c, {
					show: s.value,
					"onUpdate:show": o[2] || (o[2] = e => s.value = e),
					"mask-closable": !1,
					closable: !1,
					preset: "card",
					class: "agreement-modal",
					style: {
						"max-width": "800px"
					}
				}, {
					default: v((() => [o[5] || (o[5] = f("div", {
						class: "modal-header"
					}, [f("div", {
						class: "header-section"
					}, [f("h1", {
						class: "title"
					}, "用户协议与隐私政策"), f("div", {
						class: "divider"
					})])], -1)), f("div", ae, [b(a, {
						type: "segment",
						animated: "",
						value: n.value,
						"onUpdate:value": o[0] || (o[0] = e => n.value = e),
						class: "custom-tabs"
					}, {
						default: v((() => [b(t, {
							name: "user",
							tab: "用户协议"
						}, {
							default: v((() => {
								var o, t;
								return [f("div", se, [f("div", {
									class: "content-section whitespace-pre-wrap editor-content-view",
									innerHTML: null == (o = g(l)) ? void 0 : o.content
								}, null, 8, re), f("div", ne, " 最后更新：" + h(("formatDate" in e ? e.formatDate : g(B))(null == (t = g(l)) ? void 0 : t.updatedAt, "YYYY年MM月DD日")), 1)])]
							})),
							_: 1
						}), b(t, {
							name: "privacy",
							tab: "隐私政策"
						}, {
							default: v((() => {
								var o, t;
								return [f("div", le, [f("div", {
									class: "content-section whitespace-pre-wrap editor-content-view",
									innerHTML: null == (o = g(k)) ? void 0 : o.content
								}, null, 8, ie), f("div", de, " 最后更新：" + h(("formatDate" in e ? e.formatDate : g(B))(null == (t = g(k)) ? void 0 : t.updatedAt, "YYYY年MM月DD日")), 1)])]
							})),
							_: 1
						})])),
						_: 1
					}, 8, ["value"])]), f("div", ce, [b(i, {
						class: "mb-4",
						checked: r.value,
						"onUpdate:checked": o[1] || (o[1] = e => r.value = e)
					}, {
						default: v((() => o[3] || (o[3] = [y(" 我已阅读并同意《用户协议》和《隐私政策》 ")]))),
						_: 1
					}, 8, ["checked"]), b(d, {
						type: "primary",
						disabled: !r.value,
						onClick: w,
						class: "mt-4 confirm-button",
						block: ""
					}, {
						default: v((() => o[4] || (o[4] = [y(" 确认 ")]))),
						_: 1
					}, 8, ["disabled"])])])),
					_: 1
				}, 8, ["show"])
			}
		}
	}), [
		["__scopeId", "data-v-499edbd0"]
	]),
	ue = t({
		__name: "AgreementWrapper",
		setup(e) {
			const o = Y(),
				t = n((() => null == o ? void 0 : o.agreementAccepted)),
				a = async () => {
					const e = H("/api/v1/agreement/submit", {
						method: "POST"
					});
					await e.execute(), await o.fetchUserInfo()
				};
			return (e, o) => (u(), j("div", null, [g(t) ? k(e.$slots, "default", {
				key: 1
			}) : (u(), m(me, {
				key: 0,
				onAgree: a
			}))]))
		}
	}),
	pe = {
		class: "flex items-center gap-4"
	},
	ve = ["innerHTML"],
	fe = W(t({
		__name: "default",
		setup(e) {
			const o = x(),
				t = Y(),
				a = Z(),
				s = R(),
				r = d(!1),
				n = d(),
				l = [{
					label: "首页",
					path: "/home",
					icon: "ion:md-home"
				}, {
					label: "查询",
					path: "/query",
					icon: "ion:md-ribbon"
				}, {
					label: "功能",
					path: "/feature",
					icon: "ion:cube"
				}, {
					label: "我的",
					path: "/profile",
					icon: "ion:person-circle"
				}],
				i = [{
					label: "个人中心",
					key: "/profile",
					icon: () => b(I("icon"), {
						name: "ion:person-circle"
					}, null)
				}, {
					label: "切换角色",
					key: "/gamerole/list",
					icon: () => b(I("icon"), {
						name: "ion:ios-game-controller-a"
					}, null)
				}, {
					type: "divider",
					key: "d1"
				}, {
					label: "退出登录",
					key: "/logout",
					icon: () => b(I("icon"), {
						name: "ion:log-out"
					}, null)
				}],
				B = e => {
					"/logout" === e ? t.logout() : M(e)
				};
			return c((async () => {
				!(null == t ? void 0 : t.id) && $() && t.fetchUserInfo(), await a.init(), a.send({
					cmd: "role_getroleinfo",
					respKey: "role_getroleinforesp"
				}), a.send({
					cmd: "presetteam_getinfo",
					respKey: "presetteam_getinforesp"
				}), a.send({
					cmd: "system_getdatabundlever",
					respKey: "system_getdatabundlever"
				}), a.send({
					cmd: "mail_getlist",
					respKey: "mail_getlistresp"
				}), (!s || s < D[0].version) && (r.value = !0, n.value = A()
					.render(D[0].content), O(D[0].version))
			})), (e, s) => {
				const d = X,
					c = Q,
					x = G,
					I = _,
					D = V,
					A = E,
					Y = ee,
					H = te,
					R = p,
					$ = N;
				return u(), m($, {
					class: "min-h-screen"
				}, {
					default: v((() => [b(D, {
						bordered: "",
						class: "h-16 px-4 flex items-center justify-between bg-white/80 backdrop-blur-sm shadow-sm z-10"
					}, {
						default: v((() => {
							var o, r;
							return [s[3] || (s[3] = f("div", {
								class: "flex items-center"
							}, [f("img", {
								src: L,
								alt: "Logo",
								class: "h-10 rounded-lg"
							}), y(" ❤ ")], -1)), f("div", pe, [g(t)
								.username ? (u(), j(C, {
									key: 0
								}, [y(h(null == (r = null == (o = g(t)) ? void 0 : o.gameRole) ? void 0 : r.name) + " ", 1), b(x, {
									trigger: "click",
									options: i,
									onSelect: B
								}, {
									default: v((() => [b(c, {
										dot: "",
										type: g(a)
											.isConnected ? "success" : "error"
									}, {
										default: v((() => {
											var e, o, a;
											return [(null == (e = g(t)) ? void 0 : e.gameRole) ? (u(), m(d, {
												key: 0,
												src: (null == (a = null == (o = g(t)) ? void 0 : o.gameRole) ? void 0 : a.avatar) || "/images/default-avatar.png",
												circle: "",
												class: "cursor-pointer"
											}, null, 8, ["src"])) : w("", !0)]
										})),
										_: 1
									}, 8, ["type"])])),
									_: 1
								})], 64)) : (u(), m(I, {
									key: 1,
									secondary: "",
									onClick: s[0] || (s[0] = o => ("navigateTo" in e ? e.navigateTo : g(M))("/login"))
								}, {
									default: v((() => s[2] || (s[2] = [y("登录")]))),
									_: 1
								}))
							])]
						})),
						_: 1
					}), b(A, null, {
						default: v((() => [b(ue, null, {
							default: v((() => [k(e.$slots, "default", {}, void 0, !0)])),
							_: 3
						})])),
						_: 3
					}), b(H, {
						bordered: "",
						position: "absolute",
						class: "footer"
					}, {
						default: v((() => [b(Y, {
							class: "h-full",
							justify: "space-around",
							align: "center"
						}, {
							default: v((() => [(u(), j(C, null, T(l, (t => {
								return b(I, {
									key: t.path,
									type: (a = t.path, o.path.startsWith(a) ? "primary" : "default"),
									text: "",
									onClick: o => ("navigateTo" in e ? e.navigateTo : g(M))(t.path)
								}, {
									icon: v((() => [b(g(q), {
										name: t.icon
									}, null, 8, ["name"])])),
									default: v((() => [y(" " + h(t.label), 1)])),
									_: 2
								}, 1032, ["type", "onClick"]);
								var a
							})), 64))])),
							_: 1
						})])),
						_: 1
					}), b(R, {
						show: g(r),
						"onUpdate:show": s[1] || (s[1] = e => z(r) ? r.value = e : null),
						title: "更新提示",
						preset: "card",
						style: {
							width: "500px"
						}
					}, {
						default: v((() => [f("div", {
							innerHTML: g(n)
						}, null, 8, ve)])),
						_: 1
					}, 8, ["show"])])),
					_: 3
				})
			}
		}
	}), [
		["__scopeId", "data-v-7d9570cc"]
	]);
export {
	fe as
	default
};
