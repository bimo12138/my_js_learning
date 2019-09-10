<template>
       <el-row>
           <h1 class="content-title">学生注册</h1>
            <el-col :xs="{span: 18, offset: 3}" :sm="{span: 18, offset: 3}" :lg="{span: 12, offset: 6}" :xl="{span: 8, offset: 8}">
                
                <el-steps :active="step_num">
                    <el-step title="注册信息填写" description="基本信息填写"></el-step>
                    <el-step title="验证邮箱" description="将发送一条激活邮件到你的邮箱"></el-step>
                    <el-step title="完成"></el-step>
                </el-steps>
            </el-col>
            <el-col :xs="24" :sm="{span: 18, offset: 3}" :lg="{span: 12, offset: 6}" :xl="{span: 8, offset: 8}" class="form-container">
                <el-main v-if="step_num === 1">
                    <el-form ref="register_form" :model="register_form" label-width="8em" :rules="rules">
                        <el-form-item label="学号" prop="student_no">
                            <el-input v-model="register_form.student_no" placeholder="请输入学号: "></el-input>
                        </el-form-item>
                        <el-form-item label="姓名" prop="student_name">
                            <el-input v-model="register_form.student_name" placeholder="请输入姓名: "></el-input>
                        </el-form-item>
                        <el-form-item label="密码" prop="student_password">
                            <el-input v-model="register_form.student_password" placeholder="请输入密码: " show-password></el-input>
                        </el-form-item>
                        <el-form-item label="核实密码" prop="student_password_check">
                            <el-input v-model="register_form.student_password_check" placeholder="请二次输入密码: " show-password></el-input>
                        </el-form-item>
                        <el-form-item>
                            <el-button type="primary" :loading="loading_status" @click="onSubmit" style="float: right">提交</el-button>
                        </el-form-item>
                    </el-form>
                </el-main>
                <el-main v-if="step_num === 2">
                    <p v-if="sended" style="text-align: center;">
                        <i class="el-icon-success"></i>
                        邮件已发送, 请等待验证！
                    </p>
                    <el-form ref="email_active" :model="email_active" label-width="8em" v-else :rules="email_rules">
                        <el-form-item label="邮箱" prop="email">
                            <el-input v-model="email_active.email" placeholder="请输入邮箱: "></el-input>
                        </el-form-item>
                        <el-form-item>
                            <el-button type="success" style="float: right" @click="start_check">开始验证</el-button>
                        </el-form-item>
                    </el-form>
                </el-main>
                <el-main v-if="step_num === 3" style="text-align: center;">
                    <h2> {{register_form.student_name}} 注册完成!</h2>
                    <router-link to="/">返回首页</router-link>
                </el-main>
            </el-col>
       </el-row>
        
</template>

<style>
    .content-title {
        text-align: center;
        margin-bottom: 2em;
    }
    .el-form-item__label {
        font-family: 楷体;
        padding: 0;
        text-align: left;
    }
    .form-container {
        padding: 2em 5em 2em 1em;
    }
</style>

<script>

export default {
    data() {
        return {
            step_num: 1,
            loading_status: false,
            register_form: {
                student_no: "",
                student_name: "",
                student_password: "",
                student_password_check: ""
            },
            sended: false,
            email_active: {
                email: ""
            },
            rules: {
                student_no: [
                    {required: true, message: "请输入学号", trigger: "blur"}
                ],
                student_name: [
                    {required: true, message: "请输入姓名", trigger: "blur"}
                ],
                student_password: [
                    {required: true, message: "请输入密码", trigger: "blur"}
                ],
                student_password_check: [
                    {required: true, message: "请二次输入密码", trigger: "blur"}
                ]
            },
            email_rules: {
                email: [
                    {required: true, message: "请输入邮箱", trigger: "blur"}
                ]
            }
        }
    },
    methods: {
        onSubmit: function() {
            this.loading_status = true;
            let no = this.register_form.student_no;
            let username = this.register_form.student_name;
            let password = this.register_form.student_password;
            let password_check = this.register_form.student_password_check;
            if (password !== password_check) {
                console.log(password, password_check)
                this.$message({
                    message: "两次密码输入不一致",
                    type: "warning"
                })
                this.loading_status = false;
            }
            else {
                this.$axios.post("/apis/student", {
                    "student_no": no,
                    "student_name": username,
                    "password": password
                })
                .then (response => {
                    if(response.data.code === 200) {
                        this.step_num = 2;
                        this.$message({
                            message: response.data.message,
                            type: "success"
                        })
                    } else {
                        this.$message({
                            message: response.data.message,
                            type: "warning"
                        })
                    }
                })

                .catch((error) => {
                    this.$message({
                        message: error,
                        type: "warning"
                    })
                })

                this.loading_status = false;
            }
        },
        start_check: function() {
            let no = this.register_form.student_no;
            let email = this.email_active.email;
            if (no && email) {
                this.$axios.post("/apis/email", {
                    student_no: no,
                    email: email
                })
                .then(response => {
                    this.sended = true;
                    if (response.data.code == 200) {
                        this.sended = true;
                        let current_get = setInterval((no) => {
                            this.$axios.get("/apis/email_status", {
                                params: {
                                    "student_no": this.register_form.student_no
                                }
                            })
                            .then( response => {
                                if(response.data.code === 200) {
                                    this.step_num ++;
                                    clearInterval(current_get);
                                }
                            })
                        }, 3000)
                    } else {
                        this.$message({
                            message: response.data.message,
                            type: "warning"
                        })
                    }
                })
                .catch((error) => {
                    this.$message({
                        message: error,
                        type: "warning"
                    })
                })
            }
        }
    }
}
</script>