import axios from 'axios'
import config from './config'

if (process.server) {
  config.baseURL = `http://${process.env.HOST || 'localhost'}:${process.env.PORT || 8689}`
}

const service = axios.create(config)


//请求拦截
service.interceptors.request.use(config => {

    return config
  }, error => {
    return Promise.reject(error)
  }
)
//响应拦截
service.interceptors.response.use(res => {
  return res.data;
}, error => {

  return Promise.reject(error)
})

export default service
