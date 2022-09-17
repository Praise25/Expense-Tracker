import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import "./Expenses.css";
import { useState } from "react";

const Expenses = (props) => {
  const [newYear, setNewYear] = useState("2020");

  const changeYearHandler = (year) => {
    setNewYear(year);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter selected={newYear} onChangeYear={changeYearHandler} />
      <ExpenseItem expenseDetails={props.expenseData[0]} />
      <ExpenseItem expenseDetails={props.expenseData[1]} />
      <ExpenseItem expenseDetails={props.expenseData[2]} />
      <ExpenseItem expenseDetails={props.expenseData[3]} />
    </Card>
  );
};

export default Expenses;
