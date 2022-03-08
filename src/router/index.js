import {createRouter, createWebHistory} from "vue-router"
import base from "@/views/base"
import index from "@/views/index/index"
import login from "@/views/login/login"

const routes = [
  {
    path: "/",
    name: "/",
    component: base
  },
  {
    path: "/index",
    name: "index",
    component: index
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

export default router
