import React, { Component } from 'react';

class Gastos extends Component {
  constructor() {
    super();
    this.state = {
      Currencys: [],
      // currency: 'USD',
      // description: '',
      // method: '',
      // tag: '',
      value: '',
      // id: 0,
    };
    this.getAPI = this.getAPI.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.getCurrency = this.getCurrency.bind(this);
    this.inputCurrency = this.inputCurrency.bind(this);
    this.inputMethod = this.inputMethod.bind(this);
    this.inputCategory = this.inputCategory.bind(this);
  }

  componentDidMount() {
    this.getCurrency();
  }

  async getCurrency() {
    const Data = await this.getAPI();
    const dataKeys = Object.keys(Data);
    const Currencys = dataKeys.filter((item) => item !== 'USDT');
    this.setState({
      Currencys,
    });
  }

  async getAPI() {
    const endPoint = 'https://economia.awesomeapi.com.br/json/all';
    const fetchAPI = await fetch(endPoint);
    const Data = await fetchAPI.json();
    return Data;
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  inputValues() {
    const { value } = this.state;
    return (
      <>
        <label htmlFor="expenses">
          Valor:
          <input
            type="text"
            name="value"
            id="expenses"
            value={ value }
            onChange={ (event) => this.handleChange(event) }
          />
        </label>
        <label htmlFor="description">
          Descrição:
          <textarea
            type="text"
            name="description"
            id="description"
            onChange={ (event) => this.handleChange(event) }
          />
        </label>
      </>
    );
  }

  inputCurrency() {
    const { Currencys } = this.state;
    return (
      <label htmlFor="currency">
        Moeda:
        <select
          name="currency"
          id="currency"
          onChange={ (event) => this.handleChange(event) }
        >
          {Currencys.map((item) => (
            <option
              value={ item }
              key={ item }
            >
              {item}
            </option>))}
        </select>
      </label>
    );
  }

  inputMethod() {
    const methodArray = [
      'Dinheiro', 'Cartão de crédito', 'Cartão de débito',
    ];
    return (
      <label htmlFor="method">
        Método de pagamento:
        <select
          name="method"
          id="method"
          onChange={ (event) => this.handleChange(event) }
        >
          {methodArray.map((method) => (
            <option
              value={ method }
              key={ method }
            >
              {method}
            </option>))}
        </select>
      </label>
    );
  }

  inputCategory() {
    const categoryArray = [
      'Alimentação',
      'Lazer',
      'Trabalho',
      'Transporte',
      'Saúde',
    ];
    return (
      <label htmlFor="tag">
        Tag:
        <select
          name="tag"
          id="tag"
          onChange={ (event) => this.handleChange(event) }
        >
          {categoryArray.map((tag) => (
            <option
              value={ tag }
              key={ tag }
            >
              {tag}
            </option>))}
        </select>
      </label>
    );
  }

  render() {
    return (
      <form>
        { this.inputValues() }
        { this.inputCurrency() }
        { this.inputMethod() }
        { this.inputCategory() }
        <button
          type="button"
          onClick="adicionar"
        >
          Adicionar despesa
        </button>
      </form>
    );
  }
}

export default Gastos;
