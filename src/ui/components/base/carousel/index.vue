<template>
  <div>
    <div>a</div>
    <div>b</div>
    <div>c</div>
  </div>
</template>
<script>
import $ from "jquery";
import "slick-carousel";

export default {
  props: {
    options: {
      type: Object,
      default: function () {
        return {};
      },
    },
  },
  mounted: function () {
    this.create();
  },
  unmounted: function () {
    $(this.$el).slick("unslick");
  },
  methods: {
    create: function () {
      const $slick = $(this.$el);
      $slick.slick(this.options);
    },
    destroy: function () {
      $(this.$el).slick("unslick");
    },
    reSlick: function () {
      this.destroy();
      this.create();
    },
    next: function () {
      $(this.$el).slick("slickNext");
    },
    prev: function () {
      $(this.$el).slick("slickPrev");
    },
  },
};
</script>

<style>
@import "slick-carousel/slick/slick.css";
</style>
