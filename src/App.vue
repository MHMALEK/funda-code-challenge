<template>
  <main-error-handler>
    <Router />
  </main-error-handler>
</template>

<script>
import Router from "./router/index.vue";
import MainErrorHandler from "./error-handler/index.vue";

export default {
  components: {
    Router,
    MainErrorHandler,
  },
};
</script>
