import axios from '@/plugins/http'

export function api_productAttributelist() {
  return axios({
    url: '/productAttribute/category/list',
    method: 'get'
  })
}
