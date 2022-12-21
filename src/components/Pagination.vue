<template>
	<nav :aria-label="label">
		<ul class="pagination d-flex align-items-baseline">
			<li class="page-item">
				<a class="page-link" href="#" aria-label="Previous">
					<span aria-hidden="true">&laquo;</span>
				</a>
			</li>
			<li class="page-item" v-for="(link, indx) in [...Array(3)]" :key="indx">
				<a class="page-link" href="#" :class="[indx == 0 && 'active']">{{
					indx + 1
				}}</a>
			</li>
			<span v-if="linkMoreThanFive">...</span>
			<li class="page-item">
				<a href="#" class="page-link">{{ countOfPages }}</a>
			</li>
			<li class="page-item">
				<a class="page-link" href="#" aria-label="Next">
					<span aria-hidden="true">&raquo;</span>
				</a>
			</li>
		</ul>
	</nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
	props: ['countOfPages', 'label'],
	name: 'PaginationItem',
	computed: {
		linkMoreThanFive() {
			return this.countOfPages >= 5
		},
	},
})
</script>

<style scoped>
.active:hover {
	background: #206bc4 !important;
}
</style>
