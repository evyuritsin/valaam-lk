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

			const { data, status } = await fetch(
				'http://valaamskiy-polomnik.directpr.beget.tech/api/auth/login',
				{
					method: 'POST',
					body: form,
				}
			).then(response => response.json())

			if (status === 'error') {
				return
			}

			if (data.accessToken) {
				localStorage.setItem('token', data.accessToken)
				commit('setToken', data.accessToken)
			}
			await dispatch('fetchProfile')
		},
		async fetchProfile({ commit, getters }: any) {
			const token = localStorage.getItem('token')
			const headers = new Headers({
				Authorization: 'Bearer ' + token,
				'Content-Type': 'application/x-www-form-urlencoded',
				'Access-Control-Allow-Origin': '*',
			})

			await fetch(
				'http://valaamskiy-polomnik.directpr.beget.tech/api/profile/',
				{
					headers,
					method: 'GET',
				}
			)
				.then(response => response.json())
				.then(({ data }) => {
					commit('setProfile', { ...data })
				})
		},
		async updateProfile({ dispatch }: any, newProfile: any) {
			const formData = new FormData()
			formData.append('firstname', newProfile.firstName)
			formData.append('patronymic', newProfile.middleName)
			formData.append('lastname', newProfile.lastName)
			formData.append('phone', newProfile.telefons)
			formData.append('email', newProfile.email)

			const token = localStorage.getItem('token')
			const headers = new Headers({
				Authorization: 'Bearer ' + token,
				'Access-Control-Allow-Origin': '*',
			})

			await fetch(
				'http://valaamskiy-polomnik.directpr.beget.tech/api/profile',
				{
					method: 'POST',
					headers,
					body: formData,
				}
			).then(response => response.json())
			await dispatch('fetchProfile')
		},
		async changePassword(ctx: any, passwords: any) {
			const form = new FormData()
			form.append('old_password', passwords.oldPassword)
			form.append('password', passwords.newPassword)
			form.append('password_confirmation', passwords.repeatNewPassword)

			const token = localStorage.getItem('token')
			const headers = new Headers({
				Authorization: 'Bearer ' + token,
				'Access-Control-Allow-Origin': '*',
			})

			return await fetch(
				'http://valaamskiy-polomnik.directpr.beget.tech/api/profile/password',
				{
					method: 'POST',
					headers,
					body: form,
				}
			).then(response => response.json())
		},
	},
}
