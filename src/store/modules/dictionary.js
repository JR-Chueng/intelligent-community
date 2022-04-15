
const state = () => ({
    // todo
    // 数字字典
    dictionary: {},

    // 行政区域
    area: [
        {
            name: '越秀区',
            value: '440104'
        },
        {
            name: '荔湾区',
            value: '440103'
        },
        {
            name: '海珠区',
            value: '440105'
        },
        {
            name: '天河区',
            value: '440106'
        },
        {
            name: '白云区',
            value: '440111'
        },
        {
            name: '黄埔区',
            value: '440112'
        },
        {
            name: '番禺区',
            value: '440113'
        },
        {
            name: '花都区',
            value: '440114'
        },
        {
            name: '南沙区',
            value: '440115'
        },
        {
            name: '增城区',
            value: '440118'
        },
        {
            name: '从化区',
            value: '440117'
        }
    ],

    // 所属流域
    basin: [
        {
            name: '联星',
            value: ''
        },
        {
            name: '枫木朗',
            value: ''
        },
        {
            name: '民乐',
            value: ''
        },
        {
            name: '黄茅',
            value: ''
        },
        {
            name: '上坪',
            value: ''
        },
        {
            name: '黄龙带水库',
            value: ''
        },
        {
            name: '温泉',
            value: ''
        },
        {
            name: '龙洞水库',
            value: ''
        },
        {
            name: '灌村',
            value: ''
        },
        {
            name: '花竹',
            value: ''
        }
    ],

    // 所属道路
    road: [
        {
            name: '广州大道中',
            value: ''
        },
        {
            name: '天河北',
            value: ''
        },
        {
            name: '小北',
            value: ''
        },
        {
            name: '动物园南',
            value: ''
        },
        {
            name: '龙口东',
            value: ''
        },
        {
            name: '时代广场',
            value: ''
        },
        {
            name: '龙口西',
            value: ''
        },
        {
            name: '黄埔大道',
            value: ''
        },
        {
            name: '科韵路',
            value: ''
        },
        {
            name: '天阳路',
            value: ''
        }
    ],

    // 所在河道
    river: [
        {
            name: '车陂涌上',
            value: ''
        },
        {
            name: '温泉',
            value: ''
        },
        {
            name: '分洪道口',
            value: ''
        },
        {
            name: '石碑桥上',
            value: ''
        },
        {
            name: '中大',
            value: ''
        },
        {
            name: '石角',
            value: ''
        },
        {
            name: '黄塘',
            value: ''
        },
        {
            name: '沙河涌下',
            value: ''
        },
        {
            name: '车陂涌上',
            value: ''
        },
        {
            name: '车陂旭景中',
            value: ''
        }
    ],

    // 所在水库
    reservoir: [
        {
            name: '水星水库',
            value: ''
        },
        {
            name: '渔公洞水库',
            value: ''
        },
        {
            name: '洪秀全水库',
            value: ''
        },
        {
            name: '增塘水库',
            value: ''
        },
        {
            name: '新坡水库',
            value: ''
        },
        {
            name: '黄埔',
            value: ''
        },
        {
            name: '三善',
            value: ''
        },
        {
            name: '磨刀坑水库',
            value: ''
        },
        {
            name: '银场水库',
            value: ''
        },
        {
            name: '南塘水库',
            value: ''
        }
    ],

    // 管养单位
    company: [
        {
            name: '联星',
            value: ''
        },
        {
            name: '枫木朗',
            value: ''
        },
        {
            name: '民乐',
            value: ''
        },
        {
            name: '黄茅',
            value: ''
        },
        {
            name: '上坪',
            value: ''
        },
        {
            name: '黄龙带水库',
            value: ''
        },
        {
            name: '温泉',
            value: ''
        },
        {
            name: '龙洞水库',
            value: ''
        },
        {
            name: '灌村',
            value: ''
        },
        {
            name: '花竹',
            value: ''
        }
    ]

})

const getters = { }

const actions = {

    // todo
    // 设置 数字字典
    set_dictionary({ commit }) {
        commit('SET_DATA', { key: 'dictionary', value: [] })
    },

    // 设置 data
    set_date({ commit }, { key, value }) {
        commit('SET_DATA', { key, value })
    }
}

const mutations = {
    SET_DATA: (state, { key, value }) => {
        state[key] = value
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
