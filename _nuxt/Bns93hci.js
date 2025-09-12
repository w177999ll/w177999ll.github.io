import e from "./BANbGyBU.js";
import {
	_ as a
} from "./DljIJzHq.js";
import {
	d as s,
	r as l,
	j as t,
	o as i,
	t as o,
	x as r,
	z as u,
	A as n,
	_ as d,
	v as c,
	J as p,
	R as v,
	S as m,
	I as y,
	B as f,
	K as g,
	N as h,
	O as j,
	T as b,
	y as k,
	F as _
} from "./DpD38Hq9.js";
import {
	T as C,
	_ as w
} from "./DaubXNes.js";
import {
	u as I
} from "./DnjT7zNg.js";
import {
	u as D
} from "./CTx_gHj7.js";
import {
	_ as S,
	a as x
} from "./BT-Ag9Lw.js";
import {
	_ as H
} from "./Bff37aro.js";
import {
	u as q
} from "./AE7psNvX.js";
import {
	_ as Q
} from "./MJhzGfyV.js";
import {
	_ as J
} from "./BCo6x5W8.js";
import "./C8hpIBoG.js";
import "./BLxG2RsL.js";
import "./B4ZxnYc8.js";
import "./BpvzvWyB.js";
import "./DeVOemtc.js";
import "./C0XUvHtU.js";
import "./l2rsThpR.js";
import "./CE2y24bF.js";
import "./gSuRa5u_.js";
import "./BOzaSZwJ.js";
import "./BUzHT0Ek.js";
import "./DLyGchdh.js";
import "./CLmcmnGu.js";
import "./DjN1tzHg.js";
import "./CYSlBwxp.js";
import "./DiJwGkuW.js";
import "./F3BADSHd.js";
import "./DQ0nmumO.js";
import "./DNc6_3jH.js";
import "./D3ikBJ7G.js";
const L = {
		class: "query-container"
	},
	N = {
		class: "query-card"
	},
	O = {
		class: "tab-content"
	},
	R = {
		class: "input-section"
	},
	U = {
		class: "input-container"
	},
	z = {
		class: "input-label"
	},
	F = {
		class: "input-wrapper"
	},
	A = {
		key: 0,
		class: "history-section"
	},
	E = {
		class: "history-header"
	},
	K = {
		class: "history-tags"
	},
	P = {
		class: "action-buttons"
	},
	T = {
		key: 0
	},
	V = {
		key: 1,
		class: "empty-result"
	},
	B = {
		class: "tab-content"
	},
	G = {
		class: "input-section"
	},
	M = {
		class: "input-container"
	},
	Z = {
		class: "input-label"
	},
	W = {
		class: "input-wrapper"
	},
	X = {
		key: 0,
		class: "history-section"
	},
	Y = {
		class: "history-header"
	},
	$ = {
		class: "history-tags"
	},
	ee = {
		class: "action-buttons"
	},
	ae = {
		key: 0
	},
	se = {
		key: 1,
		class: "empty-result"
	},
	le = J(s({
		__name: "query",
		setup(s) {
			I({
				title: "信息查询"
			});
			const J = D(),
				le = q(),
				te = l("user"),
				ie = l(),
				oe = l(),
				re = l(),
				ue = l(!1),
				ne = l(),
				de = l(),
				ce = l(!1),
				pe = l(!1),
				ve = l(),
				me = l(),
				ye = l([]),
				fe = l([]),
				ge = t((() => J.getFightPvPResultLoading)),
				he = l(10),
				je = [{
					label: "切磋10次",
					key: 10
				}, {
					label: "切磋20次",
					key: 20
				}, {
					label: "切磋30次",
					key: 30
				}, {
					label: "切磋40次",
					key: 40
				}, {
					label: "切磋50次",
					key: 50
				}, {
					label: "切磋100次",
					key: 100
				},
                {
					label: "切磋200次",
					key: 200
				},
                {
					label: "切磋300次",
					key: 300
				},
                {
					label: "切磋400次",
					key: 400
				},
                {
					label: "切磋500次",
					key: 500
				}],
				be = e => {
					he.value = e
				};
			i((() => {
				ke()
			}));
			const ke = () => {
					try {
						const e = localStorage.getItem("userQueryHistory"),
							a = localStorage.getItem("legionQueryHistory");
						e && (ye.value = JSON.parse(e)), a && (fe.value = JSON.parse(a))
					} catch (e) {}
				},
				_e = e => {
					try {
						const a = "user" === e ? "userQueryHistory" : "legionQueryHistory",
							s = "user" === e ? ye.value : fe.value;
						localStorage.setItem(a, JSON.stringify(s))
					} catch (a) {}
				},
				Ce = (e, a, s) => {
					const l = "user" === e ? ye : fe;
					l.value = l.value.filter((e => e.id !== a)), l.value.unshift({
						id: a,
						name: s
					}), l.value.length > 10 && (l.value = l.value.slice(0, 10)), _e(e)
				},
				we = (e, a) => {
					const s = "user" === e ? ye : fe;
					s.value = s.value.filter((e => e.id !== a)), _e(e)
				},
				Ie = e => {
					("user" === e ? ye : fe)
					.value = [], _e(e), le.success("历史记录已清空")
				},
				De = (e, a) => {
					"user" === e ? (oe.value = a, xe()) : (re.value = a, He())
				},
				Se = e => {
					te.value = e, "user" === e ? pe.value = !1 : ce.value = !1
				},
				xe = () => {
					oe.value && (ce.value = !0, ie.value = Date.now())
				},
				He = () => {
					re.value && (pe.value = !0, de.value = Date.now())
				},
				qe = () => {
					oe.value && (ue.value = !0, ne.value = Date.now())
				},
				Qe = (e, a) => {
					e && (null == a ? void 0 : a.name) && Ce("user", oe.value, a.name)
				},
				Je = (e, a) => {
					e && (null == a ? void 0 : a.name) && Ce("legion", re.value, a.name)
				};
			return i((() => {
				ke(), window.addEventListener("storage", (e => {
					"userQueryHistory" !== e.key && "legionQueryHistory" !== e.key || ke()
				}))
			})), (s, l) => {
				const t = e,
					i = y,
					I = Q,
					D = H,
					q = x,
					J = a,
					le = S,
					ke = d;
				return c(), o("div", L, [l[16] || (l[16] = r("div", {
					class: "query-header"
				}, [r("h1", {
					class: "page-title"
				}, "信息查询")], -1)), r("div", N, [u(le, {
					type: "line",
					animated: "",
					"default-value": te.value,
					"onUpdate:value": Se
				}, {
					default: n((() => [u(q, {
						name: "user",
						tab: "用户查询"
					}, {
						default: n((() => [r("div", O, [r("div", R, [r("div", U, [r("div", z, [u(t, {
							name: "ion:person"
						}), l[6] || (l[6] = r("span", null, "用户ID", -1))]), r("div", F, [v(r("input", {
							"onUpdate:modelValue": l[0] || (l[0] = e => oe.value = e),
							type: "number",
							placeholder: "输入用户ID",
							class: "query-input"
						}, null, 512), [
							[m, oe.value]
						])]), ye.value.length > 0 ? (c(), o("div", A, [r("div", E, [l[8] || (l[8] = r("span", {
							class: "history-title"
						}, "历史记录", -1)), u(i, {
							text: "",
							type: "error",
							size: "tiny",
							onClick: l[1] || (l[1] = e => Ie("user"))
						}, {
							default: n((() => l[7] || (l[7] = [f(" 清空 ")]))),
							_: 1
						})]), r("div", K, [(c(!0), o(g, null, h(ye.value, (e => (c(), j(I, {
							key: e.id,
							type: oe.value === e.id ? "success" : "default",
							class: "history-tag",
							closable: "",
							onClose: b((a => we("user", e.id)), ["stop"]),
							onClick: a => De("user", e.id)
						}, {
							default: n((() => [f(k(e.name), 1)])),
							_: 2
						}, 1032, ["type", "onClose", "onClick"])))), 128))])])) : p("", !0)]), r("div", P, [u(i, {
							type: "primary",
							disabled: !oe.value,
							onClick: xe,
							class: "action-btn"
						}, {
							icon: n((() => [u(t, {
								name: "ion:search"
							})])),
							default: n((() => [l[9] || (l[9] = f(" 查询 "))])),
							_: 1
						}, 8, ["disabled"]), u(i, {
							type: "info",
							disabled: !oe.value || _(ge),
							onClick: qe,
							loading: _(ge),
							class: "action-btn fight-btn"
						}, {
							icon: n((() => [u(t, {
								name: "ion:flash"
							})])),
							default: n((() => [f(" 切磋" + k(he.value) + "次 ", 1), u(D, {
								onSelect: be,
								trigger: "hover",
								options: je
							}, {
								default: n((() => [u(t, {
									onClick: l[2] || (l[2] = b((() => {}), ["stop"])),
									name: "ion:chevron-down",
									class: "dropdown-icon"
								})])),
								_: 1
							})])),
							_: 1
						}, 8, ["disabled", "loading"])])]), ce.value ? (c(), o("div", T, [u(C, {
							ref_key: "userCardRef",
							ref: ve,
							"user-id": oe.value,
							timestamp: ie.value,
							onLoaded: Qe
						}, null, 8, ["user-id", "timestamp"])])) : (c(), o("div", V, l[10] || (l[10] = [r("p", null, "输入用户ID并点击查询按钮", -1)])))])])),
						_: 1
					}), u(q, {
						name: "legion",
						tab: "俱乐部查询"
					}, {
						default: n((() => [r("div", B, [r("div", G, [r("div", M, [r("div", Z, [u(t, {
							name: "ion:people"
						}), l[11] || (l[11] = r("span", null, "俱乐部ID", -1))]), r("div", W, [v(r("input", {
							"onUpdate:modelValue": l[3] || (l[3] = e => re.value = e),
							type: "number",
							placeholder: "输入俱乐部ID",
							class: "query-input"
						}, null, 512), [
							[m, re.value]
						])]), fe.value.length > 0 ? (c(), o("div", X, [r("div", Y, [l[13] || (l[13] = r("span", {
							class: "history-title"
						}, "历史记录", -1)), u(i, {
							text: "",
							type: "error",
							size: "tiny",
							onClick: l[4] || (l[4] = e => Ie("legion"))
						}, {
							default: n((() => l[12] || (l[12] = [f(" 清空 ")]))),
							_: 1
						})]), r("div", $, [(c(!0), o(g, null, h(fe.value, (e => (c(), j(I, {
							key: e.id,
							type: re.value === e.id ? "success" : "default",
							class: "history-tag",
							closable: "",
							onClose: b((a => we("legion", e.id)), ["stop"]),
							onClick: a => De("legion", e.id)
						}, {
							default: n((() => [f(k(e.name), 1)])),
							_: 2
						}, 1032, ["type", "onClose", "onClick"])))), 128))])])) : p("", !0)]), r("div", ee, [u(i, {
							type: "primary",
							disabled: !re.value,
							onClick: He,
							class: "action-btn full-width"
						}, {
							icon: n((() => [u(t, {
								name: "ion:search"
							})])),
							default: n((() => [l[14] || (l[14] = f(" 查询 "))])),
							_: 1
						}, 8, ["disabled"])])]), pe.value ? (c(), o("div", ae, [u(J, {
							ref_key: "legionInfoRef",
							ref: me,
							"legion-id": re.value,
							timestamp: de.value,
							onLoaded: Je
						}, null, 8, ["legion-id", "timestamp"])])) : (c(), o("div", se, l[15] || (l[15] = [r("p", null, "输入俱乐部ID并点击查询按钮", -1)])))])])),
						_: 1
					})])),
					_: 1
				}, 8, ["default-value"])]), u(ke, {
					show: ue.value,
					"onUpdate:show": l[5] || (l[5] = e => ue.value = e),
					preset: "card",
					title: "战斗结果",
					bordered: !1,
					style: {
						width: "350px"
					}
				}, {
					default: n((() => [u(w, {
						"target-id": oe.value,
						timestamp: ne.value,
						"max-fight": he.value
					}, null, 8, ["target-id", "timestamp", "max-fight"])])),
					_: 1
				}, 8, ["show"])])
			}
		}
	}), [
		["__scopeId", "data-v-57cff509"]
	]);
export {
	le as
	default
};