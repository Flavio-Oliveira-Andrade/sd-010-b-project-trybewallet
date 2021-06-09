import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ExpenseForm from './ExpenseForm';

class Wallet extends React.Component {
  render() {
    const { email } = this.props;
    return (
      <header>
        <div data-testid="email-field">
          Email:
          { email }
        </div>
        <span data-testid="total-field">
          0
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
};

const mapStateToProps = (state) => ({
  email: state.user.email,
  total: state.wallet.totalExpense,
});

export default connect(mapStateToProps)(Wallet);
