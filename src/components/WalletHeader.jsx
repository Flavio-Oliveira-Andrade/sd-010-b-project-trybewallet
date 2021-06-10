import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

function updateTotalExpenses(expenses) {
  return expenses.reduce((acc, expense) => {
    const { value, currency, exchangeRates } = expense;
    const parseValue = parseFloat(value);
    const { ask } = exchangeRates[currency];
    const total = parseValue * ask;
    return acc + total;
  }, 0);
}

function WalletHeader({ email, expenses }) {
  const totalExpenses = updateTotalExpenses(expenses);
  return (
    <header>
      <span data-testid="email-field">{email}</span>
      <span data-testid="total-field">{ totalExpenses }</span>
      <span data-testid="header-currency-field">BRL</span>
    </header>
  );
}

const mapStateToProps = ({ user: { email }, wallet: { expenses } }) => ({
  email,
  expenses,
});

export default connect(mapStateToProps)(WalletHeader);

WalletHeader.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};
