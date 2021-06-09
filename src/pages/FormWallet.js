/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { Component } from 'react';

class FormWallet extends Component {
  render() {
    return (
      <div>
        <form>
          <label htmlFor="value">
            Valor
            <input
              type="text"
              name="value"
            />
          </label>
          <label htmlFor="description">
            Descrição
            <input
              type="text"
              name="description"
            />
          </label>
          <label htmlFor="select-coin">
            Moeda
            <select name="select-coin" />
          </label>
          <label htmlFor="payment">
            Método de pagamento
            <select name="payment">
              <option value="money">Dinheiro</option>
              <option value="credit-card">Cartão de crédito</option>
              <option value="debit card">Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="category">
            Tag
            <select name="category">
              <option value="food">Alimentação</option>
              <option value="leisure">Lazer</option>
              <option value="work">Trabalho</option>
              <option value="transport">Transporte</option>
              <option value="health">Saúde</option>
            </select>
          </label>
        </form>
      </div>
    );
  }
}

export default FormWallet;
