import { ADD_ITEM, CROSS_ITEM } from "../types";

const initialState = {
  items: [],
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_ITEM:
      return { ...state, items: [action.payload, ...state.items] };

    case CROSS_ITEM:
      console.log(action.payload)
      return {
        ...state,
        items: state.items.map((e) => {
          if (e.id === action.payload) e.isActive = false;
          return e;
        }),
      };

    default:
      return state;
  }
}
export default reducer;
