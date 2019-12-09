const state = {
    info: {
        userName: '',
        userID: -1,
        avatar:''
    },
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
const actions = {
    logout({state,commit}){
        commit('setLogin',false)
        window.console.log(`vuex change :user ${state.info.name} logout`)
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}