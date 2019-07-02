<template>
       <el-row>
           <h1 class="content-title">学生注册</h1>
            <el-col :xs="24" :sm="24" :lg="{span: 12, offset: 6}" :xl="{span: 8, offset: 8}">
                
                <el-steps :active="step_num">
                    <el-step title="注册信息填写" description="基本信息填写"></el-step>
                    <el-step title="验证邮箱" description="将发送一条激活邮件到你的邮箱"></el-step>
                    <el-step title="完成"></el-step>
                </el-steps>
            </el-col>
            <el-col :xs="24" :sm="24" :lg="{span: 12, offset: 6}" :xl="{span: 8, offset: 8}" class="form-container">
                <el-main v-if="step_num === 1">
                    <el-form ref="register_form" :model="register_form" label-width="8em">
                        <el-form-item label="学号">
                            <el-input v-model="register_form.student_no" placeholder="请输入学号: "></el-input>
                        </el-form-item>
                        <el-form-item label="姓名">
                            <el-input v-model="register_form.student_name" placeholder="请输入姓名: "></el-input>
                        </el-form-item>
                        <el-form-item label="密码">
                            <el-input v-model="register_form.student_password" placeholder="请输入密码: " show-password></el-input>
                        </el-form-item>
                        <el-form-item label="核实密码">
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
                    <el-form ref="email_active" :model="email_active" label-width="8em" v-else>
                        <el-form-item label="邮箱">
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
                stduent_password: "",
                student_password_check: ""
            },
            sended: false,
            email_active: {
                email: ""
            }
        }
    },
    methods: {
        onSubmit: function() {
            this.loading_status = true;
            this.step_num = 2;

        },
        start_check: function() {
            this.sended = true;
        }
    }
}
</script>