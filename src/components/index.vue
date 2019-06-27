<template>
<div>
    <el-alert title="成功提示的文案" type="success" description="这是一个成功信息！" show-icon></el-alert>
    <el-alert title="消息提示的文案" type="info" description="这是一个提示信息！" show-icon></el-alert>
    <el-alert title="警告提示的文案" type="warning" description="这是一个警告消息！" show-icon></el-alert>
    <el-alert title="错误提示的文案" type="error" description="这是一个错误消息" show-icon></el-alert>

    <div style="margin-top: 20px" @change="status_change">
        <el-radio v-model="sex" label="男" border size="medium">男</el-radio>
        <el-radio v-model="sex" label="女" border size="medium">女</el-radio>
    </div>



    </div>
    
</template>


<script>
  export default {
    data () {
      return {
        sex: "男"
      };
    },
    methods: {
        status_change:function () {
            alert(this.sex);
        }
    }

  }
</script>