import React from 'react';

class Forms extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="valor">
          Valor
          <input type="text" name="name" id="valor" />
        </label>
        <label htmlFor="Description">
          Descrição
          <input type="text" name="name" id="Description" />
        </label>
        <label htmlFor="currencies">
          Moeda
          <select id="currencies">
            <option>BRL</option>
          </select>
        </label>
        <label htmlFor="payment">
          Método de pagamento
          <select id="payment">
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag
          <select id="tag">
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

export default Forms;
