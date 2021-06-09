import React from 'react';

export default class Form extends React.Component {
  constructor() {
    super();

    this.api = this.api.bind(this);

    this.state = {
      request: [],
    };
  }

  componentDidMount() {
    this.api().then((resolve) => resolve);
  }

  async api() {
    const obj = await fetch('https://economia.awesomeapi.com.br/json/all').then((resolve) => resolve.json());
    const array = Object.values(obj);
    array.splice(1, 1);
    this.setState({ request: array });
  }

  render() {
    const { request } = this.state;
    return (
      <form>
        <label htmlFor="valor">
          Valor:
          <input type="text" id="valor" name="valor" />
        </label>
        <label htmlFor="descricao">
          Descrição:
          <input type="text" id="descricao" name="descricao" />
        </label>
        <label htmlFor="moeda">
          Moeda:
          <select id="moeda" name="moeda">
            { request && request.map((element, index) => (
              <option key={ index }>{ element.code }</option>)) }
          </select>
        </label>
        <label htmlFor="metodo">
          Método de pagamento:
          <select id="metodo" name="metodo">
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="despesas">
          Tag:
          <select id="despesas" name="despesas">
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
