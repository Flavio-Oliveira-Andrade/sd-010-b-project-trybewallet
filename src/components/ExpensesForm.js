import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Input from './Input';
import Select from './Select';
import getCurrencies from '../services/currenciesAPI';

class ExpensesForm extends Component {
  constructor() {
    super();

    this.state = {
      id: 0,
      value: 0,
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
      exchangeRates: {},
    };

    this.saveCurrencies = this.saveCurrencies.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  async componentDidMount() {
    const currencies = await getCurrencies();

    delete currencies.USDT;
    this.saveCurrencies(currencies);
  }

  saveCurrencies(currencies) {
    this.setState({
      exchangeRates: currencies,
    });
  }

  handleOnSubmit(event) {
    event.preventDefault();
  }

  handleOnChange({ target: { name, value } }) {
    this.setState({
      [name]: value,
    });
  }

  render() {
    const PAYMENT_METHODS = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
    const CATEGORIES = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];

    const { currencies } = this.props;
    const { value, description, currency, method, tag } = this.state;

    return (
      <form onSubmit={ this.handleOnSubmit }>
        <Input
          text="Valor"
          inputName="value"
          value={ value }
          onChange={ this.handleOnChange }
        />
        <Input
          text="Descrição"
          inputName="description"
          value={ description }
          onChange={ this.handleOnChange }
        />
        <Select
          text="Moeda"
          id="currencies"
          options={ currencies }
          name="currency"
          onChange={ this.handleOnChange }
        />
        <Select
          text="Método de Pagamento"
          id="payment_method"
          options={ PAYMENT_METHODS }
          name="method"
          onChange={ this.handleOnChange }
        />
        <Select
          text="Tag"
          id="categories"
          options={ CATEGORIES }
          name="tag"
          onChange={ this.handleOnChange }
        />
        <button type="submit">Adicionar despesa</button>
      </form>
    );
  }
}

ExpensesForm.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ExpensesForm;
