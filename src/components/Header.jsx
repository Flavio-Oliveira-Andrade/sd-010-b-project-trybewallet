import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends Component {
  render() {
    const { userEmail, expenses } = this.props;
    const expenseAmount = expenses.reduce((acc, curr) => {
      const { value, currency, exchangeRates } = curr;
      return acc + value * exchangeRates[currency].ask;
    }, 0);

    const CURRENCY = 'BRL';
    return (
      <header>
        <p data-testid="email-field">
          Email:
          {' '}
          {userEmail}
        </p>
        <p data-testid="total-field">
          Despesa: R$
          {expenseAmount.toFixed(2)}
        </p>
        <p data-testid="header-currency-field">{CURRENCY}</p>
      </header>
    );
  }
}
const mapStateToProps = (state) => ({
  userEmail: state.user.email,
  expenses: state.wallet.expenses,
});

Header.propTypes = {
  userEmail: PropTypes.string,
  expenses: PropTypes.arrayOf,
}.isRequired;

export default connect(mapStateToProps)(Header);
