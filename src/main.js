import { createApp } from "vue";
import router from "./router/config";
import store from "./store";
import App from "./App.vue";

// tailwind css
import "./styles/index.css";

const app = createApp(App);
app.use(router);
app.use(store);
app.mount("#app");
