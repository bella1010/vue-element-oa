import Home from '@/pages/Index'

export default[
  {
    path: '/',
    name: 'home',
    redirect: '/index',
    component: Home,
    meta: {
      title: '首页',
    }
  },
  // {
  //   path: '/list',
  //   name: 'list',
  //   redirect: '/list',
  //   component: '@/pages/list.vue',
  //   meta: {
  //     title: '首页',
  //   }
  // },
]