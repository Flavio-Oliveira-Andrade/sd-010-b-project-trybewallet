import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends React.Component {
  getCurrentExpanseValues(expense) {
    const { value, currency, exchangeRates } = expense;
    return {
      convertedValue: value * exchangeRates[currency].ask,
      exchangeValue: exchangeRates[currency].ask,
    };
  }

  renderTotal() {
    const { expenses } = this.props;
    const totalSum = expenses.reduce((acc, expense) => {
      const { convertedValue } = this.getCurrentExpanseValues(expense);
      acc += parseFloat(convertedValue);
      return acc;
    }, 0);
    return (
      Math.round((totalSum + Number.EPSILON) * 100) / 100
    ).toFixed(2);
  }

  render() {
    const { email } = this.props;
    return (
      <header>
        <p data-testid="email-field">{email}</p>
        <select data-testid="header-currency-field">
          <option defaultValue>BRL</option>
        </select>
        <p data-testid="total-field">{this.renderTotal()}</p>
      </header>
    );
  }
}

Header.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    value: PropTypes.string,
    description: PropTypes.string,
    currency: PropTypes.string,
    method: PropTypes.string,
    tag: PropTypes.string,
    exchangeRates: PropTypes.shape({
      code: PropTypes.string,
      name: PropTypes.string,
      ask: PropTypes.string,
    }),
  })),
  email: PropTypes.string,
};

Header.defaultProps = {
  email: 'hello@ola.com',
  expenses: {
    id: 1,
    value: '555',
    description: 'faltou',
    currency: 'faltou',
    method: 'faltou',
    tag: 'faltou',
    exchangeRates:
      {
        code: 'USD',
        name: 'Dólar Comercial',
        ask: '5.6208',
      },

  },
};

const mapStateToProps = ({ user, wallet }) => ({
  expenses: wallet.expenses,
  email: user.email,
});

export default connect(mapStateToProps)(Header);
