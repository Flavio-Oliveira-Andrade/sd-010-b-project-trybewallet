import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { actionThunk, walletAction } from '../actions';

class Wallet extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      defaultCurrency: 'BRL',
      value: 0,
      description: '',
      currency: '',
      method: 'Dinheiro',
      tag: 'Alimentação',
      total: 0,
    };

    this.handleChange = this.handleChange.bind(this);
    this.createValue = this.createValue.bind(this);
    this.createDescription = this.createDescription.bind(this);
    this.createCurrency = this.createCurrency.bind(this);
    this.createPaymentMethod = this.createPaymentMethod.bind(this);
    this.createCategory = this.createCategory.bind(this);
    this.createExpenses = this.createExpenses.bind(this);
    this.addValue = this.addValue.bind(this);
  }

  componentDidMount() {
    const { requestApi } = this.props;

    requestApi();
  }

  handleChange({ target: { name, value } }) {
    this.setState({
      [name]: value,
    });
  }

  createValue() {
    const { value } = this.state;

    return (
      <label htmlFor="value">
        Valor
        <input
          onChange={ (e) => this.handleChange(e) }
          name="value"
          value={ value }
          id="value"
        />
      </label>
    );
  }

  createDescription() {
    const { description } = this.state;

    return (
      <label htmlFor="description">
        Descrição
        <input
          onChange={ (e) => this.handleChange(e) }
          name="description"
          value={ description }
          id="description"
        />
      </label>
    );
  }

  createCurrency() {
    const { currencies } = this.props;
    const currenciesArray = Object.keys(currencies);
    const usdt = 'USDT';

    return (
      <label htmlFor="currency">
        Moeda
        <select
          onChange={ (e) => this.handleChange(e) }
          id="currency"
          role="combobox"
          name="currency"
        >
          {
            currenciesArray
              .filter((param) => param !== usdt)
              .map((curr) => <option key={ curr }>{curr}</option>)
          }
        </select>
      </label>
    );
  }

  createPaymentMethod() {
    const { method } = this.state;

    return (
      <label htmlFor="payment">
        Método de pagamento
        <select
          onChange={ (e) => this.handleChange(e) }
          id="method"
          role="combobox"
          name="method"
          value={ method }
        >
          <option>Dinheiro</option>
          <option>Cartão de crédito</option>
          <option>Cartão de débito</option>
        </select>
      </label>
    );
  }

  createCategory() {
    const { tag } = this.state;

    return (
      <label htmlFor="tag">
        Tag
        <select
          onChange={ (e) => this.handleChange(e) }
          id="tag"
          role="combobox"
          name="tag"
          value={ tag }
        >
          <option>Alimentação</option>
          <option>Lazer</option>
          <option>Trabalho</option>
          <option>Transporte</option>
          <option>Saúde</option>
        </select>
      </label>
    );
  }

  async createExpenses() {
    const { value, description, currency, method, tag } = this.state;
    const { expenses, walletToAction, currencies, requestApi } = this.props;

    await requestApi();

    const expense = {
      id: expenses.length,
      value,
      description,
      currency,
      method,
      tag,
      exchangeRates: currencies,
    };

    this.addValue();
    walletToAction(expense);
  }

  addValue() {
    const { expenses } = this.props;

    const listExpenses = expenses
      .map(({ value, currency, exchangeRates }) => exchangeRates[currency].ask * value);

    const total = listExpenses.reduce((acc, value) => acc + value, 0).toFixed(2);
    this.setState({
      total,
    });
    return total;
  }

  render() {
    const { email } = this.props;
    const { value, expenses, defaultCurrency, total } = this.state;

    return (
      <>
        <header>
          <h2 data-testid="email-field">{ !email ? 'faça seu login' : email }</h2>
          <h2 data-testid="total-field">{ expenses ? total : value }</h2>
          <h2 data-testid="header-currency-field">{ defaultCurrency }</h2>
        </header>
        <form>
          { this.createValue() }
          { this.createDescription() }
          { this.createCurrency() }
          { this.createPaymentMethod() }
          { this.createCategory() }
          <button
            onClick={ () => this.createExpenses() }
            type="button"
          >
            Adicionar despesa
          </button>
        </form>
      </>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    walletToAction: (expense) => dispatch(walletAction(expense)),
    requestApi: () => dispatch(actionThunk()),
  };
}

const mapStateToProps = ({ user: { email }, wallet: { expenses, currencies } }) => ({
  email,
  expenses,
  currencies,
});

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
  walletToAction: PropTypes.func.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
  requestApi: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
