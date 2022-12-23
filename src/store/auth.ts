interface UserType {
	id?: number | string
	login: string
	password: string
}

export default {
	state: {
		auth: null,
		users: [
			{ id: 1, login: 'tigran', password: 'qwerty123' },
			{ id: 2, login: 'anya', password: '12345t' },
			{ id: 1, login: 'petya', password: 'trewq1234' },
			{ id: 1, login: 'victor', password: '1234567' },
			{ id: 1, login: 'zhenya', password: '15151515www' },
			{ id: 1, login: 'artem', password: '1234abc' },
		],
	},
	getters: {
		isAuth: (state: any) => !!state.auth,
		getAuth: (state: any) => state.auth,
		getUsers: (state: any) => state.users,
	},
	mutations: {
		setUser(state: any, action: UserType) {
			state.auth = action
		},
		logout(state: any) {
			state.auth = null
		},
	},
}
