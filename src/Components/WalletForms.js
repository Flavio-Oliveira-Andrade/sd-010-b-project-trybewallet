import React, { Component } from 'react';

class WalletForms extends Component {
  render() {
    return (
      <form>
        <label htmlFor="input-valor">
          Valor
          <input id="input-valor" type="number" name="valor" />
        </label>

        <label htmlFor="input-descricao">
          Descrição
          <input id="input-descricao" type="text" name="descricao" />
        </label>

        <label htmlFor="select-moeda">
          <select id="select-moeda">
            {}
          </select>
        </label>

        <label htmlFor="select-pagamento">
          Método de pagamento
          <select id="select-pagamento">
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>

        <label htmlFor="select-categoria">
          Tag
          <select id="select-categoria">
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

export default WalletForms;
