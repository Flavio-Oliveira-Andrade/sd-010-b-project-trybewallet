import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { methodsArray, tagArray } from '../services/optionsArrays';
import { dispatchExpense } from '../actions/index';

const methodOptions = methodsArray.map((paymentMethod, index) => (
  <option key={ index } value={ paymentMethod }>
    {paymentMethod}
  </option>));

const tagOptions = tagArray.map((tag, index) => (
  <option key={ index } value={ tag }>
    {tag}
  </option>));

class WalletForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '0',
      currency: 'USD',
      description: '',
      method: 'Cartão de crédito',
      tag: 'Alimentação',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { target: { id: key, value } } = event;
    this.setState({
      [key]: value,
    });
  }

  handleSubmit() {

  }

  render() {
    const { currencies, handleDispatchExpense } = this.props;

    const currencyOptions = currencies.map((currencyOption, index) => (
      <option key={ index } value={ currencyOption }>
        {currencyOption}
      </option>));

    return (
      <form>
        <label htmlFor="value">
          Valor
          <input
            type="number"
            id="value"
            placeholder="0"
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="currency">
          Moeda
          <select id="currency" onChange={ this.handleChange }>
            { currencies ? currencyOptions : null }
          </select>
        </label>
        <label htmlFor="description">
          Descrição
          <input type="text" id="description" onChange={ this.handleChange } />
        </label>
        <label htmlFor="method">
          Método de Pagamento
          <select id="method" onChange={ this.handleChange }>
            { methodOptions }
          </select>
        </label>
        <label htmlFor="tag">
          Tag
          <select id="tag" onChange={ this.handleChange }>
            { tagOptions }
          </select>
        </label>
        <button
          type="button"
          onClick={ () => handleDispatchExpense(this.state) }
        >
          Adicionar despesa
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  handleDispatchExpense: (expenseInfo) => dispatch(dispatchExpense(expenseInfo)),
});

WalletForm.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleDispatchExpense: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(WalletForm);
