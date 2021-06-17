import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ExpensesForm from '../components/ExpensesForm';

class Wallet extends React.Component {
  constructor() {
    super();

    this.sumExpenses = this.sumExpenses.bind(this);
  }

  sumExpenses() {
    const { expenses } = this.props;

    if (expenses.length === 0) {
      return '0';
    }

    return expenses.reduce((sum, expense) => (
      sum + parseInt(expense.value, 10) * expense.exchangeRates[expense.currency].ask
    ), 0);
  }

  render() {
    const { userEmail } = this.props;
    return (
      <section>
        <header>
          <p data-testid="email-field">
            Email:
            {' '}
            { userEmail }
          </p>
          <p data-testid="total-field">
            Despesa:
            {' '}
            { this.sumExpenses() }
          </p>
          <p data-testid="header-currency-field">Câmbio: BRL</p>
        </header>
        <main>
          <ExpensesForm />
        </main>
      </section>
    );
  }
}

const mapStateToProps = ({ user: { email }, wallet: { expenses } }) => ({
  userEmail: email,
  expenses,
});

Wallet.propTypes = {
  userEmail: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps)(Wallet);
