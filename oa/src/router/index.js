import Vue from 'vue'
import Router from 'vue-router'
import routes from './routers'
import store from '@/store'
import {setTitle,getHasLogin} from '@/libs/util'
import config from '@/config'
const { publicPath } = config

Vue.use(Router)

const router = new Router({
  routes,
  base:publicPath,
  mode:'history'
})

// 需要登录的路由名称
const needLoginRouter = [
  // 'orderSubmit'
]

const turnTo = (fn) =>{
  const hasLogin  = getHasLogin()
  if(!hasLogin){
    window.location.href = ''
  }else{
    fn()
  }
}

router.beforeEach((to,from,next)=>{
  if(needLoginRouter.indexOf(to.name)!=-1 || store.state.loginUserInfo){
    // 如果未登录跳转到登录页面
    turnTo(()=>{
      next()
    })
  }
  // 拉取用户信息，通过用户权限和跳转页面的name来判断是否有权限访问
  // access 必须是一个数组
  // store.dispatch('getUserInfo').then(user=>{
  //   turnTo(()=>{
  //     next()
  //   })
  // }).catch(()=>{
  //   next()
  // })
})

router.afterEach(to=>{
  setTitle(to,router.app)
  window.scrollTo(0,0)
})

console.log(router)

export default router