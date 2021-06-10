import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends Component {
  calculateValue() {
    const { expenses } = this.props;
    const arrayExpensesValue = Object.values(expenses);
    return expenses.length > 0 ? arrayExpensesValue
      .map((expense) => Number(expense.value)
      * Number(expense.exchangeRates[expense.currency].ask))
      .reduce((prev, ele) => prev + ele) : 0;
  }

  render() {
    const { email } = this.props;
    return (
      <header>

        <p data-testid="email-field">
          {' '}
          { email }
          {' '}
        </p>

        <p data-testid="total-field">
          {this.calculateValue()}
        </p>

        <p data-testid="header-currency-field">BRL</p>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,

});

export default connect(mapStateToProps)(Header);

Header.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object),
};

Header.defaultProps = {
  expenses: [],
};
