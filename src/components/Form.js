import React from 'react';

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.getData = this.getData.bind(this);

    this.state = {
      currencies: [],
    };
  }

  componentDidMount() {
    this.getData();
  }

  async getData() {
    const URL = 'https://economia.awesomeapi.com.br/json/all';
    const fetchAPI = await fetch(URL);
    const parseJSON = await fetchAPI.json();

    const getCurrencies = Object.keys(parseJSON);
    const removedUSDT = getCurrencies.filter((target) => target !== 'USDT');

    this.setState({
      currencies: [...removedUSDT],
    });
  }

  render() {
    const { currencies } = this.state;

    return (
      <form>
        <label htmlFor="value">
          Valor
          <input type="text" id="value" />
        </label>
        <label htmlFor="description">
          Descrição
          <input type="text" id="description" />
        </label>
        <label htmlFor="currency">
          Moeda
          <select id="currency">
            {currencies.map((currency) => (
              <option key={ currency } value={ currency }>{ currency }</option>
            ))}
          </select>
        </label>
        <label htmlFor="payment-method">
          Método de pagamento
          <select id="payment-method">
            <option value="BRL">Dinheiro</option>
            <option value="BRL">Cartão de crédito</option>
            <option value="BRL">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag
          <select id="tag">
            <option value="BRL">Alimentação</option>
            <option value="BRL">Lazer</option>
            <option value="BRL">Trabalho</option>
            <option value="BRL">Transporte</option>
            <option value="BRL">Saúde</option>
          </select>
        </label>
      </form>
    );
  }
}

export default Form;
