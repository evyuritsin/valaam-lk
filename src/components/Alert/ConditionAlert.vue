<template>
	<div class="border alert-custom p-5 mb-2">
		<h3 class="mb-3">{{ title }}</h3>
		<div class="d-flex justify-content-around">
			<button class="btn btn-danger w-25" @click="$emit('cancel')">
				Назад
			</button>
			<button class="btn btn-success w-25" @click="$emit('confirm')">Да</button>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
	props: ['title'],
})
</script>

<style>
.alert-custom {
	max-width: fit-content;
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	background: #ffffff;
}
</style>
