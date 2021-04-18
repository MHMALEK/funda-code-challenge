import MutationsType from "./mutation-types";
import { MutationTree } from "vuex";
import { StateType, MutationsTypeInterface } from "./types";

const mutations: MutationTree<StateType> & MutationsTypeInterface = {
  [MutationsType.FETCH_HOUSE_DETAILS](state: StateType): void {
    state.sampleState = true;
  },
  [MutationsType.FETCH_HOUSE_DETAILS_FULFILLED](state): void {
    state.sampleState = true;
  },
  [MutationsType.FETCH_HOUSE_DETAILS_FAILD](state): void {
    state.sampleState = false;
  },
};

export default mutations;
