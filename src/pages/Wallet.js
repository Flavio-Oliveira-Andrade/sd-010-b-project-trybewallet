import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ExpenseForm from '../components/ExpenseForm';
import { currenciesAction } from '../actions';
import ExpenseTable from '../components/ExpenseTable';

class Wallet extends React.Component {
  componentDidMount() {
    this.fetchApi();
  }

  async fetchApi() {
    const { changeCurrencies } = this.props;
    const results = await fetch('https://economia.awesomeapi.com.br/json/all');
    const data = await results.json();
    const currencies = Object.keys(data);
    const newCurrencies = currencies.filter((currencie) => currencie !== 'USDT');
    changeCurrencies(newCurrencies);
  }

  render() {
    const { email, expenses } = this.props;
    return (
      <div>
        <header>
          <div>TrybeWallet</div>
          <span
            data-testid="email-field"
          >
            {`E-mail: ${email}`}
          </span>
          <span
            data-testid="total-field"
          >
            {`Despesas totais: R$ ${expenses.reduce(
              (acc, expense) => (acc + parseInt(expense.value, 10)), 0,
            )} `}
          </span>
          <span
            data-testid="header-currency-field"
          >
            BRL
          </span>
        </header>
        <ExpenseForm />
        <ExpenseTable />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  changeCurrencies: (currencies) => dispatch(currenciesAction(currencies)),
});

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.any).isRequired,
  changeCurrencies: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
