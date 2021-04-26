import MutationsType from "./mutation-types";

const mutations = {
  [MutationsType.FETCH_HOUSE_DETAILS](state) {
    state.getHouseDetailsIsPending = true;
  },
  [MutationsType.FETCH_HOUSE_DETAILS_FULFILLED](state, payload) {
    state.getHouseDetailsIsPending = false;
    state.houseDetails = payload;
  },
  [MutationsType.FETCH_HOUSE_DETAILS_FAILD](state) {
    state.getHouseDetailsIsPending = false;
  },
};

export default mutations;
