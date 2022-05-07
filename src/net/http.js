/*
 * @Description: axios请求拦截配置
 * @Author: gy
 * @Date: 2022-04-28 15:22:25
 * @LastEditors: [you name]
 * @LastEditTime: 2022-05-07 17:39:19
 */
import axios from 'axios' // axios
import store from '@/store/index' // vuex
import { MessageBox, Message } from 'element-ui' // element
import { loginOut } from './api/login'
// 创建instance实例
const instance = axios.create()

// 相应超时时间
instance.defaults.timeout = 1000 * 60

// 请求头配置
instance.defaults.headers.post['Content-Type'] =
    'application/x-www-form-urlencoded;charset="ISO-8859-1"'
instance.defaults.headers.post['Accept'] = 'application/json; charset=utf-8'
instance.defaults.headers.common['Authorization'] =
    localStorage.getItem('token')

// 请求拦截器
instance.interceptors.request.use(
    config => {
        // TODO: 如果需要针对 不同url 请求做不同的设置。
        // 登录流程控制中，根据本地是否存在token判断用户的登录情况
        // 但是即使token存在，也有可能token是过期的，所以在每次的请求头中携带token
        // 后台根据携带的token判断用户的登录情况，并返回给我们对应的状态码
        // 而后我们可以在响应拦截器中，根据状态码进行一些统一的操作。

        // const token = localStorage.getItem('token');
        const token = store.state.user.token
        token && (config.headers.Authorization = token)
        return config
    },
    error => Promise.error(error)
)
// 请求失败后的错误统一处理 status, other
const errorHandle = status => {
    const isFirstFail = sessionStorage.getItem('isFirstFail') == null
    switch (status) {
        // 401: 未登录状态，跳转登录页
        // 403: token过期，清除token并跳转登录页
        case 401:
        case 403:
            // 防止重复提示
            if (isFirstFail) {
                sessionStorage.setItem('isFirstFail', 'Y')
                MessageBox({
                    type: 'warning',
                    title: '提示',
                    message: '登录已过期,请重新登录!',
                    confirmButtonText: '确定',
                    closeOnClickModal: false,
                    closeOnPressEscape: false,
                    showClose: false,
                    callback: () => {
                        loginOut()
                    }
                })
            }
            break
        // 404：请求不存在
        case 404:
            Message({
                type: 'error',
                message: '接口不存在，请联系管理员。'
            })
            break
        // 其他情况
        default:
            Message({
                type: 'error',
                message: '接口异常，请联系管理员。'
            })
    }
}

// 响应拦截器
instance.interceptors.response.use(
    res => res.status === 200 ? Promise.resolve(res.data) : Promise.reject(res),
    error => {
        const { response } = error
        if (response) {
            // 请求已发出，但是不在2xx的范围
            errorHandle(response.status, response.data.message)
            return Promise.reject(response)
        } else {
            // TODO: 处理断网的情况
            // eg:请求超时或断网时，更新state的network状态
            // network状态在app.vue中控制着一个全局的断网提示组件的显示隐藏
            // 关于断网组件中的刷新重新获取数据，会在断网组件中说明
            if (!window.navigator.onLine) {
                //  store.commit('changeNetwork', false);
            } else {
                return Promise.reject(error)
            }
        }
    }
)

/**
 * @Author: ag.
 * @description:
 * @param {*} param
 * @return {*}
 */

export default instance
