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

<script>
import asideIcon from "@/components/asideIcon"
import { ElMessage } from "element-plus"

export default {
  name: "bAside",
  props: {
    isCollapse: Boolean
  },
  computed: {
    defaultActive() {
      return this.$store.state.menu.defaultActive
    }
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
      this.$api.get("/admin/getMenuList")
          .then(res => {
            this.menuList = res.data
          })
          .catch(error => {
            if (error.response.status === 500) {
              ElMessage.error('当前登录已失效')
              this.$store.commit('changeToken', '')
              this.$router.push('/login')
            }
          })
    },
    setNavItem(menuItem) {
      this.$store.commit('addNavMenu', menuItem)
      this.$store.commit('changeActiveNav', menuItem.name)
    },
    handleSelect(index) {
      this.$store.commit('changeDefaultActive', index)
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