<template>
  <GoogleMap
    :api-key="DEFAULT_API_KEY"
    style="width: 100%; height: 500px"
    :center="center"
    :zoom="15"
  >
    <Marker :options="{ position: center }" />
  </GoogleMap>
</template>

<script>
import { defineComponent, ref } from "vue";
import { GoogleMap, Marker } from "vue3-google-map";

export default defineComponent({
  components: { GoogleMap, Marker },
  setup() {
    const center = { lat: 40.689247, lng: -74.044502 };
    const DEFAULT_API_KEY = ref(import.meta.env.VITE_GOOGLE_MAP_API_KEY);
    return { center, DEFAULT_API_KEY };
  },
});
</script>
