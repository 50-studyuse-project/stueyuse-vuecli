<template>
    <div>
        学校的名称是：{{name}}
    </div>
</template>

<script>
    export default
    {
        name: 'School',
        data: function ()
        {
            return {
                name: '北京小学校'
            };
        }
    }
</script>

<style scoped>
</style>