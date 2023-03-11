<template>
	<div id="ChangePasswordModal" class="modal" tabindex="-1">
		<div class="modal-dialog modal-lg" role="document">
			<div class="modal-content">
				<div class="modal-header">
					<h5 class="modal-title">Новый пароль</h5>
					<button
						type="button"
						class="btn-close"
						data-bs-dismiss="modal"
						aria-label="Close"
					></button>
				</div>
				<div class="modal-body">
					<div class="mb-3">
						<label class="form-label">Старый пароль</label>
						<input
							type="password"
							class="form-control"
							name="example-text-input"
							placeholder="Старый пароль"
							v-model="passwords.oldPassword"
						/>
					</div>
					<div class="mb-3">
						<label class="form-label">Новый пароль</label>
						<input
							type="password"
							class="form-control"
							name="example-text-input"
							placeholder="Новый пароль"
							v-model="passwords.newPassword"
						/>
					</div>
					<div class="mb-3">
						<label class="form-label">Повторить пароль</label>
						<input
							type="password"
							class="form-control"
							name="example-text-input"
							placeholder="Повторить пароль"
							v-model="passwords.repeatNewPassword"
						/>
					</div>
				</div>
				<div class="modal-footer">
					<button
						@click="refreshInputs"
						class="btn btn-link link-secondary"
						data-bs-dismiss="modal"
					>
						Отмена
					</button>
					<button
						@click="changePassword"
						class="btn btn-primary ms-auto"
						data-bs-dismiss="modal"
					>
						Изменить пароль
					</button>
				</div>
			</div>
		</div>
	</div>
	<button
		class="d-none"
		data-bs-toggle="modal"
		data-bs-target="#danger_alert"
		ref="danger_button"
	></button>
	<AlertDanger title="Новые пароли не совпадают" />
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import { defineComponent } from 'vue'
//import MotorShipsItem from '@/components/MotorShipsItem.vue';
import AlertDanger from './Alert/AlertDanger.vue'

export default defineComponent({
	props: [],
	components: { AlertDanger },
	data: () => ({
		passwords: {
			oldPassword: '',
			newPassword: '',
			repeatNewPassword: '',
		},
	}),
	methods: {
		changePassword() {
			if (this.passwords.newPassword === this.passwords.repeatNewPassword) {
				this.$emit('changePassword', { ...this.passwords })
			} else {
				;(this.$refs['danger_button'] as any).click()
			}
			this.refreshInputs()
		},
		refreshInputs() {
			this.passwords.oldPassword = ''
			this.passwords.newPassword = ''
			this.passwords.repeatNewPassword = ''
		},
	},
})
</script>
<style scoped lang="scss"></style>
