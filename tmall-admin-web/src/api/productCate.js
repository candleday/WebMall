import axios from '../plugins/http.js'

export function api_listWithChildren() {
  return axios.get('/productCategory/list/withChildren')
}

export function api_productCateGorylist() {
  return axios({
    url: '/productCategory/list/0',
    method: 'get'
    // params: params
  })
}
