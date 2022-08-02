import { createRouter, createWebHistory } from "vue-router"
import store from "@/store/index"
import base from "@/views/base"
import login from "@/views/login/login"
import workplace from "@/views/dashboard/workplace"
import analysis from "@/views/dashboard/analysis"
import monitor from "@/views/dashboard/monitor"
import index from "@/views/index/index"
import role from "@/views/system/role"

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
        name: "/",
        component: workplace,
      },
      {
        path: "/dashboard",
        name: "dashboard",
        children: [
          {
            path: "workplace",
            name: "workplace",
            component: workplace
          }, {
            path: "analysis",
            name: "analysis",
            component: analysis
          }, {
            path: "monitor",
            name: "monitor",
            component: monitor
          }
        ]
      },
      {
        path: "/index",
        name: "index",
        component: index
      },
      {
        path: "/system",
        children: [
          {
            path: "role",
            name: "role",
            component: role
          }
        ]
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
    next()
  }
})

export default router
