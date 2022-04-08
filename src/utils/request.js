import axios from "axios"
import store from "@/store/index"
// import { ElMessage } from "element-plus"

const httpRequest = axios.create({
  timeout: 1000,
  headers: {
    "content-type": "application/json"
  }
})

const refreshAuthorization = (response) => {
  const token = response.header.authorization
  if (token) {
    store.commit("changeToken", token)
  }
}

httpRequest.interceptors.request.use(
  config => {
    const authorization = store.state.authorization ? store.state.authorization : ""

    if (authorization) {
      config.headers.authorization = authorization
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)


httpRequest.interceptors.response.use(
  response => {
    refreshAuthorization(response)
    if (response.data && response.data.code) {

      response.data.code = isNaN(response.data.code)
        ? response.data.code
        : parseInt(response.data.code)

    }
    return response.data
  },
  error => {
    if (error.response.status === 401) {
      store.commit("changeToken", "")
    }
    return Promise.reject(error)
  }
)


export default {
  install(app) {
    app.config.globalProperties.$api = {
      get: (url, data, header) => {
        const requestConfig = {
          url,
          data
        }
        requestConfig.headers = {
          ...header
        }
        requestConfig.params = data
        return httpRequest(requestConfig)
      },
      post: (url, data, header = {}) => {
        const requestConfig = {
          url,
          method: "post"
        }
        requestConfig.headers = {
          ...header
        }
        if (
          Object.prototype.toString
            .call(data)
            .match(/\s+(\w+)/)[1]
            .toLowerCase() === "form-data"
        ) {
          requestConfig.data = data
        } else {
          requestConfig.data = data // 如果是application/x-www-form-urlencoded, 改为: qs.stringify(data)
        }
        return httpRequest(requestConfig)
      }
    }
  }
}




