import "./ExpenseForm.css";
import { useState } from "react";

const ExpenseForm = (props) => {
  const [newTitle, setNewTitle] = useState("");
  const [newAmount, setNewAmount] = useState("");
  const [newDate, setNewDate] = useState("");

  // How we would write the state functions if we decided to use only one state
  // const [userInput, setUserInput] = useState({
  //   newTitle: "",
  //   newAmount: "",
  //   newDate: ""
  // });

  const titleChangeHandler = (event) => {
    setNewTitle(event.target.value);
    // setUserInput((prev) => {
    //   return {...prev, newTitle: event.target.value}
    // })
  };

  const amountChangeHandler = (event) => {
    setNewAmount(event.target.value);
    // setUserInput((prev) => {
    //   return {...prev, newAmount: event.target.value}
    // })
  };

  const dateChangeHandler = (event) => {
    setNewDate(event.target.value);
    // setUserInput((prev) => {
    //   return {...prev, newDate: event.target.value}
    // })
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: newTitle,
      amount: newAmount,
      date: new Date(newDate),
    };

    props.onSaveExpenseData(expenseData);
    setNewTitle("");
    setNewAmount("");
    setNewDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense-controls">
        <div className="new-expense-control">
          <label>Title</label>
          <input 
            type="text" 
            value={newTitle} 
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense-control">
          <label>Amount</label>
          <input
            type="number"
            value={newAmount}
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense-control">
          <label>Date</label>
          <input
            type="date"
            value={newDate}
            min="2019-01-01"
            max="2023-12-31"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense-actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
