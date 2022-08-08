import { unref } from 'vue'
import { api } from '@/utils/request'
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
  menuList.map(item => {
    if (item.pid === 0) {
      router.addRoute('/', {path: `/${item.module}`, name: item.module})
    } else {
      router.addRoute(item.module, {path: item.url, name: item.component, component: import(`@/views${item.url}`)})
    }
    if (item.childMenu.length > 0) {
      injectionRouter(item.childMenu, router)
    }
  })
  return true
}