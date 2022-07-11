<template>
  <el-breadcrumb separator="/">
    <el-breadcrumb-item :to="{ path: '/dashboard/workplace' }">主页</el-breadcrumb-item>
    <el-breadcrumb-item v-for="item in breadcrumb" :key="item" :to="{path:item.path}">{{
        item.title
      }}
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script setup>

import router from '@/router/index'
import { watchEffect, ref } from "vue"
import store from '@/store/index'

const breadcrumb = ref([])

watchEffect(() => {
  const pathArr = router.currentRoute.value.fullPath.split('/').slice(1)
  pathArr.map((item, index) => {
    breadcrumb.value[index] = store.state.menu.navMenu.filter(val => {
      if (val.title === `/${item}`) {
        return val
      }
    })
  })
})


</script>

<style scoped>

</style>