import './ExpensesForm.css';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import { fetchCurrencies } from '../actions/index';

class ExpensesForm extends Component {
  componentDidMount() {
    const { startCurrencies } = this.props;
    startCurrencies();
  }

  render() {
    return (
      <fieldset>
        <label htmlFor="valor-input">
          <strong>Valor </strong>
          <input id="valor-input" type="number" name="valor" />
        </label>
        <label htmlFor="descricao-input">
          <strong>Descrição </strong>
          <input id="descricao-input" type="text" name="descricao" />
        </label>
        <label htmlFor="moeda-input">
          <strong>Moeda </strong>
          <select id="moeda-input">
            {' '}
          </select>
        </label>
        <label htmlFor="metodoPagamento-input">
          <strong>Método de pagamento </strong>
          <select id="metodoPagamento-input">
            <option value="money">Dinheiro</option>
            <option value="credit-card">Cartão de crédito</option>
            <option value="debit-card">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="categoria-input">
          <strong>Tag </strong>
          <select id="categoria-input">
            <option value="food">Alimentação</option>
            <option value="leisure">Lazer</option>
            <option value="work">Trabalho</option>
            <option value="transport">Transporte</option>
            <option value="health">Saúde</option>
          </select>
        </label>
      </fieldset>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  startCurrencies: () => dispatch(fetchCurrencies()),
});
export default connect(null, mapDispatchToProps)(ExpensesForm);
