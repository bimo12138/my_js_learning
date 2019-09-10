<template>
    <div class="container">
        <h1 class="title">排行榜</h1>
        <el-select v-model="choose" placeholder="请选择试卷" @change="get_rank">
            <el-option v-for="item in exam_list" :key="item.id" :label="item.label" :value="item.value">

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
            }],
            exam_list: [{
                id: 1,
                value: "测试试卷-1",
                label: "测试试卷-1"
            }, {
                id: 2,
                value: "测试试卷-2",
                label: "测试试卷-2"
            }],
            choose: ""
        }
    },
    created() {
        // 获取 列表
        this.$axios.get("/apis/rank", {
            params: {
                "exam_no": this.exam_no
            }
        })
        .then((response) => {
            console.log(response);
        })
    },
    methods: {
        deleteRow(index, rows) {
            rows.splice(index, 1);
        },
        get_rank() {
            console.log("请求方法启动！");
            console.log(this.choose);
        }
    }
}
</script>