import e from "./BANbGyBU.js";
import {a4 as a, a6 as t, a5 as r, d as s, h as o, a8 as i, a9 as l, j as n, ah as d, ag as m, r as c, o as u, t as p, z as f, J as v, A as h, F as g, Z as b, a1 as x, I as y, _, v as j, B as k, x as w, y as C, K as z, N as T, O as I, n as $} from "./DpD38Hq9.js";
import {I as P} from "./Cq52t4ZK.js";
import {u as O} from "./DnjT7zNg.js";
import {u as S} from "./D85Nf4I_.js";
import {d as B, u as R} from "./BUzHT0Ek.js";
import {t as F} from "./D-d97poz.js";
import {u as N} from "./AE7psNvX.js";
import {a as W, _ as D} from "./BInuzmN5.js";
import {_ as K} from "./CR7-GpTB.js";
import {_ as L} from "./Dx5HKwqO.js";
import {_ as V} from "./CaFbYqnm.js";
import {_ as Z} from "./gSuRa5u_.js";
import {a as A, _ as E} from "./C9t5BePI.js";
import {_ as G} from "./BCo6x5W8.js";
import "./F3BADSHd.js";
import "./l2rsThpR.js";
import "./BjAOOWF7.js";
import "./DiJwGkuW.js";
import "./Cwo8lmsB.js";
import "./MJhzGfyV.js";
import "./BOzaSZwJ.js";
const H = a("h", "\n font-size: var(--n-font-size);\n font-weight: var(--n-font-weight);\n margin: var(--n-margin);\n transition: color .3s var(--n-bezier);\n color: var(--n-text-color);\n", [t("&:first-child", {
    marginTop: 0
}), r("prefix-bar", {
    position: "relative",
    paddingLeft: "var(--n-prefix-width)"
}, [r("align-text", {
    paddingLeft: 0
}, [t("&::before", {
    left: "calc(-1 * var(--n-prefix-width))"
})]), t("&::before", '\n content: "";\n width: var(--n-bar-width);\n border-radius: calc(var(--n-bar-width) / 2);\n transition: background-color .3s var(--n-bezier);\n left: 0;\n top: 0;\n bottom: 0;\n position: absolute;\n '), t("&::before", {
    backgroundColor: "var(--n-bar-color)"
})])])
  , J = Object.assign(Object.assign({}, l.props), {
    type: {
        type: String,
        default: "default"
    },
    prefix: String,
    alignText: Boolean
})
  , M = s({
    name: `H${U = "1"}`,
    props: J,
    setup(e) {
        const {mergedClsPrefixRef: a, inlineThemeDisabled: t} = i(e)
          , r = l("Typography", "-h", H, F, e, a)
          , s = n((()=>{
            const {type: a} = e
              , {common: {cubicBezierEaseInOut: t}, self: {headerFontWeight: s, headerTextColor: o, [m("headerPrefixWidth", U)]: i, [m("headerFontSize", U)]: l, [m("headerMargin", U)]: n, [m("headerBarWidth", U)]: d, [m("headerBarColor", a)]: c}} = r.value;
            return {
                "--n-bezier": t,
                "--n-font-size": l,
                "--n-margin": n,
                "--n-bar-color": c,
                "--n-bar-width": d,
                "--n-font-weight": s,
                "--n-text-color": o,
                "--n-prefix-width": i
            }
        }
        ))
          , o = t ? d(`h${U}`, n((()=>e.type[0])), s, e) : void 0;
        return {
            mergedClsPrefix: a,
            cssVars: t ? void 0 : s,
            themeClass: null == o ? void 0 : o.themeClass,
            onRender: null == o ? void 0 : o.onRender
        }
    },
    render() {
        var e;
        const {prefix: a, alignText: t, mergedClsPrefix: r, cssVars: s, $slots: i} = this;
        return null === (e = this.onRender) || void 0 === e || e.call(this),
        o(`h${U}`, {
            class: [`${r}-h`, `${r}-h${U}`, this.themeClass, {
                [`${r}-h--prefix-bar`]: a,
                [`${r}-h--align-text`]: t
            }],
            style: s
        }, i)
    }
});
var U;
const q = {
    class: "p-4 max-w-6xl mx-auto"
}
  , Q = {
    class: "text-sm text-gray-500"
}
  , X = {
    class: "text-primary font-medium"
}
  , Y = {
    class: "font-medium"
}
  , ee = {
    class: "flex-1 bg-white rounded-xl p-5 transition-all duration-300 hover:shadow-sm border border-gray-100 relative"
}
  , ae = {
    class: "flex items-start gap-4"
}
  , te = {
    class: "relative"
}
  , re = {
    class: "flex-1"
}
  , se = {
    class: "flex items-center gap-2 mb-1"
}
  , oe = {
    class: "mt-4"
}
  , ie = {
    key: 0,
    class: "text-center mt-10"
}
  , le = {
    key: 0,
    class: "w-full h-12 text-center m-7"
}
  , ne = G(s({
    __name: "list",
    setup(a) {
        O({
            title: "角色列表"
        });
        const t = c(!1)
          , r = S()
          , s = N()
          , o = B()
          , i = c()
          , {data: l, execute: d} = R("/api/v1/gamerole_list")
          , m = n((()=>{
            var e;
            return (null == (e = l.value) ? void 0 : e.length) || 0
        }
        ))
          , F = n((()=>{
            var e;
            return (null == (e = r.policy) ? void 0 : e.gameRoleNum) || 0
        }
        ))
          , {data: G, execute: H, loading: J} = R("/api/v1/serverlist")
          , U = e=>{
            e && (t.value = !0,
            i.value = e,
            H({
                method: "POST",
                body: {
                    id: e
                }
            }))
        }
        ;
        return u((()=>{
            d()
        }
        )),
        (a,n)=>{
            const c = M
              , u = K
              , O = x
              , S = L
              , B = V
              , N = y
              , H = e
              , ne = D
              , de = W
              , me = Z
              , ce = E
              , ue = A
              , pe = _;
            return j(),
            p("div", q, [f(c, {
                class: "text-2xl font-medium text-gray-800 mb-8 text-center"
            }, {
                default: h((()=>n[2] || (n[2] = [k(" 角色列表 ")]))),
                _: 1
            }), f(O, {
                class: "mb-4",
                "content-style": "padding: 0px",
                bordered: !1
            }, {
                default: h((()=>[f(u, {
                    vertical: ""
                }, {
                    default: h((()=>[f(u, {
                        vertical: "",
                        size: 12
                    }, {
                        default: h((()=>[w("div", Q, [n[3] || (n[3] = k(" 已绑定 ")), w("span", X, C(g(m)), 1), n[4] || (n[4] = k(" / ")), w("span", Y, C(g(F)), 1), k(" 个角色，还可绑定 " + C(g(F) - g(m) < 0 ? 0 : g(F) - g(m)) + " 个角色 ", 1)]), f(P)])),
                        _: 1
                    })])),
                    _: 1
                })])),
                _: 1
            }), f(de, {
                cols: "1 s:2 m:3",
                "x-gap": "20",
                "y-gap": "20"
            }, {
                default: h((()=>[(j(!0),
                p(z, null, T(g(l), (e=>(j(),
                I(ne, {
                    key: e.id
                }, {
                    default: h((()=>[w("div", ee, [w("div", ae, [w("div", te, [f(S, {
                        src: e.avatar || "/images/default-avatar.png",
                        round: "",
                        size: 64,
                        class: "border-2 border-white shadow"
                    }, null, 8, ["src"])]), w("div", re, [w("div", se, [f(B, {
                        strong: "",
                        class: "text-gray-800"
                    }, {
                        default: h((()=>[k(C(e.name || "未绑定角色"), 1)])),
                        _: 2
                    }, 1024), f(N, {
                        type: "primary",
                        size: "tiny",
                        class: "mt-3 w-full bg-blue-500 hover:bg-blue-600",
                        secondary: "",
                        onClick: a=>U(e.id)
                    }, {
                        default: h((()=>n[5] || (n[5] = [k(" 切换 ")]))),
                        _: 2
                    }, 1032, ["onClick"])]), e.name ? (j(),
                    p(z, {
                        key: 0
                    }, [f(B, {
                        depth: "3",
                        class: "text-sm block"
                    }, {
                        default: h((()=>[k(" 区服: " + C(e.server ? Number(e.server) - 27 : "无"), 1)])),
                        _: 2
                    }, 1024), f(B, {
                        depth: "3",
                        class: "text-xs text-gray-400 block mt-1"
                    }, {
                        default: h((()=>[k(" ID: " + C(e.roleId), 1)])),
                        _: 2
                    }, 1024)], 64)) : (j(),
                    I(N, {
                        key: 1,
                        type: "primary",
                        size: "medium",
                        class: "mt-3 w-full bg-blue-500 hover:bg-blue-600",
                        secondary: "",
                        onClick: a=>U(e.id)
                    }, {
                        default: h((()=>n[6] || (n[6] = [k(" 绑定角色 ")]))),
                        _: 2
                    }, 1032, ["onClick"]))]), w("div", oe, [f(N, {
                        secondary: "",
                        type: "primary",
                        onClick: a=>g(r).changeGameRole(e)
                    }, {
                        default: h((()=>n[7] || (n[7] = [k(" 登入 ")]))),
                        _: 2
                    }, 1032, ["onClick"])])]), f(N, {
                        class: "delete-button",
                        secondary: "",
                        type: "error",
                        size: "small",
                        circle: "",
                        onClick: a=>{
                            return t = e.id,
                            void o.warning({
                                title: "确认删除",
                                content: "确认删除该角色吗？该操作不可撤回！",
                                positiveText: "确认",
                                negativeText: "取消",
                                onPositiveClick: ()=>{
                                    R("/api/v1/gamerole/delete", {
                                        method: "POST",
                                        body: {
                                            id: t
                                        }
                                    }).execute().then((e=>{
                                        e.success && (s.success("删除成功"),
                                        d())
                                    }
                                    ))
                                }
                            });
                            var t
                        }
                    }, {
                        icon: h((()=>[f(H, {
                            name: "ion:trash-b"
                        })])),
                        _: 2
                    }, 1032, ["onClick"])])])),
                    _: 2
                }, 1024)))), 128))])),
                _: 1
            }), g(F) - g(m) > 0 ? (j(),
            p("div", ie, [f(N, {
                type: "primary",
                size: "large",
                class: "px-8 bg-blue-500 hover:bg-blue-600",
                onClick: n[0] || (n[0] = e=>("navigateTo"in a ? a.navigateTo : g($))("/gamerole/add"))
            }, {
                default: h((()=>n[8] || (n[8] = [k(" 添加其他角色 ")]))),
                _: 1
            })])) : v("", !0), f(pe, {
                show: g(t),
                "onUpdate:show": n[1] || (n[1] = e=>b(t) ? t.value = e : null),
                preset: "card",
                title: "绑定角色",
                bordered: !1,
                style: {
                    width: "600px"
                }
            }, {
                default: h((()=>[g(J) ? (j(),
                p("div", le, [f(me, {
                    description: "获取角色数据列表中..."
                })])) : (j(),
                I(ue, {
                    key: 1,
                    hoverable: ""
                }, {
                    default: h((()=>[(j(!0),
                    p(z, null, T(g(G), (e=>(j(),
                    p(z, {
                        key: e.roleId
                    }, ["" !== e.name ? (j(),
                    I(ce, {
                        key: 0
                    }, {
                        suffix: h((()=>[f(N, {
                            type: "primary",
                            size: "small",
                            onClick: a=>{
                                return r = e,
                                void R("/api/v1/changerole", {
                                    method: "POST",
                                    body: {
                                        id: i.value,
                                        roleId: r.roleId,
                                        server: r.serverId,
                                        name: r.name
                                    }
                                }).execute().then((e=>{
                                    e.success && (s.success("绑定成功，请点击登入进行切换游戏角色"),
                                    t.value = !1,
                                    d())
                                }
                                ));
                                var r
                            }
                        }, {
                            default: h((()=>n[9] || (n[9] = [k(" 绑定 ")]))),
                            _: 2
                        }, 1032, ["onClick"])])),
                        default: h((()=>[k(C(e.name) + "（" + C(e.serverId - 27) + "服） ", 1)])),
                        _: 2
                    }, 1024)) : v("", !0)], 64)))), 128))])),
                    _: 1
                }))])),
                _: 1
            }, 8, ["show"])])
        }
    }
}), [["__scopeId", "data-v-59f3b4c2"]]);
export {ne as default};
