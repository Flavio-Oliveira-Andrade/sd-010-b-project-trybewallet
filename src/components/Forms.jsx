import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrenciesThunk, getCurrencyExpenseThunk, addExpenses, batatinha } from '../actions';
import fetchCurrency from '../services';

class Forms extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      value: 0,
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    const { getCurrencies } = this.props;
    getCurrencies();
    // currencyExchange();
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleClick() {
    const { addExpense } = this.props;
    // currencyExchange();
    // fetchCurrency().then((exchangeRates) => addExpense({ ...this.state, exchangeRates }))
    addExpense({ ...this.state });
    this.setState((oldState) => ({
      id: oldState.id + 1,
    }));
  }

  render() {
    const { currencies } = this.props;
    const { value, description, method, tag } = this.state;
    return (
      <form>
        <label htmlFor="value">
          Valor:
          <input type="number" name="value" id="value" onChange={ this.handleChange } value={ value } />
        </label>
        <label htmlFor="description">
          Descrição
          <input
            type="text"
            name="description"
            id="description"
            onChange={ this.handleChange }
            value={ description }
          />
        </label>
        <label htmlFor="currency">
          Moeda
          <select name="currency" id="currency" onChange={ this.handleChange }>
            {currencies.map((currency) => (
              <option value={ currency } key={ currency }>{currency}</option>))}
          </select>
        </label>
        <label htmlFor="method">
          Método de pagamento
          <select name="method" id="method" onChange={ this.handleChange } value={ method }>
            <option value="dinheiro">Dinheiro</option>
            <option value="credit-card">Cartão de crédito</option>
            <option value="debit">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag
          <select name="tag" id="tag" onChange={ this.handleChange } value={ tag }>
            <option value="alimentação">Alimentação</option>
            <option value="lazer">Lazer</option>
            <option value="trabalho">Trabalho</option>
            <option value="transporte">Transporte</option>
            <option value="saúde">Saúde</option>
          </select>
        </label>
        <button
          type="button"
          onClick={ () => this.handleClick() }
        >Adicionar despesa
        </button>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  currencies2: state.wallet.currencies2,
});

const mapDispatchToProps = (dispatch) => ({
  getCurrencies: () => dispatch(getCurrenciesThunk()),
  currencyExchange: () => dispatch(getCurrencyExpenseThunk()),
  addExpense: (state) => dispatch(batatinha(state)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Forms);

Forms.propTypes = {
  getCurrencies: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
};
