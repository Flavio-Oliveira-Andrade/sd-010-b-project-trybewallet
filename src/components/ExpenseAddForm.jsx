import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import actionStore from '../actions';
import SelectCurrencies from './SelectCurrencies';
import api from '../services/API';

class ExpenseAddForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      valueExpense: 0,
      descriptionExpense: '',
      currencies: '',
      payment: '',
      category: '',
      exchangeRates: {},
    };
  }

  Change({ target }) {
    const { state } = this;
    this.setState({
      ...state, [target.id]: target.value,
    });
  }

  Select({ target }) {
    const { state } = this;
    this.setState({
      ...state, [target.id]: target.options[target.selectedIndex].value,
    });
  }

  async fetchAPI(e, string) {
    e.preventDefault();
    const API = await api();
    this.setState({
      exchangeRates: API,
    });
    document.getElementById('formExpense').reset();
    const { state } = this;
    const { Expenses } = this.props;
    Expenses(state, string);
  }

  render() {
    const { currencies } = this.props;
    currencies.splice(1, 1);
    return (
      <form method="get" id="formExpense">
        <label htmlFor="valueExpense">
          Valor
          <input
            type="number"
            id="valueExpense"
            step="0.01"
            onChange={ (e) => this.Change(e) }
          />
        </label>
        <label htmlFor="descriptionExpense">
          Descrição
          <input type="text" id="descriptionExpense" onChange={ (e) => this.Change(e) } />
        </label>
        <SelectCurrencies currencies={ currencies } Select={ (e) => this.Select(e) } />
        <label htmlFor="payment">
          Método de pagamento
          <select id="payment" onChange={ (e) => this.Select(e) }>
            <option value="">-</option>
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="category">
          Tag
          <select id="category" onChange={ (e) => this.Select(e) }>
            <option value="">-</option>
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>
        <button
          type="submit"
          onClick={ (e) => { this.fetchAPI(e, 'Expenses'); } }
        >
          Adicionar despesa
        </button>
      </form>
    );
  }
}
ExpenseAddForm.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  Expenses: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  Expenses: (value, type) => dispatch(actionStore(value, type)),
});

export default connect(null, mapDispatchToProps)(ExpenseAddForm);
