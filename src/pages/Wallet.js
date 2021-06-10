import React from 'react';
import AddExpense from '../components/AddExpense';
import ExpenseForm from '../components/ExpenseForm';
import Header from '../components/Header';

class Wallet extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <ExpenseForm />
        <AddExpense />
      </div>
    );
  }
}

export default Wallet;
