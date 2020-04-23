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
    NavPage
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
