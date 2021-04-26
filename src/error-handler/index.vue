<template>
  <div>
    <slot v-if="err" name="error" :err="err" :vm="vm" :info="info">{{
      defaultMessage
    }}</slot>
    <slot v-else></slot>
  </div>
</template>

<script>
import ERROR_MESSAGES from "./messages";
export default {
  name: "ErrorHandler",
  props: {
    stopPropagation: Boolean,
  },
  data() {
    return {
      defaultMessage: ERROR_MESSAGES.BOUNDARY_MESSAGE,
      err: null,
    };
  },
  errorCaptured(err) {
    // can send to sentry
    this.err = err;
    return !this.stopPropagation;
  },
};
</script>
