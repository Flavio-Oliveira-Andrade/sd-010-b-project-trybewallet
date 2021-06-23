import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <form action="">
        <label htmlFor="value">
          Valor
          <input type="text" id="value" />
        </label>
        <label htmlFor="description">
          Descrição
          <input type="text" id="description" />
        </label>
        <label htmlFor="currency">
          Moeda
          <select id="currency">
            <option value="BRL">BRL </option>
          </select>
        </label>
        <label htmlFor="payment-method">
          Método de pagamento
          <select id="payment-method">
            <option value="BRL">Dinheiro</option>
            <option value="BRL">Cartão de crédito</option>
            <option value="BRL">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag
          <select id="tag">
            <option value="BRL">Alimentação</option>
            <option value="BRL">Lazer</option>
            <option value="BRL">Trabalho</option>
            <option value="BRL">Transporte</option>
            <option value="BRL">Saúde</option>
          </select>
        </label>
      </form>
    );
  }
}

export default Form;
