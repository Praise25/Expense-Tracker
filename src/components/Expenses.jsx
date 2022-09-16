import ExpenseItem from "./ExpenseItem";

function Expenses (props) {
  return(
    <div>
      <ExpenseItem expenseDetails={props.expenseData[0]}/>
      <ExpenseItem expenseDetails={props.expenseData[1]}/>
      <ExpenseItem expenseDetails={props.expenseData[2]}/>
      <ExpenseItem expenseDetails={props.expenseData[3]}/>
    </div>
  );
}

export default Expenses;