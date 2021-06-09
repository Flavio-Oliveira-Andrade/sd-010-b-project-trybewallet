import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import fetchAPI from '../services/fetchAPI';
import { expenseSubmit, thunker, confirmEdit } from '../actions/index';

class FormExpenses extends React.Component {
  constructor() {
    super();
    this.state = {
      isFetched: false,
      coins: [],
    };
    this.doFetch = this.doFetch.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.inputDespesaDescricao = this.inputDespesaDescricao.bind(this);
    this.renderCurrenciesAndMethod = this.renderCurrenciesAndMethod.bind(this);
    this.handleEditMode = this.handleEditMode.bind(this);
    this.resetState = this.resetState.bind(this);
    this.retrieveEditExpenseState = this.retrieveEditExpenseState.bind(this);
  }

  componentDidMount() {
    this.doFetch();
  }

  componentDidUpdate(prevProps) {
    const { editMode, editExpense } = this.props;
    if (editMode && prevProps.editExpense !== editExpense) {
      this.retrieveEditExpenseState();
    }
  }

  retrieveEditExpenseState() {
    const { editExpense } = this.props;
    this.setState((oldState) => ({
      ...oldState,
      shouldLoop: false,
      expense: {
        ...editExpense,
      },
    }));
  }

  async doFetch() {
    const result = await fetchAPI();
    const arrayResult = Object.values(result);
    const formattedResult = arrayResult.filter((coin) => coin.codein !== 'BRLT');
    this.setState((oldState) => ({
      ...oldState,
      coins: formattedResult,
      isFetched: true,
      shouldLoop: true,
      expense: {
        id: 0,
        value: 0,
        currency: 'USD',
        method: 'dinheiro',
        tag: 'alimentacao',
        description: '',
        exchangeRates: '',
      },
    }));
  }

  handleChange({ target: { name, value } }) {
    this.setState((oldState) => ({
      ...oldState,
      expense: { ...oldState.expense,
        [name]: value,
      },
    }));
  }

  resetState(editId) {
    const { expense } = this.state;
    this.setState((oldState) => ({
      ...oldState,
      expense: {
        ...oldState.expense,
        id: (editId ? expense.id + editId : expense.id + 1),
      },
    }));
  }

  async handleSubmit() {
    const { expenseSubmitAction, thunkerAction } = this.props;
    const { expense } = this.state;
    const coins = await thunkerAction();
    expenseSubmitAction({ ...expense, exchangeRates: coins });
    this.resetState();
  }

  async handleConfirmEdit() {
    const { confirmEditAction, editExpense } = this.props;
    const { expense } = this.state;
    const propExchangeRate = editExpense.exchangeRates;
    confirmEditAction(editExpense.id,
      { ...expense, exchangeRates: propExchangeRate });
    this.resetState();
  }

  handleEditMode() {
    const { editMode } = this.props;
    if (editMode) {
      return (
        <button
          onClick={ () => this.handleConfirmEdit() }
          type="button"
        >
          Editar Despesa
        </button>
      );
    }
    return (
      <button onClick={ this.handleSubmit } type="button">Adicionar despesa</button>
    );
  }

  inputDespesaDescricao(state) {
    const { expense } = state;
    return (
      <>
        <label htmlFor="Valor">
          Valor
          <input
            data-testid="value-input"
            id="Valor"
            type="number"
            name="value"
            value={ expense.value }
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="descricao-despesa">
          Descrição da despesa:
          <textarea
            data-testid="description-input"
            id="descricao-despesa"
            name="description"
            value={ expense.description }
            onChange={ this.handleChange }
          />
        </label>
      </>
    );
  }

  renderCurrenciesAndMethod() {
    const { coins, expense: { currency, method } } = this.state;
    return (
      <>
        <label htmlFor="moeda">
          Moeda
          <select
            data-testid="currency-input"
            id="moeda"
            name="currency"
            onChange={ this.handleChange }
            value={ currency }
          >
            {coins.map((coin, index) => (
              <option value={ coin.code } data-testid={ coin.code } key={ index }>
                {coin.code}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="Método de pagamento">
          Método de pagamento
          <select
            data-testid="method-input"
            name="method"
            value={ method }
            id="Método de pagamento"
            onChange={ this.handleChange }
          >
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>
      </>
    );
  }

  render() {
    const { isFetched } = this.state;
    if (!isFetched) { return <div>Carregando...</div>; }
    const { expense: { tag } } = this.state;
    return (
      <form>
        { this.inputDespesaDescricao(this.state) }
        { this.renderCurrenciesAndMethod(this.state) }
        <label htmlFor="tag">
          Tag
          <select
            data-testid="tag-input"
            value={ tag }
            name="tag"
            id="tag"
            onChange={ this.handleChange }
          >
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>
        { this.handleEditMode() }
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  expenseSubmitAction: (state) => dispatch(expenseSubmit(state)),
  thunkerAction: () => dispatch(thunker()),
  confirmEditAction: (id, expense) => dispatch(confirmEdit(id, expense)),
});

const mapStateToProps = (state) => ({
  expensesList: state.wallet.expenses,
  editMode: state.wallet.editMode,
  editExpense: state.wallet.editExpense,
  storeCurrencies: state.wallet.currencies,
});

export default connect(mapStateToProps, mapDispatchToProps)(FormExpenses);

FormExpenses.propTypes = {
  expenseSubmitAction: PropTypes.func.isRequired,
  thunkerAction: PropTypes.func.isRequired,
  confirmEditAction: PropTypes.func.isRequired,
  editMode: PropTypes.bool,
  editExpense: PropTypes.shape({
    id: PropTypes.number,
    exchangeRates: PropTypes.shape({
    }),
  }),
};

FormExpenses.defaultProps = {
  editMode: null,
  editExpense: null,
};
