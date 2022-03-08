<template>
  <div class="container">
    <div class="logo">
      <img src="http://qiniu.bearlen.com/BEAELEN-08.png" alt="">
    </div>
    <div>
      <el-scrollbar height="calc(100vh - 60px)">
        <el-menu background-color="#191a23" text-color="#ffffff" active-text-color="#1890ff" :unique-opened="true"
                 default-active="2" class="el-menu-vertical" @open="handleOpen" @close="handleClose"
                 :collapse="isCollapse" :collapse-transition="false">
          <el-sub-menu index="1">
            <template #title>
              <el-icon>
                <odometer />
              </el-icon>
              <span>控制面板</span>
            </template>
            <el-menu-item index="1-1">
              <template #title>
                <el-icon>
                  <monitor />
                </el-icon>
                <span>工作台</span>
              </template>

            </el-menu-item>
            <el-menu-item index="1-2">
              <template #title>
                <el-icon>
                  <data-analysis />
                </el-icon>
                <span> 分析页</span>
              </template>

            </el-menu-item>
            <el-menu-item index="1-3">
              <template #title>
                <el-icon>
                  <camera />
                </el-icon>
                <span>监控页</span>
              </template>

            </el-menu-item>
          </el-sub-menu>
          <el-sub-menu index="2">
            <template #title>
              <el-icon>
                <setting />
              </el-icon>
              <span>系统管理</span>
            </template>
            <el-menu-item index="2-1">
              <template #title>
                <el-icon class="iconfont icon-huiyuan1"></el-icon>
                <span>用户管理</span>
              </template>
            </el-menu-item>
            <el-menu-item index="2-2">
              <template #title>
                <el-icon class="iconfont icon-jiaoseguanli"></el-icon>
                <span>角色管理</span>
              </template>

            </el-menu-item>
            <el-menu-item index="2-3">
              <template #title>
                <el-icon class="iconfont icon-caidan"></el-icon>
                <span>菜单管理</span>
              </template>
            </el-menu-item>
            <el-menu-item index="2-4">
              <template #title>
                <el-icon class="iconfont icon-zhiweiguanli"></el-icon>
                <span>职级管理</span>
              </template>
            </el-menu-item>
            <el-menu-item index="2-5">
              <template #title>
                <el-icon class="iconfont icon-gangwei"></el-icon>
                <span>岗位管理</span>
              </template>
            </el-menu-item>
            <el-menu-item index="2-6">
              <template #title>
                <el-icon>
                  <office-building />
                </el-icon>
                <span>部门管理</span>
              </template>
            </el-menu-item>
            <el-menu-item index="2-7">
              <template #title>
                <el-icon>
                  <document />
                </el-icon>
                登录日志
              </template>
            </el-menu-item>
            <el-menu-item index="2-8">
              <template #title>
                <el-icon class="iconfont icon-wj-rz"></el-icon>
                <span>操作日志</span>
              </template>
            </el-menu-item>
          </el-sub-menu>
          <el-sub-menu index="3">
            <template #title>
              <el-icon class="iconfont icon-shujuzhongxin el-icon"></el-icon>
              <span>数据中心</span>
            </template>
            <el-menu-item index="3-1">
              <template #title>
                <el-icon class="iconfont icon-zidianguanli"></el-icon>
                <span>字典管理</span>
              </template>
            </el-menu-item>
            <el-menu-item index="3-2">
              <template #title>
                <el-icon>
                  <OfficeBuilding />
                </el-icon>
                <span>城市管理</span>
              </template>
            </el-menu-item>
            <el-menu-item index="3-3">
              <template #title>
                <el-icon class="iconfont icon-xitongshezhi"></el-icon>
                <span>配置管理</span>
              </template>
            </el-menu-item>
            <el-menu-item index="3-4">
              <template #title>
                <el-icon>
                  <bell />
                </el-icon>
                <span>通知公告</span>
              </template>
            </el-menu-item>
            <el-menu-item index="3-5">
              <template #title>
                <el-icon class="iconfont icon-youqinglianjie"></el-icon>
                <span>友链管理</span>
              </template>
            </el-menu-item>
          </el-sub-menu>
          <el-sub-menu index="4">
            <template #title>
              <el-icon>
                <user />
              </el-icon>
              <span>个人中心</span>
            </template>
            <el-menu-item index="4-1">
              <template #title>
                <el-icon class="iconfont icon-gerenziliao"></el-icon>
                个人资料
              </template>
            </el-menu-item>
          </el-sub-menu>
          <el-sub-menu index="5">
            <template #title>
              <el-icon class="iconfont icon-yunyingzhongxin"></el-icon>
              <span>运营中心</span>
            </template>
            <el-menu-item index="5-1">
              <template #title>
                <el-icon class="iconfont icon-guanggaoweishezhi" :size="14"></el-icon>
                <span>广告位管理</span>
              </template>
            </el-menu-item>
            <el-menu-item index="5-2">
              <template #title>
                <el-icon class="iconfont icon-guanggaoguanli" :size="14"></el-icon>
                <span>广告管理</span>
              </template>
            </el-menu-item>
            <el-menu-item index="5-3">
              <template #title>
                <el-icon class="iconfont icon-buju" :size="14"></el-icon>
                <span>布局描述管理</span>
              </template>
            </el-menu-item>
            <el-menu-item index="5-4">
              <template #title>
                <el-icon class="iconfont icon-buju" :size="14"></el-icon>
                <span>布局管理</span>
              </template>
            </el-menu-item>
          </el-sub-menu>
          <el-sub-menu index="6">
            <template #title>
              <el-icon class="iconfont icon-icon" :size="16"></el-icon>
              <span>内容管理</span>
            </template>
            <el-menu-item index="6-1">
              <template #title>
                <el-icon class="iconfont icon-wangzhanguanli" :size="16"></el-icon>
                <span>站点管理</span>
              </template>
            </el-menu-item>
            <el-menu-item index="6-2">
              <template #title>
                <el-icon class="iconfont icon-nav" :size="16"></el-icon>
                <span>栏目管理</span>
              </template>
            </el-menu-item>
            <el-menu-item index="6-3">
              <template #title>
                <el-icon class="iconfont icon-navicon-wzgl" :size="16"></el-icon>
                <span>文章管理</span>
              </template>
            </el-menu-item>
          </el-sub-menu>
          <el-sub-menu index="7">
            <template #title>
              <el-icon class="icon-huiyuan1 iconfont"></el-icon>
              <span>会员管理</span>
            </template>
            <el-menu-item index="7-1">
              <template #title>
                <el-icon class="icon-huiyuandengji iconfont" :size="16"></el-icon>
                <span>会员等级</span>
              </template>
            </el-menu-item>
            <el-menu-item index="7-2">
              <template #title>
                <el-icon class="icon-huiyuan1 iconfont"></el-icon>
                <span>会员管理</span>
              </template>
            </el-menu-item>
          </el-sub-menu>
          <el-sub-menu index="8">
            <template #title>
              <el-icon class="iconfont icon-xitongshezhi"></el-icon>
              <span>系统设置</span>
            </template>
            <el-menu-item index="8-1">网站设置</el-menu-item>
          </el-sub-menu>
          <el-sub-menu index="9">
            <template #title>
              <el-icon class="icon-gongju iconfont"></el-icon>
              <span>系统工具</span>
            </template>
            <el-menu-item index="9-1">
              <template #title>
                <el-icon class="icon-daimashengcheng iconfont"></el-icon>
                <span>代码生成</span>
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
    margin:10px 20px;

    img {
      width: 100%;
      height: 100%;
    }

  }
}
</style>