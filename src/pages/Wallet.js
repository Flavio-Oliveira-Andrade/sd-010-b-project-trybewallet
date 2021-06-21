import React from 'react';
import Form from '../components/Form';
import Header from '../components/Header';
import ExpensesTable from '../components/ExpensesTable';

class Wallet extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Form />
        <ExpensesTable />
      </div>
    );
  }
}

export default Wallet;
