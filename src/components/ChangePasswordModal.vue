<template>
<div id="ChangePasswordModal" class="modal" tabindex="-1">
  <div class="modal-dialog modal-lg" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Новый пароль</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <div class="mb-3">
          <label class="form-label">Старый пароль</label>
          <input type="text" class="form-control" name="example-text-input" placeholder="Старый пароль">
        </div>
        <div class="mb-3">
          <label class="form-label">Новый пароль</label>
          <input type="text" class="form-control" name="example-text-input" placeholder="Новый пароль">
        </div>
        <div class="mb-3">
          <label class="form-label">Повторить пароль</label>
          <input type="text" class="form-control" name="example-text-input" placeholder="Повторить пароль">
        </div>                
      </div>
      <div class="modal-footer">
        <a href="#" class="btn btn-link link-secondary" data-bs-dismiss="modal">Отмена</a>
        <a href="#" class="btn btn-primary ms-auto" data-bs-dismiss="modal">Изменить пароль</a>
      </div>
    </div>
  </div>
</div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
//import MotorShipsItem from '@/components/MotorShipsItem.vue'; 

export default {
  props: [

  ],
  components: {
    
  },
  data: () => ({
    
  }),
  methods: {

  },
}
</script>
<style scoped lang="scss">

</style>