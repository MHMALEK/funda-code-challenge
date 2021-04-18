import MutationsType from "./mutation-types";
import { MutationTree } from "vuex";
import { StateType, MutationsTypeInterface } from "./types";

const mutations: MutationTree<StateType> & MutationsTypeInterface = {
  [MutationsType.SAMPLE_MUTATION](state: StateType): void {
    state.sampleState = true;
  },
  [MutationsType.SAMPLE_MUTATION_FULFILLED](state): void {
    state.sampleState = true;
  },
  [MutationsType.SAMPLE_MUTATION_FAILD](state): void {
    state.sampleState = false;
  },
};

export default mutations;
