import Vue from 'vue'
import VueRouter from 'vue-router'
import WeiXin from '../views/WeiXin.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'WeiXin',
    component: WeiXin
  },{
    path: '/List/:id?',
    name: 'List',
    component: ()=>import('../views/List.vue')
  },{
    path: '/detail/:id',
    name: 'Detail',
    component: ()=>import ('../views/Detail.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
