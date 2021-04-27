<template>
  <div>
    <slot></slot>
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
        return {
          arrows: false,
          dots: true,
          dotsClass: "base-carousel__dots",
          fade: true,
        };
      },
    },
  },
  mounted: function () {
    this.create();
  },
  unmounted: function () {
    this.destroy();
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

<style lang="scss">
@import "slick-carousel/slick/slick.css";
@import "slick-carousel/slick/slick-theme.css";

.base-carousel__dots {
  display: flex;
  margin: 0 auto;
  text-align: center;
  align-items: center;
  justify-content: center;
  transition: all 0.3s;

  li {
    button {
      font-size: 0;
      background-color: gray;
      opacity: 0.5;
      width: 20px;
      height: 5px;
      border-radius: 16px;
      margin: 0 4px;
    }
    &.slick-active {
      button {
        opacity: 1;
      }
    }
  }
}
</style>
