<template>
  <div class="mb-5 mt-5 bg-white sm:rounded-lg">
    <div class="px-4 py-5 sm:px-6">
      <h3 class="text-lg leading-6 font-medium text-gray-900 text-left">
        {{ title }}
      </h3>
    </div>
    <div class="border-t border-gray-200">
      <base-grid-row v-if="aangebodenSinds">
        <template #title>
          <base-grid-col>
            <base-typography> Aangeboden Sinds </base-typography>
          </base-grid-col>
        </template>
        <template #description>
          <base-grid-col>
            {{ aangebodenSindsDate }}
          </base-grid-col>
        </template>
      </base-grid-row>

      <base-grid-row backround-color="bg-white">
        <template #title>
          <base-grid-col>
            <base-typography> Aantal Badkamers </base-typography>
          </base-grid-col>
        </template>
        <template #description>
          <base-grid-col> {{ aantalBadkamers }} </base-grid-col>
        </template>
      </base-grid-row>

      <base-grid-row>
        <template #title>
          <base-grid-col>
            <base-typography> Aantal Kamers </base-typography></base-grid-col
          >
        </template>
        <template #description>
          <base-grid-col> {{ aantalKamers }} </base-grid-col>
        </template>
      </base-grid-row>

      <base-grid-row backround-color="bg-white">
        <template #title>
          <base-grid-col>
            <base-typography> Bouwjaar </base-typography>
          </base-grid-col>
        </template>
        <template #description>
          <base-grid-col> {{ bouwjaar }} </base-grid-col>
        </template>
      </base-grid-row>

      <base-grid-row>
        <template #title>
          <base-grid-col>
            <base-typography> Energie label </base-typography>
          </base-grid-col>
        </template>
        <template #description>
          <base-grid-col> {{ energielabel }} </base-grid-col>
        </template>
      </base-grid-row>

      <!-- broker details -->
      <base-grid-row backround-color="bg-white">
        <template #title>
          <base-grid-col>
            <base-typography> Makelaar </base-typography>
          </base-grid-col>
        </template>
        <template #description>
          <base-grid-col> {{ makelaar }} </base-grid-col>
        </template>
      </base-grid-row>

      <base-grid-row>
        <template #title>
          <base-grid-col>
            <base-typography>Makelaar Telefoon </base-typography>
          </base-grid-col>
        </template>
        <template #description>
          <base-grid-col>
            <base-telephone-link :number="makelaarTelefoon" />
          </base-grid-col>
        </template>
      </base-grid-row>

      <!-- address -->

      <base-grid-row backround-color="bg-white">
        <template #title>
          <base-grid-col>
            <base-typography>Adres </base-typography>
          </base-grid-col>
        </template>
        <template #description>
          <base-grid-col> {{ adres }} </base-grid-col>
        </template>
      </base-grid-row>

      <base-grid-row>
        <template #title>
          <base-grid-col>
            <base-typography> Ligging </base-typography></base-grid-col
          >
        </template>
        <template #description>
          <base-grid-col> {{ ligging }} </base-grid-col>
        </template>
      </base-grid-row>
    </div>
  </div>
</template>

<script>
// base components
import BaseGridRow from "../../../../components/base/grid/row/index.vue";
import BaseGridCol from "../../../../components/base/grid/col/index.vue";
import BaseTypography from "../../../../components/base/typography/index.vue";
import BaseTelephoneLink from "../../../../components/base/telephone-link/index.vue";

// services
import convertHouseDetailsTimeStampToYear from "../../../../../services/timestamp-to-year";
export default {
  // TODO: I could pass the whole data and render them with a loop too.
  name: "HouseDetails",
  components: {
    BaseGridRow,
    BaseGridCol,
    BaseTypography,
    BaseTelephoneLink,
  },

  props: {
    // eslint-disable-next-line vue/require-default-prop
    aangebodenSinds: {
      // offered since
      type: String,
      required: false,
    },
    aantalBadkamers: {
      // number of Bathrooms
      type: Number,
      default: 2,
      required: true,
    },
    aantalKamers: {
      // number of rooms
      type: Number,
      default: 2,
      required: true,
    },
    adres: {
      // address
      type: String,
      required: true,
    },
    bouwjaar: {
      //year of construction
      type: String,
      required: true,
    },
    energielabel: {
      // energy Label
      type: String,
      required: true,
    },
    ligging: {
      // location
      type: String,
      required: true,
    },
    makelaar: {
      // broker
      type: String,
      required: true,
    },
    makelaarTelefoon: {
      // broker phone
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    mapLocations: {
      type: Object,
      required: true,
    },
  },
  computed: {
    aangebodenSindsDate: function () {
      return convertHouseDetailsTimeStampToYear(this.aangebodenSinds);
    },
  },
};
</script>
