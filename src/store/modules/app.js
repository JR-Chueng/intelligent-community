/*
 * @Author: zhangjiarun
 * @Date: 2022-04-15 16:33:28
 * @LastEditors: [you name]
 * @LastEditTime: 2022-05-07 14:19:47
 * @Description: 文件头的一些描述
 */
const state = {
    showMenuSearch: false, // 全局菜单搜索面板的状态
    changeSkin: false // 切换皮肤；目前只支持排水概览
}

const getters = {}

const mutations = {
    toggleShowMenuSearch(state) {
        state.showMenuSearch = !state.showMenuSearch
    },

    toggleSkin(state) {
        state.changeSkin = !state.changeSkin
    }
}

const actions = {}

export default {
    namespaced: true,
    state,
    actions,
    getters,
    mutations
}
