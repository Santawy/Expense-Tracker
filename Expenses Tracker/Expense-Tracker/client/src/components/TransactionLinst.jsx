import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../context/GlobalState";
import Transaction from "./Transaction";

export default function TransactionLinst() {
  const { transaction, getTransactions } = useContext(GlobalContext);

  useEffect(() => {
    getTransactions();
    // eslint-disable-next-line
  }, []);

  console.log(transaction);

  return (
    <div>
      <h3>History</h3>
      <ul className="list">
        {transaction.map((item) => (
          <Transaction transaction={item} key={item.id} />
        ))}
      </ul>
    </div>
  );
}
