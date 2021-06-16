import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Gastos extends Component {
  constructor() {
    super();
    this.state = {
      Currencys: [],
      currency: 'USD',
      description: '',
      method: 'Dinheiro',
      tag: 'Alimentação',
      value: '',
      id: 0,
    };
    this.getAPI = this.getAPI.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.getCurrency = this.getCurrency.bind(this);
    this.inputCurrency = this.inputCurrency.bind(this);
    this.inputMethod = this.inputMethod.bind(this);
    this.inputCategory = this.inputCategory.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.totalValue = this.totalValue.bind(this);
  }

  componentDidMount() {
    this.getCurrency();
  }

  // https://reactjs.org/docs/react-component.html#componentdidupdate
  componentDidUpdate({ expenses: prevExpenses }) { // criaçao do alias para o eslint
    const { expenses } = this.props;
    if (prevExpenses !== expenses) {
      this.totalValue();
    }
  }

  async getCurrency() {
    const Data = await this.getAPI(); // acesso a API para busca das moedas
    const dataKeys = Object.keys(Data);
    const Currencys = dataKeys.filter((item) => item !== 'USDT'); // Remova das informações trazidas pela API a opção 'USDT' (Dólar Turismo).
    this.setState({
      Currencys,
      exchangeRates: Data,
    });
  }

  async getAPI() {
    const endPoint = 'https://economia.awesomeapi.com.br/json/all'; // acesso a API do projeto
    const fetchAPI = await fetch(endPoint);
    const Data = await fetchAPI.json();
    return Data;
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value, // função generica para atualização do estado dos inputs
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
            onChange={ (event) => this.handleChange(event) } // linha 43
          />
        </label>
        <label htmlFor="description">
          Descrição:
          <textarea
            type="text"
            name="description"
            id="description"
            onChange={ (event) => this.handleChange(event) } // linha 43
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
          onChange={ (event) => this.handleChange(event) } // linha 43
        >
          {Currencys.map((item) => ( // mapeamento das moedas na API para mostragem no select da
            <option // linha 27
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
      'Dinheiro', 'Cartão de crédito', 'Cartão de débito', // array com as formas de pagamento
    ];
    return (
      <label htmlFor="method">
        Método de pagamento:
        <select
          name="method"
          id="method"
          onChange={ (event) => this.handleChange(event) } // linha 43
        >
          {methodArray.map((method) => ( // mapeamento das formas de pagamento para o select
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
    const categoryArray = [ // array com as categorias dos gastos
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
          onChange={ (event) => this.handleChange(event) } // linha 43
        >
          {categoryArray.map((tag) => ( // mapeamento das categorias para o select
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

  handleClick() {
    const { AddDespesa } = this.props;
    let { id } = this.state;

    const { // Os valores dos campos devem ser salvos no estado da aplicação, na chave expenses,
      currency, // dentro de um array contendo todos gastos que serão adicionados:
      description, // verificar no redux do navegador
      method,
      tag,
      value,
      exchangeRates } = this.state;

    this.getCurrency(); // função linha 31

    const object = {
      currency,
      description,
      method,
      tag,
      value,
      exchangeRates,
      id,
    };
    id += 1;

    AddDespesa(object);
    this.setState({
      id,
      // value: '',
    });
  }

  totalValue() {
    const { expenses, AddDespesaTotal } = this.props;
    let count = 0;
    const arrayValues = expenses.map((item) => (
      item.value * (item.exchangeRates[item.currency].ask) // ask = cotação atual da moeda na API
    ));
    for (let i = 0; i < arrayValues.length; i += 1) {
      count += arrayValues[i];
    }
    AddDespesaTotal(count.toFixed(2));
  }

  render() {
    return (
      // função linha 50
      // função linha 77
      // função linha 99
      // função linha 123
      <form>
        { this.inputValues() }
        { this.inputCurrency() }
        { this.inputMethod() }
        { this.inputCategory() }
        <button
          type="button"
          onClick={ () => this.handleClick() }
        >
          Adicionar despesa
        </button>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  AddDespesa: (despesa) => dispatch({ type: 'ADD_DESPESA', despesa }), // enviando as informaçoes de atualização ACTION para || linha 175 || reducer wallet
  AddDespesaTotal: (despesa) => dispatch({ type: 'ADD_DESPESATOTAL', despesa }), // a STORE || linha 191 || reducer wallet
});

Gastos.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
  AddDespesaTotal: PropTypes.func.isRequired,
  AddDespesa: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Gastos);
