<template>
    <div v-loading="loading" 
    element-loading-text="拼命加载中"
    element-loading-spinner="el-icon-loading"
    element-loading-background="rgba(0, 0, 0, 0.8)">
        <h1>参加考试</h1>
        <h2>一、选择题</h2>
        <div v-for="(element, index) in choose_list" v-bind:key="element.index">
            <h3>{{index + 1}}. {{element.title}}</h3>
            <el-radio-group v-model="element.answer">
                <el-radio :label="1">{{element.A}}</el-radio>
                <el-radio :label="2">{{element.B}}</el-radio>
                <el-radio :label="3">{{element.C}}</el-radio>
                <el-radio :label="4">{{element.D}}</el-radio>
            </el-radio-group>
        </div>
        <h2>二、判断题</h2>
        <div v-for="(element, index) in judge_list" v-bind:key="element.index">
            <h3>{{index + 1}}. {{element.title}}</h3>
            <el-radio-group v-model="element.answer">
                <el-radio :label="1">对</el-radio>
                <el-radio :label="0">错</el-radio>
            </el-radio-group>
        </div>
        <h2>三、填空题</h2>
        <div v-for="(element, index) in input_list" v-bind:key="element.index">
            <h3>{{index + 1}}. {{element.title}}</h3>
            <el-input v-model="element.answer"></el-input>
        </div>
        <h2>四、主观题</h2>
        <div v-for="(element, index) in subjective_list" v-bind:key="element.index">
            <h3>{{index + 1}}. {{element.title}}</h3>
            <el-input type="textarea" :rows="3" v-model="element.answer"></el-input>
        </div>
        <div class="button-group">
            <el-button type="warning" @click="save"> 保存 </el-button>
            <el-button type="primary"> 提交 </el-button>
        </div>
        

    </div>
</template>

<style>
    
    .box-card {
        width: 480px;
    }
    .el-radio-group {
        margin-top: 2em;
    }
    .el-radio {
        display: block;
        line-height: 2em;
        padding-left: 2em;
    }
    h2 {
        line-height: 3em;
        color: red;
    }
    .button-group {
        padding-top: 3em;
        margin: 0 auto;
        width: 300px;
    }
</style>
<script>
export default {
    data() {
        return {
            available_exam_list: [],
            loading: true,
            choose_list: [],
            input_list: [],
            subjective_list: [],
            judge_list: [],
            studnet_no: "",
            exam_no: ""
        }
    },
    created() {
        
    },
    mounted() {
        let exam_no = this.$route.params.exam_no;
        let student_no = this.$route.params.student_no;
        this.$axios.get("/apis/take_exam", {
            params: {
                exam_no: exam_no,
                student_no: student_no
            }
        })
        .then(response => {
            this.studnet_no = studnet_no;
            this.exam_no = exam_no;
            if(response.data.code === 200) {
                this.available_exam_list = eval("(" + response.data.message+ ")");
                this.loading = false;
                this.format_exam(this.available_exam_list);

            } else {
                console.log(response)
                this.$message({
                    message: "信息收集错误！",
                    type: "warning"
                })
            }
        })
    },
    methods: {
        format_exam(exam_list) {
            this.choose_list = exam_list['choose_list'];
            this.judge_list = exam_list['judge_list'];
            this.input_list = exam_list['input_list'];
            this.subjective_list = exam_list['subjective_list'];
        },
        save() {
            this.$axios.post("/apis/take_exam", {
                "student_no": this.studnet_no,
                "exam_no": this.exam_no,
                "content": {
                    "choose_list": this.choose_list,
                    "judge_list": this.judge_list,
                    "input_list": this.input_list,
                    "subjective_list": this.subjective_list
                }
            })
            .then(response => {
                console.log(response);
            })
        }
    }
}
</script>