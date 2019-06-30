

<template>
    <div class="container">
        <h1 id="title">欢迎使用智慧校园考试系统</h1>
        <p class="text-field">
            <ol>
                <li>用户管理系统，包括用户注册、登录和注销</li>
                <li>邮箱激活功能，用户注册成功之后需要登陆邮箱进行激活</li>
                <li>分类功能，用户通过不同的分类进行答题</li>
                <li>机构注册功能，允许机构用户进行注册，注册成功之后自主出题</li>
                <li>快速出题功能，机构用户可以下载题库模板，根据模板创建题目，上传题库</li>
                <li>配置考试功能，机构用户可以配置考试信息，如设置考试题目、时间等内容</li>
                <li>答题功能，用户参与答题，可以选择上一题和下一题</li>
                <li>评分功能，用户答完所有题目之后，系统自动阅卷并显示用户考试结果</li>
                <li>排行榜功能，用户可以通过排行榜，查看考试成绩</li>
            </ol>
        </p>
    </div>
</template>

<style>
    .container {
        background: white;
        font-family: consolas;
    }
    #title {
        text-align: center;
        margin-bottom: 1em;
    }
    .text-field {
        width: 60%;
        margin-left: auto;
        margin-right: auto;
        padding: 1em 1em 1em 4em;
        border: 2px solid #e3e3e3;
        box-shadow: 0px 3px 5px 2px gray;
        font-size: 1.5em;
        margin-bottom: 5em;
    }
</style>

<!--
<template>
    <div>
        <el-alert title="成功提示的文案" type="success" description="这是一个成功信息！" show-icon></el-alert>
        <el-alert title="消息提示的文案" type="info" description="这是一个提示信息！" show-icon></el-alert>
        <el-alert title="警告提示的文案" type="warning" description="这是一个警告消息！" show-icon></el-alert>
        <el-alert title="错误提示的文案" type="error" description="这是一个错误消息" show-icon></el-alert>

        <div style="margin-top: 20px" @change="status_change">
            <el-radio v-model="sex" label="男" border size="medium">男</el-radio>
            <el-radio v-model="sex" label="女" border size="medium">女</el-radio>
        </div>
        <h3>最多只能选择两项: </h3>
        <el-checkbox-group v-model="checkedCites" :max='2'>
            <el-checkbox v-for="city in cities" :label='city' :key="city">{{city}}</el-checkbox>
        </el-checkbox-group>
        <div style="width: 500px; margin-left: auto; margin-right: auto; font-family: 楷体;">
            <el-form ref="form" :model="form" label-width="120px" label-size="20px" v-loading="form_loading">
                <el-form-item label="用户名">
                    <el-input v-model="form.username"></el-input>
                </el-form-item>
                <el-form-item label="性别">
                    <el-radio-group v-model="form.sex">
                        <el-radio label="男" border></el-radio>
                        <el-radio label="女" border></el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="个人爱好">
                    <el-checkbox-group v-model="form.hobby">
                        <el-checkbox label="打篮球" name="hobby"></el-checkbox>
                        <el-checkbox label="rap" name="hobby"></el-checkbox>
                        <el-checkbox label="唱歌" name="hobby"></el-checkbox>
                    </el-checkbox-group>
                </el-form-item>
                <el-form-item label="出生日期">
                    <el-date-picker v-model="form.birthday" type="date" placeholder="请选择日期"></el-date-picker>
                </el-form-item>
                <el-form-item label="备注">
                    <el-input type="textarea" v-model="form.command"></el-input>
                </el-form-item>
                <el-form-item v-show="error">
                    <el-alert title="警告, 账户或密码输入错误！" type="warning" :closable=false show-icon center></el-alert>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submit">提交</el-button>
                    <el-button @click="reset">重置</el-button>
                </el-form-item>
            </el-form>
            
        </div>
        
    </div>
    
</template>

<style>
    .el-form-item__label, .el-checkbox__label, .el-radio__label, .el-alert__title {
        font-size: 20px;
    }
</style>
<script>
/*
    const cities = ["北京", "南京", "盐城", "广州"]
    export default {
        data () {
            return {
                sex: "男",
                cities: cities,
                checkedCites: ["盐城", "北京"],
                form: {
                    username: "",
                    sex: "",
                    hobby: [],
                    command: "",
                    birthday: ""
                },
                // error: false,
                form_loading: false
            };
        },
        methods: {
            status_change:function () {
                alert(this.sex);
            },
            submit() {
                let message = this.form.username + "\n" + this.form.sex + "\n" + this.form.hobby + "\n" + this.form.command + "\n" + this.form.birthday + "\n"
                // this.error = !this.error,
                this.form_loading = true;
                setInterval(() => {
                    this.form_loading = false;
                    
                }, 2000);
                this.$message({
                    message: "账户输入错误！",
                    type: "warning"
                });
            },
            reset() {
                this.form.username = "",
                this.form.sex = "",
                this.form.hobby = [],
                this.form.command = "",
                this.form.birthday = ""
            }
        }
    }
*/
</script>
-->