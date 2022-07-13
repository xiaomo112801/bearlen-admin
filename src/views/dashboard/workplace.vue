<template>
  <el-container class="main-workplace">

    <el-row class="hello main-item">
      <div class="userInfo">
        <div class="head-img">
          <el-image fit="cover" :src="userInfo.headimg" alt="欲瑶琴弦断"/>
        </div>
        <div class="greeting">
          <h1>下午好，{{ userInfo.username }}。欢迎回来！</h1>
          <span>一昨日はウサギ、昨日は鹿、今日はあなた</span>
        </div>
      </div>
      <div class="workInfo">
        <div class="item">
          <span class="item-name">
            <el-icon color="#409eff" class="project el-icon-tag"><Menu/></el-icon>
            <span>项目数</span>
          </span>
          <span class="item-count">3</span>
        </div>
        <div class="item">
          <span class="item-name">
            <el-icon color="#E6A23C" class="todo el-icon-tag"><Finished/></el-icon>
            <span>待办项</span>
          </span>
          <span class="item-count">3</span>
        </div>
        <div class="item">
          <span class="item-name">
            <el-icon color="#95d475" class="message el-icon-tag"><Bell/></el-icon>
            <span>消息</span>
          </span>
          <span class="item-count">3</span>
        </div>
      </div>
    </el-row>

    <el-row :gutter="15" justify="center" align="middle" class="shortcut-menu" type="flex">
      <el-col :span="3" class="menu-item">
        <div class="col">
          <el-icon :size="32" class="el-icon iconfont icon-huiyuan1" color="#69c0ff"></el-icon>
          <span>系统用户</span>
        </div>
      </el-col>
      <el-col :span="3" class="menu-item">
        <div class="col">
          <el-icon :size="32" class="el-icon iconfont icon-jiaoseguanli" color="#95DE64"></el-icon>
          <span>角色管理</span>
        </div>
      </el-col>
      <el-col :span="3" class="menu-item">
        <div class="col">
          <el-icon :size="32" class="el-icon iconfont icon-caidan" color="#FF9C6E"></el-icon>
          <span>菜单管理</span>
        </div>
      </el-col>
      <el-col :span="3" class="menu-item">
        <div class="col">
          <el-icon :size="32" class="el-icon iconfont icon-zidianguanli" color="rgb(179, 127, 235)"></el-icon>
          <span>字典管理</span>
        </div>
      </el-col>
      <el-col :span="3" class="menu-item">
        <div class="col">
          <el-icon :size="32" class="el-icon iconfont icon-xitongshezhi" color="rgb(255, 214, 102)"></el-icon>
          <span>配置管理</span>
        </div>
      </el-col>
      <el-col :span="3" class="menu-item">
        <div class="col">
          <el-icon :size="32" color="rgb(92, 219, 211)">
            <aside-icon icon="bell"></aside-icon>
          </el-icon>
          <span>通知公告</span>
        </div>
      </el-col>
      <el-col :span="3" class="menu-item">
        <div class="col">
          <el-icon :size="32" class="el-icon iconfont icon-daimashengcheng" color="rgb(255, 133, 192)">
            <aside-icon class="el-icon"></aside-icon>
          </el-icon>
          <span>代码生成</span>
        </div>
      </el-col>
      <el-col :span="3" class="menu-item">
        <div class="col">
          <el-icon :size="32" color="rgb(255, 192, 105)">
            <aside-icon icon="user"></aside-icon>
          </el-icon>
          <span>个人中心</span>
        </div>
      </el-col>
    </el-row>

    <el-row class="board" :gutter="15">
      <el-col :span="8">
        <div class="col">
          <h2 class="board-title">动态更新</h2>
          <div class="board-content">
            <el-timeline>
              <el-timeline-item
                  v-for="(activity, index) in activities"
                  :key="index"
                  :timestamp="activity.timestamp"
                  :type="activity.type"
                  :size="activity.size"
                  :hollow="activity.hollow"
              >
                {{ activity.content }}
              </el-timeline-item>
            </el-timeline>
          </div>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="col">
          <h2 class="board-title">升级计划</h2>
          <div class="board-content">
            <el-table :data="upgradePlan" style="width: 100%">
              <el-table-column prop="date" label="Date" width="180"/>
              <el-table-column prop="name" label="Name" width="180"/>
              <el-table-column prop="address" label="Address"/>
            </el-table>
          </div>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="col">
          <h2 class="board-title">本月计划</h2>
          <div class="board-content center">
            <el-progress type="dashboard" :width="200" class="progress" :percentage="percentage">
              <template #default="{ percentage }">
                <el-icon class="el-icon-tag">
                  <Document/>
                </el-icon>
                <p class="percentage-label">{{ percentage }}</p>
              </template>
            </el-progress>
            <span>本月进度已完成</span>
          </div>
        </div>
      </el-col>
    </el-row>

    <el-row :gutter="15" class="board">
      <el-col :span="16">
        <div class="col">
          <h2 class="board-title">项目进度</h2>
          <div class="board-content"></div>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="col">
          <h2 class="board-title">小组成员</h2>
          <div class="board-content list">
            <p v-for="item in teamMembers" :key="item">
              <el-avatar class="avatar" :size="50" :src="item.avatar"></el-avatar>
              <span class="userinfo">
                <span class="username">  {{ item.username }}</span>
                <span class="post"> {{ item.post }}</span>
              </span>
              <span :class="item.online === 1 ? 'online-status' : 'offline-status' ">{{
                  item.online === 1 ? '在线' : '离线'
                }}</span>
            </p>
          </div>
        </div>
      </el-col>
    </el-row>
    <b-footer />
  </el-container>
