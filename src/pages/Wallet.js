import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ExpenseForm from '../components/ExpenseForm';

class Wallet extends React.Component {
  render() {
    const { email, expenses } = this.props;
    return (
      <div>
        <header>
          <div>TrybeWallet</div>
          <span
            data-testid="email-field"
          >
            {`E-mail : ${email}`}
          </span>
          <span
            data-testid="total-field"
          >
            {`Despesas totais: ${expenses.reduce((acc, expense) => (acc + expense), 0)}`}
          </span>
          <span
            data-testid="header-currency-field"
          >
            Câmbio: BRL
          </span>
        </header>
        <ExpenseForm />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default connect(mapStateToProps)(Wallet);
