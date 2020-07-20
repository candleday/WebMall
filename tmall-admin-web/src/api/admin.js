// 登录相关的请求
// 登录
import axios from '../plugins/http.js'
export function api_login(username, password) {
  return axios.post('/admin/login', {
    username,
    password //ES6支持的语法
  })
}

// 登出
export function api_logout() {
  return axios.post('/admin/logout')
}

export function api_info() {
  return axios.get('/admin/info')
}
