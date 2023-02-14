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
						<label class="form-label">E-mail</label>
						<input
							type="email"
							class="form-control"
							name="example-text-input"
							v-model="user.email"
						/>
					</div>
					<div class="mb-3">
						<label class="form-label">Пароль</label>
						<input
							type="password"
							class="form-control"
							name="example-text-input"
							v-model="user.password"
						/>
					</div>
					<span v-if="error" class="text-danger fs-2"
						>Неверный логин или пароль</span
					>
				</div>
				<div class="modal-footer">
					<button
						@click="clickToLogin"
						class="btn btn-primary ms-auto w-100"
						:disabled="isLoading"
					>
						Войти
					</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import store from '@/store'
export default {
	data: () => ({
		user: {
			email: '',
			password: '',
		},
		error: false,
		isLoading: false,
	}),
	computed: {
		isAuth() {
			return store.getters['isAuth']
		},
	},
	methods: {
		async clickToLogin() {
			this.$refs['closeButton'].click()
			this.error = false
			this.isLoading = true
			await store.dispatch('login', { ...this.user })
			this.isLoading = false
			if (!this.isAuth) {
				this.error = true
				this.user.password = ''
			}
		},
	},
}
</script>

<style></style>
