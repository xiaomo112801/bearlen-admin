import { api } from "@/utils/request"
import router from '@/router'


export default {
  state: () => {
    return {
      navMenu: localStorage.getItem('navMenu') ? JSON.parse(localStorage.getItem('navMenu')) : [],
      activeNav: localStorage.getItem('activeNav') ? localStorage.getItem('activeNav') : '1',
      defaultActive: localStorage.getItem('defaultActive') ? localStorage.getItem('defaultActive') : '/dashboard/workplace',
      defaultOpened: localStorage.getItem('defaultOpened') ? localStorage.getItem('defaultOpened') : '1',
      menuList: localStorage.getItem('menuList') ? JSON.parse(localStorage.getItem('menuList')) : [],
    }
  },
  mutations: {
    setMenuList(state, menuList) {
      state.menuList = menuList
      localStorage.setItem('menuList', JSON.stringify(menuList))
    },
    addNavMenu(state, navItem) {
      if (this.getters.navItemCount(navItem) === 0) {
        state.navMenu.push(navItem)
        localStorage.setItem('navMenu', JSON.stringify(state.navMenu))
      }
    },
    closeNavMenu(state, navName) {
      const navMenu = state.navMenu.filter(item => {
        return item.title !== navName
      })
      state.navMenu = navMenu
      localStorage.setItem('navMenu', JSON.stringify(navMenu))
    },
    changeActiveNav(state, activeNav) {
      state.activeNav = activeNav
      localStorage.setItem('activeNav', activeNav)
    },
    changeDefaultActive(state, defaultActive) {
      state.defaultActive = defaultActive
      localStorage.setItem('defaultActive', defaultActive)
    }
  },
  getters: {
    navItemCount: (state) => (navItem) => {
      const navItemArr = state.navMenu.filter(item => {
        return item.url === navItem.url
      })
      return navItemArr.length
    },
  },
  actions: {
    getMenuList(context) {
      api.get("/admin/getMenuList")
        .then(res => {
          const menuList = res.data
          context.commit('setMenuList', menuList)
        })
        .catch(error => {
          console.error(error)
        })
    }
  }
}