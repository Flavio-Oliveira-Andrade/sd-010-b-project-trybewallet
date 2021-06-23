import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';

class Header extends React.Component {
  render() {
    const { userEmail, expenses } = this.props;
    const totalExpenses = expenses.map((expense) => {
      const {
        currency, exchangeRates, value,
      } = expense;
      const { ask } = exchangeRates[currency];
      const convertedValue = (value * ask).toFixed(2);
      return convertedValue;
    }).reduce((acc, curr) => {
      acc += Number(curr);
      return acc;
    }, 0);

    return (
      <header>
        <div>Wellcome to the TrybeWallet!</div>
        <p data-testid="email-field">
          Email:
          {userEmail}
        </p>
        <p data-testid="total-field">
          Despesa: R$
          {totalExpenses}
        </p>
        <p data-testid="header-currency-field">BRL</p>

      </header>
    );
  }
}

const mapStateToProps = ({ user: { email }, wallet: { totalExpense, expenses } }) => ({
  userEmail: email,
  totalExpense,
  expenses,
});

export default connect(mapStateToProps, null)(Header);

Header.propTypes = {
  userEmail: propTypes.string,
}.isRequired;
