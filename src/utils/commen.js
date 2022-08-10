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
  const routerTree = buildRouterTree(menuList)
  routerTree.map(item=>{
    router.addRoute('/', item)
  })
  return true
}

const buildRouterTree = (menuList) => {
  let routerTree = []
  menuList.map((item,index) => {
    let treeItem
    if (item.pid === 0) {
      treeItem = {name: item.module, path: item.module}
    } else {
      treeItem = {path: item.component, name: item.component, component: routerMap[item.component]}
    }
    if (item.childMenu.length > 0) {
      treeItem.children = buildRouterTree(item.childMenu)
    } else {
      treeItem.children = []
    }
    routerTree[index]=treeItem
  })
  return routerTree
}