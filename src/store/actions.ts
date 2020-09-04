import { ActionTree, ActionContext } from "vuex";
import { State } from "./state";
import { Mutations } from "./mutations";
import { ActionTypes, MutationTypes } from "./types";

type AugmentedActionContext = {
  commit<K extends keyof Mutations>(key: K, payload: Parameters<Mutations[K]>[1]): ReturnType<Mutations[K]>;
} & Omit<ActionContext<State, State>, "commit">;

export interface Actions {
  [ActionTypes.GET_COUNTER]({ commit }: AugmentedActionContext, payload: void): Promise<void>;
}

export const actions: ActionTree<State, State> & Actions = {
  [ActionTypes.GET_COUNTER]({ commit }) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const data = 256;
        commit(MutationTypes.SET_COUNTER, data);
        resolve();
      }, 500);
    });
  },
};
