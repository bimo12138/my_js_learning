<template>
       <el-row>
           <h1 class="content-title">教师注册</h1>
            <el-col :xs="{span: 18, offset: 3}" :sm="{span: 18, offset: 3}" :lg="{span: 12, offset: 6}" :xl="{span: 8, offset: 8}">
                
                <el-steps :active="step_num">
                    <el-step title="注册信息填写" description="基本信息填写"></el-step>
                    <el-step title="完成"></el-step>
                </el-steps>
            </el-col>
            <el-col :xs="{span: 18, offset: 3}" :sm="{span: 18, offset: 3}" :lg="{span: 12, offset: 6}" :xl="{span: 8, offset: 8}" class="form-container">
                <el-main v-if="step_num === 1">
                    <el-form ref="register_form" :model="register_form" label-width="8em" :rules="rules">
                        <el-form-item label="学号" prop="teacher_no">
                            <el-input v-model="register_form.teacher_no" placeholder="请输入教职工号: "></el-input>
                        </el-form-item>
                        <el-form-item label="姓名" prop="teacher_name">
                            <el-input v-model="register_form.teacher_name" placeholder="请输入姓名: "></el-input>
                        </el-form-item>
                        <el-form-item label="Email" prop="teacher_email">
                            <el-input v-model="register_form.teacher_email" type="email" placeholder="请输入邮箱: "></el-input>
                        </el-form-item>
                        <el-form-item label="密码" prop="teacher_password">
                            <el-input v-model="register_form.teacher_password" placeholder="请输入密码: " show-password></el-input>
                        </el-form-item>
                        <el-form-item label="核实密码" prop="teacher_password_check">
                            <el-input v-model="register_form.teacher_password_check" placeholder="请二次输入密码: " show-password></el-input>
                        </el-form-item>
                        
                        <el-form-item>
                            <el-button type="primary" :loading="loading_status" @click="onSubmit" style="float: right">提交</el-button>
                        </el-form-item>
                    </el-form>
                </el-main>

                <el-main v-if="step_num === 2" style="text-align: center;">
                    <h2> {{register_form.teacher_name}} 注册完成!</h2>
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
                teacher_no: "",
                teacher_name: "",
                teacher_password: "",
                teacher_password_check: "",
                teacher_email: ""
            },
            sended: false,
            rules: {
                teacher_no: [
                    {required: true, message: "请输入学号", trigger: "blur"}
                ],
                teacher_name: [
                    {required: true, message: "请输入姓名", trigger: "blur"}
                ],
                teacher_password: [
                    {required: true, message: "请输入密码", trigger: "blur"}
                ],
                teacher_password_check: [
                    {required: true, message: "请二次输入密码", trigger: "blur"}
                ],
                teacher_email: [
                    {required: true, message: "请输入邮箱", trigger: "blur"}
                ]
            }
        }
    },
    methods: {
        onSubmit: function() {

            this.loading_status = true;

            let no = this.register_form.teacher_no;
            let username = this.register_form.teacher_name;
            let password = this.register_form.teacher_password;
            let password_check = this.register_form.teacher_password_check;
            let email = this.register_form.teacher_email;

            if (password !== password_check) {
                this.$message({
                    message: "两次密码输入不一致",
                    type: "warning"
                })

                this.loading_status = false;
            }
            else {
                this.$axios.post("/apis/teacher", {
                    "teacher_no": no,
                    "teacher_name": username,
                    "password": password,
                    "email": email
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
        }
    }
}
</script>