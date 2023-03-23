<script setup>
import { RouterView } from 'vue-router'
import { darkTheme, NConfigProvider, lightTheme } from 'naive-ui'
import { zhCN, dateZhCN } from 'naive-ui'

import dayjs from 'dayjs'
import { ref, onMounted, onBeforeMount } from 'vue'

// 判断时间点或者按钮，切换 dark 模式
const theme = ref(darkTheme)
let now = dayjs()
let timer = undefined

onMounted(() => {
  timer = setInterval(() => {
    if (now.hour() <= 7 || now.hour() >= 17) {
      theme.value = darkTheme
    } else {
      theme.value = lightTheme
    }
  }, 1000 * 60)
})
onBeforeMount(() => {
  clearInterval(timer)
})
</script>

<template>
  <div id="root">
    <n-config-provider :locale="zhCN" :date-locale="dateZhCN" :theme="theme">
      <RouterView />
    </n-config-provider>
  </div>
</template>

<style scoped>
#root {
  height: 100%;
  width: 100%;
  background-position: center;
  background-size: 100%;
  background-attachment: fixed;
  overflow: auto;
}
</style>
