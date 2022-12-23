<template>
	<div id="LoginModal" class="modal" tabindex="-1">
		<div class="modal-dialog modal-lg" role="document">
			<div class="modal-content">
				<div class="modal-header">
					<h1 class="modal-title d-block mx-auto">Авторизация</h1>
					<button
						type="button"
						class="btn-close"
						data-bs-dismiss="modal"
						aria-label="Close"
						ref="closeButton"
					></button>
				</div>
				<div class="modal-body">
					<div class="mb-3">
						<label class="form-label">Логин</label>
						<input
							type="text"
							class="form-control"
							name="example-text-input"
							v-model="login"
						/>
					</div>
					<div class="mb-3">
						<label class="form-label">Пароль</label>
						<input
							type="password"
							class="form-control"
							name="example-text-input"
							v-model="password"
						/>
					</div>
					<span v-if="error" class="text-danger fs-2"
						>Неверный логин или пароль</span
					>
				</div>
				<div class="modal-footer">
					<button @click="clickToLogin" class="btn btn-primary ms-auto w-100">
						Войти
					</button>
					<button
						class="d-none"
						ref="closeBtn"
						data-bs-dismiss="modal"
					></button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import store from '@/store'
export default {
	data: () => ({
		login: '',
		password: '',
		error: false,
	}),
	computed: {
		allUsers() {
			return store.getters['getUsers']
		},
	},
	methods: {
		clickToLogin() {
			this.error = false
			const user = { login: this.login, password: this.password }
			const findUser = this.allUsers.find(
				user => user.login === this.login && user.password === this.password
			)
			if (findUser) {
				store.commit('setUser', { ...findUser })
				this.$refs.closeBtn.click()
			} else {
				this.error = true
			}
		},
	},
}
</script>

<style></style>
