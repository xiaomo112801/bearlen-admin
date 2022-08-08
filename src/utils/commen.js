import { unref } from 'vue'
import { api } from '@/utils/request'
import routerMap from "@/router/routerMap"
// import { ElMessage } from "element-plus"

//element form表单验证后提交数据
export const validateDataThenSubmit = (refData, url, submitData) => {
  const unRefData = unref(refData)
  if (!unRefData) {
    return Promise.resolve(false)
  }
  const validRes = unRefData.validate()
  return validRes.then(res => {
    if (res) {
      return api.post(url, submitData)
    }
  })
}

export const validateData = (refData) => {
  const unRefData = unref(refData)
  if (!unRefData) {
    return false
  }
  return unRefData.validate()
}

export const injectionRouter = (menuList, router) => {
  router.addRoute({path:'/dashboard', name: 'dashboard'})
  router.addRoute('dashboard',{path:'workplace', name: 'workplace',component:routerMap['workplace']})

  router.addRoute({path:'/system', name: 'system',children:[{path:'role', name: 'role',component:routerMap['role']}]})
  // menuList.map(item => {
  //   if (item.pid === 0) {
  //     router.addRoute('/', {path: item.module, name: item.module})
  //   } else {
  //     router.addRoute(item.module, {path: item.component, name: item.component, component: routerMap[item.component]})
  //   }
  //   if (item.childMenu.length > 0) {
  //     injectionRouter(item.childMenu, router)
  //   }
  // })
  return true
}