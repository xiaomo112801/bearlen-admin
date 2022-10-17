import store from '@/store'

export const auth = (el, binding) => {
  const userAuth = store.state.userAuth
  const authGroup = binding.value
  if (!(!userAuth || authGroup.length === 0 || authGroup.indexOf(userAuth) > -1)) {
    el.style.display = 'none'
    el.remove()
  }
}