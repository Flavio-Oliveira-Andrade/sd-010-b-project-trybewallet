import PropTypes from 'prop-types';
import React from 'react';

class ExpenseAddForm extends React.Component {
  render() {
    const { currencies } = this.props;
    currencies.splice(1, 1);
    return (
      <form method="get">
        <label htmlFor="valueExpense">
          Valor
          <input type="text" id="valueExpense" />
        </label>
        <label htmlFor="descriptionExpense">
          Descrição
          <input type="text" id="descriptionExpense" />
        </label>
        <label htmlFor="currencies">
          Moeda
          <select id="currencies">
            {currencies.map((moeda) => (
              <option value={ moeda } key={ moeda }>
                {' '}
                { moeda }
                {' '}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="payment">
          Método de pagamento
          <select id="payment">
            <option value="">Dinheiro</option>
            <option value="">Cartão de crédito</option>
            <option value="">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="category">
          Tag
          <select id="category">
            <option value="">Alimentação</option>
            <option value="">Lazer</option>
            <option value="">Trabalho</option>
            <option value="">Transporte</option>
            <option value="">Saúde</option>
          </select>
        </label>
      </form>
    );
  }
}

ExpenseAddForm.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ExpenseAddForm;
