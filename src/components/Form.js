import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { fetchAPI } from '../actions';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '0',
      method: 'dinheiro',
      tag: 'alimentacao',
      currency: 'USD',
      description: '',
      exchangeRates: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.renderValue = this.renderValue.bind(this);
    this.renderDescription = this.renderDescription.bind(this);
    this.renderCurrency = this.renderCurrency.bind(this);
    this.renderPayment = this.renderPayment.bind(this);
    this.renderTag = this.renderTag.bind(this);
    this.fetchCoin = this.fetchCoin.bind(this);
    this.setCoins = this.setCoins.bind(this);
    this.saveExpense = this.saveExpense.bind(this);
  }

  componentDidMount() {
    this.setCoins();
  }

  async setCoins() {
    const finalCoins = Object.keys(await this.fetchCoin()).filter((coin) => (
      coin !== 'USDT' && coin !== 'DOGE'
    ));
    this.setState({ exchangeRates: finalCoins });
  }

  async fetchCoin() {
    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    const jsonResponse = await response.json();
    return jsonResponse;
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  }

  saveExpense() {
    const { method, tag, currency, value, description } = this.state;
    const { expenseInfo, storeExpenses } = this.props;
    const expense = {
      id: storeExpenses.length,
      value,
      method,
      tag,
      currency,
      description,
    };

    expenseInfo(expense);
  }

  renderValue(value, handleChange) {
    return (
      <label htmlFor="value">
        Valor
        <input
          type="number"
          value={ value }
          name="value"
          id="value"
          onChange={ handleChange }
        />
      </label>
    );
  }

  renderDescription(description, handleChange) {
    return (
      <label htmlFor="description">
        Descrição
        <input
          type="text"
          value={ description }
          name="description"
          id="description"
          onChange={ handleChange }
        />
      </label>
    );
  }

  renderCurrency(exchangeRates, currency, handleChange) {
    return (
      <label htmlFor="currency">
        Moeda
        <select
          name="currency"
          id="currency"
          value={ currency }
          onChange={ handleChange }
        >
          { exchangeRates.map((coin) => (
            <option key={ coin } value={ coin }>{ coin }</option>
          ))}
        </select>
      </label>
    );
  }

  renderPayment(method, handleChange) {
    return (
      <label htmlFor="method">
        método de pagamento
        <select
          name="method"
          id="method"
          value={ method }
          onChange={ handleChange }
        >
          <option value="Dinheiro">Dinheiro</option>
          <option value="Cartão de crédito">Cartão de crédito</option>
          <option value="Cartão de débito">Cartão de débito</option>
        </select>
      </label>
    );
  }

  renderTag(tag, handleChange) {
    return (
      <label htmlFor="tag">
        Tag
        <select
          name="tag"
          id="tag"
          value={ tag }
          onChange={ handleChange }
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
    const { method, tag, exchangeRates, currency, value, description } = this.state;
    return (
      <form>
        { this.renderValue(value, this.handleChange) }
        <br />
        { this.renderDescription(description, this.handleChange) }
        <br />
        { this.renderCurrency(exchangeRates, currency, this.handleChange) }
        <br />
        { this.renderPayment(method, this.handleChange) }
        <br />
        { this.renderTag(tag, this.handleChange) }
        <button
          type="reset"
          value="Enviar"
          onClick={ this.saveExpense }
        >
          Adicionar despesa
        </button>

      </form>
    );
  }
}

const MapDispatchToProps = (dispatch) => ({
  expenseInfo: (...payload) => dispatch(fetchAPI(...payload)),
});

const mapStateToProps = (state) => ({
  storeExpenses: state.wallet.expenses,
});

Form.propTypes = {
  expenseInfo: PropTypes.func.isRequired,
  storeExpenses: PropTypes.arrayOf.isRequired,
};

export default connect(mapStateToProps, MapDispatchToProps)(Form);
