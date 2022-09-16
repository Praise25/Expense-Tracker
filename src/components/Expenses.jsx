import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

function Expenses (props) {
  return(
    <div className="expenses">
      <ExpenseItem expenseDetails={props.expenseData[0]}/>
      <ExpenseItem expenseDetails={props.expenseData[1]}/>
      <ExpenseItem expenseDetails={props.expenseData[2]}/>
      <ExpenseItem expenseDetails={props.expenseData[3]}/>
    </div>
  );
}

export default Expenses;