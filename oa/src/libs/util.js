import Cookies from 'js-cookie'
// cookie保存的天数
import config from '@/config'
import defaultImage from '_a/images/pro-200.png';
const {
  title,
  cookieExpires,
  useI18n
} = config

export const HAS_LOGIN = 'has_login';
const imgBasePath = config.imgBasePath;

export const getHasLogin = () => {
  const hasLogin = Cookies.get(HAS_LOGIN)
  if (hasLogin) return hasLogin
  else return false
}

/**
 * @description 根据当前跳转的路由设置显示在浏览器标签的title
 * @param {Object} routeItem 路由对象
 * @param {Object} vm Vue实例
 */
export const setTitle = (routeItem, vm) => {
  const handledRoute = getRouteTitleHandled(routeItem)
  const pageTitle = showTitle(handledRoute, vm)
  const resTitle = pageTitle ? `${title} - ${pageTitle}` : title
  window.document.title = resTitle
}
