import React from 'react';
import Header from '../components/Header';
import AddExpense from '../components/AddExpense';
import Expendes from '../components/Expendes';

class Wallet extends React.Component {
  render() {
    return (
      <>
        <Header />
        <AddExpense />
        <Expendes />
      </>
    );
  }
}

export default Wallet;
