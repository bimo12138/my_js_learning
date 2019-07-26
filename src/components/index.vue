

<template>
    <div class="container">
        <h1 id="title">欢迎使用智慧校园考试系统</h1>
        <p class="text-field">
            <ol>
                <li>用户管理系统，包括用户注册、登录和注销</li>
                <li>邮箱激活功能，用户注册成功之后需要登陆邮箱进行激活</li>
                <li>分类功能，用户通过不同的分类进行答题</li>
                <li>机构注册功能，允许机构用户进行注册，注册成功之后自主出题</li>
                <li>快速出题功能，机构用户可以下载题库模板，根据模板创建题目，上传题库</li>
                <li>配置考试功能，机构用户可以配置考试信息，如设置考试题目、时间等内容</li>
                <li>答题功能，用户参与答题，可以选择上一题和下一题</li>
                <li>评分功能，用户答完所有题目之后，系统自动阅卷并显示用户考试结果</li>
                <li>排行榜功能，用户可以通过排行榜，查看考试成绩</li>
            </ol>
        </p>
    </div>
</template>

<style>
    .container {
        background: white;
        font-family: consolas;
    }
    #title {
        text-align: center;
        margin-bottom: 1em;
    }
    .text-field {
        width: 60%;
        margin-left: auto;
        margin-right: auto;
        padding: 1em 1em 1em 4em;
        border: 2px solid #e3e3e3;
        box-shadow: 0px 3px 5px 2px gray;
        font-size: 1.5em;
        margin-bottom: 5em;
    }
</style>
