<template>
    <div>
        <el-menu :default-active="$route.path" mode="horizontal" @select="handleSelect" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b" router v-if="this.$store.state.login_status === false">
            <el-menu-item index="/">
                首页
            </el-menu-item>

            <el-submenu index='/auth'>
                <template slot="title">
                    学生
                </template>
                <el-menu-item index='/register'>注册</el-menu-item>
                <el-menu-item index='/login'>登录</el-menu-item>
            </el-submenu>

            <el-submenu index="/teacher">
                <template slot="title">
                    老师
                </template>
                <el-menu-item index="/register_teacher">注册</el-menu-item>
                <el-menu-item index="/login_teacher">登录</el-menu-item>
            </el-submenu>
            <el-menu-item index='/rank'>
                排行榜
            </el-menu-item>
        </el-menu>

        <el-menu :default-active="$route.path" mode="horizontal" @select="handleSelect" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b" router v-if="this.$store.state.login_status === true">
            <el-menu-item index="/">
                首页
            </el-menu-item>

                <el-submenu index='/student'>
                    <template slot="title">
                        综合管理
                    </template>
                    <el-menu-item index='/student/info'>个人信息查询</el-menu-item>
                    <el-menu-item index='/student/exam'>参加考试</el-menu-item>
                    <el-menu-item index="/student/grade">考试成绩查询</el-menu-item>
                    <el-menu-item @click="dialogVisible = true">注销</el-menu-item>
                </el-submenu>

                <el-submenu index="/teacher">
                    <template slot="title">
                        老师
                    </template>
                    <el-menu-item index="/register_teacher">注册</el-menu-item>
                    <el-menu-item index="/login_teacher">登录</el-menu-item>
                </el-submenu>

            
            <el-menu-item index='/rank'> 
                排行榜
            </el-menu-item>
            <el-dialog title="确认" :visible.sync="dialogVisible" width="30%" :before-close="handleClose">
                <h3 style="text-align: center">确定要退出当前账号吗？</h3>
                <div slot="footer" class="dialog-footer">
                    <el-button @click="dialogVisible = false">取消</el-button>
                    <el-button type="primary" @click="exit">确定</el-button>
                </div>

            </el-dialog>
        </el-menu>
    </div>

</template>



<style>
    .right_group {
        float: right;
    }
    .right_group li {
        display: inline;
    }
    .btn-group {
        float: right;
    }
</style>

<script>
    import {mapGetters, mapActions} from 'vuex';
    export default {
        data() {
            return {
                dialogVisible: false
            }
        },
        computed: {
            
        },
        created() {
            if(this.$store.getters.is_login) {
                console.log("载入登录状态!");
            } else {
                console.log("未读取到登录状态, 无法记录 session !");
            }
        },
        methods: {
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(done) {
                this.$confirm("确定关闭?")
                .then(_ => {
                    done();
                })
                .catch(_ => {});
            },
            exit() {
                this.$store.commit("logout");
            },
            link_store() {
                console.log(this.$store.state.username);         
            }
        },
    }
</script>