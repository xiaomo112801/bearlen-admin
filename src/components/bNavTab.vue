<template>
  <div class="container">
    <div class="left-btn">
      <el-icon :size="20">
        <arrow-left/>
      </el-icon>
    </div>
    <el-scrollbar class="menu-list">
      <el-row align="middle" justify="start">

        <el-tabs
            v-model="editableTabsValue"
            type="card"
            class="nav-tabs"
            @tab-remove="removeTab"
            @tab-click="pageNav"
        >
          <el-tab-pane
              key="1"
              label="主页"
              name="1"
              :closable="false"
          ></el-tab-pane>

          <el-tab-pane
              v-for="item in navList"
              :key="item.name"
              :label="item.title"
              :name="item.name"
              :closable="true"
          ></el-tab-pane>

        </el-tabs>

      </el-row>
    </el-scrollbar>
    <div class="right-btn">
      <el-icon :size="20">
        <arrow-right/>
      </el-icon>
    </div>
  </div>
</template>

<script setup>
import { useStore } from "vuex"
import { computed } from "vue"
import router from '@/router/index'

const store = useStore()

const navList = computed(() => store.state.menu.navMenu)
const editableTabsValue = computed({
  get() {
    return store.state.menu.activeNav
  },
  set() {
    return store.state.menu.activeNav
  }
})

const removeTab = (targetName) => {
      store.commit('closeNavMenu', targetName)
    },
    pageNav = (pane) => {
      const name = pane.props.name
      if (name === '1') {
        router.push('/dashboard/workplace')
      } else {
        const navItme = navList.value.filter(item => {
          return item.name === name
        })
        router.push(navItme[0].url)
      }
      store.commit('changeActiveNav', name)
    }
</script>

<style lang="scss" scoped>
:deep .el-tabs--card {
  & > .el-tabs__header {
    .el-tabs__nav {
      background-color: rgba(0, 0, 0, 0) !important;
      border: none !important;
      margin: 0;
    }

    .el-tabs__item.is-active {
      border-bottom-color: #fff;
      background-color: #ddecff;
      color: var(--el-color-primary);
      border-bottom: 2px solid var(--el-color-primary);
    }
  }
}

.menu-list {
  flex: 1;
  z-index: 999
}

:deep .el-tabs--card {
  & > .el-tabs__header {
    border: none;
    margin: 0;

    .el-tabs__item {
      border-left: none
    }
  }

  .el-tabs__item {
    border-left: none
  }
}

:deep .el-scrollbar__bar {
  z-index: 9999;
}


.el-tabs {
  height: 40px;
}

.container {
  height: 100%;
  overflow: hidden;
  background-color: white;
  display: flex;
  align-items: center;

  .el-row {
    flex: 1;
  }

  .left-btn, .right-btn {
    display: flex;
    align-items: center;
    box-sizing: border-box;
    padding: 0 10px;
  }

}
</style>