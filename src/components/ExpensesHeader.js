import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class ExpensesHeader extends Component {
  render() {
    const { email, expenses } = this.props;

    const total = expenses.reduce(
      (previous, current) => previous + current.value
        * current.exchangeRates[current.currency].ask,
      0,
    );
    return (
      <header data-testid="email-field">
        <div>{email}</div>
        <div data-testid="total-field">{total.toFixed(2)}</div>
        <div data-testid="header-currency-field">BRL</div>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
  email: state.user.email,

});

ExpensesHeader.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};
export default connect(mapStateToProps)(ExpensesHeader);
