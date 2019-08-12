<template>
    <div>
        <h1>可参加考试</h1>
        <el-card v-for="item in valid_exam" :key="item.exam_no" shadow="hover" class="card-container"> 
            <div slot="header">
                <h3>{{item.exam_name}} <small class="upload-time"> 发布时间: {{item.upload_time}}</small></h3>
            </div>
            <div>
                <strong class="exam-no">考试序号: {{item.exam_no}}</strong> <br>
                <strong class="start-time-container">开始时间: {{item.start_time}}</strong>  <br>
                <span class="exam-time">考试时间: {{item.exam_time}}</span>
                <span class="exam-score">总分: {{item.score_count}}</span>
                <br>
                <strong class="end-time-container">结束时间: {{item.end_time}}</strong>
            </div>
            <el-button type="primary" class="active-btn" @click="add_exam(item.exam_no)">
                立刻参加
            </el-button>
        </el-card>
    </div>
</template>

<style>
    .card-container {
        margin-top: 2em;
        width: 30%;
        margin-left: 3%;
        display: inline-block;
    }
    .exam-no {
        margin-bottom: 2em;
        font-size: 1.3em;
    }
    .upload-time {
        float: right;
        color: gray;
        font-size: 0.8em;
    }
    .start-time-container {
        padding-left: 2em;
        color: blue;
    }
    .exam-time {
        padding-left: 2em;
        padding-right: 2em;
    }
    .end-time-container {
        padding-left: 2em;
        color: red;
    }
    .active-btn {
        float: right;
        margin-bottom: 1em;
    }
</style>


<script>
export default {
    data() {
        return {
            valid_exam: {}
        }
    },
    created() {
        this.$axios.get("/apis/active_exam")
        .then(response => {
            if(response.data.code === 200) {
                let valid_exam = response.data.message;
                valid_exam.forEach(element => {
                    element.start_time = this.timestamp_to_time(element.start_time);
                    element.end_time = this.timestamp_to_time(element.end_time);
                });
                this.valid_exam = valid_exam;
            }
        })
    },
    methods: {
        timestamp_to_time(date) {
            let date_format = new Date(Number(date + "000"));
            let year_format = date_format.getFullYear().toString();
            let mouth_format = date_format.getMonth().toString();
            let day_format = date_format.getDate().toString();
            let hour_format = date_format.getHours().toString();
            let minute_format = date_format.getMinutes().toString();
            let second_format = date_format.getSeconds().toString();
            return year_format + "-" + mouth_format + "-" + day_format + " " + hour_format + ":" + minute_format + ":" + second_format;
        },
        add_exam(exam_no) {
            this.$router.push({
                path: "/student/exam/" + exam_no
            })
        }
    }
}
</script>