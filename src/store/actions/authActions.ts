import {Dispatch} from "redux"
import {Action} from "./index";
import ActionType from "../types";
import { routes } from "../../routes";
import fakeLogin from "../../apis/login";

type Email = string;
type Password = string;

export const login = (email: Email, password: Password) => async (dispatch:Dispatch<Action>) => {
  try {
    const res = await fakeLogin(email, password);
    dispatch({
      type: ActionType.LOGIN,
      payload: { token: "Bearer super-fake-jwt", routes },
    });
    return res;
  } catch (error) {
    return error;
  }
};

export const logout = () => ({ type: ActionType.LOGOUT });

export const toggleDrawer = () => ({
  type: ActionType.TOGGLE,
});
