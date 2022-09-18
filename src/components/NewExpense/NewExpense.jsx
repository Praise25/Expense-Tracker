import "./NewExpense.css";
import { useState } from "react";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  const clearFormControls = () => {
    setFormContent(
      <button onClick={renderFormControls}>Add New Expense</button>
    );
  };

  const renderFormControls = () => {
    setFormContent(
      <ExpenseForm
        onSaveExpenseData={saveExpenseDataHandler}
        onClickCancel={clearFormControls}
      />
    );
  };

  const [formContent, setFormContent] = useState(
    <button onClick={renderFormControls}>Add New Expense</button>
  );

  return <div className="new-expense">{formContent}</div>;
};

export default NewExpense;
