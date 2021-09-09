import { ReducerActionType, UserType } from "./types";

export const loginAction = (user: UserType): ReducerActionType => ({
  type: "LOGIN",
  payload: user,
});

export const logoutAction = (): ReducerActionType => ({
  type: "LOGOUT",
});
