import React from 'react';
import Header from '../components/Header';
import ExpensesForm from '../components/ExpensesForm';
import ExpensesTable from '../components/ExpensesTable';

class Wallet extends React.Component {
  render() {
    return (
      <div>
        <h4>
          TrybeWallet
        </h4>
        <header>
          <Header />
          <ExpensesForm />
          <ExpensesTable />
        </header>
      </div>
    );
  }
}

export default Wallet;
