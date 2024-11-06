<template>
  <div class="px-home">
    <div class="kong-kim-items">
      <van-row
          v-for="(item, index) in items"
          :key="index"
          span="8"
          wrap
          class="kong-kim"
          @click="sub(item, index)"
      >
        <van-col class="kong-kim-img van-haptics-feedback">
          <van-image
              :src="item.backgroundImageUrl"
              width="3rem"
              height="3rem"
              fit="contain"
              position="right top"
          >
            <div class="kong-kim-img-text">{{ item.name }}</div>
          </van-image>
        </van-col>
      </van-row>
    </div>
    <div class="scroller">
      <!--轮播图区 autoplay="3500"
          duration="1100"-->
      <van-swipe
          class="swiper-content"
          indicator-color="white"
      >
        <van-swipe-item
            v-for="(item, index) in swiperItems"
            :key="index"
            class="swiper-content-item"
            @click="goToSwiper(item, index)"
        >
          <img
              class="swiper-content-item-img h-[100%] mx-auto"
              :src="item.backgroundImageUrl"
              alt=""/>
        </van-swipe-item>
      </van-swipe>
    </div>

    <div class="list-filter">
      <van-dropdown-menu>
        <van-dropdown-item
            v-model="typeValue"
            :title="typeTitle == '' ? '类型' : typeTitle"
            :options="optionType"
            @change="onTypeChange"
            @open="onTypeOpen"
        />
        <van-dropdown-item
            v-model="regionValue"
            :title="regionTitle == '' ? '区县' : regionTitle"
            :options="optionRegion"
            @change="onRegionChange"
            @open="onRegionOpen"
        />

        <!-- 时间选择器 -->
        <van-dropdown-item :title="title">
          <van-calendar
              :style="{ height: '110vmin' }"
              v-model:show="show" poppable type="range" :round="false" @confirm="onConfirm" allow-same-day close-on-click-outside/>
        </van-dropdown-item>
        <!--                <van-dropdown-item-->
        <!--                  ref="startTimeCheckbox"-->
        <!--                  v-model="startTimeChecked"-->
        <!--                  :title="startTimeTitle ? startTimeTitle : '开始时间'"-->
        <!--                >-->
        <!--                  <van-date-picker-->
        <!--                    v-model="startTimeCurrentDate"-->
        <!--                    calss="active-start-time"-->
        <!--                    type="date"-->
        <!--                    title="选择开始时间"-->
        <!--                    :min-date="minDate"-->
        <!--                    :max-date="maxDate"-->
        <!--                    option-height="2.2rem"-->
        <!--                    :swipe-duration="800"-->
        <!--                    :cancel-button-text="`重置`"-->
        <!--                    @confirm="subStartConfirm(startTimeCurrentDate, true)"-->
        <!--                    @cancel="subStartConfirm(startTimeCurrentDate, false)"-->
        <!--                  />-->
        <!--                </van-dropdown-item>-->

        <!--                <van-dropdown-item-->
        <!--                    class="active-end-time"-->
        <!--                  ref="endTimeCheckbox"-->
        <!--                  v-model="endTimeChecked"-->
        <!--                  :title="endTimeTitle ? endTimeTitle : '结束时间'"-->
        <!--                >-->
        <!--                  <van-date-picker-->
        <!--                    v-model="endTimeCurrentDate"-->
        <!--                    title="选择结束时间"-->
        <!--                    :min-date="minDate"-->
        <!--                    :max-date="maxDate"-->
        <!--                    option-height="2rem"-->
        <!--                    :swipe-duration="800"-->
        <!--                    :cancel-button-text="`重置`"-->
        <!--                    @confirm="subEndConfirm(endTimeCurrentDate, true)"-->
        <!--                    @cancel="subEndConfirm(endTimeCurrentDate, false)"-->
        <!--                  />-->
        <!--                </van-dropdown-item>-->
      </van-dropdown-menu>
    </div>
    <div class="list-district">

      <PXList
          v-for="(item, index) in homeListItems"
          :key="index"
          :parentObj="item"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import router from "@/router";
