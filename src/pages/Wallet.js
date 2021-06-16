import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ExpenseAddForm from '../components/ExpenseAddForm';
import dataAPI from '../services/API';
import { actionWalletCurrencies } from '../actions';

class Wallet extends React.Component {
  constructor() {
    super();
    this.state = {
      total: 0,
    };
    this.addExpense = this.addExpense.bind(this);
  }

  componentDidMount() {
    const { setCurrencies } = this.props;
    setCurrencies(dataAPI(), 'currencies');
  }

  addExpense(object) {
    const { total } = this.state;
    const valueGasto = object.value;
    const cambio = object.exchangeRates[object.currency].ask;
    this.setState({
      total: total + (valueGasto * cambio),
    });
  }

  render() {
    const { email, currencies } = this.props;
    const { total } = this.state;
    return (
      <div>
        <header>
          <span data-testid="email-field">
            Email:
            {` ${email}`}
          </span>
          <span id="total-field" value="0" data-testid="total-field">
            {total}
          </span>
          <span data-testid="header-currency-field">
            BRL
          </span>
        </header>
        <ExpenseAddForm currencies={ currencies } addExpense={ this.addExpense } />
      </div>);
  }
}

Wallet.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  email: PropTypes.string.isRequired,
  setCurrencies: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({ // LER
  email: state.user.email,
  currencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrencies: (API, type) => dispatch(actionWalletCurrencies(API, type)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
