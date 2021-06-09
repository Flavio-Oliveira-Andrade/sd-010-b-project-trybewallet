import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class FormComponent extends Component {
  render() {
    return (
      <form>
        <label htmlFor="valor-input">
          Valor
          <input id="valor-input" type="number" />
        </label>
        <label htmlFor="despesa-input">
          Descrição
          <input id="despesa-input" type="text" />
        </label>
        <label htmlFor="moeda-select">
          Moeda
          <select id="moeda-select">
            <option>BRL</option>
          </select>
        </label>
        <label htmlFor="metodo-select">
          Método de pagamento
          <select id="metodo-select">
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag-select">
          Tag
          <select id="tag-select">
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Saúde</option>
          </select>
        </label>
      </form>
    );
  }
}

export default connect(null, null)(FormComponent);
