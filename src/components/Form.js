import React, { Component } from 'react';

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // id: 0,
      // value: 0,
      // description: '',
      // currency: '',
      // method: '',
      // tag: '',
    };
  }

  render() {
    return (
      <form>
        <label htmlFor="value">
          Valor
          <input
            type="text"
            id="value"
            data-testid="value-input"
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="description">
          Descrição
          <input
            type="text"
            id="description"
            data-testid="description-input"
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="currency">
          Moeda
          <select
            id="currency"
            data-testid="currency-input"
            onChange={ this.handleChange }
          >
            <option value="1">1</option>
          </select>
        </label>
        <label htmlFor="method">
          Método de pagamento
          <select
            id="method"
            data-testid="method-input"
            onChange={ this.handleChange }
          >
            <option value="1">Dinheiro</option>
            <option value="2">Cartão de crédito</option>
            <option value="2">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag
          <select
            id="tag"
            data-testid="tag-input"
            onChange={ this.handleChange }
          >
            <option value="1">Alimentação</option>
            <option value="2">Lazer</option>
            <option value="2">Trabalho</option>
            <option value="2">Transporte</option>
            <option value="2">Saúde</option>
          </select>
        </label>
      </form>
    );
  }
}

export default Form;
