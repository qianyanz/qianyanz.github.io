<script setup>
import { NLayoutHeader, NMenu, NSpace,NLayout } from 'naive-ui'
import { RouterLink } from 'vue-router';
import { h } from 'vue';
const menuOptions = [
  {
    label: () => h(
      RouterLink,
      {
        to: {
          path: "/"
        }
      },
      { default: () => "主页" }
    ),
    key: "home"
  },
  {
    label: () => h(
      RouterLink,
      {
        to: {
          path: "/about"
        }
      },
      { default: () => "关于" }
    ),
    key: "about"
  }
];

</script>

<template>
  <n-layout-header bordered position="absolute" style="height: 100px">
    <n-space justify="center">
      <n-menu mode="horizontal" :options="menuOptions" />
    </n-space>
  </n-layout-header>
  <n-layout></n-layout>
</template>

<style scoped>
</style>
