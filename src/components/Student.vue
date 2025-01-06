<template>
    <div el="app">
        这是Student组件，学生名是：{{stuName}}
    </div>
</template>

<script>
    export default
    {
        el: '#app',
        name: "Student",
        data: function ()
        {
            return {
                stuName: '张三'
            };
        }
    }
</script>

<style scoped>
</style>