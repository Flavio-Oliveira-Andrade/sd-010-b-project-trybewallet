import React from 'react';
import Header from '../components/Header';
import { getCurrency } from '../services/api';

class Wallet extends React.Component {
  constructor() {
    super();
    this.state = {
      currencies: [],
    };
  }

  componentDidMount() {
    this.getCurrencies();
  }

  // Lógica de filtra e mapear as moedas desenvolvida com a ajuda de
  // Paulo Henrique Lima - Turma 10

  async getCurrencies() {
    const currencies = await getCurrency();
    const filteredCurrencies = Object
      .keys(currencies).filter((currency) => currency !== 'USDT');
    this.setState({
      currencies: filteredCurrencies,
    });
  }

  render() {
    const { currencies } = this.state;
    return (
      <div>
        <Header />
        <form>
          <label htmlFor="valor">
            Valor
            <input type="text" id="valor" />
          </label>
          <label htmlFor="descricao">
            Descrição
            <input type="text" id="descricao" />
          </label>
          <label htmlFor="moeda">
            Moeda
            <select id="moeda">
              { currencies.map((curr, index) => (
                <option key={ index }>{ curr }</option>
              )) }
            </select>
          </label>
          <label htmlFor="metodo">
            Método de pagamento
            <select>
              <option>Dinheiro</option>
              <option>Cartão de crédito</option>
              <option>Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="tag">
            Tag
            <select id="tag">
              <option value="alimentacao">Alimentação</option>
              <option value="lazer">Lazer</option>
              <option value="trabalho">Trabalho</option>
              <option value="transporte">Transporte</option>
              <option value="saude">Saúde</option>
            </select>
          </label>
        </form>
      </div>
    );
  }
}

export default Wallet;
