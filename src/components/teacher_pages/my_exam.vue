<template>
    <div>
        3
        <h1>我的试卷</h1>
        <el-table :data="exam_data" border empty-text="Null">
            <el-table-column label="考试序号" width="80" prop="exam_no"></el-table-column>
            <el-table-column label="考试名" width="240" prop="exam_name"></el-table-column>
            <el-table-column label="考试开始时间" width="240" prop="start_time"></el-table-column>
            <el-table-column label="考试结束世界" width="240" prop="end_time"></el-table-column>
            <el-table-column label="考试时间" width="80" prop="exam_time"></el-table-column>
            <el-table-column label="考试总分" width="80" prop="score_count"></el-table-column>
            <el-table-column label="上传时间" width="240" prop="upload_time"></el-table-column>
            <el-table-column label="操作" width="180" align="center">
                <template slot-scope="scope">
                    <el-button type="primary" @click.native.prevent="detail(scope.$index)"> 查看 </el-button>
                    <el-button type="default" @click.native.prevent="delete_row(scope.$index)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>


<script>
export default {
    data() {
        return {
            exam_data: []
        }
    },
    created() {
        this.$axios.get("/apis/exam", {
            params: {
                "username": this.$store.state.username
            }
        })
        .then(response => {
            if(response.data.code === 200) {
                this.exam_data = response.data.message;
                this.exam_data.forEach((item, index) => {
                    item.start_time = this.timestamp_to_time(item.start_time);
                    item.end_time = this.timestamp_to_time(item.end_time);
                })
            }
        })
        
    },
    methods: {
        timestamp_to_show_time(timestamp) {
            let show_time = new Date(timestamp);
            return show_time;
        },
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
        detail (e) {
            let exam_no = this.exam_data[e].exam_no;
            this.$router.push({
                path: "/teacher/exam/" + exam_no
            })
        },
        delete_row (e) {
            let exam_no = this.exam_data[e].exam_no;
            let exam_name = this.exam_data[e].exam_name;
            
            this.$axios.delete("/apis/exam", {
                params: {
                    exam_no: exam_no
                }
            })
            .then((res) => {
                console.log(res);
                if(res.data.code === 200) {
                    this.$notify({
                        title: "成功",
                        message: exam_name + res.data.message,
                        type: "success"
                    });
                    this.exam_data.splice(e, 1);
                } else {
                    this.$notify({
                        title: "警告",
                        message: res.data.message,
                        type: "warning"
                    })
                }
            })
        }
    }
}
</script>