import { Commit } from "vuex";
import MutationTypes from "./mutation-types";
import ActionTypes from "./action-types";

// init State Types:
type StateType = {
  sampleState: boolean;
  houseDetails: any; // TODO: it's coming from API so we are not sure about it.
  getHouseDetailsIsPending: boolean;
};

// MutationTypes
type MutationsTypeInterface<S = StateType> = {
  [MutationTypes.FETCH_HOUSE_DETAILS](state: S): void;
  [MutationTypes.FETCH_HOUSE_DETAILS_FAILD](state: S): void;
  [MutationTypes.FETCH_HOUSE_DETAILS_FULFILLED](state: S): void;
};

// default VUEX Types
interface ActionTypeDefault {
  commit: Commit;
}

// action Types
interface ActionsTypeInterface {
  [ActionTypes.FETCH_HOUSE_DETAILS_ACTION]({
    commit,
  }: ActionTypeDefault): Promise<any>;
}

type GettersType = {
  getHouseDetailsIsPending: (state: StateType) => boolean;
};

export {
  ActionTypeDefault,
  StateType,
  ActionsTypeInterface,
  GettersType,
  MutationsTypeInterface,
};
