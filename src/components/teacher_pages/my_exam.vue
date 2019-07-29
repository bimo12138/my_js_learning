<template>
    <div>
        <h1>我的试卷</h1>
    </div>
</template>


<script>
export default {
    created() {
        this.$axios.get("/apis/exam", {
            params: {
                "username": this.$store.state.username
            }
        })
        .then(response => {
            if(response.data.code === 200) {
                console.log(response.data)
            }
        })
    }
}
</script>