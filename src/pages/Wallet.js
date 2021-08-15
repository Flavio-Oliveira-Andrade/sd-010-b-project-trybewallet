import React from 'react';
import Forms from '../components/Forms';
import Header from '../components/Header';
// import Expenses from '../components/Expenses';
import Table from '../components/Table';

class Wallet extends React.Component {
  render() {
    return (
      <main>
        <Header />
        <Forms />
        <Table />
      </main>
    );
  }
}

export default Wallet;
