import React from 'react';
import ExpenseForms from '../components/ExpenseForms';
import Header from '../components/Header';

class Wallet extends React.Component {
  render() {
    return (
      <>
        <Header />
        <ExpenseForms />
      </>
    );
  }
}

export default Wallet;
