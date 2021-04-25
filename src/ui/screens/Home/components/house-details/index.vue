<template>
  <div class="my-5 bg-white sm:rounded-lg">
    <div class="px-4 py-5 sm:px-6">
      <h3 class="text-lg leading-6 font-medium text-gray-900 text-left">
        Applicant Information
      </h3>
    </div>
    <div class="border-t border-gray-200">
      <dl>
        <base-grid-row>
          <template #title>
            <dt class="text-sm font-medium text-gray-500 text-left">
              Full name
            </dt>
            <dd
              class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 text-left"
            >
              Margot Foster
            </dd>
          </template>
        </base-grid-row>

        <base-grid-row backround-color="bg-white">
          <template #description>
            <dt class="text-sm font-medium text-gray-500 text-left">
              Application for
            </dt>
            <dd
              class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 text-left"
            >
              Backend Developer
            </dd>
          </template>
        </base-grid-row>
      </dl>
    </div>
  </div>
</template>

<script lang="ts">
import BaseGridRow from "../../../../components/base/grid/row/index.vue";

export default {
  name: "HouseDetails",
  components: {
    BaseGridRow,
  },
  props: {
    aangebodenSinds: {
      // offered since
      type: String,
      required: true,
    },
    aantalBadkamers: {
      // number of Bathrooms
      type: Number,
      default: null,
      required: true,
    },
    aantalKamers: {
      // number of rooms
      type: Number,
      default: null,
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
      type: Object,
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
  },
};
</script>
