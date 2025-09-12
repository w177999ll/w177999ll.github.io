import {
	ab as e,
	r as t,
	o as r,
	ar as o,
	e as n,
	as as a,
	aG as l,
	ae as s,
	bL as i,
	bM as u,
	bN as c,
	d,
	bO as p,
	aa as f,
	aM as h,
	R as v,
	bP as g,
	h as b,
	bQ as m,
	bR as w,
	bB as y,
	H as $,
	ao as x,
	ap as S,
	P as M,
	bS as j,
	bT as C,
	bU as B,
	bV as O,
	bW as z,
	bX as _,
	bY as T,
	bZ as E,
	b_ as k,
	b$ as R,
	c0 as A,
	c1 as P,
	c2 as I,
	c3 as W,
	c4 as N,
	c5 as L,
	c6 as F,
	c7 as D,
	c8 as X,
	c9 as H,
	ca as Y,
	cb as V,
	cc as K,
	cd as U,
	ce as q,
	a3 as G,
	a6 as Q,
	a4 as Z,
	au as J,
	a7 as ee,
	a5 as te,
	cf as re,
	am as oe,
	a8 as ne,
	a9 as ae,
	D as le,
	j as se,
	ah as ie,
	bK as ue,
	cg as ce,
	aX as de,
	ac as pe,
	K as fe,
	ch as he,
	bH as ve,
	aV as ge,
	bI as be,
	ci as me,
	a_ as we,
	cj as ye,
	bo as $e,
	aq as xe
} from "./DpD38Hq9.js";
import {
	c as Se,
	t as Me,
	i as je,
	g as Ce,
	b as Be
} from "./CYSlBwxp.js";
import {
	c as Oe,
	a as ze,
	o as _e
} from "./CLmcmnGu.js";
import {
	f as Te
} from "./l2rsThpR.js";
import {
	b as Ee
} from "./DiJwGkuW.js";
import {
	u as ke
} from "./B4ZxnYc8.js";
import {
	u as Re
} from "./BOzaSZwJ.js";
const Ae = e("n-internal-select-menu"),
	Pe = e("n-internal-select-menu-body"),
	Ie = "__disabled__";

function We(e) {
	const d = s(i, null),
		p = s(u, null),
		f = s(c, null),
		h = s(Pe, null),
		v = t();
	if ("undefined" != typeof document) {
		v.value = document.fullscreenElement;
		const e = () => {
			v.value = document.fullscreenElement
		};
		r((() => {
			o("fullscreenchange", document, e)
		})), n((() => {
			a("fullscreenchange", document, e)
		}))
	}
	return l((() => {
		var t;
		const {
			to: r
		} = e;
		return void 0 !== r ? !1 === r ? Ie : !0 === r ? v.value || "body" : r : (null == d ? void 0 : d.value) ? null !== (t = d.value.$el) && void 0 !== t ? t : d.value : (null == p ? void 0 : p.value) ? p.value : (null == f ? void 0 : f.value) ? f.value : (null == h ? void 0 : h.value) ? h.value : null != r ? r : v.value || "body"
	}))
}
We.tdkey = Ie, We.propTo = {
	type: [String, Object, Boolean],
	default: void 0
};
let Ne = null;

function Le() {
	if (null === Ne && (Ne = document.getElementById("v-binder-view-measurer"), null === Ne)) {
		Ne = document.createElement("div"), Ne.id = "v-binder-view-measurer";
		const {
			style: e
		} = Ne;
		e.position = "fixed", e.left = "0", e.right = "0", e.top = "0", e.bottom = "0", e.pointerEvents = "none", e.visibility = "hidden", document.body.appendChild(Ne)
	}
	return Ne.getBoundingClientRect()
}

function Fe(e) {
	const t = e.getBoundingClientRect(),
		r = Le();
	return {
		left: t.left - r.left,
		top: t.top - r.top,
		bottom: r.height + r.top - t.bottom,
		right: r.width + r.left - t.right,
		width: t.width,
		height: t.height
	}
}

function De(e) {
	if (null === e) return null;
	const t = function(e) {
		return 9 === e.nodeType ? null : e.parentNode
	}(e);
	if (null === t) return null;
	if (9 === t.nodeType) return document;
	if (1 === t.nodeType) {
		const {
			overflow: e,
			overflowX: r,
			overflowY: o
		} = getComputedStyle(t);
		if (/(auto|scroll|overlay)/.test(e + o + r)) return t
	}
	return De(t)
}
const Xe = d({
		name: "Binder",
		props: {
			syncTargetWithParent: Boolean,
			syncTarget: {
				type: Boolean,
				default: !0
			}
		},
		setup(e) {
			var r;
			f("VBinder", null === (r = h()) || void 0 === r ? void 0 : r.proxy);
			const l = s("VBinder", null),
				i = t(null);
			let u = [];
			const c = () => {
					for (const e of u) a("scroll", e, p, !0);
					u = []
				},
				d = new Set,
				p = () => {
					Ee(v)
				},
				v = () => {
					d.forEach((e => e()))
				},
				g = new Set,
				b = () => {
					g.forEach((e => e()))
				};
			return n((() => {
				a("resize", window, b), c()
			})), {
				targetRef: i,
				setTargetRef: t => {
					i.value = t, l && e.syncTargetWithParent && l.setTargetRef(t)
				},
				addScrollListener: e => {
					0 === d.size && (() => {
						let e = i.value;
						for (; e = De(e), null !== e;) u.push(e);
						for (const t of u) o("scroll", t, p, !0)
					})(), d.has(e) || d.add(e)
				},
				removeScrollListener: e => {
					d.has(e) && d.delete(e), 0 === d.size && c()
				},
				addResizeListener: e => {
					0 === g.size && o("resize", window, b), g.has(e) || g.add(e)
				},
				removeResizeListener: e => {
					g.has(e) && g.delete(e), 0 === g.size && a("resize", window, b)
				}
			}
		},
		render() {
			return p("binder", this.$slots)
		}
	}),
	He = d({
		name: "Target",
		setup() {
			const {
				setTargetRef: e,
				syncTarget: t
			} = s("VBinder");
			return {
				syncTarget: t,
				setTargetDirective: {
					mounted: e,
					updated: e
				}
			}
		},
		render() {
			const {
				syncTarget: e,
				setTargetDirective: t
			} = this;
			return e ? v(g("follower", this.$slots), [
				[t]
			]) : g("follower", this.$slots)
		}
	}),
	Ye = "@@mmoContext",
	Ve = {
		mounted(e, {
			value: t
		}) {
			e[Ye] = {
				handler: void 0
			}, "function" == typeof t && (e[Ye].handler = t, o("mousemoveoutside", e, t))
		},
		updated(e, {
			value: t
		}) {
			const r = e[Ye];
			"function" == typeof t ? r.handler ? r.handler !== t && (a("mousemoveoutside", e, r.handler), r.handler = t, o("mousemoveoutside", e, t)) : (e[Ye].handler = t, o("mousemoveoutside", e, t)) : r.handler && (a("mousemoveoutside", e, r.handler), r.handler = void 0)
		},
		unmounted(e) {
			const {
				handler: t
			} = e[Ye];
			t && a("mousemoveoutside", e, t), e[Ye].handler = void 0
		}
	},
	Ke = {
		top: "bottom",
		bottom: "top",
		left: "right",
		right: "left"
	},
	Ue = {
		start: "end",
		center: "center",
		end: "start"
	},
	qe = {
		top: "height",
		bottom: "height",
		left: "width",
		right: "width"
	},
	Ge = {
		"bottom-start": "top left",
		bottom: "top center",
		"bottom-end": "top right",
		"top-start": "bottom left",
		top: "bottom center",
		"top-end": "bottom right",
		"right-start": "top left",
		right: "center left",
		"right-end": "bottom left",
		"left-start": "top right",
		left: "center right",
		"left-end": "bottom right"
	},
	Qe = {
		"bottom-start": "bottom left",
		bottom: "bottom center",
		"bottom-end": "bottom right",
		"top-start": "top left",
		top: "top center",
		"top-end": "top right",
		"right-start": "top right",
		right: "center right",
		"right-end": "bottom right",
		"left-start": "top left",
		left: "center left",
		"left-end": "bottom left"
	},
	Ze = {
		"bottom-start": "right",
		"bottom-end": "left",
		"top-start": "right",
		"top-end": "left",
		"right-start": "bottom",
		"right-end": "top",
		"left-start": "bottom",
		"left-end": "top"
	},
	Je = {
		top: !0,
		bottom: !1,
		left: !0,
		right: !1
	},
	et = {
		top: "end",
		bottom: "start",
		left: "end",
		right: "start"
	};
