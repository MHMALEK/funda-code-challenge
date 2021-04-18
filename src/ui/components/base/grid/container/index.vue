<template>
  <div :class="classNames">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "BaseGridContainer",
  props: {
    withPadding: {
      type: Boolean,
      default: true,
    },
    centerContent: {
      type: Boolean,
      default: true,
    },
  },
  computed: {
    classNames: function () {
      return {
        "px-4": this.withPadding,
        "mx-auto": this.centerContent,
      };
    },
  },
};
</script>
