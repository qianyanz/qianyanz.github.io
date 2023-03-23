<script setup>
import { ref } from 'vue'
import { useArticle } from '../stores/article'
const props = defineProps(['id'])
const { get } = useArticle()
const detail = get(props.id)
const html = ref(detail.html)
</script>
<template>
  <n-layout-content class="content" content-style="padding: 5% 10%;">
    <n-grid :cols="4" x-gap="12">
      <n-gi :span="3">
        <n-card>
          <div v-html="html"></div>
        </n-card>
      </n-gi>
      <n-gi>
        <n-space vertical>
          <n-card> 广告位招租 </n-card>
          <n-card> 广告位招租</n-card>
        </n-space>
      </n-gi>
    </n-grid>
  </n-layout-content>
</template>
