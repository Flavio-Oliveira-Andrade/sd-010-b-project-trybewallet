import React from 'react';

import Header from './Header';
import Form from './Form';

import './Wallet.css';

class Wallet extends React.Component {
  render() {
    return (
      <div>
        <div>TrybeWallet</div>
        <Header />
        <Form />
      </div>

    );
  }
}

export default Wallet;