const tt = Oe([Oe(".v-binder-follower-container", {
		position: "absolute",
		left: "0",
		right: "0",
		top: "0",
		height: "0",
		pointerEvents: "none",
		zIndex: "auto"
	}), Oe(".v-binder-follower-content", {
		position: "absolute",
		zIndex: "auto"
	}, [Oe("> *", {
		pointerEvents: "all"
	})])]),
	rt = d({
		name: "Follower",
		inheritAttrs: !1,
		props: {
			show: Boolean,
			enabled: {
				type: Boolean,
				default: void 0
			},
			placement: {
				type: String,
				default: "bottom"
			},
			syncTrigger: {
				type: Array,
				default: ["resize", "scroll"]
			},
			to: [String, Object],
			flip: {
				type: Boolean,
				default: !0
			},
			internalShift: Boolean,
			x: Number,
			y: Number,
			width: String,
			minWidth: String,
			containerClass: String,
			teleportDisabled: Boolean,
			zindexable: {
				type: Boolean,
				default: !0
			},
			zIndex: Number,
			overlap: Boolean
		},
		setup(e) {
			const o = s("VBinder"),
				a = l((() => void 0 !== e.enabled ? e.enabled : e.show)),
				i = t(null),
				u = t(null),
				c = () => {
					const {
						syncTrigger: t
					} = e;
					t.includes("scroll") && o.addScrollListener(f), t.includes("resize") && o.addResizeListener(f)
				},
				d = () => {
					o.removeScrollListener(f), o.removeResizeListener(f)
				};
			r((() => {
				a.value && (f(), c())
			}));
			const p = y();
			tt.mount({
				id: "vueuc/binder",
				head: !0,
				anchorMetaName: ze,
				ssr: p
			}), n((() => {
				d()
			})), _e((() => {
				a.value && f()
			}));
			const f = () => {
				if (!a.value) return;
				const t = i.value;
				if (null === t) return;
				const r = o.targetRef,
					{
						x: n,
						y: l,
						overlap: s
					} = e,
					c = void 0 !== n && void 0 !== l ? function(e, t) {
						const r = Le();
						return {
							top: t,
							left: e,
							height: 0,
							width: 0,
							right: r.width - e,
							bottom: r.height - t
						}
					}(n, l) : Fe(r);
				t.style.setProperty("--v-target-width", `${Math.round(c.width)}px`), t.style.setProperty("--v-target-height", `${Math.round(c.height)}px`);
				const {
					width: d,
					minWidth: p,
					placement: f,
					internalShift: h,
					flip: v
				} = e;
				t.setAttribute("v-placement", f), s ? t.setAttribute("v-overlap", "") : t.removeAttribute("v-overlap");
				const {
					style: g
				} = t;
				g.width = "target" === d ? `${c.width}px` : void 0 !== d ? d : "", g.minWidth = "target" === p ? `${c.width}px` : void 0 !== p ? p : "";
				const b = Fe(t),
					m = Fe(u.value),
					{
						left: w,
						top: y,
						placement: $
					} = function(e, t, r, o, n, a) {
						if (!n || a) return {
							placement: e,
							top: 0,
							left: 0
						};
						const [l, s] = e.split("-");
						let i = null != s ? s : "center",
							u = {
								top: 0,
								left: 0
							};
						const c = (e, n, a) => {
								let l = 0,
									s = 0;
								const i = r[e] - t[n] - t[e];
								return i > 0 && o && (a ? s = Je[n] ? i : -i : l = Je[n] ? i : -i), {
									left: l,
									top: s
								}
							},
							d = "left" === l || "right" === l;
						if ("center" !== i) {
							const o = Ze[e],
								n = Ke[o],
								a = qe[o];
							if (r[a] > t[a]) {
								if (t[o] + t[a] < r[a]) {
									const e = (r[a] - t[a]) / 2;
									t[o] < e || t[n] < e ? t[o] < t[n] ? (i = Ue[s], u = c(a, n, d)) : u = c(a, o, d) : i = "center"
								}
							} else r[a] < t[a] && t[n] < 0 && t[o] > t[n] && (i = Ue[s])
						} else {
							const e = "bottom" === l || "top" === l ? "left" : "top",
								o = Ke[e],
								n = qe[e],
								a = (r[n] - t[n]) / 2;
							(t[e] < a || t[o] < a) && (t[e] > t[o] ? (i = et[e], u = c(n, e, d)) : (i = et[o], u = c(n, o, d)))
						}
						let p = l;
						return t[l] < r[qe[l]] && t[l] < t[Ke[l]] && (p = Ke[l]), {
							placement: "center" !== i ? `${p}-${i}` : p,
							left: u.left,
							top: u.top
						}
					}(f, c, b, h, v, s),
					x = function(e, t) {
						return t ? Qe[e] : Ge[e]
					}($, s),
					{
						left: S,
						top: M,
						transform: j
					} = function(e, t, r, o, n, a) {
						if (a) switch (e) {
							case "bottom-start":
							case "left-end":
								return {
									top: `${Math.round(r.top-t.top+r.height)}px`,
									left: `${Math.round(r.left-t.left)}px`,
									transform: "translateY(-100%)"
								};
							case "bottom-end":
							case "right-end":
								return {
									top: `${Math.round(r.top-t.top+r.height)}px`,
									left: `${Math.round(r.left-t.left+r.width)}px`,
									transform: "translateX(-100%) translateY(-100%)"
								};
							case "top-start":
							case "left-start":
								return {
									top: `${Math.round(r.top-t.top)}px`,
									left: `${Math.round(r.left-t.left)}px`,
									transform: ""
								};
							case "top-end":
							case "right-start":
								return {
									top: `${Math.round(r.top-t.top)}px`,
									left: `${Math.round(r.left-t.left+r.width)}px`,
									transform: "translateX(-100%)"
								};
							case "top":
								return {
									top: `${Math.round(r.top-t.top)}px`,
									left: `${Math.round(r.left-t.left+r.width/2)}px`,
									transform: "translateX(-50%)"
								};
							case "right":
								return {
									top: `${Math.round(r.top-t.top+r.height/2)}px`,
									left: `${Math.round(r.left-t.left+r.width)}px`,
									transform: "translateX(-100%) translateY(-50%)"
								};
							case "left":
								return {
									top: `${Math.round(r.top-t.top+r.height/2)}px`,
									left: `${Math.round(r.left-t.left)}px`,
									transform: "translateY(-50%)"
								};
							default:
								return {
									top: `${Math.round(r.top-t.top+r.height)}px`,
									left: `${Math.round(r.left-t.left+r.width/2)}px`,
									transform: "translateX(-50%) translateY(-100%)"
								}
						}
						switch (e) {
							case "bottom-start":
								return {
									top: `${Math.round(r.top-t.top+r.height+o)}px`,
									left: `${Math.round(r.left-t.left+n)}px`,
									transform: ""
								};
							case "bottom-end":
								return {
									top: `${Math.round(r.top-t.top+r.height+o)}px`,
									left: `${Math.round(r.left-t.left+r.width+n)}px`,
									transform: "translateX(-100%)"
								};
							case "top-start":
								return {
									top: `${Math.round(r.top-t.top+o)}px`,
									left: `${Math.round(r.left-t.left+n)}px`,
									transform: "translateY(-100%)"
								};
							case "top-end":
								return {
									top: `${Math.round(r.top-t.top+o)}px`,
									left: `${Math.round(r.left-t.left+r.width+n)}px`,
									transform: "translateX(-100%) translateY(-100%)"
								};
							case "right-start":
								return {
									top: `${Math.round(r.top-t.top+o)}px`,
									left: `${Math.round(r.left-t.left+r.width+n)}px`,
									transform: ""
								};
							case "right-end":
								return {
									top: `${Math.round(r.top-t.top+r.height+o)}px`,
									left: `${Math.round(r.left-t.left+r.width+n)}px`,
									transform: "translateY(-100%)"
								};
							case "left-start":
								return {
									top: `${Math.round(r.top-t.top+o)}px`,
									left: `${Math.round(r.left-t.left+n)}px`,
									transform: "translateX(-100%)"
								};
							case "left-end":
								return {
									top: `${Math.round(r.top-t.top+r.height+o)}px`,
									left: `${Math.round(r.left-t.left+n)}px`,
									transform: "translateX(-100%) translateY(-100%)"
								};
							case "top":
								return {
									top: `${Math.round(r.top-t.top+o)}px`,
									left: `${Math.round(r.left-t.left+r.width/2+n)}px`,
									transform: "translateY(-100%) translateX(-50%)"
								};
							case "right":
								return {
									top: `${Math.round(r.top-t.top+r.height/2+o)}px`,
									left: `${Math.round(r.left-t.left+r.width+n)}px`,
									transform: "translateY(-50%)"
								};
							case "left":
								return {
									top: `${Math.round(r.top-t.top+r.height/2+o)}px`,
									left: `${Math.round(r.left-t.left+n)}px`,
									transform: "translateY(-50%) translateX(-100%)"
								};
							default:
								return {
									top: `${Math.round(r.top-t.top+r.height+o)}px`,
									left: `${Math.round(r.left-t.left+r.width/2+n)}px`,
									transform: "translateX(-50%)"
								}
						}
					}($, m, c, y, w, s);
				t.setAttribute("v-placement", $), t.style.setProperty("--v-offset-left", `${Math.round(w)}px`), t.style.setProperty("--v-offset-top", `${Math.round(y)}px`), t.style.transform = `translateX(${S}) translateY(${M}) ${j}`, t.style.setProperty("--v-transform-origin", x), t.style.transformOrigin = x
			};
			$(a, (e => {
				e ? (c(), h()) : d()
			}));
			const h = () => {
				M()
					.then(f)
					.catch((e => {}))
			};
			["placement", "x", "y", "internalShift", "flip", "width", "overlap", "minWidth"].forEach((t => {
				$(x(e, t), f)
			})), ["teleportDisabled"].forEach((t => {
				$(x(e, t), h)
			})), $(x(e, "syncTrigger"), (e => {
				e.includes("resize") ? o.addResizeListener(f) : o.removeResizeListener(f), e.includes("scroll") ? o.addScrollListener(f) : o.removeScrollListener(f)
			}));
			const v = S(),
				g = l((() => {
					const {
						to: t
					} = e;
					if (void 0 !== t) return t;
					v.value
				}));
			return {
				VBinder: o,
				mergedEnabled: a,
				offsetContainerRef: u,
				followerRef: i,
				mergedTo: g,
				syncPosition: f
			}
		},
		render() {
			return b(m, {
				show: this.show,
				to: this.mergedTo,
				disabled: this.teleportDisabled
			}, {
				default: () => {
					var e, t;
					const r = b("div", {
						class: ["v-binder-follower-container", this.containerClass],
						ref: "offsetContainerRef",
                        style: {
							position: "absolute",
							top: "0",
							height: "0"
						}
					}, [b("div", {
						class: "v-binder-follower-content",
						ref: "followerRef"
					}, null === (t = (e = this.$slots)
						.default) || void 0 === t ? void 0 : t.call(e))]);
					return this.zindexable ? v(r, [
						[w, {
							enabled: this.mergedEnabled,
							zIndex: this.zIndex
						}]
					]) : r
				}
			})
		}
	});
