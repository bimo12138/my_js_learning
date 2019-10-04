<template>
    <div>
        <el-table :data="answer_lists" style="width: 80%" :loading="loading">
            <el-table-column prop="student_no" label="学生">

            </el-table-column>
            <el-table-column prop="exam_no" label="试卷">

            </el-table-column>
            <el-table-column prop="score" label="分数">

            </el-table-column>
            <el-table-column label="操作">
                <template slot-scope="scope">
                    <el-button type="primary" @click.native.prevent="get_answer(scope.$index)">批阅</el-button>
                    <el-button type="danger" @click.native.prevent="reget(scope.$index)">重新抽卷</el-button>
                </template>
            </el-table-column>
        </el-table>

    </div>
</template>

<script>
export default {
    data() {
        return {
            answer_lists: [],
            available_exam_list: [],
            loading: false
        }
    },
    created () {
        let exam_no = this.$route.params.exam_no;
        this.$axios.get("/apis/loading_exam", {
            params: {
                "exam_no": exam_no
            }
        })
        .then(response => {
            this.answer_lists = new Array(eval("(" + response.data.message + ")"));
            this.answer_lists.forEach((element) => {
                element.score = element.score == null? "未批阅": element.score;
            })
        })
    },
    methods: {
        get_answer(e) {
            let student_no = this.answer_lists[e].student_no;
            let exam_no = this.answer_lists[e].exam_no;
            this.$router.push({
                path: "/teacher/process_exam/" + exam_no + "/" + student_no
            })
        }
    }
}
</script>