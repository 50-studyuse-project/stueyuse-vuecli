<template>
    <div>
        这是Student组件，学生名是：{{stuName}} <br>
        <button @click="sendName">发送数据</button>
    </div>
</template>

<script>
    import pubsub from 'pubsub-js'; // 引入pubsub-js

    export default
    {
        name: "Student",
        data: function ()
        {
            return {
                stuName: '张三'
            };
        },
        methods:
        {
            sendName: function ()
            {
                pubsub.publish('sName', {stuName: this.stuName, a: 1, b: '这是b'}); // 🎆 发布消息
            }
        }
    }
</script>

<style scoped>
</style>