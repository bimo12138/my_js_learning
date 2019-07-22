<template>
    <el-row :xs="{span: 20, offset: 2}" :lg="{span: 16, offset: 4}">
        <h2 style="text-align: center">个人信息管理</h2>
        <el-col v-if="err" style="text-align: center; color: red">
            {{err_message}}
        </el-col>
        <el-row v-else>
            <el-form ref="userInfo" :model="userInfo" label-width="8em">
                <el-form-item label="姓名:">
                    <el-input v-model="userInfo.auth_name" disabled class="short_input"></el-input>
                </el-form-item>
                <el-form-item label="专业">
                    <el-input v-model="userInfo.specialty" disabled class="short_input"></el-input>
                </el-form-item>
                <el-form-item label="性别:">
                    <el-radio-group v-model="userInfo.sex">
                        <el-radio :label="0" border>这是一个秘密</el-radio>
                        <el-radio :label="1" border>男</el-radio>
                        <el-radio :label="2" border>女</el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="生日: ">
                    <el-date-picker v-model="userInfo.birthday" type="date" class="short_input"></el-date-picker>
                </el-form-item>
                <el-form-item label="身份证号码: ">
                    <el-input placeholder="请输入身份证号码" v-model="userInfo.id" class="medium_input"></el-input>
                </el-form-item>
                <el-form-item label="地址:">
                    <el-input placeholder="请输入您的地址信息" v-model="userInfo.address" class="long_input"></el-input>
                </el-form-item>
                
                <el-form-item class="group_item">
                    <el-button @click="reload_userInfo">重置</el-button>
                    <el-button type="primary" @click="change_userInfo" :loading=commit_status>提交</el-button>
                </el-form-item>
            </el-form>
        </el-row>
    </el-row>
</template>

<style>
    .short_input {
        width: 10em;
    }
    .medium_input {
        width: 20em;
    }
    .long_input {
        width: 30em;
    }
    .label_name {
        width: 10em;
    }
    .el-form-item__label {
        font-weight: bold;
        text-align: center;
        font-size: 1.1em;
    }
    .group_item {
        float: right;
        margin-right: 10em;
    }
</style>

<script>
export default {
    data() {
        return {
            err: false,
            err_message: "",
            userInfo: {},
            commit_status: false
        }
    },
    created() {
        this.$axios.get("/apis/auth", {
            params: {
                "auth_no": this.$store.state.username
            }
        })
        .then(response => {
            if (response.data.code === 200) {
                this.$store.state.auth_info = this.info_initial(response.data.message);
                this.userInfo = this.$store.state.auth_info;
            }
            else {
                this.err = true
                this.err_message = response.data.message
            }
        })
    },
    methods: {
        info_initial(student_info) {
            if(student_info.id === null) {
                student_info.id = "";
            }
            if(student_info.specialty === null) {
                student_info.specialty = "学科暂未指定。"
            }
            return student_info
        },
        reload_userInfo() {
            
            this.$axios.get("/apis/auth", {
                params: {
                    "auth_no": this.$store.state.username
                }
            })
            .then(response => {
                
                if (response.data.code === 200) {
                    this.$store.state.auth_info = this.info_initial(response.data.message);
                    this.userInfo = this.$store.state.auth_info;
                }
                else {
                    this.err = true
                    this.err_message = response.data.message
                }
            })
        },
        change_userInfo() {
            this.commit_status = true;
            this.$axios.post("/apis/auth", {
                "auth_no": this.$store.state.username,
                "detail": this.userInfo
            })
            .then(response => {
                if(response.data.code === 200) {
                    this.commit_status = false;
                    this.$notify({
                        title: "成功",
                        message: response.data.message,
                        type: "success"
                    })
                }
                else {
                    this.$message({
                        message: response.data.message,
                        type: "warning"
                    })
                }
            })
            
        }
    }
    
}
</script>