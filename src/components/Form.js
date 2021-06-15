import React from 'react';
// import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
// import { render } from 'react-dom';

class Form extends React.Component {
  // constructor() {
  // super();
  // }
  //
  // this.state = {
  // value: 0,
  // description: '',
  // currency: 'USD',
  // method: 'Dinheiro',
  // tag: 'Alimentação',
  // };

  render() {
    return (
      <form>
        <label htmlFor="value">
          Valor
          <input type="number" id="value" onChange={ this.handleChange } />
        </label>
        <label htmlFor="description">
          Descrição
          <input type="text" id="description" onChange={ this.handleChange } />
        </label>
        <label htmlFor="currency">
          Moeda
          <select id="currency" onChange={ this.handleChange }>
            <option value="initial">0</option>
          </select>
        </label>

        <label htmlFor="method">
          Método de Pagamento
          <select id="method" onChange={ this.handleChange }>
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de Débito">Cartão de Débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag
          <select id="tag" onChange={ this.handleChange }>
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>
      </form>
    );
  }
}

export default Form;
