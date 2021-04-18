import MutationTypes from "./mutation-types";
import { ActionsTypeInterface } from "./types";
import ActionTypes from "./action-types";
import { ActionTree } from "vuex";
import { StateType } from "./types";

const actions: ActionTree<StateType, any> & ActionsTypeInterface = {
  async [ActionTypes.SAMPLE_ACTION]({ commit }) {
    commit(MutationTypes.SAMPLE_MUTATION);
    try {
      // await asyncAction();
      commit(MutationTypes.SAMPLE_MUTATION_FULFILLED);
    } catch (error) {
      commit(MutationTypes.SAMPLE_MUTATION_FAILD);
    }
  },
};

export default actions;
