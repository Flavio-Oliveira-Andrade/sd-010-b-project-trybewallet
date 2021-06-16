import React from 'react';

class WalletForm extends React.Component {
  constructor() {
    super();
    this.state = {
      currencies: [],
    };
    this.currencyAPI = this.currencyAPI.bind(this);
  }

  componentDidMount() {
    this.currencyAPI();
  }

  async currencyAPI() {
    await fetch('https://economia.awesomeapi.com.br/json/all')
      .then((response) => response.json())
      .then((response) => this.setState({
        currencies: Object.keys(response),
      }));
  }

  render() {
    const { currencies } = this.state;
    return (
      <form aria-controls="valor">
        <label htmlFor="valor">
          Valor
          <input id="valor" type="number" name="valor" />
        </label>
        <label htmlFor="description">
          Descrição
          <textarea id="description" type="text" name="description" />
        </label>
        <label htmlFor="currency">
          Moeda
          <select id="currency" name="currency">
            {currencies.map((currency) => (
              currency === 'USDT' ? null
                : (<option key={ currency }>{currency}</option>)
            ))}
          </select>
        </label>
        <label htmlFor="payment">
          Método de pagamento
          <select id="payment" name="payment">
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag
          <select id="tag" name="tag">
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
        </label>
      </form>
    );
  }
}

export default WalletForm;
