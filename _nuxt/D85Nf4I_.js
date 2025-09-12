import {
	$ as e,
	n as a
} from "./DpD38Hq9.js";
import {
	g as t,
	r as i,
	e as s,
	f as n,
	u as d,
	c as o,
	h as c
} from "./BUzHT0Ek.js";
const r = e("user", {
	state: () => ({
		id: 0,
		username: "",
		nickname: "",
		wxOpenId: null,
		phone: "",
		email: null,
		createdAt: void 0,
		avatar: "",
		credit: 0,
		coin: 0,
		vipLevel: 0,
		vipExpireAt: void 0,
		gameRoles: [],
		gameRole: t(),
		AutoTask: null,
		agreementAccepted: !0
	}),
	getters: {
		getUserInfo: e => ({
			id: e.id,
			username: e.username,
			nickname: e.nickname,
			wxOpenId: e.wxOpenId,
			phone: e.phone,
			email: e.email,
			createdAt: e.createdAt,
			avatar: e.avatar,
			credit: e.credit,
			coin: e.coin,
			vipLevel: e.vipLevel,
			vipExpireAt: e.vipExpireAt,
			gameRoles: e.gameRoles,
			gameRole: t(),
			AutoTask: e.AutoTask,
			agreementAccepted: e.agreementAccepted
		})
	},
	actions: {
		async login(e, t) {
			const i = d("/api/v1/login", {
					method: "POST"
				}),
				s = await i.execute({
					body: {
						username: e,
						password: t
					}
				}),
				{
					message: n
				} = o(["message"]);
			if (s.success) {
				const e = s.data.token;
				c(e), this.fetchUserInfo(), n.success("登录成功"), await a("/home")
			}
		},
		async fetchUserInfo() {
			const e = d("/api/v1/userinfo"),
				a = await e.execute();
			a.success && (this.id = a.data.id, this.username = a.data.username, this.nickname = a.data.nickname, this.wxOpenId = a.data.wxOpenId, this.phone = a.data.phone, this.email = a.data.email, this.avatar = a.data.avatar, this.credit = a.data.credit, this.coin = a.data.coin, this.vipLevel = a.data.vipLevel, this.vipExpireAt = a.data.vipExpireAt, this.email = a.data.email, this.createdAt = a.data.createdAt, this.updatedAt = a.data.updatedAt, this.policy = a.data.policy, this.AutoTask = a.data.AutoTask, this.agreementAccepted = a.data.agreementAccepted)
		},
		logout() {
			n(), a("/login")
		},
		changeGameRole(e) {
			i(), s(e), this.gameRole = e, window.location.reload()
		}
	}
});
export {
	r as u
};