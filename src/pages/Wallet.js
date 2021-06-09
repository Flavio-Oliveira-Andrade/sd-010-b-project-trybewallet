import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import getCurrency from '../services/api/currencyApi';
import { fetchExpense } from '../actions';

const currencyArr = [
  'USD', 'CAD', 'EUR',
  'GBP', 'ARS', 'BTC',
  'LTC', 'JPY', 'CHF',
  'AUD', 'CNY', 'ILS',
  'ETH', 'XRP'];

const INITIAL_INPUT_VALUE = {
  value: '',
  description: '',
  currency: 'USD',
  method: 'Dinheiro',
  tag: 'Alimentação',
};

class Wallet extends React.Component {
  constructor() {
    super();
    this.state = {
      currencies: [],
      ...INITIAL_INPUT_VALUE,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async componentDidMount() {
    const allCurrencies = await getCurrency();
    const filteredCurrencies = Object.keys(allCurrencies)
      .filter((currency) => currencyArr.includes(currency));
    this.updateCurrency(filteredCurrencies);
  }

  getCurrentExpanseValue(expense) {
    const { value, currency, exchangeRates } = expense;
    return value * exchangeRates[currency].ask;
  }

  handleChange(name, value) {
    this.setState({ [name]: value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { addExpense } = this.props;
    addExpense(this.state);
    this.setState((prevState) => ({ ...prevState, ...INITIAL_INPUT_VALUE }));
  }

  updateCurrency(currencies) {
    this.setState({ currencies });
  }

  renderCurrenciesAsOption() {
    const { currencies, currency } = this.state;
    const allCurrencies = currencies
      .map((c) => <option key={ c } value={ c }>{c}</option>);
    return (
      <label htmlFor="currency">
        Moeda
        <select
          onChange={ ({ target: { name, value } }) => this.handleChange(name, value) }
          name="currency"
          id="currency"
          value={ currency }
        >
          {allCurrencies}
        </select>
      </label>
    );
  }

  renderPaymentOptions() {
    const { method } = this.state;
    return (
      <label htmlFor="payment">
        Método de pagamento
        <select
          name="method"
          value={ method }
          onChange={ ({ target: { name, value } }) => this.handleChange(name, value) }
          id="payment"
        >
          <option value="Dinheiro">Dinheiro</option>
          <option value="Cartão de crédito">Cartão de crédito</option>
          <option value="Cartão de débito">Cartão de débito</option>
        </select>
      </label>
    );
  }

  renderTagOptions() {
    const { tag } = this.state;
    return (
      <label htmlFor="tag">
        Tag
        <select
          name="tag"
          value={ tag }
          onChange={ ({ target: { name, value } }) => this.handleChange(name, value) }
          id="tag"
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

  renderTotal() {
    const { expenses } = this.props;
    return expenses.reduce((acc, expense) => {
      acc += parseFloat(this.getCurrentExpanseValue(expense));
      return acc;
    }, 0);
  }

  renderHeader() {
    const { email } = this.props;

    return (
      <header>
        <p data-testid="email-field">{email}</p>
        <select data-testid="header-currency-field">
          <option defaultValue>BRL</option>
        </select>
        <p data-testid="total-field">{this.renderTotal()}</p>
      </header>
    );
  }

  render() {
    const { value: priceValue, description } = this.state;

    return (
      <>
        {this.renderHeader()}
        <form>
          <label htmlFor="value">
            Valor:
            <input
              id="value"
              type="number"
              name="value"
              value={ priceValue }
              onChange={ ({ target: { name, value } }) => this.handleChange(name, value) }
            />
          </label>
          <label htmlFor="description">
            Descrição:
            <input
              id="description"
              type="text"
              name="description"
              value={ description }
              onChange={ ({ target: { name, value } }) => this.handleChange(name, value) }
            />
          </label>
          {this.renderCurrenciesAsOption()}
          {this.renderPaymentOptions()}
          {this.renderTagOptions()}
          <button type="button" onClick={ this.handleSubmit }>
            Adicionar despesa
          </button>
        </form>
      </>);
  }
}

const mapStateToProps = ({ user, wallet }) => ({
  expenses: wallet.expenses,
  email: user.email,
});

const mapDispatchToProps = (dispatch) => ({
  addExpense: (state) => dispatch(fetchExpense(state)),
});

Wallet.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    value: PropTypes.string,
    description: PropTypes.string,
    currency: PropTypes.string,
    method: PropTypes.string,
    tag: PropTypes.string,
    exchangeRates: PropTypes.shape({
      code: PropTypes.string,
      name: PropTypes.string,
      ask: PropTypes.string,
    }),
  })),
  email: PropTypes.string,
  addExpense: PropTypes.func.isRequired,
};

Wallet.defaultProps = {
  email: 'hello@ola.com',
  expenses: {
    id: 1,
    value: '555',
    description: 'faltou',
    currency: 'faltou',
    method: 'faltou',
    tag: 'faltou',
    exchangeRates:
      {
        code: 'USD',
        name: 'Dólar Comercial',
        ask: '5.6208',
      },

  },
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
