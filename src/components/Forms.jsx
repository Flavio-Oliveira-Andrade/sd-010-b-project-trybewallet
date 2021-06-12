import React, { Component } from 'react';
import { connect } from 'react-redux';
import { arrayOf, string } from 'prop-types';
import { expenseData, toEdit, editExpense } from '../actions';
import '../pages/CSS/wallet.css';

const initialState = {
  id: 0,
  value: 0,
  description: '',
  method: '',
  tag: '',
  currency: 'USD',
  exchangeRates: {},
};
class Forms extends Component {
  constructor(props) {
    super(props);
    this.resetState = this.resetState.bind(this);
    this.spendingValue = this.spendingValue.bind(this);
    this.spendingDescription = this.spendingDescription.bind(this);
    this.spendingCurrency = this.spendingCurrency.bind(this);
    this.spendingMethod = this.spendingMethod.bind(this);
    this.spendingTag = this.spendingTag.bind(this);
    this.submitButton = this.submit.bind(this);
    this.editMode = this.editMode.bind(this);
    this.addOrEdit = this.addOrEdit.bind(this);
    this.state = { expense: initialState, prevId: 0 };
  }

  componentDidUpdate(prev) {
    const { editing, editData } = this.props;
    if (editing && prev.editing === false) this.editMode(editData);
  }

  resetState(add) {
    this.setState((prev) => ({ prevId: prev.prevId + add,
      expense: { ...initialState, id: prev.prevId + add } }));
  }

  editMode(expense) {
    this.setState({ expense });
  }

  spendingValue(value) {
    return (
      <label htmlFor="value" data-testid="value-input">
        Valor
        <input
          id="value"
          value={ value }
          type="number"
          step="1.00"
          min="0"
          onChange={ ({ target }) => {
            this.setState((prev) => ({
              expense: { ...prev.expense, value: target.value } }));
          } }
        />
      </label>
    );
  }

  spendingDescription(description) {
    return (
      <label htmlFor="description" data-testid="description-input">
        Descrição
        <input
          id="description"
          type="text"
          value={ description }
          onChange={ ({ target: { value } }) => {
            this.setState((prev) => ({
              expense: { ...prev.expense, description: value } }));
          } }
        />
      </label>
    );
  }

  spendingCurrency(currency, currencies) {
    return (
      <label htmlFor="currency" data-testid="currency-input">
        Moeda
        <select
          id="currency"
          value={ currency }
          onChange={ ({ target: { value } }) => {
            this.setState((prev) => ({
              expense: { ...prev.expense, currency: value } }));
          } }
        >
          {currencies.map((curr) => (
            <option
              data-testid={ curr }
              key={ curr }
              value={ curr }
            >
              {curr}
            </option>
          ))}
        </select>
      </label>
    );
  }

  spendingMethod(method) {
    return (
      <label htmlFor="method" data-testid="method-input">
        Método de pagamento
        <select
          id="method"
          value={ method }
          onChange={ ({ target: { value } }) => {
            this.setState((prev) => ({
              expense: { ...prev.expense, method: value } }));
          } }
        >
          <option defaultValue hidden>Escolha</option>
          <option value="Dinheiro">Dinheiro</option>
          <option value="Cartão de crédito">Cartão de crédito</option>
          <option value="Cartão de débito">Cartão de débito</option>
        </select>
      </label>
    );
  }

  spendingTag(tag) {
    return (
      <label htmlFor="tag" data-testid="tag-input">
        Tag
        <select
          id="tag"
          value={ tag }
          onChange={ ({ target: { value } }) => {
            this.setState((prev) => ({
              expense: { ...prev.expense, tag: value } }));
          } }
        >
          <option defaultValue hidden>Escolha</option>
          <option value="Alimentação">Alimentação</option>
          <option value="Lazer">Lazer</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Transporte">Transporte</option>
          <option value="Saúde">Saúde</option>
        </select>
      </label>
    );
  }

  submit(editing) {
    const { expense } = this.state;
    const { propExpenseData, propEditExpense, propToEdit } = this.props;
    if (editing) {
      propEditExpense(expense);
      propToEdit(false, {});
      this.resetState(0);
    } else {
      propExpenseData(expense);
      this.resetState(1);
    }
  }

  addOrEdit(editing) {
    return (
      <button
        data-testid={ editing ? 'edit-btn' : '' }
        type="button"
        className={ editing ? 'YButton' : 'GButton' }
        onClick={ () => this.submit(editing) }
      >
        {editing ? 'Editar despesa' : 'Adicionar despesa'}
      </button>
    );
  }

  render() {
    const { currencies, editing } = this.props;
    const { expense: { value, description, method, tag, currency } } = this.state;
    return (
      <form className={ editing ? 'edit-table' : 'form-table' }>
        { this.spendingValue(value) }
        { this.spendingDescription(description) }
        { this.spendingCurrency(currency, currencies) }
        { this.spendingMethod(method) }
        { this.spendingTag(tag) }
        { this.addOrEdit(editing) }
      </form>
    );
  }
}

const mapStateToProps = ({
  wallet: { currencies, expenses, edit: { editing, editData } = {} } }) => ({
  currencies, expenses, editing, editData });

const mapDispatchToProps = (dispatch) => ({
  propExpenseData: (data) => dispatch(expenseData(data)),
  propToEdit: (editing, editData) => dispatch(toEdit(editing, editData)),
  propEditExpense: (data) => dispatch(editExpense(data)),
});

Forms.propTypes = {
  currencies: arrayOf(string),
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(Forms);
