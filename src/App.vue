<template>
  <el-container class="container">
    <el-aside width="200px">
      <b-aside></b-aside>
    </el-aside>
    <el-container>
      <el-header>
        <b-header></b-header>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
import bHeader from "@/components/header"
import bAside from "@/components/aside"

export default {
  components: {
    bHeader,
    bAside
  }
}
</script>
<style lang="scss">
@import 'assets/base';

.el-header {
  color: var(--el-text-color-primary);
  text-align: center;
  line-height: 60px;
  --el-header-padding: 0 0 !important;
  padding: var(--el-header-padding) !important;
}

.container {
  height: 100vh
}
</style>
