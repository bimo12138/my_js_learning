<template>
    <div>
        <h1>参加考试</h1>
            <el-card v-for="element in available_exam_list" v-bind:key="element.exam_no" shadow="hover" class="box-card">
                <div slot="header">
                    <span>{{element.exam_name}}</span>
                    
                </div>
                <div>

                </div>
            </el-card>
    </div>
</template>

<style>
    
    .box-card {
        width: 480px;
    }
</style>
<script>
export default {
    data() {
        return {
            available_exam_list: []
        }
    },
    created() {
        this.$axios.get("/apis/active_exam")
        .then(response => {
            if(response.data.code === 200) {
                this.available_exam_list = response.data.message
            } else {
                
            }
        })
    }
}
</script>