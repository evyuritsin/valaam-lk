<template>
  <NavBar/>
  <!--nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav-->
  <router-view/>
</template>
<script>
  import { Options, Vue } from 'vue-class-component';
  import NavBar from '@/components/NavBar.vue';

  export default {
    props: [

    ],
    components: {
      NavBar,
    },
    data: () => ({
      
    }),
    methods: {

    },
  }
</script>
<style lang="scss">

</style>
