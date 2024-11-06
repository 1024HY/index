<template>
  <div>
<!--    <van-sticky @scroll="handleScroll">-->
    <div class="van-nav-bar-nb" :style="{
      position: 'relative',
      // 渐变色
      background: 'linear-gradient(35deg, #0F63C6 0%, #2299dd78 100%)',
      height: '5.5rem'
    }">
      <van-image class="navbar-logo" src="docs/assets/img/jgq/header/logo.png" alt=""/>
    </div>
<!--    </van-sticky>-->
  </div>
</template>

<script setup lang="ts">
import {onMounted, ref} from "vue";
import router from "@/router";
const navBarFlag = ref(router.currentRoute.value.meta.hideNavBar);

const props = defineProps({
  // 在滚动到多少像素时隐藏导航栏
  scrollTop: Number
});

const handleScroll = (e: any) => {
  navBarFlag.value = e.scrollTop > (null != props.scrollTop ? props.scrollTop : 300);
};
onMounted(() => {
  console.log('navBarFlag', navBarFlag.value);
});
</script>
<style scoped lang="less">
.navbar-logo {
  margin: 2rem 0 0 0.8rem;
  width: 14.5rem;
}
</style>