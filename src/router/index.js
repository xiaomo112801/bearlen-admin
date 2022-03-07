import {createRouter, createWebHistory} from "vue-router"
import index from "@/views/index/index"

const routes = [
  {
    path: "/",
    name: "/",
    component: index
  },
  {
    path: "/index",
    name: "index",
    component: index
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
