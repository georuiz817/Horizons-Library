import Vue from 'vue';
import App from './App.vue';
import axios from 'axios';
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import VueRouter from 'vue-router';
import HomePage from './components/StaticComps/HomePage.vue';
import FishIndex from './components/FishComps/FishIndex.vue';
import FishShow from './components/FishComps/FishShow.vue';
import VillagerIndex from './components/VillagerComps/VillagerIndex.vue';
import VillagerShow from './components/VillagerComps/VillagerShow.vue';
import AboutPage from './components/StaticComps/AboutPage.vue';
import BugIndex from './components/Bugcomps/BugIndex.vue';
import FossilIndex from './components/FossilComps/FossilIndex.vue';
import BugShow from './components/Bugcomps/BugShow.vue';
import FossilShow from './components/FossilComps/FossilShow.vue';
import ContactPage from './components/StaticComps/ContactPage.vue'

Vue.use(VueRouter);
Vue.use(BootstrapVue);
Vue.prototype.$http = axios;
Vue.config.productionTip = false

const routes = [
  { path: '/', component: HomePage },
  { path: '/fish', component: FishIndex},
  { path: '/currentFish/:id', component: FishShow},
  { path: '/villagers', component: VillagerIndex},
  { path: '/currentVillager/:id', component: VillagerShow},
  { path: '/bugs', component: BugIndex},
  { path: '/fossils', component: FossilIndex},
  { path: '/currentFossil/:file-name', component: FossilShow},
  { path: '/currentBug/:id', component: BugShow},
  { path: '/about', component: AboutPage},
  { path: '/contact', component: ContactPage},
]

const router = new VueRouter({
  routes, // short for `routes: routes`
})

Vue.mixin({
  data: function(){
    return{
      loading: false, //had loading in each seperate container, now in here to adhere to DRY. Trying to get by without using Vuex.z
    }
  },
  filters:{
      capitalize: function(value){
          return  value.charAt(0).toUpperCase() + value.slice(1)
      },
    }
  })

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
