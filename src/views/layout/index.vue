<!--
 * @Author: zhangjiarun
 * @Date: 2022-05-07 14:28:16
 * @LastEditors: [you name]
 * @LastEditTime: 2022-05-07 16:33:58
 * @Description: 文件头的一些描述
-->
<template>
    <div>
        <nav>
            <router-link v-for="item in pages" :key="item.name" :to="item.name">
                {{ item.name }} |
            </router-link>
        </nav>
        <router-view />
    </div>
</template>

<script>
export default {
    data() {
        return {
            pages: [
                // { name: 'profile' }, // 社区概况
                { name: 'govern' }, // 社区治理
                { name: 'remould' }, // 社区改造
                { name: 'intelligentTraffic' }, // 智慧通行
                { name: 'buildingManagement' }, // 房屋管理
                { name: 'diseaseControl' }, // 疫情防控
                { name: 'neighbourhood' }, // 邻里社群
                { name: 'environmental' } // 绿色社区
            ]
        }
    }
}
</script>
