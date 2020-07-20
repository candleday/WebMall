import axios from '../plugins/http.js'

export function api_orderList(params) {
  return axios({
    url: '/order/list',
    method: 'get',
    params: params
  })
}

// export function api_updateOrderStatus(type, params) {
//   console.log('api_updateOrderStatus', params)
//   return axios({
//     url: `/order/update/${type}`,
//     method: 'post',
//     data: params
//   })
// }
