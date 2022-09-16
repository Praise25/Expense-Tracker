import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";

const Expenses = (props) => {
  return(
    <Card className="expenses">
      <ExpenseItem expenseDetails={props.expenseData[0]}/>
      <ExpenseItem expenseDetails={props.expenseData[1]}/>
      <ExpenseItem expenseDetails={props.expenseData[2]}/>
      <ExpenseItem expenseDetails={props.expenseData[3]}/>
    </Card>
  );
}

export default Expenses;