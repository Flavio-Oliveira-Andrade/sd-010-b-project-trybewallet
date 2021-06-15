import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import fetchCurrency from '../services/fetchCurrency';
import { actionFetchCurrencies, newExpense, receiveCurrencies } from '../actions';
import WalletTable from '../Components/WalletTable';

class Wallet extends React.Component {
  constructor(props) {
    super(props);
    this.calculateTotal = this.calculateTotal.bind(this);
    // this.setCurrencyOnState = this.setCurrencyOnGlobalState.bind(this);
    this.returnCurrencies = this.returnCurrencies.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.addCost = this.addCost.bind(this);
    this.state = {
      // currencies: {},
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    };
  }

  async componentDidMount() {
    const currencies = await fetchCurrency();
    this.setCurrencyOnGlobalState(currencies);
  }

  setCurrencyOnGlobalState(currencies) {
    const { dispatchCurrencies } = this.props;
    dispatchCurrencies(currencies);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  returnCurrencies(currencies = {}) {
    if (Object.keys(currencies) === 0) {
      return (<option value="loading">Carregando...</option>);
    }
    return Object.keys(currencies).filter((currency) => currency !== 'USDT')
      .map((currency) => (
        <option key={ currency } value={ currency }>
          { currency }
        </option>));
  }

  calculateTotal() {
    const { userExpenses } = this.props;
    const values = userExpenses.map((expense) => (parseInt(expense.value, 10)
    * expense.exchangeRates[expense.currency].ask));
    const total = values.reduce((acc, curr) => acc + curr, 0);
    if (!total) return 0;
    return total;
  }

  async addCost() {
    const { value,
      description, tag, method, currency } = this.state;
    const { dispatchNewExpense, userExpenses } = this.props;
    // dispatchFetchCurrencies();
    const exchangeRates = await fetchCurrency();
    const lastExpense = userExpenses[userExpenses.length - 1];
    const expenseToAdd = {
      id: lastExpense ? lastExpense.id + 1 : 0,
      value,
      description,
      tag,
      method,
      currency,
      exchangeRates,
    };
    dispatchNewExpense(expenseToAdd);
  }

  returnForm() {
    const { currencies } = this.props;
    return (
      <form>
        <label htmlFor="expense-value">
          Valor:
          <input
            type="number"
            id="expense-value"
            name="value"
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="expense-description">
          Descrição:
          <input
            type="text"
            id="expense-description"
            name="description"
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="moeda">
          Moeda
          <select id="moeda" name="currency" onChange={ this.handleChange }>
            {this.returnCurrencies(currencies)}
          </select>
        </label>
        <label htmlFor="método de pagamento">
          Método de Pagamento
          <select id="método de pagamento" name="method" onChange={ this.handleChange }>
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="expense-tag">
          Tag
          <select name="tag" id="expense-tag" onChange={ this.handleChange }>
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>
        <button type="button" onClick={ this.addCost }>Adicionar Despesa</button>
      </form>
    );
  }

  render() {
    const { userEmail } = this.props;
    const total = this.calculateTotal();
    return (
      <div>
        <header>
          <section data-testid="email-field">{userEmail}</section>
          <section data-testid="total-field">{`Total: ${total.toFixed(2)}`}</section>
          <section data-testid="header-currency-field">Moeda atual: BRL</section>
        </header>
        {this.returnForm()}
        <WalletTable />
      </div>
    );
  }
}

const currencieFormat = {
  code: PropTypes.string,
  codein: PropTypes.string,
  name: PropTypes.string,
  high: PropTypes.string,
  low: PropTypes.string,
  varBid: PropTypes.string,
  pctChange: PropTypes.string,
  bid: PropTypes.string,
  ask: PropTypes.string,
  timestamp: PropTypes.string,
  create_date: PropTypes.string,
};

Wallet.propTypes = {
  userEmail: PropTypes.string.isRequired,
  userExpenses: PropTypes.arrayOf(PropTypes.object).isRequired,
  dispatchNewExpense: PropTypes.func.isRequired,
  dispatchCurrencies: PropTypes.func.isRequired,
  currencies: PropTypes.shape({
    USD: PropTypes.shape(currencieFormat),
    USDT: PropTypes.shape(currencieFormat),
    CAD: PropTypes.shape(currencieFormat),
    GBP: PropTypes.shape(currencieFormat),
    ARS: PropTypes.shape(currencieFormat),
    BTC: PropTypes.shape(currencieFormat),
    LTC: PropTypes.shape(currencieFormat),
    EUR: PropTypes.shape(currencieFormat),
    JPY: PropTypes.shape(currencieFormat),
    CHF: PropTypes.shape(currencieFormat),
    AUD: PropTypes.shape(currencieFormat),
    CNY: PropTypes.shape(currencieFormat),
    ILS: PropTypes.shape(currencieFormat),
    ETH: PropTypes.shape(currencieFormat),
    XRP: PropTypes.shape(currencieFormat),
    DOGE: PropTypes.shape(currencieFormat),
  }).isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  dispatchNewExpense: (state) => dispatch(newExpense(state)),
  dispatchFetchCurrencies: () => dispatch(actionFetchCurrencies()),
  dispatchCurrencies: (state) => dispatch(receiveCurrencies(state)),
});

const mapStateToProps = (state) => ({
  userEmail: state.user.email,
  userExpenses: state.wallet.expenses,
  currencies: state.wallet.currencies,
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
