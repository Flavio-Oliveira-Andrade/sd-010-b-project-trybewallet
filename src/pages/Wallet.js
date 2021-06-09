import React from 'react';

import Header from '../components/Header';
import AddExpense from '../components/AddExpense';

class Wallet extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <AddExpense />
      </div>
    );
  }
}

export default Wallet;
