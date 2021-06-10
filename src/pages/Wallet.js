import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import getCurrency from '../services/api/currencyApi';
import { fetchExpense } from '../actions';
import Header from '../components/Header';
import Table from '../components/Table';

const currencyArr = [
  'USD', 'CAD', 'EUR',
  'GBP', 'ARS', 'BTC',
  'LTC', 'JPY', 'CHF',
  'AUD', 'CNY', 'ILS',
  'ETH', 'XRP'];

const INITIAL_INPUT_VALUE = {
  value: '',
  description: '',
  currency: 'USD',
  method: 'Dinheiro',
  tag: 'Alimentação',
};

class Wallet extends React.Component {
  constructor() {
    super();
    this.state = {
      currencies: [],
      ...INITIAL_INPUT_VALUE,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async componentDidMount() {
    const allCurrencies = await getCurrency();
    const filteredCurrencies = Object.keys(allCurrencies)
      .filter((currency) => currencyArr.includes(currency));
    this.updateCurrency(filteredCurrencies);
  }

  handleChange(name, value) {
    this.setState({ [name]: value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { addExpense } = this.props;
    addExpense(this.state);
    this.setState((prevState) => ({ ...prevState, ...INITIAL_INPUT_VALUE }));
  }

  updateCurrency(currencies) {
    this.setState({ currencies });
  }

  renderCurrenciesAsOption() {
    const { currencies, currency } = this.state;
    const allCurrencies = currencies
      .map((c) => <option key={ c } value={ c }>{c}</option>);
    return (
      <label htmlFor="currency">
        Moeda
        <select
          onChange={ ({ target: { name, value } }) => this.handleChange(name, value) }
          name="currency"
          id="currency"
          value={ currency }
        >
          {allCurrencies}
        </select>
      </label>
    );
  }

  renderPaymentOptions() {
    const { method } = this.state;
    return (
      <label htmlFor="payment">
        Método de pagamento
        <select
          name="method"
          value={ method }
          onChange={ ({ target: { name, value } }) => this.handleChange(name, value) }
          id="payment"
        >
          <option value="Dinheiro">Dinheiro</option>
          <option value="Cartão de crédito">Cartão de crédito</option>
          <option value="Cartão de débito">Cartão de débito</option>
        </select>
      </label>
    );
  }

  renderTagOptions() {
    const { tag } = this.state;
    return (
      <label htmlFor="tag">
        Tag
        <select
          name="tag"
          value={ tag }
          onChange={ ({ target: { name, value } }) => this.handleChange(name, value) }
          id="tag"
        >
          <option value="Alimentação">Alimentação</option>
          <option value="Lazer">Lazer</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Transporte">Transporte</option>
          <option value="Saúde">Saúde</option>
        </select>
      </label>
    );
  }

  render() {
    const { value: priceValue, description } = this.state;

    return (
      <>
        <Header />
        <form>
          <label htmlFor="value">
            Valor:
            <input
              id="value"
              type="number"
              name="value"
              value={ priceValue }
              onChange={ ({ target: { name, value } }) => this.handleChange(name, value) }
            />
          </label>
          <label htmlFor="description">
            Descrição:
            <input
              id="description"
              type="text"
              name="description"
              value={ description }
              onChange={ ({ target: { name, value } }) => this.handleChange(name, value) }
            />
          </label>
          {this.renderCurrenciesAsOption()}
          {this.renderPaymentOptions()}
          {this.renderTagOptions()}
          <button type="button" onClick={ this.handleSubmit }>
            Adicionar despesa
          </button>
        </form>
        <Table />
      </>);
  }
}

Wallet.propTypes = {
  addExpense: PropTypes.func.isRequired,
};

const mapStateToProps = ({ user, wallet }) => ({
  expenses: wallet.expenses,
  email: user.email,
});

const mapDispatchToProps = (dispatch) => ({
  addExpense: (state) => dispatch(fetchExpense(state)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
