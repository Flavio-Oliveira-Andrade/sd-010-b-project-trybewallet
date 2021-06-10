import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrenciesThunk, getCurrencyExpenseThunk, addExpenses } from '../actions';

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
  }

  handleChange(event) {
    this.setState({
      [event.target.id]: event.target.value,
    });
  }

  // handleExpense() { const { addExpense, updatedWallet, currency2: exchangeRates } = this.props; updatedWallet(); this.setState((prev) => ({ ...INITIAL_STATE, id: prev.id + 1 })); addExpense({ ...this.state, exchangeRates }); } 

  handleClick() {
    const { currencyExchange, addExpense } = this.props;
    currencyExchange();
    addExpense(this.state);
    this.setState((oldState) => ({
      id: oldState.id + 1,
    }));
    console.log(this.state);
  }

  render() {
    const { currencies } = this.props;    
    return (
      <form>
        <label htmlFor="value">
          Valor:
          <input type="number" name="value" id="value" onChange={ this.handleChange } />
        </label>
        <label htmlFor="description">
          Descrição
          <input
            type="text"
            name="description"
            id="description"
            onChange={ this.handleChange }
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
          <select name="method" id="method" onChange={ this.handleChange }>
            <option value="dinheiro">Dinheiro</option>
            <option value="credit-card">Cartão de crédito</option>
            <option value="debit">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag
          <select name="tag" id="tag" onChange={ this.handleChange }>
            <option value="alimentação">Alimentação</option>
            <option value="lazer">Lazer</option>
            <option value="trabalho">Trabalho</option>
            <option value="transporte">Transporte</option>
            <option value="saúde">Saúde</option>
          </select>
        </label>
        <button
          type="button"
          onClick={ () => this.handleClick(this.state) }
        >
          Adicionar despesa
        </button>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  getCurrencies: () => dispatch(getCurrenciesThunk()),
  currencyExchange: () => dispatch(getCurrencyExpenseThunk()),
  addExpense: (state) => dispatch(addExpenses(state)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Forms);

Forms.propTypes = {
  getCurrencies: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
};
