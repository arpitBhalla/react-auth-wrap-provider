import { TReducerAction, TUser } from "./types";

export const loginAction = (user: TUser): TReducerAction => ({
  type: "LOGIN",
  payload: user,
});

export const logoutAction = (): TReducerAction => ({
  type: "LOGOUT",
});
