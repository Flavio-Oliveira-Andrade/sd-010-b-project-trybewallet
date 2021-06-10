import React from 'react';

import Header from '../components/Header';
import AddExpense from '../components/AddExpense';
import Expenses from '../components/Expenses';

class Wallet extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <AddExpense />
        <Expenses />
      </div>
    );
  }
}

export default Wallet;
