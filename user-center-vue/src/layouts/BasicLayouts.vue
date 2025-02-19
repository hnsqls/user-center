<template>
  <div id="Basic-layout">
    <a-layout>
      <a-layout-header class="header"> <GlobalHeader /> </a-layout-header>
      <a-layout-content class="content">
        <router-view></router-view>
      </a-layout-content>
      <a-layout-footer class="footer">
        <a href="https://github.com/hnsqls" target="_blank"> 作者by hnsqls </a>
      </a-layout-footer>
    </a-layout>
  </div>
</template>

<style>
#Basic-layout .footer {
  bottom: 0;
  position: fixed;
  text-align: center;
  left: 0;
  right: 0;
  padding: 16px;
}

#Basic-layout .content {
  padding: 20px;
  margin-bottom: 20px;
  background: linear-gradient(to right, #efefef, #ffff);
}

#Basic-layout .header {
  background: linear-gradient(to right, #efefef, #ffff);
  padding-inline: 0px;
  padding: auto;
}
</style>

<script setup lang="ts">
import GlobalHeader from "@/components/GlobalHeader.vue";
</script>
