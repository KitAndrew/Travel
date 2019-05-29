import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      // 异步加载 也就是需要哪个组件加载哪个组件
      component: () => import('@/pages/home/Home')
    },
    {
      path: '/city',
      name: 'City',
      component: () => import('@/pages/city/City')
    },
    {
      path: '/detail/:id',
      name: 'Detail',
      component: () => import('@/pages/detail/Detail')
    }
  ],
  // 切换页面时从最顶部开始显示
  scrollBehavior (to, from, savedPosition) {
    return {
      x: 0, y: 0
    }
  }
})
