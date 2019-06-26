<template>
    <el-menu :default-active="defaultIndex" mode="horizontal" @select="handleSelect" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
    <el-menu-item index="0">首页</el-menu-item>
    <el-submenu index='1'>
        <template slot="title">
            个性选项
        </template>
        <el-menu-item index='1-1'>选项一</el-menu-item>
        <el-menu-item index='1-2'>选项二</el-menu-item>
    </el-submenu>

        <el-menu-item index='2'>注册</el-menu-item>
        <el-menu-item index='3'>登录</el-menu-item>

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
                defaultIndex: '0'
            }
        }
    }
</script>