import React from "react";
import { useSelector } from "../core/hooks";

export const ProtectedAuth: React.FC = ({ children }) => {
  const { isLoggedIn } = useSelector();
  if (isLoggedIn) return <>{children}</>;
  else return <></>;
};
