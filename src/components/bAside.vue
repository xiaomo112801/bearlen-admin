<template>
  <div class="container">
    <div class="logo">
      <img src="http://qiniu.bearlen.com/BEAELEN-08.png" alt="">
    </div>
    <div>
      <el-scrollbar height="calc(100vh - 60px)">
        <el-menu background-color="#191a23" text-color="#ffffff"
                 active-text-color="#1890ff" :unique-opened="true"
                 :default-active="defaultActive" class="el-menu-vertical"
                 :router="true" @select="handleSelect"
                 :collapse="isCollapse" :collapse-transition="false">
          <el-sub-menu v-for="(item,index) in menuList" :key="index" :index="item.index">
            <template #title>
              <el-icon v-if="item.type === 2" class="el-icon iconfont" :class="item.icon"></el-icon>
              <el-icon v-else>
                <aside-icon :icon="item.icon"></aside-icon>
              </el-icon>
              <span>{{ item.title }}</span>
            </template>
            <template v-if="item.childMenu">
              <el-menu-item v-for="(val,childIndex) in item.childMenu" :key="childIndex"
                            :index="val.url" :name="val.title"
                            @click="setNavItem({title:val.title,url:val.url,name:val.title})">
                <template #title>
                  <el-icon v-if="val.type=== 2" class="el-icon iconfont" :class="val.icon"></el-icon>
                  <el-icon v-else>
                    <aside-icon :icon="val.icon"></aside-icon>
                  </el-icon>
                  <span>{{ val.title }}</span>
                </template>
              </el-menu-item>
            </template>
          </el-sub-menu>
        </el-menu>
      </el-scrollbar>
    </div>
  </div>
</template>
<script setup>
import asideIcon from "@/components/asideIcon"
import { useStore } from 'vuex'
import { defineProps, computed } from "vue"


defineProps({
  isCollapse: Boolean
})
const store = useStore()

const defaultActive = computed(() => store.state.menu.defaultActive)

const menuList = computed(() => store.state.menu.menuList)

const setNavItem = menuItem => {
  store.commit('addNavMenu', menuItem)
  store.commit('changeActiveNav', menuItem.name)
}

const handleSelect = index => {
  store.commit('changeDefaultActive', index)
}

</script>

<style lang="scss" scoped>


.container {
  background-color: #191a23;
  box-sizing: border-box;
  padding: 0;
  display: flex;
  flex-direction: column;

  .el-menu-vertical:not(.el-menu--collapse) {
    width: 200px;
  }

  .el-menu-vertical {
    background-color: rgba(0, 0, 0, 0);
    border: none;
  }

  .el-menu-item.is-active {
    background-color: var(--el-menu-active-color);
    color: #fff
  }


  .logo {
    display: flex;
    padding: 0 10px;
    height: 60px;
    overflow: hidden;
    margin: 10px 20px;

    img {
      width: 100%;
      height: 100%;
    }

  }
}
</style>