import Vue from 'vue'
import Router from 'vue-router'

import index from "../components/index.vue";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import login from "../components/login.vue"
Vue.use(Router)
Vue.use(ElementUI)

export default new Router({
  routes: [
    {
      path: '/',
      component: index
    }, {
      path: "/login",
      component: login
    }
  ]
})
