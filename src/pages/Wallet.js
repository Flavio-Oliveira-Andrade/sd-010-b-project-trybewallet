import React from 'react';

import Header from './Header';
import Forms from './Forms';
import Echange from './Echange';

import './Wallet.css';

class Wallet extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Forms />
        <Echange />
      </div>

    );
  }
}

export default Wallet;
