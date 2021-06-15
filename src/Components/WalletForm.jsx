import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class WalletForm extends Component {
  render() {
    const { currencies } = this.props;
    return (
      <form>
        <label htmlFor="expense-value">
          Valor:
          <input
            type="number"
            id="expense-value"
            name="value"
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="expense-description">
          Descrição:
          <input
            type="text"
            id="expense-description"
            name="description"
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="moeda">
          Moeda
          <select id="moeda" name="currency" onChange={ this.handleChange }>
            {this.returnCurrencies(currencies)}
          </select>
        </label>
        <label htmlFor="método de pagamento">
          Método de Pagamento
          <select id="método de pagamento" name="method" onChange={ this.handleChange }>
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="expense-tag">
          Tag
          <select name="tag" id="expense-tag" onChange={ this.handleChange }>
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>
        <button type="button" onClick={ this.addCost }>Adicionar Despesa</button>
      </form>
    );
  }
}

const currencieFormat = {
  code: PropTypes.string,
  codein: PropTypes.string,
  name: PropTypes.string,
  high: PropTypes.string,
  low: PropTypes.string,
  varBid: PropTypes.string,
  pctChange: PropTypes.string,
  bid: PropTypes.string,
  ask: PropTypes.string,
  timestamp: PropTypes.string,
  create_date: PropTypes.string,
};

WalletForm.propTypes = {
  currencies: PropTypes.shape({
    USD: PropTypes.shape(currencieFormat),
    USDT: PropTypes.shape(currencieFormat),
    CAD: PropTypes.shape(currencieFormat),
    GBP: PropTypes.shape(currencieFormat),
    ARS: PropTypes.shape(currencieFormat),
    BTC: PropTypes.shape(currencieFormat),
    LTC: PropTypes.shape(currencieFormat),
    EUR: PropTypes.shape(currencieFormat),
    JPY: PropTypes.shape(currencieFormat),
    CHF: PropTypes.shape(currencieFormat),
    AUD: PropTypes.shape(currencieFormat),
    CNY: PropTypes.shape(currencieFormat),
    ILS: PropTypes.shape(currencieFormat),
    ETH: PropTypes.shape(currencieFormat),
    XRP: PropTypes.shape(currencieFormat),
    DOGE: PropTypes.shape(currencieFormat),
  }).isRequired,
};
