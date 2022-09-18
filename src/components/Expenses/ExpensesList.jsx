import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = (props) => {
  if (props.expenseData.length === 0) {
    return <h2 className="expenses-list-fallback">Found no expenses.</h2>;
  }

  return (
    <ul className="expenses-list">
      {props.expenseData.map((el) => (
        <ExpenseItem
          key={el.id}
          title={el.title}
          amount={el.amount}
          date={el.date}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;
