import React from 'react';
import ExpenseTable from '../components/ExpenseTable';
import ExpenseForm from '../components/ExpenseForm';
import WalletHeader from '../components/WalletHeader';

function Wallet() {
  return (
    <>
      <WalletHeader />
      <ExpenseForm />
      <ExpenseTable />
    </>
  );
}

export default Wallet;
