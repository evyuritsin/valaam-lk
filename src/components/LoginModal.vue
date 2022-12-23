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
				</div>
				<div class="modal-footer">
					<button
						@click="clickToLogin"
						class="btn btn-primary ms-auto w-100"
						data-bs-dismiss="modal"
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
		login: '',
		password: '',
	}),
	methods: {
		clickToLogin() {
			const user = { login: this.login, password: this.password }
			store.commit('setUser', { ...user })
		},
	},
}
</script>

<style></style>
