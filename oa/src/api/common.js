// import axios from '@/libs/api.request'
import {get, post} from '@/libs/api.request'

/**
 * 通过code获取Banner,
 * @param data {code:'302'}
 * @returns {*}
 */
export const getBannersByCode = (data) => {
  return get('/api/pshop/index/getBannersByCode', data)
}