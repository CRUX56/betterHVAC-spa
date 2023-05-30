import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'

import { BootstrapVue } from 'bootstrap-vue'
import VueYoutube from 'vue-youtube'

import Scrollspy from 'vue2-scrollspy';
var VueScrollTo = require('vue-scrollto');

import VueTinySlider from "vue-tiny-slider";
var VueSlider = require('vue-tiny-slider');

Vue.prototype.$http = axios
Vue.config.productionTip = false

import "@/assets/scss/style.scss";
import "@/assets/css/materialdesignicons.min.css";

Vue.use(VueYoutube)

Vue.use(Scrollspy);
Vue.use(VueScrollTo)

// Install BootstrapVue
Vue.use(BootstrapVue)
Vue.use(VueSlider)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
