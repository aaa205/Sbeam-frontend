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