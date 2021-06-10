import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Form from '../components/Form';

class Wallet extends Component {
  constructor() {
    super();

    this.expensesTotal = this.expensesTotal.bind(this);

    this.state = {
      currency: 'BRL',
    };
  }

  expensesTotal() {
    const { objCurrency } = this.props;

    if (objCurrency.length >= 1) {
      const result = objCurrency.reduce((acc, { value, currency, exchangeRates }) => {
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
    const { currency } = this.state;
    const { login } = this.props;
    return (
      <div>
        <p data-testid="email-field">
          { login }
        </p>
        <span data-testid="total-field">
          { this.expensesTotal() }
        </span>
        <span data-testid="header-currency-field">
          { currency }
        </span>
        <Form />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  login: state.user.email,
  objCurrency: state.wallet.expenses,
});

export default connect(mapStateToProps)(Wallet);

Wallet.propTypes = {
  login: PropTypes.string.isRequired,
  objCurrency: PropTypes.string.isRequired,
};
