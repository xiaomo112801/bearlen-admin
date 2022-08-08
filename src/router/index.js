import { createRouter, createWebHistory } from "vue-router"
import store from "@/store/index"
import base from "@/views/base"
import login from "@/views/login/login"
import workplace from "@/views/dashboard/workplace"
import { injectionRouter } from "@/utils/commen"
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

router.beforeEach((to, from, next) => {
  const menuList = store.state.menu.menuList
  injectionRouter(menuList, router)
  console.log(router.getRoutes())
  if (!router.hasRoute(to.name) && to.name !=='404') {
    next({
      path: "/404"
    })
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
