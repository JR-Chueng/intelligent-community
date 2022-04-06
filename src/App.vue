<!--
 * @Author: zhangjiarun
 * @Date: 2022-03-30 18:28:32
 * @LastEditors: [you name]
 * @LastEditTime: 2022-04-06 10:04:54
 * @Description: 文件头的一些描述
-->
<template>
    <div id="app">
        <img alt="Vue logo" src="./assets/logo.png">
        <hello-world msg="Welcome to Your Vue.js App" />
    </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
    name: 'App',
    components: {
        HelloWorld
    }
}
</script>

<style>
#app {
    margin-top: 60px;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    text-align: center;
    color: #2c3e50;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
</style>
