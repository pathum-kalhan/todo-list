import ActionType from "../types";
import { Action } from "../actions";

interface Item {
  task: string;
  priority: string;
  id: string;
  isActive: boolean;
  label: string;
}

const initialState = {
  items: [],
};

function reducer(state = initialState, action: Action) {
  switch (action.type) {
    case ActionType.ADD_ITEM:
      return { ...state, items: [action.payload, ...state.items] };

    case ActionType.CROSS_ITEM:
      return {
        ...state,
        items: state.items.map((e: Item) => {
          if (e.id === action.payload) e.isActive = false;
          return e;
        }),
      };

    default:
      return state;
  }
}
export default reducer;
