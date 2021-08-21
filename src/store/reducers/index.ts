import { combineReducers } from "redux";
import authReducer from "./authReducer";
import todoReducer from "./todoReducer";



const reducers = combineReducers({
  auth: authReducer,
  todo: todoReducer,
});

export default reducers;
