<template>
    <div>
        这是学校组件，学校名称是：{{name}}

        <hr>
        {{sum}}

        <hr>
        <button @click="invockTest1">调用test1</button>
        <button @click="invockTest2">调用test2</button>
    </div>
</template>

<script>
    import {mapState} from 'vuex';

    export default
    {
        name: 'School',
        data: function ()
        {
            return {
                name: '双山完小'
            };
        },
        computed:
        {
            ...mapState('my1', ['sum'])
        },
        methods:
        {
            invockTest1: function ()
            {
                this.$store.commit('my1/TEST1', 11);
            },
            invockTest2: function ()
            {
                this.$store.dispatch('test2', '张大傻');
            },
        },
        mounted: function ()
        {
            console.log('School组件：', this.$store);
        }
    }
</script>

<style scoped>
</style>