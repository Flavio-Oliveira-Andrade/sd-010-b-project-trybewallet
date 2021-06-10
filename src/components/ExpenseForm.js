import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ExpenseForm extends Component {
  render() {
    const { expenseToEdit, generateCurrencySelect, handleChangeExpense } = this.props;

    return (
      <form>
        <label htmlFor="value">
          Valor:
          <input
            id="value"
            type="text"
            value={ expenseToEdit }
            onChange={ ({ target }) => handleChangeExpense(target) }
          />
        </label>
        <label htmlFor="description">
          Descrição:
          <input
            id="description"
            type="text"
            onChange={ ({ target }) => handleChangeExpense(target) }
          />
        </label>
        <label htmlFor="currency">
          Moeda:
          <select id="currency" onChange={ ({ target }) => handleChangeExpense(target) }>
            { generateCurrencySelect() }
          </select>
        </label>
        <label htmlFor="method">
          Método de Pagamento:
          <select id="method" onChange={ ({ target }) => handleChangeExpense(target) }>
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
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
  }
}

ExpenseForm.propTypes = {
  expenseToEdit: PropTypes.object,
  generateCurrencySelect: PropTypes.func,
  handleChangeExpense: PropTypes.func,
}.isRequired;

export default ExpenseForm;
