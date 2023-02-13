import axios from 'axios'

interface UserType {
	id?: number | string
	login: string
	password: string
}

export default {
	state: {
		token: null,
		profile: null,
	},
	getters: {
		isAuth: (state: any) => !!state.token,
		getProfile: (state: any) => state.profile,
	},
	mutations: {
		setProfile(state: any, action: any) {
			state.profile = action
		},
		setToken(state: any, action: any) {
			state.token = action
		},
		logout(state: any) {
			state.token = null
			state.profile = null
			localStorage.removeItem('token')
		},
	},
	actions: {
		async login({ commit, dispatch }: any, { email, password }: any) {
			const form = new FormData()
			form.append('email', email)
			form.append('password', password)

			await fetch(
				'http://www.valaamskiy-polomnik.directpr.beget.tech/api/auth/login',
				{
					method: 'POST',
					body: form,
				}
			)
				.then(response => response.json())
				.then(({ data }) => {
					localStorage.setItem('token', data.accessToken)
					commit('setToken', data.accessToken)
				})
			dispatch('fetchProfile')
		},
		async fetchProfile(ctx: any) {
			const token = localStorage.getItem('token')
			const headers = new Headers({
				Authorization: 'Token ' + token,
				'Content-Type': 'application/x-www-form-urlencoded',
				'Access-Control-Allow-Origin': '*',
			})

			await fetch(
				'http://www.valaamskiy-polomnik.directpr.beget.tech/api/profile/',
				{
					headers,
					method: 'GET',
				}
			)
				.then(response => response.json())
				.then(({ data }) => {
					console.log(data)
				})
		},
	},
}
