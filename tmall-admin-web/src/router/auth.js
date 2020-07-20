import router from './index'

// 白名单
const whileList = ['/login']
//将导航守卫给挂载到$Router
router.beforeEach((to, from, next) => {
  // console.log(to, from)
  if (whileList.indexOf(to.path) != -1) {
    next()
  } else {
    const token = window.sessionStorage.getItem('token')
    if (token) {
      next()
    } else {
      next('/')
    }
  }
})
