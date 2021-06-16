import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addExpenseWithRate, fetchCurrencies } from '../actions';

class Wallet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      value: '0',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
      exchangeRates: {},
    };
    this.genderForm = this.genderForm.bind(this);
    this.genderTag = this.genderTag.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.saveExpense = this.saveExpense.bind(this);
  }

  componentDidMount() {
    const { currenciesFetch } = this.props;
    currenciesFetch();
  }

  handleChange({ target: { name, value } }) {
    this.setState({
      [name]: value,
    });
  }

  async saveExpense() {
    const expense = { ...this.state };
    const { id } = this.state;
    const { takeExpense } = this.props;
    await takeExpense(expense);
    this.setState({
      id: id + 1,
    });
  }

  genderTag() {
    return (
      <label htmlFor="wallet-tag">
        Tag:
        <select name="tag" id="wallet-tag" onChange={ this.handleChange }>
          <option value="Alimentação">Alimentação</option>
          <option value="Lazer">Lazer</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Transporte">Transporte</option>
          <option value="Saúde">Saúde</option>
        </select>
      </label>
    );
  }

  genderForm() {
    const { currencies } = this.props;
    return (
      <form>
        <label htmlFor="wallet-value">
          Valor:
          <input
            type="number"
            name="value"
            id="wallet-value"
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="wallet-description">
          Descrição:
          <input
            type="text"
            name="description"
            id="wallet-description"
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="wallet-exchange">
          Moeda:
          <select
            name="currency"
            id="wallet-exchange"
            onChange={
              this.handleChange
            }
          >
            {currencies.map((curr) => <option key={ curr }>{ curr }</option>)}
          </select>
        </label>
        <label htmlFor="wallet-payment">
          Método de pagamento:
          <select name="method" id="wallet-payment" onChange={ this.handleChange }>
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>
        {this.genderTag()}
        <button type="button" onClick={ this.saveExpense }>Adicionar despesa</button>
      </form>
    );
  }

  sumTotal() {
    const { expenses } = this.props;
    const total = expenses.reduce(
      (acc, curr) => acc + curr.value
        * curr.exchangeRates[curr.currency].ask,
      0,
    );
    return total.toFixed(2);
  }

  render() {
    const { email } = this.props;
    return (
      <main>
        <header>
          <h3 data-testid="email-field">
            Email:
            { email }
          </h3>
          <h3 data-testid="total-field">
            Despesa Total:
            { this.sumTotal() }
          </h3>
          <h3 data-testid="header-currency-field">
            Câmbio em uso: BRL
          </h3>
        </header>
        {this.genderForm()}
        <p>{}</p>
      </main>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  currencies: state.wallet.currencies,
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  currenciesFetch: () => dispatch(fetchCurrencies()),
  takeExpense: (expense) => dispatch(addExpenseWithRate(expense)),
});

Wallet.propTypes = {
  email: PropTypes.string,
  currencies: PropTypes.objectOf,
  value: PropTypes.number,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
