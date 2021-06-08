import React, { Component } from 'react';
import Proptypes from 'prop-types';

class Header extends Component {
  render() {
    const { email } = this.props;
    const totalSpending = 0;
    return (
      <header>
        <span data-testid="email-field">{`User: ${email}`}</span>
        <span data-testid="total-field">{`Gastos: $ ${totalSpending}`}</span>
        <span data-testid="header-currency-field">Moeda: BRL</span>
      </header>
    );
  }
}

Header.propTypes = {
  email: Proptypes.string,
}.isRequired;

export default Header;
