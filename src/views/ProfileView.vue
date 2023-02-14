<template>
	<div class="page-wrapper">
		<div class="container-xl">
			<div class="card">
				<div class="row g-0">
					<div class="col d-flex flex-column">
						<div class="card-body">
							<h2 class="mb-4">Профиль</h2>
							<h3 class="card-title mt-4">Персональные данные</h3>
							<div class="row g-4">
								<div class="col-md">
									<div class="form-label">Фамилия</div>
									<input
										type="text"
										class="form-control"
										:class="[error && !copyProfile.lastName && 'is-invalid']"
										v-model="copyProfile.lastName"
									/>
								</div>
								<div class="col-md">
									<div class="form-label">Имя</div>
									<input
										type="text"
										class="form-control"
										:class="[error && !copyProfile.firstName && 'is-invalid']"
										v-model="copyProfile.firstName"
									/>
								</div>
								<div class="col-md">
									<div class="form-label">Отчество</div>
									<input
										type="text"
										class="form-control"
										v-model="copyProfile.middleName"
									/>
								</div>
								<!-- <div class="col-md">
									<div class="form-label">Пароль</div>
									<button
										class="btn btn-danger"
										data-bs-toggle="modal"
										data-bs-target="#ChangePasswordModal"
									>
										Сменить
									</button>
								</div> -->
							</div>
							<div class="row g-4">
								<div class="col-md">
									<h3 class="card-title mt-4">Электронная почта</h3>
									<input
										type="text"
										class="form-control"
										:class="[error && !copyProfile.email && 'is-invalid']"
										v-model="copyProfile.email"
									/>
								</div>
								<div class="col-md">
									<h3 class="card-title mt-4">Телефон</h3>
									<input
										type="text"
										class="form-control"
										:class="[error && !copyProfile.telefons && 'is-invalid']"
										v-model="copyProfile.telefons"
									/>
								</div>
								<div class="col-md"></div>
								<div class="col-md"></div>
							</div>
						</div>
						<div class="card-footer bg-transparent mt-auto">
							<div class="btn-list justify-content-end">
								<a href="#" class="btn" :disabled="isLoading">Отменить</a>
								<a
									href="#"
									class="btn btn-primary"
									@click="clickToUpdateProfile"
									:disabled="isLoading"
									>Сохранить</a
								>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<ChangePasswordModal @changePassword="changePassword" />
	<button
		class="d-none"
		data-bs-toggle="modal"
		data-bs-target="#danger_alert"
		ref="danger_button"
	></button>
	<AlertDanger title="Старый пароль не подходит" />
	<button
		class="d-none"
		data-bs-toggle="modal"
		data-bs-target="#successful_alert"
		ref="successful_button"
	></button>
	<AlertSuccessful title="Пароль успешно изменен" />
</template>

<script>
import ChangePasswordModal from '@/components/ChangePasswordModal.vue'
import AlertDanger from '@/components/Alert/AlertDanger.vue'
import AlertSuccessful from '@/components/Alert/AlertSuccessful.vue'

import store from '@/store'

export default {
	props: [],
	components: {
		ChangePasswordModal,
		AlertDanger,
		AlertSuccessful,
	},
	data: () => ({
		copyProfile: {},
		isLoading: false,
		error: false,
	}),
	async mounted() {
		await store.dispatch('fetchProfile')
		this.copyProfile = { ...this.profile }
	},
	methods: {
		changePassword(newPassword, oldPassword) {
			if (oldPassword === this.profile.password) {
				this.profile.password = newPassword
				this.$refs['successful_button'].click()
			} else {
				this.$refs['danger_button'].click()
			}
		},
		async clickToUpdateProfile() {
			this.error = false
			if (
				!this.copyProfile.firstName ||
				!this.copyProfile.lastName ||
				!this.copyProfile.telefons ||
				!this.copyProfile.email
			) {
				return (this.error = true)
			}
			this.isLoading = true
			await store.dispatch('updateProfile', { ...this.copyProfile })
			this.isLoading = false
		},
	},
	computed: {
		profile() {
			return store.getters.getProfile
		},
	},
}
</script>
