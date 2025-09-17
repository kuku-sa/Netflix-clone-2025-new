import React, { createContext, useContext, useReducer } from "react";
import { initialState, reducer } from "./components/CartReducer";

export const StateContext = createContext();

export const StateProvider = ({ children }) => {
  return(
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);
};
// Custom hook to access state
export const useStateValue = () => useContext(StateContext);