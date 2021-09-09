import React from "react";

export type UserType = {
  displayName: string;
  email: string;
};

export type StateType = {
  isLoggedIn: boolean;
  user?: UserType;
};

export type ActionType = "LOGIN" | "LOGOUT";

export type ReducerActionType = {
  type: ActionType;
  payload?: UserType;
};

export type AuthContextType = {
  dispatch: React.Dispatch<ReducerActionType>;
  state: StateType;
};
