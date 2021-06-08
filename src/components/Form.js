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
          <select name="currencie" />
        </label>
        <label htmlFor="payment-method">
          Método de pagamento
          <select name="payment-method">Dinheiro</select>
          <select name="payment-method">Cartão de crédito</select>
          <select name="payment-method">Cartão de débito</select>
        </label>
        <label htmlFor="category">
          Tag
          <select name="category">Alimentação</select>
          <select name="category">Lazer</select>
          <select name="category">Trabalho</select>
          <select name="category">Transporte</select>
          <select name="category">Saúde</select>
        </label>
      </form>
    );
  }
}

export default Form;
