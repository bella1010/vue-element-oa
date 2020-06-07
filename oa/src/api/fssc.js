// https://fssc.cecport.com:8443/wf/log/GeneralExpenseProcess/8a81e41e7176fd4c0171774f8f5c033a


// import axios from 'axios';
// export const getTableData = () => {
//   return axios.request({
//     url: 'get_table_data',
//     method: 'get'
//   })
// }


import {get} from '@/libs/api.request'

export const getWorkFlow = (params) => {
  return get('/wf/log/GeneralExpenseProcess/', params)
}
