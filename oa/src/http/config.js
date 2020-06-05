import http from 'http'
import https from 'https'

// console.log('env:',process.env.NODE_ENV)

export default {
  // 自定义的请求头
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
    'X-Agent': 'linker'
  },
  // 超时设置
  timeout: 60000,
  // 跨域是否带Token
  withCredentials: true,
  // 响应的数据格式 json / blob /document /arraybuffer / text / stream
  responseType: 'json',
  // XSRF 设置
  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',
  // 用于node.js
  httpAgent: new http.Agent({
    keepAlive: true
  }),
  httpsAgent: new https.Agent({
    keepAlive: true
  })
}
