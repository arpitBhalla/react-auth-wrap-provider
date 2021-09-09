import React from "react";
import { StateType, ReducerActionType } from "./types";
import { STATE } from "./context";

export const reducer: React.Reducer<StateType, ReducerActionType> = (
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
