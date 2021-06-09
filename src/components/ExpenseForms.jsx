import React, { Component } from 'react';
import PropTypes from 'prop-types';

const tags = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
const paymentMethod = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];

class ExpenseForms extends Component {
  render() {
    const { currencies } = this.props;
    return (
      <form>
        <label htmlFor="expense">
          Valor:
          <input type="text" name="expense" id="expense" />
        </label>

        <label htmlFor="description">
          Descrição:
          <input type="text" name="description" id="description" />
        </label>

        <label htmlFor="currency">
          Moeda:
          <select name="currency" id="currency">
            {currencies.map((currency, idx) => <option key={ idx }>{currency}</option>)}

          </select>
        </label>

        <label htmlFor="currency">
          Método de pagamento:
          <select name="currency" id="currency">
            {paymentMethod.map((method, idx) => <option key={ idx }>{method}</option>)}
          </select>
        </label>

        <label htmlFor="currency">
          Tag:
          <select name="currency" id="currency">
            {tags.map((tag, idx) => <option key={ idx }>{tag}</option>)}
          </select>
        </label>

        <button type="submit">Adicionar Despesa</button>
      </form>
    );
  }
}

ExpenseForms.propTypes = {
  currencies: PropTypes.arrayOf,
}.isRequired;

export default ExpenseForms;
