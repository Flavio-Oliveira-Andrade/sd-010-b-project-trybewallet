import React from 'react';
import './Wallet.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ExpensesForm from '../components/ExpensesForm';

class Wallet extends React.Component {
  render() {
    const { user, expenses } = this.props;
    return (

      <div id="main">
        <div>
          <span data-testid="email-field">
            Usuário:
            {' '}
            {user.email}
          </span>
          <span data-testid="total-field">
            {expenses.reduce((acc, cur) => acc
              + ((+cur.exchangeRates[cur.currency].ask) * (+cur.value)), 0)}
          </span>
          <span data-testid="header-currency-field">
            BRL
          </span>
        </div>
        <ExpensesForm />
      </div>

    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
  user: state.user,
});

export default connect(mapStateToProps)(Wallet);

Wallet.propTypes = PropTypes.shape({
  email: PropTypes.string,
}).isRequired;
