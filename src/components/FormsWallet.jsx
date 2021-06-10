import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchCurrencies, addExpenses, sumExpenses } from '../actions';

class FormsWallet extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      description: '',
      currency: 'USD',
      method: '',
      tag: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.formValue = this.formValue.bind(this);
    this.formCurrency = this.formCurrency.bind(this);
    this.formPayment = this.formPayment.bind(this);
    this.formTag = this.formTag.bind(this);
    this.formDescription = this.formDescription.bind(this);
  }

  componentDidMount() {
    const { fetchCoins } = this.props;
    fetchCoins();
  }

  handleChange({ target: { value, name } }) {
    this.setState({
      [name]: value,
    });
  }

  async handleClick() {
    const { value,
      description,
      currency,
      method,
      tag,
    } = this.state;

    const {
      currencies,
      expenses,
      fetchCoins,
      addToExpenses,
      addSumExpenses,
    } = this.props;

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

    this.setState({
      value: '',
      description: '',
      currency: '',
      method: '',
      tag: '',
    });
  }

  formValue(value) {
    return (
      <label
        htmlFor="value"
      >
        Valor:
        <input
          id="value"
          type="number"
          name="value"
          value={ value }
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  formCurrency() {
    const { currencies } = this.props;
    const listCurrency = Object.keys(currencies); // https://qastack.com.br/programming/5072136/javascript-filter-for-objects // Aula : Object 24/03/2021
    return (
      <label
        htmlFor="coin"
      >
        Moeda:
        <select
          id="coin"
          type="number"
          name="currency"
          onChange={ this.handleChange }
        >
          {listCurrency.filter((coin) => coin !== 'USDT')
            .map((coin) => (
              <option
                key={ coin }
              >
                {coin}
              </option>
            ))}
        </select>
      </label>
    );
  }

  formPayment(method) {
    return (
      <label
        htmlFor="payment"
      >
        Método de Pagamento:
        <select
          id="payment"
          type="text"
          name="method"
          value={ method }
          onChange={ this.handleChange }
        >
          <option>Selecione o Pagamento</option>
          <option>Dinheiro</option>
          <option>Cartão de débito</option>
          <option>Cartão de crédito</option>
        </select>
      </label>
    );
  }

  formTag(tag) {
    return (
      <label
        htmlFor="tag"
      >
        Tag:
        <select
          id="tag"
          type="text"
          name="tag"
          value={ tag }
          onChange={ this.handleChange }
        >
          <option>Selecione a Tag</option>
          <option>Alimentação</option>
          <option>Lazer</option>
          <option>Trabalho</option>
          <option>Transporte</option>
          <option>Saúde</option>
        </select>
      </label>
    );
  }

  formDescription(description) {
    return (
      <label
        htmlFor="description"
      >
        Descrição:
        <input
          id="description"
          type="text"
          name="description"
          value={ description }
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  render() {
    const { value, description, method, tag } = this.state;
    return (
      <>
        {this.formValue(value)}
        {this.formCurrency()}
        {this.formPayment(method)}
        {this.formTag(tag)}
        {this.formDescription(description)}
        <button
          type="button"
          onClick={ this.handleClick }
        >
          Adicionar despesa
        </button>
      </>
    );
  }
}

FormsWallet.propTypes = {
  fetchCoins: PropTypes.func.isRequired,
  addToExpenses: PropTypes.func.isRequired,
  addSumExpenses: PropTypes.func.isRequired,
  currencies: PropTypes.objectOf(Object).isRequired,
  expenses: PropTypes.objectOf(Object).isRequired,
};

const mapStateToProps = ({ wallet: { currencies, expenses } }) => ({
  currencies,
  expenses,
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
});

export default connect(mapStateToProps, mapDispatchToProps)(FormsWallet);
