<template>
  <div class="page-wrapper">
    <div class="container-xl">
      <div class="card">
        <div class="row g-0">
          <div class="col d-flex flex-column">
            <div class="card-body">
              <h2 class="mb-4">Профиль</h2>
              <h3 class="card-title mt-4">Персональные данные</h3>
              <div class="row g-4">
                <div class="col-md">
                  <div class="form-label">Фамилия</div>
                  <input type="text" class="form-control" value="Иванов">
                </div>
                <div class="col-md">
                  <div class="form-label">Имя</div>
                  <input type="text" class="form-control" value="Иван">
                </div>
                <div class="col-md">
                  <div class="form-label">Отчество</div>
                  <input type="text" class="form-control" value="Иванович">
                </div>
                <div class="col-md">
                  <div class="form-label">Пароль</div>
                  <button class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#ChangePasswordModal">Сменить</Button>
                </div>                  
              </div>
              <h3 class="card-title mt-4">Электронная почта</h3>
              <div>
                <div class="row g-1">
                  <div class="col-auto">
                    <input type="text" class="form-control w-auto" value="">
                  </div>
                </div>
              </div>
              <h3 class="card-title mt-4">Телефон</h3>
              <TelefonItem/>
              <TelefonItem/>               
            </div>
            <div class="card-footer bg-transparent mt-auto">
              <div class="btn-list justify-content-end">
                <a href="#" class="btn">Отменить</a>
                <a href="#" class="btn btn-primary">Сохранить</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <ChangePasswordModal/>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import TelefonItem from '@/components/TelefonItem.vue';
import ChangePasswordModal from '@/components/ChangePasswordModal.vue';

export default {
  props: [

  ],
  components: {
    TelefonItem,
    ChangePasswordModal,
  },
  data: () => ({
    modalName: 'ChangePasswordModal',
  }),
  methods: {

  },
}
</script>
