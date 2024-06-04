<template>
  <div>{{ state.id }}</div>
  <div>{{ state.name }}</div>
</template>

<script setup lang="ts">
import { onMounted, reactive, ref } from "vue";
import router from "@/router";
const state = reactive({
  id: "",
  name: ""
});
onMounted(() => {
  state.id = router.currentRoute.value.query.id as string;
  state.name = router.currentRoute.value.query.name as string;
  console.log(state.id);
});
</script>
