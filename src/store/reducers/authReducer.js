import { LOGIN, LOGOUT, TOGGLE } from "../types";

const initialState = {
  token: null,
  routes: [],
  isDrawerOpen: false,
};

 function reducer (state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return { ...state, ...action.payload };

    case LOGOUT:
      return initialState;

    case TOGGLE:
      return { ...state, isDrawerOpen: !state.isDrawerOpen };

    default:
      return state;
  }
}

export default reducer;