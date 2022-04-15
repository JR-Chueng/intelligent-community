const state = {
    showMenuSearch: false, // 全局菜单搜索面板的状态
    changeSkin: false // 切换皮肤；目前只支持排水概览
}

const mutations = {
    toggleShowMenuSearch(state) {
        state.showMenuSearch = !state.showMenuSearch
    },

    toggleSkin(state) {
        state.changeSkin = !state.changeSkin
    }
}

const actions = {

}

export default {
    namespaced: true,
    state,
    actions,
    mutations
}
