<template>
  <GoogleMap
    :api-key="DEFAULT_API_KEY"
    style="width: 100%; height: 500px"
    :center="center"
    :zoom="15"
  >
    <Marker :options="{ position: markerPosition }" />
  </GoogleMap>
</template>

<script>
import { defineComponent, ref } from "vue";
import { GoogleMap, Marker } from "vue3-google-map";

export default defineComponent({
  components: { GoogleMap, Marker },
  props: {
    markerPosition: {
      type: Object,
      required: true,
    },
  },
  setup() {
    const DEFAULT_API_KEY = ref(import.meta.env.VITE_GOOGLE_MAP_API_KEY);
    return { DEFAULT_API_KEY };
  },
  data: function () {
    return {
      center: {
        lat: this.markerPosition.lat,
        lng: this.markerPosition.lng,
      },
    };
  },
});
</script>
