<template>
  <div id="app">
    <div id="nav">
      <router-link to="/home">Home </router-link> 
      <router-link to="/leaderboard">Leaderboard </router-link>
      <router-link to="/reward">Reward </router-link> 
      <router-link to='/wait'>Wait </router-link> 
      <router-link to='/extra'>Extra </router-link> 
      <router-link to='/m'>M </router-link> 
      <router-link to='/s'>S </router-link> 
      <!-- <button @click="click('math')">M</button>
      <button @click="click('sci')">S</button> -->
      <router-link to='/hhhh'>His</router-link>
      <router-link to='/'>Log in </router-link> 
      <router-link to='/register'>Register </router-link> 
      <router-link to='/logout'>Log out </router-link> 
      <router-link to='/ta'>ta </router-link> |
      <router-link to='/re'>re</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
    methods:{
      click(path){
        this.$router.push({name: 'T', params: {path:path}})
      }
    }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
}

#nav {
  padding: 0px;
  margin: 0px;
  margin-top: 20px;

  a {
    font-weight: bold;
    color: white;

    &.router-link-exact-active {
      color: #42b983;
    }
  } 
}
body{
    margin: 0px;
    min-height: 100vh;
    background: radial-gradient(ellipse at bottom,#0c164f,black)
  }
</style>
