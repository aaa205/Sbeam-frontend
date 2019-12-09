const state = {
    items: [],//[{id,quantity,price,name,description,logo_img}]

}

const getters = {
    cartTotalPrice: state => {
        return state.items.reduce((total, item) => {
            return total + item.price * item.quantity
        }, 0)
    }
}
const actions = {
    setAllItems({commit},items){
        commit('setItems',items)
    }

}
const mutations = {
    incrementItemQuantity(state, {id}) {
        const cartItem = state.items.find(item => item.id === id)
        cartItem.quantity++
    },
    reductionItemQuantity(state, {id}) {
        const cartItem = state.items.find(item => item.id === id)
        cartItem.quantity--
    },
    deleteItem(state, {id}) {
        let i = state.items.findIndex(item => item.id === id)
        state.items.splice(i, 1)//删除该元素
    },
    setItems(state,items){
        state.items=items
    }
}
export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
