import React from "react";
import { IndexType } from "../types/IndexType";

export const DefaultIndex = { x: -1, y: -1 };

export const IndexContext = React.createContext<{
  state?: IndexType;
  updateCell?: (index: IndexType) => unknown;
}>({});
