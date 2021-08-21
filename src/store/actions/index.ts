import ActionType from "../types";

interface LoginAction {
  type: ActionType.LOGIN;
  payload: object;
}

interface LogoutAction {
  type: ActionType.LOGOUT;
}

interface toggleAction {
  type: ActionType.TOGGLE;
  payload: boolean;
}

interface addItem {
  type:ActionType.ADD_ITEM;
  payload:object
}

interface crossItem {
  type:ActionType.CROSS_ITEM,
  payload:string
}

export type Action = LoginAction | LogoutAction | toggleAction | addItem |crossItem;
