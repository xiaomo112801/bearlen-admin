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
              <el-icon v-if="item.iconType === 2" class="el-icon iconfont" :class="item.iconClass"></el-icon>
              <el-icon v-else>
                <aside-icon :icon="item.iconClass"></aside-icon>
              </el-icon>
              <span>{{ item.name }}</span>
            </template>
            <el-menu-item v-for="(val,childIndex) in item.childMenu" :key="childIndex"
                          :index="val.url" :name="val.name" @click="setNavItem">
              <template #title>
                <el-icon v-if="val.iconType === 2" class="el-icon iconfont" :class="val.iconClass"></el-icon>
                <el-icon v-else>
                  <aside-icon :icon="val.iconClass"></aside-icon>
                </el-icon>
                <span>{{ val.name }}</span>
              </template>
            </el-menu-item>
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
          name: "控制面板", iconType: 1, index: "1", iconClass: "odometer", childMenu: [
            {name: "工作台", iconType: 1, index: "1-1", iconClass: "monitor", url: "/dashboard/workplace"},
            {name: "分析页", iconType: 1, index: "1-2", iconClass: "data-analysis", url: "/dashboard/analysis"},
            {name: "监控页", iconType: 1, index: "1-3", iconClass: "camera", url: "/dashboard/monitor"}
          ]
        }, {
          name: "系统管理", iconType: 1, index: "2", iconClass: "setting", childMenu: [
            {name: "用户管理", iconType: 2, index: "2-1", iconClass: "icon-huiyuan1", url: ""},
            {name: "角色管理", iconType: 2, index: "2-2", iconClass: "icon-jiaoseguanli", url: ""},
            {name: "菜单管理", iconType: 2, index: "2-3", iconClass: "icon-caidan", url: ""},
            {name: "职级管理", iconType: 2, index: "2-4", iconClass: "icon-zhiweiguanli", url: ""},
            {name: "岗位管理", iconType: 2, index: "2-5", iconClass: "icon-gangwei", url: ""},
            {name: "部门管理", iconType: 1, index: "2-6", iconClass: "office-building", url: ""},
            {name: "登录日志", iconType: 1, index: "2-7", iconClass: "document", url: ""},
            {name: "操作日志", iconType: 2, index: "2-8", iconClass: "icon-wj-rz", icon: "", url: ""}
          ]
        }, {
          name: "数据中心", iconType: 2, index: "3", iconClass: "icon-shujuzhongxin", childMenu: [
            {name: "字典管理", iconType: 2, index: "3-1", iconClass: "icon-zidianguanli", url: ""},
            {name: "城市管理", iconType: 1, index: "3-2", iconClass: "OfficeBuilding", url: ""},
            {name: "配置管理", iconType: 2, index: "3-3", iconClass: "icon-xitongshezhi", url: ""},
            {name: "通知公告", iconType: 1, index: "3-4", iconClass: "bell", url: ""},
            {name: "友链管理", iconType: 2, index: "3-5", iconClass: "icon-youqinglianjie", url: ""}
          ]
        }, {
          name: "个人中心", iconType: 1, index: "4", iconClass: "user", childMenu: [
            {name: "个人资料", iconType: 2, index: "4-1", iconClass: "icon-gerenziliao", url: ""}
          ]
        }, {
          name: "运营中心", iconType: 2, index: "5", iconClass: "icon-yunyingzhongxin", childMenu: [
            {name: "广告位管理", iconType: 2, index: "5-1", iconClass: "icon-guanggaoweishezhi", url: ""},
            {name: "广告管理", iconType: 2, index: "5-2", iconClass: "icon-guanggaoguanli", url: ""},
            {name: "布局描述管理", iconType: 2, index: "5-3", iconClass: "icon-buju", url: ""},
            {name: "布局管理", iconType: 2, index: "5-4", iconClass: "icon-buju", url: ""}
          ]
        }, {
          name: "内容管理", iconType: 2, index: "6", iconClass: "icon-icon", childMenu: [
            {name: "广告位管理", iconType: 2, index: "6-1", iconClass: "icon-guanggaoweishezhi", url: ""},
            {name: "广告管理", iconType: 2, index: "6-2", iconClass: "icon-guanggaoguanli", url: ""},
            {name: "布局描述管理", iconType: 2, index: "6-3", iconClass: "icon-buju", url: ""},
            {name: "布局管理", iconType: 2, index: "6-4", iconClass: "icon-buju", url: ""}
          ]
        }, {
          name: "会员管理", iconType: 2, index: "7", iconClass: "icon-huiyuan1", childMenu: [
            {name: "会员等级", iconType: 2, index: "7-1", iconClass: "icon-huiyuandengji", url: ""},
            {name: "会员管理", iconType: 2, index: "7-2", iconClass: "icon-huiyuan1", url: ""}
          ]
        }, {
          name: "系统设置", iconType: 2, index: "8", iconClass: "icon-xitongshezhi", childMenu: [
            {name: "网站设置", iconType: 2, index: "8-1", iconClass: "icon-shuangchilun", url: ""}
          ]
        }, {
          name: "系统工具", iconType: 2, index: "9", iconClass: "icon-gongju", childMenu: [
            {name: "代码生成", iconType: 2, index: "9-1", iconClass: "icon-daimashengcheng", url: ""}
          ]
        }
      ]
    }
  },
  watch: {},
  methods: {
    setNavItem(menuItem) {
      console.log(menuItem)
      const navItem = {
        url: menuItem.index
      }
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