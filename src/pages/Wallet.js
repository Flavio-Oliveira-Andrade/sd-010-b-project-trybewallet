import React from 'react';
import Header from '../Components/Header';
import WalletForms from '../Components/WalletForms';

class Wallet extends React.Component {
  render() {
    return (
      <>
        <Header />
        <WalletForms />
      </>
    );
  }
}

export default Wallet;
