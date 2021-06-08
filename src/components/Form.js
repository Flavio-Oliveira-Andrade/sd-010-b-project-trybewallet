import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="amount">
          Valor
          <input name="amount" type="text" />
        </label>
        <label htmlFor="description">
          Descrição
          <input name="description" type="text" />
        </label>
        <label htmlFor="currencie">
          Moeda
          {/* <select name="currencie" /> */}
        </label>
        <label htmlFor="payment-method">
          Método de pagamento
          <select name="payment-method">
            <option name="payment-method">Dinheiro</option>
            <option name="payment-method">Cartão de crédito</option>
            <option name="payment-method">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="category">
          Tag
          <select name="category">
            <option name="category">Alimentação</option>
            <option name="category">Lazer</option>
            <option name="category">Trabalho</option>
            <option name="category">Transporte</option>
            <option name="category">Saúde</option>
          </select>
        </label>
      </form>
    );
  }
}

export default Form;
