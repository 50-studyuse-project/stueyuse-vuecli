<template>
    <div>
        <router-link to="/mSchool">显示学校组件</router-link>
        <router-link to="/mStudent/aa/bb">显示学生组件</router-link>

        <hr/>
        <router-view></router-view>
    </div>
</template>

<script>
    export default
    {
        name: 'App',
        mounted: function()
        {
            console.log('数据：', this);
        }
    }
</script>

<style scoped>
    .router-link-active
    {
        background-color: aqua;
    }
</style>
