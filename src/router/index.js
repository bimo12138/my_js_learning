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
import teacher from "../components/teacher_pages/teacher.vue"
import teacher_login from "../components/teacher_pages/teacher_login.vue"
import teacher_info from "../components/teacher_pages/teacher_info.vue";
import teacher_register from "../components/teacher_pages/teacher_register.vue";
import demo_exam from "../components/teacher_pages/demo_exam.vue";
import upload_exam from "../components/teacher_pages/upload_exam.vue";
import my_exam from "../components/teacher_pages/my_exam.vue";
import exam_detail from "../components/teacher_pages/exam_detail.vue";
import student_exam from "../components/student_pages/student_exam.vue";


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
      }, {
        path: "exam/:exam_no",
        component: student_exam,
        name: "student_exam"
      }]
    }, {
      path: "/teacher",
      component: teacher,
      name: "teacher",
      children: [{
        path: "info",
        component: teacher_info,
        name: "teacher_info"
      }, {
        path: "demo_exam",
        component: demo_exam,
        name: "demo_exam"
      }, {
        path: "upload_exam",
        component: upload_exam,
        name: "upload_exam"
      }, {
        path: "my_exam",
        component: my_exam,
        name: "my_exam"
      }, {
        path: "exam/:exam_no",
        component: exam_detail,
        name: "exam_detail"
      }]
    }, {
      path: "/teacher_login",
      component: teacher_login,
      name: "teacher_login"
    }, {
      path: "/teacher_register",
      component: teacher_register,
      name: "teacher_register"
    }
  ]
})
