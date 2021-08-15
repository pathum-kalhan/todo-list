import { lazy } from "react";
const TodoList = lazy(() => import("./screens/TodoList.js"));

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
