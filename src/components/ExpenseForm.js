import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  fetchExchangeRatesAddExpense as fetchExchangeRatesAddExpenseThunk,
} from '../actions';
import CurrenciesInitials from './CurrenciesInitials';

class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ...props.defaultValues,
    };

    this.saveExpenses = this.saveExpenses.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  saveExpenses(e) {
    e.preventDefault();
    const { fetchExchangeRatesAddExpense, expenses } = this.props;
    const obj = {
      id: expenses.length === 0 ? 0 : expenses[expenses.length - 1].id + 1,
      ...this.state,
    };
    fetchExchangeRatesAddExpense(obj);
  }

  handleChange({ target: { id, value } }) {
    this.setState({ [id]: value });
  }

  render() {
    const { currency, description, method, tag, value } = this.state;
    const { saveExpenses, handleChange } = this;
    return (
      <form onSubmit={ saveExpenses }>
        <label htmlFor="value">
          Valor:
          <input
            type="number"
            id="value"
            defaultValue={ value }
            onChange={ handleChange }
          />
        </label>
        <label htmlFor="description">
          Descrição:
          <input
            type="text"
            id="description"
            defaultValue={ description }
            onChange={ handleChange }
          />
        </label>
        <CurrenciesInitials handleChange={ handleChange } defaultValue={ currency } />
        <label htmlFor="method">
          Método de pagamento:
          <select id="method" onChange={ handleChange } defaultValue={ method }>
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag:
          <select id="tag" onChange={ handleChange } defaultValue={ tag }>
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>
        <button type="submit">Adicionar despesa</button>
      </form>

    );
  }
}
const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
  defaultValues: state.wallet.defaultValues,
  toModify: state.wallet.toModify,
});

const mapDispatchToProps = (dispatch) => ({
  fetchExchangeRatesAddExpense:
    (expense) => dispatch(fetchExchangeRatesAddExpenseThunk(expense)),
});

ExpenseForm.propTypes = {
  defaultValues: PropTypes.shape().isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
  fetchExchangeRatesAddExpense: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseForm);
