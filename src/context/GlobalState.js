import React, { createContext, useReducer } from "react";
import { AppReducer } from "./AppReducer";

// Initial State
const initialState = {
  transactions: [],
};

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const deleteTransaction = (deleteId) => {
    dispatch({
      type: "DELETE_TRANSACTION",
      id: deleteId,
    });
  };

  const addTransaction = (newTransaction) => {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: newTransaction,
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        addTransaction,
        deleteTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
