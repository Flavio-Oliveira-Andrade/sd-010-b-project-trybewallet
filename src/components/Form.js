import React from 'react';

export default class Form extends React.Component {
  constructor() {
    super();

    this.api = this.api.bind(this);

    this.state = {
      request: '',
    };
  }

  componentDidMount() {
    this.api();
  }

  async api() {
    const obj = await fetch('https://economia.awesomeapi.com.br/json/all').then((resolve) => resolve.json());
    const array = Object.entries(obj);
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
          Descriçao:
          <input type="text" id="descricao" name="descricao" />
        </label>
        <label htmlFor="moeda">
          Moeda:
          <select id="moeda" name="moeda">
            {/* { request.map((element) => <option key>{ element[1].code }</option>) } */}
          </select>
        </label>
        <label htmlFor="metodo">
          Metodo de pagamento:
          <input type="text" id="metodo" name="metodo" />
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
