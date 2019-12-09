const state = {
    items: [],//[{id,quantity,price,name,description,logo_img,isSelected}]
    selected: []//[id]
}

const getters = {
    cartTotalPrice: state => {
        return state.items.reduce((total, item) => {
            return total + item.price * item.quantity
        }, 0)
    },
    isAllSelected: state => {
        return state.items.length == state.selected.length
    }
}
const actions = {
    setAllItems({commit}, items) {
        commit('setItems', items)
    },
    delete({commit}, item) {
        commit('deleteItem', item)
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
        window.console.log("state : 删除 i")
    },
    setItems(state, items) {
        state.items = items
        state.items.forEach(x => {
            x.isSelected = false
        })
    },
    selectItem(state, {id}) {
        let isExist = state.selected.find(x => x === id)
        if (!isExist)
            state.selected.push(id)
    },
    notSelectItem(state, {id}) {
        let i = state.selected.findIndex(x => x === id)
        if (i != -1) {
            state.selected.splice(i, 1)
        }
    }
}
export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
