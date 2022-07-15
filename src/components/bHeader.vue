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
    <el-dialog v-model="modifyPasswordDialog" title="修改密码" width="30%">
      <el-form :model="form" :rules="rules" ref="formRef" label-width="100px">
        <el-form-item label="原密码" prop="oldPassword">
          <el-input v-model="form.oldPassword" type='password' autocomplete="off"/>
        </el-form-item>
        <el-form-item label="新密码" prop="newPassword">
          <el-input v-model="form.newPassword" type='password' autocomplete="off"/>
        </el-form-item>
        <el-form-item label="确认新密码" prop="reNewPassword">
          <el-input v-model="form.reNewPassword" type='password' autocomplete="off"/>
        </el-form-item>
      </el-form>
      <template #footer>
      <span class="dialog-footer">
        <el-button @click="modifyPasswordDialog = false">取消</el-button>
        <el-button type="primary" @click="confirmModifyPassword">确认修改</el-button>
      </span>
      </template>
    </el-dialog>
  </div>
</template>

<script>
import { ArrowDownBold, Bell, Fold, Refresh, Expand, SwitchButton, User, Key } from "@element-plus/icons-vue"
import { validateDataThenSubmit } from "@/utils/commen"
import { ref } from 'vue'

export default {
  name: "bHeader",
  data() {
    return {
      collapse: true,
      modifyPasswordDialog: false,
    }
  },
  setup() {

    const form = ref({
          oldPassword: 'lxw123123',
          newPassword: 'lxw112801',
          reNewPassword: 'lxw112801'
        }),
        url = '/admin/modifyPassword'
    const checkReNewPassword = (rule, value, callback) => {
      if (value !== form.value.newPassword) {
        callback(new Error('密码输入不一致'))
      }
    }
    const rules = ref({
      oldPassword: [{required: true, message: '请输入原密码', trigger: 'blur'}],
      newPassword: [{required: true, message: '请输入新密码', trigger: 'blur'}],
      reNewPassword: [
        {required: true, message: '确认新密码', trigger: 'blur'},
        {validator: checkReNewPassword, trigger: 'blur'}
      ]
    })

    const formRef = ref()
    const confirmModifyPassword = () => {
      validateDataThenSubmit(formRef, url, form.value)
          .then(res => {
            console.log(res)
          })
    }
    return {
      form,
      rules,
      formRef,
      confirmModifyPassword
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
      if (typeof this[command] === 'function') {
        this[command]()
      }
    },
    editPassword() {
      this.modifyPasswordDialog = true
    },
    loginOut() {
      return this.$api.post('/admin/loginOut')
          .then(() => {
            this.$store.commit("changeToken", '')
            this.$router.push('/login')
          })
    },
    userCenter() {

    },

  },
  computed: {
    routerPath() {
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