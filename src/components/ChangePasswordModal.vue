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
							type="text"
							class="form-control"
							name="example-text-input"
							placeholder="Старый пароль"
							v-model="oldPassword"
						/>
					</div>
					<div class="mb-3">
						<label class="form-label">Новый пароль</label>
						<input
							type="text"
							class="form-control"
							name="example-text-input"
							placeholder="Новый пароль"
							v-model="newPassword"
						/>
					</div>
					<div class="mb-3">
						<label class="form-label">Повторить пароль</label>
						<input
							type="text"
							class="form-control"
							name="example-text-input"
							placeholder="Повторить пароль"
							v-model="repeatNewPassword"
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
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import { defineComponent } from 'vue'
//import MotorShipsItem from '@/components/MotorShipsItem.vue';

export default defineComponent({
	props: [],
	components: {},
	data: () => ({
		oldPassword: '',
		newPassword: '',
		repeatNewPassword: '',
	}),
	methods: {
		changePassword() {
			if (this.newPassword === this.repeatNewPassword) {
				this.$emit('changePassword', this.newPassword, this.oldPassword)
			} else alert('Новые пароли не совпадают')
			this.refreshInputs()
		},
		refreshInputs() {
			this.oldPassword = ''
			this.newPassword = ''
			this.repeatNewPassword = ''
		},
	},
})
</script>
<style scoped lang="scss"></style>
