<template>
    <div>
        这是学生组件，学生照片如下 <br>
        <img v-bind:src="stuImg" width="20%"/>
    </div>
</template>

<script>
    export default
    {
        name: 'Stuent',
        data: function ()
        {
            return {
                stuImg: 'https://w.wallhaven.cc/full/yx/wallhaven-yx195k.jpg'
            };
        },
        mounted: function()
        {
            console.log('数据3：', this);
        }
    }
</script>

<style scoped>
</style>