let ot;
var nt = j(C, "WeakMap"),
	at = B(Object.keys, Object),
	lt = Object.prototype.hasOwnProperty;

function st(e) {
	return _(e) ? z(e) : function(e) {
		if (!O(e)) return at(e);
		var t = [];
		for (var r in Object(e)) lt.call(e, r) && "constructor" != r && t.push(r);
		return t
	}(e)
}
var it = Object.prototype.propertyIsEnumerable,
	ut = Object.getOwnPropertySymbols,
	ct = ut ? function(e) {
		return null == e ? [] : (e = Object(e), function(e, t) {
			for (var r = -1, o = null == e ? 0 : e.length, n = 0, a = []; ++r < o;) {
				var l = e[r];
				t(l, r, e) && (a[n++] = l)
			}
			return a
		}(ut(e), (function(t) {
			return it.call(e, t)
		})))
	} : function() {
		return []
	};

function dt(e) {
	return function(e, t, r) {
		var o = t(e);
		return T(e) ? o : function(e, t) {
			for (var r = -1, o = t.length, n = e.length; ++r < o;) e[n + r] = t[r];
			return e
		}(o, r(e))
	}(e, st, ct)
}
var pt = j(C, "DataView"),
	ft = j(C, "Promise"),
	ht = j(C, "Set"),
	vt = "[object Map]",
	gt = "[object Promise]",
	bt = "[object Set]",
	mt = "[object WeakMap]",
	wt = "[object DataView]",
	yt = k(pt),
	$t = k(R),
	xt = k(ft),
	St = k(ht),
	Mt = k(nt),
	jt = E;
