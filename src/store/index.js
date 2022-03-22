import { createStore } from "vuex"

export default createStore({
  state: {
    authorization: localStorage.getItem("authorization") ? localStorage.getItem("authorization") : ""
  },
  mutations: {
    changeToken(state, token) {
      localStorage.setItem("authorization",token)
      return state.authorization = token
    }
  },
  actions: {},
  modules: {}
})
