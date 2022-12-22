<template>
	<div class="page-wrapper">
		<div class="container-xl">
			<div class="card">
				<div class="col d-flex flex-column">
					<div
						v-if="!orders.length"
						class="card-body d-flex justify-content-center p-5"
					>
						<h1>Еще не создано ни одного заказа</h1>
					</div>
					<div v-else class="card-body">
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
import OrderInterface from '../types/order'
import store from '@/store'

//import NavBar from '@/components/NavBar.vue';
import Pagination from '@/components/Pagination.vue'
import TableOrder from '@/components/TableOrder.vue'

export default defineComponent({
	props: [],
	components: { Pagination, TableOrder },
	data: () => ({
		selectPage: 1,
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
		orders(): OrderInterface[] {
			return store.getters['getOrders']
		},
		countOfPages(): number {
			return Math.floor(this.orders.length / 5)
		},
		shownOrders(): OrderInterface[] {
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
