import { ADD_ITEM, CROSS_ITEM } from "../types";

export const addItem = (item) => ({
  type: ADD_ITEM,
  payload: item ,
});

export const crossItem = (id) => ({
  type: CROSS_ITEM,
  payload: id,
});
