/**
 * 一张图地图相关的全局状态（量多后拆分）
 */
const state = {
    // 图层列表
    layerList: {
        removeCheckedLayerIds: [] // 需要移除选中的图层列表ID
    },

    // 图层信息面板
    layerInfoPanel: {
        data: [], // data: id 、title、component
        activeId: '', // 当前激活的图层信息面板ID
        visible: false
    },

    // 详情信息面板
    detailInfoPanel: {
        data: [], // 所有可用的详情面板信息，信息包括 id、title、component
        activeId: '', // 当前激活的详情信息面板ID
        graphic: null,
        visible: false,
        offsetZ: 0 // 面板 z-index 的偏移量
    }
}

const mutations = {

    /**
     * 图层列表
     */
    setRemoveCheckedLayerIds(state, ids) {
        state.layerList.removeCheckedLayerIds = ids
    },

    /**
     * 图层信息面板
     */
    // 添加图层信息项
    addLayerInfoItem(state, layerInfoItem) {
        const index = state.layerInfoPanel.data.findIndex(
            item => item.id === layerInfoItem.id
        )
        if (index === -1) {
            state.layerInfoPanel.data.push(layerInfoItem)
        }
    },
    // 移除图层信息项
    removeLayerInfoItem(state, id) {
        const index = state.layerInfoPanel.data.findIndex(
            item => item.id === id
        )
        if (index !== -1) {
            state.layerInfoPanel.data.splice(index, 1)
        }
    },
    // 设置当前激活的图层信息项
    setActiveLayerInfoItem(state, id) {
        state.layerInfoPanel.activeId = id
    },
    // 设置图层信息面板的可见性
    setLayerInfoVisible(state, visible) {
        state.layerInfoPanel.visible = visible
    },

    /**
     * 详情信息面板
     */
    // 添加详情信息项
    addDetailInfoItem(state, detailInfoItem) {
        const index = state.detailInfoPanel.data.findIndex(
            item => item.id === detailInfoItem.id
        )
        if (index === -1) {
            state.detailInfoPanel.data.push(detailInfoItem)
        }
    },
    // 移除详情信息项
    removeDetailInfoItem(state, id) {
        const index = state.detailInfoPanel.data.findIndex(
            item => item.id === id
        )
        if (index !== -1) {
            state.detailInfoPanel.data.splice(index, 1)
        }
    },
    // 设置详情信息面板的内容
    setDetailInfoPanel(state, detailInfoPanel) {
        state.detailInfoPanel.data = detailInfoPanel
    },
    // 设置当前激活的图层信息项
    setActiveDetailInfoItem(state, id) {
        state.detailInfoPanel.activeId = id
    },
    // 设置当前面板指向的graphic
    setDetailInfoItemGraphic(state, graphic) {
        state.detailInfoPanel.graphic = graphic
    },
    // 设置详情信息面板的可见性
    setDetailInfoVisible(state, visible) {
        state.detailInfoPanel.visible = visible
    },
    setDetailPanelOffsetZ(state, offsetZ) {
        state.detailInfoPanel.offsetZ = offsetZ
    }
}
const getters = {}
const actions = {
    // 移除图层信息项，并设置当前激活的图层信息项
    removeLayerInfoItem({ commit, state }, id) {
        // 移除图层信息项
        commit('removeLayerInfoItem', id)
        // 移除后设置当前激活的图层信息项
        if (state.layerInfoPanel.activeId === id) {
            const index = state.layerInfoPanel.data.findIndex(
                item => item.id === id
            )
            const nextTab =
                state.layerInfoPanel.data[index + 1] ||
                state.layerInfoPanel.data[index - 1]
            if (nextTab) {
                commit('setActiveLayerInfoItem', nextTab.id)
            }
        }
    },
    // 设置当前弹窗信息
    setCurrentDetailInfo({ commit }, detailInfo) {
        commit('setDetailInfoItemGraphic', detailInfo.graphic)
        commit('setActiveDetailInfoItem', detailInfo.activeId)
        commit('setDetailInfoVisible', detailInfo.visible)
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
