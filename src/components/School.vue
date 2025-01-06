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
        mounted: function ()
        {
            pubsub.publish('sName', {a: 1, b: '这是b'})
        }
    }
</script>

<style scoped>
</style>