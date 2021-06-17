import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import InputElement from './InputElement';
import SelectElement from './SelectElement';
import { addExpense, updateExpense } from '../actions';

const tags = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
const paymentMethod = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];

class ExpenseForms extends Component {
  constructor(props) {
    super(props);
    const { expenses } = props;
    this.state = {
      id: expenses.length,
      value: '',
      description: '',
      currency: 'CAD',
      method: 'Dinheiro',
      tag: 'Alimentação',
      exchangeRates: {},

    };
    this.createExpense = this.createExpense.bind(this);
    this.updateExpense = this.updateExpense.bind(this);
    this.gotUpdated = this.gotUpdated.bind(this);
  }

  async createExpense() {
    const { addNewExpense, expenses, fetchAPI } = this.props;
    const getCurrencies = await fetchAPI();
    this.setState({ exchangeRates: getCurrencies, id: expenses.length });
    addNewExpense(this.state);
  }

  gotUpdated() {
    const { updateCurrExpense } = this.props;
    updateCurrExpense(this.state);
  }

  updateExpense() {
    const { expenseToEdit, renderAddBtn } = this.props;
    const { exchangeRates, id } = expenseToEdit;
    console.log(id);
    this.setState({ exchangeRates, id }, this.gotUpdated);
    renderAddBtn();
  }

  render() {
    const { currencies, expenseToEdit, isEditMode } = this.props;
    const { value, description, currency, method, tag } = expenseToEdit;
    return (
      <form className="expense-input">
        <InputElement
          type="text"
          name="value"
          label="Valor"
          defaultValue={ value }
          dataTestid="value-input"
          onChange={ (e) => this.setState({ value: e.target.value }) }
        />
        <InputElement
          type="text"
          name="description"
          label="Descrição"
          defaultValue={ description }
          dataTestid="description-input"
          onChange={ (e) => this.setState({ description: e.target.value }) }
        />
        <SelectElement
          name="currency"
          label="Moeda"
          options={ currencies }
          defaultValue={ currency }
          dataTestid="currency-input"
          onChange={ (e) => this.setState({ currency: e.target.value }) }
        />
        <SelectElement
          name="method"
          label="Método de pagamento"
          options={ paymentMethod }
          defaultValue={ method }
          dataTestid="method-input"
          onChange={ (e) => this.setState({ method: e.target.value }) }
        />
        <SelectElement
          name="tag"
          label="Tag"
          options={ tags }
          defaultValue={ tag }
          dataTestid="tag-input"
          onChange={ (e) => this.setState({ tag: e.target.value }) }
        />
        {!isEditMode && <button type="button" onClick={ this.createExpense }>Adicionar Despesa</button>}
        {isEditMode && <button type="button" onClick={ this.updateExpense }>Editar Despesa</button>}
      </form>
    );
  }
}

const mapDispatchToProps = (dispach) => ({
  addNewExpense: (state) => dispach(addExpense(state)),
  updateCurrExpense: (state) => dispach(updateExpense(state)),
});

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

ExpenseForms.propTypes = {
  currencies: PropTypes.arrayOf,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseForms);
