import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ExpenseForm from './ExpenseForm';

class Wallet extends React.Component {
  render() {
    const { email, total } = this.props;
    return (
      <header>
        <div data-testid="email-field">
          Email:
          { email }
        </div>
        <div data-testid="total-field">
          Despesa Total:
          { total }
        </div>
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
  total: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
  total: state.wallet.totalExpense,
});

export default connect(mapStateToProps)(Wallet);
