import  ActionType  from "../types";
import { Action } from "../actions";
const initialState = {
  token: null,
  routes: [],
  isDrawerOpen: false,
};

function reducer(state = initialState, action: Action) {
  switch (action.type) {
    case ActionType.LOGIN:
      return { ...state, ...action.payload };

    case ActionType.LOGOUT:
      return initialState;

    case ActionType.TOGGLE:
      return { ...state, isDrawerOpen: !state.isDrawerOpen };

    default:
      return state;
  }
}

export default reducer;