(pt && jt(new pt(new ArrayBuffer(1))) != wt || R && jt(new R) != vt || ft && jt(ft.resolve()) != gt || ht && jt(new ht) != bt || nt && jt(new nt) != mt) && (jt = function(e) {
	var t = E(e),
		r = "[object Object]" == t ? e.constructor : void 0,
		o = r ? k(r) : "";
	if (o) switch (o) {
		case yt:
			return wt;
		case $t:
			return vt;
		case xt:
			return gt;
		case St:
			return bt;
		case Mt:
			return mt
	}
	return t
});

function Ct(e) {
	var t = -1,
		r = null == e ? 0 : e.length;
	for (this.__data__ = new A; ++t < r;) this.add(e[t])
}

function Bt(e, t) {
	for (var r = -1, o = null == e ? 0 : e.length; ++r < o;)
		if (t(e[r], r, e)) return !0;
	return !1
}
Ct.prototype.add = Ct.prototype.push = function(e) {
	return this.__data__.set(e, "__lodash_hash_undefined__"), this
}, Ct.prototype.has = function(e) {
	return this.__data__.has(e)
};

function Ot(e, t, r, o, n, a) {
	var l = 1 & r,
		s = e.length,
		i = t.length;
	if (s != i && !(l && i > s)) return !1;
	var u = a.get(e),
		c = a.get(t);
	if (u && c) return u == t && c == e;
	var d = -1,
		p = !0,
		f = 2 & r ? new Ct : void 0;
	for (a.set(e, t), a.set(t, e); ++d < s;) {
		var h = e[d],
			v = t[d];
		if (o) var g = l ? o(v, h, d, t, e, a) : o(h, v, d, e, t, a);
		if (void 0 !== g) {
			if (g) continue;
			p = !1;
			break
		}
		if (f) {
			if (!Bt(t, (function(e, t) {
				if (l = t, !f.has(l) && (h === e || n(h, e, r, o, a))) return f.push(t);
				var l
			}))) {
				p = !1;
				break
			}
		} else if (h !== v && !n(h, v, r, o, a)) {
			p = !1;
			break
		}
	}
	return a.delete(e), a.delete(t), p
}

function zt(e) {
	var t = -1,
		r = Array(e.size);
	return e.forEach((function(e, o) {
		r[++t] = [o, e]
	})), r
}

function _t(e) {
	var t = -1,
		r = Array(e.size);
	return e.forEach((function(e) {
		r[++t] = e
	})), r
}
var Tt = P ? P.prototype : void 0,
	Et = Tt ? Tt.valueOf : void 0;
var kt = Object.prototype.hasOwnProperty;
var Rt = "[object Arguments]",
	At = "[object Array]",
	Pt = "[object Object]",
	It = Object.prototype.hasOwnProperty;

function Wt(e, t, r, o, n, a) {
	var l = T(e),
		s = T(t),
		i = l ? At : jt(e),
		u = s ? At : jt(t),
		c = (i = i == Rt ? Pt : i) == Pt,
		d = (u = u == Rt ? Pt : u) == Pt,
		p = i == u;
	if (p && N(e)) {
		if (!N(t)) return !1;
		l = !0, c = !1
	}
	if (p && !c) return a || (a = new L), l || F(e) ? Ot(e, t, r, o, n, a) : function(e, t, r, o, n, a, l) {
		switch (r) {
			case "[object DataView]":
				if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) return !1;
				e = e.buffer, t = t.buffer;
			case "[object ArrayBuffer]":
				return !(e.byteLength != t.byteLength || !a(new W(e), new W(t)));
			case "[object Boolean]":
			case "[object Date]":
			case "[object Number]":
				return I(+e, +t);
			case "[object Error]":
				return e.name == t.name && e.message == t.message;
			case "[object RegExp]":
			case "[object String]":
				return e == t + "";
			case "[object Map]":
				var s = zt;
			case "[object Set]":
				var i = 1 & o;
				if (s || (s = _t), e.size != t.size && !i) return !1;
				var u = l.get(e);
				if (u) return u == t;
				o |= 2, l.set(e, t);
				var c = Ot(s(e), s(t), o, n, a, l);
				return l.delete(e), c;
			case "[object Symbol]":
				if (Et) return Et.call(e) == Et.call(t)
		}
		return !1
	}(e, t, i, r, o, n, a);
	if (!(1 & r)) {
		var f = c && It.call(e, "__wrapped__"),
			h = d && It.call(t, "__wrapped__");
		if (f || h) {
			var v = f ? e.value() : e,
				g = h ? t.value() : t;
			return a || (a = new L), n(v, g, r, o, a)
		}
	}
	return !!p && (a || (a = new L), function(e, t, r, o, n, a) {
		var l = 1 & r,
			s = dt(e),
			i = s.length;
		if (i != dt(t)
			.length && !l) return !1;
		for (var u = i; u--;) {
			var c = s[u];
			if (!(l ? c in t : kt.call(t, c))) return !1
		}
		var d = a.get(e),
			p = a.get(t);
		if (d && p) return d == t && p == e;
		var f = !0;
		a.set(e, t), a.set(t, e);
		for (var h = l; ++u < i;) {
			var v = e[c = s[u]],
				g = t[c];
			if (o) var b = l ? o(g, v, c, t, e, a) : o(v, g, c, e, t, a);
			if (!(void 0 === b ? v === g || n(v, g, r, o, a) : b)) {
				f = !1;
				break
			}
			h || (h = "constructor" == c)
		}
		if (f && !h) {
			var m = e.constructor,
				w = t.constructor;
			m == w || !("constructor" in e) || !("constructor" in t) || "function" == typeof m && m instanceof m && "function" == typeof w && w instanceof w || (f = !1)
		}
		return a.delete(e), a.delete(t), f
	}(e, t, r, o, n, a))
}

function Nt(e, t, r, o, n) {
	return e === t || (null == e || null == t || !D(e) && !D(t) ? e != e && t != t : Wt(e, t, r, o, Nt, n))
}

function Lt(e) {
	return e == e && !X(e)
}

function Ft(e, t) {
	return function(r) {
		return null != r && (r[e] === t && (void 0 !== t || e in Object(r)))
	}
}

