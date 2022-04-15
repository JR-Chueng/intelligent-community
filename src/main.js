/*
 * @Author: zhangjiarun
 * @Date: 2022-03-30 18:28:32
 * @LastEditors: [you name]
 * @LastEditTime: 2022-04-15 17:12:33
 * @Description: 文件头的一些描述
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import ElementUI from 'element-ui'

import 'element-ui/lib/theme-chalk/index.css'
import '@/style/resetElement.scss' // 用于修改elment UI 库组件样式 暂未处理
import 'element-ui/lib/index.js'

Vue.use(ElementUI)
Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
