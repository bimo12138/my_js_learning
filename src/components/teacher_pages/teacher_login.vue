<template>
    <el-row>
        <h1 id="title">教师登陆</h1>
        <el-col :xs="24" :sm="24" :lg="{span: 12, offset: 6}" :xl="{span: 8, offset: 8}" class="form-container">
            <el-form ref="login_form" :model="login_form" label-width="4em">
                <el-form-item label="职工号">
                    <el-input v-model="login_form.teacher_no"></el-input>
                </el-form-item>
                <el-form-item label="密码">
                    <el-input v-model="login_form.password" show-password></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="onSubmit" style="float: right">
                        提交
                    </el-button>
                </el-form-item>
            </el-form>
            
        </el-col>
        
    </el-row>
</template>

<style>
    #title {
        text-align: center;
        margin-bottom: 1em;
    }
    .form-container {
        padding: 2em 5em 2em 1em;
    }
</style>
<script>
export default {
    data() {
        return {
            login_form: {
                teacher_no: "",
                password: ""
            }
        }
    },
    methods: {
        onSubmit: function() {
            this.$axios.get("/apis/teacher", {
                params: {
                    "teacher_no": this.login_form.teacher_no,
                    "password": this.login_form.password
                }
            })
            .then(response => {
                if(response.data.code === 200) {
                    this.$message({
                        message: response.data.message,
                        type: "success"
                    }),
                    this.$store.commit("auth_login", {
                        "username": this.login_form.teacher_no,
                        "permission": 2
                    });
                    this.$router.push({
                        path: "/"
                    })
                }else {
                    this.$message({
                        message: response.data.message,
                        type: "warning"
                    })
                }
            })
            .catch((error) => {
                alert(error);
            })
        }
    }
}
</script>