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
  <base-grid-container>
    <div class="bg-white shadow overflow-hidden sm:rounded-lg">
      <div class="px-4 py-5 sm:px-6">
        <h3 class="text-lg leading-6 font-medium text-gray-900">
          Applicant Information
        </h3>
        <p class="mt-1 max-w-2xl text-sm text-gray-500">
          Personal details and application.
        </p>
      </div>
      <div class="border-t border-gray-200">
        <dl>
          <div
            class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
          >
            <dt class="text-sm font-medium text-gray-500">Full name</dt>
            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              Margot Foster
            </dd>
          </div>
          <div
            class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
          >
            <dt class="text-sm font-medium text-gray-500">Application for</dt>
            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              Backend Developer
            </dd>
          </div>
          <div
            class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
          >
            <dt class="text-sm font-medium text-gray-500">Email address</dt>
            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              margotfoster@example.com
            </dd>
          </div>
          <div
            class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
          >
            <dt class="text-sm font-medium text-gray-500">
              Salary expectation
            </dt>
            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              $120,000
            </dd>
          </div>
          <div
            class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
          >
            <dt class="text-sm font-medium text-gray-500">About</dt>
            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim
              incididunt cillum culpa consequat. Excepteur qui ipsum aliquip
              consequat sint. Sit id mollit nulla mollit nostrud in ea officia
              proident. Irure nostrud pariatur mollit ad adipisicing
              reprehenderit deserunt qui eu.
            </dd>
          </div>
          <div
            class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
          >
            <dt class="text-sm font-medium text-gray-500">Attachments</dt>
            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              <ul
                class="border border-gray-200 rounded-md divide-y divide-gray-200"
              >
                <li
                  class="pl-3 pr-4 py-3 flex items-center justify-between text-sm"
                >
                  <div class="w-0 flex-1 flex items-center">
                    <PaperClipIcon
                      class="flex-shrink-0 h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                    <span class="ml-2 flex-1 w-0 truncate">
                      resume_back_end_developer.pdf
                    </span>
                  </div>
                  <div class="ml-4 flex-shrink-0">
                    <a
                      href="#"
                      class="font-medium text-indigo-600 hover:text-indigo-500"
                    >
                      Download
                    </a>
                  </div>
                </li>
                <li
                  class="pl-3 pr-4 py-3 flex items-center justify-between text-sm"
                >
                  <div class="w-0 flex-1 flex items-center">
                    <PaperClipIcon
                      class="flex-shrink-0 h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                    <span class="ml-2 flex-1 w-0 truncate">
                      coverletter_back_end_developer.pdf
                    </span>
                  </div>
                  <div class="ml-4 flex-shrink-0">
                    <a
                      href="#"
                      class="font-medium text-indigo-600 hover:text-indigo-500"
                    >
                      Download
                    </a>
                  </div>
                </li>
              </ul>
            </dd>
          </div>
        </dl>
      </div>
    </div>
  </base-grid-container>
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
