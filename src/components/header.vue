<template>
  <div class="container">
    <div class="page-info">
      <div class="fold" @click="setCollapse">
        <el-icon :size="20">
          <fold />
        </el-icon>
      </div>
      <div class="refresh">
        <el-icon :size="20">
          <refresh />
        </el-icon>
      </div>
      <div class="path">
        <router-view class="main" path="/"><span>主页</span></router-view>
        <span>/</span>
        <span>控制面板</span>
        <span>/</span>
        <span class="currentPage">工作台</span>
      </div>
    </div>
    <div class="msg-alert">
      <el-icon :size="20">
        <bell />
      </el-icon>
    </div>
    <div class="user">
      <div class="head-img">
        <img src="http://qiniu.bearlen.com/BEARLEN-03.png" alt="头像" />
      </div>
      <div class="user-name">
        <span class="name">弦月</span>
        <el-icon>
          <arrow-down-bold />
        </el-icon>
      </div>
      <div class="more">
        <el-icon class="iconfont icon-gengduo" :size="25"></el-icon>
      </div>
    </div>
  </div>
</template>

<script>
import { ArrowDownBold, Bell, Fold, Refresh } from "@element-plus/icons-vue"

export default {
  name: "header",
  data() {
    return {
      collapse: true
    }
  },
  methods: {
    setCollapse() {
      this.collapse = !this.collapse
      this.$emit("getCollapse", !this.collapse)
    }
  },
  components: {
    ArrowDownBold,
    Bell,
    Fold,
    Refresh
  }
}
</script>

<style lang="scss" scoped>

.container {
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  overflow: hidden;
  height: 100%;
  border-bottom: 1px solid #cbcbcb;
  background-color: white;
  box-sizing: border-box;
  padding: 0 20px;
  color: #606266;

  .page-info {
    flex: 1;
    display: flex;
    justify-content: flex-start;

    .fold, .refresh, .path {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0 10px;
    }

    .path {
      font-size: 14px;
      color: #909399;

      .currentPage {
        color: #606266
      }

      span {
        padding: 0 2.5px;

        .main {
          :hover {
            cursor: pointer;
          }
        }
      }

    }
  }


  > div {
    padding: 0 10px;
  }

  .msg-alert {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }

  .user {
    display: flex;
    align-items: center;
    justify-content: space-around;

    div {
      margin: 0 5px;
    }

    .head-img {
      height: 45px;
      width: 45px;
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: center;

      img {
        object-fit: cover;
        width: 100%;
        height: 100%;
      }
    }

    .user-name {
      margin-left: 5px;
      font-size: 14px;
      display: flex;
      flex: 1;
      align-items: center;
      justify-content: space-around;

      span {
        padding-right: 5px
      }
    }

    .more {
      display: flex;
      align-items: center;
    }
  }


}

</style>