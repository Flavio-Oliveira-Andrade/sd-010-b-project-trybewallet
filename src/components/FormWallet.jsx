import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getCoinsThunk } from '../actions';

class FormWallet extends React.Component {
  componentDidMount() {
    const { getCoins } = this.props;
    getCoins();
  }

  // async fetchAPI() {
  //   return fetch('https://economia.awesomeapi.com.br/json/all')
  //     .then((resultado) => resultado.json());
  // }

  render() {
    const { currencies } = this.props;

    return (
      <form>
        <label htmlFor="valor">
          Valor:
          {' '}
          <input type="text" id="valor" />
        </label>
        <label htmlFor="descricao">
          Descrição:
          {' '}
          <input type="text" id="descricao" />
        </label>
        <label htmlFor="moeda">
          Moeda:
          {' '}
          <select id="moeda">
            {!currencies
              ? <option value="BRL">BRL</option>
              : currencies.map((currency) => (
                <option key={ currency } value={ currency }>{ currency }</option>
              ))}
          </select>
        </label>
        <label htmlFor="pagamento">
          Método de pagamento:
          {' '}
          <select id="pagamento">
            <option value="dinheiro">Dinheiro</option>
            <option value="credito">Cartão de crédito</option>
            <option value="debito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag:
          {' '}
          <select id="tag">
            <option value="alimentacao">Alimentação</option>
            <option value="lazer">Lazer</option>
            <option value="trabalho">Trabalho</option>
            <option value="transporte">Transporte</option>
            <option value="saúde">Saúde</option>
          </select>
        </label>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getCoins: () => dispatch(getCoinsThunk()),
});

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

FormWallet.propTypes = {
  getCoins: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(FormWallet);
