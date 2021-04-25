<template>
  <div :class="containerClassNames">
    <div class="row-span-2 col-span-6">
      <img
        src="http://cloud.funda.nl/valentina_media/067/206/810_grotere.jpg"
      />
    </div>
    <div class="shadow-md col-span-3">
      <img src="http://cloud.funda.nl/valentina_media/067/206/812_groot.jpg" />
    </div>
    <div class="shadow-md col-span-3">
      <img src="http://cloud.funda.nl/valentina_media/067/206/812_groot.jpg" />
    </div>
    <div class="shadow-md col-span-3">
      <img src="http://cloud.funda.nl/valentina_media/067/206/812_groot.jpg" />
    </div>
    <div class="shadow-md col-span-3">
      <img src="http://cloud.funda.nl/valentina_media/067/206/812_groot.jpg" />
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import GalleryThemes from "./types";
export default defineComponent({
  name: "CommonImageGallery",
  props: {
    cols: {
      type: Number,
      default: 12,
    },
    rows: {
      type: Number,
      default: 2,
    },
    theme: {
      type: String,
      default: GalleryThemes.FUNDA_DEFAULT_THEME,
    },
  },
  computed: {
    containerClassNames: function () {
      const defaultClassNames = ["grid grid-flow-row gap-1"];
      const classNames = [
        ...defaultClassNames,
        `grid-rows-${this.rows}`,
        `grid-cols-${this.cols}`,
      ];
      return classNames;
    },
  },
});
</script>
