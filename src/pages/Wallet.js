import React from 'react';
import Header from '../components/Header';
import Form from '../components/Form';
import ExpenseList from '../components/ExpenseList';

class Wallet extends React.Component {
  render() {
    return (
      <main>
        <Header />
        <Form />
        <ExpenseList />
      </main>
    );
  }
}

export default Wallet;
