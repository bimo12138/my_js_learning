<template>
<div class="container">
    <h1>{{exam_name}} 试卷详情</h1>
    <el-collapse accordion='true'>
        <el-collapse-item title="单选题" name="radio"></el-collapse-item>
        <el-collapse-item title="判断题" name="classify"></el-collapse-item>
        <el-collapse-item title="填空题" name="input"></el-collapse-item>
        <el-collapse-item title="解答题" name="answer"></el-collapse-item>
    </el-collapse>
</div>
    
</template>

<script>
export default {
    data() {

    },
    created() {
        
    }
}
</script>