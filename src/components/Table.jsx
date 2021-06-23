import React from 'react';

class Table extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="expense">
          Valor:
          <input type="text" name="name" id="expense" />
        </label>
        <label htmlFor="description">
          Descrição:
          <input type="text" name="name" id="description" />
        </label>
        <label htmlFor="currency">
          Moeda:
          <select type="text" name="name" id="currency">
            <option>USD</option>
          </select>
        </label>
        <label htmlFor="payment">
          Método de pagamento:
          <select type="text" name="name" id="payment">
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          tag:
          <select type="text" name="name" id="tag">
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

export default Table;
