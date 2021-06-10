import React, { Component } from 'react';

class ExpenseForm extends Component {
  render() {
    const { generateCurrencySelect, handleChangeExpense } = this.props;
    return (
      <form>
      <label>
        Valor:
        <input id="value" type="text" onChange={ ({ target }) => handleChangeExpense(target) } />
      </label>
      <label>
        Descrição:
        <input id="description" type="text" onChange={ ({ target }) => handleChangeExpense(target) } />
      </label>
      <label>
        Moeda:
        <select id="currency" onChange={ ({ target }) => handleChangeExpense(target) }>
          { generateCurrencySelect() }
        </select>
      </label>
      <label>
        Método de Pagamento:
        <select id="method" onChange={ ({ target }) => handleChangeExpense(target) }>
          <option value="Dinheiro">Dinheiro</option>
          <option value="Cartão de crédito">Cartão de crédito</option>
          <option value="Cartão de débito">Cartão de débito</option>
        </select>
      </label>
      <label>
        Tag:
        <select id="tag" onChange={ ({ target }) => handleChangeExpense(target) }>
          <option value="Alimentação">Alimentação</option>
          <option value="Lazer">Lazer</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Transporte">Transporte</option>
          <option value="Saúde">Saúde</option>
        </select>
      </label>
    </form>
    );
  };
};

export default ExpenseForm;
