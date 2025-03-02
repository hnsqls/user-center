<template>
  <div id="app">
    <basic-layouts />
  </div>
</template>

<style></style>

<script setup lang="ts">
import BasicLayouts from "@/layouts/BasicLayouts.vue";
import { useLoginUserStore } from "@/store/useLoginUserStore";

const loginUserStore = useLoginUserStore();
loginUserStore.fetchLoginUser();
</script>
