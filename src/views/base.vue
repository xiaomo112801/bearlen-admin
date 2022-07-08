<template>
  <el-container class="container">
    <el-aside :width="isCollapse?'64px':'200px'" class="aside-transition">
      <b-aside :isCollapse="isCollapse" @getAsideItem="getAsideItem"></b-aside>
    </el-aside>
    <el-container>
      <el-header>
        <b-header @getCollapse="getCollapse"></b-header>
      </el-header>
      <div class="nav-tab">
        <b-nav-tab :navItem="navItem"></b-nav-tab>
      </div>
      <el-main class="main">
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
      isCollapse: false,
      navItem: {}
    }
  },
  methods: {
    getCollapse(collapse) {
      this.isCollapse = collapse
    },
    getAsideItem(navItem) {
      this.navItem = navItem
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
  overflow: hidden
}

.main {
  height: calc(100vh - 120px);
  padding: 5px;
  overflow: hidden;

  .main-container {
    background-color: white;
    border-radius: 5px;
    padding: 15px;
    height: 100%;
    box-shadow: 0 0 15px #e3e3e3;
  }

  --el-main-padding: 15px !important;

  .page {
    display: flex;
    width: 100%;
    justify-content: center;
  }

  .el-table{
    flex: 1;
  }

}
</style>