import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Header from './Header';

import { requisitionThunk } from '../actions/index';

import '../App.css';

class Wallet extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      moedas: [],
    };
    this.atualizaMoedas = this.atualizaMoedas.bind(this);
  }

  componentDidMount() {
    const { api } = this.props;
    api().then(() => {
      const { moeda } = this.props;
      this.atualizaMoedas(moeda);
      console.log(moeda);
    });
  }

  atualizaMoedas(moedas) {
    this.setState({ moedas });
  }

  render() {
    const { moedas } = this.state;
    return (
      <section>
        <Header />
        <form>
          <label htmlFor="input-valor">
            Valor:
            <input
              id="input-valor"
            />
          </label>
          <label htmlFor="input-descricao">
            Descrição:
            <input id="input-descricao" />
          </label>
          <label htmlFor="input-moeda">
            Moedas:
            <select id="input-moeda">
              {moedas.filter((currency) => currency !== 'USDT')
                .map((money) => (<option key={ money }>{money}</option>))}
            </select>
          </label>
          <label htmlFor="input-pagamento">
            Método de Pagamento:
            <select id="input-pagamento">
              <option>Dinheiro</option>
              <option>Cartão de crédito</option>
              <option>Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="input-debito">
            Tag
            <select id="input-debito">
              <option>Alimentação</option>
              <option>Lazer</option>
              <option>Trabalho</option>
              <option>Transporte</option>
              <option>Saúde</option>
            </select>
          </label>
        </form>
      </section>
    );
  }
}

Wallet.propTypes = {
  api: PropTypes.func.isRequired,
  moeda: PropTypes.arrayOf().isRequired,
};

const mapStateToProps = (state) => ({
  moeda: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  api: () => dispatch(requisitionThunk()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
