<template>
	<div class="page-wrapper">
		<div class="container-xl">
			<div class="card">
				<div class="col d-flex flex-column">
					<div class="card-body" v-if="loaded">
						<h2>Заявка № {{ order.id }}</h2>
						<h2 v-if="order.tour">{{ order.tour.pagetitle }}</h2>
						<h2 v-else>Конструктор</h2>
						<!-- <div class="row align-items-center mb-2">
							<div class="col-2">
								<span>Автобус</span>
							</div>
							<div class="col-3">
								<p>28.07.23 8:00 Санкт-Петербург - причал</p>
							</div>
							<div class="col-1">
								<label class="form-label">№ автобуса</label>
							</div>
							<div class="col-2">
								<input type="text" class="form-control" />
							</div>
							<div class="col-1">
								<label class="form-label">№ рейса</label>
							</div>
							<div class="col-2">
								<input type="text" class="form-control" />
							</div>
						</div>
						<div class="row align-items-center">
							<div class="col-2">
								<span>Автобус</span>
							</div>
							<div class="col-3">
								<p>30.07.23 14:00 причал - Санкт-Петербург</p>
							</div>
							<div class="col-1">
								<label class="form-label">№ автобуса</label>
							</div>
							<div class="col-2">
								<input type="text" class="form-control" />
							</div>
							<div class="col-1">
								<label class="form-label">№ рейса</label>
							</div>
							<div class="col-2">
								<input type="text" class="form-control" />
							</div>
						</div>
						<div class="row mb-3">
							<div class="col-2">
								<span>Сопровождающий</span>
							</div>
							<div class="col-3">
								<h4>Попова Евгения Викторовна</h4>
							</div>
						</div>
						<div class="row mb-3">
							<div class="offset-1 col-1">
								<span>телефон</span>
							</div>
							<div class="col-2">
								<h4>89012345678</h4>
							</div>
						</div> -->
						<div class="row mb-3">
							<div class="col-2">
								<span>Рейс туда</span>
							</div>
							<div class="col-3">
								<h4>
									{{}}
									{{}}
								</h4>
							</div>
						</div>
						<div class="row mb-3">
							<div class="col-2">
								<span>Рейс обратно</span>
							</div>
							<div class="col-3">
								<h4>
									{{}}
									{{}}
								</h4>
							</div>
						</div>
						<h4>Размещение</h4>
						<div class="row mb-4" v-for="room in order.rooms" :key="room.id">
							<div class="col-2">
								<span>{{ room.room.hotel.pagetitle }}</span>
							</div>
							<div class="col-2">
								<span>{{ room.room.pagetitle }}</span>
							</div>
							<div class="col-1">
								<span>1 номер</span>
							</div>
							<div class="col-2">
								<span>{{ room.date_from }} - {{ room.date_to }}</span>
							</div>
						</div>
						<div class="row mb-3">
							<div class="col-auto d-flex align-items-center">
								<img
									src="../assets/icons/meat.svg"
									alt="Eat Icon"
									height="40"
									class="me-2"
								/>
								<h3 class="pt-2">Питание</h3>
							</div>
						</div>
						<div class="row align-items-center mb-2">
							<div class="col-1">
								<label class="form-label">Завтраков</label>
							</div>
							<div class="col-2">
								<input
									type="text"
									class="form-control"
									:value="order.tourists.length"
								/>
							</div>
							<div class="col-2">
								<select class="form-select">
									<option v-for="item in eatOptions" :key="item.id">
										{{ item.name }}
									</option>
								</select>
							</div>
						</div>
						<div class="row align-items-center mb-2">
							<div class="col-1">
								<label class="form-label">Обедов</label>
							</div>
							<div class="col-2">
								<input
									type="text"
									class="form-control"
									:value="order.tourists.length"
								/>
							</div>
							<div class="col-2">
								<select class="form-select">
									<option v-for="item in eatOptions" :key="item.id">
										{{ item.name }}
									</option>
								</select>
							</div>
						</div>
						<div class="row align-items-center mb-5">
							<div class="col-1">
								<label class="form-label">Ужинов</label>
							</div>
							<div class="col-2">
								<input
									type="text"
									class="form-control"
									:value="order.tourists.length"
								/>
							</div>
							<div class="col-2">
								<select class="form-select">
									<option v-for="item in eatOptions" :key="item.id">
										{{ item.name }}
									</option>
								</select>
							</div>
						</div>
						<h3>Экскурсии</h3>
						<h4>
							<a href="#" class="text-decoration-underline">Никольский скит</a>
						</h4>
						<h4 class="mb-5">
							<a href="#" class="text-decoration-underline"
								>Скиты Всех Святых и Смоленский</a
							>
						</h4>
						<h3>Данные туристов</h3>
						<TouristData
							v-for="tourist in order.tourists"
							:key="tourist.id"
							:tourist="tourist"
						/>
						<div class="row mb-3">
							<div class="col-2">
								<button class="btn btn-primary">Сохранить</button>
							</div>
						</div>
						<h3>Взаимотошения по заявке:</h3>
						<table class="table table-bordered mb-3">
							<thead>
								<tr>
									<th scope="col">Операция</th>
									<th scope="col">Дата</th>
									<th scope="col">Сумма + -</th>
									<th scope="col">Итог</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>Возврат</td>
									<td>30.09.22</td>
									<td>12000</td>
									<td>12000</td>
								</tr>
								<tr>
									<td>Оплата</td>
									<td>29.09.22</td>
									<td>24000</td>
									<td>{{ order.amount }}</td>
								</tr>
							</tbody>
						</table>
						<h3>Документы для скачивания:</h3>
						<div class="row mb-3">
							<div class="col-6 d-flex flex-column align-items-start">
								<div class="d-flex gap-2 align-items-center">
									<img src="../assets/icons/file.svg" alt="File Icon" />
									<a :href="`/api/ticket/${order.id}`">Билет.pdf</a>
								</div>
							</div>
							<div class="col-2 d-flex flex-column align-items-start">
								<h4>QR-код</h4>
								<img :src="order.qr" alt="QR code" />
							</div>
						</div>
						<div class="row align-items-center mb-3">
							<div class="col-auto">
								<button class="btn btn-primary">Назад</button>
							</div>
							<div class="col-2 cursor-pointer" @click="cancelTheOrder">
								<button class="btn btn-danger">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										class="icon icon-tabler icon-tabler-x"
										width="24"
										height="24"
										viewBox="0 0 24 24"
										stroke-width="2"
										stroke="currentColor"
										fill="none"
										stroke-linecap="round"
										stroke-linejoin="round"
									>
										<path stroke="none" d="M0 0h24v24H0z" fill="none" />
										<line x1="18" y1="6" x2="6" y2="18" />
										<line x1="6" y1="6" x2="18" y2="18" />
									</svg>
									<span> Отменить заявку </span>
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<ConditionAlert
		v-if="alerts.isCondition"
		:title="'Вы уверены, что хотите отменить заявку?'"
		@cancel="closeIsConfirm"
		@confirm="confirmAlert"
	/>
	<ConfirmAlert
		:title="'Заявка отменена, оформите прошение на возврат средств.'"
		:btnSpan="'Перейти'"
		@confirm="closeIsConfirm"
		v-if="alerts.isConfirm"
	/>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import { defineComponent } from 'vue'
