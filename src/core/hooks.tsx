import React from "react";
import { AuthContext } from "./context";

export const useSelector = () => React.useContext(AuthContext).state;
export const useDispatch = () => React.useContext(AuthContext).dispatch;
