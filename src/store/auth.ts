interface PersonType {
	login: string
	password: string
}

export default {
	state: {
		auth: null,
	},
	getters: {
		isAuth: (state: any) => !!state.auth,
		getAuth: (state: any) => state.auth,
	},
	mutations: {
		setUser(state: any, action: PersonType) {
			state.auth = action
		},
		logout(state: any) {
			state.auth = null
		},
	},
}
