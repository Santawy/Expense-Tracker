import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { numberWithCommas } from "../utilities/format";

export default function Transaction(props) {
  const sign = props.transaction.amount < 0 ? "-" : "+";

  const { deleteTransaction } = useContext(GlobalContext);

  const amount = Math.abs(props.transaction.amount);

  const formattedAmount = numberWithCommas(amount);

  return (
    <div>
      <li className={props.transaction.amount < 0 ? "minus" : "plus"}>
        {props.transaction.text}{" "}
        <span>
          {sign}${formattedAmount}
        </span>
        <button
          onClick={() => deleteTransaction(props.transaction._id)}
          className="delete-btn"
        >
          x
        </button>
      </li>
    </div>
  );
}
