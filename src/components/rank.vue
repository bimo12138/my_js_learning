<template>
    <div class="container">
        <h1 class="title">排行榜</h1>
        <el-select v-model="value" placeholder="请选择试卷">
            <el-option v-for="item in options" :key="item.exam_no" :label="item.exam_name" :value="item.exam_no">

            </el-option>
        </el-select>

        <el-table :data="rank_list" :date="rank_list" :default-sort="{prop: 'score', order: 'descending'}">
            <el-table-column prop="spend_time" label="花费时间">

            </el-table-column>
            <el-table-column prop="upload_time" label="提交时间">

            </el-table-column>
            <el-table-column prop="test_username" label="姓名">
 
            </el-table-column>
            <el-table-column prop="score" label="成绩" sortable="true">

            </el-table-column>
        </el-table>
    </div>
    
</template>

<style lang="">
    .title {
        padding-top: 0.5em;
        padding-bottom: 0.4em;
        text-align: center;
    }
    .container {
        width: 80%;
        margin: 0 auto;
    }
</style>
<script>
export default {
    data() {
        return {
            rank_list: [{
                spend_time: "120",
                test_username: "bimo",
                score: 85,
                upload_time: "2019-8-7 07:06:32"

            }, {
                spend_time: "110",
                test_username: "tom",
                score: 77,
                upload_time: "2019-8-7 07:06:32"
            }]
        }
    },
    methods: {
        deleteRow(index, rows) {
            rows.splice(index, 1);
        }
    }
}
</script>