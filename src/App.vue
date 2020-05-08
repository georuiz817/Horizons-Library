<template>
  <div id="app">
    <NavPage/>
    <router-view></router-view>
    <FooterPage/>
  </div>
</template>

<script>
import NavPage from './components/NavPage.vue'
import FooterPage from './components/FooterPage.vue'

export default {
  name: 'App',
  components: {
    NavPage,
    FooterPage,
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
