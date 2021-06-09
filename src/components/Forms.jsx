import React, { Component } from 'react';

class Forms extends Component {
  render() {
    return (
      <form>
        <label htmlFor="name">
          Valor
          <input type="text" name="name" />
        </label>
        <label htmlFor="desc">
          Descrição
          <input type="text" name="desc" />
        </label>
        <label htmlFor="moeda">
          Moeda
          <select name="moeda">
            <option value="valor1">Valor 1</option>
          </select>
        </label>
        <label htmlFor="pay">
          Método de pagamento
          <select name="pay">
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="desc">
          Tag
          <select>
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
