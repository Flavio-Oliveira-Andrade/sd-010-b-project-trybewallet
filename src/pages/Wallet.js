import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  fetchCurrencyInitials as fetchCurrencyInitialsThunk,
  fetchExchangeRatesAddExpense as fetchExchangeRatesAddExpenseThunk,
} from '../actions';

class Wallet extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currency: '',
      description: '',
      method: '',
      tag: '',
      value: '',
    };

    this.saveExpenses = this.saveExpenses.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.renderHeader = this.renderHeader.bind(this);
    this.renderCurrency = this.renderCurrency.bind(this);
  }

  componentDidMount() {
    const { fetchCurrencyInitials } = this.props;
    fetchCurrencyInitials();
  }

  saveExpenses(e) {
    e.preventDefault();
    const { fetchExchangeRatesAddExpense, expenses } = this.props;
    const obj = { id: expenses.length, ...this.state };
    fetchExchangeRatesAddExpense(obj);
  }

  handleChange({ target: { id, value } }) {
    this.setState({ [id]: value });
  }

  renderHeader() {
    const { email, expenses } = this.props;

    const total = expenses.reduce(
      (previous, current) => previous + current.value
        * current.exchangeRates[current.currency].ask,
      0,
    );
    return (
      <header data-testid="email-field">
        <div>{email}</div>
        <div data-testid="total-field">{total.toFixed(2)}</div>
        <div data-testid="header-currency-field">BRL</div>
      </header>
    );
  }

  renderCurrency() {
    const { currencies } = this.props;

    return (
      <label htmlFor="currency">
        Moeda:
        <select id="currency" onChange={ this.handleChange }>
          <option defaultValue hidden>
            {' '}
          </option>
          {currencies.map((currency, index) => (
            <option key={ index } value={ currency }>
              {currency}
            </option>
          ))}
        </select>
      </label>
    );
  }

  render() {
    const { renderHeader, renderCurrency, saveExpenses, handleChange } = this;
    return (
      <>
        {renderHeader()}
        <form onSubmit={ saveExpenses }>
          <label htmlFor="value">
            Valor:
            <input type="number" id="value" onChange={ handleChange } />
          </label>
          <label htmlFor="description">
            Descrição:
            <input type="text" id="description" onChange={ handleChange } />
          </label>

          {renderCurrency()}

          <label htmlFor="method">
            Método de pagamento:
            <select id="method" onChange={ handleChange }>
              <option defaultValue hidden>
                {' '}
              </option>
              <option value="Dinheiro">Dinheiro</option>
              <option value="Cartão de crédito">Cartão de crédito</option>
              <option value="Cartão de débito">Cartão de débito</option>
            </select>
          </label>

          <label htmlFor="tag">
            Tag:
            <select id="tag" onChange={ handleChange }>
              <option defaultValue hidden>
                {' '}
              </option>
              <option value="Alimentação">Alimentação</option>
              <option value="Lazer">Lazer</option>
              <option value="Trabalho">Trabalho</option>
              <option value="Transporte">Transporte</option>
              <option value="Saúde">Saúde</option>
            </select>
          </label>
          <button type="submit">Adicionar despesa</button>
        </form>
      </>
    );
  }
}
const mapStateToProps = (state) => ({
  email: state.user.email,
  currencies: state.wallet.currencies,
  expenses: state.wallet.expenses,
  exchangeRates: state.wallet.exchangeRates,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCurrencyInitials: () => dispatch(fetchCurrencyInitialsThunk()),
  fetchExchangeRatesAddExpense:
    (expense) => dispatch(fetchExchangeRatesAddExpenseThunk(expense)),
});

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
  fetchCurrencyInitials: PropTypes.func.isRequired,
  fetchExchangeRatesAddExpense: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
