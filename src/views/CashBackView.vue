<template>
	<div class="page-wrapper">
		<div class="container-xl">
			<div class="card">
				<div class="card-body">
					<div class="row align-items-center mb-3">
						<div class="col-2">
							<label class="form-label">ФИО</label>
						</div>
						<div class="col-3">
							<input type="text" class="form-control" placeholder="Фамилия" />
						</div>
						<div class="col-3">
							<input type="text" class="form-control" placeholder="Имя" />
						</div>
						<div class="col-3">
							<input type="text" class="form-control" placeholder="Отчество" />
						</div>
					</div>
					<div class="row mb-3">
						<div class="col-auto offset-2">
							<div class="form-check">
								<input class="form-check-input" type="checkbox" />
								<label class="form-check-label"> Получатель тот же </label>
							</div>
						</div>
					</div>
					<div class="row align-items-center mb-3">
						<div class="col-2">
							<label class="form-label">Паспортные данные</label>
						</div>
						<div class="col-3">
							<input
								type="text"
								class="form-control"
								placeholder="Серия/номер паспорта"
							/>
						</div>
						<div class="col">
							<input
								type="text"
								class="form-control"
								placeholder="Регистрация"
							/>
						</div>
					</div>
					<div class="row align-items-center mb-3">
						<div class="col-2">
							<label class="form-label">Телефон</label>
						</div>
						<div class="col-3">
							<input type="text" class="form-control" />
						</div>
						<div class="col-2">
							<label class="form-label">E-mail</label>
						</div>
						<div class="col-3">
							<input type="text" class="form-control" />
						</div>
					</div>
					<div class="row align-items-center mb-3">
						<div class="col-2">
							<label class="form-label">Сумма пожертвования</label>
						</div>
						<div class="col-3">
							<input
								type="text"
								class="form-control"
								placeholder=" _____ руб."
							/>
						</div>
					</div>
					<div class="row align-items-center mb-3">
						<div class="col-2">
							<label class="form-label">Номер счета и отделения БИК</label>
						</div>
						<div class="col-3">
							<input type="text" class="form-control" placeholder="20 цифр" />
						</div>
						<div class="col">
							<input
								type="text"
								class="form-control"
								placeholder="Банк получателя / Номер отделения Сбер"
							/>
						</div>
						<div class="col-2">
							<input
								type="text"
								class="form-control"
								placeholder="БИК 9 цифр"
							/>
						</div>
					</div>
					<div class="row align-items-center mb-3">
						<div class="col-2">
							<label class="form-label">Дата прошения</label>
						</div>
						<div class="col-3">
							<input type="text" class="form-control" placeholder="20 цифр" />
						</div>
					</div>
					<div class="row">
						<div class="col-3 ms-auto">
							<button class="btn btn-primary w-100">Отправить</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {}
</script>

<style></style>
