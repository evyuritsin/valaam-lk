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
								<TableOrder
									v-for="order in shownOrders"
									:key="order.id"
									:order="order"
								/>
							</tbody>
						</table>
						<Pagination
							:countOfPages="countOfPages"
							label="orders-pagination"
							:selectPage="selectPage"
							@click-to-pagination="clickToPagination"
							@prev="prevPage"
							@next="nextPage"
						/>
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
import TableOrder from '@/components/TableOrder.vue'

export default defineComponent({
	props: [],
	components: { Pagination, TableOrder },
	data: () => ({
		selectPage: 1,
		orders: [
			{
				id: 1,
				date: '16.10.22',
				time: '14:14',
				title: 'Осенний Валаам из Сортавала',
				persons: 1,
				amount: 6529,
				paymentType: 'Стандартная',
				status: 'Оплачено',
				qrcode: '#',
				details: '#',
			},
			{
				id: 2,
				date: '29.09.22',
				time: '17:18',
				title: 'Валаамское мгновение из Приозерска',
				persons: 4,
				amount: 26116,
				paymentType: 'Пожертвование',
				status: 'Отменено',
				qrcode: '',
				details: '#',
			},
			{
				id: 3,
				date: '16.10.22',
				time: '14:14',
				title: 'Осенний Валаам из Сортавала',
				persons: 1,
				amount: 6529,
				paymentType: 'Стандартная',
				status: 'Оплачено',
				qrcode: '#',
				details: '#',
			},
			{
				id: 4,
				date: '29.09.22',
				time: '17:18',
				title: 'Валаамское мгновение из Приозерска',
				persons: 4,
				amount: 26116,
				paymentType: 'Пожертвование',
				status: 'Отменено',
				qrcode: '',
				details: '#',
			},
			{
				id: 5,
				date: '16.10.22',
				time: '14:14',
				title: 'Осенний Валаам из Сортавала',
				persons: 1,
				amount: 6529,
				paymentType: 'Стандартная',
				status: 'Оплачено',
				qrcode: '#',
				details: '#',
			},
			{
				id: 6,
				date: '29.09.22',
				time: '17:18',
				title: 'Валаамское мгновение из Приозерска',
				persons: 4,
				amount: 26116,
				paymentType: 'Пожертвование',
				status: 'Отменено',
				qrcode: '',
				details: '#',
			},
			{
				id: 7,
				date: '16.10.22',
				time: '14:14',
				title: 'Осенний Валаам из Сортавала',
				persons: 1,
				amount: 6529,
				paymentType: 'Стандартная',
				status: 'Оплачено',
				qrcode: '#',
				details: '#',
			},
			{
				id: 8,
				date: '29.09.22',
				time: '17:18',
				title: 'Валаамское мгновение из Приозерска',
				persons: 4,
				amount: 26116,
				paymentType: 'Пожертвование',
				status: 'Отменено',
				qrcode: '',
				details: '#',
			},
			{
				id: 9,
				date: '16.10.22',
				time: '14:14',
				title: 'Осенний Валаам из Сортавала',
				persons: 1,
				amount: 6529,
				paymentType: 'Стандартная',
				status: 'Оплачено',
				qrcode: '#',
				details: '#',
			},
			{
				id: 10,
				date: '29.09.22',
				time: '17:18',
				title: 'Валаамское мгновение из Приозерска',
				persons: 4,
				amount: 26116,
				paymentType: 'Пожертвование',
				status: 'Отменено',
				qrcode: '',
				details: '#',
			},
			{
				id: 11,
				date: '16.10.22',
				time: '14:14',
				title: 'Осенний Валаам из Сортавала',
				persons: 1,
				amount: 6529,
				paymentType: 'Стандартная',
				status: 'Оплачено',
				qrcode: '#',
				details: '#',
			},
			{
				id: 12,
				date: '29.09.22',
				time: '17:18',
				title: 'Валаамское мгновение из Приозерска',
				persons: 4,
				amount: 26116,
				paymentType: 'Пожертвование',
				status: 'Отменено',
				qrcode: '',
				details: '#',
			},
			{
				id: 13,
				date: '16.10.22',
				time: '14:14',
				title: 'Осенний Валаам из Сортавала',
				persons: 1,
				amount: 6529,
				paymentType: 'Стандартная',
				status: 'Оплачено',
				qrcode: '#',
				details: '#',
			},
			{
				id: 14,
				date: '29.09.22',
				time: '17:18',
				title: 'Валаамское мгновение из Приозерска',
				persons: 4,
				amount: 26116,
				paymentType: 'Пожертвование',
				status: 'Отменено',
				qrcode: '',
				details: '#',
			},
			{
				id: 15,
				date: '16.10.22',
				time: '14:14',
				title: 'Осенний Валаам из Сортавала',
				persons: 1,
				amount: 6529,
				paymentType: 'Стандартная',
				status: 'Оплачено',
				qrcode: '#',
				details: '#',
			},
			{
				id: 16,
				date: '29.09.22',
				time: '17:18',
				title: 'Валаамское мгновение из Приозерска',
				persons: 4,
				amount: 26116,
				paymentType: 'Пожертвование',
				status: 'Отменено',
				qrcode: '',
				details: '#',
			},
			{
				id: 17,
				date: '16.10.22',
				time: '14:14',
				title: 'Осенний Валаам из Сортавала',
				persons: 1,
				amount: 6529,
				paymentType: 'Стандартная',
				status: 'Оплачено',
				qrcode: '#',
				details: '#',
			},
			{
				id: 18,
				date: '29.09.22',
				time: '17:18',
				title: 'Валаамское мгновение из Приозерска',
				persons: 4,
				amount: 26116,
				paymentType: 'Пожертвование',
				status: 'Отменено',
				qrcode: '',
				details: '#',
			},
			{
				id: 19,
				date: '16.10.22',
				time: '14:14',
				title: 'Осенний Валаам из Сортавала',
				persons: 1,
				amount: 6529,
				paymentType: 'Стандартная',
				status: 'Оплачено',
				qrcode: '#',
				details: '#',
			},
			{
				id: 20,
				date: '29.09.22',
				time: '17:18',
				title: 'Валаамское мгновение из Приозерска',
				persons: 4,
				amount: 26116,
				paymentType: 'Пожертвование',
				status: 'Отменено',
				qrcode: '',
				details: '#',
			},
			{
				id: 21,
				date: '16.10.22',
				time: '14:14',
				title: 'Осенний Валаам из Сортавала',
				persons: 1,
				amount: 6529,
				paymentType: 'Стандартная',
				status: 'Оплачено',
				qrcode: '#',
				details: '#',
			},
			{
				id: 22,
				date: '29.09.22',
				time: '17:18',
				title: 'Валаамское мгновение из Приозерска',
				persons: 4,
				amount: 26116,
				paymentType: 'Пожертвование',
				status: 'Отменено',
				qrcode: '',
				details: '#',
			},
			{
				id: 23,
				date: '16.10.22',
				time: '14:14',
				title: 'Осенний Валаам из Сортавала',
				persons: 1,
				amount: 6529,
				paymentType: 'Стандартная',
				status: 'Оплачено',
				qrcode: '#',
				details: '#',
			},
			{
				id: 24,
				date: '29.09.22',
				time: '17:18',
				title: 'Валаамское мгновение из Приозерска',
				persons: 4,
				amount: 26116,
				paymentType: 'Пожертвование',
				status: 'Отменено',
				qrcode: '',
				details: '#',
			},
			{
				id: 25,
				date: '16.10.22',
				time: '14:14',
				title: 'Осенний Валаам из Сортавала',
				persons: 1,
				amount: 6529,
				paymentType: 'Стандартная',
				status: 'Оплачено',
				qrcode: '#',
				details: '#',
			},
			{
				id: 26,
				date: '29.09.22',
				time: '17:18',
				title: 'Валаамское мгновение из Приозерска',
				persons: 4,
				amount: 26116,
				paymentType: 'Пожертвование',
				status: 'Отменено',
				qrcode: '',
				details: '#',
			},
			{
				id: 27,
				date: '16.10.22',
				time: '14:14',
				title: 'Осенний Валаам из Сортавала',
				persons: 1,
				amount: 6529,
				paymentType: 'Стандартная',
				status: 'Оплачено',
				qrcode: '#',
				details: '#',
			},
			{
				id: 28,
				date: '29.09.22',
				time: '17:18',
				title: 'Валаамское мгновение из Приозерска',
				persons: 4,
				amount: 26116,
				paymentType: 'Пожертвование',
				status: 'Отменено',
				qrcode: '',
				details: '#',
			},
			{
				id: 29,
				date: '16.10.22',
				time: '14:14',
				title: 'Осенний Валаам из Сортавала',
				persons: 1,
				amount: 6529,
				paymentType: 'Стандартная',
				status: 'Оплачено',
				qrcode: '#',
				details: '#',
			},
			{
				id: 30,
				date: '29.09.22',
				time: '17:18',
				title: 'Валаамское мгновение из Приозерска',
				persons: 4,
				amount: 26116,
				paymentType: 'Пожертвование',
				status: 'Отменено',
				qrcode: '',
				details: '#',
			},
			{
				id: 31,
				date: '16.10.22',
				time: '14:14',
				title: 'Осенний Валаам из Сортавала',
				persons: 1,
				amount: 6529,
				paymentType: 'Стандартная',
				status: 'Оплачено',
				qrcode: '#',
				details: '#',
			},
			{
				id: 32,
				date: '29.09.22',
				time: '17:18',
				title: 'Валаамское мгновение из Приозерска',
				persons: 4,
				amount: 26116,
				paymentType: 'Пожертвование',
				status: 'Отменено',
				qrcode: '',
				details: '#',
			},
			{
				id: 33,
				date: '16.10.22',
				time: '14:14',
				title: 'Осенний Валаам из Сортавала',
				persons: 1,
				amount: 6529,
				paymentType: 'Стандартная',
				status: 'Оплачено',
				qrcode: '#',
				details: '#',
			},
			{
				id: 34,
				date: '29.09.22',
				time: '17:18',
				title: 'Валаамское мгновение из Приозерска',
				persons: 4,
				amount: 26116,
				paymentType: 'Пожертвование',
				status: 'Отменено',
				qrcode: '',
				details: '#',
			},
		],
	}),
	methods: {
		clickToPagination(page: number) {
			this.selectPage = page
		},
		prevPage() {
			if (this.selectPage === 1) return
			this.selectPage--
		},
		nextPage() {
			if (this.selectPage === this.countOfPages) return
			this.selectPage++
		},
	},
	computed: {
		countOfPages() {
			return Math.floor(this.orders.length / 5)
		},
		shownOrders() {
			const start = this.selectPage * 5,
				end = start + 5
			return this.orders.slice(start, end)
		},
	},
})
</script>

<style>
.table {
	text-align: center;
}
</style>
