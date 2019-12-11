import {buy} from "@/apis/api";

const state = {
    items: []//[{id,quantity,price,name,description,logo_img,isSelected}]
}

const getters = {
    cartTotalPrice: state => {
        return state.items.reduce((total, item) => {
            if (item.isSelected)
                return total + item.price * item.quantity
            else
                return total
        }, 0)
    },
    isAllSelected: state => {
        if (state.items.length == 0)
            return false
        for (let i = 0, l = state.items.length; i < l; i++) {
            if (!state.items[i].isSelected) {
                return false
            }
        }
        return true
    },
    isEmpty: state => {
        return state.items.length == 0
    }
}
const actions = {
    setAllItems({commit}, items) {
        commit('setItems', items)
    },
    delete({commit}, item) {
        commit('deleteItem', item)
    },
    buyProducts({commit}) {
        //合并数据
        let selected = state.items.filter(x=>x.isSelected).map(i=>{
            return{
                product_id:i.id,
                quantity:i.quantity
            }
        })
        window.console.log("sel:" +selected)
        buy({items: selected}).then(resp => {
            if (resp.status == 200) {
                selected.forEach(x => {
                    commit('deleteItem', {id: x.product_id})
                })
            } else {
                window.console.log(resp.data)
            }
        })
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
        let item = state.items.find(x => x.id === id)
        if (item)
            item.isSelected = true
    },
    notSelectItem(state, {id}) {
        let item = state.items.find(x => x.id === id)
        if (item)
            item.isSelected = false
    }
}
export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
