import React from 'react';

import Header from '../components/Header';
import NewMoney from '../components/NewMoney';
import Money from '../components/Money';

class Wallet extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Money />
        <NewMoney />
      </div>
    );
  }
}

export default Wallet;
