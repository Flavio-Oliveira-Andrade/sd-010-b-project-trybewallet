import React, { Component } from 'react';

export class SelectPagamento extends Component {
  render() {
    return (
      <div>
        <label htmlFor="pagamento">
          Método de Pagamento:
          <select name="pagamento" id="pagamento">
            <option>Dinheiro</option>
            <option>Cartão de Crédito</option>
            <option>Cartão de Débito</option>
          </select>
        </label>
      </div>
    );
  }
}

export default SelectPagamento;
