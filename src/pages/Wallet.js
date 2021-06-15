import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ExpenseAddForm from '../components/ExpenseAddForm';
import CURRENCY from '../services/API';
import actionStore from '../actions';

class Wallet extends React.Component {
  async componentDidMount() {
    const { setCurrencies } = this.props;
    setCurrencies(await CURRENCY(), 'currencies');
  }

  render() {
    const { email, expenses, currencies } = this.props;
    return (
      <div>
        <header>
          <p data-testid="email-field">
            Email:
            {` ${email}`}
          </p>
          <p data-testid="total-field">
            {expenses.map((valor) => (
              valor.valueExpense
            ))}
            0
          </p>
          <p data-testid="header-currency-field">
            BRL
          </p>
        </header>
        <ExpenseAddForm currencies={ currencies } />
      </div>);
  }
}

Wallet.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.number).isRequired,
  setCurrencies: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({ // LER
  email: state.user.email,
  expenses: state.wallet.expenses,
  currencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrencies: (value, type) => dispatch(actionStore(Object.keys(value), type)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
