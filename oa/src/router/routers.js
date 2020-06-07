import Main from '@/components/main'

export default[
  {
    path: '/',
    name: 'index',
    redirect: '/index',
    component: Main,
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