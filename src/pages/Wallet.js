import React from 'react';
import HeaderWallet from './HeaderWallet';
import FormWallet from './FormWallet';

class Wallet extends React.Component {
  render() {
    return (
      <div>
        <HeaderWallet />
        <FormWallet />
      </div>
    );
  }
}

export default Wallet;
