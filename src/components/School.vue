<template>
    <div>
        学校名称是：{{name}}

        <hr>
        数据：{{zs}} {{long}}
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
            ...mapState(['zs', 'long'])
        }
    }
</script>

<style scoped>
</style>