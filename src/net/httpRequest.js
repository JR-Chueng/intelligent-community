/*
 * @Description: axios请求方法封装
 * @Author: gy
 * @Date: 2022-04-28 15:27:59
 * @LastEditors: [you name]
 * @LastEditTime: 2022-05-13 13:40:59
 */
// 引入instance请求拦截配置实例
import instance from './http'
import qs from 'qs'

// axios.get
const getByParams = function(url, params) {
    return instance.get(url, {
        params: params
    })
}

// // axios.get
// const getByParamsAndRequestForm = function(url, params) {
//     return instance.get(url, {
//         params: params,
//         headers: {
//             'Content-Type': 'application/x-www-form-urlencoded'
//         }
//     })
// }

// axios.get (arraybuffer文件流装换)
const getByParamsAndResponseType = function(url, params) {
    return instance.get(url, {
        params: params,
        responseType: 'arraybuffer'
    })
}

// axios.post
const postByParams = function(url, params) {
    return instance.post(url, null, {
        params: params
    })
}

// axios.post（JSON）
const postByJson = function(url, params) {
    return instance.post(url, JSON.stringify(params), {
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

// axios.post（formdata）
const postByFormData = function(url, params) {
    return instance.post(url, qs.stringify(params), {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    })
}

// axios.post（formdata格式，文件上传）
const postByFormDataFile = function(url, params) {
    return instance.post(url, params, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })
}

// axios.delete
const deleteByParams = function(url, params) {
    return instance.delete(url, {
        params: params
    })
}

// 调用axios.delete（json）
const deleteByJson = function(url, params) {
    return instance.delete(url, {
        data: JSON.stringify(params),
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

export {
    getByParamsAndResponseType,
    getByParams,
    // getByParamsAndRequestForm,
    postByParams,
    postByJson,
    postByFormData,
    postByFormDataFile,
    deleteByParams,
    deleteByJson
}
