<template>
    <div>
        学校名称是：{{name}} <br>
        <slot>这是默认值，如果没有传进来的的话，就显示默认值.</slot>
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