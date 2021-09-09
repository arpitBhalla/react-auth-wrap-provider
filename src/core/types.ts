import React from "react";

export type TUser = {
  displayName: string;
  email: string;
};

export type TState = {
  isLoggedIn: boolean;
  user?: TUser;
};

export type TActions = "LOGIN" | "LOGOUT";

export type TReducerAction = {
  type: TActions;
  payload?: TUser;
};

export type TAuthContext = {
  dispatch: React.Dispatch<TReducerAction>;
  state: TState;
};
