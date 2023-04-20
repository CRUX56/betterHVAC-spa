import Vue from 'vue'
import VueRouter from 'vue-router'

import ServiceOne from '@/components/dropdown_folder/service-1'
import ServiceTwo from '@/components/dropdown_folder/service-2'
import ServiceThree from '@/components/dropdown_folder/service-3'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import('../views/index.vue')
  },
  {
    path:'/services/service-1',
    name: 'ServiceOne',
    component: ServiceOne
  },
  {
    path: '/services/service-2',
    name: 'ServiceTwo',
    component: ServiceTwo
  },
  {
    path: '/services/service-3',
    name: 'ServiceThree',
    component: ServiceThree
  }
  /*{
    path: '/index-1',
    name: 'Index-1',
    component: () => import('../views/index1.vue')
  },
  {
    path: '/index-2',
    name: 'Index-2',
    component: () => import('../views/index2.vue')
  },
  {
    path: '/index-3',
    name: 'Index-3',
    component: () => import('../views/index3.vue')
  },
  {
    path: '/index-4',
    name: 'Index-4',
    component: () => import('../views/index4.vue')
  },
  {
    path: '/index-5',
    name: 'Index-5',
    component: () => import('../views/index5.vue')
  },
  {
    path: '/index-6',
    name: 'Index-6',
    component: () => import('../views/index6.vue')
  }*/
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
