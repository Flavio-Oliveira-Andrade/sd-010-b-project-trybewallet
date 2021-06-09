import React from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';

class Wallet extends React.Component {
  render() {
    const { currencies, email, expenses } = this.props;
    return (
      <div>
        <header>
          <span
            data-testid="email-field"
          >
            { email }
          </span>
          <span
            data-testid="total-field"
          >
            0
            { }
          </span>
          <span data-testid="header-currency-field">
            BRL
          </span>
        </header>
        <label htmlFor="currenciesID">
          <input
            id="currenciesID"
            type="text"
            value={ currencies }
            placeholder="expenses"
          />
          { expenses }
        </label>
        <label htmlFor="expensesID">
          <input
            id="expensesID"
            type="text"
            placeholder="currency-exchange"
          />
        </label>
        <div>TrybeWallet</div>
      </div>
    );
  }
}

Wallet.propTypes = {
  currencies: propTypes.arrayOf().isRequired,
  expenses: propTypes.number.isRequired,
  email: propTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  expenses: state.wallet.expenses,
  email: state.user.email,
});

export default connect(mapStateToProps, null)(Wallet);
