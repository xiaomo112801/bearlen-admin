export default {
  state: () => {
    return {
      navMenu: localStorage.getItem('navMenu') ? localStorage.getItem('navMenu') : []
    }
  },
  mutations: {
    addNavMenu(state, navItem) {
      state.navMenu.push(navItem)
      localStorage.setItem('navMenu', state.navMenu)
    },
    closeNavMenu(state, navItem) {
      const navMenu = state.navMenu.filter(item => {
        return item !== navItem
      })
      localStorage.setItem('navMenu', navMenu)
    }
  }
}