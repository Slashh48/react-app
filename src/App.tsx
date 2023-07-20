import { useState } from "react";
import ExpenseList from "./expense-tracker/components/ExpenseList";
import ExpenseFilter from "./expense-tracker/components/ExpenseFilter";

function App() {
  const [selectedCategory, setselectedCategory] = useState("");
  const [expenses, setExpenses] = useState([
    { id: 1, description: "aaaAAA", amount: 10, category: "Utilities" },
    { id: 2, description: "aaaBBB", amount: 10, category: "Utilities" },
    { id: 3, description: "aaaCCC", amount: 10, category: "Utilities" },
    { id: 4, description: "aaaDDD", amount: 10, category: "Utilities" },
  ]);

  const visibleExpenses = selectedCategory
    ? expenses.filter((e) => e.category === selectedCategory)
    : expenses;
  return (
    <>
      <div className="mb-3">
        <ExpenseFilter
          onSelectCategory={(category) => setselectedCategory(category)}
        />
      </div>
      <ExpenseList
        expenses={visibleExpenses}
        onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
      />
    </>
  );
}

export default App;
