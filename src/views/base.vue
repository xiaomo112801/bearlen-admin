<template>
  <el-container class="container">
    <el-aside :width="isCollapse?'64px':'200px'" class="aside-transition">
      <b-aside :isCollapse="isCollapse"></b-aside>
    </el-aside>
    <el-container>
      <el-header>
        <b-header @getCollapse="getCollapse"></b-header>
      </el-header>
      <div class="nav-tab">
        <b-nav-tab></b-nav-tab>
      </div>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import bHeader from "@/components/bHeader"
import bAside from "@/components/bAside"
import bNavTab from "@/components/bNavTab"

export default {
  data() {
    return {
      isCollapse: false
    }
  },
  methods: {
    getCollapse(collapse) {
      this.isCollapse = collapse
    }
  },
  components: {
    bHeader,
    bAside,
    bNavTab
  }
}
</script>

<style lang="scss">
.nav-tab {
  overflow: hidden;
  height: 40px;
  box-shadow: 0 5px 5px #e3e3e3;
}

.el-header {
  color: var(--el-text-color-primary);
  text-align: center;
  line-height: 60px;
  --el-header-padding: 0 0 !important;
  padding: var(--el-header-padding) !important;
  display: flex;
  flex-direction: column;
}

.aside-transition {
  transition: width .3s;
}

.container {
  height: 100vh;
  color: #606266;
}
</style>