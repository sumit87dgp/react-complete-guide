import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpenseFilter";
import "./Expense.css";
import Card from "./Card";
import { useState } from "react";

function Expense(props) {
  const [selectedyear, setSelectedyear] = useState('2020');
  const filterChangeHandler = (year) => {
    console.log(year)
    setSelectedyear(year);
    //console.log('the selected year ', selectedyear)
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={selectedyear} onFilterChange={filterChangeHandler} />
        <ExpenseItem
          title={props.expenses[0].title}
          amount={props.expenses[0].amount}
          date={props.expenses[0].date}
        />
        <ExpenseItem
          title={props.expenses[1].title}
          amount={props.expenses[1].amount}
          date={props.expenses[1].date}
        />
        <ExpenseItem
          title={props.expenses[2].title}
          amount={props.expenses[2].amount}
          date={props.expenses[2].date}
        />
        <ExpenseItem
          title={props.expenses[3].title}
          amount={props.expenses[3].amount}
          date={props.expenses[3].date}
        />
      </Card>
    </div>
  );
}

export default Expense;
