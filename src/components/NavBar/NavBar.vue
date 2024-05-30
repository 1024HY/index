<template>
  <div class="navbar">
    <div class="navbar-left">
      <!-- 左侧内容 -->
      <slot name="left" />
    </div>
    <div class="navbar-title">
      <!-- 标题 -->
      {{ props.title }}
    </div>
    <div class="navbar-right">
      <!-- 右侧内容 -->
      <slot name="right" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps({
  title: String // 标题
});
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px; /* 导航栏高度 */
  background-color: #0f62c4; /* 导航栏背景色 */
  color: #ffffff; /* 文字颜色 */
  padding: 0 20px; /* 左右内边距 */
}

.navbar-left,
.navbar-right {
  display: flex;
  align-items: center;
}

.navbar-title {
  font-size: 20px;
}
</style>
