import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends React.Component {
  despesa() {
    const { wallet } = this.props;
    return wallet.expenses.reduce((acc, { value, currency, exchangeRates }) => {
      const coin = exchangeRates[currency].ask;
      acc += coin * value;
      return acc;
    }, 0);
  }

  render() {
    const { email } = this.props;
    return (
      <header>
        <p data-testid="email-field">{ email }</p>
        <span data-testid="total-field">{ this.despesa().toFixed(2) || 0 }</span>
        <p data-testid="header-currency-field">BRL</p>
      </header>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string,
}.isRequired;

const mapStateToProps = (state) => ({
  email: state.user.email,
  wallet: state.wallet,
});

export default connect(mapStateToProps)(Header);
