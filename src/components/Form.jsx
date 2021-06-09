import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="value">
          Valor
          <input type="number" id="value" />
        </label>

        <label htmlFor="description">
          Descrição
          <input type="text" id="description" />
        </label>

        <label htmlFor="coin">
          Moeda
          <select id="coin">0</select>
        </label>

        <label htmlFor="payment-type">
          Método de pagamento
          <select id="payment-type">
            <option value="money">Dinheiro</option>
            <option value="credit">Cartão de crédito</option>
            <option value="debit">Cartão de débito</option>
          </select>
        </label>

        <label htmlFor="expense-type">
          Tag
          <select id="expense-type">
            <option value="food">Alimentação</option>
            <option value="leisure">Lazer</option>
            <option value="work">Trabalho</option>
            <option value="transport">Transporte</option>
            <option value="health">Saúde</option>
          </select>
        </label>
      </form>
    );
  }
}

export default Form;
