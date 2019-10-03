<template>
    <div>
        <h1>查询成绩</h1>
        <el-table :data="attend_exam_list" style="width: 70%" border>
            <el-table-column type="index" :index="getIndex">

            </el-table-column>
            <el-table-column prop="exam_no" label="试卷ID">

            </el-table-column>
            <el-table-column prop="status" label="状态">
                
            </el-table-column>
            <el-table-column prop="score" label="最终成绩">

            </el-table-column>
        </el-table>
    </div>
</template>

<script>
export default {
    data() {
        return {
            attend_exam_list: []
        }
    },
    created() {
        // 获取以参加考试情况
        this.$axios.get("/apis/select_exam", {
            params: {
                "student_no": this.$store.state.username
            }
        })
        .then(response => {
            if(response.data.code === 200) {
                // accept successful
                this.attend_exam_list = new Array(eval("(" + response.data.message + ")"));
                this.attend_exam_list.forEach((element) => {
                    element.status = element.status? "提交": "保存";
                    element.score = element.score == null? "未批阅": element.score;
                })
            }
        })
    },
    methods: {
        getIndex(index) {
            return index + 1;
        }
    }
}
</script>