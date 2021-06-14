import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import InputElement from './InputElement';
import SelectElement from './SelectElement';

import { newExpense } from '../actions';

const PAYMENT_METHOD = [
  'Dinheiro', 'Cartão de crédito', 'Cartão de débito',
];

const TAG = [
  'Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde',
];

class ExpenseForm extends Component {
  constructor(props) {
    super(props);
    const { expenses } = this.props;
    const EXPENSE_INITIAL_STATE = {
      id: expenses.length,
      value: '',
      description: '',
      currency: 'USD',
      method: '',
      tag: '',
      exchangeRates: {},
    };

    this.state = EXPENSE_INITIAL_STATE;

    this.handleChange = this.handleChange.bind(this);
    this.callAction = this.callAction.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  async callAction() {
    const { addNewExpense, expenses, fetchAPI } = this.props;
    const getCurrencies = await fetchAPI();
    this.setState({ exchangeRates: getCurrencies, id: expenses.length });
    addNewExpense(this.state);
  }

  render() {
    const { value, description, currency, method, tag } = this.state;
    const { currencyOptions } = this.props;

    return (
      <form>
        <InputElement
          label="Valor"
          name="value"
          value={ value }
          handleChange={ this.handleChange }
        />

        <InputElement
          label="Descrição"
          name="description"
          value={ description }
          handleChange={ this.handleChange }
        />

        <SelectElement
          label="Moeda"
          name="currency"
          value={ currency }
          options={ currencyOptions }
          handleChange={ this.handleChange }
        />

        <SelectElement
          label="Método de Pagamento"
          name="method"
          value={ method }
          options={ PAYMENT_METHOD }
          handleChange={ this.handleChange }
        />

        <SelectElement
          label="Tag"
          name="tag"
          value={ tag }
          options={ TAG }
          handleChange={ this.handleChange }
        />

        <button type="button" onClick={ this.callAction }>Adicionar Despesa</button>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  addNewExpense: (state) => dispatch(newExpense(state)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseForm);

ExpenseForm.propTypes = {
  currencyOptions: PropTypes.arrayOf(PropTypes.string).isRequired,
  expenses: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  addNewExpense: PropTypes.func.isRequired,
  fetchAPI: PropTypes.func.isRequired,
};
