<template>
  <div>
    <div class="row g-2">
      <div class="col-auto">
        <input 
          :id="key"
          type="text" 
          class="form-control w-auto" 
          :value="value"
        >
      </div>
      <div class="col-auto">
        <button 
          class="btn"
          @click="add"
        >+</Button>
      </div>
    </div>    
  </div>
  <br>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
//import MotorShipsItem from '@/components/MotorShipsItem.vue'; 

export default {
  props: [
    'value'
  ],
  components: {
    
  },
  data: () => ({
    
  }),
  methods: {
    add: function () {
      console.log('111');
    },

  },
}
</script>
<style scoped lang="scss">

</style>
