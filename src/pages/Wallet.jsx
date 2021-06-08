import React from 'react';
import FormExpenses from '../components/FormExpenses';
import Header from '../components/Header';
import ExpensesTable from '../components/ExpensesTable';

class Wallet extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <FormExpenses />
        <ExpensesTable />
      </div>
    );
  }
}

export default Wallet;
