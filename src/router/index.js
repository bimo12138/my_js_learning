import Vue from 'vue'
import Router from 'vue-router'
import header from "../components/header.vue";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(Router)
Vue.use(ElementUI)
export default new Router({
  routes: [
    {
      path: '/',
      component: header
    }
  ]
})
