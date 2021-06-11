import React from 'react';

class ExpenseForm extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="valor">
          Valor
          <input name="valor" type="number" />
        </label>
        <label htmlFor="descrição">
          Descrição
          <input name="descrição" type="text" />
        </label>
        <label htmlFor="moedas">
          Moeda
          <select name="moedas">
            <option value="#">#</option>
          </select>
        </label>
        <label htmlFor="metodo-pag">
          Método de pagamento
          <select name="metodo-pag">
            <option value="dinheiro">Dinheiro</option>
            <option value="credito">Cartão de crédito</option>
            <option value="debito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag
          <select name="tag">
            <option value="dinheiro">Alimentação</option>
            <option value="credito">Lazer</option>
            <option value="debito">Trabalho</option>
            <option value="debito">Transporte</option>
            <option value="debito">Saúde</option>
          </select>
        </label>
      </form>
    );
  }
}

export default ExpenseForm;
