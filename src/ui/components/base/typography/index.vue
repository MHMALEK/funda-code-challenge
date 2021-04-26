<template>
  <component :is="tag">
    <slot></slot>
  </component>
</template>
<script>
export default {
  name: "BaseTypography",
  props: {
    tag: {
      type: String,
      default: "p",
      validation: function (value) {
        const acceptableHTMLTagsForTypography = [
          "p",
          "span",
          "h1",
          "h2",
          "h3",
          "h4",
          "h5",
          "h6",
        ];
        if (acceptableHTMLTagsForTypography.includes(value)) {
          return true;
        }
        return false;
      },
    },
    // more option like size and color and ... can be add here
  },
};
</script>
