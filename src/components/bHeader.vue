<template>
  <div class="container">
    <div class="page-info">
      <div class="fold" @click="setCollapse">
        <el-icon :size="20">
          <fold v-if="collapse"/>
          <expand v-else/>
        </el-icon>
      </div>
      <div class="refresh">
        <el-icon :size="20">
          <refresh/>
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
        <bell/>
      </el-icon>
    </div>
    <div class="user">
      <div class="head-img">
        <img src="http://qiniu.bearlen.com/BEARLEN-03.png" alt="头像"/>
      </div>
      <div class="user-name">
        <span class="name">弦月</span>

      </div>
      <el-dropdown class="more" @command="handleCommand">
        <el-icon el-dropdown-link>
          <arrow-down-bold/>
        </el-icon>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item command="userCenter">
              <el-icon :size="16">
                <user/>
              </el-icon>
              个人中心
            </el-dropdown-item>
            <el-dropdown-item command="editPassword">
              <el-icon :size="16">
                <key/>
              </el-icon>
              修改密码
            </el-dropdown-item>
            <el-dropdown-item divided command="loginOut">
              <el-icon :size="16">
                <switch-button/>
              </el-icon>
              退出登录
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import { ArrowDownBold, Bell, Fold, Refresh, Expand, SwitchButton, User, Key } from "@element-plus/icons-vue"


export default {
  name: "bHeader",
  data() {
    return {
      collapse: true
    }
  },
  created() {

  },
  methods: {
    setCollapse() {
      this.collapse = !this.collapse
      this.$emit("getCollapse", !this.collapse)
    },
    handleCommand(command) {
      console.log()
      if (typeof this[command] === 'function') {
        this[command]()
      }
    },
    editPassword() {

    },
    loginOut() {
      return this.$api.post('/admin/loginOut')
          .then(() => {
            this.$store.commit("changeToken", '')
            this.$router.push('/login')
          })
    },
    userCenter() {

    }
  },
  computed: {
    routerPath() {
      console.log(this.$router)
      return this.$router
    }
  },
  components: {
    ArrowDownBold,
    Bell,
    Fold,
    Refresh,
    Expand,
    SwitchButton,
    User,
    Key
  }
}
</script>
<style lang="scss" scoped>

.container {
  height: 60px;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  overflow: hidden;
  //height: 100%;
  border-bottom: 1px solid #e3e3e3;
  background-color: white;
  box-sizing: border-box;
  padding-right: 20px;
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
      height: 30px;
      width: 30px;
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