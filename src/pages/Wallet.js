import React from 'react';
import Header from '../components/Header';
import NewExpense from '../components/NewExpense';
import '../styles/wallet.css';

class Wallet extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <NewExpense />
      </div>
    );
  }
}

export default Wallet;
