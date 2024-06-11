import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { numberWithCommas } from "../utilities/format";

export default function IncomeExpenses() {
  const { transaction } = useContext(GlobalContext);

  const amounts = transaction.map((transaction) => transaction.amount);

  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const formattedIncome = numberWithCommas(income);

  const expense = (
    amounts.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  ).toFixed(2);

  const formattedExpense = numberWithCommas(expense);

  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p className="money plus">+${formattedIncome}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className="money minus">-${formattedExpense}</p>
      </div>
    </div>
  );
}
