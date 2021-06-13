import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import * as api from './api';
import { actionGastos } from '../actions';

import './Wallet.css';

class Forms extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      description: '---',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
      exchangeRates: [],
    };
    this.apiMoedas = this.apiMoedas.bind(this);
    this.textfunc = this.textfunc.bind(this);
    this.save = this.save.bind(this);
  }

  componentDidMount() {
    this.apiMoedas();
  }

  save() {
    const { updateGasto } = this.props;
    const { value, description, currency, method, tag, exchangeRates } = this.state;
    this.apiMoedas();
    const expenses = {
      expenses:
      { value, description, currency, method, tag, exchangeRates },
    };
    updateGasto(expenses, 'DESPESA');
  }

  apiMoedas() {
    api.getMoedas().then((exchangeRates) => {
      delete exchangeRates.USDT;
      this.setState({
        exchangeRates,
      });
    });
  }

  textfunc({ target: { value, name } }) {
    this.setState({
      [name]: value,
    });
  }

  option() {
    const { exchangeRates } = this.state;
    const siglas = Object.keys(exchangeRates);
    return (
      <select id="moeda" name="currency" onChange={ this.textfunc }>
        {siglas.map((moeda) => <option key={ moeda }>{moeda}</option>)}
      </select>
    );
  }

  render() {
    return (
      <form>
        <label htmlFor="descricao">
          Descrição :
          <input
            type="text"
            id="descricao"
            name="description"
            onChange={ this.textfunc }
          />
        </label>
        <label htmlFor="valor">
          Valor :
          <input
            type="text"
            id="valor"
            name="value"
            onChange={ this.textfunc }
          />
        </label>
        <label htmlFor="moeda">
          Moeda :
          {this.option()}
        </label>
        <label htmlFor="pagamento">
          Método de pagamento :
          <select id="pagamento" name="method" onChange={ this.textfunc }>
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag :
          <select id="tag" name="tag" onChange={ this.textfunc }>
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
        </label>
        <button type="button" onClick={ this.save }>
          Adicionar despesa
        </button>
      </form>
    );
  }
}

Forms.propTypes = {
  updateGasto: PropTypes.func.isRequired,
};

const mapDispachToProps = (dispatch) => ({
  updateGasto: (value, tipo) => dispatch(
    actionGastos(value, tipo),
  ),
});

export default connect(null, mapDispachToProps)(Forms);
