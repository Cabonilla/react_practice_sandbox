import React from 'react';
import './App.css';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const App = () => {
  const expenses = [
    {title: 'Home Insurance', amount: 100.00, date: new Date(2021, 0, 12)},
    {title: 'Auto Insurance', amount: 200.00, date: new Date(2021, 0, 13)},
    {title: 'Dog Food', amount: 150.00, date: new Date(2021, 3, 1)},
    {title: 'Cat Food', amount: 300.00, date: new Date(2021, 4, 2)},
  ]

  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2', {}, "Let's Get Started!"),
  //   React.createElement(Expenses, { items: expenses })
  // )

  return (
    <div>
      <NewExpense />
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
