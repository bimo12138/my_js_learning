<template>
    <div>
        <h1>试卷</h1>
        <el-table :data="question_data" border>
            <el-table-column label="题型" prop="question_classify">

            </el-table-column>
            <el-table-column label="题号" prop="question_no">

            </el-table-column>
            <el-table-column label="题目">

            </el-table-column>
            <el-table-column label="A">

            </el-table-column>
            <el-table-column label="B">

            </el-table-column>
            <el-table-column label="C">

            </el-table-column>
            <el-table-column label="D">

            </el-table-column>
            <el-table-column label="正确答案" prop="currect_note">

            </el-table-column>
            <el-table-column label="解析">

            </el-table-column>
        </el-table>
        <el-button type="primary" icon="el-icon-download" id="download_exam">
            <a href="/static/demo.xlsx" target="_blank">下载试卷模板</a>
        </el-button>
    </div>
</template>

<style>
    #download_exam {
        float: right;
        margin: 1em 1em;
    }
    #download_exam a {
        text-decoration: none;
    }
</style>

<script>
export default {
    data() {
        return {
            question_data: [{
                question_classify: "1: 选择题",
                currect_note: "如果是选择题请直接输入选项。",
                question_no: "每个题型都从1开始编号。"
            }, {
                question_classify: "2: 填空题"
            }, {
                question_classify: "3: 判断题"
            }, {
                question_classify: "4: 解答题"
            }],
            demo_file: 1
        }        
    }
}
</script>