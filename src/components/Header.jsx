import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends Component {
  render() {
    const { email, expensesLabel } = this.props;
    const currencyConversion = expensesLabel;
    const arrayconver = [];
    currencyConversion.map((item) => {
      const money = item.currency;
      const exchange = item.exchangeRates[money];
      const real = item.value * exchange.ask;
      arrayconver.push(real);
      return arrayconver;
    });
    const total = arrayconver.reduce((acc, num) => acc + parseFloat(num), 0);
    return (
      <header>
        <h1>TrybeWallet</h1>
        <h4 data-testid="email-field">{ email }</h4>
        <h4 data-testid="total-field">
          Total de depesas:
          {' '}
          {total.toFixed(2)}
        </h4>
        <h4 data-testid="header-currency-field">BRL</h4>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  expensesLabel: state.wallet.expenses,
});

Header.propTypes = ({
  email: PropTypes.string,
}).isRequired;

export default connect(mapStateToProps)(Header);
