<template>
	<div class="border alert-custom p-3">
		<h3 class="mb-3">{{ title }}</h3>
		<button
			class="btn btn-primary w-25 mx-auto d-block"
			@click="$emit('confirm')"
		>
			{{ btnSpan }}
		</button>
	</div>
</template>

<script lang="ts">
export default {
	props: ['title', 'btnSpan'],
}
</script>

<style></style>
