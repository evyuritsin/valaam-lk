<template>
	<tr>
		<td>{{ order.date }}</td>
		<td>{{ order.time }}</td>
		<td>{{ order.title }}</td>
		<td>{{ order.persons }}</td>
		<td>{{ order.amount }}</td>
		<td>{{ order.paymentType }}</td>
		<td>{{ order.status }}</td>
		<td><a v-if="order.qrcode" :href="order.qrcode">Скачать</a></td>
		<td><router-link :to="`/order/${order.id}`">Подробно</router-link></td>
	</tr>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
	props: ['order'],
})
</script>
