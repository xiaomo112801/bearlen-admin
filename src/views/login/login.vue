<template>
  <div class="container">
    <div class="login">
      <el-input></el-input>
    </div>
  </div>
</template>

<script>
export default {
  name: "login"
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  align-content: center;
  justify-content: center;
  height: 100vh;
  box-sizing: border-box;
  padding: 0;

  .login {
    width: 200px;
    display: flex;
    align-content: center;
    justify-content: center;
  }
}
</style>