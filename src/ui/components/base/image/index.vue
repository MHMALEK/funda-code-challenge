<template>
  <a :href="defaultImage">
    <picture>
      <!-- eslint-disable vue/valid-v-for -->
      <!-- disabled because wanted to use image Id as key -->
      <source
        v-for="mediaItem in mediaItems"
        :key="id"
        :media="`$(min-width:${mediaItem.Width}px)`"
        :srcset="mediaItem.UrlSecure"
      />
      <!-- use the last one as default image -->
      <img :src="defaultImage" :alt="metadata" />
    </picture>
  </a>
</template>

<script>
export default {
  name: "BaseImage",
  props: {
    mediaItems: {
      type: Array,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
    metadata: {
      type: String,
      required: false,
      default: null,
    },
  },
  computed: {
    defaultImage() {
      // show the last and largest one as default
      return this.mediaItems[this.mediaItems.length - 1].Url;
    },
  },
};
</script>
