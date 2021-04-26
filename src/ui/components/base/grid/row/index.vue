<template>
  <div :class="containerClassNames">
    <slot name="title"></slot>
    <slot name="description">s</slot>
  </div>
</template>
<script>
export default {
  name: "BaseGridRow",
  props: {
    backroundColor: {
      type: String,
      default: "bg-gray-50",
    },
  },
  computed: {
    containerClassNames: function () {
      const classNames = `${this.backroundColor} px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6`;
      return classNames;
    },
  },
};
</script>
