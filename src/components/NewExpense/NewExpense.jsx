import "./NewExpense.css";
import { useState } from "react";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  const clearFormControls = () => {
    setIsEditing(false);
  };

  const renderFormControls = () => {
    setIsEditing(true);
  };
  

  return (
    <div className="new-expense">
      {!isEditing && (
        <button type="submit" onClick={renderFormControls}>
          Add New Expense
        </button>
      )}

      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={clearFormControls}
        />
      )}
    </div>
  );
};

export default NewExpense;
