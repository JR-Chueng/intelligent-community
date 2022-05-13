/*
 * @Author: zhangjiarun
 * @Date: 2022-04-14 16:51:21
 * @LastEditors: [you name]
 * @LastEditTime: 2022-05-12 16:25:21
 * @Description: 文件头的一些描述
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
// import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const pages = [
    // { name: 'profile' }, // 社区概况
    { name: 'govern' }, // 社区治理
    { name: 'remould' }, // 社区改造
    { name: 'intelligentTraffic' }, // 智慧通行
    { name: 'buildingManagement' }, // 房屋管理
    { name: 'diseaseControl' }, // 疫情防控
    { name: 'neighbourhood' }, // 邻里社群
    { name: 'environmental' } // 绿色社区
]

const routes = [
    {
        path: '/home',
        // name: 'home',
        component: () => import('../views/layout/index.vue'),
        children: [
            {
                path: '',
                name: 'profile',
                component: () => import('../views/profile/index.vue')
            }
        ]
    },
    // 登录
    {
        path: '/',
        name: 'login',
        component: () => import('../views/login/index.vue')
    },
    {
        path: '/entry',
        name: 'entry',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/entry.vue')
    }
]

pages.forEach(item => {
    routes[0].children.push({
        path: `/${item.name}`,
        name: `${item.name}`,
        component: () => import(`../views/${item.name}/index.vue`)
    })
})

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
