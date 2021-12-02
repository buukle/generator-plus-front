import router from './index'
import store from '../store'
import NProgress from 'nprogress' // progress bar
import '@/components/NProgress/nprogress.less' // progress bar custom style
import notification from 'ant-design-vue/es/notification'
import { setDocumentTitle, domTitle } from '@/utils/domUtil'
import { i18nRender } from '@/locales'

NProgress.configure({ showSpinner: false }) // NProgress Configuration

function getCookie (cname) {
  var name = cname + '='
  var ca = document.cookie.split(';')
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i]
    while (c.charAt(0) == ' ') c = c.substring(1)
    if (c.indexOf(name) != -1) {
      return c.substring(name.length, c.length)
    }
  }
  return ''
}
router.beforeEach((to, from, next) => {
  NProgress.start()
  to.meta && typeof to.meta.title !== 'undefined' && setDocumentTitle(`${i18nRender(to.meta.title)} - ${domTitle}`)
  const authorization = getCookie('BK_AUTHCOOKIE')
  if (authorization) {
      if (store.getters.userInfo === null) {
        store.dispatch('GetInfo').then(res => {
          store.dispatch('GenerateRoutes').then(() => {
            router.addRoutes(store.getters.addRouters)
          })
          next()
        }).catch((e) => {
            console.log(e)
            notification.error({
              message: '错误',
              description: '请求用户信息失败，请重试'
            })
          })
      } else {
        next()
      }
  } else {
    const href = process.env.VUE_APP_LOGIN_CUBE_URL + '?redirect_url=' + process.env.VUE_APP_REDIRECT_URL
    window.location.href = href
  }
})

router.afterEach(() => {
  NProgress.done()
})
