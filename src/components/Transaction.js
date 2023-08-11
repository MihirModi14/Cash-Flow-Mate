import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const Transaction = ({ id, text, amount }) => {
  const { deleteTransaction } = useContext(GlobalContext);

  const handleDeleteClick = (deleteId) => {
    deleteTransaction(deleteId);
  };
  return (
    <li className={amount < 0 ? "minus" : "plus"}>
      {text} <span>{amount}</span>
      <button
        className="delete-btn"
        onClick={() => {
          handleDeleteClick(id);
        }}
      >
        x
      </button>
    </li>
  );
};
