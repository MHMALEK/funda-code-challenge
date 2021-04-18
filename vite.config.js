import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { VitePWA } from "vite-plugin-pwa";

const createServerConfig = () => {
  const defaultUrl = "https://partnerapi.funda.nl";
  return {
    // TODO: I got error from API in local host, so I added proxy to workaround CORS Error
    proxy: {
      "/proxyToFundaApi": {
        target: defaultUrl,
        changeOrigin: true,
        rewrite: (path) => {
          return path.replace(/^\/proxyToFundaApi/, "");
        },
      },
    },
  };
};
export default defineConfig({
  plugins: [
    vue(),
    VitePWA({
      registerType: "autoUpdate",
    }),
  ],
  server: createServerConfig(),
});
