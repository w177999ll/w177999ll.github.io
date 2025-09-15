var e = e => {
    throw TypeError(e)
},
t = (t, i, n) => (((t, i, n) => {
    i.has(t) || e("Cannot " + n)
})(t, i, "read from private field"), n ? n.call(t) : i.get(t));
import i from "./BANbGyBU.js";
import {
f as n
} from "./CqBTH17V.js";
import {
U as r,
r as o,
V as a,
H as s,
W as l,
X as c,
P as u,
d,
o as p,
t as f,
x as m,
z as v,
F as y,
A as h,
O as g,
B as b,
y as j,
Y as w,
Z as k,
J as $,
I as x,
_ as A,
v as S,
K as O,
N as E,
g as z,
n as T
} from "./DpD38Hq9.js";
import {
A as _
} from "./Bn1g-ruw.js";
import {
u as C
} from "./DnjT7zNg.js";
import {
u as I
} from "./BUzHT0Ek.js";
import {
_ as U
} from "./Dx5HKwqO.js";
import {
_ as P
} from "./DltK94za.js";
import {
_ as D
} from "./CbsLOY7N.js";
import {
u as M
} from "./AE7psNvX.js";
import {
_ as N
} from "./DrZaQ8bd.js";
import {
_ as B
} from "./MJhzGfyV.js";
import {
_ as R
} from "./BCo6x5W8.js";
import "./Cwo8lmsB.js";
import "./lCjFnaQV.js";
import "./-a6dyge6.js";
import "./DjN1tzHg.js";
import "./CYSlBwxp.js";
import "./CLmcmnGu.js";
import "./l2rsThpR.js";
import "./DiJwGkuW.js";
import "./B4ZxnYc8.js";
import "./BOzaSZwJ.js";
import "./Bff37aro.js";
import "./F3BADSHd.js";
import "./BpvzvWyB.js";
import "./DeVOemtc.js";
import "./DQ0nmumO.js";
import "./DNc6_3jH.js";
import "./D3ikBJ7G.js";
import "./BUIvzWMC.js";
import "./Bz3-pLFH.js";

