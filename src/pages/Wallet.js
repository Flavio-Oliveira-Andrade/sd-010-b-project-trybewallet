import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Forms from '../components/Forms';

class Wallet extends React.Component {
  constructor() {
    super();

    this.expensesTotal = this.expensesTotal.bind(this);
  }

  expensesTotal() {
    const { expenses } = this.props;

    if (expenses.length >= 1) {
      const result = expenses.reduce((acc, { value, currency, exchangeRates }) => {
        const findCurrency = Object.values(exchangeRates)
          .find(({ code }) => currency === code);
        const finalValue = parseFloat(findCurrency.ask) * parseFloat(value);
        return acc + finalValue;
      }, 0);
      return result;
    }
    return 0;
  }

  render() {
    const { emailUser } = this.props;
    return (
      <div>
        <header>
          <span data-testid="email-field">
            User:

            { emailUser }
          </span>
          <span data-testid="total-field">
            Total expenses:
            { this.expensesTotal() }
          </span>
          <span data-testid="header-currency-field">
            BRL
          </span>
        </header>
        <Forms />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  emailUser: state.user.email,
  expenses: state.wallet.expenses,
});

Wallet.propTypes = {
  emailUser: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps, null)(Wallet);
