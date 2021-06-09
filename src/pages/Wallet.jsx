import React from 'react';

import './Wallet.css';

class Wallet extends React.Component {
  render() {
    return (
      <header data-testid="email-field">
        email@email.com
        <span>Total de gastos: </span>
      </header>
    );
  }
}

export default Wallet;
