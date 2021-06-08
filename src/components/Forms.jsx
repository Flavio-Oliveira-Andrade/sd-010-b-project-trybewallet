import React, { Component } from 'react';

class Forms extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <form>
        <label htmlFor="value">
          Valor:
          <input type="number" name="value" id="value" />
        </label>
        <label htmlFor="description">
          Descrição
          <input type="text" name="description" id="description" />
        </label>
        <label htmlFor="currency">
          Moeda
          <select name="currency" id="currency">
            <option value="moeda">moeda</option>
          </select>
        </label>
        <label htmlFor="payment">
          Método de pagamento
          <select name="payment" id="payment">
            <option value="Dinheiro">Dinheiro</option>
            <option value="credit-card">cartão de crédito</option>
            <option value="debit">cartão de débito</option>
          </select>
        </label>
        <label htmlFor="category">
          Tag
          <select name="category" id="category">
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>
      </form>
    );
  }
}

export default Forms;
