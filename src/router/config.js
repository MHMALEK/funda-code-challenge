import { createRouter, createWebHistory } from "vue-router";
import routesConfig from "./routes-config";

const router = createRouter({
  history: createWebHistory(),
  routes: routesConfig,
});

export default router;
