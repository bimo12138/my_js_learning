<template>
    <el-row class="main_container">
        <el-col class="hidden-sm-and-down" :xl="8" :lg="4">
            <ul style="text-align: center">
                <li>结构1</li>
                <li>结构2</li>
                <li>结构3</li>
            </ul>
        </el-col>
        <el-col :xl="{span: 12, offset: 2}" :sm="{span: 20}">
            <router-view></router-view>
        </el-col> 
    </el-row>
</template>

<style>
    .main_container {
        padding: 2em 0 2em 0;
    }
    ul {
        list-style: none;
    }
</style>

<script>
export default {

}
</script>