import {ref} from "vue";
import {showFailToast} from "vant";
import PXList from "@/components/PXList/home-list.vue";
import "vant/es/toast/style";

// 类型选择器============开始
const typeValue = ref([]);
const typeTitle = ref("");
const optionType = ref([{text: "全部", value: null}]);
const testOptionType = [
  {text: "改善你的企业培训（IYB）", value: 0},
  {text: "创业意识培训（GYB）", value: 1},
  {text: "创办你的企业培训（SYB）", value: 2}
];
optionType.value = [optionType.value[0], ...testOptionType];
// 类型选择器============结束

// 区县选择器============开始
const regionValue = ref([]);
const regionTitle = ref("");
const optionRegion = ref([{text: "全部", value: null}]);
const testOptionRegin = [
  {text: "沙坪坝区", value: 0},
  {text: "南岸区", value: 1},
  {text: "丰都县", value: 2}
];
optionRegion.value = [optionRegion.value[0], ...testOptionRegin];
// 区县选择器============结束

/* 轮播图============开始 */
const swiperItems = ref([
  {
    id: 324,
    name: "轮播图1",
    backgroundImageUrl: "/docs/assets/img/lbt/mtx.png"
  },
  {
    id: 124,
    name: "轮播图2",
    backgroundImageUrl: "/docs/assets/img/lbt/mlfbzq.png"
  },
  {
    id: 534,
    name: "轮播图3",
    backgroundImageUrl: "/docs/assets/img/lbt/cypezq.png"
  },
  {
    id: 534,
    name: "轮播图4",
    backgroundImageUrl: "/docs/assets/img/lbt/pxzq.png"
  },
  {
    id: 531,
    name: "轮播图4",
    backgroundImageUrl: "/docs/assets/img/lbt/xxfbzq.png"
  }
]);
/* 轮播图============结束 */

/* 时间选择器============开始 */
const title = ref('时间');
const show = ref(true);
const formatDate = (date: any) => `${date.getMonth() + 1}/${date.getDate()}`;
const onConfirm = (values: any) => {
  const [start, end] = values;
  show.value = false;
  title.value = `${formatDate(start)} - ${formatDate(end)}`;
};


const minDate = ref(new Date(1999, 0, 3));
const maxDate = ref(new Date(2050, 12, 1));

const startTimeTitle = ref("");
const startTimeChecked = ref(false);
const startTimeCheckbox = ref(null);
const startTimeCurrentDate = ref(["2021", "01", "01"]);
const showStartTimePicker = ref(false);

const endTimeTitle = ref("");
const endTimeChecked = ref(false);
const endTimeCheckbox = ref(null);
const endTimeCurrentDate = ref(["2021", "01", "01"]);
/* 时间选择器============结束 */

/**
 * 金刚区假数据
 */
const items = [
  {
    id: 1,
    name: "培训报名",
    backgroundImageUrl: "/docs/assets/img/jgq/pxbm.png",
    path: "https://ggfw.rlsbj.cq.gov.cn/cqjy/zxpx/cqzypx/"
  },
  {
    id: 2,
    name: "在线学习",
    backgroundImageUrl: "/docs/assets/img/jgq/zxxx.png",
    path: "zxxx"
  },
  {
    id: 3,
    name: "定点打卡",
    backgroundImageUrl: "/docs/assets/img/jgq/dddk.png",
    path: "clockIn"
  },
  {
    id: 4,
    name: "证书查询",
    backgroundImageUrl: "/docs/assets/img/jgq/zscx.png",
    path: "zscx"
  },
  {
    id: 5,
    name: "政策宣传",
    backgroundImageUrl: "/docs/assets/img/jgq/zcxc.png",
    path: "zcxc"
  },
  {
    id: 6,
    name: "机构目录",
    backgroundImageUrl: "/docs/assets/img/jgq/jgml.png",
    path: "jgml"
  },
  {
    id: 7,
    name: "培训师资",
    backgroundImageUrl: "/docs/assets/img/jgq/pxsz.png",
    path: "pxsz"
  },
  {
    id: 8,
    name: "电子档案",
    backgroundImageUrl: "/docs/assets/img/jgq/dzda.png",
    path: "dzda"
  }
];

