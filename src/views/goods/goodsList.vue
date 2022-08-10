<template>
  <el-container class="main-container">
    <div class="header">
      <div class="option">
        <el-button type="primary" @click="addGoods">
          <el-icon class="el-icon--left">
            <CirclePlus/>
          </el-icon>
          新增
        </el-button>
        <el-button type="primary">
          <el-icon class="el-icon--left">
            <DocumentAdd/>
          </el-icon>
          导入数据
        </el-button>
        <el-button type="danger">
          <el-icon class="el-icon--left">
            <Delete/>
          </el-icon>
          删除
        </el-button>
      </div>
      <el-form class="search-container" :inline="true">
        <el-form-item label="商品名称">
          <el-input v-model="goodsName" placeholder="请输入商品名称"/>
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
    <el-table :data="goodsList" :stripe="true" empty-text="暂无数据">
      <el-table-column prop="id" label="ID"></el-table-column>
      <el-table-column prop="goodsName" label="商品名称"></el-table-column>
      <el-table-column prop="categoryName" label="分类"></el-table-column>
      <el-table-column prop="cover" label="图片"></el-table-column>
      <el-table-column prop="middlePrice" label="参考中间价"></el-table-column>
      <el-table-column prop="purchasePriceRate" label="采购方报价调整率"></el-table-column>
      <el-table-column prop="supplierPriceRate" label="供应方报价调整率"></el-table-column>
      <el-table-column prop="total" label="累积采购量"></el-table-column>
      <el-table-column prop="option" label="操作">
        <template #default>
          <el-button :link="true" type="primary">
            <el-icon class="el-icon--left">
              <Edit/>
            </el-icon>
            编辑
          </el-button>
          <el-button :link="true" type="primary">
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

  </el-container>
</template>

<script setup>
import { ref } from "vue"
import { useRouter } from 'vue-router'

const goodsList = ref()
const goodsName = ref()
const router = useRouter()
const addGoods = () => {
  router.push({name: 'addGoods'})
}

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