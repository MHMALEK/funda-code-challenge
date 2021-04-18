<template>Home</template>

<script lang="ts">
// vuex
import { createNamespacedHelpers } from "vuex";
import ActionTypes from "../../../store/modules/houseDetails/action-types";

const { mapActions, mapGetters, mapMutations } = createNamespacedHelpers(
  "houseDetails"
);

export default {
  name: "Home",
  components: {},

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

<style scoped>
a {
  color: #42b983;
}
</style>
