import React, { Component } from 'react';

class FormExpenses extends Component {
  render() {
    return (
      <form>
        <label htmlFor="value">
          Valor:
          <input type="number" id="value" />
        </label>
        <br />
        <label htmlFor="description">
          Descrição:
          <input type="text" id="description" />
        </label>
        <br />
        <label htmlFor="currency">
          Moeda:
          <select id="currency">
            <option>BRL</option>
            <option selected>CAD</option>
          </select>
        </label>
        <br />
        <label htmlFor="payment-method">
          Método de pagamento
          <select id="payment-method">
            <option>Dinheiro</option>
            <option selected>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>
        <br />
        <label htmlFor="expense-category">
          Tag
          <select id="expense-category">
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
        </label>

      </form>
    );
  }
}

export default FormExpenses;
