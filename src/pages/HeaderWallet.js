import React from 'react';
import PropTypes from 'prop-types';

class HeaderWallet extends React.Component {
  render() {
    const { value, email } = this.props;
    const rounded = parseFloat(Math.round(value * 100) / 100).toFixed(2);
    return (
      <header>
        <span data-testid="email-field">{`Email: ${email}`}</span>
        <span data-testid="total-field">{`Total das despesas: ${rounded}`}</span>
        <span data-testid="header-currency-field">Moeda: BRL</span>
      </header>
    );
  }
}

HeaderWallet.propTypes = {
  value: PropTypes.number.isRequired,
  email: PropTypes.string.isRequired,
};

export default HeaderWallet;
