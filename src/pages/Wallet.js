import React from 'react';
import ExpensesTable from '../components/ExpensesTable';
import Form from '../components/Form';
import Header from '../components/Header';

class Wallet extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Form />
        <ExpensesTable />
      </>
    );
  }
}

export default Wallet;
