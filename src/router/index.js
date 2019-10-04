import Vue from 'vue'
import Router from 'vue-router'


import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';



Vue.use(Router)
Vue.use(ElementUI)

export default new Router({
  routes: [
    {
      path: '/',
      component: resolve => require(["../components/index.vue"], resolve),
      name: "index"
    }, 
    {
      path: "/login",
      component: resolve => require(["../components/login.vue"], resolve),
      name: "login"
    }, 
    {
      path: "/register",
      component: resolve => require(["../components/register.vue"], resolve),
      name: "register"
    }, 
    {
      path: "/rank",
      component: resolve => require(["../components/rank.vue"], resolve),
      name: "rank"
    },
    {
      path: "/student",
      component: resolve => require(["../components/student_pages/student.vue"], resolve),
      name: "student",
      children: [
      {
        path: "info",
        component: resolve => require(["../components/student_pages/student_info.vue"], resolve),
        name: "student_info"
      },
      {
        path: "exam",
        component: resolve => require(["../components/student_pages/student_take_exam.vue"], resolve),
        name: "student_take_exam"
      }, 
      {
        path: "grade",
        component: resolve => require(["../components/student_pages/student_grade.vue"], resolve),
        name: "student_grade"
      }, 
      {
        path: "exam/:exam_no/:student_no",
        component: resolve => require(["../components/student_pages/student_exam.vue"], resolve),
        name: "student_exam"
      }]
    }, 
    {
      path: "/teacher",
      component: resolve => require(["../components/teacher_pages/teacher.vue"], resolve),
      name: "teacher",
      children: [
      {
        path: "info",
        component: resolve => require(["../components/teacher_pages/teacher_info.vue"], resolve),
        name: "teacher_info"
      }, 
      {
        path: "demo_exam",
        component: resolve => require(["../components/teacher_pages/demo_exam.vue"], resolve),
        name: "demo_exam"
      }, 
      {
        path: "upload_exam",
        component: resolve => require(["../components/teacher_pages/upload_exam.vue"], resolve),
        name: "upload_exam"
      }, 
      {
        path: "my_exam",
        component: resolve => require(["../components/teacher_pages/my_exam.vue"], resolve),
        name: "my_exam"
      }, 
      {
        path: "exam/:exam_no",
        component: resolve => require(["../components/teacher_pages/exam_detail.vue"], resolve),
        name: "exam_detail"
      },
      {
        path: "loading/:exam_no",
        component: resolve => require(["../components/teacher_pages/loading_exam.vue"], resolve),
        name: "loading_exam"
      }, 
      {
        path: "process_exam/:exam_no/:student_no",
        component: resolve => require(["../components/teacher_pages/loading_exam_porocess.vue"], resolve),
        name: "process_exam"
      }]
    }, 
    {
      path: "/teacher_login",
      component: resolve => require(["../components/teacher_pages/teacher_login.vue"], resolve),
      name: "teacher_login"
    }, 
    {
      path: "/teacher_register",
      component: resolve => require(["../components/teacher_pages/teacher_register.vue"], resolve),
      name: "teacher_register"
    }
  ]
})
