<template>
    <div>

        <el-form :model="exam_form" label-width="10em" :rules="rules" ref="exam_form">
            <el-form-item label="考试名: " prop="exam_name">
                <el-input v-model="exam_form.exam_name" placeholder="请输入考试名" class="medium_input"></el-input>
            </el-form-item>
            <el-form-item label="开始时间: " prop="start_time">
                <el-date-picker v-model="exam_form.start_time" type="datetime" placeholder="请输入考试开始时间" default-time="8:00:00" :picker-options="picker_options"></el-date-picker>
            </el-form-item>
            <el-form-item label="结束时间: " prop="end_time">
                <el-date-picker v-model="exam_form.end_time" type="datetime" placeholder="请输入考试结束时间" default-time="10:00:00" :picker-options="picker_options"></el-date-picker>
            </el-form-item>
            <el-form-item label="考试时间: " prop="last">
                <el-input v-model="exam_form.last" type="number" placeholder="请输入考试时间" class="short_input"></el-input>
            </el-form-item>
            <el-form-item label="总分: " prop="score">
                <el-input v-model="exam_form.score" type="number" placeholder="请输入总分" class="short_input"></el-input>
            </el-form-item>
            <el-form-item label="文件上传: ">
                <el-upload drag action="/apis/exam" :data="exam_form" :auto-upload="false" accept=".xls, .xlsx" :limit=1 :on-exceed="exceed_limit" ref="upload">
                    <i class="el-icon-upload"></i>
                    <div>将文件拖到此处，或<em>点击上传</em></div>
                </el-upload>
            </el-form-item>
            <el-form-item class="btn-group">
                <el-button>重置</el-button>
                <el-button type="primary" @click="submit_exam('exam_form')">提交</el-button>
            </el-form-item>
        </el-form>
        
    </div>
</template>

<style lang="">
    .short_input {
        width: 10em;
    }
    .medium_input {
        width: 20em;
    }
    .long_input {
        width: 30em;
    }
    .label_name {
        width: 10em;
    }
    .el-form-item__label {
        font-weight: bold;
        text-align: center;
        font-size: 1.1em;
    }
    .group_item {
        float: right;
        margin-right: 10em;
    }
    .btn-group {
        float: right;
        padding-right: 5em;
    }
</style>
<script>
export default {
    data() {
        return {
            exam_form: {
                exam_name: "",
                start_time: "",
                end_time: "",
                last: 120,
                score: 100,
                author: this.$store.state.username
            },
            picker_options: {
                shortcuts: [{
                    text: "今天",
                    onClick(picker) {
                        picker.$emit("pick", new Date());
                    }
                }, {
                    text: "明天",
                    onClick(picker) {
                        const date = new Date();
                        date.setTime(date.getTime() + 1000 * 3600 * 24);
                        picker.$emit("pick", date);
                    }
                }]
            },
            rules: {
                start_time: [
                    {type: "date", require: true, message: "请输入考试开始时间", trigger: "blur"}
                ],
                end_time: [
                    {type: "date", require: true, message: "请输入考试结束时间", trigger: "blur"}
                ],
                last: [
                    {type: "number", require: true, message: "请输入考试时间", trigger: "blur"}
                ],
                score: [
                    {type: "number", require: true, message: "请输入总分", trigger: "blur"}
                ],
                exam_name: [
                    { require: true, message: "请输入考试名", trigger: "blur" }
                ]
            }
        }
    },
    methods: {
        exceed_limit() {
            alert("每次仅可上传一个文件！");
        },
        submit_exam(form) {
            // 不知道为什么exam_name验证就是不出来
            if (this.exam_form.exam_name === "") {
                this.$message({
                    message: "请输入试卷名",
                    type: "warning"
                })
            } else {
                this.$refs[form].validate((valid) => {
                    if (valid) {
                        this.$refs.upload.submit();
                        this.$notify({
                            title: "成功",
                            message: this.exam_form.exam_name + "上传成功！",
                            type: "success"
                        })
                        this.$router.push({
                            path: "/teacher/my_exam"
                        })
                    }else {
                        this.$message({
                            message: "请把基本信息填写完整！",
                            type: "warning"
                        })
                    }
                })
            }
            
        }
    }
}
</script>