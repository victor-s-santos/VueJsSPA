import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Fisicos from './views/fisicos/Fisicos'
import Home from './views/Home'

Vue.config.productionTip = false
Vue.use(VueRouter)
const router = new VueRouter({
  routes: [
    {path: '/fisicos', component: Fisicos},
    {path: '/', component: Home}
  ]
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
