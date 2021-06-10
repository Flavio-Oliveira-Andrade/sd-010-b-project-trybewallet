import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchAPI, submitExpense } from '../actions';
import ExpenseTable from '../components/ExpenseTable';

class Wallet extends React.Component {
  constructor() {
    super();
    this.state = {
      id: 0,
      value: '',
      description: '',
      currency: '',
      method: '',
      tag: '',
    };
    this.renderHeader = this.renderHeader.bind(this);
    this.renderValueLabel = this.renderValueLabel.bind(this);
    this.renderDescriptionLabel = this.renderDescriptionLabel.bind(this);
    this.renderCurrencySelect = this.renderCurrencySelect.bind(this);
    this.renderPaymentMethodSelect = this.renderPaymentMethodSelect.bind(this);
    this.renderExpenseCategorySelect = this.renderExpenseCategorySelect.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.updateTotalExpenses = this.updateTotalExpenses.bind(this);
  }

  componentDidMount() {
    const { getCurrencies } = this.props;
    getCurrencies();
  }

  async handleSubmit(e) {
    const { getExchanges, saveExpense } = this.props;
    e.preventDefault();
    await getExchanges();
    saveExpense(this.state);
    this.setState((prevState) => ({
      id: prevState.id + 1,
    }));
  }

  handleChange({ target: { name, value } }) {
    this.setState({
      [name]: value,
    });
  }

  updateTotalExpenses() {
    const { expenses } = this.props;
    return expenses.reduce((acc, expense) => {
      const { value, currency, exchangeRates } = expense;
      const parseValue = parseFloat(value);
      const { ask } = exchangeRates[currency];
      const total = parseValue * ask;
      return acc + total;
    }, 0);
  }

  renderHeader() {
    const { email } = this.props;
    const totalExpenses = this.updateTotalExpenses();
    return (
      <header>
        <span data-testid="email-field">{email}</span>
        <span data-testid="total-field">{ totalExpenses }</span>
        <span data-testid="header-currency-field">BRL</span>
      </header>
    );
  }

  renderValueLabel() {
    const { value } = this.state;
    return (
      <label htmlFor="valor">
        Valor:
        <input
          type="text"
          name="value"
          id="valor"
          value={ value }
          onChange={ (e) => this.handleChange(e) }
        />
      </label>
    );
  }

  renderDescriptionLabel() {
    const { description } = this.state;
    return (
      <label htmlFor="descricao">
        Descrição:
        <input
          type="text"
          name="description"
          id="descricao"
          value={ description }
          onChange={ (e) => this.handleChange(e) }
        />
      </label>
    );
  }

  renderCurrencySelect() {
    const { currencies } = this.props;
    const { currency } = this.state;
    return (
      <label htmlFor="moeda">
        Moeda:
        <select
          id="moeda"
          name="currency"
          value={ currency }
          onChange={ (e) => this.handleChange(e) }
        >
          {currencies.map((code) => (
            <option key={ code }>{code}</option>
          ))}
        </select>
      </label>
    );
  }

  renderPaymentMethodSelect() {
    const { method } = this.state;
    return (
      <label htmlFor="paymentMethod">
        Método de pagamento:
        <select
          id="paymentMethod"
          name="method"
          value={ method }
          onChange={ (e) => this.handleChange(e) }
        >
          <option value=" ">Selecione</option>
          <option value="Dinheiro">Dinheiro</option>
          <option value="Cartão de crédito">Cartão de crédito</option>
          <option value="Cartão de débito">Cartão de débito</option>
        </select>
      </label>
    );
  }

  renderExpenseCategorySelect() {
    const { tag } = this.state;
    return (
      <label htmlFor="tag">
        Tag:
        <select
          id="tag"
          name="tag"
          value={ tag }
          onChange={ (e) => this.handleChange(e) }
        >
          <option value=" ">Selecione</option>
          <option value="Alimentação">Alimentação</option>
          <option value="Lazer">Lazer</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Transporte">Transporte</option>
          <option value="Saúde">Saúde</option>
        </select>
      </label>
    );
  }

  render() {
    return (
      <>
        {this.renderHeader()}
        <form onSubmit={ (e) => this.handleSubmit(e) }>
          {this.renderValueLabel()}
          {this.renderDescriptionLabel()}
          {this.renderCurrencySelect()}
          {this.renderPaymentMethodSelect()}
          {this.renderExpenseCategorySelect()}
          <button type="submit">Adicionar despesa</button>
        </form>
        <ExpenseTable />
      </>
    );
  }
}

const mapStateToProps = ({
  user: { email },
  wallet: { currencies, expenses },
}) => ({
  email,
  currencies,
  expenses,
});

const mapDispatchToProps = (dispatch) => ({
  getCurrencies: (requirement = 'getCurrencies') => dispatch(
    fetchAPI(requirement),
  ),
  getExchanges: (requirement = 'getExchanges') => dispatch(fetchAPI(requirement)),
  saveExpense: (expense) => dispatch(submitExpense(expense)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
  getCurrencies: PropTypes.func.isRequired,
  getExchanges: PropTypes.func.isRequired,
  saveExpense: PropTypes.func.isRequired,
};
