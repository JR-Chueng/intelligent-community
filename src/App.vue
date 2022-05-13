<!--
 * @Author: zhangjiarun
 * @Date: 2022-03-30 18:28:32
 * @LastEditors: [you name]
 * @LastEditTime: 2022-05-11 10:27:36
 * @Description: 文件头的一些描述
-->
<template>
    <div id="app">
        <router-view />
    </div>
</template>

<style lang="scss">
@import '~@/style/reset.css';
@import '~@/style/base.css';

#app {
    overflow: hidden;
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    font-size: 16px;
}
</style>
