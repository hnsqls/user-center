<template>
  <div id="globalHeader">
    <a-row :wrap="false">
      <a-col flex="200px">
        <div id="globalTitle">
          <img class="logo" src="../assets/logo.png" alt="logo" />
          <span class="title">用户管理中心</span>
        </div>
      </a-col>
      <a-col flex="auto">
        <a-menu
          v-model:selectedKeys="current"
          mode="horizontal"
          :items="items"
          @click="doMenuClick"
        />
      </a-col>
      <a-col flex="100px">
        <div>
          <a-button type="primary">登录</a-button>
        </div>
      </a-col>
    </a-row>
  </div>
</template>
<script lang="ts" setup>
import { h, ref } from "vue";
import { HomeOutlined, CrownOutlined } from "@ant-design/icons-vue";
import { MenuProps } from "ant-design-vue";
import { useRouter } from "vue-router";

const router = useRouter();
const current = ref<string[]>(["mail"]);
const items = ref<MenuProps["items"]>([
  {
    key: "/",
    icon: () => h(HomeOutlined),
    label: "主页",
    title: "主页",
  },
  {
    key: "/user/login",

    label: "用户登录",
    title: "用户登录",
  },
  {
    key: "/user/register",

    label: "用户注册",
    title: "用户注册",
  },
  {
    key: "/user/admin",
    icon: () => h(CrownOutlined),
    label: "用户管理",
    title: "用户管理",
  },
  {
    key: "about",
    label: h(
      "a",
      { href: "https://github.com/hnsqls", target: "_blank" },
      "关于作者"
    ),
    title: "Navigation Four - Link",
  },
  {
    key: "aboutProject",
    label: h(
      "a",
      { href: "https://github.com/hnsqls/user-center", target: "_blank" },
      "关于项目"
    ),
    title: "Navigation Four - Link",
  },
]);

//更新路由
router.afterEach((to, from) => {
  // to and from are both route objects.
  current.value = [to.path];
});
// 路由跳转

const doMenuClick = ({ key }: { key: string }) => {
  router.push({
    path: key,
  });
};
</script>
<style>
#globalTitle {
  display: flex;
  align-items: center;
}
.title {
  color: black;
  font-size: 20px;
  margin-left: 5px;
}
.logo {
  padding-top: 10px;
  margin: 10px;
  width: 48px;
}
</style>
