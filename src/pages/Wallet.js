import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchApiCurrencies, saveExpense, deleteExpense } from '../actions/index';
import TabelaGastos from '../components/TabelaGastos';

class Wallet extends React.Component {
  constructor() {
    super();
    this.state = {
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    };
    this.renderValue = this.renderValue.bind(this);
    this.renderDescription = this.renderDescription.bind(this);
    this.renderCurrency = this.renderCurrency.bind(this);
    this.renderMethod = this.renderMethod.bind(this);
    this.renderTag = this.renderTag.bind(this);
    this.renderHeader = this.renderHeader.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.addExpense = this.addExpense.bind(this);
  }

  componentDidMount() {
    const { moedasApi } = this.props;
    moedasApi();
  }

  // para criar despesas
  handleChange({ target }) {
    const { name, value } = target;
    this.setState((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  addExpense() {
    const { savedExpenses } = this.props;
    const { value, description, currency, method, tag } = this.state;
    let id = 0;
    if (savedExpenses.length !== 0) {
      const savedExpensesLength = savedExpenses.length;
      const idLength = savedExpenses[savedExpensesLength - 1].id;
      id = idLength + 1;
    }
    const expense = { id, value, description, currency, method, tag };
    const { sendExpense } = this.props;
    sendExpense(expense);
    this.setState({
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação' });
  }

  renderDescription() {
    return (
      <label htmlFor="description">
        Descrição
        <input
          type="text"
          name="description"
          id="description"
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  renderCurrency() {
    const { moedas } = this.props;
    const { currency } = this.state;
    return (
      <label htmlFor="currency">
        Moeda
        <select
          name="currency"
          id="currency"
          type="combobox"
          onChange={ this.handleChange }
          value={ currency }
        >
          {console.log(moedas)}
          { moedas.map((cur, index) => (
            <option key={ index } value={ cur }>
              { cur }
            </option>)) }
        </select>
      </label>
    );
  }

  renderMethod() {
    const { method } = this.state;
    return (
      <label htmlFor="method">
        Método de pagamento
        <select id="method" name="method" onChange={ this.handleChange } value={ method }>
          <option value="Dinheiro">Dinheiro</option>
          <option value="Cartão de crédito">Cartão de crédito</option>
          <option value="Cartão de débito">Cartão de débito</option>
        </select>
      </label>
    );
  }

  renderTag() {
    const { tag } = this.state;
    return (
      <label htmlFor="tag">
        Tag
        <select
          id="tag"
          name="tag"
          onChange={ this.handleChange }
          value={ tag }
        >
          <option value="Alimentação">Alimentação</option>
          <option value="Lazer">Lazer</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Transporte">Transporte</option>
          <option value="Saúde">Saúde</option>
        </select>
      </label>
    );
  }

  renderHeader() {
    const { email, savedExpenses } = this.props;
    let totalExpenses = 0;
    savedExpenses.forEach((exp) => {
      totalExpenses += parseFloat(((parseFloat(exp.value)
      * parseFloat(exp.exchangeRates[exp.currency].ask))).toFixed(2));
    });

    return (
      <header>
        <p data-testid="email-field">
          Email:
          {' '}
          {email}
          <br />
        </p>
        <p data-testid="total-field">
          Despesas:
          { totalExpenses }
        </p>
        <p data-testid="header-currency-field">
          BRL
        </p>
      </header>
    );
  }

  renderValue() {
    return (
      <label htmlFor="value">
        {' '}
        Valor
        <input
          type="text"
          text="valor"
          id="value"
          name="value"
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  renderAddButton() {
    return (
      <section>
        <button
          type="button"
          onClick={ () => this.addExpense() }
        >
          Adicionar Despesa
        </button>
      </section>
    );
  }

  renderForm() {
    return (
      <form>
        {this.renderValue()}
        {this.renderDescription()}
        {this.renderCurrency()}
        {this.renderMethod()}
        {this.renderTag()}
        {this.renderAddButton()}
      </form>
    );
  }

  render() {
    return (
      <div>
        TrybeWallet
        {this.renderHeader()}
        {this.renderForm()}
        <TabelaGastos />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  moedas: state.wallet.currencies,
  isFetching: state.wallet.isFetching,
  savedExpenses: state.wallet.expenses,
  dados: state.wallet.dados,
});

const mapDispatchToProps = (dispatch) => ({
  moedasApi: () => dispatch(fetchApiCurrencies()),
  sendExpense: (expense) => dispatch(saveExpense(expense)),
  deleteExpense: (expense) => dispatch(deleteExpense(expense)),
});

Wallet.propTypes = {
  email: PropTypes.string,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
