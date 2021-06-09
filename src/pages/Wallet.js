import React from 'react';

import Header from './Header';

class Wallet extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      total: 0,
      cambio: 'BRL',
    };
  }

  render() {
    const { total, cambio } = this.state;
    return (
      <section>
        <Header />
        <h2>Trybe Wallet!</h2>
        <p data-testid="total-field">{total}</p>
        <p data-testid="header-currency-field">{cambio}</p>
      </section>
    );
  }
}

export default Wallet;
