import { createRouter, createWebHistory } from "vue-router"
import store from "@/store/index"
import base from "@/views/base"
import login from "@/views/login/login"
import workplace from "@/views/dashboard/workplace"
import error404 from "@/views/error/404"


const routes = [
  {
    path: "/",
    name: "/",
    component: base,
    meta: {
      checkLogin: true
    },
    children: [
      {
        path: "/",
        name: "base",
        component: workplace,
      }, {
        path: "/404",
        name: "404",
        component: error404
      }
    ]
  },
  {
    path: "/login",
    name: "login",
    component: login
  }
]


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
//
// router.isReady().then(() => {
//   console.log('路由完成初始化')
//   const menuList = store.state.menu.menuList
//   injectionRouter(menuList, router)
//   console.log('路由添加完毕')
// })


router.beforeEach((to, from, next) => {

  if (!router.hasRoute(to.name) && to.name !== '404') {
    const routerList = router.getRoutes()
    const routerLen = routerList.filter(item => item.path === to.path)
    if (routerLen.length > 0) {
      next({
        ...to,
        replace: true
      })
    } else {
      next({
        path: '/404'
      })
    }
    return
  }
  if (to.matched.some(r => r.meta.checkLogin)) {
    if (store.state.authorization) {
      next()
    } else {
      localStorage.clear()
      next({
        path: "/login"
      })
    }
  } else {
    next()
  }
})




export default router
