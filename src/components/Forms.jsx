import React, { Component } from 'react';
// import PropTypes from 'prop-types';

class Forms extends Component {
  render() {
    return (
      <div>
        <form>
          <label htmlFor="amount">
            Valor
            <input type="number" name="amount" id="amount" />
          </label>
          <label htmlFor="description">
            Descrição
            <input type="text" name="description" id="description" />
          </label>
          <label htmlFor="currency">
            Moeda
            <input name="currency" id="currency" />
            <select>
              <option value="BRL">BRL</option>
            </select>
          </label>
          <label htmlFor="payment">
            Método de pagamento
            <select name="payment" id="payment">
              <option value="money">Dinheiro</option>
              <option value="credit card">Cartão de crédito</option>
              <option value="debit card">Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="tag">
            Tag
            <select name="tag" id="tag">
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

export default Forms;
