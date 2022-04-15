/**
 * 存放全局公用状态
 */
import settings from '@/settings'

const state = {
    ...settings,
    // 页面标题
    title: '',
    // 是否作为子应用内嵌到其他系统的iframe中
    isInIframe: false
}

const getters = {}

const actions = {}

const mutations = {
    // 设置网页标题
    setTitle(state, title) {
        state.title = title
    },
    setIsFullScreen(state, isFullScreen) {
        state.isFullScreen = isFullScreen
    },
    setIsInIframe(state, isInIframe) {
        state.isInIframe = isInIframe
    },
    // 切换侧边栏导航展开/收起
    toggleSidebarCollapse(state) {
        state.sidebarCollapse = !state.sidebarCollapse
    }
}

export default {
    namespaced: true,
    state,
    actions,
    getters,
    mutations
}
