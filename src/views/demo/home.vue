<template>
  <div class="px-home">
    <div class="kong-kim-items">
      <div
        v-for="(item, index) in items"
        :key="index"
        class="kong-kim"
        @click="sub(item, index)"
      >
        <div
          class="kong-kim-img"
          :style="{
            backgroundImage: `url(${item.backgroundImageUrl})`
          }"
        />
        <p>{{ item.name }}</p>
      </div>
    </div>
    <div class="scroller">
      <!--轮播图区-->
      <!--      <swiper-->
      <!--        class="swiper-content"-->
      <!--        :modules="modules"-->
      <!--        :centeredSlides="true"-->
      <!--        :pagination="{ enabled: true }"-->
      <!--        :loop="true"-->
      <!--        :loopAdditionalSlides="1"-->
      <!--      >-->
      <!--        <swiper-slide-->
      <!--          v-for="(item, index) in swiperItems"-->
      <!--          :key="index"-->
      <!--          class="swiper-content-item"-->
      <!--          @click="goToSwiper(item, index)"-->
      <!--        >-->
      <!--          <img :src="item.backgroundImageUrl" alt="" />-->
      <!--        </swiper-slide>-->
      <!--      </swiper>-->
      <van-swipe
        class="swiper-content"
        :autoplay="1000"
        :width="430"
        :loop="true"
        indicator-color="white"
      >
        <van-swipe-item
          v-for="(item, index) in swiperItems"
          :key="index"
          class="swiper-content-item"
          @click="goToSwiper(item, index)"
        >
          <img :src="item.backgroundImageUrl" alt="" />
        </van-swipe-item>
      </van-swipe>
    </div>

    <div class="list-filter">
      <van-dropdown-menu>
        <van-dropdown-item v-model="value1" :options="option1" />
        <van-dropdown-item v-model="value2" :options="option2" />
        <van-dropdown-item v-model="value2" :options="option2" />
        <van-dropdown-item v-model="value2" :options="option2" />
      </van-dropdown-menu>
    </div>
    <div class="list-district">列表查询区</div>
  </div>
</template>

<script setup lang="ts">
class Obj {
  id: number;
  name: string;
  backgroundImageUrl: string;
  path: string;

  constructor(
    id: number,
    name: string,
    backgroundImageUrl: string,
    path: string
  ) {
    this.id = id;
    this.name = name;
    this.backgroundImageUrl = backgroundImageUrl;
    this.path = path;
  }
}

import router from "@/router";

import { ref, onMounted } from "vue";
import { Autoplay, Navigation, Pagination, A11y } from "swiper/modules";

import "vant/es/button/style/index";

const modules = ref([Autoplay, Navigation, Pagination, A11y]);
const swiperItems = ref([]);
const value1 = ref(0);
const value2 = ref("a");
const option1 = ref([
  { text: "全部商品", value: 0 },
  { text: "新款商品", value: 1 },
  { text: "活动商品", value: 2 }
]);
const option2 = ref([
  { text: "默认排序", value: "a" },
  { text: "好评排序", value: "b" },
  { text: "销量排序", value: "c" }
]);
/**
 * 轮播图假数据区
 */
const swiperItemsTest = [
  {
    id: 324,
    name: "轮播图1",
    backgroundImageUrl: "docs/assets/img/lbt/mtx.jpg"
  },
  {
    id: 124,
    name: "轮播图2",
    backgroundImageUrl: "docs/assets/img/lbt/fbzq.jpg"
  },
  {
    id: 534,
    name: "轮播图3",
    backgroundImageUrl: "docs/assets/img/lbt/jqzygz.jpg"
  }
];

/**
 * 金刚区假数据
 */
