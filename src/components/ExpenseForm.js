import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { expenseFormAction, expensesAction } from '../actions';

class ExpenseForm extends React.Component {
  async setExp() {
    const { expenseForm, changeExpenseForm } = this.props;
    const results = await fetch('https://economia.awesomeapi.com.br/json/all');
    const data = await results.json();
    const newExpenseForms = {
      ...expenseForm,
      exchangeRates: data,
    };
    changeExpenseForm(newExpenseForms);
    this.helper();
  }

  helper() {
    const { expenseForm, changeExpenses } = this.props;
    const ID = expenseForm.id + 1;
    const newExpenseForm = {
      ...expenseForm,
    };
    changeExpenses(newExpenseForm, ID);
  }

  async handleChange({ target: { id, value } }) {
    const { expenseForm, changeExpenseForm } = this.props;
    const newExpenseForm = {
      ...expenseForm,
      [id]: value,
    };
    changeExpenseForm(newExpenseForm);
  }

  render() {
    const { currencies } = this.props;
    return (
      <form>
        <label htmlFor="value">
          Valor:
          <input
            id="value"
            onChange={ (e) => this.handleChange(e) }
            type="text"
          />
        </label>
        <label htmlFor="description">
          Descrição:
          <input
            id="description"
            onChange={ (e) => this.handleChange(e) }
            type="text"
          />
        </label>
        <label htmlFor="currency">
          Moeda:
          <select id="currency" onChange={ (e) => this.handleChange(e) }>
            {currencies.map((currencie) => (
              <option key={ currencie } value={ currencie }>{currencie}</option>
            ))}
          </select>
        </label>
        <label htmlFor="method">
          Método de pagamento:
          <select id="method" onChange={ (e) => this.handleChange(e) }>
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag:
          <select id="tag" onChange={ (e) => this.handleChange(e) }>
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>
        <button onClick={ () => this.setExp() } type="button">Adicionar despesa</button>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  expenseForm: state.wallet.expenseForm,
});

const mapDispatchToProps = (dispatch) => ({
  changeExpenseForm: (expenseForm) => dispatch(expenseFormAction(expenseForm)),
  changeExpenses: (expenses, ID) => dispatch(expensesAction(expenses, ID)),
});

ExpenseForm.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  expenseForm: PropTypes.objectOf(PropTypes.any).isRequired,
  changeExpenseForm: PropTypes.func.isRequired,
  changeExpenses: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseForm);
