import React from "react";
import { TState, TAuthContext } from "./types";

export const STATE: TState = {
  isLoggedIn: false,
};

export const AuthContext = React.createContext<TAuthContext>({
  state: STATE,
  dispatch: () => {},
});
