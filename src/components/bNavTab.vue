<template>
  <div class="container">
    <div class="left-btn">
      <el-icon :size="20">
        <arrow-left/>
      </el-icon>
    </div>
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
    <div class="right-btn">
      <el-icon :size="20">
        <arrow-right/>
      </el-icon>
    </div>
  </div>
</template>

<script>
export default {
  name: "bNavTab",
  data() {
    return {

      editableTabsValue: "1",

    }
  },
  computed: {
    navList() {
      return this.$store.state.menu.navMenu
    }
  },
  methods: {
    removeTab(targetName) {
      const tabs = this.navList
      let activeName = this.editableTabsValue
      if (activeName === targetName) {
        tabs.forEach((tab, index) => {
          if (tab.name === targetName) {
            const nextTab = tabs[index + 1] || tabs[index - 1]
            if (nextTab) {
              activeName = nextTab.name
            }
          }
        })
      }
      this.editableTabsValue = activeName
      this.$store.commit('closeNavMenu', targetName)
      // this.navList = tabs.filter((tab) => tab.name !== targetName)
    },
    pageNav(pane) {
      const name = pane.props.name
      if (name === '1') {
        this.$router.push('/dashboard/workplace')
      } else {
        const navItme = this.navList.filter(item => {
          return item.name === name
        })
        this.$router.push(navItme[0].url)
      }
    }
  }
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