import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import Card from "../UI/Card";
import "./Expenses.css";
import { useState } from "react";

const Expenses = (props) => {
  const [newYear, setNewYear] = useState("2020");

  const changeYearHandler = (year) => {
    setNewYear(year);
    props.onFilterYear(year);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter selected={newYear} onChangeYear={changeYearHandler} />
      <ExpensesList expenseData={props.expenseData} />
    </Card>
  );
};

export default Expenses;
