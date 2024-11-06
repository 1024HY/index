<script setup lang="ts">
import { isExternal } from "@/utils/validate";
import { computed } from "vue";

interface Props {
  name: string;
  className?: string;
  type?: string; // 新增类型属性，用于区分 SVG 和 PNG
}

const props = withDefaults(defineProps<Props>(), {
  name: "",
  className: "",
  type: "svg" // 默认类型为 SVG
});

const isExternalIcon = computed(() => isExternal(props.name));
const iconName = computed(() => `#icon-${props.name}`);
const svgClass = computed(() => {
  if (props.className) {
    return "svg-icon " + props.className;
  } else {
    return "svg-icon";
  }
});

const styleExternalIcon = computed(() => {
  return {
    mask: `url(${props.name}) no-repeat 50% 50%`,
    "-webkit-mask": `url(${props.name}) no-repeat 50% 50%`
  };
});
</script>

<template>
  <div v-if="props.type === 'png'" :class="svgClass" v-bind="$attrs">
    <img :src="props.name" :class="svgClass" alt="icon" />
  </div>
  <div
      v-else-if="isExternalIcon"
      :style="styleExternalIcon"
      class="svg-external-icon svg-icon"
      v-bind="$attrs"
  />
  <svg v-else :class="svgClass" aria-hidden="true" v-bind="$attrs">
    <use :xlink:href="iconName" />
  </svg>
</template>

<style scoped>
.svg-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}

.svg-external-icon {
  background-color: currentColor;
  mask-size: cover !important;
  display: inline-block;
}
</style>
