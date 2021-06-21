import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends React.Component {
  render() {
    const { email, expenses } = this.props;
    console.log(expenses);
    return (
      <fieldset>
        <span data-testid="email-field">
          { email }
        </span>
        <span data-testid="total-field">
          0
          {!expenses ? 0 : expenses.reduce((acc, crr) => acc
               + parseFloat(crr.exchangeRates[crr.currency].ask * crr.value), 0)}
          ;
        </span>
        <span data-testid="header-currency-field">
          BRL
        </span>
      </fieldset>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
  currencies: state.user.email,
  totalExpenses: state.wallet.currencies,
});

Header.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf.isRequired,
};

export default connect(mapStateToProps, null)(Header);
