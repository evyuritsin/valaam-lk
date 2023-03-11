<template>
	<div class="page-wrapper">
		<div class="container-xl">
			<div class="card">
				<div class="col d-flex flex-column">
					<div
						v-if="!messages.length"
						class="card-body d-flex justify-content-center p-5"
					>
						<h1>Нет входящих сообщений</h1>
					</div>
					<div v-else class="card-body">
						<table class="table mb-3">
							<thead>
								<tr>
									<th>Дата</th>
									<th>Время</th>
									<th>Тема</th>
									<th>Статус</th>
									<th></th>
								</tr>
							</thead>
							<tbody>
								<tr
									v-for="message in shownMessages"
									:key="message.id"
									:class="[message.isNew && 'font-weight-bold']"
								>
									<td>{{ message.date }}</td>
									<td>{{ message.time }}</td>
									<td>{{ message.title }}</td>
									<td>{{ message.isNew ? 'Новое' : 'Закрыто' }}</td>
									<td>
										<router-link :to="`/message/${message.id}`"
											>Подробно</router-link
										>
									</td>
								</tr>
							</tbody>
						</table>
						<Pagination
							:countOfPages="countOfPages"
							label="messages-pagination"
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

<script>
import Pagination from '@/components/Pagination.vue'

export default {
	components: {
		Pagination,
	},
	data: () => ({
		selectPage: 1,
	}),
	computed: {
		messages() {
			return this.$store.getters['getMessages']
		},
		countOfPages() {
			return Math.floor(this.messages.length / 5)
		},
		shownMessages() {
			const start = this.selectPage * 5 - 5,
				end = start + 5
			return this.messages.slice(start, end)
		},
	},
	methods: {
		clickToPagination(page) {
			this.selectPage = page
		},
		prevPage() {
			this.selectPage = 1
		},
		nextPage() {
			this.selectPage = this.countOfPages
		},
	},
}
</script>

<style>
.font-weight-bold {
	font-weight: 700;
}
</style>
