import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addExpenseThunk, editExpenseAction, fetchCurrenciesAction } from '../actions';
import TableOfExpenses from '../components/TableofExpenses';
import renderHeadingInputs from '../components/WalletHeading';

class Wallet extends React.Component {
  constructor() {
    super();
    this.fetchCurrencies = this.fetchCurrencies.bind(this);
    this.getCurrencies = this.getCurrencies.bind(this);
    this.onChangeHandle = this.onChangeHandle.bind(this);
    this.onClickHandle = this.onClickHandle.bind(this);
    this.calculateTotal = this.calculateTotal.bind(this);
    this.toEditMenu = this.toEditMenu.bind(this);
    this.formsValues = this.formsValues.bind(this);
    this.renderSelectInputs = this.renderSelectInputs.bind(this);
    this.state = {
      expense: {
        id: 0,
        value: '',
        description: '',
        currency: 'USD',
        method: 'Dinheiro',
        tag: 'Alimentação',
      },
      edit: false,
      editExpense: {},
    };
  }

  componentDidMount() {
    this.fetchCurrencies();
  }

  onChangeHandle({ target }) {
    const { edit } = this.state;
    if (edit) {
      return this.setState((prev) => ({
        editExpense: {
          ...prev.editExpense,
          [target.id]: target.value,
        },
      }));
    }
    this.setState((prev) => ({
      expense: {
        ...prev.expense,
        [target.id]: target.value,
      },
    }));
  }

  async onClickHandle() {
    const { edit, editExpense, expense } = this.state;
    const { addExpense, expenses, editExpenseActionProps } = this.props;
    if (edit) {
      const newState = expenses.map((result) => {
        if (result.id === parseInt(editExpense.id, 10)) {
          return editExpense;
        }
        return result;
      });
      this.setState((prev) => ({
        expense: {
          ...prev.expense,
          value: '',
          description: '',
          currency: 'USD',
          method: 'Dinheiro',
          tag: 'Alimentação',
        },
        edit: false,
      }));
      return editExpenseActionProps(newState);
    }
    const countExpenses = 1;
    await this.setState((prev) => ({
      expense: {
        ...prev.expense,
        id: prev.expense.id + countExpenses,
      },
      edit: false,
    }));
    return addExpense(expense);
  }

  getCurrencies() {
    const { currencies } = this.props;
    return currencies.map((currency) => {
      if (currency !== 'USDT') {
        return <option key={ currency }>{ currency }</option>;
      }
      return null;
    });
  }

  calculateTotal() {
    const { expenses } = this.props;
    if (expenses || expenses.length > 0) {
      const total = expenses.reduce((acc, { value, exchangeRates, currency }) => {
        acc += (parseFloat(value.replace(',', '.') * exchangeRates[currency].ask));
        return acc;
      }, 0);
      return total.toFixed(2);
    }
    return 0;
  }

  fetchCurrencies() {
    const { fetchedCurrencies } = this.props;
    fetch('https://economia.awesomeapi.com.br/json/all')
      .then((response) => response.json())
      .then((response) => {
        const currencies = Object.keys(response);
        fetchedCurrencies(currencies);
      });
  }

  toEditMenu(expense) {
    this.setState({
      edit: true,
      editExpense: expense,
    });
  }

  formsValues(name) {
    const { edit, editExpense, expense } = this.state;
    if (edit) {
      return editExpense[name];
    }
    return expense[name];
  }

  renderWalletForms(name, value) {
    return (
      <label htmlFor={ name }>
        { value }
        <input
          type="text"
          id={ name }
          className={ `input-${name}` }
          name={ name }
          onChange={ (e) => this.onChangeHandle(e) }
          value={ this.formsValues(name) }
          data-testid={ `${name}-input` }
        />
      </label>
    );
  }

  renderSelectInputs() {
    return (
      <span>
        <label htmlFor="currency">
          Moeda
          <select
            id="currency"
            onChange={ (e) => this.onChangeHandle(e) }
            value={ this.formsValues('currency') }
            data-testid="currency-input"
          >
            { this.getCurrencies() }
          </select>
        </label>
        <label htmlFor="method">
          Método de Pagamento
          <select
            id="method"
            onChange={ (e) => this.onChangeHandle(e) }
            value={ this.formsValues('method') }
            data-testid="method-input"
          >
            <option name="Dinheiro">Dinheiro</option>
            <option name="Cartão de crédito">Cartão de crédito</option>
            <option name="Cartão de débito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag
          <select
            id="tag"
            onChange={ (e) => this.onChangeHandle(e) }
            value={ this.formsValues('tag') }
            data-testid="tag-input"
          >
            <option name="Alimentação">Alimentação</option>
            <option name="Lazer">Lazer</option>
            <option name="Trabalho">Trabalho</option>
            <option name="Transporte">Transporte</option>
            <option name="Saúde">Saúde</option>
          </select>
        </label>
      </span>
    );
  }

  render() {
    const { edit } = this.state;
    const { email } = this.props;
    const total = this.calculateTotal();
    return (
      <div>
        <header className="wallet-header">
          { renderHeadingInputs('Email', email, 'email-field')}
          { renderHeadingInputs('Total', `R$ ${total}`, 'total-field')}
          { renderHeadingInputs('Câmbio', 'BRL', 'header-currency-field')}
        </header>
        <h1 className="wallet-title">TrybeWallet</h1>
        <form className="wallet-form">
          { this.renderWalletForms('value', 'Valor') }
          { this.renderWalletForms('description', 'Descrição') }
          { this.renderSelectInputs() }
          <button
            type="button"
            onClick={ this.onClickHandle }
          >
            {edit ? 'Editar despesa' : 'Adicionar despesa' }
          </button>
        </form>
        <TableOfExpenses edit={ this.toEditMenu } />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
  currencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  fetchedCurrencies: (payload) => dispatch(fetchCurrenciesAction(payload)),
  addExpense: (payload) => dispatch(addExpenseThunk(payload)),
  editExpenseActionProps: (payload) => dispatch(editExpenseAction(payload)),
});

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
  addExpense: PropTypes.func.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
  editExpenseActionProps: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  fetchedCurrencies: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
