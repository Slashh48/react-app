import { useState } from "react";
import ExpenseList from "./expense-tracker/components/ExpenseList";

function App() {
  const [expenses, setExpenses] = useState([
    { id: 1, description: "aaaAAA", amount: 10, category: "Utilities" },
    { id: 2, description: "aaaBBB", amount: 10, category: "Utilities" },
    { id: 3, description: "aaaCCC", amount: 10, category: "Utilities" },
    { id: 4, description: "aaaDDD", amount: 10, category: "Utilities" },
  ]);
  return (
    <>
      <ExpenseList
        expenses={expenses}
        onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
      />
    </>
  );
}

export default App;
