import React from 'react';
// import { connect } from 'react-redux';
// import PropTypes from 'prop-types';

import * as api from './api';

import './Wallet.css';

class Forms extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      moedas: [],
    };
    this.apiMoedas = this.apiMoedas.bind(this);
  }

  componentDidMount() {
    this.apiMoedas();
  }

  apiMoedas() {
    api.getMoedas().then((moedas) => {
      delete moedas.USDT;
      this.setState({
        moedas,
      });
    });
  }

  option() {
    const { moedas } = this.state;
    const siglas = Object.keys(moedas);
    return (
      <select id="moeda" name="moeda">
        {siglas.map((moeda) => <option key={ moeda }>{moeda}</option>)}
      </select>
    );
  }

  render() {
    return (
      <form>
        <label htmlFor="valor">
          Valor :
          <input type="text" id="valor" name="valor" />
        </label>
        <label htmlFor="descricao">
          Descrição :
          <input type="text" id="descricao" name="descricao" />
        </label>

        <label htmlFor="moeda">
          Moeda :
          {this.option()}
        </label>

        <label htmlFor="pagamento">
          Método de pagamento :
          <select id="pagamento" name="pagamento">
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>

        <label htmlFor="tag">
          Tag :
          <select id="tag" name="tag">
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

// Header.propTypes = {
//   lerEmail: PropTypes.string,
// }.isRequired;

// const mapStateToProps = (state) => ({
//   lerEmail: state.user.email,
// });

// const mapDispachToProps = (dispatch) => ({
//   updateEmail: (value, tipo) => dispatch(
//     // actionUpdate(value, tipo),
//   ),
// });

export default Forms;
