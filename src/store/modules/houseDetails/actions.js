import MutationTypes from "./mutation-types";
import ActionTypes from "./action-types";
import { fetchHomeObjectDetails } from "../../../services/api/home-details";
import houseDetailsDataTransformer from "../../../services/data/transformers/house-details";

const actions = {
  async [ActionTypes.FETCH_HOUSE_DETAILS_ACTION]({ commit }) {
    const { VITE_SAMPLE_TEST_KEY, VITE_SAMPLE_OBJECT_ID } = import.meta.env;
    commit(MutationTypes.FETCH_HOUSE_DETAILS);
    try {
      const { data } = await fetchHomeObjectDetails({
        key: VITE_SAMPLE_TEST_KEY,
        houseId: VITE_SAMPLE_OBJECT_ID,
      });
      commit(
        MutationTypes.FETCH_HOUSE_DETAILS_FULFILLED,
        houseDetailsDataTransformer(data)
      );
    } catch (error) {
      console.log(error);
      commit(MutationTypes.FETCH_HOUSE_DETAILS_FAILD);
    }
  },
};

export default actions;
