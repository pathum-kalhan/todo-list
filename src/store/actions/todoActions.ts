import ActionType from "../types";
enum Priority {
  Low = "Low",
  Medium = "Medium",
  High = "High",
}

interface Item {
  task: string;
  priority: Priority;
  id: string;
  isActive: boolean;
  label: string;
}

export const addItem = (item: Item) => ({
  type: ActionType.ADD_ITEM,
  payload: item,
});

export const crossItem = (id: string) => ({
  type: ActionType.CROSS_ITEM,
  payload: id,
});
