import React from 'react';

class Form extends React.Component {
  constructor() {
    super();

    this.state = {
      coins: [],
    };
  }

  componentDidMount() {
    this.fetchApi();
  }

  async fetchApi() {
    const data = await fetch('https://economia.awesomeapi.com.br/json/all');
    const response = await data.json();
    const coins = Object.keys(response);
    coins.splice(1, 1);
    this.setState({ coins });
  }

  render() {
    const { coins } = this.state;

    return (
      <form>
        <label htmlFor="valor">
          Valor
          <input type="text" name="valor" id="valor" />
        </label>
        <label htmlFor="descricao">
          Descrição
          <input type="text" name="descricao" id="descricao" />
        </label>
        <label htmlFor="moeda">
          Moeda
          <select name="moeda" id="moeda">
            { coins.map((coin) => (
              <option
                key={ coin }
                value={ coin }
              >
                { coin }
              </option>
            )) }
          </select>
        </label>
        <label htmlFor="pagamento">
          Método de pagamento
          <select name="pagamento" id="pagamento">
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag
          <select name="tag" id="tag">
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

export default Form;
