<template>
  <base-grid-container>
    <!-- <base-carousel>
      <div class="mb-5">
        <div class="flex w-full items-center text-sm text-gray-300 font-medium">
          <div class="flex-1 flex items-center">
            <img
              src="https://images.unsplash.com/photo-1484876065684-b683cf17d276?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
            />
          </div>
        </div>
      </div>
    </base-carousel> -->
    <common-gallery></common-gallery>
  </base-grid-container>
  <base-grid-container> <house-details /> </base-grid-container>
  <base-grid-container>
    <common-google-map-loader />
  </base-grid-container>
</template>

<script lang="ts">
// Base components
import BaseCarousel from "../../components/base/carousel/index.vue";

import BaseGridContainer from "../../components/base/grid/container/index.vue";

// common components

import CommonGoogleMapLoader from "../../components/common/google-map/index.vue";
import CommonGallery from "../../components/common/image-gallery/index.vue";

// page components
import HouseDetails from "./components/house-details/index.vue";
// vuex
import { createNamespacedHelpers } from "vuex";
import ActionTypes from "../../../store/modules/houseDetails/action-types";

const { mapActions, mapGetters, mapMutations } = createNamespacedHelpers(
  "houseDetails"
);

export default {
  name: "Home",
  components: {
    CommonGallery,
    // BaseCarousel,
    BaseGridContainer,
    CommonGoogleMapLoader,
    HouseDetails,
  },

  mounted: function () {
    this.getSampleAction();
  },
  methods: {
    ...mapActions({
      getSampleAction: ActionTypes.FETCH_HOUSE_DETAILS_ACTION,
    }),
  },
};
</script>

<style></style>
