import React, { Component } from 'react';

class ExpenseForms extends Component {
  render() {
    return (
      <form>
        <label htmlFor="expense">
          Valor:
          <input type="text" name="expense" id="expense" />
        </label>

        <label htmlFor="description">
          Descrição:
          <input type="text" name="description" id="description" />
        </label>

        <label htmlFor="currency">
          Moeda:
          <select name="currency" id="currency">
            <option>BRL</option>
          </select>
        </label>

        <label htmlFor="currency">
          Método de pagamento:
          <select name="currency" id="currency">
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>

        <label htmlFor="currency">
          Tag:
          <select name="currency" id="currency">
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
        </label>

        <button type="submit">Adicionar Despesa</button>
      </form>
    );
  }
}

export default ExpenseForms;