/**
 * 列表假数据
 */
const homeListItems = [
  {
    labelName: '养老护理员',
    aha121: '一级',
    asd088s: '重庆市南岸区',
    createDateTime: '2022-11-16 至 2022-11-26',
    aae030: '2022-11-30 至 2022-12-31'
  },
  {
    labelName: '美容美发高级培训',
    aha121: '三级',
    asd088s: '重庆市沙坪坝区',
    createDateTime: '2022-11-12 至 2022-11-25',
    aae030: '2022-11-30 至 2022-12-31'
  },
  {
    labelName: '下料工',
    aha121: '二级',
    asd088s: '重庆市江北区',
    createDateTime: '2022-12-19 至 2022-12-22',
    aae030: '2023-1-02 至 2023-02-31'
  },
  {
    labelName: '养老护理员',
    aha121: '一级',
    asd088s: '重庆市南岸区',
    createDateTime: '2022-11-16 至 2022-11-26',
    aae030: '2022-11-30 至 2022-12-31'
  },
  {
    labelName: '美容美发高级培训',
    aha121: '三级',
    asd088s: '重庆市沙坪坝区',
    createDateTime: '2022-11-12 至 2022-11-25',
    aae030: '2022-11-30 至 2022-12-31'
  },
  {
    labelName: '下料工',
    aha121: '二级',
    asd088s: '重庆市江北区',
    createDateTime: '2022-12-19 至 2022-12-22',
    aae030: '2023-1-02 至 2023-02-31'
  }
]

/**
 * 金刚区跳转
 * @param it
 * @param index
 */
