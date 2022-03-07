<template>
  <div class="container">
    <div class="logo">
      <img src="http://qiniu.bearlen.com/BEARLEN-05.png" alt="">
    </div>
    <div>
      <el-scrollbar height="calc(100vh - 60px)">
        <el-menu background-color="#191a23" text-color="#ffffff" active-text-color="#ffffff" :unique-opened="true"
                 default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
          <el-sub-menu index="1">
            <template #title>
              <el-icon>
                <location/>
              </el-icon>
              <span>Navigator One</span>1
            </template>
            <el-menu-item index="1-1">item one</el-menu-item>
            <el-menu-item index="1-2">item one</el-menu-item>
            <el-menu-item-group title="Group Two">
              <el-menu-item index="1-3">item three</el-menu-item>
            </el-menu-item-group>
            <el-sub-menu index="1-4">
              <template #title>item four</template>
              <el-menu-item index="1-4-1">item one</el-menu-item>
            </el-sub-menu>
          </el-sub-menu>
          <el-sub-menu index="2">
            <template #title>
              <el-icon>
                <location/>
              </el-icon>
              <span>Navigator One</span>
            </template>
            <el-menu-item index="1-1">item one</el-menu-item>
            <el-menu-item index="1-2">item one</el-menu-item>
            <el-menu-item index="1-3">item three</el-menu-item>

            <el-sub-menu index="1-4">
              <template #title>item four</template>
              <el-menu-item index="1-4-1">item one</el-menu-item>
            </el-sub-menu>
          </el-sub-menu>
          <el-sub-menu index="3">
            <template #title>
              <el-icon>
                <location/>
              </el-icon>
              <span>Navigator One</span>
            </template>
            <el-menu-item index="1-1">item one</el-menu-item>
            <el-menu-item index="1-2">item one</el-menu-item>
            <el-menu-item index="1-3">item three</el-menu-item>
            <el-sub-menu index="1-4">
              <template #title>item four</template>
              <el-menu-item index="1-4-1">item one</el-menu-item>
            </el-sub-menu>
          </el-sub-menu>
        </el-menu>
      </el-scrollbar>
    </div>
  </div>
</template>

<script>
import {
  Location,
} from '@element-plus/icons-vue'

export default {
  name: "aside",
  methods: {
    handleOpen: (key, keyPath) => {
      console.log(key, keyPath)
    },
    handleClose: (key, keyPath) => {
      console.log(key, keyPath)
    }
  },
  components: {
    Location
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

  .el-menu-vertical-demo {
    background-color: rgba(0, 0, 0, 0);
    border: none;
  }

  .logo {
    display: flex;
    padding: 0 10px;
    height: 60px;
    overflow: hidden;
    //background-color: #fafafa;

    img {
      width: 100%;
      height: 100%;
    }

  }
}
</style>