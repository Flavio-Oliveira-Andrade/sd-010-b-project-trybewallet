import React from 'react';

class ExpenseForm extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="value">
          Valor:
          <input
            id="value"
            name="value"
            type="text"
          />
        </label>
        <label htmlFor="description">
          Descrição:
          <input
            id="description"
            name="description"
            type="text"
          />
        </label>
        <label htmlFor="currency">
          Moeda:
          <select name="currency" id="currency">
            <option value="ok">ok</option>
          </select>
        </label>
        <label htmlFor="payment">
          Método de pagamento:
          <select name="payment" id="payment">
            <option value="cash">Dinheiro</option>
            <option value="credit">Cartão de crédito</option>
            <option value="debt">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="category">
          Tag:
          <select name="category" id="category">
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

export default ExpenseForm;