const sub = (it: any, index: number) => {
  console.log("=======>", it, index);
  if (index == 0) {
    window.location.href = "https://ggfw.rlsbj.cq.gov.cn/cqjy/zxpx/cqzypx/";
  } else {
    router.push({path: it.path});
  }
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
 * 开始时间选择器事件
 * @param e 选择的时间数据
 * @param flag true:确定 false:重置
 */
const subStartConfirm = (e: any, flag: boolean) => {
  // 回显选择的时间
  console.log("选择的时间", e);
  let timeStr = `${e[0]}-${e[1]}-${e[2]}`;
  switch (flag) {
    case true: // 确定
      // 如果结束时间小于开始时间，提示用户
      if (endTimeTitle.value != "" && timeStr > endTimeTitle.value) {
        // 弹窗提醒
        showFailToast("开始时间不能大于结束时间");
      } else {
        // 开始时间
        startTimeTitle.value = timeStr;
      }
      break;
    case false: // 重置
      startTimeTitle.value = "";
      break;
  }
  // 关闭下拉选择器
  startTimeCheckbox.value.toggle();
};

/**
 * 结束时间选择器事件
 * @param e 选择的时间数据
 * @param flag true:确定 false:重置
 */
const subEndConfirm = (e: any, flag: boolean) => {
  // 回显选择的时间
  console.log("选择的时间", e);
  let timeStr = `${e[0]}-${e[1]}-${e[2]}`;
  switch (flag) {
    case true: // 确定
      // 如果结束时间小于开始时间，提示用户
      if (startTimeTitle.value != "" && timeStr < startTimeTitle.value) {
        showFailToast("结束时间不能小于开始时间");
      } else {
        // 开始时间
        endTimeTitle.value = timeStr;
      }
      break;
    case false: // 重置
      endTimeTitle.value = "";
      break;
  }
  // 关闭下拉选择器
  endTimeCheckbox.value.toggle();
};

/**
 * 类型下拉选择器点击选项导致value变化时触发事件
 * @param e 选择的值
 */
const onTypeChange = (e: any) => {
  const index = optionType.value.findIndex(option => option.value === e);
  // 如果选择的是第一个，清空输入框
  if (e == null && index == 0) {
    typeTitle.value = "";
  } else {
    // 回显选择的值
    typeTitle.value = optionType.value[index].text;
  }
  console.log("onChange", e, index);
};

/**
 * 类型下拉选择器打开菜单栏时触发事件
 */
const onTypeOpen = () => {
  console.log("点击类型下拉开始渲染数据");
};

/**
 * 区县下拉选择器事件
 * @param e 选择的值
 */
const onRegionChange = (e: any) => {
  const index = optionType.value.findIndex(option => option.value === e);
  // 如果选择的是第一个，清空输入框
  if (e == null && index == 0) {
    regionTitle.value = "";
  } else {
    // 回显选择的值
    regionTitle.value = optionRegion.value[index].text;
  }
  console.log("onChange", e, index);
};

const onRegionOpen = () => {
  console.log("点击区县下拉开始渲染数据");
};

const onDateOpen = () => {
  show.value = !show.value
};

const onClosedOpen = () => {
  show.value = !show.value
};

</script>

<style scoped lang="less">
/* 金刚区 */
.kong-kim-items {
  background-color: #ffffff;
  display: flex;
  justify-content: space-around;
  flex-direction: column; /* 垂直方向排列子元素 */
  align-content: space-around; /* 垂直方向均匀分布 */
  flex-wrap: wrap; /* 设置换行 */
  width: 100%;
  height: 12.5rem;
  margin: 0 0 0.8rem 0;
  /*每行间距*/

  .kong-kim {
    /* 设置元素自适应屏幕宽度 */
    width: 20%;
    /* 设置每行4个元素 */
    background-color: #ffffff;
    height: 4rem;
    margin: 0.5rem 0 1rem; /* 设置元素间距 */
    display: flex;
    flex-direction: column; /* 垂直方向排列子元素 */
    align-items: center; /* 水平方向居中对齐 */

    /* 图标 */

    .kong-kim-img {
      flex: 1;
      position: relative;
      user-select: none; /* 禁止用户选择 */
      margin: auto;
      width: 3rem;
      height: 3rem;
      background-size: contain; /* 让图片按比例缩放，填满容器，但不会裁剪 */
      background-position: center; /* 图片居中 */
      background-repeat: no-repeat; /* 防止图片重复 */

      /*字体效果*/

      .kong-kim-img-text {
        position: absolute;
        text-align: center; /* 文本居中对齐 */
        color: #333333;
        font-size: 0.71rem;
        font-weight: bold;
        padding: 3vmin 0 0 0.1rem;
      }
    }
  }

  /*点击下陷效果*/

  .kong-kim:active {
    transform: translateY(2px);
  }
}

/* 轮播图 */
.van-swipe {
  width: auto;
  height: 21vmin;
}

/*点击下陷效果*/
.van-swipe-item:active {
  transform: translateY(1px);
}

/* 筛选区 */
.list-filter {
  width: 100%;
  margin: 0.6rem 0 auto;

  * {
    font-size: 3vmin;
    font-weight: bold;
  }
}
/* 覆盖 Vant 日历选择器弹出层的高度 */
.van-calendar {
  height: 1vmin;
  color: red;
}

.van-calendar {
  height: 1vmin;
}

/* 列表区
*/
.list-district {
  width: 100%;

  .list-filter-item {
    background-color: #ffffff;
    border-radius: 0.4rem;
    box-shadow: 0 0.1rem 0.2rem rgba(0, 0, 0, 0.1);
  }
}
</style>
