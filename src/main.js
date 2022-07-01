import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"
import  api from "./utils/request"

import ElementPlus from "element-plus"
import "element-plus/dist/index.css"
import "@/assets/css/iconfont.css"
import * as icons from "@element-plus/icons-vue"

const app = createApp(App)
Object.keys(icons).forEach((key) => {
  app.component(key, icons[key])
})
app.use(router)
app.use(ElementPlus)
app.use(store)
app.use(api)
app.mount("#app")
