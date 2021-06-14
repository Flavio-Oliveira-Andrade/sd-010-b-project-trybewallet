import React, { Component } from 'react';
import PropTypes from 'prop-types';

import '../css/Header.css';

import { connect } from 'react-redux';

class Header extends Component {
  render() {
    const { userData, expenses } = this.props;
    const expenseAmount = expenses.reduce((acc, curr) => {
      console.log(acc, curr);
      const { value, currency, exchangeRates } = curr;
      return acc + value * exchangeRates[currency].ask;
    }, 0);

    return (
      <header>
        <div className="right-side">
          <h1>VanelliWallet</h1>
        </div>
        <div className="left-side">
          <p data-testid="email-field">
            Email:
            { userData }
          </p>
          <p data-testid="total-field">{ expenseAmount.toFixed(2) }</p>
          <p data-testid="header-currency-field">BRL</p>
        </div>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  userData: state.user.email,
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(Header);

Header.propTypes = {
  userData: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};
