import React from 'react';
import Forms from '../components/Forms';
import Header from '../components/Header';
import Expenses from '../components/Expenses';

class Wallet extends React.Component {
  render() {
    return (
      <main>
        <Header />
        <Forms />
        <Expenses />
      </main>
    );
  }
}

export default Wallet;