function Dt(e) {
	var t = function(e) {
		for (var t = st(e), r = t.length; r--;) {
			var o = t[r],
				n = e[o];
			t[r] = [o, n, Lt(n)]
		}
		return t
	}(e);
	return 1 == t.length && t[0][2] ? Ft(t[0][0], t[0][1]) : function(r) {
		return r === e || function(e, t, r, o) {
			var n = r.length,
				a = n;
			if (null == e) return !a;
			for (e = Object(e); n--;) {
				var l = r[n];
				if (l[2] ? l[1] !== e[l[0]] : !(l[0] in e)) return !1
			}
			for (; ++n < a;) {
				var s = (l = r[n])[0],
					i = e[s],
					u = l[1];
				if (l[2]) {
					if (void 0 === i && !(s in e)) return !1
				} else if (!Nt(u, i, 3, o, new L)) return !1
			}
			return !0
		}(r, 0, t)
	}
}

function Xt(e, t) {
	return null != e && t in Object(e)
}

function Ht(e, t) {
	return null != e && function(e, t, r) {
		for (var o = -1, n = (t = Se(t, e))
			.length, a = !1; ++o < n;) {
			var l = Me(t[o]);
			if (!(a = null != e && r(e, l))) break;
			e = e[l]
		}
		return a || ++o != n ? a : !!(n = null == e ? 0 : e.length) && H(n) && Y(l, n) && (T(e) || V(e))
	}(e, t, Xt)
}

function Yt(e) {
	return je(e) ? (t = Me(e), function(e) {
		return null == e ? void 0 : e[t]
	}) : function(e) {
		return function(t) {
			return Be(t, e)
		}
	}(e);
	var t
}

function Vt(e) {
	return "function" == typeof e ? e : null == e ? K : "object" == typeof e ? T(e) ? (t = e[0], r = e[1], je(t) && Lt(r) ? Ft(Me(t), r) : function(e) {
		var o = Ce(e, t);
		return void 0 === o && o === r ? Ht(e, t) : Nt(r, o, 3)
	}) : Dt(e) : Yt(e);
	var t, r
}
var Kt, Ut = (Kt = function(e, t) {
	return e && U(e, t, st)
}, function(e, t) {
	if (null == e) return e;
	if (!_(e)) return Kt(e, t);
	for (var r = e.length, o = -1, n = Object(e); ++o < r && !1 !== t(n[o], o, n););
	return e
});

function qt(e, t) {
	var r = -1,
		o = _(e) ? Array(e.length) : [];
	return Ut(e, (function(e, n, a) {
		o[++r] = t(e, n, a)
	})), o
}
const Gt = {
	space: "6px",
	spaceArrow: "10px",
	arrowOffset: "10px",
	arrowOffsetVertical: "10px",
	arrowHeight: "6px",
	padding: "8px 14px"
};
const Qt = {
		name: "Popover",
		common: G,
		self: function(e) {
			const {
				boxShadow2: t,
				popoverColor: r,
				textColor2: o,
				borderRadius: n,
				fontSize: a,
				dividerColor: l
			} = e;
			return Object.assign(Object.assign({}, Gt), {
				fontSize: a,
				borderRadius: n,
				color: r,
				dividerColor: l,
				textColor: o,
				boxShadow: t
			})
		}
	},
	Zt = {
		top: "bottom",
		bottom: "top",
		left: "right",
		right: "left"
	},
	Jt = "var(--n-arrow-height) * 1.414",
	er = Q([Z("popover", "\n transition:\n box-shadow .3s var(--n-bezier),\n background-color .3s var(--n-bezier),\n color .3s var(--n-bezier);\n position: relative;\n font-size: var(--n-font-size);\n color: var(--n-text-color);\n box-shadow: var(--n-box-shadow);\n word-break: break-word;\n ", [Q(">", [Z("scrollbar", "\n height: inherit;\n max-height: inherit;\n ")]), J("raw", "\n background-color: var(--n-color);\n border-radius: var(--n-border-radius);\n ", [J("scrollable", [J("show-header-or-footer", "padding: var(--n-padding);")])]), ee("header", "\n padding: var(--n-padding);\n border-bottom: 1px solid var(--n-divider-color);\n transition: border-color .3s var(--n-bezier);\n "), ee("footer", "\n padding: var(--n-padding);\n border-top: 1px solid var(--n-divider-color);\n transition: border-color .3s var(--n-bezier);\n "), te("scrollable, show-header-or-footer", [ee("content", "\n padding: var(--n-padding);\n ")])]), Z("popover-shared", "\n transform-origin: inherit;\n ", [Z("popover-arrow-wrapper", "\n position: absolute;\n overflow: hidden;\n pointer-events: none;\n ", [Z("popover-arrow", `\n transition: background-color .3s var(--n-bezier);\n position: absolute;\n display: block;\n width: calc(${Jt});\n height: calc(${Jt});\n box-shadow: 0 0 8px 0 rgba(0, 0, 0, .12);\n transform: rotate(45deg);\n background-color: var(--n-color);\n pointer-events: all;\n `)]), Q("&.popover-transition-enter-from, &.popover-transition-leave-to", "\n opacity: 0;\n transform: scale(.85);\n "), Q("&.popover-transition-enter-to, &.popover-transition-leave-from", "\n transform: scale(1);\n opacity: 1;\n "), Q("&.popover-transition-enter-active", "\n transition:\n box-shadow .3s var(--n-bezier),\n background-color .3s var(--n-bezier),\n color .3s var(--n-bezier),\n opacity .15s var(--n-bezier-ease-out),\n transform .15s var(--n-bezier-ease-out);\n "), Q("&.popover-transition-leave-active", "\n transition:\n box-shadow .3s var(--n-bezier),\n background-color .3s var(--n-bezier),\n color .3s var(--n-bezier),\n opacity .15s var(--n-bezier-ease-in),\n transform .15s var(--n-bezier-ease-in);\n ")]), nr("top-start", `\n top: calc(${Jt} / -2);\n left: calc(${or("top-start")} - var(--v-offset-left));\n `), nr("top", `\n top: calc(${Jt} / -2);\n transform: translateX(calc(${Jt} / -2)) rotate(45deg);\n left: 50%;\n `), nr("top-end", `\n top: calc(${Jt} / -2);\n right: calc(${or("top-end")} + var(--v-offset-left));\n `), nr("bottom-start", `\n bottom: calc(${Jt} / -2);\n left: calc(${or("bottom-start")} - var(--v-offset-left));\n `), nr("bottom", `\n bottom: calc(${Jt} / -2);\n transform: translateX(calc(${Jt} / -2)) rotate(45deg);\n left: 50%;\n `), nr("bottom-end", `\n bottom: calc(${Jt} / -2);\n right: calc(${or("bottom-end")} + var(--v-offset-left));\n `), nr("left-start", `\n left: calc(${Jt} / -2);\n top: calc(${or("left-start")} - var(--v-offset-top));\n `), nr("left", `\n left: calc(${Jt} / -2);\n transform: translateY(calc(${Jt} / -2)) rotate(45deg);\n top: 50%;\n `), nr("left-end", `\n left: calc(${Jt} / -2);\n bottom: calc(${or("left-end")} + var(--v-offset-top));\n `), nr("right-start", `\n right: calc(${Jt} / -2);\n top: calc(${or("right-start")} - var(--v-offset-top));\n `), nr("right", `\n right: calc(${Jt} / -2);\n transform: translateY(calc(${Jt} / -2)) rotate(45deg);\n top: 50%;\n `), nr("right-end", `\n right: calc(${Jt} / -2);\n bottom: calc(${or("right-end")} + var(--v-offset-top));\n `), ...(tr = {
		top: ["right-start", "left-start"],
		right: ["top-end", "bottom-end"],
		bottom: ["right-end", "left-end"],
		left: ["top-start", "bottom-start"]
	}, rr = (e, t) => {
		const r = ["right", "left"].includes(t),
			o = r ? "width" : "height";
		return e.map((e => {
			const n = "end" === e.split("-")[1],
				a = `calc((var(--v-target-${o}, 0px) - ${Jt}) / 2)`,
				l = or(e);
			return Q(`[v-placement="${e}"] >`, [Z("popover-shared", [te("center-arrow", [Z("popover-arrow", `${t}: calc(max(${a}, ${l}) ${n?"+":"-"} var(--v-offset-${r?"left":"top"}));`)])])])
		}))
	}, (T(tr) ? q : qt)(tr, Vt(rr)))]);
