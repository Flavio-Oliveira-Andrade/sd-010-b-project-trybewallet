import React from 'react';
import Header from '../components/Header';
import NewExpense from '../components/NewExpense';
import Table from '../components/Table';
import '../styles/wallet.css';

class Wallet extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <NewExpense />
        <Table />
      </div>
    );
  }
}

export default Wallet;
