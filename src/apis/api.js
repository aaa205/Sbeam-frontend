import axios from 'axios'

const host = 'http://localhost/api'
//注册账户
export const register = params => {
    return axios.post(`${host}/register`, params)
}
//登录
export const login = params => {
    return axios.post(`${host}/login`, params)
}
//获取GameCard
export const getGameCards = () => {
    return axios.get(`${host}/games`,{withCredentials:false})
}
//获取首页资源
export const getIndex=()=>{
    return axios.get(`${host}/index`,{withCredentials:false})//不传cookie
}