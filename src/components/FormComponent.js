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
            <option value="brl">BRL</option>
          </select>
        </label>
        <label htmlFor="metodo-select">
          Método de pagamento
          <select id="metodo-select">
            <option value="dinheiro">Dinheiro</option>
            <option value="cartao-de-credito">Cartão de crédito</option>
            <option value="cartao-de-debito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag-select">
          Tag
          <select id="tag-select">
            <option value="alimentacao">Alimentação</option>
            <option value="lazer">Lazer</option>
            <option value="trabalho">Trabalho</option>
            <option value="saude">Saúde</option>
          </select>
        </label>
      </form>
    );
  }
}

export default connect(null, null)(FormComponent);
