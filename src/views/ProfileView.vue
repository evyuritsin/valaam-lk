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
										v-model="profile.lastName"
									/>
								</div>
								<div class="col-md">
									<div class="form-label">Имя</div>
									<input
										type="text"
										class="form-control"
										v-model="profile.firstName"
									/>
								</div>
								<div class="col-md">
									<div class="form-label">Отчество</div>
									<input
										type="text"
										class="form-control"
										v-model="profile.middleName"
									/>
								</div>
								<div class="col-md">
									<div class="form-label">Пароль</div>
									<button
										class="btn btn-danger"
										data-bs-toggle="modal"
										data-bs-target="#ChangePasswordModal"
									>
										Сменить
									</button>
								</div>
							</div>
							<h3 class="card-title mt-4">Электронная почта</h3>
							<div>
								<div class="row g-1">
									<div class="col-auto">
										<input
											type="text"
											class="form-control w-auto"
											v-model="profile.email"
										/>
									</div>
								</div>
							</div>
							<h3 class="card-title mt-4">
								Телефон
								<span>
									<button class="btn" @click="addTelefon">+</button>
								</span>
							</h3>
							<TelefonItem
								v-for="telefon in profile.telefons"
								:key="telefon.id"
								:telefon="telefon"
								@deleteTelefon="deleteTelefon"
								v-model="telefon.value"
							/>
						</div>
						<div class="card-footer bg-transparent mt-auto">
							<div class="btn-list justify-content-end">
								<a href="#" class="btn">Отменить</a>
								<a href="#" class="btn btn-primary">Сохранить</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<ChangePasswordModal @changePassword="changePassword" />
</template>

<script>
import ChangePasswordModal from '@/components/ChangePasswordModal.vue'
import TelefonItem from '@/components/TelefonItem.vue'
export default {
	props: [],
	components: {
		TelefonItem,
		ChangePasswordModal,
	},
	data: () => ({
		profile: {
			firstName: 'Иванов',
			lastName: 'Иван',
			middleName: 'Иванович',
			password: '12345',
			email: 'ivanov@gmail.com',
			telefons: [
				{ id: 1, value: '+7 (918) 1111 11 11' },
				{ id: 2, value: '+7 (918) 2222 22 22' },
			],
		},
	}),
	methods: {
		addTelefon() {
			this.profile.telefons.push({ id: Date.now(), value: '' })
		},
		deleteTelefon(id) {
			this.profile.telefons = this.telefons.filter(tel => tel.id !== id)
		},
		changePassword(newPassword, oldPassword) {
			if (oldPassword === this.profile.password) {
				this.profile.password = newPassword
				alert('Пароль успешно изменен')
			} else {
				alert('Старый пароль не подходит')
			}
		},
	},
}
</script>
