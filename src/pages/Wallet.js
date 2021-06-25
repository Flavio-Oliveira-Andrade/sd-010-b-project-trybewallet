import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Form from '../component/Form';
import Table from '../component/Table';

class Wallet extends React.Component {
  constructor() {
    super();
    this.sumExpenses = this.sumExpenses.bind(this);
  }

  sumExpenses() {
    const { expenses } = this.props;
    const sum = expenses.reduce(
      (acc, curr) => acc + (curr.exchangeRates[curr.currency].ask * curr.value),
      0,
    );
    return parseFloat(sum).toFixed(2);
  }

  // ref: função de soma com ajuda da @lara-capila

  render() {
    const { email } = this.props;
    return (
      <>
        <header>
          <h1 data-testid="email-field">{ email }</h1>
          <h2 data-testid="total-field">{ this.sumExpenses() }</h2>
          <span data-testid="header-currency-field">
            Moeda de conversão:
            {' '}
            BRL
          </span>
        </header>
        <Form />
        <Table />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(Object).isRequired,
};

export default connect(mapStateToProps)(Wallet);
