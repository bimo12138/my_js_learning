// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios';
import global from './components/utils/global.vue';
import store from "./store/store";




Vue.config.productionTip = false;
Vue.prototype.$axios = axios;
Vue.prototype.global_status = global;


/* eslint-disable no-new */
new Vue({
  el: '#app',
  mode: "history",
  router,
  store,
  components: { App },
  template: '<App/>'
})
