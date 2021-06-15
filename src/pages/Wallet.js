import React from 'react';
import WalletExpenseIncluder from '../components/WalletExpenseIncluder';
import WalletExpenseTable from '../components/WalletExpenseTable';
import WalletHeader from '../components/WalletHeader';

class Wallet extends React.Component {
  render() {
    return (
      <>
        <WalletHeader />
        <WalletExpenseIncluder />
        <WalletExpenseTable />
      </>
    );
  }
}

export default Wallet;