function L(e) {
return "string" == typeof e ? `'${e}'` : (new F)
    .serialize(e)
}
const F = function() {
var i;
class n {
    constructor() {
        var t, n, r;
        t = this, n = i, r = new Map, n.has(t) ? e("Cannot add the same private member more than once") : n instanceof WeakSet ? n.add(t) : n.set(t, r)
    }
    compare(e, t) {
        const i = typeof e,
            n = typeof t;
        return "string" === i && "string" === n ? e.localeCompare(t) : "number" === i && "number" === n ? e - t : String.prototype.localeCompare.call(this.serialize(e, !0), this.serialize(t, !0))
    }
    serialize(e, t) {
        if (null === e) return "null";
        switch (typeof e) {
            case "string":
                return t ? e : `'${e}'`;
            case "bigint":
                return `${e}n`;
            case "object":
                return this.$object(e);
            case "function":
                return this.$function(e)
        }
        return String(e)
    }
    serializeObject(e) {
        const t = Object.prototype.toString.call(e);
        if ("[object Object]" !== t) return this.serializeBuiltInType(t.length < 10 ? `unknown:${t}` : t.slice(8, -1), e);
        const i = e.constructor,
            n = i === Object || void 0 === i ? "" : i.name;
        if ("" !== n && globalThis[n] === i) return this.serializeBuiltInType(n, e);
        if ("function" == typeof e.toJSON) {
            const t = e.toJSON();
            return n + (null !== t && "object" == typeof t ? this.$object(t) : `(${this.serialize(t)})`)
        }
        return this.serializeObjectEntries(n, Object.entries(e))
    }
    serializeBuiltInType(e, t) {
        const i = this["$" + e];
        if (i) return i.call(this, t);
        if ("function" == typeof(null == t ? void 0 : t.entries)) return this.serializeObjectEntries(e, t.entries());
        throw new Error(`Cannot serialize ${e}`)
    }
    serializeObjectEntries(e, t) {
        const i = Array.from(t)
            .sort(((e, t) => this.compare(e[0], t[0])));
        let n = `${e}{`;
        for (let r = 0; r < i.length; r++) {
            const [e, t] = i[r];
            n += `${this.serialize(e,!0)}:${this.serialize(t)}`, r < i.length - 1 && (n += ",")
        }
        return n + "}"
    }
    $object(e) {
        let n = t(this, i)
            .get(e);
        return void 0 === n && (t(this, i)
            .set(e, `#${t(this,i).size}`), n = this.serializeObject(e), t(this, i)
            .set(e, n)), n
    }
    $function(e) {
        const t = Function.prototype.toString.call(e);
        return "[native code] }" === t.slice(-15) ? `${e.name||""}()[native]` : `${e.name}(${e.length})${t.replace(/\s*\n\s*/g,"")}`
    }
    $Array(e) {
        let t = "[";
        for (let i = 0; i < e.length; i++) t += this.serialize(e[i]), i < e.length - 1 && (t += ",");
        return t + "]"
    }
    $Date(e) {
        try {
            return `Date(${e.toISOString()})`
        } catch {
            return "Date(null)"
        }
    }
    $ArrayBuffer(e) {
        return `ArrayBuffer[${new Uint8Array(e).join(",")}]`
    }
    $Set(e) {
        return `Set${this.$Array(Array.from(e).sort(((e,t)=>this.compare(e,t))))}`
    }
    $Map(e) {
        return this.serializeObjectEntries("Map", e.entries())
    }
}
i = new WeakMap;
for (const e of ["Error", "RegExp", "URL"]) n.prototype["$" + e] = function(t) {
    return `${e}(${t})`
};
for (const e of ["Int8Array", "Uint8Array", "Uint8ClampedArray", "Int16Array", "Uint16Array", "Int32Array", "Uint32Array", "Float32Array", "Float64Array"]) n.prototype["$" + e] = function(t) {
    return `${e}[${t.join(",")}]`
};
for (const e of ["BigInt64Array", "BigUint64Array"]) n.prototype["$" + e] = function(t) {
    return `${e}[${t.join("n,")}${t.length>0?"n":""}]`
};
return n
}();

function J(e) {
return e.includes("%") ? decodeURIComponent(e) : e
}

function Y(e, t) {
try {
    return t(e)
} catch {
    return e
}
}
const H = /^[\u0009\u0020-\u007E\u0080-\u00FF]+$/;

function W(e, t, i) {
const n = i || {},
    r = n.encode || encodeURIComponent;
if ("function" != typeof r) throw new TypeError("option encode is invalid");
if (!H.test(e)) throw new TypeError("argument name is invalid");
const o = r(t);
if (o && !H.test(o)) throw new TypeError("argument val is invalid");
let a = e + "=" + o;
if (void 0 !== n.maxAge && null !== n.maxAge) {
    const e = n.maxAge - 0;
    if (Number.isNaN(e) || !Number.isFinite(e)) throw new TypeError("option maxAge is invalid");
    a += "; Max-Age=" + Math.floor(e)
}
if (n.domain) {
    if (!H.test(n.domain)) throw new TypeError("option domain is invalid");
    a += "; Domain=" + n.domain
}
if (n.path) {
    if (!H.test(n.path)) throw new TypeError("option path is invalid");
    a += "; Path=" + n.path
}
if (n.expires) {
    if (s = n.expires, !("[object Date]" === Object.prototype.toString.call(s) || s instanceof Date) || Number.isNaN(n.expires.valueOf())) throw new TypeError("option expires is invalid");
    a += "; Expires=" + n.expires.toUTCString()
}
var s;
if (n.httpOnly && (a += "; HttpOnly"), n.secure && (a += "; Secure"), n.priority) {
    switch ("string" == typeof n.priority ? n.priority.toLowerCase() : n.priority) {
        case "low":
            a += "; Priority=Low";
            break;
        case "medium":
            a += "; Priority=Medium";
            break;
        case "high":
            a += "; Priority=High";
            break;
        default:
            throw new TypeError("option priority is invalid")
    }
}
if (n.sameSite) {
    switch ("string" == typeof n.sameSite ? n.sameSite.toLowerCase() : n.sameSite) {
        case !0:
            a += "; SameSite=Strict";
            break;
        case "lax":
            a += "; SameSite=Lax";
            break;
        case "strict":
            a += "; SameSite=Strict";
            break;
        case "none":
            a += "; SameSite=None";
            break;
        default:
            throw new TypeError("option sameSite is invalid")
    }
}
return n.partitioned && (a += "; Partitioned"), a
}

