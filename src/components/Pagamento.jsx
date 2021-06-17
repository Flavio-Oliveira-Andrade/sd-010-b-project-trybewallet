import React, { Component } from 'react';

class Pagamento extends Component {
  render() {
    return (
      <label htmlFor="pagamento">
        Método de pagamento:
        {' '}
        <select id="pagamento">
          <option value="dinheiro">Dinheiro</option>
          <option value="credito">Cartão de crédito</option>
          <option value="debito">Cartão de débito</option>
        </select>
      </label>
    );
  }
}

export default Pagamento;
