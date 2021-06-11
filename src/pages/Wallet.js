import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import ExpenseForm from '../components/ExpenseForm';
import { addExpense, deleteExpense, editExpense, fetchApi } from '../actions/index';

class Wallet extends React.Component {
  constructor() {
    super();

    this.generateCurrencySelect = this.generateCurrencySelect.bind(this);
    this.handleChangeExpense = this.handleChangeExpense.bind(this);
    this.loadTotalWalletExpenses = this.loadTotalWalletExpenses.bind(this);
    this.populateTableExpenses = this.populateTableExpenses.bind(this);
    this.generateExpenseForm = this.generateExpenseForm.bind(this);

    this.state = {
      isEditing: false,
      expense: {
        value: '',
        description: '',
        currency: '',
        method: '',
        tag: '',
      },
    };
  }

  componentDidMount() {
    const { fetchCurrencies } = this.props;
    fetchCurrencies();
  }

  // Gerar options do select de moedas via props
  generateCurrencySelect() {
    const { currencies } = this.props;
    const arrays = Object.keys(currencies);

    return arrays.map(
      (currency) => <option key={ currency } value={ currency }>{ currency }</option>,
    );
  }

  // Coloca os dados da despesa no estado
  handleChangeExpense({ id, value }) {
    this.setState((oldState) => ({ expense: { ...oldState.expense, [id]: value } }));
  }

  // Carrega o valor total das despesas
  loadTotalWalletExpenses() {
    const { expenses } = this.props;
    let total = 0;

    expenses.forEach((expense) => {
      total += Number(expense.value) * Number(
        expense.exchangeRates[expense.currency].ask,
      );
    });

    return total;
  }

  // Popular a tabela de despesas
  populateTableExpenses() {
    const { expenses, dispatchDeleteExpense, dispatchEditExpense } = this.props;

    return expenses.map((expense) => (
      <tr key={ expense.id }>
        <td>{ expense.description }</td>
        <td>{ expense.tag }</td>
        <td>{ expense.method }</td>
        <td>{ expense.value }</td>
        <td>{ expense.exchangeRates[expense.currency].name.split('/')[0] }</td>
        <td>{ parseFloat(expense.exchangeRates[expense.currency].ask).toFixed(2) }</td>
        <td>
          { (expense.exchangeRates[expense.currency].ask * expense.value).toFixed(2) }
        </td>
        <td>Real</td>
        <td>
          <button
            data-testid="edit-btn"
            type="button"
            onClick={ () => dispatchEditExpense(expense.id) }
          >
            Editar
          </button>
          <button
            data-testid="delete-btn"
            type="button"
            onClick={ () => dispatchDeleteExpense(expense.id) }
          >
            Excluir
          </button>
        </td>
      </tr>));
  }

  generateExpenseForm() {
    const { isEditing } = this.state;
    const { expenseToEdit } = this.props;

    if (!isEditing) {
      return (<ExpenseForm
        generateCurrencySelect={ this.generateCurrencySelect }
        handleChangeExpense={ this.handleChangeExpense }
      />);
    }
    return (<ExpenseForm
      expenseToEdit={ expenseToEdit }
      generateCurrencySelect={ this.generateCurrencySelect }
      handleChangeExpense={ this.handleChangeExpense }
    />);
  }

  render() {
    const { expense } = this.state;
    const { email, dispatchAddExpense } = this.props;

    return (
      <>
        <header>
          <span data-testid="email-field">{`Email: ${email} `}</span>
          <span data-testid="total-field">
            { `Total: ${this.loadTotalWalletExpenses()} `}
          </span>
          <span data-testid="header-currency-field">BRL</span>
        </header>

        <main>
          { this.generateExpenseForm() }
        </main>
        <main>
          <table>
            <tr>
              <th>Descrição</th>
              <th>Tag</th>
              <th>Método de pagamento</th>
              <th>Valor</th>
              <th>Moeda</th>
              <th>Câmbio utilizado</th>
              <th>Valor convertido</th>
              <th>Moeda de conversão</th>
              <th>Editar/Excluir</th>
            </tr>
            { this.populateTableExpenses() }
          </table>
        </main>

        <footer>
          <button type="button" onClick={ () => dispatchAddExpense(expense) }>
            Adicionar Despesa
          </button>
        </footer>
      </>
    );
  }
}

const mapStateToProps = ({ user, wallet }) => ({
  email: user.email,
  expenses: wallet.expenses,
  currencies: wallet.currencies,
  loadedPage: wallet.currencies.length !== 0,
  expenseToEdit: wallet.expenseToEdit,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCurrencies: () => dispatch(fetchApi()),
  dispatchAddExpense: (expense) => dispatch(addExpense(expense)),
  dispatchDeleteExpense: (id) => dispatch(deleteExpense(id)),
  dispatchEditExpense: (id) => dispatch(editExpense(id)),
});

Wallet.propTypes = {
  email: PropTypes.string,
  loadedPage: PropTypes.bool,
  currencies: PropTypes.array,
  expenseToEdit: PropTypes.object,
  fetchCurrencies: PropTypes.array,
  expenses: PropTypes.array,
  dispatchAddExpense: PropTypes.func,
  dispatchDeleteExpense: PropTypes.func,
  dispatchEditExpense: PropTypes.func,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
