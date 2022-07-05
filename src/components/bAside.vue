<template>
  <div class="container">
    <div class="logo">
      <img src="http://qiniu.bearlen.com/BEAELEN-08.png" alt="">
    </div>
    <div>
      <el-scrollbar height="calc(100vh - 60px)">
        <el-menu background-color="#191a23" text-color="#ffffff"
                 active-text-color="#1890ff" :unique-opened="true"
                 default-active="/dashboard/workplace" :default-openeds="['0']" class="el-menu-vertical"
                 @open="handleOpen" @close="handleClose" :router="true"
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
                            :index="val.url" :name="val.title" @click="setNavItem">
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

<script>
import asideIcon from "@/components/asideIcon"

export default {
  name: "bAside",
  props: {
    isCollapse: Boolean
  },
  data() {
    return {
      menuList: [
        {
          title: "", type: 1, index: "1", icon: "", childMenu: [
            {title: "", type: 1, index: "", icon: "", url: ""}
          ]
        }
      ]
    }
  },
  created() {
    this.getMenuList()
  },
  watch: {},
  methods: {
    getMenuList() {
      return this.$api.get("/admin/getMenuList")
          .then(res => {
            this.menuList = res.data
          })
    },
    setNavItem(menuItem) {
      console.log(menuItem)
    },
    handleOpen: (key, keyPath) => {
      console.log(key, keyPath)
    },
    handleClose: (key, keyPath) => {
      console.log(key, keyPath)
    }
  },
  components: {
    asideIcon
  }
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