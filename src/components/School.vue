<template>
    <div>
        这是学校组件，学校的名称是：{{name}}
    </div>
</template>

<script>
    import pubsub from 'pubsub-js'; // 引入pubsub-js

    export default
    {
        name: 'School',
        data: function ()
        {
            return {
                name: '北京小学校'
            };
        },
        methods:
        {
            receiveName: function (topic, data)
            {
                console.log('School组件收到数据：', data)
            }
        },
        mounted: function ()
        {
            this.pubId = pubsub.subscribe('sName', this.receiveName); // 订阅 sName topic
        },
        beforeDestroy: function ()
        {
            pubsub.unsubscribe(this.pubId); // 取消订阅
        }
    }
</script>

<style scoped>
</style>