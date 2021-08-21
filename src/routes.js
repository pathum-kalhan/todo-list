import { lazy } from "react";
const TodoList = lazy(() => import("./screens/TodoList"));

export const routes = [
  {
    name: "TODO",
    children: [
      {
        name: "Todo List",
        path: "/todo-list",
        component: TodoList,
      },
    ],
  },
];
