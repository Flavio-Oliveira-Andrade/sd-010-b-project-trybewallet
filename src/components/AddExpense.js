import React from 'react';

import '../styles/addExpense.css';

class AddExpense extends React.Component {
  render() {
    return (
      <form className="expense-form">
        <label htmlFor="valor">
          <span>Valor: </span>
          <input type="number" name="valor" id="valor" />
        </label>
        <label htmlFor="descricao">
          <span>Descrição: </span>
          <input type="text" name="descricao" id="descricao" />
        </label>
        <label htmlFor="moeda">
          <span>Moeda: </span>
          <select name="moeda" id="moeda">
            {}
          </select>
        </label>
        <label htmlFor="payment-metod">
          <span>Método de pagamento: </span>
          <select name="payment-metod" id="payment-metod">
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          <span>Tag: </span>
          <select className="tag" id="tag">
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

export default AddExpense;
