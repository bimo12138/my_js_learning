<template>
    <el-menu :default-active="defaultIndex" mode="horizontal" @select="handleSelect" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b" router>
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
</template>


<style>
    .right_group {
        float: right;
    }
    .right_group li {
        display: inline;
    }
</style>

<script>
    export default {
        data() {
            return {
                defaultIndex: '/'
            }
        },
        methods: {
        
        }
    }
</script>