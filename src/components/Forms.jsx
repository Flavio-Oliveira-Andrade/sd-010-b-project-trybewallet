import React, { Component } from 'react';
import { connect } from 'react-redux';
import { arrayOf, string } from 'prop-types';
import { addExpense } from '../actions';
import fetchCoins from '../services/apiCoins';

class Forms extends Component {
  constructor() {
    super();
    this.spendingValue = this.spendingValue.bind(this);
    this.spendingDescription = this.spendingDescription.bind(this);
    this.spendingCurrency = this.spendingCurrency.bind(this);
    this.spendingMethod = this.spendingMethod.bind(this);
    this.spendingTag = this.spendingTag.bind(this);
    this.submitButton = this.submitButton.bind(this);

    this.state = {
      id: 0,
      value: 0,
      description: '',
      method: '',
      tag: '',
      currency: 'USD',
    };
  }

  spendingValue(value) {
    return (
      <label htmlFor="value">
        Valor
        <input
          id="value"
          value={ value }
          type="number"
          step="1.00"
          min="0"
          onChange={ ({ target }) => {
            this.setState({ value: target.value });
          } }
        />
      </label>
    );
  }

  spendingDescription(description) {
    return (
      <label htmlFor="description">
        Descrição
        <input
          id="description"
          type="text"
          value={ description }
          onChange={ ({ target: { value } }) => {
            this.setState({ description: value });
          } }
        />
      </label>
    );
  }

  spendingCurrency(currency, currencies) {
    return (
      <label htmlFor="currency">
        Moeda
        <select
          id="currency"
          value={ currency }
          onChange={ ({ target: { value } }) => {
            this.setState({ currency: value });
          } }
        >
          {currencies.map((curr) => (
            <option
              data-testid={ curr }
              key={ curr }
              value={ curr }
            >
              {curr}
            </option>
          ))}
        </select>
      </label>
    );
  }

  spendingMethod(method) {
    return (
      <label htmlFor="method">
        Método de pagamento
        <select
          id="method"
          value={ method }
          onChange={ ({ target: { value } }) => {
            this.setState({ method: value });
          } }
        >
          <option defaultValue hidden>Escolha</option>
          <option value="Dinheiro">Dinheiro</option>
          <option value="Cartão de crédito">Cartão de crédito</option>
          <option value="Cartão de débito">Cartão de débito</option>
        </select>
      </label>
    );
  }

  spendingTag(tag) {
    return (
      <label htmlFor="tag">
        Tag
        <select
          id="tag"
          value={ tag }
          onChange={ ({ target: { value } }) => {
            this.setState({ tag: value });
          } }
        >
          <option defaultValue hidden>Escolha</option>
          <option value="Alimentação">Alimentação</option>
          <option value="Lazer">Lazer</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Transporte">Transporte</option>
          <option value="Saúde">Saúde</option>
        </select>
      </label>
    );
  }

  submitButton() {
    const submit = async () => {
      const { propAddExpense } = this.props;
      propAddExpense({ ...this.state, exchangeRates: await fetchCoins() });
      this.setState((prev) => ({
        id: prev.id + 1,
        value: 0,
        description: '',
        method: '',
        tag: '',
        currency: 'USD' }));
    };

    return (
      <button type="button" onClick={ submit }>
        Adicionar despesa
      </button>
    );
  }

  render() {
    const { currencies } = this.props;
    const { value, description, method, tag, currency } = this.state;
    return (
      <>
        { this.spendingValue(value) }
        { this.spendingDescription(description) }
        { this.spendingCurrency(currency, currencies) }
        { this.spendingMethod(method) }
        { this.spendingTag(tag) }
        { this.submitButton() }
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  propAddExpense: (data) => dispatch(addExpense(data)),
});

Forms.propTypes = {
  currencies: arrayOf(string),
}.isRequired;

export default connect(null, mapDispatchToProps)(Forms);
