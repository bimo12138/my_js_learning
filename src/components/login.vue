<template>
    <el-row>
        <h1 id="title">学生登陆</h1>
        <el-col :xs="24" :sm="24" :lg="{span: 12, offset: 6}" :xl="{span: 8, offset: 8}" class="form-container">
            <el-form ref="login_form" :model="login_form" label-width="4em">
                <el-form-item label="学号">
                    <el-input v-model="login_form.student_no"></el-input>
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
                student_no: "",
                password: ""
            }
        }
    },
    methods: {
        onSubmit: function() {
            this.$axios.get("/apis/student", {
                params: {
                    "student_no": this.login_form.student_no,
                    "password": this.login_form.password
                }
            })
            .then(response => {
                if(response.data.code === 200) {
                    this.$message({
                        message: response.data.message,
                        type: "success"
                    })
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
<!--
<template>
    <div>
        <el-table :data="dataP" stripe style="width: 80%; margin-left: auto; maargin-right: auto">
            <el-table-column prop="username" label="username">

            </el-table-column>
            <el-table-column prop="telephone" label="telephone">

            </el-table-column>
            
        </el-table>
        <el-progress :text-inside="true" :stroke-width="18" :percentage=num color="rgba(num, num,num, 0.7)"></el-progress>
        <el-button @click="status_change()">

        </el-button>
    </div> 
    
</template>

<style>

</style>

<script>
export default {
    data() {
        return {
            dataP: [
                {
                    username: "笔墨",
                    telephone: 17716612121
                }
            ],
            num: 20
        }
    },
    methods: {
        status_change() {

            let a = setInterval(() => {
                this.num += 1;
                if(this.num >= 100) clearInterval(a)
            }, 100)
        }
    }   
}

</script>
-->