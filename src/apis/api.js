import axios from 'axios'

const host = 'http://localhost/api'
//注册账户
export const register = params => {
    return axios.post(`${host}/register`, params,{withCredentials: true})
}
//登录
export const login = params => {
    return axios.post(`${host}/login`, params,{withCredentials: true})
}
//注销登录
export const logout=()=>{
    return axios.get(`${host}/logout`,{withCredentials:true})
}
//获取GameCard
export const getGameCards = params => {
    return axios.get(`${host}/games`, {params: params})
}
//获取首页资源
export const getIndex = () => {
    return axios.get(`${host}/index`)//不传cookie
}
//获取游戏详情
export const getProductDetailById=id=>{
    return axios.get(`${host}/games/${id}`)
}
//获取购物车
export const getCartItems=()=>{
    return axios.get(`${host}/cart`,{withCredentials:true})
}
