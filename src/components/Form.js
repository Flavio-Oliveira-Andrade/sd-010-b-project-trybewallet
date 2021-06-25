import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchAPI, saveExpenses } from '../actions/walletActions';

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: -1,
      value: 0,
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
      exchangeRates: {},
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    const { formSaveCurrencies } = this.props;
    formSaveCurrencies();
  }

  handleChange({ target }) {
    const { id, value } = target;
    this.setState({
      [id]: value,
    });
  }

  async handleClick() {
    const { formSaveCurrencies, getCurrency, formSaveExpenses } = this.props;
    await formSaveCurrencies();

    this.setState((oldState) => ({
      id: oldState.id + 1,
      exchangeRates: getCurrency,
    }));

    formSaveExpenses(this.state);
  }

  functionValue() {
    return (
      <label htmlFor="value">
        Valor
        <input
          type="number"
          id="value"
          data-testid="value-input"
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  functionDescription() {
    return (
      <label htmlFor="description">
        Descrição
        <input
          type="text"
          id="description"
          data-testid="description-input"
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  functionCurrency() {
    const { getCurrency } = this.props;
    const currenciesKeys = Object.keys(getCurrency);

    return (
      <label htmlFor="currency">
        Moeda
        <select
          id="currency"
          data-testid="currency-input"
          onChange={ this.handleChange }
        >
          {
            currenciesKeys.map((currency, key) => (
              <option key={ key } value={ currency }>{currency}</option>))
          }
        </select>
      </label>
    );
  }

  functionMethod() {
    const { method } = this.state;
    return (
      <label htmlFor="method">
        Método de pagamento
        <select
          id="method"
          data-testid="method-input"
          onChange={ this.handleChange }
          value={ method }
        >
          <option value="Dinheiro">Dinheiro</option>
          <option value="Cartão de crédito">Cartão de crédito</option>
          <option value="Cartão de débito">Cartão de débito</option>
        </select>
      </label>
    );
  }

  functionTag() {
    const { tag } = this.state;
    return (
      <label htmlFor="tag">
        Tag
        <select
          id="tag"
          data-testid="tag-input"
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

  render() {
    return (
      <form>
        { this.functionValue() }
        { this.functionDescription() }
        { this.functionCurrency() }
        { this.functionMethod() }
        { this.functionTag() }
        <button
          type="button"
          onClick={ this.handleClick }
        >
          Adicionar despesa
        </button>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  getCurrency: state.wallet.currencies,
  getExpenses: state.wallet.expenses,
});

const mapDispathToProps = (dispatch) => ({
  formSaveCurrencies: () => dispatch(fetchAPI()),
  formSaveExpenses: (state) => dispatch(saveExpenses(state)),
});

Form.propTypes = {
  formSaveCurrencies: PropTypes.func.isRequired,
  getCurrency: PropTypes.func.isRequired,
  formSaveExpenses: PropTypes.func.isRequired,
  
};

export default connect(mapStateToProps, mapDispathToProps)(Form);
