<template>
	<nav :aria-label="label">
		<ul class="pagination d-flex align-items-baseline">
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
	</nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
	props: ['countOfPages', 'label', 'selectPage'],
	name: 'PaginationItem',
})
</script>

<style scoped>
.active:hover {
	background: #206bc4 !important;
}
</style>
