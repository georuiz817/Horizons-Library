import Vue from 'vue';
import App from './App.vue';
import axios from 'axios';
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import VueRouter from 'vue-router';
import HomePage from './components/HomePage.vue';
import FishIndex from './components/FishComps/FishIndex.vue';
import FishShow from './components/FishComps/FishShow.vue';
import VillagerIndex from './components/VillagerComps/VillagerIndex.vue';

Vue.use(VueRouter);
Vue.use(BootstrapVue);
Vue.prototype.$http = axios;
Vue.config.productionTip = false

const routes = [
  { path: '/', component: HomePage },
  { path: '/fish', component: FishIndex},
  { path: '/currentFish/:id', component: FishShow},
  {path: '/villagers', component: VillagerIndex}
]

const router = new VueRouter({
  routes, // short for `routes: routes`
  mode: 'history' //removed # 
})

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
