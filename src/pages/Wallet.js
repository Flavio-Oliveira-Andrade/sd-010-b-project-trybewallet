import React from 'react';
import Header from '../Components/Header';
import TabelaGastos from '../Components/TabelaGastos';
import WalletForms from '../Components/WalletForms';

class Wallet extends React.Component {
  render() {
    return (
      <>
        <Header />
        <WalletForms />
        <TabelaGastos />
      </>
    );
  }
}

export default Wallet;
