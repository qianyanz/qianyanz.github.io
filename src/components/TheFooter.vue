<script setup>
import { NLayoutFooter, NSpace } from 'naive-ui'
import dayjs from 'dayjs'
import duration from 'dayjs/plugin/duration'
import { ref,onMounted,onBeforeMount,reactive} from 'vue';

// 设定一个初始时间即可，博客运行时长由计算得出
dayjs.extend(duration)
let blogInitDate = 1679239038000
let time = ref("")
let timer
onMounted(() => {
  timer = setInterval(() => {
    time.value = dayjs.duration(dayjs().diff(blogInitDate)).format('YY年M月D天H小时m分钟s秒');
  }, 1000);
});
onBeforeMount(() => {
  clearInterval(timer)
})

const packInfo = reactive({
  // eslint-disable-next-line no-undef
  version: __APP_VERSION__
})

</script>

<template>
  <n-layout-footer>
        <n-space vertical align="center" size="small">
          <div>本网站已经运行{{ time }}</div>
          <div>版本号：{{ packInfo.version }}</div>
          <div>服务器托管于阿里云，使用cos对象存储图片</div>
        </n-space>
      </n-layout-footer>
</template>

<style scoped>
.n-layout-footer {
  height: 100px;
  padding-top: 10px;
}
</style>
