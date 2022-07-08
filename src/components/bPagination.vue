<template>
  <div>
    <el-pagination
        v-model:current-page="currentPage"
        :default-current-page="1"
        v-model:page-size="pageSize"
        :page-sizes="[10,20, 50, 100, 150]"
        :small="small"
        :disabled="false"
        :background="true"
        layout="total, sizes, prev, pager, next, jumper"
        :page-count="pageCount"
        @update:page-size="handleSizeChange"
        @update:current-page="handleCurrentChange"
    />
  </div>
</template>
<script setup>
import { ref, defineProps, defineEmits } from 'vue'

defineProps({
  small: Boolean,
  pageCount: Number
})


const currentPage = ref(1),
    pageSize = ref(10),
    emit = defineEmits(['change']),
    handleSizeChange = (val) => {
      emit('getPageSize', val)
    },
    handleCurrentChange = (val) => {
      emit('getCurrentPage', val)
    }
</script>