const items = [
  {
    id: 1,
    name: "培训报名",
    backgroundImageUrl: "docs/assets/img/jgq/1.png",
    path: "https://ggfw.rlsbj.cq.gov.cn/cqjy/zxpx/cqzypx/"
  },
  {
    id: 2,
    name: "在线学习",
    backgroundImageUrl: "docs/assets/img/jgq/2.png",
    path: "zxxx"
  },
  {
    id: 3,
    name: "定点打卡",
    backgroundImageUrl: "docs/assets/img/jgq/3.png",
    path: "clockIn"
  },
  {
    id: 4,
    name: "证书查询",
    backgroundImageUrl: "docs/assets/img/jgq/4.png",
    path: "zscx"
  },
  {
    id: 5,
    name: "政策宣传",
    backgroundImageUrl: "docs/assets/img/jgq/5.png",
    path: "zcxc"
  },
  {
    id: 6,
    name: "机构目录",
    backgroundImageUrl: "docs/assets/img/jgq/6.png",
    path: "jgml"
  },
  {
    id: 7,
    name: "培训师资",
    backgroundImageUrl: "docs/assets/img/jgq/7.png",
    path: "pxsz"
  },
  {
    id: 8,
    name: "电子档案",
    backgroundImageUrl: "docs/assets/img/jgq/8.png",
    path: "dzda"
  }
];

/**
 * 金刚区跳转
 * @param it
 * @param index
 */
const sub = (it: Obj, index: number) => {
  console.log("=======>", it, index);
  if (index == 0) {
    window.location.href = "https://ggfw.rlsbj.cq.gov.cn/cqjy/zxpx/cqzypx/";
  } else {
    router.push({ path: it.path });
  }
};

/**
 * 初始化轮播图
 */
const initSwiper = () => {
  for (let it of swiperItemsTest) {
    swiperItems.value.push(it);
  }
  console.log("轮播图初始化完毕");
};

/**
 * 轮播图点击事件区域
 * @param it
 * @param index
 */
const goToSwiper = (it: object, index: number) => {
  console.log(it, index);
};

/**
 * 初始化执行
 */
onMounted(() => {
  initSwiper();
});
</script>

<style scoped>
/*金刚区*/
.kong-kim-items {
  background-color: #ffffff;
  display: flex;
  flex-wrap: wrap; /* 设置换行 */
  width: 100%; /* 设置表格宽度为100% */
  height: 13rem; /* 取消固定高度 */
  margin: 1rem 0 1rem 0;
  /*每行间距*/
  .kong-kim {
    background-color: #ffffff;
    width: calc(30% - 20px); /* 每行显示四个元素，减去间隔 */
    height: 5rem;
    margin: 12px 0 0 0; /* 设置元素间距 */
    /*字体效果*/

    p {
      text-align: center; /* 文本居中对齐 */
      color: rgba(28, 28, 30, 0.75);
      font-size: 11px;
      font-weight: bold;
      padding: 10px 0 0 0;
    }

    /* 图标 */
    .kong-kim-img {
      margin: auto;
      width: 3rem;
      height: 3rem;
      background-size: contain; /* 让图片按比例缩放，填满容器，但不会裁剪 */
      background-position: center; /* 图片居中 */
      background-repeat: no-repeat; /* 防止图片重复 */
    }
  }

  /*点击下陷效果*/
  .kong-kim:active {
    transform: translateY(2px);
  }
}

/*滚动图区域 | 筛选区 | 列表区*/
.scroller,
.list-filter,
.list-district {
  display: flex;
  justify-content: center;
  align-items: center;
}
/* 滚动图区域 */
.scroller {
  .swiper-content {
    height: 8rem;
    .swiper-content-item {
      background-size: cover;
      background-position: center;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
}

/* 筛选区 */
.list-filter {
  background-color: rgb(255, 255, 255);
  height: 3rem;
  width: 100%;
  margin: 1rem 0 0 0;
}

/* 列表区 */
.list-district {
  background-color: rgb(255, 255, 255);
  height: 122rem;
  width: 100%;
  margin: 1rem 0 0 0;
}
</style>

<style lang="less">
.van-dropdown-menu__item {
  width: 95px;
}
</style>
