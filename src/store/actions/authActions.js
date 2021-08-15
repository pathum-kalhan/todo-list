import { LOGIN, LOGOUT, TOGGLE } from "../types";

import { routes } from "../../routes";
import fakeLogin from "../../apis/login";

export const login = (email, password) => async (dispatch) => {
  try {
    const res = await fakeLogin(email, password);
    dispatch({
      type: LOGIN,
      payload: { token: "Bearer super-fake-jwt", routes },
    });
    return res;
  } catch (error) {
    return error;
  }
};

export const logout = () => ({ type: LOGOUT });

export const toggleDrawer = () => ({
  type: TOGGLE,
});
