import axios from 'axios'

const host = 'http://localhost/api'
//注册账户
export const register = params => {
    return axios.post((`${host}/register`), {params: params}, {
        headers: {'Content-Type': 'application/x-www-form-urlencoded'}
    })
}