</template>

<script setup>

import { ref } from 'vue'
import bFooter from '@/components/bFooter'
import asideIcon from "@/components/asideIcon"

const userInfo = ref({
  username: "欲瑶琴弦断",
  headimg: 'https://card.only99.cn/upload/user/1657504127266.png'
})

const activities = ref([
  {
    content: 'Event start',
    timestamp: '2018-04-15',
    size: 'normal',
    type: 'primary'
  },
  {
    content: 'Approved',
    timestamp: '2018-04-13',
    size: 'normal',
    type: 'primary',
    hollow: true,
  },
  {
    content: 'Success',
    timestamp: '2018-04-11',
  },
])

const upgradePlan = ref([
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St',
  },
])

const percentage = ref(10)

const teamMembers = ref([
  {
    avatar: 'https://card.only99.cn/upload/user/1657504127266.png',
    username: "欲瑶琴弦断",
    online: 1,
    post: '前端工程师 PHP后端工程师'
  }, {
    avatar: 'https://img2.woyaogexing.com/2017/07/21/773f38c112f81066!400x400_big.jpg',
    username: "YoRHa 2B",
    online: 1,
    post: '前端工程师'
  }, {
    avatar: 'http://qiniu.bearlen.com/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20220713140535.png',
    username: "YoRHa command",
    online: 2,
    post: '前端工程师'
  }
])


</script>


<style lang="scss" scoped>
.main-workplace {
  display: flex;
  flex-direction: column;


  .el-row {
    margin-bottom: 15px;
    flex-wrap: wrap;

    .col {
      background-color: white;
      display: flex;
    }
  }

  .hello {
    height: 100px;
    background-color: white;
    display: flex;
    align-items: center;
    padding: 0 15px;
    border-radius: 5px;
    margin-bottom: 15px;

    .userInfo {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      flex: 1;


      .head-img {
        height: 70px;
        border-radius: 50px;
        overflow: hidden;
        width: 70px;
      }

      .greeting {
        height: 70px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: flex-start;
        margin-left: 15px;
        flex: 1;
        white-space: nowrap;

        h1 {
          font-size: 20px;
          font-weight: normal;

        }

      }

    }

    .workInfo {
      display: flex;

      .item {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        padding: 15px;
        font-size: 14px;

        .item-count {
          font-size: 24px;
        }

        .item-name {
          display: flex;
          align-items: center;
          white-space: nowrap;

          .el-icon-tag {
            padding: 5px;
            border-radius: 13px;
            margin-right: 10px;
          }

          .project {
            border: 1px solid var(--el-color-primary-light-5);
            background-color: var(--el-color-primary-light-9);
          }

          .todo {
            border: 1px solid var(--el-color-warning-light-5);
            background-color: var(--el-color-warning-light-9);
          }

          .message {
            border: 1px solid var(--el-color-success-light-5);
            background-color: var(--el-color-success-light-9);
          }
        }
      }

    }

  }

  .shortcut-menu {

    .menu-item {

      & .col {

        flex-direction: column;
        align-items: center;
        border-radius: 5px;
        padding: 15px 0;
        font-size: 14px;


        span {
          line-height: 24px;
          margin-top: 10px;
        }
      }

      span {
        white-space: nowrap;
      }
    }
  }

  .board > .el-col > .col {
    display: flex;
    flex-direction: column;
    border-radius: 5px;

    .board-title {
      display: flex;
      flex: 1;
      padding: 13px 20px;
      border-bottom: 1px var(--el-border-color) solid;
      font-size: 14px;
    }

    .board-content {
      height: 318px;
      box-sizing: border-box;
      padding: 15px;
      display: flex;
      align-items: flex-start;
      justify-content: flex-start;

      .percentage-label {
        padding: 10px;
        font-size: 24px;
      }

    }

    .list {
      flex-direction: column;
      font-size: 14px;
      justify-content: flex-start;
      align-items: flex-start;

      p {
        box-sizing: border-box;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        border-bottom: 1px var(--el-border-color) solid;
        width: 100%;
        padding: 15px;

        span {
          margin-right: 15px;
        }

        @mixin tag($color) {
          padding: 5px 10px;
          border-radius: 3px;
          border: 1px $color solid;
          color: $color
        }


        .online-status {
          @include tag(#95d475)
        }

        .offline-status {
          @include tag(#b1b3b8)
        }

        .userinfo {
          flex: 1;
          display: flex;
          flex-direction: column;

          .post {
            color: #b1b3b8
          }

          span {
            padding: 3px 0;
            font-size: 14px;
          }
        }
      }
    }

    .center {
      align-items: center;
      justify-content: center;
      flex-direction: column;
      font-size: 14px;
    }
  }


}


</style>