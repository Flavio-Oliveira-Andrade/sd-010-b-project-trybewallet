import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ExpenseForm from './ExpenseForm';

class Wallet extends React.Component {
  // Função criada com o auxilio da colega Fernanda Porto.
  totalCalc(acc, curr) {
    return acc + parseFloat(curr.exchangeRates[curr.currency].ask * curr.value);
  }

  render() {
    const { email, expense } = this.props;
    return (
      <header>
        <div data-testid="email-field">
          Email:
          { email }
        </div>
        <span data-testid="total-field">
          { !expense ? 0 : expense.reduce((acc, curr) => this.totalCalc(acc, curr), 0) }
        </span>
        <div data-testid="header-currency-field">
          BRL
        </div>
        <ExpenseForm />
      </header>
    );
  }
}

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
  expense: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
  expense: state.wallet.expenses,
});

export default connect(mapStateToProps)(Wallet);
