const state = {
    info: null,
    isLogin: false
}
const getters = {}
const mutations = {
    setLogin(state, flag) {
        state.isLogin = flag
    },
    setInfo(state, userInfo) {
        state.info = userInfo
    }
}
const actions = {}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}