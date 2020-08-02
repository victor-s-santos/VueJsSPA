import Vue from 'vue'
import VueRouter from 'vue-router'
import Fisicos from './views/fisicos/Fisicos'
import FisicoDetalhes from './views/fisicos/FisicoDetalhes'
import Home from './views/Home'

Vue.config.productionTip = false
Vue.use(VueRouter)
export default new VueRouter({
  linkActiveClass: 'active',
  routes: [
    {path: '/fisicos', component: Fisicos, 
    children: 
    [{path: ':id', component: FisicoDetalhes},]},
     
    {path: '/', component: Home}
  ]
})