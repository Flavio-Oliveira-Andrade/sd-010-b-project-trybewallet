import React, { Component } from 'react';
import { connect } from 'react-redux';
import { arrayOf, string } from 'prop-types';
import { addExpense, toEdit, editExpense } from '../actions';
import fetchCoins from '../services/apiCoins';

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
    this.state = initialState;
  }

  componentDidUpdate(prev) {
    const { status, editingData } = this.props;
    if (status && prev.status === false) this.editMode(editingData);
  }

  resetState(add) {
    const { id } = this.state;
    this.setState({ ...initialState, id: Number(id) + add });
  }

  editMode(editingData) {
    this.setState(editingData);
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
            this.setState({ value: target.value });
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
            this.setState({ description: value });
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
            this.setState({ currency: value });
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
            this.setState({ method: value });
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
            this.setState({ tag: value });
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

  async submit(status) {
    const {
      propAddExpense, propEditExpense, propToEdit } = this.props;
    if (status) {
      propEditExpense(this.state);
      propToEdit(false, {});
      this.resetState(0);
    } else {
      propAddExpense({ ...this.state, exchangeRates: await fetchCoins() });
      this.resetState(1);
    }
  }

  addOrEdit(status) {
    return (
      <button
        data-testid={ status ? 'edit-btn' : '' }
        type="button"
        onClick={ () => this.submit(status) }
      >
        {status ? 'Editar despesa' : 'Adicionar despesa'}
      </button>
    );
  }

  render() {
    const { currencies, status } = this.props;
    const { value, description, method, tag, currency } = this.state;
    return (
      <>
        { this.spendingValue(value) }
        { this.spendingDescription(description) }
        { this.spendingCurrency(currency, currencies) }
        { this.spendingMethod(method) }
        { this.spendingTag(tag) }
        { this.addOrEdit(status) }
      </>
    );
  }
}

const mapStateToProps = ({
  wallet: { currencies, expenses, edit: { status, editingData } = {} } }) => ({
  currencies, expenses, status, editingData });

const mapDispatchToProps = (dispatch) => ({
  propAddExpense: (data) => dispatch(addExpense(data)),
  propToEdit: (status, editingData) => dispatch(toEdit(status, editingData)),
  propEditExpense: (data) => dispatch(editExpense(data)),
});

Forms.propTypes = {
  currencies: arrayOf(string),
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(Forms);
