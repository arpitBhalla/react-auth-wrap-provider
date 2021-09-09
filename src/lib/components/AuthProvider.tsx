import React from "react";
import { reducer } from "../core/reducer";
import { STATE, AuthContext } from "../core/context";

export const AuthProvider: React.FC = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, STATE);
  return (
    <AuthContext.Provider value={{ dispatch, state }}>
      {children}
    </AuthContext.Provider>
  );
};
