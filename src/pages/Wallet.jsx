import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import fetchCurrency from '../services/fetchCurrency';
import { actionFetchCurrencies, newExpense } from '../actions';

class Wallet extends React.Component {
  constructor(props) {
    super(props);
    this.calculateTotal = this.calculateTotal.bind(this);
    this.setCurrencyOnState = this.setCurrencyOnState.bind(this);
    this.returnCurrencies = this.returnCurrencies.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.addCost = this.addCost.bind(this);
    this.state = {
      currencies: {},
      expenseValue: '',
      expenseDescription: '',
      currency: 'USD',
      payMeth: 'Alimentação',
      expenseTag: 'Dinheiro',
    };
  }

  async componentDidMount() {
    const currencies = await fetchCurrency();
    this.setCurrencyOnState(currencies);
  }

  setCurrencyOnState(currencies) {
    this.setState({ currencies });
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  returnCurrencies(currencies) {
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
    const values = userExpenses.map((expense) => expense.value);
    const total = values.reduce((acc, curr) => acc + curr, 0);
    if (!total) return 0;
    return total;
  }

  async addCost() {
    const { expenseValue,
      expenseDescription, expenseTag, payMeth, currency } = this.state;
    const { dispatchFetchCurrencies, dispatchNewExpense, userExpenses } = this.props;
    dispatchFetchCurrencies();
    const exchangeRates = await fetchCurrency();
    const lastExpense = userExpenses[userExpenses.length - 1];
    const expenseToAdd = {
      id: lastExpense ? lastExpense.id + 1 : 0,
      expenseValue,
      expenseDescription,
      expenseTag,
      payMeth,
      currency,
      exchangeRates,
    };
    dispatchNewExpense(expenseToAdd);
  }

  returnForm() {
    const { currencies } = this.state;
    return (
      <form>
        <label htmlFor="expense-value">
          Valor:
          <input
            type="number"
            id="expense-value"
            name="expenseValue"
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="expense-description">
          Descrição:
          <input
            type="text"
            id="expense-description"
            name="expenseDescription"
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
          <select id="método de pagamento" name="payMeth" onChange={ this.handleChange }>
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="expense-tag">
          Tag
          <select name="expenseTag" id="expense-tag" onChange={ this.handleChange }>
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
          <section data-testid="total-field">{`Total: ${total}`}</section>
          <section data-testid="header-currency-field">Moeda atual: BRL</section>
        </header>
        {this.returnForm()}
      </div>
    );
  }
}

Wallet.propTypes = {
  userEmail: PropTypes.string.isRequired,
  userExpenses: PropTypes.arrayOf(PropTypes.object).isRequired,
  dispatchFetchCurrencies: PropTypes.func.isRequired,
  dispatchNewExpense: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  dispatchNewExpense: (state) => dispatch(newExpense(state)),
  dispatchFetchCurrencies: () => dispatch(actionFetchCurrencies()),
});

const mapStateToProps = (state) => ({
  userEmail: state.user.email,
  userExpenses: state.wallet.expenses,
  currencies: state.wallet.currencies,
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
