import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import('../views/index.vue')
  },
  {
    path: '/our-story',
    name: 'OurStory',
    component: () => import('../views/our-story.vue')
  },
  {
    path: '/cooling',
    name: 'Cooling',
    component: () => import('../views/cooling.vue')
  },
  {
    path: '/heating',
    name: 'Heating',
    component: () => import('../views/heating.vue')
  },
  {
    path: '/maintenance',
    name: 'Maintenance',
    component: () => import('../views/maintenance.vue')
  },
  {
    path: '/other-services',
    name: 'OtherServices',
    component: () => import('../views/other-services.vue')
  },
  {
    path:'/contact-us',
    name: 'ContactUs',
    component: () => import('../views/contact-us.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
