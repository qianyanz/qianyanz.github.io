<script setup>
import { storeToRefs } from 'pinia'
import { onMounted, reactive, watch } from 'vue'
import router from '../router'
import { useArticle } from '../stores/article'

const articleData = reactive({
  article: [],
  pageArticle: []
})

const articleStore = useArticle()
const { article } = storeToRefs(articleStore)

watch(article, async (n) => {
  articleData.article = n
  console.log(articleData.article)
  // 显示当前页的数据
  articleData.pageArticle = articleData.article.slice(0, pageContent.pageSize)
  // 初始化分页数量
  pageContent.pageCount = Math.ceil(articleData.article.length / pageContent.pageSize)
})

onMounted(() => {
  articleData.article = article
  console.log(articleData.article)
  // 显示当前页的数据
  articleData.pageArticle = articleData.article.slice(0, pageContent.pageSize)
  // 初始化分页数量
  pageContent.pageCount = Math.ceil(articleData.article.length / pageContent.pageSize)
})

const pageContent = reactive({
  page: 1,
  pageCount: 10,
  pageSlot: 5,
  pageSize: 10
})

function updatePage(page) {
  articleData.pageArticle = articleData.article.slice(
    (page - 1) * pageContent.pageSize,
    (page - 1) * pageContent.pageSize + pageContent.pageSize
  )
}

function toDetail(item) {
  router.push({ name: 'article_detail', params: { id: item } })
}
</script>

<template>
  <n-space vertical>
    <n-card
      :title="item.title"
      v-for="(item, index) in articleData.pageArticle"
      :index="index"
      :key="item.id"
      embedded
      style="width: 100%"
      @click="toDetail(item.id)"
    >
    </n-card>
  </n-space>
  <n-space justify="center" style="margin-top: 10px">
    <n-pagination
      v-model:page="pageContent.page"
      :page-count="pageContent.pageCount"
      :page-slot="pageContent.pageSlot"
      @update:page="updatePage"
    />
  </n-space>
</template>
<style scoped>
</style>
