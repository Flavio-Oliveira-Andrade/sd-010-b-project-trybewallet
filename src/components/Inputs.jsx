import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getCurrencyThunk } from '../actions/getCurrencyActions';
import { paymentTypes, tags } from '../services/formData';
import { calculateTotalExpense, saveData, savePrice } from '../actions/tableActions';
import apiRequest from '../services/apiRequest';

class Inputs extends React.Component {
  constructor() {
    super();

    this.state = {
      id: 0,
      value: 0,
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
      description: '',
      exchangeRates: {},
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleExchanges = this.handleExchanges.bind(this);
  }

  componentDidMount() {
    const { getCurrency } = this.props;
    getCurrency();
  }

  handleChange({ target: { name, value } }) {
    const { expenses } = this.props;
    this.setState({
      [name]: value,
      id: expenses.length,
    });
  }

  handleTotalExpenses() {
    const ONE_MILISECONDS = 1;
    setTimeout(() => {
      const { itensPrices, calcPrice } = this.props;
      const sum = itensPrices.reduce((acc, curr) => {
        acc += Number(curr);
        return acc;
      }, 0);
      calcPrice(sum.toFixed(2));
    }, ONE_MILISECONDS);
  }

  handleTotalPrice() {
    const { value, currency, exchangeRates } = this.state;
    const { getPrice } = this.props;
    const currentValue = Number(exchangeRates[currency].ask) * Number(value);
    getPrice(currentValue.toFixed(2));
    this.handleTotalExpenses();
  }

  async handleExchanges() {
    const { getData } = this.props;
    const answer = await apiRequest();
    delete answer.USDT;
    this.setState({ exchangeRates: answer });
    this.handleTotalPrice();
    getData(this.state);
  }

  render() {
    const { currencies } = this.props;
    return (
      <form>
        <label htmlFor="expense">
          Valor:
          <input type="text" name="value" id="expense" onChange={ this.handleChange } />
        </label>
        <label htmlFor="currency">
          Moeda:
          <select
            type="text"
            name="currency"
            id="currency"
            onChange={ this.handleChange }
          >
            {currencies.map((currency) => <option key={ currency }>{currency}</option>)}
          </select>
        </label>
        <label htmlFor="payment">
          Método de pagamento:
          <select type="text" name="method" id="payment" onChange={ this.handleChange }>
            {
              paymentTypes.map((payment) => <option key={ payment }>{payment}</option>)
            }
          </select>
        </label>
        <label htmlFor="tag">
          tag:
          <select type="text" name="tag" id="tag" onChange={ this.handleChange }>
            {
              tags.map((tag) => <option key={ tag }>{tag}</option>)
            }
          </select>
        </label>
        <label htmlFor="description">
          Descrição:
          <input
            type="text"
            name="description"
            id="description"
            onChange={ this.handleChange }
          />
        </label>
        <button type="button" onClick={ this.handleExchanges }>
          Adicionar despesa
        </button>
      </form>
    );
  }
}

const mapStateToProps = ({ wallet: {
  currencies, expenses, totalExpense, itensPrices,
} }) => ({
  currencies,
  expenses,
  itensPrices,
  totalExpense,
});

const mapDispatchToProps = (dispatch) => ({
  getCurrency: () => dispatch(getCurrencyThunk()),
  getData: (state) => dispatch(saveData(state)),
  getPrice: (payload) => dispatch(savePrice(payload)),
  calcPrice: (payload) => dispatch(calculateTotalExpense(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Inputs);

Inputs.propTypes = {
  currencies: PropTypes.array,
  getCurrency: PropTypes.func,
  getData: PropTypes.func,
}.isRequired;
