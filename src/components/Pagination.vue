<template>
	<nav :aria-label="label">
		<ul
			v-if="countOfPages <= 5 && countOfPages > 1"
			class="pagination d-flex align-items-baseline"
		>
			<li class="page-item">
				<a
					class="page-link"
					href="#"
					aria-label="Previous"
					@click="$emit('prev')"
				>
					<span aria-hidden="true">&laquo;</span>
				</a>
			</li>
			<li
				class="page-item"
				v-for="(link, indx) in [...Array(countOfPages)]"
				:key="indx"
			>
				<a
					class="page-link"
					href="#"
					:class="[indx + 1 == selectPage && 'active']"
					@click="$emit('click-to-pagination', indx + 1)"
					>{{ indx + 1 }}</a
				>
			</li>
			<li class="page-item">
				<a class="page-link" href="#" aria-label="Next" @click="$emit('next')">
					<span aria-hidden="true">&raquo;</span>
				</a>
			</li>
		</ul>
		<ul
			v-else-if="countOfPages > 5"
			class="pagination d-flex align-items-baseline"
		>
			<li class="page-item">
				<a
					class="page-link"
					href="#"
					aria-label="Previous"
					@click="$emit('prev')"
				>
					<span aria-hidden="true">&laquo;</span>
				</a>
			</li>
			<li class="page-item" v-for="(link, indx) in [...Array(4)]" :key="indx">
				<a
					class="page-link"
					href="#"
					:class="[groupOfPage * 3 + indx + 1 == selectPage && 'active']"
					@click="$emit('click-to-pagination', groupOfPage * 3 + indx + 1)"
					v-if="groupOfPage * 3 + indx + 1 < countOfPages"
					>{{ pageNumber(indx) }}</a
				>
			</li>
			<span v-if="allGroupsOfPage !== groupOfPage">...</span>
			<li class="page-item">
				<a
					class="page-link"
					href="#"
					:class="[countOfPages == selectPage && 'active']"
					@click="$emit('click-to-pagination', countOfPages)"
					>{{ countOfPages }}</a
				>
			</li>
			<li class="page-item">
				<a class="page-link" href="#" aria-label="Next" @click="$emit('next')">
					<span aria-hidden="true">&raquo;</span>
				</a>
			</li>
		</ul>
	</nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
	props: ['countOfPages', 'label', 'selectPage'],
	name: 'PaginationItem',
	data: () => ({
		groupOfPage: 0,
		leftPage: 1,
	}),
	computed: {
		rightPage() {
			return this.leftPage + 3
		},
		allGroupsOfPage() {
			return Math.floor(this.countOfPages / 4)
		},
		pageNumber() {
			return (indx: number) => this.groupOfPage * 3 + indx + 1
		},
	},
	watch: {
		selectPage: {
			handler() {
				if (this.selectPage === this.rightPage) {
					this.groupOfPage++
					this.leftPage += 3
				} else if (
					this.selectPage === this.leftPage &&
					this.groupOfPage !== 0
				) {
					this.groupOfPage--
					this.leftPage -= 3
				} else if (this.selectPage === 1) {
					this.groupOfPage = 0
					this.leftPage = 1
				}
			},
			deep: true,
		},
	},
})
</script>

<style scoped>
.active:hover {
	background: #206bc4 !important;
}
</style>
