// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue';
import router from './router'

require('swiper/dist/css/swiper.css');
import VueAwesomeSwiper from 'vue-awesome-swiper';
Vue.use(VueAwesomeSwiper);


import VueLazyload from 'vue-lazyload'
// or with options
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3192655453,2439586296&fm=27&gp=0.jpg',
  loading: 'http://cdn.uehtml.com/201402/1392662520296_1140x0.gif',
  attempt: 1
});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
