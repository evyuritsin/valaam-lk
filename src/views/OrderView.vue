<template>
	<div class="page-wrapper">
		<div class="container-xl">
			<div class="card">
				<div class="col d-flex flex-column">
					<div class="card-body">
						<h2>Заявка № 420</h2>
						<h2>Валаамское мгновение из Приозерска</h2>
						<div class="row align-items-center mb-2">
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
						</div>
						<div class="row mb-3">
							<div class="col-2">
								<span>Рейс туда</span>
							</div>
							<div class="col-3">
								<h4>28.07.23 Приозерск > Валаам 11:00 метеор</h4>
							</div>
						</div>
						<div class="row mb-3">
							<div class="col-2">
								<span>Рейс обратно</span>
							</div>
							<div class="col-3">
								<h4>30.07.23 Валаам > Приозерск 12:00 метеор</h4>
							</div>
						</div>
						<div class="row mb-4">
							<div class="col-2">
								<span>Размещение</span>
							</div>
							<div class="col-2">
								<h4>Дом паломника "Валаам"</h4>
							</div>
							<div class="col-2">
								<h4>Стандартные номера</h4>
							</div>
							<div class="col-1">
								<h4>1 номер</h4>
							</div>
							<div class="col-2">
								<h4>28.07.23 - 30.07.23</h4>
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
								<input type="text" class="form-control" />
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
								<input type="text" class="form-control" />
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
								<input type="text" class="form-control" />
							</div>
							<div class="col-2">
								<select class="form-select">
									<option v-for="item in eatOptions" :key="item.id">
										{{ item.name }}
									</option>
								</select>
							</div>
						</div>
						<h3>Питание</h3>
						<h4>
							<a href="#" class="text-decoration-underline">Никольский скит</a>
						</h4>
						<h4 class="mb-5">
							<a href="#" class="text-decoration-underline"
								>Скиты Всех Святых и Смоленский</a
							>
						</h4>
						<h3>Данные туристов</h3>
						<TouristData />
						<TouristData />
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
									<td>24000</td>
								</tr>
							</tbody>
						</table>
						<h3>Документы для скачивания:</h3>
						<div class="row mb-3">
							<div class="col-6 d-flex flex-column align-items-start">
								<div class="d-flex gap-2 align-items-center">
									<img src="../assets/icons/file.svg" alt="File Icon" />
									<p class="text-decoration-underline">Билет.pdf</p>
								</div>
							</div>
							<div class="col-2 d-flex flex-column align-items-start">
								<h4>QR-код</h4>
								<img
									src="../assets/img/qr-code.svg"
									alt="QR-code"
									class="w-100 mb-2"
								/>
								<button class="btn w-100">Скачать</button>
							</div>
						</div>
						<div class="row align-items-center mb-3">
							<div class="col-2">
								<button class="btn btn-primary">Назад</button>
							</div>
							<div
								class="col-2 offset-2 cursor-pointer"
								@click="cancelTheOrder"
							>
								<img src="../assets/icons/close.svg" alt="Close Icon" />
								<span class="fs-3 text-decoration-underline"
									>Отменить заявку</span
								>
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

//import NavBar from '@/components/NavBar.vue';
import TouristData from '@/components/TouristData.vue'
import ConfirmAlert from '@/components/Alert/ConfirmAlert.vue'
import ConditionAlert from '@/components/Alert/ConditionAlert.vue'

export default defineComponent({
	props: [],
	components: { TouristData, ConfirmAlert, ConditionAlert },
	data: () => ({
		eatOptions: [
			{ id: 1, name: 'Стандартное' },
			{ id: 2, name: 'Постное' },
			{ id: 3, name: 'Детское' },
		],
		alerts: {
			isCondition: false as boolean,
			isConfirm: false as boolean,
		},
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
		},
	},
})
</script>

<style>
.table {
	text-align: center;
}
</style>
