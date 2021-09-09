import React from "react";
import { StateType, AuthContextType } from "./types";

export const STATE: StateType = {
  isLoggedIn: false,
};

export const AuthContext = React.createContext<AuthContextType>({
  state: STATE,
  dispatch: () => {},
});
