<template>
	<div id="successful_alert" class="modal" tabindex="-1">
		<div class="modal-dialog modal-sm" role="document">
			<div class="modal-content">
				<button
					type="button"
					class="btn-close"
					data-bs-dismiss="modal"
					aria-label="Close"
				></button>
				<div class="modal-status bg-success"></div>
				<div class="modal-body text-center py-4">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="icon mb-2 text-green icon-lg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						stroke-width="2"
						stroke="currentColor"
						fill="none"
						stroke-linecap="round"
						stroke-linejoin="round"
					>
						<path stroke="none" d="M0 0h24v24H0z" fill="none" />
						<circle cx="12" cy="12" r="9" />
						<path d="M9 12l2 2l4 -4" />
					</svg>
					<h3>{{ title }}</h3>
				</div>
				<div class="modal-footer">
					<div class="w-100">
						<div class="row">
							<div class="col">
								<a href="#" class="btn w-100" data-bs-dismiss="modal"> OK </a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: ['title'],
}
</script>

<style></style>
