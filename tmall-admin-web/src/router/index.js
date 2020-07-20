import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login' //转发的路径
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/home',
    name: 'Home',
    redirect: '/welcome',
    // 懒加载，只有使用的时候才会调用
    component: () => import('../views/Home.vue'),
    children: [
      {
        path: '/about',
        name: 'About',
        // 懒加载，只有使用的时候才会调用
        component: () => import('../views/About.vue')
      },
      {
        path: '/welcome',
        name: 'Welcome',
        // 懒加载，只有使用的时候才会调用
        component: () => import('../views/Welcome.vue')
      },
      {
        path: '/pms/product',
        name: 'Product',
        // 懒加载，只有使用的时候才会调用
        component: () => import('../views/pms/Product.vue')
      },
      {
        path: '/pms/addProduct',
        name: 'AddProduct',
        // 懒加载，只有使用的时候才会调用
        component: () => import('../views/pms/AddProduct')
      },
      {
        path: '/pms/productCate',
        name: 'ProductCate',
        // 懒加载，只有使用的时候才会调用
        component: () => import('../views/pms/ProductCate.vue')
      },
      {
        path: '/pms/productAttr',
        name: 'ProductAttr',
        // 懒加载，只有使用的时候才会调用
        component: () => import('../views/pms/ProductAttr.vue')
      },
      {
        path: '/pms/brand',
        name: 'Brand',
        // 懒加载，只有使用的时候才会调用
        component: () => import('../views/pms/Brand.vue')
      }
    ]
  }
]

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

const router = new VueRouter({
  routes
})

export default router
