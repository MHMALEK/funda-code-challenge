<template>
  <div :class="containerClassNames">
    <div class="row-span-2 col-span-6">
      <base-image
        :id="mainImage.Id"
        :media-items="mainImage.MediaItems"
        :metadata="mainImage.MediaItems.Metadata"
      />
    </div>
    <div v-for="image in images" :key="image.Id" class="col-span-3">
      <base-image
        :id="image.Id"
        :media-items="image.MediaItems"
        :metadata="image.Metadata"
      />
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import GalleryThemes from "./types";
import BaseImage from "../../base/image/index.vue";

export default defineComponent({
  name: "CommonImageGallery",

  components: {
    BaseImage,
  },
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
    images: {
      type: Array,
      required: true,
    },
    mainImage: {
      type: Object,
      required: true,
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
