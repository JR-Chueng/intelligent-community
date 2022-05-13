/*
 * @Author: zhangjiarun
 * @Date: 2022-05-07 17:16:19
 * @LastEditors: [you name]
 * @LastEditTime: 2022-05-13 11:20:56
 * @Description: 文件头的一些描述
 */
import router from '@/router'
import instance from '@/net/http'
import qs from 'qs'
import store from '@/store/index' // vuex
import { Message } from 'element-ui' // element
// import axios from 'axios' // axios

export async function toLogin(param) {
    const url = '/opus-front-sso/authentication/form'
    const auth = window.btoa('smart-community:smart-community@2022')
    const result = await instance.post(url, qs.stringify(param), {
        headers: {
            Authorization: 'Basic ' + auth,
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    })

    return result
}

/**
 * @Author: ag.
 * @description:
 * @param {*}
 * @return {*}
 */
export async function loginOut() {
    store.commit('setToken', '')
    store.commit('setUser', {})
    store.commit('emptyProject')
    store.commit('setIsLogin', false)
    sessionStorage.removeItem('isFirstFail')
    Message({
        type: 'success',
        message: '已退出登录!'
    })
    setTimeout(() => {
        router.push({ path: '/login' })
    }, 1000)
}
