import React, { Component } from 'react';

class Form extends Component {
  render() {
    return (
      <form>
        <label htmlFor="valor">
          Valor:
          <input type="text" id="valor" name="valor" />
        </label>
        <label htmlFor="moeda">
          Moeda:
          <select id="moeda" name="moeda">
            <option>aaaaaaa</option>
          </select>
        </label>
        <label htmlFor="metodo">
          Método de pagamento:
          <select type="text" id="metodo" name="metodo">
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="despesas">
          Tag:
          <select id="despesas" name="despesas">
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
          <label htmlFor="descricao">
            Descrição:
            <input type="text" id="descricao" name="descricao" />
          </label>
        </label>
      </form>
    );
  }
}

export default Form;
