<template>
    <div>
        <h1>批阅试卷 == {{student_no}}</h1>
        <h3>选择题得分: {{choose_score}}</h3>
        <h3>判断题得分: {{judge_score}}</h3>
        <h3>填空题得分: {{input_score}}</h3>
        <div v-for="(element, index) in subjective_list" :key="index">
            <h4>{{index + 1}}. {{element.title}}</h4>
            <ul class="answer_list border-box">
                <li class="user">{{element.answer}}</li>
                <li class="auth">{{element.correct}}</li>
            </ul>
            <h5>评分：</h5>
            <el-input type="number" v-model="element.score" style="width: 18%; display: inline-block" label="分数为:" max="10" min="0">{{element.score}}</el-input>
        </div>
        <el-button type="primary" style="float: right; margin-right: 5em;" @click="submit">提交</el-button>
    </div>
</template>

<style lang="">
    .border-box {
        width: 80%;
        margin-top: 1em; 
    }
    .user {
        border: 1px solid gray;
    }
    .auth {
        border: 1px solid blue;
    }
    .answer_list {
        display: flex;
    }
    .answer_list li {
        width: 50%;
    }
</style>
<script>
export default {
    data() {
        return {
            choose_score: 0,
            judge_score: 0,
            input_score: 0,
            subjective_list: [],
            student_no: "",
            subjective_score: 0,
            exam_no: ""
        }
    },
    created() {
        let exam_no = this.$route.params.exam_no;
        let student_no = this.$route.params.student_no;
        this.student_no = student_no;
        this.exam_no = exam_no;
        this.$axios.get("/apis/evaluate_exam", {
                params: {
                    exam_no: exam_no,
                    student_no: student_no
                }
            })
            .then(response => {
                if(response.data.code === 200) {
                    let result = response.data.message;
                    this.loading = false;
                    this.choose_score = result['choose_score'];
                    this.judge_score = result['judge_score'];
                    this.input_score = result['input_score'];
                    result['subjective_list'].forEach((element) => {
                        let no = element['no'];
                        let answer = element['answer'];
                        if (answer === "") {
                            element['score'] = 0
                        } else {
                            element['score'] = 6
                        }
                        element['correct'] = "";
                        result['subjective_answer'].forEach((element_m) => {
                            if (element_m['no'] == no) {
                                element['correct'] = element_m['correct']
                            }
                        })
                    })
                    this.subjective_list = result['subjective_list'];
                } else {
                    this.$message({
                        message: "信息收集错误！",
                        type: "warning"
                    })
                }
            })
    },
    methods: {
        submit() {
            this.subjective_list.forEach((element) => {
                this.subjective_score += element.score;
            })
            let score = this.choose_score + this.judge_score + this.subjective_score + this.input_score;
            this.$axios.post("/apis/evaluate_exam", {
                "student_no": this.student_no,
                "exam_no": this.exam_no,
                "score": this.score
            })
            .then(response => {
                if (reponse.data.code === 200) {
                    this.$message({
                        type: "success",
                        message: response.data.message
                    })
                } else {
                    this.$message({
                        type: "warning",
                        message: response.data.message
                    })
                }
            })
        }
    }
}
</script>