var tr, rr;

function or(e) {
	return ["top", "bottom"].includes(e.split("-")[0]) ? "var(--n-arrow-offset)" : "var(--n-arrow-offset-vertical)"
}

function nr(e, t) {
	const r = e.split("-")[0],
		o = ["top", "bottom"].includes(r) ? "height: var(--n-space-arrow);" : "width: var(--n-space-arrow);";
	return Q(`[v-placement="${e}"] >`, [Z("popover-shared", `\n margin-${Zt[r]}: var(--n-space);\n `, [te("show-arrow", `\n margin-${Zt[r]}: var(--n-space-arrow);\n `), te("overlap", "\n margin: 0;\n "), re("popover-arrow-wrapper", `\n right: 0;\n left: 0;\n top: 0;\n bottom: 0;\n ${r}: 100%;\n ${Zt[r]}: auto;\n ${o}\n `, [Z("popover-arrow", t)])])])
}
const ar = Object.assign(Object.assign({}, ae.props), {
	to: We.propTo,
	show: Boolean,
	trigger: String,
	showArrow: Boolean,
	delay: Number,
	duration: Number,
	raw: Boolean,
	arrowPointToCenter: Boolean,
	arrowClass: String,
	arrowStyle: [String, Object],
	arrowWrapperClass: String,
	arrowWrapperStyle: [String, Object],
	displayDirective: String,
	x: Number,
	y: Number,
	flip: Boolean,
	overlap: Boolean,
	placement: String,
	width: [Number, String],
	keepAliveOnHover: Boolean,
	scrollable: Boolean,
	contentClass: String,
	contentStyle: [Object, String],
	headerClass: String,
	headerStyle: [Object, String],
	footerClass: String,
	footerStyle: [Object, String],
	internalDeactivateImmediately: Boolean,
	animated: Boolean,
	onClickoutside: Function,
	internalTrapFocus: Boolean,
	internalOnAfterLeave: Function,
	minWidth: Number,
	maxWidth: Number
});

