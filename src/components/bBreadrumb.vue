<template>
  <el-breadcrumb separator="/">
    <el-breadcrumb-item :to="{ path: '/' }">homepage</el-breadcrumb-item>
    <el-breadcrumb-item>
      <a href="/">promotion management</a>
    </el-breadcrumb-item>
    <el-breadcrumb-item>promotion list</el-breadcrumb-item>
    <el-breadcrumb-item>promotion detail</el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script setup>

import router from '@/router/index'
import { computed, ref } from "vue"

const path = ref(router.currentRoute.value)

const routerPath = computed({
  get: () => {
    return path.value.fullPath
  },
  set: (val) => {
    return val
  }
})

console.log(routerPath.value)

</script>

<style scoped>

</style>