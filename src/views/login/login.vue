<template>
  <el-container class="container">
    <el-row class="login" align="middle">
      <el-col :span="10">
        <el-image src="http://qiniu.bearlen.com/BEAELEN-08.png"></el-image>
      </el-col>
      <el-col :span="10">
        <el-form label-width="" :rules="rule" :model="form" ref="formRef">
          <el-form-item label="" prop="username">
            <el-input v-model="form.username" placeholder="请输入用户名">
              <template #prefix>
                <el-icon class="el-input__icon">
                  <user/>
                </el-icon>
              </template>
            </el-input>
          </el-form-item>
          <el-form-item label="" prop="password">
            <el-input type="password" v-model="form.password" placeholder="请输入密码">
              <template #prefix>
                <el-icon class="el-input__icon">
                  <unlock/>
                </el-icon>
              </template>
            </el-input>
          </el-form-item>
          <el-form-item label="" class="" prop="verficationCode">
            <el-input class="verify" v-model="form.verficationCode" placeholder="验证码">
              <template #prefix>
                <el-icon class="el-input__icon iconfont icon-yanzhengma">
                </el-icon>
              </template>
            </el-input>
            <div class="captcha-container">
              <img :src="captcha" @click="getVerifyCode"/>
            </div>
          </el-form-item>
          <el-form-item label="" class="btn">
            <el-button type="primary" @click="sign" @keyup.enter="sign" :auto-insert-space="true">登录</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </el-container>
</template>

<script setup>

import { reactive, ref } from 'vue'
import { api } from '@/utils/request'
import { ElMessage } from 'element-plus'
import store from '@/store'
import router from '@/router'
import { validateDataThenSubmit } from "@/utils/commen"

const form = reactive({
  username: '弦月',
  password: 'lxw112801',
  verficationCode: ''
})

const captcha = ref("")

const formRef = ref()
const pattern = new RegExp("[`~!@#$^&*()=|{}':;,.<>《》/?！\\[\\]￥…（）—【】‘；：”“。，、？]")
const validatePass = (rule, value, callback) => {

  if (value === '') {
    callback(new Error('请输入密码'))
  } else if (value.length < 8 || value.length > 16) {
    callback(new Error('密码长度为8-16位'))
  } else if (pattern.test(value)) {
    callback(new Error('包含非法字符'))
  } else {
    callback()
  }
}

const validateUsername = (rule, value, callback) => {

  if (value === '') {
    callback(new Error('请输入用户名'))
  } else if (pattern.test(value)) {
    callback(new Error('包含非法字符'))
  } else {
    callback()
  }
}

const validateVerficationCode = (rule, value, callback) => {
  if (value === '') {
    callback(new Error('请输入验证码'))
  } else {
    callback()
  }
}

const rule = reactive({
  password: [{validator: validatePass, trigger: "blur"}],
  username: [{validator: validateUsername, trigger: "blur"}],
  verficationCode: [{validator: validateVerficationCode, trigger: "blur"}]
})


const getVerifyCode = () => {
  return api.get("/admin/verify", {}, {
    "content-type": "application/image"
  }).then(res => {
    captcha.value = `data:image/png;base64,${res.data}`
  })
}

getVerifyCode()

const sign = () => {
  try {
    validateDataThenSubmit(formRef, "/admin/sign", form)
        .then(res => {
          if (res.code < 0) {
            ElMessage.error(res.message)
            getVerifyCode()
          }
          if (store.state.authorization) {
            router.push('/')
            store.dispatch('getUserInfo')
            store.dispatch('getMenuList')
          }
        })
  } catch (e) {
    console.log(e)
  }
}
</script>

<style lang="scss" scoped>
::v-deep .label-color .el-form-item__label {
  color: white;
}

.captcha {
  width: 100px;
  height: 50px;
}

.el-col-8 {
  height: 32px;
  border-radius: 5px;
}

.captcha-container {
  border-radius: 3px;
  overflow: hidden;
  height: 32px;
  position: absolute;
  right: 0;
  margin-left: 9px;

}


.verify {
  width: 60%;
  justify-content: space-between;

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
    -webkit-filter: blur(10px);
    -ms-filter: blur(10px);
    filter: blur(10px);
    background-color: rgba(255, 255, 255, 1);
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
      max-width: 197px;
      width: 100%;

      button {
        flex: 1
      }
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
      padding: 10px 0;


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