import Vue from 'vue'
import VueRouter from 'vue-router'

const coolingService = () => import('../views/cooling.vue');
const heatingService = () => import('../views/heating.vue');

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import('../views/index.vue'),
    props: true
  },
  {
    path: '/our-story',
    name: 'OurStory',
    component: () => import('../views/our-story.vue'),
    props: true
  },
  {
    path: '/services/cooling', ///cooling :slug
    name: 'Cooling', //Cooling
    component: coolingService,
    props: true
    //component: () => import('../views/cooling.vue'),
    //props: true
    
    //props: path => ({ link: () => import('../views/cooling.vue')})
  },
  {
    path: '/services/heating',
    name: 'Heating',
    component: heatingService,
    props: true
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
