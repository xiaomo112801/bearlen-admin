import { api } from "@/utils/request"

export default {
  state: () => {
    return {
      userInfo: localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : ''
    }
  },
  mutations: {
    setUserInfo(state, userInfo) {
      state.userInfo = userInfo
      localStorage.setItem('userInfo', JSON.stringify(userInfo))
    }
  },
  actions: {
    getUserInfo(context) {
      api.get('/admin/getUserInfo')
        .then(res => {
          context.commit('setUserInfo', res.data)
        })
    }
  }
}