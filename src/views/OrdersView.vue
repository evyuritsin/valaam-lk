<template>
	<div class="page-wrapper">
		<div class="container-xl">
			<div class="card">
				<div class="col d-flex flex-column">
					<div class="card-body">
						<table class="table mb-3">
							<thead>
								<tr>
									<th scope="col">Дата</th>
									<th>Время</th>
									<th>Название программы</th>
									<th>Человек</th>
									<th>Сумма (руб.)</th>
									<th>Тип оплаты</th>
									<th>Статус</th>
									<th>QR-код</th>
									<th></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>16.10.22</td>
									<td>14:14</td>
									<td>Осенний Валаам из Сортавала</td>
									<td>1</td>
									<td>6 529</td>
									<td>Стандартная</td>
									<td>Оплачено</td>
									<td><a href="#">Скачать</a></td>
									<td><a href="#">Подробно</a></td>
								</tr>
								<tr>
									<td>29.09.22</td>
									<td>17:18</td>
									<td>Валаамское мгновение из Приозерска</td>
									<td>4</td>
									<td>26 116</td>
									<td>Пожертвование</td>
									<td>Отменено</td>
									<td></td>
									<td><a href="#">Подробно</a></td>
								</tr>
							</tbody>
						</table>
						<Pagination :countOfPages="5" label="orders-pagination" />
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import { defineComponent } from 'vue'

//import NavBar from '@/components/NavBar.vue';
import Pagination from '@/components/Pagination.vue'

export default defineComponent({
	props: [],
	components: { Pagination },
	data: () => ({}),
	methods: {},
})
</script>

<style>
.table {
	text-align: center;
}
</style>
