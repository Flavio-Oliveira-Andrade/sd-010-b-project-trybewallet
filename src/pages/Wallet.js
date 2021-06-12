import React from 'react';

import Header from './Header';
import Forms from './Forms';

import './Wallet.css';

class Wallet extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Forms />
      </div>

    );
  }
}

export default Wallet;
