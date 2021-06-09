import React, { Component } from 'react';
import { arrayOf, string } from 'prop-types';

class Forms extends Component {
  constructor() {
    super();
    this.spendingValue = this.spendingValue.bind(this);
    this.spendingDescription = this.spendingDescription.bind(this);
    this.spendingCurrency = this.spendingCurrency.bind(this);
    this.spendingMethod = this.spendingMethod.bind(this);
    this.spendingCategory = this.spendingCategory.bind(this);
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
        />
      </label>
    );
  }

  spendingDescription() {
    return (
      <label htmlFor="description">
        Descrição
        <input
          id="description"
          type="text"
        />
      </label>
    );
  }

  spendingCurrency(currencies) {
    return (
      <label htmlFor="currency">
        Moeda
        <select
          id="currency"
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

  spendingMethod() {
    return (
      <label htmlFor="method">
        Método de pagamento
        <select
          id="method"
        >
          <option defaultValue hidden>Escolha</option>
          <option value="Dinheiro">Dinheiro</option>
          <option value="Cartão de crédito">Cartão de crédito</option>
          <option value="Cartão de débito">Cartão de débito</option>
        </select>
      </label>
    );
  }

  spendingCategory() {
    return (
      <label htmlFor="tag">
        Tag
        <select
          id="tag"
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

  render() {
    const { currencies } = this.props;
    return (
      <>
        { this.spendingValue(0) }
        { this.spendingDescription() }
        { this.spendingCurrency(currencies) }
        { this.spendingMethod() }
        { this.spendingCategory() }
      </>
    );
  }
}

Forms.propTypes = {
  currencies: arrayOf(string),
}.isRequired;

export default Forms;