function K(e) {
if ("object" != typeof e) return e;
var t, i, n = Object.prototype.toString.call(e);
if ("[object Object]" === n) {
    if (e.constructor !== Object && "function" == typeof e.constructor)
        for (t in i = new e.constructor, e) e.hasOwnProperty(t) && i[t] !== e[t] && (i[t] = K(e[t]));
    else
        for (t in i = {}, e) "__proto__" === t ? Object.defineProperty(i, t, {
            value: K(e[t]),
            configurable: !0,
            enumerable: !0,
            writable: !0
        }) : i[t] = K(e[t]);
    return i
}
if ("[object Array]" === n) {
    for (t = e.length, i = Array(t); t--;) i[t] = K(e[t]);
    return i
}
return "[object Set]" === n ? (i = new Set, e.forEach((function(e) {
    i.add(K(e))
})), i) : "[object Map]" === n ? (i = new Map, e.forEach((function(e, t) {
    i.set(K(t), K(e))
})), i) : "[object Date]" === n ? new Date(+e) : "[object RegExp]" === n ? ((i = new RegExp(e.source, e.flags))
    .lastIndex = e.lastIndex, i) : "[object DataView]" === n ? new e.constructor(K(e.buffer)) : "[object ArrayBuffer]" === n ? e.slice(0) : "Array]" === n.slice(-6) ? new e.constructor(e) : e
}
const Q = {
    path: "/",
    watch: !0,
    decode: e => r(decodeURIComponent(e)),
    encode: e => encodeURIComponent("string" == typeof e ? e : JSON.stringify(e))
},
V = window.cookieStore;

function Z(e, t) {
var i;
const n = {
    ...Q,
    ...t
};
n.filter ?? (n.filter = t => t === e);
const r = q(n) || {};
let d;
void 0 !== n.maxAge ? d = 1e3 * n.maxAge : n.expires && (d = n.expires.getTime() - Date.now());
const p = void 0 !== d && d <= 0,
    f = p || void 0 === r[e] || null === r[e],
    m = K(p ? void 0 : r[e] ?? (null == (i = n.default) ? void 0 : i.call(n))),
    v = d && !p ? function(e, t, i) {
        let n, r, u = 0;
        const d = i ? o(e) : {
            value: e
        };
        l() && a((() => {
            null == r || r(), clearTimeout(n)
        }));
        return c(((e, o) => {
            function a() {
                u = 0, clearTimeout(n);
                const e = t - u,
                    i = e < G ? e : G;
                n = setTimeout((() => {
                    if (u += i, u < t) return a();
                    d.value = void 0, o()
                }), i)
            }
            return i && (r = s(d, o)), {
                get: () => (e(), d.value),
                set(e) {
                    a(), d.value = e, o()
                }
            }
        }))
    }(m, d, n.watch && "shallow" !== n.watch) : o(m); {
    let t = null;
    try {
        V || "undefined" == typeof BroadcastChannel || (t = new BroadcastChannel(`nuxt:cookies:${e}`))
    } catch {}
    const i = (i = !1) => {
            var o, a;
            (i || !n.readonly && (o = v.value, a = r[e], o !== a && L(o) !== L(a))) && (! function(e, t, i = {}) {
                document.cookie = function(e, t, i = {}) {
                    if (null == t) return W(e, t, {
                        ...i,
                        maxAge: -1
                    });
                    return W(e, t, i)
                }(e, t, i)
            }(e, v.value, n), r[e] = K(v.value), null == t || t.postMessage({
                value: n.encode(v.value)
            }))
        },
        o = t => {
            var i;
            const o = t.refresh ? null == (i = q(n)) ? void 0 : i[e] : n.decode(t.value);
            c = !0, v.value = o, r[e] = K(o), u((() => {
                c = !1
            }))
        };
    let c = !1;
    const d = !!l();
    if (d && a((() => {
        c = !0, i(), null == t || t.close()
    })), V) {
        const t = t => {
            const i = t.changed.find((t => t.name === e)),
                n = t.deleted.find((t => t.name === e));
            i && o({
                value: i.value
            }), n && o({
                value: null
            })
        };
        V.addEventListener("change", t), d && a((() => V.removeEventListener("change", t)))
    } else t && (t.onmessage = ({
        data: e
    }) => o(e));
    n.watch && s(v, (() => {
        c || i()
    }), {
        deep: "shallow" !== n.watch
    }), f && i(f)
}
return v
}

