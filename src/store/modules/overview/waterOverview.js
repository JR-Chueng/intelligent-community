/**
 * 水务概览图
 */
const state = {
    regionSelect: {
        show: true,
        regionCode: '',
        regionName: '广州市'
    }
}

const mutations = {
    setCurrentRegion(state, region) {
        state.regionSelect.regionCode = region.code
        state.regionSelect.regionName = region.name
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
