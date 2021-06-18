import React, { Component } from 'react';
// import PropTypes from 'prop-types';

export default class AddExpense extends Component {
  structure() {
    // const { description, method } = this.state;

    return (
      <>
        <label htmlFor="metodo">
          Método de pagamento:
          <select
            type="text"
            id="metodo"
            name="method"
          >
            <option selected>-</option>
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>

        <label htmlFor="despesas">
          Tag:
          <select id="despesas" name="tag">
            <option selected>-</option>
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
        </label>

        <label htmlFor="descricao">
          Descrição:
          <input
            type="text"
            id="descricao"
            name="description"

          />
        </label>
      </>
    );
  }

  render() {
    return (

      <form>
        <label htmlFor="valor">
          Valor:
          <input
            type="number"
            id="valor"
            name="value"
          />
        </label>

        <label htmlFor="moeda">
          Moeda:
          <select
            id="moeda"
            name="currency"
          >
            <option>Moeda 1</option>
          </select>
        </label>

        { this.structure() }

        <button type="submit">Adicionar despesa</button>

      </form>
    );
  }
}
