import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios) //在vue对象中挂载$http属性

// eslint-disable-next-line no-unused-vars
// const instance = axios.create({
//   baseURL: 'http://118.89.176.28:8080',
//   timeout: 15000
// })

axios.defaults.baseURL = 'http://118.89.176.28:8080'
axios.defaults.timeout = 15000

// Add a request interceptor
axios.interceptors.request.use(
  function(config) {
    // Do something before request is sent
    //绑定到header中
    const token = window.sessionStorage.getItem('token')
    // console.log('token值为：' + token)
    if (token) {
      config.headers['Authorization'] = token
    }
    return config
  },
  function(error) {
    // Do something with request error
    return Promise.reject(error)
  }
)

// Add a response interceptor
axios.interceptors.response.use(
  function(response) {
    // Do something with response data
    console.log('response')
    return response
  },
  function(error) {
    // Do something with response error
    return Promise.reject(error)
  }
)

export default axios
