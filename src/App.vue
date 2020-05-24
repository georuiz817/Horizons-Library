<template>
  <div id="app">
    <NavPage/>
    <router-view></router-view>
  </div>
</template>

<script>
import NavPage from './components/NavPage.vue'


export default {
  name: 'App',
  components: {
    NavPage,
  }
}
</script>

<style>
body{
  background-image: url('./assets/animal-crossing-wp.jpg');
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
