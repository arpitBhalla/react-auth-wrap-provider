import React from "react";
import { TState, TReducerAction } from "./types";
import { STATE } from "./context";

export const reducer: React.Reducer<TState, TReducerAction> = (
  state,
  action
) => {
  switch (action.type) {
    case "LOGIN":
      return { user: action.payload, isLoggedIn: true };
    case "LOGOUT":
      return STATE;
    default:
      return state;
  }
};
