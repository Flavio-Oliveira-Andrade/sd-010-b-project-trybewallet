import React from 'react';

import Header from '../components/Header';
import AddExpense from '../components/AddExpense';
import Expenses from '../components/Expenses';

class Wallet extends React.Component {
  render() {
    return (
      <>
        <Header />
        <AddExpense />
        <Expenses />
      </>
    );
  }
}

export default Wallet;
