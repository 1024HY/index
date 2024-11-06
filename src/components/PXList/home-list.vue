<template>
  <div class="list-items text-justify bg-white mx-2 my-4 rounded-md">
    <p class="text-[16px] px-4 py-2 font-black text-black">{{
        props.parentObj?.labelName != null ? props.parentObj?.labelName : '--'
      }}
    </p>
    <p class="text-xs px-4 py-0.5 flex items-center">
      <van-icon class="relative my-icon mr-2" name="src/icons/svg/pxdj.png" size="20"/>
      培训等级：{{
        props.parentObj?.aha121 != null ? props.parentObj?.aha121 : '--'
      }}
    </p>
    <p class="text-xs px-4 py-0.5 flex items-center">
      <van-icon class="relative my-icon mr-2" name="src/icons/svg/pxqy.png" size="20"/>
      培训区域：{{
        props.parentObj?.asd088s != null ? props.parentObj?.asd088s : '--'
      }}
    </p>
    <p class="text-xs px-4 py-0.5 flex items-center">
      <van-icon class="relative my-icon mr-2" name="src/icons/svg/bmsj.png" size="20"/>
      报名时间：{{
        props.parentObj?.createDateTime != null ? props.parentObj?.createDateTime : '--'
      }}
    </p>
    <p class="text-xs px-4 py-0.5 pb-2 flex items-center">
      <van-icon class="relative my-icon mr-2" name="src/icons/svg/pxsj.png" size="20"/>
      培训时间：{{
        props.parentObj?.aae030 != null ? props.parentObj.aae030 : '--'
      }}
    </p>
    <van-button class="van-button-item" size="large" type="primary" round
    >立即报名
    </van-button>
  </div>
</template>

<script setup lang="ts">
import {defineProps, onMounted} from "vue";
// 获取父页面的数据
const props = defineProps({
  parentObj: Object
});

onMounted(() => {
  console.log('props.parentObj', props);
});
</script>

<style scoped lang="less">
.list-items {
  position: relative;
}

.van-button-item {
  position: absolute;
  font-family: Source Han Sans CN, serif;
  background: linear-gradient(85deg, #49a6fd 0%, #0F63C6 80%);
  font-size: 0.8rem;
  width: 25%;
  height: 25%;
  margin: -2.9rem 0.5rem 100% 74%;
  font-weight: bold;
}
</style>
