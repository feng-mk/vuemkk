<template>
<div>我是Jack组件 - {{ msg }}</div>
</template>
    
<script>
// 这里写法完全等价于之前的组件配置对象的写法
// 但是这里不配 template，因为 template 在上面配置
export default {
    data () {
        return {
            msg:'zs'
        }
    },
    methods: {
        fn () {
            console.log(1111)
        }
    },
    // watch  computed  created
}
</script>

<style>
div{
    width: 300px;
    height: 300px;
    background: red;
}
</style>