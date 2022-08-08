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
      },
      {
        path: '/404',
        name: "404",
        component: error404
      }
    ]
  },
  {
    path: "/login",
    name: "login",
    component: login
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: "/404",
    hidden: true
  },
]


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(r => r.meta.checkLogin)) {
    if (store.state.authorization) {
      next()
    } else {
      localStorage.clear()
      next({
        path: "/login",
        query: {redirect: to.fullPath}
      })
    }
  } else {
    console.log(next())
    next()
  }
})

export default router
