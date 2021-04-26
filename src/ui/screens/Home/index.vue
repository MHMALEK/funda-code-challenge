<template>
  <main-header />
  <main>
    <base-grid-container
      v-if="!fetchHouseDetailsIsPendingGetter && houseDetailsGetter"
      class="mt-5"
    >
      <section>
        <!-- show carousel on Mobile -->
        <base-carousel v-hideAt:min-width="deviceSizes.tablet">
          <image-carousel-item
            v-for="mediaItem in houseDetailsGetter.media"
            :key="mediaItem.Id"
            :data="mediaItem"
          />
        </base-carousel>
      </section>

      <section>
        <!-- show gallery on Desktop -->
        <common-gallery
          v-hideAt:max-width="deviceSizes.tablet"
          :images="houseDetailsGetter.media"
          :main-image="houseDetailsGetter.media[0]"
        />
      </section>

      <section class="shadow-md">
        <!-- show gallery on Desktop -->
        <house-details
          :aangeboden-sinds="houseDetailsGetter.aangebodenSinds"
          :aantal-badkamers="houseDetailsGetter.aantalBadkamers"
          :aantal-kamers="houseDetailsGetter.aantalKamers"
          :adres="houseDetailsGetter.adres"
          :bouwjaar="houseDetailsGetter.bouwjaar"
          :energielabel="houseDetailsGetter.energielabel"
          :ligging="houseDetailsGetter.ligging"
          :makelaar="houseDetailsGetter.makelaar"
          :makelaar-telefoon="houseDetailsGetter.makelaarTelefoon"
          :title="houseDetailsGetter.title"
          :map-locations="houseDetailsGetter.mapLocations"
        />
      </section>
      <section class="shadow-md mb-5">
        <common-google-map-loader
          :marker-position="houseDetailsGetter.mapLocations"
        />
      </section>
    </base-grid-container>
  </main>
</template>

<script lang="ts">
// Base components
import BaseCarousel from "../../components/base/carousel/index.vue";
import BaseGridContainer from "../../components/base/grid/container/index.vue";

// directives
import hideAt, { deviceSizes } from "../../directives/responsive";

// common components
import CommonGoogleMapLoader from "../../components/common/google-map/index.vue";
import CommonGallery from "../../components/common/image-gallery/index.vue";

// page components
import HouseDetails from "./components/house-details/index.vue";
import ImageCarouselItem from "./components/image-carousel-item/index.vue";
import MainHeader from "./components/header/index.vue";
// vuex
import { createNamespacedHelpers } from "vuex";
import ActionTypes from "../../../store/modules/houseDetails/action-types";

const { mapActions, mapGetters } = createNamespacedHelpers("houseDetails");

export default {
  name: "Home",
  components: {
    BaseCarousel,
    BaseGridContainer,

    CommonGallery,
    CommonGoogleMapLoader,

    // page related components
    HouseDetails,
    ImageCarouselItem,
    MainHeader,
  },
  directives: {
    hideAt,
  },
  data: function () {
    return {
      deviceSizes,
    };
  },
  computed: {
    ...mapGetters(["fetchHouseDetailsIsPendingGetter", "houseDetailsGetter"]),
  },
  mounted: function () {
    this.fetchHouseDetails();
  },
  methods: {
    ...mapActions({
      fetchHouseDetails: ActionTypes.FETCH_HOUSE_DETAILS_ACTION,
    }),
  },
};
</script>

<style></style>
