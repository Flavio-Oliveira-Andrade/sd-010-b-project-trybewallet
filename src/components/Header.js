import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends React.Component {
  Money(expenses) {
    const result = expenses.reduce((acumulater, next) => {
      const tax = next.exchangeRates[next.currency].ask;
      return acumulater + next.value * tax;
    }, 0);
    return result;
  }

  render() {
    const { email, expenses } = this.props;

    return (
      <header>
        <span data-testid="email-field">{email}</span>
        <span data-testid="total-field">{ this.Money(expenses) }</span>
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
  email: PropTypes.string.isRequired,
  expenses: PropTypes.number.isRequired,
};

export default connect(mapStateToProps)(Header);
