import axios from 'axios'

const host = 'http://localhost/api'
//注册账户
export const register = params => {
    return axios.post((`${host}/register`), params)
}
//获取GameCard
export const getGameCards = () => {
    return axios.get(`${host}/games`)
}