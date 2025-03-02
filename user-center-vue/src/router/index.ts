import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomePage from "@/pages/HomePage.vue";
import LoginPage from "@/pages/user/LoginPage.vue";
import RegisterPage from "@/pages/user/RegisterPage.vue";
import ManagerPage from "@/pages/admin/ManagerPage.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomePage,
  },
  {
    path: "/user/login",
    name: "login",
    component: LoginPage,
  },
  {
    path: "/user/register",
    name: "register",
    component: RegisterPage,
  },
  {
    path: "/admin/manager",
    name: "admin",
    component: ManagerPage,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
