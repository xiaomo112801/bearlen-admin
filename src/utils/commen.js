import { unref } from 'vue'
import { api } from '@/utils/request'
// import { ElMessage } from "element-plus"

//element form表单验证后提交数据
export const validateDataThenSubmit = (refData, url, submitData) => {
  const unRefData = unref(refData)
  if (!unRefData) {
    return Promise.resolve(false)
  }
  return new Promise(resolve => {
    unRefData.validate(valid => {
      if (valid) {
        api.post(url, submitData).then(res => {
          resolve(res)
        })
      } else {
        return resolve(false)
      }
    })
  })
}

//element form 表单验证(仅验证数据)
export const validateData = (refData) => {
  const unRefData = unref(refData)
  if (!unRefData) {
    return false
  }
  return unRefData.validate(valid => {
    return valid
  })
}