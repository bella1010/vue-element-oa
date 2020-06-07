import '@babel/polyfill'
import Vue from 'vue'
import './plugins/element.js'

import App from './App.vue'
import router from './router'
import store from './store'
import config from '@/config'
import installPlugin from '@/plugin'


console.log(process.env.NODE_ENV)

/**
 * @description 注册admin内置插件
 */ 
installPlugin(Vue)

/**
 * @description 生产环境关掉提示
 */
Vue.config.productionTip = false


/**
 * @description 全局注册应用配置
 */
Vue.config.$config = config

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
