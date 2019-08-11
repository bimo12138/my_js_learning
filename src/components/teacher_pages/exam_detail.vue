<template>
<div class="container">
    <h1>{{exam_name}} 试卷详情</h1>
    <el-collapse accordion>
        <el-collapse-item name="radio">
            <template slot="title">
                选择题 &nbsp;&nbsp;&nbsp;<strong style="color: red;">{{choose_length}}</strong>
            </template>

            <ol v-for="(question, index) in choose_list" :key="question.no">
                <li>
                    <h3>{{index + 1}}. {{question.title}}</h3>
                    <ol type="A" class="choose_group">
                        <li>{{question.A}}</li>
                        <li>{{question.B}}</li>
                        <li>{{question.C}}</li>
                        <li>{{question.D}}</li>
                    </ol>
                    <h4 class="correct_answer">{{question.correct}}</h4>
                    <small class="analyse">{{question.analyse}}</small>
                </li>
            </ol>
        </el-collapse-item>
        <el-collapse-item name="classify">
            <template slot="title">
                判断题 &nbsp;&nbsp;&nbsp;<strong style="color: red;">{{judge_length}}</strong>
            </template>

            <ol v-for="(question, index) in judge_list" :key="question.no">
                <li>
                    <h3>{{index + 1}}. {{question.title}}</h3>
                    <h4 class="correct_answer" v-if="question.correct == 1">
                        <i class="el-icon-check"></i>
                    </h4>
                    <h4 class="correct_answer" v-else>
                        <i class="el-icon-close"></i>
                    </h4>
                    <small class="analyse">{{question.analyse}}</small>
                </li>
            </ol>
        </el-collapse-item>
        <el-collapse-item name="input">
            <template slot="title">
                填空题 &nbsp;&nbsp;&nbsp;<strong style="color: red;">{{input_length}}</strong>
            </template>

            <ol v-for="(question, index) in input_list" :key="question.no">
                <li>
                    <h3>{{index + 1}}. {{question.title}}</h3>
                    <h4 class="correct_answer">{{question.correct}}</h4>
                    <small class="analyse">{{question.analyse}}</small>
                </li>
            </ol>
        </el-collapse-item>
        <el-collapse-item name="answer">
            <template slot="title">
                解答题 &nbsp;&nbsp;&nbsp;<strong style="color: red;">{{subjective_length}}</strong>
            </template>
            <ol v-for="(question, index) in subjective_list" :key="question.no">
                <li>
                    <h3>{{index + 1}}. {{question.title}}</h3>
                    <h4 class="correct_answer">{{question.correct}}</h4>
                    <small class="analyse">{{question.analyse}}</small>
                </li>
            </ol>
        </el-collapse-item>
    </el-collapse>
</div>
    
</template>

<style>
    .choose_group {
        padding-left: 5em;
        padding-top: 1em;
        padding-bottom: 1em;
    }
    .correct_answer {
        color: red;
    }
    .correct_answer:before {
        content: "正确答案为: "
    }
    .analyse {
        display: block;
        background: #e3e3e3;
    }
    .analyse:before {
        content: "解析: "
    }
</style>
<script>
export default {
    data() {
        return {
            exam_name: "",
            choose_length: 0,
            input_length: 0,
            subjective_length: 0,
            judge_length: 0,
            input_list: [],
            choose_list: [],
            subjective_list: [],
            judge_list: []

        }
    },
    created() {

        
        let exam_no = this.$route.params.exam_no;
        
        this.$axios.get("/apis/exam_detail", {
            params: {
                exam_no
            }
        })
        .then( (res) => {
            this.exam_name = res.data.message.exam_name;
            let exam_message = eval("(" + res.data.message.exam_body + ")");
            // 初始化
            this.choose_list = exam_message.choose_list;
            this.input_list = exam_message.input_list;
            this.subjective_list = exam_message.subjective_list;
            this.judge_list = exam_message.judge_list;

            // 赋值 长度
            this.choose_length = this.choose_list.length;
            this.input_length = this.input_list.length;
            this.subjective_length = this.subjective_list.length;
            this.judge_length = this.judge_list.length;
        })
    }
}
</script>