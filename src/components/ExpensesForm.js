import React from 'react';

class ExpensesForm extends React.Component {
  render() {
    return (
      <div>
        <form>
          <label htmlFor="value">
            <input
              id="value"
              type="text"
            />
            Valor
          </label>
          <label htmlFor="description">
            <input
              id="description"
              type="text"
            />
            Descrição
          </label>
          <label htmlFor="currency">
            <select id="currency">
              <option value="moeda">Moeda</option>
            </select>
            Moeda
          </label>
          <label htmlFor="payment-option">
            <select id="payment-option">
              <option>Dinheiro</option>
              <option>Cartão de crédito</option>
              <option>Cartão de débito</option>
            </select>
            Método de pagamento
          </label>
          <label htmlFor="option">
            <select id="option">
              <option>Alimentação</option>
              <option>Lazer</option>
              <option>Trabalho</option>
              <option>Transporte</option>
              <option>Saúde</option>
            </select>
            Tag
          </label>
          <button type="submit">Adicionar Despesas</button>
        </form>
      </div>
    );
  }
}

export default ExpensesForm;
