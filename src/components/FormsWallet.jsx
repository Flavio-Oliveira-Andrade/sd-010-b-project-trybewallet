import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchCurrencies, addExpenses, sumExpenses, shownExpense } from '../actions';

const initialState = {
  id: '',
  value: '',
  description: '',
  currency: undefined,
  method: '',
  tag: '',
  currencies: {},
  showBtnEdit: false,
};
class FormsWallet extends Component {
  constructor(props) {
    super(props);

    this.state = initialState;
    this.handleChange = this.handleChange.bind(this);
    this.handleClickAdd = this.handleClickAdd.bind(this);
    this.showEditingOnScreen = this.showEditingOnScreen.bind(this);
    this.handleInputs = this.handleInputs.bind(this);
    this.handleSelects = this.handleSelects.bind(this);
  }

  componentDidMount() {
    const { fetchCoins } = this.props;
    fetchCoins();
  }

  componentDidUpdate() {
    const { editedExpense } = this.props;
    if (editedExpense) {
      this.showEditingOnScreen();
    }
  }

  handleChange({ target: { value, name } }) {
    this.setState({
      [name]: value,
    });
  }

  async handleClickAdd() {
    const { value, description, currency = 'USD', method, tag } = this.state;

    const {
      currencies, expenses, fetchCoins, addToExpenses, addSumExpenses } = this.props;

    await fetchCoins();
    const expense = {
      id: expenses.length,
      value,
      description,
      currency,
      method,
      tag,
      exchangeRates: currencies,
    };
    addToExpenses(expense);
    addSumExpenses();

    this.setState(initialState);
  }

  handleClickEdit() {
    const { id, value, description, currency, method, tag, currencies } = this.state;
    const { addToExpenses, addSumExpenses } = this.props;
    const expense = {
      id,
      value,
      description,
      currency,
      method,
      tag,
      exchangeRates: currencies,
    };
    addToExpenses(expense);
    addSumExpenses();
  }

  handleInputs(labelName, inputName, inputValue) {
    return (
      <label htmlFor={ inputName }>
        { labelName }
        <input
          type="text"
          name={ inputName }
          id={ inputName }
          value={ inputValue }
          data-testid={ `${inputName}-input` }
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  handleSelects(labelName, selectName, selectValue, selectItems) {
    if (labelName === 'Moeda:') {
      const listCurrency = Object.keys(selectItems); // https://qastack.com.br/programming/5072136/javascript-filter-for-objects // Aula : Object 24/03/2021
      return (
        <label htmlFor={ selectName }>
          { labelName }
          <select
            name={ selectName }
            id={ selectName }
            value={ selectValue }
            data-testid={ `${selectName}-input` }
            onChange={ this.handleChange }
          >
            {listCurrency.filter((coin) => coin !== 'USDT')
              .map((currency) => (
                <option key={ currency }>{ currency }</option>))}
          </select>
        </label>
      );
    }
    return (
      <label htmlFor={ selectName }>
        { labelName }
        <select
          name={ selectName }
          id={ selectName }
          value={ selectValue }
          data-testid={ `${selectName}-input` }
          onChange={ this.handleChange }
        >
          <option>Selecione</option>
          {selectItems
            .map((currency) => (
              <option key={ currency }>{ currency }</option>))}
        </select>
      </label>
    );
  }

  showEditingOnScreen() {
    const { editingExpense: { id, value, method, tag, description, exchangeRates },
      handleShownExpense } = this.props;
    this.setState({
      id,
      value,
      method,
      tag,
      description,
      showBtnEdit: true,
      currencies: exchangeRates,
    });
    handleShownExpense();
  }

  render() {
    const { value, description, method, tag, showBtnEdit } = this.state;
    const { currencies } = this.props;
    const methods = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
    const tags = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
    return (
      <>
        {this.handleInputs('Valor:', 'value', value)}
        {this.handleSelects('Moeda:', 'currency', undefined, currencies)}
        {this.handleSelects('Método de pagamento:', 'method', method, methods)}
        {this.handleSelects('Tag:', 'tag', tag, tags)}
        {this.handleInputs('Descrição:', 'description', description)}
        <button
          type="button"
          onClick={ this.handleClickAdd }
        >
          {(!showBtnEdit) ? 'Adicionar despesa' : 'Editar despesa'}
        </button>
      </>
    );
  }
}

FormsWallet.propTypes = {
  fetchCoins: PropTypes.func.isRequired,
  addToExpenses: PropTypes.func.isRequired,
  addSumExpenses: PropTypes.func.isRequired,
  handleShownExpense: PropTypes.func.isRequired,
  editedExpense: PropTypes.bool.isRequired,
  currencies: PropTypes.objectOf(Object).isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
  editingExpense: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = ({
  wallet: { currencies, expenses, editingExpense, editedExpense } }) => ({
  currencies,
  expenses,
  editingExpense,
  editedExpense,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCoins: () => dispatch(
    fetchCurrencies(),
  ),
  addToExpenses: (expenses) => dispatch(
    addExpenses(expenses),
  ),
  addSumExpenses: () => dispatch(
    sumExpenses(),
  ),
  handleShownExpense: () => dispatch(
    shownExpense(),
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(FormsWallet);