function q(e = {}) {
return function(e, t) {
    if ("string" != typeof e) throw new TypeError("argument str must be a string");
    const i = {},
        n = t || {},
        r = n.decode || J;
    let o = 0;
    for (; o < e.length;) {
        const t = e.indexOf("=", o);
        if (-1 === t) break;
        let a = e.indexOf(";", o);
        if (-1 === a) a = e.length;
        else if (a < t) {
            o = e.lastIndexOf(";", t - 1) + 1;
            continue
        }
        const s = e.slice(o, t)
            .trim();
        if (!(null == n ? void 0 : n.filter) || (null == n ? void 0 : n.filter(s))) {
            if (void 0 === i[s]) {
                let n = e.slice(t + 1, a)
                    .trim();
                34 === n.codePointAt(0) && (n = n.slice(1, -1)), i[s] = Y(n, r)
            }
            o = a + 1
        } else o = a + 1
    }
    return i
}(document.cookie, e)
}
const G = 2147483647;
const X = {
    class: "profile-container"
},
ee = {
    class: "user-info-section"
},
te = {
    class: "user-basic-info"
},
ie = {
    class: "avatar-container"
},
ne = {
    class: "user-details"
},
re = {
    class: "username"
},
oe = {
    class: "user-assets-wrapper"
},
ae = {
    class: "user-assets"
},
se = {
    class: "asset-item"
},
le = {
    class: "asset-info"
},
ce = {
    class: "asset-value"
},
ue = {
    class: "asset-item"
},
de = {
    class: "asset-info"
},
pe = {
    class: "asset-value"
},
fe = {
    class: "asset-item"
},
me = {
    class: "asset-info"
},
ve = {
    class: "asset-value"
},
ye = {
    key: 0,
    class: "asset-label"
},
he = {
    class: "role-list mt-4"
},
ge = ["onClick"],
be = {
    class: "role-name"
},
je = {
    key: 1,
    class: "no-roles"
},
we = R(d({
    __name: "profile",
    setup(e) {
        C({
            title: "个人中心"
        });
        const t = M(),
            {
                data: r,
                execute: a
            } = I("/api/v1/userinfo"),
            s = I("/api/user/sign", {
                method: "POST"
            }),
            l = o(!1),
            c = o(!1),
            u = o("");

        function d() {
            var e;
            u.value = (null == (e = r.value) ? void 0 : e.nickname) || "", c.value = !0
        }
        async function R() {
            if (!u.value.trim()) return void t.error("昵称不能为空");
            I("/api/user/update-profile", {
                    method: "POST",
                    body: {
                        nickname: u.value
                    }
                })
                .execute()
                .then((e => {
                    e.success && (t.success("昵称更新成功"), a())
                }))
                .finally((() => c.value = !1))
        }
        const L = [{
                label: "角色列表",
                key: "/gamerole/list",
                icon: () => v(z("icon"), {
                    name: "ion:people"
                }, null)
            }, {
                label: "API接口",
                key: "/apidetails",
                icon: () => v(z("icon"), {
                    name: "ion:ios-thunderstorm"
                }, null)
            }, {
                label: "关于我们",
                key: "about",
                icon: () => v(z("icon"), {
                    name: "ion:information-circle"
                }, null)
            }, {
                label: "更新日志",
                key: "/changelog",
                icon: () => v(z("icon"), {
                    name: "ion:time"
                }, null)
            }, {
                type: "divider"
            }, {
                label: "退出登录",
                key: "logout",
                icon: () => v(z("icon"), {
                    name: "ion:log-out"
                }, null)
            }],
            F = o(!1);

        function J() {
            F.value ? t.info("今日已签到") : s.execute()
                .then((e => {
                    var i;
                    e.success && (t.success(`签到成功，积分+${null==(i=e.data)?void 0:i.credit}`), F.value = !0, a())
                }))
        }
        async function Y(e) {
            if ("logout" === e) {
                Z("token")
                    .value = null, T("/login")
            } else "joinGroup" === e ? window.open("https://kook.vip/QbaE6g", "_blank") : T(e)
        }
        return p((() => {
            a(), I("/api/v1/sign_check")
                .execute()
                .then((e => {
                    e.success && (F.value = e.data.signed)
                }))
        })), (e, o) => {
            var p, z, T, C, M, H, W, K;
            const Q = U,
                V = i,
                Z = x,
                q = N,
                G = B,
                we = P,
                ke = D,
                $e = A;
            return S(), f("div", X, [m("div", ee, [m("div", te, [m(), m("div", ne, [y(c) ? (S(), g(q, {
                key: 1,
                value: y(u),
                "onUpdate:value": o[1] || (o[1] = e => k(u) ? u.value = e : null),
                size: "small",
                style: {
                    width: "150px"
                },
                onBlur: R,
                onKeyup: w(R, ["enter"])
            }, null, 8, ["value"])) : (S(), f("div", {
                key: 0,
                class: "nickname",
                onClick: d
            })), m("div", re, "用户名：" + j(null == (T = y(r)) ? void 0 : T.username), 1)])])]), m("div", oe, [m("div", ae, [m("div", fe, [m("div", me, [m("div", ve, [v(G, {
                type: (null == (H = y(r)) ? void 0 : H.vipLevel) ? "warning" : "default",
                size: "small",
                round: ""
            }, {
                default: h((() => o[5] || (o[5] = [b(" 额外卡槽 ")]))),
                _: 1
            }, 8, ["type"])]), (null == (W = y(r)) ? void 0 : W.vipExpireAt) ? (S(), f("div", ye, " 到期时间：" + j(("formatDate" in e ? e.formatDate : y(n))(null == (K = y(r)) ? void 0 : K.vipExpireAt, "YYYY-MM-DD")), 1)) : $("", !0)])])])]), v(we, {
                type: "info"
            }, {
                default: h((() => o[6] || (o[6] = [m("div", null, "爱我还是他。", -1), m("div", null, "如何自动执行任务请点击下方API接口", -1), m("div", null, "这场雨，不打伞或许更浪费", -1)]))),
                _: 1
            }), v(ke, {
                options: L,
                class: "p-0",
                "onUpdate:value": Y
            }), v($e, {
                show: y(l),
                "onUpdate:show": o[2] || (o[2] = e => k(l) ? l.value = e : null),
                preset: "dialog",
                title: "选择角色头像"
            }, {
                default: h((() => {
                    var e, i, n;
                    return [m("div", he, [(null == (i = null == (e = y(r)) ? void 0 : e.gameRoles) ? void 0 : i.length) ? (S(!0), f(O, {
                        key: 0
                    }, E(null == (n = y(r)) ? void 0 : n.gameRoles, (e => (S(), f("div", {
                        key: e.id,
                        class: "role-item",
                        onClick: i => async function(e) {
                            if (!e) return void t.error("请选择其他头像");
                            I("/api/user/update-profile", {
                                    method: "POST",
                                    body: {
                                        avatar: e
                                    }
                                })
                                .execute()
                                .then((e => {
                                    e.success && (t.success("头像更新成功"), l.value = !1, a())
                                }))
                        }(e.avatar)
                    }, [v(Q, {
                        round: "",
                        size: 48,
                        src: e.avatar || y(_)
                            .defaultAvatar
                    }, null, 8, ["src"]), m("div", be, j(e.name), 1)], 8, ge)))), 128)) : (S(), f("div", je, "暂无角色，请先绑定游戏角色"))])]
                })),
                _: 1
            }, 8, ["show"])])
        }
    }
}), [
    ["__scopeId", "data-v-8ea8b33b"]
]);
export {
we as
default
};
