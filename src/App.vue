<!--
 * @Author: zhangjiarun
 * @Date: 2022-03-30 18:28:32
 * @LastEditors: [you name]
 * @LastEditTime: 2022-05-07 16:24:14
 * @Description: 文件头的一些描述
-->
<template>
    <div id="app">
        <router-view />
    </div>
</template>

<style lang="scss">
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

nav {
    padding: 30px;

    a {
        font-weight: bold;
        color: #2c3e50;

        &.router-link-exact-active {
            color: #42b983;
        }
    }
}
</style>
