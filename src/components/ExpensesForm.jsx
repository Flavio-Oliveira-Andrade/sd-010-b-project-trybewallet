import './ExpensesForm.css';
import React, { Component } from 'react';

export default class ExpensesForm extends Component {
  render() {
    return (
      <fieldset>
        <label htmlFor="valor-input">
          <strong>Valor </strong>
          <input id="valor-input" type="number" name="valor" />
        </label>
        <label htmlFor="descricao-input">
          <strong>Descrição </strong>
          <input id="descricao-input" type="text" name="descricao" />
        </label>
        <label htmlFor="moeda-input">
          <strong>Moeda </strong>
          <select id="moeda-input">
            {' '}
          </select>
        </label>
        <label htmlFor="metodoPagamento-input">
          <strong>Método de pagamento </strong>
          <select id="metodoPagamento-input">
            <option value="money">Dinheiro</option>
            <option value="credit-card">Cartão de crédito</option>
            <option value="debit-card">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="categoria-input">
          <strong>Tag </strong>
          <select id="categoria-input">
            <option value="food">Alimentação</option>
            <option value="leisure">Lazer</option>
            <option value="work">Trabalho</option>
            <option value="transport">Transporte</option>
            <option value="health">Saúde</option>
          </select>
        </label>
      </fieldset>
    );
  }
}
