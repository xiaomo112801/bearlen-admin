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
          closable
          @tab-remove="removeTab"
      >
        <el-tab-pane
            v-for="item in editableTabs"
            :key="item.name"
            :label="item.title"
            :name="item.name"
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
      editableTabs: [
        {
          title: '主页',
          name: '1',
          content: 'Tab 1 content',
        },
        {
          title: 'Tab 2',
          name: '2',
          content: 'Tab 2 content',
        },
      ],
      editableTabsValue: 2,

    }
  },
  methods: {
    removeTab(targetName) {

      const tabs = this.editableTabs
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
      this.editableTabs = tabs.filter((tab) => tab.name !== targetName)
    }

  }
}
</script>

<style lang="scss" scoped>
::v-deep.el-tabs--card > .el-tabs__header .el-tabs__nav {
  background-color: rgba(0, 0, 0, 0) !important;
  border: none !important;
  margin: 0;
}

::v-deep.el-tabs--card > .el-tabs__header .el-tabs__item.is-active {
  border-bottom-color: #fff;
  background-color: #ddecff;
  color: var(--el-color-primary);
  border-bottom: 2px solid var(--el-color-primary);
}

::v-deep.el-tabs--card > .el-tabs__header {
  border: none;
  margin: 0;
}

::v-deep .el-tabs--card > .el-tabs__header .el-tabs__item {
  border-left: none
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