<template>
  <el-container class="container">
    <el-row class="login" align="middle">
      <el-col :span="10">
        <el-image src="http://qiniu.bearlen.com/BEAELEN-08.png"></el-image>
      </el-col>
      <el-col :span="10">
        <el-form label-width="" :rules="rule">
          <el-form-item label="" class="label-color">
            <el-input icon="" v-model="form.username" :prefix-icon="Search" placeholder="请输入用户名">
              <template #prefix>
                <el-icon class="el-input__icon">
                  <user />
                </el-icon>
              </template>
            </el-input>
          </el-form-item>
          <el-form-item label="" class="label-color">
            <el-input v-model="form.password" placeholder="请输入密码">
              <template #prefix>
                <el-icon class="el-input__icon">
                  <unlock />
                </el-icon>
              </template>
            </el-input>
          </el-form-item>
          <el-form-item label="" class="vertication label-color">
            <el-input v-model="form.verficationCode" placeholder="请输入验证码">
              <template #prefix>
                <el-icon class="el-input__icon iconfont icon-yanzhengma">

                </el-icon>
              </template>
            </el-input>
          </el-form-item>

          <el-button type="primary" class="btn" auto-insert-space="true">登录</el-button>

        </el-form>
      </el-col>
    </el-row>
  </el-container>
</template>

<script>
import { Unlock, User } from "@element-plus/icons-vue"

export default {
  name: "login",
  data() {
    return {
      form: {
        username: "",
        password: "",
        verficationCode: ""
      },
      rule: [
        {}
      ]
    }
  },
  components: {
    Unlock,
    User
  }
}
</script>

<style lang="scss" scoped>
::v-deep .label-color .el-form-item__label {
  color: white;
}

.el-container {
  width: 100%;
  display: flex;
  align-content: center !important;
  justify-content: center;
  height: 100vh;
  box-sizing: border-box;
  background: url("http://youzi.bearlen.com/public/admin/images/bg-img.png") no-repeat;
  background-size: cover;
  -webkit-background-size: cover;
  flex: 1;

  &:after {
    top: calc(50% - 200px);
    left: calc(50% - 400px);
    position: absolute;
    width: 800px;
    height: 400px;
    content: "";
    background-image: url("http://youzi.bearlen.com/public/admin/images/bg-img.png");
    background-repeat: no-repeat;
    background-size: cover;
    -webkit-background-size: cover;
    -o-background-size: cover;
    background-attachment: fixed;
    -webkit-filter: blur(14px);
    -ms-filter: blur(14px);
    filter: blur(14px);
    background-color: rgba(255, 255, 255, 0.7);
    z-index: 1;
  }

  .login {
    flex-direction: row;
    align-content: center;
    justify-content: space-around;
    z-index: 2;
    box-sizing: border-box;
    padding: 0 15px;

    .btn {
      width: 197px;
      margin-top: 10px;
    }

    .el-form {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      border-left: 1px solid rgba(255, 255, 255, 0.98);
      border-image: -webkit-linear-gradient(rgba(0, 0, 0, 0), white, rgba(0, 0, 0, 0)) 30 30;
      border-image: -moz-linear-gradient(rgba(0, 0, 0, 0), white, rgba(0, 0, 0, 0)) 30 30;
      border-image: linear-gradient(rgba(0, 0, 0, 0), white, rgba(0, 0, 0, 0)) 30 30;
      box-sizing: border-box;
      padding:10px 0;

      .vertication {
        display: flex;
        flex-direction: row;

        .el-input__inner {
          display: inline-flex !important;
        }
      }

      .el-form-item, .el-form-item--default {
        display: flex;
        align-items: center;
        justify-content: flex-start !important;
        margin: 9px 0;

        .el-form-item__content {
          margin-left: 0 !important;
        }
      }
    }
  }
}
</style>