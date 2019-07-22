import Vue from 'vue'
import Router from 'vue-router'

import index from "../components/index.vue";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import login from "../components/login.vue";
import register from "../components/register.vue";
import rank from '../components/rank.vue';
import student_info from "../components/student_pages/student_info.vue";
import student from "../components/student_pages/student.vue";
import student_take_exam from "../components/student_pages/student_take_exam.vue";
import student_grade from "../components/student_pages/student_grade.vue";

Vue.use(Router)
Vue.use(ElementUI)

export default new Router({
  routes: [
    {
      path: '/',
      component: index,
      name: "index"
    }, {
      path: "/login",
      component: login,
      name: "login"
    }, {
      path: "/register",
      component: register,
      name: "register"
    }, {
      path: "/rank",
      component: rank,
      name: "rank"
    }, {
      path: "/student",
      component: student,
      name: "student",
      children: [{
        path: "info",
        component: student_info,
        name: "student_info"
      }, {
        path: "exam",
        component: student_take_exam,
        name: "student_take_exam"
      }, {
        path: "grade",
        component: student_grade,
        name: "student_grade"
      }]
    }
  ]
})
