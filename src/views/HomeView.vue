<script setup>
import { RouterView } from 'vue-router'
import TheFooter from '../components/TheFooter.vue'
import TheHeader from '../components/TheHeader.vue'

</script>

<template>
  <div id="home">
    <n-layout :native-scrollbar="false">
      <TheHeader></TheHeader>
      <n-layout-content content-style="height: 400px;" class="content_img">
        <n-carousel autoplay>
          <n-carousel-item>
            <img class="carousel-img" src="https://zivobs-1256803310.cos.ap-chengdu.myqcloud.com/PicGo/content_img.jpg" />
          </n-carousel-item>
        </n-carousel>
      </n-layout-content>
      <RouterView></RouterView>
      <TheFooter></TheFooter>
      <n-back-top :right="100" />
    </n-layout>
  </div>
</template>

<style scoped>
.n-layout {
  height: 100%;
}
.content {
  height: auto;
}
</style>
