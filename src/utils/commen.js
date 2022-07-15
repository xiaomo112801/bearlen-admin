import { unref } from 'vue'
import { api } from '@/utils/request'
// import { ElMessage } from "element-plus"

//element form表单验证后提交数据
export const validateDataThenSubmit = (refData, url, submitData) => {
  const unRefData = unref(refData)
  if (!unRefData) {
    return Promise.resolve(false)
  }

  return unRefData.validate(valid => {
    if (valid) {
      api.post(url, submitData).then(res => {
        return Promise.resolve(res)
      })
    } else {
      return Promise.resolve(false)
    }
  })
}

export const validateData = (refData) => {
  const unRefData = unref(refData)
  if (!unRefData) {
    return false
  }
  return unRefData.validate(valid => {
    return valid
  })
}