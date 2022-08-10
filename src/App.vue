<template>
  <router-view></router-view>
</template>
<script setup>
import store from "@/store"
import { injectionRouter } from "@/utils/commen"
import router from "@/router"

const menuList = store.state.menu.menuList
injectionRouter(menuList, router)
</script>
<style lang="scss">
@import 'assets/base';

</style>
