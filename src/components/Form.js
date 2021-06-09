import React from 'react';
import SelectDespesa from './SelectDespesa';
import SelectPay from './SelectPay';

export default class Form extends React.Component {
  constructor() {
    super();

    this.api = this.api.bind(this);

    this.state = {
      request: [],
      valor: '',
      descricao: '',
      moeda: '',
      metodo: '',
      despesas: '',
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

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'select' ? target.checked : target.value;
    console.log(target.type);
    this.setState({ [name]: value });
  }

  render() {
    const { request, valor, descricao, moeda, metodo, despesas } = this.state;
    const { handleChange } = this;
    return (
      <form>
        <label htmlFor="valor">
          Valor:
          <input
            type="text"
            id="valor"
            name="valor"
            value={ valor }
            onChange={ (e) => handleChange(e) }
          />
        </label>
        <label htmlFor="descricao">
          Descrição:
          <input
            type="text"
            id="descricao"
            name="descricao"
            value={ descricao }
            onChange={ (e) => handleChange(e) }
          />
        </label>
        <label htmlFor="moeda">
          Moeda:
          <select
            id="moeda"
            name="moeda"
            value={ moeda }
            onChange={ (e) => handleChange(e) }
          >
            { request && request.map((element, index) => (
              <option key={ index }>{ element.code }</option>)) }
          </select>
        </label>
        <SelectPay metodo={ metodo } handleChange={ handleChange } />
        <SelectDespesa despesas={ despesas } handleChange={ handleChange } />
      </form>
    );
  }
}
