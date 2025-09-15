import a from "./BANbGyBU.js";
import {
	N as t
} from "./F3BADSHd.js";
import {
	d,
	r as s,
	o,
	t as c,
	v as n,
	x as e,
	z as i,
	A as v,
	O as r,
	L as l,
	E as p
} from "./DpD38Hq9.js";
import {
	_ as f
} from "./BCo6x5W8.js";
const m = {
		class: "important-notice"
	},
	u = {
		class: "header-left"
	},
	g = {
		class: "toggle-button"
	},
	_ = f(d({
		__name: "ImportantNotice",
		setup(d) {
			const f = s(!1),
				_ = () => {
					f.value = !f.value, localStorage.setItem("importantNoticeCollapsed", f.value.toString())
				};
			return o((() => {
				const a = localStorage.getItem("importantNoticeCollapsed");
				null !== a && (f.value = "true" === a)
			})), (d, s) => {
				const o = a,
					b = t;
				return n(), c("div", m, [e("div", {
					class: "notice-header",
					onClick: _
				}, [e("div", u, [i(b, {
					size: "20",
					color: "#e74c3c"
				}, {
					default: v((() => [i(o, {
						name: "material-symbols:lock"
					})])),
					_: 1
				}), s[0] || (s[0] = e("span", {
					class: "notice-title"
				}, "❤今天你emo了吗❤", -1))]), e("div", g, [i(b, {
					size: "18",
					color: f.value ? "#718096" : "#e74c3c"
				}, {
					default: v((() => [f.value ? (n(), r(o, {
						key: 1,
						name: "ion:chevron-up"
					})) : (n(), r(o, {
						key: 0,
						name: "ion:chevron-down"
					}))])),
					_: 1
				}, 8, ["color"])])]), e("div", {
					class: p(["notice-content", {
						collapsed: f.value
					}])
				}, s[1] || (s[1] = [l('<div class="content-inner" data-v-5c959ddf><div class="notice-item" data-v-5c959ddf><span data-v-5c959ddf><strong data-v-5c959ddf>爱情来的太快就像龙卷风/strong>。</span></div>', 1)]), 2)])
			}
		}
	}), [
		["__scopeId", "data-v-5c959ddf"]
	]);
export {
	_ as I
};
