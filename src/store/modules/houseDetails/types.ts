import { Commit } from "vuex";
import MutationTypes from "./mutation-types";
import ActionTypes from "./action-types";

// init State Types:
type StateType = {
  sampleState: boolean;
};

// MutationTypes
type MutationsTypeInterface<S = StateType> = {
  [MutationTypes.SAMPLE_MUTATION](state: S): void;
  [MutationTypes.SAMPLE_MUTATION_FULFILLED](state: S): void;
  [MutationTypes.SAMPLE_MUTATION_FAILD](state: S): void;
};

// default VUEX Types
interface ActionTypeDefault {
  commit: Commit;
}

// action Types
interface ActionsTypeInterface {
  [ActionTypes.SAMPLE_ACTION]({ commit }: ActionTypeDefault): Promise<any>;
}

type GettersType = {
  getSampleGetter: (state: StateType) => boolean;
};

export {
  ActionTypeDefault,
  StateType,
  ActionsTypeInterface,
  GettersType,
  MutationsTypeInterface,
};
