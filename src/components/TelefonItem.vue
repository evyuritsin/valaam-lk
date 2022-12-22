<template>
	<div>
		<div class="row g-2">
			<div class="col-auto">
				<input
					type="text"
					class="form-control w-auto"
					:value="modelValue"
					@input="$emit('update:modelValue', $event.target.value)"
				/>
			</div>
			<div class="col-auto">
				<button class="btn" @click="$emit('deleteTelefon', telefon.id)">
					-
				</button>
			</div>
		</div>
	</div>
	<br />
</template>

<script>
//import MotorShipsItem from '@/components/MotorShipsItem.vue';

export default {
	props: ['telefon', 'modelValue'],
	components: {},
	data: () => ({}),
	methods: {},
}
</script>
<style scoped lang="scss"></style>
