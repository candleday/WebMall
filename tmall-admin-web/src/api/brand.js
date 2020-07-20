import axios from '../plugins/http.js'

export function api_brandList(params) {
  return axios.get('/brand/list', {
    params
  })
}
