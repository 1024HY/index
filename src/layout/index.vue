<script setup lang="ts">
import tabbar from "@/components/Tabbar/index.vue";
import NavBar from "@/components/NavBar/index.vue";
import { useCachedViewStoreHook } from "@/store/modules/cachedView";
import { useDarkMode } from "@/hooks/useToggleDarkMode";
import {computed, onMounted} from "vue";
import router from "@/router";

const cachedViews = computed(() => {
  return useCachedViewStoreHook().cachedViewList;
});
onMounted(() => {
  console.log('hideNavBar', router.currentRoute.value.meta.hideNavBar);
});
</script>


<template>
  <div class="app-wrapper">
    <van-config-provider :theme="useDarkMode() ? 'dark' : 'light'">
          <nav-bar :hidden="router.currentRoute.value.meta.hideNavBar"/>
      <router-view v-slot="{ Component }">
        <keep-alive :include="cachedViews">
          <component :is="Component" />
        </keep-alive>
      </router-view>
      <tabbar />
    </van-config-provider>
  </div>
</template>

<style lang="less" scoped>
@import "@/styles/mixin.less";

.app-wrapper {
  .clearfix();
  position: relative;
  background-color: #f3f4f5;
  width: 100%;
}
</style>
