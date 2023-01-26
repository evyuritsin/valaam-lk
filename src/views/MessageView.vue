<template>
	<div class="page-wrapper">
		<div class="container-xl">
			<div class="card">
				<div class="col d-flex flex-column">
					<div class="card-body">
						<div class="row mb-2">
							<div class="col-auto">
								<span>{{ message.date }}</span>
							</div>
							<div class="col-auto">
								<span>{{ message.time }}</span>
							</div>
						</div>
						<div class="row">
							<div class="col-auto">
								<label class="form-label">Тема</label>
							</div>
							<div class="col-auto">
								<span>{{ message.title }}</span>
							</div>
						</div>
						<p class="mb-3">{{ message.message }}</p>
						<router-link to="/messages" class="btn btn-primary"
							>Назад</router-link
						>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	computed: {
		message() {
			return this.$store.getters.getMessageById(Number(this.$route.params.id))
		},
	},
}
</script>

<style></style>
