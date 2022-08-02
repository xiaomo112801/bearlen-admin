import { createStore } from "vuex"
import menu from './menu/menu'
import user from './user/user'

export default createStore({
  state: {
    authorization: localStorage.getItem("authorization") ? localStorage.getItem("authorization") : ""
  },
  mutations: {
    changeToken(state, token) {
      localStorage.setItem("authorization", token)
      return state.authorization = token
    }
  },
  actions: {},
  modules: {
    menu,
    user
  }
})
