// import storage from '@/utils/storage'
// import { resetRouter } from '@/router'
// function getuserInfo() {
//     let userInfo = {}
//     try {
//         userInfo = JSON.parse(storage.session.get('userInfo'))
//     } catch (err) { err }
//     return userInfo
// }
// const state = {
//     userInfo: getuserInfo(),
//     account: storage.session.get('account'),
//     token: storage.session.get('token'),
//     failure_time: storage.session.get('failure_time'),
//     userCode: '', // 用于存放老巡检系统的用户信息
//     userId: storage.session.get('userId')
// }

// const getters = {
//     isLogin: state => {
//         let result = false
//         if (state.token) {
//             result = true
//             // const unix = Date.parse(new Date())
//             // if (unix < state.failure_time * 1000) {
//             //     result = true
//             // }
//         }
//         return result
//     }
// }

// const actions = {
//     login({ commit }, ythData) {
//         return new Promise(resolve => {
//             // login(data).then(res => {
//             // getToken(data).then(result => {
//             // if (result.success) {
//             const userData = JSON.parse(JSON.stringify(ythData.opusLoginUser.user)) 
//             userData.token = ythData.access_token
//             userData.account = ythData.opusLoginUser.user.userName
//             userData.userId = ythData.opusLoginUser.user.userId
//             userData.userInfo = ythData.opusLoginUser.user
//             commit('setUserData', userData)
//             // } else {
//             //     Message.error(result.message)
//             // }
//             resolve()
//             // })
//             // }).catch(error => { reject(error) })
//         })
//     },
//     logout({ commit }) {
//         commit('removeUserData')
//         commit('menu/invalidRoutes', null, { root: true })
//         commit('tabbar/clean', null, { root: true })
//         resetRouter()
//     },
//     resetToken({ commit }) {
//         return new Promise(resolve => {
//             commit('setUserData', {
//                 account: '',
//                 token: '',
//                 failure_time: ''
//             })
//             resolve()
//         })
//     }
// }

// const mutations = {
//     setUserData(state, data) {
//         console.warn('userInfo :>> ', data)
//         storage.session.set('account', data.account)
//         storage.session.set('userId', data.userId)
//         storage.session.set('token', data.token)
//         storage.session.set('failure_time', data.failure_time)
//         storage.session.set('userInfo', JSON.stringify(data.userInfo))
//         state.account = data.account
//         state.token = data.token
//         state.userId = data.userId
//         state.failure_time = data.failure_time
//         state.userInfo = data.userInfo
//     },
//     removeUserData(state) {
//         storage.session.remove('account')
//         storage.session.remove('token')
//         storage.session.remove('failure_time')
//         state.account = ''
//         state.token = ''
//         state.failure_time = ''
//     },
//     setUserCode(state, userCode) {
//         state.userCode = userCode
//     },
//     setToken(state, token) {
//         state.token = token
//     }
// }

// export default {
//     namespaced: true,
//     state,
//     actions,
//     getters,
//     mutations
// }