function lr({
	arrowClass: e,
	arrowStyle: t,
	arrowWrapperClass: r,
	arrowWrapperStyle: o,
	clsPrefix: n
}) {
	return b("div", {
		key: "__popover-arrow__",
		style: o,
		class: [`${n}-popover-arrow-wrapper`, r]
	}, b("div", {
		class: [`${n}-popover-arrow`, e],
		style: t
	}))
}
const sr = d({
		name: "PopoverBody",
		inheritAttrs: !1,
		props: ar,
		setup(e, {
			slots: r,
			attrs: o
		}) {
			const {
				namespaceRef: a,
				mergedClsPrefixRef: l,
				inlineThemeDisabled: d
			} = ne(e), p = ae("Popover", "-popover", er, Qt, e, l), h = t(null), g = s("NPopover"), m = t(null), w = t(e.show), y = t(!1);
			le((() => {
				const {
					show: t
				} = e;
				!t || (void 0 === ot && (ot = navigator.userAgent.includes("Node.js") || navigator.userAgent.includes("jsdom")), ot) || e.internalDeactivateImmediately || (y.value = !0)
			}));
			const S = se((() => {
					const {
						trigger: t,
						onClickoutside: r
					} = e, o = [], {
						positionManuallyRef: {
							value: n
						}
					} = g;
					return n || ("click" !== t || r || o.push([ve, _, void 0, {
						capture: !0
					}]), "hover" === t && o.push([Ve, z])), r && o.push([ve, _, void 0, {
						capture: !0
					}]), ("show" === e.displayDirective || e.animated && y.value) && o.push([ge, e.show]), o
				})),
				M = se((() => {
					const {
						common: {
							cubicBezierEaseInOut: e,
							cubicBezierEaseIn: t,
							cubicBezierEaseOut: r
						},
						self: {
							space: o,
							spaceArrow: n,
							padding: a,
							fontSize: l,
							textColor: s,
							dividerColor: i,
							color: u,
							boxShadow: c,
							borderRadius: d,
							arrowHeight: f,
							arrowOffset: h,
							arrowOffsetVertical: v
						}
					} = p.value;
					return {
						"--n-box-shadow": c,
						"--n-bezier": e,
						"--n-bezier-ease-in": t,
						"--n-bezier-ease-out": r,
						"--n-font-size": l,
						"--n-text-color": s,
						"--n-color": u,
						"--n-divider-color": i,
						"--n-border-radius": d,
						"--n-arrow-height": f,
						"--n-arrow-offset": h,
						"--n-arrow-offset-vertical": v,
						"--n-padding": a,
						"--n-space": o,
						"--n-space-arrow": n
					}
				})),
				j = se((() => {
					const t = "trigger" === e.width ? void 0 : Te(e.width),
						r = [];
					t && r.push({
						width: t
					});
					const {
						maxWidth: o,
						minWidth: n
					} = e;
					return o && r.push({
						maxWidth: Te(o)
					}), n && r.push({
						maxWidth: Te(n)
					}), d || r.push(M.value), r
				})),
				C = d ? ie("popover", void 0, M, e) : void 0;

			function B(t) {
				"hover" === e.trigger && e.keepAliveOnHover && e.show && g.handleMouseEnter(t)
			}

			function O(t) {
				"hover" === e.trigger && e.keepAliveOnHover && g.handleMouseLeave(t)
			}

			function z(t) {
				"hover" !== e.trigger || T()
					.contains(be(t)) || g.handleMouseMoveOutside(t)
			}

			function _(t) {
				("click" === e.trigger && !T()
					.contains(be(t)) || e.onClickoutside) && g.handleClickOutside(t)
			}

			function T() {
				return g.getTriggerElement()
			}
			return g.setBodyInstance({
				syncPosition: function() {
					var e;
					null === (e = h.value) || void 0 === e || e.syncPosition()
				}
			}), n((() => {
				g.setBodyInstance(null)
			})), $(x(e, "show"), (t => {
				e.animated || (w.value = !!t)
			})), f(c, m), f(u, null), f(i, null), {
				displayed: y,
				namespace: a,
				isMounted: g.isMountedRef,
				zIndex: g.zIndexRef,
				followerRef: h,
				adjustedTo: We(e),
				followerEnabled: w,
				renderContentNode: function() {
					if (null == C || C.onRender(), !("show" === e.displayDirective || e.show || e.animated && y.value)) return null;
					let t;
					const n = g.internalRenderBodyRef.value,
						{
							value: a
						} = l;
					if (n) t = n([`${a}-popover-shared`, null == C ? void 0 : C.themeClass.value, e.overlap && `${a}-popover-shared--overlap`, e.showArrow && `${a}-popover-shared--show-arrow`, e.arrowPointToCenter && `${a}-popover-shared--center-arrow`], m, j.value, B, O);
					else {
						const {
							value: n
						} = g.extraClassRef, {
							internalTrapFocus: l
						} = e, s = !ue(r.header) || !ue(r.footer), i = () => {
							var t, o;
							const n = s ? b(fe, null, pe(r.header, (t => t ? b("div", {
								class: [`${a}-popover__header`, e.headerClass],
								style: e.headerStyle
							}, t) : null)), pe(r.default, (t => t ? b("div", {
								class: [`${a}-popover__content`, e.contentClass],
								style: e.contentStyle
							}, r) : null)), pe(r.footer, (t => t ? b("div", {
								class: [`${a}-popover__footer`, e.footerClass],
								style: e.footerStyle
							}, t) : null))) : e.scrollable ? null === (t = r.default) || void 0 === t ? void 0 : t.call(r) : b("div", {
								class: [`${a}-popover__content`, e.contentClass],
								style: e.contentStyle
							}, r);
							return [e.scrollable ? b(he, {
								contentClass: s ? void 0 : `${a}-popover__content ${null!==(o=e.contentClass)&&void 0!==o?o:""}`,
								contentStyle: s ? void 0 : e.contentStyle
							}, {
								default: () => n
							}) : n, e.showArrow ? lr({
								arrowClass: e.arrowClass,
								arrowStyle: e.arrowStyle,
								arrowWrapperClass: e.arrowWrapperClass,
								arrowWrapperStyle: e.arrowWrapperStyle,
								clsPrefix: a
							}) : null]
						};
						t = b("div", de({
							class: [`${a}-popover`, `${a}-popover-shared`, null == C ? void 0 : C.themeClass.value, n.map((e => `${a}-${e}`)), {
								[`${a}-popover--scrollable`]: e.scrollable,
								[`${a}-popover--show-header-or-footer`]: s,
								[`${a}-popover--raw`]: e.raw,
								[`${a}-popover-shared--overlap`]: e.overlap,
								[`${a}-popover-shared--show-arrow`]: e.showArrow,
								[`${a}-popover-shared--center-arrow`]: e.arrowPointToCenter
							}],
							ref: m,
							style: j.value,
							onKeydown: g.handleKeydown,
							onMouseenter: B,
							onMouseleave: O
						}, o), l ? b(ce, {
							active: e.show,
							autoFocus: !0
						}, {
							default: i
						}) : i())
					}
					return v(t, S.value)
				}
			}
		},
		render() {
			return b(rt, {
				ref: "followerRef",
				zIndex: this.zIndex,
				show: this.show,
				enabled: this.followerEnabled,
				to: this.adjustedTo,
				x: this.x,
				y: this.y,
				flip: this.flip,
				placement: this.placement,
				containerClass: this.namespace,
				overlap: this.overlap,
				width: "trigger" === this.width ? "target" : void 0,
				teleportDisabled: this.adjustedTo === We.tdkey
			}, {
				default: () => this.animated ? b(oe, {
					name: "popover-transition",
					appear: this.isMounted,
					onEnter: () => {
						this.followerEnabled = !0
					},
					onAfterLeave: () => {
						var e;
						null === (e = this.internalOnAfterLeave) || void 0 === e || e.call(this), this.followerEnabled = !1, this.displayed = !1
					}
				}, {
					default: this.renderContentNode
				}) : this.renderContentNode()
			})
		}
	}),
	ir = Object.keys(ar),
	ur = {
		focus: ["onFocus", "onBlur"],
		click: ["onClick"],
		hover: ["onMouseenter", "onMouseleave"],
		manual: [],
		nested: ["onFocus", "onBlur", "onMouseenter", "onMouseleave", "onClick"]
	};
