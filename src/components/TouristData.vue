<template>
	<div class="row align-items-center mb-2">
		<div class="col-1">
			<label class="form-label mb-2">Фамилия* </label>
			<input type="text" class="form-control" :value="tourist.lastname" />
		</div>
		<div class="col-1">
			<label class="form-label mb-2">Имя* </label>
			<input type="text" class="form-control" :value="tourist.firstname" />
		</div>
		<div class="col-1">
			<label class="form-label mb-2">Отчество* </label>
			<input type="text" class="form-control" :value="tourist.patronymic" />
		</div>
		<div class="col-2">
			<label class="form-label mb-2">Дата рождения </label>
			<flatPickr
				v-model="date"
				class="form-control"
				:value="tourist.birth_date"
			/>
		</div>
		<div class="col-auto">
			<label class="form-label mb-2">Документ* </label>
			<input type="text" class="form-control" :value="tourist.document" />
		</div>
		<div class="col-auto">
			<label class="form-label mb-2">Телефон </label>
			<input
				type="tel"
				class="form-control"
				v-mask="'+7 (###) ### ## ##'"
				:value="tourist.phone"
			/>
		</div>
		<div class="col">
			<div class="form-label mb-1">Статус</div>
			<select class="form-select">
				<option v-for="status in touristStatuses" :key="status.id">
					{{ status.name }}
				</option>
			</select>
		</div>
		<div class="col">
			<div class="form-label mb-1">Пол</div>
			<select
				class="form-select"
				:value="tourist.gender === 'male' ? 'мужской' : 'женский'"
			>
				<option>мужской</option>
				<option>женский</option>
			</select>
		</div>
	</div>
</template>

<script lang="ts">
import flatPickr from 'vue-flatpickr-component'

export default {
	data: () => ({
		touristStatuses: [
			{ id: 1, name: 'взрослый' },
			{ id: 2, name: 'ребенок до 12 лет' },
			{ id: 3, name: 'ребенок до 6 лет' },
			{ id: 4, name: 'пенсионер' },
		],
		date: null,
	}),
	components: {
		flatPickr,
	},
	props: ['tourist'],
}
</script>

<style></style>
