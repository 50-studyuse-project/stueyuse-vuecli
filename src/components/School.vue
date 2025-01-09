<template>
    <div>
        <button @click="sendReq">点我发送请求</button>
    </div>
</template>

<script>
    import axios from "axios";

    export default
    {
        name: 'School',
        methods:
        {
            sendReq: function ()
            {
                axios.get('/abc/mycon/curt') // 请求自己所在的服务器，可以不用加协议、主机、端口，会自己加上.
                .then
                (
                    resp =>
                    {
                        console.log('请求成功：', resp)
                    },
                    err =>
                    {
                        console.log('请求失败：', err)
                    }
                );
            }
        }
    }
</script>

<style scoped>
</style>