<script>
export default {
    login_status: false,
    // 0 未登录 1 学生 2 老师
    permission: 0,
    student_no: "",
    teacher_no: "",
    student_info: {},
    login_function(login_status) {
        this.login_status = login_status
    },
    change_permission(permission) {
        this.permission = permission
    },
    set_student_no(student_no) {
        this.student_no = student_no
    },
    set_teacher_no(teacher_no) {
        this.teacher_no = teacher_no
    },
    logout() {
        this.login_status = false,
        this.student_no = "",
        this.teacher_no = "",
        this.permission = 0
    }
}
</script>