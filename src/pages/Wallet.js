import React from 'react';
import AddExpense from '../components/AddExpense';
import Header from '../components/Header';
import './wallet.css';

class Wallet extends React.Component {
  render() {
    return (
      <>
        <Header />
        <AddExpense />
        <div>TrybeWallet</div>
      </>
    );
  }
}

export default Wallet;
