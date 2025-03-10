import { createApp } from "vue";
import App from "./App.vue";
import { createPinia } from "pinia";
import router from "./router";
import Antd from "ant-design-vue";
import "ant-design-vue/dist/reset.css";

const pinia = createPinia();
createApp(App).use(pinia).use(Antd).use(router).mount("#app");
