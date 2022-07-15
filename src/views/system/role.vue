<template>
  <el-container class="main-container">
    <div class="header">
      <div class="option">
        <el-button type="primary" @click="dialogFormVisible = true">
          <el-icon class="el-icon--left">
            <CirclePlus/>
          </el-icon>
          新增
        </el-button>
        <el-button type="danger">
          <el-icon class="el-icon--left">
            <Delete/>
          </el-icon>
          删除
        </el-button>
      </div>
      <el-form class="search-container" :inline="true">
        <el-form-item label="角色名称">
          <el-input v-model="searchForm.role" placeholder="请输入角色名称"/>
        </el-form-item>
        <el-form-item>
          <el-button type="primary">
            <el-icon class="el-icon--left">
              <Search/>
            </el-icon>
            搜索
          </el-button>
          <el-button>重置</el-button>
        </el-form-item>
      </el-form>
    </div>
    <el-table :data="roleList" :stripe="true" empty-text="暂无数据">
      <el-table-column prop="id" label="ID"></el-table-column>
      <el-table-column prop="role" label="角色名称"></el-table-column>
      <el-table-column prop="flag" label="标识"></el-table-column>
      <el-table-column prop="status" label="状态"></el-table-column>
      <el-table-column prop="sort" label="排序"></el-table-column>
      <el-table-column prop="createTime" label="创建时间"></el-table-column>
      <el-table-column prop="updateTime" label="更新时间"></el-table-column>
      <el-table-column prop="option" label="操作">
        <template #default>
          <el-button :link="true" type="primary">
            <el-icon class="el-icon--left">
              <Edit/>
            </el-icon>
            编辑
          </el-button>
          <el-button text type="primary">
            <el-icon class="el-icon--left">
              <delete/>
            </el-icon>
            删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <b-pagination class="page" :pageCount="pageCount" :small="false" @getCurrentPage="getCurrentPage"
                  @getPageSize="getPageSize"></b-pagination>
    <el-dialog v-model="dialogFormVisible" title="添加角色" width="30%">
      <el-form :model="form" size="default" :rules="roleFormRules" ref="roleFormRef">
        <el-form-item label="角色名" :required="true" trigger="change" prop="role">
          <el-input type="role" v-model="form.role" autocomplete="off"/>
        </el-form-item>
      </el-form>
      <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取消</el-button>
        <el-button type="primary" @click="submitRole">提交</el-button>
      </span>
      </template>
    </el-dialog>
  </el-container>
</template>

<script setup>
import { ref, reactive, defineComponent } from 'vue'
import { ElTable, ElMessage } from 'element-plus'
import { api } from '@/utils/request'
import bPagination from '@/components/bPagination'
import { validateDataThenSubmit } from "@/utils/commen"

const searchForm = reactive({
  role: '',
})

const roleList = ref([])
const pageCount = ref()
const currntPage = ref(1)
const pageSize = ref(1)
const dialogFormVisible = ref(false)

const getCurrentPage = (page) => {
  console.log(page)
  currntPage.value = page
  getRoleList(currntPage.value)
}
const getPageSize = (size) => {
  console.log(size)
  pageSize.value = size
  getRoleList(currntPage.value)
}

const form = ref({
  role: "",
})

const roleFormRef = ref()

const roleFormRules = ref({
  role: [
    {required: true, message: '请输入角色名', trigger: 'blur'}
  ]
})

const getRoleList = (currntPage) => {
  const page = currntPage || 1
  const searchMap = {
    page: page,
    pageSize: pageSize.value,
    ...searchForm
  }
  return api.get('/admin/getRoleList', searchMap)
      .then(res => {
        roleList.value = (res.length > 0) ? res : []
        pageCount.value = res.pageCount || 1
      })
      .catch(error => {
        const message = error.message || '数据获取失败'
        ElMessage.error(message)
      })
}

getRoleList(currntPage.value)

const submitRole = () => {
  validateDataThenSubmit(roleFormRef, "/admin/addRole", form.value)
      .then(res => {
        if (res.code > 0) {
          ElMessage.success(res.message)
          getRoleList()
        } else {
          ElMessage.error(res.message)
        }
      })
}


defineComponent({
  components: {
    bPagination
  }
})


</script>

<style lang="scss" scoped>
.main-container {
  flex-direction: column;

  .header {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    .option {
      display: flex;
      align-items: center;
    }

    .search-container {
      height: 60px;

      display: flex;
      align-items: center;

      .el-form-item {
        margin-bottom: 0;
      }

    }
  }


}

</style>