<template>
  <section class="flex w-full items-center text-sm text-gray-300 font-medium">
    <div class="flex-1 flex items-center">
      <base-image
        :id="data.Id"
        :media-items="data.MediaItems"
        :metadata="data.MediaItems.Metadata"
      />
    </div>
  </section>
</template>

<script lang="ts">
// Base components

import BaseImage from "../../../../components/base/image/index.vue";

export default {
  name: "ImageCarouselItem",
  components: {
    BaseImage,
  },
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style></style>
