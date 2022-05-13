/*
 * @Author: zhangjiarun
 * @Date: 2022-05-12 14:25:37
 * @LastEditors: [you name]
 * @LastEditTime: 2022-05-12 16:17:02
 * @Description: 文件头的一些描述
 */
import settings from '@/settings'

const storage = {}

storage.local = {
    has: key => {
        return !!localStorage.getItem(`${settings.storagePrefix}${key}`)
    },
    get: key => {
        return localStorage.getItem(`${settings.storagePrefix}${key}`)
    },
    set: (key, value) => {
        localStorage.setItem(`${settings.storagePrefix}${key}`, value)
    },
    remove: key => {
        localStorage.removeItem(`${settings.storagePrefix}${key}`)
    },
    clear: () => {
        localStorage.clear()
    }
}

storage.session = {
    has: key => {
        return !!sessionStorage.getItem(`${settings.storagePrefix}${key}`)
    },
    get: key => {
        return sessionStorage.getItem(`${settings.storagePrefix}${key}`)
    },
    set: (key, value) => {
        sessionStorage.setItem(`${settings.storagePrefix}${key}`, value)
    },
    remove: key => {
        sessionStorage.removeItem(`${settings.storagePrefix}${key}`)
    },
    clear: () => {
        sessionStorage.clear()
    }
}

export default storage
