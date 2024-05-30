<template>
  <div>
    <!--这是一个 UI 组件库中的导航栏组件，通过设置 fixed 属性使导航栏固定在页面顶部，设置 placeholder 属性使导航栏占据页面布局空间，避免页面内容被导航栏遮挡。-->
    <!--    <van-nav-bar fixed placeholder @click-right="onClickRight">-->
    <!--      <template #right>-->
    <!--        <svg-icon-->
    <!--          class="text-[18px]"-->
    <!--          :name="useDarkMode() ? 'light' : 'dark'"-->
    <!--        />-->
    <!--      </template>-->
    <!--    </van-nav-bar>-->
    <navBar :title="title" />
  </div>
</template>

<script setup lang="ts">
// import { useDarkMode, useToggleDarkMode } from "@/hooks/useToggleDarkMode";
import navBar from "@/components/NavBar/NavBar.vue";
import { ref } from "vue";
// 导航栏标题
const title = ref("重庆职业培训管理学院");

// const onClickRight = () => {
//   useToggleDarkMode();
// };
</script>

<style scoped></style>
