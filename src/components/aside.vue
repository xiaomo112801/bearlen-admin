<template>
  <div class="container">
    <div class="logo">
      <img src="http://qiniu.bearlen.com/BEAELEN-08.png" alt="">
    </div>
    <div>
      <el-scrollbar height="calc(100vh - 60px)">
        <el-menu background-color="#191a23" text-color="#ffffff"
                 active-text-color="#1890ff" :unique-opened="true"
                 default-active="2" class="el-menu-vertical"
                 @open="handleOpen" @close="handleClose"
                 :collapse="isCollapse" :collapse-transition="false">
          <el-sub-menu v-for="(item,index) in menuList" :key="index" :index="index">
            <template #title>
              <el-icon v-if="item.iconType === 2" class="el-icon iconfont" :class="item.iconClass"></el-icon>
              <el-icon :class=" item.icon "></el-icon>
              <!--                {{ `< ${item.icon} />` }}-->
              <!--              </el-icon>-->
              <span>{{ item.name }}</span>
            </template>
            <el-menu-item v-for="(val,childIndex) in item.childMenu" :key="childIndex"
                          :index="`${index}-${childIndex}`">
              <template #title>
                <el-icon v-if="val.iconType === 2" class="el-icon iconfont" :class="val.iconClass"></el-icon>
                <el-icon :class=" val.icon "></el-icon>
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
import {
  Setting,
  Odometer,
  User,
  Monitor,
  DataAnalysis,
  Camera,
  OfficeBuilding,
  Document,
  Bell
} from "@element-plus/icons-vue"

export default {
  name: "aside",
  props: {
    isCollapse: Boolean
  },
  data() {
    return {
      menuList: [
        {
          name: "控制面板", iconType: 1, iconClass: "", icon: "odometer", childMenu: [
            { name: "工作台", iconType: 1, iconClass: "", icon: "monitor", url: "" },
            { name: "分析页", iconType: 1, iconClass: "", icon: "data-analysis", url: "" },
            { name: "监控页", iconType: 1, iconClass: "", icon: "camera", url: "" }
          ]
        }, {
          name: "系统管理", iconType: 1, iconClass: "", icon: "setting", childMenu: [
            { name: "用户管理", iconType: 2, iconClass: "icon-huiyuan1", icon: "", url: "" },
            { name: "角色管理", iconType: 2, iconClass: "icon-jiaoseguanli", icon: "", url: "" },
            { name: "菜单管理", iconType: 2, iconClass: "icon-caidan", icon: "camera", url: "" },
            { name: "职级管理", iconType: 2, iconClass: "icon-zhiweiguanli", icon: "camera", url: "" },
            { name: "岗位管理", iconType: 2, iconClass: "icon-gangwei", icon: "camera", url: "" },
            { name: "部门管理", iconType: 1, iconClass: "", icon: "office-building", url: "" },
            { name: "登录日志", iconType: 1, iconClass: "", icon: "document", url: "" },
            { name: "操作日志", iconType: 2, iconClass: "icon-wj-rz", icon: "", url: "" }
          ]
        }, {
          name: "数据中心", iconType: 2, iconClass: "icon-shujuzhongxin", icon: "", childMenu: [
            { name: "字典管理", iconType: 2, iconClass: "icon-zidianguanli", icon: "", url: "" },
            { name: "城市管理", iconType: 1, iconClass: "", icon: "OfficeBuilding", url: "" },
            { name: "配置管理", iconType: 2, iconClass: "icon-xitongshezhi", icon: "", url: "" },
            { name: "通知公告", iconType: 1, iconClass: "", icon: "bell", url: "" },
            { name: "友链管理", iconType: 2, iconClass: "icon-youqinglianjie", icon: "", url: "" }
          ]
        }, {
          name: "个人中心", iconType: 1, iconClass: "", icon: "user", childMenu: [
            { name: "个人资料", iconType: 2, iconClass: "icon-gerenziliao", icon: "", url: "" }
          ]
        }, {
          name: "运营中心", iconType: 2, iconClass: "icon-yunyingzhongxin", icon: "", childMenu: [
            { name: "广告位管理", iconType: 2, iconClass: "icon-guanggaoweishezhi", icon: "", url: "" },
            { name: "广告管理", iconType: 2, iconClass: "icon-guanggaoguanli", icon: "", url: "" },
            { name: "布局描述管理", iconType: 2, iconClass: "icon-buju", icon: "", url: "" },
            { name: "布局管理", iconType: 2, iconClass: "icon-buju", icon: "", url: "" }
          ]
        }, {
          name: "内容管理", iconType: 2, iconClass: "icon-icon", icon: "", childMenu: [
            { name: "广告位管理", iconType: 2, iconClass: "icon-guanggaoweishezhi", icon: "", url: "" },
            { name: "广告管理", iconType: 2, iconClass: "icon-guanggaoguanli", icon: "", url: "" },
            { name: "布局描述管理", iconType: 2, iconClass: "icon-buju", icon: "", url: "" },
            { name: "布局管理", iconType: 2, iconClass: "icon-buju", icon: "", url: "" }
          ]
        }, {
          name: "会员管理", iconType: 2, iconClass: "icon-huiyuan1", icon: "", childMenu: [
            { name: "会员等级", iconType: 2, iconClass: "icon-huiyuandengji", icon: "", url: "" },
            { name: "会员管理", iconType: 2, iconClass: "icon-huiyuan1", icon: "", url: "" }
          ]
        }, {
          name: "系统设置", iconType: 2, iconClass: "icon-xitongshezhi", icon: "", childMenu: [
            { name: "网站设置", iconType: 2, iconClass: "icon-shuangchilun", icon: "", url: "" }
          ]
        }, {
          name: "系统工具", iconType: 2, iconClass: "icon-gongju", icon: "", childMenu: [
            { name: "代码生成", iconType: 2, iconClass: "icon-daimashengcheng", icon: "", url: "" }
          ]
        }
      ]
    }
  },
  watch: {},
  methods: {
    handleOpen: (key, keyPath) => {
      console.log(key, keyPath)
    },
    handleClose: (key, keyPath) => {
      console.log(key, keyPath)
    }
  },
  components: {
    Setting,
    Odometer,
    User,
    Monitor,
    DataAnalysis,
    Camera,
    OfficeBuilding,
    Document,
    Bell
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