const cr = {
		show: {
			type: Boolean,
			default: void 0
		},
		defaultShow: Boolean,
		showArrow: {
			type: Boolean,
			default: !0
		},
		trigger: {
			type: String,
			default: "hover"
		},
		delay: {
			type: Number,
			default: 100
		},
		duration: {
			type: Number,
			default: 100
		},
		raw: Boolean,
		placement: {
			type: String,
			default: "top"
		},
		x: Number,
		y: Number,
		arrowPointToCenter: Boolean,
		disabled: Boolean,
		getDisabled: Function,
		displayDirective: {
			type: String,
			default: "if"
		},
		arrowClass: String,
		arrowStyle: [String, Object],
		arrowWrapperClass: String,
		arrowWrapperStyle: [String, Object],
		flip: {
			type: Boolean,
			default: !0
		},
		animated: {
			type: Boolean,
			default: !0
		},
		width: {
			type: [Number, String],
			default: void 0
		},
		overlap: Boolean,
		keepAliveOnHover: {
			type: Boolean,
			default: !0
		},
		zIndex: Number,
		to: We.propTo,
		scrollable: Boolean,
		contentClass: String,
		contentStyle: [Object, String],
		headerClass: String,
		headerStyle: [Object, String],
		footerClass: String,
		footerStyle: [Object, String],
		onClickoutside: Function,
		"onUpdate:show": [Function, Array],
		onUpdateShow: [Function, Array],
		internalDeactivateImmediately: Boolean,
		internalSyncTargetWithParent: Boolean,
		internalInheritedEventHandlers: {
			type: Array,
			default: () => []
		},
		internalTrapFocus: Boolean,
		internalExtraClass: {
			type: Array,
			default: () => []
		},
		onShow: [Function, Array],
		onHide: [Function, Array],
		arrow: {
			type: Boolean,
			default: void 0
		},
		minWidth: Number,
		maxWidth: Number
	},
	dr = d({
		name: "Popover",
		inheritAttrs: !1,
		props: Object.assign(Object.assign(Object.assign({}, ae.props), cr), {
			internalOnAfterLeave: Function,
			internalRenderBody: Function
		}),
		slots: Object,
		__popover__: !0,
		setup(e) {
			const r = S(),
				o = t(null),
				n = se((() => e.show)),
				a = t(e.defaultShow),
				s = ke(n, a),
				i = l((() => !e.disabled && s.value)),
				u = () => {
					if (e.disabled) return !0;
					const {
						getDisabled: t
					} = e;
					return !!(null == t ? void 0 : t())
				},
				c = () => !u() && s.value,
				d = Re(e, ["arrow", "showArrow"]),
				p = se((() => !e.overlap && d.value));
			let h = null;
			const v = t(null),
				g = t(null),
				b = l((() => void 0 !== e.x && void 0 !== e.y));

			function m(t) {
				const {
					"onUpdate:show": r,
					onUpdateShow: o,
					onShow: n,
					onHide: l
				} = e;
				a.value = t, r && xe(r, t), o && xe(o, t), t && n && xe(n, !0), t && l && xe(l, !1)
			}

			function w() {
				const {
					value: e
				} = v;
				e && (window.clearTimeout(e), v.value = null)
			}

			function y() {
				const {
					value: e
				} = g;
				e && (window.clearTimeout(e), g.value = null)
			}

			function $() {
				const t = u();
				if ("hover" === e.trigger && !t) {
					if (y(), null !== v.value) return;
					if (c()) return;
					const t = () => {
							m(!0), v.value = null
						},
						{
							delay: r
						} = e;
					0 === r ? t() : v.value = window.setTimeout(t, r)
				}
			}

			function M() {
				const t = u();
				if ("hover" === e.trigger && !t) {
					if (w(), null !== g.value) return;
					if (!c()) return;
					const t = () => {
							m(!1), g.value = null
						},
						{
							duration: r
						} = e;
					0 === r ? t() : g.value = window.setTimeout(t, r)
				}
			}
			f("NPopover", {
				getTriggerElement: function() {
					var e;
					return null === (e = o.value) || void 0 === e ? void 0 : e.targetRef
				},
				handleKeydown: function(t) {
					e.internalTrapFocus && "Escape" === t.key && (w(), y(), m(!1))
				},
				handleMouseEnter: $,
				handleMouseLeave: M,
				handleClickOutside: function(t) {
					var r;
					c() && ("click" === e.trigger && (w(), y(), m(!1)), null === (r = e.onClickoutside) || void 0 === r || r.call(e, t))
				},
				handleMouseMoveOutside: function() {
					M()
				},
				setBodyInstance: function(e) {
					h = e
				},
				positionManuallyRef: b,
				isMountedRef: r,
				zIndexRef: x(e, "zIndex"),
				extraClassRef: x(e, "internalExtraClass"),
				internalRenderBodyRef: x(e, "internalRenderBody")
			}), le((() => {
				s.value && u() && m(!1)
			}));
			return {
				binderInstRef: o,
				positionManually: b,
				mergedShowConsideringDisabledProp: i,
				uncontrolledShow: a,
				mergedShowArrow: p,
				getMergedShow: c,
				setShow: function(e) {
					a.value = e
				},
				handleClick: function() {
					if ("click" === e.trigger && !u()) {
						w(), y();
						m(!c())
					}
				},
				handleMouseEnter: $,
				handleMouseLeave: M,
				handleFocus: function() {
					const t = u();
					if ("focus" === e.trigger && !t) {
						if (c()) return;
						m(!0)
					}
				},
				handleBlur: function() {
					const t = u();
					if ("focus" === e.trigger && !t) {
						if (!c()) return;
						m(!1)
					}
				},
				syncPosition: function() {
					h && h.syncPosition()
				}
			}
		},
		render() {
			var e;
			const {
				positionManually: t,
				$slots: r
			} = this;
			let o, n = !1;
			if (!t && (o = me(r, "trigger"), o)) {
				o = we(o), o = o.type === ye ? b("span", [o]) : o;
				const r = {
					onClick: this.handleClick,
					onMouseenter: this.handleMouseEnter,
					onMouseleave: this.handleMouseLeave,
					onFocus: this.handleFocus,
					onBlur: this.handleBlur
				};
				if (null === (e = o.type) || void 0 === e ? void 0 : e.__popover__) n = !0, o.props || (o.props = {
					internalSyncTargetWithParent: !0,
					internalInheritedEventHandlers: []
				}), o.props.internalSyncTargetWithParent = !0, o.props.internalInheritedEventHandlers ? o.props.internalInheritedEventHandlers = [r, ...o.props.internalInheritedEventHandlers] : o.props.internalInheritedEventHandlers = [r];
				else {
					const {
						internalInheritedEventHandlers: e
					} = this, n = [r, ...e], i = {
						onBlur: e => {
							n.forEach((t => {
								t.onBlur(e)
							}))
						},
						onFocus: e => {
							n.forEach((t => {
								t.onFocus(e)
							}))
						},
						onClick: e => {
							n.forEach((t => {
								t.onClick(e)
							}))
						},
						onMouseenter: e => {
							n.forEach((t => {
								t.onMouseenter(e)
							}))
						},
						onMouseleave: e => {
							n.forEach((t => {
								t.onMouseleave(e)
							}))
						}
					};
					a = o, l = e ? "nested" : t ? "manual" : this.trigger, s = i, ur[l].forEach((e => {
						a.props ? a.props = Object.assign({}, a.props) : a.props = {};
						const t = a.props[e],
							r = s[e];
						a.props[e] = t ? (...e) => {
							t(...e), r(...e)
						} : r
					}))
				}
			}
			var a, l, s;
			return b(Xe, {
				ref: "binderInstRef",
				syncTarget: !n,
				syncTargetWithParent: this.internalSyncTargetWithParent
			}, {
				default: () => {
					this.mergedShowConsideringDisabledProp;
					const e = this.getMergedShow();
					return [this.internalTrapFocus && e ? v(b("div", {
						style: {
							position: "fixed",
							top: 0,
							right: 0,
							bottom: 0,
							left: 0
						}
					}), [
						[w, {
							enabled: e,
							zIndex: this.zIndex
						}]
					]) : null, t ? null : b(He, null, {
						default: () => o
					}), b(sr, $e(this.$props, ir, Object.assign(Object.assign({}, this.$attrs), {
						showArrow: this.mergedShowArrow,
						show: e
					})), {
						default: () => {
							var e, t;
							return null === (t = (e = this.$slots)
								.default) || void 0 === t ? void 0 : t.call(e)
						},
						header: () => {
							var e, t;
							return null === (t = (e = this.$slots)
								.header) || void 0 === t ? void 0 : t.call(e)
						},
						footer: () => {
							var e, t;
							return null === (t = (e = this.$slots)
								.footer) || void 0 === t ? void 0 : t.call(e)
						}
					})]
				}
			})
		}
	});
export {
	Xe as B, dr as N, He as V, rt as a, Pe as b, cr as c, Ae as i, Qt as p, lr as r, We as u
};