<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" v-if="!isAuthen()">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import AuthService from '../store/AuthUser'
import HelloWorld from '@/components/HelloWorld.vue'
export default {
  name: 'Home',
  components: {
    HelloWorld,
  },
  created(){
    console.log(AuthService.getters.isAuthen)
  },
  methods:{
    isAuthen(){
      // console.log(AuthService.getters.isAuthen)
      return AuthService.getters.isAuthen
    }
  }
}
</script>
