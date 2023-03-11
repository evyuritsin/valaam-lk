<template>
	<tr>
		<td>{{ order.id }}</td>
		<td>{{ date }}</td>
		<td>{{ time }}</td>
		<td v-if="order.tour">{{ order.tour.pagetitle }}</td>
		<td v-else>Конструктор</td>
		<td>{{ order.tourists_count }}</td>
		<td>{{ order.total_amount }}</td>
		<td>{{ order.payment_type === '1' ? 'Cтандартная' : 'Оплата картой' }}</td>
		<td>{{ status }}</td>
		<td><router-link :to="`/order/${order.id}`">Подробно</router-link></td>
	</tr>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
	props: ['order'],
	computed: {
		date() {
			return new Date(this.order.created_at * 1000).toLocaleDateString()
		},
		time() {
			return new Date(this.order.created_at * 1000).toLocaleTimeString()
		},
		status() {
			let result = null
			if (this.order.status_id === '1') {
				return (result = 'Черновик')
			}
			if (this.order.status_id === '2') {
				return (result = 'Новая')
			}
			if (this.order.status_id === '3') {
				return (result = 'Обработка')
			}
			if (this.order.status_id === '4') {
				return (result = 'Подтверждена')
			}
			if (this.order.status_id === '5') {
				return (result = 'Ожидает оплаты')
			}
			if (this.order.status_id === '6') {
				return (result = 'Частичная оплата')
			}
			if (this.order.status_id === '7') {
				return (result = 'Полная оплата')
			}
			if (this.order.status_id === '8') {
				return (result = 'Завершена')
			}
			if (this.order.status_id === '9') {
				return (result = 'Отменена')
			}
			if (this.order.status_id === '10') {
				return (result = 'Архивная')
			}
			return result
		},
	},
})
</script>
