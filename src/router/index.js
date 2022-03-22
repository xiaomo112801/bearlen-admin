import { createRouter, createWebHistory } from "vue-router"
import store from "@/store/index"
import base from "@/views/base"
import login from "@/views/login/login"
import workplace from "@/views/dashboard/workplace"
import analysis from "@/views/dashboard/analysis"
import monitor from "@/views/dashboard/monitor"

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
        path: "/dashboard/workplace",
        name: "workplace",
        component: workplace
      }, {
        path: "/dashboard/analysis",
        name: "analysis",
        component: analysis
      }, {
        path: "/dashboard/monitor",
        name: "monitor",
        component: monitor
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
      next({
        path: "/login",
        query: { redirect: to.fullPath }
      })
    }
  } else {
    next()
  }
})

export default router
