/*
 * @Author: zhangjiarun
 * @Date: 2022-03-30 18:28:32
 * @LastEditors: [you name]
 * @LastEditTime: 2022-03-30 19:53:31
 * @Description: 文件头的一些描述
 */
import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
    render: h => h(App)
}).$mount('#app')
