import React from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends React.Component {
  calcTotal(expenses) {
    const total = expenses.reduce((acc, curr) => {
      const rate = curr.exchangeRates[curr.currency].ask;
      return acc + curr.value * rate;
    }, 0);
    return total;
  }

  render() {
    const { email, expenses } = this.props;
    return (
      <header>
        <h2>Header</h2>
        <span data-testid="email-field">{email}</span>
        <span data-testid="total-field">{ this.calcTotal(expenses) }</span>
        <span data-testid="header-currency-field">BRL</span>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

Header.propTypes = {
  email: propTypes.string,
}.isRequired;

export default connect(mapStateToProps)(Header);
