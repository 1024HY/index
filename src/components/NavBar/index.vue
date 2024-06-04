<template>
  <div class="navbar">
    <div class="navbar-left">
      <!-- 左侧内容 -->
      <slot name="left" />
    </div>
    <div class="navbar-title">
      <!-- 标题 -->
      <!--      {{ props.title }}-->
      重庆职业培训
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
  height: 80px; /* 导航栏高度 */
  background-color: #0f62c4; /* 导航栏背景色 */
  color: #cfdfed; /* 文字颜色 */
  padding: 0 20px; /* 左右内边距 */
}

.navbar-left,
.navbar-right {
  display: flex;
  align-items: center;
}

.navbar-title {
  flex-grow: 1; /* 占据所有可用的中间空间 */
  text-align: center; /* 文本居中对齐 */
  font-size: 23px;
  font-weight: bolder;
  transform: skew(-5deg);
  margin: 0 12rem 0 0;
}
</style>

<!--<style scoped>-->
<!--.navbar {-->
<!--  display: flex;-->
<!--  justify-content: space-between;-->
<!--  align-items: center;-->
<!--  height: 80px; /* 导航栏高度 */-->
<!--  background-color: #0f62c4; /* 导航栏背景色 */-->
<!--  color: #ffffff; /* 文字颜色 */-->
<!--  padding: 0 20px; /* 左右内边距 */-->
<!--}-->

<!--.navbar-left,-->
<!--.navbar-right {-->
<!--  display: flex;-->
<!--  align-items: center;-->
<!--}-->

<!--.navbar-title {-->
<!--  font-size: 23px;-->
<!--  font-weight: bolder;-->
<!--  transform: skew(-5deg);-->
<!--  margin: 0 12rem 0 0;-->
<!--}-->
<!--</style>-->
