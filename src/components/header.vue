<template>
  <div class="container">
    <div class="">
      <div class="fold">
        <el-icon :size="20" color="#2c3e50">
          <fold />
        </el-icon>
      </div>
    </div>
    <div class="msg-alert">
      <svg class="icon" width="20" height="20" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"
           data-v-042ca774="">
        <path fill="currentColor" d="M512 64a64 64 0 0164 64v64H448v-64a64 64 0 0164-64z"></path>
        <path fill="currentColor"
              d="M256 768h512V448a256 256 0 10-512 0v320zm256-640a320 320 0 01320 320v384H192V448a320 320 0 01320-320z"></path>
        <path fill="currentColor"
              d="M96 768h832q32 0 32 32t-32 32H96q-32 0-32-32t32-32zM448 896h128a64 64 0 01-128 0z"></path>
      </svg>
    </div>
    <div class="user">
      <div class="head-img">
        <img src="http://qiniu.bearlen.com/BEARLEN-03.png" alt="头像"/>
      </div>
      <div class="user-name">
        <span class="name">弦月</span>
        <svg class="icon" width="14" height="14" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"
             data-v-042ca774="">
          <path fill="currentColor"
                d="M104.704 338.752a64 64 0 0190.496 0l316.8 316.8 316.8-316.8a64 64 0 0190.496 90.496L557.248 791.296a64 64 0 01-90.496 0L104.704 429.248a64 64 0 010-90.496z"></path>
        </svg>
      </div>
      <div class="more">
        <svg t="1646637021267" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
             p-id="5245" data-spm-anchor-id="a313x.7781069.0.i3" width="25" height="25">
          <path
              d="M465.9 263c0-12.6 4.2-23.1 12.6-31.5s19-12.7 31.9-12.7c12.5 0 22.8 4.2 31.1 12.7s12.4 19 12.4 31.5c0 12.2-4.1 22.7-12.4 31.5s-18.6 13.2-31.1 13.2c-12.8 0-23.4-4.4-31.9-13.2s-12.6-19.3-12.6-31.5z m0 250.5c0-12.2 4.2-22.6 12.6-31s19-12.7 31.9-12.7c12.5 0 22.8 4.2 31.1 12.7s12.4 18.8 12.4 31c0 12.5-4.1 23.2-12.4 32s-18.6 13.2-31.1 13.2c-12.8 0-23.4-4.4-31.9-13.2s-12.6-19.5-12.6-32z m0 253c0-12.5 4.2-23 12.6-31.3s19-12.5 31.9-12.5c12.5 0 22.8 4.1 31.1 12.5 8.3 8.3 12.4 18.7 12.4 31.3 0 12.5-4.1 23.2-12.4 32s-18.6 13.2-31.1 13.2c-12.8 0-23.4-4.4-31.9-13.2s-12.6-19.5-12.6-32z"
              p-id="5246"></path>
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "header"
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

  .fold {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: black;
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