import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

//Root
const home = () => import('../views/index.vue');

//Subpages
const ourStory = () => import('../views/our-story.vue');
const testimonials = () => import('../views/testimonials.vue');
const coolingService = () => import('../views/cooling.vue');
const heatingService = () => import('../views/heating.vue');
const maintenance = () => import('../views/maintenance.vue');
const otherServices = () => import('../views/other-services.vue');
const contactUs = () => import('../views/contact-us.vue');

const routes = [
  {
    path: '/',
    name: 'indexLink',
    component: home,
    props: true
  },
  {
    path: '/about-us/our-story',
    name: 'ourStory',
    component: ourStory,
    props: true
  },
  {
    path: '/testimonials',
    name: 'testimonials',
    component: testimonials,
    props: true
  },
  {
    path: '/services/cooling', ///cooling :slug
    name: 'cooling', //Cooling
    component: coolingService,
    props: true
  },
  {
    path: '/services/heating',
    name: 'heating',
    component: heatingService,
    props: true
  },
  {
    path: '/services/maintenance',
    name: 'maintenance',
    component: maintenance,
    props: true
  },
  {
    path: '/services/other-services',
    name: 'otherServices',
    component: otherServices,
    props: true
  },
  {
    path:'/about-us/contact-us',
    name: 'contactUs',
    component: contactUs,
    props: true
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
