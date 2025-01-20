<template>
    <div>
        这是学校组件，学校名称是：{{name}}
    </div>
</template>



<script>
    export default
    {
        name: 'School',
        data: function ()
        {
            return {
                name: '双山完小'
            };
        }
    }
</script>



<style scoped>
</style>