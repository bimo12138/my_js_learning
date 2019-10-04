<template>
    <div class="container">
        <h1 class="title">排行榜</h1>
        <el-select v-model="choose" placeholder="请选择试卷" @change="get_rank" v-loading="select_loading">
            <el-option v-for="item in exam_list" :key="item.id" :label="item.label" :value="item.value">

            </el-option>
        </el-select>

        <el-table :data="rank_list" :date="rank_list" :default-sort="{prop: 'score', order: 'descending'}" v-loading="table_loading">

            <el-table-column prop="student_no" label="姓名">
 
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
            rank_list: [],
            exam_list: [],
            choose: "",
            select_loading: true,
            table_loading: false
        }
    },
    created() {
        // 获取 列表
        this.$axios.get("/apis/exam_list")
        .then((response) => {
            this.select_loading = false;
            eval("(" + response.data.message + ")").forEach(element => {
                if (element.score === null) {
                    element.score = 0
                }
                this.exam_list.push({
                    value: element.exam_no,
                    label: element.exam_name
                })
            })

        })
    },
    methods: {
        deleteRow(index, rows) {
            rows.splice(index, 1);
        },
        get_rank() {
            this.table_loading = true;
            this.$axios.get("/apis/rank", {
                params: {
                    exam_no: this.choose
                }
            })
            .then(response => {
                if (response.data.code === 200) {
                    eval( "(" + response.data.message + ")" ).forEach(element => {
                        this.rank_list.push(element)
                    })
                }else {
                    this.$message.error("还没人参加考试哦！")
                }
                this.table_loading = false;
            })
           
        }
    }
}
</script>