import OrderInterface from '../types/order'
import store from '@/store'

import qrcode from 'qrcode-generator'

//import NavBar from '@/components/NavBar.vue';
import TouristData from '@/components/TouristData.vue'
import ConfirmAlert from '@/components/Alert/ConfirmAlert.vue'
import ConditionAlert from '@/components/Alert/ConditionAlert.vue'

export default defineComponent({
	props: [],
	components: { TouristData, ConfirmAlert, ConditionAlert },
	data: () => ({
		order: {} as any,
		eatOptions: [
			{ id: 1, name: 'Стандартное' },
			{ id: 2, name: 'Постное' },
			{ id: 3, name: 'Детское' },
		],
		alerts: {
			isCondition: false as boolean,
			isConfirm: false as boolean,
		},
		loaded: false as boolean,
	}),
	methods: {
		cancelTheOrder() {
			this.alerts.isCondition = true
		},
		confirmAlert() {
			this.alerts.isCondition = false
			this.alerts.isConfirm = true
		},
		closeIsConfirm() {
			this.alerts.isCondition = false
			this.alerts.isConfirm = false
			this.$router.push('/orders')
		},
	},
	computed: {},
	async mounted() {
		const orderId = this.$route.params.id
		const token = localStorage.getItem('token')
		const headers = new Headers({
			Authorization: 'Bearer ' + token,
			'Content-Type': 'application/x-www-form-urlencoded',
			'Access-Control-Allow-Origin': '*',
		})
		const response = await fetch(
			`http://valaamskiy-polomnik.directpr.beget.tech/api/order/${orderId}`,
			{
				headers,
			}
		)
			.then(response => response.json())
			.then(({ data }) => data)
		this.order = { ...response }
		console.log(this.order)
		this.loaded = true
	},
})
</script>

<style>
.table {
	text-align: center;
}

#qr-code {
	height: 150px;
}

#qr-code img {
	height: 100%;
	width: 100%;
}
</style>
