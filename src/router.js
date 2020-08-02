import Vue from 'vue'
import VueRouter from 'vue-router'
import Fisicos from './views/fisicos/Fisicos'
import FisicosHome from './views/fisicos/FisicosHome'
import FisicoDetalhes from './views/fisicos/FisicoDetalhes'
import FisicoEditar from './views/fisicos/FisicoEditar'
import Home from './views/Home'

Vue.config.productionTip = false
Vue.use(VueRouter)
export default new VueRouter({
  linkActiveClass: 'active',
  routes: [
    {path: '/fisicos', component: Fisicos, 
    children: 
    [
        {path: ':id', component: FisicoDetalhes, name: 'fisico'},
        {path: ':id/editar', components:{
            default: FisicoEditar,
            'fisico-detalhes': FisicoDetalhes
        }},
        {path: '', component: FisicosHome}
    ]},
     
    {path: '/', component: Home}
  ]
})