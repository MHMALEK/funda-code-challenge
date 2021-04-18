import MutationTypes from "./mutation-types";
import { ActionsTypeInterface } from "./types";
import ActionTypes from "./action-types";
import { ActionTree } from "vuex";
import { StateType } from "./types";
import { fetchHomeObjectDetails } from "../../../services/api/home-details";

const actions: ActionTree<StateType, any> & ActionsTypeInterface = {
  async [ActionTypes.FETCH_HOUSE_DETAILS_ACTION]({ commit }) {
    const { VITE_SAMPLE_TEST_KEY, VITE_SAMPLE_OBJECT_ID } = import.meta.env;
    commit(MutationTypes.FETCH_HOUSE_DETAILS);
    try {
      const houseDetails = await fetchHomeObjectDetails({
        key: VITE_SAMPLE_TEST_KEY,
        houseId: VITE_SAMPLE_OBJECT_ID,
      });
      commit(MutationTypes.FETCH_HOUSE_DETAILS_FULFILLED, houseDetails);
    } catch (error) {
      commit(MutationTypes.FETCH_HOUSE_DETAILS_FAILD);
    }
  },
};

export default actions;
